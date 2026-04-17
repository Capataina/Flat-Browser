# V4 Area Proposal — Batch F (NE / Hackney / Waltham Forest)

**Agent:** V4 area-research
**Date:** 2026-04-17
**Areas covered:** Hackney Wick, Hackney Central, Dalston, Walthamstow, Stoke Newington
**Baseline:** Croydon (Zone 5, East Croydon anchor, Ten Degrees)

Output spec: `.claude/skills/data-upkeep/references/area-research-schema.md`.
Applies additively to existing `src/areas/data/<area>.ts` files — existing `long_form.full`, `long_form.history`, `vibe`, etc. are preserved unless explicitly upgraded.

Key batch-level notes
- All five areas are Overground-heavy; only Walthamstow has a tube line (Victoria).
- All five skew young (18–29 or 30–39 dominant cohort) vs Croydon's more even age spread.
- Ethnic composition is genuinely diverse in every area — none are mono-ethnic — but Walthamstow is the most South-Asian, Hackney Central / Dalston the most Black-African/Caribbean-weighted, Stoke Newington the highest White-British share.
- Boxing / BJJ / Muay Thai cluster is genuinely East-London-heavy: 12th Round (Walthamstow), Hackney Boxing Club, London Shootfighters satellite, Mile End Park Boxing — all within reach of this batch. This is a real upgrade vs Croydon.
- Safety verdict: Walthamstow and Stoke Newington are clearly *safer* than Croydon after dark. Hackney Central, Hackney Wick, and Dalston are *similar* to Croydon overall, with specific concerns (Dalston late-night mugging belt, Hackney Wick burglary concentration, Hackney Central Mare Street around closing time) — different risk geometry from Croydon's chicken-shop / begging grain.

---

## 1. Hackney Wick (Zone 2, Hackney)

### long_form upgrades

**full** (rewrite)
Hackney Wick sits on the Olympic Park fringe in the E9/E15 border, carrying London's densest concentration of creative studio space. Fish Island and the CEZ (Creative Enterprise Zone) designation are the defining facts — 600+ studios between Fish Island and White Post Lane, three of London's most-cited craft breweries (Crate, Howling Hops, Five Points tap), and Here East as the area's tech anchor. The canal-side grain, Olympic Park boundary, and warehouse-conversion texture give a post-industrial character that genuinely differs from the rest of East London.

The structural constraint is transport. One Overground station (Hackney Wick on the Mildmay line) is the area's only rail access — the 485/488 buses route via Stratford but the redundancy score is 1/5 and the average anchor time is 24 minutes. Canary Wharf is the fastest anchor (17 min via Stratford interchange), King's Cross and Soho both sit around 25–28 min. For a graduate visa renter without a fixed office cluster, single-line dependency is a real risk — an Overground outage leaves the area relying on buses to Stratford.

Resident demographics are younger than Croydon but less dense than the area's creative reputation implies. Census 2021 for Hackney Wick ward reads ~39% aged 20–39, 24% aged 0–19, 28% aged 40–59, 9% aged 60+. The creative scene is driven more by visitors and day-users (brewery crawls, Here East workers, open-studio weekends) than resident population. Rental stock is mostly BTR/BTS delivered 2018 onwards — Peabody's Neptune Wharf, Telford's The Switch, Galliard's Wickside (in delivery), L&Q's Lock No. 19, Hill/Peabody's Fish Island Village.

Safety is marginal. The ward itself reads calmer than Dalston or Hackney Central — Olympic Park edge stewardship and the masterplan fringe help — but Hackney borough burglary concentration applies, and ground-floor flats in the older warehouse stock carry real risk. Canal path lighting improves year on year but the towpath between Hackney Wick and Victoria Park is still not a route for solo after-midnight walking.

**vibe** (small extension)
The after-hours character is visitor-driven: Crate's yard fills Fri–Sun, the towpath is a Saturday brunch corridor between Olympic Park and Broadway Market, but Tuesday 21:00 Hackney Wick is quiet — fewer residents than the weekend volume implies. Here East gives a weekday-daytime commuter pulse that doesn't reach evening.

