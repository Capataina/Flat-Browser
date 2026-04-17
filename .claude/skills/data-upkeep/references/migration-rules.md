# Migration Rules — apply vs flag

When the orchestrator's Phase 3 reads each `proposals/<operator-slug>.md` file, it decides per-change whether to apply directly or flag for user confirmation. This reference is the decision tree.

---

## Default: apply

Most field-level changes from agent proposals should apply directly. The research was done against primary sources, the proposal cites URLs, and the change is a field-level write with no cascading side-effects.

Applies without confirmation:

- Any `unknown` → definitive value change (agent researched a field that was blank)
- Any `unclear` → definitive value change (agent resolved an ambiguity from a previous run)
- `unknown` → `unclear` transition (agent researched, couldn't determine)
- `research_status: "partial"` → `"complete"` when all fields have definitive or `unclear` values
- Pricing updates when the agent cites the operator's rental page
- Source URL additions to `sources` array
- Narrative `notes` rewrites

---

## Gate: user confirmation required

Some changes require explicit user approval before applying. These fall into five categories:

### Category 1 — Ghost-project deletions

See `ghost-project-detection.md` for full methodology. Deletions cascade into area-level references and potentially affect grades. Never auto-delete.

Prompt shape:

> Agent flagged: "<project-name>" (area: <area-slug>)
> Category: A (true ghost) / B (wrong operator) / C (defunct operator) / D (rebranded)
> Evidence: <agent's citations>
> Blast radius: <N references across <list of files>>
> Grade impact: <potential — details>
>
> Apply agent's proposal? [delete / correct / mark-unclear / skip]

### Category 2 — State-change overrides

When the proposal would change a previously-authored explicit state:

- Previously `grad_visa_realism: "blocked"` → research now shows pathway available
- Previously `grad_visa_realism: "unlikely"` → research now shows pathway available
- Previously any explicit state → proposal would regress to `"unclear"` or `"unknown"`

These are the cases `deriveRealism(pathways, preserved)` is designed for — preserve the explicit state unless the user confirms a regime change.

Prompt shape:

> "<project-name>" was previously "blocked" (authored <date>, reason: "<notes snippet>")
> Agent's current research suggests: <new verdict with evidence>
> Confirm policy-change flip? [apply / keep-blocked / mark-unclear]

### Category 3 — Conflicting multi-operator signals

When two agents researching different operators produce inconsistent answers about the same third-party tool (e.g. one agent says "Homeppl accepts Open Banking for savings route", another says "Homeppl does not support savings for internationals") — the orchestrator needs to resolve. This shouldn't happen often because third-party tool facts are shared, but when it does, present the conflict to the user.

Prompt shape:

> Agent A (researching <operator-1>) claims: <position 1>
> Agent B (researching <operator-2>) claims: <position 2>
> Both cite: <sources>
>
> Which to apply? [A / B / both inconsistent — mark related fields as unclear / skip]

### Category 4 — Cross-operator operator-wide changes

When research surfaces information that affects every project of a given operator, but the operator's policies differ from what's currently in the dataset by a large margin (e.g. "Grainger now accepts guarantors for everything" when previously all Grainger projects were `"blocked"`), the cascade is large. Surface for confirmation before applying to all ~N buildings of that operator.

Prompt shape:

> Operator <operator> policy shift detected. Currently:
> - <X> projects with grad_visa_realism: "<old>"
> Proposal:
> - All <X> projects → new structural facts + new derived realism "<new>"
> Apply to all? [yes / preview diff first / skip]

### Category 5 — Apparently-wrong data outside the invoked scope

If research surfaces information that contradicts a field the current invocation isn't authorised to modify (e.g. a `--qualification-only` run surfaces a wrong `amenities.gym` value), the skill does NOT modify the out-of-scope field — but it flags in the report so the next invocation catches it.

Do NOT prompt the user during a run for out-of-scope issues. Collect them and put them in the Phase 6 run report under "Out-of-scope findings — queue for next pass with appropriate flags".

### Category 6 — Reattribution proposals

When an agent proposes changing an operator (e.g. Newfoundland from EcoWorld Ballymore → Vertus), this is a Category-B ghost flag handled via the reattribution workflow in `ghost-project-detection.md`. User confirmation required. Not auto-apply.

### Category 7 — Missing-project additions

When an agent proposes adding a building currently missing from the dataset (e.g. Fizzy Walthamstow), user confirmation required. Not auto-apply.

### Category 8 — Grade recalibration (V3)

Any change to `evaluation.*` fields — project or area — is V3 scope and runs as an orchestrator-only pass after V1/V2/V4 research is applied. Grade recalibration is **never** applied in the same invocation as the underlying research it depends on. The agent-proposal loop produces the structured facts; a subsequent orchestrator-only pass consumes those facts to recompute grades.

Grade changes always go through the preserved-state gate documented in `grade-recalibration.md` — authored grades with explicit rationale in `grade_reasoning` are preserved, not overwritten.

---

## Safety stops

Hard rules that abort the apply phase entirely:

1. **TypeScript compilation fails.** Run `pnpm exec tsc --noEmit` after any batch of changes. If compilation breaks, stop and report. The user reverts or fixes before continuing.

2. **Validation script fails.** Run `pnpm exec tsx scripts/validate-areas.ts` as the final gate. Structural integrity must hold.

3. **File would become empty or malformed.** If applying a ghost-project deletion would leave an area file with no projects and broken syntax, stop and report.

4. **Proposal references a project ID that doesn't exist.** Agent may have invented an ID. Skip that proposal, log as error.

5. **URL in proposal's sources is malformed** (not http/https, or empty). Reject the whole proposal, request agent re-run.

6. **Distribution gate (relative fields).** After Cross-Batch Review, if any relative field collapses to ≤2 enum values across the whole dataset, abort the apply phase. Example: after a full run, if every project is tagged `affordability: "comfortably-affordable"` or `"at-budget"` (no `well-under-budget`, no `over-budget` values), the calibration is degenerate. Same rule for `cost_tier`, `credit_check`, `gym_quality`, and project/area `overall_grade` in V3.

7. **Missing comparable citations.** Proposals for relative fields (`affordability`, `cost_tier`, `credit_check`, quality ratings, grades) must cite named comparables from the dataset. Proposals without comparables are rejected — the agent re-runs with a comparables block injected.

---

## Cross-Batch Review — the relativity gate

After Phase 2 (Research) and before Phase 3 (Apply), the orchestrator runs a Cross-Batch Review pass over every proposal:

### Step 1 — Aggregate proposals

Load every `proposals/*.md` file. Build a flat table of proposed values per relative field per project.

### Step 2 — Check per-agent distributions

For each agent's batch of proposals, check the distribution of relative-field values. Flag agents whose proposals collapse to one tier:

> Agent 7 tagged 12 of 12 projects in batch as `credit_check: "standard"`. No `"lenient"` or `"strict"` values surfaced. Re-dispatch with comparables block to force calibration?

### Step 3 — Check cross-agent consistency

For the same operator researched by multiple agents (via shuffled batches in re-run mode), check whether relative-field proposals agree. Divergence is a calibration signal:

> Agent A tagged Quintain Ferrum as `affordability: "comfortably-affordable"`
> Agent B (from re-run with seed 7) tagged Quintain Ferrum as `affordability: "at-budget"`
> Both agents cited pricing of £1,829 studio. Reconcile → `"at-budget"` is closer to the envelope given the no-bills pricing; accept B.

### Step 4 — Check dataset-wide distribution

After reconciliation, compute the full-dataset distribution for each relative field. Flag if:
- Any enum value has 0 projects
- Any enum value has >60% of the dataset
- Grade distribution lacks both SS and F (violates the relative-grading principle's "full range must be used" rule)

### Step 5 — Decision

If distributions pass: proceed to Phase 3 Apply.

If distributions fail: either (a) re-dispatch problematic batches with stronger comparables injection, or (b) escalate to user with the distribution report and the agent proposals side-by-side.

The Cross-Batch Review is the load-bearing mechanism for true relative calibration. Skip it and the dataset drifts toward "everything is B-grade, everything is mid-range, everything is affordable" — the exact failure mode the 2026-04 sweep produced.

---

## Dry-run mode

When invoked with `--dry-run`, the orchestrator runs Phase 1 + Phase 2 as normal, but Phase 3 is replaced with a **preview diff** — for each proposal, show what would be changed without making any file edits.

Useful for sanity-checking research before committing to a full apply pass, or for seeing what's about to change on a large operator batch.

---

## Re-run semantics

When the skill is re-invoked (e.g. quarterly refresh, or after a single operator has publicised a policy change):

- **Existing operator findings in `context/data-upkeep/operators/<slug>.md` are preserved** — they are durable across runs.
- **Phase 2 agents re-research only if:** (a) the findings file is older than 6 months, (b) the agent detects a policy-change signal in press/blog, or (c) the scope flag `--force-refresh` was passed.
- **Otherwise** the agent skips re-research, uses the existing findings, and only re-runs the apply phase with current pathway-derivation rules. This handles "Caner's profile changed, re-derive realism" without wasting research budget.

---

## Source URL requirements

Every field value the skill applies (except inferred defaults) must be traceable to a URL in the proposal's `sources` list. If a proposal has a field value without a source URL:

- If the field's value rule allows inference (e.g. `upfront_rent_policy: "one-month-ast-cap"` inferred from `agreement_type: "ast"`), mark it as inferred in the proposal's narrative.
- Otherwise, reject that field from the proposal — downgrade it to `"unclear"` with a note "missing source citation".

This is the rule that prevents agents from confabulating plausible-sounding values. If they can't cite it, they don't know it.

---

## Commit discipline

After a successful Phase 3 apply:

1. Run `pnpm exec tsc --noEmit` — must pass
2. Run `pnpm exec tsx scripts/validate-areas.ts` — must pass
3. Commit with structured message:
   ```
   data-upkeep run <YYYY-MM-DD>: <N> operators, <M> projects

   - Operators researched: <list>
   - Fields populated: <aggregate counts by field>
   - Ghost projects removed: <list>
   - State changes flipped: <list>
   - Realism distribution:
     - achievable: <N>
     - achievable-with-guarantor: <N>
     - licence-exempt: <N>
     - unlikely: <N>
     - blocked: <N>
     - unclear: <N>
     - unknown: <N>

   Full run report: context/data-upkeep/runs/<date>.md
   ```

Do NOT push — push decisions are always the user's.

---

## When in doubt

The skill's ordering of preferences when ambiguity arises:

1. **User trust over speed.** A pause to confirm is cheaper than a silent wrong edit.
2. **Field-level honesty over coverage.** `"unclear"` is a legitimate answer; silent wrong values are not.
3. **Data integrity over completeness.** Leave a field at `"unknown"` rather than filling it with a guess.
4. **Cascading-change caution.** Ghost-project deletions, operator-wide policy flips, state overrides — all gated behind user confirmation. The cost of a wrong apply is far higher than the cost of a pause.
