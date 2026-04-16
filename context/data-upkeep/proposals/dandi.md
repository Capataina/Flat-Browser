# Proposals — Dandi

**Operator batch:** Licence-based co-living operators (scope audit — Dandi is AST-structured despite branding)
**Date:** 2026-04-16
**Projects covered:** `dandi-battersea` (clapham-junction). Dandi Wembley is NOT currently in the dataset.

**Correction context:** Similar to Vonder Wembley, Dandi's co-living branding masks a standard BTR / AST reality via Right Now Residential as letting agent. This research flags `dandi-battersea` as a mistagged `licence-exempt` that should be corrected.

---

## Operator-level proposed qualification block

| Field | Proposed value | Source |
|---|---|---|
| `agreement_type` | `"ast"` | Right Now Residential application flow is 12-48 month standard AST |
| `referencing_provider` | `"unclear"` | Not named; likely Goodlord via Right Now Residential / Foxtons |
| `min_tenancy_months` | `12` | Right Now Residential application form |
| `income_multiple` | `null` | Not published; likely 30× standard |
| `open_banking_accepted` | `"unclear"` | Not addressed |
| `upfront_rent_policy` | `"one-month-ast-cap"` | Post-RRA AST cap |
| `accepts_professional_guarantor` | `"unclear"` | Not addressed |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Not addressed |
| `credit_check` | `"standard"` | Standard agent referencing via RNR / Foxtons |
| `international_tenant_policy` | `"accepted-case-by-case"` | No explicit welcome; standard BTR posture |
| `visa_expiry_handling` | `"unclear"` | Not addressed |
| `qualification_flexibility_signal` | `"unclear"` | No signal either way |
| `realism_pathways` | `[]` | No pathway clears |
| `grad_visa_realism` | `"unlikely"` | **CORRECTION from `"licence-exempt"`** — see rationale |
| `research_status` | `"complete"` | |

### Realism correction rationale

`dandi-battersea` currently tagged `realism: "licence-exempt"` with preview claim "Licence agreement — Right to Rent check only, no formal credit/income referencing." Research contradicts this:

- Dandi Wembley's application flow via Right Now Residential asks for employer + job details (standard credit/employment verification inputs)
- Dandi's FAQ describes Reposit deposit replacement and traditional 5-week deposit — both AST-structured options
- The agreement length at Dandi Wembley is 12-48 months — standard AST terms, not licence
- Foxtons mentioned as partner agent for Dandi Wembley — Foxtons uses standard referencing

The preview's "Right to Rent check only, no formal credit/income referencing" claim appears to be another instance of co-living branding misleading the tagging, similar to the Vonder-Fraser-Bond correction on 2026-04-16.

**Recommended correction:** `licence-exempt` → `unlikely`. Same pattern as Vonder. User confirmation required.

---

## Per-project proposals

### `dandi-battersea` (clapham-junction)

**Current state:**
- operator = `"Dandi"`
- realism = `"licence-exempt"` ← CORRECT TO `"unlikely"`
- preview claims "Licence agreement — Right to Rent check only, no formal credit/income referencing" (INCORRECT)
- price_transparency = `"listed"`
- pricing £1,750 all-inclusive

**Proposed changes:**

1. **Qualification block:** apply operator-level values above.
2. **Realism correction:** `licence-exempt` → `unlikely`. This is a research-driven correction to a mistagged licence case. Needs user confirmation analogous to the Vonder Wembley correction.
3. **Preview rewrite:** replace "Licence agreement — Right to Rent check only, no formal credit/income referencing" with "AST tenancy (12-48 months) via Right Now Residential letting agent. Standard BTR referencing likely. The co-living branding is cosmetic; structurally this is a conventional rental." — match the corrective framing from Vonder Wembley.
4. **External URL:** consider adding `https://dandi.com/cityliving/dandi-battersea/` (the more canonical brand page) in addition to current link.
5. **Pricing:** no change to £1,750 (unverified but current dataset value stands for now).

### Dandi Wembley (NOT IN DATASET)

The batch prompt flags Dandi Wembley. It's not currently in the dataset. If the user wants to add it:
- Area would be `wembley-park.ts` (already exists)
- Operator: `"Dandi"`
- Realism: `"unlikely"` (same analysis as Battersea)
- Price: ~£1,700-£2,000 studio range per external listings; confirm at dandi.com/cityliving/dandi-wembley/
- Letting flow: via Right Now Residential (rnrwembley.co.uk)

Not adding to dataset is an acceptable Option B — Dandi Wembley doesn't change the graduate-visa-friendly shortlist, it's another mistagged-licence that lands in `unlikely`.

---

## Narrative notes (for `dandi-battersea.notes`)

> Dandi's co-living branding masks a standard BTR / AST reality. Lettings at Dandi Wembley go through Right Now Residential as the letting agent with 12-48 month AST terms and standard employer/job referencing. Dandi Battersea is the same operator with the same structural model. Reposit (deposit-replacement scheme) is used as a tenant-friendly innovation but doesn't change the referencing gate. Post-RRA the 1-month advance-rent cap closes the upfront-payment lever. No realism pathway clears for Caner's profile, so the verdict is `"unlikely"` — analogous to the Vonder-Fraser-Bond correction made on 2026-04-16. Direct enquiry about overseas guarantor / co-signer policy could potentially open a pathway, but more qualified options (Folk, Node, Enclave) should be pursued first. Correct the preview language away from "licence agreement — Right to Rent check only" which appears to have been miscaptured during the prior sweep.

---

## Pricing updates

No changes to pricing numbers. `bills_included` = `true` (pricing is all-inclusive per current preview). `price_transparency: "listed"` retained.

---

## Ghost-project flags

None. Dandi Battersea confirmed at `dandi.com/cityliving/dandi-battersea/`.

---

## Sources

- https://dandi.com/
- https://dandi.com/faqs/
- https://dandi.com/cityliving/dandi-battersea/
- https://dandi.com/cityliving/dandi-wembley/
- https://rnrwembley.co.uk/application/
- https://rightnowresidential.co.uk/developments/dandi-wembley/

All accessed 2026-04-16.
