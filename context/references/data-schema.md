# Data Schema Reference — Flatbrowser Areas & Projects

The locked TypeScript schema for the post-refactor Flatbrowser data model. Authored 2026-04-11 as task **A1** of the website refactor plan (`context/plans/website-refactor.md`). This is the **source of truth contract** that every downstream task depends on:

- The data layer refactor (Phase B) implements these types in code.
- The UI refactor (Phase C) renders against these types.
- The agent contract (Phase E) instructs the 15 sweep agents (10 focus + 5 discovery) to fill in these fields.
- The sweep itself (Phase F) merges agent outputs into instances of these types via consensus voting (see `context/notes/consensus-synthesis-model.md`).

When this schema needs to change, update **this file first**, then propagate. Schema drift discovered during downstream phases triggers an immediate revision of this file before continuing.

This document is intentionally long. It is reference material, not a tutorial — every field is documented because the agent sweep depends on field-level clarity to produce mergeable output.

---

## Purpose

The schema does three things at once:

1. **It is the database.** Every entry in `src/areas/data/<slug>.ts` (post-refactor) is a typed `Area` constant with nested `Project` constants. There is no separate database, no API, no JSON file format — the TypeScript constants are the storage and the contract is the static type system.

2. **It is the agent return spec.** When the 15 sweep agents are dispatched in Phase F, each agent is given (a) the rubric file, (b) this schema file, and (c) a "deepest angle" hint (informational — no agent owns any field; see `context/notes/consensus-synthesis-model.md`). Each agent writes a comprehensive 500–1000 line research file from its angle, and the synthesis step merges across all 15 via consensus voting. Conformance to this schema is what makes 15 parallel research files mergeable into a single typed dataset.

3. **It is the UI contract.** The Area Modal and Project Modal accordions read directly from these typed fields. Adding a new accordion section means adding a new field to the schema. Removing a field means removing the section. The UI is a thin renderer over typed data — the schema is the spec for what gets displayed.

This triple role is the reason the schema is documented this aggressively: a vague field is fine when only one author is filling it in, but the moment you have 15 parallel research files feeding the same typed fields and a UI consuming them, ambiguity becomes corruption.

---

## How to read this document

- **Bold** field names are required.
- *Italic* field names are optional (`?:` in TypeScript).
- Every enum has its values listed and the meaning of each value documented.
- Every field has a one-line description and, where it isn't obvious, a longer note about how to fill it in.
- **Provenance fields** (`SourceLink[]`) appear at the end of every section. Every fact must trace to a source URL — agents are not allowed to assert without citing.
- When the schema says "filled by agents", it means the field is populated during the Phase F sweep.
- When it says "filled by hand", it means Caner authors it directly (the `personal_notes` field is the canonical example).
- When it says "derived", it means the value can be computed from other fields and the schema either stores it for caching or recomputes it on render.

---

## Top-level entities at a glance

```
Area
 ├── Identity (id, name, aliases, borough, postcodes)
 ├── Card-face content (headline, preview, hero_image_url)
 ├── Long-form content (full / history / vibe / weekday / weekend / notable / croydon_comparison)
 ├── Structured facts
 │     ├── zones
 │     ├── connectivity
 │     ├── demographics
 │     ├── safety
 │     ├── green_and_water
 │     ├── amenities
 │     └── regeneration
 ├── Rubric evaluation (T1 + T2 + T3 + T5 — T4 lives at project level)
 ├── Projects[]   ← nested array of Project entries
 ├── External links
 ├── Personal notes (hand-authored by Caner)
 └── Research metadata

Project
 ├── Identity (id, name, area_id back-reference)
 ├── Card-face content (headline, preview, hero_image_url)
 ├── Basic facts (developer, operator, building_type, units, storeys, build year)
 ├── Rental
 │     ├── tenure
 │     ├── prices (typed numeric ranges per bedroom count)
 │     └── qualification (income / upfront / guarantor / international / visa / credit / GRADUATE-VISA REALISM)
 ├── Building quality (T2.6 evaluation lives here)
 ├── Amenities (T4.1 — pool, gym, concierge, etc.)
 ├── Architecture (T4.4 — architects, awards, signature)
 ├── Long-form content
 ├── Resident perspective (HomeViews summary)
 ├── Project evaluation (T2.6 + T4.1 + T4.4 + overall grade)
 ├── External links
 └── Research metadata
```

---

## The `Area` interface

```ts
interface Area {
  // ── IDENTITY ──
  id: string;
  name: string;
  aliases: string[];
  borough: string;
  postcodes: string[];

  // ── CARD-FACE CONTENT ──
  headline: string;
  preview: string;
  hero_image_url?: string;

  // ── LONG-FORM CONTENT ──
  long_form: AreaLongForm;

  // ── STRUCTURED FACTS ──
  zones: TfLZone[];
  connectivity: AreaConnectivity;
  demographics: AreaDemographics;
  safety: AreaSafety;
  green_and_water: AreaGreenAndWater;
  amenities: AreaAmenities;
  regeneration: AreaRegeneration;

  // ── RUBRIC EVALUATION ──
  evaluation: AreaEvaluation;

  // ── PROJECTS ──
  projects: Project[];

  // ── EXTERNAL LINKS ──
  external_links: SourceLink[];

  // ── PERSONAL NOTES (hand-authored by Caner) ──
  personal_notes: string;

  // ── RESEARCH METADATA ──
  research: ResearchMeta;
}
```

### `Area.id` *(required, string)*

URL-safe slug (`kebab-case`). Must match the filename of the data file (`src/areas/data/<id>.ts`). Examples: `nine-elms`, `wembley-park`, `kings-cross`, `acton`. Must be globally unique within the dataset. Do not change after creation — slug-based file paths and IDs are stable references.

### `Area.name` *(required, string)*

Display name as shown on the area card. Use the form Caner would naturally say out loud. Examples: `Nine Elms`, `Wembley Park`, `King's Cross`, `Wood Wharf` (if Wood Wharf is its own area rather than part of Canary Wharf — see migration notes).

### `Area.aliases` *(required, `string[]`)*

Alternative names the area is known by. Used for search matching. Empty array if none. Examples for Nine Elms: `["VNEB", "Vauxhall Nine Elms Battersea", "Nine Elms / Vauxhall"]`. Can be empty `[]`.

### `Area.borough` *(required, string)*

The London borough or boroughs the area sits in. If it spans multiple, use the format `"Wandsworth / Lambeth"`. If it sits cleanly in one, just the name (`"Camden"`).

### `Area.postcodes` *(required, `string[]`)*

Primary postcodes covered by the area. Use postcode districts (e.g. `"SW8"`), not full postcodes. Examples: `["SW8", "SW11"]` for Nine Elms; `["N1C", "N1"]` for King's Cross.

### `Area.headline` *(required, string)*

A single sentence (≤ 140 chars) that hooks a reader scanning the card grid. Should be concrete and specific, not generic. Examples:
- ✅ "The Northern Line extension turned an industrial wasteland into London's biggest single regeneration scheme."
- ✅ "Argent's masterplan turned a railway terminus into the cultural heart of central London — six tube lines, Coal Drops Yard, and the British Library on the doorstep."
- ❌ "A great area with lots to offer." (vague)
- ❌ "Modern London living." (marketing speak)

### `Area.preview` *(required, string)*

A 2–3 sentence card-body description. The thing that fits on the closed area card under the headline. Honest, character-led, and specific. Builds on the headline without repeating it.

### `Area.hero_image_url` *(optional, string)*

A URL to a representative image. Should ideally be a Wikipedia / Wikimedia / operator-hosted image that's reasonably stable. If null or missing, the area card falls back to typography-only rendering. **Do not embed binary data; URLs only.**

### `Area.long_form` *(required, `AreaLongForm` object)*

