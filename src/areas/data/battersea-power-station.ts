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

// Battersea Power Station is its own area, distinct from Nine Elms.
// Switch House (the apartments inside the listed Power Station building)
// becomes a project nested under this area.

const batterseaPowerStation: Area = {
  id: "battersea-power-station",
  name: "Battersea Power Station",
  aliases: ["BPS", "Power Station"],
  borough: "Wandsworth",
  postcodes: ["SW11"],

  headline:
    "42 acres around a Grade II* listed industrial landmark — Apple's European HQ, Electric Boulevard retail, six-acre riverside park, and the Northern line on site.",
  preview:
    "One of the most architecturally consequential regeneration projects in Europe. Apple's European HQ in the turbine halls, Electric Boulevard with 100+ shops and restaurants, a six-acre riverside park, and the Northern line directly on site. Circus West Village is the BTR entry point; Switch House contains apartments inside the listed building itself.",

  long_form: {
    full: "Battersea Power Station is one of the most architecturally consequential regeneration projects in Europe. Apple's European HQ occupies the turbine halls, bringing 1,400 staff and a lasting commercial anchor that guarantees long-term investment in the surrounding area. Electric Boulevard runs through the spine of the masterplan with restaurants, bars, and retail across two storeys. Power Station Park provides six acres of open green space along the Thames. The Northern line's Battersea Power Station station opened in 2021 — Zone 1, direct to the West End and City. Circus West Village is the most established residential phase and the BTR entry point. Switch House East and West contain 295 apartments within the Grade II* listed building itself — architecturally extraordinary, and permanently scarce.",
    history: "The Power Station was decommissioned in 1983 and sat derelict for nearly three decades. The current development began under SP Setia, Sime Darby, and the Employees Provident Fund of Malaysia in 2012. Phase 1 (Circus West Village) opened in 2017; the restored Power Station opened to the public in 2022 with Apple's offices and the retail complex.",
    vibe: "BPS feels destination-led in a way no other entry on this list does. The retail and food offering is genuinely one of the better experiences in the city, the public realm is generous, and the Power Station building itself is architecturally extraordinary. The crowd is mixed — visitors come from across London, and the resident profile is more affluent than most BTR areas.",
    weekday: "A Tuesday at 7pm: the retail core is busy with after-work shoppers and diners; the riverside walk is populated; the Power Station's chimneys are lit up against the sky.",
    weekend: "A Saturday at midday: Electric Boulevard is at peak weekend foot traffic; the Power Station event programming is active; the riverside walk reaches BPS event-day capacity.",
    notable: "Apple's European HQ in the turbine halls. Frank Gehry's residential blocks. Foster + Partners' contributions. The chimneys themselves. Switch House (apartments inside the listed building).",
    croydon_comparison:
      "BPS is a prestige destination address with a level of architectural and cultural identity that has no equivalent in Croydon. The premium is real but the upgrade is unambiguous.",
  },

  zones: ["Zone 1"],
  connectivity: {
    lines: [
      { name: "Northern", type: "tube" },
    ],
    primary_stations: [
      { name: "Battersea Power Station", lines: ["Northern"], walk_minutes_from_centre: 2 },
    ],
    times_to_anchors: {
      city_of_london: 22,
      canary_wharf: 33,
      soho_fitzrovia: 16,
      kings_cross_shoreditch: 22,
    },
    multi_cluster_score: 2,
    redundancy_score: 1,
    notes: "Single-line dependency on the Northern Line extension. The headline transport weakness — same as Nine Elms.",
    sources: [],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [],
    ethnic_composition: [],
    household_mix: [],
    student_pct: 4,
    professional_renter_pct: 55,
    notes: "Affluent professional renter and owner mix. Apple's HQ presence skews the local working population toward 30-something tech professionals.",
    sources: [],
  },
  safety: {
    overall: "very-safe",
    crime_vs_borough: "below",
    crime_vs_croydon: "much-safer",
    after_dark_assessment: "Very safe. Heavy footfall around the retail core and Apple campus. The riverside walk is well-lit.",
    concerns: [],
    sources: [],
  },
  green_and_water: {
    has_river: true,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Power Station Park", size_acres: 6, walk_minutes: 2, notes: "Riverside park integrated into the masterplan" },
      { name: "Battersea Park", size_acres: 200, walk_minutes: 12, notes: "Major Royal Park" },
    ],
    overall_assessment: "Riverside identity plus a dedicated 6-acre park inside the masterplan. Strong on T2.4.",
  },
  amenities: {
    grocery: [],
    gyms: [],
    food_and_drink: [],
    health: [],
    cultural: [],
    notes: "Not yet populated. Known: Electric Boulevard retail (100+ tenants), multiple food destinations, Power Station event programming, Apple offices.",
  },
  regeneration: {
    status: "phased",
    investment_pipeline: "Phase 3 and beyond still in delivery. Final phases through 2027+.",
    recent_milestones: ["Power Station building opened 2022", "Apple HQ occupied", "Electric Boulevard tenanted", "Northern Line station opened 2021"],
    upcoming_milestones: ["Battersea Roof Gardens phase", "Final residential phases through 2027"],
    trajectory_through_2027:
      "BPS will be substantially complete by 2027 with the masterplan reaching its full residential capacity. At peak rather than ascending sharply, but the area will continue to mature.",
    sources: [],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Very-safe rating with Wandsworth crime below borough average and heavy footfall across the Apple campus and retail core; the riverside walk is well-lit and the streets around the listed building are actively stewarded.",
        "1.2": "Purpose-built modern stock end to end — Circus West Village, Switch House East and West, Prospect Place, Koa at Electric Boulevard. No pre-war stock within the masterplan.",
        "1.3": "Northern Line extension at Battersea Power Station station (Zone 1) puts the West End at 16 minutes and the City at 22. Single-line but genuinely fast to central London clusters.",
        "1.4": "BPS Lettings operates the residential stock under a single managed umbrella across multiple buildings with corporate referencing — the canonical active professional rental market for SW11.",
        "1.5": "Recently built and actively maintained by BPSDC's stewardship contract. The public realm around the listed building, Electric Boulevard, and Power Station Park is among the best-maintained in SW London.",
        "1.6": "Trajectory is ascending through 2027 with Battersea Roof Gardens and the final residential phases still delivering. Apple's HQ tenancy structurally underwrites long-term investment.",
      },
      "strong",
      "T1 maximally strong. Every row clean.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Electric Boulevard's 100+ tenants include supermarket, pharmacy, cafes, and restaurants all within the masterplan footprint. The 15-minute neighbourhood is genuinely delivered.",
        "2.2": "Electric Boulevard contains premium grocery and multiple food destinations within 5 minutes; the retail density exceeds what Nine Elms currently offers.",
        "2.3": "Multiple gyms are either integrated into the residential buildings or operate in the Electric Boulevard retail layer, with further commercial options walkable toward Battersea Park.",
        "2.4": "Power Station Park provides 6 acres of riverside green space inside the masterplan, with Thames frontage on the northern edge and 200-acre Battersea Park within 12 minutes walk.",
        "2.5": "Residential streets are calm after 10pm; the retail core winds down reliably and the financial-district dead-night problem does not apply here because this is genuinely residential-led.",
        "2.7": "Primary age cohort is 30-39 but the Apple tech workforce and the BTR units at Circus West and Koa keep the everyday presence skewed young-professional rather than family-dominant.",
      },
      "strong",
      "Strong on every T2 row. The Electric Boulevard retail densifies the everyday amenity layer in a way Nine Elms hasn't yet matched.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "pass", "3.6": "pass" },
      {
        "3.1": "Masterplan is phased — Battersea Roof Gardens and the final residential phases are still under delivery through 2027, and BPSDC continues to invest in the public realm.",
        "3.2": "Two overlapping anchors: the Grade II* listed Power Station itself plus Apple's European HQ in the turbine halls. Few areas in London carry a more recognisable cultural and commercial magnet.",
        "3.3": "'Battersea Power Station' is one of the most instantly recognisable place names in London — the chimneys are on postcards globally and the mental image is uniquely strong.",
        "3.4": "The 42-acre masterplan contains supermarket, retail, restaurants, gyms, healthcare, park and transport inside a walkable footprint. One of the purest 15-minute neighbourhoods in the dataset.",
        "3.5": "Architectural quality is exceptional — the restored Power Station plus Frank Gehry's Prospect Place blocks plus Foster + Partners' contributions produce a coherent and intentional place.",
        "3.6": "Electric Boulevard, the Power Station event programming, and the residential density keep the area alive both during the day and into the evening. Not a financial ghost town.",
      },
      "strong",
      "BPS is one of the strongest T3 entries in the dataset. The architectural identity (Power Station + Frank Gehry + Foster contributions) plus the cultural anchor (Apple) plus the destination quality (Electric Boulevard) make this almost as strong as King's Cross on identity.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "fail", "5.3": "partial", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score of 2/5 — the Northern Line reaches the City and Soho/Fitzrovia cleanly but Canary Wharf is 33 minutes and the route to KX/Shoreditch is indirect.",
        "5.2": "Single-line dependency on Northern Line extension — same weakness as Nine Elms. Redundancy score 1/5; a line failure strands the area.",
        "5.3": "BPS is approaching peak rather than ascending sharply — the masterplan will be substantially complete by 2027 with only the final residential phases and Roof Gardens remaining.",
        "5.4": "Electric Boulevard is retail-heavy rather than quiet-third-space-heavy; no significant bookshop or library culture within the masterplan footprint.",
      },
      "moderate",
      "T5 is the weakest tier. Northern Line single-point-of-failure is the headline issue.",
    ),
    overall_grade: "A",
    grade_reasoning:
      "Battersea Power Station earns A on the strength of T1, T2, and T3 (the latter being exceptional). The transport redundancy weakness in T5 is the only meaningful blocker to S grade. For a grad-visa renter at Circus West Village pricing it's reachable; the Switch House apartments are aspirational only.",
  },

  // ── RESEARCH: Battersea Power Station projects ──────────────────────
  // Operator: BPS Lettings / BPS Estates (Battersea Power Station Development Company)
  // Referencing: unknown (not publicly documented)
  // Agreement type: ast (standard BTR for Circus West/Koa; ownership-led for Switch House)
  // International friendly: unknown
  // Visa friendly: unknown
  // Professional guarantor: unknown
  // Open Banking: false (no Homeppl confirmation)
  // Prices (from Rightmove/Zoopla 2025):
  //   Koa at Electric Boulevard: 1-bed from ~£4,333–£4,750 pcm, 2-bed ~£8,950 pcm
  //   Circus West: 1-bed estimated ~£3,000–£4,000 pcm (premium Zone 1)
  // Cost tier: luxury (Koa/Switch House), premium (Circus West)
  // Grad visa realism: unlikely (premium pricing, opaque referencing)
  // Switch House / Sky Villas / Parkside: blocked (buy-only or ultra-premium)
  // ───────────────────────────────────────────────────────────────────────

  projects: [
    buildProject({
      id: "circus-west-village",
      area_id: "battersea-power-station",
      name: "Circus West Village",
      developer: "Battersea Power Station Development Company",
      operator: "BPS Lettings",
      building_type: "BTR",
      build_phase: "complete",
      tenure: ["rent", "buy"],
      realism: "unknown",
      preview: "Most established BTR phase. Halliday House, Faraday House. River views, roof terrace, concierge. Best entry price into the masterplan.",
      amenity_tier: "premium",
      overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Purpose-built modern BTR stock, BPSDC-managed, with professional maintenance. Halliday and Faraday were early phase 1 deliveries and set the quality baseline for the masterplan.",
        t4_1_amenity_package: "Concierge, roof terrace, river views, and access to the wider masterplan's retail — full premium package though not the absolute flagship tier of Prospect Place.",
        t4_4_signature_arch: "Not architecturally signature — functional premium residential rather than Pritzker-level. The signature work at BPS sits in Prospect Place and Switch House.",
      },
    }),
    buildProject({
      id: "battersea-roof-gardens",
      area_id: "battersea-power-station",
      name: "Battersea Roof Gardens (Phase 3)",
      developer: "BPSDC",
      operator: "BPS Lettings",
      building_type: "Mixed",
      build_phase: "in_delivery",
      tenure: ["rent", "buy"],
      realism: "unlikely",
      preview: "636 homes. Every apartment has a winter garden or terrace. Residents' lounges, gym, healthcare facility on-site.",
      amenity_tier: "premium",
      overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Currently in delivery as Phase 3 to the most recent BPSDC specification — winter gardens or terraces on every apartment and full modern building services.",
        t4_1_amenity_package: "Residents' lounges, gym, and an on-site healthcare facility integrated into the building — among the most complete premium amenity packages in the masterplan.",
        t4_4_signature_arch: "Distinctive winter-garden fenestration but not named-architect signature work.",
      },
    }),
    buildProject({
      id: "prospect-place",
      area_id: "battersea-power-station",
      name: "Prospect Place",
      developer: "BPSDC",
      operator: "BPS Lettings",
      building_type: "Mixed",
      build_phase: "complete",
      tenure: ["rent", "buy"],
      realism: "unlikely",
      preview: "Riverside Gehry Partners phase. More accessible entry point than the landmark building while still inside the same destination masterplan.",
      amenity_tier: "premium",
      is_signature: true,
      architects: ["Frank Gehry"],
      overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Gehry Partners-designed to BPSDC's highest residential specification. Modern building services, river-facing layouts, and the distinctive flower-form geometry that Gehry is known for.",
        t4_1_amenity_package: "Full premium package shared with the wider masterplan — concierge, lounges, and gym access alongside direct Power Station Park frontage.",
        t4_4_signature_arch: "Frank Gehry is a Pritzker-winning architect and Prospect Place is the residential expression of his riverside contribution to the masterplan. Unambiguous signature credential.",
      },
    }),
    buildProject({
      id: "koa-electric-boulevard",
      area_id: "battersea-power-station",
      name: "Koa at Electric Boulevard",
      developer: "BPSDC",
      operator: "BPS Lettings",
      building_type: "BTR",
      build_phase: "complete",
      tenure: ["rent"],
      realism: "unknown",
      preview: "Build-to-rent product at the station end of the scheme. Concierge, lounge, gym, and the cleanest route into the newer Electric Boulevard side of the district.",
      amenity_tier: "premium",
      overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Recently completed BTR to current BPSDC specification. Professional Lettings management, modern services, strong layouts.",
        t4_1_amenity_package: "Concierge, lounge, and gym on-site with direct Electric Boulevard retail integration underneath.",
        t4_4_signature_arch: "Not signature — functional modern BTR within the masterplan.",
      },
    }),
    buildProject({
      id: "parkside-collection",
      area_id: "battersea-power-station",
      name: "Parkside Collection",
      developer: "BPSDC",
      operator: "BPS Lettings",
      building_type: "Owner-Lease",
      build_phase: "complete",
      tenure: ["buy"],
      realism: "blocked",
      preview: "Smaller premium collection overlooking Power Station Park. Quieter positioning while keeping the same address prestige.",
      amenity_tier: "premium",
      overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Premium specification, park-facing layouts, built to BPSDC's full residential standard.",
        t4_1_amenity_package: "Full masterplan amenity access plus park frontage; less flagship than Switch House but still premium overall.",
        t4_4_signature_arch: "Not signature-authored — quiet premium rather than named-architect work.",
      },
    }),
    buildProject({
      id: "switch-house-east",
      area_id: "battersea-power-station",
      name: "Switch House East",
      developer: "BPSDC",
      operator: "BPS Lettings",
      building_type: "Owner-Lease",
      build_phase: "complete",
      tenure: ["rent", "buy"],
      realism: "blocked",
      preview: "Apartments within the Grade II* listed Power Station. River-facing. The most dramatic residential addresses in SW London.",
      amenity_tier: "premium",
      is_signature: true,
      overall_grade: "S",
      evaluation_reasoning: {
        t2_6_building_quality: "Apartments carved into the Grade II* listed Power Station under WilkinsonEyre's restoration supervision. Building services had to meet modern standards within a heritage envelope.",
        t4_1_amenity_package: "Full premium package with direct access to the Power Station's retail, restaurants, and event programming — as close to living inside a destination as the dataset offers.",
        t4_4_signature_arch: "Residences within a Grade II* listed industrial landmark restored by WilkinsonEyre. Permanently scarce signature address — there are no more of these.",
      },
    }),
    buildProject({
      id: "switch-house-west",
      area_id: "battersea-power-station",
      name: "Switch House West",
      developer: "BPSDC",
      operator: "BPS Lettings",
      building_type: "Owner-Lease",
      build_phase: "complete",
      tenure: ["rent", "buy"],
      realism: "blocked",
      preview: "Larger apartments within the Power Station. Some of the most substantial riverside spaces in SW8.",
      amenity_tier: "premium",
      is_signature: true,
      overall_grade: "S",
      evaluation_reasoning: {
        t2_6_building_quality: "Larger floor-plates inside the listed Power Station, WilkinsonEyre-led heritage restoration with modern building services.",
        t4_1_amenity_package: "Full masterplan amenity access plus the building's own services; among the most complete offers in SW8.",
        t4_4_signature_arch: "Same Grade II* listed landmark, same WilkinsonEyre restoration — signature by definition.",
      },
    }),
    buildProject({
      id: "sky-villas",
      area_id: "battersea-power-station",
      name: "Sky Villas at Battersea Power Station",
      developer: "BPSDC",
      operator: "BPS Lettings",
      building_type: "Owner-Lease",
      build_phase: "complete",
      tenure: ["buy"],
      realism: "blocked",
      preview: "Ultra-limited upper-tier homes carved into the landmark itself. The trophy subset within an already scarce ownership address.",
      amenity_tier: "premium",
      is_signature: true,
      overall_grade: "S",
      evaluation_reasoning: {
        t2_6_building_quality: "Upper-tier apartments at the top of the restored Power Station. Bespoke specification with panoramic views; heritage envelope required custom modern building services.",
        t4_1_amenity_package: "Trophy-level amenity access with private services layered onto the shared masterplan package.",
        t4_4_signature_arch: "The upper-floor residences within the Grade II* listed Power Station — about as signature as residential architecture gets in SW London.",
      },
    }),
  ],

  external_links: [
    { url: "https://batterseapowerstation.co.uk/", label: "Battersea Power Station official", type: "developer", accessed_date: "2026-04-11" },
    { url: "https://en.wikipedia.org/wiki/Battersea_Power_Station", label: "Wikipedia", type: "wikipedia", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default batterseaPowerStation;
