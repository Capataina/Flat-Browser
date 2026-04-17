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

// ── Project consts (extracted for external_links / price_transparency mutation) ──

const QL_LINK = { url: "https://www.quintainliving.com/", label: "Quintain Living", type: "operator" as const, accessed_date: "2026-04-12" };

const qlLuna = buildProject({
  id: "luna", area_id: "wembley-park", name: "Luna by Quintain Living", developer: "Quintain", operator: "Quintain Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable",
  preview: "Newest building. Modernist celestial aesthetic. Eclipse Lounge, rooftop cocktail bar, secret dining room exclusive to residents.", amenity_tier: "premium", overall_grade: "A",
});
qlLuna.external_links = [QL_LINK];
qlLuna.rental.price_transparency = "listed";
qlLuna.rental.affordability = "at-budget";
qlLuna.rental.prices = {
  studio: { min: 1746, max: 2100, currency: "GBP", per: "month" },
  one_bed: { min: 2400, max: 2612, currency: "GBP", per: "month" },
  two_bed: { min: 2962, max: 3400, currency: "GBP", per: "month" },
  bills_included: false,
  notes: "Studios have discount for 9-12 month tenancies. Verified 2026-04-17.",
};
qlLuna.building_quality = {
  epc_rating: "B",
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "Units 36-61 sqm. Floor-to-ceiling windows; bespoke furniture collection; geometric design motifs.",
  kitchen_quality: "good",
  heating_type: "communal",
  notes: "Luna is Quintain's newest building (2024 completion). Modern, well-insulated, high-spec finish.",
};
qlLuna.amenities = {
  pool: false, pool_notes: "",
  gym: true, gym_quality: "good",
  concierge: "24h",
  sky_lounge: true,
  co_working: true,
  dining_room: true,
  cinema_room: false,
  rooftop_terrace: true,
  parking: false,
  bike_storage: true,
  pet_policy: "Pet-friendly; on-site dog park; monthly pet fee applies.",
  other_amenities: ["Eclipse Lounge", "The Black Hole secret dining room", "Kids play areas", "BBQ and dining areas", "Hireable social spaces"],
  overall_tier: "premium",
};
qlLuna.architecture.awards = ["Sunday Times Best Places to Live in London — 2025 (Wembley Park area award, Luna specifically featured)"];
qlLuna.architecture.style_notes = "Modernist celestial aesthetic. Deep cool tones, geometric patterns. Part of the North East Lands phase (NE03). 2024 completion, 282 apartments.";
qlLuna.resident_signal = {
  homeviews_score: 4.9,
  homeviews_url: "https://www.homeviews.com/development/luna-ha9",
  summary: "Too few reviews for reliable signal (1 review on HomeViews as of research date). The single verified review is highly positive (4.9/5).",
  common_complaints: [],
  common_praise: [],
};

const qlFerrum = buildProject({
  id: "ferrum", area_id: "wembley-park", name: "Ferrum by Quintain Living", developer: "Quintain", operator: "Quintain Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable",
  preview: "New York warehouse loft-style. Industrial chic interiors. Strongest gym offering of any Quintain building on site.", amenity_tier: "strong", overall_grade: "A",
});
qlFerrum.external_links = [QL_LINK];
qlFerrum.rental.price_transparency = "listed";
qlFerrum.rental.affordability = "comfortably-affordable";
qlFerrum.rental.prices = {
  studio: { min: 1829, max: 2100, currency: "GBP", per: "month" },
  one_bed: { min: 2265, max: 2575, currency: "GBP", per: "month" },
  two_bed: { min: 2464, max: 2800, currency: "GBP", per: "month" },
  bills_included: false,
  notes: "Cheapest studio on the Quintain campus. Verified 2026-04-17.",
};
qlFerrum.building_quality = {
  epc_rating: "B",
  sound_insulation: "average",
  thermal_performance: "poor",
  layout_notes: "Studios 39 sqm, 1-bed 51 sqm, 2-bed 63 sqm. Industrial loft aesthetic — exposed brick and concrete, Crittall windows, premium wood worktops.",
  kitchen_quality: "good",
  heating_type: "communal",
  notes: "Ferrum is the clearest case on the Quintain campus where HomeViews signal contradicts the paper spec. EPC B and Environmental Impact A on certificate; lived experience shows persistent thermal and acoustic problems.",
};
qlFerrum.amenities = {
  pool: false, pool_notes: "",
  gym: true, gym_quality: "good",
  concierge: "daytime",
  sky_lounge: false,
  co_working: true,
  dining_room: false,
  cinema_room: false,
  rooftop_terrace: true,
  parking: true,
  bike_storage: true,
  pet_policy: "Pets welcome; on-site dog park. Verified £50/mo pet fee per HomeViews reviewer.",
  other_amenities: ["Meeting rooms", "Laundry room", "Specialist recycling", "Event space for hire", "Podium garden", "BBQs"],
  overall_tier: "strong",
};
qlFerrum.architecture.style_notes = "New York warehouse loft aesthetic. Exposed brick and concrete, Crittall windows, premium wood worktops. 188 homes. 2020-2021 completion window.";
qlFerrum.resident_signal = {
  homeviews_score: 3.95,
  homeviews_url: "https://www.homeviews.com/development/ferrum-ha9",
  summary: "3.94/5 across 118 reviews — the lowest-rated major Quintain Living building on HomeViews. Concierge/design praise is real; building-quality (heating, acoustics) and management-responsiveness complaints are persistent.",
  common_complaints: ["Persistent heating problems — cold in winter, stuffy in summer", "Acoustic privacy — hearing neighbours showering, pipe noise", "Management closes maintenance tickets without resolution", "Undisclosed £50/mo pet fee flagged as hidden charge"],
  common_praise: ["Modern industrial design aesthetic", "Concierge and resident team", "Gym is the strongest on the Quintain campus", "Location — Wembley Park station walkability", "Underground parking availability"],
};

