# Vertus — V2 enrichment proposal

Operator: **Vertus** (Canary Wharf Group residential-leasing arm)
Research round: 2026-04-17 (V2 enrichment pass)
Dataset projects in scope: 5
  - `8-water-street`
  - `10-park-drive` ⚠ flagged wrong-operator in V1 research
  - `george-street-vertus` ⚠ should be renamed "10 George Street"
  - `one-park-drive` ⚠ flagged wrong-operator in V1 research
  - `newfoundland`

Confidence: high on architecture + HomeViews scores for the four Stanton-Williams / Horden-Cherry-Lee buildings; medium on EPC (not individually verified against the GOV.UK register this pass); medium on One Park Drive + 10 Park Drive day-to-day living signal (ownership towers, thin HomeViews sample).

---

## Cross-cutting V1 qualification updates (proposed alongside V2)

V1 left all five buildings at `realism: "unknown"` (four) or `"unlikely"` (One Park Drive). The Phase-2 operator research since then hardened three fields that can now be proposed onto `operatorQualificationDefaults.vertus` in `helpers.ts`:

| Field | V1 current | Proposed | Evidence |
|---|---|---|---|
| `income_multiple` | `30` | `30` (keep) | FAQ verbatim: "combined annual income … 30 times the monthly rent." |
| `credit_check` | `"standard"` | `"standard"` (keep) | No published credit-score floor; no lenient-stack signal (no Homeppl case study). |
| `referencing_provider` | `"unclear"` | `"unclear"` (keep) | Not publicly named. Searches for "Vertus Homeppl / Goodlord / Canopy" return zero hits. Direct enquiry required — do not guess. |
| `qualification_flexibility_signal` | `"standard"` | `"standard"` (keep) | Mixed signals; no rigid-refusal anecdotes, no flex anecdotes. |

**No V1 field flips.** The evidence gathered supports the existing operator-level defaults; V1 was "thin" in the sense that no pathway fires, not in the sense that values are wrong. The per-building realism overrides that fall out are:

| Project | V1 `realism` | Proposed `realism` | Reason |
|---|---|---|---|
| `8-water-street` | `"unknown"` | **`"unlikely"`** | 1-bed floor £3,100 → 30× income floor £93k/yr. No savings / guarantor / upfront pathway fires. Income floor unreachable without UK payslips. |
| `george-street-vertus` | `"unknown"` | **`"unlikely"`** | 1-bed floor £3,000 → £90k/yr income floor. Same pathway logic as above. |
| `newfoundland` | `"unknown"` | **`"unlikely"`** | 1-bed floor £3,100 → £93k/yr income floor. |
| `10-park-drive` | `"unknown"` | **`"unclear"`** | Ownership tower; rentals via individual owner-landlords / external agents (Foxtons, JOHNS&CO). Operator is **not** Vertus for rental purposes — qualification stack varies per listing. Keep `"unclear"` pending operator reattribution. |
| `one-park-drive` | `"unlikely"` | `"unlikely"` (keep) | Ownership tower; secondary-market rentals via Herzog premium; already correctly `"unlikely"`. |

The wrong-operator reattribution of `10-park-drive` and `one-park-drive` is the correct V1 action but is outside this V2 proposal's scope — flagged below for user decision.

---

## Per-building enrichment

### 1. `8-water-street` — 8 Water Street (Vertus)

#### building_quality
| Field | Proposed | Evidence |
|---|---|---|
| `epc_rating` | `"B"` (inferred, not verified against register this pass) | New-build 2020–21 BTR to CWG spec; EPC B is the typical floor for post-2015 London BTR towers. Flag for GOV.UK register verification. |
| `sound_insulation` | `"good"` | New-build + Part E compliant; no dominant noise complaints in HomeViews 4.24 reviews. |
| `thermal_performance` | `"good"` | New-build + communal heating; no cold-flat complaints in reviews. |
| `layout_notes` | "Open-plan studios with floor-to-ceiling glazing; 1-beds have a separated bedroom and a full kitchen (not a kitchenette); most units have a private balcony. Interiors by Accouter Group (furnished units). Podium indoor-outdoor pool level creates some throughput but units are well-separated from it." | Operator gallery + HomeViews layout category. |
| `kitchen_quality` | `"good"` | Full kitchens with standard-grade appliances, dishwasher present; Bosch-level spec (not Miele) per operator gallery. |
| `heating_type` | `"communal"` | Inferred — post-2015 CWG BTR, no per-unit gas. Needs CWG sustainability page confirmation. |
| `notes` | "Modern new-build to full CWG specification with pet-friendly policy and strong HomeViews design scores. Communal heating means no thermostat control — not flagged as a cooling-season issue in reviews but worth noting for anyone temperature-sensitive." | — |

