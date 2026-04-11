# Flatbrowser

A personal London relocation tool. Built to be the **last website needed** for one specific decision: finding a realistic upgrade from Croydon for a graduate-visa renter with no UK credit history, no formal payslips, a three-month upfront ceiling, and an August 2027 visa expiry. Every grade, chip, and "works for you" / "blocker for you" line is computed against those exact constraints.

This is a personal decision tool, not a public product. There is no backend, no database, no analytics, no accounts — every byte is statically generated from typed TypeScript constants and the dataset is hand-curated. Adding an area is a manual editorial decision; the eventual Phase F sweep will broaden it via 15 parallel research agents and a consensus voting protocol.

## What it actually does

A single-page Next.js 16 app that surfaces 14 hand-curated London areas containing 78 nested rental projects, each evaluated against a five-tier rubric (foundational viability → daily life → identity → premium experience → personal fit). Three drill-down levels:

```
Area card  ──click──►  Area modal  ──click project──►  Project modal
   │                       │                              │
   │                       │                              │
 grade,                  rubric tier              rental qualification realism
 zones,                  accordions,              + building quality + amenities
 best-project,           connectivity,            + architecture + living
 mini tier dots          demographics, etc.       experience + resident perspective
```

Every value box flows through the **personal-relevance system** in `src/explainers/`: 28 typed explainer functions that take the user profile (`src/profile/caner.ts`) and a raw value, and return a severity-graded message ("This works for you" / "Borderline for you" / "Blocker for you" / "Informational"). The same dataset would render meaningfully different cards for a different user profile, with no data changes needed.

The unique-to-Flatbrowser signal is `Project.rental.qualification.grad_visa_realism` — a four-state field (`achievable` / `achievable-with-upfront` / `unlikely` / `blocked`) that surfaces directly on every project card as a green/amber/orange/red chip. It rolls up every rental-qualification hurdle (income proof, upfront cap, credit check, guarantor, visa expiry handling, international referencing) into one scannable answer to *"is this realistically rentable for me, right now, given my actual situation?"*

## Architecture in three layers

```
src/areas/           src/profile/  +  src/explainers/         src/components/browser/
─────────────        ─────────────────────────────────         ─────────────────────────
Area + Project       Typed UserProfile +                       React, modal stack,
schema, the          28 pure-function explainers               three-level drill-down,
14 typed areas,      computing PersonalRelevance               accordion + tooltip
filter pipeline,     from (profile, value)                     primitives, the visual
labels                                                         identity (~85KB CSS
                                                               module)

KNOWS NOTHING        KNOWS PROFILE + RUBRIC                    USES BOTH LAYERS
ABOUT REACT          BUT NOT THE UI                            BUT NEITHER KNOWS UI
```

Three independent groups, dependency arrows only point downward and rightward. The data layer is impersonal, the explainer layer doesn't import React, and `app/page.tsx` is the only place where data and UI are wired.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19 |
| Styling | Tailwind v4 globals + one CSS module for the browser feature |
| Type system | TypeScript (strict) |
| Package manager | pnpm |
| Fonts | DM Sans (body) + Cormorant Garamond (display) via `next/font/google` |
| Hosting | Vercel (static prerender) |

## Running it

```bash
pnpm install
pnpm dev          # Turbopack dev server on http://localhost:3000
```

For production verification:

```bash
pnpm exec tsc --noEmit          # type-check
pnpm exec next build            # production build (must be warning-free for Vercel)
pnpm exec tsx scripts/validate-areas.ts   # data layer structural validation
```

## Where to look for what

The deeper documentation lives in `context/`:

- **`context/architecture.md`** — full structural orientation, file layout, dependency graph, the three execution flows, and the schema model.
- **`context/systems/area-browser.md`** — the UI rendering system: component tree, modal stacking, accordion primitive, tooltip primitive, the polish-pass-2 changes.
- **`context/systems/explainers.md`** — the personal-relevance system: typed UserProfile, explainer registry, severity model, and the rawValue type-erasure trap.
- **`context/systems/areas-data.md`** — the data layer: schema, label maps, filter pipeline, migration history.
- **`context/notes/`** — design decisions, constraints, the search rubric, and "we already tried that" knowledge from each polish pass.
- **`context/plans/website-refactor.md`** — the original six-phase refactor plan and Phase F sweep design.

The gold-standard exemplar for what a fully-populated area looks like is `src/areas/data/kings-cross.ts` — every other area should aspire to this depth as the Phase F sweep populates the currently-stubbed fields.

## Status

- **Phase A–E** (data refactor, three-level drill-down, accordion UI, rubric integration): landed.
- **Phase 1 polish** (explainers, tooltips, animations, accessibility, content depth): landed 2026-04-12.
- **Polish pass 2** (header how-to card, header-as-toggle, criterion collapsibility, predictable grid, design-token cascade fix, multi-cluster-commute fix, EPC null guard, ProseBlock for long-form text): landed 2026-04-11.
- **Phase F sweep** (15 parallel agents fanning out across 95 candidate areas with consensus synthesis): designed, dispatcher implemented (`scripts/launch_sweep_agents.mjs`), gated on explicit authorisation before live dispatch.

## Personal context

The user is on a UK Graduate visa with no formal paid work history, ~£3k/month all-in at Ten Degrees Croydon, looking for a realistic upgrade. The original "best of London" shortlist (Battersea, Canary Wharf, King's Cross Gasholders) was operated by professional landlords running strict income/credit checks that block almost everything for someone in this situation. Flatbrowser exists to reframe the search around realistic rentability rather than aspirational addresses. The full constraint model is in `context/notes/relocation-constraints.md` and the user profile is in `context/notes/user-profile.md`.
