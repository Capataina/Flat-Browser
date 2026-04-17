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
waterStreet8.rental.prices = {
  studio: { min: 2600, max: 2900, currency: "GBP", per: "month" },
  one_bed: { min: 3100, max: 3500, currency: "GBP", per: "month" },
  two_bed: { min: 4200, max: 4800, currency: "GBP", per: "month" },
  bills_included: false,
  notes: "Floors verified 2026-04-17 via Vertus /apartments-to-rent/8-water-street/. Upper bounds inferred from Hamptons / Savills secondary listings — Vertus publishes 'from' floors only.",
};
waterStreet8.rental.affordability = "stretch";
waterStreet8.building_quality = {
  epc_rating: "B",
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "Open-plan studios with floor-to-ceiling glazing; 1-beds have a separated bedroom and full kitchen (not a kitchenette); most units have private balcony. Furnished units specified by Accouter Group. Podium-level indoor-outdoor pool creates some throughput but units are acoustically separated from it.",
  kitchen_quality: "good",
  heating_type: "communal",
  notes: "Modern new-build to full CWG specification. Pet-friendly flagship of Vertus portfolio. Communal heating without per-unit thermostat control is the consistent review-surfaced friction — not comfort-related, but billing-related.",
};
waterStreet8.amenities = {
  pool: true,
  pool_notes: "Indoor-outdoor pool on the podium level — distinctive feature within the Vertus portfolio and the anchor of the 2021 HomeViews Best London Development award. Residents-only.",
  gym: true,
  gym_quality: "good",
  concierge: "24h",
  sky_lounge: true,
  co_working: true,
  dining_room: true,
  cinema_room: true,
  rooftop_terrace: true,
  parking: false,
  bike_storage: true,
  pet_policy: "Pet-friendly — Vertus's flagship pet-accepting building. Specific fees / deposit require direct enquiry.",
  other_amenities: ["Resident events programme", "Self-service bar", "Snack bar / parcel box"],
  overall_tier: "premium",
};
waterStreet8.architecture = {
  architects: ["Stanton Williams"],
  awards: ["HomeViews Best London Development — 2021", "HomeViews Build-to-Rent Awards — 2021 (triple winner)"],
  is_signature: false,
  style_notes: "Low-rise waterside character linked to the 10 Park Drive tower by a double-height glass atrium. Designed as a human-scale counterpoint to the Wood Wharf towers; connects residents directly to the water and adjacent green spaces. Restrained masonry-tone cladding. Roof terrace interior by Accouter Group.",
};
waterStreet8.long_form = {
  full: "8 Water Street is Vertus's pet-friendly flagship in Wood Wharf — a low-rise, waterfront BTR designed by Stanton Williams and linked to the adjoining 10 Park Drive tower by a glass atrium. 174 units across studio / 1-bed / 2-bed / 3-bed, with full kitchens (not kitchenettes), floor-to-ceiling glazing, and private balconies on most homes. Operated by Vertus to the full Canary Wharf Group standard with a dedicated in-house leasing team. Pricing floor £2,600 studio / £3,100 1-bed sits at the upper end of the Wood Wharf Vertus stack, reflecting the pool amenity and the pet-friendly differentiation. Signature amenity is the indoor-outdoor pool on the podium — distinctive among the Vertus portfolio and the anchor of the 2021 HomeViews Best London Development award sweep.",
  living_experience: "4.24/5 on HomeViews across a substantial review base. Residents consistently praise the concierge (issues addressed within a day is a recurring positive), the design quality, the pool, and the sense of community. The strongest complaint pattern is utility cost — communal heating charges land on residents without direct thermostat control, which reviewers describe as an annoyance rather than a dealbreaker. The pet-friendliness is load-bearing for the building's character and materially shapes who lives here.",
  notable_features: "Indoor-outdoor podium pool (unique among Vertus BTR buildings). Pet-friendly policy (Vertus's only publicly pet-friendly building at this scale). Double-height glass atrium link to 10 Park Drive. Stanton Williams design language shared with 10PD. 2021 HomeViews triple award winner.",
};
waterStreet8.resident_signal = {
  homeviews_score: 4.25,
  homeviews_url: "https://www.homeviews.com/development/8-water-street-e14",
  summary: "4.24/5 across a substantial review base (review count gives strong confidence). Residents consistently praise design, concierge responsiveness, the pool, and community. Dominant complaint is utility cost linked to communal heating without thermostat control. 2021 HomeViews Best London Development.",
  common_praise: ["Concierge responsiveness — issues addressed within a day", "Pool and design quality", "Pet-friendly community character", "Natural light from floor-to-ceiling windows", "Hotel-like finish throughout"],
  common_complaints: ["Utility cost / communal heating charges without thermostat control", "Occasional maintenance lag on specific issues", "Amenity throughput during peak hours"],
};
waterStreet8.external_links = [
  { url: "https://thisisvertus.com/apartments-to-rent/8-water-street/", label: "8 Water Street — Vertus", type: "operator", accessed_date: "2026-04-17" },
  { url: "https://www.homeviews.com/development/8-water-street-e14", label: "8 Water Street — HomeViews", type: "homeviews", accessed_date: "2026-04-17" },
  { url: "https://www.jra.co.uk/projects/10-park-drive-8-water-street", label: "JRA — 8WS + 10PD delivery", type: "press", accessed_date: "2026-04-17" },
];

