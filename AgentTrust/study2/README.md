# Study 2 frontend

Study 2 is isolated from the Study 1 frontend in the repository root.

## Run locally

From the repository root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/study2/
```

The production flow serves all 20 tasks. For local interface testing only, use
`?tasks=2&speed=fast`.

## Submission endpoint

At completion, the page downloads a local JSON copy and sends:

```json
{ "log": { "...": "full study payload" } }
```

to `POST /submit_log`. The payload includes the server-required
`experiment_setup`, `round_1`, and `participant_info` fields. The returned
`completion_code` is shown on the final page.

## Regenerate task data

The generated task files contain the 20 Study 1 Phase 1 cases, with the Study 2
experimental Agent judgment set to the dataset ground truth for all cases:

```bash
node study2/build_study2_data.mjs
```
