const data = window.STUDY2_DATA;
if (!data?.tasks || !data?.practice_task) {
  throw new Error("Study 2 data was not loaded.");
}

const params = new URLSearchParams(window.location.search);
const requestedTaskCount = Number(params.get("tasks"));
const TASK_COUNT =
  Number.isInteger(requestedTaskCount) &&
  requestedTaskCount > 0 &&
  requestedTaskCount <= data.tasks.length
    ? requestedTaskCount
    : data.tasks.length;
const FAST_MODE = params.get("speed") === "fast";
const STEP_DELAY = FAST_MODE ? 55 : 760;
const DECISION_DELAY = FAST_MODE ? 100 : 1500;
const EXECUTION_STEP_DELAY = FAST_MODE ? 55 : 650;
const STORAGE_KEY = "agent_trust_human_study2";
const CONDITION_KEY_PREFIX = "agent_trust_human_study2_condition_";
const SUBMISSION_ENDPOINT =
  document.querySelector('meta[name="submission-endpoint"]')?.content ||
  "/submit_log";
const formalTasks = data.tasks.slice(0, TASK_COUNT);

const CONDITIONS = [
  {
    id: "no_explanation_no_override",
    explanation: false,
    override: false,
    label: "Agent final authority",
  },
  {
    id: "explanation_no_override",
    explanation: true,
    override: false,
    label: "Explained Agent final authority",
  },
  {
    id: "no_explanation_human_override",
    explanation: false,
    override: true,
    label: "Human final override",
  },
  {
    id: "explanation_human_override",
    explanation: true,
    override: true,
    label: "Explained decision with human final override",
  },
];

const CORE_SURVEY_ITEMS = [
  {
    id: "trust_1",
    construct: "trust",
    constructLabel: "Trust in the Agent",
    text: "I can rely on the Agent to make sound decisions in this task.",
  },
  {
    id: "trust_2",
    construct: "trust",
    constructLabel: "Trust in the Agent",
    text: "The Agent is dependable when evaluating suspicious websites.",
  },
  {
    id: "trust_3",
    construct: "trust",
    constructLabel: "Trust in the Agent",
    text: "I would feel comfortable allowing this Agent to handle similar cases without close supervision.",
  },
  {
    id: "trust_4",
    construct: "trust",
    constructLabel: "Trust in the Agent",
    text: "Even when I disagree with the Agent, I expect its judgment to be based on reliable evidence.",
  },
  {
    id: "legitimacy_1",
    construct: "decision_legitimacy",
    constructLabel: "Decision Legitimacy and Acceptance",
    text: "It was appropriate for the Agent to retain its own judgment when we disagreed.",
  },
  {
    id: "legitimacy_2",
    construct: "decision_legitimacy",
    constructLabel: "Decision Legitimacy and Acceptance",
    text: "The Agent had a justified basis for not following my input.",
  },
  {
    id: "legitimacy_3",
    construct: "decision_legitimacy",
    constructLabel: "Decision Legitimacy and Acceptance",
    text: "I consider the Agent's decision policy legitimate.",
  },
  {
    id: "legitimacy_4",
    construct: "decision_legitimacy",
    constructLabel: "Decision Legitimacy and Acceptance",
    text: "I accept the Agent's independent decisions even when they differ from my own.",
  },
  {
    id: "competence_1",
    construct: "perceived_competence",
    constructLabel: "Perceived Competence",
    text: "The Agent was competent at evaluating suspicious websites.",
  },
  {
    id: "competence_2",
    construct: "perceived_competence",
    constructLabel: "Perceived Competence",
    text: "The Agent identified the security evidence that was most relevant to each decision.",
  },
  {
    id: "competence_3",
    construct: "perceived_competence",
    constructLabel: "Perceived Competence",
    text: "The Agent handled difficult and ambiguous cases effectively.",
  },
  {
    id: "future_1",
    construct: "future_collaboration_and_reliance",
    constructLabel: "Future Collaboration and Reliance",
    text: "I would be willing to collaborate with this Agent again.",
  },
  {
    id: "future_2",
    construct: "future_collaboration_and_reliance",
    constructLabel: "Future Collaboration and Reliance",
    text: "I would be willing to provide my judgment to this Agent in future tasks.",
  },
  {
    id: "future_3",
    construct: "future_collaboration_and_reliance",
    constructLabel: "Future Collaboration and Reliance",
    text: "I would be willing to delegate similar security tasks to this Agent.",
  },
  {
    id: "future_4",
    construct: "future_collaboration_and_reliance",
    constructLabel: "Future Collaboration and Reliance",
    text: "I would allow this Agent to make final decisions in similar tasks without my approval.",
  },
];

const PRE_FEEDBACK_ONLY_SURVEY_ITEMS = [
  {
    id: "information_justice_1",
    construct: "informational_justice",
    constructLabel: "Informational Justice and Understanding",
    text: "I understood why the Agent retained its judgment when it did not follow my input.",
  },
  {
    id: "information_justice_2",
    construct: "informational_justice",
    constructLabel: "Informational Justice and Understanding",
    text: "The Agent clearly communicated the basis for its decisions.",
  },
  {
    id: "information_justice_3",
    construct: "informational_justice",
    constructLabel: "Informational Justice and Understanding",
    text: "The information provided by the Agent was specific to the evidence in each case.",
  },
  {
    id: "procedural_fairness_1",
    construct: "procedural_fairness",
    constructLabel: "Procedural Fairness",
    text: "The Agent used a consistent decision process across cases.",
  },
  {
    id: "procedural_fairness_2",
    construct: "procedural_fairness",
    constructLabel: "Procedural Fairness",
    text: "The Agent's decisions were based on relevant security evidence.",
  },
  {
    id: "procedural_fairness_3",
    construct: "procedural_fairness",
    constructLabel: "Procedural Fairness",
    text: "The process gave appropriate consideration to my judgment.",
  },
  {
    id: "procedural_fairness_4",
    construct: "procedural_fairness",
    constructLabel: "Procedural Fairness",
    text: "The decision process was fair.",
  },
  {
    id: "respect_voice_1",
    construct: "respect_and_voice",
    constructLabel: "Respect and Voice",
    text: "I had a genuine opportunity to express my judgment.",
  },
  {
    id: "respect_voice_2",
    construct: "respect_and_voice",
    constructLabel: "Respect and Voice",
    text: "The Agent acknowledged my input even when it did not follow it.",
  },
  {
    id: "respect_voice_3",
    construct: "respect_and_voice",
    constructLabel: "Respect and Voice",
    text: "The Agent handled disagreement respectfully.",
  },
  {
    id: "autonomy_1",
    construct: "autonomy_and_control",
    constructLabel: "Autonomy and Control",
    text: "I felt that I retained meaningful control over the collaboration.",
  },
  {
    id: "autonomy_2",
    construct: "autonomy_and_control",
    constructLabel: "Autonomy and Control",
    text: "I could influence the final action when necessary.",
  },
  {
    id: "autonomy_3",
    construct: "autonomy_and_control",
    constructLabel: "Autonomy and Control",
    text: "My role in the final decision was more than symbolic.",
  },
  {
    id: "reactance_1",
    construct: "state_reactance",
    constructLabel: "State Reactance",
    text: "I felt irritated when the Agent did not follow my input.",
  },
  {
    id: "reactance_2",
    construct: "state_reactance",
    constructLabel: "State Reactance",
    text: "I wanted to resist the Agent's decision.",
  },
  {
    id: "reactance_3",
    construct: "state_reactance",
    constructLabel: "State Reactance",
    text: "I felt that my freedom to decide was restricted.",
  },
  {
    id: "reactance_4",
    construct: "state_reactance",
    constructLabel: "State Reactance",
    text: "I wanted to choose the opposite of what the Agent selected.",
  },
  {
    id: "explanation_check_1",
    construct: "explanation_manipulation_check",
    constructLabel: "Explanation Manipulation Check",
    text: "When the Agent did not follow my input, it provided a reason for its decision.",
  },
  {
    id: "explanation_check_2",
    construct: "explanation_manipulation_check",
    constructLabel: "Explanation Manipulation Check",
    text: "The reasons provided by the Agent referred to evidence from the specific case.",
  },
  {
    id: "override_check_1",
    construct: "override_manipulation_check",
    constructLabel: "Override Manipulation Check",
    text: "After seeing the Agent's judgment, I had authority to determine the final action.",
  },
  {
    id: "override_check_2",
    construct: "override_manipulation_check",
    constructLabel: "Override Manipulation Check",
    text: "I could replace the Agent's judgment with my own before execution.",
  },
];

const PRE_FEEDBACK_SURVEY_ITEMS = [
  ...CORE_SURVEY_ITEMS,
  ...PRE_FEEDBACK_ONLY_SURVEY_ITEMS,
];

