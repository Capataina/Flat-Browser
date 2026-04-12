# System: area-browser

## Scope / Purpose

The single user-facing feature of the app. Lives under `src/components/browser/` and is the consumer of both `src/areas/` (data) and `src/explainers/` + `src/profile/` (the personal-relevance layer). One server-component entry point (`app/page.tsx`) wires it up; everything else is a tree of React components rooted at `BrowserClient`.

This system was rebuilt from the ground up in the website refactor that landed on 2026-04-11 (`context/plans/website-refactor.md`), replacing the previous flat-card UI with a three-level drill-down: **area card → area modal → project modal**, each level adding accordion-based depth. The Phase 1 polish pass that landed on 2026-04-12 added the explainer integration, the portal-rendered tooltip primitive, the per-state coloured accent borders, the keyboard shortcuts, and the React-stateful accordion with content-visibility-driven lazy paint.

A second polish pass on 2026-04-11 (driven by the user reporting concrete UX bugs during real navigation) tightened the system further: `ExplainedValue` headers are now full-width click targets with a passive chevron indicator (the corner toggle button is gone), `CriterionRow` is collapsible with the status chip always visible, the qualification grid uses CSS Grid with `align-items: start` rather than masonry (a masonry attempt was tried and reverted because column rebalancing on expand felt jumpy), all design tokens were lifted from `.page` to `:root` so portal-rendered tooltips inherit them, the filter pill tooltips were migrated from inline `pillTooltip` spans to the portal `Tooltip` primitive, the accordion summary buttons received an explicit `width: 100%`, a `ProseBlock` helper was extracted to split long-form `\n\n`-separated text into paragraphs (fixing the wall-of-text rendering of `long_form.full`), and `BrowserHeader` gained a right-hand "How to read this" card. The full set of polish-pass-2 decisions is in `context/notes/layout-decisions.md` and `context/notes/explainer-type-safety.md`.

A third UI iteration on 2026-04-12 accompanied the sweep fold-in and RRA rebuild:
- **Scale strip replaces value line** for enum fields in `ExplainedValue` — a horizontal strip showing all possible enum values with the current value highlighted, providing immediate visual context for where a value sits on its scale.
- **Expanded cards sort to top** — expanded `AreaCard` components receive `order: -1` and same-row height matching via `align-items: stretch`, so expanded content is always visible without scrolling past collapsed cards.
- **All accordions collapsed by default** — modal sections start closed, letting the user drill into what they care about rather than scrolling past everything.
- **Tier badges on accordion headers** — each tier accordion (T1, T2, T3, T5) shows its tier score badge inline in the header.
- **Section reorder** — modal accordion sections now follow: At a glance → T1 → T2 → T3 → T5 → Vibe (was: At a glance → Vibe → T1 → ...).
- **Hide absent amenities** — boolean amenity fields (pool, gym, sky_lounge, etc.) that are `false` are hidden rather than rendered as "No".
- **New filter sections** — agreement type, referencing provider, and cost tier filters added to the project-level filter bar.

## Boundaries / Ownership

This system is responsible for:
- rendering the main area grid,
- handling area-level and project-level filtering with the dual-layer semantics,
- coordinating the modal stack (area modal opens project modal on top of itself),
- wiring every value box through the explainer system for personal relevance,
- displaying tooltips for every domain term, grade, realism state, and rubric criterion,
- handling the keyboard shortcuts (`/`, `←`, `→`, `Esc`),
- styling and animating everything via a single CSS module with `prefers-reduced-motion` respect.

It is **not** responsible for filter logic (pure functions in `src/areas/filtering.ts`), explainer logic (in `src/explainers/`), or the data layer (in `src/areas/`).

---

## Current Implemented Reality

### Component tree

