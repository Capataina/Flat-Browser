import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Projects (extracted for external_links + price_transparency mutation) ──

// RESEARCH: The Quarters Kilburn — Bravo Investment House, 82 studios, ~2018 conversion.
// Standard suite 19 sqm (smallest in portfolio), Premium 25 sqm.
// Rent: £1,126-1,600 pcm (OnTheMarket listings); £1,250-1,600 pcm per long_form.
// HomeViews 4.72/5.00 (135 reviews), management 4.9. Highest in portfolio.
// AGREEMENT: licence (serviced-living, though uses both licence and AST per RRA reference)
// REFERENCING: unknown (opaque — Bravo in-house)
// REALISM: licence-exempt — licence agreement model, but referencing is present and opaque
// COST_TIER: affordable (studios £1,126-1,600)
const quartersKilburn = buildProject({
  id: "quarters-kilburn", area_id: "kilburn", name: "The Quarters Kilburn", developer: "Bravo Investment House", operator: "Bravo Investment House", building_type: "BTR", living_model: "managed-studio", build_phase: "complete", tenure: ["rent"], realism: "licence-exempt",
  preview: "82 serviced-living studios on Kilburn High Road. Standard suite 19 sqm — smallest in the portfolio. £1,250–£1,600 pcm. HomeViews 4.72/5.00 (135 reviews). Management rated 4.9.",
  long_form_full: "The Quarters Kilburn operates 82 studios from 19 sqm (Standard) to 25 sqm (Premium) on Kilburn High Road, converted from a former stone processing factory (~2018). Indicative rent £1,250–£1,600 pcm depending on suite type — some listings advertise all bills included. Standard 6-month AST with 30-day minimum on serviced licence. No gym (unlike Swiss Cottage). HomeViews 4.72/5.00 across 135 reviews with management rated 4.9 — highest in the portfolio. Common complaints: compact rooms (19 sqm), corridor sound insulation, street noise. Common praise: management responsiveness, security, all-inclusive simplicity. Referencing is present but opaque — the operator does not publicly disclose criteria. Move-in requires reservation fee (one week's rate), reference documents within 48h, right-to-rent check, and booking monies 7 days before start (rent + utilities + 5 weeks' deposit). At least one resident reports a £400 credit check fee (2022 Trustpilot). One report of 6 months' rent in advance demanded despite references.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Modern build (~2018) but compact — 19 sqm standard is the smallest in the Quarters portfolio. Sound insulation complaints from corridor and street noise.",
    t4_1_amenity_package: "Decent — laundry, parking (limited), 24h CCTV, housekeeping. No gym, no restaurant.",
    t4_4_signature_arch: "Not signature-authored. Purpose-built serviced-living.",
  },
});
quartersKilburn.external_links = [
  { url: "https://thequarters.co.uk/locations/the-quarters-kilburn", label: "The Quarters — Kilburn", type: "operator", accessed_date: "2026-04-12" },
];
quartersKilburn.rental.price_transparency = "listed";

// ── V2 enrichment (Bravo / The Quarters — Kilburn) ──
quartersKilburn.building_quality = {
  sound_insulation: "average",
  thermal_performance: "average",
  layout_notes: "Studios 19-25 sqm (Standard 19 — smallest in portfolio, Premium 25). Kilburn High Road conversion from stone-processing factory ~2018. Corridor noise can carry.",
  kitchen_quality: "average",
  heating_type: "electric",
  notes: "Kitchenette (two-hob, fridge, microwave), no oven in standard. ~2018 conversion.",
};
quartersKilburn.amenities = {
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
  pet_policy: "No pets",
  other_amenities: ["Laundry", "CCTV", "Parking (limited)"],
  overall_tier: "decent",
};
quartersKilburn.architecture = {
  architects: [],
  awards: [],
  is_signature: false,
  style_notes: "Former stone-processing factory converted ~2018. Functional conversion on Kilburn High Road.",
};
quartersKilburn.resident_signal = {
  homeviews_score: 4.72,
  homeviews_url: "https://www.homeviews.com/development/the-quarters-kilburn-nw6",
  summary: "4.72/5 across 135 reviews — highest management rating in the Quarters portfolio (4.9). Common praise: management responsiveness, security, all-inclusive simplicity. Common complaints: compact rooms (19 sqm), corridor sound insulation, street noise.",
  common_complaints: [
    "Compact studio sizes (19-25 sqm)",
    "Referencing process is opaque",
    "One report of 6 months upfront demanded despite references (2022)",
    "Corridor and street noise",
  ],
  common_praise: [
    "Management responsiveness",
    "All-inclusive simplicity",
    "Security and cleanliness",
  ],
};
quartersKilburn.rental.affordability = "comfortably-affordable";

