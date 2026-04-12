# Plan: Flatbrowser Refactor — areas, projects, accordions, rubric-driven evaluation

Active plan. Authored 2026-04-11 after agreeing the search rubric (`context/notes/search-rubric.md`) and the user profile (`context/notes/user-profile.md`) and confirming the project pivot in `context/notes/relocation-constraints.md`. This plan supersedes the implicit "ship the original 19 establishments" model the project was previously running on.

The plan is structured as **six phases (A → F)**, each independently shippable. Each phase has explicit exit criteria, and each task is a checkbox that gets ticked when complete. When the whole plan reaches its exit criteria, this file gets deleted (per the upkeep discipline in CLAUDE.md).

---

## Goal

Refactor Flatbrowser from "flat list of 19 trophy-tier establishments" into a **two-tier area-with-projects model**, powered by the locked 5-tier search rubric, with deep accordion-based detail at every level, so that the resulting tool is **the last website Caner needs to find an upgrade from Croydon** — better than HomeViews + Rightmove + Google combined for the specific job of evaluating where to live in London as a graduate-visa renter without paid work history.

The refactor has three goals stacked on top of each other:

1. **Fix the data model.** Current entries conflate areas (Nine Elms) and projects (Embassy Gardens / Bloom / Riverlight Quay / One Nine Elms / Battersea Switch House — all of which live *inside* Nine Elms). The new model has Areas containing Projects, with independent quality grades at each level so that "good project in an okay area" and "okay project in a good area" both surface as legitimate candidates.

2. **Make every page genuinely deep.** Current cards are a thumbnail of an establishment with a list of chips and one description paragraph. The new shape is a three-level drill-down — area card → area modal with accordions → project modal with accordions — where every fact a renter would normally have to research externally lives inside the app: structured connectivity, structured demographics, safety, regeneration trajectory, amenity inventories, building quality, rental qualification realism, resident sentiment.

3. **Define the agent contract.** The website refactor is also the **data contract** that the upcoming 15-agent London sweep (10 focus + 5 discovery) will populate via consensus voting. The schema we lock in this plan becomes the return spec the agents fill in. We cannot dispatch the sweep against an unsettled schema, which is why the website refactor sequences before the sweep — the alternative is re-running every agent every time we discover a missing field.

---

## Sequence at a glance

```
   ┌──────────────────────────────────────────────────────────────────────┐
   │ PHASE A — Foundation (lock the contracts)                            │
   │   • Schema reference doc                                             │
   │   • Candidate area list                                              │
   │   • Plan checkpoints                                                 │
   └────────────────────────────────┬─────────────────────────────────────┘
                                    │
   ┌────────────────────────────────▼─────────────────────────────────────┐
   │ PHASE B — Data layer refactor                                        │
   │   • Rewrite types/config/filtering against the new schema            │
   │   • Rename src/establishments → src/areas                            │
   │   • Migrate the existing 19 entries (areas + nested projects)        │
   └────────────────────────────────┬─────────────────────────────────────┘
                                    │
   ┌────────────────────────────────▼─────────────────────────────────────┐
   │ PHASE C — UI refactor                                                │
   │   • Accordion primitive                                              │
   │   • Area card / area modal / project card / project modal            │
   │   • Drill-down navigation with back button                           │
   │   • Updated filter bar                                               │
   │   • CSS module updates for tier colours + grade colours              │
   └────────────────────────────────┬─────────────────────────────────────┘
                                    │
   ┌────────────────────────────────▼─────────────────────────────────────┐
   │ PHASE D — System docs update                                         │
   │   • systems/relocation-guide.md → reflects new component tree        │
   │   • systems/establishments-data.md → renamed and updated for schema  │
   │   • architecture.md → reflects new repo shape                        │
   └────────────────────────────────┬─────────────────────────────────────┘
                                    │
   ┌────────────────────────────────▼─────────────────────────────────────┐
   │ PHASE E — Agent contract                                             │
   │   • Agent brief template                                             │
   │   • 10 focus + 5 discovery assignments                               │
   │   • Updated launch script                                            │
   │   • Consensus-voting merge protocol                                  │
   └────────────────────────────────┬─────────────────────────────────────┘
                                    │
   ┌────────────────────────────────▼─────────────────────────────────────┐
   │ PHASE F — Sweep execution                                            │
   │   • Dispatch 15 parallel agents                                      │
   │   • Consensus-vote and merge outputs                                 │
   │   • Fold into data files (with provenance attribution)               │
   │   • Verify everything renders                                        │
   └──────────────────────────────────────────────────────────────────────┘
```

