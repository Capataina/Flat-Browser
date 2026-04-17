import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const quartersSwissCottage = buildProject({
  id: "quarters-swiss-cottage", area_id: "swiss-cottage", name: "The Quarters Swiss Cottage", developer: "Bravo Investment House", operator: "Bravo Investment House", building_type: "BTR", living_model: "managed-studio", build_phase: "complete", tenure: ["rent"], realism: "licence-exempt",
  preview: "Bravo's flagship building — 103 studios (26–43 sqm), completed 2020, HomeViews 4.84/5.00 (144 reviews). ~£2,000 pcm standard. Gym, courtyard, Terra Terra restaurant, 24h security.",
  long_form_full: "The Quarters Swiss Cottage is Bravo Investment House's flagship building at 120 Finchley Road. Completed 2020 by Vascroft Contractors. Two buildings linked by a three-storey connecting structure — 103 studios from 26 sqm (Standard) to 43 sqm (Premium). Ground floor: Terra Terra restaurant + retail. Landscaped private courtyard with green walls and extensive green roofs. Gym described as 'fully fitted top spec' by residents. HomeViews 4.84/5.00 across 144 reviews — Location 4.9, Management 4.8, Experience 4.8, Design 4.8, Facilities 4.7, Value 4.6. Building manager Selna Franco named repeatedly. Common praise: management quality, security, cleanliness, courtyard, gym, Jubilee line proximity. Common complaints: compact rooms (standard 26 sqm), premium pricing. ~£2,000 pcm for a standard studio. Standard contract 6-month AST; 30-day minimum on serviced licence. Move-in: reservation fee (one week), reference documents within 48h, right-to-rent check, booking monies 7 days before (rent + utilities + 5 weeks' deposit). Referencing is present but opaque. No specific sound insulation complaints found — best-reviewed building for quality.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Newest building in portfolio (2020). Modern finishes. Reviews describe 'stunning' and 'modern and well-designed'. No recurring noise or maintenance complaints.",
    t4_1_amenity_package: "Strong — gym, courtyard garden, restaurant (Terra Terra), 24h security, CCTV, housekeeping, air conditioning, fibre broadband. No pool, no concierge desk.",
    t4_4_signature_arch: "Not signature-authored. Vascroft Contractors — good specification but not jury architecture.",
  },
});
quartersSwissCottage.external_links = [
  { url: "https://thequarters.co.uk/", label: "The Quarters by Bravo", type: "operator", accessed_date: "2026-04-12" },
  { url: "https://www.homeviews.com/development/the-quarters-swiss-cottage", label: "HomeViews — The Quarters Swiss Cottage", type: "homeviews", accessed_date: "2026-04-17" },
];
quartersSwissCottage.rental.price_transparency = "listed";
// V2 enrichment applied 2026-04-17 (enrichment-licence-exempt.md — Quarters Swiss Cottage)
quartersSwissCottage.rental.prices = {
  studio: { min: 2000, max: 2500, currency: "GBP", per: "month" },
  bills_included: true,
  notes: "~£2,000 pcm standard (26 sqm); up to £2,500+ Premium (43 sqm). All-inclusive.",
};
quartersSwissCottage.rental.affordability = "at-budget";
quartersSwissCottage.building_quality = {
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "Studios 26-43 sqm (Standard 26, Premium 43). Two linked 2020-completion buildings with connecting structure. Private landscaped courtyard. Highest spec in Bravo portfolio.",
  kitchen_quality: "average",
  heating_type: "communal",
  notes: "Swiss Cottage is Bravo's flagship — 4.84/5 HomeViews across 144 reviews makes it one of the highest-rated buildings in the entire Flatbrowser dataset. No dominant noise or maintenance complaints.",
};
quartersSwissCottage.amenities = {
  ...quartersSwissCottage.amenities,
  gym: true,
  gym_quality: "good",
  concierge: "24h",
  bike_storage: true,
  pet_policy: "No pets.",
  other_amenities: [
    "Private landscaped courtyard",
    "Terra Terra restaurant at ground floor",
    "Housekeeping",
    "Air conditioning",
    "Fibre broadband",
    "CCTV / 24h security",
  ],
  overall_tier: "strong",
};
quartersSwissCottage.architecture = {
  architects: [],
  awards: [],
  is_signature: false,
  style_notes: "Two 2020-completion buildings linked by a three-storey connecting structure (Vascroft Contractors). Contemporary residential specification with green-wall courtyard and extensive green roofs. Terra Terra restaurant anchors the ground floor.",
};
quartersSwissCottage.resident_signal = {
  homeviews_score: 4.84,
  homeviews_url: "https://www.homeviews.com/development/the-quarters-swiss-cottage",
  summary: "4.84/5.00 across 144 reviews — one of the highest scores in the entire dataset. Management (Selna Franco) named repeatedly in positive reviews. Location 4.9, Management 4.8, Facilities 4.7, Value 4.6.",
  common_praise: [
    "Management responsiveness (Selna Franco named repeatedly)",
    "All-inclusive simplicity",
    "Security and cleanliness",
    "Courtyard and gym",
    "Jubilee-line proximity",
  ],
  common_complaints: [
    "Compact studio sizes (26 sqm standard)",
    "Referencing process is opaque",
    "Premium pricing relative to other Bravo sites",
  ],
};

