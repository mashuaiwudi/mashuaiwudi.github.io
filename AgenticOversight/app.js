const FORMAL_TASK_COUNT = 2;
const BEHAVIOR_TASK_COUNT = 10;
const STEP_DELAY_MS = 850;
const POST_STEP_DELAY_MS = 780;
const REVIEW_DELAY_MS = 3000;
const FAST_MODE = new URLSearchParams(window.location.search).get("speed") === "fast";
const TRUST_CONDITIONS = ["over-trust", "under-trust", "appropriate-trust"];
const TRUST_CONFIG = {
  overTrustingMaxAdoptionRate: 0.8,
  underTrustingMinAdoptionRate: 0.2,
  appropriateMinAdoptionRate: 0.2,
  appropriateMaxAdoptionRate: 0.8,
  appropriateNeutralAdoptionRate: 0.5,
};
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
    text: "The AI accurately understood my ability in this task.",
  },
  {
    id: "value_recognition",
    construct: "Value recognition",
    text: "The AI appropriately recognized the value of my input.",
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
    text: "The AI knew when my input was more reliable than its own judgment.",
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
    text: "I would be willing to provide input to this AI again.",
  },
  {
    id: "future_willingness_to_rely",
    construct: "Future willingness to rely",
    text: "I would rely on this AI's judgment in a future collaboration.",
  },
];
const POST_FORMAL_SURVEY_ITEMS = SURVEY_ITEMS;
const WALKTHROUGH_TOUR_STEPS = [
  {
    target: '[data-tour-target="sidebar"]',
    title: "Formal tasks proceed in order",
    text: "The left side shows progress only. During the study, tasks unlock one by one and cannot be freely selected.",
  },
  {
    target: '[data-tour-target="prompt"]',
    title: "Read the task request",
    text: "Start by identifying the attendees, meeting duration, work hours, and candidate days from the task request.",
  },
  {
    target: '[data-tour-target="calendar"]',
    title: "Inspect busy times and constraints",
    text: "The calendar tool returns each attendee's busy times. The task constraint appears here too, so use both pieces of information before deciding.",
  },
  {
    target: '[data-tour-target="decision"]',
    title: "Wait for the decision checkpoint",
    text: "The agent pauses before revealing its own schedule. This is the moment when the experiment asks you to intervene independently.",
  },
  {
    target: '[data-tour-target="composer"]',
    title: "Submit your recommendation",
    text: "Choose a day and start time, then send your recommendation. In formal tasks, this is your active input.",
  },
  {
    target: '[data-tour-target="review"]',
    title: "Review the agent's response",
    text: "After you submit, the agent reveals its initial choice, compares it with yours, and shows whether it follows your recommendation.",
  },
  {
    target: '[data-tour-target="result"]',
    title: "Check the scheduling result",
    text: "The final result tells you whether the selected schedule succeeded or failed because of attendee conflicts or task constraints.",
  },
];

const data = window.CALENDAR_STUDY_DATA;
if (!data || !Array.isArray(data.examples)) {
  throw new Error("Calendar study data was not loaded.");
}

const formalTasks = data.examples.slice(0, FORMAL_TASK_COUNT);
const behaviorTasks = selectBehaviorTasks(data.examples.slice(FORMAL_TASK_COUNT, -1));
if (formalTasks.length < FORMAL_TASK_COUNT || behaviorTasks.length < BEHAVIOR_TASK_COUNT) {
  throw new Error("Calendar study data must include at least 30 examples for this study flow.");
}
console.info("[Calendar Behavior Tasks]", {
  total: behaviorTasks.length,
  agentCorrect: behaviorTasks.filter(agentDecisionIsCorrectForSelection).length,
  agentWrong: behaviorTasks.filter((task) => !agentDecisionIsCorrectForSelection(task)).length,
  taskIds: behaviorTasks.map((task) => task.id),
});
const walkthroughTask = data.examples[data.examples.length - 1];
const state = {
  participant: null,
  survey: {
    post_formal_questionnaire: null,
  },
  surveyMode: "post_formal",
  taskPhase: "formal",
  taskIndex: 0,
  stepIndex: 0,
  walkthroughTourIndex: 0,
  walkthroughUnlockedTourIndex: 0,
  walkthroughStepIndex: 0,
  walkthroughPostStepIndex: 0,
  walkthroughPlaying: false,
  walkthroughAwaitingAdvice: false,
  walkthroughPostStepsStarted: false,
  walkthroughSelectedSlot: null,
  walkthroughCompleted: false,
  walkthroughActionInProgress: false,
  walkthroughReviewPending: false,
  walkthroughTimer: null,
  playing: false,
  timer: null,
  awaitingAdvice: false,
  awaitingFinalReview: false,
  postStepsStarted: false,
  selectedSlot: null,
  behavioralDecisionMode: null,
  behavioralProposedSlot: null,
  behavioralRoom: null,
  behavioralFinalReviewAction: null,
  behavioralRejectSlot: null,
  condition: null,
  trustStats: createTrustStats(),
  responses: [],
};

function createTrustStats() {
  return {
    acceptedCount: 0,
    totalDecisions: 0,
    participantCorrectAgentWrongCount: 0,
    participantWrongAgentCorrectCount: 0,
    bothWrongDifferentCount: 0,
    caseStats: {
      agreement: { total: 0, accepted: 0 },
      participant_correct_agent_wrong: { total: 0, accepted: 0 },
      participant_wrong_agent_correct: { total: 0, accepted: 0 },
      both_wrong_different: { total: 0, accepted: 0 },
    },
    consoleCaseStats: {
      participant_correct_agent_correct: { total: 0, accepted: 0 },
      same_choice_both_wrong: { total: 0, accepted: 0 },
      participant_correct_agent_wrong: { total: 0, accepted: 0 },
      participant_wrong_agent_correct: { total: 0, accepted: 0 },
      different_choice_both_wrong: { total: 0, accepted: 0 },
    },
  };
}

function selectBehaviorTasks(pool) {
  const correct = pool.filter(agentDecisionIsCorrectForSelection);
  const wrong = pool.filter((task) => !agentDecisionIsCorrectForSelection(task));
  if (correct.length < 7 || wrong.length < 3) {
    throw new Error("Calendar study data must include at least 7 correct and 3 wrong behavior-task agent decisions.");
  }

  const buckets = {
    correct: correct.slice(0, 7),
    wrong: wrong.slice(0, 3),
  };
  const order = [
    "correct",
    "correct",
    "wrong",
    "correct",
    "wrong",
    "correct",
    "correct",
    "wrong",
    "correct",
    "correct",
  ];

  return order.map((kind) => buckets[kind].shift());
}

function agentDecisionIsCorrectForSelection(task) {
  if (typeof task.agent_decision_correct === "boolean") {
    return task.agent_decision_correct;
  }
  return Boolean(
    task.agent_decision
      && task.golden_decision
      && task.agent_decision.day === task.golden_decision.day
      && task.agent_decision.start === task.golden_decision.start
      && task.agent_decision.end === task.golden_decision.end,
  );
}

const els = {
  participantView: document.getElementById("participantView"),
  consentView: document.getElementById("consentView"),
  introView: document.getElementById("introView"),
  walkthroughView: document.getElementById("walkthroughView"),
  taskView: document.getElementById("taskView"),
  behaviorBriefView: document.getElementById("behaviorBriefView"),
  surveyView: document.getElementById("surveyView"),
  doneView: document.getElementById("doneView"),
  participantForm: document.getElementById("participantForm"),
  participantError: document.getElementById("participantError"),
  consentForm: document.getElementById("consentForm"),
  consentError: document.getElementById("consentError"),
  beginStudy: document.getElementById("beginStudy"),
  beginBehaviorTasks: document.getElementById("beginBehaviorTasks"),
  walkthroughTogglePlayback: document.getElementById("walkthroughTogglePlayback"),
  walkthroughReset: document.getElementById("walkthroughReset"),
  walkthroughTaskTitle: document.getElementById("walkthroughTaskTitle"),
  walkthroughTranscript: document.getElementById("walkthroughTranscript"),
  walkthroughWaitingCard: document.getElementById("walkthroughWaitingCard"),
  walkthroughRunStatus: document.getElementById("walkthroughRunStatus"),
  walkthroughCurrentStepLabel: document.getElementById("walkthroughCurrentStepLabel"),
  walkthroughAdviceBox: document.getElementById("walkthroughAdviceBox"),
  walkthroughAdviceForm: document.getElementById("walkthroughAdviceForm"),
  walkthroughAdviceDay: document.getElementById("walkthroughAdviceDay"),
  walkthroughAdviceStart: document.getElementById("walkthroughAdviceStart"),
  walkthroughAgentReview: document.getElementById("walkthroughAgentReview"),
  walkthroughTourCount: document.getElementById("walkthroughTourCount"),
  walkthroughTourTitle: document.getElementById("walkthroughTourTitle"),
  walkthroughTourText: document.getElementById("walkthroughTourText"),
  walkthroughTourBack: document.getElementById("walkthroughTourBack"),
  walkthroughTourNext: document.getElementById("walkthroughTourNext"),
  sidebarTaskList: document.getElementById("sidebarTaskList"),
  currentChatTitle: document.getElementById("currentChatTitle"),
  taskCounter: document.getElementById("taskCounter"),
  togglePlayback: document.getElementById("togglePlayback"),
  resetTask: document.getElementById("resetTask"),
  runStatus: document.getElementById("runStatus"),
  currentStepLabel: document.getElementById("currentStepLabel"),
  transcript: document.getElementById("transcript"),
  nextArea: document.getElementById("nextArea"),
  nextTask: document.getElementById("nextTask"),
  waitingCard: document.getElementById("waitingCard"),
  adviceBox: document.getElementById("adviceBox"),
  adviceForm: document.getElementById("adviceForm"),
  adviceDay: document.getElementById("adviceDay"),
  adviceStart: document.getElementById("adviceStart"),
  optionalDecisionActions: document.getElementById("optionalDecisionActions"),
  letAgentDecide: document.getElementById("letAgentDecide"),
  finalReviewBox: document.getElementById("finalReviewBox"),
  finalReviewSlot: document.getElementById("finalReviewSlot"),
  finalReviewRoom: document.getElementById("finalReviewRoom"),
  finalReviewRoomMeta: document.getElementById("finalReviewRoomMeta"),
  finalReviewSource: document.getElementById("finalReviewSource"),
  approveSchedule: document.getElementById("approveSchedule"),
  showRejectSchedule: document.getElementById("showRejectSchedule"),
  rejectScheduleForm: document.getElementById("rejectScheduleForm"),
  rejectDay: document.getElementById("rejectDay"),
  rejectStart: document.getElementById("rejectStart"),
  agentReview: document.getElementById("agentReview"),
  surveyForm: document.getElementById("surveyForm"),
  surveyEyebrow: document.getElementById("surveyEyebrow"),
  surveyTitle: document.getElementById("surveyTitle"),
  surveyLead: document.getElementById("surveyLead"),
  surveyItems: document.getElementById("surveyItems"),
  surveyError: document.getElementById("surveyError"),
  surveySubmit: document.getElementById("surveySubmit"),
  exportResponses: document.getElementById("exportResponses"),
  restartStudy: document.getElementById("restartStudy"),
};

