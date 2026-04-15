import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const dolphinSquare = buildProject({
  id: "dolphin-square", area_id: "pimlico", name: "Dolphin Square", developer: "Delancey", operator: "Dolphin Living", building_type: "PRS", build_phase: "phased", tenure: ["rent"], realism: "unknown",
  preview: "1930s residential mansion block complex being progressively refurbished by Delancey. Dolphin Living operates as charitable managed rental. Highest-priority project discovery in the sweep.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "1930s mansion block heritage with ongoing Delancey refurbishment. Quality depends on which phase.",
    t4_1_amenity_package: "Strong — pool, gym, gardens, restaurant. Full mansion-block amenity stack.",
    t4_4_signature_arch: "1930s heritage — not jury-architecture but architecturally significant.",
  },
});
dolphinSquare.external_links = [
  { url: "https://www.dolphinsquare.co.uk/", label: "Dolphin Square — Flats to Rent", type: "operator", accessed_date: "2026-04-12" },
  { url: "https://www.dolphinsquare.co.uk/apartments", label: "Dolphin Square — Apartments", type: "operator", accessed_date: "2026-04-12" },
];
dolphinSquare.rental.price_transparency = "listed";

const chapterStreet = buildProject({
  id: "26-chapter-street", area_id: "pimlico", name: "26 Chapter Street", developer: "Barratt London", operator: "Individual landlords", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "~50-unit Barratt London scheme in Westminster conservation area. 6-7 storeys. Steps from Pimlico and Victoria tube stations. Fitness centre, rooftop terrace, concierge. 1-bed from ~£2,400 pcm.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Barratt London delivery completed 2024. Luxury finishes in conservation area context.",
    t4_1_amenity_package: "Decent — fitness centre, rooftop terrace, concierge. Not flagship-level.",
    t4_4_signature_arch: "Not signature-authored. Conservation-area-sensitive Barratt product.",
  },
});
chapterStreet.external_links = [
  { url: "https://26chapterstreet.uk/", label: "26 Chapter Street official site", type: "developer", accessed_date: "2026-04-12" },
];

const dolphinHousePimlico = buildProject({
  id: "dolphin-house-pimlico", area_id: "pimlico", name: "Dolphin House Serviced Apartments", developer: "Dolphin Square Foundation", operator: "Dolphin Square", building_type: "BTR", living_model: "serviced-apartment", build_phase: "complete", tenure: ["rent"], realism: "licence-exempt",
  preview: "Serviced apartments at Dolphin Square, Chichester Street, SW1V. All-inclusive — utilities, Wi-Fi, weekly housekeeping. Swimming pool, gym, bar, restaurant, 3.5 acres private gardens, 24h security. Licence agreement.",
  amenity_tier: "premium", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Heritage building, well-maintained. Premium positioning.",
    t4_1_amenity_package: "Premium — swimming pool, gym, bar, restaurant, 3.5 acres private gardens, 24h security.",
    t4_4_signature_arch: "Heritage Art Deco building — architectural landmark.",
  },
});
dolphinHousePimlico.external_links = [
  { url: "https://www.dolphinsquare.co.uk/Dolphin-House-serviced-apartments", label: "Dolphin House Serviced Apartments", type: "operator", accessed_date: "2026-04-15" },
];
dolphinHousePimlico.rental.price_transparency = "enquire";

