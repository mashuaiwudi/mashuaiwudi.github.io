#!/usr/bin/env node

import { createReadStream } from "node:fs";
import { writeFile } from "node:fs/promises";
import { createInterface } from "node:readline";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import {
  WORKFLOW,
  assessmentFor,
  assertHeader,
  buildTask,
  parseCSVRecord,
  parseValue,
  readHeader,
} from "./convert_weburl_to_agentic_tasks.mjs";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(SCRIPT_DIR, "..");
const INPUT = path.join(PROJECT_ROOT, "WebURL.csv");
const JSON_OUTPUT = path.join(PROJECT_ROOT, "data", "phishing_study_100.json");
const JS_OUTPUT = path.join(PROJECT_ROOT, "data", "phishing_study_100.js");
const STRING_FEATURE_COLUMNS = new Set(["Domain", "TLD", "Title"]);
const EXCLUDED_FEATURE_COLUMNS = new Set(["FILENAME", "URL", "label"]);
const PER_LABEL_QUOTA = { correct: 35, incorrect: 15 };
const PHASE_PER_LABEL_QUOTA = { correct: 7, incorrect: 3 };

function bucketName(groundTruth, correct) {
  return `${groundTruth}_${correct ? "CORRECT" : "INCORRECT"}`;
}

function isEligibleChallenge(row, assessment) {
  return assessment.boundaryCase
    && assessment.evidenceConflict
    && row.HasTitle === 1
    && row.Title.trim().length >= 3
    && row.LineOfCode >= 10
    && row.Domain.includes(".")
    && row.IsDomainIP === 0;
}

function challengeScore(row, assessment) {
  const boundaryDistance = Math.abs(assessment.phishingScore - 0.5);
  const signalImbalance = Math.abs(
    assessment.suspiciousSignals.length - assessment.protectiveSignals.length,
  );
  const veryShortPagePenalty = row.LineOfCode < 30 ? 0.025 : 0;
  const extremeSimilarityPenalty = row.URLSimilarityIndex < 45 || row.URLSimilarityIndex > 99.5
    ? 0.012
    : 0;
  const obviousCredentialTheftPenalty = row.HasExternalFormSubmit && row.HasPasswordField
    ? 0.015
    : 0;
  return boundaryDistance
    + signalImbalance * 0.002
    + veryShortPagePenalty
    + extremeSimilarityPenalty
    + obviousCredentialTheftPenalty;
}

function keepBestCandidate(buckets, bucket, candidate, capacity = 500) {
  const items = buckets[bucket];
  items.push(candidate);
  items.sort((left, right) => (
    left.challengeScore - right.challengeScore
    || left.csvRowNumber - right.csvRowNumber
  ));
  if (items.length > capacity) items.pop();
}

function selectUniqueCandidates(buckets) {
  const quotas = {
    PHISHING_CORRECT: PER_LABEL_QUOTA.correct,
    PHISHING_INCORRECT: PER_LABEL_QUOTA.incorrect,
    LEGITIMATE_CORRECT: PER_LABEL_QUOTA.correct,
    LEGITIMATE_INCORRECT: PER_LABEL_QUOTA.incorrect,
  };
  const selected = Object.fromEntries(Object.keys(quotas).map((bucket) => [bucket, []]));
  const seenDomains = new Set();

  for (const bucket of Object.keys(quotas)) {
    for (const candidate of buckets[bucket]) {
      const normalizedDomain = candidate.row.Domain.toLowerCase();
      if (seenDomains.has(normalizedDomain)) continue;
      selected[bucket].push(candidate);
      seenDomains.add(normalizedDomain);
      if (selected[bucket].length === quotas[bucket]) break;
    }
    if (selected[bucket].length !== quotas[bucket]) {
      throw new Error(
        `${bucket}: needed ${quotas[bucket]} unique-domain candidates but found ${selected[bucket].length}.`,
      );
    }
  }
  return selected;
}

function takeFromBucket(selected, bucket, start, count) {
  const tasks = selected[bucket].slice(start, start + count);
  if (tasks.length !== count) throw new Error(`${bucket}: unable to take ${count} tasks at ${start}.`);
  return tasks;
}

function interleaveBalancedPhase(phishingCorrect, phishingIncorrect, legitimateCorrect, legitimateIncorrect) {
  const correctnessPattern = ["correct", "correct", "incorrect", "correct", "correct", "incorrect", "correct", "correct", "incorrect", "correct"];
  const queues = {
    phishing: { correct: [...phishingCorrect], incorrect: [...phishingIncorrect] },
    legitimate: { correct: [...legitimateCorrect], incorrect: [...legitimateIncorrect] },
  };
  const phase = [];
  for (let index = 0; index < correctnessPattern.length; index += 1) {
    const phishingKind = correctnessPattern[index];
    const legitimateKind = correctnessPattern[(index + 3) % correctnessPattern.length];
    phase.push(queues.phishing[phishingKind].shift());
    phase.push(queues.legitimate[legitimateKind].shift());
  }
  if (phase.some((item) => !item)) throw new Error("Balanced phase interleave exhausted a quota bucket.");
  return phase;
}

