const SESSION_KEY = "vera-agent-oversight-study1-static-v14";
const NAVIGATION_KEY = "vera-agent-oversight-study1-navigation-v14";
const STUDY_VERSION = "study1-static-v14.0";
const STIMULUS_SET_VERSION = "study1-trajectory-pool-v2";
const COMPREHENSION_SET_VERSION = "study1-comprehension-v2";
const TOTAL_TRIALS = 10;
const SUCCESS_TASK_IDS = Array.from(
  { length: 10 },
  (_, index) => `T${String(index + 1).padStart(2, "0")}`,
);
const FAILURE_TASK_IDS = Array.from(
  { length: 10 },
  (_, index) => `T${String(index + 11).padStart(2, "0")}`,
);

const STAGES = [
  ["consent", "Consent"],
  ["demographics", "Profile"],
  ["intro", "Walkthrough"],
  ["pretest", "Experience"],
  ["study", "Study"],
  ["complete", "Complete"],
];

const FREQUENCY_OPTIONS = [
  "Never",
  "Less than monthly",
  "About monthly",
  "About weekly",
  "Several times a week",
  "Daily or almost daily",
];

const EXPERIENCE_OPTIONS = [
  "Never",
  "Once",
  "2–3 times",
  "4–10 times",
  "More than 10 times",
];

const OVERSIGHT_FREQUENCY_OPTIONS = [
  "Never",
  "Rarely",
  "Sometimes",
  "Often",
  "Almost always",
];

const root = document.querySelector("#root");
const arrivedFromStudyNavigation = consumeInternalNavigation("study");
let session = loadSession();
if (session && !arrivedFromStudyNavigation) {
  resetStoredStudyState();
  session = null;
}

render();

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
  localStorage.removeItem(SESSION_KEY);
  for (let index = sessionStorage.length - 1; index >= 0; index -= 1) {
    const key = sessionStorage.key(index);
    if (key?.startsWith("vera-study1-static-replay-progress-")) {
      sessionStorage.removeItem(key);
    }
  }
  sessionStorage.removeItem(NAVIGATION_KEY);
}

function loadSession() {
  try {
    const value = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
    return value && typeof value === "object" ? value : null;
  } catch {
    return null;
  }
}

