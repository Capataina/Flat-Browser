# Agent 15 — Discovery: Excluded Areas Reconsideration

**Type**: Discovery + research agent. Returns a comprehensive research file from a "what was excluded, and was that right?" angle, contributing to the post-sweep consensus pool alongside the 10 focus agents. Your file must include both a Discoveries section (excluded areas that genuinely deserve reconsideration) and a Research section (existing candidate areas analysed through the "was the exclusion calibration calibrated correctly?" lens).

**Focus**: Challenge the exclusions in `context/references/candidate-areas.md`. The "Areas explicitly excluded from the sweep" list was written by a single AI based on default assumptions ("not the kind of upgrade Caner is looking for"). Some of those exclusions may be wrong. This agent's job is to push back honestly — and also to re-examine the existing candidates for cases where the borderline call might have gone the other way. This agent's contribution to the consensus pool is calibration honesty on exclusion and inclusion decisions.

**Scope**: Two parts.

1. **Excluded areas** — every area in the `candidate-areas.md` "Areas explicitly excluded from the sweep" list, except Croydon itself, anything outside the M25, and Cambridge. These are your discovery targets.
2. **Existing candidate areas** — all ~95 candidates, examined through the angle of "was the inclusion call calibrated right, or is this area a borderline case that deserves the excluded-angle scepticism?" You cover breadth here too, feeding the consensus pool with an honest calibration view.

**Bias toward**:
- Honest reconsideration rather than rubber-stamping the exclusion list
- Elizabeth Line connectivity as a decisive calibration factor — Romford, Ilford, Hayes, Southall have had a step-change since 2022 that older assumptions may not have caught
- Specific evidence of post-2022 change: planning approvals, BTR launches, crime-data improvements, transport upgrades
- Calibration honesty: if you find 0 strong reconsiderations, say so — that confirms the exclusions were correct and is a valid output

---

## The exclusion list to reconsider

From `context/references/candidate-areas.md` § "Areas explicitly excluded from the sweep":

1. **Croydon (any sub-area)** — East Croydon, West Croydon, Norbury, Thornton Heath, Selhurst, South Norwood, Addiscombe, Purley, etc. **DO NOT reconsider Croydon sub-areas** — the whole project is about escaping Croydon. This is the only absolute exclusion.
2. **New Addington**
3. **Beckenham, West Wickham, Chislehurst**
4. **Cambridge** (out of scope per Decision 11 — do not reconsider)
5. **Anywhere outside the M25** (do not reconsider)
6. **Watford / Harrow** (outer Zone 7+)
7. **Romford / Ilford / Barking / Dagenham** (outer east)
8. **Sutton / Mitcham / Morden** (south-west outer, near-Croydon)

Plus think about other plausible exclusions that may have been made by accident — areas that weren't even considered for the candidate list because they didn't come to mind.

---

## What counts as a reconsider-worthy discovery

For each excluded area, ask:
1. Does it pass T1.1 (safer than Croydon)? — most won't, but some might
2. Does it have any modern rental stock (T1.2)? — some outer areas have BTR
3. Is it meaningfully connected to central London (T1.3)? — Harrow has Metropolitan, Romford has Elizabeth Line, etc.
4. Has it changed significantly in the last 5 years in a way that makes the exclusion outdated?

A **strong reconsideration** is an excluded area where the answer to ≥3 of those is yes. A **weak reconsideration** is one where only 1–2 are yes — mention it but do not propose.

**Example of a strong reconsideration**: "Romford is excluded as 'outer east' but the Elizabeth Line at Romford station puts Liverpool Street at 18 minutes (TfL source), and Be Living's BTR launch at Romford Wharf [URL] delivered 2024 with central referencing. The exclusion was based on outdated assumptions — Romford post-Crossrail is meaningfully different from Romford in 2018."

**Example of a weak reconsideration**: "Sutton has trains to central London." — true of every London suburb, does not address the upgrade-from-Croydon question.

---

