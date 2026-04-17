import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Project consts (extracted for external_links / price_transparency mutation) ──

const whitechapelGalliard = buildProject({
  id: "whitechapel-galliard", area_id: "whitechapel", name: "Galliard Homes Whitechapel", developer: "Galliard Homes", operator: "Galliard Homes", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "Galliard delivered the bulk of modern stock in Whitechapel including Trinity Square.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Galliard's modern delivery — functional build quality at mid-market standard.",
    t4_1_amenity_package: "Decent amenity package typical of Galliard product.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
whitechapelGalliard.external_links = [
  { url: "https://www.galliardhomes.com/guides/whitechapel/living-in-whitechapel-london-e1", label: "Galliard Homes — Whitechapel", type: "developer", accessed_date: "2026-04-12" },
];
whitechapelGalliard.rental.price_transparency = "enquire";

const silkDistrict = buildProject({
  id: "silk-district", area_id: "whitechapel", name: "The Silk District", developer: "Mount Anvil / L&Q", operator: "Various agents", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "564 homes across three phases (up to 25 storeys). 24-hour concierge, gym, cinema room, co-working spaces, rooftop gardens. HomeViews 4.48/5.",
  amenity_tier: "strong", overall_grade: "B", architects: ["BSBG"],
  evaluation_reasoning: {
    t2_6_building_quality: "Mount Anvil / L&Q joint venture — modern build quality with phased delivery through 2025-2026. HomeViews 4.48/5 is a strong resident signal.",
    t4_1_amenity_package: "Strong amenity stack — 24-hour concierge, cinema room, two co-working spaces, rooftop gardens, private gym.",
    t4_4_signature_arch: "Not signature-authored but well-regarded modern design.",
  },
});
silkDistrict.external_links = [
  { url: "https://mountanvil.com/find-your-home/the-silk-district/", label: "The Silk District — Mount Anvil", type: "developer", accessed_date: "2026-04-12" },
];
silkDistrict.rental.price_transparency = "enquire";

const almaWhitechapel = buildProject({
  id: "alma-whitechapel", area_id: "whitechapel", name: "Alma", developer: "British Land", operator: "Native Residential", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "blocked",
  preview: "159-unit BTR by Native Residential. Triangular tower, approx. 18 storeys. Concierge, gym, workspace, roof terrace, cinema. Studios from £2,950 pcm — premium pricing.",
  amenity_tier: "premium", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "British Land development with Native Residential management — premium BTR specification.",
    t4_1_amenity_package: "Premium — concierge, gym, shared workspace, roof terrace, cleaning services, cinema, communal areas, bike storage.",
    t4_4_signature_arch: "Distinctive triangular tower form but architect not confirmed as signature-tier.",
  },
});
almaWhitechapel.external_links = [
  { url: "https://www.native-communities.com/portfolio/alma/", label: "Alma — Native Residential", type: "operator", accessed_date: "2026-04-12" },
];
almaWhitechapel.rental.price_transparency = "listed";

const aldgatePlace = buildProject({
  id: "aldgate-place", area_id: "whitechapel", name: "Aldgate Place", developer: "Barratt London / British Land", operator: "Various agents", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "463 homes (up to 21 storeys) at Whitechapel High Street / Leman Street. 24-hour concierge, gym, landscaped roof gardens. Rental through individual landlords.",
  amenity_tier: "strong", overall_grade: "B", architects: ["Allies & Morrison"],
  evaluation_reasoning: {
    t2_6_building_quality: "Barratt London / British Land joint venture — reliable modern build quality. Completed 2016.",
    t4_1_amenity_package: "Strong — 24-hour concierge, landscaped roof gardens, private gym, underground parking.",
    t4_4_signature_arch: "Allies & Morrison is a respected practice — professional-level architecture.",
  },
});
aldgatePlace.rental.price_transparency = "enquire";

const goodmansFields = buildProject({
  id: "goodmans-fields", area_id: "whitechapel", name: "Goodman's Fields", developer: "Berkeley Group", operator: "Various agents", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "864 homes (up to 23 storeys) with 18m swimming pool, spa, sauna, steam room, gym, screening room, 2 acres of gardens. HomeViews 4.03/5. Rental through individual landlords.",
  amenity_tier: "premium", overall_grade: "A", architects: ["Lifschutz Davidson Sandilands"],
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley Group delivery — premium specification with strong build quality.",
    t4_1_amenity_package: "Premium — 18m pool, spa with sauna and steam room, gym, screening room, 2 acres of landscaped gardens, public art, 24-hour concierge.",
    t4_4_signature_arch: "Lifschutz Davidson Sandilands — respected practice. Not Pritzker-tier but professional.",
  },
});
goodmansFields.external_links = [
  { url: "https://www.berkeleygroup.co.uk/developments/london/aldgate/goodmans-fields", label: "Goodman's Fields — Berkeley Group", type: "developer", accessed_date: "2026-04-12" },
];
goodmansFields.rental.price_transparency = "enquire";

