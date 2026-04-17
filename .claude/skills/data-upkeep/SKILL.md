---
name: data-upkeep
description: "Populates and validates the Flatbrowser dataset end-to-end — qualification block (V1), project enrichment (V2 — building quality, amenities, architecture, resident signal, per-project pricing, affordability), area-level fields (V4 — long-form prose, connectivity, demographics, safety, green/water, area amenities, regeneration), and grade recalibration (V3 — project T2.6/T4.1/T4.4, area T1/T2/T3/T5, cost_tier, overall_grade). Dispatches parallel research agents on two tracks (operators + areas), enforces true relative calibration via comparables injection + shuffled re-runs + cross-batch review + distribution gates, and flags ghost projects / wrong-operator cascades / missing-project additions for user confirmation. One skill, flag-driven scope. Same invocation model as V1; all V1 behaviour preserved under --qualification-only."
version: 4
scope: "qualification + enrichment + area-research + grade-recalibration + ghost/reattribution/adds"
---

# Data Upkeep — V4

Flatbrowser's value proposition is that every project and area carries trustworthy, source-cited data tailored to Caner's situation. This skill is how 266 projects + 55 areas get kept accurate, enriched, and relatively calibrated — at a scale manual editing cannot handle.

**One skill, flag-driven scope.** V1 (qualification + pricing + ghost checks) shipped. V2/V3/V4 extend coverage inside this same skill — invocation flags select the scope of work.

---

## Before anything — read these references

The mandatory core. Read all before Phase 1:

1. **`references/qualification-schema.md`** — the 12 qualification fields + realism pathway derivation. V1 surface.
2. **`references/enrichment-schema.md`** — building quality (7) + amenities (14) + architecture (4) + project long-form (3) + resident signal (5) + per-project pricing + affordability. V2 surface.
3. **`references/area-research-schema.md`** — every area-level field with type and canonical source. V4 surface.
4. **`references/grade-recalibration.md`** — algorithm for project and area grades, preserved-state rules, distribution discipline. V3 surface.
5. **`references/operator-research-playbook.md`** — how to research an operator, now including the V2 enrichment and affordability scope and the relativity/comparables injection pattern.
6. **`references/area-research-playbook.md`** — how to research an area — ONS/TfL/Met/OS/GLA source map, `croydon_comparison` composition.
7. **`references/ghost-project-detection.md`** — ghost deletion + reattribution + missing-project addition workflows.
8. **`references/migration-rules.md`** — apply vs flag per field type; Cross-Batch Review gate; distribution gates.

Also read, outside this skill folder, before any work begins:

- `context/plans/data-upkeep-skill.md` — current plan + scope history.
- `context/plans/realism-redesign-and-project-view.md` — why the qualification schema is shaped this way.
- `context/notes/relative-grading.md` — the single most important grading principle in the project.
- `src/areas/types.ts` — the authoritative TypeScript schema. If this skill's references disagree with types.ts, types.ts wins.
- `src/profile/caner.ts` — the UserProfile that drives realism pathway derivation and the affordability envelope.

---

## Execution model

