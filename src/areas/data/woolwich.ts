import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Project consts (extracted for external_links / price_transparency mutation) ──

const RAR_LINK = { url: "https://www.berkeleygroup.co.uk/developments/london/woolwich/royal-arsenal-riverside", label: "Royal Arsenal Riverside — Berkeley", type: "developer" as const, accessed_date: "2026-04-12" };

const royalArsenalRiverside = buildProject({
  id: "royal-arsenal-riverside", area_id: "woolwich", name: "Royal Arsenal Riverside", developer: "Berkeley", operator: "Berkeley", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unknown",
  preview: "~5,000 home Berkeley masterplan. Elizabeth Line. Predominantly ownership-led with Berkeley Living rental arm. Qualification policy not publicly documented.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley's reliably strong build quality. Heritage context (former Royal Arsenal).",
    t4_1_amenity_package: "Strong shared amenities consistent with Berkeley's mid-premium standard.",
    t4_4_signature_arch: "Royal Arsenal heritage context. Woolwich Elizabeth Line station (Weston Williamson + Partners) is architecturally serious.",
  },
});
royalArsenalRiverside.external_links = [RAR_LINK];
royalArsenalRiverside.rental.price_transparency = "enquire";

const londonSquareWoolwich = buildProject({
  id: "london-square-woolwich", area_id: "woolwich", name: "London Square Woolwich", developer: "London Square", operator: "Agent-managed", building_type: "Build-to-Sell", build_phase: "future", tenure: ["rent", "buy"], realism: "unknown",
  preview: "122 units at Love Lane, SE18. Sales from £438,500. Q1 2028 completion. 24hr concierge, roof terrace with Thames and city views, co-working space. Walking distance to Woolwich and Woolwich Arsenal stations. Wider site has planning for 700+ homes.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Future delivery (Q1 2028). London Square developer. Build quality unconfirmed.",
    t4_1_amenity_package: "24hr concierge, roof terrace (Thames and city views), co-working space, underfloor heating, Siemens appliances.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
londonSquareWoolwich.rental.price_transparency = "unknown";

const galleyWharfWestQuay = buildProject({
  id: "galley-wharf-west-quay", area_id: "woolwich", name: "Galley Wharf — West Quay", developer: "Berkeley Group", operator: "Berkeley", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["buy"], realism: "blocked",
  preview: "Premium riverside sub-collection within the Royal Arsenal masterplan. Final 2-bed riverside homes available. Part of 5,163-home masterplan.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley premium riverside specification within the Royal Arsenal heritage context.",
    t4_1_amenity_package: "Strong — benefits from Royal Arsenal masterplan-level amenities plus premium riverside positioning.",
    t4_4_signature_arch: "Royal Arsenal heritage context. Not independently signature-authored.",
  },
});
galleyWharfWestQuay.external_links = [RAR_LINK];
galleyWharfWestQuay.rental.price_transparency = "enquire";

const seafarersWharf = buildProject({
  id: "seafarers-wharf", area_id: "woolwich", name: "Seafarers Wharf", developer: "Berkeley Group", operator: "Berkeley", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["buy"], realism: "blocked",
  preview: "Completed sale phase within Royal Arsenal Riverside. From £600,000. Final home available.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley delivery consistent with the Royal Arsenal standard.",
    t4_1_amenity_package: "Strong — Royal Arsenal masterplan amenity access.",
    t4_4_signature_arch: "Royal Arsenal heritage context.",
  },
});
seafarersWharf.external_links = [RAR_LINK];
seafarersWharf.rental.price_transparency = "enquire";

const sailorsWharf = buildProject({
  id: "sailors-wharf", area_id: "woolwich", name: "Sailors Wharf", developer: "Berkeley Group", operator: "Berkeley", building_type: "Build-to-Sell", build_phase: "in_delivery", tenure: ["buy"], realism: "blocked",
  preview: "Under construction within Royal Arsenal Riverside. 1, 2, 3-bed apartments. Completion Q1/Q2 2026. From £492,500.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley in-delivery to current specification — expected strong quality.",
    t4_1_amenity_package: "Strong — Royal Arsenal masterplan amenity access.",
    t4_4_signature_arch: "Royal Arsenal heritage context.",
  },
});
sailorsWharf.external_links = [RAR_LINK];
sailorsWharf.rental.price_transparency = "enquire";

