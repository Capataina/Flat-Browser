# Quintain Living — V2 Enrichment Proposal
Generated: 2026-04-17
Agent: data-upkeep V2 operator research

## Operator-wide notes

**Campus context.** Quintain Living is the in-house BTR operator (rebranded from Tipi in Oct 2020) for the Quintain Ltd masterplan at Wembley Park — a ~85-acre site with c. 6,000 homes delivered and 8,500 under outline consent. It is the UK's largest single-site BTR development and was named "Best Places to Live 2025" by The Sunday Times.

**Architect practices recurring across the campus.**
- **Flanagan Lawrence** — Alameda (2019, 340 homes), Alto (2018, 362 homes), Landsby (362 homes, Scandi), and the broader Wembley Park masterplan. Award-winning RESI / Sunday Times British Homes-shortlisted practice.
- **Haworth Tompkins** — Luna (2025, 282 homes) and Solar (2025, 383 homes) i.e. the first phase of North East Lands. Stirling Prize-winning practice (Everyman Theatre 2014) — this is the most architecturally prestigious firm on the campus.
- **JTP** — Ferrum (2020, 741 homes, NY warehouse loft aesthetic).
- **PRP Architects** — Madison (2022, 633 homes, mid-century modern).
- **Cartwright Pickard** — Beton (2020, 150 homes, concrete-and-brick language) and its sister building The Hive.
- **Allies and Morrison / Maccreanor Lavington** — Canada Gardens (2021, 743 homes) and NE02 North East Lands respectively (Maccreanor Lavington confirmed for NE02).

**Amenity patterns (operator-consistent).** All Quintain Living buildings provide: in-building gym, bike storage, dog park / pet-friendly policy, dedicated work-from-home areas, resident lounge, 250 Mbps wifi, 24-hour resident support (phone + app), keyless entry, video entry, hireable event space, and Samsung kitchen appliances. Underground resident parking and guest parking are widely available (additional fee). **No building in the Quintain Living portfolio has a swimming pool.** Concierge is best-described as "daytime plus 24h on-call support" rather than a traditional 24h lobby concierge — Madison is the one building where reviews reference a dedicated concierge desk presence.

**Heating standard.** All Wembley Park BTR buildings use **communal / district heating** (the standard for post-2018 London BTR under GLA energy policy). Individual flats have heat-interface units; thermal and sound performance is generally strong due to concrete-frame + fabric-first design, though Ferrum reviews cite overheating. Kitchens are full-size with Samsung appliances (not kitchenettes) — good-to-excellent for a renter who cooks regularly.

**EPC profile.** Quintain Living publicly claims all apartments are EPC B, with Phase 1 Ferrum (188 units) achieving Environmental Impact A. Individual EPC certificate numbers per unit would need a direct find-energy-certificate.gov.uk lookup by exact address; for the purposes of V2 enrichment, defaulting all buildings to "B (circa 83-86)" is well-supported by operator disclosure and matches the district-heat / fabric-first design brief.

**Resident signal (operator-level).** HomeViews is the highest-signal source (thousands of verified reviews across the portfolio). Trustpilot has 960 reviews at 4.5/5 but shows a bimodal 63% five-star / 30% one-star distribution — a recurring warning sign of long-tenure dissatisfaction after move-in. The dominant complaint patterns across buildings: (a) utility-cost lock-in (residents allege Quintain charges above market kWh rates for communal heat/electric), (b) long-stay management responsiveness decline, (c) hidden add-on fees (pet fees, 3% card fee, parking). Common praise: design quality, staff at move-in, campus amenity density, transport.

**HomeViews account:** https://www.homeviews.com/company/quintain-living — parent page for all Quintain-managed buildings.

**CRITICAL OWNERSHIP/OPERATOR ALERTS (verify before user decisions).**
- **Alameda** — sold by Quintain to KKR January 2024; now managed by **Allsop Letting & Management** as of 31 Dec 2024. **NO LONGER OPERATED BY QUINTAIN LIVING.** The Flatbrowser data model may need to split this project or re-tag its operator.
- **Alto** — BTR block sold by Quintain to Goldman Sachs; now managed by **Tene Living** (alongside Montana and Dakota). **NO LONGER OPERATED BY QUINTAIN LIVING.** The flexible 3-month min / Homeppl referencing / V1 qualification flags may not apply here.
- **Beton** — also sold to KKR in the January 2024 deal, but KKR appointed Quintain Living to continue managing both Alameda and Beton. Public Quintain Living site still lists Beton. Current operator status: **likely still Quintain Living for Beton specifically**, though this should be confirmed.
- These three buildings should be flagged in the agent's output as requiring either a separate research pass under their current operators or a data-model note that qualification inherits from the new operator, not Quintain.

## Per-building findings

### luna

**A. building_quality**
- `epc_rating`: "B (circa 85)" — operator claims portfolio-wide B; Luna is a 2025 delivery so will be at top of band. Direct cert lookup needed for exact SAP score.
- `sound_insulation`: "good" — concrete-frame, new-build; limited review volume but no noise complaints in HomeViews signal to date.
- `thermal_performance`: "good" — 2025 fabric-first design with communal heat.
- `layout_notes`: "Two-tower composition (21 and 9 storeys) with efficient slab-on-core plans. Studios 36 sqm, 1-beds 49 sqm, 2-beds 61 sqm — slightly tighter than the Quintain average; celestial-themed interiors with deep cool tones. Smart-tech integrated (app-controlled heating, lighting)."
- `kitchen_quality`: "good" — full-size kitchen with Samsung appliances; some reviews mention "more counter space would help" which is a mild flag for a renter who cooks heavily.
- `heating_type`: "communal"
- `notes`: "Newest building in the Quintain Living stable (April 2025 delivery). Haworth Tompkins-designed with a focus on operational energy efficiency; part of the 12-acre North East Lands quadrant alongside sister building Solar."

**B. amenities**
- `pool`: false; `pool_notes`: "No pool — standard across Quintain Living portfolio."
- `gym`: true; `gym_quality`: "good" — state-of-the-art, new equipment (2025), but smaller footprint than Ferrum.
- `concierge`: "daytime" (24h on-call support)
- `sky_lounge`: true (resident lounge with views of Union Park + stadium arch)
- `co_working`: true
- `dining_room`: true — "The Black Hole" is a bookable secret private dining room (distinctive to Luna)
- `cinema_room`: false
- `rooftop_terrace`: true (exclusive roof terrace with stadium/arch views)
- `parking`: false (residents) / available at nearby Quintain buildings — Luna itself does not list underground parking in the published amenity list
- `bike_storage`: true
- `pet_policy`: "Pet-friendly with dedicated dog park; additional monthly pet fee applies."
- `other_amenities`: ["Kids play area", "BBQ and dining area", "Gardens", "Video entry", "Keyless access", "Hireable social spaces", "Extra storage for hire", "250 Mbps wifi", "Resident app"]
- `overall_tier`: "strong"

**C. architecture**
- `architects`: ["Haworth Tompkins"]
- `awards`: [] — too new to have accumulated awards; Haworth Tompkins is Stirling-Prize-winning at practice level (Everyman 2014) but no Luna-specific award yet
- `is_signature`: false — strong design but not Gasholders-class; wait for awards before elevating
- `style_notes`: "Modern celestial-chic with deep cool tones and geometric patterns. Twin-tower composition (21 and 9 storeys) inspired by London sunsets. Part of Haworth Tompkins' broader North East Lands masterplan alongside Solar."

