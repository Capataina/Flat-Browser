# Ballymore — proposals

Research date: 2026-04-16. Corresponds to `context/data-upkeep/operators/ballymore.md`.

---

## Summary

Ballymore is a developer, not a BTR operator. It does not run an in-house lettings operation. The six dataset projects currently attributed to "Ballymore" are in reality secondary-market lettings via a mix of third-party operators (Folio London at Royal Wharf), a preferred agent (JOHNS&CO), and individual owner-landlords. The operator attribution needs to shift from "Ballymore" to a more accurate slug on most projects.

The 7th project in scope (`the-brentford-project`) is already attributed correctly as `"Ballymore / private landlords"` — no change needed to its operator field, but its qualification fields need populating.

---

## Wrong-operator re-attribution flags (Category B)

These are not ghost projects — the buildings exist and the developer (Ballymore) is correct. But the `operator` field should reflect who actually runs tenant-facing lettings.

| Project ID | Current `operator` | Proposed `operator` | Rationale |
|---|---|---|---|
| `royal-wharf-core` | "Ballymore" | **"Ballymore / Folio London / private landlords"** | Folio London runs a 265-apartment BTR pool within the masterplan; rest is private landlords via JOHNS&CO |
| `royal-wharf-gardens` | "Ballymore" | **"Ballymore / private landlords"** | Sales-led with individual-landlord lettings (JOHNS&CO primary agent) |
| `riverscape` | "Ballymore" | **"Ballymore / private landlords"** | Same — JOHNS&CO + Folio + private landlords, with Folio coverage lighter here than at Royal Wharf core |
| `london-city-island` | "Ballymore" | **"Ballymore / EcoWorld Ballymore / private landlords"** | Phase 2 is the EcoWorld Ballymore JV (not pure Ballymore); all lettings secondary-market via JOHNS&CO + Foxtons + others |
| `west-hampstead-square` | "Ballymore" | **"Ballymore / private landlords"** | Sales-led scheme; no Ballymore-run rental operation |
| `stratford-waterfront` | "Ballymore" | keep "Ballymore" but note "not yet operational" | Construction Spring 2026 → late 2029; operator for any rental component not yet determined |
| `the-brentford-project` | "Ballymore / private landlords" | keep | Already correct |

**Blast radius** — each area data file referencing these projects:

- `src/areas/data/royal-wharf-and-docks.ts` — four projects (core, gardens, riverscape + thames-road/knights-road which are unbuilt future-phase); multiple evaluation-reasoning references to "Ballymore operates" that need softening to "Ballymore-developed, lettings via Folio/JOHNS&CO/private landlords". T1.4 reasoning row says "Ballymore operates the majority of the residential stock under a single managed umbrella with corporate referencing" — **this is inaccurate**; it should read "Folio London operates a 265-unit BTR pool; the rest is individual-landlord secondary-market through JOHNS&CO and other agents". This is a factual correction that could affect T1.4 scoring and area grade.
- `src/areas/data/poplar-blackwall.ts` — `london-city-island` project + area-level prose mentioning "Ballymore" as operator. T1.4 reasoning row says "Ballymore + Telford Homes operate in the area" — same correction needed.
- `src/areas/data/west-hampstead.ts` — `west-hampstead-square` + T1.4 "Ballymore as BTR/BTS operator" row. Needs rewording.
- `src/areas/data/stratford.ts` — `stratford-waterfront` + T1.4 mentions "Ballymore, Taylor Wimpey/L&Q, and multiple managed operators". Ballymore framing is defensible as developer; just clarify.
- `src/areas/data/kew-bridge-brentford.ts` — already correctly frames Brentford Project as "owner-lease model — rental via private landlords".

**Recommendation**: user-confirm re-attribution for each. The factual corrections in T1.4 reasoning are the higher-impact change — they could warrant a minor grade re-examination (in v4 territory; v1 should just surface the issue).

---

## Operator-level defaults (secondary-market pattern)

Per `operator-research-playbook.md` § "Secondary-market categories":

| Field | Value | Applies to |
|---|---|---|
| `agreement_type` | `"ast"` | All 6 projects |
| `referencing_provider` | `"unclear"` | All |
| `min_tenancy_months` | `null` or `12` | All; 12 for AST default |
| `income_multiple` | `30` | All |
| `open_banking_accepted` | `"unclear"` | All |
| `upfront_rent_policy` | `"one-month-ast-cap"` | All |
| `accepts_professional_guarantor` | `"unclear"` | All |
| `accepts_individual_overseas_guarantor` | `"unclear"` | All |
| `credit_check` | `"standard"` | All |
| `international_tenant_policy` | `"accepted-case-by-case"` | All |
| `visa_expiry_handling` | `"unclear"` | All |
| `qualification_flexibility_signal` | `"unclear"` | All |
| `realism_pathways` | `[]` | All |
| `grad_visa_realism` | **preserve existing authored values** | If no authored value → `"unlikely"` |
| `research_status` | `"complete"` for built projects; `"partial"` or `"unresearched"` for Stratford Waterfront | — |

---

## Per-project proposals

### `royal-wharf-core` (royal-wharf-and-docks)

- **`operator`**: "Ballymore" → **"Ballymore / Folio London / private landlords"**
- Apply secondary-market block
- **`grad_visa_realism`**: preserve `"unknown"` → **propose `"unlikely"`** (secondary-market default with authored-evidence weight)
- **Narrative notes**: "Ballymore-developed riverside masterplan. Lettings split between Folio London's 265-apartment BTR pool (Folio is a hard-block operator for overseas applicants — UK homeowner guarantor only), and the much larger pool of individual owner-landlords listing via JOHNS&CO and other agents. No single Ballymore qualification policy exists. The Folio subset is unlikely for Caner; the private-landlord subset is per-listing conversation, often with upfront-rent flex available but at the landlord's discretion and post-RRA capped at 1 month for ASTs."