Phases A → D are the **website refactor** the user explicitly asked to come first. Phase E builds the **agent contract** that depends on the schema being locked. Phase F is the **sweep** itself. Each phase has checkbox tasks below.

---

## Locked decisions

These are the 10 questions the user trusted me to answer with my own judgment. Each is explained briefly with its reasoning. Each can still be revised in chat, but until revised, treat them as load-bearing — every downstream task assumes them.

| # | Question | Decision | Why |
|---|---|---|---|
| 1 | Should rental qualification realism be a sixth rubric tier, or a per-project structured field? | **Per-project structured field, not a tier.** Lives in `project.rental.qualification`. | A tier scores areas, but qualification realism varies *within* an area between operators. Wood Wharf has Vertus (probably stricter) AND Ballymore (probably more flexible) — a tier would average them away. The realism question is operator-and-building specific, not area specific. |
| 2 | How should we represent areas with zero current flagship projects (Acton, Tooting, etc.)? | **Empty `projects: []`, area card honestly says "no flagship projects yet, healthy private rental market".** | Don't fabricate, don't exclude. Acton is a real upgrade-from-Croydon candidate even without a Vertus tower. Synthesising a fake "private rental stock" pseudo-project would corrupt the dataset. Excluding such areas would defeat the broadening goal entirely. |
| 3 | Photos: host them, link to them, or skip? | **Linked, with typography fallback when the URL 404s.** | Real images matter for visual decision-making. Hosting them means a media bundle in `public/`, fragile rights, and bloat. Linking to operator/Wikipedia URLs is fragile but acceptable, and the typography fallback means a broken link degrades gracefully rather than breaking the page. |
| 4 | Grade scale: 6 levels or 4? | **6 levels, matching Cernio: SS / S / A / B / C / F.** | Caner already thinks about quality this way from Cernio (SS = exceptional, S = excellent, A = very good, B = good, C = marginal, F = avoid). Parity makes the grades intuitively legible without retraining. Six levels gives more discrimination at the trophy tier without being unwieldy. |
| 5 | Default sort on the main grid? | **Best area grade descending (SS → F), with a one-click toggle to "best project grade in area".** | Area grade reflects the rubric synthesis at the area level — the most general signal. The toggle catches the "okay area, exceptional project" cases that the area-grade default would push down the page. |
| 6 | Comparison view (pick 2–4 areas, see them side-by-side) — v1 or v2? | **v2.** | Real value (none of the competitors have it), but a meaningful build, and the v1 area modal is dense enough that comparing two areas by switching tabs is workable until v2. |
| 7 | Shortlist / favourites / personal notes — v1 or v2? | **v2.** | Not blocking the agent sweep, and the persistence story (localStorage at minimum) deserves its own design conversation. Defer until after the schema and the sweep are landed. |
| 8 | Cambridge in the schema types, even though excluded from the dataset? | **Yes — types support it. Exclude at data-population time, not type level.** | Future-proofs the schema. If Caner's job picture changes and Cambridge becomes relevant, no schema change is needed — just add data. |
| 9 | Should the schema include a `personal_notes` field on each area, hand-authored alongside the data file? | **Yes, as `personal_notes: string` (deliberately scoped to be authored by hand alongside the data file rather than via the UI).** | Lets Caner annotate as he builds the dataset without conflating with the future UI-driven notes feature in v2. Costs nothing, useful immediately. |
| 10 | Migrate the existing 19 entries' research markdown files in `docs/research/` into a new structure? | **No. Keep them where they are. Treat the new sweep as additive.** | The old reports were generated under a different agent prompt set; rewriting their location would lose history and create false equivalence between the old and new research passes. Additive sweeps preserve provenance. *(Updated 2026-04-11: the new sweep's outputs live under `docs/research/sweep/` to keep the two generations visually separate, but the legacy files at the top of `docs/research/` are still untouched.)* |

These decisions are now load-bearing for the schema doc and every downstream phase. They are documented inline in `context/references/data-schema.md` as well, so that doc is self-contained.

---

## Phase A — Foundation (lock the contracts)

**Goal**: Settle the schema and the candidate area list before any code changes. Nothing in Phases B–F can proceed safely until A is complete.

**Exit criteria**: Schema doc exists and is treated as authoritative. Candidate area list exists. The plan is visible and trackable.

### Tasks

