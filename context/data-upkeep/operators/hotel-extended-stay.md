# Hotel-brand extended-stay operators — combined research

**Date of research:** 2026-04-16
**Agent batch:** apart-hotels, serviced apartments, managed studios
**Operators covered:** Citadines (Ascott), Staybridge Suites (IHG), Park Hyatt, The Gate London, MHA London (Sovereign Court), Flexistay, Manhattan Loft Gardens

Rationale for combined file: all seven share the same apart-hotel structural model (hospitality licence, card-and-ID-only, no tenant referencing, nightly-bookable with long-stay discounts). Per-operator differences are in brand positioning and price band — qualification mechanics are near-identical.

**Exception:** Park Hyatt at One Nine Elms and Manhattan Loft Gardens operate hybrid models where long-term rental differs from the apart-hotel/hotel norm — researched separately below.

---

## 1. Citadines (Ascott)

**Operator:** Ascott Limited (CapitaLand subsidiary). Citadines is Ascott's apart-hotel brand.
**Dataset project:** `citadines-islington` (angel-islington)

**Status:** Active operator. London portfolio includes Islington, Trafalgar Square, Holborn-Covent Garden (opening 2026), South Kensington, Barbican. 108 studios/apartments at Islington (25-53 sqm).

**Structural qualification:**

| Field | Value | Evidence |
|---|---|---|
| `agreement_type` | `"licence"` | Aparthotel booking T&Cs |
| `referencing_provider` | `"none"` | Hotel-model — ID + card at check-in |
| `min_tenancy_months` | `1` | "Long-term renters welcome" — 30+ nights qualifies for long-stay terms |
| `upfront_rent_policy` | `"multi-month-available"` | For stays < 30 nights: full payment 2 weeks before arrival. For 30+ nights with agreed credit: first month's rent 2 weeks before arrival |
| `credit_check` | `"none"` | Not required |
| `international_tenant_policy` | `"welcomed"` | International business traveller is core market |
| `visa_expiry_handling` | `"ignored"` | Licence model |
| `qualification_flexibility_signal` | `"flexible"` | Credit facilities agreement offered for 30+ nights |

**Pricing:** From ~£105/night (Kayak floor); monthly ~£2,500–3,500 for a studio at Islington based on long-stay discount × nightly. `price_transparency: "enquire"` currently — listed rates available via booking engine.

**Realism:** `"licence-exempt"` via `licence-exempt-light-ref` pathway. Preserve current state.

---

## 2. Staybridge Suites (IHG)

**Operator:** IHG Hotels & Resorts. Staybridge Suites is IHG's extended-stay brand.
**Dataset project:** `staybridge-vauxhall` (vauxhall)

**Status:** Active. UK portfolio includes Vauxhall, Stratford City, Heathrow Bath Road, Heathrow West.

**Structural qualification:** Same apart-hotel profile as Citadines.

| Field | Value |
|---|---|
| `agreement_type` | `"licence"` |
| `referencing_provider` | `"none"` |
| `min_tenancy_months` | `1` |
| `upfront_rent_policy` | `"multi-month-available"` |
| `credit_check` | `"none"` |
| `international_tenant_policy` | `"welcomed"` |
| `visa_expiry_handling` | `"ignored"` |
| `qualification_flexibility_signal` | `"flexible"` |

**Pricing:** Nightly from $95-100 (~£75-80); monthly rate ~£3,000-4,000 per existing preview. IHG loyalty tier or longer stays can unlock additional discounts. Daily breakfast included. `price_transparency: "enquire"` — hotel booking engine.

**Realism:** `"licence-exempt"` — preserve.

---

## 3. The Gate London City

**Operator:** Independent (The Gate — thegate-london.com)
**Dataset project:** `the-gate-aldgate` (aldgate-east)

**Status:** Active. Single building at 41 White Church Lane, 3 min from Aldgate East.

**Structural qualification:** Apart-hotel model.

| Field | Value |
|---|---|
| `agreement_type` | `"licence"` |
| `referencing_provider` | `"none"` |
| `min_tenancy_months` | `1` (7+ nights triggers long-stay; 29+ nights triggers up to 35% off) |
| `upfront_rent_policy` | `"multi-month-available"` |
| `credit_check` | `"none"` |
| `international_tenant_policy` | `"welcomed"` |
| `visa_expiry_handling` | `"ignored"` |
| `qualification_flexibility_signal` | `"flexible"` |

