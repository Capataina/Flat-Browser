# Area Research Schema — field reference

The target shape for every area-level field V4 of this skill populates. Source of truth is `src/areas/types.ts` — if this document ever disagrees with types.ts, types.ts wins.

Area research is structurally different from operator research. Sources are public-sector datasets (ONS, TfL, Met Police, GLA, Ordnance Survey) rather than operator websites. One agent researches ~5 areas — the reuse advantage of the operator model doesn't apply, but the canonical source list per field is short.

---

## Block 1 — `long_form`

Seven string fields of narrative prose. Composed from the structured research below plus press/council sources.

### `full`

Free-form string, 4-8 paragraphs. The comprehensive area description. Think: a reader who has never been to London needs to understand this area's character, transport, regeneration state, and who lives there after reading this.

### `history`

Free-form string, 2-4 paragraphs. The area's history and how it got to its current state. Emphasises post-1980 transition — docklands regeneration, Olympic legacy, council estate rebuilds, Crossrail effects, etc.

Sources: Wikipedia (for backbone), council heritage pages, historic-society sites, press archives.

### `vibe`

Free-form string, 1-3 paragraphs. The qualitative feel of the area — who's on the streets, what the pace is like, what kind of places anchor daily life. Distinct from `full` (factual) and `history` (chronological); `vibe` is experiential.

Sources: Reddit r/London, local journalism (Evening Standard, Time Out, local outlets), Google Street View for sanity-check.

### `weekday`

Free-form string, 1-2 paragraphs. What the area is like Monday-Friday daytime. Covers: commuter flow, café culture, daytime economy, noise/quiet, transit rush.

### `weekend`

Free-form string, 1-2 paragraphs. What the area is like Saturday-Sunday. Covers: nightlife presence, weekend crowds, parks usage, brunch culture, Sunday roast pub density.

### `notable`

Free-form string, 1-2 paragraphs. Specific landmarks, institutions, or features that define the area. Should mention 3-5 concrete items.

### `croydon_comparison`

**Mandatory upgrade-comparison field.** Free-form string, 1-2 paragraphs. Explicitly describes how this area differs from Ten Degrees Croydon — the baseline Caner is moving from.

Covers (minimum):
- Night safety comparison
- Café density for working-from
- Gym options
- Transport differential (Zone, connectivity to central)
- Price differential

Example for Wembley Park:
> Meaningfully safer at night than East Croydon — well-lit pedestrianised core, steady foot traffic until ~22:00 from the OVO Arena and Boxpark, visible security presence on Olympic Way. Café density lower than Croydon's peak coverage but cleaner tier mix (actual Caffè Nero + Gail's vs Croydon's predominantly chicken-shop / betting-shop ground floor retail). Zone 4 vs Croydon's Zone 5 — 12 minutes to Baker Street on Jubilee vs ~35 minutes to Central via East Croydon Overground/Southern. Price parity: ~£1,550-1,700 all-in for a Quintain studio vs ~£2,280 contractual (~£3,000 effective) at Ten Degrees.

This field is load-bearing. It's what the user reads before deciding whether to add an area to the shortlist.

### `provenance` (optional)

Consensus attribution if written by a multi-agent synthesis step. V4 agents are single-author per area, so provenance may be omitted or minimal.

---

## Block 2 — `connectivity`

Transport connectivity data. Structured fields plus notes.

### `lines`

Array of `TransportLine`:
```ts
{ name: string; type: "tube" | "elizabeth" | "overground" | "dlr" | "rail" | "tram" }
```

List every line with a station in the area's `primary_stations` list.

### `primary_stations`

Array of `Station`:
```ts
{
  name: string;
  lines: string[];            // line names the station is on
  walk_minutes_from_centre: number;  // walking minutes from the area's natural centre
}
```

List every station within 15-min walk of the area's natural centre. If the area has only one station, list that. If many (e.g. King's Cross has KX St Pancras, King's Cross, Euston nearby), list top 3-5.

### `times_to_anchors`

`AnchorTimes` object:
```ts
{
  city_of_london: number;       // to Bank station (or Cannon Street) in minutes
  canary_wharf: number;         // to Canary Wharf station in minutes
  soho_fitzrovia: number;       // to Tottenham Court Road or Oxford Circus in minutes
  kings_cross_shoreditch: number;  // to King's Cross or Old Street in minutes
}
```

Use TfL JourneyPlanner with typical-weekday-09:00 departure time. Take the fastest recommended journey including walking to origin station.

Source URL: `https://tfl.gov.uk/plan-a-journey/` — capture the specific journey URL if possible.

### `multi_cluster_score`

Derived integer 0-5. How many of the four anchors are reachable in ≤25 minutes:

```
times_to_anchors filter (≤ 25) → count
```

