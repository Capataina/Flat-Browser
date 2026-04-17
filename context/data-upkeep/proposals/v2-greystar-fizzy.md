# Greystar + Fizzy Living — V2 Enrichment Proposal
Generated: 2026-04-17

## Scope

Eleven buildings across Greystar's London BTR portfolio, including the four Fizzy Living developments retained after Greystar's December 2021 acquisition of MTVH's stake. V1 qualification (referencing, AST terms, Homeppl) already populated — this pass covers V2 only: building_quality, amenities, architecture, long_form, resident_signal, rental.prices refresh, affordability.

### Project IDs found in dataset

| # | id | Area | Operator string in dataset | Notes |
|---|---|---|---|---|
| 1 | `pearl-yard` | bermondsey | `Greystar` | 1,600-home flagship, Freans House open Jan 2026 |
| 2 | `the-bermondsey-project` | bermondsey | `Greystar` | 1,624-home sister scheme at 100 Clements Rd, under construction |
| 3 | `ten-degrees` | croydon | `Greystar` | Caner's current residence, 546 units, Tide modular |
| 4 | `stratford-mill` | stratford | `Greystar` | 247 units, tops out Oct 2025, Autumn 2026 delivery, Momento brand |
| 5 | `bloom-nine-elms` | nine-elms | `Greystar` | 894 units (Bloom East + Bloom West), formerly Essential Living |
| 6 | `mylo-nine-elms` | nine-elms | `Greystar` | 647 units, Mylo sub-brand |
| 7 | `fizzy-lewisham` | lewisham-gateway | `Greystar` *(miscategorised — should be "Fizzy Living (Greystar)")* | 184 units, River Mill Two, 2024 |
| 8 | `fizzy-stepney-green` | mile-end | `Fizzy Living (Greystar)` | PRS Development of the Year winner |
| 9 | `fizzy-poplar` | poplar-blackwall | `Fizzy Living (Greystar)` | Lindfield St, Bartlett Park |
| 10 | `fizzy-canning-town` | canning-town | `Fizzy Living (Greystar subsidiary)` | Vermilion Tower, CZWG |
| 11 | `fizzy-east-16` | canning-town | `Fizzy Living (Greystar)` | 292 units, Brunel Street Works |

**User brief discrepancies resolved:**
- Brief listed "Chapter Living" and "Sailmakers" as possible Greystar properties. Neither is in the dataset. Chapter Living is PBSA (student) and Sailmakers was a Canary Wharf block that has changed hands — flagged as "not present, not adding" (see Unclear section).
- Brief said "Fizzy 4 buildings" — dataset has 5 (Lewisham, Stepney Green, Poplar, Canning Town, East 16). Fizzy's current portfolio per fizzyliving.com locations page is eight (adding Walthamstow, Hayes, Silvertown not in dataset). Flagged for area-level decision.
- `fizzy-lewisham` is miscategorised in dataset as `operator: "Greystar"` — should be `"Fizzy Living (Greystar)"` for branding/behaviour consistency. Proposed fix noted.

---

## Operator-wide notes

### Greystar direct (non-Fizzy) pattern
- **Referencing:** In-house across Greystar direct properties (Ten Degrees confirms this first-party). Homeppl is used by Fizzy sub-brand but NOT by Greystar direct BTR.
- **HomeViews account strategy:** Greystar pages are actively managed — the operator solicits reviews and responds. Review count is strong across the portfolio (Bloom 167, Mylo 62, Ten Degrees 273, Pearl Yard 0-new, Fizzy buildings 114-382).
- **Architect patterns:** Greystar has a strong relationship with **HTA Design** (Ten Degrees, Pearl Yard masterplan) and **Hawkins\\Brown** (Pearl Yard Building W, Stratford Mill, Bermondsey Project). **AFK (Arney Fender Katsalidis)** designs the flagship tower at Bermondsey masterplan. **Allies and Morrison** designed Bloom Nine Elms.
- **Amenities pattern:** premium-tier Greystar direct (Bloom, Pearl Yard) consistently includes pool, gym, concierge, co-working, rooftop, pet spa. Ten Degrees is a tier below (no pool, small gym) reflecting its 2020 modular-first build. Mylo is similarly one tier below.
- **Heating:** Communal (district heating) is the default across post-2018 Greystar BTR. Ten Degrees (2020) is electric — modular construction constraint.
- **Pet policy:** Universal across portfolio — pets welcomed with fee (typically £50-75/month + deposit). Pearl Yard, Bloom and Mylo all have pet spas.
- **Lease flexibility:** Portfolio default is 12-month AST, but Pearl Yard offers 3-12 month leases (confirmed), making it uniquely flexible for Caner's visa-expiry constraint.

### Fizzy Living pattern
- **Referencing:** Homeppl backend with Open Banking route for savings-based qualification. Single central leasing line (020 8154 3110) — one phone call clears policy across all five Fizzy buildings.
- **HomeViews score:** Fizzy Living operator overall **4.47/5 across 1,806 reviews** — one of the top-rated BTR operators on HomeViews. Won HomeViews Awards 2024 and 2025 in Excellence, Design, Facilities, Location, Value and Management.
- **Amenity tier:** "Decent" — no Fizzy building has a pool. Most have gym + concierge + co-working + pet-friendly. The amenity package is consistent and modest — Fizzy trades flagship amenity for professional management and cross-portfolio consistency.
- **Visa flexibility:** Homeppl's Open Banking savings route is the realistic pathway for a Graduate visa renter without UK credit history.
- **Pricing:** Fizzy published price ranges on their filter UI are now **higher than V1 captured**. Filter UI shows £1,500-£2,500+ across studio to 2-bed; specific unit pages (Rightmove April 2026) show 1-beds from £1,800-£2,100 typically, 2-beds £2,100+. V1 captured £1,280 (Lewisham) and £1,900 (Stepney Green) — these were accurate to 2024-early-2025 but are stale by April 2026. Pricing refresh is the single biggest delta in this V2 pass.

### HomeViews availability summary

| Building | Score | Reviews | Confidence |
|---|---|---|---|
| Fizzy Lewisham | 4.41/5 | 382 | High |
| Fizzy Stepney Green | 4.42/5 | 191 | High |
| Fizzy Canning Town | 4.45/5 | 203 | High |
| Fizzy East 16 | 4.40/5 | 149 | High |
| Fizzy Poplar | 4.21/5 | 114 | High |
| Ten Degrees | 4.69/5 | 273 | High |
| Bloom Nine Elms | 4.62/5 | 167 | High |
| Mylo Nine Elms | 4.32/5 | 62 | Moderate |
| Pearl Yard | 0.00/— | 0 | Building too new (Freans House opened Jan 2026) |
| The Bermondsey Project | — | — | Under construction, no listing |
| Stratford Mill | — | — | Under construction, no listing |

---

## Per-building findings

### Greystar: `pearl-yard`

**building_quality**
- `epc_rating`: Not found on public pages — leave undefined. New-build 2026, expect B minimum from Part L 2022 baseline.
- `sound_insulation`: `good` (new-build, Part E 2022+; no review signal yet).
- `thermal_performance`: `good` (new-build, Part L 2022 minimum; no review signal yet).
- `layout_notes`: "Studio, 1-, 2- and 3-bed apartments across 14 buildings on the former Peek Freans biscuit factory site. Freans House is the first completed building (Jan 2026). Buildings range mid-rise to ~20 storeys. Floor-to-ceiling windows standard; many units have balconies or terraces facing the central public park."
- `kitchen_quality`: `good` — standard Greystar premium BTR spec (full kitchens, integrated appliances, dishwasher). No specific appliance brand published yet.
- `heating_type`: `communal` (inferred — new-build London BTR of this scale uses district heating).
- `notes`: "1,600+ home masterplan by HTA with buildings by HTA, Hawkins\\Brown and AFK. Freans House (Jan 2026) is the first phase open; masterplan completes late 2027. Pool and sauna opening 2027 (per operator page). The scale means common areas span multiple buildings."

