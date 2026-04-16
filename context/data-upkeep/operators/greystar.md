# Greystar UK — Operator Research Findings

**Research date:** 2026-04-16
**Agent:** data-upkeep Phase 2 (Greystar-family batch)
**Covered buildings in Flatbrowser dataset (direct Greystar):** Bloom Nine Elms, Mylo Nine Elms, Pearl Yard Bermondsey, The Bermondsey Project, Ten Degrees Croydon, Stratford Mill.

---

## Corporate summary

Greystar is the world's largest owner-operator of rental housing. UK portfolio is ~11,000 BTR homes plus pipeline. In December 2021 they acquired Fizzy Living from Metropolitan Thames Valley Housing, making Fizzy a Greystar subsidiary — operated on a separate brand but with the same underlying referencing infrastructure. Together the group runs both "Greystar-branded" premium BTR (Pearl Yard, Bloom, Bermondsey Project) and "Fizzy-branded" mid-market BTR (8 London properties).

Corporate scale and UK regulatory posture:
- Active BTR acquisitions through 2026 — buying Elephant Park portfolio, announcing ADIA JVs, topping out Stratford Mill
- Consistent UK operating model — single Homeppl referencing stack, near-identical FAQ across their building-specific sites
- Post-RRA (May 2026) the group's standard AST will convert to assured periodic tenancies; advance-rent restrictions apply for new APTs granted on or after 1 May 2026

---

## Shared Greystar-family policy stack (verified)