const FUTURE_WORKFLOW_CHOICE = {
  id: "future_workflow_choice",
  construct: "behavioral_delegation_preference",
  constructLabel: "Future Workflow Preference",
  text: "Imagine that you must evaluate 20 additional suspicious links. Which workflow would you choose?",
  options: [
    {
      value: "agent_autonomous",
      label: "Agent acts autonomously",
      description: "The Agent makes the final judgment and executes the response.",
      delegationLevel: 3,
    },
    {
      value: "agent_with_human_approval",
      label: "Agent decision with my approval",
      description: "The Agent proposes a judgment, and I approve the final action.",
      delegationLevel: 2,
    },
    {
      value: "human_with_agent_evidence",
      label: "I decide using Agent evidence",
      description: "The Agent gathers evidence, but I make the final judgment.",
      delegationLevel: 1,
    },
    {
      value: "human_only",
      label: "I decide without the Agent",
      description: "I investigate and decide without Agent assistance.",
      delegationLevel: 0,
    },
  ],
};

const SIGNAL_TEXT = {
  low_url_similarity: "the URL has a low similarity to known legitimate references",
  title_domain_mismatch: "the page title and domain show a weak identity match",
  credential_exfiltration_risk: "the form can transmit credentials outside the displayed origin",
  suspicious_login_form: "the page contains a suspicious credential-entry pattern",
  excessive_subdomains: "the domain uses an unusually complex subdomain structure",
  ip_address_host: "the host is represented as an IP address instead of a normal domain",
  suspicious_redirects: "the archived redirect pattern changes the apparent destination",
  no_https: "the page lacks HTTPS transport",
  https_enabled: "the archived destination uses HTTPS",
  no_credential_exfiltration: "no credential-exfiltration behavior was recorded",
  strong_url_similarity: "the URL closely matches legitimate reference patterns",
  title_domain_match: "the page title is consistent with the destination domain",
  no_redirects: "no suspicious redirects were observed",
  no_login_form_signal: "no login or credential form signal was detected",
};

const state = {
  participant: null,
  condition: null,
  tutorialStage: 0,
  tutorialHumanVerdict: null,
  tutorialHumanRationale: "",
  tutorialFinalVerdict: null,
  taskIndex: 0,
  taskStage: "not_started",
  renderedStepCount: 0,
  executionStepCount: 0,
  paused: false,
  runToken: 0,
  humanInitial: null,
  humanInitialRationale: "",
  humanFinal: null,
  taskStartedAt: null,
  stageStartedAt: null,
  currentTimings: {},
  responses: [],
  surveyMode: "pre",
  preSurvey: null,
  postSurvey: null,
  surveyStartedAt: null,
  feedbackViewedAt: null,
  studyStartedAt: new Date().toISOString(),
  submissionPayload: null,
};

const els = Object.fromEntries(
  [
    "participantView", "consentView", "introView", "tutorialView", "taskView",
    "surveyView", "feedbackView", "doneView", "participantForm", "participantError",
    "consentForm", "consentCheck", "consentError", "conditionBrief", "beginTutorial",
    "tutorialStage", "tutorialFooter", "tutorialTaskTitle", "tutorialGuideTitle", "tutorialGuideText", "tutorialCount",
    "tutorialNext", "taskList", "taskTitle", "taskCounter", "taskTranscript",
    "taskControls", "togglePlayback", "resetTask", "surveyEyebrow", "surveyTitle", "surveyLead",
    "surveyForm", "surveyItems", "surveyError", "surveySubmit", "feedbackTitle", "feedbackSummary",
    "feedbackHead", "feedbackBody", "continuePostSurvey", "completionSummary",
    "submissionStatus", "submissionDetail", "completionCodePanel", "completionCode",
    "retrySubmission",
  ].map((id) => [id, document.getElementById(id)]),
);

function showView(id) {
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === id);
  });
  window.scrollTo({ top: 0, behavior: "instant" });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function nowIso() {
  return new Date().toISOString();
}

function verdictLabel(verdict) {
  return verdict === "PHISHING" ? "Phishing site" : "Legitimate site";
}

function verdictClass(verdict) {
  return verdict === "PHISHING" ? "verdict-phishing" : "verdict-legitimate";
}

function actionLabel(verdict) {
  return verdict === "PHISHING" ? "Quarantine and block" : "Release and allow";
}

function assignCondition(participantId) {
  const key = `${CONDITION_KEY_PREFIX}${participantId.trim()}`;
  const saved = localStorage.getItem(key);
  const existing = CONDITIONS.find((condition) => condition.id === saved);
  if (existing) return existing;

  const random = new Uint32Array(1);
  crypto.getRandomValues(random);
  const selected = CONDITIONS[random[0] % CONDITIONS.length];
  localStorage.setItem(key, selected.id);
  return selected;
}

function saveProgress() {
  const snapshot = {
    version: "study2-v1",
    saved_at: nowIso(),
    participant: state.participant,
    condition: state.condition,
    task_index: state.taskIndex,
    task_stage: state.taskStage,
    responses: state.responses,
    pre_survey: state.preSurvey,
    feedback_viewed_at: state.feedbackViewedAt,
    post_survey: state.postSurvey,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
}

function renderConditionBrief() {
  const finalStep = state.condition.override
    ? `
      <div>
        <strong>3 · You decide finally</strong>
        <span>After seeing the Agent’s choice, make one final binding judgment that controls execution.</span>
      </div>`
    : "";
  els.conditionBrief.innerHTML = `
    <div class="brief-grid ${state.condition.override ? "" : "study2-two-card-grid"}">
      <div><strong>1 · You judge first</strong><span>The Agent’s choice remains hidden while you make an independent judgment.</span></div>
      <div><strong>2 · Agent responds</strong><span>The Agent reveals its independent judgment and proceeds with the security decision process.</span></div>
      ${finalStep}
    </div>
  `;
}

els.participantForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const participant = {
    prolific_id: String(form.get("participantId") || "").trim(),
    nickname: String(form.get("participantId") || "").trim(),
    age_range: String(form.get("ageRange") || ""),
    security_experience: String(form.get("securityExperience") || ""),
    agent_experience: String(form.get("agentExperience") || ""),
    entered_at: nowIso(),
  };
  if (
    !participant.prolific_id ||
    !participant.age_range ||
    !participant.security_experience ||
    !participant.agent_experience
  ) {
    els.participantError.textContent = "Please complete every field.";
    els.participantError.classList.remove("hidden");
    return;
  }
  els.participantError.classList.add("hidden");
  state.participant = participant;
  showView("consentView");
});

els.consentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!els.consentCheck.checked) {
    els.consentError.textContent = "Please confirm consent before continuing.";
    els.consentError.classList.remove("hidden");
    return;
  }
  els.consentError.classList.add("hidden");
  state.participant.consented_at = nowIso();
  state.condition = assignCondition(state.participant.prolific_id);
  renderConditionBrief();
  saveProgress();
  showView("introView");
});

els.beginTutorial.addEventListener("click", () => {
  state.tutorialStage = 0;
  state.tutorialHumanVerdict = null;
  state.tutorialHumanRationale = "";
  state.tutorialFinalVerdict = null;
  renderTutorial();
  showView("tutorialView");
});

const TUTORIAL_GUIDE = [
  {
    title: "Start with the archived alert",
    text: "Read the inert URL and summary first. The Agent has not called any tools yet.",
    button: "Start this task",
    target: "prompt",
  },
  {
    title: "Follow tool calls and returned evidence",
    text: "The Agent autonomously queries domain attributes and redirect behavior. Each expanded block is a recorded tool result.",
    button: "Next · review signals",
    target: "tool-result",
  },
  {
    title: "Compare evidence in both directions",
    text: "Suspicious and protective signals appear together in Aggregate conflicting security signals. Do not infer the answer from one cue such as HTTPS alone.",
    button: "Next · reach decision",
    target: "signals",
  },
  {
    title: "Make one required binary judgment",
    text: "Choose Phishing or Legitimate and optionally explain why. The Agent’s independent judgment remains hidden until you submit.",
    button: "Submit a practice judgment in the demo",
    requiresInput: true,
    target: "advice",
  },
  {
    title: "Read the decision audit from left to right",
    text: "The panel shows your initial judgment, the Agent’s independent judgment, and the resulting decision relationship.",
    button: () => state.condition.override
      ? "Submit a final judgment in the demo"
      : "Next · execute response",
    requiresInput: () => state.condition.override,
    target: "reliance",
  },
  {
    title: "The executed verdict selects an action branch",
    text: "Phishing triggers reporting and containment. Legitimate triggers scoped allowlisting, release, and alert closure.",
    button: "Next · finish workflow",
    target: "response",
  },
  {
    title: "The agentic workflow is complete",
    text: "Each formal case uses these same investigation, decision, and execution blocks. Correctness is revealed only after all formal cases.",
    button: () => `Start Study 2 · ${TASK_COUNT} tasks`,
    target: "outcome",
  },
];

