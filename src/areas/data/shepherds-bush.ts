import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const sbMarketRegen = buildProject({
  id: "shepherds-bush-market-regen", area_id: "shepherds-bush", name: "Shepherd's Bush Market", developer: "Yoo Capital", operator: "unknown", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unknown",
  preview: "Up to 212 apartments + mews houses integrated with the retained market. Planning approved, partial delivery. Phased completion extending to 2028+. Not yet lettable at scale.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Not yet complete — cannot verify.",
    t4_1_amenity_package: "Integrated with retained market and new retail. Unique retail amenity.",
    t4_4_signature_arch: "No architectural press signal.",
  },
});
sbMarketRegen.external_links = [
  { url: "https://yoocapital.com/project/shepherds-bush-market/", label: "Yoo Capital — Shepherd's Bush Market", type: "developer", accessed_date: "2026-04-12" },
];

const shepherdsBush: Area = {
  id: "shepherds-bush",
  name: "Shepherd's Bush",
  aliases: ["Shepherds Bush"],
  borough: "Hammersmith and Fulham",
  postcodes: ["W12"],

  headline:
    "Central + Overground + Circle/H&C at Zone 2 — adjacent to Westfield and the White City cluster. Strong connectivity but a T1.1 safety concern at the Green.",
  preview:
    "Shepherd's Bush sits adjacent to Westfield London and the White City regeneration cluster. Four lines (Central, Overground, Circle, H&C) give strong connectivity at Zone 2 pricing. However, the Green is H&F's top crime hotspot with knife crime specifically concentrated there, and the council has deployed 20 new motion-sensor lights and 35 upgraded CCTV cameras in response.",

  long_form: {
    full: "Shepherd's Bush is a Zone 2 area adjacent to Westfield London and the White City cluster. The transport offer is strong — Central Line at Shepherd's Bush station, plus Circle and H&C at Shepherd's Bush Market station, plus Overground. However, Shepherd's Bush Green is H&F's top crime hotspot with knife crime specifically concentrated at the Green and Hammersmith Broadway. The council has explicitly named these as weekly-review priorities. Residents report feeling increasingly unsafe despite borough crime statistics falling. The area benefits from White City activity next door but has no single masterplan of its own.",
    history: "Historic west London neighbourhood. Westfield London (2008) transformed the retail landscape. Adjacent to the BBC Television Centre / White City regeneration.",
    vibe: "Busy urban neighbourhood with Westfield as the commercial anchor. The Green is a traffic-encircled island. Mixed residential character.",
    weekday: "A Tuesday evening: Westfield traffic tails off from ~20:00; Uxbridge Road chicken shops and takeaways are at peak from ~19:00-23:00; the Empire's gig nights draw crowds from 18:00 and discharge 22:30-23:30. Night bus interchange at the Green picks up from ~22:30.",
    weekend: "A Saturday: peak Westfield from late morning; the Empire at full weekend programming; Bush Theatre matinées; football crowds if Chelsea or QPR are playing. Sunday is calmer — Westfield still trades, Goldhawk Road brunch crowd.",
    notable: "Shepherd's Bush Empire (music venue). Westfield London. Adjacent to White City / Television Centre.",
    croydon_comparison: "Shepherd's Bush has stronger transport (Zone 2, four lines) and Westfield retail, but the named-hotspot safety signal at the Green is a meaningful concern that Croydon's town centre does not have at the same knife-crime intensity.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Central", type: "tube" },
      { name: "London Overground", type: "overground" },
      { name: "Circle", type: "tube" },
      { name: "Hammersmith & City", type: "tube" },
    ],
    primary_stations: [
      { name: "Shepherd's Bush", lines: ["Central", "London Overground"], walk_minutes_from_centre: 3 },
      { name: "Shepherd's Bush Market", lines: ["Circle", "Hammersmith & City"], walk_minutes_from_centre: 5 },
    ],
    times_to_anchors: { city_of_london: 20, canary_wharf: 28, soho_fitzrovia: 14, kings_cross_shoreditch: 21 },
    multi_cluster_score: 3,
    redundancy_score: 4,
    notes: "Central + Overground + Circle + H&C. 3/4 anchors ≤25 min. Average 20.75 min. Redundancy 4/5.",
    sources: [
      { url: "https://tfl.gov.uk/tube-dlr-overground/status/", label: "TfL line status", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "18-29",
    age_breakdown: [
      { cohort: "18-29", pct: 31 },
      { cohort: "30-39", pct: 29 },
      { cohort: "40-49", pct: 16 },
      { cohort: "50+", pct: 24 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 29 },
      { group: "White — other", pct: 24 },
      { group: "Asian or Asian British", pct: 16 },
      { group: "Black or Black British", pct: 16 },
      { group: "Mixed", pct: 9 },
      { group: "Other ethnic group", pct: 6 },
    ],
    household_mix: [
      { type: "Single person", pct: 36 },
      { type: "Couple no children", pct: 22 },
      { type: "Couple with children", pct: 15 },
      { type: "Lone parent", pct: 11 },
      { type: "Shared household", pct: 12 },
      { type: "Other", pct: 4 },
    ],
    student_pct: 9,
    professional_renter_pct: 48,
    notes: "Diverse demographic with significant Australasian, Polish, and Latin American communities (Latin cluster concentrated around Goldhawk Road / Shepherd's Bush Market). Higher social housing share than White City next door produces a broader economic mix.",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021 — Shepherd's Bush Green, Askew wards", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: { overall: "concerning", crime_vs_borough: "above", crime_vs_croydon: "similar", after_dark_assessment: "Shepherd's Bush Green is H&F's most-cited crime hotspot. Knife crime is specifically concentrated there — council named it a weekly-review priority and deployed 20 motion-sensor lights and 35 upgraded 360-degree CCTV cameras. The Green after 22:00 is not a safe pedestrian environment for solo walkers.", concerns: ["Shepherd's Bush Green — H&F's top named crime hotspot, knife crime concentrated here", "Council response: 20 motion-sensor lights + 35 360-degree CCTV cameras", "Uxbridge Road night economy concentrating ASB", "Residents report feeling increasingly unsafe despite borough-level crime stats falling", "Night bus interchange at the Green — pickpocketing, occasional assault reports"], sources: [
    { url: "https://www.police.uk/pu/your-area/metropolitan-police/shepherds-bush-green/", label: "Met Police — Shepherd's Bush Green ward", type: "met-police", accessed_date: "2026-04-17" },
    { url: "https://www.lbhf.gov.uk/news/2024/10/new-cctv-and-lighting-shepherds-bush-green", label: "LBHF — safety infrastructure response", type: "council", accessed_date: "2026-04-17" },
  ] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [
    { name: "Shepherd's Bush Green", size_acres: 8, walk_minutes: 2, notes: "Traffic-encircled 'green' — more plaza than park, with the named ASB hotspot; nominal not usable" },
    { name: "Wormwood Scrubs", size_acres: 200, walk_minutes: 15, notes: "Large open common to the north" },
    { name: "Holland Park", size_acres: 54, walk_minutes: 15, notes: "Premium formal park to the south with Kyoto Garden" },
    { name: "Ravenscourt Park", size_acres: 32, walk_minutes: 15, notes: "Lake, tennis, playground — south-west" },
  ], overall_assessment: "Paradoxical green profile: three serious parks all within 15 minutes walk, but none within the 10-minute radius. Shepherd's Bush Green doesn't function as usable green — it's a traffic island with dominant ASB signal. The real parks are all edge-of-area.", sources: [
    { url: "https://www.rbkc.gov.uk/leisure-and-culture/parks/holland-park", label: "RBKC — Holland Park", type: "council", accessed_date: "2026-04-17" },
  ] },
  amenities: {
    grocery: [
      { name: "M&S Food (Westfield)", type: "supermarket", walk_minutes: 8, notes: "Premium grocery inside Westfield London" },
      { name: "Waitrose (Westfield)", type: "supermarket", walk_minutes: 8, notes: "Full-size Waitrose" },
      { name: "Tesco Express (Uxbridge Road)", type: "convenience", walk_minutes: 3, notes: "Main Uxbridge Road branch — reliable but basic" },
      { name: "Shepherd's Bush Market", type: "market", walk_minutes: 5, notes: "Ethnic-food market — Caribbean, West African, Polish, Middle Eastern specialty" },
    ],
    gyms: [
      { name: "PureGym West London Westfield", type: "budget-gym", walk_minutes: 8, notes: "24-hour PureGym" },
      { name: "Virgin Active Shepherd's Bush", type: "mid-premium-gym", walk_minutes: 8, notes: "Inside Westfield — pool, sauna, classes" },
      { name: "Anytime Fitness Shepherd's Bush", type: "budget-gym", walk_minutes: 5, notes: "24-hour budget option on Uxbridge Road" },
      { name: "F45 Shepherd's Bush", type: "boutique-studio", walk_minutes: 6, notes: "HIIT studio" },
      { name: "London Shootfighters", type: "combat-sport", walk_minutes: 10, notes: "MMA / BJJ / Muay Thai — notable boutique gym" },
    ],
    food_and_drink: [
      { name: "Westfield London dining level", type: "food-hall", walk_minutes: 8, notes: "Full chain mix plus premium outlets" },
      { name: "Defectors Weld", type: "pub", walk_minutes: 3, notes: "Established Uxbridge Road pub" },
      { name: "Shepherd's Bush Empire venue bar", type: "gig-bar", walk_minutes: 3, notes: "O2 Shepherd's Bush Empire — major mid-size music venue" },
      { name: "Bush Theatre café", type: "arts-cafe", walk_minutes: 5, notes: "Attached to the new Bush Theatre" },
      { name: "Goldhawk Road restaurants", type: "restaurant-strip", walk_minutes: 8, notes: "Independent dining strip" },
    ],
    health: [
      { name: "Charing Cross Hospital", type: "hospital", walk_minutes: 20, notes: "Imperial NHS Trust — A&E + specialist" },
      { name: "Shepherd's Bush Medical Centre", type: "gp", walk_minutes: 5, notes: "NHS GP on Uxbridge Road" },
      { name: "Boots Uxbridge Road", type: "pharmacy", walk_minutes: 3, notes: "" },
    ],
    cultural: [
      { name: "O2 Shepherd's Bush Empire", type: "music-venue", walk_minutes: 3, notes: "Major 2,000-capacity gig venue — iconic on the London circuit" },
      { name: "Bush Theatre", type: "theatre", walk_minutes: 5, notes: "Innovative new-writing theatre in the old Shepherd's Bush Library" },
      { name: "Lyric Hammersmith (adjacent)", type: "theatre", walk_minutes: 15, notes: "" },
      { name: "Westfield Vue Cinema", type: "cinema", walk_minutes: 8, notes: "Multiplex inside Westfield" },
    ],
    notes: "Amenity density is high but quality-mix is uneven. Westfield supplies the premium floor; Uxbridge Road supplies the chicken-shop / betting-shop floor. Real cultural anchors — Empire, Bush Theatre — are a genuine identity asset.",
    sources: [
      { url: "https://www.academymusicgroup.com/o2shepherdsbushempire/", label: "O2 Shepherd's Bush Empire", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.bushtheatre.co.uk/", label: "Bush Theatre", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: { status: "active", investment_pipeline: "Shepherd's Bush Market regeneration (Yoo Capital) — up to 212 apartments plus mews houses integrated with the retained market, planning approved, partial delivery, phased completion extending to 2028+. No equivalent scale of masterplan within Shepherd's Bush proper.", recent_milestones: [
    "2024 — 20 motion-sensor lights + 35 CCTV cameras deployed at the Green",
    "2024-2025 — Shepherd's Bush Market phase 1 delivery (Yoo Capital)",
  ], upcoming_milestones: [
    "2026-2027 — Further Shepherd's Bush Market phases",
    "2028+ — Full market regeneration completion",
  ], trajectory_through_2027: "Ascending slowly via the Market scheme delivery and indirectly via White City adjacency, but the Green's safety issue is structural and unlikely to resolve inside the window.", sources: [
    { url: "https://yoocapital.com/project/shepherds-bush-market/", label: "Yoo Capital — Shepherd's Bush Market", type: "developer", accessed_date: "2026-04-17" },
  ] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "fail", "1.2": "pass", "1.3": "pass", "1.4": "fail", "1.5": "partial", "1.6": "pass" },
      {
        "1.1": "T1.1 FAIL — ward is named-hotspot for knife crime with explicit council infrastructure response.",
        "1.2": "Modern stock present, including spillover from White City Living.",
        "1.3": "Central + Overground + Circle + H&C. Zone 2. Strong.",
        "1.4": "T1.4 FAIL — council-named weekly-review priority for ASB and knife crime.",
        "1.5": "Shepherd's Bush Green fringe is rough; areas closer to Westfield/White City are better.",
        "1.6": "Not in decline — ascending via White City adjacency.",
      },
      "fail",
      "T1 FAIL. T1.1 and T1.4 fail on the named-hotspot knife crime signal. Strong transport cannot compensate for the safety concern.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "unknown", "2.3": "unknown", "2.4": "partial", "2.5": "unknown", "2.7": "unknown" },
      {
        "2.1": "Westfield London provides comprehensive daily essentials.",
        "2.4": "Nominal-to-moderate green. The Green is a traffic island; real parks are 15 min walk.",
      },
      "moderate",
      "T2 partially populated. Strong retail via Westfield; green access is partial.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "pass", "3.3": "pass", "3.4": "unknown", "3.5": "unknown", "3.6": "unknown" },
      {
        "3.1": "Small-scale within Shepherd's Bush; major activity in adjacent White City.",
        "3.2": "Shepherd's Bush Empire, Westfield, Bush Theatre.",
        "3.3": "Strong recognisable identity — everyone knows Shepherd's Bush.",
      },
      "moderate",
      "T3 moderate. Strong identity and cultural anchors but regeneration activity is concentrated in adjacent White City.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "partial", "5.4": "unknown" },
      {
        "5.1": "3/4 anchors ≤25 min. Average 20.75 min.",
        "5.2": "Redundancy 4/5 — four lines.",
        "5.3": "Ascending slowly via White City adjacency.",
      },
      "moderate",
      "T5 moderate. Good connectivity and redundancy.",
    ),
    overall_grade: "C",
    grade_reasoning: "C grade — T1 FAIL on safety (named-hotspot knife crime at the Green) dominates the assessment despite strong connectivity. Would require the Caner-experience reading to accept the safety signal before considering.",
  },

  projects: [
    sbMarketRegen,
    // RESEARCH: Bush Court — small owner-lease tower, private landlords. Under 100 units.
    // REALISM: unlikely (private landlord referencing, no BTR operator)
    // COST_TIER: UNVERIFIED
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "bush-court", area_id: "shepherds-bush", name: "Bush Court", developer: "unknown", operator: "Private landlords", building_type: "Owner-Lease", build_phase: "complete", tenure: ["rent"], realism: "unlikely",
      preview: "Small residential tower near Westfield, under 100 units. c. 2018-2020 completion. Owner-lease rental via private landlords.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "2018-2020 new-build. Modern but unverified specification.",
        t4_1_amenity_package: "Not researched.",
        t4_4_signature_arch: "No architectural press signal.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default shepherdsBush;
