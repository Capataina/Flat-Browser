import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Projects ─────────────────────────────────────────────────────────
const folkFlorenceDock = buildProject({
  id: "folk-florence-dock", area_id: "battersea-park", name: "Folk Florence Dock", developer: "Folk", operator: "Folk", building_type: "BTR", living_model: "co-living", build_phase: "complete", tenure: ["rent"], realism: "licence-exempt",
  preview: "Co-living operator at the waterfront. Qualification-friendly referencing. £1,695 price floor fits inside budget envelope. Highest-leverage finding for Battersea Park.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Co-living specification. Modern build.",
    t4_1_amenity_package: "Decent co-living amenities — shared spaces, communal areas.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
folkFlorenceDock.rental.price_transparency = "listed";
folkFlorenceDock.external_links = [
  { url: "https://www.folkcoliving.com/homes/florence-dock", label: "Folk Florence Dock", type: "operator", accessed_date: "2026-04-12" },
];

const falconWharf = buildProject({
  id: "falcon-wharf", area_id: "battersea-park", name: "Falcon Wharf", developer: "unknown", operator: "Various", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "150 apartments, 19 storeys, completed ~2003. 24-hour concierge, riverside walk. Rental from ~£2,200 pcm (1-bed). Secondary rental market — private landlord dependent.",
  architects: ["James Burland"], amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "2003 build — over 20 years old. Concierge and leisure facilities present but specification is dated by current standards.",
    t4_1_amenity_package: "Decent — 24-hour concierge, leisure facilities, secure underground parking, riverside walk.",
    t4_4_signature_arch: "Not a signature practice — James Burland is an architect but not a recognisable name in residential design.",
  },
});
falconWharf.rental.price_transparency = "enquire";

const albionRiverside = buildProject({
  id: "albion-riverside", area_id: "battersea-park", name: "Albion Riverside", developer: "Hutchison Whampoa / CK Asset", operator: "Various", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "Foster + Partners-designed premium riverside. 197 apartments + 12 penthouses, 11 storeys. Completed 2003. Rental from ~£3,000+ pcm. Ground-level shops.",
  architects: ["Foster + Partners"], amenity_tier: "strong", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Foster + Partners design — premium specification. 2003 build but high-end materials and riverside positioning hold up.",
    t4_1_amenity_package: "Strong — premium positioning with ground-floor retail and riverside frontage.",
    t4_4_signature_arch: "Foster + Partners — Pritzker laureate. Genuine signature architecture.",
  },
});
albionRiverside.rental.price_transparency = "enquire";

const montevetro = buildProject({
  id: "montevetro", area_id: "battersea-park", name: "Montevetro", developer: "Taylor Woodrow", operator: "Various", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "Richard Rogers (RSHP) design. 103 apartments across five connected blocks (4-20 storeys). Completed 2000. Very premium pricing. Signature riverside architecture.",
  architects: ["Rogers Stirk Harbour + Partners"], amenity_tier: "strong", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "RSHP design — premium specification. 2000 build but high-end materials and distinctive architectural language.",
    t4_1_amenity_package: "Strong — premium riverside positioning and distinctive communal spaces.",
    t4_4_signature_arch: "Richard Rogers / RSHP — Pritzker laureate. One of the most architecturally significant residential buildings in Battersea.",
  },
});
montevetro.rental.price_transparency = "enquire";

const codaBattersea = buildProject({
  id: "coda-battersea", area_id: "battersea-park", name: "Coda", developer: "unknown", operator: "Various", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "23-storey mixed-use residential tower by Patel Taylor. Studios, 1, 2, 3-bed apartments.",
  architects: ["Patel Taylor"], amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Patel Taylor design — competent contemporary practice. Modern specification.",
    t4_1_amenity_package: "Decent — mixed-use residential standard.",
    t4_4_signature_arch: "Patel Taylor is a recognised practice but not a signature-level name.",
  },
});
codaBattersea.rental.price_transparency = "enquire";

