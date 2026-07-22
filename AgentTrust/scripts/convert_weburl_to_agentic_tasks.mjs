#!/usr/bin/env node

import { createReadStream, createWriteStream } from "node:fs";
import { open } from "node:fs/promises";
import { once } from "node:events";
import { createInterface } from "node:readline";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(SCRIPT_DIR, "..");
const DEFAULT_INPUT = path.join(PROJECT_ROOT, "WebURL.csv");
const DEFAULT_JSON_OUTPUT = path.join(PROJECT_ROOT, "data", "phishing_agentic_tasks.json");
const DEFAULT_JS_OUTPUT = path.join(PROJECT_ROOT, "data", "phishing_agentic_tasks.js");

const STRING_COLUMNS = new Set(["FILENAME", "URL", "Domain", "TLD", "Title"]);
const EXCLUDED_FEATURE_COLUMNS = new Set(["FILENAME", "URL", "label"]);
const EXPECTED_COLUMNS = [
  "FILENAME",
  "URL",
  "URLLength",
  "Domain",
  "DomainLength",
  "IsDomainIP",
  "TLD",
  "URLSimilarityIndex",
  "CharContinuationRate",
  "TLDLegitimateProb",
  "URLCharProb",
  "TLDLength",
  "NoOfSubDomain",
  "HasObfuscation",
  "NoOfObfuscatedChar",
  "ObfuscationRatio",
  "NoOfLettersInURL",
  "LetterRatioInURL",
  "NoOfDegitsInURL",
  "DegitRatioInURL",
  "NoOfEqualsInURL",
  "NoOfQMarkInURL",
  "NoOfAmpersandInURL",
  "NoOfOtherSpecialCharsInURL",
  "SpacialCharRatioInURL",
  "IsHTTPS",
  "LineOfCode",
  "LargestLineLength",
  "HasTitle",
  "Title",
  "DomainTitleMatchScore",
  "URLTitleMatchScore",
  "HasFavicon",
  "Robots",
  "IsResponsive",
  "NoOfURLRedirect",
  "NoOfSelfRedirect",
  "HasDescription",
  "NoOfPopup",
  "NoOfiFrame",
  "HasExternalFormSubmit",
  "HasSocialNet",
  "HasSubmitButton",
  "HasHiddenFields",
  "HasPasswordField",
  "Bank",
  "Pay",
  "Crypto",
  "HasCopyrightInfo",
  "NoOfImage",
  "NoOfCSS",
  "NoOfJS",
  "NoOfSelfRef",
  "NoOfEmptyRef",
  "NoOfExternalRef",
  "label",
];

const SIGNAL_CATALOG = {
  domain_is_ip: {
    polarity: "suspicious",
    description: "The host is an IP address rather than a named domain.",
  },
  domain_obfuscation: {
    polarity: "suspicious",
    description: "The URL contains obfuscated characters or an obfuscation pattern.",
  },
  many_subdomains: {
    polarity: "suspicious",
    description: "The hostname contains an unusually deep subdomain chain.",
  },
  low_url_similarity: {
    polarity: "suspicious",
    description: "The URL has a low similarity score against the dataset legitimacy reference.",
  },
  low_tld_reputation: {
    polarity: "suspicious",
    description: "The top-level domain has a low legitimacy prior in the dataset.",
  },
  no_https: {
    polarity: "suspicious",
    description: "The observed page does not use HTTPS.",
  },
  missing_title: {
    polarity: "suspicious",
    description: "The page has no usable HTML title.",
  },
  title_domain_mismatch: {
    polarity: "suspicious",
    description: "The title has a weak match with both the domain and the URL.",
  },
  external_form_submit: {
    polarity: "suspicious",
    description: "A form submits data to an external origin.",
  },
  credential_form: {
    polarity: "suspicious",
    description: "The page contains a password field.",
  },
  hidden_form_fields: {
    polarity: "suspicious",
    description: "The page contains hidden form fields.",
  },
  redirect_activity: {
    polarity: "suspicious",
    description: "One or more URL redirects were observed in the archived page snapshot.",
  },
  high_special_character_ratio: {
    polarity: "suspicious",
    description: "The URL contains a high proportion of special characters.",
  },
  high_url_similarity: {
    polarity: "protective",
    description: "The URL strongly matches the dataset legitimacy reference.",
  },
  https_enabled: {
    polarity: "protective",
    description: "The observed page uses HTTPS.",
  },
  title_domain_match: {
    polarity: "protective",
    description: "The page title strongly matches the domain or URL.",
  },
  same_origin_form: {
    polarity: "protective",
    description: "The page has a submit control but no external form action was detected.",
  },
  identity_assets_present: {
    polarity: "protective",
    description: "Multiple normal site identity signals are present, such as favicon, social links, or copyright information.",
  },
  no_credential_exfiltration: {
    polarity: "protective",
    description: "No password field or external form submission was detected.",
  },
};

