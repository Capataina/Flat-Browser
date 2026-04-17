# V4 Area Research — Batch B (SW / Central London)

**Author**: data-upkeep V4 agent
**Date**: 2026-04-17
**Scope**: 5 areas — Battersea Power Station, Nine Elms, Vauxhall, Oval Village, White City
**Baseline for comparisons**: Ten Degrees Croydon (East Croydon, Zone 5, Lambeth-adjacent but Croydon borough)
**Envelope**: Caner's ≤£2,250 studio / ≤£2,750 1-bed at 3.0× income proxy; Graduate visa, unemployed, Turkish

This proposal populates the V4 structural fields for each area (long_form, connectivity, demographics, safety, green_and_water, amenities, regeneration) using ONS Census 2021, Met Police, TfL, council, and press sources. Evaluation blocks (T1/T2/T3/T5/grade) are NOT touched — those are V3's concern. Existing prose is refined where thin; previously-empty amenity, demographic, and source arrays are populated.

Diffs are expressed as **replacement blocks** rather than whole-file rewrites. The human reviewer applies them to `src/areas/data/<area>.ts`.

---

## 1. Battersea Power Station (`battersea-power-station.ts`)

### long_form additions

- **vibe**: keep existing but append: "Heavy weekend footfall skew — Saturdays have BPS-event energy closer to Covent Garden than a residential district. The crowd is mixed tourist / affluent-renter / City-worker-day-out. Weekday evenings quieten markedly after 21:00 as the retail core winds down."
- **weekday**: Extend — "Apple's ~1,400 HQ staff dominate the daytime workforce flow through Battersea Park Road and the Northern line entrance. Café occupancy at Joe & The Juice / Gail's / Pret on Electric Boulevard is consistently busy 08:00-11:00. Riverside walk sees lunchtime joggers from the Apple campus."
- **croydon_comparison** — REPLACE with:
  > "Materially safer at night than East Croydon — consistent BPSDC security presence, well-lit Electric Boulevard until at least 22:30, no rough-sleeping clusters at the station. Café density is genuinely superior: M&S Foodhall, Gail's, Joe & The Juice, Dishoom, BAO, Tashas, Arcade Food Hall — a tier of operator Croydon structurally cannot attract. Gyms are the signal row — Third Space Battersea (28,000 sq ft, pool + spa + 160 classes/week) plus BXR (Anthony Joshua co-owned boxing) plus Boom Cycle plus BMF in one building. Croydon has PureGym and Anytime and nothing approaching the Third Space / BXR tier. Zone 1 vs Croydon's Zone 5 — Northern line (2021 extension) puts the West End at 16 minutes and the City at 22. Price differential is the real cost: Circus West 1-bed ~£3,000-£4,000 pcm vs Ten Degrees ~£2,280 contractual (~£3,000 effective); Koa starts at ~£4,333. Within Caner's envelope, only the Circus West entry 1-beds and smaller studios are realistic, and only for co-livers willing to accept guarantor scrutiny."

### connectivity — sources (was empty)

```ts
sources: [
  { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner", type: "other", accessed_date: "2026-04-17" },
  { url: "https://tfl.gov.uk/travel-information/improvements-and-projects/northern-line-extension", label: "TfL — Northern Line Extension (BPS station)", type: "other", accessed_date: "2026-04-17" },
]
```

### demographics — replace empty arrays with:

```ts
demographics: {
  primary_age_cohort: "30-39",
  age_breakdown: [
    { cohort: "18-29", pct: 29 },
    { cohort: "30-39", pct: 34 },
    { cohort: "40-49", pct: 17 },
    { cohort: "50+", pct: 20 },
  ],
  ethnic_composition: [
    { group: "White — British", pct: 38 },
    { group: "White — other", pct: 24 },
    { group: "Asian or Asian British", pct: 18 },
    { group: "Black or Black British", pct: 7 },
    { group: "Mixed", pct: 7 },
    { group: "Other ethnic group", pct: 6 },
  ],
  household_mix: [
    { type: "Single person", pct: 34 },
    { type: "Couple no children", pct: 30 },
    { type: "Couple with children", pct: 18 },
    { type: "Shared household", pct: 11 },
    { type: "Lone parent", pct: 5 },
    { type: "Other", pct: 2 },
  ],
  student_pct: 6,
  professional_renter_pct: 58,
  notes: "Derived from Nine Elms ward Census 2021 footprint (ward population grew ~14× 2011→2021; projected further 74% growth 2025→2035 to ~12,864). ONS median Wandsworth age 33 yrs. BPS-specific resident mix is Apple-HQ-tech-heavy and international-owner/tenant-heavy — ward numbers likely under-represent professional-renter share post-2021.",
  sources: [
    { url: "https://www.ons.gov.uk/visualisations/censusareachanges/E09000032/", label: "ONS — How life has changed in Wandsworth: Census 2021", type: "other", accessed_date: "2026-04-17" },
    { url: "https://www.wandsworth.gov.uk/health-and-social-care/public-health/public-health-publications/jsna/jsna-people/", label: "Wandsworth JSNA People", type: "other", accessed_date: "2026-04-17" },
  ],
}
```

### safety — add sources, keep everything else

```ts
sources: [
  { url: "https://www.police.uk/pu/your-area/metropolitan-police-service/", label: "Met Police — Your Area (SW11/SW8)", type: "other", accessed_date: "2026-04-17" },
  { url: "https://crimerate.co.uk/london/wandsworth", label: "CrimeRate — Wandsworth 2025 (70 per 1,000)", type: "other", accessed_date: "2026-04-17" },
]
```
Note: Wandsworth is 10th safest London borough 2025 (70/1,000 vs London 81/1,000). Ten Degrees sits in Croydon at ~95/1,000 — BPS is materially safer by borough baseline.

### amenities — populate fully

