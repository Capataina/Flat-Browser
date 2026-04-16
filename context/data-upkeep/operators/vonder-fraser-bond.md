# Vonder (Wembley, lettings via Fraser Bond) — research notes

**Date of research:** 2026-04-16
**Agent batch:** Licence-based co-living operators (scope audit)
**Research scope:** Correct operator-level qualification tagging for Vonder Wembley, where lettings are run through Fraser Bond — NOT via the licence-exempt co-living model that the "Vonder" brand surface implies.

---

## Operator identity and status

Vonder Wembley is a 313-apartment co-living building at 1 Olympic Way, Wembley HA9, operated by Vonder (brand) but with **lettings managed by Fraser Bond** as the letting agent.

This is the critical correction the 2026-04-16 note in `src/areas/data/wembley-park.ts` already captures:

> "CRITICAL CORRECTION 2026-04-16: Despite co-living branding, Vonder Wembley lettings are run through Fraser Bond using STANDARD AGENT REFERENCING (credit checks, employment verification, previous landlord references). NOT licence-exempt. Was incorrectly tagged 'licence-exempt' — corrected to 'unlikely'."

**Dataset status:** `vonder-wembley` (wembley-park.ts) exists and is already correctly tagged `realism: "unlikely"`. This research confirms and documents the reasoning.

**Brand confusion:** Vonder Europe's wider brand (`vondereurope.com`) markets the co-living experience with 3-month minimum + "flexibility" language which at face value reads like the Folk/Node pattern. The reality at Wembley specifically is different because Fraser Bond is the letting agent, and Fraser Bond's tenancy is structured as a 12-month minimum AST rather than a flexible licence — despite the co-living branding.

## Structural qualification policy

### From Fraser Bond's own blog (via external search):

> "Fraser Bond is a UK-based rental platform that aims to simplify the process of renting a property by eliminating the need for credit checks, connecting renters directly with landlords to eliminate the need for credit checks altogether. Instead of relying solely on credit ratings, they consider factors such as affordability and references from previous landlords when matching tenants with properties."

### From Fraser Bond's customer reviews (Trustpilot) and the Vonder Wembley listing page:

- Tenancy is **12-month minimum AST** per the Vonder Wembley page ("furnished flats to rent with a minimum 12-month lease")
- Fraser Bond's referencing still uses **affordability checks + previous landlord references** — the "no credit check" claim is marketing shorthand for "we accept applicants without a strong credit file if other evidence clears"
- This is **not** the licence-exempt model. Fraser Bond does reference; they just use a bespoke methodology.

### Why this disqualifies Caner

1. **12-month AST** means post-RRA (May 2026) the 1-month advance-rent cap applies — the upfront-payment lever is closed.
2. **Previous landlord reference** needed — Caner's Ten Degrees (Greystar) tenancy would provide this, but the separate eviction / notice-retraction dispute with Ten Degrees active as of 2026-04-16 complicates the reference's usefulness.
3. **Affordability check** — Caner has no UK payslips and no employment contract, so the affordability test fails standard.
4. **Fraser Bond doesn't publicly offer an overseas co-signer or professional-guarantor pathway for Vonder Wembley specifically**.

### Qualification field summary

| Field | Value | Evidence |
|---|---|---|
| `agreement_type` | `ast` | Vonder Wembley tenancy explicitly 12-month lease per Fraser Bond listing; Vonder brand page also indicates standard tenancy for UK properties |
| `referencing_provider` | `in-house` | Fraser Bond runs its own referencing methodology — affordability + previous landlord references, not Homeppl/Goodlord |
| `min_tenancy_months` | `12` | Fraser Bond listing — "minimum 12-month lease" |
| `income_multiple` | `null` | Not published; Fraser Bond uses undefined "affordability" judgement |
| `open_banking_accepted` | `unclear` | Not addressed |
| `upfront_rent_policy` | `one-month-ast-cap` | Post-RRA AST cap applies; no licence pathway |
| `accepts_professional_guarantor` | `unclear` | Fraser Bond's blog mentions some guarantor pathways but not standardised for Vonder Wembley |
| `accepts_individual_overseas_guarantor` | `unclear` | Not addressed |
| `credit_check` | `lenient` | Fraser Bond's "no credit check" marketing language — but they DO reference, so "lenient" not "none" |
| `international_tenant_policy` | `accepted-case-by-case` | Vonder's co-living co-hort includes international residents but Fraser Bond's flow is judgement-based per-application |
| `visa_expiry_handling` | `unclear` | Not addressed; AST model typically doesn't truncate to visa dates |
| `qualification_flexibility_signal` | `unclear` | Trustpilot reviews for Fraser Bond are mixed; not enough signal either way |

