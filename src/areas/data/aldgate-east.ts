import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const aldgateEast: Area = {
  id: "aldgate-east",
  name: "Aldgate East",
  aliases: ["Aldgate", "Aldgate East / Aldgate"],
  borough: "Tower Hamlets",
  postcodes: ["E1"],

  headline:
    "Zone 1 edge with functionally indestructible transport — Circle, Met, District, H&C plus Liverpool Street (6 lines) walkable. Clean T1 pass. Peaking 2025-2026 as Goodman's Fields completes.",
  preview:
    "Aldgate East sits on the Zone 1 fringe with one of the highest redundancy scores in the entire dataset (5/5). Liverpool Street interchange alone gives 6 lines. Goodman's Fields (Berkeley) is the dominant residential scheme, substantially complete. The area straddles Tower Hamlets and City of London — safe, well-connected, but office-dominant at weekends which limits neighbourhood feel.",

  long_form: {
    full: "Aldgate has been in slow-drip regeneration for over a decade. Aldgate Square (completed 2018 by City of London Corporation) removed the old gyratory and created a pedestrianised square. Goodman's Fields (Berkeley) is the dominant residential scheme, substantially complete. The area straddles the Tower Hamlets/City boundary — the City side is exceptionally safe with continuous office footfall keeping the public realm populated into the evening. Residential blocks (Goodman's Fields, Aldgate Place, Dorsett Square) sit inside stewarded developments with concierge-led access. The area feels office-dominant at weekends, echoing the Canary Wharf pattern at smaller scale.",
    history: "Historic City fringe area. Aldgate Square gyratory removal (2018) was the major public realm improvement. Goodman's Fields is the dominant residential delivery of the 2010s-2020s.",
    vibe: "City fringe — buzzing on weekdays, quiet at weekends. Brick Lane and Spitalfields market are walkable. Strong food scene on the Tower Hamlets side.",
    weekday: "",
    weekend: "",
    notable: "Aldgate Square. Goodman's Fields. Proximity to Brick Lane and Spitalfields. Liverpool Street interchange.",
    croydon_comparison: "Aldgate East is Zone 1 with the highest transport redundancy in the dataset (5/5). Materially safer and better-connected than Croydon. The trade-off is that the area is office-dominant at weekends and lacks the residential neighbourhood feel of a town centre.",
  },

  zones: ["Zone 1"],
  connectivity: {
    lines: [
      { name: "District", type: "tube" },
      { name: "Hammersmith & City", type: "tube" },
      { name: "Circle", type: "tube" },
      { name: "Metropolitan", type: "tube" },
    ],
    primary_stations: [
      { name: "Aldgate", lines: ["Circle", "Metropolitan"], walk_minutes_from_centre: 3 },
      { name: "Aldgate East", lines: ["District", "Hammersmith & City"], walk_minutes_from_centre: 3 },
      { name: "Liverpool Street", lines: ["Central", "Circle", "Metropolitan", "Hammersmith & City", "Elizabeth"], walk_minutes_from_centre: 10 },
    ],
    times_to_anchors: { city_of_london: 5, canary_wharf: 12, soho_fitzrovia: 10, kings_cross_shoreditch: 8 },
    multi_cluster_score: 5,
    redundancy_score: 5,
    notes: "Liverpool Street interchange alone gives 6 lines. Aldgate and Aldgate East add Circle/Met/District/H&C as close primaries. Tower Hill adds further District/Circle. Fenchurch Street adds mainline c2c. Redundancy 5/5 — functionally indestructible. Average 9 min to anchors. T5.1 emphatic pass.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Portsoken ward 20-39 33% (City side, lower baseline). Spitalfields & Banglatown 20-39 53% (Tower Hamlets side). Residential weight on TH side.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "average", crime_vs_croydon: "much-safer", after_dark_assessment: "Very safe. Continuous office footfall keeps public realm populated into the evening. Residential blocks sit inside stewarded developments with concierge-led access.", concerns: [], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Aldgate Square", walk_minutes: 2, notes: "0.6 acres — a plaza, not a park" }, { name: "Altab Ali Park", walk_minutes: 5, notes: "Small local park" }], overall_assessment: "Absent water, absent-to-nominal green. Fundamentally office-and-flats-dense. Residents who want green walk 15+ min in any direction. T2.4: Partial-to-fail." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated. Brick Lane and Spitalfields Market are walkable." },
  regeneration: { status: "complete", investment_pipeline: "Goodman's Fields substantially complete. Aldgate Square done. Mid-scale residential permissions continue.", recent_milestones: ["Aldgate Square gyratory removal (2018)", "Goodman's Fields substantially complete"], upcoming_milestones: [], trajectory_through_2027: "Peaking 2025-2026. Goodman's Fields is done, Aldgate Square is done. Broadly stable in August 2027 with minor additions, not meaningfully ascending.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Clean pass. City side exceptionally safe. Tower Hamlets side safe in the stewarded residential blocks.",
        "1.2": "Goodman's Fields, Aldgate Place — modern 2016-2020 new-build stock.",
        "1.3": "Zone 1 with functionally indestructible transport. Average 9 min to anchors.",
        "1.4": "BTS stock via letting agents. No dominant BTR operator.",
        "1.5": "Aldgate Square is excellent public realm. Stewarded developments.",
        "1.6": "Not in decline — peaking and stable.",
      },
      "strong",
      "T1 clean pass on all six rows. Transport is the standout — highest redundancy in the dataset.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "unknown", "2.2": "unknown", "2.3": "unknown", "2.4": "fail", "2.5": "unknown", "2.7": "pass" },
      {
        "2.4": "Absent-to-nominal green. No meaningful park in range; Aldgate Square is a plaza. T2.4 partial-to-fail.",
        "2.7": "Spitalfields & Banglatown 20-39 53%. Young demographic pass on the Tower Hamlets side.",
      },
      "moderate",
      "T2 partially populated. Green is a clear weakness; demographic skew is strong.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "pass", "3.3": "partial", "3.4": "unknown", "3.5": "unknown", "3.6": "partial" },
      {
        "3.1": "Minor mid-scale ongoing, no masterplan. Peaking.",
        "3.2": "Brick Lane, Spitalfields Market, Whitechapel Gallery walkable. Strong cultural adjacency.",
        "3.3": "'Aldgate' has recognition but as a location, not a destination. Identity is City fringe, not standalone.",
        "3.6": "Office-dominant at weekends — echoes the Canary Wharf pattern at smaller scale.",
      },
      "moderate",
      "T3 moderate. Strong cultural adjacency (Brick Lane, Spitalfields) but the area itself is not a destination. Weekend emptiness is a real complaint.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "unknown", "5.4": "unknown" },
      {
        "5.1": "All 4 anchors ≤25 min. Average 9 min. Emphatic pass — best in the dataset.",
        "5.2": "Redundancy 5/5 — functionally indestructible.",
      },
      "strong",
      "T5 strong. Best multi-cluster score in the dataset. Transport is exceptional.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — exceptional transport (best anchor coverage and redundancy in the dataset) offset by absent green, weekend emptiness, no dominant BTR operator, and peaking regeneration. A pure connectivity play.",
  },

  projects: [
    buildProject({
      id: "goodmans-fields", area_id: "aldgate-east", name: "Goodman's Fields", developer: "Berkeley", operator: "Berkeley", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Dominant residential scheme at Aldgate. Berkeley. Substantially complete. BTS with fragmented letting routes.",
      amenity_tier: "strong", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Berkeley specification — 2016-2020 new-build. Developer-quality, not jury-winning.",
        t4_1_amenity_package: "Strong amenity package per Berkeley standard — gym, concierge, lounges.",
        t4_4_signature_arch: "No jury win. Goodman's Fields is developer-grade (Make Architects had earlier press for Aldgate Square nearby).",
      },
    }),
    buildProject({
      id: "aldgate-place", area_id: "aldgate-east", name: "Aldgate Place", developer: "Barratt / Londonewcastle", operator: "Barratt", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Mixed-tenure development at Aldgate. Barratt / Londonewcastle.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Barratt modern specification.",
        t4_1_amenity_package: "Not yet researched.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
  ],

  external_links: [
    { url: "https://www.berkeleygroup.co.uk/developments/london/aldgate/goodmans-fields", label: "Goodman's Fields (Berkeley)", type: "developer", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default aldgateEast;