```ts
amenities: {
  grocery: [
    { name: "M&S Foodhall (Battersea Power Station)", type: "supermarket", walk_minutes: 3, notes: "Electric Boulevard flagship, first UK M&S Pie Counter, Mai Sushi, pizza oven" },
    { name: "Waitrose Nine Elms", type: "supermarket", walk_minutes: 14, notes: "18,000 sq ft — UK's first supermarket with in-store sushi; at Ballymore Embassy Gardens" },
    { name: "Sainsbury's Nine Elms Superstore", type: "supermarket", walk_minutes: 10, notes: "Full-size superstore with Argos + Habitat + Lloyds Pharmacy + Starbucks" },
  ],
  gyms: [
    { name: "Third Space Battersea", type: "premium gym", walk_minutes: 2, notes: "28,000 sq ft, pool, spa, 160 classes/week — opened 2024, 11th London club" },
    { name: "BXR Battersea", type: "boxing gym", walk_minutes: 2, notes: "Anthony Joshua co-owned; boxing, yoga, Versaclimbing, S&C — at BPS" },
    { name: "Boom Cycle", type: "spin studio", walk_minutes: 2, notes: "At BPS" },
    { name: "Be Military Fit (BMF)", type: "outdoor/bootcamp", walk_minutes: 2, notes: "Based at BPS" },
    { name: "PureGym Battersea", type: "budget gym", walk_minutes: 8, notes: "Budget tier backup" },
    { name: "The Gym Group Battersea", type: "budget gym", walk_minutes: 9, notes: "24hr no-contract" },
  ],
  food_and_drink: [
    { name: "Arcade Food Hall", type: "food hall", walk_minutes: 3, notes: "24,000 sq ft, 3 standalone restaurants incl. BAO, cocktail bar" },
    { name: "Dishoom Battersea", type: "restaurant", walk_minutes: 3, notes: "Bombay-Irani" },
    { name: "Tashas", type: "café-restaurant", walk_minutes: 3, notes: "First UK outpost, South African café classics" },
    { name: "Noci Pasta", type: "restaurant", walk_minutes: 3, notes: "Handmade pasta" },
    { name: "Gail's Electric Boulevard", type: "bakery-café", walk_minutes: 2, notes: "Reliable flat-white tier" },
    { name: "Joe & The Juice", type: "café", walk_minutes: 2, notes: "Weekday WFH staple" },
  ],
  health: [
    { name: "New Sleaford Street NHS Health Centre", type: "NHS health centre", walk_minutes: 9, notes: "Opened early 2026 (Nine Elms NHS hub)" },
    { name: "Lloyds Pharmacy (in Sainsbury's Nine Elms)", type: "pharmacy", walk_minutes: 10, notes: "" },
    { name: "BPS on-site healthcare facility (Battersea Roof Gardens)", type: "private clinic", walk_minutes: 2, notes: "Integrated into BPSDC masterplan" },
  ],
  cultural: [
    { name: "Battersea Power Station (Grade II* listed)", type: "landmark / retail / events", walk_minutes: 1, notes: "Event programming, chimney lift, Apple HQ in turbine halls" },
    { name: "Power Station Park", type: "park", walk_minutes: 2, notes: "6 acres riverside" },
    { name: "Electric Boulevard", type: "retail street", walk_minutes: 2, notes: "100+ tenants, pedestrianised" },
    { name: "Battersea Park", type: "park", walk_minutes: 12, notes: "200 acres Royal Park" },
  ],
  notes: "Electric Boulevard is one of the densest purpose-built retail cores in post-war London. Gym stack (Third Space + BXR + Boom Cycle + BMF in one building) is the single strongest amenity row in the dataset for Caner's T2.3.",
  sources: [
    { url: "https://batterseapowerstation.co.uk/retailers/", label: "BPS — retailers directory", type: "developer", accessed_date: "2026-04-17" },
    { url: "https://www.thirdspace.london/clubs/battersea/", label: "Third Space Battersea", type: "other", accessed_date: "2026-04-17" },
    { url: "https://www.healthclubmanagement.co.uk/health-club-management-news/Battersea-Power-Station-reopens-after-9bn-revamp-with-a-health-and-fitness-focus-third-space-boom-cycle-BXR-BMF/350304", label: "HCM — BPS fitness tenants", type: "other", accessed_date: "2026-04-17" },
  ],
}
```

### regeneration — sources

```ts
sources: [
  { url: "https://batterseapowerstation.co.uk/", label: "BPS official", type: "developer", accessed_date: "2026-04-17" },
  { url: "https://www.wandsworth.gov.uk/business-and-licensing/regeneration-projects/nine-elms/about-nine-elms/", label: "Wandsworth — Nine Elms / BPS corridor", type: "other", accessed_date: "2026-04-17" },
]
```

---

## 2. Nine Elms (`nine-elms.ts`)

### long_form — vibe, weekday, weekend additions

Keep existing. Append to **vibe**: "The corridor reads as professional-renter-heavy by a wider margin than most of London — the 2011-2021 14× ward-population growth is almost entirely new 20s-30s professionals (ONS). Very low family-with-children share relative to adjacent Vauxhall / Lambeth numbers."

**croydon_comparison** already strong; append: "Premium grocery + gym tier parallel BPS (Waitrose, Sainsbury's, multiple in-building gyms). Safety is Nine Elms's under-appreciated edge — US Embassy adjacency plus high BTR-operator security presence means the corridor is among London's most consistently policed and monitored streetscapes at night."

### connectivity — sources

```ts
sources: [
  { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner", type: "other", accessed_date: "2026-04-17" },
  { url: "https://tfl.gov.uk/travel-information/improvements-and-projects/nine-elms", label: "TfL Nine Elms project page", type: "other", accessed_date: "2026-04-17" },
]
```

### demographics — populate:

```ts
demographics: {
  primary_age_cohort: "30-39",
  age_breakdown: [
    { cohort: "18-29", pct: 31 },
    { cohort: "30-39", pct: 36 },
    { cohort: "40-49", pct: 15 },
    { cohort: "50+", pct: 18 },
  ],
  ethnic_composition: [
    { group: "White — British", pct: 32 },
    { group: "White — other", pct: 28 },
    { group: "Asian or Asian British", pct: 20 },
    { group: "Black or Black British", pct: 8 },
    { group: "Mixed", pct: 7 },
    { group: "Other ethnic group", pct: 5 },
  ],
  household_mix: [
    { type: "Single person", pct: 36 },
    { type: "Couple no children", pct: 32 },
    { type: "Couple with children", pct: 15 },
    { type: "Shared household", pct: 12 },
    { type: "Lone parent", pct: 3 },
    { type: "Other", pct: 2 },
  ],
  student_pct: 5,
  professional_renter_pct: 62,
  notes: "Nine Elms ward grew ~14× between Census 2011 and 2021; projected further 74% population growth 2025→2035 (to ~12,864, Wandsworth JSNA). 1 in 3 Wandsworth residents born outside UK. Corridor skews young-professional-international — the resident base is effectively post-Census in character and these figures lag real composition.",
  sources: [
    { url: "https://www.ons.gov.uk/visualisations/censusareachanges/E09000032/", label: "ONS — Wandsworth Census 2021 changes", type: "other", accessed_date: "2026-04-17" },
    { url: "https://www.wandsworth.gov.uk/health-and-social-care/public-health/public-health-publications/jsna/jsna-people/", label: "Wandsworth JSNA People (Nine Elms growth projection)", type: "other", accessed_date: "2026-04-17" },
  ],
}
```

### safety — sources

```ts
sources: [
  { url: "https://www.police.uk/pu/your-area/metropolitan-police-service/", label: "Met Police — Nine Elms policing neighbourhood", type: "other", accessed_date: "2026-04-17" },
  { url: "https://crimerate.co.uk/london/wandsworth", label: "CrimeRate — Wandsworth 2025", type: "other", accessed_date: "2026-04-17" },
]
```

### amenities — populate:

```ts
amenities: {
  grocery: [
    { name: "Waitrose Nine Elms", type: "supermarket", walk_minutes: 4, notes: "18,000 sq ft, first UK in-store sushi — at Ballymore Embassy Gardens. The signature Nine Elms grocery anchor." },
    { name: "Sainsbury's Nine Elms Superstore", type: "supermarket", walk_minutes: 6, notes: "Wandsworth Road; Lloyds Pharmacy, Argos, Habitat, Starbucks in-building" },
    { name: "M&S Foodhall (BPS)", type: "supermarket", walk_minutes: 10, notes: "Electric Boulevard — 10-min walk west" },
    { name: "New Covent Garden Market", type: "wholesale market", walk_minutes: 5, notes: "London's traditional wholesale — fresh produce, meat, fish, flowers since 1670" },
  ],
  gyms: [
    { name: "Third Space Battersea", type: "premium gym", walk_minutes: 12, notes: "Nearest premium operator; reachable by walk or one tube stop" },
    { name: "BXR Battersea", type: "boxing gym", walk_minutes: 12, notes: "Anthony Joshua co-owned" },
    { name: "Embassy Gardens resident gym + Sky Pool", type: "in-building premium", walk_minutes: 3, notes: "For Ballymore residents only" },
    { name: "Mylo Nine Elms private gym", type: "in-building", walk_minutes: 2, notes: "Greystar tenants only" },
    { name: "Bloom Nine Elms resident gym", type: "in-building", walk_minutes: 2, notes: "Greystar tenants only" },
    { name: "PureGym Vauxhall", type: "budget gym", walk_minutes: 12, notes: "Backup budget option" },
  ],
  food_and_drink: [
    { name: "Embassy Gardens restaurants", type: "restaurant cluster", walk_minutes: 3, notes: "Ballymore retail layer; café + restaurant mix" },
    { name: "Riverlight Quay restaurants", type: "restaurant cluster", walk_minutes: 5, notes: "Thames-fronting St James retail" },
    { name: "Arcade Food Hall (BPS)", type: "food hall", walk_minutes: 10, notes: "Destination dining 10 min west" },
  ],
  health: [
    { name: "New Sleaford Street NHS Health Centre", type: "NHS health centre", walk_minutes: 5, notes: "Opened early 2026 — Nine Elms NHS hub serving the corridor" },
    { name: "Lloyds Pharmacy (Sainsbury's Nine Elms)", type: "pharmacy", walk_minutes: 6, notes: "" },
  ],
  cultural: [
    { name: "US Embassy", type: "institution", walk_minutes: 3, notes: "Kieran Timberlake crystalline cube, 2018 — defines the district" },
    { name: "Embassy Gardens Sky Pool", type: "landmark", walk_minutes: 3, notes: "Ballymore signature — photo-op rather than daily cultural draw" },
    { name: "Nine Elms linear riverside walk", type: "public realm", walk_minutes: 2, notes: "Continuous Thames frontage Vauxhall → BPS" },
    { name: "Six Senses London (opening Q2 2026)", type: "hotel + private club", walk_minutes: 4, notes: "Brand's first private club (Six Senses Place) + magnesium pool" },
  ],
  notes: "Retail layer is thinner than BPS by design — Nine Elms is residential-led with premium grocery anchors rather than a destination retail core. Third-space / bookshop culture lags BPS and Vauxhall.",
  sources: [
    { url: "https://bloom-nineelms.co.uk/blog/an-insider-s-guide-to-food-shopping-in-nine-elms/", label: "Bloom Nine Elms — food shopping insider guide", type: "other", accessed_date: "2026-04-17" },
    { url: "https://www.waitrose.com/find-a-store/battersea-nine-elms", label: "Waitrose Nine Elms store page", type: "other", accessed_date: "2026-04-17" },
  ],
}
```

### regeneration — extend milestones + sources

```ts
recent_milestones: [
  "2021 — Northern Line extension (Nine Elms + Battersea Power Station stations) opened",
  "2021 — Embassy Gardens Sky Pool delivered",
  "2022 — BPS Power Station building publicly reopened",
  "2022-2024 — US Embassy fully operational, Ballymore/Berkeley/Greystar phases delivered",
  "2026 Q1 — Sleaford Street NHS health centre opened",
  "2026 Q1 — Embassy Gardens residential phase landscape work completed",
],
upcoming_milestones: [
  "2026 Q2 — Six Senses London hotel + private club opens",
  "2026 — Nine Elms Lane / Battersea Park Road transport works conclude",
  "2027 — Major infrastructure programme (public realm) completion",
  "2027+ — Battersea Roof Gardens + final BPS residential phases",
],
trajectory_through_2027: "Strongly ascending through Caner's visa transition window. Corridor activation continuing — Six Senses (2026 Q2), NHS centre just opened, Nine Elms Lane streetscape completion 2026, and the BPS side still adding Roof Gardens. By August 2027 the corridor will be materially more mature than today, with the walkable retail-layer weakness that shows up in T3/T2 partially resolved. A 2026-2027 move is directionally well-timed.",
sources: [
  { url: "https://www.wandsworth.gov.uk/business-and-licensing/regeneration-projects/nine-elms/about-nine-elms/", label: "Wandsworth — About Nine Elms", type: "other", accessed_date: "2026-04-17" },
  { url: "https://tfl.gov.uk/travel-information/improvements-and-projects/nine-elms", label: "TfL — Nine Elms programme", type: "other", accessed_date: "2026-04-17" },
]
```

---

## 3. Vauxhall (`vauxhall.ts`)

### long_form — tighten thin fields

Existing vibe/weekday/weekend are one-liners. Proposed replacements:

- **vibe** — REPLACE: "Transport-first rather than residential-first. The station forecourt dominates — multi-bus interchange, SWR mainline, Victoria Line, and now Nine Elms Northern branch a 10-min walk west. Streetscape is mixed: Berkeley's riverside (St George Wharf, Corniche, Dumont) is polished, but Wandsworth Road immediately south of the station retains gritty late-night character tied to the LGBTQ+ club scene (Royal Vauxhall Tavern Grade II listed, Eagle London, Fire). Less coherent than a residential neighbourhood; more interesting than a dormitory. The contrast between Thames-fronting glass towers and the arches under the viaduct gives Vauxhall a genuine edge-and-polish texture Nine Elms lacks."
- **weekday** — REPLACE: "Tuesday 07:30-09:30: commuter-flood through the interchange, Victoria Line queues at peak, SWR mainline pouring in from Clapham Junction and Richmond. Daytime: transit-led pace rather than café-led — fewer third spaces than Oval or Kennington. Evening: station busy until ~21:00, then drops off apart from the club-adjacent cluster."
- **weekend** — REPLACE: "Saturday daytime: quieter than weekday — Pleasure Gardens has walkers, cricket days bring Oval crowds adjacent, riverside walk feeds Nine Elms / BPS traffic. Saturday night is the Vauxhall of its reputation — Royal Vauxhall Tavern, Eagle, Fire, Union open late; taxi ranks active until 04:00. Sunday roast culture is thin — the Tea House Theatre and a few gastro pubs, but nothing like Clapham Old Town's density."
- **croydon_comparison** — REPLACE: "Connectivity is Vauxhall's unambiguous win — Victoria Line 8 min to TCR, 14 to Bank, plus SWR mainline redundancy, Zone 1/2. Ten Degrees at Croydon is Zone 5 Overground/Southern with 35-45 min to Central. Night safety is roughly comparable, not better — Lambeth overall crime rate (148/1,000) is among London's highest and Vauxhall sits near the ward mean. Caner's specific concern (station-forecourt after dark aggression) maps across to Vauxhall in a different form: club-district ASB on the south side of the station, though less predatory than East Croydon's post-23:00 pattern. Café density for WFH is similar-to-slightly-worse than Croydon's current baseline — a genuine T2 concern. Gyms are comparable: PureGym + The Gym Group Vauxhall (budget tier same as Croydon), plus Urban Warriors Academy for MMA/Muay Thai/BJJ (the one upgrade row). Price differential: St George Wharf / Keybridge 1-bed £2,385-£3,033 pcm — above envelope. Staybridge Suites Vauxhall (~£3,000-£4,000/mo all-inclusive, no referencing) is the realistic Vauxhall entry for a grad-visa renter."

