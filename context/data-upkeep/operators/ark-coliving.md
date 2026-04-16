# ARK Co-living — research notes

**Date of research:** 2026-04-16
**Agent batch:** Licence-based co-living operators
**Research scope:** Operator-level qualification policy for ARK Co-living's two London buildings.

---

## Operator identity and status

ARK Co-living is a London co-living operator with two purpose-built buildings, positioned as a **membership** (not tenancy) model:

| Building | Area | Pricing (current starting) |
|---|---|---|
| ARK Wembley | Wembley Park | **£1,699 pcm** (Classic 20 sqm); Premium/Premium Plus £2,049-£2,099 but sold out until Aug 2026 |
| ARK Co-living Canary Wharf | Canary Wharf (Crossharbour Plaza) | Pricing not publicly surfaced in current search; dataset records £1,499-£1,849 range from prior sweep |

The domain moved from `arkcoliving.com` to `arkliving.com` during 2025/2026 — the old `/faqs` URL now 404s, the new `/faqs` URL sits under `arkliving.com/faqs` and redirects through the `coliving/locations/<building>` path for property-specific information.

**Dataset status:** both `ark-wembley` (wembley-park.ts) and `ark-canary-wharf` (canary-wharf.ts) exist. Prior corrections established that Canary Wharf pricing was unknown; the Wembley Classic rate had been incorrectly captured as £1,250 before a 2026-04-16 correction to £1,699.

## Structural qualification policy

ARK uses **membership** language and classifies itself as co-living, but critically **DOES require reference checks** for long-stay (3-12 month) memberships.

### Verbatim from ARK Wembley FAQs (per external search quotation):

> "Your studio is only guaranteed once reference checks have been successfully carried out and either the first month's membership fee or the full balance for your entire stay has been received by us within the timeframe specified at the time of booking."

> "A refundable bond equivalent to five weeks' membership fees" — required as security for long-stay memberships.

> "a non-refundable down-payment of £500 to secure your stay"

> "Monthly payments for the rest of your stay must also be paid in advance by standing order"

> "No deposit is required to stay at ARK Wembley" — for short stays under 90 nights (different regime).

> "Guests are required to show a photo ID and credit card at check-in. Additionally, to secure your reservation, ARK may place a temporary hold of up to £100 on your card." — short-stay (1-89 nights) regime.

### Two-regime model

| Regime | Booking | Referencing | Bond | Down payment | Agreement |
|---|---|---|---|---|---|
| **Short stay (1-89 nights)** | Nightly / weekly | No | None | None | Hospitality licence, ID + card at check-in |
| **Long stay (3-12 months)** | 3-12 month contract | **Yes — reference checks required** | 5 weeks' fees refundable | £500 non-refundable | Membership contract (licence-based), advance-payment standing order |

For Caner (needs 12-month+), the long-stay regime applies. Reference checks are required, but the operator also explicitly accepts **full-balance-upfront as an alternative** to the first month: "either the first month's membership fee or the full balance for your entire stay" — this is the structural upfront-licence lever.

### Total upfront cost to move in (Wembley Classic at £1,699)

Per the published terms, the cash-down to secure a stay equals:

- £500 non-refundable down payment, plus
- 5 weeks' bond (refundable) ≈ £1,961, plus
- First month's membership fee £1,699

= **~£4,160 total at signing**, with option to pre-pay the full stay instead of month-one (replaces standing-order flow).

### Qualification field summary

| Field | Value | Evidence |
|---|---|---|
| `agreement_type` | `licence` | Membership contract, not AST. Advance rent multi-month is explicitly structural. |
| `referencing_provider` | `in-house` | ARK runs its own reference check — no named third-party (Homeppl/Goodlord) surfaced in research |
| `min_tenancy_months` | `3` | Long-stay membership 3-12 months. Shorter stays are a different regime. |
| `income_multiple` | `null` | Not published — income is checked via reference, not a stated multiple |
| `open_banking_accepted` | `unclear` | Not addressed in FAQ |
| `upfront_rent_policy` | `multi-month-available` | Verbatim — "full balance for your entire stay" is published as an alternative to monthly standing order |
| `accepts_professional_guarantor` | `unclear` | Not addressed in FAQ (search confirmed no UK-ARK-Co-living mention; US "ARK Homes for Rent" is a different company) |
| `accepts_individual_overseas_guarantor` | `unclear` | Not addressed |
| `credit_check` | `unclear` | Reference checks are required, but whether a credit bureau check runs or the reference is employer-based is not published. Likely in-house affordability-style check. |
| `international_tenant_policy` | `welcomed` | Core customer base is international — booking.com + tripadvisor presence indicates traveller/short-stay crossover; long-stay specifically not addressed but tone welcoming |
| `visa_expiry_handling` | `unclear` | Not addressed |
| `qualification_flexibility_signal` | `flexible` | The "cash-upfront substitutes for monthly standing order" structural option IS a flex lever; the in-house review model is not scorecard-rigid |

