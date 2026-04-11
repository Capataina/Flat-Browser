# System: areas-data

The data layer of Flatbrowser. Lives entirely under `src/areas/`. Knows nothing about React, the DOM, or Next.js — every file in this folder is plain TypeScript that could in principle be consumed by any front-end, by a script, or by a test runner.

This system was rebuilt from the ground up in the website refactor that landed on 2026-04-11 (`context/plans/website-refactor.md`). The previous data layer lived under `src/establishments/` with a flat list of 19 entries that conflated areas (Nine Elms) and projects (Embassy Gardens, Bloom, etc.). The new model is **two-tier**: 14 typed `Area` entries containing 78 nested `Project` entries.

This system is responsible for:
- defining the schema documented in `context/references/data-schema.md`,
- holding the static, hand-curated dataset of areas and projects,
- providing the pure functions that power filter state, search, sorting, and counting.

It is **not** responsible for rendering anything, holding interactive state, or talking to the network.

---

## Folder layout

```
src/areas/
├── types.ts          Schema: Area, Project, all sub-types, FilterState, Grade, Quality, ...
├── config.ts         browserMeta + filter group definitions (zone, age, grade, etc.)
├── filtering.ts      Pure functions: createInitialFilterState, toggle helpers,
│                     areaPasses, projectPasses, sortAreas, getProjectCount, formatCount
└── data/
    ├── helpers.ts    Builder functions for migrated entries — buildProject, buildTier,
    │                 stub builders for the rich fields the original 19 didn't capture
    ├── index.ts      Imports every area file and exports the ordered areas[]
    └── <slug>.ts × 14 One typed Area constant per file (each containing nested Projects)
```

The four direct files (`types.ts`, `config.ts`, `filtering.ts`, `data/index.ts`) are the public surface. The `data/helpers.ts` file is an implementation detail used by the migrated entries; future hand-authored entries do not need to use it. Anything outside the system should consume `data/index.ts` or `types.ts`, never individual area files.

---

## The schema at a glance

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

---

## Filter semantics

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

## Migration history (2026-04-11)

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

---

## Where to look for what

| Question | File |
|---|---|
| What does an Area look like? | `src/areas/types.ts` (canonical) + `context/references/data-schema.md` (docs) |
| What are the filter taxonomies? | `src/areas/config.ts` |
| How does filter logic work? | `src/areas/filtering.ts` |
| What areas exist? | `src/areas/data/index.ts` + per-area files |
| How was an area migrated? | The relevant `data/<slug>.ts` file's `research.primary_agent` field (`migrated-from-original-19`) |
| What are the rubric criteria? | `context/notes/search-rubric.md` |
| Will validation catch a missing field? | `scripts/validate-areas.ts` — run via `pnpm exec tsx scripts/validate-areas.ts` |
