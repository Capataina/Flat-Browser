import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Projects ─────────────────────────────────────────────────────────
const triptychBankside = buildProject({
  id: "triptych-bankside", area_id: "borough-london-bridge", name: "Triptych Bankside",
  developer: "Great Portland Estates", operator: "Agent-managed", building_type: "Build-to-Sell",
  build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "Art-led twin towers (16 and 19 storeys) at 185 Park Street by Squire and Partners. 169 units. Direct access to Tate Modern and Borough Market. Premium Zone 1 pricing — 1-bed from ~£2,800 pcm.",
  amenity_tier: "decent", is_signature: true, architects: ["Squire and Partners"], overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "2024 completion by Great Portland Estates. Generally positive finish-quality reviews.",
    t4_1_amenity_package: "Concierge, residents' lounge, gym, landscaped gardens, cycle storage.",
    t4_4_signature_arch: "Squire and Partners — recognised London practice with art-led design language.",
  },
});
triptychBankside.rental.price_transparency = "enquire";
triptychBankside.external_links = [
  { url: "https://triptychbankside.com/", label: "Triptych Bankside", type: "developer", accessed_date: "2026-04-12" },
];

const banksideYardsOpus = buildProject({
  id: "bankside-yards-opus", area_id: "borough-london-bridge", name: "Bankside Yards — Opus",
  developer: "Native Land + Gamuda Land", operator: "unknown", building_type: "Mixed",
  build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "50-storey tower by PLP Architecture. 249 apartments in Opus tower; ~700+ across full scheme. Ultra-premium SE1 riverside position. Expected 2027-2028 completion.",
  amenity_tier: "premium", is_signature: true, architects: ["PLP Architecture"], overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Unbuilt — expected ultra-premium specification given 50-storey riverside tower positioning.",
    t4_1_amenity_package: "Pool, spa, gym, residents' lounges, rooftop terrace, commercial arches below.",
    t4_4_signature_arch: "PLP Architecture — internationally recognised practice. 50-storey tower is a landmark form.",
  },
});
banksideYardsOpus.rental.price_transparency = "enquire";
banksideYardsOpus.external_links = [
  { url: "https://banksideyards.com/", label: "Bankside Yards", type: "developer", accessed_date: "2026-04-12" },
  { url: "https://www.native-land.com/projects/opus/", label: "Opus — Native Land", type: "developer", accessed_date: "2026-04-12" },
];

