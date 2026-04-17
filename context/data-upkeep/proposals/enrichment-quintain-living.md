# Quintain Living — V2 Enrichment Proposal

**Batch scope:** 10 projects in Wembley Park (HA9), operated by Quintain Living (developer: Quintain).
**Research date:** 2026-04-17.
**Primary sources:** quintainliving.com, homeviews.com, quintain.co.uk, trustpilot.com, architect portfolios (Platform 5, Cartwright Pickard), press.

---

## Operator-wide defaults (apply to all 10 unless overridden per project)

| Field | Default | Source |
|---|---|---|
| epc_rating | "B" | https://www.quintainliving.com/sustainable-homes — Quintain Living portfolio-wide EPC B; Ferrum 188 homes confirmed EPC B with Environmental Impact A |
| heating_type | "communal" | Inferred from post-2015 BTR new-build pattern; HomeViews Canada Gardens reviews reference communal energy billing (42.6p/kWh with no supplier choice) |
| kitchen_quality | "good" | Samsung appliances + Kohler/Hansgrohe bathrooms + John Lewis & Partners furniture across all Quintain Living buildings. Full kitchen with dishwasher standard. Not "excellent" — Samsung is mid-tier, not Miele/Bosch premium. Comparable to Fizzy Lewisham standard; above ARK Canary Wharf kitchenette (`poor`); below Gasholders King's Cross (`excellent`) |
| pet_policy | "Pets welcome; on-site dog park at every building. Small monthly pet fee (reports of £50/mo at Ferrum, non-negotiable)." | HomeViews Ferrum; quintainliving.com |
| concierge | "24h" at signature buildings (Luna, Alameda, Alto); "daytime" + 24h support line at others | Per-building confirmation via quintainliving.com + HomeViews |
| bike_storage | true | All buildings |
| parking | true (underground, paid) | All buildings except Luna (not confirmed) |

## Portfolio changes flagged (operator reattribution)

- **Alameda** — HomeViews explicitly notes "management transitioned to Allsop Letting & Management as of December 31st" and Alameda is **NO LONGER on the current Quintain Living apartment-buildings page**. Operator reattribution recommended: `operator: "Allsop Letting & Management"` (keep Quintain as developer).
- **Alto (Belcanto / Pienna)** — Sold to Goldman Sachs Asset Management + Tene Living in 2023. Continues to operate under the Quintain Living brand per public listings, but ownership is no longer Quintain. Buildington + Wembley Matters confirm the sale. Flag for reattribution review — operator string may need "Quintain Living (Tene Living / Goldman Sachs ownership)" or similar. Not on current Quintain Living portfolio page.
- **Beton** — Not on current Quintain Living apartment-buildings page (portfolio shows 8 buildings: Solar/Luna/Repton Gardens/The Robinson/Ferrum/Canada Gardens/Madison/Landsby). Dedicated site beton-wembley.co.uk exists but returned 403. Unclear status — may still be Quintain-operated with separate marketing site, or may have moved operator. Flag for verification.
- **North East Lands** — Search results indicate **Luna is NE03 North East Lands**. The dataset has Luna AND North East Lands as separate projects — likely double-counting. NE01 is a 770-bed student accommodation (not residential BTR). NE02 is 487 flats, completion 2025-2026. Flag: dataset's "North East Lands" project may need to be either (a) removed as duplicate of Luna, or (b) re-scoped to represent NE02 specifically.

---

## Luna by Quintain Living

