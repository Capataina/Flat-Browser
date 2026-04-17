# Proposals — Peckham

**Scope:** V4 area-level fields. Single-author pass, 2026-04-17.
**Footprint:** 10-min walk from Peckham Rye Overground station (Rye Lane axis, Peckham High Street, Copeland Park). Postcodes SE15.
**Comparables anchor:** C tier (current grade affirmed — T1.1 safety marginal-fail is the constraint).

---

## Structured fields

### connectivity

- **lines:**
  - `{ name: "Windrush", type: "overground" }` (ex-East London line)
  - `{ name: "Suffragette", type: "overground" }` (ex-Gospel Oak-Barking, serving Queens Road Peckham)
  - `{ name: "Southeastern", type: "rail" }`
  - `{ name: "Thameslink", type: "rail" }`
- **primary_stations:**
  - `{ name: "Peckham Rye", lines: ["Windrush", "Southeastern", "Thameslink"], walk_minutes_from_centre: 5 }`
  - `{ name: "Queens Road Peckham", lines: ["Suffragette"], walk_minutes_from_centre: 8 }`
  - `{ name: "Nunhead", lines: ["Southeastern", "Thameslink"], walk_minutes_from_centre: 14 }`
- **times_to_anchors:** `{ city_of_london: 22, canary_wharf: 28, soho_fitzrovia: 26, kings_cross_shoreditch: 20 }` (Bank via Thameslink→Blackfriars or LO→Canada Water; CW via LO→Canada Water→Jubilee; TCR via LO+Bakerloo or rail+Tube; KX via Thameslink direct)
- **multi_cluster_score:** 2 (City + KX ≤25; CW and Soho fail)
- **redundancy_score:** 4 (four independent products across Peckham Rye + Queens Road)
- **notes:** "Peckham Rye is the structurally strongest Overground station in south London — Windrush Line (Highbury–West Croydon/Crystal Palace/Clapham Junction/New Cross), Southeastern (Cannon Street/Charing Cross), and Thameslink (King's Cross/Farringdon/Luton) at a single platform complex. The trade-off is no direct tube — Soho and Canary Wharf both need a change. Queens Road Peckham (Suffragette) adds Barking-bound access. No Night Tube; Night Bus 343 runs to Trafalgar Square."
- **sources:**
  - `https://tfl.gov.uk/tube-dlr-overground/status/`
  - `https://tfl.gov.uk/plan-a-journey/`
  - `https://www.nationalrail.co.uk/stations/peckham-rye/`

### demographics

Based on ONS Census 2021 for LSOAs covering Peckham ward (Southwark 023A–023E, roughly Peckham ward + Rye Lane ward):

- **primary_age_cohort:** `"18-29"`
- **age_breakdown:**
  - `{ cohort: "18-29", pct: 29 }`
  - `{ cohort: "30-39", pct: 27 }`
  - `{ cohort: "40-49", pct: 13 }`
  - `{ cohort: "50+", pct: 31 }`
- **ethnic_composition:**
  - `{ group: "White — British", pct: 23 }`
  - `{ group: "White — other", pct: 14 }`
  - `{ group: "Black or Black British", pct: 37 }`
  - `{ group: "Asian or Asian British", pct: 10 }`
  - `{ group: "Mixed", pct: 11 }`
  - `{ group: "Other ethnic group", pct: 5 }`
- **household_mix:**
  - `{ type: "Single person", pct: 34 }`
  - `{ type: "Couple no children", pct: 19 }`
  - `{ type: "Couple with children", pct: 17 }`
  - `{ type: "Lone parent", pct: 14 }`
  - `{ type: "Shared household", pct: 13 }`
  - `{ type: "Other", pct: 3 }`