#### amenities
| Field | Proposed |
|---|---|
| `pool` | `true` |
| `pool_notes` | "Indoor-outdoor pool on the podium level — distinctive feature among Vertus buildings and a 2021 HomeViews Best London Development signature. Residents-only." |
| `gym` | `true` |
| `gym_quality` | `"good"` | Full equipment, managed; not third-space-tier but functional for general training. |
| `concierge` | `"24h"` |
| `sky_lounge` | `true` |
| `co_working` | `true` |
| `dining_room` | `true` |
| `cinema_room` | `true` (screening room) |
| `rooftop_terrace` | `true` |
| `parking` | `false` (standard Wood Wharf — car-free estate) |
| `bike_storage` | `true` |
| `pet_policy` | "Pet-friendly — Vertus's flagship pet-accepting building; no blanket ban, specific policy requires direct enquiry on fees and deposit." |
| `other_amenities` | `["Resident events programme", "Self-service bar", "Snack bar / parcel box"]` |
| `overall_tier` | `"premium"` |

#### architecture
| Field | Proposed |
|---|---|
| `architects` | `["Stanton Williams"]` |
| `awards` | `["HomeViews Best London Development — 2021", "HomeViews Build-to-Rent Awards — 2021 (triple winner)"]` |
| `is_signature` | `false` | Stanton Williams are a serious RIBA practice but 8 Water Street is the "quiet premium" twin of 10 Park Drive, not the landmark — reserved `true` for One Park Drive and Newfoundland. |
| `style_notes` | "Low-rise waterside character linked to 10 Park Drive by a double-height glass atrium. Designed as a human-scale counterpoint to the Wood Wharf towers; connects residents directly to the water and green spaces. Roof terrace by Accouter Group." |

#### long_form
- `full`: "8 Water Street is Vertus's pet-friendly flagship in Wood Wharf — a low-rise, water-front BTR designed by Stanton Williams and linked to the adjoining 10 Park Drive by a glass atrium. 174 units ranging from studio to 3-bed, with full kitchens (not kitchenettes), floor-to-ceiling glazing and private balconies on most homes. Operated by Vertus to the Canary Wharf Group standard, with an in-house leasing team. Pricing floor £2,600 studio / £3,100 1-bed sits at the upper end of the Wood Wharf Vertus stack, reflecting the pool amenity and the pet-friendly differentiation. Signature amenity is the indoor-outdoor pool on the podium — distinctive among the Vertus portfolio and the anchor of the 2021 HomeViews Best London Development award sweep."
- `living_experience`: "4.24/5 on HomeViews across a substantial review base. Residents consistently praise the concierge, the design quality, the pool, and the sense of community. The strongest complaint pattern is utility cost — communal heating charges land on residents without direct thermostat control, which reviewers describe as an annoyance rather than a dealbreaker. Building management is rated as responsive — 'issues addressed within a day' is a recurring positive. The pet-friendliness is load-bearing for the building's character; it materially shapes who lives here."
- `notable_features`: "Indoor-outdoor podium pool (unique among the four Vertus BTR buildings). Pet-friendly policy (Vertus's only publicly pet-friendly building at this scale). Linked to 10 Park Drive by a double-height glass atrium. Stanton Williams design language continues across both buildings. 2021 HomeViews triple award winner."

#### resident_signal
| Field | Proposed |
|---|---|
| `homeviews_score` | `8.5` (converted from 4.24/5 → 8.48/10; round to 8.5) |
| `homeviews_url` | `"https://www.homeviews.com/development/8-water-street-e14"` |
| `summary` | "4.24/5 across a substantial review base (review count gives strong confidence). Residents consistently praise design, concierge responsiveness, the pool, and the sense of community. Dominant complaint is utility cost linked to communal heating without thermostat control. 2021 HomeViews Best London Development award." |
| `common_praise` | `["Concierge responsiveness — issues addressed within a day", "Pool and design quality", "Pet-friendly community character", "Natural light from floor-to-ceiling windows", "Hotel-like finish throughout"]` |
| `common_complaints` | `["Utility cost / communal heating charges without thermostat control", "Occasional maintenance lag on specific issues", "Amenity throughput during peak hours"]` |

#### rental.prices
| Field | Proposed |
|---|---|
| `studio.min / max` | `2600 / ~2900` (upper inferred; operator publishes "from" floors only) |
| `one_bed.min / max` | `3100 / ~3500` |
| `two_bed.min / max` | `4200 / ~4800` |
| `three_bed.min / max` | `6900 / ~7500` |
| `bills_included` | `false` — standard AST; utilities billed separately |
| `price_transparency` | `"listed"` (keep) |
| `notes` | "Floors verified 2026-04-16 via /apartments-to-rent/. Upper bounds not published; inferred from Hamptons / Savills secondary listings." |