The deep content that powers the area modal's "Vibe & character" accordion. Six structured sub-fields, each a multi-paragraph string. This is the heart of the "self-contained, no external research needed" promise — these are the paragraphs Caner would otherwise have to assemble from blog posts, Reddit threads, and operator marketing.

```ts
interface AreaLongForm {
  full: string;            // 4–8 paragraphs — the genuine area profile
  history: string;         // 1–3 paragraphs — how the area got to where it is
  vibe: string;            // 1–3 paragraphs — what it actually feels like to live here
  weekday: string;         // 1–2 paragraphs — what a Tuesday at 7pm looks like
  weekend: string;         // 1–2 paragraphs — what a Saturday at midday looks like
  notable: string;         // 1–2 paragraphs — what people associate with this place
  croydon_comparison: string; // 1–2 paragraphs — explicit "this is how it differs from Croydon"
}
```

The `croydon_comparison` field is unusual but important: it forces every area to articulate, in plain prose, what makes it specifically an upgrade from where Caner is now. It's the field that catches "this place is fine but not actually better than Croydon" cases that pure rubric scoring might let through.

### `Area.zones` *(required, `TfLZone[]`)*

The TfL fare zone(s) the area sits in. Use the type `TfLZone = "Zone 1" | "Zone 2" | "Zone 3" | "Zone 4" | "Zone 5" | "Zone 6" | "Zone 7" | "Zone 8" | "Zone 9"`. Multi-zone areas (Greenwich Peninsula spans Zone 2/3, Stratford spans Zone 2/3) get multiple values. Verify against TfL maps directly.

### `Area.connectivity` *(required, `AreaConnectivity` object)*

Structured connectivity data. Replaces the old qualitative `conn` tag.

```ts
interface AreaConnectivity {
  lines: TransportLine[];
  primary_stations: Station[];
  times_to_anchors: AnchorTimes;
  multi_cluster_score: 0 | 1 | 2 | 3 | 4 | 5;
  redundancy_score: 0 | 1 | 2 | 3 | 4 | 5;
  notes: string;
  sources: SourceLink[];
}

interface TransportLine {
  name: string;          // "Jubilee", "Elizabeth", "Northern", "DLR", "Overground", "Bakerloo"
  type: "tube" | "elizabeth" | "overground" | "dlr" | "rail" | "tram";
}

interface Station {
  name: string;          // "Wembley Park", "Canary Wharf"
  lines: string[];       // names of lines serving the station
  walk_minutes_from_centre: number;  // walking time from the area's notional centre
}

interface AnchorTimes {
  city_of_london: number;          // minutes via best public transport route
  canary_wharf: number;
  soho_fitzrovia: number;
  kings_cross_shoreditch: number;
}
```

`multi_cluster_score` (0–5) is derived from `times_to_anchors`: count how many of the four anchors are reachable in ≤25 minutes. Maps directly to rubric criterion **5.1**.

`redundancy_score` (0–5) is derived from `lines.length`: 1 line = 1, 2 lines = 2, 3 lines = 3, 4+ lines = 4, 5+ lines = 5. Captures whether a single line failure strands the resident. Maps directly to rubric criterion **5.2**.

Both scores are stored even though derived, so the agents can compute them once and the UI can render them without recomputation. If the underlying fields change, the score must be recomputed.

### `Area.demographics` *(required, `AreaDemographics` object)*

Census 2021-grounded demographic data. Replaces the old `demo` and `age` tags with structured numbers. **Hard rule: every demographic claim must trace to an ONS / Census 2021 source URL.**

```ts
interface AreaDemographics {
  primary_age_cohort: AgeCohort;          // dominant signal
  age_breakdown: AgeBreakdownEntry[];     // % of population in each cohort
  ethnic_composition: EthnicEntry[];      // % per group
  household_mix: HouseholdEntry[];        // % per household type
  student_pct: number;
  professional_renter_pct: number;
  notes: string;                          // qualitative gloss on the numbers
  sources: SourceLink[];                  // every demographic claim cited here
}

type AgeCohort = "18-29" | "30-39" | "40-49" | "50+";
type AgeBreakdownEntry = { cohort: AgeCohort; pct: number };
type EthnicEntry = { group: string; pct: number };
type HouseholdEntry = { type: string; pct: number };
```

`primary_age_cohort` maps directly to rubric criterion **2.7** (younger demographic skew). The criterion passes if `primary_age_cohort` is `"18-29"` or `"30-39"`; partial if data is borderline; fail if it's `"40-49"` or `"50+"`.

The rubric doesn't use ethnic composition as a criterion — it's stored as descriptive metadata only.

### `Area.safety` *(required, `AreaSafety` object)*

Safety assessment. Maps to rubric criterion **1.1** (demonstrably safer than Croydon) and feeds into the area modal's safety accordion.

```ts
interface AreaSafety {
  overall: "very-safe" | "safe" | "moderate" | "concerning";
  crime_vs_borough: "below" | "average" | "above";
  crime_vs_croydon: "much-safer" | "safer" | "similar" | "worse";
  after_dark_assessment: string;
  concerns: string[];                     // empty array if none
  sources: SourceLink[];                  // Met Police URLs etc.
}
```

`crime_vs_croydon` is the key field — it's the Croydon-explicit comparison that the rubric was built around. An area where this field is `"similar"` or `"worse"` should fail T1.1 and probably not be in the dataset.

### `Area.green_and_water` *(required, `AreaGreenAndWater` object)*

Green space, water frontage, parks. Maps to rubric criterion **2.4**.

```ts
interface AreaGreenAndWater {
  has_river: boolean;
  has_canal: boolean;
  has_dock: boolean;
  parks: ParkEntry[];
  overall_assessment: string;
}

interface ParkEntry {
  name: string;
  size_acres?: number;        // optional — not all parks have a clean acreage
  walk_minutes: number;       // from the area's notional centre
  notes: string;
}
```

### `Area.amenities` *(required, `AreaAmenities` object)*

Walkable amenity inventory. Five categories, each a list of named amenities with walk times. Maps to rubric criteria **2.1, 2.2, 2.3** (and via the gym list, the most-load-bearing T2 row).

```ts
interface AreaAmenities {
  grocery: AmenityEntry[];           // supermarkets and food shops
  gyms: AmenityEntry[];              // CRITICAL — gym list is the T2.3 evidence
  food_and_drink: AmenityEntry[];    // restaurants, cafés, pubs
  health: AmenityEntry[];            // GP, dentist, pharmacy
  cultural: AmenityEntry[];          // libraries, cinemas, bookshops, theatres
  notes: string;
}

interface AmenityEntry {
  name: string;
  type: string;                      // e.g. "Waitrose", "PureGym", "Independent fishmonger"
  walk_minutes: number;
  notes: string;                     // any context worth knowing
}
```

The `gyms` array is the single most important amenity list for Caner. Rubric T2.3 explicitly weights this as the most load-bearing T2 row. An area with no entries in `gyms[]` (or only resident-only gyms) should be flagged in T2.3 evaluation.

### `Area.regeneration` *(required, `AreaRegeneration` object)*

Regeneration trajectory. Maps to rubric criteria **3.1** (active regeneration / current investment) and **5.3** (long-term ascending trajectory).

```ts
interface AreaRegeneration {
  status: "complete" | "active" | "phased" | "early";
  investment_pipeline: string;            // qualitative description
  recent_milestones: string[];            // bullet list of recent achievements
  upcoming_milestones: string[];          // what's expected next
  trajectory_through_2027: string;        // where this area is in Aug 2027 (visa transition)
  sources: SourceLink[];
}
```

`trajectory_through_2027` is unusual but deliberate — Caner's visa expires August 2027, and an area that peaks in 2025 and starts levelling off is a worse bet than an area still ascending into 2028+. The field forces every area's research to look forward to that horizon, not just describe the current state.

### `Area.evaluation` *(required, `AreaEvaluation` object)*

