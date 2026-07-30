const AGENT_SOURCES = new Set(["agent", "assistant", "model", "openclaw"]);
const EXPECTED_RUN_COUNT = 134;
const STORAGE_KEY = "agent-replay-oversight-134-condensed-v1";

const INFO_TYPES = [
  {
    id: "why_step",
    label: "Why do this step?",
    description: "Ask for the reasoning behind this decision.",
  },
  {
    id: "supporting_evidence",
    label: "What evidence supports this step?",
    description: "Ask which observations or facts support the action.",
  },
  {
    id: "alternatives",
    label: "What alternatives were considered?",
    description: "Ask what other actions were available.",
  },
  {
    id: "expected_outcome",
    label: "What is the expected outcome?",
    description: "Ask what the agent expects to happen next.",
  },
  {
    id: "tool_context",
    label: "What tool or data is being used?",
    description: "Ask for more context about the tool or data source.",
  },
  {
    id: "risk",
    label: "What could go wrong?",
    description: "Ask about risks in this decision.",
  },
];

const state = {
  runs: [],
  selectedId: null,
  revealedSteps: 0,
  activePhase: null,
  isPlaying: false,
  speed: 1,
  follow: true,
  search: "",
  openInfoStep: null,
  infoResponse: null,
  summaryOpen: false,
  timer: null,
  expandedExchanges: new Set(),
  expandedActivityGroups: new Set(),
  records: loadRecords(),
};

const root = document.querySelector("#root");

init();

async function init() {
  try {
    const response = await fetch("./trajectory.json");
    if (!response.ok) {
      throw new Error(`Trajectory data returned ${response.status}`);
    }
    const runs = await response.json();
    if (!Array.isArray(runs) || runs.length !== EXPECTED_RUN_COUNT) {
      throw new Error(
        `Expected ${EXPECTED_RUN_COUNT} trajectories, received ${runs?.length ?? 0}`,
      );
    }
    state.runs = runs;
    state.selectedId = runs[0].sample_id;
    buildShell();
    renderAll();
  } catch (error) {
    root.innerHTML = `
      <main class="loading-screen error-screen">
        <span class="loading-mark" aria-hidden="true">!</span>
        <h1>Could not load the trajectories</h1>
        <p>${escapeHtml(error.message)}</p>
        <p class="loading-help">Open this folder through a local web server rather than as a file.</p>
      </main>
    `;
  }
}

function buildShell() {
  root.removeAttribute("aria-live");
  root.innerHTML = `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand-row">
          <span class="brand-mark" aria-hidden="true">AR</span>
          <div>
            <h1>AgentReplay</h1>
            <p>Condensed replay · ${state.runs.length} tasks</p>
          </div>
        </div>
        <label class="search-box">
          <span aria-hidden="true">⌕</span>
          <input id="run-search" type="search" placeholder="Search tasks, models, or triggers" autocomplete="off" />
        </label>
        <div class="list-heading">
          <span>Trajectories</span>
          <span id="run-count">${state.runs.length}</span>
        </div>
        <nav id="run-list" class="run-list" aria-label="Trajectory list"></nav>
      </aside>

      <main class="main-pane">
        <header id="topbar" class="topbar"></header>
        <section id="transcript" class="transcript" aria-label="Trajectory transcript"></section>
        <footer id="player-bar" class="player-bar"></footer>
      </main>
    </div>
    <div id="modal-root"></div>
  `;

  document.querySelector("#run-search").addEventListener("input", (event) => {
    state.search = event.target.value;
    renderRunList();
  });
}

function selectedRun() {
  return state.runs.find((run) => run.sample_id === state.selectedId);
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
      tUserOversight: null,
    };
  }
  return state.records[state.selectedId];
}

function loadRecords() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveRecords() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.records));
  } catch {
    // The replay still works if browser storage is unavailable.
  }
}

function renderAll() {
  renderRunList();
  renderTopbar();
  renderTranscript();
  renderPlayer();
  renderSummary();
}

