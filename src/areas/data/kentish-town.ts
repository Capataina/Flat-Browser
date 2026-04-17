import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const kentishTown: Area = {
  id: "kentish-town",
  name: "Kentish Town",
  aliases: ["KT", "NW5"],
  borough: "Camden",
  postcodes: ["NW5"],

  headline:
    "Zone 2 Northern Line + Thameslink — the calmer residential cousin of Camden Town with Hampstead Heath in walking range. 14 min to Bank, 9 to Tottenham Court Road.",
  preview:
    "Kentish Town delivers Camden-grade connectivity without Camden's nightlife noise. Northern Line + Thameslink give two independent corridors with Bank in 14 minutes. Hampstead Heath (East Heath) is a genuine 12-minute walk. The high street has a real butcher/baker/deli-independents pattern. Station is currently closed for step-free access works (multi-year programme).",

  long_form: {
    full: "Kentish Town is the calmer residential cousin of Camden Town — materially quieter, with a real high street of NW5 independents, and the same Northern Line connectivity. Thameslink at Kentish Town adds a genuine second corridor reaching Farringdon and the Elizabeth Line interchange. Hampstead Heath (East Heath) is 12 minutes on foot, which is genuine weekly-use walking range. The station is currently closed for step-free access works (2023 closure, multi-year programme), which is a meaningful disruption but also a delivery commitment to the area.",
    history: "Victorian residential suburb that has maintained a strong independent high street character. Kentish Town City Farm is a local institution.",
    vibe: "Residential neighbourhood with an independent high street. Calm, family-friendly, with a strong young professional rental layer.",
    weekday: "A Tuesday at 7pm: high street busy with after-work shoppers. Residents heading to the Heath.",
    weekend: "A Saturday: Hampstead Heath walks. High street cafes. Kentish Town City Farm.",
    notable: "Hampstead Heath proximity; Kentish Town City Farm; independent high street; Forum music venue.",
    croydon_comparison: "Kentish Town is Zone 2 with Northern + Thameslink and the Heath in walking range. More expensive than Croydon but meaningfully better connected and with a much stronger green/daily-life layer.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Northern", type: "tube" },
      { name: "Thameslink", type: "rail" },
      { name: "Mildmay line", type: "overground" },
    ],
    primary_stations: [
      { name: "Kentish Town", lines: ["Northern", "Thameslink"], walk_minutes_from_centre: 3 },
      { name: "Kentish Town West", lines: ["Mildmay line"], walk_minutes_from_centre: 8 },
      { name: "Tufnell Park", lines: ["Northern"], walk_minutes_from_centre: 10 },
    ],
    times_to_anchors: { city_of_london: 14, canary_wharf: 22, soho_fitzrovia: 9, kings_cross_shoreditch: 7 },
    multi_cluster_score: 4,
    redundancy_score: 4,
    notes: "Kentish Town is presently closed for step-free access works (closed June 2023, reopening expected mid-2027 after the Thameslink platform upgrade). During closure, Northern Line services run through without stopping — residents use replacement buses (KT1) or walk 10 min to Tufnell Park / 8 min to KT West. Thameslink service from Kentish Town station continues during the tube closure. The reopening delivers lifts, new platform access, and is a lasting upgrade. Northern Line Bank branch direct to the City in 14 minutes is a headline strength.",
    sources: [
      { url: "https://tfl.gov.uk/travel-information/improvements-and-projects/kentish-town-station-upgrade", label: "TfL — Kentish Town station upgrade", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL JourneyPlanner", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://www.thameslinkrailway.com/", label: "Thameslink Railway", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 22 },
      { cohort: "30-39", pct: 27 },
      { cohort: "40-49", pct: 18 },
      { cohort: "50+", pct: 33 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 48 },
      { group: "White — other", pct: 22 },
      { group: "Asian or Asian British", pct: 11 },
      { group: "Mixed", pct: 8 },
      { group: "Black or Black British", pct: 7 },
      { group: "Other ethnic group", pct: 4 },
    ],
    household_mix: [
      { type: "Single person", pct: 35 },
      { type: "Couple no children", pct: 24 },
      { type: "Couple with children", pct: 19 },
      { type: "Lone parent", pct: 8 },
      { type: "Shared household", pct: 10 },
      { type: "Other", pct: 4 },
    ],
    student_pct: 12,
    professional_renter_pct: 42,
    notes: "Strongly young-professional-renter weighted, with a creative/media skew (local employment pattern around Camden Town's creative cluster). Diverse within a 'professional London' grain — the ethnic mix is less international than Finsbury Park or Tottenham Hale. Rapid gentrification trajectory since ~2015 is visible in household-income data; family mix is stable but single-person households have grown. Strong cohort of long-term Irish, Bengali, and Greek-Cypriot families in pockets.",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "safe",
    crime_vs_borough: "below",
    crime_vs_croydon: "much-safer",
    after_dark_assessment: "Meaningfully safer than Camden Town proper after dark. The high street (Kentish Town Road / Fortess Road spine) stays populated until ~23:00 thanks to a solid independent-pub and restaurant grain — The Pineapple, The Bull & Gate, The Assembly House, Knowhere Special — that keeps steady foot traffic. Women-walking-alone reports on r/London and Mumsnet consistently rate Kentish Town 'safe' — the residential side streets toward Dartmouth Park and Tufnell Park are low-friction and well-lit. The specific risk vector is around the Regis Road / Murphy's Yard industrial edge (currently redeveloping) and occasional moped-enabled phone thefts on the high street. No violent-crime cluster. Kentish Town police station is active.",
    concerns: [
      "Occasional moped-enabled phone theft on Kentish Town Road between tube station and Prince of Wales Road junction (2024-25 pattern)",
      "Station forecourt closed during step-free works until 2027 — replacement-bus stops at Fortess Road slightly poorly-lit",
    ],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police/kentish-town/", label: "Met Police — Kentish Town", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: false,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Hampstead Heath (East Heath / Parliament Hill)", size_acres: 790, walk_minutes: 12, notes: "Genuine weekly-use walking range — Parliament Hill viewpoint, swimming ponds, wilderness scale." },
      { name: "Talacre Gardens", size_acres: 3, walk_minutes: 5, notes: "Local community park, children's play, sports court." },
      { name: "Kentish Town City Farm", size_acres: 4, walk_minutes: 10, notes: "Working city farm — community institution, free entry, ponies and pigs." },
      { name: "Waterlow Park (adjacent, Highgate)", size_acres: 27, walk_minutes: 18, notes: "Terraced Victorian park with Lauderdale House and ponds." },
      { name: "Cantelowes Gardens", size_acres: 4, walk_minutes: 12, notes: "Local park with skatepark and ball courts." },
    ],
    overall_assessment: "Core green identity. Hampstead Heath at 12 minutes is the headline — residents walk to Parliament Hill weekly for the skyline view, the swimming ponds (unheated ponds open year-round), and the wilderness edge toward Highgate. Kentish Town City Farm is a community anchor. Talacre Gardens is a usable local park.",
    sources: [
      { url: "https://www.cityoflondon.gov.uk/things-to-do/green-spaces/hampstead-heath", label: "City of London — Hampstead Heath", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.ktcityfarm.org.uk/", label: "Kentish Town City Farm", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.camden.gov.uk/parks-open-spaces", label: "Camden Council — parks", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Sainsbury's Kentish Town", type: "supermarket", walk_minutes: 5, notes: "Full-range store on Camden Road / KT Road junction." },
      { name: "M&S Food Kentish Town", type: "supermarket", walk_minutes: 4, notes: "Simply Food on the high street." },
      { name: "Phoenicia Food Hall", type: "mediterranean-grocer", walk_minutes: 6, notes: "Institutional Middle Eastern / Mediterranean deli — full counter fish, cheese, charcuterie." },
      { name: "Kentish Town Health Food Store", type: "health-food", walk_minutes: 4, notes: "Independent health/organic food shop." },
      { name: "Hampstead Butcher & Providore (branch)", type: "butcher", walk_minutes: 4, notes: "Quality independent butcher." },
    ],
    gyms: [
      { name: "PureGym Kentish Town", type: "budget-gym", walk_minutes: 4, notes: "24h budget gym on Kentish Town Road." },
      { name: "The Gym Kentish Town", type: "budget-gym", walk_minutes: 5, notes: "Alternative budget 24h gym." },
      { name: "Kentish Town Sports Centre", type: "council-leisure", walk_minutes: 3, notes: "Victorian baths converted — swimming pool, gym, fitness classes." },
      { name: "BLOK London Kentish Town", type: "boutique-studio", walk_minutes: 8, notes: "Boutique strength/HIIT studio, well-regarded." },
      { name: "London Fight Factory (adjacent, Camden)", type: "martial-arts", walk_minutes: 12, notes: "BJJ / MMA / Muay Thai — established club." },
      { name: "Camden Boxing Club", type: "martial-arts", walk_minutes: 10, notes: "Boxing club with fitness classes." },
    ],
    food_and_drink: [
      { name: "The Assembly House", type: "gastropub", walk_minutes: 3, notes: "Landmark Victorian pub, well-reviewed kitchen." },
      { name: "The Bull & Gate", type: "pub", walk_minutes: 4, notes: "Former music-venue pub, now gastropub — live music history." },
      { name: "The Pineapple", type: "pub", walk_minutes: 6, notes: "Grade II-listed community local — Thai kitchen." },
      { name: "Knowhere Special", type: "cocktail-bar", walk_minutes: 4, notes: "Quality cocktail bar on Kentish Town Road." },
      { name: "Mario's Cafe", type: "cafe", walk_minutes: 6, notes: "Decades-old greasy-spoon/cafe institution (featured in Saint Etienne songs)." },
      { name: "Vrisaki", type: "greek-restaurant", walk_minutes: 10, notes: "Long-running Greek-Cypriot — Tottenham Lane corner." },
      { name: "Gail's / Pophams / Caffe Nero", type: "cafe-chain", walk_minutes: 4, notes: "Standard quality-tier cafes on the high street." },
    ],
    health: [
      { name: "James Wigg Practice", type: "gp", walk_minutes: 5, notes: "Large Kentish Town Health Centre GP practice." },
      { name: "Caversham Group Practice", type: "gp", walk_minutes: 6, notes: "Alternative NHS GP." },
      { name: "Boots Pharmacy Kentish Town", type: "pharmacy", walk_minutes: 4, notes: "High street pharmacy." },
      { name: "Royal Free Hospital (adjacent)", type: "nhs-hospital", walk_minutes: 18, notes: "Nearest major A&E (or UCH 15 min south)." },
    ],
    cultural: [
      { name: "The Forum Kentish Town", type: "music-venue", walk_minutes: 4, notes: "Grade II-listed Art Deco music venue — 2,300 capacity, major touring gigs." },
      { name: "The Lion & Unicorn Theatre", type: "theatre", walk_minutes: 4, notes: "Fringe theatre above a pub." },
      { name: "Kentish Town Library", type: "library", walk_minutes: 3, notes: "Camden Council library on the high street." },
      { name: "Camden Arts Centre (adjacent)", type: "gallery", walk_minutes: 20, notes: "Well-regarded contemporary gallery at Finchley Road." },
    ],
    notes: "Kentish Town's amenity profile is the template for 'young-professional London 15-minute neighbourhood'. The high street delivers a real independent grain — butcher, baker, health food store, Mediterranean deli, cocktail bars, pubs with kitchens, a greasy-spoon cafe institution — not a chain-dominant retail strip. The Forum is a genuine cultural anchor. The gym stack is decent-commercial rather than premium — Virgin Active / Third Space are absent in Kentish Town itself but accessible at Swiss Cottage.",
  },
  regeneration: {
    status: "active",
    investment_pipeline: "Two active programmes: (1) Kentish Town station step-free access works (TfL, ~£40m, closed June 2023, reopening expected mid-2027 — delivers lifts and new Thameslink platform access as a permanent upgrade); (2) Murphy's Yard (ST Group, Planning approved 2023 — 1,180 homes, commercial/creative space, new streets, public realm on former Murphy's Waste Management industrial site behind Regis Road, 12-year phased delivery starting 2024). Supplementary: West Kentish Town Estate redevelopment (Camden Council, AHMM architects, 850 homes, planning approved Dec 2025, phased delivery 10+ years; 93% resident ballot approval).",
    recent_milestones: [
      "2023 — Kentish Town station closed for step-free access works",
      "2023 — Murphy's Yard planning permission granted",
      "2024 — Murphy's Yard enabling works commenced",
      "2025 — West Kentish Town Estate planning permission granted (AHMM-designed)",
    ],
    upcoming_milestones: [
      "2026-2027 — Kentish Town station step-free reopening expected",
      "2026-2028 — Murphy's Yard Phase 1 residential delivery (~350 homes)",
      "2027+ — West Kentish Town Estate early phases",
    ],
    trajectory_through_2027: "Mild-to-moderate ascending trajectory. In August 2027, Caner's visa window: Kentish Town station should have reopened with step-free access, Murphy's Yard Phase 1 will be completing its first residential tranche, and West Kentish Town Estate will be in early phase 1. The independent high-street character will be intact — these are edge regeneration programmes, not core-character overhauls. The area is not transformed by 2027 but the slow-burn 'gentrification with heritage preserved' trajectory continues in a clearly favourable direction.",
    sources: [
      { url: "https://tfl.gov.uk/travel-information/improvements-and-projects/kentish-town-station-upgrade", label: "TfL — KT upgrade", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://www.murphysyard.com/", label: "Murphy's Yard (ST Group)", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.camden.gov.uk/west-kentish-town-estate", label: "Camden Council — West KT Estate", type: "council", accessed_date: "2026-04-17" },
      { url: "https://www.ahmm.co.uk/projects/west-kentish-town-estate", label: "AHMM — West KT Estate", type: "other", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Pass with high confidence. Calmer residential cousin of Camden Town.",
        "1.2": "Modern rental stock exists. Murphy's Yard regeneration adding new stock.",
        "1.3": "Northern Line + Thameslink. Zone 2. 14 min to Bank, 9 to TCR.",
        "1.4": "No dominant BTR operator but active professional rental market.",
        "1.5": "Independent high street is well-maintained.",
        "1.6": "Not in decline — station works and Murphy's Yard show active investment.",
      },
      "good",
      "T1 clean on all six rows.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Independent high street delivers complete walkable essentials.",
        "2.2": "Quality grocery on the high street.",
        "2.3": "Gym options available in the Kentish Town / Camden corridor.",
        "2.4": "Hampstead Heath (East Heath) 12 min walk. Core green identity. T2.4 pass — strong.",
        "2.5": "Quiet residential at night. No nightlife pressure.",
        "2.7": "Camden borough young professional rental skew.",
      },
      "good",
      "T2 strong. Heath access and complete high street deliver excellent daily life.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "partial", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "Station works and Murphy's Yard show active investment.",
        "3.2": "Forum music venue. Kentish Town City Farm. No major cultural institution.",
        "3.3": "Distinct sense of place — NW5 independent high street character.",
        "3.4": "Complete 15-minute neighbourhood.",
        "3.5": "No RIBA jury wins 2024/25. FT/Guardian high-street-revival features exist.",
        "3.6": "Residential rhythm — busy high street by day, quiet at night.",
      },
      "moderate",
      "T3 moderate. Good sense of place but no cultural institution or architectural distinction.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "pass" },
      {
        "5.1": "4/4 anchors ≤25 min. Average 14 min.",
        "5.2": "Northern + Thameslink — two independent corridors. Redundancy 4/5.",
        "5.3": "Mild ascending — station upgrade reopens inside 2027 window.",
        "5.4": "Strong cafe culture on the independent high street.",
      },
      "good",
      "T5 strong across all four rows. Good connectivity, redundancy, trajectory, and third spaces.",
    ),
    overall_grade: "B",
    grade_reasoning: "B+ — clean T1, strong T2 and T5, with Heath access and dual-line connectivity. T3 identity is the only moderate tier. A quiet strong performer.",
  },

  projects: [
    // RESEARCH: The Tipton — 47-unit boutique BTS, 2025 completion. Individual landlord rental.
    // 1-bed from ~£2,200 pcm. Two rooftop terraces with Heath/City views.
    // REALISM: unknown — individual landlord
    // COST_TIER: premium (1-bed from ~£2,200)
    buildProject({
      id: "the-tipton", area_id: "kentish-town", name: "The Tipton", developer: "GM London", operator: "Individual landlords", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "47-unit boutique scheme at 27-29 Highgate Road, NW5. 6 storeys. Less than 0.1 miles from Kentish Town station. Two communal rooftop terraces with views over Hampstead Heath and City. 1-bed from ~£2,200 pcm.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "New-build 2025 to modern specification. Small scale allows attention to detail.",
        t4_1_amenity_package: "Decent — concierge, 2 communal rooftop terraces, private outdoor space for every unit. No gym or pool.",
        t4_4_signature_arch: "Not signature-authored. Scenesmith interior design.",
      },
    }),
    // RESEARCH: West Kentish Town Estate — Camden Council, 850 homes, AHMM architects.
    // Planning approved Dec 2025, phased delivery 10+ years. Not yet built.
    // REALISM: unknown — not yet built
    // COST_TIER: UNVERIFIED (unbuilt)
    buildProject({
      id: "west-kentish-town-estate", area_id: "kentish-town", name: "West Kentish Town Estate Redevelopment", developer: "Camden Council", operator: "Camden Council", building_type: "Mixed", build_phase: "future", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Camden's largest Community Investment Programme project. 850 homes (326 council), AHMM architects, £565M investment, 93% resident ballot approval. Planning approved Dec 2025, phased delivery over 10+ years.",
      architects: ["AHMM"],
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "AHMM-designed — Stirling Prize-winning practice. Unbuilt so quality cannot be verified yet.",
        t4_1_amenity_package: "New public open spaces, play areas, neighbourhood improvements planned.",
        t4_4_signature_arch: "AHMM (Allford Hall Monaghan Morris) — Stirling Prize-winning practice. Significant for the area's long-term trajectory.",
      },
    }),
  ],

  external_links: [
    { url: "https://www.the-tipton.co.uk/", label: "The Tipton — GM London", type: "developer", accessed_date: "2026-04-12" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default kentishTown;