const southwarkBridgeRoad251 = buildProject({
  id: "251-southwark-bridge-road", area_id: "borough-london-bridge", name: "251 Southwark Bridge Road",
  developer: "London Square", operator: "Agent-managed", building_type: "Build-to-Sell",
  build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "Boutique 8-storey scheme of ~50 units near Bankside. 1-bed from ~£2,200 pcm. Standard AST via agent.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "2023 completion by London Square. Boutique scale.",
    t4_1_amenity_package: "Concierge, gym, landscaped courtyard.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
southwarkBridgeRoad251.rental.price_transparency = "enquire";

const bermondsLocke = buildProject({
  id: "bermonds-locke", area_id: "borough-london-bridge", name: "Bermonds Locke", developer: "Staycity Group", operator: "Locke (Staycity)", building_type: "BTR", living_model: "apart-hotel", build_phase: "complete", tenure: ["rent"], realism: "licence-exempt",
  preview: "Apart-hotel at 157 Tower Bridge Road, SE1. All-inclusive — bills, council tax, Wi-Fi, weekly cleaning. No deposit, no admin fees. Hospitality licence — not an AST. Cafe, bar, gym, coworking.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Modern apart-hotel specification. Design-led Locke brand.",
    t4_1_amenity_package: "Strong — cafe, bar, gym, coworking. Hotel-grade services.",
    t4_4_signature_arch: "Not signature-authored but design-led.",
  },
});
bermondsLocke.external_links = [
  { url: "https://www.lockeliving.com/en/london/bermonds-locke", label: "Bermonds Locke", type: "operator", accessed_date: "2026-04-15" },
];
bermondsLocke.rental.price_transparency = "enquire";
// V2 enrichment applied 2026-04-17 (enrichment-licence-exempt.md — Locke family)
bermondsLocke.rental.affordability = "over-budget";
bermondsLocke.building_quality = {
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "Locke studio/suite specification with full kitchens — the key differentiator versus Citadines/Staybridge/Flexistay. Design-led interiors by Grzywinski+Pons.",
  kitchen_quality: "good",
  heating_type: "communal",
  notes: "Design-led Locke brand standard. Full kitchens enable real cooking.",
};
bermondsLocke.amenities = {
  ...bermondsLocke.amenities,
  concierge: "24h",
  co_working: true,
  gym: true,
  gym_quality: "average",
  bike_storage: true,
  pet_policy: "Pets considered on application (hotel-style).",
  other_amenities: ["On-site cafe/bar", "Co-working hot-desks", "Lounge / social programming"],
  overall_tier: "strong",
};
bermondsLocke.architecture = {
  architects: ["Grzywinski+Pons (interiors)"],
  awards: [],
  is_signature: false,
  style_notes: "Interiors by Grzywinski+Pons — the Brooklyn-based practice known for Locke's design identity. Exterior is competent new-build on Tower Bridge Road; interior experience is the signature.",
};
bermondsLocke.resident_signal = {
  summary: "Locke's design identity is consistent praise across the portfolio. Operator-wide strong sentiment on cafe/bar culture, co-working usability, and studio design.",
  common_praise: ["Design-led interiors", "Working cafe/bar and co-working", "24h hospitality desk", "Full kitchen"],
  common_complaints: ["Premium pricing compared to BTR alternatives", "Gym is small"],
};

const boroughLondonBridge: Area = {
  id: "borough-london-bridge",
  name: "Borough / London Bridge",
  aliases: ["Borough", "London Bridge", "Borough Market"],
  borough: "Southwark",
  postcodes: ["SE1"],

  headline:
    "Zone 1 with five transport products at London Bridge — 4 minutes to Bank, 7 to Canary Wharf. Borough Market is the cultural anchor. The best connectivity in south London, tied with King's Cross for fastest average anchor time.",
  preview:
    "London Bridge gives five products at one interchange (Northern, Jubilee, Thameslink, Southeastern, Southern). Average 7.25 min to anchors — tied for best in the entire dataset. Borough Market is a world-class food anchor. The limitation is that this is premium Zone 1 pricing with no dominant BTR operator for adult renters.",

  long_form: {
    full: "Borough / London Bridge sits on the South Bank between Blackfriars and Tower Bridge, anchored by three load-bearing institutions — Borough Market (one of Europe's oldest food markets, operating on the same site since at least 1756), The Shard (Western Europe's tallest completed building, 2013), and London Bridge station, the UK's fourth-busiest rail terminus. The area's character is a rare combination of medieval street grain (Borough High Street, Park Street, Bedale Street), heavy working-day footfall from both tourism and the 55,000-job South Bank office cluster, and a riverside cultural strip that runs continuously from Tate Modern through Shakespeare's Globe to City Hall. Transport is the single strongest case for the area. London Bridge station gives five independent rail products at one interchange — Northern line (Bank branch), Jubilee line, Thameslink, Southeastern, and Southern. Journey times are outstanding — 4 minutes to Bank, 7 to Canary Wharf, 10 to Tottenham Court Road, 8 to King's Cross — averaging 7.25 minutes, tied with King's Cross as the fastest in the entire 55-area dataset. Residential delivery is the limitation. Borough has historically been office-heavy and tourism-heavy rather than residential-heavy. Bermonds Locke (Staycity) offers the only hospitality-licence fallback in the immediate area at Tower Bridge Road. Rental pricing follows Zone 1 premium convention — studios from ~£2,200, 1-beds from ~£2,800-3,200 at the mainstream new-build level. For Caner's envelope, Borough is the most expensive area in the five covered here — A-grade on everything that isn't affordability.",
    history: "Borough High Street follows the Roman road line of Watling Street south from the original London Bridge, making this the oldest continuously-inhabited district on the south bank. The market itself dates from at least 1014 and was formally chartered in 1406 — it has operated on or adjacent to the current Borough Market triangle since 1756. The area was traditionally a coaching-inn belt for travellers from Kent; George Inn (NT-owned) is the surviving example. The post-1980 trajectory is the docklands-era transformation of riverside industrial and warehouse stock into cultural anchors — Bankside Power Station converted to Tate Modern (opened 2000, Herzog & de Meuron), Shakespeare's Globe reconstructed 1997, More London office campus delivered 2001-2009. The Shard (Renzo Piano Building Workshop, 2009-2012) was the capstone. London Bridge station's £1.1bn rebuild completed 2018. Borough Market received a £2.5m renovation 2014-2015 and a further roofing extension 2023.",
    vibe: "Heavy pedestrian density from approximately 10:00 through 21:00 on weekdays, with a clear peak at lunchtime and a second peak from 17:00 as South Bank office workers flood the market and riverside pubs. The soundscape is a mix of tourist chatter, market traders, and the rumble of trains entering London Bridge from the east. Cafe and restaurant density is exceptional — Monmouth Coffee, Bread Ahead, Neal's Yard Dairy, Padella, Brindisa all within a 3-minute radius. The residential grain is genuinely thin on the ground.",
    weekday: "Monday to Friday the area is dominated by the commuter-and-tourist dual-engine. From ~07:30 London Bridge disgorges 250,000+ people across the morning peak. Cafes hit peak at 08:30-09:30 and again at 12:30-14:00. The market proper opens Tuesday-Saturday 10:00-17:00. Third-space working-from-cafe culture is strong — WatchHouse, Monmouth, Pavilion Bakery, and the Bridge Theatre cafe are all genuine work-capable venues.",
    weekend: "Saturday is Borough Market's peak day — 10:00-17:00 with queues from 09:30 at Bread Ahead. Pedestrian density on Saturday afternoon exceeds weekday peak and can genuinely make the Stoney Street cut-through impassable. Bankside is crowded with Tate Modern traffic. Sunday sees market close but riverside and cultural anchors remain active. Pub density is good — George Inn, The Anchor (riverside), The Rake (craft beer), Market Porter.",
    notable: "Borough Market (1014+ origin, current site 1756+); The Shard (Renzo Piano, 310m, tallest in Western Europe); Tate Modern (Herzog & de Meuron conversion of Bankside Power Station, opened 2000); Shakespeare's Globe (reconstructed 1997); Southwark Cathedral (earliest fabric c.1220); Hay's Galleria; London Bridge station (2018 rebuild by Grimshaw Architects).",
    croydon_comparison: "Borough is categorically a different city from Croydon on night safety — Tooley Street, Borough High Street, and the South Bank promenade are continuously populated until ~23:30 with restaurant and theatre foot traffic, and the station forecourt is active rather than hostile. Cafe density is orders-of-magnitude higher and tier-cleaner (Monmouth, WatchHouse, Origin). Gyms tier up sharply — Third Space London Bridge is 4 minutes from the station. Transport: Zone 1 vs Zone 5, 4-minute Bank journey vs 25-35 minutes via East Croydon Overground. Price differential is the compromise — expect ~£2,500-3,200 all-in for a studio or 1-bed at new-build level vs Ten Degrees' ~£2,280 contractual — a 15-40% premium to eliminate the core Croydon problems.",
  },

  zones: ["Zone 1"],
  connectivity: {
    lines: [
      { name: "Northern", type: "tube" },
      { name: "Jubilee", type: "tube" },
      { name: "Thameslink", type: "rail" },
      { name: "Southeastern", type: "rail" },
      { name: "Southern", type: "rail" },
    ],
    primary_stations: [
      { name: "London Bridge", lines: ["Northern", "Jubilee", "Thameslink", "Southeastern", "Southern"], walk_minutes_from_centre: 5 },
      { name: "Borough", lines: ["Northern"], walk_minutes_from_centre: 5 },
    ],
    times_to_anchors: { city_of_london: 4, canary_wharf: 7, soho_fitzrovia: 10, kings_cross_shoreditch: 8 },
    multi_cluster_score: 5,
    redundancy_score: 5,
    notes: "London Bridge gives 5 products at one interchange. Redundancy 5/5. Average 7.25 min — tied for best with King's Cross. Night tube on Northern + Jubilee (Fri/Sat). Thameslink runs 24h on the core section.",
    sources: [
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL journey planner", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/tube/stop/940GZZLULNB/london-bridge-underground-station", label: "TfL — London Bridge underground station", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://www.nationalrail.co.uk/stations/london-bridge/", label: "National Rail — London Bridge", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "18-29",
    age_breakdown: [
      { cohort: "18-29", pct: 28 },
      { cohort: "30-39", pct: 28 },
      { cohort: "40-49", pct: 18 },
      { cohort: "50+", pct: 26 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 43 },
      { group: "White — other", pct: 24 },
      { group: "Asian or Asian British", pct: 11 },
      { group: "Black or Black British", pct: 10 },
      { group: "Mixed", pct: 7 },
      { group: "Other ethnic group", pct: 5 },
    ],
    household_mix: [
      { type: "Single person", pct: 40 },
      { type: "Couple no children", pct: 24 },
      { type: "Couple with children", pct: 14 },
      { type: "Lone parent", pct: 7 },
      { type: "Shared household", pct: 10 },
      { type: "Other", pct: 5 },
    ],
    student_pct: 12,
    professional_renter_pct: 55,
    notes: "London Bridge & West Bermondsey ward, Census 2021. 20-39 cohort at ~56% (one of London's highest). Ward also captures Guy's Hospital staff and KCL students, which inflates the 18-29 pct relative to pure young-professional tracts.",
    sources: [
      { url: "https://www.ons.gov.uk/census/maps", label: "ONS Census 2021 — maps", type: "ons", accessed_date: "2026-04-17" },
      { url: "https://crystalroof.co.uk/report/ward/E05014092", label: "CrystalRoof — London Bridge & West Bermondsey", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "safe",
    crime_vs_borough: "average",
    crime_vs_croydon: "much-safer",
    after_dark_assessment: "Walking Borough after 22:00 is materially safer than Croydon. London Bridge station forecourt is continuously active until last train (~00:30 weekdays). Borough High Street and Tooley Street are well-lit with consistent pedestrian flow from restaurants and hotels. The riverside promenade is well-policed and CCTV-dense. Women walking alone: genuinely safe on the named streets; cut-throughs to Tabard Street / south of the railway viaduct are quieter and less recommended after midnight.",
    concerns: [
      "Pickpocket pressure at Borough Market on weekends",
      "Opportunist phone-snatch along Southwark Street near the viaduct arches",
    ],
    sources: [
      { url: "https://www.met.police.uk/sd/stats-and-data/", label: "Met Police crime data — SE1", type: "met-police", accessed_date: "2026-04-17" },
      { url: "https://www.southwark.gov.uk/community-safety", label: "Southwark Council — community safety", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: true,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Potters Fields Park", size_acres: 2, walk_minutes: 7, notes: "Small Thames-side lawn adjacent to City Hall" },
      { name: "Red Cross Garden", walk_minutes: 8, notes: "Octavia Hill historic community garden, Victorian restoration" },
      { name: "Tabard Gardens", size_acres: 3, walk_minutes: 12, notes: "Nearest genuine local park, south of Borough High Street" },
      { name: "Archbishop's Park", size_acres: 10, walk_minutes: 18, notes: "Nearest substantial park (Lambeth side)" },
    ],
    overall_assessment: "Thames frontage is the green story — the South Bank promenade runs unbroken from City Hall through to Blackfriars and gives a continuous waterside walk. Dedicated park space is genuinely thin; you're trading green-per-acre for riverside-per-metre.",
    sources: [
      { url: "https://www.southwark.gov.uk/parks-and-open-spaces", label: "Southwark — parks and open spaces", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Waitrose Tooley Street", type: "supermarket", walk_minutes: 5, notes: "Large supermarket directly adjacent to station" },
      { name: "M&S Food London Bridge Station", type: "supermarket", walk_minutes: 2, notes: "In-station food hall" },
      { name: "Borough Market", type: "market", walk_minutes: 4, notes: "World-class independent produce, Tue-Sat" },
      { name: "Tesco Express Borough High Street", type: "convenience", walk_minutes: 3, notes: "Core convenience" },
      { name: "Whole Foods Clink Street", type: "supermarket", walk_minutes: 8, notes: "Premium grocery" },
    ],
    gyms: [
      { name: "Third Space London Bridge", type: "premium", walk_minutes: 7, notes: "Aspirational tier gym with pool, spa, classes — ~£175/month" },
      { name: "1Rebel Southwark", type: "boutique", walk_minutes: 8, notes: "Spin/boxing/reshape" },
      { name: "PureGym London Bridge (Borough High Street)", type: "budget", walk_minutes: 4, notes: "24h, ~£25/month" },
      { name: "PureGym Southwark Great Suffolk Street", type: "budget", walk_minutes: 7, notes: "Second PureGym option" },
      { name: "Gymbox Bank", type: "premium", walk_minutes: 10, notes: "Flagship, via Northern" },
      { name: "Anytime Fitness London Bridge", type: "mid-tier", walk_minutes: 6, notes: "24h mid-tier" },
      { name: "Virgin Active Bank", type: "premium", walk_minutes: 10, notes: "Premium full-service, via Northern" },
    ],
    food_and_drink: [
      { name: "Padella (pasta, Stoney Street)", type: "restaurant", walk_minutes: 4, notes: "Queue-culture Italian" },
      { name: "Brindisa (Borough Market)", type: "restaurant", walk_minutes: 4, notes: "Spanish tapas" },
      { name: "Monmouth Coffee (Park Street)", type: "cafe", walk_minutes: 4, notes: "Flagship London coffee" },
      { name: "WatchHouse Tower Bridge", type: "cafe", walk_minutes: 6, notes: "Work-from-cafe tier" },
      { name: "The Anchor (riverside)", type: "pub", walk_minutes: 5, notes: "Historic riverside pub" },
      { name: "Flat Iron Square", type: "food hall", walk_minutes: 5, notes: "Casual weekend anchor" },
    ],
    health: [
      { name: "Guy's Hospital", type: "hospital", walk_minutes: 5, notes: "Major teaching hospital with A&E" },
      { name: "Bankside Health Centre (GP)", type: "GP", walk_minutes: 6, notes: "NHS GP" },
      { name: "Boots London Bridge", type: "pharmacy", walk_minutes: 2, notes: "Core pharmacy" },
      { name: "St Thomas' Hospital A&E", type: "hospital", walk_minutes: 15, notes: "Lambeth-side A&E" },
    ],
    cultural: [
      { name: "Tate Modern", type: "gallery", walk_minutes: 10, notes: "One of the world's most-visited modern art museums" },
      { name: "Shakespeare's Globe", type: "theatre", walk_minutes: 11, notes: "Reconstructed 1997" },
      { name: "Bridge Theatre", type: "theatre", walk_minutes: 5, notes: "Major London theatre" },
      { name: "Menier Chocolate Factory", type: "theatre", walk_minutes: 6, notes: "Studio theatre" },
      { name: "Southwark Cathedral", type: "cathedral", walk_minutes: 3, notes: "Earliest fabric c.1220" },
      { name: "The View from the Shard", type: "attraction", walk_minutes: 3, notes: "Observation deck" },
    ],
    notes: "Amenity density is outstanding — genuinely everything a Zone 1 professional needs within 10 minutes. Grocery tier is premium (Waitrose + M&S flagship + Whole Foods within triangular walking range). Gym tier is strong — Third Space is the aspirational anchor and PureGym gives the budget fallback.",
    sources: [
      { url: "https://www.thirdspace.london/clubs/london-bridge", label: "Third Space London Bridge", type: "operator", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: {
    status: "complete",
    investment_pipeline: "Bankside Yards (Native Land + Gamuda Land, ~£2bn across 8 buildings, ~1,000 homes, delivery 2026-2029). Opus Tower is the 50-storey flagship. Otherwise the area is in steady-state — The Shard ecosystem is mature, London Bridge station rebuild completed 2018, Borough Market roofing extension 2023.",
    recent_milestones: [
      "2023 — Borough Market Green Market roofing extension completed",
      "2024 — Tate Modern Blavatnik Building 10th anniversary programming",
      "2025 — Bankside Yards Phase 1 (Arbor office tower) completed",
    ],
    upcoming_milestones: [
      "2026-2027 — Opus Tower (Bankside Yards) topping out",
      "2027-2028 — Bankside Yards residential phases completion",
    ],
    trajectory_through_2027: "Already at peak. The Bankside Yards delivery adds residential volume but won't materially shift the area's character — Borough is a mature Zone 1 cultural district that has been at its current equilibrium since roughly 2018 (London Bridge station rebuild).",
    sources: [
      { url: "https://banksideyards.com/", label: "Bankside Yards", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.native-land.com/projects/opus/", label: "Opus — Native Land", type: "developer", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "partial", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Safe. Strong T1.3 and T1.5.",
        "1.2": "One Tower Bridge (Berkeley) and Borough Yards — modern stock present, though ownership-led.",
        "1.3": "Five products at London Bridge. Best connectivity score in the dataset.",
        "1.4": "No dominant BTR operator for adult renters. Borough Yards ownership-led. One Tower Bridge premium ownership-led.",
        "1.5": "Public realm is strong — Borough Market, The Shard, London Bridge station redevelopment.",
        "1.6": "Not in decline — mature and stable.",
      },
      "good",
      "T1 pass on all six rows. T1.4 is partial — no dominant BTR operator.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "unknown", "2.4": "partial", "2.5": "partial", "2.7": "pass" },
      {
        "2.1": "Borough Market and the surrounding retail make daily essentials walkable and high-quality.",
        "2.2": "Borough Market is world-class for quality grocery and fresh food.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Thames-adjacent but limited dedicated green space. Potters Fields Park is small.",
        "2.5": "Busy transport hub and Borough Market area — not the quietest residential environment at night.",
        "2.7": "20-39 cohort at 51% — top-skew.",
      },
      "good",
      "Strong daily life driven by Borough Market. Quiet-at-night is the weakest row.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "pass", "3.6": "pass" },
      {
        "3.1": "Mature investment — London Bridge Quarter, The Shard, Borough Market renovations.",
        "3.2": "Borough Market is a world-class cultural and commercial anchor.",
        "3.3": "Very strong identity — Borough Market, The Shard, Southwark Cathedral, Thames-side.",
        "3.4": "15-minute completeness is excellent — food, drink, transport, culture, health all within walking distance.",
        "3.5": "The Shard (Renzo Piano) is architecturally significant. London Bridge station redevelopment.",
        "3.6": "Strong day/night rhythm — Borough Market daytime, restaurant scene evening, busy transport hub.",
      },
      "good",
      "T3 is excellent. Borough / London Bridge has one of the strongest identities in London.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "pass" },
      {
        "5.1": "Multi-cluster score 5/5 — all four anchors ≤10 min. Average 7.25 min.",
        "5.2": "Five products at London Bridge — maximum redundancy.",
        "5.3": "Mature and stable rather than ascending. Already at peak.",
        "5.4": "Numerous cafes, restaurants, and cultural venues for third-space use.",
      },
      "good",
      "Strongest T5 in the dataset — unmatched connectivity.",
    ),
    overall_grade: "A",
    grade_reasoning: "A — best connectivity in the dataset, strongest identity in south London, world-class food anchor. No dominant BTR operator (T1.4 partial) and premium Zone 1 pricing makes grad-visa realism unknown, but the location quality is unambiguous.",
  },

  projects: [triptychBankside, banksideYardsOpus, southwarkBridgeRoad251, bermondsLocke],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default boroughLondonBridge;
