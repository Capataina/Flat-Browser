import type { Area } from "../types";
import {
  T1_CRITERIA,
  T2_CRITERIA,
  T3_CRITERIA,
  T5_CRITERIA,
  buildProject,
  buildTier,
  stubResearch,
} from "./helpers";

// New parent area collapsing the old Embassy Gardens, Bloom Nine Elms,
// Riverlight Quay, and One Nine Elms entries into projects under a single
// Nine Elms area. Battersea Power Station is its own area (per migration
// decision in the website refactor plan).

const nineElms: Area = {
  id: "nine-elms",
  name: "Nine Elms",
  aliases: ["VNEB", "Vauxhall Nine Elms Battersea", "Nine Elms / Vauxhall"],
  borough: "Wandsworth / Lambeth",
  postcodes: ["SW8", "SW11"],

  headline:
    "The Northern Line extension turned an industrial wasteland into London's biggest single regeneration corridor — riverside, glass-tower premium addresses, US Embassy adjacency.",
  preview:
    "Nine Elms is the corridor that runs from Vauxhall to Battersea Power Station along the south bank of the Thames. The Northern Line extension at Nine Elms station opened in 2021. The US Embassy moved here in 2018, and the streets around it are among the most monitored in London. Multiple premium developments — Embassy Gardens, One Nine Elms, Bloom, Riverlight Quay — share the corridor.",

  long_form: {
    full: "Nine Elms is the corridor that runs along the south bank of the Thames between Vauxhall and Battersea Power Station. Until 2010 it was an industrial wasteland of New Covent Garden Market warehouses and surface parking. Today it is the largest single regeneration zone in London, anchored by the US Embassy (relocated in 2018), the Northern Line extension (Nine Elms and Battersea Power Station stations both opened in 2021), and a series of premium residential developments including Embassy Gardens, Riverlight Quay, Bloom Nine Elms, One Nine Elms, and the Battersea Power Station development to the west. The corridor has its own riverside walk running fully from Vauxhall to BPS. The architectural quality is mixed — some signature buildings (Frank Gehry's Battersea contributions, the Sky Pool at Embassy Gardens) alongside more generic glass towers. The defining feature is that this is a fully new district, built end to end in the 2010s and 2020s, rather than a regeneration of an existing community.",
    history: "Until 2010 the Nine Elms corridor was an industrial wasteland. The US Embassy decision (2008, opened 2018) was the trigger for the broader masterplan, followed by the Northern Line extension (consented 2014, opened 2021), and the Battersea Power Station redevelopment running in parallel. The result is a fully new district built in roughly 15 years.",
    vibe: "Glassy, modern, professional. The streets feel like they were designed all at once — because they were. Less character than King's Cross, more uniformity than Wembley Park. The public realm is generous but not yet warm; the area is still building out the cultural and retail layer that gives an area soul. Embassy Gardens' Sky Pool is the photo-op identity; everyday life is more about premium residential calm than buzzy street life.",
    weekday: "A Tuesday at 7pm: the Northern Line at Nine Elms is busy with commuters; Embassy Gardens' restaurants are at moderate occupancy; the riverside walk has joggers and dog walkers; the streets around the US Embassy are notably empty after dark.",
    weekend: "A Saturday at midday: the riverside walk is the main social space, with cyclists and walkers stretching from Vauxhall to BPS; Embassy Gardens' Sky Pool is a destination attraction; some restaurant traffic but not at the level of Battersea Power Station's retail core.",
    notable: "Sky Pool at Embassy Gardens, US Embassy, Northern Line extension stations, Riverlight Quay's residents' club, One Nine Elms twin towers, Bloom's Waitrose-on-site model.",
    croydon_comparison:
      "Nine Elms is the cleanest example of a fully new luxury district replacing nothing. Croydon is a degraded historic centre; Nine Elms is a brand-new built environment. The trade-off is that Nine Elms is monotone where Croydon has at least the bones of a place — but for someone leaving Croydon for an upgrade, monotone-but-modern is the right direction. The Northern Line extension is genuine and provides Zone 1 access at distances that previously took 30+ minutes.",
  },

  zones: ["Zone 1"],
  connectivity: {
    lines: [
      { name: "Northern", type: "tube" },
      { name: "Victoria", type: "tube" },
    ],
    primary_stations: [
      { name: "Nine Elms", lines: ["Northern"], walk_minutes_from_centre: 4 },
      { name: "Vauxhall", lines: ["Victoria"], walk_minutes_from_centre: 12 },
    ],
    times_to_anchors: {
      city_of_london: 19,
      canary_wharf: 28,
      soho_fitzrovia: 14,
      kings_cross_shoreditch: 18,
    },
    multi_cluster_score: 3,
    redundancy_score: 2,
    notes: "Northern Line extension is the dominant story. Vauxhall (Victoria Line) is walkable but not on every block. Single-line failure stranding is the headline weakness — see T5.2 evaluation.",
    sources: [],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [],
    ethnic_composition: [],
    household_mix: [],
    student_pct: 5,
    professional_renter_pct: 60,
    notes: "Nine Elms ward grew roughly 14x in population between 2011 and 2021 — Census data underrepresents the current professional-renter heaviness. Predominantly 20s-30s working professionals.",
    sources: [],
  },
  safety: {
    overall: "very-safe",
    crime_vs_borough: "below",
    crime_vs_croydon: "much-safer",
    after_dark_assessment: "The streets around the US Embassy are among the most consistently maintained and monitored in London. The wider corridor is well-lit and quiet. No concerns.",
    concerns: [],
    sources: [],
  },
  green_and_water: {
    has_river: true,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Embassy Gardens linear park", walk_minutes: 3, notes: "Designed linear park between the Embassy Gardens buildings" },
      { name: "Battersea Park", size_acres: 200, walk_minutes: 14, notes: "Major Royal Park to the west, accessible via riverside walk" },
    ],
    overall_assessment: "Riverside identity is the defining green feature. The Thames frontage runs fully from Vauxhall to BPS. Battersea Park is walkable.",
  },
  amenities: {
    grocery: [],
    gyms: [],
    food_and_drink: [],
    health: [],
    cultural: [],
    notes: "Not yet populated. Known: Waitrose at Bloom, multiple gyms in residential buildings, US Embassy commissary access for residents (informal), Riverlight Quay restaurants, Sainsbury's Local nearby.",
  },
  regeneration: {
    status: "phased",
    investment_pipeline: "Multiple phases of multiple developments still completing. Battersea Power Station to the west (separate area entry) is itself in active delivery and reinforces the corridor.",
    recent_milestones: ["Northern Line extension opened 2021", "Embassy Gardens Sky Pool delivered", "US Embassy fully operational"],
    upcoming_milestones: ["Continued completions across multiple developments through 2027+"],
    trajectory_through_2027:
      "Nine Elms is on an ascending trajectory through the visa transition. The corridor will be substantially more activated by 2027 as the residential population grows and retail/cultural offering matures.",
    sources: [],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Among the most consistently maintained and monitored streets in London thanks to the US Embassy adjacency and heavy Metropolitan Police presence. Very-safe rating, crime below borough average, no concerns.",
        "1.2": "Embassy Gardens, One Nine Elms, Bloom, Riverlight Quay are all purpose-built modern stock delivered in the 2010s-2020s. No pre-war stock anywhere in the corridor.",
        "1.3": "Northern Line extension at Nine Elms (Zone 1) plus Victoria Line at walkable Vauxhall — City 19 min, Soho/Fitzrovia 14 min, KX 18 min. Passes T1.3 despite T5.2 redundancy concerns.",
        "1.4": "Multiple major managed operators — EcoWorld Ballymore, Essential Living, Berkeley/St James, CC Land/Park Hyatt — with central referencing across the corridor.",
        "1.5": "Recently built and actively maintained, with GLA and council investment in the riverside walk and public realm. No visible decay anywhere in the corridor.",
        "1.6": "Strongly ascending — the corridor grew roughly 14x in population between 2011 and 2021 and multiple developments are still completing through 2027+.",
      },
      "strong",
      "T1 passes cleanly. Premium operator presence (Way of Life, EcoWorld Ballymore, Berkeley, Essential Living), exceptional safety, modern stock end to end.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "partial", "2.2": "pass", "2.3": "pass", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Walkable essentials are present but the area is still building out the granular high street layer — Bloom's on-site Waitrose and Embassy Gardens' retail cover basics but not the dense high-street texture of mature districts.",
        "2.2": "Waitrose on-site at Bloom Nine Elms plus Sainsbury's Local nearby — premium grocery access within the corridor is genuinely strong.",
        "2.3": "Multiple commercial gyms in residential buildings; Embassy Gardens has a flagship resident gym plus Sky Pool, and Third Space and commercial chains are within walking distance.",
        "2.4": "Riverside walk runs the full Thames frontage from Vauxhall to Battersea Power Station; Embassy Gardens linear park is integrated into the masterplan; Battersea Park 200 acres at 14 minutes walk.",
        "2.5": "Residential streets are notably quiet after dark, especially around the US Embassy. No persistent late-night party noise.",
        "2.7": "Primary cohort 30-39 with heavy 20s professional renter share (60%). Nine Elms ward grew 14x 2011-2021 and the current population is dominated by young professionals.",
      },
      "good",
      "Strong on most T2 rows; the only weakness is the still-developing walkable retail layer beyond the supermarkets and gyms inside specific buildings.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "partial", "3.3": "pass", "3.4": "partial", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "Multiple phases of multiple developments still completing through 2027+; the largest single regeneration corridor in London is demonstrably in active investment.",
        "3.2": "Cultural anchor is the US Embassy itself, which is prominent but not socially activating — Embassy Gardens' Sky Pool is a photo-op rather than a day-to-day cultural draw.",
        "3.3": "'Nine Elms' has strong name recognition — the corridor is in London property press constantly and the Sky Pool and US Embassy both give it mental-map presence.",
        "3.4": "15-min completeness still maturing as the area builds out — the retail and food layer is thinner than King's Cross and Battersea Power Station.",
        "3.5": "Architectural quality is mixed — some signature (Embassy Gardens Sky Pool, One Nine Elms twin towers) alongside more generic glass towers. Less coherent than Wembley Park or BPS.",
        "3.6": "Day/night rhythm still developing; quiet at night but lacks the buzz of King's Cross. The area is genuinely residential-led rather than mixed-use in the full sense.",
      },
      "moderate",
      "T3 is the weakest tier for Nine Elms. The area passes regeneration and name recognition cleanly but the cultural depth and architectural coherence are uneven. This is the corridor's known weakness — it is mid-build rather than mature.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "fail", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 3/5 — Northern Line covers some clusters but Canary Wharf is 28 minutes and the interchange is awkward.",
        "5.2": "Single-line dependency on Northern Line extension is the single biggest weakness — failure strands the area. Vauxhall is walkable as a fallback but not truly redundant at Nine Elms station itself.",
        "5.3": "Strongly ascending through 2027 — multiple developments still completing, corridor activation continuing, masterplan remains in delivery.",
        "5.4": "Limited bookshop and library presence — the residential-led character means quiet third-space culture is thinner than central areas.",
      },
      "moderate",
      "T5 reveals the headline weakness: Northern Line single-point-of-failure. Trajectory is strong, but transport robustness is the worst in the dataset for an otherwise-premium area.",
    ),
    overall_grade: "A",
    grade_reasoning:
      "Nine Elms earns A on the strength of T1 + T2 (clean) and the ongoing trajectory. T3 mid-tier and T5 transport weakness keep it from S. The headline risk is Northern Line dependency — anyone working at Canary Wharf would be punished by it.",
  },

  projects: [
    buildProject({
      id: "embassy-gardens",
      area_id: "nine-elms",
      name: "Embassy Gardens",
      developer: "EcoWorld Ballymore",
      operator: "EcoWorld Ballymore",
      building_type: "Owner-Lease",
      build_phase: "complete",
      tenure: ["rent", "buy"],
      realism: "unlikely",
      preview: "Sky Pool suspended between two towers. US Embassy directly adjacent. 24-hour concierge, gym, spa, curated retail. The benchmark for what the long game looks like on the Nine Elms corridor.",
      amenity_tier: "premium",
      is_signature: true,
      overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "EcoWorld Ballymore premium delivery with modern building services, strong layouts, and professional corporate maintenance at the Nine Elms flagship level.",
        t4_1_amenity_package: "Sky Pool suspended between towers, 24-hour concierge, gym, spa, curated retail — the benchmark for premium amenity packages in the dataset.",
        t4_4_signature_arch: "Sky Pool is a genuinely signature architectural feature — the world's first transparent floating pool between two residential towers.",
      },
    }),
    buildProject({
      id: "bloom-nine-elms",
      area_id: "nine-elms",
      name: "Bloom Nine Elms",
      developer: "Essential Living",
      operator: "Essential Living",
      building_type: "BTR",
      build_phase: "complete",
      tenure: ["rent"],
      realism: "unknown",
      preview: "BTR-only — the Nine Elms corridor address you can rent but not purchase. River views, rooftop amenities, Waitrose directly on-site. Well-managed.",
      amenity_tier: "strong",
      overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Essential Living BTR delivered to current specification with professional management and strong resident reviews.",
        t4_1_amenity_package: "River views, rooftop amenities, Waitrose directly on-site — strong BTR amenity stack, though one tier below Embassy Gardens' flagship.",
        t4_4_signature_arch: "Not named-architect signature — functional premium BTR rather than iconic work.",
      },
    }),
    buildProject({
      id: "riverlight-quay",
      area_id: "nine-elms",
      name: "Riverlight Quay",
      developer: "St James (Berkeley Group)",
      operator: "St James",
      building_type: "Mixed",
      build_phase: "complete",
      tenure: ["rent", "buy"],
      realism: "unlikely",
      preview: "Six riverfront buildings between Vauxhall and Embassy Gardens. Residents' club, Thames views, mix of rental and ownership.",
      amenity_tier: "strong",
      overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Berkeley/St James premium specification with reliable build quality, Thames-facing layouts, and modern building services across six buildings.",
        t4_1_amenity_package: "Residents' club with full range of premium amenities — gym, lounges, concierge — consistent with St James's standard.",
        t4_4_signature_arch: "Not a named-architect signature piece — quietly premium riverside composition.",
      },
    }),
    buildProject({
      id: "one-nine-elms",
      area_id: "nine-elms",
      name: "One Nine Elms",
      developer: "CC Land Holdings",
      operator: "Park Hyatt",
      building_type: "Owner-Lease",
      build_phase: "complete",
      tenure: ["rent", "buy"],
      realism: "unlikely",
      preview: "Twin towers with a Park Hyatt hotel component — one of the few addresses with hotel-level services built in by default. Adjacent to Vauxhall, Zone 1 Northern line, upper-floor Thames views.",
      amenity_tier: "premium",
      is_signature: true,
      overall_grade: "S",
      evaluation_reasoning: {
        t2_6_building_quality: "Twin-tower delivery to the highest residential specification with Park Hyatt-operated services layered over the residential product.",
        t4_1_amenity_package: "Hotel-level services by default — Park Hyatt concierge, spa, gym, dining — arguably the most complete premium amenity package in the dataset.",
        t4_4_signature_arch: "Twin skyline towers with distinctive massing, and the Park Hyatt hotel component makes it one of the few branded-residence addresses in London.",
      },
    }),
    buildProject({
      id: "embassy-boulevard", area_id: "nine-elms", name: "Embassy Boulevard", developer: "London Square", operator: "Moda Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "Moda Living's debut London neighbourhood — 467 units (437 BTR) across two blocks, 9-13 storeys. 20,000+ sq ft amenity space: three fitness spaces with Technogym, HIIT studio, yoga/Pilates suite, London's first BTR golf simulator, private dining, cinema room, co-working, sun decks. Studio from £2,680 pcm. Explicit 2.66x income multiple.",
      amenity_tier: "premium", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "New-build 2025 delivery. Moda Living professional BTR management — fully furnished and tech-enabled.",
        t4_1_amenity_package: "Premium — 20,000+ sq ft amenity space, three fitness spaces with Technogym, HIIT studio, yoga/Pilates suite, golf simulator, private dining rooms, resident gardens, 24hr concierge, cinema room, co-working, sun decks, children's play.",
        t4_4_signature_arch: "Not Pritzker-authored. Part of Nine Elms Park masterplan — functional premium BTR rather than signature design.",
      },
    }),
    buildProject({
      id: "nine-elms-park-tower", area_id: "nine-elms", name: "Nine Elms Park (Private Sale Tower)", developer: "London Square", operator: "Individual landlords", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "22-storey bronze-panelled tower — tallest in Nine Elms Park. 186 private sale apartments. Allies and Morrison architects. River views. Shares facilities with Embassy Boulevard. Completing Q1 2025.",
      architects: ["Allies and Morrison"],
      amenity_tier: "strong", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Allies and Morrison design completing 2025. Bronze-panelled tower with river views.",
        t4_1_amenity_package: "Strong — ground-level luxury retail and restaurants, shared facilities with Embassy Boulevard's 20,000+ sq ft amenity space.",
        t4_4_signature_arch: "Allies and Morrison — major London practice. Bronze-panelled design is distinctive but not Pritzker-firm.",
      },
    }),
    buildProject({
      id: "mylo-nine-elms", area_id: "nine-elms", name: "Mylo Nine Elms (Nine Elms Point)", developer: "Telford Homes", operator: "Greystar", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "Greystar-operated BTR — 647 units across multiple towers. One of the world's largest residential operators. Explicit 2.66x income multiple, pets welcome, long-term and short-term leases plus corporate lets. Private gym, lounge, private dining, communal roof gardens. Minutes from Vauxhall station.",
      amenity_tier: "strong", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Telford Homes delivery completed ~2022. Greystar professional management — one of the world's largest residential landlords.",
        t4_1_amenity_package: "Strong — private gym, lounge, private hire dining space, communal roof gardens, balconies/winter gardens for all units, on-site management.",
        t4_4_signature_arch: "Not signature-authored. Functional premium BTR across multiple towers.",
      },
    }),
    buildProject({
      id: "sky-gardens-nine-elms", area_id: "nine-elms", name: "Sky Gardens", developer: "Frasers Property", operator: "Individual landlords", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "~300+ units across two towers (35+ storeys). Directly opposite Nine Elms tube station. Two suspended sky gardens at 8th and 35th floors designed by Gillespies — the USP. Private gym, 24hr concierge. 1-bed from ~£2,200 pcm.",
      amenity_tier: "strong", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Completed 2018-2019. Modern specification with comfort cooling.",
        t4_1_amenity_package: "Strong — two sky gardens (8th and 35th floors) designed by Gillespies, private gym, 24hr concierge, comfort cooling.",
        t4_4_signature_arch: "The suspended communal sky gardens at 8th and 35th floor levels are architecturally distinctive — a recognisable design feature in the Nine Elms corridor.",
      },
    }),
  ],

  external_links: [
    { url: "https://en.wikipedia.org/wiki/Nine_Elms", label: "Wikipedia (Nine Elms)", type: "wikipedia", accessed_date: "2026-04-11" },
    { url: "https://www.embassygardens.com/", label: "Embassy Gardens official site", type: "developer", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default nineElms;