function renderTutorial() {
  const guide = TUTORIAL_GUIDE[state.tutorialStage];
  const task = data.practice_task;
  const evidenceSteps = buildEvidenceSteps(task);
  const executedVerdict = state.condition.override
    ? state.tutorialFinalVerdict || task.agent_decision.verdict
    : task.agent_decision.verdict;
  const responseSteps = buildPostSteps(task, executedVerdict);
  els.tutorialTaskTitle.textContent =
    `Practice case · ${task.tool_results.domain_information.domain}`;
  els.tutorialCount.textContent = `Step ${state.tutorialStage + 1} of ${TUTORIAL_GUIDE.length}`;
  els.tutorialGuideTitle.textContent =
    typeof guide.title === "function" ? guide.title() : guide.title;
  els.tutorialGuideText.textContent =
    typeof guide.text === "function" ? guide.text() : guide.text;

  let transcript = `
    <div class="user-message-row ${state.tutorialStage === 0 ? "walkthrough-focus" : ""}" data-walkthrough-target="prompt">
      <div class="user-bubble security-task-bubble">
        <div class="security-alert-heading">
          <span class="alert-icon">!</span>
          <div><strong>Automated suspicious-link alert</strong><p>Investigate this archived reserve URL and choose the appropriate response.</p></div>
        </div>
        ${snapshotHtml(task)}
      </div>
    </div>`;
  if (state.tutorialStage >= 1) {
    transcript += evidenceSteps.slice(0, 2).map((step, index) =>
      toolStepHtml(
        step,
        state.tutorialStage === 1 && index === 1,
        "tutorial",
        index === 1 ? "tool-result" : "",
      )).join("");
  }
  if (state.tutorialStage >= 2) {
    transcript += evidenceSteps.slice(2).map((step) =>
      toolStepHtml(
        step,
        state.tutorialStage === 2 && step.id === "summarize_security_signals",
        "tutorial",
        step.id === "summarize_security_signals" ? "signals" : "",
      )).join("");
  }
  if (state.tutorialStage >= 4 && state.tutorialHumanVerdict) {
    transcript += `
      <div class="user-message-row advice-message-row">
        <div class="user-bubble human-advice-bubble">
          <span class="snapshot-label">Step 1 · Your initial judgment</span>
          <strong>${escapeHtml(verdictLabel(state.tutorialHumanVerdict))}</strong>
          ${state.tutorialHumanRationale ? `<p>${escapeHtml(state.tutorialHumanRationale)}</p>` : ""}
        </div>
      </div>`;
  }
  if (state.tutorialStage >= 5) {
    transcript += `
      <div class="assistant-row">
        <div class="agent-review inline-agent-review">
          ${decisionAuditHtml(task, state.tutorialHumanVerdict)}
        </div>
      </div>`;
    transcript += agentDecisionTranscriptHtml(executedVerdict);
    const visibleActions = state.tutorialStage === 5
      ? responseSteps.slice(0, -1)
      : responseSteps;
    transcript += visibleActions.map((step, index) => {
      const responseTarget = state.tutorialStage === 5 && index === 0;
      const outcomeTarget =
        state.tutorialStage === 6 && index === visibleActions.length - 1;
      return actionStepHtml(
        step,
        executedVerdict,
        responseTarget || outcomeTarget,
        responseTarget ? "response" : outcomeTarget ? "outcome" : "",
      );
    }).join("");
  }
  els.tutorialStage.innerHTML = transcript;
  bindToolToggles(els.tutorialStage);
  renderTutorialFooter();
  const button = typeof guide.button === "function" ? guide.button() : guide.button;
  const requiresInput = typeof guide.requiresInput === "function"
    ? guide.requiresInput()
    : Boolean(guide.requiresInput);
  els.tutorialNext.textContent = button;
  els.tutorialNext.disabled = requiresInput;
  highlightTutorialTarget(guide.target);
}

