# V2 Enrichment — Grainger / Moda / ARK / Node

**Scope:** V2 enrichment only (building_quality, amenities, architecture, long_form, resident_signal, per-project pricing refresh, affordability tag). V1 qualification blocks are **not** re-touched.

**Envelope anchors (Caner):**
- Preferred ≤£2,250 pcm (1-bed) / ≤£2,750 all-in.
- Comparables ladder: Node Brixton £1,675 → `well-under` · Folk Florence £1,695-1,800 → `comfortably` · Quintain Ferrum £1,829 → `comfortably` · ARK Canary Wharf £2,150 → `at-budget` · Vonder Wembley 2-bed £2,500-2,700 → `stretch` · Locke Aldgate £4,500+ → `over-budget`.

**Projects in scope (9):**

| Operator | Project ID | Area |
|---|---|---|
| Grainger plc | `argo-apartments` | Canning Town |
| Grainger plc | `fortunes-dock` | Royal Wharf / Royal Docks |
| Grainger plc | `windlass-apartments` | Tottenham Hale |
| Moda Living | `the-stage-ec2` | Old Street / Hoxton |
| Moda Living | `embassy-boulevard` | Nine Elms |
| ARK Co-living | `ark-canary-wharf` | Canary Wharf |
| ARK Co-living | `ark-wembley` | Wembley Park |
| Node Living | `node-limehouse` | Poplar / Blackwall |
| Node Living | `node-living-brixton` | Brixton |

---

## Relative-field calibration summary

| Field | Grainger (3) | Moda Stage | Moda Embassy | ARK (2) | Node (2) |
|---|---|---|---|---|---|
| `kitchen_quality` | `good` | `good` | `good` | **`poor`** (dataset anchor — kitchenette + combi) | `average` (kitchenette, hob, combi micro, shared kitchen floor) |
| `amenities.overall_tier` | `decent` (Argo, Windlass) / `decent`→`strong` (Fortunes Dock) | `strong` | `premium` | `decent` (Canary Wharf amenity package is richer than Wembley) / `basic`→`decent` (Wembley) | `decent` |
| `gym_quality` | `average` | `good` | `good`→`excellent` (Technogym, 3 fitness spaces, golf sim) | `average` (Canary Wharf 20th-floor pool+gym) / `poor` (Wembley) | `poor` |
| `sound_insulation` | `good` (new-build, Part E post-2015) | `good` | `good` | `average` (HomeViews/TripAdvisor notes short-stay noise) | `good` |
| `is_signature` | false (all 3) | **true** (412-unit 37-storey landmark with Curtain Theatre heritage, Perkins + Will, sky bar + bowling alley + piazza — genuine destination architecture) | false (competent new-build, Technogym-heavy brand amenity is the differentiator not the form) | false | false |
| Affordability | Argo: `at-budget` · Fortunes Dock 1-bed: `at-budget`, 2-bed: `stretch` · Windlass 1-bed: `at-budget` | `stretch`→`over-budget` (£2,750+ studio, 1-bed £3,430) | **`over-budget`** (studio £2,680, 1-bed £3,140+) | Wembley Classic £1,699 `comfortably` · Wembley Premium £2,049 `at-budget` · Canary Wharf £2,150 `at-budget` | Brixton £1,675 `well-under` · Limehouse £1,742 `well-under` |

Distribution check: full range covered (`well-under` → `over-budget`). Kitchen-quality distribution covers `good` / `average` / `poor`. No collapse to one value on any relative field.

---

## GRAINGER PLC

### Operator-level V2 defaults (apply to all 3 Grainger buildings)

| Block | Field | Value | Source |
|---|---|---|---|
| architecture | `is_signature` | `false` | Functional institutional BTR; no Pritzker / Stirling across the three London sites |
| architecture | `awards` | `[]` | None surfaced on graingerplc.co.uk portfolio or press |
| building_quality | `heating_type` | `"communal"` (inferred) | Post-2015 London BTR default |
| building_quality | `sound_insulation` | `"good"` | Part E 2015+ compliant new-build; no dominant complaint cluster on HomeViews |
| building_quality | `thermal_performance` | `"good"` (inferred) | EPC B expected consistent with 2018-2025 BTR delivery |
| amenities | `bike_storage` | `true` | Grainger portfolio-wide |
| amenities | `pet_policy` | `"Pets considered on application — Grainger policy, ~£25/mo pet rent typical"` | Grainger portfolio default |

---

### Grainger → Argo Apartments (`argo-apartments` / canning-town)

**building_quality**
- `epc_rating`: `"B"` (inferred — built 2018; verify via EPC register, E16 postcode)
- `sound_insulation`: `"good"` (but HomeViews notes traffic noise — building fronts a very busy road; `"average"` defensible if review signal weighted heavier)
- `thermal_performance`: `"good"`
- `layout_notes`: "Open-plan living/kitchen with separate bedrooms, balcony on most units, integrated storage. 134 homes across a single 20+ storey tower inside the £600m Hallsville Quarter regeneration."
- `kitchen_quality`: `"good"` (full kitchen, integrated appliances, dishwasher standard on Grainger spec)
- `heating_type`: `"communal"` (inferred)
- `notes`: "Built 2018 — oldest of the three London Grainger buildings. Traffic noise is a recurring review theme; otherwise strong review signal."