// RESEARCH: North West Quarter — Countryside/Vistry + Home Group + Brent Council.
// 308 homes phased. 1-bed from ~£1,600 pcm. Individual landlord rental for private units.
// REALISM: unknown — individual landlord
// COST_TIER: mid-range (1-bed from ~£1,600)
const northWestQuarter = buildProject({
  id: "north-west-quarter", area_id: "kilburn", name: "North West Quarter", developer: "Countryside Partnerships (Vistry) + Home Group + Brent Council", operator: "Individual landlords", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unknown",
  preview: "308 homes across phases in the heart of South Kilburn masterplan. 4-10 storeys. New medical centre, affordable workspace, gym, local shops, community space. Phase 1 complete 2022, Phase 4 launching July 2025. 1-bed from ~£1,600 pcm.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Phased delivery 2022-2025 to modern specification. Part of wider South Kilburn regeneration programme.",
    t4_1_amenity_package: "Decent — new medical centre, affordable workspace, gym, local shops, community space. Not premium residential amenities.",
    t4_4_signature_arch: "Not signature-authored. Council-led regeneration product with functional design.",
  },
});

// RESEARCH: Kilburn Quarter — Brent Council, ~150 units, LDS architects.
// Tenure-blind design. 1-bed from ~£1,500 pcm. Individual landlord rental for private units.
// REALISM: unknown — individual landlord
// COST_TIER: affordable (1-bed from ~£1,500)
const kilburnQuarter = buildProject({
  id: "kilburn-quarter", area_id: "kilburn", name: "Kilburn Quarter (Bronte & Fielding House)", developer: "Brent Council", operator: "Individual landlords", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "~150 units across Bronte House and Fielding House. 6-9 storeys. Lifschutz Davidson Sandilands architects. Tenure-blind design. Part of wider South Kilburn masterplan. 1-bed from ~£1,500 pcm.",
  architects: ["Lifschutz Davidson Sandilands"],
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Completed 2021-2023. Lifschutz Davidson Sandilands design with tenure-blind approach — consistent quality across tenures.",
    t4_1_amenity_package: "Decent — landscaped grounds, play area, commercial space. Not premium residential amenities.",
    t4_4_signature_arch: "Lifschutz Davidson Sandilands — Housing Design Awards recognition. Tenure-blind design is a quality marker.",
  },
});