function saveSession() {
  if (!session) return;
  session.updatedAt = new Date().toISOString();
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

function shuffle(values) {
  for (let index = values.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(randomUnit() * (index + 1));
    [values[index], values[swap]] = [values[swap], values[index]];
  }
  return values;
}

function shuffledTaskOrder() {
  const correctTasks = shuffle([...SUCCESS_TASK_IDS]).slice(0, 5);
  const incorrectTasks = shuffle([...FAILURE_TASK_IDS]).slice(0, 5);
  return shuffle([...correctTasks, ...incorrectTasks]);
}

function pushEvent(phase, eventType, payload = {}) {
  if (!session) return;
  if (!Array.isArray(session.events)) session.events = [];
  session.events.push({
    id: makeId(),
    phase,
    eventType,
    payload,
    clientTimestamp: new Date().toISOString(),
    clientElapsedMs: Math.round(performance.now()),
  });
  saveSession();
}

function stageHeader(activeStage) {
  const activeIndex = STAGES.findIndex(([key]) => key === activeStage);
  return `
    <header class="topbar study-topbar">
      <span class="brand">
        <span class="study-mark">AR</span>
        <span><b>AgentReplay</b><small>Predictive Diagnosis · Study 1</small></span>
      </span>
      <nav class="stage-nav" aria-label="Study progress">
        ${STAGES.map(([key, label], index) => `
          <span class="${index < activeIndex ? "done" : index === activeIndex ? "active" : ""}">
            <i>${index < activeIndex ? "✓" : index + 1}</i>${escapeHtml(label)}
          </span>
        `).join("")}
      </nav>
    </header>
  `;
}

function render() {
  const stage = session?.stage || "consent";
  if (stage === "intro") {
    markInternalNavigation("replay");
    window.location.replace("./replay/index.html?tutorial=1");
    return;
  }
  if (stage === "study") {
    markInternalNavigation("replay");
    window.location.replace("./replay/index.html");
    return;
  }
  if (stage === "consent") renderConsent();
  if (stage === "demographics") renderDemographics();
  if (stage === "pretest") renderExperience();
  if (stage === "complete") renderComplete();
}

function renderConsent() {
  root.innerHTML = `
    <main class="study-shell">
      ${stageHeader("consent")}
      <div class="consent-layout">
        <section class="hero-panel">
          <p class="eyebrow">Predictive diagnosis</p>
          <h1>Notice when an AI agent is going off track—before the outcome is obvious.</h1>
          <p class="hero-copy">You will oversee 10 prerecorded agent trajectories and report information needs, suspicions, and intervention intentions as the work unfolds.</p>
          <div class="mini-timeline"><span class="done"></span><span class="active"></span><span></span><span></span><span></span></div>
          <p class="privacy-note">This static website does not transmit data to a server. At the end, you will download one JSON file and submit it to the research team.</p>
        </section>
        <section class="consent-card">
          <p class="card-index">01 / INFORMED CONSENT</p>
          <h2>Study participation</h2>
          <p>The study records questionnaire responses, replay controls, free-text information requests, oversight judgments, and response times. It does not collect your name, email address, or audio.</p>
          <div class="consent-details">
            <details open><summary>What will I do?</summary><p>Complete a short profile and experience questionnaire, practice the replay interface, answer one task-understanding question before each trajectory, and oversee 10 agent trajectories.</p></details>
            <details><summary>Where is my data stored?</summary><p>Only in this browser. You must download the study JSON when you finish.</p></details>
            <details><summary>Is participation voluntary?</summary><p>Yes. You may close the page at any time. Refreshing or reopening the study restarts it and discards the current unfinished session.</p></details>
          </div>
          <form data-form="consent">
            <label class="consent-check"><input name="adult" type="checkbox" required /><span><b>Age confirmation</b><br />I am at least 18 years old.</span></label>
            <label class="consent-check"><input name="agreed" type="checkbox" required /><span><b>Voluntary consent</b><br />I have read the information above and agree to participate.</span></label>
            <button class="primary-button" type="submit">Agree and continue <span>→</span></button>
          </form>
        </section>
      </div>
    </main>
  `;
}

function renderDemographics() {
  root.innerHTML = `
    <main class="study-shell narrow">
      ${stageHeader("demographics")}
      <header class="page-intro">
        <p class="eyebrow">Participant profile</p>
        <h1>About you</h1>
        <p>These questions describe the study sample. Please do not enter directly identifying information.</p>
      </header>
      <form class="form-card" data-form="demographics">
        <div class="form-grid two">
          ${selectField("ageBand", "Age range", ["18–24", "25–34", "35–44", "45–54", "55–64", "65+"])}
          ${selectField("gender", "Gender", ["Woman", "Man", "Non-binary / another identity", "Prefer not to say"])}
          ${selectField("education", "Highest level of education", ["High school or below", "Associate degree", "Bachelor’s degree", "Master’s degree", "Doctoral degree", "Other"])}
          ${selectField("employment", "Current status", ["Student", "Employed full time", "Part-time / freelance", "Not currently employed", "Retired", "Other"])}
        </div>
        <label><span>Field of work or study *</span><input name="field" required placeholder="e.g., education, design, software engineering" /></label>
        <label><span>Accessibility or reading needs (optional)</span><textarea name="accessibility" rows="3"></textarea></label>
        <p class="form-footnote">Your responses stay in this browser and will be included in the final downloaded study file.</p>
        <button class="primary-button fit" type="submit">Save and continue <span>→</span></button>
      </form>
    </main>
  `;
}

function renderExperience() {
  root.innerHTML = `
    <main class="study-shell narrow">
      ${stageHeader("pretest")}
      <header class="page-intro">
        <p class="eyebrow">Agent oversight experience</p>
        <h1>Your experience supervising agents</h1>
        <p>This questionnaire focuses on prior agent-oversight experience rather than knowledge of a particular task domain. In the formal study, each trajectory begins with one task-understanding question that must be answered correctly before playback.</p>
      </header>
      <form class="form-card expertise-form" data-form="experience">
        <section class="question-block">
          <span class="question-number">01</span><div><h2>Agent use</h2><p>How often have you used autonomous or tool-using AI agents during the past three months?</p></div>
          ${selectField("agentUseFrequency", "Use frequency", FREQUENCY_OPTIONS)}
        </section>

        <section class="question-block stacked">
          <span class="question-number">02</span><div><h2>Task types</h2><p>Which kinds of tasks have you used an agent for? Select all that apply.</p></div>
          <fieldset><legend>Task types *</legend><div class="check-grid expertise-checks">
            ${checkboxField("taskTypeCoding", "coding_files", "Coding or file operations")}
            ${checkboxField("taskTypeResearch", "web_research", "Web browsing or research")}
            ${checkboxField("taskTypeOffice", "office_workflow", "Email, calendar, or office workflows")}
            ${checkboxField("taskTypeData", "data_analysis", "Data analysis or spreadsheets")}
            ${checkboxField("taskTypeContent", "content_creation", "Writing or content creation")}
            ${checkboxField("taskTypeTransactions", "transactions", "Shopping, travel, or other transactions")}
            ${checkboxField("taskTypeOther", "other", "Other agent tasks")}
            ${checkboxField("taskTypeNone", "none", "I have not used an agent")}
          </div></fieldset>
        </section>

        <section class="question-block stacked">
          <span class="question-number">03</span><div><h2>Inspecting intermediate information</h2><p>When supervising an agent, how often do you inspect each type of intermediate information?</p></div>
          <div class="form-grid three">
            ${selectField("inspectToolCallsFrequency", "Tool calls", OVERSIGHT_FREQUENCY_OPTIONS)}
            ${selectField("inspectLogsFrequency", "Logs or observations", OVERSIGHT_FREQUENCY_OPTIONS)}
            ${selectField("inspectPlansFrequency", "Plans or task decomposition", OVERSIGHT_FREQUENCY_OPTIONS)}
          </div>
        </section>

        <section class="question-block stacked">
          <span class="question-number">04</span><div><h2>Intervening during execution</h2><p>How often have you taken each action before an agent finished?</p></div>
          <div class="form-grid three">
            ${selectField("pausedAgentFrequency", "Paused an agent", EXPERIENCE_OPTIONS)}
            ${selectField("correctedAgentFrequency", "Corrected or redirected an agent", EXPERIENCE_OPTIONS)}
            ${selectField("rolledBackAgentFrequency", "Rolled back or undid an agent action", EXPERIENCE_OPTIONS)}
          </div>
        </section>

        <section class="question-block stacked">
          <span class="question-number">05</span><div><h2>Long, multi-step tasks</h2><p>How much experience do you have supervising agents on work that takes many steps or a long time to finish?</p></div>
          <div class="form-grid two">
            ${selectField("longTaskFrequency", "Frequency of long or multi-step tasks", FREQUENCY_OPTIONS)}
            ${selectField("longestTaskDuration", "Longest agent task supervised", ["I have not supervised one", "Under 5 minutes", "5–15 minutes", "16–30 minutes", "31–60 minutes", "More than 1 hour"])}
          </div>
        </section>

        <section class="question-block stacked">
          <span class="question-number">06</span><div><h2>False success experience</h2><p>How often have you seen an agent claim or appear to succeed when the task had actually failed or remained incomplete?</p></div>
          <div class="form-grid two">
            ${selectField("falseSuccessExperience", "Experienced apparent success but actual failure", EXPERIENCE_OPTIONS)}
            ${selectField("selfRatedOversight", "Confidence detecting an agent going off track", ["1 — Not at all confident", "2", "3", "4 — Moderately confident", "5", "6", "7 — Extremely confident"])}
          </div>
          <label><span>Optional: briefly describe one apparent-success failure you encountered</span><textarea name="falseSuccessExample" rows="3"></textarea></label>
        </section>

        <p id="experience-error" class="form-error" hidden>Please select at least one task type. If you have not used an agent, select “I have not used an agent.”</p>
        <button class="primary-button fit" type="submit">Begin the formal study <span>→</span></button>
      </form>
    </main>
  `;
}

function renderComplete() {
  const trialCount = Object.keys(session.records || {})
    .filter((key) => key !== "PRACTICE" && session.records[key]?.verdict).length;
  root.innerHTML = `
    <main class="study-shell narrow">
      ${stageHeader("complete")}
      <section class="completion-card static-completion">
        <div class="completion-icon">✓</div>
        <p class="eyebrow">Study complete</p>
        <h1>Your study session is complete</h1>
        <p>Your data still exists only in this browser. Download the JSON file now and submit it through the channel provided by the research team.</p>
        <div class="completion-code"><span>Anonymous participant ID</span><b>${escapeHtml(session.participantId)}</b></div>
        <div class="download-summary"><span>${trialCount} / ${TOTAL_TRIALS} trajectories</span><span>${session.events?.length || 0} interaction events</span><span>No audio</span></div>
        <button class="primary-button download-button" type="button" data-action="download-data">Download study data <span>↓</span></button>
        <p class="completion-note">You may download the file more than once. Downloading does not remove the browser copy.</p>
        <button class="secondary-button" type="button" data-action="reset-study">Clear local data and start a new participant</button>
      </section>
    </main>
  `;
}

function selectField(name, label, options) {
  return `<label><span>${escapeHtml(label)} *</span><select name="${escapeHtml(name)}" required><option value="" selected disabled>Select one</option>${options.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join("")}</select></label>`;
}

function checkboxField(name, value, label) {
  return `<label><input type="checkbox" name="${escapeHtml(name)}" value="${escapeHtml(value)}" />${escapeHtml(label)}</label>`;
}

function downloadData() {
  pushEvent("complete", "data_downloaded", { downloadNumber: (session.downloadCount || 0) + 1 });
  session.downloadCount = (session.downloadCount || 0) + 1;
  session.lastDownloadedAt = new Date().toISOString();
  saveSession();
  const payload = {
    schemaVersion: STUDY_VERSION,
    exportedAt: new Date().toISOString(),
    storageMode: "participant_browser_local_storage",
    warning: "This file is the only centralized copy after the participant submits it to the researcher.",
    participant: session,
    client: {
      userAgent: navigator.userAgent,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      screen: { width: window.screen.width, height: window.screen.height, pixelRatio: window.devicePixelRatio },
    },
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `vera-study1-${session.participantId}-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

document.addEventListener("submit", (event) => {
  const form = event.target.closest("form[data-form]");
  if (!form) return;
  event.preventDefault();
  const values = Object.fromEntries(new FormData(form).entries());

  if (form.dataset.form === "consent") {
    session = {
      schemaVersion: STUDY_VERSION,
      stimulusSetVersion: STIMULUS_SET_VERSION,
      comprehensionSetVersion: COMPREHENSION_SET_VERSION,
      measurementConfig: {
        trajectoryPresentation: {
          topLevelUnit: "decision_step",
          toolOnlyStepsMergedAcrossDecisions: false,
          toolCallAndResultSummariesVisibleByDefault: true,
          fullToolInputsAndObservationsExpandable: true,
          oversightNoteAvailableAtEveryDecisionStep: true,
        },
        confidence: {
          min: 0,
          max: 100,
          initialThumbPosition: 50,
          requiresInteraction: true,
          unansweredValue: null,
        },
        oversightNote: {
          singleEntryPoint: true,
          optionalSections: ["informationNeed", "suspicion", "intervention"],
          minimumSelectedSections: 1,
          informationNeedRequiresDiagnosticJudgment: false,
          suspicionRequiresDiagnosticJudgment: true,
          linkedByField: "submissionId",
        },
        taskComprehension: {
          questionsPerTask: 1,
          optionsPerQuestion: 3,
          optionOrderRandomized: true,
          correctAnswerRequiredBeforePlayback: true,
          allAttemptsRecorded: true,
        },
        failureProbability: {
          min: 0,
          max: 100,
          initialThumbPosition: 50,
          requiresInteraction: true,
          unansweredValue: null,
          shownOnlyForSuspicion: true,
        },
      },
      participantId: `VERA-${makeId().slice(0, 8).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      stage: "demographics",
      taskOrder: shuffledTaskOrder(),
      currentTrial: 0,
      demographics: null,
      experience: null,
      walkthroughCompleted: false,
      walkthroughProgress: null,
      events: [],
      records: {},
    };
    pushEvent("consent", "consent_submitted", { adult: true, agreed: true, audioCollected: false });
    render();
    return;
  }

  if (form.dataset.form === "demographics") {
    session.demographics = values;
    session.stage = "intro";
    pushEvent("demographics", "demographics_submitted", { fields: Object.keys(values) });
    render();
    return;
  }

  if (form.dataset.form === "experience") {
    const formData = new FormData(form);
    const taskTypes = Array.from(formData.entries())
      .filter(([key]) => key.startsWith("taskType"))
      .map(([, value]) => String(value));
    if (!taskTypes.length) {
      document.querySelector("#experience-error").hidden = false;
      return;
    }
    session.experience = { ...values, taskTypes };
    session.stage = "study";
    pushEvent("pretest", "experience_questionnaire_completed", {
      fields: Object.keys(session.experience),
      taskTypeCount: taskTypes.length,
      objectivePretestIncluded: false,
    });
    render();
  }
});

