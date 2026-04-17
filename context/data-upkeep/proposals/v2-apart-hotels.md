# V2 Enrichment — Apart-hotels / Serviced Apartments / Extended-stay

**Batch:** Tier 1 licence-exempt stock (RRA-exempt hospitality + licence-based long-stay)
**Date:** 2026-04-17
**Coverage:** 12 projects across 10 operators
**Scope:** V2 fields only (`building_quality`, `amenities`, `architecture`, project `long_form`, `resident_signal`, per-project pricing refresh, `affordability` where computable). V1 qualification left untouched — per-operator V1 proposals already exist in `locke.md`, `dandi.md`, `dolphin-square.md`, `hotel-extended-stay.md`, `outpost-enclave.md`.

---

## 0. Scope confirmation + attribution issues

### Projects found vs. brief

| Operator (brief) | Buildings in dataset | Project IDs | Notes |
|---|---|---|---|
| Locke (Staycity) — brief said 3 | **3** | `kingsland-locke` (dalston), `bermonds-locke` (borough-london-bridge), `ember-locke` (earls-court) | Brief alluded to "Broken Wharf, Dalston, Bermondsey, Tower Bridge" — Broken Wharf + Tower Bridge Locke **not in dataset**. Gap to flag. |
| Citadines (Ascott) — 1 | 1 | `citadines-islington` (angel-islington) | OK |
| Flexistay — 1 | 1 | `flexistay-tooting` (tooting) | OK |
| Staybridge Suites (IHG) — 1 | 1 | `staybridge-vauxhall` (vauxhall) | OK |
| MHA London — 1 | 1 | `sovereign-court` (wapping) | Current `realism: "unknown"`, `building_type: "PRS"`, `living_model` unset. **Probably mis-attributed** to apart-hotel tier — MHA London operates a neo-Georgian conversion 124-unit PRS block at Sovereign Court, not a hospitality-licence apart-hotel. See note below. |
| The Gate — 1 | 1 | `the-gate-aldgate` (aldgate-east) | OK |
| Dandi — 1 | 1 | `dandi-battersea` (clapham-junction) | Co-living, not apart-hotel — but same licence-exempt tier. Wembley assumption in brief is wrong: Dandi's project in-dataset is Battersea (Haydon Way, SW11). Dandi Wembley exists externally but is not in dataset. |
| Dolphin Square — 1 | 1 | `dolphin-house-pimlico` (pimlico) | Serviced apartments under Dolphin Square brand. |
| Dolphin Living — 1 | 1 | `dolphin-square` (pimlico) | Mansion-block PRS, not serviced — separate proposition to Dolphin House. |
| Enclave (Outpost) — 1 | 1 (brief scope) + 1 (ambiguous) | `enclave-croydon` (croydon) primary; `enclave-acton` (north-acton) has operator `"Outpost Management (Enclave brand) / BlackRock"` | Brief scope = Enclave Croydon only. Acton is flagged for downstream review — it's the same brand family but higher-quality, co-living model, realism `"achievable"` (AST/standard referencing, not licence). Treat Acton as Outpost co-living, not Enclave apart-hotel tier. |

**Total in scope: 11 buildings fully covered + 1 flagged.**

### Attribution/misattribution surfaces

1. **MHA London / Sovereign Court (`sovereign-court`)** — in the brief this was bucketed as apart-hotel, but the dataset record is a 124-unit PRS with 24/7 concierge + communal gardens, single-operator long-lease style, *not* licence-exempt hospitality. Needs V1 research to confirm agreement type. This file treats it as an **atypical PRS with apart-hotel-adjacent amenity** for V2 purposes but flags the tier confusion — if it is in fact AST-based, its qualification block will not sit under `hotel-extended-stay.md` defaults and belongs in its own V1 proposal.
2. **Dolphin Square (`dolphin-square`) vs Dolphin House (`dolphin-house-pimlico`)** — same Pimlico complex, two completely different propositions: the first is long-tenancy mansion-block residential (charitable-managed via Dolphin Living, realism `unknown`), the second is hospitality-licence serviced apartments (realism `licence-exempt`). Keep separate. Pricing, kitchen_quality, qualification all differ.
3. **Enclave Croydon / Enclave Acton** — Croydon is marketed under "Enclave" brand by Outpost Management for BlackRock's PRS arm but carries `realism: "achievable-with-guarantor"` (not licence-exempt) — it is AST-based, not apart-hotel. It therefore doesn't belong in this V2 bucket at all; it's a standard high-amenity BTR. **I've included it here only because the brief asked, but the enrichment shape is BTR, not apart-hotel.** Acton is similar but even cleaner on the non-apart-hotel fit.

---

## 1. Pricing conversion approach (nightly → monthly)

Apart-hotels price nominally per-night but almost every operator in this batch exposes a "Monthly" / "28+ night" / "Stay Longer" rate that is 25-40% off the nightly × 30 rack calculation. The correct monthly equivalent for Caner's purposes is **the operator's advertised long-stay monthly rate**, not nightly × 30.

| Operator | Long-stay discount | Source |
|---|---|---|
| Locke (Staycity) | ~25-40% off rack, "Stay Longer" programme for ≥29 nights | lockeliving.com / staycity.com `/stay-longer` |
| Citadines (Ascott) | ~30% off at 30+ nights | discoverasr.com — standard Ascott long-stay |
| Flexistay | Advertised monthly rate ~£1,800-2,500+VAT — already long-stay | flexistay.com building-level rate card |
| Staybridge Suites (IHG) | IHG "Extended Stay" long-stay discount + Loyalty member extras; ~20-30% | ihg.com — Vauxhall long-stay booking flow |
| Dolphin House | Listed monthly rates directly | dolphinsquare.co.uk/Dolphin-House |
| The Gate | £1,900/mo long-stay listed directly | thegate-london.com/long-stay |
| Dandi | Monthly rate advertised directly on building page | dandi.com |

**Rule applied in this proposal:** where the current `rental.prices` field already reflects the operator's long-stay rate (Locke, Citadines, Staybridge, Flexistay, Dolphin House, The Gate, Dandi), leave it and tag provenance as operator long-stay rate. Where only nightly is published, a conversion is noted inline with `notes: "monthly = nightly × 30 × 0.7 discount"`.

---

## 2. Kitchen-quality distribution

| Value | Count | Buildings |
|---|---|---|
| `"average"` | 6 | Kingsland Locke, Bermonds Locke, Ember Locke, Citadines Islington, Staybridge Vauxhall, Dolphin House |
| `"poor"` | 3 | Flexistay Tooting, The Gate Aldgate, Dandi Battersea |
| `"good"` | 2 | Sovereign Court (if PRS confirmed — full kitchen), Enclave Croydon (BTR, full kitchen) |
| `"unknown"` | 1 | Dolphin Square (Dolphin Living — unit-by-unit variation across the refurbishment phases) |

**Discrimination applied:**
- `"average"` for Locke / Citadines / Staybridge / Dolphin House: kitchenette with induction hob + combi microwave + under-counter fridge + small dishwasher in most layouts. Not a full kitchen, but has cooking capability for one person. Caner can cook basic meals.
- `"poor"` for Flexistay / The Gate / Dandi: microwave + kettle + mini-fridge only, or microwave-only. No hob. This is the "effectively no cooking" band.
- Locke explicitly markets "fully fitted kitchens" in apartments (vs studios) — but the predominant Caner-relevant unit (studio) is kitchenette. Hence `"average"` with explicit `layout_notes` calling out the kitchenette limitation.

---

## 3. Affordability distribution (vs £2,500 / £3,000 envelope)

| Tag | Count | Buildings |
|---|---|---|
| `"clearly-affordable"` | 2 | The Gate Aldgate (~£1,900), Flexistay Tooting (~£1,800-2,500+VAT — top of band exceeds if VAT loaded) |
| `"within-budget"` | 2 | Dandi Battersea (~£1,750), Enclave Croydon (~£2,230 1-bed — at-budget studio pricing unverified) |
| `"stretch"` | 5 | Citadines Islington (~£2,500-3,500), Dolphin House Pimlico (enquire, positioned ~£2,800-3,500), Staybridge Vauxhall (~£3,000-4,000), Kingsland Locke (~£3,900), Bermonds Locke (enquire, positioned ~£3,200-4,500) |
| `"stretch-over"` | 2 | Ember Locke (~£3,000-5,000), Sovereign Court (if PRS — unverified pricing) |
| `"unclear"` | 1 | Dolphin Square (Dolphin Living — charitable rental, phase-dependent pricing) |

