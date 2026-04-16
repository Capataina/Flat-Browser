# Quintain Living — data-upkeep proposals

Operator: **Quintain Living**
Research round: 2026-04-16
Dataset projects in scope: 10
Confidence: high on operator-level fields, medium on per-building ownership/operator attributions

---

## Operator-level qualification facts

These values apply to all 10 Quintain-Living-attributed projects unless overridden in the per-project variations table below.

| Field | Proposed value | Evidence |
|---|---|---|
| `agreement_type` | `"ast"` | Quintain RRA blog describes the shift to assured-periodic-tenancies from 1 May 2026; RRA framework only applies to ASTs. `/terms-and-conditions` references "Tenancy Agreement" generically. |
| `referencing_provider` | `"homeppl"` | Homeppl case study names Quintain. FAQ 2026 wording no longer names provider publicly ("one of our trusted partners") but the Open-Banking-first workflow described matches Homeppl exactly. |
| `min_tenancy_months` | `3` | FAQ verbatim: "flexible tenancies, from 3 months to 24 months." |
| `income_multiple` | `30` | FAQ verbatim: "household income of 2.5x the annual rent" = 30× monthly. |
| `open_banking_accepted` | `"yes"` | FAQ verbatim: "via Open Banking (quickest and easiest way)." |
| `upfront_rent_policy` | `"one-month-ast-cap"` | AST + post-RRA (1 May 2026) advance-rent cap at 1 month. FAQ still advertises "6 months of rent" in advance — may function as a goodwill substitute but cannot be legally required beyond 1 month on a new AST after 1 May 2026. |
| `accepts_professional_guarantor` | `"unclear"` | FAQ describes guarantor as "family member, for example" with UK-base requirement. Corporate services not named. Direct enquiry needed. **Historical Homeppl case study mentions Guarantid as the solution for internationals — this is the load-bearing unverified question.** |
| `accepts_individual_overseas_guarantor` | `"no"` | FAQ verbatim: "Guarantors need to give proof of an individual income of 5x the annual rent **and be based in the UK**." |
| `credit_check` | `"lenient"` | No published credit-score floor; Homeppl stack is designed for thin-credit internationals (case study confirms). |
| `international_tenant_policy` | `"welcomed"` | FAQ verbatim: "Many of our residents relocating from other countries do this every year." Homeppl adoption was specifically to serve internationals. |
| `visa_expiry_handling` | `"unclear"` | Not addressed anywhere on the operator site. FAQ, T&Cs, and RRA blog all silent. |
| `qualification_flexibility_signal` | `"flexible"` | FAQ explicitly offers upfront-rent as an alternative qualification route. Historical case study language emphasised solving international friction. Trustpilot 4.5 / HomeViews 4.24 (Landsby) neither flag rigidity nor document deviation — neutral signal from reviews, positive signal from FAQ posture. |

---

## Suggested realism pathways (per Caner's profile)

Derivation table (operator-level; overridden per-project below if operator changes):

