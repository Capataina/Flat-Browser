# Plan: Realism schema redesign + project view

Active plan. Authored 2026-04-16 after Caner's dad returned feedback on the 22-building shortlist (`context/notes/housing-shortlist.md`) with the diagnosis that **the shortlist is too narrow** — 22 buildings is not enough evidence for a decision of this weight, and the budget ceiling was a symptom of the upfront-credit model, not a real affordability ceiling. With monthly payments now viable up to ~£3,000/month (and higher from August 2026), the deciding question stops being "which 22 do I email" and becomes "which of the 267 projects are actually achievable for me." The current `GradVisaRealism` enum cannot answer that cleanly — `achievable` is too coarse post-RRA, `unknown` conflates "not researched" with "researched, couldn't find," and the qualification block is missing the fields that actually determine achievability in practice.

This plan is a two-part structural change that together makes the achievability question first-class:

1. **Schema redesign.** Rebuild `ProjectQualification` for post-RRA reality, with a plural-pathway model, a universal `unknown` vs `unclear` split, and only researchable fields.
2. **Project view.** Add a top-level view toggle so the user can scan projects directly — "click achievable, see 45 projects" — instead of drilling through 55 areas to find them.

The data skill that populates all 267 projects against the new schema is the **separate next session**; this plan only prepares the ground.

---

## Sequence at a glance

```
┌─────────────────────────────────────────────────────────────┐
│ PART A — Schema redesign                                    │
│   A1. Plan file (this)                                      │
│   A2. types.ts — new enums, new qualification interface      │
│   A3. labels.ts — display labels for new enum values         │
│   A4. helpers.ts — stubQualification returns new shape       │
│   A5. Data migration — 55 area files moved to new schema     │
│   A6. config.ts — filter taxonomies updated                  │
│   A7. filtering.ts — filter predicates handle new fields     │
│   A8. Explainer updates — grad-visa-realism rewrite          │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ PART B — Project view                                        │
│   B1. BrowserClient — viewMode state + toggle handling       │
│   B2. BrowserViewToggle — new component                      │
│   B3. ProjectGrid — new parallel to area grid                │
│   B4. ProjectCard — adapted with area subline                │
│   B5. Project sort modes                                     │
│   B6. Filter bar adjustments for view mode                   │
│   B7. Area context in project modal                          │
│   B8. CSS updates                                            │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ PART C — Verification                                        │
│   C1. pnpm exec tsc --noEmit                                 │
│   C2. pnpm exec tsx scripts/validate-areas.ts                │
│   C3. pnpm exec next build                                   │
│   C4. Smoke test the UI                                      │
└─────────────────────────────────────────────────────────────┘
```

---

## Locked design decisions (from the 2026-04-16 design conversation)

These are the answers Caner gave to the design questions during discussion. All downstream work assumes these.

| # | Decision | Why |
|---|---|---|
| 1 | **Universal `unknown` / `unclear` split across every enum.** `unknown` = not researched yet (default on new entries). `unclear` = researched, couldn't determine (absorbed state). | Tells the data skill when to stop researching. Currently `unknown` is overloaded and every agent re-researches it forever. |
| 2 | **Realism as plural pathways + derived dominant.** `realism_pathways: RealismPathway[]` + `grad_visa_realism: GradVisaRealism` (computed). | Projects like Get Living East Village have 3 viable pathways (savings / overseas co-signer / guarantor-service); single headline tag loses information the email-round needs. |
| 3 | **Keep `blocked` as an explicit state.** Not derived from empty pathways. | `blocked` = "door shut, don't bother" (Moda Experian floor). Empty pathways = "no door found yet." Different operational decisions. |
| 4 | **Drop `typical_income_floor`, `guarantor_acceptable`, `professional_guarantor_accepted` (boolean), `international_friendly`, `visa_friendly`.** | Derivable / overlapping / replaced by better-shaped fields. |
| 5 | **Drop `documentation_demands` granular array.** Replace with nothing — granular document demands are not researchable from primary sources at scale. | Operators state referencing requirements at the policy level, not document-by-document. Trying to encode per-document would produce token-expensive `unclear` across the board. |
| 6 | **Merge `international_friendly` + `visa_friendly` → `international_tenant_policy`.** | Near-duplicates in practice. One enum with better values. |
| 7 | **Add `accepts_individual_overseas_guarantor` as a first-class field.** | Homeppl's Co-Signer route is explicitly non-UK-friendly; this is the one guarantor sub-state worth capturing separately. |
| 8 | **Keep `accepts_professional_guarantor` as an enum, not brand-specific list.** | Operators rarely name Guarantid vs Housing Hand specifically on their sites. Brand-specific would be mostly `unclear`. |
| 9 | **Add `upfront_rent_policy` as its own field.** States: `multi-month-available` (licence operators), `one-month-ast-cap` (ASTs post-RRA), `rejected`, `unknown`, `unclear`. | Licence operators can still accept multi-month upfront; ASTs cannot. Critical for the email-round "will my upfront-payment offer be a real lever." |
| 10 | **Add `qualification_flexibility_signal`.** States: `flexible`, `standard`, `rigid`, `unknown`, `unclear`. | Separate axis from `credit_check` strictness — flexibility is "will they listen" vs "how harshly they score." Inferred from reviews, FAQ tone, known flex cases. |
| 11 | **Numeric fields: `number \| null` with null = research-absent.** Not a `{value, status}` envelope. | Simpler. Research state carried at section level via `research_status`. |
| 12 | **Add section-level `research_status`.** States: `unresearched`, `partial`, `complete`. | Lets the data skill efficiently answer "which projects still need a pass." |
| 13 | **Outdated/empty fields stay as-is for now.** The data skill populates everything in a later session. This session's scope is the schema + UI, not data population. | Caner explicitly confirmed — schema first, view second, data skill third. |