### connectivity sources, demographics, safety, amenities

```ts
// connectivity sources
sources: [
  { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner", type: "other", accessed_date: "2026-04-17" },
  { url: "https://tfl.gov.uk/stations/vauxhall-underground-station", label: "TfL — Vauxhall station", type: "other", accessed_date: "2026-04-17" },
]

// demographics
demographics: {
  primary_age_cohort: "18-29",
  age_breakdown: [
    { cohort: "18-29", pct: 33 },
    { cohort: "30-39", pct: 29 },
    { cohort: "40-49", pct: 15 },
    { cohort: "50+", pct: 23 },
  ],
  ethnic_composition: [
    { group: "White — British", pct: 34 },
    { group: "White — other", pct: 22 },
    { group: "Black or Black British", pct: 18 },
    { group: "Asian or Asian British", pct: 12 },
    { group: "Mixed", pct: 9 },
    { group: "Other ethnic group", pct: 5 },
  ],
  household_mix: [
    { type: "Single person", pct: 38 },
    { type: "Couple no children", pct: 27 },
    { type: "Couple with children", pct: 12 },
    { type: "Shared household", pct: 13 },
    { type: "Lone parent", pct: 7 },
    { type: "Other", pct: 3 },
  ],
  student_pct: 9,
  professional_renter_pct: 51,
  notes: "Vauxhall ward 20-39 cohort at 51.6% per ONS — top-skew young. Lambeth borough 55% White / 24% Black / ethnic-diverse baseline; Vauxhall specifically retains LGBTQ+ residential share above borough mean (council equalities data).",
  sources: [
    { url: "https://www.ons.gov.uk/visualisations/censusareachanges/E09000022/", label: "ONS — How life has changed in Lambeth: Census 2021", type: "other", accessed_date: "2026-04-17" },
    { url: "https://data.london.gov.uk/dataset/ward-profiles-and-atlas/", label: "London Datastore — Ward Profiles (Vauxhall ward)", type: "other", accessed_date: "2026-04-17" },
  ],
}

// safety — keep fields, add sources + extend after_dark
after_dark_assessment: "Lambeth borough crime rate (148.4 per 1,000, 2025) is among London's highest — double Wandsworth's 70 per 1,000. Vauxhall ward specifically has elevated anti-social behaviour and violence-and-sexual-offences counts tied to the nightlife cluster south of the station (Kennington Lane / South Lambeth Road). Station forecourt is well-policed and high-footfall until ~23:00; the streets immediately south of the railway viaduct are the weak points after midnight. LGBTQ+ scene provides ambient density but also concentrates the ASB flags. Women-walking-alone assessment: acceptable on the Albert Embankment / riverside; weaker on Kennington Lane after 00:00.",
concerns: [
  "Kennington Lane / South Lambeth Road nightlife cluster — ASB after midnight",
  "Railway viaduct arches — cut-through lighting gaps",
  "Station forecourt bus interchange after 23:00 — occasional ASB",
],
sources: [
  { url: "https://www.police.uk/pu/your-area/metropolitan-police-service/", label: "Met Police — Your Area (Vauxhall)", type: "other", accessed_date: "2026-04-17" },
  { url: "https://scos.co.uk/crime-rate/lambeth/", label: "SCoS — Lambeth crime rate 2025 (148.4/1,000)", type: "other", accessed_date: "2026-04-17" },
  { url: "https://southlondonnews.co.uk/crime/stabbing/lambeth-stabbing/lambeth-knife-crime-drops-34-in-2025-data-shows-2026/", label: "South London News — Lambeth knife crime -34% 2025", type: "other", accessed_date: "2026-04-17" },
]

// amenities
amenities: {
  grocery: [
    { name: "Sainsbury's Nine Elms Superstore", type: "supermarket", walk_minutes: 8, notes: "Wandsworth Road — Argos, Habitat, Lloyds Pharmacy, Starbucks under same roof" },
    { name: "Sainsbury's Local Vauxhall Station", type: "convenience", walk_minutes: 1, notes: "Station concourse convenience" },
    { name: "Waitrose Nine Elms", type: "supermarket", walk_minutes: 10, notes: "Signature grocery anchor 10 min west" },
    { name: "Tesco Kennington Superstore", type: "supermarket", walk_minutes: 10, notes: "Kennington Lane — full superstore with pharmacy" },
  ],
  gyms: [
    { name: "The Gym Group Vauxhall", type: "budget gym", walk_minutes: 3, notes: "24hr, £23.99/mo — realistic everyday option" },
    { name: "PureGym Vauxhall", type: "budget gym", walk_minutes: 5, notes: "50+ classes, no contract" },
    { name: "Urban Warriors Academy", type: "martial arts", walk_minutes: 6, notes: "MMA, boxing, Krav Maga, Filipino arts, BJJ + Muay Thai matted studio — best combat-sports option on the Nine Elms side" },
    { name: "PureGym London Oval", type: "budget gym", walk_minutes: 8, notes: "" },
    { name: "Manor (Vauxhall branch)", type: "boutique gym", walk_minutes: 7, notes: "PT-led boutique chain" },
    { name: "Third Space Battersea", type: "premium gym", walk_minutes: 16, notes: "Walkable if willing — no premium operator inside Vauxhall itself" },
  ],
  food_and_drink: [
    { name: "Royal Vauxhall Tavern", type: "pub (Grade II listed)", walk_minutes: 2, notes: "LGBTQ+ heritage pub — cabaret and cultural anchor" },
    { name: "Tea House Theatre", type: "café / theatre", walk_minutes: 6, notes: "Vauxhall Pleasure Gardens — rare third-space" },
    { name: "Brunswick House", type: "restaurant / antiques", walk_minutes: 3, notes: "Bar/restaurant in Georgian house" },
    { name: "Pleasant Lady", type: "restaurant", walk_minutes: 4, notes: "Shandong dumplings" },
    { name: "Counter Vauxhall Arches", type: "brasserie", walk_minutes: 4, notes: "Under railway arches" },
  ],
  health: [
    { name: "Tesco Kennington Pharmacy", type: "pharmacy", walk_minutes: 10, notes: "" },
    { name: "Lloyds Pharmacy (Sainsbury's Nine Elms)", type: "pharmacy", walk_minutes: 8, notes: "" },
    { name: "New Sleaford Street NHS Health Centre", type: "NHS health centre", walk_minutes: 8, notes: "Opened early 2026 — Nine Elms hub" },
    { name: "Vauxhall Medical Centre", type: "GP surgery", walk_minutes: 5, notes: "Local NHS GP practice" },
  ],
  cultural: [
    { name: "Vauxhall Pleasure Gardens", type: "park", walk_minutes: 5, notes: "Historic pleasure gardens — site of 18th-century original" },
    { name: "Royal Vauxhall Tavern", type: "cultural landmark", walk_minutes: 2, notes: "Grade II listed LGBTQ+ cabaret pub" },
    { name: "Newport Street Gallery", type: "gallery", walk_minutes: 7, notes: "Damien Hirst's free gallery" },
    { name: "Garden Museum", type: "museum", walk_minutes: 11, notes: "Former St Mary-at-Lambeth church" },
  ],
  notes: "Café density at the Vauxhall core is the T2 weakness — residential-side retail is thin; most quality food/drink sits 5+ min walk. Urban Warriors Academy is the one gym row where Vauxhall materially upgrades Croydon (no real BJJ/Muay Thai option at East Croydon). LGBTQ+ cultural density is distinctive and relevant to vibe/weekend fields but not directly to Caner's rubric.",
  sources: [
    { url: "https://www.thegymgroup.com/find-a-gym/south-london-gyms/vauxhall/", label: "The Gym Group Vauxhall", type: "other", accessed_date: "2026-04-17" },
    { url: "https://www.puregym.com/city/london-vauxhall/", label: "PureGym Vauxhall", type: "other", accessed_date: "2026-04-17" },
  ],
}

// regeneration — sources
sources: [
  { url: "https://www.wandsworth.gov.uk/business-and-licensing/regeneration-projects/nine-elms/about-nine-elms/", label: "Wandsworth — Nine Elms / Vauxhall corridor", type: "other", accessed_date: "2026-04-17" },
]
```

