# V2 Enrichment — Licence-exempt Operators (shortlist-priority batch)

**Batch scope**: Folk (1) + Locke/Staycity (3) + Bravo/The Quarters (3 — Croydon, Kilburn, Swiss Cottage) + Flexistay (1) + Dolphin Living (2 — Dolphin Square PRS + Dolphin House Serviced) + Citadines (1) + Staybridge Suites (1) + MHA London (1) + The Gate (1) + Dandi (1) = **15 projects**.

**Why this batch**: licence-exempt operators bypass the post-RRA advance-rent cap and most structural referencing — Caner's primary qualification pathway. Kitchen quality is the dataset-anchor differentiator across this category: Folk / Locke Studio = `good`; Quarters = `average`; Flexistay / Staybridge / Citadines / The Gate = `poor`.

**Comparables anchors used**:
- Kitchen: Folk Florence Dock (`good`) vs Quarters Croydon (`average`) vs Flexistay Tooting (`poor`)
- Amenity tier: Folk Florence Dock (`strong`) vs Locke Kingsland (`strong`) vs Quarters Swiss Cottage (`strong`) vs Quarters Kilburn (`decent`) vs Flexistay Tooting (`basic`)
- Affordability envelope: ≤£2,250 no-bills / ≤£2,750 all-in

**Kitchen quality distribution across this batch**:
| Value | Projects |
|---|---|
| `excellent` | 0 (ceiling not reached in licence category) |
| `good` | 4 — Folk Florence Dock, Bermonds Locke, Kingsland Locke, Ember Locke |
| `average` | 4 — Quarters Croydon, Quarters Kilburn, Quarters Swiss Cottage, Dolphin House Serviced |
| `poor` | 6 — Flexistay Tooting, Staybridge Vauxhall, Citadines Islington, The Gate, Dandi Battersea, MHA Sovereign Court* |
| `unknown` | 1 — Dolphin Square PRS (heritage mansion, unit-specific) |

*MHA Sovereign Court is a neo-Georgian conversion with PRS tenancy rather than apart-hotel — kitchen likely `average` per flat but no operator-published detail.

**Affordability distribution across this batch**:
| Tag | Projects |
|---|---|
| `well-under-budget` | Quarters Croydon (£900-£1,100) |
| `comfortably-affordable` | Quarters Kilburn (£1,250-£1,600), Folk Florence Dock (£1,695-£1,800), Dandi Battersea (£1,750), The Gate (£1,900) |
| `at-budget` | Quarters Swiss Cottage (~£2,000), Flexistay Tooting (£1,800-£2,500+VAT) |
| `stretch` | Citadines Islington (£2,500-£3,500), Dolphin House Serviced (varies premium) |
| `over-budget` | Staybridge Vauxhall (£3,000-£4,000), Kingsland Locke (£3,900+), Ember Locke (£3,000-£5,000), Bermonds Locke (~£3,000+) |
| `unclear` | Dolphin Square PRS (per-unit), MHA Sovereign Court (per-unit) |

Full range represented — distribution discipline satisfied.

---

## Folk Florence Dock (Canada Water / Battersea Park border)

**Operator-wide Folk defaults (also applies across Sunday Mills and Palm House when those are processed)**: licence agreement; in-house referencing; no named guarantor required; "proof of income" qualitative standard; Open Banking tolerated via UK bank statements; multi-month upfront voluntary (not RRA-capped because licence).

### building_quality

| Field | Value | Source |
|---|---|---|
| epc_rating | `undefined` | Not published on Folk page; would need EPC register lookup by full address |
| sound_insulation | `"good"` | New-build post-2020, Part E compliant; HomeViews 4.7+ across 405 Folk reviews with no dominant noise complaint |
| thermal_performance | `"good"` | Communal heating typical of BTR; all-inclusive pricing suggests thermal comfort is operator's problem (no individual bill pressure) |
| layout_notes | `"Open-plan studio with full kitchen along one wall, double-height windows in some units, separate shower room. Standard / Roomy / Bigger / Biggest size tiers (~24 sqm at Standard). Integrated storage. Waterfront orientation for many units at Florence Dock."` | Folk property gallery |
| **kitchen_quality** | `"good"` | **Anchor for `good` in licence category** — full kitchen (full-size fridge, hob, oven, extractor), not a kitchenette. Explicit Folk differentiator vs competitors |
| heating_type | `"communal"` | Inferred — post-2015 BTR; all-inclusive pricing model consistent with district / communal |
| notes | `"Full kitchen is the Folk differentiator vs apart-hotel competitors — Caner cooks regularly so this is load-bearing. All-inclusive pricing removes thermal/utility decision friction."` | — |

