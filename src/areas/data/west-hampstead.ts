import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Project consts (extracted for external_links / price_transparency mutation) ──

const westHampsteadSquare = buildProject({
  id: "west-hampstead-square", area_id: "west-hampstead", name: "West Hampstead Square", developer: "Ballymore", operator: "Ballymore", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "Ballymore's major residential delivery at West Hampstead. Substantially complete with final phases ongoing.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Ballymore 2017+ delivery — modern specification.",
    t4_1_amenity_package: "Not yet researched.",
    t4_4_signature_arch: "No 2024/25 jury architectural signal found.",
  },
});
westHampsteadSquare.external_links = [
  { url: "https://www.ballymoregroup.com/en/developments/west-hampstead-square", label: "West Hampstead Square — Ballymore", type: "developer", accessed_date: "2026-04-12" },
];
westHampsteadSquare.rental.price_transparency = "enquire";

const westHampsteadCentral = buildProject({
  id: "west-hampstead-central", area_id: "west-hampstead", name: "West Hampstead Central", developer: "Astir / Gamuda", operator: "A2Dominion (affordable); private landlords (market)", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "180-unit mixed-tenure development (94 private + 7 shared ownership + 79 affordable). 5 storeys. Recently completed 2025-2026. Co-working on ground/first floors. Private units enter rental market via individual landlords.",
  amenity_tier: "decent", architects: ["Chapman Taylor", "Child Graddon Lewis"], overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "2025-2026 completion. Chapman Taylor / Child Graddon Lewis design. Modern specification expected.",
    t4_1_amenity_package: "Co-working spaces, retail, commercial space. Decent for a mixed-tenure scheme but no premium communal amenities.",
    t4_4_signature_arch: "Chapman Taylor with Child Graddon Lewis refinements. Competent but not signature.",
  },
});
westHampsteadCentral.rental.price_transparency = "enquire";

const theClayYard = buildProject({
  id: "the-clay-yard", area_id: "west-hampstead", name: "The Clay Yard", developer: "unknown", operator: "Private sale", building_type: "Build-to-Sell", build_phase: "in_delivery", tenure: ["buy"], realism: "blocked",
  preview: "For-sale development with new phase (The Heights) launched May 2024. Primarily for-sale with minimal managed rental implications.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "In delivery — cannot fully verify. Modern new-build expected.",
    t4_1_amenity_package: "Not researched. For-sale scheme — likely basic communal amenities.",
    t4_4_signature_arch: "No architectural press signal.",
  },
});
theClayYard.rental.price_transparency = "unknown";

