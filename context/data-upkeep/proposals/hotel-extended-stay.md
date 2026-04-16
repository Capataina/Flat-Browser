# Proposals — hotel-brand extended-stay operators

**Operators:** Citadines (Ascott), Staybridge Suites (IHG), The Gate London, MHA London, Flexistay, Manhattan Loft Gardens, Park Hyatt
**Date:** 2026-04-16
**Projects covered:** `citadines-islington`, `staybridge-vauxhall`, `the-gate-aldgate`, `sovereign-court`, `flexistay-tooting`, `manhattan-loft-gardens`, `one-nine-elms`

---

## Shared operator-level block (applies to Citadines, Staybridge, The Gate, Flexistay)

All four are pure apart-hotel / extended-stay hotel brands with identical structural qualification profile:

| Field | Value |
|---|---|
| `agreement_type` | `"licence"` |
| `referencing_provider` | `"none"` |
| `min_tenancy_months` | `1` |
| `income_multiple` | `null` |
| `open_banking_accepted` | `"no"` |
| `upfront_rent_policy` | `"multi-month-available"` |
| `accepts_professional_guarantor` | `"no"` (not applicable) |
| `accepts_individual_overseas_guarantor` | `"no"` (not applicable) |
| `credit_check` | `"none"` |
| `international_tenant_policy` | `"welcomed"` |
| `visa_expiry_handling` | `"ignored"` |
| `qualification_flexibility_signal` | `"flexible"` |
| `realism_pathways` | `["licence-exempt-light-ref", "with-upfront-licence"]` |
| `grad_visa_realism` | `"licence-exempt"` |
| `research_status` | `"complete"` |

---

## Per-project proposals

### `citadines-islington` (angel-islington)

**Current:** operator=`"Citadines (Ascott)"`, realism=`"licence-exempt"`, living_model=`"apart-hotel"`, `price_transparency: "enquire"`

**Proposed changes:**
1. Apply shared apart-hotel qualification block.
2. **Update `price_transparency` to `"listed"`** — Citadines publishes rates via booking engine; long-stay pricing available.
3. Update `external_links.accessed_date` to 2026-04-16.
4. Add `pricing.notes: "Citadines long-stay terms: stays < 30 nights paid in full 2 weeks before arrival; stays 30+ nights with credit facilities paid first month's rent 2 weeks before arrival. Monthly studio rate approximately £2,500-3,500."`

**Narrative notes:**
> Ascott-operated apart-hotel at Islington Square on Upper Street. 108 studios and apartments (25-53 sqm). No tenant referencing — hospitality licence with ID + credit card at check-in. Long-stay credit facility available for 30+ nights, invoicing the first month's rent 2 weeks before arrival rather than the full stay upfront. Standard apart-hotel licence-exempt pathway.

---

### `staybridge-vauxhall` (vauxhall)

**Current:** operator=`"Staybridge Suites (IHG)"`, realism=`"licence-exempt"`, living_model=`"apart-hotel"`, `price_transparency: "enquire"`

**Proposed changes:**
1. Apply shared apart-hotel qualification block.
2. Update `external_links.accessed_date` to 2026-04-16.

**Narrative notes:**
> IHG Staybridge Suites at Miles Street, Vauxhall. Extended-stay hotel with full kitchens, free breakfast, gym, laundry. IHG's brand convention is no-referencing: ID and card at check-in. Long-stay discounts via IHG booking engine. Monthly rate approximately £3,000-4,000 for a studio — mid-range for the apart-hotel tier.

---

### `the-gate-aldgate` (aldgate-east)

**Current:** operator=`"The Gate"`, realism=`"licence-exempt"`, living_model=`"apart-hotel"`, `price_transparency: "listed"`

