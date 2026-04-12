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
      { name: "Overground", type: "overground" },
    ],
    primary_stations: [
      { name: "Stoke Newington", lines: ["Overground"], walk_minutes_from_centre: 5 },
      { name: "Rectory Road", lines: ["Overground"], walk_minutes_from_centre: 8 },
    ],
    times_to_anchors: { city_of_london: 25, canary_wharf: 30, soho_fitzrovia: 30, kings_cross_shoreditch: 20 },
    multi_cluster_score: 1,
    redundancy_score: 1,
    notes: "Single Overground line (Weaver). Manor House tube (Piccadilly) is a 15-minute walk for some addresses. T1.3 FAIL, T5.1 FAIL, T5.2 FAIL. Average 26 min.",
    sources: [],
  },
  demographics: { primary_age_cohort: "30-39", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Stoke Newington ward 20-39 at 38.8%. Young-leaning but the settled family corner of Hackney. PASS (moderate).", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "below", crime_vs_croydon: "safer", after_dark_assessment: "Safe. The calmest residential ward in Hackney. Met Police SNT priorities focus on ASB and residential burglary rather than violent crime.", concerns: [], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Clissold Park", walk_minutes: 5, notes: "55 acres, deer enclosure, cafe, playground" }, { name: "Abney Park Cemetery", walk_minutes: 5, notes: "Woodland cemetery, nature reserve" }, { name: "Woodberry Wetlands", walk_minutes: 10, notes: "London Wildlife Trust nature reserve" }], overall_assessment: "Strong green identity. Clissold Park, Abney Park Cemetery, and Woodberry Wetlands make this one of the greenest inner London areas. Sunday Times Best Places to Live 2025 entry." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "complete", investment_pipeline: "No major pipeline. Mature area.", recent_milestones: [], upcoming_milestones: [], trajectory_through_2027: "Plateaued. Core gentrified area.", sources: [] },

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