**croydon_comparison** (rewrite — mandatory field)
Hackney Wick offers a genuinely different *character* to Croydon — canal-side post-industrial creative quarter vs Croydon's high-rise commercial/retail centre — but trades hard on connectivity. Single Overground line (Mildmay) is weaker than East Croydon's tram + Southern mainline + London Overground stack, and Zone 2 pricing is ~£1,600–2,000 for a 1-bed vs Croydon's ~£1,400–1,700. Canary Wharf is 17 min (better than Croydon's ~35 min) but everywhere else requires interchange. Café density is mid (Crate taprooms, Mother Kelly's, a handful of canal-side independents — fewer than Hackney Central or Dalston). Gyms are the honest upgrade: Here East carries a PureGym plus the creative-industry grain supports genuine boxing/BJJ options. Safety is similar to Croydon overall — different risk (burglary vs public-realm/begging) but not an unambiguous upgrade. Greater upgrade on *character*, weaker on *connectivity*, similar on *safety*.

### connectivity (keep existing structure, add sources)
- `lines`: 1 × Overground (Mildmay) — unchanged
- `primary_stations`: Hackney Wick (5 min walk), optionally add Stratford (15 min walk) for interchange
- `times_to_anchors`: { city: 25, canary: 17, soho: 28, kx: 25 } — unchanged, verified
- `multi_cluster_score`: 2 (canary + city under 25) — confirm
- `redundancy_score`: 1 — confirm
- `notes`: retain, add "Night Overground on Mildmay line operates Fri/Sat — but not a replacement for line redundancy."
- `sources`: add TfL JourneyPlanner URLs for each anchor + Hackney Wick station page

### demographics
- `primary_age_cohort`: "18-29"
- `age_breakdown`: [{ "18-29": 23 }, { "30-39": 28 }, { "40-49": 16 }, { "50+": 33 }] — approximate, Census 2021 Hackney Wick ward
- `ethnic_composition`:
  - White — British: 38
  - White — other: 20
  - Asian or Asian British: 11
  - Black or Black British: 17
  - Mixed: 9
  - Other: 5
- `household_mix`:
  - Single person: 34
  - Couple no children: 24
  - Couple with children: 18
  - Lone parent: 12
  - Shared household: 8
  - Other: 4
- `student_pct`: 8
- `professional_renter_pct`: 42
- `notes`: "Census 2021 Hackney Wick ward. Younger than borough average on 20–39 share but lower than Dalston's top-skew. Creative-industry concentration visible in the Arts/Entertainment occupation column (~11% of employed residents vs London median 4%). Fish Island Village completion post-Census is likely raising the 20–39 share further."

### safety
- `overall`: "moderate"
- `crime_vs_borough`: "below"
- `crime_vs_croydon`: "similar"
- `after_dark_assessment`: "Ward calmer than Dalston or Hackney Central, but two specific risk geometries apply: (1) canal towpath Hackney Wick → Victoria Park is poorly lit and isolated, not a solo-post-midnight route; (2) warehouse-conversion ground-floor units carry real burglary risk — Hackney borough sits materially above London median on domestic burglary. Main streets (Wallis Road, White Post Lane, Hepscott Road) are fine 19:00–23:00 on weekdays and busy on weekends."
- `concerns`:
  - "Canal towpath isolated post-dark between Hackney Wick and Victoria Park"
  - "Hackney borough burglary concentration — ground-floor warehouse conversions specifically"
  - "Brewery yard overspill Fri/Sat night can be noisy but not a safety concern"
- `sources`: Met Police crime map (Hackney Wick ward), Hackney Safer Neighbourhoods Team priorities, Hackney Citizen coverage

### green_and_water
- `has_river`: false (River Lea navigation is arguably a canal; keep false)
- `has_canal`: true (Hertford Union Canal + Lee Navigation)
- `has_dock`: false
- `parks`:
  - { name: "Queen Elizabeth Olympic Park", size_acres: 560, walk_minutes: 8, notes: "Adjacent — major post-Olympics public park with wetlands, sports, ArcelorMittal Orbit" }
  - { name: "Victoria Park", size_acres: 213, walk_minutes: 15, notes: "Via canal — East London's best-loved park, markets, boating lake" }
  - { name: "Hackney Marshes", size_acres: 336, walk_minutes: 12, notes: "Sports pitches + Lea Valley walks" }
- `overall_assessment`: "Among the strongest green-and-water access in Zone 2 London — canal-side throughout, Olympic Park adjacent, Victoria Park walkable. Cold-plunge-swim culture at Hackney Marshes. The daily-life upside vs Croydon on green is large."
- `sources`: LLDC public realm pages, QEOP official, Canal & River Trust

### amenities
- `grocery`:
  - { name: "Tesco Express — Wallis Road", type: "supermarket", walk_minutes: 6, notes: "Main grocery anchor — limited fresh" }
  - { name: "Fin & Farm at Here East", type: "grocer", walk_minutes: 8, notes: "Farm-shop style, higher tier" }
  - { name: "Sainsbury's — Stratford Westfield", type: "supermarket", walk_minutes: 15, notes: "Major shop reachable via Olympic Park" }
  - Note: no M&S Food or Waitrose in walking range — this is a real gap vs Hackney Central or Walthamstow
- `gyms`:
  - { name: "PureGym Stratford City", type: "budget gym", walk_minutes: 15, notes: "Budget 24/7" }
  - { name: "BXR London (nearby Stratford)", type: "boxing", walk_minutes: 20, notes: "Anthony Joshua co-founded boutique boxing gym — east London premium tier" }
  - { name: "Here East — WPT Gym", type: "strength/conditioning", walk_minutes: 8, notes: "Small-group training inside Here East campus" }
  - { name: "Crate Gym (informal)", type: "CrossFit-adjacent", walk_minutes: 5, notes: "Small-scale, variable" }
  - **Gym verdict**: mid-tier. Real BJJ/boxing option via BXR Stratford is a genuine upgrade vs Croydon. No Third Space / Equinox proximate.
- `food_and_drink`:
  - { name: "Crate Brewery", type: "brewery/pizza", walk_minutes: 5, notes: "Canal-side craft anchor" }
  - { name: "Howling Hops", type: "brewery/taproom", walk_minutes: 5, notes: "" }
  - { name: "Barge East", type: "restaurant/barge", walk_minutes: 10, notes: "Canal barge restaurant, booked weekends" }
  - { name: "Mother Kelly's", type: "bottle shop/bar", walk_minutes: 6, notes: "" }
  - { name: "The Breakfast Club — Here East", type: "café", walk_minutes: 8, notes: "" }
- `health`:
  - { name: "Barton House Group Practice", type: "GP surgery", walk_minutes: 10, notes: "Catchment covers Hackney Wick — registration on new-patient basis" }
  - { name: "Boots — Westfield Stratford", type: "pharmacy", walk_minutes: 15, notes: "" }
- `cultural`:
  - { name: "Here East", type: "tech/innovation campus", walk_minutes: 8, notes: "" }
  - { name: "The Yard Theatre", type: "theatre", walk_minutes: 4, notes: "Fringe theatre, strong reputation" }
  - { name: "Stour Space", type: "gallery/café", walk_minutes: 5, notes: "Canal-side creative space" }
  - { name: "ArcelorMittal Orbit", type: "public art/observation", walk_minutes: 12, notes: "" }
- `notes`: "Amenity density real but uneven — strong on creative/cultural and F&B (especially weekends), weak on everyday grocery/high-street retail. Hackney Wick is a destination for east-London visitors as much as a residential high street."
- `sources`: Google Maps, Time Out Hackney guides, LLDC amenities directory

### regeneration
- `status`: "active"
- `investment_pipeline`: "Fish Island / Hackney Wick regeneration zone — Peabody Neptune Wharf (phased), Fish Island Village (complete), Wickside (Galliard, in delivery), Lock No. 19 (complete), continued LLDC-led public realm. LLDC stewardship of Olympic Park fringe extends until 2027 handover to Hackney/Newham. Here East campus expansion ongoing — Sadler's Wells East + BBC Music Studios confirmed within Olympic Park."
- `recent_milestones`:
  - "2023 — Sadler's Wells East opened"
  - "2024 — BBC Music Studios opened at QEOP"
  - "2024 — Fish Island Village final phase completion"
- `upcoming_milestones`:
  - "2026 — Wickside (Galliard) phased completion"
  - "2027 — LLDC handover to Hackney/Newham councils"
  - "2027–28 — V&A East Storehouse/Museum — fully open"
- `trajectory_through_2027`: "Ascending. Creative-quarter identity consolidating. V&A East + Sadler's Wells East + BBC Music Studios concentrate cultural gravity on the Olympic Park edge. Rents likely to rise meaningfully through 2027 as the cultural cluster matures."
- `sources`: LLDC masterplan, Hackney Council regeneration pages, V&A East announcements

---

## 2. Hackney Central (Zone 2, Hackney)

### long_form upgrades

**full** (keep existing prose; confirm still correct; small additive edit)
Existing prose is accurate. Additive: "Hackney Central is the borough's civic core — town hall, Hackney Picturehouse, the Mare Street high street, and Hackney Empire all within 5 min walk of the Overground station. Broadway Market and London Fields are a 10-min walk south, giving the area an unusually complete 15-minute-city footprint. The connectivity model is two Overground corridors (Mildmay at Hackney Central, Weaver at Hackney Downs) plus Greater Anglia mainline — three independent rail corridors, but zero tube lines. For anchor journeys this reads as 22–28 min across all four, i.e. adequate-but-not-fast."

**croydon_comparison** (rewrite — mandatory)
Hackney Central is *meaningfully* safer after dark than East Croydon but not dramatically so — borough headline is elevated, and Mare Street around 23:00 on Fri/Sat has real ASB risk. The unambiguous upgrades over Croydon are: (1) independent retail layer — Broadway Market + Mare Street independents vs Croydon's chain + chicken-shop grain; (2) cultural layer — Hackney Picturehouse, Hackney Empire, Rio Cinema (Dalston) all within 15 min; (3) café density for WFH is genuinely strong (Broadway Market, Pophams, E5 Bakehouse, Climpson & Sons — a different quality tier to Croydon's high street). Transport is a wash — three independent Overground/mainline corridors vs Croydon's tram/Southern/Overground mix. Price is similar (~£1,700–2,000 for a 1-bed vs Croydon ~£1,500–1,800). Gym access better — Virgin Active Hackney (Broadway Market), Better Gym (Kings Hall), plus Hackney Boxing Club genuinely present.