- **student_pct:** 13 (Goldsmiths proximity; Camberwell College of Arts)
- **professional_renter_pct:** 40
- **notes:** "Peckham's Black British population (37%) is the largest single ethnic group — among London's most significant Nigerian, Ghanaian, and wider African diaspora concentrations (contrast with Brixton's historic Caribbean anchor). 56% of residents are 18-39 — genuine young-professional density layered on a settled African-British community. Lone-parent households at 14% are above London average. Social-housing stock ~40% of Peckham ward tenure; renter-professional density is concentrated around Bellenden Road / Nunhead edge and the new-build Rye Lane area."
- **sources:**
  - `https://www.ons.gov.uk/census`
  - `https://www.southwark.gov.uk/community/ward-profiles`
  - `https://data.london.gov.uk/dataset/ethnic-groups-borough`

### safety

- **overall:** `"moderate"`
- **crime_vs_borough:** `"above"` (Peckham ward consistently top-3 Southwark)
- **crime_vs_croydon:** `"similar"` — nuance below
- **after_dark_assessment:** "Rye Lane on weekend nights (21:00-02:00) is busy and well-lit from the bar-and-restaurant economy — the main strip feels qualitatively safer than a quieter residential street in the same postcode. The specific concerns are well-documented: North Peckham estate edges (the historic Peckham Boys / Ghetto Boys territory), Queens Road south of the Overground, and the Bussey Building / Copeland Park approach after events end at 03:00+. Women-walking-alone reports are mixed — acceptable on the main Rye Lane axis with active foot traffic, uneasy on the estate edges. The 2000 Damilola Taylor case remains the defining cultural reference for outside perception; the actual 2025 violent-crime rate is above Southwark mean but comparable to Brixton's Coldharbour ward."
- **concerns:**
  - `"North Peckham estate edges (Chalmers Way, Meeting House Lane) — avoid as late-night through-routes"`
  - `"Queens Road Peckham south approach — quieter, poorly lit"`
  - `"Rye Lane 02:00-04:00 window — late-night economy winding down, occasional street violence"`
  - `"Copeland Park / Bussey Building post-event — crowd disperses onto Rye Lane and Consort Road, crime uptick documented"`
- **sources:**
  - `https://www.police.uk/pu/your-area/metropolitan-police-service/peckham/`
  - `https://news.met.police.uk/`

**Safety reputation vs actual audit:** Peckham's reputation is the most reputationally-lagged data point in south London. The 1990s-2000s gang-violence reputation (Damilola Taylor, Peckham Boys/Ghetto Boys) is out of date by two decades — but the data is not clean either. Current patterns: knife-crime incidents are above Southwark mean and concentrated on a small set of estate edges; opportunistic property crime (phone snatches) is elevated by the night-time economy; violent crime against residents in their own homes is near-average for Zone 2. The honest classification is `"moderate"` and `"above"` borough — the same as Brixton, without Brixton's Victoria Line structural advantage. Peckham's cultural-creative reputation has overwritten its gang reputation in middle-class London consciousness, but the Met Police data has not moved as fast as the press coverage.

### green_and_water

- **has_river:** false
- **has_canal:** false
- **has_dock:** false
- **parks:**
  - `{ name: "Peckham Rye Park and Common", size_acres: 113, walk_minutes: 10, notes: "Combined common + ornamental park — Japanese garden, American garden, playing fields" }`
  - `{ name: "Burgess Park", size_acres: 140, walk_minutes: 15, notes: "Largest park in Southwark — lake, BMX track, playing fields, Chumleigh Gardens" }`
  - `{ name: "Warwick Gardens", size_acres: 3, walk_minutes: 5, notes: "Small Victorian square on Rye Lane west" }`
  - `{ name: "Peckham Square", size_acres: 1, walk_minutes: 2, notes: "Civic square outside Peckham Library — event space, fountains" }`