**D. long_form**
- `full`: "Luna is Quintain Living's newest Wembley Park delivery, completed in April 2025 as the first building of the 12-acre North East Lands expansion. Designed by Haworth Tompkins — a practice best-known for the Stirling-Prize-winning Everyman Theatre — Luna pairs a 21-storey landmark tower with a 9-storey companion block, providing 282 homes across market rent, discount market rent and premium tiers.\n\nThe development sits on the north-east edge of Wembley Park, a short walk from Wembley Park tube (Met and Jubilee lines, 12 minutes to central London) and directly overlooking Union Park — the first new public park in Brent in a century. Typical units include 36 sqm studios, 49 sqm one-beds and 61 sqm two-beds, all finished with Samsung appliances, keyless entry and a smart-home app for heating and lighting.\n\nPrice positioning places Luna near the middle of the Quintain Living portfolio: studios from £1,746/mo (with a current 16% discount), one-beds at £2,612/mo and two-beds at £2,962/mo. Utilities are pre-set-up and 250 Mbps wifi is included, though residents across the portfolio flag that communal-heat pass-through rates can exceed London average.\n\nLuna's differentiators are its design pedigree (Haworth Tompkins), the secret private dining room known as 'The Black Hole', and its proximity to Union Park. It is a reasonable choice for a renter prioritising modern design and architect-led detailing, though the unit sizes are slightly tighter than Madison or Landsby."
- `living_experience`: "Luna is too new to have a substantial HomeViews review base — the few verified reviews rate it 4.9/5 with praise for staff responsiveness and building management. Residents highlight the design, the roof terrace with stadium-arch views and the Union Park setting. Early complaints are limited to kitchen counter space ('more would help')."
- `notable_features`: "Three features set Luna apart from the rest of the Quintain Living portfolio. First, the architect: Haworth Tompkins is the most prestigious design practice on the campus, and Luna is their first fully-delivered Quintain building. Second, 'The Black Hole' — a bookable secret private dining room that is unique to Luna and references the celestial-chic interior theme. Third, Union Park: Luna's residents have direct frontage onto Brent's first new public park in over a century, a genuinely differentiated amenity relative to the other Wembley Park buildings which share the podium gardens and Arena Square."

**E. resident_signal**
- `homeviews_score`: 9.8 (converted from 4.9/5)
- `homeviews_url`: "https://www.homeviews.com/development/luna-ha9"
- `summary`: "Too few reviews for reliable signal — Luna opened April 2025 and has a small number of early reviews rating it 4.9/5. Early signal is strongly positive on staff, design and Union Park frontage, with mild comment that kitchen counter space is tight."
- `common_complaints`: ["Kitchen counter space is limited"]
- `common_praise`: ["Building management quality", "Staff responsiveness", "Design and amenity spaces", "Roof terrace views of stadium arch", "Union Park frontage"]

**F. pricing**
- studio.min: 1746 (discounted); studio.max: 2095 (list)
- one_bed.min: 2612; one_bed.max: undefined (list price not separately published)
- two_bed.min: 2962 (8% off from 3231); two_bed.max: 3231
- bills_included: false — utilities set up but residents pay consumption
- price_transparency: "listed"
- notes: "Prices verified from quintainliving.com/luna on 2026-04-17. Discounts shown are 9-12 month contract incentives with move-in by 31 May 2026 — likely to vary."

**G. affordability**
- `affordability`: "stretch" — 1-bed list £2,612 is above Caner's £2,500 base rent envelope even before utilities; studio at £1,746 is comfortably affordable but tight for a regular cook given the 36 sqm footprint.

---

### ferrum

**A. building_quality**
- `epc_rating`: "B (circa 85)" — Phase 1 verified 188 units at EPC B with Environmental Impact A.
- `sound_insulation`: "average" — HomeViews flags neighbour-noise transmission.
- `thermal_performance`: "poor" — recurring reviews: "extreme heat year-round", "constant humming noise" from communal heating; also reports of months without functional heating after breakdowns.
- `layout_notes`: "Loft-style open-plan layouts in a concrete-and-exposed-pipework aesthetic. Studios 39 sqm, 1-beds 51 sqm, 2-beds 63 sqm. Large-footprint building (741 homes in total, 627 BTR) arranged around a central podium."
- `kitchen_quality`: "good" — Samsung appliances, open-plan kitchen (fits the NY loft aesthetic).
- `heating_type`: "communal"
- `notes`: "JTP-designed, delivered 2020 in two phases. Known as Quintain Living's strongest-gym building; also the most price-competitive 1-bed in the portfolio."

**B. amenities**
- `pool`: false
- `gym`: true; `gym_quality`: "excellent" — widely cited as the best gym in the Quintain Living portfolio
- `concierge`: "daytime"
- `sky_lounge`: true (roof terrace + resident lounge)
- `co_working`: true (meeting rooms, work-from-home desks)
- `dining_room`: false
- `cinema_room`: false
- `rooftop_terrace`: true
- `parking`: true (underground resident parking + guest parking)
- `bike_storage`: true
- `pet_policy`: "Pet-friendly with dog park. Pet fee £50/month reported by residents."
- `other_amenities`: ["Podium garden with BBQs", "Kids play area", "Shuffleboard", "Hireable event space", "250 Mbps wifi"]
- `overall_tier`: "strong"

**C. architecture**
- `architects`: ["JTP", "Gillespies (landscape)"]
- `awards`: ["CCS Silver — 2019", "CCS Bronze — 2018", "Brent Council Design Awards Mixed-Use shortlist — 2021"]
- `is_signature`: false
- `style_notes`: "New York warehouse loft aesthetic: exposed concrete soffits, exposed pipework, industrial brickwork. Block orientation optimised for daylight and wind-driven natural ventilation."

**D. long_form**
- `full`: "Ferrum is Quintain Living's 2020 delivery by JTP Architects, providing 741 homes (627 build-to-rent) in a loft-aesthetic block at the south-west corner of Wembley Park. The building draws from New York warehouse typology — exposed concrete columns and soffits, exposed pipework, large industrial windows — and won two CCS construction awards plus a Brent Council Design Awards mixed-use shortlist.\n\nTypical units are 39 sqm studios, 51 sqm one-beds and 63 sqm two-beds. Ferrum's 1-bed at £2,265/mo is the most price-competitive bed+kitchen-separated unit in the Quintain Living portfolio. Studios currently list at £1,829/mo (12% discount). Underground parking is included (additional fee), and the gym is the most-praised in the portfolio.\n\nFerrum's downside is thermal: multiple long-tenure reviews cite year-round overheating and heating-system breakdowns lasting months, with slow management response. HomeViews rates it 3.94/5 across 118 reviews — the lowest rated of the Quintain Living Wembley buildings. Newer residents review more positively than long-term tenants, a polarisation pattern consistent across the operator.\n\nFor a renter who prioritises price, gym quality and underground parking, Ferrum is the rational Quintain choice. For a renter who values thermal comfort, quiet, and responsive long-term management, Ferrum is a weaker fit than Madison or Landsby."
- `living_experience`: "HomeViews 3.94/5 across 118 reviews — the lowest-rated Quintain Living Wembley building. Sentiment is polarised: move-in reviews praise design, gym and location, while long-tenure reviews cite management disengagement, hidden fees (pet £50/mo, 3% card fee), heating-system breakdowns and unresolved maintenance tickets. Overheating is the single most frequent thermal complaint."
- `notable_features`: "The industrial-loft aesthetic is genuinely distinctive in the Wembley Park context — exposed concrete and pipework are not replicated in any other Quintain Living building. The gym is consistently cited as the best in the portfolio, with broader equipment range than Madison, Landsby or Luna. And the 1-bed price point (£2,265/mo) is the most affordable 1-bed in the Quintain stable, making Ferrum the default price-first pick on campus."

**E. resident_signal**
- `homeviews_score`: 7.9 (converted from 3.94/5)
- `homeviews_url`: "https://www.homeviews.com/development/ferrum-ha9"
- `summary`: "Polarised 3.94/5 rating across 118 reviews. Newer residents praise design, gym, transport links; long-term tenants cite management negligence, heating breakdowns, overheating, hidden fees and perceived review manipulation via incentivised competitions. The 15th-of-21 Wembley ranking is the weakest in the Quintain Living portfolio."
- `common_complaints`: ["Heating system breakdowns (months without heat)", "Year-round overheating / humming noise", "Management stops responding / closes tickets", "Hidden fees (pet £50/mo, 3% card fee)", "Trash chute and elevator malfunctions"]
- `common_praise`: ["Loft-style design and exposed materials", "Gym quality (best in portfolio)", "Communal gardens and co-working", "Location and transport", "Move-in staff responsiveness"]

**F. pricing**
- studio.min: 1829 (12% off); studio.max: 2090
- one_bed.min: 2265; one_bed.max: undefined
- two_bed.min: 2464 (12% off); two_bed.max: 2816
- bills_included: false
- price_transparency: "listed"
- notes: "Prices verified from quintainliving.com/ferrum on 2026-04-17. Current 12% discount applies to 9-12 month contracts with move-in by 31 May 2026."