### amenities

| Field | Value | Source |
|---|---|---|
| pool | `true` | Folk Florence Dock amenity page |
| pool_notes | `"Indoor pool — residents-only, part of the on-site health club"` | Folk page |
| gym | `true` | — |
| gym_quality | `"good"` | Full equipment health-club-style; gym is part of Folk's marketing for Florence Dock specifically |
| concierge | `"daytime"` | Folk operate reception/hospitality desk; not a 24h BTR concierge model |
| sky_lounge | `false` | — |
| co_working | `true` | Folk all sites include co-working |
| dining_room | `false` | Restaurant / shared kitchen rather than private dining room |
| cinema_room | `false` | — |
| rooftop_terrace | `true` | Waterfront-facing terrace |
| parking | `false` | Canada Water — car-free positioning |
| bike_storage | `true` | Standard Folk amenity |
| pet_policy | `"Pets considered on application"` | Folk FAQ |
| other_amenities | `["Shared kitchen / dining space", "Library / lounge", "Yoga/wellness studio"]` | — |
| overall_tier | `"strong"` | Derived from pool + good gym + co-working + rooftop + daytime concierge |

### architecture

- `architects`: `[]` (part of British Land Canada Water masterplan; specific Folk block architect not prominently credited)
- `awards`: `[]`
- `is_signature`: `false` — competent co-living specification, not a destination building
- `style_notes`: `"Mid-rise co-living block within the British Land Canada Water masterplan. Waterfront orientation, contemporary cladding, massing subordinate to the masterplan rather than a standalone silhouette."`

### resident_signal

- `homeviews_score`: `~4.7` (Folk operator-wide across 405 reviews; Florence Dock individual score likely similar; verify URL)
- `homeviews_url`: `"https://www.homeviews.com/development/folk-florence-dock"` (likely path — confirm)
- `summary`: `"Strong operator-wide Folk signal (4.72/5 across 405 reviews). Florence Dock is the newest of the three London sites. Residents consistently praise management responsiveness, communal experience, and the waterfront setting. Review count for Florence Dock specifically may be <20 given newness."`
- `common_praise`: `["Management responsiveness and community-building", "All-inclusive simplicity", "Waterfront location and natural light", "Full kitchen unusual in this tier", "Welcoming to internationals"]`
- `common_complaints`: `["Studio size at Standard tier is compact", "Community events not for everyone", "Price step between size tiers is steep"]`

### Pricing (per-project refresh)

- studio: `£1,695-£2,099` (Standard £1,695 → Biggest £2,099, all-inclusive)
- bills_included: `true`
- price_transparency: `"listed"`
- **affordability**: `"comfortably-affordable"` — anchor cite: £1,695-£1,800 range sits below £2,250 no-bills cap with ~£450-£550 headroom; dataset comparable

---

## Locke (Staycity) — 3 projects: Kingsland Locke (Dalston), Bermonds Locke (Borough), Ember Locke (Earl's Court)

**Operator-wide Locke defaults**: hospitality licence; zero referencing; zero deposit; all-inclusive pricing (bills, council tax, Wi-Fi, weekly cleaning); 1-night min stay but design-led for long-stay; Studio and Suite unit types.

### building_quality (applies across all 3 unless noted)

| Field | Value | Source |
|---|---|---|
| epc_rating | `undefined` | — |
| sound_insulation | `"good"` (Kingsland, Bermonds — new-builds), `"average"` (Ember — Victorian townhouse conversion, heritage acoustic constraints) | — |
| thermal_performance | `"good"` | All-inclusive pricing model; design-led spec |
| layout_notes (operator-default) | `"Design-led studio and suite layouts — kitchen along wall with full appliances, open-plan living, separated shower room, statement interior design (bold colour, mid-century furniture). Studios ~25-35 sqm; suites up to ~45 sqm with separate sleeping area."` | Locke site |
| **kitchen_quality** | `"good"` | Full kitchen with hob, oven, fridge, dishwasher in Studio+ — Locke's differentiator vs budget apart-hotels |
| heating_type | `"communal"` | Inferred for new-builds; heritage building at Ember possibly `"electric"` |
| notes | `"Locke sits structurally between serviced-apartment and co-living — full kitchen means Caner can cook properly, unlike Citadines/Staybridge/Flexistay. Design identity is strong."` | — |