const pimlico: Area = {
  id: "pimlico",
  name: "Pimlico",
  aliases: ["Pimlico Village"],
  borough: "City of Westminster",
  postcodes: ["SW1V"],

  headline:
    "Zone 1 Victoria Line — Regency stucco grid, Tate Britain, Thames riverside. 13 min to Bank, 7 to Tottenham Court Road. Premium residential, single-line dependent.",
  preview:
    "Pimlico is the Regency-stucco grid south of Victoria with Tate Britain, Thames riverside, and Dolphin Square. Victoria Line delivers Bank in 13 minutes and TCR in 7. The area is safe, architecturally coherent, and premium-quiet. The limitation is single-line dependency (Victoria only, T5.2 FAIL) and no BTR operator — rental is individual-landlord in a premium market.",

  long_form: {
    full: "Pimlico is Thomas Cubitt's Grosvenor Estate development — a Regency-stucco residential grid between Victoria and the Thames. Tate Britain anchors the cultural identity. The Dolphin Square redevelopment (Delancey) is the largest recent regeneration story. Ebury Bridge Estate (Westminster City Council) is a major adjacent regeneration. The area is among the calmest premium-central-London wards with very low violent-crime residential experience. The limitation is single-line dependency: Victoria Line only at Pimlico station, with Victoria mainline interchange an 8-minute walk.",
    history: "Thomas Cubitt's Grosvenor Estate development. The Regency stucco grid is one of London's most architecturally coherent conservation areas. Dolphin Square was built in the 1930s as a residential mansion block complex.",
    vibe: "Quiet, architecturally coherent, premium, slightly sleepy. Settled residential rhythm. Tate Britain anchors weekend cultural life.",
    weekday: "A Tuesday at 7pm: very quiet residential streets. Victoria station nearby is busy but Pimlico itself is calm.",
    weekend: "A Saturday: Tate Britain visitors. Thames riverside walkers. Pimlico Road antiques and food shops.",
    notable: "Tate Britain; Dolphin Square; Regency stucco grid (Thomas Cubitt / Grosvenor Estate); Thames riverside; Ebury Bridge regeneration.",
    croydon_comparison: "Pimlico is Zone 1 premium at a price point incomparable to Croydon. The trade-off is single-line dependency and no BTR operator — this is individual-landlord premium rental territory.",
  },

  zones: ["Zone 1"],
  connectivity: {
    lines: [
      { name: "Victoria", type: "tube" },
    ],
    primary_stations: [
      { name: "Pimlico", lines: ["Victoria"], walk_minutes_from_centre: 5 },
    ],
    times_to_anchors: { city_of_london: 13, canary_wharf: 18, soho_fitzrovia: 7, kings_cross_shoreditch: 14 },
    multi_cluster_score: 4,
    redundancy_score: 1,
    notes: "Single Victoria Line station. Victoria mainline/tube interchange is 8 min walk. T5.2 FAIL. Average 13 min — great times, single-line dependency.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Pimlico North ward 20-39 at 41%. Solid young skew despite older-skewing premium residential character. Under 20 only 13% — very few children.", sources: [] },
  safety: { overall: "very-safe", crime_vs_borough: "below", crime_vs_croydon: "much-safer", after_dark_assessment: "Very safe. Among the calmest premium-central-London wards. Westminster borough headline (~350/1k) heavily inflated by tourist areas; Pimlico residential grid is very low violent-crime.", concerns: [], sources: [] },
  green_and_water: { has_river: true, has_canal: false, has_dock: false, parks: [{ name: "Thames riverside / Chelsea Embankment", walk_minutes: 8, notes: "River frontage" }, { name: "Vincent Square", walk_minutes: 5, notes: "Westminster School playing fields, open square" }], overall_assessment: "Moderate green + river. Thames frontage is real but not a park. Vincent Square provides open space." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "active", investment_pipeline: "Dolphin Square (Delancey) long-horizon refurbishment. Ebury Bridge Estate (Westminster) major adjacent regeneration.", recent_milestones: ["Dolphin Square phases ongoing"], upcoming_milestones: ["Ebury Bridge delivery 2027 window"], trajectory_through_2027: "Ascending via Ebury Bridge and Dolphin Square, though Dolphin Square phase-specific dates are uncertain.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "partial", "1.3": "pass", "1.4": "partial", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Pass with high confidence. Very safe premium residential.",
        "1.2": "Structurally thin on modern rental stock. Mostly pre-war conversions. Dolphin Square is 1930s mansion block.",
        "1.3": "Victoria Line at Pimlico. Zone 1. 13 min to Bank, 7 to TCR.",
        "1.4": "No BTR operator. Individual-landlord rental in premium market. Dolphin Living (charitable managed rental) at Dolphin Square is the highest-priority project discovery.",
        "1.5": "Conservation area in excellent order. Regency stucco grid well-maintained.",
        "1.6": "Not in decline. Ebury Bridge and Dolphin Square regeneration active.",
      },
      "moderate",
      "T1 mostly passes but T1.2 modern stock is thin and T1.4 no BTR operator.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "partial", "2.4": "partial", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Pimlico Road and surrounding streets have walkable essentials. Victoria station retail nearby.",
        "2.2": "Premium grocery options in the area.",
        "2.3": "Gym access present but not dense.",
        "2.4": "Thames riverside is real but not a park. Vincent Square. Moderate green.",
        "2.5": "Very quiet at night. Premium residential grain.",
        "2.7": "Pimlico North 20-39 at 41%. Solid young skew.",
      },
      "moderate",
      "T2 moderate. Premium daily life but green space and gym density are not standout.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "pass", "3.6": "partial" },
      {
        "3.1": "Dolphin Square and Ebury Bridge regeneration active.",
        "3.2": "Tate Britain is a major cultural institution. Thames riverside.",
        "3.3": "Strong sense of place. Regency stucco grid is architecturally coherent and immediately recognisable.",
        "3.4": "Complete 15-minute neighbourhood in the premium sense.",
        "3.5": "Very high architectural quality — Thomas Cubitt's Grosvenor Estate, conservation area. T3.5 strong.",
        "3.6": "Slightly sleepy day/night rhythm. Tate-led weekends. Quiet weekday evenings.",
      },
      "good",
      "T3 strong. Tate Britain, Regency architecture, and clear sense of place.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "fail", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "4/4 anchors ≤25 min. Average 13 min. Excellent journey times.",
        "5.2": "FAIL. Single Victoria Line station. T5.2 structurally fails.",
        "5.3": "Ascending via Ebury Bridge and Dolphin Square.",
        "5.4": "Thin third-space culture — premium neighbourhood, not a cafe-density area.",
      },
      "moderate",
      "T5 mixed. Excellent times but single-line dependency is a structural red flag.",
    ),
    overall_grade: "B",
    grade_reasoning: "B — excellent safety, strong identity, great journey times, but single-line dependency (T5.2 FAIL), thin modern rental stock, and no BTR operator limit the practical grade for a graduate-visa renter.",
  },

  projects: [
    dolphinSquare,
    chapterStreet,
    dolphinHousePimlico,
    // RESEARCH: Rivermill — Weston Group, ~30-unit boutique riverside. Individual landlord rental.
    // 1-bed from ~£2,600 pcm. Thames frontage.
    // REALISM: unknown — individual landlord, premium boutique
    // COST_TIER: luxury (1-bed from ~£2,600)
    buildProject({
      id: "rivermill-pimlico", area_id: "pimlico", name: "Rivermill", developer: "Weston Group", operator: "Individual landlords", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "~30-unit riverside boutique scheme at 151 Grosvenor Road, SW1V. 6 storeys. Thames frontage, concierge, landscaped courtyard. 1-bed from ~£2,600 pcm.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Boutique riverside delivery completed ~2020. Small scale with Thames frontage.",
        t4_1_amenity_package: "Decent — concierge, landscaped courtyard, Thames frontage. Small scheme limits amenity scale.",
        t4_4_signature_arch: "Not signature-authored. Riverside boutique product.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default pimlico;