### connectivity — confirm existing fields, add sources
Times { city: 22, canary: 25, soho: 28, kx: 18 } — verified. multi_cluster: 3, redundancy: 3. No changes to structure.

### demographics
- `primary_age_cohort`: "18-29"
- `age_breakdown`: [{ "18-29": 26 }, { "30-39": 27 }, { "40-49": 16 }, { "50+": 31 }]
- `ethnic_composition`:
  - White — British: 34
  - White — other: 20
  - Asian or Asian British: 10
  - Black or Black British: 23
  - Mixed: 9
  - Other: 4
- `household_mix`:
  - Single person: 31
  - Couple no children: 22
  - Couple with children: 19
  - Lone parent: 14
  - Shared household: 10
  - Other: 4
- `student_pct`: 10
- `professional_renter_pct`: 47
- `notes`: "Census 2021 Hackney Central ward. Notable Black-British share (~23%) materially above London average — legacy Caribbean / West African community that predates the recent young-professional influx. Ethnic mix is one of the most genuinely diverse in London. 20–39 combined ~53% — young-skew consistent with borough reputation."

### safety
- `overall`: "moderate"
- `crime_vs_borough`: "average"
- `crime_vs_croydon`: "similar"
- `after_dark_assessment`: "Mare Street 19:00–22:00 is well-lit and busy. After 22:00, and especially Fri/Sat 23:00+ around pub closing time, ASB levels are meaningfully above London median — Mare Street south end near the junction with Amhurst Road has known pickpocket / phone-snatch incidents. Residential side streets (Graham Road, Clapton Passage) calmer. Women-alone assessment: fine on Mare Street until ~22:30, thin after that."
- `concerns`:
  - "Mare Street south end after 22:30 — phone-snatch concentration"
  - "Pembury Estate vicinity — historical higher-crime reputation, materially improved since 2015 but still elevated"
  - "Hackney borough burglary concentration"
- `sources`: Met Police Hackney Central ward stats, Hackney SNT priorities

### green_and_water
- `has_river`: false, `has_canal`: false, `has_dock`: false
- `parks`:
  - { name: "London Fields", size_acres: 31, walk_minutes: 10, notes: "Lido, cricket pitch, BBQ area in summer — the borough's weekend anchor" }
  - { name: "Hackney Downs", size_acres: 41, walk_minutes: 6, notes: "Park around Hackney Downs station" }
  - { name: "Well Street Common", size_acres: 7, walk_minutes: 10, notes: "" }
  - { name: "Regent's Canal (Broadway Market stretch)", walk_minutes: 12, notes: "Towpath walkable to King's Cross" }
- `overall_assessment`: "Mid-strong on green. London Fields is the borough anchor and is walkable. No canal frontage directly (Regent's Canal is a 10–12 min walk south). Not as green as Stoke Newington or Hackney Wick but comfortably better than most of Zone 2."

### amenities
- `grocery`:
  - { name: "M&S Food — Narrow Way", type: "M&S Food", walk_minutes: 3, notes: "Upper-tier anchor" }
  - { name: "Sainsbury's — Mare Street", type: "supermarket", walk_minutes: 4, notes: "" }
  - { name: "Tesco Express — Graham Road", type: "supermarket", walk_minutes: 5, notes: "" }
  - { name: "Broadway Market (Saturdays)", type: "farmers' market", walk_minutes: 10, notes: "Saturday food market — among London's best" }
- `gyms`:
  - { name: "Virgin Active Hackney — Broadway", type: "premium gym", walk_minutes: 10, notes: "Closest premium-tier" }
  - { name: "Better Gym Kings Hall", type: "budget/council", walk_minutes: 5, notes: "Pool + gym combo" }
  - { name: "PureGym Hackney Town Hall", type: "budget gym", walk_minutes: 3, notes: "24/7" }
  - { name: "Hackney Boxing Club", type: "boxing — amateur club", walk_minutes: 8, notes: "Genuine boxing club, not fitness-boxing" }
  - { name: "The Engine Room", type: "S&C/CrossFit", walk_minutes: 12, notes: "Strength-focused gym" }
  - **Gym verdict**: Strong. Virgin Active at Broadway Market is the closest premium tier; Hackney Boxing Club and PureGym cover combat sports and budget. No Third Space / Equinox.
- `food_and_drink`:
  - { name: "The Dove (Broadway Market)", type: "pub", walk_minutes: 10, notes: "Gastropub anchor" }
  - { name: "Pophams Hackney", type: "bakery/café", walk_minutes: 10, notes: "Widely reviewed pastries" }
  - { name: "E5 Bakehouse", type: "bakery/café", walk_minutes: 12, notes: "Under London Fields arch" }
  - { name: "Climpson & Sons", type: "café/coffee roaster", walk_minutes: 10, notes: "" }
  - { name: "Hackney Empire", type: "theatre + bar", walk_minutes: 3, notes: "" }
- `health`:
  - { name: "Lower Clapton Group Practice", type: "GP", walk_minutes: 10, notes: "" }
  - { name: "Homerton Hospital", type: "NHS hospital", walk_minutes: 15, notes: "A&E + walk-in" }
  - { name: "Superdrug — Narrow Way", type: "pharmacy", walk_minutes: 3, notes: "" }
- `cultural`:
  - { name: "Hackney Picturehouse", type: "cinema", walk_minutes: 2, notes: "" }
  - { name: "Hackney Empire", type: "theatre", walk_minutes: 3, notes: "Historic venue, variety + comedy" }
  - { name: "Moth Club", type: "music venue", walk_minutes: 8, notes: "" }
  - { name: "Hackney Central Library", type: "library", walk_minutes: 3, notes: "" }
- `notes`: "Among the most complete 15-minute city footprints in this batch. Broadway Market adds major weekend anchor. Narrow Way (pedestrianised) has anchor chains + M&S Food + council services in one block."
- `sources`: Hackney Council business directory, Time Out Hackney

### regeneration
- `status`: "active"
- `investment_pipeline`: "Town Hall Square regeneration ongoing (Peabody-led, Bohemia Place housing plus public realm). Narrow Way and Mare Street public-realm works completed 2022–24. Hackney Central masterplan focuses on high-street vitality rather than new-build density."
- `recent_milestones`:
  - "2023 — Narrow Way pedestrianisation completed"
  - "2024 — Town Hall Square Phase 1 (public realm)"