// OPERATOR CORRECTION 2026-04-17: 10 Park Drive is an ownership tower — Vertus does not operate
// rentals there. Any rental activity is secondary-market (individual owners re-letting). Reclassified
// from BTR to Owner-Lease and operator updated. Source: V2 research 2026-04-17 (enrichment-vertus-cwg.md).
const parkDrive10 = buildProject({
  id: "10-park-drive", area_id: "canary-wharf", name: "10 Park Drive",
  developer: "Canary Wharf Group", operator: "Secondary Market (owner-let)", building_type: "Owner-Lease", build_phase: "complete",
  tenure: ["rent", "buy"], realism: "unlikely",
  preview: "34-storey ownership tower on the waterfront edge of Wood Wharf. Not Vertus-managed — any rentals are individual-owner re-lets via estate agents, not BTR. Recognisable skyline presence but not a realistic BTR qualification path.",
  amenity_tier: "premium", overall_grade: "S",
  evaluation_reasoning: {
    t2_6_building_quality: "Ownership-grade Canary Wharf Group specification — high build quality but occupant experience depends on individual landlord rather than professional operator.",
    t4_1_amenity_package: "Premium resident amenity stack — gym, lounges, concierge — shared with the ownership building.",
    t4_4_signature_arch: "Recognisable waterfront silhouette in Wood Wharf but not named-architect authored.",
  },
});
parkDrive10.rental.price_transparency = "enquire";
parkDrive10.external_links = [
  { url: "https://residential.canarywharf.com/10-park-drive/", label: "10 Park Drive — Canary Wharf Residential", type: "developer", accessed_date: "2026-04-17" },
];

// ID + NAME CORRECTION 2026-04-17: Previous "george-street-vertus" / "3 & 10 George Street" was a
// typo-derived composite — the actual Vertus-managed rental building is 10 George Street, not a
// merged "3 & 10" entity (3 George Street is a separate for-sale Canary Wharf Group tower, not
// Vertus-managed). Renamed to 10-george-street. Source: V2 research 2026-04-17 (enrichment-vertus-cwg.md).
const georgeStreet = buildProject({
  id: "10-george-street", area_id: "canary-wharf", name: "10 George Street (Vertus)",
  developer: "Canary Wharf Group", operator: "Vertus", building_type: "BTR", build_phase: "complete",
  tenure: ["rent"], realism: "unknown",
  preview: "Core Vertus rental building within Wood Wharf. Defines the day-to-day Vertus living proposition rather than the flagship tower story.",
  amenity_tier: "strong", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Core Vertus product — modern spec and Canary Wharf Group management. Slightly more everyday than the flagship 8 Water Street tier.",
    t4_1_amenity_package: "Strong amenity but one tier below 8 Water Street — no pool, standard gym and lounge offer.",
    t4_4_signature_arch: "Not signature — functional Wood Wharf residential.",
  },
});
georgeStreet.rental.price_transparency = "listed";
georgeStreet.external_links = [
  { url: "https://thisisvertus.com/apartments-to-rent/10-george-street/", label: "10 George Street — Vertus", type: "operator", accessed_date: "2026-04-17" },
];