So if `{city: 18, canary: 22, soho: 15, kx: 30}` → 3 (city + canary + soho pass, kx fails).

### `redundancy_score`

Derived integer 0-5. Line independence — how well the area is protected against single-line failure.

Heuristic:
- 5: 3+ independent lines + rail alternative (e.g. King's Cross)
- 4: 2 tube lines + rail / overground
- 3: 1 tube + 1 overground OR 2 tube lines
- 2: 1 tube line only, or 1 overground + 1 rail
- 1: 1 line of any type
- 0: no rail-based transit

### `notes`

Free-form string, 1-3 sentences. Anything non-obvious about the area's connectivity — overnight tube availability, weekend closures pattern, terminus-vs-through-station status, crowding at peak.

### `sources`

Array of `SourceLink`. At minimum: TfL journey-planner URL for each anchor calculation + the station page URL for each primary station.

---

## Block 3 — `demographics`

Census 2021 + GLA data.

### `primary_age_cohort`

Enum: `"18-29" | "30-39" | "40-49" | "50+"`. The largest single age cohort in the area. Derive from `age_breakdown`.

### `age_breakdown`

Array of `AgeBreakdownEntry`:
```ts
{ cohort: "18-29" | "30-39" | "40-49" | "50+"; pct: number }
```

Must sum to ~100 (within rounding). Source: ONS Census 2021 at Lower Super Output Area (LSOA) level, aggregated to the area's approximate footprint.

### `ethnic_composition`

Array of `EthnicEntry`:
```ts
{ group: string; pct: number }
```

Use Census 2021 high-level categories: "White — British", "White — other", "Asian or Asian British", "Black or Black British", "Mixed", "Other ethnic group". Entries should sum to ~100.

### `household_mix`

Array of `HouseholdEntry`:
```ts
{ type: string; pct: number }
```

Categories: "Single person", "Couple no children", "Couple with children", "Lone parent", "Shared household", "Other".

### `student_pct`

Number 0-100. Percentage of residents who are full-time students. Census 2021 question.

### `professional_renter_pct`

Number 0-100. Estimated percentage of working-age residents who are renters in professional/managerial employment. Derive from cross-tabulating Census rental tenure + occupation data.

### `notes`

Free-form string. Anything non-obvious — rapid demographic change, distinctive mix, visible diaspora concentrations.

### `sources`

ONS Census 2021 URL at minimum. GLA demographic profile where available.

---

## Block 4 — `safety`

Crime data + qualitative assessment.

### `overall`

Enum: `"very-safe" | "safe" | "moderate" | "concerning"`.

### `crime_vs_borough`

Enum: `"below" | "average" | "above"`. How this area's crime rate compares to its parent borough average.

### `crime_vs_croydon`

Enum: `"much-safer" | "safer" | "similar" | "worse"`. Baseline comparison against Ten Degrees / East Croydon specifically. This is the comparison the user actually cares about.

### `after_dark_assessment`

Free-form string, 2-4 sentences. Specific to walking the area after 22:00. Covers: street lighting, pedestrian density, visible policing, known trouble spots, women-walking-alone assessment.

This is the single highest-weight safety field. It's the specific concern driving the move.

### `concerns`

Array of strings. Specific concerns tied to named streets, stations, or timings.

Example:
- `"East Croydon station forecourt after 22:00 — aggressive begging and occasional fights"`
- `"North End cut-throughs to West Croydon — gang-tagged, low lighting"`

For areas with no specific concerns: empty array, not a placeholder string.

### `sources`

Met Police crime-map URL, borough Safer Neighbourhood dashboard, local press coverage.

---

## Block 5 — `green_and_water`

Parks, rivers, canals, docks.

### `has_river`

`boolean`. Does the area border or contain a river (Thames, Wandle, Lea)?

### `has_canal`

`boolean`. Does the area border or contain a canal (Regent's, Grand Union, Limehouse Cut)?

### `has_dock`

`boolean`. Does the area border or contain a dock (West India, Royal Albert, Greenland)?

### `parks`

Array of `ParkEntry`:
```ts
{
  name: string;
  size_acres?: number;
  walk_minutes: number;  // from area's natural centre
  notes: string;         // 1-sentence character summary
}
```

List every park of ≥2 acres within 10-min walk, plus the nearest major park if further.

### `overall_assessment`

Free-form string, 1-2 paragraphs. How green / watery the area feels to live in — not just the count of parks but the lived experience of green space.

### `sources`

Ordnance Survey, council park registers, The Parks Trust, Wikipedia park articles.

---

## Block 6 — Area `amenities`

Grocery, gyms, food, health, culture. Distinct from project-level `amenities` (which describes the building's onsite facilities).

### `grocery`

Array of `AmenityEntry`:
```ts
{ name: string; type: string; walk_minutes: number; notes: string }
```

Supermarkets and quality grocers within 10-min walk. Name specific brands (M&S Food, Waitrose, Tesco Express, Aldi) — Caner's shortlist decision includes "can I buy good food nearby".

### `gyms`

Array of `AmenityEntry`. Commercial gym options. **Critical field per rubric T2.3** — this is one of the highest-weight T2 rows for Caner.

Should cover:
- Third Space / Equinox presence (the aspirational tier)
- PureGym / Anytime / The Gym Group (budget tier)
- Crossfit / boxing / BJJ / Muay Thai gyms (Caner-specific interest)
- Boutique studios (Barry's, 1Rebel, etc.)

### `food_and_drink`

Array of `AmenityEntry`. Restaurant + café + pub density. Name 3-5 anchors, not exhaustive list.

### `health`

Array of `AmenityEntry`. GP surgeries, NHS walk-in centres, pharmacies. Register-ability for a new resident matters.

### `cultural`

Array of `AmenityEntry`. Cinemas, music venues, galleries, libraries, theatres, community centres.

### `notes`

Free-form string. Anything non-obvious about the area's amenity texture.

### `sources`

Google Maps, council business directories, cultural venue websites.

---

## Block 7 — `regeneration`

Regeneration status and trajectory.

### `status`

Enum: `"complete" | "active" | "phased" | "early"`.

| Value | When |
|---|---|
| `"complete"` | Major regeneration finished; area is in steady-state |
| `"active"` | Regeneration underway, visible construction |
| `"phased"` | Long-term masterplan with multiple phases, some delivered some not |
| `"early"` | Masterplan granted, delivery not yet started or in first phase |

### `investment_pipeline`

Free-form string, 1-2 paragraphs. Scale of committed investment in £ billions where known. Named schemes (e.g. "Earl's Court Masterplan", "Canada Water Masterplan"). Key milestones.

### `recent_milestones`

Array of strings. What's delivered in the last 24 months. Each entry: "Year — Milestone name".

Example:
- `"2024 — Bakerloo Line extension confirmed for Old Kent Road corridor"`
- `"2025 — Phase 2 residential (1,200 units) opened"`

### `upcoming_milestones`

Array of strings. What's scheduled in the next 24-36 months.

### `trajectory_through_2027`

Free-form string, 1-2 paragraphs. Where this area is likely to be in August 2027 — Caner's visa transition window. Matters because a move into an actively-improving area can be a 2-year investment of comfort, not just a 6-month bridge.

### `sources`

GLA planning portal, council masterplan pages, developer sites for named schemes, press coverage.

---

## Block 8 — `evaluation` (recap — V3 owns this, not V4)

V4 populates the structural fields above. V3's grade recalibration pass synthesises them into `AreaEvaluation`:

```ts
{
  t1_foundational: TierEvaluation;
  t2_daily_life: TierEvaluation;
  t3_identity: TierEvaluation;
  t5_personal: TierEvaluation;
  overall_grade: Grade;
  grade_reasoning: string;
}
```

See `grade-recalibration.md` for how TierEvaluation is composed from the above field data.

---

## Block 9 — Meta fields

### `id`, `name`, `aliases`, `borough`, `postcodes`

Identity fields. Rarely change. V4 sanity-check only: confirm postcodes still match the area footprint.

### `headline`, `preview`, `hero_image_url`

Already populated in most areas. V4 refreshes if `long_form.full` is rewritten — the headline should match the refreshed prose.

### `zones`

Array of `TfLZone`. Static. Confirm during research only if a new station opened (Elizabeth Line shifts, etc.).

### `external_links`

Array of `SourceLink`. Operator portfolios, council pages, regeneration sites. Update additively — new sources appended, dead URLs flagged for V4's URL-rot check.

### `personal_notes`

Hand-authored by Caner. **Never touched by the skill.**

### `research` (ResearchMeta)

Update `research.last_verified` to today's date when V4 completes an area's pass.

---

## What NOT to touch in V4

- Project-level fields — those are V1/V2.
- Project-level evaluations — V3.
- `personal_notes` — user-authored.
- `research.primary_agent` once set — preserve first authorship.

---

## Budget guidance

Per area: ~30-60k tokens depending on research depth needed.

Heavy fields (token-wise):
- `demographics` — ONS Census digging costs time
- `regeneration` — GLA + council planning reads
- `long_form.full` — composition cost, not search cost

Cheap fields:
- `zones` (often already set)
- `green_and_water` (single OS lookup)
- `safety` (single Met Police map view)

Per batch of 5 areas: ~200-300k tokens. Across all 55 areas: ~2.5M tokens. Similar order of magnitude to the V1 full run.