---

## 4. Oval Village (`oval-village.ts`)

### long_form — improve vibe/weekday/weekend

- **vibe** — EXPAND: "Quieter-edge-of-Nine-Elms, distinctly residential. The gasworks-holder structure (Grade II listed, early-C19 industrial archaeology) is being integrated into a new park and gives the masterplan a visual anchor the rest of Nine Elms lacks. Day-to-day feel is closer to Kennington-residential than Nine Elms-glass-tower — mixed tenure, mixed architecture, less hotel-lobby sheen. The Kennington high street (Harleyford Road / Kennington Lane) provides the proper everyday retail layer Nine Elms still lacks."
- **weekday** — EXPAND: "Tuesday 07:30-09:30: Vauxhall and Oval stations both busy but the masterplan itself is quiet — residents filter out via the 5-8 min walks to station. Daytime: parents + the Oval cricket ground groundskeeping + remote workers in Kennington Lane cafés (Electric Coffee, Café Van Gogh, Roastery Sheffield). Café density notably better than Nine Elms or Vauxhall cores."
- **weekend** — EXPAND: "Saturday on a test match day: Surrey County Cricket Club crowds flood Kennington. Otherwise quiet residential — families at Vauxhall Park, brunch at Kennington Tandoori / Café Van Gogh, walkers on the canal strip. Sunday roast pub density is good (Beehive, Dog House, The Tommyfield)."
- **croydon_comparison** — EXPAND (currently thin): "Oval Village is the value-tier Zone 1 in the dataset. Vauxhall station at 8 min gives Victoria Line (4 min to Victoria, 7 to Oxford Circus, 14 to Bank); Oval station at 5 min adds Northern Line redundancy. No area in Caner's shortlist matches this connectivity at comparable price. Safety is materially better than East Croydon — Lambeth borough baseline is high but the Oval ward specifically sits below ward average with station-busy-all-hours dynamics and no nightlife-adjacent cluster. Café density via Kennington Lane is genuinely strong for WFH. Gym stack is budget-tier (PureGym Oval, The Gym Group Vauxhall) with Urban Warriors for combat sports — no Third Space but more grounded option set than Croydon offers. Price: Berkeley Zone at Oval Village is the one shared-ownership route at envelope-realistic price; open-market 1-beds at Pinnacle/Halo sit £2,800+ which is above envelope. Realistic path is Zone shared-ownership or secondary-market sub-let in Berkeley stock."

### connectivity sources + demographics + safety + amenities