function renderRunList() {
  const list = document.querySelector("#run-list");
  if (!list) return;

  const query = state.search.trim().toLowerCase();
  const filtered = state.runs.filter((run) =>
    [
      run.case_name,
      run.model_name,
      run.domain,
      run.ability_category,
      run.sample_id,
      run.annotation?.trigger_mechanism,
      run.annotation?.trigger_mechanism_other,
      triggerTaxonomy(run).label,
    ]
      .filter(Boolean)
      .some((value) => String(value).toLowerCase().includes(query)),
  );

  document.querySelector("#run-count").textContent = String(filtered.length);
  list.innerHTML =
    filtered
      .map((run) => {
        const record = state.records[run.sample_id];
        const trigger = triggerTaxonomy(run);
        const hasActivity =
          record &&
          (record.infoRequests?.length > 0 ||
            Number.isInteger(record.tUserOversight));
        return `
          <button
            class="run-row ${run.sample_id === state.selectedId ? "selected" : ""}"
            type="button"
            data-action="select-run"
            data-run-id="${escapeAttribute(run.sample_id)}"
            aria-current="${run.sample_id === state.selectedId ? "true" : "false"}"
          >
            <span class="run-row-top">
              <span class="run-title">${escapeHtml(run.case_name)}</span>
              <span class="score-pill">score ${formatScore(run.score)}</span>
            </span>
            <span class="run-meta">${escapeHtml(run.model_name)} · ${run.decision_step_count} steps</span>
            <span
              class="trigger-taxonomy ${escapeAttribute(trigger.state)}"
              title="Trigger taxonomy: ${escapeAttribute(trigger.label)}"
            >
              <span class="trigger-taxonomy-label">Trigger</span>
              <strong>${escapeHtml(trigger.label)}</strong>
            </span>
            <span class="run-tags">
              <span>${escapeHtml(run.domain)}</span>
              <span>${escapeHtml(run.difficulty)}</span>
              ${hasActivity ? '<span class="activity-tag">oversight recorded</span>' : ""}
            </span>
          </button>
        `;
      })
      .join("") || '<p class="empty-note sidebar-empty">No matching trajectories.</p>';
}

function renderTopbar() {
  const run = selectedRun();
  const topbar = document.querySelector("#topbar");
  if (!run || !topbar) return;

  topbar.innerHTML = `
    <div class="title-stack">
      <p class="eyebrow">LiveClaw annotated trajectory</p>
      <h2>${escapeHtml(run.case_name)}</h2>
      <p class="sample-id">${escapeHtml(run.sample_id)}</p>
    </div>
    <div class="top-metrics" aria-label="Trajectory metadata">
      ${metric("Model", run.model_name)}
      ${metric("Domain", run.domain)}
      ${metric("Difficulty", run.difficulty)}
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
  const transcriptBlocks = buildTranscriptBlocks(visibleSteps);
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
      transcriptBlocks.length
        ? transcriptBlocks
            .map((block) =>
              block.type === "message"
                ? renderStep(run, block.step)
                : renderActivityGroup(run, block.steps),
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
              <h3>Review your oversight decisions</h3>
              <p>Compare your information requests and selected intervention step with the annotated failure-process timepoints.</p>
            </div>
            <button class="summary-button" type="button" data-action="open-summary">
              See oversight summary
            </button>
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
    message: extractVisibleText(agentEvent?.payload || {}),
    displayEvents: Array.isArray(step?.display_events)
      ? step.display_events
      : [],
  };
}

function buildTranscriptBlocks(steps) {
  const blocks = [];
  let pendingActivity = [];

  const flushActivity = () => {
    if (!pendingActivity.length) return;
    blocks.push({
      type: "activity",
      steps: pendingActivity,
    });
    pendingActivity = [];
  };

  for (const step of steps) {
    const presentation = stepPresentation(step);
    if (presentation.message) {
      flushActivity();
      blocks.push({
        type: "message",
        step,
      });
      if (stepHasActivity(step, presentation)) {
        pendingActivity.push(step);
      }
    } else {
      pendingActivity.push(step);
    }
  }
  flushActivity();
  return blocks;
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
  const { message } = presentation;
  const actionsVisible =
    !isActive ||
    activePhase !== "message" ||
    !stepHasActivity(step, presentation);
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
          actionsVisible
            ? renderOversightActions(stepNumber)
            : ""
        }

        ${isInfoOpen ? renderInfoPanel(stepNumber) : ""}
      </div>
    </article>
  `;
}

