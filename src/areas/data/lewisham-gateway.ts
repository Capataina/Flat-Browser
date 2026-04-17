import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Projects (extracted for external_links + price_transparency mutation) ──

// RESEARCH: Get Living "The Filigree" Lewisham — 1-bed from £1,750/mo. Homeppl referencing.
// CRITICAL UPDATE 2026-04-16: BUILDING CLOSED — major water main leak early 2025, reopening "mid to late 2026"
// per Get Living's own site. NOT AVAILABLE for late-May-2026 move-ins. Treat as unavailable until Get Living re-confirms.
const getLivingLewisham = buildProject({
  id: "get-living-lewisham", area_id: "lewisham-gateway", name: "Get Living Lewisham (CLOSED — water remediation)", developer: "Muse Developments / Barratt", operator: "Get Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "blocked",
  preview: "[BUILDING CLOSED MID-2025 — water main leak; reopening mid to late 2026 per operator] Get Living's third London location. Same Homeppl referencing backend as East Village. East Village is the live target operator-wise; Filigree returns once water remediation completes.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Modern BTR from Muse/Barratt with Get Living management. Build quality details not yet researched.",
    t4_1_amenity_package: "Get Living standard amenity package — details not yet researched.",
    t4_4_signature_arch: "Not signature-authored. Standard Gateway mixed-use.",
  },
});
getLivingLewisham.external_links = [
  { url: "https://www.getliving.com/our-neighbourhoods/the-filigree/", label: "Get Living — The Filigree, Lewisham", type: "operator", accessed_date: "2026-04-12" },
];
getLivingLewisham.rental.price_transparency = "listed";