**amenities** — `overall_tier: premium`
- pool: true, pool_notes: "Pool and sauna opening 2027 — not yet operational at Freans House; phased amenity delivery."
- gym: true, gym_quality: `good` (no photos of third-space-tier kit; standard premium BTR gym).
- concierge: `24h` (stated "24/7 Service" on operator page).
- sky_lounge: true, co_working: true, dining_room: false (games room + arts club in lieu), cinema_room: false.
- rooftop_terrace: true. parking: unknown (assume limited urban, not residents-default). bike_storage: true.
- pet_policy: "Pet-friendly — dedicated pet spa on site. Standard Greystar pet fee (£50-75/month + deposit) likely."
- other_amenities: ["Games room", "Arts club", "Yoga studio", "Pet spa", "Resident lounges"].

**architecture**
- `architects`: ["HTA Design (masterplan + buildings)", "Hawkins\\Brown (Pearl Yard buildings)", "Arney Fender Katsalidis (AFK — Building ST, DE, W)", "KPF (detailed masterplan, heritage integration)"].
- `awards`: []. No awards yet — too new. Potential for heritage-integration recognition given Peek Freans retention.
- `is_signature`: **false**. Multi-architect masterplan, not singular signature authorship. Defensible reason: no single landmark silhouette despite scale; identity is neighbourhood-level not building-level.
- `style_notes`: "Industrial brick language retaining fragments of the Peek Freans biscuit factory frontage. Gateway AFK tower (Building ST) marks the central park. Mixed-height composition from mid-rise brick to taller towers."

**long_form**
- `full`: "Pearl Yard Bermondsey is Greystar's flagship London regeneration — a 1,600-home masterplan on the former Peek Freans biscuit factory site in SE16. Delivered phased between 2025 and late 2027, the scheme is designed by HTA Design (masterplan + landscape) with individual buildings by HTA, Hawkins\\Brown and Arney Fender Katsalidis (AFK). KPF's detailed masterplan retains heritage elements from the Victorian biscuit factory. Freans House was the first building to complete, with residents moving in from January 2026; the pool and sauna open in 2027 as later phases complete. Situated three minutes from Bermondsey station (Jubilee), the scheme is 2 minutes to London Bridge and 4 minutes to Canary Wharf. Studios from £2,670/month, 1-beds from £3,360, 2-beds from £3,905 (April 2026). Pearl Yard is one of two Greystar schemes in Bermondsey, with The Bermondsey Project following at 100 Clements Road. The scheme offers 3-12 month flexible lease terms — uniquely short for Greystar and materially useful for graduate-visa renters with a defined timeline."
- `living_experience`: "Too few reviews on HomeViews for reliable signal (0 as of April 2026 — Freans House only opened January). Operator-reported move-in experience is strong; Greystar's onsite team model is consistent across their portfolio. The pool/sauna opening 2027 means the headline amenity isn't live yet — worth weighting when comparing to Bloom Nine Elms where pools are operational."
- `notable_features`: "3-12 month flexible lease terms (unique within Greystar portfolio); heritage integration of Peek Freans biscuit factory retains industrial character; phased pool + sauna delivery 2027; multi-architect masterplan with buildings by three signature practices; central public park at the heart of the scheme."

**resident_signal**
- `homeviews_score`: undefined
- `homeviews_url`: "https://www.homeviews.com/development/pearl-yard-se16"
- `summary`: "Too few reviews for reliable signal (0 reviews on HomeViews as of April 2026 — Freans House only opened January 2026). Re-check mid-2026 when first cohort reviews land."
- `common_complaints`: []
- `common_praise`: []

**rental.prices** — refresh from V1
- studio: { min: 2670, max: ~3000, per: "month" }
- one_bed: { min: 3360, max: ~3800, per: "month" }
- two_bed: { min: 3905, max: ~4500, per: "month" }
- bills_included: false (standard Greystar model)
- price_transparency: "listed"
- notes: "Verified pearlyardbermondsey.com April 2026. Early-bird 8 weeks rent-free on move-in ready apartments."

**affordability**: **over-budget**. Studio £2,670 exceeds the £2,500 well-affordable threshold; 1-bed £3,360 clearly over the £3,000 stretch envelope. Comparison point — Fizzy Lewisham £1,800-2,100 1-bed is "comfortably-affordable". Pearl Yard is a Pan-Peninsula tier, not a Fizzy tier.

**Sources**
- https://www.pearlyardbermondsey.com/ (April 2026)
- https://www.hawkinsbrown.com/projects/pearl-yard-bermondsey/
- https://www.afkstudios.com/projects/the-bermondsey-project/
- https://nla.london/projects/pearl-yard-bermondsey-building-st
- https://www.greystar.com/business/about-greystar/newsroom/greystar-welcomes-new-residents-to-freans-house-as-pearl-yard-bermondsey-takes-shape
- https://www.homeviews.com/development/pearl-yard-se16

---

### Greystar: `the-bermondsey-project`

**building_quality**
- `epc_rating`: undefined (under construction, no certificate yet).
- `sound_insulation`: `unknown` (not yet occupied).
- `thermal_performance`: `unknown`.
- `layout_notes`: "1,624 homes across multiple buildings including a new 600-student secondary school on site. Configurations range studio through 3-bed. Architect set (HTA, Hawkins\\Brown, AFK) mirrors Pearl Yard."
- `kitchen_quality`: `good` (projected — matches Pearl Yard spec).
- `heating_type`: `communal` (inferred).
- `notes`: "Adjacent sister scheme to Pearl Yard, at 100 Clements Road. First homes Autumn 2025; full completion 2H 2027. Includes on-site secondary school — unusual for BTR."

**amenities** — `overall_tier: premium` (projected)
- pool: true, pool_notes: "Indoor swimming pool confirmed in operator's planning overview."
- gym: true, gym_quality: `unknown` (pre-opening).
- concierge: `24h` (projected — standard Greystar model).
- sky_lounge: true, co_working: true, dining_room: true, cinema_room: unknown.
- rooftop_terrace: true. parking: unknown. bike_storage: true.
- pet_policy: "Pet-friendly expected (Greystar default)."
- other_amenities: ["Private dining rooms", "Roof terraces", "4,700 sqm play space", "On-site secondary school (non-resident amenity)"].

**architecture**
- `architects`: ["HTA", "Hawkins\\Brown", "AFK"].
- `awards`: [].
- `is_signature`: **false** — sister scheme to Pearl Yard, shares masterplan logic.
- `style_notes`: "Large-scale residential block composition integrated with school building. Brick-dominant palette consistent with Bermondsey industrial context."

**long_form** — brief projected versions only (under construction, limits speculative prose).
- `full`: "The Bermondsey Project is Greystar's 1,624-home BTR scheme at 100 Clements Road, SE16, designed by HTA, Hawkins\\Brown and AFK. Backed by a ~£600m debt facility, it includes an indoor swimming pool, multiple gyms, roof terraces, private dining rooms, lounges and 4,700 sqm of play space. A new 600-student secondary school sits within the site — an unusual civic anchor for a BTR development. First homes open autumn 2025; full completion expected 2H 2027. Immediately adjacent to Pearl Yard; together the two schemes give Bermondsey one of the strongest managed-rental pipelines in inner south London."
- `living_experience`: "Under construction — resident signal not yet available."
- `notable_features`: "On-site secondary school integrated into the residential scheme; indoor pool; £600m debt-facility scale; architects HTA + Hawkins\\Brown + AFK (shared with Pearl Yard); 2H 2027 full completion timeline."

**resident_signal**: all fields undefined / empty. `summary: "Under construction; no resident signal yet."`

**rental.prices**: undefined. `price_transparency: "enquire"`. Pricing expected to anchor to Pearl Yard (£2,670-3,905 base) or slightly below given later delivery.