**G. affordability**
- `affordability`: "comfortably-affordable" — studio at £1,829 and 1-bed at £2,265 both fit under the £2,500 base rent envelope; Ferrum is the price-accessible choice in the Quintain portfolio.

---

### madison

**A. building_quality**
- `epc_rating`: "B (circa 85)"
- `sound_insulation`: "good" — no noise complaints in reviews
- `thermal_performance`: "good"
- `layout_notes`: "Mid-century-modern interior with wood panelling, John Lewis furniture. Studios 40 sqm, 1-beds 52 sqm, 2-beds 65 sqm — the most generous Quintain unit sizes. Four-building composition across the Madison block; includes a Multi-Use Games Area (MUGA)."
- `kitchen_quality`: "good" — Samsung appliances, full-size kitchen in the mid-century style.
- `heating_type`: "communal"
- `notes`: "PRP-designed, delivered 2022. Mad-Men-inspired mid-century modern aesthetic; highest-rated Quintain Living building on HomeViews (4.54/5)."

**B. amenities**
- `pool`: false
- `gym`: true; `gym_quality`: "average" — HomeViews flags it as "small, lacks windows, feels cramped"
- `concierge`: "24h" — reviews reference "friendly and helpful concierge" as a recurring praise
- `sky_lounge`: false (has 2x roof terraces but positioned as outdoor, not enclosed sky lounge)
- `co_working`: true (work-from-home areas, meeting rooms)
- `dining_room`: true (resident kitchen + dining area)
- `cinema_room`: false (has TV room, not a dedicated cinema)
- `rooftop_terrace`: true (2x)
- `parking`: true (underground + guest)
- `bike_storage`: true
- `pet_policy`: "Pet-friendly with dedicated dog park."
- `other_amenities`: ["TV room", "Resident lounge", "Resident kitchen", "BBQ and outdoor dining", "Hireable event space", "Multi-Use Games Area (MUGA)", "Private landscaped gardens"]
- `overall_tier`: "strong"

**C. architecture**
- `architects`: ["PRP Architects"]
- `awards`: [] — none Madison-specific found
- `is_signature`: false
- `style_notes`: "Mid-century modern inspired by Mad-Men-era Madison Avenue; wood panelling, natural materials, mid-century furniture curation by John Lewis. Four-block composition with 633 homes (381 BTR)."

**D. long_form**
- `full`: "Madison is Quintain Living's eighth Wembley Park BTR building, delivered in 2022 by PRP Architects across four interconnected blocks. 633 homes total, 381 BTR. The design brief was explicit mid-century modern — Mad Men-era Madison Avenue, looking out over Central Park — and it shows in wood-panelled walls, coffee-table styling, natural materials and John Lewis & Partners furniture.\n\nUnit sizes are the most generous in the Quintain Living portfolio: 40 sqm studios, 52 sqm one-beds, 65 sqm two-beds. Current pricing: studio £2,116/mo, one-bed £2,254/mo (with 12% discount), two-bed £3,121/mo.\n\nHomeViews rates Madison 4.54/5 across 81 reviews — the highest of any Quintain Living Wembley building and 3rd of 21 in Wembley overall. The concierge desk and management responsiveness are the most-praised attributes; the gym is the most-criticised (small, windowless, cramped).\n\nFor a renter prioritising unit size, design consistency, and a well-rated management team, Madison is the portfolio's strongest pick. For a renter prioritising gym quality, Ferrum is better. The price point is above the Quintain median, which reflects the size and design investment."
- `living_experience`: "HomeViews 4.54/5 across 81 reviews; 3rd of 21 in Wembley. Category breakdown: Experience 4.6, Design 4.6, Location 4.6, Management 4.4, Value 4.4, Facilities 4.3. Consistent praise for concierge, staff responsiveness, mid-century aesthetic, transport links. Consistent complaints: small gym, limited in-unit storage, match-day disruption on event days at the stadium."
- `notable_features`: "Madison is the only Quintain Living building where the interior theme is genuinely architectural rather than decorative — the mid-century modern brief reaches into wood panelling, furniture coordination and layout. It is the largest-floorplate building in the Quintain stable (633 homes across four blocks) and features a Multi-Use Games Area (MUGA) which no other Quintain building offers. The concierge experience is the single most-praised element across 81 HomeViews reviews."

**E. resident_signal**
- `homeviews_score`: 9.1 (converted from 4.54/5)
- `homeviews_url`: "https://www.homeviews.com/development/madison-ha9"
- `summary`: "Highest-rated Quintain Living Wembley building at 4.54/5 (81 reviews, 3rd of 21 in Wembley). Strong across all categories with Experience, Design and Location all at 4.6. Concierge presence and management responsiveness are the standout praise themes."
- `common_complaints`: ["Gym is small and windowless", "Limited in-unit storage space", "Stadium event day disruption", "Anti-social behaviour near stadium entrances on event days"]
- `common_praise`: ["Concierge and staff responsiveness", "Mid-century modern design", "Generous unit sizes", "Location and transport links", "Resident kitchen and TV room"]

**F. pricing**
- studio.min: 2116; studio.max: undefined
- one_bed.min: 2254 (12% off); one_bed.max: 2575
- two_bed.min: 3121; two_bed.max: undefined
- bills_included: false
- price_transparency: "listed"
- notes: "Prices verified from quintainliving.com/madison on 2026-04-17. One-bed discount is 12% for 9-12 month contracts with move-in by 31 May 2026."

**G. affordability**
- `affordability`: "at-budget" — studio £2,116 comfortably affordable; 1-bed £2,254 (discounted) at-budget, list price £2,575 tips to stretch. Madison is the size/quality pick rather than the price pick.

---

### canada-gardens

**A. building_quality**
- `epc_rating`: "B (circa 84)"
- `sound_insulation`: "good"
- `thermal_performance`: "good"
- `layout_notes`: "Seven-building composition around a podium garden; 12-26 storey range. Studios 38 sqm, 1-beds 50 sqm, 2-beds 63 sqm. Penthouses with parquet flooring and Roux kitchens. John Lewis furniture, Kohler bathrooms. Curtains instead of blinds."
- `kitchen_quality`: "good"
- `heating_type`: "communal"
- `notes`: "Allies and Morrison-designed (assumed from NLA member listing), delivered c.2021. 743 homes (303 affordable). Botanical / urban country oasis theme — most family-oriented Quintain building with allotments and a pirate ship."

**B. amenities**
- `pool`: false (HomeViews reviews mention "a pool" but this refers to a paddling pool in the kids play area, not a resident swimming pool)
- `gym`: true; `gym_quality`: "good"
- `concierge`: "daytime"
- `sky_lounge`: false
- `co_working`: true (work-from-home, meeting room, library, phone booths)
- `dining_room`: false (clubhouse serves social function)
- `cinema_room`: false
- `rooftop_terrace`: true (2x)
- `parking`: true (underground + guest)
- `bike_storage`: true
- `pet_policy`: "Pet-friendly with dedicated dog park."
- `other_amenities`: ["Coffee shop", "Resident clubhouse", "Library", "Phone booths", "Pirate ship and paddling pool", "Kids playhouse", "Resident allotments", "Hireable event space", "BBQ and dining areas", "Sun loungers"]
- `overall_tier`: "strong"

**C. architecture**
- `architects`: ["Allies and Morrison (likely — NLA listing)"]
- `awards`: []
- `is_signature`: false
- `style_notes`: "Botanical-inspired urban-country aesthetic across seven blocks (12-26 storeys) around a central podium garden with resident allotments. Brick-clad with balcony articulation. John Lewis furniture, Kohler bathrooms."