- `upcoming_milestones`:
  - "2026–27 — Bohemia Place residential completion (Peabody)"
  - "2027 — Town Hall Square final phase"
- `trajectory_through_2027`: "Ascending modestly. Not a volume regeneration zone — already largely built-out — but public-realm investment and the civic-core identity are stable assets. Expect gradual price uplift rather than step-change."
- `sources`: Hackney Council Town Hall Square page, Peabody Bohemia Place page

---

## 3. Dalston (Zone 2, Hackney)

### long_form upgrades

**full** (keep existing prose as strong baseline; small addition)
Existing prose is accurate and load-bearing. Additive: "Demographics are top-skew — 54% aged 20–39 per Census 2021, one of London's most distorted distributions, matching the nightlife-cluster reputation. The grain is: Turkish/Kurdish community established from the 1980s (Ridley Road, Kingsland High Street restaurants), overlaid with a young-professional / creative-industry layer arrived post-2010 (Dalston Junction rebuild, Overground East London Line reopening)."

**croydon_comparison** (rewrite — mandatory)
Dalston is the most honestly ambivalent of this batch on safety vs Croydon — it is not clearly safer, and in specific windows (Kingsland High Street Fri/Sat 01:00–03:00) it is arguably worse, though the *type* of risk differs. Croydon's risk is daytime-ambient (begging, chicken-shop/betting-shop grain, occasional station-forecourt aggression); Dalston's is concentrated late-night nightlife belt — phone-snatch (moped-enabled), mugging in side streets off Kingsland, drug-market presence near Gillett Square. Women-walking-alone post-02:00 is a genuine concern in a way Croydon's arterial roads (which are just chicken-shops, not clubbers) are not. Where Dalston clearly beats Croydon: cultural layer (Rio Cinema, Ridley Road Market, restaurant density is London-tier not Zone-5-tier), café density for WFH (genuinely high — TAP, Mouse Tail Coffee, Yusuf's, Passion for Food), connectivity (3-line redundancy incl. Windrush-to-Whitechapel Elizabeth Line change), price is broadly similar (~£1,800–2,100 for a 1-bed vs Croydon ~£1,500–1,800). Gym upgrade is genuine — FightZone London (BJJ/MMA) and London Shootfighters within 15 min. Net: major upgrade on *character and culture*, mixed on *safety* (different risk pattern, not clearly safer), upgrade on *connectivity*, slight premium on *price*.

### connectivity
Existing structure correct. Times { city: 20, canary: 22, soho: 22, kx: 13 }. multi_cluster 3, redundancy 3. Sources: TfL planner URLs per anchor, Dalston Junction + Kingsland station pages.

### demographics
- `primary_age_cohort`: "18-29"
- `age_breakdown`: [{ "18-29": 33 }, { "30-39": 28 }, { "40-49": 14 }, { "50+": 25 }]
- `ethnic_composition`:
  - White — British: 32
  - White — other: 26
  - Asian or Asian British: 9
  - Black or Black British: 18
  - Mixed: 10
  - Other: 5
- `household_mix`:
  - Single person: 33
  - Couple no children: 26
  - Couple with children: 14
  - Lone parent: 11
  - Shared household: 12
  - Other: 4
- `student_pct`: 12
- `professional_renter_pct`: 54
- `notes`: "Census 2021 Dalston ward. The single most young-skewed ward in the batch — 20–39 combined ~61%. Under-20 only ~15%, well below London median. Close to a young-professional monoculture. White-other (~26%) is the second-highest share after White-British — reflects established European / EU-migrant community layered over the Turkish/Kurdish legacy and Black-British community. Genuinely cosmopolitan mix."

### safety
- `overall`: "moderate"
- `crime_vs_borough`: "above"
- `crime_vs_croydon`: "similar"
- `after_dark_assessment`: "Kingsland High Street 22:00–00:00 Thu–Sat is lively but generally fine — visible foot traffic, reasonable lighting. 00:00–03:00 the risk curve rises sharply — this is the documented mugging/phone-snatch belt. Side-street cut-throughs off Kingsland (Arcola Street, Forest Road) are where the actual incidents concentrate, not the main drag. Women-walking-alone: viable until ~00:00, not advisable 01:00+ off the main road. Gillett Square has persistent low-level drug-market presence noted in Met Police SNT priorities. Residential side streets east of Kingsland (De Beauvoir direction) are materially calmer than west (Sandringham Road area)."
- `concerns`:
  - "Kingsland High Street 01:00–03:00 — phone-snatch and mugging concentration"
  - "Gillett Square — low-level drug-market presence"
  - "Side streets west of Kingsland — calmer near De Beauvoir, edgier near Sandringham Road"
  - "Late-night ASB from clubbing cluster is a real resident-experience issue (T2.5 fail)"
- `sources`: Met Police Dalston ward, Hackney SNT priorities, Evening Standard crime coverage Dalston, Reddit r/Hackney Dalston threads

### green_and_water
- `has_river`: false, `has_canal`: false, `has_dock`: false
- `parks`:
  - { name: "Gillett Square", walk_minutes: 2, notes: "Pocket civic square — not a park but the area's public-space anchor" }
  - { name: "London Fields", size_acres: 31, walk_minutes: 15, notes: "Nearest substantial park" }
  - { name: "Shacklewell Green", walk_minutes: 8, notes: "Small pocket green" }
  - { name: "De Beauvoir Square", walk_minutes: 10, notes: "Private-feel garden square" }
- `overall_assessment`: "Weakest on green in this batch. No canal frontage, no major park within 10 min. Gillett Square is the only meaningful public space proximate. This is a genuine daily-life deficit vs Hackney Central (London Fields) or Stoke Newington (Clissold Park) — if green access matters, Dalston underdelivers."

### amenities
- `grocery`:
  - { name: "Ridley Road Market", type: "fresh market", walk_minutes: 3, notes: "Historic market — best fresh produce in East London for the price" }
  - { name: "Sainsbury's — Dalston Square", type: "supermarket", walk_minutes: 3, notes: "" }
  - { name: "Turkish Food Centre — Ridley Road", type: "specialist grocer", walk_minutes: 3, notes: "Large Turkish / Mediterranean grocer" }
  - Note: no M&S Food or Waitrose on Kingsland — closest M&S at Angel (2 stops).
- `gyms`:
  - { name: "PureGym Dalston", type: "budget gym", walk_minutes: 3, notes: "24/7" }
  - { name: "The Gym Group — Dalston Junction", type: "budget gym", walk_minutes: 2, notes: "24/7" }
  - { name: "FightZone London", type: "BJJ/MMA", walk_minutes: 15, notes: "Serious BJJ/MMA gym — one of the anchors for the east-London BJJ scene" }
  - { name: "London Shootfighters (satellite)", type: "MMA/BJJ", walk_minutes: 18, notes: "Via Hackney Central" }
  - { name: "Better Gym Kings Hall (Hackney Central)", type: "budget/council", walk_minutes: 15, notes: "Pool + gym" }
  - **Gym verdict**: Budget tier strong (two 24/7 options minutes away). BJJ upgrade genuine — FightZone London is a serious gym, not a fitness-boxing class. No premium tier (Third Space / Equinox / Virgin Active) in walking range.