const whitechapel: Area = {
  id: "whitechapel",
  name: "Whitechapel",
  aliases: ["Whitechapel Road", "Royal London"],
  borough: "Tower Hamlets",
  postcodes: ["E1"],

  headline:
    "Elizabeth Line transformed Whitechapel into one of London's best-connected Zone 2 stations — 3 minutes to Canary Wharf, 8 to Tottenham Court Road, four independent lines at one interchange.",
  preview:
    "The biggest connectivity upgrade winner of the Elizabeth Line era. Four lines at one interchange give a 7.5-minute average to all four employment anchors — tied with King's Cross and Canary Wharf for best in the dataset. Zone 2 pricing with Zone 1 reach.",

  long_form: {
    full: "Whitechapel sits at the heart of Tower Hamlets and was transformed by the Elizabeth Line opening in May 2022. Four lines at one interchange (Elizabeth, District, Hammersmith & City, Overground Windrush) give it a 7.5-minute average to the four employment anchors — tied with King's Cross and Canary Wharf for the best connectivity score in the entire candidate list. The area carries the East End's layered history: Bangladeshi community, street markets, the Royal London Hospital, and now a wave of modern residential delivery. Galliard Homes has delivered the bulk of modern stock. Safety is the main concern — Whitechapel ward tracks 167 crimes per 1,000 residents, which is elevated, and synthesis reads T1.1 as close to fail under a conservative reading.",
    history: "Historic East End gateway. Whitechapel Road market has operated for centuries. The Royal London Hospital is a major institutional anchor. Elizabeth Line arrival in 2022 was the transformative event.",
    vibe: "Busy, layered, multicultural. Whitechapel Road is a sensory-dense high street with market stalls, Bangladeshi restaurants, and continuous footfall. Side streets are calmer.",
    weekday: "A Tuesday at 7pm: Whitechapel Road still busy with market activity winding down; Elizabeth Line station generating steady commuter flow; restaurants filling up.",
    weekend: "A Saturday: market in full swing; Whitechapel Gallery draws visitors; residential side streets quiet.",
    notable: "Whitechapel Gallery; Royal London Hospital; Whitechapel Market; Elizabeth Line interchange.",
    croydon_comparison: "Whitechapel delivers vastly stronger connectivity than Croydon — 8 minutes to TCR vs 40+. The trade-off is a denser, noisier urban grain and a less clean safety profile, though the ward is safer than Croydon on most metrics.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Elizabeth", type: "tube" },
      { name: "District", type: "tube" },
      { name: "Hammersmith & City", type: "tube" },
      { name: "Overground (Windrush)", type: "overground" },
    ],
    primary_stations: [
      { name: "Whitechapel", lines: ["Elizabeth", "District", "Hammersmith & City", "Overground"], walk_minutes_from_centre: 5 },
      { name: "Aldgate East", lines: ["District", "Hammersmith & City"], walk_minutes_from_centre: 12 },
    ],
    times_to_anchors: { city_of_london: 9, canary_wharf: 3, soho_fitzrovia: 8, kings_cross_shoreditch: 10 },
    multi_cluster_score: 5,
    redundancy_score: 5,
    notes: "The Elizabeth Line's May 2022 arrival transformed Whitechapel from a Zone 2 District/H&C stop into one of London's best-connected stations. 3 minutes to Canary Wharf, 8 to TCR, 9 to Bank — the cross-London reach is now functionally Zone 1. Four independent lines is bomb-proof redundancy. Occasional Overground weekend closures are the only meaningful risk and Elizabeth + District cover all four anchors even then.",
    sources: [
      { url: "https://tfl.gov.uk/tube-dlr-overground/status/", label: "TfL status and JourneyPlanner", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "18-29",
    age_breakdown: [
      { cohort: "18-29", pct: 32 },
      { cohort: "30-39", pct: 25 },
      { cohort: "40-49", pct: 14 },
      { cohort: "50+", pct: 29 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 17 },
      { group: "White — other", pct: 18 },
      { group: "Asian or Asian British", pct: 52 },
      { group: "Black or Black British", pct: 6 },
      { group: "Mixed", pct: 4 },
      { group: "Other", pct: 3 },
    ],
    household_mix: [
      { type: "Single person", pct: 30 },
      { type: "Couple no children", pct: 18 },
      { type: "Couple with children", pct: 22 },
      { type: "Lone parent", pct: 10 },
      { type: "Shared household", pct: 18 },
      { type: "Other", pct: 2 },
    ],
    student_pct: 14,
    professional_renter_pct: 42,
    notes: "Whitechapel ward grew from 14,190 to 18,841 residents between 2011-2021 (+32.8%) — one of the fastest-growing wards in London, driven by residential delivery and Elizabeth Line anticipation. 20-39 cohort at 54%. Bangladeshi community concentrated but diluting as new-build delivery brings in young professional renter inflow. Barts Medical School + London Hospital Medical College staff drive a professional-renter subpopulation.",
    sources: [
      { url: "https://www.ons.gov.uk/visualisations/censusareachanges/E09000030", label: "ONS Census 2021 — Tower Hamlets area changes", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "moderate",
    crime_vs_borough: "above",
    crime_vs_croydon: "safer",
    after_dark_assessment: "This is the area where the reputation and the data diverge most sharply in the dataset. Whitechapel Road is well-lit and heavily trafficked until midnight — market stalls, restaurants, bus density, hospital night shift flow. Walking the main corridor at 22:00 is genuinely fine and feels safer than the ward crime rate (167/1k, 13.6% above borough average) suggests. The actual risk is concentrated in specific hotspots: Plumbers Row (highest crime concentration), Raven Row (violent and public-order offences), and the narrow cut-throughs between Whitechapel Road and Commercial Road (New Road, Fieldgate Street). Ward-level violent crime is 50.4/1k — elevated but flat year-on-year. Women walking alone report: main road fine, side streets after midnight less so. Crucially this ward is still safer than East Croydon on the specific vectors Caner cares about — no aggressive station-forecourt begging, no Overground / late-tram post-pub aggression, no known gang-tagged cut-throughs.",
    concerns: [
      "Plumbers Row — highest overall crime concentration in ward",
      "Raven Row — violent and public-order offence cluster",
      "New Road / Fieldgate Street cut-throughs after midnight",
      "Whitechapel Road drug-sales visibility during daytime (reported in local Reddit threads)",
    ],
    sources: [
      { url: "https://www.met.police.uk/a/your-area/met/tower-hamlets/whitechapel/", label: "Met Police — Whitechapel SNT", type: "met-police", accessed_date: "2026-04-17" },
      { url: "https://streetscan.co.uk/crime/a/ward/whitechapel/e05009336", label: "Streetscan — Whitechapel ward crime", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: false,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Altab Ali Park", size_acres: 1.2, walk_minutes: 8, notes: "Memorial park on former St Mary Matfelon churchyard — small, ceremonial" },
      { name: "Swedenborg Gardens", size_acres: 2.5, walk_minutes: 12, notes: "Local community park south of Commercial Road" },
      { name: "Weavers Fields", size_acres: 9, walk_minutes: 15, notes: "Larger park to the north-east — actual recreational green" },
      { name: "Mile End Park", size_acres: 75, walk_minutes: 20, notes: "Real park — 2 stops on H&C or 10-min walk" },
    ],
    overall_assessment: "Limited green within the 10-min footprint. Altab Ali Park is ceremonial; Swedenborg Gardens is local-scale. For meaningful green Whitechapel residents rely on Mile End Park (2 tube stops or 20-min walk) or Victoria Park (bus). This is a real weakness but less catastrophic than Aldgate East because the tube-adjacent alternatives are plentiful.",
  },
  amenities: {
    grocery: [
      { name: "Sainsbury's Whitechapel", type: "supermarket", walk_minutes: 2, notes: "Main large-format anchor at the station" },
      { name: "Tesco Express Whitechapel Road", type: "convenience", walk_minutes: 3, notes: "Second option" },
      { name: "Whitechapel Market (stalls)", type: "market", walk_minutes: 0, notes: "Produce, textiles, halal butchers — daily along Whitechapel Road" },
      { name: "Taj Stores Brick Lane", type: "specialty", walk_minutes: 10, notes: "South Asian grocer — spices, fresh herbs, ingredients" },
    ],
    gyms: [
      { name: "PureGym Whitechapel", type: "budget", walk_minutes: 5, notes: "24/7, £27.99/mo, on Whitechapel Road next to East London Mosque" },
      { name: "PureGym Aldgate", type: "budget", walk_minutes: 10, notes: "Second option" },
      { name: "Third Space City Worship Street", type: "premium", walk_minutes: 15, notes: "Premium tier, real stack" },
      { name: "Queen Mary University gyms (QMotion)", type: "academic-public", walk_minutes: 18, notes: "Public membership available" },
      { name: "The Gym Group Aldgate", type: "budget", walk_minutes: 10, notes: "Secondary budget" },
    ],
    food_and_drink: [
      { name: "Tayyabs", type: "restaurant", walk_minutes: 5, notes: "Legendary Punjabi grill — Fieldgate Street" },
      { name: "Lahore Kebab House", type: "restaurant", walk_minutes: 8, notes: "Umberston Street institution" },
      { name: "Needoo Grill", type: "restaurant", walk_minutes: 5, notes: "Tayyabs alternative, similar quality" },
      { name: "Brick Lane curry corridor", type: "restaurants", walk_minutes: 10, notes: "Full range" },
      { name: "East London Liquor Company", type: "bar", walk_minutes: 12, notes: "Craft distillery, bar — north of the Crossrail station" },
    ],
    health: [
      { name: "Royal London Hospital", type: "hospital", walk_minutes: 2, notes: "Major A&E — right by the station" },
      { name: "Jubilee Street Practice", type: "GP", walk_minutes: 6, notes: "NHS GP" },
      { name: "Boots Whitechapel Road", type: "pharmacy", walk_minutes: 3, notes: "Extended hours" },
    ],
    cultural: [
      { name: "Whitechapel Gallery", type: "gallery", walk_minutes: 10, notes: "Major contemporary art institution — founded 1901" },
      { name: "Whitechapel Market", type: "market", walk_minutes: 0, notes: "Centuries-old street market" },
      { name: "Idea Store Whitechapel", type: "library", walk_minutes: 5, notes: "Flagship Tower Hamlets library and learning centre" },
      { name: "Rich Mix Bethnal Green", type: "arts centre", walk_minutes: 15, notes: "Cinema, music, events" },
      { name: "Brick Lane", type: "district", walk_minutes: 10, notes: "Street art, vintage, Sunday Upmarket" },
    ],
    notes: "Amenity texture is layered — sensory-dense street market daytime, curry corridor at night, hospital / library / gallery as institutional anchors. Gym density is middling. Grocery coverage excellent via Sainsbury's + market. Food ranking is outstanding for South Asian cuisine specifically.",
  },
  regeneration: {
    status: "active",
    investment_pipeline: "Barts Life Sciences Cluster at Whitechapel North — £800m secured, 5,000+ jobs, 10-15 year delivery. Tower Hamlets' £15m public realm investment along Whitechapel Road (renovating up to 40 shops, market infrastructure). Whitechapel Masterplan (BDP) delivering residential and commercial phases. Tower Hamlets borough-wide 52,000-home pipeline (March 2026) has significant Whitechapel allocation. Royal London Hospital expansion. Ongoing residential delivery by Galliard Homes, Mount Anvil/L&Q (The Silk District), British Land (Alma via Native).",
    recent_milestones: [
      "2022 — Elizabeth Line opening (transformative)",
      "2023 — The Silk District Phase 1 delivery",
      "2024 — Alma BTR (Native Communities) completion",
      "2025 — £15m Whitechapel Road public realm works begin",
    ],
    upcoming_milestones: [
      "2026 — Whitechapel masterplan Phase 2 residential delivery",
      "2026-2028 — Barts Life Sciences Cluster Phase 1",
      "2027 — Silk District final phase completion",
    ],
    trajectory_through_2027: "Ascending — the Elizabeth Line effect is still being priced in and the Barts Life Sciences cluster arrival will strengthen the eastern edge. By August 2027 Whitechapel will feel more professional-renter-heavy than it does now, with the £15m public realm investment visibly improving the Whitechapel Road streetscape. Rent growth likely 5-7% annualised through 2026-27 vs Tower Hamlets baseline of ~2%. This is one of the highest-trajectory areas in inner East London.",
    sources: [
      { url: "https://www.bdp.com/en/projects/p-z/whitechapel-masterplan/", label: "BDP — Whitechapel Masterplan", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.bartshealth.nhs.uk/", label: "Barts Health NHS Trust", type: "other", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Ward tracks 167/1k — elevated. Close to fail under conservative reading. Footfall on Whitechapel Road mitigates but side streets carry concern.",
        "1.2": "Modern rental stock present — Galliard Homes delivery, Trinity Square, and nearby Goodman's Fields cluster.",
        "1.3": "Four lines at one interchange: Elizabeth, District, H&C, Overground. Emphatic pass.",
        "1.4": "Active professional rental market with multiple operators.",
        "1.5": "Public realm improving with Elizabeth Line station upgrade and ongoing regeneration.",
        "1.6": "Not in decline — major investment continuing.",
      },
      "moderate",
      "T1 passes on all rows except T1.1 which is marginal. Safety is the concern.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "unknown", "2.4": "partial", "2.5": "partial", "2.7": "pass" },
      {
        "2.1": "Whitechapel Road provides dense walkable essentials — market, convenience stores, restaurants.",
        "2.2": "Multiple grocery options along Whitechapel Road.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Limited green space within immediate walking distance.",
        "2.5": "Whitechapel Road is noisy; residential side streets are calmer but the main corridor carries late-night activity.",
        "2.7": "Census 2021: 20-39 at 54% — top-skew. Strong pass.",
      },
      "moderate",
      "Daily essentials are strong. Green space and night quiet are the gaps.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "pass" },
      {
        "3.1": "Active regeneration — Elizabeth Line, Whitechapel Estate, ongoing residential delivery.",
        "3.2": "Whitechapel Gallery, Royal London Hospital, Whitechapel Market — strong cultural anchors.",
        "3.3": "Distinctive sense of place — layered East End identity with Bangladeshi community, market culture, and institutional presence.",
        "3.4": "15-minute completeness strong — transport, grocery, restaurants, health (Royal London), culture all walkable.",
        "3.5": "Architectural quality is mixed — new stock is functional rather than signature; historic fabric gives character.",
        "3.6": "Day/night rhythm is active — busy market daytime, restaurant culture evening, quieter late night on residential streets.",
      },
      "good",
      "T3 is strong — genuine sense of place, cultural anchors, and 15-minute completeness.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 5/5 — 7.5-min average to all four anchors. Tied for best in dataset with King's Cross and Canary Wharf.",
        "5.2": "Four independent lines at one interchange — bomb-proof redundancy.",
        "5.3": "Ascending — Elizabeth Line effect still being priced in; ongoing regeneration.",
        "5.4": "Third-space culture exists (Whitechapel Gallery, cafes) but thinner than established creative quarters.",
      },
      "strong",
      "T5 is the headline — best-in-class connectivity. 5/5 redundancy, 7.5-min average.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — exceptional T5 connectivity (tied for best in dataset), strong T3 identity, but T1.1 safety marginal and T2 daily-life gaps in green space and night quiet.",
  },

  projects: [
    whitechapelGalliard,
    silkDistrict,
    almaWhitechapel,
    aldgatePlace,
    goodmansFields,
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default whitechapel;
