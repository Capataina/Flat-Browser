import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const stratfordWaterfront = buildProject({
  id: "stratford-waterfront", area_id: "stratford", name: "Stratford Waterfront", developer: "Ballymore + LLDC", operator: "Ballymore", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unknown",
  preview: "700 homes. Under construction from 2026, completing 2029. Directly facing V&A East and the cultural quarter.",
  amenity_tier: "premium", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Ballymore/LLDC in-delivery to current flagship specification — modern building services, proximity to East Bank cultural quarter.",
    t4_1_amenity_package: "Premium amenity package expected — direct East Bank cultural adjacency is itself a neighbourhood-scale amenity multiplier.",
    t4_4_signature_arch: "Part of the East Bank architectural set — the masterplan architecture has pedigree but individual residential buildings are not yet scorable.",
  },
});
stratfordWaterfront.external_links = [
  { url: "https://www.ballymoregroup.com/project/detail/stratford-waterfront", label: "Ballymore — Stratford Waterfront", type: "developer", accessed_date: "2026-04-12" },
];

const eastVillage = buildProject({
  id: "east-village", area_id: "stratford", name: "East Village", developer: "Get Living", operator: "Get Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable",
  preview: "Former Athletes' Village — 2,800 homes across multiple BTR buildings. Mature, functioning mixed-tenure neighbourhood directly on the park.",
  amenity_tier: "strong", overall_grade: "S",
  evaluation_reasoning: {
    t2_6_building_quality: "Converted from Olympic Athletes' Village — built to Olympic-grade standards and continuously managed by Get Living since. Mature, well-maintained BTR stock.",
    t4_1_amenity_package: "Strong BTR amenity package — gym, concierge, lounges across multiple buildings — plus direct Olympic Park adjacency.",
    t4_4_signature_arch: "Not signature-authored — functional Olympic legacy stock rather than trophy architecture.",
  },
});
eastVillage.external_links = [
  { url: "https://www.getliving.com/our-neighbourhoods/east-village/", label: "Get Living — East Village", type: "operator", accessed_date: "2026-04-12" },
];
eastVillage.rental.price_transparency = "listed";

const manhattanLoftGardens = buildProject({
  id: "manhattan-loft-gardens",
  area_id: "stratford",
  name: "Manhattan Loft Gardens",
  developer: "Manhattan Loft Corporation",
  operator: "Manhattan Loft Gardens",
  building_type: "BTR",
  build_phase: "complete",
  tenure: ["rent"],
  realism: "unknown",
  preview: "Iconic 42-storey double-cantilevered tower by SOM. 248 rental loft apartments with double-height spaces. Three rooftop gardens, 24/7 gym, hotel amenities. 1-beds from approx. £2,600 pcm.",
  amenity_tier: "premium",
  is_signature: true,
  overall_grade: "S",
  architects: ["Skidmore, Owings & Merrill (SOM)"],
  evaluation_reasoning: {
    t2_6_building_quality: "SOM-designed 42-storey tower — one of the most architecturally significant buildings in East London. Double-height loft apartments with bespoke furniture.",
    t4_1_amenity_package: "Premium — three rooftop gardens (Randle Siddeley), The Lounge, 24/7 gym, special hotel rates, priority at Kitchen E20 and Allegra restaurant, three bars.",
    t4_4_signature_arch: "Skidmore, Owings & Merrill — globally renowned practice. The double-cantilevered form is one of the most distinctive residential buildings in London. Unambiguous signature.",
  },
});
manhattanLoftGardens.external_links = [
  { url: "https://www.manhattanloftgardens.com/", label: "Manhattan Loft Gardens official site", type: "operator", accessed_date: "2026-04-12" },
];
manhattanLoftGardens.rental.price_transparency = "listed";