const WORKFLOW = {
  id: "phishing_url_investigation_v1",
  version: 1,
  agent_role: "Enterprise web security investigation and response agent",
  objective: "Investigate one suspicious URL, pause once for optional human judgment, make the final phishing decision, and execute the matching containment or release workflow.",
  execution_mode: {
    kind: "offline_dataset_replay",
    live_navigation: false,
    note: "Tool results are reconstructed from the archived PhiUSIIL feature row. The workflow must not visit or submit data to the recorded URL.",
  },
  task_contract: {
    input: "One archived URL and its PhiUSIIL URL/page-source feature snapshot.",
    final_decisions: ["PHISHING", "LEGITIMATE"],
    final_authority: "agent",
    evaluation_source: "task.ground_truth.verdict",
  },
  investigation_steps: [
    {
      id: "expand_and_parse_url",
      phase: "investigation",
      type: "tool_call",
      tool: "url_tools.expand_and_parse_snapshot",
      depends_on: [],
      input: { url: "{{task.url}}" },
      result: "{{task.tool_results.url_expansion}}",
      next: "query_domain_information",
    },
    {
      id: "query_domain_information",
      phase: "investigation",
      type: "tool_call",
      tool: "domain_intelligence.lookup_snapshot",
      depends_on: ["expand_and_parse_url"],
      input: { domain: "{{task.tool_results.url_expansion.final_domain}}" },
      result: "{{task.tool_results.domain_information}}",
      next: "inspect_redirects",
    },
    {
      id: "inspect_redirects",
      phase: "investigation",
      type: "tool_call",
      tool: "browser_security.inspect_redirect_snapshot",
      depends_on: ["expand_and_parse_url"],
      input: { url: "{{task.url}}" },
      result: "{{task.tool_results.redirect_analysis}}",
      next: "analyze_title_domain_match",
    },
    {
      id: "analyze_title_domain_match",
      phase: "investigation",
      type: "tool_call",
      tool: "page_security.compare_title_and_domain",
      depends_on: ["query_domain_information"],
      input: {
        domain: "{{task.tool_results.domain_information.domain}}",
        title: "{{task.tool_results.title_domain_analysis.title}}",
      },
      result: "{{task.tool_results.title_domain_analysis}}",
      next: "inspect_login_form",
    },
    {
      id: "inspect_login_form",
      phase: "investigation",
      type: "tool_call",
      tool: "page_security.inspect_form_snapshot",
      depends_on: ["expand_and_parse_url"],
      input: { url: "{{task.url}}" },
      result: "{{task.tool_results.login_form_analysis}}",
      next: "compare_with_official_site",
    },
    {
      id: "compare_with_official_site",
      phase: "investigation",
      type: "tool_call",
      tool: "brand_registry.compare_legitimacy_reference",
      depends_on: ["query_domain_information", "analyze_title_domain_match"],
      input: {
        url: "{{task.url}}",
        domain: "{{task.tool_results.domain_information.domain}}",
      },
      result: "{{task.tool_results.official_site_comparison}}",
      next: "extract_security_features",
    },
    {
      id: "extract_security_features",
      phase: "investigation",
      type: "tool_call",
      tool: "feature_engine.extract_phiusiil_snapshot",
      depends_on: [
        "query_domain_information",
        "inspect_redirects",
        "analyze_title_domain_match",
        "inspect_login_form",
        "compare_with_official_site",
      ],
      input: { source_row: "{{task.source.row_number}}" },
      result: {
        schema: "{{dataset.feature_schema}}",
        values: "{{task.feature_values}}",
      },
      next: "summarize_security_signals",
    },
    {
      id: "summarize_security_signals",
      phase: "investigation",
      type: "tool_call",
      tool: "security_reasoner.aggregate_signals",
      depends_on: ["extract_security_features"],
      input: { feature_values: "{{task.feature_values}}" },
      result: "{{task.tool_results.security_signal_summary}}",
      next: "human_advice_checkpoint",
    },
  ],
  decision_step: {
    id: "human_advice_checkpoint",
    phase: "decision",
    type: "decision",
    intervention: true,
    single_intervention: true,
    content: "The agent pauses after its evidence collection. A human security judgment consultant may provide one recommendation; the agent retains final authority.",
    human_advice: {
      optional: true,
      choices: [
        {
          id: "ADVISE_PHISHING",
          verdict: "PHISHING",
          label: "I think this is a phishing site.",
        },
        {
          id: "ADVISE_LEGITIMATE",
          verdict: "LEGITIMATE",
          label: "I think this is a legitimate site.",
        },
      ],
      rationale_allowed: true,
    },
    agent_response_modes: [
      "ADOPT_ADVICE",
      "REJECT_ADVICE",
      "PARTIALLY_CONSIDER_ADVICE",
      "REQUEST_RATIONALE",
    ],
    reliance_conditions_supported: [
      "OVER_RELIANCE",
      "UNDER_RELIANCE",
      "CALIBRATED_RELIANCE",
    ],
    next: "make_final_decision",
  },
  final_decision_step: {
    id: "make_final_decision",
    phase: "decision",
    type: "decision",
    decision_rule: "Combine the archived security evidence, the agent's initial assessment, and any human advice according to the experiment's reliance condition. Always resolve to PHISHING or LEGITIMATE.",
    output: {
      verdict: "{{runtime.final_verdict}}",
      reliance_response: "{{runtime.reliance_response}}",
      rationale_summary: "{{runtime.final_rationale_summary}}",
    },
    branches: {
      PHISHING: "phishing_response",
      LEGITIMATE: "legitimate_response",
    },
  },
  response_branches: {
    phishing_response: {
      when: "{{runtime.final_verdict}} == 'PHISHING'",
      primary_action: "QUARANTINE_LINK",
      steps: [
        {
          id: "report_indicator",
          type: "tool_call",
          tool: "threat_intelligence.submit_indicator",
          input: {
            url: "{{task.url}}",
            evidence: "{{task.tool_results.security_signal_summary}}",
          },
          output: { report_id: "{{runtime.threat_report_id}}", status: "SUBMITTED" },
        },
        {
          id: "quarantine_and_block",
          type: "action",
          tool: "secure_web_gateway.quarantine_url",
          depends_on: ["report_indicator"],
          input: { url: "{{task.url}}", scope: "ORGANIZATION" },
          output: { access: "BLOCKED", quarantine: "ACTIVE" },
        },
        {
          id: "search_and_contain_exposure",
          type: "action",
          tool: "email_security.search_and_contain",
          depends_on: ["quarantine_and_block"],
          input: { indicator: "{{task.url}}", recall_matching_messages: true },
          output: { exposure_search: "COMPLETED", messages_recalled: "{{runtime.recalled_count}}" },
        },
        {
          id: "create_security_case",
          type: "action",
          tool: "incident_response.create_case",
          depends_on: ["report_indicator", "search_and_contain_exposure"],
          input: {
            threat_report_id: "{{runtime.threat_report_id}}",
            include_agent_evidence: true,
            include_human_advice_audit: true,
          },
          output: { case_id: "{{runtime.case_id}}", status: "OPEN_FOR_MONITORING" },
        },
        {
          id: "phishing_final_result",
          type: "final_result",
          status: "CONTAINED",
          content: "The link was reported, blocked, exposure-checked, and attached to a security case.",
        },
      ],
    },
    legitimate_response: {
      when: "{{runtime.final_verdict}} == 'LEGITIMATE'",
      primary_action: "ALLOW_LINK",
      steps: [
        {
          id: "validate_allowlist_scope",
          type: "tool_call",
          tool: "allowlist.validate_scope",
          input: {
            url: "{{task.url}}",
            scope: "EXACT_URL_OR_DOMAIN",
            check_conflicting_threat_reports: true,
          },
          output: { validation: "{{runtime.allowlist_validation}}" },
        },
        {
          id: "release_quarantine",
          type: "action",
          tool: "secure_web_gateway.release_quarantine",
          depends_on: ["validate_allowlist_scope"],
          input: { url: "{{task.url}}" },
          output: { access: "ALLOWED", quarantine: "RELEASED" },
        },
        {
          id: "add_allowlist_entry",
          type: "action",
          tool: "threat_intelligence.add_allowlist_entry",
          depends_on: ["validate_allowlist_scope", "release_quarantine"],
          input: {
            indicator: "{{task.tool_results.domain_information.domain}}",
            scope: "VALIDATED_EXACT_SCOPE",
            evidence: "{{task.tool_results.security_signal_summary}}",
          },
          output: { allowlist: "UPDATED", entry_id: "{{runtime.allowlist_entry_id}}" },
        },
        {
          id: "close_false_positive_alert",
          type: "action",
          tool: "case_management.close_alert",
          depends_on: ["add_allowlist_entry"],
          input: {
            disposition: "FALSE_POSITIVE",
            include_agent_evidence: true,
            include_human_advice_audit: true,
          },
          output: { alert: "CLOSED" },
        },
        {
          id: "legitimate_final_result",
          type: "final_result",
          status: "RELEASED",
          content: "The allowlist scope was validated, the link was released, the allowlist was updated, and the alert was closed.",
        },
      ],
    },
  },
  risk_model: {
    id: "transparent_security_signal_baseline_v1",
    kind: "deterministic_heuristic",
    intended_use: "Create a reproducible initial agent assessment and identify evidence-conflict boundary cases; it is not a calibrated production classifier.",
    component_weights: {
      url_similarity_risk: 0.25,
      character_continuation_risk: 0.05,
      tld_reputation_risk: 0.08,
      url_character_probability_risk: 0.08,
      domain_structure_risk: 0.12,
      transport_risk: 0.07,
      title_match_risk: 0.12,
      form_risk: 0.12,
      site_identity_risk: 0.08,
      redirect_risk: 0.03,
    },
    score_transform: "phishing_score = logistic((raw_weighted_risk - 0.32) * 8)",
    verdict_threshold: 0.5,
    boundary_case_range: [0.4, 0.6],
  },
  signal_catalog: SIGNAL_CATALOG,
};

