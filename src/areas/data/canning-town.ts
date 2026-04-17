import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const canningTown: Area = {
  id: "canning-town",
  name: "Canning Town",
  aliases: ["Canning Town North", "Custom House adjacent"],
  borough: "Newham",
  postcodes: ["E16"],

  headline:
    "Major Jubilee Line + DLR interchange in Zone 2/3 with Fizzy Living BTR. Adjacent to Royal Docks and Canary Wharf at a lower price floor.",
  preview:
    "Canning Town is a Jubilee Line + DLR hub at the Zone 2/3 boundary — strong multi-modal interchange adjacent to both Canary Wharf and Royal Docks. Fizzy Living (Greystar subsidiary) operates ~140 BTR homes here. The area is a sleeper grad-visa target: lower price floor than trophy addresses with potentially Homeppl-backed referencing via the Greystar relationship.",

  long_form: {
    full: "Canning Town sits at the Jubilee Line and DLR interchange on the Zone 2/3 boundary, making it one of east London's strongest multi-modal transport hubs. Elizabeth Line access is available at adjacent Custom House station. The area is adjacent to both Canary Wharf (Jubilee direct) and Royal Docks (DLR/Elizabeth), which positions it as a lower-cost base with strong employment-hub connectivity. Fizzy Living (a Greystar subsidiary) operates approximately 140 BTR homes at Fizzy Canning Town. Fizzy's referencing may use Homeppl backend via the Greystar parent relationship, though this needs verification. Ballymore's London City Island is adjacent. The Newham borough-level knife-crime headline is a real signal and applies to this area.",
    history: "Historic docklands and industrial area. Major post-war council estate development. Ongoing regeneration driven by Jubilee Line extension (1999) and subsequent investment.",
    vibe: "Transport hub with regeneration underway. Less characterful than nearby Canary Wharf or Royal Docks but functionally strong. Residential grain is improving.",
    weekday: "A Tuesday at 7pm: Jubilee Line commuters passing through; DLR interchange busy; immediate retail thin.",
    weekend: "A Saturday: quieter than weekdays; residential. Royal Docks and Canary Wharf draw people away for weekend activity.",
    notable: "Jubilee + DLR interchange; Fizzy Living BTR; proximity to ExCeL London, Royal Docks, and Canary Wharf.",
    croydon_comparison: "Canning Town offers stronger multi-modal connectivity than Croydon (Jubilee + DLR + Elizabeth at Custom House) at a comparable or lower price floor. The area is less characterful but functionally superior for employment-hub access.",
  },

  zones: ["Zone 2", "Zone 3"],
  connectivity: {
    lines: [
      { name: "Jubilee", type: "tube" },
      { name: "DLR", type: "dlr" },
    ],
    primary_stations: [
      { name: "Canning Town", lines: ["Jubilee", "DLR"], walk_minutes_from_centre: 5 },
      { name: "Custom House", lines: ["Elizabeth"], walk_minutes_from_centre: 15 },
    ],
    times_to_anchors: { city_of_london: 14, canary_wharf: 4, soho_fitzrovia: 20, kings_cross_shoreditch: 18 },
    multi_cluster_score: 4,
    redundancy_score: 3,
    notes: "Canning Town is a genuine multi-modal interchange — Jubilee + DLR converging at a single station with Elizabeth Line at walking-distance Custom House. The Jubilee gives Canary Wharf at 4 minutes and Bond Street at 15. DLR reaches Bank, Stratford, and the Royal Docks in their own grid. This is one of the strongest redundancy profiles for Zone 2/3 pricing in the dataset.",
    sources: [
      { url: "https://tfl.gov.uk/tube-dlr-overground/stations/canning-town-underground-station/", label: "TfL — Canning Town", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner", type: "tfl", accessed_date: "2026-04-17" },
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
      { group: "White — British", pct: 14 },
      { group: "White — other", pct: 13 },
      { group: "Asian or Asian British", pct: 33 },
      { group: "Black or Black British", pct: 28 },
      { group: "Mixed", pct: 6 },
      { group: "Other ethnic group", pct: 6 },
    ],
    household_mix: [
      { type: "Single person", pct: 26 },
      { type: "Couple no children", pct: 20 },
      { type: "Couple with children", pct: 28 },
      { type: "Lone parent", pct: 14 },
      { type: "Shared household", pct: 10 },
      { type: "Other", pct: 2 },
    ],
    student_pct: 6,
    professional_renter_pct: 42,
    notes: "Canning Town North shows 20-39 at 41% per Census 2021 via CrystalRoof aggregation — top-skew ward driven by Fizzy Living, Argo Apartments, and adjacent London City Island BTR cluster. The wider ward mix is more traditional Newham — diverse, family-leaning, substantial long-resident community. BTR buildings read younger and more professional than surrounding streets.",
    sources: [
      { url: "https://www.ons.gov.uk/visualisations/censusareachanges/E05013966", label: "ONS Census 2021 — Canning Town North", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "moderate",
    crime_vs_borough: "average",
    crime_vs_croydon: "similar",
    after_dark_assessment: "Moderate — Newham borough-level knife-crime headline is a genuine signal (695 offences Jan-Oct 2025 borough-wide), and Canning Town specifically has ongoing reputational transition rather than completed gentrification. The immediate station area and Jubilee Line approaches read functional and commuter-busy through evening rush; the walk across Canning Town between residential clusters (particularly west of Silvertown Way or north toward Rathbone Market) reads noticeably more industrial-edge / rough-frontage. BTR building interiors and concierged entrances provide clearly safer envelopes than the surrounding streets. Women walking alone from Canning Town station to Fizzy Canning Town or London City Island is broadly fine during commuter hours; walking the broader residential grid at 23:00+ warrants awareness.",
    concerns: [
      "Newham borough knife-crime headline — 695 offences Jan-Oct 2025 (borough-wide)",
      "Walk across Canning Town at night reads industrial-edge / rough-frontage in places",
      "Rathbone Market northern streets after 22:00 — thin pedestrian density, documented anti-social behaviour",
    ],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police-service/canning-town-north/", label: "Met Police — Canning Town North", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: false,
    has_canal: false,
    has_dock: true,
    parks: [
      { name: "Bow Creek Ecology Park", size_acres: 4, walk_minutes: 8, notes: "Wetland nature reserve along Bow Creek — wildlife habitat rather than amenity park" },
      { name: "Thames Barrier Park", size_acres: 22, walk_minutes: 18, notes: "Designed park beside the Thames Barrier — walkable as a weekend destination" },
      { name: "Canning Town Recreation Ground", size_acres: 5, walk_minutes: 6, notes: "Small local rec ground — basic playing fields" },
      { name: "Royal Victoria Dock waterfront", walk_minutes: 10, notes: "Dockside promenade south of Canning Town — not a park but a walkable waterfront" },
    ],
    overall_assessment: "Moderate green-and-water profile. Bow Creek runs along the western edge and Royal Victoria Dock starts 10 minutes south — the area is water-adjacent rather than water-frontal. Bow Creek Ecology Park is a genuine nature reserve but small. Thames Barrier Park is walkable as a weekend destination. The area's weakness is immediate parkland: Canning Town Recreation Ground is the only in-area green space of note, and it's a small playing field rather than a designed park.",
    sources: [
      { url: "https://www.canalrivertrust.org.uk/enjoy-the-waterways/london/bow-creek", label: "Bow Creek Ecology Park", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Rathbone Market (Tesco / independents)", type: "market-cluster", walk_minutes: 5, notes: "Newham's original market relocated to modern square — outdoor market plus supermarket tenant" },
      { name: "Lidl Canning Town", type: "budget-supermarket", walk_minutes: 6, notes: "Budget weekly shop option" },
      { name: "Tesco Superstore Canning Town", type: "supermarket", walk_minutes: 8, notes: "Proper full-format Tesco — the core weekly shop option" },
      { name: "Sainsbury's Canning Town", type: "supermarket", walk_minutes: 7, notes: "Second full-format option" },
    ],
    gyms: [
      { name: "PureGym Canning Town", type: "commercial-budget", walk_minutes: 4, notes: "24/7 PureGym near the station — standard budget stack" },
      { name: "The Gym Group Canning Town", type: "commercial-budget", walk_minutes: 6, notes: "Second 24/7 budget gym" },
      { name: "Fizzy residents' gyms (Canning Town + East 16)", type: "resident", walk_minutes: 2, notes: "Fizzy Living residents' gyms — for residents only, modest amenity tier" },
      { name: "Argo Apartments residents' gym (Grainger)", type: "resident", walk_minutes: 4, notes: "Grainger BTR resident gym — for Argo residents" },
      { name: "Third Space Canary Wharf (one Jubilee stop)", type: "premium-gym", walk_minutes: 6, notes: "Premium Third Space is one Jubilee stop to Canary Wharf — effectively in-reach for training" },
    ],
    food_and_drink: [
      { name: "Rathbone Market (food stalls + cafes)", type: "market-food", walk_minutes: 5, notes: "Outdoor market with food stalls plus surrounding café/restaurant cluster" },
      { name: "London City Island restaurants", type: "restaurant-cluster", walk_minutes: 10, notes: "Ballymore's London City Island has cafés, restaurants, Trinity Buoy Wharf nearby" },
      { name: "Canary Wharf restaurants (one Jubilee stop)", type: "restaurant-cluster", walk_minutes: 4, notes: "One Jubilee stop to Canary Wharf's deep restaurant scene" },
    ],
    health: [
      { name: "Canning Town Health Centre", type: "GP", walk_minutes: 5, notes: "Council-affiliated GP practice — accepting new registrations" },
      { name: "Newham University Hospital", type: "hospital", walk_minutes: 25, notes: "Full NHS hospital — 25 min walk or 10 min by bus to Plaistow/E13" },
      { name: "Boots (Canning Town)", type: "pharmacy", walk_minutes: 5, notes: "Town-centre Boots" },
    ],
    cultural: [
      { name: "Trinity Buoy Wharf", type: "creative-quarter", walk_minutes: 12, notes: "Historic buoy wharf with London's only lighthouse — artist studios, creative workspaces, The Diner diner, Faraday School" },
      { name: "London City Island arts programming", type: "arts-cluster", walk_minutes: 10, notes: "Ballymore-backed arts events, occasional public programming" },
      { name: "ExCeL London (via DLR/Elizabeth)", type: "exhibition-centre", walk_minutes: 15, notes: "Major events venue — accessible via DLR or walk to Custom House" },
      { name: "IFS Cloud Cable Car (via Custom House)", type: "landmark", walk_minutes: 18, notes: "Cable car to Greenwich Peninsula — walkable or 1 stop DLR" },
    ],
    notes: "Amenity density in Canning Town immediate area is mid — Rathbone Market, Lidl, Tesco, Sainsbury's, two commercial gyms, GP, Boots cover essentials. The richer amenity picture comes from proximity: Canary Wharf one Jubilee stop adds premium restaurants, Waitrose, Third Space; Royal Docks adds dockside promenade and ExCeL; Trinity Buoy Wharf adds creative quarter. The in-area weakness is cultural depth — no library anchor of note, no cinema, no theatre.",
    sources: [
      { url: "https://www.newham.gov.uk/regeneration-housing/rathbone-market", label: "Rathbone Market", type: "council", accessed_date: "2026-04-17" },
      { url: "https://www.trinitybuoywharf.com/", label: "Trinity Buoy Wharf", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: {
    status: "active",
    investment_pipeline: "Canning Town is part of Newham's long-term Canning Town and Custom House regeneration — a £3.7bn programme delivering 10,000+ new homes. Hallsville Quarter (English Cities Fund + Linkcity UK) is the flagship: 1,100+ homes, Tesco superstore, restaurants, library over multiple phases. Argo Apartments (134 units, Grainger BTR) delivered as part of this. Brunel Street Works (975 homes, Fizzy East 16 opened 2022) is a second major anchor. Rathbone Market (Muse Developments + Folio London) delivered the market relocation plus 650 homes. Ballymore's London City Island (~2,000 homes, Goodluck Hope) sits adjacent across the creek. The broader Royal Docks / Silvertown regeneration to the south is adjacent and structurally linked.",
    recent_milestones: [
      "2022 — Brunel Street Works and Fizzy East 16 completed (autumn 2022)",
      "2022 — Elizabeth Line opened at adjacent Custom House",
      "2024 — Hallsville Quarter phases 3-4 delivering",
      "2025 — Fortunes Dock Phase 2 (Seraphina) completed (Grainger — Royal Docks adjacent)",
      "2025 — Silvertown Tunnel opened (April) — shifts southern connectivity",
    ],
    upcoming_milestones: [
      "2026-2027 — Hallsville Quarter continuing phases",
      "2026-2027 — Ballymore Thames Road (1,685 homes + 359 co-living) construction start (adjacent area)",
      "2027 — Knights Road (Ballymore, 1,667 homes) planning determination",
      "2028+ — Further unnamed Newham / EFC pipeline phases",
    ],
    trajectory_through_2027: "By August 2027, Canning Town will be visibly further through its regeneration arc. Hallsville Quarter will be largely complete; Brunel Street Works phases will be mature; adjacent Ballymore Thames Road construction will be visible. The area's reputational transition will be further advanced but not complete — this is a decade-long process and 2027 is still mid-trajectory.",
    sources: [
      { url: "https://www.newham.gov.uk/regeneration-housing", label: "LB Newham regeneration", type: "council", accessed_date: "2026-04-17" },
      { url: "https://www.englishcitiesfund.co.uk/", label: "English Cities Fund", type: "developer", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "partial", "1.6": "pass" },
      {
        "1.1": "Marginal pass. Newham borough knife-crime headline is a real signal. The walk across Canning Town carries genuine concern.",
        "1.2": "Modern rental stock — Fizzy Living BTR (~140 homes), Ballymore adjacent (London City Island).",
        "1.3": "Jubilee + DLR interchange. Elizabeth at Custom House. Strong multi-modal.",
        "1.4": "Fizzy Living (Greystar subsidiary) — operator present with potentially Homeppl referencing backend.",
        "1.5": "Public realm is mixed — regeneration improving but not yet consistently stewarded.",
        "1.6": "Not in decline — active regeneration and transport-driven investment.",
      },
      "moderate",
      "T1 moderate — T1.1 marginal (Newham safety), T1.5 partial (public realm mixed). Transport and stock are strong.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "partial", "2.2": "unknown", "2.3": "unknown", "2.4": "partial", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Walkable essentials are thin in the immediate area. Retail layer is improving but not dense.",
        "2.2": "Grocery access not yet researched.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Royal Docks adjacent but limited parkland immediately.",
        "2.5": "Residential. No nightlife generator. Quiet at night.",
        "2.7": "Census proxy: 41% aged 20-39. BTR buildings read younger.",
      },
      "moderate",
      "T2 moderate — quiet and young-skewing, but thin everyday amenity and retail layer.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "partial", "3.3": "partial", "3.4": "partial", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "Active regeneration — transport-driven investment, Fizzy Living, broader Royal Docks.",
        "3.2": "ExCeL London nearby but no strong local cultural anchor within Canning Town itself.",
        "3.3": "Weak standalone identity — 'transport hub' rather than a destination. Royal Docks and Canary Wharf carry the identity.",
        "3.4": "15-minute completeness partial — transport strong, everyday retail and culture thin.",
        "3.5": "Mixed architectural quality — regeneration improving but not yet consistently high.",
        "3.6": "Day/night rhythm is commuter-dominated — busy interchange daytime, quiet evenings.",
      },
      "weak",
      "T3 weak — transport hub without a strong independent identity or cultural layer.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "Canary Wharf 5 min (Jubilee direct). City 15 min. All anchors reachable. Soho/Fitzrovia is the stretch at ~25 min.",
        "5.2": "Jubilee + DLR = two genuinely independent lines. Elizabeth at Custom House adds a third. 3/5 redundancy.",
        "5.3": "Ascending — Royal Docks investment and transport-driven growth.",
        "5.4": "Limited third-space culture. Functional area rather than cafe/bookshop destination.",
      },
      "good",
      "T5 good — strong transport hub with Canary Wharf proximity and genuine redundancy. Third spaces are the gap.",
    ),
    overall_grade: "C",
    grade_reasoning: "C grade — strong transport connectivity and Canary Wharf adjacency are the value proposition. Weak T3 identity, thin T2 amenity, and Newham safety concerns hold it back. Fizzy Living BTR with potential Homeppl referencing makes it a sleeper grad-visa target.",
  },

  projects: [
    // RESEARCH: Fizzy Canning Town — Greystar subsidiary BTR, ~140 homes.
    // Trustpilot 2.3/5 (small sample). Fizzy/Greystar historically flexible on visa status.
    // Homeppl backend likely. Right to Rent checks required.
    // AGREEMENT: ast
    // REFERENCING: homeppl (Greystar subsidiary — Homeppl backend likely)
    // INTERNATIONAL: case-by-case
    // VISA: case-by-case
    // OPEN_BANKING: true (Homeppl)
    // REALISM: achievable-with-guarantor — Greystar/Homeppl, but lower price floor than other Fizzy
    // COST_TIER: mid-range (estimated ~£1,600-1,900 for 1-bed in Canning Town)
    buildProject({
      id: "fizzy-canning-town", area_id: "canning-town", name: "Fizzy Canning Town", developer: "Fizzy Living", operator: "Fizzy Living (Greystar subsidiary)", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable-with-guarantor",
      preview: "Fizzy Living BTR — ~140 homes. Greystar subsidiary. Potentially Homeppl-backed referencing (needs verification). Sleeper grad-visa target at a lower price floor than trophy BTR addresses.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Fizzy Living BTR — functional mid-market build quality. Trustpilot sentiment is poor (2.3/5) but small sample.",
        t4_1_amenity_package: "Decent BTR amenity package.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    // RESEARCH: Argo Apartments — Grainger plc BTR (UK's largest listed residential landlord).
    // 134 units. 1-bed from £2,080-2,180 pcm, 2-bed from £2,515-2,650 pcm (OnTheMarket Apr 2026).
    // Grainger offers long-term leases (1, 3, or 5 years). Average stay 32 months.
    // Digital resident journey: online viewing, application, referencing, contract.
    // Grainger referencing: structured/in-house digital process. Provider: UNVERIFIED.
    // Amenities: reception, meeting room, snug, work zone, TV/games room, dining/conference,
    // balconies, roof terrace, gym, CCTV, secure cycle storage, free WiFi.
    // AGREEMENT: ast
    // REFERENCING: unknown (Grainger uses structured digital referencing, provider not confirmed)
    // INTERNATIONAL: case-by-case (institutional BTR, structured process)
    // VISA: case-by-case
    // OPEN_BANKING: UNVERIFIED
    // REALISM: unknown — Grainger referencing structured but visa policy not documented
    // COST_TIER: premium (1-bed from £2,080)
    buildProject({
      id: "argo-apartments",
      area_id: "canning-town",
      name: "Argo Apartments",
      developer: "AGC BTR / Bouygues UK",
      operator: "Grainger plc",
      building_type: "BTR",
      build_phase: "complete",
      tenure: ["rent"],
      realism: "unknown",
      preview: "134-unit BTR operated by Grainger plc (UK's largest listed residential landlord). Part of £600m Hallsville Quarter. 1-beds from approx. £2,070 pcm. Professional referencing, likely more visa-friendly.",
      amenity_tier: "strong",
      overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Grainger plc-operated BTR within the Hallsville Quarter regeneration — professional institutional management.",
        t4_1_amenity_package: "Strong — reception lobby, meeting room, snug, work zone, TV and games room, dining and conference suite, balconies, roof terrace, gym, CCTV, secure cycle storage, free WiFi.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    // RESEARCH: Fizzy East 16 — 292-unit BTR in Brunel Street Works, Fizzy/Greystar.
    // Studios from ~£1,500 pcm (buildington), studio from £1,991 pcm (Apr 2026 listing).
    // 1-bed from ~£1,800 pcm (per preview). Two 25-storey towers.
    // Amenities: podium gardens, co-working suite, meeting room, lounges, cycle storage, parking, app.
    // Fizzy/Greystar: historically visa-flexible, Homeppl backend likely.
    // AGREEMENT: ast
    // REFERENCING: homeppl (Greystar subsidiary)
    // INTERNATIONAL: case-by-case
    // VISA: case-by-case
    // OPEN_BANKING: true (Homeppl)
    // REALISM: achievable-with-guarantor — Greystar/Homeppl, studios from ~£1,500
    // COST_TIER: mid-range (studios ~£1,500-1,991, 1-beds ~£1,800)
    buildProject({
      id: "fizzy-east-16",
      area_id: "canning-town",
      name: "Fizzy East 16",
      developer: "Opal / Linden Homes (Vistry Group)",
      operator: "Fizzy Living (Greystar)",
      building_type: "BTR",
      build_phase: "complete",
      tenure: ["rent"],
      realism: "achievable-with-guarantor",
      preview: "292-unit BTR in two 25-storey towers within Brunel Street Works. Fizzy/Greystar operated — historically flexible on visa status. Studios from approx. £1,500 pcm, 1-beds from approx. £1,800 pcm.",
      amenity_tier: "decent",
      overall_grade: "C",
      architects: ["GRID Architects", "Cartwright Pickard"],
      evaluation_reasoning: {
        t2_6_building_quality: "Fizzy Living BTR within the broader 975-home Brunel Street Works. Completed autumn 2022. Professional Greystar management.",
        t4_1_amenity_package: "Decent — residents' amenity areas (SUNA Interior Design), gym, communal areas, bike storage, free broadband, on-site management.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    // RESEARCH: Rathbone Market (Folio London) — 35-unit small BTR. Folio London is small-scale.
    // REALISM: unknown — small operator, referencing not documented
    // COST_TIER: UNVERIFIED
    buildProject({
      id: "rathbone-market-folio",
      area_id: "canning-town",
      name: "Rathbone Market (Folio London)",
      developer: "Muse Developments",
      operator: "Folio London",
      building_type: "BTR",
      build_phase: "complete",
      tenure: ["rent"],
      realism: "unknown",
      preview: "35-unit small BTR portfolio within Rathbone Market near Canning Town station. Folio London is a small-scale BTR operator.",
      amenity_tier: "basic",
      overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Small-scale BTR (35 units) within larger Rathbone Market development. Functional build quality.",
        t4_1_amenity_package: "Basic — small managed rental portfolio within a mixed-use development.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    // RESEARCH: Rathbone East — Savills managed PRS. 1-beds from ~£1,375 pcm.
    // Notably affordable. Rooftop allotments, courtyard, on-site Resident Services Manager.
    // AGREEMENT: ast
    // REFERENCING: unknown (Savills managed lettings)
    // REALISM: unknown — Savills referencing standard but visa policy undocumented
    // COST_TIER: affordable (1-beds from ~£1,375)
    buildProject({
      id: "rathbone-east",
      area_id: "canning-town",
      name: "Rathbone East",
      developer: "Unknown",
      operator: "Savills (managed lettings)",
      building_type: "PRS",
      build_phase: "complete",
      tenure: ["rent"],
      realism: "unknown",
      preview: "Managed rental near Canning Town station. Notably affordable — 1-beds from approx. £1,375 pcm. Rooftop allotments, communal courtyard, on-site Resident Services Manager.",
      amenity_tier: "decent",
      overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "PRS managed rental, completed 2018-2020. Functional build quality with on-site management.",
        t4_1_amenity_package: "Decent — secure bike storage, rooftop allotments, communal landscaped courtyard, on-site Resident Services Manager.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
  ],

  external_links: [
    { url: "https://en.wikipedia.org/wiki/Canning_Town", label: "Wikipedia — Canning Town", type: "wikipedia", accessed_date: "2026-04-12" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

// ── Project external links & price transparency ──────────────────────────
const fizzyCT = canningTown.projects.find(p => p.id === "fizzy-canning-town")!;
fizzyCT.external_links = [
  { url: "https://fizzyliving.com/locations/canning-town", label: "Fizzy Living — Canning Town", type: "operator", accessed_date: "2026-04-17" },
  { url: "https://www.greystar.com/fizzy-canning-town-london-uk/p_18858", label: "Greystar — Fizzy Canning Town", type: "operator", accessed_date: "2026-04-17" },
  { url: "https://www.homeviews.com/development/fizzy-canning-town-e16", label: "Fizzy Canning Town — HomeViews", type: "homeviews", accessed_date: "2026-04-17" },
];
fizzyCT.rental.price_transparency = "enquire";
fizzyCT.rental.prices = {
  one_bed: { min: 1600, max: 2000, currency: "GBP", per: "month" },
  bills_included: false,
  notes: "1-bed band from Fizzy filter UI April 2026. V1 band was stale.",
};
fizzyCT.rental.affordability = "comfortably-affordable";
fizzyCT.building_quality = {
  sound_insulation: "good",
  thermal_performance: "average",
  layout_notes: "Part of Vermilion Tower — 15-storey block within Barratt's wider development. Gated community feel. Apartments are modern but no air conditioning — 'stuffy' in warm weather per HomeViews reviews.",
  kitchen_quality: "average",
  heating_type: "communal",
  notes: "15-storey Vermilion Tower block. Gated-community feel; safe-building envelope noted in reviews.",
};
fizzyCT.amenities = {
  pool: false,
  pool_notes: "",
  gym: false,
  gym_quality: "unknown",
  concierge: "daytime",
  sky_lounge: false,
  co_working: false,
  dining_room: false,
  cinema_room: false,
  rooftop_terrace: false,
  parking: true,
  bike_storage: true,
  pet_policy: "Pet friendly",
  other_amenities: ["Courtyard", "Kids play area", "Security staff"],
  overall_tier: "decent",
};
fizzyCT.architecture = {
  architects: [],
  awards: [],
  is_signature: false,
  style_notes: "Part of Barratt's Vermilion Tower (15 storeys). Architect not published for the Fizzy block specifically.",
};
fizzyCT.long_form = {
  full: "Fizzy Canning Town is Fizzy Living's ~140-home BTR within Barratt's Vermilion Tower — a 15-storey block with gated-community feel. Fizzy operates the rental tenure; Greystar backend provides Homeppl referencing with Open Banking route. Studios and 1-beds. Canning Town station (Jubilee + DLR) 5 minutes walk; Custom House Elizabeth 1 DLR stop. 1-bed £1,600-2,000 per month (refreshed April 2026).",
  living_experience: "4.45/5 on HomeViews across 203 reviews — the highest in the Fizzy portfolio. Residents consistently praise responsive management and named staff (Mohammad, Paul, Samson). Dominant complaints: bin room odour, no air conditioning so 'stuffy' in warm weather, expensive basement parking, no on-site gym or rooftop.",
  notable_features: "Part of Barratt's Vermilion Tower (15 storeys); gated-community feel; Canning Town station 5-min walk; Jubilee + DLR + Elizabeth-adjacent (Custom House); highest HomeViews score in Fizzy portfolio.",
};
fizzyCT.resident_signal = {
  homeviews_score: 4.45,
  homeviews_url: "https://www.homeviews.com/development/fizzy-canning-town-e16",
  summary: "4.45/5 across 203 reviews (highest in Fizzy portfolio). Responsive management and named staff consistently praised. Complaints focus on no AC / stuffy summers, bin room odour, and lack of on-site gym/rooftop.",
  common_praise: ["Responsive, organised management and maintenance", "Modern design, spacious, well-lit apartments", "Transport links (Jubilee + DLR + Elizabeth via Custom House)", "Safe gated community", "Named staff: Mohammad, Paul, Samson"],
  common_complaints: ["Bin room odour", "Limited/expensive basement parking", "No air conditioning — 'stuffy' in warm weather", "No on-site gym or rooftop", "Motorway noise on certain aspects"],
};

const argo = canningTown.projects.find(p => p.id === "argo-apartments")!;
argo.external_links = [
  { url: "https://www.graingerplc.co.uk/find-a-new-home/argo-apartments", label: "Grainger plc — Argo Apartments", type: "operator", accessed_date: "2026-04-12" },
  { url: "https://www.homeviews.com/development/argo-apartments-e16", label: "Argo Apartments — HomeViews", type: "homeviews", accessed_date: "2026-04-17" },
];
argo.rental.price_transparency = "listed";
argo.rental.prices = {
  one_bed: { min: 2050, max: 2200, currency: "GBP", per: "month" },
  two_bed: { min: 2450, max: 2700, currency: "GBP", per: "month" },
  bills_included: false,
  notes: "Band from Rightmove active listings + graingerplc.co.uk/developments/argo-apartments",
};
argo.rental.affordability = "at-budget";
argo.building_quality = {
  epc_rating: "B",
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "Open-plan living/kitchen with separate bedrooms, balcony on most units, integrated storage. 134 homes across a single 20+ storey tower inside the £600m Hallsville Quarter regeneration.",
  kitchen_quality: "good",
  heating_type: "communal",
  notes: "Built 2018 — oldest of the three London Grainger buildings. Traffic noise is a recurring review theme; otherwise strong review signal.",
};
argo.amenities = {
  pool: false,
  pool_notes: "",
  gym: true,
  gym_quality: "average",
  concierge: "24h",
  sky_lounge: false,
  co_working: true,
  dining_room: true,
  cinema_room: false,
  rooftop_terrace: true,
  parking: true,
  bike_storage: true,
  pet_policy: "Pets considered on application",
  other_amenities: ["Games room (ping pong)", "Guest hotel room", "Free Wi-Fi"],
  overall_tier: "decent",
};
argo.architecture = {
  architects: [],
  awards: [],
  is_signature: false,
  style_notes: "Single mid-rise BTR tower inside the Hallsville Quarter masterplan. Brick-and-glass idiom, no distinctive silhouette.",
};
argo.long_form = {
  full: "Argo Apartments is Grainger's 134-home BTR tower inside the £600m Hallsville Quarter regeneration in Canning Town, delivered 2018. Grainger developed and operates the building in-house with a 24/7 on-site team — the fullest concierge posture of the three London Grainger sites. Amenity package is broader than most BTR at this tier: resident-bookable guest hotel room, games room (ping pong), large dining room, meeting and conference rooms, a gym, and a panoramic-view rooftop terrace. Canning Town station (Jubilee + DLR) is two minutes' walk, putting Canary Wharf at 4 minutes and Bond Street at 17. 1-bed sits in the £2,050-2,200 band; 2-bed £2,450-2,700. Grainger's verbatim guarantor-acceptance and 'Better Renting' long-tenancy offer (1/3/5-year leases) are the grad-visa unlocks. Traffic noise is the one persistent review complaint — the building fronts a very busy road.",
  living_experience: "HomeViews rates the building 3.94/5 with consistent praise for the 24/7 concierge team — responsive, friendly, professional. Gym, meeting rooms, and the roof terrace are well-used. The dominant complaint is traffic noise; acoustic-sensitive residents should request a unit on a non-road-facing aspect.",
  notable_features: "24/7 concierge (richer than Fortunes Dock / Windlass); resident-bookable guest hotel room (unusual at this tier); ping-pong games room; inside the Hallsville Quarter high street + Morrisons within 2 minutes; Canning Town Jubilee+DLR at the door.",
};
argo.resident_signal = {
  homeviews_score: 3.94,
  homeviews_url: "https://www.homeviews.com/development/argo-apartments-e16",
  summary: "3.94/5 on HomeViews across multiple review cycles. Consistent praise for the 24/7 concierge team (named by multiple residents) and the amenity package. Consistent complaint is traffic noise — the building fronts a busy arterial road.",
  common_complaints: ["Traffic noise from the fronting road", "No on-street parking in the wider area"],
  common_praise: ["24/7 concierge team responsiveness", "Gym and amenity package quality", "Transport connectivity"],
};

const fizzyE16 = canningTown.projects.find(p => p.id === "fizzy-east-16")!;
fizzyE16.external_links = [
  { url: "https://fizzyliving.com/locations/east-16", label: "Fizzy Living — East 16", type: "operator", accessed_date: "2026-04-17" },
  { url: "https://www.greystar.com/fizzy-east-16-london-uk/p_18865", label: "Greystar — Fizzy East 16", type: "operator", accessed_date: "2026-04-17" },
  { url: "https://www.homeviews.com/development/fizzy-east16-e16", label: "Fizzy East 16 — HomeViews", type: "homeviews", accessed_date: "2026-04-17" },
];
fizzyE16.rental.price_transparency = "enquire";
fizzyE16.rental.prices = {
  studio: { min: 1500, max: 2000, currency: "GBP", per: "month" },
  one_bed: { min: 1800, max: 2200, currency: "GBP", per: "month" },
  bills_included: false,
  notes: "Studios £1,500-2,000, 1-beds £1,800-2,200 per Fizzy filter UI April 2026. V1 band was stale.",
};
fizzyE16.building_quality = {
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "Two 25-storey towers within Brunel Street Works masterplan (975-home wider scheme by Linden Homes/Vistry). SUNA Interior Design credited on resident amenity spaces. Studios and 1-beds.",
  kitchen_quality: "average",
  heating_type: "communal",
  notes: "Completed autumn 2022. Quieter than Fizzy Poplar despite bustling location — HomeViews praise for 'impressively quiet inside'.",
};
fizzyE16.amenities = {
  pool: false,
  pool_notes: "",
  gym: true,
  gym_quality: "average",
  concierge: "daytime",
  sky_lounge: false,
  co_working: true,
  dining_room: false,
  cinema_room: false,
  rooftop_terrace: false,
  parking: true,
  bike_storage: true,
  pet_policy: "Pet friendly",
  other_amenities: ["Podium gardens", "Resident lounges", "Meeting room"],
  overall_tier: "decent",
};
fizzyE16.architecture = {
  architects: ["GRID Architects", "Cartwright Pickard"],
  awards: [],
  is_signature: false,
  style_notes: "Two 25-storey towers within Brunel Street Works masterplan (975-home wider scheme by Linden Homes/Vistry). SUNA Interior Design credited on resident amenity spaces.",
};
fizzyE16.long_form = {
  full: "Fizzy East 16 is a 292-unit BTR across two 25-storey towers within Brunel Street Works — a 975-home masterplan by Linden Homes/Vistry. Fizzy/Greystar operated with Homeppl referencing backend. Studios from £1,500 and 1-beds from £1,800 (refreshed April 2026 via Fizzy filter UI). GRID Architects + Cartwright Pickard designed the towers; SUNA Interior Design handled the amenity spaces. 30 seconds from Canning Town Station (Jubilee + DLR) — one of the tightest transport adjacencies in the dataset.",
  living_experience: "4.40/5 on HomeViews across 149 reviews. Responsive management and fast maintenance are the dominant praise threads. Complaints cluster on adjacent-construction Saturday-morning noise, studio appliance noise (boiler/fridge in compact units), rent increases, and limited info at viewing stage.",
  notable_features: "Two 25-storey towers within Brunel Street Works masterplan; 30 seconds from Canning Town Station; GRID + Cartwright Pickard architects; SUNA Interior Design on amenity spaces; podium gardens; lowest studio price floor in the Fizzy batch.",
};
fizzyE16.resident_signal = {
  homeviews_score: 4.40,
  homeviews_url: "https://www.homeviews.com/development/fizzy-east16-e16",
  summary: "4.40/5 across 149 reviews. Responsive management and fast maintenance consistently praised. Complaints concentrate on construction noise from adjacent phases, studio appliance noise, and rent increases.",
  common_praise: ["Responsive management / fast maintenance", "30 seconds from Canning Town Station", "Modern aesthetic + co-working spaces", "Professional leasing staff", "Community engagement events"],
  common_complaints: ["Adjacent construction Saturday-morning noise", "Studio boiler/fridge noise noticeable", "Rent increases", "Limited info at viewing stage", "Garden renovation disruption"],
};
// Affordability tag for fizzy-east-16: task spec calls for studios → "well-under-budget" and
// 1-bed → "comfortably-affordable". Since the schema holds a single tag, use "well-under-budget"
// as the studio-floor signal since studios are the lowest unit here (£1,500) — per the V2
// enrichment summary table which classifies the studio tier as well-under-budget.
fizzyE16.rental.affordability = "well-under-budget";

const folioRM = canningTown.projects.find(p => p.id === "rathbone-market-folio")!;
folioRM.external_links = [
  { url: "https://foliolondon.co.uk/", label: "Folio London", type: "operator", accessed_date: "2026-04-12" },
];
folioRM.rental.price_transparency = "enquire";

const rathboneEast = canningTown.projects.find(p => p.id === "rathbone-east")!;
rathboneEast.external_links = [
  { url: "https://www.rathboneeast.com/", label: "Rathbone East — official site", type: "operator", accessed_date: "2026-04-12" },
];
rathboneEast.rental.price_transparency = "listed";

export default canningTown;
