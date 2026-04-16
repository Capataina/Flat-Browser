# Apo Group — research notes

**Date of research:** 2026-04-16
**Agent batch:** apart-hotels, serviced apartments, managed studios (Apo is the batch's structural exception — true BTR, not apart-hotel)
**Research scope:** Operator-level qualification policy for Apo's London BTR portfolio.

---

## Operator identity and status

**Apo Group** (branded `a-part-of.com`) is a dedicated BTR operator owned by **BlackRock**. Not an apart-hotel. Real tenancies via standard UK Assured Shorthold Tenancy. London portfolio is **Apo Kew Bridge** (487 units, Brentford TW8) with additional schemes at **Barking Wharf** and **Hayes (The Gatefold)** per brent-cross-town.ts research commentary.

Active operator — HomeViews 4.46/5 across 97 reviews, ranked 1st of 12 in Brentford, 2025 HomeViews awards for Management/Excellence/Value.

Only dataset project in scope for this batch: `apo-kew-bridge` (kew-bridge-brentford).

---

## Structural qualification policy

Apo publishes a comparatively rich FAQ. Two published fallbacks for tenants with documentation gaps are the operator's defining qualification feature.

Evidence from a-part-of.com/faqs and a-part-of.com/blog/renting-kew-bridge:

| Field | Value | Evidence |
|---|---|---|
| `agreement_type` | `ast` | Standard AST; post-RRA becomes automatically periodic after minimum term |
| `referencing_provider` | `"other"` — **Reference My Tenant (RMT)** | Verbatim: "we use Reference My Tenant" |
| `min_tenancy_months` | `12` | Standard 12-month; flexibility for shorter/longer on enquiry |
| `income_multiple` | `30` | RMT default criteria: annual income ≥ 30× monthly rent (`£800/mo × 30 = £24,000/yr`) |
| `open_banking_accepted` | `"unclear"` | RMT supports Open Banking generically; not Apo-specific confirmed |
| `upfront_rent_policy` | `"one-month-ast-cap"` | AST — RRA-1-month cap applies, but advance-rent fallback IS published (see below) |
| `accepts_professional_guarantor` | `"unclear"` | **No mention in FAQ of Housing Hand or corporate guarantor services.** RMT supports guarantor references but Apo-specific acceptance of Housing Hand unverified — direct enquiry is the deciding question |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Topic not addressed in FAQ |
| `credit_check` | `"standard"` | Standard RMT credit check — outstanding debts / CCJs screened. Adverse credit routed to advance-rent fallback |
| `international_tenant_policy` | `"accepted-case-by-case"` | Verbatim: "supplying ID and any visas to confirm your right to rent in the UK" — visa-holder friendly, no explicit welcome language |
| `visa_expiry_handling` | `"unclear"` | Not explicitly addressed; visa checked for right-to-rent but post-signing handling unstated |
| `qualification_flexibility_signal` | `"flexible"` | Two published fallbacks (advance rent + Flatfair No Deposit) signal institutional openness to non-standard qualification |

### The two published fallbacks — Apo's defining qualification feature

1. **Advance rent for failed referencing (verbatim):**
   > "If we're not able to confirm your income status during the referencing process, we may ask you to pay the rent in advance."
   Post-RRA (May 2026) this is capped at 1 month for ASTs, substantially weaker than pre-RRA when multi-month upfront was operative. Still published as a fallback signalling the operator will work with applicants.

2. **Flatfair No Deposit option:**
   > "1 week's rent (+VAT), non-refundable" replaces traditional 5-week deposit. Reduces upfront cost significantly. Tenant remains liable for arrears/damages. **This is confirmed operational at Kew Bridge.**

### Flatfair referencing criteria (if Flatfair No Deposit is used)

From help.flatfair.co.uk:
- Tenants fully referenced via third-party provider
- Gross annual income ≥ 30× monthly rent
- If rent-in-advance condition is triggered on the reference report, full upfront for the tenancy is required (note: this pre-dates RRA, and post-RRA the advance-rent option is AST-capped at 1 month — the Flatfair documentation may not yet reflect this)

---

## Pricing

From a-part-of.com/places/kew-bridge and housing-shortlist.md prior research:

- **Studio:** from ~£1,750/mo (current per prior shortlist research)
- **1-bed:** not separately surfaced in current search — prior research indicated `min: 1750, max: 2400` range
- Bills: **all-inclusive monthly payment** covering utilities
- Council tax: separate (tenant-paid)
- `price_transparency: "listed"` — verified

Prior dataset `preview` states "studios from £1,400/mo" which dates from earlier research — this is likely stale. Current pricing is ~£1,750/mo per the 2026-04-16 shortlist round. **Proposal:** update preview to reflect current pricing.

---

## Realism derivation for Caner

Apo is a structurally `achievable-with-guarantor` operator for Caner with conditional pathways:

| Pathway | Rule | Apo status |
|---|---|---|
| `standard-passable` | All four of credit=lenient, OB=yes, welcomed, visa-ignored | ❌ credit is standard, OB is unclear |
| `with-professional-guarantor` | accepts_professional_guarantor=yes | ❌ `"unclear"` — Housing Hand acceptance unverified |
| `with-savings` | Homeppl + OB=yes | ❌ Apo uses RMT not Homeppl; the savings pathway depends on Homeppl's specific 36× rule |
| `with-co-signer-overseas` | accepts_individual_overseas_guarantor=yes | ❌ `"unclear"` |
| `with-upfront-licence` | licence + multi-month | ❌ AST |
| `licence-exempt-light-ref` | licence + none/in-house | ❌ AST |

**No pathway structurally clears** under the derivation rules — however, Apo has **two published fallbacks** (advance-rent and Flatfair No Deposit) that function as structural flex levers. The current state `realism: "achievable-with-guarantor"` is the right judgement call: preserve as explicit-authored state, reflecting the published fallback mechanisms even though strict pathway derivation would yield empty.

**The operating question** (unchanged from prior research): Does RMT accept Housing Hand as a corporate guarantor? Direct enquiry via Apo's Kew Bridge contact (yourhostKEW@a-part-of.com / 020 8146 5040) is the deciding question.

---

## Sources

- https://a-part-of.com/faqs — canonical FAQ with referencing, guarantor, deposit details
- https://a-part-of.com/blog/renting-kew-bridge — Kew Bridge specific renting guide
- https://a-part-of.com/places/kew-bridge — property listing
- https://a-part-of.com/places/kew-bridge/1-bed — 1-bed pricing
- https://www.homeviews.com/development/apo-kew-bridge-tw8 — HomeViews 4.46/5 reviews
- https://help.flatfair.co.uk/hc/en-gb/articles/360015747420-What-are-flatfair-s-referencing-criteria-for-private-tenants — Flatfair referencing criteria
- https://help.flatfair.co.uk/hc/en-gb/articles/360015772439-What-does-flatfair-consider-rent-in-advance — Flatfair advance rent rules
- https://btrnews.co.uk/first-glimpse-of-apo-kew-bridge-btr-scheme/ — press on BTR launch
- https://www.linkedin.com/posts/ben-east-a3622740_apo-kew-bridge-marks-launch-of-btr-apartments-activity-6904396867866890241-flm9 — Flatfair confirmed at launch

All accessed 2026-04-16.
