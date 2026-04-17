# V4 Area Fill — North Acton (single-area gap fill)

**Agent:** v4-area-batch-north-acton-fill
**Research date:** 2026-04-17
**Area:** North Acton (`north-acton`)
**Reason for standalone file:** Assigned batch was North Acton + Hammersmith + Hackney Wick + Shepherd's Bush. Hammersmith and Shepherd's Bush are covered in `v4-area-batch-c-west.md`; Hackney Wick in `v4-area-batch-f-ne-hackney.md`. North Acton was the only un-covered area in the list and is a real gap — no batch file currently carries it. Wandsworth Common fallback was not needed because it is adjacent to Clapham Junction / Wandsworth Town (already in batch-i) and does not exist as a distinct area record in `src/areas/data/`.
**Baseline comparator:** Ten Degrees Croydon (Zone 5, CR0, ~£2,280 contractual / ~£3,000 effective, Greystar operator).
**Confidence:** High on connectivity (Central + Acton Main Line Elizabeth verifiable via TfL); High on regeneration (well-documented Portal West, OPDC Old Oak / North Acton area action plan); Medium on demographics (LSOA aggregation — the North Acton cluster sits inside East Acton and West Acton wards and the Old Oak / Park Royal OPDC boundary cuts across LSOAs, so percentages are estimate-within-CI); High on safety ordinals; Medium-High on amenities (Park Royal adjacency shifts the picture, plus rapid turnover of ground-floor units in new towers).

---

## Methodological notes

- **Anchor times** derived from TfL journey-planner typical-weekday 09:00 with AST interchange penalties included. Central Line at North Acton is a through-branch station (Ealing Broadway branch), so trains are generally less crowded at the source but merge with the West Ruislip branch at East Acton / White City.
- **Elizabeth Line** access is **via Acton Main Line, 10-14 min walk** from the North Acton tube cluster centre — not direct. This matters: the "two rail products" framing is technically correct but the Elizabeth Line is a ~12 min walk away, not an in-station interchange.
- **Demographic percentages** rounded to nearest whole, with `~` tagging where LSOA aggregation introduces ±2-3pp uncertainty. The cluster's demographic is shifting rapidly as new BTR towers complete — published Census 2021 figures already underestimate the young-professional share by 2026 because ~3,000 BTR units have completed since the census.
- **Met Police crime** assessed at East Acton and Park Royal ward level vs Ealing borough mean and vs Fairfield ward (Croydon).
- **Gyms** reflect on-the-ground 2026-04 coverage: PureGym North Acton confirmed, plus project-internal gyms at UNCLE Acton, Imperial Square, Enclave: Acton. Third Space / Equinox absent from the area; nearest is Hammersmith (Third Space Canary Wharf tier equivalent).
- **`croydon_comparison`** explicitly covers: night safety, café density, gym options, Zone/anchor-time differential, price differential — per schema mandate.

---

# Area — North Acton (`north-acton`)

**Borough:** Ealing (north-eastern edge, abutting OPDC / Park Royal) | **Zones:** 2–3 (North Acton is Zone 2/3 boundary; Acton Main Line is Zone 3) | **Baseline area grade from current data:** C | **Projects in dataset:** 6 (Imperial Square, One Portal Way, One West Point, UNCLE Acton, Enclave: Acton, Downing North Acton)

---

## Block 1 — `long_form`

### `full`

North Acton is a purpose-built Build-to-Rent cluster that did not meaningfully exist as a residential neighbourhood fifteen years ago and now contains one of the densest concentrations of BTR towers in west London. The cluster sits around North Acton tube station on the edge of the Old Oak and Park Royal Development Corporation (OPDC) area, a Mayor-of-London-designated regeneration zone that is ultimately intended to host HS2's Old Oak Common interchange and tens of thousands of new homes. North Acton is the part of OPDC that is delivering now — HS2 Old Oak Common will not open until 2029–2033, and the wider Old Oak masterplan is on a multi-decade horizon — but the first wave of residential towers is already operational.

The defining physical fact is the towers. Within a 5-minute walk of North Acton station there are currently six substantial residential buildings at 17–32 storeys (Imperial Square, One Portal Way, One West Point, UNCLE Acton, Enclave: Acton, and the Downing scheme), plus the Portal Way masterplan's further phases in delivery through 2028. The cumulative pipeline inside the North Acton / Portal West envelope is approximately 5,000 homes, of which perhaps 2,000–2,500 are operational in 2026 and the remainder are either topping out or in active fit-out. This makes North Acton a rare case where a BTR cluster precedes the neighbourhood — the buildings arrived before the shops, pubs, and public realm that normally accompany residential density.

Connectivity is the area's structural selling point and also the reason the towers were commercially viable. North Acton is on the Central Line's Ealing Broadway branch, giving single-change access to Oxford Circus (14 min), Tottenham Court Road (16 min), Bank (21 min), and Liverpool Street (24 min). Acton Main Line, a 10–14 minute walk north-west, adds the Elizabeth Line — Paddington in 6 minutes, Bond Street in 9, Farringdon in 14, Canary Wharf in 20. The two-rail-product story is real, but the Elizabeth Line station is a walk away rather than an interchange; residents who commute on Elizabeth pay that walk every day. For Caner's four-anchor anchor-time profile, three of the four anchors (Soho/Fitzrovia, City, King's Cross-adjacent via Central Line through-running) come in at ≤22 minutes; Canary Wharf is the weakest at ~30 minutes and requires Elizabeth, which means the Acton Main Line walk in practice.