```
app/page.tsx (server component)
   │  passes areas[]
   ▼
BrowserClient ("use client")            ← single state owner
   │  + global keyboard shortcut handler
   │
   ├── BrowserHeader                    props only, no state
   │     eyebrow / title / subtitle / 4 metric counts (areas / projects / top-grade / achievable)
   │
   ├── BrowserFilterBar                 ("use client")
   │     ├── Sort selector (area-grade / best-project-grade / name)
   │     ├── Search input (focused by `/` keyboard shortcut)
   │     ├── Toggleable filter panel
   │     │     ├── Area-level pills (zone / age / grade / regeneration)
   │     │     ├── Multi-cluster commute slider (custom-styled gold gradient)
   │     │     ├── Water toggles (river / canal / dock — custom gold checkboxes)
   │     │     ├── Project-level pills (tenure / building type / grad-visa realism / project grade
   │     │     │     / cost tier / agreement type / referencing provider)
   │     │     └── Project amenity toggles (pool / concierge — custom gold checkboxes)
   │     └── Result count + clear button
   │
   ├── <main><div.grid>                  Auto-fill grid of AreaCards
   │     │
   │     └── AreaCard × N
   │           ├── data-grade attribute → grade-coloured 3px left border accent
   │           ├── Hero image (typography fallback)
   │           ├── Borough / name / zones / project count / GradeChip (with Tooltip)
   │           ├── Preview text
   │           ├── Tier dots (T1 / T2 / T3 / T5 mini-bars with stagger animation)
   │           └── Stats footer (lines / time-to-City / time-to-CW / age cohort / best project)
   │
   ├── AreaModal                         ("use client") — conditionally rendered
   │     ├── Hero + close button (spin-in animation, hover rotates 90°)
   │     ├── Header (borough, name, postcodes, grade, confidence chip, headline)
   │     ├── Accordion: At a glance               ← uses ExplainedValue throughout
   │     ├── Accordion: Foundational viability (T1 with criteria + tier summary + tier badge in header)
   │     ├── Accordion: Daily life quality (T2 + tier badge)
   │     ├── Accordion: Place identity & trajectory (T3 + tier badge)
   │     ├── Accordion: Personal fit (T5 + tier badge)
   │     ├── Accordion: Vibe & character (long-form sub-fields)
   │     ├── Accordion: Connectivity (deep — stations, lines, anchor times via ExplainedValue)
   │     ├── Accordion: Demographics (age breakdown, ethnic composition, notes via ExplainedValue)
   │     ├── Accordion: Safety               ← ExplainedValue for overall, vs Croydon, vs borough
   │     ├── Accordion: Green space & water (river/canal/dock + parks via ExplainedValue)
   │     ├── Accordion: Regeneration & 2027 trajectory
   │     ├── Accordion: External links     (each link wrapped in Tooltip)
   │     ├── Accordion: Projects in this area (project cards inside)
   │     │     │
   │     │     └── ProjectCard × M
   │     │           ├── data-realism attribute → realism-coloured 3px left border accent
   │     │           ├── Developer / name / type (Tooltip wrapped) / build year
   │     │           ├── Preview
   │     │           └── GradeChip + RealismChip (each in Tooltip, with green/amber/orange/red dot)
   │     │
   │     └── Accordion: Personal notes (if Caner has annotated)
   │
   └── ProjectModal                      ("use client") — stacked ON TOP of AreaModal
         ├── Hero + back button (slides left on hover) + close button
         ├── Header (developer, name, type/year/units/storeys, GradeChip, RealismChip)
         ├── Accordion: At a glance               ← uses ExplainedValue
         ├── Accordion: Renting here (default open)  ← THE most important section
         │     ├── Prices (studio / 1-bed / 2-bed via ExplainedValue)
         │     ├── Cost tier → ExplainedValue with cost-tier explainer
         │     └── Graduate-visa qualification block — every field is an ExplainedValue:
         │          • Realism (with "?" expand button showing personal relevance)
         │          • Agreement type → agreement-type explainer (AST vs licence)
         │          • Referencing provider → referencing-provider explainer (Homeppl etc.)
         │          • Income multiple → income-multiple explainer
         │          • Professional guarantor accepted → professional-guarantor explainer
         │          • Open Banking accepted → (rendered inline, no dedicated explainer)
         │          • Guarantor accepted → guarantor explainer
         │          • Min tenancy months → min-tenancy explainer
         │          • International friendly → international-friendly explainer
         │          • Visa friendly → visa-friendly explainer
         │          • Visa expiry handling → visa-expiry-handling explainer
         │          • Credit check → credit-check explainer (3 values: strict / standard / lenient)
         ├── Accordion: Building quality (T2.6) → all fields use ExplainedValue
         ├── Accordion: Amenities (T4.1) → all fields use ExplainedValue
         ├── Accordion: Architecture (T4.4) — only if signature or named architects
         ├── Accordion: Living experience (long-form)
         ├── Accordion: Resident perspective (HomeViews)
         ├── Accordion: Project evaluation (T2.6 + T4.1 + T4.4 criteria with reasoning)
         └── Accordion: External links     (each link wrapped in Tooltip)
```