const stratfordMill = buildProject({
  id: "stratford-mill",
  area_id: "stratford",
  name: "Stratford Mill",
  developer: "Lifestory (acquired by Greystar)",
  operator: "Greystar",
  building_type: "BTR",
  build_phase: "in_delivery",
  tenure: ["rent"],
  realism: "unknown",
  preview: "245-unit Greystar BTR completing Autumn 2026. Pudding Mill masterplan, near City Mill Lock and Olympic Park. Greystar (Fizzy Living parent) — highly likely to be visa-friendly.",
  amenity_tier: "strong",
  overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Greystar-operated BTR — professional institutional management. Completing Autumn 2026.",
    t4_1_amenity_package: "Strong — landscaped roof garden, wellness-focused amenities, community-building features.",
    t4_4_signature_arch: "Not confirmed as named-architect signature work.",
  },
});
stratfordMill.external_links = [
  { url: "https://www.greystar.com/business/about-greystar/newsroom/greystar-tops-out-at-stratford-mill-in-east-london", label: "Greystar — Stratford Mill", type: "operator", accessed_date: "2026-04-12" },
  { url: "https://www.graham.co.uk/about-us/news/graham-appointed-on-stratford-mill-residential-development", label: "GRAHAM — Stratford Mill", type: "press", accessed_date: "2026-04-17" },
];
stratfordMill.rental.price_transparency = "enquire";
stratfordMill.rental.affordability = "at-budget";
stratfordMill.building_quality = {
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "247-unit BTR completing Autumn 2026. 205 private BTR + 42 SNG affordable homes. Greystar Momento sub-brand.",
  kitchen_quality: "good",
  heating_type: "communal",
  notes: "New-build 2026 to current Greystar specification. Pre-opening — building quality values projected from Greystar's London delivery pattern.",
};
stratfordMill.amenities = {
  pool: false,
  pool_notes: "",
  gym: true,
  gym_quality: "average",
  concierge: "daytime",
  sky_lounge: false,
  co_working: true,
  dining_room: false,
  cinema_room: false,
  rooftop_terrace: true,
  parking: false,
  bike_storage: true,
  pet_policy: "Pet-friendly — Greystar portfolio standard with fee",
  other_amenities: ["Landscaped roof garden", "Wellness-focused amenities"],
  overall_tier: "decent",
};
stratfordMill.architecture = {
  architects: ["Hawkins\\Brown"],
  awards: [],
  is_signature: false,
  style_notes: "Hawkins\\Brown-designed Greystar Momento sub-brand building on canalside City Mill Lock, near Olympic Park. 205 private BTR co-delivered with 42 SNG affordable homes.",
};
stratfordMill.long_form = {
  full: "Stratford Mill is a 247-unit Greystar BTR completing Autumn 2026, positioned at Pudding Mill Lane on canalside City Mill Lock near the Olympic Park. Designed by Hawkins\\Brown and operated under Greystar's European Momento sub-brand (new to London), 205 private BTR homes are co-delivered alongside 42 SNG affordable homes. Qualification operates via standard Greystar Homeppl referencing — savings-based pathway available via Open Banking.",
  living_experience: "Pre-opening — no resident signal yet. Expected to track Greystar portfolio-wide delivery standard.",
  notable_features: "Greystar's European Momento sub-brand (new to London); Hawkins\\Brown design; canalside City Mill Lock position; 42 SNG affordable homes co-delivered with 205 private BTR.",
};
stratfordMill.resident_signal = {
  summary: "Pre-opening (completing Autumn 2026) — no resident reviews yet.",
  common_complaints: [],
  common_praise: [],
};

