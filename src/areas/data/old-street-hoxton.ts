import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Projects (extracted for external_links + price_transparency mutation) ──

// RESEARCH: The Stage EC2 — Moda Living BTR at Shoreditch edge.
const theStageEc2 = buildProject({
  id: "the-stage-ec2", area_id: "old-street-hoxton", name: "The Stage EC2", developer: "Galliard + McCourt Group", operator: "Moda Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
  preview: "Moda Living BTR at Shoreditch edge. Tier 8 operator with referencing opacity.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Modern BTR build. Moda Living management.",
    t4_1_amenity_package: "Strong shared amenities — gym, co-working, lounge.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
theStageEc2.external_links = [
  { url: "https://www.thestageshoreditch.com/", label: "The Stage — Shoreditch", type: "developer", accessed_date: "2026-04-12" },
];
theStageEc2.rental.price_transparency = "listed";

// RESEARCH: Principal Tower — Foster + Partners (Pritzker). Individual landlord rental.
const principalTower = buildProject({
  id: "principal-tower", area_id: "old-street-hoxton", name: "Principal Tower", developer: "Brookfield + Concord Pacific", operator: "Individual landlords", building_type: "Owner-Lease", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "Foster + Partners (Pritzker 1999) tower visible from the Shoreditch skyline. Premium amenity stack: pool, gym, spa, 24h concierge, sky lounge.",
  amenity_tier: "premium", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Foster + Partners delivery. Premium specification.",
    t4_1_amenity_package: "Premium — pool, gym, spa, 24h concierge, sky lounge.",
    t4_4_signature_arch: "Foster + Partners — Pritzker-firm tower. Signature.",
  },
});
principalTower.external_links = [
  { url: "https://www.principaltower.com/", label: "Principal Tower", type: "developer", accessed_date: "2026-04-12" },
];
principalTower.rental.price_transparency = "enquire";

// RESEARCH: Shoreditch Parkside — 290-unit, Hackney council, completion 2026.
const shoreditchParkside = buildProject({
  id: "shoreditch-parkside", area_id: "old-street-hoxton", name: "Shoreditch Parkside", developer: "London Borough of Hackney", operator: "Individual landlords", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unknown",
  preview: "290-unit scheme on Pitfield Street, north of Shoreditch Park. 4 blocks up to 10 storeys. Concierge, residents' lounge, workspaces, roof terrace. Completion expected 2026.",
  architects: ["Feilden Clegg Bradley Studios"],
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "New-build delivery by Feilden Clegg Bradley Studios — practice with strong reputation for housing quality.",
    t4_1_amenity_package: "Decent — 24/7 concierge, residents' lounge, workspaces, roof terrace.",
    t4_4_signature_arch: "Feilden Clegg Bradley Studios — RIBA Stirling Prize-winning practice. Not a flagship design but a quality architect.",
  },
});
shoreditchParkside.external_links = [
  { url: "https://shoreditchparkside.co.uk/", label: "Shoreditch Parkside", type: "developer", accessed_date: "2026-04-12" },
];
shoreditchParkside.rental.price_transparency = "enquire";