const o2CentreRedevelopment = buildProject({
  id: "o2-centre-redevelopment", area_id: "swiss-cottage", name: "O2 Centre (Finchley Road Masterplan)", developer: "Landsec", operator: "unknown", building_type: "Mixed", build_phase: "future", tenure: ["rent", "buy"], realism: "unknown",
  preview: "Camden's largest planning application since King's Cross. ~1,800 homes on 14-acre site. 7+ acres of new parkland. Third Space health club, cinema, supermarket, health centre, town square. Planning approved 2023, first homes 2027, full build-out 2037+. Transformative for the area.",
  amenity_tier: "premium", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Unbuilt — Landsec major masterplan. Quality cannot be verified but Landsec's institutional grade suggests strong delivery.",
    t4_1_amenity_package: "Premium at masterplan level — new park (7+ acres), Third Space luxury health club, cinema, supermarket, health centre, community centres, town square with restaurants, ~180,000 sq ft commercial space. Car-free development.",
    t4_4_signature_arch: "Architectural authorship not yet confirmed. The scale (Camden's largest since King's Cross) and car-free design are significant. Over 50% of site designated as parkland.",
  },
});
o2CentreRedevelopment.external_links = [
  { url: "https://o2centremasterplan.co.uk/", label: "O2 Centre Masterplan official site", type: "developer", accessed_date: "2026-04-12" },
];

