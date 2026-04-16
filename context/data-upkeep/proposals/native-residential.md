# Proposals — Native Residential / Native Communities

**Operator:** Native Residential (Native Holdings) — BTR arm. Native Communities is a product line under Native Residential.
**Date:** 2026-04-16
**Projects in scope:** `alma-aldgate` (aldgate-east), `alma-whitechapel` (whitechapel)

---

## CRITICAL — Potential duplicate / ghost-project flag (Category B wrong attribution OR duplicate)

The two "Alma" entries in the dataset both describe the same building profile:
- 159-unit BTR tower, ~26 storeys
- Studio from £2,950/mo
- Managed by "Native"
- External URL `alma-aldgate.co.uk`

**Likely reality:** there is one Alma building at the corner of Whitechapel High Street and Commercial Road (Aldgate Place Phase 2). Both dataset entries describe it, but area attribution differs:

| Project ID | Area | Developer | Operator | External URL |
|---|---|---|---|---|
| `alma-aldgate` | aldgate-east | "Barratt Homes (McLaren Construction)" | "Native Communities" | alma-aldgate.co.uk |
| `alma-whitechapel` | whitechapel | "British Land" | "Native Residential" | native-communities.com/portfolio/alma/ |

**Divergent developer attribution** — alma-aldgate says "Barratt Homes (McLaren Construction)"; alma-whitechapel says "British Land". One is wrong. Press research and the `alma-aldgate.co.uk` page should clarify.

**Proposal for Phase 3 user decision:**

1. **Investigate whether `alma-aldgate` and `alma-whitechapel` are the same building.**
   - If YES → **delete one duplicate**, keep the canonically-named one, tombstone the other. Aldgate East is structurally more accurate per address (Whitechapel High Street/Commercial Road corner is served by Aldgate East tube, 3 min away) but the building's own marketing language is "Whitechapel" in some places.
   - If NO (two separate Native-operated Alma buildings) → clarify operator and developer attribution for each and ensure the distinguishing context is in each preview.

2. Consolidate operator attribution: **"Native Residential"** is the canonical operator brand. "Native Communities" is a product line within it. Propose renaming both (or the surviving entry) to `operator: "Native Residential"`.

---

## Operator-level qualification block (if both entries are preserved)

Applies identically whether one or two Alma buildings are retained:

| Field | Proposed value | Source |
|---|---|---|
| `agreement_type` | `"ast"` | Standard BTR |
| `referencing_provider` | `"unclear"` | Not publicly named |
| `min_tenancy_months` | `12` | Standard BTR |
| `income_multiple` | `30` (inferred) | £2,950 × 30 = £88,500/yr implied |
| `open_banking_accepted` | `"unclear"` | Not addressed |
| `upfront_rent_policy` | `"one-month-ast-cap"` | AST + RRA |
| `accepts_professional_guarantor` | `"unclear"` | Not addressed |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Not addressed |
| `credit_check` | `"standard"` | Standard BTR |
| `international_tenant_policy` | `"unclear"` | Not published |
| `visa_expiry_handling` | `"unclear"` | Not published |
| `qualification_flexibility_signal` | `"standard"` | No flex signal |
| `realism_pathways` | `[]` | No pathway clears |
| `grad_visa_realism` | `"blocked"` | **Preserve current** — premium pricing alone is effectively the block |
| `research_status` | `"complete"` (within limits of Native's opacity) | |

---

## Per-project notes

### `alma-aldgate` (if retained)

**Narrative:**
> 26-storey triangular BTR tower at Whitechapel High Street / Commercial Road corner (Aldgate Place Phase 2). 159 units, completed 2024, premium specification (comfort cooling, underfloor heating, wine cooler). Studios from £2,950/mo — the pricing alone effectively blocks graduate-visa applicants without a clear fallback pathway, and Native publishes no qualification fallbacks comparable to Apo or the Homeppl-using BTR operators. `realism: "blocked"` preserved.

### `alma-whitechapel` (if retained — or retire as duplicate)

If retained, same narrative. If retired as duplicate, tombstone:
```
// REMOVED 2026-04-16: "Alma Whitechapel" — confirmed duplicate of alma-aldgate.
// Single building at Aldgate/Whitechapel boundary; both area entries described
// the same tower. Canonical entry is alma-aldgate (aldgate-east area). Native
// Communities portfolio page confirms single Alma property.
```

---

## Category correction

The batch prompt grouped Native Residential under "apart-hotels, serviced apartments, managed studios". **This is a category error.** Native Residential is a BTR operator (AST, 12-month tenancy, standard referencing). Native **Places** (the aparthotel brand) is the sibling business — acquired by NUMA in 2024 — and has no buildings in the current dataset under its own name.

Propose retiring the conceptual grouping for this operator — Native Residential belongs in any future BTR-operator research batch, not in apart-hotel sweeps.

---

## Sources

- https://www.native-communities.com/
- https://www.native-communities.com/about-us/our-journey/
- https://www.native-group.com/
- https://press.numastays.com/numa-group-announces-strategic-acquisition-of-uks-lifestyle-apart-hotel-serviced-apartment-brand-native-places
- https://alma-aldgate.co.uk/
- https://www.native-communities.com/portfolio/alma/

All accessed 2026-04-16.