function createPhase(selected, offset) {
  return interleaveBalancedPhase(
    takeFromBucket(selected, "PHISHING_CORRECT", offset.correct, PHASE_PER_LABEL_QUOTA.correct),
    takeFromBucket(selected, "PHISHING_INCORRECT", offset.incorrect, PHASE_PER_LABEL_QUOTA.incorrect),
    takeFromBucket(selected, "LEGITIMATE_CORRECT", offset.correct, PHASE_PER_LABEL_QUOTA.correct),
    takeFromBucket(selected, "LEGITIMATE_INCORRECT", offset.incorrect, PHASE_PER_LABEL_QUOTA.incorrect),
  );
}

function createReserve(selected) {
  const queues = {
    PHISHING_CORRECT: selected.PHISHING_CORRECT.slice(14),
    PHISHING_INCORRECT: selected.PHISHING_INCORRECT.slice(6),
    LEGITIMATE_CORRECT: selected.LEGITIMATE_CORRECT.slice(14),
    LEGITIMATE_INCORRECT: selected.LEGITIMATE_INCORRECT.slice(6),
  };
  const order = [
    "PHISHING_CORRECT",
    "LEGITIMATE_CORRECT",
    "PHISHING_INCORRECT",
    "LEGITIMATE_INCORRECT",
  ];
  const reserve = [];
  while (Object.values(queues).some((queue) => queue.length > 0)) {
    for (const bucket of order) {
      if (queues[bucket].length > 0) reserve.push(queues[bucket].shift());
    }
  }
  return reserve;
}

function summarizeTasks(tasks) {
  const summary = {
    count: tasks.length,
    ground_truth: { PHISHING: 0, LEGITIMATE: 0 },
    agent_correct: 0,
    agent_incorrect: 0,
    boundary_cases: 0,
    evidence_conflicts: 0,
  };
  for (const task of tasks) {
    summary.ground_truth[task.ground_truth.verdict] += 1;
    summary[task.agent_decision_correct ? "agent_correct" : "agent_incorrect"] += 1;
    if (task.tool_results.security_signal_summary.boundary_case) summary.boundary_cases += 1;
    if (task.tool_results.security_signal_summary.evidence_conflict) summary.evidence_conflicts += 1;
  }
  summary.agent_accuracy = summary.agent_correct / summary.count;
  return summary;
}

function assertStudyQuotas(allTasks, phaseOne, phaseTwo) {
  const all = summarizeTasks(allTasks);
  const first = summarizeTasks(phaseOne);
  const second = summarizeTasks(phaseTwo);
  const validAll = all.count === 100
    && all.ground_truth.PHISHING === 50
    && all.ground_truth.LEGITIMATE === 50
    && all.agent_correct === 70
    && all.agent_incorrect === 30;
  const validPhase = (summary) => summary.count === 20
    && summary.ground_truth.PHISHING === 10
    && summary.ground_truth.LEGITIMATE === 10
    && summary.agent_correct === 14
    && summary.agent_incorrect === 6;
  if (!validAll || !validPhase(first) || !validPhase(second)) {
    throw new Error(`Study quota validation failed: ${JSON.stringify({ all, first, second })}`);
  }
  return { all, phase_one: first, phase_two: second };
}

