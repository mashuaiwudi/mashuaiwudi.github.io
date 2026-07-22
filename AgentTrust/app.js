const PHASE_TASK_COUNT = 20;
const FAST_MODE = new URLSearchParams(window.location.search).get("speed") === "fast";
const STEP_DELAY_MS = FAST_MODE ? 90 : 650;
const REVIEW_DELAY_MS = FAST_MODE ? 180 : 2200;
const POST_STEP_DELAY_MS = FAST_MODE ? 90 : 550;
const TRUST_CONDITIONS = ["over-reliance", "under-reliance", "calibrated-reliance"];
const STORAGE_KEY = "phishing_agent_study_responses";

const SURVEY_ITEMS = [
  {
    id: "perceived_over_reliance",
    construct: "Perceived over-reliance",
    text: "The AI accepted my input too readily, even when it should have been more cautious.",
  },
  {
    id: "perceived_under_reliance",
    construct: "Perceived under-reliance",
    text: "The AI was overly skeptical of my input.",
  },
  {
    id: "perceived_calibrated_reliance",
    construct: "Perceived calibrated reliance",
    text: "The AI relied on me when appropriate and questioned me when appropriate.",
  },
  {
    id: "ability_recognition_accuracy",
    construct: "Ability recognition accuracy",
    text: "The AI accurately understood my ability to judge suspicious links.",
  },
  {
    id: "value_recognition",
    construct: "Value recognition",
    text: "The AI appropriately recognized the value of my security judgment.",
  },
  {
    id: "underestimation",
    construct: "Underestimation",
    text: "The AI underestimated my competence.",
  },
  {
    id: "overestimation",
    construct: "Overestimation",
    text: "The AI overestimated my competence.",
  },
  {
    id: "respectful_evaluation",
    construct: "Respectful evaluation",
    text: "The AI treated my input as worth considering, even when it did not follow it.",
  },
  {
    id: "ai_meta_competence",
    construct: "AI meta-competence",
    text: "The AI understood the relative strengths and weaknesses of both of us.",
  },
  {
    id: "epistemic_judgment",
    construct: "Epistemic judgment",
    text: "The AI knew when my judgment was more reliable than its own.",
  },
  {
    id: "reliance_decision_quality",
    construct: "Reliance decision quality",
    text: "The AI made sensible decisions about whose judgment to rely on.",
  },
  {
    id: "boundary_understanding",
    construct: "Boundary understanding",
    text: "The AI showed a good understanding of what it should handle itself versus what it should rely on me for.",
  },
  {
    id: "experienced_agency",
    construct: "Experienced agency",
    text: "My input had a meaningful influence on the collaboration.",
  },
  {
    id: "autonomy_control",
    construct: "Autonomy/control",
    text: "I felt that I still had meaningful control over the collaboration.",
  },
  {
    id: "voice_correctability",
    construct: "Voice/correctability",
    text: "I felt able to correct or challenge the AI when needed.",
  },
  {
    id: "agency_threat",
    construct: "Agency threat",
    text: "The AI's behavior limited my ability to contribute meaningfully.",
  },
  {
    id: "responsibility_burden",
    construct: "Responsibility burden",
    text: "The AI placed too much responsibility on me.",
  },
  {
    id: "blame_accountability_pressure",
    construct: "Blame/accountability pressure",
    text: "If the collaboration failed, I would feel that too much of the blame was placed on me.",
  },
  {
    id: "future_willingness_to_help",
    construct: "Future willingness to help",
    text: "I would be willing to provide input to this security AI again.",
  },
  {
    id: "future_willingness_to_rely",
    construct: "Future willingness to rely",
    text: "I would rely on this AI's judgment in a future suspicious-link investigation.",
  },
];

const data = window.PHISHING_STUDY_DATA;
if (!data || !Array.isArray(data.examples) || !data.metadata?.study_design) {
  throw new Error("Phishing study data was not loaded.");
}

const taskById = new Map(data.examples.map((task) => [task.id, task]));
const phaseOneTasks = resolveTasks(data.metadata.study_design.phase_one_task_ids);
const phaseTwoTasks = resolveTasks(data.metadata.study_design.phase_two_task_ids);
const practiceTask = taskById.get(data.metadata.study_design.practice_task_id);
validateStudyData();

const state = {
  participant: null,
  condition: null,
  phase: "phase_one",
  taskIndex: 0,
  stepIndex: 0,
  taskStarted: false,
  playing: false,
  awaitingAdvice: false,
  postStepsStarted: false,
  taskCompleted: false,
  timer: null,
  taskStartedAt: null,
  pendingEvaluation: null,
  walkthroughStage: 0,
  walkthroughEvaluation: null,
  walkthroughTimer: null,
  responses: [],
  questionnaire: null,
  trustStats: createTrustStats(),
};

const els = {
  participantView: document.getElementById("participantView"),
  consentView: document.getElementById("consentView"),
  introView: document.getElementById("introView"),
  walkthroughView: document.getElementById("walkthroughView"),
  taskView: document.getElementById("taskView"),
  surveyView: document.getElementById("surveyView"),
  phaseTwoBriefView: document.getElementById("phaseTwoBriefView"),
  doneView: document.getElementById("doneView"),
  participantForm: document.getElementById("participantForm"),
  consentForm: document.getElementById("consentForm"),
  participantError: document.getElementById("participantError"),
  consentError: document.getElementById("consentError"),
  beginStudy: document.getElementById("beginStudy"),
  startPhaseTwo: document.getElementById("startPhaseTwo"),
  walkthroughTaskTitle: document.getElementById("walkthroughTaskTitle"),
  walkthroughTranscript: document.getElementById("walkthroughTranscript"),
  walkthroughAgentReview: document.getElementById("walkthroughAgentReview"),
  walkthroughWaitingCard: document.getElementById("walkthroughWaitingCard"),
  walkthroughStepLabel: document.getElementById("walkthroughStepLabel"),
  walkthroughAdviceBox: document.getElementById("walkthroughAdviceBox"),
  walkthroughAdviceForm: document.getElementById("walkthroughAdviceForm"),
  walkthroughAdviceRationale: document.getElementById("walkthroughAdviceRationale"),
  walkthroughAdviceError: document.getElementById("walkthroughAdviceError"),
  walkthroughGuideCount: document.getElementById("walkthroughGuideCount"),
  walkthroughGuideTitle: document.getElementById("walkthroughGuideTitle"),
  walkthroughGuideText: document.getElementById("walkthroughGuideText"),
  walkthroughNext: document.getElementById("walkthroughNext"),
  sidebarTaskList: document.getElementById("sidebarTaskList"),
  phaseSidebarLabel: document.getElementById("phaseSidebarLabel"),
  currentChatTitle: document.getElementById("currentChatTitle"),
  taskCounter: document.getElementById("taskCounter"),
  transcript: document.getElementById("transcript"),
  startTaskButton: document.getElementById("startTaskButton"),
  togglePlayback: document.getElementById("togglePlayback"),
  resetTask: document.getElementById("resetTask"),
  nextArea: document.getElementById("nextArea"),
  nextTask: document.getElementById("nextTask"),
  waitingCard: document.getElementById("waitingCard"),
  currentStepLabel: document.getElementById("currentStepLabel"),
  runStatus: document.getElementById("runStatus"),
  adviceBox: document.getElementById("adviceBox"),
  adviceForm: document.getElementById("adviceForm"),
  humanJudgmentLegend: document.getElementById("humanJudgmentLegend"),
  submitHumanInput: document.getElementById("submitHumanInput"),
  checkpointMeta: document.getElementById("checkpointMeta"),
  adviceRationale: document.getElementById("adviceRationale"),
  adviceError: document.getElementById("adviceError"),
  letAgentDecide: document.getElementById("letAgentDecide"),
  agentReview: document.getElementById("agentReview"),
  surveyForm: document.getElementById("surveyForm"),
  surveyItems: document.getElementById("surveyItems"),
  surveyError: document.getElementById("surveyError"),
  completionSummary: document.getElementById("completionSummary"),
  exportResponses: document.getElementById("exportResponses"),
  restartStudy: document.getElementById("restartStudy"),
};

