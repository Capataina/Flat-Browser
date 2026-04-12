import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const wapping: Area = {
  id: "wapping",
  name: "Wapping",
  aliases: ["St Katharine's & Wapping", "Hermitage Basin"],
  borough: "Tower Hamlets",
  postcodes: ["E1W"],

  headline:
    "Riverside Zone 1 calm with strong safety profile — but single Overground line (1/5 redundancy) is the structural weakness. Thames Clipper adds a real river fallback.",
  preview:
    "Wapping is a quiet riverside area in Tower Hamlets with a clean T1.1 safety pass — one of the safest wards in the borough. 50% aged 20-39 with very few children. The single Overground line (Windrush) gives only 1/5 redundancy, making T1.3 the thinnest case in the candidate list. DLR at Shadwell is an 8-minute walk. Thames Clipper at Wapping adds a genuine river fallback.",

  long_form: {
    full: "Wapping is a quiet, riverside area in Tower Hamlets that delivers a safety profile and residential calm that is unusually strong for the borough. The St Katharine's & Wapping ward has 50% aged 20-39 with very few children — a young-professional enclave. Wapping Wharf, Hermitage Basin conversions, and newer Bellway/Berkeley infill provide modern stock. The structural weakness is transport: Overground only (Wapping station on the East London Line/Overground Windrush) with a longer walk to Shadwell DLR. This gives the thinnest T1.3 case in the candidate list. Thames Clipper at Hermitage/Wapping Pier is a genuine river fallback. The area is characterful — Thames riverside walks, warehouse conversions, the old Wapping Wall — with a quieter, more residential feel than neighbouring Whitechapel or Shadwell.",
    history: "Historic riverside docklands. Wapping Wall and warehouse conversions preserve the maritime character. Execution Dock historical site. Captain Kidd pub.",
    vibe: "Quiet, riverside, residential. Warehouse conversions and modern infill. Very different character from the busy East End streets to the north.",
    weekday: "A Tuesday at 7pm: quiet riverside walks; pubs (Captain Kidd, Town of Ramsgate) with evening trade; residential calm.",
    weekend: "A Saturday: Thames Path walkers; Wapping farmers' market; riverside pub garden trade in summer.",
    notable: "Thames riverside walks; Wapping Wall warehouse conversions; Captain Kidd pub; Hermitage Basin; Thames Clipper pier.",
    croydon_comparison: "Wapping offers Thames-side Zone 1 residential calm at a mid-market price point. The transport trade-off (single Overground) is weaker than Croydon's mainline rail, but the riverside amenity and safety profile are categorically stronger.",
  },

  zones: ["Zone 1"],
  connectivity: {
    lines: [
      { name: "Overground (Windrush)", type: "overground" },
    ],
    primary_stations: [
      { name: "Wapping", lines: ["Overground (Windrush)"], walk_minutes_from_centre: 5 },
      { name: "Shadwell", lines: ["DLR", "Overground"], walk_minutes_from_centre: 12 },
    ],
    times_to_anchors: { city_of_london: 12, canary_wharf: 12, soho_fitzrovia: 22, kings_cross_shoreditch: 16 },
    multi_cluster_score: 2,
    redundancy_score: 1,
    notes: "Single Overground line at Wapping. DLR at Shadwell is 8-min walk for some addresses. Thames Clipper adds a real river fallback. T1.3 partial — single line, multi-hub. T5.1 pass (4/4 under 25, borderline on TCR). T5.2 fail (single-line). 15.5-min average.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Census 2021: St Katharine's & Wapping ward 20-39 at 50%. Under-20 only 15% (very few children). Average age 34, median 32. Strong young-skew — top-skew.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "below", crime_vs_croydon: "much-safer", after_dark_assessment: "Clean T1.1 pass — strong pass. One of the safest wards in Tower Hamlets. Met Police St Katharine's & Wapping SNT page confirms.", concerns: [], sources: [] },
  green_and_water: { has_river: true, has_canal: false, has_dock: true, parks: [], overall_assessment: "Thames riverside frontage. Hermitage Basin dock. The river is the primary amenity. Limited parkland but the Thames Path and riverside walks compensate." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "active", investment_pipeline: "Modern infill by Bellway, Berkeley, and others. No single flagship masterplan.", recent_milestones: [], upcoming_milestones: [], trajectory_through_2027: "Stable. Established riverside residential rather than active regeneration zone.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "partial", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Strong pass — one of the safest wards in Tower Hamlets.",
        "1.2": "Modern riverside stock — Wapping Wharf, Hermitage Basin conversions, newer Bellway/Berkeley infill.",
        "1.3": "Thinnest T1.3 case in the candidate list. Overground only. DLR at Shadwell is a walk. Not a fail but weak.",
        "1.4": "Active professional rental market.",
        "1.5": "Riverside public realm in good order. Warehouse conversions well-maintained.",
        "1.6": "Not in decline — stable established residential area.",
      },
      "good",
      "T1 good — clean safety pass, modern stock, but T1.3 is the structural weakness (single Overground).",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "partial", "2.2": "partial", "2.3": "unknown", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Walkable essentials are present but the area is residential rather than high-street. Thinner retail than Whitechapel or Bethnal Green.",
        "2.2": "Grocery access is partial — convenience stores present, no major supermarket in immediate area.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Thames riverside is the primary amenity. Hermitage Basin dock. Strong water access.",
        "2.5": "Very quiet at night. Residential riverside calm.",
        "2.7": "Census 2021: 50% aged 20-39. Top-skew with very few children.",
      },
      "moderate",
      "T2 moderate — excellent riverside and night calm, strong demographics, but everyday retail is thin.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "partial", "3.3": "pass", "3.4": "partial", "3.5": "pass", "3.6": "partial" },
      {
        "3.1": "Stable rather than active regeneration. Modern infill continuing but no flagship masterplan.",
        "3.2": "No major cultural anchor. Riverside pubs (Captain Kidd, Town of Ramsgate) and warehouse character are the draw.",
        "3.3": "Distinctive riverside sense of place — warehouse conversions, Wapping Wall, Thames frontage. Recognisable character.",
        "3.4": "15-minute completeness partial — transport is weak, retail thin, but waterfront and residential calm are strong.",
        "3.5": "Warehouse conversions give genuine architectural character. Riverside setting is visually strong.",
        "3.6": "Day/night rhythm is quiet — riverside walks daytime, pub trade evening, very quiet late night.",
      },
      "moderate",
      "T3 moderate — distinctive riverside character but no strong cultural anchor or active regeneration.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "fail", "5.3": "partial", "5.4": "pass" },
      {
        "5.1": "All four anchors under 25 minutes (TCR borderline at 22). 15.5-min average. Pass.",
        "5.2": "Single Overground line — 1/5 redundancy. Structural weakness. Thames Clipper is a genuine fallback but not a train.",
        "5.3": "Stable rather than ascending — established area.",
        "5.4": "Riverside walks, warehouse-conversion pubs, quiet residential character — good third-space quality.",
      },
      "moderate",
      "T5 moderate — times are adequate but single-line dependency is a serious constraint.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — strong safety (one of safest in Tower Hamlets), distinctive riverside character, top-skew demographics. Single-line transport dependency (T5.2 fail, T1.3 partial) is the structural weakness that prevents a higher grade. A quiet, safe riverside base rather than a connected hub.",
  },

  projects: [
    // RESEARCH: London Dock — St George (Berkeley). 2,038 homes phased. Jade Wharf latest phase Q4 2026.
    // Premium pricing — 1-beds from ~£2,400 pcm (per preview). Individual landlord rental.
    // Cinema, spa, gym, squash, virtual golf, 24hr concierge.
    // AGREEMENT: ast (individual landlord)
    // REFERENCING: unknown (individual landlord via agents)
    // REALISM: unknown — premium pricing, individual landlord standard referencing
    // COST_TIER: premium (1-beds from ~£2,400)
    buildProject({
      id: "london-dock",
      area_id: "wapping",
      name: "London Dock",
      developer: "St George (Berkeley Group)",
      operator: "Various agents",
      building_type: "Build-to-Sell",
      build_phase: "phased",
      tenure: ["rent", "buy"],
      realism: "unknown",
      preview: "Wapping's largest development — 2,038 homes (up to 24 storeys). Private cinema, spa, gym, squash court, virtual golf, 24-hour concierge. Premium pricing — 1-beds from approx. £2,400 pcm.",
      amenity_tier: "premium",
      overall_grade: "A",
      architects: ["Patel Taylor"],
      evaluation_reasoning: {
        t2_6_building_quality: "Berkeley Group (St George) delivery — premium specification across phased build-out from 2017 onwards. Jade Wharf (latest phase) in delivery.",
        t4_1_amenity_package: "Premium — private cinema, spa, gym suite, squash court, virtual golf course, 24-hour concierge, private gardens.",
        t4_4_signature_arch: "Patel Taylor masterplan — respected practice. Not Pritzker-tier but professional.",
      },
    }),
    // RESEARCH: 21 Wapping Lane — Ballymore, 379 homes. Individual landlord rental.
    // REALISM: unknown — individual landlord
    // COST_TIER: premium (estimated for Ballymore Wapping)
    buildProject({
      id: "21-wapping-lane",
      area_id: "wapping",
      name: "21 Wapping Lane",
      developer: "Ballymore Group",
      operator: "Various agents",
      building_type: "Mixed",
      build_phase: "complete",
      tenure: ["rent", "buy"],
      realism: "unknown",
      preview: "379 homes across five buildings (tallest 18 storeys) opposite Tobacco Dock. 24-hour concierge, gym, spa pool, cinema room, library, health club, restaurant, bar. Rental through individual landlords.",
      amenity_tier: "premium",
      overall_grade: "A",
      architects: ["Studio PDP (Patel Taylor)"],
      evaluation_reasoning: {
        t2_6_building_quality: "Ballymore development quality — first new-build in Wapping in over a decade when completed. Strong build specification.",
        t4_1_amenity_package: "Premium — 24-hour concierge, communal gardens, gym, spa pool, cinema room, library, health club, restaurant, bar.",
        t4_4_signature_arch: "Studio PDP (Patel Taylor) — respected practice. Not Pritzker-tier but professional.",
      },
    }),
    // RESEARCH: Sovereign Court — MHA London single-operator PRS. 124 units.
    // Closest to BTR in Wapping. 24/7 concierge, 2-hourly security.
    // AGREEMENT: ast (single-operator PRS)
    // REFERENCING: unknown (MHA London in-house)
    // REALISM: unknown — MHA London referencing not documented
    // COST_TIER: premium (estimated for Wapping PRS)
    buildProject({
      id: "sovereign-court",
      area_id: "wapping",
      name: "Sovereign Court",
      developer: "MHA London",
      operator: "MHA London",
      building_type: "PRS",
      build_phase: "complete",
      tenure: ["rent"],
      realism: "unknown",
      preview: "124-unit single-operator PRS near Tobacco Dock. The closest thing to BTR in Wapping. 24/7 concierge, communal gardens, 2-hourly security surveillance. Near Shadwell DLR/Overground.",
      amenity_tier: "decent",
      overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Converted neo-Georgian building with single-operator MHA London management — functional quality.",
        t4_1_amenity_package: "Decent — 24/7 concierge, resident parking, bicycle storage, communal gardens, regular window cleaning, 2-hourly security surveillance.",
        t4_4_signature_arch: "Not signature-authored — neo-Georgian conversion.",
      },
    }),
    // RESEARCH: Wapping Riverside — Galliard, 37-unit boutique Grade II conversion. Very limited rental.
    // REALISM: unknown — individual landlord, very limited availability
    // COST_TIER: luxury (estimated for boutique Thames-side conversion)
    buildProject({
      id: "wapping-riverside",
      area_id: "wapping",
      name: "Wapping Riverside",
      developer: "Galliard Homes",
      operator: "Various agents",
      building_type: "Build-to-Sell",
      build_phase: "complete",
      tenure: ["rent", "buy"],
      realism: "unknown",
      preview: "37-unit boutique Grade II listed warehouse conversion on the Thames within Wapping Wall Conservation Area. Views towards Canary Wharf. Premium pricing, very limited rental availability.",
      amenity_tier: "basic",
      overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Galliard Homes warehouse conversion — premium boutique quality with exposed brick and Thames-side character.",
        t4_1_amenity_package: "Basic — Thames-side setting is the amenity. No premium gym/pool stack. Only 37 units.",
        t4_4_signature_arch: "Grade II listed warehouse conversion — heritage character rather than signature contemporary.",
      },
    }),
    // RESEARCH: Royal Mint Gardens — IJM Land, 3-block development near Tower Hill.
    // Pool, jacuzzi, gym, cinema. Individual landlord rental.
    // REALISM: unknown — individual landlord
    // COST_TIER: premium (estimated)
    buildProject({
      id: "royal-mint-gardens",
      area_id: "wapping",
      name: "Royal Mint Gardens",
      developer: "IJM Land Berhad",
      operator: "Various agents",
      building_type: "Build-to-Sell",
      build_phase: "complete",
      tenure: ["rent", "buy"],
      realism: "unknown",
      preview: "Three-block development near Tower Hill (Wapping/Tower Hill border). Swimming pool, jacuzzi, gym, private cinema. Adjacent to the Tower of London.",
      amenity_tier: "premium",
      overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "IJM Land delivery, completed 2019-2020. Modern build quality at the premium end of the Wapping corridor.",
        t4_1_amenity_package: "Premium — swimming pool, jacuzzi, gym, private cinema.",
        t4_4_signature_arch: "Not confirmed as named-architect signature work.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default wapping;