- [x] **A1.** Write the data schema reference doc at `context/references/data-schema.md`. Must include: full TypeScript interfaces for `Area`, `Project`, and all supporting types; per-field documentation; enum values; the 10 locked decisions inline; a worked example using Wembley Park; migration notes from the old shape; how to extend.
- [x] **A2.** Draft a candidate area list (~50–80 candidates) for the Phase F sweep. First-pass list already drafted in `context/notes/search-rubric.md` § "What happens next"; this task formalises it as `context/references/candidate-areas.md` with one row per candidate, Caner's pre-sweep prior on each, and the agent assignment that will research it.
- [x] **A3.** Update `context/notes.md` index to point to all new plan and reference files.

### Notes on Phase A

Phase A is the lightest phase by line count and the heaviest by leverage. Every assumption in Phases B–F is downstream of the schema doc, so getting the schema right matters more than getting it written quickly. If something feels wrong in the schema, this is the moment to flag it — fixing it later means re-running the sweep.

---

## Phase B — Data layer refactor

**Goal**: Replace the existing flat establishment data layer with the new area-containing-projects model. All 19 existing entries get migrated into the new shape with `null` / `unknown` for fields the old data didn't capture.

**Exit criteria**: The TypeScript code compiles, the existing 19 entries (now restructured into ~12 areas with nested projects) load successfully, all existing UI components are temporarily broken but the data is correctly typed.

### Tasks

- [x] **B1.** Rewrite `src/establishments/types.ts` to match the schema in `context/references/data-schema.md`. Replace `Establishment` and `EstablishmentProject` with `Area` and `Project`. Add `Grade`, `Quality`, `TierEvaluation`, `CriterionScore`, `SourceLink`, `AmenityEntry`, `ResearchMeta`. Keep `tagCategories` style single-source-of-truth for any new enum lists.
- [x] **B2.** Rewrite `src/establishments/config.ts` with the new filter taxonomy. Filters now operate on the structured fields, not on a flat tag list. Group filters into "area-level" and "project-level" sections.
- [x] **B3.** Rewrite `src/establishments/filtering.ts` with the new filter semantics. **Fix the AND-within-category bug to OR-within-category** in the same pass — this was flagged in `notes.md` as suspect, and the refactor is the right moment to settle it.
- [x] **B4.** Rename `src/establishments/` → `src/areas/`. Update all import paths. The `establishments` name was a misnomer from the start; the rename is cosmetic but makes the codebase honest. Same for `data/` → `data/areas/` if it makes the structure clearer.
- [x] **B5.** Migrate the existing 19 entries into the new shape:
  - **Battersea Power Station, Battersea Switch House** → projects under a single `nine-elms` area (or a separate `battersea` area — see below in "schema gaps to flag")
  - **Embassy Gardens, Bloom Nine Elms, Riverlight Quay, One Nine Elms** → projects under `nine-elms`
  - **Canary Wharf** → already an area; its existing projects (8 Water Street, 10 Park Drive, 3 & 10 George Street, One Park Drive, Newfoundland, South Quay Plaza) become structured `Project` entries under it
  - **Wembley Park** → area; Luna, Ferrum, Madison, Canada Gardens, Landsby, Alameda, Beton, Alto become projects
  - **King's Cross** + **King's Cross Ownership** → merged into single `kings-cross` area; their existing projects (Plimsoll Building, Capella, Gasholders) become projects under it
  - **Stratford** → area; East Bank etc. as projects
  - **White City** → area
  - **Elephant Park** → area with projects
  - **Royal Wharf** → area (or project under a Royal Docks area — TBD)
  - **Kidbrooke Village** → area with one project
  - **Greenwich Peninsula** → area with one project
  - **Brent Cross Town** → area
  - **Canada Water** → area
  - **Oval Village** → area (or project under an Oval area — TBD)
  - Half the fields will be `null` / `unknown` because the old data didn't capture them; that's expected and will be filled in by Phase F.
- [x] **B6.** Update `data/index.ts` (or `data/areas/index.ts`) to export the new area-grouped structure. Each area is a default-exported `Area` constant from its own file; `index.ts` imports them and re-exports as an ordered array.
- [x] **B7.** Build a migration validation script (`scripts/validate-areas.mjs`) that loads every area, checks every required field is present, and reports any unknowns. Useful as a smoke test going forward.

### Schema gaps to flag during Phase B

These are decisions that surface only when we actually do the migration. Flag any that the schema doesn't cleanly cover, and revise the schema (and this plan) before continuing.

