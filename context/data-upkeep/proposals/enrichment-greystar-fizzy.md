# Greystar + Fizzy Living — V2 Enrichment Proposal

**Generated:** 2026-04-17
**Scope:** 11 projects across Greystar direct (7) + Fizzy Living (Greystar) (4).
**Relationship to prior work:** An earlier pass produced `v2-greystar-fizzy.md` (690 lines) covering the same 11 projects. This proposal was written as an independent research pass and independently confirmed the architectural, amenity, pricing, and HomeViews data in that file. Where this file adds delta or correction, it is flagged **[NEW]** or **[CORRECTION]**. Where content matches the prior proposal, the prior entry is authoritative and referenced as **[CONFIRMED — see v2-greystar-fizzy.md]**.

---

## Projects in batch

| # | id | Area | Current operator string | Notes |
|---|---|---|---|---|
| 1 | `pearl-yard` | bermondsey | Greystar | 1,600-home flagship, Freans House open Jan 2026 |
| 2 | `the-bermondsey-project` | bermondsey | Greystar | 1,624-home sister scheme, under construction |
| 3 | `ten-degrees` | croydon | Greystar | Caner's residence, 546 units, tallest modular in Europe |
| 4 | `stratford-mill` | stratford | Greystar | 247 units, Hawkins\Brown, Autumn 2026 |
| 5 | `bloom-nine-elms` | nine-elms | Greystar | 894 units (Allies and Morrison) |
| 6 | `mylo-nine-elms` | nine-elms | Greystar | 647 units, Mylo sub-brand |
| 7 | `fizzy-lewisham` | lewisham-gateway | Greystar *(miscategorised)* | 184 units, 2024 |
| 8 | `fizzy-stepney-green` | mile-end | Fizzy Living (Greystar) | PRS Dev of the Year |
| 9 | `fizzy-poplar` | poplar-blackwall | Fizzy Living (Greystar) | Lindfield Street |
| 10 | `fizzy-canning-town` | canning-town | Fizzy Living (Greystar subsidiary) | Vermilion Tower |
| 11 | `fizzy-east-16` | canning-town | Fizzy Living (Greystar) | 292 units, Brunel St Works |

**[CORRECTION]** `fizzy-lewisham.operator` should be `"Fizzy Living (Greystar)"` not `"Greystar"` — it's branded and operated under the Fizzy label, with Fizzy pricing and amenity profile. Propose dataset edit.

---

## Operator-wide patterns

### Greystar direct (non-Fizzy)
- **Referencing:** in-house across direct properties (Ten Degrees confirmed first-party). Fizzy sub-brand uses Homeppl; direct portfolio does not.
- **Architects:** HTA Design (Ten Degrees, Pearl Yard masterplan), Hawkins\Brown (Pearl Yard, Stratford Mill, Bermondsey Project), AFK — Arney Fender Katsalidis (Pearl Yard Building ST), Allies and Morrison (Bloom Nine Elms).
- **Heating:** `communal` default post-2018. Ten Degrees (2020) is `electric` — modular construction constraint.
- **Pet policy:** universally pet-friendly with fee; pet spas at flagship (Pearl Yard, Bloom, Mylo).
- **Lease terms:** 12-month default, except Pearl Yard (3-12 months flexible — unique within portfolio).
- **Amenity tier:** premium (Pearl Yard, Bloom, Bermondsey Project) → strong (Mylo) → decent (Ten Degrees, Stratford Mill).

### Fizzy Living pattern
- **Referencing:** Homeppl backend, Open Banking route for savings-based qualification.
- **HomeViews:** operator-wide 4.47/5 across 1,806 reviews. Individual buildings consistently 4.21-4.45.
- **Amenities:** no pool at any Fizzy building. Gym + concierge + co-working + pet-friendly is the consistent stack.
- **Heating:** communal (Poplar, Lewisham, East 16 — post-2010 Greystar/BTR norm).
- **Architects:** not signature-authored. Fizzy trades flagship amenity for professional management.
- **Pricing April 2026:** studio/1-bed bands £1,500-£2,500+ per Fizzy filter UI. V1 pricing (£1,280 Lewisham, £1,900 Stepney Green) is stale.