### `royal-wharf-gardens` (royal-wharf-and-docks)

- **`operator`**: "Ballymore" → **"Ballymore / private landlords"**
- Apply secondary-market block
- **`grad_visa_realism`**: **`"unlikely"`**
- **Narrative notes**: "Ballymore-developed phase of the Royal Wharf masterplan. Sales-led with private-landlord lettings via JOHNS&CO and other agents. No operator-level policy; qualification varies per listing."

### `riverscape` (royal-wharf-and-docks)

- **`operator`**: "Ballymore" → **"Ballymore / private landlords"**
- Apply secondary-market block; pricing per JOHNS&CO (£1,950-£3,046/mo per search results)
- **`grad_visa_realism`**: **`"unlikely"`**
- **Narrative notes**: "Premium Ballymore-developed Royal Wharf phase (Steamer, Deanston, Docker buildings). Lettings via JOHNS&CO + Folio London overlay + private landlords. No operator-level policy."

### `london-city-island` (poplar-blackwall)

- **`operator`**: "Ballymore" → **"Ballymore / EcoWorld Ballymore / private landlords"**
- Apply secondary-market block
- **`grad_visa_realism`**: preserve `"unknown"` → **propose `"unlikely"`**
- **Narrative notes**: "Ballymore-developed self-contained riverside island. Phase 1 is pure Ballymore; Phase 2 is the EcoWorld Ballymore JV (Ballymore manages on behalf of the JV). All lettings are secondary-market via JOHNS&CO, Foxtons, Regent, Allie Home, and other agents, with individual owner-landlords as legal lessors. No single operator qualification policy."

### `west-hampstead-square` (west-hampstead)

- **`operator`**: "Ballymore" → **"Ballymore / private landlords"**
- Apply secondary-market block
- **`grad_visa_realism`**: preserve **`"unlikely"`** (already authored)
- **Narrative notes**: "Ballymore-developed major delivery at West Hampstead, substantially complete. Sales-led with private-landlord lettings — no Ballymore-run BTR pool here. Qualification varies per listing; the `unlikely` verdict reflects standard individual-landlord referencing (Goodlord/Let Alliance-style, without Homeppl Open-Banking) combined with Caner's thin UK file."

### `stratford-waterfront` (stratford)

- **`operator`**: keep "Ballymore" but update narrative
- **Do NOT mark `research_status: "complete"`** — the building doesn't exist yet (construction starts Spring 2026, completion late 2029)
- All qualification fields: **`"unknown"`** (genuinely unknown — no operator announced, no rental policy yet)
- **`grad_visa_realism`**: `"unknown"` — preserve or set
- **`research_status`**: **`"unresearched"`** or **`"partial"`**
- **Narrative notes**: "Ballymore + LLDC partnership delivering 600 new homes (35% affordable) across four residential buildings. Construction starts Spring 2026, completion late 2029 — entirely outside Caner's visa window. Operator identity for any rental component not yet announced; qualification policies cannot be researched until delivery approaches. Ballymore historically does not run its own BTR; a third-party operator partnership (Folio-style) or private-sale-with-individual-letting is the most likely pattern."

### `the-brentford-project` (kew-bridge-brentford)

- **`operator`**: keep "Ballymore / private landlords" (already correct)
- Apply secondary-market block
- **`grad_visa_realism`**: preserve **`"unlikely"`** (already authored)
- **Narrative notes** — update if needed: "876-unit Ballymore masterplan across c.11 buildings, phased to 2028+. Owner-lease model — Ballymore develops and sells to individual owners; rentals are secondary-market via private landlords and lettings agents. No operator-level BTR channel. Per-listing qualification; 1-bed rents estimated £1,800-2,000/mo (lower than Royal Wharf core given West London pricing)."

---

## Sources

All sources from `operators/ballymore.md`. Primary: `ballymoregroup.com`, `ballymoream.com`, `johnsand.co`, `foliolondon.co.uk/developments/royal-wharf`, `housingtoday.co.uk`. Accessed 2026-04-16.

---

## Apply checklist

- [ ] User-confirm: re-attribute operator on 5 projects (royal-wharf-core, royal-wharf-gardens, riverscape, london-city-island, west-hampstead-square)
- [ ] User-confirm: update T1.4 reasoning rows in royal-wharf-and-docks.ts, poplar-blackwall.ts, west-hampstead.ts to reflect "Ballymore develops, Folio/JOHNS&CO/private landlords operate lettings" — rather than "Ballymore operates"
- [ ] Apply secondary-market qualification defaults to the 6 built projects (keeping Stratford Waterfront at `"unresearched"` / `"partial"`)
- [ ] Update `grad_visa_realism` to `"unlikely"` on projects with current `"unknown"` (preserve authored values)
- [ ] Update prices on Riverscape per JOHNS&CO current listings (1-bed £1,950, 2-bed £3,046 sample)
- [ ] Set `research_status: "complete"` on 6 of 7 projects; leave Stratford Waterfront at `"unresearched"` or `"partial"`
- [ ] Tombstone comment in each affected area file explaining that Ballymore is a developer not an operator, with date of correction
- [ ] Note in the proposal report: the existing dataset-wide use of "Ballymore" as operator is a systematic authoring error across multiple areas, and the correction affects area-level T1.4 reasoning beyond just the project blocks
