# Flatbrowser — Architecture

## Scope / Purpose

A personal, single-page London relocation tool built around a **rubric-driven, two-tier areas-with-projects** data model with a **personal-relevance explainer system** layered on top. **55 London areas containing 266 nested projects** (post-ghost-deletion count as of 2026-04-17), each evaluated against a 5-tier search rubric and rendered through a three-level drill-down UI (area card → area modal → project modal) with accordion-based depth, inline tooltips, and per-field severity-graded explainers tied to the user's specific situation. There is no backend, no database, no analytics — every byte is statically generated from typed TypeScript constants.

The project exists to support one person's real relocation decision: Caner is on a UK Graduate visa with no formal work history, currently paying ~£3k/month all-in at Ten Degrees Croydon, and needs to find an upgrade area where the rental qualification process is realistic given his constraints (no UK credit history, no UK payslips, Graduate visa expiring August 2027). The tool is **explicitly designed to be the last website needed for that decision** — better than HomeViews + Rightmove + Google combined for this specific job — and that framing shapes every architectural decision below.

**The Renters' Rights Act 2025** (commencing 1 May 2026) fundamentally reshaped the rental qualification model during this session. The Act caps advance rent at one month and abolishes Section 21 no-fault evictions. This eliminated the "pay upfront to bypass referencing" strategy that was previously the primary route for international renters without UK payslips. The schema, explainers, and realism derivation were all rebuilt to reflect the post-RRA reality — new fields track agreement type (AST vs licence), referencing provider, professional guarantor acceptance, and Open Banking income verification as the replacement qualification routes. The full RRA research is in `context/references/renters-rights-act.md`.

This document reflects state as of 2026-04-17 after four major passes: the 2026-04-12 **sweep fold-in + data integrity pass**, the 2026-04-16 **realism schema redesign** + V1 **data-upkeep run** (266 projects populated across 92 operators, one ghost deletion), and the 2026-04-17 **data-upkeep V2/V3/V4 scaffold + affordability field** (affordability as a profile-relative counterpart to cost_tier, end-to-end schema → UI; data-upkeep skill extended to cover enrichment, area research, and grade recalibration under flag-driven scope).

The earlier passes: 2026-04-12 sweep fold-in — the session that expanded the dataset from 14 areas / 78 projects to 55 areas / ~251 projects, rebuilt the rental qualification model for the post-RRA world, added 20 sweep research files plus 5 project-specific research files, and then ran a full website-links + price-transparency + suspect-entry audit that added 219 verified operator/developer URLs, a new `PriceTransparency` filter (`listed` / `enquire` / `unknown`), removed 4 hallucinated/duplicate projects, and added "Visit website" links in modal headers. The full refactor history is in `context/plans/website-refactor.md`. The schema contract is in `context/references/data-schema.md`. The locked search criteria are in `context/notes/search-rubric.md`. The personal-relevance pattern is documented in `context/notes/personal-relevance-pattern.md`. The RRA reference is at `context/references/renters-rights-act.md`.

---

## Repository Overview

| Layer        | Choice                              | Notes                                                              |
|--------------|-------------------------------------|--------------------------------------------------------------------|
| Framework    | Next.js 16 (App Router, Turbopack)  | Single route, server component shell handing typed `Area[]` to one client component |
| UI runtime   | React 19                            | `useDeferredValue` on filter state for input responsiveness        |
| Styling      | Tailwind v4 + CSS Module            | Tailwind imported globally; the browser UI is one CSS module (~32KB) with full per-tier and per-grade colour systems |
| Type system  | TypeScript (strict)                 | All data is typed at the source; runtime validation via `scripts/validate-areas.ts` |
| Package mgr  | pnpm                                | Single package, no workspace                                       |
| Fonts        | DM Sans (body) + Cormorant Garamond (display) | Loaded via `next/font/google` and exposed as CSS variables |
| Tooling      | tsx (dev)                           | Powers the validation script                                       |

