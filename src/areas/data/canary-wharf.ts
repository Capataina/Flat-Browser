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

// ── Projects ─────────────────────────────────────────────────────────
const waterStreet8 = buildProject({
  id: "8-water-street", area_id: "canary-wharf", name: "8 Water Street (Vertus)",
  developer: "Canary Wharf Group", operator: "Vertus", building_type: "BTR", build_phase: "complete",
  tenure: ["rent"], realism: "unknown",
  preview: "Newest Vertus BTR building. Indoor-outdoor pool, gym, screening room. 1-beds from roughly GBP 2,700/month.",
  amenity_tier: "premium", overall_grade: "S",
  evaluation_reasoning: {
    t2_6_building_quality: "Newest Vertus delivery to the highest current Canary Wharf Group specification — modern building services, strong layouts, corporate-managed maintenance.",
    t4_1_amenity_package: "Flagship Vertus amenity stack — indoor-outdoor pool, serious gym, screening room, residents' lounges. Among the strongest premium packages in the dataset.",
    t4_4_signature_arch: "Not a named-architect signature piece — quietly premium rather than Pritzker-level.",
  },
});
waterStreet8.rental.price_transparency = "listed";
waterStreet8.external_links = [
  { url: "https://thisisvertus.com/apartments-to-rent/8-water-street/", label: "8 Water Street — Vertus", type: "operator", accessed_date: "2026-04-12" },
];

const parkDrive10 = buildProject({
  id: "10-park-drive", area_id: "canary-wharf", name: "10 Park Drive (Vertus)",
  developer: "Canary Wharf Group", operator: "Vertus", building_type: "BTR", build_phase: "complete",
  tenure: ["rent"], realism: "unknown",
  preview: "34 storeys, Vertus-managed. On the waterfront edge of Wood Wharf. One of the most recognisable buildings in the masterplan.",
  amenity_tier: "premium", overall_grade: "S",
  evaluation_reasoning: {
    t2_6_building_quality: "Vertus BTR to full Canary Wharf Group specification with waterside layouts and modern building services.",
    t4_1_amenity_package: "Premium Vertus amenity stack — gym, lounges, concierge — at or near 8 Water Street level.",
    t4_4_signature_arch: "Recognisable waterfront silhouette in Wood Wharf but not named-architect authored.",
  },
});
parkDrive10.rental.price_transparency = "listed";
parkDrive10.external_links = [
  { url: "https://thisisvertus.com/apartments-to-rent/", label: "Vertus — apartments to rent", type: "operator", accessed_date: "2026-04-12" },
];

const georgeStreet = buildProject({
  id: "george-street-vertus", area_id: "canary-wharf", name: "3 & 10 George Street (Vertus)",
  developer: "Canary Wharf Group", operator: "Vertus", building_type: "BTR", build_phase: "complete",
  tenure: ["rent"], realism: "unknown",
  preview: "Core rental buildings within Wood Wharf. Define the day-to-day Vertus living proposition rather than the one-off flagship tower story.",
  amenity_tier: "strong", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Core Vertus product — modern spec and Canary Wharf Group management. Slightly more everyday than the flagship 8 Water Street tier.",
    t4_1_amenity_package: "Strong amenity but one tier below 8 Water Street — no pool, standard gym and lounge offer.",
    t4_4_signature_arch: "Not signature — functional Wood Wharf residential.",
  },
});
georgeStreet.rental.price_transparency = "listed";
georgeStreet.external_links = [
  { url: "https://thisisvertus.com/apartments-to-rent/", label: "Vertus — apartments to rent", type: "operator", accessed_date: "2026-04-12" },
];

