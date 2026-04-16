# Gravity Co — research notes

**Date of research:** 2026-04-16
**Agent batch:** Licence-based co-living operators
**Research scope:** Operator-level qualification policy for Gravity Co's West Hampstead London building.

---

## Operator identity and status

Gravity Co is a London & Reading co-living operator (`gravityco.co`, previously `gravitycoliving.com` — now redirects). Their West Hampstead location opened as their seventh London property at 11 Dennington Park Road, NW6 1BB — a converted mid-terrace Victorian.

Entity: GRAVITY CO-LIVING LIMITED (Companies House 10893206).

**Dataset status:** `gravity-west-hampstead` (west-hampstead.ts) exists, tagged `realism: "licence-exempt"`, pricing £1,400/month.

**Note:** the current dataset operator page URL (`gravityco.co/location/west-hampstead/`) is right — Gravity's London portfolio page `gravityco.co/locations/` confirms West Hampstead is live.

## Structural qualification policy

Gravity Co is the **most financially-demanding** of the licence-class operators in this batch. They publish an income threshold, a guarantor pathway, and a holding-fee-forfeiture clause — language much closer to a BTR operator's T&Cs than to Folk/Node's welcoming flow.

### Key verbatim (via external search surfacing gravityco.co/faq/ and gravityco.co/terms-and-conditions/):

> "Upon booking a long-term stay with Gravity Co (1-12 months), customers are charged a Holding Fee of 20% of the security and damages deposit (equal to 1 x months' rent) to reserve the unit for up to 5 working days. The holding deposit is non-refundable if you withdraw, provide false or misleading information, or fail the checks."

> "You must earn at least 25 times the monthly rent per year, or provide a guarantor earning at least 30 times the monthly rent per year."

> "Utility bills included in monthly rents are to a fair usage policy and include water, WIFI, electricity and heating. However, Council tax is not included in the monthly rent and must be paid directly to the local council by the customer/member."

> "Your deposit is protected under a recognised scheme, and Gravity Co is a member of the PRS redress scheme."

Gravity also uses "customer/member" language throughout their T&Cs, suggesting a **licence/membership model rather than AST** — though the deposit-protection + PRS redress membership + "tenancy" language in some places complicates the pure-licence claim. The safest inference is that Gravity operates a **hybrid or licence-flavoured structure** — marketed as co-living licence for short stays (days-to-weeks) but potentially AST-structured for the 12-month contracts. This is the same pattern as Vonder/Fraser Bond in structure but with Gravity holding the lettings directly (no third-party agent).

### "Pay upfront for entire stay" international workaround

The batch prompt hypothesises a "pay-upfront-for-entire-stay international workaround" at Gravity Co. My research could NOT verify this verbatim — the T&Cs and FAQ surfaced did not mention full-stay-upfront as an alternative to the income check or guarantor route. The structured alternatives documented are:

1. Earn 25× monthly rent (Caner fails — no UK employment)
2. Provide a guarantor earning 30× monthly rent (Caner fails — Turkish parents, overseas)
3. *Possibly* pay upfront — unverified, needs direct enquiry

**If the upfront workaround exists and is offered, it would clear the `with-upfront-licence` pathway.** But without verification it remains speculative.

### Qualification field summary

| Field | Value | Evidence |
|---|---|---|
| `agreement_type` | `unclear` | "customer/member" language suggests licence, but deposit protection scheme + PRS redress membership suggests AST-structured. Mixed signals — 12-month stays likely AST, shorter stays likely licence. Cannot pin down from public T&Cs. |
| `referencing_provider` | `in-house` | No named third-party (Homeppl/Goodlord). Gravity runs own "checks" as referenced in the holding-fee-forfeiture clause. |
| `min_tenancy_months` | `1` | 1-12 months per T&Cs ("long-term stay 1-12 months") |
| `income_multiple` | `25` | Verbatim: "You must earn at least 25 times the monthly rent per year" |
| `open_banking_accepted` | `unclear` | Not addressed |
| `upfront_rent_policy` | `unclear` | Not published — batch prompt claims a workaround exists but couldn't be verified |
| `accepts_professional_guarantor` | `unclear` | The "guarantor earning 30x" clause could apply to individual OR professional guarantor — not distinguished |
| `accepts_individual_overseas_guarantor` | `unclear` | Not addressed; "guarantor earning 30x monthly rent per year" does not specify UK residency |
| `credit_check` | `standard` | The "fail the checks" language in the holding fee clause implies credit/affordability screening; no "lenient" or "no credit check" language surfaced |
| `international_tenant_policy` | `accepted-case-by-case` | No explicit welcome statement; operator targets professionals generally; not the Folk/Node international-first posture |
| `visa_expiry_handling` | `unclear` | Not addressed |
| `qualification_flexibility_signal` | `standard` | Neither positive nor negative signal surfaced |