The rubric evaluation at the area level. Every area must have all four area-relevant tiers populated (T1, T2, T3, T5) with one entry per criterion. T4 lives at the project level.

```ts
interface AreaEvaluation {
  t1_foundational: TierEvaluation;        // 6 criteria
  t2_daily_life: TierEvaluation;          // 6 area-level criteria (T2.6 building quality is project-level)
  t3_identity: TierEvaluation;            // 6 criteria
  t5_personal: TierEvaluation;            // 4 criteria
  overall_grade: Grade;
  grade_reasoning: string;
}

interface TierEvaluation {
  criteria: CriterionScore[];
  tier_score: "strong" | "good" | "moderate" | "weak" | "fail";
  tier_summary: string;                   // 2–4 sentences synthesising the tier
}

interface CriterionScore {
  id: string;                             // "1.1", "1.2", ..., "5.4"
  name: string;                           // human-readable label, copied from rubric
  status: "pass" | "partial" | "fail" | "unknown";
  reasoning: string;                      // why this status — short paragraph
  sources: SourceLink[];
}

type Grade = "SS" | "S" | "A" | "B" | "C" | "F";
```

`overall_grade` synthesises the four tier scores into a single area-level grade. Use the Cernio scale:

| Grade | Meaning |
|---|---|
| **SS** | Exceptional. Every tier is `strong` or `good`. The kind of area Caner would put at the top of his shortlist without hesitation. |
| **S** | Excellent. Most tiers are `strong`, no `weak`/`fail` rows. |
| **A** | Very good. Strong on T1+T2, good or moderate on T3 and T5, no failures. |
| **B** | Good. Passes T1 cleanly, mostly good on T2+T3, may have weaknesses in T5 or some T2 rows. |
| **C** | Marginal. Passes T1 but weak elsewhere. Worth listing but not a primary candidate. |
| **F** | Fails T1 outright. Should not be in the dataset at all (so this grade should be vanishingly rare in practice — F-graded areas are filtered out at the discovery stage). |

`grade_reasoning` is a short paragraph (3–6 sentences) explaining why this grade. Cite specific criteria where relevant.

### `Area.projects` *(required, `Project[]`)*

The flagship projects within this area. Can be `[]` for areas with no flagship managed development (Acton, Tooting, etc. — see Decision 2 in `context/plans/website-refactor.md`). Order projects by overall project grade descending.

### `Area.external_links` *(required, `SourceLink[]`)*

External references for the area as a whole. Operator portfolio pages, Wikipedia, press articles, planning portals, etc. Empty array if none. The area-level external links are distinct from the project-level external links — those are inside each `Project`.

### `Area.personal_notes` *(required, string)*

**Hand-authored by Caner**, not by agents. Caner's own annotations as he builds and reviews the dataset. Can be empty (`""`) but the field always exists. Examples of what might go here: "Visited 2026-04-15, the gym situation was thinner than the data suggests"; "Friend lives in this area and says..."; "Avoid the south end after dark — felt different from the data".

This field is deliberately unstructured and deliberately personal. It is the one place the schema explicitly lets opinion in.

### `Area.research` *(required, `ResearchMeta` object)*

Provenance metadata for the whole area entry.

```ts
interface ResearchMeta {
  primary_agent: string;                  // which sweep agent originated this area
  research_date: string;                  // ISO 8601 date — when first researched
  last_verified: string;                  // ISO 8601 date — when last reviewed for accuracy
  confidence: "high" | "medium" | "low";  // overall confidence in this entry
  open_questions: string[];               // things the agent couldn't resolve
}
```

`open_questions` is the schema's release valve for honest uncertainty. An agent that hits a fact it cannot verify writes the question into this array rather than guessing or omitting. The merge step in Phase E preserves these for human review.

### `Provenance` *(optional, attached per section)*

Added in the consensus-model revision (`context/notes/consensus-synthesis-model.md`). Every major section type carries an optional `provenance?: Provenance` field that records which agents contributed to it, the consensus tier, and any preserved minority claims:

```ts
interface Provenance {
  contributing_agents: string[];   // agent IDs that contributed evidence (e.g. ["01", "04", "07"])
  consensus_level: ConsensusLevel; // "high" | "medium" | "low"
  dissenting_claims: DissentingClaim[];
}

type ConsensusLevel = "high" | "medium" | "low";
// high   = ≥10 of 15 agents agree
// medium = 5–9 agents agree
// low    = 1–4 agents (or specialist topic with thin natural coverage)

interface DissentingClaim {
  claim: string;                   // the minority view, in plain prose
  agents: string[];                // which agents asserted it
  sources: SourceLink[];           // sources backing the dissent
}
```

`Provenance` is **always optional**. The migrated entries from the website refactor (B5) do not have it; the Phase F sweep populates it as part of the synthesis step.

Sections that may carry a `provenance?: Provenance`:

| Layer | Sections |
|---|---|
| Area | `AreaConnectivity`, `AreaDemographics`, `AreaSafety`, `AreaGreenAndWater`, `AreaAmenities`, `AreaRegeneration`, `AreaLongForm`, `AreaEvaluation`, each `TierEvaluation` |
| Project | `ProjectQualification`, `ProjectBuildingQuality`, `ProjectAmenities`, `ProjectArchitecture`, `ProjectLongForm`, `ProjectResidentSignal`, `ProjectEvaluation` |

The UI surfaces the consensus level so the reader can weigh the confidence of any given fact. Sections without provenance render as "migrated entry — awaiting Phase F sweep" rather than failing.

The reason every section can be independently provenance-tracked (rather than one provenance block per area) is that different agents naturally contribute different evidence per topic. Agent #4 might be the strongest source for transport, agent #9 the strongest for rental qualification, and agent #14 the strongest for resident voice — recording attribution at the section level keeps the cumulative-coverage model honest.

---

## The `Project` interface

```ts
interface Project {
  // ── IDENTITY ──
  id: string;
  name: string;
  area_id: string;                        // back-reference to the parent Area's id

  // ── CARD-FACE CONTENT ──
  headline: string;
  preview: string;
  hero_image_url?: string;

  // ── BASIC FACTS ──
  developer: string;
  operator: string;
  building_type: BuildingType;
  units_total?: number;
  storeys?: number;
  build_completed?: number;               // year
  build_phase: "complete" | "in_delivery" | "future" | "phased";

  // ── RENTAL ──
  rental: ProjectRental;

  // ── BUILDING QUALITY (T2.6 lives here) ──
  building_quality: ProjectBuildingQuality;

  // ── AMENITIES (T4.1 lives here) ──
  amenities: ProjectAmenities;

  // ── ARCHITECTURE (T4.4 lives here) ──
  architecture: ProjectArchitecture;

  // ── LONG-FORM ──
  long_form: ProjectLongForm;

  // ── RESIDENT PERSPECTIVE ──
  resident_signal: ProjectResidentSignal;

  // ── PROJECT-LEVEL EVALUATION ──
  evaluation: ProjectEvaluation;

  // ── EXTERNAL LINKS ──
  external_links: SourceLink[];

  // ── RESEARCH METADATA ──
  research: ResearchMeta;
}

type BuildingType = "BTR" | "PRS" | "Owner-Lease" | "Build-to-Sell" | "Mixed";
```

### Identity fields

- **`Project.id`** — slug, kebab-case, unique within the parent area. E.g. `8-water-street`, `gasholders`, `one-park-drive`. Need not be globally unique but globally unique slugs are encouraged.
- **`Project.name`** — display name. E.g. "8 Water Street", "Gasholders", "One Park Drive".
- **`Project.area_id`** — must match the `id` of the parent `Area`. Schema-enforced back-reference.

### Card-face content

- **`Project.headline`** — single sentence hook for the project card.
- **`Project.preview`** — 2–3 sentences for the project card body.
- **`Project.hero_image_url`** — optional, same fallback rules as `Area.hero_image_url`.