---

## Part A — Schema redesign

### A1. Plan file

- [x] **This file.** Written 2026-04-16.

### Progress log

**2026-04-16 — Session 1: schema + project view landed clean.**

- Part A (schema redesign) complete. `types.ts` rewritten with new `ProjectQualification` interface, `RealismPathway` array, `YesNoUncertain`, `UpfrontRentPolicy`, `IntlTenantPolicy`, `FlexibilitySignal`, `ResearchStatus`, `CreditCheckStrictness`, expanded `unclear` on every applicable enum, and a `deriveRealism()` helper for pathway-to-dominant derivation.
- `labels.ts` updated with new label maps (`REALISM_PATHWAY_LABELS`, `UPFRONT_RENT_POLICY_LABELS`, `INTL_TENANT_POLICY_LABELS`, `FLEXIBILITY_SIGNAL_LABELS`, `YES_NO_UNCERTAIN_LABELS`, `RESEARCH_STATUS_LABELS`) and removed `INTERNATIONAL_FRIENDLY_LABELS` / `VISA_FRIENDLY_LABELS`.
- `helpers.ts` `stubQualification` returns the new shape with every field at `"unknown"` by default. Most data files auto-migrate via this.
- Manual data migration: `kings-cross.ts` (6 blocks), `croydon.ts` (1 block). All other files pick up defaults via `stubRental` / `buildProject`.
- `filtering.ts` gained `flattenAndFilterProjects` + `sortProjects` + `realismOrder` — pure functions for project-view pipeline.
- Explainers: `grad-visa-realism.ts` updated with `unclear` branch. Old `international-friendly.ts` / `visa-friendly.ts` explainers remain on disk but are no longer wired into the modal.
- Part B (project view) complete. New `BrowserViewToggle` component, new `ProjectGrid` component, `ProjectCard` extended with optional `area` prop for the area subline + `priceSummary` line, `ProjectModal` gained `area` + `onOpenArea` props for the area-context line at the top of the modal.
- `BrowserClient` state expanded: `viewMode: "areas" | "projects"`, `projectSortMode`, flat-project lookup for the modal (so project view can open project modal without area modal stacking behind).
- CSS: added variables for `--c-realism-unclear` / `--d-realism-unclear`, view-toggle styles, project-grid styles, project-card area subline + price line, project-modal area-context block. Responsive breakpoint at 640px.
- `find-gaps.ts` updated to check the new field set.
- Verification: `pnpm exec tsc --noEmit` clean. `pnpm exec tsx scripts/validate-areas.ts` passes 55 areas / 267 projects with 0 errors. `pnpm exec next build` produces clean static output.
- **Deferred to next session**: data skill design + first research run. The plan's Part C4 smoke test remains a manual step — to be performed by Caner.

### A2. types.ts — new enums and qualification interface

**Add** these new types to `src/areas/types.ts`:

```ts
/** Tri-state boolean. Replaces plain booleans for any field that needs "we don't know yet" vs "we researched, couldn't tell." */
export type YesNoUncertain = "yes" | "no" | "unknown" | "unclear";

/** Whether upfront rent is a live qualification lever at this operator. */
export type UpfrontRentPolicy =
  | "multi-month-available"  // licence operator, can accept 3+ months upfront
  | "one-month-ast-cap"      // AST, capped at 1 month by RRA
  | "rejected"               // operator explicitly refuses upfront as lever
  | "unknown"
  | "unclear";

/** International-tenant acceptance posture. Merges the old `international_friendly` + `visa_friendly`. */
export type IntlTenantPolicy =
  | "welcomed"
  | "accepted-case-by-case"
  | "discouraged"
  | "rejected"
  | "unknown"
  | "unclear";

/** Qualitative signal about whether the operator flexes on their stated policy when applicants bring unusual circumstances. */
export type FlexibilitySignal =
  | "flexible"    // documented cases of operator flexing on stated policy
  | "standard"    // no positive or negative signal either way
  | "rigid"       // documented cases of operator holding the line
  | "unknown"
  | "unclear";

/** Research state for the qualification block. Drives the data skill's queue. */
export type ResearchStatus = "unresearched" | "partial" | "complete";

/**
 * Post-redesign realism enum. The dominant derived tag; the actual route
 * information lives in realism_pathways.
 */
export type GradVisaRealism =
  | "achievable"
  | "achievable-with-guarantor"
  | "licence-exempt"
  | "unlikely"
  | "blocked"
  | "unclear"   // NEW: researched, couldn't determine
  | "unknown";  // pre-research default

/**
 * The plural pathway model. A project can have zero or more pathways
 * that each represent a viable route to qualification. Empty array
 * means no known route yet. grad_visa_realism is derived.
 */
export type RealismPathway =
  | "standard-passable"            // straight through referencing, no conditions
  | "with-professional-guarantor"  // Guarantid, Housing Hand, other corporate service
  | "with-savings"                 // 36x monthly rent in savings via Open Banking
  | "with-co-signer-overseas"      // non-UK co-signer accepted (e.g. Homeppl Co-Signer)
  | "with-upfront-licence"         // multi-month upfront at a licence operator
  | "licence-exempt-light-ref";    // operator doesn't meaningfully reference
```

**Expand existing enums with `unclear`:**

- `AgreementType` — add `unclear`
- `ReferencingProvider` — add `unclear`
- `CreditCheckStrictness` — new explicit enum including `unknown` + `unclear` (was structural union before)
- `VisaExpiryHandling` — add `unclear`

**Rewrite `ProjectQualification`:**

```ts
export interface ProjectQualification {
  // ── Structural facts (researchable)
  agreement_type: AgreementType;
  referencing_provider: ReferencingProvider;
  min_tenancy_months: number | null;

  // ── Income / affordability test
  income_multiple: number | null;
  open_banking_accepted: YesNoUncertain;

  // ── Upfront-payment lever
  upfront_rent_policy: UpfrontRentPolicy;

  // ── Guarantor routes
  accepts_professional_guarantor: YesNoUncertain;
  accepts_individual_overseas_guarantor: YesNoUncertain;

  // ── Qualitative posture
  credit_check: CreditCheckStrictness;
  international_tenant_policy: IntlTenantPolicy;
  visa_expiry_handling: VisaExpiryHandling;
  qualification_flexibility_signal: FlexibilitySignal;

  // ── Derived
  realism_pathways: RealismPathway[];
  grad_visa_realism: GradVisaRealism;  // derived dominant

  // ── Meta
  research_status: ResearchStatus;

  // ── Evidence
  notes: string;
  sources: SourceLink[];
  provenance?: Provenance;
}
```

**Remove:** `typical_income_floor`, `guarantor_acceptable`, `professional_guarantor_accepted` (boolean), `international_friendly`, `visa_friendly`.

- [x] **Land A2 in `src/areas/types.ts`.**

### A3. labels.ts — display labels for new enum values

- [ ] Add `GRAD_VISA_REALISM_LABELS` entries for `unclear`.
- [ ] Add `REALISM_PATHWAY_LABELS` — new map.
- [ ] Add `UPFRONT_RENT_POLICY_LABELS` and descriptions.
- [ ] Add `INTL_TENANT_POLICY_LABELS` and descriptions (replaces old international + visa-friendly).
- [ ] Add `FLEXIBILITY_SIGNAL_LABELS` and descriptions.
- [ ] Add `RESEARCH_STATUS_LABELS`.
- [ ] Add `YES_NO_UNCERTAIN_LABELS` (yes / no / unknown / unclear).
- [ ] Expand `AGREEMENT_TYPE_LABELS`, `REFERENCING_PROVIDER_LABELS`, `CREDIT_CHECK_LABELS`, `VISA_EXPIRY_HANDLING_LABELS` with `unclear`.
- [ ] Remove `INTERNATIONAL_FRIENDLY_LABELS`, `VISA_FRIENDLY_LABELS`.