### building_quality
- **epc_rating**: "B"  [source: https://www.quintainliving.com/sustainable-homes — portfolio-wide]
- **sound_insulation**: "good"  [source: https://www.homeviews.com/development/luna-ha9 — resident review praises soundproofing; 2024 new-build Part E compliant; comparable to Madison (`good`), above Ferrum (`average`)]
- **thermal_performance**: "good"  [source: EPC B + no thermal complaints in HomeViews]
- **layout_notes**: "Units 36–61 sqm. Furnished examples: 2-bed reviewer noted limited kitchen counter space and top-cupboard height. Floor-to-ceiling windows; bespoke furniture collection; geometric design motifs."  [source: https://www.homeviews.com/development/luna-ha9]
- **kitchen_quality**: "good"  [source: https://www.quintainliving.com/luna — Samsung high-spec appliances, Kohler bathroom, full kitchen with dishwasher; comparable to Fizzy Lewisham (`good`), below Gasholders (`excellent`)]
- **heating_type**: "communal"  [inferred — post-2024 new-build BTR]
- **notes**: "Luna is Quintain's newest building (2024 completion). Modern, well-insulated, high-spec finish. Only one HomeViews review to date so sound/thermal signals are thin."

### amenities
- **pool**: false
- **pool_notes**: ""
- **gym**: true
- **gym_quality**: "good"  [source: https://www.homeviews.com/development/luna-ha9 — "gym has such great equipment"; comparable to Landsby `good`, below Ferrum's campus-strongest gym]
- **concierge**: "24h"  [source: https://www.quintainliving.com/luna]
- **sky_lounge**: true  [source: quintainliving.com — "Eclipse Lounge" + rooftop cocktail bar]
- **co_working**: true  [source: quintainliving.com — work-from-home areas]
- **dining_room**: true  [source: quintainliving.com — "The Black Hole" secret dining room]
- **cinema_room**: false  [not listed]
- **rooftop_terrace**: true  [source: quintainliving.com — rooftop terrace with stadium arch views]
- **parking**: false  [not listed on Luna page; most Quintain buildings have underground parking but Luna's page does not name it]
- **bike_storage**: true
- **pet_policy**: "Pet-friendly; on-site dog park; monthly pet fee applies."
- **other_amenities**: ["Eclipse Lounge", "The Black Hole secret dining room", "Kids play areas", "BBQ and dining areas", "Hireable social spaces", "Extra storage for hire"]
- **overall_tier**: "premium"  [24h concierge + good gym + sky lounge + dining room + rooftop + kids play areas — comparable to Chronicle (`premium`), Gasholders (`premium`); above Canada Gardens (`strong`)]

### architecture
- **architects**: []  [unknown — not credited publicly]
- **awards**: ["Sunday Times Best Places to Live in London — 2025 (Wembley Park area award, Luna specifically featured)"]
- **is_signature**: false  [competent campus architecture; not a destination building in its own right. Comparable to other Quintain campus buildings; does NOT qualify like Gasholders or Landmark Pinnacle]
- **style_notes**: "Modernist celestial aesthetic. Deep cool tones, geometric patterns, refined sultry atmosphere. Part of the North East Lands phase (NE03). 2024 completion, 282 apartments."

### long_form
- **full**: "Luna is Quintain Living's newest building, completed in 2024 as part of the North East Lands phase (sometimes referenced as NE03). 282 apartments across a tower addressing the stadium arch, with a celestial-themed interior — deep cool tones, geometric patterns, a 'refined and moody' identity. Studios from £1,746/month; 1-beds around £2,612; 2-beds from £2,962. The amenity package is the strongest on the Quintain campus: an exclusive rooftop 'Eclipse Lounge' with cocktail bar, a 'Black Hole' secret dining room bookable by residents, a state-of-the-art gym, resident gardens and kids' play areas. 24-hour support is standard. Wembley Park station is a three-minute walk; central London is 12 minutes by Jubilee line. BTR only — lettings are through Quintain Living's Homeppl-based referencing (Open Banking friendly)."
- **living_experience**: "Too few HomeViews reviews to draw reliable living-experience conclusions yet (only 1 verified review at time of research, rating 4.9/5). The single review praises sound insulation, gym equipment, named management staff, and the ease of commuting to central London. Common complaints within the one data point: limited kitchen counter space in 2-bed units, inaccessible top cupboards, and elevated ambient noise from stadium events. Management quality across Quintain Living is consistently well-regarded on HomeViews, with the Luna team specifically named."
- **notable_features**: "Newest building in the Quintain Living portfolio (2024 completion, 282 units). Eclipse Lounge rooftop cocktail bar and 'The Black Hole' secret dining room are unique to Luna within the Quintain stack. Rooftop terrace has direct stadium arch views. Part of the North East Lands masterplan phase."

### resident_signal
- **homeviews_score**: 9.8
- **homeviews_url**: "https://www.homeviews.com/development/luna-ha9"
- **summary**: "Too few reviews for reliable signal (1 review on HomeViews as of research date). The single verified review is highly positive (4.9/5)."
- **common_complaints**: []
- **common_praise**: []

### pricing
- **studio**: {min: 1746, max: 2100, currency: "GBP", per: "month"}  [source: https://www.quintainliving.com/luna — from £1,746/mo with 16% discount for 9-12 month contracts]
- **one_bed**: {min: 2400, max: 2612, currency: "GBP", per: "month"}  [source: quintainliving.com — £2,612 furnished example]
- **two_bed**: {min: 2962, max: 3400, currency: "GBP", per: "month"}  [source: quintainliving.com — from £2,962 with 8% discount]
- **bills_included**: false
- **notes**: "Studios have discount for 9-12 month tenancies. Verified 2026-04-17. Affordability: **at-budget** for studios (£1,746 is within envelope but leaves thin bills headroom given communal heating billing reports); **stretch** for 1-beds (£2,400+ exceeds £2,250 envelope). Sits between Fizzy Lewisham (`well-under-budget`, £1,280-£1,450) and Canada Gardens (£2,135 `at-budget`)."
- **price_transparency**: "listed"

---

## Ferrum by Quintain Living

### building_quality
- **epc_rating**: "B"  [source: https://www.quintainliving.com/sustainable-homes — Ferrum 188 homes EPC B with Environmental Impact rating A]
- **sound_insulation**: "average"  [source: https://www.homeviews.com/development/ferrum-ha9 — "low constant humming noise in walls", hearing neighbours showering, pipe noise across multiple reviews; clear negative signal; comparable to ARK co-living `average`, below Luna `good`]
- **thermal_performance**: "poor"  [source: HomeViews Ferrum — multiple verified tenants: "frozen hell for more than two months", "hot stuffy apartments year-round", management closes tickets unresolved; major red flag against EPC-B paper rating. Downgraded from EPC-implied `good` based on dominant negative review signal]
- **layout_notes**: "Studios 39 sqm, 1-bed 51 sqm, 2-bed 63 sqm. Industrial loft aesthetic — exposed brick and concrete, Crittall windows, premium wood worktops. Balconies on most units (residents report opening them year-round for ventilation, which is a thermal-performance signal)."
- **kitchen_quality**: "good"  [source: quintainliving.com/ferrum — Samsung appliances; HomeViews notes some furnished units lack a microwave, flagged in reviews]
- **heating_type**: "communal"  [inferred; thermal complaints consistent with unresponsive communal system]
- **notes**: "Ferrum is the clearest case on the Quintain campus where HomeViews signal contradicts the paper spec. EPC B and Environmental Impact A on certificate; lived experience shows persistent thermal and acoustic problems. The building's warehouse-loft aesthetic (exposed concrete, Crittall windows) is thermally unforgiving. Heating complaints are the single most consistent negative theme."

### amenities
- **pool**: false
- **pool_notes**: ""
- **gym**: true
- **gym_quality**: "good"  [source: quintainliving.com + dataset note that Ferrum has the strongest gym on the Quintain campus; comparable to Landsby `good`; below Canary Wharf Vertus `excellent`]
- **concierge**: "daytime"  [source: HomeViews — concierge praised but not 24h; 24h support line only]
- **sky_lounge**: false
- **co_working**: true  [meeting rooms, work-from-home desks, resident lounge]
- **dining_room**: false
- **cinema_room**: false
- **rooftop_terrace**: true  [rooftop social spaces + podium garden + BBQ]
- **parking**: true  [underground resident + guest parking]
- **bike_storage**: true  [free]
- **pet_policy**: "Pets welcome; on-site dog park. Verified £50/mo pet fee per HomeViews reviewer (flagged as 'hidden charge')."
- **other_amenities**: ["Meeting rooms", "Laundry room", "Specialist recycling", "Event space for hire", "Podium garden", "BBQs"]
- **overall_tier**: "strong"  [daytime concierge + good gym + co-working + rooftop + 2 other amenities — comparable to Royal Wharf `strong`; below Luna `premium`]

### architecture
- **architects**: []  [not publicly credited]
- **awards**: []
- **is_signature**: false
- **style_notes**: "New York warehouse loft aesthetic. Exposed brick and concrete, Crittall windows, premium wood worktops. 188 homes. 2020-2021 completion window."

### long_form
- **full**: "Ferrum is Quintain Living's warehouse-loft building — 188 homes styled on a New York industrial aesthetic with exposed brick, exposed concrete columns, Crittall metal-framed windows, and premium wood worktops. Studios from £1,829/mo, 1-beds from £2,265, 2-beds from £2,464. Underground parking, free bike storage, rooftop podium garden with BBQs, meeting rooms, resident lounge, and the campus's strongest gym. Daytime concierge plus a 24-hour support line. Wembley Park station is a five-minute walk. Ferrum is the best-priced of the Quintain portfolio at the studio tier."
- **living_experience**: "Ferrum is the Quintain building where HomeViews signal diverges most sharply from the paper spec. Rated 3.94/5 across 118 reviews — the lowest of any major Quintain Living building. The dominant complaint thread is thermal discomfort: multiple verified tenants report months of unresolved heating problems (cold in winter, stuffy in summer requiring balcony doors open year-round), communal heating system unresponsiveness, and management closing maintenance tickets without resolution. Acoustic privacy is also thin — residents report hearing neighbours showering, pipe noise in walls, a low constant humming. Concierge and resident-facing team praise is genuine but separate from the building-quality issues. Multiple reviewers flag an earlier review-incentive competition that inflated 2022-2023 ratings."
- **notable_features**: "188 homes in the strongest-gym building on the Quintain campus. Warehouse-loft styling with Crittall windows and exposed concrete. Underground parking + free bike storage (not universal on the campus). Trade-off profile: studio pricing (£1,829) is the most affordable on the Quintain stack, but thermal and acoustic performance have dominant negative review signal."

### resident_signal
- **homeviews_score**: 7.9
- **homeviews_url**: "https://www.homeviews.com/development/ferrum-ha9"
- **summary**: "3.94/5 across 118 reviews — the lowest-rated major Quintain Living building on HomeViews. Pre-October 2023 reviews were dominantly negative; a review-incentive competition drove a later wave of 5-star ratings that residents have flagged as suspect. Concierge/design praise is real; building-quality (heating, acoustics) and management-responsiveness complaints are persistent."
- **common_complaints**: ["Persistent heating problems — cold in winter, stuffy in summer — communal system unresponsive", "Acoustic privacy — hearing neighbours showering, pipe noise, constant low humming", "Management closes maintenance tickets without resolution", "Undisclosed £50/mo pet fee flagged as hidden charge", "Weed smell from balconies, drain smells in corridors"]
- **common_praise**: ["Modern industrial design aesthetic", "Concierge and resident team go above and beyond", "Gym is the strongest on the Quintain campus", "Location — Wembley Park station walkability", "Underground parking availability"]

### pricing
- **studio**: {min: 1829, max: 2100, currency: "GBP", per: "month"}  [source: quintainliving.com/ferrum — from £1,829/mo with 12% discount]
- **one_bed**: {min: 2265, max: 2575, currency: "GBP", per: "month"}  [source: quintainliving.com]
- **two_bed**: {min: 2464, max: 2800, currency: "GBP", per: "month"}  [source: quintainliving.com]
- **bills_included**: false
- **notes**: "Cheapest studio on the Quintain campus. Verified 2026-04-17. Affordability: **comfortably-affordable** for studios (£1,829 with 12% discount leaves meaningful envelope headroom); **at-budget** for 1-beds (£2,265 right at £2,250 envelope). Comparable to Folk Florence Dock (`comfortably-affordable`, £1,695-£1,800) at studio tier."
- **price_transparency**: "listed"

---

## Madison by Quintain Living

### building_quality
- **epc_rating**: "B"  [portfolio-wide]
- **sound_insulation**: "good"  [source: https://www.homeviews.com/development/madison-ha9 — no dominant noise complaints across 81 reviews]
- **thermal_performance**: "good"  [EPC B + no thermal complaints]
- **layout_notes**: "Studios 40 sqm, 1-bed 52 sqm, 2-bed 65 sqm — slightly larger than Ferrum equivalents. Furnished units with John Lewis & Partners furniture. Mid-century sophistication aesthetic. Opens directly onto Union Park — key residential-frontage advantage."
- **kitchen_quality**: "good"  [Samsung + Kohler]
- **heating_type**: "communal"  [inferred]
- **notes**: "Madison is the most Union-Park-oriented of the Quintain buildings — the frontage onto the new public park is the building's spatial USP."

### amenities
- **pool**: false
- **pool_notes**: ""
- **gym**: true
- **gym_quality**: "average"  [source: HomeViews — "small and doesn't have windows so feels a bit cramped"; comparable to basic BTR `average`; notably below Ferrum `good`]
- **concierge**: "daytime"  [daily staffed, 24h support line]
- **sky_lounge**: false
- **co_working**: true  [meeting rooms + work-from-home areas]
- **dining_room**: false  [resident kitchen present but not a bookable private dining room]
- **cinema_room**: true  [TV room — per dataset preview note "screening room"]
- **rooftop_terrace**: true  [2 roof terraces, stadium arch views]
- **parking**: true  [underground resident + guest]
- **bike_storage**: true
- **pet_policy**: "Pet-friendly; on-site dog park."
- **other_amenities**: ["TV room", "Resident kitchen", "Meeting rooms", "2 roof terraces with stadium views", "Event space for hire", "BBQ and outdoor dining"]
- **overall_tier**: "strong"  [daytime concierge + gym + co-working + 2 rooftops + cinema/TV room]

### architecture
- **architects**: []  [not publicly credited]
- **awards**: []
- **is_signature**: false
- **style_notes**: "Mid-century sophistication inspired by the Mad Men era. Overlooks Union Park. Walnut tones, brass accents, vintage-modern interior vocabulary."

### long_form
- **full**: "Madison is Quintain Living's mid-century-inspired building, oriented to overlook Union Park — the new 7-acre public green space at the heart of the Wembley Park masterplan. Studios £2,116, 1-beds £2,254 (with 12% discount active), 2-beds £3,121. Two rooftop terraces with direct stadium arch views, a screening/TV room, resident kitchen, meeting rooms, underground parking, bike storage. Daytime concierge backed by a 24-hour support line. The gym is the building's weakest spec — small and windowless by resident account. Wembley Park station is a six-minute walk."
- **living_experience**: "Madison rates 4.54/5 across 81 HomeViews reviews — one of the better-reviewed Quintain Living buildings. Management team is repeatedly and by name praised for responsiveness. Common complaints are limited apartment storage, the cramped gym, and stadium-event-day disruption to transport and streetfronts. Some anti-social behaviour mentioned near the stadium entrance. Overall the lived experience is notably more positive than Ferrum's and close to Landsby's."
- **notable_features**: "Direct Union Park frontage is unique in the Quintain stack. Two roof terraces with stadium arch views. Screening/TV room. Mid-century interior identity distinguishes it from the other themed buildings. The 12% discount window on 1-beds (to £2,254) is the most aggressive of any Quintain 1-bed as of April 2026 — pushes it into envelope range where most Quintain 1-beds sit above."

### resident_signal
- **homeviews_score**: 9.1
- **homeviews_url**: "https://www.homeviews.com/development/madison-ha9"
- **summary**: "4.54/5 across 81 reviews — one of the stronger Quintain Living buildings on HomeViews. Management responsiveness is the dominant positive theme; gym size and storage are the consistent soft complaints. Stadium-event-day disruption mentioned but treated as an area-level quirk rather than building fault."
- **common_complaints**: ["Limited apartment storage space", "Gym is small and windowless — feels cramped", "Stadium event days disrupt commuting", "Anti-social behaviour near stadium entrance on event nights", "Premium pricing feels steep at advertised rates"]
- **common_praise**: ["Management team responsiveness — named staff repeatedly", "Contemporary design and build quality", "Union Park frontage and rooftop views", "24-hour staff availability and maintenance response", "Transport link access (Jubilee + Metropolitan)"]

### pricing
- **studio**: {min: 2116, max: 2300, currency: "GBP", per: "month"}  [source: quintainliving.com/madison]
- **one_bed**: {min: 2254, max: 2560, currency: "GBP", per: "month"}  [12% discount; headline rate ~£2,560]
- **two_bed**: {min: 3121, max: 3400, currency: "GBP", per: "month"}
- **bills_included**: false
- **notes**: "Verified 2026-04-17. 12% 1-bed discount is the most aggressive on the Quintain stack. Affordability: **at-budget** for studios, **at-budget** for 1-beds with the discount active (£2,254 sits right at £2,250 envelope). Comparable to Canada Gardens (`at-budget`, £2,135)."
- **price_transparency**: "listed"

---

## Canada Gardens by Quintain Living

### building_quality
- **epc_rating**: "B"  [portfolio-wide]
- **sound_insulation**: "average"  [source: https://www.homeviews.com/development/canada-gardens-wembley-park-ha9 — complaints about weekend noise from communal events; quiet hours not enforced before 11pm]
- **thermal_performance**: "average"  [EPC B but residents report high communal energy bills (42.6p/kWh, ~£67/mo standing charge, no supplier choice); usage feels poorly calibrated]
- **layout_notes**: "Studio 38 sqm, 1-bed 50 sqm, 2-bed 63 sqm. John Lewis & Partners bespoke furniture pack, Kohler bathroom, curtains (not blinds). Opens onto 1 acre of green space — most overtly family-oriented of the Quintain buildings."
- **kitchen_quality**: "good"  [Samsung + Kohler]
- **heating_type**: "communal"  [explicitly confirmed by HomeViews — residents describe quarterly reconciliation billing with £300-£400 correction invoices]
- **notes**: "Communal energy billing at Canada Gardens has the most explicit negative signal on the campus — residents describe no supplier choice, premium kWh rate vs London average, and retroactive over-consumption charges."

### amenities
- **pool**: false  [kids paddling pool only — not a residents' pool]
- **pool_notes**: ""
- **gym**: true
- **gym_quality**: "average"  [present in every building but not specifically praised here; assume parity with Madison `average`]
- **concierge**: "daytime"
- **sky_lounge**: false
- **co_working**: true  [library, phone booths, meeting rooms, desks]
- **dining_room**: false
- **cinema_room**: false
- **rooftop_terrace**: true  [2 roof terraces]
- **parking**: true  [underground resident + guest]
- **bike_storage**: true
- **pet_policy**: "Pet-friendly; on-site dog park."
- **other_amenities**: ["On-site coffee shop", "Library", "Phone booths", "Kids pirate ship + playhouse", "Kids paddling pool", "Resident allotments", "Resident Clubhouse", "Event space for hire"]
- **overall_tier**: "strong"  [daytime concierge + gym + co-working + rooftop + coffee shop + family/kids amenities — comparable to East Village `strong`]

### architecture
- **architects**: []
- **awards**: []
- **is_signature**: false
- **style_notes**: "Urban country oasis aesthetic. Botanical-inspired, 1 acre of green space, allotments, family-forward feel. Part of the Western Lands phase."

### long_form
- **full**: "Canada Gardens is Quintain Living's family-oriented building — botanical-inspired, an acre of green space around the block, on-site coffee shop, resident allotments, kids' pirate ship, paddling pool, playhouse, resident Clubhouse. 126 HomeViews reviews, rated 4.01/5. Studios £2,135, 1-beds £2,336 (discounted from £2,437), 2-beds £2,814 (discounted from £2,936). Two rooftop terraces, library, phone booths, meeting rooms, underground parking, bike storage. Daytime concierge. Wembley Park station is a seven-minute walk."
- **living_experience**: "Canada Gardens' review signal is the most mixed of the main Quintain buildings. Positives are clear — the green space, the kid-friendly amenities, the Clubhouse and library spaces. Negatives are operational and specific: communal energy billing with no supplier choice at 42.6p/kWh (vs 33p London average) plus a £67/mo standing charge, quarterly reconciliation invoices for 'over-consumption' of £300-£400, weekend noise from communal events with quiet hours not enforced before 11pm, and deposit deduction disputes at move-out. Stadium event days affect transport access, which is an area-level but building-relevant issue given school runs for resident families."
- **notable_features**: "Most family-oriented Quintain building — kids' pirate ship + paddling pool + playhouse + allotments + 1-acre green space. On-site coffee shop (unusual in the Quintain stack). Library and phone-booth co-working. The energy-billing situation is a documented operational negative that doesn't appear as loudly at the other Quintain buildings."

### resident_signal
- **homeviews_score**: 8.0
- **homeviews_url**: "https://www.homeviews.com/development/canada-gardens-wembley-park-ha9"
- **summary**: "4.01/5 across 126 reviews — mid-pack for the Quintain stack. Family-friendly design and green space are consistent positives; communal energy billing, weekend event noise, and deposit-deduction disputes are consistent operational negatives."
- **common_complaints**: ["Communal energy rate (42.6p/kWh) well above London average with no supplier choice", "Quarterly energy reconciliation invoices of £300-£400 for 'over-consumption'", "Weekend noise from communal events — quiet hours not enforced before 11pm", "Unjustified cleaning/deposit deductions on move-out", "Slow maintenance response times from management"]
- **common_praise**: ["Green space around the building — 1 acre", "Family-friendly amenities — kids' pirate ship, paddling pool, playhouse", "Library and phone-booth co-working spaces", "On-site coffee shop", "Design aesthetic — botanical, peaceful"]

### pricing
- **studio**: {min: 2135, max: 2300, currency: "GBP", per: "month"}  [source: quintainliving.com/canada-gardens]
- **one_bed**: {min: 2336, max: 2437, currency: "GBP", per: "month"}  [4% discount active]
- **two_bed**: {min: 2814, max: 2936, currency: "GBP", per: "month"}  [4% discount active]
- **bills_included**: false  [but communal energy billed through the operator — see HomeViews complaints]
- **notes**: "Verified 2026-04-17. 4% 1-bed/2-bed discount for May 2026 move-ins. Affordability: **at-budget** for studios (£2,135 close to £2,250 envelope); **stretch** for 1-beds (£2,336 above envelope). Comparable to Madison (`at-budget`)."
- **price_transparency**: "listed"

---

## Landsby by Quintain Living

### building_quality
- **epc_rating**: "B"  [portfolio-wide]
- **sound_insulation**: "good"  [source: https://www.homeviews.com/development/landsby-wembley-park-ha9 — residents report "minimal traffic noise", "safe and peaceful even at night"]
- **thermal_performance**: "good"  [EPC B + no thermal complaints]
- **layout_notes**: "1-bed 51 sqm, 2-bed 66 sqm, 3-bed 88 sqm. Scandi-inspired interior — light woods, minimal palette, hygge-oriented finishes. John Lewis & Partners furniture, Hansgrohe bathroom fittings (note: Hansgrohe at Landsby, Kohler elsewhere — slightly stronger bathroom spec)."
- **kitchen_quality**: "good"  [Samsung + Hansgrohe]
- **heating_type**: "communal"  [inferred]
- **notes**: "Landsby is one of the better-received Quintain buildings on HomeViews. Scandi interior spec with Hansgrohe bathroom fittings (a step up from the Kohler used in other Quintain buildings). Review-surfaced furniture-age complaint suggests older block, possibly 2020 vintage."

### amenities
- **pool**: false
- **pool_notes**: ""
- **gym**: true
- **gym_quality**: "good"  [source: HomeViews Landsby — "on-site gym is a fantastic facility"; comparable to Ferrum `good`]
- **concierge**: "daytime"
- **sky_lounge**: false
- **co_working**: true  [work-from-home areas]
- **dining_room**: false
- **cinema_room**: false
- **rooftop_terrace**: true  [2 roof terraces]
- **parking**: true  [underground resident + guest]
- **bike_storage**: true
- **pet_policy**: "Pet-friendly; on-site dog park."
- **other_amenities**: ["Resident kitchen", "Resident lounge", "2 roof terraces", "2 resident gardens", "2 kids play areas", "Podium playground", "Event space for hire"]
- **overall_tier**: "strong"  [daytime concierge + good gym + co-working + 2 rooftops + 2 gardens]

### architecture
- **architects**: []  [not publicly credited]
- **awards**: []
- **is_signature**: false
- **style_notes**: "Scandi-inspired — 'Landsby' means village in Danish. Nordic design vocabulary, hygge-emphasis, sprawling gardens. No single standout silhouette."

### long_form
- **full**: "Landsby is Quintain Living's Scandi-inspired building — Danish village vocabulary, Nordic design, hygge-forward material palette. 1-beds from £2,144 (after 12% discount), 2-beds from £2,875 (8% discount), 3-beds from £3,230 (16% discount). No studios listed — the smallest-unit floor starts at 1-bed. Two roof terraces, two resident gardens, two kids' play areas, underground parking, work-from-home spaces, Hansgrohe bathroom fittings (a step up from the Kohler standard elsewhere in the portfolio). Daytime concierge plus 24-hour support line. Wembley Park station is a five-minute walk."
- **living_experience**: "4.24/5 across 98 HomeViews reviews — top tier within the Quintain Living stack alongside Madison. Staff quality is the dominant positive, with named staff members (Milton) repeatedly praised. Soundscape is reported as quiet — minimal traffic noise, peaceful at night, a notable contrast to Ferrum's acoustic complaints. Soft complaints focus on premium pricing and some aged furniture in older units. Stadium events noted but treated as area-level, not building-level."
- **notable_features**: "One of two Quintain buildings with consistently strong HomeViews signal (the other is Madison). Hansgrohe bathroom fittings — small but real upgrade from the Kohler standard. 3-bed units available (not every Quintain building offers 3-beds). Aggressive 16% 3-bed discount window to May 2026. Two resident gardens — more green space allocation than other blocks on the campus."

### resident_signal
- **homeviews_score**: 8.5
- **homeviews_url**: "https://www.homeviews.com/development/landsby-wembley-park-ha9"
- **summary**: "4.24/5 across 98 reviews — top-quartile Quintain building. Design: 4.3, Location: 4.3, Facilities: 4.2, Experience: 4.2, Management: 3.9, Value: 3.7. Named staff praise recurs across reviews; soft negatives on value-for-money and occasional aged furniture."
- **common_complaints**: ["Premium pricing feels high", "Furniture in some units is aged — 'too old and some broken'", "Stadium event days increase local bustle", "Management rating (3.9) lower than design/location/facilities", "Value rating (3.7) lowest category — perceived cost pressure"]
- **common_praise**: ["Named staff — Milton repeatedly singled out for service quality", "On-site gym is a fantastic facility", "Local shops and restaurants within walking distance", "Quiet, peaceful soundscape — minimal traffic, safe at night", "Concierge creates welcoming, secure environment"]

### pricing
- **studio**: undefined  [Landsby has no studios]
- **one_bed**: {min: 2144, max: 2437, currency: "GBP", per: "month"}  [12% discount from headline]
- **two_bed**: {min: 2875, max: 3125, currency: "GBP", per: "month"}  [8% discount]
- **bills_included**: false
- **notes**: "Verified 2026-04-17. 1-bed £2,144 discounted is one of the more affordable 1-bed options in the Quintain stack. Affordability: **at-budget** for 1-beds with discount; **over-budget** for 2-beds. Comparable to Madison `at-budget`."
- **price_transparency**: "listed"

---

## Alameda by Quintain Living

> **CRITICAL FLAG — OPERATOR REATTRIBUTION**: Alameda was transferred to Allsop Letting & Management as of December 31st (per HomeViews Alameda development page). Not on current Quintain Living portfolio page (quintainliving.com/apartment-buildings). Quintain remains the developer; operator should be updated to "Allsop Letting & Management". Qualification pathway likely changes from Homeppl to Allsop's standard agent referencing (credit checks, employment verification — similar to the Vonder Wembley situation flagged earlier). **Strongly recommend V1 re-research for this project before V2 enrichment is trusted.**

### building_quality
- **epc_rating**: "B"  [inferred — built 2019, portfolio-wide EPC B, BREEAM Excellent + WiredScore Platinum per press]
- **sound_insulation**: "good"  [2019 new-build, no dominant noise complaints across 98 reviews]
- **thermal_performance**: "good"  [EPC B + BREEAM Excellent]
- **layout_notes**: "Studios, 1-bed, 2-bed, 3-bed. 330 units. John Lewis & Partners furniture, Samsung kitchens, polished concrete flooring, white-oiled oak wall cladding (per architect portfolio). 'Generous scale' with resin flooring accents."
- **kitchen_quality**: "good"  [Samsung + polished-concrete aesthetic]
- **heating_type**: "communal"  [inferred]
- **notes**: "Alameda is architecturally the strongest of the dataset's Quintain buildings per public credits (Flanagan Lawrence + Platform 5 Architects), BREEAM Excellent + WiredScore Platinum. Operator has changed — Allsop is currently managing lettings. Post-transition review signal reports a pest problem and unresolved maintenance complaints, suggesting operational discontinuity during handover."

### amenities
- **pool**: false
- **pool_notes**: ""
- **gym**: true
- **gym_quality**: "good"  [source: HomeViews Alameda — "well-equipped"]
- **concierge**: "24h"  [Alameda was Quintain's flagship and had 24h concierge; Allsop handover may have affected this — HomeViews notes understaffed concierge post-transition]
- **sky_lounge**: false
- **co_working**: true  [2 resident lounges + large work-from-home area + free WiFi]
- **dining_room**: false
- **cinema_room**: true  [rooftop 5m cinema screen — unique amenity]
- **rooftop_terrace**: true  [roof garden with 5m cinema screen + 2 BBQs]
- **parking**: true
- **bike_storage**: true
- **pet_policy**: "Pet-friendly (policy may have changed under Allsop — verify)."
- **other_amenities**: ["Rooftop 5m cinema screen", "2 BBQ stations with seating", "Mezzanine with games room + kitchenette", "2 resident lounges", "Bookable event spaces"]
- **overall_tier**: "premium"  [24h concierge + good gym + co-working + rooftop cinema + 2 lounges + cinema room]

### architecture
- **architects**: ["Flanagan Lawrence", "Platform 5 Architects"]  [source: https://platform5architects.com/project/alameda-Quintain-living + https://www.flanaganlawrence.com/alameda]
- **awards**: ["BREEAM Excellent certification", "WiredScore Platinum rating"]
- **is_signature**: false  [strong architectural credits and awards, but the dataset's anchor for `is_signature: true` is landmark silhouette + destination status (Gasholders, Landmark Pinnacle). Alameda is strong BTR architecture but not destination. Flag for discussion — could make a case either way]
- **style_notes**: "Strong vertical emphasis with 'white fins' drawing on Wembley Arena. Polished concrete flooring and white-oiled oak wall cladding. Meandering co-living route from reception to rooftop garden. 340 apartments (per Quintain) / 330 (per Platform 5 Architects) — likely includes resident-amenity units in one count."

### long_form
- **full**: "Alameda was Quintain's fourth build-to-rent at Wembley Park, completed in 2019 — 330-340 apartments on the junction of Olympic Way and Wembley Park Boulevard, between the SSE Arena, Wembley Stadium and the Designer Outlet. Designed by Flanagan Lawrence (building) and Platform 5 Architects (interiors), with strong vertical white-fin facade detailing referencing Wembley Arena. BREEAM Excellent + WiredScore Platinum. The amenity mix is premium-tier: 24-hour concierge, well-equipped gym, rooftop garden with a 5-metre cinema screen, 2 BBQ stations, two resident lounges, a mezzanine games room, bookable event spaces, underground parking. **Note: operator has changed — as of late 2024/2025, Allsop Letting & Management runs lettings, not Quintain Living. Qualification pathway likely requires V1 re-research.**"
- **living_experience**: "4.23/5 across 98 HomeViews reviews. Pre-transition Quintain era was strong — named staff (Yasmin, Shaun, Julian) repeatedly praised, design and location consistently well-rated, gym quality praised. Post-transition (Allsop handover) review signal reports understaffed concierge, 'untrained agency workers' replacing named Quintain staff, and a high-profile unresolved maintenance case (broken balcony, pest problem with mice/rats, 18-month non-response). New on-site team reportedly introduced with improved communication protocols — trajectory under new management is still settling. Management rating 3.9 (lower than design 4.4 or location 4.5)."
- **notable_features**: "Rooftop 5-metre cinema screen is unique in the Quintain stack. BREEAM Excellent + WiredScore Platinum — strongest sustainability/connectivity credentials of any dataset Quintain building. Two named architect practices (Flanagan Lawrence + Platform 5) — more design pedigree than any other Quintain Wembley building. OPERATOR CHANGE: lettings now handled by Allsop, not Quintain Living — qualification pathway needs re-research."

### resident_signal
- **homeviews_score**: 8.5
- **homeviews_url**: "https://www.homeviews.com/development/alameda-wembley-park-ha9"
- **summary**: "4.23/5 across 98 reviews. Rating breakdown: Experience 4.3, Location 4.5, Design 4.4, Facilities 4.1, Management 3.9, Value 3.8. Operator transition (Quintain → Allsop, Dec 31) is a signal rupture — pre-transition reviews are more consistently positive than post-transition."
- **common_complaints**: ["Concierge understaffed post-transition — 'untrained agency workers' flagged", "Unresolved high-impact maintenance — broken balcony, 18-month non-response case", "Pest problem (mice/rats) flagged in critical review", "Value rating (3.8) lowest category — perceived cost pressure", "Management rating (3.9) below design/location"]
- **common_praise**: ["Named staff — Yasmin, Shaun, Julian (pre-transition era)", "Design quality — John Lewis furniture, Samsung kitchens, polished concrete", "Location — between stadium, arena and Designer Outlet", "Rooftop 5m cinema screen on the garden", "Gym is well-equipped"]

### pricing
- **studio**: undefined  [operator changed — Quintain Living no longer publishes; OnTheMarket shows 2-bed £1,571 pcm but that's a single discounted listing]
- **one_bed**: undefined  [re-research under Allsop required]
- **two_bed**: {min: 1571, max: 2800, currency: "GBP", per: "month"}  [source: onthemarket.com — single listing; range unreliable]
- **bills_included**: false
- **notes**: "Operator has changed — pricing needs fresh research on Allsop's system. Price transparency may have shifted from `listed` (Quintain) to `enquire` (Allsop default). Affordability: **unclear** pending re-research."
- **price_transparency**: "unknown"

---

## Beton by Quintain Living

> **FLAG — PORTFOLIO STATUS UNCLEAR**: Beton is **not** on the current Quintain Living apartment-buildings page (which lists only 8 buildings). Dedicated marketing site beton-wembley.co.uk exists but blocks automated access. Quintain.co.uk still lists Beton as a Quintain asset. Possible states: (a) still Quintain Living operated with separate marketing site; (b) sold to a third party while Quintain brand remains. Recommend verification before trusting qualification defaults.

### building_quality
- **epc_rating**: "B"  [inferred — 2020 build, portfolio-wide]
- **sound_insulation**: "good"  [source: https://www.homeviews.com/development/beton-wembley-park-ha9 — no dominant noise complaints across 48 reviews; "three quick lifts" praised, no acoustic red flags]
- **thermal_performance**: "good"  [EPC B + no thermal complaints]
- **layout_notes**: "Studio, 1-bed, 2-bed, 3-bed, 4-bed units. 150 homes in total. Floor-to-ceiling windows with track lighting. Polished concrete columns and soffits exposed (architectural signature — 'Beton' is French for concrete). Interior co-designed with Ercol (UK), Muuto and Hay (Danish)."
- **kitchen_quality**: "good"  [Samsung + Ercol/Muuto/Hay furniture]
- **heating_type**: "communal"  [inferred]
- **notes**: "Beton is the most design-led of the Quintain buildings — architect-led interior program, named Scandi design partnerships (Muuto, Hay). Concrete-structural expression is deliberate."

### amenities
- **pool**: false
- **pool_notes**: ""
- **gym**: true
- **gym_quality**: "good"  [source: HomeViews Beton — "relatively a good size"]
- **concierge**: "daytime"  [part-time concierge per HomeViews]
- **sky_lounge**: false
- **co_working**: true  ["The Study" — work-from-home mezzanine, seating for 14]
- **dining_room**: false
- **cinema_room**: true  [dedicated cinema room — unique in the Quintain stack alongside Alameda]
- **rooftop_terrace**: true  [rooftop terrace with stadium arch views + lounge seating + dining areas + outdoor games]
- **parking**: true
- **bike_storage**: true  [dedicated bike workshop with repair facilities]
- **pet_policy**: "Pet-friendly (Quintain portfolio default)."
- **other_amenities**: ["The Gallery — entertainment rooms with pool table + 85-in-1 arcade machine", "The Snug — TV room with karaoke", "Bike workshop with repair facilities", "56 parcel lockers", "Rooftop outdoor games", "Landscaped terraces at first and roof level"]
- **overall_tier**: "strong"  [daytime concierge + good gym + co-working + cinema + rooftop + arcade/karaoke + bike workshop — rich amenity set; comparable to East Village `strong`, below Alameda `premium`]

### architecture
- **architects**: ["Cartwright Pickard"]  [source: https://www.cartwrightpickard.com/btr/beton/]
- **awards**: []  [no specific awards found]
- **is_signature**: false  [strong architectural identity but not landmark-destination status; comparable to Repton Gardens or The Robinson within campus]
- **style_notes**: "Glazed-brick exterior (paired with sister building The Hive), monochrome minimalist interior, exposed polished concrete columns and soffits, floor-to-ceiling windows with track lighting. 2020 completion. 150 homes. £30m build cost."

### long_form
- **full**: "Beton is Quintain's design-led 150-home building on the Western Lands of Wembley Park, adjacent to Alameda. Completed May 2020. Designed by Cartwright Pickard as a 'sister' building to the neighbouring Hive — shared glazed-brick elevation language. Named 'Beton' (French for concrete) for its exposed polished-concrete column-and-soffit interior. Interiors co-designed with Ercol, Muuto and Hay. Amenity program is one of the richer on the campus — The Gallery entertainment suite (pool table, 85-in-1 arcade), The Snug TV/karaoke room, The Study co-working mezzanine (seating for 14), a bike workshop with repair facilities, 56 parcel lockers, and a rooftop terrace with stadium arch views. Floor-to-ceiling windows and track lighting define the unit interiors. **Flag: current operator status unclear — not on the main Quintain Living portfolio page as of April 2026.**"
- **living_experience**: "3.83/5 across 48 HomeViews reviews. Design and amenity package consistently praised — clean communal spaces, three quick lifts, cinema room, gym, rooftop. Management is the weakest category (3.2/5) — 'helpful and polite' in specific interactions but with a lower overall score suggesting inconsistency. Value rated 3.5/5 — mid-pack perception. Parking described as tight during peak hours and busy during stadium events."
- **notable_features**: "Cartwright Pickard-designed with exposed-concrete structural expression (unique within the Quintain stack). 'Sister building' to The Hive. The Gallery (pool table + 85-in-1 arcade machine) and The Snug (karaoke room) are amenities that don't repeat elsewhere on the Quintain campus. Bike workshop with repair tools. 56 parcel lockers. Operator status needs verification."

### resident_signal
- **homeviews_score**: 7.66
- **homeviews_url**: "https://www.homeviews.com/development/beton-wembley-park-ha9"
- **summary**: "3.83/5 across 48 reviews. Management 3.2 (lowest), Value 3.5, design and amenities praised. Review count adequate for reasonable signal. Parking tightness on stadium event days is the most specific complaint."
- **common_complaints**: ["Parking tightness during peak hours and stadium events", "Management rating (3.2) notably lower than other categories", "Value rating (3.5) suggests rent feels high for offering", "Part-time concierge model — not 24h", "Operator/transition signals unclear"]
- **common_praise**: ["Modern design with clean communal spaces and natural lighting", "Three quick lifts — no waits", "Cinema room, gym, rooftop terrace as standout amenity mix", "Helpful and responsive ground-level staff", "Daily cleaning of communal spaces"]

### pricing
- **studio**: undefined  [not published on Quintain Living main site; beton-wembley.co.uk inaccessible]
- **one_bed**: undefined
- **two_bed**: undefined
- **bills_included**: false
- **notes**: "Pricing not publicly listed at research date. Affordability: **unclear**. Recommend re-research once operator status confirmed."
- **price_transparency**: "unknown"

---

## Alto by Quintain Living

> **CRITICAL FLAG — OWNERSHIP CHANGE**: Alto (Belcanto + Pienna towers) was **sold to Goldman Sachs Asset Management + Tene Living in 2023**. Continues to market under the Quintain Living brand for rentals per current listings, but Quintain is no longer the owner. Not on current Quintain Living portfolio page. Operator string may need updating to reflect Tene Living / GSAM ownership; or flag that Quintain Living brand remains the lettings manager. Referencing pathway needs verification — if Tene Living operates lettings in-house, qualification may differ from Homeppl.

### building_quality
- **epc_rating**: "B"  [source: wembleyparkresidential.co.uk — EPC Band B confirmed for referenced unit]
- **sound_insulation**: "good"  [2018 new-build; no dominant noise complaints in HomeViews (page was 404 at research but WebSearch surfaced positive soundscape signal)]
- **thermal_performance**: "good"  [EPC B]
- **layout_notes**: "1-bed and 2-bed apartments. Up to 19 floors across Belcanto + Pienna towers. 323 residential units total in the rental stock (362 including ancillary). Designer kitchens with integrated Siemens appliances (note: Siemens, not Samsung — stronger kitchen spec than the Quintain Living new-build standard). Open-plan living, floor-to-ceiling windows, private balconies."
- **kitchen_quality**: "excellent"  [source: wembleyparkresidential.co.uk — integrated Siemens appliances; named premium brand puts this above the Samsung-standard rest of the Quintain stack. Comparable to Gasholders (`excellent`) kitchen specification; clearly above Luna/Madison/Ferrum (`good`)]
- **heating_type**: "communal"  [inferred — 2018 BTR build]
- **notes**: "Alto is the Quintain portfolio's most affluent-spec building. Siemens-appliance kitchens, private spa, 24-hour concierge — the specification sits meaningfully above Luna/Ferrum/Madison. Ownership sold to GSAM/Tene Living in 2023; Quintain Living continues as lettings agent."

### amenities
- **pool**: false
- **pool_notes**: ""
- **gym**: true
- **gym_quality**: "good"  [exclusive gym; no specific review-surfaced signal on tier]
- **concierge**: "24h"  [confirmed across multiple sources]
- **sky_lounge**: true  [source: WebSearch result — "sky terrace" + residents' lounge]
- **co_working**: true  [work-from-home pods + residents' kitchen]
- **dining_room**: false  [residents' kitchen present, not a bookable private dining room]
- **cinema_room**: false
- **rooftop_terrace**: true  [rooftop terrace with stadium firework views]
- **parking**: true
- **bike_storage**: true
- **pet_policy**: "Pet policy under Tene Living / Quintain Living lettings — verify per listing."
- **other_amenities**: ["Private spa", "Residents' kitchen", "Sky terrace", "Dry cleaning service", "Work-from-home pods", "Concierge-managed parcel room"]
- **overall_tier**: "premium"  [24h concierge + good gym + sky terrace + co-working + spa + rooftop — private spa is a rare premium amenity; comparable to Gasholders `premium`]

### architecture
- **architects**: []  [not publicly credited in accessed sources]
- **awards**: ["Award-winning development (per Quintain/Wembley Park Residential marketing — specific awards not named)"]
- **is_signature**: false  [striking 19-floor towers are a regeneration landmark at Wembley Park but do not rise to dataset `is_signature: true` anchor (Gasholders / Landmark Pinnacle destinations)]
- **style_notes**: "Two 19-floor towers — Belcanto and Pienna — with a third lower block (Vivo) for affordable/discount-market sale. Striking regeneration landmarks. Floor-to-ceiling windows, private balconies, open-plan interiors. 2018 completion."

### long_form
- **full**: "Alto is the most premium-specified Quintain Wembley building — 323 residential units across two 19-floor towers (Belcanto and Pienna) plus a lower affordable-tenure block (Vivo). Completed 2018. Designer kitchens with integrated Siemens appliances, bespoke bathrooms, floor-to-ceiling windows, private balconies. Amenity package is premium-tier: 24-hour concierge, exclusive resident gym, private spa (rare in BTR), residents' kitchen, sky terrace, rooftop terrace with stadium firework views, work-from-home pods, dry cleaning. EPC Band B. Wembley Park station is an 8-minute walk. **Ownership note: Alto was sold by Quintain to Goldman Sachs Asset Management + Tene Living in 2023. Quintain Living remains the lettings brand per public listings, but the underlying owner is no longer Quintain.**"
- **living_experience**: "HomeViews reviews (development page was intermittently 404 during research) surface long-tenure positive signal — one reviewer reporting five years of residency, clean modern flats, appreciated amenity package, strong rooftop views during stadium events. Soft complaint on premium pricing and event-day noise from the stadium. The 2023 ownership change to GSAM/Tene Living has not — based on current review surface — produced the same operational-discontinuity complaints that Alameda's transition to Allsop generated."
- **notable_features**: "Siemens-appliance kitchens (above the Samsung-standard Quintain stack). Private spa (rare BTR amenity). 19-floor tower silhouette — one of the most recognisable residential elevations at Wembley Park. Ownership sold 2023 — Quintain Living remains the lettings brand but not the owner."

### resident_signal
- **homeviews_score**: undefined  [HomeViews development page returned 404 repeatedly during research — could not capture a clean aggregate score]
- **homeviews_url**: "https://www.homeviews.com/development/alto-wembley-park-ha9"
- **summary**: "HomeViews development page was intermittently unavailable at research date; score and review count could not be reliably captured. Indirect signal from search results suggests generally positive long-tenure reviews with the stadium-event-day noise and premium-price soft complaints typical of the Quintain stack."
- **common_complaints**: ["Premium pricing — flats feel expensive", "Noise from stadium events and concerts", "HomeViews page coverage thin — signal confidence reduced"]
- **common_praise**: ["Clean modern flats with big balconies", "Private spa + concierge + gym amenity mix", "Rooftop terrace views during stadium fireworks", "Lounge and residents' kitchen facilities", "Parking availability"]

### pricing
- **studio**: undefined  [Alto has no studios — 1-bed and 2-bed only]
- **one_bed**: {min: 1695, max: 2200, currency: "GBP", per: "month"}  [source: onthemarket.com — Belcanto 1-bed £1,695/mo listing; range reflects market distribution]
- **two_bed**: {min: 2550, max: 2900, currency: "GBP", per: "month"}  [source: onthemarket.com — Pienna 2-bed £2,550/mo]
- **bills_included**: false
- **notes**: "Pricing from current third-party listings (OnTheMarket). Verified 2026-04-17. Affordability: **comfortably-affordable** for 1-beds (£1,695 well within £2,250 envelope — this is one of the cheaper 1-beds in the Quintain stack). Comparable to Quintain Ferrum (`comfortably-affordable`). **stretch** for 2-beds."
- **price_transparency**: "listed"

---

## Solar by Quintain Living

### building_quality
- **epc_rating**: "B"  [portfolio-wide]
- **sound_insulation**: "unknown"  [source: HomeViews Solar — only 1 review, insufficient signal. Single review flagged persistent utility-room noise opposite one flat]
- **thermal_performance**: "good"  [EPC B + no thermal complaints in single review]
- **layout_notes**: "Studios 39-41 sqm, 1-beds 50 sqm. 383 units across studio to 3-bed. Modernist interior — warm earthy shades, luxe finishes, natural-environment-celebrating palette. Late-2025 completion."
- **kitchen_quality**: "good"  [Samsung + Kohler]
- **heating_type**: "communal"  [inferred — newest Quintain build]
- **notes**: "Solar is the newest actively-letting Quintain building (late 2025 completion). Review surface thin — only 1 HomeViews review — and signal cannot be trusted yet. The single review is extremely negative (2.0/5) citing concierge absent (based in adjacent Luna building), non-functional intercom, unreliable parcel room access, utility-room noise. These are likely early-occupation teething issues rather than structural."

### amenities
- **pool**: false
- **pool_notes**: ""
- **gym**: true
- **gym_quality**: "good"  [inferred — standard Quintain new-build spec]
- **concierge**: "daytime"  [source: HomeViews Solar — concierge absent from Solar building, staff based in adjacent Luna; effectively daytime-at-best]
- **sky_lounge**: false
- **co_working**: true
- **dining_room**: false
- **cinema_room**: false
- **rooftop_terrace**: true  [roof terrace with BBQ]
- **parking**: true
- **bike_storage**: true
- **pet_policy**: "Pet-friendly; on-site dog park."
- **other_amenities**: ["Landscaped gardens", "Kids' play area", "Resident lounge", "Roof terrace with BBQ", "Video entry + keyless access"]
- **overall_tier**: "strong"  [daytime concierge + gym + co-working + rooftop — standard Quintain campus package; comparable to Ferrum `strong`]

### architecture
- **architects**: []
- **awards**: []
- **is_signature**: false
- **style_notes**: "Natural modernist luxe — warm earthy shades, modernist interior vocabulary. Late-2025 completion. 383 units."

### long_form
- **full**: "Solar is one of Quintain Living's newest buildings — 383 units across studio to 3-bed, completed late 2025. 'Natural modernist luxe' interior vocabulary: warm earthy shades, modernist finishes, Samsung kitchens, Kohler bathrooms, bespoke furniture. Studios from £2,076 (unfurnished) or £2,379 (furnished), 1-beds from £2,364. Standard Quintain Living amenity package: state-of-the-art gym, resident lounge, work-from-home areas, roof terrace with BBQ, landscaped gardens, kids' play area, dog park, underground parking, bike storage. Wembley Park station is a six-minute walk. 24-hour support line — concierge is currently shared with adjacent Luna building."
- **living_experience**: "Only 1 HomeViews review at research date (2.0/5) — review surface too thin for reliable signal. The one review is extremely negative citing concierge absent from the building (staff based in adjacent Luna), non-functional intercom requiring manual ground-floor visits, unreliable parcel room access, and persistent utility-room noise opposite one flat. These read as early-occupation operational teething issues rather than structural building problems. Design and location are rated 5/5 by the same reviewer."
- **notable_features**: "383 units — one of the largest Quintain Living blocks. Late-2025 completion — newest actively-letting building on the campus. Concierge currently shared with adjacent Luna building. Unfurnished studios available at £2,076 — flexibility for renters bringing own furniture (not every Quintain building offers unfurnished)."

### resident_signal
- **homeviews_score**: 4.0
- **homeviews_url**: "https://www.homeviews.com/development/solar-wembley-park-ha9"
- **summary**: "Too few reviews for reliable signal (1 review on HomeViews as of research date). The single review is 2.0/5 — negative on operational delivery (concierge, intercom, parcel room, utility-room noise) but 5.0/5 on location and design."
- **common_complaints**: ["Intercom non-functional — manual ground-floor visits required", "Concierge shared with adjacent Luna building — not on site", "Parcel room access unreliable", "Persistent utility-room noise opposite one flat", "Delayed management response times"]
- **common_praise**: ["Location — transport connectivity and area amenities", "Design — modernist interior quality", "Area cleanliness and safety"]

### pricing
- **studio**: {min: 2076, max: 2379, currency: "GBP", per: "month"}  [source: quintainliving.com/solar — unfurnished £2,076 / furnished £2,379, 8% discount active]
- **one_bed**: {min: 2364, max: 2575, currency: "GBP", per: "month"}  [4% discount]
- **two_bed**: undefined  [not currently listed in available stock]
- **bills_included**: false
- **notes**: "Verified 2026-04-17. Unfurnished studio option is unusual for the Quintain stack and £300/mo cheaper than the furnished equivalent. Affordability: **at-budget** for unfurnished studios (£2,076 close to £2,250 envelope); **stretch** for furnished studios and 1-beds. Comparable to Madison (`at-budget`)."
- **price_transparency**: "listed"

---

## North East Lands

> **FLAG — POSSIBLE DUPLICATION WITH LUNA**: Research surfaces that **Luna IS NE03 North East Lands** (per 1newhomes.com). The dataset lists Luna and North East Lands as separate projects; this may be double-counting. The North East Lands masterplan contains: **NE01** (770-bed student accommodation — NOT residential BTR, should be excluded); **NE02** (487 flats, 2025-2026 completion — not yet open); **NE03 = Luna** (282 apartments, 2024 — already in dataset). **Recommend: re-scope this project to represent NE02 specifically (the next-phase 487-flat block completing 2025-2026), OR remove as duplicate of Luna.**

> The enrichment below is written assuming re-scope to NE02 specifically. If re-scoped differently, re-research required.

### building_quality
- **epc_rating**: "B"  [inferred — Quintain portfolio standard]
- **sound_insulation**: "unknown"  [not yet occupied]
- **thermal_performance**: "unknown"  [not yet occupied]
- **layout_notes**: "NE02 contains 487 flats across 10-27 storey buildings. Unit mix not publicly confirmed — expected studio to 3-bed following Quintain campus standard."
- **kitchen_quality**: "unknown"  [specifications not yet public; expected Samsung + Kohler per Quintain standard]
- **heating_type**: "communal"  [inferred]
- **notes**: "NE02 is still in delivery — completion 2025-2026 per public delivery schedule. Phase 1 of the 12-acre North East Lands site (2,000+ homes across full masterplan). £227m Sisk construction contract. Most enrichment fields cannot be reliably populated until building opens and review surface establishes."

### amenities
- **pool**: false  [no Quintain building has a pool]
- **pool_notes**: ""
- **gym**: true  [inferred — Quintain campus standard]
- **gym_quality**: "unknown"  [not yet open]
- **concierge**: "daytime"  [inferred — Quintain standard]
- **sky_lounge**: false  [not publicly confirmed]
- **co_working**: true  [campus standard]
- **dining_room**: false
- **cinema_room**: false
- **rooftop_terrace**: true  [roof terraces on each block per campus standard]
- **parking**: true  [underground — campus standard]
- **bike_storage**: true
- **pet_policy**: "Pet-friendly (Quintain campus default)."
- **other_amenities**: ["Communal gardens", "Public park on site", "Roof terraces on each block"]
- **overall_tier**: "strong"  [inferred — matches Quintain campus standard]

### architecture
- **architects**: []  [not publicly credited in accessed sources]
- **awards**: []
- **is_signature**: false  [large-scale campus delivery, not destination architecture]
- **style_notes**: "NE02 will contribute to the 12-acre North East Lands phase. 10-27 storey building heights. Communal gardens + public park + roof terraces on each block. Campus-scale placemaking. John Sisk & Son appointed contractor (£227m)."

### long_form
- **full**: "North East Lands NE02 is Quintain's next-phase 487-flat BTR delivery at Wembley Park, completing 2025-2026. Part of the 12-acre North East Lands masterplan targeting 2,000+ homes in total (NE01 is a separate 770-bed student accommodation; NE03 has already delivered as Luna). 10-27 storey buildings with communal gardens, a public park, and roof terraces on each block. John Sisk & Son holds the £227m construction contract. Specification expected to match the current Quintain Living standard (Samsung kitchens, Kohler bathrooms, communal heating, underground parking, full amenity campus package). When NE02 opens, Quintain Living's total BTR unit count at Wembley Park passes 5,000."
- **living_experience**: "Building is still in delivery — no lived-experience signal available. Enrichment to be completed post-opening."
- **notable_features**: "Largest single Quintain delivery (487 flats). Completes adjacent public park. 10-27 storey range across the phase. Contractor: John Sisk & Son on £227m fixed-price contract. Brings Quintain Living's campus total to ~5,000 units."

### resident_signal
- **homeviews_score**: undefined  [not yet open]
- **homeviews_url**: undefined
- **summary**: "Building is still in delivery — no reviews exist yet."
- **common_complaints**: []
- **common_praise**: []

### pricing
- **studio**: undefined  [not yet listed]
- **one_bed**: undefined
- **two_bed**: undefined
- **bills_included**: false
- **notes**: "Pricing not published. Expected range per Quintain campus standard: studios £1,800-£2,200, 1-beds £2,100-£2,500, 2-beds £2,600-£3,200. Affordability: **unclear** pending pricing publication."
- **price_transparency**: "unknown"

---

## Sources

| URL | Accessed | Type |
|---|---|---|
| https://www.quintainliving.com/ | 2026-04-17 | operator |
| https://www.quintainliving.com/luna | 2026-04-17 | operator |
| https://www.quintainliving.com/ferrum | 2026-04-17 | operator |
| https://www.quintainliving.com/madison | 2026-04-17 | operator |
| https://www.quintainliving.com/canada-gardens | 2026-04-17 | operator |
| https://www.quintainliving.com/landsby | 2026-04-17 | operator |
| https://www.quintainliving.com/solar | 2026-04-17 | operator |
| https://www.quintainliving.com/apartment-buildings | 2026-04-17 | operator |
| https://www.quintainliving.com/sustainable-homes | 2026-04-17 | operator |
| https://www.homeviews.com/development/luna-ha9 | 2026-04-17 | homeviews |
| https://www.homeviews.com/development/ferrum-ha9 | 2026-04-17 | homeviews |
| https://www.homeviews.com/development/madison-ha9 | 2026-04-17 | homeviews |
| https://www.homeviews.com/development/canada-gardens-wembley-park-ha9 | 2026-04-17 | homeviews |
| https://www.homeviews.com/development/landsby-wembley-park-ha9 | 2026-04-17 | homeviews |
| https://www.homeviews.com/development/alameda-wembley-park-ha9 | 2026-04-17 | homeviews |
| https://www.homeviews.com/development/beton-wembley-park-ha9 | 2026-04-17 | homeviews |
| https://www.homeviews.com/development/solar-wembley-park-ha9 | 2026-04-17 | homeviews |
| https://www.homeviews.com/development/alto-wembley-park-ha9 | 2026-04-17 | homeviews |
| https://www.quintain.co.uk/wembley-park/locations/alameda | 2026-04-17 | developer |
| https://www.quintain.co.uk/wembley-park/locations/alto | 2026-04-17 | developer |
| https://www.quintain.co.uk/our-projects/quintainliving/pipeline/beton | 2026-04-17 | developer |
| https://www.quintain.co.uk/wembley-park/locations/north-east-lands | 2026-04-17 | developer |
| https://platform5architects.com/project/alameda-Quintain-living | 2026-04-17 | press |
| https://www.flanaganlawrence.com/alameda | 2026-04-17 | press |
| https://www.cartwrightpickard.com/btr/beton/ | 2026-04-17 | press |
| https://wembleyparkresidential.co.uk/property/belcanto-apartments-alto-wembley-park/ | 2026-04-17 | press |
| https://wembleymatters.blogspot.com/2024/01/quintain-sell-off-two-more-wembley-park.html | 2026-04-17 | press |
| https://www.constructionenquirer.com/2022/09/28/sisk-fixes-price-on-227m-quintain-wembley-flats-job/ | 2026-04-17 | press |
| https://1newhomes.com/north-east-lands-london | 2026-04-17 | press |
| https://1newhomes.com/ne02-north-east-lands-london | 2026-04-17 | press |
| https://www.trustpilot.com/review/quintainliving.com | 2026-04-17 | press |
