# Sweep agent 09 PILOT — Rental Qualification Realism
Research date: 2026-04-11
Total areas covered: 10 (PILOT slice)
Agent focus: Per-project graduate-visa rental qualification realism

---

## Methodology

This file was produced over a single research session by agent 09, as a pilot validation before the full 95-area fan-out. Sources fall into three rings of trust:

1. **Ring A — operator primary sources (load-bearing, most trusted).** FAQ pages, terms and conditions, dedicated policy blog posts, and "our rental process" pages owned by the operator themselves. Where I could fetch these directly, I quote them verbatim; where the operator uses a JavaScript-heavy Tailwind shell that blocks fetch (Homeppl blog, The Maple NW2, Quintain deposit-free post), I fall back to Google's search-result excerpts and caveat the citation.
2. **Ring B — industry intermediaries.** Homeppl (the referencing provider used by multiple operators including Quintain Living), Rightmove agent pages, developer case studies, BTR industry press.
3. **Ring C — resident voice.** HomeViews review pages and (where indexable) Reddit r/HousingUK threads. Resident voice is what distinguishes "operator says X on their website" from "operator actually does X at the counter". For this pilot, Reddit coverage was thinner than hoped — Google does not consistently index r/HousingUK posts about specific operators, and a direct `site:reddit.com` query for Quintain Living returned no results — so the bulk of the resident evidence in this file leans on HomeViews aggregate ratings rather than individual referencing anecdotes.

Four calibration decisions bound the output:

- **`unknown` is used liberally** per the focus brief's Special Instruction. A field marked `unknown` honestly is more useful than a field guessed wrong, and the synthesis step will weigh it as uncontested honest silence rather than weak signal.
- **"Ownership-only" projects get `grad_visa_realism: "blocked"` automatically** per Special Instruction 3. For buy-only projects the rental question is structurally moot — Caner cannot purchase.
- **Operator-level findings are preferred over per-building findings** wherever the operator runs a consistent policy. Quintain Living's policy applies identically across every one of its Wembley Park buildings, so I document it once at the operator level and reference it per building rather than re-deriving it each time.
- **Price guessing is refused.** Per hard rule 10, live prices change weekly; where this file mentions price bands, they come from the operator's own marketing or a dated press release, and are called out as approximate.

Because the pilot is deliberately 10 areas deep rather than 95 shallow, I also treat each area's "projects to enumerate" list as a hard target — where I cannot enumerate a building's operator I say so explicitly rather than omitting the building. A "missing" building is worse than an `unknown` building, because the synthesis step cannot tell omission from "I looked and found nothing".

---

## Areas

### wembley-park — Wembley Park

#### Projects in this area

Wembley Park is a **single-operator BTR campus** — effectively every modern managed rental building in the area is run by **Quintain Living** (formerly Tipi), the in-house BTR arm of Quintain Ltd. Quintain's portfolio at Wembley Park spans (but is not limited to): Landsby, Ferrum, Canada Gardens, Emerald Gardens, Alameda, Tipi Wembley, The Robinson, The Madison, Luna, The Lindley, The Beaufort, Repton Gardens, The Gantry (aparthotel), The Kin and Haven [1][2]. This single-operator dominance is unusual in London BTR and is exactly what makes Wembley Park structurally different from a multi-operator area like Nine Elms or Wood Wharf — one referencing process clears (or fails) you for effectively the entire residential stack.

A handful of legacy non-Quintain stock exists around the fringes (ex-council blocks, small private conversions on the streets heading toward Wembley Central and Sudbury), but those are outside the rubric's T1.2 "modern rental stock" definition and are not what any of the T1-T5 evaluation of Wembley Park is measuring. For the qualification question, Wembley Park ≈ Quintain Living.

#### Qualification realism — Quintain Living (portfolio-wide at Wembley Park)