const stratford: Area = {
  id: "stratford",
  name: "Stratford / East Bank",
  aliases: ["Stratford", "East Bank", "Olympic Park"],
  borough: "Newham",
  postcodes: ["E15", "E20"],

  headline:
    "The largest single cultural investment in a generation — V&A East, Sadler's Wells East, UCL East, London College of Fashion, plus Olympic Park, Westfield, and four transport lines converging.",
  preview:
    "East Bank is operational. V&A East Storehouse is open; the V&A East Museum opens 2026 with BBC Music Studios. Sadler's Wells East, UCL East, and London College of Fashion are all live. 560-acre Olympic Park, Europe's largest urban shopping centre next door, Elizabeth + Jubilee + DLR + Overground all converge here.",

  long_form: {
    full: "The East Bank programme at Queen Elizabeth Olympic Park has turned Stratford into one of the most significant cultural destinations in Europe. The V&A East Storehouse is already open; the V&A East Museum opens in 2026 alongside the BBC Music Studios. Sadler's Wells East, UCL East, and London College of Fashion are all operational. Westfield Stratford is five minutes on foot. The Olympic Park provides 560 acres of managed green space and waterways. The Stratford Waterfront residential programme (700 homes by Ballymore + LLDC) is under construction, completing 2029. East Village — the former Athletes' Village — is already a fully functioning residential neighbourhood. Four transport lines make this one of the best-connected points in East London.",
    history:
      "Stratford was a transport interchange and a struggling town centre until London 2012 brought the Olympics, after which the LLDC was established to deliver the legacy. East Village (the Athletes' Village) became Get Living's flagship UK BTR; East Bank followed as the cultural quarter; the masterplan continues to deliver new residential phases.",
    vibe: "Stratford reads young and active. East Village is the canonical Caner-target — Get Living's BTR campus directly facing the park, with strong professional renter density. The wider area is more multi-ethnic and working-class than the polished West London masterplans, in a way that reads alive rather than gentrified.",
    weekday: "A Tuesday at 7pm: Westfield is winding down but still busy; East Bank cultural programming is active; the Olympic Park has joggers and dog walkers; East Village's amenity buildings are full.",
    weekend: "A Saturday: peak Westfield, peak Olympic Park, peak East Bank. One of the most active places in East London on weekends.",
    notable: "V&A East, Sadler's Wells East, UCL East, London College of Fashion, Olympic Park, Westfield Stratford, East Village (Get Living BTR campus).",
    croydon_comparison:
      "Stratford and Croydon are both major outer-London transport hubs with big retail. The differences: Stratford has Olympic Park, world-class cultural anchors, four transport lines including the Elizabeth Line, professional BTR at scale, and a young multi-ethnic energy that Croydon's commercial decline has lost.",
  },

  zones: ["Zone 2", "Zone 3"],
  connectivity: {
    lines: [
      { name: "Elizabeth", type: "elizabeth" },
      { name: "Jubilee", type: "tube" },
      { name: "Central", type: "tube" },
      { name: "DLR", type: "dlr" },
      { name: "Overground", type: "overground" },
    ],
    primary_stations: [
      { name: "Stratford", lines: ["Elizabeth", "Jubilee", "Central", "DLR", "Overground"], walk_minutes_from_centre: 4 },
      { name: "Stratford International", lines: ["DLR", "Southeastern HS1"], walk_minutes_from_centre: 8 },
    ],
    times_to_anchors: { city_of_london: 12, canary_wharf: 13, soho_fitzrovia: 18, kings_cross_shoreditch: 11 },
    multi_cluster_score: 5,
    redundancy_score: 5,
    notes: "Five-line interchange plus HS1. Among the best-connected points in London. Elizabeth line gives 7 min to Liverpool Street; Jubilee gives 13 to Canary Wharf and 18 to Bond Street; Central reaches Bank in 12. HS1 from Stratford International reaches St Pancras in 7 min for domestic high-speed.",
    sources: [
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/tube-dlr-overground/stops/940GZZLUSTD/stratford-underground-station", label: "TfL — Stratford", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://www.southeasternrailway.co.uk/destinations-and-offers/high-speed", label: "Southeastern HS1", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "18-29",
    age_breakdown: [
      { cohort: "18-29", pct: 37 },
      { cohort: "30-39", pct: 28 },
      { cohort: "40-49", pct: 14 },
      { cohort: "50+", pct: 21 },
    ],
    ethnic_composition: [
      { group: "White", pct: 43 },
      { group: "Asian", pct: 28 },
      { group: "Black", pct: 18 },
      { group: "Mixed", pct: 7 },
      { group: "Other", pct: 4 },
    ],
    household_mix: [
      { type: "Single person", pct: 32 },
      { type: "Couple no children", pct: 22 },
      { type: "Couple with children", pct: 20 },
      { type: "Lone parent", pct: 11 },
      { type: "Shared household", pct: 12 },
      { type: "Other", pct: 3 },
    ],
    student_pct: 12,
    professional_renter_pct: 50,
    notes: "Census 2021 confirms genuinely multi-ethnic mix in Newham. Young professional + student blend. Census 2021 captures the Olympic Park ramp but predates UCL East and London College of Fashion opening to full capacity — student_pct is plausibly higher now at ~14-16% with LCF in full residency. Newham is the most ethnically diverse borough in England.",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021", type: "ons", accessed_date: "2026-04-17" },
      { url: "https://www.newham.gov.uk/council/our-borough/2", label: "LB Newham borough profile", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "safe",
    crime_vs_borough: "average",
    crime_vs_croydon: "safer",
    after_dark_assessment: "Stratford station and Westfield are busy and stewarded late — Westfield closes at 22:00 but the bus station and main station forecourt are active until midnight. The Olympic Park core (inside the LLDC managed footprint) is well-lit and patrolled. East Village has its own Get Living security presence. Streets further from the park core — particularly Stratford High Street toward Bow, and parts of Maryland — can feel quieter and are worth situational awareness. Women-walking-alone assessment: comfortable within East Village and the Olympic Park core; mixed on the Stratford town-centre edges late evening.",
    concerns: [
      "Stratford town-centre back streets (Angel Lane, Chant Street) have petty crime spikes per Met Police data",
      "Night economy around The Stratford pub cluster can be lively late weekend",
    ],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police-service/stratford/", label: "Met Police — Stratford", type: "met-police", accessed_date: "2026-04-17" },
      { url: "https://www.newham.gov.uk/community-parks-leisure/community-safety", label: "Newham community safety", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: true,
    has_canal: true,
    has_dock: false,
    parks: [
      { name: "Queen Elizabeth Olympic Park", size_acres: 560, walk_minutes: 4, notes: "One of the largest contiguous green spaces in inner London; managed parkland, waterways, and open-air cultural programming" },
      { name: "Victoria Park", size_acres: 213, walk_minutes: 25, notes: "Victorian park to the west; noted for markets and running (8 min by bus)" },
      { name: "Stratford Park", size_acres: 15, walk_minutes: 6, notes: "Older municipal park with play areas" },
      { name: "Wick Woodland", size_acres: 20, walk_minutes: 12, notes: "Ecology-focused wooded area on the park's northern edge" },
    ],
    overall_assessment: "Unmatched urban green-space proposition in the dataset at this price point — the Olympic Park's 560 acres is one of the largest contiguous green spaces in inner London, with the River Lea and Bow Back Rivers running through plus the Lee Navigation canal on the western edge. Canal walking is continuous to Hackney Wick and beyond.",
    sources: [
      { url: "https://www.queenelizabetholympicpark.co.uk/", label: "Queen Elizabeth Olympic Park", type: "developer", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Waitrose Westfield Stratford", type: "supermarket", walk_minutes: 5, notes: "Full-size Waitrose inside Westfield" },
      { name: "M&S Food Hall Stratford", type: "supermarket", walk_minutes: 5, notes: "Westfield food hall" },
      { name: "Sainsbury's East Village", type: "supermarket", walk_minutes: 3, notes: "Inside East Village; accessible from Get Living buildings" },
      { name: "Tesco Express Stratford Station", type: "convenience", walk_minutes: 4, notes: "Top-up shop at the station" },
      { name: "Stratford Farmers Market", type: "independent", walk_minutes: 6, notes: "Weekend farmers market" },
    ],
    gyms: [
      { name: "Nuffield Health Stratford", type: "premium gym", walk_minutes: 6, notes: "Pool, gym floor, classes; £80-100/mo" },
      { name: "PureGym Stratford", type: "budget gym", walk_minutes: 5, notes: "24/7 at Westfield; £30-40/mo" },
      { name: "The Gym Group Stratford", type: "budget gym", walk_minutes: 6, notes: "24/7 alternative; £25-35/mo" },
      { name: "Copper Box Arena", type: "multi-use arena + gym", walk_minutes: 8, notes: "Olympic legacy venue; public gym sessions, drop-in classes" },
      { name: "Better Gym Stratford", type: "leisure-centre", walk_minutes: 7, notes: "Council-run; pool + gym" },
      { name: "TMX Stratford (Total Mobility X)", type: "specialist", walk_minutes: 10, notes: "Boxing/MMA/strength" },
    ],
    food_and_drink: [
      { name: "Westfield Stratford", type: "food hall", walk_minutes: 5, notes: "200+ shops, 70+ restaurants; largest urban shopping centre in Europe" },
      { name: "East Village retail core (Victory Parade)", type: "restaurants", walk_minutes: 2, notes: "Tonkotsu, Mauro's, Leather Lane Coffee, independents in East Village ground floors" },
      { name: "Here East", type: "co-working + restaurants", walk_minutes: 8, notes: "Includes Mother Kelly's, Crate Brewery sister bar" },
      { name: "Hackney Wick pub cluster (Crate, Howling Hops, Grow Hackney)", type: "bar", walk_minutes: 15, notes: "Canal-side craft beer; weekend destination" },
      { name: "Stratford Cross food stalls", type: "street food", walk_minutes: 5, notes: "Rotating traders at the Gehry-designed pavilion" },
    ],
    health: [
      { name: "East Village Health Centre", type: "NHS GP", walk_minutes: 3, notes: "Inside East Village; accepts registrations" },
      { name: "Well Pharmacy Westfield", type: "pharmacy", walk_minutes: 5, notes: "Full NHS services" },
      { name: "Newham University Hospital", type: "NHS hospital", walk_minutes: 12, notes: "A&E, secondary care at Plaistow (12 min bus)" },
      { name: "Chadwick Medical Centre", type: "NHS GP", walk_minutes: 5, notes: "Alternative GP registration option" },
    ],
    cultural: [
      { name: "V&A East Storehouse", type: "museum", walk_minutes: 5, notes: "Open since 2025; behind-the-scenes collection access" },
      { name: "V&A East Museum", type: "museum", walk_minutes: 5, notes: "Opens 2026; full museum programme" },
      { name: "Sadler's Wells East", type: "dance venue", walk_minutes: 6, notes: "East London home of Sadler's Wells; opened 2024" },
      { name: "UCL East", type: "university campus", walk_minutes: 7, notes: "Marshgate and One Pool Street buildings; students and open events" },
      { name: "London College of Fashion", type: "university", walk_minutes: 7, notes: "UAL's LCF moved here 2023" },
      { name: "Stratford Circus Arts Centre", type: "theatre", walk_minutes: 5, notes: "Community theatre and arts" },
      { name: "Theatre Royal Stratford East", type: "theatre", walk_minutes: 5, notes: "Long-established producing theatre" },
      { name: "BBC Music Studios", type: "music venue", walk_minutes: 5, notes: "Opens 2026 as part of East Bank" },
    ],
    notes: "Cultural amenity density is the highest single differentiator Stratford has — V&A East + Sadler's Wells East + UCL East + London College of Fashion + BBC Music Studios is the largest single cultural investment in London in a generation. Westfield provides retail density at unprecedented scale. Independent coffee and restaurant density in East Village is moderate and growing. Hackney Wick 15 min walk adds the counterweight — creative and nightlife density that East Village lacks.",
    sources: [
      { url: "https://www.eastbank.london/", label: "East Bank", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://uk.westfield.com/stratfordcity", label: "Westfield Stratford", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: {
    status: "phased",
    investment_pipeline: "The London Legacy Development Corporation (LLDC) delivers the Queen Elizabeth Olympic Park legacy — £9 billion of public investment across East Bank, residential, and infrastructure phases through 2035. Active phases: Stratford Waterfront (700 homes by Ballymore, completing 2029), East Wick + Sweetwater (Places for People, 1,800 homes, in delivery), Pudding Mill Lane (mixed-use, early phases). Commercial overlay: Here East (co-working, delivered), continued expansion of East Bank cultural venues.",
    recent_milestones: [
      "2023 — London College of Fashion delivered",
      "2023 — UCL East (Marshgate) opened",
      "2024 — Sadler's Wells East opened",
      "2024 — UCL East (One Pool Street) opened",
      "2025 — V&A East Storehouse opened",
      "2025 — Stratford Waterfront construction started",
    ],
    upcoming_milestones: [
      "2026 — V&A East Museum opens",
      "2026 — BBC Music Studios opens",
      "2026 — Stratford Mill (Greystar BTR) completes",
      "2027 — East Wick phase 2 delivery",
      "2029 — Stratford Waterfront 700 homes complete",
    ],
    trajectory_through_2027: "Strongly ascending through the visa window. East Bank fully matures during 2026 with the V&A Museum and BBC Music Studios openings — these are not incremental additions, they are flagship completions of the Olympic legacy masterplan. Stratford has the most momentum going into 2027 because so much cultural capital is opening in 2026.",
    sources: [
      { url: "https://www.lldc.co.uk/", label: "LLDC", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.eastbank.london/", label: "East Bank", type: "developer", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Safe rating with Newham at borough average; Stratford station and Westfield are busy and stewarded, the Olympic Park core is well-lit and patrolled. Materially safer than Croydon.",
        "1.2": "East Village (2,800 BTR homes), Chobham Manor, Glasshouse Gardens, East Wick + Sweetwater, and the in-delivery Stratford Waterfront are all purpose-built modern stock.",
        "1.3": "Elizabeth + Jubilee + Central + DLR + Overground + HS1 at Stratford station — City 12, Canary Wharf 13, Soho 18, KX 11. Among the best-connected points in London.",
        "1.4": "Get Living runs East Village as a flagship UK BTR campus; Ballymore, Taylor Wimpey/L&Q, and multiple managed operators across the wider Olympic Park build-out.",
        "1.5": "LLDC stewardship of Queen Elizabeth Olympic Park plus the East Village managed infrastructure — the public realm is among the best-maintained in London.",
        "1.6": "Strongly ascending — East Bank maturing, Stratford Waterfront under construction through 2029, cultural programming continuing to expand.",
      },
      "strong",
      "T1 clean across the board.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Westfield Stratford (the largest urban shopping centre in Europe) is 5 minutes walk — the 15-minute neighbourhood is over-delivered.",
        "2.2": "Westfield has the full premium grocery range plus multiple independent options; East Village's own retail layer adds everyday essentials.",
        "2.3": "All major chain gyms (PureGym, The Gym, Nuffield) within the Westfield/East Village cluster plus resident gyms in Get Living buildings. Caner's T2.3 bar is comfortably met.",
        "2.4": "Queen Elizabeth Olympic Park (560 acres) is the headline T2.4 win — one of the largest contiguous green spaces in inner London, with the River Lea and Bow Back Rivers running through.",
        "2.5": "East Village and the residential blocks are reliably quiet at night — the cultural and retail density does not translate into persistent night noise.",
        "2.7": "Primary cohort 18-29 — Census 2021 confirms genuinely young multi-ethnic mix. Student share 12%, professional renter share 50%. Strong dominant young presence.",
      },
      "strong",
      "Strong on every T2 row. Olympic Park is the headline T2.4 win.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "pass" },
      {
        "3.1": "East Bank programming continues to expand with V&A East Museum opening 2026 and Stratford Waterfront delivering 700 homes through 2029 — visibly ongoing investment.",
        "3.2": "Five major cultural anchors at East Bank (V&A East, Sadler's Wells East, UCL East, London College of Fashion, BBC Music Studios) plus Olympic Park, plus Westfield. Multiple anchors of the highest tier.",
        "3.3": "'Stratford' and 'East Bank' have strong mental-map presence — Olympic legacy plus the cultural programme put this among the most recognisable East London destinations.",
        "3.4": "15-minute completeness is exceptional — work, shopping, eating, exercising, culture, healthcare, and 560 acres of green space all on foot. Close to gold standard.",
        "3.5": "Architectural quality is mixed across the masterplan — East Bank architecture is high quality and East Village has coherent design but peripheral phases are more generic.",
        "3.6": "Day/night rhythm is strong — Westfield, East Bank programming, Olympic Park use, and East Village residential density keep the area genuinely alive through day and evening.",
      },
      "strong",
      "T3 is exceptional thanks to East Bank and the Olympic legacy.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 5/5 — all four anchors within 13 minutes via Elizabeth/Jubilee/Central. Best-in-class multi-cluster reach.",
        "5.2": "Redundancy score 5/5 — five independent lines plus HS1. Failure of any one line is fully absorbed. The strongest redundancy in the dataset alongside King's Cross.",
        "5.3": "Strongly ascending through 2027 and beyond — V&A East Museum opens 2026, Stratford Waterfront completes 2029, East Bank continues to mature through the visa window.",
        "5.4": "Quiet third-space culture is partial — UCL East and the university presence add some reading spaces but commercial bookshop density is thinner than King's Cross.",
      },
      "strong",
      "Five-line redundancy + multi-cluster reach + ascending trajectory. The strongest T5 in the dataset alongside King's Cross.",
    ),
    overall_grade: "S",
    grade_reasoning: "Stratford / East Bank earns S on the strength of every tier, with the only weaknesses being mixed architectural coherence and limited quiet third spaces. Among the strongest candidates in the dataset.",
  },

  // ── RESEARCH: Stratford projects ─────────────────────────────────────
  // Get Living (East Village):
  //   Referencing: homeppl (confirmed — Get Living is known Homeppl user)
  //   Open Banking: true (Homeppl)
  //   Professional guarantor: true (Homeppl Guarantid)
  //   Agreement type: ast
  //   International friendly: yes
  //   Visa friendly: yes
  //   Prices: 1-bed estimated ~£1,800–£2,200 pcm (E20 BTR market)
  //   Cost tier: mid-range
  //   Grad visa realism: achievable
  //
  // Manhattan Loft Gardens:
  //   Operator: Manhattan Loft Gardens (in-house)
  //   Referencing: unknown
  //   Agreement type: ast (long-term) / licence (short-term from 1 week)
  //   Prices: 1-bed from £2,800 pcm; long-term from £2,000 pcm
  //   Cost tier: premium
  //   Grad visa realism: unknown
  //
  // Greystar (Stratford Mill):
  //   Referencing: unknown (Greystar not confirmed Homeppl)
  //   Prices: UNVERIFIED — not yet leasing (first residents 2026)
  //   Grad visa realism: unknown
  //
  // Other projects (Chobham Manor, East Wick, Glasshouse Gardens, Here East):
  //   Mixed tenure, various operators, agent-managed lettings
  //   Grad visa realism: unknown
  // ───────────────────────────────────────────────────────────────────────

  projects: [
    stratfordWaterfront,
    eastVillage,
    buildProject({
      id: "here-east", area_id: "stratford", name: "Here East", developer: "iCITY / LLDC", operator: "Here East", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Converted press and broadcast centre. Tech and creative workspace campus anchoring the commercial side of the park.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Converted Olympic press and broadcast centre — primarily a workspace campus rather than residential, so residential quality dimensions are not the primary scoring axis.",
        t4_1_amenity_package: "Decent workspace amenity but not a residential amenity package.",
        t4_4_signature_arch: "Adaptive reuse of Olympic broadcast infrastructure — interesting but not architecturally signature in the residential sense.",
      },
    }),
    buildProject({
      id: "chobham-manor", area_id: "stratford", name: "Chobham Manor", developer: "Taylor Wimpey / L&Q", operator: "Various", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "The most family-residential part of the post-Olympic build-out. Useful if East Village feels too rental-heavy.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Taylor Wimpey/L&Q delivery to standard family-housing specification — reliable but not premium.",
        t4_1_amenity_package: "Decent rather than premium — family-housing oriented with garden spaces but no flagship pool/spa stack.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    buildProject({
      id: "east-wick-sweetwater", area_id: "stratford", name: "East Wick + Sweetwater", developer: "Places for People + Balfour Beatty", operator: "Various", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unknown",
      preview: "The Hackney Wick edge of the Olympic Park build-out. More creative-neighbourhood in tone than Stratford's polished retail core.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "In-delivery phases to current Places for People specification — modern building services and park-adjacent layouts.",
        t4_1_amenity_package: "Decent shared amenities consistent with the neighbourhood tone rather than a premium package.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    buildProject({
      id: "glasshouse-gardens", area_id: "stratford", name: "Glasshouse Gardens", developer: "Lend Lease + LCR", operator: "Various", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Station-adjacent residential with immediate Westfield and transport access. Conventional high-rise but very liveable.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Lend Lease delivery to modern specification — reliable conventional high-rise with strong transport adjacency.",
        t4_1_amenity_package: "Decent shared amenities with the station and Westfield on the doorstep substituting for premium on-site amenity density.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    manhattanLoftGardens,
    stratfordMill,
    buildProject({
      id: "stratford-studios",
      area_id: "stratford",
      name: "Stratford Studios",
      developer: "Unknown",
      operator: "BTR Operating Ltd",
      building_type: "BTR",
      build_phase: "complete",
      tenure: ["rent"],
      realism: "unknown",
      preview: "158 furnished studio apartments in E15. Under new management (BTR Operating Ltd) from September 2025. HomeViews 2.9/5 — management change may improve ratings. Studio-only format.",
      amenity_tier: "decent",
      overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Furnished studio BTR — under new management from September 2025. Previous HomeViews rating of 2.9/5 indicates quality concerns.",
        t4_1_amenity_package: "Decent — bike storage, private parking, lounges, co-working spaces, concierge app.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
  ],

  external_links: [
    { url: "https://www.queenelizabetholympicpark.co.uk/", label: "Queen Elizabeth Olympic Park", type: "developer", accessed_date: "2026-04-11" },
    { url: "https://www.eastbank.london/", label: "East Bank", type: "developer", accessed_date: "2026-04-11" },
    { url: "https://www.getliving.com/", label: "Get Living (East Village operator)", type: "operator", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default stratford;