### Basic facts

- **`Project.developer`** — who built it. E.g. "Quintain Living", "Vertus / Canary Wharf Group", "EcoWorld Ballymore", "Berkeley Group".
- **`Project.operator`** — who runs lettings. Often the same as developer for BTR (Vertus, Quintain). Can differ for ownership-led projects with secondary lettings markets.
- **`Project.building_type`** — one of:
  - `"BTR"` — Build-to-Rent (purpose-built rental, professional operator, central referencing)
  - `"PRS"` — Private Rented Sector (general managed rental, may include multiple owners)
  - `"Owner-Lease"` — primarily ownership but with active lettings on the secondary market
  - `"Build-to-Sell"` — primarily ownership, weak rental presence
  - `"Mixed"` — meaningful split between rent and buy
- **`Project.units_total`** — optional integer; total residential units in the building/development.
- **`Project.storeys`** — optional integer; tallest building's storey count.
- **`Project.build_completed`** — optional integer; year of completion. For phased developments, the year of the most recent significant phase.
- **`Project.build_phase`** — one of:
  - `"complete"` — fully delivered
  - `"in_delivery"` — actively being built out, residents already in some buildings
  - `"future"` — planning consent or early stages, no residents yet
  - `"phased"` — multi-phase development, ongoing for years

### `Project.rental` — the most important section

```ts
interface ProjectRental {
  tenure: ("rent" | "buy")[];
  prices: ProjectPrices;
  qualification: ProjectQualification;
  cost_tier?: CostTier;                   // relative cost positioning among London rental projects
}

type CostTier = "budget" | "affordable" | "mid-range" | "premium" | "luxury";

interface ProjectPrices {
  studio?: PriceBand;
  one_bed?: PriceBand;
  two_bed?: PriceBand;
  bills_included: boolean;
  notes: string;
}

interface PriceBand {
  min: number;                     // GBP
  max?: number;                    // GBP, optional
  currency: "GBP";
  per: "month";
}

interface ProjectQualification {
  income_multiple: number;                 // e.g. 30 means 30× monthly rent annually
  typical_income_floor: number;            // GBP/year
  min_tenancy_months?: number;             // minimum tenancy period in months
  guarantor_acceptable: boolean;
  agreement_type: AgreementType;           // AST (subject to RRA) or licence (exempt)
  referencing_provider: ReferencingProvider; // Homeppl uses Open Banking (works for intl tenants)
  professional_guarantor_accepted: boolean; // Housing Hand, Guarantid, etc.
  open_banking_accepted: boolean;           // Open Banking income verification (e.g. via Homeppl)
  international_friendly: "yes" | "case-by-case" | "no" | "unknown";
  visa_friendly: "yes" | "case-by-case" | "no" | "unknown";
  visa_expiry_handling: "ignored" | "tenancy-shortened" | "rejected" | "unknown";
  credit_check: "strict" | "standard" | "lenient";
  grad_visa_realism: GradVisaRealism;
  notes: string;
  sources: SourceLink[];
  provenance?: Provenance;
}

/** Whether the arrangement is a tenancy (subject to RRA) or a licence (exempt). */
type AgreementType = "ast" | "licence" | "unknown";

/** Which referencing provider the operator uses. Homeppl uses Open Banking (works for intl). */
type ReferencingProvider = "homeppl" | "goodlord" | "canopy" | "in-house" | "none" | "unknown";

/**
 * Graduate-visa rental realism — rebuilt for the post-RRA world.
 * The Renters' Rights Act 2025 (commencing 1 May 2026) caps advance rent at one month,
 * eliminating the "pay upfront to bypass referencing" route. The derivation now centres
 * on alternative qualification routes.
 */
type GradVisaRealism =
  | "achievable"                   // standard route works (Open Banking, flexible referencing)
  | "achievable-with-guarantor"    // needs professional guarantor (Housing Hand / Guarantid)
  | "licence-exempt"               // licence agreement, outside RRA scope
  | "unlikely"                     // no documented flexibility for graduate-visa renters
  | "blocked"                      // explicit disqualifying policies
  | "unknown";                     // not yet researched
```

This is the section that makes Flatbrowser uniquely useful. Every other property tool either ignores rental qualification entirely (Rightmove, HomeViews) or treats it as marketing-friendly fluff (operator websites). The structured fields here let agents capture, per project, exactly what kind of renter the operator will accept and on what terms.

The single most important field is **`grad_visa_realism`** — a six-state derived signal that surfaces directly on the project card inside the area modal as a coloured indicator. Rebuilt for the post-RRA world where the upfront bypass route no longer exists:

| Value | Card indicator | Meaning |
|---|---|---|
| `"achievable"` | 🟢 Green | A graduate-visa renter can realistically pass referencing through the standard route — Open Banking income verification, flexible referencing provider, or inherently relaxed requirements. |
| `"achievable-with-guarantor"` | 🟡 Amber | Standard route needs supplementing with a professional guarantor service (Housing Hand, Guarantid, etc.) — the primary post-RRA workaround. |
| `"licence-exempt"` | 🔵 Blue | Accommodation is under a licence agreement rather than an AST, putting it outside the RRA's scope. Different qualification dynamics. |
| `"unlikely"` | 🟠 Orange | Operator's standard requirements are above what a graduate-visa renter can meet, no documented flexibility. |
| `"blocked"` | 🔴 Red | Operator has explicit policies that disqualify graduate-visa renters with no UK credit history. |
| `"unknown"` | ⚪ Grey | Not yet researched — honest gap in the dataset. |

This single field is what lets Caner scan an area modal and immediately see which projects are even worth investigating versus which are aspirational-only. It's the one signal that no other property tool produces.

**Key post-RRA changes to this section:**
- `upfront_max_months` and `upfront_negotiable` — **removed**. The RRA caps advance rent at one month (Sections 8–9), making the upfront bypass strategy impossible for ASTs.
- `"achievable-with-upfront"` realism — **removed**. Replaced by `"achievable-with-guarantor"` and `"licence-exempt"`.
- `"skipped-with-upfront"` credit check — **removed**. Credit check is now 3-value: strict / standard / lenient.
- `agreement_type`, `referencing_provider`, `professional_guarantor_accepted`, `open_banking_accepted` — **added**. These are the new qualification-route signals that replaced upfront.
- `cost_tier` — **added** on `ProjectRental`. Relative cost positioning (budget → luxury).
- `min_tenancy_months` — **added**. Minimum tenancy period; relevant under RRA's periodic tenancy rules.

See `context/references/renters-rights-act.md` for the full legal analysis behind these changes.

### `Project.building_quality` — T2.6 lives here

```ts
interface ProjectBuildingQuality {
  epc_rating?: string;                   // "A", "B", "C", "D" — UK Energy Performance Certificate
  sound_insulation: Quality;
  thermal_performance: Quality;
  layout_notes: string;
  kitchen_quality: Quality;              // matters — Caner cooks regularly
  heating_type: "gas" | "electric" | "communal" | "heat-pump" | "mixed" | "unknown";
  notes: string;
}

type Quality = "excellent" | "good" | "average" | "poor" | "unknown";
```

Maps to rubric criterion **2.6** (building quality at modern standard). `kitchen_quality` is called out as a separate field because Caner cooks regularly — kitchen layout and finish quality matter for him in a way they wouldn't for a person who eats out.

### `Project.amenities` — T4.1 lives here

```ts
interface ProjectAmenities {
  pool: boolean;
  pool_notes: string;
  gym: boolean;
  gym_quality: Quality;                  // distinct from area-level gym access
  concierge: "24h" | "daytime" | "none";
  sky_lounge: boolean;
  co_working: boolean;
  dining_room: boolean;
  cinema_room: boolean;
  rooftop_terrace: boolean;
  parking: boolean;
  bike_storage: boolean;
  pet_policy: string;
  other_amenities: string[];
  overall_tier: "premium" | "strong" | "decent" | "basic";
}
```

