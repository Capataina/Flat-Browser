import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const woodberryDown = buildProject({
  id: "woodberry-down", area_id: "stoke-newington", name: "Woodberry Down", developer: "Berkeley Group", operator: "Individual landlords", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unknown",
  preview: "Massive Berkeley masterplan — 5,500 homes at full build-out (~2,500+ delivered). Adjacent to Woodberry Wetlands nature reserve. Pool, gym, concierge in newer phases. 1-bed from ~£1,950 pcm. Technically N4/Manor House border but western edge is 10-min walk from Stoke Newington.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley Group phased delivery from 2009 onwards — newer phases to modern specification, older phases showing age. Quality depends on which sub-building.",
    t4_1_amenity_package: "Strong in newer phases — swimming pool, gym, social spaces, concierge, extensive landscaping around the reservoirs.",
    t4_4_signature_arch: "Not signature-authored but the reservoir setting gives a distinctive landscape character. Multiple sub-buildings: Darter House, Hartingtons Court, Emperor Point, Skylark Point, Gadwall Quarter.",
  },
});
woodberryDown.external_links = [
  { url: "https://www.berkeleygroup.co.uk/developments/london/finsbury-park/woodberry-down", label: "Berkeley — Woodberry Down", type: "developer", accessed_date: "2026-04-12" },
];

