# Flatbrowser — Architecture

A personal, single-page London relocation tool built around a **rubric-driven, two-tier areas-with-projects** data model. 14 hand-curated London areas containing 78 nested projects, each evaluated against a 5-tier search rubric and rendered through a three-level drill-down UI (area card → area modal → project modal) with accordion-based depth at every level. There is no backend, no database, no analytics — every byte is statically generated from typed TypeScript constants.

The project exists to support one person's real relocation decision: Caner is on a UK Graduate visa with no formal work history, currently paying ~£3k/month all-in at Ten Degrees Croydon, and needs to find an upgrade area where the rental qualification process is realistic given his constraints (no UK credit history, max 3 months rent upfront). The tool is **explicitly designed to be the last website needed for that decision** — better than HomeViews + Rightmove + Google combined for this specific job — and that framing shapes every architectural decision below.

This document reflects the post-refactor state as of 2026-04-11. The full refactor history is in `context/plans/website-refactor.md`. The schema contract is in `context/references/data-schema.md`. The locked search criteria are in `context/notes/search-rubric.md`.

---

## Stack snapshot

| Layer        | Choice                              | Notes                                                              |
|--------------|-------------------------------------|--------------------------------------------------------------------|
| Framework    | Next.js 16 (App Router, Turbopack)  | Single route, server component shell handing typed `Area[]` to one client component |
| UI runtime   | React 19                            | `useDeferredValue` on filter state for input responsiveness        |
| Styling      | Tailwind v4 + CSS Module            | Tailwind imported globally; the browser UI is one CSS module (~32KB) with full per-tier and per-grade colour systems |
| Type system  | TypeScript (strict)                 | All data is typed at the source; runtime validation via `scripts/validate-areas.ts` |
| Package mgr  | pnpm                                | Single package, no workspace                                       |
| Fonts        | DM Sans (body) + Cormorant Garamond (display) | Loaded via `next/font/google` and exposed as CSS variables |
| Tooling      | tsx (dev)                           | Powers the validation script                                       |

---

## Repository shape

```
flatbrowser/
├── app/                          Next.js App Router shell
│   ├── layout.tsx                Root layout, font wiring, metadata
│   ├── page.tsx                  Server component; hands areas[] to BrowserClient
│   └── globals.css               Tailwind import + base resets
│
├── src/
│   ├── components/
│   │   └── browser/              ALL UI for the browser (one feature, one folder)
│   │       ├── BrowserClient.tsx        Client orchestrator — owns state
│   │       ├── BrowserHeader.tsx        Headline + 4 metrics
│   │       ├── BrowserFilterBar.tsx     Sort + search + collapsible filter panel
│   │       ├── BrowserFooter.tsx        Footer note + counts
│   │       ├── AreaCard.tsx             Main grid card
│   │       ├── AreaModal.tsx            Deep area view with all accordion sections
│   │       ├── ProjectCard.tsx          Project card rendered inside area modal
│   │       ├── ProjectModal.tsx         Deep project view with rental-qualification section
│   │       ├── Accordion.tsx            Generic accordion primitive
│   │       ├── GradeChip.tsx            Per-grade coloured chip (SS / S / A / B / C / F)
│   │       ├── RealismChip.tsx          Per-realism coloured chip (achievable → blocked)
│   │       ├── TierDots.tsx             Mini tier-score visual on cards
│   │       ├── CriterionRow.tsx         Single rubric criterion row in tier accordions
│   │       └── browser.module.css       The visual identity (~32KB)
│   │
│   └── areas/                    DATA LAYER (decoupled from UI)
│       ├── types.ts              Area, Project, all sub-types, FilterState, Grade, Quality
│       ├── config.ts             browserMeta + filter group definitions
│       ├── filtering.ts          Pure functions for filter, search, sort
│       └── data/
│           ├── helpers.ts        Builder functions used by migrated entries
│           ├── index.ts          Re-exports the ordered areas[] array
│           └── <slug>.ts × 14    One typed Area per file (each containing nested Projects)
│
├── docs/
│   └── research/                 Markdown fact-check reports from the original 2026-03-11 sweep
│       └── _logs/                Per-agent stdout/stderr/prompt logs
│
├── scripts/
│   ├── launch_research_agents.mjs   Original orchestrator (will be updated for the Phase F sweep)
│   └── validate-areas.ts            Phase B7 — structural integrity validation
│
├── context/
│   ├── architecture.md           THIS FILE
│   ├── notes.md                  Index of notes
│   ├── notes/                    user-profile, relocation-constraints, search-rubric
│   ├── plans/                    website-refactor.md (active plan)
│   ├── references/               data-schema.md, candidate-areas.md (and merge-protocol when written)
│   └── systems/                  areas-data.md, area-browser.md
│
├── public/                       (empty by design)
├── README.md                     Stub
└── CLAUDE.md                     Project-level governance for the principal-engineering collaborator
```

---

## Dependency direction

