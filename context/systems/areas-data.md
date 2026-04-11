# System: areas-data

## Scope / Purpose

The data layer of Flatbrowser. Lives entirely under `src/areas/`. Knows nothing about React, the DOM, or Next.js — every file in this folder is plain TypeScript that could in principle be consumed by any front-end, by a script, or by a test runner.

This system was rebuilt from the ground up in the website refactor that landed on 2026-04-11 (`context/plans/website-refactor.md`). The previous data layer lived under `src/establishments/` with a flat list of 19 entries that conflated areas (Nine Elms) and projects (Embassy Gardens, Bloom, etc.). The new model is **two-tier**: 14 typed `Area` entries containing 78 nested `Project` entries.

## Boundaries / Ownership

This system is responsible for:
- defining the schema documented in `context/references/data-schema.md`,
- holding the static, hand-curated dataset of areas and projects,
- providing the pure functions that power filter state, search, sorting, and counting.

It is **not** responsible for rendering anything, holding interactive state, or talking to the network.

---

## Current Implemented Reality

### Folder layout

```
src/areas/
├── types.ts          Schema: Area, Project, all sub-types, FilterState, Provenance, Grade, Quality, ...
├── config.ts         browserMeta + filter group definitions (zone, age, grade, etc.)
├── labels.ts         Display label maps for every enum + descriptions (the "no raw enums in UI" rule)
├── filtering.ts      Pure functions: createInitialFilterState, toggle helpers,
│                     areaPasses, projectPasses, sortAreas, getProjectCount, formatCount
└── data/
    ├── helpers.ts    Builder functions for migrated entries — buildProject, buildTier,
    │                 stub builders for the rich fields the original 19 didn't capture.
    │                 Supports per-project criterion reasoning via ProjectEvaluationReasoning.
    ├── index.ts      Imports every area file and exports the ordered areas[]
    └── <slug>.ts × 14 One typed Area constant per file. King's Cross is the gold-standard
                      hand-written exemplar (~1680 lines, every field populated). Other areas
                      are post-migration with criterion reasoning filled in but rich content
                      stubbed pending the Phase F sweep.
```

The five direct files (`types.ts`, `config.ts`, `labels.ts`, `filtering.ts`, `data/index.ts`) are the public surface. The `data/helpers.ts` file is an implementation detail used by the migrated entries; future hand-authored entries do not need to use it. Anything outside the system should consume `data/index.ts` or `types.ts` or `labels.ts`, never individual area files.

### `labels.ts` — the "no raw enums in UI" rule

Every enum in the schema (`Grade`, `Quality`, `BuildingType`, `BuildPhase`, `ConciergeType`, `HeatingType`, `AgeCohort`, `TfLZone`, `AreaSafety["overall"]`, `AreaRegeneration["status"]`, `GradVisaRealism`, etc.) has a corresponding `*_LABELS` map in `labels.ts` that maps the enum literal to a human-readable display string (e.g. `"in_delivery" → "In delivery"`, `"much-safer" → "Much safer than Croydon"`). Many enums also have a `*_DESCRIPTIONS` map providing a 1–3 sentence definition suitable for tooltips and inline help.

The rule is: **the UI must never render a raw enum value.** Always go through `LABEL_MAP[value]`. The lint isn't enforced by tooling, but the discipline is documented here and across the system docs because a raw enum slipping into the UI was the single most common bug during the Phase 1 polish pass.

The `labels.ts` module also exports `labelOf<K>(map, key, fallback)` — a generic safe lookup that returns the label or the fallback when the key is null/undefined.

---

## Key Interfaces / Data Flow

### The schema at a glance

The full TypeScript types live in `types.ts`. Documentation per field is in `context/references/data-schema.md`. The shape:

```
Area
 ├── Identity (id, name, aliases, borough, postcodes)
 ├── Card-face content (headline, preview, hero_image_url)
 ├── long_form (full / history / vibe / weekday / weekend / notable / croydon_comparison)
 ├── Structured facts
 │     ├── zones                    TfLZone[]
 │     ├── connectivity             lines, stations, anchor times, multi_cluster + redundancy scores
 │     ├── demographics             age cohort, breakdowns, sources
 │     ├── safety                   overall, vs Croydon, after-dark
 │     ├── green_and_water          river/canal/dock + parks
 │     ├── amenities                grocery / gyms / food / health / cultural lists
 │     └── regeneration             status, pipeline, 2027 trajectory
 ├── evaluation                     T1 + T2 + T3 + T5 tier evaluations + overall_grade
 ├── projects[]                     0..N nested Project entries
 ├── external_links
 ├── personal_notes                 hand-authored by Caner
 └── research                       provenance metadata

Project
 ├── Identity (id, name, area_id back-reference)
 ├── Card-face content
 ├── Basic facts (developer, operator, building_type, units, build year, phase)
 ├── rental
 │     ├── tenure (rent | buy)
 │     ├── prices (typed numeric ranges per bedroom)
 │     └── qualification           THE most important section — grad_visa_realism etc.
 ├── building_quality               T2.6 lives here
 ├── amenities                      T4.1 lives here
 ├── architecture                   T4.4 lives here
 ├── long_form
 ├── resident_signal                HomeViews summary if any
 ├── evaluation                     T2.6 + T4.1 + T4.4 + overall_grade
 ├── external_links
 └── research
```