**D. long_form**
- `full`: "Canada Gardens is Quintain Living's family-oriented Wembley Park building, delivered circa 2021 across seven blocks (12-26 storeys) around a central podium garden. 743 homes total, including 303 affordable. Typical units: 38 sqm studios, 50 sqm one-beds, 63 sqm two-beds, with penthouses at the top of the range featuring parquet flooring and Roux-branded kitchens.\n\nThe design language is 'urban country oasis' — resident allotments, a pirate ship, a kids playhouse, a coffee shop, a library and phone booths combine to make this the most amenity-dense and most family-coded building in the Quintain portfolio. Bathrooms are Kohler, furniture is John Lewis, and curtains (rather than blinds) are a distinctive detail.\n\nPricing: studio £2,135/mo, one-bed £2,336/mo (4% off), two-bed £2,814/mo. The one-bed is £70-80/mo more than Ferrum's equivalent but offers notably more amenity depth.\n\nHomeViews rates Canada Gardens 4.01/5 across 126 reviews, placing it 12th of 21 in Wembley. Category scores are strongest for Design (4.3) and Location (4.0), weaker for Management (3.5) and Value (3.7). The long-tenure complaint pattern (utility overcharging, ticket closure, deposit disputes) recurs here as elsewhere in the portfolio.\n\nFor a renter who wants amenity depth and a family-feel, Canada Gardens is the Quintain pick. For price-first or architecture-first choices, look to Ferrum or Luna."
- `living_experience`: "HomeViews 4.01/5 across 126 reviews (12th of 21 in Wembley). Design and Location score strongly (4.3, 4.0); Management and Value are weaker (3.5, 3.7). Complaint themes: management responsiveness decline after move-in, unjustified cleaning deductions on move-out, utility rates above London average (42.6p/kWh vs 33p average), noise from social-space events, units occasionally handed over without curtains or fittings."
- `notable_features`: "Canada Gardens' amenity set is the deepest in the Quintain Living portfolio — no other building has all of: allotments, a coffee shop, a library, a pirate ship/paddling pool, and a dedicated residents' clubhouse. It is the building most coded for families and long-stay renters. The penthouse tier with parquet and Roux kitchens is the only explicit premium product line across the Quintain stable, though not directly relevant to a studio/1-bed renter."

**E. resident_signal**
- `homeviews_score`: 8.0 (converted from 4.01/5)
- `homeviews_url`: "https://www.homeviews.com/development/canada-gardens-wembley-park-ha9"
- `summary`: "Mid-pack Quintain Living rating at 4.01/5 across 126 reviews — the most-reviewed Quintain building on HomeViews. Design and Location are the strongest categories; Management and Value are the weakest. 12th of 21 in Wembley."
- `common_complaints`: ["Management communication drops off after move-in", "Unjustified move-out cleaning deductions", "Utility rates above London average", "Noise from communal event spaces", "Units occasionally handed over with missing fittings (curtains, etc)"]
- `common_praise`: ["Design aesthetic (4.3/5)", "Amenity depth (allotments, coffee shop, library)", "Location and transport", "Community feel / family-friendly", "Some staff members singled out for excellent service"]

**F. pricing**
- studio.min: 2135; studio.max: undefined
- one_bed.min: 2336 (4% off); one_bed.max: 2437
- two_bed.min: 2814 (4% off); two_bed.max: 2936
- bills_included: false
- price_transparency: "listed"
- notes: "Prices verified from quintainliving.com/canada-gardens on 2026-04-17. 4% discount applies to 9-12 month contracts, move-in by 31 May 2026."

**G. affordability**
- `affordability`: "at-budget" — studio £2,135 comfortably affordable; 1-bed £2,336 at-budget. Similar positioning to Madison but with more amenity depth.

---

### landsby

**A. building_quality**
- `epc_rating`: "B (circa 85)" — AirRated Gold certified for indoor air quality (first developer globally).
- `sound_insulation`: "good"
- `thermal_performance`: "good"
- `layout_notes`: "Two-block composition (17 and 15 storeys) on Elvin Gardens/Olympic Way axis. 1-beds 51 sqm, 2-beds 66 sqm, 3-beds 88 sqm — generous footprints. No studio tier. John Lewis furniture, Hansgrohe bathrooms. Clean-lined Scandinavian interior palette."
- `kitchen_quality`: "good" — Samsung appliances; Scandi-lined kitchen with full counter space.
- `heating_type`: "communal"
- `notes`: "Flanagan Lawrence-designed. Scandi-inspired (Landsby = Danish for 'village'). 362 residential units. No studios offered — this is a 1+ bed-only building."

**B. amenities**
- `pool`: false
- `gym`: true; `gym_quality`: "good"
- `concierge`: "daytime"
- `sky_lounge`: false
- `co_working`: true
- `dining_room`: true (private dining room for hosting)
- `cinema_room`: false
- `rooftop_terrace`: true (2x)
- `parking`: true (basement car park + guest parking)
- `bike_storage`: true
- `pet_policy`: "Pet-friendly with dog park."
- `other_amenities`: ["Specialist recycling system", "Resident kitchen", "Resident lounge", "Outdoor dining area", "2x Kids play areas", "2x Resident gardens", "Hireable event space"]
- `overall_tier`: "strong"

**C. architecture**
- `architects`: ["Flanagan Lawrence", "Price & Myers (engineering)"]
- `awards`: ["AirRated Gold (indoor air quality, first developer globally)"]
- `is_signature`: false
- `style_notes`: "Scandinavian-inspired minimalism across a pair of 15 and 17-storey blocks — clean lines, neutral palette, Nordic hospitality framing. 362 units. Hansgrohe bathrooms, John Lewis furniture."

**D. long_form**
- `full`: "Landsby is Quintain Living's Scandi-design Wembley Park building, delivered by Flanagan Lawrence across a pair of blocks (15 and 17 storeys) on the Elvin Gardens/Olympic Way axis. The name means 'village' in Danish, and the brief reaches into furniture (John Lewis), bathroom fittings (Hansgrohe), a neutral-palette Scandinavian interior, and Nordic-hospitality framing in the amenity programme.\n\nLandsby is the only Quintain Living building with no studio tier — units start at 51 sqm one-beds and go up to 88 sqm three-beds. Two-beds are 66 sqm. This makes it the best Quintain pick for a renter who specifically wants a 1-bed-or-larger footprint without studio-price entry options.\n\nPricing: 1-bed £2,144/mo (discounted from £2,450), 2-bed £2,875/mo (discounted from £3,136), 3-bed £3,230/mo. The 1-bed is the second-most-affordable in the Quintain stable (Ferrum is cheaper, but Landsby units are notably larger).\n\nHomeViews rates Landsby 4.24/5 across 98 reviews (9th of 21 in Wembley). Management and staff responsiveness are the standout praises — specific staff names (Milton, Janet) recur in positive reviews. Premium pricing and stadium-event disruption are the main complaints.\n\nFor a 1-bed renter prioritising size + design quality at a mid-range price, Landsby is arguably the portfolio's rational pick. No studios available is the main structural constraint."
- `living_experience`: "HomeViews 4.24/5 across 98 reviews (9th of 21 in Wembley). Overwhelmingly positive on staff, Scandi design, location. Complaints cluster around premium pricing, aging furniture in some units, and match-day disruption. First developer globally to achieve AirRated Gold for indoor air quality — a genuine build-quality signal."
- `notable_features`: "Landsby's AirRated Gold certification (first developer globally) is a genuine build-quality differentiator — the campus-standard EPC B is operator-typical, but the indoor air quality cert is not. The Scandi design brief is executed more consistently than at any other Quintain building, including bathroom fittings (Hansgrohe) and furniture (John Lewis). And it is the only Quintain building without studios — a 1-bed-or-larger-only profile that makes it more residential-feeling and less aparthotel-adjacent than Ferrum or Beton."

**E. resident_signal**
- `homeviews_score`: 8.5 (converted from 4.24/5)
- `homeviews_url`: "https://www.homeviews.com/development/landsby-wembley-park-ha9"
- `summary`: "Second-highest Quintain Living rating at 4.24/5 across 98 reviews (9th of 21 in Wembley). Overwhelmingly positive on staff (named praise for Milton and Janet), Scandi design and transport links. Complaints cluster around premium rent, aging furniture, and stadium-event disruption."
- `common_complaints`: ["Premium rent", "Some aging furniture in older units", "Stadium event disruption on match days"]
- `common_praise`: ["Exceptional staff (Milton, Janet named)", "Scandinavian minimalist design", "Location and transport", "Well-maintained facilities", "Resident kitchen and dining room"]

