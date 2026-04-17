import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const elephantPark: Area = {
  id: "elephant-park",
  name: "Elephant Park",
  aliases: ["Elephant & Castle", "Lendlease masterplan"],
  borough: "Southwark",
  postcodes: ["SE17"],

  headline:
    "Lendlease's near-complete Zone 1 masterplan around a brand new two-acre park — Northern + Bakerloo on the doorstep, Palace Skatepark, 4.35/5 on Homeviews.",
  preview:
    "A Zone 1 neighbourhood centred on a two-acre park. The Lendlease footprint is self-contained and well-managed. 13,000 sqm of retail, cafes, restaurants are open. Northern + Bakerloo on the doorstep. The Wilderly is the final phase, completing mid-2026. Palace opened a skatepark here in Autumn 2025.",

  long_form: {
    full: "Elephant Park is a Zone 1 neighbourhood centred around a two-acre park — one of the largest new green spaces created in central London in over 70 years. The Lendlease footprint is self-contained and well-managed: 13,000 sqm of retail, cafes, and restaurants are open, and the Northern and Bakerloo lines are both on the doorstep. The Wilderly is the final phase — a 25-storey tower with SkyLounge, communal gym, and elevated garden, completing mid-2026. Palace Skatepark at the southern edge of the masterplan signals exactly what demographic Lendlease has been targeting. Rated 4.35/5 on Homeviews, which is strong for Zone 1 new-build.",
    history: "The Heygate Estate (a notorious 1970s council estate) was demolished from 2011, and Lendlease took on the masterplan. The first phases delivered from 2014; the masterplan is now substantially complete.",
    vibe: "Compact and walkable. Less polished than King's Cross or BPS but more honest. The Palace skatepark and the cultural mix of the wider Elephant & Castle area give it real urban character that pure new-build districts lack.",
    weekday: "A Tuesday at 7pm: the park is busy with after-work joggers and dog walkers; the retail core is active; the Northern and Bakerloo lines pulse through Elephant & Castle station.",
    weekend: "A Saturday: park crowds, skatepark crowds, food stall activity, and the surrounding Elephant & Castle market culture spilling into the masterplan.",
    notable: "The two-acre central park, Palace Skatepark, The Wilderly tower, the rebuilt Castle Square retail.",
    croydon_comparison: "Elephant Park is closer to Croydon geographically and culturally than most other entries — both are dense, mixed, multi-ethnic areas. The differences are: Zone 1 vs Zone 5, Lendlease management vs fragmented private rentals, modern public realm vs deteriorating, Northern + Bakerloo vs overground-only.",
  },

  zones: ["Zone 1"],
  connectivity: {
    lines: [
      { name: "Northern", type: "tube" },
      { name: "Bakerloo", type: "tube" },
      { name: "Thameslink", type: "rail" },
    ],
    primary_stations: [
      { name: "Elephant & Castle", lines: ["Northern", "Bakerloo"], walk_minutes_from_centre: 3 },
      { name: "Elephant & Castle (National Rail / Thameslink)", lines: ["Thameslink"], walk_minutes_from_centre: 5 },
    ],
    times_to_anchors: { city_of_london: 12, canary_wharf: 25, soho_fitzrovia: 12, kings_cross_shoreditch: 14 },
    multi_cluster_score: 4,
    redundancy_score: 3,
    notes: "Two tube lines through a single interchange plus Thameslink rail. Zone 1 with 12-14 min to three central anchors via the Northern and Bakerloo. Canary Wharf is the slowest anchor at 25 min. Bakerloo Line Extension to Old Kent Road / Lewisham is under TWAO process but not deliverable before early 2030s — not a factor in Caner's 2026-2028 window. Northern Line night tube runs Fri/Sat. Elephant & Castle station is undergoing a major rebuild as part of the wider regeneration — partial disruption through 2026.",
    sources: [
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/tube-dlr-overground/stops/940GZZLUEAC/elephant-castle-underground-station", label: "TfL — Elephant & Castle station", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/travel-information/improvements-and-projects/bakerloo-line-extension", label: "TfL — Bakerloo Line Extension", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 33 },
      { cohort: "30-39", pct: 34 },
      { cohort: "40-49", pct: 14 },
      { cohort: "50+", pct: 19 },
    ],
    ethnic_composition: [
      { group: "White", pct: 39 },
      { group: "Black or Black British", pct: 26 },
      { group: "Asian or Asian British", pct: 18 },
      { group: "Mixed", pct: 9 },
      { group: "Other ethnic group", pct: 8 },
    ],
    household_mix: [
      { type: "Single person", pct: 35 },
      { type: "Couple no children", pct: 22 },
      { type: "Couple with children", pct: 15 },
      { type: "Lone parent", pct: 11 },
      { type: "Shared household", pct: 14 },
      { type: "Other", pct: 3 },
    ],
    student_pct: 14,
    professional_renter_pct: 50,
    notes: "Elephant & Castle has the highest Latin American concentration in the UK — the area around the old shopping centre (now demolished, relocated to Castle Square) is known as 'London's Latin Quarter'. Census 2021 'Other ethnic group' at 8% partly reflects this Hispanic/Latino community. Strong student presence from London College of Communication (UAL) and London South Bank University within 10 min walk. Age split is remarkably even between 18-29 and 30-39 cohorts — dual character as student area and early-career-professional area.",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021 — Newington ward, Southwark", type: "ons", accessed_date: "2026-04-17" },
      { url: "https://www.ons.gov.uk/visualisations/censusareachanges/E05011098/", label: "ONS — Newington ward changes", type: "ons", accessed_date: "2026-04-17" },
      { url: "https://www.southwark.gov.uk/council-and-democracy/data-and-statistics", label: "Southwark — data and statistics", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "safe",
    crime_vs_borough: "average",
    crime_vs_croydon: "safer",
    after_dark_assessment: "Within the Lendlease masterplan footprint (Elephant Park, Castle Square, Trafalgar Place, Park & Sayer, West Grove), very safe and well-lit with stewardship by Lendlease under a management agreement with Southwark Council. Outside the immediate footprint, the wider Elephant & Castle area has historically been rougher — particularly the Heygate/Walworth approach and the Elephant Road corridor — and is slowly improving with regeneration. Women-walking-alone assessment: comfortable within the Lendlease footprint and around Castle Square; mixed on New Kent Road and Elephant Road late evening. The Northern line station area has active late-night economy which reads as lively-but-monitored rather than menacing.",
    concerns: [
      "New Kent Road and Elephant Road corridors outside the masterplan footprint",
      "Heygate/Walworth Road approach — slowly improving but not yet at Lendlease-footprint standard",
      "Station rebuild works through 2026 create some uneven pedestrian routes",
    ],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police-service/newington/", label: "Met Police — Newington", type: "met-police", accessed_date: "2026-04-17" },
      { url: "https://www.southwark.gov.uk/community-safety", label: "Southwark — community safety", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: false,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Elephant Park", size_acres: 2, walk_minutes: 1, notes: "The two-acre central park; one of the largest new green spaces created in central London in 70 years; open lawn plus play and event areas" },
      { name: "Geraldine Mary Harmsworth Park (Imperial War Museum)", size_acres: 17, walk_minutes: 10, notes: "Victorian park surrounding the IWM; excellent jogging loop" },
      { name: "Burgess Park", size_acres: 140, walk_minutes: 14, notes: "Major Southwark park to the south; lake, sports facilities, cycle paths" },
      { name: "Kennington Park", size_acres: 40, walk_minutes: 12, notes: "Victorian park to the west; flower gardens and sports courts" },
    ],
    overall_assessment: "The central Elephant Park is compact (2 acres) but genuinely well-designed and is the area's headline T2.4 amenity — the largest new green space delivered in central London in 70 years. For larger green, Burgess Park (140 acres) and Geraldine Mary Harmsworth (17 acres) are both within 10-14 min walk. Kennington Park adds another option. No river, canal, or dock — green-without-water is the green proposition here.",
    sources: [
      { url: "https://www.southwark.gov.uk/parks-and-open-spaces", label: "Southwark parks", type: "council", accessed_date: "2026-04-17" },
      { url: "https://www.iwm.org.uk/visits/iwm-london", label: "Imperial War Museum London", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.elephantpark.co.uk/explore/park/", label: "Elephant Park — Explore Park", type: "developer", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Sainsbury's Elephant & Castle", type: "supermarket", walk_minutes: 5, notes: "Full-size Sainsbury's at Castle Square; everyday shop" },
      { name: "Tesco Superstore New Kent Road", type: "supermarket", walk_minutes: 10, notes: "Hypermarket scale; weekly shop" },
      { name: "Aldi Walworth Road", type: "supermarket", walk_minutes: 12, notes: "Budget option on Walworth Road" },
      { name: "Castle Square traders", type: "Latin American + independents", walk_minutes: 4, notes: "25+ relocated Latin American traders plus independents; fresh produce, specialist groceries" },
    ],
    gyms: [
      { name: "PureGym Elephant & Castle", type: "budget gym", walk_minutes: 4, notes: "24/7, inside the masterplan; £30/mo" },
      { name: "The Castle Centre", type: "leisure centre", walk_minutes: 4, notes: "Council-run; pool, gym, climbing wall (the climbing wall is a genuine draw)" },
      { name: "The Gym Group Elephant & Castle", type: "budget gym", walk_minutes: 6, notes: "24/7 alternative" },
      { name: "Kaya Gym Elephant", type: "boutique", walk_minutes: 7, notes: "Strength + conditioning focus; small group training" },
      { name: "Fitness First Elephant & Castle", type: "mid-tier gym", walk_minutes: 7, notes: "Pool + gym + classes" },
      { name: "Big Thigh Energy / Boxercise Elephant", type: "boxing", walk_minutes: 10, notes: "Boxing-specific classes — Caner-relevant" },
      { name: "The Wilderly communal gym (on completion mid-2026)", type: "resident", walk_minutes: 0, notes: "New resident gym in final Lendlease phase" },
    ],
    food_and_drink: [
      { name: "Castle Square", type: "food market", walk_minutes: 4, notes: "Relocated Latin American food court plus independents; the area's distinctive character" },
      { name: "Mercato Metropolitano (Elephant & Castle)", type: "food hall", walk_minutes: 8, notes: "Italian food market with wider international traders; weekend destination" },
      { name: "Spanish Pink (La Bodeguita)", type: "Colombian restaurant", walk_minutes: 4, notes: "Castle Square; Latin American food cluster" },
      { name: "Del Trevi", type: "bar", walk_minutes: 5, notes: "Independent cocktail bar" },
      { name: "Corsica Studios", type: "club / live music", walk_minutes: 5, notes: "Independent music venue" },
    ],
    health: [
      { name: "Nexus Health Group (Elephant Park)", type: "NHS GP", walk_minutes: 2, notes: "Inside the masterplan; accepts registrations" },
      { name: "Dr Shahid & Partners", type: "NHS GP", walk_minutes: 6, notes: "Alternative GP registration" },
      { name: "Boots Pharmacy Castle Square", type: "pharmacy", walk_minutes: 4, notes: "Full NHS services" },
      { name: "Guy's Hospital", type: "NHS hospital", walk_minutes: 8, notes: "Via Northern to London Bridge — A&E, full secondary care" },
      { name: "St Thomas' Hospital", type: "NHS hospital", walk_minutes: 10, notes: "A&E, alternative" },
    ],
    cultural: [
      { name: "Imperial War Museum", type: "museum", walk_minutes: 10, notes: "National museum; free entry; strong permanent collection" },
      { name: "Palace Skatepark", type: "skate park", walk_minutes: 5, notes: "Opened 2025; signals area's young-urban character" },
      { name: "Corsica Studios", type: "music venue", walk_minutes: 5, notes: "Independent club programming" },
      { name: "Ministry of Sound", type: "nightclub", walk_minutes: 8, notes: "Landmark nightclub" },
      { name: "London College of Communication (UAL)", type: "university campus", walk_minutes: 5, notes: "Student presence and public exhibitions" },
    ],
    notes: "Cultural character is a blend of Latin American heritage (Castle Square traders, restaurants), young-urban-skate (Palace Skatepark, Corsica Studios, Ministry of Sound), and student (LCC, LSBU). Imperial War Museum at 10 min is the national-museum anchor. The mix is notably different from other dataset areas — less polished, more grown-from-the-ground, genuinely mixed demographics at street level.",
    sources: [
      { url: "https://www.elephantpark.co.uk/explore/shops/", label: "Elephant Park — Shops", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://castlesquareelephant.com/", label: "Castle Square", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.puregym.com/gyms/elephant-and-castle/", label: "PureGym Elephant & Castle", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.better.org.uk/leisure-centre/london/southwark/thecastlecentre", label: "The Castle Centre", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: {
    status: "phased",
    investment_pipeline: "Lendlease's £2.3bn Elephant Park masterplan is in final-phase delivery. Total masterplan: ~3,000 homes across ~28 acres on the former Heygate Estate footprint. The Wilderly — a 25-storey tower and 11-storey mansion block, 354 homes — is the final residential phase, completing mid-2026. Parallel pipeline: Delancey's Elephant One development (the former shopping centre site, now redeveloped as mixed-use with London College of Communication expansion); Elephant Road and Rockingham St pipeline projects through 2030.",
    recent_milestones: [
      "2014-2016 — Trafalgar Place delivered (won Best New Place to Live, London Planning Awards)",
      "2017-2020 — South Gardens and central Elephant Park delivered",
      "2020-2022 — West Grove delivered",
      "2022-2024 — Park & Sayer delivered (BTR)",
      "2025 — Castle Square permanent relocation completed",
      "2025 — Palace Skatepark opened",
      "2024-2025 — Old shopping centre demolition and replacement development active",
    ],
    upcoming_milestones: [
      "Mid-2026 — The Wilderly completion (final Lendlease phase)",
      "2026 — LCC expansion completes at Elephant One site",
      "2026-2028 — Elephant Road and Rockingham St adjacent pipeline (non-Lendlease)",
    ],
    trajectory_through_2027: "Substantially complete by 2027. The Wilderly completes mid-2026 and the masterplan reaches its full ~3,000 homes. The wider Elephant & Castle area continues to consolidate through 2027 (LCC expansion, Elephant Road pipeline) but the Lendlease masterplan itself is at or near peak rather than sharply ascending. Of the five areas in this batch, Elephant Park has the most mature near-term trajectory — it's arriving at steady state rather than accelerating.",
    sources: [
      { url: "https://www.elephantpark.co.uk/the-masterplan/", label: "Elephant Park — Masterplan", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.southwark.gov.uk/planning/planning-policy/area-action-plans/elephant-and-castle-area-action-plan", label: "Southwark — Elephant & Castle AAP", type: "council", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Within the Lendlease masterplan, very safe — Southwark crime at borough average but the footprint itself is well-stewarded and well-lit. Safer than Croydon on every material metric.",
        "1.2": "Trafalgar Place, South Gardens, Park & Sayer, West Grove, and The Wilderly are all purpose-built modern Lendlease stock from 2014 onwards. No pre-war stock inside the masterplan.",
        "1.3": "Northern + Bakerloo both at Elephant & Castle station put the City at 12, Soho at 12, King's Cross at 14. Zone 1 with two tube lines.",
        "1.4": "Lendlease runs the BTR and managed rental components under a single operator with corporate referencing — active professional rental market at scale.",
        "1.5": "Recently delivered public realm — Castle Square, the central park, and the residential streets are all maintained by Lendlease under a stewardship agreement with the council.",
        "1.6": "Not in decline — the masterplan is in final delivery (The Wilderly completing mid-2026) and the wider Elephant & Castle transformation continues to consolidate.",
      },
      "strong",
      "T1 clean.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "partial", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Sainsbury's, Castle Square retail, pharmacy, gym, food market, and the central park all within 5 minutes. Dense 15-minute neighbourhood already delivered.",
        "2.2": "Sainsbury's plus the food market and the wider Elephant & Castle market culture give strong fresh-food access; the Walworth Road independents are walkable.",
        "2.3": "Multiple gyms within the masterplan footprint plus The Wilderly's communal gym; the wider Elephant area has additional commercial options.",
        "2.4": "Two-acre park is the only green amenity; no water. One of the largest new parks in central London in 70 years but still a single feature rather than a riverside identity.",
        "2.5": "Residential streets calm after 10pm within the masterplan; the wider Elephant area has more late-night activity but the Lendlease footprint is reliably quiet.",
        "2.7": "Primary cohort 30-39 with strong student presence (London College of Communication, South Bank University) and young professional renter base via the BTR blocks.",
      },
      "good",
      "Strong on most T2 rows.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "partial", "3.3": "partial", "3.4": "pass", "3.5": "pass", "3.6": "pass" },
      {
        "3.1": "Lendlease masterplan in final phase delivery (The Wilderly mid-2026) — visibly ongoing investment with Palace Skatepark and Castle Square recent additions.",
        "3.2": "Cultural anchor sits more with the wider Elephant & Castle area (market culture, LCC, Palace Skatepark) than with the Lendlease masterplan itself.",
        "3.3": "'Elephant & Castle' has strong name recognition in London but the 'Elephant Park' brand is less distinct — the wider Elephant identity dominates.",
        "3.4": "Dense Zone 1 15-minute completeness — supermarket, gym, retail, park, healthcare, cultural all on foot. The masterplan hits 3.4 cleanly.",
        "3.5": "Lendlease delivered a coherent, intentional masterplan with award-winning phases (Trafalgar Place won Best New Place to Live). Architectural quality is solid without being signature.",
        "3.6": "Day/night rhythm is good — the retail core is active evenings, park sees post-work use, and the broader Elephant area keeps the district alive.",
      },
      "good",
      "Cultural anchor is the wider Elephant area more than Lendlease's masterplan itself.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "partial", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 4/5 — Northern + Bakerloo reach the City, West End, and KX cleanly; Canary Wharf at 25 minutes is the only slow anchor.",
        "5.2": "Two independent tube lines (Northern + Bakerloo) at the same interchange give genuine line-failure redundancy.",
        "5.3": "Trajectory is mature rather than sharply ascending — The Wilderly is the final phase and the masterplan will be substantially complete by 2027.",
        "5.4": "Quiet third spaces are thin inside the masterplan — some cafes in Castle Square but no deep bookshop or library culture.",
      },
      "good",
      "Decent T5 — multi-cluster + redundancy good, trajectory mature.",
    ),
    overall_grade: "A",
    grade_reasoning: "A grade on the strength of T1+T2 and decent T3+T5. Northern+Bakerloo connectivity and Zone 1 location are real wins.",
  },

  // ── RESEARCH: Elephant Park projects ─────────────────────────────────
  // Lendlease / Living by Lendlease:
  //   Referencing: unknown (not publicly documented)
  //   Agreement type: ast
  //   Prices: UNVERIFIED — Lendlease Living website does not list prices publicly
  //   Cost tier: premium (Zone 1 SE17)
  //   Grad visa realism: unknown
  //
  // Get Living (Elephant Central):
  //   Referencing: homeppl (confirmed — Get Living is known Homeppl user)
  //   Open Banking: true
  //   Professional guarantor: true (Homeppl Guarantid)
  //   Agreement type: ast
  //   International friendly: yes
  //   Visa friendly: yes
  //   Prices: 2-bed from £2,975 pcm (as listed in preview)
  //   Cost tier: premium
  //   Grad visa realism: achievable
  // ───────────────────────────────────────────────────────────────────────

  projects: [
    buildProject({
      id: "trafalgar-place", area_id: "elephant-park", name: "Trafalgar Place", developer: "Lendlease", operator: "Lendlease", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "First completed phase. Won Best New Place to Live at the London Planning Awards. Sets the quality benchmark.",
      amenity_tier: "strong", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Lendlease's first Elephant Park phase and the award-winning benchmark. Won Best New Place to Live at the London Planning Awards.",
        t4_1_amenity_package: "Strong shared amenities consistent with Lendlease's masterplan spec — residents' lounges, gym access, concierge.",
        t4_4_signature_arch: "Not named-architect signature but award-recognised as a place-making achievement.",
      },
    }),
    buildProject({
      id: "south-gardens", area_id: "elephant-park", name: "South Gardens", developer: "Lendlease", operator: "Lendlease", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Earlier Elephant Park phase framing the park itself. Strongest expression of the central green-space concept.",
      amenity_tier: "strong", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Lendlease delivery framing the two-acre park — modern building services, park-facing layouts.",
        t4_1_amenity_package: "Strong shared amenity package with direct park access as the headline feature.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    buildProject({
      id: "park-sayer", area_id: "elephant-park", name: "Park & Sayer", developer: "Lendlease + Daiwa House", operator: "Lendlease", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "Recently completed BTR phase on the southern edge. Consistently strong Homeviews scores.",
      amenity_tier: "strong", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Recent BTR delivery with consistently strong Homeviews scores — Lendlease/Daiwa House collaboration at current specification.",
        t4_1_amenity_package: "Strong BTR amenity stack — gym, lounges, concierge — consistent with Lendlease masterplan standard.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    buildProject({
      id: "west-grove", area_id: "elephant-park", name: "West Grove", developer: "Lendlease", operator: "Lendlease", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Later phase wrapping retail and public realm into the core. More urban and integrated.",
      amenity_tier: "strong", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Later Lendlease phase with full modern specification and integrated retail base.",
        t4_1_amenity_package: "Strong shared amenities with the advantage of direct retail integration at ground floor.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    buildProject({
      id: "the-wilderly", area_id: "elephant-park", name: "The Wilderly", developer: "Lendlease + Daiwa House", operator: "Lendlease", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Final phase completing mid-2026. 25-storey tower + 11-storey mansion block. SkyLounge, communal gym, elevated garden.",
      amenity_tier: "premium", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Final masterplan phase completing mid-2026 to the highest current Lendlease specification — 25-storey tower plus 11-storey mansion block.",
        t4_1_amenity_package: "SkyLounge, communal gym, elevated garden — the most premium amenity stack in the Elephant Park masterplan.",
        t4_4_signature_arch: "Distinctive silhouette and elevated garden feature but not a named-architect signature piece.",
      },
    }),
    buildProject({
      id: "elephant-central", area_id: "elephant-park", name: "Elephant Central", developer: "Lendlease", operator: "Get Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable",
      preview: "374 rental homes operated by Get Living, adjacent to the Lendlease Elephant Park masterplan. Buildings: Mawes House, Raglan House, Tantallon House. Get Living in-house referencing — BTR model, likely visa-friendly. 2-bed from £2,975 pcm. Adjacent to Castle Square with 25+ local traders.",
      amenity_tier: "decent", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Lendlease construction, Get Living management. 2020-2021 completion. Up to ~20 storeys.",
        t4_1_amenity_package: "Shared club room, outdoor courtyard spaces, free bike storage, underground car parking, key card entry.",
        t4_4_signature_arch: "Not signature-authored. Consistent with Lendlease masterplan quality.",
      },
    }),
  ],

  external_links: [
    { url: "https://www.elephantpark.co.uk/", label: "Elephant Park official", type: "developer", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

// ── Project external links & price transparency ──────────────────────────
const trafalgarPlace = elephantPark.projects.find(p => p.id === "trafalgar-place")!;
trafalgarPlace.external_links = [
  { url: "https://www.lendleaseliving.co.uk/to-rent/", label: "Lendlease Living — flats to rent", type: "operator", accessed_date: "2026-04-12" },
];
trafalgarPlace.rental.price_transparency = "enquire";
trafalgarPlace.rental.affordability = "stretch";

const southGardens = elephantPark.projects.find(p => p.id === "south-gardens")!;
southGardens.external_links = [
  { url: "https://www.lendleaseliving.co.uk/to-rent/", label: "Lendlease Living — flats to rent", type: "operator", accessed_date: "2026-04-12" },
];
southGardens.rental.price_transparency = "enquire";
southGardens.rental.affordability = "stretch";

const parkSayer = elephantPark.projects.find(p => p.id === "park-sayer")!;
parkSayer.external_links = [
  { url: "https://www.lendleaseliving.co.uk/development/park-and-sayer/", label: "Lendlease Living — Park & Sayer", type: "operator", accessed_date: "2026-04-12" },
];
parkSayer.rental.price_transparency = "enquire";
parkSayer.rental.affordability = "stretch";

const westGrove = elephantPark.projects.find(p => p.id === "west-grove")!;
westGrove.external_links = [
  { url: "https://www.lendleaseliving.co.uk/to-rent/", label: "Lendlease Living — flats to rent", type: "operator", accessed_date: "2026-04-12" },
];
westGrove.rental.price_transparency = "enquire";
westGrove.rental.affordability = "stretch";

const wilderly = elephantPark.projects.find(p => p.id === "the-wilderly")!;
wilderly.external_links = [
  { url: "https://www.elephantpark.co.uk/live-here/the-wilderly/", label: "Elephant Park — The Wilderly", type: "developer", accessed_date: "2026-04-12" },
];
wilderly.rental.price_transparency = "enquire";
wilderly.rental.affordability = "over-budget";

const elephantCentral = elephantPark.projects.find(p => p.id === "elephant-central")!;
elephantCentral.external_links = [
  { url: "https://www.getliving.com/our-neighbourhoods/elephant-central/", label: "Get Living — Elephant Central", type: "operator", accessed_date: "2026-04-12" },
];
elephantCentral.rental.price_transparency = "enquire";
elephantCentral.rental.affordability = "stretch";

export default elephantPark;
