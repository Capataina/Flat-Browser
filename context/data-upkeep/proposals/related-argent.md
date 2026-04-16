# Proposals — Related Argent

## Operator-level facts (apply to Related-Argent-directly-operated BTR)

Covers: Heart of Hale (1 Ferry Island, 2 Ferry Island), The Delamarre / The Ashbee (sale), Conductor House (affordable), Brent Cross Town wider.

Note: **The Maple** at Brent Cross Town is operated by **Be Living**, not Related Argent directly. See `be-living.md` proposals (or treat under long-tail-singles fallback).

| Field | Value | Source |
|---|---|---|
| `agreement_type` | `ast` | BTR default, long-term residential intent. |
| `referencing_provider` | `unclear` | Not named on any public Related Argent / Heart of Hale / Ferry Island surface. |
| `income_multiple` | `unclear` | Not published. |
| `open_banking_accepted` | `unclear` | Not addressed. |
| `upfront_rent_policy` | `one-month-ast-cap` | Inferred from `agreement_type: "ast"` + RRA 2025. |
| `accepts_professional_guarantor` | `unclear` | Not addressed. |
| `accepts_individual_overseas_guarantor` | `unclear` | Not addressed. |
| `credit_check` | `unclear` | Not stated. |
| `international_tenant_policy` | `unclear` | Not explicitly addressed. |
| `visa_expiry_handling` | `unclear` | Not addressed. |
| `qualification_flexibility_signal` | `standard` | No flex/rigid evidence. |
| `min_tenancy_months` | `12` | Institutional BTR default. |

## Realism pathway suggestions

Nine `"unclear"` fields triggers the schema rule:
> if (sum of fields that are "unclear" or "unknown" > 3) { realism_pathways: []; grad_visa_realism: "unclear" }

**Suggested `realism_pathways`:** `[]`
**Suggested `grad_visa_realism`:** `unclear`

## Per-project variations

| Project | Current realism | Suggested realism | Reason |
|---|---|---|---|
| `1-ferry-island` | `unknown` | `unclear` | Too many unclears. Direct enquiry required. |
| `2-ferry-island` | `unknown` | `unclear` | Same + in-delivery status, not lettable 2026. |
| `the-delamarre` | `blocked` | preserve `blocked` | Sale-only, not rental-relevant. |
| `the-ashbee` | `blocked` | preserve `blocked` | Sale-only. |
| `conductor-house` | `achievable` | `unlikely` **(flag for user)** | Affordable / LLR product has income caps + local-connection rules that almost certainly exclude Caner. Current `achievable` looks over-optimistic. |
| `brent-cross-town-wider` | `unknown` | `unclear` | Masterplan umbrella, not a specific lettable product. |

## Pricing (side-effect)

No price updates — `ferryislandn17.co.uk` blocked on scrape; other projects are sale or affordable. Leave existing price state unchanged.

## Ghost-project flags

None — all projects exist and are correctly attributed.

**Build-phase note for `2-ferry-island`:** construction started Oct 2023, not yet lettable 2026. Keep as pipeline entry with `build_phase: "in_delivery"` which is already correct.

## Notes (narrative for project `notes` field)

> Related Argent operates Heart of Hale BTR directly through their in-house BTR operations team (ex-Related Rentals NYC leadership). Public qualification policies are not disclosed on the rental-facing sites — referencing provider, income multiple, guarantor acceptance, and international-tenant policy are all unverified. Direct enquiry to the Ferry Island / Heart of Hale lettings team is the prerequisite to a confident application.

## Sources

- https://relatedargent.co.uk/news/heart-of-hale (accessed 2026-04-16, developer)
- https://relatedargent.co.uk/2025/07/21/first-phase-of-over-500-home-btr-scheme-launches-at-brent-cross-town-as-rental-demand-grows (developer press, accessed 2026-04-16)
- https://www.related.com/our-company/properties/heart-hale (accessed 2026-04-16, developer)
- https://heartofhale.co.uk/1-ferry-island (redirect to https://www.ferryislandn17.co.uk/) (operator — blocked on automated scrape)
- https://www.icgam.com/2023/10/02/related-argent-expands-build-to-rent-portfolio-starting-construction-on-484-homes-at-tottenham-hale-with-243-million-loan-from-icg-real-estate/ (press)
