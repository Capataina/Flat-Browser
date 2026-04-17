# Plan: Data-Upkeep Skill

Active plan. Authored 2026-04-16 after the realism schema redesign landed (see `realism-redesign-and-project-view.md`). Updated 2026-04-16 after the V1 run to consolidate V2/V3/V4 into a single skill with flag-driven scope rather than separate skill versions.

The qualification schema defines 12 researchable fields + a derived realism pathway array per project. V1 populated these across all 266 projects. V2/V3/V4 extend coverage to the rest of the schema (enrichment, area-level, grades) — all under the same `/data-upkeep` invocation.

This plan supersedes the original design brief at `context/notes/data-upkeep-skill.md` (2026-04-12) — that brief described a "full census" skill across every field in every project. The final scope is: one skill, four versions of expanding scope, invoked via flags.

---

## Goal

Make `/data-upkeep` a repeatable, operator-batched research pass that populates the qualification block across all 267 Flatbrowser projects. After a full run, the user should be able to:

1. Open Flatbrowser
2. Toggle to project view
3. Filter by `"Achievable"` + `"Achievable-with-guarantor"` + `"Licence-exempt"`
4. See a trustworthy, source-cited, complete list of the projects worth emailing

The derived `grad_visa_realism` tag drives the UI filter. The underlying 12 structural fields + `realism_pathways` array carry the reasoning. The skill writes both.

---

## V1 scope (building now)

**Fills every field in the qualification block** across all 267 projects:

- `agreement_type` — AST / licence / unclear / unknown
- `referencing_provider` — Homeppl / Goodlord / Canopy / in-house / none / unclear / unknown
- `min_tenancy_months`
- `income_multiple`
- `open_banking_accepted` — yes / no / unclear / unknown
- `upfront_rent_policy` — multi-month-available / one-month-ast-cap / rejected / unclear / unknown
- `accepts_professional_guarantor` — yes / no / unclear / unknown
- `accepts_individual_overseas_guarantor` — yes / no / unclear / unknown
- `credit_check` — strict / standard / lenient / unclear / unknown
- `international_tenant_policy` — welcomed / case-by-case / discouraged / rejected / unclear / unknown
- `visa_expiry_handling` — ignored / tenancy-shortened / rejected / unclear / unknown
- `qualification_flexibility_signal` — flexible / standard / rigid / unclear / unknown
- `realism_pathways` (derived from the above + Caner's profile)
- `grad_visa_realism` (derived via `deriveRealism()` helper)
- `research_status` — set to `"complete"` or `"partial"`
- `notes` — 2-3 sentence narrative summary
- `sources` — URL citations for every non-inferred field

**Covers pricing as a free side-effect** (agent is already on the operator's website):

- `studio`, `one_bed`, `two_bed` price bands
- `bills_included`
- `cost_tier` (derived arithmetic from price)
- `price_transparency` — listed / enquire / unknown (observable by looking at the page)
- `prices.notes`

**Also performs ghost-project / wrong-operator checks** — flags any project where the named operator doesn't list the building in their portfolio. These are surfaced for user confirmation before any deletion.

**Does NOT touch** in v1:
- Amenity inventory, building quality, architecture, resident signal
- Grade recalibration (relative or absolute) — SS/S/A/B/C/F values stay as-is
- Connectivity, regeneration, demographics, safety (area-level fields)
- Long-form prose fact-checking
- External URL rot checks
- Cross-dataset deduplication

---

## Phased trajectory — one skill, flag-driven scope

All four scope levels live inside the same `.claude/skills/data-upkeep/` skill. `SKILL.md` frontmatter declares `version: 4` and invocation flags select the active scope.

| Scope | Flag | What it populates | When to invoke |
|---|---|---|---|
| **V1** | `--qualification-only` | Qualification block (12 fields) + pricing + ghost-project checks + affordability proposals | Quick trust refresh on qualification-only data |
| **V2** | `--enrichment-only` | Building quality + amenities + architecture + resident signal + per-project pricing + affordability | After V1 is trusted, enrich projects for the project modal UI |
| **V3** | `--recalibrate` | Grade recomputation (project T2.6/T4.1/T4.4, area T1/T2/T3/T5) + cost_tier recomputation | After V2 + V4 research applied. Needs populated data to synthesise. |
| **V4** | `--area-research` | Area long-form + connectivity + demographics + safety + green/water + area amenities + regeneration | Area-level refresh. Different sources than V1/V2 (ONS, TfL, Met Police, GLA) |
| **Full** | `--full` (default) | All of the above in phased order: Research (V1+V2+V4 parallel) → Cross-Batch Review → Apply → Recalibrate (V3) | Periodic full refresh, quarterly or on major dataset shifts |

The skill is invocation-flag-driven so the user can run any combination without re-scaffolding. Scope overlaps are handled cleanly: `--operators quintain-living` runs V1+V2 on that operator only; `--areas kings-cross` runs V4 on that area only.

---

## Relativity mechanisms

Added 2026-04-16 after the V1 run surfaced calibration-drift risk. Five mechanisms baked into the skill:

| Mechanism | Implementation |
|---|---|
| **Comparables injection** | Every agent prompt includes 5-8 named comparables per relative field pulled from the current dataset state. Agents cite these in proposal reasoning. |
| **Shuffled batches on re-runs** | `enumerate-operators.ts` + `enumerate-areas.ts` both support `--seed N`. Different seeds produce different batch compositions, forcing cross-calibration on re-runs. |
| **Cross-Batch Review** | New Phase 3 (between Research and Apply). Orchestrator aggregates proposals, checks per-agent distributions, reconciles cross-agent divergence, verifies full-range usage, re-dispatches weak batches. |
| **Distribution gates** | Apply phase refuses if any relative field collapses to 1-2 values across the dataset. Grade range must use SS→F. Affordability range must use well-under-budget → over-budget. |
| **Explicit comparable citations required** | Relative-field proposals without named-comparable citations are rejected at the Cross-Batch Review gate — agent re-runs with stronger comparables injection. |

These are load-bearing for true relative grading. Without them, the skill produces systematic bias — "everything is affordable, everything is B-grade" — exactly the 2026-04 sweep failure mode.

---

## Locked design decisions

| # | Decision | Rationale |
|---|---|---|
| 1 | **Partition by operator, not by project.** | Proven pattern from the 2026-04-16 shortlist research round. One "Quintain Living" research pass covers ~10 buildings with identical policies; project-level research would pay the same cost 10× and produce inconsistent answers. ~5× cheaper in tokens. |
| 2 | **Hybrid orchestration** — agents write proposal markdown to `context/data-upkeep/operators/<slug>.md`; orchestrator (Claude running the skill) reads them all, applies changes via `Edit`. | Combines Model B's durability (survives crashes, human-reviewable intermediate state) with Model A's safety (single writer, no merge conflicts). The three-model trade-off was explored in the 2026-04-12 brief. |
| 3 | **Pause between research phase and apply phase.** | The review gate is cheap; blast radius of a bad apply is large. User confirms before any source file is touched. |
| 4 | **Ghost projects: flag + ask, never auto-delete.** | Ghost-project deletions cascade into area-grade reassessments (Wimbledon went B→C after removing Essential Living in the 2026-04-12 pass). User decides. |
| 5 | **Every non-inferred field value must cite a URL.** If the agent can't cite a source, the field is `"unclear"`, not `"unknown"`. | Distinguishes "researched, couldn't determine" from "not yet researched." The research queue depends on this distinction. |
| 6 | **Research depth: deep (~20-50k tokens per operator).** | Operators rarely publish qualification policies clearly. Shallow research returns mostly `unclear`. The 2026-04-16 D1 round proved deep research is the working methodology. |
| 7 | **Location: `.claude/skills/data-upkeep/`** (project-local, auto-discovered as `/data-upkeep`). | Standard Claude Code convention for project-local skills. Keeps the skill visible only in this repo. |
| 8 | **Write-only this session. Don't trigger a first run.** | The first run will take ~2-3 hours and produce a large diff. Running it is a separate decision made with the plan visible. |
| 9 | **Scope flags for targeted runs.** `--operators quintain-living,folk` re-researches specific operators without touching the rest. | Useful for policy-change re-checks (e.g. when Homeppl rolls out a new Co-Signer variant) — re-running the whole thing would waste tokens. |
| 10 | **Realism derivation uses Caner's profile directly.** | The pathway array reflects pathways that work *for Caner* — not pathways that work in general. If the profile changes (e.g. Caner lands a job → `has_uk_payslips: true`), a re-run rederives pathways without the underlying operator facts changing. |

---

## Skill file structure

```
.claude/skills/data-upkeep/
├── SKILL.md                             -- v4 orchestration prompt — 6 phases, 2 tracks, 4 scope flags
├── references/
│   ├── qualification-schema.md          -- V1: the 12 qualification fields + pricing + derived state
│   ├── enrichment-schema.md             -- V2: building_quality + amenities + architecture + resident_signal + affordability
│   ├── area-research-schema.md          -- V4: area-level fields + canonical sources
│   ├── grade-recalibration.md           -- V3: orchestrator-only grade + cost_tier recomputation
│   ├── operator-research-playbook.md    -- how to research an operator (V1+V2 scope + relativity)
│   ├── area-research-playbook.md        -- how to research an area (V4 scope + ONS/TfL/Met/GLA)
│   ├── ghost-project-detection.md       -- ghost delete + reattribution + missing-project addition
│   ├── realism-pathway-derivation.md    -- pathway rules for Caner's profile
│   └── migration-rules.md               -- apply vs flag + Cross-Batch Review + distribution gates
└── scripts/
    ├── enumerate-operators.ts           -- pre-flight: groups by operator, --seed support
    └── enumerate-areas.ts               -- pre-flight: partitions 55 areas, --seed support
```

---

## Output structure per run

All writes go to `context/data-upkeep/`:

```
context/data-upkeep/
├── batches/
│   └── batch-NN-<ops>.md                 -- dispatch manifests (Phase 1 output)
├── operators/
│   └── <operator-slug>.md                -- per-operator research findings (Phase 2, durable)
├── proposals/
│   └── <operator-slug>.md                -- field-level change proposals (Phase 2)
└── runs/
    └── <YYYY-MM-DD>-<scope>.md           -- run summary: changes applied, flags, next steps
```

Operator findings are durable across runs — the next run reads existing findings, re-researches only where policy-change signals appear or where findings are older than a threshold.

---

## Phased execution

### Phase 1 — Discovery (orchestrator)
1. Run `scripts/enumerate-operators.ts` — outputs `operator → [project ids]` grouping
2. Partition into ~15 batches, ~4-5 operators per batch
3. Write batch manifests to `context/data-upkeep/batches/batch-NN.md`

### Phase 2 — Research (parallel sub-agents)
1. Dispatch ~15 sub-agents via the `Agent` tool
2. Each agent reads: its batch manifest + `references/operator-research-playbook.md` + `references/qualification-schema.md` + `references/ghost-project-detection.md`
3. Each agent writes findings to `context/data-upkeep/operators/<slug>.md` + proposals to `context/data-upkeep/proposals/<slug>.md`

### Pause point
- User reviews operator findings
- Can cancel, edit findings, or proceed

### Phase 3 — Apply (orchestrator)
1. Read all proposals
2. Flag ghost projects — ask user before deleting
3. Apply field-level changes via `Edit` / `MultiEdit` to `src/areas/data/<slug>.ts`
4. Re-derive `realism_pathways` + `grad_visa_realism` using the helper
5. Set `research_status` per project
6. Run `pnpm exec tsc --noEmit` + `pnpm exec tsx scripts/validate-areas.ts` as the final gate

### Phase 4 — Report
1. Write `context/data-upkeep/runs/<date>.md` summarising changes, flags, next steps
2. Update the plan file if v1 is the last outstanding task

---

## Tasks

### V1 — shipped 2026-04-16

- [x] `.claude/skills/data-upkeep/SKILL.md`
- [x] `references/qualification-schema.md`
- [x] `references/operator-research-playbook.md`
- [x] `references/ghost-project-detection.md`
- [x] `references/realism-pathway-derivation.md`
- [x] `references/migration-rules.md`
- [x] `scripts/enumerate-operators.ts`
- [x] First run — 266 projects populated across 92 operators (see `context/data-upkeep/runs/2026-04-16-full-v1.md`)

### V2+V3+V4 — scaffolded 2026-04-16

- [x] `references/enrichment-schema.md` — V2 field surface
- [x] `references/area-research-schema.md` — V4 field surface
- [x] `references/area-research-playbook.md` — V4 workflow
- [x] `references/grade-recalibration.md` — V3 algorithm
- [x] `scripts/enumerate-areas.ts` — pre-flight for Track B (area agents)
- [x] `scripts/enumerate-operators.ts` extended with `--seed` for shuffled re-runs
- [x] `references/operator-research-playbook.md` extended with V2 enrichment + affordability + comparables injection
- [x] `references/ghost-project-detection.md` extended with reattribution + missing-project workflows
- [x] `references/migration-rules.md` extended with Cross-Batch Review + distribution gates + new scope categories
- [x] `SKILL.md` rewritten to v4 — 6 phases, 2 tracks, 4 scope flags, relativity mechanisms
- [x] `src/areas/types.ts` — `AffordabilityTag` enum added, `ProjectRental.affordability` required
- [x] `src/areas/labels.ts` — `AFFORDABILITY_LABELS` + descriptions
- [x] `src/explainers/affordability.ts` + registered in index
- [x] `src/components/browser/AffordabilityChip.tsx` + CSS variables + card wiring
- [x] `src/areas/filtering.ts` — `FilterState.affordability` wired
- [x] `browser.module.css` — scale-strip contrast fix

### Not yet run

- [ ] First V2+ run — all 55 areas + enrichment across 266 projects + grade recalibration. ~4-6 hours wall clock, ~5-8M tokens. Separate session decision.
- [ ] V1 backlog resolution (9 ghost/reattribution flags, 6 missing-project additions, 4 operator cascades, per-project pricing refresh) — can run as scoped invocations before or during the full V2+ run.

---

## What "done" looks like

- One `/data-upkeep` skill covers all four scope levels
- `--qualification-only`, `--enrichment-only`, `--area-research`, `--recalibrate`, `--full` all produce the expected scoped output
- `--seed N` produces deterministic shuffled batch compositions
- Relativity mechanisms (comparables + cross-batch review + distribution gates) are documented and enforced
- Affordability field is populated end-to-end (schema → UI) with default `"unclear"` until research lands
- Type-check + validate-areas clean
- Plan file documents the full trajectory in one place
