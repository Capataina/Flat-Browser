# Fizzy Living (Greystar subsidiary) — Operator Research Findings

**Research date:** 2026-04-16
**Agent:** data-upkeep Phase 2 (Greystar-family batch)
**Covered buildings in Flatbrowser dataset:** Fizzy Lewisham, Fizzy East 16 (Brunel Street Works), Fizzy Stepney Green, Fizzy Canning Town, Fizzy Poplar.
**Covered buildings NOT in Flatbrowser dataset:** Fizzy Walthamstow, Fizzy Hayes, Fizzy Epsom (3 of 8 Fizzy London-area properties).

---

## Corporate summary

Fizzy Living was acquired by Greystar in December 2021 from Metropolitan Thames Valley Housing. The brand is retained as the mid-market / value-oriented sub-brand in Greystar's UK portfolio — lower rent floors than Greystar-direct-branded buildings (Pearl Yard / Bloom / Bermondsey Project), positioned around "renter-friendly, hassle-free, pet-friendly" value proposition.

Fizzy operates 8 properties, all in Greater London:

| Property | Area | In Flatbrowser dataset? |
|---|---|---|
| Fizzy Lewisham | Lewisham (SE13) | ✅ `fizzy-lewisham` |
| Fizzy East 16 | Canning Town (E16, Brunel Street Works) | ✅ `fizzy-east-16` |
| Fizzy Stepney Green | Stepney Green (E1) | ✅ `fizzy-stepney-green` (under `mile-end`) |
| Fizzy Canning Town | Canning Town (E16) | ✅ `fizzy-canning-town` |
| Fizzy Poplar | Poplar (E14) | ✅ `fizzy-poplar` |
| Fizzy Walthamstow | Walthamstow (E17) | ❌ NOT IN DATASET |
| Fizzy Hayes | Hayes (UB3) | ❌ NOT IN DATASET (Hayes not a dataset area) |
| Fizzy Epsom | Epsom | ❌ NOT IN DATASET (outer) |

Central leasing line for all Fizzy London buildings: **020 8154 3110** (verified on operator site) — single point of contact per the 2026-04-16 shortlist methodology.

---

## Shared Fizzy-wide policy stack (verified)

Identical Greystar-family stack; Fizzy FAQ wording is the canonical source for the whole group.

| Policy | Value | Source |
|---|---|---|
| Agreement type | AST — 12-month fixed term | Fizzy FAQ: "fixed term of 12 months" |
| Referencing provider | **Homeppl** | Fizzy FAQ verbatim: "Homeppl conducts the assessment for eligibility" |
| Affordability test | **2.66× annual rent** household income | Fizzy FAQ: "household income must be at least 2.66 times the annual rent" (before discounts/concessions) |
| Guarantor | Accepted (subject to referencing) | Fizzy FAQ: guarantor accepted if applicant fails affordability |
| Guarantor income | **4× annual rent** | Fizzy FAQ verbatim |
| Corporate guarantor (Guarantid / Housing Hand) | **Not named** in Fizzy FAQ | Requires direct enquiry |
| Open Banking | Not explicitly mentioned in Fizzy FAQ; but Fizzy uses Homeppl, and Homeppl's primary mechanism is Open Banking | Homeppl FAQ |
| International / non-UK tenants | Accepted subject to Right to Rent | Fizzy FAQ: "Non-EU tenants must provide original ID documentation proving legal right to live in UK." Virtual viewings via Skype/FaceTime available for overseas applicants |
| Visa expiry | Not addressed explicitly | |
| Credit check | Standard via Homeppl (lenient for thin-file) | Homeppl documentation |
| Advance rent | **Students must pay 12 months rent in advance** (Fizzy FAQ verbatim); for non-student applicants terms negotiable with team — pre-RRA posture | Fizzy FAQ: "Students must pay 12 months rent in advance" |
| Post-RRA advance rent | Capped at 1 month for new APTs granted on/after 1 May 2026 | Renters' Rights Act 2025 |
| Minimum tenancy | 12 months (standard), lease term options of 6/9/12 months available per location pages | Location-page filter UI on fizzyliving.com |
| Deposit | 5 weeks' rent OR Flatfair (£350-£600 one-time) | Fizzy FAQ |
| Promotions | Lewisham: up to 4 weeks free rent on selected apartments (as of 2026-04-16) | fizzyliving.com/locations/lewisham |

---

## Flex signal (qualification_flexibility_signal)

**Signal: flexible** — documented brand posture; 93% Excellent/Very Good on HomeViews; Fizzy FAQ explicitly offers negotiable advance rent; group-wide stance is renter-friendly and pet-friendly.

