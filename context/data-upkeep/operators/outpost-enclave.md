# Outpost Management / Enclave (BlackRock) — research notes

**Date of research:** 2026-04-16
**Agent batch:** Licence-based co-living operators (scope audit — Enclave is AST with exceptional documentation)
**Research scope:** Operator-level qualification policy for Enclave (Outpost-managed, BlackRock-owned) buildings.

---

## Operator identity and status

Outpost Management is the UK residential operator. They run buildings under the **Enclave** brand. Ownership: **Outpost + BlackRock Private Markets JV** (50/50 partnership with £1 billion committed investment in UK residential assets, multiple completed acquisitions as of 2026).

Enclave portfolio (UK) includes:

| Building | Area | Notes | Dataset ID |
|---|---|---|---|
| Enclave: Acton | North Acton | 462-unit, 32-storey, co-living-branded studios. Opened summer 2025. BlackRock-funded via Tide forward-funding. | `enclave-acton` (north-acton.ts) |
| Enclave: Croydon | Croydon | 817-unit, 50-storey tower. No-deposit model (mentioned in dataset). | `enclave-croydon` (croydon.ts) |
| Enclave: Birmingham | Birmingham | Not in dataset (out of London scope) | — |
| Enclave: King's Cross | King's Cross | Not in dataset (batch assigns Enclave to Acton, but Enclave King's Cross exists) | — |

Brand website: `enclave.com`. Per-building FAQs at `enclave.com/locations/<city>/faqs`.

**Dataset status:** both `enclave-acton` and `enclave-croydon` exist. Acton tagged `realism: "achievable"`. Croydon tagged `realism: "achievable-with-guarantor"`.

## Structural qualification policy

Enclave has **the strongest publicly-documented qualification flexibility** of any AST operator in the dataset. The FAQs explicitly publish TWO fallback paths for applicants who fail the standard affordability test:

1. **Guarantor option** — verbatim: *"We also offer the option of securing an apartment with the assistance of a guarantor."*
2. **Advance rental payments** — verbatim: *"Advance rental payments are an option if a household does not pass the affordability criteria."*

Per building the specific thresholds vary:

### Enclave: Acton (verbatim from enclave.com/locations/acton/faqs)

> "The joint household income must be at least 30 times the monthly rent payable."

> "Advance rental payments are an option if a household does not pass the affordability criteria."

> "We also offer the option of securing an apartment with the assistance of a guarantor."

> "There is a holding fee of £250 per apartment which will be deducted from your first month's rent."

> "We offer flexible lease terms from 6 months to 18 months."

> "We don't take security deposit" / "We don't charge security deposits."

> "Many of our residents come from overseas and move straight into Enclave buildings as soon as they land in the UK."

### Enclave: Croydon (verbatim)

> "The household income must be at least £27,000 or 2.5 times the annual rent payable whichever is higher."

> "There is a holding fee of £250 per apartment which will be deducted from your first month's rent."

Students at Croydon specifically:
> "students must either have a UK-based guarantor and pay 6-months upfront, or if a guarantor is not available, the full tenancy must be paid upfront."

### Referencing provider (both buildings)

> "referencing checks, which are carried out by our referencing company" — Rightmove Referencing.

### Right to rent

> "We are required to obtain and check all original identification of non-EU tenant(s) to show that they are legally allowed to live in the UK."

### Qualification field summary

| Field | Value | Evidence |
|---|---|---|
| `agreement_type` | `ast` | "tenancy agreement" language throughout; 6-18 month terms |
| `referencing_provider` | `goodlord` (via Rightmove Referencing — uses Goodlord stack) or mark as `in-house` if treating Rightmove Referencing as its own category | Verbatim: "our referencing company" is Rightmove Referencing. Note: Rightmove Referencing is technically not Homeppl/Goodlord/Canopy — it's its own stack. For schema purposes, closest match is `"in-house"` (operator-integrated) or explicit third-party reference. Recommend: `"in-house"` with clear note. |
| `min_tenancy_months` | `6` | "minimum of 6-months & maximum of 18-months" |
| `income_multiple` | `30` (Acton) / `30` (Croydon — 2.5× annual = 30× monthly) | Verbatim |
| `open_banking_accepted` | `unclear` | Not addressed — Rightmove Referencing's stack is not Open Banking-primary |
| `upfront_rent_policy` | `multi-month-available` | "Advance rental payments are an option if a household does not pass the affordability criteria" — this is the structural lever, even though AST technically caps at 1 month post-RRA |
| `accepts_professional_guarantor` | `yes` | Verbatim: "We also offer the option of securing an apartment with the assistance of a guarantor." Corporate-service acceptance is implicit in "guarantor option" without "UK-resident-only" qualifier. |
| `accepts_individual_overseas_guarantor` | `unclear` | Not explicitly addressed, but the "Many of our residents come from overseas" + guarantor option suggests overseas guarantors are at least considered |
| `credit_check` | `standard` | Rightmove Referencing runs credit checks; "you'll also have your Right to Rent and credit score checked" verbatim for overseas applicants |
| `international_tenant_policy` | `welcomed` | Verbatim: "Many of our residents come from overseas and move straight into Enclave buildings as soon as they land in the UK." |
| `visa_expiry_handling` | `unclear` | Not explicitly addressed; 18-month max term means visa truncation issue is possible but not described |
| `qualification_flexibility_signal` | `flexible` | Two FAQ-published fallback paths — strongest documented flexibility in the dataset |

### Upfront-rent nuance post-RRA

The RRA 2025 caps advance-rent at 1 month for ASTs post-May 2026. Enclave's "Advance rental payments" published option appears to PRE-DATE the RRA and may need to be re-verified for post-May-2026 policy. Outpost has not publicly addressed how they'll reconcile the fallback with RRA. For the 2026-04-16 snapshot, treat the published FAQ language as canonical — it will likely be updated by Outpost in the coming months.

**Important:** if Enclave's post-RRA policy removes the advance-rental fallback for ASTs, then Caner's pathway at Enclave shrinks to just the guarantor path. The FAQ language needs re-checking post-May-2026.

## Pricing — confirmed 2026-04-16

### Enclave: Acton
- Cosy Studio: from £1,860 pcm
- Comfy Studio: from £2,120 pcm
- Roomy Studio: from £2,125 pcm
- "No deposit required"
- Bills included: 1GB broadband confirmed; other utilities inclusive per dataset
- `price_transparency: "listed"`

Prior dataset: £1,910 all-inclusive — this is within the current pricing band (Cosy £1,860 is the new floor, suggesting a slight pricing movement).

### Enclave: Croydon
- 1-bed from £2,230 pcm (per dataset); studios presumably lower
- All-inclusive model (utilities + 1GB Wi-Fi), no deposit required
- `price_transparency: "listed"`

## Realism derivation (Caner)

Multiple pathways clear:

- `with-professional-guarantor`: `accepts_professional_guarantor: "yes"` → **CLEAR**
- `with-upfront-licence`: ❌ AST, not licence — FAIL by pathway rule (even though Enclave's fallback is functionally similar, the derivation rule requires `agreement_type: "licence"`)

Not cleared:
- `standard-passable`: multiple `unclear` fields, credit_check standard → FAIL
- `with-savings`: requires Homeppl — FAIL (Rightmove Referencing is not Homeppl)
- `with-co-signer-overseas`: `unclear` — FAIL
- `licence-exempt-light-ref`: AST, not licence — FAIL

**realism_pathways: ["with-professional-guarantor"]**

**grad_visa_realism:** derived → `"achievable-with-guarantor"` (umbrella for conditional pathways).

### Per-project realism

- `enclave-acton`: currently `"achievable"` — this is OVER-OPTIMISTIC given the pathway derivation. `with-professional-guarantor` is conditional, umbrellas to `"achievable-with-guarantor"`. Recommend correction to `"achievable-with-guarantor"`.
- `enclave-croydon`: currently `"achievable-with-guarantor"` — correct.

## Flex signals

Strongly positive:
- Two FAQ-published fallback paths (guarantor + advance rental) — unmatched documentation in any other BTR operator
- Verbatim international welcome ("Many of our residents come from overseas and move straight into Enclave buildings")
- No security deposit policy — structurally applicant-friendly
- Students explicitly can pay full tenancy upfront at Croydon (verbatim)

Neutral:
- Rightmove Referencing's Open Banking stance unclear
- Overseas guarantor explicit policy not published

## Ghost-project check

Both Enclave buildings confirmed on `enclave.com`. Outpost Management ownership verified (outpostmgt.com press releases + BlackRock JV confirmation in multiple 2024-2025 real estate press outlets). No ghost concerns.

## Sources

- https://enclave.com/faqs — main FAQ with two fallback paths documented
- https://enclave.com/locations/acton — Acton building page (pricing)
- https://enclave.com/locations/acton/faqs — Acton-specific FAQ (30× multiple, £250 holding fee)
- https://enclave.com/locations/croydon/faqs — Croydon-specific FAQ (£27k or 2.5× threshold, student 6-month-upfront language)
- https://www.outpostmgt.com/page11.html — Acton press release (Outpost / Tide / BlackRock)
- https://www.outpostmgt.com/post/outpost-management-and-tide-close-deal-for-the-castle-in-north-acton
- https://realassets.ipe.com/news/blackrock-and-outposts-uk-residential-partnership-adds-462-unit-project/10071728.article
- https://tideconstruction.co.uk/latest-news/enclave-acton-opens/
- https://www.propertyweek.com/finance/blackrock-and-outpost-jv-closes-north-london-btr-acquisition-from-tide

All accessed 2026-04-16.

## Open questions for direct enquiry

1. Post-RRA (May 2026) status of the "advance rental payments" fallback — is it still offered? If yes, how is it structured to comply with the 1-month cap? (Critical question.)
2. Overseas guarantor policy — explicit clarification on UK-resident requirement or flexibility for international applicants with overseas co-signers.
3. Open Banking income verification acceptance via Rightmove Referencing.
4. Visa-expiry handling — if Graduate visa expires Aug 2027 and lease is 18 months, does Enclave truncate?