const lanternWharf = buildProject({
  id: "lantern-wharf", area_id: "woolwich", name: "Lantern Wharf — West Quay", developer: "Berkeley Group", operator: "Berkeley", building_type: "Build-to-Sell", build_phase: "in_delivery", tenure: ["buy"], realism: "blocked",
  preview: "Under construction / marketing within Royal Arsenal Riverside.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley in-delivery — expected strong quality consistent with masterplan standard.",
    t4_1_amenity_package: "Strong — Royal Arsenal masterplan amenity access.",
    t4_4_signature_arch: "Royal Arsenal heritage context.",
  },
});
lanternWharf.external_links = [RAR_LINK];
lanternWharf.rental.price_transparency = "enquire";

const mariborRopeyards = buildProject({
  id: "maribor-ropeyards", area_id: "woolwich", name: "Maribor (Ropeyards)", developer: "Berkeley Homes", operator: "Berkeley", building_type: "Mixed", build_phase: "future", tenure: ["rent", "buy"], realism: "unknown",
  preview: "Pre-construction — service diversions Jan 2026, archaeological studies Feb 2026, concrete frames from May 2026, completion July 2029. 660+ homes in the wider Berkeley Woolwich pipeline. Named after Maribor, Slovenia (twinned with Woolwich).",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Unbuilt — Berkeley pedigree but specific quality cannot be scored until delivery.",
    t4_1_amenity_package: "Unbuilt — expected decent amenity consistent with Berkeley's Woolwich standard.",
    t4_4_signature_arch: "Unbuilt — no architect confirmed.",
  },
});
mariborRopeyards.rental.price_transparency = "unknown";

const greenwichCouncilRA = buildProject({
  id: "greenwich-council-royal-arsenal", area_id: "woolwich", name: "Greenwich Council Flats (Royal Arsenal)", developer: "Berkeley Homes", operator: "Greenwich Council", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent"], realism: "unknown",
  preview: "90 flats purchased by RB Greenwich from Berkeley Homes for council tenants within the Royal Arsenal development.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley-built to Royal Arsenal specification — council tenure does not affect build quality.",
    t4_1_amenity_package: "Decent — benefits from Royal Arsenal masterplan amenity context. Council management.",
    t4_4_signature_arch: "Royal Arsenal heritage context applies.",
  },
});
greenwichCouncilRA.rental.price_transparency = "unknown";

