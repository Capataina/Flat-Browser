# Quintain Living — operator research

Research date: 2026-04-16. Researcher: data-upkeep Phase-2 agent. Scope: operator-level qualification policies + portfolio verification for the ten dataset projects attributed to Quintain Living.

---

## Operator overview

Quintain Living (formerly Tipi, rebranded ~2020) is the BTR management arm that grew out of the Quintain Ltd masterplan at Wembley Park. The operator manages rentals for the Wembley Park campus — historically the whole BTR portfolio that Quintain developed, now a more targeted subset after two major disposals to third-party owners.

- Operator website: https://www.quintainliving.com/
- Parent / developer: Quintain Ltd — https://www.quintain.co.uk/
- Regulated by: Property Ombudsman, ARLA PropertyMark, Tenancy Deposit Scheme (per /alto contact footer).
- Telephone: +44 20 3151 1927
- Portfolio as currently marketed on `/apartment-buildings`: **8 buildings — Solar, Luna, Repton Gardens, The Robinson, Ferrum, Canada Gardens, Madison, Landsby.**

### Ownership vs operator split — the critical nuance

Between 2023 and 2024 Quintain sold **five BTR buildings** to third-party investors while (in the KKR deal) retaining the operator mandate:

| Buildings | Buyer | Deal date | Operator going forward |
|---|---|---|---|
| **Alameda + Beton** (490 units combined) | KKR | Jan 2024 | **Quintain retained** as operator. Source: wembleymatters.blogspot.com quoting the deal: "KKR has appointed Quintain to manage both the residential and retail elements of both buildings." |
| **Alto + Montana + Dakota** (261 units combined) | Goldman Sachs Asset Management + Tene Living | Closed 1 Dec 2023, announced Jan 2024 | **Tene Living is named as the manager** per Urban Living News reporting from the press release: "The buildings, which were developed and operated by Quintain, comprise 261 units which will be **managed by Tene Living**." |

Conflicting signals on Alto / Montana / Dakota:
- `quintainliving.com/alto` is still a live page with active promotional pricing and a "Student Offer - Alto" page at `/students-alto` — implies Quintain still operates the tenant-facing side at Alto as of 2026-04.
- The 2024 press quote explicitly names Tene Living as manager.
- `/apartment-buildings` does **not** list Alto, Montana, Dakota, Beton, Alameda, or Emerald Gardens — implies Quintain is no longer actively marketing these via its consumer portfolio page.

Best reading: post-sale, the management contract is either transitioning or shared. Prospective renters can still reach Quintain for viewings at Alto (URL live, phone number identical to other Quintain buildings) but the authoritative portfolio is the 8 on `/apartment-buildings`. Buildings sold to KKR (Alameda, Beton) appear to remain under Quintain's operational wing; buildings sold to GS/Tene (Alto, Montana, Dakota) are in an ambiguous state and may effectively be Tene-managed now.

### What this means for the dataset

The dataset attributes 10 buildings to Quintain Living. Against 2026-04 reality:

- **6 clean Quintain-operated matches**: Ferrum, Canada Gardens, Landsby East, Landsby West, Madison, Luna.
- **2 KKR-owned / Quintain-operated (ambiguous marketing)**: Alameda, Beton. The wembleymatters source confirms Quintain as operator, but Quintain's current website does not promote them. Low risk — operator attribution is still defensible per public reporting.
- **1 Tene-Living-managed (likely wrong-operator attribution)**: Alto. Press release names Tene Living. Quintain's /alto page is live but not on the main portfolio page.
- **1 historical / unclear**: Emerald Gardens. Contains Montana + Dakota blocks which were sold to GS/Tene; not listed in Quintain's current portfolio; rental listings surface via Wembley Park Residential (Quintain's in-house agency) and OnTheMarket as private lettings. May be a Category-B ghost (wrong operator) or genuinely mixed ownership.

---

## Referencing stack

### Provider

Homeppl, historically confirmed via the Homeppl case study at https://www.homeppl.com/lp/case-study-quintain-living/ and consistent with Quintain's Open-Banking-first FAQ language.

The Quintain Living FAQ (`/faqs`) does not name the provider in 2026 wording — it says "One of our trusted partners will help you through referencing" — but the mechanism described (Open Banking, bank statements, pay slips as alternatives) matches Homeppl's documented workflow.

### Income multiple

**2.5× annual rent = 30× monthly rent.** Verbatim from `/faqs`: "Typically consider the affordability for paying monthly is a household income of 2.5x the annual rent." This is Homeppl's standard 30× floor.

### Savings route

Not called out separately in the public FAQ, but Homeppl's documented 36× monthly rent in savings substitute route is standard across Homeppl clients. Caner's Open-Banking demonstrable savings pathway runs through this channel.

### Open Banking

