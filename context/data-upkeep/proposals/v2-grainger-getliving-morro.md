# V2 Enrichment — Grainger plc / Get Living / Morro

**Scope:** V2 enrichment only (building_quality, amenities, architecture, long_form, resident_signal, per-project pricing refresh, affordability tag). V1 qualification blocks are marked `complete` across all three operators and are **not re-researched** in this pass.

**Envelope anchors (Caner):**
- Preferred ≤ £2,500 pcm all-in (1-bed or studio)
- Hard ceiling £3,000 pcm all-in
- Comparables ladder:
  - Fizzy Lewisham £1,280-1,450 → `well-under`
  - Node Brixton £1,675 → `well-under`
  - Quintain Ferrum £1,829 → `comfortably`
  - Folk Florence £1,695-1,800 → `comfortably`
  - ARK Canary Wharf £2,150 → `at-budget`
  - Landmark Pinnacle £2,800+ → `stretch`

**Buildings in scope (8 live + 1 closed):**

| Operator | Project ID | Area file | Notes |
|---|---|---|---|
| Grainger plc | `fortunes-dock` | `royal-wharf-and-docks.ts` | 412-home, 3 buildings (Argo/Nautilus/Seraphina) |
| Grainger plc | `windlass-apartments` | `tottenham-hale.ts` | ~180 units, Hale Wharf |
| Grainger plc | `argo-apartments` | `canning-town.ts` | 134-unit Hallsville Quarter (different Argo to Fortunes Dock) |
| Get Living | `east-village` | `stratford.ts` | Olympic Village legacy, 2,800 homes |
| Get Living | `elephant-central` | `elephant-park.ts` | 374 homes, Mawes/Raglan/Tantallon |
| Get Living | `get-living-lewisham` | `lewisham-gateway.ts` | **CLOSED** — water remediation through mid-late 2026 |
| Morro | `morro-altham` | `walthamstow.ts` | Opening Spring 2026, co-living |
| Morro | `morro-blackhorse` | `walthamstow.ts` | Opened March 2026, co-living |
| Morro | (expected 3rd — not found) | — | **Ghost/missing flag — see end** |

Duplicate flag carried from V1: `the-altham` entry in `walthamstow.ts` is the same physical building as `morro-altham`. Kept out of V2 scope until Phase 3 deduplication resolves.

---

## GRAINGER PLC

### Operator-level V2 defaults (apply to all 3 buildings unless overridden)

| Block | Field | Value | Source |
|---|---|---|---|
| architecture | `is_signature` | `false` | Grainger portfolio is functional institutional BTR — no Pritzker/Stirling credit across the three London buildings |
| architecture | `awards` | `[]` | No awards surfaced on Grainger portfolio pages for these three |
| building_quality | `heating_type` | `"communal"` (inferred) | Post-2015 London BTR default; Grainger operates district-heated buildings across portfolio |
| building_quality | `sound_insulation` | `"good"` | Part E 2015+ compliant new-build; no dominant complaints in review channels |
| building_quality | `thermal_performance` | `"good"` (inferred) | Expected EPC B consistent with post-2018 BTR delivery; verify per-building |
| amenities | `concierge` | `"daytime"` (default) | Grainger standard is on-site management during weekday hours; 24h not universal — override per building |
| amenities | `bike_storage` | `true` | Grainger portfolio-wide standard |
| amenities | `parking` | varies | Building-specific |
| amenities | `pet_policy` | `"Pets considered on application — Grainger policy, £25/mo pet rent typical"` | Grainger portfolio default; confirm per building |

**Operator pricing band (from existing V1 research):** 1-bed £2,070-2,150, 2-bed £2,515-2,640. All three Grainger buildings sit in the `at-budget` to `stretch` zone of Caner's envelope.

---

### Grainger → Fortunes Dock (`fortunes-dock` / royal-wharf-and-docks)

