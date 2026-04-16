# Native Residential / Native Communities — research notes

**Date of research:** 2026-04-16
**Agent batch:** apart-hotels, serviced apartments, managed studios
**Research scope:** Operator-level qualification policy for Native's BTR portfolio.

---

## Operator identity and status

**Native Residential** and **Native Communities** are the **same company** — Native Communities is a rebrand/subsidiary of Native (founded by Guy Nixon). Per native-communities.com:

- **Native Residential** — the BTR operator arm of Native Holdings; manages £5bn+ of mixed-use and living assets for institutional clients. This is the current operating brand.
- **Native Communities** — the 2020 BTR-sector subsidiary launched to operate purpose-built BTR communities; effectively a product line within Native Residential.
- **Native Places** — the aparthotel/serviced-apartment arm. **SEPARATE** business, acquired by NUMA Group in 2024.

**Important distinction for this batch:** The dataset's "Alma" projects in Aldgate East and Whitechapel are attributed to Native Communities/Native Residential — these are **BTR buildings, not apart-hotels**. They belong in a BTR operator batch, not an apart-hotel batch. The batch prompt grouped them under "serviced apartments" incorrectly.

**Native Places (the aparthotel brand)** has no buildings in the current dataset (based on my searches), so the batch's reference to "Native Communities / Native Residential — serviced apartments" is structurally a category error.

## Current dataset projects

| Project ID | Area | Operator attribution | Reality |
|---|---|---|---|
| `alma-aldgate` | aldgate-east | "Native Communities" | BTR tower, 159 units, Barratt dev, completed 2024 — **BTR not apart-hotel** |
| `alma-whitechapel` | whitechapel | "Native Residential" | **Same building** as alma-aldgate? Or second Alma? British Land developer, 159 units — **possible duplicate** |

**Critical ghost-project check needed.** Both "Alma" entries describe:
- 159-unit BTR tower
- Studio from £2,950/mo
- Managed by Native

**Likely finding:** These are the **same building** — `alma-aldgate.co.uk` is the canonical URL, and the two area attributions (Aldgate East vs Whitechapel) reflect boundary ambiguity of the Aldgate/Whitechapel area line. The tower is at the corner of Whitechapel High Street and Commercial Road — technically Aldgate Place Phase 2 but geographically closer to Whitechapel station than Aldgate East station.

**This is a category-B ghost-project flag (wrong operator OR duplicate) that needs user resolution.**

## Structural qualification policy (Native Residential BTR arm)

The Alma building is premium BTR — studios £2,950, 1-bed £3,325, 2-bed £4,172, 3-bed £5,488. This pricing implies:

| Field | Value | Evidence |
|---|---|---|
| `agreement_type` | `"ast"` | Standard BTR |
| `referencing_provider` | `"unclear"` | Native does not publicly name its referencing provider. Native Residential runs institutional BTR — likely Goodlord or Homeppl |
| `min_tenancy_months` | `12` | Standard BTR |
| `income_multiple` | `30` (inferred — not published) | £2,950/mo × 30 = £88,500/yr implied annual income for a studio |
| `open_banking_accepted` | `"unclear"` | Not addressed |
| `upfront_rent_policy` | `"one-month-ast-cap"` | AST + RRA |
| `accepts_professional_guarantor` | `"unclear"` | Not addressed |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Not addressed |
| `credit_check` | `"standard"` | Standard BTR screening |
| `international_tenant_policy` | `"unclear"` | Not published |
| `visa_expiry_handling` | `"unclear"` | Not published |
| `qualification_flexibility_signal` | `"standard"` | No flex signal either way |

## Realism derivation

No pathway clears:
- Premium pricing (£2,950+ studio) implies £88,500/yr income requirement
- No published fallback for Open Banking, professional guarantor, or overseas co-signer
- Current dataset has both projects set to `realism: "blocked"` which is consistent

**Preserve `realism: "blocked"`** as authored state. The premium pricing alone is effectively the block — Caner cannot meet the implied income requirement without a clear alternative pathway, and no such pathway is published.

---

## Sources

- https://www.native-communities.com/ — operator home
- https://www.native-communities.com/about-us/our-journey/ — company history
- https://www.native-group.com/ — parent company
- https://press.numastays.com/numa-group-announces-strategic-acquisition-of-uks-lifestyle-apart-hotel-serviced-apartment-brand-native-places — Native Places acquisition by NUMA (confirms Native Places is a separate business)
- https://alma-aldgate.co.uk/ — project-specific
- https://www.native-communities.com/portfolio/alma/ — portfolio page

All accessed 2026-04-16.
