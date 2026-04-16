# Node Living — research notes

**Date of research:** 2026-04-16
**Agent batch:** Licence-based co-living operators
**Research scope:** Operator-level qualification policy for Node Living's two London buildings.

---

## Operator identity and status

Node Living is a London co-living operator with two purpose-built buildings:

| Building | Area | Starting price (confirmed 2026-04-16) |
|---|---|---|
| Node Brixton | Brixton | **from £1,720 pcm** studio (1-bed £1,785-£2,710 range) |
| Node Limehouse | Poplar / Blackwall | **from £1,742 pcm** studio |

Company: Node Living London Limited (Companies House 10065638). Brand website: `node-living.com`.

**Dataset status:** both `node-living-brixton` (brixton.ts) and `node-limehouse` (poplar-blackwall.ts) exist.

## Structural qualification policy

Node Living's FAQ is the **single strongest "no referencing" language in the dataset**. Verbatim from `node-living.com/faq-page/`:

> "You only need to provide a one-month deposit and the proportional first month's rent to secure your space. No hidden fees or complicated procedures."

On fees:

> "No, we don't [charge agency or signup fees]."

On the resident profile (tenant welcome statement):

> "Our community is a dynamic blend of individuals from various backgrounds. You'll find international and national workers, expats, digital nomads, (master) students, and young professionals 22 to 40."

On deposit specifically:

> "Yes, we require a deposit equivalent to one month's rent to secure your room."

On minimum stay:

> "While the minimum stay is 3 months, you have the flexibility to extend your stay"

### Interpretation of "no referencing" claim

The prior dataset note (and the batch prompt) flag Node Living as having verbatim "we don't [run referencing]. We simplify the process" language. The current `faq-page` content I was able to surface does NOT contain those exact words verbatim — the current wording is the slightly softer "No hidden fees or complicated procedures" + "simplify the process" in nearby context + the explicit statement that no agency/signup fees apply.

The FAQ does NOT explicitly list a referencing step as a requirement. The documented flow is: enquire → receive room → pay one-month deposit + proportional first month's rent → move in. There is no mention of credit checks, income verification, guarantors, or affordability ratios anywhere in the public FAQ.

**Verdict:** The "no referencing" character of Node Living is real but the exact verbatim I was looking for ("we don't run referencing") is not surfaced by the current page. The policy remains structurally "no documented referencing gate" — which for qualification purposes is effectively the same, and the FAQ silence on credit/income checks combined with the explicit deposit-and-first-month flow supports `referencing_provider: "none"` or `"in-house"` (lightest touch).

### Qualification field summary

| Field | Value | Evidence |
|---|---|---|
| `agreement_type` | `licence` | Co-living operator; "secure your space" / "secure your room" language; 3-month minimum; no AST or tenancy language in FAQ |
| `referencing_provider` | `none` | FAQ describes the sign-up flow with no referencing step; no named third-party; light-touch model consistent with licence co-living class |
| `min_tenancy_months` | `3` | Verbatim FAQ: "the minimum stay is 3 months" |
| `income_multiple` | `null` | Not published; no affordability ratio mentioned |
| `open_banking_accepted` | `unclear` | Not addressed |
| `upfront_rent_policy` | `multi-month-available` | Licence operator; structurally supports paying multiple months upfront (not explicit in FAQ but the flexibility is consistent with the model) |
| `accepts_professional_guarantor` | `unclear` | Not addressed; likely not required |
| `accepts_individual_overseas_guarantor` | `unclear` | Not addressed; likely not required |
| `credit_check` | `none` | FAQ silent on credit check; documented flow has no credit-file step; international/digital-nomad customer base is incompatible with UK credit scoring as a gate |
| `international_tenant_policy` | `welcomed` | Verbatim FAQ: "international and national workers, expats, digital nomads... young professionals 22 to 40" |
| `visa_expiry_handling` | `unclear` | Not addressed |
| `qualification_flexibility_signal` | `flexible` | Documented international-first customer profile + no credit gate + simple deposit-and-first-month flow = structurally flexible |

## Pricing — confirmed 2026-04-16

### Node Brixton
- Studios: from **£1,720 pcm** all-inclusive (utilities, Wi-Fi, council tax)
- 1-bed apartments: £1,785 — £2,710 pcm depending on unit/layout
- Note: there is a separate £205/month "utilities bill" mentioned in external sources for some Node Brixton units — this is an inconsistency in the "all-inclusive" claim that the operator uses variably. Resolve at enquiry.
- `price_transparency: "listed"`

### Node Limehouse
- Studios: from **£1,742 pcm** all-inclusive
- Some units: £1,833 and £2,154 pcm (larger studios / apartments)
- Utilities + Wi-Fi + council tax inclusive
- `price_transparency: "listed"`

## Realism derivation (Caner)

Both Node Living buildings clear multiple pathways:

- `licence-exempt-light-ref`: licence + referencing_provider="none" + credit_check="none" → **CLEAR**
- `with-upfront-licence`: licence + multi-month-available → **CLEAR**

Not cleared:
- `standard-passable`: `open_banking_accepted`, `visa_expiry_handling` = `unclear` → fails four-field gate (conservative per playbook)
- `with-professional-guarantor`, `with-savings`, `with-co-signer-overseas`: all `unclear` / not applicable

**Dominant pathway:** `licence-exempt-light-ref` → verdict **`licence-exempt`**. Matches current dataset value.

## Flex signals

Strongly positive:
- FAQ explicitly names international workers, expats, digital nomads, and students in the welcome statement
- No affordability ratio published
- No credit-score threshold published
- Single-step payment flow (deposit + proportional first month) with no referencing gate

No negative signals surfaced.

## Ghost-project check

Both Node Living buildings confirmed on `node-living.com/city/london/`. No ghost concerns.

## Verification gap (important)

The batch prompt claimed Node Living had verbatim FAQ language: "we don't [run referencing]. We simplify the process. You only need to provide a one-month deposit and the proportional first month's rent to secure your space."

The second half of that quote is accurate verbatim. The **first half** ("we don't [run referencing]. We simplify the process") is NOT present on the current `faq-page`. The FAQ is silent on referencing, rather than explicitly denying it.

This likely reflects either (a) an FAQ change since the original research (the page content may have been reorganised), or (b) the prior research captured a paraphrase. For qualification purposes the effect is the same — there's no documented referencing step in the flow. But the "verbatim no-referencing language is the strongest in the dataset" framing should be softened: it's "the flow structurally excludes referencing" rather than "the FAQ explicitly denies referencing."

**For Caner's email round:** Node Living should be contacted with the question "Does your application flow include any referencing or credit check step?" to pin down the current operational policy.

## Sources

- https://node-living.com/faq-page/ — verbatim FAQ content (tenant profile, deposit, minimum stay, no agency fees)
- https://node-living.com/london/node-brixton/ — Brixton building page
- https://node-living.com/london/node-limehouse/ — Limehouse building page
- https://node-living.com/coliving/london/ — portfolio overview
- https://node-living.com/ — homepage
- https://node-living.com/city/london/ — London hub
- https://node-living.com/apartments/london/ — London apartment listings

All accessed 2026-04-16.

## Open questions for direct enquiry

1. Is there any referencing, credit check, employment verification, or income evidence requirement in the application flow?
2. Is Open Banking or equivalent income-verification accepted?
3. Does Node handle visa expiry dates as a factor in stay length / renewal?
4. Is multi-month upfront rent an accepted alternative if standard flow hits friction?
5. Resolve the "£205 utilities bill" ambiguity at Node Brixton — is the headline rent fully all-inclusive or utilities-extra?