function showView(name) {
  for (const view of [
    els.participantView,
    els.consentView,
    els.introView,
    els.walkthroughView,
    els.taskView,
    els.behaviorBriefView,
    els.surveyView,
    els.doneView,
  ]) {
    view.classList.remove("active");
  }
  els[`${name}View`].classList.add("active");
  window.scrollTo({ top: 0, left: 0 });
}

function activeTasks() {
  return state.taskPhase === "behavioral" ? behaviorTasks : formalTasks;
}

function taskPhaseLabel() {
  return state.taskPhase === "behavioral" ? "Behavior task" : "Task";
}

function currentTask() {
  return activeTasks()[state.taskIndex];
}

function formatDuration(minutes) {
  return minutes === 60 ? "1 hour" : `${minutes} min`;
}

function timeToMinutes(value) {
  const [hour, minute] = value.split(":").map(Number);
  return hour * 60 + minute;
}

function minutesToTime(value) {
  return `${Math.floor(value / 60)}:${String(value % 60).padStart(2, "0")}`;
}

function deepReplace(value, slot) {
  if (Array.isArray(value)) {
    return value.map((item) => deepReplace(item, slot));
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, deepReplace(item, slot)]),
    );
  }
  if (typeof value === "string") {
    return value
      .replaceAll("{{day}}", slot.day)
      .replaceAll("{{start}}", slot.start)
      .replaceAll("{{end}}", slot.end);
  }
  return value;
}

function clearTimer() {
  if (state.timer) {
    window.clearTimeout(state.timer);
    state.timer = null;
  }
}

function clearWalkthroughTimer() {
  if (state.walkthroughTimer) {
    window.clearTimeout(state.walkthroughTimer);
    state.walkthroughTimer = null;
  }
}

function studyDelay(ms) {
  return FAST_MODE ? 1 : ms;
}

function resetAppShellScroll() {
  document.querySelector(".kanna-window")?.scrollTo({ top: 0, left: 0 });
}

function setRunStatus(label, paused = false) {
  els.runStatus.textContent = label;
  els.runStatus.classList.toggle("paused", paused);
}

function setWalkthroughRunStatus(label, paused = false) {
  els.walkthroughRunStatus.textContent = label;
  els.walkthroughRunStatus.classList.toggle("paused", paused);
}

function assignCondition() {
  const params = new URLSearchParams(window.location.search);
  const override = params.get("trust") || params.get("strategy");
  const aliases = {
    over_trusting: "over-trust",
    under_trusting: "under-trust",
    calibrated_trusting: "appropriate-trust",
    appropriate_trust: "appropriate-trust",
  };
  const normalized = aliases[override] || override;
  if (TRUST_CONDITIONS.includes(normalized)) {
    console.info("[calendar-study trust] Condition forced by URL", normalized);
    return normalized;
  }
  return TRUST_CONDITIONS[Math.floor(Math.random() * TRUST_CONDITIONS.length)];
}

function startTask(index, phase = state.taskPhase || "formal") {
  clearTimer();
  state.taskPhase = phase;
  state.taskIndex = index;
  state.stepIndex = 0;
  state.playing = true;
  state.awaitingAdvice = false;
  state.awaitingFinalReview = false;
  state.postStepsStarted = false;
  state.selectedSlot = null;
  state.behavioralDecisionMode = null;
  state.behavioralProposedSlot = null;
  state.behavioralRoom = null;
  state.behavioralFinalReviewAction = null;
  state.behavioralRejectSlot = null;

  const task = currentTask();
  const taskList = activeTasks();
  const phaseLabel = taskPhaseLabel();
  const isBehavioral = state.taskPhase === "behavioral";
  renderSidebarTasks();
  renderAdviceOptions(task);
  renderAdviceOptions(task, els.rejectDay, els.rejectStart);
  els.currentChatTitle.textContent = task.id.replace("calendar_scheduling_", "");
  els.taskCounter.textContent = `${phaseLabel} ${index + 1} of ${taskList.length}`;
  els.transcript.innerHTML = "";
  els.nextArea.classList.add("hidden");
  els.waitingCard.classList.remove("hidden");
  els.adviceBox.classList.add("hidden");
  els.optionalDecisionActions.classList.toggle("hidden", !isBehavioral);
  els.finalReviewBox.classList.add("hidden");
  els.rejectScheduleForm.classList.add("hidden");
  els.finalReviewSlot.textContent = "";
  els.finalReviewRoom.textContent = "";
  els.finalReviewRoomMeta.textContent = "";
  els.finalReviewSource.textContent = "";
  els.agentReview.className = "agent-review hidden";
  els.agentReview.innerHTML = "";
  els.togglePlayback.textContent = "Pause";

  appendUserTask(task);
  showView("task");
  resetAppShellScroll();
  setRunStatus("Running", false);
  playPreStep();
}

function renderSidebarTasks() {
  const taskList = activeTasks();
  const label = state.taskPhase === "behavioral" ? "Behavior" : "Task";
  els.sidebarTaskList.innerHTML = taskList
    .map((task, index) => {
      const active = index === state.taskIndex ? " active" : "";
      const title = `${label} ${index + 1}`;
      const status = index < state.taskIndex ? "done" : index === state.taskIndex ? "running" : "queued";
      return `
        <div class="chat-row${active}" aria-current="${index === state.taskIndex ? "step" : "false"}">
          <span class="chat-dot ${status}"></span>
          <span class="chat-name">${escapeHtml(title)}</span>
          <span class="chat-age">${escapeHtml(status)}</span>
        </div>
      `;
    })
    .join("");
}

function renderAdviceOptions(task, daySelect = els.adviceDay, startSelect = els.adviceStart, selectedSlot = null) {
  daySelect.innerHTML = task.days
    .map((day) => `<option value="${day}">${day}</option>`)
    .join("");

  const starts = [];
  for (let min = 9 * 60; min <= 17 * 60 - task.duration_minutes; min += 30) {
    starts.push(minutesToTime(min));
  }
  startSelect.innerHTML = starts
    .map((time) => `<option value="${time}">${time}</option>`)
    .join("");

  if (selectedSlot) {
    daySelect.value = selectedSlot.day;
    startSelect.value = selectedSlot.start;
  }
}

function currentSurveyItems() {
  return POST_FORMAL_SURVEY_ITEMS;
}

function renderSurveyItems(items = currentSurveyItems(), startNumber = 1) {
  els.surveyItems.innerHTML = items
    .map((item, index) => {
      const number = startNumber + index;
      const options = Array.from({ length: 7 }, (_, optionIndex) => {
        const value = optionIndex + 1;
        return `
          <label class="likert-option">
            <input type="radio" name="${escapeHtml(item.id)}" value="${value}" />
            <span>${value}</span>
          </label>
        `;
      }).join("");
      return `
        <fieldset class="survey-item">
          <legend>
            <span class="survey-number">${number}</span>
            <span class="survey-construct">${escapeHtml(item.construct)}</span>
            <strong>${escapeHtml(item.text)}</strong>
          </legend>
          <div class="likert-scale" role="radiogroup" aria-label="${escapeHtml(item.text)}">
            ${options}
          </div>
        </fieldset>
      `;
    })
    .join("");
}

function showSurvey(mode) {
  state.surveyMode = mode;
  els.surveyEyebrow.textContent = "Questionnaire";
  els.surveyTitle.textContent = "Post-task questionnaire";
  els.surveyLead.textContent = "Please answer these items about how the agent handled your input in the first 20 tasks.";
  els.surveySubmit.textContent = "Continue to behavior phase";
  renderSurveyItems(POST_FORMAL_SURVEY_ITEMS, 1);
  els.surveyForm.reset();
  clearFormError(els.surveyError);
  els.surveyForm
    .querySelectorAll(".survey-item.missing")
    .forEach((item) => item.classList.remove("missing"));
  showView("survey");
}

function appendUserTask(task) {
  const entry = document.createElement("article");
  entry.className = "user-message-row";
  entry.innerHTML = `
    <div class="user-bubble">
      <p>${escapeHtml(task.task_text)}</p>
      <div class="task-meta-pills">
        <span>${escapeHtml(formatDuration(task.duration_minutes))}</span>
        <span>${escapeHtml(task.participants.join(" + "))}</span>
      </div>
    </div>
  `;
  els.transcript.appendChild(entry);
}

function renderTaskBubble(task, targetName = "") {
  const targetAttribute = targetName ? ` data-tour-target="${escapeHtml(targetName)}"` : "";
  return `
    <article class="user-message-row"${targetAttribute}>
      <div class="user-bubble">
        <p>${escapeHtml(task.task_text)}</p>
        <div class="task-meta-pills">
          <span>${escapeHtml(formatDuration(task.duration_minutes))}</span>
          <span>${escapeHtml(task.participants.join(" + "))}</span>
        </div>
      </div>
    </article>
  `;
}

function renderWalkthrough() {
  if (!walkthroughTask) {
    return;
  }

  clearWalkthroughTimer();
  state.walkthroughTourIndex = 0;
  state.walkthroughUnlockedTourIndex = 0;
  state.walkthroughStepIndex = 0;
  state.walkthroughPostStepIndex = 0;
  state.walkthroughPlaying = false;
  state.walkthroughAwaitingAdvice = false;
  state.walkthroughPostStepsStarted = false;
  state.walkthroughSelectedSlot = null;
  state.walkthroughCompleted = false;
  state.walkthroughActionInProgress = false;
  state.walkthroughReviewPending = false;
  els.walkthroughTaskTitle.textContent = walkthroughTask.id.replace("calendar_scheduling_", "Practice ");
  renderAdviceOptions(
    walkthroughTask,
    els.walkthroughAdviceDay,
    els.walkthroughAdviceStart,
  );
  els.walkthroughTranscript.innerHTML = renderTaskBubble(walkthroughTask, "prompt");
  els.walkthroughAgentReview.className = "agent-review hidden";
  els.walkthroughAgentReview.innerHTML = "";
  els.walkthroughAdviceBox.classList.add("hidden");
  els.walkthroughWaitingCard.classList.remove("hidden");
  els.walkthroughTogglePlayback.disabled = true;
  els.walkthroughTogglePlayback.textContent = "Pause";
  setWalkthroughRunStatus("Ready", true);
  els.walkthroughCurrentStepLabel.textContent = "Use Next to move through the practice walkthrough.";
  setWalkthroughTourStep(0);
}

function getWalkthroughTourTargetForStep(step) {
  if (step.type === "tool_result" && Array.isArray(step.output?.busy_windows)) {
    return "calendar";
  }
  if (step.type === "decision") {
    return "decision";
  }
  if (step.type === "final_result") {
    return "result";
  }
  return "";
}

function unlockWalkthroughTourStep(index) {
  state.walkthroughUnlockedTourIndex = Math.max(
    state.walkthroughUnlockedTourIndex,
    Math.min(index, WALKTHROUGH_TOUR_STEPS.length - 1),
  );
  setWalkthroughTourStep(index);
}