### A4. helpers.ts — stubQualification returns new shape

- [ ] Rewrite `stubQualification` to return the new interface with `unknown` defaults everywhere.
- [ ] Update the signature — remove the `realism` parameter (pathways array defaults to `[]`, realism derives to `"unknown"`).

### A5. Data migration — 55 area files

Most area files build projects via `buildProject()` helper → no manual migration needed, they pick up the new `stubQualification` automatically.

Manually migrate files with inline qualification objects (verified via `grep`):
- `kings-cross.ts` — 6 inline qualifications
- `battersea-park.ts`, `brixton.ts`, `tottenham-hale.ts`, `woolwich.ts`, `wembley-park.ts`, `herne-hill.ts`, `wandsworth-town.ts`, `croydon.ts` — 1-3 inline qualifications each

Migration rules (applied manually per file):

| Old field | New field |
|---|---|
| `income_multiple` | unchanged (keep numeric) |
| `typical_income_floor` | **drop** |
| `min_tenancy_months: undefined` | `null` |
| `guarantor_acceptable: true/false` | **drop** (subsumed) |
| `professional_guarantor_accepted: true` | `accepts_professional_guarantor: "yes"` |
| `professional_guarantor_accepted: false` | `accepts_professional_guarantor: "unknown"` (safer — false was ambiguous) |
| new `accepts_individual_overseas_guarantor` | `"unknown"` (no prior data) |
| `open_banking_accepted: true` | `"yes"` |
| `open_banking_accepted: false` | `"unknown"` (safer) |
| `international_friendly + visa_friendly` | merged → `international_tenant_policy` |
| new `upfront_rent_policy` | derived by `agreement_type`: `"ast"` → `"one-month-ast-cap"`, else `"unknown"` |
| new `qualification_flexibility_signal` | `"unknown"` |
| new `realism_pathways` | derived from old `grad_visa_realism` per table below |
| `grad_visa_realism` | unchanged value (but now has `unclear` option available) |
| new `research_status` | `"partial"` (existing entries have some data) |

Pathway derivation from old realism:

| Old `grad_visa_realism` | New `realism_pathways` seed |
|---|---|
| `achievable` | `["standard-passable"]` |
| `achievable-with-guarantor` | `["with-professional-guarantor"]` |
| `licence-exempt` | `["licence-exempt-light-ref"]` |
| `unlikely` | `[]` |
| `blocked` | `[]` |
| `unknown` | `[]` |

- [x] Migrate `helpers.ts` first (this is where most files get the defaults).
- [x] Migrate 9 files with inline qualifications.
- [ ] Verify `pnpm exec tsc --noEmit` passes.

### A6. config.ts — filter taxonomies

- [ ] Expand `gradVisaFilter` with `unclear` option.
- [ ] Add `unclear` options to `agreementTypeFilter`, `referencingProviderFilter`.
- [ ] Update `FilterState` in `types.ts` if any filter category needs structural change (realism pathways filter? — probably not for v1; stick with dominant-tag filter for simplicity).

### A7. filtering.ts — filter predicates