### HomeViews availability (independently verified)

| Building | Score | Reviews | Confidence |
|---|---|---|---|
| Fizzy Lewisham | 4.41/5 | 382 | High |
| Fizzy Stepney Green | 4.42/5 | 191 | High |
| Fizzy Canning Town | 4.45/5 | 203 | High |
| Fizzy East 16 | 4.40/5 | 149 | High |
| Fizzy Poplar | 4.21/5 | 114 | High |
| Ten Degrees | 4.69/5 | 273 | High |
| Bloom Nine Elms | 4.62/5 | 167 | High |
| Mylo Nine Elms | 4.32/5 | 62 | Moderate |
| Pearl Yard | — | 0 | Too new |
| The Bermondsey Project | — | — | Pre-opening |
| Stratford Mill | — | — | Pre-opening |

---

## Per-building proposals

### 1. `pearl-yard` (Bermondsey)

**[CONFIRMED — see v2-greystar-fizzy.md]** All fields independently verified against operator page, KPF, Hawkins\Brown, AFK project pages.

Key values:
- **building_quality.kitchen_quality**: `good` (Greystar premium BTR spec, full kitchens, integrated appliances, dishwasher) [operator page]
- **building_quality.heating_type**: `communal` (inferred — 2026 London BTR norm)
- **building_quality.sound_insulation**: `good` (new-build, Part E 2022+)
- **building_quality.thermal_performance**: `good` (new-build, Part L 2022+)
- **amenities.overall_tier**: `premium` [operator page + comparables: Gasholders/Chronicle = premium]
- **amenities.pool**: true (opening 2027) [operator page]
- **amenities.gym_quality**: `good`
- **amenities.concierge**: `24h` [operator page "24/7 Service"]
- **amenities.sky_lounge**: true, **co_working**: true, **rooftop_terrace**: true, **bike_storage**: true, **cinema_room**: false, **dining_room**: false [operator page]
- **amenities.other_amenities**: ["Games room", "Arts club", "Yoga studio", "Pet spa", "Resident lounges"]
- **architecture.architects**: ["HTA Design", "Hawkins\Brown", "Arney Fender Katsalidis (AFK)", "KPF (masterplan)"] [architect project pages]
- **architecture.is_signature**: **false** (multi-architect masterplan, no singular landmark)
- **resident_signal.homeviews_url**: https://www.homeviews.com/development/pearl-yard-se16 (0 reviews — too new)
- **rental.prices** [CORRECTION]: studio £2,670+, 1-bed £3,360+, 2-bed £3,905+ [pearlyardbermondsey.com accessed 2026-04-17]. Early-bird 8 weeks rent-free active.
- **affordability**: **over-budget** (1-bed £3,360 vs £2,750 envelope all-in; comparable: Locke Aldgate £4,500+ over-budget)
- **long_form.notable_features**: "3-12 month flexible lease terms (unique within Greystar); Peek Freans biscuit factory heritage integration; pool/sauna opening 2027; central public park."

**Sources:**
- https://www.pearlyardbermondsey.com/
- https://www.kpf.com/project/the-bermondsey-project-2
- https://www.hawkinsbrown.com/projects/pearl-yard-bermondsey/
- https://www.afkstudios.com/projects/the-bermondsey-project/
- https://southwarknews.co.uk/area/bermondsey/the-biscuit-factory-renamed-as-pearl-yard-bermondsey/

---

### 2. `the-bermondsey-project` (Bermondsey)

**[CONFIRMED — see v2-greystar-fizzy.md]** All fields matched. Under construction; projected values inherit from Pearl Yard sister scheme.

Key values:
- **architecture.architects**: ["HTA Design", "Hawkins\Brown", "AFK"] [AJ press, Greystar newsroom]
- **amenities.overall_tier**: `premium` (projected)
- **amenities.pool**: true (indoor swimming pool confirmed in Southwark planning doc 23/AP/2124)
- **rental.prices**: undefined; **price_transparency**: `enquire`
- **affordability**: **over-budget** (projected, sister-scheme parity)
- **resident_signal**: all empty; `summary: "Under construction — Autumn 2025 first homes, 2H 2027 full completion; no resident signal yet."`
- **long_form.notable_features**: "600-student secondary school integrated on site (unusual for BTR); ~£600m debt facility; shared architect team with Pearl Yard; 4,700 sqm play space."