function resolveTasks(ids) {
  return ids.map((id) => {
    const task = taskById.get(id);
    if (!task) throw new Error(`Study task not found: ${id}`);
    return task;
  });
}

function validateStudyData() {
  if (!practiceTask) throw new Error("Practice task was not found.");
  if (phaseOneTasks.includes(practiceTask) || phaseTwoTasks.includes(practiceTask)) {
    throw new Error("The walkthrough task must not be used in either formal phase.");
  }
  validatePhase(phaseOneTasks, "Phase 1");
  validatePhase(phaseTwoTasks, "Phase 2");
  const selected = data.statistics?.all;
  if (
    data.examples.length !== 100
    || selected?.ground_truth?.PHISHING !== 50
    || selected?.ground_truth?.LEGITIMATE !== 50
    || selected?.agent_correct !== 70
    || selected?.agent_incorrect !== 30
  ) {
    throw new Error("The 100-task study selection does not satisfy the declared quotas.");
  }
}

function validatePhase(tasks, name) {
  const phishing = tasks.filter((task) => task.ground_truth.verdict === "PHISHING").length;
  const legitimate = tasks.filter((task) => task.ground_truth.verdict === "LEGITIMATE").length;
  const agentCorrect = tasks.filter((task) => task.agent_decision_correct).length;
  if (
    tasks.length !== PHASE_TASK_COUNT
    || phishing !== 10
    || legitimate !== 10
    || agentCorrect !== 14
  ) {
    throw new Error(`${name} quota mismatch.`);
  }
}

function createTrustStats() {
  return {
    disagreements: 0,
    adoptedDisagreements: 0,
    rejectedDisagreements: 0,
    agreements: 0,
    delegatedDecisions: 0,
  };
}

function activeTasks() {
  return state.phase === "phase_one" ? phaseOneTasks : phaseTwoTasks;
}

function currentTask() {
  return activeTasks()[state.taskIndex];
}

function phaseLabel() {
  return state.phase === "phase_one" ? "Phase 1" : "Phase 2";
}

function showView(name) {
  const views = {
    participant: els.participantView,
    consent: els.consentView,
    intro: els.introView,
    walkthrough: els.walkthroughView,
    task: els.taskView,
    survey: els.surveyView,
    phaseTwoBrief: els.phaseTwoBriefView,
    done: els.doneView,
  };
  Object.values(views).forEach((view) => view.classList.remove("active"));
  views[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "instant" });
}

const WALKTHROUGH_GUIDE = [
  {
    title: "Start with the archived alert",
    text: "Read the inert URL and summary first. The agent has not called any tools yet. Select Start this task when you are ready.",
    target: "prompt",
    button: "Start this task",
  },
  {
    title: "Follow tool calls and returned evidence",
    text: "The agent autonomously queries domain attributes and redirect behavior. Each expanded block is a recorded tool result.",
    target: "tool-result",
    button: "Next · review signals",
  },
  {
    title: "Compare evidence in both directions",
    text: "Suspicious and protective signals appear together. Do not infer the answer from one cue such as HTTPS alone.",
    target: "signals",
    button: "Next · reach decision",
  },
  {
    title: "Make one required binary judgment",
    text: "Choose Phishing or Legitimate, optionally explain why, and submit. Formal Phase 1 does not allow delegation.",
    target: "advice",
    button: "Submit a practice judgment in the demo",
    requiresAdvice: true,
  },
  {
    title: "Read the reliance audit from left to right",
    text: "The panel shows the Agent's original judgment, your recommendation, and a prominent SAME, ACCEPTED, or REJECTED result.",
    target: "reliance",
    button: "Next · execute response",
  },
  {
    title: "The final verdict selects an action branch",
    text: "Phishing triggers reporting and containment. Legitimate triggers scoped allowlisting, release, and alert closure.",
    target: "response",
    button: "Next · reveal outcome",
  },
  {
    title: "Use the revealed label to evaluate the collaboration",
    text: "The dataset label objectively evaluates the Agent's original judgment and its final decision after considering human input.",
    target: "outcome",
    button: "Start Phase 1 · 20 tasks",
  },
];

function renderWalkthrough() {
  clearWalkthroughTimer();
  state.walkthroughStage = 0;
  state.walkthroughEvaluation = null;
  els.walkthroughTaskTitle.textContent = `Practice case · ${practiceTask.tool_results.domain_information.domain}`;
  els.walkthroughTranscript.innerHTML = "";
  els.walkthroughAgentReview.innerHTML = "";
  els.walkthroughAgentReview.classList.add("hidden");
  els.walkthroughAdviceBox.classList.add("hidden");
  els.walkthroughWaitingCard.classList.remove("hidden");
  els.walkthroughAdviceForm.reset();
  clearFormError(els.walkthroughAdviceError);
  renderWalkthroughPrompt();
  setWalkthroughGuide(0);
}

function renderWalkthroughPrompt() {
  els.walkthroughTranscript.insertAdjacentHTML(
    "beforeend",
    `
      <div class="user-message-row" data-walkthrough-target="prompt">
        <div class="user-bubble security-task-bubble">
          <div class="security-alert-heading">
            <span class="alert-icon">!</span>
            <div>
              <strong>Automated suspicious-link alert</strong>
              <p>Investigate this archived reserve URL and choose the appropriate response.</p>
            </div>
          </div>
          ${snapshotHtml(practiceTask, true)}
        </div>
      </div>
    `,
  );
}