```
                    ┌──────────────────────────────┐
                    │ app/page.tsx (server)        │
                    │ - imports areas[] from       │
                    │   src/areas/data             │
                    └──────────────┬───────────────┘
                                   │ props
                                   ▼
                    ┌──────────────────────────────┐
                    │ BrowserClient ("use client")  │
                    │ owns:                        │
                    │  - FilterState               │
                    │  - SortMode                  │
                    │  - openAreaId                │
                    │  - openProjectId             │
                    └──┬─────────────┬─────────┬───┘
                       │             │         │
              ┌────────┘             │         └──────────┐
              ▼                      ▼                    ▼
   ┌────────────────────┐  ┌──────────────────┐ ┌──────────────────┐
   │ src/areas/         │  │ Browser*         │ │ AreaModal /      │
   │ filtering.ts (pure)│  │ Card / Header /  │ │ ProjectModal     │
   └────────────────────┘  │ FilterBar        │ │ + accordions     │
                           └──────────────────┘ └──────────────────┘
                                                          ▲
                                                          │ uses Area + Project types
   src/areas/data/*.ts ──► src/areas/data/index.ts        │
                                  │                       │
                                  ▼                       │
                       consumed only by app/page.tsx ─────┘
```

The arrows only point downward and rightward. The data layer (`src/areas/`) knows nothing about React. The UI (`src/components/browser/`) imports from the data layer but never the other way round. `app/page.tsx` is the only place where data and UI are wired.

---

## The two-tier data model

The biggest change in the refactor was moving from **flat establishments** to **areas containing projects**. Old: 19 flat entries that conflated places and developments. New: 14 areas, 78 nested projects, with the area's grade and a project's grade independent so that "good project in an okay area" and "okay project in a good area" both surface as legitimate candidates.

```
Area (top-level entity)
 ├── id, name, aliases, borough, postcodes
 ├── headline, preview, hero_image_url
 ├── long_form { full, history, vibe, weekday, weekend, notable, croydon_comparison }
 ├── zones, connectivity, demographics, safety, green_and_water, amenities, regeneration
 ├── evaluation { T1, T2, T3, T5 + overall_grade }
 ├── projects[]  ← nested
 ├── external_links, personal_notes, research
 │
 └── Project
       ├── id, name, area_id (back-reference)
       ├── developer, operator, building_type, units_total, build_completed
       ├── rental
       │     ├── tenure, prices
       │     └── qualification        ← THE most important section
       │           ├── income_multiple, upfront_max_months, guarantor_acceptable
       │           ├── visa_friendly, credit_check, ...
       │           └── grad_visa_realism  ← single derived signal driving green/amber/red card chip
       ├── building_quality (T2.6), amenities (T4.1), architecture (T4.4)
       ├── long_form, resident_signal
       ├── evaluation { T2.6 + T4.1 + T4.4 + overall_grade }
       └── external_links, research
```

Full schema in `context/references/data-schema.md`. Code in `src/areas/types.ts`.

---

## The rubric-driven evaluation

Every area carries a rubric evaluation across four tiers (T1 foundational, T2 daily life, T3 identity, T5 personal fit). Every project carries a rubric evaluation across three criteria (T2.6 building quality, T4.1 amenity package, T4.4 signature architecture). The rubric itself is locked in `context/notes/search-rubric.md`; the schema fields that store evaluations match the rubric one-for-one.

```
       T1 Foundational viability    (area)   ← hard floor — fail = excluded
       T2 Daily life quality        (area + project)   ← the actual upgrade test
       T3 Place identity            (area)
       T4 Premium experience        (project)   ← trophy overlay
       T5 Personal fit              (area)
```

Grade synthesis uses the Cernio-parity scale: **SS / S / A / B / C / F**.

The unique-to-Flatbrowser signal that no other property tool produces is `Project.rental.qualification.grad_visa_realism` — a four-state derived field (`achievable` / `achievable-with-upfront` / `unlikely` / `blocked`, plus `unknown`) that surfaces directly on the project card as a green/amber/orange/red indicator. This is the field that lets Caner scan an area modal and immediately see which projects are even worth investigating versus which are aspirational only.

---

## The drill-down UI

Three levels of depth, each genuinely richer than the previous:

1. **Main grid** — auto-fill grid of `AreaCard` components. Each card shows hero, borough, name, zones, project count, grade chip, preview, T1/T2/T3/T5 mini dots, and stat footer (lines, time-to-City, time-to-CW, age cohort, best project grade).
2. **Area modal** — opens on card click. Header with grade + headline, then accordion sections: At a glance, Vibe & character, T1, T2, T3, T5, Connectivity, Demographics, Safety, Green & water, Regeneration, External links, Projects in this area. The Projects accordion contains `ProjectCard` components that open the next level.
3. **Project modal** — opens on project card click, stacks on top of the area modal with a back button. Header with grade + realism chip + headline, then accordion sections: At a glance, **Renting here** (the most important section, with the full graduate-visa qualification block), Building quality, Amenities, Architecture, Living experience, Resident perspective, Project evaluation, External links.

Modal scroll-lock and Escape handling are coordinated so the project modal grabs focus from the area modal when open and returns it when closed.

---

## Filter pipeline

Filters operate at two layers — area and project — with cascading semantics:

- **Area-level filters** narrow the area grid directly (zones, age cohort, area grade, multi-cluster commute floor, regeneration status, has-river/canal/dock).
- **Project-level filters** (tenure, building type, **graduate-visa realism**, project grade, has-pool, has-concierge) cascade: an area passes if at least one of its projects matches. This is what makes the "good project in an okay area" cross-quality model work — the area inherits its best project's match.
- **Within a category**: OR (selecting Zone 2 + Zone 3 matches either). **Fixed** from the previous AND-within-category bug.
- **Across categories**: AND.
- **Free-text search**: substring match across area name, borough, postcodes, all long-form fields, line/station names, and every project's identifying fields.

Sort modes: `area-grade` (default), `best-project-grade`, `name`.

Pure functions in `src/areas/filtering.ts`. Filter state typed in `types.ts` as `FilterState`.

---

## Data and research lineage

The 14 areas in `src/areas/data/` are the source of truth for the app. They were migrated from the 19-entry `src/establishments/data/` dataset on 2026-04-11 as part of the refactor. Most rich fields (long-form sub-sections, demographics breakdowns, amenity inventories, rental qualification realism) are stubbed with `unknown` or empty arrays — those gaps are what the **Phase F sweep** is designed to fill.

The Phase F sweep dispatches 10 parallel agents against a candidate list of ~95 areas (`context/references/candidate-areas.md`), each with a focus assignment (safety, daily life, demographics, cultural identity, green space, premium amenity, connectivity, regeneration, **rental qualification realism**, resident voice). Agent briefs live in `context/agent-briefs/`, the orchestration script is `scripts/launch_research_agents.mjs` (will be updated for the new sweep).

Research provenance: every fact in the schema has a `SourceLink[]` field, every agent records its `ResearchMeta` with `confidence` and `open_questions`. The validation script enforces structural integrity but not source completeness — that's the agent's job.

```
External sources                    Sweep agents              Data files
─────────────────                   ───────────────           ──────────
TfL fare maps          ┐
Census 2021 (ONS)      │
Rightmove / Zoopla     │   10 parallel    docs/research/sweep-<focus>/<slug>.md
GLA planning data      ├──────────────►   merged via E4 protocol   ────►   src/areas/data/<slug>.ts
Operator websites      │
HomeViews              │
Met Police data        │
Local Reddit / press   ┘
```

---

## Tier and grade colour systems

The CSS module exposes per-tier and per-grade colour pairs as CSS custom properties:

- `--c-t1` … `--c-t5` for tier colours (T1 blue, T2 green, T3 amber, T4 violet, T5 teal)
- `--c-grade-ss` … `--c-grade-f` for grade colours (SS gold-light, S gold, A green, B blue, C amber, F red)
- `--c-realism-achievable` (green) … `--c-realism-blocked` (red), plus `--c-realism-unknown` (grey)

Components apply colours via `data-tier`, `data-grade`, `data-realism` attributes. Adding a new tier or grade is a CSS-only change.

---

## What the project deliberately does not have

- **No backend, no API, no database.** Everything is build-time static.
- **No state persistence.** Reloading resets filters, sort, and modal state.
- **No URL state.** Filters do not sync to query parameters.
- **No tests yet.** The pure functions in `filtering.ts` are testable but not yet tested.
- **No analytics, telemetry, or error reporting.**
- **No image hosting.** Hero images are linked URLs with typography fallback.
- **No favourites / shortlist / personal notes via UI** (deferred to v2).
- **No side-by-side comparison view** (deferred to v2).
- **No mobile-bespoke layouts** (responsive but not mobile-first).

These omissions are aligned with the project's purpose: a personal decision tool, not a public product.

---

## Where to look for what

| Question                                               | File                                              |
|--------------------------------------------------------|---------------------------------------------------|
| What does the page render?                             | `app/page.tsx` → `BrowserClient.tsx`              |
| What does the schema look like?                        | `src/areas/types.ts` + `context/references/data-schema.md` |
| How does filter logic work?                            | `src/areas/filtering.ts`                          |
| What are the filter taxonomies?                        | `src/areas/config.ts`                             |
| What does an area look like?                           | `src/areas/data/<slug>.ts`                        |
| What are the rubric criteria?                          | `context/notes/search-rubric.md`                  |
| Where's the visual identity defined?                   | `src/components/browser/browser.module.css`       |
| How does the modal stacking work?                      | `src/components/browser/AreaModal.tsx` + `ProjectModal.tsx` |
| Where's the rental-qualification section?              | `src/components/browser/ProjectModal.tsx` (Renting here accordion) |
| What's the active plan for the project?                | `context/plans/website-refactor.md`               |
| What candidates are queued for the next sweep?         | `context/references/candidate-areas.md`           |
| How do I validate the data?                            | `pnpm exec tsx scripts/validate-areas.ts`         |
| How do I type-check?                                   | `pnpm exec tsc --noEmit`                          |
| How do I build?                                        | `pnpm exec next build`                            |
| What does Caner care about most?                       | `context/notes/user-profile.md` + `context/notes/relocation-constraints.md` |