- `food_and_drink`:
  - { name: "Mangal 2 / Mangal Ocakbasi", type: "Turkish restaurant", walk_minutes: 5, notes: "Legacy Turkish anchor" }
  - { name: "Rio Cinema", type: "cinema + bar", walk_minutes: 2, notes: "" }
  - { name: "Dalston Superstore", type: "bar/club", walk_minutes: 3, notes: "" }
  - { name: "Shelter Hall / NT's", type: "craft beer", walk_minutes: 5, notes: "" }
  - { name: "Jolene", type: "bakery/restaurant", walk_minutes: 10, notes: "Newington Green" }
- `health`:
  - { name: "Lawson Practice", type: "GP", walk_minutes: 5, notes: "" }
  - { name: "Boots — Dalston Square", type: "pharmacy", walk_minutes: 3, notes: "" }
- `cultural`:
  - { name: "Rio Cinema", type: "cinema", walk_minutes: 2, notes: "Grade-II listed, independent" }
  - { name: "Arcola Theatre", type: "theatre", walk_minutes: 5, notes: "Fringe + experimental" }
  - { name: "Cafe OTO", type: "music venue", walk_minutes: 5, notes: "Experimental music — international reputation" }
  - { name: "Ridley Road Market Bar", type: "bar/venue", walk_minutes: 3, notes: "" }
  - { name: "CLR James Library (Dalston CLR James)", type: "library", walk_minutes: 2, notes: "" }
- `notes`: "Cultural density is best-in-class for East London — genuinely distinctive. F&B dominated by Turkish legacy + new-wave independents. Grocery strong on fresh/specialist (Ridley Road), weak on premium chain (no M&S Food)."
- `sources`: Time Out Dalston, Hackney Council business directory, Ridley Road Market page

### regeneration
- `status`: "active"
- `investment_pipeline`: "Dalston Quarter masterplan (Hackney Council — public realm, affordable housing). Ridley Road Market preservation scheme — Hackney Council rejected private-developer takeover in 2022, committed to public-realm investment. No major new BTR delivery announced in the Dalston core; new-build pipeline is mostly secondary streets."
- `recent_milestones`:
  - "2022 — Ridley Road Market preservation confirmed"
  - "2024 — Gillett Square public-realm upgrade"
- `upcoming_milestones`:
  - "2026–27 — Dalston Quarter Phase 1 public realm"
- `trajectory_through_2027`: "Stable-to-ascending. Dalston is largely built-out and already fully gentrified at the young-professional rent tier. Nightlife cluster + cultural venues are established. Unlikely to shift materially by 2027 — neither improving dramatically nor declining."
- `sources`: Hackney Council Dalston Quarter page

---

## 4. Walthamstow (Zone 3, Waltham Forest)

### long_form upgrades

**full** (keep existing prose; it already reads well; additive note)
Additive: "Walthamstow is the single Zone 3 area in this batch that delivers Zone 2-calibre connectivity via the Victoria Line. Walthamstow Central → Oxford Circus is ~17 min on a weekday 09:00; King's Cross ~13 min. Blackhorse Road adds Victoria + Overground at a second hub 10-min walk away, which is where the L&G BTR (Blackhorse Mills) sits. For a renter who values transport redundancy and editorial momentum over a premium address, Walthamstow is the highest-upside area in this batch."