The repo is a single Next.js app with no workspace. Three logical layers (data, profile+explainers, UI) live under `src/`, and the App Router shell lives under `app/`. The project memory layer is in `context/`. The original 2026-03 research outputs, the 2026-04 sweep outputs (20 files), and the Phase F sweep dispatch script live in `docs/research/` and `scripts/` respectively.

---

## Repository Structure

```text
flatbrowser/
├── app/                          Next.js App Router shell
│   ├── layout.tsx                Root layout, font wiring, metadata
│   ├── page.tsx                  Server component; hands areas[] to BrowserClient
│   └── globals.css               Tailwind import + base resets
│
├── src/
│   ├── components/
│   │   └── browser/              ALL UI for the browser (one feature, one folder)
│   │       ├── BrowserClient.tsx        Client orchestrator — owns state, keyboard shortcuts
│   │       ├── BrowserHeader.tsx        Headline + 4 metrics + right-hand "How to read this" card
│   │       ├── BrowserFilterBar.tsx     Sort + search + collapsible filter panel
│   │       ├── BrowserFooter.tsx        Footer note + counts
│   │       ├── AreaCard.tsx             Main grid card with grade-coloured left border
│   │       ├── AreaModal.tsx            Deep area view with all accordion sections
│   │       ├── ProjectCard.tsx          Project card with realism-coloured left border
│   │       ├── ProjectModal.tsx         Deep project view with rental-qualification section
│   │       ├── Accordion.tsx            React-stateful accordion (grid-row height anim, lazy paint)
│   │       ├── ExplainedValue.tsx       Personal-relevance value box; entire header is a button toggle, chevron indicator
│   │       ├── ProseBlock.tsx           Splits long-form text on `\n\n` and renders as paragraphs (shared by both modals)
│   │       ├── Tooltip.tsx              Portal-rendered tooltip (escapes overflow/stacking)
│   │       ├── GradeChip.tsx            Per-grade coloured chip (SS / S / A / B / C / F)
│   │       ├── RealismChip.tsx          Per-realism coloured chip (achievable → blocked)
│   │       ├── TierDots.tsx             Mini tier-score visual on cards
│   │       ├── CriterionRow.tsx         Collapsible rubric criterion row — header (id + name + status chip) always visible, reasoning behind a click
│   │       └── browser.module.css       The visual identity — design tokens on `:root`, per-tier and per-grade colour systems, animations, accents
│   │
│   ├── areas/                    DATA LAYER (decoupled from UI)
│   │   ├── types.ts              Area, Project, all sub-types, FilterState, Provenance, Grade, Quality,
│   │   │                         AgreementType, ReferencingProvider, CostTier, AffordabilityTag, PriceTransparency,
│   │   │                         GradVisaRealism (7-value incl. unclear), RealismPathway (6-value conditional)
│   │   ├── config.ts             browserMeta + filter group definitions
│   │   ├── labels.ts             Display label maps for every enum + descriptions
│   │   ├── filtering.ts          Pure functions for filter, search, sort
│   │   └── data/
│   │       ├── helpers.ts        Builder functions used by migrated entries
│   │       ├── index.ts          Re-exports the ordered areas[] array
│   │       └── <slug>.ts × 55    One typed Area per file (King's Cross is the gold-standard exemplar)
│   │
│   ├── profile/                  USER PROFILE (typed memory of who Caner is)
│   │   └── caner.ts              UserProfile constant — visa, payslips, credit, current rent, age, lifestyle
│   │
│   └── explainers/               EXPLAINER SYSTEM (the personal-relevance layer)
│       ├── types.ts              Explainer interface, Severity, PersonalRelevance
│       ├── index.ts              Registry of all 33 explainers + getExplainer()
│       └── <concept>.ts × 33     One file per domain term (income-multiple, credit-check, agreement-type,
│                                 affordability, ...)
│
├── docs/
│   └── research/                 Markdown fact-check reports from the original 2026-03-11 sweep
│       ├── _logs/                Per-agent stdout/stderr/prompt logs
│       └── sweep/                2026-04 sweep outputs — 20 files (15 focus/discovery + 5 project-specific)
│           ├── sweep-NN-*.md × 15   One file per focus/discovery agent
│           ├── sweep-16..20-*.md × 5  Extended research (Quarters by Bravo, extended stays, aparthotels, etc.)
│           └── _logs/            Per-agent dispatch logs
│
├── scripts/
│   ├── launch_research_agents.mjs   Original orchestrator (legacy — generated the 2026-03-11 reports)
│   ├── launch_sweep_agents.mjs      Phase F dispatcher — 15 parallel codex agents (10 focus + 5 discovery)
│   ├── find-gaps.ts                 Data query tool — stats, coverage, field gaps, severity analysis
│   └── validate-areas.ts            Structural integrity validation for the data layer
│
├── .claude/skills/
│   └── data-upkeep/                 Project-local skill invoked as /data-upkeep
│       ├── SKILL.md                 V4: qualification + enrichment + area-research + grade-recalibration
│       ├── references/              9 reference files — schemas, playbooks, ghost detection,
│       │                            realism pathway derivation, migration rules, grade recalibration
│       └── scripts/
│           ├── enumerate-operators.ts  Pre-flight: groups projects by operator (--seed for shuffled re-runs)
│           └── enumerate-areas.ts      Pre-flight: partitions 55 areas into ~11 batches (--seed support)
│
├── context/
│   ├── architecture.md           THIS FILE
│   ├── notes.md                  Index of notes
│   ├── notes/                    user-profile, relocation-constraints, search-rubric,
│   │                             consensus-synthesis-model, personal-relevance-pattern,
│   │                             layout-decisions, explainer-type-safety, relative-grading
│   ├── plans/                    website-refactor.md (active plan, polish complete)
│   ├── references/               data-schema, candidate-areas, merge-protocol, renters-rights-act
│   ├── systems/                  areas-data, area-browser, explainers
│   └── agent-briefs/             template + 15 focus briefs for the Phase F sweep
│
├── public/                       (empty by design)
├── README.md                     Stub
├── CLAUDE.md                     Project-level governance for the principal-engineering collaborator
└── claude.md                     Personal notes file
```