The grade scale is the six-level Cernio scale: **SS / S / A / B / C / F**.

### Provenance — consensus attribution per section

After the consensus model decision (see `context/notes/consensus-synthesis-model.md`), every major section type carries an optional `provenance?: Provenance` field:

```ts
export interface Provenance {
  contributing_agents: string[];   // ["01", "04", "07", ...] — agent IDs that contributed
  consensus_level: "high" | "medium" | "low";  // ≥10 / 5–9 / 1–4 agents respectively
  dissenting_claims: DissentingClaim[];  // minority views preserved with attribution
}
```

Sections with provenance (all optional, all backward compatible — the migrated entries don't have them yet):

| Section | Why provenance lives here |
|---|---|
| `AreaConnectivity`, `AreaDemographics`, `AreaSafety`, `AreaGreenAndWater`, `AreaAmenities`, `AreaRegeneration` | Each area-level fact section gets its own provenance because different agents contribute different evidence per topic. |
| `AreaLongForm` | The synthesised vibe/weekday/weekend/etc. prose draws from multiple agents — provenance records which. |
| `AreaEvaluation` and each `TierEvaluation` | The overall grade synthesis is itself attributed; per-tier provenance lives on each `TierEvaluation`. |
| `ProjectQualification` | Especially important for the rental qualification block — agent #9 owns it, but agents #11 and #14 frequently add operator-level evidence. |
| `ProjectBuildingQuality`, `ProjectAmenities`, `ProjectArchitecture`, `ProjectLongForm`, `ProjectResidentSignal`, `ProjectEvaluation` | Each project-level section is independently provenance-tracked. |

Provenance is **always optional**. Existing migrated entries don't have it; the field will be populated by the synthesis step after the Phase F sweep. The UI renders sections without provenance as "migrated entry — awaiting Phase F sweep" rather than failing.

---

### Filter semantics

`filtering.ts` provides pure functions for the entire filter pipeline. The behaviour is:

- **OR within a category**: selecting Zone 2 + Zone 3 matches either. **Fixed** from the previous AND-within-category bug.
- **AND across categories**: zones AND age AND grade AND ... all apply.
- **Project filters cascade**: when a project-level filter is active, an area passes only if at least one of its projects passes. The matching projects are highlighted inside the area modal.
- **Free-text search** matches across area name, borough, postcodes, headline, preview, all long-form sub-fields, line/station names, and every project's name/developer/operator/headline/preview.

Sort modes:

- `area-grade` (default) — best area grade descending, ties broken by name
- `best-project-grade` — sorts by the best grade of any project in the area, surfaces "okay area, exceptional project" candidates
- `name` — alphabetical

---

## Implemented Outputs / Artifacts

The data layer's "artifacts" are the typed constants the rest of the app reads from. There is no build step, no JSON file, no API — the TypeScript values are the storage:

- `areas: Area[]` — exported from `src/areas/data/index.ts`. The ordered array of 14 typed `Area` constants.
- `FilterState` — typed in `src/areas/types.ts`, instantiated by `createInitialFilterState()` in `src/areas/filtering.ts`.
- `*_LABELS` and `*_DESCRIPTIONS` — display label maps in `src/areas/labels.ts`, one per enum.
- `validate-areas.ts` — runnable validation script that walks every required field and reports gaps. Currently passes with 14 areas, 78 projects, 0 errors, 0 warnings.

## Known Issues / Active Risks

- **Most rich fields are stubbed.** Long-form sub-sections beyond `full`, demographics breakdowns, amenity inventories, and rental qualification specifics are `unknown` / empty arrays for the 13 migrated entries. King's Cross is the only fully populated exemplar. The Phase F sweep is designed to fill these gaps; until it runs, the UI gracefully renders "migrated entry — awaiting Phase F sweep" placeholders.
- **No source-completeness validation.** `scripts/validate-areas.ts` checks structural integrity (every required field present) but does not check that every fact has a `SourceLink`. The agent contract makes that the agents' responsibility, not the validator's.
- **`Provenance` blocks are not yet populated** on any entry — they are optional schema fields waiting for the consensus synthesis step after the Phase F sweep.

## Partial / In Progress

- **The 13 migrated entries** (everything except King's Cross) are partial — structurally valid, criterion reasoning filled in, but rich content stubbed pending the Phase F sweep.
- **The `Provenance` schema block** is implemented in `types.ts` and documented in `data-schema.md`, but no live data uses it yet. It will be populated by the synthesis step after the sweep dispatches.

## Planned / Missing / Likely Changes

- **Phase F sweep merge.** The biggest pending change is folding 15 agents' research outputs into the typed dataset via consensus voting. This is documented in `context/plans/website-refactor.md` (Phase F) and `context/references/merge-protocol.md`.
- **Cambridge / non-London areas.** The schema supports them (Decision 8 in the website refactor plan), but no Cambridge data is currently in the dataset and Caner has not asked for it.
- **A second-wave candidate list.** Once discovery agents 11–15 surface proposals, those proposals get triaged into a second-wave addition to `candidate-areas.md` and a follow-on sweep targets only the new candidates.

## Durable Notes / Discarded Approaches

- **Field-level ownership model.** The original Phase E1 design had each agent owning specific schema fields with a precedence map for conflict resolution. This was abandoned in favour of consensus voting because all 15 agents were running in parallel anyway and the ownership model wasted that parallelism by constraining each agent to a narrow slice. See `context/notes/consensus-synthesis-model.md` for the full reasoning.
- **AND-within-category filter semantics.** The previous flat-list version of `filtering.ts` ANDed within categories (selecting Zone 2 + Zone 3 returned nothing). This was a bug, not a feature, and the refactor fixed it to OR-within-category as part of B3.
- **Raw enum strings in the UI.** The pre-refactor data layer leaked enum values like `"in_delivery"` and `"much-safer"` directly into the rendered output. The Phase 1 polish pass introduced the `labels.ts` discipline; the data layer now exports label maps so the UI never sees raw enums.

### Migration history (2026-04-11)

The 19 `Establishment` entries from the old `src/establishments/data/` collapsed into 14 `Area` entries with 78 nested projects:

| Old establishment | New shape |
|---|---|
| wembley-park | `Area` "wembley-park" + 8 nested Quintain projects |
| greenwich-peninsula | `Area` "greenwich-peninsula" + 5 projects |
| stratford | `Area` "stratford" + 6 projects |
| battersea-power-station + battersea-switch-house | `Area` "battersea-power-station" + 8 projects (Switch House merged in) |
| kings-cross + kings-cross-ownership | `Area` "kings-cross" + 6 projects (collapsed entries) |
| embassy-gardens + bloom-nine-elms + riverlight-quay + one-nine-elms | `Area` "nine-elms" + 4 projects (NEW parent area) |
| canary-wharf | `Area` "canary-wharf" + 6 projects |
| white-city | `Area` "white-city" + 7 projects |
| elephant-park | `Area` "elephant-park" + 5 projects |
| royal-wharf | `Area` "royal-wharf-and-docks" + 5 projects |
| kidbrooke-village | `Area` "kidbrooke-village" + 4 projects |
| oval-village | `Area` "oval-village" + 5 projects |
| brent-cross-town | `Area` "brent-cross-town" + 4 projects |
| canada-water | `Area` "canada-water" + 5 projects |

**Net effect**: 19 flat → 14 areas with 78 projects.

Every migrated entry retained the old `desc` content as `long_form.full` and the old project list as nested `Project` entries. Most rich fields (long-form sub-sections beyond `full`, demographics breakdowns, amenity inventories, rental qualification) are stubbed with `unknown` or empty arrays — these are the gaps that the **Phase F sweep** is designed to fill.

The validation script at `scripts/validate-areas.ts` confirms structural integrity: 14 areas, 78 projects, 0 errors, 0 warnings.

## Obsolete / No Longer Relevant

- The previous `src/establishments/` folder is gone. References to `Establishment`, `EstablishmentProject`, or the flat 19-entry dataset in older notes are historical only.
- The old `tagCategories` flat-tag taxonomy is gone — replaced by structured filter groups in `config.ts`.
- The old `establishments-data.md` system doc is gone — this file (`areas-data.md`) supersedes it.

---

## Where to look for what

| Question | File |
|---|---|
| What does an Area look like? | `src/areas/types.ts` (canonical) + `context/references/data-schema.md` (docs) |
| What enum displays as what? | `src/areas/labels.ts` (label maps + descriptions) |
| What are the filter taxonomies? | `src/areas/config.ts` |
| How does filter logic work? | `src/areas/filtering.ts` |
| What areas exist? | `src/areas/data/index.ts` + per-area files |
| Where's the gold-standard exemplar entry? | `src/areas/data/kings-cross.ts` (~1680 lines, hand-written) |
| How was an area migrated? | The relevant `data/<slug>.ts` file's `research.primary_agent` field (`migrated-from-original-19` for B5 migrations, `hand-written-exemplar-2026-04-12` for King's Cross) |
| What are the rubric criteria? | `context/notes/search-rubric.md` |
| What is the consensus attribution model? | `context/notes/consensus-synthesis-model.md` + the `Provenance` interface in `types.ts` |
| Will validation catch a missing field? | `scripts/validate-areas.ts` — run via `pnpm exec tsx scripts/validate-areas.ts` |