### amenities (operator-default)

| Field | Value | Source |
|---|---|---|
| pool | `false` (Bermonds, Ember), `true` check Kingsland (likely no) | — |
| gym | `true` | All sites |
| gym_quality | `"average"` (Kingsland, Bermonds — boutique gym), `"average"` (Ember — boutique) | Locke gym photos show small fitness rooms, not full commercial gyms |
| concierge | `"24h"` | Hospitality desk, 24h |
| sky_lounge | `false` | — |
| co_working | `true` | Signature Locke amenity — co-working is their marketing lead |
| dining_room | `false` | On-site cafe/bar serves this role |
| cinema_room | `false` | — |
| rooftop_terrace | `"varies"` — Kingsland has terrace, Bermonds no, Ember no | — |
| parking | `false` | — |
| bike_storage | `true` | Standard |
| pet_policy | `"Pets considered on application (hotel-style)"` | — |
| other_amenities | `["On-site cafe/bar", "Co-working hot-desks", "Lounge / social programming"]` | — |
| overall_tier | `"strong"` | Derived: 24h concierge + gym + co-working + cafe/bar |

### architecture

**Kingsland Locke**: `architects: []`; `is_signature: false`; `style_notes: "Contemporary mid-rise on Kingsland Road, design-led by Locke's in-house creative direction (Grzywinski+Pons associated with other Locke sites) — bold interiors, exterior massing subordinate to streetline."`

**Bermonds Locke**: `architects: ["Grzywinski+Pons (interiors)"]`; `is_signature: false`; `awards: []`; `style_notes: "Interiors by Grzywinski+Pons — the Brooklyn-based practice known for Locke's design identity. Exterior is competent new-build on Tower Bridge Road; interior experience is the signature."`

**Ember Locke**: `architects: ["Atelier Ochre (interiors)", "Grzywinski+Pons (brand standard)"]`; `is_signature: false` (heritage conversion, not a new landmark); `awards: []`; `style_notes: "Reimagined Victorian townhouses near Earl's Court station — 121 studios carved from the original terrace fabric. Interior design leans into jewel-tones and mid-century furniture vocabulary. Heritage building character preserved."`

### resident_signal

- Locke operator sites generally 4.4-4.7 on Booking.com / Google; HomeViews coverage patchy for apart-hotels
- `summary`: `"Locke's design identity is consistent praise across the portfolio. Operator-wide strong sentiment on cafe/bar culture, co-working usability, and studio design. Common complaints: price (especially for long-stay), thin walls in heritage buildings (Ember), small gyms."`
- `common_praise`: `["Design-led interiors", "Working cafe/bar and co-working", "24h hospitality desk", "Full kitchen"]`
- `common_complaints`: `["Premium pricing compared to BTR alternatives", "Gym is small", "Heritage buildings have thinner walls (Ember)"]`

### Pricing (per-project refresh)

| Project | Studio | Suite | Bills | affordability |
|---|---|---|---|---|
| Kingsland Locke | ~£3,900+/mo all-in | £4,500+ | included | `"over-budget"` |
| Bermonds Locke | ~£3,000-£3,500/mo all-in | £3,800+ | included | `"over-budget"` |
| Ember Locke | ~£3,000-£5,000/mo all-in | £5,500+ | included | `"over-budget"` |

**All three Locke sites sit meaningfully above the £2,750 all-in envelope.** Their qualification friendliness is real but their pricing takes them out of realistic long-stay consideration — they belong in the Wave 4 bridge-insurance tier only.

---

## The Quarters by Bravo — 3 projects: Croydon, Kilburn, Swiss Cottage

