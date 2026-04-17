import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Projects (extracted for external_links + price_transparency mutation) ──

// RESEARCH: Bow Green — Berkeley St James sales-led, first completions Q1/Q2 2026.
const bowGreen = buildProject({
  id: "bow-green",
  area_id: "mile-end",
  name: "Bow Green",
  developer: "St James (Berkeley Group)",
  operator: "Various agents",
  building_type: "Mixed",
  build_phase: "in_delivery",
  tenure: ["rent", "buy"],
  realism: "unknown",
  preview: "Up to 1,450 homes across 5 phases. Exceptionally strong amenity: indoor and outdoor pools, cinema, gym, sauna, steam room, botanical garden, 5+ acres of gardens.",
  amenity_tier: "premium",
  overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley Group subsidiary (St James) — premium specification expected. Largest new development in the Mile End / Bow area.",
    t4_1_amenity_package: "Premium — indoor and outdoor pools, sauna, steam room, treatment room, cinema, games room, botanical garden, 5+ acres landscaped gardens, 24-hour concierge, restaurant.",
    t4_4_signature_arch: "Not confirmed as named-architect signature work.",
  },
});
bowGreen.external_links = [
  { url: "https://www.berkeleygroup.co.uk/developments/london/bow/bow-green", label: "Bow Green — St James (Berkeley)", type: "developer", accessed_date: "2026-04-12" },
];
bowGreen.rental.price_transparency = "enquire";