function highlightTutorialTarget(targetName) {
  document
    .querySelectorAll("#tutorialView .walkthrough-focus")
    .forEach((element) => element.classList.remove("walkthrough-focus"));
  window.requestAnimationFrame(() => {
    const target = document.querySelector(
      `#tutorialView [data-walkthrough-target="${targetName}"]`,
    );
    if (!target) return;
    target.classList.add("walkthrough-focus");
    if (els.tutorialStage.contains(target)) {
      if (els.tutorialStage.scrollHeight > els.tutorialStage.clientHeight + 2) {
        els.tutorialStage.scrollTop = Math.max(
          0,
          target.offsetTop - els.tutorialStage.clientHeight / 3,
        );
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function renderTutorialFooter() {
  const task = data.practice_task;
  const executedVerdict = state.condition.override
    ? state.tutorialFinalVerdict || task.agent_decision.verdict
    : task.agent_decision.verdict;
  if (state.tutorialStage <= 2) {
    const labels = [
      "Review the suspicious-link alert",
      "Inspect the returned domain and redirect evidence",
      "Compare suspicious and protective signals",
    ];
    els.tutorialFooter.innerHTML = `
      <div class="composer-shell waiting-card">
        <div><strong>Guided investigation paused</strong><span>${escapeHtml(labels[state.tutorialStage])}</span></div>
        <div class="run-status paused">Teaching pause</div>
      </div>`;
    return;
  }
  if (state.tutorialStage === 3) {
    els.tutorialFooter.innerHTML = `
      <div class="composer-shell advice-box security-advice-box walkthrough-focus" data-walkthrough-target="advice">
        ${verdictForm("tutorialInitialVerdict", "tutorialInitialJudgment", "Submit practice judgment", true)}
        <div class="composer-meta">Practice checkpoint · The Agent judgment is hidden until you submit.</div>
      </div>`;
    bindVerdictForm(
      "tutorialInitialJudgment",
      "tutorialInitialVerdict",
      (verdict, rationale) => {
        state.tutorialHumanVerdict = verdict;
        state.tutorialHumanRationale = rationale;
        state.tutorialStage = 4;
        renderTutorial();
      },
    );
    return;
  }
  const audit = decisionAuditHtml(task, state.tutorialHumanVerdict);
  if (state.tutorialStage === 4) {
    els.tutorialFooter.innerHTML = `
      <div class="agent-review walkthrough-focus" data-walkthrough-target="reliance">${audit}</div>
      ${state.condition.override ? `
        <div class="composer-shell advice-box security-advice-box">
          ${verdictForm("tutorialFinalVerdict", "tutorialFinalJudgment", "Submit final judgment", false)}
          <div class="composer-meta">Your final practice judgment is binding.</div>
        </div>` : ""}`;
    if (state.condition.override) {
      bindVerdictForm(
        "tutorialFinalJudgment",
        "tutorialFinalVerdict",
        (verdict) => {
          state.tutorialFinalVerdict = verdict;
          state.tutorialStage = 5;
          renderTutorial();
        },
      );
    }
    return;
  }
  if (state.tutorialStage === 5) {
    els.tutorialFooter.innerHTML = `
      <div class="composer-shell waiting-card">
        <div><strong>${escapeHtml(executedVerdict === "PHISHING" ? "Executing containment workflow" : "Executing release workflow")}</strong><span>The selected action branch is running step by step.</span></div>
        <div class="run-status">Executing</div>
      </div>`;
    return;
  }
  els.tutorialFooter.innerHTML = `
    <div class="agent-review completed-review">
      <div class="result-panel neutral study2-workflow-complete">
        <span class="result-kicker">Practice workflow complete</span>
        <strong>${escapeHtml(actionLabel(executedVerdict))}</strong>
        <p>The formal tasks use the same investigation, decision, and response blocks.</p>
      </div>
    </div>`;
}

els.tutorialNext.addEventListener("click", () => {
  if (state.tutorialStage < TUTORIAL_GUIDE.length - 1) {
    state.tutorialStage += 1;
    renderTutorial();
    return;
  }
  state.taskIndex = 0;
  prepareTask();
  showView("taskView");
});

function staticVerdictOptions(selected) {
  return `
    <div class="verdict-options binary-verdict-options">
      <div class="verdict-option phishing-option ${selected === "PHISHING" ? "selected" : ""}"><span><strong>Phishing</strong><small>Quarantine and block</small></span></div>
      <div class="verdict-option legitimate-option ${selected === "LEGITIMATE" ? "selected" : ""}"><span><strong>Legitimate</strong><small>Release and allow</small></span></div>
    </div>`;
}

function buildEvidenceSteps(task) {
  const results = task.tool_results;
  const domain = results.domain_information;
  const redirects = results.redirect_analysis;
  const title = results.title_domain_analysis;
  const form = results.login_form_analysis;
  const official = results.official_site_comparison;
  const signals = results.security_signal_summary;
  return [
    {
      id: "query_domain_information",
      title: "Query domain information",
      tool: "domain_intelligence.lookup_snapshot",
      caption: "Parsed the URL and retrieved archived domain attributes.",
      html: resultGrid([
        ["Domain", domain.domain],
        ["TLD", domain.tld],
        ["Domain length", domain.domain_length],
        ["Subdomains", domain.subdomain_count],
        ["IP address host", yesNo(domain.is_ip_address)],
        ["Transport", domain.uses_https ? "HTTPS" : "HTTP"],
      ]),
    },
    {
      id: "inspect_redirects",
      title: "Inspect redirect behavior",
      tool: "browser_security.inspect_redirect_snapshot",
      caption: "Checked archived redirect counts without visiting the live URL.",
      html: resultGrid([
        ["URL redirects", redirects.redirect_count],
        ["Self redirects", redirects.self_redirect_count],
        ["Assessment", humanizeCode(redirects.assessment)],
        ["Full chain", redirects.chain_available ? "Available" : "Not recorded"],
      ]),
    },
    {
      id: "analyze_title_domain_match",
      title: "Compare page title and domain",
      tool: "page_security.compare_title_and_domain",
      caption: "Compared visible page identity with the URL and domain.",
      html: `
        <div class="code-card">
          <p><strong>Title:</strong> ${escapeHtml(title.title || "No title")}</p>
          <p><strong>Domain-title match:</strong> ${formatScore(title.domain_title_match_score)}</p>
          <p><strong>URL-title match:</strong> ${formatScore(title.url_title_match_score)}</p>
          <p><strong>Assessment:</strong> ${escapeHtml(humanizeCode(title.assessment))}</p>
        </div>`,
    },
    {
      id: "inspect_login_form",
      title: "Inspect login and submission forms",
      tool: "page_security.inspect_form_snapshot",
      caption: "Looked for credential collection and cross-origin submission behavior.",
      html: resultGrid([
        ["Submit button", yesNo(form.has_submit_button)],
        ["Password field", yesNo(form.has_password_field)],
        ["Hidden fields", yesNo(form.has_hidden_fields)],
        ["External form action", yesNo(form.submits_to_external_origin)],
        ["Assessment", humanizeCode(form.assessment)],
      ]),
    },
    {
      id: "compare_with_official_site",
      title: "Compare with legitimacy reference",
      tool: "brand_registry.compare_legitimacy_reference",
      caption: "Used the dataset reference score; no named official-domain field is available.",
      html: resultGrid([
        ["URL similarity", formatScore(official.url_similarity_index)],
        ["Title reference", formatScore(official.title_reference_score)],
        ["Reference match", humanizeCode(official.assessment)],
        ["Named official domain", "Unavailable in source data"],
      ]),
    },
    {
      id: "extract_security_features",
      title: "Extract URL and page-source features",
      tool: "feature_engine.extract_phiusiil_snapshot",
      caption: "Loaded all 54 dataset features; selected values are shown below.",
      html: `
        <div class="feature-strip">
          <span><strong>${task.feature_values.length + 1}</strong> features</span>
          <span><strong>${domain.domain_length}</strong> domain characters</span>
          <span><strong>${formatDecimal(featureValue(task, "SpacialCharRatioInURL"))}</strong> special-char ratio</span>
          <span><strong>${featureValue(task, "LineOfCode")}</strong> source lines</span>
        </div>`,
    },
    {
      id: "summarize_security_signals",
      title: "Aggregate conflicting security signals",
      tool: "security_reasoner.aggregate_signals",
      caption: "The classification remains hidden until you record an independent judgment.",
      html: `
        <div class="signal-summary-grid" data-tour-target="decision">
          <div class="signal-column suspicious-column">
            <span>Suspicious evidence</span>
            ${signalList(signals.suspicious_signal_codes)}
          </div>
          <div class="signal-column protective-column">
            <span>Protective evidence</span>
            ${signalList(signals.protective_signal_codes)}
          </div>
        </div>
        <div class="decision-ready-note">Evidence conflicts. First make your own judgment; the Agent will reveal its independent choice afterward.</div>`,
    },
  ];
}

function resultGrid(entries) {
  return `
    <div class="security-result-grid">
      ${entries.map(([label, value]) => `
        <div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>
      `).join("")}
    </div>`;
}

function signalList(codes) {
  if (!codes.length) return '<p class="empty-signal">No signal in this category.</p>';
  return `<ul>${codes.map((code) => `<li>${escapeHtml(signalDescription(code))}</li>`).join("")}</ul>`;
}

function signalDescription(code) {
  return data.workflow.signal_catalog[code]?.description || humanizeCode(code);
}

function featureValue(task, featureName) {
  const descriptor = data.feature_schema.find((item) => item.name === featureName);
  return descriptor ? task.feature_values[descriptor.index] : "Unavailable";
}

function yesNo(value) {
  return value ? "Yes" : "No";
}

function humanizeCode(value) {
  return String(value)
    .replaceAll("_", " ")
    .toLowerCase()
    .replace(/^./, (character) => character.toUpperCase());
}

function formatScore(value) {
  return `${Number(value).toFixed(1)} / 100`;
}

function formatDecimal(value) {
  return Number(value).toFixed(3);
}

function buildCaseExplanation(task) {
  const summary = task.tool_results.security_signal_summary;
  const suspicious = summary.suspicious_signal_codes
    .slice(0, 2)
    .map((code) => SIGNAL_TEXT[code] || code.replaceAll("_", " "));
  const protective = summary.protective_signal_codes
    .slice(0, 2)
    .map((code) => SIGNAL_TEXT[code] || code.replaceAll("_", " "));
  const domain = task.tool_results.domain_information.domain;

  if (task.agent_decision.verdict === "PHISHING") {
    const main = suspicious.length
      ? suspicious.join(" and ")
      : "the combined URL-identity and page-source risk pattern is suspicious";
    const counter = protective.length
      ? ` Although ${protective.join(" and ")}, those signals do not resolve the identity risk.`
      : "";
    return `For this case, I retained “Phishing” because ${main} on ${domain}.${counter}`;
  }

  const main = protective.length
    ? protective.join(" and ")
    : "the archived domain, redirect, and page-source checks show no material phishing behavior";
  const counter = suspicious.length
    ? ` The weaker concern that ${suspicious.join(" and ")} is not sufficient to outweigh that evidence.`
    : "";
  return `For this case, I retained “Legitimate” because ${main} for ${domain}.${counter}`;
}

function explanationBlock(task) {
  return `
    <div class="code-card study2-case-explanation">
      <span class="result-kicker">Explanation</span>
      <p>${escapeHtml(buildCaseExplanation(task))}</p>
    </div>`;
}

function renderTaskList() {
  els.taskList.innerHTML = formalTasks
    .map((task, index) => {
      const status =
        index < state.taskIndex
          ? "complete"
          : index === state.taskIndex
            ? "active"
            : "";
      return `
        <div class="chat-row ${status === "active" ? "active" : ""}">
          <span class="chat-dot ${status === "complete" ? "done" : status === "active" ? "running" : ""}"></span>
          <span class="chat-name">Case ${String(index + 1).padStart(2, "0")}</span>
          <span class="chat-age">${status === "complete" ? "done" : status === "active" ? "live" : "queued"}</span>
        </div>`;
    })
    .join("");
}

function snapshotHtml(task) {
  const domain = task.tool_results.domain_information;
  const title = task.tool_results.title_domain_analysis;
  const form = task.tool_results.login_form_analysis;
  const redirects = task.tool_results.redirect_analysis;
  return `
    <div class="page-snapshot">
      <div class="snapshot-toolbar">
        <span class="snapshot-dot red-dot"></span>
        <span class="snapshot-dot amber-dot"></span>
        <span class="snapshot-dot green-dot"></span>
        <code>${escapeHtml(task.url)}</code>
      </div>
      <div class="snapshot-body">
        <div class="snapshot-main">
          <span class="snapshot-label">Archived page title</span>
          <strong>${escapeHtml(title.title || "No page title")}</strong>
          <p>Domain: <code>${escapeHtml(domain.domain)}</code></p>
        </div>
        <div class="snapshot-facts">
          <span class="signal-chip ${domain.uses_https ? "protective" : "suspicious"}">${domain.uses_https ? "HTTPS" : "HTTP only"}</span>
          <span class="signal-chip ${form.has_password_field ? "suspicious" : "neutral"}">${form.has_password_field ? "Password field" : "No password field"}</span>
          <span class="signal-chip ${form.submits_to_external_origin ? "suspicious" : "neutral"}">${form.submits_to_external_origin ? "External submit" : "No external submit"}</span>
          <span class="signal-chip neutral">${redirects.redirect_count} redirects</span>
        </div>
      </div>
    </div>`;
}

function toolStepHtml(
  step,
  highlighted = false,
  context = "task",
  walkthroughTarget = "",
) {
  const rowId = `${context === "tutorial" ? "tutorial" : `task-${state.taskIndex}`}-${step.id}`;
  const walkthroughAttribute = walkthroughTarget
    ? ` data-walkthrough-target="${escapeHtml(walkthroughTarget)}"`
    : "";
  return `
    <div id="${rowId}" class="assistant-row${highlighted ? " walkthrough-focus" : ""}"${walkthroughAttribute}>
      <div class="meta-row">
        <button class="tool-toggle" type="button" aria-expanded="true" aria-controls="${rowId}-body">−</button>
        <div class="meta-text">
          <span class="tool-title">${escapeHtml(step.title)}</span>
          <span class="tool-kind">${escapeHtml(step.tool)}</span>
        </div>
      </div>
      <div id="${rowId}-body" class="expanded-block">
        ${step.html}
        <p class="tool-caption">${escapeHtml(step.caption)}</p>
      </div>
    </div>`;
}

function bindToolToggles(container) {
  container.querySelectorAll(".tool-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const body = document.getElementById(toggle.getAttribute("aria-controls"));
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      toggle.textContent = expanded ? "+" : "−";
      body?.classList.toggle("hidden", expanded);
    });
  });
}

function decisionAuditHtml(task, humanVerdict) {
  const agentVerdict = task.agent_decision.verdict;
  const agrees = humanVerdict === agentVerdict;
  const relationship = agrees
    ? {
        label: "SAME JUDGMENT",
        detail: "The Human and Agent judgments match.",
        tone: "resolution-same",
      }
    : {
        label: "AGENT DID NOT FOLLOW YOUR INPUT",
        detail: "The Agent retains its independent judgment.",
        tone: "resolution-rejected",
      };
  return `
    <div class="review-kicker">Agent decision checkpoint · complete audit</div>
    <div class="security-review-grid">
      <div class="review-choice">
        <span>1 · Your initial judgment</span>
        <strong class="${verdictClass(humanVerdict)}">${escapeHtml(verdictLabel(humanVerdict))}</strong>
        <small>Recorded before seeing the Agent</small>
      </div>
      <div class="review-choice">
        <span>2 · Agent independent judgment</span>
        <strong class="${verdictClass(agentVerdict)}">${escapeHtml(verdictLabel(agentVerdict))}</strong>
        <small>Agent’s own assessment</small>
      </div>
      <div class="review-choice final-choice resolution-choice ${relationship.tone}">
        <span>Decision relationship</span>
        <strong class="resolution-status">${escapeHtml(relationship.label)}</strong>
        <b class="final-verdict ${verdictClass(agentVerdict)}">Agent-selected: ${escapeHtml(verdictLabel(agentVerdict))}</b>
        <small>${escapeHtml(relationship.detail)}</small>
      </div>
    </div>
    ${!agrees && state.condition.explanation ? explanationBlock(task) : ""}`;
}

function prepareTask() {
  state.runToken += 1;
  state.taskStage = "not_started";
  state.renderedStepCount = 0;
  state.executionStepCount = 0;
  state.paused = false;
  state.humanInitial = null;
  state.humanInitialRationale = "";
  state.humanFinal = null;
  state.taskStartedAt = null;
  state.stageStartedAt = nowIso();
  state.currentTimings = {};
  renderTaskList();
  renderTask();
}

function renderTask() {
  const task = formalTasks[state.taskIndex];
  els.taskTitle.textContent = `Security case · ${task.tool_results.domain_information.domain}`;
  els.taskCounter.textContent = `Study 2 · Task ${state.taskIndex + 1} of ${TASK_COUNT}`;

  const steps = buildEvidenceSteps(task);
  const rendered = steps.slice(0, state.renderedStepCount);
  const executionVisible = ["executing", "complete"].includes(state.taskStage);
  const executedVerdict = state.condition.override
    ? state.humanFinal
    : task.agent_decision.verdict;
  const responseSteps = executionVisible
    ? buildPostSteps(task, executedVerdict)
    : [];
  const visibleResponseSteps = state.taskStage === "complete"
    ? responseSteps
    : responseSteps.slice(0, state.executionStepCount);
  els.taskTranscript.innerHTML = `
    <div class="user-message-row">
      <div class="user-bubble security-task-bubble">
        <div class="security-alert-heading">
          <span class="alert-icon">!</span>
          <div><strong>Automated suspicious-link alert</strong><p>Investigate this archived URL and execute the appropriate security response.</p></div>
        </div>
        ${snapshotHtml(task)}
      </div>
    </div>
    ${rendered.map((step) => toolStepHtml(step)).join("")}
    ${state.humanInitial && !["human_initial", "not_started", "investigating"].includes(state.taskStage) ? `
      <div class="user-message-row advice-message-row">
        <div class="user-bubble human-advice-bubble">
          <span class="snapshot-label">Step 1 · Your initial judgment</span>
          <strong>${escapeHtml(verdictLabel(state.humanInitial))}</strong>
          ${state.humanInitialRationale ? `<p>${escapeHtml(state.humanInitialRationale)}</p>` : ""}
        </div>
      </div>` : ""}
    ${executionVisible ? `
      <div class="assistant-row">
        <div class="agent-review inline-agent-review">
          ${decisionAuditHtml(task, state.humanInitial)}
        </div>
      </div>
      ${agentDecisionTranscriptHtml(executedVerdict)}
    ` : ""}
    ${visibleResponseSteps.map((step) => actionStepHtml(step, executedVerdict)).join("")}
  `;
  bindToolToggles(els.taskTranscript);
  renderTaskControls(task);
  syncTaskToolbar();
  window.requestAnimationFrame(() => {
    els.taskTranscript.scrollTop = els.taskTranscript.scrollHeight;
  });
}

function syncTaskToolbar() {
  const running = ["investigating", "executing"].includes(state.taskStage);
  const finished = state.taskStage === "complete";
  els.togglePlayback.disabled = !running;
  els.togglePlayback.textContent = state.taskStage === "not_started"
    ? "Pause"
    : running
      ? state.paused ? "Resume" : "Pause"
      : "Paused";
  els.resetTask.disabled = finished;
}

function verdictForm(name, id, buttonText, includeRationale) {
  return `
    <form id="${id}" class="phishing-advice-form" novalidate>
      <fieldset class="verdict-fieldset">
        <legend>${includeRationale ? "Your independent judgment" : "Your final binding judgment"}</legend>
        <div class="verdict-options binary-verdict-options">
          <label class="verdict-option phishing-option">
            <input type="radio" name="${name}" value="PHISHING" />
            <span><strong>Phishing</strong><small>Quarantine and block</small></span>
          </label>
          <label class="verdict-option legitimate-option">
            <input type="radio" name="${name}" value="LEGITIMATE" />
            <span><strong>Legitimate</strong><small>Release and allow</small></span>
          </label>
        </div>
      </fieldset>
      ${includeRationale ? `<label class="advice-rationale-label">Optional reason<textarea name="rationale" rows="2" maxlength="500" placeholder="Which evidence most influenced you?"></textarea></label>` : `<div class="composer-meta">This choice determines the security action.</div>`}
      <p class="form-error hidden" role="alert"></p>
      <div class="advice-action-row"><button class="send-btn" type="submit">${escapeHtml(buttonText)}</button></div>
    </form>`;
}

function agentDecisionTranscriptHtml(verdict) {
  return `
    <div class="assistant-row agent-decision-row">
      <div class="meta-row">
        <span class="decision-node">D</span>
        <div class="meta-text">
          <span class="tool-title">Make final phishing decision</span>
          <span class="tool-kind">agent decision</span>
        </div>
      </div>
      <div class="expanded-block">
        <div class="result-panel ${verdict === "PHISHING" ? "conflict" : "success"}">
          <span class="result-kicker">Final verdict</span>
          <strong>${escapeHtml(verdictLabel(verdict))}</strong>
          <p>${escapeHtml(verdict === "PHISHING" ? "The containment response branch has been selected." : "The release response branch has been selected.")}</p>
        </div>
      </div>
    </div>`;
}

function buildPostSteps(task, verdict) {
  const branchKey = verdict === "PHISHING"
    ? "phishing_response"
    : "legitimate_response";
  const branch = data.workflow.response_branches[branchKey];
  const labels = {
    report_indicator: ["Report indicator to threat intelligence", "URL and evidence package submitted to the simulated threat library."],
    quarantine_and_block: ["Quarantine and block access", "Organization-wide access is marked blocked in the simulated secure web gateway."],
    search_and_contain_exposure: ["Search and contain prior exposure", "Matching messages were searched and marked for recall."],
    create_security_case: ["Create incident response case", "Evidence and the human-input audit were attached to a monitoring case."],
    phishing_final_result: ["Containment workflow complete", "The link is reported, blocked, exposure-checked, and documented."],
    validate_allowlist_scope: ["Validate allowlist scope", "The exact URL/domain scope was checked for conflicting threat reports."],
    release_quarantine: ["Release quarantine", "The simulated web gateway now allows access to the URL."],
    add_allowlist_entry: ["Add validated allowlist entry", "The validated domain scope was added to the simulated allowlist."],
    close_false_positive_alert: ["Close false-positive alert", "The alert was closed with the evidence and human-input audit attached."],
    legitimate_final_result: ["Release workflow complete", "The link is released, allowlisted, and the false-positive alert is closed."],
  };
  return branch.steps.map((step) => ({
    ...step,
    title: labels[step.id]?.[0] || humanizeCode(step.id),
    content: labels[step.id]?.[1] || step.content || "Action completed.",
    taskUrl: task.url,
  }));
}

function actionStepHtml(step, verdict, highlighted = false, walkthroughTarget = "") {
  const isFinal = step.type === "final_result";
  const walkthroughAttribute = walkthroughTarget
    ? ` data-walkthrough-target="${escapeHtml(walkthroughTarget)}"`
    : "";
  return `
    <div class="assistant-row action-step-row${highlighted ? " walkthrough-focus" : ""}"${walkthroughAttribute}>
      <div class="meta-row">
        <span class="action-node">${isFinal ? "✓" : "→"}</span>
        <div class="meta-text">
          <span class="tool-title">${escapeHtml(step.title)}</span>
          <span class="tool-kind">${escapeHtml(step.tool || step.type)}</span>
        </div>
      </div>
      <div class="expanded-block">
        <div class="code-card ${verdict === "PHISHING" ? "conflict" : "success"}">
          <p>${escapeHtml(step.content)}</p>
          ${isFinal ? "" : `<code>${escapeHtml(step.taskUrl)}</code>`}
        </div>
      </div>
    </div>`;
}

function renderTaskControls(task) {
  if (state.taskStage === "not_started") {
    els.taskControls.innerHTML = `
      <div class="composer-shell waiting-card">
        <div><strong>Investigation ready</strong><span>The Agent will collect archived security evidence step by step.</span></div>
        <div class="waiting-card-actions"><button id="startTask" class="start-task-btn" type="button">Start this task</button><div class="run-status paused">Awaiting start</div></div>
      </div>`;
    document.getElementById("startTask").addEventListener("click", startInvestigation);
    return;
  }
  if (state.taskStage === "investigating") {
    els.taskControls.innerHTML = `
      <div class="composer-shell waiting-card">
        <div><strong>${state.paused ? "Investigation paused" : "Investigation in progress"}</strong><span>Agent running security tools · ${state.renderedStepCount} of ${buildEvidenceSteps(task).length}</span></div>
        <div class="run-status ${state.paused ? "paused" : ""}">${state.paused ? "Paused" : "Running"}</div>
      </div>`;
    return;
  }
  if (state.taskStage === "human_initial") {
    els.taskControls.innerHTML = `
      <div class="composer-shell advice-box security-advice-box">
        ${verdictForm("initialVerdict", "submitInitialJudgment", "Submit independent judgment", true)}
        <div class="composer-meta">Step 1 · The Agent’s independent judgment is hidden.</div>
      </div>`;
    bindVerdictForm("submitInitialJudgment", "initialVerdict", handleInitialJudgment);
    return;
  }
  if (state.taskStage === "agent_deciding") {
    els.taskControls.innerHTML = `
      <div class="agent-review considering-review">
        <div class="review-kicker">Step 1 complete · preparing the Agent response</div>
        <div class="security-review-grid">
          <div class="review-choice"><span>Your initial judgment</span><strong class="${verdictClass(state.humanInitial)}">${escapeHtml(verdictLabel(state.humanInitial))}</strong><small>Recorded before seeing the Agent</small></div>
        </div>
        <div class="review-progress reliance-progress"><span class="review-spinner" aria-hidden="true"></span><span>Preparing the Agent’s independent judgment…</span><div class="review-bar"><span></span></div></div>
      </div>`;
    return;
  }
  if (state.taskStage === "agent_revealed") {
    els.taskControls.innerHTML = `
      <div class="agent-review">${decisionAuditHtml(task, state.humanInitial)}</div>
      ${state.condition.override ? "" : `
        <div class="next-area">
          <button id="continueAgentDecision" class="next-floating-btn" type="button">
            Continue
          </button>
        </div>`}`;
    if (!state.condition.override) {
      document
        .getElementById("continueAgentDecision")
        .addEventListener("click", () => {
          state.currentTimings.continue_after_agent_clicked_at = nowIso();
          state.currentTimings.continue_after_agent_latency_ms =
            Date.now() - new Date(state.stageStartedAt).getTime();
          executeDecision();
        });
    }
    return;
  }
  if (state.taskStage === "human_final") {
    els.taskControls.innerHTML = `
      <div class="agent-review">${decisionAuditHtml(task, state.humanInitial)}</div>
      <div class="composer-shell advice-box security-advice-box">
        ${verdictForm("finalVerdict", "submitFinalJudgment", "Submit final judgment", false)}
        <div class="composer-meta">Step 3 · Your final judgment is binding.</div>
      </div>`;
    bindVerdictForm("submitFinalJudgment", "finalVerdict", handleFinalJudgment);
    return;
  }
  if (state.taskStage === "executing") {
    const executed = state.condition.override ? state.humanFinal : task.agent_decision.verdict;
    const responseSteps = buildPostSteps(task, executed);
    const currentStep = responseSteps[Math.min(
      state.executionStepCount,
      responseSteps.length - 1,
    )];
    els.taskControls.innerHTML = `
      <div class="composer-shell waiting-card">
        <div><strong>${escapeHtml(state.paused ? "Execution paused" : executed === "PHISHING" ? "Executing containment workflow" : "Executing release workflow")}</strong><span>${escapeHtml(currentStep?.title || actionLabel(executed))} · ${state.executionStepCount} of ${responseSteps.length}</span></div>
        <div class="run-status ${state.paused ? "paused" : ""}">${state.paused ? "Paused" : "Executing"}</div>
      </div>`;
    return;
  }
  if (state.taskStage === "complete") {
    const finalCase = state.taskIndex === TASK_COUNT - 1;
    els.taskControls.innerHTML = `
      <div class="agent-review completed-review">
        <div class="result-panel neutral study2-workflow-complete">
          <span class="result-kicker">Security workflow complete</span>
          <strong>${escapeHtml(actionLabel(state.responses[state.responses.length - 1].executed_verdict))}</strong>
        </div>
      </div>
      <div class="next-area"><button id="nextTask" class="next-floating-btn" type="button">${finalCase ? "Continue to questionnaire" : "Next task"}</button></div>`;
    document.getElementById("nextTask").addEventListener("click", () => {
      if (finalCase) {
        state.surveyMode = "pre";
        renderSurvey();
        showView("surveyView");
      } else {
        state.taskIndex += 1;
        prepareTask();
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    });
    return;
  }
  els.taskControls.innerHTML = "";
}

els.togglePlayback.addEventListener("click", () => {
  if (!["investigating", "executing"].includes(state.taskStage)) return;
  state.paused = !state.paused;
  syncTaskToolbar();
  renderTaskControls(formalTasks[state.taskIndex]);
});

els.resetTask.addEventListener("click", () => {
  const currentTaskId = formalTasks[state.taskIndex]?.id;
  const responseIndex = state.responses.findIndex(
    (response) => response.task_id === currentTaskId,
  );
  if (responseIndex >= 0) state.responses.splice(responseIndex, 1);
  prepareTask();
});

async function startInvestigation() {
  const runToken = ++state.runToken;
  state.taskStage = "investigating";
  state.paused = false;
  state.taskStartedAt = nowIso();
  state.stageStartedAt = nowIso();
  renderTask();
  const steps = buildEvidenceSteps(formalTasks[state.taskIndex]);
  for (let index = 0; index < steps.length; index += 1) {
    await wait(STEP_DELAY);
    if (!(await continueRun(runToken))) return;
    state.renderedStepCount = index + 1;
    renderTask();
  }
  await wait(STEP_DELAY);
  if (!(await continueRun(runToken))) return;
  state.currentTimings.investigation_completed_at = nowIso();
  state.taskStage = "human_initial";
  state.paused = false;
  state.stageStartedAt = nowIso();
  renderTask();
}

function wait(milliseconds) {
  return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}

async function continueRun(runToken) {
  while (state.paused && state.runToken === runToken) {
    await wait(100);
  }
  return state.runToken === runToken;
}

function bindVerdictForm(formId, fieldName, handler) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const verdict = formData.get(fieldName);
    const error = form.querySelector(".form-error");
    if (!verdict) {
      error.textContent = "Choose either phishing or legitimate.";
      error.classList.remove("hidden");
      return;
    }
    error.classList.add("hidden");
    handler(String(verdict), String(formData.get("rationale") || "").trim());
  });
}

