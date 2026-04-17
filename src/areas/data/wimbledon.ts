import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Project consts (extracted for external_links / price_transparency mutation) ──
// "Essential Living Wimbledon" was REMOVED on 2026-04-12.
// Essential Living's confirmed 2026 portfolio is: Vantage Point (Islington), Dressage Court
// (Bethnal Green), Union Wharf (Greenwich), Berkshire House (Maidenhead). No Wimbledon
// property has ever appeared on essentialliving.co.uk. Web search returned zero results.
// The sweep agent (agent 11, BTR operator discovery) hallucinated this entry — likely
// seeing Essential Living in a list of BTR operators and projecting a Wimbledon presence
// that doesn't exist. Wimbledon has no flagship BTR operator.

const wimbledonPlace = buildProject({
  id: "wimbledon-place", area_id: "wimbledon", name: "Wimbledon Place", developer: "Thornsett Group", operator: "Private sale", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "135 apartments + 120-room YMCA hostel. Near-complete, Q1 2026. For-sale scheme — rental via secondary market. Gym, concierge, co-working, cafes. 1-bed est. GBP 1,800-2,200/mo.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "2026 completion. Modern specification expected.",
    t4_1_amenity_package: "Gym, concierge, co-working, cafes. Decent for a for-sale scheme.",
    t4_4_signature_arch: "No architectural press signal.",
  },
});
wimbledonPlace.rental.price_transparency = "enquire";

const abbeyWall = buildProject({
  id: "abbey-wall", area_id: "wimbledon", name: "Abbey Wall", developer: "Indigo Scott", operator: "Private sale", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["buy"], realism: "blocked",
  preview: "Boutique 54-unit scheme (studios, apartments, penthouses) on Station Road. 6 storeys. c. 2025 completion. Balconies, social spaces, landscaped roof gardens. For-sale — minimal managed rental implications.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "2025 boutique new-build. Modern specification expected.",
    t4_1_amenity_package: "Balconies, social spaces, landscaped roof gardens. Decent for a boutique scheme.",
    t4_4_signature_arch: "No architectural press signal.",
  },
});
abbeyWall.rental.price_transparency = "unknown";

