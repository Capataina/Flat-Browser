# Proposals — British Land

## Operator-level facts

British Land is **a masterplan developer and commercial landlord, not a residential rental operator.** No operator-wide qualification defaults apply to rental tenants. Per-project recommendations below.

## Per-project proposals

### `the-founding` (area `canada-water`)

| Field | Value | Source / Reason |
|---|---|---|
| `agreement_type` | `unknown` | Sale-only — AST / licence not applicable |
| `referencing_provider` | `unknown` | Not applicable |
| All other qualification fields | `unknown` | Not applicable |
| `grad_visa_realism` | `"blocked"` (preserve) | Authored correctly; sale-only with £564k floor |
| `research_status` | `"complete"` | Status unambiguous — nothing to research |

**Proposed `notes`:** "For-sale only — 186 apartments priced £564,000 (studio) to £1,484,000 (3-bed). No rental product. Handled by Savills and JLL for sales enquiries. `realism: 'blocked'` is authored correctly for renters."

### `dock-shed` (area `canada-water`)

**Flag: misclassification.** Not residential — 180,000 sq ft workspace + public leisure centre in basement.

| Field | Value |
|---|---|
| All qualification fields | `unknown` |
| `grad_visa_realism` | `"blocked"` (not applicable — no residential rental) |
| `research_status` | `"complete"` |

**Recommended `building_type` change:** From `"Mixed"` to a commercial/workspace type. If the schema doesn't have a workspace enum value, retain `"Mixed"` and strip `tenure: ["rent", "buy"]` to reflect no residential tenure. **Ask user** whether to keep the entry (valuable for area-level T2.x discussion — strong workplace amenity) or remove it (clean residential-only dataset).

**Proposed `notes`:** "Workspace + leisure centre — not residential. 180,000 sq ft over 5 office floors with ground-floor F&B; 25m pool, gym, studios in basement (Southwark Council). Retained in dataset as area amenity context. No residential rental product."

### `canada-water-wider` (area `canada-water`)

| Field | Value |
|---|---|
| All qualification fields | `unknown` |
| `grad_visa_realism` | `unknown` (preserve) |
| `research_status` | `"partial"` |

**Proposed `notes`:** "Canada Water Masterplan wider phases — up to 4,184 homes across 53 acres. Roger Madelin-led (ex-King's Cross). Residential operator for future phases TBD. No lettings live as of 2026-04-16. Planning was called in by Sadiq Khan in December 2025, adding delivery uncertainty."

### `7-roberts-close` (area `canada-water`)

| Field | Value |
|---|---|
| All qualification fields | `unknown` |
| `grad_visa_realism` | `"unlikely"` | Affordable housing — typically requires local connection / low income |
| `research_status` | `"partial"` |

**Proposed `notes`:** "Affordable rental component of the Canada Water masterplan. Operator likely a housing association (not publicly disclosed). Affordable housing eligibility rules do not align with Caner's graduate-visa professional profile — `realism: 'unlikely'` on eligibility grounds rather than qualification process."

### `canada-water-leisure` (area `canada-water`)

Not residential. No change — already `operator: "Southwark Council"`. Recommend adding `notes`: "Civic leisure centre, not residential. Retained in dataset for area amenity context."

### `corner-corner` (area `canada-water`)

Not residential. Operated by Broadwick + KERB as leisure venue. Existing `tenure: ["rent"]` may be misleading — this is an F&B / leisure venue not a residential rental. Recommend `notes`: "Leisure venue operated by Broadwick + KERB — not residential. Retained for area context."

### `alma` (area `whitechapel`)

Operator is `Native Residential`, not British Land. British Land is the developer. **This project is NOT a British Land operator research target** — it belongs in a Native Residential batch. No change in this pass.

### `aldgate-place` (area `whitechapel`)

Operator is `Various agents`, already secondary-market. British Land is co-developer. **Not a British Land operator research target** — belongs in a secondary-market sweep. No change.

## Realism pathway suggestions

No pathway derivation applies to any of these — all either sale-only (The Founding), non-residential (Dock Shed, Corner Corner, Leisure Centre), future (wider masterplan), affordable (7 Roberts Close), or operated by someone else (Alma, Aldgate Place).

## Pricing (side-effect)

| Project | studio | one_bed | two_bed | notes |
|---|---|---|---|---|
| `the-founding` | — | — | — | **Sale prices** (not rental): Studio from £564k, up to £1,484k 3-bed. Not to be stored in `rental.prices`. Consider `price_transparency: "enquire"` or add a sale-side notes field if schema supports |
| All other Canada Water projects | — | — | — | No rental pricing applicable |

## Ghost-project flags

**Category B — wrong-operator / category B-adjacent:**
- None requiring reattribution. British Land is correctly identified as developer/masterplan-owner; the dataset's `operator: "British Land"` on The Founding, Dock Shed, and canada-water-wider is defensible as ownership identification even though it implies rental operation that doesn't exist.

**Category D — misclassification:**
- `dock-shed` — flagged above; not residential.

**Broader area check:**
- The dataset's Canada Water projects correctly show that there is **no active BTR operation today** at Canada Water. Area T1.4 reasoning ("institutional professional landlord pedigree at the top of the scale") should be softened — the pedigree is for masterplan management, not active BTR. Flag for v3 grade-review; no v1 change.

## Notes (for each project)

See per-project sections above for individual `notes` proposals.

## Sources

See `operators/british-land.md` § "Sources" for full URL list.