function refreshWalkthroughGuideButtons() {
  const isFinalStep = state.walkthroughTourIndex === WALKTHROUGH_TOUR_STEPS.length - 1;
  const canStartFormalTasks = state.walkthroughCompleted && isFinalStep;
  els.walkthroughTourBack.disabled = state.walkthroughTourIndex === 0
    || state.walkthroughActionInProgress;
  els.walkthroughTourNext.disabled =
    state.walkthroughActionInProgress
    || (state.walkthroughTourIndex === 4 && state.walkthroughAwaitingAdvice)
    || state.walkthroughReviewPending
    || (isFinalStep && !canStartFormalTasks);
  els.walkthroughTourNext.textContent =
    canStartFormalTasks
      ? "Start formal tasks"
      : state.walkthroughTourIndex === 5
      ? "Continue to result"
      : "Next";
}

function positionWalkthroughCard(target) {
  window.requestAnimationFrame(() => {
    const card = document.querySelector(".walkthrough-card");
    if (!card) {
      return;
    }

    const viewportMargin = 16;
    const gap = 14;
    const cardWidth = Math.min(360, window.innerWidth - viewportMargin * 2);
    card.style.width = `${cardWidth}px`;

    if (!target) {
      card.style.left = `${viewportMargin}px`;
      card.style.top = `${viewportMargin}px`;
      return;
    }

    const rect = target.getBoundingClientRect();
    const cardHeight = card.offsetHeight;
    const rightLeft = rect.right + gap;
    const leftLeft = rect.left - cardWidth - gap;
    const canUseRight = rightLeft + cardWidth <= window.innerWidth - viewportMargin;
    const canUseLeft = leftLeft >= viewportMargin;

    let left;
    if (canUseRight) {
      left = rightLeft;
    } else if (canUseLeft) {
      left = leftLeft;
    } else {
      left = Math.min(
        Math.max(rect.left, viewportMargin),
        window.innerWidth - cardWidth - viewportMargin,
      );
    }

    let top = rect.top;
    if (!canUseRight && !canUseLeft) {
      const belowTop = rect.bottom + gap;
      const aboveTop = rect.top - cardHeight - gap;
      if (belowTop + cardHeight <= window.innerHeight - viewportMargin) {
        top = belowTop;
      } else if (aboveTop >= viewportMargin) {
        top = aboveTop;
      }
    }

    top = Math.min(
      Math.max(top, viewportMargin),
      Math.max(viewportMargin, window.innerHeight - cardHeight - viewportMargin),
    );
    card.style.left = `${left}px`;
    card.style.top = `${top}px`;
  });
}

function repositionCurrentWalkthroughCard() {
  const step = WALKTHROUGH_TOUR_STEPS[state.walkthroughTourIndex];
  const target = step ? document.querySelector(step.target) : null;
  positionWalkthroughCard(target);
}

function setWalkthroughTourStep(index) {
  const maxIndex = state.walkthroughCompleted
    ? WALKTHROUGH_TOUR_STEPS.length - 1
    : state.walkthroughUnlockedTourIndex;
  const boundedIndex = Math.max(0, Math.min(index, maxIndex));
  state.walkthroughTourIndex = boundedIndex;
  const step = WALKTHROUGH_TOUR_STEPS[boundedIndex];

  document
    .querySelectorAll(".walkthrough-focus")
    .forEach((element) => element.classList.remove("walkthrough-focus"));

  const target = document.querySelector(step.target);
  target?.classList.add("walkthrough-focus");
  target?.scrollIntoView({ behavior: "auto", block: "center", inline: "nearest" });

  els.walkthroughTourCount.textContent = `Step ${boundedIndex + 1} of ${WALKTHROUGH_TOUR_STEPS.length}`;
  els.walkthroughTourTitle.textContent = step.title;
  els.walkthroughTourText.textContent = step.text;
  refreshWalkthroughGuideButtons();
  positionWalkthroughCard(target);
}

function completeWalkthroughTour() {
  state.walkthroughCompleted = true;
  state.walkthroughUnlockedTourIndex = WALKTHROUGH_TOUR_STEPS.length - 1;
  setWalkthroughTourStep(WALKTHROUGH_TOUR_STEPS.length - 1);
  els.walkthroughTogglePlayback.disabled = true;
}

function advanceWalkthroughGuide() {
  if (state.walkthroughActionInProgress || state.walkthroughReviewPending) {
    return;
  }

  if (
    state.walkthroughCompleted
    && state.walkthroughTourIndex === WALKTHROUGH_TOUR_STEPS.length - 1
  ) {
    clearWalkthroughTimer();
    startTask(0, "formal");
    return;
  }

  if (state.walkthroughTourIndex === 0) {
    if (state.walkthroughUnlockedTourIndex >= 1) {
      setWalkthroughTourStep(1);
    } else {
      unlockWalkthroughTourStep(1);
    }
    return;
  }

  if (state.walkthroughTourIndex === 1) {
    if (state.walkthroughUnlockedTourIndex >= 2) {
      setWalkthroughTourStep(2);
    } else {
      runWalkthroughPreStepsUntil("calendar", 2);
    }
    return;
  }

  if (state.walkthroughTourIndex === 2) {
    if (state.walkthroughUnlockedTourIndex >= 3) {
      setWalkthroughTourStep(3);
    } else {
      runWalkthroughPreStepsUntil("decision", 3);
    }
    return;
  }

  if (state.walkthroughTourIndex === 3) {
    if (state.walkthroughUnlockedTourIndex >= 4) {
      setWalkthroughTourStep(4);
    } else {
      showWalkthroughAdviceComposer();
      unlockWalkthroughTourStep(4);
    }
    return;
  }

  if (state.walkthroughTourIndex === 4 && state.walkthroughUnlockedTourIndex >= 5) {
    setWalkthroughTourStep(5);
    return;
  }

  if (state.walkthroughTourIndex === 5) {
    if (state.walkthroughUnlockedTourIndex >= 6) {
      setWalkthroughTourStep(6);
    } else {
      playWalkthroughPostSteps();
    }
  }
}

function showWalkthroughAdviceComposer() {
  els.walkthroughWaitingCard.classList.add("hidden");
  els.walkthroughAdviceBox.classList.remove("hidden");
  setWalkthroughRunStatus("Waiting", true);
  els.walkthroughCurrentStepLabel.textContent = "Choose a practice recommendation, then press Send.";
}

function startWalkthroughRun() {
  state.walkthroughPlaying = true;
  state.walkthroughActionInProgress = true;
  refreshWalkthroughGuideButtons();
  setWalkthroughRunStatus("Running", false);
  els.walkthroughTogglePlayback.textContent = "Pause";
  els.walkthroughTogglePlayback.disabled = true;
}

function stopWalkthroughRun(statusLabel = "Paused") {
  state.walkthroughPlaying = false;
  state.walkthroughActionInProgress = false;
  setWalkthroughRunStatus(statusLabel, true);
  els.walkthroughTogglePlayback.textContent = "Resume";
  els.walkthroughTogglePlayback.disabled = true;
  refreshWalkthroughGuideButtons();
}

function runWalkthroughPreStepsUntil(targetName, tourIndexOnStop) {
  const steps = walkthroughTask.trajectory.pre_intervention_steps;
  startWalkthroughRun();

  function next() {
    if (!state.walkthroughPlaying) {
      return;
    }

    if (state.walkthroughStepIndex >= steps.length) {
      stopWalkthroughRun("Paused");
      unlockWalkthroughTourStep(tourIndexOnStop);
      return;
    }

    const step = steps[state.walkthroughStepIndex];
    const target = getWalkthroughTourTargetForStep(step);
    appendWalkthroughStep(step, target);
    state.walkthroughStepIndex += 1;
    els.walkthroughCurrentStepLabel.textContent =
      `${Math.min(state.walkthroughStepIndex, steps.length)} / ${steps.length} practice pre-steps`;

    if (target === targetName) {
      if (targetName === "decision") {
        state.walkthroughAwaitingAdvice = true;
        els.walkthroughWaitingCard.classList.remove("hidden");
        els.walkthroughAdviceBox.classList.add("hidden");
        setWalkthroughRunStatus("Waiting", true);
      }
      stopWalkthroughRun(targetName === "decision" ? "Waiting" : "Paused");
      unlockWalkthroughTourStep(tourIndexOnStop);
      return;
    }

    state.walkthroughTimer = window.setTimeout(next, studyDelay(STEP_DELAY_MS));
  }

  next();
}

function evaluateWalkthroughAdvice(task, advice) {
  const agent = task.agent_decision;
  const differsFromAgent = !sameSlot(advice, agent);
  const participantCorrect = isCorrectSlot(task, advice);
  const agentCorrect = isCorrectSlot(task, agent);
  const sameChoice = !differsFromAgent;
  const accepted = sameChoice || (participantCorrect && !agentCorrect);
  const conflicts = findConflicts(task, advice.day, advice.start, advice.end);
  return {
    accepted,
    conflicts,
    participantCorrect,
    agentCorrect,
    differsFromAgent,
    sameChoice,
    message: sameChoice
      ? "Because your choice matches the agent's choice, the agent keeps the schedule and continues."
      : accepted
      ? "For this practice example, the agent follows your recommendation and continues with that schedule."
      : "For this practice example, the agent keeps its initial schedule rather than using your recommendation.",
  };
}

function onWalkthroughAdviceSubmit(event) {
  event.preventDefault();
  if (!state.walkthroughAwaitingAdvice) {
    return;
  }

  clearWalkthroughTimer();
  const start = els.walkthroughAdviceStart.value;
  const end = minutesToTime(timeToMinutes(start) + walkthroughTask.duration_minutes);
  const advice = {
    day: els.walkthroughAdviceDay.value,
    start,
    end,
    label: `${els.walkthroughAdviceDay.value}, ${start} - ${end}`,
  };
  const agent = walkthroughTask.agent_decision;
  const evaluation = evaluateWalkthroughAdvice(walkthroughTask, advice);

  state.walkthroughAwaitingAdvice = false;
  state.walkthroughSelectedSlot = evaluation.accepted ? advice : agent;
  state.walkthroughActionInProgress = true;
  state.walkthroughReviewPending = true;
  els.walkthroughAdviceBox.classList.add("hidden");
  els.walkthroughWaitingCard.classList.remove("hidden");
  setWalkthroughRunStatus("Reviewing", false);
  els.walkthroughCurrentStepLabel.textContent = "The agent is comparing its initial choice with your recommendation.";
  els.walkthroughTogglePlayback.disabled = true;

  appendWalkthroughDynamicStep(
    "human",
    "Your practice recommendation received",
    `
      <div class="text-block">
        <p>You recommended <strong>${escapeHtml(advice.label)}</strong>.</p>
      </div>
    `,
  );
  appendWalkthroughDynamicStep(
    "thinking",
    "Agent initial judgment revealed",
    `<div class="text-block"><p>Before reading your recommendation, the agent had selected <strong>${escapeHtml(agent.label)}</strong>.</p></div>`,
  );

  renderWalkthroughInlineReview(advice, evaluation, true);
  unlockWalkthroughTourStep(5);
  state.walkthroughTimer = window.setTimeout(
    () => finishWalkthroughReview(advice, evaluation),
    studyDelay(REVIEW_DELAY_MS),
  );
}

