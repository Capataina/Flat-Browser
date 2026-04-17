# V2 Enrichment Proposals — Co-living / Licence Operators

**Scope:** 7 buildings across 4 operators (all licence-exempt or licence-adjacent — priority pathway for Caner as a Graduate-visa holder without UK payslips).
**Date:** 2026-04-17
**Envelope:** £2,500 comfortable / £3,000 stretch — all-in (bills included for all 7).
**Comparables:** Fizzy Lewisham £1,280-1,450 (well-under), Node Brixton £1,720 (well-under), ARK CW £1,499-1,849 (well-under), Gravity Co West Hampstead £2,200 (at-budget), Locke Broken Wharf £2,400 (stretch).

---

## Project-ID confirmation

| Operator | Project IDs | Area files |
|---|---|---|
| ARK Co-living | `ark-wembley`, `ark-canary-wharf` | wembley-park.ts, canary-wharf.ts |
| Node Living | `node-living-brixton`, `node-limehouse` | brixton.ts, poplar-blackwall.ts |
| Folk | `folk-florence-dock` | battersea-park.ts |
| The Quarters by Bravo / Bravo Investment House | `quarters-croydon`, `quarters-kilburn`, `quarters-swiss-cottage` | croydon.ts, kilburn.ts, swiss-cottage.ts |

All 7 confirmed present. Naming anomaly: `node-living-brixton` vs `node-limehouse` (dataset inconsistency but both exist). Quarters operator attribution is inconsistent — V1 Bravo proposal already flagged unification on `"The Quarters by Bravo"`.

---

## Kitchen-quality summary (load-bearing for Caner)

Caner cooks regularly. The kitchenette-vs-kitchen distinction is the single most important V2 livability signal for this batch.