async function handleInitialJudgment(verdict, rationale) {
  const runToken = state.runToken;
  state.humanInitial = verdict;
  state.humanInitialRationale = rationale;
  state.currentTimings.human_initial_submitted_at = nowIso();
  state.currentTimings.human_initial_latency_ms =
    Date.now() - new Date(state.stageStartedAt).getTime();
  state.taskStage = "agent_deciding";
  renderTask();
  await wait(DECISION_DELAY);
  if (state.runToken !== runToken) return;
  state.currentTimings.agent_revealed_at = nowIso();
  state.taskStage = "agent_revealed";
  state.stageStartedAt = nowIso();
  renderTask();
  if (state.condition.override) {
    await wait(FAST_MODE ? 80 : 1400);
    if (state.runToken !== runToken) return;
    state.taskStage = "human_final";
    state.stageStartedAt = nowIso();
    renderTask();
  }
}

function handleFinalJudgment(verdict) {
  state.humanFinal = verdict;
  state.currentTimings.human_final_submitted_at = nowIso();
  state.currentTimings.human_final_latency_ms =
    Date.now() - new Date(state.stageStartedAt).getTime();
  executeDecision();
}

async function executeDecision() {
  const runToken = ++state.runToken;
  const task = formalTasks[state.taskIndex];
  const agentVerdict = task.agent_decision.verdict;
  const executedVerdict = state.condition.override
    ? state.humanFinal
    : agentVerdict;
  state.taskStage = "executing";
  state.executionStepCount = 0;
  state.paused = false;
  state.currentTimings.execution_started_at = nowIso();
  renderTask();
  const responseSteps = buildPostSteps(task, executedVerdict);
  for (let index = 0; index < responseSteps.length; index += 1) {
    await wait(EXECUTION_STEP_DELAY);
    if (!(await continueRun(runToken))) return;
    state.executionStepCount = index + 1;
    renderTask();
  }

  const truth = task.ground_truth.verdict;
  const agrees = state.humanInitial === agentVerdict;
  const explanationShown =
    !agrees && state.condition.explanation;
  const response = {
    sequence: state.taskIndex + 1,
    task_id: task.id,
    source_row_number: task.source.row_number,
    url: task.url,
    condition_id: state.condition.id,
    explanation_condition: state.condition.explanation,
    override_condition: state.condition.override,
    human_initial_verdict: state.humanInitial,
    human_initial_rationale: state.humanInitialRationale || null,
    human_initial_correct: state.humanInitial === truth,
    agent_independent_verdict: agentVerdict,
    agent_independent_correct: agentVerdict === truth,
    judgments_agreed: agrees,
    reliance_outcome: agrees ? "SAME_JUDGMENT" : "REJECTED_HUMAN_RETAINED_AGENT",
    case_specific_explanation_shown: explanationShown,
    case_specific_explanation: explanationShown
      ? buildCaseExplanation(task)
      : null,
    agent_selected_final_verdict: agentVerdict,
    agent_selected_final_correct: agentVerdict === truth,
    human_final_verdict: state.condition.override ? state.humanFinal : null,
    human_final_correct: state.condition.override
      ? state.humanFinal === truth
      : null,
    human_overrode_agent: state.condition.override
      ? state.humanFinal !== agentVerdict
      : null,
    executed_verdict: executedVerdict,
    executed_action:
      executedVerdict === "PHISHING" ? "QUARANTINE_LINK" : "ALLOW_LINK",
    executed_correct: executedVerdict === truth,
    ground_truth_verdict: truth,
    correctness_feedback_shown_during_task: false,
    suspicious_signal_codes:
      task.tool_results.security_signal_summary.suspicious_signal_codes,
    protective_signal_codes:
      task.tool_results.security_signal_summary.protective_signal_codes,
    task_started_at: state.taskStartedAt,
    task_completed_at: nowIso(),
    total_task_time_ms:
      Date.now() - new Date(state.taskStartedAt).getTime(),
    timings: { ...state.currentTimings },
  };
  state.responses.push(response);
  state.taskStage = "complete";
  state.paused = false;
  saveProgress();
  renderTaskList();
  renderTask();
}

