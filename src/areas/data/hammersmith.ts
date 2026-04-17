import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const hammersmith: Area = {
  id: "hammersmith",
  name: "Hammersmith",
  aliases: [],
  borough: "Hammersmith and Fulham",
  postcodes: ["W6"],

  headline:
    "Piccadilly + District + H&C + Circle at Zone 2 — riverside location with strong transport but a Broadway hotspot and the Hammersmith Bridge closure drag.",
  preview:
    "Hammersmith is a four-line Zone 2 hub (Piccadilly, District, H&C, Circle) with riverside character and Ravenscourt Park access. Hammersmith Broadway is a named crime hotspot and the bridge closure since 2019 remains a negative infrastructure story. Mildly ascending via Town Hall redevelopment.",

  long_form: {
    full: "Hammersmith sits on the Thames with four tube lines at two closely-spaced stations (Piccadilly/District at one, Circle/H&C at the other). The Broadway is a named hotspot per H&F council crime statements, though the residential streets south toward Fulham Palace Road are calmer. The Hammersmith Bridge closure to vehicular traffic since 2019 remains a negative infrastructure story. The Town Hall redevelopment (Rockwell / LBHF) is in delivery. Operator presence is thin at the BTR level — most rental is BTS re-lets or older private-landlord stock.",
    history: "Historic west London riverside town. The bridge closure since 2019 has affected the area's connectivity to the south bank.",
    vibe: "Riverside west London with the Lyric Theatre, independent restaurants along King Street, and a busy Broadway interchange.",
    weekday: "A Tuesday evening: the Broadway interchange is crowded until ~19:30 as commuters change between tube and bus. King Street restaurants run to ~22:30. The Apollo on gig nights draws crowds from 18:30 and discharges 22:00-23:00. Lyric Theatre performances run 19:30-22:15 typically. Subways under the A4 become the problem area after 22:30.",
    weekend: "A Saturday: Broadway shopping centre traffic peaks midday; King Street lunch/brunch crowd; Thames Path runners and cyclists; Apollo weekend gigs. Boat Race weekend brings significant crowds to the riverside. Sunday is calmer — riverside pub lunches at the Dove, Ravenscourt Park family presence, Riverside Studios matinées.",
    notable: "Hammersmith Bridge (closed to vehicles since 2019). Lyric Theatre. Thames riverside. Furnivall Gardens.",
    croydon_comparison: "Hammersmith offers Zone 2 riverside living with four tube lines — materially stronger transport than Croydon. The Broadway hotspot is a concern but the residential grain is calmer than Croydon's town centre.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Piccadilly", type: "tube" },
      { name: "District", type: "tube" },
      { name: "Hammersmith & City", type: "tube" },
      { name: "Circle", type: "tube" },
    ],
    primary_stations: [
      { name: "Hammersmith (Piccadilly/District)", lines: ["Piccadilly", "District"], walk_minutes_from_centre: 3 },
      { name: "Hammersmith (H&C/Circle)", lines: ["Hammersmith & City", "Circle"], walk_minutes_from_centre: 5 },
    ],
    times_to_anchors: { city_of_london: 25, canary_wharf: 35, soho_fitzrovia: 18, kings_cross_shoreditch: 18 },
    multi_cluster_score: 2,
    redundancy_score: 4,
    notes: "Two Hammersmith stations ~5 min apart. Piccadilly gives direct access to Green Park, King's Cross, Heathrow. District runs to Victoria and the City. H&C/Circle run via Edgware Road. Canary Wharf at 35 is the persistent weakness.",
    sources: [
      { url: "https://tfl.gov.uk/tube-dlr-overground/status/", label: "TfL line status", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 26 },
      { cohort: "30-39", pct: 31 },
      { cohort: "40-49", pct: 17 },
      { cohort: "50+", pct: 26 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 41 },
      { group: "White — other", pct: 27 },
      { group: "Asian or Asian British", pct: 12 },
      { group: "Black or Black British", pct: 9 },
      { group: "Mixed", pct: 7 },
      { group: "Other ethnic group", pct: 4 },
    ],
    household_mix: [
      { type: "Single person", pct: 38 },
      { type: "Couple no children", pct: 24 },
      { type: "Couple with children", pct: 14 },
      { type: "Lone parent", pct: 8 },
      { type: "Shared household", pct: 12 },
      { type: "Other", pct: 4 },
    ],
    student_pct: 6,
    professional_renter_pct: 55,
    notes: "Skews slightly older than White City / Shepherd's Bush — Hammersmith is more an established professional area than a regeneration catchment. Riverside properties attract older affluent residents pulling the 50+ share up.",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021 — Hammersmith Broadway, Ravenscourt Park wards", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: { overall: "moderate", crime_vs_borough: "above", crime_vs_croydon: "safer", after_dark_assessment: "Hammersmith Broadway itself — the bus station / tube interchange / shopping centre triangle — is named by LBHF as a crime hotspot. Night-bus interchange pressure and the subway structure under the A4 concentrate the issue. However, residential streets south toward Fulham Palace Road and the riverside are materially calmer.", concerns: [
    "Hammersmith Broadway subways (under A4 flyover) — ASB concentration, especially late",
    "Bus station and shopping centre exterior after 22:00",
    "Hammersmith Bridge closure since 2019 affects pedestrian routing to Barnes",
  ], sources: [
    { url: "https://www.police.uk/pu/your-area/metropolitan-police/hammersmith-broadway/", label: "Met Police — Hammersmith Broadway ward", type: "met-police", accessed_date: "2026-04-17" },
  ] },
  green_and_water: { has_river: true, has_canal: false, has_dock: false, parks: [
    { name: "Furnivall Gardens", size_acres: 4, walk_minutes: 5, notes: "Thames-side garden with bandstand and river views" },
    { name: "Ravenscourt Park", size_acres: 32, walk_minutes: 10, notes: "Major local park with lake, tennis, playground, walled garden, café" },
    { name: "Hammersmith Riverside walk", walk_minutes: 5, notes: "Thames Path runs through — Chiswick to Putney via Hammersmith" },
    { name: "Bishop's Park (Fulham)", size_acres: 27, walk_minutes: 20, notes: "Thames-side park further south" },
  ], overall_assessment: "Strong green-and-water profile. Thames frontage is the headline — the stretch of Thames Path from Hammersmith Bridge past Furnivall Gardens to Chiswick Mall is one of the most walkable riverside sections in west London, with the Blue Anchor and Dove pubs historically anchoring the stretch.", sources: [
    { url: "https://www.lbhf.gov.uk/parks-and-open-spaces/ravenscourt-park", label: "LBHF — Ravenscourt Park", type: "council", accessed_date: "2026-04-17" },
  ] },
  amenities: {
    grocery: [
      { name: "M&S Simply Food (Hammersmith Broadway)", type: "supermarket", walk_minutes: 3, notes: "Inside the Broadway shopping centre" },
      { name: "Sainsbury's (King Street)", type: "supermarket", walk_minutes: 5, notes: "Full-size Sainsbury's west of the Broadway" },
      { name: "Waitrose (Fulham Palace Road)", type: "supermarket", walk_minutes: 15, notes: "Southerly" },
      { name: "Tesco Express (multiple)", type: "convenience", walk_minutes: 3, notes: "Several branches" },
    ],
    gyms: [
      { name: "Virgin Active Hammersmith Broadway", type: "mid-premium-gym", walk_minutes: 3, notes: "Inside the Broadway shopping centre — pool, sauna, classes" },
      { name: "PureGym Hammersmith", type: "budget-gym", walk_minutes: 4, notes: "24-hour" },
      { name: "Nuffield Health Hammersmith", type: "mid-premium-gym", walk_minutes: 5, notes: "Pool and full classes" },
      { name: "F45 Hammersmith", type: "boutique-studio", walk_minutes: 6, notes: "HIIT studio" },
      { name: "Evolve MMA Hammersmith", type: "combat-sport", walk_minutes: 10, notes: "BJJ / Muay Thai / MMA" },
    ],
    food_and_drink: [
      { name: "Lyric Theatre café / bar", type: "arts-cafe", walk_minutes: 3, notes: "Attached to the Lyric" },
      { name: "Riverside Studios café", type: "arts-cafe", walk_minutes: 5, notes: "River-facing café inside Queen's Wharf / Riverside Studios" },
      { name: "The Dove", type: "historic-pub", walk_minutes: 10, notes: "17th-century Thames-side pub — iconic" },
      { name: "The Blue Anchor", type: "historic-pub", walk_minutes: 7, notes: "18th-century riverside pub" },
      { name: "King Street restaurant strip", type: "restaurant-cluster", walk_minutes: 5, notes: "Mix of independents and chains along King Street" },
    ],
    health: [
      { name: "Charing Cross Hospital", type: "hospital", walk_minutes: 15, notes: "Imperial NHS Trust — A&E + specialist" },
      { name: "Hammersmith Surgery", type: "gp", walk_minutes: 5, notes: "NHS GP" },
      { name: "Boots Hammersmith Broadway", type: "pharmacy", walk_minutes: 3, notes: "Flagship pharmacy" },
    ],
    cultural: [
      { name: "Eventim Apollo (Hammersmith Apollo)", type: "music-venue", walk_minutes: 3, notes: "3,600-capacity art-deco venue — major touring acts" },
      { name: "Lyric Hammersmith", type: "theatre", walk_minutes: 3, notes: "Established producing theatre" },
      { name: "Riverside Studios", type: "arts-centre", walk_minutes: 5, notes: "Theatre + cinema + TV studios + café integrated into Queen's Wharf" },
      { name: "Bush Hall (Uxbridge Road direction)", type: "music-venue", walk_minutes: 15, notes: "" },
    ],
    notes: "Hammersmith's amenity profile is mature and established rather than trendy. The triangulation of Apollo + Lyric + Riverside Studios gives the area genuine cultural weight — few non-Zone-1 areas have three active mid-scale venues.",
    sources: [
      { url: "https://www.eventimapollo.com/", label: "Eventim Apollo", type: "other", accessed_date: "2026-04-17" },
      { url: "https://lyric.co.uk/", label: "Lyric Hammersmith", type: "other", accessed_date: "2026-04-17" },
      { url: "https://riversidestudios.co.uk/", label: "Riverside Studios", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: { status: "active", investment_pipeline: "Hammersmith Town Hall redevelopment (Rockwell / LBHF) is the headline scheme — 204 homes, new civic space, in delivery. Queen's Wharf (Mount Anvil + A2Dominion, 165 units with Riverside Studios integrated) completed 2024-2025. Fulham Reach (St George / Berkeley, 744 units riverside) completed.", recent_milestones: [
    "2024 — Queen's Wharf residential completion (Mount Anvil)",
    "2024 — Hammersmith Bridge pedestrian/cyclist access restored",
    "2025 — Town Hall redevelopment phase 1 handovers",
  ], upcoming_milestones: [
    "2026 — Town Hall further phases",
    "2026-2027 — Bridge stabilisation / potential partial vehicle access restoration",
  ], trajectory_through_2027: "Mildly ascending. By August 2027 Town Hall should be largely delivered, Queen's Wharf fully occupied with Riverside Studios active. The Broadway hotspot and the bridge closure remain drags.", sources: [
    { url: "https://www.lbhf.gov.uk/civic-campus", label: "LBHF — Town Hall redevelopment", type: "council", accessed_date: "2026-04-17" },
    { url: "https://riversidestudios.co.uk/", label: "Riverside Studios / Queen's Wharf", type: "other", accessed_date: "2026-04-17" },
  ] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "partial", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Hammersmith Broadway is a named hotspot; residential streets are calmer. Marginal pass.",
        "1.2": "Modern stock present — Town Hall redevelopment delivering, plus existing BTS stock.",
        "1.3": "Piccadilly + District + H&C + Circle — four tube lines at Zone 2.",
        "1.4": "Broadway hotspot is a T1.4 concern.",
        "1.5": "Public realm generally good; bridge closure is an infrastructure drag.",
        "1.6": "Not in decline — mildly ascending via Town Hall.",
      },
      "moderate",
      "T1 marginal pass. Broadway hotspot and bridge closure are meaningful caveats.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "unknown", "2.2": "unknown", "2.3": "unknown", "2.4": "pass", "2.5": "unknown", "2.7": "unknown" },
      {
        "2.4": "Core river + strong green. Thames frontage and Ravenscourt Park (32 acres, 10 min).",
      },
      "moderate",
      "T2 largely unpopulated. Strong green-and-water confirmed.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "pass", "3.3": "pass", "3.4": "unknown", "3.5": "unknown", "3.6": "unknown" },
      {
        "3.1": "Town Hall redevelopment in delivery. Mildly ascending.",
        "3.2": "Lyric Theatre, riverside, King Street restaurants.",
        "3.3": "Strong recognisable identity — Hammersmith is a well-known west London centre.",
      },
      "moderate",
      "T3 moderate. Strong identity and cultural anchors; regeneration is modest.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "partial", "5.4": "unknown" },
      {
        "5.1": "2/4 anchors ≤25. Average 24 min. City at 25 is borderline.",
        "5.2": "Redundancy 4/5 — four tube lines.",
        "5.3": "Mildly ascending via Town Hall. Bridge remains a drag.",
      },
      "moderate",
      "T5 moderate. Strong redundancy; anchor times are adequate but not exceptional.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — strong riverside Zone 2 location with four tube lines, but Broadway hotspot, bridge closure, and operator-thin BTR landscape limit the practical score.",
  },

  projects: [
    // RESEARCH: Fulham Reach (St George) — 1-bed from £2,925-£3,250/mo (OnTheMarket). Owner-lease via private landlords.
    // REALISM: blocked (premium pricing implies £87,750+ income floor — categorically unaffordable for grad-visa renter)
    // COST_TIER: luxury (1-bed from £2,925)
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "fulham-reach", area_id: "hammersmith", name: "Fulham Reach", developer: "St George (Berkeley Group)", operator: "St George / private landlords", building_type: "Owner-Lease", build_phase: "complete", tenure: ["rent", "buy"], realism: "blocked",
      preview: "744-unit riverside development by St George. Owner-lease model — rental via individual landlords. 24hr concierge, The Tamesis Club (virtual golf, screening room, snooker, wine cellar), gym, cinema. 1-bed from ~GBP 3,250/mo.",
      amenity_tier: "premium", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "St George / Berkeley specification — phased 2015-2020. Reliably modern.",
        t4_1_amenity_package: "Premium: 24hr concierge, The Tamesis Club, gym, cinema. Strong amenity for a non-BTR development.",
        t4_4_signature_arch: "Riverside masterplan. No specific jury architectural win sourced.",
      },
    }),
    // RESEARCH: Sovereign Court (St George) — 1-bed from ~£2,600/mo. Owner-lease via private landlords.
    // REALISM: unlikely (premium pricing ~£78k income floor, private landlord referencing)
    // COST_TIER: premium (1-bed from £2,600)
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "sovereign-court", area_id: "hammersmith", name: "Sovereign Court", developer: "St George (Berkeley Group)", operator: "Private landlords", building_type: "Owner-Lease", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "418-unit St George development, 2 min walk to Hammersmith tube. Owner-lease model. 24hr concierge, residents' gym, courtyard gardens. 1-bed from ~GBP 2,600/mo.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "St George / Berkeley specification — c. 2015. Modern.",
        t4_1_amenity_package: "24hr concierge, gym, courtyard gardens. Decent for owner-lease.",
        t4_4_signature_arch: "No architectural press signal.",
      },
    }),
    // RESEARCH: Queen's Wharf (Mount Anvil) — 1-bed from ~£2,600/mo. BTS via private landlords.
    // REALISM: unlikely (premium pricing, private landlord referencing)
    // COST_TIER: premium (1-bed from £2,600)
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "queens-wharf", area_id: "hammersmith", name: "Queen's Wharf", developer: "Mount Anvil / FABRICA (JV with A2Dominion)", operator: "Mount Anvil / private landlords", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "165-unit riverside development with Riverside Studios (theatre, cinema, cafe, bar) integrated. Up to 14 storeys. 24hr concierge, rooftop terrace. 1-bed from ~GBP 2,600/mo.",
      amenity_tier: "strong", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Mount Anvil 2024-2025 delivery — modern specification.",
        t4_1_amenity_package: "24hr concierge, rooftop terrace, Riverside Studios integrated into the development. Strong cultural amenity.",
        t4_4_signature_arch: "No specific jury signal, but Riverside Studios integration is distinctive.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

// ── Project external links & price transparency ──────────────────────────
const fulhamReach = hammersmith.projects.find(p => p.id === "fulham-reach")!;
fulhamReach.external_links = [
  { url: "https://www.berkeleygroup.co.uk/developments/london/fulham/fulham-reach", label: "Berkeley Group — Fulham Reach", type: "developer", accessed_date: "2026-04-12" },
];
fulhamReach.rental.price_transparency = "listed";

const sovereignCourt = hammersmith.projects.find(p => p.id === "sovereign-court")!;
sovereignCourt.external_links = [
  { url: "https://www.berkeleygroup.co.uk/developments/london/hammersmith/sovereign-court", label: "Berkeley Group — Sovereign Court", type: "developer", accessed_date: "2026-04-12" },
];
sovereignCourt.rental.price_transparency = "listed";

const queensWharf = hammersmith.projects.find(p => p.id === "queens-wharf")!;
queensWharf.external_links = [
  { url: "https://mountanvil.com/find-your-home/queens-wharf/", label: "Mount Anvil — Queen's Wharf", type: "developer", accessed_date: "2026-04-12" },
];
queensWharf.rental.price_transparency = "listed";

export default hammersmith;