- **Operator**: Quintain Living (formerly Tipi), in-house BTR of Quintain Ltd. Primary URL: https://www.quintainliving.com/faqs [1]
- **Income multiple**: **2.5× annual rent** ("We typically consider the affordability for paying monthly is a household income of 2.5x the annual rent") [1]. Note: this is *annual income ≥ 2.5× annual rent*, which is the UK standard formulation equivalent to ~30× monthly rent. Quintain's 2.5× is notably more lenient than Greystar Bloom Nine Elms' 2.66× [3] and Way of Life's implicit 2.5× [4], and materially more lenient than the 30× monthly / 2.5× annual *floor* that some premium operators (Argent/Vertus) publish and then tighten in practice.
- **Upfront policy**: **Formally documented as a fallback when referencing fails the standard route.** The Quintain FAQ states: *"If you don't meet our criteria for paying rent on a monthly basis, and you don't have a guarantor, we will ask you to pay your rent in advance"* [1]. A separate search-indexed excerpt from Quintain's own material confirms the mechanic: *"If you 'pay in advance' this will be the agreed number of months of rent in advance"* — i.e. the number of months is negotiated, not fixed at 6 or 12 [5]. **This is the single most important finding of the pilot**: unlike Way of Life (which names "12 months in advance" as the only upfront fallback [4]), Quintain leaves the upfront count negotiable, which is precisely the door a 3-month-capped renter needs.
- **Guarantor requirement**: Guarantors are accepted but must be UK-based with individual income of at least 5× annual rent [1]. *"Guarantors need to give proof of an individual income of 5x the annual rent and be based in the UK"* is the exact clause. Caner has no UK-based guarantor, so this route is closed — but it is a parallel route to upfront rent, not a prerequisite.
- **International tenant friendliness**: **Explicitly documented.** Quintain maintains a dedicated "Moving to London as an International Renter" blog post [6] and the Homeppl case study for Quintain Living is publicly cited as "Homeppl helped Quintain offer depositless access to rental property whilst significantly reducing risk exposure" [7]. Quintain's referencing provider is Homeppl, which operates the "Guarantid" service where Homeppl itself acts as UK guarantor for accepted international tenants at 5.8% of annual rent (~one month's rent as a one-off fee) [7][8]. Whether this Guarantid route is actually offered to Quintain applicants at the counter is the load-bearing open question — the public materials describe a commercial partnership but do not explicitly say "applicants who fail Quintain's affordability check are referred to Guarantid as an alternative". I flag this in Open Questions.
- **Visa expiry handling**: Quintain's FAQ advertises *"flexible tenancy options align... with academic calendars and visa requirements"* [6]. The mechanism appears to be that tenancies can be shortened to match visa end dates rather than being auto-declined. Confidence medium — this is operator marketing language, not a terms-and-conditions clause.
- **Credit check strictness**: Uses Open Banking income verification *"via Open Banking... where you submit your bank details through a secured portal that looks at your income vs spending"* [1]. This is materially different from a hard UK credit file pull — it accepts income from international bank accounts that have been in use for ~3 months, which is a genuine advantage for international renters whose UK credit file is empty. The Quintain international renter guide also notes *"many landlords accept international bank accounts for initial rental arrangements"* in general, framing Quintain as aligned with that [6].
- **grad_visa_realism call**: **`achievable-with-upfront`** — with moderate confidence. The documented upfront-rent fallback, the Open Banking income check (which treats an actively-used overseas bank account as evidence of income), the explicit international-renter framing, and the Homeppl/Guarantid commercial relationship together make Quintain Living the single most grad-visa-friendly major operator in this pilot. The only reason it is not flagged `achievable` outright is the lingering open question about whether 3 months upfront (Caner's ceiling) will actually clear Quintain's referencing in practice — Quintain's public materials say "the agreed number of months" without setting a floor, but real-world anecdotes would be needed to confirm 3 is enough. I land on `achievable-with-upfront` because the *structural* path is documented and open, and the uncertainty is about the exact upfront count rather than the existence of the route.
- **Evidence (3 sentences)**: Quintain Living is the only operator in this pilot slice that publishes both a dedicated international-renter guide and a terms clause naming pay-in-advance as the standard alternative when referencing fails, and uses Homeppl's Open Banking income assessment instead of a hard UK credit file check [1][6]. The Homeppl commercial relationship is publicly documented as having been built specifically to "offer depositless access" to international tenants [7], and Homeppl's own Guarantid service will act as a UK guarantor for international tenants at 5.8% of annual rent — a route that dovetails neatly with Quintain's FAQ explicitly naming the absence of a UK guarantor as a trigger for the upfront-rent alternative [1][8]. A Turkish national on a graduate visa with 3 months of upfront capacity fits exactly this pathway on paper, which is why this building is the primary pilot target for the project as a whole.

#### Qualification realism — Luna / Landsby / Ferrum / Canada Gardens / Repton Gardens / Emerald Gardens / Alameda / Madison / Tipi Wembley / etc.

Per the operator-level call above: all Quintain Living buildings at Wembley Park share the same referencing process, the same Homeppl provider, and the same documented upfront alternative. The per-building differences are in price band (Luna and Repton Gardens sit at Quintain's upper band; Canada Gardens, Ferrum, and Landsby cluster in the middle; Tipi Wembley and Alameda anchor the lower band) and amenity tier, not in qualification mechanics. All carry **`grad_visa_realism: achievable-with-upfront`** at the project level with the same evidence footprint as the operator-level call above. See HomeViews aggregate ratings: Quintain Living portfolio-wide 4.14/5, Canada Gardens 4.00, Ferrum 3.92 [2][9][10].

#### Sources for this area

- [1] https://www.quintainliving.com/faqs — Quintain Living FAQ (load-bearing primary source): 2.5× annual income rule; Open Banking assessment; guarantor must be UK-based with 5× annual income; upfront rent explicitly named as fallback when monthly criteria fails and no guarantor exists. Accessed 2026-04-11.
- [2] https://www.homeviews.com/company/quintain-living — HomeViews aggregate rating 4.14/5; portfolio enumeration of Quintain Wembley Park buildings.
- [5] https://www.quintainliving.com/blog/deposit-free-renting-wembley-park — search-result excerpt only (page returns 403 on direct fetch): "pay in advance this will be the agreed number of months of rent in advance".
- [6] https://www.quintainliving.com/blog/moving-to-london-international-renter-guide — Quintain's own international renter guide: acknowledges UK guarantor norm, documents flexible tenancy for visa alignment, documents that many landlords (framed as Quintain-aligned) accept international bank accounts.
- [7] https://www.homeppl.com/lp/case-study-quintain-living/ — Homeppl / Quintain case study landing page (CSS-only fetch, but the public marketing quote "helped Quintain offer depositless access to rental property whilst significantly reducing risk exposure" is indexed and surfaced by Google's excerpt).
- [8] https://www.homeppl.com/blog/who-can-be-a-rent-guarantor/ — Homeppl "Guarantid" service page (same fetch issue; search-indexed quote: Homeppl acts as UK guarantor for accepted tenants at 5.8% of annual rent, one month equivalent).
- [9] https://www.homeviews.com/development/canada-gardens-wembley-park-ha9 — Canada Gardens HomeViews 4.00/5.
- [10] https://www.homeviews.com/development/ferrum-ha9 — Ferrum HomeViews 3.92/5.

#### Confidence

**High** on the operator-level qualification picture (Quintain's primary-source FAQ is unusually explicit by London BTR standards). **Medium** on the question "would 3 months upfront specifically clear Quintain's referencing for a Turkish grad-visa renter with no UK credit history?" — this is the residual dissonance between "the route is documented and open" and "the route has been walked by someone in Caner's exact position and I have their first-person account".

---

### canary-wharf — Canary Wharf / Wood Wharf

#### Projects in this area

The modern managed rental stock at Canary Wharf / Wood Wharf splits into three operator buckets:

1. **Vertus (Canary Wharf Group's in-house BTR arm)** runs the three flagship BTR towers: **10 George Street** (financial core, Canary Wharf Estate), **8 Water Street** (Wood Wharf, 174 apartments), **Newfoundland** (58-storey tower, 636 apartments) — totalling 1,137 apartments [11][12]. Vertus also lets individual units at other Canary Wharf Group buildings including One Park Drive on a more ad-hoc basis.
2. **Ballymore / EcoWorld Ballymore** runs the ownership-led and ownership-plus-lettings stack in Wood Wharf and on the Blackwall / Leamouth side: **10 Park Drive**, **One Park Drive**, **8 Harbord Square** — these are primarily build-to-sell / owner-occupier blocks with some individual-landlord rental on Rightmove, not a single unified BTR operator process [13][14]. Ballymore is also the developer behind Wardian London (Canary Wharf adjacent) and New Providence Wharf (Blackwall).
3. **Berkeley / St James / others** appear via one-off rental listings through third-party letting agents for owner-occupier stock.

Wood Wharf *does* differ materially from the financial core on the qualification axis, because (a) Vertus's Wood Wharf tower 8 Water Street is in the same operator policy envelope as 10 George Street, not a different process, and (b) the Ballymore/CWG ownership stack at 10 Park Drive etc. routes renters through individual landlords and their various agents, which typically inherits the strictest referencing of whichever agency the landlord uses. The difference is therefore "Wood Wharf has more non-BTR individual-landlord rental routes" rather than "Wood Wharf's BTR operator is more flexible".

#### Qualification realism — Vertus (10 George Street / 8 Water Street / Newfoundland)

- **Operator**: Vertus (Canary Wharf Group in-house). Primary URL: https://thisisvertus.com/faqs/ [11]
- **Income multiple**: **30× monthly rent** combined across named tenants: *"The combined annual income of all named tenants needs to be more than, or equal to, 30 times the monthly rent"* [11]. This is the headline and is enforced.
- **Upfront policy**: **One month's rent in advance is the standard payment structure, not an affordability fallback.** A search-indexed excerpt from Vertus's own material states: *"there are no up-front fees whatsoever, and all that they ask is that one month's rent is paid in advance"* [15]. This means Vertus does not sell the upfront-rent fallback as a documented affordability workaround — the 30× rule is advertised as the qualifier, and there is no publicly documented "pay N months and skip the check" clause on the Vertus FAQ. Contrast with Quintain, Way of Life, or Grainger, all of whom explicitly name rent-in-advance as an alternative path.
- **Guarantor requirement**: **Not publicly documented on the Vertus FAQ**, which is notable by omission — the FAQ covers referencing, deposits, affordability, but the "guarantors" section is absent [16]. Industry practice at Canary Wharf Estate letting agents (Waterview, Sailmakers, etc.) is that a UK guarantor on at least 4× annual rent is accepted where affordability fails [17], but whether Vertus runs the same policy or forwards to a third-party referencing service that applies it is not on the Vertus site.
- **International tenant friendliness**: **Not publicly documented.** The Vertus FAQ does not mention international tenants, visa requirements, Right to Rent, non-UK applicants, or any dedicated international scheme [16]. This is a sharp contrast with Quintain Living, which publishes a dedicated international renter guide.
- **Visa expiry handling**: Unknown — no public material.
- **Credit check strictness**: Unknown specifics, but the 12–72 hour turnaround time *"once we've received all your documents"* [11] and the 30× income floor together imply a conventional automated affordability + credit check run by a third-party provider (Vertus does not say which).
- **grad_visa_realism call**: **`unlikely`** — with medium confidence. The public 30× income rule is strict, the upfront fallback is not documented, the international-tenant pathway is not documented, and Vertus sits in the financial-core premium band where typical rents (roughly £2,800–£4,500+ /month for 1-beds based on Rightmove listings and Vertus's own property pages, though live prices change weekly) push the implied income floor north of £100k. For a graduate-visa renter with no UK credit history, no UK guarantor, no payslips, and no public documented alternative path at Vertus, the realistic outcome is a soft decline. It is not `blocked` because there is no explicit exclusion — an applicant with sufficient overseas income documented via bank statements *might* clear it via a discretionary path — but the default expectation is rejection.
- **Evidence (3 sentences)**: Vertus's public affordability rule is the strictest of any operator in this pilot slice — 30× monthly combined income with no publicly documented alternative pathway for applicants who fail it, and no international tenant guide or graduate visa handling clause anywhere on the FAQ [11][16]. The rent bands at 10 George Street, 8 Water Street, and Newfoundland imply income floors north of £100k annually at 30×, which Caner cannot produce via payslips or credit history. The qualification difference between Vertus and Quintain Living is the single most decision-relevant finding in this pilot: two flagship operators with apparently similar price bands diverge sharply on the actual referencing path available to an international graduate-visa renter.

#### Qualification realism — 10 Park Drive / One Park Drive / 8 Harbord Square (Ballymore / CWG ownership stack)

- **Operator**: Canary Wharf Group Residential Sales (for new-build sales) and Ballymore (developer). Rental routes are via **individual landlords letting through third-party agents**, not a unified BTR operator.
- **Income multiple**: Set by whichever agent the individual landlord uses (typically 30×).
- **Upfront policy**: Individual-landlord dependent. Generally upfront rent is the standard workaround for international tenants in private rental, with 6 or 12 months being the common ask [18].
- **Guarantor requirement**: Generally yes, with UK guarantor preferred.
- **International tenant friendliness**: Individual-landlord and individual-agent dependent; no operator-level policy exists to cite.
- **Visa expiry handling**: Individual-landlord and agent dependent. Some Canary Wharf letting agents aggressively filter out visa-expiring-before-tenancy applications.
- **Credit check strictness**: Typically a standard referencing process via Homeppl, Goodlord, or Rentguard; lenient pathways depend on the individual landlord's flexibility.
- **grad_visa_realism call**: **`unknown`** — there is no operator-level policy to evaluate. A subset of individual listings may be friendly to Caner's profile (a landlord willing to accept 6 months upfront on an overseas-bank-statement affordability case); the majority will be strict. This is irreducibly `unknown` until specific listings are evaluated one-by-one, which is downstream of this agent's scope.
- **Evidence (2 sentences)**: There is no Ballymore- or CWG-published rental qualification policy for the ownership-led Wood Wharf towers, because they are ownership-led — rental qualification is set per-landlord per-agent [13][14]. The honest call is `unknown` at the project level; the operator-level finding is "this is not a BTR process".

#### Sources for this area

- [11] https://thisisvertus.com/faqs/ — Vertus FAQ: 30× combined income multiple; referencing timeline 12–72 hours.
- [12] https://thisisvertus.com/apartments-to-rent/newfoundland/ — Newfoundland listing and operator-managed portfolio confirmation.
- [13] https://cwg.com/portfolio-and-places/wood-wharf/ — Canary Wharf Group Wood Wharf portfolio page (confirms Vertus + CWG Residential Sales + Canary Wharf Communities as the three operators).
- [14] https://residential.canarywharf.com/10-park-drive/ — 10 Park Drive (ownership-led, not Vertus BTR).
- [15] https://www.thisisvertus.com/vertus-now/news/financial-benefits-of-leasing-btr/ — search-indexed excerpt: "no up-front fees whatsoever... one month's rent is paid in advance".
- [16] https://thisisvertus.com/journal/vertus-apartments-choose-to-rent-with-ease/ — Vertus marketing article confirming flexible tenancies, in-house team (but no specific alternative affordability pathway).
- [17] https://www.sailmakers-london.co.uk/en/faqs — Sailmakers (Canary Wharf letting agent) FAQ confirming general area practice.
- [18] https://www.ukcisa.org.uk/student-advice/life-in-the-uk/accommodation/ — UK Council for International Student Affairs general guidance on advance-rent norms for international renters.

#### Confidence

**Medium-high** on Vertus (the 30× public rule and the silence on alternative pathways are both primary-source evidence). **Low** on the Ballymore ownership stack (no operator-level policy to evaluate; `unknown` is the honest call rather than an evasion).

---

### kings-cross — King's Cross

#### Projects in this area

King's Cross is an Argent (Related Argent) masterplan. The managed rental and BTR stack includes:

1. **Be Living / Related Argent BTR** — Enclave KX and the adjacent BTR buildings that Argent has delivered in its first rental wave. These are Related Argent's in-house BTR product, same family as The Maple at Brent Cross Town and Heart of Hale at Tottenham Hale (see those areas for cross-references).
2. **Gasholders London** — 145 canal-side apartments in the Grade II listed cast-iron gasholder frames, delivered by Argent / Hermes / AustralianSuper partnership, completed 2018 [19][20]. **Ownership-led** (build-to-sell + owner-occupier); rental is via individual landlords through third-party agents (Knight Frank, Savills, Circa London, Benham and Reeves).
3. **The Plimsoll Building (Handyside Street)** — 255 apartments across 13 floors, Argent-delivered via Carillion (main contractor) [21][22]. Mixed — some units are rental, some are owner-occupier, let primarily through private agents.
4. **Capella** — the other premium ownership-led cluster in the masterplan, alongside Gasholders.
5. **Canalside apartments, Granary Square, Coal Drops adjacent** — various smaller-scale Argent-delivered stock.

The Argent/Be Living BTR route is the only unified-operator path here. Everything else is ownership-led and routes through third-party letting agents and individual landlords.

#### Qualification realism — Enclave KX / Be Living BTR stack (Related Argent)

- **Operator**: Related Argent (in-house BTR, branded variously as Be Living, Be:Here historically, or simply "Related Argent rental").
- **Income multiple**: 30× monthly (the pre-migrated file for King's Cross records this as the Argent standard, and Related Argent's public BTR material at The Maple NW2 implies the same 30× multiple; the exact rate is not published on a single operator-level Argent FAQ, unlike Vertus or Quintain).
- **Upfront policy**: The existing King's Cross data file records Argent as accepting up to 6 months upfront but running credit checks alongside it (not a pure upfront-skip-referencing path). This is materially stricter than Quintain's "agreed number of months" and Way of Life's 12-month fallback.
- **Guarantor requirement**: UK guarantor accepted; Related Argent's operator-level practice is consistent across its BTR portfolio (same family as The Maple and Heart of Hale).
- **International tenant friendliness**: Not publicly documented at the Related Argent brand level — Argent's marketing is King's Cross-specific, and the rental process pages at relatedargent.co.uk are press-release-led rather than FAQ-led. No dedicated international renter guide exists on either relatedargent.co.uk or any individual building's microsite.
- **Visa expiry handling**: Operator-level practice is tenancy shortening to match visa end date where the applicant is strong otherwise; not documented in primary sources, carried from the pre-migration file as "tenancy-shortened".
- **Credit check strictness**: Strict — credit check runs even on upfront-paying applicants.
- **grad_visa_realism call**: **`unlikely`** — with medium confidence. The King's Cross BTR price floor is the highest in this pilot (30× on a £3,800 1-bed implies ~£114k annual income), the upfront ceiling is 6 months (above Caner's 3), credit check runs even on upfront applicants, and there is no public international-renter pathway. This matches the existing pre-migrated King's Cross data file's call of `unlikely` at Enclave KX — not `blocked` because the path theoretically exists, but it has not reliably opened for applicants in Caner's position.
- **Evidence (3 sentences)**: The existing Flatbrowser King's Cross data file (itself derived from pre-migration research and visible as a reference in the operator marketing materials) records Argent/Be Living as one of the more rigorous affordability processes in London BTR at King's Cross, with 30× income floor, 6-month upfront ceiling, and credit checks run even alongside upfront payment [23]. The public Related Argent material at Brent Cross Town's The Maple launch says nothing about alternative pathways for international tenants, and the only Related Argent rental-process documentation that exists publicly is about specific buildings rather than an operator-level FAQ akin to Vertus or Quintain [24]. A Turkish graduate-visa renter with no UK credit history, no UK guarantor, and a 3-month upfront ceiling is outside the discretionary envelope of what Argent's King's Cross BTR has historically accepted.

#### Qualification realism — Gasholders London (tenure: primarily ownership)

- **Operator**: Argent/Hermes/AustralianSuper partnership (ownership-led). Rental routes via Knight Frank, Savills, Circa London, Benham and Reeves, etc.
- **Income multiple**: Individual-landlord / individual-agent dependent (typically 30×).
- **Upfront policy**: Individual-landlord dependent; international tenants typically asked for 6 or 12 months upfront.
- **Guarantor requirement**: Individual-landlord dependent; UK guarantor preferred.
- **International tenant friendliness**: Benham and Reeves (one of the agents handling Gasholders) has a dedicated overseas investor desk structure, which is an *investor* friendliness signal rather than a *tenant* one — it means the *landlords* may be overseas-based, not that renters get better treatment.
- **Visa expiry handling**: Individual-landlord dependent.
- **Credit check strictness**: Typically strict at this price tier.
- **grad_visa_realism call**: **`blocked`** — not because rental is structurally impossible, but because Gasholders is ownership-led (rental units are incidental to the building's tenure mix) and the entry-level rental prices exceed Caner's budget envelope by a wide margin. A 2-bed at Gasholders clears £5,000+/month routinely. Per the Special Instruction 3 hierarchy and the rubric's T1.2, this project is effectively out of reach.
- **Evidence (2 sentences)**: Gasholders is an ownership-led premium block within the King's Cross masterplan where rental units are let through third-party letting agents at price bands materially above Caner's £3k all-in envelope, with no unified BTR operator process to reference [19][20]. The realism call is `blocked` on price-floor grounds even before the qualification question is reached.

#### Qualification realism — The Plimsoll Building / Capella / other masterplan stock

Same pattern: ownership-led, individual landlords, third-party agents, strict standard referencing, no unified BTR qualification pathway for grad-visa renters. **`unknown`** per building because the operator-level policy is simply "there is no operator". The Plimsoll Building in particular has a mix of rental and owner-occupier units let via Chalk and various other agents [21][22].

#### Sources for this area

- [19] https://gasholders.uk/ — Gasholders London primary site (development description, Grade II listing, Argent/Hermes/AustralianSuper partnership).
- [20] https://www.homeviews.com/company/kings-cross-central-general-partners-limited — King's Cross Central Limited Partnership aggregate reviews.
- [21] http://plimsoll.chalk.co.uk/ — The Plimsoll Building rental page via Chalk.
- [22] https://www.buildington.co.uk/buildings/4127/england/london-n1c/handyside-street/plimsoll-building — Plimsoll Building description; 255 apartments across 13 floors, Argent delivered.
- [23] /Users/atacanercetinkaya/Documents/Programming-Projects/flatbrowser/src/areas/data/kings-cross.ts — pre-migrated Flatbrowser data file carrying the existing Enclave KX qualification block (30× income, 6-month upfront, credit check alongside, `unlikely` call).
- [24] https://relatedargent.co.uk/2025/07/21/first-phase-of-over-500-home-btr-scheme-launches-at-brent-cross-town-as-rental-demand-grows — Related Argent press release on The Maple launch; load-bearing as the only contemporary Related Argent BTR primary source (no international-tenant policy mentioned).

#### Confidence

**Medium** on Enclave KX (strong prior from pre-migration research, consistent with Related Argent's portfolio tone, but no contemporary operator-level FAQ to triangulate against). **Low-medium** on the ownership-led stack (Gasholders, Plimsoll, Capella) — the `blocked` and `unknown` calls there are driven by tenure/operator absence rather than by evidence of policy.

---

### stratford — Stratford / East Village

#### Projects in this area

Stratford's modern managed rental stack is dominated by **Get Living** at the East Village E20 neighbourhood, with secondary BTR and owner-occupier stock in the Olympic Park fringe and around the International Quarter:

1. **Get Living at East Village** — nearly 2,400 homes across multiple buildings: Portlands Place, Emperor House, Manna House, Frye House, Vesta House, and the N-series townhouses (N07, N26) [25][26]. Originally developed by Delancey / Qatari Diar / East Village LLP and now operated long-term by Get Living, who also secured 2024 planning consent for a further 848 rental + 504 student homes to complete East Village [27].
2. **Lendlease International Quarter** — student and some BTR stock around Stratford International station, different operator pool.
3. **Olympicopolis / East Bank** — primarily cultural + student, some BTR emerging.
4. **Stratford city core** (Westfield-adjacent) — owner-occupier and individual-landlord rental via standard agents.

Get Living is the closest thing Stratford has to Quintain's single-operator dominance of Wembley Park. The pilot focus is therefore Get Living.

#### Qualification realism — Get Living at East Village (portfolio-wide)

- **Operator**: Get Living (owned by Delancey, Qatari Diar, APG). Primary URLs: https://www.getliving.com/terms-and-conditions/ [25], https://www.getliving.com/our-neighbourhoods/east-village/ [26]
- **Income multiple**: **Not publicly stated** on Get Living's terms and conditions page, unlike Vertus or Greystar Bloom. The terms state *"We will check your credit history and income to assess your suitability as a prospective resident"* but do not specify the multiple [25]. This opacity is itself notable — Get Living is explicitly less prescriptive in writing than Vertus.
- **Upfront policy**: The terms and conditions state *"Eligible tenants must pay rent in full upfront or via Direct Debit"* as the two named payment options [28]. The "rent in full upfront" phrasing is ambiguous as written — it could mean "full month upfront" (i.e. normal) or "full tenancy upfront" (i.e. 12 months for an international applicant) — and the terms page does not clarify. A search-indexed excerpt from a third-party Get Living summary indicates Get Living asks for an *advance payment of maximum one week's rent* (effectively a holding deposit) at booking, not the 6–12 months some operators require [28]. The upfront-rent-as-affordability-fallback pathway specifically is **not publicly documented** on Get Living's own site.
- **Guarantor requirement**: Get Living's terms and conditions do not publicly state a UK guarantor requirement; the reference is to standard affordability referencing via a third-party provider [25]. HomeViews / Trustpilot reviews include at least one complaint about inconsistent guarantor policy: *"Lie in emails confirming no guarantor needed, then fail to retract this formally and say guarantor needed"* — i.e. Get Living's counter-staff have been known to give conflicting answers about whether a guarantor is required, which suggests discretionary case-by-case handling rather than a fixed policy [29].
- **International tenant friendliness**: Not explicitly documented via a dedicated "international renter" page. Right to Rent checks are carried out *"manually or via the Home Office online service"* per the terms [25]. The 2017 deposit-free policy *"new residents who successfully pass referencing or have a guarantor will have no security deposit to pay"* is framed for UK and international tenants alike [30].
- **Visa expiry handling**: Get Living offers flexible tenancy lengths up to three years, which implies some flexibility but is not a visa-specific clause. Right to Rent checks handle the visa check itself mechanically.
- **Credit check strictness**: Stated in terms as "check your credit history" without specifying threshold [25]. Industry expectation (third-party Homeppl or similar) at the Get Living scale is standard automated referencing — stricter than Quintain's Open Banking assessment, more lenient than Vertus's 30× published rule.
- **grad_visa_realism call**: **`unknown`** — with medium confidence. The public materials are intentionally thin on affordability specifics, the Reddit/HomeViews anecdotes about inconsistent guarantor handling suggest case-by-case discretion rather than a fixed pathway, and there is no public "international renter guide" equivalent to Quintain's to cite. The structural pieces needed for a confident call (income multiple, upfront fallback mechanics, UK guarantor hard requirement) are not on the operator's public site. **This is an honest `unknown`, not a weak `achievable-with-upfront` in disguise.** The focus brief's Special Instruction 2 notes that Get Living is "widely thought to be" grad-visa-friendly — my finding is that the *widely thought* framing is not backed by documented policy I can verify from the operator's own materials, and the pilot should flag this gap explicitly rather than repeat the assumption.
- **Evidence (3 sentences)**: Get Living's publicly available terms and conditions page names credit and income checks but does not publish an income multiple, does not name a UK guarantor requirement, and does not name a pay-in-advance fallback mechanism — the three most load-bearing facts for grad-visa realism are absent [25]. Resident voice via HomeViews and Trustpilot contains mixed signals: some reviewers report a friction-free move-in, others report inconsistent handling of guarantor requirements at the counter, which is consistent with discretionary case-by-case processing rather than a documented alternative path [29]. Reddit coverage on r/HousingUK that would corroborate or refute the "Get Living is international-friendly" reputation did not surface in searchable form during this research session — an open question.

#### Sources for this area

- [25] https://www.getliving.com/terms-and-conditions/ — Get Living Terms and Conditions (primary source): credit + income checking stated, 5-week deposit, 1-week advance holding payment, Right to Rent checks, no published income multiple, no published UK guarantor requirement, no published upfront-rent fallback.
- [26] https://www.getliving.com/our-neighbourhoods/east-village/ — Get Living East Village neighbourhood page.
- [27] https://developmentfinancetoday.co.uk/article-desc-9605_get-living-secures-approval-to-complete-stratford%E2%80%99s-east-village — 2024 planning consent for 848 rental + 504 student additional homes.
- [28] https://www.getliving.com/news/no-more-deposits-when-renting-with-get-living/ — Get Living 2017 deposit-free announcement.
- [29] https://www.trustpilot.com/review/www.getliving.com — Get Living Trustpilot reviews including the guarantor inconsistency complaint.
- [30] https://corporate.getliving.com/neighbourhoods/east-village/ — corporate site confirming ~2,400 homes across East Village.

#### Confidence

**Medium-low**. The operator-level transparency gap is the real finding here. Get Living's reputation for being grad-visa-friendly is not backed by the kind of documented policy that Quintain Living publishes, and the consensus step should weight this agent's `unknown` accordingly rather than defaulting to the "widely thought" framing.

---

### nine-elms — Nine Elms

#### Projects in this area

Nine Elms is the pilot's multi-operator stress test. The relevant rental/BTR stack includes:

1. **Bloom Nine Elms (Greystar)** — Bloom East + Bloom West, managed by Greystar, the US-headquartered global BTR operator [3][31]. Acquired by Henderson Park and Greystar as a partnership.
2. **Mylo Nine Elms (Greystar)** — a second Greystar operation [32].
3. **Embassy Gardens (EcoWorld Ballymore)** — mixed ownership-led and BTR, famous for the SkyPool, primarily build-to-sell but with individual rental via EcoWorld Ballymore's in-house lettings operation [33][34].
4. **Riverlight Quay (St James / Berkeley)** — ownership-led, rental via individual landlords and agents like Circa London, Romans & Partners, Garton Jones [35][36].
5. **One Nine Elms (R&F Properties)** — ownership-led premium towers, rental via third-party agents.
6. **Battersea Power Station adjacent (BPS Lettings)** — BPS runs its own lettings operation for the Power Station and Prospect Place / Switch House East-West developments.
7. **Way of Life** operates several smaller Nine Elms BTR blocks [4].

The per-operator differences are the load-bearing finding here.

#### Qualification realism — Bloom Nine Elms (Greystar)

- **Operator**: Greystar Bloom. Primary URL: https://bloom-nineelms.co.uk/faqs/ [3]
- **Income multiple**: **2.66× annual rent** stated explicitly: *"The joint household income must be at least 2.66 times the yearly rent"* [3]. This is 32× monthly — marginally stricter than the 30× standard.
- **Upfront policy**: **Not publicly documented as an affordability fallback.** The Bloom FAQ documents the standard 5-week deposit + 1-week holding commitment (£400 flat) + Flatfair deposit-replacement option (£350 under £3k rent, £600 over), but does not name pay-in-advance as a workaround for applicants failing the 2.66× rule [3][37].
- **Guarantor requirement**: *"Should a household not pass the affordability criteria, guarantors are accepted however they too will be subject to referencing and must be at least 4 times the yearly rent to pass affordability checks"* [3]. Explicit. Guarantor route is formally documented but UK-based guarantor at 48× monthly rent is not a route Caner has.
- **International tenant friendliness**: Not explicitly documented. Referencing is via Homeppl [3], which — same as for Quintain — means the Guarantid / Homeppl-as-guarantor service is theoretically available as a downstream path, but Bloom's FAQ does not reference it and does not mention international tenants.
- **Visa expiry handling**: Unknown; no public clause.
- **Credit check strictness**: Via Homeppl (the same Open Banking-capable provider Quintain uses), which is the most lenient major UK referencing provider for international applicants. This is a meaningful edge at Bloom relative to operators using Goodlord or Rentguard.
- **grad_visa_realism call**: **`achievable-with-upfront`** — with low-medium confidence. The structural pieces that make Quintain achievable (Homeppl backend, Open Banking assessment, published income multiple) are all present at Bloom, but Bloom's FAQ does *not* explicitly name pay-in-advance as an alternative pathway, which Quintain's FAQ does. My call leans cautiously toward `achievable-with-upfront` on the basis of the Homeppl/Guarantid backend being available in principle, but the absence of explicit operator documentation of the route means I am materially less confident than at Quintain. The synthesis step may well push this down to `unknown` depending on how the other 14 agents read the Homeppl signal.
- **Evidence (3 sentences)**: Bloom Nine Elms uses Homeppl as its referencing provider and publishes an explicit 2.66× affordability floor with a guarantor route at 4× annual rent [3]. The Homeppl backend means Guarantid (Homeppl-as-guarantor) is theoretically available as an alternative pathway, but Bloom's FAQ does not reference Guarantid and does not publish a pay-in-advance fallback mechanism [37]. The difference between Bloom and Quintain on qualification is entirely in the public documentation of the alternative pathway, not in the underlying referencing provider.

#### Qualification realism — Embassy Gardens (EcoWorld Ballymore)

- **Operator**: EcoWorld Ballymore (developer + in-house lettings for rental units) [33][34]. Primarily ownership-led with individual-landlord rental supplementing BTR.
- **Income multiple**: 30× typical; not published on a unified EcoWorld Ballymore tenant-facing FAQ (EcoWorld Ballymore's site is sales-led, not lettings-led).
- **Upfront policy**: Not publicly documented at operator level.
- **Guarantor requirement**: Individual-listing dependent.
- **International tenant friendliness**: EcoWorld's parent is Malaysian and the buildings have a strong overseas investor base, but that is an *investor* pathway, not a *tenant* pathway — overseas-based investor-landlords typically delegate referencing to UK letting agents who apply standard UK criteria.
- **Visa expiry handling**: Listing-dependent.
- **Credit check strictness**: Listing-dependent; no unified process.
- **grad_visa_realism call**: **`unknown`** — the operator does not publish a lettings-side FAQ and individual units route through different agents with different policies.
- **Evidence (2 sentences)**: Embassy Gardens is developer-led (EcoWorld Ballymore, 75% Eco World / 25% Ballymore) and primarily build-to-sell, with SkyPool as its architectural signature; there is no operator-level BTR qualification process to cite [33][34]. The honest answer at the project level is `unknown`.

#### Qualification realism — Riverlight Quay (St James / Berkeley)

- **Operator**: Ownership-led (Berkeley / St James); rental via individual landlords through Circa London, Romans & Partners, Garton Jones, LiFE Residential, Waterview, and others [35][36].
- **grad_visa_realism call**: **`unknown`** at project level; individual listings vary. Reference charges noted on one Riverlight listing: *"a one-off upfront payment of £180 per tenancy"* + *"£60 per tenant"* referencing charge [36] — this is a private-landlord process, not a unified BTR.
- **Evidence (1 sentence)**: Riverlight is a mature build-to-sell Berkeley development where rental is a downstream consequence of owner-occupier tenure; there is no unified operator policy to evaluate.

#### Qualification realism — Way of Life (Nine Elms buildings)

- **Operator**: Way of Life, one of the mid-scale London BTR operators. Primary URL: https://www.wayoflife.com/faqs/renting-faqs [4]
- **Income multiple**: Not numerically published on the FAQ, but implicit 2.5× annual / 30× monthly.
- **Upfront policy**: **The most explicit operator-level policy of the entire pilot.** The Way of Life FAQ states: *"you may be required to have a UK-based guarantor, or 12 months of rent in advance"* for international tenants [4]. Twelve months upfront is Way of Life's hard alternative — four times Caner's 3-month ceiling.
- **Guarantor requirement**: UK guarantor at unspecified multiple (typical 5× or 4× yearly).
- **International tenant friendliness**: Way of Life is the only operator in this pilot that explicitly binds international applicants to a *12-months-upfront-OR-UK-guarantor* rule in writing. That is *structurally blocking* for Caner.
- **grad_visa_realism call**: **`blocked`** — with high confidence. Way of Life has named the two alternative pathways and both are closed: UK guarantor (Caner has none) or 12 months upfront (four times his capacity). Unlike Quintain, the upfront ceiling is fixed at 12 not "agreed number of months".
- **Evidence (2 sentences)**: Way of Life's public renting FAQ explicitly states *"you may be required to have a UK-based guarantor, or 12 months of rent in advance"* for applicants whose standard referencing fails, which is the most prescriptive international-tenant clause I found in any operator FAQ [4]. For a graduate-visa renter with 3 months upfront ceiling, no UK guarantor, and no UK credit file, this is a structural block — the policy leaves no discretionary third path.

#### Qualification realism — One Nine Elms / Battersea Power Station / BPS Lettings stack

These are premium ownership-led or premium-BTR towers with price floors meaningfully above Caner's £3k all-in envelope. Per the rubric and the pilot's scope, they inherit the existing pre-migration `unlikely` or `blocked` calls on the combined grounds of (a) price floor above envelope and (b) strict premium BTR referencing with no known international-tenant workaround. BPS Lettings specifically runs a referencing process matched to the Power Station's premium positioning; no operator-level exception exists for grad-visa renters.

#### Sources for this area

- [3] https://bloom-nineelms.co.uk/faqs/ — Bloom Nine Elms FAQ (primary source): 2.66× annual income, 4× yearly guarantor multiple, Homeppl referencing, 5-week deposit, Flatfair deposit alternative.
- [4] https://www.wayoflife.com/faqs/renting-faqs — Way of Life renting FAQ (primary source, load-bearing): *"you may be required to have a UK-based guarantor, or 12 months of rent in advance"* for international tenants.
- [31] https://www.greystar.com/bloom-east-london-uk/p_20370 — Greystar Bloom East operator page.
- [32] https://www.greystar.com/properties/london-england/mylo-nine-elms — Greystar Mylo Nine Elms.
- [33] https://www.embassygardens.com/ — Embassy Gardens EcoWorld Ballymore site.
- [34] https://en.wikipedia.org/wiki/Ballymore_Group — Ballymore Group background, including the 2015 Eco World partnership structure.
- [35] https://www.berkeleygroup.co.uk/developments/london/vauxhall/riverlight — Berkeley / St James Riverlight development page.
- [36] https://liferesidential.co.uk/development/riverlight/ — LiFE Residential third-party rental landing page for Riverlight.
- [37] https://bloom-nineelms.co.uk/terms-and-conditions-rent-concession-and-voucher/ — Bloom Nine Elms terms & conditions (rent concession context, not load-bearing for qualification).

#### Confidence

**High** on Way of Life (the 12-months-upfront clause is the clearest and most specific operator quote in the whole pilot). **Medium-high** on Bloom Nine Elms (2.66× rule is explicit; upfront fallback absence is inferred from the silence rather than an explicit negative). **Low** on Embassy Gardens and Riverlight Quay (operator-level policy does not exist to be evaluated). The net Nine Elms picture is the per-operator spread itself — which is why this was the right area to include in the pilot.

---

### brent-cross-town — Brent Cross Town

#### Projects in this area

Brent Cross Town is a single-developer masterplan (Related Argent, in partnership with Barnet Council and Invesco Real Estate). The modern managed BTR stack so far is:

1. **The Maple (Related Argent BTR, Phase 1 launched July 2025)** — 249 high-spec apartments by Squire and Partners [38][39].
2. **The Maple Phase 2 (launching September 2025)** — 286 additional apartments designed by Allies and Morrison [38]. Combined phases bring The Maple to over 500 apartments.
3. **Other BTR coming later** — Related Argent's Brent Cross Town masterplan targets 6,700 homes total over the full delivery, with The Maple as the first phase of the BTR roster.

The Maple is effectively the only currently-operating BTR building at Brent Cross Town. Wider stock (social housing, retirement living via Audley Group, owner-occupier blocks) is outside the grad-visa-realism question either because it is below-market affordable (different application process entirely) or above Caner's timeline or tenure.

#### Qualification realism — The Maple (Related Argent BTR)

- **Operator**: Related Argent in-house BTR, branded "The Maple" at the building level. Primary URL: https://www.themaplenw2.com/ (returned 403 on direct fetch during this session — a protected-by-WAF microsite rather than a public-facing FAQ). Secondary primary source: https://relatedargent.co.uk/2025/07/21/first-phase-of-over-500-home-btr-scheme-launches-at-brent-cross-town-as-rental-demand-grows [38].
- **Income multiple**: Not publicly stated in the Related Argent primary source. Sector-standard at 30× for BTR at this price tier.
- **Upfront policy**: Not publicly documented. The Related Argent launch press release names partnership structure and phasing but does not cover tenant application mechanics [38].
- **Guarantor requirement**: Not publicly documented.
- **International tenant friendliness**: Not publicly documented. There is no Related Argent operator-level FAQ comparable to Quintain's or Vertus's — the brand's rental process documentation is press-release-led, not FAQ-led.
- **Visa expiry handling**: Unknown.
- **Credit check strictness**: Unknown; sector-standard expected.
- **grad_visa_realism call**: **`unknown`** — with medium confidence in the *gap itself*. The Maple is the lowest-price-floor BTR in the pilot (advertised starting prices around £1,950/month for a studio, £2,125/month on OnTheMarket listings) [40], which is the single most headline-attractive price point for a Croydon upgrader. But the qualification picture is genuinely not documented in public sources that I could reach, and the operator (Related Argent) inherits the same transparency gap as at King's Cross — less prescriptive in writing than Vertus or Quintain. The pilot should flag The Maple as the highest-priority "contact operator directly" project for Caner: the price floor is unique among BTR at this rent band, and the qualification picture is exactly the uncertainty that direct operator contact can resolve cheaply.
- **Evidence (3 sentences)**: The Maple is Related Argent's first BTR delivery at the £8bn Brent Cross Town masterplan with ~500 apartments across two phases launched in 2025, at price points starting ~£1,950/month that are meaningfully below every other BTR building in this pilot slice [38][39][40]. Related Argent does not publish a public rental-process FAQ in the style of Quintain or Vertus, and themaplenw2.com is WAF-protected against headless fetches, which means the income multiple, upfront policy, guarantor rules, and international-tenant pathway are all opaque from the outside [38]. Given the unique price position, an explicit "contact The Maple leasing team directly" recommendation is more valuable for Caner's decision than the `unknown` flag — this is where first-contact intelligence would materially change the dataset.

#### Sources for this area

- [38] https://relatedargent.co.uk/2025/07/21/first-phase-of-over-500-home-btr-scheme-launches-at-brent-cross-town-as-rental-demand-grows — Related Argent launch press release, July 2025.
- [39] https://www.related.com/press-releases/2025-07-21/first-phase-over-500-home-btr-scheme-launches-brent-cross-town-rental — Related Corporation parent press release (identical content, US parent).
- [40] https://www.onthemarket.com/details/16986538/ — OnTheMarket live studio listing at The Maple, £2,125/month (dated 2026 — price accurate at listing time, may drift).

#### Confidence

**Low-medium**. The Maple's commercial-attractiveness-to-Caner is strong; the qualification transparency is poor. This is the honest gap the pilot should flag as a direct-contact priority rather than guess.

---

### whitechapel — Whitechapel

#### Projects in this area

Whitechapel's managed rental stack is different from the single-operator pattern at Wembley Park or East Village. There is no dominant BTR operator — the area's stock is a mix of Berkeley-delivered ownership-led mixed-use developments, a handful of smaller BTR blocks near Aldgate East, and private-landlord rental across Victorian conversions in the residential fringes:

1. **Goodman's Fields (Berkeley Group)** — 864 apartments across 1-4 beds + studios, with 1,076 mixed-tenure homes total including student accommodation, a Premier Inn hotel, 2 acres of landscaping, and commercial space [41][42]. **Ownership-led, now all sold**; rental routes via third-party letting agents (Benhams, Crown Home Buying and Letting, Hastings International, Madley Property, Monteo, and individual private landlords). Headline rental bands from 1newhomes.com (third-party summary, not live listing): studio ~£475/week (£2,058/month), 1-bed ~£575/week (£2,492/month), 2-bed ~£750/week (£3,250/month), 3-bed ~£1,000/week (£4,333/month) [42][43]. These are third-party aggregator bands, not Berkeley-published — treat as approximate.
2. **Aldgate Place (Barratt / Londonewcastle)** — edge of Whitechapel proper, mixed ownership-led. Similar pattern: rental via individual landlords through third-party agents.
3. **Smaller BTR pockets around Whitechapel station and the Elizabeth Line entrance** — a handful of newer 50–150 unit blocks that have emerged post-Elizabeth Line opening. Operators are heterogeneous (a mix of small-scale BTR operators, developer-retained lettings, and PRS conversion from build-to-sell).

**Whitechapel is fundamentally a "no dominant BTR operator" area**, which is itself the qualification finding: the area's rental qualification picture is whatever the individual landlord and whichever agent they use decides, and the pilot cannot reasonably produce a single `grad_visa_realism` call for the area.

#### Qualification realism — Goodman's Fields (Berkeley Group, ownership-led)

- **Operator**: Berkeley Group delivered; units sold; rental via individual landlords and third-party agents (Benhams, Crown Home Buying and Letting, Hastings International).
- **Income multiple**: Individual-landlord / individual-agent dependent (typically 30×).
- **Upfront policy**: Individual-agent dependent; international tenants typically asked for 6 or 12 months upfront at the agent's discretion.
- **Guarantor requirement**: Individual-landlord dependent; typically UK guarantor preferred, some flexibility for overseas applicants.
- **International tenant friendliness**: Some Goodman's Fields letting agents (Crown Home Buying and Letting, Hastings International) are explicitly international-investor-oriented — which means *overseas investor-landlords* letting units — but this tilts landlord-friendly rather than tenant-friendly. The investor-to-tenant translation is not friendly (overseas landlords typically want the strictest referencing to protect against default risk at distance).
- **Visa expiry handling**: Individual-landlord dependent.
- **Credit check strictness**: Typically strict via Homeppl, Goodlord, Rentguard, or agency-internal.
- **grad_visa_realism call**: **`unknown`** at the project level — there is no operator-level policy to evaluate. A subset of individual listings may be friendly; the majority will apply standard strict referencing.
- **Evidence (2 sentences)**: Goodman's Fields is an all-sold Berkeley development in Whitechapel where rental routes are fragmented across multiple third-party letting agents and individual landlords, with no unified operator qualification policy to cite [41][44]. The honest call is `unknown`; Caner's pathway here is individual-listing evaluation rather than operator-level negotiation.

#### Qualification realism — Other Whitechapel BTR stock

For the smaller BTR blocks around Whitechapel station, I could not identify a named operator with publicly documented qualification policies during this research session. **`unknown`** across the board. This is a genuine research gap — the pilot's time budget was spent on higher-priority operator-level findings, and Whitechapel's fragmented stack is an area where a broader agent-wide sweep would need to do more per-building enumeration.

#### Sources for this area

- [41] https://www.berkeleygroup.co.uk/developments/london/aldgate/goodmans-fields — Berkeley Group Goodman's Fields development page (all sold).
- [42] https://www.benhams.com/new-developments/goodmans-fields-london/ — Benhams (one of the letting agents) Goodman's Fields landing page.
- [43] https://1newhomes.com/goodmans-fields-london — 1newhomes third-party aggregator summary with rental bands (approximate, not live).
- [44] https://www.homeviews.com/development/goodmans-fields-e1 — HomeViews reviews aggregate for Goodman's Fields.

#### Confidence

**Low**. Whitechapel is the area where my pilot-scope time budget produced the least qualification depth — reflecting the underlying fragmented reality rather than a research failure. The full-sweep version of this agent would need to enumerate 8–15 specific buildings and evaluate each via Rightmove listing language, which is multi-hour work that the pilot did not attempt.

---

### acton — Acton

#### Projects in this area

North Acton is the BTR cluster anchor for Acton broadly. The managed rental stack there is:

1. **One West Point (AWOL / A Way of Living)** — 701 apartments across four buildings, BTR + affordable + private sale mix, completed 2023, operated by AWOL which is City & Docklands' operational platform [45][46][47]. AWOL also runs a sister development in North Kensington. This is the anchor BTR at North Acton.
2. **Clayworks Apartments** — 85 apartments (BTR + Key Worker + Student), with 35 studios reserved for Imperial College staff; less than 5 minutes from North Acton tube [48]. Operator not publicly identified as a named BTR brand.
3. **Portal West / the broader OPDC regeneration cluster** — multiple blocks around Portal Way and the Old Oak Common interchange, various operators. Some are specifically student-oriented (Imperial Tower), others BTR.
4. **Imperial Square / Westmark / Vermilion / The Lexicon / Portal West sub-blocks** — I could not during this research session confirm the named operators for every one of these buildings via operator primary sources; they surfaced in the pilot brief's preamble but my searches did not return a definitive operator attribution. Collectively they form the "North Acton BTR cluster" that is a genuine density of stock, with individual operators varying.
5. **West Acton / Acton Central / South Acton** — older Victorian conversions and ex-council blocks, outside the T1.2 modern rental stock definition for the rubric.

#### Qualification realism — One West Point (AWOL)

- **Operator**: AWOL (A Way of Living), operational platform of City & Docklands. Primary URL: https://awol.co.uk/ [46], https://onewestpoint.com/rental/ [45]
- **Income multiple**: Not publicly documented on either the One West Point rental page or the AWOL homepage. AWOL is a smaller, newer operator than Quintain / Vertus / Get Living / Greystar, and its public materials are marketing-led rather than policy-led.
- **Upfront policy**: Not publicly documented.
- **Guarantor requirement**: Not publicly documented.
- **International tenant friendliness**: AWOL markets as *"a 5* lifestyle without the high costs traditionally involved... no hidden costs"* [45][46], which is brand positioning rather than policy. No dedicated international renter page.
- **Visa expiry handling**: Unknown.
- **Credit check strictness**: Unknown; sector-standard expected via a third-party provider, which for a smaller operator is most likely Goodlord or Rentguard (not Homeppl, the Quintain/Bloom provider).
- **grad_visa_realism call**: **`unknown`** — with medium confidence in the gap. AWOL is a smaller operator where the public-facing FAQ discipline of the larger players doesn't exist; the route to getting actionable intelligence is direct contact rather than web research. Given the commercial-attractiveness of Acton on price and transport grounds, this is another "direct contact priority" project for Caner.
- **Evidence (2 sentences)**: AWOL is a newer BTR operator whose public materials (both the One West Point building page and the awol.co.uk homepage) are marketing-led and do not publish income multiples, guarantor policy, upfront fallback, or international tenant handling [45][46]. The honest pilot answer is `unknown` with a strong recommendation that Caner direct-contact the leasing team as the cheapest way to resolve it.

#### Qualification realism — Clayworks Apartments and the wider North Acton cluster

**`unknown`** across the board at project level. The pilot did not identify publicly-documented operator-level qualification policies for Clayworks, Imperial Square, Westmark, Vermilion, The Lexicon, or the other North Acton cluster blocks during this research session. Clayworks is Imperial College-linked for 35 of its 85 units and is likely to run a staff-specific referencing path for those, which does not help a non-Imperial applicant [48].

#### Sources for this area

- [45] https://onewestpoint.com/rental/ — One West Point rental page (AWOL operator confirmation).
- [46] https://awol.co.uk/ — AWOL operator homepage (confirms North Acton + North Kensington portfolio; marketing-led rather than policy-led).
- [47] https://www.buildington.co.uk/buildings/7284/england/london-w3/6-portal-way/one-west-point — Buildington One West Point development record (701 apartments, City & Docklands, 2023 completion).
- [48] https://www.imperial.ac.uk/staff/staff-accommodation/north-acton/clayworks-apartments/ — Clayworks Apartments via Imperial College (key worker subset).

#### Confidence

**Low-medium**. AWOL operator-level picture is thin because AWOL doesn't publish it, not because I didn't look. The wider North Acton cluster is a real research gap that the full-scale sweep would need to close via targeted building-by-building enumeration.

---

### tottenham-hale — Tottenham Hale

#### Projects in this area

Tottenham Hale's modern managed rental stack is driven by the **Heart of Hale** masterplan, a 3.5-acre, £600m+, 1,032-home Related Argent project, Phase 1 completed 2022 and Phase 2 (484 BTR homes, the Build-to-Rent phase specifically) breaking ground in 2023 with an ICG Real Estate £243m loan [49][50]. The named BTR buildings are:

1. **1 Ferry Island (Heart of Hale Phase 1 BTR)** — 108 studio/1/2/3-bed homes to rent, designed by Stirling Prize-winner Allford Hall Monaghan Morris (AHMM). Delivered and letting [51].
2. **2 Ferry Island (Heart of Hale Phase 2 BTR)** — part of the 484-home Phase 2 delivery.
3. **Hale Wharf** — a separate but adjacent masterplan, delivered in partnership with Muse Developments and Canal & River Trust, primarily owner-occupier with some BTR.
4. **Argo Apartments** — not at Tottenham Hale (the pilot brief hypothesised this; the correct location is Canning Town). The nearest Grainger development to Tottenham Hale is **Windlass Apartments** — worth flagging as a candidate-to-verify for the Tottenham Hale area.
5. **Grainger plc** — has broader UK BTR presence and may have developments at Tottenham Hale or adjacent; I could not confirm a named Grainger Tottenham Hale building during this research session [52].
6. **Berkeley** — has historical development presence in the wider Seven Sisters / Tottenham corridor but no identified Tottenham Hale BTR in this research session.

#### Qualification realism — Heart of Hale / 1 Ferry Island (Related Argent)

Same operator family as The Maple at Brent Cross Town and the Enclave KX / Be Living stack at King's Cross. The qualification picture inherits the Related Argent operator-level transparency gap:

- **Operator**: Related Argent in-house BTR.
- **Income multiple**: Not publicly documented at operator level; sector standard 30× expected.
- **Upfront policy**: Not publicly documented.
- **Guarantor requirement**: Not publicly documented.
- **International tenant friendliness**: Not publicly documented.
- **Visa expiry handling**: Unknown.
- **Credit check strictness**: Unknown; sector-standard.
- **grad_visa_realism call**: **`unknown`** — with the same caveat as The Maple. Related Argent's BTR portfolio does not publish an operator-level rental-process FAQ, and Heart of Hale's documentation is press-release-led. The price floor at Heart of Hale is meaningfully below The Maple's (Tottenham Hale commands less than Brent Cross Town on a postcode basis), which makes Heart of Hale the *most attractive* Related Argent BTR on a price-per-connectivity basis for Caner — but the qualification picture is exactly as opaque.
- **Evidence (2 sentences)**: Heart of Hale is Related Argent's Tottenham Hale masterplan with 1,032 homes including a 484-home Build-to-Rent Phase 2 funded by ICG Real Estate, with 1 Ferry Island (AHMM-designed) already delivered and letting [49][50][51]. The Related Argent operator-level qualification transparency gap applies identically here — `unknown` is the honest call, and direct contact with the Heart of Hale leasing team is the highest-leverage way to resolve it.

#### Qualification realism — Grainger plc (if any Tottenham Hale building)

Grainger plc is the only major UK BTR operator with a publicly documented rental process page I found in this research session. Their policy is worth citing as the operator baseline even if the specific Tottenham Hale building attribution is uncertain:

- **Operator**: Grainger plc. Primary URL: https://www.graingerplc.co.uk/living-with-us/our-rental-process [52]
- **Income multiple**: *"the collective annual salaries of everyone who'll be making rental payments would need to be around 30 times the monthly rent"* [52]
- **Upfront policy**: *"We do accept guarantors or a higher proportion of rent in advance, but we recommend you discuss this upfront with our team"* [52]. **Negotiable**, similar in shape to Quintain's "agreed number of months" — no fixed 6/12 month ceiling.
- **Guarantor requirement**: Accepted as an alternative to higher upfront; no hard "UK guarantor or nothing" clause.
- **International tenant friendliness**: Right to Rent check via passport or share code explicitly named — *"please have your passport or share code handy (if you are a non-UK citizen)"* [52]. Non-UK citizens explicitly anticipated in the process language.
- **Visa expiry handling**: Unknown from primary source.
- **Credit check strictness**: Standard — *"The referencing check includes a credit check, as well as verifying your employment status and household income details"* [52]. Runs via third-party provider, online, described as quick.
- **grad_visa_realism call (at operator level, applied to any confirmed Grainger building in the Tottenham Hale area)**: **`achievable-with-upfront`** — with medium confidence. Grainger's public documentation is the *second* most grad-visa-friendly operator in this pilot after Quintain Living: explicit mention of negotiable upfront rent, explicit mention of guarantor-OR-higher-upfront as parallel alternatives, explicit mention of non-UK citizens in the application process language. The confidence is medium rather than high because Grainger's credit check is a standard credit check (not the Open Banking assessment Quintain uses via Homeppl), which may still reject an applicant with an empty UK credit file even on the upfront route.
- **Evidence (3 sentences)**: Grainger plc publishes one of the most grad-visa-friendly BTR rental process pages in the London market, with explicit negotiable-upfront-rent clause, explicit guarantor-OR-higher-upfront alternatives framed as parallel rather than sequential, and explicit handling of non-UK citizens via the Right to Rent clause [52]. This is materially different from Vertus or Related Argent, both of whom are silent on the alternative pathway question in their public materials. The weakness is that Grainger still runs a standard credit check alongside the upfront route, which may not pass a completely empty UK credit file even with 3 months upfront — the exact edge case where first-hand resident evidence would resolve the remaining uncertainty.

#### Sources for this area

- [49] https://www.icgam.com/2023/10/02/related-argent-expands-build-to-rent-portfolio-starting-construction-on-484-homes-at-tottenham-hale-with-243-million-loan-from-icg-real-estate/ — ICG Real Estate press release, October 2023: £243m loan to Related Argent for 484-home Phase 2 BTR.
- [50] https://relatedargent.co.uk/2023/10/02/related-argent-expands-build-to-rent-portfolio-following-243m-loan-from-icg-real-estate — Related Argent matching press release.
- [51] https://heartofhale.co.uk/1-ferry-island — 1 Ferry Island primary site (108 homes, AHMM-designed, studio–3-bed).
- [52] https://www.graingerplc.co.uk/living-with-us/our-rental-process — Grainger plc "Our Rental Process" page (primary source): 30× income multiple, negotiable upfront rent, guarantor-or-upfront alternatives, non-UK citizen handling.

#### Confidence

**Medium-high on Grainger operator-level.** **Low-medium on Tottenham Hale building-level attribution** because I could not lock down which specific Grainger building (if any) is at Tottenham Hale within the research budget — Windlass Apartments is the candidate worth confirming but I did not get first-hand attribution. **Low-medium on Heart of Hale / Related Argent** because the operator-level transparency gap is real and the pilot did not find an additional primary source beyond the 2023 ICG press release.

---

### brixton — Brixton

#### Projects in this area

**Brixton is the honest "no flagship BTR" case of the pilot.** Extensive searches in this research session did not surface a named dominant BTR operator at Brixton SW9. The rental market at Brixton is:

1. **Individual letting agents** — Foxtons, Winkworth, Savills, Hamptons, and a long tail of local agents — handling conversion flats, modern mid-rise residential blocks from the last 10–15 years, and the Brixton Square / Brixton Hill periphery.
2. **Legal & General / Nomura partnership** — announced a 1,000+ home BTR development programme in 2024–25, with the first site at Herne Hill in Lambeth (adjacent to Brixton but not in Brixton proper) [53]. This is the *closest* major BTR pipeline to Brixton itself and is worth flagging as a discovery candidate.
3. **Smaller BTR-style conversion stock** — no dominant named operator.
4. **Ferndale Place / Acre House** — these were named in the pilot brief's preamble as possible Brixton BTR pockets; my searches did not return definitive operator attribution for them, and neither surfaces on the major BTR industry tracker lists. They may be small-scale private BTR or build-to-sell, but I could not confirm. **`unknown` with prejudice** — the honest answer is "these are not the flagship BTR buildings the brief hoped they might be".

#### Qualification realism — Brixton generally

- **Operator**: None dominant.
- **Income multiple**: Individual-agent / landlord dependent (typically 30×).
- **Upfront policy**: Individual-landlord dependent; international tenant norms apply (6 or 12 months typical).
- **Guarantor requirement**: Individual-landlord dependent; typically UK guarantor preferred.
- **International tenant friendliness**: Individual-landlord dependent; Brixton's identity-led character does mean some landlords are culturally comfortable with international tenants, but this is not an operator-level policy and cannot be cited as a reliable pattern.
- **Visa expiry handling**: Individual-landlord dependent.
- **Credit check strictness**: Standard letting-agent referencing via Goodlord, Rentguard, or similar.
- **grad_visa_realism call**: **`unknown`** at area level because the question is structurally different — Brixton does not have an operator to evaluate, it has a fragmented private-landlord market where Caner's pathway is individual-listing evaluation. The honest finding is that **Brixton fails T1.4 of the rubric as applied to the grad-visa-realism axis**: the area does not have a BTR operator whose referencing process has been pre-negotiated for international renters, which is the specific advantage the rubric's T1.4 "active professional rental market" row was designed to capture. A renter with Caner's profile is in Brixton-the-private-landlord-market rather than Brixton-the-operator-market.
- **Evidence (3 sentences)**: Multiple targeted searches for BTR operators at Brixton SW9 returned no dominant named operator and no flagship BTR building — the Legal & General / Nomura partnership's first site is at Herne Hill in Lambeth (adjacent but not Brixton proper), and the named buildings from the pilot brief (Ferndale Place, Acre House) did not surface with operator attribution in this research session [53]. The Brixton rental market is dominated by private letting agents (Foxtons, Winkworth, Savills) handling Victorian conversion and modern mid-rise stock via individual landlords, not by BTR operators running unified referencing processes. Per Phase A Decision 2 of the project, the honest call here is to report "no flagship project exists" rather than invent one — Brixton's rubric-T3-level identity strength does not translate to a grad-visa-realism advantage, and that mismatch is itself the finding.

#### Sources for this area

- [53] https://www.lsh.co.uk/explore/research-and-views/research/2024/february/build-to-rent-report-2024 — LSH Build to Rent Report 2024: general London BTR pipeline context, no Brixton-specific operator identified.
- Negative-result citations (searches that returned nothing actionable on Brixton BTR specifically):
  - Rightmove Brixton rental listings: https://www.rightmove.co.uk/property-to-rent/Brixton.html
  - Savills Brixton rental listings: https://search.savills.com/list/property-to-rent/england/london/brixton/sw9
  - Foxtons Brixton rental listings: https://www.foxtons.co.uk/properties-to-rent/brixton

#### Confidence

**High on the "no flagship BTR" finding itself.** **Low on any specific Brixton building's qualification realism**, because the area is structurally an individual-landlord market where each listing must be evaluated separately. The pilot should treat this as an intentional honest unknown rather than a research gap — Brixton is exactly the case the rubric's T1.4 row was designed to catch.

---

## Discoveries

Though I am a focus agent rather than a discovery agent, three operator-level and one building-level findings are worth surfacing for the candidate universe:

1. **Operator: Grainger plc** — not currently in Flatbrowser's named operator list, based on what I saw in the pre-migration King's Cross file and the candidate-areas list. Grainger operates the most grad-visa-friendly *publicly documented* BTR rental process of any UK operator I found in the pilot slice, with explicit negotiable-upfront-rent, parallel guarantor-or-upfront alternatives, and explicit non-UK citizen handling. Their London portfolio includes Argo Apartments (Canning Town), Windlass Apartments (Canning Town / Tottenham Hale area), and others. Worth adding to the operator list and investigating building-by-building in the full sweep. Source: https://www.graingerplc.co.uk/living-with-us/our-rental-process

2. **Operator: AWOL (A Way of Living)** — smaller newer BTR operator running One West Point at North Acton and a North Kensington building. Not currently prominent in Flatbrowser's operator list; candidate for addition if North Acton is included as a pilot area. Source: https://awol.co.uk/

3. **Operator: Homeppl / Guarantid** — not an operator per se, but a referencing-and-guarantor service that provides the structural pathway for international tenants at multiple BTR operators including Quintain Living and Greystar Bloom Nine Elms. Homeppl acts as UK guarantor for accepted tenants at 5.8% of annual rent. **This should be captured as a schema-level signal on the Project.rental.qualification block** — "referencing_provider: homeppl" would indicate the Guarantid backend is theoretically available, which is a meaningful signal even when the operator's own FAQ doesn't mention it. Source: https://www.homeppl.com/

4. **Building: Windlass Apartments (Grainger, near Tottenham Hale)** — flagged in one search result as Grainger's Tottenham Hale-adjacent development. Worth verifying attribution in the full sweep; if confirmed, inherits Grainger's operator-level `achievable-with-upfront` call and makes Tottenham Hale materially more grad-visa-friendly than the Heart of Hale / Related Argent picture alone suggests.

---

## Cross-cutting findings

**The single most decision-relevant output of this pilot is the operator-level spread.** The difference between achievable and blocked for Caner is not about which area he picks — it is about which operator he picks, and the operator pattern cuts across area boundaries cleanly. The five tiers I found:

| Tier | Operator | Example buildings | Key quote | Realism for Caner |
|---|---|---|---|---|
| 1 (best) | **Quintain Living** | Luna, Landsby, Ferrum, Canada Gardens, Repton Gardens, Emerald Gardens, Alameda, Madison, Tipi Wembley | *"If you don't meet our criteria for paying rent on a monthly basis, and you don't have a guarantor, we will ask you to pay your rent in advance"* — Quintain Living FAQ | **achievable-with-upfront** — agreed number of months upfront, Open Banking income assessment via Homeppl, explicit international-tenant documentation |
| 2 | **Grainger plc** | Windlass (Tottenham Hale area?), Argo (Canning Town), and wider UK portfolio | *"We do accept guarantors or a higher proportion of rent in advance, but we recommend you discuss this upfront with our team"* — Grainger rental process page | **achievable-with-upfront** — negotiable, explicit non-UK citizen handling, but standard credit check adds risk |
| 3 | **Greystar Bloom** | Bloom East, Bloom West, Mylo Nine Elms | *"The joint household income must be at least 2.66 times the yearly rent... guarantors... at least 4 times the yearly rent"* — Bloom FAQ | **achievable-with-upfront** (low confidence) — Homeppl backend gives theoretical Guarantid access, but no explicit upfront fallback documented |
| 4 | **Get Living** | Portlands Place, Emperor House, Manna House, Frye House, Vesta House at East Village Stratford | *"Eligible tenants must pay rent in full upfront or via Direct Debit"* — Get Living terms (ambiguous; no income multiple, no guarantor clause, no international renter page) | **unknown** — the "widely thought grad-visa-friendly" reputation is not backed by documented policy I could find on the operator's own site |
| 5 | **Related Argent** | Enclave KX (King's Cross), The Maple (Brent Cross Town), 1 Ferry Island / Heart of Hale (Tottenham Hale) | (no operator-level FAQ published; policy is press-release-led) | **unknown-to-unlikely** — the transparency gap itself is the finding; King's Cross-era policy was 30×/6-month upfront/strict credit, but contemporary attribution unclear |
| 6 | **Vertus** | 10 George Street, 8 Water Street, Newfoundland | *"The combined annual income of all named tenants needs to be more than, or equal to, 30 times the monthly rent"* — Vertus FAQ | **unlikely** — strict 30×, no documented alternative pathway, no international tenant page, financial-core price band |
| 7 (worst) | **Way of Life** | multiple Nine Elms and other buildings | *"you may be required to have a UK-based guarantor, or 12 months of rent in advance"* — Way of Life FAQ | **blocked** — only two alternative pathways named and both are closed for Caner |

**This spread is the real finding of the pilot.** The practical implication for Caner's decision is that he should **pick operator first, area second**. A renter in Caner's position at Wembley Park / Quintain Living is structurally differently positioned from one at Nine Elms / Way of Life, and a renter at Tottenham Hale / Grainger (if attribution holds) has a meaningfully different path than one at Tottenham Hale / Related Argent. The area-level call — "Tottenham Hale is a good upgrade" or "Nine Elms has good amenity" — does not survive the operator-level discrimination, and a dataset that reports grad-visa-realism only at the area level is hiding the most decision-relevant axis.

**The Homeppl backend is a structural second-layer signal.** Any operator using Homeppl as their referencing provider (confirmed for Quintain Living and Greystar Bloom in this pilot) inherits access to:
- Open Banking income assessment, which treats actively-used overseas bank accounts as evidence of income rather than requiring UK payslips.
- The Guarantid service, which makes Homeppl itself the UK guarantor for accepted international tenants at 5.8% of annual rent.

This means `referencing_provider` is a field that would meaningfully differentiate operators in the Project.rental.qualification block, even when operators are otherwise silent about international tenant handling. Operators using Homeppl (Quintain, Bloom) are structurally friendlier than operators using Goodlord/Rentguard (Get Living? Vertus? Way of Life?) even if the FAQ language doesn't distinguish them.

**Related Argent's transparency gap is operator-wide.** Related Argent runs at least three major BTR projects in the pilot slice (Enclave KX / King's Cross, The Maple / Brent Cross Town, Heart of Hale / Tottenham Hale) and has *no operator-level rental process FAQ* comparable to Vertus, Quintain, Greystar, Way of Life, or Grainger. The documentation is press-release-led, each building microsite is WAF-protected against headless fetches, and the unified operator policy that would let Caner understand his chances at any Related Argent building is simply not on the public web. **This is the single biggest "direct contact the leasing team" recommendation of the pilot** — at both The Maple (best price floor) and Heart of Hale (ascending value play), the qualification picture is the uncertainty that matters most for Caner's decision.

**Way of Life is a hard exclusion.** The *"UK-based guarantor, or 12 months of rent in advance"* clause is the clearest structural block in the entire pilot. Any Way of Life building at any area should be auto-flagged `blocked` for Caner's profile — not because Way of Life is hostile, but because the policy is fixed and Caner's capacity is fixed, and the two do not intersect.

**The "single-operator area" pattern is a structural advantage for grad-visa renters.** Wembley Park is the pilot's only area where one operator runs effectively the entire modern rental stack. This means a single successful negotiation with Quintain Living gives Caner access to every Wembley Park building, whereas at Nine Elms a successful negotiation with Greystar Bloom only opens Bloom — not Way of Life, not Embassy Gardens, not Riverlight Quay. The single-operator shape reduces the number of separate qualification negotiations Caner needs to win from 5–10 (at a multi-operator area like Nine Elms) to 1 (at Wembley Park). This is a second-order advantage for Wembley Park that is not captured in the area-level rubric at all and that only becomes visible through the grad-visa-realism lens.

---

## Open questions

These are the questions whose answers would materially change the dataset's qualification calls if resolved. Each is specific and scoped so the full-scale agent 09 or a downstream human pass can act on them.

1. **Does Quintain Living's "agreed number of months upfront" clause actually clear referencing for a grad-visa renter with 3 months ceiling?** The FAQ says the number of months is negotiated and there is no published floor, but the pilot did not find first-person evidence of 3 months specifically being accepted. Evidence that would resolve: a HomeViews review, r/HousingUK post, or direct operator confirmation naming "3 months upfront" as accepted for an international tenant with no UK guarantor. This is the pilot's single most load-bearing open question.

2. **Does Quintain Living actually route failed-standard-referencing international tenants to Homeppl's Guarantid service?** The commercial relationship is publicly documented as having been built to offer depositless access to international tenants, but Quintain's public materials name upfront rent as the fallback without referencing Guarantid explicitly. Evidence that would resolve: Homeppl case study language, Quintain internal referencing documentation, or direct confirmation that an applicant who failed the 2.5× rule was offered Guarantid rather than upfront.

3. **What is Get Living's actual income multiple, upfront policy, and UK guarantor rule?** Get Living is "widely thought to be" grad-visa-friendly but the operator's public terms and conditions page does not publish any of the three load-bearing facts (multiple, upfront mechanics, UK guarantor hard requirement). Evidence that would resolve: a Get Living application email, a direct FAQ update from Get Living, a Reddit or HomeViews first-hand account naming the specific policy. The pilot's `unknown` call here may be wrong in either direction and the full sweep should close this gap.

4. **What is Related Argent's operator-level rental process?** Specifically: does Related Argent run a unified policy across Enclave KX, The Maple, and Heart of Hale, or do the individual buildings differ? The King's Cross pre-migration file records 30× / 6-month / strict credit at Enclave KX, but The Maple and Heart of Hale may have different policies. Evidence that would resolve: a Related Argent operator-level FAQ (currently nonexistent), or direct contact with each individual building's leasing team.

5. **Does Way of Life's "12 months in advance" clause ever flex?** The policy is the clearest structural block in the pilot, but any discretionary flex (9 months? 6 months? case-by-case?) would materially change several building calls. Evidence that would resolve: a Way of Life applicant who negotiated fewer than 12 months, confirmed via review or direct testimony.

6. **Does Vertus have an undocumented alternative pathway for international tenants?** The Vertus FAQ is silent on guarantor and upfront fallback, but operators sometimes run discretionary pathways not published online. Evidence that would resolve: a Vertus applicant who cleared referencing as a grad-visa international renter with no UK guarantor; direct operator confirmation.

7. **What does the North Acton BTR cluster look like operator-by-operator?** Imperial Square, Westmark, Vermilion, The Lexicon, Portal West sub-blocks — the pilot could not enumerate operators and policies for each. This is a clear full-sweep gap.

8. **Are there any BTR pockets in Brixton I missed?** The pilot's Brixton finding is "no flagship BTR" but this is based on negative search results rather than exhaustive enumeration. A more thorough sweep might surface small BTR operators I missed. The provisional finding should be re-tested.

9. **Is Windlass Apartments (Grainger) at Tottenham Hale or Canning Town?** The attribution is unclear in search results. If Windlass is at Tottenham Hale, Grainger's operator-level `achievable-with-upfront` call applies to Tottenham Hale and materially improves the area's qualification picture. Evidence that would resolve: Grainger's own development page, or a Rightmove listing with confirmed postcode.

10. **Goodman's Fields' individual-landlord distribution** — what fraction of Goodman's Fields listings are let by landlords willing to accept international tenants on 3 months upfront, and what fraction are strict? This is a per-listing evaluation question that the pilot cannot resolve at operator level but which dominates the area's realism for Caner.

---

*End of pilot file. Research time: single session. Output file: `/Users/atacanercetinkaya/Documents/Programming-Projects/flatbrowser/docs/research/sweep/sweep-09-rental-qualification-realism.PILOT.md`.*