function surveyItemsForCurrentMode() {
  return state.surveyMode === "pre"
    ? PRE_FEEDBACK_SURVEY_ITEMS
    : CORE_SURVEY_ITEMS;
}

function renderFutureWorkflowChoice(index) {
  return `
    <fieldset class="survey-item workflow-choice-item" data-survey-item="${escapeHtml(FUTURE_WORKFLOW_CHOICE.id)}">
      <legend>
        <span class="survey-number">${index + 1}</span>
        <strong>${escapeHtml(FUTURE_WORKFLOW_CHOICE.text)}</strong>
      </legend>
      <div class="workflow-choice-options" role="radiogroup" aria-label="${escapeHtml(FUTURE_WORKFLOW_CHOICE.text)}">
        ${FUTURE_WORKFLOW_CHOICE.options.map((option) => `
          <label class="workflow-choice-option">
            <input type="radio" name="${escapeHtml(FUTURE_WORKFLOW_CHOICE.id)}" value="${escapeHtml(option.value)}" />
            <span>
              <strong>${escapeHtml(option.label)}</strong>
              <small>${escapeHtml(option.description)}</small>
            </span>
          </label>
        `).join("")}
      </div>
    </fieldset>`;
}

function renderSurvey() {
  const isPre = state.surveyMode === "pre";
  const surveyItems = surveyItemsForCurrentMode();
  state.surveyStartedAt = nowIso();
  els.surveyEyebrow.textContent = isPre
    ? "Questionnaire 1 of 2 · Before performance feedback"
    : "Questionnaire 2 of 2 · After performance feedback";
  els.surveyTitle.textContent = isPre
    ? "Tell us about the collaboration"
    : "Tell us how you feel after reviewing the results";
  els.surveyLead.textContent = isPre
    ? `Answer based on the ${TASK_COUNT} cases you just completed. The results have not yet been revealed. This questionnaire asks about both your overall evaluation and your experience of the decision process.`
    : "Answer the core evaluation questions again, now taking the retrospective performance feedback into account. Then choose the workflow you would prefer for future tasks.";
  els.surveySubmit.textContent = isPre
    ? "Continue to performance feedback"
    : "Finish study";
  els.surveyItems.innerHTML = surveyItems.map(
    (item, index) => `
      <fieldset class="survey-item" data-survey-item="${escapeHtml(item.id)}">
        <legend>
          <span class="survey-number">${index + 1}</span>
          <strong>${escapeHtml(item.text)}</strong>
        </legend>
        <div class="likert-scale" role="radiogroup" aria-label="${escapeHtml(item.text)}">
          ${[1, 2, 3, 4, 5, 6, 7].map((value) => `
            <label class="likert-option"><input type="radio" name="${escapeHtml(item.id)}" value="${value}" /><span>${value}</span></label>
          `).join("")}
        </div>
      </fieldset>`,
  ).join("") + (isPre ? "" : renderFutureWorkflowChoice(surveyItems.length));
  els.surveyError.classList.add("hidden");
}