```
┌─────────────────────────────────────────────────────────────────┐
│ PHASE 1 — Discovery (orchestrator)                              │
│   Enumerate operators (--seed N for shuffled re-runs)           │
│   Enumerate areas (--seed N for shuffled re-runs)               │
│   Partition into batches                                        │
│   Write batch manifests + comparables blocks                    │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│ PHASE 2 — Research (parallel sub-agents, two tracks)            │
│   Track A: operator agents → qualification + enrichment         │
│             + affordability proposals                           │
│   Track B: area agents → area-level fields + croydon_comparison │
│   Each agent: comparables injection, explicit comparable        │
│             citations in proposals                              │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│ PHASE 3 — Cross-Batch Review (orchestrator)                     │
│   Aggregate all proposals                                       │
│   Check per-agent distributions (calibration failure flags)     │
│   Reconcile cross-agent divergence                              │
│   Verify dataset-wide distribution uses full range              │
│   Re-dispatch weak batches OR escalate to user                  │
└─────────────────────────────────────────────────────────────────┘
                            ↓
                    ━━━━━━━━━━━━━━━━━
                    USER REVIEW PAUSE
                    ━━━━━━━━━━━━━━━━━
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│ PHASE 4 — Apply (orchestrator)                                  │
│   Resolve ghost flags (delete / reattribute / keep-unclear)     │
│   Resolve missing-project additions (add / decline)             │
│   Apply field-level edits to src/areas/data/*.ts                │
│   Derive realism_pathways + grad_visa_realism                   │
│   Update research_status + ResearchMeta                         │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│ PHASE 5 — Recalibrate (orchestrator-only, V3 scope)             │
│   Only runs when --recalibrate or --full flag set               │
│   Recompute cost_tier from dataset-wide percentiles             │
│   Recompute project T2.6 / T4.1 / T4.4 + overall_grade          │
│   Recompute area T1 / T2 / T3 / T5 + overall_grade              │
│   Preserve authored explicit grades                             │
│   Distribution gate: refuse if full range not used              │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│ PHASE 6 — Gate + Report                                         │
│   Run tsc --noEmit                                              │
│   Run validate-areas.ts                                         │
│   Run next build                                                │
│   Write runs/<date>.md summary                                  │
│   Surface out-of-scope findings, unclear-state counts,          │
│   follow-up recommendations                                     │
└─────────────────────────────────────────────────────────────────┘
```

---

## Phase 1 — Discovery

Orchestrator work. Produces the batch manifests that Phase 2 agents consume.

### Step 1.1 — Enumerate operators (Track A input)

```bash
# Default deterministic ordering
pnpm exec tsx .claude/skills/data-upkeep/scripts/enumerate-operators.ts --format json > /tmp/operators.json

# Shuffled ordering for re-run calibration
pnpm exec tsx .claude/skills/data-upkeep/scripts/enumerate-operators.ts --seed 7 --format json > /tmp/operators.json
```

Expect ~92 operators across 266 projects (V1 baseline). Secondary-market catch-all (`__secondary__` alias) covers ~60 projects that don't need operator-level research.

### Step 1.2 — Enumerate areas (Track B input)

```bash
pnpm exec tsx .claude/skills/data-upkeep/scripts/enumerate-areas.ts --seed 7 --format json > /tmp/areas.json
```

Output groups 55 areas into ~11 batches of ~5 areas. Freshness metadata flags which area-level fields are unfilled.

### Step 1.3 — Partition into batches

**Track A (operators):** ~10 batches of ~4-5 named operators each, roughly balanced by project count. Prioritise operators with most projects (Quintain, Greystar, Grainger, Fizzy, Folk).

**Track B (areas):** ~11 batches of ~5 areas each. Can balance by regeneration status so each batch has a mix of "complete" and "active" areas (calibration helper).

When invoked with scope flags:
- `--operators quintain-living,folk` → Track A only, scoped
- `--areas kings-cross,wembley-park` → Track B only, scoped
- `--qualification-only` → Track A only, enrichment fields skipped in agent prompts
- `--enrichment-only` → Track A only, qualification assumed current
- `--area-research` → Track B only
- `--recalibrate` → skip research entirely, go straight to Phase 5
- `--full` (default) → both tracks, all phases

### Step 1.4 — Build comparables blocks

For every relative field (`affordability`, `cost_tier`, `credit_check` strictness, `qualification_flexibility_signal`, quality ratings, grades), build a dataset-snapshot comparables table:

```
Affordability — well-under-budget: Fizzy Lewisham (£1,280-£1,450), Node Brixton (£1,675)
Affordability — comfortably-affordable: Quintain Ferrum (£1,829), Folk Florence Dock (£1,695-£1,800)
Affordability — at-budget: ARK Canary Wharf (£2,150), Gravity Co West Hampstead (£2,200)
...
```

Inject into every agent batch manifest. Agents cite against these in their proposals.

### Step 1.5 — Write batch manifests

For each batch, write `context/data-upkeep/batches/<track>-batch-NN-<summary>.md` containing:
- Batch ID + track (operators / areas)
- Entities assigned
- Reference files the agent must read
- Comparables block (relativity anchor)
- Output path spec
- Success criteria

---

## Phase 2 — Research (parallel sub-agents, two tracks)

Orchestrator dispatches via the `Agent` tool, subagent_type `general-purpose`, run_in_background false (parallel within single message).