const qlMadison = buildProject({
  id: "madison", area_id: "wembley-park", name: "Madison by Quintain Living", developer: "Quintain", operator: "Quintain Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable",
  preview: "Mid-century modern. Overlooks Union Park. Roof terrace with direct stadium arch views. Screening room, dog park.", amenity_tier: "strong", overall_grade: "A",
});
qlMadison.external_links = [QL_LINK];
qlMadison.rental.price_transparency = "listed";
qlMadison.rental.affordability = "at-budget";
qlMadison.rental.prices = {
  studio: { min: 2116, max: 2300, currency: "GBP", per: "month" },
  one_bed: { min: 2254, max: 2560, currency: "GBP", per: "month" },
  two_bed: { min: 3121, max: 3400, currency: "GBP", per: "month" },
  bills_included: false,
  notes: "Verified 2026-04-17. 12% 1-bed discount is the most aggressive on the Quintain stack.",
};
qlMadison.building_quality.epc_rating = "B";
qlMadison.building_quality.sound_insulation = "good";
qlMadison.building_quality.thermal_performance = "good";
qlMadison.building_quality.kitchen_quality = "good";
qlMadison.building_quality.heating_type = "communal";
qlMadison.building_quality.layout_notes = "Studios 40 sqm, 1-bed 52 sqm, 2-bed 65 sqm. Mid-century sophistication aesthetic. Opens directly onto Union Park.";
qlMadison.building_quality.notes = "Madison is the most Union-Park-oriented of the Quintain buildings — the frontage onto the new public park is the building's spatial USP.";
qlMadison.amenities.gym_quality = "average";
qlMadison.amenities.concierge = "daytime";
qlMadison.amenities.co_working = true;
qlMadison.amenities.cinema_room = true;
qlMadison.amenities.rooftop_terrace = true;
qlMadison.amenities.parking = true;
qlMadison.amenities.bike_storage = true;
qlMadison.amenities.gym = true;
qlMadison.amenities.pet_policy = "Pet-friendly; on-site dog park.";
qlMadison.amenities.other_amenities = ["TV room", "Resident kitchen", "Meeting rooms", "2 roof terraces with stadium views", "Event space for hire", "BBQ and outdoor dining"];
qlMadison.architecture.style_notes = "Mid-century sophistication inspired by the Mad Men era. Overlooks Union Park. Walnut tones, brass accents, vintage-modern interior vocabulary.";
qlMadison.resident_signal = {
  homeviews_score: 4.55,
  homeviews_url: "https://www.homeviews.com/development/madison-ha9",
  summary: "4.54/5 across 81 reviews — one of the stronger Quintain Living buildings on HomeViews. Management responsiveness is the dominant positive theme; gym size and storage are the consistent soft complaints.",
  common_complaints: ["Limited apartment storage space", "Gym is small and windowless", "Stadium event days disrupt commuting", "Anti-social behaviour near stadium entrance on event nights", "Premium pricing feels steep at advertised rates"],
  common_praise: ["Management team responsiveness", "Contemporary design and build quality", "Union Park frontage and rooftop views", "24-hour staff availability", "Transport link access (Jubilee + Metropolitan)"],
};

const qlCanadaGardens = buildProject({
  id: "canada-gardens", area_id: "wembley-park", name: "Canada Gardens by Quintain Living", developer: "Quintain", operator: "Quintain Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable",
  preview: "Botanical-inspired. BBQ terraces, communal dining spaces, play park. Family-forward in feel.", amenity_tier: "strong", overall_grade: "B",
});
qlCanadaGardens.external_links = [QL_LINK];
qlCanadaGardens.rental.price_transparency = "listed";
qlCanadaGardens.rental.affordability = "at-budget";
qlCanadaGardens.rental.prices = {
  studio: { min: 2135, max: 2300, currency: "GBP", per: "month" },
  one_bed: { min: 2336, max: 2437, currency: "GBP", per: "month" },
  two_bed: { min: 2814, max: 2936, currency: "GBP", per: "month" },
  bills_included: false,
  notes: "Verified 2026-04-17. 4% 1-bed/2-bed discount for May 2026 move-ins. Communal energy billed through operator.",
};
qlCanadaGardens.building_quality.epc_rating = "B";
qlCanadaGardens.building_quality.sound_insulation = "average";
qlCanadaGardens.building_quality.thermal_performance = "average";
qlCanadaGardens.building_quality.kitchen_quality = "good";
qlCanadaGardens.building_quality.heating_type = "communal";
qlCanadaGardens.building_quality.layout_notes = "Studio 38 sqm, 1-bed 50 sqm, 2-bed 63 sqm. Opens onto 1 acre of green space — most overtly family-oriented of the Quintain buildings.";
qlCanadaGardens.amenities.gym = true;
qlCanadaGardens.amenities.gym_quality = "average";
qlCanadaGardens.amenities.concierge = "daytime";
qlCanadaGardens.amenities.co_working = true;
qlCanadaGardens.amenities.rooftop_terrace = true;
qlCanadaGardens.amenities.parking = true;
qlCanadaGardens.amenities.bike_storage = true;
qlCanadaGardens.amenities.pet_policy = "Pet-friendly; on-site dog park.";
qlCanadaGardens.amenities.other_amenities = ["On-site coffee shop", "Library", "Phone booths", "Kids pirate ship + playhouse", "Kids paddling pool", "Resident allotments", "Resident Clubhouse"];
qlCanadaGardens.architecture.style_notes = "Urban country oasis aesthetic. Botanical-inspired, 1 acre of green space, allotments, family-forward feel.";
qlCanadaGardens.resident_signal = {
  homeviews_score: 4.0,
  homeviews_url: "https://www.homeviews.com/development/canada-gardens-wembley-park-ha9",
  summary: "4.01/5 across 126 reviews — mid-pack for the Quintain stack. Family-friendly design and green space are consistent positives; communal energy billing is a consistent operational negative.",
  common_complaints: ["Communal energy rate (42.6p/kWh) well above London average", "Quarterly energy reconciliation invoices of £300-£400", "Weekend noise from communal events", "Deposit deductions on move-out", "Slow maintenance response times"],
  common_praise: ["Green space around the building — 1 acre", "Family-friendly amenities", "Library and phone-booth co-working spaces", "On-site coffee shop", "Design aesthetic — botanical, peaceful"],
};

