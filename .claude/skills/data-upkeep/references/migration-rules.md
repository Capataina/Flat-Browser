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

### Category 5 — Apparently-wrong data outside v1 scope

If research surfaces information that contradicts a field the skill is not authorised to modify (e.g. agent finds a project's `amenities.gym: true` is wrong, the building has no gym), the skill does NOT modify the amenity field — but it should flag in the report for v2 to address.

Do NOT prompt the user during a run for v2-scope issues. Collect them and put them in the Phase 4 run report under "Out-of-scope findings — queue for v2".

---

## Safety stops

Hard rules that abort the apply phase entirely:

1. **TypeScript compilation fails.** Run `pnpm exec tsc --noEmit` after any batch of changes. If compilation breaks, stop and report. The user reverts or fixes before continuing.

2. **Validation script fails.** Run `pnpm exec tsx scripts/validate-areas.ts` as the final gate. Structural integrity must hold.

3. **File would become empty or malformed.** If applying a ghost-project deletion would leave an area file with no projects and broken syntax, stop and report.

4. **Proposal references a project ID that doesn't exist.** Agent may have invented an ID. Skip that proposal, log as error.

5. **URL in proposal's sources is malformed** (not http/https, or empty). Reject the whole proposal, request agent re-run.

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