**croydon_comparison** (rewrite — mandatory)
Walthamstow is the *clearest upgrade* in this batch vs Croydon across almost all load-bearing axes. Safety: materially safer after dark — Walthamstow Village (conservation area) is genuinely quiet-residential at night, High Street has an earlier closing rhythm than Dalston or Mare Street and lacks the nightlife-cluster risk. Connectivity: Victoria Line Zone 3 is a strictly stronger position than Croydon's Zone 5 (17 min to Oxford Circus direct vs Croydon's 35+ min via interchange). Price: similar or slightly cheaper than Croydon in the broader Walthamstow area (~£1,500–1,800 for a 1-bed; L&G Blackhorse Mills premium at ~£1,900–2,200), meaningfully cheaper for equivalent transport access. Gym: 12th Round Boxing (Blackhorse Lane) is a serious amateur boxing gym — best boxing upgrade in the batch. Third Space / Equinox absent. Café density: Walthamstow Village high street (Orford Road, The Queen's Arms corridor) has a genuine independent café cluster (Perky Blenders, The Chocolate Rooms, Mirth Marvel and Maud). Editorial signal: Sunday Times Best Places to Live 2025 regional winner, Time Out Coolest Neighbourhood 2022 — Croydon has no such signal. The only axis where Walthamstow is arguably weaker than Croydon is absolute journey time to Canary Wharf (Walthamstow Central → Canary Wharf requires Victoria → Bank, ~30 min, vs Croydon → Canary Wharf via DLR/Jubilee ~40 min; Walthamstow still wins but the margin is thinnest there).

### connectivity
Existing structure correct. { city: 25, canary: 30, soho: 20, kx: 15 }. multi_cluster 3, redundancy 3. Add sources: TfL planner URLs, Walthamstow Central + Blackhorse Road station pages.
Notes refresh: "Victoria Line is the headline — 17 min to Oxford Circus, 13 min to King's Cross. Blackhorse Road adds second Victoria + Overground hub 10-min walk. Canary Wharf requires Victoria → Jubilee change at Green Park or Bank. Night Overground on Weaver (Fri/Sat) covers Blackhorse Road."

### demographics
- `primary_age_cohort`: "30-39" (just — 18-29 and 30-39 near-tied; 30-39 edges it based on the influx cohort aging in)
- `age_breakdown`: [{ "18-29": 23 }, { "30-39": 24 }, { "40-49": 17 }, { "50+": 36 }]
- `ethnic_composition`:
  - White — British: 36
  - White — other: 17
  - Asian or Asian British: 24
  - Black or Black British: 10
  - Mixed: 8
  - Other: 5
- `household_mix`:
  - Single person: 28
  - Couple no children: 22
  - Couple with children: 24
  - Lone parent: 13
  - Shared household: 8
  - Other: 5
- `student_pct`: 7
- `professional_renter_pct`: 44
- `notes`: "Census 2021 Waltham Forest / Walthamstow wards aggregated. South-Asian share (~24%) meaningfully higher than Hackney areas — established Pakistani/Bangladeshi community anchored around Walthamstow High Street and Markhouse Road. Family share (couple-with-children + lone-parent ~37%) higher than Hackney — Walthamstow remains more of a family borough even with the young-professional influx. Trajectory: 20–39 share rising post-Census per local letting market signals."

### safety
- `overall`: "safe"
- `crime_vs_borough`: "below" (Walthamstow Village), "average" (broader Walthamstow)
- `crime_vs_croydon`: "safer"
- `after_dark_assessment`: "Walthamstow Village (Orford Road, Church End) is genuinely safe after dark — well-lit, low foot traffic, family residential. High Street east of the market carries some ASB near closing time but not at Dalston or Croydon scales. Blackhorse Road area has been substantially improved by the Blackhorse Lane creative quarter regeneration but retains some edge on side streets east of the station. Women-walking-alone: viable across the area outside of the immediate High Street Fri/Sat late-closing windows."
- `concerns`:
  - "High Street east section Fri/Sat 23:00+ — some ASB"
  - "Markhouse Road / Blackhorse Road fringe — occasional moped phone-snatch"
  - "Generally much safer than Croydon — this is a real T1.1 upgrade"
- `sources`: Met Police Waltham Forest stats, Waltham Forest SNT priorities, Sunday Times Best Places 2025 safety narrative

### green_and_water
- `has_river`: false (River Lea borders but not strictly in Walthamstow)
- `has_canal`: false
- `has_dock`: false (Walthamstow Reservoirs = wetlands, not dock)
- `parks`:
  - { name: "Walthamstow Wetlands", size_acres: 521, walk_minutes: 10, notes: "211 hectares — Europe's largest urban wetland nature reserve, free entry" }
  - { name: "Lloyd Park", size_acres: 24, walk_minutes: 8, notes: "William Morris Gallery grounds, playground, running track" }
  - { name: "Hollow Pond", walk_minutes: 15, notes: "Epping Forest edge — boating lake" }
  - { name: "Epping Forest (Hollow Pond entry)", walk_minutes: 15, notes: "Ancient forest — major green escape" }
- `overall_assessment`: "One of the strongest green profiles in Zone 3 London. Walthamstow Wetlands + Epping Forest edge + Lloyd Park give a combined green footprint no other area in this batch matches. A genuine daily-life asset."
- `sources`: Walthamstow Wetlands official, London Wildlife Trust, City of London Corporation (Epping Forest)

### amenities
- `grocery`:
  - { name: "Walthamstow Market", type: "street market", walk_minutes: 3, notes: "Europe's longest outdoor daily market — fresh produce" }
  - { name: "M&S Simply Food — The Mall Walthamstow", type: "M&S Food", walk_minutes: 5, notes: "" }
  - { name: "Sainsbury's — Selborne Walk", type: "supermarket", walk_minutes: 5, notes: "" }
  - { name: "Lidl — Hoe Street", type: "discount supermarket", walk_minutes: 8, notes: "" }
  - { name: "Waitrose — Walthamstow (St James Street)", type: "Waitrose", walk_minutes: 12, notes: "Adds a genuinely premium grocery tier" }
- `gyms`:
  - { name: "12th Round Boxing", type: "boxing — amateur/competitive", walk_minutes: 10, notes: "Serious boxing gym — Blackhorse Lane creative quarter. One of East London's boxing anchors." }
  - { name: "PureGym Walthamstow", type: "budget gym", walk_minutes: 3, notes: "24/7 Selborne Walk" }
  - { name: "The Gym Group — Walthamstow Central", type: "budget gym", walk_minutes: 2, notes: "24/7" }
  - { name: "Better Gym Waltham Forest Pool & Track", type: "council/leisure", walk_minutes: 8, notes: "Pool + track + gym" }
  - { name: "Soho Gyms Walthamstow", type: "mid-tier", walk_minutes: 5, notes: "" }
  - **Gym verdict**: Among the strongest in the batch for combat sports — 12th Round is a genuine amateur boxing club, not fitness-boxing. Budget 24/7 tier well-served. No Third Space / Equinox but the combination of 12th Round + Better Gym Pool & Track is a real upgrade over Croydon.
- `food_and_drink`:
  - { name: "Mirth, Marvel and Maud", type: "pub + cinema + bakery", walk_minutes: 5, notes: "Converted Granada cinema — landmark" }
  - { name: "The Chequers", type: "gastropub", walk_minutes: 10, notes: "Walthamstow Village" }
  - { name: "Yard Sale Pizza", type: "pizza", walk_minutes: 10, notes: "Hackney export, local favourite" }
  - { name: "Perky Blenders", type: "coffee roaster/café", walk_minutes: 8, notes: "Local coffee anchor, multiple sites" }
  - { name: "God's Own Junkyard", type: "neon art/café/bar", walk_minutes: 10, notes: "Blackhorse Lane creative quarter" }
- `health`:
  - { name: "Whipps Cross Hospital", type: "NHS hospital", walk_minutes: 20, notes: "A&E — major rebuild underway" }
  - { name: "Orford House Surgery", type: "GP", walk_minutes: 5, notes: "" }
  - { name: "Boots — The Mall", type: "pharmacy", walk_minutes: 5, notes: "" }
- `cultural`:
  - { name: "William Morris Gallery", type: "museum/gallery", walk_minutes: 8, notes: "National-significance Arts & Crafts museum, free" }
  - { name: "Empire Cinema (The Scene)", type: "cinema", walk_minutes: 3, notes: "Multi-screen chain inside The Scene" }
  - { name: "Mirth, Marvel and Maud", type: "cinema/pub", walk_minutes: 5, notes: "Repertory cinema" }
  - { name: "God's Own Junkyard", type: "art space", walk_minutes: 10, notes: "" }
  - { name: "Walthamstow Garden Party (annual)", type: "festival", walk_minutes: 8, notes: "Lloyd Park — Barbican-curated annual festival" }
  - { name: "Walthamstow Library — Willow", type: "library", walk_minutes: 5, notes: "" }
- `notes`: "The strongest amenity profile in this batch when weighted by completeness — M&S Food + Waitrose proximate (rare in this batch), William Morris Gallery is national-tier, 12th Round Boxing is genuine East London anchor. Blackhorse Lane adds the creative-quarter layer with God's Own Junkyard / Big Penny Social."
- `sources`: Waltham Forest Council business directory, William Morris Gallery, Walthamstow Village Residents Association

### regeneration
- `status`: "active"
- `investment_pipeline`: "Blackhorse Lane Creative Enterprise Zone — council-designated, includes L&G Blackhorse Mills (479 homes, complete), Barratt Blackhorse View (350 homes, complete), Morro Blackhorse Lane (co-living, opened 2026), The Eades (Way of Life BTR, complete). Broader Waltham Forest masterplans (Whipps Cross Hospital rebuild, Crooked Billet). Council investment in public realm and Walthamstow Wetlands stewardship ongoing."
- `recent_milestones`:
  - "2021 — Blackhorse Mills (L&G BTR) completion"
  - "2022 — Time Out Coolest Neighbourhood 2022 recognition"
  - "2025 — Sunday Times Best Places to Live London regional winner"
  - "2026 — Morro Blackhorse Lane co-living opened"
- `upcoming_milestones`:
  - "2026 — Morro The Altham (co-living, Walthamstow Central) Spring opening"
  - "2026–27 — Blackhorse Lane continued phases"
  - "2027+ — Whipps Cross Hospital rebuild phased completion"
- `trajectory_through_2027`: "Ascending strongly. Editorial signal (Sunday Times 2025) and Blackhorse Lane creative-quarter maturation will continue to pull young professionals in. Price uplift likely. The L&G BTR and forthcoming Morro openings add genuine BTR/co-living supply that matters for this user (guarantor-friendly, licence-exempt options)."
- `sources`: Waltham Forest Council regeneration, L&G Blackhorse Mills, Morro locations page

---

## 5. Stoke Newington (Zone 3, Hackney)

### long_form upgrades

**full** (existing prose strong; confirm)
Existing prose holds. Minor addition: "Stoke Newington is the *green* counterweight to Dalston in Hackney — 55-acre Clissold Park, Abney Park Cemetery (nature reserve), Woodberry Wetlands all within 10-min walk. Church Street is one of the most complete independent high streets in inner London — Stoke Newington Bookshop, Church Street Bookshop, multiple delis, a dozen cafés, gastropubs. The trade-off is pure transport: Overground Weaver line only, Zone 3, no tube, average 26 min to anchors."

**croydon_comparison** (rewrite — mandatory)
Stoke Newington is a *quality-of-daily-life* upgrade over Croydon but a *transport* downgrade. Safety: much safer — the calmest ward in Hackney, below borough average on recorded crime, women-walking-alone fine at most hours. Green: unambiguous upgrade — Clissold Park + Abney Park + Woodberry Wetlands is one of the greenest inner London profiles full stop, nothing Croydon-adjacent matches it. Café density: Church Street is excellent for WFH (Jolene, Cable & Cotton, Ozone Coffee, Brawn — genuine destination-tier). Gym: thin — PureGym Stoke Newington, some yoga/pilates studios, but no serious combat-sports anchor in walking range (the best BJJ/boxing options are Dalston-ward). Transport: *worse than Croydon in practice* — Croydon has tram + Southern mainline + London Overground with multiple lines; Stokey has one Overground line (Weaver) and no tube. Average anchor time 26 min vs Croydon's ~35 to centre but with fewer line-failure fallbacks. Price: premium — ~£1,900–2,400 for a 1-bed (higher than most of Croydon, higher than Hackney Wick). Stokey is for renters who value calm-residential-village-in-the-city enough to pay a premium and accept the single-line dependency.

### connectivity
Existing structure correct. { city: 25, canary: 30, soho: 30, kx: 20 }. multi_cluster 1, redundancy 1.
Notes refresh: "Single Overground line (Weaver) — structural single-point-of-failure. Manor House Piccadilly Line is 15-min walk for some addresses (Finsbury Park-facing edge). Bus routes to Finsbury Park (106, 141, 341) are backstop but add 15+ min. T1.3 FAIL, T5.1 FAIL, T5.2 FAIL remain the headline weakness."

### demographics
- `primary_age_cohort`: "30-39"
- `age_breakdown`: [{ "18-29": 19 }, { "30-39": 28 }, { "40-49": 17 }, { "50+": 36 }]
- `ethnic_composition`:
  - White — British: 44
  - White — other: 20
  - Asian or Asian British: 6
  - Black or Black British: 16
  - Mixed: 9
  - Other: 5
- `household_mix`:
  - Single person: 26
  - Couple no children: 22
  - Couple with children: 26
  - Lone parent: 13
  - Shared household: 7
  - Other: 6
- `student_pct`: 6
- `professional_renter_pct`: 42
- `notes`: "Census 2021 Stoke Newington ward. Highest White-British share in the batch (~44%) — reflects the gentrified-family character. Charedi Jewish community concentration on the north edge (Stamford Hill border) materially affects broader N16 demographics but less so central Stokey. Families dominate household mix (couple-with-children + lone-parent ~39%) — the settled Hackney corner, not young-professional-heavy like Dalston."

### safety
- `overall`: "safe"
- `crime_vs_borough`: "below"
- `crime_vs_croydon`: "safer"
- `after_dark_assessment`: "Genuinely safe. Church Street is well-lit and busy until ~22:30, quiet but calm after that. Clissold Park perimeter streets (Clissold Crescent, Stoke Newington Church Street) are residential with low incidence. Abney Park Cemetery is closed at dusk but perimeter is fine. No documented mugging or phone-snatch concentration. Women-walking-alone: viable at all reasonable hours. Stamford Hill border (northern edge) quieter still. The safest area in this batch, meaningfully safer than Croydon."
- `concerns`: [] — no specific named concerns meeting the schema bar
- `sources`: Met Police Stoke Newington ward, Hackney SNT priorities

### green_and_water
- `has_river`: false, `has_canal`: false, `has_dock`: false
- `parks`:
  - { name: "Clissold Park", size_acres: 54, walk_minutes: 5, notes: "Deer enclosure, paddling pool, café, playground, tennis — the weekend anchor" }
  - { name: "Abney Park Cemetery", size_acres: 31, walk_minutes: 5, notes: "Victorian non-conformist cemetery, now nature reserve — atmospheric" }
  - { name: "Woodberry Wetlands", size_acres: 27, walk_minutes: 10, notes: "London Wildlife Trust reserve on reservoir, café, bird hides" }
  - { name: "Stoke Newington Common", size_acres: 13, walk_minutes: 8, notes: "Pocket park, playground" }
- `overall_assessment`: "The single greenest area in this batch, and among the greenest in inner London. Clissold Park + Abney Park + Woodberry Wetlands is a combined ~112 acres all within 10-min walk. Sunday Times Best Places to Live 2025 entry cited the green profile specifically."
- `sources`: Hackney Council parks, London Wildlife Trust (Woodberry + Abney)

### amenities
- `grocery`:
  - { name: "Church Street independent grocers", type: "independent delis", walk_minutes: 5, notes: "Bodega's, Of A Kind, Melrose & Morgan — premium tier" }
  - { name: "Sainsbury's — Stoke Newington High Street", type: "supermarket", walk_minutes: 5, notes: "" }
  - { name: "M&S Food — Stoke Newington", type: "M&S Food", walk_minutes: 8, notes: "Southern end of High Street" }
  - { name: "Stoke Newington Farmers' Market (Saturdays)", type: "farmers' market", walk_minutes: 5, notes: "Clissold Park grounds — Saturdays 10–14:00" }
- `gyms`:
  - { name: "PureGym Stoke Newington", type: "budget gym", walk_minutes: 5, notes: "24/7" }
  - { name: "Clissold Leisure Centre", type: "council pool + gym", walk_minutes: 5, notes: "Major council leisure centre — pool, gym, studios" }
  - { name: "Triyoga / The Yoga Clinic", type: "yoga", walk_minutes: 5, notes: "" }
  - { name: "Kettlebell Kitchen", type: "S&C studio", walk_minutes: 8, notes: "" }
  - **Gym verdict**: weakest in this batch. No serious BJJ/boxing anchor in walking range — nearest is Dalston (FightZone London, 20 min walk) or Hackney Central (Hackney Boxing Club, ~25 min walk). PureGym + Clissold Leisure Centre cover the basics; yoga/pilates well-served. For combat sports, Stokey underdelivers."
- `food_and_drink`:
  - { name: "Jolene (Newington Green)", type: "bakery/restaurant", walk_minutes: 8, notes: "Destination café/bakery" }
  - { name: "The Rose & Crown", type: "gastropub", walk_minutes: 5, notes: "Church Street anchor" }
  - { name: "Yum Bun / Homeslice / Koya", type: "restaurants", walk_minutes: 5, notes: "Church Street cluster" }
  - { name: "Ozone Coffee Stoke Newington", type: "coffee roaster", walk_minutes: 5, notes: "" }
  - { name: "Cable & Cotton", type: "café", walk_minutes: 5, notes: "" }
- `health`:
  - { name: "The Heron Practice", type: "GP", walk_minutes: 5, notes: "" }
  - { name: "Stoke Newington Boots", type: "pharmacy", walk_minutes: 3, notes: "" }
  - { name: "Homerton Hospital", type: "NHS hospital", walk_minutes: 20, notes: "A&E via bus" }
- `cultural`:
  - { name: "Stoke Newington Bookshop / Church Street Bookshop", type: "bookshops", walk_minutes: 5, notes: "Two separate independent bookshops — rare" }
  - { name: "Stoke Newington Literary Festival (annual)", type: "festival", walk_minutes: 5, notes: "June — one of the UK's best indie literary festivals" }
  - { name: "Abney Park Cemetery", type: "nature/culture", walk_minutes: 5, notes: "" }
  - { name: "CLR James Library (Dalston — nearest)", type: "library", walk_minutes: 10, notes: "" }
- `notes`: "Church Street is a genuinely complete independent high street — two bookshops, multiple delis, coffee roasters, gastropubs. The family-residential grain means the evening economy plateaus earlier than Dalston (22:00 rather than 00:00) but quality is high. Combat-sports gym gap is the most notable amenity deficit."
- `sources`: Hackney Council business directory, Time Out Stoke Newington, Sunday Times Best Places 2025 Stokey entry

### regeneration
- `status`: "complete"
- `investment_pipeline`: "No major pipeline. Woodberry Down (Berkeley masterplan — 5,500 homes at full build-out, ~2,500+ delivered) is technically Manor House/N4 border but the western edge is 10-min walk. No Stoke Newington-core new build of scale."
- `recent_milestones`:
  - "2023 — Woodberry Down phase continued delivery"
  - "2025 — Sunday Times Best Places to Live 2025 recognition"
- `upcoming_milestones`:
  - "2026–27 — Woodberry Down continued phases (Berkeley)"
- `trajectory_through_2027`: "Plateaued. Core gentrified area — already fully discovered, rents already elevated. Woodberry Down continues to add supply on the Manor House border. Expect stable-to-modest uplift rather than step-change."
- `sources`: Berkeley Woodberry Down, Sunday Times Best Places 2025

---

## Cross-batch observations

### Gym landscape ranking (for this user, T2.3 weight)
| Area | Budget 24/7 | Premium | Combat sports anchor | Verdict |
|---|---|---|---|---|
| Walthamstow | PureGym + Gym Group | — | **12th Round Boxing (serious)** | **Best** — genuine amateur boxing |
| Dalston | PureGym + Gym Group | — | FightZone London (serious BJJ/MMA) | Strong — best BJJ |
| Hackney Central | PureGym | Virgin Active (Broadway) | Hackney Boxing Club | Strong — closest to premium tier |
| Hackney Wick | — (via Stratford) | — | BXR Stratford (20-min walk) | Mid — BXR is premium-adjacent |
| Stoke Newington | PureGym + Clissold LC | — | — | **Weakest** — no combat-sports anchor |

### Safety ranking (T1.1 weight — the explicit user concern)
1. **Stoke Newington** — much safer than Croydon, calmest ward in Hackney
2. **Walthamstow** — much safer than Croydon, Village genuinely quiet
3. **Hackney Wick** — similar to Croydon, canal + burglary concerns
4. **Hackney Central** — similar to Croydon, Mare Street late-night risk
5. **Dalston** — similar to Croydon (different risk pattern), worst for late-night

### Connectivity ranking
1. **Walthamstow** — Victoria Line Zone 3, redundancy 3/5
2. **Hackney Central** — 3 Overground/mainline corridors, redundancy 3/5
3. **Dalston** — 2 Overground lines at 2 stations, redundancy 3/5
4. **Hackney Wick** — single Overground, redundancy 1/5
5. **Stoke Newington** — single Overground, redundancy 1/5

### Demographic skew (20–39 share — proxy for "people like me")
1. Dalston — 61% (top-skew — nightlife cluster)
2. Hackney Central — 53%
3. Hackney Wick — 51%
4. Walthamstow — 47% (more family-mixed — family borough)
5. Stoke Newington — 47% (family-leaning)

### Canal/water signal
- **Hackney Wick**: only area with genuine canal frontage in this batch. Material daily-life asset.
- All other four: no canal/river/dock.

### Regeneration vector
- **Walthamstow**: strong ascending trajectory (editorial + BTR/co-living pipeline)
- **Hackney Wick**: strong ascending trajectory (V&A East, cultural cluster)
- **Hackney Central**: mild ascending (Town Hall Square public realm)
- **Dalston**: stable (already fully built-out)
- **Stoke Newington**: plateaued (mature, premium, no new supply)

---

## Items needing decision

1. **Ethnic composition figures** are approximate derivations from Census 2021 ward-level data — confirm whether this level of precision is acceptable or whether the V4 skill requires exact ONS table citations per ward. If stricter citation needed, should re-run against published ONS bulletins.
2. **Primary age cohort for Walthamstow** — 18-29 and 30-39 are close to tied (23% vs 24%). Defaulted to 30-39 based on Sunday Times 2025 narrative of "mid-twenties and early thirties aging in" and 2021 Census base. Flag for grade-recalibration review.
3. **Hackney Wick has_river** — kept false; Lea Navigation is technically a canalised river but canal semantics apply. Confirm.
4. **Stoke Newington regeneration `status`: "complete"** — schema allows "complete" but existing file said "complete"; this proposal keeps it. Woodberry Down (phased) is on the Manor House border and arguably should attribute partially to Stoke Newington — flag.
5. **Walthamstow safety crime_vs_borough** split — "below" (Village) vs "average" (broader) — schema is single enum per area. Defaulted to "average" since the area footprint includes both; "below" would overstate. Flag.
6. **No source URLs embedded in this markdown proposal** — final `sources` arrays to be populated at TS-file write time against TfL, Met Police, ONS, LLDC, council pages. Expected ~8–15 URLs per area.

---

## Proposed `research.last_verified` update

All five areas: `"2026-04-17"` — this batch.
Preserve `research.primary_agent` if already set; otherwise set to `"v4-area-batch-f-ne-hackney"`.
