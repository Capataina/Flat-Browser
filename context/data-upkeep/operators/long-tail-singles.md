# Long-Tail Single-Project Operators — combined operator findings

**Research date:** 2026-04-16
**Researcher:** data-upkeep agent (long-tail batch)

Covers operators with exactly one project in the dataset where minimal public documentation is available. Each entry is brief — operator-type-based defaults per the playbook:

- Housing association / charitable → `blocked` (same reason as councils)
- Developer with no live BTR product → `unlikely` (secondary-market rental by individual owners)
- Clearly BTR but thin public documentation → `unclear`
- Mixed-use / non-residential operator → case-by-case

---

## Downing (1 project)

**Project:** `downing-north-acton`
**Area:** North Acton
**What it is:** 59 BTR apartments planned within a 17-storey tower on the former Holiday Inn Express site. Mixed student/BTR scheme with 35% affordable. Planning approved, **not yet lettable**. Current dataset `realism: "blocked"` (interpreted as "pipeline — not yet lettable for 2026 move").

**Operator context:** Downing is a UK developer / operator historically focused on student accommodation and more recently BTR. No published qualification FAQ under the Downing brand for this specific scheme; rental product not yet live.

**Structural defaults (when lettable):**

| Field | Value | Reason |
|---|---|---|
| `agreement_type` | `ast` (likely) | BTR product |
| `referencing_provider` | `unclear` | Not published |
| All other qualification fields | `unclear` | Not yet available |
| `min_tenancy_months` | `12` | BTR default |

**Realism:** preserve `blocked` — rationale should clarify "pipeline / not yet lettable for 2026 move-in." Suggested narrative: "Planning approved, not yet built. Not a 2026 rental target. Re-research when construction completes and rental site launches."

---

## Here East (1 project)

**Project:** `here-east`
**Area:** Stratford
**What it is:** Converted Olympic press and broadcast centre at Queen Elizabeth Olympic Park. Primarily a **tech / creative workspace campus**, not residential. Operated by Here East as a commercial landlord; residential is not the primary product.

**Operator context:** Here East operates a workspace campus anchoring the commercial side of the Olympic Park. The campus includes some residential/mixed-use in the surrounding blocks but Here East itself is not a residential BTR operator.

**Structural defaults:**

| Field | Value | Reason |
|---|---|---|
| `agreement_type` | n/a — not a residential operator | Workspace-only |
| All qualification fields | n/a | Workspace-only |

**Realism:** Suggested `blocked` with note "Commercial workspace campus — not a residential rental product." Current `unknown` is over-charitable; dataset should make this explicit. Alternatively `unlikely` if any ancillary residential is available.

---

## Broadwick / KERB (1 project)

**Project:** `corner-corner` (Canada Water)
**Area:** Canada Water
**What it is:** Leisure and dining venue (Corner Corner) already open as the first activated public space in the British Land / AustralianSuper Canada Water masterplan. **Primarily a food / leisure venue, not residential.**

**Operator context:** Broadwick Soho (events/hospitality) and KERB (street-food curator) are consumer-facing hospitality operators, not residential landlords. The entry exists because it's part of the area masterplan narrative.

**Structural defaults:** n/a — not residential.

**Realism:** Suggested `blocked` with note "Leisure/dining venue, not a residential rental product." Current `unknown` is misleading.

---

## BTR Operating Ltd (1 project)

**Project:** `stratford-studios`
**Area:** Stratford
**What it is:** 158 furnished studio apartments in E15. Under new management (BTR Operating Ltd) from September 2025. Previous HomeViews 2.9/5. Studio-only.

**Operator context:** BTR Operating Ltd is a generic-named UK BTR management entity. Public FAQ / referencing policy not discoverable via standard searches. Under-new-management positioning suggests the operator is still defining product.

**Structural defaults:**

| Field | Value | Reason |
|---|---|---|
| `agreement_type` | `ast` or `licence` | Furnished-studio format could be either |
| `referencing_provider` | `unclear` | Not published |
| All other qualification fields | `unclear` | Not documented |
| `min_tenancy_months` | `6` (likely) | Furnished-studio norm |