## Pricing — from dataset + external confirmation

- Studios from £1,400/month (current dataset value)
- Bills inclusive: water, WiFi, electricity, heating (NOT council tax — excluded)
- Free gym membership, secure underground parking, community events via Gravity App
- 3-month minimum stay per dataset (T&Cs allow 1-12 months)
- `price_transparency: "listed"`

**Pricing update:** the £1,400/month may be stale — cross-check current `gravityco.co/location/west-hampstead/` (my fetch was content-thin on this run). Recommend re-verifying at email time.

## Realism derivation (Caner)

Pathway clearing:

- `licence-exempt-light-ref`: requires `credit_check` lenient/none AND licence agreement — **FAILS** (credit_check standard, agreement_type unclear)
- `with-upfront-licence`: requires licence + multi-month — **UNCLEAR** (agreement_type unclear, upfront policy unclear)
- `standard-passable`: Open Banking unclear, `credit_check` standard — FAIL
- `with-savings`: requires Homeppl — FAIL
- `with-co-signer-overseas`: `unclear` — FAIL
- `with-professional-guarantor`: `unclear` — FAIL

**realism_pathways: []** given the evidence surfaced

**grad_visa_realism:** this is where the dataset's current `"licence-exempt"` tag is probably OVER-OPTIMISTIC. The pathway rules don't clear without more-permissive interpretation of the "unclear" fields. However, the batch prompt evidence (hypothesised pay-upfront workaround) and Gravity's overall co-living positioning suggest the realism is closer to `"achievable-with-guarantor"` IF the upfront workaround exists, or `"unclear"` pending direct enquiry.

**Recommended state:** move `realism` from `"licence-exempt"` → `"unclear"` pending direct enquiry on (a) whether the agreement is licence or AST, (b) whether full-stay-upfront is an accepted alternative to the income/guarantor test.

This is a downgrade but reflects honest research reality: Gravity Co publishes a 25× income floor and 30× guarantor floor, and neither pathway is available to Caner without a verified upfront workaround.

## Flex signals

Mixed:
- Positive: co-living positioning + flexible 1-12 month term length + all-inclusive-ish pricing + community focus
- Neutral: standard holding fee + income multiple published + guarantor route with income threshold
- Not positive: no "international welcomed" language; no Open Banking mentioned; no co-signer / overseas pathway named

## Ghost-project check

Gravity Co West Hampstead confirmed on gravityco.co/location/west-hampstead/. Recent press (proptech-x.com, btrnews.co.uk) documents the opening. No ghost concern.

## Sources

- https://gravityco.co/ — operator homepage
- https://gravityco.co/faq/ — FAQ (thin content on this fetch but external search surfaced income multiple and holding fee)
- https://gravityco.co/terms-and-conditions/ — T&Cs (similarly thin on direct fetch but external search quoted key verbatim)
- https://gravityco.co/location/west-hampstead/ — West Hampstead building page
- https://gravityco.co/how-co-living-gravity/ — "How does Co-Living work with Gravity?"
- https://gravityco.co/process-booking-co-living-space-and-what-expect/ — booking process walkthrough
- https://gravitycoliving.com/ — old domain, redirects
- https://www.homeviews.com/company/gravity-co — HomeViews reviews
- https://proptech-x.com/proptech-x-gravity-co-expands-london-portfolio-with-new-west-hampstead-property/ — opening press
- https://btrnews.co.uk/gravity-co-opens-its-west-hampstead-co-living-scheme/ — opening press
- https://find-and-update.company-information.service.gov.uk/company/10893206 — Companies House

All accessed 2026-04-16.

## Open questions for direct enquiry

1. Is the 12-month contract a licence or an AST?
2. Does Gravity accept full-stay-upfront payment as an alternative to the 25× income / 30× guarantor test? (This is the critical question for Caner.)
3. Does the 30× guarantor allow overseas individuals?
4. Does Gravity accept Open Banking income evidence for applicants without UK payslips?
5. Is the current pricing £1,400 or has it moved?