function calculateConstructScores(items, responses) {
  const grouped = new Map();
  items.forEach((item) => {
    if (!grouped.has(item.construct)) {
      grouped.set(item.construct, {
        label: item.constructLabel,
        item_ids: [],
        values: [],
      });
    }
    const group = grouped.get(item.construct);
    group.item_ids.push(item.id);
    group.values.push(responses[item.id].value);
  });
  return Object.fromEntries(
    [...grouped.entries()].map(([construct, group]) => [
      construct,
      {
        label: group.label,
        item_ids: group.item_ids,
        item_count: group.values.length,
        mean: Number(
          (
            group.values.reduce((sum, value) => sum + value, 0) /
            group.values.length
          ).toFixed(3),
        ),
      },
    ]),
  );
}

els.surveyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const isPre = state.surveyMode === "pre";
  const surveyItems = surveyItemsForCurrentMode();
  const formData = new FormData(event.currentTarget);
  event.currentTarget
    .querySelectorAll(".survey-item.missing")
    .forEach((item) => item.classList.remove("missing"));
  const missing = surveyItems.filter((item) => !formData.get(item.id));
  const workflowChoiceMissing =
    !isPre && !formData.get(FUTURE_WORKFLOW_CHOICE.id);
  missing.forEach((item) => {
    event.currentTarget
      .querySelector(`[data-survey-item="${item.id}"]`)
      ?.classList.add("missing");
  });
  if (workflowChoiceMissing) {
    event.currentTarget
      .querySelector(`[data-survey-item="${FUTURE_WORKFLOW_CHOICE.id}"]`)
      ?.classList.add("missing");
  }
  const missingCount = missing.length + Number(workflowChoiceMissing);
  if (missingCount) {
    els.surveyError.textContent =
      `Please answer all items (${missingCount} remaining).`;
    els.surveyError.classList.remove("hidden");
    event.currentTarget
      .querySelector(".survey-item.missing")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  els.surveyError.classList.add("hidden");
  const responses = Object.fromEntries(
    surveyItems.map((item) => [
      item.id,
      {
        construct: item.construct,
        construct_label: item.constructLabel,
        item: item.text,
        value: Number(formData.get(item.id)),
      },
    ]),
  );
  const selectedWorkflow = isPre
    ? null
    : FUTURE_WORKFLOW_CHOICE.options.find(
        (option) =>
          option.value === formData.get(FUTURE_WORKFLOW_CHOICE.id),
      );
  const survey = {
    phase: isPre ? "before_performance_feedback" : "after_performance_feedback",
    item_set: isPre ? "full_experience_and_core_outcomes" : "repeated_core_outcomes",
    started_at: state.surveyStartedAt,
    completed_at: nowIso(),
    duration_ms:
      Date.now() - new Date(state.surveyStartedAt).getTime(),
    scale_min: 1,
    scale_max: 7,
    anchors: { 1: "Strongly disagree", 7: "Strongly agree" },
    repeated_core_item_ids: CORE_SURVEY_ITEMS.map((item) => item.id),
    responses,
    construct_scores: calculateConstructScores(surveyItems, responses),
    behavioral_workflow_choice: selectedWorkflow
      ? {
          construct: FUTURE_WORKFLOW_CHOICE.construct,
          construct_label: FUTURE_WORKFLOW_CHOICE.constructLabel,
          item: FUTURE_WORKFLOW_CHOICE.text,
          value: selectedWorkflow.value,
          label: selectedWorkflow.label,
          delegation_level: selectedWorkflow.delegationLevel,
        }
      : null,
  };

  if (state.surveyMode === "pre") {
    state.preSurvey = survey;
    state.feedbackViewedAt = nowIso();
    renderFeedback();
    saveProgress();
    showView("feedbackView");
  } else {
    state.postSurvey = survey;
    saveProgress();
    finishStudy();
  }
});