**affordability**: **over-budget** (projected — same tier as Pearl Yard).

**Sources**
- https://greystar-bermondseyproject.com/
- https://www.hawkinsbrown.com/projects/pearl-yard-bermondsey/
- https://www.buildington.co.uk/buildings/9140/england/london-se16/100-clements-road/the-bermondsey-project

---

### Greystar: `ten-degrees`

Caner's current residence — first-party data high confidence. V2 fields were already populated in dataset (see `croydon.ts` lines 289-327). Refresh proposes:

**building_quality** — keep existing (first-party). Confirmed:
- `epc_rating`: undefined (not published; building is electric-heated so EPC likely C-D for unit-level though envelope is new).
- `sound_insulation`: `poor` (first-party confirmed — thin walls are a known issue).
- `thermal_performance`: `average` (electric heating in modular construction).
- `heating_type`: `electric` (confirmed — modular construction constraint).

**amenities** — keep existing, add:
- `other_amenities`: add "Cinema room" (HomeViews reviews mention) and "Sky lounge" (paid booking — complaint theme).

**architecture** — propose populating:
- `architects`: ["HTA Design"] (confirmed per HTA project page).
- `awards`: ["CTBUH Best Tall Residential or Hotel Building — 2022", "Tall Building Awards Winner of all Winners — 2020", "Offsite Awards Best Use of Volumetric — 2020", "WhatHouse Best Exterior Design — 2023"].
- `is_signature`: **false** — the modular construction is an engineering achievement, not an architectural one. Defensible — building is not a destination in its own right, and visually generic beyond the context of "tallest modular in Europe."
- `style_notes`: "Two connected towers of 38 and 44 storeys on a tight Ruskin Square plot. Rhythmic fenestration reveals the modular grid. Exterior cladding palette is restrained — the engineering narrative dominates the architecture."

**long_form** — keep existing (first-party), add Ten Degrees awards context to `notable_features`.

**resident_signal** — refresh scores:
- `homeviews_score`: **4.69** (confirmed April 2026 HomeViews data — up from 3.8 in current dataset, which appears stale or different scale). Across **273 reviews**.
- `homeviews_url`: "https://www.homeviews.com/development/ten-degrees-cr0"
- `summary`: "4.69/5 across 273 reviews (strong confidence). Top praise: reception team, East Croydon proximity, modern fittings. Top complaints: maintenance delay response times, sky lounge booking costs perceived as unreasonable for amenity access, building ageing with scuffed corridors, WiFi outages."
- `common_complaints`: ["Maintenance response times slow", "Sky lounge booking fees", "Corridor wear and carpet maintenance", "WiFi outages", "External event noise (Boxpark)"]
- `common_praise`: ["Reception team consistently helpful", "East Croydon 3-min walk", "Modern fittings", "Gym / cinema / co-working spaces accessible"]

**Note:** The current dataset's `homeviews_score: 3.8` conflicts with HomeViews April 2026 showing 4.69. Either the dataset's number was wrong (typo / different scale) or reviews have materially improved. Given 273 reviews and consistent ≥4.5 pattern across the operator, 4.69 is the correct current value.