- **Battersea Power Station as its own area vs as a project under Nine Elms.** Pure judgment call. Argument for "separate area": BPS is a recognisable place name, has its own retail destination, has its own identity. Argument for "project under Nine Elms": geographically inside Nine Elms / VNEB, shares the connectivity story (Northern Line extension), shares the demographic profile. **Default decision unless overridden: separate area.** BPS is too distinct to bury inside Nine Elms.
- **Royal Wharf vs a "Royal Docks" area.** Royal Wharf is a Ballymore project with its own identity, but it's part of the broader Royal Docks regeneration along with Silvertown Quays and Royal Albert Wharf. **Default decision unless overridden: own area, called "Royal Wharf / Royal Docks".**
- **Oval Village.** Berkeley project on the old Oval Gasworks site. Part of broader Oval / Kennington area but with its own identity and a prominent gasholder feature. **Default decision: own area called "Oval Village / Kennington".**

---

## Phase C — UI refactor

**Goal**: Rebuild the rendering layer against the new data model. Three-level drill-down (area card → area modal → project modal) with accordion-based detail at the modal levels.

**Exit criteria**: All UI components render correctly against the migrated 19 entries. Filtering works. Modal navigation works. Visual identity is preserved (dark theme, gold accent, per-tag-category colour system, grain texture).

### Tasks

