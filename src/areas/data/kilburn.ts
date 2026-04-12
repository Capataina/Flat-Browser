import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const kilburn: Area = {
  id: "kilburn",
  name: "Kilburn",
  aliases: ["Kilburn High Road", "South Kilburn"],
  borough: "Camden",
  postcodes: ["NW6"],

  headline:
    "Zone 2 Jubilee + Bakerloo + Overground — three independent lines at three stations. Unity Place (RIBA London Award 2024) gives real jury architecture. The Quarters by Bravo operates here.",
  preview:
    "Kilburn has three independent rail products (Jubilee at Kilburn, Bakerloo at Kilburn Park, Overground at Kilburn High Road) giving redundancy 4/5. Unity Place won RIBA London Award 2024 — real jury signal for the South Kilburn Regeneration Programme. The Quarters by Bravo operates 82 serviced-living studios. The limitation is T1.1: Kilburn is named in the Safer Brent Partnership 2024–25 annual report as a consistent crime hotspot.",

  long_form: {
    full: "Kilburn straddles the Camden/Brent border with three stations delivering three independent rail corridors. Jubilee at Kilburn gives Canary Wharf direct in 25 minutes; Bakerloo at Kilburn Park gives Euston in 7 minutes; Overground at Kilburn High Road adds a third fallback. The South Kilburn Regeneration Programme's Unity Place (Feilden Clegg Bradley Studios + Alison Brooks Architects + Gort Scott + RM_A Architects) won the RIBA London Award 2024 for 235 social rent homes — real jury architecture. The Quarters by Bravo operates 82 serviced-living studios on Kilburn High Road. The main limitation is safety: Kilburn is named as a borough crime hotspot in Brent's own annual report.",
    history: "Kilburn High Road has rolling small-to-medium residential schemes. South Kilburn regeneration is the major programme.",
    vibe: "Diverse, high-street-led, mixed. Kilburn High Road is busy and commercially active. South Kilburn is regenerating.",
    weekday: "A Tuesday at 7pm: Kilburn High Road busy with shoppers and commuters.",
    weekend: "A Saturday: high street commercial activity. South Kilburn community life.",
    notable: "Unity Place (RIBA London Award 2024); State Kilburn (Grade II* cinema); The Quarters by Bravo; South Kilburn Regeneration.",
    croydon_comparison: "Kilburn is Zone 2 with three independent lines and real jury architecture. Connectivity is better than Croydon's but the safety profile is the trade-off.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Jubilee", type: "tube" },
      { name: "Bakerloo", type: "tube" },
      { name: "Overground", type: "overground" },
    ],
    primary_stations: [
      { name: "Kilburn", lines: ["Jubilee"], walk_minutes_from_centre: 5 },
      { name: "Kilburn Park", lines: ["Bakerloo"], walk_minutes_from_centre: 7 },
      { name: "Kilburn High Road", lines: ["Overground"], walk_minutes_from_centre: 3 },
    ],
    times_to_anchors: { city_of_london: 28, canary_wharf: 25, soho_fitzrovia: 18, kings_cross_shoreditch: 30 },
    multi_cluster_score: 3,
    redundancy_score: 4,
    notes: "Three stations, three independent lines. Redundancy 4/5. Average 25 min. T5.1 PARTIAL (2/4 ≤25). Bank and Old Street are slow.",
    sources: [],
  },
  demographics: { primary_age_cohort: "30-39", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Kilburn ward 20-39 at 36.2%. Moderate young skew. Single-occupancy 39%.", sources: [] },
  safety: { overall: "moderate", crime_vs_borough: "above", crime_vs_croydon: "similar", after_dark_assessment: "Named in Safer Brent Partnership 2024–25 annual report as a consistent crime hotspot. Knife crime and violent crime concentration identified. T1.1 marginal — leaning fail.", concerns: ["Named borough crime hotspot in Brent's own annual report", "Knife crime concentration"], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [], overall_assessment: "Limited green. No major park within easy walking distance." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "active", investment_pipeline: "South Kilburn Regeneration Programme. Unity Place delivered. Rolling small-to-medium schemes on Kilburn High Road.", recent_milestones: ["Unity Place (RIBA London Award 2024) delivered"], upcoming_milestones: [], trajectory_through_2027: "Mild ascending via South Kilburn programme.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "partial", "1.6": "pass" },
      {
        "1.1": "MARGINAL — leaning fail. Named borough crime hotspot in Brent's own annual report.",
        "1.2": "The Quarters Kilburn (Bravo) delivers modern serviced-living studios. South Kilburn new-build stock.",
        "1.3": "Jubilee + Bakerloo + Overground. Zone 2. Three independent lines.",
        "1.4": "The Quarters by Bravo operates here. Individual-landlord stock on Kilburn High Road.",
        "1.5": "Kilburn High Road is mixed quality. South Kilburn regeneration improving.",
        "1.6": "Not in decline — South Kilburn programme is ascending.",
      },
      "moderate",
      "T1 is marginal due to T1.1 safety. Connectivity is the strength.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "partial", "2.4": "partial", "2.5": "partial", "2.7": "pass" },
      {
        "2.1": "Kilburn High Road delivers complete walkable essentials.",
        "2.2": "Grocery on the high road.",
        "2.3": "The Quarters Kilburn has no gym. Local gym options present but not standout.",
        "2.4": "Limited green space. No major park within easy walking distance.",
        "2.5": "Mixed. Street noise on Kilburn High Road side. Residential streets are quieter.",
        "2.7": "Ward 20-39 at 36.2%. Moderate skew.",
      },
      "moderate",
      "T2 moderate. High road delivers essentials but green space and night quiet are weak.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "partial", "3.3": "partial", "3.4": "pass", "3.5": "pass", "3.6": "partial" },
      {
        "3.1": "South Kilburn Regeneration Programme active.",
        "3.2": "State Kilburn (Grade II* cinema). No major cultural institution.",
        "3.3": "Diverse, mixed identity. Not a unified sense of place in the way Angel or Stoke Newington are.",
        "3.4": "High road delivers 15-minute completeness.",
        "3.5": "Unity Place (RIBA London Award 2024) — real jury architecture. Feilden Clegg Bradley + Alison Brooks + Gort Scott + RM_A.",
        "3.6": "High road commercial day rhythm. Mixed evenings.",
      },
      "moderate",
      "T3 moderate overall but Unity Place gives a real architectural anchor.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "2/4 anchors ≤25 (Canary Wharf 25, TCR 18). Bank 28, Old Street 30 fail. Average 25 min.",
        "5.2": "Three independent lines at three stations. Redundancy 4/5.",
        "5.3": "Mild ascending via South Kilburn programme.",
        "5.4": "High road cafes exist but third-space culture is not standout.",
      },
      "moderate",
      "T5 moderate. Excellent redundancy but slow City/Old Street times.",
    ),
    overall_grade: "B",
    grade_reasoning: "B- — three independent lines give excellent redundancy, Unity Place gives real architecture, but T1.1 safety is the critical weakness (named borough hotspot) and journey times to the City are slow.",
  },

  projects: [
    buildProject({
      id: "quarters-kilburn", area_id: "kilburn", name: "The Quarters Kilburn", developer: "Bravo Investment House", operator: "Bravo Investment House", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "82 serviced-living studios on Kilburn High Road. Standard suite 19 sqm — smallest in the portfolio. £1,250–£1,600 pcm. HomeViews 4.72/5.00 (135 reviews). Management rated 4.9.",
      long_form_full: "The Quarters Kilburn operates 82 studios from 19 sqm (Standard) to 25 sqm (Premium) on Kilburn High Road, converted from a former stone processing factory (~2018). Indicative rent £1,250–£1,600 pcm depending on suite type — some listings advertise all bills included. Standard 6-month AST with 30-day minimum on serviced licence. No gym (unlike Swiss Cottage). HomeViews 4.72/5.00 across 135 reviews with management rated 4.9 — highest in the portfolio. Common complaints: compact rooms (19 sqm), corridor sound insulation, street noise. Common praise: management responsiveness, security, all-inclusive simplicity. Referencing is present but opaque — the operator does not publicly disclose criteria. Move-in requires reservation fee (one week's rate), reference documents within 48h, right-to-rent check, and booking monies 7 days before start (rent + utilities + 5 weeks' deposit). At least one resident reports a £400 credit check fee (2022 Trustpilot). One report of 6 months' rent in advance demanded despite references.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Modern build (~2018) but compact — 19 sqm standard is the smallest in the Quarters portfolio. Sound insulation complaints from corridor and street noise.",
        t4_1_amenity_package: "Decent — laundry, parking (limited), 24h CCTV, housekeeping. No gym, no restaurant.",
        t4_4_signature_arch: "Not signature-authored. Purpose-built serviced-living.",
      },
    }),
    buildProject({
      id: "north-west-quarter", area_id: "kilburn", name: "North West Quarter", developer: "Countryside Partnerships (Vistry) + Home Group + Brent Council", operator: "Individual landlords", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unknown",
      preview: "308 homes across phases in the heart of South Kilburn masterplan. 4-10 storeys. New medical centre, affordable workspace, gym, local shops, community space. Phase 1 complete 2022, Phase 4 launching July 2025. 1-bed from ~£1,600 pcm.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Phased delivery 2022-2025 to modern specification. Part of wider South Kilburn regeneration programme.",
        t4_1_amenity_package: "Decent — new medical centre, affordable workspace, gym, local shops, community space. Not premium residential amenities.",
        t4_4_signature_arch: "Not signature-authored. Council-led regeneration product with functional design.",
      },
    }),
    buildProject({
      id: "kilburn-quarter", area_id: "kilburn", name: "Kilburn Quarter (Bronte & Fielding House)", developer: "Brent Council", operator: "Individual landlords", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "~150 units across Bronte House and Fielding House. 6-9 storeys. Lifschutz Davidson Sandilands architects. Tenure-blind design. Part of wider South Kilburn masterplan. 1-bed from ~£1,500 pcm.",
      architects: ["Lifschutz Davidson Sandilands"],
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Completed 2021-2023. Lifschutz Davidson Sandilands design with tenure-blind approach — consistent quality across tenures.",
        t4_1_amenity_package: "Decent — landscaped grounds, play area, commercial space. Not premium residential amenities.",
        t4_4_signature_arch: "Lifschutz Davidson Sandilands — Housing Design Awards recognition. Tenure-blind design is a quality marker.",
      },
    }),
  ],

  external_links: [
    { url: "https://thequarters.co.uk/", label: "The Quarters by Bravo", type: "developer", accessed_date: "2026-04-12" },
    { url: "https://www.homeviews.com/development/the-quarters-kilburn-nw6", label: "HomeViews — The Quarters Kilburn", type: "other", accessed_date: "2026-04-12" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default kilburn;
