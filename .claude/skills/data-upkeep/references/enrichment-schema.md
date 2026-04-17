# Enrichment Schema — field reference

The target shape for every project-level field V2 of this skill populates, on top of what V1 (qualification + pricing) covers. Source of truth is `src/areas/types.ts` — if this document ever disagrees with types.ts, types.ts wins.

These are the fields the agent is already gathering context for while researching an operator for qualification. The marginal token cost of capturing them in the proposal is near-zero; they were deferred from V1 only because the skill's scope had to ship narrowly first.

---

## Block 1 — `building_quality`

Seven fields capturing the physical quality of the individual building. Most sources are the operator's page + HomeViews review signal. Fallback is the EPC register for efficiency-specific claims.

### `epc_rating`

Optional string. Energy Performance Certificate band — `"A"` through `"G"`, optionally with numeric SAP score (e.g. `"B (85)"`).

| Source | Where |
|---|---|
| **GOV.UK EPC Register** | https://find-energy-certificate.service.gov.uk/ — search by full building address |
| Operator page | Occasionally published under "Sustainability" / "Building credentials" |
| Developer page | Newer buildings list EPC alongside BREEAM rating |

Leave as `undefined` / omitted if not found. Do not invent a rating from other sustainability signals.

### `sound_insulation`

Enum (`Quality`): `"excellent" | "good" | "average" | "poor" | "unknown"`.

| Value | When |
|---|---|
| `"excellent"` | New-build (post-2020) + Part E compliant + HomeViews reviews explicitly praise quiet |
| `"good"` | New-build, no complaints in reviews |
| `"average"` | Some noise complaints in reviews but not dominant |
| `"poor"` | Dominant noise complaints (hearing neighbours, street noise, thin walls) in ≥3 reviews |
| `"unknown"` | Not researched / no review signal |

**How to gather:** HomeViews reviews under "cons" / "things to improve" often mention noise. Trustpilot reviews occasionally. Structural: buildings built to Part E 2015+ default to `"good"` absent negative signal.

### `thermal_performance`

Enum (`Quality`): same scale.

| Value | When |
|---|---|
| `"excellent"` | EPC A/B + reviews praise warmth / energy bills |
| `"good"` | EPC B/C + no complaints |
| `"average"` | EPC C/D + mixed review signal |
| `"poor"` | Reviews mention cold flats / high heating bills / condensation issues |
| `"unknown"` | No EPC + no review signal |

EPC rating is the strongest single signal. Reviews disambiguate when EPC is borderline.

### `layout_notes`

Free-form string. 1-3 sentences describing the typical unit layout. Covers open-plan vs separated, natural light, ceiling height, storage, balcony/terrace presence.

**How to gather:** Operator's floor-plan gallery + HomeViews "space and layout" review category.

Example:
> Open-plan studio layout with full-height windows; private balcony on most units. Separate shower room with bath. Integrated storage wardrobes in bedroom area. Kitchenette along one wall rather than a fully separated kitchen.

### `kitchen_quality`

Enum (`Quality`). Caner cooks regularly — this field is load-bearing for livability.

| Value | When |
|---|---|
| `"excellent"` | Full kitchen, quality appliances named (Bosch / Miele / Smeg), induction hob, dishwasher, ample counter space |
| `"good"` | Full kitchen with standard appliances, dishwasher present |
| `"average"` | Kitchenette with basic appliances, no dishwasher, limited counter space |
| `"poor"` | Combi microwave only, no hob, minimal prep space (most apart-hotels in this tier) |
| `"unknown"` | Not described |

**Key signal — kitchenette vs kitchen:** apart-hotels and some co-living tiers (e.g. ARK Canary Wharf) advertise "kitchenette" = combi microwave. That is `"poor"` for a regular cook, not `"average"`. Be explicit in `layout_notes`.

### `heating_type`

Enum: `"gas" | "electric" | "communal" | "heat-pump" | "mixed" | "unknown"`.

| Value | When |
|---|---|
| `"gas"` | Gas boiler per unit |
| `"electric"` | Electric heating (panels, underfloor, storage heaters) |
| `"communal"` | District heating system — most new BTR (Vital Energi, SSE Energy Solutions suppliers common) |
| `"heat-pump"` | Air-source or ground-source heat pump |
| `"mixed"` | Combination (e.g. heat pump + electric backup) |
| `"unknown"` | Not stated |