---

## Subsystem Responsibilities

| Subsystem | Owns | Canonical doc |
|---|---|---|
| **Data layer** (`src/areas/`) | The two-tier `Area` + nested `Project` schema, 55 areas with ~251 nested projects, the typed labels for every enum (including post-RRA types: `AgreementType`, `ReferencingProvider`, `CostTier`), and the pure filter/sort/search functions. Knows nothing about React or the user. | `context/systems/areas-data.md` + `context/references/data-schema.md` |
| **User profile** (`src/profile/`) | A typed `UserProfile` constant capturing Caner's specific facts (visa, payslips, credit, current rent, age, lifestyle). The single source of "who is the reader". | Documented inline in `context/systems/explainers.md` |
| **Explainer system** (`src/explainers/`) | 33 pure-function modules — one per domain term — each computing a severity-graded personal-relevance message from `(profile, value)`. Includes 5 post-RRA explainers (agreement-type, referencing-provider, professional-guarantor, cost-tier, min-tenancy) and the price-transparency explainer. The bridge between generic data and personal interpretation. | `context/systems/explainers.md` + `context/notes/personal-relevance-pattern.md` |
| **Area browser UI** (`src/components/browser/`) | The single user-facing feature: main grid, three-level drill-down (area card → area modal → project modal), filter bar (now includes agreement type, referencing provider, cost tier, price transparency filters), accordion primitive (collapsed by default, expanded cards sort to top), portal-rendered tooltip primitive, ExplainedValue wrapper with scale-strip for enum fields, the visual identity (~2500-line CSS module), and the keyboard shortcut handler. | `context/systems/area-browser.md` |
| **App Router shell** (`app/`) | The Next.js entry: server component `page.tsx` that hands typed `areas[]` to `BrowserClient`, root layout with font wiring, global Tailwind import. The only place data and UI are wired together. | `context/architecture.md` (this file) |
| **Sweep tooling** (`scripts/launch_sweep_agents.mjs` + `context/agent-briefs/`) | Phase F dispatcher that fans out 15 parallel codex agents (10 focus + 5 discovery) and the agent prompt overlays they use. Sweep has been dispatched; 20 research files returned in `docs/research/sweep/`. | `context/plans/website-refactor.md` (Phase F) + `context/notes/consensus-synthesis-model.md` |
| **Data validation & query** (`scripts/validate-areas.ts` + `scripts/find-gaps.ts`) | `validate-areas.ts` checks structural integrity — counts areas, counts projects, walks every required field. `find-gaps.ts` is the expanded data query tool providing stats, coverage analysis, field-level gap detection, and severity reports. | Documented inline in `context/systems/areas-data.md` |
| **Data-upkeep skill** (`.claude/skills/data-upkeep/`) | V4 skill that maintains factual integrity of the dataset. Dispatches parallel research agents on two tracks (operators + areas), enforces true relative calibration via comparables injection + shuffled re-runs + cross-batch review + distribution gates, applies field-level edits, runs grade recalibration as an orchestrator-only V3 pass. Flag-driven scope: `--qualification-only` / `--enrichment-only` / `--area-research` / `--recalibrate` / `--full`. | `context/plans/data-upkeep-skill.md` + `context/notes/data-upkeep-single-skill.md` + `context/notes/relativity-mechanisms.md` |