- [x] **C1.** Build a generic `Accordion` primitive component (`src/components/relocation-guide/Accordion.tsx`). Stateless, accepts `{title, defaultOpen, children}`. Uses `aria-expanded` and `details`/`summary` semantics where possible. Owns its own animation.
- [x] **C2.** Build the new `AreaCard` component. Replaces `GuideCard.tsx`. Renders: hero image (with typography fallback), name, borough, zones, primary stations, time-to-anchors mini-bar, tier scores as filled-circle indicators, grade chip, project count, headline. Click handler opens the area modal.
- [x] **C3.** Build the new `AreaModal` component. Replaces the old preview modal entirely. Contains all the accordion sections specified in the analysis (At a glance, Vibe & character, T1, T2, T3, T5, Connectivity, Demographics, Safety, Green & water, Amenities, Regeneration, External links, Projects in this area). Each section reads from the typed `Area` schema fields directly.
- [x] **C4.** Build the new `ProjectCard` component (rendered inside the AreaModal's "Projects in this area" section). Renders: hero image, name, developer, operator, building type, build year, price band, grade chip, **graduate-visa realism indicator** (green/amber/red — the unique-to-Flatbrowser signal). Click handler opens the project modal.
- [x] **C5.** Build the new `ProjectModal` component. Accordion sections: At a glance, Renting here (with the prominent rental-qualification block), Building quality, Amenities, Architecture, Living experience, Resident perspective, External links, Project evaluation. Renders against the typed `Project` schema.
- [x] **C6.** Wire up the drill-down navigation. Clicking an `AreaCard` opens an `AreaModal`. Clicking a `ProjectCard` inside the AreaModal opens a `ProjectModal` *on top of* (or *replacing*) the AreaModal. The ProjectModal has a back button that returns to the AreaModal, not to the main grid. Escape key closes the topmost modal only.
- [x] **C7.** Rewrite `GuideFilterBar.tsx` for the new filter set:
  - **Area-level filters**: zones, primary age cohort, borough, area grade, multi-cluster commute score (≥3), regeneration status, has-river/canal/dock, primary line(s), free-text search
  - **Project-level filters**: tenure, price range slider, building type, operator, **graduate-visa realism (green/amber/red)**, has-pool, has-concierge, has-gym (in-building)
  - When a project-level filter is active, the area grid surfaces only areas that contain at least one matching project, with the matching projects visually highlighted inside the area modal.
- [x] **C8.** Update `guide.module.css`:
  - Add CSS variables for the **6 grade levels** (SS, S, A, B, C, F) — each with its own colour pair
  - Add CSS variables for the **5 tier colours** (T1–T5) for use in tier-evaluation displays
  - Add accordion styles
  - Update the existing per-category colour system to align with structured filter chips
  - Preserve the dark theme, gold accent, Cormorant Garamond display + DM Sans body, and noise overlay
- [x] **C9.** Rewrite `GuideHeader.tsx` (or `BrowserHeader.tsx` after rename) to show: total areas, total projects across all areas, # of areas at grade A or above, # of projects flagged graduate-visa-friendly. The header is the project's headline metric panel.
- [x] **C10.** Rename `src/components/relocation-guide/` → `src/components/browser/` (or similar). Cosmetic but makes the component folder match the codebase's actual purpose. Update all import paths.
- [x] **C11.** Update `app/page.tsx` to wire the new entry component. The server component still hands data to the client component; just the data shape and the client component name change.
- [x] **C12.** Sanity-test the whole UI against the migrated 19 entries: every area opens, every accordion expands, every project drill-down works, every filter behaves correctly, no console errors, no broken images (because of the typography fallback).

### Notes on Phase C

The UI work is the largest line-count of any phase. Most of it is mechanical (build a component, render typed fields, style to match the existing visual identity). The hardest parts are the accordion primitive (gets reused everywhere, so wrong abstraction is expensive) and the filter bar (more complex semantics than the current flat filters).

### Phase C polish addendum (landed 2026-04-12)

After Phase C shipped, a polish pass landed on 2026-04-12 that took the UI from "structurally correct but opaque" to "personal decision tool". This was not in the original plan but is now part of what Phase C delivered. All ticked off:

- [x] **CP1.** Personal-relevance pattern: typed `UserProfile` (`src/profile/caner.ts`) + `Explainer<TValue>` interface (`src/explainers/types.ts`) + `ExplainedValue.tsx` component. 28 explainer files registered. See `context/systems/explainers.md` and `context/notes/personal-relevance-pattern.md`.
- [x] **CP2.** `Tooltip.tsx` portal-rendered primitive (escapes `overflow: hidden` parents and stacking contexts via `createPortal`). Used on every domain term, grade chip, realism chip, criterion status, and external link.
- [x] **CP3.** React-stateful `Accordion.tsx` (replaced `<details>` because the native pseudo can't combine animated height with content-visibility). Uses the `grid-template-rows: 0fr → 1fr` trick + `content-visibility: auto` for lazy paint.
- [x] **CP4.** `labels.ts` module — every enum has a `*_LABELS` map; UI never renders raw enum values like `"in_delivery"` or `"much-safer"`.
- [x] **CP5.** Always-visible criterion reasoning. `CriterionRow` now renders the reasoning text (or an honest "not yet populated" placeholder) so that "PARTIAL" status always carries an explanation.
- [x] **CP6.** Per-state coloured accent borders. `AreaCard[data-grade]`, `ProjectCard[data-realism]`, `ExplainedValue[data-severity]` all carry 3px left borders in the appropriate colour.
- [x] **CP7.** Keyboard shortcuts. `/` focuses search, `←`/`→` navigate areas, `Esc` closes modals (gated on whether the user is typing).
- [x] **CP8.** Animation system rebuild. Three named easing curves (snappy, expressive, material). All animations are compositor-only — `filter: blur()` was deliberately removed from entrance keyframes to fix modal-open stutter. `prefers-reduced-motion` respected globally.
- [x] **CP9.** Custom-styled filter bar inputs. Range sliders and checkboxes now use the gold gradient instead of platform defaults; visual gaps that surfaced after the layout refactor closed.
- [x] **CP10.** Schema `Provenance` block added to support the consensus model (added pre-sweep, after the polish pass — see `src/areas/types.ts` and the consensus section in `data-schema.md`).

The polish pass is what makes Flatbrowser feel like a personal decision tool rather than a generic property browser. The single biggest qualitative win was the explainer system: showing "30× monthly means £75,000/year in payslips, you don't have UK payslips — look at professional guarantor or Open Banking referencing instead" instead of an undecorated `30`.

---

## Phase D — System documentation update

**Goal**: Bring `context/architecture.md`, `context/systems/relocation-guide.md`, and `context/systems/establishments-data.md` into alignment with the post-refactor reality, so that the next session reading the context folder sees the new shape, not the old one.

**Exit criteria**: All three docs accurately describe the post-refactor codebase, with no references to the old `Establishment` model, the old flat list, the old shallow projects, or the old chip-only UI.

### Tasks

- [x] **D1.** Rewrite `context/systems/establishments-data.md` (consider renaming to `areas-data.md`) to document the new schema, how the area-level and project-level fields work, the filter semantics, and the migration history.
- [x] **D2.** Rewrite `context/systems/relocation-guide.md` (consider renaming to `area-browser.md`) to document the new component tree, the drill-down navigation pattern, the modal stacking model, and the accordion primitive.
- [x] **D3.** Update `context/architecture.md` to reflect: the renamed folders, the new repo shape, the new data flow, the rubric reference, and the schema reference.
- [x] **D4.** Update `context/notes.md` to reflect the post-refactor file layout. Old notes don't go away; the index just points at the new system docs.

### Notes on Phase D

These are documentation updates, not new content. The system docs from before the refactor are accurate snapshots of the *previous* state — we're not deleting them, we're rewriting them to the new state. Old states live in git history if anyone needs them.

---

## Phase E — Agent contract

**Goal**: Define the agent brief template, the 10 focus assignments + 5 discovery assignments, and the consensus-based merge protocol so the sweep can run cleanly. The schema must already be locked at this point. (See `context/notes/consensus-synthesis-model.md` for why this phase grew from 10 ownership-style focus agents to 15 cumulative-coverage agents post-design-revision.)

**Exit criteria**: A future Caner could run the sweep based on this phase alone, without any chat context.

### Tasks

- [x] **E1.** Write the agent brief template at `context/agent-briefs/template.md`. Must specify: how the agent reads the rubric and schema; how it stays within its candidate scope; how it cites sources; how it handles uncertainty (`status: "unknown"` rather than guessing); how it writes to its assigned output file without colliding with other agents.
- [x] **E2.** Write the 10 focus assignments + 5 discovery assignments at `context/agent-briefs/focuses/`:
  - 01-safety-foundational.md            (focus)
  - 02-daily-life-gym-food.md            (focus)
  - 03-younger-demographic.md            (focus)
  - 04-cultural-identity-depth.md        (focus)
  - 05-green-and-water.md                (focus)
  - 06-premium-amenity.md                (focus)
  - 07-multi-cluster-connectivity.md     (focus)
  - 08-regeneration-2027-trajectory.md   (focus)
  - 09-rental-qualification-realism.md   (focus) ← **probably the most important agent for Caner**
  - 10-resident-voice.md                 (focus)
  - 11-discovery-btr-operators.md        (discovery — find BTR buildings/areas we missed)
  - 12-discovery-planning-pipeline.md    (discovery — find planning approvals we missed)
  - 13-discovery-press-architecture.md   (discovery — find areas/buildings press is talking about)
  - 14-discovery-resident-voice.md       (discovery — find what real renters are saying)
  - 15-discovery-excluded-reconsider.md  (discovery — challenge the exclusion list)
  - **Why discovery agents were added**: The candidate list in A2 was authored by a single AI and inherits its blind spots. Using parallel agents to all do variations of the same constrained research wastes the parallelism. Discovery agents 11–15 explicitly explore for areas/projects we missed, returning **proposals** that get triaged into a second-wave candidate list.
- [x] **E3.** `scripts/launch_sweep_agents.mjs` dispatches the 15 agents (10 focus + 5 discovery) in parallel. Every agent writes one comprehensive file at `docs/research/sweep/sweep-NN-<slug>.md`; per-agent logs land under `docs/research/sweep/_logs/<slug>/`. The dispatcher is now legacy after the codex → Claude-subagents pivot, but the path layout it documents is the contract every dispatch path follows.
- [x] **E4.** Merge protocol in `context/references/merge-protocol.md` specifies: how to consolidate the 10 focus outputs per area; how to resolve conflicts when two agents disagree on a fact (preserve both with sources, flag for review); how to fold the consolidated output into typed `data/areas/<slug>.ts` files; **AND how to triage the 5 discovery agents' proposals into a second-wave candidate list**.

### Notes on Phase E

The agent contract is what makes the sweep reproducible. If we get this right, we can re-run the sweep in 2027 to verify everything is still current — the same prompts, the same candidate list, the same schema, fresh data.

---

## Phase F — Sweep execution

**Goal**: Actually run the sweep, get back ~30–60 areas worth of populated data, and fold them into the live dataset.

**Exit criteria**: The dataset has expanded from 12-ish areas (post-migration) to 30–60 areas, every area has the schema's required fields populated, the website renders all of them, and Caner has a meaningfully broader pool of candidates than before.

### Tasks

- [x] **F1.** Pre-flight: confirm the candidate list from A2 is final. Confirm the focus assignments from E2 cover the rubric cleanly. Confirm the schema from A1 has not drifted. **Done** — `node scripts/launch_sweep_agents.mjs --dry-run` passes; all required context files present; `codex` CLI is available at `/opt/homebrew/bin/codex`.
- [x] **F2.** Dispatch the 15 agents (10 focus + 5 discovery) in parallel via the script from E3. Monitor for failures. **DONE** — 20 research files returned to `docs/research/sweep/` (15 focus/discovery + 5 project-specific extended research: Quarters by Bravo, extended stay Z1-Z2, extended stay Z3-Z4, flexible tenancy BTR, aparthotels monthly).
- [x] **F3.** Review each focus agent's output. Flag any that returned obviously wrong / hallucinated data. Re-run any that failed. **Then read the 5 discovery sections** in `docs/research/sweep/sweep-1{1,2,3,4,5}-*.md` and triage them. **DONE** — all 20 files reviewed. RRA 2025 implications identified and addressed. Dataset schema rebuilt for post-RRA reality.
- [ ] **F4.** Merge the 10 focus outputs per area following the protocol from E4. Preserve conflicts for human review rather than silently picking a side. **Then add strong discovery proposals to `candidate-areas.md` as a second wave** and dispatch a follow-on sweep targeting only those new candidates. **IN PROGRESS** — partial fold-in complete: 55 areas, ~251 projects. RRA schema rebuild done (removed upfront fields, added agreement_type / referencing_provider / professional_guarantor_accepted / open_banking_accepted / cost_tier / min_tenancy_months). 32 explainers (5 new, 1 deleted, 10 rewritten). Remaining: deeper population of rich fields from research.
- [ ] **F5.** Fold merged outputs into `data/areas/<slug>.ts` files (one file per area). Stay within the existing TypeScript constant pattern.
- [ ] **F6.** Run the validation script from B7 against the new data files. Fix any field gaps before considering the sweep complete.
- [ ] **F7.** Sanity-test the website against the populated dataset. Verify rendering, filtering, drill-down, modal stacking, accordion content all work correctly with realistic full-data entries.
- [ ] **F8.** Tick off this plan's exit criteria, archive the plan (delete this file), and update `context/architecture.md` with the new dataset size.

### How to dispatch Phase F2 (when ready)

```
# 1. Verify pre-flight (already done):
node scripts/launch_sweep_agents.mjs --dry-run

# 2. Dispatch live sweep (will warn for 10s before launching):
node scripts/launch_sweep_agents.mjs

# 3. Wait for all 15 agents to finish (potentially hours)
# 4. Review outputs:
ls docs/research/sweep/

# 5. Run consensus merge per context/references/merge-protocol.md
# 6. Re-run validation:
pnpm exec tsx scripts/validate-areas.ts
```

---

## Risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Schema drift mid-refactor**: a Phase B or C task surfaces a schema gap that requires going back and re-editing everything | Medium | Medium | Phase B5 (migration) is deliberately the *first* place real data hits the schema. Discover gaps there, not in Phase F. Schema gaps surfaced during B5 trigger an immediate revision of A1 before continuing. |
| **Agent hallucination during sweep**: agents return plausible-looking but factually wrong data, especially for rental qualification realism (the most consequential field) | High | High | Every fact requires a `SourceLink`. Phase F3 explicitly includes a human review step. Agents are instructed to use `status: "unknown"` rather than guess. The merge protocol preserves conflicts for review. |
| **Image link rot**: hosted operator images change URLs, causing 404s | Medium | Low | Typography fallback is built into the AreaCard and ProjectCard from C2/C4. Broken images degrade to text-only cards rather than blank spaces. |
| **The migration in B5 is uglier than expected**: the existing 19 entries don't slot cleanly into areas-with-projects | Medium | Low | Schema gaps to flag (Battersea, Royal Wharf, Oval Village) are already documented above. Default decisions are noted; revision is cheap if any feel wrong on closer look. |
| **Filter UI complexity exceeds estimate**: the area-level + project-level dual filter set in C7 is more conceptually involved than the existing flat filters | Medium | Medium | Build the area-level filter set first, ship that, then add the project-level layer. Don't try to do both at once. |
| **The "personal_notes" field becomes a junk drawer** of half-formed observations | Low | Low | It's a single string field, no schema rules. Treat it as Caner's own scratch space. If it bloats, the field gets reorganised; if it stays empty, no harm done. |
| **Cambridge gets accidentally excluded at the type level** in B1 | Low | Low | Decision 8 explicitly says types support Cambridge. Add a comment in `types.ts` noting this. |
| **Resource pressure**: 15 parallel agents in F2 hit rate limits or cost ceilings | Medium | Low | Stagger if needed. The script already supports per-agent failures without aborting the whole run. |

---

## What "done" looks like

When this plan can be deleted:

1. ✅ Schema reference doc exists and is treated as the contract — **DONE** (`context/references/data-schema.md`)
2. ✅ Candidate area list is committed — **DONE** (`context/references/candidate-areas.md`, 95 candidates)
3. ✅ `src/areas/` holds the new typed data layer — **DONE** (`types.ts`, `config.ts`, `filtering.ts`, `data/`)
4. ✅ All 19 original entries are migrated into areas-with-projects shape — **DONE** (14 migrated → expanded to 55 areas, ~251 projects)
5. ✅ AreaCard / AreaModal / ProjectCard / ProjectModal all render correctly — **DONE** (`src/components/browser/`)
6. ✅ Drill-down navigation works end to end — **DONE** (modal stacking with back button)
7. ✅ Filter bar handles area-level and project-level filters with the right semantics — **DONE** (OR-within-category fix included)
8. ✅ All system docs (architecture, systems, notes) reflect the post-refactor state — **DONE** (`architecture.md`, `systems/areas-data.md`, `systems/area-browser.md`, `notes.md` updated)
9. ✅ Agent brief template and 10 focus assignments are written — **DONE** (`context/agent-briefs/`)
10. ⏸ Sweep has run, outputs merged, fold into data files complete — **IN PROGRESS** (sweep dispatched, 20 files returned, partial fold-in done — 55 areas, ~251 projects; deep field population ongoing)
11. ⏸ Validation script passes against the full dataset — **NEEDS RE-RUN** against the expanded dataset
12. ✅ The site loads with 30+ areas, each with deep accordion content — **LOADS WITH 55 AREAS** today

**Items 1-9 and 12 ticked. Items 10-11 in progress — sweep fold-in is partially complete; remaining work is populating rich fields from the 20 research files and re-running validation.** When all twelve are ticked, this file gets deleted and `context/architecture.md` gets updated to reflect that the refactor landed.

---

## What's deliberately deferred to v2

These are deliberate non-goals for this plan. They're real, valuable, and worth doing — but doing them in v1 would inflate scope without unblocking the sweep.

| Feature | Why deferred |
|---|---|
| **Side-by-side area comparison view** (pick 2–4 areas, compare on every dimension) | Real value (no competitor has it), but a meaningful build, and the v1 area modal is dense enough that switching tabs gets you most of the way. |
| **Shortlist / favourites / personal notes via UI** (state-persisted) | Needs a persistence story (localStorage at minimum). Doesn't block the sweep. Caner can hand-author `personal_notes` in the data files until v2 lands. |
| **URL state for filters / open modals / open accordions** | Useful for sharing filtered views, but Flatbrowser is a personal tool — link sharing is not currently a use case. |
| **Image hosting in `public/`** instead of linked URLs | Heavier media bundle, licensing complications, and the linked-with-fallback approach is good enough for a personal tool. |
| **Search ranking / fuzzy search / typo tolerance** | Substring search is sufficient for ~50 areas. Revisit if the dataset crosses 100. |
| **Saved searches / filter presets** | Same — useful, not blocking. |
| **Server-side rendering of modal content for SEO** | Personal tool, no SEO use case. |
| **Map view** | Useful but a meaningful build (need a tile layer, marker management, link to listings). v2 only if Caner wants it. |
| **Live Rightmove integration** | Out of scope. The whole point is to be opinionated and self-contained, not to be a Rightmove front-end. |
| **Mobile-specific layouts** | Caner uses this on desktop. Responsive is fine for casual mobile use; bespoke mobile UX is v2. |

---

## Where this plan fits

```
context/
├── architecture.md             ← will be updated in D3
├── notes.md                    ← will be updated in A3 + D4
│
├── notes/
│   ├── relocation-constraints.md   already exists
│   ├── search-rubric.md            already exists, locked, drives Phase E
│   └── user-profile.md             already exists
│
├── plans/
│   └── website-refactor.md     ← THIS FILE
│
├── references/
│   ├── data-schema.md          ← the schema, written in A1
│   ├── candidate-areas.md      ← the candidate list, written in A2
│   └── merge-protocol.md       ← written in E4
│
├── systems/
│   ├── establishments-data.md  ← will be rewritten in D1 (and possibly renamed)
│   └── relocation-guide.md     ← will be rewritten in D2 (and possibly renamed)
│
└── agent-briefs/               ← created in E1, populated in E2
    ├── template.md
    └── focuses/
        ├── 01-safety-foundational.md
        ├── 02-daily-life-gym-food.md
        ├── 03-younger-demographic.md
        ├── 04-cultural-identity-depth.md
        ├── 05-green-and-water.md
        ├── 06-premium-amenity.md
        ├── 07-multi-cluster-connectivity.md
        ├── 08-regeneration-2027-trajectory.md
        ├── 09-rental-qualification-realism.md
        ├── 10-resident-voice.md
        ├── 11-discovery-btr-operators.md
        ├── 12-discovery-planning-pipeline.md
        ├── 13-discovery-press-architecture.md
        ├── 14-discovery-resident-voice.md
        └── 15-discovery-excluded-reconsider.md
```

The plan is the spine. The rubric, schema, and candidate list are the contracts the plan depends on. The system docs and agent briefs are the artefacts the plan produces.