document.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "download-data") downloadData();
  if (action === "reset-study") {
    const confirmed = window.confirm("This permanently deletes the current study record from this browser. Download the JSON first. Continue?");
    if (!confirmed) return;
    localStorage.removeItem(SESSION_KEY);
    session = null;
    render();
  }
});

document.addEventListener("change", (event) => {
  if (event.target.name === "taskTypeNone" && event.target.checked) {
    event.target.closest(".expertise-checks")?.querySelectorAll('input[type="checkbox"]:not([name="taskTypeNone"])').forEach((input) => { input.checked = false; });
  }
  if (event.target.name?.startsWith("taskType") && event.target.name !== "taskTypeNone" && event.target.checked) {
    const none = event.target.closest(".expertise-checks")?.querySelector('[name="taskTypeNone"]');
    if (none) none.checked = false;
  }
  clearFieldValidity(event.target);
});

document.addEventListener("input", (event) => {
  clearFieldValidity(event.target);
});

function clearFieldValidity(field) {
  field.setCustomValidity?.("");
  if (field.type !== "radio" || !field.name || !field.form) return;
  field.form.querySelectorAll('input[type="radio"]').forEach((radio) => {
    if (radio.name === field.name) radio.setCustomValidity("");
  });
}

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

function makeId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (character) => {
    const random = Math.floor(Math.random() * 16);
    const value = character === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
}

function randomUnit() {
  if (globalThis.crypto?.getRandomValues) {
    return globalThis.crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
  }
  return Math.random();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
