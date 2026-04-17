import type { Area, Project } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch, stubBuildingQuality, stubAmenities, stubArchitecture, stubLongForm, stubResidentSignal, stubProjectEvaluation, criterion } from "./helpers";

// ── Project consts (extracted for external_links / price_transparency mutation) ──

const quartersCroydon = buildProject({
  id: "quarters-croydon", area_id: "croydon", name: "The Quarters Croydon", developer: "Bravo Investment House", operator: "The Quarters by Bravo", building_type: "BTR", living_model: "managed-studio", build_phase: "complete", tenure: ["rent"], realism: "licence-exempt",
  preview: "Extended-stay serviced studios. 151 units. 1960s office conversion. 3-month minimum stay (recently changed from monthly). No credit or background checks — just pay and move in. Cheapest option in the Croydon area at ~£900-1,100/month.",
  amenity_tier: "basic", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "1960s office block conversion (St Anne House). Sound insulation is notably poor — multiple resident reviews mention thin walls. Functional but not modern standard.",
    t4_1_amenity_package: "Basic — gym (small), courtyard, laundry room, parking. No concierge, no pool, no co-working. Bills add-on £40/month.",
    t4_4_signature_arch: "Not signature. 1960s commercial conversion with no architectural distinction.",
  },
});
quartersCroydon.external_links = [
  { url: "https://thequarters.co.uk/", label: "The Quarters by Bravo", type: "operator", accessed_date: "2026-04-12" },
];
quartersCroydon.rental.price_transparency = "listed";

const enclaveCroydon = buildProject({
  id: "enclave-croydon", area_id: "croydon", name: "Enclave Croydon", developer: "unknown", operator: "Enclave (Outpost)", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable-with-guarantor",
  preview: "817-unit, 50-storey BTR tower. All-inclusive model (utilities + 1GB Wi-Fi), no deposit required. 1-bed from £2,230 pcm. 30+ amenities including spa, gym, Peloton suite, cinema, sky library, podcast studio, green screen studio. Mixed resident reviews — amenity package praised, some build quality concerns.",
  amenity_tier: "premium", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Mixed resident reviews — some concerns about build quality and noise despite premium amenity packaging. 50-storey tower delivered ~2024-2025.",
    t4_1_amenity_package: "Premium — 30+ amenities including spa, gym, Peloton suite, yoga studio, cinema, sky library, sky garden, co-working, podcast studio, private dining. One of the deepest amenity stacks in the dataset.",
    t4_4_signature_arch: "Architect not confirmed. 50-storey tower is a landmark by height but not by architectural authorship.",
  },
});
enclaveCroydon.external_links = [
  { url: "https://enclave.com/locations/croydon", label: "Enclave Croydon", type: "operator", accessed_date: "2026-04-12" },
];
enclaveCroydon.rental.price_transparency = "listed";

const saffronSquare = buildProject({
  id: "saffron-square", area_id: "croydon", name: "Saffron Square", developer: "Berkeley Group", operator: "Various", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "~764 apartments, 43-storey tower (Croydon's most prominent). Berkeley delivery, completed 2016. Significant buy-to-let presence on secondary rental market. 1-2 bed rentals £1,500-2,200 pcm.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley build quality from 2016 — competent but now a decade old. Not current-generation specification.",
    t4_1_amenity_package: "Decent for a 2016 sale-led development. Not a BTR amenity stack.",
    t4_4_signature_arch: "Croydon's tallest tower — landmark presence by scale. Not signature-authored by a named practice.",
  },
});
saffronSquare.rental.price_transparency = "enquire";

