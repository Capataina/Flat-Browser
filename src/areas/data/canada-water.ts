import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const canadaWater: Area = {
  id: "canada-water",
  name: "Canada Water",
  aliases: ["Rotherhithe"],
  borough: "Southwark",
  postcodes: ["SE16"],

  headline:
    "53 acres on the Zone 2 Jubilee line — the same lead developer who delivered King's Cross. Plans for the first new London high street in a century, 12-acre park, 3,700 homes.",
  preview:
    "The development with the strongest long-term bones and the most uncertain near-term timeline. British Land + AustralianSuper appointed Roger Madelin (who delivered King's Cross) to lead. Plan: 3,700 homes, new high street, 12-acre park, 20,000 jobs of workspace. Corner Corner leisure venue already open. Planning called in by Sadiq Khan in December 2025.",

  long_form: {
    full: "Canada Water is the development with the strongest long-term bones and the most uncertain near-term timeline. British Land and AustralianSuper have appointed Roger Madelin — who delivered the King's Cross masterplan — to lead the project. The plan is genuinely ambitious: 3,700 homes, a new high street (the first built in London in a century), a new town square, a 12-acre park, a new leisure centre, and 20,000 jobs of workspace. Corner Corner — a leisure venue by Broadwick and KERB — is already open and operating. Canada Water station on the Jubilee line puts London Bridge at 3 minutes and Canary Wharf at 5. Zone 2. The caveat: Sadiq Khan called in the revised masterplan in December 2025 over affordable housing delivery, introducing planning uncertainty.",
    history: "Former Canada Water docks. The Surrey Quays shopping centre dominated until British Land took on the wider masterplan in the 2010s.",
    vibe: "Dock-side and quietly transitioning. The Jubilee Line plus Overground make this one of the most well-connected Zone 2 spots; the activation is genuinely happening but slowly.",
    weekday: "A Tuesday at 7pm: Corner Corner has after-work crowds; Canada Water station is busy; the dock walks have joggers.",
    weekend: "A Saturday: dock walks, Surrey Quays shopping, growing food and drink scene at Corner Corner.",
    notable: "Roger Madelin (King's Cross delivery lead) leading the masterplan. Corner Corner. Canada Water Library.",
    croydon_comparison: "Canada Water has Jubilee + Overground + multi-cluster reach that Croydon's overground-only options can't match. The Roger Madelin pedigree gives it long-term credibility even with the current planning uncertainty.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Jubilee", type: "tube" },
      { name: "Overground", type: "overground" },
    ],
    primary_stations: [
      { name: "Canada Water", lines: ["Jubilee", "Overground"], walk_minutes_from_centre: 4 },
    ],
    times_to_anchors: { city_of_london: 10, canary_wharf: 5, soho_fitzrovia: 15, kings_cross_shoreditch: 10 },
    multi_cluster_score: 5,
    redundancy_score: 3,
    notes: "Jubilee + Overground gives multi-cluster reach. Canary Wharf in 5 min, London Bridge in 3.",
    sources: [],
  },
  demographics: { primary_age_cohort: "30-39", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 6, professional_renter_pct: 55, notes: "Mature professional residential profile.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "below", crime_vs_croydon: "much-safer", after_dark_assessment: "Safe and well-stewarded. The dock area is well-lit.", concerns: [], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: true, parks: [{ name: "Russia Dock Woodland", walk_minutes: 6, notes: "Wooded former dock area" }, { name: "Southwark Park", walk_minutes: 10, notes: "Larger municipal park" }], overall_assessment: "Strong dock identity. Multiple water features and parks within walking distance." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Phase F to populate. Known: Tesco Extra, Decathlon, Canada Water Library, Corner Corner." },
  regeneration: {
    status: "phased",
    investment_pipeline: "Masterplan called in for review December 2025 — uncertainty around timing but the broader plan is intact.",
    recent_milestones: ["Corner Corner opened", "Canada Water Leisure Centre delivered", "The Founding tower started"],
    upcoming_milestones: ["3,700 homes planned (subject to planning)", "New high street", "12-acre park"],
    trajectory_through_2027: "Uncertain near-term but the long-term thesis is strong. Roger Madelin's track record is the credibility.",
    sources: [],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Southwark crime below borough average at Canada Water; the dock area is well-lit and well-stewarded, with very-safe after-dark assessment.",
        "1.2": "The Founding tower plus the Corner Corner/Dock Shed commercial pieces plus the wider phased delivery give genuine modern stock presence — not a pre-war market.",
        "1.3": "Canada Water station carries Jubilee + Overground, putting Canary Wharf at 5 minutes, London Bridge at 3, and all four anchor clusters within 15 minutes. Connectivity is a headline strength.",
        "1.4": "British Land + AustralianSuper are running the masterplan with Roger Madelin (ex-King's Cross) leading — institutional professional landlord pedigree at the top of the scale.",
        "1.5": "Canada Water public realm is actively maintained by British Land and Southwark Council; the Leisure Centre and Library are recent civic investments.",
        "1.6": "Not in decline — the broader trajectory is strongly upward even with the December 2025 planning call-in introducing near-term uncertainty.",
      },
      "strong",
      "T1 clean.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "pass", "2.5": "pass", "2.7": "partial" },
      {
        "2.1": "Tesco Extra, Decathlon, Canada Water Library, and Corner Corner all walkable; the Surrey Quays retail anchor carries the everyday essentials layer.",
        "2.2": "Tesco Extra provides the full grocery range and the wider Rotherhithe area has independents plus dock-side food at Corner Corner.",
        "2.3": "Canada Water Leisure Centre is on the doorstep with pool, gym, and fitness studios; commercial gyms are reachable within the masterplan footprint.",
        "2.4": "Dock frontage is a core identity feature — Canada Water dock itself plus Russia Dock Woodland and Southwark Park add genuine green/water density within 10 minutes walk.",
        "2.5": "Residential calm after 10pm; Corner Corner is the only late-activity venue and winds down on a normal hospitality curve.",
        "2.7": "Primary cohort 30-39 — mature professional skew rather than dominant 18-29 presence. Census 2021 data is pre-activation.",
      },
      "good",
      "Strong T2.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "partial", "3.3": "pass", "3.4": "partial", "3.5": "pass", "3.6": "partial" },
      {
        "3.1": "Planning uncertainty after December 2025 call-in — the masterplan is in active delivery but the revised scheme is under Mayor's review, which partially obscures the ongoing investment story.",
        "3.2": "Canada Water Library, Leisure Centre, and Corner Corner all provide partial anchor presence but the area lacks a signature cultural or commercial magnet on the scale of Coal Drops Yard or the Power Station.",
        "3.3": "'Canada Water' is a recognisable London place name with strong dock identity — the Roger Madelin/British Land story plus the Jubilee line station give it genuine mental-map presence.",
        "3.4": "15-minute completeness is partial — the new high street is planned but not yet built, and current activation relies on older Surrey Quays retail plus the civic anchors.",
        "3.5": "Dock-side design quality is coherent — British Land has been deliberate about the public realm and the early buildings are intentionally designed rather than generic.",
        "3.6": "Day/night rhythm is thinner than a mature mixed-use district — Corner Corner is a real activation point but the 24/7 feel is still developing.",
      },
      "moderate",
      "T3 is mid — strong identity bones, weak current activation.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "partial", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 5/5 — all four anchors within 15 minutes. Jubilee + Overground genuinely unlocks the full anchor set from a single station.",
        "5.2": "Jubilee + Overground are independent lines through the same station; a single-line failure does not strand the area.",
        "5.3": "Ascending trajectory long-term but the December 2025 call-in introduces near-term timing uncertainty — not a clean upward slope through the visa window.",
        "5.4": "Canada Water Library is a genuine quiet third space, but broader bookshop/cafe culture is thinner than central areas.",
      },
      "good",
      "Strong T5 connectivity. Trajectory uncertain.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — strong T1+T2+T5, mid T3 due to planning uncertainty. The Roger Madelin pedigree is a long-term credibility play.",
  },

  projects: [
    buildProject({
      id: "the-founding", area_id: "canada-water", name: "The Founding", developer: "British Land", operator: "British Land", building_type: "Owner-Lease", build_phase: "in_delivery", tenure: ["buy"], realism: "blocked",
      preview: "35-storey for-sale tower. 186 apartments — Canada Water's first major residential address.",
      amenity_tier: "premium", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "British Land in-delivery tower to modern specification — the first flagship residential address and the architectural benchmark for the masterplan.",
        t4_1_amenity_package: "Premium package expected — concierge, residents' amenities, full British Land masterplan access.",
        t4_4_signature_arch: "Not named-architect signature but deliberately designed as the district's residential landmark.",
      },
    }),
    buildProject({
      id: "dock-shed", area_id: "canada-water", name: "Dock Shed", developer: "British Land", operator: "British Land", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Early commercial and cultural anchor within the masterplan. Helps prove the district is activating before the housing fully arrives.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Primarily commercial/mixed-use rather than a residential building — not scored on residential quality dimensions.",
        t4_1_amenity_package: "Functional mixed-use rather than amenity-heavy residential.",
        t4_4_signature_arch: "Not a signature piece — early activation infrastructure.",
      },
    }),
    buildProject({
      id: "corner-corner", area_id: "canada-water", name: "Corner Corner (Broadwick + KERB)", developer: "British Land", operator: "Broadwick / KERB", building_type: "Mixed", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "Leisure and dining venue already open. The first activated public space in the masterplan.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Primarily a leisure/dining venue rather than residential — not scored on residential quality dimensions.",
        t4_1_amenity_package: "Not a residential amenity package — Corner Corner functions as a neighbourhood-level anchor.",
        t4_4_signature_arch: "Not a signature architectural piece.",
      },
    }),
    buildProject({
      id: "canada-water-leisure", area_id: "canada-water", name: "Canada Water Leisure Centre", developer: "Southwark Council / British Land", operator: "Southwark Council", building_type: "Mixed", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "Major civic anchor already delivered. Strengthens the case that Canada Water is becoming a real district.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Civic leisure centre rather than a residential building — not scored on residential dimensions.",
        t4_1_amenity_package: "Neighbourhood amenity anchor rather than a residential amenity package.",
        t4_4_signature_arch: "Not a signature architectural piece.",
      },
    }),
    buildProject({
      id: "canada-water-wider", area_id: "canada-water", name: "Canada Water Masterplan (wider)", developer: "British Land + AustralianSuper", operator: "British Land", building_type: "Mixed", build_phase: "future", tenure: ["rent", "buy"], realism: "unknown",
      preview: "3,700 homes total, new high street, 12-acre park, 20,000 jobs of workspace. Planning under review as of December 2025.",
      amenity_tier: "strong", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Future-phase building quality cannot be scored until individual projects are specified; Roger Madelin's King's Cross pedigree suggests a high ceiling.",
        t4_1_amenity_package: "Masterplan-scale amenity promise includes new high street, 12-acre park, and 20,000 jobs of workspace — ambitious but unbuilt.",
        t4_4_signature_arch: "Signature potential pending individual project authorship and the resolution of the December 2025 planning call-in.",
      },
    }),
  ],

  external_links: [
    { url: "https://www.canadawater.co.uk/", label: "Canada Water official", type: "developer", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default canadaWater;
