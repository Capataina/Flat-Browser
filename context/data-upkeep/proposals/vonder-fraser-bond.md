# Proposals — Vonder Wembley (via Fraser Bond)

**Operator batch:** Licence-based co-living operators (scope audit)
**Date:** 2026-04-16
**Projects covered:** `vonder-wembley` (wembley-park)

**Correction context:** This operator was previously mistagged as `realism: "licence-exempt"` because the Vonder brand markets co-living. The real letting agent is Fraser Bond using AST-based standard referencing — the 2026-04-16 correction to `"unlikely"` stands and is documented here.

---

## Operator-level proposed qualification block

| Field | Proposed value | Source |
|---|---|---|
| `agreement_type` | `"ast"` | 12-month minimum lease per Fraser Bond listing; standard tenancy, not co-living licence |
| `referencing_provider` | `"in-house"` | Fraser Bond runs bespoke referencing (affordability + previous-landlord references); not Homeppl/Goodlord |
| `min_tenancy_months` | `12` | Fraser Bond listing: "minimum 12-month lease" |
| `income_multiple` | `null` | Not published; Fraser Bond uses judgement-based affordability |
| `open_banking_accepted` | `"unclear"` | Not addressed |
| `upfront_rent_policy` | `"one-month-ast-cap"` | Post-RRA AST cap applies; no licence pathway |
| `accepts_professional_guarantor` | `"unclear"` | Fraser Bond mentions guarantor pathways elsewhere but not standardised for Vonder Wembley |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Not addressed |
| `credit_check` | `"lenient"` | Fraser Bond's "no credit check" marketing — but affordability + landlord reference is still done |
| `international_tenant_policy` | `"accepted-case-by-case"` | Vonder hosts international residents but Fraser Bond's flow is per-application judgement |
| `visa_expiry_handling` | `"unclear"` | Not addressed |
| `qualification_flexibility_signal` | `"unclear"` | Mixed Trustpilot reviews; no durable positive or negative signal |
| `realism_pathways` | `[]` | No pathway clears — see rationale |
| `grad_visa_realism` | `"unlikely"` | **PRESERVE** — authored judgement from 2026-04-16 correction |
| `research_status` | `"complete"` | |

---

## Per-project proposals

### `vonder-wembley` (wembley-park)

**Current state:**
- operator = `"Vonder (lettings via Fraser Bond)"`
- realism = `"unlikely"` ✓ (already correct from 2026-04-16 fix)
- preview correctly flags the AST-via-Fraser-Bond reality
- The inline comment at line 113-116 of `wembley-park.ts` documents the correction

**Proposed changes:**

1. **Qualification block:** apply operator-level values above (fills in the structural detail the 2026-04-16 correction captured at the realism level but not at every field).
2. **Realism:** NO CHANGE. `"unlikely"` stays — it's the correct authored judgement and `deriveRealism(pathways, "unlikely")` preserves it regardless of empty pathway array.
3. **External URL:** `https://www.vonderwembley.com/` — keep; consider adding Fraser Bond blog URL as secondary source since it documents the letting agent relationship: `https://fraserbond.com/blog/article/vonder-wembley-london-ha9-b3301`.
4. **Pricing:** no change (studio £1,545, 1-bed £1,825). Bills: `true` but council tax excluded — confirm on rental page.
5. **Notes:** update to explicitly reference the AST + Fraser Bond + 12-month reality.

---

## Narrative notes (for `project.notes`)

> Vonder Wembley's co-living branding is misleading for Caner. The actual lettings flow is managed by Fraser Bond as letting agent with a 12-month minimum AST tenancy, not the licence-exempt co-living model the brand implies. Fraser Bond uses bespoke referencing (affordability judgement + previous-landlord references rather than credit scoring) — marketed as "no credit check" but referencing still occurs. Post-RRA this becomes structurally adverse: the 1-month advance-rent cap kills the upfront-payment lever, and Fraser Bond does not document an overseas-guarantor or Open Banking alternative pathway. No realism pathway clears for Caner's profile, hence `"unlikely"` verdict. This was a corrected mistagging on 2026-04-16 — the building is retained in the dataset for completeness but deprioritised in the email round. Direct enquiry could potentially negotiate a non-standard upfront lease structure, but more qualified options (Folk, Node, Gravity, Enclave) should be pursued first.

---

## Pricing updates

| Project | studio min | 1-bed min | bills_included | price_transparency | Source |
|---|---|---|---|---|---|
| vonder-wembley | 1545 | 1825 | true (council tax excluded) | listed | vonderwembley.com — prior research, no change |

---

## Ghost-project flags

None. Vonder Wembley confirmed at 1 Olympic Way HA9 on both `vondereurope.com/locations/gbr/london/wembley` and Fraser Bond's listings.

---

## Sources

- https://www.vonderwembley.com/
- https://www.vondereurope.com/locations/gbr/london/wembley
- https://fraserbond.com/blog/article/vonder-wembley-london-ha9-b3301
- https://fraserbond.com/blog/article/say-goodbye-to-credit-checks-rent-directly-from-owners-with-fraser-bond-in-the-uk-b7495
- https://uk.trustpilot.com/review/vondereurope.com
- https://ca.trustpilot.com/review/www.fraserbond.co.uk

All accessed 2026-04-16.
