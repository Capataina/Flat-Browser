# Agent 15 — Discovery: Excluded Areas Reconsideration

**Type**: Discovery agent. Returns *proposals*, not finished Area entries.

**Focus**: Push back on the exclusions in `context/references/candidate-areas.md`. The "Areas explicitly excluded from the sweep" list was written by a single AI based on default assumptions ("not the kind of upgrade Caner is looking for"). Some of those exclusions may be wrong. This agent's job is to challenge them.

**Primary scope**: ONLY the explicitly-excluded areas in `candidate-areas.md`. Do not reconsider anything that's already in the candidate list — it's already being researched.

**Bias toward**: Honest reconsideration of areas that were dismissed by default. The question is: "Could any of the excluded areas actually be a meaningful upgrade from Croydon for Caner?"

---

## The exclusion list to reconsider

From `context/references/candidate-areas.md` § "Areas explicitly excluded from the sweep":

1. **Croydon (any sub-area)** — East Croydon, West Croydon, Norbury, Thornton Heath, Selhurst, South Norwood, Addiscombe, Purley, etc.
2. **New Addington**
3. **Beckenham, West Wickham, Chislehurst**
4. **Cambridge** (out of scope per Decision 11)
5. **Anywhere outside the M25**
6. **Watford / Harrow** (outer Zone 7+)
7. **Romford / Ilford / Barking / Dagenham** (outer east)
8. **Sutton / Mitcham / Morden** (south-west outer, near-Croydon)

Plus think about other plausible exclusions I might have made by accident — areas that I didn't even consider mentioning because they didn't come to mind.

---

## What counts as a reconsider-worthy discovery

For each excluded area, ask:
1. Does it pass T1.1 (safer than Croydon)? — most won't, but some might
2. Does it have any modern rental stock (T1.2)? — some outer areas have BTR
3. Is it meaningfully connected to central London (T1.3)? — Harrow has Metropolitan, Romford has Elizabeth Line, etc.
4. Has it changed significantly in the last 5 years in a way that makes the exclusion outdated?

A discovery is an excluded area where the answer to ≥3 of those is yes.

For each reconsidered area, the proposal must include:
- Name
- Why it was excluded originally (cite the exclusion bucket)
- Why the exclusion may be wrong now
- Specific evidence that supports reconsideration (planning approval, BTR launch, crime data improvement, transport upgrade)
- Source URL
- Suggested primary focus from agents 1-10
- Initial grade prior: realistically C unless there's a strong case for B+

**Example of a strong reconsideration**: "Romford is excluded as 'outer east' but the Elizabeth Line at Romford station puts Liverpool Street at 18 minutes (TfL source), and Be Living's BTR launch at Romford Wharf [URL] delivered 2024 with central referencing. The exclusion was based on outdated assumptions — Romford post-Crossrail is meaningfully different from Romford in 2018."

**Example of a weak reconsideration**: "Sutton has trains to central London." — this is true of every London suburb and doesn't address the upgrade-from-Croydon question.

---

## What NOT to do

- Do NOT propose Croydon itself or any Croydon sub-area. The whole point of the project is escaping Croydon. The Croydon exclusion is the only one that's truly absolute.
- Do NOT propose anywhere outside the M25. That exclusion is genuinely out of scope.
- Do NOT propose Cambridge. Decision 11 explicitly says Cambridge is not in scope for this dataset.
- Do NOT propose marginal cases just to fill the proposal count. Quality over quantity. A single strong reconsideration is worth more than 10 weak ones.

---

## Output format

Write to `docs/research/sweep-discovery-excluded-reconsider/proposals.md`:

```markdown
# Discovery Sweep — Excluded Areas Reconsideration
Date: <YYYY-MM-DD>
Exclusions reviewed: <count>
Reconsiderations proposed: <count>

## Strong reconsiderations (proposing addition to candidate list)

### <Area name>
- Original exclusion bucket: <bucket from candidate-areas.md>
- Why the exclusion may be wrong: <2-3 sentences>
- Evidence: <bullet list with sources>
- T1.1 (safer than Croydon): <pass / partial / fail>
- T1.2 (modern rental stock): <pass / partial / fail>
- T1.3 (connectivity): <pass / partial / fail>
- Suggested primary focus: <agent>
- Initial grade prior: <C / B / unknown>

## Weak reconsiderations (mentioning but not proposing)

- <area>: <one-line note explaining why the case is weak>

## Exclusions confirmed correct (after review)

- <area>: <one-line confirmation>

## Open questions

- <anything>
```

---

## Special instruction

This agent's job is genuinely to push back. The exclusions were made by the same AI that wrote the candidate list, with limited evidence. If a reconsideration produces 0 proposals, that's a valid output — it confirms the exclusions were correct. If it produces 1-2 strong proposals, that's the highest-value outcome because it surfaces blind spots. More than 5 strong proposals would suggest the original exclusion list was fundamentally wrong.

The Elizabeth Line is the single biggest reason to reconsider exclusions. Anywhere on the Elizabeth Line (Romford, Ilford, Hayes, Southall) has had a step-change in connectivity since 2022 that older assumptions about "outer east" or "outer west" haven't caught up to.