- **overall_assessment:** "Peckham Rye Park and Common combined are a genuine destination green asset at 113 acres, ten minutes south of the station. Burgess Park's 140 acres is the larger option but 15 min walk north — more Walworth than Peckham in lived experience. No river or canal. For Caner's standing-desk weekend green access, Peckham Rye is a material upgrade over Croydon's Wandle/Park Hill options."
- **sources:**
  - `https://www.southwark.gov.uk/parks-and-open-spaces`
  - `https://peckhamryepark.co.uk/`
  - `https://www.royalparks.org.uk/` (reference)

### amenities

- **grocery:**
  - `{ name: "Khan's Bargains", type: "discount grocer", walk_minutes: 2, notes: "Rye Lane institution — fresh produce and dry goods, cash-cheap" }`
  - `{ name: "Peckham High Street Tesco Superstore", type: "supermarket", walk_minutes: 7, notes: "Full-size Tesco — weekly shop anchor" }`
  - `{ name: "Morrisons Peckham", type: "supermarket", walk_minutes: 5, notes: "Queens Road — secondary full-size option" }`
  - `{ name: "Lidl Peckham", type: "supermarket", walk_minutes: 8, notes: "Peckham Hill Street" }`
  - `{ name: "Rye Lane African and Caribbean grocers", type: "specialist grocery cluster", walk_minutes: 3, notes: "Collection of 15+ specialist shops on Rye Lane — yam, plantain, specialist proteins" }`
  - `{ name: "General Store Peckham", type: "deli/independent", walk_minutes: 5, notes: "Bellenden Road — the bougie-Peckham anchor" }`
- **gyms:** (T2.3)
  - `{ name: "PureGym Peckham", type: "budget gym 24h", walk_minutes: 4, notes: "Rye Lane — 24/7 budget" }`
  - `{ name: "The Gym Peckham", type: "budget gym 24h", walk_minutes: 6, notes: "Holdron's Arcade — 24/7 budget" }`
  - `{ name: "Peckham Pulse", type: "council leisure centre", walk_minutes: 3, notes: "Peckham High Street — pool + gym + classes, Southwark council" }`
  - `{ name: "Crossfit SE15", type: "crossfit box", walk_minutes: 8, notes: "Consort Road — Crossfit affiliate" }`
  - `{ name: "Peckham Pride Boxing", type: "boxing", walk_minutes: 10, notes: "Community boxing club" }`
  - No Third Space / Equinox. Premium-tier gap.
- **food_and_drink:**
  - `{ name: "Peckham Levels", type: "food hall and maker space", walk_minutes: 4, notes: "Bold Tendencies car park — 7-storey conversion, bars on levels 6-7 + rooftop, food on lower levels" }`
  - `{ name: "Bussey Building / Copeland Park", type: "nightlife and cultural complex", walk_minutes: 6, notes: "Five-storey warehouse — CLF Art Cafe (club), Frank's Cafe rooftop summer pop-up" }`
  - `{ name: "Kudu / Kudu Grill", type: "restaurant", walk_minutes: 7, notes: "Queens Road — South African, Time Out top-rated" }`
  - `{ name: "Miss Tapas Peckham", type: "restaurant", walk_minutes: 4, notes: "Rye Lane" }`
  - `{ name: "The Montpelier", type: "pub", walk_minutes: 6, notes: "Choumert Road — weekly comedy nights, iconic Peckham pub" }`
  - `{ name: "Forza Wine", type: "wine bar", walk_minutes: 4, notes: "Peckham Rye station rooftop — sister to Bermondsey operation" }`
- **health:**
  - `{ name: "Nexus Health Group", type: "GP practice", walk_minutes: 6, notes: "Queens Road — registration generally open" }`
  - `{ name: "Lister Primary Care Centre", type: "GP practice + walk-in", walk_minutes: 5, notes: "Peckham High Street — walk-in available" }`
  - `{ name: "Boots Rye Lane", type: "pharmacy", walk_minutes: 3, notes: "Central pharmacy" }`
