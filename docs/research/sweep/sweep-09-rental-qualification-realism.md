# Sweep agent 09 — Rental Qualification Realism (full run)
Research date: 2026-04-11
Total areas covered: 95 / 95 (every candidate in `context/references/candidate-areas.md`)
Agent focus: Per-project graduate-visa rental qualification realism — the `Project.rental.qualification` block
Agent scope: `achievable` / `achievable-with-upfront` / `unlikely` / `blocked` / `unknown` call per project, backed by operator documentation, Rightmove listing evidence, and (where obtainable) first-hand resident accounts

---

## Methodology

This file is the canonical agent-09 output, superseding the 10-area pilot at `sweep-09-rental-qualification-realism.PILOT.md`. The pilot established the research pattern, the operator hierarchy, and the binding contract refinements; the full run covers all 95 candidate areas at operator-level depth and verifies or refutes the pilot's open questions.

### Source hierarchy (carried from pilot, with one addition)

1. **Ring A — operator primary sources (most trusted).** FAQs, terms and conditions, dedicated policy blog posts, "our rental process" pages owned by the operator themselves. Where fetch succeeds I quote verbatim; where operator microsites are WAF-protected I fall back to Google search-result excerpts and label the citation explicitly.
2. **Ring B — industry intermediaries.** Homeppl (the referencing provider behind Quintain, Greystar Bloom, Fizzy), Rightmove agent pages, BTR industry press, operator launch releases, ARL (Association for Rental Living) operator lists, Goodlord affordability guidance.
3. **Ring C — resident voice.** HomeViews aggregates, Trustpilot reviews, Reddit r/HousingUK threads where indexable. Reddit coverage is still thin in search indexes, so HomeViews and Trustpilot carry most of the weight on the lived-experience side.
4. **Ring D — statute (new since pilot).** The **Renters' Rights Act 2025** received Royal Assent in 2025 with commencement on **1 May 2026** — 20 days after this research session — and materially changes what the qualification field even measures. See the `Statutory context` block below.

### Binding contract refinements (locked post-pilot)

These are the five refinements surfaced during pilot review, now binding for this file:

1. **Operator-level collapsing is allowed.** When an operator runs identical policy across multiple buildings (Quintain at Wembley Park, Vertus across its three towers, Way of Life across its blocks, Apo across its Kew/Barking/Hayes cluster), this file writes ONE operator-level qualification block and names the buildings it applies to. Duplication is avoided; the consensus step should treat a single operator-level call as valid per building.
2. **Mixed-tenure projects get `unknown`, not `blocked`.** `blocked` is reserved for structural qualification blocks (no rental route exists at the operator level). A project that is sold-only at the operator level but rents via individual landlords on Rightmove gets `unknown` because the path exists in principle but cannot be evaluated at operator level. The pilot's Gasholders `blocked` call was wrong on this; it is corrected to `unknown` here.
3. **Primary-source quote from the operator's own FAQ is sufficient evidence.** A direct clause naming the policy (e.g. Quintain's "agreed number of months in advance", Way of Life's "UK-based guarantor, or 12 months of rent in advance") is enough even without a corroborating resident URL. Downgrade to `unknown` only when the operator's own material is vague.
4. **Price-floor blocking is not a grad_visa_realism call.** That field measures qualification realism only. A qualification-friendly project priced above Caner's envelope stays `achievable` or `achievable-with-upfront`; price affordability lives in the rent fields. The pilot's Gasholders `blocked`-on-price call was wrong.
5. **Search-excerpt citations are valid when operator microsites are WAF-protected.** Label them `search-result excerpt only`. The pilot's Quintain deposit-free-renting, The Maple NW2, and Homeppl case study handling was correct.

### Referencing-provider capture

Per the focus brief's capture instruction, every operator block here names the referencing provider where I could identify it (Homeppl, Goodlord, Flatfair, Canopy, Rentguard, in-house). The pilot established that **Homeppl is a structural discriminator** — operators using it inherit access to Open Banking income assessment and the Guarantid international-tenant pathway. This file extends the mapping as far as research reached.

---

## Statutory context — the Renters' Rights Act 2025 rewrites this field

**This is the single most important new finding of the full run.** The Renters' Rights Act 2025 received Royal Assent and commences on **1 May 2026** — twenty days after this research session. Its upfront-rent clause materially changes how Caner's 3-month upfront ceiling interacts with every operator in this file [RRA-1][RRA-2][RRA-3].

### The relevant clause, in plain language

From Gowling WLG's final-countdown brief: *"For new tenancies created on or after May 1, 2026, landlords can require one month's rent (or 28 days for shorter periods) in advance, even before the tenancy commences. However, during the tenancy, any provision requiring more than one month's rent in advance is void"* [RRA-1]. From the Goodlord analysis of the same clause: *"From 1 May 2026, the Renters' Rights Act will put strict limits on upfront rent payments... landlords and agents will be limited to requesting no more than one month's rent upfront... Any clause in a tenancy agreement that requires rent in advance (i.e., before the relevant rental period) will be ineffective"* [RRA-2]. The one carve-out is voluntary post-tenancy pre-payment: *"tenants may choose to pay additional months in advance after the tenancy begins, entirely at their discretion — but landlords cannot require this"* [RRA-2].

### Why this rewrites the qualification question for Caner

Caner's existing route — "pay 3 months upfront to bypass the affordability check" — was the discretionary path the pilot documented at Quintain Living ("the agreed number of months in advance"), at Grainger plc ("a higher proportion of rent in advance"), and at Way of Life ("12 months of rent in advance" as the structural alternative). All three clauses depend on the operator being able to **require** that upfront payment, which the Renters' Rights Act now **prohibits** for any new tenancy created on or after 1 May 2026.

For tenancies signed **before** 1 May 2026, the old rules still apply and existing upfront arrangements are grandfathered: *"tenancies entered into before commencement are not affected by these restrictions"* [RRA-1]. This creates a sharp 20-day window where Caner's pre-act pathway is still open. After 1 May the entire pilot's "achievable-with-upfront" tier collapses to "achievable if operator will *voluntarily* accept post-tenancy pre-payment from a high-risk applicant", which is a much weaker route.

### What this file does about it

Every `grad_visa_realism` call in this file is tagged with its **regime**: `pre-RRA` (valid for tenancies signed on or before 30 April 2026) or `post-RRA` (valid for tenancies signed on or after 1 May 2026). Where the regime materially changes the call, both are shown. This is a second-axis tag the pilot did not have to carry, and it is the most important single addition between pilot and full run. The headline implication: **every operator in the pilot's achievable-with-upfront tier collapses to unknown or unlikely post-RRA, because the structural workaround is statutorily unavailable**.

### How the regime tag interacts with Caner's timeline

Caner is job-hunting now; his realistic next-tenancy window is summer 2026 at the earliest. That is **post-RRA**. For every area and every project in this file, the post-RRA call is the load-bearing one for his actual decision. The pre-RRA calls are preserved for transparency but should be read as "what the pilot saw" rather than "what Caner will face".

### Sources for the statutory context

- **[RRA-1]** https://gowlingwlg.com/en/insights-resources/articles/2026/renters-rights-act-2025-the-final-countdown-1-may-2026 — Gowling WLG "Renters' Rights Act 2025: the final countdown to 1 May 2026" (primary legal brief). Load-bearing: "For new tenancies created on or after May 1, 2026, landlords can require one month's rent (or 28 days for shorter periods) in advance" and "tenancies entered into before commencement are not affected".
- **[RRA-2]** https://blog.goodlord.co/rent-in-advance — Goodlord "Rent in Advance Ban 2026: Unintended Consequences + How to Mitigate". Load-bearing: the effective-date quote, the voluntary-post-tenancy carve-out, and the explicit named impact on international students "lack[ing] guarantors or established credit histories".
- **[RRA-3]** https://assets.publishing.service.gov.uk/media/69bc04b8f7b1c24d8e23ce60/The_Renters__Rights_Act_Information_Sheet_2026.pdf — HM Government Renters' Rights Act 2026 Information Sheet (primary source, statutory).

---

## The operator hierarchy — extended from pilot's 7 to 13 tiers

This is the most decision-relevant output of the full run. The pilot established a 7-tier ranking; the full-area sweep surfaced six additional operators worth documenting and reordered the tiers to reflect the Renters' Rights Act's flattening effect on "achievable-with-upfront" operators. **All tiers below are dual-tagged `pre-RRA` / `post-RRA` where the regime materially changes the call.**

The ordering is by grad-visa realism for Caner specifically (Turkish, graduate visa, no UK credit history, no UK guarantor, 3-month upfront ceiling, £3k/month envelope), not by operator quality or brand strength.

### Tier 1 — Quintain Living (Wembley Park)

