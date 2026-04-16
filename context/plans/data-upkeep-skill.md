# Plan: Data-Upkeep Skill

Active plan. Authored 2026-04-16 after the realism schema redesign landed (see `realism-redesign-and-project-view.md`). The new qualification schema defines 12 researchable fields + a derived realism pathway array per project — but 267 projects carry mostly `"unknown"` / `null` values for those fields because the migration preserved existing data without running research. This skill is how that gets populated, systematically, across the entire dataset.

This plan supersedes the original design brief at `context/notes/data-upkeep-skill.md` (2026-04-12) — that brief described a "full census" skill across every field in every project. Scope has narrowed to a phased trajectory: v1 ships a realism-focused pass, and the "full census" ambition moves to v4.

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

## Phased trajectory

| Version | Scope | When |
|---|---|---|
| **V1** | Qualification block + pricing side-effect + ghost-project checks | This session |
| **V2** | Above + building quality, amenity inventory, resident signal | When Caner has used v1 and knows what's missing |
| **V3** | Above + grade recalibration (relative + absolute), cost-tier recalibration | When dataset stabilises — recalibrating during data churn is waste |
| **V4** | Above + connectivity, regeneration, demographics, safety, long-form prose fact-checking, URL rot checks, deduplication. The "full census" from the 2026-04-12 brief. | The nuclear option — run quarterly or when you suspect drift |

The skill declares its current version in `SKILL.md` frontmatter so future invocations know what is / is not in scope.

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
├── SKILL.md                             -- frontmatter + main orchestration prompt
├── references/
│   ├── qualification-schema.md          -- the 12 fields + pricing + derived state
│   ├── operator-research-playbook.md    -- how to research, search phrasings, primary sources
│   ├── ghost-project-detection.md       -- portfolio verification methodology
│   ├── realism-pathway-derivation.md    -- how to set pathways for Caner's profile
│   └── migration-rules.md               -- when to apply vs flag
└── scripts/
    └── enumerate-operators.ts           -- pre-flight: groups projects by operator
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

### Scaffolding

- [x] `.claude/skills/data-upkeep/SKILL.md`
- [x] `references/qualification-schema.md`
- [x] `references/operator-research-playbook.md`
- [x] `references/ghost-project-detection.md`
- [x] `references/realism-pathway-derivation.md`
- [x] `references/migration-rules.md`
- [x] `scripts/enumerate-operators.ts`

### Verification

- [x] `pnpm exec tsc --noEmit` clean (covers the TS script)
- [x] `enumerate-operators.ts` runs and produces expected output (92 operators / 267 projects)

### Session log

**2026-04-16 — Session 2: skill scaffolded, not run.**

- SKILL.md authored with frontmatter (`name`, `description`, `version: 1`, `scope`), 4-phase execution model, reference loading, pause-point rule, hard safety rules, invocation forms (`/data-upkeep`, `--operators X,Y`, `--dry-run`).
- Five references written covering the research surface: schema (the 12 fields + derived), operator playbook (research workflow + canonical operator patterns + secondary-market handling), ghost-project detection (verification workflow + blast-radius + tombstone pattern), realism pathway derivation (rules per pathway + `deriveRealism()` explanation + worked examples), migration rules (apply vs flag + safety stops + re-run semantics).
- `enumerate-operators.ts` pre-flight script written — groups all 267 projects by operator. Verified run outputs 92 operators, with the long-tail of 60+ projects under secondary-market categories ("Various", "Individual landlords", etc.) correctly identified as out-of-scope for operator-level research.
- `pnpm exec tsc --noEmit` clean. Script runs and produces the expected JSON / markdown output.
- **Not run.** First invocation of `/data-upkeep` will be a separate session decision — ~2-3 hours wall clock, ~2-3M tokens. Skill is ready whenever the user is.

### Not this session

- [ ] First run of the skill (separate decision — 2-3 hours of wall clock, ~2-3M tokens)
- [ ] V2, V3, V4 expansions

---

## What "done" looks like

- `.claude/skills/data-upkeep/` directory exists with all files populated
- `/data-upkeep` would be discoverable (can be invoked in a future session)
- The plan file documents v1 scope + the v2/v3/v4 trajectory
- First run still to happen in a separate session
- No source data file has been touched by the skill yet