`overall_tier` is the project-level synthesis of T4.1 and feeds the project's evaluation. `gym_quality` is intentionally separate from area-level gym access because resident gyms in BTR developments are usually inadequate for serious training even when present — "has a gym" is not the same as "has a gym Caner can train at properly". The honest assessment goes here.

### `Project.architecture` — T4.4 lives here

```ts
interface ProjectArchitecture {
  architects: string[];                  // named practices
  awards: string[];                      // RIBA, Stirling Prize, etc.
  is_signature: boolean;                 // does this qualify as signature architecture?
  style_notes: string;
}
```

Maps directly to rubric criterion **4.4**.

### `Project.long_form`

```ts
interface ProjectLongForm {
  full: string;                          // 3–5 paragraphs — the genuine project profile
  living_experience: string;             // 1–2 paragraphs — what living here is actually like
  notable_features: string;              // 1 paragraph — the things worth highlighting
}
```

Project-level long-form is shorter than area-level long-form because most of the surrounding context lives at the area level. The project just adds the specifics of what *this building* is like to live in.

### `Project.resident_signal`

```ts
interface ProjectResidentSignal {
  homeviews_score?: number;              // 0.0–5.0 if available
  homeviews_url?: string;
  summary: string;                       // synthesis of resident sentiment
  common_complaints: string[];
  common_praise: string[];
}
```

The "what residents actually say" section. Sourced from HomeViews where available, supplemented by Reddit, Trustpilot, Google reviews. Synthesised honestly — if residents complain about thin walls or unresponsive maintenance, it goes in `common_complaints`.

### `Project.evaluation`

```ts
interface ProjectEvaluation {
  t2_6_building_quality: CriterionScore;
  t4_1_amenity_package: CriterionScore;
  t4_4_signature_arch: CriterionScore;
  overall_grade: Grade;
  grade_reasoning: string;
}
```

Project-level rubric evaluation. Three criteria from T2 and T4 (the project-level rows of the rubric) plus an overall project grade. Grade scale matches `Area.evaluation.overall_grade` — same six levels.

The project grade is independent of the parent area's grade. This is the "good project in an okay area / okay project in a good area" insight. A B-grade area can contain an S-grade project and vice versa.

### `Project.external_links`

Same `SourceLink[]` shape as the area-level field. Operator listing page, developer site, Rightmove search URL, HomeViews building page, etc. Empty array if none.

### `Project.research`

Same `ResearchMeta` shape as the area-level field.

---

## Supporting types (full definitions)

### `Grade`

```ts
type Grade = "SS" | "S" | "A" | "B" | "C" | "F";
```

Six-level scale matching Cernio's job-grading scale. See `Area.evaluation.overall_grade` documentation above for the meaning of each level.

### `Quality`

```ts
type Quality = "excellent" | "good" | "average" | "poor" | "unknown";
```

Used for sub-aspects of building quality, gym quality, etc. Five levels including `"unknown"` for honest gaps.

### `TfLZone`

```ts
type TfLZone = "Zone 1" | "Zone 2" | "Zone 3" | "Zone 4" | "Zone 5" | "Zone 6" | "Zone 7" | "Zone 8" | "Zone 9";
```

TfL fare zones. Cambridge is intentionally not represented because the dataset is London-only per Decision 11 of the rubric, but the type is shaped to support future expansion (an area outside London would not have a zone field, or the schema would extend with `null`).

### `SourceLink`

```ts
interface SourceLink {
  url: string;
  label: string;                         // human-readable description of the source
  type: SourceType;
  accessed_date: string;                 // ISO 8601 date when the agent fetched it
}

type SourceType =
  | "operator"        // BTR operator's official site
  | "developer"       // developer's official site
  | "rightmove"       // Rightmove or Zoopla listing
  | "homeviews"       // HomeViews building page
  | "tfl"             // Transport for London
  | "ons"             // Office for National Statistics / Census
  | "met-police"      // Metropolitan Police crime data
  | "wikipedia"       // Wikipedia article
  | "press"           // newspaper / magazine article
  | "reddit"          // Reddit thread
  | "council"         // local council planning portal etc.
  | "other";          // anything else
```

Every fact in the schema must trace to at least one `SourceLink`. The structured `type` enum lets the UI badge sources by type and lets the merge step weight authoritative sources (TfL, ONS, Met Police, council) above informal ones (Reddit, press) when they conflict.

### `ResearchMeta`

Already shown in the `Area` and `Project` sections — same shape at both levels.

### `CriterionScore` and `TierEvaluation`

Already shown in the `AreaEvaluation` section — used identically for area-level and project-level evaluation.

### `AmenityEntry`

Already shown in the `AreaAmenities` section.

---

## The 10 locked decisions (cross-referenced)

These decisions are the load-bearing assumptions of this schema. Repeated here for self-containment — also documented in `context/plans/website-refactor.md`.

| # | Decision | How it shows up in this schema |
|---|---|---|
| 1 | **Rental qualification is a per-project structured field, not a tier** | `Project.rental.qualification` — most prominent section in the project modal |
| 2 | **Areas with no flagship projects use `projects: []`** | `Area.projects` is required but can be empty |
| 3 | **Photos are linked URLs with typography fallback** | `hero_image_url` is optional at both area and project level; renderer falls back to typography |
| 4 | **Grade scale is 6 levels (SS/S/A/B/C/F)** | `type Grade = "SS" \| "S" \| "A" \| "B" \| "C" \| "F"` |
| 5 | **Default sort is best area grade descending** | UI concern, not schema, but the schema supports both via `Area.evaluation.overall_grade` and `max(Project.evaluation.overall_grade)` |
| 6 | **Side-by-side comparison view is v2** | No schema impact |
| 7 | **Shortlist / favourites / UI-driven personal notes is v2** | `Area.personal_notes` is hand-authored; UI-driven notes come later |
| 8 | **Cambridge supported in types, excluded at population time** | `Area.borough` is `string`, not an enum, so any London borough or future Cambridge area can be added without schema change |
| 9 | **`personal_notes` field on Area, hand-authored** | `Area.personal_notes: string` (required, can be empty) |
| 10 | **Old research markdown files in `docs/research/` are not migrated** | No schema impact, but `Area.research.primary_agent` documents which sweep produced each entry |

---

## Worked example: Wembley Park

A fully populated `Area` for Wembley Park, showing what every field looks like in practice. Use this as a reference when writing migration code (Phase B5) or when reviewing agent output (Phase F).