const oneParkDrive = buildProject({
  id: "one-park-drive", area_id: "canary-wharf", name: "One Park Drive by Herzog & de Meuron",
  developer: "Canary Wharf Group", operator: "Vertus", building_type: "Owner-Lease", build_phase: "complete",
  tenure: ["rent", "buy"], realism: "unlikely",
  preview: "Designed by a Pritzker Prize-winning practice. Distinctive circular form. Waterside. The architectural ownership landmark of Wood Wharf.",
  amenity_tier: "premium", is_signature: true, architects: ["Herzog & de Meuron"], overall_grade: "S",
  evaluation_reasoning: {
    t2_6_building_quality: "Herzog & de Meuron-designed to the highest Canary Wharf Group residential specification — modern services, bespoke layouts, circular form.",
    t4_1_amenity_package: "Flagship Vertus amenity stack plus dedicated residents' services — one of the most complete in Wood Wharf.",
    t4_4_signature_arch: "Herzog & de Meuron are Pritzker Prize winners and One Park Drive is their distinctive waterfront residential tower — unambiguous signature credential.",
  },
});
oneParkDrive.rental.price_transparency = "enquire";
oneParkDrive.external_links = [
  { url: "https://residential.canarywharf.com/one-park-drive/", label: "One Park Drive — Canary Wharf Residential", type: "developer", accessed_date: "2026-04-12" },
];

const newfoundland = buildProject({
  id: "newfoundland", area_id: "canary-wharf", name: "Newfoundland by EcoWorld Ballymore",
  developer: "EcoWorld Ballymore", operator: "Vertus", building_type: "BTR", build_phase: "complete",
  tenure: ["rent"], realism: "unknown",
  preview: "58 storeys — the tallest residential tower on the island. Panoramic views unmatched in E14. Pool, gym, 24-hour concierge.",
  amenity_tier: "premium", overall_grade: "S",
  evaluation_reasoning: {
    t2_6_building_quality: "EcoWorld Ballymore BTR to premium spec — 58 storeys, modern building services, strong layouts, professional Ballymore management.",
    t4_1_amenity_package: "Pool, gym, 24-hour concierge, sky lounge — flagship Ballymore amenity package.",
    t4_4_signature_arch: "Distinctive diagrid structural frame and island-tallest height give it real visual prominence but not a named-architect Pritzker credit.",
  },
});
newfoundland.rental.price_transparency = "listed";
newfoundland.external_links = [
  { url: "https://thisisvertus.com/apartments-to-rent/newfoundland/", label: "Newfoundland — Vertus", type: "operator", accessed_date: "2026-04-12" },
];

const southQuayPlaza = buildProject({
  id: "south-quay-plaza", area_id: "canary-wharf", name: "South Quay Plaza",
  developer: "Berkeley Group", operator: "St George", building_type: "Owner-Lease", build_phase: "phased",
  tenure: ["rent", "buy"], realism: "unlikely",
  preview: "Adjacent Marsh Wall super-prime cluster. Materially part of the same Canary Wharf residential proposition for renters and buyers.",
  amenity_tier: "premium", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley/St George premium specification with modern building services and strong layouts — Berkeley's signature build quality.",
    t4_1_amenity_package: "Premium amenity package including pool, gym, residents' lounges, concierge — consistent with St George's top-tier product.",
    t4_4_signature_arch: "Foster + Partners-designed — named-practice signature work on the Marsh Wall skyline.",
  },
});
southQuayPlaza.rental.price_transparency = "enquire";
southQuayPlaza.external_links = [
  { url: "https://www.berkeleygroup.co.uk/developments/london/canary-wharf/south-quay-plaza", label: "South Quay Plaza — Berkeley Group", type: "developer", accessed_date: "2026-04-12" },
];

