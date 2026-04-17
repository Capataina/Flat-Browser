# Grade Recalibration — V3 methodology

The orchestrator-only pass that synthesises populated field data into grade outputs. Runs **after** V1/V2 (project research) and V4 (area research) complete, because grades are derived from those fields.

This reference defines the algorithm, the preserved-state rules, and the boundaries (what V3 does, and what it explicitly doesn't).

---

## Load-bearing principle: grades are 100% relative

See `context/notes/relative-grading.md` for the full principle. Summary:

> Every grade is relative to other entries of the same type in the dataset. An A-graded area is A because it is meaningfully better than the B's and meaningfully worse than the S's in this specific dataset. If the distribution shifts, grades shift.

This has three implications for V3:

1. **The full dataset must be loaded into context at recalibration time.** You cannot grade an area without visibility into the grades of the other 54 areas.
2. **The full range must be used.** If every area ends up graded A or S, the recalibration is wrong. The dataset should have SS, S, A, B, C, F entries in a defensible distribution.
3. **Grades are not permanent.** As the dataset grows, grades shift. A C area today may become a B later if 15 new F-tier areas are added.

---

## What V3 recalibrates

### Project-level

| Field | Type | Derived from |
|---|---|---|
| `evaluation.t2_6_building_quality` | `CriterionScore` | `building_quality.*` + `resident_signal.*` |
| `evaluation.t4_1_amenity_package` | `CriterionScore` | `amenities.*` |
| `evaluation.t4_4_signature_arch` | `CriterionScore` | `architecture.*` |
| `evaluation.overall_grade` | `Grade` | Synthesis of T2.6 + T4.1 + T4.4 |
| `evaluation.grade_reasoning` | `string` | 2-3 sentence narrative explaining the grade |
| `rental.cost_tier` | `CostTier` | `rental.prices.*` relative to dataset distribution |

### Area-level

| Field | Type | Derived from |
|---|---|---|
| `evaluation.t1_foundational` | `TierEvaluation` | Safety, connectivity minimum, legal status — 6 criteria |
| `evaluation.t2_daily_life` | `TierEvaluation` | Amenities, daily-life anchors, best-project T2.6 — 7 criteria |
| `evaluation.t3_identity` | `TierEvaluation` | Regeneration status, cultural anchors, vibe — 6 criteria |
| `evaluation.t5_personal` | `TierEvaluation` | Personal fit — 4 criteria (gym, café, quiet, community) |
| `evaluation.overall_grade` | `Grade` | Synthesis of T1/T2/T3/T5 |
| `evaluation.grade_reasoning` | `string` | 2-3 sentence narrative |

---

## Algorithm — project grades

### Step 1 — Compute T2.6 per project

Score each project on T2.6 (building quality) using its populated V2 fields:

```
Start with: status = "pass"

If building_quality.sound_insulation in ("poor") → downgrade to "partial"
If building_quality.kitchen_quality in ("poor") → downgrade to "partial"
If resident_signal.homeviews_score < 6.5 → downgrade to "partial"
If ≥3 of common_complaints mention structural issues (damp, heating, noise) → downgrade to "partial"
If resident_signal.homeviews_score < 5.0 OR explicit major issues in common_complaints → "fail"
```

The `CriterionScore.reasoning` field should cite the specific fields that drove the score.

### Step 2 — Compute T4.1 per project

Score each project on T4.1 (amenity package) using `amenities.overall_tier`:

| `overall_tier` | T4.1 status |
|---|---|
| `"premium"` | `"pass"` |
| `"strong"` | `"pass"` |
| `"decent"` | `"partial"` |
| `"basic"` | `"fail"` |

Then adjust +/- one step based on Caner-weighted fields:
- Gym quality is `"excellent"` → upgrade one step (max `"pass"`)
- No on-site gym AND no area gym within 5 minutes → downgrade one step
- 24h concierge in a low-safety area → upgrade one step (safety substitute)

### Step 3 — Compute T4.4 per project

Score each project on T4.4 (signature architecture) using `architecture.*`:

| Condition | T4.4 status |
|---|---|
| `architecture.is_signature === true` + at least one award | `"pass"` |
| `architecture.is_signature === true`, no awards | `"partial"` |
| Named architecture practice but not signature | `"partial"` |
| No named architect, no awards, no signature | `"fail"` |

T4.4 is the only tier where most of the dataset correctly sits at `"fail"`. Don't inflate.

### Step 4 — Synthesise project `overall_grade`

Project-level grade is relative to other projects in the dataset on the same three-criterion synthesis:

```
Start with candidate grade = B

+ Both T2.6 and T4.1 are "pass" → upgrade to A
+ All three (T2.6 + T4.1 + T4.4) are "pass" → upgrade to S
+ All three "pass" AND best-in-dataset on any dimension (price, amenity, signature) → upgrade to SS

- T2.6 is "partial" and T4.1 is "partial" → downgrade to C
- T2.6 is "fail" OR T4.1 is "fail" → downgrade to C
- T2.6 is "fail" AND T4.1 is "fail" → downgrade to F
```

Then verify against the dataset:

- Check 3 other projects at the candidate grade. Does this project genuinely belong?
- Check 2 projects one grade above. Is this clearly weaker than them?
- Check 2 projects one grade below. Is this clearly stronger than them?

If the check fails, adjust.

### Step 5 — Write `grade_reasoning`

2-3 sentences explaining the grade against specific dataset comparables. Format:

> Graded A. Matches [project X] on T2.6 building quality but exceeds it on T4.1 amenity (excellent gym + 24h concierge vs daytime concierge). Falls short of the S tier because T4.4 architecture is `"partial"` — competent but not signature.

The reasoning cites named comparables, not abstract quality claims.

### Step 6 — Recompute `cost_tier`

Recalibrate against the full project set:

1. Compute the cheapest-unit price for every project (min of studio / 1-bed / 2-bed)
2. Sort ascending
3. Apply quantile-style banding:

| Percentile | Cost tier |
|---|---|
| 0-20% | `"budget"` |
| 20-45% | `"affordable"` |
| 45-70% | `"mid-range"` |
| 70-90% | `"premium"` |
| 90-100% | `"luxury"` |

Note: this differs from the V1 fixed-threshold bands. V1 used absolute GBP thresholds because no per-project pricing existed yet. V3 uses relative positioning now that V2 has populated per-project pricing.

---

## Algorithm — area grades

### Step 1 — Compute T1 foundational

T1 has 6 criteria (per `context/notes/search-rubric.md`). Score each criterion using the `safety.*`, `connectivity.*`, and `demographics.*` fields:

| T1 criterion | Score from |
|---|---|
| T1.1 Basic safety | `safety.overall` + `safety.after_dark_assessment` |
| T1.2 Transport access | `connectivity.multi_cluster_score ≥ 2` |
| T1.3 Rental market exists | Any projects in area with qualifiable operators |
| T1.4 Professional renters present | `demographics.professional_renter_pct ≥ 20` |
| T1.5 Not under demolition | `regeneration.status` not `"early"` with named demolition |
| T1.6 Has at least one gym within 10min | From area `amenities.gyms` |

Each criterion `status` is `"pass" | "partial" | "fail" | "unknown"`.

Synthesise `tier_score`:

- All 6 `"pass"` → `"strong"`
- 5 `"pass"` + 1 `"partial"` → `"good"`
- ≥1 `"fail"` among T1.1, T1.2, T1.3 → `"fail"` (T1 hard floor)
- Mixed `"partial"` + `"pass"` → `"moderate"`
- Multiple `"partial"` + any `"fail"` → `"weak"`

**T1 is the hard floor.** An area with T1 "fail" cannot have overall_grade above C regardless of other tiers.

### Step 2 — Compute T2 daily life

T2 has 7 criteria. Uses area `amenities.*` + `green_and_water.*` + best project's T2.6.

| T2 criterion | Score from |
|---|---|
| T2.1 Grocery coverage | area `amenities.grocery` length and quality |
| T2.2 Café density | area `amenities.food_and_drink` (cafés specifically) |
| T2.3 Gym options | area `amenities.gyms` — CRITICAL (T2's highest weight for Caner) |
| T2.4 Health access | area `amenities.health` |
| T2.5 Green space | `green_and_water.parks` + `overall_assessment` |
| T2.6 Building quality (best project) | max of projects' `evaluation.t2_6_building_quality` |
| T2.7 Food and drink variety | breadth of area `amenities.food_and_drink` |

### Step 3 — Compute T3 identity

T3 has 6 criteria. Uses `regeneration.*` + `long_form.vibe` + area `amenities.cultural`.

### Step 4 — Compute T5 personal fit

T5 has 4 criteria specific to Caner's profile (per `context/notes/user-profile.md`):

| T5 criterion | Score from |
|---|---|
| T5.1 Gym culture match | Area gyms include strength / boxing / BJJ options |
| T5.2 Café-working viability | ≥3 named chains in `food_and_drink` + quiet seating signal |
| T5.3 Quiet living possible | `demographics.primary_age_cohort` + noise signals from `vibe` |
| T5.4 Community texture | `long_form.vibe` + `cultural` — does the area have a social fabric Caner could plug into |

### Step 5 — Synthesise area `overall_grade`

Area-level grade uses the 4 tier scores:

```
Start with candidate grade = B

+ T1 "strong" + T2 "strong" → upgrade to A
+ T1 "strong" + T2 "strong" + T3 "strong" → upgrade to S
+ All four tiers "strong" AND one or more best-in-dataset → upgrade to SS

- T1 "moderate" → cap at B
- T1 "weak" → cap at C
- T1 "fail" → cap at F
- T2 "weak" → downgrade one from above
```

Then verify against the dataset per the relative-grading principle.

### Step 6 — Write `grade_reasoning`

Same format as project-level. Cite specific area comparables by name.

---

## Preserved states

The recalibration must honour previously-authored explicit decisions. Cases:

### Project grades — preserve when

- `evaluation.grade_reasoning` contains explicit phrase "authored" / "manually graded"
- The project is a flagship exemplar in `context/` documentation (King's Cross Gasholders is the gold-standard exemplar)
- The user has previously pushed back on a recalibration suggestion (record in `context/notes/`)

### Area grades — preserve when

- Area has an authored `grade_reasoning` citing specific Caner-profile concerns the algorithm cannot see
- Area is being used as a calibration anchor in `context/notes/`

### How preservation works

V3 always proposes a new grade based on the algorithm. When preservation applies, the proposal is flagged rather than applied:

> Area Wembley Park: current grade B, algorithm proposes A.
> Preserved-state flag: `grade_reasoning` references "Zone 4 friction" which the algorithm cannot weight.
> [apply A / keep B / mark for manual review]

---

## Cost tier recalibration — the specific output

Apply quantile-based banding across all 266 projects after V2 pricing is settled. The output is:

- A computed `cost_tier` for every project
- A distribution report (how many budget / affordable / mid-range / premium / luxury)
- A list of projects where the proposed tier differs from the current tier by more than 1 step (potential authoring errors to flag)

---

## What V3 does NOT do

- **Does not fabricate data.** Grades are derived from populated fields. Missing V1/V2/V4 data means V3 produces `"unknown"` status criteria rather than guessing.
- **Does not edit V1/V2/V4 fields.** Recalibration reads those fields; it doesn't modify them.
- **Does not change `personal_notes`.** User-authored.
- **Does not touch `research.primary_agent`.** Preserves first authorship.

---

## Data-readiness gate

V3 should not run against partially-populated data. Before recalibration, enforce:

- For each project: `rental.qualification.research_status === "complete"` (V1)
- For each project: `building_quality`, `amenities`, `architecture`, `resident_signal` all populated (V2)
- For each area: `connectivity`, `demographics`, `safety`, `regeneration`, `amenities` all populated (V4)

If readiness fails, the orchestrator should report:

> Recalibration gate: <N> projects and <M> areas not ready. Run `--operators <list>` and `--areas <list>` first.

V3 refuses to grade on thin data. Thin grades are worse than no grades.

---

## Budget guidance

V3 is orchestrator-only — no external research, no sub-agent dispatch. Budget is Claude reading the entire dataset + producing grade proposals.

Per full-dataset recalibration: ~200-400k tokens. Much cheaper than V1/V2/V4 because all the work is local reasoning over already-loaded fields.

Grade proposals should be written to `context/data-upkeep/recalibration/<YYYY-MM-DD>.md` with the full dataset-level distribution analysis, so the user can review before the apply step.

---

## Safety check after apply

After V3 applies new grades:

1. Run `pnpm exec tsc --noEmit` — type integrity
2. Run `pnpm exec tsx scripts/validate-areas.ts` — structural integrity
3. Verify the grade distribution uses the full range — if no F grades or no SS grades post-recalibration, the algorithm is miscalibrated and the run should be flagged for review rather than committed.
4. Spot-check 5 random areas and 5 random projects — do the new grades look defensible to a reader? If any look obviously wrong, stop and report.

Do NOT auto-push grade changes. The recalibration is the highest-blast-radius change the skill can make (affects every card colour in the UI). User review before commit is mandatory.