---

## Dependency Direction

```
                       ┌──────────────────────────────────┐
                       │ app/page.tsx (server)            │
                       │ - imports areas[]                │
                       └──────────────────┬───────────────┘
                                          │ props
                                          ▼
                       ┌──────────────────────────────────┐
                       │ BrowserClient ("use client")     │
                       │ owns FilterState / SortMode /    │
                       │ openAreaId / openProjectId       │
                       │ + global keyboard shortcuts      │
                       └────┬─────────┬─────────┬─────┬───┘
                            │         │         │     │
               ┌────────────┘         │         │     └──────────┐
               ▼                      ▼         ▼                ▼
   ┌──────────────────────┐  ┌──────────────┐ ┌──────────────┐ ┌─────────────────┐
   │ src/areas/           │  │ Browser*     │ │ AreaModal /  │ │ ExplainedValue  │
   │ filtering.ts (pure)  │  │ Card / Hdr / │ │ ProjectModal │ │ + Tooltip       │
   │ + labels.ts          │  │ FilterBar    │ │ + Accordion  │ │ (W4 layer)      │
   └──────────────────────┘  └──────────────┘ └──────────────┘ └────────┬────────┘
                                                                        │
                                                                        ▼
                                                       ┌────────────────────────────┐
                                                       │ src/explainers/            │
                                                       │  - 33 explainer files      │
                                                       │  - getExplainer(id)        │
                                                       │  - relevance(profile, val) │
                                                       └────────────┬───────────────┘
                                                                    │
                                                                    ▼
                                                       ┌────────────────────────────┐
                                                       │ src/profile/caner.ts       │
                                                       │ Typed UserProfile constant │
                                                       └────────────────────────────┘

   src/areas/data/*.ts ──► src/areas/data/index.ts ──► consumed only by app/page.tsx
   src/areas/types.ts ◄── consumed by everything in src/areas/, src/components/browser/,
                          and (transitively, via labels) the explainers via shared enums
```

The arrows only point downward and rightward. The data layer (`src/areas/`) knows nothing about React. The explainer layer (`src/explainers/` + `src/profile/`) is consumed by the UI but doesn't know about React either — the explainers are pure functions taking a profile and a value and returning a personal-relevance message. The UI (`src/components/browser/`) imports from both layers but never the other way round. `app/page.tsx` is the only place where data and UI are wired.

Three independent module groups, three independent layers, fully testable in isolation:

| Group | What it knows about |
|---|---|
| `src/areas/` | The data model and its enums; nothing about React, profiles, or UI. |
| `src/profile/` + `src/explainers/` | The user's situation, the rubric concepts, and how to compute personal relevance for any value type. Knows nothing about UI or how its output is rendered. |
| `src/components/browser/` | React, the visual identity, the modal stacking, and how to wire the data + explainer outputs onto the screen. Uses the data layer's types and the explainer layer's functions but neither has any awareness of the UI. |