```ts
import type { Area } from "@/src/areas/types";

const wembleyPark: Area = {
  // ── IDENTITY ──
  id: "wembley-park",
  name: "Wembley Park",
  aliases: ["Wembley", "Quintain Living estate"],
  borough: "Brent",
  postcodes: ["HA9"],

  // ── CARD-FACE CONTENT ──
  headline: "The UK's largest single-site BTR development — 85 acres built around the stadium with a real 15-minute neighbourhood model.",
  preview: "Quintain's transformation of the Wembley Stadium hinterland into a managed BTR campus is unmatched in the UK for scale and coordination. Eight named buildings, single-landlord referencing, Boxpark + Designer Outlet + nine-screen Cineworld on site, Jubilee + Metropolitan lines, Sunday Times Best Place to Live in London 2025.",
  hero_image_url: "https://upload.wikimedia.org/wikipedia/commons/.../wembley-park.jpg",

  // ── LONG-FORM CONTENT ──
  long_form: {
    full: "Quintain's 85-acre Wembley Park is the most comprehensively managed Build-to-Rent campus in the United Kingdom, and arguably its most ambitious experiment in the 15-minute neighbourhood model. ...[3-7 more paragraphs describing the area in honest, narrative depth]...",
    history: "Until the late 2000s, Wembley Park was a tired post-war commercial fringe to Wembley Stadium, dominated by surface parking and underused industrial sites. Quintain bought the land around the stadium and began a phased masterplan in 2002 that has since delivered over 4,500 homes against a planned 8,500 by 2027. ...",
    vibe: "Wembley Park reads as deliberately functional rather than culturally curated. The streets are clean, the public realm is generous, and the leisure offer is dense — Boxpark on event nights is genuinely loud. On a non-event Tuesday it feels more like a quiet, well-managed campus than a buzzy district. The crowd is younger than the average London area, with strong South Asian household presence and a noticeable share of recent graduates and early-career professionals.",
    weekday: "A Tuesday at 7pm: the Designer Outlet stays open until 9, the Cineworld is busy with after-work showings, Boxpark has a moderate crowd, the gyms are full, and Union Park sees joggers and dog walkers. The Jubilee line trains pulse every 2-3 minutes through Wembley Park station. The streets feel populated but calm.",
    weekend: "A Saturday at midday: Designer Outlet hits weekend shopping peak, restaurants fill, Union Park is the social centre. On stadium event days the area transforms — 80,000 people arrive and depart over the course of the day, the streets temporarily belong to the event crowd, and quiet residential calm returns by mid-evening. Non-event Saturdays are unremarkable in the best way: a normal busy suburb with retail and food at scale.",
    notable: "Wembley Stadium itself is the obvious anchor, but the more interesting story is the Quintain Living model: a single landlord operating a portfolio of named buildings (Luna, Ferrum, Madison, Canada Gardens, Landsby, Alameda, Beton, Alto), each with distinct interior themes, all sharing the same management quality, the same referencing process, the same resident events programme, and access to the same on-site amenities. There is no other place in London where the rental experience is this consistently coordinated.",
    croydon_comparison: "Wembley Park is the cleanest single comparison point to Croydon in the entire dataset. Both are Zone 4 outer-London centres with stadium associations, big retail offers, and Jubilee/Metropolitan vs East Croydon Brighton mainline connectivity at roughly equivalent travel times to central London. The differences are everything else: Wembley Park is professionally managed end to end where Croydon is fragmented private rentals, the public realm is recently built and well-maintained where Croydon's is decaying, the demographic skew is significantly younger, and the rental qualification process is materially easier through Quintain's central referencing. The leisure offer (Boxpark, Designer Outlet, Cineworld, restaurants) is in a different league. For Caner specifically, Wembley Park is the closest the dataset comes to a pure 'same kind of place but actually nice' upgrade."
  },

  // ── STRUCTURED FACTS ──
  zones: ["Zone 4"],

  connectivity: {
    lines: [
      { name: "Jubilee", type: "tube" },
      { name: "Metropolitan", type: "tube" },
      { name: "Bakerloo", type: "tube" },     // via Wembley Central nearby
      { name: "Overground", type: "overground" } // via Wembley Central
    ],
    primary_stations: [
      { name: "Wembley Park", lines: ["Jubilee", "Metropolitan"], walk_minutes_from_centre: 3 },
      { name: "Wembley Central", lines: ["Bakerloo", "Overground"], walk_minutes_from_centre: 14 }
    ],
    times_to_anchors: {
      city_of_london: 28,
      canary_wharf: 32,
      soho_fitzrovia: 22,
      kings_cross_shoreditch: 25
    },
    multi_cluster_score: 3,                  // 3 of 4 anchors ≤25 minutes
    redundancy_score: 4,                     // 4 lines via Park + Central
    notes: "Jubilee is the primary line and the fastest to central London. Metropolitan adds direct access to the City via Baker Street. Wembley Central (14 min walk) adds Bakerloo and Overground for redundancy.",
    sources: [
      { url: "https://tfl.gov.uk/maps/track/tube", label: "TfL Tube map", type: "tfl", accessed_date: "2026-04-11" }
    ]
  },

  demographics: {
    primary_age_cohort: "18-29",
    age_breakdown: [
      { cohort: "18-29", pct: 41 },
      { cohort: "30-39", pct: 22 },
      { cohort: "40-49", pct: 14 },
      { cohort: "50+", pct: 23 }
    ],
    ethnic_composition: [
      { group: "South Asian", pct: 38 },
      { group: "White", pct: 31 },
      { group: "Black", pct: 13 },
      { group: "Mixed", pct: 9 },
      { group: "Other Asian", pct: 9 }
    ],
    household_mix: [
      { type: "Single occupant", pct: 28 },
      { type: "Couple no kids", pct: 22 },
      { type: "Couple with kids", pct: 26 },
      { type: "Multi-adult sharers", pct: 19 },
      { type: "Other", pct: 5 }
    ],
    student_pct: 8,
    professional_renter_pct: 47,
    notes: "Wembley Park ward grew roughly 7x in population between 2011 and 2021 because of the Quintain delivery — the Census data may understate how much the area has continued to skew younger and more professional since 2021. The visible street demographic in 2026 is dominated by 20s and early-30s renters.",
    sources: [
      { url: "https://www.citypopulation.de/en/uk/london/brent/E05013581__wembley_park/", label: "Wembley Park ward Census 2021", type: "ons", accessed_date: "2026-04-11" }
    ]
  },

  safety: {
    overall: "safe",
    crime_vs_borough: "below",
    crime_vs_croydon: "much-safer",
    after_dark_assessment: "Quiet and well-lit on non-event days. On event days the area is crowded but professionally stewarded. The masterplan's wide pavements, modern street lighting, and high pedestrian footfall make after-dark walking feel comfortable.",
    concerns: [],
    sources: [
      { url: "https://www.met.police.uk/sd/stats-and-data/met/crime-data-dashboard/", label: "Met Police crime data dashboard, Brent borough", type: "met-police", accessed_date: "2026-04-11" }
    ]
  },

  green_and_water: {
    has_river: false,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Union Park", size_acres: 7, walk_minutes: 5, notes: "Designed park at the heart of the Quintain estate, central social space for residents" },
      { name: "King Edward VII Park", size_acres: 25, walk_minutes: 18, notes: "Larger municipal park to the south-west, traditional layout" }
    ],
    overall_assessment: "Union Park is the everyday green-space win — small but well-designed, central, and central to the resident events programme. Wembley Park is not a riverside or waterside area; for that, look elsewhere in the dataset."
  },

  amenities: {
    grocery: [
      { name: "M&S Food Hall", type: "Premium supermarket", walk_minutes: 4, notes: "Inside London Designer Outlet" },
      { name: "Sainsbury's", type: "Large supermarket", walk_minutes: 6, notes: "" },
      { name: "Lidl", type: "Discount supermarket", walk_minutes: 11, notes: "" }
    ],
    gyms: [
      { name: "Nuffield Health Wembley", type: "Premium chain", walk_minutes: 8, notes: "Pool, classes, full strength equipment" },
      { name: "PureGym Wembley", type: "Budget chain", walk_minutes: 5, notes: "24-hour, full free weights area, busy at peak" },
      { name: "F45 Wembley", type: "Boutique HIIT", walk_minutes: 6, notes: "" }
    ],
    food_and_drink: [
      { name: "Boxpark Wembley", type: "Food hall + bar", walk_minutes: 3, notes: "Multi-vendor, event-night focus" },
      { name: "Various Designer Outlet restaurants", type: "Chain dining", walk_minutes: 4, notes: "Nando's, Wagamama, Pizza Express, etc." }
    ],
    health: [
      { name: "Wembley Park Drive Surgery", type: "GP", walk_minutes: 7, notes: "" },
      { name: "Boots Pharmacy", type: "Pharmacy", walk_minutes: 4, notes: "Inside Designer Outlet" }
    ],
    cultural: [
      { name: "Cineworld Wembley", type: "Cinema (9 screens)", walk_minutes: 4, notes: "" },
      { name: "Troubadour Wembley Park Theatre", type: "Theatre", walk_minutes: 6, notes: "" },
      { name: "Brent Library at Wembley", type: "Library", walk_minutes: 12, notes: "" }
    ],
    notes: "Wembley Park scores extremely well on walkable amenities because the masterplan was explicitly built around the 15-minute neighbourhood concept. Gym density is strong with Nuffield, PureGym, and F45 all within 8 minutes."
  },

  regeneration: {
    status: "phased",
    investment_pipeline: "Quintain's masterplan is two-thirds delivered, with the remaining ~3,000 homes and several public realm phases scheduled through 2027. The estate is actively being built out, not finished.",
    recent_milestones: [
      "Luna by Quintain Living delivered 2024",
      "Union Park public realm phase completed 2023",
      "Sunday Times Best Place to Live in London award 2025"
    ],
    upcoming_milestones: [
      "Final masterplan phase target 2027",
      "Total homes target 8,500 at completion"
    ],
    trajectory_through_2027: "Wembley Park is on a clear ascending trajectory through the visa transition window. The masterplan completes in 2027, which is the same year as Caner's visa transition — the area will be at peak coordination just as he is making the next renewal/employment decision. This is one of the strongest 2027-trajectory areas in the dataset.",
    sources: [
      { url: "https://wembleypark.com/about/", label: "Wembley Park official site, masterplan section", type: "developer", accessed_date: "2026-04-11" }
    ]
  },

  // ── RUBRIC EVALUATION ──
  evaluation: {
    t1_foundational: {
      criteria: [
        { id: "1.1", name: "Demonstrably safer than Croydon", status: "pass", reasoning: "Met Police data shows Brent below borough average; visibly well-stewarded; no after-dark concerns documented", sources: [/* ... */] },
        { id: "1.2", name: "Modern rental stock present", status: "pass", reasoning: "Quintain's BTR campus is the most extensively modern rental stock in the dataset; eight purpose-built buildings", sources: [] },
        { id: "1.3", name: "Strong connectivity to central London", status: "pass", reasoning: "Jubilee + Metropolitan via Wembley Park; Bakerloo + Overground via Wembley Central; ≤30 min to all four anchor hubs except Canary Wharf at 32", sources: [] },
        { id: "1.4", name: "Active professional rental market", status: "pass", reasoning: "Quintain Living is the canonical example of central referencing — single operator across all eight buildings, mature corporate process", sources: [] },
        { id: "1.5", name: "Public realm in good order", status: "pass", reasoning: "Recently built, actively maintained, masterplan continues to invest", sources: [] },
        { id: "1.6", name: "Not actively in decline", status: "pass", reasoning: "Trajectory is sharply ascending through 2027 masterplan completion", sources: [] }
      ],
      tier_score: "strong",
      tier_summary: "Wembley Park passes T1 cleanly on all six criteria. There is no foundational viability question; this area meets the floor without qualification."
    },
    t2_daily_life: {
      criteria: [
        { id: "2.1", name: "Walkable daily essentials", status: "pass", reasoning: "15-min neighbourhood model is real here; supermarket, gym, pharmacy, GP, cinema all under 10 min", sources: [] },
        { id: "2.2", name: "Quality grocery and fresh food", status: "pass", reasoning: "M&S Food Hall + Sainsbury's within 6 min; food hall (Boxpark) on doorstep", sources: [] },
        { id: "2.3", name: "Real gym access", status: "pass", reasoning: "Nuffield + PureGym within 8 min — premium and budget options both available with full strength equipment", sources: [] },
        { id: "2.4", name: "Green space, water, or open element", status: "partial", reasoning: "Union Park is well-designed but small (7 acres); no river, canal, or dock", sources: [] },
        { id: "2.5", name: "Quiet at night for residents", status: "partial", reasoning: "Quiet on non-event days; loud and crowded on stadium event days (40+ days per year). Residents need to be aware of fixture calendar.", sources: [] },
        { id: "2.7", name: "Younger demographic skew", status: "pass", reasoning: "Census 2021 shows 41% in 18-29 cohort, well above London average; visible street demographic confirms", sources: [] }
      ],
      tier_score: "strong",
      tier_summary: "T2 is one of Wembley Park's strongest tiers. The 15-minute neighbourhood is genuine, gym access is excellent, demographic skew is strongly young. The two partial scores (small green space, event-day noise) are real but manageable quirks."
    },
    t3_identity: {
      // ... same shape ...
      criteria: [],
      tier_score: "good",
      tier_summary: "T3 is where Wembley Park is functionally strong but architecturally and culturally thinner than King's Cross. The masterplan delivers identity through scale and coordination rather than through distinguished architecture. Stadium and Boxpark provide the cultural anchor; the buildings themselves are functional rather than signature."
    },
    t5_personal: {
      criteria: [],
      tier_score: "good",
      tier_summary: "Multi-cluster commute is decent (3 of 4 anchors ≤25 min), redundancy is strong (4 lines via two stations), trajectory is among the strongest in the dataset, but quiet third-space culture (bookshops, libraries, cafés for reading) is thinner than central London areas."
    },
    overall_grade: "A",
    grade_reasoning: "Wembley Park earns an A grade on the strength of foundational viability (T1: 6/6), excellent daily life quality (T2: 4 pass + 2 partial), and a strong 2027 trajectory. The B/A boundary call is between Wembley Park and a hypothetical area that scored as well on T3 architectural identity — the absence of distinctive cultural depth keeps it from S tier."
  },

  // ── PROJECTS ──
  projects: [
    // {/* eight Project entries: Luna, Ferrum, Madison, Canada Gardens, Landsby, Alameda, Beton, Alto */}
  ],

  // ── EXTERNAL LINKS ──
  external_links: [
    { url: "https://wembleypark.com/", label: "Wembley Park official site", type: "developer", accessed_date: "2026-04-11" },
    { url: "https://www.quintainliving.com/", label: "Quintain Living official site", type: "operator", accessed_date: "2026-04-11" },
    { url: "https://en.wikipedia.org/wiki/Wembley_Park", label: "Wikipedia", type: "wikipedia", accessed_date: "2026-04-11" },
    { url: "https://www.thetimes.co.uk/article/best-places-to-live-london-sunday-times-2025", label: "Sunday Times Best Place to Live London 2025", type: "press", accessed_date: "2026-04-11" }
  ],

  // ── PERSONAL NOTES (hand-authored by Caner) ──
  personal_notes: "",

  // ── RESEARCH METADATA ──
  research: {
    primary_agent: "migrated-from-original-19",
    research_date: "2026-03-11",
    last_verified: "2026-04-11",
    confidence: "high",
    open_questions: [
      "Verify current Quintain Living referencing flexibility for graduate-visa renters with no UK credit history — agent 09 (rental qualification realism) to investigate per project"
    ]
  }
};

export default wembleyPark;
```