**Realism:** Suggested `unclear` with note "Under new management since Sept 2025. Qualification policies not yet documented publicly; direct enquiry needed before applying."

---

## Be Living (1 project)

**Project:** `the-maple` (Brent Cross Town)
**Area:** Brent Cross Town
**What it is:** 540-home BTR scheme at Brent Cross Town. Conran & Partners interiors, Allies & Morrison architecture, 25m pool. Related Argent is the developer; **Be Living** (Be Group) operates the rentals. Live product — studios from £1,950, 1-beds from £2,250.

**Operator context:** Be Living (also known as "Be" or Be Group) is a BTR operator. Public qualification FAQ is not prominent on the property's marketing site (`themaplenw2.com` returned 403 to automated fetch). Be Living is known in the UK BTR market but not a Homeppl-documented client in Flatbrowser's existing notes.

**Structural defaults:**

| Field | Value | Reason |
|---|---|---|
| `agreement_type` | `ast` | BTR institutional product |
| `referencing_provider` | `unclear` | Not named publicly; could be Homeppl, Goodlord, or in-house |
| `income_multiple` | `unclear` | Not published |
| `open_banking_accepted` | `unclear` | Not addressed |
| `upfront_rent_policy` | `one-month-ast-cap` | AST + RRA inference |
| `accepts_professional_guarantor` | `unclear` | Not addressed |
| `accepts_individual_overseas_guarantor` | `unclear` | Not addressed |
| `credit_check` | `unclear` | Not stated |
| `international_tenant_policy` | `unclear` | Not addressed |
| `visa_expiry_handling` | `unclear` | Not addressed |
| `qualification_flexibility_signal` | `standard` | No flex/rigid signal yet |
| `min_tenancy_months` | `12` | Institutional BTR default |

**Realism:** >3 `"unclear"` → `realism_pathways: []`, `grad_visa_realism: "unclear"`. Current `achievable` on `the-maple` looks over-confident without verified referencing/guarantor policy.

**Flag for user review:** `the-maple` currently carries `realism: "achievable"` — this appears optimistic given the complete absence of published qualification policies. Suggest downgrade to `"unclear"` pending direct enquiry.

---

## Related (1 project — sale-only)

**Project:** `the-delamarre` (Brent Cross Town)
**What it is:** Private-sale (owner-lease) phase of Brent Cross Town. Not a rental product.
**Realism:** preserve `blocked` (not rental).

## Related Argent (other direct attributions)

Covered in `related-argent.md` / `proposals/related-argent.md`.

---

## Greenland (1 project)

**Project:** `ram-quarter` (Wandsworth Town)
**What it is:** Former Young's Brewery site regeneration (Greenland Group). Mixed-use, completed. Dataset notes: "Greenland's own letting team operates the rental arm. Standard agency referencing."

**Operator context:** Greenland Group (Chinese state-linked developer) has a small UK residential rental footprint. Ram Quarter mixes owner-occupied and rental. "Standard agency referencing" per current dataset narrative — no published Homeppl integration or distinct guarantor policy.

**Structural defaults:**

| Field | Value | Reason |
|---|---|---|
| `agreement_type` | `ast` | Developer-operated rental |
| `referencing_provider` | `unclear` | "Standard agency referencing" — likely Goodlord or individual-agent stack |
| `income_multiple` | `30` (likely) | Standard agency norm |
| `open_banking_accepted` | `unclear` | Agency-dependent |
| `upfront_rent_policy` | `one-month-ast-cap` | AST + RRA |
| `accepts_professional_guarantor` | `unclear` | Agency-dependent |
| `international_tenant_policy` | `accepted-case-by-case` | Default for developer-owned rental |
| Others | `unclear` | |

**Realism:** `unlikely` — secondary-market / developer-own rental without published BTR qualification pathway. Current `unknown` can be tightened to `unlikely`.

---

## Muse / Barratt (1 project — Lewisham Gateway core)

