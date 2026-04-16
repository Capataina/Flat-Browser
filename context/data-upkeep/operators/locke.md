# Locke (Staycity / Edyn) — research notes

**Date of research:** 2026-04-16
**Agent batch:** apart-hotels, serviced apartments, managed studios
**Research scope:** Operator-level qualification policy for Locke apart-hotel portfolio in London.

---

## Operator identity and status

Locke is the design-led apart-hotel brand originally operated by **Edyn** (formerly SACO) and partially transferred to **Staycity Group**. Specifically:

- **Kingsland Locke (Dalston)** transferred from Edyn to Staycity Group on 27 January 2025 and has since been rebranded **Staycity London Dalston**, though the "Kingsland Locke" name still persists in some channels.
- **Bermonds Locke**, **Ember Locke**, **Leman Locke**, **Buckle Street Studios by Locke**, and **Locke at Broken Wharf** remain operated by Edyn under the Locke brand.
- **Locke London Canary Wharf** opens May 2026 (Edyn-operated).

The batch prompt named two projects that do not appear in the current dataset:
- **"Locke at Broken Wharf (city)"** — real Locke property, currently NOT in dataset (candidate for add, not ghost)
- **"Locke de Santa Joaquina (embassy district)"** — **DOES NOT EXIST**. No such property in Locke's London portfolio. This is a hallucinated project name in the batch prompt; ghost-project flag if anyone tries to add it to the dataset. Closest match is "Leman Locke" at Aldgate or Buckle Street Studios by Locke — neither is in "embassy district" (which is Nine Elms / Battersea area).

## Current dataset projects under "Locke (Staycity)" operator attribution

| Project ID | Area | Notes |
|---|---|---|
| `kingsland-locke` | dalston | Operator attribution should be **updated to "Staycity"** — rebranded Jan 2025. |
| `bermonds-locke` | borough-london-bridge | Correctly attributed to Locke/Edyn. |
| `ember-locke` | earls-court | Correctly attributed to Locke/Edyn. |

## Structural qualification policy

Locke is the canonical **design-led apart-hotel** model. Hospitality licence, not AST. Book-and-stay, not apply-and-rent. Evidence from lockeliving.com:

| Field | Value | Evidence |
|---|---|---|
| `agreement_type` | `licence` | Edyn T&Cs are booking T&Cs, not tenancy agreements. Nightly bookable. |
| `referencing_provider` | `none` | Check-in requires **valid photo ID (passport/driving licence) and the credit/debit card used to pay**. No tenant referencing. |
| `min_tenancy_months` | `1` | Discounted "Monthly" rate available for stays 29+ nights; shorter rates for 7-28 nights. |
| `income_multiple` | `null` | Not applicable — no income check. |
| `open_banking_accepted` | `no` | Not applicable — no income check. |
| `upfront_rent_policy` | `multi-month-available` | Standard practice is full-stay or 20% deposit at booking with remaining balance before arrival. |
| `accepts_professional_guarantor` | `no` | Not applicable — guarantor not requested. |
| `accepts_individual_overseas_guarantor` | `no` | Not applicable. |
| `credit_check` | `none` | No credit check. Valid payment card substitutes. |
| `international_tenant_policy` | `welcomed` | International business/leisure travellers are the core customer base. |
| `visa_expiry_handling` | `ignored` | Licence bookings do not reference visa dates. |
| `qualification_flexibility_signal` | `flexible` | "Stay Longer" extended-stay programme actively markets to relocators. |

## Pricing — extended stay discount structure (operator-wide)

From lockeliving.com/en/types-of-stay/extended-stay-and-rental-accommodation:

- **3–6 nights:** up to 10% off
- **7–28 nights:** up to 15% off
- **29+ nights:** up to 20% off (Monthly rate)

All-inclusive: water, gas, electricity, council tax, super-fast Wi-Fi, weekly cleaning, TV licence.

Currently-listed approximate monthly rates (nightly × 30 with 20% extended-stay discount) are in the **£2,500–£4,500/mo** range for a studio across the London Locke portfolio — specific rates date-dependent and only confirmable at booking.

## Realism derivation

All Locke projects clear the `licence-exempt-light-ref` pathway:

- `licence-exempt-light-ref`: licence + referencing_provider=none + credit_check=none → **CLEAR**
- `with-upfront-licence`: licence + multi-month-available → **CLEAR** (paid-at-booking is the structural advance-rent model)

Dominant pathway: `licence-exempt-light-ref`. Derived verdict: **`licence-exempt`**.

No flex levers needed — this is the zero-friction bridge-tier model.

## Sources

- https://www.lockeliving.com/en/london — London portfolio page
- https://www.lockeliving.com/en/types-of-stay/extended-stay-and-rental-accommodation — extended-stay terms
- https://www.lockeliving.com/en/help/making-a-booking/what-payment-methods-do-you-accept — payment methods
- https://www.lockeliving.com/en/help/arrival-and-departure/checking-in-and-checking-out — ID check at arrival
- https://www.lockeliving.com/en/terms-and-conditions — booking T&Cs (Edyn)
- https://www.staycity.com/staycity-takes-on-lease-on-edyns-kingsland-locke-in-london — Kingsland Locke transfer to Staycity (Jan 2025)
- https://www.lockeliving.com/en/london/bermonds-locke/stay-longer
- https://www.lockeliving.com/en/london/locke-at-broken-wharf/stay-longer
- https://btrnews.co.uk/first-glimpse-of-apo-kew-bridge-btr-scheme/ (adjacent context)

## Issues flagged for Phase 3

1. **Kingsland Locke operator attribution is outdated** — transferred to Staycity Jan 2025. Propose updating `operator: "Locke (Staycity)"` → `operator: "Staycity"` OR `operator: "Staycity (ex-Locke)"`. External URL still resolves but is a rebrand candidate. Qualification policy is structurally identical (Staycity also runs hospitality-licence apart-hotels with the same no-referencing model), so `grad_visa_realism: "licence-exempt"` remains correct.

2. **"Locke at Broken Wharf (city)" is missing from the dataset** but is a real property in Central London. This is a plausible additional-project candidate if a City-of-London coverage area exists or is added. NOT a ghost-project — it's a real building not yet represented.

3. **"Locke de Santa Joaquina (embassy district)" is a ghost-project name** — no such Locke property exists. If this name ever appears in the dataset, flag for deletion.