This example is intentionally complete (with most fields populated to show shape) but truncated where the structure repeats (e.g. the `projects[]` array would have eight `Project` entries with the same density).

---

## Migration notes — from the old `Establishment` to the new `Area` + `Project[]`

When Phase B5 runs, every existing `Establishment` in the current 19 entries gets transformed into either an `Area` or a `Project` (or, in some cases, a combination). The mapping rules:

| Current entry | Becomes | Notes |
|---|---|---|
| **Wembley Park** | `Area` "wembley-park" with 8 nested `Project` entries (Luna, Ferrum, Madison, Canada Gardens, Landsby, Alameda, Beton, Alto) | Cleanest one-to-one migration in the dataset |
| **Greenwich Peninsula** | `Area` "greenwich-peninsula" with 1 `Project` (the masterplan) | Area with single project — schema supports this without special-casing |
| **Stratford / East Bank** | `Area` "stratford" with `Project` entries for East Bank, East Village, Stratford Quarter, etc. | |
| **Battersea Power Station** | `Area` "battersea-power-station" with `Project` entries (Switch House, Boiler House, Frank Gehry blocks, etc.) | **Default decision: own area, NOT folded into Nine Elms.** BPS is too distinct to bury inside Nine Elms — own retail destination, own landmark identity, own operator (BPS Lettings), own demographic profile. The proximity to Nine Elms is real but the identity is separate. |
| **Battersea Switch House** | `Project` under `battersea-power-station` | Was a separate entry in the old dataset; now correctly nested. |
| **King's Cross** + **King's Cross Ownership** | Single `Area` "kings-cross" with `Project` entries (Plimsoll Building, Capella, Gasholders, Coal Drops Yard residential, etc.) | The two old entries collapse into one. The "ownership" entry was a duplicate framing that loses meaning under the unified schema where every project has its own tenure field. |
| **White City** | `Area` "white-city" with `Project` entries | |
| **Canary Wharf / Wood Wharf** | `Area` "canary-wharf" (or potentially split into "canary-wharf-financial-core" and "wood-wharf" — see below) with `Project` entries (8 Water Street, 10 Park Drive, 3 & 10 George Street, One Park Drive, Newfoundland, South Quay Plaza) | **Default: single area "canary-wharf" containing both the financial core and Wood Wharf.** They share the connectivity story (Elizabeth + Jubilee + DLR) and the operator landscape (Vertus + Ballymore). The Wood Wharf vs financial core distinction can be captured in the `long_form` rather than as a separate area. |
| **Elephant Park** | `Area` "elephant-park" with `Project` entries | |
| **Royal Wharf** | `Area` "royal-wharf" (or "royal-docks" if expanded) with `Project` entries | **Default: own area "royal-wharf-and-docks".** Includes potential future projects in the wider Royal Docks regeneration. |
| **Kidbrooke Village** | `Area` "kidbrooke-village" with 1 `Project` (the masterplan itself) | Same pattern as Greenwich Peninsula. |
| **Oval Village** | `Area` "oval-village" or merged into a broader "oval-kennington" area | **Default: own area "oval-village".** The Berkeley project is distinct enough to warrant its own area entry. |
| **Brent Cross Town** | `Area` "brent-cross-town" with `Project` entries | |
| **Canada Water** | `Area` "canada-water" with `Project` entries (King's Quarter, Founders, etc.) | |
| **Embassy Gardens** | `Project` under `nine-elms` | No longer a top-level entry. |
| **Bloom Nine Elms** | `Project` under `nine-elms` | |
| **Riverlight Quay** | `Project` under `nine-elms` | |
| **One Nine Elms** | `Project` under `nine-elms` | |
| **(no current Nine Elms entry)** | New `Area` "nine-elms" gets created as the parent for all the Nine Elms projects | The biggest restructure — five existing projects collapse into one area entry. |

Net effect: **19 flat entries → ~13 areas with ~30+ nested projects**. The dataset shrinks at the area level but expands at the project level, which is the right shape change.

### Fields that have no equivalent in the old data

These fields will be `null` / `unknown` / `""` after the Phase B5 migration and only get populated by the Phase F sweep (or earlier by hand for high-priority entries):

- `Area.long_form.history`, `weekday`, `weekend`, `croydon_comparison` — old `desc` was a single paragraph, no structured sub-fields
- `Area.demographics.age_breakdown`, `ethnic_composition`, `household_mix`, `student_pct`, `professional_renter_pct` — old data only had a single age tag and a single demo tag
- `Area.safety.*` — completely missing from old data
- `Area.amenities.*` — completely missing from old data (no walkable amenity inventories)
- `Area.regeneration.*` — completely missing from old data
- `Area.evaluation.*` — old data had no tier evaluation
- `Project.rental.qualification.*` — completely missing; the rental-qualification problem is the core gap the new schema fixes
- `Project.building_quality.*`, `amenities.*`, `architecture.*` — old `EstablishmentProject` only had `name` + `note`
- `Project.resident_signal.*` — completely missing
- `Project.evaluation.*` — old data had no per-project evaluation
- All `sources: SourceLink[]` arrays — old data was uncited prose
- All `research: ResearchMeta` fields — partially recoverable from `docs/research/<slug>.md` for the original 18 + white city, but the structured form is new

This is the deliberate gap that Phase F (the sweep) exists to close. The migration in Phase B5 shapes the data correctly; the sweep fills it in.

### Migration validation checklist

When Phase B5 completes, every migrated `Area` should pass this checklist:

1. Every required field has *some* value (even if `""` or `[]` or `"unknown"`)
2. No field references the old `Establishment` shape
3. Every `Project.area_id` matches its parent `Area.id`
4. Every `Area.projects[]` contains only `Project` entries with the matching `area_id`
5. No duplicate area IDs, no duplicate project IDs within an area
6. The validation script from B7 reports zero errors

---

## How to extend the schema in the future

Adding fields:

1. **Add the field to the relevant interface in this document first.** Document its purpose, type, defaults, and provenance rules.
2. **Add the field to `src/areas/types.ts`** to match.
3. **Make the field optional initially** (`field?: T`) so existing data doesn't immediately become invalid.
4. **Backfill the field** for existing entries either by hand (for small additions) or via a one-shot script (for additions that need agent-generated content).
5. **Once backfilled, mark the field as required** in the schema and the type.

Adding a new area or project:

1. Create a new file in `src/areas/data/` (or `src/areas/data/areas/` if a subfolder is used) with the area/project as the default export.
2. Add the import to `src/areas/data/index.ts`.
3. Run the validation script.

Adding a new tier or criterion to the rubric:

1. **Update `context/notes/search-rubric.md` first.** That's the rubric source of truth.
2. **Update `Area.evaluation` (or `Project.evaluation`) in this document and in `types.ts`** to add the new criterion.
3. **Decide whether to backfill** historical entries or treat the new criterion as forward-only.
4. **Update the agent brief template** in `context/agent-briefs/template.md` to instruct the sweep agents to evaluate the new criterion.

---

## Validation rules (the quality bar)

When data is being authored (by hand or by agents), these rules must hold or the entry is incomplete:

1. **Every fact has a source.** No `pass`/`fail` evaluation, no demographic claim, no safety assessment, no connectivity time exists without a `SourceLink` entry.
2. **Unknown is honest.** Agents must use `status: "unknown"` rather than guessing. The schema's tolerance for unknowns is what makes parallel agent work mergeable.
3. **Hard rules from the rubric apply.** Demographic and age tags need ONS / Census 2021 backing. Zone tags need TfL backing. Tenure and price need live listings or operator documentation.
4. **Sources are accessible URLs**, not "personal communication" or "internal knowledge".
5. **Confidence is per-area, not per-fact.** An area is high/medium/low confidence based on the overall research quality.
6. **Open questions are surfaced**, not buried. If a fact couldn't be resolved, write it into `research.open_questions[]` so the next reviewer can pick it up.

---

## Where this schema fits

```
context/
├── notes/
│   ├── search-rubric.md           ← what to measure (locked, drives this schema's evaluation fields)
│   ├── relocation-constraints.md  ← why rental qualification is its own structured section
│   └── user-profile.md            ← why some fields are weighted more heavily for Caner
│
├── plans/
│   └── website-refactor.md        ← the plan that produces this schema and what implements it
│
└── references/
    ├── data-schema.md             ← THIS FILE (the contract)
    ├── candidate-areas.md         ← Phase A2 deliverable
    └── merge-protocol.md          ← Phase E4 deliverable (consensus synthesis procedure)
```

The rubric is *what to measure*. This schema is *where to put the answers*. The plan is *how to get there*. The candidate list is *what universe to apply this to*. The merge protocol is *how to consolidate 15 agents writing in parallel via consensus voting*. Together they form a complete, executable contract for the upcoming sweep. See `context/notes/consensus-synthesis-model.md` for why the 15-agent consensus model replaced the original field-level ownership model.
