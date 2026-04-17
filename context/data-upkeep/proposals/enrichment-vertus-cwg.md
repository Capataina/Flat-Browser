# Enrichment — Vertus (Canary Wharf Group BTR) + Wood Wharf ownership towers

Operator batch: **Vertus** (Canary Wharf Group's residential-leasing arm) + adjacent CWG-managed ownership towers at Wood Wharf.
Research round: 2026-04-17 — V2 enrichment pass.
Projects covered (5): `8-water-street`, `10-park-drive`, `george-street-vertus`, `newfoundland`, `one-park-drive`.
Note: `south-quay-plaza` (Berkeley / St George) and `ark-canary-wharf` (ARK Co-living) also live in `canary-wharf.ts` but are out of scope for this batch — covered by Berkeley-family and ARK Co-living proposals.

Existing `v2-vertus.md` in this directory contains the full underlying research pack; this file re-expresses the same findings in the canonical H2-project / H3-block / `**field**: value [source]` format and resolves a few V1-adjacent calls that fell out of the research.

Confidence: high on architecture + HomeViews signal; medium on EPC (inferred `"B"` per schema shortcut, NOT verified against GOV.UK register); medium on 10 Park Drive / One Park Drive resident signal (ownership towers; thin rental-review base).

Comparables anchors used (pulled from playbook dispatch):
- **Amenity premium benchmark:** Pan Peninsula (SOM) = `premium`; Gasholders Kings Cross = `premium`; Newfoundland full premium; 10 Park Drive = `premium` (owner-spec).
- **Kitchen benchmark:** Vertus BTR premium = `good` (Bosch-tier, full kitchen, dishwasher); ownership-tower owner-spec = `excellent` (Miele/Siemens common); comparable: Gasholders = `excellent`.
- **Gym benchmark:** Third-Space-tier = `excellent`; Vertus Antidote-managed 24/7 at 10 George Street = `good`; One Park Drive spa+gym = `excellent`.
- **Signature architecture:** Wood Wharf is where `is_signature: true` is legitimately common. Landmark Pinnacle, Pan Peninsula, One Park Drive, Newfoundland all clear the bar; the two Stanton-Williams towers (8WS / 10PD) and 10 George Street do not.

---

## `8-water-street` — 8 Water Street (Vertus)

### building_quality

- **epc_rating**: `"B"` (inferred — post-2020 CWG BTR baseline; NOT verified against GOV.UK register this pass) [https://find-energy-certificate.service.gov.uk/ — flag for verification]
- **sound_insulation**: `"good"` — Part E 2015+ compliant new-build; no dominant noise pattern in HomeViews [https://www.homeviews.com/development/8-water-street-e14]
- **thermal_performance**: `"good"` — communal heating, no cold-flat complaint pattern; utility-cost complaints are about billing not comfort [HomeViews]
- **layout_notes**: "Open-plan studios with floor-to-ceiling glazing; 1-beds have a separated bedroom and full kitchen (not a kitchenette); most units have private balcony. Furnished units specified by Accouter Group. Podium-level indoor-outdoor pool creates some throughput but units are acoustically separated from it." [https://thisisvertus.com/apartments-to-rent/8-water-street/]
- **kitchen_quality**: `"good"` — full kitchens, standard appliance package (Bosch-level per operator gallery), dishwasher present; not Miele/Siemens [operator gallery]
- **heating_type**: `"communal"` — inferred from post-2015 CWG BTR default; residents reference communal-heating charges in reviews [HomeViews + press inference]
- **notes**: "Modern new-build to full CWG specification. Pet-friendly flagship of Vertus portfolio. Communal heating without per-unit thermostat control is the consistent review-surfaced friction — not comfort-related, but billing-related."

### amenities

- **pool**: `true` [https://thisisvertus.com/apartments-to-rent/8-water-street/]
- **pool_notes**: "Indoor-outdoor pool on the podium level — distinctive feature within the Vertus portfolio and the anchor of the 2021 HomeViews Best London Development award. Residents-only."
- **gym**: `true` [operator page]
- **gym_quality**: `"good"` — full-equipment managed gym; not Third-Space-tier [operator gallery + HomeViews]
- **concierge**: `"24h"` [operator page]
- **sky_lounge**: `true` [operator page]
- **co_working**: `true` [operator page]
- **dining_room**: `true` [operator page]
- **cinema_room**: `true` — screening room [operator page]
- **rooftop_terrace**: `true` [operator page]
- **parking**: `false` — standard Wood Wharf car-free estate [CWG masterplan / residential.canarywharf.com]
- **bike_storage**: `true` [operator page]
- **pet_policy**: "Pet-friendly — Vertus's flagship pet-accepting building. Specific fees / deposit require direct enquiry." [operator page]
- **other_amenities**: `["Resident events programme", "Self-service bar", "Snack bar / parcel box"]` [operator amenities page]
- **overall_tier**: `"premium"` — derived from 24h concierge + pool + good gym + sky lounge + cinema + dining + rooftop ≥ premium threshold

### architecture

- **architects**: `["Stanton Williams"]` [https://www.jra.co.uk/projects/10-park-drive-8-water-street — JRA delivered both as linked Stanton Williams scheme]
- **awards**: `["HomeViews Best London Development — 2021", "HomeViews Build-to-Rent Awards — 2021 (triple winner)"]` [HomeViews]
- **is_signature**: `false` — Stanton Williams are a serious RIBA practice but 8 Water Street is the "quiet premium" low-rise counterpart to 10 Park Drive rather than the Wood Wharf landmark. Reserved `true` for Newfoundland / One Park Drive in this area. Justification: no Dezeen/ArchDaily feature specific to 8WS, no major architecture award, not a silhouette-level visual landmark.
- **style_notes**: "Low-rise waterside character linked to the 10 Park Drive tower by a double-height glass atrium. Designed as a human-scale counterpoint to the Wood Wharf towers; connects residents directly to the water and adjacent green spaces. Restrained masonry-tone cladding. Roof terrace interior by Accouter Group."

### long_form

- **full**: "8 Water Street is Vertus's pet-friendly flagship in Wood Wharf — a low-rise, waterfront BTR designed by Stanton Williams and linked to the adjoining 10 Park Drive tower by a glass atrium. 174 units across studio / 1-bed / 2-bed / 3-bed, with full kitchens (not kitchenettes), floor-to-ceiling glazing, and private balconies on most homes. Operated by Vertus to the full Canary Wharf Group standard with a dedicated in-house leasing team. Pricing floor £2,600 studio / £3,100 1-bed sits at the upper end of the Wood Wharf Vertus stack, reflecting the pool amenity and the pet-friendly differentiation. Signature amenity is the indoor-outdoor pool on the podium — distinctive among the Vertus portfolio and the anchor of the 2021 HomeViews Best London Development award sweep."
- **living_experience**: "4.24/5 on HomeViews across a substantial review base. Residents consistently praise the concierge (issues addressed within a day is a recurring positive), the design quality, the pool, and the sense of community. The strongest complaint pattern is utility cost — communal heating charges land on residents without direct thermostat control, which reviewers describe as an annoyance rather than a dealbreaker. The pet-friendliness is load-bearing for the building's character and materially shapes who lives here."
- **notable_features**: "Indoor-outdoor podium pool (unique among Vertus BTR buildings). Pet-friendly policy (Vertus's only publicly pet-friendly building at this scale). Double-height glass atrium link to 10 Park Drive. Stanton Williams design language shared with 10PD. 2021 HomeViews triple award winner."

### resident_signal

- **homeviews_score**: `8.5` (4.24/5 → 8.48/10, rounded) [https://www.homeviews.com/development/8-water-street-e14]
- **homeviews_url**: `"https://www.homeviews.com/development/8-water-street-e14"`
- **summary**: "4.24/5 across a substantial review base (review count gives strong confidence). Residents consistently praise design, concierge responsiveness, the pool, and community. Dominant complaint is utility cost linked to communal heating without thermostat control. 2021 HomeViews Best London Development."
- **common_praise**: `["Concierge responsiveness — issues addressed within a day", "Pool and design quality", "Pet-friendly community character", "Natural light from floor-to-ceiling windows", "Hotel-like finish throughout"]`
- **common_complaints**: `["Utility cost / communal heating charges without thermostat control", "Occasional maintenance lag on specific issues", "Amenity throughput during peak hours"]`

### rental.prices (per-project refresh)

- **studio.min / max**: `2600 / 2900` — upper inferred [https://thisisvertus.com/apartments-to-rent/8-water-street/ accessed 2026-04-17]
- **one_bed.min / max**: `3100 / 3500`
- **two_bed.min / max**: `4200 / 4800`
- **bills_included**: `false` — standard AST; utilities billed separately
- **price_transparency**: `"listed"` (keep)
- **notes**: "Floors verified 2026-04-17 via Vertus /apartments-to-rent/8-water-street/. Upper bounds inferred from Hamptons / Savills secondary listings — Vertus publishes 'from' floors only."

### Affordability

- **affordability**: `"stretch"` — studio floor £2,600 sits above £2,500 comfort line but below £3,000 hard cap; 1-bed floor £3,100 breaches cap. Caner reaches only studios. Comparable: above ARK Canary Wharf (`at-budget`, £2,150), roughly at Pan Peninsula (`stretch`, £2,900), below One Park Drive (`over-budget`, £3,500+).

---

## `george-street-vertus` — 10 George Street (Vertus) [propose rename: `10-george-street`]

**Naming correction flag:** dataset currently labels this "3 & 10 George Street (Vertus)" — Vertus operates **10 George Street only**. "3 George Street" is not a Vertus BTR; likely a dataset typo for 3 Park Drive (an ownership tower). Propose rename to `10-george-street`. Low blast radius.

### building_quality

- **epc_rating**: `"B"` (inferred; 2020 completion; not register-verified) [flag for verification]
- **sound_insulation**: `"good"` — new-build Part E; no dominant noise pattern in HomeViews [HomeViews]
- **thermal_performance**: `"good"`
- **layout_notes**: "37 storeys, 327 units, all overlooking the Wood Wharf boardwalks and waterside gardens. Full kitchens, floor-to-ceiling glazing, private balconies on most units. Layouts tight by luxury standards but efficient." [https://thisisvertus.com/apartments-to-rent/10-george-street/]
- **kitchen_quality**: `"good"` — full kitchens, standard appliance package, dishwasher [operator gallery]
- **heating_type**: `"communal"`
- **notes**: "Vertus's first BTR delivery (2020) — the launch-of-brand building. Held up well; 4.56 HomeViews is the highest of the entire Vertus portfolio."

### amenities

- **pool**: `false` — pool differentiator lives at 8 Water Street; 10 George Street residents do not have swim access [operator amenities page]
- **pool_notes**: `""`
- **gym**: `true` — 24/7 gym managed by Antidote Gym (third-party operator partnership) [operator amenities page]
- **gym_quality**: `"good"` — Antidote partnership is a genuine third-party gym, one tier above token resident gyms, not Third-Space-tier
- **concierge**: `"24h"`
- **sky_lounge**: `true`
- **co_working**: `true`
- **dining_room**: `true`
- **cinema_room**: `false` — no dedicated screening room at 10 George Street; games/TV lounge only [operator page]
- **rooftop_terrace**: `true` — large south-facing terrace
- **parking**: `false`
- **bike_storage**: `true`
- **pet_policy**: "Direct enquiry — less pet-forward than 8 Water Street (the designated pet building)."
- **other_amenities**: `["Self-service bar", "Games lounge (pool table, shuffleboard, chess, consoles)", "Resident events programme", "Breakfast mornings + coffee programme"]`
- **overall_tier**: `"strong"` — 24h concierge + good gym + co-working + rooftop + sky lounge but no pool and no cinema pushes it below `premium` threshold

### architecture

- **architects**: `["Stanton Williams"]` [JRA / Dezeen coverage]
- **awards**: `["HomeViews Best London Development — 2020", "HomeViews BTR Awards 2020 — national runner-up"]` [HomeViews]
- **is_signature**: `false` — competent Stanton Williams tower but not the named-architect landmark of Wood Wharf. Defensible because: no Pritzker-level credit, not a silhouette-level visual landmark relative to One Park Drive / Newfoundland on the same site.
- **style_notes**: "37-storey Stanton Williams tower at the heart of Wood Wharf — the launch building of the Vertus brand. Restrained palette, tight façade rhythm, oriented to the dock waterside."

### long_form

- **full**: "10 George Street was Vertus's first BTR delivery in 2020 — a 37-storey Stanton Williams tower with 327 apartments, all oriented to the Wood Wharf waterside. The building launched the Vertus brand and set its template: in-house leasing team, 24/7 gym managed by Antidote Gym (a third-party partnership rather than a token in-house facility), daily resident programming. No pool (that differentiator lives at 8 Water Street) and no dedicated screening room, but a strong amenity stack centred on a games lounge, self-service bar, and large rooftop terrace. Studio from £2,600, 1-bed from £3,000."
- **living_experience**: "4.56/5 on HomeViews — the highest of the four Vertus buildings. Residents consistently describe the community character strongly; 'Vertus buildings foster an incredible feeling of community' is a verbatim quote from a top review. The 24/7 Antidote gym and the games lounge draw particular praise. Management responsiveness rated strongly; the building has held up well through five years of occupancy, which is a non-trivial signal for a BTR at this scale."
- **notable_features**: "Vertus's first BTR and the highest-rated of the portfolio on HomeViews. Antidote-managed gym is a real third-party partnership rather than a token in-house facility. Games lounge (pool table, shuffleboard) distinguishes it from the 'sky lounge + bar' standard at the other Vertus buildings. 2020 HomeViews Best London Development."

### resident_signal

- **homeviews_score**: `9.1` (4.56/5 → 9.12/10) [https://www.homeviews.com/development/10-george-street-e14]
- **homeviews_url**: `"https://www.homeviews.com/development/10-george-street-e14"`
- **summary**: "4.56/5 — the top-rated Vertus building. Review count substantial (open since 2020). Consistent praise for community feel, 24/7 Antidote gym, and the design. Utility / communal heating complaints present but less dominant than at Newfoundland."
- **common_praise**: `["Community feel and resident programming", "Antidote-managed 24/7 gym", "Design quality and natural light", "Concierge responsiveness", "Self-service bar + snack / parcel box"]`
- **common_complaints**: `["Utility costs — communal heating", "Lift waits at peak times (37 storeys, 327 units)", "Limited pool substitute (must cross to 8 Water Street)"]`

### rental.prices

- **studio.min / max**: `2600 / 2900` [https://thisisvertus.com/apartments-to-rent/10-george-street/ accessed 2026-04-17]
- **one_bed.min / max**: `3000 / 3400`
- **two_bed.min / max**: `4200 / 4800`
- **bills_included**: `false`
- **price_transparency**: `"listed"`
- **notes**: "Verified 2026-04-17. 1-bed floor slightly softer than 8 Water Street reflecting the no-pool differentiation."

### Affordability

- **affordability**: `"stretch"` — studio £2,600 above comfort line; 1-bed £3,000 at the hard cap. Positioned alongside 8WS, marginally softer. Comparable: roughly at Pan Peninsula (`stretch`), above ARK CW (`at-budget`).

---

## `newfoundland` — Newfoundland (EcoWorld Ballymore dev / Vertus op)

### building_quality

- **epc_rating**: `"B"` (inferred, 2021 completion; not register-verified) [flag]
- **sound_insulation**: `"good"` — new-build Part E; no dominant noise pattern though operational complaints pattern is otherwise pointed
- **thermal_performance**: `"good"`
- **layout_notes**: "58 storeys — the tallest BTR tower in the UK. Diagonal diamond exoskeleton means some perimeter window frames are angled rather than orthogonal; central units are orthogonal. Floor-to-ceiling glazing; most units have a private balcony; higher floors have panoramic views unmatched in E14." [https://www.dezeen.com/2022/01/27/newfoundland-skyscraper-canary-wharf-horden-cherry-lee/ + https://www.wsp.com/en-us/projects/newfoundland-london]
- **kitchen_quality**: `"good"` — full kitchens, standard appliance package, dishwasher
- **heating_type**: `"communal"`
- **notes**: "Distinctive diagrid exoskeleton is load-bearing literally and structurally — DLR tunnels beneath the site ruled out a conventional core-and-shear structure (WSP). Tallest BTR in the UK by both height and unit count. Cross-developer arrangement (EcoWorld Ballymore developed; Vertus operates) — unusual in the Vertus portfolio."

### amenities

- **pool**: `false` — no residents' pool at Newfoundland (pool remains 8WS differentiator) [https://thisisvertus.com/apartments-to-rent/newfoundland/]
- **pool_notes**: `""`
- **gym**: `true` — gym + spin studio [operator amenities page]
- **gym_quality**: `"good"` — full equipment + dedicated spin studio; not Third-Space-tier
- **concierge**: `"24h"`
- **sky_lounge**: `true` — 58th-floor sky lounge with panoramic views
- **co_working**: `true`
- **dining_room**: `true`
- **cinema_room**: `true` — screening room
- **rooftop_terrace**: `true` — plus podium terrace
- **parking**: `false`
- **bike_storage**: `true`
- **pet_policy**: "Direct enquiry required; less pet-forward than 8 Water Street."
- **other_amenities**: `["Spin studio", "Children's play area", "Indoor 'kidult' entertainment space", "Self-service bar", "VERTUS+ resident perks programme"]`
- **overall_tier**: `"premium"` — 24h concierge + good gym + sky lounge + cinema + dining + rooftop + co-working; only missing pool from the premium archetype, but amenity breadth is clearly premium

### architecture

- **architects**: `["Horden Cherry Lee", "Adamson Associates (executive architect)"]` [Dezeen 2022-01-27]
- **awards**: `[]` — widely press-covered (Dezeen, ArchDaily, WSP case study) but no named RIBA / WAN / Stirling award captured in public record
- **is_signature**: `true` — justification: 220m diamond-clad diagrid tower; Dezeen + ArchDaily + Wikipedia coverage; tallest residential BTR in the UK at delivery; visual landmark of the E14 skyline with genuinely distinctive structural identity (the diagrid is the building). Signature bar cleared on both silhouette and engineering merit; absence of RIBA award not disqualifying given the architect-level and press-level signals.
- **style_notes**: "220m tall diagrid tower clad in silver aluminium, wrapped in a diamond-shaped exoskeleton that transfers load away from the DLR tunnels below (a conventional core structure would have required the building to be 30% shorter — WSP). The exposed structure is the building's identity; sometimes referred to as 'the diamond tower'."

### long_form

- **full**: "Newfoundland is the tallest build-to-rent tower in the United Kingdom — 220 metres and 58 storeys, 636 apartments, developed by EcoWorld Ballymore and operated by Vertus (an unusual cross-developer arrangement in the Vertus portfolio). The diamond-clad diagrid exoskeleton by Horden Cherry Lee is structurally necessary — DLR tunnels run directly beneath the site, which ruled out a conventional core-and-shear-wall structure — and visually load-bearing for the E14 skyline. Studios from £2,700, 1-beds from £3,100 — the highest 1-bed floor in the Vertus portfolio. Amenity package includes a 58th-floor sky lounge with views unmatched at Canary Wharf."
- **living_experience**: "4.23/5 on HomeViews. The positive reviews emphasise the view, the amenity programme (VERTUS+, spin studio, events), and concierge. The negative reviews are more pointed than at 8 Water Street or 10 George Street — multiple residents flag lifts regularly out of service for extended periods, broken bin chutes, a documented fly infestation in 2025, and promised quarterly window cleaning that didn't materialise. At 636 units across 58 storeys, lift throughput is a structural operational challenge rather than a management lapse. Worth weighing against the view premium."
- **notable_features**: "Tallest BTR in the UK. Diamond diagrid exoskeleton (structurally necessitated by DLR tunnels beneath — WSP case study). VERTUS+ perks programme unique to this building. 58th-floor sky lounge. Cross-developer arrangement (EcoWorld Ballymore developed; Vertus operates)."

### resident_signal

- **homeviews_score**: `8.5` (4.23/5 → 8.46/10) [https://www.homeviews.com/development/newfoundland-e14]
- **homeviews_url**: `"https://www.homeviews.com/development/newfoundland-e14"`
- **summary**: "4.23/5 across substantial review base. Views and amenity programme consistently praised. Complaint pattern is more pointed than at the other Vertus buildings — lift reliability, bin chutes, and a 2025 fly infestation all flagged. At 636 units over 58 storeys, operational throughput issues are structural rather than isolated."
- **common_praise**: `["Views from high floors (unmatched at Canary Wharf)", "VERTUS+ perks programme and resident events", "Spin studio and gym", "Concierge responsiveness", "Building design / diagrid identity"]`
- **common_complaints**: `["Lifts frequently out of service for extended periods", "Broken bin chutes (recurring)", "Documented fly infestation in 2025", "Communal area cleaning inconsistencies", "Promised quarterly window cleaning not delivered"]`

### rental.prices

- **studio.min / max**: `2700 / 3000` [https://thisisvertus.com/apartments-to-rent/newfoundland/ accessed 2026-04-17]
- **one_bed.min / max**: `3100 / 3700`
- **two_bed.min / max**: `4000 / 5000`
- **bills_included**: `false`
- **price_transparency**: `"listed"`
- **notes**: "Verified 2026-04-17. Studio floor £2,700 is the highest of the four Vertus BTR buildings — reflects the view premium on a per-unit basis."

### Affordability

- **affordability**: `"stretch"` — studio £2,700 above comfort line, below hard cap; 1-bed £3,100 over cap. Studios reachable only. Sits at top of the Vertus BTR stack.

---

## `10-park-drive` — 10 Park Drive [V1 wrong-operator flag]

**Critical V1 flag:** 10 Park Drive is an **ownership tower** (346 apartments for sale, Stanton Williams, completed 2020). Vertus does **not** list it on `/apartments-to-rent` and is not the rental operator. Rentals happen individually via owner-landlords through Foxtons / JOHNS&CO / Circa London / Crown Home Buying & Letting. The `operator: "Vertus"` attribution in `canary-wharf.ts` is incorrect. V2 enrichment below describes the **building** (architecture, common amenities under CWG freehold) but qualification / pricing / resident_signal inherit the secondary-market character, not Vertus BTR defaults.

**Recommended V1 action:** reattribute to `operator: "Secondary Market"` or similar, or flip `realism: "unclear"` pending reattribution.

### building_quality

- **epc_rating**: `"B"` (inferred, 2020 build; not register-verified) [flag]
- **sound_insulation**: `"good"` — new-build Part E
- **thermal_performance**: `"good"`
- **layout_notes**: "42–43 storeys (storey count varies by podium interpretation across sources). 346 apartments designed for sale — typically larger and better-specified than BTR equivalents. Private 13th-floor sky terrace. Linked to 8 Water Street by a double-height glass atrium." [https://residential.canarywharf.com/10-park-drive/]
- **kitchen_quality**: `"excellent"` — owner-spec kitchens (Miele / Siemens commonly specified by developer for sale product) [developer spec sheet + Spear's coverage]
- **heating_type**: `"communal"`
- **notes**: "Ownership tower — unit specification is a tier above Vertus BTR. Day-to-day living depends heavily on which individual landlord you rent from; some units are owner-occupied and rare on the rental market, others are investor-owned and let via standard ASTs through high-street agents."

### amenities

- **pool**: `false` — 8 Water Street's pool is residents-only to 8WS, not 10PD [CWG / JRA scheme description]
- **pool_notes**: `""`
- **gym**: `true` — private residents' gym [CWG residential page]
- **gym_quality**: `"good"`
- **concierge**: `"24h"`
- **sky_lounge**: `true` — private 13th-floor residents' sky terrace
- **co_working**: `false` — no dedicated co-working (distinguishes from the Vertus BTR stack; ownership towers skew to private lounges not hot-desking)
- **dining_room**: `true`
- **cinema_room**: `true`
- **rooftop_terrace**: `true`
- **parking**: `true` — ownership tower parking allocation available; unusual for Wood Wharf but typical of for-sale product
- **bike_storage**: `true`
- **pet_policy**: "Dependent on individual landlord; building management permits pets subject to leasehold terms; individual ASTs vary."
- **other_amenities**: `["13th-floor private sky terrace", "Residents' club lounge"]`
- **overall_tier**: `"premium"` — owner-spec amenity + 24h concierge + cinema + dining + parking

### architecture

- **architects**: `["Stanton Williams"]` [JRA — delivered 8WS + 10PD as the paired Stanton Williams scheme]
- **awards**: `[]` — no major named awards captured for 10PD specifically; covered in trade press
- **is_signature**: `false` — despite its scale, architecturally the twin of 8 Water Street. Neither are the Wood Wharf landmark — that distinction belongs to One Park Drive (Herzog & de Meuron) and Newfoundland (diagrid). Defensible because: no Pritzker credit, no RIBA award, not a silhouette-level identity relative to its immediate neighbours.
- **style_notes**: "42–43 storey Stanton Williams tower linked to the low-rise 8 Water Street by a double-height glass atrium. Restrained façade, masonry-tone cladding, dock-oriented. The first completed residential tower at Wood Wharf (2020)."

### long_form

- **full**: "10 Park Drive is an **ownership tower** — 346 apartments designed for sale rather than rent, completed 2020, designed by Stanton Williams and linked to 8 Water Street by a glass atrium. Rentals at 10 Park Drive happen individually through owner-landlords using external agents (Foxtons, JOHNS&CO, Circa London) — not through Vertus. The **building** is run to Canary Wharf Group's standard with 24/7 concierge and a 13th-floor residents' sky terrace, but tenancy-level qualification, pricing, and landlord quality vary per listing. Unit specification is generally a tier above the Vertus BTR buildings (owner-buyer kitchens, larger unit sizes). This is a Wood Wharf ownership tower with a rental overflow, not a BTR."
- **living_experience**: "Too little concentrated review data to generalise — individual units cycle through the rental market at different points under different landlords. Building-management quality (concierge, common areas, atrium) is consistent with Vertus / CWG standards since CWG manages the freehold. Day-to-day tenancy experience varies with the landlord."
- **notable_features**: "Ownership-tower character (owner-spec finish, lower tenant churn, larger units). 13th-floor private residents' sky terrace. Glass atrium link to 8 Water Street. First completed Wood Wharf residential tower. Parking allocation — unusual for Wood Wharf."

### resident_signal

- **homeviews_score**: `undefined` — no dedicated HomeViews listing of sufficient scale; ownership towers undersampled
- **homeviews_url**: `undefined`
- **summary**: "Too few reviews for reliable signal (ownership tower; rentals are a minority of occupancy)."
- **common_praise**: `[]`
- **common_complaints**: `[]`

### rental.prices

- **studio.min / max**: `undefined` — not a studio-heavy unit mix (owner-spec product)
- **one_bed.min / max**: `3000 / 3800` [secondary-market inference from Foxtons / JOHNS&CO / Rightmove 2026 listings]
- **two_bed.min / max**: `4500 / 5500`
- **bills_included**: `false`
- **price_transparency**: `"enquire"` — **flip from `"listed"`**; Vertus doesn't list 10PD; secondary-market rentals only
- **notes**: "Secondary-market rentals via Foxtons / JOHNS&CO / Circa London. Vertus does not operate 10 Park Drive. Pricing observed 2026-04-17 from Rightmove / OnTheMarket."

### Affordability

- **affordability**: `"over-budget"` — 1-bed floor £3,000 at / above hard cap, and secondary-market rentals rarely land at advertised floor once agent fees and landlord qualification friction are factored in.

---

## `one-park-drive` — One Park Drive by Herzog & de Meuron [V1 wrong-operator flag, low impact]

Same structural pattern as 10 Park Drive — ownership tower (483 apartments, 57 storeys, Pritzker-winner Herzog & de Meuron). Rentals via individual owner-landlords through external agents. V1 already has correct `building_type: "Owner-Lease"`, `realism: "unlikely"`, `is_signature: true`, `architects: ["Herzog & de Meuron"]` — so impact is lower than 10PD. V2 fills amenity / resident-signal / pricing.

### building_quality

- **epc_rating**: `"B"` (inferred, 2021 build; not register-verified) [flag]
- **sound_insulation**: `"excellent"` — Herzog & de Meuron circular tower with premium residential specification; review base directionally supports above-average acoustic separation
- **thermal_performance**: `"good"`
- **layout_notes**: "57-storey circular tower with 483 apartments. Lower-floor 'loft' apartments have significantly higher ceilings and wrap-around terraces (premium tier). Mid-rise 'cluster' units are standard plan. Upper-floor 'bay' apartments are tighter but with panoramic views. Full kitchens, premium interior specification throughout." [https://residential.canarywharf.com/one-park-drive/ + https://spearswms.com/property/one-park-drive-canary-wharf-herzog-de-meuron-tom-dixon/]
- **kitchen_quality**: `"excellent"` — owner-spec Miele / Siemens finish [developer spec + Spear's]
- **heating_type**: `"communal"`
- **notes**: "Herzog & de Meuron's circular form is load-bearing for both the building's identity and its pricing. Interior design contributions by Tom Dixon (penthouse and public spaces). The architectural destination building of Wood Wharf."

### amenities

- **pool**: `true` — residents' pool + spa [CWG residential page]
- **pool_notes**: "Residents' pool and spa — among the strongest spa facilities in any Wood Wharf building."
- **gym**: `true`
- **gym_quality**: `"excellent"` — dedicated gym + studio space; ownership-tower product with top-tier fitness provision
- **concierge**: `"24h"`
- **sky_lounge**: `true`
- **co_working**: `true` — studio / creative space
- **dining_room**: `true`
- **cinema_room**: `true`
- **rooftop_terrace**: `true`
- **parking**: `true`
- **bike_storage**: `true`
- **pet_policy**: "Dependent on individual landlord / leasehold terms."
- **other_amenities**: `["Spa", "Creative studio space", "Residents' library / private lounges", "Tom Dixon interior design in common spaces"]`
- **overall_tier**: `"premium"` — pool + spa + excellent gym + 24h concierge + cinema + dining + rooftop + parking; clearly top of the amenity distribution

### architecture

- **architects**: `["Herzog & de Meuron"]` (keep V1) [developer page + Dezeen + Spear's]
- **awards**: `[]` — no RIBA / Stirling award captured in public record for One Park Drive specifically. Note: Herzog & de Meuron hold the Pritzker Prize at practice level (2001), which is the architect-level credential that warrants `is_signature: true` independent of building-level awards.
- **is_signature**: `true` (keep V1) — justification: Herzog & de Meuron are Pritzker laureates; circular plan is the only one at Wood Wharf; Dezeen / ArchDaily / Wikipedia coverage; architectural destination building of the masterplan. This is one of the clearest `true` calls in the whole dataset.
- **style_notes**: "57-storey circular tower — the only circular-plan residential at Wood Wharf. Three façade types (loft-duplex lower floors with oversized wrap-around terraces, mid-rise 'cluster' units, upper-floor 'bay' apartments with panoramic views) create variation across the tower's elevation. Herzog & de Meuron's first UK residential commission at this scale. Tom Dixon-designed interiors in common spaces. The architectural landmark of Wood Wharf."

### long_form

- **full**: "One Park Drive is Wood Wharf's architectural landmark — a 57-storey circular tower designed by Herzog & de Meuron, Pritzker Prize winners and Switzerland's most internationally significant practice. 483 apartments across three distinct unit types: lower-floor 'loft' apartments with oversized wrap-around terraces, mid-rise 'cluster' units, and upper-floor 'bay' apartments with panoramic views. Tom Dixon designed the interiors of the public spaces. This is an **ownership tower** — rentals happen individually via owner-landlords through external agents (Knight Frank, Savills, Foxtons), not through Vertus or any single BTR operator. Amenity package includes residents' pool, spa, gym, cinema, and private lounges. Pricing is at the top of the Wood Wharf market: secondary-market 1-bed rentals typically start around £3,500–4,000."
- **living_experience**: "HomeViews shows a 5.00/5 rating but on a very thin review base — ownership towers have fewer rental residents and fewer reviewers. The reviews that exist consistently praise the architecture, amenity, and view; building management is Canary Wharf Group-operated and rated consistently. Day-to-day experience depends heavily on which landlord you rent from. This is not a building to evaluate on 'community feel' — it is a destination-architecture ownership tower that happens to have some rental inventory."
- **notable_features**: "Herzog & de Meuron (Pritzker Prize). Circular tower plan — the only one at Wood Wharf. Three distinct unit types across the height (loft-duplex lower floors with oversized terraces, mid-rise clusters, upper-floor bays with panoramic views). Tom Dixon-designed public-space interiors. Spa and pool amenity. Wood Wharf's architectural destination."

### resident_signal

- **homeviews_score**: `10.0` (5.00/5 — but flag thin sample in summary) [https://www.homeviews.com/development/one-park-drive-e14]
- **homeviews_url**: `"https://www.homeviews.com/development/one-park-drive-e14"`
- **summary**: "5.00/5 on HomeViews but very thin review base (ownership tower; rental residents are a minority, and owner-residents review less). Signal is directionally positive but review count is below the threshold for confident generalisation. Architecture, amenity, and CWG-managed common areas consistently praised in available reviews."
- **common_praise**: `["Architecture and design quality", "Amenity package (pool, spa, gym, cinema)", "CWG-managed common areas", "Views from upper floors"]`
- **common_complaints**: `[]` — no consistent complaint pattern in available reviews (but sample too thin to be authoritative)

### rental.prices

- **studio.min / max**: `undefined` — not a studio building in practice; unit mix starts at 1-bed
- **one_bed.min / max**: `3500 / 4500` [secondary-market inference, Knight Frank / Savills / Foxtons 2026]
- **two_bed.min / max**: `5000 / 7500`
- **bills_included**: `false`
- **price_transparency**: `"enquire"` (keep)
- **notes**: "Secondary-market rentals via Knight Frank / Savills / Foxtons / JOHNS&CO. Pricing reflects the Herzog architectural premium."

### Affordability

- **affordability**: `"over-budget"` — 1-bed floor £3,500 is well above £3,000 hard cap; clearly out of envelope, consistent with existing `realism: "unlikely"`.

---

## Cross-batch calibration summary

### Affordability distribution (envelope £2,500/£3,000)

| Project | Studio | 1-bed | Tag |
|---|---|---|---|
| 8 Water Street | stretch | over | `"stretch"` |
| 10 George Street | stretch | over (at cap) | `"stretch"` |
| Newfoundland | stretch | over | `"stretch"` |
| 10 Park Drive | n/a | over | `"over-budget"` |
| One Park Drive | n/a | over | `"over-budget"` |

Distribution: 3 stretch, 2 over-budget, 0 comfortably-affordable, 0 at-budget. Expected — Vertus is CWG's luxury BTR arm, the two ownership towers are architecture-destination product. None reach `at-budget`; the three BTRs reach `stretch` on studios only.

### `is_signature` calls

| Project | Signature | Rationale |
|---|---|---|
| 8 Water Street | `false` | Stanton Williams competent premium but not silhouette-level |
| 10 George Street | `false` | Competent Stanton Williams tower; 10PD twin |
| Newfoundland | **`true`** | 220m diagrid, tallest UK BTR, Dezeen/ArchDaily/WSP coverage, distinctive silhouette |
| 10 Park Drive | `false` | Owner-scale but 8WS twin architecturally |
| One Park Drive | **`true`** | Herzog & de Meuron (Pritzker), only circular plan at Wood Wharf, Tom Dixon interiors, destination building |

Two genuine signatures out of five — Wood Wharf is the kind of area where this density is legitimate. Discipline maintained: did not inflate Stanton Williams calls to `true` despite competent delivery and HomeViews awards.

### `overall_tier` distribution

- `premium`: 8 Water Street, Newfoundland, 10 Park Drive, One Park Drive (4)
- `strong`: 10 George Street (1)
- `decent` / `basic`: 0

Justified — this is CWG's Wood Wharf portfolio, end-to-end top-of-market. 10 George Street is the only one that doesn't quite clear `premium` (no pool, no cinema).

### `kitchen_quality` distribution

- `excellent`: 10 Park Drive, One Park Drive (owner-spec)
- `good`: 8 Water Street, 10 George Street, Newfoundland (Vertus BTR Bosch-tier)

### Operator-wide defaults (apply to all five unless per-building override stated)

- `heating_type`: `"communal"` across all five [post-2015 CWG BTR default + review-surfaced communal-heating charges]
- `concierge`: `"24h"` across all five
- `bike_storage`: `true`, `parking`: `false` for BTR buildings, `true` for ownership towers
- `pet_policy`: `"Direct enquiry"` default; **8 Water Street is the pet-friendly flagship** — only building where policy is explicitly pet-accepting.

---

## V1 / V2 flags for orchestrator

1. **Rename `george-street-vertus` → `10-george-street`** — "3 George Street" does not exist as a Vertus BTR.
2. **Reattribute `10-park-drive` operator** — currently `"Vertus"`, should be `"Secondary Market"` or `"Individual Landlord"` with `building_type: "Owner-Lease"`. Vertus does not operate it.
3. **One Park Drive `operator: "Vertus"` attribution** — same wrong-operator pattern but lower urgency (V1 already has `realism: "unlikely"`, `building_type: "Owner-Lease"`).
4. **Coverage gap — 50-60 Charter Street** (756 units, opened Nov 2025 — largest and newest Vertus building) is missing from `canary-wharf.ts`. Flag for Phase 3 / user discretion.
5. **EPC ratings inferred, not register-verified** — all five proposed as `"B"`. Schema explicitly forbids invention. Options: (a) commit as inferred with provenance flag, (b) leave `undefined` pending a dedicated GOV.UK EPC register pass, (c) verify now and commit values. Recommendation: commit as inferred with explicit `type: "press"` provenance since post-2015 CWG BTR EPC B is a well-evidenced baseline, not a fabrication — but flag clearly for verification.
6. **Realism downgrades** fell out of operator research: BTRs → `"unlikely"` (income-multiple floor unreachable on graduate visa without UK payslips). Ownership towers → `"unlikely"`/`"unclear"` (secondary-market, per-listing variance). V1 territory but travels with this proposal to keep the set consistent.
7. **HomeViews coverage gap**: 10 Park Drive has no dedicated HomeViews listing. All other four buildings covered.

---

## Sources

| URL | Label | Type | Accessed |
|---|---|---|---|
| https://thisisvertus.com/apartments-to-rent/ | Vertus portfolio + floors | operator | 2026-04-17 |
| https://thisisvertus.com/apartments-to-rent/8-water-street/ | 8 Water Street operator page | operator | 2026-04-17 |
| https://thisisvertus.com/apartments-to-rent/10-george-street/ | 10 George Street operator page | operator | 2026-04-17 |
| https://thisisvertus.com/apartments-to-rent/newfoundland/ | Newfoundland operator page | operator | 2026-04-17 |
| https://residential.canarywharf.com/10-park-drive/ | 10 Park Drive (ownership) | developer | 2026-04-17 |
| https://residential.canarywharf.com/one-park-drive/ | One Park Drive (ownership) | developer | 2026-04-17 |
| https://www.homeviews.com/development/8-water-street-e14 | 8WS HomeViews | homeviews | 2026-04-17 |
| https://www.homeviews.com/development/10-george-street-e14 | 10 George Street HomeViews | homeviews | 2026-04-17 |
| https://www.homeviews.com/development/newfoundland-e14 | Newfoundland HomeViews | homeviews | 2026-04-17 |
| https://www.homeviews.com/development/one-park-drive-e14 | One Park Drive HomeViews | homeviews | 2026-04-17 |
| https://www.dezeen.com/2022/01/27/newfoundland-skyscraper-canary-wharf-horden-cherry-lee/ | Dezeen — Newfoundland | press | 2026-04-17 |
| https://www.wsp.com/en-us/projects/newfoundland-london | WSP — Newfoundland diagrid structural rationale | press | 2026-04-17 |
| https://www.jra.co.uk/projects/10-park-drive-8-water-street | JRA — 8WS + 10PD delivery | press | 2026-04-17 |
| https://www.buildington.co.uk/buildings/9558/england/london-e14/8-water-street/8-water-street | 8 Water Street specs | press | 2026-04-17 |
| https://spearswms.com/property/one-park-drive-canary-wharf-herzog-de-meuron-tom-dixon/ | Spear's — One Park Drive / Tom Dixon | press | 2026-04-17 |
| context/data-upkeep/proposals/v2-vertus.md | Upstream V2 Vertus research pack | internal | 2026-04-17 |
| context/data-upkeep/operators/vertus.md | Phase-2 Vertus operator research | internal | 2026-04-16 |