function finishWalkthroughReview(advice, evaluation) {
  state.walkthroughTimer = null;
  renderWalkthroughInlineReview(advice, evaluation, false);
  appendWalkthroughDynamicStep(
    evaluation.differsFromAgent
      ? (evaluation.accepted ? "accept" : "reject")
      : "thinking",
    evaluation.differsFromAgent
      ? (evaluation.accepted ? "Your recommendation used" : "Agent kept its initial choice")
      : "Judgments aligned",
    `<div class="text-block"><p>${escapeHtml(evaluation.message)}</p></div>`,
  );
  state.walkthroughActionInProgress = false;
  state.walkthroughReviewPending = false;
  setWalkthroughRunStatus("Paused", true);
  els.walkthroughCurrentStepLabel.textContent = "Review complete. Use Next to continue to room booking and verification.";
  refreshWalkthroughGuideButtons();
  setWalkthroughTourStep(5);
}

function playWalkthroughPostSteps() {
  if (!state.walkthroughPostStepsStarted) {
    state.walkthroughPostStepsStarted = true;
    startWalkthroughRun();
  }

  const steps = walkthroughTask.trajectory.post_intervention_steps;
  if (!state.walkthroughPlaying) {
    return;
  }
  if (state.walkthroughPostStepIndex >= steps.length) {
    state.walkthroughPlaying = false;
    state.walkthroughCompleted = true;
    setWalkthroughRunStatus("Complete", true);
    els.walkthroughCurrentStepLabel.textContent = "Practice complete. You can now begin the formal tasks.";
    completeWalkthroughTour();
    return;
  }

  const rendered = deepReplace(steps[state.walkthroughPostStepIndex], state.walkthroughSelectedSlot);
  const target = getWalkthroughTourTargetForStep(rendered);
  appendWalkthroughStep(rendered, target);
  state.walkthroughPostStepIndex += 1;
  if (target === "result") {
    state.walkthroughPlaying = false;
    state.walkthroughActionInProgress = false;
    setWalkthroughRunStatus("Complete", true);
    els.walkthroughCurrentStepLabel.textContent = "Practice complete. You can now begin the formal tasks.";
    completeWalkthroughTour();
    return;
  }
  state.walkthroughTimer = window.setTimeout(playWalkthroughPostSteps, studyDelay(POST_STEP_DELAY_MS));
}

function playPreStep() {
  const task = currentTask();
  const steps = task.trajectory.pre_intervention_steps;
  if (!state.playing || state.awaitingAdvice || state.stepIndex >= steps.length) {
    return;
  }

  const step = steps[state.stepIndex];
  appendStep(step);
  state.stepIndex += 1;
  els.currentStepLabel.textContent = `${Math.min(state.stepIndex, steps.length)} / ${steps.length} steps`;

  if (step.type === "decision") {
    state.playing = false;
    state.awaitingAdvice = true;
    setRunStatus("Waiting", true);
    els.togglePlayback.textContent = "Resume";
    els.currentStepLabel.textContent = state.taskPhase === "behavioral"
      ? "Choose a recommendation or let the agent decide."
      : "Choose your recommendation, then press Send.";
    els.waitingCard.classList.add("hidden");
    els.adviceBox.classList.remove("hidden");
    resetAppShellScroll();
    return;
  }

  state.timer = window.setTimeout(playPreStep, studyDelay(STEP_DELAY_MS));
}

function playPostSteps() {
  if (state.postStepsStarted) {
    return;
  }
  state.postStepsStarted = true;
  state.playing = true;
  setRunStatus("Running", false);
  els.togglePlayback.textContent = "Pause";

  const task = currentTask();
  const steps = task.trajectory.post_intervention_steps;
  let index = 0;

  function next() {
    if (!state.playing) {
      state.timer = window.setTimeout(next, studyDelay(POST_STEP_DELAY_MS));
      return;
    }
    if (index >= steps.length) {
      state.playing = false;
      setRunStatus("Complete", true);
      els.togglePlayback.textContent = "Resume";
      els.nextTask.textContent = getNextTaskButtonLabel();
      els.nextArea.classList.remove("hidden");
      saveProgress();
      return;
    }
    const rendered = deepReplace(steps[index], state.selectedSlot);
    appendStep(rendered);
    index += 1;
    state.timer = window.setTimeout(next, studyDelay(POST_STEP_DELAY_MS));
  }

  state.timer = window.setTimeout(next, studyDelay(POST_STEP_DELAY_MS));
}

function getNextTaskButtonLabel() {
  const taskList = activeTasks();
  const isLastTask = state.taskIndex >= taskList.length - 1;
  if (!isLastTask) {
    return "Next task";
  }
  return state.taskPhase === "formal"
    ? "Continue to questionnaire"
    : "Finish study";
}

function buildAssistantStepHtml(step, task = currentTask(), selectedSlot = state.selectedSlot, targetName = "") {
  const targetAttribute = targetName ? ` data-tour-target="${escapeHtml(targetName)}"` : "";
  return `
    <article class="assistant-row ${escapeHtml(step.type || "")}"${targetAttribute}>
    <div class="meta-row">
      <button class="tool-toggle" type="button" aria-label="Expand step">
        <span>${iconForStep(step.type)}</span>
      </button>
      <div class="meta-text">
        <span class="tool-title">${escapeHtml(titleForStep(step))}</span>
        <span class="tool-kind">${escapeHtml(labelForStep(step.type))}</span>
      </div>
    </div>
      <div class="expanded-block">${renderStepBody(step, task, selectedSlot)}</div>
    </article>
  `;
}

function appendStep(step) {
  els.transcript.insertAdjacentHTML("beforeend", buildAssistantStepHtml(step));
  els.transcript.scrollTop = els.transcript.scrollHeight;
}

function appendWalkthroughStep(step, targetName = "") {
  els.walkthroughTranscript.insertAdjacentHTML(
    "beforeend",
    buildAssistantStepHtml(
      step,
      walkthroughTask,
      state.walkthroughSelectedSlot || walkthroughTask.agent_decision,
      targetName,
    ),
  );
  els.walkthroughTranscript.scrollTop = els.walkthroughTranscript.scrollHeight;
}

function buildDynamicStepHtml(type, title, html, targetName = "") {
  const targetAttribute = targetName ? ` data-tour-target="${escapeHtml(targetName)}"` : "";
  return `
    <article class="assistant-row ${escapeHtml(type)}"${targetAttribute}>
      <div class="meta-row">
        <button class="tool-toggle" type="button" aria-label="Expand step">
          <span>${iconForStep(type)}</span>
        </button>
        <div class="meta-text">
          <span class="tool-title">${escapeHtml(title)}</span>
          <span class="tool-kind">${escapeHtml(labelForStep(type))}</span>
        </div>
      </div>
      <div class="expanded-block">${html}</div>
    </article>
  `;
}

function appendDynamicStep(type, title, html, targetName = "") {
  els.transcript.insertAdjacentHTML(
    "beforeend",
    buildDynamicStepHtml(type, title, html, targetName),
  );
  els.transcript.scrollTop = els.transcript.scrollHeight;
}

function appendWalkthroughDynamicStep(type, title, html, targetName = "") {
  els.walkthroughTranscript.insertAdjacentHTML(
    "beforeend",
    buildDynamicStepHtml(type, title, html, targetName),
  );
  els.walkthroughTranscript.scrollTop = els.walkthroughTranscript.scrollHeight;
}

function renderStepBody(step, task = currentTask(), selectedSlot = state.selectedSlot) {
  if (step.type === "tool_call") {
    return renderToolCall(step, task);
  }
  if (step.type === "tool_result") {
    return renderToolResult(step, task, selectedSlot);
  }
  if (step.type === "action") {
    return renderAction(step, task, selectedSlot);
  }
  if (step.type === "final_result") {
    return renderFinalResult(step, task, selectedSlot);
  }
  if (step.type === "decision") {
    const guidance = state.taskPhase === "behavioral"
      ? "You may recommend a time or let the agent decide on its own."
      : "The agent has not revealed a chosen time. Use the composer below to give independent advice.";
    return `
      <div class="text-block">
        <p>${escapeHtml(step.content)}</p>
        <p class="muted-line">${escapeHtml(guidance)}</p>
      </div>
    `;
  }
  return `<div class="text-block"><p>${escapeHtml(step.content || "Step complete.")}</p></div>`;
}

function renderToolCall(step, task = currentTask()) {
  const input = step.input || {};
  let line = `Running ${step.tool || "tool"}.`;

  if (step.tool === "calendar.get_attendees") {
    line = "Resolve the attendee list from the scheduling prompt.";
  } else if (step.tool === "calendar.get_availability") {
    line = `Read availability for ${joinHuman(input.attendees || [])} across ${joinHuman(input.days || [])}.`;
  } else if (step.tool === "calendar.find_open_slots") {
    line = `Scan for ${input.duration_minutes || task.duration_minutes}-minute windows that satisfy attendee calendars.`;
  } else if (step.tool === "rooms.search") {
    line = `Find a room for ${input.day}, ${input.start} - ${input.end}.`;
  } else if (step.tool === "calendar.verify_event") {
    line = "Verify the selected event before finalizing invites.";
  }

  return `
    <div class="code-card">
      <div class="code-label">Command</div>
      <code>${escapeHtml(step.tool || "tool.run")}</code>
    </div>
    <p class="tool-caption">${escapeHtml(line)}</p>
  `;
}

function renderToolResult(step, task = currentTask(), selectedSlot = state.selectedSlot) {
  const output = step.output || {};

  if (Array.isArray(output.busy_windows)) {
    return renderBusySchedulesAndConstraints(output.busy_windows, task);
  }
  if (Array.isArray(output.candidate_slots)) {
    return renderCandidateSummary(output.candidate_slots, output.candidate_count);
  }
  if (Array.isArray(output.attendees)) {
    return `
      <div class="text-block">
        <p>Attendees resolved: ${escapeHtml(joinHuman(output.attendees))}.</p>
        <div class="inline-pills">
          ${output.attendees.map((name) => `<span>${escapeHtml(name)}</span>`).join("")}
        </div>
      </div>
    `;
  }
  if (output.room) {
    return renderRoom(output.room);
  }
  if (output.status) {
    return renderVerification(output, task, selectedSlot);
  }

  return `<div class="text-block"><p>Tool returned successfully. The agent keeps the raw details in working memory.</p></div>`;
}

function renderBusySchedulesAndConstraints(rows, task = currentTask()) {
  const constraint = task.constraints_note || "No extra scheduling constraint beyond finding a conflict-free time.";
  return `
    <div class="availability-panel">
      <div class="availability-heading">
        <span>Calendar data</span>
        <strong>Busy times and task constraints</strong>
      </div>
      <div class="constraint-note">
        <span>Task constraint</span>
        <strong>${escapeHtml(constraint)}</strong>
      </div>
      <p>Use the attendee busy times and task constraint to decide which meeting time is feasible.</p>
      <div class="availability-stack">
        ${rows.map(renderPersonBusySchedule).join("")}
      </div>
    </div>
  `;
}