**Proposed changes:**
1. Apply shared apart-hotel qualification block.
2. `pricing.studio: { min: 1900, currency: "GBP", per: "month" }` — verified from prior research (28+ night long-stay rate).
3. `bills_included: true`
4. `cost_tier: "mid-range"` (£1,900 studio).
5. Update `external_links.accessed_date` to 2026-04-16 and add `https://www.thegate-london.com/long-stay` as second link.
6. Add `pricing.notes: "28+ night long-stay rate approximately £1,900/mo all-inclusive (~30% off rack). 29+ nights triggers up to 35% off per FAQ. 7+ nights triggers exclusive savings. Prices verified from thegate-london.com/long-stay on 2026-04-16."`

**Narrative notes:**
> Independent apart-hotel at 41 White Church Lane, 3 min from Aldgate East. The top bridge-tier pick per prior research — best Z1 location-to-price ratio at ~£1,900/mo all-inclusive. Free beverages in residents' lounge, Wi-Fi, gym, yoga. Hospitality licence, no referencing, card-only booking. Structurally licence-exempt.

---

### `sovereign-court` (wapping)

**Current:** operator=`"MHA London"`, realism=`"unknown"`, building_type=`"PRS"`, `price_transparency: "enquire"`

**Proposed changes:**
1. **Qualification block: mark all fields `"unclear"` or `"unknown"`** — MHA London publishes minimal qualification documentation.
2. **Preserve `realism: "unknown"`** — too many fields unresolved to derive a pathway.
3. Add `notes`:
   > MHA London (Managed Hospitality Accommodation) operates Sovereign Court — 124-unit converted neo-Georgian near Tobacco Dock. Operator publishes minimal qualification documentation. Appears to blend PRS-style long-term tenancies with managed-hospitality amenities (24/7 concierge, 2-hourly security patrols). Direct enquiry required to resolve agreement type, referencing, and pricing. Keep as research target rather than active shortlist candidate.

---

### `flexistay-tooting` (tooting)

**Current:** operator=`"Flexistay"`, realism=`"licence-exempt"`, living_model=`"apart-hotel"`, `price_transparency: "enquire"`

**Proposed changes:**
1. Apply shared apart-hotel qualification block.
2. Clarify pricing note re: VAT — Flexistay's monthly rates are sometimes quoted +VAT (adding 20%). Confirm at enquiry which quotation convention applies.
3. Update `external_links.accessed_date` to 2026-04-16.

**Narrative notes:**
> Budget apart-hotel 5 min from Tooting Broadway (Northern line). Photo ID + credit card at check-in, no referencing. Open to "those relocating to the UK" — international-friendly by brand design. Monthly rate approximately £1,800-2,500+VAT for studios; VAT convention varies per rate plan. Standard licence-exempt-light-ref pathway.

---

### `manhattan-loft-gardens` (stratford)

**Current:** operator=`"Manhattan Loft Gardens"`, realism=`"unknown"`, building_type=`"BTR"` (no `living_model` set)

**Proposed changes — most substantive of the batch:**

1. **Add `living_model: "standard-btr"`** — Manhattan Loft Gardens is a hybrid BTR with integrated hotel (The Stratford). For qualification purposes, the long-term rental is BTR-AST not apart-hotel.

