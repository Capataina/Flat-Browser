# Proposals — BPS Lettings

## Classification finding

BPS Lettings / Battersea Power Station Estates is a **letting-and-sales agency**, not a BTR operator. The 8 projects attributed to BPS Lettings in the dataset are secondary-market (individual-landlord) rentals at Battersea Power Station. BPSE manages these on behalf of individual investor-landlords alongside several competing agents (Foxtons, Hamptons, Knight Frank, Chestertons, Prime London, Savills). Apply **secondary-market defaults**.

## Operator-level facts (apply to all 8 BPS projects)

| Field | Value | Source / Reasoning |
|---|---|---|
| `agreement_type` | `ast` | Individual-landlord default in the UK. BPSE confirms ARLA membership and standard tenancy paperwork. |
| `referencing_provider` | `unclear` | Varies by landlord mandate; BPSE does not publish a unified referencing stack. Likely Goodlord or Let Alliance in most cases but not verified per-listing. |
| `open_banking_accepted` | `unclear` | Goodlord supports Open Banking but acceptance depends on the individual landlord's criteria. |
| `min_tenancy_months` | `12` | UK individual-landlord AST default. |
| `income_multiple` | `30` | Standard individual-landlord default. |
| `upfront_rent_policy` | `one-month-ast-cap` | AST + post-RRA May 2026 hard cap. |
| `accepts_professional_guarantor` | `unclear` | Varies per landlord; not a published operator-wide policy. |
| `accepts_individual_overseas_guarantor` | `unclear` | Overseas-investor landlords (of which BPS has many — Malaysian sovereign and private-investor base) are often more flexible on this than UK-investor landlords; but no operator-wide policy exists to cite. |
| `credit_check` | `standard` | Typical UK individual-landlord credit-reference check. |
| `international_tenant_policy` | `accepted-case-by-case` | Varies by landlord; BPS Power Station has substantial overseas-investor landlord base which tends toward internationally-friendly, but per-listing. |
| `visa_expiry_handling` | `unclear` | Per-landlord; typically tenancy length aligned to visa by choice of landlord. |
| `qualification_flexibility_signal` | `unclear` | Cannot be characterised operator-wide — it's per-landlord. |

## Realism pathway suggestions

Per `realism-pathway-derivation.md` — no pathway can be confidently added for secondary-market projects:

| Pathway | Add? | Reasoning |
|---|---|---|
| `standard-passable` | ❌ | Too many fields `"unclear"`; standard route requires active confirmation of all four structural fields. |
| `with-professional-guarantor` | ❌ | `accepts_professional_guarantor: "unclear"`. |
| `with-savings` | ❌ | Homeppl is not the referencing stack (individual landlords use Goodlord/Let Alliance/Homelet). |
| `with-co-signer-overseas` | ❌ | Not published; per-landlord. |
| `with-upfront-licence` | ❌ | AST, not licence. Post-RRA the upfront lever is dead anyway. |
| `licence-exempt-light-ref` | ❌ | AST, not licence. |

Pathway array: `[]`. Preserved existing realism states as noted below — most are already `unlikely` or `blocked`, which aligns with the secondary-market default.

## Per-project proposals

| Project | Proposed `grad_visa_realism` | `research_status` | Notes |
|---|---|---|---|
| Circus West Village | `unlikely` (new from `unknown`) | `partial` | Completed Phase 1, largest secondary-market pool. |
| Battersea Roof Gardens (Phase 3) | `unlikely` (preserved) | `partial` | Preserved. |
| Prospect Place | `unlikely` (preserved) | `partial` | Preserved. |
| Koa at Electric Boulevard | `unlikely` (new from `unknown`) | `partial` | New Phase 3 block; secondary market. |
| Parkside Collection | `blocked` (preserved) | `partial` | Preserved — cost block. Note should flag cost as blocker. |
| Switch House East | `blocked` (preserved) | `partial` | Preserved — cost block (heritage flats, top-of-market). |
| Switch House West | `blocked` (preserved) | `partial` | Preserved — cost block. |
| Sky Villas at Battersea Power Station | `blocked` (preserved) | `partial` | Preserved — cost block. |

## Pricing

No operator-wide price research attempted — per-listing on Rightmove / Zoopla / OnTheMarket, varies substantially. Do not update pricing fields in this pass.

## Ghost-project flags

None in the strict sense — all 8 buildings exist. However this batch should be flagged to the user as a **Category B wrong-operator attribution**: "BPS Lettings" is not a BTR operator, and treating it as one produces misleading structure. The cleaner representation would be to reclassify the operator attribution on these 8 projects as `"Various agents"` or `"Individual landlords (BPSE + Foxtons + Hamptons + Knight Frank)"` in a subsequent structural pass. Flagged for user decision — not applied in this proposal.

## Notes (narrative for all 8 projects)

> BPS Lettings is the on-site letting agency at Battersea Power Station, not a BTR operator. Units are owned by individual investor-landlords; referencing, guarantor, and flex policies vary per listing. Under RRA 2026 the upfront-rent lever that historically helped thin-credit applicants is no longer available for ASTs, and no published operator-wide pathway exists. Direct enquiry on a specific listing is the only route — budget for the conversation to go nowhere at several before one lands.

## Sources

- https://www.bpsestates.co.uk/battersea-lettings — accessed 2026-04-16 (redirects to batterseapowerstation.co.uk/property-to-let)
- https://batterseapowerstation.co.uk/property-to-let — accessed 2026-04-16
- https://www.zoopla.co.uk/find-agents/branch/battersea-power-station-estates-ltd-london-80373/ — accessed 2026-04-16
- https://www.foxtons.co.uk/estate-agents/battersea-power-station — accessed 2026-04-16 (evidence of competing agents)
