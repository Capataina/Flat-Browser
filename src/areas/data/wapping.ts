import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Project consts (extracted for external_links / price_transparency mutation) ──

const londonDock = buildProject({
  id: "london-dock",
  area_id: "wapping",
  name: "London Dock",
  developer: "St George (Berkeley Group)",
  operator: "Various agents",
  building_type: "Build-to-Sell",
  build_phase: "phased",
  tenure: ["rent", "buy"],
  realism: "unknown",
  preview: "Wapping's largest development — 2,038 homes (up to 24 storeys). Private cinema, spa, gym, squash court, virtual golf, 24-hour concierge. Premium pricing — 1-beds from approx. £2,400 pcm.",
  amenity_tier: "premium",
  overall_grade: "A",
  architects: ["Patel Taylor"],
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley Group (St George) delivery — premium specification across phased build-out from 2017 onwards. Jade Wharf (latest phase) in delivery.",
    t4_1_amenity_package: "Premium — private cinema, spa, gym suite, squash court, virtual golf course, 24-hour concierge, private gardens.",
    t4_4_signature_arch: "Patel Taylor masterplan — respected practice. Not Pritzker-tier but professional.",
  },
});
londonDock.external_links = [
  { url: "https://www.berkeleygroup.co.uk/developments/london/wapping/london-dock", label: "London Dock — Berkeley Group", type: "developer", accessed_date: "2026-04-12" },
];
londonDock.rental.price_transparency = "enquire";

const wappingLane21 = buildProject({
  id: "21-wapping-lane",
  area_id: "wapping",
  name: "21 Wapping Lane",
  developer: "Ballymore Group",
  operator: "Various agents",
  building_type: "Mixed",
  build_phase: "complete",
  tenure: ["rent", "buy"],
  realism: "unknown",
  preview: "379 homes across five buildings (tallest 18 storeys) opposite Tobacco Dock. 24-hour concierge, gym, spa pool, cinema room, library, health club, restaurant, bar. Rental through individual landlords.",
  amenity_tier: "premium",
  overall_grade: "A",
  architects: ["Studio PDP (Patel Taylor)"],
  evaluation_reasoning: {
    t2_6_building_quality: "Ballymore development quality — first new-build in Wapping in over a decade when completed. Strong build specification.",
    t4_1_amenity_package: "Premium — 24-hour concierge, communal gardens, gym, spa pool, cinema room, library, health club, restaurant, bar.",
    t4_4_signature_arch: "Studio PDP (Patel Taylor) — respected practice. Not Pritzker-tier but professional.",
  },
});
wappingLane21.external_links = [
  { url: "https://www.ballymoregroup.com/project/detail/21-wapping-lane", label: "21 Wapping Lane — Ballymore", type: "developer", accessed_date: "2026-04-12" },
];
wappingLane21.rental.price_transparency = "enquire";