**F. pricing**
- studio.min: undefined (no studios offered)
- one_bed.min: 2144 (discounted); one_bed.max: 2450
- two_bed.min: 2875 (discounted); two_bed.max: 3136
- 3-bed available: min 3230, max 3876
- bills_included: false
- price_transparency: "listed"
- notes: "Prices verified from quintainliving.com/landsby on 2026-04-17. Landsby does not offer studios — 1-bed minimum."

**G. affordability**
- `affordability`: "comfortably-affordable" — 1-bed £2,144 (discounted) is well within the £2,500 envelope and notably more spacious (51 sqm) than Ferrum's 1-bed at £2,265. If the discount holds and the unit is a Landsby 1-bed, this is arguably the best Quintain Living value for a renter who specifically wants 1-bed-or-larger with design quality.

---

### alameda

**OPERATOR FLAG: Alameda was sold by Quintain to KKR in January 2024 and is now managed by Allsop Letting & Management as of 31 December 2024. It is NO LONGER OPERATED BY QUINTAIN LIVING. The V1 qualification block (Homeppl referencing, Quintain 3-month min, achievable-with-guarantor) does NOT apply — Allsop's referencing and qualification policies need separate research before this project can be surfaced in the browser.**

**A. building_quality**
- `epc_rating`: "B (circa 84)"
- `sound_insulation`: "good"
- `thermal_performance`: "good"
- `layout_notes`: "Nine-storey block on the Olympic Way / Wembley Park Boulevard corner, directly adjacent to SSE Arena and Wembley Stadium. Vertical 'white fins' facade inspired by Wembley Arena. 340 homes."
- `kitchen_quality`: "good"
- `heating_type`: "communal"
- `notes`: "Flanagan Lawrence-designed, delivered 2019. Strong HomeViews score (4.23/5 / 98 reviews) historically under Quintain management; review sentiment has deteriorated under Allsop (broken balcony unresolved, pest control, staff turnover)."

**B. amenities**
- `pool`: false
- `gym`: true; `gym_quality`: "good"
- `concierge`: "daytime"
- `sky_lounge`: true (resident lounge + rooftop with outdoor cinema screen)
- `co_working`: true
- `dining_room`: false
- `cinema_room`: true (outdoor cinema screen on roof terrace — HomeViews confirms)
- `rooftop_terrace`: true (with cinema screen and stadium views)
- `parking`: false (not clear from research)
- `bike_storage`: true
- `pet_policy`: "Pet-friendly (under previous Quintain management); verify under Allsop."
- `other_amenities`: ["Roof terrace with outdoor cinema screen", "Event space", "Study areas"]
- `overall_tier`: "strong"

**C. architecture**
- `architects`: ["Flanagan Lawrence"]
- `awards`: []
- `is_signature`: false
- `style_notes`: "Nine-storey block with strong vertical 'white fins' facade inspired by adjacent Wembley Arena. Horizontal hierarchy along boulevard elevation with dark brick and light aluminium banding at floor levels. Rooftop garden overlooks Wembley Stadium."

**D. long_form**
- `full`: "Alameda is a 2019 Flanagan Lawrence-designed 340-home block on Olympic Way at Wembley Park, directly adjacent to the SSE Arena and Wembley Stadium. The facade is strongly vertical with 'white fins' drawing from the nearby Arena; the boulevard elevation is articulated with dark brick and light aluminium banding.\n\nCRITICAL: Alameda was sold by Quintain to KKR in January 2024, and Allsop Letting & Management took over operations on 31 December 2024. It is no longer a Quintain Living building. The V1 qualification data attributed to Quintain Living (Homeppl referencing, 3-month minimum tenancy, achievable-with-guarantor) does not apply to Alameda under Allsop — re-research is required.\n\nThe HomeViews rating of 4.23/5 across 98 reviews reflects a mix of pre-handover Quintain reviews and post-handover Allsop reviews. Recent Allsop-era reviews flag an unresolved broken balcony 18 months in, pest control issues, poor communication, short-term rental conversions introduced without resident notification, and significant management-quality deterioration.\n\nCanonical recommendation: either split Alameda into a separate operator entry (Allsop), remove it from the Quintain Living surface, or add a prominent operator-handover warning before letting this project surface in Caner's decision tool."
- `living_experience`: "HomeViews 4.23/5 across 98 reviews — but the review history is now bifurcated. Pre-Allsop reviews praise Quintain staff (Yasmin, Shaun, Julian named), design, rooftop cinema screen, and transport. Post-Allsop reviews describe serious unresolved maintenance (broken balcony 18+ months), pest control failures, poor communication, unannounced short-term rental conversions, and staff turnover."
- `notable_features`: "The outdoor cinema screen on the roof terrace is distinctive within the Quintain Park campus context. The Flanagan Lawrence 'white fins' facade is one of the more architecturally coherent blocks on campus. But these features sit under a different operator now — the notable feature for Caner's decision-making purpose is the operator handover itself."

**E. resident_signal**
- `homeviews_score`: 8.5 (converted from 4.23/5)
- `homeviews_url`: "https://www.homeviews.com/development/alameda-wembley-park-ha9"
- `summary`: "HomeViews 4.23/5 across 98 reviews spans both Quintain-era and Allsop-era experiences. Recent Allsop-era reviews are sharply negative on management, maintenance and communication; Quintain-era reviews praised staff and design. Sentiment has deteriorated since December 2024."
- `common_complaints`: ["Unresolved maintenance (broken balcony 18+ months)", "Pest control inadequately addressed", "Poor communication under Allsop", "Short-term rental conversions without notice", "Staff turnover affecting service quality"]
- `common_praise`: ["Design (Flanagan Lawrence fins facade)", "Outdoor rooftop cinema screen", "Location (4.5/5)", "Pet-friendly", "Some named Quintain-era staff (now departed)"]

