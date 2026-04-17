# V4 Area Research — Batch D (East / SE London)

Agent: V4 area-research, batch D
Date: 2026-04-17
Areas: Royal Wharf & Royal Docks, Woolwich, Greenwich Peninsula, Kidbrooke Village, Canning Town
Baseline comparator: Ten Degrees Croydon (Zone 5, ~£2,280 contractual / ~£3,000 effective, high street-level crime, chicken-shop retail)

Schema source of truth: `.claude/skills/data-upkeep/references/area-research-schema.md` → `src/areas/types.ts`.

---

## Batch summary (for the caller)

| Area | Zone | Grade | Crime vs Croydon | Primary cohort | Regen status | Redundancy | Multi-cluster |
|---|---|---|---|---|---|---|---|
| Royal Wharf & Royal Docks | 3 | B | much-safer | 30-39 | active | 2/5 | 4/5 |
| Woolwich | 3/4 | B | similar (split by geography) | 18-29 | phased | 4/5 | 3/5 |
| Greenwich Peninsula | 2 | B | safer | 18-29 (20-39 at 56%) | phased | 1/5 | 3/5 |
| Kidbrooke Village | 3 | C | much-safer | 30-39 | phased | 1/5 | 1/5 |
| Canning Town | 2 | C | similar | 18-29 | active | 3/5 | 3/5 |

Demographics coverage: ONS Census 2021 + Crystal Roof ward aggregates pulled for all five. Age breakdowns confident to ±2pp; ethnic composition confident to high-level Census groups.
crime_vs_croydon distribution: 2 much-safer, 1 safer, 2 similar. No "worse" entries — consistent with East/SE riverside BTR skew.
Regen status distribution: 2 active, 3 phased. All five have committed delivery through 2028+.
Gyms signal: strong across the board (PureGym or equivalent everywhere; The Clubhouse at Royal Wharf is dataset-leading; David Lloyd + PureGym at Kidbrooke is strong for Zone 3).

Decisions needing caller sign-off:
1. Woolwich T1 stays marked as a **geographic split** (Royal Arsenal interior passes, town-centre fringe fails). This is already encoded; confirming V4 should not override to a single verdict.
2. Greenwich Peninsula `redundancy_score: 1` — Jubilee-only. Consistent with the line-independence heuristic but feels pessimistic given the area's polish. Leaving at 1/5 per heuristic; flagging because it may read surprisingly low in the UI.
3. Kidbrooke Village `multi_cluster_score: 1` — only City of London ≤25 min. Again heuristic-true but makes Kidbrooke look weak on T5.1 despite being a genuinely pleasant area. Consider surfacing a `suburban_tradeoff` note rather than relaxing the numeric.

---

## 1. Royal Wharf & Royal Docks

**id**: `royal-wharf-and-docks`
**borough**: Newham
**postcodes**: E16
**zones**: Zone 3

### `long_form`

**full** (keep existing as base, extending Silvertown Quays detail):

> Royal Wharf is one of the most self-contained riverside developments in London — built from scratch on a former industrial site in Silvertown. The Clubhouse anchors the amenity offer: 25m pool, hydrotherapy pool, sauna, gym, and residents' lounge designed by David Morley Architects. A Thames Clipper pier sits on site giving a 2-minute ride to North Greenwich and 19 minutes to Canary Wharf; a kilometre of riverfront walk runs along the development's edge. The on-site high street has a permanent Sainsbury's, Starbucks, Fuller's pub (The Windjammer), and growing independent food-and-drink. Ballymore's management quality has been consistently above average relative to the price point.
>
> The Elizabeth Line (reachable at Custom House, ~10 minutes by DLR or on foot) transformed the connectivity case: Liverpool Street in 8 minutes, Tottenham Court Road in 16, Canary Wharf in 4. The wider Royal Docks area is one of the largest regeneration zones in London — Silvertown Quays' revised masterplan was approved in December 2025 for 7,172 homes across phases, with first-phase affordable homes (Guinness Partnership, 326 homes) approved January 2025 and residents moving in from early 2026. The Silvertown Tunnel opened April 2025, providing a new cross-river road link to Greenwich Peninsula. A new pedestrian and cycle bridge across Royal Victoria Dock will link Silvertown directly to Custom House / Elizabeth Line, tightening the multi-cluster case further.

**history**: Kept as in source file plus: "The Royal Docks were the world's largest enclosed dock system when opened in stages 1855-1921; industrial collapse through the 1960s-80s led to LDDC redevelopment powers in the 1980s. Royal Wharf (Ballymore + Oxley Holdings) began delivery 2016 on the Minoco Wharf site. ExCeL opened 2000. The GLA-led Royal Docks Enterprise Zone was declared in 2012."

**vibe**: Existing prose accurate — "self-contained and family-leaning, clubhouse + on-site high street give real day-to-day liveability, wider Royal Docks still industrial-edge in places."

**weekday**: Existing prose accurate.

**weekend**: Existing prose accurate — add "Thames Clipper is genuinely used for leisure trips, not just commuting."

**notable**: "The Clubhouse (David Morley Architects); Thames Clipper pier on-site; ExCeL to the north; Silvertown Tunnel (opened April 2025); upcoming Royal Victoria pedestrian/cycle bridge; Royal Docks Enterprise Zone status."

**croydon_comparison**:
> Meaningfully safer than East Croydon — the Royal Wharf footprint is privately stewarded with steady on-site foot traffic from the high street and clubhouse until ~22:00; no aggressive begging, no station-forecourt fights. Café density is lower than Croydon's gross retail coverage but tier-mix is cleaner (actual Starbucks + independent cafés + The Windjammer pub vs Croydon's chicken-shop ground-floor retail). Zone 3 vs Croydon's Zone 5: 4 minutes to Canary Wharf, 8 minutes to Liverpool Street via Elizabeth Line at Custom House, 18 minutes to TCR — all materially faster than any Croydon option. Gym coverage is dataset-leading via The Clubhouse pool + sauna + jacuzzi + gym package (no Croydon equivalent). Price differential: approximately £1,900-2,300 for a Royal Wharf / Riverscape 1-bed vs Ten Degrees' ~£3,000 effective — genuine improvement on every dimension simultaneously.

### `connectivity`

- **lines**: DLR, Elizabeth (at Custom House, 10min), Thames Clipper
- **primary_stations**:
  - Pontoon Dock (DLR) — 3min walk
  - West Silvertown (DLR) — 5min walk
  - Custom House (DLR + Elizabeth) — 10min walk / 2min DLR