Positive signals:
- HomeViews "Rating of Excellence Award" across all Fizzy developments
- Fizzy Stepney Green and Fizzy Lewisham in HomeViews top-20 UK developments
- Fizzy FAQ explicitly says terms are "negotiable with team" for advance rent
- 93% of Fizzy Living residents rate "Excellent" or "Very good" on HomeViews
- Brand position as renter-friendly and pet-friendly — documented marketing stance

Negative signals:
- Trustpilot 2.3/5 for Fizzy Canning Town (small sample; sentiment may reflect building-specific ops issues rather than qualification posture)
- No documented cases of Guarantid / Housing Hand acceptance in reviews — verification remains open

---

## Pathway derivation (identical to Greystar-direct)

- `referencing_provider: "homeppl"` ✅
- `open_banking_accepted: "yes"` (via Homeppl) ✅
- `accepts_professional_guarantor: "unclear"` (not named in Fizzy FAQ)
- `accepts_individual_overseas_guarantor: "unclear"` (Homeppl supports; Fizzy doesn't explicitly state)
- `credit_check: "lenient"` (Homeppl)
- `international_tenant_policy: "accepted-case-by-case"` (Right to Rent compliance path)
- `visa_expiry_handling: "unclear"`

→ Pathways:
- ❌ `standard-passable` — 2.66× test is material gap without Open Banking savings substitution
- ❌ `with-professional-guarantor` — unverified
- ✅ `with-savings` — Homeppl 36× monthly savings route
- ❌ `with-co-signer-overseas` — downgraded to unclear
- ❌ `with-upfront-licence` — AST + RRA 1-month cap for new APTs
- ❌ `licence-exempt-light-ref` — AST

**Result:** `realism_pathways: ["with-savings"]`, `grad_visa_realism: "achievable-with-guarantor"`.

Fizzy's advantage over Greystar-direct is the **lower absolute rent floor** (Fizzy Lewisham at £1,280 1-bed is the cheapest 1-bed BTR in London per the 2026-04-16 shortlist). Lower rent → lower 2.66× threshold → lower savings requirement (36× monthly of £1,280 = £46,080 vs 36× monthly of £2,670 at Pearl Yard = £96,120). Savings route is **materially more accessible at Fizzy** than at premium Greystar-direct.

---

## Per-project variations

### Fizzy Lewisham (`fizzy-lewisham`, lewisham-gateway)

- **Cheapest 1-bed BTR in London** — £1,280 per the 2026-04-16 shortlist; current filter range on site is £1,500-£2,500+ which suggests floor has moved up OR the £1,280 1-bed is a specific unit subset
- 184-unit scheme completed March 2024
- Promotion: "Up to 4 weeks free rent on selected apartments - T&Cs apply" (active 2026-04-16)
- 15th-floor rooftop terrace, on-site property manager, free broadband, co-working space
- Pet-friendly
- Homeppl + standard Fizzy stack

### Fizzy East 16 (`fizzy-east-16`, canning-town)

- 292 units in two 25-storey towers within Brunel Street Works (975-home masterplan)
- Completed autumn 2022
- Pricing: not listed on Greystar-aggregated page — "contact the community for pricing"
- Prior dataset notes: studios from ~£1,500, 1-beds from ~£1,800 (needs verification)

### Fizzy Stepney Green (`fizzy-stepney-green`, mile-end)

- Award-winning (PRS Development of the Year)
- Filter UI shows £1,500-£2,500+ PCM range
- 6/9/12 month lease term options available
- Dataset had 1-beds from ~£1,984 — verify

### Fizzy Canning Town (`fizzy-canning-town`, canning-town)

- ~140 units
- Pricing not listed on Greystar-aggregated page — contact community
- Dataset had Trustpilot 2.3/5 (small sample) — local ops issue signal, not referencing-policy signal
- Lower price floor than trophy BTR addresses — sleeper target

### Fizzy Poplar (`fizzy-poplar`, poplar-blackwall)

- Pricing on site:
  - Studio-1bed: £1,500–£1,800 PCM
  - 1-2bed: £1,800–£2,100 PCM
  - 2-3bed: £2,100–£2,500 PCM
  - 3+: £2,500+
- 6/9/12 month lease term options
- Free fibre broadband; parking + storage at added cost
- On-site gym, communal garden, 24-hour concierge

---

## Ghost / missing-project flags

### NOT a ghost — but MISSING from dataset

**Fizzy Walthamstow** exists but is not in the Flatbrowser dataset. This is the third Fizzy London building missing (also Fizzy Hayes and Fizzy Epsom, though those are outside dataset area coverage).

- Fizzy Walthamstow verified existence: https://fizzyliving.com/locations/walthamstow/ and https://www.greystar.com/fizzy-walthamstow-london-uk/p_18867
- Address: 5D Blackhorse Lane, Walthamstow, E17 6DS
- Near Blackhorse Road Overground/Underground
- Walthamstow IS a dataset area (walthamstow.ts exists)

**Task-brief listed "Greystar Walthamstow" as project #7 of the Greystar direct portfolio.** No such project exists in the dataset. This is most plausibly:
1. A **reference to the missing Fizzy Walthamstow**, which should be added as a new project
2. OR a task-brief typo to be ignored

**Recommended action:** Ask user whether to propose adding Fizzy Walthamstow as a new project (mirroring the other 5 Fizzy entries). If yes, it would be `id: "fizzy-walthamstow"`, `area_id: "walthamstow"`, Fizzy Living (Greystar) operator, same qualification stack as other Fizzy buildings.

### No other ghost flags

All 5 Fizzy projects currently in the dataset verified as operational on fizzyliving.com/locations and on greystar.com aggregated property pages. No category-A ghosts in the Fizzy portfolio.

---

## Cost tier snapshot

| Project | Floor rent (1-bed) | Cost tier |
|---|---|---|
| Fizzy Lewisham | £1,280 (shortlist) / £1,500+ (site filter) | affordable (if £1,280 holds) or mid-range |
| Fizzy East 16 | Unclear — not listed | — |
| Fizzy Stepney Green | ~£1,984 (dataset) | mid-range |
| Fizzy Canning Town | Unclear — not listed | — |
| Fizzy Poplar | £1,800+ | mid-range |

---

## Sources

| URL | Label | Type | Accessed |
|---|---|---|---|
| https://fizzyliving.com/faq | Fizzy Living FAQ (canonical) | operator | 2026-04-16 |
| https://fizzyliving.com/locations | Fizzy locations page (8 properties listed) | operator | 2026-04-16 |
| https://fizzyliving.com/locations/lewisham | Fizzy Lewisham | operator | 2026-04-16 |
| https://fizzyliving.com/locations/poplar | Fizzy Poplar | operator | 2026-04-16 |
| https://fizzyliving.com/locations/stepney-green | Fizzy Stepney Green | operator | 2026-04-16 |
| https://fizzyliving.com/locations/walthamstow/ | Fizzy Walthamstow (not in dataset) | operator | 2026-04-16 |
| https://www.greystar.com/fizzy-east-16-london-uk/p_18865 | Fizzy East 16 (Greystar aggregated) | operator | 2026-04-16 |
| https://www.greystar.com/fizzy-canning-town-london-uk/p_18858 | Fizzy Canning Town | operator | 2026-04-16 |
| https://www.greystar.com/fizzy-walthamstow-london-uk/p_18867 | Fizzy Walthamstow | operator | 2026-04-16 |
| https://www.greystar.com/blog/5-reasons-youll-love-fizzy-by-greystar | Greystar's Fizzy brand positioning | operator | 2026-04-16 |
| https://www.homeppl.com/blog/who-can-be-a-rent-guarantor/ | Homeppl guarantor policy | referencing | 2026-04-16 |
| https://www.guarantid.com/lm-homepage | Guarantid (Homeppl's native guarantor) | referencing | 2026-04-16 |
| https://www.homeviews.com/company/fizzy-living | Fizzy Living HomeViews reviews | homeviews | 2026-04-16 |

---

## Open questions / direct-enquiry list

1. **Is Guarantid explicitly accepted by Fizzy Living?** Homeppl-native product — single-call verification unlocks the with-professional-guarantor pathway across all 5 dataset Fizzy buildings. Call 020 8154 3110.
2. **Is Housing Hand accepted as an alternative?** Not named in Fizzy FAQ.
3. **Fizzy Lewisham £1,280 1-bed floor** — verify against current site; filter shows £1,500 start suggesting either the £1,280 is a specific promo/unit or has risen. Source check needed.
4. **Non-student advance-rent negotiability** — Fizzy FAQ explicitly offers "terms negotiable with team." Post-1-May-2026 this is capped to 1 month for new APTs. Does Fizzy have a substitute affordability-failure pathway (e.g. higher guarantor threshold)?
5. **Should Fizzy Walthamstow be added to the dataset?** It's a Greystar/Fizzy operation on the same stack, in a dataset area, with comparable pricing to Fizzy Poplar.