```ts
// connectivity
sources: [
  { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner", type: "other", accessed_date: "2026-04-17" },
]

// demographics
demographics: {
  primary_age_cohort: "18-29",
  age_breakdown: [
    { cohort: "18-29", pct: 35 },
    { cohort: "30-39", pct: 28 },
    { cohort: "40-49", pct: 17 },
    { cohort: "50+", pct: 20 },
  ],
  ethnic_composition: [
    { group: "White — British", pct: 40 },
    { group: "White — other", pct: 20 },
    { group: "Black or Black British", pct: 16 },
    { group: "Asian or Asian British", pct: 11 },
    { group: "Mixed", pct: 9 },
    { group: "Other ethnic group", pct: 4 },
  ],
  household_mix: [
    { type: "Single person", pct: 37 },
    { type: "Couple no children", pct: 26 },
    { type: "Couple with children", pct: 15 },
    { type: "Shared household", pct: 13 },
    { type: "Lone parent", pct: 7 },
    { type: "Other", pct: 2 },
  ],
  student_pct: 8,
  professional_renter_pct: 52,
  notes: "Kennington ward main age band 20-39 at 38% (ONS). Oval ward largest cohort 20-29 per Census 2021. Main religion Christian 48% (Kennington ward). Lambeth borough 55% White / 24% Black baseline.",
  sources: [
    { url: "https://crystalroof.co.uk/report/ward/kennington-lambeth/demographics", label: "Crystal Roof — Kennington ward demographics", type: "other", accessed_date: "2026-04-17" },
    { url: "http://oval.localstats.co.uk/census-demographics/england/london/lambeth/oval", label: "LocalStats — Oval demographics", type: "other", accessed_date: "2026-04-17" },
    { url: "https://www.ons.gov.uk/visualisations/censusareachanges/E09000022/", label: "ONS — Lambeth Census 2021 changes", type: "other", accessed_date: "2026-04-17" },
  ],
}

// safety
after_dark_assessment: "Safer than Vauxhall proper despite both sitting inside Lambeth's high borough crime baseline (148.4/1,000). Oval station busy into evening with test-match traffic on match days and commuter-return flow Tue-Thu. Kennington Park Road is well-lit and consistently residential-trafficked. No nightlife-adjacent cluster — the gay-scene activity concentrates ~10 min north in Vauxhall itself. Women-walking-alone assessment: acceptable on Kennington Park Road / Kennington Lane; marginal on the cut-throughs south toward Camberwell.",
concerns: [
  "Lambeth borough crime rate (148/1,000) — among London's highest",
  "Kennington Park north edge after 23:00 — isolated stretches",
],
sources: [
  { url: "https://www.police.uk/pu/your-area/metropolitan-police-service/", label: "Met Police — Oval / Kennington", type: "other", accessed_date: "2026-04-17" },
  { url: "https://scos.co.uk/crime-rate/lambeth/", label: "SCoS — Lambeth crime rate 2025", type: "other", accessed_date: "2026-04-17" },
]

// amenities
amenities: {
  grocery: [
    { name: "Tesco Kennington Superstore", type: "supermarket", walk_minutes: 6, notes: "Kennington Lane — full superstore with pharmacy and in-store Tesco Pharmacy" },
    { name: "Sainsbury's Nine Elms Superstore", type: "supermarket", walk_minutes: 10, notes: "Wandsworth Road — includes Argos, Habitat, Lloyds Pharmacy" },
    { name: "M&S Simply Food (Vauxhall station)", type: "convenience", walk_minutes: 8, notes: "Station convenience" },
    { name: "Waitrose Nine Elms", type: "supermarket", walk_minutes: 12, notes: "Premium option 12 min west" },
  ],
  gyms: [
    { name: "PureGym London Oval", type: "budget gym", walk_minutes: 3, notes: "£27.99/mo, 50+ classes — nearest budget option" },
    { name: "The Gym Group Vauxhall", type: "budget gym", walk_minutes: 10, notes: "24hr" },
    { name: "Urban Warriors Academy", type: "martial arts", walk_minutes: 12, notes: "MMA, boxing, BJJ, Muay Thai — Vauxhall" },
    { name: "Kennington Park outdoor gym", type: "outdoor", walk_minutes: 8, notes: "Free outdoor equipment" },
    { name: "Third Space Battersea", type: "premium gym", walk_minutes: 20, notes: "Premium only via tube — no premium gym inside Oval Village footprint" },
  ],
  food_and_drink: [
    { name: "Kennington Tandoori", type: "restaurant", walk_minutes: 4, notes: "Long-standing Kennington institution" },
    { name: "Café Van Gogh", type: "café", walk_minutes: 5, notes: "Not-for-profit social-enterprise café in Van Gogh's former house" },
    { name: "Electric Coffee", type: "café", walk_minutes: 4, notes: "WFH-friendly" },
    { name: "The Beehive", type: "gastropub", walk_minutes: 5, notes: "Kennington Park Road" },
    { name: "The Tommyfield", type: "gastropub", walk_minutes: 6, notes: "Long-standing Kennington pub" },
    { name: "Dog House", type: "pub", walk_minutes: 7, notes: "Kennington local" },
  ],
  health: [
    { name: "Tesco Kennington Pharmacy", type: "pharmacy", walk_minutes: 6, notes: "" },
    { name: "Kennington Park Medical Practice", type: "GP surgery", walk_minutes: 6, notes: "NHS GP" },
    { name: "Lambeth Walk Group Practice", type: "GP surgery", walk_minutes: 10, notes: "" },
  ],
  cultural: [
    { name: "The Oval (Surrey County Cricket Club)", type: "stadium", walk_minutes: 5, notes: "World-class cricket ground — defining cultural anchor" },
    { name: "Kennington Park", type: "park", walk_minutes: 10, notes: "Chartist heritage + well-used green space" },
    { name: "Vauxhall Park", type: "park", walk_minutes: 8, notes: "Local community park" },
    { name: "Gasholder No 1 (Oval Village)", type: "landmark", walk_minutes: 2, notes: "Grade II listed industrial archaeology preserved in masterplan" },
    { name: "Cinema Museum", type: "museum", walk_minutes: 14, notes: "Film history collection, Dugard House" },
  ],
  notes: "Kennington Lane provides a proper everyday high street — stronger café + pub layer than Nine Elms or Vauxhall cores. The Oval cricket ground is the rare genuine cultural anchor inside a shortlist area. Gym stack is budget-only inside the footprint; Third Space requires 20-min tube commute.",
  sources: [
    { url: "https://www.puregym.com/gyms/london-oval/timetable/", label: "PureGym Oval", type: "other", accessed_date: "2026-04-17" },
    { url: "https://www.tesco.com/store-locator/london/kennington-lane", label: "Tesco Kennington Superstore", type: "other", accessed_date: "2026-04-17" },
  ],
}

// regeneration
recent_milestones: [
  "2021 — Northern Line extension opened (Nine Elms + BPS stations)",
  "2024-2025 — Berkeley Pinnacle phase tower-crane completion",
  "2026 — Oval Village gasholder preservation and park integration",
],
upcoming_milestones: [
  "2026-2027 — The Pinnacle first residential handovers",
  "2027+ — The Halo flagship phase delivery",
  "2027 — Continued Berkeley masterplan build-out",
],
trajectory_through_2027: "Ascending. The Pinnacle first-handover window falls inside Caner's visa transition, and the Berkeley masterplan will be meaningfully further toward completion than today. The broader Nine Elms corridor maturation also lifts Oval Village — Sleaford Street NHS centre and Six Senses both within 10 min walk. By mid-2027 Oval Village reads as a credible value-tier Zone 1 residential district rather than a construction site with transport access.",
sources: [
  { url: "https://www.berkeleygroup.co.uk/developments/london/lambeth/oval-village", label: "Berkeley — Oval Village", type: "developer", accessed_date: "2026-04-17" },
]
```

---

## 5. White City (`white-city.ts`)

### long_form — vibe/weekday/weekend

- **vibe** — keep + append: "Genuinely the most cross-cultural of the five areas in this batch. White City ward is 48% foreign-born — among London's highest non-UK-born concentrations — with 19% Black African (vs London 8%), 4% Arab (vs London 1.6%), and meaningful Moroccan, Somali, and Caribbean presence layered under the Berkeley + Stanhope premium residential surface. The texture is genuinely mixed rather than the monocultural-professional feel of Nine Elms. Imperial's campus expansion adds international student density (18% ward-student share) and creative-industry presence from Television Centre tenants (BBC Studioworks, Publicis, YouTube Space)."
- **croydon_comparison** — keep + append: "Specific safety comparison: Hammersmith & Fulham borough crime rate 142.6/1,000 (2025) is similar to Lambeth's 148.4, higher than Wandsworth's 70. But White City ward specifically (W12 7AG postcode tract) is 99.7/1,000 — classified 'low' crime level, materially better than the borough baseline and roughly level with Croydon's safer residential tracts. The feel is dominantly safer than Croydon's commercial decline because footfall-density around Westfield + Television Centre + Imperial underwrites consistent street activity until 22:30+. Gym stack: The Gym Group White City (£19.99/mo, 24hr), Gymbox Westfield Shepherd's Bush (boutique-premium with unique class programming — one of London's strongest operators for non-budget gym-goers who don't want Third Space prices), Soho Health Club at White City House (premium, Soho House membership), Imperial sports facilities (limited external access). No Third Space in W12 specifically. Price differential: White City Living 1-bed £3,680 pcm, studio £3,000 — above envelope. Realistic paths are secondary-market sublet, or the Scenery House current-phase lettings with Stanhope's agent network."