const sovereignCourt = buildProject({
  id: "sovereign-court",
  area_id: "wapping",
  name: "Sovereign Court",
  developer: "MHA London",
  operator: "MHA London",
  building_type: "PRS",
  build_phase: "complete",
  tenure: ["rent"],
  realism: "unknown",
  preview: "124-unit single-operator PRS near Tobacco Dock. The closest thing to BTR in Wapping. 24/7 concierge, communal gardens, 2-hourly security surveillance. Near Shadwell DLR/Overground.",
  amenity_tier: "decent",
  overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Converted neo-Georgian building with single-operator MHA London management — functional quality.",
    t4_1_amenity_package: "Decent — 24/7 concierge, resident parking, bicycle storage, communal gardens, regular window cleaning, 2-hourly security surveillance.",
    t4_4_signature_arch: "Not signature-authored — neo-Georgian conversion.",
  },
});
sovereignCourt.rental.price_transparency = "enquire";
sovereignCourt.building_quality = {
  sound_insulation: "average",
  thermal_performance: "average",
  layout_notes: "124-unit single-operator PRS in converted neo-Georgian building near Tobacco Dock. Traditional flat layouts — separated kitchen, living, bedroom(s).",
  kitchen_quality: "average",
  heating_type: "gas",
  notes: "Conversion rather than new-build; full kitchen per flat but unit-specific spec. Sound and thermal mid-tier for a heritage building.",
};
sovereignCourt.amenities = {
  pool: false,
  pool_notes: "",
  gym: false,
  gym_quality: "unknown",
  concierge: "24h",
  sky_lounge: false,
  co_working: false,
  dining_room: false,
  cinema_room: false,
  rooftop_terrace: false,
  parking: true,
  bike_storage: true,
  pet_policy: "unknown",
  other_amenities: [
    "Communal gardens",
    "2-hourly security surveillance",
    "Window-cleaning service",
  ],
  overall_tier: "decent",
};
sovereignCourt.architecture = {
  architects: [],
  awards: [],
  is_signature: false,
  style_notes: "Neo-Georgian conversion near Tobacco Dock — traditional residential character rather than BTR or co-living specification.",
};
sovereignCourt.long_form = {
  full: "Sovereign Court is a 124-unit single-operator PRS managed by MHA London in a converted neo-Georgian building near Tobacco Dock, walkable to Shadwell DLR/Overground. 24/7 concierge, communal gardens, resident parking, bicycle storage, 2-hourly security surveillance, regular window cleaning. PRS rather than apart-hotel — traditional AST with unit-specific pricing. Enquire-only pricing so affordability unclear.",
  living_experience: "Neo-Georgian heritage building character; AST tenancy (not licence). Unit-specific spec means kitchen and layout vary per flat.",
  notable_features: "24/7 concierge; 2-hourly security surveillance (rare); communal gardens; closest thing to BTR in Wapping; neo-Georgian heritage character.",
};
sovereignCourt.resident_signal = {
  summary: "Thin public review pool for MHA London — operator-scale data is limited.",
  common_praise: [],
  common_complaints: [],
};

const wappingRiverside = buildProject({
  id: "wapping-riverside",
  area_id: "wapping",
  name: "Wapping Riverside",
  developer: "Galliard Homes",
  operator: "Various agents",
  building_type: "Build-to-Sell",
  build_phase: "complete",
  tenure: ["rent", "buy"],
  realism: "unknown",
  preview: "37-unit boutique Grade II listed warehouse conversion on the Thames within Wapping Wall Conservation Area. Views towards Canary Wharf. Premium pricing, very limited rental availability.",
  amenity_tier: "basic",
  overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Galliard Homes warehouse conversion — premium boutique quality with exposed brick and Thames-side character.",
    t4_1_amenity_package: "Basic — Thames-side setting is the amenity. No premium gym/pool stack. Only 37 units.",
    t4_4_signature_arch: "Grade II listed warehouse conversion — heritage character rather than signature contemporary.",
  },
});
wappingRiverside.external_links = [
  { url: "https://www.galliardhomes.com/wapping-riverside", label: "Wapping Riverside — Galliard Homes", type: "developer", accessed_date: "2026-04-12" },
];
wappingRiverside.rental.price_transparency = "enquire";

const royalMintGardens = buildProject({
  id: "royal-mint-gardens",
  area_id: "wapping",
  name: "Royal Mint Gardens",
  developer: "IJM Land Berhad",
  operator: "Various agents",
  building_type: "Build-to-Sell",
  build_phase: "complete",
  tenure: ["rent", "buy"],
  realism: "unknown",
  preview: "Three-block development near Tower Hill (Wapping/Tower Hill border). Swimming pool, jacuzzi, gym, private cinema. Adjacent to the Tower of London.",
  amenity_tier: "premium",
  overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "IJM Land delivery, completed 2019-2020. Modern build quality at the premium end of the Wapping corridor.",
    t4_1_amenity_package: "Premium — swimming pool, jacuzzi, gym, private cinema.",
    t4_4_signature_arch: "Not confirmed as named-architect signature work.",
  },
});
royalMintGardens.external_links = [
  { url: "https://www.royalmintgardens.co.uk/", label: "Royal Mint Gardens — IJM Land", type: "developer", accessed_date: "2026-04-12" },
];
royalMintGardens.rental.price_transparency = "enquire";

