import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.resolve(scriptDir, "../data/phishing_study_100.json");
const outputDir = path.resolve(scriptDir, "data");
const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const sourceById = new Map(source.examples.map((task) => [task.id, task]));
const design = source.metadata.study_design;

function cloneTask(taskId, role) {
  const original = sourceById.get(taskId);
  if (!original) {
    throw new Error(`Missing source task: ${taskId}`);
  }

  const task = structuredClone(original);
  const originalAgentVerdict = task.agent_decision.verdict;
  const correctVerdict = task.ground_truth.verdict;
  const primaryAction =
    correctVerdict === "PHISHING" ? "QUARANTINE_LINK" : "ALLOW_LINK";

  task.study2 = {
    role,
    source_task_id: task.id,
    source_agent_verdict: originalAgentVerdict,
    source_agent_correct: originalAgentVerdict === correctVerdict,
    experimental_agent_policy: "ORACLE_100_PERCENT_ACCURATE",
  };
  task.agent_decision = {
    ...task.agent_decision,
    verdict: correctVerdict,
    primary_action: primaryAction,
    source: "study2_validated_security_agent",
  };
  task.agent_decision_correct = true;
  task.tool_results.security_signal_summary.initial_verdict = correctVerdict;
  task.tool_results.security_signal_summary.model_id =
    "study2_validated_security_agent";
  task.golden_decision.primary_action = primaryAction;
  return task;
}

const formalTasks = design.phase_one_task_ids.map((id) =>
  cloneTask(id, "FORMAL"),
);
const practiceTask = cloneTask(design.practice_task_id, "PRACTICE");
const labelCounts = formalTasks.reduce(
  (counts, task) => {
    counts[task.ground_truth.verdict] += 1;
    return counts;
  },
  { PHISHING: 0, LEGITIMATE: 0 },
);

if (
  formalTasks.length !== 20 ||
  labelCounts.PHISHING !== 10 ||
  labelCounts.LEGITIMATE !== 10 ||
  !formalTasks.every((task) => task.agent_decision_correct)
) {
  throw new Error(
    `Study 2 validation failed: ${JSON.stringify({
      taskCount: formalTasks.length,
      labelCounts,
      agentCorrect: formalTasks.filter((task) => task.agent_decision_correct)
        .length,
    })}`,
  );
}

const output = {
  metadata: {
    dataset_name: "Study 2: Strong Agent Rejection",
    generated_at: new Date().toISOString(),
    source_file: "../data/phishing_study_100.json",
    source_selection: "Study 1 Phase 1 task IDs",
    study_design: {
      formal_task_ids: formalTasks.map((task) => task.id),
      practice_task_id: practiceTask.id,
      task_count: 20,
      phishing_count: labelCounts.PHISHING,
      legitimate_count: labelCounts.LEGITIMATE,
      agent_correct_count: 20,
      agent_accuracy: 1,
      public_performance_statement:
        "The agent has been extensively evaluated in this task domain and achieved an accuracy above 90%.",
      factors: {
        explanation: ["NO_EXPLANATION", "CASE_SPECIFIC_EXPLANATION"],
        final_override: ["NO_OVERRIDE", "HUMAN_OVERRIDE"],
      },
    },
  },
  workflow: source.workflow,
  feature_schema: source.feature_schema,
  practice_task: practiceTask,
  tasks: formalTasks,
};

fs.mkdirSync(outputDir, { recursive: true });
const json = `${JSON.stringify(output, null, 2)}\n`;
fs.writeFileSync(path.join(outputDir, "study2_tasks.json"), json);
fs.writeFileSync(
  path.join(outputDir, "study2_tasks.js"),
  `window.STUDY2_DATA = ${json.trim()};\n`,
);

console.log(
  `Wrote ${formalTasks.length} formal tasks (${labelCounts.PHISHING} phishing, ${labelCounts.LEGITIMATE} legitimate), Agent correct ${formalTasks.filter((task) => task.agent_decision_correct).length}/${formalTasks.length}.`,
);