const canaryWharf: Area = {
  id: "canary-wharf",
  name: "Canary Wharf / Wood Wharf",
  aliases: ["Wood Wharf", "Canary Wharf East", "Isle of Dogs"],
  borough: "Tower Hamlets",
  postcodes: ["E14"],

  headline:
    "Elizabeth Line + Jubilee + DLR; Vertus runs the residential side; Wood Wharf is the human-scale eastern quarter inside the financial-centre island.",
  preview:
    "The Elizabeth line put Liverpool Street at 7-8 minutes and changed everything. Wood Wharf is the lower-rise, human-scaled residential quarter on the eastern edge of the island — distinct from the financial core. Vertus BTR from roughly GBP 2,700/month. One Park Drive by Herzog & de Meuron is the architectural landmark.",

  long_form: {
    full: "Wood Wharf is a 23-acre purpose-built residential neighbourhood sitting on the eastern edge of Canary Wharf island, with its own waterside character distinct from the skyscraper financial core. The Elizabeth line from Canary Wharf station puts Liverpool Street at 7-8 minutes, Heathrow at 40. The Jubilee line is also on site. Vertus — Canary Wharf Group's BTR arm — manages multiple buildings across Wood Wharf, professionally run with strong resident reviews. 8 Water Street, the newest Vertus building, has an indoor-outdoor pool, gym, and screening room. One Park Drive by Herzog & de Meuron — a Pritzker Prize-winning practice — is the architectural landmark. Wood Wharf is still building out, which currently keeps pricing competitive relative to the finished quality it will eventually represent.",
    history: "Canary Wharf was developed in the 1980s and 90s by Olympia & York then by Canary Wharf Group as a purpose-built financial centre on the abandoned West India Docks. The financial-tower core stabilised through the early 2000s. Wood Wharf, the eastern residential quarter, began delivery in the late 2010s and is currently the active build-out edge of the island.",
    vibe: "The financial core is functional and impressive but historically dead at weekends. Wood Wharf is deliberately the opposite — lower-rise, designed for residents, with restaurants, bars, and a waterside character that feels like a neighbourhood rather than an office park. The trajectory across the whole island is toward mixed-use with real residential life, and Wood Wharf is the most visible expression of that.",
    weekday: "A Tuesday at 7pm in Wood Wharf: financial workers are filtering out of the towers and into the bars and restaurants of the lower-level retail. The Elizabeth line is busy. 8 Water Street's pool is full. The waterside walks are populated.",
    weekend: "A Saturday at midday: the financial core is quiet. Wood Wharf is increasingly active, with brunch crowds, dock walks, and the cultural programming around Crossrail Place and the lower-deck retail. Still less buzzy than King's Cross on weekends but improving.",
    notable: "One Park Drive by Herzog & de Meuron (Pritzker Prize), Newfoundland (the tallest residential tower on the island), 8 Water Street (Vertus flagship). The Elizabeth Line station is itself a piece of architecture worth seeing.",
    croydon_comparison:
      "Canary Wharf and Croydon are both large mixed-use centres with substantial commercial cores. The differences are: Canary Wharf has world-class connectivity (Elizabeth + Jubilee + DLR vs Croydon's overground-only), purpose-built modern residential at scale, premium operator presence, and a trajectory that's still ascending. Croydon's commercial decline is the opposite of Canary Wharf's commercial expansion. The price gap is real but the upgrade is unambiguous.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Elizabeth", type: "elizabeth" },
      { name: "Jubilee", type: "tube" },
      { name: "DLR", type: "dlr" },
    ],
    primary_stations: [
      { name: "Canary Wharf", lines: ["Elizabeth", "Jubilee"], walk_minutes_from_centre: 5 },
      { name: "Heron Quays", lines: ["DLR"], walk_minutes_from_centre: 6 },
    ],
    times_to_anchors: {
      city_of_london: 11,
      canary_wharf: 0,
      soho_fitzrovia: 13,
      kings_cross_shoreditch: 18,
    },
    multi_cluster_score: 5,
    redundancy_score: 4,
    notes: "Elizabeth line is the transformative addition. Jubilee adds City + West End coverage. DLR provides Stratford and Lewisham connectivity.",
    sources: [],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [],
    ethnic_composition: [
      { group: "White", pct: 42 },
      { group: "Asian", pct: 42 },
      { group: "Black", pct: 8 },
      { group: "Mixed", pct: 5 },
      { group: "Other", pct: 3 },
    ],
    household_mix: [],
    student_pct: 6,
    professional_renter_pct: 58,
    notes: "Census 2021 Canary Wharf ward shows near-equal White and Asian split (predominantly Bangladeshi/South Asian, not East Asian). Mixed cosmopolitan with a strong professional renter base.",
    sources: [],
  },
  safety: {
    overall: "very-safe",
    crime_vs_borough: "below",
    crime_vs_croydon: "much-safer",
    after_dark_assessment: "Among the safest areas in London. Heavy security presence around the financial buildings; the residential side is well-lit and well-stewarded. No after-dark concerns.",
    concerns: [],
    sources: [],
  },
  green_and_water: {
    has_river: true,
    has_canal: false,
    has_dock: true,
    parks: [
      { name: "Crossrail Place Roof Garden", walk_minutes: 4, notes: "Elevated rooftop garden above the Elizabeth line station" },
      { name: "Jubilee Park", walk_minutes: 5, notes: "Long linear park through the financial core" },
      { name: "Mudchute Park & Farm", size_acres: 32, walk_minutes: 16, notes: "City farm and country-park-style green space on the southern Isle of Dogs" },
    ],
    overall_assessment: "Surrounded by water on three sides (Thames, West India Dock, Blackwall Basin). Strong dock and waterside identity throughout Wood Wharf.",
  },
  amenities: {
    grocery: [],
    gyms: [],
    food_and_drink: [],
    health: [],
    cultural: [],
    notes: "Not yet populated. Known: Waitrose, M&S, Whole Foods, multiple Third Space and premium gyms, Foyles, Crossrail Place restaurants, Wood Wharf food street.",
  },
  regeneration: {
    status: "phased",
    investment_pipeline: "Wood Wharf is in active delivery — multiple Vertus and Ballymore buildings still completing through 2027+.",
    recent_milestones: ["8 Water Street delivered", "10 Park Drive delivered", "One Park Drive completed"],
    upcoming_milestones: ["Further Wood Wharf buildings through 2027", "Continued retail and food expansion"],
    trajectory_through_2027:
      "Wood Wharf is on a strong ascending trajectory through the visa transition. The residential side will be substantially more developed by 2027 and the area's identity will continue to consolidate as a real neighbourhood rather than a financial annex.",
    sources: [],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Among the safest areas in London — heavy security around the financial buildings, high weekday foot traffic, and well-lit residential streets at night. Very-safe rating with Tower Hamlets crime below borough average.",
        "1.2": "Wood Wharf is purpose-built modern stock end to end. Vertus operates 8 Water Street, 10 Park Drive, and the George Street buildings as a managed campus; Newfoundland and One Park Drive add Ballymore-side stock. Zero pre-war stock here.",
        "1.3": "Elizabeth Line + Jubilee + DLR all converge at Canary Wharf station. Liverpool Street in 7-8 minutes, Soho/Fitzrovia in 13, King's Cross/Shoreditch in 18. Among the best-connected points in the dataset with multi-cluster score 5/5.",
        "1.4": "Vertus is the canonical example of central referencing — single operator across multiple buildings with mature corporate process. Ballymore adds a second professional landlord. Both have standardised application paths.",
        "1.5": "Recently built, actively maintained, and Canary Wharf Group's stewardship contract funds supplementary cleaning and security beyond the standard borough offer.",
        "1.6": "Trajectory is sharply ascending — Wood Wharf is still building out residential phases with multiple Vertus and Ballymore buildings completing through 2027+. The financial core's historic weekend-quietness is being structurally addressed by the residential expansion.",
      },
      "strong",
      "T1 is maximally strong. Among the safest areas in London, exceptional connectivity, mature professional rental market via Vertus and Ballymore.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Crossrail Place retail, Wood Wharf's lower-level retail, and the financial core's Cabot Place and Jubilee Place give dense walkable essentials — supermarkets, pharmacy, cafes, gyms all on site.",
        "2.2": "Waitrose, M&S Food, and Whole Foods are all on the island within short walks — the full premium grocery set is present at the top end of T2.2.",
        "2.3": "Third Space and multiple Nuffield Health and commercial gym locations within 8 minutes walk. Vertus buildings have strong resident gyms; 8 Water Street has an indoor-outdoor pool alongside the gym.",
        "2.4": "Thames frontage, West India Dock, Blackwall Basin, Crossrail Place Roof Garden, Jubilee Park, and Mudchute Park all within walking distance. Water-on-three-sides identity.",
        "2.5": "Residential side of Wood Wharf is quiet at night — no persistent party-zone noise, financial district empties by mid-evening, well-managed soundscape.",
        "2.7": "Primary cohort 30-39 with heavy 20s professional renter presence via Vertus and Ballymore BTR. Nearly equal White/Asian split, strong young-professional street mix.",
      },
      "strong",
      "Strong on every T2 row. Wood Wharf has solved the historic Canary Wharf weekend-quietness problem and is genuinely liveable end to end.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "partial", "3.5": "pass", "3.6": "partial" },
      {
        "3.1": "Wood Wharf is in active phased delivery with multiple Vertus and Ballymore buildings still completing through 2027+ — visibly ongoing masterplan investment.",
        "3.2": "Commercial anchor depth is unmatched — the financial towers themselves, plus Crossrail Place retail, plus the Elizabeth Line station as a piece of destination architecture.",
        "3.3": "'Canary Wharf' is one of the most recognisable place names in London globally — the skyline is iconic and the mental map is strong.",
        "3.4": "15-min completeness improving but Wood Wharf still building out — retail and food density are growing but not yet at King's Cross level across the whole island.",
        "3.5": "Architectural quality is high overall — One Park Drive by Herzog & de Meuron, Newfoundland's diagrid structure, the Elizabeth Line station roof, and the coherent Wood Wharf masterplan give real visual quality.",
        "3.6": "Financial core still quiet at weekends; Wood Wharf side is improving but not yet King's Cross. The historic financial-quarter dead-night pattern is being addressed but hasn't fully dissolved.",
      },
      "good",
      "Strong on regeneration, cultural anchor, name recognition, and architectural quality. The historical financial-quarter weekend-quietness is the only meaningful weakness.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 5/5 — Elizabeth Line gives near-instant reach to Liverpool Street, Soho/Fitzrovia, and beyond; Jubilee covers West End and KX; DLR covers Stratford and Lewisham.",
        "5.2": "Redundancy score 4/5 — Elizabeth + Jubilee + DLR are three independent modes. Single-line failure never strands the area.",
        "5.3": "Wood Wharf residential phases continue delivering through 2027+ with the financial core becoming more mixed-use over the visa transition window.",
        "5.4": "Limited bookshop and library presence — Foyles at Crossrail Place is the main quiet third space. Culture is less deep than central London.",
      },
      "good",
      "Excellent multi-cluster reach via Elizabeth + Jubilee + DLR, ascending trajectory, but third-space culture is thinner than central London areas.",
    ),
    overall_grade: "S",
    grade_reasoning:
      "Canary Wharf / Wood Wharf earns S grade on the strength of T1 (maximally strong), T2 (clean across the board), and the ongoing trajectory. The single weakness is third-space culture in T5 and the partial day/night rhythm in T3. With the Elizabeth Line, Wood Wharf is one of the strongest single candidates in the dataset for a Caner-target.",
  },

  projects: [waterStreet8, parkDrive10, georgeStreet, oneParkDrive, newfoundland, southQuayPlaza],

  external_links: [
    { url: "https://group.canarywharf.com/", label: "Canary Wharf Group", type: "developer", accessed_date: "2026-04-11" },
    { url: "https://thisisvertus.com/", label: "Vertus Living", type: "operator", accessed_date: "2026-04-12" },
    { url: "https://en.wikipedia.org/wiki/Wood_Wharf", label: "Wikipedia (Wood Wharf)", type: "wikipedia", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default canaryWharf;
