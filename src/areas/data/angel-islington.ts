import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Projects ─────────────────────────────────────────────────────────
const cityRoad250 = buildProject({
  id: "250-city-road", area_id: "angel-islington", name: "250 City Road", developer: "Berkeley Homes", operator: "Individual landlords", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "Foster + Partners tower cluster on the Angel/Old Street border. ~400 units across Carrara Tower (42 storeys), Valencia Tower (36), Aurora, Siena House, Vermont House. Pool, spa, gym, screening room, 24hr concierge, nhow hotel on site. HomeViews ~4.0/5.",
  architects: ["Foster + Partners"],
  amenity_tier: "premium", is_signature: true, overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley Homes delivery to premium specification — modern services, strong layouts, phased completion 2019-2021.",
    t4_1_amenity_package: "Premium — 3-lane pool, spa, gym, screening room, karaoke room, lounge, yoga studio, 24hr concierge, nhow hotel on site.",
    t4_4_signature_arch: "Foster + Partners (Pritzker 1999) — signature firm. Multiple towers with distinctive massing on City Road.",
  },
});
cityRoad250.rental.price_transparency = "enquire";
cityRoad250.external_links = [
  { url: "https://www.berkeleygroup.co.uk/developments/london/islington/250-city-road", label: "250 City Road — Berkeley Homes", type: "developer", accessed_date: "2026-04-12" },
];

const lexiconChronicle = buildProject({
  id: "lexicon-chronicle-tower", area_id: "angel-islington", name: "Lexicon / Chronicle Tower", developer: "Mount Anvil + Clarion Housing Group", operator: "Individual landlords", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "SOM-designed 36-storey tower — tallest building in Islington. 146 units on City Road by Regent's Canal. Gym, spa, sauna, 24hr concierge. HomeViews ~3.8/5.",
  architects: ["Skidmore, Owings & Merrill"],
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Mount Anvil delivery completed 2019. Modern specification with curved prism glass design.",
    t4_1_amenity_package: "Strong — gym, spa, sauna, private conference room, 24hr concierge, cycle storage, basement parking.",
    t4_4_signature_arch: "Skidmore, Owings & Merrill (SOM) — major international practice. Tallest building in Islington. Curved prism glass design.",
  },
});
lexiconChronicle.rental.price_transparency = "enquire";

const packingtonSquare = buildProject({
  id: "packington-square", area_id: "angel-islington", name: "Packington Square", developer: "The Hyde Group", operator: "Individual landlords", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "142-unit mixed scheme between Essex Road and Angel stations. 4-6 storeys. Communal courtyard gardens, balconies throughout. Relatively affordable for Islington — 1-bed from ~£1,800 pcm.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Completed 2016. Modern low-rise with integrated appliances, underfloor heating, open-plan layouts.",
    t4_1_amenity_package: "Decent — balconies, communal courtyard gardens. No gym, pool, or concierge.",
    t4_4_signature_arch: "Not signature-authored. Functional low-rise residential.",
  },
});
packingtonSquare.rental.price_transparency = "enquire";