async function main() {
  const header = await readHeader(INPUT);
  assertHeader(header);
  const featureColumns = header.filter((column) => !EXCLUDED_FEATURE_COLUMNS.has(column));
  const buckets = {
    PHISHING_CORRECT: [],
    PHISHING_INCORRECT: [],
    LEGITIMATE_CORRECT: [],
    LEGITIMATE_INCORRECT: [],
  };
  const input = createReadStream(INPUT, { encoding: "utf8" });
  const lines = createInterface({ input, crlfDelay: Infinity });
  let csvRowNumber = 0;
  let taskIndex = 0;

  for await (const line of lines) {
    csvRowNumber += 1;
    if (csvRowNumber === 1 || line.length === 0) continue;
    taskIndex += 1;
    const rawValues = parseCSVRecord(line);
    if (rawValues.length !== header.length) {
      throw new Error(`Row ${csvRowNumber}: expected ${header.length} values, found ${rawValues.length}.`);
    }
    const row = {};
    for (let index = 0; index < header.length; index += 1) {
      row[header[index]] = parseValue(header[index], rawValues[index], csvRowNumber);
    }
    const assessment = assessmentFor(row);
    if (!isEligibleChallenge(row, assessment)) continue;
    const groundTruth = row.label === 1 ? "LEGITIMATE" : "PHISHING";
    const correct = assessment.verdict === groundTruth;
    const bucket = bucketName(groundTruth, correct);
    keepBestCandidate(buckets, bucket, {
      row,
      assessment,
      challengeScore: challengeScore(row, assessment),
      taskIndex,
      csvRowNumber,
      bucket,
    });
  }

  const selected = selectUniqueCandidates(buckets);
  const phaseOneCandidates = createPhase(selected, { correct: 0, incorrect: 0 });
  const phaseTwoCandidates = createPhase(selected, { correct: 7, incorrect: 3 });
  const reserveCandidates = createReserve(selected);
  const orderedCandidates = [...phaseOneCandidates, ...phaseTwoCandidates, ...reserveCandidates];
  const examples = orderedCandidates.map((candidate, selectionIndex) => {
    const task = buildTask(
      candidate.row,
      featureColumns,
      candidate.taskIndex,
      candidate.csvRowNumber,
    );
    task.selection = {
      selection_index: selectionIndex,
      bucket: candidate.bucket,
      challenge_score: Math.round(candidate.challengeScore * 1_000_000) / 1_000_000,
      distance_from_phishing_boundary: Math.round(
        Math.abs(candidate.assessment.phishingScore - 0.5) * 1_000_000,
      ) / 1_000_000,
      criteria: [
        "phishing_score_between_0.4_and_0.6",
        "conflicting_security_signals",
        "usable_page_title",
        "archived_page_content_available",
        "unique_domain_within_selection",
      ],
    };
    return task;
  });

  const phaseOne = examples.slice(0, 20);
  const phaseTwo = examples.slice(20, 40);
  const reserve = examples.slice(40);
  const statistics = assertStudyQuotas(examples, phaseOne, phaseTwo);
  const dataset = {
    metadata: {
      source_file: "WebURL.csv",
      source_dataset: "PhiUSIIL WebURL",
      selected_count: 100,
      selection: "High-challenge boundary cases with conflicting evidence, balanced labels, and controlled agent error quotas.",
      label_mapping: { "0": "PHISHING", "1": "LEGITIMATE" },
      dataset_feature_count_per_task: 54,
      feature_vector_count_per_task: featureColumns.length,
      study_design: {
        phase_one_name: "agent_final_authority_with_mandatory_advice",
        phase_one_task_ids: phaseOne.map((task) => task.id),
        phase_one_interaction: {
          human_input: "ADVICE",
          human_choice_required: true,
          agent_may_accept_or_reject: true,
          final_authority: "AGENT",
        },
        questionnaire_after_phase_one: true,
        phase_two_name: "permission_checkpoint_with_binding_human_decision",
        phase_two_task_ids: phaseTwo.map((task) => task.id),
        phase_two_interaction: {
          agent_reveals_initial_judgment: true,
          choices: ["LET_AGENT_DECIDE", "BINDING_HUMAN_JUDGMENT"],
          let_agent_decide_rule: "RETAIN_AGENT_INITIAL_JUDGMENT",
          binding_human_judgment_rule: "FOLLOW_HUMAN_JUDGMENT",
          final_authority: "HUMAN_PERMISSION",
        },
        practice_task_id: reserve[0].id,
        reserve_task_ids: reserve.slice(1).map((task) => task.id),
        per_phase_constraints: {
          task_count: 20,
          phishing: 10,
          legitimate: 10,
          agent_correct: 14,
          agent_incorrect: 6,
        },
        full_selection_constraints: {
          task_count: 100,
          phishing: 50,
          legitimate: 50,
          agent_correct: 70,
          agent_incorrect: 30,
        },
      },
      notes: "The agent initial assessment is computed without the ground-truth label. Labels are used only for quota-controlled study sampling and outcome evaluation.",
    },
    feature_schema: featureColumns.map((name, index) => ({
      index,
      name,
      type: STRING_FEATURE_COLUMNS.has(name) ? "string" : "number",
    })),
    workflow: WORKFLOW,
    examples,
    statistics,
  };
  const json = JSON.stringify(dataset, null, 2)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
  await Promise.all([
    writeFile(JSON_OUTPUT, `${json}\n`, "utf8"),
    writeFile(JS_OUTPUT, `window.PHISHING_STUDY_DATA = ${json};\n`, "utf8"),
  ]);
  process.stdout.write(`${JSON.stringify(statistics, null, 2)}\n`);
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});