function renderActivityGroup(run, steps) {
  const startStep = Number(steps[0].decision_step);
  const endStep = Number(steps[steps.length - 1].decision_step);
  const groupKey = activityGroupKey(startStep);
  const expanded = state.expandedActivityGroups.has(groupKey);
  const isActive =
    endStep === state.revealedSteps && state.activePhase !== null;
  const toolCallCount = steps.reduce(
    (total, step) =>
      total +
      (Array.isArray(step.display_events) ? step.display_events.length : 0),
    0,
  );
  const oversightStep = steps.find(
    (step) => currentRecord().tUserOversight === Number(step.decision_step),
  );
  const rangeLabel =
    startStep === endStep
      ? `Step ${startStep}`
      : `Steps ${startStep}–${endStep}`;
  const activityStatus = isActive
    ? state.isPlaying
      ? phaseStatus(state.activePhase)
      : `Paused · ${phaseStatus(state.activePhase)}`
    : null;
  const isPreparing = isActive && state.activePhase === "message";

  return `
    <section
      class="activity-group ${expanded ? "expanded" : "collapsed"} ${isActive ? "active" : ""} ${oversightStep ? "has-oversight" : ""}"
      data-activity-group="${startStep}"
      data-active-step="${endStep}"
    >
      <button
        class="activity-toggle"
        type="button"
        data-action="toggle-activity-group"
        data-group-start="${startStep}"
        aria-expanded="${expanded}"
      >
        <span class="activity-icon" aria-hidden="true">
          ${isActive && state.isPlaying ? '<span class="tool-spinner"></span>' : activityGroupIcon(steps)}
        </span>
        <span class="activity-copy">
          <strong>${escapeHtml(isPreparing ? "Preparing tool activity…" : summarizeActivity(steps))}</strong>
          <span class="activity-meta">
            ${
              isPreparing
                ? `${escapeHtml(rangeLabel)} · Waiting for tool call`
                : `${escapeHtml(rangeLabel)} · ${steps.length} raw ${steps.length === 1 ? "step" : "steps"} ·
                   ${toolCallCount} tool ${toolCallCount === 1 ? "call" : "calls"}`
            }
            ${activityStatus ? ` · ${escapeHtml(activityStatus)}` : ""}
            ${
              oversightStep
                ? ` · <em>Oversight marked at step ${Number(oversightStep.decision_step)}</em>`
                : ""
            }
          </span>
        </span>
        <span class="activity-chevron" aria-hidden="true">${expanded ? "⌃" : "⌄"}</span>
      </button>
      ${
        expanded
          ? `
            <div class="activity-details">
              ${steps.map((step) => renderActivityStep(run, step)).join("")}
            </div>
          `
          : ""
      }
    </section>
  `;
}