### Track A — Operator agents

Each agent receives a prompt that:

1. Names its batch manifest
2. Lists required references: `qualification-schema.md`, `enrichment-schema.md`, `operator-research-playbook.md`, `ghost-project-detection.md`, `realism-pathway-derivation.md`
3. Includes the comparables block verbatim
4. Specifies output paths:
   - `context/data-upkeep/operators/<slug>.md` — long-form findings
   - `context/data-upkeep/proposals/<slug>.md` — structured proposals
5. Explicit instructions:
   - Every field value cites a URL; otherwise `"unclear"`
   - Ghost-project detection per `ghost-project-detection.md`
   - Reattribution / missing-project proposals surfaced explicitly
   - Every relative-field proposal cites named comparables from the injected block
   - `affordability` proposed for every project per the envelope rules

### Track B — Area agents

Each agent receives a prompt that:

1. Names its batch manifest
2. Lists required references: `area-research-schema.md`, `area-research-playbook.md`
3. Includes the comparables block for area-level relative fields (area grades, gym coverage, safety tiers)
4. Specifies output paths:
   - `context/data-upkeep/areas/<slug>.md` — long-form research notes
   - `context/data-upkeep/proposals/area-<slug>.md` — structured proposals
5. Explicit instructions:
   - Every structured field cites its canonical source (ONS / TfL / Met Police / etc.)
   - `croydon_comparison` is mandatory and cites specific dimensions
   - Long-form prose covers the full 7-field set (`full`, `history`, `vibe`, `weekday`, `weekend`, `notable`, `croydon_comparison`)

### Success criteria per agent

- Every in-scope field answered (including explicit `"unclear"` where appropriate)
- Every non-inferred value cites a URL
- Every relative field cites named comparables
- Output is mechanically applicable — orchestrator doesn't interpret prose to know what field goes where

---

## Phase 3 — Cross-Batch Review

New orchestrator phase. The relativity gate. See `migration-rules.md` § "Cross-Batch Review" for full detail.

### Step 3.1 — Aggregate proposals

Load every `proposals/*.md`. Build a flat table of proposed values per relative field per entity.

### Step 3.2 — Per-agent distribution check

For each agent's batch, compute the distribution of each relative field. Flag agents whose proposals collapse to one tier ("every project `"standard"` credit check" = calibration failure).

### Step 3.3 — Cross-agent reconciliation

For any entity researched by multiple agents (via shuffled batches on re-runs), check whether relative-field proposals agree. Divergence is reconciled — either converge on the more defensible value with reasoning, or escalate to user.

### Step 3.4 — Dataset-wide distribution check

Compute full-dataset distribution per relative field. Flag if:
- Any enum value has 0 entries
- Any single value has >60% of entries
- Grade distribution doesn't use SS through F

### Step 3.5 — Decision

Pass: proceed to user-review pause, then Phase 4 Apply.

Fail: (a) re-dispatch weak batches with stronger comparables injection, OR (b) escalate to user with a distribution report side-by-side with proposals.

---

## PAUSE POINT — User review

After Cross-Batch Review passes, **do not proceed to Phase 4 without explicit user confirmation**.

Report:
1. Operators researched + projects covered (Track A)
2. Areas researched (Track B)
3. Ghost-project flags raised — enumerated
4. Reattribution proposals raised — enumerated
5. Missing-project additions proposed — enumerated
6. Relative-field distributions (affordability, cost_tier, credit_check, grades)
7. Operators / areas where findings are mostly `"unclear"`
8. Link to `context/data-upkeep/` for review

Ask: **"Proceed to Phase 4 (apply changes)?"**

User may:
- Say yes → Phase 4
- Request specific re-research → loop back to Phase 2 for named batches
- Cancel → findings remain on disk for future runs; skill exits

---

## Phase 4 — Apply

Orchestrator-only edits. Pure write phase.

### Step 4.1 — Resolve ghost / reattribution / addition flags

Surface each flag with prompt per `migration-rules.md`. Apply user's decision:
- Delete + tombstone + blast-radius rewrites (ghost)
- Re-attribute + rewrite references + re-research under new operator (reattribute)
- Add via `buildProject()` + append to area's `projects[]` (addition)
- Keep + mark `"unclear"` with note (defer)