const parksideCollectionCB = buildProject({
  id: "parkside-collection-chelsea-bridge", area_id: "battersea-park", name: "Parkside Collection at Chelsea Bridge Wharf", developer: "unknown", operator: "Various", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "Positioned between Battersea Park and Battersea Power Station. 1, 2, 3-bed apartments. Primarily marketed for sale.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Modern specification with park and Power Station adjacency positioning.",
    t4_1_amenity_package: "Decent — benefits from location between two major landmarks.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
parksideCollectionCB.rental.price_transparency = "enquire";

const princeOfWalesDrive = buildProject({
  id: "prince-of-wales-drive", area_id: "battersea-park", name: "Prince of Wales Drive", developer: "St William (Berkeley Group)", operator: "Agent-managed", building_type: "Build-to-Sell", build_phase: "phased", tenure: ["rent", "buy"], realism: "unknown",
  preview: "926 units across four buildings (Kensington House, Huntington House, Chartwell House, Bowden House), up to 24 storeys. Zone 1 directly bordering Battersea Park. 17m pool, sauna, spa, 24th-floor cocktail bar with 360-degree views, 24hr concierge. Rental from ~£2,400 pcm (1-bed). 2022-2025 phased.",
  amenity_tier: "premium", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley Group (St William) delivery across four distinct buildings. 2022-2025 phased completion.",
    t4_1_amenity_package: "17m pool, sauna, spa, private residents' lounge, 24th-floor cocktail bar with 360-degree views, 24hr concierge. Premium.",
    t4_4_signature_arch: "Not a single named architect but the 24-storey park-bordering form is architecturally notable.",
  },
});
princeOfWalesDrive.rental.price_transparency = "enquire";
princeOfWalesDrive.external_links = [
  { url: "https://www.berkeleygroup.co.uk/developments/london/battersea/prince-of-wales-drive", label: "Prince of Wales Drive — Berkeley Group", type: "developer", accessed_date: "2026-04-12" },
];

const theHiLight = buildProject({
  id: "the-hilight", area_id: "battersea-park", name: "The HiLight", developer: "Ghelamco", operator: "Agent-managed", building_type: "Build-to-Sell", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unknown",
  preview: "24-storey residential tower in Battersea. ~150 units. Thames views, outdoor terraces on all apartments. Show home launching July 2025. 2026 completion expected. Rental data not yet available.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "In delivery — Ghelamco developer. 24-storey Thames-facing tower. Build quality unconfirmed.",
    t4_1_amenity_package: "Thames views, outdoor terraces. Full amenity details not yet confirmed.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});

const batterseaPark: Area = {
  id: "battersea-park",
  name: "Battersea Park",
  aliases: ["Battersea"],
  borough: "Wandsworth",
  postcodes: ["SW11", "SW8"],

  headline:
    "Zone 2 Overground + National Rail — park-led residential with Battersea Park as a genuine green anchor. Northern Line at Battersea Power Station is a 10-minute walk for western addresses.",
  preview:
    "Battersea Park is a park-led residential area with Southern + SWR at two distinct stations (Battersea Park and Queenstown Road). Battersea Power Station (Northern Line) is walkable for western addresses. Folk Florence Dock is the highest-leverage BTR finding — a qualification-friendly operator at the waterfront. The park itself is a Core green identity asset. Average 23.75 min to anchors.",

  long_form: {
    full: "Battersea Park the area sits between the park itself and the Thames, delivering a residential experience anchored by one of London's finest Victorian parks. Southern + SWR at Battersea Park and Queenstown Road stations give National Rail access, while Battersea Power Station (Northern Line) is a 10-minute walk for western addresses. Folk Florence Dock is the key BTR discovery — a co-living operator at the waterfront with qualification-friendly referencing and a £1,695 price floor. Chelsea Waterfront (St George / Berkeley) is delivering through 2026. Prince of Wales Drive and Battersea Exchange plots deliver 2026–2027.",
    history: "Battersea Park opened 1858. The wider area is a mix of Victorian residential streets and modern riverside development.",
    vibe: "Park-led, residential, family-friendly. The park anchors daily life. Riverside development adds a modern layer.",
    weekday: "A Tuesday at 7pm: park joggers and dog walkers. Queenstown Road commuters.",
    weekend: "A Saturday: Battersea Park is full — running, cycling, children's zoo, boating lake. Chelsea Bridge walk.",
    notable: "Battersea Park (200 acres); Chelsea Bridge; Folk Florence Dock (co-living BTR); Thames riverside.",
    croydon_comparison: "Battersea Park is Zone 2 with a stronger green identity than anywhere in Croydon. Connectivity is slower (23.75 min average) but the park and riverside make it a genuine lifestyle upgrade.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Southern", type: "rail" },
      { name: "South Western Railway", type: "rail" },
      { name: "Northern", type: "tube" },
    ],
    primary_stations: [
      { name: "Battersea Park", lines: ["Southern", "South Western Railway"], walk_minutes_from_centre: 5 },
      { name: "Queenstown Road", lines: ["South Western Railway"], walk_minutes_from_centre: 8 },
    ],
    times_to_anchors: { city_of_london: 20, canary_wharf: 28, soho_fitzrovia: 20, kings_cross_shoreditch: 27 },
    multi_cluster_score: 2,
    redundancy_score: 2,
    notes: "Southern + SWR at two stations, plus Battersea Power Station Northern Line 10 min walk. Average 23.75 min. T5.1 PARTIAL (2/4 ≤25).",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Battersea Park ward 20-39 at 41%. Solid young skew. More moderate than Nine Elms — older stock dilutes new-build signal.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "below", crime_vs_croydon: "safer", after_dark_assessment: "Safe. Wandsworth borough profile applies. Battersea Park ward is calmer still — low ambient crime, park-adjacent residential grain.", concerns: [], sources: [] },
  green_and_water: { has_river: true, has_canal: false, has_dock: false, parks: [{ name: "Battersea Park", walk_minutes: 3, notes: "200 acres, boating lake, children's zoo, sports facilities" }], overall_assessment: "Strong green + river. Battersea Park is a Core green identity asset — one of London's finest Victorian parks. Thames riverside frontage." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "active", investment_pipeline: "Chelsea Waterfront (St George / Berkeley) delivering through 2026. Prince of Wales Drive / Battersea Exchange plots delivery 2026-2027.", recent_milestones: ["Chelsea Waterfront phases delivering"], upcoming_milestones: ["Prince of Wales Drive / Battersea Exchange delivery 2026-2027"], trajectory_through_2027: "Ascending mildly. Benefits from Battersea Power Station and Nine Elms corridor maturation.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Clean pass. Safe park-adjacent residential.",
        "1.2": "Modern stock: Folk Florence Dock, Chelsea Waterfront, Junction House, Prince of Wales Drive.",
        "1.3": "Southern + SWR + walkable Northern Line at BPS. Zone 2.",
        "1.4": "Folk Florence Dock is the key BTR finding — qualification-friendly. Other stock via individual landlords.",
        "1.5": "Battersea Park and riverside well-maintained.",
        "1.6": "Not in decline — active delivery and BPS corridor maturation.",
      },
      "good",
      "T1 clean.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Battersea Park Road and surrounding streets have walkable essentials.",
        "2.2": "Grocery available in the area.",
        "2.3": "Gym access via local and building-level facilities.",
        "2.4": "Pass — strong. Battersea Park is 200 acres with Thames frontage. Core green identity.",
        "2.5": "Quiet residential at night. Park-adjacent.",
        "2.7": "Ward 20-39 at 41%. Solid young skew.",
      },
      "good",
      "T2 strong. The park and riverside deliver excellent daily-life green quality.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "Active delivery — Chelsea Waterfront, Prince of Wales Drive.",
        "3.2": "Battersea Park is a genuine cultural/recreational anchor.",
        "3.3": "Clear park-led identity. 'Battersea Park' is recognisable.",
        "3.4": "Complete 15-minute neighbourhood.",
        "3.5": "No 2024/25 jury wins. Mixed architectural quality — Victorian + modern riverside.",
        "3.6": "Park-led weekend rhythm. Quieter weekday evenings.",
      },
      "good",
      "T3 strong. Park-led identity is clear and genuine.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "partial", "5.3": "pass", "5.4": "pass" },
      {
        "5.1": "2/4 anchors ≤25 min (Bank 20, TCR 20). Canary Wharf 28, Old Street 27 fail. Average 23.75 min.",
        "5.2": "Southern + SWR at two stations + walkable Northern. Redundancy 2/5 but improving.",
        "5.3": "Ascending mildly with BPS corridor maturation.",
        "5.4": "Park is the ultimate third space. Riverside walking.",
      },
      "moderate",
      "T5 moderate. Connectivity is the weakness — slower journey times and weaker redundancy than central areas.",
    ),
    overall_grade: "B",
    grade_reasoning: "B — clean T1, strong T2 and T3 from the park, but T5 connectivity is the limiting factor. Folk Florence Dock is the key practical finding for graduate-visa renters.",
  },

  projects: [folkFlorenceDock, falconWharf, albionRiverside, montevetro, codaBattersea, parksideCollectionCB, princeOfWalesDrive, theHiLight],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default batterseaPark;
