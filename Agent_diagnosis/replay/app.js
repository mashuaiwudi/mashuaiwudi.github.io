const AGENT_SOURCES = new Set(["agent", "assistant", "model", "openclaw"]);
const STATIC_SESSION_KEY = "vera-agent-oversight-study1-static-v14";
const NAVIGATION_KEY = "vera-agent-oversight-study1-navigation-v14";
const STORAGE_KEY = "vera-study1-static-replay-progress-v14";
const PLAYBACK_DELAY_MULTIPLIER = 2;
const TUTORIAL_MODE = new URLSearchParams(window.location.search).get("tutorial") === "1";
const ARRIVED_FROM_STUDY = consumeInternalNavigation("replay");
const TUTORIAL_GUIDE = [
  {
    target: ".task-context",
    title: "Task instruction",
    body: "This is the user’s goal and its constraints. Judge every later agent action against this instruction.",
  },
  {
    target: '[data-action="toggle-play"]',
    title: "Pause when something looks wrong",
    body: "The large central control starts or pauses playback. If you notice a warning sign, pause immediately so you can inspect the visible evidence and record your judgment.",
    requiredAction: "toggle-play",
    simulatePlaying: true,
  },
  {
    target: ".step-card",
    title: "One card for every decision step",
    body: "Every decision step appears on the main timeline, whether it contains an agent message, tool activity, or both. The step number is the point where your oversight note will be recorded.",
    revealStep: 1,
  },
  {
    target: '.step-card[data-step-card="1"] .tool-exchange',
    title: "Tool call and observed result",
    body: "The tool name, action summary, and result summary are always visible. Open a tool row when you need its complete input or observation; full logs remain folded to reduce clutter.",
  },
  {
    target: ".scrubber",
    title: "Visible trajectory prefix",
    body: "The timeline shows the decision step you have reached. During the study, focus on what was knowable at that point—not on hindsight.",
  },
  {
    target: '.step-card[data-step-card="1"] .oversight-actions [data-action="record-oversight"]',
    title: "Record an oversight note",
    body: "Use this single action to record an information need, a suspected problem, an intervention intention, or any combination of the three. Only the Suspect section asks for a diagnostic judgment and confidence.",
    requiredAction: "submit-oversight-note",
    allowedAction: "record-oversight",
  },
  {
    target: '.completion-card [data-action="open-summary"]',
    title: "End-of-trajectory judgment",
    body: "Practice the same final judgment used in the formal study. Open the form, decide whether the task was completed correctly, and submit your evidence-based judgment.",
    requiredAction: "submit-verdict",
    allowedAction: "open-summary",
    finish: true,
  },
];

const state = {
  runs: [],
  allRuns: [],
  session: null,
  selectedId: null,
  revealedSteps: 0,
  furthestRevealedSteps: 0,
  activePhase: null,
  isPlaying: false,
  speed: 1,
  follow: true,
  search: "",
  openInfoStep: null,
  infoResponse: null,
  customInfoStep: null,
  customInfoDraft: "",
  summaryOpen: false,
  modalMode: null,
  modalStep: null,
  modalOpenedAt: null,
  trialIndex: 0,
  totalTrials: 10,
  trialStartedAt: 0,
  isSavingTrial: false,
  saveError: "",
  timer: null,
  expandedExchanges: new Set(),
  records: {},
  tutorialMode: TUTORIAL_MODE,
  tutorialGuideIndex: 0,
  lastRenderedTutorialIndex: null,
  comprehensionQuestions: {},
  comprehensionError: "",
};

const root = document.querySelector("#root");

init();

async function init() {
  try {
    if (!ARRIVED_FROM_STUDY) {
      resetStoredStudyState();
      window.location.replace("../index.html");
      return;
    }
    state.session = loadStaticSession();
    if (!state.session) {
      window.location.replace("../index.html");
      return;
    }
    const expectedStage = TUTORIAL_MODE ? "intro" : "study";
    if (state.session.stage !== expectedStage) {
      window.location.replace("../index.html");
      return;
    }
    if (TUTORIAL_MODE) {
      await loadTutorialTrial();
    } else {
      const [dataResponse, comprehensionResponse] = await Promise.all([
        fetch("../data/trajectories.json?v=2"),
        fetch("../data/comprehension-questions.json?v=2"),
      ]);
      if (!dataResponse.ok) throw new Error(`Trajectory data returned ${dataResponse.status}`);
      if (!comprehensionResponse.ok) {
        throw new Error(`Comprehension questions returned ${comprehensionResponse.status}`);
      }
      state.allRuns = await dataResponse.json();
      const comprehensionData = await comprehensionResponse.json();
      if (!Array.isArray(state.allRuns) || state.allRuns.length !== 20) {
        throw new Error("The 20-item trajectory pool is incomplete.");
      }
      if (!Array.isArray(comprehensionData.questions) || comprehensionData.questions.length !== 20) {
        throw new Error("The 20-item comprehension-question set is incomplete.");
      }
      state.comprehensionQuestions = Object.fromEntries(
        comprehensionData.questions.map((question) => [question.studyId, question]),
      );
      if (state.allRuns.some((run) => !state.comprehensionQuestions[run.studyId])) {
        throw new Error("A trajectory is missing its comprehension question.");
      }
      state.trialIndex = Number(state.session.currentTrial || 0);
      await loadCurrentTrial(true);
    }
    buildShell();
    renderAll();
    installStudyTelemetry();
  } catch (error) {
    root.innerHTML = `
      <main class="loading-screen error-screen">
        <span class="loading-mark" aria-hidden="true">!</span>
        <h1>Unable to load the study trajectory</h1>
        <p>${escapeHtml(error.message)}</p>
        <p class="loading-help">Refresh the page. If the problem continues, contact the research team.</p>
      </main>
    `;
  }
}

function markInternalNavigation(destination) {
  sessionStorage.setItem(NAVIGATION_KEY, JSON.stringify({
    destination,
    createdAt: Date.now(),
  }));
}

function consumeInternalNavigation(destination) {
  try {
    const value = JSON.parse(sessionStorage.getItem(NAVIGATION_KEY) || "null");
    sessionStorage.removeItem(NAVIGATION_KEY);
    return Boolean(
      value &&
      value.destination === destination &&
      Date.now() - Number(value.createdAt) < 10000,
    );
  } catch {
    sessionStorage.removeItem(NAVIGATION_KEY);
    return false;
  }
}

function resetStoredStudyState() {
  localStorage.removeItem(STATIC_SESSION_KEY);
  for (let index = sessionStorage.length - 1; index >= 0; index -= 1) {
    const key = sessionStorage.key(index);
    if (key?.startsWith("vera-study1-static-replay-progress-")) {
      sessionStorage.removeItem(key);
    }
  }
  sessionStorage.removeItem(NAVIGATION_KEY);
}

async function loadTutorialTrial() {
  const response = await fetch("../data/tutorial-trajectory.json?v=14");
  if (!response.ok) throw new Error(`Practice trajectory returned ${response.status}`);
  const run = await response.json();
  if (!run || !Array.isArray(run.decision_steps) || run.decision_steps.length >= 30) {
    throw new Error("The practice trajectory is incomplete.");
  }
  state.allRuns = [run];
  state.runs = [run];
  state.selectedId = run.studyId || "PRACTICE";
  state.trialIndex = 0;
  state.totalTrials = 1;
  state.trialStartedAt = performance.now();
  state.records = state.session.records || {};
  delete state.records[state.selectedId];
  state.session.records = state.records;
  state.session.walkthroughCompleted = false;
  state.session.walkthroughProgress = null;
  state.session.events = (state.session.events || []).filter(
    (event) => !(event.phase === "intro" && event.studyId === state.selectedId),
  );
  sessionStorage.removeItem(trialProgressKey());
  state.revealedSteps = 0;
  state.furthestRevealedSteps = 0;
  state.tutorialGuideIndex = 0;
  state.activePhase = null;
  state.isPlaying = false;
  emitStudyEvent("walkthrough_loaded", {
    totalSteps: run.decision_step_count,
    startsFromBeginning: true,
  }, true);
}

async function loadCurrentTrial(isResume = false) {
  const studyId = state.session.taskOrder[state.trialIndex];
  const run = state.allRuns.find((item) => item.studyId === studyId);
  if (!run || !Array.isArray(run.decision_steps)) {
    throw new Error("The trajectory data is incomplete.");
  }
  state.runs = [run];
  state.selectedId = run.studyId;
  state.totalTrials = state.session.taskOrder.length;
  state.trialStartedAt = performance.now();
  state.records = state.session.records || {};
  const progress = loadTrialProgress();
  state.revealedSteps = isResume ? progress.revealedSteps : 0;
  state.furthestRevealedSteps = isResume ? progress.furthestRevealedSteps : 0;
  state.activePhase = null;
  state.openInfoStep = null;
  state.summaryOpen = false;
  state.modalMode = null;
  state.modalStep = null;
  state.modalOpenedAt = null;
  state.isPlaying = false;
  state.comprehensionError = "";
  const comprehension = currentRecord().comprehension;
  if (!comprehension?.passed) {
    state.modalMode = "comprehension";
    state.modalStep = 0;
    state.modalOpenedAt = performance.now();
  }
  saveRecords();
  emitStudyEvent(isResume && progress.revealedSteps ? "trial_resumed" : "trial_loaded", {
    totalSteps: run.decision_step_count,
    restoredStep: state.revealedSteps,
  }, true);
  if (!comprehension?.passed) {
    emitStudyEvent("comprehension_gate_opened", {
      questionId: comprehension?.questionId || null,
      optionOrder: comprehension?.optionOrder || [],
    }, true, 0);
  }
}

function loadStaticSession() {
  try {
    const value = JSON.parse(localStorage.getItem(STATIC_SESSION_KEY) || "null");
    return value && typeof value === "object" ? value : null;
  } catch {
    return null;
  }
}

function saveStaticSession() {
  state.session.records = state.records;
  state.session.currentTrial = state.trialIndex;
  state.session.updatedAt = new Date().toISOString();
  localStorage.setItem(STATIC_SESSION_KEY, JSON.stringify(state.session));
}

function buildShell() {
  document.body.classList.toggle("tutorial-mode", TUTORIAL_MODE);
  root.removeAttribute("aria-live");
  root.innerHTML = `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand-row">
          <span class="brand-mark" aria-hidden="true">AR</span>
          <div>
            <h1>AgentReplay</h1>
            <p>Predictive Diagnosis · Study 1</p>
          </div>
        </div>
        <div class="study-progress-card" aria-label="${TUTORIAL_MODE ? "Walkthrough progress" : "Formal study progress"}">
          <span>${TUTORIAL_MODE ? "Interactive walkthrough" : "Formal study"}</span>
          <strong>${state.trialIndex + 1}<small> / ${state.totalTrials}</small></strong>
          <p>${TUTORIAL_MODE
            ? "Follow the highlighted guide to learn the replay interface on one short practice trajectory."
            : "Your trajectory order has been randomized. Submit a final judgment to continue."}</p>
        </div>
        <div class="list-heading">
          <span>${TUTORIAL_MODE ? "Practice task" : "Current task"}</span>
          <span id="run-count">${state.trialIndex + 1}</span>
        </div>
        <nav id="run-list" class="run-list" aria-label="Trajectory list"></nav>
        <aside class="study-sidebar-note">
          <strong>${TUTORIAL_MODE ? "Practice goal" : "Oversight goal"}</strong>
          <p>${TUTORIAL_MODE
            ? "Learn what is visible at each point and practice the oversight-note action used in the formal study."
            : "Watch for signs that the agent is going off track. Record information needs, suspicions, or intervention intentions before the outcome becomes obvious."}</p>
        </aside>
      </aside>

      <main class="main-pane">
        <header id="topbar" class="topbar"></header>
        <section id="transcript" class="transcript" aria-label="Trajectory transcript"></section>
        <footer id="player-bar" class="player-bar"></footer>
      </main>
    </div>
    <div id="modal-root"></div>
    ${TUTORIAL_MODE ? '<div id="tutorial-guide-root" aria-live="polite"></div>' : ""}
  `;

}

