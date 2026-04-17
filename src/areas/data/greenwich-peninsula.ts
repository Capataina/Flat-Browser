import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const greenwichPeninsula: Area = {
  id: "greenwich-peninsula",
  name: "Greenwich Peninsula",
  aliases: ["North Greenwich", "Peninsula"],
  borough: "Greenwich",
  postcodes: ["SE10"],

  headline:
    "Europe's largest single residential regeneration project — 17,500 homes planned, 5,000+ already in place. The Tide elevated linear park, Design District, The O2 directly adjacent.",
  preview:
    "Knight Dragon's 30-year masterplan is past its halfway point. The Tide is a 5km elevated linear park along the Thames. Design District at the northern tip houses creative studios. The O2 brings live events. Upper Riverside Towers 4 & 5 with Tom Dixon and SOM design. Jubilee line from North Greenwich.",

  long_form: {
    full: "Knight Dragon's 30-year masterplan is past its halfway point with a fully functioning public realm and a resident community that has critical mass. The Tide is a 5km elevated linear park along the Thames — one of the most distinctive pieces of outdoor infrastructure built in London in recent years. The Design District at the northern tip houses creative studios, independent businesses, and cultural programming. The O2 Arena brings year-round live events. Upper Riverside towers No.4 and No.5 are the architectural centrepiece — No.4 with Tom Dixon interiors, No.5 by SOM. Entry-level riverside apartments from roughly GBP 2,100/month; Upper Riverside closer to GBP 2,500/month. The GLA's co-investment makes delivery risk structurally low.",
    history: "The Peninsula was a brownfield site dominated by the Millennium Dome (now The O2). Knight Dragon (a Hong Kong-based developer) took over the masterplan in the 2010s and has been delivering phased residential since.",
    vibe: "Quieter and more residential than the central destination areas. The crowd is professional and family-leaning. The Tide and Design District provide character; the rest is solid managed housing in a maturing district.",
    weekday: "A Tuesday at 7pm: O2 events generate sporadic crowds; the Tide has joggers and walkers; Upper Riverside lobbies are active but not buzzy.",
    weekend: "A Saturday: O2 event days bring large crowds; the Tide is the main social space.",
    notable: "The Tide elevated park, The O2 Arena, Design District, Upper Riverside Tom Dixon / SOM towers.",
    croydon_comparison: "Greenwich Peninsula is a fully new district built end to end. Croydon is a degraded historic centre. The Peninsula is quieter and less culturally dense than Croydon's town centre, but the public realm and building quality are in a different league. The Jubilee line is a clean upgrade on Croydon's overground-only options.",
  },

  zones: ["Zone 2", "Zone 3"],
  connectivity: {
    lines: [{ name: "Jubilee", type: "tube" }],
    primary_stations: [{ name: "North Greenwich", lines: ["Jubilee"], walk_minutes_from_centre: 5 }],
    times_to_anchors: { city_of_london: 18, canary_wharf: 4, soho_fitzrovia: 22, kings_cross_shoreditch: 24 },
    multi_cluster_score: 3,
    redundancy_score: 1,
    notes: "Single Jubilee line is both the strength (one-stop to Canary Wharf, clean anchor reach) and the structural weakness. Any Jubilee failure isolates the Peninsula — the cable car to Royal Docks and Thames Clipper from nearby Greenwich Pier are fallback but slow. North Greenwich is a terminus for some services (Stanmore-Stratford splits) so peak trains often start empty, a daily quality-of-life advantage.",
    sources: [
      { url: "https://tfl.gov.uk/tube-dlr-overground/stations/north-greenwich-underground-station/", label: "TfL — North Greenwich", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 22 },
      { cohort: "30-39", pct: 34 },
      { cohort: "40-49", pct: 16 },
      { cohort: "50+", pct: 28 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 28 },
      { group: "White — other", pct: 22 },
      { group: "Asian or Asian British", pct: 18 },
      { group: "Black or Black British", pct: 18 },
      { group: "Mixed", pct: 8 },
      { group: "Other ethnic group", pct: 6 },
    ],
    household_mix: [
      { type: "Single person", pct: 30 },
      { type: "Couple no children", pct: 27 },
      { type: "Couple with children", pct: 23 },
      { type: "Lone parent", pct: 9 },
      { type: "Shared household", pct: 8 },
      { type: "Other", pct: 3 },
    ],
    student_pct: 6,
    professional_renter_pct: 55,
    notes: "Established professional residential area with a more international skew than surrounding Greenwich — Hong Kong / Singapore / wider Asia-Pacific ownership in Upper Riverside is notable. The Waterman BTR adds younger renters. Family presence is meaningful but the area reads more professional-couple than family-dominated.",
    sources: [
      { url: "https://www.ons.gov.uk/visualisations/censusareachanges/E05014081", label: "ONS Census 2021 — Peninsula ward", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "safe",
    crime_vs_borough: "below",
    crime_vs_croydon: "much-safer",
    after_dark_assessment: "Reliably safe. The masterplan footprint is well-lit, well-stewarded by Knight Dragon, and has low foot traffic after 22:00 — the most common resident complaint is 'too quiet' rather than any safety issue. The Tide elevated park is well-used into early evening but empties after dark. North Greenwich station concourse stays busy with event turn-out on O2 nights — heavy crowds at show-end (22:30-23:00) can feel chaotic but not unsafe. Women walking alone back from the Jubilee station at 23:00 on a normal night is genuinely fine. The weak-link is the walk along the peninsula's eastern edge (toward Morden Wharf) which is still industrial and quiet.",
    concerns: [
      "O2 event turn-out crowds can overwhelm North Greenwich station at 22:30-23:00",
      "Peninsula eastern edge (Morden Wharf approach) is still industrial — reads isolated at night",
    ],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police-service/peninsula/", label: "Met Police — Peninsula", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: true,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "The Tide", size_acres: 9.5, walk_minutes: 3, notes: "5km elevated linear park along the Thames — designed by Diller Scofidio + Renfro with Neiheiser Argyros — unique London amenity, public art installations" },
      { name: "Central Park (Peninsula)", size_acres: 9, walk_minutes: 6, notes: "Masterplan-internal green space with play areas and landscaping" },
      { name: "Greenwich Ecology Park", size_acres: 4, walk_minutes: 10, notes: "Nature reserve and wetland at the peninsula's south-east tip — protected ecological area" },
      { name: "Greenwich Park", size_acres: 183, walk_minutes: 25, notes: "Royal Park to the south — world-class historic park with Royal Observatory, walkable but meaningful distance" },
    ],
    overall_assessment: "One of the strongest green-and-water profiles in the dataset. Thames on three sides, The Tide (a unique piece of outdoor infrastructure by internationally-known landscape designers), Greenwich Ecology Park as a protected reserve, and world-famous Greenwich Park within 25 minutes. The Peninsula reads genuinely outdoor-rich despite the urban masterplan character.",
    sources: [
      { url: "https://www.greenwichpeninsula.co.uk/the-tide", label: "Greenwich Peninsula — The Tide", type: "developer", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "M&S Simply Food (Peninsula Square)", type: "convenience-premium", walk_minutes: 4, notes: "On-peninsula M&S — reliable for evening shops and ready meals" },
      { name: "Sainsbury's Local (Peninsula Square)", type: "convenience", walk_minutes: 4, notes: "Standard Sainsbury's Local for daily basics" },
      { name: "Waitrose (Canary Wharf)", type: "supermarket-premium", walk_minutes: 4, notes: "One Jubilee stop to Canary Wharf Waitrose — effectively in-area" },
      { name: "ICON Outlet (The O2)", type: "retail-cluster", walk_minutes: 5, notes: "Discount retail inside The O2 — grocery not strong but general retail anchor" },
    ],
    gyms: [
      { name: "Third Space Canary Wharf (one stop Jubilee)", type: "premium-gym", walk_minutes: 6, notes: "Premium Third Space is one Jubilee stop — effectively in-area for daily training" },
      { name: "David Lloyd (The O2)", type: "premium-gym", walk_minutes: 8, notes: "Full-service David Lloyd at The O2 — pool, classes, racquets, classes" },
      { name: "PureGym Greenwich Peninsula", type: "commercial-budget", walk_minutes: 6, notes: "24/7 PureGym — standard budget stack" },
      { name: "Knight Dragon residents' gyms", type: "resident", walk_minutes: 2, notes: "Upper Riverside 4&5 residents have pool, spa, cinema; Peninsula Gardens gym; The Waterman gym — for residents only" },
      { name: "Boom Cycle (The O2)", type: "boutique-cycle", walk_minutes: 8, notes: "Boutique cycling studio inside The O2 cluster" },
    ],
    food_and_drink: [
      { name: "Craft London (Peninsula Square)", type: "restaurant", walk_minutes: 4, notes: "Stevie Parle's peninsula flagship — destination-quality restaurant" },
      { name: "Design District restaurants", type: "restaurant-cluster", walk_minutes: 5, notes: "Design District has several independents — maturing but varied" },
      { name: "The O2 restaurants (various chains)", type: "chain-cluster", walk_minutes: 6, notes: "Pre-show / post-show eating — Nando's, Wagamama, Pizza Express, Shake Shack etc." },
      { name: "Everyman Cinema Brasserie (Design District)", type: "cinema-brasserie", walk_minutes: 5, notes: "Restaurant attached to Everyman cinema" },
    ],
    health: [
      { name: "Peninsula Medical Centre", type: "GP", walk_minutes: 6, notes: "On-peninsula GP surgery — accepting new registrations" },
      { name: "Boots (The O2)", type: "pharmacy", walk_minutes: 6, notes: "O2 cluster Boots" },
    ],
    cultural: [
      { name: "The O2 Arena", type: "major-venue", walk_minutes: 6, notes: "Biggest entertainment venue in London — 20,000 capacity, year-round programming" },
      { name: "Design District", type: "creative-cluster", walk_minutes: 5, notes: "Designed by 8 different architects — Selgas Cano-led — hosts creative studios, independent restaurants, cultural programming" },
      { name: "Now Gallery", type: "gallery", walk_minutes: 4, notes: "Small public gallery with rotating design/art programme" },
      { name: "Everyman Cinema Design District", type: "cinema", walk_minutes: 5, notes: "Premium cinema in Design District" },
      { name: "IFS Cloud Cable Car (Greenwich Peninsula terminal)", type: "landmark", walk_minutes: 4, notes: "Cable car to Royal Docks — landmark plus novelty commute option" },
    ],
    notes: "Amenity density is genuinely strong. The Design District + Now Gallery + Craft London combine for destination-quality creative/food culture that few dataset areas match outside Zone 1. The O2 adds year-round event programming. Premium gym access is Canary Wharf-linked at Third Space. The notable gap is quiet third-space culture — no bookshop, library presence thin. Café quality is improving but still relatively limited for the masterplan size.",
    sources: [
      { url: "https://www.greenwichpeninsula.co.uk/", label: "Greenwich Peninsula", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.designdistrict.co.uk/", label: "Design District", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.theo2.co.uk/", label: "The O2", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: {
    status: "phased",
    investment_pipeline: "Europe's largest single-developer residential regeneration. Knight Dragon (Hong Kong-based) took over the Peninsula masterplan in the 2010s. Total plan: 17,500+ homes over ~30 years. Approximately 5,000-6,000 homes delivered to date across Upper Riverside Nos. 1-5, Peninsula Gardens, The Waterman, and earlier phases. GLA co-investment underwrites delivery risk. Design District (opened 2021) and The Tide elevated park (opened 2019) are public-realm anchors. Morden Wharf — Galliard + CDL joint venture — is the next major private phase: 1,500 homes in towers up to 36 storeys, currently being redesigned by Jo Cowen Architects.",
    recent_milestones: [
      "2019 — The Tide elevated park opened (Diller Scofidio + Renfro)",
      "2021 — Design District opened (8 architects, Selgas Cano-led)",
      "2023 — Upper Riverside No.5 completed (SOM)",
      "2024 — Upper Riverside No.4 completed (Tom Dixon interiors)",
      "2025 — Peninsula Gardens completed (late 2025)",
      "2025 — Silvertown Tunnel opened at Peninsula northern tip (April)",
    ],
    upcoming_milestones: [
      "2026-2027 — Morden Wharf redesign finalised (Jo Cowen Architects)",
      "2027 — Morden Wharf construction start anticipated (Galliard + CDL)",
      "2027-2028 — Additional Knight Dragon phases to be announced",
      "2030 — Masterplan midpoint checkpoint",
    ],
    trajectory_through_2027: "By August 2027, the Peninsula will have ~7,000-8,000 homes delivered; Morden Wharf will be in early construction; Design District will have 6 years of operating programming; The O2's anchor status will be unchanged. The Silvertown Tunnel will have been open >2 years, shifting the area's northern traffic profile. Knight Dragon's delivery pace has been consistent — the GLA co-investment structure underwrites continued progress even through market cycles.",
    sources: [
      { url: "https://www.greenwichpeninsula.co.uk/", label: "Greenwich Peninsula", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.knightdragon.com/", label: "Knight Dragon", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://mordenwharf.com/", label: "Morden Wharf", type: "developer", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Safe rating with Greenwich crime below borough average; the masterplan footprint is quiet and well-lit, though some residents describe after-dark atmosphere as isolated on non-event nights.",
        "1.2": "Upper Riverside 1-5, The Waterman, and Peninsula Gardens are all purpose-built Knight Dragon stock delivered recently. No pre-war stock on the Peninsula.",
        "1.3": "Jubilee line from North Greenwich puts Canary Wharf at 4 minutes, the City at 18, Soho at 22. Meets 1.3 on a single fast line despite the redundancy weakness.",
        "1.4": "Knight Dragon operates the majority of residential stock with corporate referencing across a single-developer masterplan — professional rental market in place.",
        "1.5": "Knight Dragon stewardship funds supplementary maintenance; The Tide, Peninsula Square, and the Design District public realm are actively maintained.",
        "1.6": "Masterplan is past the halfway point with multiple phases still in delivery through 2030+; GLA co-investment structurally underwrites continued progress.",
      },
      "strong",
      "T1 clean.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "pass", "2.5": "pass", "2.7": "partial" },
      {
        "2.1": "M&S, Sainsbury's, pharmacy, gyms, and Design District restaurants all within the masterplan footprint — walkable essentials layer is mature.",
        "2.2": "M&S and Sainsbury's provide the premium/standard grocery mix; the Design District adds independent food options.",
        "2.3": "Multiple gyms in residential buildings plus commercial options around North Greenwich station; the O2 cluster adds further fitness infrastructure.",
        "2.4": "The Tide 5km elevated linear park is a unique London amenity, the Thames is on the doorstep, and Greenwich Park (183 acres) is within 25 minutes walk.",
        "2.5": "Residential side is reliably quiet after 10pm — O2 event days bring periodic crowds but normal nights are calm.",
        "2.7": "Mature professional skew rather than dominant young cohort — primary cohort 30-39 with family presence; less young-professional-dominant than Stratford or Wembley Park.",
      },
      "good",
      "Strong on most T2 rows. Demographic skew is moderate rather than strongly young.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "partial", "3.5": "pass", "3.6": "partial" },
      {
        "3.1": "Knight Dragon masterplan in active delivery — Peninsula Gardens completed late 2025, Morden Wharf being redesigned, multiple phases scheduled through 2030+.",
        "3.2": "The O2 Arena is a major cultural/commercial anchor drawing year-round events; the Design District provides a secondary creative anchor.",
        "3.3": "'Greenwich Peninsula' has clear place identity anchored by The O2, The Tide, and Europe's largest single regeneration status.",
        "3.4": "15-min completeness is partial — the northern tip around the Design District is rich, but residential density is spread across a large area with uneven retail infill.",
        "3.5": "Architectural quality is strong in parts — Upper Riverside 4 & 5 have Tom Dixon interiors and SOM design — but the masterplan is mixed across its 17,500-home footprint.",
        "3.6": "Day/night rhythm is uneven outside event days — quiet residential character dominates until The O2 has a show, which creates sporadic rather than consistent activation.",
      },
      "good",
      "The Tide and The O2 give strong identity. Day/night rhythm is uneven outside event days.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "fail", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 3/5 — Jubilee reaches Canary Wharf instantly and the City and West End cleanly, but KX/Shoreditch is 25 minutes.",
        "5.2": "Single Jubilee line — major weakness if line fails. Redundancy score 1/5. Same single-point-of-failure weakness as Nine Elms.",
        "5.3": "Strongly ascending trajectory — Morden Wharf's 1,500 homes upcoming, Peninsula will be substantially more developed by 2027.",
        "5.4": "Limited quiet third spaces — The Tide serves as outdoor reading space, but bookshop/library culture is thin.",
      },
      "moderate",
      "T5 has the same single-line dependency weakness as Nine Elms. Trajectory is strong.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade reflects solid T1+T2+T3 with the T5 transport-redundancy failure and the moderate demographic skew. A reasonable working candidate but not a top-of-list pick.",
  },

  // ── RESEARCH: Greenwich Peninsula projects ───────────────────────────
  // Operator: Knight Dragon (single-developer masterplan)
  // Referencing: unknown (not publicly documented)
  // Agreement type: ast (standard rental) for BTR units
  // International friendly: unknown
  // Visa friendly: unknown
  // Professional guarantor: unknown
  // Open Banking: false
  // Prices: UNVERIFIED — no specific rental prices found.
  //   Estimated from area previews: entry ~£2,100 pcm, Upper Riverside ~£2,500+ pcm
  // Cost tier: premium (Upper Riverside 4&5), mid-range (general peninsula)
  // Grad visa realism: unknown (Knight Dragon referencing not documented)
  //
  // Morden Wharf (Galliard + CDL): future, unbuilt
  // ───────────────────────────────────────────────────────────────────────

  projects: [
    buildProject({
      id: "upper-riverside-1-3", area_id: "greenwich-peninsula", name: "Upper Riverside No.1 to No.3", developer: "Knight Dragon", operator: "Knight Dragon", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Earlier waterfront towers establishing the premium residential language of the Peninsula.",
      amenity_tier: "strong", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Knight Dragon delivery to the masterplan's early premium specification — modern building services, Thames-facing layouts.",
        t4_1_amenity_package: "Strong residents' amenities — gym, lounges, concierge — one tier below the No.4/5 flagship package.",
        t4_4_signature_arch: "Distinctive waterfront tower form but not named-architect signature work.",
      },
    }),
    buildProject({
      id: "upper-riverside-4-5", area_id: "greenwich-peninsula", name: "Upper Riverside No.4 & No.5", developer: "Knight Dragon", operator: "Knight Dragon", building_type: "Owner-Lease", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "Waterfront towers. Pool, gym, spa, cinema room. No.4 interiors by Tom Dixon; No.5 designed by SOM architects.",
      amenity_tier: "premium", is_signature: true, architects: ["Tom Dixon", "SOM"], overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Tom Dixon interiors at No.4 and SOM-designed No.5 — top-tier specification with modern building services and premium finish.",
        t4_1_amenity_package: "Pool, gym, spa, cinema room — full premium flagship stack on the Peninsula.",
        t4_4_signature_arch: "SOM is a major international architectural practice and Tom Dixon is a recognised design authorship — credible signature credentials for an owner-lease product.",
      },
    }),
    buildProject({
      id: "the-waterman", area_id: "greenwich-peninsula", name: "The Waterman", developer: "Knight Dragon", operator: "Knight Dragon", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "Key rental-led component within the masterplan. Broadens Greenwich Peninsula beyond the headline riverside towers.",
      amenity_tier: "strong", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Knight Dragon BTR with modern specification and professional management — consistent with the masterplan's baseline quality.",
        t4_1_amenity_package: "Strong BTR amenity set — gym, lounges, concierge. Not the absolute flagship tier.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    buildProject({
      id: "peninsula-gardens", area_id: "greenwich-peninsula", name: "Peninsula Gardens", developer: "Knight Dragon", operator: "Knight Dragon", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Four brickwork waterfront buildings. Studios and 1-2 bed apartments. Completed late 2025.",
      amenity_tier: "strong", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Brand new late-2025 delivery to current Knight Dragon specification — brickwork detailing and waterfront layouts.",
        t4_1_amenity_package: "Strong shared amenities consistent with the masterplan's current spec.",
        t4_4_signature_arch: "Distinctive brickwork composition but not named-architect signature work.",
      },
    }),
    buildProject({
      id: "morden-wharf", area_id: "greenwich-peninsula", name: "Morden Wharf", developer: "Galliard + CDL", operator: "Galliard", building_type: "Mixed", build_phase: "future", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Major upcoming phase. 1,500 homes in towers up to 36 storeys. Currently being redesigned by Jo Cowen Architects.",
      amenity_tier: "strong", architects: ["Jo Cowen Architects"], overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Unbuilt — specification and quality will be set by the Jo Cowen redesign and Galliard/CDL delivery.",
        t4_1_amenity_package: "1,500-home masterplan expected to include full amenity package but unbuilt and unconfirmed.",
        t4_4_signature_arch: "Jo Cowen Architects have a recognisable London practice but the signature status of the redesigned scheme is not yet established.",
      },
    }),
    buildProject({
      id: "peninsula-riverfront", area_id: "greenwich-peninsula", name: "Peninsula Riverfront", developer: "Knight Dragon", operator: "Knight Dragon", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Part of the Upper Riverside district, ~200 units, ~15-20 storeys. SOM glass facade with stepped roof terraces. Thames and Design District views. 2022-2023 completion. Rental through agents — 2-bed from ~£2,500 pcm. May overlap with existing Upper Riverside entries.",
      amenity_tier: "strong", architects: ["SOM"], overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Knight Dragon delivery within the Upper Riverside district. Glass facade with stepped roof terraces.",
        t4_1_amenity_package: "Swimming pool, gyms, roof terraces, media room — shared Upper Riverside amenities.",
        t4_4_signature_arch: "SOM (Skidmore, Owings & Merrill) — major international practice.",
      },
    }),
  ],

  external_links: [
    { url: "https://www.greenwichpeninsula.co.uk/", label: "Greenwich Peninsula official", type: "developer", accessed_date: "2026-04-11" },
    { url: "https://www.greenwichpeninsulaliving.co.uk/", label: "Greenwich Peninsula Living — lettings", type: "operator", accessed_date: "2026-04-12" },
    { url: "https://en.wikipedia.org/wiki/Greenwich_Peninsula", label: "Wikipedia", type: "wikipedia", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

// ── Project external links & price transparency ──────────────────────────
const ur13 = greenwichPeninsula.projects.find(p => p.id === "upper-riverside-1-3")!;
ur13.external_links = [
  { url: "https://www.greenwichpeninsula.co.uk/upper-riverside", label: "Greenwich Peninsula — Upper Riverside", type: "developer", accessed_date: "2026-04-12" },
];
ur13.rental.price_transparency = "enquire";

const ur45 = greenwichPeninsula.projects.find(p => p.id === "upper-riverside-4-5")!;
ur45.external_links = [
  { url: "https://www.greenwichpeninsula.co.uk/property/residential/no-4-by-knight-dragon/", label: "Greenwich Peninsula — No.4 by Knight Dragon", type: "developer", accessed_date: "2026-04-12" },
];
ur45.rental.price_transparency = "enquire";

const waterman = greenwichPeninsula.projects.find(p => p.id === "the-waterman")!;
waterman.external_links = [
  { url: "https://www.greenwichpeninsulaliving.co.uk/lettings/", label: "Greenwich Peninsula Living — lettings", type: "operator", accessed_date: "2026-04-12" },
];
waterman.rental.price_transparency = "enquire";

const penGardens = greenwichPeninsula.projects.find(p => p.id === "peninsula-gardens")!;
penGardens.external_links = [
  { url: "https://www.greenwichpeninsula.co.uk/renting-at-peninsula-gardens", label: "Greenwich Peninsula — renting at Peninsula Gardens", type: "developer", accessed_date: "2026-04-12" },
];
penGardens.rental.price_transparency = "enquire";

const mordenWharf = greenwichPeninsula.projects.find(p => p.id === "morden-wharf")!;
mordenWharf.external_links = [
  { url: "https://mordenwharf.com/", label: "Morden Wharf — official site", type: "developer", accessed_date: "2026-04-12" },
];
mordenWharf.rental.price_transparency = "unknown";

const penRiverfront = greenwichPeninsula.projects.find(p => p.id === "peninsula-riverfront")!;
penRiverfront.external_links = [
  { url: "https://www.greenwichpeninsulaliving.co.uk/lettings/", label: "Greenwich Peninsula Living — lettings", type: "operator", accessed_date: "2026-04-12" },
];
penRiverfront.rental.price_transparency = "enquire";

export default greenwichPeninsula;