**amenities**
- `pool`: false / `pool_notes`: ""
- `gym`: true / `gym_quality`: `"average"` (functional BTR gym; not destination-grade)
- `concierge`: `"24h"` (Grainger marketing explicitly says "24/7 onsite team")
- `sky_lounge`: false
- `co_working`: true (meeting and conference rooms)
- `dining_room`: true (large dining room bookable)
- `cinema_room`: false
- `rooftop_terrace`: true (panoramic-view roof terrace)
- `parking`: true (residents' parking)
- `bike_storage`: true
- `pet_policy`: "Pets considered on application"
- `other_amenities`: `["Games room (ping pong)", "Guest hotel room", "Free Wi-Fi"]`
- `overall_tier`: `"decent"` (24h concierge + gym + co-working + rooftop + guest suite → borderline `strong`; holding `decent` because gym is average-tier)

**architecture**
- `architects`: `[]` (not confirmed on Grainger / AGC BTR page)
- `awards`: `[]`
- `is_signature`: `false`
- `style_notes`: "Single mid-rise BTR tower inside the Hallsville Quarter masterplan. Brick-and-glass idiom, no distinctive silhouette."

**long_form**
- `full`: "Argo Apartments is Grainger's 134-home BTR tower inside the £600m Hallsville Quarter regeneration in Canning Town, delivered 2018. Grainger developed and operates the building in-house with a 24/7 on-site team — the fullest concierge posture of the three London Grainger sites. Amenity package is broader than most BTR at this tier: resident-bookable guest hotel room, games room (ping pong), large dining room, meeting and conference rooms, a gym, and a panoramic-view rooftop terrace. Canning Town station (Jubilee + DLR) is two minutes' walk, putting Canary Wharf at 4 minutes and Bond Street at 17. 1-bed sits in the £2,050-2,200 band; 2-bed £2,450-2,700. Grainger's verbatim guarantor-acceptance and 'Better Renting' long-tenancy offer (1/3/5-year leases) are the grad-visa unlocks. Traffic noise is the one persistent review complaint — the building fronts a very busy road."
- `living_experience`: "HomeViews rates the building 3.94/5 with consistent praise for the 24/7 concierge team — responsive, friendly, professional. Gym, meeting rooms, and the roof terrace are well-used. The dominant complaint is traffic noise; acoustic-sensitive residents should request a unit on a non-road-facing aspect."
- `notable_features`: "24/7 concierge (richer than Fortunes Dock / Windlass); resident-bookable guest hotel room (unusual at this tier); ping-pong games room; inside the Hallsville Quarter high street + Morrisons within 2 minutes; Canning Town Jubilee+DLR at the door."

**resident_signal**
- `homeviews_score`: `3.94` (convert to 10-point: ~7.9/10 — HomeViews uses 5-point in some places, 10-point in others; verify representation)
- `homeviews_url`: `https://www.homeviews.com/development/argo-apartments-e16`
- `summary`: "3.94/5 on HomeViews across multiple review cycles. Consistent praise for the 24/7 concierge team (named by multiple residents) and the amenity package. Consistent complaint is traffic noise — the building fronts a busy arterial road."
- `common_complaints`: `["Traffic noise from the fronting road", "No on-street parking in the wider area"]`
- `common_praise`: `["24/7 concierge team responsiveness", "Gym and amenity package quality", "Transport connectivity"]`

**rental.prices** (refresh)
- `one_bed`: `[2050, 2200]` (inferred from Rightmove Argo listings + Grainger positioning)
- `two_bed`: `[2450, 2700]`
- `bills_included`: `false`
- `price_transparency`: `"listed"`
- `notes`: "Band from Rightmove active listings + graingerplc.co.uk/developments/argo-apartments"

**Affordability:** `at-budget` (1-bed sits right at envelope ceiling; 2-bed tips `stretch`).

---

### Grainger → Fortunes Dock (`fortunes-dock` / royal-wharf-and-docks)

**building_quality**
- `epc_rating`: `"B"` (inferred; verify on EPC register — E16 2XB)
- `sound_insulation`: `"good"`
- `thermal_performance`: `"good"` (Phase 2 Seraphina delivered 2025 — newest stock)
- `layout_notes`: "Three buildings (Argo, Nautilus, Seraphina) — not to be confused with the Canning Town Argo. Open-plan living/kitchen, separate bedrooms, balcony on most units, integrated storage. Grainger's marketing explicitly flags 'excellent storage' for Seraphina."
- `kitchen_quality`: `"good"`
- `heating_type`: `"communal"`
- `notes`: "412-home cluster. Phase 2 delivered 2025 — newest Grainger London stock. Part of the wider Ballymore Royal Wharf masterplan so amenity extends beyond the building boundary."

**amenities**
- `pool`: false / `pool_notes`: "(Royal Wharf masterplan Clubhouse has pool/spa/gym — residents may access depending on masterplan terms; not inside the Grainger demise)"
- `gym`: true / `gym_quality`: `"average"`
- `concierge`: `"daytime"` (verify — may be 24h at the newest phase)
- `sky_lounge`: false
- `co_working`: true
- `dining_room`: true
- `cinema_room`: false
- `rooftop_terrace`: true
- `parking`: true
- `bike_storage`: true
- `pet_policy`: "Pets considered on application"
- `other_amenities`: `["Residents' lounge", "Thames Clipper pier access (Royal Wharf masterplan)", "Royal Wharf high street + Sainsbury's Local + Clubhouse amenity"]`
- `overall_tier`: `"decent"` (own amenity package is decent; masterplan overlay makes it effectively `strong` in lived terms)

**architecture**
- `architects`: `[]`
- `awards`: `[]`
- `is_signature`: `false`
- `style_notes`: "Three-building BTR cluster within the Ballymore Royal Wharf masterplan. Brick and metal-cladding language consistent with the masterplan palette. Respects dock frontage without being landmark."

**long_form**
- `full`: "Fortunes Dock is Grainger's 412-home BTR cluster at Royal Wharf — three buildings (Argo, Nautilus, Seraphina), developed and operated in-house. Seraphina (Phase 2, 132 homes) completed 2025 and reached 50% let in under a month, confirming strong lease-up demand. The cluster sits inside Ballymore's Royal Wharf masterplan, so residents effectively inherit the masterplan's on-site high street, Sainsbury's Local, Thames Clipper pier, and the Clubhouse amenity block on top of Grainger's in-building gym, co-working, dining room, and rooftop terrace. Elizabeth Line at Custom House (6 min walk) puts Liverpool Street at 8 minutes, Canary Wharf at 4. 1-bed from ~£2,050 pcm; 2-bed from ~£2,640. Grainger's verbatim guarantor-acceptance is the grad-visa unlock."
- `living_experience`: "HomeViews rates the cluster 4.79/5 — the highest of the three London Grainger buildings. Residents consistently praise the modern design, quality finishes, and proactive management. Long-term retention signal is strong (multiple reviewers mention extending into 2026). The masterplan overlay means daily-life quality substantially exceeds what the standalone building would deliver."
- `notable_features`: "Newest Grainger London stock (Seraphina 2025); layered on top of Royal Wharf masterplan amenities (Clubhouse pool/spa/gym + high street + Thames Clipper pier); Elizabeth Line at 6 minutes; 50%-let-in-a-month Phase 2 lease-up as demand signal."

**resident_signal**
- `homeviews_score`: `4.79` (5-point) ≈ 9.6/10
- `homeviews_url`: `https://www.homeviews.com/development/fortunes-dock-e16`
- `summary`: "4.79/5 on HomeViews — top of the Grainger London portfolio. Residents praise modern design, quality finishes, proactive management. Multiple reviewers mention renewing into 2026. Phase 2 (Seraphina) is the newest, so the review pool skews toward earlier phases."
- `common_complaints`: `["Pricier than some competitors in the area", "Distance from Zone 1 (offset by Elizabeth Line)"]`
- `common_praise`: `["Modern, stylish, well-designed units", "Proactive and helpful management", "High-quality finishes", "Strong amenity package on top of masterplan overlay"]`

**rental.prices**
- `one_bed`: `[2050, 2250]`
- `two_bed`: `[2640, 2850]`
- `bills_included`: `false`
- `price_transparency`: `"listed"`
- `notes`: "Bands from fortunesdock.co.uk + Grainger plc portfolio page; Phase 2 (Seraphina) carries the newest positioning"

**Affordability:** `at-budget` (1-bed) / `stretch` (2-bed).

---

### Grainger → Windlass Apartments (`windlass-apartments` / tottenham-hale)

**building_quality**
- `epc_rating`: `"B"` (inferred; verify on EPC register, N17 postcode)
- `sound_insulation`: `"good"` (waterside orientation helps; no dominant noise complaint in reviews)
- `thermal_performance`: `"good"`
- `layout_notes`: "~180 units, up to 10 storeys (low-rise by BTR standard). All units carry balconies. Waterside orientation toward Walthamstow Wetlands and River Lea. Open-plan living with separate bedrooms. Furniture package included — beds and sofas provided (residents note positively)."
- `kitchen_quality`: `"good"`
- `heating_type`: `"communal"`
- `notes`: "Completed 2021. Waterside with universal balconies is a genuine differentiator vs. the other two Grainger London buildings."

**amenities**
- `pool`: false / `pool_notes`: ""
- `gym`: true / `gym_quality`: `"average"` (24/7 access — noted on Grainger marketing)
- `concierge`: `"daytime"` (verify — on-site management but not confirmed 24/7)
- `sky_lounge`: false
- `co_working`: true (resident's lounge + spaces to work)
- `dining_room`: false (residents' lounge is general-purpose not bookable dining)
- `cinema_room`: false
- `rooftop_terrace`: true (waterside terrace)
- `parking`: **false** (flagged in reviews as "no parking onsite or much around the area")
- `bike_storage`: true
- `pet_policy`: "Pets considered on application"
- `other_amenities`: `["Super-fast Wi-Fi included", "Resident's lounge", "Furnished option (beds + sofas provided)"]`
- `overall_tier`: `"decent"`

**architecture**
- `architects`: `[]` (Waterside Places developed; architect not surfaced on Grainger page)
- `awards`: `[]`
- `is_signature`: `false`
- `style_notes`: "Mid-rise waterside BTR at Hale Wharf. Contemporary brick-and-metal cladding, balconies on every elevation. Low-rise by London BTR standard — 10 storeys maximum."

**long_form**
- `full`: "Windlass Apartments is Grainger's 2021-delivered BTR at Hale Wharf, Tottenham Hale. ~180 units across a low-rise (≤10-storey) waterside massing with balconies on every unit. Developed by Waterside Places, operated in-house by Grainger. The site sits between Walthamstow Wetlands and the River Lea — genuinely tranquil setting five minutes from Tottenham Hale station (Victoria Line + National Rail + upcoming Northern Liverpool Street connections). Furniture package is included by default (beds + sofas), which is differentiated from both Argo and Fortunes Dock. 1-bed from ~£2,150 pcm; 2-bed from ~£2,500. The trade-off is no on-site parking and limited nearby parking supply."
- `living_experience`: "HomeViews rates the building 4.24/5 — solid mid-range. Residents praise the furniture design and the location's proximity to Walthamstow Wetlands. Transport connectivity is consistently called out. The recurring complaints are building-management communication quality (intermittent miscommunication in resident emails) and the parking situation. No dominant noise or heating complaints."
- `notable_features`: "All-balcony layout; waterside orientation between Walthamstow Wetlands and River Lea; fully-furnished option with beds and sofas included; low-rise massing (10 storeys max) — lighter density than most BTR; 24/7 in-building gym."

**resident_signal**
- `homeviews_score`: `4.24` (5-point) ≈ 8.5/10
- `homeviews_url`: `https://www.homeviews.com/development/windlass-apartments-n17`
- `summary`: "4.24/5 on HomeViews. Consistent praise for furniture design, location, and transport links. Recurring complaints about management-team communication and lack of on-site parking. Gym and Wi-Fi included in rent."
- `common_complaints`: `["Building-management communication quality — occasional incorrect/irrelevant email communications", "No on-site parking and limited nearby parking"]`
- `common_praise`: `["Fully-furnished design — beds and sofas included", "Proximity to Walthamstow Wetlands and River Lea", "Transport connectivity — 5 minutes to Tottenham Hale (Victoria Line)"]`

**rental.prices**
- `one_bed`: `[2150, 2350]`
- `two_bed`: `[2500, 2750]`
- `bills_included`: `false` (Wi-Fi included; utilities not)
- `price_transparency`: `"listed"`
- `notes`: "Bands from windlass-apartments.co.uk + Rightmove active listings"

**Affordability:** `at-budget` (1-bed) / `stretch` (2-bed).

---

## MODA LIVING

### Operator-level V2 defaults

| Block | Field | Value | Source |
|---|---|---|---|
| building_quality | `heating_type` | `"communal"` (inferred) | Post-2015 premium BTR default; district heating expected |
| building_quality | `sound_insulation` | `"good"` | Premium-tier new-build, Part E compliant |
| building_quality | `thermal_performance` | `"good"` | EPC B expected — verify per building |
| amenities | `concierge` | `"24h"` (default) | Moda brand is 24h concierge at both London sites |
| amenities | `bike_storage` | `true` | Premium BTR standard |
| amenities | `pet_policy` | `"Pets welcome — subject to policy and fee"` | Moda brand allows pets across portfolio |

**Operator note on qualification (V1 scope, do not re-touch):** Moda is the hard-block exemplar — Experian 561+ floor, UK-only guarantor. These two buildings are likely `grad_visa_realism: "blocked"` or `"unlikely"` irrespective of V2 enrichment quality.

---

### Moda → The Stage EC2 (`the-stage-ec2` / old-street-hoxton)

**building_quality**
- `epc_rating`: `"B"` (inferred — completed 2023; verify on EPC register)
- `sound_insulation`: `"good"`
- `thermal_performance`: `"good"`
- `layout_notes`: "37-storey landmark tower with 412 apartments wrapping a central public piazza. Art Deco × industrial chic interiors (design language explicit in marketing). Studios through to 4-bed duplex penthouses. Floor-to-ceiling glazing; dual-aspect on many units due to the wrap plan around the piazza."
- `kitchen_quality`: `"good"` (premium BTR spec — full kitchen, integrated appliances, dishwasher)
- `heating_type`: `"communal"`
- `notes`: "Completed 2023. 37-storey tower — among the tallest residential in Shoreditch/Hackney. Mixed-use block with retail, leisure, office space, and the Curtain Theatre heritage centre at ground level."

**amenities**
- `pool`: false / `pool_notes`: ""
- `gym`: true / `gym_quality`: `"good"` (private residents' gym + yoga studio + changing rooms)
- `concierge`: `"24h"`
- `sky_lounge`: **true** (32nd-floor sky bar, lounge, and terrace)
- `co_working`: true (business lounge + meeting rooms)
- `dining_room`: true
- `cinema_room`: **true** (two screening rooms — Shakespeare-themed décor, decorated with film posters of Shakespeare adaptations)
- `rooftop_terrace`: true
- `parking`: true (secure underground parking)
- `bike_storage`: true
- `pet_policy`: "Pets welcome — subject to Moda policy and fee"
- `other_amenities`: `["Two-lane bowling alley", "Golf simulator", "Pool table + air hockey + table tennis", "Arcade games", "Games lounge"]`
- `overall_tier`: `"strong"` (24h concierge + good gym + co-working + sky bar + cinema + bowling alley; absence of pool keeps it below `premium`)

**architecture**
- `architects`: `["Perkins + Will"]` (confirmed via Galliard Homes + Wikipedia)
- `awards`: `[]` (none surfaced in immediate search — worth a press re-check for the mixed-use/heritage integration)
- `is_signature`: **`true`**
- `style_notes`: "37-storey landmark tower designed by Perkins + Will, wrapping a central public piazza that houses retail, leisure, office units, and the heritage centre containing the remains of Shakespeare's Curtain Theatre. Art Deco × industrial-chic interior language. One of the tallest residential towers at the Shoreditch/Hackney fringe and a genuine piece of destination architecture within the Shoreditch skyline."

**long_form**
- `full`: "The Stage EC2 is a 412-apartment, 37-storey landmark tower in Shoreditch, developed by Galliard + McCourt Group + Cain Hoy + Vanke, operated by Moda Living. Completed 2023. The defining feature is architectural: Perkins + Will designed the tower to wrap a central public piazza, which houses retail, leisure, office space, and a purpose-built heritage centre containing the remains of Shakespeare's Curtain Theatre (one of Shoreditch's Elizabethan playhouses). Residential amenity is among the broadest of any Moda site: a 32nd-floor sky bar + lounge + terrace, two screening rooms with Shakespeare-themed décor, a two-lane bowling alley, a golf simulator, a games lounge (pool, air hockey, table tennis, arcade games), a private residents' gym with yoga studio and changing rooms, a business lounge with meeting rooms, and 24-hour concierge. Secure underground parking. Liverpool Street at 6 minutes' walk; Shoreditch High Street (London Overground) directly adjacent. Studios from £2,750 pcm."
- `living_experience`: "Amenity-heavy day-to-day — the sky bar, bowling alley, and games lounge make the tower function partly as a social venue in its own right. For a graduate-visa applicant, the building is almost certainly **blocked** at qualification: Moda's Experian 561+ floor and UK-only guarantor requirement are documented hard blocks regardless of how strong the V2 enrichment is. Treat this entry as informational context, not a viable email target."
- `notable_features`: "Perkins + Will-designed 37-storey landmark; wraps central public piazza with Curtain Theatre heritage centre (genuine architectural significance — rare signature mark in the dataset); 32nd-floor sky bar + lounge; two-lane bowling alley + golf simulator + two cinema rooms; Liverpool Street 6 minutes walk."

**resident_signal**
- `homeviews_score`: unknown — verify at https://www.homeviews.com/development/the-stage-ec2a
- `homeviews_url`: `https://www.homeviews.com/development/the-stage-ec2a`
- `summary`: "HomeViews listing exists; score not captured in this research pass. Premium-BTR review signal expected to track Moda's typical 8+/10. Worth a direct fetch in a follow-up pass."
- `common_complaints`: []
- `common_praise`: []

**rental.prices**
- `studio`: `[2750, 2950]` (OnTheMarket listing £2,750 pcm)
- `one_bed`: `[3100, 3400]` (inferred from Moda positioning + OnTheMarket)
- `two_bed`: `[3800, 4300]`
- `bills_included`: `false`
- `price_transparency`: `"listed"` (enquire for exact unit)
- `notes`: "Bands from thestageshoreditch.com + OnTheMarket + circalondon.com"

**Affordability:** `stretch`→`over-budget` (studio £2,750 exactly at all-in ceiling; 1-bed £3,100+ breaches; effectively `over-budget` for Caner's 1-bed envelope.)

---

### Moda → Embassy Boulevard (`embassy-boulevard` / nine-elms)

**building_quality**
- `epc_rating`: `"B"` (inferred — 2025 delivery; verify)
- `sound_insulation`: `"good"`
- `thermal_performance`: `"good"`
- `layout_notes`: "467 homes (437 BTR) across two blocks, 9-13 storeys. Studios through 3-bed. Smart-home technology throughout. High-quality interiors. Fully furnished/managed option. Located next to the US Embassy at the heart of Nine Elms Zone 1."
- `kitchen_quality`: `"good"`
- `heating_type`: `"communal"`
- `notes`: "Moda's debut London neighbourhood, delivered 2025. 20,000+ sq ft of amenity space — the heaviest amenity package in the Moda London portfolio."

**amenities**
- `pool`: false / `pool_notes`: "(Sky Pool at the adjacent Ballymore Embassy Gardens is a different scheme; Moda Embassy Boulevard residents do NOT inherit Sky Pool access.)"
- `gym`: true / `gym_quality`: `"excellent"` (three fitness spaces, Technogym-powered, HIIT studio, yoga/Pilates suite, dedicated weight + cardio zones, free weekly classes)
- `concierge`: `"24h"`
- `sky_lounge`: true (rooftop gardens + lounge)
- `co_working`: true (library + co-working)
- `dining_room`: true (private dining rooms)
- `cinema_room`: true (screening rooms)
- `rooftop_terrace`: true (rooftop gardens + BBQ zones)
- `parking`: true (verify per listing — Nine Elms parking usually reduced)
- `bike_storage`: true
- `pet_policy`: "Pets welcome — subject to Moda policy and fee"
- `other_amenities`: `["London's first BTR golf simulator", "Karaoke room", "Games room (table tennis + pool tables)", "Library"]`
- `overall_tier`: **`"premium"`** (24h concierge + excellent gym + sky lounge + 3+ other amenities cleared)

**architecture**
- `architects`: `[]` (HTA hypothesis not confirmed in this research pass; verify on modagroup.com press release and Buildington)
- `awards`: `[]`
- `is_signature`: `false` (competent premium new-build, Technogym-heavy brand amenity is the differentiator — not the architectural form)
- `style_notes`: "Two blocks, 9-13 storeys, massing held below the Nine Elms high-rise cluster. Contemporary cladding, ground-floor activation facing Linear Place and the wider embassy boulevard axis. Interiors lean toward premium-hospitality rather than industrial-chic."

**long_form**
- `full`: "Embassy Boulevard is Moda Living's debut London neighbourhood — 467 rental homes (437 BTR) across two 9-13 storey blocks in Nine Elms Zone 1, delivered 2025. 20,000+ sq ft of amenity space is the headline differentiator: three dedicated fitness spaces with Technogym equipment, a HIIT studio, a yoga/Pilates suite, London's first BTR golf simulator, private dining rooms, two cinema screening rooms, a karaoke room, a games room with table tennis and pool tables, rooftop gardens with BBQ zones, and a library. 24-hour concierge. Studio from £2,680 pcm; 1-bed from £3,140; 2-bed from £3,575; 3-bed from £4,695. The building is explicit about its 2.66× income multiple (unusually transparent for BTR). Located steps from the US Embassy; Vauxhall (Victoria Line + Mainline) 10 minutes walk; Battersea Power Station (Northern Line) 8 minutes. **Caner-specific note:** Moda is the dataset's hard-block exemplar — Experian 561+ credit floor, UK-only guarantor. Qualification is almost certainly blocked for a graduate-visa applicant regardless of upfront-rent offer."
- `living_experience`: "Amenity programme is genuinely the heaviest in Moda's London portfolio — the Technogym + golf simulator + karaoke + games lounge combination puts the building close to a private members' club. For a qualifying tenant, this is premium BTR living at a premium BTR price. For Caner, qualification is the decisive block — the lived experience is not the relevant lens here."
- `notable_features`: "20,000+ sq ft amenity space (headline); London's first BTR golf simulator; three fitness spaces with Technogym + HIIT + yoga/Pilates; karaoke room (rare amenity); Moda's debut London neighbourhood; transparent 2.66× income multiple."

**resident_signal**
- `homeviews_score`: unknown — verify (new-build 2025, review pool may still be thin)
- `homeviews_url`: unknown — check https://www.homeviews.com/development/embassy-boulevard
- `summary`: "Too few reviews for reliable signal (delivered 2025, Moda's debut London building). Moda portfolio-wide HomeViews scores typically 8+/10; similar expected here once review pool matures."
- `common_complaints`: []
- `common_praise`: []

**rental.prices**
- `studio`: `[2680, 2770]` (OnTheMarket + PrimeLocation)
- `one_bed`: `[3140, 3430]` (OnTheMarket 1-bed listings)
- `two_bed`: `[3575, 4055]`
- `bills_included`: `false` (Moda standard; utilities and council tax separate)
- `price_transparency`: `"listed"`
- `notes`: "Bands from modaliving.com/locations/london/embassy-boulevard + OnTheMarket + PrimeLocation active listings"

**Affordability:** `over-budget` (even the studio at £2,680 breaches the £2,250 preferred 1-bed ceiling; 1-bed starts £3,140).

---

## ARK CO-LIVING

### Operator-level V2 defaults

| Block | Field | Value | Source |
|---|---|---|---|
| building_quality | `heating_type` | `"communal"` | Co-living standard; bills-inclusive model |
| building_quality | `kitchen_quality` | **`"poor"`** (dataset anchor) | Kitchenette only — mini-fridge + small hob + combi microwave; minimal prep space. This is the canonical `poor` call in the dataset. |
| building_quality | `sound_insulation` | `"average"` | HomeViews + TripAdvisor note short-stay turnover noise at Canary Wharf |
| amenities | `pet_policy` | `"No pets"` | Co-living standard |
| rental | `bills_included` | `true` | All-inclusive is the ARK model |

**Confirmation of the anchor call:** ARK Canary Wharf and ARK Wembley studios carry kitchenettes with stovetop, refrigerator, oven and microwave — but no full kitchen, no dishwasher, limited counter/prep space. This is the canonical `poor` kitchen-quality example in the dataset per enrichment-schema.md §Block 1. Hold the `"poor"` call across both buildings.

---

### ARK → ARK Canary Wharf (`ark-canary-wharf`)

**building_quality**
- `epc_rating`: unknown (verify — the building is a converted tower; EPC register by full address)
- `sound_insulation`: `"average"` (short-stay noise complaint explicit in reviews)
- `thermal_performance`: `"average"`
- `layout_notes`: "Studios at Crossharbour Plaza, E14. Kitchenette along one wall with stovetop, small refrigerator, oven, and combi microwave. Private ensuite bathroom. Parquet floors. Smart storage, smart TV, hairdryer, safe. Compact — reviewers note insufficient space to set up a desk for work alongside the bed."
- `kitchen_quality`: **`"poor"`** (dataset anchor — kitchenette + combi microwave; no dishwasher; minimal prep space; cooking dinner properly requires trade-offs)
- `heating_type`: `"communal"`
- `notes`: "Pre-existing tower conversion operated by ARK. Small studio footprint (20-28 sqm) + kitchenette; regular-cook-unfriendly but bills-inclusive licence model compensates on simplicity."

**amenities**
- `pool`: **true** / `pool_notes`: "20th-floor swimming pool — rare for a co-living operator at this price point"
- `gym`: true / `gym_quality`: `"average"` (fitness gym + wellness studio — functional, not destination)
- `concierge`: `"24h"` (co-living operator standard)
- `sky_lounge`: true (20th-floor amenity levels)
- `co_working`: true
- `dining_room`: true (communal kitchen + dining)
- `cinema_room`: false (verify)
- `rooftop_terrace`: true
- `parking`: false
- `bike_storage`: true
- `pet_policy`: "No pets"
- `other_amenities`: `["Spa", "Sauna", "Bar", "Café", "Regular resident events calendar", "All-bills-inclusive"]`
- `overall_tier`: `"decent"` (pool + sauna + gym + 24h concierge pushes toward `strong`; the low-spec kitchen and compact unit keeps overall lived experience from clearing `strong`)

**architecture**
- `architects`: `[]` (conversion of existing tower; no named architect for the ARK fit-out)
- `awards`: `[]`
- `is_signature`: `false`
- `style_notes`: "Pre-existing Canary Wharf tower converted for co-living. 20-storey+ massing; the 20th-floor pool + amenity levels are the distinctive internal feature, not the exterior form."

**long_form**
- `full`: "ARK Canary Wharf is a co-living building at Crossharbour Plaza, E14, occupying a converted tower with 20th-floor amenity levels. Studios are compact (20-28 sqm) with kitchenette (stovetop, mini-fridge, combi microwave — no full kitchen, no dishwasher), ensuite bathroom, parquet floors, and the smart-home standard (smart TV, safe, hairdryer). The differentiator vs. Node and Folk in the co-living category is the amenity package: 20th-floor swimming pool, sauna, spa, fitness gym, wellness studio, bar, café, co-working, regular community events. All bills included. 3-12 month licence contracts. Studios from around £2,150/month. Licence-exempt from RRA — ARK sets its own qualification rules, which is the grad-visa unlock."
- `living_experience`: "Residents praise the design, building management, and the pool + sauna combination that is rare at this price tier. Principal complaint is that the building skews toward short-stay / transient residents, which degrades acoustic privacy and the quality of communal life — for some reviewers the turnover feels hotel-like rather than residential. Compact room dimensions are a second consistent note; setting up a desk for WFH alongside the bed is a challenge."
- `notable_features`: "20th-floor pool + sauna + spa (rare at this price tier for co-living); all-bills-inclusive; licence-exempt qualification (the grad-visa unlock); Canary Wharf DLR + Jubilee on the doorstep; 3-month minimum contract.";

**resident_signal**
- `homeviews_score`: unknown — verify at `https://www.homeviews.com/development/ark-canary-wharf-e14`
- `homeviews_url`: `https://www.homeviews.com/development/ark-canary-wharf-e14`
- `summary`: "HomeViews listing exists; explicit score not captured in this pass. Review signal splits between strong praise for design, management, and amenity vs. consistent complaint about short-stay turnover noise and compact unit size."
- `common_complaints`: `["Short-stay turnover creates noise and diminishes community feel", "Compact studios — insufficient space for desk + bed combination"]`
- `common_praise`: `["20th-floor pool + sauna + spa", "Modern design, well-maintained building", "Responsive, quality management team"]`

**rental.prices**
- `studio`: `[2050, 2350]` (around £2,150 centre from existing dataset)
- `bills_included`: `true`
- `price_transparency`: `"listed"` (publicly quoted on arkcoliving.com; confirm live)
- `notes`: "Band from arkcoliving.com/locations/canary-wharf; bills fully inclusive"

**Affordability:** `at-budget` (£2,150 studio all-in, inside £2,750 all-in ceiling with headroom; the 1-bed envelope is not cleanly applicable because co-living studios are a different unit class).

---

### ARK → ARK Wembley (`ark-wembley`)

**building_quality**
- `epc_rating`: unknown (verify — HA9 postcode on EPC register)
- `sound_insulation`: `"good"` (no dominant noise complaint cluster; different operational context from Canary Wharf)
- `thermal_performance`: `"good"`
- `layout_notes`: "Three tiers: Classic studios 20 sqm, Premium studios 28 sqm, Premium Plus studios 29 sqm. Kitchenette along one wall (stovetop, small fridge, combi microwave). Ensuite bathroom. Currently Premium and Premium Plus are sold out until August 2026; only Classic available."
- `kitchen_quality`: **`"poor"`** (anchor — same kitchenette spec as Canary Wharf; hold the dataset anchor)
- `heating_type`: `"communal"`
- `notes`: "Co-living studios at Wembley Park. Three size tiers with the Classic 20 sqm the smallest in the Wembley dataset. Bills-inclusive."

**amenities**
- `pool`: false / `pool_notes`: ""
- `gym`: true / `gym_quality`: `"poor"` (onsite gym present but lighter than Canary Wharf amenity package)
- `concierge`: `"24h"` (verify — co-living default)
- `sky_lounge`: false
- `co_working`: true
- `dining_room`: true (communal kitchen)
- `cinema_room`: false
- `rooftop_terrace`: false (verify)
- `parking`: false
- `bike_storage`: true
- `pet_policy`: "No pets"
- `other_amenities`: `["Communal kitchen", "Regular events calendar", "All-bills-inclusive"]`
- `overall_tier`: `"decent"`→`"basic"` (materially lighter amenity than Canary Wharf — no pool, no sauna, no spa; gym is minimal)

**architecture**
- `architects`: `[]`
- `awards`: `[]`
- `is_signature`: `false`
- `style_notes`: "Mid-rise co-living within the wider Quintain Wembley Park masterplan. No distinctive architectural identity; amenity and operational model are the differentiators, not form."

**long_form**
- `full`: "ARK Wembley is a co-living building in Wembley Park with studios across three size tiers: Classic (20 sqm, £1,699/mo), Premium (28 sqm, £2,049/mo), Premium Plus (29 sqm, £2,099/mo). All-bills inclusive licence model. 3-12 month contracts. Kitchenette (stovetop + mini-fridge + combi microwave), ensuite bathroom, onsite gym, co-working, communal kitchen, regular events. Premium and Premium Plus are currently sold out through August 2026 — only Classic tier is available. Wembley Park station (Jubilee + Metropolitan) at the door; Bond Street 14 min. Licence-exempt from RRA — ARK sets its own qualification rules, making it one of the more grad-visa-viable options in the dataset."
- `living_experience`: "Materially lighter amenity package than ARK Canary Wharf — no pool, no spa, no sauna. The draw here is price + location: Classic tier is comfortably-affordable at £1,699, which is rare in the dataset for an operator with a licence-exempt qualification model. 20 sqm Classic studios are genuinely compact — a smaller footprint than the Wembley competitor buildings. The trade-off for the kitchenette-only cooking setup is amplified at this size."
- `notable_features`: "Three size tiers (20/28/29 sqm); Classic tier £1,699 is the dataset's cheapest co-living studio that isn't actively undesirable; Premium/Premium Plus sold out until August 2026 (signal of demand); Wembley Park station at the door; licence-exempt qualification."

**resident_signal**
- `homeviews_score`: unknown — verify on homeviews.com/company/ark-co-living
- `homeviews_url`: unknown
- `summary`: "Thin review pool relative to Canary Wharf sibling. ARK company-level HomeViews signal is mixed — praise for design and management, concerns about short-stay culture and compact rooms."
- `common_complaints`: `["Compact Classic studio footprint (20 sqm)", "Kitchenette-only cooking setup"]`
- `common_praise`: `["All-bills inclusive simplicity", "Wembley Park location + transport", "Licence-exempt qualification (grad-visa unlock)"]`

**rental.prices**
- `studio` (Classic): `[1699, 1699]`
- `studio` (Premium): `[2049, 2049]`
- `studio` (Premium Plus): `[2099, 2099]`
- `bills_included`: `true`
- `price_transparency`: `"listed"` (publicly quoted)
- `notes`: "Tiered pricing from arkcoliving.com/locations/wembley. Premium + Premium Plus sold out through August 2026."

**Affordability:**
- Classic 20 sqm £1,699: `comfortably-affordable`
- Premium 28 sqm £2,049: `at-budget`
- Premium Plus 29 sqm £2,099: `at-budget`
(Default tag for the project record: `at-budget`, because only Classic is genuinely cheap and Premium availability returns in August 2026.)

---

## NODE LIVING

### Operator-level V2 defaults

| Block | Field | Value | Source |
|---|---|---|---|
| building_quality | `heating_type` | `"communal"` | Co-living standard |
| building_quality | `kitchen_quality` | **`"average"`** (dataset midpoint anchor) | Kitchenette in studio + **shared fully-equipped kitchen on each floor** — the shared floor kitchen is the differentiator vs. ARK's kitchenette-only model. Cook-in-studio covers light prep; serious cooking happens in the floor kitchen. |
| building_quality | `sound_insulation` | `"good"` | No dominant noise complaint cluster on HomeViews |
| amenities | `pet_policy` | `"No pets"` | Co-living standard |
| rental | `bills_included` | `true` | All-inclusive is the Node model (utilities + Wi-Fi + council tax) |

**Anchor call for `"average"`:** Node's model is the dataset `"average"` midpoint — in-studio kitchenette is thin (fridge + hob + combi microwave, same as ARK), but the shared fully-equipped kitchen on every floor materially upgrades the cooking reality. This is a genuine step above ARK kitchenette-only. Hold `"average"` across both Node buildings.

---

### Node → Node Limehouse (`node-limehouse` / poplar-blackwall)

**building_quality**
- `epc_rating`: unknown (verify — E14 postcode; the building is a historic warehouse conversion so EPC may skew lower than new-build Node sites)
- `sound_insulation`: `"good"` (no dominant complaint)
- `thermal_performance`: `"good"` (verify — warehouse conversion may run lower than ideal on thermal)
- `layout_notes`: "Historic warehouse converted for co-living, Thames-facing. Private studios with kitchenette (fridge + hob + combi microwave). Ensuite bathroom. Shared fully-equipped kitchen on each floor. Shared lounges, co-working spaces, and outdoor communal areas."
- `kitchen_quality`: `"average"` (kitchenette + floor-shared full kitchen — the canonical midpoint)
- `heating_type`: `"communal"`
- `notes`: "Historic warehouse + Thames frontage is a genuine differentiator vs. any other co-living in the dataset. Regular cooks should plan to use the shared floor kitchen for serious prep."

**amenities**
- `pool`: false / `pool_notes`: ""
- `gym`: false / `gym_quality`: `"poor"` (no in-building gym — Node's model is lighter-amenity)
- `concierge`: `"daytime"` (verify — Node is not 24h concierge typically)
- `sky_lounge`: false
- `co_working`: true (three co-working lounges in the building)
- `dining_room`: true (shared kitchen on each floor + communal dining)
- `cinema_room`: false
- `rooftop_terrace`: true (communal outdoor areas — verify rooftop vs. ground)
- `parking`: false
- `bike_storage`: true
- `pet_policy`: "No pets"
- `other_amenities`: `["Three co-working lounges", "Shared kitchen on each floor", "Thames-side setting", "Community events programme", "All-bills-inclusive"]`
- `overall_tier`: `"decent"`

**architecture**
- `architects`: `[]` (historic warehouse; conversion architect not surfaced in this pass)
- `awards`: `[]`
- `is_signature`: `false` (the warehouse heritage is a character draw, not a Stirling-tier form)
- `style_notes`: "Historic Thames-side warehouse converted for co-living. Exposed-brick and industrial-character interiors; modern fit-out inside the preserved envelope. Setting > form — the Thames frontage is the defining quality."

**long_form**
- `full`: "Node Limehouse is Node Living's newest London co-living property, set within a historic warehouse directly on the Thames in Limehouse. Private studios with kitchenette (fridge + hob + combi microwave), ensuite bathroom, fully-furnished. Shared fully-equipped kitchens on each floor (the canonical midpoint 'average' kitchen experience in the dataset), three co-working lounges inside the building, communal outdoor areas, and regular community events. All-bills-inclusive licence: utilities, Wi-Fi, and council tax covered. Studios from £1,742/month. 3-month minimum stay. Limehouse DLR (1 stop from Canary Wharf, 2 from Tower Hill) is 6 minutes walk; the Thames Path runs along the building. Licence-exempt from RRA — Node's operator-set qualification rules are grad-visa-viable with minimal referencing."
- `living_experience`: "Residents consistently praise the natural light, storage, community events, and the Thames-adjacent setting. The primary complaint thread is that prices skew slightly high for the unit size. Lighter amenity than ARK Canary Wharf (no pool, no gym) but the warehouse character and Thames frontage pull their own weight on daily-life quality."
- `notable_features`: "Historic Thames-side warehouse conversion (genuine character); three co-working lounges inside the building; shared floor-kitchen model mitigates the studio kitchenette; all-bills-inclusive; 3-month minimum; licence-exempt qualification; direct Thames Path access."

**resident_signal**
- `homeviews_score`: unknown — verify at https://www.homeviews.com/development/node-limehouse (or equivalent slug)
- `homeviews_url`: unknown
- `summary`: "Thin review pool — Node Limehouse is Node's newer London building. Trustpilot + HomeViews company-level signal is mostly positive: natural light, storage, and community events praised; price point for the studio size noted as expensive."
- `common_complaints`: `["Price-for-size perceived as high", "No in-building gym"]`
- `common_praise`: `["Thames-side warehouse setting", "Community events programme", "Three co-working lounges inside the building", "Natural light and storage design"]`

**rental.prices**
- `studio`: `[1742, 2000]` (from £1,742 starting per Node's site)
- `bills_included`: `true`
- `price_transparency`: `"listed"`
- `notes`: "Band from node-living.com/london/node-limehouse; bills fully inclusive"

**Affordability:** `well-under-budget` (1,742 all-in sits comfortably below £2,750 all-in envelope with material headroom — cleanly below ARK Canary Wharf's £2,150 and close to Node Brixton's £1,675).

---

### Node → Node Living Brixton (`node-living-brixton`)

**building_quality**
- `epc_rating`: unknown (verify — SE24 postcode, 1940s renovated building)
- `sound_insulation`: `"good"`
- `thermal_performance`: `"average"` (1940s building renovation — older shell; verify)
- `layout_notes`: "Private studios in a 1940s building beautifully renovated for co-living. Studios have kitchenette (fridge + hob + combi microwave), ensuite bathroom. Natural light flagged as a strength by reviewers. Shared fully-equipped kitchens on each floor. Communal garden."
- `kitchen_quality`: `"average"` (same model as Limehouse — kitchenette + shared floor kitchen)
- `heating_type`: `"communal"` (inferred — renovation likely introduced communal heating)
- `notes`: "1940s renovation — older bones than Limehouse; character + location draw. Communal garden is a distinctive feature."

**amenities**
- `pool`: false / `pool_notes`: ""
- `gym`: false / `gym_quality`: `"poor"` (no in-building gym; area gym access is strong in Brixton)
- `concierge`: `"daytime"`
- `sky_lounge`: false
- `co_working`: true (work-friendly shared spaces)
- `dining_room`: true (shared kitchens + dining)
- `cinema_room`: false
- `rooftop_terrace`: false (communal garden instead — ground-level)
- `parking`: false
- `bike_storage`: true
- `pet_policy`: "No pets"
- `other_amenities`: `["Communal garden", "Shared kitchens on each floor", "Community events programme", "All-bills-inclusive"]`
- `overall_tier`: `"decent"`

**architecture**
- `architects`: `[]` (1940s original; renovation architect not surfaced)
- `awards`: `[]`
- `is_signature`: `false`
- `style_notes`: "1940s building renovated for co-living, heritage character preserved with modern fit-out inside. Communal garden at ground level. Setting is the Brixton cultural heart — Brixton Market and live music venues within steps."

**long_form**
- `full`: "Node Living Brixton is Node Living's Brixton co-living property — a beautifully renovated 1940s building that sits steps from Brixton Market and the live music venues that define the area's character. Private studios with kitchenette (fridge + hob + combi microwave), ensuite bathroom, and strong natural light (reviewer-confirmed). Shared fully-equipped kitchens on each floor; communal garden; work-friendly shared spaces. All-bills-inclusive: utilities, Wi-Fi, council tax. Studios from ~£1,675/month. Brixton station (Victoria Line + Overground) 10 minutes walk. Licence-exempt from RRA — Node's operator-set qualification rules are grad-visa-viable with minimal referencing."
- `living_experience`: "Consistent praise for natural light, the renovation quality, storage design, and community events. No in-building gym is the material amenity absence — but Brixton's area gym offer is strong, partially mitigating. The 1940s shell may run warmer/cooler than a new-build in shoulder seasons; worth flagging on viewing. Dataset's cheapest licence-exempt London studio (£1,675 — Fizzy Lewisham is cheaper at £1,280-1,450 but is AST)."
- `notable_features`: "1940s renovation character (rare in the dataset for co-living); communal garden (vs. rooftop at most co-living sites); Brixton Market + live music venues at the door; dataset's cheapest licence-exempt studio at £1,675; licence-exempt qualification."

**resident_signal**
- `homeviews_score`: unknown — verify at https://www.homeviews.com/development/node-brixton-se24
- `homeviews_url`: `https://www.homeviews.com/development/node-brixton-se24`
- `summary`: "HomeViews listing exists. Review signal is mostly positive: natural light, storage, and community events praised; price-for-size and amenity absences noted as the trade-offs."
- `common_complaints`: `["No in-building gym", "Price-for-size perceived as high by some residents"]`
- `common_praise`: `["Natural light and storage design", "Community events programme", "Communal garden", "Brixton location and cultural immersion"]`

**rental.prices**
- `studio`: `[1675, 1900]`
- `bills_included`: `true`
- `price_transparency`: `"listed"`
- `notes`: "Band from node-living.com/london/node-brixton"

**Affordability:** `well-under-budget` (£1,675 all-in is cleanly below Caner's £2,750 all-in envelope; dataset anchor for `well-under-budget` is Node Brixton itself — holds.)

---

## Summary table — relative-field calibration

| Project | `kitchen_quality` | `gym_quality` | `overall_tier` | `is_signature` | `affordability` |
|---|---|---|---|---|---|
| Argo Apartments | `good` | `average` | `decent` | `false` | `at-budget` |
| Fortunes Dock | `good` | `average` | `decent` | `false` | `at-budget` (1-bed) |
| Windlass Apartments | `good` | `average` | `decent` | `false` | `at-budget` (1-bed) |
| The Stage EC2 | `good` | `good` | `strong` | **`true`** | `over-budget` |
| Embassy Boulevard | `good` | `excellent` | `premium` | `false` | `over-budget` |
| ARK Canary Wharf | **`poor`** | `average` | `decent` | `false` | `at-budget` |
| ARK Wembley (Classic) | **`poor`** | `poor` | `decent` | `false` | `comfortably-affordable` |
| Node Limehouse | `average` | `poor` | `decent` | `false` | `well-under-budget` |
| Node Brixton | `average` | `poor` | `decent` | `false` | `well-under-budget` |

Distribution check:
- `kitchen_quality`: full spectrum — `poor` (ARK×2), `average` (Node×2), `good` (Grainger×3, Moda×2). No collapse.
- `gym_quality`: full spectrum — `poor` (ARK Wembley, Node×2), `average` (Grainger×3, ARK Canary Wharf), `good` (Stage), `excellent` (Embassy Boulevard).
- `overall_tier`: `decent` / `strong` / `premium` represented.
- `is_signature`: one `true` (Stage EC2) out of nine — the rare-and-defensible calibration holds.
- `affordability`: full spectrum — `well-under-budget` (Node×2), `comfortably-affordable` (ARK Wembley Classic), `at-budget` (Grainger×3, ARK Canary Wharf), `over-budget` (Moda×2).

---

## Sources (accessed 2026-04-17)

- https://www.graingerplc.co.uk/developments/argo-apartments
- https://www.homeviews.com/development/argo-apartments-e16
- https://www.graingerplc.co.uk/developments/fortunes-dock
- https://www.homeviews.com/development/fortunes-dock-e16
- https://www.graingerplc.co.uk/developments/windlass-apartments
- https://www.homeviews.com/development/windlass-apartments-n17
- https://windlass-apartments.co.uk/
- https://modaliving.com/locations/london/embassy-boulevard
- https://modagroup.com/news-hub/embassy-boulevard-launch
- https://www.onthemarket.com/new-homes/developers/development/embassy-boulevard-71103/
- https://www.thestageshoreditch.com/ + /amenities + /about
- https://www.galliardhomes.com/the-stage
- https://en.wikipedia.org/wiki/The_Stage,_Shoreditch
- https://www.homeviews.com/development/the-stage-ec2a
- https://arkcoliving.com/locations/canary-wharf
- https://arkcoliving.com/locations/wembley
- https://www.homeviews.com/development/ark-canary-wharf-e14
- https://www.homeviews.com/company/ark-co-living
- https://node-living.com/london/node-limehouse/
- https://node-living.com/london/node-brixton/
- https://www.homeviews.com/development/node-brixton-se24
- https://www.homeviews.com/company/node-living

Further verification (for Phase 3 fact-check pass): individual building EPC ratings via https://find-energy-certificate.service.gov.uk/; architect attribution on Embassy Boulevard; exact HomeViews scores for The Stage EC2 and Embassy Boulevard; ARK Wembley HomeViews listing existence.