function selectedRun() {
  return state.runs.find((run) => run.studyId === state.selectedId);
}

function comprehensionQuestion(run = selectedRun()) {
  return run ? state.comprehensionQuestions[run.studyId] || null : null;
}

function shuffledValues(values) {
  const shuffled = [...values];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function ensureComprehensionRecord(record) {
  if (TUTORIAL_MODE) return null;
  const question = comprehensionQuestion();
  if (!question) return null;
  if (!record.comprehension || record.comprehension.questionId !== question.questionId) {
    record.comprehension = {
      questionId: question.questionId,
      questionText: question.prompt,
      optionOrder: shuffledValues(question.options.map((option) => option.id)),
      attempts: [],
      passed: false,
      passedAt: null,
    };
  }
  if (!Array.isArray(record.comprehension.attempts)) {
    record.comprehension.attempts = [];
  }
  return record.comprehension;
}

function taskComprehensionPassed() {
  if (TUTORIAL_MODE) return true;
  return currentRecord().comprehension?.passed === true;
}

function trajectoryIsComplete(run = selectedRun()) {
  return Boolean(
    run &&
      state.revealedSteps === run.decision_step_count &&
      state.activePhase === null,
  );
}

function currentRecord() {
  if (!state.records[state.selectedId]) {
    state.records[state.selectedId] = {
      infoRequests: [],
      suspicions: [],
      interventions: [],
      comprehension: null,
      tUserOversight: null,
      verdict: null,
    };
  }
  const record = state.records[state.selectedId];
  if (!Array.isArray(record.infoRequests)) record.infoRequests = [];
  if (!Array.isArray(record.suspicions)) record.suspicions = [];
  if (!Array.isArray(record.interventions)) record.interventions = [];
  ensureComprehensionRecord(record);
  return record;
}

function loadRecords() {
  return state.session?.records || {};
}

function saveRecords() {
  try {
    saveStaticSession();
    saveTrialProgress();
  } catch {
    // The page will report storage failures again when the participant downloads.
  }
}

function trialProgressKey() {
  return `${STORAGE_KEY}:${state.selectedId}:trial-${state.trialIndex}`;
}

function loadTrialProgress() {
  try {
    const parsed = JSON.parse(sessionStorage.getItem(trialProgressKey()) || "{}");
    return {
      revealedSteps: Math.max(0, Math.min(Number(parsed.revealedSteps || 0), selectedRun()?.decision_step_count || 0)),
      furthestRevealedSteps: Math.max(0, Math.min(Number(parsed.furthestRevealedSteps ?? parsed.revealedSteps ?? 0), selectedRun()?.decision_step_count || 0)),
    };
  } catch {
    return { revealedSteps: 0, furthestRevealedSteps: 0 };
  }
}

function saveTrialProgress() {
  if (!state.selectedId) return;
  try {
    sessionStorage.setItem(trialProgressKey(), JSON.stringify({
      revealedSteps: state.revealedSteps,
      furthestRevealedSteps: state.furthestRevealedSteps,
      savedAt: new Date().toISOString(),
    }));
  } catch {
    // Progress restoration is a convenience; study events are saved separately.
  }
}

function renderAll() {
  renderRunList();
  renderTopbar();
  renderTranscript();
  renderPlayer();
  renderSummary();
  renderTutorialGuide();
}

function renderRunList() {
  const run = selectedRun();
  const list = document.querySelector("#run-list");
  if (!run || !list) return;
  const record = currentRecord();
  const requestCount = record.infoRequests?.length || 0;
  const markerCount = (record.suspicions?.length || 0) + (record.interventions?.length || 0);
  document.querySelector("#run-count").textContent = String(state.trialIndex + 1);
  list.innerHTML = `
    <div class="run-row selected study-run-row" aria-current="true">
      <span class="run-row-top">
        <span class="run-title">${TUTORIAL_MODE ? "Practice trajectory" : `Task ${String(state.trialIndex + 1).padStart(2, "0")}`}</span>
        <span class="outcome-pill">${state.revealedSteps}/${run.decision_step_count} steps</span>
      </span>
      <span class="run-meta">${escapeHtml(run.domain || "General task")}</span>
      <span class="run-tags">
        <span>${requestCount} information requests</span>
        <span>${markerCount} oversight markers</span>
      </span>
    </div>
  `;
}

function renderTopbar() {
  const run = selectedRun();
  const topbar = document.querySelector("#topbar");
  if (!run || !topbar) return;

  topbar.innerHTML = `
    <div class="title-stack">
      <p class="eyebrow">${TUTORIAL_MODE ? "Guided practice trajectory" : `Live agent trajectory · Task ${state.trialIndex + 1} / ${state.totalTrials}`}</p>
      <h2>Agent is working on the task</h2>
      <p class="sample-id">Only information available up to the current point is shown</p>
    </div>
    <div class="top-metrics" aria-label="Trajectory metadata">
      ${metric("Domain", run.domain)}
      ${metric("Progress", `${state.revealedSteps} / ${run.decision_step_count}`)}
    </div>
  `;
}

function metric(label, value) {
  return `
    <div class="metric">
      <span>${escapeHtml(label)}</span>
      <strong title="${escapeAttribute(String(value ?? "—"))}">${escapeHtml(value ?? "—")}</strong>
    </div>
  `;
}

function renderTranscript(shouldFollow = true) {
  const run = selectedRun();
  const transcript = document.querySelector("#transcript");
  if (!run || !transcript) return;

  const visibleSteps = run.decision_steps.slice(0, state.revealedSteps);
  const complete = trajectoryIsComplete(run);
  transcript.innerHTML = `
    <article class="task-context">
      <div class="task-context-heading">
        <span class="task-role">
          <span class="task-role-icon" aria-hidden="true">U</span>
          <strong>Task instruction</strong>
        </span>
        <span class="task-category">${escapeHtml(run.ability_category)}</span>
      </div>
      ${renderText(run.task_instruction || "No user instruction was extracted.")}
    </article>

    ${
      visibleSteps.length
        ? visibleSteps
            .map((step) =>
              stepPresentation(step).message
                ? renderStep(run, step)
                : renderToolOnlyStep(run, step),
            )
            .join("")
        : `
          <div class="empty-stage">
            <span class="empty-stage-icon" aria-hidden="true">▶</span>
            <h3>Ready to replay</h3>
            <p>Press Play or Next step to reveal the first Agent decision step.</p>
          </div>
        `
    }

    ${
      complete
        ? `
          <section class="completion-card">
            <span class="completion-icon" aria-hidden="true">✓</span>
            <div>
              <p class="context-kicker">Trajectory complete</p>
              <h3>${TUTORIAL_MODE ? "This is where the formal-study judgment appears" : "Submit your final judgment for this trajectory"}</h3>
              <p>${TUTORIAL_MODE
                ? "In the formal study, you will judge the outcome and explain the evidence behind your decision."
                : "The correct answer will not be shown. Your judgment will be saved with your earlier information needs and oversight markers."}</p>
            </div>
            <button class="summary-button" type="button" data-action="open-summary">${TUTORIAL_MODE ? "Practice final judgment" : "Enter final judgment"}</button>
          </section>
        `
        : ""
    }
  `;

  if (shouldFollow && state.follow && state.revealedSteps > 0) {
    requestAnimationFrame(() => {
      const active = transcript.querySelector(
        `[data-active-step="${state.revealedSteps}"]`,
      );
      active?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
}

function stepPresentation(step) {
  const events = Array.isArray(step?.events) ? step.events : [];
  const agentEvent = events.find((event) =>
    AGENT_SOURCES.has(String(event.source || "").toLowerCase()),
  );
  return {
    events,
    agentEvent,
    extraEvents: events.filter((event) => event !== agentEvent),
    payload: agentEvent?.payload || {},
    message:
      extractVisibleText(agentEvent?.payload || {}) ||
      (typeof step?.agent_message === "string" ? step.agent_message : ""),
    displayEvents: Array.isArray(step?.display_events)
      ? step.display_events
      : [],
  };
}

function stepHasActivity(step, presentation = stepPresentation(step)) {
  const calls = Array.isArray(presentation.payload.tool_calls)
    ? presentation.payload.tool_calls
    : Array.isArray(presentation.payload.toolCalls)
      ? presentation.payload.toolCalls
      : [];
  return Boolean(
    presentation.displayEvents.length ||
      presentation.extraEvents.length ||
      calls.length ||
      presentation.payload.observation,
  );
}

function renderStep(run, step) {
  const stepNumber = Number(step.decision_step);
  const record = currentRecord();
  const isCurrentStep = stepNumber === state.revealedSteps;
  const isActive = isCurrentStep && state.activePhase !== null;
  const activePhase = isActive ? state.activePhase : null;
  const isOversight = record.tUserOversight === stepNumber;
  const isInfoOpen = state.openInfoStep === stepNumber;
  const presentation = stepPresentation(step);
  const { message, payload, displayEvents, extraEvents } = presentation;
  const hasActivity = stepHasActivity(step, presentation);
  const activityVisible = !isActive || activePhase !== "message";
  const stepStatus = isActive
    ? state.isPlaying
      ? phaseStatus(activePhase)
      : `Paused · ${phaseStatus(activePhase)}`
    : "Complete";

  return `
    <article
      class="step-card ${isOversight ? "oversight-step" : ""} ${isActive ? "active-step" : "completed-step"}"
      data-step-card="${stepNumber}"
      data-active-step="${stepNumber}"
    >
      <div class="step-rail" aria-hidden="true">
        <span class="step-number ${isActive ? "active" : ""}">${stepNumber}</span>
        <span class="rail-line"></span>
      </div>
      <div class="step-body">
        <header class="step-header">
          <div>
            <span class="speaker">Agent</span>
            <span class="step-label">Message · decision step ${stepNumber}</span>
          </div>
          <div class="step-status-group">
            <span class="step-state ${isActive ? (state.isPlaying ? "active" : "paused") : "complete"}">
              ${
                isActive
                  ? state.isPlaying
                    ? '<i class="state-pulse" aria-hidden="true"></i>'
                    : '<span aria-hidden="true">Ⅱ</span>'
                  : '<span aria-hidden="true">✓</span>'
              }
              ${escapeHtml(stepStatus)}
            </span>
            <span class="raw-step-label">ATIF ${escapeHtml(formatRawStepIds(step.raw_step_ids))}</span>
          </div>
        </header>

        <div class="agent-message">${renderText(message)}</div>

        ${
          !hasActivity
            ? ""
            : !activityVisible
              ? `
                <div class="phase-placeholder">
                  <span class="typing-dots" aria-hidden="true"><i></i><i></i><i></i></span>
                  Preparing tool activity
                </div>
              `
              : `
                <div class="message-step-tools">
                  ${displayEvents.length
                    ? renderToolExchanges(
                        stepNumber,
                        payload,
                        displayEvents,
                        isActive,
                        activePhase,
                      )
                    : ""}
                  ${extraEvents.length ? renderExtraEvents(extraEvents) : ""}
                  ${!displayEvents.length && !extraEvents.length
                    ? '<p class="empty-message">No recorded tool activity for this decision step.</p>'
                    : ""}
                </div>
              `
        }

        ${renderOversightActions(stepNumber)}

        ${isInfoOpen ? renderInfoPanel(stepNumber) : ""}
      </div>
    </article>
  `;
}

function renderToolOnlyStep(run, step) {
  const stepNumber = Number(step.decision_step);
  const { extraEvents, payload, displayEvents } = stepPresentation(step);
  const record = currentRecord();
  const isOversight = record.tUserOversight === stepNumber;
  const isInfoOpen = state.openInfoStep === stepNumber;
  const isActive =
    stepNumber === state.revealedSteps && state.activePhase !== null;
  const activePhase = isActive ? state.activePhase : null;
  const status = isActive
    ? state.isPlaying
      ? phaseStatus(activePhase)
      : `Paused · ${phaseStatus(activePhase)}`
    : "Complete";

  return `
    <article
      class="step-card tool-only-step ${isOversight ? "oversight-step" : ""} ${isActive ? "active-step" : "completed-step"}"
      data-step-card="${stepNumber}"
      data-active-step="${stepNumber}"
    >
      <div class="step-rail" aria-hidden="true">
        <span class="step-number ${isActive ? "active" : ""}">${stepNumber}</span>
        <span class="rail-line"></span>
      </div>
      <div class="step-body">
        <header class="step-header">
          <div>
            <span class="speaker">Tool activity</span>
            <span class="step-label">Decision step ${stepNumber}</span>
          </div>
          <div class="step-status-group">
            <span class="step-state ${isActive ? (state.isPlaying ? "active" : "paused") : "complete"}">
              ${
                isActive && state.isPlaying
                  ? '<i class="state-pulse" aria-hidden="true"></i>'
                  : isActive
                    ? '<span aria-hidden="true">Ⅱ</span>'
                    : '<span aria-hidden="true">✓</span>'
              }
              ${escapeHtml(status)}
            </span>
            <span class="raw-step-label">ATIF ${escapeHtml(formatRawStepIds(step.raw_step_ids))}</span>
          </div>
        </header>
        ${displayEvents.length
          ? renderToolExchanges(
              stepNumber,
              payload,
              displayEvents,
              isActive,
              activePhase,
            )
          : ""}
        ${extraEvents.length ? renderExtraEvents(extraEvents) : ""}
        ${!displayEvents.length && !extraEvents.length
          ? '<p class="empty-message">No recorded tool activity for this decision step.</p>'
          : ""}
        ${renderOversightActions(stepNumber, true)}
        ${isInfoOpen ? renderInfoPanel(stepNumber) : ""}
      </div>
    </article>
  `;
}

function renderOversightActions(stepNumber, compact = false) {
  const record = currentRecord();
  const entriesAtStep = [
    ...record.infoRequests,
    ...record.suspicions,
    ...record.interventions,
  ].filter((entry) => entry.anchorStep === stepNumber);
  const linkedSubmissions = new Set(
    entriesAtStep.map((entry) => entry.submissionId).filter(Boolean),
  );
  const unlinkedEntryCount = entriesAtStep.filter((entry) => !entry.submissionId).length;
  const noteCount = linkedSubmissions.size + unlinkedEntryCount;

  return `
    <div class="oversight-actions ${compact ? "compact" : ""}" aria-label="Oversight note for step ${stepNumber}">
      <button
        class="oversight-button combined-oversight-button ${noteCount ? "active" : ""}"
        type="button"
        data-action="record-oversight"
        data-step="${stepNumber}"
      >
        <span aria-hidden="true">＋</span>
        <span class="oversight-button-copy">
          <strong>${compact ? "Record oversight note…" : "Record oversight note…"}</strong>
          ${compact ? "" : "<small>Information need, suspicion, or intervention</small>"}
        </span>
        ${noteCount ? `<span class="request-count" title="${noteCount} saved ${noteCount === 1 ? "note" : "notes"}">${noteCount}</span>` : ""}
      </button>
    </div>
  `;
}

function renderToolExchanges(
  stepNumber,
  payload,
  displayEvents,
  isActive,
  activePhase,
) {
  const calls = Array.isArray(payload.tool_calls)
    ? payload.tool_calls
    : Array.isArray(payload.toolCalls)
      ? payload.toolCalls
      : [];
  const results = Array.isArray(payload.observation?.results)
    ? payload.observation.results
    : [];

  return `
    <section class="execution-trace" aria-label="Tool execution trace">
      <div class="execution-heading">
        <span>Execution</span>
        <span>${displayEvents.length} tool ${displayEvents.length === 1 ? "call" : "calls"}</span>
      </div>
      ${displayEvents
        .map((displayEvent, exchangeIndex) => {
          const call = calls[displayEvent.call_index] || {};
          const args =
            call.arguments ??
            call.input ??
            call.function?.arguments ??
            {};
          const result =
            Number.isInteger(displayEvent.result_index)
              ? results[displayEvent.result_index]
              : payload.observation ?? null;
          return renderToolExchange({
            stepNumber,
            exchangeIndex,
            displayEvent,
            totalCount: displayEvents.length,
            args,
            result,
            isActive,
            activePhase,
          });
        })
        .join("")}
    </section>
  `;
}

function renderToolExchange({
  stepNumber,
  exchangeIndex,
  displayEvent,
  totalCount,
  args,
  result,
  isActive,
  activePhase,
}) {
  const exchangeKey = `${state.selectedId}:${stepNumber}:${exchangeIndex}`;
  const manuallyExpanded = state.expandedExchanges.has(exchangeKey);
  const expanded = manuallyExpanded;
  const waitingForResult = isActive && activePhase === "tool_call";
  const status = waitingForResult ? "running" : displayEvent.status;
  const statusLabel =
    status === "error"
      ? "Error"
      : status === "unknown"
          ? "No result"
          : "Observed";
  const resultSummary = displayEvent.observation_summary;
  const callSummary = waitingForResult
    ? "Calling tool…"
    : displayEvent.call_summary;
  const positionLabel =
    totalCount > 1 ? `${exchangeIndex + 1}/${totalCount} · ` : "";

  return `
    <article class="tool-exchange ${status} ${expanded ? "expanded" : "collapsed"}">
      <button
        class="exchange-toggle"
        type="button"
        data-action="toggle-exchange"
        data-step="${stepNumber}"
        data-exchange-index="${exchangeIndex}"
        aria-expanded="${expanded}"
      >
        <span class="tool-kind-icon ${toolIconClass(displayEvent.tool)}" aria-hidden="true">${toolIcon(displayEvent.tool)}</span>
        <span class="exchange-call">
          <span class="tool-label">${escapeHtml(positionLabel + displayEvent.label)}</span>
          <strong>${escapeHtml(callSummary)}</strong>
        </span>
        <span class="exchange-chevron" aria-hidden="true">
          ${waitingForResult ? '<span class="tool-spinner"></span>' : expanded ? "⌃" : "⌄"}
        </span>
      </button>

      ${
        waitingForResult
          ? ""
          : `
            <div class="exchange-result ${status}">
              <span class="result-status-icon" aria-hidden="true">
                ${status === "error" ? "×" : status === "unknown" ? "○" : "✓"}
              </span>
              <span class="result-copy">
                <span>${escapeHtml(statusLabel)}</span>
                <strong>${escapeHtml(resultSummary)}</strong>
              </span>
            </div>
          `
      }

      ${
        expanded
          ? `
            <div class="exchange-details">
              <section>
                <span class="detail-label">Tool input</span>
                <pre>${escapeHtml(formatValue(args))}</pre>
              </section>
              ${
                waitingForResult
                  ? `
                    <section class="pending-observation">
                      <span class="detail-label">Observation</span>
                      <p>Tool call is being replayed…</p>
                    </section>
                  `
                  : `
                    <section>
                      <span class="detail-label">Observation</span>
                      <pre>${escapeHtml(formatObservationDetail(result))}</pre>
                    </section>
                  `
              }
            </div>
          `
          : ""
      }
    </article>
  `;
}

function renderInfoPanel(stepNumber) {
  const record = currentRecord();
  const requestsAtStep = record.infoRequests.filter(
    (request) => request.step === stepNumber,
  );
  const requestedTypes = new Set(requestsAtStep.map((request) => request.type));
  const response =
    state.infoResponse?.step === stepNumber ? state.infoResponse : null;
  const customOpen = state.customInfoStep === stepNumber;
  const hasCustomRequest = requestsAtStep.some(
    (request) => request.type === "other",
  );

  return `
    <section class="info-panel" aria-label="Additional information request">
      <div class="info-panel-heading">
        <div>
          <p class="context-kicker">Playback paused</p>
          <h4>What additional information do you want?</h4>
          <p class="info-panel-intro">Choose the kind of information that would help you understand, assess, or intervene in this step.</p>
        </div>
        <button
          class="close-panel-button"
          type="button"
          data-action="close-info"
          aria-label="Close information panel"
        >×</button>
      </div>
      <div class="info-groups">
        ${INFO_GROUPS.map(
          (group, groupIndex) => `
            <section class="info-group info-group-${escapeAttribute(group.id)}">
              <header class="info-group-header">
                <span class="info-group-index" aria-hidden="true">0${groupIndex + 1}</span>
                <span>
                  <strong>${escapeHtml(group.label)}</strong>
                  <small>${escapeHtml(group.description)}</small>
                </span>
              </header>
              <div class="info-options">
                ${group.options
                  .map(
                    (option) => `
                      <button
                        type="button"
                        class="info-option ${requestedTypes.has(option.id) ? "requested" : ""}"
                        data-action="select-info"
                        data-step="${stepNumber}"
                        data-info-type="${option.id}"
                      >
                        <span class="info-option-number" aria-hidden="true">${String(INFO_TYPES.findIndex((candidate) => candidate.id === option.id) + 1).padStart(2, "0")}</span>
                        <span class="info-option-copy">
                          <strong>${escapeHtml(option.label)}</strong>
                          <span>${escapeHtml(option.description)}</span>
                        </span>
                        <span class="info-option-check" aria-hidden="true">${requestedTypes.has(option.id) ? "✓" : ""}</span>
                      </button>
                    `,
                  )
                  .join("")}
              </div>
            </section>
          `,
        ).join("")}
      </div>

      <section class="custom-info-section ${customOpen ? "open" : ""}">
        <button
          type="button"
          class="custom-info-toggle ${hasCustomRequest ? "requested" : ""}"
          data-action="toggle-custom-info"
          data-step="${stepNumber}"
          aria-expanded="${customOpen}"
        >
          <span class="custom-info-icon" aria-hidden="true">＋</span>
          <span>
            <strong>Other information</strong>
            <small>Ask a question that is not covered by the ten categories above.</small>
          </span>
          <span class="activity-chevron" aria-hidden="true">${customOpen ? "⌃" : "⌄"}</span>
        </button>
        ${
          customOpen
            ? `
              <div class="custom-info-form">
                <label for="custom-info-${stepNumber}">What else would you like to know?</label>
                <div class="custom-info-input-row">
                  <input
                    id="custom-info-${stepNumber}"
                    type="text"
                    maxlength="240"
                    value="${escapeAttribute(state.customInfoDraft)}"
                    placeholder="Type your question…"
                    data-action="custom-info-input"
                    data-step="${stepNumber}"
                    autocomplete="off"
                  />
                  <button
                    type="button"
                    class="custom-info-submit"
                    data-action="submit-custom-info"
                    data-step="${stepNumber}"
                    ${state.customInfoDraft.trim() ? "" : "disabled"}
                  >Request</button>
                </div>
              </div>
            `
            : ""
        }
      </section>

      ${
        response
          ? `
            <div class="placeholder-response" role="status">
              <span>Requested · ${escapeHtml(response.label)}</span>
              ${response.question ? `<strong>${escapeHtml(response.question)}</strong>` : ""}
              <p>here is your requested information</p>
            </div>
          `
          : '<p class="info-hint">Select an information type. Your request will be included in the final summary.</p>'
      }
      <p class="continue-hint">Use the Play button below when you are ready to continue.</p>
    </section>
  `;
}

function phaseStatus(phase) {
  if (phase === "message") return "Thinking";
  if (phase === "tool_call") return "Calling tools";
  if (phase === "observation") return "Reading results";
  return "Complete";
}

function toolIcon(tool) {
  if (tool === "browser") return "◇";
  if (tool === "exec") return "›_";
  if (tool === "read") return "R";
  if (tool === "write") return "W";
  if (tool === "edit") return "E";
  if (tool === "process") return "◌";
  if (tool === "web_fetch" || tool === "web_search") return "⌕";
  return "⌁";
}

function toolIconClass(tool) {
  return `tool-${String(tool || "other").replaceAll("_", "-")}`;
}

function renderExtraEvents(events) {
  return `
    <section class="extra-events">
      ${events
        .map((event) => {
          const source = String(event.source || "environment");
          const payload = event.payload ?? event;
          const text = extractVisibleText(payload);
          return `
            <details class="observation ${containsError(payload) ? "error" : ""}">
              <summary>
                <span class="observation-dot" aria-hidden="true"></span>
                <span>${escapeHtml(titleCase(source))}</span>
                <span class="details-hint">View event</span>
              </summary>
              <pre>${escapeHtml(text || formatValue(payload))}</pre>
            </details>
          `;
        })
        .join("")}
    </section>
  `;
}

function renderText(value) {
  return `<div class="markdown-content">${renderMarkdown(String(value))}</div>`;
}

function renderMarkdown(value) {
  const codeBlocks = [];
  const source = String(value)
    .replaceAll("\r\n", "\n")
    .replaceAll("\r", "\n")
    .replace(/```([^\n`]*)\n([\s\S]*?)```/g, (_match, language, code) => {
      const index = codeBlocks.push({
        language: language.trim(),
        code: code.replace(/\n$/, ""),
      }) - 1;
      return `\n@@CODE_BLOCK_${index}@@\n`;
    });
  const lines = source.split("\n");
  const blocks = [];
  let paragraph = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push(
      `<p>${paragraph.map((line) => renderInlineMarkdown(line.trim())).join("<br>")}</p>`,
    );
    paragraph = [];
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      continue;
    }

    const codeMatch = trimmed.match(/^@@CODE_BLOCK_(\d+)@@$/);
    if (codeMatch) {
      flushParagraph();
      const block = codeBlocks[Number(codeMatch[1])];
      const languageClass = block.language
        ? ` class="language-${escapeAttribute(block.language)}"`
        : "";
      blocks.push(
        `<pre class="markdown-code"><code${languageClass}>${escapeHtml(block.code)}</code></pre>`,
      );
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      flushParagraph();
      const level = headingMatch[1].length;
      blocks.push(
        `<h${level}>${renderInlineMarkdown(headingMatch[2])}</h${level}>`,
      );
      continue;
    }

    if (/^(?:-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      flushParagraph();
      blocks.push("<hr>");
      continue;
    }

    if (
      trimmed.includes("|") &&
      index + 1 < lines.length &&
      isMarkdownTableDivider(lines[index + 1])
    ) {
      flushParagraph();
      const headers = markdownTableCells(line);
      const rows = [];
      index += 2;
      while (index < lines.length && lines[index].includes("|")) {
        rows.push(markdownTableCells(lines[index]));
        index += 1;
      }
      index -= 1;
      blocks.push(`
        <div class="markdown-table-wrap">
          <table>
            <thead><tr>${headers.map((cell) => `<th>${renderInlineMarkdown(cell)}</th>`).join("")}</tr></thead>
            <tbody>
              ${rows
                .map(
                  (row) =>
                    `<tr>${headers
                      .map(
                        (_header, cellIndex) =>
                          `<td>${renderInlineMarkdown(row[cellIndex] || "")}</td>`,
                      )
                      .join("")}</tr>`,
                )
                .join("")}
            </tbody>
          </table>
        </div>
      `);
      continue;
    }

    if (/^>\s?/.test(trimmed)) {
      flushParagraph();
      const quoted = [];
      while (index < lines.length && /^>\s?/.test(lines[index].trim())) {
        quoted.push(lines[index].trim().replace(/^>\s?/, ""));
        index += 1;
      }
      index -= 1;
      blocks.push(
        `<blockquote>${quoted.map(renderInlineMarkdown).join("<br>")}</blockquote>`,
      );
      continue;
    }

    const unorderedMatch = trimmed.match(/^[-*+]\s+(.+)$/);
    const orderedMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    if (unorderedMatch || orderedMatch) {
      flushParagraph();
      const ordered = Boolean(orderedMatch);
      const items = [];
      while (index < lines.length) {
        const candidate = lines[index].trim();
        const match = ordered
          ? candidate.match(/^\d+\.\s+(.+)$/)
          : candidate.match(/^[-*+]\s+(.+)$/);
        if (!match) break;
        items.push(match[1]);
        index += 1;
      }
      index -= 1;
      const tag = ordered ? "ol" : "ul";
      blocks.push(
        `<${tag}>${items.map((item) => `<li>${renderInlineMarkdown(item)}</li>`).join("")}</${tag}>`,
      );
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  return blocks.join("");
}

function markdownTableCells(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isMarkdownTableDivider(line) {
  const cells = markdownTableCells(line);
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function renderInlineMarkdown(value) {
  const tokens = [];
  const storeToken = (html) => {
    const token = `\uE000${tokens.length}\uE001`;
    tokens.push(html);
    return token;
  };

  let text = String(value);
  text = text.replace(/`([^`\n]+)`/g, (_match, code) =>
    storeToken(`<code>${escapeHtml(code)}</code>`),
  );
  text = text.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    (_match, label, url) =>
      storeToken(
        `<a href="${escapeAttribute(url)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`,
      ),
  );

  let html = escapeHtml(text);
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__([^_]+)__/g, "<strong>$1</strong>");
  html = html.replace(/~~([^~]+)~~/g, "<del>$1</del>");
  html = html.replace(
    /(^|[^\w*])\*([^*\n]+)\*(?!\*)/g,
    "$1<em>$2</em>",
  );
  html = html.replace(/\uE000(\d+)\uE001/g, (_match, index) => {
    return tokens[Number(index)] || "";
  });
  return html;
}

function renderPlayer() {
  const run = selectedRun();
  const player = document.querySelector("#player-bar");
  if (!run || !player) return;

  const complete = trajectoryIsComplete(run);
  const comprehensionLocked = !taskComprehensionPassed();
  const progress = run.decision_step_count
    ? (state.revealedSteps / run.decision_step_count) * 100
    : 0;
  const playbackStatus = complete
    ? "Complete"
    : state.isPlaying
      ? phaseStatus(state.activePhase)
      : state.activePhase
        ? `Paused · ${phaseStatus(state.activePhase)}`
        : "Paused";

  player.innerHTML = `
    <div class="controls">
      <button class="icon-button" type="button" data-action="restart" title="Restart" aria-label="Restart" ${comprehensionLocked ? "disabled" : ""}>↺</button>
      <button
        class="icon-button"
        type="button"
        data-action="previous"
        title="Previous step"
        aria-label="Previous step"
        ${comprehensionLocked || state.revealedSteps === 0 ? "disabled" : ""}
      >←</button>
      <button
        class="icon-button primary"
        type="button"
        data-action="toggle-play"
        title="${state.isPlaying ? "Pause" : "Play"}"
        aria-label="${state.isPlaying ? "Pause" : "Play"}"
        ${comprehensionLocked ? "disabled" : ""}
      >${state.isPlaying ? "Ⅱ" : "▶"}</button>
      <button
        class="icon-button"
        type="button"
        data-action="next"
        title="Next step"
        aria-label="Next step"
        ${comprehensionLocked || complete ? "disabled" : ""}
      >→</button>
    </div>

    <div class="scrubber">
      <div class="scrubber-meta">
        <span>Decision step ${state.revealedSteps} of ${run.decision_step_count}</span>
        <span>${escapeHtml(playbackStatus)}</span>
      </div>
      <input
        type="range"
        min="0"
        max="${run.decision_step_count}"
        value="${state.revealedSteps}"
        style="--progress: ${progress}%"
        data-action="scrub"
        aria-label="Trajectory timeline"
        ${TUTORIAL_MODE || comprehensionLocked ? "disabled" : ""}
      />
    </div>

    <div class="playback-options">
      ${
        complete && !TUTORIAL_MODE
          ? `
            <button class="summary-button compact" type="button" data-action="open-summary">
              Enter final judgment
            </button>
          `
          : ""
      }
      <label class="checkbox-row">
        <input type="checkbox" data-action="follow" ${state.follow ? "checked" : ""} />
        <span>Follow</span>
      </label>
    </div>
  `;
}

function renderSavedOversightHistory(record, stepNumber) {
  const entries = [
    ...record.infoRequests
      .filter((entry) => entry.anchorStep === stepNumber)
      .map((entry) => ({ type: "Information need", entry })),
    ...record.suspicions
      .filter((entry) => entry.anchorStep === stepNumber)
      .map((entry) => ({ type: "Suspected problem", entry })),
    ...record.interventions
      .filter((entry) => entry.anchorStep === stepNumber)
      .map((entry) => ({ type: "Intervention", entry })),
  ].sort((left, right) => String(left.entry.submittedAt).localeCompare(String(right.entry.submittedAt)));

  if (!entries.length) return "";
  return `
    <section class="saved-oversight-history" aria-label="Previously saved responses at this step">
      <header>
        <span>Previously saved at this step</span>
        <strong>${entries.length} saved ${entries.length === 1 ? "response" : "responses"}</strong>
      </header>
      <div class="saved-oversight-list">
        ${entries.map(({ type, entry }) => {
          const content = type === "Information need"
            ? `
              <p><strong>Wanted:</strong> ${escapeHtml(entry.requestText || "")}</p>
              <p><strong>Purpose:</strong> ${escapeHtml(entry.purposeText || "")}</p>
            `
            : type === "Suspected problem"
              ? `
                <p><strong>Concern:</strong> ${escapeHtml(entry.evidence || "")}</p>
                <p><strong>Failure probability:</strong> ${entry.failureProbability === null || entry.failureProbability === undefined ? "Not answered" : `${Number(entry.failureProbability)}%`} · <strong>Confidence:</strong> ${entry.confidence === null || entry.confidence === undefined ? "Not answered" : `${Number(entry.confidence)}%`}</p>
              `
              : `
                <p><strong>Action:</strong> ${escapeHtml(entry.proposedAction || "")}</p>
                <p><strong>Why now:</strong> ${escapeHtml(entry.whyNow || "")}</p>
                <p><strong>Risk:</strong> ${escapeHtml(entry.expectedRisk || "")}</p>
              `;
          return `<article class="saved-oversight-item"><span>${escapeHtml(type)}</span>${content}</article>`;
        }).join("")}
      </div>
      <p class="section-note">The fields below create another time-stamped note; earlier responses remain in the study record.</p>
    </section>
  `;
}

function renderComprehensionGate(run, record) {
  const question = comprehensionQuestion(run);
  const comprehension = record.comprehension;
  if (!question || !comprehension) {
    return `<div class="research-form"><h2 id="summary-title">The task-understanding question could not be loaded.</h2></div>`;
  }
  const optionById = new Map(question.options.map((option) => [option.id, option]));
  const orderedOptions = comprehension.optionOrder
    .map((optionId) => optionById.get(optionId))
    .filter(Boolean);

  return `
    <form class="research-form comprehension-form" data-action="submit-comprehension">
      <p class="context-kicker">Task ${state.trialIndex + 1} of ${state.totalTrials} · understanding check</p>
      <h2 id="summary-title">Understand the task before playback</h2>
      <p class="panel-intro">Read the task carefully and answer one question. Playback unlocks only after a correct answer. You may try again if needed.</p>
      <section class="comprehension-task-instruction" aria-label="Task instruction">
        <span>Task instruction</span>
        <div>${renderText(run.task_instruction || "")}</div>
      </section>
      <fieldset class="research-field comprehension-question">
        <legend>${escapeHtml(question.prompt)} *</legend>
        <div class="comprehension-options">
          ${orderedOptions.map((option, index) => `
            <label>
              <input type="radio" name="comprehensionAnswer" value="${escapeAttribute(option.id)}" ${index === 0 ? "required" : ""} />
              <span>${escapeHtml(option.label)}</span>
            </label>
          `).join("")}
        </div>
      </fieldset>
      ${state.comprehensionError ? `<p class="form-error" role="alert">${escapeHtml(state.comprehensionError)}</p>` : ""}
      <button class="primary-form-button" type="submit">Check answer and begin playback</button>
    </form>
  `;
}

function renderSummary() {
  const modalRoot = document.querySelector("#modal-root");
  if (!modalRoot) return;
  const mode = state.summaryOpen ? "verdict" : state.modalMode;
  if (!mode) {
    modalRoot.innerHTML = "";
    return;
  }

  const run = selectedRun();
  const record = currentRecord();
  const anchorStep = Number.isInteger(state.modalStep)
    ? state.modalStep
    : state.revealedSteps;
  const phaseLabel = state.activePhase
    ? phaseStatus(state.activePhase)
    : state.revealedSteps === 0
      ? "Not started"
      : "Paused between steps";
  const contextCopy = `Recorded at step ${anchorStep}; visible prefix ended at step ${state.revealedSteps}; ${phaseLabel}`;

  const modalBody =
    mode === "comprehension"
      ? renderComprehensionGate(run, record)
      : mode === "oversight"
      ? `
        <form class="research-form oversight-note-form" data-action="submit-oversight-note">
          <p class="context-kicker">Prospective oversight note</p>
          <h2 id="summary-title">What would you like to record at this point?</h2>
          <p class="panel-context">${escapeHtml(contextCopy)}</p>
          <p class="panel-intro">Choose one or more sections. You may record only an information need, only a suspected problem, only an intervention, or any combination. The trajectory remains paused after submission.</p>
          ${renderSavedOversightHistory(record, anchorStep)}

          <section class="oversight-note-section" data-oversight-section="info">
            <label class="oversight-section-toggle">
              <input type="checkbox" name="includeInfo" value="yes" data-action="toggle-oversight-section" data-section="info" />
              <span><strong>I want to see or know…</strong><small>Record information that would help you oversee the agent.</small></span>
            </label>
            <div class="oversight-section-body" data-oversight-section-body="info" hidden>
              <label class="research-field">
                <span>What information would you want? *</span>
                <textarea name="requestText" rows="4" maxlength="1200" data-required-when-selected="true" disabled placeholder="For example: I want to verify what evidence the agent is relying on."></textarea>
              </label>
              <label class="research-field">
                <span>What would this information help you judge or decide? *</span>
                <textarea name="purposeText" rows="3" maxlength="900" data-required-when-selected="true" disabled></textarea>
              </label>
              <p class="section-note">This section intentionally does not ask you to judge failure or report confidence.</p>
            </div>
          </section>

          <section class="oversight-note-section" data-oversight-section="suspicion">
            <label class="oversight-section-toggle">
              <input type="checkbox" name="includeSuspicion" value="yes" data-action="toggle-oversight-section" data-section="suspicion" />
              <span><strong>I suspect a problem</strong><small>Record a possible error or warning sign.</small></span>
            </label>
            <div class="oversight-section-body" data-oversight-section-body="suspicion" hidden>
              <label class="research-field">
                <span>Signal or concern you observed *</span>
                <textarea name="evidence" rows="4" maxlength="1200" data-required-when-selected="true" disabled></textarea>
              </label>
              <div class="research-grid two">
                <label class="research-field">
                  <span>Probability of eventual task failure (0–100%) *</span>
                  <input name="failureProbability" type="range" min="0" max="100" value="50" data-action="live-range" data-requires-interaction="true" data-touched="false" disabled />
                  <output>Not answered</output>
                  <small class="slider-instruction">Required: move the slider to record your answer.</small>
                </label>
                <label class="research-field">
                  <span>Confidence in this suspicion (0–100%) *</span>
                  <input name="confidence" type="range" min="0" max="100" value="50" data-action="live-range" data-requires-interaction="true" data-touched="false" disabled />
                  <output>Not answered</output>
                  <small class="slider-instruction">Required: move the slider to record your answer.</small>
                </label>
              </div>
            </div>
          </section>

          <section class="oversight-note-section" data-oversight-section="intervention">
            <label class="oversight-section-toggle">
              <input type="checkbox" name="includeIntervention" value="yes" data-action="toggle-oversight-section" data-section="intervention" />
              <span><strong>I would intervene</strong><small>Record what you would change, stop, or ask the agent to do.</small></span>
            </label>
            <div class="oversight-section-body" data-oversight-section-body="intervention" hidden>
              <p class="section-note">To keep the replay identical for every participant, the proposed intervention is recorded but does not change the trajectory.</p>
              <label class="research-field"><span>What instruction or action would you take? *</span><textarea name="proposedAction" rows="4" maxlength="1200" data-required-when-selected="true" disabled></textarea></label>
              <label class="research-field"><span>Why intervene now? *</span><textarea name="whyNow" rows="3" maxlength="900" data-required-when-selected="true" disabled></textarea></label>
              <label class="research-field"><span>What consequence concerns you most if you do not intervene? *</span><textarea name="expectedRisk" rows="3" maxlength="900" data-required-when-selected="true" disabled></textarea></label>
            </div>
          </section>

          <p class="form-error oversight-selection-error" data-oversight-selection-error role="alert" hidden>Please select at least one section.</p>
          <button class="primary-form-button" type="submit">Save oversight note</button>
        </form>
      `
      : mode === "break"
            ? `
              <div class="research-form break-panel">
                <p class="context-kicker">${Math.floor(state.totalTrials / 2)} / ${state.totalTrials}</p>
                <h2 id="summary-title">You are halfway through</h2>
                <p class="panel-intro">Consider taking a 2–5 minute break away from the screen. Continue when ready. Break duration is recorded but does not affect the study.</p>
                <button class="primary-form-button" type="button" data-action="continue-after-break">Continue to the final ${state.totalTrials - Math.floor(state.totalTrials / 2)} trajectories</button>
              </div>
            `
            : `
              <form class="research-form" data-action="submit-verdict">
                <p class="context-kicker">End-of-trial judgment · ${state.trialIndex + 1} / ${state.totalTrials}</p>
                <h2 id="summary-title">Did this trajectory ultimately complete the task correctly?</h2>
                <p class="panel-intro">Researcher annotations and the correct answer are not shown.</p>
                <fieldset class="research-field"><legend>Final judgment *</legend><div class="choice-row"><label><input type="radio" name="verdict" value="success" required /> Correctly completed</label><label><input type="radio" name="verdict" value="failure" /> Not correctly completed</label><label><input type="radio" name="verdict" value="uncertain" /> Unsure</label></div></fieldset>
                <label class="research-field"><span>Judgment confidence (0–100%) *</span><input name="confidence" type="range" min="0" max="100" value="50" data-action="live-range" data-requires-interaction="true" data-touched="false" /><output>Not answered</output><small class="slider-instruction">Required: move the slider to record your answer.</small></label>
                <label class="research-field"><span>Main evidence supporting your final judgment *</span><textarea name="evidence" rows="3" maxlength="1200" required></textarea></label>
                <label class="research-field"><span>If you could receive one additional piece of information, what would you want most? *</span><textarea name="missingInformation" rows="3" maxlength="1200" required></textarea></label>
                <fieldset class="research-field"><legend>Would you intervene before task completion if you could? *</legend><div class="choice-row"><label><input type="radio" name="wouldIntervene" value="yes" required /> Yes</label><label><input type="radio" name="wouldIntervene" value="no" /> No</label><label><input type="radio" name="wouldIntervene" value="unsure" /> Unsure</label></div></fieldset>
                ${state.saveError ? `<p class="form-error" role="alert">${escapeHtml(state.saveError)}</p>` : ""}
                <button class="primary-form-button" type="submit" ${state.isSavingTrial ? "disabled" : ""}>${state.isSavingTrial ? "Saving the full record…" : TUTORIAL_MODE ? "Submit practice judgment" : state.trialIndex + 1 === state.totalTrials ? "Submit and complete the study" : "Submit and continue"}</button>
              </form>
            `;

  modalRoot.innerHTML = `
    <div class="modal-backdrop" data-action="close-summary">
      <section
        class="summary-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="summary-title"
        data-modal-panel
        data-modal-mode="${escapeAttribute(mode)}"
      >
        ${mode === "verdict" || mode === "break" || mode === "comprehension" ? "" : '<button class="modal-close" type="button" data-action="close-summary" aria-label="Close">×</button>'}
        <div class="summary-content">${modalBody}</div>
      </section>
    </div>
  `;

  requestAnimationFrame(() => {
    modalRoot.querySelector("textarea, input, button")?.focus();
  });
}

function saveTutorialProgress() {
  if (!TUTORIAL_MODE || !state.session) return;
  state.session.walkthroughProgress = {
    guideIndex: state.tutorialGuideIndex,
    revealedSteps: state.revealedSteps,
    furthestRevealedSteps: state.furthestRevealedSteps,
    updatedAt: new Date().toISOString(),
  };
  saveStaticSession();
}

function renderTutorialGuide() {
  if (!TUTORIAL_MODE) return;
  document.querySelectorAll(".tutorial-focus").forEach((element) => {
    element.classList.remove("tutorial-focus");
  });

  const guideRoot = document.querySelector("#tutorial-guide-root");
  if (!guideRoot) return;
  if (state.modalMode || state.summaryOpen) {
    guideRoot.innerHTML = "";
    return;
  }

  const guide = TUTORIAL_GUIDE[state.tutorialGuideIndex];
  if (!guide) {
    guideRoot.innerHTML = "";
    return;
  }

  const target = document.querySelector(guide.target) || document.querySelector(".main-pane");
  if (!target) return;
  target.classList.add("tutorial-focus");
  const requiresPlayerAction = Boolean(guide.requiredAction);
  guideRoot.innerHTML = `
    <div class="tutorial-spotlight" aria-hidden="true"></div>
    <aside class="tutorial-guide-popover" role="dialog" aria-modal="false" aria-labelledby="tutorial-guide-title">
      <p class="tutorial-guide-progress">Walkthrough · ${state.tutorialGuideIndex + 1} of ${TUTORIAL_GUIDE.length}</p>
      <h2 id="tutorial-guide-title">${escapeHtml(guide.title)}</h2>
      <p>${escapeHtml(guide.body)}</p>
      <div class="tutorial-guide-footer">
        <span>${requiresPlayerAction ? "Use the highlighted control to continue." : guide.finish ? "The formal study starts after the experience questionnaire." : "Select Next when you are ready."}</span>
        ${requiresPlayerAction
          ? ""
          : `<button type="button" data-action="tutorial-guide-next">${guide.finish ? "Continue to questionnaire" : "Next"} <span aria-hidden="true">→</span></button>`}
      </div>
    </aside>
  `;

  const guideChanged = state.lastRenderedTutorialIndex !== state.tutorialGuideIndex;
  state.lastRenderedTutorialIndex = state.tutorialGuideIndex;
  if (guideChanged && !target.closest(".player-bar")) {
    target.scrollIntoView({ behavior: "auto", block: "center", inline: "nearest" });
  }
  requestAnimationFrame(positionTutorialGuide);
}

function positionTutorialGuide() {
  if (!TUTORIAL_MODE) return;
  const guide = TUTORIAL_GUIDE[state.tutorialGuideIndex];
  const target = guide ? document.querySelector(guide.target) || document.querySelector(".main-pane") : null;
  const spotlight = document.querySelector(".tutorial-spotlight");
  const popover = document.querySelector(".tutorial-guide-popover");
  if (!target || !spotlight || !popover) return;

  const rect = target.getBoundingClientRect();
  const padding = 7;
  spotlight.style.left = `${Math.max(6, rect.left - padding)}px`;
  spotlight.style.top = `${Math.max(6, rect.top - padding)}px`;
  spotlight.style.width = `${Math.max(24, Math.min(window.innerWidth - 12, rect.width + padding * 2))}px`;
  spotlight.style.height = `${Math.max(24, Math.min(window.innerHeight - 12, rect.height + padding * 2))}px`;

  const margin = 14;
  const popoverRect = popover.getBoundingClientRect();
  const maxLeft = Math.max(12, window.innerWidth - popoverRect.width - 12);
  const left = Math.min(maxLeft, Math.max(12, rect.left + rect.width / 2 - popoverRect.width / 2));
  const roomBelow = window.innerHeight - rect.bottom;
  const preferredTop = roomBelow >= popoverRect.height + margin
    ? rect.bottom + margin
    : rect.top - popoverRect.height - margin;
  const top = Math.min(
    Math.max(12, window.innerHeight - popoverRect.height - 12),
    Math.max(12, preferredTop),
  );
  popover.style.left = `${left}px`;
  popover.style.top = `${top}px`;
  spotlight.classList.add("positioned");
  popover.classList.add("positioned");
}

function advanceTutorialGuide(completedAction = null) {
  if (!TUTORIAL_MODE) return;
  const guide = TUTORIAL_GUIDE[state.tutorialGuideIndex];
  if (!guide) return;
  if (guide.requiredAction && completedAction !== guide.requiredAction) return;
  if (guide.finish) {
    completeTutorial();
    return;
  }

  emitStudyEvent("walkthrough_guide_advanced", {
    guideIndex: state.tutorialGuideIndex,
    guideTitle: guide.title,
    completedAction,
  }, true);
  state.tutorialGuideIndex = Math.min(state.tutorialGuideIndex + 1, TUTORIAL_GUIDE.length - 1);
  const nextGuide = TUTORIAL_GUIDE[state.tutorialGuideIndex];
  if (nextGuide?.simulatePlaying) {
    clearPlaybackTimer();
    state.isPlaying = true;
    state.activePhase = "message";
  }
  if (Number.isInteger(nextGuide?.revealStep)) {
    clearPlaybackTimer();
    const run = selectedRun();
    const revealStep = Math.min(nextGuide.revealStep, run?.decision_step_count || 0);
    state.revealedSteps = revealStep;
    state.furthestRevealedSteps = Math.max(state.furthestRevealedSteps, revealStep);
    state.activePhase = revealStep > 0
      ? phasesForStep(run.decision_steps[revealStep - 1]).at(-1)
      : null;
    state.isPlaying = false;
  }
  if (nextGuide?.finish) {
    const run = selectedRun();
    state.revealedSteps = run?.decision_step_count || state.revealedSteps;
    state.furthestRevealedSteps = Math.max(state.furthestRevealedSteps, state.revealedSteps);
    state.activePhase = null;
    state.isPlaying = false;
  }
  saveTutorialProgress();
  renderAll();
}

function handleTutorialRequiredAction(action) {
  if (!TUTORIAL_MODE) return;
  const guide = TUTORIAL_GUIDE[state.tutorialGuideIndex];
  if (guide?.requiredAction === action) {
    advanceTutorialGuide(action);
  }
}

function completeTutorial() {
  if (!TUTORIAL_MODE || !state.session) return;
  emitStudyEvent("walkthrough_completed", {
    guideStepsCompleted: TUTORIAL_GUIDE.length,
    practiceTrajectorySteps: selectedRun()?.decision_step_count || null,
  }, true);
  state.session.walkthroughCompleted = true;
  state.session.walkthroughProgress = null;
  state.session.stage = "pretest";
  saveStaticSession();
  markInternalNavigation("study");
  window.location.replace("../index.html");
}

function timepointCard(label, value, description) {
  return `
    <div class="timepoint-card">
      <span>${escapeHtml(label)}</span>
      <strong>${formatTimepoint(value, "N/A")}</strong>
      <p>${escapeHtml(description)}</p>
    </div>
  `;
}

function selectRun(runId) {
  if (runId === state.selectedId) return;
  pausePlayback(false);
  state.selectedId = runId;
  state.revealedSteps = 0;
  state.activePhase = null;
  state.openInfoStep = null;
  state.infoResponse = null;
  state.customInfoStep = null;
  state.customInfoDraft = "";
  state.summaryOpen = false;
  renderAll();
  document.querySelector("#transcript")?.scrollTo({ top: 0 });
}

function togglePlayback() {
  if (!taskComprehensionPassed()) return;
  if (state.isPlaying) {
    emitStudyEvent("playback_paused", {
      speed: state.speed,
      playbackPhase: state.activePhase,
    }, true);
    pausePlayback();
    return;
  }
  const run = selectedRun();
  if (!run) return;
  if (trajectoryIsComplete(run)) {
    state.revealedSteps = 0;
    state.activePhase = null;
  }
  state.openInfoStep = null;
  state.infoResponse = null;
  state.customInfoStep = null;
  state.customInfoDraft = "";
  state.summaryOpen = false;
  emitStudyEvent("playback_started", {
    speed: state.speed,
    playbackPhase: state.activePhase,
  }, true);
  startPlayback();
}

function startPlayback() {
  clearPlaybackTimer();
  state.isPlaying = true;
  renderTopbar();
  renderTranscript();
  renderPlayer();
  if (state.activePhase === null) {
    advancePlaybackPhase();
  } else {
    scheduleNextTick();
  }
}

function scheduleNextTick() {
  clearPlaybackTimer();
  const baseDelay =
    state.activePhase === "message"
      ? 460
      : state.activePhase === "tool_call"
        ? 720
        : state.activePhase === "observation"
          ? 900
          : 260;
  const delay = Math.max(
    140,
    (baseDelay * PLAYBACK_DELAY_MULTIPLIER) / state.speed,
  );
  state.timer = window.setTimeout(() => {
    advancePlaybackPhase();
  }, delay);
}

function advancePlaybackPhase() {
  const run = selectedRun();
  if (!run || !state.isPlaying) return;

  if (state.activePhase === null) {
    if (state.revealedSteps >= run.decision_step_count) {
      state.isPlaying = false;
      clearPlaybackTimer();
      renderPlayer();
      return;
    }
    state.revealedSteps += 1;
    const step = run.decision_steps[state.revealedSteps - 1];
    const firstExposure = state.revealedSteps > state.furthestRevealedSteps;
    state.furthestRevealedSteps = Math.max(
      state.furthestRevealedSteps,
      state.revealedSteps,
    );
    state.activePhase = phasesForStep(step)[0];
    saveTrialProgress();
    emitStudyEvent("step_revealed", {
      decisionStep: Number(step.decision_step),
      rawStepIds: step.raw_step_ids || [],
      playbackPhase: state.activePhase,
      hasAgentMessage: Boolean(stepPresentation(step).message),
      displayedToolCount: Array.isArray(step.display_events) ? step.display_events.length : 0,
      firstExposure,
      speed: state.speed,
    }, false, Number(step.decision_step));
  } else {
    const step = run.decision_steps[state.revealedSteps - 1];
    const phases = phasesForStep(step);
    const phaseIndex = phases.indexOf(state.activePhase);
    if (phaseIndex >= 0 && phaseIndex < phases.length - 1) {
      state.activePhase = phases[phaseIndex + 1];
    } else {
      state.activePhase = null;
      if (state.revealedSteps >= run.decision_step_count) {
        state.isPlaying = false;
        clearPlaybackTimer();
        emitStudyEvent("trajectory_reached_end", {
          totalSteps: run.decision_step_count,
        }, true);
      }
    }
  }

  renderTopbar();
  renderTranscript();
  renderPlayer();
  if (state.isPlaying) scheduleNextTick();
}

function phasesForStep(step) {
  const events = Array.isArray(step?.events) ? step.events : [];
  const agentEvent = events.find((event) =>
    AGENT_SOURCES.has(String(event.source || "").toLowerCase()),
  );
  const message =
    extractVisibleText(agentEvent?.payload || {}) ||
    (typeof step?.agent_message === "string" ? step.agent_message : "");
  const hasTools =
    Array.isArray(step?.display_events) && step.display_events.length > 0;
  const phases = [];
  if (message) phases.push("message");
  if (hasTools) phases.push("tool_call", "observation");
  if (!phases.length) phases.push("observation");
  return phases;
}

function pausePlayback(shouldRender = true) {
  state.isPlaying = false;
  clearPlaybackTimer();
  if (shouldRender) renderPlayer();
}

function clearPlaybackTimer() {
  if (state.timer !== null) {
    window.clearTimeout(state.timer);
    state.timer = null;
  }
}

function moveToStep(nextStep, source = "manual_control") {
  if (!taskComprehensionPassed()) return;
  const run = selectedRun();
  if (!run) return;
  pausePlayback(false);
  const previousStep = state.revealedSteps;
  const previousFurthestStep = state.furthestRevealedSteps;
  state.revealedSteps = Math.max(
    0,
    Math.min(Number(nextStep), run.decision_step_count),
  );
  state.furthestRevealedSteps = Math.max(
    state.furthestRevealedSteps,
    state.revealedSteps,
  );
  state.activePhase =
    state.revealedSteps === run.decision_step_count
      ? null
      : state.revealedSteps > 0
      ? phasesForStep(run.decision_steps[state.revealedSteps - 1]).at(-1)
      : null;
  state.openInfoStep = null;
  state.infoResponse = null;
  state.customInfoStep = null;
  state.customInfoDraft = "";
  state.summaryOpen = false;
  saveTrialProgress();
  emitStudyEvent("playback_position_changed", {
    previousStep,
    requestedStep: Number(nextStep),
    resolvedStep: state.revealedSteps,
    source,
    newlyExposedRange:
      state.revealedSteps > previousFurthestStep
        ? [previousFurthestStep + 1, state.revealedSteps]
        : null,
  }, true);
  renderTopbar();
  renderTranscript();
  renderPlayer();
  renderSummary();
}

function recordOversight(stepNumber) {
  const wasPlaying = state.isPlaying;
  pausePlayback(false);
  openResearchModal("oversight", stepNumber, { wasPlaying });
}

function selectInformation(stepNumber, typeId) {
  const option = INFO_TYPES.find((candidate) => candidate.id === typeId);
  if (!option) return;
  const record = currentRecord();
  const exists = record.infoRequests.some(
    (request) => request.step === stepNumber && request.type === typeId,
  );
  if (!exists) {
    record.infoRequests.push({
      step: stepNumber,
      type: typeId,
      label: option.label,
    });
    saveRecords();
  }
  state.infoResponse = {
    step: stepNumber,
    type: typeId,
    label: option.label,
  };
  state.customInfoStep = null;
  state.customInfoDraft = "";
  renderRunList();
  renderTranscript(false);
}

function toggleCustomInformation(stepNumber) {
  if (state.customInfoStep === stepNumber) {
    state.customInfoStep = null;
    state.customInfoDraft = "";
  } else {
    state.customInfoStep = stepNumber;
    state.customInfoDraft = "";
  }
  renderTranscript(false);
  if (state.customInfoStep === stepNumber) {
    requestAnimationFrame(() => {
      document.querySelector(`#custom-info-${stepNumber}`)?.focus();
    });
  }
}

function submitCustomInformation(stepNumber) {
  const question = state.customInfoDraft.trim();
  if (!question) return;
  const record = currentRecord();
  const exists = record.infoRequests.some(
    (request) =>
      request.step === stepNumber &&
      request.type === "other" &&
      String(request.question || "").toLowerCase() === question.toLowerCase(),
  );
  if (!exists) {
    record.infoRequests.push({
      step: stepNumber,
      type: "other",
      label: "Other information",
      question,
    });
    saveRecords();
  }
  state.infoResponse = {
    step: stepNumber,
    type: "other",
    label: "Other information",
    question,
  };
  state.customInfoStep = null;
  state.customInfoDraft = "";
  renderRunList();
  renderTranscript(false);
}

function openResearchModal(mode, stepNumber, extraPayload = {}) {
  state.modalMode = mode;
  state.modalStep = Number(stepNumber);
  state.modalOpenedAt = performance.now();
  state.summaryOpen = false;
  emitStudyEvent(`${mode}_panel_opened`, {
    anchorStep: state.modalStep,
    prefixStep: state.revealedSteps,
    furthestSeenStep: state.furthestRevealedSteps,
    playbackPhase: state.activePhase,
    ...extraPayload,
  }, true, state.modalStep);
  renderPlayer();
  renderSummary();
  renderTutorialGuide();
}

function toggleExchange(stepNumber, exchangeIndex) {
  const exchangeKey = `${state.selectedId}:${stepNumber}:${exchangeIndex}`;
  if (state.expandedExchanges.has(exchangeKey)) {
    state.expandedExchanges.delete(exchangeKey);
  } else {
    state.expandedExchanges.add(exchangeKey);
  }
  emitStudyEvent("tool_exchange_toggled", {
    anchorStep: stepNumber,
    exchangeIndex,
    expanded: state.expandedExchanges.has(exchangeKey),
  }, false, stepNumber);
  renderTranscript(false);
}

function trialElapsedMs() {
  return Math.max(0, Math.round(performance.now() - state.trialStartedAt));
}

function studyEventContext(stepOverride) {
  const run = selectedRun();
  return {
    phase: TUTORIAL_MODE ? "intro" : "study",
    studyId: run?.studyId || state.selectedId || null,
    trialIndex: state.trialIndex,
    stepIndex: Number.isInteger(stepOverride) ? stepOverride : state.revealedSteps,
    playbackMs: trialElapsedMs(),
  };
}

function emitStudyEvent(eventType, payload = {}, critical = false, stepOverride) {
  if (!Array.isArray(state.session.events)) state.session.events = [];
  state.session.events.push({
    id: makeId(),
    ...studyEventContext(stepOverride),
    eventType,
    payload: {
      prefixStep: state.revealedSteps,
      furthestSeenStep: state.furthestRevealedSteps,
      playbackPhase: state.activePhase,
      isPlaying: state.isPlaying,
      speed: state.speed,
      ...payload,
    },
    clientTimestamp: new Date().toISOString(),
  });
  saveStaticSession();
}

async function flushStudyEvents() {
  saveStaticSession();
}

function installStudyTelemetry() {
  document.addEventListener("visibilitychange", () => {
    emitStudyEvent(document.hidden ? "page_hidden" : "page_visible", {}, true);
  });
  window.addEventListener("blur", () => emitStudyEvent("window_blur"));
  window.addEventListener("focus", () => emitStudyEvent("window_focus"));
  window.addEventListener("beforeunload", saveStaticSession);
}

function modalDwellMs() {
  return state.modalOpenedAt === null
    ? null
    : Math.max(0, Math.round(performance.now() - state.modalOpenedAt));
}

function closeResearchModal(reason) {
  if (!state.modalMode) return;
  const mode = state.modalMode;
  const step = state.modalStep;
  emitStudyEvent(`${mode}_panel_closed`, {
    reason,
    anchorStep: step,
    panelDwellMs: modalDwellMs(),
  }, false, step);
  state.modalMode = null;
  state.modalStep = null;
  state.modalOpenedAt = null;
  renderSummary();
  renderPlayer();
  renderTutorialGuide();
}

function formValues(form) {
  return Object.fromEntries(new FormData(form).entries());
}

function interactedRangeValue(form, fieldName) {
  const slider = form.querySelector(`input[name="${fieldName}"]`);
  return slider?.dataset.touched === "true" ? Number(slider.value) : null;
}

function confidenceValue(form) {
  return interactedRangeValue(form, "confidence");
}

function validateRequiredSliderInteractions(form) {
  const sliders = Array.from(
    form.querySelectorAll('input[type="range"][data-requires-interaction="true"]:not(:disabled)'),
  );
  const untouchedSlider = sliders.find((slider) => slider.dataset.touched !== "true");
  sliders.forEach((slider) => {
    const fieldLabel = slider.name === "failureProbability"
      ? "task-failure probability slider"
      : "confidence slider";
    slider.setCustomValidity(
      slider === untouchedSlider
        ? `Please move the ${fieldLabel} before continuing.`
        : "",
    );
  });
  if (!untouchedSlider) return true;
  untouchedSlider.reportValidity();
  untouchedSlider.focus();
  return false;
}

function clearFieldValidity(field) {
  field.setCustomValidity?.("");
  if (field.type !== "radio" || !field.name || !field.form) return;
  field.form.querySelectorAll('input[type="radio"]').forEach((radio) => {
    if (radio.name === field.name) radio.setCustomValidity("");
  });
}

function toggleOversightSection(checkbox) {
  const form = checkbox.closest("form");
  const sectionName = checkbox.dataset.section;
  const section = form?.querySelector(`[data-oversight-section="${sectionName}"]`);
  const body = form?.querySelector(`[data-oversight-section-body="${sectionName}"]`);
  if (!section || !body) return;

  const selected = checkbox.checked;
  section.classList.toggle("selected", selected);
  body.hidden = !selected;
  body.querySelectorAll("input, textarea, select").forEach((field) => {
    field.disabled = !selected;
    if (field.dataset.requiredWhenSelected === "true") {
      field.required = selected;
    }
    if (!selected) field.setCustomValidity("");
  });
  const selectionError = form.querySelector("[data-oversight-selection-error]");
  if (selectionError) selectionError.hidden = true;
}

function submitOversightNote(form) {
  const values = formValues(form);
  const includeInfo = values.includeInfo === "yes";
  const includeSuspicion = values.includeSuspicion === "yes";
  const includeIntervention = values.includeIntervention === "yes";
  const selectionError = form.querySelector("[data-oversight-selection-error]");
  if (!includeInfo && !includeSuspicion && !includeIntervention) {
    if (selectionError) selectionError.hidden = false;
    form.querySelector('input[type="checkbox"]')?.focus();
    return;
  }

  const submissionId = makeId();
  const common = {
    submissionId,
    anchorStep: state.modalStep,
    prefixStep: state.revealedSteps,
    furthestSeenStep: state.furthestRevealedSteps,
    playbackPhase: state.activePhase,
    panelDwellMs: modalDwellMs(),
    playbackMs: trialElapsedMs(),
    submittedAt: new Date().toISOString(),
  };
  const record = currentRecord();
  const submittedEntries = {};

  if (includeInfo) {
    submittedEntries.info = {
      ...common,
      requestText: String(values.requestText || "").trim(),
      purposeText: String(values.purposeText || "").trim(),
    };
    record.infoRequests.push(submittedEntries.info);
  }

  if (includeSuspicion) {
    submittedEntries.suspicion = {
      ...common,
      evidence: String(values.evidence || "").trim(),
      failureProbability: interactedRangeValue(form, "failureProbability"),
      confidence: confidenceValue(form),
    };
    record.suspicions.push(submittedEntries.suspicion);
    if (!Number.isInteger(record.tUserOversight)) {
      record.tUserOversight = state.revealedSteps;
    }
  }

  if (includeIntervention) {
    submittedEntries.intervention = {
      ...common,
      proposedAction: String(values.proposedAction || "").trim(),
      whyNow: String(values.whyNow || "").trim(),
      expectedRisk: String(values.expectedRisk || "").trim(),
    };
    record.interventions.push(submittedEntries.intervention);
  }

  saveRecords();
  emitStudyEvent("oversight_note_submitted", {
    ...common,
    selectedSections: {
      informationNeed: includeInfo,
      suspicion: includeSuspicion,
      intervention: includeIntervention,
    },
  }, true, common.anchorStep);
  if (submittedEntries.info) {
    emitStudyEvent("information_request_submitted", submittedEntries.info, true, common.anchorStep);
  }
  if (submittedEntries.suspicion) {
    emitStudyEvent("suspicion_submitted", submittedEntries.suspicion, true, common.anchorStep);
  }
  if (submittedEntries.intervention) {
    emitStudyEvent("intervention_intent_submitted", submittedEntries.intervention, true, common.anchorStep);
  }
  closeResearchModal("submitted");
  renderRunList();
  renderTranscript(false);
  handleTutorialRequiredAction("submit-oversight-note");
}

function submitComprehension(form) {
  if (TUTORIAL_MODE) return;
  const values = formValues(form);
  const selectedOptionId = String(values.comprehensionAnswer || "");
  const question = comprehensionQuestion();
  const record = currentRecord();
  const comprehension = record.comprehension;
  if (!question || !comprehension || !selectedOptionId) return;

  const selectedOption = question.options.find((option) => option.id === selectedOptionId);
  const correct = selectedOptionId === question.correctOptionId;
  const gateDwellMs = modalDwellMs();
  const attempt = {
    attemptNumber: comprehension.attempts.length + 1,
    selectedOptionId,
    selectedOptionText: selectedOption?.label || "",
    correct,
    responseMsSinceGateOpened: gateDwellMs,
    submittedAt: new Date().toISOString(),
  };
  comprehension.attempts.push(attempt);

  if (correct) {
    comprehension.passed = true;
    comprehension.passedAt = attempt.submittedAt;
    comprehension.attemptCount = comprehension.attempts.length;
  }
  saveRecords();
  emitStudyEvent("comprehension_answer_submitted", {
    questionId: question.questionId,
    ...attempt,
  }, true, 0);

  if (!correct) {
    state.comprehensionError = "That answer does not match the task. Re-read the instruction and try again.";
    renderSummary();
    return;
  }

  state.comprehensionError = "";
  state.modalMode = null;
  state.modalStep = null;
  state.modalOpenedAt = null;
  state.trialStartedAt = performance.now();
  emitStudyEvent("comprehension_gate_passed", {
    questionId: question.questionId,
    attemptCount: comprehension.attempts.length,
    gateDwellMs,
  }, true, 0);
  saveRecords();
  renderSummary();
  renderPlayer();
  renderTopbar();
  renderTranscript(false);
}

async function submitVerdict(form) {
  if (state.isSavingTrial) return;
  state.isSavingTrial = true;
  state.saveError = "";
  const values = formValues(form);
  const record = currentRecord();
  const verdict = {
    verdict: String(values.verdict || ""),
    confidence: confidenceValue(form),
    evidence: String(values.evidence || "").trim(),
    missingInformation: String(values.missingInformation || "").trim(),
    wouldIntervene: String(values.wouldIntervene || ""),
    furthestSeenStep: state.furthestRevealedSteps,
    informationRequestCount: record.infoRequests.length,
    suspicionCount: record.suspicions.length,
    interventionCount: record.interventions.length,
    panelDwellMs: modalDwellMs(),
    playbackMs: trialElapsedMs(),
    submittedAt: new Date().toISOString(),
  };
  record.verdict = verdict;
  saveRecords();
  emitStudyEvent("trial_verdict_submitted", verdict, true);
  renderSummary();
  await flushStudyEvents();

  if (TUTORIAL_MODE) {
    state.isSavingTrial = false;
    state.summaryOpen = false;
    handleTutorialRequiredAction("submit-verdict");
    return;
  }

  const nextTrial = state.trialIndex + 1;
  sessionStorage.removeItem(trialProgressKey());
  if (nextTrial >= state.totalTrials) {
    state.session.currentTrial = nextTrial;
    state.session.stage = "complete";
    emitStudyEvent("study_completed", { completedTrials: nextTrial }, true);
    await flushStudyEvents();
    saveStaticSession();
    markInternalNavigation("study");
    window.location.replace("../index.html");
    return;
  }
  state.trialIndex = nextTrial;
  state.session.currentTrial = nextTrial;
  state.summaryOpen = false;
  state.isSavingTrial = false;
  state.modalOpenedAt = performance.now();
  saveStaticSession();
  if (nextTrial === Math.floor(state.totalTrials / 2)) {
    state.modalMode = "break";
    emitStudyEvent("midstudy_break_shown", {}, true);
    renderSummary();
    return;
  }
  await beginNextTrial();
}

async function beginNextTrial() {
  try {
    await loadCurrentTrial(false);
    buildShell();
    renderAll();
    document.querySelector("#transcript")?.scrollTo({ top: 0 });
  } catch (error) {
    state.saveError = error instanceof Error ? error.message : "The next trajectory could not be loaded.";
    state.summaryOpen = true;
    renderSummary();
  }
}

document.addEventListener("click", (event) => {
  const actionElement = event.target.closest("[data-action]");
  if (!actionElement) return;
  const action = actionElement.dataset.action;

  if (TUTORIAL_MODE && !state.modalMode && !state.summaryOpen) {
    const guide = TUTORIAL_GUIDE[state.tutorialGuideIndex];
    const requiredAction = guide?.requiredAction;
    const allowedTutorialActions = new Set([
      "tutorial-guide-next",
      "toggle-exchange",
    ]);
    if (requiredAction) allowedTutorialActions.add(requiredAction);
    if (guide?.allowedAction) allowedTutorialActions.add(guide.allowedAction);
    if (!allowedTutorialActions.has(action)) {
      event.preventDefault();
      return;
    }
  }

  if (
    action === "close-summary" &&
    event.target.closest("[data-modal-panel]") &&
    !event.target.closest("button")
  ) {
    return;
  }

  switch (action) {
    case "select-run":
      selectRun(actionElement.dataset.runId);
      break;
    case "toggle-play":
      togglePlayback();
      handleTutorialRequiredAction("toggle-play");
      break;
    case "restart":
      moveToStep(0, "restart_button");
      break;
    case "previous":
      moveToStep(state.revealedSteps - 1, "previous_button");
      break;
    case "next":
      moveToStep(state.revealedSteps + 1, "next_button");
      handleTutorialRequiredAction("next");
      break;
    case "tutorial-guide-next":
      advanceTutorialGuide();
      break;
    case "record-oversight":
      recordOversight(Number(actionElement.dataset.step));
      break;
    case "close-info":
      state.openInfoStep = null;
      state.infoResponse = null;
      state.customInfoStep = null;
      state.customInfoDraft = "";
      renderTranscript(false);
      break;
    case "select-info":
      selectInformation(
        Number(actionElement.dataset.step),
        actionElement.dataset.infoType,
      );
      break;
    case "toggle-custom-info":
      toggleCustomInformation(Number(actionElement.dataset.step));
      break;
    case "submit-custom-info":
      submitCustomInformation(Number(actionElement.dataset.step));
      break;
    case "toggle-exchange":
      toggleExchange(
        Number(actionElement.dataset.step),
        Number(actionElement.dataset.exchangeIndex),
      );
      break;
    case "open-summary":
      state.summaryOpen = true;
      state.modalMode = null;
      state.modalStep = state.revealedSteps;
      state.modalOpenedAt = performance.now();
      pausePlayback(false);
      emitStudyEvent("verdict_panel_opened", {
        prefixStep: state.revealedSteps,
        informationRequestCount: currentRecord().infoRequests.length,
        suspicionCount: currentRecord().suspicions.length,
        interventionCount: currentRecord().interventions.length,
      }, true);
      renderPlayer();
      renderSummary();
      renderTutorialGuide();
      break;
    case "close-summary":
      if (state.summaryOpen || state.modalMode === "break" || state.modalMode === "comprehension") break;
      closeResearchModal("dismissed");
      break;
    case "continue-after-break":
      emitStudyEvent("midstudy_break_ended", {}, true);
      state.modalMode = null;
      state.modalStep = null;
      renderSummary();
      void beginNextTrial();
      break;
    default:
      break;
  }
});

document.addEventListener("input", (event) => {
  clearFieldValidity(event.target);
  const action = event.target.dataset.action;
  if (action === "scrub") {
    pausePlayback(false);
    const run = selectedRun();
    const requestedStep = Number(event.target.value);
    const progress = run?.decision_step_count
      ? (requestedStep / run.decision_step_count) * 100
      : 0;
    event.target.style.setProperty("--progress", `${progress}%`);
    const stepLabel = event.target
      .closest(".scrubber")
      ?.querySelector(".scrubber-meta span");
    if (stepLabel && run) {
      stepLabel.textContent = `Decision step ${requestedStep} of ${run.decision_step_count}`;
    }
  }
  if (action === "custom-info-input") {
    state.customInfoDraft = event.target.value;
    const submitButton = event.target
      .closest(".custom-info-form")
      ?.querySelector(".custom-info-submit");
    if (submitButton) {
      submitButton.disabled = !state.customInfoDraft.trim();
    }
  }
  if (action === "live-range") {
    if (event.target.dataset.requiresInteraction === "true") {
      event.target.dataset.touched = "true";
      event.target.setCustomValidity("");
    }
    const output = event.target.closest("label")?.querySelector("output");
    if (output) {
      output.textContent = event.target.name === "failureProbability" || event.target.name === "confidence"
        ? `${event.target.value}%`
        : event.target.value;
    }
  }
});

document.addEventListener("change", (event) => {
  clearFieldValidity(event.target);
  const action = event.target.dataset.action;
  if (action === "toggle-oversight-section") {
    toggleOversightSection(event.target);
  }
  if (action === "scrub") {
    moveToStep(Number(event.target.value), "timeline_scrub");
  }
  if (action === "follow") {
    state.follow = event.target.checked;
    emitStudyEvent("follow_preference_changed", { follow: state.follow });
  }
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("form[data-action]");
  if (!form) return;
  event.preventDefault();
  if (!validateRequiredSliderInteractions(form)) return;
  const action = form.dataset.action;
  if (action === "submit-comprehension") submitComprehension(form);
  if (action === "submit-oversight-note") submitOversightNote(form);
  if (action === "submit-verdict") void submitVerdict(form);
});

document.addEventListener("invalid", (event) => {
  const field = event.target;
  if (!field.matches?.("[required]")) return;
  if (field.tagName === "SELECT") {
    field.setCustomValidity("Please select an option.");
  } else if (field.type === "checkbox" || field.type === "radio") {
    field.setCustomValidity("Please select this option to continue.");
  } else {
    field.setCustomValidity("Please complete this field.");
  }
}, true);

let tutorialPositionFrame = null;
function scheduleTutorialGuidePosition() {
  if (!TUTORIAL_MODE || tutorialPositionFrame !== null) return;
  tutorialPositionFrame = requestAnimationFrame(() => {
    tutorialPositionFrame = null;
    positionTutorialGuide();
  });
}
window.addEventListener("resize", scheduleTutorialGuidePosition);
document.addEventListener("scroll", scheduleTutorialGuidePosition, true);

document.addEventListener("keydown", (event) => {
  const tagName = event.target.tagName?.toLowerCase();
  const isTyping =
    tagName === "input" || tagName === "textarea" || tagName === "select";
  if (event.key === "Escape") {
    if (state.modalMode && state.modalMode !== "break" && state.modalMode !== "comprehension") {
      closeResearchModal("escape");
    }
    return;
  }
  if (
    event.key === "Enter" &&
    event.target.dataset.action === "custom-info-input"
  ) {
    event.preventDefault();
    submitCustomInformation(Number(event.target.dataset.step));
    return;
  }
  if (isTyping) return;
  if (state.summaryOpen || state.modalMode) return;
  if (TUTORIAL_MODE) return;
  if (event.code === "Space") {
    event.preventDefault();
    togglePlayback();
  } else if (event.key === "ArrowRight") {
    moveToStep(state.revealedSteps + 1, "keyboard_right");
  } else if (event.key === "ArrowLeft") {
    moveToStep(state.revealedSteps - 1, "keyboard_left");
  }
});

function extractVisibleText(value) {
  if (!value || typeof value !== "object") return "";
  const chunks = [];
  for (const key of [
    "message",
    "content",
    "text",
    "reasoning",
    "thought",
    "output",
  ]) {
    const item = value[key];
    if (typeof item === "string" && item.trim()) {
      chunks.push(item.trim());
    } else if (Array.isArray(item)) {
      for (const child of item) {
        if (typeof child === "string" && child.trim()) {
          chunks.push(child.trim());
        } else if (child && typeof child === "object") {
          for (const childKey of ["text", "content", "message"]) {
            if (
              typeof child[childKey] === "string" &&
              child[childKey].trim()
            ) {
              chunks.push(child[childKey].trim());
            }
          }
        }
      }
    }
  }
  return chunks.join("\n\n");
}

function containsError(value) {
  const text = formatValue(value).toLowerCase();
  return (
    text.includes('"status": "error"') ||
    text.includes('"error":') ||
    text.includes("timeouterror") ||
    text.includes("failed")
  );
}

function formatValue(value) {
  if (typeof value === "string") return value;
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}

function formatObservationDetail(result) {
  if (result === null || result === undefined) {
    return "No recorded observation.";
  }

  let value = result;
  if (value && typeof value === "object") {
    for (const key of [
      "error",
      "message",
      "content",
      "output",
      "text",
      "stdout",
      "stderr",
      "detail",
    ]) {
      if (value[key] !== undefined && value[key] !== null) {
        value = value[key];
        break;
      }
    }
  }

  let text = formatValue(value).trim();
  if (
    text.includes("<<<EXTERNAL_UNTRUSTED_CONTENT") &&
    text.includes("\n---\n")
  ) {
    text = text.split("\n---\n", 2)[1];
    text = text.replace(
      /\n<<<END_EXTERNAL_UNTRUSTED_CONTENT[^>]*>>>\s*$/,
      "",
    );
  }
  return text || "(no output)";
}

function formatRawStepIds(ids) {
  if (!Array.isArray(ids) || ids.length === 0) return "—";
  if (ids.length === 1) return `step ${ids[0]}`;
  return `steps ${ids[0]}–${ids[ids.length - 1]}`;
}

function formatScore(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "—";
  if (Number.isInteger(number)) return String(number);
  return number.toFixed(4).replace(/0+$/, "").replace(/\.$/, "");
}

function formatTimepoint(value, fallback) {
  return Number.isInteger(value) ? `Step ${value}` : fallback;
}

function outcomeLabel(value) {
  if (value === "failure") return "Failure trajectory";
  if (value === "success_control") return "Success control";
  return "Annotation unavailable";
}

function triggerTaxonomy(run) {
  const annotation = run?.annotation || {};
  const mechanism = annotation.trigger_mechanism;
  if (mechanism) {
    const otherDetail =
      mechanism === "other" && annotation.trigger_mechanism_other
        ? `Other · ${annotation.trigger_mechanism_other}`
        : titleCase(mechanism);
    return {
      label: otherDetail,
      state: "failure",
    };
  }
  if (annotation.outcome_class === "success_control") {
    return {
      label: "Not applicable · success",
      state: "success",
    };
  }
  return {
    label: "Unavailable",
    state: "unavailable",
  };
}

function titleCase(value) {
  return String(value)
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function makeId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (character) => {
    const random = Math.floor(Math.random() * 16);
    const value = character === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
}