const qlLandsby = buildProject({
  id: "landsby", area_id: "wembley-park", name: "Landsby by Quintain Living", developer: "Quintain", operator: "Quintain Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable",
  preview: "The Scandi-feeling Union Park address. Strong everyday liveability and one of the clearest options for green space over stadium spectacle.", amenity_tier: "strong", overall_grade: "A",
});
qlLandsby.external_links = [QL_LINK];
qlLandsby.rental.price_transparency = "listed";
qlLandsby.rental.affordability = "at-budget";
qlLandsby.rental.prices = {
  one_bed: { min: 2144, max: 2437, currency: "GBP", per: "month" },
  two_bed: { min: 2875, max: 3125, currency: "GBP", per: "month" },
  bills_included: false,
  notes: "Verified 2026-04-17. 1-bed £2,144 discounted is one of the more affordable 1-bed options in the Quintain stack. No studios at Landsby.",
};
qlLandsby.building_quality.epc_rating = "B";
qlLandsby.building_quality.sound_insulation = "good";
qlLandsby.building_quality.thermal_performance = "good";
qlLandsby.building_quality.kitchen_quality = "good";
qlLandsby.building_quality.heating_type = "communal";
qlLandsby.building_quality.layout_notes = "1-bed 51 sqm, 2-bed 66 sqm, 3-bed 88 sqm. Scandi-inspired interior — light woods, minimal palette, hygge-oriented finishes. Hansgrohe bathroom fittings.";
qlLandsby.amenities.gym = true;
qlLandsby.amenities.gym_quality = "good";
qlLandsby.amenities.concierge = "daytime";
qlLandsby.amenities.co_working = true;
qlLandsby.amenities.rooftop_terrace = true;
qlLandsby.amenities.parking = true;
qlLandsby.amenities.bike_storage = true;
qlLandsby.amenities.pet_policy = "Pet-friendly; on-site dog park.";
qlLandsby.amenities.other_amenities = ["Resident kitchen", "Resident lounge", "2 roof terraces", "2 resident gardens", "2 kids play areas", "Podium playground", "Event space for hire"];
qlLandsby.architecture.style_notes = "Scandi-inspired — 'Landsby' means village in Danish. Nordic design vocabulary, hygge-emphasis, sprawling gardens.";
qlLandsby.resident_signal = {
  homeviews_score: 4.25,
  homeviews_url: "https://www.homeviews.com/development/landsby-wembley-park-ha9",
  summary: "4.24/5 across 98 reviews — top-quartile Quintain building. Named staff praise recurs across reviews; soft negatives on value-for-money and occasional aged furniture.",
  common_complaints: ["Premium pricing feels high", "Furniture in some units is aged", "Stadium event days increase local bustle", "Management rating (3.9) lower than design/location/facilities", "Value rating (3.7) lowest category"],
  common_praise: ["Named staff — Milton repeatedly singled out", "On-site gym is a fantastic facility", "Local shops and restaurants within walking distance", "Quiet, peaceful soundscape", "Concierge creates welcoming, secure environment"],
};

// OPERATOR CHANGE 2026-04-17: Alameda transitioned from Quintain Living to Allsop Letting & Management
// on 2025-12-31. No longer listed on Quintain Living portfolio page. Homeppl referencing pathway may
// not apply under Allsop — realism kept as "achievable" pending direct verification of Allsop's
// international-tenant policy. Source: V2 research 2026-04-17 (enrichment-quintain-living.md).
const qlAlameda = buildProject({
  id: "alameda", area_id: "wembley-park", name: "Alameda (Allsop)", developer: "Quintain", operator: "Allsop Letting & Management", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unclear",
  preview: "Transferred from Quintain Living to Allsop Letting & Management on 2025-12-31. Qualification pathway under Allsop unverified — Homeppl Open Banking route may not apply. Enquire directly for referencing requirements.", amenity_tier: "strong", overall_grade: "B",
});
qlAlameda.external_links = [
  { url: "https://www.allsop.co.uk/lettings-and-management/", label: "Allsop Letting & Management", type: "operator" as const, accessed_date: "2026-04-17" },
];
qlAlameda.rental.price_transparency = "enquire";