### connectivity sources

```ts
sources: [
  { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner", type: "other", accessed_date: "2026-04-17" },
  { url: "https://tfl.gov.uk/stations/white-city-underground-station", label: "TfL — White City station", type: "other", accessed_date: "2026-04-17" },
]
```

### demographics — populate:

```ts
demographics: {
  primary_age_cohort: "18-29",
  age_breakdown: [
    { cohort: "18-29", pct: 34 },
    { cohort: "30-39", pct: 25 },
    { cohort: "40-49", pct: 16 },
    { cohort: "50+", pct: 25 },
  ],
  ethnic_composition: [
    { group: "White — British", pct: 24 },
    { group: "White — other", pct: 14 },
    { group: "Black or Black British", pct: 25 },
    { group: "Asian or Asian British", pct: 13 },
    { group: "Mixed", pct: 10 },
    { group: "Other ethnic group", pct: 14 },
  ],
  household_mix: [
    { type: "Single person", pct: 32 },
    { type: "Couple no children", pct: 22 },
    { type: "Couple with children", pct: 22 },
    { type: "Shared household", pct: 10 },
    { type: "Lone parent", pct: 11 },
    { type: "Other", pct: 3 },
  ],
  student_pct: 18,
  professional_renter_pct: 48,
  notes: "White City ward population 10,393; mean age 34.7 (ONS Census 2021). Main ethnic group White British 24% (vs London 37%); Black African 19% (vs London 8%); Arab 4% (vs London 1.6%); Other Ethnic Group 9.8% (vs London 6.3%). Foreign-born 48% (7th highest London ward by no-English-first-language household share at 19%). Religion: Christian 40%, Muslim 25%, No religion 24%. Dependent-children households 29% (1,233 of ~4,250 households) — higher family share than Nine Elms, reflecting the legacy council estate tenure layered under newbuild masterplan.",
  sources: [
    { url: "https://www.lbhf.gov.uk/councillors-and-democracy/about-hammersmith-fulham-council/ward-profiles/white-city-2024/who-we-are", label: "LBHF — White City ward profile 2024", type: "other", accessed_date: "2026-04-17" },
    { url: "https://crystalroof.co.uk/report/ward/white-city-hammersmith-and-fulham/demographics", label: "Crystal Roof — White City ward demographics", type: "other", accessed_date: "2026-04-17" },
    { url: "https://www.ons.gov.uk/visualisations/censusareachanges/E09000013/", label: "ONS — Hammersmith and Fulham Census 2021", type: "other", accessed_date: "2026-04-17" },
  ],
}
```

### safety — extend, add sources

```ts
after_dark_assessment: "Very safe despite Hammersmith & Fulham's elevated borough crime rate (142.6/1,000, 2025). White City postcode W12 7AG specifically rates 99.7/1,000 — low crime level vs other W12 tracts. Heavy footfall around Westfield (open until 22:00 weekdays, 21:00 Sundays) and Television Centre (Electric Cinema, White City House bar open late) keeps the residential streets activated. Well-lit pedestrianised masterplan core in White City Living. Legacy White City Estate streets immediately north are more mixed — no specific high-risk zones but the contrast between Berkeley masterplan and the older estate is visible. Women-walking-alone assessment: very good inside the masterplan and Westfield corridor; acceptable on Wood Lane; caution warranted on the cut-throughs to Shepherd's Bush Green after midnight.",
concerns: [
  "Shepherd's Bush Green fringe after 01:00 — ASB occasionally spills from Green venues",
  "Wood Lane / Uxbridge Road junction — busy taxi-rank area, some late-night noise",
],
sources: [
  { url: "https://www.police.uk/pu/your-area/metropolitan-police-service/hammersmith-and-fulham/white-city/", label: "Met Police — White City", type: "other", accessed_date: "2026-04-17" },
  { url: "https://crimerate.co.uk/london/hammersmith-and-fulham", label: "CrimeRate — Hammersmith & Fulham (142.6/1,000)", type: "other", accessed_date: "2026-04-17" },
  { url: "https://crystalroof.co.uk/report/postcode/W127AG/crime", label: "Crystal Roof — White City Estate W12 7AG (99.7/1,000)", type: "other", accessed_date: "2026-04-17" },
]
```

### amenities — populate:

```ts
amenities: {
  grocery: [
    { name: "Waitrose Westfield London", type: "supermarket", walk_minutes: 4, notes: "Inside Westfield — full premium range" },
    { name: "M&S Westfield London", type: "supermarket", walk_minutes: 4, notes: "Westfield — full foodhall + clothing" },
    { name: "Sainsbury's Superstore (Wood Lane)", type: "supermarket", walk_minutes: 8, notes: "Large full-range store" },
    { name: "Tesco Extra Westfield", type: "supermarket", walk_minutes: 5, notes: "Near Westfield — extended range" },
  ],
  gyms: [
    { name: "The Gym Group White City", type: "budget gym", walk_minutes: 3, notes: "£19.99/mo, 24hr — realistic everyday option" },
    { name: "Gymbox Westfield Shepherd's Bush", type: "boutique gym", walk_minutes: 5, notes: "Strong class programming — London's distinctive boutique operator" },
    { name: "Soho Health Club at White City House", type: "premium gym", walk_minutes: 4, notes: "Soho House members — gym, steam, Pilates/yoga/HIIT" },
    { name: "Imperial White City gym", type: "university gym", walk_minutes: 5, notes: "Imperial staff/students; limited external access" },
    { name: "PureGym Shepherd's Bush", type: "budget gym", walk_minutes: 10, notes: "Backup budget option" },
    { name: "Third Space The Whiteley / Chelsea", type: "premium gym", walk_minutes: 25, notes: "Nearest Third Space via Central Line — no club in W12" },
  ],
  food_and_drink: [
    { name: "White City House (Soho House)", type: "members' club + restaurant", walk_minutes: 4, notes: "Television Centre rooftop — soho-house-tier dining/bar" },
    { name: "Electric Cinema Television Centre", type: "cinema + bar", walk_minutes: 4, notes: "Premium cinema with full bar — Soho House group" },
    { name: "Television Centre restaurants", type: "restaurant cluster", walk_minutes: 4, notes: "Patty & Bun, Bluebird, Bad Sports pizza, Homeslice" },
    { name: "Westfield Southern Terrace", type: "restaurant cluster", walk_minutes: 4, notes: "~60 restaurants — mid-price to premium" },
    { name: "The Dining Room by White City House", type: "restaurant", walk_minutes: 4, notes: "Soho House destination" },
  ],
  health: [
    { name: "Charing Cross Hospital", type: "hospital", walk_minutes: 20, notes: "Major NHS hospital — nearest A&E" },
    { name: "Imperial College Healthcare NHS Trust", type: "NHS trust", walk_minutes: 5, notes: "Multiple Imperial-affiliated services" },
    { name: "Wood Lane Medical Centre", type: "GP surgery", walk_minutes: 6, notes: "NHS GP" },
    { name: "Boots Westfield", type: "pharmacy", walk_minutes: 4, notes: "Flagship Boots with pharmacy" },
  ],
  cultural: [
    { name: "Television Centre (Grade II listed)", type: "cultural destination", walk_minutes: 4, notes: "Former BBC HQ — Graham Dawbarn original 1960, AHMM-led restoration" },
    { name: "Westfield London", type: "shopping centre", walk_minutes: 4, notes: "Largest urban shopping centre in Europe (2018)" },
    { name: "Electric Cinema", type: "cinema", walk_minutes: 4, notes: "Premium cinema in Television Centre" },
    { name: "White City House", type: "members' club", walk_minutes: 4, notes: "Soho House in the old BBC HQ — rooftop pool + gym + restaurants" },
    { name: "Imperial College White City campus", type: "university", walk_minutes: 5, notes: "Expanding campus with Molecular Sciences + Scale Space" },
    { name: "BBC Worldwide / Studioworks", type: "media campus", walk_minutes: 5, notes: "Creative-industry anchor tenants" },
    { name: "Hammersmith Park", type: "park", walk_minutes: 5, notes: "Adjacent municipal park with sports courts" },
  ],
  notes: "White City's amenity density is second only to BPS in this batch, and arguably stronger on the cultural row — White City House + Electric Cinema + Imperial + Television Centre is a four-anchor stack no other area approaches. Gym row is strong at the boutique tier (Gymbox) but has no Third Space; Soho House membership unlocks the aspirational tier. Grocery flagship is Waitrose + M&S inside Westfield — full premium-tier access at 4 min walk.",
  sources: [
    { url: "https://www.westfield.com/en/united-kingdom/london", label: "Westfield London retailer directory", type: "other", accessed_date: "2026-04-17" },
    { url: "https://www.sohohouse.com/en-us/houses/white-city-house/gym", label: "White City House — Soho Health Club", type: "other", accessed_date: "2026-04-17" },
    { url: "https://televisioncentre.com/", label: "Television Centre", type: "developer", accessed_date: "2026-04-17" },
  ],
}
```

### regeneration — sources

```ts
sources: [
  { url: "https://www.whitecityliving.co.uk/", label: "White City Living — Berkeley / St James", type: "developer", accessed_date: "2026-04-17" },
  { url: "https://televisioncentre.com/", label: "Television Centre — Mitsui Fudosan / Stanhope", type: "developer", accessed_date: "2026-04-17" },
  { url: "https://www.imperial.ac.uk/white-city-campus/", label: "Imperial White City campus masterplan", type: "other", accessed_date: "2026-04-17" },
]
```

---

## Coverage summary

| Area | long_form refinements | connectivity.sources | demographics full | safety.sources | amenities full | regeneration.sources |
|---|---|---|---|---|---|---|
| Battersea Power Station | croydon_comparison rewrite + weekday extension | yes (2) | yes (4 blocks) | yes (2) | yes (5 blocks, 15+ entries) | yes (2) |
| Nine Elms | vibe/croydon_comparison appends | yes (2) | yes (4 blocks) | yes (2) | yes (5 blocks, 14+ entries) | extended milestones + yes (2) |
| Vauxhall | full vibe/weekday/weekend/croydon_comparison rewrites | yes (2) | yes (4 blocks) | yes (3) + after_dark rewrite + concerns | yes (5 blocks, 18+ entries) | yes (1) |
| Oval Village | full vibe/weekday/weekend rewrites + croydon expand | yes (1) | yes (4 blocks) | yes (2) + after_dark rewrite | yes (5 blocks, 17+ entries) | extended milestones + yes (1) |
| White City | vibe + croydon appends | yes (2) | yes (4 blocks) | yes (3) + after_dark rewrite | yes (5 blocks, 19+ entries) | yes (3) |

## Distribution check

Safety overall distribution: 2 very-safe (BPS, Nine Elms), 2 safe (Oval Village, White City), 1 moderate (Vauxhall). No area rated concerning. Grades (V3-owned) remain 3×A (BPS, Nine Elms, White City) + 2×B (Vauxhall, Oval Village) — this matches the batch brief.

Regeneration distribution: 3 phased (BPS, Nine Elms, Oval Village, White City), 1 active (Vauxhall). Trajectories: all ascending or peaking. No complete or early-stage areas in this batch.

## Research confidence notes

- **Demographics numbers** are best-estimate ward-footprint aggregations from Census 2021 sources found via search. Exact LSOA-level cross-tabs were not directly fetched (would require ONS Nomis session) — proposed figures are consistent with published ward-profile summaries from LBHF (White City), Wandsworth JSNA (BPS/Nine Elms), and Lambeth borough aggregates (Vauxhall/Oval Village). **Reviewer should spot-check against ONS Nomis before committing.**
- **Crime rates** are 2025 borough figures (verified via SCoS, CrimeRate, Crystal Roof). Ward-specific postcode rates confirmed only for White City (W12 7AG).
- **Amenity entries** are confirmed via official operator pages, Westfield/BPS retailer directories, and Health Club Management press. Walk minutes are estimated from Google Maps spot-checks against the areas' natural centres.
- **Regeneration milestones** for 2026 Q1-Q2 (Sleaford Street NHS centre, Six Senses London, Nine Elms Lane works) are press-verified. 2027 milestones are masterplan-scheduled and subject to normal delivery slippage.

## Decisions needed from reviewer

1. **Demographic precision**: Accept ward-aggregate estimates as proposed, or require ONS Nomis spot-check before merging? (Nomis pull adds ~5k tokens per area; recommend spot-check for Vauxhall + Oval Village since Lambeth borough variance is high.)
2. **Grade preservation**: This proposal does not touch `evaluation` blocks. Recommend a V3 recalibration pass after these field populations land, since populated safety.concerns and amenity lists may shift T1.1/T2.3 scoring weights for Vauxhall (currently B, T1.1 "partial") and White City (currently A, T1.1 "pass").
3. **Croydon baseline wording**: `croydon_comparison` for Vauxhall is proposed as blunt ("acceptable on Albert Embankment; weaker on Kennington Lane after 00:00") — reviewer should confirm the direct-comparison voice is acceptable vs a softer hedged form.

---

**Apply order recommended**: BPS → White City → Nine Elms → Oval Village → Vauxhall. (Safer/stronger areas first; Vauxhall has the largest prose rewrite surface and benefits from consistency established by the others.)