---

## Core Execution / Data Flow

The runtime model is small because the project has no backend. There are three flows worth understanding:

**1. Page render flow.** `app/page.tsx` (server component) imports `areas` from `src/areas/data/index.ts`, hands it to `BrowserClient` as a prop. `BrowserClient` is the only stateful node in the tree — it owns `filters`, `sortMode`, `openAreaId`, `openProjectId`, plus the global keyboard shortcut handler. Children receive props and dispatch toggles back up. There is no Redux, no Context, no Zustand — props all the way.

**2. Filter pipeline.** Filters operate at two layers — area and project — with cascading semantics:

- **Area-level filters** narrow the area grid directly (zones, age cohort, area grade, multi-cluster commute floor, regeneration status, has-river/canal/dock).
- **Project-level filters** (tenure, building type, **graduate-visa realism**, project grade, cost tier, agreement type, referencing provider, has-pool, has-concierge) cascade: an area passes if at least one of its projects matches. This is what makes the "good project in an okay area" cross-quality model work — the area inherits its best project's match.
- **Within a category**: OR (selecting Zone 2 + Zone 3 matches either). **Fixed** from the previous AND-within-category bug.
- **Across categories**: AND.
- **Free-text search**: substring match across area name, borough, postcodes, all long-form fields, line/station names, and every project's identifying fields.

Sort modes: `area-grade` (default), `best-project-grade`, `name`. All filtering and sorting is done by pure functions in `src/areas/filtering.ts`. `useDeferredValue` keeps input responsive; `useMemo` caches the sorted+filtered array between filter changes.

**3. Personal-relevance pipeline.** Every value box wrapped in `<ExplainedValue explainerId=… rawValue=…>` flows through the explainer system: `getExplainer(id)` → `relevance(caner, rawValue)` → severity-graded `PersonalRelevance` → coloured visual treatment. The explainer functions are synchronous and pure; the personalisation happens at render time, not at data-load time. Same dataset would render differently for a different `UserProfile`.

### The two-tier data model

The biggest structural change was moving from **flat establishments** to **areas containing projects**. The dataset has since expanded dramatically: **55 areas, ~249 nested projects**, with the area's grade and a project's grade independent so that "good project in an okay area" and "okay project in a good area" both surface as legitimate candidates.

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
       │     ├── tenure, prices, cost_tier
       │     └── qualification        ← THE most important section (rebuilt for post-RRA reality)
       │           ├── income_multiple, agreement_type, referencing_provider
       │           ├── professional_guarantor_accepted, open_banking_accepted
       │           ├── guarantor_acceptable, visa_friendly, credit_check, ...
       │           ├── min_tenancy_months
       │           └── grad_visa_realism  ← 6-state signal (achievable / achievable-with-guarantor /
       │                                     licence-exempt / unlikely / blocked / unknown)
       ├── building_quality (T2.6), amenities (T4.1), architecture (T4.4)
       ├── long_form, resident_signal
       ├── evaluation { T2.6 + T4.1 + T4.4 + overall_grade }
       └── external_links, research
```

Full schema in `context/references/data-schema.md`. Code in `src/areas/types.ts`.

### The rubric-driven evaluation

Every area carries a rubric evaluation across four tiers (T1 foundational, T2 daily life, T3 identity, T5 personal fit). Every project carries a rubric evaluation across three criteria (T2.6 building quality, T4.1 amenity package, T4.4 signature architecture). The rubric itself is locked in `context/notes/search-rubric.md`; the schema fields that store evaluations match the rubric one-for-one.

```
       T1 Foundational viability    (area)   ← hard floor — fail = excluded
       T2 Daily life quality        (area + project)   ← the actual upgrade test
       T3 Place identity            (area)
       T4 Premium experience        (project)   ← trophy overlay
       T5 Personal fit              (area)