- [ ] No structural changes if we keep filtering on `grad_visa_realism` (the dominant derived tag) rather than on pathways directly. Verify the new `unclear` state is handled (it should just work because it's another enum value).
- [ ] Update `createInitialFilterState` if any filter category changed.
- [ ] Update `cloneFilterState` to match.

### A8. Explainer updates

- [ ] Rewrite `src/explainers/grad-visa-realism.ts` for the new enum (add `unclear` case).
- [ ] New explainer: `src/explainers/realism-pathways.ts` — explains each pathway in terms of Caner's profile.
- [ ] New explainer: `src/explainers/upfront-rent-policy.ts`.
- [ ] New explainer: `src/explainers/international-tenant-policy.ts` (replaces `international-friendly.ts` + `visa-friendly.ts`).
- [ ] New explainer: `src/explainers/qualification-flexibility.ts`.
- [ ] Delete `src/explainers/international-friendly.ts` and `src/explainers/visa-friendly.ts`.
- [ ] Update `src/explainers/index.ts` registry.

---

## Part B — Project view

### B1. BrowserClient — viewMode state

- [ ] Add `viewMode: "areas" | "projects"` state.
- [ ] Add `projectSortMode: ProjectSortMode` state (separate from area `sortMode`).
- [ ] Compute `filteredProjects` — `areas.flatMap(a => a.projects).filter(projectPasses(p, deferredFilters))` with area-level filters inherited via `p.area_id` → lookup.
- [ ] Compute `sortedProjects` using the project sort mode.
- [ ] Wire clicking a project card in project view to open the project modal directly (no intermediate area modal).

### B2. BrowserViewToggle — new component

- [ ] `src/components/browser/BrowserViewToggle.tsx` — two-option pill group ("Areas · 55" / "Projects · 267").
- [ ] Positioned in the filter bar, right side.

### B3. ProjectGrid — new component

- [ ] `src/components/browser/ProjectGrid.tsx` — renders `sortedProjects` as `ProjectCard`s.
- [ ] Same grid layout pattern as the area grid (auto-fill, gap, card style).
- [ ] Empty state: "No projects match the current filters."

### B4. ProjectCard — area subline

- [ ] Update `ProjectCard.tsx` to show area name + zone as a subline: e.g., `"Quintain Living · Wembley Park (Zone 4)"`.
- [ ] This information is already implicitly available via `project.area_id` — need a lookup helper or pass the area in.
- [ ] Keep it backward compatible so the existing area-modal usage (inside "Projects in this area" accordion) still works — in that context the area subline is redundant and could be hidden, but showing it doesn't hurt.

### B5. Project sort modes

- [ ] Add `ProjectSortMode` type to `types.ts`: `"realism" | "project-grade" | "price-asc" | "area-grade" | "name"`.
- [ ] Add `sortProjects` function to `filtering.ts`.
- [ ] Default sort in project view: `"realism"`.

### B6. Filter bar adjustments

- [ ] In project view, the "area-level" filter sections remain useful (zones, borough, area grade) but apply to the project's parent area.
- [ ] Filter predicates in project view call `areaPassesAreaFilters(parentArea, filters)` for each project.
- [ ] Project sort mode selector replaces area sort mode selector when in project view.

### B7. Area context in project modal

- [ ] Add a small area-context header at the top of `ProjectModal.tsx`: "Project in [Area name] · Area grade [Grade] · Zone [Zone]" with a "View area" link that opens the area modal beneath the project modal (so closing the project modal returns to the area modal).
- [ ] Requires passing area into project modal, or a lookup.

### B8. CSS updates

- [ ] Style the view toggle in `browser.module.css`.
- [ ] Style the project grid (should mostly re-use the area grid styles).
- [ ] Update realism chip colours for the `unclear` state (distinct from `unknown` — slightly different grey).

---

## Part C — Verification

- [ ] **C1.** `pnpm exec tsc --noEmit` passes.
- [ ] **C2.** `pnpm exec tsx scripts/validate-areas.ts` passes against migrated dataset.
- [ ] **C3.** `pnpm exec next build` produces a clean build.
- [ ] **C4.** Smoke test:
  - Open app, verify area view renders correctly
  - Toggle to project view, verify all projects render
  - Filter by "achievable" — verify only achievable projects show
  - Click a project card in project view, verify project modal opens directly
  - Close project modal, verify return to project grid (not area grid)
  - Click "View area" link in project modal, verify area modal opens

---

## Out of scope for this plan

These are deferred to later sessions — explicitly not this plan:

- **Populating empty/outdated fields.** The data skill does this in the next session.
- **Adding new projects to the dataset** (Blueground, Roomzzz, Adagio, and dad's "bigger list" mandate). Data skill responsibility.
- **Budget ceiling recalibration** in `CostTier`. Staying with current boundaries; the data skill can refine.
- **Realism pathway filter UI.** v1 stays with the dominant-tag filter; if pathway-level filtering proves useful in v2, add later.
- **Email round execution.** This plan prepares the data model; actual operator outreach is a separate real-world activity.

---

## What "done" looks like

- All 267 projects are valid under the new schema.
- The project view toggle works.
- Clicking "achievable" in project view shows only achievable projects across all 55 areas.
- `tsc`, `validate-areas`, and `next build` all pass clean.
- The plan is then archived pending the data skill session.