**Operator-wide Bravo defaults**: serviced-living licence (can be AST depending on length); opaque in-house referencing; one resident reports £400 credit-check fee (2022 Trustpilot — Kilburn); **no credit/background checks claimed for Croydon** (Caner's first-hand report — verified during his move-in at Ten Degrees analog); 5 weeks' deposit + 7-day advance booking fee; 3-month minimum stay (recently changed from monthly).

### building_quality

| Field | Croydon | Kilburn | Swiss Cottage |
|---|---|---|---|
| epc_rating | unknown | unknown | unknown |
| sound_insulation | `"poor"` — 1960s office conversion, multiple reviews mention thin walls | `"average"` — some corridor/street noise complaints | `"good"` — newest build (2020), no dominant noise complaint |
| thermal_performance | `"average"` — 1960s shell | `"average"` — ~2018 conversion | `"good"` — 2020 new-build |
| layout_notes | `"Studios 19-25 sqm. Compact — 1960s commercial conversion. Kitchenette against one wall with two-hob, fridge, microwave. Shower room separate."` | `"Studios 19-25 sqm (Standard 19 — smallest in portfolio, Premium 25). Kilburn High Road conversion from stone-processing factory ~2018. Corridor noise can carry."` | `"Studios 26-43 sqm (Standard 26, Premium 43). Two linked buildings with connecting structure. Private landscaped courtyard. Highest spec in Bravo portfolio."` |
| **kitchen_quality** | `"average"` — kitchenette (two-hob, fridge, microwave), no oven in standard | `"average"` — same kitchenette standard | `"average"` — kitchenette standard, slightly better finishes |
| heating_type | `"electric"` likely — 1960s conversion | `"electric"` likely | `"communal"` or `"electric"` — 2020 new-build, communal likely |
| notes | Croydon's 1960s conversion shell is the weakest in the portfolio; Swiss Cottage is the strongest | — | Swiss Cottage is Bravo's flagship — 4.84/5 HomeViews across 144 reviews makes it one of the highest-rated buildings in the entire Flatbrowser dataset |

### amenities

| Field | Croydon | Kilburn | Swiss Cottage |
|---|---|---|---|
| pool | false | false | false |
| gym | true (small) | false | true (fully-fitted) |
| gym_quality | `"poor"` | n/a | `"good"` |
| concierge | `"daytime"` reception + 24h security | `"daytime"` | `"24h"` security, daytime reception |
| sky_lounge | false | false | false |
| co_working | false | false | false |
| rooftop_terrace | false | false | false (courtyard instead) |
| parking | limited | limited | limited |
| bike_storage | yes | yes | yes |
| pet_policy | `"No pets"` | `"No pets"` | `"No pets"` |
| other_amenities | `["Courtyard", "Laundry room", "CCTV"]` | `["Laundry", "CCTV", "Parking (limited)"]` | `["Private landscaped courtyard", "Terra Terra restaurant at ground floor", "Housekeeping", "Air conditioning", "Fibre broadband"]` |
| overall_tier | `"basic"` | `"decent"` | `"strong"` |

### architecture

All three: `architects: []`; `awards: []`; `is_signature: false`.
- Croydon: `style_notes: "St Anne House — 1960s commercial office block converted to serviced-living studios. No architectural distinction."`
- Kilburn: `style_notes: "Former stone-processing factory converted ~2018. Functional conversion on Kilburn High Road."`
- Swiss Cottage: `style_notes: "Two 2020-completion buildings linked by a three-storey connecting structure (Vascroft Contractors). Contemporary residential specification with green-wall courtyard and extensive green roofs. Terra Terra restaurant anchors the ground floor."`

### resident_signal

| Project | homeviews_score | url |
|---|---|---|
| Croydon | ~4.3-4.5 (verify) | https://www.homeviews.com/development/the-quarters-croydon |
| Kilburn | 4.72 (135 reviews) | https://www.homeviews.com/development/the-quarters-kilburn-nw6 |
| Swiss Cottage | 4.84 (144 reviews) | https://www.homeviews.com/development/the-quarters-swiss-cottage |

`summary` (Swiss Cottage): `"4.84/5.00 across 144 reviews — one of the highest scores in the entire dataset. Management (Selna Franco) named repeatedly in positive reviews. Location 4.9, Management 4.8, Facilities 4.7, Value 4.6. Common praise: management quality, security, cleanliness, courtyard, gym, Jubilee-line proximity. Common complaints: compact rooms (Standard 26 sqm), premium pricing relative to other Bravo sites."`

`common_praise` (portfolio-wide): `["Management responsiveness (especially Swiss Cottage / Selna Franco)", "All-inclusive simplicity", "Security and cleanliness", "No credit checks at Croydon"]`
`common_complaints` (portfolio-wide): `["Compact studio sizes (19-26 sqm)", "Referencing process is opaque", "One report of 6 months upfront demanded at Kilburn despite references (2022)", "Thin walls at Croydon (1960s shell)"]`

### Pricing (per-project refresh)

| Project | Band | Bills | affordability |
|---|---|---|---|
| Croydon | £900-£1,100 | bills add-on ~£40/mo | `"well-under-budget"` |
| Kilburn | £1,250-£1,600 | some all-in, some add-on | `"comfortably-affordable"` |
| Swiss Cottage | ~£2,000 standard (up to £2,500+ Premium) | all-in | `"at-budget"` |

**Discrepancy with housing-shortlist.md**: shortlist does not list any Quarters building in the Top 10 Studios despite Caner's strong first-hand intel on Croydon and Swiss Cottage's 4.84 HomeViews score. Worth revisiting — **Quarters Swiss Cottage is one of the dataset's highest-rated buildings** and the £2,000 price fits the envelope; Kilburn at £1,250-£1,600 is competitive with Folk Sunday Mills. The shortlist's Wave 4 bridge-tier framing for Quarters is conservative given the qualification intel.

---

## Flexistay Tooting (SW17)

### building_quality

- `kitchen_quality`: `"poor"` — budget apart-hotel kitchenette (microwave, kettle, limited prep); no oven standard
- `sound_insulation`: `"average"`; `thermal_performance`: `"average"`; `layout_notes`: `"Compact studio apartments with kitchenette, shower room. Budget apart-hotel specification near Tooting Broadway."`
- `heating_type`: `"electric"` likely; `notes`: `"Lowest-spec in the batch — budget apart-hotel that will not support regular cooking."`

### amenities

- All booleans mostly `false`; `gym: false`; `concierge: "daytime"` (self-service); `parking: false`; `bike_storage: true`
- `other_amenities: ["Self-service breakfast", "Free Wi-Fi", "Housekeeping"]`
- `overall_tier: "basic"`

### architecture

- `is_signature: false`; `architects: []`; `style_notes: "Converted residential building adapted for apart-hotel use on side-street off Tooting Broadway."`

### Pricing

- Studio: £1,800-£2,500+VAT/month all-inclusive (VAT is material — adds ~20% to hotel-booked stays unless long-stay VAT exemption triggers)
- **affordability**: `"at-budget"` — VAT-excluded £1,800 is comfortably inside; VAT-included £3,000 (short-stay mode) is over

---

## Dolphin Living — 2 projects: Dolphin Square PRS + Dolphin House Serviced

### Dolphin Square (PRS — AST, not licence; heritage mansion block)

- `kitchen_quality`: `"average"` (varies by unit — refurbished units `"good"`)
- `sound_insulation`: `"average"` (1930s masonry; solid but heritage); `thermal_performance`: `"average"` (gradual retrofit)
- `layout_notes`: `"1930s mansion block layouts — fully separated kitchen, living room, bedroom(s). Unlike co-living or apart-hotels, these are traditional flats. Refurbishment progressing unit-by-unit so spec varies."`
- `heating_type`: `"communal"` (central mansion-block system)
- amenities: `pool: true` (iconic Dolphin Square pool); `gym: true, gym_quality: "good"`; `concierge: "24h"`; `rooftop_terrace: false` (3.5 acres private gardens instead); `other_amenities: ["Private 3.5-acre gardens", "Restaurant", "Bar", "Spa", "24h security"]`; `overall_tier: "premium"`
- architecture: `architects: ["Gordon Jeeves (1935-37)"]`; `is_signature: true` — heritage significance, one of London's largest mansion-block complexes, genuine destination; `style_notes: "Gordon Jeeves-designed 1935-1937 mansion block complex on 7.5 acres in Pimlico — ten 7-storey blocks arranged around a central garden, with private pool, restaurant, shops. One of Europe's largest residential buildings at construction. Grade II heritage character throughout."`
- affordability: `"unclear"` — pricing per-unit and per-phase varies widely (~£1,900 Key Worker to £4,000+ refurbished)

### Dolphin House Serviced Apartments

- `kitchen_quality`: `"average"` — serviced apartment kitchenettes (better than apart-hotel, not full kitchen); `layout_notes: "Serviced apartments within Dolphin Square complex — access to pool, gym, gardens, restaurant. Nightly or monthly booking."`
- amenities: inherits full Dolphin Square amenity stack; `overall_tier: "premium"`
- affordability: `"stretch"` to `"over-budget"` — serviced pricing substantially above PRS equivalents

---

## Citadines Islington (Angel / Islington N1)

### building_quality

- `kitchen_quality`: `"poor"` — apart-hotel kitchenette (hob + combi microwave, no oven, minimal prep space)
- `sound_insulation`: `"good"` (modern build in Islington Square); `thermal_performance`: `"good"`; `layout_notes`: `"Apart-hotel studios and 1-beds within the Islington Square development on Upper Street. Kitchenette, en-suite bathroom, living/sleeping space."`
- `heating_type`: `"communal"` likely (new mixed-use development)

### amenities

- `pool: false`; `gym: true, gym_quality: "average"`; `concierge: "24h"` (hotel); `co_working: false` (some business space); `other_amenities: ["Daily housekeeping", "24h reception", "Luggage storage"]`
- `overall_tier: "decent"`

### architecture

- `architects: []` (Islington Square is the host development); `is_signature: false`; `style_notes: "Apart-hotel occupies part of Islington Square — Upper Street mixed-use development completed ~2021. Retail + residential + hospitality layering."`

### Pricing

- Monthly: ~£2,500-£3,500 all-in (~£105/night base)
- **affordability**: `"stretch"` at low end, `"over-budget"` at high end

---

## Staybridge Suites Vauxhall (IHG apart-hotel)

- `kitchen_quality`: `"poor"` — IHG apart-hotel kitchenette (hob, microwave, fridge, no full oven)
- `sound_insulation`: `"good"` (modern IHG build); `thermal_performance`: `"good"`; `layout_notes`: `"IHG Staybridge Suites format — studios and 1-beds with kitchenette, workspace, en-suite. Modern new-build on Miles Street."`
- amenities: `gym: true, gym_quality: "average"`; `concierge: "24h"`; `other_amenities: ["Complimentary breakfast", "Laundry", "Weekly cleaning", "24h pantry"]`; `overall_tier: "decent"`
- architecture: `is_signature: false`
- Pricing: ~£3,000-£4,000/month all-in — **affordability: `"over-budget"`**; genuine bridge-tier only

---

## MHA London — Sovereign Court (Wapping)

- PRS rather than apart-hotel; neo-Georgian conversion; operator realism tagged `"unknown"` currently
- `kitchen_quality`: `"average"` (full kitchen per flat but unit-specific spec); `sound_insulation`: `"average"` (conversion, not new-build); `thermal_performance`: `"average"`
- `layout_notes`: `"124-unit single-operator PRS in converted neo-Georgian building near Tobacco Dock. Traditional flat layouts — separated kitchen, living, bedroom(s)."`
- `heating_type`: `"gas"` likely (conversion building)
- amenities: `concierge: "24h"`; `parking: true`; `bike_storage: true`; `other_amenities: ["Communal gardens", "2-hourly security surveillance", "Window-cleaning service"]`; `overall_tier: "decent"`
- architecture: `architects: []`; `is_signature: false`; `style_notes: "Neo-Georgian conversion near Tobacco Dock — traditional residential character rather than BTR or co-living specification."`
- Pricing: enquire-only — **affordability: `"unclear"`**

---

## The Gate London City (Aldgate East)

- `kitchen_quality`: `"poor"` — apart-hotel kitchenette standard
- `sound_insulation`: `"good"` (modern); `thermal_performance`: `"good"`; `layout_notes`: `"Apart-hotel studios at 41 White Church Lane, 3 min from Aldgate East. Kitchenette, en-suite, workspace."`
- amenities: `gym: true, gym_quality: "average"`; `concierge: "24h"`; `other_amenities: ["Yoga studio", "Residents' lounge with free beverages", "Free Wi-Fi"]`; `overall_tier: "decent"`
- architecture: `is_signature: false`
- Pricing: from £1,900/month all-inclusive — **affordability: `"comfortably-affordable"`** (rare for an apart-hotel in Zone 1 — this is why it made the shortlist's Wave 4 bridge tier)

---

## Dandi Battersea (Clapham Junction)

- `kitchen_quality`: `"poor"` to `"average"` — co-living kitchenette (hob + microwave, limited prep); shared kitchen available in communal zones
- `sound_insulation`: `"good"` (new-build); `thermal_performance`: `"good"`; `layout_notes`: `"Co-living studios at Haydon Way SW11. Compact private studios with kitchenette + en-suite, supplemented by shared communal kitchens and lounges."`
- `heating_type`: `"communal"` likely
- amenities: `gym: true, gym_quality: "average"`; `concierge: "daytime"`; `co_working: true`; `rooftop_terrace: true` likely; `other_amenities: ["Shared kitchen", "Lounges", "Community events"]`; `overall_tier: "decent"`
- architecture: `is_signature: false`
- Resident signal: review coverage thin for Dandi (newer operator) — `summary: "Too few reviews for reliable signal"` applies
- Pricing: studios from ~£1,750/month all-inclusive — **affordability: `"comfortably-affordable"`**; qualification = Right-to-Rent check only (licence agreement)

---

## Sources

- Folk: https://www.folkcoliving.com/homes/florence-dock, https://www.folkcoliving.com/faqs (accessed 2026-04-17)
- Locke: https://www.lockeliving.com/en/london/{kingsland-locke, bermonds-locke, ember-locke}
- Bravo / The Quarters: https://thequarters.co.uk/ and per-building pages; HomeViews per building
- Flexistay: https://www.flexistay.com/H-80-Flexistay-Tooting-Aparthotel.aspx
- Dolphin Living: https://www.dolphinsquare.co.uk/
- Citadines: https://www.discoverasr.com/en/citadines/united-kingdom/citadines-islington-london
- Staybridge: https://www.ihg.com/staybridge/hotels/us/en/london/lonva/hoteldetail
- The Gate: https://www.thegate-london.com/
- Dandi: https://dandi.com/cityliving/dandi-battersea/
- MHA: operator site (policy data thin)
- Prior first-hand intel: Caner's Quarters Croydon research (LifeOS memory — Quarters by Bravo page)

---

## Shortlist-relevant findings + discrepancies

1. **Quarters Swiss Cottage is under-indexed in the shortlist.** At £2,000 with a 4.84 HomeViews score and the same operator-level qualification flexibility as Quarters Croydon (Caner has confirmed first-hand that Bravo does not run background checks at Croydon; operator-wide pattern likely holds), this is a genuine contender that the Top 10 Studios list omits. The shortlist picks Folk Sunday Mills (£1,599) and Folk Florence Dock at £1,695-£1,800 over it, but Swiss Cottage's combination of (a) Jubilee + Metropolitan, (b) highest HomeViews score in the Quarters portfolio, (c) full-size Premium options at 43 sqm makes it worth testing in the Wave 2 email round. **Recommend adding Quarters Swiss Cottage enquiry to Wave 2.**

2. **Quarters Kilburn is also worth surfacing.** £1,250-£1,600 all-in is cheaper than any Folk building and qualification is identical to Swiss Cottage. The T1.1 safety concern at Kilburn is real (Safer Brent Partnership hotspot) but that's an area issue, not an operator issue.

3. **All three Locke sites are genuinely over-budget.** Kingsland at £3,900+ and Ember at £3,000-£5,000 confirm that the `over-budget` tag is correct; these are bridge-insurance only.

4. **Folk's `kitchen_quality: "good"` is the anchor for the licence category.** It's the only operator in the batch delivering a real full kitchen. This should be captured explicitly in the enrichment-schema.md calibration language — Folk anchors `good`; Quarters anchors `average` (kitchenette with two-hob + fridge + microwave); Flexistay/Staybridge/Citadines/The Gate anchor `poor` (minimal prep, no oven).

5. **Kitchen_quality is load-bearing for Caner specifically** (from LifeOS profile — he cooks regularly). The enrichment filter on the Flatbrowser browser should probably surface kitchen_quality prominently for licence-exempt filter results.

6. **Dolphin Square (PRS block) is authentically `is_signature: true`** — rare in this batch. Gordon Jeeves 1935-37 mansion block, 7.5 acres, one of Europe's largest residential buildings at construction. The other 14 projects in this batch are all `is_signature: false`.

7. **Staybridge Vauxhall, Kingsland Locke, Ember Locke, Bermonds Locke should be de-prioritised** from the main qualification dispatch — their pricing puts them firmly outside the envelope regardless of qualification flexibility.

File: `context/data-upkeep/proposals/enrichment-licence-exempt.md`