**Project:** `lewisham-gateway-core`
**What it is:** Mixed ownership-led Gateway regeneration with some rental. Muse Developments + Barratt joint delivery. Dataset already marks `realism: "unlikely"` — preserve.

**Structural defaults:** Individual-landlord / agent-managed rental with no single operator stack → `unlikely` preserved per secondary-market playbook (operator-research-playbook § "Secondary-market categories").

---

## Barratt (1 project — Aldgate Place)

**Project:** `aldgate-place`
**What it is:** Barratt / Londonewcastle mixed-tenure development. Existing dataset `realism: "unlikely"` preserved.

**Structural defaults:** Developer-completed and now agent-managed; no BTR qualification stack. `unlikely` preserved.

---

## Galliard / Galliard Homes (2 projects)

**Projects:**
1. `whitechapel-galliard` (Whitechapel) — `operator: "Galliard Homes"`, `realism: "unlikely"`
2. `morden-wharf` (Greenwich Peninsula) — `operator: "Galliard"`, `realism: "unknown"`, Jo Cowen Architects redesign, 1,500 homes, unbuilt

**Operator context:** Galliard Homes is a London developer (owner-occupied + rental sales mix). No dedicated BTR operation with published Homeppl referencing. Rentals flow via individual agent listings rather than a professional operator.

**Structural defaults:**

| Field | Value |
|---|---|
| `agreement_type` | `ast` |
| `referencing_provider` | `unclear` (agency-dependent) |
| Others | `unclear` |

**Realism:**
- `whitechapel-galliard`: preserve `unlikely` (already correct for secondary-market).
- `morden-wharf`: preserve `unknown` for now — unbuilt, future-phase; future BTR operator TBC. Could downgrade to `unclear` but `unknown` reflects the "not yet determinable" state for an unbuilt masterplan.

---

## Summary realism matrix for long-tail singles

| Project | Area | Current | Suggested | Category |
|---|---|---|---|---|
| `downing-north-acton` | North Acton | `blocked` | preserve `blocked` | Pipeline — unbuilt |
| `here-east` | Stratford | `unknown` | `blocked` | Not residential — workspace |
| `corner-corner` | Canada Water | `unknown` | `blocked` | Not residential — leisure/dining |
| `stratford-studios` | Stratford | `unknown` | `unclear` | BTR with thin docs |
| `the-maple` | Brent Cross Town | `achievable` | **`unclear` (flag)** | Optimistic verdict without verified policies |
| `ram-quarter` | Wandsworth Town | `unknown` | `unlikely` | Secondary-market developer rental |
| `lewisham-gateway-core` | Lewisham | `unlikely` | preserve `unlikely` | Secondary-market |
| `aldgate-place` | Aldgate East | `unlikely` | preserve `unlikely` | Secondary-market |
| `whitechapel-galliard` | Whitechapel | `unlikely` | preserve `unlikely` | Secondary-market developer |
| `morden-wharf` | Greenwich Peninsula | `unknown` | preserve `unknown` | Unbuilt — future phase |

---

## Ghost-project flags

None.

**Scope flags (not ghost):**
- `here-east` and `corner-corner` are not residential products. Dataset would be clearer marking these as non-residential anchors rather than carrying `realism: "unknown"` as if they might be rentable.
- `the-maple`'s optimistic `achievable` realism is a **flag for user confirmation** — suggest downgrade to `unclear` pending verified Be Living qualification policies.

---

## Sources

- https://www.themaplenw2.com/ (attempted 2026-04-16 — returned 403 to automated fetch; operator)
- https://relatedargent.co.uk/2025/07/21/first-phase-of-over-500-home-btr-scheme-launches-at-brent-cross-town-as-rental-demand-grows (accessed 2026-04-16, developer press — confirms Be Living operator attribution)
- https://www.ramquarter.com/ (dataset `external_links`)
- https://www.galliardhomes.com/guides/whitechapel/living-in-whitechapel-london-e1 (accessed 2026-04-16 per dataset)
- https://enclave.com/locations/acton (Enclave — adjacent to Downing North Acton context)