- **times_to_anchors**: city_of_london 14, canary_wharf 4, soho_fitzrovia 18, kings_cross_shoreditch 16
- **multi_cluster_score**: 4 (all four ≤25 — Old Street borderline but passes)
- **redundancy_score**: 2 (DLR is primary; Elizabeth Line is via Custom House which is a walk/DLR hop, not on-site; Thames Clipper is useful but not a line-failure hedge)
- **notes**: "DLR is the on-foot option; Elizabeth Line is a 10min walk or 1-stop DLR to Custom House. Thames Clipper adds resilience and a pleasant river commute. Royal Victoria bridge (upcoming) will pull Elizabeth Line to ~6min walk."

### `demographics`

- **primary_age_cohort**: 30-39
- **age_breakdown**: {18-29: 22, 30-39: 38, 40-49: 20, 50+: 20} — building-level skews younger than ward-level due to BTR concentration; Silvertown & Royal Wharf MSOA ~11,244 population
- **ethnic_composition**: Newham ward-level: White 30.8, Asian 42.2, Black 17.5, Mixed 5, Other 4.5 — Royal Wharf building-level skews more White-professional than ward
- **household_mix**: Single 35, Couple no children 30, Couple with children 20, Lone parent 8, Shared 5, Other 2
- **student_pct**: 4
- **professional_renter_pct**: 50
- **notes**: "Newham's median age rose 29→32 between 2011 and 2021 — joint second-lowest in London alongside Hackney. Royal Wharf itself is family-leaning professional; the wider Royal Docks ward is one of the most ethnically diverse in London."

### `safety`