- **cultural:**
  - `{ name: "Peckhamplex", type: "independent cinema", walk_minutes: 3, notes: "Six-screen cinema — famously £4.99 all tickets, all times, institution" }`
  - `{ name: "Peckham Levels", type: "maker space and food hall", walk_minutes: 4, notes: "Studios, workshops, bars, events" }`
  - `{ name: "CLF Art Cafe (Bussey Building)", type: "music venue / club", walk_minutes: 6, notes: "Four-floor club across Copeland Park" }`
  - `{ name: "Frank's Cafe", type: "summer rooftop bar", walk_minutes: 4, notes: "Bold Tendencies rooftop — Jun-Oct, Assemble architecture pedigree" }`
  - `{ name: "South London Gallery", type: "contemporary art gallery", walk_minutes: 10, notes: "Peckham Road — free, renowned exhibitions" }`
  - `{ name: "Peckham Library", type: "public library / architectural landmark", walk_minutes: 5, notes: "Alsop & Störmer — Stirling Prize 2000 winner" }`
- **notes:** "Amenity density is exceptional for Zone 2 south London. The creative-space density (Peckham Levels, Bussey, Copeland, SLG, Peckhamplex) is qualitatively stronger than Brixton's — it reads more like Shoreditch than a typical Zone 2 residential area. The gap versus premium areas is the same as Brixton: no Third Space / Equinox, no M&S Food or Waitrose. Grocery skews to specialist African/Caribbean + discount + Tesco, not the premium end."
- **sources:**
  - `https://www.peckhamlevels.org/`
  - `https://www.clfartcafe.com/` (Bussey)
  - `https://www.southlondongallery.org/`

### regeneration

- **status:** `"active"` (Old Kent Road opportunity area + Peckham town centre regeneration)
- **investment_pipeline:** "The Old Kent Road Opportunity Area designation covers northern Peckham's industrial edge — identified for 20,000 homes over the 2020-2040 window, with Bakerloo Line extension (BLE) a key unlocking condition. BLE funding and timing has slipped multiple times; current TfL position is that BLE delivery is not before 2030s and requires committed government funding that is not in place. Ruby Triangle (Avanton, 1,152 homes, up to 48 storeys), The BeCa (Avanton, 292 homes), and Malt Street (Berkeley, 1,300 homes) are the largest Old Kent Road schemes. Peckham town centre has a separate strategy — Holdron's Arcade / Aylesham Centre redevelopment proposals, and the Peckham Rye Station Square Masterplan (Landolt + Brown + Benedetti Architects) delivering public realm improvements through 2026."
- **recent_milestones:**
  - "2023 — Ruby Triangle outline consent granted (Avanton, Farrells)"
  - "2024 — Peckham House (Surman Weston) RIBA London Project Architect of the Year"
  - "2024 — Peckham Rye Station forecourt opens (Landolt + Brown)"
  - "2025 — Blenheim Grove RIBA London Award"
  - "2025 — The BeCa marketing suite launch (Mar 2026)"
- **upcoming_milestones:**
  - "2026 — The BeCa completion (Q4 2026)"
  - "2027-2029 — Ruby Triangle phased delivery"
  - "2026-2028 — Peckham Rye Station Square public realm (next phases)"
  - "2030s — Bakerloo Line extension (subject to funding)"
- **trajectory_through_2027:** "Through 2027, Peckham is actively regenerating at the town-centre level (public realm improvements, boutique new-build like Rye Parkside completing) and the Old Kent Road edge (Avanton towers rising). None of this will have transformed the area's character by August 2027 — it will still be recognisably Peckham, with the creative-space density and Rye Lane food-and-nightlife economy that currently defines it. The Bakerloo Line extension remains the transformative but unlikely-before-2030s catalyst. For a 2026-2027 renter, Peckham's trajectory is ascending but the improvement is incremental."
- **sources:**
  - `https://www.southwark.gov.uk/planning-environment-and-building-control`
  - `https://www.london.gov.uk/programmes-strategies/planning/implementing-london-plan/london-plan-guidance-and-spgs/old-kent-road-opportunity-area-planning-framework`
  - `https://avanton.co.uk/portfolio/ruby-triangle/`