#### Affordability relative to £2,500 / £3,000 envelope
- Studio floor £2,600 → **stretch** (sits just above the £2,500 comfort line, below the £3,000 hard cap)
- 1-bed floor £3,100 → **over budget** (above the £3,000 hard cap)
- **AffordabilityTag proposed: `"stretch"`** (studios are reachable as stretch; 1-beds are over)
- Comparable position: sits above ARK CW £2,150 at-budget, roughly at Pan Peninsula £2,900 over-budget band, below Landmark Pinnacle £2,800+ stretch. The Vertus amenity premium is real but Caner's envelope only reaches studios.

---

### 2. `george-street-vertus` → propose rename to **`10-george-street`** — 10 George Street (Vertus)

**Naming correction:** dataset says "3 & 10 George Street (Vertus)" but Vertus operates **10 George Street only**. "3 George Street" does not exist as a Vertus BTR — likely a typo for 3 Park Drive (an ownership tower, not Vertus). Rename proposed.

#### building_quality
| Field | Proposed |
|---|---|
| `epc_rating` | `"B"` (inferred; 2020 completion; verify via register) |
| `sound_insulation` | `"good"` |
| `thermal_performance` | `"good"` |
| `layout_notes` | "37 storeys, 327 units, all overlooking the Wood Wharf boardwalks and waterside gardens. Full kitchens, floor-to-ceiling glazing, private balconies on most units. Layouts are tight by luxury standards but efficient." |
| `kitchen_quality` | `"good"` |
| `heating_type` | `"communal"` |
| `notes` | "Vertus's first BTR delivery (2020) and the launch-of-brand building. Held up well — 4.56 HomeViews is the highest of the portfolio." |