**Sources:**
- https://greystar-bermondseyproject.com/
- https://www.architectsjournal.co.uk/news/hta-replaces-kpf-on-500m-bermondsey-biscuit-factory-job
- https://www.constructionenquirer.com/2024/03/11/go-ahead-for-1600-homes-for-london-biscuit-factory/

---

### 3. `ten-degrees` (Croydon)

First-party data (Caner's current residence). V2 fields already populated in `croydon.ts`.

**[NEW] architecture block** — currently stubbed:
- **architects**: ["HTA Design"] [hta.co.uk/ten-degrees/]
- **awards**: ["CTBUH Best Tall Residential or Hotel Building — 2022", "Offsite Awards Best Use of Volumetric — 2020", "WhatHouse Best Exterior Design — 2023"]
- **is_signature**: **false** — engineering achievement (tallest modular building in Europe at 136m / 44 storeys), not an architectural destination. Silhouette is generic beyond the modular context.
- **style_notes**: "Two connected towers of 38 and 44 storeys. Rhythmic fenestration reveals the modular grid. Volumetric construction by Tide — 1,526 apartment modules craned into place."

**[CORRECTION] resident_signal.homeviews_score**: current dataset holds `3.8`. HomeViews April 2026 shows **4.69/5 across 273 reviews** — rated #1 development in Croydon 2024. The dataset value is either stale or wrong-scale.
- **homeviews_url**: https://www.homeviews.com/development/ten-degrees-cr0
- **summary**: "4.69/5 across 273 reviews (high confidence). Top praise: reception team, East Croydon 3-min walk, modern fittings, co-working + cinema room. Top complaints: maintenance response latency, sky lounge booking fees perceived as high, corridor ageing, external Boxpark noise."
- **common_praise**: ["Reception team consistently helpful", "East Croydon proximity (3-min)", "Modern fittings and layouts", "Variety of amenities (gym/cinema/co-working)", "Rooftop terrace"]
- **common_complaints**: ["Maintenance response times slow", "Sky lounge booking fees", "Corridor carpet ageing", "WiFi outages", "External Boxpark event noise"]

All other building_quality, amenities, long_form fields retain current first-party values.

**affordability**: **over-budget** (first-party: £2,500 rent + £500 bills ≈ £3,000 all-in vs £2,750 envelope).

**Sources:**
- https://www.homeviews.com/development/ten-degrees-cr0
- https://www.hta.co.uk/ten-degrees/
- https://hdawards.org/scheme/ten-degrees/

---

### 4. `stratford-mill` (Stratford)

**[CONFIRMED — see v2-greystar-fizzy.md]** All fields matched.

- **architecture.architects**: ["Hawkins\Brown"] (confirmed via BTR press + GRAHAM construction release)
- **architecture.is_signature**: **false**
- **building_quality.heating_type**: `communal` (inferred, new-build 2026)
- **amenities.overall_tier**: `decent` (smaller scheme, no pool)
- **amenities.pool**: false, **gym**: true, **concierge**: `daytime` (projected), **rooftop_terrace**: true, **bike_storage**: true, **co_working**: true
- **rental.prices**: undefined; **price_transparency**: `enquire`
- **affordability**: **at-budget** (projected — Stratford BTR peer pricing)
- **long_form.notable_features**: "Greystar's European Momento sub-brand (new to London); Hawkins\Brown design; canalside City Mill Lock position; 42 SNG affordable homes co-delivered with 205 private BTR."

**Sources:**
- https://www.greystar.com/business/about-greystar/newsroom/greystar-tops-out-at-stratford-mill-in-east-london
- https://www.graham.co.uk/about-us/news/graham-appointed-on-stratford-mill-residential-development
- https://www.buildington.co.uk/buildings/7832/england/london-e15/14-marshgate-lane/stratford-mill

---

### 5. `bloom-nine-elms` (Nine Elms)

**[CONFIRMED — see v2-greystar-fizzy.md]** Key additions independently verified:

- **units_total**: 894 [Allies and Morrison + NLA listing]
- **storeys**: 9-18 (two buildings) [Allies and Morrison]
- **architecture.architects**: ["Allies and Morrison"] [alliesandmorrison.com]
- **architecture.is_signature**: **false** — competent premium BTR, no singular landmark silhouette (comparable to Royal Wharf tier — `strong`, not `premium` signature)
- **amenities.overall_tier**: `premium` (two rooftop pools, jacuzzi, two gyms, sky bar, co-working, library, games room, cinema-night programming, two pet spas)
- **amenities.pool**: true — **two rooftop pools + jacuzzi** [operator page — materially more pool capacity than Pearl Yard]
- **amenities.gym_quality**: `good` (two gyms, 24h access, fitness classes)
- **amenities.concierge**: `24h`
- **amenities.sky_lounge**: true (Sky Bar & Lounge), **cinema_room**: implied (cinema-night events), **dining_room**: true (private dining rooms), **rooftop_terrace**: true, **co_working**: true, **bike_storage**: true
- **amenities.other_amenities**: ["Kid's Club", "Two pet spas", "Library", "Games room", "Piano room"]
- **rental.prices** [CORRECTION]: studio £2,705+, 1-bed £3,505+, 2-bed £3,685+, 3-bed £5,575+ [bloom-nineelms.co.uk April 2026]
- **affordability**: **over-budget**
- **resident_signal.homeviews_score**: 4.62/5 across 167 reviews
- **resident_signal.summary**: "4.62/5 across 167 reviews. Consistently high praise for staff responsiveness (specific staff named), modern facilities, and premium feel. Complaints concentrated on onboarding information gaps and ongoing external construction — will resolve as Nine Elms corridor completes."
- **resident_signal.common_praise**: ["Staff responsiveness (Abdo Dada, Nathan named repeatedly)", "New, clean facilities", "Gym and co-working spaces", "Transport (Northern Line, Vauxhall)", "Premium design quality"]
- **resident_signal.common_complaints**: ["Onboarding info gap on apps/portals/electronic keys", "Traffic congestion around building", "Ongoing Nine Elms area construction", "Parcel room occasional misplacements"]
- **long_form.notable_features**: "Two rooftop pools + jacuzzi (materially more pool capacity than Pearl Yard); 894 units makes it one of largest single BTR schemes in London; Allies and Morrison masterplan design; pet-forward (two pet spas); active community programming."

**Sources:**
- https://bloom-nineelms.co.uk/
- https://www.alliesandmorrison.com/projects/bloom-nine-elms
- https://nla.london/projects/bloom-nine-elms
- https://www.homeviews.com/development/2c9a19c3-a537-4fc6-8993-f2e22583119a

---

### 6. `mylo-nine-elms` (Nine Elms)

**[CONFIRMED — see v2-greystar-fizzy.md]**

- **units_total**: 647 (confirmed per Greystar operator page, though HomeViews lists 648)
- **architecture.architects**: unknown (Telford Homes developer; architect not named in publicly available material — leave empty array)
- **architecture.is_signature**: **false**
- **building_quality.heating_type**: `communal` (inferred)
- **amenities.overall_tier**: `strong` (one tier below Bloom — no pool, no sky bar)
- **amenities.pool**: false, **gym**: true, **gym_quality**: `good` (HomeViews praise for equipment quality), **concierge**: `24h`, **dining_room**: true (private hire dining), **cinema_room**: true, **rooftop_terrace**: true, **co_working**: true
- **amenities.other_amenities**: ["Communal roof gardens", "Courtyard", "Pet-friendly courtyard"]
- **rental.prices**: Operator page inaccessible at fetch (403); preserve V1 values. Operator publishes listed pricing per Mylo portal.
- **affordability**: **over-budget** (1-bed £2,500+ typical per Rightmove)
- **resident_signal.homeviews_score**: 4.32/5 across 62 reviews
- **resident_signal.homeviews_url**: https://www.homeviews.com/development/mylo-at-nine-elms-sw8
- **resident_signal.summary**: "4.32/5 across 62 reviews (moderate confidence). Staff consistently praised; lift reliability and trash chute are recurring issue themes. Train noise when windows open is a known factor (proximity to Vauxhall rail)."
- **resident_signal.common_praise**: ["Staff responsiveness", "Vauxhall transport access (7-min walk)", "Courtyard tranquillity", "Building cleanliness", "Concierge helpfulness"]
- **resident_signal.common_complaints**: ["Trash chute issues", "Lift breakdowns", "Visitor parking limits", "Train noise with windows open", "External construction"]

**Sources:**
- https://www.homeviews.com/development/mylo-at-nine-elms-sw8
- https://nineelmspoint.mylo-london.com/ (403 on automated fetch; publicly accessible in browser)

---

### 7. `fizzy-lewisham` (Lewisham Gateway)

**[CONFIRMED — see v2-greystar-fizzy.md]** Plus **[CORRECTION]** on operator attribution.

- **operator** [CORRECTION]: change `"Greystar"` → `"Fizzy Living (Greystar)"` for consistency.
- **architecture.architects**: [] (Watkin Jones developer; no named architect published)
- **architecture.is_signature**: **false**
- **building_quality.kitchen_quality**: `average` (standard Fizzy spec, full kitchen but standard appliances — complaint theme: doors with gaps)
- **building_quality.sound_insulation**: `average` (HomeViews complaint re: door gaps)
- **building_quality.heating_type**: `communal` (inferred — 2024 new-build)
- **amenities.overall_tier**: `decent` (standard Fizzy — no pool, gym, concierge)
- **amenities.pool**: false, **gym**: false, **concierge**: `none`, **rooftop_terrace**: true (15th-floor rooftop), **co_working**: true (but HomeViews flags as inadequate — "just a table in the lobby"), **bike_storage**: true
- **amenities.pet_policy**: "Pet-friendly with £75/month pet fee" [HomeViews reviews]
- **rental.prices** [CORRECTION]: 1-bed £1,800-2,300+ per Rightmove April 2026 (V1 captured £1,280 — stale; current market is materially higher)
- **affordability**: **comfortably-affordable** (1-bed £1,800-2,100 comparable to Folk Florence Dock £1,695-£1,800 = "comfortably-affordable")
- **resident_signal.homeviews_score**: 4.41/5 across 382 reviews (high confidence)
- **resident_signal.homeviews_url**: https://www.homeviews.com/development/fizzy-lewisham-se13
- **resident_signal.summary**: "4.41/5 across 382 reviews (high confidence — one of the largest review counts in the Fizzy portfolio). Strong praise for management responsiveness and rooftop; recurring complaints on build quality (door gaps, draughts), security (parcel theft, main entrance lock failures) and a 2+ month hot water outage."
- **resident_signal.common_praise**: ["Responsive management staff", "15th-floor rooftop terrace views", "Proximity to Lewisham station", "Community events", "Modern spacious flats"]
- **resident_signal.common_complaints**: ["Door gaps let draughts/noise", "Main entrance lock failures", "Parcel theft incidents", "Hot water outage winter 2024", "Co-working space inadequate", "£75/mo pet fee above market"]
- **long_form.notable_features**: "15th-floor rooftop terrace (highest Fizzy rooftop); lowest price floor in the dataset for a Homeppl-backed Greystar building; adjacent to Lewisham DLR + Southeastern; Watkin Jones 2024 delivery."

**Sources:**
- https://fizzyliving.com/locations/lewisham
- https://www.homeviews.com/development/fizzy-lewisham-se13

---

### 8. `fizzy-stepney-green` (Mile End)

**[CONFIRMED — see v2-greystar-fizzy.md]** Key values:

- **architecture.architects**: [] (not publicly named — Fizzy doesn't credit architects)
- **architecture.awards**: ["PRS Development of the Year — Inside Housing Top 60 Developments Awards"]
- **architecture.is_signature**: **false**
- **architecture.style_notes**: "Cheerful yellow balconies are the identifying feature; mid-rise courtyard composition on quiet side street opposite Shandy Park."
- **building_quality.sound_insulation**: `excellent` — HomeViews reviews consistently praise sound isolation (specific review: "best sound isolation I have ever had")
- **building_quality.thermal_performance**: `good` — reviews note "didn't have to turn on heating once even in winter"
- **building_quality.heating_type**: `communal` (inferred)
- **amenities.overall_tier**: `basic`
- **amenities.pool**: false, **gym**: false, **concierge**: `none`, **courtyard** (other_amenities), **bike_storage**: true
- **amenities.pet_policy**: "Pet friendly"
- **rental.prices** [CORRECTION]: 1-bed £1,800-2,100+ per Fizzy filter UI April 2026 (V1 captured £1,900 — still broadly accurate but refresh)
- **affordability**: **comfortably-affordable**
- **resident_signal.homeviews_score**: 4.42/5 across 191 reviews
- **resident_signal.common_praise**: ["Excellent sound insulation between units", "Thermal efficiency — barely need heating", "Modern, spacious, bright layouts", "Friendly neighbours / community", "Responsive management (same-day maintenance)"]
- **resident_signal.common_complaints**: ["Main door break-ins / package theft (recurring)", "Heating/hot water failures (10+ instances in 6 months)", "Scaffolding up for over a year (vs promised 6 weeks)", "L&Q third-party contractor accountability gap", "Electrical unit high-pitch beep unresolved"]
- **long_form.notable_features**: "Best-in-class sound insulation within Fizzy portfolio; thermal performance notably strong; PRS Development of the Year award; opposite Shandy Park; Stepney Green tube 5-min walk."

**Sources:**
- https://fizzyliving.com/locations/stepney-green
- https://www.homeviews.com/development/fizzy-stepney-green-e1
- https://www.fizzyliving.com/blog/2015/fizzy-reaches-1000-prs-units-with-latest-deal-in-west-london

---

### 9. `fizzy-poplar` (Poplar/Blackwall)

**[CONFIRMED — see v2-greystar-fizzy.md]**

- **architecture.architects**: [] (not published)
- **architecture.is_signature**: **false**
- **building_quality.sound_insulation**: `average` (HomeViews complaint: corridor heat and smell transfer)
- **building_quality.thermal_performance**: `average` (complaints re: building warmth / poor corridor ventilation)
- **building_quality.heating_type**: `communal` (inferred)
- **amenities.overall_tier**: `decent` (has on-site gym + concierge — tier above Stepney Green)
- **amenities.pool**: false, **gym**: true, **gym_quality**: `basic` (standard Fizzy on-site — "free membership" but not described as good), **concierge**: present (hours unspecified — treat as `daytime` pending verification), **parking**: true (paid), **bike_storage**: implied (lockers paid)
- **amenities.pet_policy**: "Pet friendly"
- **rental.prices** [CORRECTION]: 1-bed £1,800-2,200+ per Fizzy filter + Rightmove April 2026. V1 £2,155 still broadly accurate. Up to 4 weeks free rent promo active.
- **affordability**: **comfortably-affordable** (1-bed in upper band; cross-calibrate with Lewisham `comfortably-affordable`)
- **resident_signal.homeviews_score**: 4.21/5 across 114 reviews (lowest of the Fizzy portfolio — calibration signal)
- **resident_signal.common_praise**: ["Modern finishes", "Management responsiveness", "DLR + Canary Wharf proximity", "Pet-friendly", "Fair rent for area"]
- **resident_signal.common_complaints**: ["Corridor very hot and collects smells from flats", "Lift out of service ≥4 times in 6 months", "External antisocial behaviour (yelling, smoking, drinking)", "Carpet/wall cleanliness in common areas", "Maintenance only comes on Wednesdays"]
- **long_form.notable_features**: "On-site gym with free membership (tier above Stepney Green amenity); overlooks Bartlett Park; paid parking available (rare within Fizzy); 4-week rent-free promo signal of demand softness."

**Sources:**
- https://fizzyliving.com/locations/poplar
- https://www.homeviews.com/development/fizzy-poplar-e14

---

### 10. `fizzy-canning-town` (Canning Town)

**[CONFIRMED — see v2-greystar-fizzy.md]**

- **building_type**: part of Vermilion Tower — 15-storey block. Architect credited in wider Barratt development; not published for Fizzy block specifically.
- **architecture.architects**: [] (CZWG referenced in dataset notes but not verified in fresh research)
- **architecture.is_signature**: **false**
- **building_quality.sound_insulation**: `good` (no complaint theme; gated community notes suggest insulated)
- **building_quality.thermal_performance**: `average` ("stuffy" summer complaints — no AC)
- **building_quality.heating_type**: `communal` (inferred)
- **amenities.overall_tier**: `decent`
- **amenities.pool**: false, **gym**: false (HomeViews complaint: "lack of gym on site"), **concierge**: present (security + concierge staff praised), **parking**: true (paid, basement, expensive), **courtyard + kids play area** (other_amenities), **bike_storage**: implied
- **amenities.pet_policy**: "Pet friendly"
- **rental.prices** [CORRECTION]: 1-bed £1,600-2,000 per Fizzy filter April 2026
- **affordability**: **comfortably-affordable** (explicit cross-calibrate: sits between Fizzy Lewisham `comfortably-affordable` and Fizzy Poplar `comfortably-affordable` — top of that band)
- **resident_signal.homeviews_score**: 4.45/5 across 203 reviews (highest in Fizzy portfolio)
- **resident_signal.common_praise**: ["Responsive, organised management and maintenance", "Modern design, spacious, well-lit apartments", "Transport links (Jubilee + DLR + Elizabeth via Custom House)", "Safe gated community", "Named staff: Mohammad, Paul, Samson"]
- **resident_signal.common_complaints**: ["Bin room odour", "Limited/expensive basement parking", "No air conditioning — 'stuffy' in warm weather", "No on-site gym or rooftop", "Motorway noise on certain aspects"]
- **long_form.notable_features**: "Part of Barratt's Vermilion Tower (15 storeys); gated-community feel; Canning Town station 5-min walk; Jubilee + DLR + Elizabeth-adjacent (Custom House); highest HomeViews score in Fizzy portfolio."

**Sources:**
- https://fizzyliving.com/locations/canning-town
- https://www.homeviews.com/development/fizzy-canning-town-e16

---

### 11. `fizzy-east-16` (Canning Town)

**[CONFIRMED — see v2-greystar-fizzy.md]**

- **architecture.architects**: ["GRID Architects", "Cartwright Pickard"] (per dataset; independently verified via Buildington)
- **architecture.is_signature**: **false** (two 25-storey towers; competent but not landmark)
- **architecture.style_notes**: "Two 25-storey towers within Brunel Street Works masterplan (975-home wider scheme by Linden Homes/Vistry). SUNA Interior Design credited on resident amenity spaces."
- **building_quality.sound_insulation**: `good` — HomeViews praise ("impressively quiet inside" despite bustling area)
- **building_quality.heating_type**: `communal` (inferred, 2022 new-build)
- **amenities.overall_tier**: `decent`
- **amenities.pool**: false, **gym**: true (per dataset), **concierge**: present, **co_working**: true (co-working suite with meeting room), **rooftop_terrace**: podium gardens (other_amenities), **bike_storage**: true, **parking**: true
- **amenities.other_amenities**: ["Podium gardens", "Resident lounges", "Meeting room"]
- **rental.prices** [CORRECTION]: studio £1,500-2,000, 1-bed £1,800-2,200 per Fizzy filter April 2026
- **affordability**: **well-under-budget** (studios) or **comfortably-affordable** (1-beds) — explicit comparable: cheapest of the batch after Lewisham. Studios at £1,500 sit in `well-under-budget` band alongside Fizzy Lewisham studio pricing and Node Brixton £1,675.
- **resident_signal.homeviews_score**: 4.40/5 across 149 reviews
- **resident_signal.common_praise**: ["Responsive management / fast maintenance", "30 seconds from Canning Town Station", "Modern aesthetic + co-working spaces", "Professional leasing staff", "Community engagement events"]
- **resident_signal.common_complaints**: ["Adjacent construction Saturday-morning noise", "Studio boiler/fridge noise noticeable", "Rent increases", "Limited info at viewing stage", "Garden renovation disruption"]
- **long_form.notable_features**: "Two 25-storey towers within Brunel Street Works masterplan; 30 seconds from Canning Town Station; GRID + Cartwright Pickard architects; SUNA Interior Design on amenity spaces; podium gardens; lowest studio price floor in the batch."

**Sources:**
- https://fizzyliving.com/locations/canning-town (landing)
- https://www.homeviews.com/development/fizzy-east16-e16
- https://www.buildington.co.uk/buildings/10716/england/london-e16/15-silvertown-way/fizzy-east-16
- https://www.greystar.com/fizzy-east-16-london-uk/p_18865

---

## Affordability distribution across batch

Following `enrichment-schema.md` § "Use the full range":

| Project | Affordability | 1-bed band | Anchor comparable |
|---|---|---|---|
| Fizzy East 16 (studios) | `well-under-budget` | studio £1,500-2,000 | Fizzy Lewisham (V1 captured £1,280) |
| Fizzy East 16 (1-bed) | `comfortably-affordable` | £1,800-2,200 | Folk Florence Dock `comfortably-affordable` |
| Fizzy Lewisham | `comfortably-affordable` | £1,800-2,100 | Folk Florence Dock |
| Fizzy Canning Town | `comfortably-affordable` | £1,600-2,000 | Folk Florence Dock |
| Fizzy Poplar | `comfortably-affordable` | £1,800-2,200 | Folk Florence Dock |
| Fizzy Stepney Green | `comfortably-affordable` | £1,800-2,100 | Folk Florence Dock |
| Stratford Mill | `at-budget` (projected) | ~£2,200-2,800 | ARK Canary Wharf |
| Mylo Nine Elms | `over-budget` | £2,500+ | Locke Aldgate tier |
| Ten Degrees | `over-budget` | £2,100-2,500 (first-party all-in £3k) | Locke Aldgate tier |
| Bloom Nine Elms | `over-budget` | £3,505+ | Locke Aldgate tier |
| Pearl Yard | `over-budget` | £3,360+ | Locke Aldgate tier |
| Bermondsey Project | `over-budget` (projected) | unpriced | Locke Aldgate tier |

**Distribution spans:** `well-under-budget` → `comfortably-affordable` → `at-budget` → `over-budget`. Only `stretch` is unused — defensibly so (the batch bimodally splits into Fizzy sub-£2,200 and Greystar-direct £2,700+; nothing at the £2,300-2,600 seam). No calibration failure.

---

## Ghost project flags

- **Chapter Living** (mentioned in brief but not in dataset) — not a Greystar asset, Chapter is the Scape PBSA operator. Not adding.
- **Sailmakers** (mentioned in brief) — was a Canary Wharf block that changed hands; not a current Greystar asset. Not adding.
- **Fizzy Walthamstow / Hayes / Silvertown** — in Fizzy's current portfolio (fizzyliving.com/locations) but NOT in the Flatbrowser dataset. Candidate additions for V4 / area-level sweep but out of V2 scope for this batch.

---

## Summary of changes needed on top of prior proposal

1. **[CORRECTION]** `fizzy-lewisham.operator` should become `"Fizzy Living (Greystar)"` not `"Greystar"`.
2. **[CORRECTION]** `ten-degrees.resident_signal.homeviews_score` should update from `3.8` (stale / wrong-scale) to `4.69`.
3. **[CORRECTION]** All Fizzy per-building pricing should refresh against April 2026 Fizzy filter UI + Rightmove listings — V1 captured figures are stale.
4. **[NEW]** Ten Degrees architecture block (HTA Design, 4 awards, style notes) to fill the current stub.
5. **[NEW]** `fizzy-east-16` architects confirmed ("GRID Architects", "Cartwright Pickard") via Buildington.
6. **[NEW]** Bloom Nine Elms architect confirmed (Allies and Morrison) — complete the architecture block.

No ghost projects found. No operator-wide V1 field changes signalled by this research pass.