// OPERATOR CORRECTION 2026-04-17: One Park Drive is the archetypal ownership tower, not Vertus-managed.
// Any rental activity is secondary-market via individual owners. Already flagged realism "unlikely"
// and building_type "Owner-Lease" — operator string brought into line. Source: V2 research 2026-04-17
// (enrichment-vertus-cwg.md).
const oneParkDrive = buildProject({
  id: "one-park-drive", area_id: "canary-wharf", name: "One Park Drive by Herzog & de Meuron",
  developer: "Canary Wharf Group", operator: "Secondary Market (owner-let)", building_type: "Owner-Lease", build_phase: "complete",
  tenure: ["rent", "buy"], realism: "unlikely",
  preview: "Designed by a Pritzker Prize-winning practice. Distinctive circular form. Waterside. The architectural ownership landmark of Wood Wharf — rentals are secondary-market only (individual owners re-letting).",
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

// ADDED 2026-04-17: Previously missing from dataset. 756 units, Vertus' largest BTR building, opened
// Nov 2025 — should have been captured in the prior Vertus sweep. Source: V2 research 2026-04-17
// (enrichment-vertus-cwg.md).
const charterStreet5060 = buildProject({
  id: "50-60-charter-street", area_id: "canary-wharf", name: "50-60 Charter Street (Vertus)",
  developer: "Canary Wharf Group", operator: "Vertus", building_type: "BTR", build_phase: "complete",
  tenure: ["rent"], realism: "unknown",
  preview: "Vertus' largest BTR building — 756 units across two towers, opened November 2025. Standard Vertus spec plus premium Canary Wharf Group management. Latest addition to Wood Wharf's managed rental campus.",
  amenity_tier: "premium", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Latest Vertus delivery to current Canary Wharf Group specification — modern building services, strong layouts, 756 units at scale.",
    t4_1_amenity_package: "Full Vertus premium stack — gym, lounges, concierge, co-working. One of the most amenity-complete BTR buildings in Wood Wharf.",
    t4_4_signature_arch: "Not named-architect signature work — functional premium Wood Wharf residential.",
  },
});
charterStreet5060.rental.price_transparency = "listed";
charterStreet5060.rental.affordability = "stretch";
charterStreet5060.building_quality = {
  epc_rating: "B",
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "756 units across two towers — Vertus's largest BTR building. Opened November 2025 to current Canary Wharf Group specification. Floor-to-ceiling glazing, private balconies on most units, full kitchens.",
  kitchen_quality: "good",
  heating_type: "communal",
  notes: "Latest and largest Vertus delivery. Communal heating per post-2015 CWG BTR default.",
};
charterStreet5060.amenities = {
  pool: false,
  pool_notes: "",
  gym: true,
  gym_quality: "good",
  concierge: "24h",
  sky_lounge: true,
  co_working: true,
  dining_room: true,
  cinema_room: false,
  rooftop_terrace: true,
  parking: false,
  bike_storage: true,
  pet_policy: "Direct enquiry — less pet-forward than 8 Water Street (the designated pet building).",
  other_amenities: ["Resident events programme", "Self-service bar"],
  overall_tier: "premium",
};
charterStreet5060.architecture = {
  architects: [],
  awards: [],
  is_signature: false,
  style_notes: "Two-tower Vertus BTR delivery at scale (756 units). Functional premium Wood Wharf residential; not named-architect signature work.",
};
charterStreet5060.resident_signal = {
  summary: "Opened November 2025 — review pool still thin. Expected to track Vertus portfolio's 4.2-4.6 HomeViews band once residents settle.",
  common_complaints: [],
  common_praise: [],
};
charterStreet5060.external_links = [
  { url: "https://thisisvertus.com/apartments-to-rent/50-60-charter-street/", label: "50-60 Charter Street — Vertus", type: "operator", accessed_date: "2026-04-17" },
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
newfoundland.rental.prices = {
  studio: { min: 2700, max: 3000, currency: "GBP", per: "month" },
  one_bed: { min: 3100, max: 3700, currency: "GBP", per: "month" },
  two_bed: { min: 4000, max: 5000, currency: "GBP", per: "month" },
  bills_included: false,
  notes: "Verified 2026-04-17. Studio floor £2,700 is the highest of the four Vertus BTR buildings — reflects the view premium on a per-unit basis.",
};
newfoundland.rental.affordability = "stretch";
newfoundland.building_quality = {
  epc_rating: "B",
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "58 storeys — the tallest BTR tower in the UK. Diagonal diamond exoskeleton means some perimeter window frames are angled rather than orthogonal; central units are orthogonal. Floor-to-ceiling glazing; most units have a private balcony; higher floors have panoramic views unmatched in E14.",
  kitchen_quality: "good",
  heating_type: "communal",
  notes: "Distinctive diagrid exoskeleton is load-bearing literally and structurally — DLR tunnels beneath the site ruled out a conventional core-and-shear structure (WSP). Tallest BTR in the UK by both height and unit count. Cross-developer arrangement (EcoWorld Ballymore developed; Vertus operates) — unusual in the Vertus portfolio.",
};
newfoundland.amenities = {
  pool: false,
  pool_notes: "",
  gym: true,
  gym_quality: "good",
  concierge: "24h",
  sky_lounge: true,
  co_working: true,
  dining_room: true,
  cinema_room: true,
  rooftop_terrace: true,
  parking: false,
  bike_storage: true,
  pet_policy: "Direct enquiry required; less pet-forward than 8 Water Street.",
  other_amenities: ["Spin studio", "Children's play area", "Indoor 'kidult' entertainment space", "Self-service bar", "VERTUS+ resident perks programme"],
  overall_tier: "premium",
};
newfoundland.architecture = {
  architects: ["Horden Cherry Lee", "Adamson Associates (executive architect)"],
  awards: [],
  is_signature: true,
  style_notes: "220m tall diagrid tower clad in silver aluminium, wrapped in a diamond-shaped exoskeleton that transfers load away from the DLR tunnels below (a conventional core structure would have required the building to be 30% shorter — WSP). The exposed structure is the building's identity; sometimes referred to as 'the diamond tower'.",
};
newfoundland.long_form = {
  full: "Newfoundland is the tallest build-to-rent tower in the United Kingdom — 220 metres and 58 storeys, 636 apartments, developed by EcoWorld Ballymore and operated by Vertus (an unusual cross-developer arrangement in the Vertus portfolio). The diamond-clad diagrid exoskeleton by Horden Cherry Lee is structurally necessary — DLR tunnels run directly beneath the site, which ruled out a conventional core-and-shear-wall structure — and visually load-bearing for the E14 skyline. Studios from £2,700, 1-beds from £3,100 — the highest 1-bed floor in the Vertus portfolio. Amenity package includes a 58th-floor sky lounge with views unmatched at Canary Wharf.",
  living_experience: "4.23/5 on HomeViews. The positive reviews emphasise the view, the amenity programme (VERTUS+, spin studio, events), and concierge. The negative reviews are more pointed than at 8 Water Street or 10 George Street — multiple residents flag lifts regularly out of service for extended periods, broken bin chutes, a documented fly infestation in 2025, and promised quarterly window cleaning that didn't materialise. At 636 units across 58 storeys, lift throughput is a structural operational challenge rather than a management lapse. Worth weighing against the view premium.",
  notable_features: "Tallest BTR in the UK. Diamond diagrid exoskeleton (structurally necessitated by DLR tunnels beneath — WSP case study). VERTUS+ perks programme unique to this building. 58th-floor sky lounge. Cross-developer arrangement (EcoWorld Ballymore developed; Vertus operates).",
};
newfoundland.resident_signal = {
  homeviews_score: 4.25,
  homeviews_url: "https://www.homeviews.com/development/newfoundland-e14",
  summary: "4.23/5 across substantial review base. Views and amenity programme consistently praised. Complaint pattern is more pointed than at the other Vertus buildings — lift reliability, bin chutes, and a 2025 fly infestation all flagged. At 636 units over 58 storeys, operational throughput issues are structural rather than isolated.",
  common_praise: ["Views from high floors (unmatched at Canary Wharf)", "VERTUS+ perks programme and resident events", "Spin studio and gym", "Concierge responsiveness", "Building design / diagrid identity"],
  common_complaints: ["Lifts frequently out of service for extended periods", "Broken bin chutes (recurring)", "Documented fly infestation in 2025", "Communal area cleaning inconsistencies", "Promised quarterly window cleaning not delivered"],
};
newfoundland.external_links = [
  { url: "https://thisisvertus.com/apartments-to-rent/newfoundland/", label: "Newfoundland — Vertus", type: "operator", accessed_date: "2026-04-17" },
  { url: "https://www.homeviews.com/development/newfoundland-e14", label: "Newfoundland — HomeViews", type: "homeviews", accessed_date: "2026-04-17" },
  { url: "https://www.dezeen.com/2022/01/27/newfoundland-skyscraper-canary-wharf-horden-cherry-lee/", label: "Dezeen — Newfoundland", type: "press", accessed_date: "2026-04-17" },
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
southQuayPlaza.rental.affordability = "over-budget";
southQuayPlaza.external_links = [
  { url: "https://www.berkeleygroup.co.uk/developments/london/canary-wharf/south-quay-plaza", label: "South Quay Plaza — Berkeley Group", type: "developer", accessed_date: "2026-04-12" },
];

const arkCanaryWharf = buildProject({
  id: "ark-canary-wharf", area_id: "canary-wharf", name: "ARK Co-living Canary Wharf", developer: "ARK", operator: "ARK Co-living", building_type: "BTR", living_model: "co-living", build_phase: "complete", tenure: ["rent"], realism: "licence-exempt",
  preview: "Co-living at Crossharbour Plaza, E14. All bills, Wi-Fi, cleaning included. 3–12 month contracts. Qualification and upfront payment terms unknown — licence-exempt so operator sets own rules. Enquire directly for current pricing and requirements.",
  amenity_tier: "basic", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Co-living specification. Basic but functional.",
    t4_1_amenity_package: "Basic — communal spaces, cleaning included.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
arkCanaryWharf.external_links = [
  { url: "https://arkcoliving.com/locations/canary-wharf", label: "ARK Co-living Canary Wharf", type: "operator", accessed_date: "2026-04-17" },
  { url: "https://www.homeviews.com/development/ark-canary-wharf-e14", label: "ARK Canary Wharf — HomeViews", type: "homeviews", accessed_date: "2026-04-17" },
];
arkCanaryWharf.rental.price_transparency = "listed";
arkCanaryWharf.rental.prices = {
  studio: { min: 2050, max: 2350, currency: "GBP", per: "month" },
  bills_included: true,
  notes: "Band from arkcoliving.com/locations/canary-wharf; bills fully inclusive",
};
arkCanaryWharf.rental.affordability = "at-budget";
arkCanaryWharf.building_quality = {
  sound_insulation: "average",
  thermal_performance: "average",
  layout_notes: "Studios at Crossharbour Plaza, E14. Kitchenette along one wall with stovetop, small refrigerator, oven, and combi microwave. Private ensuite bathroom. Parquet floors. Smart storage, smart TV, hairdryer, safe. Compact — reviewers note insufficient space to set up a desk for work alongside the bed.",
  kitchen_quality: "poor",
  heating_type: "communal",
  notes: "Pre-existing tower conversion operated by ARK. Small studio footprint (20-28 sqm) + kitchenette; regular-cook-unfriendly but bills-inclusive licence model compensates on simplicity.",
};
arkCanaryWharf.amenities = {
  pool: true,
  pool_notes: "20th-floor swimming pool — rare for a co-living operator at this price point",
  gym: true,
  gym_quality: "average",
  concierge: "24h",
  sky_lounge: true,
  co_working: true,
  dining_room: true,
  cinema_room: false,
  rooftop_terrace: true,
  parking: false,
  bike_storage: true,
  pet_policy: "No pets",
  other_amenities: ["Spa", "Sauna", "Bar", "Café", "Regular resident events calendar", "All-bills-inclusive"],
  overall_tier: "decent",
};
arkCanaryWharf.architecture = {
  architects: [],
  awards: [],
  is_signature: false,
  style_notes: "Pre-existing Canary Wharf tower converted for co-living. 20-storey+ massing; the 20th-floor pool + amenity levels are the distinctive internal feature, not the exterior form.",
};
arkCanaryWharf.long_form = {
  full: "ARK Canary Wharf is a co-living building at Crossharbour Plaza, E14, occupying a converted tower with 20th-floor amenity levels. Studios are compact (20-28 sqm) with kitchenette (stovetop, mini-fridge, combi microwave — no full kitchen, no dishwasher), ensuite bathroom, parquet floors, and the smart-home standard (smart TV, safe, hairdryer). The differentiator vs. Node and Folk in the co-living category is the amenity package: 20th-floor swimming pool, sauna, spa, fitness gym, wellness studio, bar, café, co-working, regular community events. All bills included. 3-12 month licence contracts. Studios from around £2,150/month. Licence-exempt from RRA — ARK sets its own qualification rules, which is the grad-visa unlock.",
  living_experience: "Residents praise the design, building management, and the pool + sauna combination that is rare at this price tier. Principal complaint is that the building skews toward short-stay / transient residents, which degrades acoustic privacy and the quality of communal life — for some reviewers the turnover feels hotel-like rather than residential. Compact room dimensions are a second consistent note; setting up a desk for WFH alongside the bed is a challenge.",
  notable_features: "20th-floor pool + sauna + spa (rare at this price tier for co-living); all-bills-inclusive; licence-exempt qualification (the grad-visa unlock); Canary Wharf DLR + Jubilee on the doorstep; 3-month minimum contract.",
};
arkCanaryWharf.resident_signal = {
  homeviews_url: "https://www.homeviews.com/development/ark-canary-wharf-e14",
  summary: "HomeViews listing exists; explicit score not captured in this pass. Review signal splits between strong praise for design, management, and amenity vs. consistent complaint about short-stay turnover noise and compact unit size.",
  common_complaints: ["Short-stay turnover creates noise and diminishes community feel", "Compact studios — insufficient space for desk + bed combination"],
  common_praise: ["20th-floor pool + sauna + spa", "Modern design, well-maintained building", "Responsive, quality management team"],
};

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
    sources: [
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/tube-dlr-overground/stops/940GZZLUCYF/canary-wharf-underground-station", label: "TfL — Canary Wharf Underground", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://www.crossrail.co.uk/", label: "Crossrail / Elizabeth Line", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 34 },
      { cohort: "30-39", pct: 38 },
      { cohort: "40-49", pct: 14 },
      { cohort: "50+", pct: 14 },
    ],
    ethnic_composition: [
      { group: "White", pct: 42 },
      { group: "Asian", pct: 42 },
      { group: "Black", pct: 8 },
      { group: "Mixed", pct: 5 },
      { group: "Other", pct: 3 },
    ],
    household_mix: [
      { type: "Single person", pct: 33 },
      { type: "Couple no children", pct: 28 },
      { type: "Couple with children", pct: 18 },
      { type: "Lone parent", pct: 6 },
      { type: "Shared household", pct: 11 },
      { type: "Other", pct: 4 },
    ],
    student_pct: 6,
    professional_renter_pct: 58,
    notes: "Census 2021 Canary Wharf ward shows near-equal White and Asian split (predominantly Bangladeshi/South Asian, not East Asian). Mixed cosmopolitan with a strong professional renter base. Single-person households are the largest category at 33%, consistent with professional-renter mono-occupancy. 2021 Census predates Elizabeth Line opening (2022) and Wood Wharf delivery ramp — current demographics are plausibly skewing younger and more renter-dominant than the Census captures.",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021", type: "ons", accessed_date: "2026-04-17" },
      { url: "https://data.london.gov.uk/dataset/ward-profiles-and-atlas", label: "GLA Ward Profiles and Atlas", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "very-safe",
    crime_vs_borough: "below",
    crime_vs_croydon: "much-safer",
    after_dark_assessment: "Among the safest areas in London after dark. Canary Wharf Group operates a private stewardship model across the estate — uniformed guards, dense CCTV coverage, and well-funded cleaning and lighting programmes beyond what the borough provides. The residential Wood Wharf quarter is well-lit and quietly populated in the evenings; the financial core empties by 21:00 on weekdays but feels watched rather than deserted. Women-walking-alone assessment: among the most comfortable places in London. The only caveat is the edge transitions — the walk from Heron Quays DLR toward Millwall or Crossharbour moves out of the CWG footprint into more standard Isle of Dogs housing stock, where street lighting is ordinary.",
    concerns: [
      "Edge transitions to Crossharbour/Millwall leave the private stewardship footprint",
      "Weekend quietness in the financial core historically — improving with Wood Wharf activation",
    ],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police-service/canary-wharf/", label: "Met Police — Canary Wharf", type: "met-police", accessed_date: "2026-04-17" },
      { url: "https://www.met.police.uk/a/your-area/met/tower-hamlets/", label: "Met Police — Tower Hamlets", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: true,
    has_canal: false,
    has_dock: true,
    parks: [
      { name: "Crossrail Place Roof Garden", size_acres: 5, walk_minutes: 4, notes: "Elevated rooftop garden on the Elizabeth Line station roof; semi-tropical planting; free to enter" },
      { name: "Jubilee Park", size_acres: 3, walk_minutes: 5, notes: "Linear park through the financial core; mature planting and water features" },
      { name: "Westferry Circus Gardens", size_acres: 1.5, walk_minutes: 10, notes: "Circular garden at the western edge of the island; Thames views" },
      { name: "Mudchute Park & Farm", size_acres: 32, walk_minutes: 16, notes: "City farm and country-park-style green space on southern Isle of Dogs" },
      { name: "Island Gardens", size_acres: 4, walk_minutes: 18, notes: "Thames-side park with direct Greenwich views" },
    ],
    overall_assessment: "Water-on-three-sides identity — Thames to the south, West India Dock through the middle of the island, Blackwall Basin on the east. The dock-side walks (Wood Wharf waterside to North Dock) are continuous, stewarded, and genuinely pleasant. Park count is higher than the skyline suggests: Crossrail Place Roof Garden, Jubilee Park, and Westferry Circus are all within 10 min, plus Mudchute Farm and Island Gardens at the southern tip of the island for bigger green. Thames Path is walkable to Greenwich via the foot tunnel.",
    sources: [
      { url: "https://group.canarywharf.com/parks-gardens/", label: "Canary Wharf Group — parks and gardens", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.mudchute.org/", label: "Mudchute Park & Farm", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Waitrose Canary Wharf (Canada Place)", type: "supermarket", walk_minutes: 5, notes: "Full-size Waitrose in the Cabot Place mall; premium selection" },
      { name: "M&S Food Hall Canary Wharf", type: "supermarket", walk_minutes: 4, notes: "At Canada Place; full M&S Food range" },
      { name: "Whole Foods Market Canary Wharf", type: "supermarket", walk_minutes: 6, notes: "Under Crossrail Place; organic and premium; full grocery" },
      { name: "Tesco Express Canary Wharf", type: "convenience", walk_minutes: 4, notes: "Ground floor of One Canada Square; top-up shop" },
      { name: "Sainsbury's Local Westferry", type: "convenience", walk_minutes: 10, notes: "Budget top-up option at the island edge" },
    ],
    gyms: [
      { name: "Third Space Canary Wharf", type: "premium gym", walk_minutes: 5, notes: "Flagship Third Space at Canada Place; climbing wall, pool, sauna, boxing gym, BJJ mats; £200+/mo" },
      { name: "Nuffield Health Canary Wharf", type: "premium gym", walk_minutes: 6, notes: "At Cabot Place; pool, classes, gym floor; £90-110/mo" },
      { name: "Virgin Active Canary Wharf (Riverside)", type: "premium gym", walk_minutes: 8, notes: "Pool, classes, spa; £100+/mo" },
      { name: "PureGym Canary Wharf", type: "budget gym", walk_minutes: 7, notes: "24/7 at West India Quay; £30-40/mo" },
      { name: "Gymbox Canary Wharf (Park Pavilion)", type: "premium gym", walk_minutes: 4, notes: "Boxing ring, fight classes, late hours; £100/mo" },
      { name: "1Rebel Canary Wharf", type: "boutique", walk_minutes: 5, notes: "HIIT + Ride + Reshape classes; £30/class" },
    ],
    food_and_drink: [
      { name: "Crossrail Place (Above and Below)", type: "food hall", walk_minutes: 4, notes: "20+ restaurants including Big Easy, Dishoom, Wahaca, Roka" },
      { name: "Wood Wharf food quarter", type: "restaurants", walk_minutes: 5, notes: "Mercato Metropolitano coming 2026; current mix of bars and casual dining" },
      { name: "Plateau", type: "modern European", walk_minutes: 6, notes: "Canada Square Park, upmarket" },
      { name: "The Pearson Room", type: "cocktail bar", walk_minutes: 5, notes: "Crossrail Place; popular after-work" },
      { name: "Brewdog Canary Wharf", type: "bar", walk_minutes: 5, notes: "Canada Square" },
    ],
    health: [
      { name: "London Medical Centre (private)", type: "GP (private)", walk_minutes: 5, notes: "Private GP option; same-day appointments" },
      { name: "Barkantine Practice", type: "NHS GP", walk_minutes: 10, notes: "NHS GP on the Isle of Dogs; accepts registrations" },
      { name: "Canary Wharf Boots Pharmacy", type: "pharmacy", walk_minutes: 3, notes: "Cabot Place; full NHS services" },
      { name: "Royal London Hospital", type: "NHS hospital", walk_minutes: 15, notes: "A&E, full secondary care at Whitechapel (15 min via Elizabeth line)" },
    ],
    cultural: [
      { name: "Museum of London Docklands", type: "museum", walk_minutes: 7, notes: "West India Quay; London docks history; free" },
      { name: "Everyman Canary Wharf", type: "cinema", walk_minutes: 4, notes: "Crossrail Place; premium cinema with food service" },
      { name: "Canary Wharf Library (Idea Store)", type: "public library", walk_minutes: 7, notes: "Idea Store; quiet study spaces" },
      { name: "East Wintergarden", type: "events venue", walk_minutes: 5, notes: "Regular music, comedy, and corporate events" },
      { name: "Canary Wharf Winter Lights", type: "festival (seasonal)", walk_minutes: 0, notes: "Annual public art installation each January" },
    ],
    notes: "Amenity density is high and premium-tier dominant — the T2 structural advantage of Canary Wharf is that you get Waitrose + Whole Foods + M&S + Third Space + Everyman + Museum of London Docklands all within 10 min walk, which is the retail density of Zone 1 Marylebone at Zone 2 rents. Weakness: independent-café and quiet-third-space culture is thinner than central London — Foyles inside Crossrail Place and Canary Wharf Library are the main quiet options. Independent restaurant culture is growing at Wood Wharf but not yet at Borough/Shoreditch density.",
    sources: [
      { url: "https://canarywharf.com/shopping/", label: "Canary Wharf shopping directory", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.thirdspace.london/clubs/canary-wharf", label: "Third Space Canary Wharf", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: {
    status: "phased",
    investment_pipeline: "Wood Wharf is the active build-out phase — a 23-acre eastern extension of the Canary Wharf estate developed by Canary Wharf Group with a target of ~3,300 homes, 2m sq ft of workspace, and new public realm. Circa £2bn committed. Parallel pipeline: Ballymore's Newfoundland and EcoWorld's additional island towers, plus Berkeley's South Quay Plaza at the Marsh Wall boundary. Elizabeth Line station opened 2022 and continues to drive both residential and commercial leasing.",
    recent_milestones: [
      "2022 — Elizabeth Line Canary Wharf station opened",
      "2023 — 8 Water Street (Vertus) delivered",
      "2023 — 10 Park Drive delivered",
      "2024 — One Park Drive (Herzog & de Meuron) completed",
      "2024 — Newfoundland (EcoWorld Ballymore, 58 storeys) fully let",
      "2025 — 50-60 Charter Street (Vertus, 756 units) opened November 2025",
      "2025 — Wood Wharf retail phase 1 opened (food and beverage)",
    ],
    upcoming_milestones: [
      "2026 — Mercato Metropolitano Wood Wharf opening",
      "2026-2027 — Additional Vertus residential phases",
      "2027+ — Further EcoWorld Ballymore and Wood Wharf phases",
      "2027 — South Quay Plaza Phase 3 (Berkeley)",
    ],
    trajectory_through_2027:
      "Strongly ascending through the visa transition window. Wood Wharf will be substantially more complete by 2027 — the residential population will have grown materially, the retail and food quarter will be fully activated (Mercato opens 2026), and the historic weekend-quietness of the financial core is being structurally resolved by the residential expansion. Single steward (Canary Wharf Group) plus institutional capital, no planning uncertainty, committed pipeline.",
    sources: [
      { url: "https://group.canarywharf.com/", label: "Canary Wharf Group", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://woodwharf.com/", label: "Wood Wharf", type: "developer", accessed_date: "2026-04-17" },
    ],
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

  projects: [waterStreet8, parkDrive10, georgeStreet, charterStreet5060, oneParkDrive, newfoundland, southQuayPlaza, arkCanaryWharf],

  external_links: [
    { url: "https://group.canarywharf.com/", label: "Canary Wharf Group", type: "developer", accessed_date: "2026-04-11" },
    { url: "https://thisisvertus.com/", label: "Vertus Living", type: "operator", accessed_date: "2026-04-12" },
    { url: "https://en.wikipedia.org/wiki/Wood_Wharf", label: "Wikipedia (Wood Wharf)", type: "wikipedia", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default canaryWharf;