```

Grade synthesis uses the Cernio-parity scale: **SS / S / A / B / C / F**.

The unique-to-Flatbrowser signal that no other property tool produces is `Project.rental.qualification.grad_visa_realism` — a six-state derived field (`achievable` / `achievable-with-guarantor` / `licence-exempt` / `unlikely` / `blocked` / `unknown`) that surfaces directly on the project card as a coloured indicator. The derivation was rebuilt for the post-RRA world: "achievable-with-upfront" no longer exists (the RRA caps advance rent at one month), replaced by "achievable-with-guarantor" (professional guarantor services like Housing Hand / Guarantid) and "licence-exempt" (accommodation agreements outside the RRA's scope). This is the field that lets Caner scan an area modal and immediately see which projects are even worth investigating versus which are aspirational only.

### The drill-down UI

Three levels of depth, each genuinely richer than the previous:

1. **Main grid** — auto-fill grid of `AreaCard` components. Each card shows hero, borough, name, zones, project count, grade chip, preview, T1/T2/T3/T5 mini dots, and stat footer (lines, time-to-City, time-to-CW, age cohort, best project grade).
2. **Area modal** — opens on card click. Header with grade + headline, then accordion sections: At a glance, Vibe & character, T1, T2, T3, T5, Connectivity, Demographics, Safety, Green & water, Regeneration, External links, Projects in this area. The Projects accordion contains `ProjectCard` components that open the next level.
3. **Project modal** — opens on project card click, stacks on top of the area modal with a back button. Header with grade + realism chip + headline, then accordion sections: At a glance, **Renting here** (the most important section, with the full graduate-visa qualification block), Building quality, Amenities, Architecture, Living experience, Resident perspective, Project evaluation, External links.

Modal scroll-lock and Escape handling are coordinated so the project modal grabs focus from the area modal when open and returns it when closed.

### Data and research lineage

The 55 areas in `src/areas/data/` are the source of truth for the app. The original 14 were migrated from the 19-entry `src/establishments/data/` dataset on 2026-04-11; 41 new areas were added from the 2026-04 sweep results and fold-in process. King's Cross remains the gold-standard fully-populated exemplar; the newer entries are populated to varying depths depending on sweep coverage and the fold-in progress.

The Phase F sweep dispatched **15 parallel codex agents** (10 focus + 5 discovery) via `scripts/launch_sweep_agents.mjs` against a candidate list of ~95 areas (`context/references/candidate-areas.md`), plus **5 additional project-specific research files** (sweep-16 through sweep-20) covering extended-stay and licence-based accommodation. The 20 returned research files live in `docs/research/sweep/`. Synthesis is performed by Claude as a post-sweep step using the **consensus voting model** documented in `context/references/merge-protocol.md` — facts agreed by ≥10 agents are high confidence, 5–9 medium, ≤4 low, dissent preserved with attribution via the `Provenance` schema block. See `context/notes/consensus-synthesis-model.md` for the rationale behind this design.

Research provenance: every fact in the schema has a `SourceLink[]` field, every agent records its `ResearchMeta` with `confidence` and `open_questions`, and every major section can carry an optional `provenance?: Provenance` block recording contributing agents, consensus level, and dissent. The validation script enforces structural integrity but not source completeness — that's the agent's job.

```
External sources                Sweep agents (15 parallel)        Data files
─────────────────               ──────────────────────────         ──────────
TfL fare maps          ┐
Census 2021 (ONS)      │
Rightmove / Zoopla     │   10 focus + 5 discovery     docs/research/sweep/sweep-NN-<slug>.md
GLA planning data      ├────────────────────────►     × 15 files                      ─┐
Operator websites      │                                                               │
HomeViews              │                                                               │
Met Police data        │                                                               │
Local Reddit / press   ┘                                                               │
                                                                                       │
                                Synthesis (Claude + sub-agents,                        │
                                consensus voting per merge-protocol)  ◄────────────────┘
                                          │
                                          ▼
                                src/areas/data/<slug>.ts