The area's limitations are structural. Public realm around the cluster in 2026 is frankly poor — hoardings, contractors' compounds, half-delivered podium landscaping, and wind-tunnel microclimates between the towers are the visible texture at street level. Ealing Council and OPDC have both signalled that the North Acton Area Action Plan envisages a coherent public realm with improved crossings at the Victoria Road / Wales Farm Road junction and a new linear park along the Portal Way spine, but delivery is phased through 2028. Ground-floor retail in the operational towers is thin — coffee concessions, a convenience store, one or two independents — and the area currently does not sustain a café-belt in the Clapham Junction / Broadway Market sense. The nearest conventional high street is Acton High Street (15–20 min walk south) or Ealing Broadway (3 stops west on Central).

Regeneration trajectory through the visa window is the strongest positive story. Multiple towers complete in 2025–2027. The OPDC Local Plan is adopted and operative. HS2 Old Oak Common, though outside the visa horizon for opening, will anchor a step-change in connectivity by the end of the decade, and ground-floor retail in the operational towers tends to populate within 12–24 months of residential let-up as anchor tenants sign. For someone moving in May–August 2026 and staying through the visa transition to a Skilled Worker route by August 2027, the area will be materially less construction-noisy at exit than at entry. That is the specific structural case for North Acton: it is ascending, BTR-saturated, well-connected for central-London work, and currently cheaper per unit than comparable operational BTR stock at Wembley Park or Canada Water because the public-realm discount is still pricing in.

### `history`

North Acton's modern identity is almost entirely a post-2010 creation, but the site's industrial heritage is substantial. The area's original development was driven by the Great Western Railway in the mid-19th century (Acton Main Line opened 1868) and, critically, by the creation of Park Royal as one of London's largest industrial estates from 1903 onwards — originally as a Royal Agricultural Society showground, repurposed as a munitions manufacturing zone during WWI, and consolidated into a permanent industrial estate in the inter-war period. By the 1960s, Park Royal was the largest industrial estate in Europe by workforce, home to Guinness's London brewery (1936–2005), Heinz, McVitie's, and a long roster of food and light-manufacturing firms.

The North Acton site itself sat at the southern edge of this industrial belt. The Central Line arrived in 1923 (extension from Liverpool Street) and the area's function through most of the 20th century was as a commuter edge where Park Royal's workforce lived, with a strip of light industry and low-rise commercial immediately around the station. The decisive change was the 2006 designation of the Park Royal / Willesden Junction / Old Oak area as an opportunity area in the London Plan, followed by the 2015 creation of the Old Oak and Park Royal Development Corporation — the first and so far only Mayoral Development Corporation for regeneration of this scale outside the Olympic Park. OPDC was constituted specifically to plan for the arrival of HS2 Old Oak Common and to coordinate the complex politics of redeveloping an active industrial estate alongside new residential neighbourhoods.

The BTR wave was the practical first delivery phase. Telford Homes, a London-focused developer subsequently acquired by CBRE IM's BTR platform, assembled the Portal Way / Imperial Square / One West Point sites through 2014–2018. Imperial Square opened 2021 as the first substantial operational BTR tower. Essential Living's One Portal Way followed. UNCLE (Realstar) took over the Perfume Factory site in 2023–2024, and Enclave: Acton (Outpost Management / BlackRock) opened 2025 as the first co-living-model tower in the cluster. The pace has been rapid: six operational towers in five years, with four more in delivery through 2028.

### `vibe`

New-build, tower-dominated, unformed. The signature texture is young professionals in their mid-20s to early-30s — a significant Indian and East Asian international cohort drawn by Imperial College and the commutes into City / Canary Wharf / South Kensington — filtering between the towers, the station, and the handful of operational ground-floor units. There is a visible but thin gym-and-takeaway culture: residents work out in the in-building gyms (PureGym + multiple operator-branded facilities), pick up from the handful of delivery-kitchen and convenience operators, and commute out of the area for most social activity.

The area does not feel dangerous but it does not feel like a neighbourhood either. Wind across the podium spaces is genuinely unpleasant in winter — the cluster geometry creates down-drafts. Construction noise is the dominant daytime sound through 2027. Weekends are notably quieter than weekdays because the population is so commute-oriented; Saturday ground-floor footfall is thin compared to Clapham Junction or Angel. This is the single biggest qualitative mismatch against what Caner would find moving from Croydon's chaotic-but-populated Saturdays — North Acton at the weekend is underpopulated and sterile, and this is unlikely to fully resolve within the visa window.

### `weekday`

Heavy AM and PM rush on the Central Line and on the walking corridor to Acton Main Line. Between peaks the cluster is quiet — most residents work out-of-area, the ground-floor coffee and convenience is sparse, and daytime foot traffic is noticeably thinner than the station footfall would suggest. The in-building amenity levels (gyms, co-working lounges, rooftop terraces in the operator-tower floors) carry most of the daytime activity, which means the street-level texture is quiet even when the residential density is high. Construction sites are active through the working day. PureGym North Acton (adjacent to the station) is the single busiest daytime anchor outside the in-building amenities.

### `weekend`

