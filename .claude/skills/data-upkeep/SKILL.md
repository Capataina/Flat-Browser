---
name: data-upkeep
description: "Populates the rental qualification block (12 fields + derived realism pathways + pricing) across all 267 Flatbrowser projects by dispatching parallel operator-level research agents, reviewing their findings, and applying field-level edits to src/areas/data/*.ts files. Partitions work by operator rather than project (proven pattern — 5x cheaper than project-level research because operators manage many buildings with identical policies). Hybrid orchestration: agents write proposal markdown to context/data-upkeep/, orchestrator reads + applies. Pauses between research phase and apply phase for user review. Flags ghost-project candidates (operator doesn't list the building) for user confirmation before deletion. Every non-inferred field value carries a URL citation. V1 scope: qualification block + pricing side-effect + ghost-project detection only — amenity/building-quality/grade-recalibration/connectivity/long-form prose deferred to v2/v3/v4."
version: 1
scope: "qualification-block + pricing + ghost-project-verification"
---

# Data Upkeep — V1

Flatbrowser's value proposition is that every project's `grad_visa_realism` signal is trustworthy. This skill is how 267 projects get populated with correct, source-cited qualification data — at a scale manual editing cannot handle.

**V1 only populates the qualification block and pricing.** Building quality, amenities, grade recalibration, and long-form prose fact-checking are deferred to later versions (see `context/plans/data-upkeep-skill.md` for the phased roadmap). Running this skill will not touch those fields.

---

## Before anything — read these references

The mandatory core. Read all four before Phase 1:

1. **`references/qualification-schema.md`** — the exact fields to fill, their types, their semantics. Authoritative.
2. **`references/operator-research-playbook.md`** — how to research an operator, what to search for, what primary sources rank above what.
3. **`references/ghost-project-detection.md`** — the methodology for catching projects whose named operator doesn't actually list them. Critical for trust.
4. **`references/realism-pathway-derivation.md`** — how the `realism_pathways` array is computed from structural facts + Caner's profile. Determines the derived `grad_visa_realism` verdict.

Read on-demand:

5. **`references/migration-rules.md`** — when to apply a field change automatically vs flag for user confirmation. Read before Phase 3.

Also read, outside this skill folder, before any work begins:

- `context/plans/data-upkeep-skill.md` — current plan + what's in scope for v1 vs deferred.
- `context/plans/realism-redesign-and-project-view.md` — why the schema is shaped this way (redesigned 2026-04-16).
- `src/areas/types.ts` — the authoritative TypeScript schema. If this skill's references ever disagree with types.ts, types.ts wins.
- `src/profile/caner.ts` — the UserProfile that drives pathway derivation.

---

## Execution model

```
┌─────────────────────────────────────────────────────────────────┐
│ PHASE 1 — Discovery (orchestrator)                              │
│   Run scripts/enumerate-operators.ts                            │
│   Partition operators into batches                              │
│   Write batch manifests                                         │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│ PHASE 2 — Research (parallel sub-agents)                        │
│   Dispatch ~15 agents via the Agent tool                        │
│   Each researches 4-5 operators deeply                          │
│   Each writes findings + proposals to context/data-upkeep/      │
└─────────────────────────────────────────────────────────────────┘
                            ↓
                    ━━━━━━━━━━━━━━━━━
                    USER REVIEW PAUSE
                    ━━━━━━━━━━━━━━━━━
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│ PHASE 3 — Apply (orchestrator)                                  │
│   Read all proposals                                            │
│   Flag ghost projects — ask user before deleting                │
│   Apply field-level edits                                       │
│   Re-derive realism_pathways + grad_visa_realism                │
│   Set research_status per project                               │
│   Run tsc + validate-areas.ts as final gate                     │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│ PHASE 4 — Report                                                │
│   Write runs/<date>.md summary                                  │
│   Surface flags, unclear-state counts, next steps               │
└─────────────────────────────────────────────────────────────────┘
```

---

## Phase 1 — Discovery

Orchestrator work. Produces the batch manifests that Phase 2 agents consume.

### Step 1.1 — Enumerate operators

```bash
pnpm exec tsx .claude/skills/data-upkeep/scripts/enumerate-operators.ts > /tmp/operators.json
```

Output: JSON with one entry per unique operator, containing:
- `operator` name
- `project_count` — how many buildings the operator manages
- `project_ids` — array of `{ area_id, project_id }` pairs
- `current_research_status` — aggregate of the projects' current states

Expect ~60-80 unique operators across 267 projects.

### Step 1.2 — Partition into batches

Group operators into ~15 batches of ~4-5 operators each, roughly balanced by total project count per batch. Prioritise operators with the most projects (Quintain, Greystar, Grainger, Fizzy, Folk) — they're the highest-value research targets.

Respect scope flags if invoked with `--operators`:
- `/data-upkeep --operators quintain-living,folk` → only those operators in the batches, single-agent dispatch.

### Step 1.3 — Write batch manifests