// RESEARCH: St Paul's Square — BTS 2017. Rental via individual landlords.
const stPaulsSquare = buildProject({
  id: "st-pauls-square",
  area_id: "mile-end",
  name: "St Paul's Square",
  developer: "Countryside Properties (Vistry Group)",
  operator: "Various agents",
  building_type: "Mixed",
  build_phase: "complete",
  tenure: ["rent", "buy"],
  realism: "unknown",
  preview: "364 homes near Mile End and Bow Road stations. Landscaped courtyard gardens, concierge. 1-beds from approx. £1,800-£2,200 pcm. Rental through individual landlords.",
  amenity_tier: "decent",
  overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Countryside Properties mid-market delivery, completed 2017. Functional build quality.",
    t4_1_amenity_package: "Decent — landscaped courtyard gardens, concierge. No premium amenity stack.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});

// RESEARCH: Bow Garden Square — BTS 2019. Rental via individual landlords.
const bowGardenSquare = buildProject({
  id: "bow-garden-square",
  area_id: "mile-end",
  name: "Bow Garden Square",
  developer: "Telford Homes (CALA Homes)",
  operator: "Various agents",
  building_type: "Mixed",
  build_phase: "complete",
  tenure: ["rent", "buy"],
  realism: "unknown",
  preview: "Approx. 120 homes across four buildings (6-8 storeys) south of Mile End near Roman Road. Landscaped courtyard, concierge. Rental through individual landlords.",
  amenity_tier: "decent",
  overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Telford Homes mid-market delivery, completed 2019. Functional build quality.",
    t4_1_amenity_package: "Decent — landscaped courtyard, concierge. Modest amenity package.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});

// RESEARCH: Fizzy Stepney Green — Greystar subsidiary BTR. 1-bed from £1,984 pcm.
const fizzyStepneyGreen = buildProject({
  id: "fizzy-stepney-green",
  area_id: "mile-end",
  name: "Fizzy Stepney Green",
  developer: "Unknown",
  operator: "Fizzy Living (Greystar)",
  building_type: "BTR",
  build_phase: "complete",
  tenure: ["rent"],
  realism: "achievable-with-guarantor",
  preview: "Fizzy Living / Greystar BTR near Stepney Green tube. Award-winning (PRS Development of the Year). Professional management, historically more flexible on visa status. 1-beds from approx. £1,900 pcm.",
  amenity_tier: "basic",
  overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Fizzy Living BTR — functional build quality with professional Greystar management. Won PRS Development of the Year.",
    t4_1_amenity_package: "Basic — communal courtyard, bike storage, on-site property manager, free superfast broadband. No gym/pool/concierge.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
fizzyStepneyGreen.external_links = [
  { url: "https://fizzyliving.com/locations/stepney-green", label: "Fizzy Living — Stepney Green", type: "operator", accessed_date: "2026-04-12" },
  { url: "https://www.homeviews.com/development/fizzy-stepney-green-e1", label: "HomeViews — Fizzy Stepney Green", type: "homeviews", accessed_date: "2026-04-17" },
];
fizzyStepneyGreen.rental.price_transparency = "listed";
fizzyStepneyGreen.rental.prices = {
  one_bed: { min: 1800, max: 2100, currency: "GBP", per: "month" },
  bills_included: false,
  notes: "1-bed £1,800-£2,100 per Fizzy filter UI April 2026 (refresh from stale V1 £1,900).",
};
fizzyStepneyGreen.rental.affordability = "comfortably-affordable";
fizzyStepneyGreen.building_quality = {
  sound_insulation: "excellent",
  thermal_performance: "good",
  layout_notes: "Cheerful yellow balconies as identifying feature; mid-rise courtyard composition on quiet side street opposite Shandy Park.",
  kitchen_quality: "good",
  heating_type: "communal",
  notes: "Best-in-class sound insulation within Fizzy portfolio — HomeViews reviews consistently praise sound isolation ('best sound isolation I have ever had'). Thermal performance notably strong — residents note 'didn't have to turn on heating once even in winter'.",
};
fizzyStepneyGreen.amenities = {
  pool: false,
  pool_notes: "",
  gym: false,
  gym_quality: "unknown",
  concierge: "none",
  sky_lounge: false,
  co_working: false,
  dining_room: false,
  cinema_room: false,
  rooftop_terrace: false,
  parking: false,
  bike_storage: true,
  pet_policy: "Pet friendly",
  other_amenities: ["Courtyard"],
  overall_tier: "basic",
};
fizzyStepneyGreen.architecture = {
  architects: [],
  awards: ["PRS Development of the Year — Inside Housing Top 60 Developments Awards"],
  is_signature: false,
  style_notes: "Cheerful yellow balconies are the identifying feature; mid-rise courtyard composition on quiet side street opposite Shandy Park.",
};
fizzyStepneyGreen.long_form = {
  full: "Fizzy Stepney Green is a Fizzy Living (Greystar subsidiary) BTR building on a quiet side street opposite Shandy Park, 5 minutes' walk from Stepney Green tube (District + H&C). PRS Development of the Year award-winner. Basic amenity tier — no gym, no concierge, no pool — but the building quality signal is exceptional: HomeViews rates it 4.42/5 across 191 reviews with standout praise for sound insulation ('best I have ever had') and thermal performance ('didn't turn on heating even in winter'). 1-beds £1,800-£2,100 pcm — in Caner's comfortably-affordable range. Greystar / Homeppl referencing backend opens the Open Banking savings pathway.",
  living_experience: "HomeViews 4.42/5 (191 reviews). Praised for sound insulation, thermal efficiency, modern and bright layouts, friendly neighbours and responsive (same-day) maintenance. Recurring complaints: main door break-ins / package theft, periodic heating and hot-water failures, scaffolding issues persisting well beyond promised timelines, L&Q third-party contractor accountability gap.",
  notable_features: "Best-in-class sound insulation within Fizzy portfolio; thermal performance notably strong; PRS Development of the Year award; opposite Shandy Park; Stepney Green tube 5-min walk.",
};
fizzyStepneyGreen.resident_signal = {
  homeviews_score: 4.42,
  homeviews_url: "https://www.homeviews.com/development/fizzy-stepney-green-e1",
  summary: "4.42/5 across 191 reviews (high confidence). Standout praise for sound insulation and thermal performance. Complaints concentrated on security (package theft, door break-ins), periodic hot-water / heating failures, and prolonged scaffolding works.",
  common_praise: [
    "Excellent sound insulation between units",
    "Thermal efficiency — barely need heating",
    "Modern, spacious, bright layouts",
    "Friendly neighbours / community",
    "Responsive management (same-day maintenance)",
  ],
  common_complaints: [
    "Main door break-ins / package theft (recurring)",
    "Heating/hot water failures (10+ instances in 6 months)",
    "Scaffolding up for over a year (vs promised 6 weeks)",
    "L&Q third-party contractor accountability gap",
    "Electrical unit high-pitch beep unresolved",
  ],
};

const mileEnd: Area = {
  id: "mile-end",
  name: "Mile End",
  aliases: ["Mile End Road", "Queen Mary"],
  borough: "Tower Hamlets",
  postcodes: ["E3", "E1"],

  headline:
    "Three lines at one station (Central, District, H&C) in Zone 2 with Mile End Park and Queen Mary University anchoring a student-heavy young demographic.",
  preview:
    "Central + District + H&C at Mile End give a 14-minute average to employment anchors with 4/5 redundancy. Mile End Park provides a linear green spine. Queen Mary campus drives a student-heavy 47% aged 20-39 demographic. Safety is marginal — acceptable but not clean.",

  long_form: {
    full: "Mile End sits along the Regent's Canal with three tube lines at one station giving strong multi-hub connectivity. Queen Mary University anchors a student-heavy demographic and keeps footfall continuous through the residential grain. Mile End Park — a linear green corridor running north-south — is a genuine amenity. Safety passes but is marginal: the ward is not a known violent-crime hotspot but Tower Hamlets borough context means it is not a clean pass either. The area benefits from its position between Bow and Bethnal Green, with good access to both areas' amenities.",
    history: "Named after a medieval milestone on the road from London to Colchester. Queen Mary University (founded 1785 as London Hospital Medical College) is the major institutional anchor.",
    vibe: "Student-influenced, multicultural. Mile End Road is busy; the park and canal provide calm corridors.",
    weekday: "A Tuesday at 7pm: students heading to/from Queen Mary; Mile End Park with joggers; Mile End Road busy with traffic.",
    weekend: "A Saturday: Mile End Park busy with families and runners; quieter campus; Regent's Canal towpath walkers.",
    notable: "Mile End Park; Regent's Canal; Queen Mary University of London.",
    croydon_comparison: "Mile End delivers Central Line Zone 2 access — Bank in 13 minutes, TCR in 15. Stronger connectivity than Croydon with comparable rental pricing and better green space via Mile End Park.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Central", type: "tube" },
      { name: "District", type: "tube" },
      { name: "Hammersmith & City", type: "tube" },
    ],
    primary_stations: [
      { name: "Mile End", lines: ["Central", "District", "Hammersmith & City"], walk_minutes_from_centre: 2 },
      { name: "Stepney Green", lines: ["District", "Hammersmith & City"], walk_minutes_from_centre: 10 },
      { name: "Bow Road", lines: ["District", "Hammersmith & City"], walk_minutes_from_centre: 10 },
      { name: "Bow Church DLR", lines: ["DLR"], walk_minutes_from_centre: 12 },
    ],
    times_to_anchors: { city_of_london: 13, canary_wharf: 10, soho_fitzrovia: 16, kings_cross_shoreditch: 17 },
    multi_cluster_score: 4,
    redundancy_score: 4,
    notes: "Central Line is the multi-hub backbone. District + H&C share platforms but route differently (District south of river, H&C north). All three are 24-hour on Friday/Saturday nights (Central especially). Bow Church DLR adds Canary Wharf alternative. Mile End is resilient against single-line outages in a way few Zone 2 stations match — three independent corridor options plus DLR fallback.",
    sources: [
      { url: "https://tfl.gov.uk/tube-dlr-overground/status/", label: "TfL status and JourneyPlanner", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "18-29",
    age_breakdown: [
      { cohort: "18-29", pct: 42 },
      { cohort: "30-39", pct: 22 },
      { cohort: "40-49", pct: 12 },
      { cohort: "50+", pct: 24 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 22 },
      { group: "White — other", pct: 20 },
      { group: "Asian or Asian British", pct: 40 },
      { group: "Black or Black British", pct: 9 },
      { group: "Mixed", pct: 5 },
      { group: "Other", pct: 4 },
    ],
    household_mix: [
      { type: "Single person", pct: 28 },
      { type: "Couple no children", pct: 16 },
      { type: "Couple with children", pct: 20 },
      { type: "Lone parent", pct: 10 },
      { type: "Shared household", pct: 24 },
      { type: "Other", pct: 2 },
    ],
    student_pct: 26,
    professional_renter_pct: 34,
    notes: "Queen Mary University of London has 33,000+ students on the Mile End campus — the largest self-contained university campus of any London university. 41% of students are international; 77% from Black or minority ethnic backgrounds (2021-22 figures). This dominates the Mile End ward demographic — 47% aged 20-39, shared-household rate nearly double the borough average, and student term-time / vacation rhythm heavily influences local retail. Non-student population is Bangladeshi-community-weighted with a growing young-professional inflow from the new-build stock (Bow Green, St Paul's Square, Bow Garden Square).",
    sources: [
      { url: "https://www.qmul.ac.uk/about/facts-and-figures/", label: "Queen Mary University — facts and figures", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "moderate",
    crime_vs_borough: "average",
    crime_vs_croydon: "safer",
    after_dark_assessment: "Queen Mary's 33,000-student population keeps Mile End Road heavily trafficked until at least midnight during term time. Campus itself (west side of Mile End Road, south of the tube) is well-lit and has 24-hour security presence. Mile End Park's linear corridor is active during daylight for runners and joggers but less populated after 21:00 — not recommended as a night walking route but not a specific hotspot. Regent's Canal towpath is similar — use for daytime, not night. Residential streets north and south of Mile End Road (Grove Road, Burdett Road, Coborn Road, Tredegar Square area) are calm. Not a violent-crime hotspot per Met data; Tower Hamlets borough context (68/1k overall, below London average of 83) applies.",
    concerns: [
      "Mile End Park after 21:00 — use towpath for daytime only",
      "Regent's Canal towpath at night — standard canal safety caution",
      "Mile End Road in term break (summer) has noticeably less foot traffic than term time",
    ],
    sources: [
      { url: "https://www.met.police.uk/a/your-area/met/tower-hamlets/mile-end/", label: "Met Police — Mile End SNT", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: false,
    has_canal: true,
    has_dock: false,
    parks: [
      { name: "Mile End Park", size_acres: 76, walk_minutes: 3, notes: "Linear park running 2 miles south-to-north from Limehouse to Victoria Park — genuine recreational amenity with sports facilities, tennis courts, a swimming pool (Mile End Leisure Centre), children's play, arts pavilion, ecology park section, 11 cafes. Integrated with Regent's Canal along its western edge" },
      { name: "Regent's Canal towpath", walk_minutes: 3, notes: "Continuous walking/cycling route from Paddington to Limehouse — Mile End sits on the eastern half. Part of National Cycle Route 1" },
      { name: "Victoria Park", size_acres: 217, walk_minutes: 18, notes: "One of London's great parks — accessible via Mile End Park's northern extension" },
      { name: "Tower Hamlets Cemetery Park", size_acres: 31, walk_minutes: 12, notes: "Nature reserve on former Victorian cemetery — ecological, quiet" },
    ],
    overall_assessment: "Mile End has one of the strongest green-and-water profiles of any Zone 2 area. Mile End Park (76 acres) is a genuine recreational park with substantial sports and leisure infrastructure — swimming pool, tennis courts, football pitches, children's play, gardens, 11 cafes. The Regent's Canal runs through the park's western edge, giving a continuous towpath walking route to Limehouse (south) and to Victoria Park + Hackney (north). Tower Hamlets Cemetery Park adds a wilder nature-reserve option 12 min away. Victoria Park (217 acres) is 18 min walk via the linear park. This is the single strongest differentiator vs Aldgate East or Whitechapel.",
  },
  amenities: {
    grocery: [
      { name: "Sainsbury's Mile End", type: "supermarket", walk_minutes: 5, notes: "Large-format at Mile End roundabout" },
      { name: "Tesco Express Mile End Road", type: "convenience", walk_minutes: 3, notes: "Secondary" },
      { name: "Co-op Burdett Road", type: "convenience", walk_minutes: 8, notes: "South of tube" },
      { name: "Bow Wharf market stalls", type: "market", walk_minutes: 10, notes: "Weekend market" },
    ],
    gyms: [
      { name: "Mile End Park Leisure Centre (swimming pool)", type: "council-run", walk_minutes: 3, notes: "Pool, gym, classes — inside Mile End Park" },
      { name: "QMotion (Queen Mary)", type: "academic-public", walk_minutes: 5, notes: "Campus gym, public membership available — pool, classes, sports hall" },
      { name: "PureGym Mile End", type: "budget", walk_minutes: 3, notes: "24/7, Whitechapel-style budget tier" },
      { name: "The Gym Group Bow", type: "budget", walk_minutes: 12, notes: "Alternative budget option" },
      { name: "Bow Arts fitness / yoga studios", type: "boutique", walk_minutes: 10, notes: "Niche boutique offerings" },
    ],
    food_and_drink: [
      { name: "Half Moon Theatre Bar", type: "pub-theatre", walk_minutes: 8, notes: "Local institution" },
      { name: "Coborn Arms", type: "pub", walk_minutes: 10, notes: "Conservation area pub" },
      { name: "Palm Tree (by Regent's Canal)", type: "pub", walk_minutes: 7, notes: "Legendary East End pub on Mile End Park canal edge — cash only, piano" },
      { name: "Mile End Road curry houses", type: "restaurants", walk_minutes: 3, notes: "Student-friendly pricing" },
      { name: "Dim T Bow Wharf", type: "restaurant", walk_minutes: 10, notes: "Chain dim sum" },
    ],
    health: [
      { name: "Mile End Hospital", type: "hospital", walk_minutes: 8, notes: "Minor injuries unit — part of Barts Health NHS Trust" },
      { name: "Harford Health Centre", type: "GP", walk_minutes: 5, notes: "Local NHS GP" },
      { name: "Boots Mile End", type: "pharmacy", walk_minutes: 5, notes: "Standard hours" },
    ],
    cultural: [
      { name: "Half Moon Theatre", type: "theatre", walk_minutes: 8, notes: "Young people's theatre" },
      { name: "Queen Mary campus (Drapers' Great Hall, campus events)", type: "academic", walk_minutes: 5, notes: "Public lectures, art events" },
      { name: "Chisenhale Gallery", type: "gallery", walk_minutes: 15, notes: "Major contemporary art space — Victoria Park edge" },
      { name: "Rich Mix Bethnal Green", type: "arts centre", walk_minutes: 18, notes: "Cinema, live music" },
      { name: "Idea Store Bow", type: "library", walk_minutes: 15, notes: "Modern library branch" },
    ],
    notes: "Amenity profile is student-weighted — budget food, gym access excellent (university gym with public membership is rare), Mile End Leisure Centre's pool inside the park is a genuine amenity. Restaurant quality is middling — this is not a food destination. The Palm Tree by the canal is a genuine East End cultural landmark.",
  },
  regeneration: {
    status: "active",
    investment_pipeline: "Berkeley (St James) Bow Green — up to 1,450 homes across 5 phases, first completions Q1/Q2 2026. Teviot Estate regeneration (Poplar-adjacent) starting 2026. Tower Hamlets 52,000-home borough-wide pipeline with significant Bow/Mile End allocation. Queen Mary campus expansion ongoing. Ongoing residential infill by Telford, Countryside, Taylor Wimpey.",
    recent_milestones: [
      "2023 — Queen Mary Graduate Centre opening",
      "2024-2025 — Bow Green enabling works and Phase 1 delivery begins",
      "2025 — Mile End Park path + lighting upgrade",
    ],
    upcoming_milestones: [
      "2026 Q1/Q2 — Bow Green first completions (up to 1,450 homes eventually)",
      "2026-2027 — Teviot Estate Phase 1 construction",
      "2027 — Bow Green Phase 2 delivery",
    ],
    trajectory_through_2027: "Active-ascending. Bow Green (Berkeley) delivering 1,450 new homes through phased build-out starting 2026 will meaningfully reshape the southern edge of Mile End / Bow Road corridor. Teviot Estate regeneration begins construction 2026 — different area but visible influence. Queen Mary continues campus expansion. By August 2027 the residential stock will be noticeably newer, the demographic slightly less student-weighted as young professional inflow from Bow Green lands. Rent growth moderate (3-5%) — less dramatic than Whitechapel but steady.",
    sources: [
      { url: "https://www.berkeleygroup.co.uk/developments/london/bow/bow-green", label: "Berkeley Group — Bow Green", type: "developer", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Marginal pass. Not a known violent-crime hotspot. Queen Mary footfall and Mile End Park's calmness dominate. Acceptable but not clean.",
        "1.2": "Modern rental stock present.",
        "1.3": "Three lines at one station — Central, District, H&C. Strong multi-hub access.",
        "1.4": "Active professional and student rental market.",
        "1.5": "Mile End Park well-maintained; streets in reasonable order.",
        "1.6": "Not in decline — stable area with ongoing residential demand.",
      },
      "moderate",
      "T1 passes but T1.1 is marginal. Safety acceptable, not clean.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "unknown", "2.3": "unknown", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Mile End Road provides walkable essentials. Student-oriented retail present.",
        "2.2": "Grocery access not yet researched in detail.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Mile End Park + Regent's Canal provide strong green and water access.",
        "2.5": "Residential streets calm. Mile End Road is busy but the park side is quiet.",
        "2.7": "Census 2021: 47% aged 20-39. Strong young-skew, student-heavy.",
      },
      "moderate",
      "T2 decent — strong green space and young demographic. Grocery and gym detail needed.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "partial", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "No flagship regeneration project. Ongoing residential infill.",
        "3.2": "Queen Mary University is an institutional anchor but not a cultural destination in the Whitechapel Gallery sense.",
        "3.3": "Recognisable sense of place — Mile End Park, canal, university campus give distinctiveness.",
        "3.4": "15-minute completeness is reasonable — transport, parks, university, basic retail.",
        "3.5": "Mixed architectural quality — university campus is well-maintained; residential stock varies.",
        "3.6": "Day/night rhythm is student-influenced — busy during term, quieter in vacations.",
      },
      "moderate",
      "T3 moderate — recognisable place identity anchored by park and university, but no strong cultural destination.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "partial", "5.4": "partial" },
      {
        "5.1": "All four anchors under 25 minutes. 13.75-min average. Strong multi-cluster coverage.",
        "5.2": "Three lines at one station with Central as multi-hub backbone. 4/5 redundancy.",
        "5.3": "Stable rather than ascending — no major regeneration trajectory.",
        "5.4": "Limited third-space culture — some cafes, university library not publicly accessible.",
      },
      "good",
      "T5 good — strong connectivity and redundancy. Trajectory and third spaces are the gaps.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — strong connectivity (4/5 redundancy, 14-min average), genuine green space, but marginal safety and no flagship project.",
  },

  projects: [bowGreen, stPaulsSquare, bowGardenSquare, fizzyStepneyGreen],

  external_links: [
    { url: "https://fizzyliving.com/locations/stepney-green", label: "Fizzy Living — Stepney Green", type: "operator", accessed_date: "2026-04-12" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default mileEnd;