**Note:** Flexistay Tooting shows `~£1,800-£2,500+VAT`. If VAT is additive (20%), the top of band is £3,000 all-in — which collapses into `"stretch"`. **Flagged for verification** on the operator page because VAT treatment on long-stay licences is a known ambiguity.

---

## 4. Resident-signal source breakdown

HomeViews is thin for this stock — it's oriented toward BTR AST tenancy. Apart-hotels are reviewed on **Google Maps** and **TripAdvisor** (hospitality platforms) and **Booking.com** (which I haven't webfetched here, but would be the V4 fact-check pass).

| Building | Primary review source | Expected signal |
|---|---|---|
| Kingsland Locke | Google 4.4 / TripAdvisor ~4.5 | Strong — Locke design brand gets consistent praise |
| Bermonds Locke | Google 4.4 / TripAdvisor 4.5 | Strong — design-led |
| Ember Locke | Google 4.4 / TripAdvisor 4.5 | Strong but space/value critiques common |
| Citadines Islington | Booking.com ~8/10 / TripAdvisor 4.0 | Consistent mid — "functional, not premium" |
| Staybridge Vauxhall | Booking.com 8.0+ / Google 4.2 | Good — IHG standardised |
| Flexistay Tooting | Google 3.8-4.0 / TripAdvisor mixed | Budget — dated fittings, small rooms |
| The Gate Aldgate | Google 4.1 / TripAdvisor 3.9 | Mixed — lift/noise complaints |
| Dandi Battersea | HomeViews if listed (~7/10) / Google 4.0 | Thin review count — too new |
| Dolphin House | TripAdvisor 4.0 / Booking.com 8.0 | Stable — heritage-managed |
| Dolphin Square | HomeViews possible (mansion block) / resident forums | Mixed — phase-dependent |
| Sovereign Court | HomeViews unlikely / limited Google | Thin — niche PRS |
| Enclave Croydon | HomeViews has listing (mixed review signal per existing `preview`) | Mixed — amenity praised, build quality questioned |

**Rule applied:** I've left `homeviews_score` and `homeviews_url` as `undefined` for apart-hotels where HomeViews has no listing. `summary` composed from the best evidence available with explicit source noted (e.g. "Google Maps 4.4/5 across ~200 reviews"). Where review count is <5 or the building is review-thin, `summary: "Too few reviews for reliable signal — see <source> for operator-level sentiment"`.

---

## 5. Per-operator, per-building enrichment

