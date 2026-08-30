# Vera Study 1 · static deployment

This folder is the complete participant-facing website. It has no Node.js,
database, API, microphone, or server-side dependency.

## Deploy

Upload **the contents of this folder** to any static web directory and open its
`index.html` over HTTP or HTTPS. Apache, Nginx, GitHub Pages, university web
hosting, object storage static hosting, and a basic Python web server all work.

The server only needs to serve `.html`, `.css`, `.js`, and `.json` files. Keep
the directory structure unchanged:

```text
index.html
study.js
styles.css
data/trajectories.json
data/comprehension-questions.json
data/tutorial-trajectory.json
replay/index.html
replay/app.js
replay/styles.css
```

Do not double-click `index.html` as a `file://` URL. Browsers normally block the
trajectory JSON request in that mode.

## Local test without Node.js

If Python 3 is available:

```bash
cd static-site
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. Stop the server with `Ctrl+C`.

## Data collection

All answers and interaction events are stored only in the participant's browser
during one uninterrupted study session. Refreshing or reopening the website
clears the unfinished session and returns to Consent. Each participant receives
10 trajectories randomly sampled from the 20-item pool: five successful and
five failed, shown in a newly randomized order. Before each formal trajectory,
the participant must correctly answer one three-option task-understanding
question; options are randomized and every attempt is recorded. After all 10
trajectories, the completion page provides a
**Download study data** button. The participant must send that JSON file to
the researcher using the study's approved submission channel.

Stimulus pool v2 contains 10 source-labeled successes and 10 source-labeled
failures. Eighteen trajectories have 5–28 decision steps; the only longer cases
have 34 and 39 steps. Outcome and source `t_err` labels remain researcher-only
and are documented outside this participant-facing folder.

The export contains:

- anonymous participant ID and the balanced, randomized 10-task order;
- demographics and the subjective Agent-oversight experience questionnaire;
- interactive-walkthrough completion events from an eight-step real practice
  trajectory that is not part of the 20 formal cases. The walkthrough runs in
  the formal replay player and sequentially highlights its real interface,
  including the enlarged Pause control and the step-level **Record oversight
  note** action. Its form lets participants select an information need, a
  suspected problem, an intervention intention, or any combination. Participants
  also complete and submit a practice final judgment before continuing;
- every replay, pause, step, expansion, visibility, information-request,
  suspicion, intervention, comprehension-attempt, and final-verdict event;
- per-trajectory records with exact anchor step, visible prefix, furthest step
  previously seen, playback phase, timestamps, and free text. The 0–100
  failure-probability and suspicion-confidence sliders appear only for a
  suspected problem, while final confidence appears in the verdict. Every
  displayed slider remains null until the participant moves it;
- browser, language, timezone, and screen metadata.

No audio is requested or collected.

## Important limitation

There is no central backup or refresh recovery. Refreshing, reopening, or
closing the study before downloading the JSON discards the unfinished record
and returns to Consent. Participants should complete the study in one browser
tab without refreshing and download the JSON immediately after completion.