function renderPersonBusySchedule(row) {
  return `
    <details class="availability-person" open>
      <summary>
        <span>${escapeHtml(row.person)}</span>
        <span>${escapeHtml(["Monday", "Tuesday", "Wednesday"].map((day) => `${day.slice(0, 3)} ${row[`${day}_busy_count`] ?? 0} busy`).join(" | "))}</span>
      </summary>
      <div class="busy-window-list">
        ${["Monday", "Tuesday", "Wednesday"].map((day) => renderDayBusyWindows(day, row[day])).join("")}
      </div>
    </details>
  `;
}

function renderDayBusyWindows(day, busyText) {
  const text = busyText && busyText !== "open" ? busyText : "No busy time";
  return `
    <div class="busy-window-row">
      <span>${escapeHtml(day)}</span>
      <code>${escapeHtml(text)}</code>
    </div>
  `;
}

function renderCandidateSummary(slots, candidateCount) {
  return `
    <div class="text-block">
      <p>The slot scanner found viable windows and kept the compact ranking in working memory.</p>
      <p class="muted-line">The agent's preferred slot remains hidden until you submit advice.</p>
    </div>
  `;
}

function renderRoom(room) {
  return `
    <div class="code-card">
      <div class="code-label">Result</div>
      <p><strong>${escapeHtml(room.name)}</strong></p>
      <p>${escapeHtml(room.location)} | capacity ${escapeHtml(room.capacity)}</p>
      <p>${escapeHtml((room.amenities || []).join(", "))}</p>
    </div>
  `;
}

function renderVerification(output, task = currentTask(), selectedSlot = state.selectedSlot) {
  const slot = selectedSlot || task.agent_decision;
  const conflicts = findConflicts(task, slot.day, slot.start, slot.end);
  const conflictCount = conflicts.length;
  return `
    <div class="text-block">
      <p>Runtime verification completed for the adopted schedule.</p>
      <p class="muted-line">${escapeHtml(conflictCount)} attendee conflict signal${conflictCount === 1 ? "" : "s"} recorded. The final result will summarize the scheduling outcome.</p>
    </div>
  `;
}

function renderAction(step, task = currentTask(), selectedSlot = state.selectedSlot) {
  const event = step.event || {};
  const attendees = event.attendees || task.participants;
  const slot = selectedSlot || task.agent_decision;
  return `
    <div class="text-block">
      <p>${escapeHtml(step.content || "Creating the calendar event.")}</p>
      <div class="code-card">
        <div class="code-label">Event</div>
        <p><strong>${escapeHtml(event.title || "Calendar event")}</strong></p>
        <p>${escapeHtml(event.day || slot.day)}, ${escapeHtml(event.start || slot.start)} - ${escapeHtml(event.end || slot.end)}</p>
        <p>${escapeHtml(joinHuman(attendees))}</p>
      </div>
    </div>
  `;
}

function renderFinalResult(step, task = currentTask(), selectedSlot = state.selectedSlot) {
  const slot = selectedSlot || task.agent_decision;
  const conflicts = findConflicts(task, slot.day, slot.start, slot.end);
  const matchesGolden = isCorrectSlot(task, slot);
  const success = conflicts.length === 0 && matchesGolden;
  const statusLabel = success ? "Schedule successful" : "Schedule failed";
  const detail = success
    ? `Scheduled ${slot.day}, ${slot.start} - ${slot.end}. Everyone is available at this time.`
    : getFailureReason(task, slot, conflicts);
  return `
    <div class="result-panel ${success ? "success" : "conflict"}">
      <div class="result-kicker">Scheduling result</div>
      <p><strong>${escapeHtml(statusLabel)}</strong></p>
      <p>${escapeHtml(detail)}</p>
    </div>
  `;
}

function iconForStep(type) {
  const icons = {
    thinking: "*",
    tool_call: ">",
    tool_result: "ok",
    decision: "?",
    human: "in",
    accept: "ok",
    reject: "x",
    action: "->",
    final_result: "[]",
  };
  return icons[type] || ".";
}

function labelForStep(type) {
  const labels = {
    thinking: "assistant",
    tool_call: "tool",
    tool_result: "result",
    decision: "question",
    human: "user",
    accept: "review",
    reject: "review",
    action: "action",
    final_result: "result",
  };
  return labels[type] || "message";
}

function titleForStep(step) {
  if (step.type === "tool_call") {
    return step.title || step.tool || "Tool call";
  }
  if (step.type === "tool_result") {
    return step.title || "Tool result";
  }
  return step.title || labelForStep(step.type);
}

function sameSlot(left, right) {
  return Boolean(left && right)
    && left.day === right.day
    && left.start === right.start
    && left.end === right.end;
}

function isCorrectSlot(task, slot) {
  return sameSlot(slot, task.golden_decision);
}

function getFailureReason(task, slot, conflicts) {
  if (conflicts.length > 0) {
    const people = conflicts
      .map((item) => `${item.person} is busy during ${item.busy}`)
      .join("; ");
    return `Scheduled ${slot.day}, ${slot.start} - ${slot.end}, but it conflicts with attendee availability: ${people}.`;
  }

  const note = task.constraints_note || "the stated scheduling constraints";
  return `Scheduled ${slot.day}, ${slot.start} - ${slot.end}. Everyone appears available, but this time does not satisfy the task preference: ${note}`;
}

function getTrustCaseType(sameChoice, participantCorrect, agentCorrect, bothWrongDifferent) {
  if (sameChoice) {
    return "agreement";
  }
  if (participantCorrect && !agentCorrect) {
    return "participant_correct_agent_wrong";
  }
  if (!participantCorrect && agentCorrect) {
    return "participant_wrong_agent_correct";
  }
  if (bothWrongDifferent) {
    return "both_wrong_different";
  }
  return "unexpected_case";
}

function getTrustConsoleCaseType(sameChoice, participantCorrect, agentCorrect, bothWrongDifferent) {
  if (sameChoice && participantCorrect && agentCorrect) {
    return "participant_correct_agent_correct";
  }
  if (sameChoice && !participantCorrect && !agentCorrect) {
    return "same_choice_both_wrong";
  }
  if (participantCorrect && !agentCorrect) {
    return "participant_correct_agent_wrong";
  }
  if (!participantCorrect && agentCorrect) {
    return "participant_wrong_agent_correct";
  }
  if (bothWrongDifferent) {
    return "different_choice_both_wrong";
  }
  return "unexpected_case";
}

function getOverallTrustAdoptionRate() {
  const total = state.trustStats.totalDecisions;
  return total === 0 ? 0 : state.trustStats.acceptedCount / total;
}

function getTrustCaseAdoptionRate(caseType) {
  const stats = state.trustStats.caseStats[caseType];
  return !stats || stats.total === 0 ? 0 : stats.accepted / stats.total;
}

function decideTrustAcceptance(participantCorrect, agentCorrect, sameChoice, bothWrongDifferent) {
  const condition = state.condition || "appropriate-trust";
  const caseType = getTrustCaseType(
    sameChoice,
    participantCorrect,
    agentCorrect,
    bothWrongDifferent,
  );
  const consoleCaseType = getTrustConsoleCaseType(
    sameChoice,
    participantCorrect,
    agentCorrect,
    bothWrongDifferent,
  );
  const currentAdoptionRate = getOverallTrustAdoptionRate();
  const currentCaseAdoptionRate = getTrustCaseAdoptionRate(caseType);

  let decision;
  if (sameChoice) {
    decision = { accepted: true, reasonCode: "same_choice_accept" };
  } else if (condition === "over-trust") {
    decision = decideOverTrusting(participantCorrect, agentCorrect, bothWrongDifferent, currentCaseAdoptionRate);
  } else if (condition === "under-trust") {
    decision = decideUnderTrusting(participantCorrect, agentCorrect, bothWrongDifferent, currentCaseAdoptionRate);
  } else if (condition === "appropriate-trust") {
    decision = decideAppropriateTrusting(participantCorrect, agentCorrect, bothWrongDifferent, currentCaseAdoptionRate);
  } else {
    throw new Error(`Unknown trust condition: ${condition}`);
  }

  return {
    ...decision,
    participantCorrect,
    agentCorrect,
    sameChoice,
    bothWrongDifferent,
    caseType,
    consoleCaseType,
    currentAdoptionRateBeforeDecision: currentAdoptionRate,
    currentCaseAdoptionRateBeforeDecision: currentCaseAdoptionRate,
  };
}

function decideOverTrusting(participantCorrect, agentCorrect, bothWrongDifferent, currentCaseAdoptionRate) {
  if (participantCorrect && !agentCorrect) {
    return { accepted: true, reasonCode: "over_participant_correct_agent_wrong_always_accept" };
  }
  if (!participantCorrect && agentCorrect) {
    if (state.trustStats.participantWrongAgentCorrectCount < 2) {
      return { accepted: true, reasonCode: "over_participant_wrong_agent_correct_first_two_accept" };
    }
    if (currentCaseAdoptionRate <= TRUST_CONFIG.overTrustingMaxAdoptionRate) {
      return { accepted: true, reasonCode: "over_participant_wrong_agent_correct_case_rate_control_accept" };
    }
    return { accepted: false, reasonCode: "over_participant_wrong_agent_correct_case_rate_control_reject" };
  }
  if (bothWrongDifferent) {
    if (state.trustStats.bothWrongDifferentCount < 2) {
      return { accepted: true, reasonCode: "over_both_wrong_different_first_two_accept" };
    }
    if (currentCaseAdoptionRate <= TRUST_CONFIG.overTrustingMaxAdoptionRate) {
      return { accepted: true, reasonCode: "over_both_wrong_different_case_rate_control_accept" };
    }
    return { accepted: false, reasonCode: "over_both_wrong_different_case_rate_control_reject" };
  }
  if (currentCaseAdoptionRate <= TRUST_CONFIG.overTrustingMaxAdoptionRate) {
    return { accepted: true, reasonCode: "over_fallback_case_rate_control_accept" };
  }
  return { accepted: false, reasonCode: "over_fallback_case_rate_control_reject" };
}

function decideUnderTrusting(participantCorrect, agentCorrect, bothWrongDifferent, currentCaseAdoptionRate) {
  if (!participantCorrect && agentCorrect) {
    return { accepted: false, reasonCode: "under_participant_wrong_agent_correct_always_reject" };
  }
  if (participantCorrect && !agentCorrect) {
    if (state.trustStats.participantCorrectAgentWrongCount < 2) {
      return { accepted: false, reasonCode: "under_participant_correct_agent_wrong_first_two_reject" };
    }
    if (currentCaseAdoptionRate >= TRUST_CONFIG.underTrustingMinAdoptionRate) {
      return { accepted: false, reasonCode: "under_participant_correct_agent_wrong_case_rate_control_reject" };
    }
    return { accepted: true, reasonCode: "under_participant_correct_agent_wrong_case_rate_control_accept" };
  }
  if (bothWrongDifferent) {
    if (state.trustStats.bothWrongDifferentCount < 2) {
      return { accepted: false, reasonCode: "under_both_wrong_different_first_two_reject" };
    }
    if (currentCaseAdoptionRate < TRUST_CONFIG.underTrustingMinAdoptionRate) {
      return { accepted: true, reasonCode: "under_both_wrong_different_case_rate_control_accept" };
    }
    return { accepted: false, reasonCode: "under_both_wrong_different_case_rate_control_reject" };
  }
  if (currentCaseAdoptionRate < TRUST_CONFIG.underTrustingMinAdoptionRate) {
    return { accepted: true, reasonCode: "under_fallback_case_rate_control_accept" };
  }
  return { accepted: false, reasonCode: "under_fallback_case_rate_control_reject" };
}

