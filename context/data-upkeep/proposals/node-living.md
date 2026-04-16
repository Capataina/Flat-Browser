# Proposals — Node Living

**Operator batch:** Licence-based co-living operators
**Date:** 2026-04-16
**Projects covered:** `node-living-brixton` (brixton), `node-limehouse` (poplar-blackwall)

---

## Operator-level proposed qualification block

Applies to both Node Living projects. Derived from `context/data-upkeep/operators/node-living.md`.

| Field | Proposed value | Source |
|---|---|---|
| `agreement_type` | `"licence"` | Co-living operator; 3-month minimum + "secure your space" language |
| `referencing_provider` | `"none"` | FAQ flow has no referencing step; no third-party named |
| `min_tenancy_months` | `3` | FAQ verbatim: "the minimum stay is 3 months" |
| `income_multiple` | `null` | Not published |
| `open_banking_accepted` | `"unclear"` | Not addressed |
| `upfront_rent_policy` | `"multi-month-available"` | Licence operator; structurally supports multi-month upfront |
| `accepts_professional_guarantor` | `"unclear"` | Not addressed; likely not required |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Not addressed; likely not required |
| `credit_check` | `"none"` | FAQ silent on credit check; international-first customer base incompatible with UK credit scoring |
| `international_tenant_policy` | `"welcomed"` | FAQ verbatim names "international and national workers, expats, digital nomads, (master) students, and young professionals 22 to 40" |
| `visa_expiry_handling` | `"unclear"` | Not addressed |
| `qualification_flexibility_signal` | `"flexible"` | Strong positive: structural flow + international customer base |
| `realism_pathways` | `["licence-exempt-light-ref", "with-upfront-licence"]` | Both pathway rules clear |
| `grad_visa_realism` | `"licence-exempt"` | Derived — matches current dataset value |
| `research_status` | `"complete"` | |

---

## Per-project proposals

### `node-living-brixton` (brixton)

**Current state:**
- operator = `"Node Living"`
- realism = `"achievable-with-guarantor"` (WEAKER than the derivation supports — can upgrade to `licence-exempt`)
- preview notes "£1,675/month" (slightly stale — current minimum is £1,720 pcm)
- price_transparency = `"listed"`

**Proposed changes:**

1. **Qualification block:** apply operator-level values above.
2. **Realism upgrade:** `achievable-with-guarantor` → `licence-exempt`. Rationale: `licence-exempt-light-ref` pathway clears (licence + referencing_provider="none"), and the playbook priority rule promotes this to `licence-exempt`. The existing `achievable-with-guarantor` is a legacy under-grade from a more cautious pre-research tagging.
3. **Pricing update:** studio `{ min: 1720, max: 2710, currency: "GBP", per: "month" }` — capture the range because 1-bed units push the top of the pricing. Or keep studio narrow: `{ min: 1720, currency: "GBP", per: "month" }` and document 1-bed separately. Bills: `true` but flag the £205-utilities ambiguity.
4. **Preview update:** change "£1,675/month" to "£1,720/month".
5. **External URL:** `https://node-living.com/london/node-brixton/` — no change needed.

### `node-limehouse` (poplar-blackwall)

**Current state:**
- operator = `"Node Living"`
- realism = `"licence-exempt"` (correct)
- preview notes £1,742/month (correct)
- price_transparency = `"listed"`

**Proposed changes:**

1. **Qualification block:** apply operator-level values above (same as Brixton).
2. **Realism:** no change (`licence-exempt` already correct).
3. **Pricing:** studio `{ min: 1742, max: 2154, currency: "GBP", per: "month" }`. Bills inclusive.
4. **External URL:** `https://node-living.com/london/node-limehouse/` — no change needed.

---

## Narrative notes (for both `project.notes`)

> Node Living runs the strongest structurally-welcoming qualification flow of any co-living operator in the dataset. The FAQ explicitly names international workers, expats, digital nomads, and students 22-40 as the core customer base. The documented move-in flow is a single step — one-month deposit plus proportional first month's rent — with no referencing, credit check, or guarantor step published. The dominant realism pathway is `licence-exempt-light-ref`, giving `licence-exempt` verdict. Caveat: a separate £205/month utilities line has appeared in external sources for some Node Brixton units, inconsistent with the headline all-inclusive claim — confirm at enquiry whether the rent genuinely covers utilities. The "no referencing" claim softened from verbatim denial to structural silence during the current research round — the FAQ doesn't mention referencing either way, but the flow contains no such step. For Caner's email round, Node Living should still be the top shortlist candidate alongside Folk.

---

## Pricing updates

| Project | studio min | studio max | bills_included | price_transparency | Source |
|---|---|---|---|---|---|
| node-living-brixton | 1720 | 2710 | true (with £205 utilities caveat) | listed | node-living.com/london/node-brixton/ 2026-04-16 |
| node-limehouse | 1742 | 2154 | true | listed | node-living.com/london/node-limehouse/ 2026-04-16 |

---

## Ghost-project flags

None. Both Node Living buildings confirmed on `node-living.com`.

---

## Sources

- https://node-living.com/faq-page/
- https://node-living.com/london/node-brixton/
- https://node-living.com/london/node-limehouse/
- https://node-living.com/coliving/london/
- https://node-living.com/apartments/london/
- https://find-and-update.company-information.service.gov.uk/company/10065638 (Companies House — operator identity confirmation)

All accessed 2026-04-16.