const oldStreetHoxton: Area = {
  id: "old-street-hoxton",
  name: "Old Street / Hoxton",
  aliases: ["Old Street", "Hoxton", "Shoreditch North"],
  borough: "Islington",
  postcodes: ["EC1V", "EC2A", "N1"],

  headline:
    "Zone 1 tech-city hub — Northern Line plus Overground at Hoxton. 4 minutes to Bank. The Shoreditch nightlife and dining ecosystem is on your doorstep but the residential grain is mixed.",
  preview:
    "Old Street is the tech-city centre of London with Northern Line access to Bank in 4 minutes and Canary Wharf in 13. Hoxton adds Overground (Windrush) for a second independent corridor. The nightlife fringe means T1.1 is a marginal pass rather than clean. Principal Tower (Foster + Partners) is the premium architectural anchor.",

  long_form: {
    full: "Old Street / Hoxton sits at the intersection of Islington and Hackney, anchored by the Old Street tech-city cluster and the Hoxton Square cultural scene. Northern Line at Old Street delivers Bank in 4 minutes. Hoxton (Overground Windrush) adds a second independent corridor reaching Whitechapel and the Elizabeth Line. The area is mature — the Old Street roundabout public realm transformation completed 2022–2023. The limitation is the Shoreditch nightclub belt, which generates ASB and noise on weekends, making T1.1 a marginal pass.",
    history: "The Old Street roundabout redevelopment (TfL + Islington Council) completed its public realm transformation in 2022-2023. The tech-city office cluster is mature. Hoxton Square area is mature.",
    vibe: "Tech-city by day, nightlife-adjacent by night. Hoxton Square has galleries and restaurants. The office tower cluster around the roundabout is busy weekdays, quiet weekends.",
    weekday: "A Tuesday at 7pm: office workers heading to bars and restaurants around Hoxton Square and Curtain Road.",
    weekend: "A Saturday night: Shoreditch nightlife spills into the area. Sunday morning is quiet with brunch cafes.",
    notable: "Principal Tower (Foster + Partners); Hoxton Square; Old Street roundabout redesign; tech-city office cluster.",
    croydon_comparison: "Old Street is Zone 1 with Bank in 4 minutes — incomparable to Croydon on connectivity. The nightlife fringe is the trade-off Croydon does not have.",
  },

  zones: ["Zone 1"],
  connectivity: {
    lines: [
      { name: "Northern", type: "tube" },
      { name: "Overground", type: "overground" },
    ],
    primary_stations: [
      { name: "Old Street", lines: ["Northern"], walk_minutes_from_centre: 3 },
      { name: "Hoxton", lines: ["Overground"], walk_minutes_from_centre: 10 },
    ],
    times_to_anchors: { city_of_london: 4, canary_wharf: 13, soho_fitzrovia: 10, kings_cross_shoreditch: 0 },
    multi_cluster_score: 5,
    redundancy_score: 3,
    notes: "Northern at Old Street + Great Northern mainline + Overground Windrush at Hoxton. Three independent corridors. Average ~7 min to anchors.",
    sources: [],
  },
  demographics: {
    primary_age_cohort: "18-29",
    age_breakdown: [
      { cohort: "18-29", pct: 32 },
      { cohort: "30-39", pct: 27 },
      { cohort: "40-49", pct: 15 },
      { cohort: "50+", pct: 26 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 36 },
      { group: "White — other", pct: 25 },
      { group: "Asian or Asian British", pct: 18 },
      { group: "Black or Black British", pct: 11 },
      { group: "Mixed", pct: 6 },
      { group: "Other ethnic group", pct: 4 },
    ],
    household_mix: [
      { type: "Single person", pct: 42 },
      { type: "Couple no children", pct: 22 },
      { type: "Couple with children", pct: 13 },
      { type: "Lone parent", pct: 9 },
      { type: "Shared household", pct: 10 },
      { type: "Other", pct: 4 },
    ],
    student_pct: 9,
    professional_renter_pct: 58,
    notes: "Hoxton East & Shoreditch + Bunhill wards, Census 2021. 20-39 cohort at ~59% — one of the youngest wards in London. Significant Bangladeshi-heritage community in Hoxton (~12% of ward).",
    sources: [
      { url: "https://www.ons.gov.uk/census/maps", label: "ONS Census 2021 — Hoxton East & Shoreditch + Bunhill", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "moderate",
    crime_vs_borough: "above",
    crime_vs_croydon: "safer",
    after_dark_assessment: "Weeknight (Mon-Thu) is safe — the tech-city core clears after 19:00 and residential streets north of Old Street are calm and well-lit. Friday and Saturday nights are the safety exception — the Shoreditch nightclub belt (Curtain Road, Rivington Street, Shoreditch High Street) generates drunk foot traffic, occasional fights, and opportunist phone-snatch. Walking Old Street roundabout → Principal Tower → Bezier residential grain at 23:00 Saturday is not threatening but is notably louder and messier than Bermondsey or Angel at the same hour.",
    concerns: [
      "Shoreditch nightclub belt ASB Fri/Sat night — Curtain Road, Rivington Street, Shoreditch High Street",
      "Opportunist phone-snatch on Old Street station approaches during nightlife peak",
      "Weekend club throwing-out noise 02:00-03:00",
    ],
    sources: [
      { url: "https://www.met.police.uk/sd/stats-and-data/", label: "Met Police crime data — EC1V, EC2A, N1", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: false,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Hoxton Square (gardens)", size_acres: 1, walk_minutes: 5, notes: "Designed square, surrounded by galleries and bars" },
      { name: "Shoreditch Park", size_acres: 15, walk_minutes: 10, notes: "Nearest genuine major green, used heavily on weekends" },
      { name: "Bunhill Fields", size_acres: 4, walk_minutes: 5, notes: "Historic dissenters' burial ground — William Blake, John Bunyan, Daniel Defoe graves" },
      { name: "Regent's Canal (City Road Basin)", walk_minutes: 15, notes: "North-west canal access" },
    ],
    overall_assessment: "Among the most green-poor Zone 1 areas in London. Shoreditch Park at 10 minutes is the only substantial green option; Bunhill Fields is a functional park but its character is more historic-memorial than lawn-and-playground.",
    sources: [
      { url: "https://www.hackney.gov.uk/parks", label: "Hackney Council — parks", type: "council", accessed_date: "2026-04-17" },
      { url: "https://www.islington.gov.uk/parks-and-outdoor-activities", label: "Islington Council — parks", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "M&S Simply Food Old Street", type: "supermarket", walk_minutes: 3, notes: "In-station food hall" },
      { name: "Sainsbury's City Road", type: "supermarket", walk_minutes: 5, notes: "Core supermarket" },
      { name: "Waitrose Moorgate", type: "supermarket", walk_minutes: 10, notes: "Premium grocery option" },
      { name: "Tesco Express Old Street", type: "convenience", walk_minutes: 2, notes: "Top-up convenience" },
      { name: "Broadway Market (Hoxton Street stretch)", type: "market", walk_minutes: 8, notes: "Street market" },
    ],
    gyms: [
      { name: "Gymbox Old Street", type: "premium boutique", walk_minutes: 3, notes: "Flagship of the Gymbox brand — signature club" },
      { name: "Barry's Old Street", type: "boutique", walk_minutes: 4, notes: "HIIT flagship" },
      { name: "1Rebel Broadgate", type: "boutique", walk_minutes: 8, notes: "Spin/boxing/reshape" },
      { name: "Third Space City (Wood Street)", type: "premium", walk_minutes: 12, notes: "Via Northern" },
      { name: "PureGym Old Street", type: "budget", walk_minutes: 4, notes: "24h budget" },
      { name: "F45 Shoreditch", type: "boutique", walk_minutes: 6, notes: "HIIT functional training" },
      { name: "Nuffield Health Old Street", type: "premium mid-tier", walk_minutes: 5, notes: "Full-service premium mid-tier" },
    ],
    food_and_drink: [
      { name: "Smoking Goat (Shoreditch)", type: "restaurant", walk_minutes: 6, notes: "Thai anchor" },
      { name: "BRAT (Shoreditch)", type: "restaurant", walk_minutes: 7, notes: "Michelin-starred" },
      { name: "Lyle's (Shoreditch)", type: "restaurant", walk_minutes: 7, notes: "Michelin-starred" },
      { name: "Pitt Cue (The Stage)", type: "restaurant", walk_minutes: 4, notes: "BBQ" },
      { name: "Ozone Coffee Roasters", type: "cafe", walk_minutes: 4, notes: "Work-capable flagship" },
      { name: "Grind Shoreditch High Street", type: "cafe", walk_minutes: 6, notes: "Work-capable" },
      { name: "The Ten Bells", type: "pub", walk_minutes: 10, notes: "Historic pub" },
    ],
    health: [
      { name: "Moorfields Eye Hospital", type: "hospital", walk_minutes: 5, notes: "Specialist eye hospital" },
      { name: "City Road Medical Centre (GP)", type: "GP", walk_minutes: 4, notes: "NHS GP" },
      { name: "Shoreditch Park Medical Centre (GP)", type: "GP", walk_minutes: 10, notes: "Alternative GP" },
      { name: "Boots Old Street", type: "pharmacy", walk_minutes: 2, notes: "Core pharmacy" },
    ],
    cultural: [
      { name: "White Cube Hoxton Square", type: "gallery", walk_minutes: 10, notes: "Legacy Britart gallery" },
      { name: "Rich Mix Cinema & Arts", type: "cultural centre", walk_minutes: 12, notes: "Cinema + venue" },
      { name: "Hoxton Hall", type: "music hall", walk_minutes: 8, notes: "1863 Victorian music hall" },
      { name: "Victoria Miro Gallery", type: "gallery", walk_minutes: 5, notes: "Contemporary gallery" },
    ],
    notes: "Gym density is genuinely top-tier — Gymbox Old Street is a signature aspirational club, Barry's and 1Rebel give the HIIT/bootcamp tier, Nuffield and Third Space City cover premium full-service, PureGym handles budget. F&B is weighted heavily toward the restaurant and night-out end.",
    sources: [
      { url: "https://www.gymbox.com/gyms/old-street", label: "Gymbox Old Street", type: "operator", accessed_date: "2026-04-17" },
      { url: "https://www.barrys.com/locations/old-street", label: "Barry's Old Street", type: "operator", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: {
    status: "complete",
    investment_pipeline: "Small-scale residential infill and office refurbishment only. Old Street roundabout redesign completed 2022-2023 was the major recent public-realm intervention. No large-scale masterplan active.",
    recent_milestones: [
      "2022-2023 — Old Street roundabout redesign completed (TfL + Islington + Hackney)",
      "2024 — Continued office refurbishment wave along City Road",
      "2025 — Shoreditch Parkside delivery (Hackney council, 290 units, completion end-2026)",
    ],
    upcoming_milestones: [
      "2026 — Shoreditch Parkside completion",
      "Continued office refurbishment along Leonard Street / Clerkenwell Road",
    ],
    trajectory_through_2027: "Plateaued. The Old Street roundabout transformation was the big recent public realm uplift — that's now absorbed. The Tech City cluster is mature and no longer in a growth-driven identity phase.",
    sources: [
      { url: "https://shoreditchparkside.co.uk/", label: "Shoreditch Parkside", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.islington.gov.uk/about-islington/neighbourhoods/old-street", label: "Islington — Old Street neighbourhood", type: "council", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Marginal pass. Shoreditch nightclub belt generates ASB. Closer to Dalston than Highbury on the safety axis.",
        "1.2": "Modern stock present — The Stage (Moda Living), Atlas Building, Bezier Apartments, Principal Tower.",
        "1.3": "Northern Line at Old Street, Overground Windrush at Hoxton. Zone 1. Bank in 4 min.",
        "1.4": "Active professional rental. The Stage is Moda Living BTR (Tier 8). Individual-landlord stock at Bezier/Atlas.",
        "1.5": "Old Street roundabout public realm recently completed. Hoxton Square well-maintained.",
        "1.6": "Not in decline — stable mature area.",
      },
      "moderate",
      "T1 passes but T1.1 is marginal due to Shoreditch nightlife fringe.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "partial", "2.5": "partial", "2.7": "pass" },
      {
        "2.1": "Walkable essentials via Hoxton Street, Old Street, and the broader Shoreditch dining ecosystem.",
        "2.2": "Grocery options present in the area.",
        "2.3": "Gym access available in the tech-city corridor.",
        "2.4": "Nominal green — Shoreditch Park 10 min NE, Hoxton Square. Among the most green-poor central areas.",
        "2.5": "Mixed. Tech-city core is quiet at night but Shoreditch nightlife belt generates noise on weekends.",
        "2.7": "Hoxton East & Shoreditch 20-39 at 52%. Top-skew.",
      },
      "moderate",
      "T2 is decent but green space and night quiet are weak axes.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "pass" },
      {
        "3.1": "Roundabout redesign completed. No major future pipeline.",
        "3.2": "Tech-city cluster, Hoxton Square galleries, Shoreditch dining scene — strong cultural anchors.",
        "3.3": "Strong sense of place. 'Old Street' and 'Hoxton' are recognisable London brands.",
        "3.4": "Complete 15-minute neighbourhood with dense dining and retail options.",
        "3.5": "Principal Tower (Foster + Partners — Pritzker 1999) is the premium architectural piece. Tech-press narrative dominates broader perception.",
        "3.6": "Strong day/night rhythm — office by day, nightlife by night.",
      },
      "good",
      "T3 strong on identity and cultural anchors. Principal Tower gives a real architectural piece.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "partial", "5.4": "pass" },
      {
        "5.1": "Average ~7 min to anchors. Bank in 4 min. Outstanding multi-cluster coverage.",
        "5.2": "Northern + Great Northern + Overground Windrush. Three independent corridors.",
        "5.3": "Plateaued — mature area, no ascending trajectory.",
        "5.4": "Dense cafe culture around Hoxton Square and surrounding streets.",
      },
      "good",
      "T5 strong. Excellent connectivity and redundancy. No trajectory uplift.",
    ),
    overall_grade: "B",
    grade_reasoning: "B — outstanding connectivity (Bank in 4 min, three independent corridors), strong identity, but T1.1 marginal and no ascending trajectory.",
  },

  projects: [theStageEc2, principalTower, shoreditchParkside],

  external_links: [
    { url: "https://www.thestageshoreditch.com/", label: "The Stage — Shoreditch", type: "developer", accessed_date: "2026-04-12" },
    { url: "https://www.principaltower.com/", label: "Principal Tower", type: "developer", accessed_date: "2026-04-12" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default oldStreetHoxton;