**Pricing:** Published in prior research at ~£1,900/mo all-inclusive for 28+ night long-stay rate (~30% off rack). The Gate's FAQ confirms up to 35% off for 29+ night bookings. This is Caner's top bridge-tier pick — best Z1 location-to-price ratio. `price_transparency: "listed"` (discount structure is public).

**Realism:** `"licence-exempt"` — preserve.

---

## 4. MHA London (Sovereign Court)

**Operator:** MHA London (Managed Hospitality Accommodation)
**Dataset project:** `sovereign-court` (wapping)

**Status:** Active operator, single dataset property (124-unit converted neo-Georgian in Wapping).

Note: the prompt says "MHA = Managed Hospitality Accommodation". Official MHA London site is more specifically MHA Hotels/managed residential. Sovereign Court is described as PRS with single-operator management — **this is a hybrid that sits between BTR and apart-hotel**.

**Structural qualification (inferred — operator is opaque):**

| Field | Value | Confidence |
|---|---|---|
| `agreement_type` | `"unclear"` — likely `"licence"` for short stays, `"ast"` for longer | Low |
| `referencing_provider` | `"unclear"` — not published | Low |
| `min_tenancy_months` | `"unclear"` | Low |
| `credit_check` | `"unclear"` | Low |
| `international_tenant_policy` | `"unclear"` | Low |
| `qualification_flexibility_signal` | `"unclear"` | Low |

**Research finding:** MHA London publishes very little qualification documentation. The dataset correctly marks this as `realism: "unknown"`. Direct enquiry required to resolve any of the structural fields. **Preserve `realism: "unknown"`** pending direct enquiry.

**Ghost-project check:** MHA London does operate properties in London per HomeViews (homeviews.com/company/mha-london). Sovereign Court at 124 units in Wapping is plausible. No ghost flag.

---

## 5. Flexistay

**Operator:** Flexistay (flexistay.com)
**Dataset project:** `flexistay-tooting` (tooting)

**Status:** Active budget apart-hotel chain. Tooting property confirmed.

**Structural qualification:** Budget-end apart-hotel.

| Field | Value |
|---|---|
| `agreement_type` | `"licence"` |
| `referencing_provider` | `"none"` — photo ID + credit card at check-in |
| `min_tenancy_months` | `1` |
| `upfront_rent_policy` | `"multi-month-available"` |
| `credit_check` | `"none"` |
| `international_tenant_policy` | `"welcomed"` — "ideal for those relocating to the UK" |
| `visa_expiry_handling` | `"ignored"` |
| `qualification_flexibility_signal` | `"flexible"` |

**Pricing:** From £47-92/night via booking sites; prior research put monthly at £1,800–£2,500+VAT for studios. VAT inclusion is ambiguous — some rates exclude VAT (making long-stay ~£2,160-3,000 effective for the +VAT case). `price_transparency: "enquire"` — nightly rates listed but monthly conversions require booking engine.

**Realism:** `"licence-exempt"` — preserve.

---

## 6. Manhattan Loft Gardens

**Operator:** Manhattan Loft Gardens (in-house operator, part of Manhattan Loft Corporation; The Stratford hotel integrated)
**Dataset project:** `manhattan-loft-gardens` (stratford)

**Status:** Active, 42-storey SOM-designed tower in Stratford. 248 rental loft apartments.

**Structural qualification — hybrid model:**

This is where Manhattan Loft Gardens differs from pure apart-hotels. It offers **long-term rental with referencing** alongside the hotel-branded offer. Per manhattanloftgardens.com/the-loft-apartments/apartments-and-penthouses/long-term-rental/:

| Field | Value | Evidence |
|---|---|---|
| `agreement_type` | `"ast"` | 6-12 month long-term tenancies |
| `referencing_provider` | `"unclear"` | "Reference checks" required but provider unnamed |
| `min_tenancy_months` | `6` | Verbatim: "long-term tenancies begin from 6 months" |
| `income_multiple` | `"unclear"` | Not published |
| `open_banking_accepted` | `"unclear"` | Not addressed |
| `upfront_rent_policy` | `"one-month-ast-cap"` — but "Payment flexibility is available (upfront, bi-annual, or monthly installments)" suggests multi-month upfront is a published option | Hybrid |
| `accepts_professional_guarantor` | `"unclear"` | Not addressed |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Not addressed |
| `credit_check` | `"standard"` (inferred — reference checks required) | Inferred |
| `international_tenant_policy` | `"accepted-case-by-case"` | Right-to-Rent verification required (UK law) |
| `visa_expiry_handling` | `"unclear"` | Not published |
| `qualification_flexibility_signal` | `"flexible"` | Published bi-annual / upfront payment options |