## Pricing — current (from `wembley-park.ts`)

Studios from ~£1,545/month, 1-beds from ~£1,825/month. Bills included (excl. council tax). Prior research confirmed this pricing.

## Realism derivation (Caner)

No pathway clears:

- `standard-passable`: multiple fields `unclear`, credit_check `lenient` (not "none"), AST — FAIL
- `with-professional-guarantor`: `unclear` — FAIL
- `with-savings`: requires Homeppl, Fraser Bond is in-house — FAIL
- `with-co-signer-overseas`: `unclear` — FAIL
- `with-upfront-licence`: AST, not licence — FAIL
- `licence-exempt-light-ref`: AST, not licence — FAIL

**realism_pathways: []**

**grad_visa_realism:** preserve current `"unlikely"` verdict (authored judgement reflecting the research finding that Fraser Bond referencing + AST + no documented guarantor pathway is a structural mismatch for Caner's profile).

## Flex signals

Positive (why `"unlikely"` rather than `"blocked"`):
- Fraser Bond's "no credit check" marketing suggests applicants without UK credit files have some acceptance path
- Judgement-based affordability review is in principle flexible

Negative (supporting `"unlikely"`):
- 12-month AST with no licence regime
- No documented overseas guarantor or professional guarantor flow
- Fraser Bond Trustpilot has mixed reviews including some "couldn't get referenced" complaints
- Post-RRA upfront-rent cap removes the main Caner lever

## Ghost-project check

Vonder Wembley exists at 1 Olympic Way HA9 per `vondereurope.com/locations/gbr/london/wembley` and Fraser Bond's listings. No ghost concern.

## Corrective note

This building was incorrectly tagged `realism: "licence-exempt"` in the original sweep because the Vonder brand was assumed to apply its co-living licence model here. The 2026-04-16 correction to `"unlikely"` is justified and should remain.

## Sources

- https://www.vonderwembley.com/ — operator-brand building page
- https://www.vondereurope.com/locations/gbr/london/wembley — Vonder Europe listing
- https://fraserbond.com/blog/article/vonder-wembley-london-ha9-b3301 — Fraser Bond letting agent for Vonder Wembley
- https://fraserbond.com/blog/article/say-goodbye-to-credit-checks-rent-directly-from-owners-with-fraser-bond-in-the-uk-b7495 — Fraser Bond's own referencing methodology explanation
- https://uk.trustpilot.com/review/vondereurope.com — Vonder's Trustpilot reviews
- https://ca.trustpilot.com/review/www.fraserbond.co.uk — Fraser Bond's Trustpilot reviews

All accessed 2026-04-16.

## Open questions for direct enquiry (if Caner chooses to reach out)

1. Fraser Bond's actual affordability criteria — is there a stated multiple?
2. Is multi-month upfront rent an accepted alternative to affordability (even with the 1-month AST cap, this would be a lease-structure negotiation)?
3. Overseas guarantor policy at Vonder Wembley specifically?
4. Whether Fraser Bond accepts Open Banking as income evidence.

**Recommendation: deprioritise Vonder Wembley in the email round.** Available pathways for Caner are too thin relative to Folk/Node/Gravity/Enclave. Keep the correct `"unlikely"` tag in the dataset.