// PORTFOLIO STATUS UNCLEAR 2026-04-17: Beton no longer appears on Quintain Living apartment-buildings
// page. Separate marketing site referenced but inaccessible at research time. Flagged for direct
// enquiry — may have transferred ownership like Alameda, or may have been removed from portfolio.
// Source: V2 research 2026-04-17 (enrichment-quintain-living.md).
const qlBeton = buildProject({
  id: "beton", area_id: "wembley-park", name: "Beton (portfolio status unclear)", developer: "Quintain", operator: "Quintain Living (status unclear)", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unclear",
  preview: "Not currently listed on Quintain Living portfolio page. Portfolio status unclear — may have transferred ownership or been withdrawn. Enquire directly to confirm current operator and availability.", amenity_tier: "decent", overall_grade: "B",
});
qlBeton.external_links = [QL_LINK];
qlBeton.rental.price_transparency = "enquire";

// OWNERSHIP CHANGE 2026-04-17: Alto ownership transferred to Goldman Sachs Asset Management + Tene
// Living in 2023. Continues to market lettings under the Quintain Living brand so the day-to-day
// resident experience is unchanged, but underlying owner is Tene Living. Qualification pathway
// unverified under new ownership — realism preserved pending direct confirmation.
// Source: V2 research 2026-04-17 (enrichment-quintain-living.md).
const qlAlto = buildProject({
  id: "alto", area_id: "wembley-park", name: "Alto (Tene Living / Goldman Sachs)", developer: "Quintain", operator: "Quintain Living (Tene Living / GSAM ownership)", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unclear",
  preview: "Ownership transferred to Goldman Sachs Asset Management + Tene Living (2023). Still marketed under Quintain Living for lettings. Siemens-spec premium interiors remain the calling card. Qualification pathway under new ownership unverified.", amenity_tier: "decent", overall_grade: "B",
});
qlAlto.external_links = [QL_LINK];
qlAlto.rental.price_transparency = "listed";

const qlSolar = buildProject({
  id: "solar", area_id: "wembley-park", name: "Solar by Quintain Living", developer: "Quintain", operator: "Quintain Living", building_type: "BTR", build_phase: "in_delivery", tenure: ["rent"], realism: "achievable",
  preview: "383 units (studios to 3-bed). Late 2025 delivery. Standard Quintain Living package: gym, resident events, 24hr support, pet-friendly. Pricing not yet published — likely studios from ~GBP 1,500/mo, 1-bed from ~GBP 1,700/mo based on platform-wide pricing.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "In delivery — latest Quintain specification expected. 2025 build.",
    t4_1_amenity_package: "Standard Quintain Living package: gym, resident events, 24hr concierge/support, pet-friendly, communal spaces. Strong.",
    t4_4_signature_arch: "No specific jury signal. Quintain campus architecture — functional rather than signature.",
  },
});
qlSolar.external_links = [QL_LINK];
qlSolar.rental.price_transparency = "listed";
qlSolar.rental.affordability = "at-budget";
qlSolar.rental.prices = {
  studio: { min: 2076, max: 2379, currency: "GBP", per: "month" },
  one_bed: { min: 2364, max: 2575, currency: "GBP", per: "month" },
  bills_included: false,
  notes: "Verified 2026-04-17. Unfurnished studio option is unusual for the Quintain stack and £300/mo cheaper than the furnished equivalent.",
};
qlSolar.building_quality.epc_rating = "B";
qlSolar.building_quality.thermal_performance = "good";
qlSolar.building_quality.kitchen_quality = "good";
qlSolar.building_quality.heating_type = "communal";
qlSolar.building_quality.layout_notes = "Studios 39-41 sqm, 1-beds 50 sqm. 383 units across studio to 3-bed. Modernist interior — warm earthy shades, luxe finishes. Late-2025 completion.";
qlSolar.amenities.gym = true;
qlSolar.amenities.gym_quality = "good";
qlSolar.amenities.concierge = "daytime";
qlSolar.amenities.co_working = true;
qlSolar.amenities.rooftop_terrace = true;
qlSolar.amenities.parking = true;
qlSolar.amenities.bike_storage = true;
qlSolar.amenities.pet_policy = "Pet-friendly; on-site dog park.";
qlSolar.amenities.other_amenities = ["Landscaped gardens", "Kids' play area", "Resident lounge", "Roof terrace with BBQ", "Video entry + keyless access"];
qlSolar.architecture.style_notes = "Natural modernist luxe — warm earthy shades, modernist interior vocabulary. Late-2025 completion. 383 units.";