**Output format**: ONE file at `docs/research/sweep/sweep-15-discovery-excluded-reconsider.md`, 500–1000 lines, organised with the structure below. Dual-mode file: research on existing candidates (from a calibration lens) plus discoveries of excluded areas that deserve reconsideration.

```
# Sweep agent 15 — Discovery: Excluded Areas Reconsideration
Research date: YYYY-MM-DD
Exclusions reviewed: N
Candidate areas re-examined: N
Strong reconsiderations proposed: N

## Methodology
[3–5 sentences on how you approached the exclusion list, what evidence
thresholds you used, how you handled the calibration lens on existing
candidates.]

## Research from my angle — existing candidate areas (calibration lens)

### <area-slug-1> — <Area name>

#### Inclusion calibration
[Is this area a borderline case? Would the exclusion angle dismiss it on
similar grounds to how it dismissed Romford or Ilford? If yes, what's the
counter-evidence that justifies inclusion? Force yourself to argue the
"should this have been excluded" case honestly, then argue back.]

#### T1 pass call from the sceptic angle
[T1.1 / T1.2 / T1.3 pass or fail from a harsh-calibration stance. Feeds
into agent 01's consensus pool as a dissenting voice where appropriate.]

#### Sources for this area
- [URL]

### <area-slug-2> — <Area name>
[...same structure...]

## Excluded areas — strong reconsiderations (proposing addition to candidate list)

### <Area name>
- Original exclusion bucket: <bucket from candidate-areas.md>
- Why the exclusion may be wrong: <2-3 sentences>
- Evidence: <bullet list with sources>
- T1.1 (safer than Croydon): <pass / partial / fail>
- T1.2 (modern rental stock): <pass / partial / fail>
- T1.3 (connectivity): <pass / partial / fail>
- Suggested initial grade prior: <C / B / unknown>

## Excluded areas — weak reconsiderations (mentioned but not proposed)

- <area>: <one-line note explaining why the case is weak>

## Excluded areas — exclusions confirmed correct (after review)

- <area>: <one-line confirmation with reasoning>

## Cross-cutting findings
[Calibration patterns: are the exclusions systematically over-dismissive of
Elizabeth Line areas? Are they under-weighting post-2022 BTR launches? These
calibration findings feed into agents 01, 07, and 08's consensus pools.]

## Open questions
[Exclusions where you couldn't reach a confident call, borderline candidates
where the calibration is genuinely ambiguous.]
```

---

## What NOT to do

- **Do NOT skip the research section** in favour of only doing discoveries. The new consensus model requires both — your calibration-sceptic angle on existing candidates is valuable even when you haven't found any reconsideration-worthy exclusions.
- **Do NOT propose Croydon itself or any Croydon sub-area.** The whole project is about escaping Croydon. The Croydon exclusion is the only one that is truly absolute.
- **Do NOT propose anywhere outside the M25.** That exclusion is genuinely out of scope.
- **Do NOT propose Cambridge.** Decision 11 explicitly says Cambridge is not in scope for this dataset.
- **Do NOT propose marginal cases just to fill the proposal count.** Quality over quantity. A single strong reconsideration is worth more than 10 weak ones. A clean "0 reconsiderations — exclusions confirmed" is a valid and valuable output.

---

## Special instruction

This agent's job is genuinely to push back. The exclusions were made by the same AI that wrote the candidate list, with limited evidence. If a reconsideration produces 0 strong proposals, that's a valid output — it confirms the exclusions were correct. If it produces 1–2 strong proposals, that's the highest-value outcome because it surfaces blind spots. More than 5 strong proposals would suggest the original exclusion list was fundamentally wrong, and you should say so explicitly in cross-cutting findings.

The Elizabeth Line is the single biggest reason to reconsider exclusions. Anywhere on the Elizabeth Line (Romford, Ilford, Hayes, Southall) has had a step-change in connectivity since 2022 that older assumptions about "outer east" or "outer west" haven't caught up to. Weight that connectivity change heavily when assessing the calibration.