const wapping: Area = {
  id: "wapping",
  name: "Wapping",
  aliases: ["St Katharine's & Wapping", "Hermitage Basin"],
  borough: "Tower Hamlets",
  postcodes: ["E1W"],

  headline:
    "Riverside Zone 1 calm with strong safety profile — but single Overground line (1/5 redundancy) is the structural weakness. Thames Clipper adds a real river fallback.",
  preview:
    "Wapping is a quiet riverside area in Tower Hamlets with a clean T1.1 safety pass — one of the safest wards in the borough. 50% aged 20-39 with very few children. The single Overground line (Windrush) gives only 1/5 redundancy, making T1.3 the thinnest case in the candidate list. DLR at Shadwell is an 8-minute walk. Thames Clipper at Wapping adds a genuine river fallback.",

  long_form: {
    full: "Wapping is a quiet, riverside area in Tower Hamlets that delivers a safety profile and residential calm that is unusually strong for the borough. The St Katharine's & Wapping ward has 50% aged 20-39 with very few children — a young-professional enclave. Wapping Wharf, Hermitage Basin conversions, and newer Bellway/Berkeley infill provide modern stock. The structural weakness is transport: Overground only (Wapping station on the East London Line/Overground Windrush) with a longer walk to Shadwell DLR. This gives the thinnest T1.3 case in the candidate list. Thames Clipper at Hermitage/Wapping Pier is a genuine river fallback. The area is characterful — Thames riverside walks, warehouse conversions, the old Wapping Wall — with a quieter, more residential feel than neighbouring Whitechapel or Shadwell.",
    history: "Historic riverside docklands. Wapping Wall and warehouse conversions preserve the maritime character. Execution Dock historical site. Captain Kidd pub.",
    vibe: "Quiet, riverside, residential. Warehouse conversions and modern infill. Very different character from the busy East End streets to the north.",
    weekday: "A Tuesday at 7pm: quiet riverside walks; pubs (Captain Kidd, Town of Ramsgate) with evening trade; residential calm.",
    weekend: "A Saturday: Thames Path walkers; Wapping farmers' market; riverside pub garden trade in summer.",
    notable: "Thames riverside walks; Wapping Wall warehouse conversions; Captain Kidd pub; Hermitage Basin; Thames Clipper pier.",
    croydon_comparison: "Wapping offers Thames-side Zone 1 residential calm at a mid-market price point. The transport trade-off (single Overground) is weaker than Croydon's mainline rail, but the riverside amenity and safety profile are categorically stronger.",
  },

  zones: ["Zone 1"],
  connectivity: {
    lines: [
      { name: "Overground (Windrush)", type: "overground" },
    ],
    primary_stations: [
      { name: "Wapping", lines: ["Overground (Windrush)"], walk_minutes_from_centre: 5 },
      { name: "Shadwell", lines: ["DLR", "Overground"], walk_minutes_from_centre: 12 },
    ],
    times_to_anchors: { city_of_london: 12, canary_wharf: 12, soho_fitzrovia: 22, kings_cross_shoreditch: 16 },
    multi_cluster_score: 2,
    redundancy_score: 1,
    notes: "Single-line dependency is the structural weakness. Wapping station only has Overground Windrush (one line). If Overground is down (weekend engineering, rare for Windrush but does happen), the 10-min walk to Shadwell DLR is the backup; that's a single tube fallback for commuter-grade transit. Thames Clipper RB1 from Wapping Pier is a real river bus option to Canary Wharf (10 min) and central (15-20 min) and adds a genuine non-rail fallback — unusual in the dataset. Bus routes along The Highway are plentiful but not fast.",
    sources: [
      { url: "https://tfl.gov.uk/tube-dlr-overground/status/", label: "TfL status and JourneyPlanner", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://www.thamesclippers.com/", label: "Thames Clippers", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 22 },
      { cohort: "30-39", pct: 38 },
      { cohort: "40-49", pct: 16 },
      { cohort: "50+", pct: 24 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 44 },
      { group: "White — other", pct: 28 },
      { group: "Asian or Asian British", pct: 14 },
      { group: "Black or Black British", pct: 7 },
      { group: "Mixed", pct: 4 },
      { group: "Other", pct: 3 },
    ],
    household_mix: [
      { type: "Single person", pct: 38 },
      { type: "Couple no children", pct: 34 },
      { type: "Couple with children", pct: 12 },
      { type: "Lone parent", pct: 5 },
      { type: "Shared household", pct: 9 },
      { type: "Other", pct: 2 },
    ],
    student_pct: 4,
    professional_renter_pct: 58,
    notes: "St Katharine's & Wapping ward is 50% aged 20-39, median age 32, under-20 only 15% (very few children) — a young-to-mid-career professional enclave. High White-other proportion reflects concentration of finance/tech professionals working in City / Canary Wharf. Highest professional-renter-to-student ratio in the East London Zone 1-2 cluster. Couple-no-children household type is well above borough average.",
    sources: [
      { url: "https://crystalroof.co.uk/report/ward/st-katharines-and-wapping-tower-hamlets/crime", label: "Crystal Roof — St Katharine's & Wapping ward", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "safe",
    crime_vs_borough: "below",
    crime_vs_croydon: "much-safer",
    after_dark_assessment: "One of the safest wards in Tower Hamlets and a clean T1.1 pass. 61 crimes per 1,000 residents annual rate — significantly below Tower Hamlets borough average (147) and Whitechapel (167). 207 crimes recorded in December 2025 within half-mile of Wapping High Street, classified Medium. Residential calm dominates the lived experience: Thames Path walk is well-populated in daylight and evening with dog walkers and joggers; Wapping High Street has pub trade until midnight (Prospect of Whitby, Town of Ramsgate, Captain Kidd); Hermitage Basin, Tobacco Dock, and the Wapping Wall conservation area are well-lit and stewarded. The Safer Neighbourhoods Team is active with monthly Walk and Talk events. Women walking alone report: consistently positive — this is one of the areas women actively nominate as feeling safe late. The absence of through-traffic (Wapping is a peninsula-like dead-end) reduces ambient threat versus main-road areas. The main practical risk is minor property crime — bike theft and theft-from-the-person around the Overground station and pub corridor (25 theft-from-person in Dec 2025).",
    concerns: [
      "Theft from the person at Wapping Overground station forecourt (low-level, not aggressive)",
      "Anti-social behaviour at Shadwell Basin evenings in summer (youth gathering)",
      "Bike theft — locked-and-secured discipline needed",
    ],
    sources: [
      { url: "https://www.met.police.uk/a/your-area/met/tower-hamlets/st-katharines-and-wapping/", label: "Met Police — St Katharine's & Wapping SNT", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: true,
    has_canal: false,
    has_dock: true,
    parks: [
      { name: "Wapping Rose Garden", size_acres: 2.5, walk_minutes: 5, notes: "Small rose garden at Pierhead" },
      { name: "Wapping Gardens / Hermitage Riverside Memorial Garden", size_acres: 1.5, walk_minutes: 8, notes: "Riverside memorial garden honouring merchant navy" },
      { name: "King Edward Memorial Park", size_acres: 11, walk_minutes: 15, notes: "Substantial park at the Limehouse end — sports pitches, playground" },
      { name: "Shadwell Basin", walk_minutes: 10, notes: "Former dock, now water-sports venue — Shadwell Basin Outdoor Activity Centre (sailing, canoeing)" },
    ],
    overall_assessment: "Thames frontage is the signature amenity. The Thames Path runs continuously through Wapping from Tower Bridge to Limehouse — a waterfront walking corridor unlike anything in the other four areas. Hermitage Basin, Shadwell Basin, and the historic dock infrastructure give genuine water character. Parkland is limited — Wapping Rose Garden and Hermitage Memorial Garden are small. King Edward Memorial Park at the Limehouse/Shadwell edge is the nearest substantial park. Shadwell Basin Outdoor Activity Centre offers sailing, rowing, canoeing, climbing — a genuine outdoor-activity asset. Limited parkland but waterfront-access compensation is real.",
  },
  amenities: {
    grocery: [
      { name: "Waitrose Thomas More Square", type: "supermarket", walk_minutes: 5, notes: "Large-format quality grocer — a major Wapping advantage vs typical Zone 1-2 areas" },
      { name: "M&S Simply Food — Tobacco Dock", type: "supermarket", walk_minutes: 6, notes: "Second quality option" },
      { name: "Wapping Supermarket — The Highway 172-176", type: "independent convenience", walk_minutes: 7, notes: "Local independent" },
      { name: "Wapping Farmers' Market (weekend)", type: "market", walk_minutes: 5, notes: "Saturday Wapping Docklands Market" },
    ],
    gyms: [
      { name: "Nuffield Health St Katharine's Dock", type: "mid-premium", walk_minutes: 10, notes: "Pool, sauna, classes, personal training" },
      { name: "Virgin Active Tobacco Dock", type: "premium", walk_minutes: 6, notes: "Premium tier with pool, sauna, strong class schedule" },
      { name: "London Dock residents' gym", type: "residents-only", walk_minutes: 0, notes: "For London Dock residents only — premium stack" },
      { name: "Shadwell Basin Outdoor Activity Centre", type: "water-sports / outdoor", walk_minutes: 10, notes: "Sailing, canoeing, climbing — unique amenity" },
      { name: "PureGym Tower Hill", type: "budget", walk_minutes: 18, notes: "Nearest budget option — real gap for budget-gym seekers" },
    ],
    food_and_drink: [
      { name: "Prospect of Whitby", type: "historic pub", walk_minutes: 8, notes: "Oldest riverside pub in London (16th century)" },
      { name: "Town of Ramsgate", type: "historic pub", walk_minutes: 5, notes: "Claims oldest Thames pub title" },
      { name: "Captain Kidd", type: "pub", walk_minutes: 3, notes: "Named after pirate executed at Execution Dock" },
      { name: "Turner's Old Star", type: "historic pub", walk_minutes: 7, notes: "Built by J.M.W. Turner 1830" },
      { name: "Wapping Food (Wapping Project)", type: "restaurant", walk_minutes: 5, notes: "Former power station venue" },
      { name: "Tobacco Dock restaurants", type: "restaurants", walk_minutes: 6, notes: "Multiple cuisines" },
    ],
    health: [
      { name: "Wapping Health Centre (Wainwright Practice)", type: "GP", walk_minutes: 5, notes: "Local NHS GP" },
      { name: "Boots St Katharine Docks", type: "pharmacy", walk_minutes: 12, notes: "Standard hours" },
      { name: "Royal London Hospital Whitechapel", type: "hospital", walk_minutes: 18, notes: "Major A&E — by bus or Overground" },
    ],
    cultural: [
      { name: "Wilton's Music Hall", type: "historic theatre", walk_minutes: 15, notes: "Oldest surviving grand music hall in world — unique historic venue" },
      { name: "Tobacco Dock", type: "event venue", walk_minutes: 6, notes: "Conference/events space" },
      { name: "St Katharine Docks (weekend)", type: "marina / dining", walk_minutes: 10, notes: "Weekend crowds, Thames views, boat watching" },
    ],
    notes: "Amenity profile is riverside-historic. Waitrose at Thomas More Square is the single best grocery anchor in the East London Zone 1-2 cluster — most comparable areas don't have a full-format Waitrose. Pub density is outstanding: four historic Thames-side pubs within 10 min. Gym coverage is mid-tier rather than budget — Virgin Active and Nuffield are quality but not cheap, PureGym requires walking to Tower Hill. Cultural anchors are few but Wilton's Music Hall is world-unique.",
  },
  regeneration: {
    status: "active",
    investment_pipeline: "Berkeley Group London Dock (St George) — 2,038 homes across phased build-out from 2017, Jade Wharf (latest phase) in delivery. Ballymore 21 Wapping Lane — completed. Bellway and other smaller infill operators active. No single flagship masterplan like Whitechapel or Canada Water — Wapping is organic evolution rather than planned regeneration. Tower Hamlets 52,000-home borough pipeline has modest Wapping allocation.",
    recent_milestones: [
      "2017-onwards — London Dock (Berkeley/St George) phased delivery of 2,038 homes",
      "2019 — 21 Wapping Lane (Ballymore) completion",
      "2023 — Royal Mint Gardens Phase 2 completion",
    ],
    upcoming_milestones: [
      "2026-2027 — London Dock Jade Wharf phase completion",
      "2026 — Wapping public realm improvements along The Highway",
    ],
    trajectory_through_2027: "Stable with marginal ascent. Wapping is an established riverside residential area reaching maturity rather than undergoing step-change regeneration. London Dock's phased build-out continues through 2027; 21 Wapping Lane is stabilised. The area is not a trajectory play — it is a quality-of-life steady-state. By August 2027 the residential stock will be marginally newer (London Dock final phases), the amenity layer roughly identical to 2026, and rent growth ~3-4% annually vs Tower Hamlets baseline. This is a 'lifestyle residential' area, not an 'ascending regeneration' area.",
    sources: [
      { url: "https://www.berkeleygroup.co.uk/developments/london/wapping/london-dock", label: "Berkeley Group — London Dock", type: "developer", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "partial", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Strong pass — one of the safest wards in Tower Hamlets.",
        "1.2": "Modern riverside stock — Wapping Wharf, Hermitage Basin conversions, newer Bellway/Berkeley infill.",
        "1.3": "Thinnest T1.3 case in the candidate list. Overground only. DLR at Shadwell is a walk. Not a fail but weak.",
        "1.4": "Active professional rental market.",
        "1.5": "Riverside public realm in good order. Warehouse conversions well-maintained.",
        "1.6": "Not in decline — stable established residential area.",
      },
      "good",
      "T1 good — clean safety pass, modern stock, but T1.3 is the structural weakness (single Overground).",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "partial", "2.2": "partial", "2.3": "unknown", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Walkable essentials are present but the area is residential rather than high-street. Thinner retail than Whitechapel or Bethnal Green.",
        "2.2": "Grocery access is partial — convenience stores present, no major supermarket in immediate area.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Thames riverside is the primary amenity. Hermitage Basin dock. Strong water access.",
        "2.5": "Very quiet at night. Residential riverside calm.",
        "2.7": "Census 2021: 50% aged 20-39. Top-skew with very few children.",
      },
      "moderate",
      "T2 moderate — excellent riverside and night calm, strong demographics, but everyday retail is thin.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "partial", "3.3": "pass", "3.4": "partial", "3.5": "pass", "3.6": "partial" },
      {
        "3.1": "Stable rather than active regeneration. Modern infill continuing but no flagship masterplan.",
        "3.2": "No major cultural anchor. Riverside pubs (Captain Kidd, Town of Ramsgate) and warehouse character are the draw.",
        "3.3": "Distinctive riverside sense of place — warehouse conversions, Wapping Wall, Thames frontage. Recognisable character.",
        "3.4": "15-minute completeness partial — transport is weak, retail thin, but waterfront and residential calm are strong.",
        "3.5": "Warehouse conversions give genuine architectural character. Riverside setting is visually strong.",
        "3.6": "Day/night rhythm is quiet — riverside walks daytime, pub trade evening, very quiet late night.",
      },
      "moderate",
      "T3 moderate — distinctive riverside character but no strong cultural anchor or active regeneration.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "fail", "5.3": "partial", "5.4": "pass" },
      {
        "5.1": "All four anchors under 25 minutes (TCR borderline at 22). 15.5-min average. Pass.",
        "5.2": "Single Overground line — 1/5 redundancy. Structural weakness. Thames Clipper is a genuine fallback but not a train.",
        "5.3": "Stable rather than ascending — established area.",
        "5.4": "Riverside walks, warehouse-conversion pubs, quiet residential character — good third-space quality.",
      },
      "moderate",
      "T5 moderate — times are adequate but single-line dependency is a serious constraint.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — strong safety (one of safest in Tower Hamlets), distinctive riverside character, top-skew demographics. Single-line transport dependency (T5.2 fail, T1.3 partial) is the structural weakness that prevents a higher grade. A quiet, safe riverside base rather than a connected hub.",
  },

  projects: [
    londonDock,
    wappingLane21,
    sovereignCourt,
    wappingRiverside,
    royalMintGardens,
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default wapping;