const kilburn: Area = {
  id: "kilburn",
  name: "Kilburn",
  aliases: ["Kilburn High Road", "South Kilburn"],
  borough: "Camden",
  postcodes: ["NW6"],

  headline:
    "Zone 2 Jubilee + Bakerloo + Overground — three independent lines at three stations. Unity Place (RIBA London Award 2024) gives real jury architecture. The Quarters by Bravo operates here.",
  preview:
    "Kilburn has three independent rail products (Jubilee at Kilburn, Bakerloo at Kilburn Park, Overground at Kilburn High Road) giving redundancy 4/5. Unity Place won RIBA London Award 2024 — real jury signal for the South Kilburn Regeneration Programme. The Quarters by Bravo operates 82 serviced-living studios. The limitation is T1.1: Kilburn is named in the Safer Brent Partnership 2024–25 annual report as a consistent crime hotspot.",

  long_form: {
    full: "Kilburn straddles the Camden/Brent border with three stations delivering three independent rail corridors. Jubilee at Kilburn gives Canary Wharf direct in 25 minutes; Bakerloo at Kilburn Park gives Euston in 7 minutes; Overground at Kilburn High Road adds a third fallback. The South Kilburn Regeneration Programme's Unity Place (Feilden Clegg Bradley Studios + Alison Brooks Architects + Gort Scott + RM_A Architects) won the RIBA London Award 2024 for 235 social rent homes — real jury architecture. The Quarters by Bravo operates 82 serviced-living studios on Kilburn High Road. The main limitation is safety: Kilburn is named as a borough crime hotspot in Brent's own annual report.",
    history: "Kilburn High Road has rolling small-to-medium residential schemes. South Kilburn regeneration is the major programme.",
    vibe: "Diverse, high-street-led, mixed. Kilburn High Road is busy and commercially active. South Kilburn is regenerating.",
    weekday: "A Tuesday at 7pm: Kilburn High Road busy with shoppers and commuters.",
    weekend: "A Saturday: high street commercial activity. South Kilburn community life.",
    notable: "Unity Place (RIBA London Award 2024); State Kilburn (Grade II* cinema); The Quarters by Bravo; South Kilburn Regeneration.",
    croydon_comparison: "Kilburn is Zone 2 with three independent lines and real jury architecture. Connectivity is better than Croydon's but the safety profile is the trade-off.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Jubilee", type: "tube" },
      { name: "Bakerloo", type: "tube" },
      { name: "Mildmay line", type: "overground" },
    ],
    primary_stations: [
      { name: "Kilburn High Road", lines: ["Mildmay line"], walk_minutes_from_centre: 3 },
      { name: "Kilburn", lines: ["Jubilee"], walk_minutes_from_centre: 5 },
      { name: "Kilburn Park", lines: ["Bakerloo"], walk_minutes_from_centre: 7 },
      { name: "Brondesbury", lines: ["Mildmay line"], walk_minutes_from_centre: 12 },
    ],
    times_to_anchors: { city_of_london: 26, canary_wharf: 23, soho_fitzrovia: 14, kings_cross_shoreditch: 22 },
    multi_cluster_score: 3,
    redundancy_score: 4,
    notes: "Kilburn's transport strength is redundancy rather than speed — three genuinely independent rail corridors (Jubilee, Bakerloo, Mildmay Overground) protect against single-line failure in a way Swiss Cottage and Kentish Town cannot match. Jubilee gets Canary Wharf direct in 23 minutes. Bakerloo gets central in ~14 and Paddington in 4 (useful for Elizabeth Line transfer). The City is the weakest anchor at 26 — outside the strict ≤25 threshold but practically close. Kilburn High Road (Mildmay) connects to Willesden Junction / Stratford without crossing Zone 1.",
    sources: [
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL JourneyPlanner", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/tube-dlr-overground/status/", label: "TfL line status", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 23 },
      { cohort: "30-39", pct: 28 },
      { cohort: "40-49", pct: 17 },
      { cohort: "50+", pct: 32 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 28 },
      { group: "White — other", pct: 32 },
      { group: "Asian or Asian British", pct: 12 },
      { group: "Black or Black British", pct: 17 },
      { group: "Mixed", pct: 6 },
      { group: "Other ethnic group", pct: 5 },
    ],
    household_mix: [
      { type: "Single person", pct: 39 },
      { type: "Couple no children", pct: 20 },
      { type: "Couple with children", pct: 18 },
      { type: "Lone parent", pct: 10 },
      { type: "Shared household", pct: 9 },
      { type: "Other", pct: 4 },
    ],
    student_pct: 9,
    professional_renter_pct: 38,
    notes: "Kilburn is one of London's most ethnically and linguistically diverse areas — the long-established Irish community (historically 'County Kilburn', with Kilburn High Road described as 'the longest street in Ireland') remains culturally visible, joined since the 1990s by strong Brazilian, Portuguese, Somali, and Eastern European layers. Single-occupancy rate ~39% is high — reflects a private-rental-dominant housing market including the Bravo serviced-studio stock. Rapid demographic change through the 2010s-2020s driven by South Kilburn regeneration delivering new tenure-blind stock and gentrification of the high road.",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "moderate",
    crime_vs_borough: "above",
    crime_vs_croydon: "similar",
    after_dark_assessment: "Kilburn is the weakest-safety area in this north-London batch and the single hard-floor risk in the current dataset entry — named in the Safer Brent Partnership 2024-25 annual report as a consistent crime hotspot, with knife-crime and violent-crime concentration identified. The High Road itself is busy and populated until ~23:00 (late-licence pubs, high-street traffic) but has real specific risk patterns: late-night robberies at the Kilburn/Kilburn High Road/Kilburn Park station approaches, particularly the southern (Kilburn Park) end around Malvern Road and the Priory Park estate edge; drug-dealing-related loitering observed along Willesden Lane junction; moped-enabled phone thefts across the high road. Women-walking-alone reports are mixed — positive for the central high-road spine and South Kilburn's newly-delivered public realm, more cautious for the edges. The South Kilburn regeneration is objectively improving things but the baseline is materially worse than Kentish Town or Swiss Cottage.",
    concerns: [
      "Named borough crime hotspot in Safer Brent Partnership 2024-25 annual report",
      "Knife-crime concentration reported in Brent Council safety documentation",
      "Late-night robberies at station approaches, particularly Kilburn Park / Malvern Road",
      "Priory Park estate edge — drug-dealing-related loitering",
      "Moped-enabled phone thefts along Kilburn High Road",
    ],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police/kilburn/", label: "Met Police — Kilburn", type: "met-police", accessed_date: "2026-04-17" },
      { url: "https://www.brent.gov.uk/your-community/community-safety", label: "Safer Brent Partnership", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: false,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Queen's Park", size_acres: 30, walk_minutes: 12, notes: "Victorian park with playground, pitches, cafe — main green anchor." },
      { name: "Kilburn Grange Park", size_acres: 8, walk_minutes: 6, notes: "Local community park with skatepark and adventure playground." },
      { name: "Paddington Recreation Ground (adjacent)", size_acres: 27, walk_minutes: 15, notes: "Running track, sports facilities, Westminster-side." },
      { name: "Kensal Green Cemetery / Canal walk", size_acres: 72, walk_minutes: 15, notes: "Grade I-listed cemetery — green walking route to canal." },
    ],
    overall_assessment: "Middling green profile — Kilburn Grange Park (6 min) is a usable local park but modest in size; Queen's Park at 12 min is the nearest wilderness-quality green. Less Heath-adjacent than Kentish Town, less mature-park-dense than Swiss Cottage, and without the water assets of Tottenham Hale. Residents who prioritise green often push west toward Queen's Park or south toward Paddington Recreation Ground.",
    sources: [
      { url: "https://www.camden.gov.uk/parks-open-spaces", label: "Camden Council — parks", type: "council", accessed_date: "2026-04-17" },
      { url: "https://www.brent.gov.uk/parks", label: "Brent Council — parks", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "M&S Food Kilburn High Road", type: "supermarket", walk_minutes: 4, notes: "Simply Food store on the high road." },
      { name: "Sainsbury's Kilburn", type: "supermarket", walk_minutes: 3, notes: "Full-range store on Kilburn High Road." },
      { name: "Iceland Kilburn", type: "budget-supermarket", walk_minutes: 5, notes: "Frozen food / budget grocery." },
      { name: "Broadway Market Kilburn (various independent)", type: "independent-grocers", walk_minutes: 5, notes: "Irish/Brazilian/Middle Eastern grocers on the high road." },
      { name: "Al-Abbas Supermarket", type: "halal-grocer", walk_minutes: 6, notes: "Middle Eastern halal grocer with fresh counters." },
    ],
    gyms: [
      { name: "PureGym Kilburn", type: "budget-gym", walk_minutes: 4, notes: "24h budget gym on the high road." },
      { name: "The Gym Kilburn", type: "budget-gym", walk_minutes: 5, notes: "Alternative budget gym." },
      { name: "Swiss Cottage Leisure Centre (adjacent)", type: "council-leisure", walk_minutes: 18, notes: "Olympic pool nearest council offer." },
      { name: "Carlson Gracie Team London (adjacent)", type: "martial-arts", walk_minutes: 15, notes: "BJJ — established club in Kensal Green." },
      { name: "Total Boxer Kilburn", type: "martial-arts", walk_minutes: 7, notes: "Boxing and fitness — well-regarded community boxing gym." },
    ],
    food_and_drink: [
      { name: "The North London Tavern", type: "gastropub", walk_minutes: 4, notes: "Landmark Victorian gastropub on Kilburn High Road." },
      { name: "The Black Lion", type: "pub", walk_minutes: 5, notes: "Traditional Irish-heritage pub." },
      { name: "The Good Ship", type: "pub", walk_minutes: 4, notes: "Pub with live music venue — community-anchor." },
      { name: "The Kiln Rooms", type: "cocktail-bar", walk_minutes: 5, notes: "Cocktail bar on the high road." },
      { name: "Sacro Cuore / Pappa e Ciccia (various)", type: "italian-restaurant", walk_minutes: 6, notes: "Quality Italian independents on Willesden Lane." },
      { name: "Small Beer / Brazilian rodizio spots", type: "brazilian-restaurant", walk_minutes: 5, notes: "Brazilian community-driven food on the high road." },
    ],
    health: [
      { name: "Lonsdale Medical Centre", type: "gp", walk_minutes: 5, notes: "NHS GP practice." },
      { name: "Kilburn Park Medical Centre", type: "gp", walk_minutes: 7, notes: "Alternative NHS GP." },
      { name: "Boots Pharmacy Kilburn", type: "pharmacy", walk_minutes: 4, notes: "Main high-road pharmacy." },
      { name: "St Mary's Hospital (Paddington)", type: "nhs-hospital", walk_minutes: 20, notes: "Nearest major A&E via Bakerloo or bus." },
    ],
    cultural: [
      { name: "Kiln Theatre (formerly Tricycle)", type: "theatre", walk_minutes: 5, notes: "Landmark Kilburn theatre — well-regarded regional producing theatre." },
      { name: "State Kilburn (closed cinema, Grade II* listed)", type: "heritage-cinema", walk_minutes: 5, notes: "Grade II*-listed 1930s Art Deco cinema — currently in conservation limbo." },
      { name: "Kilburn Library", type: "library", walk_minutes: 4, notes: "Camden Council library on the high road." },
      { name: "The Good Ship (live music)", type: "music-venue", walk_minutes: 4, notes: "Community-run live music venue." },
    ],
    notes: "Kilburn has a distinctive 'long high road' structure — Kilburn High Road (the longest continuous high street in northwest London) carries most of the daily-life amenity in a linear strip. The independent retail mix reflects the Irish / Brazilian / Middle Eastern demographic layers. Gym offer is budget-commercial plus Total Boxer for boxing; the premium tier is absent. Cafe tier is thinner than Kentish Town — chains present but the independent cafe grain is underdeveloped.",
  },
  regeneration: {
    status: "active",
    investment_pipeline: "South Kilburn Regeneration Programme is Brent Council's flagship housing-led regeneration — ~2,400 homes delivered across 20+ plots since 2008, with a further 10+ phases planned through the 2030s. Lead architects include Feilden Clegg Bradley Studios, Alison Brooks Architects, Gort Scott, RM_A, and Lifschutz Davidson Sandilands. Unity Place (FCB + Alison Brooks + Gort Scott + RM_A, 235 social rent homes) won the RIBA London Award 2024. North West Quarter (Countryside Partnerships / Vistry + Home Group, 308 homes phased, Phase 4 launching mid-2025). Kilburn Quarter / Bronte House / Fielding House (LDS, ~150 units, tenure-blind design, completed 2021-2023).",
    recent_milestones: [
      "2022 — North West Quarter Phase 1 complete",
      "2024 — Unity Place RIBA London Award 2024 win",
      "2025 — North West Quarter Phase 4 launch",
      "2025 — Kilburn Quarter (Bronte & Fielding House) completion",
    ],
    upcoming_milestones: [
      "2026-2028 — Further South Kilburn phases (Carlton & Granville area redevelopment, Chippenham & Peel, multiple plots)",
      "2027+ — Kilburn High Road public realm improvements (Brent + Camden joint programme)",
      "State Kilburn cinema future uncertain — Grade II*-listed, community campaign for restoration ongoing",
    ],
    trajectory_through_2027: "Mild-to-moderate ascending. In August 2027, Caner's visa window: additional South Kilburn phases delivered or mid-delivery, high-road public-realm improvements progressing, Unity Place fully settled as the area's architectural flagship. Crime statistics unlikely to shift dramatically in 18 months — the area will remain on the borderline of T1.1 safety risk through 2027. The South Kilburn programme is genuinely improving the built environment but the gentrification signal is slower than Tottenham Hale's.",
    sources: [
      { url: "https://www.brent.gov.uk/housing/regeneration/south-kilburn", label: "Brent Council — South Kilburn", type: "council", accessed_date: "2026-04-17" },
      { url: "https://www.brent.gov.uk/unityplace", label: "Brent Council — Unity Place", type: "council", accessed_date: "2026-04-17" },
      { url: "https://www.ribaj.com/buildings/riba-london-awards-2024-unity-place-south-kilburn", label: "RIBAJ — Unity Place RIBA London Award 2024", type: "press", accessed_date: "2026-04-17" },
      { url: "https://www.fcbstudios.com/work/view/unity-place-south-kilburn", label: "FCB — Unity Place", type: "other", accessed_date: "2026-04-17" },
      { url: "https://northwestquarter.co.uk/", label: "North West Quarter (Countryside)", type: "developer", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "partial", "1.6": "pass" },
      {
        "1.1": "MARGINAL — leaning fail. Named borough crime hotspot in Brent's own annual report.",
        "1.2": "The Quarters Kilburn (Bravo) delivers modern serviced-living studios. South Kilburn new-build stock.",
        "1.3": "Jubilee + Bakerloo + Overground. Zone 2. Three independent lines.",
        "1.4": "The Quarters by Bravo operates here. Individual-landlord stock on Kilburn High Road.",
        "1.5": "Kilburn High Road is mixed quality. South Kilburn regeneration improving.",
        "1.6": "Not in decline — South Kilburn programme is ascending.",
      },
      "moderate",
      "T1 is marginal due to T1.1 safety. Connectivity is the strength.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "partial", "2.4": "partial", "2.5": "partial", "2.7": "pass" },
      {
        "2.1": "Kilburn High Road delivers complete walkable essentials.",
        "2.2": "Grocery on the high road.",
        "2.3": "The Quarters Kilburn has no gym. Local gym options present but not standout.",
        "2.4": "Limited green space. No major park within easy walking distance.",
        "2.5": "Mixed. Street noise on Kilburn High Road side. Residential streets are quieter.",
        "2.7": "Ward 20-39 at 36.2%. Moderate skew.",
      },
      "moderate",
      "T2 moderate. High road delivers essentials but green space and night quiet are weak.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "partial", "3.3": "partial", "3.4": "pass", "3.5": "pass", "3.6": "partial" },
      {
        "3.1": "South Kilburn Regeneration Programme active.",
        "3.2": "State Kilburn (Grade II* cinema). No major cultural institution.",
        "3.3": "Diverse, mixed identity. Not a unified sense of place in the way Angel or Stoke Newington are.",
        "3.4": "High road delivers 15-minute completeness.",
        "3.5": "Unity Place (RIBA London Award 2024) — real jury architecture. Feilden Clegg Bradley + Alison Brooks + Gort Scott + RM_A.",
        "3.6": "High road commercial day rhythm. Mixed evenings.",
      },
      "moderate",
      "T3 moderate overall but Unity Place gives a real architectural anchor.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "2/4 anchors ≤25 (Canary Wharf 25, TCR 18). Bank 28, Old Street 30 fail. Average 25 min.",
        "5.2": "Three independent lines at three stations. Redundancy 4/5.",
        "5.3": "Mild ascending via South Kilburn programme.",
        "5.4": "High road cafes exist but third-space culture is not standout.",
      },
      "moderate",
      "T5 moderate. Excellent redundancy but slow City/Old Street times.",
    ),
    overall_grade: "B",
    grade_reasoning: "B- — three independent lines give excellent redundancy, Unity Place gives real architecture, but T1.1 safety is the critical weakness (named borough hotspot) and journey times to the City are slow.",
  },

  projects: [quartersKilburn, northWestQuarter, kilburnQuarter],

  external_links: [
    { url: "https://thequarters.co.uk/", label: "The Quarters by Bravo", type: "developer", accessed_date: "2026-04-12" },
    { url: "https://www.homeviews.com/development/the-quarters-kilburn-nw6", label: "HomeViews — The Quarters Kilburn", type: "other", accessed_date: "2026-04-12" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default kilburn;