function setWalkthroughGuide(index) {
  state.walkthroughStage = index;
  const guide = WALKTHROUGH_GUIDE[index];
  els.walkthroughGuideCount.textContent = `Step ${index + 1} of ${WALKTHROUGH_GUIDE.length}`;
  els.walkthroughGuideTitle.textContent = guide.title;
  els.walkthroughGuideText.textContent = guide.text;
  els.walkthroughNext.textContent = guide.button;
  els.walkthroughNext.disabled = Boolean(guide.requiresAdvice);
  els.walkthroughStepLabel.textContent = guide.title;
  highlightWalkthroughTarget(guide.target);
}

function highlightWalkthroughTarget(targetName) {
  document.querySelectorAll(".walkthrough-focus").forEach((element) => element.classList.remove("walkthrough-focus"));
  window.requestAnimationFrame(() => {
    const target = document.querySelector(`[data-walkthrough-target="${targetName}"]`);
    if (!target) return;
    target.classList.add("walkthrough-focus");
    if (els.walkthroughTranscript.contains(target)) {
      els.walkthroughTranscript.scrollTop = Math.max(0, target.offsetTop - els.walkthroughTranscript.clientHeight / 3);
    }
  });
}

function advanceWalkthrough() {
  if (state.walkthroughStage === 0) {
    const steps = createInvestigationSteps(practiceTask);
    appendToolStep(steps[0], {
      transcript: els.walkthroughTranscript,
      idPrefix: "walkthrough-domain",
    });
    appendToolStep(steps[1], {
      transcript: els.walkthroughTranscript,
      idPrefix: "walkthrough-redirect",
      walkthroughTarget: "tool-result",
    });
    setWalkthroughGuide(1);
    return;
  }
  if (state.walkthroughStage === 1) {
    const steps = createInvestigationSteps(practiceTask);
    steps.slice(2).forEach((step, index) => appendToolStep(step, {
      transcript: els.walkthroughTranscript,
      idPrefix: `walkthrough-check-${index}`,
      walkthroughTarget: step.id === "summarize_security_signals" ? "signals" : null,
    }));
    setWalkthroughGuide(2);
    return;
  }
  if (state.walkthroughStage === 2) {
    els.walkthroughWaitingCard.classList.add("hidden");
    els.walkthroughAdviceBox.classList.remove("hidden");
    els.walkthroughAdviceBox.dataset.walkthroughTarget = "advice";
    setWalkthroughGuide(3);
    els.walkthroughAdviceBox.querySelector("input")?.focus();
    return;
  }
  if (state.walkthroughStage === 4) {
    const evaluation = state.walkthroughEvaluation;
    const steps = createPostSteps(practiceTask, evaluation.finalVerdict);
    steps.slice(0, -1).forEach((step, index) => appendActionStep(step, evaluation.finalVerdict, {
      transcript: els.walkthroughTranscript,
      walkthroughTarget: index === 0 ? "response" : null,
    }));
    setWalkthroughGuide(5);
    return;
  }
  if (state.walkthroughStage === 5) {
    appendWalkthroughOutcome(practiceTask, state.walkthroughEvaluation);
    setWalkthroughGuide(6);
    return;
  }
  if (state.walkthroughStage === 6) {
    startPhase("phase_one");
  }
}

function startPhase(phase) {
  state.phase = phase;
  state.taskIndex = 0;
  startTask(0);
}

function startTask(index) {
  clearTimer();
  state.taskIndex = index;
  state.stepIndex = 0;
  state.taskStarted = false;
  state.playing = false;
  state.awaitingAdvice = false;
  state.postStepsStarted = false;
  state.taskCompleted = false;
  state.pendingEvaluation = null;
  state.taskStartedAt = null;
  els.transcript.innerHTML = "";
  els.agentReview.innerHTML = "";
  els.agentReview.classList.remove("considering-review", "completed-review");
  els.agentReview.classList.add("hidden");
  els.nextArea.classList.remove("with-reliance-review");
  els.nextArea.classList.add("hidden");
  els.waitingCard.classList.remove("hidden");
  els.adviceBox.classList.add("hidden");
  els.adviceForm.reset();
  clearFormError(els.adviceError);
  els.startTaskButton.classList.remove("hidden");
  els.togglePlayback.textContent = "Pause";
  els.togglePlayback.disabled = true;
  els.resetTask.disabled = false;
  els.letAgentDecide.classList.toggle("hidden", state.phase !== "phase_two");
  configureCheckpointControls();
  els.currentStepLabel.textContent = "Review the suspicious-link alert, then start the task";
  setRunStatus("Awaiting start", true);
  showView("task");
  renderTaskHeader();
  renderSidebar();
  renderTaskPrompt(currentTask());
}

function beginCurrentTask() {
  if (state.taskStarted || state.taskCompleted) return;
  state.taskStarted = true;
  state.playing = true;
  state.taskStartedAt = new Date().toISOString();
  els.startTaskButton.classList.add("hidden");
  els.togglePlayback.disabled = false;
  els.currentStepLabel.textContent = "Preparing the first domain-information query";
  setRunStatus("Running", false);
  state.timer = window.setTimeout(playPreStep, STEP_DELAY_MS);
}

function configureCheckpointControls() {
  const phaseTwo = state.phase === "phase_two";
  els.humanJudgmentLegend.textContent = phaseTwo
    ? "Choose the judgment the Agent must use"
    : "Your security recommendation";
  els.submitHumanInput.textContent = phaseTwo ? "Use my judgment" : "Send advice";
  els.checkpointMeta.textContent = phaseTwo
    ? "Permission checkpoint · Your submitted judgment is binding"
    : "One advice checkpoint · Agent retains final authority";
}

function renderTaskHeader() {
  const task = currentTask();
  const domain = task.tool_results.domain_information.domain;
  els.currentChatTitle.textContent = `Security case · ${domain}`;
  els.taskCounter.textContent = `${phaseLabel()} · Task ${state.taskIndex + 1} of ${activeTasks().length}`;
  els.phaseSidebarLabel.textContent = state.phase === "phase_one"
    ? "> phase-1-mandatory-advice"
    : "> phase-2-permission-checkpoint";
}

function renderSidebar() {
  const completedIds = new Set(state.responses.map((response) => response.task_id));
  els.sidebarTaskList.innerHTML = activeTasks().map((task, index) => {
    const current = index === state.taskIndex;
    const done = completedIds.has(task.id);
    const dotClass = done ? "done" : current ? "running" : "";
    return `
      <div class="chat-row ${current ? "active" : ""}">
        <span class="chat-dot ${dotClass}"></span>
        <span class="chat-name">Case ${String(index + 1).padStart(2, "0")}</span>
        <span class="chat-age">${done ? "done" : current ? "live" : "queued"}</span>
      </div>
    `;
  }).join("");
}