**Pricing:**
- Studios from £2,200/mo
- 1-bed from £2,800/mo
- 2-bed from £3,800/mo
- 3-bed from £6,000/mo
- Warehouse lofts £5,000-£6,000/mo
- Deposit via Mydeposits
- Utilities tenant-paid separately
- Monthly housekeeping included

`price_transparency: "listed"` — explicitly published on long-term-rental page.

**Realism:** Current state `"unknown"`. **Propose updating to `"achievable-with-guarantor"`** on the grounds that:
- Published payment flexibility (bi-annual / upfront) is a real flex lever
- AST with 6-month minimum is the primary contract type

The published upfront option is narrower than pre-RRA (post-May-2026, AST advance rent capped at 1 month), but bi-annual is still viable as a qualification signal. Explicit `"achievable-with-guarantor"` fits better than `"unknown"` given the published flex mechanisms.

---

## 7. Park Hyatt (One Nine Elms)

**Operator:** Park Hyatt London River Thames Residences (branded residences within CC Land's One Nine Elms development)
**Dataset project:** `one-nine-elms` (nine-elms)

**Status:** Active — Park Hyatt London River Thames opened in Nine Elms 2025. Residences launching 2026, 103 luxury apartments.

**Structural model — NOT apart-hotel:**

Park Hyatt Residences at One Nine Elms is **luxury branded residences**, not an apart-hotel. The model is:
- Long-term ownership (buy) as primary route
- Some owner-let rentals via the secondary market
- Limited "high-end long-term stays" via Park Hyatt-managed rental pool

| Field | Value |
|---|---|
| `agreement_type` | `"unclear"` — mix of private-ownership rentals (AST) and hotel-managed long-stay (licence-ish) |
| `referencing_provider` | `"unclear"` |
| `min_tenancy_months` | `"unclear"` — long-term stays specifically, not month-by-month |
| `income_multiple` | `"unclear"` — irrelevant at this price point |
| `international_tenant_policy` | `"welcomed"` — global audience is explicit target |
| `qualification_flexibility_signal` | `"flexible"` — hospitality-layer operator flex |

**Pricing:** Not publicly listed. Premium-to-luxury tier (likely £6,000+/mo for 1-bed based on One Nine Elms ownership pricing).

**Realism:** Current state `"unlikely"` — preserve. Price alone is the effective block for Caner's profile. No useful pathway research required; this is not a budget-reachable option.

---

## Aggregate realism summary

| Project | Current realism | Proposed | Pathway |
|---|---|---|---|
| `citadines-islington` | `licence-exempt` | Preserve | `licence-exempt-light-ref` |
| `staybridge-vauxhall` | `licence-exempt` | Preserve | `licence-exempt-light-ref` |
| `the-gate-aldgate` | `licence-exempt` | Preserve | `licence-exempt-light-ref` |
| `sovereign-court` (MHA) | `unknown` | Preserve (too opaque) | `[]` |
| `flexistay-tooting` | `licence-exempt` | Preserve | `licence-exempt-light-ref` |
| `manhattan-loft-gardens` | `unknown` | **Update to `achievable-with-guarantor`** | bi-annual/upfront flex signal |
| `one-nine-elms` (Park Hyatt) | `unlikely` | Preserve | `[]` (price block) |

---

## Sources

- https://www.discoverasr.com/en/citadines/united-kingdom/citadines-islington-london
- https://www.ihg.com/staybridge/hotels/us/en/london/lonva/hoteldetail
- https://www.thegate-london.com/long-stay
- https://www.thegate-london.com/faqs
- https://www.manhattanloftgardens.com/the-loft-apartments/apartments-and-penthouses/long-term-rental/
- https://riverthamesresidences.com/ — Park Hyatt
- https://resident.com/press-releases/2026/03/22/park-hyatt-residences-set-to-redefine-luxury-living-in-london-with-stunning-riverside-views
- https://www.flexistay.com/H-80-Flexistay-Tooting-Aparthotel.aspx
- https://www.homeviews.com/company/mha-london

All accessed 2026-04-16.