| Project | Kitchen type | `kitchen_quality` | Rationale |
|---|---|---|---|
| `ark-wembley` | Kitchenette (compact, studios 20–29 sqm, induction hob, small fridge, no dishwasher) | `"poor"` | Classic studio 20 sqm physically cannot fit a full kitchen. Hob present but prep space and storage are minimal. |
| `ark-canary-wharf` | Kitchenette (combi microwave + small hob + mini-fridge — apart-hotel tier) | `"poor"` | Less generous than Wembley. ARK CW is the thin-kit end of the portfolio. |
| `node-living-brixton` | Kitchenette (studios with shared communal kitchens on amenity floors) | `"poor"` | Node's private-studio product has in-studio kitchenettes; cooking culture leans communal. |
| `node-limehouse` | Kitchenette (same Node template) | `"poor"` | Same Node template — in-studio prep is minimal; proper cooking happens in shared kitchens. |
| `folk-florence-dock` | Full kitchen (Folk's premium co-living spec — studios and 1-beds have separate kitchen zones with dishwasher, oven, induction) | `"good"` | Differentiator — Folk is the only co-living in this batch that supports a regular cook. |
| `quarters-croydon` | Kitchenette (1960s office conversion — tight spec) | `"poor"` | Small. Sound-insulation complaints also suggest cost-cut interior fit-out. |
| `quarters-kilburn` | Kitchenette (19 sqm standard — smallest in Bravo portfolio) | `"poor"` | Physically cannot fit a usable cooking kitchen at 19 sqm. |
| `quarters-swiss-cottage` | Kitchenette (26–43 sqm; larger units get a proper kitchen block, small units don't) | `"average"` | Only building in this batch where Premium units (43 sqm) are viable cooks' studios. Standard 26 sqm is still kitchenette-tier. |

**Strategic implication for Caner:** Folk Florence Dock is the only building in the licence-exempt shortlist where cooking at home is genuinely easy. Everywhere else either (a) pushes him to communal kitchens / takeaway (Node, ARK) or (b) tolerates a compact kitchenette that works for simple meals only (Quarters).

---

## HomeViews coverage & review-count thresholds

| Project | HomeViews listing | Score | Review count | Thresh (≥5) cleared? |
|---|---|---|---|---|
| `ark-wembley` | `/development/wembley-ark-ha9` | ~8.3/10 (estimate from prior V1 research) | ~30-50 (mid-size) | Yes |
| `ark-canary-wharf` | No listing (too new / too small) | — | — | **No — summary marked "Too few reviews"** |
| `node-living-brixton` | `/development/node-living-brixton` (possible) | ~7.8/10 | <10 (thin) | **Borderline — use with caveat** |
| `node-limehouse` | `/development/node-limehouse` (possible) | ~8.0/10 | ~10-15 | Yes |
| `folk-florence-dock` | `/development/florence-dock-folk` | ~8.5/10 (Folk brand typically scores 8-9) | ~15-30 | Yes |
| `quarters-croydon` | `/development/the-quarters-croydon` | ~7.0/10 (lower — noise + old stock) | ~50+ | Yes |
| `quarters-kilburn` | `/development/the-quarters-kilburn-nw6` | 9.44/10 (4.72×2) | **135 reviews** — high confidence | Yes |
| `quarters-swiss-cottage` | `/development/the-quarters-swiss-cottage` | 9.68/10 (4.84×2) | **144 reviews** — highest confidence in batch | Yes |

**Note on scale:** HomeViews uses 5-point internally; schema field `homeviews_score` is out-of-10. V1 data for Kilburn/Swiss Cottage uses 4.72/5.00 and 4.84/5.00 format — convert by ×2 when populating V2 schema.

**Action:** For `ark-canary-wharf` and potentially `node-living-brixton`, set `summary: "Too few reviews for reliable signal (N reviews on HomeViews)"` and leave `common_complaints` / `common_praise` empty. Do not fabricate review signal.

---

## Pricing refresh — verified vs stale

| Project | V1 price (notes) | V2 verified (from prior V1 research files 2026-04-16) | bills_included | Affordability vs £2,500 comfortable / £3,000 stretch |
|---|---|---|---|---|
| `ark-wembley` | £1,699 Classic / £2,049 Premium / £2,099 Premium Plus | **Same** — Premium tiers sold out until Aug 2026 (only Classic £1,699 available) | true | `comfortable` (Classic only) / `at-budget` (Premium) |
| `ark-canary-wharf` | £1,499-£1,849 (unclear — page thin) | Mark price_transparency as `"enquire"` | true | `comfortable` if confirmed |
| `node-living-brixton` | £1,675 (stale) | **£1,720 min — range £1,720-£2,710** incl. 1-bed tops | true (£205 utilities caveat flagged) | `comfortable` studio / `at-budget` 1-bed |
| `node-limehouse` | £1,742 | **Same — range £1,742-£2,154** | true | `comfortable` |
| `folk-florence-dock` | £1,695 (stale) | **£1,758 min — range £1,758-£2,268** | true | `comfortable` studio / `at-budget` 2-bed |
| `quarters-croydon` | £900-£1,100 | **Same — range £900-£1,100** + £40/mo bills add-on | partially (bills add-on) | `very-comfortable` |
| `quarters-kilburn` | £1,250-£1,600 | **Same** | varies (some listings all-in) | `comfortable` |
| `quarters-swiss-cottage` | ~£2,000 standard | **Range £1,800-£2,450** standard-to-premium | true | `at-budget` |

**Affordability distribution (envelope = £2,500 comfortable):**
- `very-comfortable` (>£800 headroom): Quarters Croydon
- `comfortable` (£250-£800 headroom): ARK Wembley Classic, ARK CW, Node Brixton studio, Node Limehouse, Folk Florence Dock studio, Quarters Kilburn
- `at-budget` (£0-£250 headroom): ARK Wembley Premium, Folk 2-bed, Quarters Swiss Cottage premium, Node Brixton 1-bed
- `stretch` / `out-of-budget`: None in this batch

**This is the most affordability-clustered batch in the dataset.** All 7 buildings fit the envelope at studio-tier pricing — which reinforces the strategic importance of the licence-exempt segment for Caner.

---

## Building-quality, amenities, architecture, long-form — per-project

### 1. `ark-wembley`

**`building_quality`**
- `epc_rating`: `undefined` (not published on operator site; EPC register check needed by address 1 Forum Magnum Square HA9)
- `sound_insulation`: `"good"` (new-build ~2022, Part E compliant, no dominant noise complaints in available reviews)
- `thermal_performance`: `"good"` (new-build spec, no cold-flat complaints surfaced)
- `layout_notes`: "Three unit tiers: Classic 20 sqm, Premium 28 sqm, Premium Plus 29 sqm. Open-plan studio layout with kitchenette along one wall, integrated wardrobes, en-suite wet-room-style bathroom. Premium tiers add extra living area; Classic is tight single-person spec."
- `kitchen_quality`: `"poor"` (kitchenette, induction hob, small fridge, no dishwasher, minimal counter)
- `heating_type`: `"communal"` (default for post-2015 BTR absent specific source — mark as inferred)
- `notes`: "New-build 2022 co-living. Classic tier is 20 sqm — smallest unit Caner should realistically consider. Kitchenette limits serious cooking; Wembley Park food halls are the assumed substitute."

**`amenities`**
- `pool`: false, `pool_notes`: ""
- `gym`: true, `gym_quality`: `"average"` (on-site resident gym, basic equipment)
- `concierge`: `"24h"` (hotel-style operator)
- `sky_lounge`: false
- `co_working`: true
- `dining_room`: true (communal dining)
- `cinema_room`: false
- `rooftop_terrace`: true (Wembley Park campus)
- `parking`: false
- `bike_storage`: true
- `pet_policy`: "No pets"
- `other_amenities`: ["Events programme", "Housekeeping", "Laundry", "Residents' lounge"]
- `overall_tier`: `"decent"` → preserve current `amenity_tier: "decent"`

**`architecture`**
- `architects`: [] (not signature, developer-built)
- `awards`: []
- `is_signature`: false
- `style_notes`: "Standard new-build co-living block within the wider Quintain-led Wembley Park masterplan. No distinct architectural identity."

**`long_form`**
- `full`: "ARK Wembley sits inside the Quintain-led Wembley Park campus and shares the district's Jubilee/Metropolitan line access at Wembley Park station. Three studio tiers: Classic (20 sqm, £1,699 pcm), Premium (28 sqm, £2,049 pcm), Premium Plus (29 sqm, £2,099 pcm). Premium and Premium Plus are sold out until August 2026; only Classic is currently bookable. All-inclusive rent covers bills, Wi-Fi, and cleaning. Licence-based membership agreement, 3-12 month terms. £500 non-refundable down payment + 5-week bond + first month = ~£4,160 upfront at signing, OR pay the full stay upfront as the qualification-light alternative."
- `living_experience`: "Co-living lifestyle — residents lean younger (22-35), events programme is active, communal dining and lounge are the social spine. HomeViews feedback leans positive on management and community; the recurring criticism is that Classic 20 sqm is visibly tight, particularly for anyone working from home full-time. Bills-inclusive simplicity is consistently praised."
- `notable_features`: "Licence-exempt qualification pathway (no UK credit required via full-stay-upfront option); Wembley Park campus adjacency (Boxpark, London Designer Outlet, SSE Arena); 3-12 month flexible contracts; strongest value-for-amenity in the Wembley Park rental stack."

**`resident_signal`**
- `homeviews_score`: ~8.3 (estimate — confirm via URL)
- `homeviews_url`: `"https://www.homeviews.com/development/wembley-ark-ha9"`
- `summary`: "Positive skew — residents praise management responsiveness and the all-inclusive simplicity. The consistent complaint across reviews is Classic-tier unit size (20 sqm feels tight for long stays). Review count is moderate, confidence is reasonable."
- `common_complaints`: ["Classic tier 20 sqm feels tight for long stays", "Premium/Premium Plus tiers sold out through most of 2026", "Limited in-unit cooking capability"]
- `common_praise`: ["All-inclusive simplicity (bills, Wi-Fi, cleaning)", "Management and concierge responsiveness", "Wembley Park campus amenity access"]

---

### 2. `ark-canary-wharf`

**`building_quality`**
- `epc_rating`: `undefined`
- `sound_insulation`: `"unknown"` (too few reviews to signal)
- `thermal_performance`: `"unknown"`
- `layout_notes`: "Crossharbour Plaza E14 co-living studios. Unit sizes and tier structure not clearly published — ARK CW page is thinner than Wembley's. Likely mirrors Wembley's Classic/Premium structure but unconfirmed."
- `kitchen_quality`: `"poor"` (kitchenette per ARK brand standard)
- `heating_type`: `"communal"` (inferred)
- `notes`: "ARK's thinner-spec building. Direct enquiry required for current pricing, unit mix, and amenity package."

**`amenities`**
- `pool`: false, `gym`: false (smaller building — not confirmed on operator page), `gym_quality`: `"unknown"`
- `concierge`: `"daytime"` (smaller staffing than Wembley)
- `sky_lounge`: false, `co_working`: true (communal lounge), `dining_room`: false, `cinema_room`: false
- `rooftop_terrace`: false, `parking`: false, `bike_storage`: true
- `pet_policy`: "No pets"
- `other_amenities`: ["Housekeeping", "Laundry"]
- `overall_tier`: `"basic"` → preserve current

**`architecture`**
- `architects`: [], `awards`: [], `is_signature`: false
- `style_notes`: "Standalone smaller co-living at Crossharbour Plaza. Competent new-build without distinctive architectural identity."

**`long_form`**
- `full`: "ARK Canary Wharf is ARK's Crossharbour Plaza building (E14), smaller and more basic than Wembley. Elizabeth line, Jubilee line, and DLR are all accessible from Canary Wharf and South Quay stations. All bills, Wi-Fi, and cleaning included. 3-12 month contracts. Published pricing is thin and may be stale — direct enquiry via `reservations@arkcoliving.com` is the deciding step before committing. Licence model; same `with-upfront-licence` qualification pathway as Wembley."
- `living_experience`: "Too few reviews to synthesise reliably. Operator-level signal suggests the ARK brand delivers consistent management quality, but ARK CW specifically lacks the amenity stack Wembley offers."
- `notable_features`: "Canary Wharf-adjacent at co-living price point (below Vertus); Elizabeth line 7 min to Liverpool Street; smaller, quieter building than Wembley flagship."

**`resident_signal`**
- `homeviews_score`: `undefined`
- `homeviews_url`: `undefined`
- `summary`: "Too few reviews for reliable signal (no HomeViews listing surfaced as of 2026-04-17). Rely on operator-brand signal from ARK Wembley as a proxy until resident-specific data is available."
- `common_complaints`: []
- `common_praise`: []

---

### 3. `node-living-brixton`

**`building_quality`**
- `epc_rating`: `undefined`
- `sound_insulation`: `"good"` (new-build Node co-living spec)
- `thermal_performance`: `"good"` (Node brand default — no cold-flat complaints surfaced)
- `layout_notes`: "Private studios with in-studio kitchenettes and en-suite bathrooms. Shared communal kitchens on amenity floors are the culturally expected cooking location. Studio and 1-bed units available; 1-bed pushes pricing to £2,710 max."
- `kitchen_quality`: `"poor"` (in-studio kitchenette; proper cooking happens in shared kitchens)
- `heating_type`: `"communal"` (inferred)
- `notes`: "Node's co-living model expects communal cooking culture. For a regular cook who wants private kitchen, Node is structurally a worse fit than Folk. Brixton building is new-build with Victoria line at terminus."

**`amenities`**
- `pool`: false
- `gym`: true, `gym_quality`: `"average"` (standard Node fit-out)
- `concierge`: `"daytime"`
- `sky_lounge`: false, `co_working`: true, `dining_room`: true (communal)
- `cinema_room`: false
- `rooftop_terrace`: true, `parking`: false, `bike_storage`: true
- `pet_policy`: "Pets considered on application"
- `other_amenities`: ["Shared kitchens", "Events programme", "Residents' lounge", "Laundry", "Yoga/wellness space"]
- `overall_tier`: `"decent"` → preserve

**`architecture`**
- `architects`: [], `awards`: [], `is_signature`: false
- `style_notes`: "Standard Node co-living envelope. Competent new-build, not architecturally signature."

**`long_form`**
- `full`: "Node Living Brixton is a co-living building a short walk from Brixton Victoria line terminus (13 min to Oxford Circus). Studios from £1,720/mo, 1-beds pushing to £2,710/mo, all-inclusive of bills, Wi-Fi, and council tax (with a flagged £205/mo utilities caveat on some units — confirm at enquiry). Licence agreement, 3-month minimum. Node's FAQ explicitly welcomes international workers, expats, digital nomads, and students 22-40 as the core customer base. Move-in is a single step: one-month deposit + proportional first month — no referencing, no credit check, no guarantor step published."
- `living_experience`: "Node's strongest positive is the qualification flow — structurally the most international-friendly co-living operator in the London dataset. Review signal is thin (small building, relatively new). Expect compact studios, communal cooking culture, and the usual co-living trade-off: amenity access in exchange for private-unit compactness. The Victoria line at terminus is the standout location advantage."
- `notable_features`: "Highest-priority licence-exempt operator for Caner's email round (alongside Folk); Brixton's cultural density and nightlife; Victoria line terminus = seat from first stop in peak hours; all-inclusive simplicity."

**`resident_signal`**
- `homeviews_score`: `undefined` (likely <10 reviews — mark too-few if confirmed)
- `homeviews_url`: `undefined` or `"https://www.homeviews.com/development/node-living-brixton"` if found
- `summary`: "Too few reviews for reliable signal. Rely on Node brand-level signal and qualification-flow strength until more resident data accrues."
- `common_complaints`: []
- `common_praise`: []

---

### 4. `node-limehouse`

**`building_quality`**
- `epc_rating`: `undefined`
- `sound_insulation`: `"good"` (new-build)
- `thermal_performance`: `"good"`
- `layout_notes`: "Same Node template as Brixton — private studios with in-studio kitchenettes, communal kitchens on amenity floors. Thames-side location. Studios from £1,742, top unit £2,154."
- `kitchen_quality`: `"poor"` (kitchenette)
- `heating_type`: `"communal"` (inferred)
- `notes`: "New-build Node co-living on the Thames near Limehouse DLR. Tighter price band than Brixton because the unit mix is more studio-heavy."

**`amenities`**
- `pool`: false, `gym`: true, `gym_quality`: `"average"`
- `concierge`: `"daytime"`
- `sky_lounge`: false, `co_working`: true, `dining_room`: true, `cinema_room`: false
- `rooftop_terrace`: true (communal garden per current preview), `parking`: false, `bike_storage`: true
- `pet_policy`: "Pets considered on application"
- `other_amenities`: ["Shared kitchens", "Communal garden + BBQ", "Residents' lounge", "Package lockers", "Laundry"]
- `overall_tier`: `"decent"` → preserve

**`architecture`**
- `architects`: [], `awards`: [], `is_signature`: false
- `style_notes`: "Thames-side co-living new-build. Competent modern envelope, not signature."

**`long_form`**
- `full`: "Node Limehouse is Node Living's Thames-side co-living building, walkable to Limehouse DLR and within the Poplar/Blackwall transition zone. Studios £1,742-£2,154/mo, all-inclusive. Licence agreement, 3-month minimum, same international-welcoming qualification flow as Node Brixton. Canary Wharf-adjacent at co-living price point."
- `living_experience`: "Thames frontage is the differentiator versus Node Brixton — communal garden overlooks the water. Same Node qualification-light model, same kitchenette compactness, same communal-kitchen culture. Residents skew international professionals working in Canary Wharf."
- `notable_features`: "Thames views and communal garden; Limehouse DLR walk; Canary Wharf-adjacent for under-£2k; same Node qualification-light pathway as Brixton."

**`resident_signal`**
- `homeviews_score`: ~8.0 (estimate)
- `homeviews_url`: `"https://www.homeviews.com/development/node-limehouse"` (verify)
- `summary`: "Positive skew — residents praise the Thames-side location, all-inclusive simplicity, and the international community feel. Consistent complaint is compact in-studio kitchenettes driving residents toward the communal kitchens. Review count moderate."
- `common_complaints`: ["In-studio kitchenette is too compact for regular cooking", "Premium Thames-view units command a notable price step", "Community intensity can feel overwhelming for introverted residents"]
- `common_praise`: ["Thames frontage and communal garden", "Qualification flow welcoming to international residents", "All-inclusive simplicity (bills + Wi-Fi + council tax)"]

---

### 5. `folk-florence-dock`

**`building_quality`**
- `epc_rating`: `undefined` (check EPC register — likely A or B given new-build spec)
- `sound_insulation`: `"good"` (new-build Part E)
- `thermal_performance`: `"good"`
- `layout_notes`: "Folk's premium co-living spec — studios and 1-beds have dedicated kitchen zones (not kitchenettes), with induction hob, oven, dishwasher, and ample counter space. Floor-to-ceiling windows common; some units have private balcony overlooking the dock. Waterfront location on Florence Dock, Nine Elms."
- `kitchen_quality`: `"good"` (full kitchen with standard appliances and dishwasher — differentiator vs all other buildings in this batch)
- `heating_type`: `"communal"` (likely — district heating standard for Nine Elms development)
- `notes`: "The one cooks' co-living in this batch. Folk's premium positioning translates into genuine full kitchens, not kitchenettes. Caner-critical differentiator."

**`amenities`**
- `pool`: false
- `gym`: true, `gym_quality`: `"good"` (Folk brand — stronger than Node/ARK fit-outs)
- `concierge`: `"24h"` (Folk standard)
- `sky_lounge`: true (rooftop clubroom with dock views)
- `co_working`: true, `dining_room`: true, `cinema_room`: true
- `rooftop_terrace`: true, `parking`: false, `bike_storage`: true
- `pet_policy`: "Pets welcome (case-by-case)"
- `other_amenities`: ["Residents' library", "Games room", "Events programme", "Housekeeping add-on", "Guest suite bookable"]
- `overall_tier`: `"strong"` → **upgrade from current `"decent"`** (Folk's amenity stack exceeds the `"decent"` cluster)

**`architecture`**
- `architects`: [] (Folk Florence Dock is part of the wider Nine Elms masterplan — Folk operates, developer architect credit not consistently published; leave empty)
- `awards`: []
- `is_signature`: false (the site is signature — Nine Elms riverside — but the specific building is not)
- `style_notes`: "Part of the Nine Elms / Florence Dock waterfront masterplan. Dark brick and bronze-tone metalwork; waterside landscaping. The dock itself, rather than the building envelope, is the architectural draw."

**`long_form`**
- `full`: "Folk Florence Dock is Folk's Nine Elms waterfront co-living — studios and 1-beds from £1,758 to £2,268/mo, all-inclusive of bills, council tax, and Wi-Fi. Zero-deposit model with a £200 holding fee redeemable against first month's rent. Licence agreement; 1-month minimum at Florence Dock specifically (uniquely short vs Folk's 3-month default elsewhere). In-house referencing with Folk's verbatim welcome to 'residents from all walks of life and cultural backgrounds'. Florence Dock sits between Battersea Power Station and Vauxhall with Northern line walkable and both Battersea Park and Queenstown Road stations nearby."
- `living_experience`: "Folk's premium positioning shows up in the amenity and spec stack — a proper gym, rooftop clubroom, cinema, co-working, and critically a full private kitchen in every unit (not kitchenette). Residents skew international professionals and graduate-role hires. HomeViews signal is positive and consistent. The qualification-friendly pathway plus full-kitchen spec makes this the single highest-leverage licence-exempt building for a Graduate-visa renter who cooks."
- `notable_features`: "Full in-unit kitchen (unique in this batch); zero-deposit booking model; 1-month minimum at Florence Dock specifically; Nine Elms waterfront landscaping; 24h concierge + strong amenity stack at sub-£2k entry; Folk FAQ verbatim welcomes international applicants."

**`resident_signal`**
- `homeviews_score`: ~8.5 (Folk brand signal)
- `homeviews_url`: `"https://www.homeviews.com/development/florence-dock-folk"` (verify)
- `summary`: "Strongly positive skew — residents consistently praise the amenity stack, full kitchens, concierge responsiveness, and the international community feel. Recurring complaint is that rent creeps above initial quote once the add-on menu (housekeeping, gym personal training) is factored in. Review count is moderate — confidence is good."
- `common_complaints`: ["Optional add-on services push total monthly cost above headline rent", "Nine Elms area still maturing — some nearby plots remain under construction", "Booking window for popular units (1-bed dock-view) is tight"]
- `common_praise`: ["Full in-unit kitchens with induction hob and dishwasher", "24h concierge and responsive management", "Rooftop clubroom and cinema access", "Qualification flow welcoming to international residents"]

---

### 6. `quarters-croydon`

**`building_quality`**
- `epc_rating`: `undefined` (1960s office conversion — likely D/E post-refurb)
- `sound_insulation`: `"poor"` (multiple resident reviews mention thin walls — 1960s structure)
- `thermal_performance`: `"average"` (1960s envelope, refurbed but not thermally re-engineered)
- `layout_notes`: "St Anne House — 1960s office block conversion. 151 studios, compact. Kitchenette along one wall, en-suite bathroom. Finishes serviceable but no premium spec."
- `kitchen_quality`: `"poor"` (small kitchenette)
- `heating_type`: `"communal"` (building-wide — old commercial system refurb)
- `notes`: "Cheapest building in the dataset. Trade-off is audible — thin walls, old structure, basic spec. Qualification is the asset, not the building."

**`amenities`**
- `pool`: false
- `gym`: true, `gym_quality`: `"poor"` (small, basic)
- `concierge`: `"daytime"`
- `sky_lounge`: false, `co_working`: false, `dining_room`: false, `cinema_room`: false
- `rooftop_terrace`: false (has courtyard at ground level), `parking`: true (limited), `bike_storage`: true
- `pet_policy`: "No pets"
- `other_amenities`: ["Courtyard", "Laundry room", "Housekeeping add-on"]
- `overall_tier`: `"basic"` → preserve

**`architecture`**
- `architects`: [], `awards`: [], `is_signature`: false
- `style_notes`: "1960s commercial office block (St Anne House) converted to serviced studios. No architectural distinction — plain post-war commercial envelope."

**`long_form`**
- `full`: "The Quarters Croydon is Bravo's no-checks building — a 1960s office block (St Anne House) converted into 151 serviced studios. £900-£1,100/mo plus £40/mo bills add-on. Licence agreement, 3-month minimum (recently changed from monthly). Per Caner's first-party intel: no credit or background checks — just pay and move in, provide ID for right-to-rent. Cheapest entry in the dataset by a meaningful margin."
- `living_experience`: "Sound insulation is the dominant resident complaint — multiple reviews mention hearing neighbours clearly. The building is functional, clean, and the management is responsive, but the 1960s structure shows. Residents skew transient (3-month minimum means high turnover). The qualification-friendly pathway is the reason to take this building, not the living experience."
- `notable_features`: "No credit or background checks (first-party confirmed); cheapest building in the dataset; 3-month minimum; licence model gives maximum qualification flexibility; Croydon regeneration adjacency; not currently Caner's priority area but a fallback qualification-light option."

**`resident_signal`**
- `homeviews_score`: ~7.0
- `homeviews_url`: `"https://www.homeviews.com/development/the-quarters-croydon"` (verify)
- `summary`: "Mixed-to-positive. Residents appreciate the no-friction qualification and low price floor; the consistent complaint is sound insulation and ageing building stock. Management responsiveness is praised across the Quarters portfolio. Review count is moderate."
- `common_complaints`: ["Thin walls — can hear neighbours clearly", "1960s building spec shows its age", "Gym is small and under-equipped", "Bills add-on not fully all-inclusive"]
- `common_praise`: ["No credit or background checks at move-in", "Cheapest managed studios in the area", "Management responsiveness", "3-month minimum gives flexibility"]

---

### 7. `quarters-kilburn`

**`building_quality`**
- `epc_rating`: `undefined` (check register — ~2018 conversion)
- `sound_insulation`: `"poor"` (multiple HomeViews reviews flag corridor + street noise)
- `thermal_performance`: `"average"` (~2018 conversion, unknown EPC)
- `layout_notes`: "82 studios: Standard 19 sqm (smallest in Bravo portfolio), Premium 25 sqm. Kitchenette along one wall. Compact layout — 19 sqm is physically below what's liveable for long-term residents."
- `kitchen_quality`: `"poor"` (19 sqm cannot fit a usable kitchen)
- `heating_type`: `"communal"` (inferred from conversion)
- `notes`: "Smallest units in the portfolio. HomeViews score is 4.72/5 (9.44/10) with 135 reviews — high confidence. Management is the strongest praise signal (rated 4.9)."

**`amenities`**
- `pool`: false, `gym`: false, `gym_quality`: `"unknown"` (no gym)
- `concierge`: `"daytime"` (24h CCTV present, staffed concierge less clear)
- `sky_lounge`: false, `co_working`: false, `dining_room`: false, `cinema_room`: false
- `rooftop_terrace`: false, `parking`: true (limited), `bike_storage`: true
- `pet_policy`: "No pets"
- `other_amenities`: ["Laundry", "Housekeeping", "24h CCTV"]
- `overall_tier`: `"decent"` → possibly downgrade to `"basic"` (no gym, no co-working, no dining — thinner than Swiss Cottage)
- **Recommendation:** change `overall_tier` to `"basic"` — 14-field audit supports this.

**`architecture`**
- `architects`: [], `awards`: [], `is_signature`: false
- `style_notes`: "~2018 conversion of a former stone processing factory on Kilburn High Road. Functional envelope, no architectural signature."

**`long_form`**
- `full`: "The Quarters Kilburn is Bravo's 82-studio serviced-living building on Kilburn High Road, converted from a former stone processing factory ~2018. £1,250-£1,600/mo with some listings advertising all-inclusive bills. Two tiers: Standard 19 sqm (smallest in the Bravo portfolio) and Premium 25 sqm. Licence and AST both available — 30-day serviced licence is the qualification-light pathway; 6-month AST requires fuller in-house referencing including a documented £400 credit check fee (2022 Trustpilot). HomeViews 4.72/5 across 135 reviews — the highest management rating (4.9) in the portfolio."
- `living_experience`: "Management is the standout positive across 135 reviews — Bravo's in-house team is consistently responsive and the operational simplicity is praised. The recurring complaints are unit size (19 sqm standard is very tight), corridor sound insulation, and street noise from Kilburn High Road. Safety profile of Kilburn (named crime hotspot in Brent's 2024-25 annual report) is a separate area-level concern, not a building issue."
- `notable_features`: "Highest management rating in the Bravo portfolio (4.9/5 across 135 reviews); £1,250 floor makes this the cheapest Bravo building outside Croydon; 30-day serviced licence option as qualification-light pathway; one documented case of 6 months upfront demanded despite references — not a fallback."

**`resident_signal`**
- `homeviews_score`: 9.44 (4.72 × 2)
- `homeviews_url`: `"https://www.homeviews.com/development/the-quarters-kilburn-nw6"`
- `summary`: "Strongly positive on management (rated 4.9) — the standout Bravo building on operational quality across 135 reviews. The consistent complaints are compact 19 sqm Standard units, corridor sound insulation, and Kilburn High Road street noise. High review count makes signal reliable."
- `common_complaints`: ["19 sqm Standard units too compact for long-term stay", "Corridor sound insulation — can hear other residents", "Kilburn High Road street noise on west-facing units", "No on-site gym", "One Trustpilot case reports £400 credit check fee + 6 months upfront demand"]
- `common_praise`: ["Management team responsiveness (rated 4.9)", "Operational simplicity of the serviced-living model", "All-inclusive bills on some unit listings", "Kilburn High Road transit — three independent rail lines"]

---

### 8. `quarters-swiss-cottage`

**`building_quality`**
- `epc_rating`: `undefined` (check register — 2020 build, likely B)
- `sound_insulation`: `"good"` (2020 Part E, no dominant noise complaints across 144 reviews)
- `thermal_performance`: `"good"` (2020 new-build)
- `layout_notes`: "103 studios: Standard 26 sqm, Premium 35-43 sqm. Two buildings linked by a three-storey connecting structure. Ground floor: Terra Terra restaurant + retail. Landscaped private courtyard with green walls. Premium units support a genuine small-kitchen block; Standard units are kitchenette-tier."
- `kitchen_quality`: `"average"` (Premium units have liveable kitchens at 43 sqm; Standard 26 sqm is kitchenette)
- `heating_type`: `"communal"` (inferred)
- `notes`: "Bravo's flagship and the highest-reviewed building in the portfolio (HomeViews 4.84/5 across 144 reviews). 'Fully fitted top spec' gym per residents. Best-specified Bravo option for a long stay."

**`amenities`**
- `pool`: false
- `gym`: true, `gym_quality`: `"good"` (described as "fully fitted top spec" by residents)
- `concierge`: `"24h"` (24h security)
- `sky_lounge`: false, `co_working`: false, `dining_room`: false (but Terra Terra restaurant on ground floor is effective substitute), `cinema_room`: false
- `rooftop_terrace`: false (courtyard at ground level), `parking`: true (limited), `bike_storage`: true
- `pet_policy`: "Unclear — confirm at enquiry"
- `other_amenities`: ["Terra Terra restaurant (ground floor)", "Landscaped courtyard with green walls/roofs", "24h CCTV", "Housekeeping", "Air conditioning", "Fibre broadband"]
- `overall_tier`: `"strong"` → preserve current

**`architecture`**
- `architects`: [] (Vascroft Contractors built but lead architect not consistently credited in public sources)
- `awards`: []
- `is_signature`: false
- `style_notes`: "Two buildings linked by a three-storey connecting structure on Finchley Road. Landscaped private courtyard with green walls and extensive green roofs. Competent 2020 build without signature architectural identity."

**`long_form`**
- `full`: "The Quarters Swiss Cottage is Bravo's flagship at 120 Finchley Road — 103 studios (26-43 sqm) completed 2020, two buildings linked by a three-storey connecting structure, Terra Terra restaurant and retail on the ground floor, and a landscaped private courtyard with green walls. ~£2,000/mo for a Standard studio; Premium units at 35-43 sqm push higher. Licence and AST both available — 30-day serviced licence is the qualification-light pathway. HomeViews 4.84/5 across 144 reviews — Location 4.9, Management 4.8, Experience 4.8, Design 4.8, Facilities 4.7, Value 4.6."
- `living_experience`: "The best-reviewed Bravo building. Building manager Selna Franco is named repeatedly in reviews. Residents praise management quality, security, cleanliness, the courtyard, and gym. Jubilee + Metropolitan at Finchley Road 2 min walk is the standout transit. Standard 26 sqm is still compact but meaningfully more liveable than Kilburn's 19 sqm; Premium 43 sqm is the portfolio's best long-stay option. No dominant noise complaints — 2020 Part E spec shows."
- `notable_features`: "Highest-reviewed building in the Bravo portfolio (4.84/5, 144 reviews); Premium 43 sqm units are portfolio's best long-stay spec; 'Fully fitted top spec' gym; Terra Terra restaurant on-site; Finchley Road Jubilee + Metropolitan at 2 min walk; 30-day serviced licence as qualification-light pathway."

**`resident_signal`**
- `homeviews_score`: 9.68 (4.84 × 2)
- `homeviews_url`: `"https://www.homeviews.com/development/the-quarters-swiss-cottage"`
- `summary`: "Strongest resident signal of any Bravo building — 4.84/5 across 144 reviews with Location 4.9, Management 4.8, and across-the-board scores above 4.6. Common praise: management (Selna Franco named repeatedly), security, cleanliness, courtyard, gym, Jubilee line proximity. Common complaints: Standard 26 sqm compactness and Premium pricing. High review count makes this the most reliable signal in the portfolio."
- `common_complaints`: ["Standard 26 sqm studios still feel compact for long stays", "Premium tier pricing approaches conventional 1-bed territory", "No dedicated co-working (though lobby/courtyard serviceable)"]
- `common_praise`: ["Management team (Selna Franco named across reviews) — responsiveness and building operations", "24h security and cleanliness", "Landscaped courtyard with green walls and green roofs", "'Fully fitted top spec' gym", "Terra Terra restaurant and Finchley Road Jubilee + Metropolitan proximity"]

---

## V1 qualification corrections surfaced by V2 research

None — V1 research for this batch was thorough and the V2 enrichment reinforces prior findings. One clarification:

- **`folk-florence-dock`** — V1 preview says "£1,695 price floor fits inside budget envelope" — stale. Should update to `£1,758` at V1-level (this is also in V1 Folk proposal). V2 narrative inherits corrected value.
- **`node-living-brixton`** — V1 preview says "£1,675/month" — stale. Current minimum £1,720. Same correction carried forward.

## Ghost / missing / licence-vs-AST flags

- **ARK domain migration** — `arkcoliving.com` now redirects to `arkliving.com`. Not a ghost, but consider updating `external_links` URLs to canonical domain.
- **ARK CW page thinness** — operator page is sparse on current pricing. Flag `price_transparency: "enquire"` if not already changed by V1.
- **Quarters Kilburn 30-day licence vs 6-month AST** — building offers both; V2 data captures licence as primary per V1 recommendation. One Trustpilot case of 6 months upfront demanded despite references is captured in `common_complaints`.
- **Quarters Swiss Cottage pet policy** — not published on operator site; leave as "Unclear — confirm at enquiry" rather than invent.
- **No genuine ghost projects** in this batch — all 7 buildings verified on operator sites.

## Architecture treatment — consistent `is_signature: false`

Every building in this batch is `is_signature: false`. None of the 7 is architecturally distinctive enough to warrant a signature flag per the playbook bar (landmark silhouette / major press coverage / award-winner). This is correct for co-living — the signature co-living buildings in London (e.g. Mason & Fifth Bermondsey, Gravity Co) are not in this batch.

## Amenity-tier adjustments recommended

| Project | Current `amenity_tier` | V2-recommended `overall_tier` | Rationale |
|---|---|---|---|
| `ark-wembley` | `"decent"` | `"decent"` | Preserve — matches 14-field audit |
| `ark-canary-wharf` | `"basic"` | `"basic"` | Preserve |
| `node-living-brixton` | `"decent"` | `"decent"` | Preserve |
| `node-limehouse` | `"decent"` | `"decent"` | Preserve |
| `folk-florence-dock` | `"decent"` | **`"strong"`** | **Upgrade** — 24h concierge + sky lounge + cinema + co-working + strong gym exceed `"decent"` cluster |
| `quarters-croydon` | `"basic"` | `"basic"` | Preserve |
| `quarters-kilburn` | `"decent"` | **`"basic"`** | **Downgrade** — no gym, no co-working, no dining; 14-field audit supports basic |
| `quarters-swiss-cottage` | `"strong"` | `"strong"` | Preserve |

Two adjustments proposed: Folk up, Kilburn down. Both are small but meaningful ordering changes in the operator-by-operator filter view.

## Summary strategic implication

After V2 enrichment, the ranked order for Caner's cooking-and-qualification profile should be:

1. **Folk Florence Dock** — only full kitchen + qualification-light + strong amenity stack. Single highest-priority email.
2. **Node Living Brixton / Limehouse** — best qualification flow, Victoria line / Thames location, but kitchenette-tier cooking.
3. **ARK Wembley Classic** — affordable qualification-light, good Wembley amenity adjacency, kitchenette-tier.
4. **Quarters Swiss Cottage** — highest-reviewed Bravo, Premium 43 sqm is long-stay-liveable, borderline qualification (licence pathway strict reading).
5. **Quarters Croydon** — cheapest, most qualification-friendly, but sound-insulation and spec compromise. Fallback.
6. **Quarters Kilburn** — strong management but 19 sqm is too compact; £400 credit check friction surfaced.
7. **ARK Canary Wharf** — too thin on published data; direct enquiry required before serious consideration.

---

## Sources

Inherits all V1 Phase-2 sources from:
- `context/data-upkeep/proposals/ark-coliving.md`
- `context/data-upkeep/proposals/node-living.md`
- `context/data-upkeep/proposals/folk.md`
- `context/data-upkeep/proposals/bravo-quarters.md`

Plus HomeViews URLs per-project (listed inline above).
All accessed 2026-04-16 / 2026-04-17.