function decideAppropriateTrusting(participantCorrect, agentCorrect, bothWrongDifferent, currentCaseAdoptionRate) {
  if (!participantCorrect && agentCorrect) {
    if (state.trustStats.participantWrongAgentCorrectCount < 2) {
      return { accepted: false, reasonCode: "appropriate_participant_wrong_agent_correct_first_two_reject" };
    }
    if (currentCaseAdoptionRate >= TRUST_CONFIG.appropriateMinAdoptionRate) {
      return { accepted: false, reasonCode: "appropriate_participant_wrong_agent_correct_case_low_bound_reject" };
    }
    return { accepted: true, reasonCode: "appropriate_participant_wrong_agent_correct_case_low_bound_accept" };
  }
  if (participantCorrect && !agentCorrect) {
    if (state.trustStats.participantCorrectAgentWrongCount < 2) {
      return { accepted: true, reasonCode: "appropriate_participant_correct_agent_wrong_first_two_accept" };
    }
    if (currentCaseAdoptionRate <= TRUST_CONFIG.appropriateMaxAdoptionRate) {
      return { accepted: true, reasonCode: "appropriate_participant_correct_agent_wrong_case_high_bound_accept" };
    }
    return { accepted: false, reasonCode: "appropriate_participant_correct_agent_wrong_case_high_bound_reject" };
  }
  if (bothWrongDifferent) {
    if (currentCaseAdoptionRate < TRUST_CONFIG.appropriateNeutralAdoptionRate) {
      return { accepted: true, reasonCode: "appropriate_both_wrong_different_case_neutral_accept" };
    }
    return { accepted: false, reasonCode: "appropriate_both_wrong_different_case_neutral_reject" };
  }
  if (currentCaseAdoptionRate < TRUST_CONFIG.appropriateMinAdoptionRate) {
    return { accepted: true, reasonCode: "appropriate_fallback_case_low_bound_accept" };
  }
  if (currentCaseAdoptionRate > TRUST_CONFIG.appropriateMaxAdoptionRate) {
    return { accepted: false, reasonCode: "appropriate_fallback_case_high_bound_reject" };
  }
  return { accepted: false, reasonCode: "appropriate_fallback_case_reject" };
}

function updateTrustStats(decision) {
  state.trustStats.totalDecisions += 1;
  if (decision.accepted) {
    state.trustStats.acceptedCount += 1;
  }
  if (decision.participantCorrect && !decision.agentCorrect) {
    state.trustStats.participantCorrectAgentWrongCount += 1;
  }
  if (!decision.participantCorrect && decision.agentCorrect) {
    state.trustStats.participantWrongAgentCorrectCount += 1;
  }
  if (decision.bothWrongDifferent) {
    state.trustStats.bothWrongDifferentCount += 1;
  }

  const caseStats = state.trustStats.caseStats[decision.caseType];
  if (caseStats) {
    caseStats.total += 1;
    if (decision.accepted) {
      caseStats.accepted += 1;
    }
  } else {
    console.warn("[calendar-study trust] Unexpected case type", decision.caseType, decision);
  }

  const consoleCaseStats = state.trustStats.consoleCaseStats[decision.consoleCaseType];
  if (consoleCaseStats) {
    consoleCaseStats.total += 1;
    if (decision.accepted) {
      consoleCaseStats.accepted += 1;
    }
  } else {
    console.warn("[calendar-study trust] Unexpected console case type", decision.consoleCaseType, decision);
  }
}

function formatRate(stats) {
  return stats.total ? `${((stats.accepted / stats.total) * 100).toFixed(1)}%` : "N/A";
}

function logTrustCaseStats(decision) {
  const stats = state.trustStats.consoleCaseStats;
  const overallRate = (getOverallTrustAdoptionRate() * 100).toFixed(1);
  console.groupCollapsed(
    `[Calendar Trust Stats] Task ${state.taskIndex + 1} | Condition: ${state.condition} | ` +
      `Overall adoption: ${state.trustStats.acceptedCount}/${state.trustStats.totalDecisions} (${overallRate}%)`,
  );
  console.table({
    participant_correct_agent_correct: {
      description: "Participant correct, agent correct",
      total: stats.participant_correct_agent_correct.total,
      accepted: stats.participant_correct_agent_correct.accepted,
      adoptionRate: formatRate(stats.participant_correct_agent_correct),
    },
    same_choice_both_wrong: {
      description: "Same choice, both wrong",
      total: stats.same_choice_both_wrong.total,
      accepted: stats.same_choice_both_wrong.accepted,
      adoptionRate: formatRate(stats.same_choice_both_wrong),
    },
    participant_correct_agent_wrong: {
      description: "Participant correct, agent wrong",
      total: stats.participant_correct_agent_wrong.total,
      accepted: stats.participant_correct_agent_wrong.accepted,
      adoptionRate: formatRate(stats.participant_correct_agent_wrong),
    },
    participant_wrong_agent_correct: {
      description: "Participant wrong, agent correct",
      total: stats.participant_wrong_agent_correct.total,
      accepted: stats.participant_wrong_agent_correct.accepted,
      adoptionRate: formatRate(stats.participant_wrong_agent_correct),
    },
    different_choice_both_wrong: {
      description: "Different choices, both wrong",
      total: stats.different_choice_both_wrong.total,
      accepted: stats.different_choice_both_wrong.accepted,
      adoptionRate: formatRate(stats.different_choice_both_wrong),
    },
  });
  console.info("[Calendar Trust Decision]", {
    taskId: currentTask().id,
    condition: state.condition,
    accepted: decision.accepted,
    reasonCode: decision.reasonCode,
    caseType: decision.caseType,
    consoleCaseType: decision.consoleCaseType,
    participantCorrect: decision.participantCorrect,
    agentCorrect: decision.agentCorrect,
    sameChoice: decision.sameChoice,
    bothWrongDifferent: decision.bothWrongDifferent,
    currentAdoptionRateBeforeDecision: decision.currentAdoptionRateBeforeDecision,
    currentCaseAdoptionRateBeforeDecision: decision.currentCaseAdoptionRateBeforeDecision,
    adoptionRateAfterDecision: getOverallTrustAdoptionRate(),
    caseAdoptionRateAfterDecision: getTrustCaseAdoptionRate(decision.caseType),
  });
  console.groupEnd();
}

function onAdviceSubmit(event) {
  event.preventDefault();
  if (state.taskPhase === "behavioral") {
    onBehaviorRecommendationSubmit();
    return;
  }
  if (!state.awaitingAdvice) {
    return;
  }

  const task = currentTask();
  const start = els.adviceStart.value;
  const end = minutesToTime(timeToMinutes(start) + task.duration_minutes);
  const advice = {
    day: els.adviceDay.value,
    start,
    end,
    label: `${els.adviceDay.value}, ${start} - ${end}`,
  };

  state.awaitingAdvice = false;
  els.adviceBox.classList.add("hidden");
  appendDynamicStep(
    "human",
    "Your recommendation received",
    `
      <div class="text-block">
        <p>You recommended <strong>${escapeHtml(advice.label)}</strong>.</p>
      </div>
    `,
  );

  const agent = task.agent_decision;
  appendDynamicStep(
    "thinking",
    "Agent initial judgment revealed",
    `<div class="text-block"><p>Before reading your recommendation, the agent had selected <strong>${escapeHtml(agent.label)}</strong>.</p></div>`,
  );

  const evaluation = evaluateAdvice(task, advice);
  state.selectedSlot = evaluation.accepted ? advice : agent;
  state.playing = true;
  setRunStatus("Reviewing", false);
  els.togglePlayback.textContent = "Pause";
  renderAgentReview(task, advice, evaluation, true);
  state.timer = window.setTimeout(() => finishAgentReview(task, advice, evaluation), studyDelay(REVIEW_DELAY_MS));
}

function finishAgentReview(task, advice, evaluation) {
  const agent = task.agent_decision;
  state.timer = null;
  renderAgentReview(task, advice, evaluation, false);
  const reviewStepType = evaluation.differsFromAgent
    ? (evaluation.accepted ? "accept" : "reject")
    : "thinking";
  const reviewStepTitle = evaluation.differsFromAgent
    ? (evaluation.accepted ? "Your recommendation used" : "Agent kept its initial choice")
    : "Judgments aligned";
  appendDynamicStep(
    reviewStepType,
    reviewStepTitle,
    `<div class="text-block"><p>${escapeHtml(evaluation.message)}</p></div>`,
  );

  state.responses.push({
    phase: "formal_intervention",
    task_id: task.id,
    task_number: state.taskIndex + 1,
    absolute_task_number: state.taskIndex + 1,
    user_advice: advice,
    agent_decision: agent,
    golden_decision: task.golden_decision,
    selected_slot: state.selectedSlot,
    accepted: evaluation.accepted,
    condition: state.condition,
    human_correct: evaluation.humanCorrect,
    participant_correct: evaluation.participantCorrect,
    agent_correct: evaluation.agentCorrect,
    differs_from_agent: evaluation.differsFromAgent,
    same_choice: evaluation.sameChoice,
    both_wrong_different: evaluation.bothWrongDifferent,
    trust_reason_code: evaluation.reasonCode,
    trust_case_type: evaluation.caseType,
    trust_console_case_type: evaluation.consoleCaseType,
    current_adoption_rate_before_decision: evaluation.currentAdoptionRateBeforeDecision,
    current_case_adoption_rate_before_decision: evaluation.currentCaseAdoptionRateBeforeDecision,
    adoption_rate_after_decision: evaluation.adoptionRateAfterDecision,
    case_adoption_rate_after_decision: evaluation.caseAdoptionRateAfterDecision,
    acceptance_policy: evaluation.policy,
    trust_stats: JSON.parse(JSON.stringify(state.trustStats)),
    message: evaluation.message,
    conflicts: evaluation.conflicts,
    timestamp: new Date().toISOString(),
  });
  saveProgress();

  state.timer = window.setTimeout(playPostSteps, studyDelay(900));
}

function onBehaviorRecommendationSubmit() {
  if (!state.awaitingAdvice) {
    return;
  }

  const task = currentTask();
  const start = els.adviceStart.value;
  const end = minutesToTime(timeToMinutes(start) + task.duration_minutes);
  const advice = {
    day: els.adviceDay.value,
    start,
    end,
    label: `${els.adviceDay.value}, ${start} - ${end}`,
  };

  state.awaitingAdvice = false;
  state.behavioralDecisionMode = "user_recommendation";
  state.behavioralProposedSlot = advice;
  state.selectedSlot = advice;
  els.adviceBox.classList.add("hidden");

  appendDynamicStep(
    "human",
    "Your recommendation received",
    `
      <div class="text-block">
        <p>You recommended <strong>${escapeHtml(advice.label)}</strong>.</p>
      </div>
    `,
  );
  appendDynamicStep(
    "thinking",
    "Proposed schedule prepared",
    `
      <div class="text-block">
        <p>The agent will use your recommendation as the proposed schedule for final review.</p>
      </div>
    `,
  );

  beginBehaviorExecutionToFinalReview();
}

