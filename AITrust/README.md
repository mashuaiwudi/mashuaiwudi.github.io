# Door-Choice RAVEN-logic experiment: weighted uncertainty version

This version keeps the RAVEN experiment's structure and Phase 1 trust logic, but redesigns the Door-Choice cases to be more uncertain.

## Key design

Each door now has exactly:

- 1 safety cue
- 1 risk cue
- 1 ambiguous cue

So the safe door is **not** simply the door with more good clues. Both doors contain mixed evidence.

The correct answer is determined by hidden reliability-weighted evidence:

- Safety cue: positive score
- Risk cue: negative score
- Ambiguous cue: +0.5 / 0 / -0.5 depending on lean
- Reliability: high = 3, medium = 2, low = 1

All 40 cases are medium or hard:
- hard: small score gap, usually around 1
- medium: moderate score gap, usually around 2

## Preserved from the RAVEN version

- 40 embedded cases
- RAVEN `correct_answer` and `AI_answer` preserved as metadata
- AI correctness pattern preserved from RAVEN
- Phase 1 trust strategies unchanged:
  - over_trusting
  - under_trusting
  - calibrated_trusting
- case-specific adoption-rate control unchanged
- five-case console statistics unchanged

## Source inspection JSON

The file `clue_sources.json` separately stores the generated clues, sources, reliability levels, scores, correct answer, AI answer, and score gap for all 40 cases.

## Run

Open `index.html` directly, or run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Test URL parameters

```text
?strategy=over_trusting
?strategy=under_trusting
?strategy=calibrated_trusting
?version=direct
?version=explanation
```

Example:

```text
http://localhost:8000/?strategy=calibrated_trusting&version=explanation
```

## Latest UI notes

- Participant-facing clue pages do not show source/reliability metadata.
- `clue_sources.json` still stores source, reliability, score, and lean for inspection.
- When the human and AI initially choose the same door, the interface says their judgments agree rather than saying the AI trusts the human.
