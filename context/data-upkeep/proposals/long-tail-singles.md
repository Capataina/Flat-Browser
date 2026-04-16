# Proposals — Long-Tail Single-Project Operators

Covers: Downing, Here East, Broadwick/KERB, BTR Operating Ltd, Be Living, Greenland, Muse/Barratt, Barratt, Galliard/Galliard Homes.

Default approach per operator-research-playbook: operators with one project and thin public documentation get defaults based on operator type rather than deep research.

---

## Summary realism matrix

| Project | Area | Operator | Current | Suggested | Flag? |
|---|---|---|---|---|---|
| `downing-north-acton` | North Acton | Downing | `blocked` | preserve `blocked` | — |
| `here-east` | Stratford | Here East | `unknown` | `blocked` | Scope: not residential |
| `corner-corner` | Canada Water | Broadwick / KERB | `unknown` | `blocked` | Scope: not residential |
| `stratford-studios` | Stratford | BTR Operating Ltd | `unknown` | `unclear` | — |
| `the-maple` | Brent Cross Town | Be Living | `achievable` | `unclear` | **YES — flag for user** |
| `ram-quarter` | Wandsworth Town | Greenland | `unknown` | `unlikely` | — |
| `lewisham-gateway-core` | Lewisham Gateway | Muse / Barratt | `unlikely` | preserve `unlikely` | — |
| `aldgate-place` | Aldgate East | Barratt | `unlikely` | preserve `unlikely` | — |
| `whitechapel-galliard` | Whitechapel | Galliard Homes | `unlikely` | preserve `unlikely` | — |
| `morden-wharf` | Greenwich Peninsula | Galliard | `unknown` | preserve `unknown` | Unbuilt — future phase |

---

## Per-project detail

### `downing-north-acton` (Downing, North Acton)

- Current: `realism: "blocked"`, `build_phase: "future"`. Planning approved but not yet built.
- Suggested: preserve `blocked`. Note update: "Planning approved, not yet lettable. Re-research when construction completes."
- Structural fields: all `unclear` (not yet a live product).

### `here-east` (Here East, Stratford)

- Current: `realism: "unknown"`, building_type "Mixed".
- Suggested: `realism: "blocked"` with note "Commercial workspace campus — not a residential rental product."
- Structural fields: n/a — not residential.

### `corner-corner` (Broadwick / KERB, Canada Water)

- Current: `realism: "unknown"`.
- Suggested: `realism: "blocked"` with note "Leisure / dining venue, not a residential rental product."
- Structural fields: n/a.

### `stratford-studios` (BTR Operating Ltd, Stratford)

- Current: `realism: "unknown"`.
- Suggested: `realism: "unclear"`.
- Structural fields:
  - `agreement_type: "unclear"` (furnished studio format — could be AST or licence)
  - All other qualification fields: `unclear`
  - `min_tenancy_months: 6` (likely)
- Note: "Under new management since Sept 2025. Qualification policies not documented publicly; direct enquiry required."

### `the-maple` (Be Living, Brent Cross Town) — FLAG

- Current: `realism: "achievable"`.
- Suggested: `realism: "unclear"`. **Flag to user for confirmation before applying.**
- Reasoning: Be Living runs no public qualification FAQ; referencing provider, income multiple, guarantor acceptance, Open Banking, international-tenant policy all `unclear`. The `"achievable"` verdict looks optimistic without any verified structural fields.
- Structural fields: `agreement_type: "ast"`, all others `unclear`. `min_tenancy_months: 12`.
- Pricing preserved from existing dataset (studios from £1,950, 1-beds from £2,250, 3-beds from £3,795-£3,975).
- Note: "Be Living operates The Maple but qualification policies (referencing provider, guarantor acceptance, income multiple, international-tenant stance) are not publicly documented. Direct enquiry to the lettings team is the prerequisite to an informed application."

### `ram-quarter` (Greenland, Wandsworth Town)

- Current: `realism: "unknown"`.
- Suggested: `realism: "unlikely"` (secondary-market developer-run rental per playbook).
- Structural fields:
  - `agreement_type: "ast"`
  - `referencing_provider: "unclear"` (agency-dependent)
  - Others: `unclear`
  - `min_tenancy_months: 12`
- Note: "Greenland Group masterplan with in-house letting team using standard agency referencing. No documented BTR qualification pathway; pricing and policies vary per listing."

### `lewisham-gateway-core` (Muse / Barratt, Lewisham Gateway)

- Current: `realism: "unlikely"` — preserve.
- Structural fields: secondary-market defaults per playbook.

### `aldgate-place` (Barratt, Aldgate East)

- Current: `realism: "unlikely"` — preserve.
- Structural fields: secondary-market defaults per playbook.

### `whitechapel-galliard` (Galliard Homes, Whitechapel)

- Current: `realism: "unlikely"` — preserve.
- Structural fields: secondary-market developer-rental defaults.

### `morden-wharf` (Galliard, Greenwich Peninsula)

- Current: `realism: "unknown"`, `build_phase: "future"`. Jo Cowen Architects redesign, 1,500 homes, unbuilt.
- Suggested: preserve `unknown` — unbuilt pipeline, future-phase operator TBC.
- Structural fields: n/a — not yet lettable.

---

## Ghost-project flags

None.

## Flags for user review

1. **`the-maple` realism downgrade** — current `achievable` looks optimistic. Suggest `unclear` pending verified Be Living policies. Surface for user confirmation.
2. **`here-east` and `corner-corner` scope** — marked as "Mixed" building type but not actually residential rental products. Consider making non-residential status explicit.

## Pricing (side-effect)

No price updates proposed (thin or no new data). Preserve existing pricing where present.

## Sources

- https://relatedargent.co.uk/2025/07/21/first-phase-of-over-500-home-btr-scheme-launches-at-brent-cross-town-as-rental-demand-grows (accessed 2026-04-16, developer — Be Living as Maple operator)
- https://www.themaplenw2.com/ (attempted 2026-04-16, 403; operator)
- https://www.ramquarter.com/ (per dataset external_links; developer)
- https://www.galliardhomes.com/guides/whitechapel/living-in-whitechapel-london-e1 (per dataset)
- Existing dataset `external_links` across the affected area files
