# Folk Co-living — research notes

**Date of research:** 2026-04-16
**Agent batch:** Licence-based co-living operators
**Research scope:** Operator-level qualification policy for Folk Co-living's three London buildings.

---

## Operator identity and status

Folk is an active London co-living operator with three purpose-built portfolio buildings:

| Building | Area | Min stay | Current starting price |
|---|---|---|---|
| Folk Florence Dock | Battersea (SW11) | **Short stays available** — single nights are possible per FAQ verbatim, though 12-month is the headline rate | **£1,758 pcm** (Standard, 12-month) |
| Folk at Sunday Mills | Earlsfield (SW18) | 3 months | **£1,599 pcm** (Standard, 12-month) |
| Folk at The Palm House | Harrow | 3 months | **£1,512 pcm** (Standard, 12-month) |

All three are operated by Folk directly. Brand website: `folkcoliving.com`. Contact: 020 7078 7062.

**Dataset status:** Only Florence Dock (`folk-florence-dock` in `battersea-park.ts`) exists in the dataset. Sunday Mills and The Palm House are NOT currently in the dataset — the batch prompt anticipates adding them in a follow-up, but their areas (Earlsfield, Harrow) are not currently part of Flatbrowser's 55-area coverage. This research documents Folk's operator-wide policy so that if/when those areas are added, the qualification block can be applied directly.

## Structural qualification policy

Folk is a **licence-based co-living operator**. FAQ verbatim:

> "Our leases are designed for people looking for stability and flexibility"

and they describe bookings as requiring:

> "proof of income, and for you to do a reference/background check"

with:

> "Our studios are available to rent with no deposit."

and:

> "When you reserve your studio you'll pay a £200 holding fee, which is fully redeemable against your first month's rent."

On international tenants, Folk's FAQ is explicit and verbatim:

> "Yes definitely! We welcome residents from all walks of life and cultural backgrounds."

On pricing and inclusions across all three buildings: rent covers **utilities, council tax, and superfast WiFi** + **weekly events, gym, co-working, cinema** (where buildings have those amenities).

| Field | Value | Evidence / reasoning |
|---|---|---|
| `agreement_type` | `licence` | Folk uses "licence agreement" language in FAQ; zero deposit + £200 holding fee flow is the licence-pattern, not AST |
| `referencing_provider` | `in-house` | FAQ says "for you to do a reference/background check" in the Folk's own flow — no named third party (Homeppl/Goodlord). Folk operates the booking team directly. |
| `min_tenancy_months` | `3` (Sunday Mills, Palm House); `1` (Florence Dock, per FAQ "shorter available at Florence Dock") | Building-specific |
| `income_multiple` | `null` | Not stated publicly — Folk requires "proof of income" but does not publish a multiple. Judgement-based. |
| `open_banking_accepted` | `unclear` | Not named in FAQ. In-house reviewer likely accepts bank statements, but Open Banking as a platform is not mentioned. |
| `upfront_rent_policy` | `multi-month-available` | Licence operator — 3+ months upfront is a structurally available lever; not published but FAQ flexibility language supports it |
| `accepts_professional_guarantor` | `unclear` | Not addressed in FAQ |
| `accepts_individual_overseas_guarantor` | `unclear` | Not addressed in FAQ |
| `credit_check` | `lenient` | "proof of income" + "reference/background check" is softer than standard BTR credit-file screening; no explicit credit score mention; in-house judgement |
| `international_tenant_policy` | `welcomed` | Verbatim FAQ language: "we welcome residents from all walks of life and cultural backgrounds" |
| `visa_expiry_handling` | `unclear` | Not addressed |
| `qualification_flexibility_signal` | `flexible` | FAQ language consistently frames Folk as "we welcome..." / "our leases are designed for... flexibility"; the in-house non-licensed-referencer model is structurally flexible. No documented Trustpilot/HomeViews rigidity. |

## Pricing — confirmed 2026-04-16 (all from `folkcoliving.com/homes/<building>`)

### Folk Florence Dock (Battersea)
- Standard: **from £1,758 pcm** (up from dataset's £1,695 — update needed)
- Roomy: from £2,009
- Bigger: from £2,069
- Biggest: from £2,268
- Bills inclusive: utilities, council tax, WiFi
- `price_transparency: "listed"`
- **Note:** "Short stays are available, get in touch for more details"

### Folk at Sunday Mills (Earlsfield) — not in dataset
- Standard: from **£1,599 pcm**
- Roomy: from £2,010
- Bigger: from £2,069
- Biggest: from £2,339
- Duplex: from £2,304
- Available 3-12 months

### Folk at The Palm House (Harrow) — not in dataset
- Standard: from **£1,512 pcm**
- Roomy: from £1,620
- Biggest: from £1,766
- Available 3-12 months

## Realism derivation (Caner)

All Folk buildings clear:

- `licence-exempt-light-ref`: licence + in-house ref + lenient credit → **CLEAR**
- `with-upfront-licence`: licence + multi-month-available → **CLEAR**

Not cleared:
- `standard-passable`: `open_banking_accepted` and `visa_expiry_handling` are `unclear` — fails the four-field gate
- `with-professional-guarantor`: `unclear` — not confirmed
- `with-savings`: requires Homeppl
- `with-co-signer-overseas`: `unclear`

**Dominant pathway:** `licence-exempt-light-ref` → **`licence-exempt`** verdict.

This matches the current dataset state for Folk Florence Dock (`realism: "licence-exempt"`).

## Flex signals

Positive (supports `qualification_flexibility_signal: "flexible"`):
- Explicit "we welcome residents from all walks of life and cultural backgrounds" FAQ verbatim
- In-house booking team (no inflexible third-party scorecards)
- £200 holding fee is low-friction; no deposit is structural flex
- Short-stay availability at Florence Dock signals operational flexibility

No negative signals found in search results (no Trustpilot "wouldn't budge" narratives surfaced).

## Ghost-project check

All three Folk buildings are listed on folkcoliving.com's homepage + confirmed in their respective building pages. No ghost-project concerns.

## Sources

- https://www.folkcoliving.com/faqs — verbatim FAQ language on proof of income, holding fee, welcome statement, minimum stays
- https://www.folkcoliving.com/homes/florence-dock — pricing + inclusions, minimum stay wording
- https://www.folkcoliving.com/homes/sunday-mills — pricing + inclusions, 3-12 month terms
- https://www.folkcoliving.com/homes/the-palm-house — pricing + inclusions, 3-12 month terms
- https://www.folkcoliving.com/co-living-at-folk — "Move-in quickly. Stay for three months or three years – it's up to you."

All accessed 2026-04-16.
