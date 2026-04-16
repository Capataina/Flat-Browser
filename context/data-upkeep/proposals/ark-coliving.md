# Proposals — ARK Co-living

**Operator batch:** Licence-based co-living operators
**Date:** 2026-04-16
**Projects covered:** `ark-wembley` (wembley-park), `ark-canary-wharf` (canary-wharf)

---

## Operator-level proposed qualification block

Applies to both ARK projects. Derived from `context/data-upkeep/operators/ark-coliving.md`.

| Field | Proposed value | Source |
|---|---|---|
| `agreement_type` | `"licence"` | ARK uses "membership" / licence-based contracts, not AST |
| `referencing_provider` | `"in-house"` | ARK runs reference checks directly; no named third-party |
| `min_tenancy_months` | `3` | Long-stay membership 3-12 months |
| `income_multiple` | `null` | Not published |
| `open_banking_accepted` | `"unclear"` | Not addressed in FAQ |
| `upfront_rent_policy` | `"multi-month-available"` | Verbatim FAQ: "the full balance for your entire stay" option |
| `accepts_professional_guarantor` | `"unclear"` | Not addressed |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Not addressed |
| `credit_check` | `"unclear"` | Reference check happens but scoring method not published |
| `international_tenant_policy` | `"welcomed"` | Core international traveller customer base; long-stay posture tonally similar |
| `visa_expiry_handling` | `"unclear"` | Not addressed |
| `qualification_flexibility_signal` | `"flexible"` | Structural cash-upfront alternative + in-house non-scorecard review |
| `realism_pathways` | `["with-upfront-licence"]` | Only this pathway clears all prerequisites |
| `grad_visa_realism` | `"achievable-with-guarantor"` | **CORRECTION from `"licence-exempt"`** — see rationale |
| `research_status` | `"complete"` | |

### Realism correction rationale

Both ARK projects are currently tagged `realism: "licence-exempt"`. This is too permissive given ARK's published "reference checks must be successfully carried out" language. `licence-exempt-light-ref` requires `credit_check: "lenient"` or `"none"`, but ARK's credit-check strictness is `"unclear"` — reference checks do happen. The correct pathway is `with-upfront-licence` (multi-month upfront at a licence operator), which umbrellas to `"achievable-with-guarantor"`. This matches the actual Caner usability: ARK is doable, but only by leveraging the full-stay-upfront lever — not via a straight walk-in.

**User decision required:** `licence-exempt` → `achievable-with-guarantor` for both ARK projects. Note this is preserving flag (because the schema treats `"blocked"` / `"unlikely"` / `"unclear"` as preserved, but `"licence-exempt"` is itself derived — so moving to `"achievable-with-guarantor"` via the pathway array is a legitimate re-derivation).

---

## Per-project proposals

### `ark-wembley` (wembley-park)

**Current state:**
- operator = `"ARK Co-living"`
- realism = `"licence-exempt"` ← CORRECT TO `"achievable-with-guarantor"`
- studio pricing: £1,699 Classic (correct after 2026-04-16 fix)
- price_transparency = `"listed"`
- external_links point to `https://arkcoliving.com/locations/wembley` — redirects to arkliving.com/coliving/locations/wembley

**Proposed changes:**

1. **Qualification block:** apply operator-level values above.
2. **Realism correction:** `licence-exempt` → `achievable-with-guarantor` (preserving because research material change is corrective, not overriding authored judgement).
3. **External link update:** consider updating URL to `https://arkliving.com/coliving/locations/wembley` to follow the canonical domain migration. Old URL still resolves via redirect; not a blocker but cleaner.
4. **Pricing:** no change — £1,699 pcm confirmed. Note in `notes` that Premium/Premium Plus tiers are sold out until August 2026.
5. **Preview / notes update:** current preview is good. Add emphasis that 5-week bond + £500 down payment + first month = ~£4,160 upfront at signing.

### `ark-canary-wharf` (canary-wharf)

**Current state:**
- operator = `"ARK Co-living"`
- realism = `"licence-exempt"` ← CORRECT TO `"achievable-with-guarantor"`
- preview says "Qualification and upfront payment terms unknown"
- price_transparency = `"listed"` (questionable — research couldn't surface current prices)

**Proposed changes:**

1. **Qualification block:** apply operator-level values above.
2. **Realism correction:** same as Wembley — `licence-exempt` → `achievable-with-guarantor`.
3. **Pricing:** mark as `"unclear"` unless current dataset value (£1,499-£1,849) can be confirmed via direct enquiry. If the operator page is now thin (as research suggests), consider `price_transparency: "enquire"` and add a note that direct confirmation is needed.
4. **External link update:** same URL-migration consideration as Wembley.

---

## Narrative notes (for both ARK `project.notes`)

> ARK Co-living uses a membership / licence model with a two-regime structure: short-stay (under 90 nights) is nightly-bookable with ID + card at check-in, no referencing; long-stay (3-12 months) requires successful reference checks plus a £500 non-refundable down payment, a 5-week refundable bond, and a first month's fee OR — critically — "the full balance for your entire stay" paid upfront. That full-balance-upfront option is the structural qualification lever for applicants without UK credit, making ARK `achievable-with-guarantor` via the `with-upfront-licence` pathway rather than a pure licence-exempt walk-in. Total cash at signing for ARK Wembley Classic is approximately £4,160 (bond + down payment + month 1), or the full 12-month amount if paying upfront. Open Banking, guarantor policies, and whether upfront-payment WAIVES the reference check are not addressed publicly — direct enquiry to `reservations@arkcoliving.com` is the deciding step before committing.

---

## Pricing updates

| Project | studio min | studio max | bills_included | price_transparency | Source |
|---|---|---|---|---|---|
| ark-wembley | 1699 | 2099 | true | listed | arkliving.com/coliving/locations/wembley + external corroboration |
| ark-canary-wharf | (keep 1499 but mark unclear) | 1849 | true | enquire (recommend change) | arkliving.com/coliving/locations/canary-wharf (page thin) |

---

## Ghost-project flags

None. Both ARK buildings confirmed on `arkliving.com`. Note the domain migration from `arkcoliving.com` → `arkliving.com` (old links redirect).

---

## Sources

- https://arkliving.com/faqs
- https://arkcoliving.com/locations/wembley (redirects)
- https://arkliving.com/coliving/locations/wembley
- https://arkcoliving.com/locations/canary-wharf (redirects)
- https://arkliving.com/coliving/locations/canary-wharf
- https://globetrender.com/2022/09/13/wembley-ark-all-inclusive-co-living-london/
- https://www.homeviews.com/development/wembley-ark-ha9

All accessed 2026-04-16.