### Component shape summary

| Component | Role | Notes |
|---|---|---|
| `BrowserClient.tsx` | State owner + keyboard shortcut handler | Only component with significant state. |
| `BrowserHeader/Footer.tsx` | Headline + metrics, footer note | Stateless. Stagger-in entrance animation. |
| `BrowserFilterBar.tsx` | Filter pills + search + sort | Stateless wrt filters; receives toggles from parent. |
| `AreaCard.tsx` / `ProjectCard.tsx` | Grid + nested grid items | Stateless. Both apply data-attribute accents (grade / realism). |
| `AreaModal.tsx` / `ProjectModal.tsx` | Drill-down detail views | Modal stacking via parent state; scroll-lock coordinated. |
| `Accordion.tsx` | Stateful accordion primitive | **React `useState`-based** (not `<details>`). Uses `grid-template-rows: 0fr → 1fr` trick for height animation. `content-visibility: auto` skips paint for off-screen accordion bodies. The summary button has explicit `width: 100%` so the entire bar is a click target. |
| `Tooltip.tsx` | Portal-rendered tooltip primitive | Uses `createPortal` to escape parent overflow + stacking contexts. Smart placement (top/bottom/left/right based on viewport space). Hover delay 220ms. Keyboard accessible. Background is fully opaque (`#0d0d0f`) and design tokens resolve correctly because they live on `:root`. |
| `ExplainedValue.tsx` | Value box with personal relevance | Wraps a label + value; consults the explainer system for an inline description and a personalised relevance line. Severity-coloured left border. The entire `.explainedHeader` is a single full-width `<button>` toggle with a passive `▾` chevron indicator (rotates 180° when expanded). No hover tooltip on the indicator — the click-expanded body is the single source of truth. |
| `CriterionRow.tsx` | Collapsible rubric criterion entry | Header (id + name + status chip + chevron) is a full-width button, always visible. Reasoning paragraph collapses behind the same `grid-template-rows: 0fr → 1fr` animation primitive that the section accordions use. Status chip is wrapped in a `Tooltip` and clicks bubble up to toggle the parent button. |
| `ProseBlock.tsx` | Long-form prose paragraph splitter | Splits a body string on `\n\n` and renders each chunk as a `<p>`. Tolerates null/undefined/empty input. Used by both `AreaModal` (for `long_form.full` and the named sub-sections) and `ProjectModal` (for `long_form.full`, `living_experience`, `notable_features`). One source of truth for prose formatting in the browser UI. |
| `GradeChip.tsx` / `RealismChip.tsx` / `TierDots.tsx` | Coloured badges | All wrapped in Tooltips throughout the modals. |
| `BrowserHeader.tsx` | Page header + how-to card | Two-column grid layout (`headerInner`): left column is the title / subtitle / metric counts, right column is the "How to read this" card explaining personalised results, area-vs-project model, the grade scale, and where to look first. Collapses to a single column under 1100px. |
| `CriterionRow.tsx` | Single rubric criterion display | Always renders reasoning (or honest "not yet populated" placeholder); status pill is a Tooltip. |
| `BrowserHeader.tsx` / `BrowserFooter.tsx` | Page chrome | Pure rendering. |