```

---

## Structural Notes / Current Reality

### Tier and grade colour systems

The CSS module exposes per-tier and per-grade colour pairs as CSS custom properties:

- `--c-t1` … `--c-t5` for tier colours (T1 blue, T2 green, T3 amber, T4 violet, T5 teal)
- `--c-grade-ss` … `--c-grade-f` for grade colours (SS gold-light, S gold, A green, B blue, C amber, F red)
- `--c-realism-achievable` (green) … `--c-realism-blocked` (red), plus `--c-realism-unknown` (grey)

Components apply colours via `data-tier`, `data-grade`, `data-realism` attributes. Adding a new tier or grade is a CSS-only change.

### What the project deliberately does not have

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

### Where to look for what

| Question                                               | File                                              |
|--------------------------------------------------------|---------------------------------------------------|
| What does the page render?                             | `app/page.tsx` → `BrowserClient.tsx`              |
| What does the schema look like?                        | `src/areas/types.ts` + `context/references/data-schema.md` |
| How does filter logic work?                            | `src/areas/filtering.ts`                          |
| What are the filter taxonomies?                        | `src/areas/config.ts`                             |
| What does an area look like?                           | `src/areas/data/<slug>.ts` (King's Cross is the gold-standard exemplar) |
| What does each enum value display as?                  | `src/areas/labels.ts` (label maps + descriptions for every enum) |
| Who is the user and what is their relevance computed against? | `src/profile/caner.ts` |
| How does any domain term get explained?                | `src/explainers/<concept>.ts` (32 concept files) + `src/explainers/index.ts` registry |
| What does the explainer system do?                     | `context/systems/explainers.md` |
| How does the personal-relevance pattern work?          | `context/notes/personal-relevance-pattern.md`     |
| What are the rubric criteria?                          | `context/notes/search-rubric.md`                  |
| Where's the visual identity defined?                   | `src/components/browser/browser.module.css`       |
| How does the modal stacking work?                      | `src/components/browser/AreaModal.tsx` + `ProjectModal.tsx` |
| Where's the rental-qualification section?              | `src/components/browser/ProjectModal.tsx` (Renting here accordion) |
| Why is synthesis done by consensus rather than ownership? | `context/notes/consensus-synthesis-model.md`   |
| What's the active plan for the project?                | `context/plans/website-refactor.md` (F2 sweep dispatched; F3–F4 in progress — research reviewed, partial fold-in) |
| What candidates are queued for the next sweep?         | `context/references/candidate-areas.md`           |
| What does each sweep agent do?                         | `context/agent-briefs/template.md` + `focuses/01–15.md` |
| How are sweep outputs synthesised?                     | `context/references/merge-protocol.md`            |
| How do I dispatch the sweep?                           | `node scripts/launch_sweep_agents.mjs --dry-run` (then without `--dry-run`) |
| How do I run a data-upkeep pass?                       | `/data-upkeep` (full) — flags: `--qualification-only` / `--enrichment-only` / `--area-research` / `--recalibrate` / `--operators X,Y` / `--areas X,Y` / `--seed N` / `--dry-run` |
| What does the data-upkeep skill do?                    | `.claude/skills/data-upkeep/SKILL.md` + `context/plans/data-upkeep-skill.md` |
| What relativity mechanisms does the skill enforce?     | `context/notes/relativity-mechanisms.md` (comparables injection, shuffled re-runs, cross-batch review, distribution gates) |
| How do I enumerate operators / areas for upkeep?       | `pnpm exec tsx .claude/skills/data-upkeep/scripts/enumerate-operators.ts --seed N --format markdown` (mirror: enumerate-areas.ts) |
| How do I query data gaps and coverage?                 | `pnpm exec tsx scripts/find-gaps.ts` (stats, coverage, fields, severity modes) |
| How do I validate the data?                            | `pnpm exec tsx scripts/validate-areas.ts`         |
| What is the RRA and how does it affect the model?      | `context/references/renters-rights-act.md` (~1,800 lines) |
| How do I type-check?                                   | `pnpm exec tsc --noEmit`                          |
| How do I build?                                        | `pnpm exec next build`                            |
| What does Caner care about most?                       | `context/notes/user-profile.md` + `context/notes/relocation-constraints.md` |
| Why is affordability separate from cost_tier?          | `context/notes/affordability-field.md` (envelope-relative vs dataset-relative)   |