#### amenities
| Field | Proposed |
|---|---|
| `pool` | `false` (10 George Street does NOT have a pool — the pool is 8 Water Street's differentiator) |
| `gym` | `true` — 24/7 gym managed by Antidote |
| `gym_quality` | `"good"` |
| `concierge` | `"24h"` |
| `sky_lounge` | `true` |
| `co_working` | `true` |
| `dining_room` | `true` |
| `cinema_room` | `false` (no dedicated screening room at 10 George Street; games/TV lounge only) |
| `rooftop_terrace` | `true` — large south-facing terrace |
| `parking` | `false` |
| `bike_storage` | `true` |
| `pet_policy` | "Direct enquiry — less pet-forward than 8 Water Street which is the designated pet building." |
| `other_amenities` | `["Self-service bar", "Games lounge (pool table, shuffleboard, chess, consoles)", "Resident events programme", "Breakfast mornings + coffee programme"]` |
| `overall_tier` | `"strong"` (not premium — no pool, no cinema) |

#### architecture
| Field | Proposed |
|---|---|
| `architects` | `["Stanton Williams"]` |
| `awards` | `["HomeViews Best London Development — 2020", "HomeViews BTR Awards 2020 — national runner-up"]` |
| `is_signature` | `false` | Competent Stanton Williams tower but not the named-architect landmark. |
| `style_notes` | "37-storey Stanton Williams tower at the heart of Wood Wharf — the launch building of the Vertus brand. Restrained palette, tight façade rhythm, oriented to the dock waterside." |

#### long_form
- `full`: "10 George Street was Vertus's first BTR delivery in 2020 — a 37-storey Stanton Williams tower with 327 apartments, all oriented to the Wood Wharf waterside. The building launched the Vertus brand and set its template: in-house leasing team, 24/7 gym managed by Antidote, daily resident programming. No pool (that differentiator is 8 Water Street) and no dedicated screening room, but a strong amenity stack centred on the games lounge, self-service bar, and rooftop terrace. Studio from £2,600, 1-bed from £3,000."
- `living_experience`: "4.56/5 on HomeViews — the highest of the four Vertus buildings. Residents consistently describe the community character strongly — 'Vertus buildings foster an incredible feeling of community' is a verbatim quote from a top review. The 24/7 gym and the games/pool lounge draw particular praise. Management responsiveness rated strongly; the building has held up well through five years of occupancy, which is a non-trivial signal for a BTR at this scale."
- `notable_features`: "Vertus's first BTR and the highest-rated of the portfolio on HomeViews. Stanton Williams design. 2020 HomeViews Best London Development. Antidote-managed gym is a real third-party partnership rather than a token in-house facility. Games lounge (pool table, shuffleboard) distinguishes it from the 'sky lounge + bar' standard at the other Vertus buildings."

#### resident_signal
| Field | Proposed |
|---|---|
| `homeviews_score` | `9.1` (converted from 4.56/5 → 9.12/10) |
| `homeviews_url` | `"https://www.homeviews.com/development/10-george-street-e14"` |
| `summary` | "4.56/5 — the top-rated Vertus building. Review count substantial (development has been open since 2020). Consistent praise for community feel, 24/7 gym, and the design. Utility / communal heating complaints present but less dominant than at Newfoundland." |
| `common_praise` | `["Community feel and resident programming", "Antidote-managed 24/7 gym", "Design quality and light", "Concierge responsiveness", "Self-service bar + snack / parcel box"]` |
| `common_complaints` | `["Utility costs — communal heating", "Lift waits at peak times (37 storeys, 327 units)", "Limited pool substitute (must cross to 8 Water Street)"]` |

#### rental.prices
| Field | Proposed |
|---|---|
| `studio.min / max` | `2600 / ~2900` |
| `one_bed.min / max` | `3000 / ~3400` |
| `two_bed.min / max` | `4200 / ~4800` |
| `three_bed.min / max` | `5200 / ~6500` |
| `bills_included` | `false` |
| `price_transparency` | `"listed"` |
| `notes` | "Verified 2026-04-16. Studio floor slightly softer than 8 Water Street's on the 1-bed side, reflecting no-pool differentiation." |

#### Affordability
- Studio £2,600 → **stretch**
- 1-bed £3,000 → **at hard cap** / **over**
- **AffordabilityTag: `"stretch"`** (marginally cheaper 1-bed than 8 Water Street, still out of envelope)

---

### 3. `newfoundland` — Newfoundland by EcoWorld Ballymore

#### building_quality
| Field | Proposed |
|---|---|
| `epc_rating` | `"B"` (inferred) |
| `sound_insulation` | `"good"` |
| `thermal_performance` | `"good"` |
| `layout_notes` | "58 storeys — the tallest BTR tower in the UK. Diagonal diamond exoskeleton means some window frames are angled rather than orthogonal on perimeter units; central units are orthogonal. Floor-to-ceiling glazing; most units have a private balcony; higher floors have panoramic views unmatched in E14." |
| `kitchen_quality` | `"good"` |
| `heating_type` | `"communal"` |
| `notes` | "Distinctive diagrid exoskeleton is load-bearing (literal and marketing). Tallest BTR in the UK by unit count and height. Delivered by EcoWorld Ballymore; Vertus is the operator — a rare split-ownership arrangement in the dataset." |

#### amenities
| Field | Proposed |
|---|---|
| `pool` | `false` (no pool at Newfoundland — distinguishes from 8 Water Street) |
| `gym` | `true` + `spin studio` |
| `gym_quality` | `"good"` |
| `concierge` | `"24h"` |
| `sky_lounge` | `true` |
| `co_working` | `true` |
| `dining_room` | `true` |
| `cinema_room` | `true` — screening room |
| `rooftop_terrace` | `true` — plus podium terrace |
| `parking` | `false` |
| `bike_storage` | `true` |
| `pet_policy` | "Direct enquiry required; less pet-forward than 8 Water Street." |
| `other_amenities` | `["Spin studio", "Children's play area", "Indoor 'kidult' entertainment space", "Self-service bar", "VERTUS+ resident perks programme"]` |
| `overall_tier` | `"premium"` |

#### architecture
| Field | Proposed |
|---|---|
| `architects` | `["Horden Cherry Lee", "Adamson Associates (executive architect)"]` |
| `awards` | `[]` — no major RIBA / WAN awards found; widely covered in Dezeen and industry press but no named award. |
| `is_signature` | **`true`** | 220m diamond-clad diagrid tower with Dezeen / ArchDaily / Wikipedia coverage; tallest residential BTR in the UK; visual landmark of the E14 skyline. Clearly meets the signature threshold. |
| `style_notes` | "220m tall diagrid tower clad in silver aluminium, wrapped in a diamond-shaped exoskeleton that transfers load away from the DLR tunnels below (a traditional core structure would have required the building to be 30% shorter). The exposed structure is the building's identity; sometimes called 'the diamond tower'." |

#### long_form
- `full`: "Newfoundland is the tallest build-to-rent tower in the United Kingdom — 220 metres and 58 storeys, 636 apartments, developed by EcoWorld Ballymore and operated by Vertus (an unusual cross-developer arrangement in the Vertus portfolio). The diamond-clad diagrid exoskeleton designed by Horden Cherry Lee is structurally necessary (DLR tunnels run directly beneath the site, which ruled out a conventional core-and-shear-wall structure) and visually load-bearing for the E14 skyline. Studios from £2,700, 1-beds from £3,100 — the highest 1-bed floor in the Vertus portfolio. Amenity package includes a 58th-floor sky lounge with views unmatched at Canary Wharf."
- `living_experience`: "4.23/5 on HomeViews. The positive reviews emphasise the view, the amenity programme (VERTUS+, spin studio, events), and the concierge. The negative reviews are more pointed than at 8 Water Street or 10 George Street — multiple residents flag lifts regularly out of service for extended periods, broken bin chutes, a documented fly infestation in 2025, and promised quarterly window cleaning that didn't materialise. At 636 units across 58 storeys, lift throughput is a structural issue rather than a management lapse. Worth weighing against the view premium."
- `notable_features`: "Tallest BTR in the UK. Diamond diagrid exoskeleton (structurally necessitated by DLR tunnels beneath). Unique VERTUS+ perks programme. 58th-floor sky lounge. Cross-developer arrangement (EcoWorld Ballymore developed; Vertus operates) — unusual in the portfolio."

#### resident_signal
| Field | Proposed |
|---|---|
| `homeviews_score` | `8.5` (converted from 4.23/5 → 8.46/10) |
| `homeviews_url` | `"https://www.homeviews.com/development/newfoundland-e14"` |
| `summary` | "4.23/5 across substantial review base. Views and amenity programme consistently praised. Complaints pattern is more pointed than the other Vertus buildings — lift reliability, bin chutes, and 2025 fly infestation all flagged. At 636 units over 58 storeys, operational throughput issues are structural rather than isolated." |
| `common_praise` | `["Views from high floors (unmatched at Canary Wharf)", "VERTUS+ perks programme and resident events", "Spin studio and gym", "Concierge responsiveness", "Building design / diagrid identity"]` |
| `common_complaints` | `["Lifts frequently out of service for extended periods", "Broken bin chutes (recurring)", "Documented fly infestation in 2025", "Communal area cleaning inconsistencies", "Promised quarterly window cleaning not delivered"]` |

#### rental.prices
| Field | Proposed |
|---|---|
| `studio.min / max` | `2700 / ~3000` |
| `one_bed.min / max` | `3100 / ~3700` |
| `two_bed.min / max` | `4000 / ~5000` |
| `three_bed.min / max` | `8500 / ~12000` (high floors push hard into penthouse territory) |
| `bills_included` | `false` |
| `price_transparency` | `"listed"` |
| `notes` | "Verified 2026-04-16. Studio floor £2,700 is the highest of the four Vertus BTR buildings; reflects the view premium on a per-unit basis." |

#### Affordability
- Studio £2,700 → **stretch** (above £2,500 comfort line, below £3,000 hard cap)
- 1-bed £3,100 → **over budget**
- **AffordabilityTag: `"stretch"`** — only studios reach; 1-beds blow the envelope

---

### 4. `10-park-drive` — 10 Park Drive (Vertus) ⚠ wrong-operator flag from V1

**Key flag from V1 research:** 10 Park Drive is an **ownership tower** (346 apartments for sale, Stanton Williams, completed 2020) — not Vertus BTR. Vertus does not list it on `/apartments-to-rent`. Rentals happen via individual owner-landlords through Foxtons, JOHNS&CO, Circa London, Crown Home Buying & Letting. **The `operator: "Vertus"` attribution is wrong.** V2 enrichment below assumes the **building** itself (to populate architecture + amenities) but qualification / pricing / resident_signal inherits the secondary-market character, not Vertus BTR defaults.

**Recommended action:** flag to user for reattribution to `"Secondary Market"` or `"Individual Landlord (Stanton Williams tower)"` with `building_type: "Owner-Lease"`. If reattributed, V1 qualification defaults also flip (no operator stack applies).

#### building_quality
| Field | Proposed |
|---|---|
| `epc_rating` | `"B"` (inferred, 2020 build) |
| `sound_insulation` | `"good"` (new-build + Part E) |
| `thermal_performance` | `"good"` |
| `layout_notes` | "42–43 storeys (sources disagree on storey count due to podium interpretation). 346 apartments designed for sale — typically larger and better-specified than BTR equivalents. Private sky terrace on the 13th floor. Linked to 8 Water Street by a double-height glass atrium." |
| `kitchen_quality` | `"excellent"` — owner-spec kitchens (Miele / Siemens commonly specified by developer) |
| `heating_type` | `"communal"` |
| `notes` | "Ownership tower — unit specification is a tier above Vertus BTR. Day-to-day living experience depends heavily on which individual landlord you rent from; some units are owner-occupied and rare on the rental market, others are investor-owned and let via standard ASTs through high-street agents." |

#### amenities
| Field | Proposed |
|---|---|
| `pool` | `false` (pool access via 8 Water Street is residents-only to 8WS, not 10PD) |
| `gym` | `true` — private residents' gym |
| `gym_quality` | `"good"` |
| `concierge` | `"24h"` |
| `sky_lounge` | `true` — private residents' sky terrace 13th floor |
| `co_working` | `false` (no dedicated co-working — distinguishes from Vertus BTR stack) |
| `dining_room` | `true` |
| `cinema_room` | `true` |
| `rooftop_terrace` | `true` |
| `parking` | `true` (ownership tower parking allocation available — unusual for Wood Wharf) |
| `bike_storage` | `true` |
| `pet_policy` | "Dependent on individual landlord — building management permits pets subject to leasehold terms; individual ASTs vary." |
| `other_amenities` | `["13th-floor private sky terrace", "Residents' club"]` |
| `overall_tier` | `"premium"` |

#### architecture
| Field | Proposed |
|---|---|
| `architects` | `["Stanton Williams"]` |
| `awards` | `[]` (no major awards found; covered in trade press) |
| `is_signature` | `false` — despite its scale, 10 Park Drive is architecturally the twin of 8 Water Street; neither are the landmark (that's One Park Drive and Newfoundland at Wood Wharf). |
| `style_notes` | "42–43 storey Stanton Williams tower linked to the low-rise 8 Water Street by a double-height glass atrium. Restrained façade, masonry-tone cladding, dock-oriented. The first completed residential tower at Wood Wharf (2020)." |

#### long_form
- `full`: "10 Park Drive is an **ownership tower** — 346 apartments designed for sale rather than rent, completed 2020, designed by Stanton Williams and linked to 8 Water Street by a glass atrium. Rentals at 10 Park Drive are available but happen individually through owner-landlords using external agents (Foxtons, JOHNS&CO, Circa London) rather than through Vertus. The **building** is run to Canary Wharf Group's standard with 24/7 concierge and a 13th-floor residents' sky terrace, but tenancy-level qualification, pricing, and landlord quality vary per listing. Unit spec is generally a tier above the Vertus BTR buildings (owner-buyer specification). This is a Wood Wharf ownership tower with a rental overflow, not a BTR."
- `living_experience`: "Not enough concentrated review data to generalise — individual units cycle through the rental market at different points, under different landlords. Building-management quality (concierge, common areas, atrium) is consistent with Vertus / CWG standards since CWG manages the freehold. Day-to-day tenancy experience varies with the landlord."
- `notable_features`: "Ownership-tower character (specification, stability, lower tenant churn). 13th-floor residents' sky terrace. Glass atrium link to 8 Water Street. First completed Wood Wharf residential tower."

#### resident_signal
| Field | Proposed |
|---|---|
| `homeviews_score` | `undefined` (no dedicated HomeViews listing of sufficient scale; ownership towers are undersampled) |
| `homeviews_url` | `undefined` |
| `summary` | "Too few reviews for reliable signal (ownership tower; rentals are a minority of occupancy)." |
| `common_praise` | `[]` |
| `common_complaints` | `[]` |

#### rental.prices
| Field | Proposed |
|---|---|
| `studio.min / max` | `undefined` (not a studio-heavy unit mix; owner-spec) |
| `one_bed.min / max` | `3000 / 3800` (secondary-market inferred from Foxtons / JOHNS&CO 2026 listings) |
| `two_bed.min / max` | `4500 / 5500` |
| `three_bed.min / max` | `6500 / 9000` |
| `bills_included` | `false` |
| `price_transparency` | `"enquire"` (flip from `"listed"` — Vertus doesn't list it; secondary-market only) |
| `notes` | "Secondary-market rentals via Foxtons / JOHNS&CO / Circa London. Vertus does not operate 10 Park Drive. Pricing observed 2026-04-16 from Rightmove / OnTheMarket listings." |

#### Affordability
- 1-bed £3,000 floor → **over budget** (above £3,000 hard cap once agent fees, landlord qualification, and market dynamics factored in — secondary-market rentals rarely land at the advertised floor)
- **AffordabilityTag: `"over"`** — realistically out of envelope

---

### 5. `one-park-drive` — One Park Drive by Herzog & de Meuron ⚠ wrong-operator flag from V1

Same pattern as 10 Park Drive — ownership tower (434–484 apartments, 57–58 storeys, Pritzker-winner Herzog & de Meuron). Rentals via individual owner-landlords through external agents. V1 already has `realism: "unlikely"`, `building_type: "Owner-Lease"`, `is_signature: true`, `architects: ["Herzog & de Meuron"]` — the V2 enrichment fills in amenity / resident-signal / pricing fields.

#### building_quality
| Field | Proposed |
|---|---|
| `epc_rating` | `"B"` (inferred, 2021 build) |
| `sound_insulation` | `"excellent"` — Herzog & de Meuron circular tower with premium specification |
| `thermal_performance` | `"good"` |
| `layout_notes` | "57-storey circular tower with 483 apartments. Lower-floor 'loft' apartments have significantly higher ceilings and wrap-around terraces (designed as a premium tier). Upper-floor units tighter but with panoramic views. Full kitchens, premium interior specification throughout." |
| `kitchen_quality` | `"excellent"` — owner-spec Miele / Siemens / premium finishes |
| `heating_type` | `"communal"` |
| `notes` | "Herzog & de Meuron's signature circular form is load-bearing for the building's identity and pricing — this is the architectural destination building of Wood Wharf." |

#### amenities
| Field | Proposed |
|---|---|
| `pool` | `true` — swimming pool + spa |
| `pool_notes` | "Residents' pool and spa — among the strongest spa facilities in any Wood Wharf building." |
| `gym` | `true` |
| `gym_quality` | `"excellent"` — dedicated gym + studio space |
| `concierge` | `"24h"` |
| `sky_lounge` | `true` |
| `co_working` | `true` (studio / creative space) |
| `dining_room` | `true` |
| `cinema_room` | `true` |
| `rooftop_terrace` | `true` |
| `parking` | `true` |
| `bike_storage` | `true` |
| `pet_policy` | "Dependent on individual landlord / leasehold terms." |
| `other_amenities` | `["Spa", "Creative studio space", "Residents' library / private lounges"]` |
| `overall_tier` | `"premium"` |

#### architecture
| Field | Proposed |
|---|---|
| `architects` | `["Herzog & de Meuron"]` (keep V1) |
| `awards` | `[]` (no RIBA / Stirling award captured in public record for One Park Drive specifically; Herzog & de Meuron hold Pritzker Prize — this is the architect-level credit that makes the building signature) |
| `is_signature` | `true` (keep V1) |
| `style_notes` | "57-storey circular tower — the only circular-plan residential at Wood Wharf. Three façade types (loft-duplex lower floors with oversized terraces, mid-rise 'cluster' units, upper-floor 'bay' apartments with panoramic views) create variation across the tower's elevation. Herzog & de Meuron's first UK residential commission at this scale. The architectural landmark of Wood Wharf." |

#### long_form
- `full`: "One Park Drive is Wood Wharf's architectural landmark — a 57-storey circular tower designed by Herzog & de Meuron, Pritzker Prize winners and Switzerland's most internationally significant practice. 483 apartments across three distinct unit types: lower-floor 'loft' apartments with oversized wrap-around terraces, mid-rise 'cluster' units, and upper-floor 'bay' apartments with panoramic views. This is an **ownership tower** — rentals happen individually via owner-landlords through external agents, not through Vertus or any single BTR operator. Amenity package includes a residents' pool, spa, gym, cinema, and private lounges. Pricing is at the top of the Wood Wharf market: rentals typically start around £3,500–4,000 for 1-beds at the secondary-market tier."
- `living_experience`: "HomeViews shows a 5.00/5 rating but on a very thin review base — ownership towers have fewer rental residents and fewer reviews. Reviews that exist praise the architecture, amenity, and view; building management is Canary Wharf Group-operated and rated consistently. Day-to-day experience depends heavily on which landlord you rent from. This is not a building to compare on 'community feel' — it's a destination-architecture ownership tower that happens to have some rental inventory."
- `notable_features`: "Herzog & de Meuron (Pritzker Prize). Circular tower plan — the only one at Wood Wharf. Three distinct unit types across the height. Loft-duplex lower floors with oversized terraces. Spa and pool amenity. Wood Wharf's architectural destination."

#### resident_signal
| Field | Proposed |
|---|---|
| `homeviews_score` | `10.0` (5.00/5 — but flag thin sample) |
| `homeviews_url` | `"https://www.homeviews.com/development/one-park-drive-e14"` |
| `summary` | "5.00/5 on HomeViews but very thin review base (ownership tower; rental residents are a minority, and owner-residents review less). Signal is directionally positive but review count is too low for confident generalisation. Architecture, amenity, and CWG-managed common areas consistently praised in available reviews." |
| `common_praise` | `["Architecture and design quality", "Amenity package (pool, spa, gym, cinema)", "CWG-managed common areas", "Views from upper floors"]` |
| `common_complaints` | `[]` (no consistent complaint pattern in available reviews) |

#### rental.prices
| Field | Proposed |
|---|---|
| `studio.min / max` | `undefined` (not a studio building in practice — unit mix starts at 1-bed) |
| `one_bed.min / max` | `3500 / 4500` (secondary-market inferred) |
| `two_bed.min / max` | `5000 / 7500` |
| `three_bed.min / max` | `8000 / 15000` |
| `bills_included` | `false` |
| `price_transparency` | `"enquire"` (keep V1) |
| `notes` | "Secondary-market rentals via Knight Frank / Savills / Foxtons. Pricing reflects the Herzog architectural premium." |

#### Affordability
- 1-bed floor £3,500 → **over budget** (well above £3,000 hard cap)
- **AffordabilityTag: `"over"`** — clearly out of envelope; remains correctly `realism: "unlikely"`

---

## Affordability distribution summary (Caner's £2,500 / £3,000 envelope)

| Project | Studio tag | 1-bed tag | Overall AffordabilityTag |
|---|---|---|---|
| 8 Water Street | stretch | over | **stretch** |
| 10 George Street | stretch | over (at hard cap) | **stretch** |
| Newfoundland | stretch | over | **stretch** |
| 10 Park Drive | n/a (no studios) | over | **over** |
| One Park Drive | n/a | over | **over** |

**Distribution: 3 stretch, 2 over, 0 comfortable, 0 at-budget.** This is expected — Vertus is Canary Wharf Group's luxury BTR arm and the two ownership towers are architecture-destination buildings. None of these are comfortable for Caner's envelope; the 3 stretch entries are reachable on studios only.

Comparable positioning:
- **Below** Landmark Pinnacle (£2,800+ stretch) — Vertus studios start £2,600–2,700 so nominally softer, but Vertus has no savings / Homeppl pathway so the realism floor is higher in practice.
- **At** Pan Peninsula (£2,900 over) — similar price positioning but Pan Peninsula has different operator stack.
- **Well above** Quintain Ferrum (£1,829 comfortably) and ARK CW (£2,150 at-budget) — Vertus is a full tier up.

---

## HomeViews coverage summary

| Project | Score | Listing | Review base |
|---|---|---|---|
| 8 Water Street | 4.24/5 (≈ 8.5/10) | Yes | Substantial — 2021 triple-award winner |
| 10 George Street | 4.56/5 (≈ 9.1/10) | Yes | Substantial — highest-rated Vertus building |
| Newfoundland | 4.23/5 (≈ 8.5/10) | Yes | Substantial — with pointed negative pattern (lifts, bins, fly infestation) |
| 10 Park Drive | No score | No dedicated listing | Too thin for signal |
| One Park Drive | 5.00/5 (≈ 10/10) | Yes | Thin — ownership tower undersampled |

All four BTR + one ownership tower have HomeViews presence; 10 Park Drive is the only gap.

---

## Items needing user decision

1. **Rename `george-street-vertus` → `10-george-street`** (Vertus operates 10 George Street only; "3 George Street" is a dataset typo). Low blast radius — one area file.
2. **Wrong-operator reattribution for `10-park-drive`** — ownership tower, not Vertus BTR. Options: (a) change operator to `"Secondary Market"` and `building_type: "Owner-Lease"`, (b) mark operator `"unclear"`, or (c) keep current attribution and flag in `notes`. Affects V1 defaults inheritance.
3. **One Park Drive** already has `building_type: "Owner-Lease"` and `realism: "unlikely"` — V1 V4 data is defensible as-is. Same wrong-operator question applies to `operator: "Vertus"` but the impact is lower because realism is already `unlikely`.
4. **Coverage gap: 50-60 Charter Street** (756 units, opened Nov 2025 — the largest and newest Vertus building) is missing from the dataset. Phase 3 / user discretion: add it, or leave until next data-upkeep round.
5. **EPC ratings not verified against GOV.UK register this pass** — all proposed as `"B"` inferred. Flag for a targeted EPC-verification pass before values are committed; alternative is to leave `undefined` per the schema's "don't invent" discipline.
6. **Realism downgrades** (`unknown` → `unlikely` on three BTRs; `unknown` → `unclear` on 10 Park Drive). These are V1-territory but fall out of V2 research directly — propose the V1 updates travel with this V2 proposal to keep the Vertus set consistent.

---

## Sources

| URL | Label | Type | Accessed |
|---|---|---|---|
| https://thisisvertus.com/apartments-to-rent/ | Vertus portfolio + floors | operator | 2026-04-17 |
| https://thisisvertus.com/apartments-to-rent/8-water-street/ | 8 Water Street operator page | operator | 2026-04-17 |
| https://thisisvertus.com/apartments-to-rent/10-george-street/ | 10 George Street operator page | operator | 2026-04-17 |
| https://thisisvertus.com/apartments-to-rent/newfoundland/ | Newfoundland operator page | operator | 2026-04-17 |
| https://residential.canarywharf.com/10-park-drive/ | 10 Park Drive (ownership tower) | developer | 2026-04-17 |
| https://residential.canarywharf.com/one-park-drive/ | One Park Drive (ownership tower) | developer | 2026-04-17 |
| https://www.homeviews.com/development/8-water-street-e14 | 8 Water Street HomeViews | homeviews | 2026-04-17 |
| https://www.homeviews.com/development/10-george-street-e14 | 10 George Street HomeViews | homeviews | 2026-04-17 |
| https://www.homeviews.com/development/newfoundland-e14 | Newfoundland HomeViews | homeviews | 2026-04-17 |
| https://www.homeviews.com/development/one-park-drive-e14 | One Park Drive HomeViews | homeviews | 2026-04-17 |
| https://www.dezeen.com/2022/01/27/newfoundland-skyscraper-canary-wharf-horden-cherry-lee/ | Dezeen — Newfoundland architecture | press | 2026-04-17 |
| https://www.wsp.com/en-us/projects/newfoundland-london | WSP — diagrid structural rationale | press | 2026-04-17 |
| https://www.jra.co.uk/projects/10-park-drive-8-water-street | JRA — 8WS + 10PD delivery | press | 2026-04-17 |
| https://www.buildington.co.uk/buildings/9558/england/london-e14/8-water-street/8-water-street | 8 Water Street specs | press | 2026-04-17 |
| https://spearswms.com/property/one-park-drive-canary-wharf-herzog-de-meuron-tom-dixon/ | Spear's — One Park Drive | press | 2026-04-17 |
| /context/data-upkeep/operators/vertus.md | Vertus operator research (Phase 2) | internal | 2026-04-16 |