// SCOPE NARROWED 2026-04-17: Luna is confirmed as NE03, so "North East Lands" was double-counting
// when it represented NE02 + NE03. Rescoped to represent NE02 only (487 flats, 2025-2026 delivery)
// to avoid duplication. Source: V2 research 2026-04-17 (enrichment-quintain-living.md).
const qlNorthEastLands = buildProject({
  id: "north-east-lands", area_id: "wembley-park", name: "North East Lands (NE02)", developer: "Quintain (John Sisk & Son contractor)", operator: "Quintain Living", building_type: "BTR", build_phase: "in_delivery", tenure: ["rent"], realism: "achievable",
  preview: "487-flat NE02 phase of the North East Lands build-out, 2025-2026 delivery (Luna covers the NE03 phase separately). Standard Quintain Living package — gym, resident events, Homeppl referencing, communal gardens and roof terraces.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Under construction — latest Quintain specification expected. GBP 227m Sisk contract.",
    t4_1_amenity_package: "Communal gardens, public park, roof terraces on each block. Strong place-making at campus scale.",
    t4_4_signature_arch: "No specific jury signal. Campus-scale delivery.",
  },
});
qlNorthEastLands.external_links = [QL_LINK];
qlNorthEastLands.rental.price_transparency = "listed";
qlNorthEastLands.rental.affordability = "unclear";
qlNorthEastLands.architecture.style_notes = "NE02 will contribute to the 12-acre North East Lands phase. 10-27 storey building heights. Communal gardens + public park + roof terraces on each block. Campus-scale placemaking. John Sisk & Son appointed contractor (£227m).";