const stokeNewington: Area = {
  id: "stoke-newington",
  name: "Stoke Newington",
  aliases: ["Stokey"],
  borough: "Hackney",
  postcodes: ["N16"],

  headline:
    "The calmest residential corner of Hackney — Clissold Park, Church Street independents, family-leaning but young-professional-adjacent. Overground only, Zone 3.",
  preview:
    "Stoke Newington is Hackney's quietest residential ward, structurally separated from the Dalston/Shoreditch nightlife cluster. Clissold Park and Abney Park Cemetery give it a genuinely strong green identity. Church Street has a complete independent high street. The limitation is connectivity — Overground (Weaver) only, Zone 3, with no tube station. Average 26 min to anchors.",

  long_form: {
    full: "Stoke Newington sits in north Hackney with a distinct village-like character anchored by Clissold Park, Abney Park Cemetery, and Church Street's independent retail. It is the calmest residential ward in Hackney by a clear margin — Church Street, Clissold Park, the Rectory Road/Overground grain is family-leaning, daytime-oriented, and structurally separated from Dalston/Shoreditch nightlife. The trade-off is connectivity: Overground Weaver line only, Zone 3, no tube. Journey times to the four anchor stations average 26 minutes, failing T5.1.",
    history: "Victorian residential suburb that retained its village character. Church Street has been a complete local high street for decades. Abney Park Cemetery is a significant Victorian non-conformist burial ground.",
    vibe: "Village-in-the-city. Independent cafes, bookshops, delis on Church Street. Clissold Park anchors weekend life. Family-leaning but with a strong young professional presence.",
    weekday: "A Tuesday at 7pm: Church Street cafes and restaurants busy. Clissold Park joggers. Quiet residential streets.",
    weekend: "A Saturday: Clissold Park is full — families, runners, dog walkers. Church Street brunch queues. Farmers' market.",
    notable: "Clissold Park (55 acres); Abney Park Cemetery; Church Street independent high street; Woodberry Wetlands (10 min walk).",
    croydon_comparison: "Stoke Newington trades Croydon's train speed for a genuinely calm, green, village-like inner London experience. Connectivity is weaker but the daily-life quality is significantly higher.",
  },

  zones: ["Zone 3"],
  connectivity: {
    lines: [
      { name: "Weaver line", type: "overground" },
    ],
    primary_stations: [
      { name: "Stoke Newington", lines: ["Weaver line"], walk_minutes_from_centre: 5 },
      { name: "Rectory Road", lines: ["Weaver line"], walk_minutes_from_centre: 8 },
      { name: "Manor House (nearest tube, edge)", lines: ["Piccadilly"], walk_minutes_from_centre: 15 },
    ],
    times_to_anchors: { city_of_london: 24, canary_wharf: 32, soho_fitzrovia: 28, kings_cross_shoreditch: 22 },
    multi_cluster_score: 1,
    redundancy_score: 2,
    notes: "Single direct rail corridor (Weaver to Liverpool St). Manor House Piccadilly is a 15-min walk from Church Street — useful backup but not a commuter's primary option. Bus network into Finsbury Park/Angel is dense. Weekend engineering closures on Weaver are a recurring pattern.",
    sources: [
      { url: "https://tfl.gov.uk/tube-dlr-overground/status/", label: "TfL line status", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 19 },
      { cohort: "30-39", pct: 26 },
      { cohort: "40-49", pct: 17 },
      { cohort: "50+", pct: 22 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 46 },
      { group: "White — other", pct: 18 },
      { group: "Asian or Asian British", pct: 6 },
      { group: "Black or Black British", pct: 14 },
      { group: "Mixed", pct: 10 },
      { group: "Other ethnic group", pct: 6 },
    ],
    household_mix: [
      { type: "Single person", pct: 28 },
      { type: "Couple no children", pct: 22 },
      { type: "Couple with children", pct: 22 },
      { type: "Lone parent", pct: 10 },
      { type: "Shared household", pct: 12 },
      { type: "Other", pct: 6 },
    ],
    student_pct: 7,
    professional_renter_pct: 38,
    notes: "Settled family corner of Hackney — the family-with-children household share (22%) is higher than any other ward in this batch, and the 30-39 cohort leads. Still has a strong 18-39 combined band (45%) but less monocultural than Dalston. Charedi Jewish community extends in from Stamford Hill edge.",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "safe",
    crime_vs_borough: "below",
    crime_vs_croydon: "much-safer",
    after_dark_assessment: "The calmest ward in Hackney by a clear margin. Church Street is lit, residentially active, and carries continuous pub-and-restaurant footfall until ~23:00. Side streets are residential, quiet, and non-threatening. Clissold Park closes at dusk (seasonal) and the south-edge cut-throughs to Green Lanes are the one specific avoid-after-dark geometry. Met Police SNT priorities focus on ASB and residential burglary rather than violent crime — this is the distinctive crime pattern here.",
    concerns: [
      "Clissold Park south-edge cut-throughs to Green Lanes after dark",
      "Ground-floor residential burglary (Hackney borough pattern)",
    ],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police/stoke-newington/", label: "Met Police — Stoke Newington ward", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: false,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Clissold Park", size_acres: 55, walk_minutes: 5, notes: "Victorian park with deer enclosure, tennis, playground, cafe, paddling pool. Hackney's best-loved family park." },
      { name: "Abney Park Cemetery", size_acres: 32, walk_minutes: 3, notes: "Victorian non-conformist cemetery and Grade II-listed woodland nature reserve." },
      { name: "Woodberry Wetlands", size_acres: 11, walk_minutes: 15, notes: "London Wildlife Trust nature reserve on East and West Reservoirs." },
      { name: "Finsbury Park (west edge)", size_acres: 115, walk_minutes: 20, notes: "Major park, accessible via Manor House." },
    ],
    overall_assessment: "One of the greenest inner London areas. Clissold Park on the doorstep; Abney Park Cemetery (woodland reserve, not conventional cemetery) within 3 minutes; Woodberry Wetlands a 15-min walk. The green identity is genuinely definitional of the area — this is the ward's single strongest feature and differentiates it meaningfully from Dalston or Hackney Central.",
    sources: [
      { url: "https://www.hackney.gov.uk/clissold-park", label: "Hackney Council — Clissold Park", type: "council", accessed_date: "2026-04-17" },
      { url: "https://www.londonwildlifetrust.org.uk/reserves/woodberry-wetlands", label: "Woodberry Wetlands", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Sainsbury's (Stoke Newington High Street)", type: "supermarket", walk_minutes: 5, notes: "Full-range Sainsbury's." },
      { name: "Whole Foods Stoke Newington (Church Street)", type: "premium supermarket", walk_minutes: 3, notes: "Premium grocer — one of the few Whole Foods locations in the dataset." },
      { name: "Church Street independents (Belle Epoque bakery, Cooke & Butler)", type: "independent", walk_minutes: 3, notes: "Destination-tier independent food retail." },
      { name: "Stoke Newington Farmers' Market", type: "farmers market", walk_minutes: 3, notes: "Saturday morning market at William Patten School." },
    ],
    gyms: [
      { name: "Clissold Leisure Centre", type: "public leisure", walk_minutes: 5, notes: "Council-run leisure centre with pool, gym, classes." },
      { name: "PureGym Stoke Newington", type: "budget chain", walk_minutes: 7, notes: "Budget tier." },
      { name: "Topnotch Gyms", type: "independent", walk_minutes: 5, notes: "Long-established local gym." },
      { name: "Yogarise / Frame / local yoga studios", type: "boutique", walk_minutes: 5, notes: "Active yoga-studio cluster on Church Street." },
    ],
    food_and_drink: [
      { name: "Church Street (whole high street)", type: "high street", walk_minutes: 0, notes: "Complete independent high street — pubs, cafes, delis, restaurants." },
      { name: "Rochelle Canteen at ICA (former Rochelle)", type: "restaurant", walk_minutes: 3, notes: "Spiritual descendants of the Rochelle School originators." },
      { name: "The Auld Shillelagh", type: "pub", walk_minutes: 5, notes: "Iconic Irish pub on the high street." },
      { name: "Jolene Bakery", type: "bakery", walk_minutes: 3, notes: "Destination sourdough and natural wine." },
      { name: "Yard Sale Pizza", type: "pizza", walk_minutes: 3, notes: "Local chain flagship." },
    ],
    health: [
      { name: "Cedar Practice", type: "GP", walk_minutes: 5, notes: "NHS GP." },
      { name: "Somerford Grove Practice", type: "GP", walk_minutes: 7, notes: "Alternative NHS GP." },
      { name: "Boots Pharmacy (Church Street)", type: "pharmacy", walk_minutes: 3, notes: "Full-service." },
    ],
    cultural: [
      { name: "Stoke Newington Library (Church Street)", type: "library", walk_minutes: 3, notes: "Historic library building." },
      { name: "Stoke Newington Literary Festival (annual)", type: "literary festival", walk_minutes: 0, notes: "Weekend-long June festival across the high street." },
      { name: "Abney Park Chapel", type: "heritage/event space", walk_minutes: 3, notes: "Grade II-listed Gothic chapel in Abney Park Cemetery; events programme." },
      { name: "Castle Climbing Centre", type: "climbing gym", walk_minutes: 10, notes: "One of London's largest climbing centres, in a Victorian water-pumping station." },
    ],
    notes: "Amenity layer is boutique-independent rather than chain-dense — the Whole Foods on Church Street is the dataset's clearest signal of the ward's income profile. Cultural amenities are strong for a Zone 3 residential ward (Lit Festival, Castle Climbing) but limited in formal cinema/theatre infrastructure. Premium gym tier is the main gap.",
  },
  regeneration: {
    status: "complete",
    investment_pipeline: "No major pipeline. Mature gentrified area. Woodberry Down (Berkeley masterplan, 5,500 homes at full build-out) is the only major adjacent scheme — technically Manor House / N4 but the western edge is a 10-min walk from Stoke Newington Church Street. Infill BTS development continues at low intensity.",
    recent_milestones: [
      "2024 — Sunday Times Best Places to Live London 2025 shortlist entry",
      "2024 — Overground renamed (Weaver line)",
      "2025 — Woodberry Down Phase 6 completions (adjacent)",
    ],
    upcoming_milestones: [
      "2026-2027 — continued Woodberry Down phased delivery",
      "2027 — Stoke Newington Church Street conservation area review",
    ],
    trajectory_through_2027: "Plateaued. The area is a mature gentrified village quarter with no active regeneration inside its footprint. By August 2027 the character will be substantively unchanged — incremental infill but no transformational shifts. For Caner's visa transition window this is a steady-state area rather than an improving-on-arrival one.",
    sources: [
      { url: "https://www.berkeleygroup.co.uk/developments/london/finsbury-park/woodberry-down", label: "Berkeley — Woodberry Down", type: "developer", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "partial", "1.3": "fail", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Pass with high confidence. Calmest ward in Hackney.",
        "1.2": "Modern infill stock exists but thinner than Dalston. Limited BTR.",
        "1.3": "FAIL. Overground only, Zone 3. No tube. Average 26 min to anchors.",
        "1.4": "Professional rental market exists via individual landlords.",
        "1.5": "Church Street and Clissold Park are well-maintained.",
        "1.6": "Not in decline — stable, desirable residential area.",
      },
      "moderate",
      "T1 fails on T1.3 connectivity. Strong on safety and public realm but structurally weak on transport.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "partial", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Church Street delivers complete walkable essentials — grocery, dining, independent retail.",
        "2.2": "Quality grocery on Church Street and Stoke Newington High Street.",
        "2.3": "Some gym options but not as dense as more central areas.",
        "2.4": "Strong green. Clissold Park, Abney Park, Woodberry Wetlands. One of the greenest inner London areas.",
        "2.5": "Quiet at night. Family-leaning residential grain, separated from nightlife clusters.",
        "2.7": "Ward 20-39 at 38.8%. Moderate young skew — the settled family corner of Hackney.",
      },
      "good",
      "T2 strong on daily life and green space. The area delivers a complete village experience.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "No active regeneration. Mature area.",
        "3.2": "Clissold Park, Abney Park Cemetery, Church Street independent scene — strong cultural identity.",
        "3.3": "Strong village sense of place. 'Stokey' is immediately recognisable. Sunday Times Best Places to Live 2025.",
        "3.4": "Genuinely complete 15-minute neighbourhood.",
        "3.5": "No 2024/25 jury wins. Victorian fabric, not architecturally distinguished.",
        "3.6": "Daytime-oriented. Quiet at night — limited evening economy compared to Dalston.",
      },
      "good",
      "T3 strong on identity and completeness. Sunday Times 2025 recognition. No architectural distinction.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "fail", "5.2": "fail", "5.3": "partial", "5.4": "pass" },
      {
        "5.1": "FAIL. Only 1/4 anchors ≤25 min. Average 26 min.",
        "5.2": "FAIL. Single Overground line. No tube.",
        "5.3": "Plateaued. No ascending trajectory.",
        "5.4": "Excellent third-space culture — Church Street cafes, bookshops, Clissold Park.",
      },
      "weak",
      "T5 fails on connectivity and redundancy. Strong third-space culture is the only positive.",
    ),
    overall_grade: "C",
    grade_reasoning: "C+ — excellent daily-life quality and identity but structurally fails T1.3 connectivity. The Overground-only access is a genuine limitation for a graduate-visa renter who cannot predict their work cluster.",
  },

  projects: [
    woodberryDown,
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default stokeNewington;