function renderTaskPrompt(task) {
  els.transcript.insertAdjacentHTML(
    "beforeend",
    `
      <div class="user-message-row">
        <div class="user-bubble security-task-bubble">
          <div class="security-alert-heading">
            <span class="alert-icon">!</span>
            <div>
              <strong>Automated suspicious-link alert</strong>
              <p>Investigate this archived URL and execute the appropriate security response.</p>
            </div>
          </div>
          ${snapshotHtml(task, false)}
        </div>
      </div>
    `,
  );
  scrollTranscript();
}

function snapshotHtml(task, walkthrough = false) {
  const domain = task.tool_results.domain_information;
  const title = task.tool_results.title_domain_analysis;
  const form = task.tool_results.login_form_analysis;
  const redirects = task.tool_results.redirect_analysis;
  return `
    <div class="page-snapshot ${walkthrough ? "walkthrough-snapshot" : ""}">
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
    </div>
  `;
}

function createInvestigationSteps(task, options = {}) {
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
        </div>
      `,
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
        </div>
      `,
    },
    {
      id: "summarize_security_signals",
      title: "Aggregate conflicting security signals",
      tool: "security_reasoner.aggregate_signals",
      caption: options.revealInitial
        ? "Phase 2 now reveals the Agent's intended judgment before you authorize it or provide a binding judgment."
        : "The classification is withheld until you give an independent recommendation.",
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
        <div class="decision-ready-note">${options.revealInitial
          ? "Evidence conflicts. The Agent must now show its intended judgment and request human permission."
          : "Evidence conflicts. Human advice is requested before the Agent reveals its initial judgment."}</div>
      `,
    },
  ];
}

function playPreStep() {
  if (!state.playing || state.awaitingAdvice || state.taskCompleted) return;
  const steps = createInvestigationSteps(currentTask(), {
    revealInitial: state.phase === "phase_two",
  });
  if (state.stepIndex >= steps.length) {
    reachAdviceCheckpoint();
    return;
  }
  const step = steps[state.stepIndex];
  appendToolStep(step);
  state.stepIndex += 1;
  els.currentStepLabel.textContent = `${step.title} completed · ${state.stepIndex} of ${steps.length}`;
  state.timer = window.setTimeout(playPreStep, STEP_DELAY_MS);
}

function appendToolStep(step, options = {}) {
  const transcript = options.transcript || els.transcript;
  const rowId = options.idPrefix || `step-${state.phase}-${state.taskIndex}-${step.id}`;
  const walkthroughAttribute = options.walkthroughTarget
    ? ` data-walkthrough-target="${escapeHtml(options.walkthroughTarget)}"`
    : "";
  transcript.insertAdjacentHTML(
    "beforeend",
    `
      <div id="${rowId}" class="assistant-row"${walkthroughAttribute}>
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
      </div>
    `,
  );
  const row = document.getElementById(rowId);
  const toggle = row.querySelector(".tool-toggle");
  const body = row.querySelector(".expanded-block");
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    toggle.textContent = expanded ? "+" : "−";
    body.classList.toggle("hidden", expanded);
  });
  scrollTranscript(transcript);
}

function reachAdviceCheckpoint() {
  clearTimer();
  state.playing = false;
  state.awaitingAdvice = true;
  els.togglePlayback.textContent = "Paused";
  els.togglePlayback.disabled = true;
  els.waitingCard.classList.add("hidden");
  els.adviceBox.classList.remove("hidden");
  if (state.phase === "phase_two") {
    showPhaseTwoInitialJudgment(currentTask());
    els.currentStepLabel.textContent = "Agent judgment revealed · waiting for your permission";
  } else {
    els.agentReview.classList.add("hidden");
    els.currentStepLabel.textContent = "Waiting for an independent human recommendation";
  }
  setRunStatus(state.phase === "phase_two" ? "Permission checkpoint" : "Human checkpoint", true);
  els.adviceBox.querySelector("input")?.focus();
}

function showPhaseTwoInitialJudgment(task) {
  els.agentReview.innerHTML = `
    <div class="review-kicker">Phase 2 · Agent requests permission before acting</div>
    <div class="phase-two-initial-disclosure">
      <div>
        <span>Agent's intended judgment</span>
        <strong class="${verdictClass(task.agent_decision.verdict)}">${escapeHtml(verdictLabel(task.agent_decision.verdict))}</strong>
      </div>
      <p>Select “Let the agent decide” to authorize this judgment, or submit the phishing-or-legitimate judgment the Agent must follow.</p>
    </div>
  `;
  els.agentReview.classList.remove("hidden");
}

function submitAdvice(verdict, rationale, delegated = false) {
  if (!state.awaitingAdvice) return;
  state.awaitingAdvice = false;
  els.resetTask.disabled = true;
  els.adviceBox.classList.add("hidden");
  clearFormError(els.adviceError);
  const task = currentTask();
  const humanLabel = delegated ? "Let the Agent decide" : verdictLabel(verdict);
  const humanKicker = state.phase === "phase_two"
    ? delegated ? "Human authorization" : "Human final judgment"
    : "Human recommendation";
  appendHumanInput(humanLabel, rationale, els.transcript, humanKicker);
  const evaluation = decideReliance(task, verdict, delegated);
  state.pendingEvaluation = evaluation;
  showRelianceProgress(task, evaluation, els.agentReview);
  state.timer = window.setTimeout(() => revealAgentDecision(task, evaluation), REVIEW_DELAY_MS);
}

function appendHumanInput(label, rationale, transcript = els.transcript, kicker = "Human recommendation") {
  transcript.insertAdjacentHTML(
    "beforeend",
    `
      <div class="user-message-row advice-message-row">
        <div class="user-bubble human-advice-bubble">
          <span class="snapshot-label">${escapeHtml(kicker)}</span>
          <strong>${escapeHtml(label)}</strong>
          ${rationale ? `<p>${escapeHtml(rationale)}</p>` : ""}
        </div>
      </div>
    `,
  );
  scrollTranscript(transcript);
}

function decideReliance(task, humanVerdict, delegated) {
  const phase = state.phase;
  const phaseTwo = phase === "phase_two";
  const initialVerdict = task.agent_decision.verdict;
  const truth = task.ground_truth.verdict;
  const decisiveAdvice = humanVerdict === "PHISHING" || humanVerdict === "LEGITIMATE";
  const agrees = decisiveAdvice && humanVerdict === initialVerdict;
  let finalVerdict = initialVerdict;
  let adopted = false;
  let responseMode = "RETAIN_INITIAL_DECISION";

  if (phaseTwo && delegated) {
    state.trustStats.delegatedDecisions += 1;
    responseMode = "AGENT_DECISION_AUTHORIZED";
  } else if (phaseTwo && decisiveAdvice) {
    finalVerdict = humanVerdict;
    adopted = humanVerdict !== initialVerdict;
    if (agrees) {
      state.trustStats.agreements += 1;
      responseMode = "HUMAN_CONFIRMS_AGENT";
    } else {
      state.trustStats.disagreements += 1;
      state.trustStats.adoptedDisagreements += 1;
      responseMode = "HUMAN_DECISION_FOLLOWED";
    }
  } else if (delegated) {
    state.trustStats.delegatedDecisions += 1;
    responseMode = "NO_HUMAN_ADVICE";
  } else if (agrees) {
    state.trustStats.agreements += 1;
    responseMode = "ADVICE_ALIGNS_WITH_AGENT";
  } else if (decisiveAdvice) {
    const disagreementIndex = state.trustStats.disagreements;
    state.trustStats.disagreements += 1;
    if (state.condition === "over-reliance") {
      adopted = disagreementIndex % 5 !== 4;
    } else if (state.condition === "under-reliance") {
      adopted = disagreementIndex % 5 === 4;
    } else {
      adopted = humanVerdict === truth && initialVerdict !== truth;
    }
    if (adopted) {
      finalVerdict = humanVerdict;
      state.trustStats.adoptedDisagreements += 1;
      responseMode = "ADOPT_ADVICE";
    } else {
      state.trustStats.rejectedDisagreements += 1;
      responseMode = "REJECT_ADVICE";
    }
  }

  return {
    phase,
    delegated,
    humanVerdict,
    decisiveAdvice,
    humanCorrect: decisiveAdvice ? humanVerdict === truth : null,
    initialVerdict,
    initialCorrect: initialVerdict === truth,
    agrees,
    adopted,
    humanDecisionFollowed: phaseTwo && !delegated && decisiveAdvice,
    responseMode,
    finalVerdict,
    finalCorrect: finalVerdict === truth,
    truth,
  };
}

function showRelianceProgress(task, evaluation, target) {
  const phaseTwo = evaluation.phase === "phase_two";
  target.innerHTML = `
    <div class="review-kicker">${phaseTwo ? "Permission checkpoint · applying your choice" : "Agent reliance decision · considering human input"}</div>
    <div class="security-review-grid">
      <div class="review-choice">
        <span>1 · Agent originally chose</span>
        <strong class="${verdictClass(evaluation.initialVerdict)}">${escapeHtml(verdictLabel(evaluation.initialVerdict))}</strong>
      </div>
      <div class="review-choice">
        <span>${phaseTwo ? evaluation.delegated ? "2 · Human authorized" : "2 · Human decided" : "2 · Human recommended"}</span>
        <strong>${escapeHtml(evaluation.delegated ? "Let the Agent decide" : verdictLabel(evaluation.humanVerdict))}</strong>
        <small>${evaluation.delegated ? "Original judgment authorized" : phaseTwo ? "Binding judgment received" : "Recommendation received"}</small>
      </div>
      <div class="review-choice final-choice pending-final-choice">
        <span>3 · Agent after human input</span>
        <strong>${phaseTwo ? "Applying…" : "Considering…"}</strong>
        <small>${phaseTwo ? "Applying the authorized decision rule" : "Comparing the recommendation with collected evidence"}</small>
      </div>
    </div>
    <div class="review-progress reliance-progress">
      <span class="review-spinner" aria-hidden="true"></span>
      <span>${phaseTwo ? "Applying your permission choice…" : "Considering the human recommendation…"}</span>
      <div class="review-bar"><span style="animation-duration: ${REVIEW_DELAY_MS}ms"></span></div>
    </div>
  `;
  target.classList.add("considering-review");
  target.classList.remove("hidden");
}

function relianceDecisionHtml(task, evaluation) {
  const phaseTwo = evaluation.phase === "phase_two";
  const responseText = relianceResponseText(evaluation);
  const outcome = relianceOutcome(evaluation);
  return `
    <div class="review-kicker">${phaseTwo ? "Permission checkpoint · complete decision audit" : "Agent reliance decision · complete audit"}</div>
    <div class="security-review-grid">
      <div class="review-choice">
        <span>1 · Agent originally chose</span>
        <strong class="${verdictClass(evaluation.initialVerdict)}">${escapeHtml(verdictLabel(evaluation.initialVerdict))}</strong>
      </div>
      <div class="review-choice">
        <span>${phaseTwo ? evaluation.delegated ? "2 · Human authorized" : "2 · Human decided" : "2 · Human recommended"}</span>
        <strong>${escapeHtml(evaluation.delegated ? "Let the Agent decide" : verdictLabel(evaluation.humanVerdict))}</strong>
        <small>${phaseTwo ? evaluation.delegated ? "Original judgment authorized" : "Binding human judgment" : "Human advice"}</small>
      </div>
      <div class="review-choice final-choice resolution-choice ${outcome.tone}">
        <span>3 · Agent after human input</span>
        <strong class="resolution-status">${escapeHtml(outcome.label)}</strong>
        ${outcome.secondary ? `<em>${escapeHtml(outcome.secondary)}</em>` : ""}
        <b class="final-verdict ${verdictClass(evaluation.finalVerdict)}">Final: ${escapeHtml(verdictLabel(evaluation.finalVerdict))}</b>
        <small>${escapeHtml(responseText)}</small>
      </div>
    </div>
  `;
}

function relianceOutcome(evaluation) {
  if (evaluation.phase === "phase_two") {
    if (evaluation.delegated) {
      return { label: "LET AGENT DECIDE", secondary: "Original judgment authorized", tone: "resolution-same" };
    }
    if (evaluation.agrees) {
      return { label: "SAME JUDGMENT", secondary: "Human judgment confirmed the Agent", tone: "resolution-same" };
    }
    return { label: "FOLLOWED HUMAN JUDGMENT", secondary: "Human judgment was binding", tone: "resolution-accepted" };
  }
  if (evaluation.agrees) {
    return { label: "SAME JUDGMENT", secondary: "No change was needed", tone: "resolution-same" };
  }
  if (evaluation.adopted) {
    return { label: "ACCEPTED HUMAN JUDGMENT", secondary: "Agent changed its judgment", tone: "resolution-accepted" };
  }
  return { label: "REJECTED HUMAN JUDGMENT", secondary: "Retained Agent judgment", tone: "resolution-rejected" };
}

function decidePracticeReliance(task, humanVerdict) {
  const initialVerdict = task.agent_decision.verdict;
  const truth = task.ground_truth.verdict;
  const agrees = humanVerdict === initialVerdict;
  const adopted = !agrees && humanVerdict === truth;
  const finalVerdict = adopted ? humanVerdict : initialVerdict;
  return {
    phase: "phase_one",
    delegated: false,
    humanVerdict,
    decisiveAdvice: true,
    humanCorrect: humanVerdict === truth,
    initialVerdict,
    initialCorrect: initialVerdict === truth,
    agrees,
    adopted,
    responseMode: agrees ? "ADVICE_ALIGNS_WITH_AGENT" : adopted ? "ADOPT_ADVICE" : "REJECT_ADVICE",
    finalVerdict,
    finalCorrect: finalVerdict === truth,
    truth,
  };
}

function submitWalkthroughAdvice(event) {
  event.preventDefault();
  if (state.walkthroughStage !== 3) return;
  const selected = els.walkthroughAdviceForm.querySelector('input[name="walkthroughAdviceVerdict"]:checked');
  clearFormError(els.walkthroughAdviceError);
  if (!selected) {
    showFormError(els.walkthroughAdviceError, "Choose either phishing or legitimate for the practice case.");
    els.walkthroughAdviceForm.querySelector("input")?.focus();
    return;
  }
  const rationale = els.walkthroughAdviceRationale.value.trim();
  appendHumanInput(verdictLabel(selected.value), rationale, els.walkthroughTranscript, "Human recommendation");
  els.walkthroughAdviceBox.classList.add("hidden");
  const evaluation = decidePracticeReliance(practiceTask, selected.value);
  state.walkthroughEvaluation = evaluation;
  els.walkthroughAgentReview.dataset.walkthroughTarget = "reliance";
  showRelianceProgress(practiceTask, evaluation, els.walkthroughAgentReview);
  els.walkthroughStepLabel.textContent = "The Agent is considering your practice judgment";
  clearWalkthroughTimer();
  state.walkthroughTimer = window.setTimeout(() => {
    els.walkthroughAgentReview.innerHTML = relianceDecisionHtml(practiceTask, evaluation);
    els.walkthroughAgentReview.classList.remove("considering-review", "hidden");
    setWalkthroughGuide(4);
  }, REVIEW_DELAY_MS);
}

function appendWalkthroughOutcome(task, evaluation) {
  els.walkthroughTranscript.insertAdjacentHTML(
    "beforeend",
    `
      <div class="assistant-row final-outcome-row" data-walkthrough-target="outcome">
        <div class="result-panel ${evaluation.finalCorrect ? "success" : "conflict"} final-security-result walkthrough-final-result">
          <span class="result-kicker">Practice dataset outcome revealed</span>
          <strong>${escapeHtml(evaluation.finalCorrect ? "Correct security outcome" : "Incorrect security outcome")}</strong>
          <p>Ground truth: <b>${escapeHtml(verdictLabel(evaluation.truth))}</b> · Final action: <b>${escapeHtml(evaluation.finalVerdict === "PHISHING" ? "QUARANTINE_LINK" : "ALLOW_LINK")}</b></p>
        </div>
      </div>
    `,
  );
  scrollTranscript(els.walkthroughTranscript);
}

function revealAgentDecision(task, evaluation) {
  const responseText = relianceResponseText(evaluation);
  els.agentReview.innerHTML = relianceDecisionHtml(task, evaluation);
  els.agentReview.classList.remove("considering-review");
  els.agentReview.classList.remove("hidden");
  els.transcript.insertAdjacentHTML(
    "beforeend",
    `
      <div class="assistant-row agent-decision-row">
        <div class="meta-row">
          <span class="decision-node">D</span>
          <div class="meta-text">
            <span class="tool-title">Make final phishing decision</span>
            <span class="tool-kind">agent decision</span>
          </div>
        </div>
        <div class="expanded-block">
          <div class="result-panel ${evaluation.finalVerdict === "PHISHING" ? "conflict" : "success"}">
            <span class="result-kicker">Final verdict</span>
            <strong>${escapeHtml(verdictLabel(evaluation.finalVerdict))}</strong>
            <p>${escapeHtml(responseText)}</p>
          </div>
        </div>
      </div>
    `,
  );
  state.postStepsStarted = true;
  state.stepIndex = 0;
  els.waitingCard.classList.remove("hidden");
  els.currentStepLabel.textContent = evaluation.finalVerdict === "PHISHING"
    ? "Executing containment workflow"
    : "Executing release workflow";
  setRunStatus("Executing", false);
  scrollTranscript();
  state.timer = window.setTimeout(playPostStep, POST_STEP_DELAY_MS);
}

function relianceResponseText(evaluation) {
  if (evaluation.phase === "phase_two") {
    if (evaluation.delegated) {
      return "You authorized the Agent to use its original judgment, so the final verdict is unchanged.";
    }
    if (evaluation.agrees) {
      return "Your judgment matched the Agent's intended judgment, so the Agent proceeded with that judgment.";
    }
    return "You provided a different final judgment. In Phase 2, the Agent followed your binding judgment.";
  }
  if (evaluation.delegated) {
    return "No human recommendation was provided, so I retained my evidence-based initial judgment.";
  }
  if (evaluation.agrees) {
    return "Your recommendation aligned with my initial judgment, so the final verdict remains unchanged.";
  }
  if (evaluation.adopted) {
    return "I adopted your recommendation after comparing it with the conflicting security evidence.";
  }
  return "I considered your recommendation but retained my initial judgment because I weighted the archived security evidence differently.";
}

function createPostSteps(task, finalVerdict) {
  const branchKey = finalVerdict === "PHISHING" ? "phishing_response" : "legitimate_response";
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

function playPostStep() {
  if (!state.postStepsStarted || state.taskCompleted) return;
  const task = currentTask();
  const evaluation = state.pendingEvaluation;
  const steps = createPostSteps(task, evaluation.finalVerdict);
  if (state.stepIndex >= steps.length) {
    finishTask(task, evaluation);
    return;
  }
  const step = steps[state.stepIndex];
  appendActionStep(step, evaluation.finalVerdict);
  state.stepIndex += 1;
  els.currentStepLabel.textContent = `${step.title} · ${state.stepIndex} of ${steps.length}`;
  state.timer = window.setTimeout(playPostStep, POST_STEP_DELAY_MS);
}

function appendActionStep(step, verdict, options = {}) {
  const isFinal = step.type === "final_result";
  const transcript = options.transcript || els.transcript;
  const walkthroughAttribute = options.walkthroughTarget
    ? ` data-walkthrough-target="${escapeHtml(options.walkthroughTarget)}"`
    : "";
  transcript.insertAdjacentHTML(
    "beforeend",
    `
      <div class="assistant-row action-step-row"${walkthroughAttribute}>
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
      </div>
    `,
  );
  scrollTranscript(transcript);
}

function finishTask(task, evaluation) {
  clearTimer();
  state.taskCompleted = true;
  state.postStepsStarted = false;
  els.waitingCard.classList.add("hidden");
  els.agentReview.classList.remove("hidden");
  els.agentReview.classList.add("completed-review");
  const correctClass = evaluation.finalCorrect ? "success" : "conflict";
  const resultLabel = evaluation.finalCorrect ? "Correct security outcome" : "Incorrect security outcome";
  els.transcript.insertAdjacentHTML(
    "beforeend",
    `
      <div class="assistant-row final-outcome-row">
        <div class="result-panel ${correctClass} final-security-result">
          <span class="result-kicker">Dataset outcome revealed</span>
          <strong>${escapeHtml(resultLabel)}</strong>
          <p>Ground truth: <b>${escapeHtml(verdictLabel(evaluation.truth))}</b> · Final action: <b>${escapeHtml(evaluation.finalVerdict === "PHISHING" ? "QUARANTINE_LINK" : "ALLOW_LINK")}</b></p>
          <div class="outcome-audit-pills">
            <span>Initial agent ${evaluation.initialCorrect ? "correct" : "incorrect"}</span>
            <span>${evaluation.phase === "phase_two"
              ? evaluation.delegated ? "Agent judgment authorized" : "Human judgment followed"
              : evaluation.adopted ? "Human advice adopted" : "Agent judgment retained"}</span>
          </div>
        </div>
      </div>
    `,
  );
  recordResponse(task, evaluation);
  renderSidebar();
  els.nextTask.textContent = state.taskIndex === activeTasks().length - 1
    ? state.phase === "phase_one" ? "Continue to questionnaire" : "Finish study"
    : "Next task";
  els.nextArea.classList.remove("hidden");
  els.nextArea.classList.add("with-reliance-review");
  scrollTranscript();
}

function recordResponse(task, evaluation) {
  const selected = els.adviceForm.querySelector('input[name="adviceVerdict"]:checked');
  const response = {
    task_id: task.id,
    phase: state.phase,
    phase_task_number: state.taskIndex + 1,
    task_started_at: state.taskStartedAt,
    completed_at: new Date().toISOString(),
    url: task.url,
    human_input: {
      mode: evaluation.delegated
        ? "LET_AGENT_DECIDE"
        : state.phase === "phase_two" ? "BINDING_DECISION" : "ADVICE",
      verdict: evaluation.delegated ? null : evaluation.humanVerdict,
      rationale: evaluation.delegated ? "" : els.adviceRationale.value.trim(),
    },
    human_advice: state.phase === "phase_one" && !evaluation.delegated ? {
      verdict: evaluation.humanVerdict,
      rationale: els.adviceRationale.value.trim(),
      correct: evaluation.humanCorrect,
    } : null,
    human_decision: state.phase === "phase_two" && !evaluation.delegated ? {
      verdict: evaluation.humanVerdict,
      rationale: els.adviceRationale.value.trim(),
      correct: evaluation.humanCorrect,
      binding: true,
    } : null,
    delegated_to_agent: evaluation.delegated,
    agent_initial_decision: task.agent_decision,
    agent_initial_correct: evaluation.initialCorrect,
    reliance_response: evaluation.responseMode,
    advice_adopted: state.phase === "phase_one" ? evaluation.adopted : null,
    human_decision_followed: state.phase === "phase_two" && !evaluation.delegated
      ? evaluation.finalVerdict === evaluation.humanVerdict
      : null,
    agent_final_verdict: evaluation.finalVerdict,
    agent_final_action: evaluation.finalVerdict === "PHISHING" ? "QUARANTINE_LINK" : "ALLOW_LINK",
    agent_final_correct: evaluation.finalCorrect,
    ground_truth: task.ground_truth,
    condition: state.condition,
    selected_radio_present_at_recording: Boolean(selected),
  };
  const existing = state.responses.findIndex((item) => item.task_id === task.id);
  if (existing >= 0) state.responses.splice(existing, 1, response);
  else state.responses.push(response);
  saveProgress();
}

function resultGrid(entries) {
  return `
    <div class="security-result-grid">
      ${entries.map(([label, value]) => `
        <div>
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
        </div>
      `).join("")}
    </div>
  `;
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

function verdictLabel(verdict) {
  const labels = {
    PHISHING: "Phishing site",
    LEGITIMATE: "Legitimate site",
  };
  return labels[verdict] || "No recommendation";
}

function verdictClass(verdict) {
  return verdict === "PHISHING" ? "verdict-phishing" : verdict === "LEGITIMATE" ? "verdict-legitimate" : "";
}

function humanizeCode(value) {
  return String(value).replaceAll("_", " ").toLowerCase().replace(/^./, (character) => character.toUpperCase());
}

function yesNo(value) {
  return value ? "Yes" : "No";
}

function formatScore(value) {
  return `${Number(value).toFixed(1)} / 100`;
}

function formatDecimal(value) {
  return Number(value).toFixed(3);
}

function scrollTranscript(transcript = els.transcript) {
  window.requestAnimationFrame(() => {
    transcript.scrollTop = transcript.scrollHeight;
  });
}

function setRunStatus(text, paused) {
  els.runStatus.textContent = text;
  els.runStatus.classList.toggle("paused", paused);
}

function clearTimer() {
  if (state.timer !== null) {
    window.clearTimeout(state.timer);
    state.timer = null;
  }
}

function clearWalkthroughTimer() {
  if (state.walkthroughTimer !== null) {
    window.clearTimeout(state.walkthroughTimer);
    state.walkthroughTimer = null;
  }
}

function assignCondition() {
  if (window.crypto?.getRandomValues) {
    const value = new Uint32Array(1);
    window.crypto.getRandomValues(value);
    return TRUST_CONDITIONS[value[0] % TRUST_CONDITIONS.length];
  }
  return TRUST_CONDITIONS[Math.floor(Math.random() * TRUST_CONDITIONS.length)];
}

function renderSurveyItems() {
  els.surveyItems.innerHTML = SURVEY_ITEMS.map((item, index) => `
    <fieldset class="survey-item">
      <legend>
        <span class="survey-number">${index + 1}</span>
        <span class="survey-construct">${escapeHtml(item.construct)}</span>
        <strong>${escapeHtml(item.text)}</strong>
      </legend>
      <div class="likert-scale">
        ${[1, 2, 3, 4, 5, 6, 7].map((value) => `
          <label class="likert-option">
            <input type="radio" name="${escapeHtml(item.id)}" value="${value}" />
            <span>${value}</span>
          </label>
        `).join("")}
      </div>
    </fieldset>
  `).join("");
}

function collectSurvey() {
  clearFormError(els.surveyError);
  const answers = {};
  const missing = [];
  for (const item of SURVEY_ITEMS) {
    const input = els.surveyForm.querySelector(`input[name="${item.id}"]:checked`);
    const fieldset = els.surveyForm.querySelector(`input[name="${item.id}"]`)?.closest(".survey-item");
    fieldset?.classList.toggle("missing", !input);
    if (!input) missing.push(item);
    else answers[item.id] = {
      construct: item.construct,
      text: item.text,
      value: Number(input.value),
    };
  }
  if (missing.length > 0) {
    showFormError(els.surveyError, `Please answer every item. Missing: ${missing[0].construct}.`);
    els.surveyForm.querySelector(`input[name="${missing[0].id}"]`)?.focus();
    return null;
  }
  return {
    scale: "1 = strongly disagree, 7 = strongly agree",
    submitted_at: new Date().toISOString(),
    answers,
  };
}

function saveProgress() {
  const payload = {
    participant: state.participant,
    condition: state.condition,
    phase: state.phase,
    responses: state.responses,
    questionnaire: state.questionnaire,
    trust_stats: state.trustStats,
    updated_at: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function exportResponses() {
  const payload = {
    study: "suspicious_link_security_agent_study",
    dataset: data.metadata.source_dataset,
    participant: state.participant,
    condition: state.condition,
    task_design: data.metadata.study_design,
    responses: state.responses,
    questionnaire: state.questionnaire,
    trust_stats: state.trustStats,
    exported_at: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `phishing-agent-study-${state.participant?.participantId || "participant"}.json`;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 500);
}

function renderCompletionSummary() {
  const completed = state.responses.length;
  const finalCorrect = state.responses.filter((response) => response.agent_final_correct).length;
  const adopted = state.responses.filter((response) => response.phase === "phase_one" && response.advice_adopted).length;
  const followed = state.responses.filter((response) => response.phase === "phase_two" && response.human_decision_followed).length;
  els.completionSummary.innerHTML = `
    <div><span>Tasks completed</span><strong>${completed} / 40</strong></div>
    <div><span>Final agent outcomes correct</span><strong>${finalCorrect} / ${completed}</strong></div>
    <div><span>Phase 1 advice accepted</span><strong>${adopted}</strong></div>
    <div><span>Phase 2 human judgments followed</span><strong>${followed}</strong></div>
  `;
}

function validateParticipantForm() {
  clearFormError(els.participantError);
  const fields = [
    [document.getElementById("participantId"), "Please enter your Prolific ID."],
    [document.getElementById("ageRange"), "Please select your age range."],
    [document.getElementById("securityExperience"), "Please select your suspicious-link experience."],
    [document.getElementById("agentExperience"), "Please select your AI or agent experience."],
  ];
  for (const [field, message] of fields) {
    const missing = !String(field.value).trim();
    field.toggleAttribute("aria-invalid", missing);
    if (missing) {
      showFormError(els.participantError, message);
      field.focus();
      return false;
    }
  }
  return true;
}

function showFormError(element, message) {
  element.textContent = message;
  element.classList.remove("hidden");
}

function clearFormError(element) {
  element.textContent = "";
  element.classList.add("hidden");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

els.participantForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateParticipantForm()) return;
  state.participant = Object.fromEntries(new FormData(els.participantForm).entries());
  saveProgress();
  showView("consent");
});

els.consentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const consent = document.getElementById("consentCheck");
  clearFormError(els.consentError);
  consent.toggleAttribute("aria-invalid", !consent.checked);
  if (!consent.checked) {
    showFormError(els.consentError, "Please provide consent before continuing.");
    consent.focus();
    return;
  }
  state.condition = assignCondition();
  state.participant = {
    ...state.participant,
    consent: true,
    condition: state.condition,
    started_at: new Date().toISOString(),
  };
  saveProgress();
  showView("intro");
});

els.beginStudy.addEventListener("click", () => {
  renderWalkthrough();
  showView("walkthrough");
});

els.walkthroughNext.addEventListener("click", advanceWalkthrough);
els.walkthroughAdviceForm.addEventListener("submit", submitWalkthroughAdvice);
els.startPhaseTwo.addEventListener("click", () => startPhase("phase_two"));
els.startTaskButton.addEventListener("click", beginCurrentTask);

els.togglePlayback.addEventListener("click", () => {
  if (!state.taskStarted || state.awaitingAdvice || state.taskCompleted) return;
  state.playing = !state.playing;
  els.togglePlayback.textContent = state.playing ? "Pause" : "Resume";
  setRunStatus(state.playing ? "Running" : "Paused", !state.playing);
  clearTimer();
  if (state.playing) state.timer = window.setTimeout(playPreStep, STEP_DELAY_MS);
});

els.resetTask.addEventListener("click", () => {
  const task = currentTask();
  const responseIndex = state.responses.findIndex((response) => response.task_id === task.id);
  if (responseIndex >= 0) state.responses.splice(responseIndex, 1);
  startTask(state.taskIndex);
});

els.adviceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const selected = els.adviceForm.querySelector('input[name="adviceVerdict"]:checked');
  clearFormError(els.adviceError);
  if (!selected) {
    showFormError(
      els.adviceError,
      state.phase === "phase_two"
        ? "Select either phishing or legitimate for the judgment the Agent must follow."
        : "Select either phishing or legitimate before sending advice.",
    );
    els.adviceForm.querySelector("input")?.focus();
    return;
  }
  submitAdvice(selected.value, els.adviceRationale.value.trim(), false);
});

els.letAgentDecide.addEventListener("click", () => submitAdvice(null, "", true));

els.nextTask.addEventListener("click", () => {
  if (state.taskIndex < activeTasks().length - 1) {
    startTask(state.taskIndex + 1);
    return;
  }
  clearTimer();
  saveProgress();
  if (state.phase === "phase_one") {
    showView("survey");
  } else {
    renderCompletionSummary();
    showView("done");
  }
});

els.surveyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const questionnaire = collectSurvey();
  if (!questionnaire) return;
  state.questionnaire = questionnaire;
  saveProgress();
  showView("phaseTwoBrief");
});

els.exportResponses.addEventListener("click", exportResponses);

els.restartStudy.addEventListener("click", () => {
  clearTimer();
  clearWalkthroughTimer();
  state.participant = null;
  state.condition = null;
  state.phase = "phase_one";
  state.taskIndex = 0;
  state.stepIndex = 0;
  state.taskStarted = false;
  state.playing = false;
  state.awaitingAdvice = false;
  state.postStepsStarted = false;
  state.taskCompleted = false;
  state.responses = [];
  state.questionnaire = null;
  state.trustStats = createTrustStats();
  localStorage.removeItem(STORAGE_KEY);
  els.participantForm.reset();
  els.consentForm.reset();
  els.surveyForm.reset();
  renderSurveyItems();
  showView("participant");
});

renderSurveyItems();
console.info("[Phishing Study Dataset]", data.statistics);