### Step 4.2 — Apply operator proposals

For each operator's proposal file, for each project in the operator's batch:

1. Open `src/areas/data/<area-slug>.ts`
2. Locate the project block
3. Apply each field: qualification, pricing, enrichment (building_quality, amenities, architecture, resident_signal), affordability
4. Compute `realism_pathways` per `realism-pathway-derivation.md`
5. `deriveRealism(pathways, preserved)` → set `grad_visa_realism`
6. Set `research_status` — `"complete"` if every field answered, else `"partial"`
7. Populate `sources` with URLs
8. Replace `notes` with narrative summary
9. Update `research` (ResearchMeta) last_verified

Scope-gated: `--qualification-only` skips enrichment fields, `--enrichment-only` skips qualification fields.

### Step 4.3 — Apply area proposals

For each area's proposal file:

1. Open `src/areas/data/<area-slug>.ts`
2. Apply structured fields: `connectivity`, `demographics`, `safety`, `green_and_water`, area `amenities`, `regeneration`
3. Apply `long_form` prose — `full`, `history`, `vibe`, `weekday`, `weekend`, `notable`, `croydon_comparison`
4. Update area `external_links` additively
5. Update area `research` ResearchMeta

Grade fields (`evaluation.*`) NOT touched in Phase 4 — those belong to Phase 5.

### Step 4.4 — Type-check

```bash
pnpm exec tsc --noEmit
pnpm exec tsx scripts/validate-areas.ts
```

If either fails, stop and report. Do not proceed to Phase 5.

---

## Phase 5 — Recalibrate (V3 scope, orchestrator-only)

Runs only when invocation includes `--recalibrate` or `--full`. No external research. Pure dataset reasoning.

See `grade-recalibration.md` for the full algorithm.

### Step 5.1 — Data-readiness gate

Refuse to recalibrate if:
- Any project's `qualification.research_status !== "complete"` (V1)
- Any project has unpopulated V2 fields (`amenities.overall_tier === "decent"` default everywhere is a red flag — actual research fills in real tiers)
- Any area has unpopulated V4 fields

Report unready entities and suggest the `--operators <list>` / `--areas <list>` re-run to fill gaps first.

### Step 5.2 — Cost tier

Compute cheapest-unit price for every project. Rank. Apply quantile bands:
- 0-20% → `"budget"`
- 20-45% → `"affordable"`
- 45-70% → `"mid-range"`
- 70-90% → `"premium"`
- 90-100% → `"luxury"`

### Step 5.3 — Project grades

For each project, compute T2.6 + T4.1 + T4.4 CriterionScores from V2 fields. Synthesise `overall_grade`. Verify against 2-3 other projects at the candidate grade. Adjust if the comparables don't support the grade.

### Step 5.4 — Area grades

For each area, compute T1 + T2 + T3 + T5 TierEvaluations from V4 fields. Synthesise `overall_grade`. Verify against area comparables.

### Step 5.5 — Preserved-state respect

For any grade with authored `grade_reasoning` citing explicit Caner-profile concerns the algorithm cannot see, preserve rather than overwrite. Flag for user review with proposed-vs-preserved diff.

### Step 5.6 — Distribution gate

Post-recalibration, verify:
- Full SS → F grade range used
- Cost tier distribution matches the quantile shape
- No relative field collapses to one value

If gate fails, refuse to apply — escalate to user with the distribution report.

### Step 5.7 — Apply or escalate

Pass: write the new grades + cost_tier values. Flag any project/area whose grade changed by >1 step for user spot-check.

Fail: write the proposal to `context/data-upkeep/recalibration/<date>.md` and escalate.

---

## Phase 6 — Gate + Report

### Step 6.1 — Full verification

```bash
pnpm exec tsc --noEmit
pnpm exec tsx scripts/validate-areas.ts
pnpm exec next build
```

All three must pass.

### Step 6.2 — Run report

Write `context/data-upkeep/runs/<YYYY-MM-DD>-<scope>.md`:

- Invocation command (full or scoped flags)
- Operators researched (count + list)
- Areas researched (count + list)
- Projects touched (count + list)
- Fields populated (aggregate counts per field name)
- Realism distribution post-run
- Affordability distribution post-run
- Cost tier distribution post-run (if recalibrated)
- Grade distributions — project and area (if recalibrated)
- Ghost projects deleted (list + reasoning)
- Reattributions applied (list)
- Missing projects added (list)
- Cross-batch review reconciliations
- Out-of-scope findings — queue for next pass
- Next-action recommendations

### Step 6.3 — Commit

Structured commit via the merge-protocol pattern:

```
data-upkeep run <date> (<scope>): <N> operators, <M> areas, <K> fields

- Operators: <list>
- Areas: <list>
- Ghosts deleted: <list>
- Reattributions: <list>
- Additions: <list>
- Relativity report: <distribution summary>

Full run report: context/data-upkeep/runs/<date>-<scope>.md
```

Do NOT push.

---

## Invocation

### Default — full run

```
/data-upkeep
```

or explicitly:

```
/data-upkeep --full
```

All ~92 operators + all 55 areas + grade recalibration. ~4-6 hours wall clock. ~5-8M tokens.

### Scoped — specific operators

```
/data-upkeep --operators quintain-living,folk,grainger
```

Only the named operators. Single batch. ~15-30 min. ~300-500k tokens.

### Scoped — specific areas

```
/data-upkeep --areas kings-cross,wembley-park,canada-water
```

Track B only, named areas. ~20-40 min. ~400-700k tokens.

### Scope gates

```
/data-upkeep --qualification-only       # V1 behaviour — qualification + pricing + ghost
/data-upkeep --enrichment-only           # V2 behaviour — amenities + building + resident signal + affordability
/data-upkeep --area-research             # V4 behaviour — area-level fields
/data-upkeep --recalibrate               # V3 behaviour — grade + cost_tier recalibration, no research
```

### Shuffled re-run

```
/data-upkeep --full --seed 7
```

Same scope, different batch compositions. Second pass with a different seed generates cross-calibration signal that the Cross-Batch Review consumes.

### Dry run

```
/data-upkeep --dry-run
```

Phase 1 only. Produces batch manifests. No agent dispatch. Useful for checking which operators/areas would be researched before committing.

### Legacy / equivalence

Every V1 invocation remains valid. `--qualification-only` produces V1-equivalent output. V1 data files are forward-compatible with V4 — the new fields default to safe pre-research states.

---

## Hard rules

1. **Never auto-delete a project.** Ghost deletion, reattribution, and addition all require explicit user confirmation at Phase 4.
2. **Never apply grade changes in the same phase as research.** Research (Phase 4) and recalibration (Phase 5) are separated so grade changes never happen on thin data.
3. **Never skip the Cross-Batch Review (Phase 3).** Distribution gates and comparable reconciliation are load-bearing for true relative calibration.
4. **Never skip the tsc + validate-areas + next build gate** at Phase 6.
5. **Every field value must have a source URL** or carry `"unclear"` / `"unknown"`. Inferred values note the inference in the proposal.
6. **Every relative-field proposal must cite named comparables** from the comparables block. Reject proposals that don't.
7. **Preserve authored explicit states.** `grad_visa_realism: "blocked"` from prior research is preserved unless user confirms override. Same for authored grades with explicit reasoning.
8. **Pause before Phase 4 is non-negotiable.** If user has not confirmed, do not edit source files.
9. **Distribution gate is non-negotiable.** If a relative field collapses to 1-2 values across the dataset, refuse to apply — escalate.
10. **Grade recalibration runs only after research is applied.** A `--recalibrate` invocation without populated V2/V4 data fails the readiness gate and reports, not runs.

---

## What this skill is NOT

- **Not `validate-areas.ts`.** That script checks structural integrity. This skill checks factual integrity + relative calibration.
- **Not `upkeep-context`.** That maintains `context/` documentation. This skill maintains the data layer.
- **Not a one-time migration.** Designed to re-run as policies, prices, and inventory change. Operator and area findings markdown is durable — subsequent runs re-research only where signals appear.
- **Not a grade-assignment tool.** Grade recalibration (V3) recomputes from already-populated structural facts. It doesn't gather new data; it synthesises existing data into grades.
- **Not a research-replacement for user judgement.** The skill surfaces proposals and flags; the user makes every irreversible call (deletes, reattributions, additions, grade flips, distribution-failure decisions).