function renderActivityStep(run, step) {
  const stepNumber = Number(step.decision_step);
  const { extraEvents, payload, message, displayEvents } =
    stepPresentation(step);
  const belongsToMessage = Boolean(message);
  const record = currentRecord();
  const isOversight = record.tUserOversight === stepNumber;
  const isInfoOpen = state.openInfoStep === stepNumber;
  const isActive =
    stepNumber === state.revealedSteps && state.activePhase !== null;
  const activePhase = isActive ? state.activePhase : null;
  const activityVisible = !isActive || activePhase !== "message";
  const status = isActive
    ? state.isPlaying
      ? phaseStatus(activePhase)
      : `Paused · ${phaseStatus(activePhase)}`
    : "Complete";

  return `
    <article
      class="activity-step ${isOversight ? "oversight-step" : ""} ${isActive ? "active" : ""}"
      data-activity-step="${stepNumber}"
    >
      <header class="activity-step-header">
        <span>
          <strong>Step ${stepNumber}</strong>
          <small>${belongsToMessage ? "Tools from message · " : ""}ATIF ${escapeHtml(formatRawStepIds(step.raw_step_ids))}</small>
        </span>
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
      </header>
      ${
        !activityVisible
          ? `
            <div class="phase-placeholder">
              <span class="typing-dots" aria-hidden="true"><i></i><i></i><i></i></span>
              Preparing tool activity
            </div>
          `
          : displayEvents.length
          ? renderToolExchanges(
              stepNumber,
              payload,
              displayEvents,
              isActive,
              activePhase,
            )
          : ""
      }
      ${activityVisible && extraEvents.length ? renderExtraEvents(extraEvents) : ""}
      ${
        activityVisible && !displayEvents.length && !extraEvents.length
          ? '<p class="empty-message">No recorded tool activity for this raw step.</p>'
          : ""
      }
      ${belongsToMessage ? "" : renderOversightActions(stepNumber, true)}
      ${!belongsToMessage && isInfoOpen ? renderInfoPanel(stepNumber) : ""}
    </article>
  `;
}

function renderOversightActions(stepNumber, compact = false) {
  const record = currentRecord();
  const requestCount = record.infoRequests.filter(
    (request) => request.step === stepNumber,
  ).length;
  const isInfoOpen = state.openInfoStep === stepNumber;
  const isOversight = record.tUserOversight === stepNumber;

  return `
    <div class="oversight-actions ${compact ? "compact" : ""}" aria-label="Oversight actions for step ${stepNumber}">
      <button
        class="oversight-button info-button ${isInfoOpen ? "active" : ""}"
        type="button"
        data-action="request-info"
        data-step="${stepNumber}"
        aria-expanded="${isInfoOpen}"
      >
        <span aria-hidden="true">＋</span>
        ${compact ? "Request information" : "Request additional information"}
        ${requestCount ? `<span class="request-count">${requestCount}</span>` : ""}
      </button>
      <button
        class="oversight-button error-button ${isOversight ? "selected" : ""}"
        type="button"
        data-action="mark-error"
        data-step="${stepNumber}"
        aria-pressed="${isOversight}"
      >
        <span aria-hidden="true">${isOversight ? "✓" : "!"}</span>
        ${
          isOversight
            ? compact
              ? "Marked as oversight"
              : "Marked as t_user_oversight"
            : "This step may err"
        }
      </button>
    </div>
  `;
}

function activityGroupKey(startStep) {
  return `${state.selectedId}:${startStep}`;
}

function summarizeActivity(steps) {
  const counts = {
    read: 0,
    edit: 0,
    exec: 0,
    browser: 0,
    web: 0,
    other: 0,
  };

  for (const step of steps) {
    for (const event of step.display_events || []) {
      const tool = String(event.tool || "").toLowerCase();
      if (tool === "read") {
        counts.read += 1;
      } else if (tool === "edit" || tool === "write") {
        counts.edit += 1;
      } else if (tool === "exec" || tool === "process") {
        counts.exec += 1;
      } else if (tool === "browser") {
        counts.browser += 1;
      } else if (tool === "web_fetch" || tool === "web_search") {
        counts.web += 1;
      } else {
        counts.other += 1;
      }
    }
  }

  const summaries = [];
  if (counts.read) summaries.push(activityCount("Read", counts.read, "file"));
  if (counts.edit) {
    summaries.push(activityCount("Edited", counts.edit, "file"));
  }
  if (counts.exec) {
    summaries.push(activityCount("Ran", counts.exec, "command"));
  }
  if (counts.browser) {
    summaries.push(
      `Used browser ${counts.browser} ${counts.browser === 1 ? "time" : "times"}`,
    );
  }
  if (counts.web) {
    summaries.push(activityCount("Looked up", counts.web, "source"));
  }
  if (counts.other) {
    summaries.push(activityCount("Used", counts.other, "other tool"));
  }

  if (!summaries.length) {
    return `Processed ${steps.length} background ${steps.length === 1 ? "event" : "events"}`;
  }
  if (summaries.length <= 3) return summaries.join(" · ");
  return `${summaries.slice(0, 3).join(" · ")} · ${summaries.length - 3} more`;
}