function onLetAgentDecide() {
  if (state.taskPhase !== "behavioral" || !state.awaitingAdvice) {
    return;
  }

  const task = currentTask();
  const agent = task.agent_decision;
  state.awaitingAdvice = false;
  state.behavioralDecisionMode = "let_agent_decide";
  state.behavioralProposedSlot = agent;
  state.selectedSlot = agent;
  els.adviceBox.classList.add("hidden");

  appendDynamicStep(
    "human",
    "You let the agent decide",
    `
      <div class="text-block">
        <p>You chose to let the agent select the schedule.</p>
      </div>
    `,
  );
  appendDynamicStep(
    "thinking",
    "Agent proposed schedule",
    `
      <div class="text-block">
        <p>The agent proposes <strong>${escapeHtml(agent.label)}</strong> for final review.</p>
      </div>
    `,
  );

  beginBehaviorExecutionToFinalReview();
}

function beginBehaviorExecutionToFinalReview() {
  if (state.postStepsStarted) {
    return;
  }
  state.postStepsStarted = true;
  state.playing = true;
  els.waitingCard.classList.remove("hidden");
  setRunStatus("Running", false);
  els.togglePlayback.textContent = "Pause";
  els.currentStepLabel.textContent = "The agent is selecting a room and preparing the calendar event.";

  const task = currentTask();
  const steps = task.trajectory.post_intervention_steps;
  let index = 0;

  function next() {
    if (!state.playing) {
      state.timer = window.setTimeout(next, studyDelay(POST_STEP_DELAY_MS));
      return;
    }

    if (index >= steps.length) {
      showBehaviorFinalReview(task, state.behavioralProposedSlot);
      return;
    }

    const rendered = deepReplace(steps[index], state.behavioralProposedSlot);
    if (shouldPauseForBehaviorFinalReview(rendered)) {
      showBehaviorFinalReview(task, state.behavioralProposedSlot);
      return;
    }

    if (rendered.output?.room) {
      state.behavioralRoom = rendered.output.room;
    }
    appendStep(rendered);
    index += 1;
    state.timer = window.setTimeout(next, studyDelay(POST_STEP_DELAY_MS));
  }

  state.timer = window.setTimeout(next, studyDelay(POST_STEP_DELAY_MS));
}

function shouldPauseForBehaviorFinalReview(step) {
  return step.type === "action" || step.type === "final_result";
}

function showBehaviorFinalReview(task, proposedSlot) {
  state.playing = false;
  state.timer = null;
  renderAdviceOptions(task, els.rejectDay, els.rejectStart, proposedSlot);
  state.awaitingFinalReview = true;
  els.waitingCard.classList.add("hidden");
  els.finalReviewSlot.textContent = proposedSlot.label;
  const room = state.behavioralRoom;
  els.finalReviewRoom.textContent = room?.name || "No room selected";
  els.finalReviewRoomMeta.textContent = room
    ? `${room.location} | capacity ${room.capacity}`
    : "The agent did not return a room before review.";
  els.finalReviewSource.textContent = "The agent has selected the time and room. Approve this final proposal, or reject it and provide a replacement time.";
  els.finalReviewBox.classList.remove("hidden");
  els.rejectScheduleForm.classList.add("hidden");
  setRunStatus("Waiting", true);
  els.currentStepLabel.textContent = "Final review before the agent creates the calendar event.";
  resetAppShellScroll();
}

function approveBehaviorSchedule() {
  if (state.taskPhase !== "behavioral" || !state.behavioralProposedSlot) {
    return;
  }

  state.behavioralFinalReviewAction = "approve";
  state.awaitingFinalReview = false;
  state.selectedSlot = state.behavioralProposedSlot;
  els.finalReviewBox.classList.add("hidden");
  els.rejectScheduleForm.classList.add("hidden");
  els.waitingCard.classList.remove("hidden");
  appendDynamicStep(
    "accept",
    "Schedule approved",
    `
      <div class="text-block">
        <p>You approved <strong>${escapeHtml(state.selectedSlot.label)}</strong>. The agent will schedule this time.</p>
      </div>
    `,
  );
  recordBehaviorResponse();
  finishBehaviorTaskAfterFinalReview();
}

function revealRejectScheduleForm() {
  if (state.taskPhase !== "behavioral" || !state.behavioralProposedSlot) {
    return;
  }
  els.rejectScheduleForm.classList.remove("hidden");
  els.currentStepLabel.textContent = "Provide the replacement schedule the agent should use.";
  els.rejectDay.focus();
}

function onRejectScheduleSubmit(event) {
  event.preventDefault();
  if (state.taskPhase !== "behavioral" || !state.behavioralProposedSlot) {
    return;
  }

  const task = currentTask();
  const start = els.rejectStart.value;
  const end = minutesToTime(timeToMinutes(start) + task.duration_minutes);
  const replacement = {
    day: els.rejectDay.value,
    start,
    end,
    label: `${els.rejectDay.value}, ${start} - ${end}`,
  };

  state.behavioralFinalReviewAction = "reject";
  state.awaitingFinalReview = false;
  state.behavioralRejectSlot = replacement;
  state.selectedSlot = replacement;
  els.finalReviewBox.classList.add("hidden");
  els.rejectScheduleForm.classList.add("hidden");
  els.waitingCard.classList.remove("hidden");
  appendDynamicStep(
    "reject",
    "Schedule rejected",
    `
      <div class="text-block">
        <p>You rejected <strong>${escapeHtml(state.behavioralProposedSlot.label)}</strong>.</p>
        <p>The agent will instead schedule <strong>${escapeHtml(replacement.label)}</strong>.</p>
      </div>
    `,
  );
  recordBehaviorResponse();
  finishBehaviorTaskAfterFinalReview();
}

function recordBehaviorResponse() {
  const task = currentTask();
  const selected = state.selectedSlot;
  const proposed = state.behavioralProposedSlot;
  const conflicts = findConflicts(task, selected.day, selected.start, selected.end);
  state.responses.push({
    phase: "behavioral_probe",
    task_id: task.id,
    task_number: state.taskIndex + 1,
    absolute_task_number: FORMAL_TASK_COUNT + state.taskIndex + 1,
    behavioral_decision_mode: state.behavioralDecisionMode,
    user_recommendation: state.behavioralDecisionMode === "user_recommendation" ? proposed : null,
    agent_decision: task.agent_decision,
    golden_decision: task.golden_decision,
    proposed_slot_before_final_review: proposed,
    room_before_final_review: state.behavioralRoom,
    final_review_action: state.behavioralFinalReviewAction,
    rejection_slot: state.behavioralRejectSlot,
    selected_slot: selected,
    selected_slot_correct: isCorrectSlot(task, selected),
    agent_correct: isCorrectSlot(task, task.agent_decision),
    conflicts,
    condition: state.condition,
    timestamp: new Date().toISOString(),
  });
  saveProgress();
  console.info("[Calendar Behavior Probe]", {
    taskId: task.id,
    taskNumber: state.taskIndex + 1,
    decisionMode: state.behavioralDecisionMode,
    proposedSlot: proposed?.label,
    finalReviewAction: state.behavioralFinalReviewAction,
    selectedSlot: selected?.label,
    selectedSlotCorrect: isCorrectSlot(task, selected),
    conflictCount: conflicts.length,
  });
}

function finishBehaviorTaskAfterFinalReview() {
  state.playing = false;
  setRunStatus("Complete", true);
  els.togglePlayback.textContent = "Resume";
  els.currentStepLabel.textContent = "Final review recorded. Continue to the next task.";
  els.nextTask.textContent = getNextTaskButtonLabel();
  els.nextArea.classList.remove("hidden");
  saveProgress();
}

function evaluateAdvice(task, advice) {
  const agent = task.agent_decision;
  const differsFromAgent = !sameSlot(advice, agent);
  const participantCorrect = isCorrectSlot(task, advice);
  const agentCorrect = isCorrectSlot(task, agent);
  const sameChoice = !differsFromAgent;
  const bothWrongDifferent = !participantCorrect && !agentCorrect && differsFromAgent;
  const conflicts = findConflicts(task, advice.day, advice.start, advice.end);
  const trustDecision = decideTrustAcceptance(
    participantCorrect,
    agentCorrect,
    sameChoice,
    bothWrongDifferent,
  );
  updateTrustStats(trustDecision);
  logTrustCaseStats(trustDecision);

  const sameChoiceMessage = participantCorrect
    ? "Because your choice matches the agent's choice, the agent continues with this schedule."
    : "Your choice matches the agent's choice, so the agent continues with the shared schedule.";

  return {
    accepted: trustDecision.accepted,
    conflicts,
    humanCorrect: participantCorrect,
    participantCorrect,
    agentCorrect,
    differsFromAgent,
    sameChoice,
    bothWrongDifferent,
    reasonCode: trustDecision.reasonCode,
    caseType: trustDecision.caseType,
    consoleCaseType: trustDecision.consoleCaseType,
    currentAdoptionRateBeforeDecision: trustDecision.currentAdoptionRateBeforeDecision,
    currentCaseAdoptionRateBeforeDecision: trustDecision.currentCaseAdoptionRateBeforeDecision,
    adoptionRateAfterDecision: getOverallTrustAdoptionRate(),
    caseAdoptionRateAfterDecision: getTrustCaseAdoptionRate(trustDecision.caseType),
    policy: trustDecision.reasonCode,
    message: sameChoice
      ? sameChoiceMessage
      : trustDecision.accepted
      ? "The agent follows your recommendation and continues with that schedule."
      : "The agent keeps its initial schedule rather than using your recommendation.",
  };
}

function renderWalkthroughInlineReview(advice, evaluation, pending = false) {
  let body = document.getElementById("walkthroughInlineReviewBody");
  if (!body) {
    els.walkthroughTranscript.insertAdjacentHTML(
      "beforeend",
      buildDynamicStepHtml(
        "thinking",
        "Agent review",
        '<div id="walkthroughInlineReviewBody"></div>',
        "review",
      ).replace(
        'class="assistant-row thinking"',
        'id="walkthroughInlineReview" class="assistant-row thinking walkthrough-review-row"',
      ),
    );
    body = document.getElementById("walkthroughInlineReviewBody");
  }

  body.innerHTML = `
    <div class="agent-review inline-agent-review">
      ${getAgentReviewHtml(walkthroughTask, advice, evaluation, pending)}
    </div>
  `;
  els.walkthroughTranscript.scrollTop = els.walkthroughTranscript.scrollHeight;
}