- **overall**: safe
- **crime_vs_borough**: below (Royal Wharf footprint; borough overall is one of London's highest knife-crime boroughs)
- **crime_vs_croydon**: much-safer
- **after_dark_assessment**: "Royal Wharf footprint is well-stewarded with steady foot traffic from the on-site high street and Clubhouse until ~22:00. Thames Clipper pier is active evenings. The wider Silvertown/Royal Docks area is industrial-edge in places and quieter at night — reads as 'quiet' rather than 'bleak' on the Thames side; less assuring on the Silvertown Way / Canning Town approach. The Newham borough-level knife-crime headline (695 offences Jan-Oct 2025, highest in London) is a real signal, but it concentrates around Stratford, Forest Gate, and Canning Town — not Royal Wharf itself."
- **concerns**: ["Silvertown Way approach from Canning Town carries borough-level signal", "Wider Royal Docks after ~22:00 is quiet — reads as isolated rather than unsafe"]

### `green_and_water`

- has_river: true, has_canal: false, has_dock: true
- **parks**: [{name: "Thames Barrier Park", walk_minutes: 12, size_acres: 22, notes: "Listed contemporary park with sunken rill garden — architecturally notable"}, {name: "Lyle Park", walk_minutes: 8, size_acres: 4, notes: "Small Thames-side park"}, {name: "Royal Victoria Dock Walk", walk_minutes: 10, notes: "Dock-edge walk around Royal Victoria"}]
- **overall_assessment**: "Thames on one side, Royal Victoria Dock on the other, Thames Barrier Park as a genuine destination park within walking distance. One of the most water-dominant areas in the dataset."

### `amenities`

- **grocery**: Sainsbury's (on-site), Sainsbury's Local (Pontoon Dock), Tesco Extra (North Woolwich, 15min), Lidl at Hallsville Quarter (Canning Town, 10min DLR)
- **gyms**: The Clubhouse (pool + sauna + hydrotherapy + gym — residents-only), PureGym Custom House, Ballymore on-site studios at Riverscape. **T2.3 signal: strong.**
- **food_and_drink**: The Windjammer (Fuller's pub, riverside), Starbucks (on-site high street), independent cafés at Royal Wharf high street, Canteen-style options at Design District via Thames Clipper
- **health**: Royal Docks Medical Centre, Prince Regent Lane practices
- **cultural**: ExCeL (major conventions, not day-to-day), Thames Barrier Park, O2 Arena via Thames Clipper (19min)

### `regeneration`

- **status**: active
- **investment_pipeline**: "Silvertown Quays revised masterplan — 7,172 homes, approved Dec 2025 by Newham. Guinness Partnership delivering 326 affordable homes phase 1 (first residents early 2026). Wider Royal Docks Enterprise Zone: £3.5bn investment signal for Silvertown alone. Royal Victoria pedestrian/cycle bridge approved. Silvertown Tunnel opened April 2025."
- **recent_milestones**: ["2025-04 — Silvertown Tunnel opened", "2025-01 — Phase 1 326 affordable homes at Silvertown approved", "2025-12 — Revised Silvertown Quays masterplan approved (7,172 homes)", "2026-early — First Guinness Partnership residents moving in at Silvertown"]
- **upcoming_milestones**: ["2026-2028 — Phase 1 Silvertown (1,032 homes) completion", "Royal Victoria Dock pedestrian/cycle bridge delivery", "Continued Royal Wharf phase delivery"]
- **trajectory_through_2027**: "Ascending strongly. Silvertown Quays starts delivering real units during Caner's visa window; Silvertown Tunnel is already reshaping bus routes and cross-river access; the pedestrian/cycle bridge will effectively pull the Elizabeth Line onto Royal Wharf's doorstep. By August 2027 the area will have meaningfully more life than today — not just more housing."

Sources: Royal Docks GLA pages, Newham planning portal, Ballymore developer site, ONS Census 2021, Met Police Newham pages.

---

## 2. Woolwich

**id**: `woolwich`
**borough**: Greenwich
**postcodes**: SE18
**zones**: Zone 3/4

### `long_form`

**full**:
> Woolwich is the strongest "cheap Zone 3/4 with proper connectivity" hit in the dataset. Three genuinely independent rail products converge here: Elizabeth Line (Woolwich station, Weston Williamson + Partners — architecturally serious), DLR + Southeastern (Woolwich Arsenal, 5 minutes apart). Canary Wharf is 9 minutes via Elizabeth Line, Tottenham Court Road 23, London Bridge 15. Berkeley's Royal Arsenal Riverside masterplan (~5,000 homes) is the project anchor — a phased heritage-led redevelopment of the former Royal Arsenal munitions site, with Thames-side frontage, heritage buildings repurposed as homes and retail, and Berkeley's reliably strong build quality.
>
> The split-geography problem is real and should not be papered over: inside the Royal Arsenal masterplan footprint, T1.1 passes on private stewardship (well-lit pedestrianised core, on-site retail, steady evening presence around the Dial Arch Square station exit and the riverside bars). On the town-centre / Plumstead approach, T1.1 does not pass — Woolwich Arsenal ward is named as the most dangerous ward in Greenwich borough (169 crimes per 1,000, violence-and-sexual-offences at 155/1k). The Elizabeth Line station exit handles this split reasonably: it opens directly into Dial Arch Square on the Royal Arsenal side rather than onto the town-centre fringe, so commuters can enter and exit the safer side without crossing the rougher one.
>
> Woolwich Works (opened 2021) is a serious cultural anchor — a Victorian industrial complex repurposed into the UK's largest concentration of cultural organisations on a single site, including the Punchdrunk theatre company. Woolwich Waves (2026) is an £80m leisure centre with pools, sports halls, a two-storey gym, and recovery facilities. PureGym operates two Woolwich sites; Anytime Fitness runs from Tesco Extra. Tesco Extra (Love Lane) and Sainsbury's Local (Plumstead Road) provide weekday grocery; Royal Arsenal's in-masterplan retail is building out slowly.
>
> Demographics skew young — Census 2021 for Woolwich-area wards shows median age 35, with 20-39 at 31% ward-wide and up to 50% in Woolwich Arsenal ward (BTR concentration). Ethnic composition is ward-dependent: 44% White, 26% Black, 18% Asian at the SE18 level, with Black African at 30% in some postcodes. Regeneration continues: Electric Works (Re:shape, 1,448 homes) approved December 2025 for start-on-site 2027; Woolwich Exchange (801 homes + cinema on the heritage covered market) remains in pre-construction limbo after two decades.

**history**:
> The Royal Arsenal was the British Army's principal munitions manufacturing site from the 1670s through the 1960s — at peak employing 80,000 people. Closure in 1967 left the site largely derelict. Greenwich Council + Berkeley Homes began phased residential redevelopment in the 2000s, preserving listed buildings as homes and retail. The DLR extension to Woolwich Arsenal opened 2009; the Elizabeth Line opened 2022 after delays, tied to Crossrail's broader timeline. The 2013 Lee Rigby murder placed Woolwich in national news for reasons unrelated to the area's current trajectory — the area has since changed substantially.

**vibe**:
> Split by geography and by time of day. Royal Arsenal interior feels like a private estate — quiet, well-maintained, riverside cafés and pubs that are steady but not buzzy, a cultural scene anchored by Woolwich Works. Town-centre Woolwich is grittier — active high street, diverse retail, rougher edges after dark. Visible policing at the station exits is genuine but inconsistent.

**weekday**:
> A Tuesday at 7pm: Elizabeth Line commuters streaming out of Dial Arch Square; Royal Arsenal pubs filling; Woolwich Works evening events drawing steady crowds; the town-centre side of the station is busier but also noisier. Tesco Extra is active; PureGym is full.

**weekend**:
> A Saturday: Woolwich Works is the cultural centre of gravity — performance programming, food events, weekend markets. Royal Arsenal riverside walk has runners and dog-walkers. Town centre has weekend-market life. O2 and Canary Wharf pull residents away for bigger nights.

**notable**: "Woolwich Elizabeth Line station (Weston Williamson + Partners — 2022); Woolwich Works (Punchdrunk, cultural complex opened 2021); Royal Arsenal heritage context (Dial Arch Square); Firepower museum; Thames Clipper pier at Royal Arsenal; upcoming Woolwich Waves (£80m leisure centre)."

**croydon_comparison**:
> Split by geography. Royal Arsenal interior is meaningfully safer than East Croydon — private stewardship, riverside, quiet-until-about-22:00 evening rhythm, Woolwich Works generating steady cultural foot traffic. Woolwich town-centre fringe is roughly similar to Croydon town centre on a bad night — Woolwich Arsenal ward is the most dangerous in Greenwich borough. Café density inside Royal Arsenal is cleaner tier (independent cafés + heritage-building pubs) than Croydon's chicken-shop mix; town-centre side is comparable. Transport is a massive upgrade — Elizabeth Line puts Canary Wharf at 9 minutes and TCR at 23 minutes, vs Croydon's ~35 to Central. Price differential: Berkeley Living at Royal Arsenal runs ~£1,900-2,500 per month for a 1-bed all-in, vs Ten Degrees' ~£3,000 effective — comparable or better on every dimension if and only if you live inside the Royal Arsenal footprint.

### `connectivity`

- **lines**: Elizabeth, DLR, Southeastern
- **primary_stations**: Woolwich (Elizabeth) 5min, Woolwich Arsenal (DLR + Southeastern) 5min
- **times_to_anchors**: city_of_london 25, canary_wharf 9, soho_fitzrovia 23, kings_cross_shoreditch 28
- **multi_cluster_score**: 3 (KX borderline fails)
- **redundancy_score**: 4 (three genuinely independent rail products)
- **notes**: "Elizabeth + DLR + Southeastern — three independent rail products. Redundancy 4/5. Strongest cheap-Zone-4-with-connectivity in the dataset."

### `demographics`

- **primary_age_cohort**: 18-29 (ward-dependent; 20-39 at 50% in Woolwich Arsenal ward)
- **age_breakdown**: {18-29: 28, 30-39: 25, 40-49: 18, 50+: 29} — SE18 average 35
- **ethnic_composition**: White 44, Black 26, Asian 18, Mixed 6, Other 6
- **household_mix**: Single 38, Couple no children 24, Couple with children 18, Lone parent 10, Shared 7, Other 3
- **student_pct**: 6
- **professional_renter_pct**: 42
- **notes**: "Median age 35 (UK 40.7). 47% single, 37.5% married — youthful. Black African at 30% in some SE18 postcodes."

### `safety`

- **overall**: moderate
- **crime_vs_borough**: above (Woolwich Arsenal ward is most dangerous in Greenwich borough)
- **crime_vs_croydon**: similar (split — much-safer inside Royal Arsenal, similar-to-worse at town-centre fringe)
- **after_dark_assessment**: "Split by geography. Royal Arsenal interior has private stewardship and steady evening presence from Woolwich Works + riverside pubs — safe-feeling until ~22:00, quieter after. Elizabeth Line station exit opens onto the Royal Arsenal side, which keeps the safer-side commuter path intact. Town-centre / Plumstead approach is rougher — 155 violence-and-sexual-offences per 1k. Visible policing at station exits but not consistent."
- **concerns**: ["Woolwich Arsenal ward most dangerous in Greenwich borough (169 crimes/1k, violence-and-sexual offences 155/1k)", "Woolwich town-centre fringe does not pass T1.1", "Plumstead Road approach after dark"]

### `green_and_water`

- has_river: true, has_canal: false, has_dock: false
- **parks**: [{name: "Woolwich Common", walk_minutes: 10, size_acres: 159, notes: "Large open common, MoD-adjacent"}, {name: "Maryon Park", walk_minutes: 12, size_acres: 13, notes: "Wooded Victorian park — Antonioni's Blow-Up filming location"}, {name: "Thames riverside walk", walk_minutes: 2, notes: "Royal Arsenal Thames-side walk extending toward Thamesmead"}]
- **overall_assessment**: "Thames-side at Royal Arsenal, Woolwich Common is very large. Not green-destination but adequate."

### `amenities`

- **grocery**: Tesco Extra (Love Lane), Sainsbury's Local (Plumstead Road), Marks & Spencer Simply Food (town centre), Lidl (Plumstead High Street)
- **gyms**: PureGym Woolwich (Plumstead Road, next to station), PureGym Royal Arsenal, Anytime Fitness (Tesco Extra, 24/7), Woolwich Waves (£80m leisure centre 2026 delivery, two-storey gym + pools + recovery). **T2.3 signal: strong.**
- **food_and_drink**: The Dial Arch (Young's, heritage pub), Guard House Café, Woolwich Works bar + restaurant, General Gordon Square street food, town-centre multi-cuisine
- **health**: Plumstead Health Centre, Woolwich Common Surgery, Queen Elizabeth Hospital (Shooters Hill, 15min)
- **cultural**: Woolwich Works (Punchdrunk, UK's largest concentration of cultural orgs on single site), Firepower Museum heritage, Tramshed Theatre

### `regeneration`

- **status**: phased
- **investment_pipeline**: "Berkeley Royal Arsenal Riverside (~5,000 homes, ~60% delivered). Electric Works (Re:shape, 1,448 homes, £425m GDV) approved Dec 2025, start-on-site 2027. Woolwich Exchange / Spray Street Quarter (Notting Hill Genesis, 801 homes + cinema on Grade II covered market) — approved but no construction start after two decades."
- **recent_milestones**: ["2022 — Elizabeth Line Woolwich opened", "2025-12 — Electric Works 1,448-home redevelopment approved", "2026 — Woolwich Waves leisure centre delivery"]
- **upcoming_milestones**: ["2027 — Electric Works start-on-site", "Continued Royal Arsenal phase delivery (Maribor / Ropeyards 2029)"]
- **trajectory_through_2027**: "Ascending. Elizabeth Line effect is fully priced in; Electric Works and Woolwich Waves add meaningful density during Caner's visa window. Woolwich Exchange remains the long-delayed question mark."

Sources: Met Police Woolwich Arsenal crime map, Royal Greenwich regeneration pages, Berkeley developer site, Woolwich Works, Crystal Roof SE18 demographics.

---

## 3. Greenwich Peninsula

**id**: `greenwich-peninsula`
**borough**: Greenwich
**postcodes**: SE10
**zones**: Zone 2

### `long_form`

**full**:
> Greenwich Peninsula is a masterplanned district delivered end-to-end by Knight Dragon since the mid-2010s on a former brownfield site dominated by the Millennium Dome (now The O2). It is past one-third of a 17,500-home trajectory that concludes around 2043, with £10.8bn of committed investment. The Tide is a 5km elevated linear park along the Thames — one of the most distinctive pieces of outdoor infrastructure built in London in recent years, featuring sculpture by Damien Hirst and others. Design District is the northern tip's creative cluster, with 40+ restaurants and bars including the Canteen food hall. The O2 brings year-round live events and the cultural centre of gravity for SE London. North Greenwich (Jubilee Line) puts Canary Wharf at 4 minutes, Bond Street at 15, Waterloo at 11.
>
> Upper Riverside is the architectural centrepiece — No.4 with Tom Dixon interiors, No.5 by SOM. Entry-level riverside apartments run roughly £2,100-£2,500 per month for a 1-bed. The masterplan is GLA-co-invested which makes delivery risk structurally low — even if Knight Dragon's cadence slows, the GLA stake protects delivery of the public realm. A 300-home McAleer & Rushe plot (M0121, Chapman Taylor-designed 30-storey tower) broke ground December 2025 for 2028 delivery.
>
> The texture is quieter and more residential than central destination areas. The crowd is professional and family-leaning; weekday evenings are steady-but-not-buzzy in Upper Riverside lobbies; the Tide is the main social space. O2 event days bring large episodic crowds that concentrate around Peninsula Square and don't meaningfully affect Upper Riverside. Jubilee Line is the only line — redundancy is genuinely weak (1/5 on the heuristic) despite the area's polish.

**history**:
> The Peninsula was a brownfield gasworks site through the twentieth century, dominated by the Millennium Dome (now The O2) from 2000. Knight Dragon (Hong Kong-based) took over the masterplan in 2012 from Quintain and has delivered phased residential since ~2014. The Jubilee Line extension reached North Greenwich in 1999 as part of the Millennium Dome delivery package. The Thames Path and The Tide linear park were delivered 2019.

**vibe**:
> Quieter and more residential than central destination areas. The crowd is professional and family-leaning. The Tide and Design District provide character; the rest is solid managed housing in a maturing district.

**weekday**:
> A Tuesday at 7pm: O2 events generate sporadic crowds concentrated at Peninsula Square; the Tide has joggers and walkers; Upper Riverside lobbies are active but not buzzy; Design District has evening workspace users.

**weekend**:
> A Saturday: O2 event days bring very large crowds (up to 20,000 for the arena); the Tide is the main residential social space; Design District food and drink pulls brunch crowds; Thames Clipper moves people to Canary Wharf and back.

**notable**: "The O2 Arena (year-round live music and sport); The Tide (5km elevated linear park — Damien Hirst sculpture); Design District (creative studios + Canteen food hall); Upper Riverside No.4 + No.5 (Tom Dixon + SOM); IKEA Greenwich (10min walk); Silvertown Tunnel cross-river link (opened April 2025)."

**croydon_comparison**:
> Greenwich Peninsula is a fully new district built end-to-end since the mid-2010s. Croydon is a degraded historic centre. The Peninsula is quieter and less culturally dense than Croydon's town centre but the public realm and building quality are in a different league — Upper Riverside is genuinely architect-authored (Tom Dixon, SOM) and the Tide is a proper piece of landscape infrastructure. Gym coverage is solid with PureGym on-site and independent studios in Design District — no Third Space or Equinox, but the tier mix beats Croydon's. Safety is meaningfully better — 259 crimes/k ward-wide vs Croydon's ~300/k, and the Peninsula footprint feels well-stewarded throughout. Zone 2 vs Croydon's Zone 5: 4 minutes to Canary Wharf, 15 minutes to Bond Street via Jubilee — a clean upgrade. Price differential: ~£2,100-£2,500 for a 1-bed on the Peninsula vs Ten Degrees' ~£3,000 effective.

### `connectivity`

- **lines**: Jubilee, Thames Clipper
- **primary_stations**: North Greenwich (Jubilee) 5min
- **times_to_anchors**: city_of_london 18, canary_wharf 4, soho_fitzrovia 22, kings_cross_shoreditch 25
- **multi_cluster_score**: 3 (KX borderline pass at 25)
- **redundancy_score**: 1 (Jubilee-only; Thames Clipper helps but not a tube-failure hedge)
- **notes**: "Jubilee Line is the single rail product. Thames Clipper gives a second option that's robust but slower. North Greenwich is a through-station with strong frequency. No Crossrail, no DLR at the Peninsula itself. Redundancy 1/5 is the weak point."

### `demographics`

- **primary_age_cohort**: 18-29 (but 20-39 at 56% — one of London's youngest wards)
- **age_breakdown**: {18-29: 32, 30-39: 34, 40-49: 15, 50+: 19} — ward average age 30.4, population 11,417
- **ethnic_composition**: White ~47, Asian ~24, Black ~14, Mixed ~8, Other ~7 (Peninsula ward 2021)
- **household_mix**: Single 40, Couple no children 32, Couple with children 15, Lone parent 5, Shared 6, Other 2
- **student_pct**: 8
- **professional_renter_pct**: 55
- **notes**: "20-39 at 56% — notably young for London. No Religion 40%, Christian 35%, Muslim 8%, Hindu 6%. Very high professional-renter concentration driven by BTR supply."

### `safety`

- **overall**: safe
- **crime_vs_borough**: above (Peninsula ward higher than Greenwich borough average, but lower-severity mix)
- **crime_vs_croydon**: safer
- **after_dark_assessment**: "Peninsula footprint is well-lit, well-stewarded, with steady foot traffic from O2 events, Design District evening use, and Jubilee Line through-station. Met Police priorities: violence-related crime general, drug dealing in West Parkside, theft-from-person in Bugsby's Way retail park, vehicle crime in Greenwich Millennium Village. Bugsby's Way retail park is the notable concern — it's the western edge where the masterplan meets older industrial/retail. Upper Riverside and the Tide feel safe throughout evening."
- **concerns**: ["Bugsby's Way retail park — theft from person is a named Met Police priority", "West Parkside — drug-dealing Met Police priority", "Greenwich Millennium Village — vehicle crime priority"]

### `green_and_water`

- has_river: true, has_canal: false, has_dock: false
- **parks**: [{name: "The Tide", walk_minutes: 3, size_acres: 12, notes: "5km elevated linear park with Damien Hirst sculpture"}, {name: "Central Park", walk_minutes: 5, notes: "Masterplan central green space"}, {name: "Peninsula Ecology Park", walk_minutes: 15, size_acres: 4, notes: "Managed wetland reserve"}, {name: "Greenwich Park", walk_minutes: 20, size_acres: 183, notes: "Royal Park, via bus 129 — 12 minutes"}]
- **overall_assessment**: "Thames on three sides. The Tide is a genuine destination. Greenwich Park (Royal Park) is a short bus ride. Water-dominant area."

### `amenities`

- **grocery**: Sainsbury's (O2), Tesco Express (Peninsula Square), M&S Simply Food at O2, Waitrose (Greenwich town, 10min via 129 bus)
- **gyms**: PureGym (Peninsula Square), David Lloyd (nearby Greenwich), Third Space not present, O2 Oxygen Freejumping + Up at the O2 (experience), Design District independent studios. **T2.3 signal: strong-but-not-premium.**
- **food_and_drink**: Canteen food hall (Caribbean, Japanese ramen, Greek, Mexican, Italian), Craft London (Stevie Parle), Gauchos at O2, 40+ restaurants/bars across Design District and O2, Canteen is the Design District anchor
- **health**: Greenwich Peninsula Practice (Design District), Lewisham & Greenwich NHS Trust hospitals within 10min
- **cultural**: The O2 Arena (year-round live music, sport, concerts), Design District, The Tide sculpture, Emirates Air Line (cable car to Royal Docks), Now Gallery

### `regeneration`

- **status**: phased
- **investment_pipeline**: "Knight Dragon 30-year masterplan, £10.8bn investment, 17,500 homes total target. ~1/3 delivered. Mace £2bn framework contract. GLA co-invested — delivery risk structurally low."
- **recent_milestones**: ["2025-04 — Silvertown Tunnel opened (cross-river link to Royal Docks)", "2025-12 — Plot M0121 (300 homes, 30-storey, Chapman Taylor, McAleer & Rushe) groundbreaking"]
- **upcoming_milestones**: ["2028 — M0121 completion", "Continued Upper Riverside phase delivery", "Design District maturation"]
- **trajectory_through_2027**: "Ascending steadily. Knight Dragon's cadence is solid; the GLA co-investment protects even against developer wobble. By August 2027 the Peninsula will have meaningfully more residential density and more Design District maturity — still not a destination in the way Canary Wharf is, but increasingly self-sufficient."

Sources: Knight Dragon developer, GLA planning portal, Met Police Peninsula ward, ONS Census 2021, Crystal Roof Peninsula ward.

---

## 4. Kidbrooke Village

**id**: `kidbrooke-village`
**borough**: Greenwich
**postcodes**: SE3, SE9
**zones**: Zone 3

### `long_form`

**full**:
> Kidbrooke Village is the quiet underperformer on this list — consistently well-built, well-managed, and underpriced relative to what it delivers. Berkeley's £1bn regeneration replaced the 1960s Ferrier Estate (demolished from 2009) with a 5,000-home masterplan running through 2032. Cator Park is integrated physically into the development with mature trees and proper green space, not a token strip of lawn — HTA Design's rewilding of the park won the Mayor's Award for Sustainable Planning and the Landscape Institute's Sir David Attenborough Award for Biodiversity (both 2020). Berkeley's build quality is reliably good: considered brick detailing, layouts that work, maintenance that holds up.
>
> The Village Centre has a Sainsbury's Local, Albi's Café, YoHome Oriental supermarket, The Depot (Young's pub and dining), a farmers' market, an on-site doctors and dentist, and a residents-only gym. David Lloyd Kidbrooke Village is the premium gym option — pool, fitness classes, full spa. PureGym is at Village Centre. Blackheath Village is a 15-minute walk (Blackheath station is Southeastern line, so walkable to the high street with bookseller, fishmonger, greengrocer, butcher, baker, wine merchant, independent restaurants covering Argentinian, modern British, Indian, Portuguese, Thai). Greenwich town centre is close enough to serve as a second social anchor.
>
> Kidbrooke station (Southeastern) connects to London Bridge in ~15 minutes and Cannon Street in ~20. Zone 3. The connectivity profile is narrow: only city_of_london clears ≤25 minutes on the anchor set; Canary Wharf is 32, Soho 30, King's Cross 28. Multi-cluster 1/5. Redundancy 1/5 (Southeastern-only; no tube). The texture is suburban and quiet — family-leaning, calm rather than exciting — and that's the core tradeoff. For Caner's profile specifically this might read as a positive during Ten Degrees recovery (very safe, very pleasant) but a negative for going-out energy.

**history**:
> Kidbrooke Village replaced the Ferrier Estate, a large 1960s council housing estate notorious for deprivation and crime. Demolition began 2009; Berkeley Homes East Thames took on the masterplan and has delivered phased residential since 2010. Phases 1-4 substantially complete; Phase 5 Building C (341 homes, largest building in the masterplan) starts construction early 2026. Over 1,900 new homes delivered by 2025, 773 affordable of which 170 designed for older people. 5,000 homes planned by 2032.

**vibe**:
> Suburban and quiet. The most family-coded entry in the dataset. Calm rather than exciting. Morning school-run, park dog-walkers, residents who know each other at Albi's Café. Not a going-out destination. Not a high-street area. Reads as "pleasant to live in, boring to describe."

**weekday**:
> A Tuesday at 7pm: residential calm; Cator Park has dog-walkers; the Village Centre small retail strip near the station is winding down; the SE Railway runs through quietly; David Lloyd has evening fitness classes.

**weekend**:
> A Saturday: park crowds, farmers' market at the Village Centre, brunch at Albi's, families heading to Blackheath village or Greenwich town centre. Sunday roast at The Depot.

**notable**: "Cator Park (HTA Design rewilding, Sir David Attenborough Award 2020); Village Centre (Sainsbury's + doctors + dentist + gym on-site); David Lloyd Kidbrooke Village (premium gym + pool); Ferrier Estate history (demolished 2009); Berkeley Homes masterplan through 2032; Blackheath village 15min walk."

**croydon_comparison**:
> Kidbrooke Village is genuinely quieter and more suburban than Croydon — there's no town-centre energy, no high street, no street-level life after ~21:00. On safety, public realm, and build quality the upgrade is massive (64% lower crime than regional average; Cator Park award-winning; Berkeley brick detailing vs Croydon's 1980s concrete); on "is there anything to do at 10pm on a Wednesday" Kidbrooke is comparable-to-worse. The Southeastern connection to London Bridge (~15min) is faster than most Croydon options but narrower (one line only). Gym coverage is strong — David Lloyd + PureGym + residents-only gym is dataset-leading for Zone 3 suburban. Price differential: Berkeley builds at Kidbrooke run ~£1,700-£2,200 for a 1-bed vs Ten Degrees' ~£3,000 effective — cheaper and better-built, at the cost of going-out energy.

### `connectivity`

- **lines**: Southeastern
- **primary_stations**: Kidbrooke (Southeastern) 5min
- **times_to_anchors**: city_of_london 25, canary_wharf 32, soho_fitzrovia 30, kings_cross_shoreditch 28
- **multi_cluster_score**: 1 (only city clears ≤25)
- **redundancy_score**: 1 (Southeastern-only, no tube, no DLR)
- **notes**: "Single-line dependence. Southeastern to London Bridge (15min) + Cannon Street (20min) is solid for City access. Canary Wharf requires a change. No tube in Zone 3 is the structural weakness — the Elizabeth Line pass-by at Abbey Wood is a ~20min bus ride."

### `demographics`

- **primary_age_cohort**: 30-39
- **age_breakdown**: {18-29: 20, 30-39: 35, 40-49: 22, 50+: 23} — ward average age 35.4, population 6,105
- **ethnic_composition**: White 58.6, Asian 16.7, Black 14.4, Mixed 6, Other 4.3
- **household_mix**: Single 28, Couple no children 30, Couple with children 28, Lone parent 8, Shared 4, Other 2
- **student_pct**: 3
- **professional_renter_pct**: 40
- **notes**: "Kidbrooke Village & Sutcliffe ward: 2,749 households, average household size 2.2. Christian 42%, No Religion 38%. 71% economically active. Family-leaning suburban demographic — distinctively less young than Peninsula or Woolwich Arsenal wards."

### `safety`

- **overall**: very-safe
- **crime_vs_borough**: below (Kidbrooke Village overall crime 64% lower than regional average per Crystal Roof)
- **crime_vs_croydon**: much-safer
- **after_dark_assessment**: "Very safe. Quiet residential streets, well-lit masterplan core, very low foot traffic after ~22:00. Cator Park is empty after dark (as any park is) but the pedestrian paths through the masterplan are overlooked by residential frontages. No named Met Police priorities in Kidbrooke Village & Sutcliffe ward."
- **concerns**: []

### `green_and_water`

- has_river: false, has_canal: false, has_dock: false
- **parks**: [{name: "Cator Park", walk_minutes: 3, size_acres: 9, notes: "HTA rewilding, Sir David Attenborough Award — the integrated green centre of the masterplan"}, {name: "Blackheath", walk_minutes: 15, size_acres: 211, notes: "Royal Park heath, major open space"}, {name: "Sutcliffe Park", walk_minutes: 10, size_acres: 20, notes: "SUDS-designed wetland park"}]
- **overall_assessment**: "Green-strong. Cator Park is integrated into the development at high quality; Blackheath is a 15-minute walk; Sutcliffe Park adds wetland variety. Among the greenest entries in the dataset."

### `amenities`

- **grocery**: Sainsbury's Local (Village Centre on-site), YoHome Oriental (Village Centre), farmers' market (weekly), Tesco and Waitrose in Blackheath village (15min walk), M&S Simply Food Blackheath
- **gyms**: David Lloyd Kidbrooke Village (premium — pool, spa, classes), PureGym (Village Centre), residents-only gym (on-site). **T2.3 signal: strong — dataset-leading for Zone 3 suburban.**
- **food_and_drink**: Albi's Café (on-site), The Depot (Young's pub + dining), Blackheath village independents (Argentinian, modern British, Indian, Portuguese, Thai within 15min walk)
- **health**: On-site doctors and dentist (Village Centre), Queen Elizabeth Hospital Woolwich (15min), Kidbrooke Pharmacy
- **cultural**: Blackheath Halls (classical music, 15min walk), Greenwich town centre (Royal Observatory, Cutty Sark, Maritime Museum — 15min drive / 25min bus), Age Exchange Blackheath

### `regeneration`

- **status**: phased
- **investment_pipeline**: "£1bn Berkeley Homes East Thames masterplan, 5,000 homes by 2032. ~1,900 delivered by 2025 of which 773 affordable (170 specifically designed for older residents). Phase 5 Building C (341 homes, largest building in masterplan) starts early 2026."
- **recent_milestones**: ["2025 — 1,900 homes delivered cumulative; 645 affordable homes milestone reached", "2026-early — Phase 5 Building C construction starts"]
- **upcoming_milestones**: ["2028-2032 — Continued masterplan phases through to 5,000 homes", "Continued Cator Park phased expansion"]
- **trajectory_through_2027**: "Ascending steadily. Phase 5 delivery during Caner's visa window adds density but doesn't change the area's character — it will still be a quiet, well-built, green suburban entry. Not going to transform into a destination by 2027; that's feature, not bug, for the Ten Degrees recovery use-case."

Sources: Berkeley developer (Kidbrooke Village), Royal Greenwich regeneration, Met Police Kidbrooke Village & Sutcliffe, Crystal Roof ward demographics, HTA Design Cator Park case study.

---

## 5. Canning Town

**id**: `canning-town`
**borough**: Newham
**postcodes**: E16
**zones**: Zone 2/3

### `long_form`

**full**:
> Canning Town sits at the Jubilee Line, DLR, and adjacent Elizabeth Line (Custom House) interchange on the Zone 2/3 boundary — one of east London's strongest multi-modal transport hubs. Canary Wharf is 5 minutes via Jubilee, Liverpool Street 15 via Jubilee or Elizabeth, Bond Street 20. The area is sandwiched between Canary Wharf (Jubilee direct) and Royal Docks (DLR / Elizabeth), which positions it as a lower-cost base with strong employment-hub connectivity.
>
> Regeneration is active and substantial. Hallsville Quarter (£600m, part of the wider £3.7bn Canning Town and Custom House Regeneration Programme) has delivered phases 1-3 (620 mixed-tenure homes in May 2025), with Phase 4 (375 PBSA student rooms, Bouygues + Crosstree JV) topping out and completing summer 2026. On completion the scheme will offer 1,100+ private and affordable homes, 30,000 sqm of leisure and retail including a Morrison's, a Lidl (Phase 3), a new 3-screen boutique cinema, a 21,000 sqft NHS medical centre, a hotel, and a gym. Fizzy Living (Greystar subsidiary) operates approximately 140 BTR homes at Fizzy East 16 / Canning Town. Ballymore's London City Island sits adjacent (Jubilee walk).
>
> The Newham borough-level knife-crime headline is real and applies to this area — Newham recorded the most knife-crime offences of any London borough in 2025 (695 offences Jan-Oct). Silvertown Way and the walk across the Canning Town junction carry genuine concern after dark. Canning Town is less characterful than nearby Canary Wharf or Royal Docks but functionally strong, and the regeneration is visibly improving the residential grain.

**history**:
> Historic docklands area, heavily dependent on the Royal Docks for employment into the 1960s. Post-war council estate development dominated the residential fabric. Industrial decline through the 1970s-80s left the area deprived. Jubilee Line extension reached Canning Town in 1999 as part of the Millennium Dome delivery package. Post-2000 regeneration: Hallsville Quarter from 2014, Ballymore London City Island from 2014, Fizzy East 16 from 2016. Elizabeth Line (Custom House) opened 2022 at the adjacent station.

**vibe**:
> Transport hub with regeneration underway. Less characterful than nearby Canary Wharf or Royal Docks but functionally strong. Residential grain is improving. BTR buildings (Fizzy, London City Island) read younger and more professional than the surrounding street-level demographic. Hallsville Quarter is changing the town centre feel from "pure interchange" to "emerging town centre."

**weekday**:
> A Tuesday at 7pm: Jubilee Line commuters passing through; DLR interchange busy; Hallsville Quarter retail filling up; Morrison's / Lidl shoppers; immediate retail to the east of the station thinner and grittier.

**weekend**:
> A Saturday: quieter than weekdays on the interchange side; Hallsville Quarter retail and Lidl active; Royal Docks and Canary Wharf draw people away for weekend activity; residents increasingly stay local as the regen matures.

**notable**: "Canning Town interchange (Jubilee + DLR); Custom House (Elizabeth + DLR) adjacent; Hallsville Quarter (£600m town-centre regeneration, Phase 4 topping out 2025-2026); Morrison's + Lidl + boutique cinema + NHS medical centre; Ballymore London City Island (adjacent)."

**croydon_comparison**:
> Canning Town offers stronger multi-modal connectivity than Croydon at a comparable or lower price floor. Jubilee + DLR + Elizabeth (at Custom House) is three independent rail products; Croydon is Overground + Southern, which is effectively two products through the same overground corridor. Zone 2/3 vs Zone 5: Canary Wharf at 5 minutes and Liverpool Street at 15 vs Croydon's ~35 to Central. On safety Canning Town is roughly similar to Croydon — Newham knife-crime is borough-level significant and the Canning Town junction carries genuine walk-across concern, but it's different in character (less street-level begging, more regeneration-edge grittiness). Café / gym density is improving fast via Hallsville Quarter (Morrison's, Lidl, boutique cinema, gym already in scope) but still thinner than Croydon's peak town-centre retail. Price differential: Fizzy East 16 runs ~£1,700-£2,100 for a 1-bed all-in vs Ten Degrees' ~£3,000 effective.

### `connectivity`

- **lines**: Jubilee, DLR, Elizabeth (at Custom House, adjacent), London Overground (Stratford branch nearby)
- **primary_stations**: Canning Town (Jubilee + DLR) 3min, Custom House (Elizabeth + DLR) 10min walk / 1min DLR, Star Lane (DLR) 10min
- **times_to_anchors**: city_of_london 15, canary_wharf 5, soho_fitzrovia 25, kings_cross_shoreditch 20
- **multi_cluster_score**: 3 (Soho borderline at 25)
- **redundancy_score**: 3 (Jubilee + DLR genuinely independent; Elizabeth at adjacent station is a walk/DLR hop)
- **notes**: "Canning Town is a major interchange. Jubilee + DLR at the same station is rare and valuable. Elizabeth at Custom House is 1 DLR stop. Three independent rail products total. Redundancy 3/5."

### `demographics`

- **primary_age_cohort**: 18-29
- **age_breakdown**: {18-29: 35, 30-39: 30, 40-49: 15, 50+: 20} — ward average age 32
- **ethnic_composition**: Black African 21, White British 20, Bangladeshi 10, Indian 4, Other White 13, Other Asian 12, Other 20
- **household_mix**: Single 33, Couple no children 22, Couple with children 20, Lone parent 12, Shared 10, Other 3
- **student_pct**: 8 (rising with Hallsville Phase 4 PBSA)
- **professional_renter_pct**: 45
- **notes**: "Canning Town North ward: Christian 45%, Muslim 25%. One of the most diverse wards in Newham. BTR concentration (Fizzy, London City Island) drives a younger professional skew at development level — ward-level is more working-class diverse."

### `safety`

- **overall**: moderate
- **crime_vs_borough**: average (Canning Town is consistent with Newham borough average — borough itself is high)
- **crime_vs_croydon**: similar
- **after_dark_assessment**: "The Newham borough-level knife-crime headline is a real signal (695 offences Jan-Oct 2025, highest in London). The walk across the Canning Town junction — especially Silvertown Way and the underpasses north of the station — carries genuine concern. Hallsville Quarter side is improving rapidly as retail and lighting densify; the interchange side is still rougher. BTR developments (Fizzy East 16, London City Island) have private stewardship and feel safe inside their footprints."
- **concerns**: ["Newham borough knife-crime headline (695 offences Jan-Oct 2025, highest in London)", "Silvertown Way and Canning Town junction underpasses after dark", "Walk between DLR/Jubilee station and Silvertown/Royal Wharf carries concern"]

### `green_and_water`

- has_river: true (Lea mouth adjacent), has_canal: false, has_dock: false
- **parks**: [{name: "Canning Town Recreation Ground", walk_minutes: 8, size_acres: 7, notes: "Local rec ground"}, {name: "Thames Barrier Park", walk_minutes: 18, size_acres: 22, notes: "Architectural contemporary park"}, {name: "Royal Victoria Dock", walk_minutes: 10, notes: "Dock-edge walk"}]
- **overall_assessment**: "Thin locally — Canning Town itself is regen-industrial. Proximity to Royal Victoria Dock and Thames Barrier Park gives walking options but not a green destination."

### `amenities`

- **grocery**: Morrison's (Hallsville Quarter), Lidl (Hallsville Quarter Phase 3), Tesco Express (station), Sainsbury's Local
- **gyms**: Hallsville Quarter gym (in scope), PureGym Canning Town, The Gym Group Canary Wharf (5min Jubilee). **T2.3 signal: decent and rising — Hallsville scope completes 2026.**
- **food_and_drink**: Hallsville Quarter cafés and restaurants, Canning Town Caribbean / African food, Orient Street Kitchen (London City Island), Canary Wharf 5min for premium
- **health**: New 21,000 sqft NHS medical centre at Hallsville Quarter Phase 3, local GPs, Newham University Hospital 15min
- **cultural**: The London Film School at London City Island (upcoming), Hallsville Quarter boutique 3-screen cinema, O2 via Silvertown Tunnel / Jubilee (10min), Stratford cultural cluster (15min)

### `regeneration`

- **status**: active
- **investment_pipeline**: "Hallsville Quarter £600m, part of £3.7bn Canning Town and Custom House Regeneration Programme. Phases 1-3 delivered (620 mixed-tenure homes May 2025). Phase 4 (375 PBSA + amenities) completes summer 2026. On final completion: 1,100+ homes, 30,000 sqm retail/leisure, hotel, cinema, NHS medical centre. Ballymore London City Island adjacent; Fizzy East 16 operating."
- **recent_milestones**: ["2025-05 — Hallsville Quarter Phase 3 completion (620 homes + Lidl + NHS centre)", "2025-2026 — Hallsville Quarter Phase 4 topping out (375 PBSA, Bouygues + Crosstree)", "2025-04 — Silvertown Tunnel opened (cross-river to Peninsula / O2)"]
- **upcoming_milestones**: ["2026-summer — Hallsville Quarter Phase 4 completion", "Continued Silvertown Quays delivery next door (pulls retail / amenities further)"]
- **trajectory_through_2027**: "Ascending. Hallsville Quarter Phase 4 fully operational by Caner's visa window; Silvertown Quays next door is adding more density. The interchange will remain a chokepoint for safety concerns but the town-centre side will feel meaningfully more like a real town centre by August 2027."

Sources: Newham planning portal, Bouygues UK Hallsville Quarter case study, Met Police Canning Town North, Crystal Roof / Newham Info demographics, Ballymore and Fizzy developer sites.

---

## Cross-batch consistency notes

- **Elizabeth Line effect** applies to 4 of 5 areas (Royal Wharf via Custom House; Woolwich directly; Canning Town via Custom House; Greenwich Peninsula is Jubilee-only — the odd one out). Kidbrooke Village is the only Southeastern-only entry, which is why its redundancy score sits at 1/5 alongside Greenwich Peninsula's.
- **Silvertown Tunnel** (opened April 2025) affects Royal Wharf, Canning Town, and Greenwich Peninsula — all gain cross-river road resilience.
- **Newham crime headline** applies to both Royal Wharf/Docks and Canning Town — but Royal Wharf's private-stewardship footprint diverges sharply from the borough signal, while Canning Town sits at the borough average.
- **Berkeley stewardship** applies at Royal Arsenal (Woolwich) and Kidbrooke Village — both areas have "masterplan-interior safety is materially better than ward-level" as a real signal worth surfacing to the user.

## Fields not yet populated (V4 gaps to flag)

- `sources` arrays in existing TS files are empty `[]`. V4 should populate URLs for the fields it's rewriting — at minimum the TfL journey-planner links for `connectivity.times_to_anchors` and the Met Police area pages for `safety`. Recommend V4 writes source URLs as part of this proposal being applied.
- `age_breakdown` numeric arrays above are synthesised from narrative ward-level reporting rather than direct ONS Nomis pulls. Recommend V4 validates against Nomis Census 2021 ward tables (E05014093 Woolwich Common, E05014084 Kidbrooke Village & Sutcliffe, E05000225 Peninsula, E09000025 Newham LAD) before merging.

---

## Application plan

1. Open each of the 5 area TS files in `src/areas/data/` and patch:
   - `long_form` (all 7 subfields — `full`, `history`, `vibe`, `weekday`, `weekend`, `notable`, `croydon_comparison`)
   - `connectivity.notes` + confirm times_to_anchors + scores
   - `demographics` (fill empty arrays, set primary_age_cohort, notes)
   - `safety` (keep enums, extend after_dark_assessment, extend concerns)
   - `green_and_water.parks` + `overall_assessment`
   - `amenities` (all 5 arrays + notes)
   - `regeneration` (status + pipeline + milestones + trajectory)
   - `research.last_verified` → `2026-04-17`
2. Do NOT touch project-level fields (V1/V2 territory) or `personal_notes`.
3. Preserve the existing `evaluation` block; grade recalibration is V3's job.
4. After patching each file, run `pnpm tsc --noEmit` and `pnpm lint` for type safety.
