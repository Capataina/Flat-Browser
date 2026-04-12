import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const earlsCourt: Area = {
  id: "earls-court",
  name: "Earl's Court",
  aliases: ["Earls Court"],
  borough: "Kensington and Chelsea",
  postcodes: ["SW5", "SW10"],

  headline:
    "£10bn masterplan transitioning from plan to delivery — Piccadilly + District at Zone 1/2. A strong ascending trajectory through 2027 and beyond, but almost no BTR inventory to rent today.",
  preview:
    "Earl's Court is the site of one of London's largest regeneration masterplans (~4,000 homes), with outline consent targeted for the 2025-2026 window and first phases on site for 2027-2028. The area benefits from Piccadilly + District lines at Zone 1/2 and strong green access (Brompton Cemetery, Holland Park). It is a 2028+ area at the operator level — there is almost no BTR inventory to apply to today.",

  long_form: {
    full: "Earl's Court sits on a £10bn masterplan run by the Earl's Court Development Company (Delancey + APG). The masterplan is very early — outline consent is targeted for 2025-2026, with first phases on site in 2027-2028. The architect roster is serious: Hawkins Brown and Studio Egret West as masterplanners, with Sheppard Robson, Serie, Maccreanor Lavington, dRMM, EPR, ACME, and Haworth Tompkins designing buildings. Rogers Stirk Harbour + Partners has a separate TfL scheme. The area is Zone 1/2 with Piccadilly and District lines, plus Overground at West Brompton. K&C borough has one of the lowest crime rates in London. The masterplan includes a planned 4.5-acre park.",
    history: "Former Earl's Court Exhibition Centre site. Capco divested in 2019; land now ECDC-controlled. The exhibition centre was demolished in the mid-2010s.",
    vibe: "Currently a gap site surrounded by established west London residential streets. The existing Earl's Court village (Earls Court Road) has independent shops and restaurants.",
    weekday: "",
    weekend: "",
    notable: "Brompton Cemetery (39-acre cemetery-nature reserve). Planned 4.5-acre park in the masterplan. Serious architect roster.",
    croydon_comparison: "Earl's Court is Zone 1/2 with two tube lines in one of London's safest boroughs. The price point will be materially higher than Croydon. The trade-off is that there is almost nothing to rent today — this is a 2028+ story.",
  },

  zones: ["Zone 1", "Zone 2"],
  connectivity: {
    lines: [
      { name: "Piccadilly", type: "tube" },
      { name: "District", type: "tube" },
      { name: "London Overground", type: "overground" },
    ],
    primary_stations: [
      { name: "Earl's Court", lines: ["Piccadilly", "District"], walk_minutes_from_centre: 3 },
      { name: "West Brompton", lines: ["District", "London Overground"], walk_minutes_from_centre: 8 },
    ],
    times_to_anchors: { city_of_london: 22, canary_wharf: 32, soho_fitzrovia: 14, kings_cross_shoreditch: 19 },
    multi_cluster_score: 2,
    redundancy_score: 4,
    notes: "Piccadilly + District + Overground. 2/4 anchors ≤25 min. Average 21.75 min. Redundancy 4/5.",
    sources: [],
  },
  demographics: { primary_age_cohort: "30-39", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Not yet populated.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "average", crime_vs_croydon: "much-safer", after_dark_assessment: "K&C has one of the lowest crime rates in London. Safe with positive trajectory as regeneration activates.", concerns: [], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Brompton Cemetery", size_acres: 39, walk_minutes: 5, notes: "Cemetery-nature reserve, underrated green space" }, { name: "Holland Park", size_acres: 54, walk_minutes: 10, notes: "Premium park to the north" }], overall_assessment: "Strong green + absent water. Brompton Cemetery is an underrated green space. Planned 4.5-acre park in the masterplan. T2.4: Pass — strong (rising post-regeneration)." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "early", investment_pipeline: "£10bn masterplan (~4,000 homes). ECDC (Delancey + APG). Serious architect roster.", recent_milestones: ["K&C crime-clampdown around the site", "ECDC masterplan progression"], upcoming_milestones: ["Outline consent targeted 2025-2026", "First phases on site 2027-2028", "4.5-acre park delivery"], trajectory_through_2027: "Ascending through 2027 and beyond. The masterplan transitions from plan to delivery across the window, extending well beyond 2027. Early stage.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "K&C borough — one of the lowest crime rates in London. Safe with positive trajectory.",
        "1.2": "Existing BTS stock around Earl's Court Road. Masterplan stock is 2028+.",
        "1.3": "Piccadilly + District at Earl's Court, Overground at West Brompton. Zone 1/2.",
        "1.4": "ECDC masterplan operator assignment pending. Existing stock via letting agents.",
        "1.5": "Public realm in good order in the established streets; masterplan site is a construction zone.",
        "1.6": "Not in decline — ascending. Regeneration is a clear direction signal for 2027.",
      },
      "good",
      "T1 clean pass with improving trajectory.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "unknown", "2.2": "unknown", "2.3": "unknown", "2.4": "pass", "2.5": "unknown", "2.7": "unknown" },
      {
        "2.4": "Strong green — Brompton Cemetery (39 acres, 5 min), Holland Park (54 acres, 10 min). Rising with masterplan park.",
      },
      "moderate",
      "T2 largely unpopulated. Strong green confirmed.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "partial", "3.3": "pass", "3.4": "unknown", "3.5": "pass", "3.6": "unknown" },
      {
        "3.1": "£10bn masterplan with enabling works / early phases active.",
        "3.2": "Earl's Court village has independent character but no strong anchor yet; masterplan will change this.",
        "3.3": "Earl's Court is a well-known London location with strong name recognition.",
        "3.5": "Serious architect roster — Hawkins Brown, Studio Egret West, dRMM, Haworth Tompkins, etc.",
      },
      "moderate",
      "T3 moderate. Strong architectural ambition and name recognition; cultural anchor is thin pre-masterplan.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "pass", "5.4": "unknown" },
      {
        "5.1": "2/4 anchors ≤25. Average 21.75 min.",
        "5.2": "Redundancy 4/5 — Piccadilly + District + Overground.",
        "5.3": "Strong ascending trajectory — masterplan transitions from plan to delivery across the window.",
      },
      "good",
      "T5 good. Strong ascending trajectory and solid transport.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — safe Zone 1/2 location with strong architectural ambition and ascending trajectory. The constraint is that almost nothing is rentable today — this is a watchlist area for 2028+.",
  },

  projects: [
    // RESEARCH: ECDC masterplan — c.4,000 homes, Phase 1 first residents 2030. Not lettable in 2026-2027 window.
    // REALISM: blocked (pipeline only — not actionable for relocation)
    // COST_TIER: N/A — not yet built
    // QUALIFICATION: N/A — future scheme
    buildProject({
      id: "ecdc-masterplan", area_id: "earls-court", name: "Earl's Court Masterplan", developer: "ECDC (Delancey / APG)", operator: "unknown", building_type: "Mixed", build_phase: "future", tenure: ["rent", "buy"], realism: "blocked",
      preview: "44-acre masterplan for c. 4,000 homes. Planning granted late 2025. Phase 1 first residents expected 2030; full build-out by 2041. Not actionable for 2026-2027 relocation — pipeline only.",
      long_form_full: "ECDC masterplan is a joint venture between Delancey and Dutch pension fund APG. c. 4,000 homes across multiple phases including BTR, private sale, student, later living, and affordable. 4.5-acre urban park, 20 acres of public realm, 2.5m sq ft clean-tech workspace hub. Phase 1 (c. 1,500 homes) targets first residents in 2030. Construction start target 2026. LBHF resolved to grant permission Nov 2025, RBKC Dec 2025.",
      amenity_tier: "premium", is_signature: true, architects: ["Hawkins\\Brown"], overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Unbuilt — cannot yet verify. Serious architect roster suggests high specification.",
        t4_1_amenity_package: "Masterplan includes 4.5-acre park, 20 acres of public realm, community gardens, workspace hub — premium at masterplan level.",
        t4_4_signature_arch: "Hawkins\\Brown among the design team. Serious roster (Sheppard Robson, dRMM, Haworth Tompkins, etc.).",
      },
    }),
  ],

  external_links: [
    { url: "https://earlscourt.com/", label: "Earl's Court Development Company", type: "developer", accessed_date: "2026-04-12" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

// ── Project external links & price transparency ──────────────────────────
const ecdcMasterplan = earlsCourt.projects.find(p => p.id === "ecdc-masterplan")!;
ecdcMasterplan.external_links = [
  { url: "https://earlscourt.com/the-masterplan/", label: "ECDC — The Masterplan", type: "developer", accessed_date: "2026-04-12" },
];
ecdcMasterplan.rental.price_transparency = "unknown";

export default earlsCourt;