function getAgentReviewHtml(task, advice, evaluation, pending = false) {
  const agent = task.agent_decision;
  const relationText = evaluation.differsFromAgent
    ? "Your choice differs from the agent's choice."
    : "Your choice matches the agent's choice.";
  const decisionText = evaluation.differsFromAgent
    ? (evaluation.accepted ? "Agent follows your recommendation" : "Agent keeps its initial choice")
    : "Your choice matches the agent's choice";
  const finalText = evaluation.differsFromAgent
    ? evaluation.message
    : "Because your choice matches the agent's choice, the agent keeps the schedule and continues.";
  return `
    <div class="review-kicker">Agent review</div>
    <div class="review-choice-grid">
      <div class="review-choice">
        <span>Agent initial choice</span>
        <strong>${escapeHtml(agent.label)}</strong>
      </div>
      <div class="review-choice">
        <span>Your choice</span>
        <strong>${escapeHtml(advice.label)}</strong>
      </div>
    </div>
    <span class="review-relation">${escapeHtml(relationText)}</span>
    ${
      pending
        ? `
          <div class="review-progress" aria-live="polite">
            <span class="review-spinner" aria-hidden="true"></span>
            <span>Reviewing your recommendation...</span>
            <div class="review-bar" aria-hidden="true"><span></span></div>
          </div>
        `
        : `
          <strong class="review-decision">${escapeHtml(decisionText)}</strong>
          <span class="review-outcome">${escapeHtml(finalText)}</span>
        `
    }
  `;
}

function renderAgentReview(task, advice, evaluation, pending = false, target = els.agentReview) {
  target.className = "agent-review";
  target.innerHTML = getAgentReviewHtml(task, advice, evaluation, pending);
  target.classList.remove("hidden");
}

function findConflicts(task, day, start, end) {
  const startMin = timeToMinutes(start);
  const endMin = timeToMinutes(end);
  const conflicts = [];

  for (const [person, byDay] of Object.entries(task.schedules)) {
    for (const busy of byDay[day] || []) {
      if (startMin < busy.end_min && endMin > busy.start_min) {
        conflicts.push({
          person,
          busy: `${busy.start} - ${busy.end}`,
        });
      }
    }
  }
  return conflicts;
}

function saveProgress() {
  const payload = {
    participant: state.participant,
    survey: state.survey,
    metadata: data.metadata,
    condition: state.condition,
    trust_stats: state.trustStats,
    responses: state.responses,
    saved_at: new Date().toISOString(),
  };
  localStorage.setItem("calendar_agent_study_responses", JSON.stringify(payload));
}

function exportResponses() {
  const payload = {
    participant: state.participant,
    survey: state.survey,
    metadata: data.metadata,
    condition: state.condition,
    trust_stats: state.trustStats,
    responses: state.responses,
    exported_at: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `calendar-agent-study-${state.participant?.participantId || "participant"}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function showFormError(element, message) {
  element.textContent = message;
  element.classList.remove("hidden");
}

function clearFormError(element) {
  element.textContent = "";
  element.classList.add("hidden");
}

function setFieldInvalid(field, invalid) {
  field.setAttribute("aria-invalid", invalid ? "true" : "false");
}

function validateParticipantForm() {
  clearFormError(els.participantError);
  const requiredFields = [
    { field: document.getElementById("participantId"), message: "Please enter a participant ID." },
    { field: document.getElementById("ageRange"), message: "Please select an age range." },
    { field: document.getElementById("calendarExperience"), message: "Please select your calendar scheduling experience." },
    { field: document.getElementById("agentExperience"), message: "Please select your AI coding or agent tool experience." },
  ];

  for (const item of requiredFields) {
    const invalid = !item.field.value.trim();
    setFieldInvalid(item.field, invalid);
    if (invalid) {
      showFormError(els.participantError, item.message);
      item.field.focus();
      return false;
    }
  }
  return true;
}

function validateConsentForm() {
  clearFormError(els.consentError);
  const consentCheck = document.getElementById("consentCheck");
  const invalid = !consentCheck.checked;
  setFieldInvalid(consentCheck, invalid);
  if (invalid) {
    showFormError(els.consentError, "Please confirm that you consent to participate before continuing.");
    consentCheck.focus();
    return false;
  }
  return true;
}

function collectSurveyResponses(items = currentSurveyItems()) {
  const answers = {};
  const missing = [];
  for (const item of items) {
    const checked = els.surveyForm.querySelector(`input[name="${item.id}"]:checked`);
    if (!checked) {
      missing.push(item);
    } else {
      answers[item.id] = {
        construct: item.construct,
        item: item.text,
        value: Number(checked.value),
      };
    }
  }

  return { answers, missing };
}

function validateSurveyForm() {
  clearFormError(els.surveyError);
  const items = currentSurveyItems();
  const { answers, missing } = collectSurveyResponses(items);
  for (const item of items) {
    const fieldset = els.surveyForm.querySelector(`input[name="${item.id}"]`)?.closest(".survey-item");
    fieldset?.classList.toggle("missing", missing.some((missingItem) => missingItem.id === item.id));
  }

  if (missing.length > 0) {
    showFormError(
      els.surveyError,
      `Please answer every questionnaire item before continuing. Missing item: ${missing[0].construct}.`,
    );
    els.surveyForm.querySelector(`input[name="${missing[0].id}"]`)?.focus();
    return null;
  }

  return {
    scale: "1 = strongly disagree, 7 = strongly agree",
    submitted_at: new Date().toISOString(),
    answers,
  };
}

function joinHuman(items) {
  const values = items.filter(Boolean);
  if (values.length <= 1) {
    return values[0] || "";
  }
  if (values.length === 2) {
    return `${values[0]} and ${values[1]}`;
  }
  return `${values.slice(0, -1).join(", ")}, and ${values[values.length - 1]}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

renderSurveyItems();

els.participantForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateParticipantForm()) {
    return;
  }
  const formData = new FormData(els.participantForm);
  state.participant = Object.fromEntries(formData.entries());
  saveProgress();
  showView("consent");
});

els.consentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateConsentForm()) {
    return;
  }
  state.condition = assignCondition();
  state.trustStats = createTrustStats();
  state.participant = state.participant || {};
  state.participant.consent = true;
  state.participant.condition = state.condition;
  state.participant.started_at = new Date().toISOString();
  saveProgress();
  showView("intro");
});

els.beginStudy.addEventListener("click", () => {
  showView("walkthrough");
  renderWalkthrough();
});

els.beginBehaviorTasks.addEventListener("click", () => {
  startTask(0, "behavioral");
});

els.walkthroughTourBack.addEventListener("click", () => {
  setWalkthroughTourStep(state.walkthroughTourIndex - 1);
});

els.walkthroughTourNext.addEventListener("click", () => {
  advanceWalkthroughGuide();
});

els.walkthroughTogglePlayback.addEventListener("click", () => {
  if (state.walkthroughAwaitingAdvice || state.walkthroughCompleted) {
    return;
  }
  state.walkthroughPlaying = !state.walkthroughPlaying;
  els.walkthroughTogglePlayback.textContent = state.walkthroughPlaying ? "Pause" : "Resume";
  setWalkthroughRunStatus(state.walkthroughPlaying ? "Running" : "Paused", !state.walkthroughPlaying);
  clearWalkthroughTimer();
  if (!state.walkthroughPlaying) {
    return;
  }
  if (state.walkthroughPostStepsStarted) {
    playWalkthroughPostSteps();
  }
});

els.walkthroughReset.addEventListener("click", () => {
  renderWalkthrough();
});

els.walkthroughAdviceForm.addEventListener("submit", onWalkthroughAdviceSubmit);

window.addEventListener("resize", repositionCurrentWalkthroughCard);
window.addEventListener("scroll", repositionCurrentWalkthroughCard);
els.walkthroughTranscript.addEventListener("scroll", repositionCurrentWalkthroughCard);

els.togglePlayback.addEventListener("click", () => {
  if (state.awaitingAdvice || state.awaitingFinalReview) {
    resetAppShellScroll();
    return;
  }
  state.playing = !state.playing;
  els.togglePlayback.textContent = state.playing ? "Pause" : "Resume";
  setRunStatus(state.playing ? "Running" : "Paused", !state.playing);
  if (state.playing && !state.postStepsStarted) {
    playPreStep();
  }
});

els.resetTask.addEventListener("click", () => {
  const existingIndex = state.responses.findIndex(
    (response) => response.task_id === currentTask().id,
  );
  if (existingIndex >= 0) {
    state.responses.splice(existingIndex, 1);
  }
  startTask(state.taskIndex);
});

els.adviceForm.addEventListener("submit", onAdviceSubmit);
els.letAgentDecide.addEventListener("click", onLetAgentDecide);
els.approveSchedule.addEventListener("click", approveBehaviorSchedule);
els.showRejectSchedule.addEventListener("click", revealRejectScheduleForm);
els.rejectScheduleForm.addEventListener("submit", onRejectScheduleSubmit);

els.nextTask.addEventListener("click", () => {
  const taskList = activeTasks();
  if (state.taskIndex >= taskList.length - 1) {
    clearTimer();
    saveProgress();
    if (state.taskPhase === "formal") {
      showSurvey("post_formal");
    } else {
      showView("done");
    }
    return;
  }
  startTask(state.taskIndex + 1);
});

els.surveyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const survey = validateSurveyForm();
  if (!survey) {
    return;
  }
  if (!state.survey) {
    state.survey = {};
  }
  state.survey.post_formal_questionnaire = survey;
  saveProgress();
  showView("behaviorBrief");
});

els.exportResponses.addEventListener("click", exportResponses);

els.restartStudy.addEventListener("click", () => {
  clearTimer();
  clearWalkthroughTimer();
  state.taskIndex = 0;
  state.stepIndex = 0;
  state.taskPhase = "formal";
  state.surveyMode = "post_formal";
  state.walkthroughTourIndex = 0;
  state.walkthroughUnlockedTourIndex = 0;
  state.walkthroughStepIndex = 0;
  state.walkthroughPostStepIndex = 0;
  state.walkthroughPlaying = false;
  state.walkthroughAwaitingAdvice = false;
  state.walkthroughPostStepsStarted = false;
  state.walkthroughSelectedSlot = null;
  state.walkthroughCompleted = false;
  state.awaitingAdvice = false;
  state.awaitingFinalReview = false;
  state.postStepsStarted = false;
  state.selectedSlot = null;
  state.behavioralDecisionMode = null;
  state.behavioralProposedSlot = null;
  state.behavioralRoom = null;
  state.behavioralFinalReviewAction = null;
  state.behavioralRejectSlot = null;
  state.responses = [];
  state.participant = null;
  state.survey = {
    post_formal_questionnaire: null,
  };
  state.condition = null;
  state.trustStats = createTrustStats();
  localStorage.removeItem("calendar_agent_study_responses");
  els.participantForm.reset();
  els.consentForm.reset();
  els.surveyForm.reset();
  els.participantForm.querySelectorAll("[aria-invalid]").forEach((field) => field.removeAttribute("aria-invalid"));
  els.consentForm.querySelectorAll("[aria-invalid]").forEach((field) => field.removeAttribute("aria-invalid"));
  els.surveyForm.querySelectorAll(".survey-item.missing").forEach((item) => item.classList.remove("missing"));
  clearFormError(els.participantError);
  clearFormError(els.consentError);
  clearFormError(els.surveyError);
  renderSurveyItems(POST_FORMAL_SURVEY_ITEMS, 1);
  showView("participant");
});