const gravityWestHampstead = buildProject({
  id: "gravity-west-hampstead", area_id: "west-hampstead", name: "Gravity Co West Hampstead", developer: "Gravity Co", operator: "Gravity Co", building_type: "BTR", living_model: "co-living", build_phase: "complete", tenure: ["rent"], realism: "licence-exempt",
  preview: "Co-living from £1,400/month. Licence agreement. Water, Wi-Fi, heating, electricity included (council tax separate). Free gym membership, secure underground parking, community events. 3-month minimum stay.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Co-living specification. Modern managed studios.",
    t4_1_amenity_package: "Decent — free gym membership, secure underground parking, community events via Gravity App.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
gravityWestHampstead.external_links = [
  { url: "https://gravityco.co/location/west-hampstead/", label: "Gravity Co — West Hampstead", type: "operator", accessed_date: "2026-04-15" },
];
gravityWestHampstead.rental.price_transparency = "listed";

const westHampstead: Area = {
  id: "west-hampstead",
  name: "West Hampstead",
  aliases: [],
  borough: "Camden",
  postcodes: ["NW6"],

  headline:
    "Jubilee + Thameslink + Overground at three separate stations — the most under-appreciated redundancy hub outside Stratford/King's Cross. Clean T1 pass, Zone 2.",
  preview:
    "West Hampstead has three separate stations (Jubilee, Thameslink, Overground) within 1-3 minutes walk of each other, giving it one of the best multi-line redundancy profiles in the candidate list. Clean T1 pass on all six rows. Ballymore's West Hampstead Square is the major project, substantially complete. Peaking 2025-2026.",

  long_form: {
    full: "West Hampstead is a transport-led area with three independent rail products at three separate stations within 1-3 minutes walk: Jubilee (tube), Thameslink (mainline), and Overground (Mildmay). This gives it redundancy score 5/5 — the most under-appreciated redundancy hub outside Stratford and King's Cross. West Hampstead ward recorded materially below-average crime for Camden borough. Ballymore's West Hampstead Square is the major residential delivery, substantially complete. The area is peaking 2025-2026 as the Square completes, after which it is stable.",
    history: "Mature residential north-west London neighbourhood. Ballymore's West Hampstead Square brought modern BTR/BTS stock.",
    vibe: "Village-feel high street (West End Lane) with independent cafes and restaurants. Quieter residential character than nearby Kilburn.",
    weekday: "Weekday commuter flow from the three-station cluster is steady but not crushing — Jubilee peak 07:30-09:00 heading toward Baker Street, Bond Street, Green Park. Cafe culture peaks 09:00 and 13:00. West End Lane is continuously active through the daytime with a mix of remote-working residents, cafe meetings, and school-pickup foot traffic. After 19:00 weekdays the area quiets substantially — not a weeknight dining destination outside the established restaurant core.",
    weekend: "Saturday is peak — West Hampstead Farmers' Market (Saturday 10:00-14:00 on West End Green) plus the West End Lane cafe scene. Hampstead Heath at ~20 minutes east is the weekend green destination for residents. Sunday is quiet — brunch culture is strong, pubs (The Alliance, The Black Lion) run Sunday lunch, but there's no significant night economy. This is genuinely a weekend-residential neighbourhood.",
    notable: "Three independent rail stations within walking distance (Jubilee + Thameslink + Overground Mildmay); West End Lane independent high street; Ballymore West Hampstead Square; Gravity Co West Hampstead (co-living); Hampstead Cemetery; proximity to Hampstead Heath (20 min east).",
    croydon_comparison: "West Hampstead is fundamentally different from Croydon — residential-first, village-scale, safe, with transport redundancy that exceeds anywhere Croydon can reach. After-dark walking is categorically safer — West End Lane is well-lit and populated until 22:30 from the restaurant scene. Cafe density is strong on the tier-clean independent end (Hampstead Creperie, Gail's, Mamame). Gyms: PureGym West Hampstead, Virgin Active Hampstead (15 min), plus Gravity Co's free in-building gym. Transport: Zone 2 with 3-line redundancy and 15-minute Soho vs Croydon Zone 5 and 35-minute central. Price differential: Gravity Co from £1,400 all-in, West Hampstead Square 1-beds ~£2,100-2,600, Victorian conversions ~£1,600-2,000 — meaningfully below Ten Degrees' ~£3,000 effective and the best price-performance in the batch.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Jubilee", type: "tube" },
      { name: "Thameslink", type: "rail" },
      { name: "London Overground", type: "overground" },
    ],
    primary_stations: [
      { name: "West Hampstead (Jubilee)", lines: ["Jubilee"], walk_minutes_from_centre: 2 },
      { name: "West Hampstead (Thameslink)", lines: ["Thameslink"], walk_minutes_from_centre: 3 },
      { name: "West Hampstead (Overground)", lines: ["London Overground"], walk_minutes_from_centre: 3 },
    ],
    times_to_anchors: { city_of_london: 22, canary_wharf: 25, soho_fitzrovia: 15, kings_cross_shoreditch: 25 },
    multi_cluster_score: 3,
    redundancy_score: 5,
    notes: "Jubilee + Thameslink + Overground = three independent corridors at three stations. Redundancy 5/5. 3/4 anchors ≤25. Average 21.75 min. This is the most under-appreciated redundancy hub outside Stratford/King's Cross. Overground Mildmay was rebranded 2024 from 'North London Line'.",
    sources: [
      { url: "https://tfl.gov.uk/tube/stop/940GZZLUWHP/west-hampstead-underground-station", label: "TfL — West Hampstead underground station", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://www.nationalrail.co.uk/stations/west-hampstead-thameslink", label: "National Rail — West Hampstead Thameslink", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 20 },
      { cohort: "30-39", pct: 26 },
      { cohort: "40-49", pct: 18 },
      { cohort: "50+", pct: 36 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 48 },
      { group: "White — other", pct: 25 },
      { group: "Asian or Asian British", pct: 9 },
      { group: "Black or Black British", pct: 6 },
      { group: "Mixed", pct: 7 },
      { group: "Other ethnic group", pct: 5 },
    ],
    household_mix: [
      { type: "Single person", pct: 34 },
      { type: "Couple no children", pct: 26 },
      { type: "Couple with children", pct: 20 },
      { type: "Lone parent", pct: 9 },
      { type: "Shared household", pct: 7 },
      { type: "Other", pct: 4 },
    ],
    student_pct: 5,
    professional_renter_pct: 40,
    notes: "West Hampstead + Fortune Green wards, Census 2021. 30-39 cohort leads at 26%, edging 50+ — established-professional neighbourhood. Significant Jewish community (~12% of ward residents). Notably less student-heavy and less tech-cluster than the Zone 1 options.",
    sources: [
      { url: "https://www.ons.gov.uk/census/maps", label: "ONS Census 2021 — West Hampstead E05013694", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "safe",
    crime_vs_borough: "below",
    crime_vs_croydon: "much-safer",
    after_dark_assessment: "West End Lane is well-populated until 22:30 from the restaurant scene and the station foot traffic. Residential streets (Fawley Road, Achilles Road, Canfield Gardens, Compayne Gardens) are quiet Edwardian/Victorian terraces with low foot traffic but excellent lighting and low crime. The three-station area is continuously active with commuter flow. Women walking alone: genuinely safe across the area including residential side streets at 23:00+. The absence of a nightlife belt is a positive here — no weekend throwing-out ASB.",
    concerns: [],
    sources: [
      { url: "https://www.met.police.uk/sd/stats-and-data/", label: "Met Police crime data — NW6", type: "met-police", accessed_date: "2026-04-17" },
      { url: "https://www.camden.gov.uk/crime-and-safety", label: "Camden Council — crime and safety", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: false,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Fortune Green", size_acres: 3, walk_minutes: 5, notes: "Local green with playground" },
      { name: "West End Green", walk_minutes: 3, notes: "Small triangular green with market space" },
      { name: "Kilburn Grange Park", size_acres: 7, walk_minutes: 10, notes: "Sports pitches" },
      { name: "Hampstead Cemetery", size_acres: 27, walk_minutes: 7, notes: "Functional cemetery-park" },
      { name: "Hampstead Heath", size_acres: 790, walk_minutes: 20, notes: "At edge of walking range — genuine destination green" },
    ],
    overall_assessment: "Moderate. Local greens are small but useful for day-to-day outdoor break. Hampstead Cemetery at 7 minutes is a working Victorian cemetery that functions as a de facto park. Hampstead Heath at 20 minutes is the serious green destination — not in-neighbourhood but absolutely walkable.",
    sources: [
      { url: "https://www.camden.gov.uk/parks-and-open-spaces", label: "Camden Council — parks and open spaces", type: "council", accessed_date: "2026-04-17" },
      { url: "https://www.cityoflondon.gov.uk/things-to-do/hampstead-heath", label: "City of London — Hampstead Heath", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Waitrose West Hampstead", type: "supermarket", walk_minutes: 4, notes: "Premium supermarket" },
      { name: "M&S Food West End Lane", type: "supermarket", walk_minutes: 3, notes: "Core supermarket" },
      { name: "Sainsbury's West End Lane", type: "supermarket", walk_minutes: 5, notes: "Third major supermarket" },
      { name: "Tesco Express West End Lane", type: "convenience", walk_minutes: 2, notes: "Top-up convenience" },
      { name: "West Hampstead Farmers' Market", type: "market", walk_minutes: 3, notes: "Saturday only, on West End Green" },
    ],
    gyms: [
      { name: "PureGym West Hampstead", type: "budget", walk_minutes: 4, notes: "24h budget" },
      { name: "Gravity Co West Hampstead in-building gym", type: "resident-included", walk_minutes: 0, notes: "Included if resident" },
      { name: "Virgin Active Hampstead", type: "premium", walk_minutes: 15, notes: "Premium full-service via Jubilee" },
      { name: "Nuffield Health Willesden Green", type: "premium mid-tier", walk_minutes: 10, notes: "Via Jubilee" },
      { name: "F45 Kilburn", type: "boutique", walk_minutes: 10, notes: "HIIT boutique" },
      { name: "Third Space St John's Wood", type: "premium", walk_minutes: 10, notes: "Via Jubilee" },
    ],
    food_and_drink: [
      { name: "Gail's Bakery West End Lane", type: "cafe", walk_minutes: 3, notes: "Work-capable bakery/cafe" },
      { name: "Hampstead Creperie", type: "cafe", walk_minutes: 5, notes: "French creperie" },
      { name: "Mamame (West End Lane)", type: "restaurant", walk_minutes: 4, notes: "Neighbourhood restaurant" },
      { name: "The Alliance (West End Lane)", type: "pub", walk_minutes: 4, notes: "Gastropub" },
      { name: "The Black Lion (West End Lane)", type: "pub", walk_minutes: 5, notes: "Neighbourhood pub" },
      { name: "Ceru (Lebanese, West End Lane)", type: "restaurant", walk_minutes: 4, notes: "Lebanese restaurant" },
    ],
    health: [
      { name: "Royal Free Hospital Hampstead", type: "hospital", walk_minutes: 15, notes: "Major A&E via Jubilee" },
      { name: "West Hampstead Medical Centre (GP)", type: "GP", walk_minutes: 5, notes: "NHS GP" },
      { name: "Dr Drood & Partners (GP)", type: "GP", walk_minutes: 6, notes: "Alternative GP" },
      { name: "Boots West End Lane", type: "pharmacy", walk_minutes: 3, notes: "Core pharmacy" },
    ],
    cultural: [
      { name: "Everyman Cinema West Hampstead", type: "cinema", walk_minutes: 4, notes: "Boutique cinema on the high street" },
      { name: "Tricycle Theatre Kilburn", type: "theatre", walk_minutes: 10, notes: "Theatre + cinema" },
      { name: "Hampstead Theatre", type: "theatre", walk_minutes: 20, notes: "Leading new-writing theatre, 20 min east" },
      { name: "JW3 (Jewish cultural centre)", type: "cultural centre", walk_minutes: 10, notes: "Library, cinema, cafe" },
    ],
    notes: "Amenity density is genuinely good for a Zone 2 residential neighbourhood — Waitrose + M&S + Sainsbury's + Everyman Cinema + Jubilee-line premium gym reach. The one weakness is the absence of an in-neighbourhood premium gym — residents go to St John's Wood or Hampstead for that tier. Gravity Co residents get in-building gym included.",
    sources: [
      { url: "https://www.everymancinema.com/cinemas/west-hampstead", label: "Everyman Cinema West Hampstead", type: "operator", accessed_date: "2026-04-17" },
      { url: "https://www.jw3.org.uk/", label: "JW3", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: {
    status: "phased",
    investment_pipeline: "Ballymore West Hampstead Square final phases. West Hampstead Central (Astir/Gamuda, 180 units) completed 2025-2026. Minor infill on West End Lane. No new major masterplan active beyond the ongoing Square delivery.",
    recent_milestones: [
      "2024 — Overground rebranded to Mildmay line on West Hampstead branch",
      "2025-2026 — West Hampstead Central (180 units) completion",
      "2025 — Ballymore West Hampstead Square further phases delivered",
    ],
    upcoming_milestones: [
      "2026-2027 — Ballymore West Hampstead Square final phases completion",
    ],
    trajectory_through_2027: "Peaking 2025-2026 and stabilising. West Hampstead Square's final phases complete within Caner's August 2027 window, after which the area is in steady-state. This is a relatively ascending trajectory for a mature Zone 2 area — the Square completion materially increases the modern managed-rental stock.",
    sources: [
      { url: "https://www.ballymoregroup.com/en/developments/west-hampstead-square", label: "Ballymore — West Hampstead Square", type: "developer", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Clean pass. Ward crime materially below Camden borough average. ASB and shoplifting, not violent crime.",
        "1.2": "Ballymore's West Hampstead Square provides modern stock.",
        "1.3": "Jubilee + Thameslink + Overground — three independent corridors. Zone 2. Standout strength.",
        "1.4": "Ballymore as BTR/BTS operator. Active professional rental market.",
        "1.5": "Public realm in good order.",
        "1.6": "Not in decline — West Hampstead Square completing.",
      },
      "good",
      "T1 clean pass on all six rows. T1.3 is a standout strength — one of the best multi-line redundancy profiles in the candidate list.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "unknown", "2.2": "unknown", "2.3": "unknown", "2.4": "partial", "2.5": "unknown", "2.7": "unknown" },
      {
        "2.4": "Nominal-to-moderate green. Local greens are small; Heath at edge of range.",
      },
      "moderate",
      "T2 largely unpopulated. Green access is partial; the area is transport-led.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "partial", "3.3": "pass", "3.4": "unknown", "3.5": "unknown", "3.6": "unknown" },
      {
        "3.1": "Ballymore final phases. Peaking not ascending.",
        "3.2": "West End Lane independent high street — cafes, restaurants, delis.",
        "3.3": "Distinct village-feel neighbourhood with a recognisable name.",
      },
      "moderate",
      "T3 moderate. Village character is real; regeneration is peaking.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "unknown", "5.4": "unknown" },
      {
        "5.1": "3/4 anchors ≤25 (CW at 25 borderline). Average 21.75 min.",
        "5.2": "Redundancy 5/5 — three independent corridors at three stations. Exceptional.",
      },
      "good",
      "T5 good. Exceptional redundancy is the standout feature.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — clean T1 pass, exceptional redundancy (5/5), and safe village character. Weaknesses are partial green access and peaking regeneration. A strong shortlist candidate on transport alone.",
  },

  projects: [
    westHampsteadSquare,
    westHampsteadCentral,
    theClayYard,
    gravityWestHampstead,
  ],

  external_links: [
    { url: "https://www.ballymoregroup.com/en/developments/west-hampstead-square", label: "West Hampstead Square (Ballymore)", type: "developer", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default westHampstead;