const arkWembley = buildProject({
  id: "ark-wembley", area_id: "wembley-park", name: "ARK Wembley", developer: "ARK", operator: "ARK Co-living", building_type: "BTR", living_model: "co-living", build_phase: "complete", tenure: ["rent"], realism: "licence-exempt",
  preview: "Co-living studios from £1,699/month (Classic 20 sqm), £2,049 (Premium 28 sqm), £2,099 (Premium Plus 29 sqm). All bills included. 3–12 month contracts. Premium/Premium Plus sold out until August 2026 — only Classic currently available.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Co-living specification. Modern managed studios.",
    t4_1_amenity_package: "Decent — communal spaces, cleaning, events programme included.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
arkWembley.external_links = [
  { url: "https://arkcoliving.com/locations/wembley", label: "ARK Co-living Wembley", type: "operator", accessed_date: "2026-04-15" },
];
arkWembley.rental.price_transparency = "listed";
arkWembley.rental.affordability = "comfortably-affordable";
arkWembley.rental.prices = {
  studio: { min: 1699, max: 2099, currency: "GBP", per: "month" },
  bills_included: true,
  notes: "Classic 20 sqm £1,699; Premium 28 sqm £2,049; Premium Plus 29 sqm £2,099. All bills included. 3–12 month contracts.",
};

// CRITICAL CORRECTION 2026-04-16: Despite co-living branding, Vonder Wembley lettings are run through
// Fraser Bond using STANDARD AGENT REFERENCING (credit checks, employment verification, previous landlord
// references). NOT licence-exempt. Was incorrectly tagged "licence-exempt" — corrected to "unlikely".
// Source: https://fraserbond.com/blog/article/vonder-wembley-london-ha9-b3301 + Fraser Bond's referencing methodology page.
const vonderWembley = buildProject({
  id: "vonder-wembley", area_id: "wembley-park", name: "Vonder Wembley", developer: "Vonder", operator: "Vonder (lettings via Fraser Bond)", building_type: "BTR", living_model: "co-living", build_phase: "complete", tenure: ["rent"], realism: "unlikely",
  preview: "313-apartment co-living. Studios from ~£1,545/month, 1-beds from ~£1,825/month. Bills included (excl. council tax). 3-month minimum stay. Community events, shared spaces. NOTE: lettings via Fraser Bond using standard credit/employment/landlord referencing — not the licence-exempt model the co-living branding suggests.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Co-living specification. Modern build within Wembley Park campus.",
    t4_1_amenity_package: "Decent — communal spaces, community events, shared facilities.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
vonderWembley.external_links = [
  { url: "https://www.vonderwembley.com/", label: "Vonder Wembley", type: "operator", accessed_date: "2026-04-15" },
];
vonderWembley.rental.price_transparency = "listed";
vonderWembley.rental.affordability = "comfortably-affordable";
vonderWembley.rental.prices = {
  studio: { min: 1545, max: 1800, currency: "GBP", per: "month" },
  one_bed: { min: 1825, max: 2100, currency: "GBP", per: "month" },
  bills_included: true,
  notes: "Bills included (excl. council tax). 3-month minimum stay.",
};

const wembleyPark: Area = {
  id: "wembley-park",
  name: "Wembley Park",
  aliases: ["Wembley", "Quintain Living estate"],
  borough: "Brent",
  postcodes: ["HA9"],

  headline:
    "The UK's largest single-site BTR development — 85 acres of Quintain-managed buildings around the stadium with a real 15-minute neighbourhood model.",
  preview:
    "Quintain's transformation of the Wembley Stadium hinterland into a managed BTR campus is unmatched in the UK for scale and coordination. Eight named buildings, single-landlord referencing, Boxpark + Designer Outlet + nine-screen Cineworld on site, Jubilee + Metropolitan lines. Sunday Times Best Place to Live in London 2025.",

  long_form: {
    full: "Quintain's 85-acre transformation is the most comprehensively managed BTR campus in the country. The 15-minute neighbourhood model is genuinely delivered: Boxpark, London Designer Outlet (70+ shops and restaurants), a nine-screen Cineworld, Troubadour Theatre, Union Park, and extensive green spaces are all on site. The Jubilee and Metropolitan lines put Baker Street 12 minutes away. Quintain Living runs a resident events programme — cooking classes, rooftop screenings, socials — that creates more organic social infrastructure than developments three times the price. Buildings are professionally managed under a single landlord, which makes referencing and maintenance straightforward. Studios from roughly GBP 1,700/month; 1-beds from roughly GBP 2,200/month. BTR only — you cannot purchase here. On full completion in 2027, the masterplan reaches 8,500 homes.",
    history:
      "Until the late 2000s, Wembley Park was a tired post-war commercial fringe to Wembley Stadium, dominated by surface parking and underused industrial sites. Quintain bought the land around the stadium and began a phased masterplan in 2002 that has since delivered over 4,500 homes against a planned 8,500 by 2027.",
    vibe: "Wembley Park reads as deliberately functional rather than culturally curated. The streets are clean, the public realm is generous, and the leisure offer is dense. On a non-event Tuesday it feels more like a quiet, well-managed campus than a buzzy district. The crowd is younger than the average London area, with strong South Asian household presence and a noticeable share of recent graduates and early-career professionals.",
    weekday:
      "A Tuesday at 7pm: Designer Outlet stays open until 9, Cineworld is busy with after-work showings, Boxpark has a moderate crowd, the gyms are full, and Union Park sees joggers and dog walkers. Jubilee line trains pulse every 2-3 minutes. The streets feel populated but calm.",
    weekend:
      "A Saturday at midday: Designer Outlet hits weekend shopping peak, restaurants fill, Union Park is the social centre. On stadium event days the area transforms — 80,000 people arrive and depart over the course of the day. Non-event Saturdays are unremarkable in the best way: a normal busy suburb with retail and food at scale.",
    notable:
      "Wembley Stadium itself is the obvious anchor, but the more interesting story is the Quintain Living model: a single landlord operating eight named buildings (Luna, Ferrum, Madison, Canada Gardens, Landsby, Alameda, Beton, Alto), each with distinct interior themes, all sharing the same management quality, the same referencing process, the same resident events programme.",
    croydon_comparison:
      "Wembley Park is the cleanest single comparison point to Croydon in the entire dataset. Both are Zone 4 outer-London centres with stadium associations, big retail offers, and roughly equivalent travel times to central London. The differences are everything else: Wembley Park is professionally managed end to end where Croydon is fragmented private rentals, the public realm is recently built and maintained where Croydon's is decaying, the demographic skew is significantly younger, and the rental qualification process is materially easier through Quintain's central referencing. For Caner specifically, Wembley Park is the closest the dataset comes to a pure 'same kind of place but actually nice' upgrade.",
  },

  zones: ["Zone 4"],
  connectivity: {
    lines: [
      { name: "Jubilee", type: "tube" },
      { name: "Metropolitan", type: "tube" },
      { name: "Bakerloo", type: "tube" },
      { name: "Overground", type: "overground" },
    ],
    primary_stations: [
      { name: "Wembley Park", lines: ["Jubilee", "Metropolitan"], walk_minutes_from_centre: 3 },
      { name: "Wembley Central", lines: ["Bakerloo", "Overground"], walk_minutes_from_centre: 14 },
    ],
    times_to_anchors: {
      city_of_london: 28,
      canary_wharf: 32,
      soho_fitzrovia: 22,
      kings_cross_shoreditch: 25,
    },
    multi_cluster_score: 3,
    redundancy_score: 4,
    notes: "Jubilee is the primary line and the fastest to central London. Metropolitan adds direct access to the City via Baker Street. Wembley Central's Bakerloo+Overground adds a second independent station 14 min away, which becomes relevant during Jubilee engineering works.",
    sources: [
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/tube-dlr-overground/stops/940GZZLUWYP/wembley-park-underground-station", label: "TfL — Wembley Park station", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "18-29",
    age_breakdown: [
      { cohort: "18-29", pct: 41 },
      { cohort: "30-39", pct: 22 },
      { cohort: "40-49", pct: 14 },
      { cohort: "50+", pct: 23 },
    ],
    ethnic_composition: [
      { group: "South Asian", pct: 38 },
      { group: "White", pct: 31 },
      { group: "Black", pct: 13 },
      { group: "Mixed", pct: 9 },
      { group: "Other Asian", pct: 9 },
    ],
    household_mix: [
      { type: "Single person", pct: 29 },
      { type: "Couple no children", pct: 22 },
      { type: "Couple with children", pct: 24 },
      { type: "Lone parent", pct: 9 },
      { type: "Shared household", pct: 12 },
      { type: "Other", pct: 4 },
    ],
    student_pct: 8,
    professional_renter_pct: 47,
    notes: "Wembley Park ward grew roughly 7x in population between 2011 and 2021 because of the Quintain delivery — Census data may understate the current shift even further toward younger professionals. Strong Indian and Gujarati heritage in the wider Wembley area reflected in retail mix (Ealing Road spice shops, temples).",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021", type: "ons", accessed_date: "2026-04-17" },
      { url: "https://data.london.gov.uk/dataset/ward-profiles-and-atlas", label: "GLA ward profiles", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "safe",
    crime_vs_borough: "below",
    crime_vs_croydon: "much-safer",
    after_dark_assessment:
      "Quiet and well-lit on non-event days — Olympic Way is pedestrianised, CCTV-covered, and steadily trafficked until ~22:00. On event days the area swells to 80,000+ but is professionally stewarded by Brent Safer Neighbourhood team plus private stadium security. No persistent trouble spots within the Quintain footprint.",
    concerns: [
      "Post-event crowd dispersion around Wembley Central/Wembley Park stations (manageable, stewarded)",
      "Fulton Road and Wembley High Road edges have petty theft reports in Met Police data — within the Quintain footprint itself there are none",
    ],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police-service/wembley-park/", label: "Met Police — Wembley Park ward", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: false,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Union Park", size_acres: 7, walk_minutes: 5, notes: "Designed park at the heart of the Quintain estate, central social space" },
      { name: "King Edward VII Park", size_acres: 25, walk_minutes: 18, notes: "Larger municipal park to the south-west" },
    ],
    overall_assessment: "Union Park is the everyday green-space win — small but well-designed. Wembley Park is not a riverside or waterside area.",
  },
  amenities: {
    grocery: [
      { name: "M&S Food Hall Wembley Park", type: "supermarket", walk_minutes: 4, notes: "Full M&S Food; on the main pedestrian route from the station" },
      { name: "Sainsbury's Local Wembley Park", type: "supermarket", walk_minutes: 5, notes: "Top-up convenience inside the masterplan" },
      { name: "Tesco Extra Wembley", type: "hypermarket", walk_minutes: 12, notes: "Full-size Tesco at Wembley High Road; weekly shop option" },
      { name: "Lidl Wembley", type: "supermarket", walk_minutes: 14, notes: "Budget option on Wembley High Road" },
    ],
    gyms: [
      { name: "Nuffield Health Wembley", type: "premium-gym", walk_minutes: 7, notes: "Pool, gym floor, classes, spa; premium tier; £80-100/mo" },
      { name: "PureGym Wembley Park", type: "budget-gym", walk_minutes: 3, notes: "24/7, in the Quintain footprint; £25-35/mo; no pool" },
      { name: "The Gym Group Wembley", type: "budget-gym", walk_minutes: 12, notes: "24/7, alternative budget option on Wembley High Road" },
      { name: "F45 Wembley Park", type: "boutique-studio", walk_minutes: 4, notes: "Functional HIIT studio inside Quintain masterplan" },
      { name: "Resident gyms at Quintain buildings", type: "btr-gym", walk_minutes: 3, notes: "Free with tenancy; good-to-excellent by BTR standards (Ferrum especially)" },
    ],
    food_and_drink: [
      { name: "Boxpark Wembley", type: "food-hall", walk_minutes: 3, notes: "20+ street-food traders, bars, DJs on event nights; central meeting spot" },
      { name: "London Designer Outlet", type: "retail-and-food", walk_minutes: 4, notes: "70+ shops including Gail's, Nando's, Wagamama, Caffè Nero; open until 21:00" },
      { name: "Troubadour Theatre", type: "cultural-venue", walk_minutes: 3, notes: "Pop-up large-format theatre with attached bar/restaurant" },
      { name: "Pilot Wembley", type: "pub", walk_minutes: 5, notes: "Young's pub inside the Quintain footprint" },
      { name: "Tipico Lounge", type: "restaurant", walk_minutes: 4, notes: "Pan-Asian; Ferrum ground floor" },
    ],
    health: [
      { name: "Wembley Park Medical Centre", type: "gp", walk_minutes: 8, notes: "Accepts new NHS registrations; standard catchment" },
      { name: "Boots Pharmacy Wembley Park", type: "pharmacy", walk_minutes: 4, notes: "Full NHS pharmacy services" },
      { name: "Northwick Park Hospital", type: "nhs-hospital", walk_minutes: 20, notes: "A&E, full secondary care (bus)" },
    ],
    cultural: [
      { name: "Wembley Stadium", type: "stadium", walk_minutes: 5, notes: "90,000-capacity national stadium; 40+ events/year" },
      { name: "OVO Arena Wembley", type: "arena", walk_minutes: 5, notes: "12,500-capacity; regular music programming" },
      { name: "Cineworld Wembley", type: "cinema", walk_minutes: 4, notes: "9-screen + IMAX; late showings daily" },
      { name: "Troubadour Wembley Park Theatre", type: "theatre", walk_minutes: 3, notes: "2,000-seat pop-up theatre, West End tryouts" },
      { name: "Wembley Park Live", type: "public-events", walk_minutes: 0, notes: "Open-air programming in Arena Square summer months" },
    ],
    notes: "Amenity texture is retail-mall-adjacent rather than independent-high-street — the Boxpark + Designer Outlet + Cineworld + Troubadour anchor set is the explicit trade Quintain made. Good for density and predictability. Less good: genuinely independent cafés, bookshops, and small restaurants are thin inside the campus — for that you walk 10-15 min to Wembley High Road or Ealing Road.",
    sources: [
      { url: "https://wembleypark.com/eat-and-drink/", label: "Wembley Park — Eat and Drink", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.nuffieldhealth.com/gyms/wembley", label: "Nuffield Health Wembley", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.puregym.com/gyms/wembley-park/", label: "PureGym Wembley Park", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: {
    status: "phased",
    investment_pipeline: "Quintain's ~£3 billion masterplan is two-thirds delivered — ~5,500 homes complete against a target of 8,500 by 2027. Remaining phases are concentrated in the North East Lands (2,000+ homes across 12 acres, contractor John Sisk & Son on a £227m contract) and final Solar/East-Parade blocks. Supporting public realm budgets fund continued park, lighting, and retail frontage works through 2027.",
    recent_milestones: [
      "2024 — Luna by Quintain Living delivered (the flagship celestial-themed building)",
      "2023 — Union Park public realm phase completed",
      "2025 — Sunday Times Best Place to Live in London award",
      "2025 — Solar building topped out",
      "2025 — North East Lands NE02 under construction (769 homes phase)",
    ],
    upcoming_milestones: [
      "2026 — Solar completion (383 units)",
      "2026-2027 — NE02 completion",
      "2027 — NE03 completion, masterplan at ~8,500 homes",
      "2027 — Final public realm phase (Arena Square refresh)",
    ],
    trajectory_through_2027:
      "Wembley Park is on a clear ascending trajectory through Caner's visa transition window. The masterplan completes in 2027, the same year his visa transitions — the area will be at peak coordination and maturity at precisely the decision moment. Of the five areas in this batch, Wembley Park has the most predictable trajectory: single developer, single operator, committed pipeline, no planning uncertainty.",
    sources: [
      { url: "https://wembleypark.com/news/", label: "Wembley Park news", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://quintain.co.uk/news/", label: "Quintain news", type: "developer", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Met Police data shows Brent below borough average; visibly stewarded",
        "1.2": "Quintain BTR campus is the most extensively modern rental stock in the dataset",
        "1.3": "Jubilee + Metropolitan via Wembley Park; Bakerloo + Overground via Wembley Central",
        "1.4": "Quintain Living is the canonical example of central referencing — single operator across eight buildings",
        "1.5": "Recently built, actively maintained, masterplan continues to invest",
        "1.6": "Trajectory is sharply ascending through 2027 masterplan completion",
      },
      "strong",
      "Wembley Park passes T1 cleanly on all six criteria. There is no foundational viability question; this area meets the floor without qualification.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "partial", "2.5": "partial", "2.7": "pass" },
      {
        "2.1": "15-min neighbourhood model is real here; supermarket, gym, pharmacy, GP, cinema all under 10 min",
        "2.2": "M&S Food Hall + Sainsbury's within 6 min; food hall (Boxpark) on doorstep",
        "2.3": "Nuffield + PureGym within 8 min — premium and budget options both available",
        "2.4": "Union Park is well-designed but small (7 acres); no river, canal, or dock",
        "2.5": "Quiet on non-event days; loud and crowded on stadium event days (40+ days per year)",
        "2.7": "Census 2021 shows 41% in 18-29 cohort, well above London average",
      },
      "strong",
      "T2 is one of Wembley Park's strongest tiers. The 15-minute neighbourhood is genuine, gym access is excellent, demographic skew is strongly young. The two partial scores (small green space, event-day noise) are real but manageable quirks.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "partial" },
      {},
      "good",
      "T3 is where Wembley Park is functionally strong but architecturally and culturally thinner than King's Cross. The masterplan delivers identity through scale and coordination rather than through distinguished architecture. Stadium and Boxpark provide the cultural anchor; the buildings themselves are functional rather than signature.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "pass", "5.4": "partial" },
      {},
      "good",
      "Multi-cluster commute is decent (3 of 4 anchors ≤25 min), redundancy is strong (4 lines via two stations), trajectory is among the strongest in the dataset, but quiet third-space culture (bookshops, libraries) is thinner than central London areas.",
    ),
    overall_grade: "A",
    grade_reasoning:
      "Wembley Park earns an A grade on the strength of foundational viability (T1: 6/6), excellent daily life quality (T2: 4 pass + 2 partial), and a strong 2027 trajectory. The B/A boundary call is the absence of distinctive cultural depth that keeps it from S tier.",
  },

  // ── RESEARCH: All Quintain Living projects ──────────────────────────────
  // Operator: Quintain Living
  // Referencing: Homeppl (confirmed — Homeppl case study published)
  // Open Banking: true (Homeppl uses Open Banking)
  // Professional guarantor: true (Homeppl Guarantid service available)
  // Agreement type: ast (standard BTR tenancy)
  // International friendly: yes (Homeppl designed for internationals)
  // Visa friendly: yes (Homeppl assesses without UK credit file)
  // Min tenancy: 0 (post-RRA periodic ASTs)
  // Prices (from Quintain Living website / OnTheMarket 2025-2026):
  //   Studio: £1,650–£1,879 pcm
  //   1-bed: ~£2,100–£2,400 pcm (varies by building)
  //   2-bed: ~£2,600–£3,200 pcm (varies by building)
  // Cost tier: mid-range (studios) to premium (larger units)
  // Grad visa realism: achievable (Homeppl + Guarantid)
  // ───────────────────────────────────────────────────────────────────────

  projects: [
    qlLuna, qlFerrum, qlMadison, qlCanadaGardens, qlLandsby,
    qlAlameda, qlBeton, qlAlto, qlSolar, qlNorthEastLands,
    arkWembley, vonderWembley,
  ],

  external_links: [
    { url: "https://wembleypark.com/", label: "Wembley Park official site", type: "developer", accessed_date: "2026-04-11" },
    { url: "https://www.quintainliving.com/", label: "Quintain Living official site", type: "operator", accessed_date: "2026-04-11" },
    { url: "https://en.wikipedia.org/wiki/Wembley_Park", label: "Wikipedia", type: "wikipedia", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default wembleyPark;