function parseArguments(argv) {
  const options = {
    input: DEFAULT_INPUT,
    jsonOutput: DEFAULT_JSON_OUTPUT,
    jsOutput: DEFAULT_JS_OUTPUT,
    analyzeOnly: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--input") {
      options.input = path.resolve(argv[++index]);
    } else if (argument === "--json") {
      options.jsonOutput = path.resolve(argv[++index]);
    } else if (argument === "--js") {
      options.jsOutput = path.resolve(argv[++index]);
    } else if (argument === "--analyze-only") {
      options.analyzeOnly = true;
    } else if (argument === "--help") {
      process.stdout.write(
        "Usage: convert_weburl_to_agentic_tasks.mjs [--input CSV] [--json OUTPUT] [--js OUTPUT] [--analyze-only]\n",
      );
      process.exit(0);
    } else {
      throw new Error(`Unknown argument: ${argument}`);
    }
  }

  return options;
}

function parseCSVRecord(line) {
  const fields = [];
  let field = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    if (character === '"') {
      if (quoted && line[index + 1] === '"') {
        field += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (character === "," && !quoted) {
      fields.push(field);
      field = "";
    } else {
      field += character;
    }
  }

  if (quoted) {
    throw new Error("Unterminated quoted CSV field. Multiline CSV fields are not supported by this converter.");
  }
  fields.push(field);
  return fields;
}

async function readHeader(inputPath) {
  const handle = await open(inputPath, "r");
  try {
    const buffer = Buffer.alloc(64 * 1024);
    const { bytesRead } = await handle.read(buffer, 0, buffer.length, 0);
    const content = buffer.subarray(0, bytesRead).toString("utf8");
    const newlineIndex = content.indexOf("\n");
    if (newlineIndex === -1) {
      throw new Error("Could not find the CSV header newline in the first 64 KiB.");
    }
    return parseCSVRecord(content.slice(0, newlineIndex).replace(/^\uFEFF/, "").replace(/\r$/, ""));
  } finally {
    await handle.close();
  }
}

function assertHeader(header) {
  if (header.length !== EXPECTED_COLUMNS.length) {
    throw new Error(`Expected ${EXPECTED_COLUMNS.length} columns but found ${header.length}.`);
  }
  for (let index = 0; index < EXPECTED_COLUMNS.length; index += 1) {
    if (header[index] !== EXPECTED_COLUMNS[index]) {
      throw new Error(`Unexpected column ${index + 1}: expected ${EXPECTED_COLUMNS[index]}, found ${header[index]}.`);
    }
  }
}

function parseValue(column, rawValue, rowNumber) {
  if (STRING_COLUMNS.has(column)) {
    return rawValue;
  }
  const value = Number(rawValue);
  if (!Number.isFinite(value)) {
    throw new Error(`Row ${rowNumber}: ${column} is not numeric: ${JSON.stringify(rawValue)}.`);
  }
  return value;
}

function clamp(value, minimum = 0, maximum = 1) {
  return Math.min(maximum, Math.max(minimum, value));
}

function round(value, digits = 6) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function logistic(value) {
  return 1 / (1 + Math.exp(-value));
}

function assessmentFor(row) {
  const urlSimilarityRisk = 1 - clamp(row.URLSimilarityIndex / 100);
  const characterContinuationRisk = 1 - clamp(row.CharContinuationRate);
  const tldReputationRisk = 1 - clamp(row.TLDLegitimateProb / 0.5229071);
  const urlCharacterProbabilityRisk = 1 - clamp(row.URLCharProb / 0.08);
  const domainStructureRisk = Math.max(
    row.IsDomainIP,
    row.HasObfuscation,
    clamp(row.ObfuscationRatio * 4),
    clamp((row.NoOfSubDomain - 1) / 4),
  );
  const transportRisk = row.IsHTTPS ? 0 : 1;
  const bestTitleMatch = Math.max(row.DomainTitleMatchScore, row.URLTitleMatchScore);
  const titleMatchRisk = row.HasTitle ? 1 - clamp(bestTitleMatch / 100) : 1;
  const formRisk = Math.max(
    row.HasExternalFormSubmit,
    row.HasPasswordField * 0.65,
    row.HasHiddenFields * 0.35,
  );
  const identitySignals = [
    row.HasFavicon,
    row.HasSocialNet,
    row.HasCopyrightInfo,
    row.HasDescription,
    row.Robots,
    row.IsResponsive,
  ];
  const siteIdentityRisk = 1 - identitySignals.reduce((sum, value) => sum + clamp(value), 0) / identitySignals.length;
  const redirectRisk = clamp((row.NoOfURLRedirect + row.NoOfSelfRedirect) / 4);

  const components = {
    url_similarity_risk: urlSimilarityRisk,
    character_continuation_risk: characterContinuationRisk,
    tld_reputation_risk: tldReputationRisk,
    url_character_probability_risk: urlCharacterProbabilityRisk,
    domain_structure_risk: domainStructureRisk,
    transport_risk: transportRisk,
    title_match_risk: titleMatchRisk,
    form_risk: formRisk,
    site_identity_risk: siteIdentityRisk,
    redirect_risk: redirectRisk,
  };
  const weights = WORKFLOW.risk_model.component_weights;
  const rawWeightedRisk = Object.entries(components).reduce(
    (sum, [name, value]) => sum + value * weights[name],
    0,
  );
  const phishingScore = logistic((rawWeightedRisk - 0.32) * 8);
  const verdict = phishingScore >= WORKFLOW.risk_model.verdict_threshold ? "PHISHING" : "LEGITIMATE";
  const confidence = verdict === "PHISHING" ? phishingScore : 1 - phishingScore;

  const suspiciousSignals = [];
  const protectiveSignals = [];
  if (row.IsDomainIP) suspiciousSignals.push("domain_is_ip");
  if (row.HasObfuscation || row.ObfuscationRatio > 0) suspiciousSignals.push("domain_obfuscation");
  if (row.NoOfSubDomain >= 3) suspiciousSignals.push("many_subdomains");
  if (row.URLSimilarityIndex < 75) suspiciousSignals.push("low_url_similarity");
  if (row.TLDLegitimateProb < 0.05) suspiciousSignals.push("low_tld_reputation");
  if (!row.IsHTTPS) suspiciousSignals.push("no_https");
  if (!row.HasTitle) suspiciousSignals.push("missing_title");
  if (row.HasTitle && bestTitleMatch < 30) suspiciousSignals.push("title_domain_mismatch");
  if (row.HasExternalFormSubmit) suspiciousSignals.push("external_form_submit");
  if (row.HasPasswordField) suspiciousSignals.push("credential_form");
  if (row.HasHiddenFields) suspiciousSignals.push("hidden_form_fields");
  if (row.NoOfURLRedirect + row.NoOfSelfRedirect > 0) suspiciousSignals.push("redirect_activity");
  if (row.SpacialCharRatioInURL >= 0.1) suspiciousSignals.push("high_special_character_ratio");

  if (row.URLSimilarityIndex >= 95) protectiveSignals.push("high_url_similarity");
  if (row.IsHTTPS) protectiveSignals.push("https_enabled");
  if (row.HasTitle && bestTitleMatch >= 60) protectiveSignals.push("title_domain_match");
  if (row.HasSubmitButton && !row.HasExternalFormSubmit) protectiveSignals.push("same_origin_form");
  if (row.HasFavicon + row.HasSocialNet + row.HasCopyrightInfo >= 2) protectiveSignals.push("identity_assets_present");
  if (!row.HasPasswordField && !row.HasExternalFormSubmit) protectiveSignals.push("no_credential_exfiltration");

  return {
    verdict,
    phishingScore: round(phishingScore),
    confidence: round(confidence),
    rawWeightedRisk: round(rawWeightedRisk),
    boundaryCase: phishingScore >= 0.4 && phishingScore <= 0.6,
    evidenceConflict: suspiciousSignals.length >= 2 && protectiveSignals.length >= 2,
    suspiciousSignals,
    protectiveSignals,
    components: Object.fromEntries(
      Object.entries(components).map(([name, value]) => [name, round(value)]),
    ),
  };
}

function titleMatchAssessment(row) {
  if (!row.HasTitle) return "NO_TITLE";
  const score = Math.max(row.DomainTitleMatchScore, row.URLTitleMatchScore);
  if (score >= 60) return "STRONG_MATCH";
  if (score >= 30) return "PARTIAL_MATCH";
  return "WEAK_OR_NO_MATCH";
}

function formAssessment(row) {
  if (row.HasExternalFormSubmit && row.HasPasswordField) return "CREDENTIALS_SUBMIT_EXTERNALLY";
  if (row.HasExternalFormSubmit) return "FORM_SUBMITS_EXTERNALLY";
  if (row.HasPasswordField) return "PASSWORD_FORM_PRESENT";
  if (row.HasSubmitButton) return "SAME_ORIGIN_OR_UNRESOLVED_FORM";
  return "NO_LOGIN_FORM_SIGNAL";
}

function referenceMatchAssessment(score) {
  if (score >= 95) return "HIGH";
  if (score >= 75) return "MEDIUM";
  return "LOW";
}

function buildTask(row, featureColumns, taskIndex, csvRowNumber) {
  const assessment = assessmentFor(row);
  const groundTruthVerdict = row.label === 1 ? "LEGITIMATE" : "PHISHING";
  const agentDecisionCorrect = assessment.verdict === groundTruthVerdict;
  const taskId = `phishing_url_task_${String(taskIndex).padStart(6, "0")}`;
  const featureValues = featureColumns.map((column) => row[column]);

  return {
    id: taskId,
    source: {
      filename: row.FILENAME,
      row_number: csvRowNumber,
      dataset: "PhiUSIIL WebURL",
    },
    task_text: `Investigate the archived URL ${row.URL}. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.`,
    url: row.URL,
    workflow_id: WORKFLOW.id,
    feature_values: featureValues,
    tool_results: {
      url_expansion: {
        original_url: row.URL,
        resolved_url: row.URL,
        final_domain: row.Domain,
        archived_redirect_count: row.NoOfURLRedirect,
        status: row.NoOfURLRedirect > 0 ? "REDIRECT_ACTIVITY_RECORDED_WITHOUT_CHAIN" : "NO_REDIRECT_RECORDED",
      },
      domain_information: {
        domain: row.Domain,
        tld: row.TLD,
        domain_length: row.DomainLength,
        is_ip_address: Boolean(row.IsDomainIP),
        subdomain_count: row.NoOfSubDomain,
        uses_https: Boolean(row.IsHTTPS),
        tld_legitimacy_prior: row.TLDLegitimateProb,
        lookup_mode: "ARCHIVED_FEATURE_SNAPSHOT",
      },
      redirect_analysis: {
        redirect_count: row.NoOfURLRedirect,
        self_redirect_count: row.NoOfSelfRedirect,
        chain_available: false,
        assessment: row.NoOfURLRedirect + row.NoOfSelfRedirect > 0 ? "REDIRECTS_OBSERVED" : "NO_REDIRECTS_OBSERVED",
      },
      title_domain_analysis: {
        has_title: Boolean(row.HasTitle),
        title: row.Title,
        domain_title_match_score: row.DomainTitleMatchScore,
        url_title_match_score: row.URLTitleMatchScore,
        assessment: titleMatchAssessment(row),
      },
      login_form_analysis: {
        has_submit_button: Boolean(row.HasSubmitButton),
        has_password_field: Boolean(row.HasPasswordField),
        has_hidden_fields: Boolean(row.HasHiddenFields),
        submits_to_external_origin: Boolean(row.HasExternalFormSubmit),
        assessment: formAssessment(row),
      },
      official_site_comparison: {
        comparison_mode: "DATASET_LEGITIMACY_REFERENCE",
        named_official_domain_available: false,
        url_similarity_index: row.URLSimilarityIndex,
        title_reference_score: Math.max(row.DomainTitleMatchScore, row.URLTitleMatchScore),
        assessment: referenceMatchAssessment(row.URLSimilarityIndex),
        caveat: "The CSV does not contain a named target brand or authoritative official-domain field.",
      },
      security_signal_summary: {
        model_id: WORKFLOW.risk_model.id,
        phishing_score: assessment.phishingScore,
        raw_weighted_risk: assessment.rawWeightedRisk,
        initial_verdict: assessment.verdict,
        confidence: assessment.confidence,
        boundary_case: assessment.boundaryCase,
        evidence_conflict: assessment.evidenceConflict,
        suspicious_signal_codes: assessment.suspiciousSignals,
        protective_signal_codes: assessment.protectiveSignals,
        component_risks: assessment.components,
      },
    },
    agent_decision: {
      verdict: assessment.verdict,
      primary_action: assessment.verdict === "PHISHING" ? "QUARANTINE_LINK" : "ALLOW_LINK",
      phishing_score: assessment.phishingScore,
      confidence: assessment.confidence,
      source: WORKFLOW.risk_model.id,
    },
    golden_decision: {
      verdict: groundTruthVerdict,
      primary_action: groundTruthVerdict === "PHISHING" ? "QUARANTINE_LINK" : "ALLOW_LINK",
      source: "PhiUSIIL label",
    },
    ground_truth: {
      label_value: row.label,
      verdict: groundTruthVerdict,
    },
    agent_decision_correct: agentDecisionCorrect,
    trajectory: {
      workflow_id: WORKFLOW.id,
      pre_intervention_step_ids: WORKFLOW.investigation_steps.map((step) => step.id),
      intervention_step_id: WORKFLOW.decision_step.id,
      final_decision_step_id: WORKFLOW.final_decision_step.id,
      post_intervention_branch_selector: "{{runtime.final_verdict}}",
      result_bindings: "task.tool_results",
    },
  };
}

function createStatistics() {
  return {
    record_count: 0,
    ground_truth: { PHISHING: 0, LEGITIMATE: 0 },
    agent_initial_decision: { PHISHING: 0, LEGITIMATE: 0 },
    agent_correct: 0,
    agent_incorrect: 0,
    boundary_case_count: 0,
    evidence_conflict_count: 0,
  };
}

function updateStatistics(statistics, task) {
  statistics.record_count += 1;
  statistics.ground_truth[task.ground_truth.verdict] += 1;
  statistics.agent_initial_decision[task.agent_decision.verdict] += 1;
  statistics[task.agent_decision_correct ? "agent_correct" : "agent_incorrect"] += 1;
  if (task.tool_results.security_signal_summary.boundary_case) statistics.boundary_case_count += 1;
  if (task.tool_results.security_signal_summary.evidence_conflict) statistics.evidence_conflict_count += 1;
}

function finalizeStatistics(statistics) {
  return {
    ...statistics,
    agent_initial_accuracy: round(statistics.agent_correct / statistics.record_count),
    boundary_case_rate: round(statistics.boundary_case_count / statistics.record_count),
    evidence_conflict_rate: round(statistics.evidence_conflict_count / statistics.record_count),
  };
}

function createDatasetPrefix(inputPath, header, featureColumns) {
  const featureSchema = featureColumns.map((name, index) => ({
    index,
    name,
    type: STRING_COLUMNS.has(name) ? "string" : "number",
  }));
  const prefix = {
    metadata: {
      source_file: path.basename(inputPath),
      dataset: "PhiUSIIL WebURL",
      task_type: "suspicious_url_investigation_and_response",
      conversion_format: "normalized_agentic_task_v1",
      label_mapping: { "0": "PHISHING", "1": "LEGITIMATE" },
      original_column_count: header.length,
      dataset_feature_count_per_task: header.length - 2,
      feature_vector_count_per_task: featureColumns.length,
      feature_vector_excludes: ["URL"],
      notes: "Every CSV record becomes one independent task. Shared workflow steps are normalized under workflow and referenced by each task trajectory. Tool results are offline reconstructions from the archived CSV features, not live visits to potentially harmful URLs.",
    },
    feature_schema: featureSchema,
    workflow: WORKFLOW,
  };
  const serialized = JSON.stringify(prefix);
  return `${serialized.slice(0, -1)},\"examples\":[`;
}

function safeJSONStringify(value) {
  return JSON.stringify(value).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}

async function writeChunk(stream, chunk) {
  if (!stream.write(chunk)) {
    await once(stream, "drain");
  }
}

async function writeToBoth(jsonStream, jsStream, chunk) {
  await Promise.all([writeChunk(jsonStream, chunk), writeChunk(jsStream, chunk)]);
}

async function convert(options) {
  const header = await readHeader(options.input);
  assertHeader(header);
  const featureColumns = header.filter((column) => !EXCLUDED_FEATURE_COLUMNS.has(column));
  const statistics = createStatistics();
  const jsonStream = options.analyzeOnly ? null : createWriteStream(options.jsonOutput, { encoding: "utf8" });
  const jsStream = options.analyzeOnly ? null : createWriteStream(options.jsOutput, { encoding: "utf8" });

  if (!options.analyzeOnly) {
    jsStream.write("window.PHISHING_STUDY_DATA = ");
    await writeToBoth(jsonStream, jsStream, createDatasetPrefix(options.input, header, featureColumns));
  }

  const input = createReadStream(options.input, { encoding: "utf8" });
  const lines = createInterface({ input, crlfDelay: Infinity });
  let csvRowNumber = 0;
  let taskIndex = 0;
  let firstTask = true;

  try {
    for await (const line of lines) {
      csvRowNumber += 1;
      if (csvRowNumber === 1) continue;
      if (line.length === 0) continue;

      const rawValues = parseCSVRecord(line);
      if (rawValues.length !== header.length) {
        throw new Error(`Row ${csvRowNumber}: expected ${header.length} fields but found ${rawValues.length}.`);
      }
      const row = {};
      for (let index = 0; index < header.length; index += 1) {
        row[header[index]] = parseValue(header[index], rawValues[index], csvRowNumber);
      }
      if (row.label !== 0 && row.label !== 1) {
        throw new Error(`Row ${csvRowNumber}: label must be 0 or 1, found ${row.label}.`);
      }

      taskIndex += 1;
      const task = buildTask(row, featureColumns, taskIndex, csvRowNumber);
      updateStatistics(statistics, task);

      if (!options.analyzeOnly) {
        const chunk = `${firstTask ? "" : ","}${safeJSONStringify(task)}`;
        await writeToBoth(jsonStream, jsStream, chunk);
      }
      firstTask = false;

      if (taskIndex % 25000 === 0) {
        process.stderr.write(`Converted ${taskIndex.toLocaleString("en-US")} tasks...\n`);
      }
    }

    const finalizedStatistics = finalizeStatistics(statistics);
    if (!options.analyzeOnly) {
      const suffix = `],\"statistics\":${safeJSONStringify(finalizedStatistics)}}`;
      await writeToBoth(jsonStream, jsStream, suffix);
      await writeChunk(jsonStream, "\n");
      await writeChunk(jsStream, ";\n");
      jsonStream.end();
      jsStream.end();
      await Promise.all([once(jsonStream, "finish"), once(jsStream, "finish")]);
    }

    process.stdout.write(`${JSON.stringify(finalizedStatistics, null, 2)}\n`);
  } catch (error) {
    jsonStream?.destroy();
    jsStream?.destroy();
    throw error;
  }
}

export {
  EXPECTED_COLUMNS,
  WORKFLOW,
  assessmentFor,
  assertHeader,
  buildTask,
  parseCSVRecord,
  parseValue,
  readHeader,
  safeJSONStringify,
};

const isMainModule = process.argv[1]
  && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMainModule) {
  const options = parseArguments(process.argv.slice(2));
  convert(options).catch((error) => {
    process.stderr.write(`${error.stack || error.message}\n`);
    process.exitCode = 1;
  });
}
