# System: area-browser

The single user-facing feature of the app. Lives under `src/components/browser/` and is the only consumer of `src/areas/` on the rendering side. One server-component entry point (`app/page.tsx`) wires it up; everything else is a tree of React components rooted at `BrowserClient`.

This system was rebuilt from the ground up in the website refactor that landed on 2026-04-11 (`context/plans/website-refactor.md`), replacing the previous flat-card UI with a three-level drill-down: **area card → area modal → project modal**, each level adding accordion-based depth.

This system is responsible for:
- rendering the main area grid,
- handling area-level and project-level filtering with the dual-layer semantics,
- coordinating the modal stack (area modal opens project modal on top of itself),
- styling and animating everything via a single CSS module.

It is **not** responsible for filter logic — those are pure functions in `src/areas/filtering.ts`.

---

## Component tree

```
app/page.tsx (server component)
   │  passes areas[]
   ▼
BrowserClient ("use client")            ← single state owner
   │
   ├── BrowserHeader                    props only, no state
   │     eyebrow / title / subtitle / 4 metric counts (areas / projects / top-grade / achievable)
   │
   ├── BrowserFilterBar                 ("use client")
   │     ├── Sort selector (area-grade / best-project-grade / name)
   │     ├── Search input
   │     ├── Toggleable filter panel
   │     │     ├── Area-level pills (zone / age / grade / regeneration)
   │     │     ├── Multi-cluster commute slider
   │     │     ├── Water toggles (river / canal / dock)
   │     │     ├── Project-level pills (tenure / building type / grad-visa realism / project grade)
   │     │     └── Project amenity toggles (pool / concierge)
   │     └── Result count + clear button
   │
   ├── <main><div.grid>                  Auto-fill grid of AreaCards
   │     │
   │     └── AreaCard × N
   │           ├── Hero image (typography fallback)
   │           ├── Borough / name / zones / project count / GradeChip
   │           ├── Preview text
   │           ├── Tier dots (T1 / T2 / T3 / T5 mini-bars)
   │           └── Stats footer (lines / time-to-City / time-to-CW / age cohort / best project)
   │
   ├── AreaModal                         ("use client") — conditionally rendered
   │     ├── Hero + close button
   │     ├── Header (borough, name, postcodes, grade, headline)
   │     ├── Accordion: At a glance
   │     ├── Accordion: Vibe & character (long-form sub-fields)
   │     ├── Accordion: Foundational viability (T1 with criteria + tier summary)
   │     ├── Accordion: Daily life quality (T2)
   │     ├── Accordion: Place identity & trajectory (T3)
   │     ├── Accordion: Personal fit (T5)
   │     ├── Accordion: Connectivity (deep — stations, lines, anchor times)
   │     ├── Accordion: Demographics (age breakdown, ethnic composition, notes)
   │     ├── Accordion: Safety (vs Croydon, vs borough, after-dark)
   │     ├── Accordion: Green space & water (river/canal/dock + parks)
   │     ├── Accordion: Regeneration & 2027 trajectory
   │     ├── Accordion: External links
   │     ├── Accordion: Projects in this area (project cards inside)
   │     │     │
   │     │     └── ProjectCard × M
   │     │           ├── Developer / name / type / build year
   │     │           ├── Preview
   │     │           └── GradeChip + RealismChip (green/amber/orange/red)
   │     │
   │     └── Accordion: Personal notes (if Caner has annotated)
   │
   └── ProjectModal                      ("use client") — conditionally rendered ON TOP of AreaModal
         ├── Hero + back button + close button
         ├── Header (developer, name, type/year/units/storeys, GradeChip, RealismChip)
         ├── Accordion: At a glance
         ├── Accordion: Renting here  ← THE most important section
         │     ├── Prices (studio / 1-bed / 2-bed)
         │     └── Graduate-visa qualification block (every field)
         ├── Accordion: Building quality (T2.6)
         ├── Accordion: Amenities (T4.1)
         ├── Accordion: Architecture (T4.4) — only if signature or named architects
         ├── Accordion: Living experience (long-form)
         ├── Accordion: Resident perspective (HomeViews)
         ├── Accordion: Project evaluation (T2.6 + T4.1 + T4.4 criteria)
         └── Accordion: External links
```

`BrowserClient` is the only component with significant state. Everything else is presentational. The accordion primitive (`Accordion.tsx`) is built on `<details>` / `<summary>` for free keyboard accessibility.

---

## State model in BrowserClient

| State | Type | Initial | Purpose |
|---|---|---|---|
| `filters` | `FilterState` | `createInitialFilterState()` | Active filters across all 14 categories |
| `sortMode` | `SortMode` | `"area-grade"` | Default best-area-grade descending; toggleable to best-project-grade or name |
| `openAreaId` | `string \| null` | `null` | Which area modal is open |
| `openProjectId` | `string \| null` | `null` | Which project modal is open (always nested inside an area) |

Plus `useDeferredValue` on `filters` for input responsiveness, and `useMemo` on the filtered + sorted areas list because the filter pipeline runs on every render.

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

## Visual identity

All styling lives in `src/components/browser/browser.module.css`:

- **Dark theme** with gold accents — `--bg #0b0b0d`, `--gold #c49a3c`
- **Cormorant Garamond** for display + **DM Sans** for body (via `next/font/google` in `app/layout.tsx`)
- **SVG noise overlay** on `.page::before` for film grain texture
- **Per-tier colour system** — `--c-t1` through `--c-t5` driving accordion tier badges
- **Per-grade colour system** — `--c-grade-ss` through `--c-grade-f` for the 6 levels
- **Per-realism colour system** — `--c-realism-achievable` (green) through `--c-realism-blocked` (red) plus a neutral grey for unknown
- **Auto-fill grid** — `repeat(auto-fill, minmax(320px, 1fr))` adapts to viewport
- **Responsive media queries** below 720px width

The chip rendering pattern is:

```tsx
<span className={styles.gradeChip} data-grade={grade}>{grade}</span>
```

CSS uses `[data-grade="SS"]` selectors to pick the colour pair. Adding a new grade or tier requires one CSS variable pair plus one selector — no component change.

---

## What this system deliberately does not have

- No URL state for filters (personal tool, no link sharing)
- No persistence (filters reset on reload)
- No favourites / shortlist UI (deferred to v2 per the refactor plan)
- No comparison view (deferred to v2)
- No image hosting in `public/` — hero images are linked URLs with typography fallback
- No mobile-bespoke UX — responsive enough but not mobile-first
- No tests — pure functions in `filtering.ts` are testable but not yet tested

These omissions are aligned with the refactor plan's "what's deferred to v2" section.

---

## Likely places for change

- **Adding a new accordion section to the area modal**: edit `AreaModal.tsx`, add an `<Accordion>` block reading from a typed area field. If the field doesn't exist, add it to the schema first (`context/references/data-schema.md` → `src/areas/types.ts`).
- **Adding a new filter**: extend `FilterState` in `types.ts`, extend `createInitialFilterState`, add a predicate to `areaPasses` or `projectPasses` in `filtering.ts`, add the UI in `BrowserFilterBar.tsx`, wire the toggle in `BrowserClient.tsx`.
- **Changing the sort default**: edit the `useState<SortMode>` initial value in `BrowserClient.tsx`.
- **Adding a v2 feature** (shortlist, comparison view, URL state): start by reading the relevant section of `context/plans/website-refactor.md` so the v2 design is consistent with the v1 architecture.