For each batch, write `context/data-upkeep/batches/batch-NN-<summary>.md` containing:
- Batch ID
- Operators assigned + their project lists
- Reference links (to the four Phase-2 references)
- Output path spec (where the agent writes its findings)
- Success criteria (every qualification field answered, even if with `"unclear"`)

---

## Phase 2 — Research (parallel sub-agents)

Orchestrator dispatches sub-agents via the `Agent` tool, subagent_type `general-purpose`, run_in_background false (so they run in parallel within the single message, max parallelism).

Each sub-agent receives a prompt that:

1. Names its batch manifest file
2. Lists the 4 required references to read (with paths)
3. Describes the research workflow from `operator-research-playbook.md`
4. Specifies output paths:
   - `context/data-upkeep/operators/<operator-slug>.md` — long-form findings
   - `context/data-upkeep/proposals/<operator-slug>.md` — structured field-level proposals
5. Explicitly instructs: every field value must cite a URL; if no URL can be cited, set `"unclear"` not `"unknown"`.
6. Explicitly instructs: ghost-project detection per `ghost-project-detection.md` — flag projects where the operator doesn't list the building.

### Output format: proposals markdown

Each `proposals/<operator-slug>.md` file is structured so the orchestrator can mechanically apply it. Example:

```markdown
# Proposals — Quintain Living

## Operator-level facts (apply to every Quintain project)

| Field | Value | Source |
|---|---|---|
| `agreement_type` | `ast` | https://quintainliving.com/rental-process (accessed 2026-04-17) |
| `referencing_provider` | `homeppl` | https://quintainliving.com/faq#referencing (verbatim "Homeppl") |
| `open_banking_accepted` | `yes` | Same FAQ — "Open Banking is the quickest way to verify income" |
| `accepts_professional_guarantor` | `unclear` | FAQ doesn't name Guarantid or Housing Hand explicitly — direct enquiry needed |
| `accepts_individual_overseas_guarantor` | `unknown` | Not addressed on site |
| `upfront_rent_policy` | `one-month-ast-cap` | Inferred from `agreement_type: ast` post-RRA |
| `credit_check` | `lenient` | FAQ language: "We accept applicants without UK credit history" |
| `international_tenant_policy` | `welcomed` | Explicit FAQ language: "We welcome international residents" |
| `visa_expiry_handling` | `tenancy-shortened` | FAQ: "Tenancy length aligned to visa expiry" |
| `qualification_flexibility_signal` | `standard` | No documented flex cases in HomeViews or press |
| `income_multiple` | 30 | FAQ (2.5× annual = 30× monthly) |

## Realism pathway suggestions

Based on the above + `realism-pathway-derivation.md` applied to Caner's profile:
- `with-savings` — requires savings route confirmation; Quintain uses Homeppl but savings-as-income not explicitly documented. Mark `unclear`.
- `with-co-signer-overseas` — not addressed on Quintain's site. Mark `unknown`.
- `with-professional-guarantor` — acceptance `unclear`; pathway is `unclear`.

Suggested `grad_visa_realism`: `unclear` until a direct enquiry resolves the guarantor question.

## Per-project variations

| Project | Variation from operator defaults |
|---|---|
| Ferrum (Studio 271) | `min_tenancy_months: 3` (vs Quintain standard 12); active promotional pricing |
| Landsby East | No variation |
| ... | ... |

## Pricing (side-effect)

| Project | studio | one_bed | two_bed | bills_included | price_transparency |
|---|---|---|---|---|---|
| Ferrum | 1829-2100 | - | - | yes | listed |
| ... | ... | ... | ... | ... | ... |

## Ghost-project flags

None for Quintain — all 10 buildings in the dataset verified on https://quintainliving.com/our-buildings

## Notes

2-3 sentence narrative summary suitable for the project `notes` field — same narrative for all Quintain projects with per-building caveats appended where noted.

## Sources

Full URL list the orchestrator should copy into each project's `sources` array.
```

### Success criteria per agent

- Every qualification field answered (including explicit `"unclear"` / `"unknown"` where appropriate).
- Every non-inferred value cites a URL.
- Ghost-project check run against every project the agent is assigned.
- Pricing captured where publicly listed.
- Proposals file mechanically applicable — the orchestrator should not have to interpret prose to know what field goes where.

---

## PAUSE POINT — User review

After all Phase 2 agents complete, **do not proceed to Phase 3 without explicit user confirmation**.

Report to the user:
1. Number of operators researched
2. Number of projects covered
3. Ghost-project flags raised — enumerated
4. Operators where findings are mostly `unclear` (signalling poor public documentation)
5. Link to `context/data-upkeep/operators/` so user can review findings

Ask: **"Proceed to Phase 3 (apply changes)?"**

User may:
- Say yes → Phase 3
- Ask for specific operators to be re-researched → loop back to Phase 2 for those
- Cancel → skill exits, findings remain on disk for future runs

---

## Phase 3 — Apply (orchestrator)

Read each `proposals/<operator-slug>.md` file and apply the changes to `src/areas/data/<area-slug>.ts`.

### Step 3.1 — Ghost-project confirmation

Before any other edits, surface every ghost-project flag:

> "Agent flagged `<project-name>` (area: `<area-slug>`, operator: `<operator>`) as a ghost project — the operator's website does not list this building. Evidence: `<agent's reasoning>`. Delete from dataset?"

If user confirms deletion:
- Remove the project from the parent area's `projects` array
- Add a tombstone comment (follow `references/ghost-project-detection.md` § "Tombstone pattern")
- Re-check area-level references to the deleted project (grep for the project name + operator across all data files); rewrite any prose references
- Flag if the deletion likely changes the area's grade (don't recalibrate — note for v3 skill)

If user declines: leave the project in but set `grad_visa_realism: "unclear"` with a note.

### Step 3.2 — Apply field-level changes

For each operator, for each project assigned to that operator:

1. Open `src/areas/data/<area-slug>.ts`
2. Locate the project's `qualification:` block
3. Apply each field from the proposal (operator-level defaults, then per-project variations)
4. Compute `realism_pathways` per `realism-pathway-derivation.md`
5. Call `deriveRealism(pathways, preserved)` conceptually and set `grad_visa_realism`
6. Set `research_status` — `"complete"` if every field answered, `"partial"` if any remain `"unknown"`
7. Populate `sources` with the URLs from the proposal
8. Replace `notes` with the narrative summary

Use `Edit` or `MultiEdit` tool calls. Preserve all other fields in the project untouched.

### Step 3.3 — Apply pricing changes (side-effect)

For each project where the agent captured pricing:
- Update `rental.prices.studio/one_bed/two_bed` price bands
- Update `rental.prices.bills_included`
- Update `rental.price_transparency`
- Update `rental.cost_tier` per the simple bands defined in `qualification-schema.md`
- Update `rental.prices.notes` with a brief "verified 2026-XX-XX via operator website" line

### Step 3.4 — Final gate

After all edits:
```bash
pnpm exec tsc --noEmit
pnpm exec tsx scripts/validate-areas.ts
```

Both must pass. If either fails, do not proceed to Phase 4 — report the failure to the user and stop.

---

## Phase 4 — Report

Write `context/data-upkeep/runs/<YYYY-MM-DD>-<scope>.md` summarising:

- Invocation command (full skill or `--operators X,Y`)
- Operators researched (count + list)
- Projects touched (count + list)
- Fields populated (aggregate counts per field name)
- Realism distribution after the run — how many `achievable` / `with-guarantor` / `licence-exempt` / `unlikely` / `blocked` / `unclear` / `unknown` projects now exist
- Ghost projects deleted (list with reasoning)
- Operators with mostly-`unclear` findings (signal for follow-up direct enquiries)
- Links to all `operators/<slug>.md` and `proposals/<slug>.md` files
- Next-action recommendations — operators worth a direct email to resolve `unclear` answers

Commit to git via a clear commit message: `"data-upkeep run <date>: <N> operators, <M> projects, <K> fields populated"`.

---

## Invocation

### Default — full run

```
/data-upkeep
```

All ~60-80 operators. ~15 batches. ~2-3 hours wall clock. ~2-3M tokens.

### Scoped — specific operators

```
/data-upkeep --operators quintain-living,folk,grainger
```

Only the named operators. Single batch, single or few agents. ~15-30 min wall clock. ~300-500k tokens.

### Dry run

```
/data-upkeep --dry-run
```

Runs Phase 1 only. Produces batch manifests. Does not dispatch agents. Useful for sanity-checking which operators would be researched before committing a full run.

---

## Hard rules

1. **Never auto-delete a project.** Ghost-project flags require explicit user confirmation at Phase 3.
2. **Never edit grade fields** (`overall_grade`, `grade_reasoning`) — grade recalibration is v3+, not this skill.
3. **Never edit area-level fields** (safety, demographics, connectivity, regeneration) — area work is v4.
4. **Never skip the tsc/validate-areas gate** at the end of Phase 3.
5. **Every field value must have a source URL** or carry `"unclear"` / `"unknown"`. Inferred values (e.g. `upfront_rent_policy: "one-month-ast-cap"` from `agreement_type: "ast"`) note the inference in the proposal but don't need an external URL.
6. **Preserve user decisions.** If a project was manually flagged `"blocked"` in a previous session (e.g. Moda's Experian 561+ floor in some operator), the research should confirm the block rather than overturning it. Use `deriveRealism(pathways, preserved)` with the preserved state.
7. **Pause before Phase 3 is non-negotiable.** If the user has not confirmed, do not edit source files.

---

## What this skill is NOT

- **Not `validate-areas.ts`.** That script checks structural integrity (are required fields present). This skill checks factual integrity (are the values correct).
- **Not the 2026-04-12 brief's "full census".** That's v4. V1 is narrower and ships first.
- **Not a grade recalibration pass.** V3 will recalibrate; v1 preserves existing grades.
- **Not a one-time migration.** Designed to be re-run as operators change policies. Operator findings markdown is durable — subsequent runs re-research only where signals appear.
- **Not `upkeep-context`.** That global skill maintains the `context/` documentation layer. This skill maintains the data layer.