const swissCottage: Area = {
  id: "swiss-cottage",
  name: "Swiss Cottage",
  aliases: ["Finchley Road", "South Hampstead"],
  borough: "Camden",
  postcodes: ["NW3", "NW6"],

  headline:
    "Zone 2 Jubilee + Metropolitan at Finchley Road — two lines at one station plus Overground at South Hampstead. The Quarters Swiss Cottage is the flagship Bravo building (HomeViews 4.84/5.00).",
  preview:
    "Swiss Cottage delivers Jubilee + Metropolitan lines at Finchley Road (2-minute walk), Swiss Cottage station (Jubilee, 5 min), and South Hampstead (Overground, 8 min). The Quarters Swiss Cottage is Bravo's flagship building — 103 studios, HomeViews 4.84/5.00 across 144 reviews. ~£2,000 pcm for a standard 26 sqm studio. Primrose Hill and Hampstead Heath are accessible. Safe Camden residential.",

  long_form: {
    full: "Swiss Cottage sits at the intersection of Finchley Road (Jubilee + Metropolitan) and Swiss Cottage (Jubilee), giving two-line access with Canary Wharf in ~22 minutes via Jubilee direct and TCR in ~15 minutes. South Hampstead (Overground) adds a third fallback. The Quarters Swiss Cottage is Bravo Investment House's flagship building — completed 2020 by Vascroft Contractors, 103 studios from 26 to 43 sqm, with gym, courtyard, Terra Terra restaurant, 24h security. HomeViews 4.84/5.00 across 144 reviews — the best-reviewed building in the Quarters portfolio. ~£2,000 pcm for a standard studio. The area is safe Camden residential with Primrose Hill and Hampstead Heath accessible.",
    history: "Swiss Cottage takes its name from a pub. Finchley Road has been a major north-south corridor. The area is mature residential Camden.",
    vibe: "Quiet residential with good transport links. Not destination-led — a comfortable residential base.",
    weekday: "A Tuesday at 7pm: Finchley Road station commuters. Quiet residential streets.",
    weekend: "A Saturday: Primrose Hill walk. Swiss Cottage Leisure Centre. Local cafes.",
    notable: "The Quarters Swiss Cottage (Bravo); Finchley Road Jubilee + Metropolitan interchange; Hampstead Theatre; Swiss Cottage Library.",
    croydon_comparison: "Swiss Cottage is Zone 2 with Jubilee + Metropolitan lines. More expensive than Croydon (£2,000 pcm at The Quarters) but with meaningfully better connectivity and a safe residential grain.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Jubilee", type: "tube" },
      { name: "Metropolitan", type: "tube" },
      { name: "Overground", type: "overground" },
    ],
    primary_stations: [
      { name: "Finchley Road", lines: ["Jubilee", "Metropolitan"], walk_minutes_from_centre: 2 },
      { name: "Swiss Cottage", lines: ["Jubilee"], walk_minutes_from_centre: 5 },
      { name: "South Hampstead", lines: ["Overground"], walk_minutes_from_centre: 8 },
    ],
    times_to_anchors: { city_of_london: 25, canary_wharf: 22, soho_fitzrovia: 15, kings_cross_shoreditch: 25 },
    multi_cluster_score: 3,
    redundancy_score: 3,
    notes: "Finchley Road is a two-line tube interchange (Jubilee + Metropolitan) with Metropolitan offering the fastest Zone 1 ingress — direct to Baker Street in 4 minutes and King's Cross in 14 via the Circle/H&C at Baker Street. South Hampstead (Mildmay line) gives an entirely independent east-west Overground corridor. Jubilee is among the most reliable Tube lines (Night Tube Fri/Sat).",
    sources: [
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL journey planner", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/travel-information/visiting-london/getting-around/overground-line-names", label: "TfL Overground line names (Mildmay Nov 2024)", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 19 },
      { cohort: "30-39", pct: 24 },
      { cohort: "40-49", pct: 16 },
      { cohort: "50+", pct: 41 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 36 },
      { group: "White — other", pct: 31 },
      { group: "Asian or Asian British", pct: 12 },
      { group: "Mixed", pct: 7 },
      { group: "Black or Black British", pct: 6 },
      { group: "Other ethnic group", pct: 8 },
    ],
    household_mix: [
      { type: "Single person", pct: 36 },
      { type: "Couple no children", pct: 22 },
      { type: "Couple with children", pct: 20 },
      { type: "Shared household", pct: 11 },
      { type: "Lone parent", pct: 7 },
      { type: "Other", pct: 4 },
    ],
    student_pct: 11,
    professional_renter_pct: 38,
    notes: "Census 2021 across Swiss Cottage + South Hampstead wards. Mature, older-skewing — owner-occupier weight is high. Distinctive 'White — other' Jewish and European cohort concentrated around South Hampstead / Belsize.",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "safe",
    crime_vs_borough: "below",
    crime_vs_croydon: "much-safer",
    after_dark_assessment: "Genuinely calm after dark. Finchley Road corridor is well-lit and stays reasonably populated until ~22:30 thanks to O2 Centre cinema + restaurants. Residential side streets toward Belsize Park and South Hampstead are quiet and low-friction. The specific risk vector is petty theft around Swiss Cottage tube exit and Finchley Road station forecourt during late-night closing hours at the O2 Centre food court — pickpocketing and occasional scooter-grab phone thefts, but no violent-crime cluster.",
    concerns: [
      "Scooter-grab phone theft reported intermittently along Finchley Road outside O2 Centre (2024-25 Met Police crime-map pattern)",
    ],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police/swiss-cottage/", label: "Met Police — Swiss Cottage", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: false,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Swiss Cottage Open Space", size_acres: 4, walk_minutes: 1, notes: "Leisure-centre adjacent pocket park — children's play, lawn, cafe kiosk" },
      { name: "Primrose Hill", size_acres: 62, walk_minutes: 15, notes: "Iconic London viewpoint, skyline panorama" },
      { name: "Regent's Park (northwest edge)", size_acres: 395, walk_minutes: 18, notes: "Royal Park — London Zoo, boating lake, sports pitches" },
      { name: "Hampstead Heath (West Heath)", size_acres: 790, walk_minutes: 22, notes: "Major wilderness-scale London park" },
    ],
    overall_assessment: "Genuine mid-tier green. Swiss Cottage Open Space directly outside the tube is a usable daily pocket park. Primrose Hill at 15 minutes is weekly-use walking range. The Heath is reachable on foot (22 min) but residents more often use bus or cycle.",
    sources: [
      { url: "https://www.camden.gov.uk/parks-open-spaces", label: "Camden Council — parks and open spaces", type: "council", accessed_date: "2026-04-17" },
      { url: "https://www.royalparks.org.uk/parks/regents-park", label: "Royal Parks — Regent's Park", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Waitrose Finchley Road", type: "supermarket", walk_minutes: 3, notes: "Inside O2 Centre — full-range Waitrose" },
      { name: "M&S Food O2 Centre", type: "supermarket", walk_minutes: 3, notes: "Full Simply Food layout adjacent to Waitrose" },
      { name: "Tesco Express Finchley Road", type: "convenience", walk_minutes: 4, notes: "Top-up convenience" },
      { name: "Daily Fresh Foods", type: "grocer", walk_minutes: 5, notes: "Independent fruit/veg on Finchley Road" },
    ],
    gyms: [
      { name: "Virgin Active Swiss Cottage", type: "premium", walk_minutes: 2, notes: "Full-service club — pool, spin, classes" },
      { name: "PureGym Swiss Cottage", type: "budget", walk_minutes: 3, notes: "Large 24h budget gym inside O2 Centre" },
      { name: "Swiss Cottage Leisure Centre", type: "council leisure", walk_minutes: 1, notes: "Council-run — Olympic pool, gym, spa" },
      { name: "Frame Swiss Cottage", type: "boutique", walk_minutes: 5, notes: "Boutique group classes — barre, HIIT, yoga" },
      { name: "F45 Belsize Park", type: "boutique", walk_minutes: 10, notes: "HIIT functional training" },
      { name: "London Shootfighters (West Hampstead)", type: "martial arts", walk_minutes: 12, notes: "MMA / BJJ / Muay Thai — Caner-specific relevance" },
    ],
    food_and_drink: [
      { name: "The Alice House", type: "gastropub", walk_minutes: 4, notes: "Belsize/West Hampstead pub with solid kitchen" },
      { name: "Ye Olde Swiss Cottage", type: "pub", walk_minutes: 1, notes: "Sam Smith's pub — namesake mock-chalet" },
      { name: "Gail's Swiss Cottage", type: "bakery-cafe", walk_minutes: 2, notes: "Standard quality-tier bakery/cafe chain" },
      { name: "Bradley's (Finchley Road)", type: "restaurant", walk_minutes: 5, notes: "Long-running modern European — local institution" },
      { name: "Singapore Garden", type: "restaurant", walk_minutes: 6, notes: "Regarded southeast-Asian near Belsize" },
    ],
    health: [
      { name: "Royal Free Hospital (Hampstead)", type: "hospital", walk_minutes: 15, notes: "Major NHS teaching hospital with A&E" },
      { name: "Swiss Cottage Surgery", type: "GP", walk_minutes: 3, notes: "NHS GP practice" },
      { name: "Belsize Priory Medical Practice", type: "GP", walk_minutes: 6, notes: "Alternative GP" },
      { name: "Boots Pharmacy O2 Centre", type: "pharmacy", walk_minutes: 3, notes: "Full-range pharmacy" },
    ],
    cultural: [
      { name: "Hampstead Theatre", type: "theatre", walk_minutes: 2, notes: "Leading new-writing theatre — directly next to Swiss Cottage tube" },
      { name: "Swiss Cottage Library", type: "library", walk_minutes: 1, notes: "Basil Spence-designed (1964) — Grade II listed" },
      { name: "Odeon Swiss Cottage", type: "cinema", walk_minutes: 1, notes: "Multiplex cinema" },
      { name: "Everyman Finchley Road", type: "cinema", walk_minutes: 3, notes: "Boutique cinema with bar — inside O2 Centre" },
      { name: "Camden Arts Centre", type: "gallery", walk_minutes: 12, notes: "Well-regarded contemporary gallery" },
    ],
    notes: "Swiss Cottage has a genuinely complete amenity profile — Waitrose + M&S + Virgin Active + Hampstead Theatre + two cinemas + Royal Free in a 15-minute radius. The O2 Centre concentrates commercial amenity in one block. The forthcoming O2 Centre masterplan will replace the centre with 1,800 homes + 7 acres of parkland + Third Space + restaurants.",
    sources: [
      { url: "https://www.hampsteadtheatre.com/", label: "Hampstead Theatre", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.virginactive.co.uk/clubs/swiss-cottage", label: "Virgin Active Swiss Cottage", type: "operator", accessed_date: "2026-04-17" },
      { url: "https://o2centremasterplan.co.uk/", label: "O2 Centre Masterplan", type: "developer", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: {
    status: "active",
    investment_pipeline: "The O2 Centre Finchley Road masterplan (Landsec) is Camden's largest planning application since King's Cross — 14 acres, ~1,800 homes, 7+ acres of new parkland, Third Space health club, cinema, supermarket, health centre, new town square, ~180,000 sq ft commercial space, car-free development. Planning approved 2023, construction start 2026, first homes 2027, full build-out phased to 2037+. Total scheme value estimated £1.5bn+.",
    recent_milestones: [
      "2023 — O2 Centre masterplan planning permission granted by Camden",
      "2024 — Overground line naming (Mildmay) confirmed at South Hampstead",
      "2025 — Site preparation and enabling works commenced on O2 Centre footprint",
    ],
    upcoming_milestones: [
      "2026 — Full construction mobilisation on O2 Centre Phase 1",
      "2027 — First O2 Centre homes expected to complete; Third Space committed as anchor health-club tenant",
      "2028 — Planned first wave of new parkland opens",
    ],
    trajectory_through_2027: "Swiss Cottage is mid-transition from 'mature plateau' to 'active early-phase regeneration'. In August 2027, the O2 Centre will be a live construction site — the immediate southern edge of the masterplan will be hoarded with tower cranes visible along Finchley Road. First Phase 1 residential completions scheduled to arrive just inside this window. The existing retail/cinema offer will be largely preserved through construction (phased).",
    sources: [
      { url: "https://o2centremasterplan.co.uk/", label: "O2 Centre masterplan (developer)", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.landsec.com/our-portfolio/future-developments/o2-centre", label: "Landsec — O2 Centre", type: "developer", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Pass. Safe residential Camden.",
        "1.2": "The Quarters Swiss Cottage is modern (2020). Modern rental stock present.",
        "1.3": "Jubilee + Metropolitan at Finchley Road. Zone 2.",
        "1.4": "The Quarters by Bravo operates here — 103 studios. Active professional rental.",
        "1.5": "Mature residential public realm in good order.",
        "1.6": "Not in decline. Stable.",
      },
      "good",
      "T1 clean.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "partial", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Finchley Road and Swiss Cottage have walkable essentials.",
        "2.2": "Grocery available on Finchley Road.",
        "2.3": "The Quarters Swiss Cottage has a 'fully fitted top spec gymnasium'. Swiss Cottage Leisure Centre nearby.",
        "2.4": "Primrose Hill 15 min, Hampstead Heath 20 min. Accessible but not core.",
        "2.5": "Quiet residential at night.",
        "2.7": "Camden borough professional renter skew.",
      },
      "good",
      "T2 strong. The Quarters provides on-site gym. Green space is accessible but not immediate.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "partial", "3.3": "partial", "3.4": "pass", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "No active regeneration. Mature area.",
        "3.2": "Hampstead Theatre. Swiss Cottage Library. No major cultural institution.",
        "3.3": "Moderate sense of place. 'Swiss Cottage' is recognisable but not strongly destination-led.",
        "3.4": "Complete 15-minute neighbourhood.",
        "3.5": "No 2024/25 jury wins. Mature residential coverage.",
        "3.6": "Residential rhythm. Not strongly day/night differentiated.",
      },
      "moderate",
      "T3 moderate. Comfortable residential but no strong identity anchor.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "partial", "5.4": "partial" },
      {
        "5.1": "2/4 anchors ≤25 (Canary Wharf 22, TCR 15). Bank 25 borderline, Old Street 25 borderline. Average ~22 min.",
        "5.2": "Jubilee + Metropolitan + Overground. Three products but Jubilee + Met share trackbed. Redundancy 3/5.",
        "5.3": "Plateaued. No ascending trajectory.",
        "5.4": "Local cafes but not a standout third-space area.",
      },
      "moderate",
      "T5 moderate. Connectivity is decent but not top-tier. No trajectory.",
    ),
    overall_grade: "B",
    grade_reasoning: "B — clean T1, strong T2 daily life, but T3 identity is moderate and T5 connectivity is decent rather than outstanding. The Quarters Swiss Cottage is the headline finding — 4.84/5.00 HomeViews with strong management reviews.",
  },

  projects: [
    quartersSwissCottage,
    o2CentreRedevelopment,
  ],

  external_links: [
    { url: "https://thequarters.co.uk/", label: "The Quarters by Bravo", type: "developer", accessed_date: "2026-04-12" },
    { url: "https://www.homeviews.com/development/the-quarters-swiss-cottage", label: "HomeViews — The Quarters Swiss Cottage", type: "other", accessed_date: "2026-04-12" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default swissCottage;