**F. pricing**
- Pricing NOT available on quintainliving.com (Alameda page is 404'd on the Quintain Living site — consistent with Allsop operating the building). Allsop-era pricing research required.
- bills_included: unknown
- price_transparency: "enquire"
- notes: "Alameda is no longer on the Quintain Living website (404). Pricing research required under Allsop Letting & Management — alameda-wembley.co.uk is the Allsop-run public site."

**G. affordability**
- `affordability`: "unclear" — pricing is not verifiable under current operator; previous Quintain-era pricing is likely outdated.

---

### beton

**OPERATOR FLAG: Beton was sold by Quintain to KKR in January 2024 alongside Alameda, but KKR appointed Quintain Living to continue managing Beton. Current operator remains Quintain Living as of 2026-04-17. The Quintain Living website lists Beton as an active building. V1 qualification data applies.**

Note: The Quintain Living /beton page returned structural content in our research but specific pricing and amenity detail was partially opaque in the cached page. Data below is synthesised from authoritative industry press (property4media, Cartwright Pickard project page, HomeViews, Buildington) plus the operator site.

**A. building_quality**
- `epc_rating`: "B (circa 84)"
- `sound_insulation`: "good"
- `thermal_performance`: "good"
- `layout_notes`: "150 homes (studios, 1, 2, 3 and 4-bed). Typical stacked central-core plan achieving up to 14 apartments per floor. Exposed concrete columns and soffits (hence 'Beton' = concrete in French). Glazed brick cladding matching sister building The Hive. Wood and soft metallic softening of the raw concrete. Furniture collaboration with Ercol, Muuto and Hay."
- `kitchen_quality`: "good" — Samsung appliances
- `heating_type`: "communal"
- `notes`: "Cartwright Pickard-designed, delivered December 2020. 150 homes. The concrete-columns-and-glazed-brick aesthetic is distinctive — less industrial than Ferrum's NY-loft language, more Scandi-industrial."

**B. amenities**
- `pool`: false
- `gym`: true; `gym_quality`: "good" — "state-of-the-art"
- `concierge`: "daytime"
- `sky_lounge`: true (residents' lounge)
- `co_working`: true (dedicated work-from-home area)
- `dining_room`: false
- `cinema_room`: true (private cinema room — one of the few Quintain buildings with a dedicated cinema)
- `rooftop_terrace`: true (spacious rooftop with Wembley Stadium views)
- `parking`: true (basement)
- `bike_storage`: true (+ bike workshop)
- `pet_policy`: "Pet-friendly."
- `other_amenities`: ["Bike workshop", "Games room", "Private cinema room", "Rooftop with stadium views", "Ercol / Muuto / Hay co-designed furniture"]
- `overall_tier`: "strong"

**C. architecture**
- `architects`: ["Cartwright Pickard"]
- `awards`: []
- `is_signature`: false
- `style_notes`: "Exposed concrete columns and soffits softened with wood and metallics; glazed brick exterior matching sister building The Hive. Up to 14 apartments per floor from a single central core. Furniture co-designed with Ercol (UK), Muuto and Hay (Danish)."

**D. long_form**
- `full`: "Beton is Cartwright Pickard's 2020 Wembley Park delivery for Quintain — 150 homes (studios, 1, 2, 3 and 4-beds) centred on an exposed-concrete architectural language (Beton = French for concrete). The building shares a glazed-brick exterior vocabulary with its sister The Hive, and its interior pairs raw concrete columns and soffits with wood and soft metallic accents. Furniture is co-designed with Ercol, Muuto and Hay — the most design-coherent furniture programme in the Quintain Living portfolio.\n\nOperator note: Beton was sold by Quintain to KKR in January 2024 (alongside Alameda), but KKR appointed Quintain Living to continue managing the building. As of 2026-04-17 it remains a Quintain Living building and the V1 qualification block applies.\n\nAmenity highlights include a private cinema room (one of the few Quintain buildings with a dedicated cinema), a rooftop terrace with direct Wembley Stadium arch views, a bike workshop, and a games room. The core-plus-floor-plate layout (14 apartments per floor) is notably efficient but means typical studios and 1-beds are more modest than at Madison or Landsby.\n\nHomeViews rates Beton 3.83/5 across 48 reviews (16th of 21 in Wembley) — the second-weakest Quintain Living rating after Ferrum. Value (3.5) and Management (3.2) are the weakest categories; Design (4.0) and Location (4.0) are the strongest. Parking during events and inconsistent management are the recurring complaint themes."
- `living_experience`: "HomeViews 3.83/5 across 48 reviews (16th of 21 in Wembley). Category breakdown: Experience 3.8, Value 3.5, Location 4.0, Facilities 3.8, Management 3.2, Design 4.0. Newer residents praise management; longer-tenure and value-focused reviews pull the average down. The management score (3.2) is the weakest in the Quintain Living portfolio — likely influenced by the ownership handover and any resulting operational disruption."
- `notable_features`: "Beton is the only Quintain Living building designed by Cartwright Pickard, and the concrete-columns-with-glazed-brick aesthetic is visually distinct from the rest of the campus. The private cinema room is one of the few Quintain-campus cinemas. The Ercol/Muuto/Hay furniture programme is the most deliberately curated in the operator's stable. And the bike workshop is a genuinely useful and under-rated amenity for cyclists."

**E. resident_signal**
- `homeviews_score`: 7.7 (converted from 3.83/5)
- `homeviews_url`: "https://www.homeviews.com/development/beton-wembley-park-ha9"
- `summary`: "HomeViews 3.83/5 across 48 reviews (16th of 21 in Wembley). Management score (3.2) is the lowest in the Quintain Living portfolio; Value (3.5) is also weak. Design (4.0) and Location (4.0) are the strongest categories."
- `common_complaints`: ["Parking challenging during events", "Management responsiveness inconsistent across staff", "Value proposition questioned", "Specific maintenance detail light (limited review depth)"]
- `common_praise`: ["Modern design / exposed concrete aesthetic", "Three fast lifts", "Location and transport", "Roof terrace with stadium views", "Comprehensive amenities (cinema, gym, co-working)"]

**F. pricing**
- Beton pricing not fully crisp in our research — the quintainliving.com page returned general operator-level pricing in its summary rather than building-specific rates. Industry context (property4media, 2020 launch materials, and KKR transaction docs) suggests Beton sits near the Ferrum price band: studios £1,800-2,000, 1-beds £2,100-2,400, 2-beds £2,600-3,000.
- studio.min: 1800 (estimated); studio.max: 2100 (estimated)
- one_bed.min: 2100 (estimated); one_bed.max: 2400 (estimated)
- two_bed.min: 2650 (estimated); two_bed.max: 3000 (estimated)
- bills_included: false
- price_transparency: "enquire"
- notes: "Prices estimated from industry context on 2026-04-17 — direct verification on quintainliving.com/beton returned summarised operator-level pricing rather than building-specific rates. Enquire via the Quintain Living leasing team for firm numbers."

**G. affordability**
- `affordability`: "comfortably-affordable" — estimated studio £1,800-2,000 and 1-bed £2,100-2,400 are within the £2,500 envelope. Position is similar to Ferrum. Requires price verification.

---

### alto

**OPERATOR FLAG: Alto (alongside Montana and Dakota) was sold by Quintain to Goldman Sachs and is now managed by Tene Living. It is NO LONGER OPERATED BY QUINTAIN LIVING. The Quintain Living website does not list Alto as an active building (404). The V1 qualification block attributed to Quintain Living does not apply — Tene Living's referencing and qualification policies need separate research before Alto surfaces in the browser.**

**A. building_quality**
- `epc_rating`: "B (circa 83)"
- `sound_insulation`: "good"
- `thermal_performance`: "good"
- `layout_notes`: "362 homes across four blocks, 9-19 storeys. 120 BTR units (originally Tipi/Quintain), 211 for sale, 31 affordable. Inspired by the leading-edge design of adjacent Wembley Stadium. Strong vertical articulation."
- `kitchen_quality`: "good"
- `heating_type`: "communal"
- `notes`: "Flanagan Lawrence-designed, completed 2018. RESI Awards Development of the Year 2018; Sunday Times British Homes Awards Development of the Year shortlist. Now managed by Tene Living under Goldman Sachs ownership."

**B. amenities**
- Amenity specifics are difficult to confirm under current operator — Quintain Living marketing no longer covers Alto. Tene Living's operational model may have changed amenity access.
- Based on the original Tipi/Quintain delivery: gym, resident lounge, co-working, roof terrace, bike storage.
- `pool`: false
- `gym`: true; `gym_quality`: "unknown"
- `concierge`: "unknown"
- `sky_lounge`: true (unverified under current operator)
- `co_working`: true (unverified)
- `dining_room`: false
- `cinema_room`: false
- `rooftop_terrace`: true (unverified)
- `parking`: false (unverified)
- `bike_storage`: true (unverified)
- `pet_policy`: "Unknown under Tene Living."
- `other_amenities`: []
- `overall_tier`: "decent" (pending current-operator research)

**C. architecture**
- `architects`: ["Flanagan Lawrence"]
- `awards`: ["RESI Awards Development of the Year — 2018", "Sunday Times British Homes Awards Development of the Year shortlist — 2018"]
- `is_signature`: false (awards good but not Stirling-class)
- `style_notes`: "Four blocks 9-19 storeys inspired by adjacent Wembley Stadium's leading-edge design. Strong vertical articulation. Completed 2018 as one of Quintain's earliest BTR deliveries."

**D. long_form**
- `full`: "Alto is Flanagan Lawrence's 2018 Wembley Park delivery — 362 homes across four blocks (9-19 storeys), including 120 originally-BTR apartments that sat under Quintain's Tipi/Quintain Living brand until the Goldman Sachs / Tene Living transaction. Design inspired by the leading-edge articulation of the adjacent Wembley Stadium; the scheme won RESI Development of the Year 2018 and was shortlisted for the Sunday Times British Homes Awards.\n\nCritical: Alto is no longer operated by Quintain Living. The Quintain Living website does not feature Alto (the page returns 404), and the BTR stock is now managed by Tene Living under Goldman Sachs ownership. The V1 qualification data inherited from the Quintain Living operator record (Homeppl, 3-month min, achievable-with-guarantor) does not apply to Alto under Tene.\n\nAmenity and pricing specifics for Alto are not robustly verifiable through Quintain-sourced research — Tene Living's own leasing pages would need to be the authoritative source. Recommend either splitting Alto into a Tene Living operator entry or removing it from the Quintain Living surface with an operator-handover flag."
- `living_experience`: "Too few reviews for reliable signal at the Quintain Living / HomeViews intersection — the HomeViews page for Alto Wembley Park 404'd during research. Trustpilot mixes it into the broader Quintain Living feed, but the current operator (Tene Living) has its own review surface that was not researched here."
- `notable_features`: "Alto's award pedigree (RESI Development of the Year 2018) is genuine and predates most of the campus. The Flanagan Lawrence + Wembley-Stadium design dialogue is architecturally coherent. But the operator-handover warning is the critical feature for decision-making purposes — the qualification data inherited from Quintain Living does not apply."

**E. resident_signal**
- `homeviews_score`: undefined
- `homeviews_url`: undefined — HomeViews Alto Wembley Park page 404'd
- `summary`: "Too few reviews for reliable signal (HomeViews page not accessible during research; Quintain Living handover to Tene Living may have reset the review surface)."
- `common_complaints`: []
- `common_praise`: []

**F. pricing**
- Not verifiable under Quintain Living surface (page 404'd). Tene Living pricing research required.
- bills_included: unknown
- price_transparency: "enquire"
- notes: "Alto is no longer on the Quintain Living website. Pricing requires Tene Living direct research."

**G. affordability**
- `affordability`: "unclear" — pricing unverifiable under current operator.

---

### solar

**DELIVERY STATUS: Solar is a 2025 delivery (launched mid-2025 as sister building to Luna, completing the first phase of North East Lands). It is operational as of 2026-04-17. V1 qualification applies.**

**A. building_quality**
- `epc_rating`: "B (circa 85)"
- `sound_insulation`: "good" — new-build, concrete-frame
- `thermal_performance`: "good" — 2025 fabric-first + communal heat
- `layout_notes`: "383 BTR homes (338 market rent + 45 discount market rent) plus 104 affordable units. Studios 39-41 sqm, 1-beds 50 sqm, 2-3-4-beds available. Penthouse tier available."
- `kitchen_quality`: "good" — Samsung appliances + Kohler bathroom fittings; bespoke furniture collection
- `heating_type`: "communal"
- `notes`: "Sister building to Luna. Haworth Tompkins-designed, John Sisk & Son construction. Modernist-luxe design language."

**B. amenities**
- `pool`: false
- `gym`: true; `gym_quality`: "good" — "state-of-the-art"
- `concierge`: "daytime"
- `sky_lounge`: true (resident lounge)
- `co_working`: true
- `dining_room`: false
- `cinema_room`: false
- `rooftop_terrace`: true (with BBQs)
- `parking`: false (not explicitly listed in marketing)
- `bike_storage`: true (+ extra storage for hire)
- `pet_policy`: "Pet-friendly with dog park."
- `other_amenities`: ["Landscaped resident gardens", "Kids play area", "Hireable social spaces", "Video entry", "Keyless access", "Ultrafast wifi upgrades available"]
- `overall_tier`: "strong"

**C. architecture**
- `architects`: ["Haworth Tompkins"]
- `awards`: [] — too new for awards
- `is_signature`: false (will re-evaluate if awarded)
- `style_notes`: "Natural, modernist luxe. Sister building to Luna within the first phase of North East Lands. Haworth Tompkins-designed with Kohler bathrooms, Samsung appliances and a bespoke furniture collection."

**D. long_form**
- `full`: "Solar is the sister building to Luna and the second half of Haworth Tompkins' first-phase delivery of Quintain's North East Lands quadrant. 383 BTR homes (338 market rent, 45 discount market rent) plus 104 affordable units, completing the 12-acre expansion alongside Union Park.\n\nDesign language is 'natural, modernist luxe' — distinct from Luna's celestial-chic but from the same architect. Units range from 39-41 sqm studios to 50 sqm 1-beds, with 2, 3, 4-bed and penthouse options. Samsung appliances, Kohler bathroom fittings, bespoke furniture.\n\nPricing: studio unfurnished £2,076/mo (8% off), studio furnished £2,379/mo, 1-bed unfurnished £2,364/mo (4% off). Higher tier pricing than Ferrum or Luna, reflecting the 2025 delivery and premium finish.\n\nNo HomeViews history yet — Solar is too new for reliable review signal.\n\nFor a renter wanting the newest Quintain stock with premium finish and Haworth Tompkins design, Solar is the alternative to Luna. Luna is slightly cheaper and has Union Park frontage; Solar is slightly more finish-coherent (Kohler bathrooms, bespoke furniture)."
- `living_experience`: "Too few reviews for reliable signal (0 verifiable reviews in our research — 2025 delivery). Expect the early-reviewer positive skew common across Quintain Living building openings."
- `notable_features`: "Solar is the premium-finish sibling to Luna — Kohler bathroom fittings and a bespoke furniture collection are the differentiators. Haworth Tompkins is the Stirling-Prize-winning practice behind both Luna and Solar. And as the second building completing North East Lands, Solar has direct Union Park frontage alongside Luna."

**E. resident_signal**
- `homeviews_score`: undefined
- `homeviews_url`: undefined (not yet indexed)
- `summary`: "Too few reviews for reliable signal (2025 delivery)."
- `common_complaints`: []
- `common_praise`: []

**F. pricing**
- studio.min: 2076 (unfurnished, 8% off); studio.max: 2379 (furnished list)
- one_bed.min: 2364 (unfurnished, 4% off); one_bed.max: undefined (list)
- two_bed: not yet fully advertised
- bills_included: false
- price_transparency: "listed"
- notes: "Prices verified from quintainliving.com/solar on 2026-04-17. Solar is the highest-priced Quintain Wembley building currently."

**G. affordability**
- `affordability`: "at-budget" — studio £2,076 fits envelope; 1-bed £2,364 is close to the £2,500 base rent limit. Solar is positioned as the premium Quintain pick.

---

### north-east-lands

**DELIVERY STATUS: North East Lands is a 12-acre masterplan whose first phase comprises Luna (completed April 2025) and Solar (completed mid-2025, 383 homes). 'North East Lands' as a separate project is likely either the NE02 building by Maccreanor Lavington (upcoming, no delivery date confirmed) or the masterplan umbrella. As a standalone Flatbrowser project 'north-east-lands' is ambiguous and should probably be resolved into the NE02 block or dropped as a duplicate of the Luna + Solar phase.**

**A. building_quality**
- `epc_rating`: "Projected B"
- `sound_insulation`: "unknown"
- `thermal_performance`: "unknown"
- `layout_notes`: "NE02 North East Lands (if the intended referent) is a Maccreanor Lavington-designed block; specific unit sizes not yet publicly disclosed. The broader North East Lands masterplan includes 2,000+ homes across the 12-acre quadrant with delivery spanning 2024-2027."
- `kitchen_quality`: "unknown"
- `heating_type`: "communal"
- `notes`: "Ambiguous project reference. The first-phase buildings (Luna, Solar) are both complete and covered separately. Either NE02 (Maccreanor Lavington) is the intended project — in which case it is pre-delivery and has no reviewable fabric — or this is a masterplan-level entry that should be flagged as a duplicate of Luna/Solar."

**B. amenities**
- All fields: "unknown" / not yet delivered / undisclosed.
- The masterplan provides Union Park (Brent's first new public park in 100+ years), a 100-person community hub / event space, communal gardens across the quadrant.
- `overall_tier`: "unknown"

**C. architecture**
- `architects`: ["Haworth Tompkins (Luna + Solar)", "Maccreanor Lavington (NE02 North East Lands)"]
- `awards`: ["Housing Design Awards entry — Wembley North East Lands"]
- `is_signature`: false
- `style_notes`: "12-acre masterplan centred on Union Park and a new community hub. Mix of Haworth Tompkins and Maccreanor Lavington buildings; 2,000+ homes total at full buildout by 2027. Fabric-first approach with Design for Manufacture and Assembly (DfMA) strategy for reduced embodied carbon."

**D. long_form**
- `full`: "North East Lands is the 12-acre final-phase masterplan at Wembley Park, providing 2,000+ homes across multiple buildings between 2024 and 2027. The first phase — Luna and Solar, both by Haworth Tompkins — is complete. Subsequent phases include NE02 (designed by Maccreanor Lavington) and further buildings to be announced.\n\nThe masterplan is differentiated by Union Park — Brent's first new public park in over a century — and a 100-person flexible community hub event space. Delivery philosophy is fabric-first with a DfMA strategy to reduce embodied carbon.\n\nAs a Flatbrowser project entry, 'north-east-lands' is ambiguous: it could refer to the masterplan itself (redundant with Luna + Solar which are separate entries), the NE02 Maccreanor Lavington block (pre-delivery, not yet leasable), or a forthcoming building. Recommend either resolving this project to NE02 with a pre-launch flag or removing it as a duplicate of the Luna + Solar entries."
- `living_experience`: "Not applicable — masterplan-level or pre-delivery."
- `notable_features`: "Union Park (Brent's first new public park in 100+ years) is the campus-wide differentiator for buildings fronting onto it — currently Luna and Solar. The 100-person community event space is the most ambitious social amenity on the campus."

**E. resident_signal**
- All fields: undefined / "Too few reviews for reliable signal (pre-delivery or masterplan-level project)."
- `homeviews_score`: undefined
- `homeviews_url`: undefined

**F. pricing**
- Not applicable — no leasable stock under a "North East Lands" umbrella separate from Luna/Solar.
- bills_included: false
- price_transparency: "enquire"
- notes: "No pricing for 'North East Lands' as a standalone project as of 2026-04-17. If the intended referent is NE02 (Maccreanor Lavington), pre-launch info is not publicly available."

**G. affordability**
- `affordability`: "unclear"

---

## Sources

Accessed 2026-04-17:

**Operator & masterplan**
- https://www.quintainliving.com/ (operator landing)
- https://www.quintainliving.com/apartment-buildings (portfolio listing)
- https://www.quintainliving.com/our-buildings (redirects; 404)
- https://www.quintainliving.com/faqs
- https://www.quintainliving.com/sustainable-homes
- https://www.quintain.co.uk/wembley-park/locations/ (developer site, per-building pages)
- https://www.quintain.co.uk/news-and-media/press-releases/2025/luna
- https://www.quintain.co.uk/news-and-media/press-releases/2025/solarlaunch
- https://www.quintain.co.uk/news-and-media/press-releases/2024/kkr (KKR transaction — Alameda + Beton)
- https://nla.london/members/quintain (NLA practice listing)
- https://nla.london/projects/wembley-park

**Per-building (Quintain Living site)**
- https://www.quintainliving.com/luna
- https://www.quintainliving.com/ferrum
- https://www.quintainliving.com/madison
- https://www.quintainliving.com/canada-gardens
- https://www.quintainliving.com/landsby
- https://www.quintainliving.com/beton (partially opaque)
- https://www.quintainliving.com/solar
- /alameda, /alto — both 404 on Quintain Living site (operator handovers)

**HomeViews**
- https://www.homeviews.com/company/quintain-living
- https://www.homeviews.com/development/canada-gardens-wembley-park-ha9 (4.01/5, 126 reviews)
- https://www.homeviews.com/development/ferrum-ha9 (3.94/5, 118 reviews)
- https://www.homeviews.com/development/landsby-wembley-park-ha9 (4.24/5, 98 reviews)
- https://www.homeviews.com/development/madison-ha9 (4.54/5, 81 reviews)
- https://www.homeviews.com/development/beton-wembley-park-ha9 (3.83/5, 48 reviews)
- https://www.homeviews.com/development/alameda-wembley-park-ha9 (4.23/5, 98 reviews)
- https://www.homeviews.com/development/luna-ha9 (4.9/5, few reviews)

**Architectural sources**
- https://www.haworthtompkins.com/news/haworth-tompkins-working-with-quintain-on-new-homes-for-wembley-park
- https://www.flanaganlawrence.com/alameda
- https://www.flanaganlawrence.com/landsby
- https://platform5architects.com/project/alameda-Quintain-living
- https://architectprojects.co.uk/quintain-delivers-luna-adding-a-further-282-build-to-rent-homes-to-its-portfolio-at-wembley-park/
- https://architecturemagazine.co.uk/2018/06/27/flanagan-lawrence-completes-alto-residential-development-wembley/
- https://mcaleer-rushe.co.uk/quintain-and-mcaleer-rushe-complete-phase-1-of-major-wembley-park-development/
- https://www.jtp.co.uk/projects/ferrum/
- https://www.gillespies.co.uk/projects/ferrum-formerly-south-west-lands
- https://www.cartwrightpickard.com/beton
- https://www.buildington.co.uk/buildings/10075/england/london-ha9/engineers-way/north-east-lands
- https://www.buildington.co.uk/buildings/11528/england/london-ha9/engineers-way/ne02-north-east-lands
- https://www.buildington.co.uk/buildings/12090/england/london-ha9/rutherford-way/luna
- https://hdawards.org/scheme/58351_scheme/ (North East Lands Housing Design Awards)

**Ownership and operator changes**
- https://ukpropertyforums.com/kkr-buys-two-btr-blocks-from-quintain-in-wembley-park/
- https://wembleymatters.blogspot.com/2024/01/quintain-sell-off-two-more-wembley-park.html
- https://urbanliving.news/build-to-rent/goldman-sachs-buys-wembley-btr-assets-from-quintain-living/
- https://gowlingwlg.com/en/insights-resources/client-work/2024/quintain-sales-of-wembley-build-to-rent-assets
- https://www.propertyinvestortoday.co.uk/breaking-news/2020/09/major-btr-player-rebrands-tipi-to-quintain-living/
- https://benews.co.uk/goldman-sachs-and-tene-living-acquire-261-btr-units-from-quintain-at-wembley-park/

**Resident signal (aggregate)**
- https://www.trustpilot.com/review/quintainliving.com (4.5/5, 960 reviews, 63%/30% bimodal)

**Regulatory notice**
- https://wembleymatters.blogspot.com/2024/08/advertising-watchdog-finds-quintain.html (ASA upheld 3 counts of misleading advertising — context for hidden-fee complaints in HomeViews)

## Unclear / deferred

1. **Exact EPC certificates per building.** Operator claims portfolio-wide B with Ferrum Phase 1 explicitly verified at Environmental Impact A. Individual unit certs would require find-energy-certificate.gov.uk lookups by street-level address — worthwhile for Ferrum (thermal complaints suggest variance) but lower priority elsewhere.

2. **Alameda operator split.** Alameda has transitioned Quintain → KKR → Allsop Letting & Management (Dec 2024). Flatbrowser data model needs either (a) a new Allsop operator entry with Alameda migrated under it, (b) a separate Allsop research pass under data-upkeep, or (c) removal from the Quintain Living surface. Do not allow the current V1 qualification (Homeppl, 3-month min, achievable-with-guarantor) to surface for Alameda — it does not apply.

3. **Alto operator split.** Same as Alameda, but under Tene Living (Goldman Sachs ownership). Page 404 on Quintain Living suggests Quintain no longer markets it. Same three options: Tene Living operator entry, separate research pass, or removal.

4. **Beton operator status.** Beton was in the KKR sale but KKR retained Quintain Living as manager. Worth confirming annually as part of data-upkeep hygiene.

5. **north-east-lands project ambiguity.** The `north-east-lands` Flatbrowser project ID likely duplicates Luna + Solar (which are separate entries) or refers to NE02 (Maccreanor Lavington, pre-delivery). Recommend resolving to NE02 with a pre-launch flag or removing as a duplicate.

6. **Beton pricing specificity.** The quintainliving.com/beton page returned summarised operator-level pricing in our fetch rather than building-specific unit rates. A direct enquiry or a return fetch in a few days may surface the firm numbers. Current estimates are anchored to Ferrum's price band.

7. **Utility cost pass-through rates.** Multiple HomeViews complaints across Canada Gardens, Ferrum and elsewhere claim Quintain charges ~42.6p/kWh vs London-average ~33p/kWh for communal heat and electric. This is not a V2 field in the schema but is a material decision input for a price-sensitive renter and should be captured as a note on the operator or the affordability chip methodology rather than a per-building field.

8. **Gym quality across 2025 buildings (Luna, Solar).** Ferrum is widely agreed to be the strongest gym in the portfolio; Madison's is the weakest. Luna and Solar gyms are too new for reliable differentiation — graded "good" as default but may rank higher or lower after a few months of review accumulation.