- **Operator**: Quintain Living (formerly Tipi), in-house BTR arm of Quintain Ltd
- **Portfolio (Wembley Park, all buildings)**: Landsby, Ferrum, Canada Gardens, Emerald Gardens, Alameda, Tipi Wembley, The Robinson, The Madison, Luna, The Lindley, The Beaufort, Repton Gardens, The Gantry (aparthotel), The Kin, Haven [PIL-1][PIL-2]
- **Referencing provider**: **Homeppl** (confirmed via Homeppl's own case-study landing page cited in pilot, and via the Quintain FAQ's Open Banking mechanism which is Homeppl's signature product)
- **Income multiple**: *"household income of 2.5× the annual rent"* [Q-1] — i.e. annual income ≥ 2.5× annual rent ≈ 30× monthly rent, the UK standard formulation
- **Guarantor rule**: *"Guarantors need to give proof of an individual income of 5× the annual rent and be based in the UK... We only accept one guarantor per apartment"* [Q-1]
- **Upfront rent policy (pre-RRA)**: **Explicitly documented.** *"If you don't meet our criteria for paying rent on a monthly basis, and you don't have a guarantor, we will ask you to pay your rent in advance... you will pay a number of months in advance (e.g. 6 months of rent)"* [Q-1]. The phrase "e.g. 6 months" is the only numerical anchor Quintain publishes; the pilot's prior finding of "the agreed number of months" as the exact language came from a separate deposit-free-renting blog post that is WAF-protected. **The pilot's hope that 3 months specifically would clear Quintain is not verified** — the only published numerical anchor is 6, not 3.
- **International tenant handling**: Quintain publishes a dedicated international renter guide [Q-2]. The FAQ names the canonical candidates for the pay-in-advance path: *"the most common candidates requiring guarantors or advance payment include students, professionals relocating from other countries and international post-grad students — in short, those that don't have a credit history or footprint in the UK"* [Q-1]. Caner is exactly this profile.
- **Credit check**: **Open Banking income assessment** via the referencing partner: *"this can be done via Open Banking (quickest and easiest way)... you submit your bank details through a secured portal that looks at your income vs spending"* [Q-1]. This is materially different from a UK credit file pull; it evaluates cashflow patterns from actively-used bank accounts, which can include overseas accounts.
- **Right to Rent**: standard Home Office check, passport or share code
- **grad_visa_realism (pre-RRA)**: **`achievable-with-upfront`** with medium confidence. The operator explicitly documents the pay-in-advance route, explicitly names international post-grad students as the canonical candidates for it, and uses an Open Banking income assessment that handles empty UK credit files. The residual uncertainty is whether 3 months is sufficient — the only numerical example Quintain gives is 6.
- **grad_visa_realism (post-RRA)**: **`unknown`** with medium confidence. The pay-in-advance path as a requirement is prohibited by the Renters' Rights Act from 1 May 2026. Quintain cannot **require** 6 months, 3 months, or any figure above 1 month. The voluntary post-tenancy pre-payment carve-out is Caner's only remaining route, but it is not a negotiation position he can propose before signing — it is only a right the tenant can exercise after the tenancy begins. Whether Quintain would accept a voluntarily-offered 3-month pre-payment as a substitute for failing the 2.5× check, or whether the check itself becomes binding post-RRA, is the open question that only direct operator contact post-May-2026 can resolve.
- **Evidence**: Quintain Living is still the pilot's highest-ranked operator on the qualification axis *pre-RRA*, but the post-RRA collapse is real and material. The Open Banking assessment keeps Quintain interesting as a pure-affordability call even without the upfront route — if Caner's overseas bank account shows consistent income inflows, the 2.5× check may pass on its own [Q-1][Q-2]. This is the highest-leverage open question in the full run.

### Tier 2 — Grainger plc (Windlass, Argo, and wider portfolio)

- **Operator**: Grainger plc — the UK's largest listed residential landlord, with a BTR portfolio branded at the building level
- **London portfolio**: Argo Apartments (Canning Town), Windlass Apartments (Canning Town / Docklands area; pilot flagged the Tottenham Hale attribution as uncertain and this file resolves it — see the Canning Town section below), Abbey Place (Newham), Pontoon Dock, Millet Place and others; Grainger's public development map names London specifically as a growth market [G-1][G-2]
- **Referencing provider**: Not named on the rental-process page; online third-party providers used, with credit check run alongside
- **Income multiple**: *"the collective annual salaries of everyone who'll be making rental payments would need to be around 30 times the monthly rent"* [G-1]
- **Guarantor vs upfront rule (pre-RRA)**: **Explicitly negotiable.** *"We do accept guarantors or a higher proportion of rent in advance, but we recommend you discuss this upfront with our team"* [G-1]. This is the second-most-explicit pay-in-advance clause in the full run, after Quintain's. Grainger frames guarantor and upfront as parallel alternatives, not sequential.
- **International tenant handling**: **Explicitly anticipated** in the process language: *"please have your passport or share code handy (if you are a non-UK citizen)"* [G-1]. Non-UK citizens are named in the check instructions rather than implicit.
- **Credit check**: *"The referencing check includes a credit check, as well as verifying your employment status and household income details"* — this is a **standard credit check** (not Quintain's Open Banking assessment), which is the one weakness in Grainger's offer for an applicant with an empty UK credit file [G-1]. A standard credit check can fail a thin UK file even when the income side clears.
- **grad_visa_realism (pre-RRA)**: **`achievable-with-upfront`** with medium confidence. The documented negotiable-upfront route and the explicit non-UK citizen language make Grainger the second-most-friendly BTR operator in the full run. Below Quintain because of the standard credit check.
- **grad_visa_realism (post-RRA)**: **`unknown`** with medium confidence. Same RRA collapse as Quintain — the negotiable-upfront route cannot be required after 1 May 2026. Grainger's sentence *"a higher proportion of rent in advance"* is specifically the clause the RRA voids.
- **Evidence**: Grainger's rental-process page is the only BTR operator page in the full run that explicitly binds non-UK citizens into the process language rather than relegating them to an international-renter guide [G-1]. The pilot's Windlass Apartments attribution-to-Tottenham-Hale was wrong — Windlass is in Canning Town (E16), not N17 Tottenham Hale [G-2]. Grainger does not currently operate a Tottenham Hale building; the Heart of Hale / Related Argent pathway is the relevant one for N17. **This file resolves the pilot's open question #9 as: Windlass is at Canning Town.**

### Tier 3 — Apo (Kew Bridge, Barking, Hayes — and Manchester / Liverpool / Birmingham)

- **Operator**: Apo Group Ltd, an in-house BTR brand running primarily under the "A Part Of" umbrella (also written "a-part-of.com") — the successor and sister brand to Be:here, which was historically Hayes-first [AP-1][AP-2][AP-3]
- **London portfolio**: Apo Kew Bridge (TW8, adjacent to Kew Bridge station and Gunnersbury Park, studios to 3-bed), Apo Barking Wharf (IG11, 595 studio/1-bed/2-bed homes over 11 storeys), Apo at The Gatefold (Hayes UB3, formerly Be:here Hayes, Crossrail/Elizabeth Line); plus non-London portfolio at Birmingham Holloway Head, Liverpool Aura, Manchester Angel Gardens [AP-1][AP-2]
- **Referencing provider**: Unknown — Apo's public FAQ is marketing-led rather than policy-led, and the per-location management team (yourhostKEW, yourhostHAY, yourhostBHM, etc.) is the documented first-contact point rather than a central policy page
- **Portable tenancies**: Apo explicitly markets "portable tenancies" that allow a renter to move between Apo buildings without re-referencing [AP-3] — this is a structural advantage unique to Apo within the full run, because a renter who clears Apo Kew Bridge inherits access to Apo Barking, Apo Hayes, and (if they're willing to leave London) all the regional buildings. It is the first cross-building portability clause I found in any BTR operator's public materials. This should be flagged for the schema-level operator field.
- **Income multiple / upfront / guarantor**: **Not publicly documented** on the main a-part-of.com site. The FAQ page returned 404 during research; the contact page points to per-building management teams as the first-contact routes. Apo is a smaller BTR than Quintain / Vertus / Grainger / Greystar and does not publish the full-form rental-process page the larger operators do.
- **International tenant handling**: Not publicly documented at operator level. The portable-tenancies positioning implies a smaller-scale, more hospitality-style operating model than the major BTRs, which *typically* corresponds to lighter referencing, but this is inference rather than evidence.
- **grad_visa_realism (pre-RRA)**: **`unknown`** with medium confidence in the gap. Direct contact with the leasing team at Kew Bridge, Barking, or Hayes is the highest-leverage way to resolve this. Apo's commercial positioning (portable tenancies, per-location management, marketing-led) suggests a more flexible referencing posture than the Quintain / Vertus / Get Living strata, but I cannot substantiate that from public materials. This is a high-priority "contact directly" operator for Caner.
- **grad_visa_realism (post-RRA)**: **`unknown`** with the same confidence. The RRA changes the policy landscape uniformly, but Apo's unknown pre-RRA call does not move because the public evidence is not strong enough in either direction to substantiate a shift.
- **Evidence**: Apo is the pilot's clearest operator-level discovery. Its portable-tenancies clause is a structural feature no other BTR in the full run publishes, and the operator covers three London areas directly relevant to Caner's candidate list (Kew Bridge in west London, Barking in east London, Hayes on the Elizabeth Line). The qualification opacity is a research-budget constraint, not a structural block [AP-1][AP-2][AP-3][AP-4].

### Tier 4 — Vertus (Canary Wharf Group — 10 George Street, 8 Water Street, Newfoundland)

- **Operator**: Vertus (Canary Wharf Group in-house BTR)
- **Portfolio**: 10 George Street (financial core, CW Estate), 8 Water Street (Wood Wharf, 174 apartments), Newfoundland (58-storey, 636 apartments) — 1,137 apartments across three towers [V-1][V-2]
- **Referencing provider**: Not named in public FAQ; third-party provider with 12–72 hour turnaround
- **Income multiple**: **30× monthly rent combined** — *"The combined annual income of all named tenants needs to be more than, or equal to, 30 times the monthly rent"* [V-1]
- **International tenant handling (NEW finding — corrects pilot)**: **Vertus DOES have a publicly documented international pathway** that the pilot missed. The Vertus FAQ states: *"applicants moving to the UK from abroad can use savings to prove their affordability (savings must = 30× the monthly Rent)"* [V-1]. This is a documented savings-based affordability route for international applicants with no UK credit history. For Caner specifically: a £2,500/month Vertus apartment would need £75,000 in documented savings, which he likely cannot produce — but the path **exists** and is not `blocked` in the way the pilot implied.
- **Upfront rent policy**: Not documented as a formal alternative pathway. The FAQ states only *"one month's rent is paid in advance"* as the standard structure (from the pilot's [15] citation) — not the discretionary multi-month fallback that Quintain, Grainger, and Way of Life document.
- **Guarantor rule**: Not publicly documented. The Vertus FAQ is conspicuously silent on guarantors, which is unusual for a major BTR.
- **Credit check**: Standard via third-party provider; 12–72 hour turnaround *"once we've received all your documents"* [V-1]
- **grad_visa_realism (pre-RRA)**: **`unlikely`** with medium confidence, revised upward from the pilot's straight `unlikely`. The savings-based international route is a real published path but requires savings that Caner cannot produce (30× monthly rent in documented savings is a £75k+ floor at Vertus's price tier). The upfront route is not documented as a discretionary alternative. A very-well-saved international applicant could clear Vertus; Caner structurally cannot.
- **grad_visa_realism (post-RRA)**: **`unlikely`** with medium confidence. The RRA has little impact here because Vertus was already not relying on a documented upfront pathway — its process is income-and-savings-based, and the income check and savings check are both untouched by the upfront-rent ban. Vertus is therefore one of the few operators where the pre-RRA and post-RRA calls are materially the same.
- **Evidence**: The pilot underweighted the savings pathway. Vertus is still not reachable for a typical grad-visa applicant at its price tier, but the qualification obstruction is "can you show 30× monthly rent in savings" rather than "no pathway exists". This is a distinct-shape finding and should be captured [V-1][V-2].

### Tier 5 — Greystar (Bloom Nine Elms, Mylo Nine Elms, Fizzy Living, Chapter student portfolio)

- **Operator**: Greystar — the US-headquartered global BTR operator; owns Bloom Nine Elms (acquired from Henderson Park partnership), Mylo Nine Elms, and **Fizzy Living** (acquired from Thames Valley Housing 2020; now fully integrated into the Greystar portfolio) [GS-1][GS-2][GS-3][GS-4]
- **Chapter**: Greystar's Chapter-branded portfolio in London (Chapter King's Cross, Chapter Islington, Chapter White City, Chapter South Bank, Chapter Lewisham, Chapter Portobello) is primarily **student accommodation** rather than BTR — it sits outside this file's T1.4 "modern managed rental stock for non-students" scope, but is noted as the Greystar sibling brand for cross-reference [GS-5]. For adult grad-visa renters without student enrolment, Chapter is not a route.
- **Referencing provider (Bloom, confirmed)**: **Homeppl** — same backend as Quintain Living [B-1]. This gives Bloom the same structural access to Open Banking income assessment and the Guarantid pathway as Quintain.
- **Referencing provider (Fizzy, confirmed)**: **Homeppl** too — *"referencing is carried out [by] Homeppl who will carry out the assessment of your eligibility"* [F-1]. Same backend.
- **Income multiple (Bloom)**: *"The joint household income must be at least 2.66 times the yearly rent"* [B-1] — i.e. ≈32× monthly, marginally stricter than the 30× standard
- **Income multiple (Fizzy)**: **2.66× annual**, identical to Bloom — *"The joint household income must be at least 2.66 times the yearly rent"* [F-1]
- **Guarantor rule (Bloom, Fizzy)**: **Explicit and identical.** *"guarantors are accepted however they too will be subject to referencing and must be at least 4 times the yearly rent to pass affordability checks"* [B-1][F-1]
- **Upfront rent rule (Fizzy, explicit)**: **"Students must pay 12 months rent in advance."** The full clause: *"If you have no income or are a student, you are able to rent with Fizzy provided you are able to provide a UK based guarantor (who passes the affordability criteria of 4 times annual rent) or pay a minimum of 12 months' rent in advance"* [F-1]. Twelve months is Fizzy's fixed upfront ceiling — four times Caner's 3-month capacity. This is Fizzy's **structural block** for Caner's profile pre-RRA.
- **Upfront rent rule (Bloom)**: Not explicitly documented on the Bloom FAQ beyond the standard 5-week deposit + 1-week holding payment + Flatfair deposit-replacement option. The pay-in-advance route as a documented workaround is **not** on the Bloom FAQ. This is an interesting asymmetry within the Greystar portfolio: Fizzy names the 12-month upfront alternative; Bloom (sibling brand, same backend) does not.
- **Deposit alternative**: Bloom and Fizzy both offer Flatfair deposit-replacement (£350 for rents under £3k, £600 over) — this is a cashflow advantage for Caner at move-in but does not change the qualification question [B-1]
- **grad_visa_realism (Bloom, pre-RRA)**: **`achievable-with-upfront`** with low-medium confidence, carried from pilot. The Homeppl backend gives structural access to Guarantid pathway, but Bloom's FAQ does not explicitly name pay-in-advance as an alternative, so the call leans cautiously positive rather than firmly.
- **grad_visa_realism (Bloom, post-RRA)**: **`unknown`** with medium confidence. The Homeppl backend still matters for the 2.66× check, but the implicit upfront workaround is statutorily unavailable for new tenancies.
- **grad_visa_realism (Fizzy, pre-RRA)**: **`blocked`** with high confidence. The 12-months-or-UK-guarantor clause is explicit and closes both alternative paths for Caner. Same shape as Way of Life.
- **grad_visa_realism (Fizzy, post-RRA)**: **`blocked`** with high confidence. The RRA voids the 12-months requirement, but the practical effect is that Fizzy cannot require it — so failed-referencing applicants who lack a UK guarantor have *no* remaining route at all at Fizzy post-RRA. The block actually tightens, not loosens.
- **Evidence**: The Greystar portfolio splits into two very different calls within the same parent operator. Bloom is moderately friendly via the Homeppl backend; Fizzy is structurally blocked via the explicit 12-month clause. This is the clearest intra-operator policy asymmetry in the full run [B-1][F-1][GS-1][GS-2][GS-3][GS-4].

### Tier 6 — Related Argent / Be Living (Enclave KX, The Maple NW2, 1/2 Ferry Island N17)

- **Operator**: Related Argent in-house BTR (branded at the building level; historical brand relations include Be Living, Be:Here)
- **Portfolio (Phase F scope)**: Enclave KX / King's Cross; The Maple at Brent Cross Town (Phase 1 July 2025, Phase 2 September 2025, 500+ apartments combined); 1 Ferry Island at Heart of Hale / Tottenham Hale (108 homes, AHMM-designed, Phase 1 complete); 2 Ferry Island at Heart of Hale Phase 2 (part of 484-home Phase 2); future BTR at Brent Cross Town (6,700 total homes planned) [RA-1][RA-2][RA-3][RA-4][RA-5]
- **Referencing provider**: Not named in any public Related Argent material I could locate
- **Operator-level FAQ**: **Does not exist publicly.** The transparency gap is operator-wide — the pilot established this at King's Cross, Brent Cross Town, and Tottenham Hale, and the full run confirms it: Related Argent's rental-process documentation is exclusively press-release-led and per-building microsite-led, with no consolidated operator-level policy page comparable to Quintain's, Vertus's, Grainger's, or Greystar Bloom's.
- **Income multiple**: Not publicly documented at operator level; the pre-migration King's Cross Flatbrowser data file records 30× as Argent's working rate for Enclave KX, which is the only concrete number to cite
- **Upfront rent policy**: Pre-migration King's Cross data records 6-month upfront ceiling at Enclave KX with credit check run alongside (not a pure upfront-skip-referencing path). Whether this applies to The Maple or Heart of Hale is not documented.
- **Guarantor rule**: Not publicly documented
- **International tenant handling**: Not publicly documented
- **grad_visa_realism (pre-RRA)**: **`unknown`** with medium confidence in the gap. The pilot called Enclave KX `unlikely` specifically based on the pre-migration data file's carry-forward policy; The Maple and Heart of Hale inherit the same opacity and are marked `unknown` because the qualification picture is genuinely not documented.
- **grad_visa_realism (post-RRA)**: **`unknown`** with high confidence in the gap. The RRA does not change Related Argent's silence — the operator still has no published FAQ, and the "contact the leasing team directly" recommendation from the pilot still applies.
- **Evidence**: Related Argent's transparency gap is the biggest single information gap in the full run. Three decision-relevant BTR buildings (Enclave KX at premium KX price floor, The Maple at the lowest BTR price floor in Flatbrowser at ~£1,950/studio, 1 Ferry Island at a middle-priced Tottenham Hale price point) all inherit the same opacity. The pilot's "direct contact the leasing team" recommendation is reiterated with force [RA-1][RA-2][RA-3][RA-4][RA-5].

### Tier 7 — Get Living (East Village Stratford, Elephant Central, New Maker Yards, Middlewood Locks)

- **Operator**: Get Living (Delancey / Qatari Diar / APG partnership)
- **London portfolio**: East Village E20 (nearly 2,400 homes across Portlands Place, Emperor House, Manna House, Frye House, Vesta House, Taffeta House, N-series townhouses; 2024 planning consent for a further 848 rental + 504 student homes) [GL-1][GL-2][GL-3]; **Elephant Central** at Elephant & Castle (not in the pilot; a real Get Living building I missed — see the Elephant Park area section below)
- **Referencing provider**: Not named in public terms and conditions; third-party automated referencing presumed
- **Income multiple**: **Not publicly stated.** Get Living's terms state only *"We will check your credit history and income to assess your suitability as a prospective resident"* [GL-4] — no numerical anchor. This is the operator-level transparency gap the pilot flagged and the full run confirms.
- **Guarantor rule**: **Not publicly stated.** No UK-guarantor requirement is published. Trustpilot reviews cited in pilot report inconsistent counter-staff handling: "Lie in emails confirming no guarantor needed, then fail to retract this formally and say guarantor needed" — consistent with discretionary case-by-case processing rather than a documented policy [GL-5].
- **Upfront rent rule**: **Not publicly stated.** Get Living asks for a one-week advance holding payment at booking, five-week deposit, and has its 2017 deposit-free-renting policy for applicants who pass referencing or have a guarantor [GL-6]. The pay-in-advance-as-affordability-fallback mechanism is not documented.
- **International tenant handling**: Not explicitly documented via a dedicated "international renter" page (contrast with Quintain). Right to Rent handled via standard Home Office check.
- **Credit check**: Stated as "check your credit history" without specifying strictness or threshold
- **Tenancy flexibility**: Get Living advertises tenancy lengths up to 3 years [GL-2], which is the one published flexibility signal.
- **grad_visa_realism (pre-RRA)**: **`unknown`** with medium confidence, carried unchanged from the pilot. The "widely thought to be grad-visa-friendly" reputation is not backed by documented policy on the operator's public materials. The honest call is `unknown`, not a weak `achievable-with-upfront`.
- **grad_visa_realism (post-RRA)**: **`unknown`** with medium confidence. The RRA does not change anything at Get Living because Get Living's pre-RRA position was already "no documented upfront workaround exists" — the statutory ban voids a provision that was never documented.
- **Evidence**: Get Living's transparency gap is the second-most-decision-relevant after Related Argent's. Given the 2,400+ home portfolio at East Village and the downstream visibility into one of Flatbrowser's flagship candidates, this is a direct-contact priority for Caner [GL-1][GL-2][GL-3][GL-4][GL-5][GL-6].

### Tier 8 — Moda Living (The Stage, New York Square, Angel Gardens, Moda at the Hill)

- **Operator**: Moda Living — large-scale UK BTR, London portfolio focus. Separately partnering with **London Square** on Nine Elms Park (437 apartments across two blocks, 9–13 storeys) [M-1][M-2][M-3]
- **London portfolio (pilot + full run)**: The Stage EC2 / Shoreditch (mixed-use, Shoreditch adjacent); Moda at The Hill (North London — site confirmed via FAQ fetch); Moda / London Square Nine Elms Park (in delivery); future buildings in Harrow and Ealing [M-1][M-2][M-3]
- **Referencing provider**: In-house (FAQ fetch confirmed *"the property conducts its own background and credit checks in-house"*) [M-3]
- **Income multiple**: *"we require that applicants have a monthly income of approximately three times the rent amount"* [M-3] — this is the US-inspired "3× monthly income to monthly rent" formulation, equivalent to an annual income of 36× monthly rent. Stricter than Quintain's 2.5× (≈30× monthly) or Greystar Bloom's 2.66× (≈32× monthly).
- **Guarantor rule**: *"If you do not meet the income requirement on your own, a guarantor may be required. This person will need to complete a separate application and meet our income and credit standards to qualify"* [M-3] — standard, UK-based presumed
- **Upfront rent rule**: Not publicly documented
- **International tenant handling**: *"No specific policy mentioned in the FAQ regarding international applicants"* [M-3] — operator-level silence
- **Credit check**: *"A satisfactory credit history is also necessary, and we conduct a credit check as part of the application process"* [M-3] — standard UK credit check, stricter than Quintain's Open Banking
- **grad_visa_realism (pre-RRA)**: **`unlikely`** with medium confidence. The 3× monthly income rule (stricter than 2.5× annual), the standard credit check, and the silence on international tenant handling combine to make Moda a poor fit for a grad-visa renter with no payslips and an empty UK credit file. Not `blocked` because no explicit exclusion exists.
- **grad_visa_realism (post-RRA)**: **`unlikely`** with medium confidence. Same as pre-RRA — Moda was not relying on a documented upfront workaround, so the RRA is not a material shift.
- **Evidence**: Moda is the first operator in this hierarchy to use a fundamentally different income formulation (3× monthly income instead of 2.5× annual). This is a US-style formulation and is harder to satisfy than the UK-standard 30× monthly formulation [M-1][M-2][M-3].

### Tier 9 — Way of Life (multiple Nine Elms and other blocks)

- **Operator**: Way of Life — mid-scale London BTR
- **Portfolio**: Multiple Nine Elms blocks plus other smaller-scale BTR buildings across London; not a single-location operator [WOL-1]
- **Referencing provider**: Not named publicly
- **Income multiple**: Not publicly stated; implicit 2.5× annual / 30× monthly
- **Upfront rent policy (pre-RRA)**: **The single most explicit structural block in the full run.** *"To meet our affordability criteria, you may be required to have a UK-based guarantor, or 12 months of rent in advance, to proceed with your offer"* [WOL-1]. This is the clearest pre-RRA blocking clause of any operator in this file.
- **Guarantor rule**: UK-based required at unspecified multiple (typical 4× or 5× yearly)
- **International tenant handling**: The only operator in the full run that explicitly binds international applicants to a *12-months-upfront-OR-UK-guarantor* rule in writing. That is structurally blocking for Caner.
- **grad_visa_realism (pre-RRA)**: **`blocked`** with high confidence. Both alternative pathways (UK guarantor, 12 months upfront) are closed for Caner.
- **grad_visa_realism (post-RRA)**: **`blocked`** with high confidence. The RRA voids the 12-months requirement as a *requirement*, but the practical effect is the same: Way of Life cannot compel the 12 months, and so a failed-referencing applicant who cannot provide a UK guarantor has no pathway at all. The block tightens rather than loosens, just like Fizzy Living.
- **Evidence**: The clearest operator-level `blocked` call in the full run; unchanged from pilot [WOL-1].

### Tier 10 — Essential Living (multiple London blocks)

- **Operator**: Essential Living — established mid-scale London BTR with buildings at Maidenhead, Archway, Bethnal Green (Vantage Point), Woodberry Down, Greenford (The Dressage Court), Bermondsey (The Union, Bermondsey Works), and others [EL-1][EL-2]
- **Referencing provider**: In-house, with rental blog specifically covering referencing ("What Is Tenant Referencing: Residential Referencing") [EL-2]
- **Income multiple**: Not numerically published on the main site; sector-standard expected
- **Upfront rent rule**: Not documented publicly
- **Guarantor rule**: Standard UK guarantor accepted; specific multiple not published
- **International tenant handling**: Not explicitly documented via a dedicated international-renter page
- **grad_visa_realism (pre-RRA)**: **`unknown`** with medium confidence. Essential Living is mid-scale and publishes less qualification policy than the top BTRs; the call is genuinely unknown rather than weakly negative.
- **grad_visa_realism (post-RRA)**: **`unknown`** with medium confidence.
- **Evidence**: Essential Living operates in areas Caner cares about (Archway, Bethnal Green, Bermondsey, Greenford) and is worth contacting directly for any specific building [EL-1][EL-2].

### Tier 11 — Folio London (Notting Hill Genesis private rent)

- **Operator**: Folio London — the private-rent brand of Notting Hill Genesis, launched 2007. Currently **£1bn portfolio up for sale** (2024–25), which creates medium-term transition risk for any new tenancy [FL-1][FL-2]
- **Portfolio**: 3,000+ BTR homes across London including the managed rental stock at Royal Wharf (265 apartments), multiple Acton / Ealing buildings, and other scattered developments [FL-2][FL-3]
- **Fees policy**: *"Folio London does not charge extra admin fees — which can often cost renters as much as £300"* — no admin fees beyond legally-required charges [FL-1]
- **Tenancy length**: Up to 3 years on assured shorthold tenancies [FL-1]
- **Referencing provider**: Not named publicly; standard third-party presumed
- **Income multiple / upfront / guarantor / international handling**: Not publicly documented on the Folio London landing page (which returned 404 during research; sourced from LinkedIn company description and contemporary press coverage)
- **grad_visa_realism (pre-RRA)**: **`unknown`** with low-medium confidence. Housing-association roots suggest Folio is more tenant-friendly than purely commercial BTR, but the evidence is not strong enough in either direction to call.
- **grad_visa_realism (post-RRA)**: **`unknown`** with low-medium confidence.
- **Evidence**: The Folio London portfolio sale is a second-order risk worth flagging — a buyer acquisition could change the referencing policy mid-tenancy [FL-1][FL-2][FL-3].

### Tier 12 — Folk Co-Living, ARK Co-Living, Node Living (hospitality-style alternatives)

- **Operators**: Folk Co-Living (Sunday Mills Earlsfield, Florence Dock Battersea, The Palm House Harrow; backed by DTZ Investors), ARK Co-Living (Canary Wharf / formerly The Collective Canary Wharf; rebranded 2022 after Collective administration); Node Living (Brixton SW9, Limehouse E14) [FK-1][FK-2][FK-3][FK-4][FK-5][FK-6]
- **Structural nature**: These are **hospitality-style managed living products** with per-studio booking flows, stays from 1 night (ARK) or 3 months (Folk) to 1+ years, all-bills-included pricing, and explicit acceptance of international residents. They are materially different from an AST at a Quintain or Vertus — closer to serviced accommodation with referencing reduced to affordability + background check.
- **Folk application process**: *"The application process is straightforward, we just need to see proof of income, and for you to do a reference/background check"* [FK-1]. £200 holding fee, no deposit, no admin fees. Pricing at Folk Florence Dock Battersea: from £1,695/month all-in (studio) [FK-2]. Sunday Mills Earlsfield: similar bracket [FK-3].
- **Folk lease length**: Minimum 3 months at Sunday Mills and Palm House; shorter options at Florence Dock (1–89 nights) [FK-1]
- **ARK flexibility**: *"stays from a night to a year"* with nightly rate bookings and a booking.com listing — this is a serviced-apartment-style product, not a conventional tenancy [FK-4]
- **Node Living**: co-living studios from £1,675/month (Brixton) and £1,742/month (Limehouse), bills included, flexible terms [FK-5][FK-6]
- **Referencing provider**: Not named publicly for any of these operators; the referencing bar is explicitly lighter than at Quintain / Vertus / Greystar
- **Income multiple**: Not numerically published; the "proof of income" language suggests a relaxed affordability bar
- **grad_visa_realism (pre-RRA)**: **`achievable`** with medium confidence for Folk and Node; **`achievable`** with medium-high confidence for ARK (the nightly-bookable structure effectively bypasses traditional referencing entirely). These are structurally the friendliest products in the entire full run for an applicant with Caner's profile — the trade-off is that the price floor is high at Folk Battersea (£1,695+ month for a studio) and the unit type is a studio rather than a 1-bed, which may not fit Caner's preferences.
- **grad_visa_realism (post-RRA)**: **`achievable`** with medium confidence. Folk, ARK, and Node are the operators least affected by the Renters' Rights Act because their business model was never dependent on requiring multi-month upfront payments — their qualification-friendliness comes from lighter referencing standards and hospitality-style booking flows, which RRA does not touch. **Post-RRA, these three operators may actually be Caner's most realistic paths to a London upgrade.**
- **Evidence**: The hospitality-style managed living segment is structurally RRA-immune and qualification-light. For Caner's profile specifically, this is the most important addition to the operator hierarchy between pilot and full run [FK-1][FK-2][FK-3][FK-4][FK-5][FK-6].

### Tier 13 — L&G Living (New Acres Wandsworth), Legal & General BTR portfolio

- **Operator**: Legal & General BTR (Legal & General Investment Management Real Assets)
- **Portfolio**: New Acres Wandsworth (1,034 homes, over 75% let, flagship scheme completed 2024; 6,000+ UK BTR homes delivered since 2016 via over £3bn investment; Wood Street House; partnership with Nomura announced 2024 for further London delivery including Herne Hill) [LG-1][LG-2][LG-3]
- **Referencing provider**: Not named in the press releases; sector-standard presumed
- **Income multiple / upfront / guarantor / international**: **Not publicly documented** at operator level. L&G Living's rental process documentation is sparse; contemporary press coverage is acquisition-led rather than tenant-led. This is a second-tier Related-Argent-style transparency gap.
- **grad_visa_realism (pre-RRA)**: **`unknown`** with low-medium confidence
- **grad_visa_realism (post-RRA)**: **`unknown`** with low-medium confidence
- **Evidence**: L&G's 1,034-home flagship at New Acres is the largest single BTR site in Wandsworth and is a missed operator in the pilot; it is documented here as a candidate for direct operator contact [LG-1][LG-2][LG-3].

### Structural aside: Homeppl as second-layer signal (carried from pilot, verified)

The pilot established that **Homeppl is the structural discriminator** between "operator looks friendly on paper" and "operator has a real international-tenant backend". The full run confirms this and extends the mapping:

| Operator | Uses Homeppl? | Source |
|---|---|---|
| Quintain Living | **Yes** (confirmed via Homeppl case-study landing page and FAQ's Open Banking mechanism) | [PIL-7], [Q-1] |
| Greystar Bloom Nine Elms | **Yes** (FAQ names Homeppl explicitly) | [B-1] |
| Fizzy Living | **Yes** (FAQ: *"referencing is carried out Homeppl who will carry out the assessment of your eligibility"*) | [F-1] |
| Greystar Mylo Nine Elms | Assumed yes (same portfolio as Bloom) | Inference |
| Vertus | Unknown; not named | [V-1] |
| Get Living | Unknown; not named | [GL-4] |
| Way of Life | Unknown; not named | [WOL-1] |
| Grainger plc | Unknown; not named — standard credit check language suggests a different provider | [G-1] |
| Moda Living | **In-house** (per FAQ fetch) | [M-3] |
| Apo | Unknown | [AP-1] |
| Related Argent | Unknown | Inference |
| Folk Co-Living | Unknown; lighter process suggests different backend | [FK-1] |
| Folio London | Unknown | [FL-1] |

**The Homeppl-using operators (Quintain, Bloom, Fizzy) inherit access to:**
- Open Banking income assessment, which treats actively-used overseas bank accounts as evidence of income rather than requiring UK payslips
- The Guarantid service, which makes Homeppl itself the UK guarantor for accepted international tenants at ~5.8% of annual rent (≈one month's rent as a one-off fee)

This means `referencing_provider` is a schema-level field that would meaningfully differentiate operators even when their FAQ language is silent on international tenant handling. **The pilot's recommendation to add `referencing_provider` to the `Project.rental.qualification` schema is reaffirmed with force**, now backed by a 3-of-13 confirmed-Homeppl subset plus the in-house / unknown split for the rest.

### Sources for operator hierarchy

- **[Q-1]** https://www.quintainliving.com/faqs — Quintain Living FAQ primary source (verified via WebFetch, 2026-04-11). Load-bearing quotes extracted: 2.5× income rule, 5× UK guarantor, pay-in-advance clause with "e.g. 6 months" example, Open Banking mechanism, international post-grad student framing.
- **[Q-2]** https://www.quintainliving.com/blog/moving-to-london-international-renter-guide — Quintain international renter guide (carried from pilot as [6]).
- **[G-1]** https://www.graingerplc.co.uk/living-with-us/our-rental-process — Grainger plc "Our Rental Process" primary source (verified via WebFetch, 2026-04-11). Load-bearing quotes: 30× monthly income, "guarantors or a higher proportion of rent in advance", non-UK citizen explicit handling, credit check language.
- **[G-2]** https://windlass.uk.com — Windlass Apartments (Grainger) — Canning Town E16 location confirmed. The pilot's Tottenham Hale attribution was wrong.
- **[V-1]** https://thisisvertus.com/faqs/ — Vertus FAQ primary source (verified via WebFetch + WebSearch, 2026-04-11). Load-bearing: 30× monthly income rule, savings-based international pathway (30× monthly in savings), 12–72 hour referencing turnaround.
- **[V-2]** https://thisisvertus.com/apartments-to-rent/newfoundland/ — Vertus Newfoundland listing (pilot [12]).
- **[B-1]** https://bloom-nineelms.co.uk/faqs/ — Greystar Bloom Nine Elms FAQ (pilot [3]). Load-bearing: 2.66× income, 4× yearly guarantor, Homeppl referencing, Flatfair deposit alternative.
- **[F-1]** https://fizzyliving.com/faq — Fizzy Living FAQ primary source (verified via WebFetch, 2026-04-11). Load-bearing: 2.66× income, 4× guarantor, "Students must pay 12 months rent in advance", Homeppl referencing provider, Flatfair deposit option.
- **[GS-1]** https://www.bisnow.com/london/news/build-to-rent/the-2-million-reasons-greystar-is-buying-btr-specialist-fizzy-living-109970 — Bisnow coverage of Greystar acquisition of Fizzy Living.
- **[GS-2]** https://www.greystar.com/bloom-east-london-uk/p_20370 — Greystar Bloom East operator page (pilot [31]).
- **[GS-3]** https://www.greystar.com/properties/london-england/mylo-nine-elms — Greystar Mylo Nine Elms (pilot [32]).
- **[GS-4]** https://www.greystar.com/business/regions/europe/united-kingdom-business-services — Greystar UK business services.
- **[GS-5]** https://www.greystar.com/properties/london-england/chapter-kings-cross, chapter-islington, chapter-white-city, chapter-south-bank, chapter-lewisham, chapter-portobello — Chapter student portfolio across London (Greystar sibling brand).
- **[GL-1]** https://www.getliving.com/our-neighbourhoods/east-village/ — Get Living East Village page (pilot [26]).
- **[GL-2]** https://www.getliving.com/find-a-home/east-village/ — Get Living find-a-home index for East Village.
- **[GL-3]** https://corporate.getliving.com/neighbourhoods/east-village/ — Get Living corporate East Village page (~2,400 homes confirmation, pilot [30]).
- **[GL-4]** https://www.getliving.com/terms-and-conditions/ — Get Living terms and conditions (pilot [25]; verified via WebFetch 2026-04-11). Load-bearing: credit + income checking stated, one-week advance holding, 5-week deposit, Right to Rent check, no published income multiple / guarantor / upfront pathway.
- **[GL-5]** https://www.trustpilot.com/review/www.getliving.com — Get Living Trustpilot reviews (pilot [29]).
- **[GL-6]** https://www.getliving.com/news/no-more-deposits-when-renting-with-get-living/ — Get Living 2017 deposit-free announcement (pilot [28]).
- **[M-1]** https://modaliving.com/ — Moda Living corporate site.
- **[M-2]** https://londonsquare.co.uk/lsq-life/detail/london-square-launches-build-to-rent-division-with-nine-elms-park-deal — London Square BTR launch with Moda Living at Nine Elms Park (437 apartments, 9–13 storeys).
- **[M-3]** https://modaatthehill.com/faqs/ — Moda at The Hill FAQ (verified via WebFetch 2026-04-11). Load-bearing: 3× monthly income rule, in-house credit check, guarantor clause, no international tenant policy.
- **[WOL-1]** https://www.wayoflife.com/faqs/renting-faqs — Way of Life renting FAQ (pilot [4]; verified 2026-04-11). Load-bearing: *"UK-based guarantor, or 12 months of rent in advance"* — the pilot's clearest structural block clause.
- **[RA-1]** https://relatedargent.co.uk/2025/07/21/first-phase-of-over-500-home-btr-scheme-launches-at-brent-cross-town-as-rental-demand-grows — Related Argent launch press release for The Maple Phase 1, July 2025 (pilot [38]).
- **[RA-2]** https://www.themaplenw2.com/ — The Maple NW2 microsite (WAF-protected; search-result excerpts only).
- **[RA-3]** https://heartofhale.co.uk/1-ferry-island — Heart of Hale 1 Ferry Island primary site (pilot [51]).
- **[RA-4]** https://www.icgam.com/2023/10/02/related-argent-expands-build-to-rent-portfolio-starting-construction-on-484-homes-at-tottenham-hale-with-243-million-loan-from-icg-real-estate/ — ICG Real Estate press release, £243m loan for Phase 2 Heart of Hale (pilot [49]).
- **[RA-5]** https://relatedargent.co.uk/2023/10/02/related-argent-expands-build-to-rent-portfolio-following-243m-loan-from-icg-real-estate — Related Argent matching release (pilot [50]).
- **[EL-1]** https://www.essentialliving.co.uk/ — Essential Living corporate site.
- **[EL-2]** https://www.essentialliving.co.uk/blogs-insights/what-is-tenant-referencing-and-why-is-it-needed/ — Essential Living tenant referencing blog post.
- **[AP-1]** https://a-part-of.com/ — Apo corporate homepage.
- **[AP-2]** https://a-part-of.com/places — Apo locations page (Kew Bridge, Barking Wharf, Hayes at the Gatefold, Manchester, Liverpool, Birmingham).
- **[AP-3]** https://www.landlordzone.co.uk/news/build-to-rent-operator-launches-portable-tenancies-in-london/ — LandlordZONE coverage of Apo's portable tenancies launch (operator-wide re-referencing bypass).
- **[AP-4]** https://www.homeviews.com/company/apo — Apo HomeViews aggregate.
- **[FL-1]** https://www.nhg.org.uk/rent-with-us/private-rent/ — Folio London / Notting Hill Genesis private rent page.
- **[FL-2]** https://living.insidehousing.co.uk/news/notting-hill-genesis-puts-1bn-private-rental-business-on-sale-92726 — Inside Housing coverage of £1bn Folio portfolio sale.
- **[FL-3]** https://www.nhhg.org.uk/notting-hill-housing-launches-private-rent-brand/ — NHG announcement of Folio brand launch (2007).
- **[FK-1]** https://www.folkcoliving.com/faqs — Folk Co-Living FAQ (verified 2026-04-11).
- **[FK-2]** https://www.folkcoliving.com/homes/florence-dock — Folk Florence Dock Battersea studio apartments (270 studios, £1,695/month all-in).
- **[FK-3]** https://www.folkcoliving.com/homes/sunday-mills — Folk Sunday Mills Earlsfield.
- **[FK-4]** https://arkliving.com/coliving/locations/canary-wharf — ARK Co-Living Canary Wharf (formerly The Collective Canary Wharf; rebranded 2022; nightly-to-yearly flexible).
- **[FK-5]** https://node-living.com/coliving/london/ — Node Living London (Brixton + Limehouse).
- **[FK-6]** https://www.dtzinvestors.com/en/news/2023/december/dtz-investors-agrees-110m-refinance-with-smbc-bank-international-for-folk-co-living-portfolio — DTZ Investors £110m Folk portfolio refinance (ownership / operator backing confirmation).
- **[LG-1]** https://group.legalandgeneral.com/en/newsroom/press-releases/l-g-completes-flagship-build-to-rent-scheme-in-london-delivering-1034-homes — L&G New Acres Wandsworth flagship completion (1,034 homes).
- **[LG-2]** https://www.legalandgeneral.com/institutional/real-assets/capabilities/build-to-rent/ — L&G BTR institutional page.
- **[LG-3]** https://www.woodstreethouse.com/your-landlord — L&G Wood Street House landlord page.
- **[PIL-1]** https://www.quintainliving.com/faqs — Quintain FAQ (carried from pilot as [1]).
- **[PIL-2]** https://www.homeviews.com/company/quintain-living — Quintain HomeViews aggregate 4.14/5 (carried from pilot as [2]).
- **[PIL-7]** https://www.homeppl.com/lp/case-study-quintain-living/ — Homeppl / Quintain case study (carried from pilot as [7]).

---

## Areas

The 95 candidate areas are grouped by the same regional buckets as `context/references/candidate-areas.md`. Every area gets:

1. **Projects in this area** — enumeration of modern managed rental stock and the operator for each.
2. **Qualification realism per project** — operator-level call, collapsed per refinement #1 where identical, with explicit dual-regime tag (`pre-RRA` / `post-RRA`) where the Renters' Rights Act materially changes the call.
3. **Sources for this area** — minimum one operator URL and one listing / attribution URL per named project, plus cross-references into the operator hierarchy section above.
4. **Confidence** — `high` / `medium` / `low` for this file's coverage of the area's qualification picture.

For areas where the operator-level call is already documented in the tier 1–13 hierarchy above, I cross-reference by tier number rather than re-derive — per refinement #1 the operator-level block is the authoritative one and re-deriving per building creates false duplication.

---

## Section 1 — 14 existing Flatbrowser areas (migrated from Phase B5)

### wembley-park — Wembley Park

#### Projects in this area

Wembley Park is the single-operator BTR campus of the full run. Effectively every modern managed rental building is run by **Quintain Living** (Tier 1 operator in the hierarchy above). Quintain's Wembley Park portfolio spans (non-exhaustive): **Landsby, Ferrum, Canada Gardens, Emerald Gardens, Alameda, Tipi Wembley, The Robinson, The Madison, Luna, The Lindley, The Beaufort, Repton Gardens, The Gantry (aparthotel), The Kin, Haven** [W-1][PIL-1][PIL-2]. A separate managed building — **Dandi Wembley** at the London Designer Outlet — is listed as a serviced-apartment-style product but is let via agents including Hamptons and RightNow Residential rather than a Quintain-style unified process; its attribution per research returned some results suggesting Quintain-managed and others suggesting independent. Treat Dandi as `unknown` at the operator level pending direct attribution [W-2][W-3].

#### Qualification realism — Quintain Living (portfolio-wide)

**Per Tier 1 of the operator hierarchy.** All Quintain buildings at Wembley Park share:
- Income: 2.5× annual rent
- Guarantor: UK-based, 5× annual individual income
- Credit check: Open Banking via Homeppl
- International renters: explicitly documented as the canonical candidates for pay-in-advance
- **Pre-RRA call**: `achievable-with-upfront` (medium confidence, 3-month ceiling vs Quintain's "e.g. 6 months" example is the residual uncertainty)
- **Post-RRA call**: `unknown` (medium confidence, voluntary post-tenancy pre-payment is Caner's only remaining route)

#### Qualification realism — Dandi Wembley

**`unknown`** (low confidence on attribution). If Dandi is Quintain-managed, inherits Tier 1; if independent, it is a serviced-apartment product with lighter referencing. Direct confirmation required.

#### Sources for this area

- [W-1] https://www.quintainliving.com/ — Quintain Living Wembley Park master site
- [W-2] https://www.hamptons.co.uk/to-rent/build-to-rent/dandi-wembley — Dandi Wembley via Hamptons agency
- [W-3] https://rightnowresidential.co.uk/developments/dandi-wembley/ — Dandi Wembley via RightNow Residential
- Cross-ref: Tier 1 operator hierarchy (Quintain Living) + pilot sources [PIL-1], [PIL-2], [Q-1], [Q-2], [PIL-7]

#### Confidence

**High** on the Quintain operator picture (primary source FAQ verified 2026-04-11). **Medium** on how 3 months specifically clears Quintain's "e.g. 6 months" pay-in-advance frame. **Low** on Dandi's operator attribution specifically.

---

### greenwich-peninsula — Greenwich Peninsula

#### Projects in this area

Greenwich Peninsula is a **single-developer masterplan** (Knight Dragon, HK$72bn / £8.4bn scheme, 17,500 homes planned of which ~3,094 delivered) [GP-1][GP-2]. The modern rental stack is dominated by Knight Dragon's in-house rental arm, **Greenwich Peninsula Living** (a.k.a. Greenwich Peninsula Lettings), which manages 650+ apartments across the development [GP-3][GP-4][GP-5]. Named buildings:

1. **No. 4 Upper Riverside** — the first **purpose-built rental building** on the Peninsula (191 private rental units, delivered by Knight Dragon) [GP-3]
2. **No. 2 Upper Riverside** (lettings managed by Greenwich Peninsula Living) [GP-6]
3. **Upper Riverside Phases 3–5** — mix of rental and ownership
4. **Peninsula Gardens** — Knight Dragon's "next chapter", marketed primarily for sale with 94% of first release sold to Hong Kong and global investor markets in Sept 2022; BTR exposure minimal [GP-7]
5. **Upper Riverside lettings via individual landlords** — fragmented pathway through Circa London, JOHNS&CO, Benham & Reeves, others

#### Qualification realism — Knight Dragon / Greenwich Peninsula Living

- **Operator**: Knight Dragon in-house lettings (Greenwich Peninsula Living)
- **Referencing provider**: Not named publicly
- **Income multiple**: Not published on the tenant page (they link to an affordability calculator without publishing the formula)
- **Fees**: *"Holding Deposit: 1 week's rent. Tenancy Deposit: 5 weeks' rent"* [GP-4] — standard
- **Guarantor / upfront / international**: **Not publicly documented.** The page is tenant-facing but marketing-led; specific policy is routed to the lettings team at 020 3770 2230 / lettings@greenwichpeninsula.co.uk
- **Investor-side**: The Peninsula Gardens sales process is explicitly international-investor-led (94% sold to HK / global in one weekend). Investor-friendliness does not translate to tenant-friendliness, per the Embassy Gardens pattern — overseas landlords typically delegate to UK letting agents with standard strict referencing.
- **grad_visa_realism (pre-RRA)**: **`unknown`** with medium confidence. The operator-level policy is not published; direct contact required.
- **grad_visa_realism (post-RRA)**: **`unknown`** with medium confidence.

#### Qualification realism — individual-landlord rental at Upper Riverside / other Peninsula stock

Per operator-absence pattern. **`unknown`** at the project level — individual-listing evaluation is the only resolution route.

#### Sources for this area

- [GP-1] https://knightdragon.com/ — Knight Dragon corporate site
- [GP-2] https://en.prnasia.com/releases/apac/94-of-knight-dragon-s-next-chapter-of-london-s-greenwich-peninsula-development-sold-379406.shtml — Peninsula Gardens 94% sold in opening weekend
- [GP-3] https://www.greenwichpeninsula.co.uk/upper-riverside — Upper Riverside page
- [GP-4] https://www.greenwichpeninsulaliving.co.uk/tenants/ — Greenwich Peninsula Living tenant information (verified 2026-04-11)
- [GP-5] https://www.greenwichpeninsulaliving.co.uk/lettings/ — Greenwich Peninsula Living lettings index
- [GP-6] https://www.greenwichpeninsulaliving.co.uk/lettings/no-2-upper-riverside/ — No. 2 Upper Riverside lettings
- [GP-7] https://www.peninsulagardens.co.uk/our-vision/ — Peninsula Gardens vision page

#### Confidence

**Medium-low**. Knight Dragon's tenant-facing rental process is less transparent than Quintain's or Vertus's; the qualification picture is a real research gap.

---

### stratford — Stratford / East Village

#### Projects in this area

Dominated by **Get Living at East Village E20** (Tier 7 operator). Named buildings: **Portlands Place, Emperor House, Manna House, Frye House, Vesta House, Taffeta House, and the N-series townhouses** (N07, N26) — ~2,400 homes currently, 2024 planning consent for a further 848 rental + 504 student [GL-1][GL-2][GL-3][PIL-25][PIL-26][PIL-27]. Secondary stock:

1. **Lendlease International Quarter** (IQL) — some residential, more commercial + student
2. **Olympicopolis / East Bank** — primarily cultural + student, emerging BTR
3. **Stratford city core** (Westfield-adjacent) — owner-occupier and individual-landlord rental via standard agents
4. **Chobham Manor / East Wick / Sweetwater / Pudding Mill** — Lendlease / LLDC-led outputs around Olympic Park, mixed tenure

#### Qualification realism — Get Living (portfolio-wide)

**Per Tier 7 of the operator hierarchy.** Key points:
- No published income multiple, no published UK guarantor requirement, no published upfront fallback
- Trustpilot / HomeViews reports inconsistent counter-staff handling
- Up to 3-year tenancies, 5-week deposit, 1-week holding payment
- **Pre-RRA call**: `unknown` (medium confidence — the "widely thought grad-visa-friendly" reputation is not backed by documented policy)
- **Post-RRA call**: `unknown` (medium confidence — RRA does not change the pre-RRA position because there was no documented upfront path to void)

#### Qualification realism — Lendlease IQL / Chobham Manor / East Wick / other stock

Operator attribution is mixed; no unified BTR operator. **`unknown`** at project level.

#### Sources for this area

Cross-ref: Tier 7 operator hierarchy (Get Living) plus pilot sources [GL-1]–[GL-6].

#### Confidence

**Medium** on the Get Living coverage (the operator-level transparency gap is the finding, not a research failure). **Low** on non-Get-Living Stratford stock.

---

### battersea-power-station — Battersea Power Station

#### Projects in this area

The modern managed rental stack at Battersea Power Station is dominated by **BPS Lettings** (the in-house letting operation of Battersea Power Station Development Company — owned by a consortium of Malaysian pension funds including SP Setia, Sime Darby, EPF), plus BTR-adjacent premium buildings letting via third-party agents. Named buildings:

1. **Battersea Power Station (Phase 2)** — Wilkinson Eyre conversion, 250+ apartments in the iconic structure itself, primarily build-to-sell with lettings via BPS Lettings for owner-retained units [BPS-1][BPS-2]
2. **Prospect Place** — Frank Gehry-designed (BPS Phase 3a/b), premium ownership-led with individual-landlord rental
3. **Switch House East** and **Switch House West** — Wilkinson Eyre, premium ownership-led
4. **Circus West Village (BPS Phase 1)** — delivered 2017, primarily ownership with significant BTR via BPS Lettings
5. **Koa at Electric Boulevard** — Foster + Partners Phase 3 delivery [BPS-3]

#### Qualification realism — BPS Lettings and individual-landlord routes

- **Operator**: BPS Lettings (in-house, Battersea Power Station Development Company) — no published rental-process FAQ comparable to Quintain, Vertus, Grainger
- **Referencing provider**: Not named publicly
- **Income multiple**: Not publicly documented; premium positioning implies 30× or stricter
- **Price band**: Caner's £3k envelope is below the entry-level rental floor for even the lower-spec BPS buildings; price constraint is real but does not itself affect the `grad_visa_realism` call (per refinement #4)
- **International investor orientation**: BPS is Malaysian-consortium-owned and has a strong overseas investor base, which is investor-friendliness, not tenant-friendliness
- **grad_visa_realism (pre-RRA)**: **`unknown`** with low-medium confidence. No operator-level rental policy to evaluate; the pilot's `unlikely` / `blocked` prior was driven by price and premium positioning rather than evidence of explicit qualification policy.
- **grad_visa_realism (post-RRA)**: **`unknown`** with low-medium confidence.

#### Sources for this area

- [BPS-1] https://batterseapowerstation.co.uk/ — Battersea Power Station master site
- [BPS-2] https://www.homeviews.com/company/battersea-power-station-development — HomeViews aggregate for BPS
- [BPS-3] https://www.koabattersea.co.uk/ — Koa at Electric Boulevard (Foster + Partners Phase 3)

#### Confidence

**Low-medium**. BPS is a premium ownership-led development with no operator-level BTR FAQ to evaluate; qualification picture is a real gap.

---

### kings-cross — King's Cross

#### Projects in this area

Argent / Related Argent masterplan. Modern rental stack:

1. **Enclave KX / Be Living BTR** — Related Argent in-house BTR (Tier 6 operator)
2. **Gasholders London** — 145 canal-side apartments in Grade II listed cast-iron frames, Argent/Hermes/AustralianSuper; primarily **ownership-led**, rental via third-party agents (Knight Frank, Savills, Circa London, Benham & Reeves) [KX-1][KX-2][PIL-19][PIL-20]
3. **The Plimsoll Building (Handyside Street)** — 255 apartments across 13 floors, Argent-delivered via Carillion; mixed rental/owner-occupier, let primarily via Chalk [KX-3][KX-4][PIL-21][PIL-22]
4. **Capella** — ownership-led premium cluster adjacent to Gasholders [KX-5]
5. **Canalside apartments, Granary Square, Coal Drops Yard adjacent** — various smaller-scale Argent stock

#### Qualification realism — Enclave KX / Be Living (Related Argent)

**Per Tier 6 of the operator hierarchy.**
- Pre-migration Flatbrowser data records: 30× income, 6-month upfront ceiling, credit check alongside, `unlikely` call
- **Pre-RRA call**: `unlikely` (medium confidence, carried from pre-migration data)
- **Post-RRA call**: `unknown` (high confidence in the gap — the RRA voids the 6-month upfront ceiling but Related Argent has no published alternative)

#### Qualification realism — Gasholders London (ownership-led)

**Corrected from pilot `blocked` to `unknown`** per refinement #2.
- Mixed-tenure project with no unified operator rental process
- Individual-landlord rental at premium rates (2-bed routinely £5,000+/month)
- **Pre-RRA call**: `unknown` (not blocked — the path exists in principle via individual landlords but cannot be evaluated at operator level)
- **Post-RRA call**: `unknown`

#### Qualification realism — The Plimsoll Building / Capella / other Argent stock

Same ownership-led pattern. **`unknown`** at project level.

#### Qualification realism — Chapter King's Cross (Greystar student)

Not a BTR for grad-visa adult renters — student-only. Outside scope for Caner unless enrolled in education [GS-5].

#### Sources for this area

- [KX-1] https://gasholders.uk/ — Gasholders London primary site (pilot [19])
- [KX-2] https://www.homeviews.com/company/kings-cross-central-general-partners-limited — KX Central LP aggregate (pilot [20])
- [KX-3] http://plimsoll.chalk.co.uk/ — Plimsoll Building rental (pilot [21])
- [KX-4] https://www.buildington.co.uk/buildings/4127/england/london-n1c/handyside-street/plimsoll-building — Plimsoll Building description (pilot [22])
- [KX-5] https://www.argentrelated.co.uk/our-places/kings-cross/ — Related Argent King's Cross master page
- Cross-ref: Tier 6 (Related Argent), pre-migration King's Cross data file at `/src/areas/data/kings-cross.ts`

#### Confidence

**Medium** on Enclave KX (pre-migration data is the authoritative source; Related Argent has published nothing new to triangulate). **Low** on the ownership-led stack. The `unknown` on Gasholders corrects the pilot's `blocked` per refinement #2.

---

### nine-elms — Nine Elms

#### Projects in this area

The multi-operator stress test. The rental/BTR stack:

1. **Bloom Nine Elms (Greystar)** — Tier 5 [PIL-3]
2. **Mylo Nine Elms (Greystar)** — Tier 5 [PIL-32]
3. **Embassy Gardens (EcoWorld Ballymore)** — mixed ownership-led, individual-landlord rental, **`unknown`** per operator-absence pattern [PIL-33][PIL-34]
4. **Riverlight Quay (St James / Berkeley)** — ownership-led, individual-landlord rental, **`unknown`** [PIL-35][PIL-36]
5. **One Nine Elms (R&F Properties)** — premium ownership-led, **`unknown`**
6. **Way of Life buildings at Nine Elms** — Tier 9, **`blocked`** pre-RRA, **`blocked`** post-RRA [WOL-1]
7. **Nine Elms Park (London Square + Moda Living)** — 437 apartments across two 9–13 storey blocks, in delivery; Tier 8 (Moda) [M-2]
8. **Battersea Power Station adjacent** — see battersea-power-station area
9. **The Corniche** — St James / Berkeley, individual-landlord rental

#### Qualification realism — summary per operator

| Project | Operator | Tier | Pre-RRA | Post-RRA |
|---|---|---|---|---|
| Bloom East + Bloom West | Greystar | 5 | `achievable-with-upfront` (low-med) | `unknown` |
| Mylo Nine Elms | Greystar | 5 | `achievable-with-upfront` (low-med) | `unknown` |
| Way of Life buildings | Way of Life | 9 | `blocked` | `blocked` |
| Embassy Gardens | EcoWorld Ballymore | — | `unknown` | `unknown` |
| Riverlight Quay | St James / Berkeley | — | `unknown` | `unknown` |
| One Nine Elms | R&F Properties | — | `unknown` | `unknown` |
| Nine Elms Park | Moda / London Square | 8 | `unlikely` | `unlikely` |
| The Corniche | St James | — | `unknown` | `unknown` |

#### Sources for this area

Cross-ref: operator hierarchy Tiers 5, 8, 9. Plus pilot sources [PIL-3], [PIL-4], [PIL-31]–[PIL-37], and [M-2].

#### Confidence

**High** on operator-level discrimination (Way of Life blocked, Bloom achievable-with-upfront pre-RRA). **Medium** on project-level attribution across the 8+ buildings. Nine Elms is the full run's best illustration of why qualification must be evaluated per operator, not per area.

---

### canary-wharf — Canary Wharf / Wood Wharf

#### Projects in this area

Split into three buckets as pilot established:

1. **Vertus (CWG in-house BTR)** — Tier 4 — runs **10 George Street** (financial core), **8 Water Street** (Wood Wharf, 174 apartments), **Newfoundland** (58-storey, 636 apartments) — 1,137 apartments total [PIL-11][PIL-12]
2. **Ballymore / EcoWorld Ballymore ownership stack in Wood Wharf / Blackwall** — 10 Park Drive, One Park Drive (Herzog & de Meuron, Pritzker-signed), 8 Harbord Square; primarily build-to-sell with individual-landlord rental [PIL-13][PIL-14]
3. **Wardian London** — Ballymore + EcoWorld 764 apartments across East + West towers, ownership-led with rental via JOHNS&CO et al [WD-1][WD-2]
4. **Berkeley / St James / others** — ad hoc rental via third-party agents
5. **ARK Canary Wharf** (formerly The Collective Canary Wharf, 705 rooms, rebranded 2022) — Tier 12 co-living [FK-4]
6. **Smaller BTR / private-landlord stock** at Blackwall, South Dock, Millwall peripheries

#### Qualification realism — summary

| Project | Operator | Tier | Pre-RRA | Post-RRA |
|---|---|---|---|---|
| 10 George Street | Vertus | 4 | `unlikely` (need 30× monthly in savings for int'l path) | `unlikely` |
| 8 Water Street | Vertus | 4 | `unlikely` | `unlikely` |
| Newfoundland | Vertus | 4 | `unlikely` | `unlikely` |
| One Park Drive (Herzog & de Meuron) | Ballymore | — | `unknown` | `unknown` |
| 10 Park Drive | Ballymore | — | `unknown` | `unknown` |
| 8 Harbord Square | Ballymore | — | `unknown` | `unknown` |
| Wardian London | Ballymore/EcoWorld | — | `unknown` | `unknown` |
| ARK Canary Wharf | ARK Co-Living | 12 | `achievable` | `achievable` |

#### Sources for this area

- [WD-1] https://www.circalondon.com/the-wardian — Wardian via Circa London
- [WD-2] https://www.johnsand.co/development/wardian — Wardian via JOHNS&CO
- Cross-ref: Tier 4 (Vertus), Tier 12 (ARK Co-Living), pilot sources [PIL-11]–[PIL-18]

#### Confidence

**High** on Vertus (30× published rule + savings pathway now verified). **High** on ARK as a RRA-immune alternative. **Low** on Ballymore ownership stack (no unified operator). ARK Canary Wharf is the highest-leverage new finding for this area: a qualification-friendly product at the heart of Canary Wharf.

---

### white-city — White City

#### Projects in this area

1. **Television Centre** — mixed ownership-led + BTR, delivered 2018 onwards, converted BBC Television Centre by Stanhope / AXA / Mitsui Fudosan with various managers. Individual-landlord rental + some BTR units via Stanhope Living [WC-1][WC-2]
2. **White City Living (St James / Berkeley)** — 1,800+ homes, predominantly ownership-led, rental via individual landlords and Berkeley Living (the new rental brand of Berkeley Group) [WC-3][WC-4]
3. **Chapter White City (Greystar)** — student accommodation, outside scope [GS-5]
4. **White City Place** — Stanhope-led mixed-use, office-first with residential components

#### Qualification realism

- **Television Centre**: individual-landlord rental, **`unknown`** at project level
- **White City Living**: Berkeley Living brand is new and under-documented (see Tier mention in Section 2 Acton note below); **`unknown`** at project level
- **Chapter White City**: Greystar student-only — outside scope
- **White City Place**: office-first, limited residential

#### Sources for this area

- [WC-1] https://televisioncentre.com/ — Television Centre master site
- [WC-2] https://www.homeviews.com/development/television-centre-w12 — HomeViews Television Centre
- [WC-3] https://www.berkeleygroup.co.uk/developments/london/white-city/white-city-living — White City Living
- [WC-4] https://www.homeviews.com/development/white-city-living-w12 — HomeViews White City Living

#### Confidence

**Low**. White City has no dominant BTR operator with a published qualification policy; stock is ownership-led with individual-landlord rental.

---

### elephant-park — Elephant Park

#### Projects in this area

1. **Elephant Park by Lendlease** — Lendlease's first UK BTR (**Living by Lendlease** brand), delivered across multiple phases at Elephant & Castle. Purpose-built rental homes at Trafalgar Place, West Grove, Park Central, One the Elephant, South Gardens — totalling 1,000+ rental homes [EP-1][EP-2][EP-3][EP-4]
2. **Elephant Central (Get Living)** — **NEW finding, missed in pilot.** Get Living operates a second London neighbourhood beyond East Village, at Elephant Central near the Elephant & Castle station [EP-5]. This brings Get Living's London footprint to two neighbourhoods rather than one.
3. **One the Elephant** — mixed tenure, some BTR
4. **Trafalgar Place** (L&Q affordable housing + Lendlease private) — mixed

#### Qualification realism — Living by Lendlease (Tier 13-adjacent)

- **Operator**: Living by Lendlease (Lendlease's in-house BTR brand; Elephant Park was its first UK BTR)
- **Referencing provider**: Not publicly named
- **Income multiple / upfront / guarantor / international**: Not publicly documented on the lendleaseliving.co.uk site; operator-level FAQ is sparse and marketing-led
- **grad_visa_realism (pre-RRA)**: **`unknown`** with low-medium confidence. Lendlease as a global developer has stronger institutional discipline than smaller operators, suggesting standard referencing, but no published policy to cite.
- **grad_visa_realism (post-RRA)**: **`unknown`** with low-medium confidence.

#### Qualification realism — Get Living Elephant Central

**Per Tier 7.** Same unknown-documentation pattern as East Village. `unknown` pre-RRA and post-RRA.

#### Sources for this area

- [EP-1] https://www.lendleaseliving.co.uk/to-rent/ — Living by Lendlease rental portal
- [EP-2] https://www.elephantpark.co.uk/about-elephant-park/lendlease/ — Elephant Park developer page
- [EP-3] https://www.lendlease.com/uk/projects/elephant-park/ — Lendlease Elephant Park corporate page
- [EP-4] https://www.nhbc.co.uk/build-to-rent/lendlease-elephant-park — NHBC Lendlease Elephant Park
- [EP-5] https://www.getliving.com/our-neighbourhoods/elephant-central/ — Get Living Elephant Central (operator-level neighbourhood page)

#### Confidence

**Low-medium**. Two major operators (Lendlease, Get Living) with neither publishing a useable qualification policy.

---

### royal-wharf — Royal Wharf & Royal Docks

#### Projects in this area

1. **Royal Wharf (Ballymore / Oxley)** — 40-acre neighbourhood, 3,400+ homes in master plan. Primarily ownership-led (999-year leases marketed to international investors). Rental via:
   - **Folio London** (Tier 11) — **265 apartments** directly owned and managed [FL-2][RW-1][RW-2]
   - Individual landlords via LiFE Residential, JOHNS&CO, Benhams, etc.
2. **Riverscape** — Ballymore / Oxley partnership, premium ownership-led with individual rental [RW-3][RW-4]
3. **Royal Arsenal (Berkeley, Woolwich proper — see Woolwich section)** — different area
4. **Rental planning constraint**: *"Due to planning constraints, properties at Royal Wharf can only be let to a single household (family) or up to a maximum of two sharers"* — this is a documented tenancy-structure constraint unique to Royal Wharf that I have not seen at any other area [RW-5]

#### Qualification realism

- **Folio London at Royal Wharf**: Per Tier 11 — `unknown` pre-RRA and post-RRA. The fee-free, 3-year-tenancy, no-admin-fees positioning suggests slightly friendlier than purely commercial BTR, but no published income / guarantor / upfront policy.
- **Individual-landlord rental at Royal Wharf**: `unknown` at project level, with the additional sharer-cap planning constraint limiting options for flat-share workarounds.
- **Riverscape**: ownership-led, `unknown`.

#### Sources for this area

- [RW-1] https://royal-wharf.uk/ — Royal Wharf master site
- [RW-2] https://www.ballymoregroup.com/project/detail/royal-wharf — Ballymore Royal Wharf
- [RW-3] https://www.riverscape.co.uk/ — Riverscape primary site
- [RW-4] https://www.ballymoregroup.com/project/detail/riverscape — Ballymore Riverscape
- [RW-5] https://www.rightmove.co.uk/property-to-rent/Royal-Wharf-94313.html — Rightmove Royal Wharf listings (multiple include the single-household planning note)
- Cross-ref: Tier 11 (Folio London), Ballymore pattern

#### Confidence

**Medium**. Folio London attribution is documented; planning constraint is documented; operator-level qualification policy at Folio is not published.

---

### kidbrooke-village — Kidbrooke Village

#### Projects in this area

1. **Kidbrooke Village (Berkeley Homes)** — single-developer masterplan, ~5,300 homes across 13 phases at the former Ferrier Estate [KV-1]. Predominantly **ownership-led** with Berkeley-delivered private sale; some BTR via **Berkeley Living** (the new rental brand of Berkeley Group, flagged generally in the operator hierarchy)
2. **Kidbrooke Village lettings via third-party agents** — individual-landlord routes

#### Qualification realism — Berkeley Living / individual rental at Kidbrooke Village

- **Operator**: Berkeley Living (Berkeley Group's in-house rental brand) — new and under-documented
- **Publicly available policy**: none located during research; Berkeley Living is marketing-led rather than policy-led
- **grad_visa_realism (pre-RRA)**: **`unknown`** with low-medium confidence
- **grad_visa_realism (post-RRA)**: **`unknown`** with low-medium confidence

#### Sources for this area

- [KV-1] https://www.berkeleygroup.co.uk/developments/london/kidbrooke-village — Kidbrooke Village primary site
- Cross-ref: Berkeley Living (new operator, not yet in Tier 1-13 because under-documented)

#### Confidence

**Low**. Berkeley Living is the entire rental picture here and has no published qualification policy.

---

### oval-village — Oval Village

#### Projects in this area

1. **Oval Village (Berkeley / St James)** — former gasworks regeneration, ~1,400 homes being delivered across phases. Mix of ownership-led and BTR [OV-1][OV-2]
2. **Oval Square / The Oval** — smaller Berkeley phase components
3. **Non-Berkeley stock** at Oval proper — individual-landlord rental

#### Qualification realism

Berkeley / St James delivery is primarily ownership-led; rental is via individual landlords and agents. Same pattern as Kidbrooke Village and Riverlight Quay. **`unknown`** at project level pre-RRA and post-RRA.

#### Sources for this area

- [OV-1] https://www.berkeleygroup.co.uk/developments/london/oval/oval-village — Oval Village primary
- [OV-2] https://www.homeviews.com/development/oval-village-se11 — HomeViews Oval Village

#### Confidence

**Low-medium**. Operator absence is the finding.

---

### brent-cross-town — Brent Cross Town

#### Projects in this area

Single-developer masterplan (Related Argent + Barnet Council + Invesco Real Estate; 6,700 homes total planned).

1. **The Maple (Related Argent BTR, Phase 1 July 2025 + Phase 2 September 2025)** — 500+ apartments across two phases, Squire and Partners (Ph1) + Allies and Morrison (Ph2) — Tier 6 operator, **`unknown`** per Related Argent transparency gap [RA-1][PIL-38][PIL-39][PIL-40]
2. **Other BTR coming later** in the masterplan roll-out
3. **Non-Maple stock** (social, retirement via Audley Group) — outside scope

#### Qualification realism — The Maple (Related Argent)

**Per Tier 6.** Pre-RRA `unknown`, post-RRA `unknown`. The Maple is the **lowest BTR price floor** in Flatbrowser at ~£1,950/month studio, making the qualification opacity extremely high-leverage — this is the single project most worth direct operator contact for Caner.

#### Sources for this area

Cross-ref: Tier 6 (Related Argent), pilot sources [PIL-38], [PIL-39], [PIL-40].

#### Confidence

**Low-medium**. The Maple's commercial attractiveness is the highest in the dataset; its qualification opacity is the biggest single gap.

---

### canada-water — Canada Water

#### Projects in this area

Canada Water is under active regeneration (Roger Madelin, former KX lead, running a British Land masterplan for 3,000+ homes + 2m sqft commercial; planning under review 2024–25) [CW-1][CW-2]. Currently-operating rental stock:

1. **Quebec Way / Canada Water** — older Rotherhithe residential blocks, ownership-led with individual-landlord rental
2. **Surrey Quays Village** — mixed
3. **British Land Canada Water (in delivery)** — future BTR from 2026+ onwards; no named operator publicly yet
4. **TEDI King's / Canada Water university** — student accommodation, outside scope

#### Qualification realism

- Current BTR operator presence: minimal; rental is largely fragmented individual-landlord routes
- Future British Land BTR: operator TBD — **`unknown`** pre-RRA and post-RRA at project level
- **At area level, Canada Water is similar to Brixton**: the rubric T1.4 "active professional rental market" row fails for a grad-visa renter because there is no dominant operator to negotiate with.

#### Sources for this area

- [CW-1] https://www.britishland.com/creating-places/creating-canada-water — British Land Canada Water master plan
- [CW-2] https://www.canadawater.co.uk/ — Canada Water master site

#### Confidence

**Low-medium**. No flagship operator yet; this is an area to reassess in 12 months as British Land's BTR delivery lands.

---

## Section 2 — Inner-east London (13 candidates)

### whitechapel — Whitechapel

#### Projects in this area

Per pilot: no dominant BTR operator. Primary modern stock:

1. **Goodman's Fields (Berkeley Group, all sold)** — 864 apartments + 1,076 mixed-tenure homes, ownership-led, rental via Benhams, Crown Home Buying and Letting, Hastings International, Madley, Monteo, and private landlords [WH-1][PIL-41][PIL-42][PIL-43][PIL-44]
2. **Aldgate Place (Barratt / Londonewcastle)** — edge of Whitechapel, mixed ownership-led, individual-landlord rental
3. **Smaller BTR / BTR-style blocks around Whitechapel station** — heterogeneous operators, not enumerable to operator level
4. **Royal London Hospital quarter** — mix of NHS key worker and private rental

#### Qualification realism

- Goodman's Fields: ownership-led with fragmented letting routes — **`unknown`** at project level, corrected from pilot's weaker positioning per refinement #2
- Wider Whitechapel stock: **`unknown`** pre-RRA and post-RRA

#### Sources for this area

- [WH-1] https://www.berkeleygroup.co.uk/developments/london/aldgate/goodmans-fields — Goodman's Fields (pilot [41])
- Cross-ref: pilot sources [PIL-41]–[PIL-44]

#### Confidence

**Low**. Fragmented stock, no dominant operator. Per pilot.

---

### aldgate — Aldgate / Aldgate East

#### Projects in this area

1. **Goodman's Fields** (shared with Whitechapel) — as above
2. **Aldgate Place** (Barratt / Londonewcastle) — mixed
3. **The Relay Building** — ownership-led
4. **Dorsett City London** (and similar aparthotel/residential hybrids) — serviced-apartment style, potentially Tier 12-adjacent

#### Qualification realism

Same pattern as Whitechapel — no dominant BTR. **`unknown`** pre-RRA and post-RRA.

#### Sources for this area

- https://www.homeviews.com/area-guide/aldgate — HomeViews Aldgate guide
- Cross-ref: Whitechapel sources

#### Confidence

**Low**. Fragmented stock.

---

### shadwell — Shadwell

#### Projects in this area

Shadwell is not a BTR-dominant area. Rental stock is primarily:
1. Victorian / Edwardian terrace conversions
2. Ex-council stock
3. Small-scale private-landlord modern builds
4. **The Highway** and **Cable Street** peripheries

No named flagship BTR operator surfaced in research.

#### Qualification realism

Per Brixton pattern (pilot case study of "honest no flagship BTR" area). **`unknown`** at area level because the qualification question is structurally different — Shadwell's rental market is individual-landlord and agency-mediated, not operator-mediated. T1.4 fails as applied to grad-visa-realism.

#### Sources for this area

- https://www.rightmove.co.uk/property-to-rent/Shadwell.html — Rightmove Shadwell (negative result: no BTR operator surfaces)

#### Confidence

**High on the "no flagship BTR" finding itself.** **Low on any specific project.**

---

### wapping — Wapping

#### Projects in this area

Wapping's modern managed stock is light:
1. **Wapping Lane** and **Thomas More Square** — individual-landlord rental in modern blocks
2. **St Katharine Docks** (adjacent) — premium ownership-led with individual-landlord rental
3. **London Dock (News UK former site)** — St George / Berkeley Group delivering a masterplan, primarily ownership-led [WP-1]
4. No dominant BTR operator

#### Qualification realism

Ownership-led Berkeley pattern + individual-landlord fragmentation. **`unknown`** pre-RRA and post-RRA.

#### Sources for this area

- [WP-1] https://www.berkeleygroup.co.uk/developments/london/wapping/london-dock — London Dock

#### Confidence

**Low**.

---

### mile-end — Mile End

#### Projects in this area

Mile End is Queen Mary University-proximate. Modern stock:
1. **Queen Mary student accommodation** — outside scope
2. **Mile End Place / Mile End Park edge** — older conversions
3. **No flagship BTR operator**

#### Qualification realism

**`unknown`** at area level; no operator to evaluate.

#### Confidence

**Low**. No flagship BTR.

---

### bow — Bow

#### Projects in this area

1. **Bow Wharf** — small mixed ownership/rental
2. **Roman Road Quarter** — regeneration proposed
3. **Bow Bell Tower / Bow Tower** — ex-council + modern
4. No flagship BTR operator

#### Qualification realism

`unknown` at area level. Same pattern.

#### Confidence

**Low**.

---

### bethnal-green — Bethnal Green

#### Projects in this area

1. **Vantage Point (Essential Living)** — Tier 10 operator [EL-1]
2. **Bethnal Green Road / Columbia Road** modern blocks via individual landlords

#### Qualification realism — Vantage Point (Essential Living)

Per Tier 10: `unknown` pre-RRA and post-RRA. Essential Living is mid-scale and publishes less policy than the majors.

#### Sources for this area

- Cross-ref: Tier 10 (Essential Living)
- https://www.essentialliving.co.uk/our-locations/ — Essential Living locations

#### Confidence

**Low-medium**. Essential Living attribution confirmed for Vantage Point; qualification policy opaque.

---

### bow-common-limehouse — Bow Common / Limehouse

#### Projects in this area

1. **Node Living Limehouse** — Tier 12 co-living, 1-bed from ~£1,742/month [FK-5]
2. **Limehouse Basin / Docklands Quay** — ownership-led with individual-landlord rental
3. No other flagship BTR operator

#### Qualification realism — Node Living Limehouse

**Per Tier 12: `achievable`** pre-RRA and post-RRA. Node's co-living model is structurally RRA-immune and explicitly international-friendly.

#### Sources for this area

- Cross-ref: Tier 12 (Node Living), [FK-5]
- https://node-living.com/coliving/london/limehouse/ — Node Living Limehouse

#### Confidence

**Medium-high** on Node Living as an `achievable` call. **Low** on everything else in the area.

---

### hackney-wick — Hackney Wick

#### Projects in this area

1. **Hackney Wick Overground station area** — mix of recently-delivered BTR and creative-studio conversions
2. **East Wick and Sweetwater (LLDC + Balfour Beatty, part of Olympic Park masterplan)** — in delivery, future BTR operator TBD
3. **White Post Lane** creative industry conversions — not BTR
4. No current dominant BTR operator surfaced

#### Qualification realism

**`unknown`** at area level. East Wick/Sweetwater future delivery is a candidate to monitor.

#### Sources for this area

- https://www.queenelizabetholympicpark.co.uk/the-park/developments — Olympic Park developments index

#### Confidence

**Low**. No currently-operating flagship BTR.

---

### stratford-east-village — Stratford East Village

See **stratford — Stratford / East Village** in Section 1. Get Living Tier 7.

---

### bow-east-three-mills — Bow East / Three Mills

#### Projects in this area

River Lea waterfront, quieter Olympic Park edge. No flagship BTR operator surfaced in research. Some modern rental via individual landlords in blocks around Three Mills Green.

**`unknown`** at area level.

#### Confidence

**Low**. No flagship BTR.

---

### plaistow-west-ham — Plaistow / West Ham

#### Projects in this area

1. **West Ham Quarter / Plaistow regeneration** — in delivery, early phases
2. **Argo Apartments (Grainger, Canning Town — adjacent)** — Tier 2 but technically Canning Town rather than Plaistow proper [G-2]
3. No operating Plaistow-proper flagship BTR

#### Qualification realism

`unknown` at area level; Grainger's Argo and Windlass at Canning Town are the nearest operator-level BTR options and inherit Tier 2.

#### Sources for this area

- Cross-ref: Tier 2 (Grainger)

#### Confidence

**Low-medium**.

---

### stepney-green — Stepney Green

#### Projects in this area

No flagship BTR operator. Rental stock is predominantly Victorian conversion and ex-council.

**`unknown`** at area level.

#### Confidence

**Low**. No flagship BTR.

---

## Section 3 — North-east London (13 candidates)

### hackney-central — Hackney Central

#### Projects in this area

1. **Broadway Market / Mare Street** modern stock — largely individual-landlord rental in smaller-scale modern blocks
2. **Hackney Central Overground station area** — similar
3. No single dominant BTR operator

#### Qualification realism

Fragmented stock. **`unknown`** at area level — same pattern as Brixton.

#### Confidence

**Low**. No flagship BTR.

---

### dalston — Dalston

#### Projects in this area

1. **Dalston Square (Barratt / Dalston Works)** — ownership-led [DL-1]
2. **Dalston Junction Overground area** — individual-landlord rental
3. No flagship BTR

#### Qualification realism

Ownership-led with fragmented rental. **`unknown`** at area level.

#### Sources for this area

- [DL-1] https://www.barrattlondon.com/ — Barratt London corporate

#### Confidence

**Low**.

---

### stoke-newington — Stoke Newington

#### Projects in this area

No flagship BTR operator. Church Street and Clissold Park adjacent stock is primarily Victorian conversion and independent private rental.

**`unknown`** at area level.

#### Confidence

**Low**. No flagship BTR.

---

### finsbury-park — Manor House / Finsbury Park

#### Projects in this area

1. **Woodberry Down (Berkeley Homes)** — large masterplan at Manor House, ~5,500 homes across phases; predominantly ownership-led with some managed rental via Berkeley Living and third-party agents [FP-1]
2. **Essential Living at Woodberry Down** — Tier 10 operator has presence here (per Essential Living locations page)
3. **Finsbury Park proper** — individual-landlord stock

#### Qualification realism

- **Woodberry Down (Berkeley Living)**: `unknown` pre-RRA and post-RRA
- **Essential Living Woodberry Down**: Tier 10, `unknown` pre-RRA and post-RRA
- **Finsbury Park individual-landlord**: `unknown`

#### Sources for this area

- [FP-1] https://www.berkeleygroup.co.uk/developments/london/woodberry-down — Woodberry Down
- Cross-ref: Tier 10 (Essential Living)

#### Confidence

**Low-medium**. Two named operators (Berkeley Living, Essential Living) both unpublished on policy.

---

### stamford-hill — Stamford Hill

#### Projects in this area

No flagship BTR operator. Area is demographically distinctive and rental stock is largely private-landlord.

**`unknown`** at area level.

#### Confidence

**Low**.

---

### highbury-islington — Highbury / Highbury & Islington

#### Projects in this area

1. **Highbury Quadrant / Highbury Fields edge** — Victorian and modern individual-landlord
2. **Drayton Park / Highbury & Islington station area** — individual-landlord
3. **Chapter Islington (Greystar)** — student accommodation, outside scope [GS-5]
4. No adult-BTR flagship

#### Qualification realism

**`unknown`** at area level — no flagship BTR for adult grad-visa renters.

#### Confidence

**Low**.

---

### angel-islington — Angel / Islington

#### Projects in this area

1. **Angel Central / Upper Street** — individual-landlord rental in modern blocks
2. **City Road Basin / Islington Gateway** — some emerging BTR
3. **Pocket Living** has presence in Islington (ownership-led sub-market housing, income cap ≤£90k) [PL-1] — not relevant for rental but worth noting
4. No dominant BTR operator for adult renters

#### Qualification realism

**`unknown`** at area level.

#### Sources for this area

- [PL-1] https://www.pocketliving.com/blog/pocket-general/pocket-eligibility/ — Pocket Living eligibility (ownership, not rental)

#### Confidence

**Low**.

---

### old-street-hoxton — Old Street / Hoxton

#### Projects in this area

1. **The Stage EC2 (Moda Living + Galliard + McCourt Group)** — Tier 8 [TS-1]
2. **Old Street Yard / The Atlas Building** — ownership-led
3. **Shoreditch edge** individual-landlord stock
4. **Bezier Apartments** (City Road) — ownership-led premium, individual-landlord rental

#### Qualification realism — The Stage (Moda Living)

**Per Tier 8**: `unlikely` pre-RRA and post-RRA. Moda's 3× monthly income rule and in-house credit check are stricter than Quintain / Bloom.

#### Sources for this area

- [TS-1] https://thestageshoreditch.com/ — The Stage Shoreditch
- Cross-ref: Tier 8 (Moda Living)

#### Confidence

**Medium**. Moda Living as operator is confirmed; policy is stricter than BTR average.

---

### camden-town — Camden Town

#### Projects in this area

1. **Camden Lock area** — individual-landlord modern rental
2. **Hawley Wharf Camden** — mixed retail and residential, some BTR emerging
3. **Mornington Crescent area** — individual-landlord
4. No flagship BTR operator

#### Qualification realism

**`unknown`** at area level.

#### Confidence

**Low**. No flagship BTR.

---

### kentish-town — Kentish Town

#### Projects in this area

1. **Murphy's yard / Kentish Town regeneration** — in early delivery
2. **Kentish Town West Overground area** — individual-landlord stock
3. No dominant BTR operator

#### Qualification realism

**`unknown`** at area level.

#### Confidence

**Low**.

---

### tufnell-park — Tufnell Park

#### Projects in this area

Residential, primarily Victorian and Edwardian. No flagship BTR operator.

**`unknown`** at area level.

#### Confidence

**Low**.

---

### archway — Archway

#### Projects in this area

1. **Essential Living at Archway** — Tier 10 operator presence (Essential Living Archway is one of the named buildings in the Essential Living portfolio)
2. **Archway Tower / Archway Central** — mixed ownership
3. **Holloway Road / Upper Holloway** — individual-landlord

#### Qualification realism — Essential Living Archway

Per Tier 10: `unknown` pre-RRA and post-RRA.

#### Sources for this area

- Cross-ref: Tier 10 (Essential Living)

#### Confidence

**Low-medium**.

---

### tottenham-hale — Tottenham Hale

#### Projects in this area

Dominated by **Heart of Hale** masterplan (Related Argent + Argent + ICG Real Estate, £600m+, 1,032 homes). Named buildings:

1. **1 Ferry Island (Heart of Hale Phase 1 BTR)** — 108 studio/1/2/3-bed homes, AHMM-designed. Tier 6 operator [RA-3]
2. **2 Ferry Island (Heart of Hale Phase 2 BTR)** — part of 484-home Phase 2 (ICG £243m loan, October 2023 construction start) [RA-4][RA-5]
3. **Hale Wharf** — separate adjacent masterplan (Muse Developments + Canal & River Trust), primarily owner-occupier
4. **No Grainger building at Tottenham Hale** — pilot open question #9 resolved: Windlass Apartments is at Canning Town, not Tottenham Hale [G-2]

#### Qualification realism

**Per Tier 6 (Related Argent)**: `unknown` pre-RRA and post-RRA. Same operator transparency gap as The Maple and Enclave KX. Direct contact with Heart of Hale leasing team is the highest-leverage resolution.

#### Sources for this area

- Cross-ref: Tier 6 (Related Argent), pilot sources [RA-3], [RA-4], [RA-5]

#### Confidence

**Low-medium**. Related Argent transparency gap is the finding.

---

## Section 4 — North London (8 candidates)

### kentish-town-west-gospel-oak — Kentish Town West / Gospel Oak

No flagship BTR operator. Hampstead Heath edge, residential Victorian / Edwardian stock via individual landlords. **`unknown`** at area level.

#### Confidence
**Low**.

---

### belsize-park — Belsize Park

No flagship BTR operator. Premium residential, individual-landlord rental. **`unknown`** at area level.

#### Confidence
**Low**.

---

### west-hampstead — West Hampstead

1. **West Hampstead Square (Ballymore)** — 198 apartments, ownership-led with some individual-landlord rental [WHA-1]
2. **Broadway / Finchley Road** — individual-landlord
3. No flagship BTR operator

**`unknown`** at area level.

#### Sources

- [WHA-1] https://www.ballymoregroup.com/project/detail/west-hampstead-square — West Hampstead Square

#### Confidence
**Low-medium**.

---

### kilburn — Kilburn

No flagship BTR. Kilburn High Road individual-landlord stock. **`unknown`** at area level.

#### Confidence
**Low**.

---

### cricklewood — Cricklewood

No flagship BTR operator (the Related Argent Brent Cross Town masterplan is across the borough boundary in NW2). **`unknown`** at area level.

#### Confidence
**Low**.

---

### maida-vale — Maida Vale

No flagship BTR. Premium residential with individual-landlord rental. **`unknown`** at area level.

#### Confidence
**Low**.

---

### st-johns-wood — St John's Wood

No flagship BTR. Premium residential, individual-landlord, mostly ownership-led. **`unknown`** at area level.

#### Confidence
**Low**.

---

### marylebone — Marylebone

Premium residential. No BTR operator. **`unknown`** at area level.

#### Confidence
**Low**.

---

## Section 5 — West London (10 candidates)

### acton — Acton

#### Projects in this area

North Acton is the BTR cluster anchor. The stack:

1. **One West Point (AWOL / A Way of Living)** — 701 apartments, 4 buildings, City & Docklands, 2023 completion [PIL-45][PIL-46][PIL-47]
2. **Clayworks Apartments** — 85 apts, BTR + Key Worker + Student, 35 studios reserved for Imperial College staff [PIL-48]
3. **Imperial Square, Westmark, Vermilion, The Lexicon, Portal West sub-blocks** — heterogeneous operators; the North Acton BTR cluster is real but fragmented
4. **Japan Letting Agency** and other smaller agencies serving international communities at Acton
5. **Apo** does not currently have an Acton property (nearest is Kew Bridge) [AP-2]

#### Qualification realism — AWOL One West Point

- **Operator**: AWOL (A Way of Living), smaller newer BTR operator; operational platform of City & Docklands
- **Public policy**: Marketing-led, not policy-led. Income multiple, upfront, guarantor, international — none documented publicly
- **Referencing provider**: Unknown; likely Goodlord or Rentguard given operator scale
- **grad_visa_realism (pre-RRA)**: **`unknown`** with medium confidence in the gap
- **grad_visa_realism (post-RRA)**: **`unknown`** with medium confidence

#### Qualification realism — Other North Acton cluster

**`unknown`** at project level for Imperial Square, Westmark, Vermilion, The Lexicon, Portal West. The pilot's research gap on operator-level enumeration stands.

#### Sources

Cross-ref: pilot sources [PIL-45], [PIL-46], [PIL-47], [PIL-48].

#### Confidence

**Low-medium**. AWOL as operator confirmed; wider cluster fragmented.

---

### ealing-broadway — Ealing Broadway

#### Projects in this area

1. **Ealing Broadway** as a centre — primarily ownership-led and individual-landlord rental
2. **Dickens Yard (St George / Berkeley)** — ownership-led Berkeley Living-adjacent
3. **Filmworks Ealing** — Ealing Studios-adjacent, mixed-use
4. **The Green Quarter (Berkeley, Southall — adjacent)** — see Southall below
5. No dominant adult BTR operator

#### Qualification realism

**`unknown`** at area level. Berkeley Living presence unclarified.

#### Confidence

**Low**.

---

### hammersmith — Hammersmith

#### Projects in this area

No dominant BTR. Hammersmith is primarily mature residential with individual-landlord rental via letting agents (Foxtons, Dexters, Winkworth). Some modern ownership-led blocks (Fulham Reach adjacent, Riverside Studios). **`unknown`** at area level.

#### Confidence

**Low**.

---

### shepherds-bush — Shepherd's Bush

#### Projects in this area

1. **Westfield-adjacent modern blocks** — mixed
2. **White City proximity** (White City Living, Television Centre — see White City section)
3. **BBC Broadcasting House heritage** — individual-landlord
4. No dominant BTR operator in Shepherd's Bush proper

#### Qualification realism

**`unknown`** at area level. Overlaps with White City's operator picture.

#### Confidence

**Low**.

---

### notting-hill — Notting Hill

Premium residential, primarily ownership-led with individual-landlord rental. No BTR operator. **`unknown`** at area level.

#### Confidence

**Low**.

---

### chelsea — Chelsea

Premium residential, ownership-led, individual-landlord rental. No BTR operator. **`unknown`** at area level.

#### Confidence

**Low**.

---

### south-kensington — South Kensington

Premium residential, primarily ownership-led. No BTR operator. **`unknown`** at area level.

#### Confidence

**Low**.

---

### earls-court — Earl's Court

#### Projects in this area

1. **Earls Court regeneration masterplan** (Earls Court Development Company, joint venture Delancey + Transport for London + APG) — 4,000+ homes planned, early delivery in 2026-27, operator TBD [EC-1]
2. **Earls Court proper** — individual-landlord rental in older stock
3. No currently-operating flagship BTR

#### Qualification realism

- Masterplan: future BTR operator unknown. **`unknown`** pre-RRA and post-RRA
- Area level: **`unknown`**

#### Sources

- [EC-1] https://www.earlscourt.com/ — Earls Court Development Company

#### Confidence

**Low**. Area is pre-delivery.

---

### fulham — Fulham Broadway / Fulham

No flagship BTR. Individual-landlord rental. **`unknown`** at area level.

#### Confidence

**Low**.

---

### pimlico — Pimlico

Premium residential, individual-landlord rental. No BTR operator. **`unknown`** at area level.

#### Confidence

**Low**.

---

## Section 6 — South London (28 candidates)

### bermondsey — Bermondsey

#### Projects in this area

1. **Bermondsey Works (Essential Living)** — Tier 10 operator [EL-1]
2. **The Union (Essential Living)** — Tier 10 operator
3. **Bermondsey Spa / Maltby Street** area — individual-landlord
4. **Grange Walk / Bermondsey Square** — mixed

#### Qualification realism

**Per Tier 10 (Essential Living)**: `unknown` pre-RRA and post-RRA. Bermondsey has two Essential Living buildings, which is a real operator-level concentration. Policy opacity is the operator-level issue, not the area.

#### Sources

- Cross-ref: Tier 10 (Essential Living)

#### Confidence

**Medium**. Essential Living presence confirmed at two buildings; policy transparency absent.

---

### surrey-quays-rotherhithe — Surrey Quays / Rotherhithe

#### Projects in this area

1. **Surrey Quays Village** — individual-landlord rental in older modern blocks
2. **Canada Water adjacent** (see canada-water area in Section 1)
3. **Rotherhithe Street** — mixed
4. No dominant BTR operator

**`unknown`** at area level.

#### Confidence

**Low**.

---

### borough-london-bridge — Borough / London Bridge

#### Projects in this area

1. **Borough Yards** (ownership-led) — mixed
2. **One Tower Bridge (Berkeley)** — ownership-led premium
3. **London Bridge Quarter** — primarily commercial with some residential
4. No dominant BTR operator for adult renters

**`unknown`** at area level.

#### Confidence

**Low**.

---

### vauxhall-separate — Vauxhall (separate from Nine Elms)

#### Projects in this area

Separating Vauxhall from Nine Elms is difficult; most "Vauxhall" BTR stock is actually part of the Nine Elms masterplan. Some additional:
1. **Vauxhall Sky Gardens / Vauxhall Square** — individual-landlord
2. **St George Wharf (Berkeley)** — ownership-led premium
3. Overlap with Nine Elms tier-5 and tier-9 operators

#### Qualification realism

Cross-ref Nine Elms section. Outside Nine Elms proper, no flagship BTR. **`unknown`** at area level for non-Nine-Elms stock.

#### Confidence

**Low-medium**.

---

### stockwell — Stockwell

No flagship BTR. Individual-landlord rental. **`unknown`** at area level.

#### Confidence

**Low**.

---

### brixton — Brixton

Per pilot: **"honest no flagship BTR" case.** Extensive searches confirmed no dominant BTR operator at Brixton SW9. Primary rental stock:

1. **Individual letting agents** (Foxtons, Winkworth, Savills, Hamptons)
2. **Node Living Brixton** — Tier 12 co-living, from ~£1,675/month studio [FK-5]
3. **Legal & General / Nomura partnership Herne Hill** — first BTR site is Herne Hill in Lambeth, adjacent but not Brixton proper [LG-1]
4. **Ferndale Place, Acre House** — flagged in pilot brief; pilot research did not find operator attribution, this full run did not close the gap either

#### Qualification realism

- **Node Living Brixton**: Tier 12, `achievable` pre-RRA and post-RRA. **This is Brixton's one qualification-friendly operator-level option.**
- **Individual-landlord Brixton**: `unknown` at area level

#### Sources

Cross-ref: Tier 12 (Node Living), [FK-5]

#### Confidence

**Medium** on Node Living as the only flagship option. **High** on the "no flagship BTR" finding otherwise.

---

### clapham-common — Clapham Common

No flagship BTR. Individual-landlord rental. **`unknown`** at area level.

#### Confidence

**Low**.

---

### tooting — Tooting

No flagship BTR operator. Individual-landlord rental via letting agents. **`unknown`** at area level.

(Note: Apo does not currently operate at Tooting per its locations page [AP-2].)

#### Confidence

**Low**.

---

### wandsworth-town — Wandsworth Town

#### Projects in this area

1. **Ram Quarter (Greenland Investment Group)** — ownership-led masterplan [WT-1]
2. **New Acres (Legal & General)** — **1,034 homes, L&G's flagship UK BTR, completed 2024, over 75% let.** Tier 13 operator [LG-1][LG-2]
3. **Wandsworth Riverside (Berkeley)** — ownership-led
4. **Folk Sunday Mills (Earlsfield, adjacent)** — Tier 12 [FK-3]

#### Qualification realism

- **New Acres (L&G)**: Tier 13, `unknown` pre-RRA and post-RRA. L&G's operator-level transparency gap is the finding — 1,034 homes is the largest single BTR site in Wandsworth and has no published qualification policy.
- **Folk Sunday Mills**: Tier 12, `achievable` pre-RRA and post-RRA (in adjacent Earlsfield, 5-minute walk)
- **Ram Quarter / Wandsworth Riverside**: ownership-led, `unknown`

#### Sources

- [WT-1] https://www.ramquarter.com/ — Ram Quarter Wandsworth
- Cross-ref: Tier 13 (L&G), Tier 12 (Folk)

#### Confidence

**Medium**. L&G New Acres is documented; policy is the gap. Folk Sunday Mills is Tier 12 confirmed.

---

### battersea-park — Battersea Park / Battersea

#### Projects in this area

1. **Battersea Power Station** — cross-ref to Section 1 (separate dataset entry)
2. **Folk Florence Dock (Battersea)** — Tier 12, 270 studios from £1,695/month, stays 1–89 nights [FK-2]
3. **Battersea Riverside / Prince of Wales Drive (Taylor Wimpey)** — ownership-led, individual-landlord rental
4. **Albert Wharf / Riverlight proximity** — see Nine Elms

#### Qualification realism

- **Folk Florence Dock**: Tier 12, **`achievable`** pre-RRA and post-RRA. **This is the highest-leverage finding for Battersea Park** — a qualification-friendly operator at the waterfront with a £1,695 price floor that fits inside Caner's envelope.
- **Other Battersea stock**: `unknown` at project level

#### Sources

Cross-ref: Tier 12 (Folk), [FK-2]

#### Confidence

**High** on Folk Florence Dock as `achievable`. **Low** on other Battersea stock.

---

### clapham-junction — Clapham Junction

#### Projects in this area

1. **Clapham Junction station area** — individual-landlord rental
2. **Battersea Park Road** — mixed ownership/rental
3. No flagship BTR operator

**`unknown`** at area level.

#### Confidence

**Low**.

---

### earlsfield — Earlsfield

1. **Folk Sunday Mills (Earlsfield)** — Tier 12, 3+ month stays, from ~£1,500/month [FK-3]
2. Individual-landlord rental otherwise

#### Qualification realism

- **Folk Sunday Mills**: Tier 12, `achievable` pre-RRA and post-RRA. Earlsfield has a real Tier 12 flagship.

#### Sources

Cross-ref: Tier 12 (Folk), [FK-3]

#### Confidence

**Medium-high** on Folk.

---

### streatham — Streatham

No flagship BTR. Individual-landlord rental. **`unknown`** at area level.

#### Confidence

**Low**.

---

### peckham — Peckham

No flagship BTR operator. Strong creative identity but rental stock is individual-landlord. **`unknown`** at area level.

(Note: no Greystar Chapter Peckham, no Quintain Peckham, no Berkeley BTR.)

#### Confidence

**Low**.

---

### camberwell — Camberwell

No flagship BTR. Individual-landlord rental. **`unknown`** at area level.

#### Confidence

**Low**.

---

### walworth — Walworth

Walworth Road area overlaps with Elephant Park (see Section 1). No additional flagship BTR outside Elephant Park. **`unknown`** at area level for non-Elephant-Park stock.

#### Confidence

**Low**.

---

### new-cross — New Cross

No flagship BTR. Individual-landlord rental. **`unknown`** at area level.

#### Confidence

**Low**.

---

### deptford — Deptford

1. **Convoys Wharf (Hutchison)** — major masterplan in early delivery, operator TBD [DP-1]
2. **Deptford proper** — individual-landlord rental
3. No currently-operating flagship BTR

**`unknown`** at area level.

#### Sources

- [DP-1] https://convoyswharf.com/ — Convoys Wharf masterplan

#### Confidence

**Low**. Masterplan pre-delivery.

---

### lewisham — Lewisham

1. **Lewisham Gateway (Muse Developments / Barratt)** — mixed ownership-led with some rental [LW-1]
2. **Chapter Lewisham (Greystar)** — student only [GS-5]
3. **LeeGate Shopping Centre** — regeneration proposed

No flagship adult BTR. **`unknown`** at area level.

#### Sources

- [LW-1] https://lewishamgateway.com/ — Lewisham Gateway

#### Confidence

**Low**.

---

### catford — Catford

No flagship BTR. Catford Bridge regeneration is early-stage. **`unknown`** at area level.

#### Confidence

**Low**.

---

### crystal-palace — Crystal Palace

No flagship BTR. Triangle area is mature residential. **`unknown`** at area level.

#### Confidence

**Low**.

---

### forest-hill — Forest Hill

No flagship BTR. Individual-landlord rental. **`unknown`** at area level.

#### Confidence

**Low**.

---

### honor-oak-park — Honor Oak Park

No flagship BTR. **`unknown`** at area level.

#### Confidence

**Low**.

---

### sydenham — Sydenham

No flagship BTR. **`unknown`** at area level.

#### Confidence

**Low**.

---

### herne-hill — Herne Hill

1. **L&G / Nomura partnership first site** — the first BTR delivery from this partnership is at Herne Hill, adjacent to Brixton [LG-1]
2. **Brockwell Park edge** — individual-landlord

#### Qualification realism

- L&G Herne Hill: Tier 13, `unknown` pre-RRA and post-RRA. Operator-level transparency gap.
- Wider Herne Hill stock: `unknown`

#### Sources

- Cross-ref: Tier 13 (L&G), [LG-1]

#### Confidence

**Low-medium**.

---

### dulwich-village — Dulwich Village

No flagship BTR. Premium residential. **`unknown`** at area level.

#### Confidence

**Low**.

---

### west-dulwich — West Dulwich

No flagship BTR. **`unknown`** at area level.

#### Confidence

**Low**.

---

### nunhead — Nunhead

No flagship BTR. **`unknown`** at area level.

#### Confidence

**Low**.

---

## Section 7 — Other regeneration zones (9 candidates)

### old-oak-common — Old Oak Common

#### Projects in this area

1. **The Collective Old Oak** (historical name; now operated as ARK or similar after Collective administration) — Tier 12-adjacent, 500+ co-living rooms [CO-1][CO-2]
2. **OPDC (Old Oak & Park Royal Development Corporation)** masterplan — HS2 station delivery 2030+, future BTR operator TBD
3. **Portal West / wider North Acton cluster** — cross-ref to Acton section

#### Qualification realism

- **The Collective / ARK Old Oak**: Tier 12-style co-living, `achievable` pre-RRA and post-RRA
- **OPDC future BTR**: `unknown` — pre-delivery

#### Sources

- [CO-1] https://www.thecollective.com/locations/old-oak — The Collective Old Oak (historical)
- [CO-2] https://www.homeviews.com/development/the-collective-old-oak-nw10 — HomeViews aggregate

#### Confidence

**Medium** on The Collective / ARK Old Oak pathway.

---

### wood-green — Wood Green

No flagship BTR. Wood Green Mall regeneration is early-stage. **`unknown`** at area level.

#### Confidence

**Low**.

---

### edmonton-green — Edmonton Green

No flagship BTR. Meridian Water is adjacent but pre-delivery. **`unknown`** at area level.

#### Confidence

**Low**.

---

### north-acton — North Acton

Cross-ref to **acton — Acton** in Section 5. Same AWOL / One West Point / Clayworks / fragmented cluster. `unknown` at project level.

---

### hayes — Hayes (West London)

#### Projects in this area

1. **Apo at The Gatefold (formerly Be:here Hayes)** — Tier 3 operator [AP-1][AP-2]
2. **Old Vinyl Factory masterplan** — ownership-led with some rental via Apo [HY-1]
3. **Hayes town centre** — individual-landlord

#### Qualification realism — Apo at the Gatefold

Per Tier 3: `unknown` pre-RRA and post-RRA, with the **portable-tenancies clause** as a structural positive — a renter who clears Apo at one building can move to any other Apo building (Kew Bridge, Barking Wharf, etc.) without re-referencing. This is the only cross-building portability in the full run.

#### Sources

- [HY-1] https://oldvinylfactory.co.uk/ — Old Vinyl Factory masterplan
- Cross-ref: Tier 3 (Apo)

#### Confidence

**Medium-low**. Apo attribution confirmed; qualification policy opaque.

---

### southall — Southall

#### Projects in this area

1. **The Green Quarter (Berkeley)** — 13 acres, ~3,750 homes, Elizabeth Line access, predominantly ownership-led with some Berkeley Living rental exposure [SO-1]
2. **Southall town centre** — individual-landlord
3. **Havelock Road regeneration** — early stage
4. No other dominant BTR operator

#### Qualification realism

- **The Green Quarter (Berkeley Living)**: `unknown` pre-RRA and post-RRA. Berkeley Living brand is under-documented.
- Wider Southall: `unknown`

#### Sources

- [SO-1] https://www.berkeleygroup.co.uk/developments/london/southall — The Green Quarter / Southall

#### Confidence

**Low-medium**.

---

### woolwich — Woolwich

#### Projects in this area

1. **Royal Arsenal Riverside (Berkeley Homes)** — ~5,000 home masterplan, Elizabeth Line, predominantly ownership-led with Berkeley Living rental [WO-1]
2. **Woolwich town centre** — individual-landlord
3. **Spray Street Quarter (regeneration proposed)** — early

#### Qualification realism

- **Royal Arsenal Riverside / Berkeley Living**: `unknown` pre-RRA and post-RRA. Berkeley Living opacity.
- Wider Woolwich: `unknown`

#### Sources

- [WO-1] https://www.berkeleygroup.co.uk/developments/london/woolwich/royal-arsenal-riverside — Royal Arsenal Riverside

#### Confidence

**Low-medium**.

---

### charlton-riverside — Charlton Riverside

No currently-operating flagship BTR. Masterplan is early-stage. **`unknown`** at area level.

#### Confidence

**Low**.

---

### surrey-docks — Surrey Docks

Overlaps with Canada Water and Surrey Quays. No distinct flagship BTR. **`unknown`** at area level.

#### Confidence

**Low**.

---

## Discoveries

Agent 09 is a focus agent, not a discovery agent, but six discoveries emerged during the full-run research that are worth surfacing for the candidate universe and the schema. Each is either an operator or a building that the pilot (and likely the pre-migration Flatbrowser dataset) did not capture.

1. **Operator: Apo Group Ltd (a-part-of.com)** — running **three directly-relevant London buildings** (Apo Kew Bridge TW8, Apo Barking Wharf IG11, Apo at the Gatefold Hayes UB3) plus regional buildings in Manchester, Liverpool, Birmingham. Apo's **portable tenancies** clause is a structural feature I have not seen at any other BTR operator in the full run — a renter clearing one Apo building inherits access to all others without re-referencing. This is a schema-level signal worth capturing. Sources: [AP-1][AP-2][AP-3][AP-4].

2. **Operator: Folk Co-Living (DTZ Investors-backed)** — running **three directly-relevant London buildings** (Sunday Mills Earlsfield, Florence Dock Battersea, The Palm House Harrow) with a **hospitality-style managed living model** that is structurally RRA-immune (Tier 12). Folk is the most important single operator the pilot missed for Caner specifically: their qualification process is *"proof of income and a reference/background check"* with no deposit, no admin fees, £200 holding fee, and 3-month minimum tenancies. Florence Dock studio starts at £1,695/month all-in — inside Caner's envelope. Sources: [FK-1][FK-2][FK-3][FK-6].

3. **Operator: Node Living** — running two directly-relevant London co-living buildings at **Brixton SW9** (£1,675/month studio) and **Limehouse E14** (£1,742/month studio). Node is Tier 12 qualification-friendly and is Brixton's **single flagship operator** — without Node, Brixton is the pilot's "honest no flagship BTR" case; with Node, Brixton has one RRA-immune operator-level option. Sources: [FK-5].

4. **Operator: ARK Co-Living (successor to The Collective Canary Wharf)** — rebranded from The Collective in 2022 after the original Collective went into administration. Runs 705 rooms at Canary Wharf with **nightly-to-yearly** stays — a serviced-apartment-style product that effectively bypasses conventional referencing. Listed on booking.com as a short-stay option, meaning the booking flow is closer to a hotel than a tenancy. For a grad-visa renter this is one of the lowest-friction options in London. Sources: [FK-4].

5. **Operator: Fizzy Living (Greystar-owned)** — not currently in Flatbrowser's operator list based on the pre-migration state. Fizzy is a London BTR brand acquired by Greystar in 2020 and its FAQ is the **second most explicit structural block in the entire full run** after Way of Life, with the verbatim clause *"Students must pay 12 months rent in advance"* for applicants without income. Important to capture because the name "Fizzy" is less prominent than "Bloom" in London BTR discussion but the policy is much stricter. Sources: [F-1][GS-1].

6. **Operator: Legal & General (Living)** — operator-level BTR brand from Legal & General Investment Management Real Assets. Has delivered **New Acres Wandsworth** (1,034 homes, 2024, 75%+ let) and **Wood Street House**, with a planned Herne Hill site from the Nomura partnership. Deserves addition to the operator list as a Tier 13-equivalent, even though no qualification policy is publicly documented. Sources: [LG-1][LG-2][LG-3].

### Schema-level recommendation (carried from pilot, reinforced)

The pilot recommended adding `referencing_provider` as a schema field on `Project.rental.qualification`. The full run **confirms this recommendation with force** — the Homeppl backend is a confirmed structural discriminator across three operators (Quintain, Bloom, Fizzy), and the in-house vs outsourced vs specific-provider split is the most decision-relevant second-layer signal. Proposed field:

```typescript
referencing_provider:
  | "homeppl"        // Open Banking + Guarantid pathway available
  | "goodlord"       // standard automated credit check
  | "rentguard"      // standard insurance-backed referencing
  | "flatfair"       // deposit-alternative, not referencing proper
  | "canopy"         // Open Banking alternative
  | "in-house"       // operator runs referencing directly
  | "third-party-unnamed"
  | "unknown";
```

Also worth capturing: **`portable_tenancy`: boolean** — currently documented only at Apo in this file, but a structural positive for any operator that adopts it.

---

## Cross-cutting findings

### Finding 1 — The operator hierarchy is the decision, not the area

The single most decision-relevant output of the full run is the same as the pilot: **Caner should pick operator first, area second**. The operator-level spread across 13 tiers generates grad-visa realism calls that are entirely uncorrelated with area quality, rubric T1–T5 score, or price. A renter at Wembley Park / Quintain Living is in a structurally different position than one at Wembley Park / Dandi Wembley (different operators, same area). A renter at Earlsfield / Folk Sunday Mills has a qualification-friendly option (Tier 12); a renter at Earlsfield / private landlord does not. A renter at Nine Elms / Way of Life is structurally blocked; a renter at Nine Elms / Bloom is (pre-RRA) achievable-with-upfront. The full-run's tier-1-to-tier-13 ordering cuts across every area in the dataset uniformly.

### Finding 2 — The Renters' Rights Act flattens the middle

The single most important **new** finding of the full run is that the Renters' Rights Act 2025 commencement on 1 May 2026 **collapses the pilot's "achievable-with-upfront" middle tier into the "unknown" basin**. Quintain Living, Grainger plc, and Greystar Bloom — the three operators that formed the pilot's middle tier — all relied on a discretionary-upfront workaround that the RRA voids for any new tenancy created on or after 1 May 2026. Caner's realistic next-tenancy window (summer 2026 earliest) is post-RRA, which means the pilot's headline "achievable-with-upfront" finding for Quintain Living at Wembley Park — which was the brightest spot in the entire pilot — now has to be downgraded to "unknown, resolve by direct operator contact". The tier that actually matters post-RRA is **Tier 12 (Folk, Node, ARK)** because their qualification model was never dependent on requiring upfront payments, so the RRA does not touch them.

### Finding 3 — Hospitality-style co-living is RRA-immune and the most Caner-fit segment

**Post-RRA, the Tier 12 operators (Folk, Node, ARK) are Caner's most realistic paths to a London upgrade.** This is the most important single shift between pilot and full run. Folk Florence Dock Battersea at £1,695/month all-in, Folk Sunday Mills Earlsfield at similar pricing, Node Living Brixton at £1,675/month, Node Living Limehouse at £1,742/month, and ARK Canary Wharf flexibly-booked are all:

- Inside Caner's £3k all-in envelope
- Structurally RRA-immune (the business model was never dependent on requiring >1 month upfront)
- Explicitly accepting international residents (Folk markets directly to international residents, ARK is a booking.com listing)
- Light on referencing (Folk's "proof of income and a reference/background check" is the weakest bar in the full run; ARK is closer to a hotel check-in than a tenancy)

The trade-off is that these are **studios, not 1-beds**, and they are shared-amenity products rather than fully-private apartments. For Caner specifically — solo renter, works from home, cooks regularly, trains seriously (gym access matters) — the shared-gym and shared-kitchen aspect of co-living is a genuine mismatch with his lifestyle preferences. The pilot's headline recommendation should be: **Folk Battersea and Node Brixton are the only BTR options in the full run that are simultaneously qualification-friendly, RRA-immune, inside Caner's envelope, and in named candidate areas**, but their fit with Caner's lifestyle preferences is worth thinking through.

### Finding 4 — The Homeppl backend is a real but pre-RRA advantage

The pilot established that Homeppl is a structural discriminator via Open Banking income assessment and the Guarantid guarantor pathway. The full run confirms this at three operators (Quintain, Bloom, Fizzy) and extends the mapping for 10 more operators. **Pre-RRA**, the Homeppl backend is a real advantage for international renters — the Open Banking check handles empty UK credit files and overseas bank accounts in a way a standard credit check cannot. **Post-RRA**, the Homeppl backend is still relevant for the affordability check itself (nothing in the RRA touches referencing provider choice), but the pay-in-advance fallback that the Homeppl backend was enabling is gone. The net effect is that Homeppl-using operators (Quintain, Bloom, Fizzy) stay marginally better than non-Homeppl operators on the 2.5× / 2.66× check itself, but the headline workaround collapses.

### Finding 5 — Related Argent's transparency gap is the biggest single information deficit

Related Argent runs **three decision-relevant buildings in Flatbrowser** (Enclave KX at King's Cross, The Maple at Brent Cross Town, 1 Ferry Island at Heart of Hale / Tottenham Hale) plus a fourth under construction (2 Ferry Island, Heart of Hale Phase 2). None of them have a published operator-level rental-process FAQ. This is the single biggest information deficit in the entire full run, and all three affect high-quality rubric areas. Direct operator contact at The Maple is the highest-leverage single action Caner can take on the dataset — The Maple's ~£1,950/month studio floor is the lowest in Flatbrowser, and the qualification opacity is the exact uncertainty that direct contact can resolve cheaply.

### Finding 6 — Way of Life and Fizzy Living are the only hard structural blocks

Out of 13 operator tiers, only two produce unambiguous `blocked` calls for Caner's profile:
- **Way of Life** (Tier 9): *"UK-based guarantor, or 12 months of rent in advance"* — the clearest clause in the full run
- **Fizzy Living** (inside Tier 5 Greystar portfolio): *"Students must pay 12 months rent in advance"* — equally explicit

Both are `blocked` pre-RRA (because the stated alternatives are closed) and `blocked` post-RRA (because the RRA voids the upfront requirement without adding any new discretionary path). Any Way of Life building at any area and any Fizzy Living building at any area should be flagged `blocked` in the dataset. These are the two operators Caner can eliminate from consideration without further research.

### Finding 7 — Vertus's international savings pathway corrects the pilot

The pilot's Vertus call of `unlikely` implied no international pathway exists. The full-run FAQ re-fetch surfaces the clause *"applicants moving to the UK from abroad can use savings to prove their affordability (savings must = 30× the monthly Rent)"* [V-1]. This is a real documented pathway that the pilot missed. For Caner specifically, the £75k+ savings requirement at Vertus's price tier is still unreachable — but the finding shifts Vertus from "no pathway exists" to "pathway exists but requires savings Caner cannot produce", which is a distinct-shape call that the synthesis step should reflect. Vertus stays `unlikely` but for a different reason than the pilot recorded.

### Finding 8 — Brent Cross Town's The Maple is the best-fit lowest-priority area

The Maple at Brent Cross Town (Related Argent, Tier 6) has the **lowest BTR price floor in Flatbrowser** at ~£1,950/month studio, sits in an area with strong T1–T3 rubric scores (Thameslink + Wembley Park adjacency, Related Argent masterplan delivery), and has no published qualification policy. The asymmetry is striking: it is simultaneously the most attractive BTR in the dataset on price and the worst-documented on qualification. For Caner, this is the single highest-leverage direct-contact target — resolving the qualification question for The Maple unlocks or eliminates the best-value BTR in Flatbrowser in one conversation.

### Finding 9 — Single-operator areas have a structural qualification advantage

Wembley Park's single-operator shape (Quintain Living runs effectively the entire modern rental stack) is a structural qualification advantage that the rubric doesn't capture. A single successful Quintain negotiation gives Caner access to 10+ Wembley Park buildings; a successful negotiation at Nine Elms' Bloom only unlocks Bloom. This second-order advantage applies similarly at Wood Wharf (Vertus across three towers — though in the opposite direction: one failed Vertus negotiation fails all three), Brent Cross Town (The Maple alone for now), Tottenham Hale (1 Ferry Island + 2 Ferry Island under one Related Argent process), East Village Stratford (Get Living across ~2,400 homes), and Battersea Park via Folk (one Folk negotiation unlocks Florence Dock + Sunday Mills + The Palm House). Single-operator areas reduce the number of separate qualification negotiations Caner needs to win.

### Finding 10 — Berkeley Living is the under-documented major (new since pilot)

Berkeley Group's new rental brand **Berkeley Living** is the biggest operator-level information gap beyond Related Argent. Berkeley delivers major London masterplans at White City Living, The Green Quarter Southall, Kidbrooke Village, Oval Village, Royal Arsenal Woolwich, Woodberry Down, London Dock Wapping — seven full-run areas where Berkeley Living has a direct rental exposure. Berkeley Living is marketing-led, not policy-led, and does not publish an operator-level rental-process FAQ. The transparency gap cuts across seven candidate areas and should be flagged as a second-wave research priority.

---

## Open questions

### Pilot open questions — resolution status

The pilot logged 10 open questions. The full run resolves 6 of them (either verified, refuted, or materially sharpened) and leaves 4 still open.

| # | Pilot open question | Full-run resolution status |
|---|---|---|
| 1 | Does Quintain Living's "agreed number of months upfront" clause actually clear referencing for a 3-month-ceiling grad-visa renter? | **Partially resolved — direction negative.** The Quintain FAQ verbatim fetch names *"e.g. 6 months of rent"* as the only numerical anchor. 3 months specifically is not published as an accepted amount, and the RRA ban from 1 May 2026 makes the point partially moot. Post-RRA, the answer is "this pathway no longer exists as a requirement". |
| 2 | Does Quintain Living actually route failed-referencing international tenants to Homeppl's Guarantid service? | **Still open.** No new evidence surfaced. This is research that requires either direct Quintain contact or a Homeppl case study update. |
| 3 | What is Get Living's actual income multiple, upfront policy, and UK guarantor rule? | **Still open.** Get Living's terms-and-conditions fetch produced no new numerical anchors. The operator-level transparency gap is the finding. |
| 4 | What is Related Argent's operator-level rental process? | **Still open.** No operator-level FAQ exists; the transparency gap is operator-wide across Enclave KX, The Maple, 1 Ferry Island, 2 Ferry Island. |
| 5 | Does Way of Life's "12 months in advance" clause ever flex? | **Partially resolved — direction negative.** The FAQ verbatim is unchanged and the RRA voids the 12-month requirement outright. Way of Life post-RRA has no remaining alternative pathway, confirming the `blocked` call. |
| 6 | Does Vertus have an undocumented alternative pathway for international tenants? | **Resolved — positive (partially).** The Vertus FAQ does contain a documented savings-based international pathway (*"savings must = 30× the monthly Rent"*) that the pilot missed. For Caner's profile the savings requirement is still unreachable, but the path exists. |
| 7 | What does the North Acton BTR cluster look like operator-by-operator? | **Still open.** Full run did not close the per-building enumeration gap; AWOL at One West Point is confirmed but Imperial Square, Westmark, Vermilion, The Lexicon, Portal West sub-blocks remain unknown-operator. |
| 8 | Are there any BTR pockets in Brixton I missed? | **Resolved — one positive.** Node Living Brixton is a real flagship Tier 12 operator at SW9 that the pilot missed. Brixton now has one qualification-friendly operator-level option. |
| 9 | Is Windlass Apartments (Grainger) at Tottenham Hale or Canning Town? | **Resolved — Canning Town.** Grainger does not operate at Tottenham Hale; Windlass is in Canning Town E16. Heart of Hale / Related Argent is the correct Tottenham Hale attribution. |
| 10 | Goodman's Fields individual-landlord distribution (fraction accepting 3 months upfront vs strict)? | **Still open.** Per-listing evaluation is inherently outside agent-09 scope; this is a research task that only listing-by-listing enumeration can resolve. |

**Net: 6 of 10 pilot open questions resolved or materially sharpened; 4 still genuinely open.**

### New open questions (logged in the full run)

1. **What is Apo's income multiple, upfront policy, guarantor rule, and international tenant handling?** Apo runs three directly-relevant London buildings (Kew Bridge, Barking Wharf, Hayes) and publishes no operator-level FAQ. The portable-tenancies clause is a structural positive but the qualification side is opaque. **Highest-priority new open question** because Apo covers three full-run areas directly.

2. **Does the Homeppl backend's Open Banking income assessment actually accept 3 months of overseas bank statements as sufficient income evidence for a grad-visa applicant with no UK income?** This is the technical question behind Findings 3 and 4. The Quintain FAQ implies yes (*"looks at your income vs spending"*), but the threshold is not published and resident anecdotes are thin. Resolving this would materially sharpen the Quintain / Bloom / Fizzy post-RRA calls.

3. **Does Folk Co-Living accept international residents without a UK guarantor on 3-month tenancies?** Folk's FAQ is marketing-led and says only *"proof of income, and a reference/background check"*. If yes, Folk is Caner's most realistic post-RRA option. If no, the Tier 12 finding weakens significantly. This is the highest-leverage question in the entire full run for Caner's decision.

4. **What does Berkeley Living's qualification policy look like?** Berkeley Living is an operator-level information gap that cuts across seven full-run areas (White City Living, The Green Quarter Southall, Kidbrooke Village, Oval Village, Royal Arsenal Woolwich, Woodberry Down, London Dock Wapping). A single operator-level FAQ or policy page would affect seven areas' calls simultaneously.

5. **Does Moda Living's 3× monthly income formulation have any discretionary flex for international tenants at Moda at the Hill, The Stage, or Nine Elms Park?** The Moda FAQ is stricter than UK BTR norm; if the 3× rule is enforced as published, Moda is `unlikely` for Caner's profile; if there's discretion, the call moves.

6. **What is the referencing provider for Vertus, Get Living, Way of Life, Grainger plc, Related Argent, Moda Living, Apo, Folk, ARK, Node, Folio London, and L&G Living?** The pilot established that Homeppl is a structural discriminator at Quintain / Bloom / Fizzy. Of the remaining 10 operators in the hierarchy, only Moda is confirmed in-house. The other 9 are all unknown provider. Any operator running Homeppl inherits the advantages established in pilot Finding 4.

7. **Does Get Living have a meaningful second neighbourhood beyond East Village and Elephant Central?** The full run identified Elephant Central as a missed pilot discovery; whether Get Living has further London buildings is worth confirming. If yes, the 2,400-home East Village dataset footprint expands across the operator's full portfolio.

8. **What is the Windlass Apartments (Canning Town) operator-level qualification policy applied to a specific grad-visa applicant?** The Grainger-operator call is Tier 2 `achievable-with-upfront` pre-RRA and `unknown` post-RRA. Windlass is the specific test case for Canning Town / Newham and is worth the direct contact.

9. **Does Way of Life have a secondary alternative pathway (e.g. discretionary-upfront) not published on the renting FAQ?** The verbatim clause is unambiguously *"UK-based guarantor, or 12 months of rent in advance"*. If any flex exists, it is unpublished. Resolving this would re-open Way of Life buildings as a genuine option; not resolving it confirms the hard `blocked` call.

10. **How does Essential Living handle international tenants at Bethnal Green, Archway, Bermondsey, and Woodberry Down?** Tier 10 is `unknown` across the board because Essential Living does not publish operator-level qualification policy. With five+ directly-relevant buildings in the Flatbrowser candidate areas, Essential Living is a high-coverage direct-contact target.

---

## Final audit — counts and self-assessment

### Coverage

- **Areas covered**: **95 of 95** candidate areas from `context/references/candidate-areas.md`.
- **New candidate areas discovered**: 0 (agent 09 is a focus agent; discovery was bounded to operators).
- **Operator tiers documented**: **13** (vs pilot's 7) — expanded with Moda Living (Tier 8), Essential Living (Tier 10), Apo (Tier 3 by ordering), Folio London (Tier 11), Folk/Node/ARK Co-Living (Tier 12), L&G Living (Tier 13).
- **Operator hierarchy reordering**: Vertus moved from pilot position 6 to full-run Tier 4 after the savings-pathway finding. Way of Life stays at Tier 9 (post-pilot position 7). Related Argent stays at Tier 6 (pilot position 5). Get Living stays at Tier 7 (pilot position 4).

### Confidence distribution across 95 areas

| Confidence | Count | Areas |
|---|---|---|
| **High** | 4 | Wembley Park (Quintain operator picture), Nine Elms (operator-level discrimination), Canary Wharf (Vertus + ARK), Battersea Park (Folk Florence Dock) |
| **Medium** | 13 | Stratford, Brent Cross Town, Tottenham Hale, Bermondsey, Wandsworth Town, Earlsfield, Brixton, Old Oak Common, King's Cross, Elephant Park, Royal Wharf, Bethnal Green, Bow Common / Limehouse |
| **Low** | 78 | All other areas where no dominant BTR operator exists or operator attribution is opaque |

This distribution is skewed heavily toward `low` because most candidate areas have no flagship BTR operator — per Finding 1, the qualification question is structurally different for fragmented-stock areas, and honest `unknown` / `low-confidence` calls are the correct output rather than fabricated coverage.

### grad_visa_realism distribution across named projects

Approximate counts at the per-project level for the major named projects I was able to attribute to an operator tier, dual-tagged pre-RRA and post-RRA:

| Call | Pre-RRA count | Post-RRA count |
|---|---|---|
| **achievable** | 7 (Tier 12: Folk Florence Dock, Folk Sunday Mills, Folk Palm House, Node Brixton, Node Limehouse, ARK Canary Wharf, The Collective Old Oak) | 7 (same — Tier 12 is RRA-immune) |
| **achievable-with-upfront** | 10+ (Quintain Living Wembley Park portfolio, Bloom East, Bloom West, Mylo Nine Elms, Grainger Argo, Grainger Windlass, Grainger wider) | 0 (RRA collapse) |
| **unlikely** | 6 (Vertus ×3, Moda The Stage, Moda Nine Elms Park, Moda at the Hill) | 6 (same — Moda and Vertus don't rely on upfront workaround) |
| **blocked** | 4+ (Way of Life ×multiple, Fizzy Living ×multiple) | 4+ (same — blocks tighten rather than loosen under RRA) |
| **unknown** | ~60 (everything else — Related Argent ×4, Get Living ×multiple, Essential Living ×5+, Folio London ×multiple, Berkeley Living ×7, Knight Dragon, BPS Lettings, Lendlease, L&G, Apo, and most fragmented areas) | ~70 (add the pre-RRA "achievable-with-upfront" tier collapse into `unknown`) |

The **headline shift post-RRA** is the 10+ "achievable-with-upfront" projects collapsing to `unknown`, which is the most important single dataset implication of the statutory change.

### Referencing provider mapping (captured as requested)

| Operator | Provider | Source |
|---|---|---|
| Quintain Living | **Homeppl** | Case study + FAQ Open Banking mechanism [Q-1][PIL-7] |
| Greystar Bloom Nine Elms | **Homeppl** | FAQ explicit [B-1] |
| Greystar Mylo Nine Elms | **Homeppl** (assumed from portfolio consistency) | Inference |
| Fizzy Living | **Homeppl** | FAQ explicit [F-1] |
| Moda Living | **In-house** | FAQ explicit [M-3] |
| Vertus | Unknown, third-party | [V-1] |
| Get Living | Unknown | [GL-4] |
| Way of Life | Unknown | [WOL-1] |
| Grainger plc | Unknown, standard credit check (not Homeppl) | [G-1] |
| Apo | Unknown | [AP-1] |
| Folk Co-Living | Unknown, lighter process | [FK-1] |
| ARK Co-Living | Unknown, hospitality-style | [FK-4] |
| Node Living | Unknown | [FK-5] |
| Folio London | Unknown, third-party | [FL-1] |
| L&G Living | Unknown | [LG-1] |
| Related Argent / Be Living | Unknown, operator-wide gap | — |
| Essential Living | Unknown, in-house referencing blog | [EL-2] |
| Berkeley Living | Unknown, operator-wide gap | — |
| Knight Dragon Greenwich Peninsula Living | Unknown | [GP-4] |
| Lendlease Living | Unknown | [EP-1] |
| BPS Lettings | Unknown | [BPS-1] |

**3 of 21 operators confirmed Homeppl; 1 confirmed in-house; 17 unknown.** This is the sharpest single argument for adding `referencing_provider` as a schema field — 17 of 21 major London BTR operators have unknown referencing providers, and Homeppl vs non-Homeppl is a confirmed structural discriminator across the three known users.

### Pilot open question resolution count

**6 of 10 pilot open questions resolved or materially sharpened.** See the Open Questions section above for the line-by-line status.

### Strongest coverage

- **Wembley Park (Quintain Living)**: primary-source FAQ re-fetched verbatim, 2.5× income rule confirmed, "e.g. 6 months" pay-in-advance language surfaced, pre-RRA / post-RRA dual-regime analysis applied, 4 separate pilot sources cross-referenced.
- **Nine Elms operator spread**: the per-operator discrimination (Bloom → Way of Life → Moda/London Square → Embassy Gardens) is the best illustration of Finding 1 in the full run.
- **Tier 12 co-living operators**: Folk, Node, ARK — the most important new finding. Documented across five directly-relevant Flatbrowser areas (Brixton, Limehouse, Earlsfield, Battersea Park, Canary Wharf, Old Oak Common).
- **The Renters' Rights Act regime-shift analysis**: the single biggest new finding of the full run. Every operator tier is dual-tagged.

### Weakest coverage

- **Berkeley Living** — 7 full-run areas have Berkeley Living rental exposure; none have an operator-level policy to cite. This is the biggest unresolved operator-level gap in the full run, second only to Related Argent's transparency gap.
- **North Acton BTR cluster** — AWOL / Clayworks / Imperial Square / Westmark / Vermilion / The Lexicon / Portal West sub-blocks remain unknown-operator per pilot open question #7; the full run did not close this.
- **Far-south-London areas (Catford, Sydenham, Forest Hill, Honor Oak Park, etc.)** — No flagship BTR operator surfaced for any; the `low` confidence call is honest, not a research failure, but the full run adds no new attribution.
- **Individual-landlord evaluation** — pilot open question #10 (Goodman's Fields per-listing distribution) remains out of scope; any per-listing resolution is downstream of agent 09 entirely.
- **Smaller operators (Apo, AWOL, Be Living, Be:here)** — the operator-level FAQ discipline of the top BTRs does not exist at smaller operators, so the `unknown` calls are evidenced by the operator's own marketing rather than by thin research.

### Approximate cost

- **Distinct URLs cited**: ~95 unique URLs across primary sources (Quintain FAQ, Vertus FAQ, Bloom FAQ, Fizzy FAQ, Moda FAQ, Way of Life FAQ, Grainger rental process, Greenwich Peninsula Living, Folk FAQ, Node Living, ARK, Apo, Folio, L&G, Berkeley, Knight Dragon, ICG, RRA legal briefs, plus HomeViews, Trustpilot, press, developer sites, pilot-inherited sources).
- **WebSearch calls**: ~22 during the full run (including batched parallel invocations).
- **WebFetch calls**: ~15, split between successful fetches (Quintain FAQ, Vertus FAQ, Fizzy FAQ, Folk FAQ, Moda FAQ, Way of Life FAQ, Grainger rental process, Greenwich Peninsula Living tenants, Get Living T&Cs, Goodlord RRA brief) and 404/redirect failures (Apo FAQ, The Maple NW2, Homeppl case study landing page, ARK Canary Wharf, Folio London landing page).
- **Total research time**: Single session.

### Self-assessment paragraph

This file is deliberately longer than the pilot's 577 lines (~2400+ lines target) and the depth is concentrated in the **operator hierarchy** and **statutory context** sections rather than spread evenly across all 95 areas, because the operator-level call is the load-bearing output per refinement #1. The strongest coverage is at the top of the file (operator tiers 1–13, statute context, Homeppl backend signal) and at the existing-14 Flatbrowser areas where operator attribution is clearest. The weakest coverage is across the ~60 full-run areas that have no flagship BTR operator — for those areas, honest `unknown` / `low` confidence calls are the correct output, but the synthesis step should read them as "this agent looked and found nothing at operator level" rather than "this agent skipped the area". The biggest single new finding compared to the pilot is the **Renters' Rights Act 2025 regime-shift analysis**, which changes how every pre-RRA "achievable-with-upfront" call should be interpreted for Caner's actual tenancy timeline; the second-biggest is the **Tier 12 co-living segment (Folk, Node, ARK)** which is post-RRA-immune and was entirely absent from the pilot. The single biggest residual gap is the operator-wide transparency gap at **Related Argent** (4 buildings, 0 published policies) and at **Berkeley Living** (7+ buildings, 0 published policies) — these two operators together account for most of the `unknown` calls in the "areas with real BTR presence" subset and are the highest-leverage direct-contact targets for any second-wave research pass.

---

*End of sweep agent 09 full run. Output file: `/Users/atacanercetinkaya/Documents/Programming-Projects/flatbrowser/docs/research/sweep/sweep-09-rental-qualification-realism.md`. Pilot preserved at `sweep-09-rental-qualification-realism.PILOT.md` as validation evidence.*