## Pricing — confirmed 2026-04-16

### ARK Wembley
- Classic 20 sqm: **£1,699 pcm** (currently the only available tier — Premium/Premium Plus sold out until Aug 2026)
- Premium 28 sqm: £2,049 pcm (unavailable)
- Premium Plus 29 sqm: £2,099 pcm (unavailable)
- All bills inclusive
- `price_transparency: "listed"`

### ARK Canary Wharf
- Pricing not surfaced in current search (page content primarily framework/CSS code per WebFetch result)
- Dataset currently records £1,499-£1,849 from prior sweep — flag as `"unclear"` until verified
- Ideal follow-up: direct enquiry via `reservations@arkcoliving.com`

## Realism derivation (Caner)

Both ARK buildings clear:

- `with-upfront-licence`: licence + multi-month-available → **CLEAR** (verbatim "full balance for your entire stay")

Not cleared:
- `licence-exempt-light-ref`: licence + in-house ref + credit_check is `unclear` → **does NOT clear** (rule requires lenient/none)
- `standard-passable`: multiple `unclear` fields
- All guarantor/Homeppl pathways: `unclear` / not applicable

**Dominant pathway:** `with-upfront-licence` → derived verdict **`achievable-with-guarantor`** (umbrella for all conditional routes).

**BUT the current dataset records `realism: "licence-exempt"`** — this is a CORRECTION candidate. The prior tagging assumed ARK was purely licence-exempt; the published "reference checks must succeed" language makes that overstated. Without the upfront-payment lever, Caner's thin UK credit file is actually a real blocker at ARK. **Recommend changing both ARK projects to `realism: "achievable-with-guarantor"` with `realism_pathways: ["with-upfront-licence"]`.**

## Flex signals

Positive:
- Full-stay-upfront explicitly published as an alternative payment flow
- No minimum income multiple published
- Long-stay extension from short-stay regime means flex on tenure is structural

Neutral-to-negative:
- "Reference checks must succeed" is strict enough language that cash-upfront becomes the dominant Caner lever, not standard-path
- No published policy on overseas guarantors or co-signers
- No published Open Banking / alternative income evidence path

## Ghost-project check

Both ARK buildings confirmed at `arkliving.com/coliving/locations/wembley` and `arkliving.com/coliving/locations/canary-wharf`. No ghost concerns. Note the **domain migration**: old `arkcoliving.com` links still redirect, but current canonical domain is `arkliving.com`.

## Sources

- https://arkliving.com/faqs — operator FAQs (successor to arkcoliving.com/faqs)
- https://arkcoliving.com/locations/wembley — redirects to arkliving.com/coliving/locations/wembley
- https://arkliving.com/coliving/locations/wembley — Wembley-specific page
- https://arkcoliving.com/locations/canary-wharf — redirects to arkliving.com/coliving/locations/canary-wharf
- https://arkliving.com/coliving/locations/canary-wharf — Canary Wharf page (thin content)
- External quotation via WebSearch (Globetrender 2022, HomeViews reviews, Tripadvisor listings) corroborating reference-check requirement, £500 down-payment, 5-week bond structure

All accessed 2026-04-16.

## Open questions for direct enquiry

1. Does ARK accept overseas guarantors or co-signers?
2. Does ARK accept Open Banking as income evidence for applicants without UK payslips?
3. Does full-stay-upfront payment WAIVE the reference check, or does it merely substitute for the monthly standing order? (Critical distinction for Caner.)
4. Current ARK Canary Wharf pricing.