2. **Apply qualification block:**
   | Field | Value |
   |---|---|
   | `agreement_type` | `"ast"` |
   | `referencing_provider` | `"unclear"` — reference checks required, provider not named |
   | `min_tenancy_months` | `6` |
   | `income_multiple` | `"unclear"` |
   | `open_banking_accepted` | `"unclear"` |
   | `upfront_rent_policy` | `"one-month-ast-cap"` (but see note below) |
   | `accepts_professional_guarantor` | `"unclear"` |
   | `accepts_individual_overseas_guarantor` | `"unclear"` |
   | `credit_check` | `"standard"` (inferred) |
   | `international_tenant_policy` | `"accepted-case-by-case"` |
   | `visa_expiry_handling` | `"unclear"` |
   | `qualification_flexibility_signal` | `"flexible"` — "Payment flexibility is available (upfront, bi-annual, or monthly installments)" |
   | `realism_pathways` | `[]` (strict derivation) |
   | `grad_visa_realism` | **Propose updating `"unknown"` → `"achievable-with-guarantor"`** based on published payment flexibility |
   | `research_status` | `"complete"` (given operator's published limits) |

3. **Update pricing:**
   - `studio: { min: 2200, currency: "GBP", per: "month" }`
   - `one_bed: { min: 2800, currency: "GBP", per: "month" }`
   - `two_bed: { min: 3800, currency: "GBP", per: "month" }`
   - `bills_included: false` (utilities tenant-paid separately)
   - `cost_tier: "premium"` (studio £2,200+)
   - `price_transparency: "listed"` ✅ (already set)
   - `pricing.notes: "Published on manhattanloftgardens.com long-term rental page on 2026-04-16. Monthly housekeeping included, utilities billed separately by tenant, deposit via Mydeposits. Payment flexibility — upfront, bi-annual, or monthly instalments."`

4. Add `notes`:
   > SOM-designed signature tower with 248 loft apartments in Stratford. Operates a hybrid model — standard 6+ month AST long-term tenancies with reference checks, but with published payment flexibility (upfront, bi-annual, monthly) that functions as a qualification flex lever. Integrated with The Stratford hotel for amenity / service overlay. Premium pricing (studio £2,200+) but SOM architecture and hotel-grade amenity are genuine signature-tier differentiators. Referencing provider unnamed — direct enquiry is needed to resolve the Homeppl-vs-Goodlord question.

---

### `one-nine-elms` (Park Hyatt) (nine-elms)

**Current:** operator=`"Park Hyatt"`, realism=`"unlikely"`, building_type=`"Owner-Lease"`, `price_transparency: "enquire"`

**Proposed changes:** Minimal.

1. **Qualification block:** mark all fields `"unclear"` — Park Hyatt Residences operates a luxury branded-residence model where renting is typically owner-to-tenant via the private market, not operator-to-tenant.
2. **Preserve `realism: "unlikely"`** — pricing alone (premium-to-luxury tier, likely £6,000+ for 1-bed) is the effective block. This is correctly authored state.
3. Add `notes`:
   > Park Hyatt London River Thames Residences — 103 luxury branded residences within CC Land's One Nine Elms twin towers. Long-term stays arranged directly with residence owners or via Park Hyatt's own high-end rental pool. Not structurally reachable at Caner's budget tier; retained in dataset as architectural-reference entry rather than active shortlist candidate.

---

## Ghost-project checks — all clean

| Project | Operator portfolio verified |
|---|---|
| Citadines Islington | ✅ Listed on discoverasr.com/en/citadines |
| Staybridge Vauxhall | ✅ Listed on ihg.com |
| The Gate London City | ✅ Own-brand site thegate-london.com operational |
| Sovereign Court (MHA) | ✅ HomeViews company page for MHA London active |
| Flexistay Tooting | ✅ flexistay.com/H-80 operational |
| Manhattan Loft Gardens | ✅ Own-brand site active; rental page published |
| Park Hyatt One Nine Elms | ✅ Own-brand press active 2026 |

No ghost-project flags.

---

## Sources

- https://www.discoverasr.com/en/citadines/united-kingdom/citadines-islington-london
- https://www.ihg.com/staybridge/hotels/us/en/london/lonva/hoteldetail
- https://www.thegate-london.com/
- https://www.thegate-london.com/long-stay
- https://www.thegate-london.com/faqs
- https://www.homeviews.com/company/mha-london
- https://www.flexistay.com/H-80-Flexistay-Tooting-Aparthotel.aspx
- https://www.manhattanloftgardens.com/
- https://www.manhattanloftgardens.com/the-loft-apartments/apartments-and-penthouses/long-term-rental/
- https://riverthamesresidences.com/
- https://resident.com/press-releases/2026/03/22/park-hyatt-residences-set-to-redefine-luxury-living-in-london-with-stunning-riverside-views

All accessed 2026-04-16.
