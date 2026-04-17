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
dolphinSquare.rental.affordability = "unclear";
dolphinSquare.building_quality = {
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "1930s mansion block layouts — fully separated kitchen, living room, bedroom(s). Unlike co-living or apart-hotels, these are traditional flats. Refurbishment progressing unit-by-unit so spec varies.",
  kitchen_quality: "average",
  heating_type: "communal",
  notes: "Heritage mansion block, Delancey-led progressive refurbishment. Refurbished units read `good` on kitchen; historic stock reads `average`. Per-unit variation is the operative principle.",
};
dolphinSquare.amenities = {
  pool: true,
  pool_notes: "Iconic Dolphin Square pool",
  gym: true,
  gym_quality: "good",
  concierge: "24h",
  sky_lounge: false,
  co_working: false,
  dining_room: true,
  cinema_room: false,
  rooftop_terrace: false,
  parking: true,
  bike_storage: true,
  pet_policy: "Check with operator — mansion-block policy",
  other_amenities: ["Private 3.5-acre gardens", "Restaurant", "Bar", "Spa", "24h security"],
  overall_tier: "premium",
};
dolphinSquare.architecture = {
  architects: ["Gordon Jeeves (1935-37)"],
  awards: [],
  is_signature: true,
  style_notes: "Gordon Jeeves-designed 1935-1937 mansion block complex on 7.5 acres in Pimlico — ten 7-storey blocks arranged around a central garden, with private pool, restaurant, shops. One of Europe's largest residential buildings at construction. Grade II heritage character throughout.",
};

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
chapterStreet.rental.affordability = "at-budget";

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
dolphinHousePimlico.rental.affordability = "stretch";
dolphinHousePimlico.building_quality = {
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "Serviced apartments within Dolphin Square complex — access to pool, gym, gardens, restaurant. Nightly or monthly booking.",
  kitchen_quality: "average",
  heating_type: "communal",
  notes: "Serviced apartment kitchenettes (better than apart-hotel, not full kitchen). Inherits Dolphin Square amenity stack.",
};
dolphinHousePimlico.amenities = {
  pool: true,
  pool_notes: "Iconic Dolphin Square pool — serviced apartment residents inherit access",
  gym: true,
  gym_quality: "good",
  concierge: "24h",
  sky_lounge: false,
  co_working: false,
  dining_room: true,
  cinema_room: false,
  rooftop_terrace: false,
  parking: true,
  bike_storage: true,
  pet_policy: "Check with operator",
  other_amenities: ["Private 3.5-acre gardens", "Restaurant", "Bar", "Spa", "24h security", "Weekly housekeeping", "Utilities + Wi-Fi included"],
  overall_tier: "premium",
};

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
      { name: "Victoria (mainline/tube interchange)", lines: ["Victoria", "Circle", "District", "National Rail"], walk_minutes_from_centre: 13 },
    ],
    times_to_anchors: { city_of_london: 13, canary_wharf: 18, soho_fitzrovia: 7, kings_cross_shoreditch: 14 },
    multi_cluster_score: 4,
    redundancy_score: 1,
    notes: "Pimlico station is Victoria Line only — the single-line dependency is the area's structural T5.2 weakness. The fallback is Victoria station (Circle, District, Victoria, National Rail) at 13 min walk, meaningful but not co-located with residential cores. On normal-day journey times Pimlico is excellent (13 min average to anchors, 7 min to TCR); on line-failure days it degrades sharply.",
    sources: [
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://en.wikipedia.org/wiki/Pimlico_tube_station", label: "Wikipedia — Pimlico tube station", type: "wikipedia", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 24 },
      { cohort: "30-39", pct: 28 },
      { cohort: "40-49", pct: 18 },
      { cohort: "50+", pct: 30 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 46 },
      { group: "White — other", pct: 28 },
      { group: "Asian or Asian British", pct: 10 },
      { group: "Black or Black British", pct: 6 },
      { group: "Mixed", pct: 6 },
      { group: "Other ethnic group", pct: 4 },
    ],
    household_mix: [
      { type: "Single person", pct: 42 },
      { type: "Couple no children", pct: 26 },
      { type: "Couple with children", pct: 10 },
      { type: "Lone parent", pct: 5 },
      { type: "Shared household", pct: 12 },
      { type: "Other", pct: 5 },
    ],
    student_pct: 4,
    professional_renter_pct: 48,
    notes: "Pimlico North ward 20-39 at 41% — solid young skew despite older-skewing premium residential character. Under-20 only 13% — very few children, consistent with the stucco-grid premium apartment stock. Single-person household share is unusually high (42%) — typical for central London premium mansion-block districts. Mix of long-tenured older residents in stucco houses and younger professional renters in Dolphin Square / conversions / Barratt newbuild.",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021 — Pimlico North / South wards", type: "ons", accessed_date: "2026-04-17" },
      { url: "https://data.london.gov.uk/dataset/2021-census-demography", label: "London Datastore — 2021 Census demography", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "very-safe",
    crime_vs_borough: "below",
    crime_vs_croydon: "much-safer",
    after_dark_assessment: "Very safe. Among the calmest premium-central-London wards. The Regency stucco grid is well-lit, low-traffic, and actively patrolled — Westminster borough gets heavy Met Police coverage. Residential streets are genuinely quiet after 22:00 — more sleepy than empty-threatening. No known trouble spots in the residential core. Women-walking-alone reports consistently positive. The Westminster-borough headline crime rate of ~132/1k is inflated by West End tourism; Pimlico-specific ward stats sit well below this.",
    concerns: [],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police/westminster/pimlico/", label: "Met Police — Pimlico", type: "met-police", accessed_date: "2026-04-17" },
      { url: "https://crimerate.co.uk/london/westminster/pimlico", label: "CrimeRate — Pimlico", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: true,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Thames Path (Pimlico / Grosvenor Road segment)", walk_minutes: 3, notes: "Continuous riverside walk along Grosvenor Road, connects to Chelsea Embankment west and Millbank east" },
      { name: "Vincent Square", size_acres: 13, walk_minutes: 5, notes: "Westminster School playing fields — private but visible open space, surrounded by residential streets" },
      { name: "Victoria Tower Gardens", size_acres: 5, walk_minutes: 12, notes: "Thames-fronting garden next to Parliament — features Buxton Memorial, Rodin's Burghers of Calais" },
      { name: "St George's Square Gardens", size_acres: 2, walk_minutes: 4, notes: "Residential garden square — principal Pimlico square" },
      { name: "Eccleston Square", walk_minutes: 8, notes: "Grade II listed garden square" },
      { name: "Battersea Park (across Chelsea Bridge)", size_acres: 200, walk_minutes: 18, notes: "Via Chelsea Bridge — reachable on foot" },
    ],
    overall_assessment: "Moderate green + real river. Thames frontage is a genuine asset — Pimlico backs directly onto the Thames Path with continuous riverside walking. Vincent Square (13 acres of Westminster School playing fields) provides visible open space; St George's Square and Eccleston Square are Grade II garden squares. No major public park inside the ward, but Battersea Park across Chelsea Bridge at 18 min walk. Green offer is better than Vauxhall/Oval Village but thinner than BPS or Nine Elms on dedicated park space.",
    sources: [
      { url: "https://www.westminster.gov.uk/leisure-libraries-and-community/parks-and-open-spaces", label: "Westminster — parks and open spaces", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Little Waitrose & Partners (Pimlico)", type: "premium grocery", walk_minutes: 4, notes: "Principal Pimlico grocery anchor — Warwick Way" },
      { name: "M&S Food (Victoria)", type: "premium grocery", walk_minutes: 12, notes: "Full M&S at Victoria station" },
      { name: "Sainsbury's (Wilton Road)", type: "full supermarket", walk_minutes: 10, notes: "Near Victoria" },
      { name: "Pimlico Farmers' Market (Orange Square)", type: "farmers' market", walk_minutes: 8, notes: "Saturday morning market" },
    ],
    gyms: [
      { name: "Queen Mother Sports Centre", type: "council leisure centre (modern gym, 3 pools, sports hall)", walk_minutes: 8, notes: "223 Vauxhall Bridge Road SW1V 1EL — principal public fitness facility" },
      { name: "PureGym Pimlico", type: "budget chain", walk_minutes: 6, notes: "" },
      { name: "Dolphin Square Health Club", type: "premium (pool, gym, spa)", walk_minutes: 5, notes: "Resident + membership access at Dolphin Square" },
      { name: "London Mixed Martial Arts (Churchill Gardens)", type: "BJJ / kickboxing / MMA", walk_minutes: 8, notes: "St Gabriel's Church Hall, Churchill Gardens SW1V 3AA — directly relevant to Caner's boxing interest" },
      { name: "Third Space Soho", type: "premium gym", walk_minutes: 15, notes: "Not in Pimlico but reachable via Victoria Line — nearest premium chain" },
    ],
    food_and_drink: [
      { name: "The Marquis of Westminster", type: "gastropub", walk_minutes: 5, notes: "Chapter Collection gastropub — Pimlico pub anchor" },
      { name: "Pimlico Road antiques + food cluster", type: "premium retail/dining", walk_minutes: 8, notes: "Daylesford Organic, Colbert, high-end antiques" },
      { name: "Daylesford Organic (Pimlico Road)", type: "organic café/deli", walk_minutes: 8, notes: "Premium café and grocery" },
      { name: "Tachbrook Street Market", type: "street market", walk_minutes: 4, notes: "Long-running Pimlico food market" },
      { name: "Dolphin Square restaurant + bar", type: "residents + public", walk_minutes: 5, notes: "Historic Art Deco dining room" },
    ],
    health: [
      { name: "Pimlico Health at The Marven", type: "NHS GP", walk_minutes: 6, notes: "Registerable for new residents" },
      { name: "Westminster Dental / GP cluster (Belgrave Road)", type: "NHS + private", walk_minutes: 5, notes: "" },
      { name: "Boots Pharmacy (Warwick Way)", type: "pharmacy", walk_minutes: 4, notes: "" },
      { name: "Chelsea & Westminster Hospital", type: "major NHS hospital", walk_minutes: 25, notes: "Nearest A&E via bus" },
    ],
    cultural: [
      { name: "Tate Britain", type: "major national museum", walk_minutes: 10, notes: "Free national collection of British art — defining cultural anchor" },
      { name: "Thames Path riverside walk", type: "outdoor culture", walk_minutes: 3, notes: "Continuous path to Westminster and beyond" },
      { name: "Westminster Cathedral (Victoria)", type: "religious landmark", walk_minutes: 12, notes: "RC cathedral — distinctive Byzantine architecture" },
      { name: "Churchill Gardens Estate", type: "listed post-war estate", walk_minutes: 8, notes: "Grade II listed modernist estate — architectural interest" },
    ],
    notes: "Pub and grocery density is good (Little Waitrose, Tachbrook Street Market, Pimlico Road Daylesford cluster, The Marquis gastropub, Dolphin Square restaurant). Queen Mother Sports Centre is a meaningful premium-public fitness facility. London Mixed Martial Arts gym at Churchill Gardens is a direct match for Caner's boxing interest. Cultural layer is strong — Tate Britain is a defining anchor and rare in the dataset. Pimlico has the most distinctively-traditional low-rise grain of anything in this batch — the Regency stucco grid + Churchill Gardens modernism is visually coherent in a way the Nine Elms corridor is not.",
    sources: [
      { url: "https://www.waitrose.com/find-a-store/pimlico", label: "Waitrose — Pimlico", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.puregym.com/gyms/london-pimlico/", label: "PureGym Pimlico", type: "other", accessed_date: "2026-04-17" },
      { url: "https://active.westminster.gov.uk/leisure-centres/", label: "Westminster — Leisure Centres", type: "council", accessed_date: "2026-04-17" },
      { url: "https://www.londonmixedmartialarts.com/", label: "London Mixed Martial Arts", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.tate.org.uk/visit/tate-britain", label: "Tate Britain", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.thechaptercollection.co.uk/marquis-of-westminster", label: "The Marquis of Westminster", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: {
    status: "active",
    investment_pipeline: "Dolphin Square (Delancey) multi-phase refurbishment of 1930s mansion block estate — the largest single residential refurbishment in central London. Ebury Bridge Estate (Westminster City Council) major adjacent regeneration — 781 new homes replacing post-war stock, delivering through 2027. No new-build masterplan at Pimlico's scale; regeneration is about refurbishment and estate renewal rather than greenfield.",
    recent_milestones: [
      "Ongoing — Dolphin Square phased refurbishment (Delancey)",
      "2024 — Barratt London 26 Chapter Street completed (~50 units)",
      "2023-2025 — Ebury Bridge Phase 1 completions (Westminster Council)",
    ],
    upcoming_milestones: [
      "2027 — Ebury Bridge major delivery window",
      "Ongoing through 2028 — Dolphin Square phase-by-phase refurbishment",
    ],
    trajectory_through_2027: "Pimlico in August 2027 will be substantially the same as today — this is a mature conservation-area district, not a regeneration frontier. Ebury Bridge delivery is the only meaningful 2027 event, adding refreshed housing stock adjacent to Pimlico's southern edge. Dolphin Square phases are slow and tenant-by-tenant. The area is ascending via refurbishment rather than transformation; a renter arriving 2026 gets substantively the same Pimlico experience through 2027, with incremental improvement in specific buildings.",
    sources: [
      { url: "https://www.dolphinsquare.co.uk/", label: "Dolphin Square", type: "operator", accessed_date: "2026-04-17" },
      { url: "https://www.westminster.gov.uk/ebury-bridge", label: "Westminster — Ebury Bridge", type: "council", accessed_date: "2026-04-17" },
      { url: "https://www.delancey.com/", label: "Delancey", type: "developer", accessed_date: "2026-04-17" },
    ],
  },

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

  projects: (() => {
    // RESEARCH: Rivermill — Weston Group, ~30-unit boutique riverside. Individual landlord rental.
    // 1-bed from ~£2,600 pcm. Thames frontage.
    const rivermill = buildProject({
      id: "rivermill-pimlico", area_id: "pimlico", name: "Rivermill", developer: "Weston Group", operator: "Individual landlords", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "~30-unit riverside boutique scheme at 151 Grosvenor Road, SW1V. 6 storeys. Thames frontage, concierge, landscaped courtyard. 1-bed from ~£2,600 pcm.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Boutique riverside delivery completed ~2020. Small scale with Thames frontage.",
        t4_1_amenity_package: "Decent — concierge, landscaped courtyard, Thames frontage. Small scheme limits amenity scale.",
        t4_4_signature_arch: "Not signature-authored. Riverside boutique product.",
      },
    });
    rivermill.rental.affordability = "over-budget";
    return [dolphinSquare, chapterStreet, dolphinHousePimlico, rivermill];
  })(),

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default pimlico;