| Pathway | Rule | Fires? | Reason |
|---|---|---|---|
| `standard-passable` | All four structural fields clear (credit lenient + OB yes + int'l welcomed + visa handled) | **no** | `visa_expiry_handling: "unclear"` breaks the full-path confidence. |
| `with-professional-guarantor` | `accepts_professional_guarantor: "yes"` | **no** | `"unclear"` — do not add on unverified field per `realism-pathway-derivation.md`. |
| `with-savings` | `referencing_provider: "homeppl"` AND `open_banking_accepted: "yes"` | **yes** | Both conditions met. Homeppl's 36× savings route is documented; Caner can capitalise ~£70k+ via parental transfer. |
| `with-co-signer-overseas` | `accepts_individual_overseas_guarantor: "yes"` | **no** | `"no"` — explicit UK-base requirement. |
| `with-upfront-licence` | Licence + multi-month | **no** | AST. |
| `licence-exempt-light-ref` | Licence + in-house/none + lenient | **no** | AST. |

**Proposed `realism_pathways`**: `["with-savings"]`

**Proposed `grad_visa_realism`** (via `deriveRealism(["with-savings"], preserved="achievable")`):
- Current dataset state is `"achievable"` for all 10 Quintain buildings — this is an authored state (not `"blocked"` / `"unlikely"` / `"unclear"`, so not preserved).
- Pathway derivation: `with-savings` → rule 3 → **`"achievable-with-guarantor"`**.
- The existing `"achievable"` state is too optimistic; downgrade to `"achievable-with-guarantor"` to reflect that the route requires Caner to demonstrate savings via Open Banking rather than the standard income-multiple check.

---

## Per-project variations

Structural fields are operator-wide unless called out here.

| Project | Operator confirm | Ownership | Variation from operator defaults | Ghost-flag? |
|---|---|---|---|---|
| Ferrum | Quintain Living | Quintain | Studio 271 promo: £1,829 with 12% off for 31 May 2026 move-in (list: £2,090) | no |
| Canada Gardens | Quintain Living | Quintain | Standard pricing; 4% off promotional discount (31 May 2026 move-in) | no |
| Beton | Quintain Living (management contract) | **KKR (since Jan 2024)** | Not on current /apartment-buildings page; enquire-only pricing; ownership change should be noted. Operator attribution remains Quintain per wembleymatters source | no (keep attribution), note ownership |
| Landsby East | Quintain Living | Quintain | Part of the unified Landsby building on quintainliving.com; units labelled "X Landsby East" | no |
| Landsby West | Quintain Living | Quintain | Part of the unified Landsby building; units labelled "X Landsby West" | no |
| Madison | Quintain Living | Quintain | Standard pricing; 12% promo on 1-bed (£2,254 from £2,575, 31 May 2026 move-in) | no |
| Alameda | Quintain Living (management contract) | **KKR (since Jan 2024)** | Not on current /apartment-buildings page; enquire-only pricing; ownership change should be noted. Operator attribution remains Quintain per wembleymatters source | no (keep attribution), note ownership |
| Alto | **Tene Living (per press)** conflicting with live `/alto` page | **Goldman Sachs + Tene Living (since Dec 2023)** | Press release names Tene Living as manager. Quintain `/alto` page still live (incl. student offer). Not on main portfolio page. | **Yes — Category B (wrong-operator candidate)**. Proposed action: update operator to `"Tene Living"` OR mark `"unclear"` pending direct confirmation. |
| Luna | Quintain Living | Quintain | Standard pricing; 16% off on studio (£1,746 from £2,095, 31 May 2026 move-in) | no |
| Emerald Gardens | Likely **Wembley Park Residential** (agency) or mixed | Montana + Dakota sold to GS/Tene; rest Quintain | No `/emerald-gardens` page on quintainliving.com; rentals surface via OnTheMarket via Wembley Park Residential. Predates the "Quintain Living" brand (Tipi-era, 2016). | **Yes — Category B (wrong-operator candidate)**. Proposed action: update operator to `"Wembley Park Residential"` OR mark `"unclear"` pending direct confirmation. |

---

## Pricing (verified 2026-04-16)

All prices are monthly GBP, taken from the individual building pages on quintainliving.com where available. Prices shown include the 31 May 2026 move-in 9-12 month promotional discount unless flagged as list-price. Bills (utilities + 250 Mbps wifi) are included in all actively-marketed Quintain buildings.

| Project | studio.min | studio.max | one_bed.min | one_bed.max | two_bed.min | two_bed.max | bills_included | price_transparency | cost_tier |
|---|---|---|---|---|---|---|---|---|---|
| Ferrum | 1829 | 2090 | 2265 | 2265 | 2464 | 2816 | true | listed | mid-range |
| Canada Gardens | 2135 | 2135 | 2336 | 2437 | 2814 | 2936 | true | listed | premium |
| Beton | — | — | — | — | — | — | true (inferred) | enquire | premium (inferred) |
| Landsby East | — | — | 2144 | 2450 | 2875 | 3136 | true | listed | premium |
| Landsby West | — | — | 2144 | 2450 | 2875 | 3136 | true | listed | premium |
| Madison | 2116 | 2116 | 2254 | 2575 | 3121 | 3121 | true | listed | premium |
| Alameda | — | — | — | — | — | — | true (inferred) | enquire | premium (inferred) |
| Alto | — | — | — | — | — | — | true (inferred) | enquire | premium (inferred) |
| Luna | 1746 | 2095 | 2612 | 2612 | 2962 | 3231 | true | listed | mid-range (studio floor) |
| Emerald Gardens | — | — | 1900 | 1900 | 2200 | 2200 | varies (secondary mkt) | enquire | affordable |

Notes on cost_tier derivation:
- Ferrum: studio £1,829 promo → `mid-range` (£1,600-2,000).
- Canada Gardens: studio £2,135 → `premium` (£2,000-2,800).
- Landsby: 1-bed floor £2,144 → `premium`.
- Madison: studio £2,116 → `premium`.
- Luna: studio £1,746 promo → `mid-range` (the floor wins).
- Emerald Gardens: 1-bed £1,900 from OnTheMarket listings → `affordable` (£1,200-1,600) is too low — should be `mid-range` at £1,900. Re-checking: £1,900 is mid-range. **Corrected: `mid-range`.**

---

## Ghost-project flags

### Alto — Category B (wrong-operator candidate)

- **Evidence**:
  1. Goldman Sachs Asset Management press release (Jan 2024) confirms acquisition of Alto + Montana + Dakota from Quintain.
  2. Urban Living News verbatim quote from the press release: "The buildings, which were developed and operated by Quintain, comprise 261 units which will be **managed by Tene Living**."
  3. `quintainliving.com/apartment-buildings` (verified 2026-04-16) does NOT list Alto.
- **Counter-evidence**:
  1. `quintainliving.com/alto` is still a live page with current promotional pricing (31 May 2026 move-in discount).
  2. `quintainliving.com/students-alto` exists as a dedicated student offer page.
- **Recommendation**: flag for user confirmation. Two viable actions:
  - Change operator to `"Tene Living"` and re-research qualification under Tene's stack.
  - Mark operator `"unclear"` and `grad_visa_realism: "unclear"` pending direct enquiry to both Quintain and Tene Living.
- **Blast radius**: search `src/areas/data/wembley-park.ts` for "alto" — one project, listed alongside other Quintain buildings in area commentary. No cross-references in other area files. Low blast radius.

### Emerald Gardens — Category B (wrong-operator candidate)

- **Evidence**:
  1. Emerald Gardens predates the Quintain Living brand (completion 2016, Tipi-era).
  2. Montana and Dakota — two blocks within Emerald Gardens — sold to GS/Tene in Dec 2023.
  3. `quintainliving.com/apartment-buildings` does NOT list Emerald Gardens.
  4. No `/emerald-gardens` URL on quintainliving.com.
  5. Actual rental listings for Emerald Gardens surface via OnTheMarket, with Wembley Park Residential as the listing agent.
- **Counter-evidence**:
  1. Quintain Ltd (not Quintain Living) does list Emerald Gardens on its corporate site at `/wembley-park/locations/emerald-gardens`.
  2. Wembley Park Residential is Quintain Ltd's in-house agency.
- **Recommendation**: flag for user confirmation. Operator is most accurately `"Wembley Park Residential"` (acting as agent for individual Quintain-developed sales units being re-let) rather than `"Quintain Living"` (the BTR operator brand). This reclassifies Emerald Gardens out of the BTR campus into the secondary-market / agent-managed category per `operator-research-playbook.md` § "Secondary-market categories".
- **Blast radius**: search `src/areas/data/wembley-park.ts` for "emerald-gardens" — one project. No cross-references elsewhere. Low blast radius.
- **Grade impact**: Wembley Park area grade rests on 7+ other Quintain buildings. Removing Emerald Gardens from the BTR campus does not invalidate T1.2 or T1.4. No grade-recalibration trigger.

### Beton and Alameda — notes only, not flagged

- Owned by KKR since Jan 2024 but Quintain was explicitly retained as operator ("appointed Quintain to manage"). Operator attribution is defensible. These are NOT on the consumer `/apartment-buildings` page but the operator stack for qualification purposes is still Quintain's.
- Recommendation: keep `operator: "Quintain Living"`, add `preview` or `notes` mention of KKR ownership for transparency, set `price_transparency: "enquire"` because pricing is not on the public site.

---

## Notes (suitable for each project's `notes` field)

**Operator-level narrative (for 6 clean-match buildings — Ferrum, Canada Gardens, Landsby East, Landsby West, Madison, Luna):**

> Quintain's Homeppl stack supports a savings-based qualification route for Open-Banking-demonstrable applicants — the primary verified pathway for Caner. The professional-guarantor pathway is unverified: the 2026 FAQ only mentions "family member" guarantors with a UK-base requirement, omitting the Guarantid / corporate guarantor language present in historical Homeppl case studies. Direct enquiry about corporate-guarantor acceptance is the single highest-value question. Advance-rent as a qualification substitute is advertised (6 months upfront) but legally capped at 1 month for new ASTs from 1 May 2026 — Quintain's post-RRA posture on goodwill upfront offers is untested.

**For Beton / Alameda (KKR-owned, Quintain-operated):**

> KKR acquired Beton and Alameda from Quintain in Jan 2024 but retained Quintain Living as operator — qualification policies follow Quintain's standard stack (see operator notes). Pricing is no longer on Quintain's public rentals page and requires direct enquiry.

**For Alto (disputed operator):**

> Alto was sold to Goldman Sachs / Tene Living in Dec 2023 with press confirmation that Tene Living is the day-to-day manager. Quintain's /alto page remains live with promotional pricing, suggesting a transitional or shared management arrangement. Operator attribution should be treated as unclear until direct confirmation — the qualification stack differs between Quintain (Homeppl, 30× income, family-guarantor) and Tene Living (unknown stack).

**For Emerald Gardens (secondary-market):**

> Emerald Gardens predates the Quintain Living BTR brand (completion 2016) and is not on Quintain Living's current rentals portfolio. Individual units re-let via Wembley Park Residential agency on OnTheMarket — this is secondary-market / agent-managed rental rather than operator-managed BTR. Qualification varies per listing; no single referencing stack applies.

---

## Sources

(Full source table is in `/context/data-upkeep/operators/quintain-living.md`. Summary below for proposal-level citation.)

| URL | Label | Type | Accessed |
|---|---|---|---|
| https://www.quintainliving.com/faqs | Quintain FAQ (primary operator policy source) | operator | 2026-04-16 |
| https://www.quintainliving.com/apartment-buildings | Current portfolio list (authoritative) | operator | 2026-04-16 |
| https://www.quintainliving.com/blog/renters-rights-act-what-it-means-for-london-renters | Quintain RRA blog | operator | 2026-04-16 |
| https://www.quintainliving.com/ferrum | Ferrum pricing page | operator | 2026-04-16 |
| https://www.quintainliving.com/canada-gardens | Canada Gardens pricing | operator | 2026-04-16 |
| https://www.quintainliving.com/landsby | Landsby (East + West) pricing | operator | 2026-04-16 |
| https://www.quintainliving.com/madison | Madison pricing | operator | 2026-04-16 |
| https://www.quintainliving.com/luna | Luna pricing | operator | 2026-04-16 |
| https://www.quintainliving.com/alto | Alto live page (contested) | operator | 2026-04-16 |
| https://www.homeppl.com/lp/case-study-quintain-living/ | Homeppl case study | press | 2026-04-16 |
| https://wembleymatters.blogspot.com/2024/01/quintain-sell-off-two-more-wembley-park.html | KKR Alameda + Beton deal | press | 2026-04-16 |
| https://urbanliving.news/build-to-rent/goldman-sachs-buys-wembley-btr-assets-from-quintain-living/ | GS/Tene Alto + Montana + Dakota deal | press | 2026-04-16 |
| https://benews.co.uk/goldman-sachs-and-tene-living-acquire-261-btr-units-from-quintain-at-wembley-park/ | BE News confirmation of GS/Tene deal | press | 2026-04-16 |
| https://www.trustpilot.com/review/quintainliving.com | Trustpilot (4.5/5, 960 reviews) | trustpilot | 2026-04-16 |
| https://www.homeviews.com/development/landsby-wembley-park-ha9 | HomeViews Landsby (4.24/5, 98 reviews) | homeviews | 2026-04-16 |