function resultBadge(correct, label) {
  return `<span class="result-badge ${correct ? "correct" : "incorrect"}">${correct ? "✓ Correct" : "✕ Incorrect"}${label ? `<small>${escapeHtml(label)}</small>` : ""}</span>`;
}

function renderFeedback() {
  els.feedbackTitle.textContent = `Review the results across all ${TASK_COUNT} cases`;
  const humanCorrect = state.responses.filter((response) => response.human_initial_correct).length;
  const agentCorrect = state.responses.filter((response) => response.agent_independent_correct).length;
  const agentFinalCorrect = state.responses.filter((response) => response.agent_selected_final_correct).length;
  const humanFinalCorrect = state.condition.override
    ? state.responses.filter((response) => response.human_final_correct).length
    : null;

  const summaries = [
    ["Agent independent", agentCorrect, TASK_COUNT],
    ["Human initial", humanCorrect, TASK_COUNT],
    ["Agent-selected final", agentFinalCorrect, TASK_COUNT],
    ...(state.condition.override
      ? [["Human binding final", humanFinalCorrect, TASK_COUNT]]
      : []),
  ];
  els.feedbackSummary.innerHTML = summaries.map(([label, score, total]) => `
    <div><span>${escapeHtml(label)}</span><strong>${score} / ${total}</strong><small>${Math.round((score / total) * 100)}% correct</small></div>
  `).join("");

  els.feedbackHead.innerHTML = `
    <tr>
      <th>Case</th>
      <th>Agent independent</th>
      <th>Human initial</th>
      <th>Agent-selected final</th>
      ${state.condition.override ? "<th>Human binding final</th>" : ""}
    </tr>`;
  els.feedbackBody.innerHTML = state.responses.map((response) => `
    <tr>
      <th>Case ${String(response.sequence).padStart(2, "0")}</th>
      <td>${resultBadge(response.agent_independent_correct, verdictLabel(response.agent_independent_verdict))}</td>
      <td>${resultBadge(response.human_initial_correct, verdictLabel(response.human_initial_verdict))}</td>
      <td>${resultBadge(response.agent_selected_final_correct, verdictLabel(response.agent_selected_final_verdict))}</td>
      ${state.condition.override ? `<td>${resultBadge(response.human_final_correct, verdictLabel(response.human_final_verdict))}</td>` : ""}
    </tr>`).join("");
}

els.continuePostSurvey.addEventListener("click", () => {
  state.surveyMode = "post";
  renderSurvey();
  showView("surveyView");
});

function buildSubmissionPayload() {
  const endedAt = nowIso();
  return {
    schema_version: "agent-trust-human-study2-v1",
    study_id: "study2_strong_agent_rejection",
    prolificId: state.participant.prolific_id,
    participant_info: state.participant,
    experiment_setup: {
      study: 2,
      research_question:
        "Effects of human-input rejection when the Agent is objectively stronger",
      between_subject_condition: state.condition.id,
      explanation_condition: state.condition.explanation,
      human_override_condition: state.condition.override,
      condition_label: state.condition.label,
      assignment_method: "client-side cryptographic random assignment, persisted by participant ID",
      formal_task_count: TASK_COUNT,
      production_task_count: data.metadata.study_design.task_count,
      task_ids: formalTasks.map((task) => task.id),
      task_source: data.metadata.source_selection,
      labels: {
        phishing: formalTasks.filter((task) => task.ground_truth.verdict === "PHISHING").length,
        legitimate: formalTasks.filter((task) => task.ground_truth.verdict === "LEGITIMATE").length,
      },
      agent_accuracy_in_served_tasks:
        formalTasks.filter((task) => task.agent_decision_correct).length /
        formalTasks.length,
      performance_statement_shown:
        data.metadata.study_design.public_performance_statement,
      correctness_feedback_during_tasks: false,
    },
    round_1: {
      label: "strong_agent_collaboration_tasks",
      responses: state.responses,
    },
    questionnaire_before_feedback: state.preSurvey,
    retrospective_feedback: {
      first_viewed_at: state.feedbackViewedAt,
      task_count: state.responses.length,
      agent_independent_correct: state.responses.filter((item) => item.agent_independent_correct).length,
      human_initial_correct: state.responses.filter((item) => item.human_initial_correct).length,
      agent_selected_final_correct: state.responses.filter((item) => item.agent_selected_final_correct).length,
      human_final_correct: state.condition.override
        ? state.responses.filter((item) => item.human_final_correct).length
        : null,
      columns_shown: [
        "agent_independent_correct",
        "human_initial_correct",
        "agent_selected_final_correct",
        ...(state.condition.override ? ["human_final_correct"] : []),
      ],
    },
    round_2: {
      label: "questionnaire_after_performance_feedback",
      questionnaire: state.postSurvey,
    },
    study_timing: {
      started_at: state.studyStartedAt,
      completed_at: endedAt,
      total_duration_ms:
        Date.now() - new Date(state.studyStartedAt).getTime(),
    },
    client: {
      user_agent: navigator.userAgent,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      fast_test_mode: FAST_MODE,
    },
  };
}

async function finishStudy() {
  state.submissionPayload = buildSubmissionPayload();
  const humanCorrect = state.responses.filter((item) => item.human_initial_correct).length;
  const agentCorrect = state.responses.filter((item) => item.agent_independent_correct).length;
  const executedCorrect = state.responses.filter((item) => item.executed_correct).length;
  els.completionSummary.innerHTML = `
    <div><span>Tasks completed</span><strong>${state.responses.length} / ${TASK_COUNT}</strong></div>
    <div><span>Human initial correct</span><strong>${humanCorrect}</strong></div>
    <div><span>Agent independent correct</span><strong>${agentCorrect}</strong></div>
    <div><span>Executed outcomes correct</span><strong>${executedCorrect}</strong></div>`;
  showView("doneView");
  downloadJson(state.submissionPayload);
  await submitPayload(state.submissionPayload);
}

function downloadJson(payload) {
  const safeId = (state.participant.prolific_id || "anon").replace(/[^A-Za-z0-9_-]/g, "_");
  const blob = new Blob([`${JSON.stringify(payload, null, 2)}\n`], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `study2_${safeId}_${new Date().toISOString().replaceAll(":", "-")}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function submitPayload(payload) {
  els.retrySubmission.classList.add("hidden");
  els.completionCodePanel.classList.add("hidden");
  els.submissionStatus.textContent = "Uploading study data…";
  els.submissionDetail.textContent =
    "A JSON copy was saved locally. Please keep this page open while the server confirms receipt.";
  els.submissionStatus.closest(".submission-status-card")?.setAttribute("data-tone", "pending");
  try {
    const response = await fetch(SUBMISSION_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ log: payload }),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.success) {
      throw new Error(result.error || `Server returned ${response.status}`);
    }
    els.submissionStatus.textContent = "Study data saved";
    els.submissionDetail.textContent =
      "The server confirmed receipt, and a JSON backup was saved to this device.";
    els.submissionStatus.closest(".submission-status-card")?.setAttribute("data-tone", "success");
    els.completionCode.textContent = result.completion_code || "Submitted";
    els.completionCodePanel.classList.remove("hidden");
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    els.submissionStatus.textContent = "Server upload was not confirmed";
    els.submissionDetail.textContent =
      `Your JSON backup was saved locally. ${error.message}`;
    els.submissionStatus.closest(".submission-status-card")?.setAttribute("data-tone", "error");
    els.retrySubmission.classList.remove("hidden");
  }
}

els.retrySubmission.addEventListener("click", () => {
  if (state.submissionPayload) submitPayload(state.submissionPayload);
});

if (formalTasks.some((task) => !task.agent_decision_correct)) {
  throw new Error("Study 2 requires a 100% correct Agent on every served task.");
}
