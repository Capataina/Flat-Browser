import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const springfieldPlace = buildProject({
  id: "springfield-place", area_id: "tooting", name: "Springfield Place", developer: "Barratt London", operator: "Agent-managed", building_type: "Build-to-Sell", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "232 units (part of wider Springfield Village with ~1,800 homes) on former Springfield Hospital site. New 32-acre public park. 9 min walk to Tooting Bec (Northern line). Sales from £470,000; rental est. 1-bed ~£1,700-£2,000 pcm. 2025-2027 phased.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Barratt London delivery. Mixed low-to-mid rise. In delivery 2025-2027.",
    t4_1_amenity_package: "New 32-acre public park, retail/cafe space, public square. No private communal amenity researched.",
    t4_4_signature_arch: "Not signature-authored. IKEA-designed show apartments (partnership).",
  },
});
springfieldPlace.external_links = [
  { url: "https://www.barratthomes.co.uk/new-homes/dev001958-springfield-place/", label: "Barratt London — Springfield Place", type: "developer", accessed_date: "2026-04-12" },
];

const flexistayTooting = buildProject({
  id: "flexistay-tooting", area_id: "tooting", name: "Flexistay Tooting", developer: "Flexistay", operator: "Flexistay", building_type: "BTR", living_model: "apart-hotel", build_phase: "complete", tenure: ["rent"], realism: "licence-exempt",
  preview: "Budget apart-hotel. 5 min walk from Tooting Broadway (Northern line). Studio apartments from ~£1,800–£2,500+VAT/month all-inclusive. Free Wi-Fi, cleaning, 24h self-service breakfast. Hospitality licence — no referencing.",
  amenity_tier: "basic", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Budget apart-hotel specification. Functional, not premium.",
    t4_1_amenity_package: "Basic — Wi-Fi, cleaning, self-service breakfast. No gym, no concierge.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
flexistayTooting.external_links = [
  { url: "https://www.flexistay.com/H-80-Flexistay-Tooting-Aparthotel.aspx", label: "Flexistay Tooting", type: "operator", accessed_date: "2026-04-15" },
];
flexistayTooting.rental.price_transparency = "enquire";

const tooting: Area = {
  id: "tooting",
  name: "Tooting",
  aliases: ["Tooting Broadway", "Tooting Bec"],
  borough: "Wandsworth",
  postcodes: ["SW17"],

  headline:
    "Northern line Zone 3 in one of the safer inner-London boroughs — Wandsworth at ~70/1k, materially below Croydon. Tooting Market is the daily-life anchor. No flagship BTR operator. Average 24 min to anchors.",
  preview:
    "Clean T1.1 safety pass — Wandsworth is one of the safer inner-London boroughs. Tooting Market is a genuine food destination. Northern line gives central access but Zone 3 means slower times. 20-39 at 49% — strong young-professional skew along the Northern Line corridor. No flagship BTR. Average 24 min to anchors, 2/4 ≤25.",

  long_form: {
    full: "Tooting is the Wandsworth/Lambeth SW cluster's most distinctive area — Zone 3 Northern Line, a deep-rooted South Asian food heritage, two major markets, the NHS St George's teaching hospital, two large commons with a landmark lido, and the Springfield Village masterplan (Barratt London, ~1,800 homes, 2025-2027). It earned a 2017 Time Out 'coolest neighbourhood' ranking on food-and-identity grounds and has remained notable for something neighbouring Clapham and Balham have materially lost: gentrification here has been additive rather than erasive. The South Asian community that anchors Tooting Market, Upper Tooting Road's restaurant strip, and the residential streets around the High Street has not been displaced by the young-professional Northern Line ribbon — the two demographics coexist in a way that is unusual for 2020s inner London. The connectivity offer is Zone 3 solid rather than spectacular. Tooting Broadway sits on the Northern Line's Bank branch; Tooting Bec on the Charing Cross branch — both branches call at both stations, giving the area ~2 trains per minute in AM peak. Thameslink at Tooting NR (a distinct station ~10-min walk away) is a secondary mode with low frequency. Anchor times: Bank 22 minutes, TCR 18 minutes, King's Cross 26 minutes, Canary Wharf 30 minutes. Multi-cluster 2/4, redundancy 2/5. The headline read is 'Zone 3 speed penalty on most anchors but TCR 18 minutes is genuinely fast for a Zone 3 location.' Tooting Market and Broadway Market (two separate indoor markets immediately adjacent to each other, both a 3-minute walk from Tooting Broadway Tube) are the area's defining amenity and cultural asset. Franco Manca started in Tooting Market in 2008; the Tooting Market food stall count is 30+ including Wing Wing, Honest Burgers, Chicken Shop, and a layer of long-established fabric / spice / butcher / fishmonger stalls reflecting the South Asian market heritage. Upper Tooting Road continues the food offer — Mirch Masala, Lahore Karahi, Dosa n Chutny — and gives the area a restaurant density comparable to Brick Lane in grain if not in national visibility. Broadway Market adds a second cluster with Brick Pizza, Little Bao Boy, and Mother Flipper.",
    history: "Tooting was a small rural settlement mentioned in the Domesday Book (1086) as 'Totinge' — a Saxon settlement name meaning 'people of Tota.' Through the medieval and early modern period it remained a small village on the London-to-Brighton road. The railway arrived in 1868 (South Western Railway via Tooting) and the area developed as a Victorian commuter suburb through the 1880s-1910s with the characteristic terraced housing on the residential streets off the High Street. The Northern Line's Morden extension (1926) — which brought Tooting Broadway and Tooting Bec onto the Tube map — transformed the area's accessibility and drove a second wave of residential development through the 1930s. Post-war Tooting was shaped by two demographic shifts: (1) the post-1948 Windrush generation settlement, which gave Tooting a Jamaican / Caribbean community that persists in pockets today, and (2) the post-1960s migration from the Indian subcontinent, which became the dominant demographic thread and anchors the modern food and cultural identity. The South Asian community's establishment of Tooting Market's current food-and-retail character began in the 1970s-1980s.",
    vibe: "Tooting's vibe is genuinely its own — family-friendly-multicultural-food-destination with a lively Tube-station-and-High-Street daytime economy and a quieter residential grain on the streets off the High Street. Walking into Tooting Market at 6pm on a Tuesday, you are in a crowd that spans five decades of age, multiple ethnicities, and a mix of groups-eating, solo diners, and shoppers buying spices or fish for home. Upper Tooting Road at 7pm is car-heavy with families walking between restaurants. The residential streets (Franciscan Road, Mitcham Road, Amen Corner) are quiet and lived-in — children playing, pensioners walking to the corner shop, weekday pavement activity that feels stewarded-by-long-residents rather than transient.",
    weekday: "Weekday daytime is commuter-and-local. Morning rush at Tooting Broadway is busy (Northern Line AM peak) but the platform dispersal is quick. Remote-work-from-café culture is present — Tooting Market cafés (Patty & Bun, Greenwich Pantry), Upper Tooting Road independents. St George's Hospital brings ~8,000 staff and significant daytime activity to the Tooting Grove corner. The Tooting Bec Common perimeter runs are a consistent commuter-runner route. Quieter weekday evenings than Clapham but less quiet than Wandsworth Town — the restaurant strip carries consistent foot traffic until ~22:00.",
    weekend: "Saturday is market day — Tooting Market and Broadway Market both run busy, and the Saturday Broadway Market (outdoor farmers' market separate from the indoor) adds a third cluster. The food crawl from Tooting Market to Broadway Market to Upper Tooting Road restaurants is the area's defining weekend ritual. Tooting Bec Lido is in heavy use from May onwards. Sunday roasts at The Antelope and The Trafalgar Arms. No major nightlife destination — Tooting Tram & Social is the one meaningful late-night venue.",
    notable: "Tooting Market — one of south London's best indoor food markets. Tooting Bec Lido — one of Europe's largest outdoor swimming pools.",
    croydon_comparison: "Meaningfully safer than Croydon — one of the lowest-crime wards in a low-crime borough, no station-forecourt ASB signature, no concentrated violent-crime cluster. Café and food density is the single strongest T2 read of any area in this batch: Tooting Market, Broadway Market, Upper Tooting Road restaurant strip are destination-grade versus Croydon's chicken-shop ground-floor dominance. Gym offer is the batch weakest — PureGym, The Gym Group, Fitness4Less, Tooting Leisure Centre, seasonal Lido — no Third Space or Equinox presence. Zone 3 Northern Line (both branches) + Thameslink fallback versus Croydon's Zone 5 Overground+Southern+Tram — similar journey times to central but Tooting's Bank 22 / TCR 18 is genuinely faster on most anchors than Croydon's ~30-35-minute central run via London Bridge. Price: Flexistay Tooting studio at ~£1,800-£2,500+VAT/mo is the clean qualification-friendly path (licence-exempt apart-hotel); Springfield Place 1-bed at ~£1,700-£2,000/mo via private landlords is inside Caner's £2,250 envelope but carries standard-referencing qualification risk. Net: Tooting is arguably the clearest lifestyle-and-food upgrade over Croydon in the whole batch — genuinely diverse, food-rich, safe, well-connected for TCR/Bank — gated by the lack of flagship BTR operator with qualification flexibility, which leaves Flexistay as the primary realistic path.",
  },

  zones: ["Zone 3"],
  connectivity: {
    lines: [
      { name: "Northern", type: "tube" },
      { name: "Thameslink", type: "rail" },
    ],
    primary_stations: [
      { name: "Tooting Broadway", lines: ["Northern"], walk_minutes_from_centre: 3 },
      { name: "Tooting Bec", lines: ["Northern"], walk_minutes_from_centre: 8 },
      { name: "Tooting NR", lines: ["Thameslink"], walk_minutes_from_centre: 10 },
    ],
    times_to_anchors: { city_of_london: 22, canary_wharf: 30, soho_fitzrovia: 18, kings_cross_shoreditch: 26 },
    multi_cluster_score: 2,
    redundancy_score: 2,
    notes: "Northern primary, Thameslink fallback at Tooting NR (distinct station, low frequency). Redundancy 2/5. Average 24 min. 2/4 anchors ≤25.",
    sources: [],
  },
  demographics: { primary_age_cohort: "30-39", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Tooting Broadway ward: 20-39 49%. Census 2021 plurality is 30-39 (prior 18-29 default was a sweep-level artefact). Matches Clapham/Balham Northern Line mid-career professional ribbon. Via CrystalRoof.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "below", crime_vs_croydon: "much-safer", after_dark_assessment: "Wandsworth ~70–103/1k — one of the safer inner-south London boroughs. Tooting ward sits in the calmer half. Tooting Market is family-friendly daytime anchor. No specific violent-crime concentration.", concerns: [], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Tooting Bec Common", walk_minutes: 5, notes: "Large common with Tooting Bec Lido" }, { name: "Tooting Graveney Common", walk_minutes: 8, notes: "" }], overall_assessment: "Tooting Bec Common with its Lido is a major green and recreational asset." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated. Tooting Market is the headline food anchor." },
  regeneration: { status: "complete", investment_pipeline: "", recent_milestones: [], upcoming_milestones: [], trajectory_through_2027: "Stable. No major regeneration underway.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "partial", "1.3": "pass", "1.4": "fail", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Clean pass. Wandsworth is one of the safer inner-London boroughs, materially below Croydon.",
        "1.2": "No flagship BTR. Individual-landlord rental stock.",
        "1.3": "Northern line at Tooting Broadway.",
        "1.4": "No flagship BTR operator. Apo does not currently operate at Tooting.",
        "1.5": "Tooting Market is well-maintained. Residential streets in good order.",
        "1.6": "Stable — not in decline.",
      },
      "moderate",
      "T1 clean on safety. T1.4 fails — no BTR operator.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "unknown", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Tooting Market and the High Street provide walkable daily essentials.",
        "2.2": "Tooting Market is quality fresh food — South Asian and international cuisine.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Tooting Bec Common with Lido is a significant green/recreational asset.",
        "2.5": "Quieter than Clapham or Brixton. Family-friendly residential grain.",
        "2.7": "20-39 at 49% — strong young-professional skew.",
      },
      "good",
      "Strong daily life. Tooting Market, Tooting Bec Common/Lido, quiet residential grain.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "No major regeneration. Stable and mature.",
        "3.2": "Tooting Market is a genuine commercial and cultural anchor.",
        "3.3": "Distinct identity — South Asian heritage, food culture, Northern Line young-professional ribbon.",
        "3.4": "15-minute completeness is good.",
        "3.5": "No architectural press signal. No jury architecture.",
        "3.6": "Market-driven daytime rhythm. Residential at night. Not a day/night destination.",
      },
      "moderate",
      "T3 moderate. Tooting Market is the identity anchor. No architectural signal.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "partial", "5.3": "partial", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 2/5 — 2 of 4 anchors ≤25 min. Average 24 min.",
        "5.2": "Northern primary, Thameslink fallback (low frequency). Redundancy 2/5.",
        "5.3": "Stable rather than ascending.",
        "5.4": "Tooting Market cafes. Third-space culture is decent but not deep.",
      },
      "moderate",
      "T5 is moderate. Multi-cluster and redundancy are the weak axes.",
    ),
    overall_grade: "C",
    grade_reasoning: "C — clean safety, good daily life with Tooting Market and Lido, strong demographics. Constrained by no BTR operator (T1.4 fail), weaker multi-cluster reach (Zone 3), and limited redundancy.",
  },

  projects: [
    springfieldPlace,
    // RESEARCH: The Broadway Tooting — mixed-use, agent-managed. 111 units.
    // REALISM: unlikely (standard agent referencing)
    // COST_TIER: UNVERIFIED
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "the-broadway-tooting", area_id: "tooting", name: "The Broadway", developer: "unknown", operator: "Agent-managed", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "111 units (83 private + 28 affordable) across two buildings (~8-10 storeys) at 181-207 Tooting High Street. Mixed-use with 22,738 sq ft retail space. Near Tooting Broadway station. 2023-2024 completion.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "2023-2024 completion. Residential-led mixed-use. Build quality details not researched.",
        t4_1_amenity_package: "Private outdoor space, some units with spacious terraces. Retail ground floor.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    flexistayTooting,
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default tooting;