**Inference shortcut:** most post-2015 London BTR buildings use communal heating. If operator doesn't specify and the building is new-build BTR, `"communal"` is a reasonable default with source `type: "press"` from general BTR coverage.

### `notes`

1-2 sentence narrative summary combining the above. Should mention anything non-obvious (e.g. "Communal heating means no control over the thermostat — HomeViews reviews flag this as a cooling-season issue").

---

## Block 2 — `amenities`

Fourteen fields capturing the building's amenity package. These are mostly boolean + enum, with some free-form. Sources are overwhelmingly the operator's "Amenities" / "Lifestyle" / "Facilities" page.

### `pool`

`boolean`. Is there an on-site swimming pool?

### `pool_notes`

Free-form string. Details when `pool: true`. Typical content: "25m four-lane pool on Level 3, unheated, residents-only, 6am-10pm". Empty string when `pool: false`.

### `gym`

`boolean`. On-site resident gym.

### `gym_quality`

Enum (`Quality`). Distinct from area-level gym access — the resident gym can exist but be inadequate.

| Value | When |
|---|---|
| `"excellent"` | Third-space-tier: squat racks, cable machines, cardio variety, boxing/martial arts space |
| `"good"` | Full equipment: free weights + machines + cardio, >150 sqm |
| `"average"` | Basic equipment: some free weights + cardio, <150 sqm |
| `"poor"` | Token gym: 1-2 cardio machines + dumbbells, cupboard-sized |
| `"unknown"` | Gym present but quality not described / not pictured |

**How to gather:** Operator photo gallery. HomeViews "gym" review category. Press coverage of the building sometimes describes the amenity mix.