Quietest of the commute-belt areas in this class. Saturday morning has light Central Line outbound flow as residents leave for central London weekend activities. The handful of pubs and restaurants in the operational ground-floor units (one or two operator-curated coffee shops, a branch convenience store) serve residents but do not pull footfall from outside the cluster. There is no farmers' market, no weekend retail anchor, no pub belt. The nearest Sunday roast culture is at Acton High Street or Ealing Broadway. Parks usage is modest — Wormwood Scrubs is a 12-minute walk east and gets some dog-walker traffic from the cluster, but Acton Park (the named local park) is 15 minutes south and materially less used by North Acton residents than it is by the established Acton population. Nightlife is absent inside the cluster itself; residents travel to Shepherd's Bush, Notting Hill, or Fitzrovia for evenings out.

### `notable`

The key physical anchors are the towers themselves — Imperial Square (the original, Telford/CBRE), One Portal Way (Essential Living), UNCLE Acton (Realstar, occupying the Perfume Factory heritage site from the area's Elizabeth Arden / cosmetics-manufacturing past), and Enclave: Acton (32-storey Outpost/BlackRock co-living tower, the tallest in the cluster and the most amenity-rich). North Acton station itself is a through-platform station rather than a terminus — trains serve Ealing Broadway (west) and West Ruislip branch (via merge at East Acton) plus the central section. The Perfume Factory name survives as the heritage reference point for UNCLE Acton and is one of the few links to the area's pre-BTR identity. Park Royal industrial estate immediately to the north is a reminder that this is an edge-of-industrial cluster rather than a consolidated residential zone.

### `croydon_comparison`

**Night safety:** Materially safer than East Croydon after dark. The cluster is well-lit by tower podium lighting, foot traffic around the station is professional-commuter rather than night-economy, and there is no equivalent of East Croydon station forecourt's late-night aggression. The T1.5 concern at North Acton is the construction-fringe geometry (hoardings, dark podium voids between towers) rather than violent-crime concentration — a different category of risk and a lower absolute one.

**Café density / working-from:** Weaker than Croydon for café-belt culture but stronger in tier mix. Croydon has greater sheer density of ground-floor retail but dominated by chicken shops, betting shops, and budget fast-food. North Acton has thin ground-floor retail but what exists is coffee-first (operator-curated concessions in Imperial Square and UNCLE Acton, plus the occasional independent). For a remote-working day, North Acton's in-building co-working lounges are materially better than anything at Ten Degrees, which is the practical offset. **Result:** lower street-café density, higher quality per square foot, and stronger in-building alternatives.

**Gym options:** Roughly parity in budget tier, weaker in aspirational tier. PureGym at North Acton is equivalent to PureGym Croydon, plus every operational tower has an in-building gym that is included in rent (Enclave: Acton's 18,000 sq ft amenity block is better than anything at Ten Degrees). No Third Space, Equinox, or dedicated BJJ/Muay Thai gym within the cluster — nearest combat-sports option is Hammersmith or West London (10–15 min via Central + walk). Caner's BJJ/Muay Thai T2.3 weakness, flagged in the Ealing batch, applies equally here.

**Transport differential:** Zone 2/3 vs Croydon's Zone 5. Central Line direct (no interchange) to Oxford Circus in 14 min, compared with East Croydon Southern/Overground + Northern/Victoria interchange to central in ~30–40 min. Elizabeth Line via Acton Main Line walk. **Four-anchor score 3/4** (Soho 15, City 22, KX-Shoreditch 22, Canary 30), vs Croydon's typically 2/4 (Canary via Overground is competitive, others are 30+).

**Price differential:** North Acton cluster 1-bed operational BTR currently sits ~£2,030–£2,300/mo depending on operator (UNCLE Acton £2,130, Imperial Square £2,200 reported, One Portal Way £2,300 reported, Enclave: Acton studio from £1,975 all-inclusive). Against Caner's Ten Degrees effective ~£3,000/mo (contractual ~£2,280 + service charges + parking), the North Acton move is price-neutral-to-cheaper in raw rent for a substantially newer building, with the offset that the area itself is less textured.

---

## Block 2 — `connectivity`

### `lines`

```ts
[
  { name: "Central", type: "tube" },        // at North Acton
  { name: "Elizabeth", type: "elizabeth" }, // at Acton Main Line, 10–14 min walk
]
```

### `primary_stations`

```ts
[
  { name: "North Acton", lines: ["Central"], walk_minutes_from_centre: 3 },
  { name: "Acton Main Line", lines: ["Elizabeth"], walk_minutes_from_centre: 12 },
  { name: "East Acton", lines: ["Central"], walk_minutes_from_centre: 14 },  // alternative Central access
]
```

Note: East Acton is on the West Ruislip branch of Central; in practice North Acton residents use North Acton itself (through-platform). The Acton Main Line walk is the load-bearing secondary access.

### `times_to_anchors`

Based on TfL Journey Planner typical-weekday 09:00 departures from North Acton, including walk-to-station and interchange penalties:

| Anchor | Route | Time (min) |
|---|---|---|
| Soho / Fitzrovia (Tottenham Court Road) | Central direct | 15 |
| City of London (Bank) | Central direct | 22 |
| King's Cross / Shoreditch (Oxford Circus → Victoria Line → KX) | Central + Victoria (1 change at Oxford Circus) | 22 |
| Canary Wharf | Central → Bond Street → Jubilee **OR** walk to Acton Main Line → Elizabeth → Canary Wharf | 30 (Central+Jubilee) / 28 (via Elizabeth from AML, incl. walk) |

```ts
times_to_anchors: {
  city_of_london: 22,
  canary_wharf: 30,
  soho_fitzrovia: 15,
  kings_cross_shoreditch: 22,
}
```

### `multi_cluster_score`

**3** — Soho (15), City (22), KX (22) pass; Canary Wharf (30) fails the ≤25 threshold. Canary is the swing anchor; via Acton Main Line + Elizabeth the time is ~28 min which still fails but is close.

### `redundancy_score`

**2** — Central Line at the primary station, Elizabeth Line via a 12-min walk. Two independent lines but only one is in-station, which is weaker than having both on the same platform. Against the rubric heuristic (2 tube lines or 1 tube + 1 overground), North Acton is on the cusp between 2 and 3; downgraded to 2 because the Elizabeth access is via a walk rather than an in-station interchange. If the user weights the walk as a genuine redundancy (it does protect against a Central Line shutdown), a 3 is defensible.

### `notes`

Central Line at North Acton is a through-platform on the Ealing Broadway branch — trains are typically less crowded at the source than at White City or Notting Hill Gate downstream. Peak-hour crowding builds after the West Ruislip / Ealing Broadway merge at East Acton (for Ruislip-bound stock) and Shepherd's Bush (westbound returning). Weekend engineering works on Central Line closures do affect North Acton directly — when Central is suspended between Ealing Broadway and White City, the alternative is walking to Acton Main Line for Elizabeth. Night Tube operates on Central on Friday and Saturday nights, covering North Acton. Elizabeth Line at Acton Main Line does not run overnight.

### `sources`

- TfL Journey Planner: https://tfl.gov.uk/plan-a-journey/ (queried 2026-04-17, weekday 09:00 departures)
- TfL North Acton station page: https://tfl.gov.uk/tube-dlr-overground/stop/940gzznortac/north-acton-underground-station
- TfL Acton Main Line station page: https://tfl.gov.uk/tube-dlr-overground/stop/910gactonml/acton-main-line-rail-station
- TfL Night Tube coverage: https://tfl.gov.uk/modes/tube/night-tube/

---

## Block 3 — `demographics`

**Important caveat:** The North Acton cluster straddles LSOAs in East Acton and Park Royal wards of Ealing borough, plus parts of OPDC boundary. Census 2021 was captured before most of the BTR towers let up (Imperial Square opened late 2021, the wave 2022–2025). The published Census data materially understates the young-professional share as of 2026; the figures below are estimated at-2026 based on Census baseline adjusted for BTR let-up patterns at comparable clusters (Wembley Park, White City, Canada Water).

### `primary_age_cohort`

`"30-39"` (contested — the 18–29 cohort is the fastest-growing and may overtake 30–39 by the end of 2026 as Enclave: Acton's co-living stock fully lets up. Flagged as `18-29` in the current stub is defensible; this refresh upgrades to `30-39` on best-estimate of post-BTR mix, but confidence is Medium).

### `age_breakdown`

Estimated 2026 cluster (adjusting Census 2021 for BTR let-up):

```ts
age_breakdown: [
  { cohort: "18-29", pct: ~28 },
  { cohort: "30-39", pct: ~32 },
  { cohort: "40-49", pct: ~18 },
  { cohort: "50+",   pct: ~22 },
]
```

Census 2021 baseline for East Acton ward was `18–29: ~22`, `30–39: ~19`, `40–49: ~15`, `50+: ~44`. The adjustments reflect the ~2,500 BTR unit let-up since Census, weighted to young-professional intake.

### `ethnic_composition`

```ts
ethnic_composition: [
  { group: "White — British",           pct: ~24 },
  { group: "White — other",             pct: ~18 },
  { group: "Asian or Asian British",    pct: ~36 },  // dominant: Indian, Pakistani, Bangladeshi, plus East/SE Asian from BTR intake
  { group: "Black or Black British",    pct: ~10 },
  { group: "Mixed",                     pct: ~6 },
  { group: "Other ethnic group",        pct: ~6 },
]
```

The high Asian share reflects both the legacy East Acton / Park Royal population and a distinctive international student / young-professional intake into the BTR towers (Imperial College, UCL, LSE commute catchments — North Acton is a standard IC graduate-student cluster choice).

### `household_mix`

```ts
household_mix: [
  { type: "Single person",        pct: ~38 },
  { type: "Couple no children",   pct: ~24 },
  { type: "Shared household",     pct: ~18 },  // elevated by BTR + co-living
  { type: "Couple with children", pct: ~10 },
  { type: "Lone parent",          pct: ~6 },
  { type: "Other",                pct: ~4 },
]
```

BTR studio stock (Enclave: Acton's 462 studios, plus the 1-bed weighting of Imperial Square and One Portal Way) skews household size down materially versus the pre-2021 Census baseline.

### `student_pct`

~14 (Census 2021 baseline for East Acton ward was ~8; adjustment reflects the post-BTR intake of Imperial graduate-student share. Confidence Medium.)

### `professional_renter_pct`

~58 (high — the BTR cluster is by definition a professional-renter concentration. Confidence High on ordinal, Medium on exact percentage.)

### `notes`

This is one of the London areas where Census 2021 is least reliable as a current demographic snapshot because ~40% of the 2026 residential stock did not exist at Census date. The direction of drift is consistent and strong: younger, more international, more professional, smaller household size. Any future refresh should flag the need to reassess when Census 2031 lands. The Indian / South Asian concentration is structurally durable (legacy Park Royal + Imperial College pipeline); the East / Southeast Asian share is growing through BTR intake and is less stable.

### `sources`

- ONS Census 2021 ward profiles (East Acton, Park Royal): https://www.ons.gov.uk/census/maps
- ONS LSOA 2021 data: https://www.ons.gov.uk/datasets
- GLA London Datastore borough demographic profiles (Ealing): https://data.london.gov.uk/
- OPDC demographic baseline (2017 Local Plan evidence base): https://www.london.gov.uk/programmes-strategies/planning/implementing-london-plan/planning-applications-and-decisions/old-oak-and-park-royal-development-corporation

---

## Block 4 — `safety`

### `overall`

`"safe"`

### `crime_vs_borough`

`"below"` (Ealing borough rate ~87/1k population; North Acton / East Acton ward cluster shows somewhat lower than borough average, reflecting the professional-renter tilt and in-building security at the operational towers. Park Royal ward immediately north is higher due to industrial-estate commercial vehicle crime, but this does not materially affect the residential cluster after dark.)

### `crime_vs_croydon`

`"safer"` (Fairfield ward / East Croydon station catchment sits meaningfully higher on violence-against-the-person and ASB. North Acton's profile is closer to Wembley Park in category mix — i.e. dominated by acquisitive crime around the station rather than night-economy violence.)

### `after_dark_assessment`

Safe in the conventional "walking home from the station at 23:00" sense. Podium lighting in the operational towers is strong, station exit is directly onto Victoria Road which is well-lit, and the immediate walking corridors between the towers are monitored by in-building CCTV. The genuine T1.5 concern is construction-fringe geometry — hoardings create long unmonitored stretches, wind microclimates make the pedestrian experience unpleasant, and the unfinished public realm has dark podium voids between the towers. For a woman walking alone at night the dominant risk is unpleasantness rather than crime concentration; there is no specific street or corner with a documented trouble pattern. Compared with East Croydon station forecourt after 22:00, the safety differential is substantial.

### `concerns`

```ts
concerns: [
  "Construction-fringe geometry (hoardings, dark podium voids between towers) — T1.5 not T1.1 concern",
  "Wind microclimates between the towers — unpleasant rather than unsafe",
  "Park Royal industrial estate edge (north of the A40) — commercial vehicle crime, not residential-cluster concern",
]
```

### `sources`

- Met Police crime map: https://www.met.police.uk/a/your-area/ (East Acton ward, Park Royal ward, 2025–2026 rolling 12 months)
- Ealing Safer Neighbourhoods dashboard: https://www.ealing.gov.uk/info/201055/safety_and_anti-social_behaviour
- OPDC neighbourhood plan safety evidence base (2019)

---

## Block 5 — `green_and_water`

### `has_river`

`false` (The River Brent runs ~1 mile north-east, through Park Royal; not a walking-distance feature of the residential cluster.)

### `has_canal`

`false` (Grand Union Canal is ~20 min walk north via Park Royal — present in the wider OPDC footprint but not in North Acton's residential cluster walking range.)

### `has_dock`

`false`

### `parks`

```ts
parks: [
  { name: "Wormwood Scrubs",    size_acres: ~200, walk_minutes: 12, notes: "Large open common east of the cluster — dog-walker heavy, running loops, cricket grounds; the defining green space in range." },
  { name: "Acton Park",         size_acres: ~23,  walk_minutes: 15, notes: "Mature Victorian park to the south with playground, tennis, bowls — more used by established Acton residents than by the BTR cluster." },
  { name: "North Acton Playing Fields", size_acres: ~20, walk_minutes: 8, notes: "Open playing fields immediately north-east of the cluster — basic sports pitches, less formal than Acton Park." },
  { name: "Gunnersbury Park",   size_acres: ~185, walk_minutes: 30, notes: "Major formal park to the south-west — destination rather than walk-distance green." },
]
```

### `overall_assessment`

Nominal green access with one substantial space (Wormwood Scrubs) in walking range and a secondary formal park (Acton Park) within reach but not immediate. The cluster itself has no meaningful internal green — the podium landscaping at the operational towers is small-scale and largely private to each building. There is no canal or river within walking range. For a renter whose T2.4 threshold is "a real park within 10 minutes", North Acton marginally passes via Wormwood Scrubs (~12 min), but the experience is of a tower cluster with green access nearby rather than a green-adjacent neighbourhood. This is materially weaker green-and-water than Clapham Common / Clapham Junction, Canada Water, or Wembley Park. It is roughly comparable to Canary Wharf on the dimension of "big green feature in walking range but no in-cluster green texture".

### `sources`

- Ordnance Survey OpenData park/open-space layer
- Ealing Council parks register: https://www.ealing.gov.uk/info/201109/parks_and_open_spaces
- The Parks Trust / Friends of Wormwood Scrubs: https://www.wormwoodscrubs.london/
- OPDC Green Infrastructure Strategy (2019)

---

## Block 6 — Area `amenities`

### `grocery`

```ts
grocery: [
  { name: "Tesco Express",         type: "convenience supermarket", walk_minutes: 3,  notes: "Adjacent to North Acton station — essential-coverage rather than a full shop." },
  { name: "Sainsbury's Local",     type: "convenience supermarket", walk_minutes: 5,  notes: "Victoria Road — similar scale to the Tesco." },
  { name: "Asda Park Royal",       type: "large supermarket",       walk_minutes: 20, notes: "Park Royal flagship — full weekly shop destination, typically a bus or short drive." },
  { name: "Morrisons Acton",       type: "large supermarket",       walk_minutes: 18, notes: "Acton High Street — full weekly shop; walkable or 1 stop on Central to Acton Central (Overground) — note: different station." },
  { name: "M&S Food",              type: "quality grocer",          walk_minutes: 16, notes: "Ealing Broadway — 3 Central Line stops; practical rather than walk-distance." },
]
```

### `gyms`

**Critical T2.3 field.**

```ts
gyms: [
  { name: "PureGym North Acton",       type: "budget commercial gym",    walk_minutes: 3,  notes: "24/7, adjacent to station; standard PureGym equipment and class timetable." },
  { name: "Imperial Square gym",        type: "in-building (BTR)",        walk_minutes: 3,  notes: "Imperial Square residents only — standard BTR fit-out." },
  { name: "UNCLE Acton gym",            type: "in-building (BTR)",        walk_minutes: 4,  notes: "UNCLE residents only — included in rent." },
  { name: "Enclave: Acton gym",         type: "in-building (co-living)",  walk_minutes: 4,  notes: "Part of 18,000 sq ft amenity deck — sauna + steam, 3D-golf sim, indoor basketball; residents only; genuine aspirational-tier quality included in rent." },
  { name: "One Portal Way gym",         type: "in-building (BTR)",        walk_minutes: 5,  notes: "Essential Living fit-out." },
  { name: "The Gym Group Acton",        type: "budget commercial gym",    walk_minutes: 14, notes: "Acton High Street — 24/7 budget tier; further than the in-cluster PureGym." },
]
```

**Gap:** No Third Space, Equinox, Barry's, 1Rebel, or dedicated BJJ / Muay Thai / MMA gym within the cluster or in a 10-minute walking range. Nearest combat-sports options require 15–25 minute transit to Hammersmith (BJJ Kingdom, London Fight Factory presence) or White City. This is the T2.3 weakness specifically flagged in the Ealing / west-London batch and it applies directly to North Acton. Caner's stated BJJ / Muay Thai / combat-sports preference is not well served inside the cluster — the offset is that the in-building gym provision at Enclave: Acton is genuinely strong and would cover strength / conditioning / cardio needs at aspirational-tier quality for zero incremental cost.

### `food_and_drink`

```ts
food_and_drink: [
  { name: "The Gipsy Corner",           type: "pub",                walk_minutes: 6,  notes: "Victoria Road — traditional pub, one of the few pre-BTR anchors that survives inside the cluster footprint." },
  { name: "Portal Way ground-floor units", type: "mixed retail",    walk_minutes: 2,  notes: "Coffee concession + casual dining in Imperial Square / One Portal Way podiums — thin operational inventory, turnover rate high." },
  { name: "UNCLE Acton ground-floor",   type: "mixed retail",       walk_minutes: 4,  notes: "Perfume Factory heritage-building retail units — 1–2 independents plus operator-curated coffee." },
  { name: "Acton High Street",          type: "high-street dining", walk_minutes: 18, notes: "Conventional high-street depth — pubs, Indian, Portuguese, Afghan; the nearest real food-and-drink belt." },
  { name: "Westfield London (Shepherd's Bush)", type: "mall dining", walk_minutes: 12, notes: "3 stops east on Central + walk — practical evening-out destination." },
]
```

### `health`

```ts
health: [
  { name: "Old Oak Surgery",            type: "NHS GP",         walk_minutes: 10, notes: "Main registration option for the cluster — capacity pressures reported by new-resident intake." },
  { name: "Acton Health Centre",        type: "NHS GP + walk-in", walk_minutes: 16, notes: "Larger practice on Acton High Street — alternative registration." },
  { name: "Boots Pharmacy",             type: "pharmacy",       walk_minutes: 3,  notes: "Adjacent to North Acton station — standard chain." },
  { name: "Central Middlesex Hospital", type: "NHS hospital",   walk_minutes: 25, notes: "Park Royal — nearest hospital; A&E available; bus or drive." },
]
```

### `cultural`

```ts
cultural: [
  { name: "Park Royal Studios",         type: "film/TV production",  walk_minutes: 20, notes: "Production facilities rather than public-access cultural venue — shapes the industrial-estate identity of the area's northern edge." },
  { name: "Dance City Acton (Vue Cinema)", type: "cinema",           walk_minutes: 18, notes: "Multiplex cinema at Acton Park complex — standard programming." },
  { name: "Acton Library",              type: "library",             walk_minutes: 15, notes: "Ealing Council library on Acton High Street." },
  { name: "Bush Theatre (Shepherd's Bush)", type: "theatre",          walk_minutes: 16, notes: "3 Central Line stops — nearest off-West-End theatre." },
  { name: "Westfield London",           type: "retail/entertainment", walk_minutes: 12, notes: "Full-scale mall with cinema, dining, events; 3 stops Central or a short bus." },
]
```

### `notes`

The amenity picture at North Acton is the single most important structural weakness for a renter decision. The cluster has adequate essentials (grocery, pharmacy, GP, PureGym) within a 5-minute walk but almost everything beyond essentials requires a Central Line trip. The in-building amenity layer at the operational towers partially compensates — residents with access to Enclave: Acton's amenity deck or Imperial Square's facilities are living with a materially better aspirational-tier provision than the area's street-level retail would suggest — but this is building-specific and not area-wide. The area's amenity trajectory through 2027 is mildly ascending (more ground-floor units let up, Portal Way phases complete) but a step-change to "neighbourhood" will not arrive within the visa horizon.

### `sources`

- Google Maps area survey (business listings + opening hours, 2026-04)
- Ealing Council business directory: https://www.ealing.gov.uk/
- PureGym store locator: https://www.puregym.com/gyms/north-acton/
- Westfield London: https://uk.westfield.com/londonwestfield
- Operator ground-floor retail inventories (Imperial Square, UNCLE Acton, Enclave: Acton)

---

## Block 7 — `regeneration`

### `status`

`"active"` (firmly in delivery — multiple towers topping out or in fit-out; major public-realm works scheduled 2026–2028)

### `investment_pipeline`

The North Acton cluster sits inside the OPDC regeneration envelope, which is one of the largest urban regeneration programmes in the UK by projected scale (£9–12 billion committed / pipeline estimated over the OPDC Local Plan horizon to 2038). Inside North Acton specifically, the committed residential pipeline through 2028 is approximately 5,000 homes across the Portal Way, Portal West, and North Acton Station Area Action Plan envelope, delivered by Telford Homes / CBRE IM, Essential Living, Realstar (UNCLE), Outpost Management / BlackRock (Enclave), Downing, and several smaller BTR and mixed-tenure developers.

Named schemes in delivery or recently delivered (non-exhaustive):
- Imperial Square (Telford / CBRE IM) — delivered 2021
- One Portal Way (Essential Living) — delivered 2023
- UNCLE Acton / Perfume Factory (Telford + Realstar) — delivered 2024
- Enclave: Acton (Tide / Outpost / BlackRock) — delivered 2025
- One West Point (Telford) — in delivery, completion 2026
- Downing North Acton — planning approved, delivery 2026–2028
- Further Portal Way phases (Greystar, Quintain-adjacent) — planning pipeline through 2028

Beyond the residential pipeline, the wider OPDC / HS2 Old Oak Common interchange programme is the decade-scale anchor: HS2 phase 1 to Old Oak Common is scheduled for opening between 2029 and 2033, providing HS2 services to Birmingham and (eventually) the north, plus Elizabeth Line and London Overground interchange. When it opens, North Acton's relative accessibility profile will shift upward materially, but the opening is outside Caner's visa horizon.

### `recent_milestones`

```ts
recent_milestones: [
  "2024 — UNCLE Acton / Perfume Factory completion (238 BTR units + 136 build-to-sell)",
  "2025 — Enclave: Acton completion (462 studios, tallest tower in cluster at 32 storeys)",
  "2024 — Elizabeth Line full operational timetable bedded in at Acton Main Line (service patterns stabilised post-2022 opening)",
  "2025 — OPDC Local Plan reaffirmed after statutory review",
  "2025 — North Acton Area Action Plan supplementary planning document adopted by Ealing",
]
```

### `upcoming_milestones`

```ts
upcoming_milestones: [
  "2026 — One West Point completion (Telford BTR, ~100 units)",
  "2026–2027 — Portal Way spine public-realm Phase 1 (linear park + Victoria Road / Wales Farm Road junction upgrade)",
  "2027 — Downing North Acton completion (~59 BTR units + student)",
  "2027–2028 — Further Portal Way BTR phases top-out (Greystar scheme + others)",
  "2028 — Projected first tranche of ground-floor retail anchor lettings in operational towers (based on comparable clusters' 18–24 month post-residential let-up timelines)",
  "2029 (outside visa window) — HS2 Old Oak Common earliest opening date (slipped from 2026 original schedule)",
]
```

### `trajectory_through_2027`

By August 2027 — Caner's visa transition anchor — North Acton will be materially more populated and materially less construction-fringe than in mid-2026. One West Point and Downing will be operational, Portal Way Phase 1 public realm will be partially delivered (the linear park along the central spine is scheduled for completion by mid-2027), and the operational-tower ground-floor retail is expected to be filling up. The wind microclimate between the towers will remain — that is a permanent geometry issue not solvable by public-realm works — but the hoardings-and-compounds texture will be significantly reduced.

The neighbourhood will still not feel like a mature neighbourhood in August 2027. The amenity layer at street level will remain thin compared with Wembley Park's 2025 completion state (Wembley had ground-floor retail anchored before residential topped out; North Acton is the opposite sequence). The Saturday-quiet texture will persist because the demographic and commute orientation is structural. But the direction of drift is consistently upward through the visa window — this is not a plateaued area like Clapham Junction.

The key trajectory risk is HS2 delays. If HS2 Old Oak Common slips further (beyond 2033), some of the anchor tenant commitments for North Acton ground-floor retail may re-evaluate. But this does not affect the residential experience inside the visa window — it affects the area's late-2020s capital-uplift story, which is not Caner's decision horizon.

### `sources`

- OPDC Local Plan (adopted 2022, reviewed 2025): https://www.london.gov.uk/programmes-strategies/planning/implementing-london-plan/planning-applications-and-decisions/old-oak-and-park-royal-development-corporation
- Ealing Council planning portal — Portal Way / North Acton applications: https://pam.ealing.gov.uk/online-applications/
- Telford Homes project pages (One West Point, Imperial Square): https://www.telfordhomes.london/
- Essential Living — One Portal Way: https://www.essentialliving.uk.com/portal-way
- Outpost Management — Enclave: Acton: https://www.outpost-management.com/
- UNCLE — Acton / Perfume Factory: https://uncle.co.uk/acton/
- HS2 Old Oak Common programme updates: https://www.hs2.org.uk/where/old-oak-common/
- OPDC Old Oak / Park Royal progress reports (annual): published on London.gov.uk OPDC portal

---

## Block 8 — `evaluation` (V3 will own — noted here for completeness)

The current area-level grade in `src/areas/data/north-acton.ts` is **C**. This V4 research surfaces no material reason to change the grade in V3 recalibration — the structural story is unchanged: strong BTR density and ascending trajectory, weak identity and thin area-level amenities, poor current public realm improving through 2027. The T2 tier rating will likely firm up from "weak" to "weak-to-moderate" with this research populating the previously-unknown amenity and demographic fields; the T3 tier rating will remain "weak" because identity and sense-of-place do not materially improve within the window.

Key V3 tier inputs from this research:

- **T1.1 safety:** pass (below-borough crime, meaningfully safer than Croydon)
- **T1.3 transport:** pass (Central + walkable Elizabeth, 3/4 anchors ≤25 min)
- **T1.5 public realm:** partial (current poor, ascending trajectory — marginal pass on visa-horizon basis)
- **T2.3 gyms:** partial (PureGym + strong in-building provision; combat-sports gap)
- **T2.4 green:** partial (Wormwood Scrubs in range, no in-cluster green)
- **T2.5 food/drink:** weak (thin high street, requires Central Line trip for depth)
- **T3.2 anchor:** fail (no cultural or commercial anchor in the cluster)
- **T3.3 sense of place:** fail (tower-dominated construction zone)
- **T5.1 anchor times:** pass (3/4 anchors ≤25 min)
- **T5.3 trajectory:** pass (ascending through 2027)

---

## Block 9 — Meta field updates

- **`id`:** `north-acton` — confirmed, no change
- **`name`:** `North Acton` — confirmed
- **`aliases`:** (not currently set; recommend adding `["North Acton / Portal Way", "North Acton cluster"]`)
- **`borough`:** `Ealing` — confirmed (north-eastern edge, abutting OPDC / Park Royal)
- **`postcodes`:** `["W3"]` — confirmed; W3 7 and W3 6 segments for the cluster core
- **`zones`:** `["Zone 2", "Zone 3"]` — confirmed (North Acton tube Zone 2/3 boundary; Acton Main Line Zone 3)
- **`headline`:** refresh recommended — current stub is fine but should call out the Central + walkable Elizabeth framing rather than generic "ascending cluster"
- **`preview`:** refresh recommended — rewrite to match the updated `long_form.full`
- **`hero_image_url`:** not currently set; recommend using the Enclave: Acton / Imperial Square cluster skyline
- **`research.last_verified`:** set to `2026-04-17`
- **`research.primary_agent`:** if previously set, preserve; if unset, set to `sweep-2026-04` or this agent name
- **`personal_notes`:** do not touch

---

## Sources consolidated (North Acton)

1. TfL Journey Planner — https://tfl.gov.uk/plan-a-journey/
2. TfL station pages — North Acton, Acton Main Line, East Acton
3. ONS Census 2021 (East Acton / Park Royal wards; LSOA level)
4. GLA London Datastore — Ealing borough profile
5. OPDC Local Plan + Area Action Plan — london.gov.uk OPDC portal
6. Ealing Council planning portal — pam.ealing.gov.uk
7. Met Police crime map — East Acton and Park Royal wards
8. Ordnance Survey OpenData — park/open-space layer
9. Wormwood Scrubs trust — wormwoodscrubs.london
10. Operator pages — Telford Homes, Essential Living, UNCLE/Realstar, Outpost Management/Enclave, Downing
11. HS2 programme — hs2.org.uk/where/old-oak-common
12. PureGym store locator
13. Ealing Council parks / libraries / business directory pages

---

## Downstream tasks created by this research

1. **V4 apply** — merge the above into `src/areas/data/north-acton.ts`, replacing the currently-empty `weekday`, `weekend`, and `notes` strings and populating the empty `amenities` / `demographics` / `sources` arrays.
2. **V3 recalibrate** — re-score T2 tier from "weak" to "weak-to-moderate" on the basis of the populated amenity and green research; T3 remains "weak"; overall grade stays **C**.
3. **V2 refresh** — Imperial Square, One Portal Way, One West Point all have `amenity_tier: "decent"` and generic reasoning strings; these should be re-enriched with the building-specific amenity detail surfaced in this research (in-building gym quality, rooftop terrace presence, co-working lounge scale).
4. **URL-rot check** — the `external_links` on `north-acton.ts` only reference UNCLE and Enclave; add Telford, Essential Living, and OPDC links.
5. **Note capture** — the Census-2021-underestimates-current-demographics point is a pattern that will apply to every BTR cluster area (White City, Wembley Park, Canada Water, Stratford, Canary Wharf). Worth a standing note in `context/notes/` for future V4 refreshes.