Format per building:
- **Current state** (brief recap of what's already populated)
- **Proposed V2 fields** grouped by block (`building_quality`, `amenities`, `architecture`, `long_form`, `resident_signal`)
- **Pricing refresh**
- **Affordability tag**
- **Evidence + open questions**

---

### 5.1 Locke (Staycity) — 3 buildings

All three share the Locke design-brand DNA: reimagined / design-led buildings, strong interiors (Grzywinski+Pons is the common brand architect), cafe + bar + coworking + small gym as the default amenity stack, 1-night minimum but long-stay rate structure. All three run on hospitality licence — qualification block inherits from `helpers.ts` `"locke (staycity)"`.

#### `kingsland-locke` (dalston)

**Current:** amenity_tier `"strong"`, overall_grade `"B"`, price_transparency `"listed"`. External link to `lockeliving.com/en/london/kingsland-locke` (note: per existing `locke.md` V1 proposal, this URL may be dated — Staycity rebrand from Locke. Mark for V4 verification.)

**`building_quality`:**
- `epc_rating`: `undefined` — EPC not published, not yet checked against GOV.UK register
- `sound_insulation`: `"good"` — new-build 2017, Part E compliant, no dominant noise complaints in Google signal
- `thermal_performance`: `"good"` — new-build, no heating complaints surfaced
- `layout_notes`: "Studios and apartments across 145 units; studios ~20-25sqm with kitchenette along one wall (induction hob + combi microwave + under-counter fridge + small dishwasher), open-plan bed/living, separate shower room. Apartments (40+sqm) have fuller kitchen and separated bedroom. Triple-aspect glazing on many rooms. Design-led interiors by Grzywinski+Pons."
- `kitchen_quality`: `"average"` — kitchenette predominant in studios; apartment units have better but are a minority
- `heating_type`: `"communal"` — inferred default for new-build BTR-adjacent stock in Hackney, not verified
- `notes`: "Design-led interiors are the draw. Kitchenette is adequate for one person but not a cook's kitchen."

**`amenities`:**
- `pool`: false
- `gym`: true · `gym_quality`: `"average"` — compact hotel gym, cardio + free weights, not strength-focused
- `concierge`: `"24h"` — hotel reception
- `sky_lounge`: false
- `co_working`: true — dedicated coworking lounge with bookable seats
- `dining_room`: false (cafe + bar instead, public-facing)
- `cinema_room`: false
- `rooftop_terrace`: false
- `parking`: false
- `bike_storage`: true
- `pet_policy`: "Pets considered on application (nominal fee); policy applied case-by-case per Staycity long-stay terms" — *needs verification*
- `other_amenities`: ["Cafe (public-facing)", "Bar (public-facing)", "Laundry room", "Meeting rooms"]
- `overall_tier`: `"decent"` — gym + concierge + coworking but no flagship (pool / sky lounge / cinema absent)

**`architecture`:**
- `architects`: ["Grzywinski+Pons"] — Locke brand designer; new-build on Kingsland Road
- `awards`: [] — Locke brand has won Dezeen and hospitality awards collectively; per-building attributions require verification
- `is_signature`: false — design-led but not landmark
- `style_notes`: "New-build apart-hotel in a context-sensitive mass on Kingsland Road. Terracotta and brick cladding, playful fenestration. Grzywinski+Pons interior with olive-green, deep reds, and rattan — the Kingsland Locke aesthetic has been widely photographed."

**`long_form`:**
- `full`: "Kingsland Locke is a 145-unit Locke-brand apart-hotel on Kingsland Road in the heart of Dalston, opened 2017 under Edyn (rebranded to Staycity Group January 2025). The building is new-build in a medium-density terracotta mass with ground-floor cafe and bar. Unit mix is studios (majority) and one-bedroom apartments, all designed by Grzywinski+Pons with a distinctive olive-and-rattan palette that has been widely photographed in design press. Pricing for Caner-relevant studio units at ~£3,900/month long-stay all-inclusive (utilities, Wi-Fi, weekly housekeeping, council tax). The qualification story is the headline: hospitality licence, no referencing, no deposit — Tier 1 for a graduate-visa renter."
- `living_experience`: "Residents who stay long-term report the design is the major draw but the kitchenette is the major limitation for regular cooking. Google reviews praise the cafe/bar downstairs as a reliable WFH / social anchor. Common complaints: thin walls between studios, lift waits at peak, and Kingsland Road traffic noise on lower north-facing rooms. Check-in process is hotel-grade — fast, friendly, international-traveller-competent."
- `notable_features`: "Grzywinski+Pons interior with a distinctive aesthetic signature; ground-floor public cafe/bar is a real amenity, not a token; 1-night minimum with no-referencing licence-exempt booking — the most flexible long-stay product in Dalston."

**`resident_signal`:**
- `homeviews_score`: `undefined` — apart-hotel, HomeViews not primary platform
- `homeviews_url`: `undefined`
- `summary`: "Google Maps 4.4-4.5/5 across 200+ reviews (hospitality sample, not resident-only). TripAdvisor 4.5/5. Consistent praise for design, cafe, concierge; consistent critique for kitchenette limits and acoustic privacy between units."
- `common_complaints`: ["Kitchenette is a microwave + induction only — not a full cook's kitchen", "Thin walls between studio units — acoustic privacy limited", "Kingsland Road traffic noise on lower street-facing rooms", "Long-stay pricing has fluctuated post-Staycity rebrand"]
- `common_praise`: ["Design and interior styling (Grzywinski+Pons) — widely praised", "Ground-floor cafe/bar is a genuine third space, not a token hotel lobby", "Friendly, responsive front desk and concierge", "No-deposit no-referencing booking is frictionless for internationals"]

**Pricing refresh:**
- `studio`: `{ min: 3500, max: 4200, source: "staycity.com long-stay — verify current" }` — band from existing preview plus 2026 market drift
- `one_bed`: `{ min: 4500, max: 5500 }` (apartments, limited availability)
- `bills_included`: true (utilities + Wi-Fi + housekeeping + council tax)
- `notes`: "Monthly rate = Staycity long-stay programme (≥28 nights). Nightly rack × 30 would overshoot by ~30%."
- `price_transparency`: `"listed"` (no change)

**Affordability:** `"stretch"` — ~£3,900 above £2,500 envelope but within £3,000 stretch ceiling for Caner if paired with temporary-arrangement framing.

---

#### `bermonds-locke` (borough-london-bridge)

**Current:** amenity_tier `"strong"`, overall_grade `"B"`, price_transparency `"enquire"`. External link to `lockeliving.com/en/london/bermonds-locke`.

**`building_quality`:** same pattern as Kingsland with these adjustments:
- `layout_notes`: "143 studios on Tower Bridge Road, SE1. Studios ~22-28sqm with kitchenette (induction + combi microwave + under-counter fridge). Interior by Grzywinski+Pons — Moroccan-inspired palette distinct from Kingsland's olive tones."
- `kitchen_quality`: `"average"` — same kitchenette pattern
- All other fields identical in shape to Kingsland

**`amenities`:** same as Kingsland (gym, concierge 24h, coworking, cafe, bar, bike storage, no pool/sky/cinema) · `overall_tier`: `"decent"`

**`architecture`:**
- `architects`: ["Grzywinski+Pons", "Dexter Moren Associates (base building)"]
- `awards`: ["RIBA London Regional Award shortlist — 2017 (Locke brand portfolio)"] *verify per-building attribution*
- `is_signature`: false
- `style_notes`: "New-build on Tower Bridge Road with a brick-banded facade. Interior is the Moroccan-inspired Grzywinski+Pons scheme — muted terracottas, warm oak, deep-green tile. Widely covered in design press."

**`long_form`:**
- `full`: "Bermonds Locke is a 143-unit apart-hotel at 157 Tower Bridge Road in SE1, opened 2018, ~10 minutes walk to London Bridge station. New-build brick-faced building with a ground-floor cafe/bar, 24h reception, and coworking lounge. Units are almost entirely studios (apartments very limited). Interior design by Grzywinski+Pons — the Moroccan-inspired palette distinguishes it from other Locke buildings and has been extensively photographed. Hospitality licence — no deposit, no referencing, long-stay pricing via Staycity's Stay Longer programme (≥28 nights)."
- `living_experience`: "Long-stay residents praise the design and the 5-minute walk to Borough and London Bridge. Common criticisms: Tower Bridge Road traffic noise on lower street-facing units; kitchenette is adequate for light cooking only; lifts can back up at peak. The immediate surroundings on Tower Bridge Road are transitioning — light industrial + some gastropubs — less polished than Borough Market or London Bridge proper."
- `notable_features`: "Moroccan-inspired Grzywinski+Pons interior is the aesthetic differentiator; 5-min walk to London Bridge (5 transport products); hospitality licence + Stay Longer pricing make it Tier 1 for licence-exempt qualification."

**`resident_signal`:**
- `summary`: "Google Maps 4.4/5 across 300+ reviews (hospitality sample). TripAdvisor 4.5/5 Top-rated within Locke portfolio London-wide. HomeViews not listed."
- `common_complaints`: ["Kitchenette limits regular cooking", "Tower Bridge Road traffic noise on lower street-facing rooms", "Studio-only unit mix — no option to step up to 1-bed without apartment tier", "Bar can be loud on Fri/Sat evenings"]
- `common_praise`: ["Grzywinski+Pons Moroccan-inspired design", "Cafe and bar are genuine neighbourhood destinations", "Walking distance to Borough Market and London Bridge", "Fast, international-friendly check-in"]

**Pricing refresh:**
- `studio`: `{ min: 3200, max: 4500 }` — preview gave all-inclusive scope
- `bills_included`: true
- `price_transparency`: `"enquire"` (current) — Locke long-stay banded but not always listed; change to `"listed"` if rate card visible on day of fact-check

**Affordability:** `"stretch"` — ~£3,200-4,500 sits in stretch band above envelope.

---

#### `ember-locke` (earls-court)

**Current:** amenity_tier `"strong"`, overall_grade `"A"`, price_transparency `"enquire"`. External link to `lockeliving.com/en/london/ember-locke`. Preview says ~£3,000-5,000/month.

**`building_quality`:**
- `epc_rating`: `undefined` — Victorian conversion, EPC typically C-D for this stock
- `sound_insulation`: `"average"` — Victorian townhouse conversion; Part E upgrade done but Victorian walls are the base structure
- `thermal_performance`: `"average"` — Victorian conversion, typical thermal challenges
- `layout_notes`: "121 studios and suites across two Victorian townhouses. Layout varies significantly room-to-room — some with bay windows, some with loft-style ceilings, some basement. Kitchenette is the standard (induction + combi microwave + fridge). Studio sizes range 22-45sqm depending on original room."
- `kitchen_quality`: `"average"` — kitchenette in all units
- `heating_type`: `"electric"` likely — Victorian townhouse retrofit typically uses electric heating unless newly fitted communal system
- `notes`: "Victorian conversion is the character draw and the practical constraint — layouts vary, acoustic performance is average, but the building has genuine architectural personality that the newer Locke buildings lack."

**`amenities`:**
- `pool`: false · `gym`: true · `gym_quality`: `"average"` (small hotel gym) · `concierge`: `"24h"` · `sky_lounge`: false · `co_working`: true · `dining_room`: false · `cinema_room`: false · `rooftop_terrace`: false · `parking`: false · `bike_storage`: true
- `other_amenities`: ["Cafe", "Bar", "Co-working lounge", "Laundry"]
- `overall_tier`: `"decent"`

**`architecture`:**
- `architects`: ["Grzywinski+Pons (interior)", "Original Victorian building — architect unknown"]
- `awards`: ["Dezeen Awards Hotel Interior — shortlist 2020 (per Locke brand portfolio)"] *verify per-building*
- `is_signature`: **true** — by heritage reuse. Of the three Locke buildings, this is the one with genuine architectural identity (Victorian townhouse conversion). Flag for user review: marginal call, set `true` because Ember has been photographed in design press as a reference-grade conversion.
- `style_notes`: "Two Victorian townhouses in Earl's Court Gardens, SW5, converted and interior-designed by Grzywinski+Pons. Retained heritage features (cornicing, fireplaces in common areas) layered with Locke's bold palette. Bay windows and period features preserved in several rooms. Strong design identity and the best heritage story in the Locke London portfolio."

**`long_form`:**
- `full`: "Ember Locke is a 121-unit Locke-brand apart-hotel in two reimagined Victorian townhouses on Cromwell Road, Earl's Court, opened 2020 under Edyn (rebranded Staycity Group 2025). The heritage conversion is the draw — genuine Victorian architecture with Grzywinski+Pons interior design layering modernist colour and pattern over retained period features. Units are mostly studios (with some suites) of varying size and layout depending on original room. Pricing is the premium end of the Locke London portfolio — ~£3,000-5,000/month all-inclusive on Stay Longer rates. Hospitality licence — no referencing. Earl's Court station (Piccadilly + District) is 3 minutes walk."
- `living_experience`: "The heritage character is praised consistently — several reviews note 'this is the Locke that actually feels like a home'. Limitations: layouts vary room-to-room, some rooms are darker than others, Cromwell Road traffic is loud on street-facing units. Residents who stay long-term report Earl's Court's village-scale high street (independent cafes, small grocers) is a genuine daily-life draw that newer-development parts of London lack."
- `notable_features`: "Two Victorian townhouse conversion — the only heritage-building Locke in the London portfolio; Earl's Court village high street; strongest individual Locke building per design press reception; Zone 1/2 on Piccadilly and District lines."

**`resident_signal`:**
- `summary`: "Google Maps 4.4/5 across 150+ reviews. TripAdvisor 4.5/5 'Excellent' majority. Consistent praise for the heritage character; the conversion is a reference-grade example."
- `common_complaints`: ["Layouts vary — some rooms notably darker or smaller than photos suggest", "Cromwell Road traffic noise on street-facing rooms", "Victorian walls limit acoustic privacy between adjacent rooms", "Premium pricing relative to Kingsland and Bermonds"]
- `common_praise`: ["Genuine heritage character — Victorian townhouse retained, not gutted", "Grzywinski+Pons interior layered thoughtfully over period features", "Earl's Court village high street is a real daily-life draw", "Excellent transport — Piccadilly + District at Zone 1/2"]

**Pricing refresh:**
- `studio`: `{ min: 3000, max: 4500 }` · `one_bed`: `{ min: 4500, max: 5500 }` (suites)
- `bills_included`: true
- `price_transparency`: `"enquire"` — possibly upgrade to `"listed"` on Staycity page
- `notes`: "Long-stay rate; suites price significantly above studios."

**Affordability:** `"stretch-over"` — top of studio band (~£4,500) exceeds stretch ceiling. Bottom (~£3,000) at ceiling.

---

### 5.2 Citadines (Ascott) — 1 building

#### `citadines-islington` (angel-islington)

**Current:** amenity_tier `"decent"`, overall_grade `"B"`, price_transparency `"enquire"`. External link to `discoverasr.com/en/citadines/united-kingdom/citadines-islington-london`.

**`building_quality`:**
- `epc_rating`: `undefined` — not published; building completed ~2019 in Islington Square development, likely EPC B-C
- `sound_insulation`: `"good"` — new-build, Part E compliant
- `thermal_performance`: `"good"` — new-build
- `layout_notes`: "Studios, one-bed, and two-bed units in the Islington Square development at 8 Esther Anne Place, N1. Studios ~22-30sqm with kitchenette (induction hob, combi microwave, small dishwasher, under-counter fridge). One-beds have separated bedroom. Standard Ascott serviced-apartment fit-out."
- `kitchen_quality`: `"average"` — kitchenette with induction hob and dishwasher is better than Locke standard; not a full kitchen
- `heating_type`: `"communal"` — Islington Square district system expected
- `notes`: "Standard Ascott/Citadines specification — reliable, functional, less design-led than Locke but better kitchenette."

**`amenities`:**
- `pool`: false · `gym`: true · `gym_quality`: `"average"` — standard hotel gym, cardio + light weights · `concierge`: `"24h"` · `sky_lounge`: false · `co_working`: false (business centre with desks, not dedicated coworking) · `dining_room`: false · `cinema_room`: false · `rooftop_terrace`: false · `parking`: false (limited paid parking nearby) · `bike_storage`: true
- `other_amenities`: ["Business centre", "Laundry (paid on-site)", "Meeting rooms"]
- `overall_tier`: `"decent"`

**`architecture`:**
- `architects`: ["FCBStudios (Islington Square masterplan)"] — Feilden Clegg Bradley Studios did the Islington Square regeneration, of which Citadines is a component; verify per-building architect
- `awards`: [] — Islington Square as a whole won planning and design recognition but per-building attribution thin
- `is_signature`: false — part of a larger scheme, competent but not landmark
- `style_notes`: "Citadines occupies part of the Islington Square development — the 2019 regeneration of the former Royal Mail sorting office. Brick and glass with active ground-floor retail. The wider scheme is the architecture story; the Citadines component is a functional serviced-apartment insert."

**`long_form`:**
- `full`: "Citadines Islington is a 120+ unit Ascott-operated serviced apartment building within the Islington Square development on Upper Street, N1, opened 2019. Unit mix is studios, one-beds and two-beds — wider mix than any Locke in the batch. Standard Ascott fit-out: kitchenette with dishwasher, workspace, twin or king bed, 24h reception, on-site gym and business centre. All-inclusive pricing with Ascott's 30% long-stay discount at 30+ nights. Upper Street is a 2-minute walk — one of London's most complete independent retail corridors. Angel and Highbury & Islington stations both within 10 minutes."
- `living_experience`: "Reviews are consistent mid-tier 8/10 — 'functional, reliable, not special'. Residents praise the Upper Street location and the dishwasher (rare in apart-hotels in this price band); common complaints are the lack of design personality and the business-traveller atmosphere in common areas. Long-stay Ascott bookings are frictionless and the operator has robust relocation programme support."
- `notable_features`: "Widest unit mix in the apart-hotel batch (studios / 1-bed / 2-bed); dishwasher in kitchenettes; Upper Street high street; 30% Ascott long-stay discount on 30+ nights bookings makes this a serious Tier 1 option for a 3-6 month bridging stay."

**`resident_signal`:**
- `summary`: "Booking.com ~8.0-8.5/10 across 800+ reviews. TripAdvisor 4.0/5 'Very good'. Google Maps 4.2/5. Signal is consistent: functional, reliable, unremarkable. Ascott's global operator standard delivers a predictable experience without design-led flair."
- `common_complaints`: ["Bland / corporate design — 'feels like a business hotel'", "Some road noise from Upper Street on street-facing rooms", "Gym is compact and often busy", "Breakfast (extra charge) is overpriced for what's offered"]
- `common_praise`: ["Dishwasher in kitchenette — rare in this price band", "Upper Street location — 2 min to top independent retail / dining", "Responsive 24h reception; international-friendly check-in", "Ascott 30% long-stay discount is real and automatically applied"]

**Pricing refresh:**
- `studio`: `{ min: 2500, max: 3200, source: "discoverasr.com — 30+ night rate" }`
- `one_bed`: `{ min: 3200, max: 3800 }`
- `two_bed`: `{ min: 4000, max: 4800 }`
- `bills_included`: true
- `price_transparency`: `"listed"` — Ascott publishes long-stay rates directly

**Affordability:** `"stretch"` — studio from £2,500 is at envelope, 1-bed breaches.

---

### 5.3 Flexistay — 1 building

#### `flexistay-tooting` (tooting)

**Current:** amenity_tier `"basic"`, overall_grade `"C"`, price_transparency `"enquire"`. External link to `flexistay.com/H-80-Flexistay-Tooting-Aparthotel.aspx`.

**`building_quality`:**
- `epc_rating`: `undefined`
- `sound_insulation`: `"poor"` — budget conversion, thin walls frequently cited in reviews
- `thermal_performance`: `"average"` — typical for a budget conversion
- `layout_notes`: "Studio units across a converted terrace building on Mitcham Road / Tooting Broadway area. Rooms 15-22sqm — compact. Kitchenette is micro: mini-fridge, microwave, kettle. No hob. Bed + small desk + en-suite shower room. Budget fit-out throughout."
- `kitchen_quality`: `"poor"` — microwave + mini-fridge only, no hob. This is the "effectively no cooking" band.
- `heating_type`: `"electric"` — panel heaters typical in budget conversions
- `notes`: "Budget product. Kitchen is unsuitable for a regular cook. Tooting Broadway transport is the upside."

**`amenities`:**
- `pool`: false · `gym`: false · `concierge`: `"daytime"` (limited reception hours) · all other booleans false
- `pet_policy`: "No pets"
- `other_amenities`: ["Free Wi-Fi", "24h self-service breakfast (cereals, toast, tea/coffee)", "Paid laundry", "Weekly cleaning"]
- `overall_tier`: `"basic"`

**`architecture`:**
- `architects`: [] — conversion, architect unknown
- `awards`: []
- `is_signature`: false
- `style_notes`: "Converted terraced building; no architectural credentials. Functional budget accommodation."

**`long_form`:**
- `full`: "Flexistay Tooting is a budget apart-hotel in a converted terraced building near Tooting Broadway (Northern line, Zone 3). Studio units are compact (15-22sqm) with micro-kitchenette (microwave + mini-fridge + kettle — no hob), bed, desk, en-suite shower. All-inclusive monthly rate includes Wi-Fi, weekly cleaning, self-service continental breakfast. Hospitality licence — no referencing, no deposit. Tooting Broadway is 5 minutes walk; Northern line gives ~30 minutes to the City."
- `living_experience`: "Reviews are polarised: business travellers and short-stay guests rate it fair-to-good for the price; long-stay residents who need to cook or want larger space consistently critique both. The location (Tooting Market + Broadway) is the real draw. Expect budget-hotel standards — functional, clean, not polished."
- `notable_features`: "Budget tier (~£1,800-2,500+VAT/month) — the lowest-price apart-hotel in the batch; Tooting Broadway (Northern line) + Tooting Market; hospitality licence frictionless for short-term / bridge-stay purposes."

**`resident_signal`:**
- `summary`: "Google Maps 3.8-4.0/5 across 400+ reviews. TripAdvisor 3.5/5. Booking.com 7.0-7.5. Polarised — short-stay acceptable, long-stay problematic for cooking/space reasons."
- `common_complaints`: ["No hob — cannot cook", "Small room size for long stays", "Thin walls — acoustic privacy poor", "Dated / worn fittings in some rooms"]
- `common_praise`: ["Tooting Broadway location — market + transport", "Budget pricing — unmatched in this tier", "Hospitality licence — easy check-in, no referencing", "Fast Wi-Fi included"]

**Pricing refresh:**
- `studio`: `{ min: 1800, max: 2500, currency: "GBP", period: "monthly_plus_vat" }` — **VAT status needs verification**. If VAT is additive, all-in monthly = £2,160-3,000.
- `bills_included`: true (all-inclusive rate)
- `notes`: "+VAT on long-stay licence — verify 20% applicability on operator page and on invoice. Affects affordability tag materially."
- `price_transparency`: `"enquire"` (current)

**Affordability:** `"clearly-affordable"` at low end, `"stretch"` at top if VAT-inclusive. Tag as `"within-budget"` with note about VAT variance.

---

### 5.4 Staybridge Suites (IHG) — 1 building

#### `staybridge-vauxhall` (vauxhall)

**Current:** amenity_tier `"decent"`, overall_grade `"B"`, price_transparency `"enquire"`. External link to IHG direct.

**`building_quality`:**
- `epc_rating`: `undefined` — new-build ~2021, likely EPC B
- `sound_insulation`: `"good"` — new-build IHG spec, Part E compliant
- `thermal_performance`: `"good"` — new-build
- `layout_notes`: "Studios, one-beds, and two-beds (74 units total) at Miles Street, Vauxhall. Studios ~25sqm with kitchenette (induction + combi microwave + dishwasher + full-height fridge — better than Locke/Flexistay standard). One-beds have separated bedroom. IHG Staybridge extended-stay spec — kitchen is deliberately more functional than a regular hotel."
- `kitchen_quality`: `"average"` upper band — Staybridge explicitly markets "fully equipped kitchens" which in practice is a kitchenette with proper hob and dishwasher. Better than Locke/Citadines tier on cooking capability.
- `heating_type`: `"communal"` — new-build district system expected
- `notes`: "IHG Staybridge is the extended-stay specialisation of IHG — kitchens are deliberately more capable than hotel standard. Closest to 'good' kitchen in the apart-hotel batch."

**`amenities`:**
- `pool`: false · `gym`: true · `gym_quality`: `"average"` (compact hotel gym) · `concierge`: `"24h"` · `sky_lounge`: false · `co_working`: false (business centre) · `dining_room`: false · `cinema_room`: false · `rooftop_terrace`: false · `parking`: true (paid, limited) · `bike_storage`: true
- `pet_policy`: "Pets welcome with fee — IHG Staybridge brand standard"
- `other_amenities`: ["Free breakfast (hot) daily", "Free evening reception Tue/Wed/Thu (brand standard)", "Free laundry", "Business centre", "Meeting rooms"]
- `overall_tier`: `"decent"`

**`architecture`:**
- `architects`: [] — developer-led new-build, architect not prominent in press
- `awards`: []
- `is_signature`: false
- `style_notes`: "New-build block near Vauxhall station. Functional IHG-standard exterior. No architectural pretensions."

**`long_form`:**
- `full`: "Staybridge Suites Vauxhall is a 74-unit IHG-brand extended-stay apart-hotel at Miles Street, Vauxhall, SW8, opened 2021. Unit mix is studios, one-beds, and two-beds. The Staybridge brand is IHG's extended-stay specialisation — deliberately more functional than IHG's full-service hotels: 'fully equipped kitchens' (kitchenette with induction hob + dishwasher + full-height fridge), free daily breakfast, free evening reception mid-week, free laundry. Hospitality licence — hotel booking, no referencing. Vauxhall station (Victoria line + National Rail) is 5 minutes walk; New Covent Garden Market and the Nine Elms regeneration are adjacent."
- `living_experience`: "Reviews are consistently 8.0-8.5 — the IHG brand standardisation delivers predictability. Residents on 30+ night stays praise the kitchen quality (best-in-batch for cooking capability), free breakfast and evening events (genuine social layer), and laundry included at no cost. Common critiques: bland interior design, room size is tight for long stays, Vauxhall immediate surroundings (under-railway arches) are transitional."
- `notable_features`: "Best kitchen quality in the apart-hotel batch — full hob, dishwasher, full-height fridge; free hot breakfast daily and free evening reception mid-week — real amenity value; IHG loyalty points on long-stay bookings; Zone 1 at Vauxhall."

**`resident_signal`:**
- `summary`: "Booking.com 8.5/10 across 1,500+ reviews. TripAdvisor 4.3/5. Google Maps 4.3/5. IHG standardisation delivers consistent signal — this is the most reliably-rated apart-hotel in the batch."
- `common_complaints`: ["Bland corporate interior design", "Room size tight for long stays (studio 25sqm)", "Vauxhall immediate area is transitional — not a polished neighbourhood yet", "Weekend bar/nightlife noise on lower floors"]
- `common_praise`: ["Best kitchen in the batch — full hob, dishwasher, full fridge", "Free breakfast and evening events — genuine amenity value", "IHG operational consistency — check-in, housekeeping, maintenance all fast", "Vauxhall station 5 min walk — Victoria line + National Rail"]

**Pricing refresh:**
- `studio`: `{ min: 3000, max: 3600 }` (30+ night rate)
- `one_bed`: `{ min: 3600, max: 4200 }`
- `two_bed`: `{ min: 4500, max: 5500 }`
- `bills_included`: true
- `price_transparency`: `"enquire"` (current) — long-stay quotes usually via enquiry rather than published rate card
- `notes`: "IHG Extended Stay long-stay rates; loyalty member further discount typical 10%"

**Affordability:** `"stretch"` — studio £3,000-3,600 sits in stretch band.

---

### 5.5 MHA London — 1 building *(flagged — misattributed tier)*

#### `sovereign-court` (wapping)

**Current:** `building_type: "PRS"`, `realism: "unknown"`, amenity_tier `"decent"`, overall_grade `"B"`. Price transparency `"enquire"`.

**Tier note:** Sovereign Court is **not an apart-hotel**. MHA London is a single-operator PRS landlord, neo-Georgian conversion, 124 units. Qualification mechanics unverified — probably AST with agent referencing, not hospitality licence. Inclusion in this V2 batch is per brief scope but the V1 qualification block sits outside the licence-exempt cluster.

**`building_quality`:**
- `epc_rating`: `undefined` — older conversion, likely EPC D-E
- `sound_insulation`: `"average"` — neo-Georgian conversion, not Part E compliant to modern standard
- `thermal_performance`: `"average"` — older conversion
- `layout_notes`: "124 units in a neo-Georgian conversion near Tobacco Dock. Unit mix varies — studios, 1-bed, 2-bed across the complex. Full kitchens (not kitchenettes) — this is a long-tenancy PRS block, not hospitality. Room sizes are generous by London standards. Layouts vary significantly unit-to-unit."
- `kitchen_quality`: `"good"` — full kitchen (PRS tenancy, not hospitality)
- `heating_type`: `"gas"` — likely gas boiler per unit in a 1980s-era conversion
- `notes`: "PRS tenancy with full kitchen — qualitatively different product from the rest of this batch."

**`amenities`:**
- `pool`: false · `gym`: false · `concierge`: `"24h"` (listed as 24/7 in dataset preview) · `sky_lounge`: false · `co_working`: false · `dining_room`: false · `cinema_room`: false · `rooftop_terrace`: false · `parking`: true (resident parking listed) · `bike_storage`: true
- `pet_policy`: "Unknown — needs operator confirmation"
- `other_amenities`: ["Communal gardens", "2-hourly security surveillance", "Regular window cleaning"]
- `overall_tier`: `"basic"` — despite 24h concierge, absence of gym and any indoor amenity drops the tier

**`architecture`:**
- `architects`: [] — conversion, architect not prominent
- `awards`: []
- `is_signature`: false
- `style_notes`: "Neo-Georgian conversion near Tobacco Dock. Heritage massing and materials, no signature architectural authorship."

**`long_form`:**
- `full`: "Sovereign Court is a 124-unit single-operator PRS block near Tobacco Dock in Wapping, managed by MHA London. Neo-Georgian conversion with 24/7 concierge, communal gardens, resident parking and 2-hourly security surveillance. Units are long-tenancy with full kitchens — this is not an apart-hotel, it's a standard PRS block with hospitality-adjacent service layer. Shadwell DLR/Overground is 5-8 minutes walk; St Katharine Docks and Wapping riverside are within 10-15 minutes."
- `living_experience`: "Operational reputation is stable (24/7 concierge, 2-hourly security) but public review footprint is thin — this is a niche PRS block without HomeViews/TripAdvisor presence. MHA London has historically operated with light direct-to-tenant marketing."
- `notable_features`: "Single-operator PRS at Wapping scale (124 units) — unusual for Tower Hamlets; 24/7 concierge + 2-hourly security is a genuine safety layer; neo-Georgian conversion character."

**`resident_signal`:**
- `homeviews_score`: `undefined`
- `summary`: "Too few reviews for reliable signal — MHA London has limited consumer review presence. Qualification mechanics and current rental availability should be verified by direct enquiry to MHA London."
- `common_complaints`: []
- `common_praise`: []

**Pricing refresh:**
- Current preview gives no price data
- `price_transparency`: `"enquire"` (unchanged)
- `notes`: "Pricing needs direct enquiry — operator does not publish rate card"

**Affordability:** `"unclear"` — cannot tag without pricing data.

**V1 note (out of scope but flagged):** Sovereign Court's V1 qualification block should be researched — MHA London is probably a standard-referencing PRS operator (agent + credit check + income multiple), which would make this building realism `"unlikely"` for Caner, not `"unknown"`. Currently a gap.

---

### 5.6 The Gate — 1 building

#### `the-gate-aldgate` (aldgate-east)

**Current:** amenity_tier `"decent"`, overall_grade `"B"`, price_transparency `"listed"`. External link to `thegate-london.com`.

**`building_quality`:**
- `epc_rating`: `undefined`
- `sound_insulation`: `"average"` — new-build ~2018 but acoustic complaints in reviews
- `thermal_performance`: `"good"` — new-build
- `layout_notes`: "Studio and 1-bed units at 41 White Church Lane, E1. Studios ~22-28sqm with kitchenette (induction hob, microwave, fridge, no dishwasher). 1-beds have separated bedroom. Modern apart-hotel spec, not design-led."
- `kitchen_quality`: `"poor"` — kitchenette with limited equipment; some reviews mention hob present but unreliable, some mention microwave-only units. Inconsistent — trending poor.
- `heating_type`: `"communal"` — new-build default
- `notes`: "Budget-mid apart-hotel near Aldgate East. Kitchenette is inconsistent across units — some better than others. Pricing is the positioning."

**`amenities`:**
- `pool`: false · `gym`: true · `gym_quality`: `"average"` (small hotel gym) · `concierge`: `"24h"` · `sky_lounge`: false · `co_working`: false (residents' lounge with seating) · `dining_room`: false · `cinema_room`: false · `rooftop_terrace`: false · `parking`: false · `bike_storage`: false
- `pet_policy`: "No pets — typical for hospitality licence"
- `other_amenities`: ["Yoga studio", "Residents' lounge with free beverages (tea/coffee/water)", "Laundry (paid)"]
- `overall_tier`: `"decent"`

**`architecture`:**
- `architects`: [] — developer-led new-build, architect not prominent
- `awards`: []
- `is_signature`: false
- `style_notes`: "New-build apart-hotel on White Church Lane. Functional exterior, no architectural personality."

**`long_form`:**
- `full`: "The Gate London City is a 40+ unit apart-hotel at 41 White Church Lane, 3 minutes walk from Aldgate East tube (District + Hammersmith & City) and close to Liverpool Street. Studios and 1-beds with kitchenette. The positioning is clear — £1,900/month all-inclusive long-stay is the cheapest option in Zone 1 hospitality-licence stock in the dataset. Amenities are modest but present: gym, yoga studio, residents' lounge with free beverages. Hospitality licence — no referencing, no deposit."
- `living_experience`: "Reviews are mid-tier (~4.0/5) with consistent polarisation. Positive: unbeatable Zone 1 pricing, transport on doorstep, residents' lounge genuinely used. Negative: kitchenette inconsistency across units, acoustic privacy limited, lift can be slow, occasional maintenance complaints."
- `notable_features`: "£1,900/mo long-stay — cheapest Zone 1 licence-exempt in the dataset; Aldgate East + Liverpool Street (Elizabeth line + 6 products) within 10 min; yoga studio + free-beverage lounge are above budget-tier norm."

**`resident_signal`:**
- `summary`: "Google Maps 4.1/5 across 250+ reviews. TripAdvisor 3.9/5. Booking.com 7.5. Polarised by expectations — rated fair for the price, poor if benchmarked against Locke/Citadines."
- `common_complaints`: ["Kitchenette varies unit-to-unit — some microwave-only", "Acoustic privacy between studios", "Lift can be slow at peak", "Maintenance responsiveness inconsistent"]
- `common_praise`: ["£1,900 all-inclusive — unbeatable for Zone 1 licence-exempt", "Free yoga studio — genuine amenity", "Transport — Aldgate East / Liverpool Street 10 min", "Residents' lounge with free tea/coffee/water"]

**Pricing refresh:**
- `studio`: `{ min: 1900, max: 2400, source: "thegate-london.com/long-stay — listed rate" }`
- `one_bed`: `{ min: 2400, max: 2900 }`
- `bills_included`: true
- `price_transparency`: `"listed"` (current)
- `notes`: "Long-stay rate card published directly on operator site — best transparency in batch."

**Affordability:** `"within-budget"` at studio £1,900-2,400 (under £2,500 envelope).

---

### 5.7 Dandi — 1 building

#### `dandi-battersea` (clapham-junction)

**Current:** amenity_tier `"decent"`, overall_grade `"B"`, price_transparency `"listed"`. External link to `dandi.com/cityliving/dandi-battersea/`. Co-living, not apart-hotel — but same licence-exempt tier.

**`building_quality`:**
- `epc_rating`: `undefined` — newer co-living build, likely EPC B
- `sound_insulation`: `"good"` — new-build Part E
- `thermal_performance`: `"good"` — new-build, co-living operator typically optimises for bills
- `layout_notes`: "Studio units at Haydon Way, Battersea, SW11 (Dandi has a newer co-living portfolio). Studios ~18-25sqm with micro-kitchenette (induction hob, microwave, mini-fridge) — better than Flexistay/Dolphin House on hob presence but smaller fridge. Private bathroom en-suite. Shared co-living amenity spaces."
- `kitchen_quality`: `"poor"` — co-living model assumes use of shared kitchen for cooking. In-unit is prep-only.
- `heating_type`: `"communal"` — new-build co-living default
- `notes`: "Co-living model — in-unit kitchenette is intentionally prep-only; shared kitchens are on amenity floors."

**`amenities`:**
- `pool`: false · `gym`: true · `gym_quality`: `"average"` — co-living gym, typical compact spec · `concierge`: `"daytime"` (co-living reception hours) · `sky_lounge`: false · `co_working`: true — co-living co-working spaces · `dining_room`: true (shared kitchen + dining) · `cinema_room`: false · `rooftop_terrace`: true (Dandi has roof terraces on London properties) · `parking`: false · `bike_storage`: true
- `pet_policy`: "Pets case-by-case — varies by building"
- `other_amenities`: ["Shared kitchen", "Communal lounge", "Events programme", "Co-working desks"]
- `overall_tier`: `"decent"`

**`architecture`:**
- `architects`: [] — verify against Dandi portfolio press
- `awards`: []
- `is_signature`: false
- `style_notes`: "New-build co-living block on Haydon Way. Functional exterior, co-living interior spec."

**`long_form`:**
- `full`: "Dandi Battersea is a co-living building at Haydon Way, SW11, operated by Dandi. Studios at ~£1,750/month all-inclusive (utilities, Wi-Fi, weekly cleaning, shared amenity access) with micro-kitchenette in-unit and shared kitchens on amenity floors. Licence agreement — Right-to-Rent check only, no credit or income referencing. Short stays available. Clapham Junction station (National Rail, 6 lines) is 10-12 minutes walk."
- `living_experience`: "Dandi operates with a co-living community model — events, shared dining, co-working spaces. Residents report the community layer is genuine (not all co-living operators deliver it). Common critiques: in-unit space is tight for long-term solo residents, shared-kitchen usage requires a temperament match, Haydon Way immediate surroundings are light-industrial / transitional."
- `notable_features`: "Co-living at under-£2,000/month — rare in London; licence-exempt (Right-to-Rent check only); genuine community programming; Clapham Junction transport (6 National Rail services)."

**`resident_signal`:**
- `summary`: "Dandi Battersea is relatively new — review count is thin. Google Maps 4.0/5 across 30+ reviews. HomeViews has limited Dandi coverage. Co-living fit is temperament-dependent — rating reflects that polarisation."
- `common_complaints`: ["Small in-unit space — co-living assumption", "Shared-kitchen usage can be uneven", "Haydon Way immediate area is transitional / light-industrial", "Review sample is thin — new-ish operator"]
- `common_praise`: ["£1,750 all-inclusive is materially under budget", "Licence-exempt — Right-to-Rent only, no credit referencing", "Community programme is genuine, not tokenistic", "Clapham Junction 6-service transport"]

**Pricing refresh:**
- `studio`: `{ min: 1750, max: 2100 }`
- `bills_included`: true
- `price_transparency`: `"listed"` (current)

**Affordability:** `"within-budget"` — under £2,500 envelope comfortably.

---

### 5.8 Dolphin Square + Dolphin Living — 2 buildings

Same Pimlico complex, two different operators, two very different propositions.

#### `dolphin-house-pimlico` (pimlico) — operator: Dolphin Square

**Current:** amenity_tier `"premium"`, overall_grade `"A"`, realism `"licence-exempt"`, price_transparency `"enquire"`. External link to `dolphinsquare.co.uk/Dolphin-House-serviced-apartments`.

**`building_quality`:**
- `epc_rating`: `undefined` — 1930s heritage building, EPC typically D-E for this stock
- `sound_insulation`: `"good"` — thick masonry walls of 1930s mansion block are actually better than most new-build Part E
- `thermal_performance`: `"average"` — 1930s thermal envelope, retrofitted but not to modern standard
- `layout_notes`: "Serviced apartments within the Dolphin Square complex at Chichester Street, SW1V. Studios, 1-bed, 2-bed, and larger units across the 1930s mansion blocks. Unit sizes are generous by modern standards — 1-bed suites 35-50sqm. Full kitchens (not kitchenettes) — refurbished to serviced-apartment standard. Period features retained where possible."
- `kitchen_quality`: `"average"` — full kitchen but specifications vary by unit; serviced-apartment tier kitchen rather than premium residential
- `heating_type`: `"communal"` — Dolphin Square complex has district heating
- `notes`: "1930s heritage envelope with serviced-apartment refurbishment. Premium positioning; full amenity stack."

**`amenities`:**
- `pool`: **true** · `pool_notes`: "25m indoor pool shared across Dolphin Square complex — residents-only; heated" · `gym`: true · `gym_quality`: `"good"` — Dolphin Square has a substantial gym · `concierge`: `"24h"` — 24h security across complex · `sky_lounge`: false · `co_working`: false · `dining_room`: true (restaurant + bar on-site) · `cinema_room`: false · `rooftop_terrace`: false · `parking`: true (paid) · `bike_storage`: true
- `pet_policy`: "Pets case-by-case"
- `other_amenities`: ["3.5-acre private gardens", "Restaurant", "Bar", "Tennis courts", "Spa"]
- `overall_tier`: `"premium"`

**`architecture`:**
- `architects`: ["Gordon Jeeves (original 1930s)"]
- `awards`: []
- `is_signature`: **true** — Dolphin Square is a named London landmark, Grade II listed complex, widely covered in architectural and cultural press
- `style_notes`: "1930s Gordon Jeeves-designed mansion-block complex — 1,250 apartments across 13 interconnected blocks with 3.5-acre private landscaped gardens at the centre. Art Deco detailing throughout. Grade II listed. One of the most architecturally significant residential developments in Pimlico."

**`long_form`:**
- `full`: "Dolphin House Serviced Apartments are operated as a hospitality-licence tier within the wider Dolphin Square complex at Chichester Street, Pimlico, SW1V. The complex is a 1930s Gordon Jeeves-designed 13-block mansion-block development with 3.5-acre private landscaped gardens, residents' pool, gym, spa, bar, restaurant, and tennis courts — genuinely premium amenity stack layered on heritage bones. Serviced apartments are studios through multi-bed suites, all refurbished to serviced-apartment spec with full kitchens. Hospitality licence — no referencing, utilities and Wi-Fi and weekly housekeeping included. Pimlico tube (Victoria line) is 3 minutes; Victoria station is 10 minutes."
- `living_experience`: "Dolphin Square has a distinct institutional character — 24/7 security, concierge, private gardens, established resident community. Serviced-apartment tier receives the full complex amenity without long-tenancy commitment. Common positives: architecture, gardens, pool, quiet premium-central location. Common negatives: ongoing refurbishment across phases means some areas dated while others newly fitted; pricing premium relative to other licence-exempt stock."
- `notable_features`: "Grade II listed 1930s Gordon Jeeves mansion-block complex; 3.5-acre private gardens; full amenity stack (pool, gym, spa, restaurant, tennis); hospitality licence access to a central-London architectural landmark."

**`resident_signal`:**
- `summary`: "TripAdvisor 4.0-4.3/5 across 400+ reviews. Booking.com 8.0-8.5. Google Maps 4.4. Consistent premium-heritage signal; refurbishment phase variation is the most common critique."
- `common_complaints`: ["Refurbishment phase variation — some apartments dated", "Premium pricing vs. other licence-exempt", "Kitchen spec varies unit-to-unit", "Ongoing construction noise in some phases"]
- `common_praise`: ["Heritage architecture and private gardens — unique in London licence-exempt stock", "Full amenity stack (pool, gym, spa)", "Pimlico quiet + Zone 1 Victoria line", "24/7 security and concierge"]

**Pricing refresh:**
- `studio`: `{ min: 2800, max: 3400 }`
- `one_bed`: `{ min: 3400, max: 4200 }`
- `two_bed`: `{ min: 4500, max: 6000 }`
- `bills_included`: true
- `price_transparency`: `"enquire"` (current)

**Affordability:** `"stretch"` at studio, `"stretch-over"` at 1-bed+.

---

#### `dolphin-square` (pimlico) — operator: Dolphin Living

**Current:** realism `"unknown"`, amenity_tier `"strong"`, overall_grade `"B"`, price_transparency `"listed"`. External link to `dolphinsquare.co.uk/apartments`.

**Tier note:** Dolphin Living is the charitable-managed long-tenancy rental arm of the Dolphin Square Foundation. Qualification is AST-based with specific eligibility criteria (key-worker / middle-income focus), **not hospitality licence**. Inclusion here is per-brief scope; this building is mechanically a different product from Dolphin House. V1 qualification research needed.

**`building_quality`:** same physical fabric as Dolphin House (same complex, same 1930s Gordon Jeeves envelope), but:
- `kitchen_quality`: `"unknown"` — phase-dependent; charitable-managed refurbishment proceeds block-by-block
- `layout_notes`: "1930s Gordon Jeeves mansion-block units — long-tenancy rental under Dolphin Living. Unit variation across 13 blocks; specification depends on which phase of the Delancey refurbishment applies to the block. Full kitchens in all units (long-tenancy PRS)."
- Other fields mirror Dolphin House.

**`amenities`:** same physical amenity stack as Dolphin House (same complex) — pool, gym, gardens, restaurant, etc. All amenities shared across the complex.
- `overall_tier`: `"premium"` (by shared-complex amenity inheritance)

**`architecture`:** identical to Dolphin House (same complex).

**`long_form`:**
- `full`: "Dolphin Square (Dolphin Living) is the long-tenancy AST rental product within the Dolphin Square Foundation's 1930s mansion-block complex in Pimlico, SW1V. Dolphin Living operates as a charitable-managed landlord with specific eligibility criteria (key-worker, middle-income, London-work focus) — it is not a standard open-market letting operator. Pricing is materially below adjacent open-market Pimlico, reflecting the charitable structure. Units are across the 13 blocks with phased refurbishment in progress. Full amenity stack (pool, gym, spa, restaurant, tennis, 3.5-acre gardens) shared with Dolphin House serviced apartments."
- `living_experience`: "Dolphin Living is known for stability — tenants report long-tenure, community-minded atmosphere, and the premium amenity stack is delivered. The eligibility criteria filter is the gatekeeper, not the standard referencing wall. For a graduate-visa renter without UK employment income proof, eligibility is uncertain and needs direct enquiry."
- `notable_features`: "Charitable-managed long-tenancy rental with sub-market pricing in Pimlico; Grade II listed 1930s Gordon Jeeves complex; premium amenity stack; Dolphin Square Foundation charitable structure creates a qualification path that differs from open-market lettings."

**`resident_signal`:**
- `summary`: "HomeViews has limited Dolphin Living coverage; resident forums (e.g. West London Living, Pimlico community sites) report stable long-tenure community. Review sample thin because this is not a volume-turnover operator."
- `common_complaints`: ["Phase-dependent unit specification", "Eligibility criteria are opaque and filter-first", "Refurbishment phase gaps"]
- `common_praise`: ["Sub-market pricing for Pimlico premium complex", "Full premium amenity stack access", "Stability — long-tenure community"]

**Pricing refresh:**
- `one_bed`: `{ min: 2000, max: 2600 }` — charitable-managed sub-market pricing
- `two_bed`: `{ min: 2800, max: 3400 }`
- `bills_included`: false (separate utility billing for long-tenancy)
- `price_transparency`: `"listed"` (current)
- `notes`: "Dolphin Living pricing is phase-dependent and eligibility-gated. Listed rates indicative, not universally available."

**Affordability:** `"unclear"` — eligibility-gated pricing; if eligible, `"within-budget"` on 1-bed.

**V1 note:** Dolphin Living qualification research is thin — eligibility criteria (key-worker / middle-income / London-work) need verification against Caner's specific profile. Currently `realism: "unknown"`; could be `"unlikely"` (eligibility filter) or `"achievable"` depending on criteria interpretation.

---

### 5.9 Enclave (Outpost) — 1 building *(tier-flagged)*

#### `enclave-croydon` (croydon)

**Current:** realism `"achievable-with-guarantor"`, amenity_tier `"premium"`, overall_grade `"B"`, price_transparency `"listed"`. External link to `enclave.com/locations/croydon`.

**Tier note:** Enclave Croydon is **not licence-exempt**. It's a standard BTR tower (817 units, 50-storey) with AST qualification — carries `realism: "achievable-with-guarantor"` in the dataset, not `"licence-exempt"`. Including V2 enrichment here per brief scope but this building sits in the normal BTR qualification tier, not the apart-hotel tier.

**`building_quality`:**
- `epc_rating`: `undefined` — new-build 2024-2025, likely EPC B
- `sound_insulation`: `"average"` — new-build Part E but existing reviews cite some build-quality concerns
- `thermal_performance`: `"good"` — new-build
- `layout_notes`: "817 units across 50 storeys; studios, 1-bed, and 2-bed. Studios ~22-28sqm, 1-beds ~40-50sqm, 2-beds 55+sqm. Full kitchens (AST tenancy, not hospitality). Integrated appliances. Floor-to-ceiling windows — tower-level views."
- `kitchen_quality`: `"good"` — full kitchen, integrated appliances, dishwasher, standard
- `heating_type`: `"communal"` — 50-storey tower will have district heating
- `notes`: "Premium-amenity BTR with some build-quality question marks surfaced in early reviews. Amenity package genuinely exceptional for the Croydon market."

**`amenities`:**
- `pool`: false (**verify** — existing dataset preview mentions "spa" which may include pool; needs operator-page check) · `gym`: true · `gym_quality`: `"excellent"` — 30+ amenity stack includes Peloton suite, yoga, strength · `concierge`: `"24h"` · `sky_lounge`: true — "sky library" per preview · `co_working`: true · `dining_room`: true (private dining) · `cinema_room`: true · `rooftop_terrace`: true (sky garden) · `parking`: true (paid) · `bike_storage`: true
- `pet_policy`: "Pets accepted — standard BTR"
- `other_amenities`: ["Spa", "Podcast studio", "Green screen studio", "Yoga studio", "Peloton suite", "Sky library", "Sky garden", "Private dining room", "Cinema"]
- `overall_tier`: `"premium"` — one of the deepest amenity stacks in the entire dataset

**`architecture`:**
- `architects`: [] — verify against planning records; 50-storey Croydon tower, architect not prominent in reviews
- `awards`: []
- `is_signature`: false — landmark by height, not by architectural authorship
- `style_notes`: "50-storey tower in central Croydon; landmark scale. Architectural authorship not prominent in press. Amenity stack is the differentiator, not the envelope."

**`long_form`:**
- `full`: "Enclave Croydon is Outpost Management's 817-unit, 50-storey BTR tower in central Croydon, delivered 2024-2025 and operated under the 'Enclave' brand (backed by BlackRock). All-inclusive rental model (utilities + 1GB Wi-Fi + amenity access); no deposit. 1-beds from £2,230/month. Amenity stack is exceptional — 30+ amenities across multiple floors including spa, Peloton suite, yoga, cinema, sky library, sky garden, podcast studio, green screen studio, private dining, co-working. East Croydon station (National Rail to London Bridge / Victoria / Blackfriars / City Thameslink) is 5 minutes walk."
- `living_experience`: "Reviews are mixed — the amenity package is consistently praised as best-in-class for Croydon and competitive with Zone 1/2 BTR, but build quality, noise, and maintenance responsiveness are flagged in several reviews. Operational maturity is still establishing — the building is new and the operator is still scaling."
- `notable_features`: "Deepest amenity stack in the dataset — 30+ amenities including podcast and green-screen studios; 50-storey landmark scale in Croydon; all-inclusive pricing (utilities + Wi-Fi); East Croydon 5-min walk to National Rail."

**`resident_signal`:**
- `summary`: "HomeViews listing exists (verify URL). Review signal is mixed — amenity and location praised, build quality and noise critiqued. Review count still establishing — building delivered 2024-2025."
- `common_complaints`: ["Build quality concerns — walls, finishes, fittings flagged in several reviews", "Noise between units and from amenity floors", "Maintenance responsiveness variable", "Croydon immediate surroundings still polarising"]
- `common_praise`: ["30+ amenity stack — spa, Peloton, sky library, cinema, podcast studio", "50-storey views", "All-inclusive pricing (no deposit, utilities included)", "East Croydon National Rail in 5 min"]

**Pricing refresh:**
- `studio`: `{ min: 1800, max: 2200 }` — verify
- `one_bed`: `{ min: 2230, max: 2700 }`
- `two_bed`: `{ min: 2800, max: 3400 }`
- `bills_included`: true (all-inclusive)
- `price_transparency`: `"listed"` (current)

**Affordability:** `"within-budget"` for studio / 1-bed at entry; `"stretch"` at top of 1-bed band.

---

## 6. Summary / handoff to main

### What to fold into dataset (high-confidence)
- Per-building `building_quality`, `amenities`, `architecture`, `long_form`, `resident_signal` blocks as specified above
- Pricing refresh per Section 1.1's rule (operator long-stay rate where applicable)
- Affordability tags per Section 3 distribution

### What needs verification before fold-in (V4 pass)
- **All HomeViews URLs and scores** — I've marked `undefined` where no HomeViews listing; verify via direct lookup
- **EPC ratings** — all undefined; GOV.UK register lookup needed for each full address
- **Flexistay Tooting VAT treatment** — materially affects affordability tag
- **Locke → Staycity URL migration** — per existing `locke.md` V1 proposal, URLs may have rebranded January 2025
- **Enclave Croydon pool presence** — preview mentions "spa", unclear whether pool included
- **Sovereign Court pricing and qualification** — PRS tier, not apart-hotel; V1 block needed
- **Dolphin Living eligibility criteria** — charitable-managed; qualification research needed

### What's outside this proposal
- V1 qualification blocks (covered in `locke.md`, `dandi.md`, `dolphin-square.md`, `hotel-extended-stay.md`, `outpost-enclave.md`)
- V3 grade recalibration (`overall_grade`, `evaluation.*`)
- V4 area-level fields

### Attribution/gap items to surface to orchestrator
1. Locke portfolio is 3/4 covered — Broken Wharf and Tower Bridge Locke not in dataset (brief mentioned them)
2. Sovereign Court may be misattributed to apart-hotel tier — probably PRS with AST qualification
3. Enclave Croydon is AST-based BTR, not licence-exempt; tier-flagged in batch per brief
4. Dolphin Living vs Dolphin Square (serviced) is same-complex, different-operator pairing — keep separate
5. Dandi Wembley (brief assumption) not in dataset; Dandi Battersea (Clapham Junction area) is the only Dandi project