**Caner-specific weight:** he does strength training and boxing. `"poor"` gym quality is functionally equivalent to no gym (he'll use a commercial gym anyway). `"excellent"` is worth a real premium.

### `concierge`

Enum: `"24h" | "daytime" | "none"`.

### `sky_lounge`

`boolean`. Rooftop-level communal lounge (not just a terrace). Typical content: residents' club room, entertainment space, views.

### `co_working`

`boolean`. Dedicated co-working / business-lounge space. Private booths + open seating qualify.

### `dining_room`

`boolean`. Private dining room bookable by residents.

### `cinema_room`

`boolean`. Private screening room.

### `rooftop_terrace`

`boolean`. Accessible rooftop outdoor space (distinct from sky_lounge which is indoor).

### `parking`

`boolean`. On-site car parking available to residents (paid or included).

### `bike_storage`

`boolean`. Dedicated bike storage room.

### `pet_policy`

Free-form string. Operator's pet rules.

| Content | Example |
|---|---|
| Allowed with restrictions | "Pets accepted with £50/mo pet rent and 1-month additional deposit" |
| Allowed unconditionally | "Pets welcome, no fee" |
| Prohibited | "No pets" |
| Case-by-case | "Pets considered on application" |
| Unknown | `""` or `"Policy not stated"` |

### `other_amenities`

Array of strings. Catch-all for amenities not covered by the named booleans. Examples: "Games room", "Private garden", "Library", "Padel court", "Spa / sauna", "Cold plunge", "Hot desks", "Meeting rooms", "Karaoke room", "Guest suite".

### `overall_tier`

Enum: `"premium" | "strong" | "decent" | "basic"`.

| Tier | When |
|---|---|
| `"premium"` | 24h concierge + pool + excellent gym + sky lounge + 3+ other amenities |
| `"strong"` | 24h concierge + good gym + co-working + rooftop + 1-2 others |
| `"decent"` | Daytime concierge + gym + co-working OR rooftop |
| `"basic"` | None / gym only / no concierge |

**Derivation shortcut:** `overall_tier` can be machine-derived from the other fields. Agent should propose a tier but the orchestrator can recompute.

---

## Block 3 — `architecture`

Four fields capturing architectural credit and signature status. Sources are the developer's page + architect portfolios + press.

### `architects`

Array of strings. Named architecture practice(s). Usually one primary, occasionally a landscape architect or interior designer credited separately.

| Source | Where |
|---|---|
| Developer project page | Usually credits architects |
| Practice portfolio | Search `"<building name>" <developer> architect` |
| Press (Dezeen / ArchDaily / Building) | Strong source for award-level buildings |
| Wikipedia | For flagship buildings |

Canonical examples:
- Gasholders King's Cross → `["Wilkinson Eyre", "Jonathan Tuckey Design"]`
- Pan Peninsula → `["SOM"]`
- Landmark Pinnacle → `["SimpsonHaugh"]`

### `awards`

Array of strings. Architecture / sustainability / development awards. Format: `"Award name — Year"`.

Examples:
- `"RIBA London Award — 2018"`
- `"Stirling Prize shortlist — 2019"`
- `"WAN BTR Project of the Year — 2022"`

Leave empty array if no awards found. Not every building wins awards; absence is normal.

### `is_signature`

`boolean`. Whether the building is architecturally significant enough to be a destination in its own right.

| Value | When |
|---|---|
| `true` | Landmark silhouette / major press coverage / named architect of renown / award-winner / visitor destination |
| `false` | Competent new-build without distinctive architectural identity (most of the dataset) |

Canonical `true` examples: Gasholders, Battersea Power Station residences, Landmark Pinnacle, Pan Peninsula, Newfoundland, One Park Drive, Television Centre.

Bias toward `false`. `is_signature: true` should be genuinely rare and defensible.

### `style_notes`

Free-form string, 1-3 sentences. Describes the architectural character — materiality, massing, silhouette, relationship to context. Used in the project modal under the "Architecture" accordion.

Example for Gasholders:
> Three cylindrical residential volumes threaded inside restored Victorian gasholder frames. Dark bronze and anodised aluminium cladding with bay windows on every floor. The gasholder frames are listed; the residential volumes were inserted inside them as a conservation-led intervention. Daylit central courtyard.

---

## Block 4 — Project `long_form`

Three fields of narrative prose composed from the other research. V2 **writes** these; V4 **fact-checks** them.

### `full`

Free-form string, 3-5 paragraphs. The comprehensive project description. Think: what would a senior renter want to know before emailing the operator? Covers:

- Location in the area (specific street / dock / landmark reference)
- Developer + operator + key architectural credit
- Typical unit mix and layouts
- Price positioning within the area
- The one or two things that differentiate this building from nearby alternatives
- Anything load-bearing about operational quality (on-site team, building management)

### `living_experience`

Free-form string, 1-3 paragraphs. What it's actually like to live there day-to-day. Distinct from `full` which is descriptive — `living_experience` is experiential.

Composed from:
- HomeViews review signal
- Trustpilot reviews
- Reddit discussions of specific buildings
- Concierge / management responsiveness signals

Example tone:
> Concierge is rated consistently across reviews — package handling, guest check-in, and maintenance requests all handled quickly. The lifts are the single-biggest pain point in resident reviews; mornings and evenings both see waits at peak times. Acoustic privacy is strong within units but the podium-level amenity floors create a throughput of evening events that residents near the ninth floor say they feel.

### `notable_features`

Free-form string, 1-2 paragraphs. The 3-5 things specific to this building that aren't true of its competitors. Useful when the user is comparison-shopping inside an area.

Canonical examples:
- Gasholders: "Listed gasholder frames create the building's silhouette; central courtyard is shared across the three volumes; interiors by Jonathan Tuckey; adjacent to Gasholder Park."
- Pearl Yard: "3-month minimum tenancy (shorter than Greystar default); new-build 2024; adjacent to East Village / Olympic Park; Homeppl + Guarantid via parent company."

---

## Block 5 — `resident_signal`

Five fields capturing tenant review data. The single most trust-damaging failure in V1 was operator marketing prose being taken at face value; resident signal is the corrective.

### `homeviews_score`

Optional number. HomeViews overall rating on the **5-point scale** (0.0–5.0). The UI renders this value as `{score}/5` so it MUST be stored on the 5-point scale even though HomeViews's review pages sometimes quote a 10-point figure — always convert 10-point figures to 5-point (halve them) before writing the field.

Leave `undefined` if HomeViews has no listing for the building. Common for: very new buildings (< 12 months old), very small portfolios, some co-living operators.

### `homeviews_url`

Optional string. Direct URL to the building's HomeViews page.

Format: `https://www.homeviews.com/development/<slug>`.

### `summary`

Free-form string, 2-4 sentences. Synthesis of resident review sentiment. Covers what residents consistently praise, what they consistently complain about, and whether the review count is large enough to trust.

Example:
> 4.05/5 across 42 reviews (review count gives reasonable confidence). Residents consistently praise the concierge team and the view; consistent complaint is about lift reliability during rush hours. Newer reviews (2024-2025) are notably more positive than 2022-2023 reviews, suggesting management-team changes have landed.

### `common_complaints`

Array of strings. Top 3-5 consistent complaints pulled from reviews. Each entry is one sentence.

Example:
- `"Lift waits during morning/evening peak hours"`
- `"Package handling delays during concierge shift gaps"`
- `"Gym equipment availability during peak hours"`

### `common_praise`

Array of strings. Top 3-5 consistent praise points. Each entry is one sentence.

Example:
- `"Concierge team responsiveness across multiple review cycles"`
- `"Building cleanliness and common-area maintenance"`
- `"Natural light in studios due to floor-to-ceiling windows"`

**Review-count threshold:** don't summarise if the building has <5 reviews on HomeViews — the signal is too thin. Mark `summary: "Too few reviews for reliable signal (N reviews on HomeViews)"` and leave praise / complaints empty arrays.

---

## Block 6 — Per-project pricing refresh

V1 captured pricing at the **operator level** via `operatorQualificationDefaults()` in `helpers.ts`. V2 refreshes at the **per-project level** — the numbers that actually appear on each building's rental page, not the operator-wide band.

The fields are the same as V1's pricing schema (see `qualification-schema.md` § "Pricing"), but the source must be the specific building's rentals page, not the operator's portfolio summary.

### What to refresh

- `rental.prices.studio` — exact band for this building
- `rental.prices.one_bed` — exact band for this building
- `rental.prices.two_bed` — exact band for this building
- `rental.prices.bills_included` — per-building (some operators vary)
- `rental.prices.notes` — verified from specific URL on specific date
- `rental.price_transparency` — per-building, not operator-wide

### When to override the operator default

- Building's listed bands fall outside the operator's range by >10%
- Building offers a different unit mix than the operator default
- Promotional pricing active on this building specifically

### When to leave operator default

- Building's listed bands match operator range
- Building has no live rental listings (possibly fully let; use operator default with a note)

---

## Evidence discipline

Every non-inferred enrichment field must cite a source URL — same rule as V1 qualification. Relaxations:

- `overall_tier` can be derived from other amenity fields (no URL required if derivation is explicit)
- `is_signature` derived from presence of awards / named architect / press mentions (cite the underlying signals)
- `heating_type: "communal"` defaulted for post-2015 BTR absent specific source — mark as inferred in the proposal

Do NOT invent:
- Specific EPC ratings (either cite the EPC register or leave undefined)
- Specific HomeViews scores (either cite the URL or leave undefined)
- Architect names (either cite developer page / practice site / press, or leave empty)
- Award names or years (either cite, or leave empty)

---

## What NOT to touch in V2

- `rental.qualification.*` fields — V1 owns these. Re-research only if signal of policy change.
- `evaluation.*` — V3 (grade recalibration) owns these. Do not touch the CriterionScore fields or overall_grade.
- Area-level fields — V4 owns these.
- `id`, `area_id`, `build_completed` — identity fields; change only via explicit reattribution flow.

If research surfaces contradictions in V1 fields (e.g. operator now states a different referencing provider than what V1 captured), note in the report for re-research — do not silently overwrite.

---

## Budget guidance

Per project: additional ~10-15k tokens on top of the qualification budget. Agent is already on the operator's site; amenities + HomeViews + architect credits add research surface but not search volume.

Per operator with N buildings: ~5k tokens for operator-wide architecture + amenity defaults + (~8k × N) for per-building variations. Most of the per-building work is pricing refresh + HomeViews review extraction.

The claim that motivated this expansion: filling 40+ fields costs roughly 50% more tokens than filling 12, not 3-4x more. The agent already holds the operator page + review pages in context; emitting additional field values is cheap.