**rental.prices** — keep existing (first-party, confirmed by Caner's lease): studio £1,600-1,800, 1-bed £2,100-2,500, 2-bed £2,800-3,200.

**affordability**: **over-budget** (confirmed — Caner pays ~£3k all-in currently, at upper stretch).

**Sources**
- https://www.homeviews.com/development/ten-degrees-cr0
- https://www.hta.co.uk/ten-degrees/
- https://hdawards.org/scheme/ten-degrees/
- https://www.greystar.com/properties/ten-degrees (403 at fetch — operator page changed/migrated)

---

### Greystar: `stratford-mill`

**building_quality**
- `epc_rating`: undefined (under construction).
- `sound_insulation`: `unknown` (not yet occupied).
- `thermal_performance`: `unknown` (new-build expected good).
- `layout_notes`: "247 homes across buildings ranging two to twelve storeys. 205 BTR + 42 SNG affordable. Canalside position on Marshgate Lane."
- `kitchen_quality`: `good` (projected).
- `heating_type`: `communal` (inferred — Hawkins\\Brown design + 2026 completion).
- `notes`: "Topped out October 2025. Autumn 2026 delivery. Operated under Greystar's European Momento sub-brand."

**amenities** — `overall_tier: decent` (smaller scheme, no pool referenced in operator comms)
- pool: false. gym: true, gym_quality: `unknown`.
- concierge: `daytime` (projected — smaller scheme). sky_lounge: unknown. co_working: true.
- dining_room: unknown. cinema_room: false. rooftop_terrace: true (landscaped roof garden per dataset).
- parking: unknown. bike_storage: true. pet_policy: "Pet-friendly expected (Greystar default)."
- other_amenities: ["Landscaped roof garden", "Shared amenity spaces"].

**architecture**
- `architects`: ["Hawkins\\Brown"] (confirmed per BTR News + construction press).
- `awards`: [].
- `is_signature`: **false**.
- `style_notes`: "Canalside brick composition at 2-12 storeys, designed to integrate with Pudding Mill masterplan. Not a landmark silhouette — quietly urban."

**long_form**
- `full`: "Stratford Mill is Greystar's 247-home canalside BTR scheme at Marshgate Lane, Pudding Mill — the second phase of a Lifestory-initiated development that Greystar acquired for £20m in 2023. Designed by Hawkins\\Brown and built by GRAHAM, it delivers 205 professionally managed rental units plus 42 SNG affordable homes across buildings ranging two to twelve storeys. Topped out October 2025, Autumn 2026 delivery. Operated under Greystar's European Momento rental-living sub-brand. Within the Queen Elizabeth Olympic Park influence — 10 minutes walk to Stratford's five-line interchange; adjacent to the City Mill Lock waterway. As a new-delivery Greystar scheme with Fizzy Living parent relationships, it's a strong grad-visa candidate if pricing lands competitively."
- `living_experience`: "Pre-opening — no resident signal. Operational model follows Greystar portfolio standard."
- `notable_features`: "Hawkins\\Brown design; Momento sub-brand (Greystar's European rental label — new to London); canalside position at City Mill Lock; 245-unit scale is mid-size within Greystar portfolio; Autumn 2026 delivery means fresh spec."

**resident_signal**: undefined / empty. `summary: "Under construction; no resident signal yet."`

**rental.prices**: undefined. `price_transparency: "enquire"`. Projection based on Stratford peer BTR (Manhattan Loft Gardens, East Village) and Greystar-direct band: 1-bed £2,200-2,800, studio £1,900-2,300.

**affordability**: **at-budget** (projected — Stratford pricing sits above Canning Town but below Nine Elms premium). Could shift to "stretch" if Greystar prices at Bermondsey-direct levels.

**Sources**
- https://www.greystar.com/business/about-greystar/newsroom/greystar-tops-out-at-stratford-mill-in-east-london
- https://btrnews.co.uk/graham-to-build-greystars-stratford-mill-btr-development/
- https://www.buildington.co.uk/buildings/7832/england/london-e15/14-marshgate-lane/stratford-mill

---

### Greystar: `bloom-nine-elms`

**building_quality**
- `epc_rating`: undefined (not published on operator page).
- `sound_insulation`: `good` (new-build 2020s, no dominant noise complaint in HomeViews).
- `thermal_performance`: `good` (new-build).
- `layout_notes`: "894 apartments across Bloom East + Bloom West. Studios, 1-, 2-, 3-bed and penthouses. Floor-to-ceiling windows, private balconies/winter gardens standard."
- `kitchen_quality`: `good` (premium BTR spec, no specific appliance brand published).
- `heating_type`: `communal` (inferred — Nine Elms district-heating context).
- `notes`: "894-unit Essential Living scheme acquired by Greystar (via Henderson Park JV). Allies and Morrison architects. 12-min walk to Vauxhall; closer to Nine Elms and Battersea Power Station Northern Line stations."

**amenities** — `overall_tier: premium`
- pool: **true**, pool_notes: "Two rooftop swimming pools plus jacuzzi — confirmed HomeViews review signal and operator page."
- gym: true, gym_quality: `good` ("two well-equipped gyms" per HomeViews reviews; 24-hour access with fitness classes).
- concierge: `24h` (Greystar premium model).
- sky_lounge: true (sky lounge bar confirmed), co_working: true, dining_room: true (private dining lounge).
- cinema_room: false (games room + piano room in lieu). rooftop_terrace: true.
- parking: unknown (urban Zone 1). bike_storage: true.
- pet_policy: "Pet-friendly with pet spa on site. Standard Greystar pet fee."
- other_amenities: ["Piano room", "Library", "Meeting rooms", "Pet spa", "Rooftop gardens", "Games room", "Waitrose on-site"].

**architecture**
- `architects`: ["Allies and Morrison"]. Landscape: camlins. Interiors: HBA + Johnson Naylor.
- `awards`: [].
- `is_signature`: **false**. Allies and Morrison is a major London practice and the composition is competent premium, but not a landmark silhouette in the Gasholders / Battersea Power Station / One Nine Elms category.
- `style_notes`: "Allies and Morrison's typical quiet-premium language — brick and glass massing that defers to Nine Elms' more spectacular neighbours. Two-building composition (East + West) with internal amenity courtyards and rooftop pools facing the Thames."

**long_form**
- `full`: "Bloom Nine Elms is Greystar's 894-home BTR flagship on the Thames south bank between Battersea Power Station and Vauxhall. Originally an Essential Living scheme, it's now Greystar + Henderson Park JV. Designed by Allies and Morrison (landscape by camlins, interiors by HBA + Johnson Naylor), the scheme spans two buildings — Bloom East and Bloom West. Amenity stack is unusually deep: two rooftop swimming pools, two well-equipped gyms, 24-hour concierge, sky lounge bar, private dining lounge, library, piano room, games room, meeting rooms, rooftop gardens and a pet spa. Waitrose is on-site at ground level — the amenity that distinguishes Bloom from peer Nine Elms BTR. 12-minute walk to Vauxhall (Victoria Line + National Rail); closer to the two new Northern Line stations at Nine Elms and Battersea Power Station (both opened 2021). Pricing: studios from £2,705, 1-beds from £3,505, 2-beds from £3,685, 3-beds from £5,575."
- `living_experience`: "4.62/5 across 167 HomeViews reviews — strong consistency. Management responsiveness is the single most cited strength (staff member Abdo Dada named across reviews). Complaints are minor: new-tenant information flow could be better; local construction disruption will settle as Nine Elms masterplan completes; traffic busy at peak."
- `notable_features`: "Waitrose on-site at ground level; two rooftop swimming pools with jacuzzi; piano room and library (uncommon in BTR); Zone 1 Nine Elms adjacency with Northern Line at doorstep; Allies and Morrison design; strong resident score (4.62/5) across 167 reviews."

**resident_signal**
- `homeviews_score`: **4.62**
- `homeviews_url`: "https://www.homeviews.com/development/bloom-nine-elms-sw11"
- `summary`: "4.62/5 across 167 reviews (strong confidence). Consistent praise for management (Abdo Dada named), modern facilities, well-maintained communal areas. Complaints minor: move-in portal/key information, local construction noise, traffic."
- `common_complaints`: ["New-tenant app/portal onboarding info", "Local construction disruption (settling as Nine Elms completes)", "Traffic at peak"]
- `common_praise`: ["Management responsiveness", "Rooftop pools and gym facilities", "Co-working quality", "Location convenience", "Modern, clean communal areas"]

**rental.prices** — refresh:
- studio: { min: 2705, max: ~3100, per: "month" }
- one_bed: { min: 3505, max: ~3900, per: "month" }
- two_bed: { min: 3685, max: ~4500, per: "month" }
- three_bed: { min: 5575, max: ~6500, per: "month" }
- bills_included: false
- price_transparency: "listed"
- notes: "Verified bloom-nineelms.co.uk April 2026."

**affordability**: **over-budget**. Studio £2,705 just over £2,500 well-affordable ceiling; 1-bed £3,505 over the £3,000 stretch envelope. Premium Nine Elms tier comparable to Pearl Yard — above Caner's working range.

**Sources**
- https://bloom-nineelms.co.uk/
- https://www.homeviews.com/development/bloom-nine-elms-sw11
- https://nla.london/projects/bloom-nine-elms
- https://hendersonpark.com/henderson-park-greystar-unveil-bloom-nine-elms/

---

### Greystar: `mylo-nine-elms`

**building_quality**
- `epc_rating`: undefined.
- `sound_insulation`: `good` (new-build early 2020s).
- `thermal_performance`: `good`.
- `layout_notes`: "647 units across multiple towers. 1-, 2-, 3-bed plus penthouses. All units have private balcony, winter garden or terrace. Telford Homes delivery, completed ~2022."
- `kitchen_quality`: `good`.
- `heating_type`: `communal` (inferred).
- `notes`: "Mylo sub-brand positions this as a tier below Bloom — same operator, smaller amenity stack, lower pricing."

**amenities** — `overall_tier: strong`
- pool: false. gym: true, gym_quality: `good` (private resident gym confirmed).
- concierge: `24h`. sky_lounge: unknown. co_working: true (lounge + private dining).
- dining_room: true (private hire). cinema_room: false. rooftop_terrace: true (communal roof gardens).
- parking: unknown. bike_storage: true. pet_policy: "Pets welcomed."
- other_amenities: ["Communal roof gardens", "Private dining lounge", "Private gym", "Corporate let availability"].

**architecture**
- `architects`: undefined (Telford Homes delivery; architect not publicly credited on operator page).
- `awards`: []. `is_signature`: **false**.
- `style_notes`: "Functional premium BTR across multiple towers — not a signature composition. Standard Nine Elms masterplan contribution."

**long_form**
- `full`: "Mylo Nine Elms Point is Greystar's 647-home BTR near Vauxhall — Telford Homes build, completed ~2022. Positioned as Greystar's tier below Bloom: same professional operator and similar quality level, but smaller amenity stack and lower pricing. Amenities include a private gym, 24/7 lounge, private hire dining space, and communal roof gardens. All units have private balconies, winter gardens or terraces. Pets welcomed. Long-term and short-term leases plus corporate let availability — unusually flexible within Greystar direct portfolio. Explicit 2.66x income multiple stated on operator page. Nine Elms tube (Northern Line) adjacent; Vauxhall Victoria Line 12 minutes walk."
- `living_experience`: "4.32/5 across 62 HomeViews reviews (moderate confidence due to lower review count). Management and maintenance staff consistently praised. Infrastructure complaints (lift breakdowns, trash chute malfunctions) more prominent than at Bloom — smaller scheme, but operational issues trend higher in reviews. Train noise from nearby tracks affects units with windows open. Transient resident mix (short-term + corporate lets) reduces community cohesion per some reviews."
- `notable_features`: "Tier-below Bloom positioning (same Greystar quality at lower price); short-term and corporate lets explicitly available; 2.66x income multiple on operator page (low by London standard); Nine Elms Point location adjacent to both Northern and Victoria lines."

**resident_signal**
- `homeviews_score`: **4.32**
- `homeviews_url`: "https://www.homeviews.com/development/mylo-at-nine-elms-sw8"
- `summary`: "4.32/5 across 62 reviews (moderate confidence — smaller sample than Bloom). Management praised; infrastructure issues (lifts, chutes) surface more. Train noise is the specific location complaint."
- `common_complaints`: ["Lift breakdowns", "Trash chute malfunctions", "Train noise with windows open", "Transient resident mix reduces community feel", "Rent increase communication"]
- `common_praise`: ["Responsive management and maintenance", "Location and transport links", "Gym + concierge + communal spaces", "Pet-friendly policies", "Modern building design"]

**rental.prices** — no fresh data from operator page (fetch failed at 404). Dataset carries operator-default bands; propose refresh via Rightmove query in follow-up. Estimated 2026: studio £2,200-2,500, 1-bed £2,600-3,000, 2-bed £3,200-3,800. `price_transparency: "listed"` via Rightmove.

**affordability**: **stretch** to **over-budget**. 1-bed £2,600-3,000 just at the £3,000 stretch ceiling; studios may land at-budget. More affordable than Bloom but still Nine-Elms-tier pricing.

**Sources**
- https://nineelmspoint.mylo-london.com/
- https://www.homeviews.com/development/mylo-at-nine-elms-sw8
- https://www.greystar.com/properties/london-england/mylo-nine-elms

---

### Fizzy: `fizzy-lewisham`

Dataset operator string is `"Greystar"` — **propose changing to `"Fizzy Living (Greystar)"`** for consistency with other Fizzy buildings and for correct operator-level helpers behaviour.

**building_quality**
- `epc_rating`: undefined (not published — 2024 completion should be B minimum per Part L).
- `sound_insulation`: `good` (2024 new-build; no dominant noise complaint in 382 reviews).
- `thermal_performance`: `good` (new-build, Part L 2022+).
- `layout_notes`: "184 units across ~12 storeys. 1- and 2-bed apartments with stunning views (higher floors face Lewisham station). Modern specification; compact but functional layouts typical of post-2020 BTR."
- `kitchen_quality`: `good` (standard Fizzy spec — full kitchen, dishwasher, integrated appliances).
- `heating_type`: `communal` (inferred — new-build Watkin Jones BTR).
- `notes`: "Watkin Jones construction, CBRE fund, Greystar/Fizzy operator. 15th floor rooftop terrace is the amenity headline. Landmark building next door to Lewisham DLR/Southeastern station."

**amenities** — `overall_tier: decent`
- pool: false. gym: false (no onsite gym — significant for Caner given boxing/strength training).
- concierge: `daytime` (on-site property manager model, not 24h).
- sky_lounge: false. co_working: true. dining_room: false. cinema_room: false.
- rooftop_terrace: true (15th floor). parking: unknown (searchable filter on site but unconfirmed).
- bike_storage: true (secure). pet_policy: "Pet-friendly — £75/month per pet plus professional cleaning + fumigation of flat at end of tenancy (noted in HomeViews reviews as a surprise cost)."
- other_amenities: ["Free superfast fibre broadband", "CCTV", "Video door entry", "On-site property manager"].

**architecture**
- `architects`: undefined (Watkin Jones typically uses in-house design team; no architect credited publicly).
- `awards`: []. `is_signature`: **false**.
- `style_notes`: "Modern 12-storey composition with yellow accent cladding panels. Gateway position at Lewisham station complex. Functional not distinctive."

**long_form**
- `full`: "Fizzy Lewisham is a 184-unit Fizzy Living BTR scheme at River Mill Two, SE13 5FR, completed March 2024 by Watkin Jones construction for a CBRE fund. Managed by Greystar under the Fizzy sub-brand since Greystar's acquisition of MTVH's Fizzy stake (December 2021). Next door to Lewisham DLR + Southeastern station — DLR to Canary Wharf in under 20 minutes, Southeastern to Charing Cross in under 20 minutes. The 15th floor rooftop terrace is the amenity headline; there's no onsite gym, so residents need external gym access (Lewisham has reasonable commercial gym options). 1-bed from £1,800/month, 2-bed from £2,100+, per Fizzy filter UI April 2026. Fizzy's Homeppl referencing with Open Banking is the realistic pathway for graduate-visa renters without UK credit history."
- `living_experience`: "4.41/5 across 382 HomeViews reviews — one of the most-reviewed Fizzy buildings. Management team (Tyrra, Jonathan named) consistently praised. Main complaints cluster around security (entrance lock failures, parcel thefts), hidden costs (pet fees, unexpected maintenance charges), and intermittent maintenance issues (hot water outages, door gaps). The management is responsive but the building has operational frictions typical of a new-build settling in."
- `notable_features`: "Lewisham station at doorstep (DLR + Southeastern two-product redundancy); 15th floor rooftop terrace; no onsite gym (trade-off against lower price point); 1-bed £1,800 entry is one of the lowest in the Greystar/Fizzy portfolio; March 2024 completion makes it among the freshest in the portfolio."

**resident_signal**
- `homeviews_score`: **4.41**
- `homeviews_url`: "https://www.homeviews.com/development/fizzy-lewisham-se13"
- `summary`: "4.41/5 across 382 reviews (strong confidence — largest sample of any Fizzy building). Management team consistently praised. Security (entrance locks, parcels) and hidden pet/maintenance costs are the persistent complaint cluster."
- `common_complaints`: ["Entrance lock failures and parcel thefts", "Pet fee structure £75/month + end-of-tenancy fumigation", "Hot water outages (multiple reports over 2 months)", "Door gaps at apartment thresholds", "Inflated base pricing perception"]
- `common_praise`: ["Management responsiveness (Tyrra, Jonathan named)", "Station proximity (DLR + Southeastern next door)", "Modern apartment finishes", "Rooftop terrace views", "Parcel storage convenience"]

**rental.prices** — refresh:
- studio: undefined (Lewisham is 1-bed + 2-bed only per operator page).
- one_bed: { min: 1800, max: 2100, per: "month" }  *(up from V1 £1,280)*
- two_bed: { min: 2100, max: 2500, per: "month" }
- bills_included: false (broadband is included)
- price_transparency: "listed"
- notes: "Verified fizzyliving.com/locations/lewisham April 2026. V1 captured £1,280 for 1-bed — that was accurate to 2024-early-2025 but has risen materially. Base rent does NOT include £75/month per-pet fee or end-of-tenancy fumigation."

**affordability**: **comfortably-affordable**. 1-bed £1,800-2,100 sits comfortably inside £2,500 well-affordable ceiling and well below £3,000 stretch. **Remains the strongest affordability play in the Greystar portfolio** alongside other Fizzy buildings.

**Sources**
- https://fizzyliving.com/locations/lewisham
- https://www.homeviews.com/development/fizzy-lewisham-se13
- https://www.rightmove.co.uk/properties/174348767

---

### Fizzy: `fizzy-stepney-green`

**building_quality**
- `epc_rating`: undefined.
- `sound_insulation`: `average` (mixed signal — some private/quiet reviews, some boiler/fridge noise in studios).
- `thermal_performance`: `poor` — **warning signal**: multiple HomeViews reviews report "over ten instances of no heating or hot water in six months." Infrastructure reliability issue, not efficiency. Likely indicates ageing communal system or contractor dispute (reviews mention Fizzy "blaming L&Q").
- `layout_notes`: "63 one-, two- and three-bed flats. Courtyard building with yellow balconies (the design signature). 'Rentysomethings' 25-35 target demographic."
- `kitchen_quality`: `good` (standard Fizzy spec).
- `heating_type`: `communal` (inferred; infrastructure issues suggest this is the source of the heating-outage complaints).
- `notes`: "PRS Development of the Year at Inside Housing Top 60 — but caveat the heating/hot water reliability issue in current HomeViews reviews. The award reflects 2012-era launch prestige; operational reality 2025-2026 is more contested."

**amenities** — `overall_tier: basic`
- pool: false. gym: false. concierge: `none` (on-site property manager model).
- sky_lounge: false. co_working: false. dining_room: false. cinema_room: false.
- rooftop_terrace: false (courtyard not rooftop). parking: unknown.
- bike_storage: true (secure). pet_policy: "Pet-friendly, standard fee structure."
- other_amenities: ["Courtyard with views of City & Canary Wharf", "Free superfast fibre broadband", "Shandy Park opposite"].

**architecture**
- `architects`: undefined (not publicly credited; likely Assael given BTR pattern but unverified).
- `awards`: ["PRS Development of the Year — Inside Housing Top 60"].
- `is_signature`: **false**.
- `style_notes`: "Yellow-balconied courtyard block opposite Shandy Park. Visible colour-accent identity within Stepney Green's post-regeneration grain."

**long_form**
- `full`: "Fizzy Stepney Green is Fizzy Living's 63-unit award-winning BTR scheme at the edge of the Ocean Estate regeneration, 5 minutes from Stepney Green tube. Launched in 2012 as Fizzy's flagship and winner of PRS Development of the Year at Inside Housing's Top 60 awards. Courtyard composition with yellow-accent balconies facing the City and Canary Wharf. Now managed by Greystar under the Fizzy sub-brand. 1-beds listed at £1,800-£2,100 per Fizzy filter UI April 2026. The amenity package is basic — no gym, no concierge, no pool. Strong transport (Central + District + H&C at nearby Mile End) and the Stepney Green tube 5 min walk."
- `living_experience`: "4.42/5 across 191 HomeViews reviews — strong overall score. But a persistent and serious complaint cluster around heating and hot water failures — one reviewer reports over ten outage instances in six months. The underlying cause may be Fizzy/L&Q contractor boundaries (reviews mention blame-shifting between the two). Security issues — entrance door failures, break-ins and parcel thefts — are the other notable cluster. Management is praised for responsiveness when issues arise, but the underlying infrastructure reliability is the single biggest risk-signal in the Fizzy portfolio."
- `notable_features`: "PRS Development of the Year (Inside Housing Top 60); yellow-balconied courtyard design; 63-unit small scheme makes on-site manager model intimate; Stepney Green tube + nearby Mile End three-line interchange; **material risk — recurring heating/hot water outages in resident reviews.**"

**resident_signal**
- `homeviews_score`: **4.42**
- `homeviews_url`: "https://www.homeviews.com/development/fizzy-stepney-green-e1"
- `summary`: "4.42/5 across 191 reviews (strong confidence). Design and management praised — but heating/hot water reliability complaints are persistent and serious. Infrastructure issues cluster around Fizzy/L&Q contractor boundary — multiple residents report 10+ outages in 6 months. Single biggest operational risk-signal in the Fizzy portfolio."
- `common_complaints`: ["Heating and hot water outages (recurring — 10+ in 6 months reported)", "Entrance door/security failures", "Package thefts / break-ins", "Poor communication about infrastructure issues (blame shifting Fizzy↔L&Q)"]
- `common_praise`: ["Management responsiveness when issues arise", "Modern design and comfort", "Safety and privacy within units", "Location (Stepney Green tube proximity, Shandy Park opposite)"]

**rental.prices** — refresh:
- one_bed: { min: 1800, max: 2100, per: "month" }  *(down-band update from V1 £1,984; filter UI shows band)*
- two_bed: { min: 2100, max: 2500, per: "month" }
- three_bed: { min: 2500, max: ~2800, per: "month" }
- bills_included: false
- price_transparency: "listed"
- notes: "Verified fizzyliving.com/locations/stepney-green April 2026."

**affordability**: **comfortably-affordable**. 1-bed sits inside £2,500 well-affordable.

**Sources**
- https://fizzyliving.com/locations/stepney-green
- https://www.homeviews.com/development/fizzy-stepney-green-e1
- https://www.insidehousing.co.uk/insight/top-60-private-rented-sector-developments-of-the-year-44393

---

### Fizzy: `fizzy-poplar`

**building_quality**
- `epc_rating`: undefined.
- `sound_insulation`: `average` (mixed — antisocial behaviour external noise is a complaint cluster; interior noise not dominant).
- `thermal_performance`: `poor` — **warning**: reviews consistently report the building "gets very hot very quickly" in summer with trapped heat in corridors. Overheating is the dominant thermal complaint (Fizzy Stepney Green's inverse).
- `layout_notes`: "1-, 2- and 3-bed pet-friendly apartments. Lindfield Street, tree-lined facing Bartlett Park. Launched 2012 as early Fizzy scheme."
- `kitchen_quality`: `good`.
- `heating_type`: `communal` (inferred).
- `notes`: "Tree-lined street overlooking Bartlett Park — the main location strength. 28-min DLR to Bank from All Saints/Poplar stations. Overheating is the dominant reported issue — material consideration for summer living quality."

**amenities** — `overall_tier: decent`
- pool: false. gym: **true** (free membership to on-site gym — stronger than Lewisham/Stepney Green). gym_quality: `average` (not described in detail).
- concierge: `daytime` (concierge service confirmed, not 24h).
- sky_lounge: false. co_working: false. dining_room: false. cinema_room: false.
- rooftop_terrace: false. parking: true (added cost). bike_storage: true (storage lockers — added cost).
- pet_policy: "Pet-friendly, standard fee structure."
- other_amenities: ["Free superfast fibre broadband", "On-site gym membership free", "Bartlett Park opposite"].

**architecture**
- `architects`: undefined (original Thames Valley Housing development, 2012; architect not publicly credited on operator page).
- `awards`: []. `is_signature`: **false**.
- `style_notes`: "Modest mid-rise block on Lindfield Street, facing Bartlett Park. 2012-era Fizzy aesthetic — functional and quiet."

**long_form**
- `full`: "Fizzy Poplar is one of Fizzy Living's original 2012 buildings on Lindfield Street, E14 — a tree-lined setting overlooking Bartlett Park. 1-, 2- and 3-bed pet-friendly apartments. The amenity edge over other Fizzy buildings is the on-site gym with free membership (Stepney Green and Lewisham have no gym). 28-minute DLR from All Saints or Poplar stations to Bank; 17-minute walk to Thames. Now managed by Greystar via the Fizzy sub-brand. 1-bed from £1,800-£2,100 per filter UI April 2026. The headline risk is summer overheating — trapped heat in corridors is the dominant HomeViews complaint."
- `living_experience`: "4.21/5 across 114 HomeViews reviews — lowest Fizzy score, though still above 4.0. Management and maintenance praised. Three complaint clusters dominate: summer overheating ('gets very hot very quickly'), external antisocial behaviour at night ('people gathering around drinking and yelling till late'), and building maintenance (lift outages, common-area cleanliness). This is the Fizzy building where area + building are least distinguishable — Poplar's transitional character shows up in the review pattern."
- `notable_features`: "On-site gym with free membership (unique within Fizzy portfolio for amenity inclusion); Bartlett Park directly opposite; All Saints DLR 5 min walk; **material risk — summer overheating dominates thermal reviews**; original 2012 Fizzy scheme heritage."

**resident_signal**
- `homeviews_score`: **4.21**
- `homeviews_url`: "https://www.homeviews.com/development/fizzy-poplar-e14"
- `summary`: "4.21/5 across 114 reviews (strong confidence, lowest Fizzy score). Management praised. Summer overheating, external antisocial behaviour and lift/maintenance issues are the three persistent complaint clusters."
- `common_complaints`: ["Summer overheating in apartments and corridors", "External antisocial behaviour (late-night gatherings)", "Lift outages and common-area cleanliness", "Limited maintenance scheduling"]
- `common_praise`: ["Management and maintenance team responsiveness", "Modern apartment finishes and appliances", "DLR access (All Saints + Poplar)", "Bartlett Park proximity", "Free on-site gym membership"]

**rental.prices** — refresh:
- one_bed: { min: 1800, max: 2100, per: "month" }  *(down-band update from V1 £2,155)*
- two_bed: { min: 2100, max: 2500, per: "month" }
- bills_included: false (broadband included)
- price_transparency: "listed"
- notes: "Verified fizzyliving.com/locations/poplar April 2026. Parking and storage lockers are added cost."

**affordability**: **comfortably-affordable**.

**Sources**
- https://fizzyliving.com/locations/poplar
- https://www.homeviews.com/development/fizzy-poplar-e14
- https://www.greystar.com/properties/london-england/fizzy-poplar

---

### Fizzy: `fizzy-canning-town`

**building_quality**
- `epc_rating`: undefined.
- `sound_insulation`: `good` (2012 Vermilion Tower, Part E compliant; some motorway-facing units noted but not dominant).
- `thermal_performance`: `average` — residents report units get "stuffy" in warmer months due to no air conditioning, but not severe overheating like Poplar.
- `layout_notes`: "15-storey Vermilion Tower, ~140 units (reported estimate). 1-, 2- and 3-bed apartments all with balconies. Private courtyard with kids' play area at ground."
- `kitchen_quality`: `good`.
- `heating_type`: `communal` (inferred — 2012 Vermilion Tower BTR).
- `notes`: "Vermilion Tower designed by CZWG (per dataset architect field and CZWG project page). 5 min walk to Canning Town (Jubilee + DLR + Elizabeth Line via Custom House 1 stop)."

**amenities** — `overall_tier: decent`
- pool: false. gym: false (no on-site gym explicitly; Canning Town has commercial options). concierge: `daytime` (inferred — on-site property manager).
- sky_lounge: false. co_working: false. dining_room: false. cinema_room: false.
- rooftop_terrace: false. parking: true (added cost — basement, reviews note "quite expensive").
- bike_storage: true. pet_policy: "Pet-friendly, added cost."
- other_amenities: ["Private courtyard + kids' play area", "Free superfast fibre broadband", "Gated secure entrance"].

**architecture**
- `architects`: ["CZWG Architects"] (confirmed per CZWG project page on Vermilion Rathbone Market Phase 1).
- `awards`: []. `is_signature`: **false** (CZWG is notable but Vermilion Tower is competent not landmark).
- `style_notes`: "15-storey red-accented tower within the wider Vermilion/Rathbone Market scheme. CZWG's mid-2000s BTR aesthetic — colour-accented cladding panels, compact massing."

**long_form**
- `full`: "Fizzy Canning Town occupies the 15-storey Vermilion Tower at 5 Barking Road, E16 1EH — part of the wider Vermilion / Rathbone Market Phase 1 development designed by CZWG Architects. ~140 units across 1-, 2- and 3-bed apartments, all with balconies. The private courtyard with kids' play area is the amenity headline — no on-site gym, no concierge beyond the daytime on-site manager model. 5 minutes walk to Canning Town station (Jubilee + DLR, with Elizabeth Line at Custom House one DLR stop away). Managed by Greystar since Fizzy acquisition December 2021. Pricing: studio-to-1-bed band £1,500-£2,100, 2-bed £2,100-£2,500 per filter UI April 2026."
- `living_experience`: "4.45/5 across 203 HomeViews reviews — top-rated development in Canning Town on HomeViews with 100% recommendation rate. Management and maintenance team consistently praised for professionalism. Modern finishes, clean communal areas, strong transport links, community feel. Complaints cluster around parking cost/availability, bin-room odours, lack of AC in warm months, and motorway-facing unit noise."
- `notable_features`: "Top-rated Canning Town development on HomeViews (100% recommendation across 203 reviews); 15-storey Vermilion Tower by CZWG; 5-minute walk to Canning Town station with 3-line access; private courtyard with play area (family-friendly positioning); gated secure entrance creates strong community-feel signal."

**resident_signal**
- `homeviews_score`: **4.45**
- `homeviews_url`: "https://www.homeviews.com/development/fizzy-canning-town-e16"
- `summary`: "4.45/5 across 203 reviews (strong confidence). Top-rated Canning Town development on HomeViews with 100% recommendation rate. Management praised, design praised, transport praised. Minor complaints: parking cost, bin room odour, lack of AC, motorway-noise for some units."
- `common_complaints`: ["Parking availability and cost (basement expensive)", "Bin room odours", "No air conditioning (stuffy summers)", "Motorway-facing units noise"]
- `common_praise`: ["Exceptional management and maintenance", "Modern design and well-planned spaces", "Canning Town station proximity (Jubilee + DLR + Elizabeth 1 stop)", "Community feel and secure gated entrance", "Hallsville Quarter amenities nearby (supermarkets, gyms, cafes)"]

**rental.prices** — refresh:
- studio: { min: 1500, max: 1800, per: "month" }
- one_bed: { min: 1800, max: 2100, per: "month" }
- two_bed: { min: 2100, max: 2500, per: "month" }
- bills_included: false (broadband included)
- price_transparency: "listed"
- notes: "Verified fizzyliving.com/locations/canning-town April 2026. Parking added cost, pet added cost."

**affordability**: **comfortably-affordable**. Studio £1,500 well-under; 1-bed £1,800 comfortably. Lowest entry point in Fizzy portfolio alongside East 16.

**Sources**
- https://fizzyliving.com/locations/canning-town
- https://www.homeviews.com/development/fizzy-canning-town-e16
- https://czwg.com/projects/residential-and-mixed-use/vermilion-rathbone-market-phase-1/

---

### Fizzy: `fizzy-east-16`

**building_quality**
- `epc_rating`: undefined (completed Autumn 2022; Part L 2013 baseline at time of approval but likely B minimum on unit EPCs).
- `sound_insulation`: `average` (external construction noise is complaint; studio-specific appliance noise (boiler/fridge) reported).
- `thermal_performance`: `good` (Autumn 2022 new-build).
- `layout_notes`: "292 apartments across two 25-storey towers within Brunel Street Works (wider 975-home scheme). Studios from approx 40sqm, plus 1-, 2- and 3-bed. Balconies/winter gardens; podium gardens at mid-level."
- `kitchen_quality`: `good` (SUNA Interior Design residents' amenity areas; apartment fit-out standard Fizzy spec).
- `heating_type`: `communal` (inferred — 2022 new-build at this scale).
- `notes`: "Two 25-storey towers by GRID Architects + Cartwright Pickard within wider Brunel Street Works (Opal JV). Autumn 2022 completion. SUNA Interior Design for amenity areas."

**amenities** — `overall_tier: decent`
- pool: false. gym: true (residents' gym confirmed), gym_quality: `average` (standard BTR gym not flagship).
- concierge: `daytime` (on-site community manager). sky_lounge: false. co_working: true (co-working suites + meeting rooms).
- dining_room: false. cinema_room: false. rooftop_terrace: false (podium gardens mid-level).
- parking: true (added cost). bike_storage: true (cycle storage).
- pet_policy: "Pet-friendly (additional cost)."
- other_amenities: ["Garden podium deck", "The F club community app", "The Pawder Room (pet grooming)", "Lounges + meeting rooms"].

**architecture**
- `architects`: ["GRID Architects", "Cartwright Pickard"] (confirmed per Archello + Cartwright Pickard project page).
- `awards`: []. `is_signature`: **false** (competent 25-storey composition within larger masterplan, not standalone landmark).
- `style_notes`: "Two 25-storey towers marking the western edge of Brunel Street Works. Modern metallic-cladding expression. The tower pair creates a gateway silhouette from Silvertown Way."

**long_form**
- `full`: "Fizzy East 16 is Fizzy Living's 292-apartment BTR at 15 Silvertown Way, E16 1LL — two 25-storey towers within the wider 975-home Brunel Street Works development (Opal JV of Thames Valley Housing, Galliford Try and Fizzy Living, now Greystar-operated). Designed by GRID Architects with Cartwright Pickard; amenity areas by SUNA Interior Design. Completed Autumn 2022. Studios from £1,500, 1-beds from £1,800, 2-beds from £2,100 per Fizzy filter UI April 2026. Amenity package: residents' gym, co-working suite, meeting rooms, podium garden deck, The F club community app, The Pawder Room pet grooming space. 5 minutes walk to Canning Town station (Jubilee + DLR + Elizabeth via Custom House). The newest and largest Fizzy building — strong grad-visa target at the low entry point."
- `living_experience`: "4.40/5 across 149 HomeViews reviews — strong score. Management responsive ('lightning-fast maintenance tickets'), modern design, community vibe and on-site security team consistently praised. Main complaints: weekend construction noise from adjacent Brunel Street Works phases still completing, minor appliance noise in studio apartments (boilers/fridges), and pricing value concerns (management counters that amenities justify the pricing)."
- `notable_features`: "Largest Fizzy building (292 units); two 25-storey towers designed by GRID + Cartwright Pickard; the only Fizzy with a community app (The F club); podium garden deck; SUNA-designed amenity areas; strong HomeViews score (4.40/5 across 149 reviews)."

**resident_signal**
- `homeviews_score`: **4.40**
- `homeviews_url`: "https://www.homeviews.com/development/fizzy-east16-e16"
- `summary`: "4.40/5 across 149 reviews (strong confidence). Management, location, design and community vibe consistently praised. Complaints minor: construction noise from neighbouring Brunel Street Works phases, studio appliance sounds, pricing value."
- `common_complaints`: ["Weekend construction noise from adjacent phases", "Studio appliance noise (boilers, fridges)", "Pricing value perceptions"]
- `common_praise`: ["Lightning-fast maintenance responsiveness", "Canning Town station proximity", "Modern design and recent upgrades", "Sense of community + onsite team", "24/7 security"]

**rental.prices** — refresh:
- studio: { min: 1500, max: 1991, per: "month" }  *(per V1 plus filter UI)*
- one_bed: { min: 1800, max: 2100, per: "month" }
- two_bed: { min: 2100, max: 2500, per: "month" }
- bills_included: false (broadband included)
- price_transparency: "listed"
- notes: "Verified fizzyliving.com/locations/east-16 April 2026. Buildington confirms 292 units autumn 2022."

**affordability**: **comfortably-affordable**. Studio £1,500 well-under; 1-bed £1,800 comfortably.

**Sources**
- https://fizzyliving.com/locations/east-16
- https://www.homeviews.com/development/fizzy-east16-e16
- https://archello.com/project/brunel-street-works
- https://www.cartwrightpickard.com/housing/brunel-street-works-silvertown-way/

---

## Sources (consolidated)

- https://www.pearlyardbermondsey.com/ (April 2026)
- https://greystar-bermondseyproject.com/
- https://www.greystar.com/properties/london-england/mylo-nine-elms
- https://www.greystar.com/business/about-greystar/newsroom/greystar-tops-out-at-stratford-mill-in-east-london
- https://www.greystar.com/business/about-greystar/newsroom/greystar-welcomes-new-residents-to-freans-house-as-pearl-yard-bermondsey-takes-shape
- https://bloom-nineelms.co.uk/
- https://nineelmspoint.mylo-london.com/
- https://fizzyliving.com/locations/lewisham
- https://fizzyliving.com/locations/stepney-green
- https://fizzyliving.com/locations/poplar
- https://fizzyliving.com/locations/canning-town
- https://fizzyliving.com/locations/east-16
- https://www.homeviews.com/company/fizzy-living
- https://www.homeviews.com/development/pearl-yard-se16
- https://www.homeviews.com/development/ten-degrees-cr0
- https://www.homeviews.com/development/bloom-nine-elms-sw11
- https://www.homeviews.com/development/mylo-at-nine-elms-sw8
- https://www.homeviews.com/development/fizzy-lewisham-se13
- https://www.homeviews.com/development/fizzy-stepney-green-e1
- https://www.homeviews.com/development/fizzy-poplar-e14
- https://www.homeviews.com/development/fizzy-canning-town-e16
- https://www.homeviews.com/development/fizzy-east16-e16
- https://www.hta.co.uk/ten-degrees/
- https://hdawards.org/scheme/ten-degrees/
- https://www.hawkinsbrown.com/projects/pearl-yard-bermondsey/
- https://www.afkstudios.com/projects/the-bermondsey-project/
- https://nla.london/projects/pearl-yard-bermondsey-building-st
- https://nla.london/projects/bloom-nine-elms
- https://czwg.com/projects/residential-and-mixed-use/vermilion-rathbone-market-phase-1/
- https://archello.com/project/brunel-street-works
- https://www.cartwrightpickard.com/housing/brunel-street-works-silvertown-way/
- https://btrnews.co.uk/graham-to-build-greystars-stratford-mill-btr-development/
- https://www.insidehousing.co.uk/insight/top-60-private-rented-sector-developments-of-the-year-44393
- https://urbanliving.news/build-to-rent/greystar-buys-20-million-east-london-site-from-lifestory/

---

## Unclear / deferred

### Pricing discrepancies vs V1
- **Fizzy Lewisham** V1 = £1,280 (2024 data); V2 = £1,800-£2,100 (filter UI April 2026). Material rise — either V1 was an opening-promotional price or Fizzy has repriced significantly with the 2025 lettings cycle. Recommend flagging in notes.
- **Fizzy Stepney Green** V1 = £1,984; V2 = £1,800-£2,100 band (listed via filter). Roughly consistent.
- **Fizzy Poplar** V1 = £2,155; V2 = £1,800-£2,100. V1 may have been 2-bed figure conflated to 1-bed. Refresh to the lower band.

### EPC ratings unobtained
None of the 11 buildings publish EPC on operator pages. Follow-up: address-level query on find-energy-certificate.service.gov.uk for:
- Pearl Yard Freans House (specific block, not masterplan)
- Bloom East / Bloom West (separate certificates)
- Fizzy addresses are old enough (2012 for Poplar/Stepney/Canning Town) that EPC may return D-C range rather than the A-B of post-2020 builds.

### Operator string inconsistency
- `fizzy-lewisham` has `operator: "Greystar"` but is a Fizzy-branded building. All other Fizzy buildings use `"Fizzy Living (Greystar)"` or `"Fizzy Living (Greystar subsidiary)"`. Propose normalising to `"Fizzy Living (Greystar)"` for consistency and correct helper-defaults routing.
- `fizzy-canning-town` uses `"Fizzy Living (Greystar subsidiary)"` — helpers.ts alias resolves this to `"fizzy living (greystar)"` so functionally identical, but worth normalising the string.

### Buildings mentioned in brief but absent/ambiguous
- **Chapter Living**: Greystar's student brand (PBSA), not BTR — correctly absent from Flatbrowser BTR dataset. No action.
- **Sailmakers (Canary Wharf)**: Brief listed as "Greystar Canary Wharf". Sailmakers was operated by Rockwell/Native, not Greystar direct per recent search — not currently a Greystar asset. No action, no addition.
- **Fizzy Walthamstow, Hayes, Silvertown, Epsom**: Present on fizzyliving.com/locations (operator has 8 buildings); Flatbrowser carries 5. The three not in dataset are outside the Zone 1-3 East London core; `data-schema.md` scope rules likely excluded them. Confirm with user whether any should be added (Silvertown is Royal Docks area — might fit `royal-wharf-and-docks` area).

### The Bermondsey Project live date nuance
- Dataset says "first homes autumn 2025" and "full completion 2H 2027". Greystar newsroom confirms topping-out and phased delivery but resident-pricing intel is embargoed until closer to opening. Pricing + EPC blocks remain projected.

### Ten Degrees HomeViews score correction
- Dataset currently shows `homeviews_score: 3.8`. April 2026 HomeViews page shows **4.69/5 across 273 reviews**. Either the dataset value was stale (HomeViews raised its scoring recalculation, or residents' sentiment improved materially) or a scale/typo error. The correct current value is 4.69. Propose overwriting with source citation.