const callisYard = buildProject({
  id: "callis-yard", area_id: "woolwich", name: "Callis Yard", developer: "unknown", operator: "Various", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["buy"], realism: "blocked",
  preview: "120 apartments + townhouses (1, 2, 3-bed). Completed 2018, sold out. 2-min walk from Woolwich high street. Elizabeth Line accessible. Resale 1-bed from ~£390,000.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "2018 delivery — modern but now 8 years old. Elizabeth Line proximity is the transport advantage.",
    t4_1_amenity_package: "Decent — town centre convenience. Not a BTR amenity stack.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
callisYard.rental.price_transparency = "unknown";

const trinityWalk = buildProject({
  id: "trinity-walk", area_id: "woolwich", name: "Trinity Walk", developer: "unknown", operator: "Various", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "445 apartments + 13 townhouses. Mixed-tenure: affordable rent + private sale + Help to Buy. Large-scale near Woolwich centre.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Mixed-tenure delivery — functional standard. Not premium specification.",
    t4_1_amenity_package: "Decent — large-scale mixed-tenure with town centre proximity.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
trinityWalk.rental.price_transparency = "enquire";

const southmereThamesmead = buildProject({
  id: "southmere-thamesmead", area_id: "woolwich", name: "Southmere at Thamesmead", developer: "Peabody + Lovell Partnerships", operator: "Peabody", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unknown",
  preview: "Thamesmead edge. Phase 2: 192 apartments + duplexes (Lakeshore, Skyline), completion summer 2026. Phases 3-7 approved for up to 1,950 homes. 16-hour concierge, cinema room, co-working. £2.5m Southmere Lake regeneration. Abbey Wood Elizabeth Line adjacent.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Peabody/Lovell delivery — red brick-clad, modern specification. Phase 2 completing 2026.",
    t4_1_amenity_package: "Decent — 16-hour concierge, residents' lounge, co-working, cinema room. Southmere Lake and Lesnes Abbey Woods nearby.",
    t4_4_signature_arch: "Not signature-authored — functional regeneration delivery.",
  },
});
southmereThamesmead.rental.price_transparency = "enquire";

const floraApartments = buildProject({
  id: "flora-apartments-woolwich", area_id: "woolwich", name: "Flora Apartments", developer: "unknown", operator: "unknown", building_type: "Mixed", build_phase: "future", tenure: ["rent", "buy"], realism: "unknown",
  preview: "1 Frances Street, Woolwich SE18. Town centre location. Under construction / recently approved. Limited detail available.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Under construction — quality cannot yet be scored. Town centre positioning.",
    t4_1_amenity_package: "Unknown — limited detail available.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
floraApartments.rental.price_transparency = "unknown";

const woolwich: Area = {
  id: "woolwich",
  name: "Woolwich",
  aliases: ["Royal Arsenal", "Woolwich Arsenal"],
  borough: "Greenwich",
  postcodes: ["SE18"],

  headline:
    "Elizabeth Line + DLR + Southeastern in Zone 3/4 — the strongest 'cheap Zone 4 with proper connectivity' hit in the entire dataset. 9 minutes to Canary Wharf via Elizabeth Line. But Woolwich Arsenal ward is the most dangerous ward in Greenwich borough.",
  preview:
    "Elizabeth Line gives 9 min to Canary Wharf and 23 min to TCR. Three genuinely independent products (Elizabeth + DLR + Southeastern). Redundancy 4/5. Berkeley Royal Arsenal masterplan (~5,000 homes) is the project anchor. T1.1 is split: Royal Arsenal masterplan interior passes on Finding C (private stewardship), Woolwich town centre fringe does not. 20-39 at 50% — top-skew.",

  long_form: {
    full: "Woolwich is one of the most transformed areas in London since 2022 — the Elizabeth Line station opened in May that year and rebased the area's connectivity from 'peripheral Zone 4 with rail commute to London Bridge' to 'Zone 3/4 with Canary Wharf at 9 minutes and Tottenham Court Road at 23'. It sits at the eastern end of Greenwich borough on the Thames, anchored by Berkeley's Royal Arsenal Riverside masterplan (~5,000 homes phased through ~2030) and Woolwich Works (major cultural quarter opened 2021). The area has three genuinely independent transport modes within walking distance — Elizabeth, DLR, and Southeastern Railway — giving the strongest connectivity redundancy profile in Zone 3/4. The defining framing for Woolwich is that it's geographically split. Royal Arsenal Riverside is a private-stewardship masterplan with well-lit streets, Berkeley concierge buildings, Thames frontage, Grade II heritage buildings converted into pubs and restaurants (Dial Arch, Guard House), and a clearly 'safe' feel. Woolwich town centre to the north and west (Powis Street, General Gordon Square, the approach to Plumstead) is materially rougher — documented as the highest-crime ward in Greenwich borough with ~169 crimes per 1,000 residents. The T1.1 safety criterion splits along this geography: Royal Arsenal interior passes cleanly; Woolwich Arsenal ward as a whole fails on official stats.",
    history: "Woolwich's identity is military-industrial. The Royal Arsenal was the British Army's principal armaments factory from the 17th century through the mid-20th, at peak employing 80,000 workers during WW1. It closed in 1994, ending three centuries of military manufacturing on the site. The area declined through the 1990s and early 2000s as post-industrial decline compounded. Berkeley Group acquired the Royal Arsenal site in 2000 and has been delivering phased residential regeneration since 2002 — 23 years of continuous build-out. The DLR extended to Woolwich Arsenal in 2009, adding the first modern transit connection. The Elizabeth Line's Woolwich station opened in May 2022 — this is the intervention that catalysed the area's current trajectory. Woolwich Works cultural campus opened in 2021, reusing the former Royal Laboratory buildings for Chineke! Orchestra, Punchdrunk theatre, and other resident creative organisations.",
    vibe: "Split character. Inside Royal Arsenal Riverside: well-maintained private masterplan with heritage building conversions, Thames frontage, café culture building, a clearly young-professional-and-family skew. Outside the Arsenal gates: working town centre with a rough edge, market-and-Powis-Street retail mix, genuine community roots, and visible evidence of long-term regeneration rather than completed gentrification. The two sides read as different neighbourhoods sharing postcodes.",
    weekday: "A Tuesday at 7pm: Elizabeth Line station is busy with returning commuters; Royal Arsenal's Dial Arch pub is filling up; the riverside walk has runners; the town centre winds down early — most Powis Street retail closes by 18:00. Sainsbury's and M&S inside Royal Arsenal are the evening foot-traffic generators.",
    weekend: "A Saturday: brunch crowds at Royal Arsenal heritage pubs; Woolwich Works weekend programming generates cultural foot traffic; General Gordon Square hosts a weekly market; families on the Thames path and Woolwich Common. Saturday night is split — Royal Arsenal reads calm and residential; the town centre pub scene is rougher than the Arsenal's upscale mix.",
    notable: "Woolwich Elizabeth Line station (Weston Williamson + Partners) — architecturally serious. Royal Arsenal heritage context. Firepower museum. Woolwich Works (cultural campus opened 2021 — Chineke!, Punchdrunk). Dial Arch pub (Grade II former arsenal building). Thames Path continuity west toward Greenwich.",
    croydon_comparison: "Safety picture is nuanced. Inside Royal Arsenal Riverside, Woolwich is meaningfully safer at night than East Croydon — Berkeley's private stewardship, well-lit streets, concierged building entrances, and Thames frontage make the masterplan interior calm and pleasant. Outside Royal Arsenal, though, the numbers are closer to Croydon's: Woolwich Arsenal ward is Greenwich's highest-crime ward, and Powis Street / Plumstead approach after 22:00 carries genuine concern. The decisive difference is that Woolwich has a clearly safer zone to live inside (Royal Arsenal masterplan); Croydon doesn't have an equivalent private-stewarded enclave. Café density inside Royal Arsenal is comparable to Croydon's peak coverage but with dramatically cleaner tier mix — Dial Arch, Guard House, Woolwich Works cafés, M&S, Sainsbury's café. Transport differential is massive: Zone 3/4 with Elizabeth Line direct puts Canary Wharf at 9 minutes and TCR at 23, versus Croydon's Zone 5 Overground requiring 35+ minutes with a change. Three independent transit modes (Elizabeth, DLR, Southeastern) vs Croydon's Overground + Southern + Tram gives comparable redundancy but faster core journeys. Price is favourable: Royal Arsenal 1-bed rentals ~£1,750-2,200 per month, materially below Ten Degrees' ~£2,280 contractual / ~£3,000 effective.",
  },

  zones: ["Zone 3", "Zone 4"],
  connectivity: {
    lines: [
      { name: "Elizabeth", type: "elizabeth" },
      { name: "DLR", type: "dlr" },
      { name: "Southeastern", type: "rail" },
    ],
    primary_stations: [
      { name: "Woolwich", lines: ["Elizabeth"], walk_minutes_from_centre: 5 },
      { name: "Woolwich Arsenal", lines: ["DLR", "Southeastern"], walk_minutes_from_centre: 5 },
    ],
    times_to_anchors: { city_of_london: 25, canary_wharf: 9, soho_fitzrovia: 23, kings_cross_shoreditch: 26 },
    multi_cluster_score: 3,
    redundancy_score: 4,
    notes: "Elizabeth Line opening in 2022 is the single biggest connectivity transformation of any dataset area. Three independent modes at walking distance make this the strongest redundancy profile in Zone 3/4. Woolwich Arsenal DLR adds secondary reach; Southeastern gives direct to London Bridge and Cannon Street without routing through central. 24-hour service not available — late-night returns depend on Night Buses or Southeastern late services.",
    sources: [
      { url: "https://tfl.gov.uk/tube-dlr-overground/status/", label: "TfL Woolwich station", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "18-29",
    age_breakdown: [
      { cohort: "18-29", pct: 26 },
      { cohort: "30-39", pct: 24 },
      { cohort: "40-49", pct: 15 },
      { cohort: "50+", pct: 35 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 24 },
      { group: "White — other", pct: 14 },
      { group: "Asian or Asian British", pct: 14 },
      { group: "Black or Black British", pct: 34 },
      { group: "Mixed", pct: 8 },
      { group: "Other ethnic group", pct: 6 },
    ],
    household_mix: [
      { type: "Single person", pct: 32 },
      { type: "Couple no children", pct: 20 },
      { type: "Couple with children", pct: 22 },
      { type: "Lone parent", pct: 13 },
      { type: "Shared household", pct: 9 },
      { type: "Other", pct: 4 },
    ],
    student_pct: 8,
    professional_renter_pct: 46,
    notes: "Woolwich Arsenal ward is the top-skew ward in the area — 50% 20-39, driven by Berkeley Royal Arsenal's professional-renter cluster plus the Elizabeth Line pull. Woolwich Common and wider Plumstead-facing edges skew older and more family-dominant. The ward-by-ward split matters: Royal Arsenal masterplan interior is 'young professional riverside'; town centre is 'long-resident mixed community'. Census 2021.",
    sources: [
      { url: "https://www.ons.gov.uk/visualisations/censusareachanges/E05014096", label: "ONS Census 2021 — Woolwich Arsenal", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "moderate",
    crime_vs_borough: "above",
    crime_vs_croydon: "similar",
    after_dark_assessment: "Geographically split. Royal Arsenal Riverside interior is Berkeley-stewarded, well-lit, and genuinely quiet at night — the masterplan's private streets and concierged entrances create a safe, calm residential envelope. Outside the Arsenal gates, Woolwich town centre (Powis Street, General Gordon Square area) reads rougher after 22:00 — thin pedestrian density, some aggressive begging around the Elizabeth Line station concourse, documented anti-social behaviour on the approach to Plumstead. The walk from Woolwich Elizabeth Line station back into Royal Arsenal after 22:00 is fine for a woman walking alone; the walk into wider Woolwich / Plumstead is not. This split geography is the single most important framing for the area.",
    concerns: [
      "Woolwich Arsenal ward — highest crime rate in Greenwich borough (169/1k residents)",
      "Plumstead approach and Powis Street after 22:00 — thin pedestrian density, documented anti-social behaviour",
      "T1.1 split: Royal Arsenal interior passes on private stewardship; Woolwich town centre fringe fails",
      "Elizabeth Line station concourse — occasional aggressive begging / group loitering at night",
    ],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police-service/woolwich-arsenal/", label: "Met Police — Woolwich Arsenal", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: true,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Woolwich Common", size_acres: 159, walk_minutes: 15, notes: "Large open common — protected open space, south of the town centre, good dog-walking and running loop" },
      { name: "Royal Arsenal Gardens (Major Draper Street / Wellington Park)", size_acres: 6, walk_minutes: 3, notes: "Masterplan-internal landscaped green space — well-maintained Berkeley public realm" },
      { name: "Maryon Park", size_acres: 23, walk_minutes: 20, notes: "Historic park between Woolwich and Charlton — elevated views over the Thames" },
      { name: "Thames riverside walk", walk_minutes: 2, notes: "Continuous riverside path from Royal Arsenal west toward Greenwich" },
    ],
    overall_assessment: "Good water identity via Thames frontage; moderate parkland. Royal Arsenal has the designed green spaces of a modern masterplan and direct Thames access. Woolwich Common is a substantial 159-acre open space 15 minutes south — large but closer to wild common than designed park. Maryon Park is walkable as a secondary option. Nowhere has the depth of Greenwich Park (which is 30+ minutes by bus), but the Thames frontage and masterplan landscaping give this area a genuine outdoor footprint.",
    sources: [
      { url: "https://www.royalgreenwich.gov.uk/info/200183/parks_and_open_spaces", label: "RB Greenwich parks directory", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Sainsbury's Woolwich (Dial Arch / Royal Arsenal)", type: "supermarket", walk_minutes: 5, notes: "Full-format Sainsbury's inside Royal Arsenal — the core weekly shop" },
      { name: "M&S Simply Food (Royal Arsenal)", type: "convenience-premium", walk_minutes: 4, notes: "On-masterplan M&S for top-up and ready meals" },
      { name: "Tesco Powis Street", type: "supermarket", walk_minutes: 8, notes: "Town centre Tesco — larger format" },
      { name: "Aldi Woolwich", type: "budget-supermarket", walk_minutes: 12, notes: "Budget option on the Plumstead edge" },
    ],
    gyms: [
      { name: "PureGym Woolwich", type: "commercial-budget", walk_minutes: 6, notes: "24/7 PureGym near the station — standard budget stack" },
      { name: "The Gym Group Woolwich", type: "commercial-budget", walk_minutes: 7, notes: "24/7 Gym Group — second budget option" },
      { name: "Better Waterfront Leisure Centre", type: "council-leisure", walk_minutes: 4, notes: "Council-run leisure centre with pool, gym, classes — on the Thames" },
      { name: "Royal Arsenal residents' gyms", type: "resident", walk_minutes: 2, notes: "Berkeley residents' gyms within Royal Arsenal Riverside — for residents only" },
      { name: "WKX Gym (boxing, mixed martial arts)", type: "boxing-gym", walk_minutes: 10, notes: "Specialist combat sports gym in the Plumstead-facing streets" },
    ],
    food_and_drink: [
      { name: "Dial Arch pub (Royal Arsenal)", type: "gastropub", walk_minutes: 3, notes: "Grade II listed former arsenal building — upscale gastropub, a genuine destination" },
      { name: "The Guard House (Royal Arsenal)", type: "pub", walk_minutes: 4, notes: "Another heritage-pub conversion inside the masterplan" },
      { name: "Woolwich Works restaurants (various)", type: "cultural-food", walk_minutes: 4, notes: "New cultural quarter inside former military buildings — several restaurant + café anchors" },
      { name: "General Gordon Square food market", type: "street-market", walk_minutes: 6, notes: "Weekly market plus town-centre eateries — mixed quality" },
    ],
    health: [
      { name: "Royal Arsenal Medical Centre", type: "GP", walk_minutes: 5, notes: "Modern GP surgery inside Royal Arsenal — accepting new registrations" },
      { name: "Queen Elizabeth Hospital Woolwich", type: "hospital", walk_minutes: 20, notes: "Full-service NHS hospital 20 min walk or short bus" },
      { name: "Boots (Powis Street)", type: "pharmacy", walk_minutes: 8, notes: "Town centre pharmacy" },
    ],
    cultural: [
      { name: "Woolwich Works", type: "cultural-quarter", walk_minutes: 4, notes: "Major new cultural campus (opened 2021) — Chineke! Orchestra, Punchdrunk theatre, Woolwich Contemporary Print Fair. A genuine anchor." },
      { name: "Royal Artillery Museum (Firepower)", type: "museum", walk_minutes: 6, notes: "Military heritage museum on Royal Arsenal site" },
      { name: "Woolwich Centre Library", type: "library", walk_minutes: 6, notes: "Full council library with study space" },
      { name: "Tramshed (Woolwich Creative District)", type: "venue", walk_minutes: 8, notes: "Former tram shed converted to creative/event space" },
      { name: "Elizabeth Line Woolwich station building", type: "architecture", walk_minutes: 5, notes: "Weston Williamson + Partners — coffered concrete ceiling, architecturally serious station" },
    ],
    notes: "Woolwich has a surprisingly rich amenity mix for its price point — Royal Arsenal's heritage building conversions (Dial Arch, Guard House, Woolwich Works) give it genuine destination quality, the town centre handles basics, three commercial gyms plus a leisure centre covers T2.3 well. The gap is boutique/premium retail (no Waitrose, no premium gym brand like Third Space). Cultural infill post-Woolwich Works is the biggest recent shift.",
    sources: [
      { url: "https://www.berkeleygroup.co.uk/developments/london/woolwich/royal-arsenal-riverside", label: "Royal Arsenal Riverside directory", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.woolwich.works/", label: "Woolwich Works", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: {
    status: "active",
    investment_pipeline: "The largest regeneration shift in south-east London this decade. Berkeley Royal Arsenal Riverside masterplan delivers ~5,000 homes phased through ~2030. Elizabeth Line opened at Woolwich in May 2022 — the anchor intervention. Woolwich Works cultural quarter opened 2021. Spray Street Quarter (St Modwen-led) is the next major scheme pending — 600 homes plus retail/cultural uses on a town-centre brownfield site. RB Greenwich purchased 90 Royal Arsenal flats from Berkeley for council tenants (2024). Maribor (Ropeyards) — Berkeley Homes pre-construction, 660+ homes, concrete frames from May 2026, completion July 2029. London Square Woolwich (Love Lane, SE18) — 122 units, Q1 2028 completion.",
    recent_milestones: [
      "2022 — Woolwich Elizabeth Line station opened (Weston Williamson + Partners)",
      "2021 — Woolwich Works cultural quarter opened",
      "2024 — RB Greenwich purchased 90 Royal Arsenal flats for council tenants",
      "2024 — Seafarers Wharf completed (Berkeley, final home remaining)",
      "2025 — Sailors Wharf in delivery (Berkeley, completion Q1/Q2 2026)",
    ],
    upcoming_milestones: [
      "2026 — Sailors Wharf completion (Berkeley)",
      "2026 — Maribor (Ropeyards) construction starts (Berkeley, concrete frames May 2026)",
      "2026-2027 — Spray Street Quarter planning advancing (St Modwen)",
      "2028 — London Square Woolwich (Love Lane) completion",
      "2029 — Maribor completion (Berkeley)",
    ],
    trajectory_through_2027: "By August 2027, Woolwich will be ~2/3 through its regeneration arc. Royal Arsenal Riverside will have delivered most of its Thames-frontage phases; Maribor will be mid-construction adding visible scaffolding; Spray Street Quarter will likely be in early delivery; Woolwich Works will be an established cultural anchor with multi-year programming track record. The Elizabeth Line effect will be fully priced-in by then — any remaining 'Elizabeth Line discount' will have closed.",
    sources: [
      { url: "https://www.berkeleygroup.co.uk/developments/london/woolwich/royal-arsenal-riverside", label: "Royal Arsenal Riverside (Berkeley)", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.royalgreenwich.gov.uk/info/200257/regeneration", label: "RB Greenwich regeneration", type: "council", accessed_date: "2026-04-17" },
      { url: "https://www.woolwich.works/", label: "Woolwich Works", type: "other", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "partial", "1.5": "partial", "1.6": "pass" },
      {
        "1.1": "MARGINAL — split call. Royal Arsenal masterplan interior passes T1.1 on Finding C (private stewardship). Woolwich town centre fringe does not. Recommended: marginal pass for Royal Arsenal specifically.",
        "1.2": "Berkeley Royal Arsenal — modern stock present. Predominantly ownership-led with Berkeley Living rental.",
        "1.3": "Elizabeth + DLR + Southeastern. Three genuinely independent products.",
        "1.4": "Berkeley Living is the rental arm — referencing policy not publicly documented. No Quintain/Get Living/Vertus.",
        "1.5": "Royal Arsenal heritage context is well-maintained. Wider Woolwich town centre is uneven.",
        "1.6": "Ascending — Elizabeth Line transformative, Royal Arsenal continues to deliver.",
      },
      "moderate",
      "T1 is split by geography. Royal Arsenal passes cleanly; Woolwich town centre does not.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "partial", "2.3": "unknown", "2.4": "pass", "2.5": "partial", "2.7": "pass" },
      {
        "2.1": "Royal Arsenal has some retail. Woolwich town centre provides additional essentials.",
        "2.2": "Standard town-centre grocery. Not destination-quality.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Thames-side at Royal Arsenal. Woolwich Common walkable.",
        "2.5": "Royal Arsenal is quieter. Town centre is busier.",
        "2.7": "20-39 at 50% — top-skew.",
      },
      "moderate",
      "Functional daily life. Thames-side and demographics are the positives.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "partial", "3.3": "pass", "3.4": "partial", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "Active — Berkeley Royal Arsenal phased delivery, Elizabeth Line station, Spray Street Quarter.",
        "3.2": "Royal Arsenal heritage is the anchor. Firepower museum. No major cultural institution.",
        "3.3": "Distinct identity — military heritage, riverside, Elizabeth Line gateway. 'New Woolwich' is forming.",
        "3.4": "15-minute completeness is partial — Royal Arsenal is still building out retail/amenity.",
        "3.5": "Woolwich Elizabeth Line station is architecturally serious (Weston Williamson + Partners). Royal Arsenal heritage.",
        "3.6": "Day/night rhythm is developing. Not yet a destination.",
      },
      "moderate",
      "T3 moderate. Heritage and Elizabeth Line station are the architectural anchors. Destination identity is still forming.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 3/5 — 3/4 anchors ≤25 (Old Street just over). Average 21.25 min.",
        "5.2": "Three genuinely independent products. Redundancy 4/5.",
        "5.3": "Ascending — Elizabeth Line transformative, Royal Arsenal delivering.",
        "5.4": "Third-space culture is thin. Still building out.",
      },
      "good",
      "Strong T5 — excellent redundancy, ascending trajectory, good connectivity for Zone 4 pricing.",
    ),
    overall_grade: "B",
    grade_reasoning: "B — Elizabeth Line connectivity is genuinely transformative for Zone 3/4 pricing. Royal Arsenal passes T1 on private stewardship. Constrained by Woolwich town centre safety (T1.1 split) and Berkeley Living's opaque qualification policy.",
  },

  // ── RESEARCH: Woolwich projects ──────────────────────────────────────
  // Berkeley (Royal Arsenal Riverside):
  //   Operator: Berkeley Living (rental arm)
  //   Referencing: unknown (Berkeley Living referencing not publicly documented)
  //   Agreement type: ast
  //   International friendly: unknown
  //   Visa friendly: unknown
  //   Prices: UNVERIFIED — predominantly ownership-led
  //   Cost tier: mid-range (Zone 3/4 pricing advantage)
  //   Grad visa realism: unknown (Berkeley Living's opaque qualification policy)
  //
  // Other projects: predominantly ownership-led (buy-only)
  // ───────────────────────────────────────────────────────────────────────

  projects: [
    royalArsenalRiverside, londonSquareWoolwich, galleyWharfWestQuay,
    seafarersWharf, sailorsWharf, lanternWharf, mariborRopeyards,
    greenwichCouncilRA, callisYard, trinityWalk, southmereThamesmead, floraApartments,
  ],

  external_links: [
    { url: "https://www.berkeleygroup.co.uk/developments/london/woolwich/royal-arsenal-riverside", label: "Royal Arsenal Riverside (Berkeley)", type: "developer", accessed_date: "2026-04-12" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default woolwich;
