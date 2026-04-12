import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const dalston: Area = {
  id: "dalston",
  name: "Dalston",
  aliases: ["Dalston Junction", "Dalston Kingsland", "Kingsland High Street"],
  borough: "Hackney",
  postcodes: ["E8"],

  headline:
    "Hackney's nightlife and cultural hub with two Overground stations and top-skew young demographics (54% aged 20-39) — but named mugging/drug-crime concentration is a real T1.1 concern.",
  preview:
    "Two Overground lines at two stations (Dalston Junction on Mildmay + Windrush, Dalston Kingsland on Mildmay) give 3/5 redundancy. 19-minute average to anchors. Demographics are top-skew at 54% aged 20-39 — close to a young-professional monoculture. Safety is the weakest point: explicitly named in press as a mugging, drug-crime and vehicle-theft concentration.",

  long_form: {
    full: "Dalston is Hackney's nightlife and cultural centre — Kingsland High Street, the clubbing cluster, Turkish and Vietnamese restaurant scenes, and Ridley Road Market give it one of the strongest identity profiles in East London. Two Overground stations two minutes apart provide three-line redundancy (Mildmay + Windrush at Junction, Mildmay at Kingsland). Demographics are top-skew at 54% aged 20-39, matching the nightlife reputation. The serious concern is safety: Dalston is explicitly named in national press as a mugging, drug-crime, and vehicle-theft concentration in Hackney's nightlife belt. Kingsland High Street carries persistent late-night ASB. The side-street walk home post-2am is one of the longer-tail mugging-risk geometries in London. T2.5 (quiet at night) is a separate concern from T1.1 — the nightlife cluster generates real residential noise.",
    history: "Historic Hackney nightlife district. Ridley Road Market has operated since the 1880s. Turkish and Kurdish community established since the 1980s. Dalston Junction rebuilt and reopened 2010.",
    vibe: "Vibrant, nightlife-driven, multicultural. Kingsland High Street is dense with restaurants, bars, clubs. Ridley Road Market is the daytime anchor.",
    weekday: "A Tuesday at 7pm: restaurants filling up; Kingsland High Street busy; after 10pm the bar/club scene starts.",
    weekend: "A Saturday: Ridley Road Market busy daytime; Kingsland High Street peak nightlife after 10pm; late-night activity until 3-4am.",
    notable: "Ridley Road Market; Dalston Superstore; Rio Cinema; Turkish restaurant strip; nightlife cluster.",
    croydon_comparison: "Dalston offers a cultural and nightlife layer that Croydon cannot match, but the safety trade-off is real. Connectivity is comparable in absolute time (Overground vs Croydon mainline) but Dalston has no tube direct.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Overground (Mildmay)", type: "overground" },
      { name: "Overground (Windrush)", type: "overground" },
    ],
    primary_stations: [
      { name: "Dalston Junction", lines: ["Overground (Mildmay)", "Overground (Windrush)"], walk_minutes_from_centre: 3 },
      { name: "Dalston Kingsland", lines: ["Overground (Mildmay)"], walk_minutes_from_centre: 5 },
    ],
    times_to_anchors: { city_of_london: 20, canary_wharf: 22, soho_fitzrovia: 22, kings_cross_shoreditch: 13 },
    multi_cluster_score: 3,
    redundancy_score: 3,
    notes: "Two Overground lines at two stations. No tube direct (Victoria at Highbury is 10-min walk). Windrush to Whitechapel connects to Elizabeth Line. 19.25-min average. T5.1 partial (2/4 under 25).",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Census 2021: Dalston ward 20-39 at 54%. Under-20 only 15%. Close to a young-professional monoculture. Top-skew — matches nightlife reputation.", sources: [] },
  safety: { overall: "moderate", crime_vs_borough: "above", crime_vs_croydon: "similar", after_dark_assessment: "Explicitly named in national press as a mugging, drug-crime, and vehicle-theft concentration. Kingsland High Street carries persistent late-night ASB from the clubbing cluster. Side-street walk home post-2am is a real concern.", concerns: ["Named mugging/drug-crime concentration", "Late-night ASB from nightlife cluster", "Phone-theft concentration at Overground stations", "T1.1 marginal, leaning fail under conservative reading"], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [], overall_assessment: "Limited green space within immediate area." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "active", investment_pipeline: "", recent_milestones: ["Dalston Junction rebuilt and reopened 2010"], upcoming_milestones: [], trajectory_through_2027: "Stable. Established cultural quarter rather than active regeneration zone.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "fail", "1.6": "pass" },
      {
        "1.1": "Marginal, leaning fail. Named mugging/drug-crime concentration. Nightlife cluster plus side-street risk geometry.",
        "1.2": "Modern rental stock present.",
        "1.3": "Two Overground lines — multi-hub especially with Windrush to Whitechapel Elizabeth Line connection.",
        "1.4": "Active professional rental market — high young-professional demand.",
        "1.5": "T2.5 fail flagged separately — nightlife cluster generates real residential noise and late-night ASB.",
        "1.6": "Not in decline — sustained cultural demand.",
      },
      "weak",
      "T1 weak — T1.1 marginal leaning fail, T1.5 fails on night quiet. Safety and nightlife noise are real concerns.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "unknown", "2.4": "partial", "2.5": "fail", "2.7": "pass" },
      {
        "2.1": "Kingsland High Street and Ridley Road Market provide dense walkable essentials.",
        "2.2": "Ridley Road Market for fresh food; multiple grocery options along Kingsland High Street.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Limited green space within immediate walking distance.",
        "2.5": "FAIL — nightlife cluster generates real residential noise. Late-night ASB from the clubbing belt.",
        "2.7": "Census 2021: 54% aged 20-39. Top-skew — strongest in the Hackney group.",
      },
      "moderate",
      "T2 moderate — excellent walkable essentials and demographics but T2.5 fails on night quiet and green space is thin.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "pass" },
      {
        "3.1": "Established cultural quarter rather than active regeneration zone.",
        "3.2": "Ridley Road Market, Rio Cinema, restaurant scenes, nightlife cluster — very strong cultural anchors.",
        "3.3": "Highly distinctive sense of place — recognisable identity, multicultural character.",
        "3.4": "15-minute completeness strong — transport, grocery, market, culture, restaurants.",
        "3.5": "Not architecturally distinguished in the 2024/25 window. Narrative-driven identity rather than jury-backed.",
        "3.6": "Very strong day/night rhythm — market daytime, restaurant evening, nightlife late.",
      },
      "good",
      "T3 strong — one of the strongest identity profiles in East London. Cultural and narrative strength.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "partial", "5.4": "pass" },
      {
        "5.1": "19-min average. Only 2/4 anchors under 25 minutes. Adequate but not strong.",
        "5.2": "Two Overground lines at two stations — 3/5 redundancy. No tube direct.",
        "5.3": "Stable rather than ascending — already established.",
        "5.4": "Strong third-space culture — cafes, restaurants, Rio Cinema, bars.",
      },
      "moderate",
      "T5 moderate — good redundancy and third spaces but connectivity average and trajectory flat.",
    ),
    overall_grade: "C",
    grade_reasoning: "C grade — exceptional T3 identity and top-skew demographics, but T1 safety/noise concerns (marginal T1.1, T2.5 fail) and mid-tier connectivity hold it back. The cultural layer is best-in-class for East London but the safety trade-off is real.",
  },

  projects: [
    // RESEARCH: Dalston Works — 121-unit BTR (101 private rent + 15 affordable + 5 shared ownership).
    // Regal Homes developer/operator. World's largest CLT building. Waugh Thistleton Architects.
    // 2-bed ~£2,190/mo (2017 data — likely higher now). Conran-furnished. Free WiFi.
    // Referencing: UNVERIFIED — Regal Homes is a smaller developer, not institutional BTR.
    // AGREEMENT: ast
    // REFERENCING: unknown
    // INTERNATIONAL: unknown
    // REALISM: unknown — Regal Homes referencing not documented
    // COST_TIER: mid-range to premium (estimated £1,800-2,200 for 1-bed based on 2017 2-bed data)
    buildProject({
      id: "dalston-works",
      area_id: "dalston",
      name: "Dalston Works",
      developer: "Regal Homes",
      operator: "Dalston Works",
      building_type: "BTR",
      build_phase: "complete",
      tenure: ["rent"],
      realism: "unknown",
      preview: "121-unit purpose-built BTR. World's largest Cross Laminated Timber building (~50% less embodied carbon). 10 storeys, Conran-furnished interiors, rooftop terraces. Waugh Thistleton Architects.",
      amenity_tier: "strong",
      overall_grade: "B",
      architects: ["Waugh Thistleton Architects"],
      evaluation_reasoning: {
        t2_6_building_quality: "Cross Laminated Timber construction — world's largest CLT building. Architecturally significant and environmentally innovative. Dedicated BTR management.",
        t4_1_amenity_package: "Strong — Conran-furnished interiors, private balconies, resident-only roof terraces, free super-fast WiFi, 1,500 sqm retail/restaurant at ground level.",
        t4_4_signature_arch: "Waugh Thistleton Architects — globally recognised for CLT innovation. ArchDaily featured. Genuine architectural significance.",
      },
    }),
    // RESEARCH: Dalston Square — Barratt London BTS 2010-2014. Individual landlord rental.
    // REALISM: unknown — individual landlord, standard AST
    // COST_TIER: mid-range (estimated for Dalston 1-beds)
    buildProject({
      id: "dalston-square",
      area_id: "dalston",
      name: "Dalston Square",
      developer: "Barratt London",
      operator: "Various agents",
      building_type: "Mixed",
      build_phase: "complete",
      tenure: ["rent", "buy"],
      realism: "unknown",
      preview: "244+ homes (up to 17 storeys) with residents' gym, 24-hour concierge, public square, integrated library. Built alongside Dalston Junction Overground station. Rental through individual landlords.",
      amenity_tier: "decent",
      overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Barratt London delivery, completed 2010-2014. Established development — some resident reports of build quality ageing.",
        t4_1_amenity_package: "Decent — residents' gym, 24-hour concierge, public square, integrated Dalston CLR James Library.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    // RESEARCH: FiftySevenEast — Taylor Wimpey BTS 2018. Individual landlord rental.
    // REALISM: unknown — individual landlord
    // COST_TIER: mid-range (estimated)
    buildProject({
      id: "fiftyseveneast",
      area_id: "dalston",
      name: "FiftySevenEast",
      developer: "Taylor Wimpey",
      operator: "Various agents",
      building_type: "Build-to-Sell",
      build_phase: "complete",
      tenure: ["rent", "buy"],
      realism: "unknown",
      preview: "83-98 homes (15-storey tower + 5-storey building) at 51-57 Kingsland High Street, directly at Dalston Kingsland station. Concierge, landscaped courtyard. Rental through individual landlords.",
      amenity_tier: "decent",
      overall_grade: "C",
      architects: ["Jestico + Whiles"],
      evaluation_reasoning: {
        t2_6_building_quality: "Taylor Wimpey delivery, completed 2018. Functional mid-market build quality.",
        t4_1_amenity_package: "Decent — concierge, landscaped courtyard, secure bicycle storage, ground floor retail.",
        t4_4_signature_arch: "Jestico + Whiles — respected practice but not signature-tier.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

// ── Project external links & price transparency ──────────────────────────
const dalstonWorks = dalston.projects.find(p => p.id === "dalston-works")!;
dalstonWorks.external_links = [
  { url: "https://www.dalston-works.co.uk/", label: "Dalston Works — official site", type: "operator", accessed_date: "2026-04-12" },
  { url: "https://www.regal-london.co.uk/developments/dalston-works/", label: "Regal London — Dalston Works", type: "developer", accessed_date: "2026-04-12" },
];
dalstonWorks.rental.price_transparency = "enquire";

const dalstonSquare = dalston.projects.find(p => p.id === "dalston-square")!;
dalstonSquare.external_links = [];
dalstonSquare.rental.price_transparency = "enquire";

const fiftySevenEast = dalston.projects.find(p => p.id === "fiftyseveneast")!;
fiftySevenEast.external_links = [];
fiftySevenEast.rental.price_transparency = "enquire";

export default dalston;