const morelloCroydon = buildProject({
  id: "morello-croydon", area_id: "croydon", name: "Morello", developer: "Redrow Homes", operator: "Various", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "370 apartments across 4 buildings (Maraschino, Santina, Rainier, Amarelle). Completed ~2020. Rental listings from ~£1,400 pcm. Mixed HomeViews reviews.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Redrow standard residential — functional but not premium. Mixed resident reviews on HomeViews.",
    t4_1_amenity_package: "Decent for a sale-led scheme. Not a BTR amenity stack.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
morelloCroydon.rental.price_transparency = "enquire";

const vitaApartments = buildProject({
  id: "vita-apartments", area_id: "croydon", name: "Vita Apartments (Ruskin Square)", developer: "Stanhope + Schroders", operator: "Various", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "Part of the Ruskin Square development adjacent to East Croydon station. Private sale with secondary rental market. Accessed via Lansdowne Road / Dingwall Road.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Modern specification consistent with the Ruskin Square development standard.",
    t4_1_amenity_package: "Decent — part of the Ruskin Square precinct amenity rather than standalone BTR.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
vitaApartments.rental.price_transparency = "enquire";

const amroCroydonBtr = buildProject({
  id: "amro-croydon-btr", area_id: "croydon", name: "Amro Partners Croydon BTR", developer: "Amro Partners", operator: "Amro Partners", building_type: "BTR", build_phase: "future", tenure: ["rent"], realism: "unknown",
  preview: "Planning secured for purpose-built BTR near East Croydon station. Targeting BREEAM Outstanding — would be Croydon's first. Pre-construction.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Unbuilt — BREEAM Outstanding target suggests high sustainability spec if delivered.",
    t4_1_amenity_package: "Unbuilt — expected BTR amenity standard but no detail confirmed.",
    t4_4_signature_arch: "Unbuilt — no architect confirmed.",
  },
});
amroCroydonBtr.rental.price_transparency = "unknown";

const croydon: Area = {
  id: "croydon",
  name: "Croydon",
  aliases: ["East Croydon", "West Croydon", "Central Croydon"],
  borough: "Croydon",
  postcodes: ["CR0", "CR9"],

  headline:
    "The baseline. This is where Caner currently lives — every other area in the dataset is measured against Croydon. Zone 5, ~35 minutes to the City, crime above borough average, limited walkable amenities, stalled regeneration.",
  preview:
    "The thing being upgraded from. Ten Degrees is a decent building in a mediocre area. Croydon's connectivity is better than its reputation (East Croydon is one of the busiest stations in London) but the public realm, safety, identity, and daily-life quality do not justify £3k/month all-in.",

  long_form: {
    full: "Croydon is a large outer-London borough that has been promising regeneration for over a decade without delivering the transformation its scale warrants. The Westfield development was cancelled. The high street has visible vacancy. East Croydon station is genuinely well-connected — fast trains to Victoria and London Bridge, Thameslink through-running, Overground, tram — but the area around it does not feel like it earns the connectivity premium. The Ruskin Square development (where Ten Degrees sits) is a pocket of modern stock in a sea of older commercial conversions and 1960s tower blocks. There is no waterfront, no park of note within easy walking distance, and the cultural offer is thin. The night-time economy is centred on a handful of chain bars and clubs that draw a crowd Caner does not identify with. The area is not unsafe in absolute terms, but it is noticeably rougher than the inner-London alternatives at the same price point.",
    history: "Historic market town absorbed into London in 1965. Major Victorian and Edwardian commercial centre. Post-war decline followed by waves of promised regeneration — the Croydon Vision masterplan (2006), the Westfield partnership (cancelled 2019), the Brick by Brick scandal (council housing company that went bankrupt). East Croydon has always been the transport asset; the area around it has never matched the station's quality.",
    vibe: "Functional but uninspiring. The high street has visible vacancy and the public realm is tired. Ruskin Square is a pocket of modern glass towers surrounded by 1960s concrete. The tram gives it an oddly continental feel at ground level but the surrounding streets don't follow through.",
    weekday: "A Tuesday at 7pm: commuters streaming through East Croydon, Boxpark has some after-work drinks crowd, high street is quiet, most retail closed by 6. Some anti-social behaviour around West Croydon.",
    weekend: "A Saturday at midday: Boxpark has brunch energy, Surrey Street Market is active, the rest of the centre is thin. No destination quality — nobody comes to Croydon for the weekend.",
    notable: "East Croydon station (one of the busiest in London by passenger volume). Boxpark Croydon. Surrey Street Market. Fairfield Halls (arts venue, recently refurbished). Croydon Minster.",
    croydon_comparison: "This is Croydon. The baseline against which every other area is measured.",
  },

  zones: ["Zone 5"],
  connectivity: {
    lines: [
      { name: "Southern", type: "rail" },
      { name: "Thameslink", type: "rail" },
      { name: "Overground", type: "overground" },
      { name: "Tramlink", type: "tram" },
    ],
    primary_stations: [
      { name: "East Croydon", lines: ["Southern", "Thameslink", "Overground"], walk_minutes_from_centre: 3 },
      { name: "West Croydon", lines: ["Overground", "Southern"], walk_minutes_from_centre: 8 },
    ],
    times_to_anchors: { city_of_london: 35, canary_wharf: 50, soho_fitzrovia: 40, kings_cross_shoreditch: 45 },
    multi_cluster_score: 1,
    redundancy_score: 2,
    notes: "East Croydon is fast to Victoria (15 min) and London Bridge (17 min) but slow to everything else. No tube line. Canary Wharf requires a change. Soho requires Victoria + change or Thameslink + walk. The raw connectivity is deceptive — one fast corridor does not equal multi-cluster coverage.",
    sources: [],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 22 },
      { cohort: "30-39", pct: 28 },
      { cohort: "40-49", pct: 20 },
      { cohort: "50+", pct: 30 },
    ],
    ethnic_composition: [],
    household_mix: [],
    student_pct: 5,
    professional_renter_pct: 30,
    notes: "Census 2021 — Croydon central wards skew older than inner London. The 30-39 cohort is the largest but 50+ is substantial. Not a young-professional-dominated area.",
    sources: [],
  },
  safety: {
    overall: "concerning",
    crime_vs_borough: "above",
    crime_vs_croydon: "similar",
    after_dark_assessment: "Croydon town centre has visible anti-social behaviour after dark, particularly around West Croydon and the high street. East Croydon station area is better-lit and busier but surrounding residential streets are quiet and dimly lit.",
    concerns: [
      "Knife crime incidents in town centre",
      "Anti-social behaviour around West Croydon",
      "High street vacancy contributes to dead zones after dark",
      "Borough crime rate above London average",
    ],
    sources: [],
  },
  green_and_water: {
    has_river: false,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Park Hill Recreation Ground", walk_minutes: 12, notes: "Local park, limited facilities" },
      { name: "Lloyd Park", walk_minutes: 15, notes: "Larger park but not walkable from the centre" },
    ],
    overall_assessment: "No waterfront. No major park within easy walking distance of the town centre. Green space requires a tram or bus ride. This is one of Croydon's weakest dimensions.",
  },
  amenities: {
    grocery: [],
    gyms: [],
    food_and_drink: [],
    health: [],
    cultural: [],
    notes: "Boxpark Croydon provides food/drink variety. Surrey Street Market is the fresh-food highlight. PureGym and The Gym Group are present. Fairfield Halls is the cultural anchor. Overall: functional but not walkable-destination quality.",
  },
  regeneration: {
    status: "early",
    investment_pipeline: "Croydon's regeneration has been promised and deferred repeatedly. The Westfield partnership collapsed in 2019. Brick by Brick (council housing company) went bankrupt. Current pipeline is fragmented — individual sites rather than a coherent masterplan.",
    recent_milestones: [
      "Ruskin Square partially delivered (includes Ten Degrees)",
      "Fairfield Halls refurbished and reopened",
      "Boxpark Croydon opened 2016",
    ],
    upcoming_milestones: [],
    trajectory_through_2027: "Uncertain. No major masterplan is in delivery. Individual sites may progress but there is no Argent/Quintain/Lendlease-scale operator driving a coherent transformation. The area could improve incrementally but is not on an ascending arc comparable to Wembley, Stratford, or Nine Elms.",
    sources: [],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "fail", "1.2": "partial", "1.3": "pass", "1.4": "partial", "1.5": "partial", "1.6": "partial" },
      {
        "1.1": "Croydon's crime rate is above the borough average and above the London average. Visible anti-social behaviour in the town centre. Does not clear the 'demonstrably safer than Croydon' bar because it IS Croydon.",
        "1.2": "Modern stock exists (Ten Degrees, Ruskin Square) but is a small pocket surrounded by older commercial conversions and 1960s towers. Not a modern-rental-led area.",
        "1.3": "East Croydon is genuinely well-connected to Victoria and London Bridge. But Zone 5, no tube, slow to Canary Wharf and Soho. Single fast corridor, not multi-cluster.",
        "1.4": "Some managed rental (Ten Degrees, The Quarters Croydon) but not a professional BTR-dominated market. Most rental is private landlord stock.",
        "1.5": "High street has visible vacancy. Public realm is tired in places. Ruskin Square pocket is maintained; surrounding streets are mixed.",
        "1.6": "Not actively in decline but not ascending either. Regeneration has stalled repeatedly. Trajectory is flat rather than falling, but not improving at any pace.",
      },
      "fail",
      "T1 fails on safety. Croydon cannot be 'demonstrably safer than Croydon' by definition. The baseline fails its own test — which is exactly why it's being upgraded from.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "partial", "2.2": "partial", "2.3": "pass", "2.4": "fail", "2.5": "partial", "2.7": "fail" },
      {
        "2.1": "Walkable essentials exist (supermarket, pharmacy, GP) but the high street quality is low. You can get what you need; you won't enjoy the walk.",
        "2.2": "Surrey Street Market is the highlight. No Waitrose, no M&S Food, no premium grocery. Aldi and Lidl dominate. Functional but not quality-led.",
        "2.3": "PureGym and The Gym Group are both present. Adequate for serious training — this is one of Croydon's genuine passes.",
        "2.4": "No waterfront. No major park within easy walking distance. Green space requires a tram ride. The weakest dimension.",
        "2.5": "Town centre has noise and anti-social behaviour issues at night. Ruskin Square is calmer but the surrounding area is not quiet.",
        "2.7": "Primary cohort is 30-39 with substantial 50+ presence. Not a young-professional-dominated area. Caner at 24 is demographically out of place.",
      },
      "weak",
      "T2 is weak. Gym access passes but green space fails, demographic fit fails, and everything else is partial at best.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "fail", "3.2": "partial", "3.3": "partial", "3.4": "fail", "3.5": "fail", "3.6": "partial" },
      {
        "3.1": "Regeneration has stalled. No active masterplan. Westfield cancelled. Brick by Brick bankrupt. Individual sites only.",
        "3.2": "Boxpark and Fairfield Halls are the anchors. Neither is a destination that draws people from outside the area.",
        "3.3": "Croydon has name recognition but it's negative — 'I live in Croydon' does not land well. The brand is working against the area.",
        "3.4": "Not a 15-minute neighbourhood. Daily essentials are walkable but the quality and density are not there for genuine completeness.",
        "3.5": "Architectural quality is poor. 1960s towers, commercial conversions, fragmented streetscape. Ruskin Square is the only coherent modern pocket.",
        "3.6": "Daytime activity exists (Surrey Street Market, Boxpark). Evening activity is thin and night-time has anti-social behaviour issues.",
      },
      "fail",
      "T3 fails. No active regeneration, negative brand, poor architecture, incomplete neighbourhood. This is the tier that most clearly explains why Croydon feels wrong at £3k/month.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "fail", "5.2": "partial", "5.3": "fail", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 1/5. Fast to Victoria/London Bridge corridor only. Canary Wharf, Soho, King's Cross all require changes and 40+ minutes.",
        "5.2": "Southern + Thameslink + Overground give some redundancy, but all use the same East Croydon-to-London Bridge corridor. A failure at East Croydon strands everything.",
        "5.3": "No ascending trajectory. Flat at best. The area is not getting meaningfully better through 2027.",
        "5.4": "Some café options but no deep bookshop or library culture. The cultural density is thin for quiet third-space use.",
      },
      "weak",
      "T5 is weak. Single-corridor connectivity, no trajectory, thin third-space culture.",
    ),
    overall_grade: "F",
    grade_reasoning: "F grade. T1 fails on safety (by definition — the baseline cannot be safer than itself). T3 fails on identity and stalled regeneration. T5 is weak. The only genuine pass is gym access. Croydon fails the rubric — which is exactly why it's being upgraded from. It exists in the dataset as the calibration baseline, not as a candidate.",
  },

  projects: [
    {
      id: "ten-degrees",
      area_id: "croydon",
      name: "Ten Degrees",
      headline: "Where Caner currently lives. The building that proves a decent project can exist in a weak area.",
      preview: "Modular-built BTR tower managed by Greystar. Secured with 3 months upfront — a concession from the standard 6-12 month requirement. The building is decent; the area is not.",
      developer: "Tide Construction",
      operator: "Greystar",
      building_type: "BTR",
      living_model: "standard-btr",
      build_phase: "complete",
      units_total: 546,
      storeys: 44,
      build_completed: 2020,
      rental: {
        tenure: ["rent"],
        prices: {
          studio: { min: 1600, max: 1800, currency: "GBP", per: "month" },
          one_bed: { min: 2100, max: 2500, currency: "GBP", per: "month" },
          two_bed: { min: 2800, max: 3200, currency: "GBP", per: "month" },
          bills_included: false,
          notes: "Caner pays ~£2,500/month rent + ~£500 bills/council tax = ~£3,000 all-in.",
        },
        qualification: {
          agreement_type: "ast",
          referencing_provider: "in-house",
          min_tenancy_months: 12,
          income_multiple: 30,
          open_banking_accepted: "unknown",
          upfront_rent_policy: "one-month-ast-cap",
          accepts_professional_guarantor: "unknown",
          accepts_individual_overseas_guarantor: "unknown",
          credit_check: "standard",
          international_tenant_policy: "accepted-case-by-case",
          visa_expiry_handling: "tenancy-shortened",
          qualification_flexibility_signal: "flexible",
          realism_pathways: [],
          grad_visa_realism: "unknown",
          research_status: "partial",
          notes: "Caner secured this with 3 months upfront instead of the standard 6-12. Greystar's in-house referencing accepted him as a graduate-visa renter without UK credit history on that basis — a documented flexibility signal. Post-RRA (1 May 2026), this upfront route closes for new tenancies — advance rent capped at 1 month. The flexibility signal still stands for professional-guarantor acceptance questions.",
          sources: [],
        },
        cost_tier: "premium",
        affordability: "over-budget",
        price_transparency: "listed",
      },
      building_quality: {
        sound_insulation: "poor",
        thermal_performance: "average",
        layout_notes: "Modular construction means standardised layouts. Studios and 1-beds are compact but functional.",
        kitchen_quality: "average",
        heating_type: "electric",
        notes: "Modular construction by Tide Construction. Known issues: thin walls between units, HVAC noise from the modular system. Build quality is functional but not premium.",
      },
      amenities: {
        pool: false,
        pool_notes: "",
        gym: true,
        gym_quality: "poor",
        concierge: "daytime",
        sky_lounge: false,
        co_working: true,
        dining_room: false,
        cinema_room: false,
        rooftop_terrace: true,
        parking: false,
        bike_storage: true,
        pet_policy: "Pets allowed with deposit",
        other_amenities: ["Residents' lounge"],
        overall_tier: "decent",
      },
      architecture: stubArchitecture(),
      long_form: {
        full: "Ten Degrees is a 44-storey modular-built BTR tower in Croydon's Ruskin Square development, managed by Greystar. It's the tallest modular building in Europe. The building itself is decent — modern fittings, functional layouts, a rooftop terrace with views — but the area around it is the problem. You're paying Zone 2 rent for Zone 5 surroundings.",
        living_experience: "The gym is too small and poorly equipped for serious training — the equipment is basic cardio and light machines, shared with casual users. Sound insulation is noticeably thin between units. The rooftop terrace is the best amenity. Co-working space is functional.",
        notable_features: "Tallest modular construction building in Europe at 44 storeys. Tide Construction's volumetric modular system — each apartment module was built in a factory and craned into place.",
      },
      resident_signal: {
        homeviews_score: 3.8,
        homeviews_url: "https://www.homeviews.com/development/ten-degrees-croydon-cr0",
        summary: "Mixed reviews. Location convenience (East Croydon station 3 min walk) and modern fittings praised. Thin walls, small gym, and management responsiveness criticised.",
        common_complaints: ["Thin walls / noise between units", "Gym too small for residents", "Slow maintenance response", "HVAC noise"],
        common_praise: ["Modern fittings", "East Croydon station proximity", "Rooftop terrace views", "Co-working space"],
      },
      evaluation: {
        t2_6_building_quality: criterion("2.6", "Building quality at modern standard", "partial", "Modern modular construction — functional but thin walls and HVAC noise are real quality issues. Not premium."),
        t4_1_amenity_package: criterion("4.1", "Premium amenity packages", "partial", "Gym (small/poor), co-working, rooftop terrace, bike storage. No pool, no concierge after hours, no sky lounge. Decent but not premium."),
        t4_4_signature_arch: criterion("4.4", "Signature architecture", "fail", "Visually generic. The modular construction is an engineering achievement but not an architectural one."),
        overall_grade: "B",
        grade_reasoning: "B grade — the building is genuinely decent for a BTR product (modern, functional, Greystar-managed) and significantly better than the F-grade area it sits in. But thin walls, small gym, and no premium amenities keep it out of A territory.",
      },
      external_links: [
        { url: "https://www.greystar.com/properties/ten-degrees", label: "Ten Degrees (Greystar)", type: "operator", accessed_date: "2026-04-12" },
        { url: "https://www.homeviews.com/development/ten-degrees-croydon-cr0", label: "HomeViews reviews", type: "homeviews", accessed_date: "2026-04-12" },
      ],
      research: { primary_agent: "first-party-caner", research_date: "2026-04-12", last_verified: "2026-04-12", confidence: "high", open_questions: [] },
    } satisfies Project,
    quartersCroydon,
    enclaveCroydon,
    saffronSquare,
    morelloCroydon,
    vitaApartments,
    amroCroydonBtr,
  ],

  external_links: [],
  personal_notes: "The baseline. Everything else is measured against this. Currently paying ~£3k/month all-in which is excessive for what Croydon delivers.",
  research: stubResearch("sweep-2026-04"),
};

export default croydon;