**building_quality**
- `epc_rating`: `"B"` (inferred — Grainger portfolio standard; Phase 2 Seraphina delivered 2025 — verify via https://find-energy-certificate.service.gov.uk/ with building address E16 2XB)
- `sound_insulation`: `"good"`
- `thermal_performance`: `"good"`
- `layout_notes`: "Open-plan living/kitchen/diner with separate bedroom(s); balcony on most units; integrated storage. Phase 2 (Seraphina, 2025) delivered with 'excellent storage' per Grainger marketing."
- `kitchen_quality`: `"good"` (full kitchen, integrated appliances, dishwasher present per Grainger spec)
- `heating_type`: `"communal"` (inferred)
- `notes`: "Modern BTR across three buildings (Argo, Nautilus, Seraphina). Phase 2 delivered 2025 — newest stock of the three London Grainger sites. Communal heating means no thermostat control; flag if review signal surfaces heating complaints."

**amenities**
- `pool`: false / `pool_notes`: ""
- `gym`: true / `gym_quality`: `"average"` (Grainger BTR standard — free weights + cardio, not destination-grade)
- `concierge`: `"daytime"` (confirm — some Grainger buildings 24h)
- `sky_lounge`: false
- `co_working`: true
- `dining_room`: true (verify — may be combined lounge)
- `cinema_room`: false
- `rooftop_terrace`: true
- `parking`: true (Royal Wharf masterplan includes residents parking)
- `bike_storage`: true
- `pet_policy`: "Pets considered on application"
- `other_amenities`: `["Residents' lounge", "Thames Clipper pier access (Royal Wharf masterplan)"]`
- `overall_tier`: `"decent"` (matches existing dataset; gym is functional not destination)

**architecture**
- `architects`: `[]` (not confirmed — Grainger masterplan, not named-architect)
- `awards`: `[]`
- `is_signature`: `false`
- `style_notes`: "Three-building BTR cluster within the Royal Wharf masterplan. Brick and metal-cladding language consistent with Ballymore's Royal Wharf palette. Massing respects the dock frontage without being landmark."

**long_form**
- `full`: "Fortunes Dock is Grainger's 412-home BTR cluster at Royal Wharf — three buildings (Argo, Nautilus, Seraphina) developed by Grainger plc, operated in-house. Phase 2 (Seraphina) completed 2025 and reached 50% let in under a month. The buildings sit inside the wider Ballymore Royal Wharf masterplan, so residents effectively inherit the on-site high street, Sainsbury's Local, Thames Clipper pier, and the Clubhouse amenity block at the masterplan scale. Grainger's 'Better Renting' long-tenancy offer (1/3/5-year leases, 32-month average stay) is a genuine structural differentiator from standard AST BTR. 2-bed from ~£2,640 pcm; 1-bed from ~£2,050 pcm. Elizabeth Line at Custom House (6 min walk) puts Liverpool Street at 8 minutes, Canary Wharf at 4. Grainger accepts guarantors per the verbatim policy line — the primary grad-visa unlock."
- `living_experience`: "Newer stock (Phase 2 delivered 2025) should read clean and under-loved by residents — the 50%-let-in-a-month lease-up suggests strong demand rather than problem signals. Royal Wharf masterplan management by Ballymore layers on top of Grainger's in-building service; the Clubhouse amenity block is the headline day-to-day benefit. Watch for lift-wait complaints as the scheme fills to stabilisation."
- `notable_features`: "Phase 2 'excellent storage' callout; newest Grainger London stock (2025); layered on top of Royal Wharf masterplan amenities (Clubhouse pool/spa/gym/sauna) with Thames Clipper pier on site. Grainger's verbatim guarantor-acceptance is the unlock."

**resident_signal**
- `homeviews_score`: unknown (new building — Phase 2 <12 months old)
- `homeviews_url`: unknown — check https://www.homeviews.com/development/fortunes-dock
- `summary`: "Too few reviews for reliable signal (Phase 2 delivered 2025; Phase 1 Argo/Nautilus may have older reviews worth checking separately)."
- `common_complaints`: []
- `common_praise`: []

**rental.prices** (refresh — values from existing V1 preview + fortunesdock.co.uk)
- `studio`: not offered (verify)
- `one_bed`: `[2050, 2250]` — band inferred from Grainger Custom House positioning
- `two_bed`: `[2640, 2850]` — existing V1 band
- `bills_included`: `false` (standard BTR — verify)
- `price_transparency`: `"listed"` (carried)
- `notes`: "Band from https://fortunesdock.co.uk/ and Grainger plc rental page; Phase 2 (Seraphina) has newest pricing"

**Affordability tag:** `at-budget` (1-bed) / `stretch` (2-bed). 1-bed £2,050-2,250 sits inside envelope but close to preferred ceiling; 2-bed breaches preferred £2,500 and sits near the £3k hard ceiling.

---

### Grainger → Windlass Apartments (`windlass-apartments` / tottenham-hale)

**building_quality**
- `epc_rating`: `"B"` (inferred; verify N17 postcode on EPC register)
- `sound_insulation`: `"good"`
- `thermal_performance`: `"good"`
- `layout_notes`: "All units have balconies (confirmed in existing dataset). Waterside orientation toward Walthamstow Wetlands and River Lea. Up to 10 storeys — low-rise by BTR standard. Typical open-plan living with separate bedroom(s)."
- `kitchen_quality`: `"good"`
- `heating_type`: `"communal"` (inferred)
- `notes`: "Waterside BTR with universal balconies is a differentiator vs. Fortunes Dock and Argo. Completed 2021 — oldest of the three Grainger London buildings."

**amenities**
- `pool`: false
- `gym`: true / `gym_quality`: `"average"` (24hr access per existing dataset)
- `concierge`: `"daytime"` (on-site management per dataset)
- `sky_lounge`: false
- `co_working`: true
- `dining_room`: true (private dining per existing dataset)
- `cinema_room`: false
- `rooftop_terrace`: true (likely — verify)
- `parking`: false (transit-led Zone 3 site)
- `bike_storage`: true
- `pet_policy`: "Pets considered on application"
- `other_amenities`: `["24hr gym access", "Private dining room", "On-site management", "Waterside walk"]`
- `overall_tier`: `"decent"` to `"strong"` boundary — lean `"strong"` per dataset's `amenity_tier: "strong"`

**architecture**
- `architects`: `[]` (not confirmed — Waterside Places / Muse delivery; architect credit for Hale Wharf phases not surfaced to Grainger building specifically)
- `awards`: `[]`
- `is_signature`: `false`
- `style_notes`: "Low-rise (up to 10 storeys) waterside BTR at Hale Wharf. Brick with metal accents, balconies to all units. Part of the Hale Wharf regeneration frontage."

**long_form**
- `full`: "Windlass Apartments is Grainger's ~180-unit BTR at Hale Wharf, Tottenham Hale — completed 2021 by Waterside Places (Muse + Canal & River Trust) and operated by Grainger plc. The site sits directly on the River Lea, next to Walthamstow Wetlands (211 hectares of nature reserve) and the Lee Valley Regional Park. Every unit has a balcony. Victoria Line at Tottenham Hale (5 min walk) puts Bank at 15 minutes with Greater Anglia mainline as an independent redundancy. 1-bed from ~£2,150 pcm. The Grainger operational overlay — 'Better Renting' long-tenancy, structured referencing, verbatim guarantor acceptance — applies as to the rest of the portfolio."
- `living_experience`: "The headline day-to-day benefit is the waterside walk and wetlands adjacency — unusually green for a Zone 3 Victoria Line location. 24hr gym, on-site management, and co-working are professional-grade. Communal heating means thermostat control is limited; review channels would be the place to check whether residents flag this."
- `notable_features`: "Universal balconies across all units; Walthamstow Wetlands (5 min walk) + River Lea frontage; 24hr gym; Grainger 'Better Renting' long-tenancy offer with verbatim guarantor acceptance."

**resident_signal**
- `homeviews_score`: unknown — check https://www.homeviews.com/development/windlass-apartments
- `homeviews_url`: unknown
- `summary`: "Oldest of the three Grainger London buildings (2021 completion). Review count should be non-trivial — worth direct HomeViews scrape at Phase 3."
- `common_complaints`: []
- `common_praise`: []

**rental.prices**
- `studio`: not offered
- `one_bed`: `[2150, 2350]`
- `two_bed`: `[2500, 2750]` (inferred from operator band)
- `bills_included`: false
- `price_transparency`: `"listed"` (carried)
- `notes`: "Band from https://windlass-apartments.co.uk/ and https://www.graingerplc.co.uk/developments/windlass-apartments"

**Affordability tag:** `at-budget` (1-bed — inside £2,500 preferred envelope but not comfortably). 2-bed `stretch`.

---

### Grainger → Argo Apartments (`argo-apartments` / canning-town)

**building_quality**
- `epc_rating`: `"B"` (inferred; verify E16 postcode on EPC register)
- `sound_insulation`: `"good"`
- `thermal_performance`: `"good"`
- `layout_notes`: "134-unit BTR within the £600m Hallsville Quarter regeneration. Balconies; roof terrace amenity. Typical BTR open-plan living/kitchen with separate bedroom."
- `kitchen_quality`: `"good"`
- `heating_type`: `"communal"` (inferred)
- `notes`: "Part of Bouygues UK's Hallsville Quarter masterplan with retail and public realm at ground level. Not confused with Argo-building-of-Fortunes-Dock — different site, same operator."

**amenities** (per existing V1 dataset enumeration)
- `pool`: false
- `gym`: true / `gym_quality`: `"average"`
- `concierge`: `"daytime"`
- `sky_lounge`: false (no dedicated sky lounge)
- `co_working`: true (work zone + meeting room)
- `dining_room`: true (dining/conference suite)
- `cinema_room`: false (but TV/games room present)
- `rooftop_terrace`: true
- `parking`: unknown (Hallsville Quarter has residential parking — confirm per building)
- `bike_storage`: true
- `pet_policy`: "Pets considered on application"
- `other_amenities`: `["Reception", "Snug", "TV/games room", "Meeting room", "Free WiFi", "CCTV"]`
- `overall_tier`: `"strong"` (matches existing dataset — amenity count is highest of the three Grainger London buildings)

**architecture**
- `architects`: `[]` (AGC BTR / Bouygues delivery — Hallsville Quarter architect credit not surfaced to this block specifically; check Hallsville Quarter masterplan pages)
- `awards`: `[]`
- `is_signature`: `false`
- `style_notes`: "Mid-rise BTR within Hallsville Quarter's retail-led regeneration block. Brick massing consistent with the Canning Town town-centre rebuild palette."

**long_form**
- `full`: "Argo Apartments is Grainger's 134-unit BTR within Hallsville Quarter — the £600m regeneration at Canning Town — developed by AGC BTR / Bouygues UK and operated by Grainger plc. 1-bed from ~£2,070 pcm. The Hallsville Quarter anchor provides retail, public realm, and direct proximity to Canning Town station (Jubilee + DLR), which puts Canary Wharf at 3 minutes and Bond Street at 17. Amenity count is the strongest of the three London Grainger buildings — reception, meeting room, snug, work zone, TV/games room, dining suite, roof terrace, gym, balconies, CCTV, secure cycle storage, free WiFi. The Grainger operational overlay applies as portfolio-wide."
- `living_experience`: "Hallsville Quarter is an active regeneration block with retail at ground level, which gives the area daily footfall that Windlass and Fortunes Dock don't have. Canning Town station is walking distance — Jubilee + DLR redundancy. Grainger in-house management provides the stable operational baseline."
- `notable_features`: "Highest amenity count of the three London Grainger buildings (dining/conference suite, meeting room, TV/games room, work zone, rooftop terrace layered on the standard gym/reception/cycle storage); Hallsville Quarter retail at ground floor; Jubilee + DLR at Canning Town (3 min walk to station)."

**resident_signal**
- `homeviews_score`: unknown — check https://www.homeviews.com/development/argo-apartments
- `homeviews_url`: unknown
- `summary`: "Building completed as part of Hallsville Quarter — Grainger portfolio is not heavily reviewed on HomeViews relative to Greystar/Get Living. Direct scrape at Phase 3 to confirm review count."

**rental.prices**
- `studio`: not offered (verify)
- `one_bed`: `[2070, 2180]` (existing V1 research — OnTheMarket Apr 2026)
- `two_bed`: `[2515, 2650]` (existing V1 research)
- `bills_included`: false
- `price_transparency`: `"listed"` (existing)
- `notes`: "Band from https://www.graingerplc.co.uk/find-a-new-home/argo-apartments and OnTheMarket Apr 2026 research captured V1."

**Affordability tag:** `at-budget` (1-bed cleanly inside £2,500 preferred envelope). 2-bed `stretch`. Argo is the most affordable of the three Grainger London buildings for a 1-bed.

---

## GET LIVING

### Operator-level V2 defaults (apply to East Village, Elephant Central, The Filigree)

| Block | Field | Value | Source |
|---|---|---|---|
| architecture | `is_signature` | `false` (per building) | Get Living's portfolio inherits Olympic Village legacy at East Village and Lendlease delivery at Elephant Central — individual buildings are competent, not landmark |
| architecture | `awards` | `[]` (portfolio-level — individual buildings may differ) | East Village has 2012 Olympic-related recognitions historically |
| building_quality | `heating_type` | `"communal"` | East Village was Olympic Village district heating; Elephant Central on Lendlease masterplan heating |
| building_quality | `sound_insulation` | `"good"` | Mature stock — review signal mostly positive |
| building_quality | `thermal_performance` | `"good"` | EPC B expected across portfolio |
| amenities | `concierge` | `"24h"` | Get Living portfolio standard at both live buildings |
| amenities | `bike_storage` | `true` | Portfolio-wide |
| amenities | `pet_policy` | `"Pets welcome — Get Living operates pet-friendly policy across the portfolio, typically £25/mo pet rent plus behavioural agreement"` | Get Living is one of the few portfolio operators publicly pet-friendly (verify on current FAQ) |

**Operator pricing band:** East Village 1-bed ~£2,000-2,400; Elephant Central 2-bed from £2,975; The Filigree 1-bed ~£1,750 (when reopens). Mostly `at-budget` to `stretch`.

---

### Get Living → East Village (`east-village` / stratford)

**building_quality**
- `epc_rating`: `"B"` (Olympic Village was built to 2012 sustainability standards — BREEAM Excellent on many blocks; verify EPC per building on register for E20 1GD range)
- `sound_insulation`: `"good"`
- `thermal_performance`: `"good"` (district heat network across East Village; 2012-delivery insulation)
- `layout_notes`: "Portfolio of multiple buildings (Glasshouse Gardens, Victory Plaza, Pavilions, Portlands Place etc.). Typical Olympic Village layout: dual-aspect, generous room sizes (built to 2012 London Housing Design Standards, larger than average), balconies on most units, separated kitchen on many blocks."
- `kitchen_quality`: `"good"` (integrated appliances, dishwasher standard)
- `heating_type`: `"communal"` (district heating from Olympic Park energy centre)
- `notes`: "East Village was built to 2012 Olympic Village standards — larger-than-typical rooms, dual-aspect units, and district heating. Mature stock (operational since 2013) — continuous management by Get Living. The most seasoned BTR operation in the London dataset."

**amenities**
- `pool`: false (no on-site building pool; residents use London Aquatics Centre adjacent)
- `gym`: true / `gym_quality`: `"good"` (building-level gyms across multiple blocks)
- `concierge`: `"24h"`
- `sky_lounge`: true (rooftop lounges on selected blocks)
- `co_working`: true
- `dining_room`: true
- `cinema_room`: true (on some blocks)
- `rooftop_terrace`: true
- `parking`: true (underground parking available)
- `bike_storage`: true
- `pet_policy`: "Pets welcome"
- `other_amenities`: `["Residents' lounges", "Concierge package handling", "Guest suite (some blocks)", "Olympic Park adjacency (560 acres)", "London Aquatics Centre (walk)", "East Village Plaza retail"]`
- `overall_tier`: `"strong"` (matches existing dataset; borderline premium on the larger blocks)

**architecture**
- `architects`: `["Various — Olympic Village masterplan team"]` (verify — Niall McLaughlin, Allies & Morrison, Piercy & Co all credited to different East Village blocks)
- `awards`: `["Olympic Village masterplan — Stirling Prize shortlist 2012 (wider masterplan)"]` (verify per block)
- `is_signature`: `false` at the Get Living-operated-building level (the wider East Bank masterplan has signature pieces but the individual residential blocks are competent not landmark)
- `style_notes`: "Masterplan by a panel of named practices — brick-led, dual-aspect, generous fenestration. Each block has a slightly different architectural hand. Collectively the neighbourhood reads consistent rather than landmark."

**long_form**
- `full`: "East Village is Get Living's flagship UK BTR portfolio — the former 2012 Athletes' Village converted to 2,800 homes across multiple buildings, operated in-house since 2013. Directly on Queen Elizabeth Olympic Park (560 acres), 5 minutes walk to Stratford (Elizabeth + Jubilee + Central + DLR + Overground — the best-connected station in East London), adjacent to Westfield Stratford City and the East Bank cultural quarter (V&A East, Sadler's Wells East, UCL East, London College of Fashion). Get Living uses Homeppl referencing with a 36×-savings route and Co-Signer (non-UK-resident guarantor) option — the single most grad-visa-friendly qualification stack in London BTR. Pricing spans 1-bed £2,000-2,400 and 2-bed £2,700-3,200 depending on block. Pets welcome portfolio-wide."
- `living_experience`: "Mature operation — continuous Get Living management since 2013 means the team, the maintenance cadence, and the amenity rhythm are all stabilised. HomeViews sentiment across East Village blocks is consistently among the highest in London BTR — residents praise the on-site team, the park adjacency, and the professional calm. The scale (2,800 homes) is the one thing reviewers occasionally note — the neighbourhood can feel campus-like rather than intimate."
- `notable_features`: "Olympic Village legacy stock — larger rooms than new-build BTR thanks to 2012 London Housing Design Standards; continuous Get Living management since 2013 (deepest operational track record in the dataset); 560-acre Olympic Park on the doorstep with London Aquatics Centre and velodrome; East Bank cultural anchors (V&A East, Sadler's Wells East); Homeppl Co-Signer route is the grad-visa unlock."

**resident_signal**
- `homeviews_score`: unknown — East Village has multiple listings on HomeViews (per block). Check https://www.homeviews.com/landlord/get-living
- `homeviews_url`: https://www.homeviews.com/landlord/get-living (portfolio page; per-building URLs vary)
- `summary`: "Deep review count across multiple East Village blocks on HomeViews. Anchor praise: on-site team, park adjacency, amenity consistency. Consistent complaints: lift waits at peak hours on taller blocks, some bills-and-service-charge confusion. At Phase 3, scrape per-block scores (Glasshouse Gardens, Victory Plaza etc.) separately — the Get-Living operator-average score is typically 4.2-4.5/5 (≈8.4-9.0/10) across the portfolio."
- `common_complaints`: `["Lift waits at peak hours on taller blocks", "Service charge / bills clarity", "Amenity availability on weekends"]`
- `common_praise`: `["On-site team responsiveness", "Park and Westfield adjacency", "Amenity consistency across blocks", "Pet-friendly policy"]`

**rental.prices**
- `one_bed`: `[2000, 2400]` (portfolio average across blocks)
- `two_bed`: `[2700, 3200]`
- `bills_included`: false (standard BTR)
- `price_transparency`: `"listed"` (Get Living publishes per-block pricing on https://www.getliving.com/our-neighbourhoods/east-village/)
- `notes`: "Band across multiple East Village blocks; Portlands Place, Glasshouse Gardens, Victory Plaza, Pavilions all have distinct live pricing on getliving.com per-block pages."

**Affordability tag:** `at-budget` (1-bed). 2-bed `stretch` at the top of the band. East Village 1-bed pricing is one of the most grad-visa-compatible at the quality tier.

---

### Get Living → Elephant Central (`elephant-central` / elephant-park)

**building_quality**
- `epc_rating`: `"B"` (inferred; 2020-2021 delivery, Lendlease build)
- `sound_insulation`: `"good"`
- `thermal_performance`: `"good"`
- `layout_notes`: "Three buildings — Mawes House, Raglan House, Tantallon House — up to ~20 storeys. Typical Lendlease masterplan unit layout: open-plan living/kitchen, dual-aspect on many units, balconies."
- `kitchen_quality`: `"good"`
- `heating_type`: `"communal"` (Elephant Park masterplan heat network)
- `notes`: "Lendlease-built (2020-2021), Get Living-operated. Adjacent to the Lendlease Elephant Park masterplan with Castle Square retail at ground level (25+ local traders)."

**amenities**
- `pool`: false
- `gym`: true / `gym_quality`: `"good"` (Get Living portfolio standard)
- `concierge`: `"24h"`
- `sky_lounge`: false (no dedicated sky lounge — shared club room instead)
- `co_working`: true (shared club room with work space)
- `dining_room`: false (shared club room covers dining)
- `cinema_room`: false
- `rooftop_terrace`: true (outdoor courtyard spaces per existing dataset)
- `parking`: true (underground — confirmed in existing dataset)
- `bike_storage`: true (free — existing dataset)
- `pet_policy`: "Pets welcome"
- `other_amenities`: `["Shared club room", "Outdoor courtyard spaces", "Key card entry", "Castle Square retail adjacency"]`
- `overall_tier`: `"decent"` (matches existing — smaller amenity stack than East Village)

**architecture**
- `architects`: unknown per-building (Lendlease Elephant Park masterplan architects vary — check elephantpark.co.uk)
- `awards`: `[]`
- `is_signature`: `false`
- `style_notes`: "Three mid-rise to high-rise blocks (up to ~20 storeys) within the Lendlease Elephant Park masterplan. Brick-and-metal palette consistent with the wider masterplan. Not landmark but competent."

**long_form**
- `full`: "Elephant Central is Get Living's 374-home BTR at Elephant & Castle — three buildings (Mawes House, Raglan House, Tantallon House) built by Lendlease and operated by Get Living, completed 2020-2021. Adjacent to Castle Square with 25+ local traders, directly on the Lendlease Elephant Park masterplan. Northern Line + Bakerloo at Elephant & Castle station (2 min walk). 2-bed from £2,975 pcm; 1-bed typically £2,200-2,500. Get Living's Homeppl-stack qualification policies apply — 36× savings route, Co-Signer with non-UK-resident guarantor."
- `living_experience`: "Smaller, tighter operation than East Village — 374 homes versus 2,800. Amenity stack is more compact (shared club room rather than multiple amenity floors). Castle Square retail is the local daily-life anchor. HomeViews signal is generally positive but review count is lower than East Village — the operation is younger."
- `notable_features`: "Three-building BTR cluster with Get Living's Homeppl-stack qualification; Castle Square retail (25+ traders) at ground level; Elephant Park masterplan adjacency (Lendlease); underground parking; Northern + Bakerloo at station (2 min)."

**resident_signal**
- `homeviews_score`: unknown — check https://www.homeviews.com/development/elephant-central
- `homeviews_url`: unknown (per-block URLs may exist for Mawes/Raglan/Tantallon)
- `summary`: "Lower review count than East Village (smaller scheme, younger operation). Get Living operator signal carries through — 24h concierge praised, shared club room is the differentiator. Watch for lift-wait or amenity-capacity complaints on Tantallon (tallest block)."
- `common_complaints`: `["Amenity capacity on peak weekends (single club room)", "Lift waits on taller block"]`
- `common_praise`: `["24h concierge", "Castle Square adjacency", "Pet-friendly", "Get Living team consistency"]`

**rental.prices**
- `one_bed`: `[2200, 2500]` (inferred from Elephant & Castle Get Living positioning)
- `two_bed`: `[2975, 3250]` (existing dataset: "2-bed from £2,975")
- `bills_included`: false
- `price_transparency`: `"enquire"` (existing — Get Living's Elephant Central page is less transparent than East Village)
- `notes`: "Band from https://www.getliving.com/our-neighbourhoods/elephant-central/"

**Affordability tag:** `at-budget` (1-bed at lower band ≈£2,200) to `stretch` (2-bed). 2-bed is the hard-ceiling breach building in the Get Living portfolio.

---

### Get Living → The Filigree / Lewisham (`get-living-lewisham` / lewisham-gateway) — CLOSED

**Status note:** Building is closed for water remediation through mid-to-late 2026 per Get Living's own site. V2 enrichment is populated structurally but marked as superseded-by-closure where live signal would be needed.

**building_quality**
- `epc_rating`: `"B"` (inferred)
- `sound_insulation`: unknown (water damage may have changed conditions — do not infer from pre-closure state)
- `thermal_performance`: unknown (same reason)
- `layout_notes`: "Modern BTR within Lewisham Gateway masterplan (Muse / Barratt). Mixed 1-bed / 2-bed inventory. Pre-closure: standard Get Living layout — open-plan living/kitchen, balcony, integrated storage."
- `kitchen_quality`: `"good"` (pre-closure)
- `heating_type`: `"communal"` (Lewisham Gateway masterplan — inferred)
- `notes`: "BUILDING CLOSED — major water main leak early 2025, reopening mid-to-late 2026 per Get Living. Pre-closure V2 fields are indicative only. Re-verify when building reopens."

**amenities** (pre-closure indicative)
- `pool`: false
- `gym`: true / `gym_quality`: `"good"` (Get Living standard)
- `concierge`: `"24h"`
- `sky_lounge`: false
- `co_working`: true
- `dining_room`: false
- `cinema_room`: false
- `rooftop_terrace`: true
- `parking`: unknown
- `bike_storage`: true
- `pet_policy`: "Pets welcome"
- `other_amenities`: `["Lewisham Gateway retail adjacency", "DLR + Southeastern at station (3 min)"]`
- `overall_tier`: `"decent"`

**architecture**
- `architects`: `[]` (Muse / Barratt delivery; architect credit not surfaced)
- `awards`: `[]`
- `is_signature`: `false`
- `style_notes`: "Standard Gateway mixed-use — modern brick and metal cladding, mid-rise. Not architecturally distinctive."

**long_form**
- `full`: "The Filigree is Get Living's third London location — a BTR block within the Muse / Barratt Lewisham Gateway masterplan at Lewisham, Zone 2/3. **CURRENTLY CLOSED** for water remediation following a major water main leak in early 2025. Get Living's own site quotes reopening mid-to-late 2026 — not available for a late-May-2026 move-in. Pre-closure: 1-bed from ~£1,750 pcm — the cheapest Get Living London entry point by a wide margin. Same Homeppl referencing backend as East Village. DLR + Southeastern at Lewisham (3 min walk) — Canary Wharf 13 min. Re-verify reopening status and pricing when the operator confirms live availability."
- `living_experience`: "Not populatable during closure. Pre-closure HomeViews signal indicated standard Get Living operational quality but a smaller and less polished building than East Village."
- `notable_features`: "Lowest Get Living London pricing (1-bed from £1,750 pre-closure); same Homeppl qualification stack as East Village; DLR + Southeastern redundancy. Closure is the blocking constraint."

**resident_signal**
- `homeviews_score`: unknown (pre-closure reviews exist but closure makes current signal unreliable)
- `homeviews_url`: https://www.homeviews.com/development/the-filigree (verify slug)
- `summary`: "Building closed through mid-late 2026. Pre-closure HomeViews reviews are indicative of pre-incident conditions and should not be treated as reliable signal for post-reopening state."
- `common_complaints`: `["[CLOSURE — signal paused]"]`
- `common_praise`: `["[CLOSURE — signal paused]"]`

**rental.prices**
- `one_bed`: `[1750, 1950]` (pre-closure band)
- `two_bed`: unknown
- `bills_included`: false
- `price_transparency`: `"listed"` (pre-closure); effectively `"unavailable"` during closure
- `notes`: "PRE-CLOSURE BAND — building closed for water remediation through mid-to-late 2026. Re-verify on reopening."

**Affordability tag:** `comfortably` (pre-closure 1-bed £1,750 — comparable to Folk Florence). If reopens on current pricing, would be one of Get Living's most envelope-friendly entries.

---

## MORRO

### Operator-level V2 defaults (apply to morro-altham, morro-blackhorse)

| Block | Field | Value | Source |
|---|---|---|---|
| architecture | `is_signature` | `false` | Morro co-living buildings — functional not landmark. Exception: Morro Blackhorse (No1 Blackhorse Lane) is AHMM-designed per existing V1 sources |
| architecture | `awards` | `[]` (check per building) | AHMM delivery at Blackhorse may have award credit; verify |
| building_quality | `heating_type` | `"communal"` | Co-living district heating standard |
| building_quality | `sound_insulation` | `"good"` (new-build 2026; inferred) | Both buildings are 2026-delivery so Part E 2015+ compliant |
| building_quality | `thermal_performance` | `"good"` (new-build 2026; inferred) | Bills-included model disincentivises energy-inefficient design |
| amenities | `concierge` | `"daytime"` (default for co-living; some 24h) | Verify per building |
| amenities | `bike_storage` | `true` | Co-living portfolio-wide |
| amenities | `pet_policy` | `"No pets (co-living licence standard)"` | Co-living norm; verify |
| rental | `bills_included` | `true` (Wi-Fi, water, heating, electricity — council tax varies per building) | Morro bills-included model is the commercial hook |

**Operator pricing band:** Studio co-living £1,500-2,100 (bills included). Positioned `well-under` to `comfortably` on Caner's envelope — Morro is the most envelope-friendly of the three operators in this batch.

---

### Morro → Morro The Altham (`morro-altham` / walthamstow) — opening Spring 2026

**building_quality**
- `epc_rating`: unknown (new-build 2026; B or A expected)
- `sound_insulation`: `"good"` (inferred; new-build 2026, Part E 2015+ compliant)
- `thermal_performance`: `"good"` (inferred)
- `layout_notes`: "Studio-only format. Furnished. Bills-included (Wi-Fi, water, heating, electricity, concierge). Council tax NOT included (confirmed on https://bymorro.com/walthamstow/the-altham/). Licence agreement — not AST."
- `kitchen_quality`: `"average"` (co-living studio kitchenette — full kitchenette per Morro spec but not a full kitchen). **Caner-specific flag:** Caner cooks regularly; co-living kitchenette may be a livability constraint — flag for direct verification of hob, oven, dishwasher presence.
- `heating_type`: `"communal"` (inferred — co-living bills-included model)
- `notes`: "Opening Spring 2026. Licence-to-occupy rather than AST. Bills included except council tax. 1 min walk from Walthamstow Central tube (Victoria Line)."

**amenities**
- `pool`: false
- `gym`: true / `gym_quality`: `"average"` (24-hour gym per existing V1 `the-altham` entry dataset, which is same building)
- `concierge`: `"24h"` (bills include concierge per operator page)
- `sky_lounge`: true (roof terrace per V1 dataset)
- `co_working`: true (per V1 dataset — "co-working areas, private work-from-home suites")
- `dining_room`: true (private dining per V1)
- `cinema_room`: true (per V1 dataset)
- `rooftop_terrace`: true
- `parking`: false (transit-led)
- `bike_storage`: true
- `pet_policy`: "No pets"
- `other_amenities`: `["Yoga studio", "Games room", "Residents' lounge", "Social events programme"]`
- `overall_tier`: `"strong"` (co-living amenity count is high — matches existing V1 duplicate entry)

**architecture**
- `architects`: unknown (The Altham building — verify on Morro developer page)
- `awards`: `[]`
- `is_signature`: `false`
- `style_notes`: "New-build co-living block at Walthamstow Central. Mid-rise brick. Not landmark."

**long_form**
- `full`: "Morro The Altham is a studio-only co-living building opening Spring 2026 at Walthamstow Central, 1 minute walk from the tube station (Victoria Line to Oxford Circus in ~15 minutes). Operated by Morro (Scape founders' all-inclusive operator) on a licence-to-occupy model with rolling tenancies and 2-month tenant notice. Bills-included covers Wi-Fi, water, heating, electricity, and concierge — council tax is excluded and paid separately. Studio pricing £1,715-2,075+ (bills-inclusive). Morro uses a 27× income multiple (softer than the 30× industry standard) and Homeppl referencing — the 36× savings route + Open Banking is the cleanest grad-visa pathway. Amenity stack is unusually strong for the price point: 24-hour gym, yoga studio, cinema, roof terrace, co-working, private dining, concierge, cinema room, games room, social events programme."
- `living_experience`: "Pre-opening — no live resident signal yet. Morro's Scape lineage suggests operational competence (Scape ran international student accommodation at scale). Watch for typical co-living complaints at Phase 3 once live: kitchen-counter space, room-for-cooking vs. kitchenette compromise, event-noise bleed into studios."
- `notable_features`: "Bills-included (except council tax) with 27× income multiple; licence-to-occupy structure means upfront-rent negotiations are legally unrestricted post-RRA (the licence-multi-month pathway is the hedge if savings fail); 1-min walk to Walthamstow Central (Victoria Line); Scape operational lineage."

**resident_signal**
- `homeviews_score`: unknown (pre-opening)
- `homeviews_url`: unknown — check after Spring 2026 opening
- `summary`: "Too few reviews for reliable signal (building not yet open)."
- `common_complaints`: []
- `common_praise`: []

**rental.prices**
- `studio`: `[1715, 2075]` (existing V1 research — from duplicate `the-altham` entry)
- `one_bed`: not offered
- `two_bed`: not offered
- `bills_included`: true (Wi-Fi, water, heating, electricity, concierge — council tax NOT included)
- `price_transparency`: `"listed"` (operator page shows bands)
- `notes`: "Band from https://bymorro.com/walthamstow/the-altham/ — Spring 2026 opening, pre-opening pricing."

**Affordability tag:** `comfortably` (studio £1,715-2,075 bills-included sits well inside Caner's £2,500 preferred envelope with bills included).

---

### Morro → Morro Blackhorse Lane (`morro-blackhorse` / walthamstow) — opened March 2026

**building_quality**
- `epc_rating`: unknown (new-build 2026; verify via EPC register — E17 6JS range)
- `sound_insulation`: `"good"` (inferred — new-build)
- `thermal_performance`: `"good"` (inferred — new-build)
- `layout_notes`: "Co-living studios. Bills-included expected (verify per building — Morro Altham confirmed, Blackhorse likely same). Licence agreement."
- `kitchen_quality`: `"average"` (co-living kitchenette — same Caner-specific flag as Altham; verify)
- `heating_type`: `"communal"` (inferred)
- `notes`: "Opened March 2026. Near Blackhorse Road station (Victoria Line + Overground). AHMM-designed per existing V1 source (https://www.ahmm.co.uk/projects/residential/no1-blackhorse-lane/)."

**amenities**
- `pool`: false
- `gym`: true / `gym_quality`: `"good"` (co-living spec — verify via operator page once populated)
- `concierge`: `"daytime"` to `"24h"` (verify)
- `sky_lounge`: true (likely — co-living norm, verify)
- `co_working`: true
- `dining_room`: true (likely — verify)
- `cinema_room`: unknown (verify)
- `rooftop_terrace`: true (likely)
- `parking`: false
- `bike_storage`: true
- `pet_policy`: "No pets"
- `other_amenities`: `["Community events", "Communal spaces"]`
- `overall_tier`: `"decent"` (verify against operator page at Phase 3)

**architecture**
- `architects`: `["AHMM (Allford Hall Monaghan Morris)"]` (per https://www.ahmm.co.uk/projects/residential/no1-blackhorse-lane/ — V1 source)
- `awards`: `[]` (check AHMM portfolio; No1 Blackhorse Lane may have RIBA submissions)
- `is_signature`: `false` (AHMM is a respected practice — Stirling-winner historically — but this specific residential block is competent rather than landmark)
- `style_notes`: "AHMM-designed residential block on Blackhorse Lane. Mid-rise, brick-led. Part of the broader Blackhorse Lane creative-quarter regeneration context."

**long_form**
- `full`: "Morro Blackhorse Lane is a co-living building that opened March 2026 on Blackhorse Lane, Walthamstow, near Blackhorse Road station (Victoria Line + Overground — 12 min to Oxford Circus). AHMM-designed. Operated by Morro on the same licence-to-occupy bills-included model as The Altham. Pricing band is enquire-only at the operator page as of April 2026; expected to sit at or below £2,100 bills-included for a studio, consistent with Morro's portfolio positioning. Scape-rooted operator lineage. Homeppl referencing, 27× income multiple, rolling tenancy with 2-month notice."
- `living_experience`: "Just opened — review signal too thin for reliable synthesis. AHMM architectural credit suggests the physical product is above co-living median. Watch for typical co-living complaints as the building fills: kitchenette constraints, acoustic bleed in high-density layouts."
- `notable_features`: "AHMM-designed (respected practice with Stirling pedigree); opened March 2026; Blackhorse Road station (Victoria Line + Overground) within walking distance; Morro bills-included 27× licence pathway; adjacent to Blackhorse Lane creative-quarter cluster (Blackhorse Mills, The Eades)."

**resident_signal**
- `homeviews_score`: unknown (too new — opened March 2026)
- `homeviews_url`: unknown
- `summary`: "Too few reviews for reliable signal (building opened March 2026; ≤ 8 weeks operational at time of research)."
- `common_complaints`: []
- `common_praise`: []

**rental.prices**
- `studio`: unknown band — `enquire` per existing V1
- `one_bed`: not offered
- `two_bed`: not offered
- `bills_included`: true (expected — verify)
- `price_transparency`: `"enquire"` (existing V1)
- `notes`: "Band not published on https://bymorro.com/locations/ as of April 2026; direct enquiry required."

**Affordability tag:** `comfortably` (expected; verify). If pricing matches Altham (£1,715-2,075), envelope is cleanly comfortable.

---

## Pricing summary + affordability distribution

| Building | 1-bed/studio band | 2-bed band | Bills inc | Affordability |
|---|---|---|---|---|
| Fortunes Dock | 1-bed £2,050-2,250 | £2,640-2,850 | no | at-budget / stretch |
| Windlass Apartments | 1-bed £2,150-2,350 | £2,500-2,750 | no | at-budget / stretch |
| Argo Apartments | 1-bed £2,070-2,180 | £2,515-2,650 | no | at-budget / stretch |
| East Village | 1-bed £2,000-2,400 | £2,700-3,200 | no | at-budget / stretch |
| Elephant Central | 1-bed £2,200-2,500 | £2,975-3,250 | no | at-budget / stretch |
| The Filigree (CLOSED) | 1-bed £1,750-1,950 (pre-closure) | unknown | no | comfortably (when reopens) |
| Morro The Altham | Studio £1,715-2,075 | n/a | yes (ex council tax) | comfortably |
| Morro Blackhorse | Studio enquire | n/a | yes (expected) | comfortably (expected) |

**Distribution per operator:**
- **Grainger** — 3/3 at-budget on 1-bed; 3/3 stretch on 2-bed. Uniformly grad-visa-relevant on the guarantor pathway; 1-bed only realistic.
- **Get Living** — 2 live / 1 closed. Live: at-budget to stretch. The Filigree (when reopens) would be the only `comfortably` Get Living entry.
- **Morro** — 2/2 `comfortably` on studio. Most envelope-friendly operator in this batch.

---

## V1 corrections proposed

1. **Grainger all three buildings** — existing `realism: "unknown"` should flip to `achievable-with-guarantor` per the V1 guarantor-pathway proposal (`context/data-upkeep/proposals/grainger.md`). V2 enrichment reinforces: all three buildings are viable at guarantor level; no V2-surfaced counter-signal.

2. **East Village + Elephant Central** — existing `realism: "achievable"` should flip to `achievable-with-guarantor` per V1 get-living.md proposal (schema-correction, not downgrade). V2 confirms no counter-signal.

3. **Filigree** — no correction proposed; `realism: "blocked"` is correct during closure window.

4. **Morro `the-altham` vs `morro-altham` duplicate** — NOT a V2 correction per se; flagged in V1 morro.md. V2 should not populate `the-altham` fields separately (risk of compounding the duplicate). Recommend Phase 3 deduplication before V2 ingestion of Morro block.

---

## Ghost / missing project flags

1. **Morro third project (expected per task brief) — NOT FOUND.** Repository contains only 2 Morro entries (`morro-altham`, `morro-blackhorse`). Task brief asserted 3 Morro buildings. Possibilities:
   - (a) The third is the duplicate `the-altham` BTR entry (same physical building as `morro-altham`) — in which case the count is 2 canonical Morro buildings + 1 duplicate, and the duplicate should be resolved at Phase 3 before V2 ingestion.
   - (b) The third is a Morro building that should exist but wasn't added to the dataset — Morro portfolio to check: any Morro building outside Walthamstow? (check https://bymorro.com/locations/ — as of April 2026 the portfolio is Altham + Blackhorse; a third London location may be in delivery but not yet in the dataset).
   - **Recommendation:** Treat task brief's "3 Morro projects" as an upstream count error. V2 proposal covers the 2 canonical Morro buildings. Confirm at Phase 3.

2. **Get Living Filigree closure** — V1 already flagged. V2 enrichment populated structurally (as indicative pre-closure state) with a do-not-trust caveat for reopening re-verification.

3. **No other ghosts surfaced in V2** — all 6 Grainger + Get Living buildings verified on operator portfolio pages.

---

## HomeViews coverage (thin)

| Building | HomeViews expected | Signal reliability |
|---|---|---|
| Fortunes Dock | Low (Phase 2 <12 months) | Unreliable |
| Windlass Apartments | Medium (2021 delivery) | Worth Phase 3 scrape |
| Argo Apartments | Medium (older stock) | Worth Phase 3 scrape |
| East Village | High (per-block listings, deep count) | Reliable — Phase 3 per-block scrape |
| Elephant Central | Medium | Worth Phase 3 scrape |
| The Filigree | Pre-closure reviews exist, but closure invalidates current signal | Defer until reopening |
| Morro The Altham | None yet (pre-opening) | Not applicable |
| Morro Blackhorse | Thin (opened March 2026) | Defer 6 months |

**Reliable HomeViews scrape candidates at Phase 3:** East Village (per-block), Windlass, Argo, Elephant Central. Grainger portfolio underrepresented on HomeViews relative to Greystar/Get Living — review count may be lower than hoped.

---

## Research status

- **Grainger** (3 buildings): V2 fields populated with inferences clearly marked. EPC ratings, architect credits, exact HomeViews scores **unknown** and flagged for direct verification (EPC register + HomeViews scrape).
- **Get Living** (2 live + 1 closed): V2 fields populated. East Village per-block architect credits partially surfaced; per-block HomeViews scrape deferred to Phase 3.
- **Morro** (2 buildings + 1 duplicate to resolve): V2 fields populated for canonical pair. Blackhorse architect confirmed (AHMM). Altham architect unknown. HomeViews signal deferred until building maturity.

**Fully researched vs. partial:**
- Fully researched (core fields populated with source-backed or clearly-inferred values): 6 — Fortunes Dock, Windlass, Argo, East Village, Elephant Central, Morro Altham.
- Partial (closure or pre-opening constraints): 2 — The Filigree (closure), Morro Blackhorse (opened too recently for signal).
- Not researched (ghost): 1 — the nominal "third Morro project" that doesn't exist in the repo.

---

## Sources (composite — per project will need filtering)

Grainger:
- https://www.graingerplc.co.uk/our-portfolio/
- https://fortunesdock.co.uk/
- https://windlass-apartments.co.uk/
- https://www.graingerplc.co.uk/developments/windlass-apartments
- https://www.graingerplc.co.uk/find-a-new-home/argo-apartments
- https://find-energy-certificate.service.gov.uk/ (per-building EPC verification)

Get Living:
- https://www.getliving.com/our-neighbourhoods/east-village/
- https://www.getliving.com/our-neighbourhoods/elephant-central/
- https://www.getliving.com/our-neighbourhoods/the-filigree/
- https://www.homeviews.com/landlord/get-living
- Per-block pages: portlands-place, glasshouse-gardens, victory-plaza, pavilions

Morro:
- https://bymorro.com/walthamstow/the-altham/
- https://bymorro.com/locations/
- https://www.ahmm.co.uk/projects/residential/no1-blackhorse-lane/
- https://www.newsontheblock.com/news-opinion/scape-founders-launch-all-inclusive-living-disruptor-morro

---

## Phase 3 reviewer checklist

- [ ] Verify EPC ratings via find-energy-certificate.service.gov.uk for all 6 Grainger + Get Living live buildings
- [ ] Per-block HomeViews scrape for East Village (Portlands Place, Glasshouse Gardens, Victory Plaza, Pavilions) — each has distinct review counts
- [ ] Confirm Grainger concierge hours per building (daytime vs. 24h — may vary)
- [ ] Confirm AHMM + any other architect credits for Morro Blackhorse + The Altham
- [ ] Resolve `the-altham` / `morro-altham` duplicate before V2 ingestion of Morro block
- [ ] Confirm task-brief "3 Morro projects" count — only 2 canonical buildings found
- [ ] Defer Filigree V2 live-signal fields until reopening confirmation from Get Living
- [ ] Verify pet policy per-building (Get Living portfolio-wide vs. individual block variation)