---

## Long-form prose

### full

Peckham sits in Southwark at Zone 2, served by Peckham Rye station (Windrush, Southeastern, Thameslink at one platform complex) and Queens Road Peckham (Suffragette line). The town centre's axis is Rye Lane — a 400m retail strip running north from Peckham Rye station to Peckham High Street, containing the densest concentration of African and Caribbean independent grocery in London alongside boutique independent restaurants, the £4.99 Peckhamplex cinema, and Peckham Library (Alsop & Störmer, 2000 Stirling Prize winner). Copeland Park and the Bussey Building just east of Rye Lane host Peckham Levels (seven-storey ex-car-park conversion, bars and workspaces), Bold Tendencies (summer rooftop arts programme with Frank's Cafe), and CLF Art Cafe (four-floor music club). This is one of London's most concentrated creative-cultural infrastructures outside Zone 1.

Demographically: 56% aged 18-39, 37% Black British (London's largest single Nigerian/Ghanaian/wider-African diaspora concentration), 23% White British, 13% student, 40% professional-renter. The community skews young but is not student-dominated; lone-parent households at 14% reflect significant social-housing tenure across the ward (~40% of stock).

Safety is the load-bearing weakness — the same structural problem as Brixton. Peckham ward sits in Southwark's top-3 for violent crime; North Peckham estate edges (historic gang territory) remain specific concern areas; opportunistic property crime (phone snatches) is elevated by the Rye Lane night-time economy. Reputation lags data: the 1990s-2000s gang-violence reputation is out of date by two decades, and the middle-class creative reputation has replaced it in press coverage — but the Met Police data still shows moderate-to-elevated patterns. The honest read is `"moderate"` and `"above"` borough — comparable to Brixton's Coldharbour ward without Brixton's Victoria Line.

Transport is Peckham's awkward axis. Redundancy is excellent (four independent rail products), and Peckham Rye to King's Cross (Thameslink, 20 min) and Canada Water (Overground → Jubilee, 15 min) are strong journeys. But there is no tube at Peckham itself, and Canary Wharf (28 min) and Tottenham Court Road (26 min) both fail the 25-min threshold. Multi-cluster score 2/4 is the constraint — Peckham is not an all-four-anchors location like Brixton.

Green is solid: Peckham Rye Park and Common (113 acres, 10 min walk) is a destination park with Japanese and American gardens, with Burgess Park (140 acres, 15 min) beyond. No river or canal.

Regeneration is active but slow-acting. Ruby Triangle (Avanton, 1,152 homes up to 48 storeys) and Malt Street (Berkeley) are rising on the Old Kent Road edge; Peckham Rye Station Square public realm is in delivery; Bakerloo Line extension is the transformative catalyst that remains 2030s+. Through 2027, Peckham will feel qualitatively similar to today with boutique new-build and incremental public realm improvements — the cultural identity is robust and the pace of change is not displacement-level.

For a renter, the BTR market is thin to nonexistent. Avanton's Ruby Triangle is build-for-sale with secondary-market rental (unreliable); The BeCa is BTS. No flagship BTR operator has entered Peckham. Individual-landlord rental on 1-beds runs ~£1,600-2,000/mo depending on postcode within SE15.

### history

Peckham grew from a Kentish agricultural village (Saxon "Peac-ham" = hill village) absorbed by London's south-east expansion in the 1860s-1880s when the railway arrived. The Victorian era built the Rye Lane retail strip and the terraced housing that still dominates the residential footprint. By the interwar years Peckham was a working-class retail destination with Jones & Higgins department store (closed 1980) as its anchor.

Post-war, Peckham absorbed Caribbean migrants from the Windrush era (1948+) and, critically, large Nigerian and Ghanaian migrations from the 1970s onward — making Peckham one of the UK's most significant African diaspora concentrations, with Rye Lane becoming the retail expression of that community.

The 1990s-2000s saw Peckham's reputation crash. The North Peckham Estate (built 1960s-70s) became synonymous with social deprivation and gang violence; the 2000 murder of 10-year-old Damilola Taylor on the estate became a defining national news event. The estate was demolished 2002-2005 as part of a £290m regeneration programme. The Peckham Library (opened 2000, Stirling Prize) was the architectural signal of the regeneration intent.

From the mid-2000s, Peckham's cheap warehouse space attracted artists priced out of Shoreditch and Hackney. Bold Tendencies opened 2007 in the Peckham Levels car park; Frank's Cafe followed. The Bussey Building (CLF Art Cafe) opened 2008. By 2015 Time Out was calling Peckham one of London's coolest neighbourhoods. The 2016 arrival of Peckham Levels formalised the creative-space infrastructure.

The 2020s have seen the beginning of the Old Kent Road Opportunity Area build-out — Ruby Triangle, The BeCa, Malt Street — though at the town-centre level the creative economy and independent-retail character remains intact.

### vibe

Peckham is louder, rougher, more textured, and more creatively self-aware than Brixton. Rye Lane on a Saturday afternoon is one of the densest retail experiences in London — African grocers spilling onto the pavement, bass-heavy music from record shops, queues outside Khan's Bargains, churches converted into creative spaces, 20-something creative professionals in Forza Wine next door to a 60-year-old Nigerian fabric shop. The diversity is not performed; it is the working reality of daily commerce.

Bellenden Road (west of Rye Lane) is the "bougie Peckham" counterpoint — sourdough bakeries, General Store, artisanal butcher — serving the gentrifying middle-class pocket that has arrived since the 2010s. Queens Road (east) is rougher and less redeveloped, closer to the pre-2010s Peckham character.

Nightlife is aggressive in volume. Peckham Levels' rooftop (Levels 6-7), Frank's Cafe (summer only), CLF Art Cafe, The Montpelier, and the Rye Lane bar-cluster pull significant crowds Thursday-Sunday. The 02:00-04:00 window produces noise and crowd-dispersal challenges on Rye Lane and Consort Road.

### weekday

Weekday mornings on Rye Lane start earlier than Brixton — African-Caribbean grocers open from 07:00, Peckham High Street shops follow by 08:30. The Overground peak runs 07:45-09:00 with genuine crowding at Peckham Rye (the Windrush Line is popular for commuters to Shoreditch/Canada Wharf via a single change at Canada Water). Café culture is real on Bellenden Road and at the station-adjacent spots (Anderson & Co, Yanone); Peckham Levels' ground floor hosts working-from-home freelancers through the day.

Noise through the weekday midsection is moderate on Rye Lane and low on the residential side-streets east of Bellenden Road or south of Nunhead. The late-afternoon school run (Harris Academy Peckham, multiple primaries) adds pedestrian density 15:00-16:30.

### weekend

Saturday peak is Rye Lane 11:00-16:00 — African grocers at saturation, Peckhamplex queues, Market Row equivalent traffic. Saturday night Bussey/Peckham Levels draw strongly from across London — not just south London residents. The 01:00-03:00 crowd-dispersal produces the late-night concerns.

Sunday is quieter but not dead — Forza Wine, The Montpelier, Peckham Refreshment Rooms, and the Bellenden Road cafes anchor brunch and Sunday lunch; Peckham Rye Park fills on warm Sundays. Peckham Levels operates reduced-hours on Sundays.

### notable

- **Peckhamplex** — six-screen cinema, all tickets £4.99 all times, institution since 1986.
- **Peckham Library** — Alsop & Störmer, 2000 Stirling Prize winner. Architectural landmark.
- **Peckham Levels** — seven-storey ex-car-park conversion (2017), bars levels 6-7, maker studios lower levels.
- **Bold Tendencies + Frank's Cafe** — summer rooftop programme on Peckham Levels roof since 2007, Assemble architecture pedigree.
- **Bussey Building (CLF Art Cafe)** — four-floor club in Victorian cricket-bat factory, Copeland Park.
- **South London Gallery** — Peckham Road, free contemporary art gallery, Turner Prize-tier exhibitions.
- **Rye Lane** — ~400m retail strip with densest African-Caribbean grocery concentration in London.
- **Peckham House** (Surman Weston) — RIBA London Project Architect of the Year 2024.
- **Blenheim Grove** — RIBA London Award 2025.
- **Copeland Park** — creative workspace complex, 200+ small businesses.

### croydon_comparison

Safety is the honest similarity. Peckham ward and East Croydon both sit above their respective borough averages; both carry specific street-level concerns; neither is categorically safer than the other on aggregate data. The *character* differs: Croydon's issue is the all-day ambient East Croydon station forecourt dynamic (aggressive begging, fights, drug use visible to commuters); Peckham's issue is concentrated on specific estate edges (North Peckham, Queens Road south) and late-night crowd-dispersal windows. Both require the same level of street awareness; neither is a "safe" area in the sense Herne Hill or Earl's Court are.

Café density is a significant upgrade — Bellenden Road alone outperforms Croydon's entire third-space offering, and adding Peckham Levels, Forza Wine, and the Rye Lane cluster produces genuine work-from-home infrastructure. Grocery is a mixed story: specialist African/Caribbean and discount grocery are exceptional on Rye Lane, and full-size Tesco + Morrisons + Lidl cover the weekly shop — but the premium tier (M&S Food, Waitrose) is absent, which Croydon's Whitgift Centre has.

Gyms parity: PureGym + The Gym + Peckham Pulse council + Crossfit SE15 cover budget-to-specialist. No Third Space / Equinox — same gap as Brixton.

Transport is the load-bearing Peckham weakness versus Croydon. Croydon's Overground/Southern/Tram combination reaches central (East Croydon to London Bridge 15-20 min, Victoria 15-25 min) with frequent services; Peckham's journey to Bank (22 min) and KX (20 min) is competitive, but Canary Wharf (28 min) and Tottenham Court Road (26 min) both underperform. Zone 2 vs Zone 5 favours Peckham on the flat, but Peckham's no-tube status means the tube-equivalent journeys often require a change.

Price: 1-bed individual-landlord ~£1,600-2,000/mo in SE15 vs Croydon's Ten Degrees £2,280 contractual / ~£3,000 effective. Peckham wins on price per journey-time-to-King's-Cross; parity on journey-time-to-City; loses on journey-time-to-Canary-Wharf. Peckham has no flagship BTR operator — same structural gap as Brixton.

---

## Sources (full list for external_links)

- https://tfl.gov.uk/tube-dlr-overground/status/
- https://tfl.gov.uk/plan-a-journey/
- https://www.nationalrail.co.uk/stations/peckham-rye/
- https://www.ons.gov.uk/census
- https://www.southwark.gov.uk/community/ward-profiles
- https://data.london.gov.uk/dataset/ethnic-groups-borough
- https://www.police.uk/pu/your-area/metropolitan-police-service/peckham/
- https://www.southwark.gov.uk/parks-and-open-spaces
- https://peckhamryepark.co.uk/
- https://www.peckhamlevels.org/
- https://www.clfartcafe.com/
- https://www.southlondongallery.org/
- https://www.southwark.gov.uk/planning-environment-and-building-control
- https://www.london.gov.uk/programmes-strategies/planning/implementing-london-plan/london-plan-guidance-and-spgs/old-kent-road-opportunity-area-planning-framework
- https://avanton.co.uk/portfolio/ruby-triangle/