---

## Key Interfaces / Data Flow

### State model in BrowserClient

| State | Type | Initial | Purpose |
|---|---|---|---|
| `filters` | `FilterState` | `createInitialFilterState()` | Active filters across all 14 categories |
| `sortMode` | `SortMode` | `"area-grade"` | Default best-area-grade descending; toggleable to best-project-grade or name |
| `openAreaId` | `string \| null` | `null` | Which area modal is open |
| `openProjectId` | `string \| null` | `null` | Which project modal is open (always nested inside an area) |
| `searchInputRef` | `RefObject<HTMLInputElement>` | `null` | Used by the `/` keyboard shortcut to focus the search input |

Plus `useDeferredValue` on `filters` for input responsiveness, and `useMemo` on the filtered + sorted areas list because the filter pipeline runs on every render.

### Keyboard shortcuts

| Key | Action | Conditions |
|---|---|---|
| `/` | Focus the search input | When not already typing into an input/textarea/contentEditable |
| `←` | Open previous area in the sorted grid (or wrap to last) | Only when no project modal is open |
| `→` | Open next area in the sorted grid (or wrap to first) | Only when no project modal is open |
| `Esc` | Close the topmost modal | Handled inside the modal's own effect |

The handler lives in a `useEffect` in `BrowserClient` and gates on whether the user is currently typing (so the shortcuts don't interfere with the search input). Cycling between areas via `←/→` resets `openProjectId` to `null` so you don't get stuck inside a project modal that no longer matches the current area.

### Modal stacking

The two-level modal stack is critical:

1. Click an `AreaCard` → `setOpenAreaId(area.id)`, `setOpenProjectId(null)` → AreaModal mounts and locks body scroll.
2. Click a `ProjectCard` inside the AreaModal → `setOpenProjectId(p.id)` → ProjectModal mounts on top, grabs scroll lock from AreaModal.
3. Press Escape or click overlay or click back button on the ProjectModal → `setOpenProjectId(null)` → ProjectModal unmounts, AreaModal regains scroll lock.
4. Press Escape or click close button on the AreaModal → `setOpenAreaId(null)`, `setOpenProjectId(null)` → both unmount, scroll restored.

The `AreaModal` checks `isProjectOpen` and skips its own scroll-lock effect when a project modal is open above it, so the lock isn't double-applied or double-released.

### Filter cascading

When a project-level filter is active (e.g. "show only achievable graduate-visa projects"), the area-level grid surfaces only areas where **at least one project passes** the project filters. This is the cross-quality model — "good project in an okay area" candidates surface naturally because the area gets to ride along on its best project's pass.

---

## Implemented Outputs / Artifacts

### Visual identity

All styling lives in `src/components/browser/browser.module.css` (~2560 lines):

- **Dark theme** with gold accents — `--bg #0b0b0d`, `--gold #c49a3c`
- **Cormorant Garamond** for display + **DM Sans** for body (via `next/font/google` in `app/layout.tsx`)
- **SVG noise overlay** on `.page::before` for film grain texture
- **Per-tier colour system** — `--c-t1` through `--c-t5` driving accordion tier badges
- **Per-grade colour system** — `--c-grade-ss` through `--c-grade-f` for the 6 levels
- **Per-realism colour system** — `--c-realism-achievable` (green) through `--c-realism-blocked` (red) plus a neutral grey for unknown
- **Per-state accent borders**: `AreaCard[data-grade="..."]` and `ProjectCard[data-realism="..."]` apply 3px left borders in the appropriate colour. `ExplainedValue[data-severity="..."]` does the same in the explainer system's severity colours.
- **Auto-fill grid** — `repeat(auto-fill, minmax(320px, 1fr))` adapts to viewport
- **Auto-fit detail grids** — `.factGrid` uses `repeat(auto-fit, minmax(220px, 1fr))` so it gracefully reflows from 1 to 4+ columns based on container width
- **Responsive media queries** below 720px width

The chip rendering pattern is:

```tsx
<span className={styles.gradeChip} data-grade={grade}>{grade}</span>
```

CSS uses `[data-grade="SS"]` selectors to pick the colour pair. Adding a new grade or tier requires one CSS variable pair plus one selector — no component change.

### Animation system

The CSS module defines a tasteful animation system with three named easing curves:

| Curve | Use |
|---|---|
| `cubic-bezier(0.16, 1, 0.3, 1)` "snappy" | Quick acceleration, slow settle. Default for entrance and hover. |
| `cubic-bezier(0.32, 0.72, 0, 1)` "expressive" | Used for accordion height + chevron rotation. |
| `cubic-bezier(0.4, 0, 0.2, 1)` material standard | Hover state transitions. |

The animations are all **compositor-only** (transform + opacity) — `filter: blur()` was deliberately removed from entrance keyframes during the perf pass because it forced GPU compositing layers and caused modal-open stutter. The only blur that remains is a static `backdrop-filter: blur(6px)` on `.modalOverlay` (applied once when the modal opens, not animated).

`prefers-reduced-motion: reduce` disables all animations and transitions globally — see the `:global(*)` block in the CSS module's reduced-motion section.

### Performance posture

- **Lazy accordion paint** — `Accordion.tsx` uses `content-visibility: auto` on `.accordionContentWrap` so the browser skips layout/paint for closed and off-screen accordions. The accordion itself is a stateful React component (not `<details>`) with the grid-template-rows trick for animated height.
- **No `filter: blur()` in keyframes** — biggest perf win, eliminated the modal stutter.
- **`useDeferredValue` on filter state** — keeps the search input responsive even with the full filter pipeline running on every keystroke.
- **`useMemo` on the sorted+filtered array** — the filter pipeline only re-runs when the deferred filter state actually changes.

---

## Known Issues / Active Risks

The polish pass closed every visible bug from the Phase 1 review. There are no known correctness issues in the rendering layer at the time of writing. The two structural risks to keep an eye on:

- **Modal stacking depth is hard-coded at 2** (area → project). Any future v2 feature that wants a third-level modal (e.g. "compare projects across areas") will need to generalise the scroll-lock coordinator.
- **The CSS module is large** (~2560 lines) and growing. It is still maintainable as a single file, but a sustained growth trajectory would justify splitting by component family.

## Partial / In Progress

Nothing in this system is partially implemented. All component-level work from Phase C (C1–C12) and Phase C polish (CP1–CP10) is landed. The system is in a stable shipped state, gated only on the Phase F sweep populating richer fields that some accordions currently render against `unknown`/empty arrays.

## Planned / Missing / Likely Changes

These are deferred to v2 per the website refactor plan, not active work:

- **URL state for filters and open modals** (currently no link sharing).
- **Side-by-side comparison view** (pick 2–4 areas, compare on every dimension).
- **Shortlist / favourites with localStorage persistence**.
- **A glossary panel** that groups all 32 explainers by `category` and lets the user browse them as a reference rather than only seeing them inline next to values.
- **Component-level tests** for the pure render paths once the test scaffolding lands.

## What this system deliberately does not have

- No URL state for filters (personal tool, no link sharing)
- No persistence (filters reset on reload)
- No favourites / shortlist UI (deferred to v2 per the refactor plan)
- No comparison view (deferred to v2)
- No image hosting in `public/` — hero images are linked URLs with typography fallback
- No mobile-bespoke UX — responsive enough but not mobile-first
- No tests — pure functions in `filtering.ts` are testable but not yet tested
- No analytics, telemetry, or error reporting

These omissions are aligned with the refactor plan's "what's deferred to v2" section.

---

### Likely places for change

- **Adding a new accordion section to the area modal**: edit `AreaModal.tsx`, add an `<Accordion>` block reading from a typed area field. If the field doesn't exist, add it to the schema first (`context/references/data-schema.md` → `src/areas/types.ts`).
- **Adding a new filter**: extend `FilterState` in `types.ts`, extend `createInitialFilterState`, add a predicate to `areaPasses` or `projectPasses` in `filtering.ts`, add the UI in `BrowserFilterBar.tsx`, wire the toggle in `BrowserClient.tsx`.
- **Changing the sort default**: edit the `useState<SortMode>` initial value in `BrowserClient.tsx`.
- **Adding a tooltip to a new value type**: import `Tooltip`, wrap the value in `<Tooltip title="..." content="...">`. The tooltip portal-renders so there are no overflow concerns.
- **Adding personal relevance to a new field**: add a new explainer file in `src/explainers/<concept>.ts` (see `context/systems/explainers.md`), register it in `src/explainers/index.ts`, then wrap the value in the modal with `<ExplainedValue label=... value=... explainerId=... rawValue=... />`.
- **Adding a label for a new enum value**: add the value to the relevant `*_LABELS` map in `src/areas/labels.ts` and use `LABEL_MAP[value]` in the component instead of rendering the raw enum.
- **Adding a v2 feature** (shortlist, comparison view, URL state): start by reading the relevant section of `context/plans/website-refactor.md` so the v2 design is consistent with the v1 architecture.

## Durable Notes / Discarded Approaches

### Lessons from the polish pass

- **`<details>/<summary>` is a poor accordion primitive when you need lazy paint AND animation.** The native pseudo `::details-content` exists but is only in modern Chrome/Safari/Firefox; the grid-template-rows trick on a stateful React component is universal and cleaner.
- **`filter: blur()` in entrance keyframes is the single biggest perf cost.** Removing two `blur(0)` lines eliminated all modal-open stutter on this dataset. Compositor-only animations (transform + opacity) are essentially free.
- **Tooltips inside `overflow: hidden` parents will always clip.** The fix is `createPortal` to `document.body`, not careful z-index management. Try-and-fix-with-z-index is a dead end.
- **Raw enum strings are an accessibility and UX failure** even when they're internally consistent. Always render through a label map; the user-facing display layer should never see `"in_delivery"` or `"much-safer"` or `"30x monthly"`.
- **Per-criterion reasoning text is what makes a "PARTIAL" status meaningful.** A status without a reason is worse than no status — it implies false confidence. The fix is to make reasoning a first-class display element, with an honest "not yet populated" placeholder when it's missing.

### Discarded approaches

- **Native `<details>/<summary>` accordion** — abandoned because it cannot animate height while also lazy-painting via `content-visibility`. Replaced with the React-stateful `Accordion.tsx` using the grid-template-rows trick.
- **Z-index escalation for tooltips** — abandoned after a full afternoon of fighting overflow-clipping. Replaced with `createPortal` to `document.body`. This is documented in the polish pass lessons because the false starts were costly enough to warrant a permanent record.
- **`filter: blur()` in entrance keyframes** — abandoned because it forced GPU compositing layers and caused modal-open stutter. The only blur that survived is the static `backdrop-filter` on the modal overlay (applied once, not animated).

## Obsolete / No Longer Relevant

- The previous `src/components/relocation-guide/` folder and its `GuideCard` / `GuideFilterBar` / `GuideHeader` components are gone. The rename to `src/components/browser/` was part of Phase C10. References to "relocation guide" in older context entries have been migrated to "area browser" — if any survive in older notes, treat them as historical.
- The previous flat-card UI (one card per `Establishment`, no drill-down) is gone. The two-tier drill-down is the only model now.
- The `<details>/<summary>` accordion experiment is gone (see Discarded approaches above).