function activityCount(verb, count, noun) {
  return `${verb} ${count} ${noun}${count === 1 ? "" : "s"}`;
}

function activityGroupIcon(steps) {
  const tools = new Set(
    steps.flatMap((step) =>
      (step.display_events || []).map((event) => event.tool),
    ),
  );
  if (tools.has("edit") || tools.has("write")) return "✎";
  if (tools.has("exec") || tools.has("process")) return "›_";
  if (tools.has("browser") || tools.has("web_fetch") || tools.has("web_search")) {
    return "⌕";
  }
  if (tools.has("read")) return "R";
  return "⌁";
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

  return `
    <section class="info-panel" aria-label="Additional information request">
      <div class="info-panel-heading">
        <div>
          <p class="context-kicker">Playback paused</p>
          <h4>What additional information do you want?</h4>
        </div>
        <button
          class="close-panel-button"
          type="button"
          data-action="close-info"
          aria-label="Close information panel"
        >×</button>
      </div>
      <div class="info-options">
        ${INFO_TYPES.map(
          (option) => `
            <button
              type="button"
              class="info-option ${requestedTypes.has(option.id) ? "requested" : ""}"
              data-action="select-info"
              data-step="${stepNumber}"
              data-info-type="${option.id}"
            >
              <strong>${escapeHtml(option.label)}</strong>
              <span>${escapeHtml(option.description)}</span>
            </button>
          `,
        ).join("")}
      </div>
      ${
        response
          ? `
            <div class="placeholder-response" role="status">
              <span>Requested: ${escapeHtml(response.label)}</span>
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
      <button class="icon-button" type="button" data-action="restart" title="Restart" aria-label="Restart">↺</button>
      <button
        class="icon-button"
        type="button"
        data-action="previous"
        title="Previous step"
        aria-label="Previous step"
        ${state.revealedSteps === 0 ? "disabled" : ""}
      >←</button>
      <button
        class="icon-button primary"
        type="button"
        data-action="toggle-play"
        title="${state.isPlaying ? "Pause" : "Play"}"
        aria-label="${state.isPlaying ? "Pause" : "Play"}"
      >${state.isPlaying ? "Ⅱ" : "▶"}</button>
      <button
        class="icon-button"
        type="button"
        data-action="next"
        title="Next step"
        aria-label="Next step"
        ${complete ? "disabled" : ""}
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
      />
    </div>

    <div class="playback-options">
      ${
        complete
          ? `
            <button class="summary-button compact" type="button" data-action="open-summary">
              See oversight summary
            </button>
          `
          : ""
      }
      <label class="checkbox-row">
        <input type="checkbox" data-action="follow" ${state.follow ? "checked" : ""} />
        <span>Follow</span>
      </label>
      <label class="speed-control">
        <span>Speed</span>
        <select data-action="speed" aria-label="Playback speed">
          ${[0.5, 1, 1.5, 2, 4]
            .map(
              (speed) =>
                `<option value="${speed}" ${state.speed === speed ? "selected" : ""}>${speed}×</option>`,
            )
            .join("")}
        </select>
      </label>
    </div>
  `;
}

function renderSummary() {
  const modalRoot = document.querySelector("#modal-root");
  if (!modalRoot) return;
  if (!state.summaryOpen) {
    modalRoot.innerHTML = "";
    return;
  }

  const run = selectedRun();
  const record = currentRecord();
  const annotation = run.annotation || {};
  const requests = record.infoRequests || [];

  modalRoot.innerHTML = `
    <div class="modal-backdrop" data-action="close-summary">
      <section
        class="summary-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="summary-title"
        data-modal-panel
      >
        <header class="summary-header">
          <div>
            <p class="context-kicker">Oversight summary</p>
            <h2 id="summary-title">${escapeHtml(run.case_name)}</h2>
            <p>${escapeHtml(run.model_name)} · ${run.decision_step_count} decision steps</p>
          </div>
          <button class="modal-close" type="button" data-action="close-summary" aria-label="Close summary">×</button>
        </header>

        <div class="summary-content">
          <section class="summary-section">
            <div class="summary-section-heading">
              <div>
                <p class="context-kicker">Your requests</p>
                <h3>Additional information requested</h3>
              </div>
              <span class="summary-count">${requests.length}</span>
            </div>
            ${
              requests.length
                ? `
                  <ol class="request-summary-list">
                    ${requests
                      .map(
                        (request) => `
                          <li>
                            <span class="summary-step">Step ${request.step}</span>
                            <strong>${escapeHtml(request.label)}</strong>
                          </li>
                        `,
                      )
                      .join("")}
                  </ol>
                `
                : '<p class="summary-empty">No additional information was requested.</p>'
            }
          </section>

          <section class="summary-section">
            <p class="context-kicker">Your diagnosis</p>
            <div class="user-oversight-result">
              <span>t_user_oversight</span>
              <strong>${formatTimepoint(record.tUserOversight, "Not selected")}</strong>
            </div>
          </section>

          <section class="summary-section ground-truth">
            <div class="summary-section-heading">
              <div>
                <p class="context-kicker">Annotated timepoints</p>
                <h3>Ground-truth failure process</h3>
              </div>
              <span class="outcome-pill">${escapeHtml(outcomeLabel(annotation.outcome_class))}</span>
            </div>
            <div class="timepoint-grid">
              ${timepointCard(
                "t_err",
                annotation.t_err,
                "First decisive error in the final failure chain.",
              )}
              ${timepointCard(
                "t_commit",
                annotation.t_commit,
                "Point after which the decisive error is not corrected.",
              )}
              ${timepointCard(
                "t_surface",
                annotation.t_surface,
                "First observable signal of the decisive failure.",
              )}
            </div>
            ${
              annotation.outcome_class === "success_control"
                ? '<p class="success-note">This is a successful control trajectory, so the three failure timepoints are not applicable.</p>'
                : ""
            }
            ${
              annotation.annotation_status === "unavailable"
                ? `<p class="annotation-unavailable-note">${escapeHtml(
                    annotation.annotation_error ||
                      "The structured annotation is unavailable for this trajectory.",
                  )} The three annotated timepoints require review.</p>`
                : ""
            }
            ${
              annotation.annotation_status === "complete" &&
              annotation.needs_human_review
                ? '<p class="annotation-review-note">This saved annotation was flagged for human review. The timepoints above are shown exactly as recorded.</p>'
                : ""
            }
          </section>
        </div>

        <footer class="summary-footer">
          <button class="secondary-button" type="button" data-action="close-summary">Return to trajectory</button>
        </footer>
      </section>
    </div>
  `;

  requestAnimationFrame(() => {
    modalRoot.querySelector(".modal-close")?.focus();
  });
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
  state.summaryOpen = false;
  renderAll();
  document.querySelector("#transcript")?.scrollTo({ top: 0 });
}

function togglePlayback() {
  if (state.isPlaying) {
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
  state.summaryOpen = false;
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
  const delay = Math.max(140, baseDelay / state.speed);
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
    state.activePhase = phasesForStep(step)[0];
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
  const message = extractVisibleText(agentEvent?.payload || {});
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

function moveToStep(nextStep) {
  const run = selectedRun();
  if (!run) return;
  pausePlayback(false);
  state.revealedSteps = Math.max(
    0,
    Math.min(Number(nextStep), run.decision_step_count),
  );
  state.activePhase =
    state.revealedSteps === run.decision_step_count
      ? null
      : state.revealedSteps > 0
      ? phasesForStep(run.decision_steps[state.revealedSteps - 1]).at(-1)
      : null;
  state.openInfoStep = null;
  state.infoResponse = null;
  state.summaryOpen = false;
  renderTopbar();
  renderTranscript();
  renderPlayer();
  renderSummary();
}

function requestInformation(stepNumber) {
  pausePlayback(false);
  state.openInfoStep = stepNumber;
  state.infoResponse = null;
  renderTranscript(false);
  renderPlayer();
  requestAnimationFrame(() => {
    const stepElement =
      document.querySelector(`[data-step-card="${stepNumber}"]`) ||
      document.querySelector(`[data-activity-step="${stepNumber}"]`);
    stepElement
      ?.querySelector(".info-panel")
      ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
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
  renderRunList();
  renderTranscript(false);
}

function toggleOversightStep(stepNumber) {
  const record = currentRecord();
  record.tUserOversight =
    record.tUserOversight === stepNumber ? null : stepNumber;
  saveRecords();
  renderRunList();
  renderTranscript(false);
}

function toggleExchange(stepNumber, exchangeIndex) {
  const exchangeKey = `${state.selectedId}:${stepNumber}:${exchangeIndex}`;
  if (state.expandedExchanges.has(exchangeKey)) {
    state.expandedExchanges.delete(exchangeKey);
  } else {
    state.expandedExchanges.add(exchangeKey);
  }
  renderTranscript(false);
}

function toggleActivityGroup(startStep) {
  const groupKey = activityGroupKey(startStep);
  if (state.expandedActivityGroups.has(groupKey)) {
    state.expandedActivityGroups.delete(groupKey);
  } else {
    state.expandedActivityGroups.add(groupKey);
  }
  renderTranscript(false);
}

document.addEventListener("click", (event) => {
  const actionElement = event.target.closest("[data-action]");
  if (!actionElement) return;
  const action = actionElement.dataset.action;

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
      break;
    case "restart":
      moveToStep(0);
      break;
    case "previous":
      moveToStep(state.revealedSteps - 1);
      break;
    case "next":
      moveToStep(state.revealedSteps + 1);
      break;
    case "request-info":
      requestInformation(Number(actionElement.dataset.step));
      break;
    case "close-info":
      state.openInfoStep = null;
      state.infoResponse = null;
      renderTranscript(false);
      break;
    case "select-info":
      selectInformation(
        Number(actionElement.dataset.step),
        actionElement.dataset.infoType,
      );
      break;
    case "mark-error":
      toggleOversightStep(Number(actionElement.dataset.step));
      break;
    case "toggle-exchange":
      toggleExchange(
        Number(actionElement.dataset.step),
        Number(actionElement.dataset.exchangeIndex),
      );
      break;
    case "toggle-activity-group":
      toggleActivityGroup(Number(actionElement.dataset.groupStart));
      break;
    case "open-summary":
      state.summaryOpen = true;
      pausePlayback(false);
      renderPlayer();
      renderSummary();
      break;
    case "close-summary":
      state.summaryOpen = false;
      renderSummary();
      break;
  }
});

document.addEventListener("input", (event) => {
  const action = event.target.dataset.action;
  if (action === "scrub") {
    moveToStep(Number(event.target.value));
  }
});

document.addEventListener("change", (event) => {
  const action = event.target.dataset.action;
  if (action === "speed") {
    state.speed = Number(event.target.value);
    if (state.isPlaying) scheduleNextTick();
  }
  if (action === "follow") {
    state.follow = event.target.checked;
  }
});

document.addEventListener("keydown", (event) => {
  const tagName = event.target.tagName?.toLowerCase();
  const isTyping =
    tagName === "input" || tagName === "textarea" || tagName === "select";
  if (event.key === "Escape") {
    if (state.summaryOpen) {
      state.summaryOpen = false;
      renderSummary();
    } else if (state.openInfoStep !== null) {
      state.openInfoStep = null;
      state.infoResponse = null;
      renderTranscript(false);
    }
    return;
  }
  if (isTyping) return;
  if (event.code === "Space") {
    event.preventDefault();
    togglePlayback();
  } else if (event.key === "ArrowRight") {
    moveToStep(state.revealedSteps + 1);
  } else if (event.key === "ArrowLeft") {
    moveToStep(state.revealedSteps - 1);
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