const lewishamGatewayCore = buildProject({
  id: "lewisham-gateway-core", area_id: "lewisham-gateway", name: "Lewisham Gateway", developer: "Muse Developments / Barratt", operator: "Muse / Barratt", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "Mixed ownership-led Gateway regeneration with some rental.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Modern mixed-use Gateway delivery.",
    t4_1_amenity_package: "Standard mixed-use amenity.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
lewishamGatewayCore.external_links = [
  { url: "https://lewishamgateway.com/", label: "Lewisham Gateway", type: "developer", accessed_date: "2026-04-12" },
];

// RESEARCH: Fizzy Lewisham (Greystar) — 1-bed from £1,280/mo. Homeppl referencing confirmed.
const fizzyLewisham = buildProject({
  id: "fizzy-lewisham", area_id: "lewisham-gateway", name: "Fizzy Lewisham", developer: "Watkin Jones / CBRE fund", operator: "Fizzy Living (Greystar)", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable-with-guarantor",
  preview: "184-unit BTR scheme completed March 2024. Greystar (formerly Fizzy Living) operator. 1-bed from ~£1,280 pcm — notably lower price point than The Filigree. Fizzy brand known for flexible, renter-friendly approach. On-site property manager.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Modern BTR — Watkin Jones construction, Greystar/Fizzy management. ~12 storeys. 2024 completion.",
    t4_1_amenity_package: "Landscaped rooftop terrace, co-working space, fast WiFi included, secure bike storage, 24hr concierge, CCTV, video door entry.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
fizzyLewisham.external_links = [
  { url: "https://fizzyliving.com/locations/lewisham", label: "Fizzy Living — Lewisham", type: "operator", accessed_date: "2026-04-12" },
  { url: "https://www.homeviews.com/development/fizzy-lewisham-se13", label: "HomeViews — Fizzy Lewisham", type: "homeviews", accessed_date: "2026-04-17" },
];
fizzyLewisham.rental.price_transparency = "listed";
fizzyLewisham.rental.prices = {
  one_bed: { min: 1800, max: 2100, currency: "GBP", per: "month" },
  bills_included: false,
  notes: "1-bed £1,800-£2,100 per Rightmove April 2026 (V1 captured £1,280 — stale; current market is materially higher).",
};
fizzyLewisham.rental.affordability = "comfortably-affordable";
fizzyLewisham.building_quality = {
  sound_insulation: "average",
  thermal_performance: "good",
  layout_notes: "12-storey BTR delivered 2024. Standard Fizzy spec with full kitchen but standard appliances. HomeViews complaint theme: doors with gaps let draughts and noise through.",
  kitchen_quality: "average",
  heating_type: "communal",
  notes: "Watkin Jones construction, Greystar/Fizzy management. Build quality mid-tier within Fizzy portfolio — sound/thermal issues via door gaps mentioned by multiple reviewers.",
};
fizzyLewisham.amenities = {
  pool: false,
  pool_notes: "",
  gym: false,
  gym_quality: "unknown",
  concierge: "none",
  sky_lounge: false,
  co_working: true,
  dining_room: false,
  cinema_room: false,
  rooftop_terrace: true,
  parking: false,
  bike_storage: true,
  pet_policy: "Pet-friendly with £75/month pet fee",
  other_amenities: [
    "15th-floor rooftop terrace (highest Fizzy rooftop)",
    "Secure bike storage",
    "CCTV",
    "Video door entry",
  ],
  overall_tier: "decent",
};
fizzyLewisham.architecture = {
  architects: [],
  awards: [],
  is_signature: false,
  style_notes: "~12-storey 2024 BTR delivery within Lewisham Gateway regeneration footprint. Watkin Jones construction, no named architect publicly credited.",
};
fizzyLewisham.long_form = {
  full: "Fizzy Lewisham is a 184-unit BTR scheme delivered March 2024 by Watkin Jones and operated by Fizzy Living (Greystar subsidiary). Decent amenity tier — 15th-floor rooftop terrace (the highest Fizzy rooftop), co-working space, secure bike storage, CCTV, video door entry — but no in-building gym and no concierge. Pet-friendly with £75/month pet fee. 1-beds £1,800-£2,100 pcm (materially above the V1-captured £1,280 stale figure). Lowest price floor in the dataset for a Homeppl-backed Greystar building — qualification is via Greystar's Homeppl + Open Banking savings pathway.",
  living_experience: "HomeViews 4.41/5 across 382 reviews (high confidence — one of the largest review counts in the Fizzy portfolio). Strong praise for management responsiveness and the 15th-floor rooftop; recurring complaints on build quality (door gaps, draughts), security (parcel theft, main entrance lock failures) and a 2+ month hot water outage in winter 2024.",
  notable_features: "15th-floor rooftop terrace (highest Fizzy rooftop); lowest price floor in the dataset for a Homeppl-backed Greystar building; adjacent to Lewisham DLR + Southeastern; Watkin Jones 2024 delivery.",
};
fizzyLewisham.resident_signal = {
  homeviews_score: 4.41,
  homeviews_url: "https://www.homeviews.com/development/fizzy-lewisham-se13",
  summary: "4.41/5 across 382 reviews (high confidence — one of the largest review counts in the Fizzy portfolio). Strong praise for management responsiveness and rooftop; recurring complaints on build quality (door gaps, draughts), security (parcel theft, main entrance lock failures) and a 2+ month hot water outage.",
  common_praise: [
    "Responsive management staff",
    "15th-floor rooftop terrace views",
    "Proximity to Lewisham station",
    "Community events",
    "Modern spacious flats",
  ],
  common_complaints: [
    "Door gaps let draughts/noise",
    "Main entrance lock failures",
    "Parcel theft incidents",
    "Hot water outage winter 2024",
    "Co-working space inadequate",
    "£75/mo pet fee above market",
  ],
};

const lewishamGateway: Area = {
  id: "lewisham-gateway",
  name: "Lewisham Gateway",
  aliases: ["Lewisham"],
  borough: "Lewisham",
  postcodes: ["SE13"],

  headline:
    "Get Living's third London location — DLR + Southeastern, Zone 2/3. The single most important sleeper grad-visa target from the BTR operator sweep. T1.1 safety is marginal — Lewisham town centre is structurally similar to Croydon.",
  preview:
    "Get Living operates at Lewisham Gateway (same Homeppl backend as East Village — potentially the same operator-level policy). DLR + Southeastern give two independent products. Lewisham Central ward is 53% in 20-39 — top-skew surprise. T1.1 safety is marginal: Lewisham town centre at ~119.4/1k is not the upgrade Caner is looking for. The BTR operator presence is what makes this interesting despite the T1.1 concern.",

  long_form: {
    full: "Lewisham Gateway is a regeneration area in the Lewisham town centre, centred on the Muse Developments masterplan at the confluence of the Rivers Ravensbourne and Quaggy, directly adjacent to Lewisham station (DLR terminus + Southeastern main-line). The natural centre is the Gateway plaza between the station and the Lewisham Shopping Centre. The area is Zone 2/3 — Lewisham station sits on the Zone 2/3 boundary — with three transit products at a single interchange: DLR terminus, Southeastern rail to London Bridge and Charing Cross, and Thameslink on the north-to-south corridor. The area's headline pitch is the combination of multi-product interchange and fast Docklands connectivity at a Zone 2/3 price point well below Rotherhithe, Canada Water or Bermondsey.\n\nDemographics skew sharply young-professional: Lewisham Central ward recorded 53% aged 20-39 at the 2021 Census — a top-decile young-adult concentration driven by the Gateway regeneration itself converting the ward's composition over the 2018-2024 window. Housing stock is dominated by new-build delivery from the Muse / Barratt joint venture (Lewisham Gateway Phase 1 complete, Phase 2 in delivery) and BTR stock from Get Living (The Filigree, currently closed for water remediation, reopening mid-to-late 2026) and Greystar / Fizzy (Fizzy Lewisham, 184 units, March 2024 delivery). The ward is ethnically diverse — substantial Black British (Caribbean and African heritage) population, substantial White British, and a fast-growing professional-renter incoming cohort.\n\nTransport is the strongest argument for the area. From Lewisham station the TfL-verified headline figures are Canary Wharf 13 minutes (DLR direct, no change), London Bridge 10 minutes (Southeastern), Cannon Street 12 minutes (Southeastern), King's Cross / St Pancras 25 minutes (Thameslink direct — avoiding tube changes), and Stratford 28 minutes (DLR direct). Tottenham Court Road / Soho is the weakness at ~25 minutes (DLR + Central change or Southeastern + Northern Line change). The proposed future Bakerloo Line extension to Lewisham would transform connectivity to Oxford Street / Soho but the timeline is uncertain post-TfL funding settlement.\n\nSafety is the area's genuine weakness and where the Croydon comparison breaks down most sharply. Lewisham Central ward is above Lewisham borough average on crime-per-capita, and Lewisham town centre specifically carries visible anti-social behaviour along the Lewisham Shopping Centre / High Street corridor. The station plaza and the new Gateway residential cores sit in well-lit stewarded environments, but the cut-through from the station to the shopping centre and the High Street beyond reads structurally similar to West Croydon / North End in both tone and crime profile. This is not the upgrade Caner is looking for on T1.1 — it is a lateral move on safety at best, with materially better connectivity as compensation.\n\nDaily-life amenities are mixed. The Gateway masterplan has delivered new-build commercial ground-floor retail (Eataly, various chains), the Lewisham Shopping Centre carries functional high-street brands and a Tesco, and the Lewisham Model Market / Model Village food-truck cluster provides weekend destination food. But the High Street beyond the Gateway is low-tier — chicken shops, betting shops, phone repair, very similar to the Croydon pattern. Lewisham Market (covered Tuesday-Saturday) is the single genuine bright spot for fresh produce and cheap groceries. Beckenham Place Park (240 acres with a swimming lake) is 15-20 minutes away — a genuine destination green space that compensates meaningfully for the town-centre texture.",
    history: "Historic market town referenced in the Domesday Book (1086). Central Lewisham grew around the mill on the Ravensbourne river and was a coaching route stop on the London-Dover road. Victorian suburbanisation with the arrival of the railway (1849) and the tram (1906). Heavy WWII bomb damage along the High Street including the Lewisham V-1 disaster of 28 July 1944 (market-day strike, 59 killed). Post-war rebuild gave the 1960s shopping precinct and tower-block fabric still dominant. The Lewisham Gateway masterplan (Muse Developments with Barratt London) was granted consent in 2008 as a ~1,200-home mixed-use regeneration, delivery paused through the 2008-2012 cycle, Phase 1 completed 2016, Phase 2 in delivery through 2025-2027. The DLR extension to Lewisham (1999) transformed the town's connectivity to Docklands and set up the current regeneration viability.",
    vibe: "Structurally transitional. The Gateway plaza immediately around the station reads as a new-build regeneration district — clean paving, stewarded public realm, the ground-floor commercial tenant mix skewing to mid-market chains. Walk 5 minutes west along the High Street and the tone shifts — older 1960s shopping precinct, chicken shops, vape shops, visible street drinking near the shopping centre entrance, a working-class-multicultural texture that has authenticity but does not clear the 'upgrade on Croydon' bar. The river corridors (Ravensbourne + Quaggy confluence) and Ladywell Fields reading green through the area provide genuine escape. The Model Market food-truck cluster gives the area its one genuine weekend-destination anchor.",
    weekday: "A Tuesday at 7pm: DLR and Southeastern trains flowing both directions — CW workers home via DLR, City workers home via Southeastern. Gateway plaza active with after-work drinkers at the ground-floor chains (Franco Manca, Eataly, etc.). Lewisham Shopping Centre closes around 20:00 after which the High Street thins out fast. Model Market Tuesday quieter, food trucks mostly Thu-Sun. Side-street residential blocks quiet by 21:00.",
    weekend: "Saturday: Lewisham Market (covered market off the High Street) active with fresh produce, street food, clothing stalls — genuine weekend draw. Model Market / Model Village food-truck cluster busy Friday night through Sunday afternoon. Beckenham Place Park swimming lake active in good weather. High Street carries shopping-centre crowd plus visible anti-social behaviour cluster around the shopping centre entrance. Not a destination area in the Columbia Road / Borough Market sense, but the local weekend economy is functional.",
    notable: "Citizens House (Archio, Church Grove) — RIBA London Client of the Year 2025 and a genuine architectural landmark. Lewisham Gateway masterplan (Muse / Barratt, multi-phase). Fizzy Lewisham (Greystar BTR, 184 units, 2024). Get Living The Filigree (BTR, 2023 — currently closed for water remediation, reopening mid-to-late 2026). Lewisham Market (covered market, Tue-Sat). Model Market / Model Village (food-truck weekend cluster). Lewisham Shopping Centre (1970s indoor precinct). Ravensbourne and Quaggy river confluence. Beckenham Place Park (240 acres with swimming lake) 15-20 min walk south. Ladywell Fields (River Ravensbourne corridor, 10 min walk west). Lewisham College (2-5 min from station). Deptford (Creekside / Trinity Laban) walkable in 20 min.",
    croydon_comparison: "Mixed against Croydon. Night safety is not a clean upgrade — Lewisham Central ward crime is above borough average (~150-160/1k LSOA-level in the town centre) and the High Street carries visible anti-social behaviour that reads structurally similar to West Croydon / North End. The Gateway residential cores themselves (Fizzy, The Filigree when reopened, Gateway Phase 2) sit in stewarded environments with concierge-led access and feel safe, but the walk from the station to anywhere beyond the plaza crosses High Street tone that does not clear the upgrade bar. Café and ground-floor retail density is comparable to Croydon's on paper but tier mix is similar — chain-heavy inside the Gateway, low-tier outside. Gym options are adequate — PureGym Lewisham and The Gym Group nearby, no Third Space / Barry's / Equinox within 15 min. Zone 2/3 vs Croydon's Zone 5 — the single strongest argument for Lewisham — 13 minutes to Canary Wharf on DLR vs 50+ minutes from East Croydon, and 10 minutes to London Bridge vs 17 from East Croydon. King's Cross reachable in 25 minutes direct via Thameslink, a genuine improvement on Croydon's ~45. Price differential: Fizzy Lewisham 1-bed ~£1,280/mo, Get Living The Filigree 1-bed ~£1,750 (when reopened), Gateway Phase 2 BTS-rental secondary stock ~£1,500-1,900, vs Ten Degrees contractual £2,280 (effective ~£3,000). Materially cheaper, materially better-connected, lateral on safety — the honest summary. This is a sleeper grad-visa target by operator presence (Get Living + Fizzy/Greystar with Homeppl-backed referencing that actually works for international renters without UK credit history), not by place quality.",
  },

  zones: ["Zone 2", "Zone 3"],
  connectivity: {
    lines: [
      { name: "DLR", type: "dlr" },
      { name: "Southeastern", type: "rail" },
      { name: "Thameslink", type: "rail" },
    ],
    primary_stations: [
      { name: "Lewisham", lines: ["DLR", "Southeastern", "Thameslink"], walk_minutes_from_centre: 3 },
      { name: "Ladywell", lines: ["Southeastern"], walk_minutes_from_centre: 12 },
    ],
    times_to_anchors: { city_of_london: 15, canary_wharf: 13, soho_fitzrovia: 25, kings_cross_shoreditch: 25 },
    multi_cluster_score: 3,
    redundancy_score: 3,
    notes: "Lewisham station is a three-product interchange — DLR terminus + Southeastern + Thameslink — at a single complex. DLR gives Canary Wharf in 13 min direct, Southeastern gives London Bridge in 10 and Cannon Street in 12, Thameslink gives King's Cross / St Pancras in 25 direct. This is a legitimately strong connectivity profile for Zone 2/3. Weakness is Tottenham Court Road / Soho — requires change at Bank or London Bridge. Future Bakerloo Line extension would transform this but the timeline is uncertain post-TfL funding settlement. Ladywell station (Southeastern) is a 12-min walk west as a genuine alternative if Lewisham complex is disrupted.",
    sources: [
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://en.wikipedia.org/wiki/Lewisham_station", label: "Wikipedia — Lewisham station", type: "wikipedia", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "18-29",
    age_breakdown: [
      { cohort: "18-29", pct: 27 },
      { cohort: "30-39", pct: 26 },
      { cohort: "40-49", pct: 14 },
      { cohort: "50+", pct: 33 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 33 },
      { group: "Black or Black British", pct: 25 },
      { group: "White — other", pct: 14 },
      { group: "Asian or Asian British", pct: 13 },
      { group: "Mixed", pct: 11 },
      { group: "Other", pct: 4 },
    ],
    household_mix: [
      { type: "Single person", pct: 34 },
      { type: "Couple no children", pct: 22 },
      { type: "Couple with children", pct: 18 },
      { type: "Lone parent", pct: 12 },
      { type: "Shared household", pct: 10 },
      { type: "Other", pct: 4 },
    ],
    student_pct: 9,
    professional_renter_pct: 38,
    notes: "Lewisham Central ward: 20-39 at 53% — top-skew surprise, driven by Gateway regeneration converting the ward's composition 2018-2024. Ethnic composition genuinely mixed — Black British (Caribbean + African heritage) is the largest non-White group. Significant incoming professional-renter cohort visible at Fizzy and Gateway Phase 2. Census 2021 via CrystalRoof ward profile + ONS bulk data.",
    sources: [
      { url: "https://crystalroof.co.uk/area/neighbourhood/E05014069", label: "Crystal Roof — Lewisham Central ward", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "moderate",
    crime_vs_borough: "above",
    crime_vs_croydon: "similar",
    after_dark_assessment: "Lewisham station complex itself is well-lit and busy until last trains — the DLR terminus and Southeastern platforms sit inside a modern station environment with TfL staff presence. The Gateway plaza and new-build residential cores (Fizzy, The Filigree, Gateway Phase 2) are stewarded and feel safe. The breakdown point is the cut-through from the station to the Lewisham Shopping Centre and the High Street beyond — visible street drinking cluster around the shopping centre entrance, low lighting on some side-street residential cut-throughs, and the general High Street tone (chicken shops, vape shops, betting shops) reads structurally similar to West Croydon / North End. Not hostile at volume, but does not clear the 'demonstrably safer than Croydon' upgrade bar. Women-walking-alone: fine inside the Gateway stewarded cores, advise ride-share past 22:00 beyond the plaza. This is the single weakest dimension in the area's offer.",
    concerns: [
      "Lewisham Shopping Centre entrance cluster — visible street drinking and occasional fights late-evening",
      "High Street west of the station carries the low-tier retail mix that mirrors West Croydon tone",
      "T1.1 is leaning fail — does not clearly clear the upgrade-on-Croydon bar",
    ],
    sources: [
      { url: "https://www.met.police.uk/a/your-area/met/lewisham/lewisham-central/", label: "Met Police — Lewisham Central SNT", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: true,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Ladywell Fields", size_acres: 37, walk_minutes: 10, notes: "River Ravensbourne corridor park — genuine local green" },
      { name: "Manor House Gardens", walk_minutes: 12, notes: "Listed park with lake — Hither Green side" },
      { name: "Beckenham Place Park", size_acres: 240, walk_minutes: 20, notes: "240-acre park with swimming lake, mansion house, mature woodland — genuine destination green space, the single strongest green asset" },
      { name: "Blackheath", size_acres: 211, walk_minutes: 25, notes: "211-acre heath — walkable destination, famous kite-flying common" },
      { name: "Cornmill Gardens", walk_minutes: 5, notes: "Small new-build Gateway pocket park at the Ravensbourne/Quaggy confluence" },
    ],
    overall_assessment: "Better than the existing one-line assessment credits. River Ravensbourne and Quaggy converge directly in the area, giving genuine river corridor access at Cornmill Gardens and Ladywell Fields. Beckenham Place Park at 240 acres with a swimming lake is walkable in 20 minutes and is the single strongest green asset — materially better than anything Croydon offers. Blackheath at 25 min is a further destination. Not waterfront in the Thames sense, but legitimately green-adequate for an inner-SE-London town-centre area.",
  },
  amenities: {
    grocery: [
      { name: "Tesco Superstore Lewisham", type: "supermarket", walk_minutes: 5, notes: "Large supermarket adjacent to shopping centre" },
      { name: "Sainsbury's Lewisham (Lewisham Way)", type: "supermarket", walk_minutes: 8, notes: "Secondary full-format supermarket" },
      { name: "Lewisham Market", type: "covered market", walk_minutes: 6, notes: "Tue-Sat — fresh produce, street food, clothing. Genuine weekly anchor" },
      { name: "Eataly / Gateway ground-floor retail", type: "specialty + chains", walk_minutes: 2, notes: "New Gateway plaza retail — Eataly, Franco Manca, Pure, etc." },
      { name: "M&S Simply Food Lewisham Shopping Centre", type: "supermarket", walk_minutes: 4, notes: "Mid-tier grocery option" },
    ],
    gyms: [
      { name: "PureGym Lewisham", type: "budget", walk_minutes: 5, notes: "24/7 PureGym — budget tier" },
      { name: "The Gym Group Lewisham", type: "budget", walk_minutes: 7, notes: "24/7 budget alternative" },
      { name: "Glass Mill Leisure Centre", type: "council leisure", walk_minutes: 5, notes: "Lewisham Council leisure centre — pool, gym, classes" },
      { name: "Energie Fitness Lewisham", type: "mid-budget", walk_minutes: 5, notes: "Mid-tier chain" },
    ],
    food_and_drink: [
      { name: "Model Market / Model Village", type: "food-truck cluster", walk_minutes: 6, notes: "Weekend food-truck destination — genuine draw" },
      { name: "Gateway plaza chains (Franco Manca, Eataly, Bagel Factory, Pure)", type: "chains", walk_minutes: 2, notes: "Mid-market chain cluster" },
      { name: "Buster Mantis (Deptford)", type: "Caribbean restaurant + music bar", walk_minutes: 15, notes: "Walkable towards Deptford — destination quality" },
      { name: "Archer Street (Lewisham Gateway)", type: "cocktail / live music", walk_minutes: 3, notes: "Gateway-delivered venue" },
      { name: "Kitchen Garden (Ladywell)", type: "community café", walk_minutes: 10, notes: "Walkable Ladywell independent" },
    ],
    health: [
      { name: "University Hospital Lewisham (A&E)", type: "major hospital", walk_minutes: 15, notes: "Full A&E — meaningful asset" },
      { name: "Riverside Group Practice", type: "GP", walk_minutes: 8, notes: "Multiple GP practices in the town centre" },
      { name: "Boots Pharmacy Lewisham Shopping Centre", type: "pharmacy", walk_minutes: 4, notes: "Primary pharmacy" },
    ],
    cultural: [
      { name: "Broadway Theatre Catford", type: "theatre", walk_minutes: 15, notes: "1,000-seat Art Deco theatre — Catford is walkable" },
      { name: "Albany Deptford", type: "community arts", walk_minutes: 20, notes: "Deptford multidisciplinary venue" },
      { name: "Lewisham Library", type: "library", walk_minutes: 4, notes: "Lewisham Council library" },
      { name: "Cineworld Greenwich / Peckham Plex", type: "cinema", walk_minutes: 20, notes: "Nearest multiplex is Greenwich Cineworld by DLR; Peckham Plex via bus" },
      { name: "Horniman Museum (Forest Hill)", type: "museum", walk_minutes: 25, notes: "10-min train from Lewisham — free world-class museum" },
    ],
    notes: "Amenity texture is functional rather than aspirational. Daily essentials pass cleanly — Tesco, Sainsbury's, M&S, Lewisham Market. T2.3 gyms adequate (no premium tier in-area). Food-and-drink is the weakest dimension — Model Market + chains inside the Gateway, drops off fast beyond. Cultural is thin in-area but meaningfully lifted by Deptford / New Cross adjacency — Albany + Buster Mantis + Laban Dance 20 min walk. University Hospital Lewisham A&E is a genuine asset most areas in the dataset do not have.",
  },
  regeneration: {
    status: "active",
    investment_pipeline: "Lewisham Gateway masterplan (Muse Developments + Barratt London, consented 2008, Phase 1 complete 2016 with ~£250m first-phase value, Phase 2 delivery through 2025-2027 adding residential + commercial ground floor). Get Living The Filigree BTR (closed mid-2025 for water-main remediation, reopening mid-to-late 2026 per operator). Fizzy Lewisham BTR (Greystar / Watkin Jones, 184 units, complete March 2024). LeeGate Shopping Centre regeneration proposed (~700 homes, planning stage, Lee ward adjacent). Future Bakerloo Line extension to Lewisham — long-term, funding-dependent, treat as absent not ascending.",
    recent_milestones: [
      "2023 — Get Living The Filigree opened",
      "2024 — Fizzy Lewisham opened (184 units, Greystar)",
      "2024 — Gateway Phase 2 enabling works commenced",
      "2025 — Citizens House (Archio, Church Grove) — RIBA London Client of the Year 2025",
      "2025 — The Filigree closed for water-main remediation (reopening mid-to-late 2026)",
    ],
    upcoming_milestones: [
      "2026 — The Filigree reopening post-water-remediation (per Get Living)",
      "2026-2027 — Gateway Phase 2 residential completions",
      "2027+ — LeeGate Shopping Centre regeneration (planning stage)",
      "Uncertain — Bakerloo Line extension to Lewisham (funding-dependent)",
    ],
    trajectory_through_2027: "Ascending but uneven. Gateway Phase 2 is delivering and Phase 3 is consented. The Filigree reopening post-remediation restores the Get Living operator presence in 2026. Fizzy is operational and stable. LeeGate Shopping Centre regeneration is the next material catalyst but is still at planning stage. Bakerloo extension remains the long-term step-change that would transform the area — but the timeline is uncertain and the 2027 window is too early to bank on. For Caner's August 2027 visa window: the area will have more new-build residential delivered than today, Get Living will be operational again, but the High Street / shopping centre texture around the Gateway cores will be broadly unchanged. Net: moderately improved new-build offer, unchanged place quality.",
    sources: [
      { url: "https://lewishamgateway.com/", label: "Lewisham Gateway masterplan", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.musedevelopments.com/portfolio/lewisham-gateway", label: "Muse Developments — Lewisham Gateway", type: "developer", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "partial", "1.6": "pass" },
      {
        "1.1": "MARGINAL — leaning fail. Lewisham town centre at ~119.4/1k is structurally similar to Croydon. Does not pass the upgrade test.",
        "1.2": "Get Living operates at Lewisham Gateway — modern managed rental stock present.",
        "1.3": "DLR + Southeastern. Zone 2/3.",
        "1.4": "Get Living (same Homeppl backend as East Village). Genuine BTR operator presence.",
        "1.5": "Gateway is new but wider Lewisham town centre public realm is uneven.",
        "1.6": "Not in decline — active Gateway delivery, Get Living, RIBA award.",
      },
      "moderate",
      "T1 passes on BTR operator presence (Get Living) but T1.1 safety is the concern. The BTR operator makes this interesting despite the location.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "partial", "2.3": "unknown", "2.4": "partial", "2.5": "partial", "2.7": "pass" },
      {
        "2.1": "Town centre provides walkable daily essentials.",
        "2.2": "Standard town-centre grocery. Not destination-quality.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Ladywell Fields is the nearest green asset. Not frontage.",
        "2.5": "Town centre — busier than residential wards.",
        "2.7": "20-39 at 53% — top-skew. Surprise result.",
      },
      "moderate",
      "Functional daily life. Demographics are the headline positive.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "partial", "3.3": "partial", "3.4": "partial", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "Active regeneration — Gateway delivery, Get Living, LeeGate proposed.",
        "3.2": "No strong cultural or commercial anchor beyond the town centre itself.",
        "3.3": "Identity is 'regenerating town centre' — not yet a destination.",
        "3.4": "15-minute completeness is partial — functional but not deep.",
        "3.5": "Citizens House (RIBA 2025) is an architectural signal. Gateway is standard mixed-use.",
        "3.6": "Town centre rhythm — busy daytime, quieter at night.",
      },
      "moderate",
      "T3 moderate. Regeneration is the story but destination identity is not yet formed.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 2/5 — 2/4 anchors ≤25. Canary Wharf 13 min is the headline. Average 21.5 min.",
        "5.2": "DLR + Southeastern — two genuinely independent products. Redundancy 3/5.",
        "5.3": "Ascending — Gateway delivering, Get Living, Bakerloo extension (if it happens).",
        "5.4": "Third-space culture is thin.",
      },
      "moderate",
      "Good redundancy and ascending trajectory. Multi-cluster reach is limited.",
    ),
    overall_grade: "B",
    grade_reasoning: "B — Get Living BTR presence is the standout finding (sleeper grad-visa target). T1.1 safety is the structural concern: Lewisham town centre is too similar to Croydon on the crime axis. If T1.1 resolves cleanly, this could upgrade.",
  },

  projects: [getLivingLewisham, lewishamGatewayCore, fizzyLewisham],

  external_links: [
    { url: "https://www.getliving.com/lewisham/", label: "Get Living Lewisham", type: "developer", accessed_date: "2026-04-12" },
    { url: "https://lewishamgateway.com/", label: "Lewisham Gateway", type: "developer", accessed_date: "2026-04-12" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default lewishamGateway;