const wimbledon: Area = {
  id: "wimbledon",
  name: "Wimbledon",
  aliases: ["Wimbledon Centre Court"],
  borough: "Merton",
  postcodes: ["SW19"],

  headline:
    "District + Thameslink + Tramlink + rail at Zone 3 — strong multi-modal access and premium town-centre feel. Discovery candidate from sweep agent 11.",
  preview:
    "Wimbledon is a discovery candidate surfaced by the sweep. District Line, Thameslink, Tramlink, and mainline rail give multi-modal access at Zone 3. No flagship BTR operator — rental stock is BTS via agents. Limited sweep data — most fields are unpopulated pending further research.",

  long_form: {
    full: "Wimbledon sits in Merton at Zone 3, served by one of south London's strongest multi-modal interchanges: District Line terminus, SWR to Waterloo (8 tph, 20-22 min), Thameslink (Sutton Loop), Tramlink terminus (to Croydon in 30 min), plus Northern Line at South Wimbledon 12 min walk. Redundancy score 5/5 is exceptional by south London standards — a planned engineering closure on any single line leaves three alternatives. The weakness is the anchor profile: the fastest journeys are to Waterloo and the South Bank cluster, not to the City (28 min), Canary Wharf (40 min), or King's Cross (30 min) that the multi-cluster scoring prioritises. Only Tottenham Court Road / Soho (22 min via District direct) passes the 25-min test — multi-cluster score 1/4. The area splits across two distinct footprints: Wimbledon town centre (station, The Broadway, Centre Court shopping, Worple Road office cluster — flat, urban, retail-dense) and Wimbledon Village (15 min walk uphill via Wimbledon Hill Road — historic Georgian/Victorian village on the common edge, premium retail and dining). Demographics are distinct from the Lambeth/Southwark batch: 42% aged 18-39 (lowest in this batch), 51% White British, 30% couple-with-children households (highest), 32% professional-renter (lowest) — a settled affluent family neighbourhood with a young-professional minority. Safety is a clean step-change: Merton borough consistently ranks bottom-5 of London's 32 boroughs for violent crime. Green is exceptional — Wimbledon Common at 1,140 acres connects to Putney Heath and Richmond Park via walkable paths. Amenity density is the strongest in this batch: M&S Food + Waitrose + Sainsbury's + Tesco for grocery; Nuffield Health + Virgin Active + PureGym + Gym Group + 1Rebel + F45 for gyms. Regeneration's largest story is the AELTC Wimbledon Park expansion — £250m+ scheme to build 39 tennis courts including an 8,000-seat show court on the former golf course, construction 2024-2030. The BTR gap is the persistent structural weakness — no flagship BTR operator has announced a Wimbledon scheme; rental stock remains individual-landlord dominated.",
    history: "Wimbledon appears in Domesday (1086) as 'Wimbedounyng'. The village grew on the edge of Wimbledon Common — 1,140 acres preserved as common land since the 1871 Wimbledon and Putney Commons Act, which stopped enclosure attempts by Lord John Spencer. The common's size and protection are the defining physical feature of the area's history. The railway arrived in 1838 (one of London's earliest commuter lines), driving rapid Victorian suburban development — the town centre grew around the station while Wimbledon Village (pre-existing Georgian settlement) remained uphill, physically separated by Wimbledon Hill Road. This two-centre pattern persists. The All England Lawn Tennis Club moved to its current Church Road site in 1922; the Championships became internationally defining through the 20th century. The AFC Wimbledon football story (Wimbledon FC's original Plough Lane ground, the 1988 FA Cup upset over Liverpool, the MK Dons franchise move in 2002, AFC Wimbledon's fan-owned phoenix, and the 2020 return to a rebuilt Plough Lane) is the area's sporting emotional core for longstanding residents. Through the 2000s-2010s Wimbledon consolidated as an affluent professional dormitory. The 2018-2020 Centre Court shopping centre redevelopment modernised the town-centre retail; the AELTC's 2018 purchase of Wimbledon Park Golf Club (£65m) and 2023 planning consent for the 39-court expansion sets up the largest regeneration of the coming decade.",
    vibe: "Settled, affluent, family-weighted, self-consciously polished. A Saturday morning on The Broadway is dominated by Waitrose-carrier-bag pedestrians, parents with strollers, tennis-club attendees, and an older demographic than anywhere else in this batch. Wimbledon Village uphill is more pronouncedly affluent — independent boutiques, the Dog & Fox pub garden, Range Rovers parked on the cobbles, a visible horse-riding culture on the common-edge bridleways. The pace is the slowest of this batch by some margin. Nightlife is minimal — restaurant and pub trade turns over by 23:00, the town centre is quiet by midnight, and anyone looking for a 01:00+ scene travels to Clapham (District Line) or central (SWR to Waterloo) rather than staying local. Cultural texture is high-tier but low-intensity: New Wimbledon Theatre's touring West End productions, Curzon Wimbledon's indie cinema, the AELTC's year-round tours, and the annual Championships crescendo rather than a constant creative-space hum. The two-footprint character produces a specific identity: town-centre Wimbledon reads as any-affluent-SW-suburb (Wandsworth-style professional dormitory), while Wimbledon Village reads as Cotswolds-adjacent-upmarket-village despite being 10 km from Oxford Circus.",
    weekday: "Weekday mornings peak 07:30-09:00 on both SWR to Waterloo and District Line northbound; the Wimbledon station concourse is genuinely busy at peak. By 10:00 the commuter flow is gone and the town centre settles into a midday rhythm dominated by Centre Court shopping, lunchtime office traffic from the Worple Road / Wimbledon Hill Road office cluster (significant professional-services footprint), and school-and-errand pedestrian flow. Café and WFH density is strong — Curzon Wimbledon café, Gail's Bakery, Caffè Nero, several independents — and Nuffield Health / Virgin Active carry a significant midday gym-goer population from the local office cluster. The Wimbledon Village café scene (Hemingway, The Mill, The Coffee House, others) is quieter and more upmarket, serving residents rather than commuters. After 18:00 the town centre turns over to evening-dining traffic — Côte, Wimbledon Brew House, the restaurants along The Broadway — with the New Wimbledon Theatre pulling show crowds 19:00-22:30. By 23:00 the streets are quiet except for last-train pedestrian flow from Waterloo arrivals.",
    weekend: "Saturday peak is Centre Court shopping centre (10:30-16:30), the Farmers Market (at Wimbledon Park First School, Saturday mornings), Wimbledon Park's tennis courts and lake, and Wimbledon Common's weekend crowd — joggers, cyclists, dog-walkers, horse-riders, and the Wimbledon Windmill visitors (popular with families). The Crooked Billet pub garden fills on warm days. Sunday is gentler — Sunday roast traffic at the Dog & Fox, The Fox & Grapes (common edge, Claude Bosi-run), The Rose & Crown. The town centre is quieter than Saturday but the common is as busy or busier. The AELTC Championships fortnight (late June / early July) is the calendar peak — Wimbledon Park fills with queuing fans (The Queue), the town centre hosts 500k+ visitors, hotels and short-lets saturate, and the atmosphere transforms for two weeks. Outside this window, weekend pace is consistently gentle-affluent-residential.",
    notable: "The Championships (Wimbledon tennis). Wimbledon Common (1,140 acres). All England Lawn Tennis Club — year-round tours; ongoing £250m+ Wimbledon Park expansion to 39 courts including 8,000-seat show court. Centre Court Shopping Centre (redeveloped 2018-2020). Wimbledon Village — historic Georgian/Victorian village uphill with The Ivy, San Lorenzo, Dog & Fox. New Wimbledon Theatre (1,670-seat Grade-II listed Edwardian, West End-touring). Curzon Wimbledon independent cinema. AFC Wimbledon (rebuilt Plough Lane 2020, fan-owned). Wimbledon Park (67 acres, lake, tennis). Cannizaro Park + Hotel (35-acre historic park).",
    croydon_comparison: "Safety is the clearest step-change — Merton borough consistently ranks among the 5 safest London boroughs for violent crime; Wimbledon wards sit in its lower third. Women-walking-alone reports are unambiguously positive. Café density is a genuine upgrade: 10+ third-space options in the town centre plus the Wimbledon Village cluster. Grocery is the best in this batch: M&S Food (Centre Court) + Waitrose (Village) + full-size Sainsbury's + Tesco Metro + Farmers Market covers every tier. Gyms are Wimbledon's strength versus every other area in this batch — Nuffield Health Wimbledon + Virgin Active Wimbledon (both premium-tier, both with pools) are the genuine premium option that Brixton, Peckham, Herne Hill, and Croydon itself lack. Transport is the awkward axis: Zone 3 vs Croydon's Zone 5 is an upgrade. Redundancy 5/5 is best-in-batch. But the fastest journeys are to Waterloo/Soho (22 min to Tottenham Court Road), not to the multi-cluster anchors — Canary Wharf (40 min) is the genuinely weak anchor. Price: 1-bed individual-landlord ~£1,800-2,200/mo town centre, ~£2,000-2,500/mo Village — Wimbledon wins on price in the town centre. No flagship BTR operator means qualification pathway is thin — same structural gap as the rest of the batch.",
  },

  zones: ["Zone 3"],
  connectivity: {
    lines: [
      { name: "District", type: "tube" },
      { name: "Thameslink", type: "rail" },
      { name: "Tramlink", type: "tram" },
      { name: "South Western Railway", type: "rail" },
    ],
    primary_stations: [
      { name: "Wimbledon", lines: ["District", "Thameslink", "Tramlink", "South Western Railway"], walk_minutes_from_centre: 3 },
    ],
    times_to_anchors: { city_of_london: 28, canary_wharf: 40, soho_fitzrovia: 22, kings_cross_shoreditch: 30 },
    multi_cluster_score: 1,
    redundancy_score: 5,
    notes: "District + Thameslink + Tramlink + SWR at a single station — strongest mode-redundancy outside Zone 1. But end-of-line position: only Soho/Fitzrovia under 25-min; Canary Wharf 40-min is the weakness. Quality-of-seat advantage at terminus.",
    sources: [],
  },
  demographics: { primary_age_cohort: "30-39", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Not yet populated.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "average", crime_vs_croydon: "safer", after_dark_assessment: "", concerns: [], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [], overall_assessment: "Not yet populated. Wimbledon Common is a major green asset." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated. Nuffield Health Wimbledon noted in gym sweep." },
  regeneration: { status: "complete", investment_pipeline: "", recent_milestones: [], upcoming_milestones: [], trajectory_through_2027: "Not yet researched.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "unknown", "1.2": "pass", "1.3": "pass", "1.4": "unknown", "1.5": "unknown", "1.6": "unknown" },
      {
        "1.2": "Modern rental stock present via BTS developments (Wimbledon Place, Abbey Wall). No flagship BTR operator.",
        "1.3": "District + Thameslink + Tramlink + SWR — multi-modal access at Zone 3.",
      },
      "moderate",
      "T1 partially populated. Modern stock and transport confirmed; other rows not yet researched.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "unknown", "2.2": "unknown", "2.3": "unknown", "2.4": "unknown", "2.5": "unknown", "2.7": "unknown" },
      {},
      "moderate",
      "T2 not yet populated. Awaiting further research.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "unknown", "3.2": "pass", "3.3": "pass", "3.4": "unknown", "3.5": "unknown", "3.6": "unknown" },
      {
        "3.2": "The Championships (Wimbledon tennis) — world-class cultural anchor.",
        "3.3": "Wimbledon is one of the most recognisable place names in London.",
      },
      "moderate",
      "T3 partially populated. Exceptional name recognition and cultural anchor.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "unknown", "5.2": "unknown", "5.3": "unknown", "5.4": "unknown" },
      {},
      "moderate",
      "T5 not yet populated. Awaiting connectivity research.",
    ),
    overall_grade: "C",
    grade_reasoning: "C grade (provisional, downgraded from B) — discovery candidate with strong name recognition and multi-modal transport, but no BTR operator and most fields unpopulated. The removal of the hallucinated Essential Living project weakens T1.4 (professional rental market).",
  },

  projects: [
    wimbledonPlace,
    abbeyWall,
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default wimbledon;