const citadinesIslington = buildProject({
  id: "citadines-islington", area_id: "angel-islington", name: "Citadines Islington", developer: "Ascott (CapitaLand)", operator: "Citadines (Ascott)", building_type: "BTR", living_model: "apart-hotel", build_phase: "complete", tenure: ["rent"], realism: "licence-exempt",
  preview: "Apart-hotel at Islington Square, Upper Street, N1. From ~£105/night; monthly ~£2,500–3,500. All-inclusive — utilities, Wi-Fi, weekly housekeeping. Hospitality licence — hotel booking, no referencing.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Apart-hotel in Islington Square development. Modern.",
    t4_1_amenity_package: "Decent — hotel services, housekeeping, Wi-Fi.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
citadinesIslington.external_links = [
  { url: "https://www.discoverasr.com/en/citadines/united-kingdom/citadines-islington-london", label: "Citadines Islington", type: "operator", accessed_date: "2026-04-15" },
];
citadinesIslington.rental.price_transparency = "enquire";

const angelIslington: Area = {
  id: "angel-islington",
  name: "Angel / Islington",
  aliases: ["Angel", "Islington", "Upper Street"],
  borough: "Islington",
  postcodes: ["N1", "EC1V"],

  headline:
    "Zone 1 Northern Line, 3 minutes to Old Street, 7 to Bank. Upper Street high street is one of London's most complete independent retail and dining corridors.",
  preview:
    "Mature, high-street-led Zone 1 living with Northern Line access that puts the City in 7 minutes and King's Cross within walking distance. Upper Street delivers a genuinely complete 15-minute neighbourhood. No major masterplan — the area is built out and stable.",

  long_form: {
    full: "Angel sits at the southern end of Upper Street, Islington's primary high street, and delivers Zone 1 Northern Line connectivity with Bank in 7 minutes and Old Street in 3. King's Cross is a 15–20 minute walk, giving walkable access to 6 additional tube lines. The area is mature — no major regeneration pipeline, no masterplan — which means what you see is what you get. Upper Street and Chapel Market provide a complete daily-life layer: grocery, dining, pubs, independent retail, gyms. The limitation is that Angel station is single-line (Northern only), so transport redundancy is structurally weak despite the excellent journey times.",
    history: "Angel was one of the original Monopoly board addresses. Islington's gentrification arc from the 1980s onward is one of London's most documented. Upper Street transitioned from working-class high street to restaurant-and-boutique corridor over two decades.",
    vibe: "Busy independent high street. Young professional and established Islington resident mix. Cafes, bookshops, pubs, restaurants. Not a masterplan — organic neighbourhood character.",
    weekday: "A Tuesday at 7pm: Upper Street is busy with after-work diners. Angel tube is commuter-packed. Chapel Market closing up.",
    weekend: "A Saturday: brunch queues on Upper Street. Camden Passage antiques market. Regent's Canal walk toward King's Cross.",
    notable: "Camden Passage antiques market; Chapel Market; Screen on the Green cinema; Sadler's Wells theatre.",
    croydon_comparison: "Angel delivers Zone 1 at a premium — significantly more expensive than Croydon but with incomparably better connectivity, a complete high street, and a safer residential grain.",
  },

  zones: ["Zone 1"],
  connectivity: {
    lines: [
      { name: "Northern", type: "tube" },
    ],
    primary_stations: [
      { name: "Angel", lines: ["Northern"], walk_minutes_from_centre: 3 },
    ],
    times_to_anchors: { city_of_london: 7, canary_wharf: 16, soho_fitzrovia: 8, kings_cross_shoreditch: 3 },
    multi_cluster_score: 4,
    redundancy_score: 2,
    notes: "Single line at Angel but walkable to King's Cross (6 lines) and Old Street (2 lines) within 15–20 min. Average 8.5 min to anchors — top-tier times, weak redundancy.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Canonbury ward 20-39 at 40%. Solid young-skew.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "average", crime_vs_croydon: "safer", after_dark_assessment: "Safe. Angel station is busy at all hours; Upper Street has continuous footfall.", concerns: [], sources: [] },
  green_and_water: { has_river: false, has_canal: true, has_dock: false, parks: [{ name: "Regent's Canal", walk_minutes: 10, notes: "Nominal canal access via City Road Basin" }, { name: "Duncan Terrace Gardens", walk_minutes: 5, notes: "Small linear garden" }], overall_assessment: "Nominal green + Nominal canal. Parks are thin — no major green space within 10 minutes." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "complete", investment_pipeline: "No major pipeline. Small-scale only.", recent_milestones: [], upcoming_milestones: [], trajectory_through_2027: "Plateaued. Mature area with no step-change expected.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Safe. Islington borough headline applies but Angel ward is well within the calmer half of the borough distribution.",
        "1.2": "Modern rental stock exists — individual-landlord in modern blocks, some emerging BTR on City Road Basin.",
        "1.3": "Northern Line at Angel — 7 min to Bank, 3 min to Old Street. Zone 1.",
        "1.4": "Active professional rental market via individual landlords. No dominant BTR operator.",
        "1.5": "Upper Street and surrounding streets are well-maintained. Mature public realm.",
        "1.6": "Not in decline — stable mature area.",
      },
      "good",
      "T1 clean on all six rows.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "partial", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Upper Street is one of London's most complete independent high streets — grocery, dining, retail all walkable.",
        "2.2": "Quality grocery available on Upper Street and Chapel Market.",
        "2.3": "Multiple gym options in the Angel / Upper Street corridor.",
        "2.4": "Green space is thin — Duncan Terrace Gardens, Regent's Canal at City Road Basin. No major park within 10 min.",
        "2.5": "Residential streets are calm at night. Upper Street has late-night activity but residential grain is quiet.",
        "2.7": "Canonbury ward 20-39 at 40%. Solid young professional skew.",
      },
      "good",
      "T2 strong. The high street delivers daily life completeness. Green space is the only weak axis.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "pass" },
      {
        "3.1": "Mature — no active regeneration or current major investment.",
        "3.2": "Sadler's Wells, Screen on the Green, Camden Passage antiques market, Chapel Market — genuine cultural anchors.",
        "3.3": "Strong sense of place. 'Angel' and 'Islington' are immediately recognisable London names.",
        "3.4": "Genuinely complete 15-minute neighbourhood. Grocery, gym, dining, transport, culture all within walking range.",
        "3.5": "Mature residential coverage. No 2024/25 jury wins found. Architectural quality is Victorian/Georgian with modern infill.",
        "3.6": "Busy day/night rhythm driven by Upper Street dining and theatre scene.",
      },
      "good",
      "T3 strong. Identity is well-established. No regeneration uplift but no need for one.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "partial", "5.3": "partial", "5.4": "pass" },
      {
        "5.1": "Average 8.5 min to four anchors — top-tier multi-cluster coverage.",
        "5.2": "Single line at Angel. KX and Old Street walkable but not immediate redundancy.",
        "5.3": "Plateaued — no ascending trajectory, stable mature area.",
        "5.4": "Strong cafe and bookshop culture on Upper Street and side streets.",
      },
      "good",
      "T5 strong on times, weak on redundancy. Excellent third-space culture.",
    ),
    overall_grade: "B",
    grade_reasoning: "B — T1 clean, T2 and T3 strong on daily life and identity, but single-line dependency at Angel and no ascending trajectory limit the ceiling. Excellent for immediate liveability, less for future value.",
  },

  projects: [cityRoad250, lexiconChronicle, packingtonSquare, citadinesIslington],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default angelIslington;