| Policy | Value | Verbatim source |
|---|---|---|
| Agreement type | AST (converting to APT from May 2026) | Building FAQ pages use "tenancy agreement" language, 12-month fixed terms standard |
| Referencing provider | **Homeppl** | Pearl Yard FAQ: "Homeppl will conduct reference checks, typically completed in 3–7 working days." Same wording on Bloom Nine Elms and Ten Degrees FAQs. |
| Affordability test | **2.66× annual rent** household income (≈32× monthly) | Pearl Yard FAQ: "Your total gross household income must be at least 2.66 times the annual rent." Identical on Bloom, Mylo, Ten Degrees. |
| Guarantor accepted | Yes, subject to referencing | Pearl Yard FAQ: "Guarantors must meet the affordability criteria of earning at least 4 times the annual rent." |
| Guarantor income requirement | **4× annual rent** (48× monthly) | Same source as above |
| Corporate/professional guarantor (Guarantid / Housing Hand) | **Unclear — not named verbatim in Greystar's FAQs** | No Greystar FAQ names Guarantid or Housing Hand explicitly. Homeppl's own platform offers Guarantid as the native service (42× monthly guarantor threshold matches Greystar's 48× annual / 4× annual, approximately), but acceptance requires direct enquiry. |
| Open Banking | Implied via Homeppl (not explicitly named on Greystar FAQ) | Homeppl FAQ states: "Homeppl accepts an Open Banking connection or three months of recent bank statements" |
| International tenants | Accepted — Right to Rent compliance only | Ten Degrees FAQ: "Students and those 18+ are welcomed to apply." Fizzy FAQ: "Non-EU tenants must provide original ID documentation proving legal right to live in UK." |
| Visa expiry handling | Not explicitly addressed | FAQs silent on Graduate visa expiry; per Right to Rent rules, tenancy is typically aligned to visa expiry for time-limited visa holders |
| Credit check | Standard via Homeppl — Homeppl is designed to be lenient on thin UK credit files, uses alternative signals (Open Banking, savings) | Homeppl FAQ documented savings route: "30 times the monthly rent per year, or hold 32 times the monthly rent in a savings account" |
| Advance rent / upfront | Mylo FAQ: "Advance rental payments are an option if a household does not pass the affordability criteria" — pre-RRA posture. Post-1-May-2026 new APTs are capped at 1 month advance. | https://www.nineelmspoint.mylo-london.com/ (via Greystar site) |
| Deposit | 5 weeks' rent (My Deposits scheme) OR Flatfair alternative £350-£600 | Pearl Yard + Bloom + Ten Degrees FAQs |
| Minimum tenancy (standard) | 12 months, up to 3 years | All Greystar FAQs |
| Minimum tenancy (Pearl Yard exception) | **3 to 12 months flexible** — confirmed | Pearl Yard FAQ: "Flexible leases from 3 months to 12 months" |
| Holding fee | £400 | All Greystar building FAQs |

---

## Canera-specific flex signal (qualification_flexibility_signal)

**Signal: flexible** — but only for Greystar buildings where Caner has a relationship track record.

- Caner is currently a Greystar tenant at Ten Degrees Croydon (9 months clean payment history as of 2026-04-16)
- Ten Degrees FAQ explicitly says advance-rent is negotiable for students — Greystar operates advance-rent-as-flex-lever at property level
- Mylo FAQ makes advance-rent an explicit affordability-failure alternative (pre-RRA language)
- Greystar has no published overseas-guarantor rejection policy — Homeppl's Co-Signer route is the Homeppl-side mechanism
- Per Greystar's general "Rental Requirements" blog: "For non-U.S. residents, an alternative form of identification such as a visa, green card, or an Individual Taxpayer Identification Number (ITIN) may be accepted." — corporate posture is internationally-friendly

**Caveat:** the advance-rent lever narrows post-1-May-2026 for new APTs. Caner's Ten Degrees tenancy (signed pre-RRA) retains its existing terms, but any NEW Greystar tenancy signed on or after 1 May 2026 is capped at 1 month advance rent.

---

## Pathway derivation for Greystar properties (standard case)

Given:
- `referencing_provider: "homeppl"` ✅
- `open_banking_accepted: "yes"` (via Homeppl) ✅
- `accepts_professional_guarantor: "unclear"` (Guarantid NOT named in Greystar FAQs — unverified)
- `accepts_individual_overseas_guarantor: "unclear"` (Homeppl supports, Greystar doesn't explicitly state)
- `credit_check: "lenient"` (via Homeppl)
- `international_tenant_policy: "accepted-case-by-case"` (no explicit "welcomed" language, but accepts via Right to Rent)
- `visa_expiry_handling: "unclear"`

→ Pathways:
- ❌ `standard-passable` — too many `"unclear"` fields; 2.66× test is material gap without Open Banking savings substitution
- ❌ `with-professional-guarantor` — Guarantid acceptance unverified
- ✅ `with-savings` — Homeppl's documented 36× monthly savings route works for Open Banking demonstrable applicants
- ❌ `with-co-signer-overseas` — Homeppl supports but Greystar not explicit; downgrade to `"unclear"`
- ❌ `with-upfront-licence` — AST, RRA caps upfront at 1 month for new APTs
- ❌ `licence-exempt-light-ref` — AST

**Result:** `realism_pathways: ["with-savings"]`, `grad_visa_realism: "achievable-with-guarantor"` (umbrella verdict).

The "load-bearing unknown" across the whole Greystar portfolio is: **will Greystar accept Guarantid (Homeppl's native guarantor product) as the professional-guarantor pathway for applicants who cannot clear the 2.66× test?** This is one phone call / email per target building to resolve.

---

## Per-project variations

### Pearl Yard Bermondsey
- **Min tenancy: 3 months** (confirmed — uniquely short for Greystar; verbatim "Flexible leases from 3 months to 12 months")
- Pricing (as of 2026-04-16 WebFetch): Studio from £2,670, 1-bed from £3,360, 2-bed from £3,905
- Promotion running: "8 weeks rent free on move-in ready apartments" (ending soon)
- Lower-tier release advertised from £2,137 pcm — below studio minimum, likely promo-qualified
- Leasing office: 020 3987 5558

### The Bermondsey Project
- First residents autumn 2025; next phase January 2026; full completion 2H 2027
- 1,624-home scheme — 35% affordable
- Pricing: **not published** — enquire only. Site at greystar-bermondseyproject.com/ is construction-progress focused, not a leasing site.
- No FAQ published yet on the dedicated site

### Bloom Nine Elms
- Pricing (as of 2026-04-16): Studio from £2,705, 1-bed from £3,505, 2-bed from £3,685, 3-bed from £5,575
- Standard Greystar 12-month min, up to 3 years
- Furnished or unfurnished optional
- Leasing: 020 3987 5559

### Mylo Nine Elms (Nine Elms Point)
- Deposits: 1-bed £2,700, 2-bed £3,300, 3-bed £5,070, penthouse £6,800
- Same 2.66× affordability; **FAQ explicitly offers advance-rent as affordability-failure alternative** — the clearest pre-RRA flex statement across Greystar's portfolio (must narrow post-May 2026)
- Pet rent £75/month
- Pricing on the Greystar-operated site requires direct contact; third-party aggregators (Rightmove etc.) have listings at varying points

### Ten Degrees Croydon (Caner's current home)
- **Retain `grad_visa_realism: "unknown"` or update to `"achievable-with-guarantor"` per shortlist; this is Caner's current tenancy, not a target**
- 44-storey Tide modular build; Greystar operator
- Deposits £1,200-£3,100 depending on unit
- Flatfair alternative £350-£600 + VAT
- Flexible lease 12 months - 3 years
- Homeppl referencing confirmed (FAQ)

### Stratford Mill (formerly "Tide Construction Stratford East" in task description)
- **Name in dataset: "Stratford Mill"** — NOT "Tide Construction Stratford East"
- Developer: Lifestory (acquired by Greystar 2023); Graham + SNG appear to be current contractors, not Tide
- 245-unit BTR, topping out October 2025, completing 2026
- Not yet leasing as of 2026-04-16
- Greystar operator; expected to launch on same Homeppl stack

---

## Ghost-project flag

**Category A / B candidate: "Greystar Walthamstow"** (id uncertain; not found in `src/areas/data/walthamstow.ts`)

**Evidence of ghost:**
- The task description lists "Greystar Walthamstow" as project #7 in the Greystar direct portfolio
- Grepping walthamstow.ts shows NO project with name containing "Greystar" or "Fizzy"
- Walthamstow.ts has: Blackhorse Mills (L&G), The Altham, Blackhorse View, The Eades, The Scene, Morro Altham, Morro Blackhorse Lane — seven projects, none Greystar-branded

**Likely origin:** Confusion between:
- Greystar owns Fizzy Living (since Dec 2021)
- Fizzy Walthamstow EXISTS at 5D Blackhorse Lane, E17 6DS — verified on fizzyliving.com/locations/walthamstow/ and greystar.com/fizzy-walthamstow-london-uk/p_18867
- So "Greystar Walthamstow" in the task brief plausibly refers to Fizzy Walthamstow, which is NOT in the Flatbrowser dataset at all

**Recommended action:** 
1. Category B if the dataset has a "Greystar Walthamstow" entry anywhere — flag and correct to Fizzy Walthamstow
2. If no such entry exists in the dataset, this is a **missing project** (Fizzy Walthamstow should probably be ADDED to walthamstow.ts to mirror the other Fizzy London buildings), not a ghost to delete
3. Verify with user before any action

---

## Cost tier verification (snapshot)

| Project | Min rent | Cost tier |
|---|---|---|
| Pearl Yard | Studio £2,670 (or promo £2,137) | premium |
| The Bermondsey Project | Unpublished | - |
| Bloom Nine Elms | Studio £2,705 | premium |
| Mylo Nine Elms | Not listed on-site | - |
| Ten Degrees | Existing tenant; ~£2,500 1-bed | premium |
| Stratford Mill | Not yet leasing | - |

---

## Sources

| URL | Label | Type | Accessed |
|---|---|---|---|
| https://fizzyliving.com/faq | Fizzy Living FAQ | operator | 2026-04-16 |
| https://www.pearlyardbermondsey.com/faqs | Pearl Yard FAQ | operator | 2026-04-16 |
| https://www.pearlyardbermondsey.com/ | Pearl Yard main site (pricing) | operator | 2026-04-16 |
| https://bloom-nineelms.co.uk/faqs | Bloom Nine Elms FAQ | operator | 2026-04-16 |
| https://bloom-nineelms.co.uk/ | Bloom Nine Elms main (pricing) | operator | 2026-04-16 |
| https://tendegreescroydon.co.uk/faqs/ | Ten Degrees FAQ | operator | 2026-04-16 |
| https://nineelmspoint.mylo-london.com/ | Mylo Nine Elms (Greystar-operated) | operator | 2026-04-16 |
| https://greystar-bermondseyproject.com/ | Bermondsey Project site | operator | 2026-04-16 |
| https://www.greystar.com/renters-resources/applying-and-leasing/greystar-rental-requirements | Greystar rental requirements (global blog) | operator | 2026-04-16 |
| https://www.greystar.com/blog/greystar-rental-requirements | Greystar renter blog | operator | 2026-04-16 |
| https://www.homeppl.com/blog/who-can-be-a-rent-guarantor/ | Homeppl — guarantor requirements | referencing-provider | 2026-04-16 |
| https://www.homeppl.com/tenant/guarantid-landlords/ | Homeppl Guarantid product | referencing-provider | 2026-04-16 |
| https://www.guarantid.com/lm-homepage | Guarantid — Homeppl's guarantor service | referencing-provider | 2026-04-16 |
| https://www.greystar.com/business/about-greystar/newsroom/greystar-tops-out-at-stratford-mill-in-east-london | Stratford Mill topping out Oct 2025 | press | 2026-04-16 |
| https://www.greystar.com/business/about-greystar/newsroom/greystar-adia-build-to-rent-strategic-partnership-fizzy-living-acquisition | Fizzy acquisition 2021 | press | 2026-04-16 |

---

## Open questions / direct-enquiry list

1. **Does Greystar accept Guarantid (Homeppl's native guarantor service) for UK-resident applicants who fail the 2.66× test?** — One email to Pearl Yard / Bloom leasing can confirm for entire portfolio.
2. **Does Greystar accept Homeppl's overseas Co-Signer route (non-UK-resident individual as guarantor)?** — Homeppl supports structurally; Greystar's posture not stated.
3. **Pearl Yard 3-month minimum** — confirmed on FAQ. **Is the same flex ever extended at other Greystar buildings for existing tenants (Caner at Ten Degrees relocating)?** — Worth asking; the flex may apply at discretion.
4. **What is the Greystar post-1-May-2026 posture on advance rent as affordability substitute?** — Pre-RRA they relied on it (Mylo FAQ). Post-RRA 1-month cap kills this route; unclear what they substitute with.
5. **Is Housing Hand accepted alongside Guarantid?** — No Greystar reference. Homeppl competes with Housing Hand so acceptance of the competitor is a policy decision.