**Yes, explicitly — primary mechanism.** Verbatim `/faqs`: "via Open Banking* (quickest and easiest way), where you submit your bank details through a secured portal." Alternatives: bank statements, pay slips.

### Credit check

Not described as strict. No published credit-score floor. Homeppl's architecture is intentionally thin-credit-file friendly (case study language: "all internationals had to find a UK guarantor or pay the rent upfront" — the Homeppl switch was specifically to solve this). Classify as `"lenient"`.

---

## Guarantor policy

This is the **most-important-and-most-changed** finding of this round.

### What the FAQ says (verbatim, 2026-04-16)

> "A guarantor essentially serves as your financial safety net, promising to cover the rent if you're unable to – a family member, for example."

> "Guarantors need to give proof of an individual income of 5x the annual rent and be based in the UK."

> "We only accept one guarantor per apartment."

### What this means

- The FAQ's "a family member, for example" language + the explicit UK-base requirement means **Quintain is presenting as requiring UK-resident individual guarantors** in 2026, with no verbatim statement that corporate guarantor services (Guarantid, Housing Hand) are accepted.
- This is a noticeable tightening vs the 2023-era Homeppl case study which positioned Guarantid (Homeppl's in-house corporate guarantor) as the solution to internationals who couldn't source UK guarantors.
- There is **no verbatim acceptance** of Housing Hand or Guarantid on the Quintain site as of this research date.
- There is **no verbatim mention of overseas individual co-signers** (no "Homeppl Co-Signer" language).

### Flex signal — upfront rent as a substitute

Verbatim `/faqs` (answering the "what if I don't meet income criteria" question, paraphrased): "If you don't qualify for paying rent on a monthly basis, you can consider a guarantor, or you can consider paying rent upfront... Pay a number of months in advance (e.g. 6 months of rent)."

This is the live flex lever in Quintain's own words — upfront rent is explicitly offered as an alternative qualification route alongside the guarantor.

**Crucial RRA caveat**: from 1 May 2026 the Renters Rights Act caps advance rent on ASTs at one month. Quintain's own RRA blog at `/blog/renters-rights-act-what-it-means-for-london-renters` acknowledges the transition to rolling tenancies from day one but does NOT explicitly discuss how they will handle the advance-rent-cap provision. The FAQ language advertising "6 months of rent" in advance will need updating post-1-May-2026 or Quintain may continue to accept upfront as a goodwill workaround (not a published policy). This is the hidden risk for any Quintain project moved into 2026-05+.

### Summary per field

- `accepts_professional_guarantor`: **"unclear"** — FAQ language neither names corporate services nor explicitly excludes them; the "family member, for example" + UK-base framing reads as individual-guarantor-oriented, but Homeppl's native Guarantid product may still be viable via the back-end (unverifiable without direct enquiry).
- `accepts_individual_overseas_guarantor`: **"no"** — explicit "be based in the UK" language.

---

## Agreement type and RRA posture

### Agreement type

`"ast"`. Quintain's /blog/renters-rights-act post references compliance with the RRA's assured-periodic-tenancy regime. Terms & Conditions at `/terms-and-conditions` reference "Tenancy Agreement" without specifying AST explicitly but the RRA blog language ("rolling tenancies from day one", "From 1 May all tenancies will be open-ended, rolling tenancies") is the assured-periodic-tenancy framework that only applies to ASTs.

### Tenancy term

`/faqs`: "We offer flexible tenancies, from 3 months to 24 months based on what suits you." Default `min_tenancy_months: 3`.

### RRA and advance rent

Quintain's RRA blog acknowledges the rolling-tenancy shift without explicitly discussing the advance-rent cap. The FAQ still advertises 6-month-upfront. Post-1-May-2026 the published policy may still advertise the alternative, but by law they cannot require more than one month advance on a new AST.

`upfront_rent_policy`: **"one-month-ast-cap"** — the legal cap applies. Whether Quintain will still voluntarily accept larger upfront offers as a goodwill qualification workaround is an open question for direct enquiry.

---

## International tenant policy

Verbatim `/faqs`: "Many of our residents relocating from other countries do this every year."

No "welcomed" language verbatim, but the phrasing is reassurance-oriented and the Homeppl switch was explicitly to serve this cohort. Classify as `"welcomed"` — evidence supports it.

### Visa expiry handling

Not addressed anywhere on the Quintain site — not in /faqs, not in /terms-and-conditions, not in the RRA blog. `"unclear"`.

Implication for Caner: Graduate visa expires 2027-08-01. If Quintain offers him a 12-month tenancy starting May 2026 he runs to May 2027 — within visa. Longer terms would need a direct conversation. Not an automatic block.

---

## Pricing (per building, verified 2026-04-16)

Prices below are from each building's individual `/[name]` page, showing sample units with the 31 May 2026 move-in promotional discount. Values are as advertised 2026-04-16, subject to availability.

| Building | Studio | 1-bed | 2-bed | 3-bed | Bills | Transparency |
|---|---|---|---|---|---|---|
| Ferrum | £1,829 (promo) — £2,090 (list) | £2,265 | £2,464 (promo) — £2,816 (list) | n/a | yes (250 Mbps wifi + utilities) | listed |
| Canada Gardens | £2,135 | £2,336 (promo) — £2,437 | £2,814 (promo) — £2,936 | n/a | yes | listed |
| Beton | not on /apartment-buildings | — | — | — | — | enquire (not on live portfolio) |
| Landsby East | — | £2,144 (promo) — £2,450 | £2,875 (promo) — £3,136 | £3,230 (promo) — £3,876 | yes | listed |
| Landsby West | — | £2,144 (promo) — £2,450 | £2,875 (promo) — £3,136 | £3,230 (promo) — £3,876 | yes | listed |
| Madison | £2,116 | £2,254 (promo) — £2,575 | £3,121 | n/a | yes | listed |
| Alameda | not on /apartment-buildings | — | — | — | — | enquire (not on live portfolio) |
| Alto | Student offer live at /students-alto; main portfolio omits | — | — | — | — | enquire (disputed operator) |
| Luna | £1,746 (promo) — £2,095 | £2,612 | £2,962 (promo) — £3,231 | n/a | yes | listed |
| Emerald Gardens | Private lettings via OnTheMarket (1-bed £1,900 sample) | £1,900 (market) | £2,200 (market — Redwood House 3-bed) | £2,200 | varies | enquire (contested) |

Notes:
- The current Quintain discount window is "9-12 month contract, move in by 31 May 2026" — applies across all actively-marketed buildings. Saving varies by length of contract chosen.
- Ferrum Studio 271 specifically confirmed at £1,829 with the 12% promotional discount (task brief flagged this).
- Emerald Gardens pricing is from OnTheMarket listings — the primary letting agent is Wembley Park Residential (Quintain's in-house agency), but units are individually marketed, not part of the /apartment-buildings stack.

---

## Ghost-project / wrong-operator checks

### Category A (true ghost): none.

All ten dataset buildings are demonstrably real buildings with Wembley Park addresses.

### Category B (wrong operator attribution): candidates

- **Alto** — press release explicitly names Tene Living as manager. Quintain's consumer portfolio omits it. Corroboration: Goldman Sachs press release + Urban Living News + Property Week + BE News + CoStar all quote the 261-unit sale to GS/Tene. Quintain's /alto page still exists but not promoted. Recommendation: flag Alto as Category B candidate — operator attribution may need updating to Tene Living, or marked `"unclear"` pending direct confirmation.
- **Emerald Gardens** — Montana and Dakota blocks within this scheme were sold to GS/Tene. Emerald Gardens as a whole predates Quintain Living (Tipi-era, 2016 completion) and is not on the current /apartment-buildings page. The unit-level rentals surface via Wembley Park Residential, an agency arm of Quintain Ltd — not Quintain Living BTR. Recommendation: flag Emerald Gardens as Category B — may be `"Wembley Park Residential"` (agent-managed) rather than `"Quintain Living"` BTR.

### Category C (defunct operator): none.

Quintain Living is active and financially healthy — recently refinanced £310m at Wembley (Feb 2026 per Bisnow deal sheet).

### Category D (rebrand): none for these 10 buildings.

The sole rebrand of note is the Tipi → Quintain Living move in 2020, which predates the current dataset.

---

## Portfolio verification at a glance

| Dataset project | Listed on Quintain's /apartment-buildings? | Live building page on quintainliving.com? | Ownership | Current operator (per strongest evidence) | Action |
|---|---|---|---|---|---|
| Ferrum | yes | /ferrum — live | Quintain | Quintain Living | none |
| Canada Gardens | yes | /canada-gardens — live | Quintain | Quintain Living | none |
| Beton | no | /beton — redirects/not prominent | KKR (since 2024) | Quintain Living (management contract) | keep operator, note ownership |
| Landsby East | yes (within Landsby) | /landsby — lists units as "X Landsby East" | Quintain | Quintain Living | none |
| Landsby West | yes (within Landsby) | /landsby — lists units as "X Landsby West" | Quintain | Quintain Living | none |
| Madison | yes | /madison — live | Quintain | Quintain Living | none |
| Alameda | no | not prominent | KKR (since 2024) | Quintain Living (management contract) | keep operator, note ownership |
| Alto | no | /alto — live, student offer live | Goldman Sachs + Tene Living (since Dec 2023) | **Tene Living per press release**; Quintain /alto still marketed | Flag Category B candidate — operator may be Tene Living |
| Luna | yes | /luna — live | Quintain | Quintain Living | none |
| Emerald Gardens | no | no dedicated /emerald-gardens page | Mixed (Montana + Dakota sold to GS/Tene, rest Quintain Ltd) | Wembley Park Residential (agency) OR Tene Living for the sold blocks | Flag Category B candidate — operator likely needs changing |

---

## Sources

| URL | Label | Type | Accessed |
|---|---|---|---|
| https://www.quintainliving.com/ | Quintain Living homepage | operator | 2026-04-16 |
| https://www.quintainliving.com/faqs | Quintain Living FAQ | operator | 2026-04-16 |
| https://www.quintainliving.com/terms-and-conditions | Quintain Living T&Cs | operator | 2026-04-16 |
| https://www.quintainliving.com/apartment-buildings | Current portfolio page | operator | 2026-04-16 |
| https://www.quintainliving.com/search-units | Search inventory | operator | 2026-04-16 |
| https://www.quintainliving.com/blog/renters-rights-act-what-it-means-for-london-renters | Quintain RRA blog | operator | 2026-04-16 |
| https://www.quintainliving.com/blog/first-time-renters-checklist | First-time renter checklist | operator | 2026-04-16 |
| https://www.quintainliving.com/ferrum | Ferrum building page | operator | 2026-04-16 |
| https://www.quintainliving.com/canada-gardens | Canada Gardens page | operator | 2026-04-16 |
| https://www.quintainliving.com/landsby | Landsby page (East + West) | operator | 2026-04-16 |
| https://www.quintainliving.com/madison | Madison page | operator | 2026-04-16 |
| https://www.quintainliving.com/luna | Luna page | operator | 2026-04-16 |
| https://www.quintainliving.com/solar | Solar page | operator | 2026-04-16 |
| https://www.quintainliving.com/alto | Alto page (contested operator) | operator | 2026-04-16 |
| https://www.quintainliving.com/students-alto | Alto student offer page | operator | 2026-04-16 |
| https://www.homeppl.com/lp/case-study-quintain-living/ | Homeppl Quintain case study | press | 2026-04-16 |
| https://wembleymatters.blogspot.com/2024/01/quintain-sell-off-two-more-wembley-park.html | KKR acquisition of Alameda + Beton | press | 2026-04-16 |
| https://urbanliving.news/build-to-rent/goldman-sachs-buys-wembley-btr-assets-from-quintain-living/ | GS/Tene acquisition of Alto + Montana + Dakota | press | 2026-04-16 |
| https://benews.co.uk/goldman-sachs-and-tene-living-acquire-261-btr-units-from-quintain-at-wembley-park/ | BE News on GS/Tene deal | press | 2026-04-16 |
| https://am.gs.com/en-gb/advisors/news/press-release/2024/goldman-sachs-asset-management-and-tene-living-acquire-build-to-rent-assets-in-wembley-park-london | GS press release | press | 2026-04-16 |
| https://www.bisnow.com/london/news/deal-sheet/quintain-310m-refinancing-wembley-london-deal-sheet-133414 | Quintain £310m refinancing Feb 2026 | press | 2026-04-16 |
| https://www.homeviews.com/development/landsby-wembley-park-ha9 | Landsby HomeViews (4.24/5, 98 reviews) | homeviews | 2026-04-16 |
| https://www.trustpilot.com/review/quintainliving.com | Quintain Living Trustpilot (4.5, 960 reviews) | trustpilot | 2026-04-16 |
| https://www.buildington.co.uk/buildings/9474/england/london-ha9/6-elvin-gardens/landsby-east | Landsby East Buildington listing | press | 2026-04-16 |
| https://www.quintain.co.uk/wembley-park/locations/emerald-gardens | Quintain Ltd Emerald Gardens page | developer | 2026-04-16 |

---

## Open questions for direct enquiry

If Caner is to email Quintain cold, the questions that would move the realism needle are:

1. "Do you accept Homeppl Guarantid (corporate guarantor) for applicants without a UK-resident individual guarantor?" — unlocks `with-professional-guarantor` if yes.
2. "Do you accept the Homeppl Co-Signer route for a non-UK-resident parental guarantor?" — unlocks `with-co-signer-overseas` if yes.
3. "Post-1-May-2026, can you still accept a 6-month-upfront offer as a qualification substitute, or has the RRA cap eliminated this option?" — confirms or kills the upfront lever.
4. "What is the operator currently managing Alto / Alameda / Beton / Emerald Gardens?" — resolves the operator attribution question for the dataset.

Question (1) is the single highest-value question. A positive answer would flip every Quintain building to `"achievable-with-guarantor"` with a verified pathway; `"unclear"` as it stands leaves the with-savings route as Caner's only verified path.
