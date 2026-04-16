# Vertus — operator research

Research date: 2026-04-16. Researcher: data-upkeep Phase-2 agent. Scope: operator-level qualification policies + portfolio verification for the five dataset projects attributed to Vertus.

---

## Operator overview

Vertus is the BTR / residential-leasing arm of Canary Wharf Group (CWG) — wholly owned by CWG, built on the estate's thirty-year landlord track record. Vertus is the dedicated tenant-facing operator; CWG is the developer and estate owner. Some buildings in the Vertus portfolio are on land that was jointly developed with Ballymore (e.g. Newfoundland — EcoWorld Ballymore developer, Vertus operator), which is the source of the "wrong operator" precedent that originally motivated this skill.

- Operator website: **https://thisisvertus.com/** (confirmed — the 2026-04-12 cleanup fix sticks; `vertusliving.com` is not the canonical domain)
- Parent: Canary Wharf Group — https://cwg.com/portfolio-and-places/residential-leasing/
- Regulated by: Propertymark (confirmed via FAQ)
- Telephone / contact: via `/register/` form on `thisisvertus.com`
- Companies House: VERTUS RESIDENTIAL MANAGEMENT LIMITED (no. 10070609)

### Vertus portfolio as of 2026-04-16

Vertus currently operates **four BTR apartment buildings** plus one aparthotel brand:

| Building | Units | Completion | Notes |
|---|---|---|---|
| **10 George Street** | 327 | 2020 | Vertus's first BTR; 37 storeys, Wood Wharf; Stanton Williams design |
| **8 Water Street** | ~279 | 2021 | Pet-friendly; indoor-outdoor pool; HomeViews Best Rated Development 2021 |
| **Newfoundland** | ~636 | 2021 | 58-storey diagrid tower; developer EcoWorld Ballymore, operator Vertus |
| **50-60 Charter Street** | 756 | Nov 2025 | Newest and largest; Wood Wharf; adds co-working + karaoke + Reformer Pilates |
| **Vertus Edit** (aparthotel brand) | 378 studios | 2025-2026 | 3 & 15 West Lane buildings — serviced apartment / short-stay product; distinct product from the BTR ASTs. Domain: `vertusedit.thisisvertus.com` |

**Total BTR apartment count: ~1,998 apartments across four buildings.** Sources: Vertus FAQ & `/apartments-to-rent/`, CWG residential-leasing page (cwg.com), CWG press release 18 Nov 2025, `wharf-life.com` interview with Alastair Mullens (Vertus MD).

The earlier CWG residential-leasing page still quotes 1,137 units across three buildings — that figure pre-dates Charter Street and understates current scale. Use the 4-building figure going forward.

### Dataset attribution against reality

The dataset attributes five projects to Vertus. Against verified 2026-04 reality:

| Dataset project ID | Dataset name | Vertus operates? | Verdict |
|---|---|---|---|
| `8-water-street` | 8 Water Street (Vertus) | ✅ Yes | Clean match. |
| `newfoundland` | Newfoundland by EcoWorld Ballymore | ✅ Yes | Clean match — Vertus is the operator; EcoWorld Ballymore is the developer. Dataset `developer` and `operator` are correctly separated. |
| `george-street-vertus` | 3 & 10 George Street (Vertus) | ⚠️ Partially wrong | Vertus operates **10 George Street only**. There is no "3 George Street" Vertus BTR — it may be a confusion with **3 Park Drive** (a neighbour ownership tower, not Vertus) or simply a dataset typo. Recommend renaming to **"10 George Street (Vertus)"**. |
| `10-park-drive` | 10 Park Drive (Vertus) | ❌ Wrong operator | **10 Park Drive is an ownership tower** (346 residences, Stanton Williams, first completed at Wood Wharf). It is **not part of Vertus's BTR portfolio** — Vertus does not market it on `/apartments-to-rent`. Rentals at 10 Park Drive happen via individual owner-landlords through external agents (Foxtons, JOHNS&CO, Circa London, Crown Home Buying & Letting). **Category-B wrong-operator attribution.** |
| `one-park-drive` | One Park Drive by Herzog & de Meuron | ❌ Wrong operator | Same pattern. One Park Drive is a 58-storey ownership tower (434-484 apartments, Herzog & de Meuron). Rentals via individual owners through external agents. Dataset already has `building_type: "Owner-Lease"` — the `operator` field just needs correcting. **Category-B wrong-operator attribution.** |

Separately, **50-60 Charter Street is missing from the dataset.** It opened November 2025 and is Vertus's largest building. This is a coverage gap, not a ghost project — the skill's Phase 3 / user discretion should decide whether to add it.

---

## Referencing stack

### Provider

**Unclear / not publicly named.** Vertus's FAQ says referencing takes "12 to 72 hours once we've received all your documents" but does **not** name the provider. Searches for "Vertus Homeppl" / "Vertus Goodlord" / "Vertus Canopy" return no hits. CWG careers pages don't expose the tool stack.

Best inference: Vertus is likely to use a standard UK referencing provider (Goodlord, Let Alliance, or HomeLet) given its Propertymark membership and the 12-72h turnaround being consistent with those providers' published SLAs. Homeppl is possible but unconfirmed — there's no Homeppl case study featuring Vertus or CWG.

**Per-field value: `"unclear"`**. Direct enquiry is the deciding question.

### Income multiple

**30× monthly rent annually — verbatim from FAQ.** "The combined annual income of all named tenants needs to be more than, or equal to, 30 times the monthly rent."

This is the standard UK luxury-BTR floor. At Vertus pricing (1-bed from £3,000/mo at Charter Street and 10 George Street, from £3,100/mo at 8 Water Street and Newfoundland), the income floor is:

| Building | 1-bed floor | 30× income floor | Studio floor | 30× income floor |
|---|---|---|---|---|
| 10 George Street | £3,000/mo | £90,000/yr | £2,600/mo | £78,000/yr |
| 50-60 Charter Street | £3,000/mo | £90,000/yr | £2,600/mo | £78,000/yr |
| 8 Water Street | £3,100/mo | £93,000/yr | £2,600/mo | £78,000/yr |
| Newfoundland | £3,100/mo | £93,000/yr | £2,700/mo | £81,000/yr |

For Caner (no UK payslips, Graduate visa, parents-funded) the £78-93k income floor is unreachable without a pathway.

### Savings route

Not mentioned in the FAQ. Since the referencing provider is unnamed, there's no public confirmation that a Homeppl-style 36× savings substitute is available. **Per-field: cannot affirm — `with-savings` pathway does not fire.**

### Open Banking

Not mentioned in the FAQ. No explicit statement either way. **`"unclear"`**.

### Credit check

Not described in the FAQ. No published credit-score floor. Luxury BTR at Canary Wharf Group standard — corporate renter base is the dominant cohort, and CWG's marketing leans heavily into the "professional / financial worker" identity. No documented cases of lenient credit check policy. **Classify as `"standard"`** (not strict, not lenient) — Vertus likely runs a standard UK credit reference without an explicit floor, but also without Homeppl-style thin-credit accommodation.

---

## Guarantor policy

**Completely silent in the FAQ.** No mention of guarantors anywhere — not of individual guarantors, not of corporate services (Housing Hand, Guarantid), not of overseas co-signers. The FAQ's "What is your affordability criteria?" answer is the bluntest possible: 30× income, full stop.

Three readings are possible:

1. **Strict-reading**: Vertus expects everyone to clear on income alone. Applicants below 30× simply don't qualify. No guarantor route exists.
2. **Soft-reading**: Vertus quietly accepts guarantors on a case-by-case basis, doesn't publicise it because luxury BTR positioning doesn't want to advertise a fallback. This is consistent with Propertymark-member large-BTR operators generally.
3. **Hybrid**: Vertus accepts upfront rent as a substitute (their FAQ "Tenancies signed before May 1, 2026 with advance payment terms continue under existing agreement" line implies advance-rent was historically used as a qualification lever) — but post-RRA the 1-month AST cap removes this lever for new tenancies from 1 May 2026.

**Per-field values:**
- `accepts_professional_guarantor`: **`"unclear"`** — direct enquiry required
- `accepts_individual_overseas_guarantor`: **`"unclear"`** — topic never addressed

---

## International / visa policy

**Silent in the FAQ.** No verbatim "international tenants welcomed" line, but also no discouragement. Vertus's marketing is unambiguously aimed at professionals regardless of nationality (Canary Wharf financial-worker renter base is heavily international); HomeViews reviews show residents from multiple nationalities. But there's no stated policy on visa-holders, Graduate visa, or non-UK residency.

**Per-field: `"accepted-case-by-case"`** — reasonable inference from the international-professional marketing posture without an explicit statement.

### Visa expiry handling

Silent. With the standard 12-month AST and post-RRA conversion to rolling periodic from 1 May 2026, the visa-expiry question becomes less structurally important (you can give 2 months' notice at any point on a periodic). But for Caner's August 2027 Graduate visa expiry, the question "will Vertus rent me a 12-month AST now that ends after my visa expires" is still live.

**Per-field: `"unclear"`**.

---

## Upfront rent policy

The FAQ's Renters' Rights Act section says:

> "What happens to my current rent payment arrangement? Tenancies signed before May 1, 2026 with advance payment terms continue under existing agreement."

This is the acknowledgement that Vertus *has historically accepted* advance-rent payment terms. Post-1-May-2026, the RRA caps AST advance rent at one month, which means **the upfront-rent pathway dies for new Vertus ASTs from that date**.

- Pre-1-May-2026 signings: upfront could be negotiated (legacy policy per FAQ)
- Post-1-May-2026 signings: AST 1-month cap applies

**Per-field: `"one-month-ast-cap"`** going forward. The legacy multi-month acceptance doesn't create a post-RRA pathway for Caner signing in 2026-04 onwards.

The exception: **Vertus Edit** (aparthotel) is a licence product, not an AST — the RRA cap doesn't apply. But Vertus Edit isn't in the dataset and isn't in this research batch.

---

## Minimum tenancy

Vertus's main product is **12-month AST** (confirmed via the "Choose to Rent with Ease" journal post: "12-month rental agreements" emphasised). However, Vertus has introduced **flexible tenancies** including tenancy periods below six months, publicised in the Wharf Life interview with Alastair Mullens ("Vertus offers 'flexible tenancies', which means they will consider tenancies for a period of less than six months").

The specifics aren't detailed in the FAQ — this is a "contact us to discuss" route.

**Per-field: `min_tenancy_months: 12`** as the standard AST default; per-building variations may permit shorter on request.

Post-RRA (1 May 2026), all ASTs become automatically rolling periodic after any minimum term, so the commitment window is the relevant number.

---

## Flexibility signal

Mixed signals:

**Positive (flexible)**:
- Vertus diversified into Vertus Edit (aparthotels) and sub-six-month tenancies — suggests product flexibility
- Luxury London profile describes team language as "they can't do enough for you"
- Vertus publicly acknowledges pre-RRA advance-rent arrangements in its RRA FAQ — implying the operator used upfront as a flex lever historically

**Negative (rigid)**:
- FAQ is blunt on 30× income; no softening language
- No guarantor policy described — the total silence on guarantors suggests either "not a route" or "only on application" rather than an advertised workaround
- HomeViews reviews include maintenance complaints but nothing specifically about qualification-stage flex
- No Trustpilot reviews for thisisvertus.com (0 reviews)

**Classify as `"standard"`**. Not enough documented flex anecdotes to warrant `"flexible"`; no rigid-refusal anecdotes to warrant `"rigid"`.

---

## Agreement type

**AST.** Explicit — the RRA FAQ section talks about ASTs converting to rolling periodic from 1 May 2026, and the FAQ terms-and-conditions language for the offers ("qualifying residents on an AST agreement") confirms ASTs are the standard product.

The Vertus Edit brand is a separate licence / aparthotel product and is not in this research batch.

**Per-field: `"ast"`**.

---

## Pricing

Verified from `/apartments-to-rent/` on 2026-04-16:

| Building | Studio | 1-Bed | 2-Bed | 3-Bed | Price transparency |
|---|---|---|---|---|---|
| 10 George Street | from £2,600 | from £3,000 | from £4,200 | from £5,200 | listed |
| 50-60 Charter Street | from £2,600 | from £3,000 | from £4,100 | from £5,200 | listed |
| 8 Water Street | from £2,600 | from £3,100 | from £4,200 | from £6,900 | listed |
| Newfoundland | from £2,700 | from £3,100 | from £4,000 | from £8,500 | listed |

Per FAQ, bills are not mentioned as included — standard AST is resident-pays for utilities. One Park Drive and 10 Park Drive prices are via external agents; the dataset's existing figures for those (via `residential.canarywharf.com` developer page or agent listings) are secondary-market.

All prices rounded from `from £X` language. Upper bounds not published.

---

## Sources

- [Vertus — FAQs](https://thisisvertus.com/faqs/) — operator, accessed 2026-04-16. Income multiple 30×, deposit 5 weeks, reservation 1 week, 12-72h referencing turnaround, AST → periodic RRA transition acknowledged.
- [Vertus — Apartments to Rent](https://thisisvertus.com/apartments-to-rent/) — operator, accessed 2026-04-16. Portfolio + price floors.
- [Vertus — Journal: Choose to Rent with Ease](https://thisisvertus.com/journal/vertus-apartments-choose-to-rent-with-ease/) — operator, accessed 2026-04-16. 12-month standard tenancies, transparent pricing, in-house leasing team.
- [CWG — Residential Leasing (Vertus)](https://cwg.com/portfolio-and-places/residential-leasing/) — operator, accessed 2026-04-16. Vertus structure, 1,137 apartments across 3 buildings (pre-Charter Street count).
- [CWG Press — Vertus unveils 50-60 Charter Street](https://cwg.com/press-release/vertus-unveils-50-60-charter-street-the-ultimate-in-london-rental-living-181125/) — press, accessed 2026-04-16. Fourth building; 756 apartments; November 2025 opening.
- [Wharf Life — Vertus Edit / short-stay plan](https://wharf-life.com/interviews/vertus-canary-wharf-apartments-to-rent-vertus-edit-alastair-mullens/) — press, accessed 2026-04-16. Flexible tenancies below six months; 378 aparthotel studios at 3 & 15 West Lane.
- [Vertus Edit — Aparthotel](https://vertusedit.thisisvertus.com/) — operator, accessed 2026-04-16. Licence product, separate from BTR.
- [Luxury London — Vertus team profile](https://luxurylondon.co.uk/property/canary-wharf-vertus-residential-leasing-property-rental/) — press, accessed 2026-04-16. Team posture + tenant experience framing.
- [HomeViews — Vertus company reviews](https://www.homeviews.com/company/vertus) — review, accessed 2026-04-16. 4.35/5 rating; mixed reviews.
- [Canary Wharf Residential — 10 Park Drive](https://residential.canarywharf.com/10-park-drive/) — developer, accessed 2026-04-16. Confirms 10 Park Drive is an ownership tower, not Vertus BTR.
- [Canary Wharf Residential — One Park Drive](https://residential.canarywharf.com/one-park-drive/) — developer, accessed 2026-04-16. Confirms One Park Drive is an ownership tower.
- [Trustpilot — thisisvertus.com](https://uk.trustpilot.com/review/thisisvertus.com) — review, accessed 2026-04-16. 0 reviews (unclaimed profile).
- [Companies House — VERTUS RESIDENTIAL MANAGEMENT LIMITED](https://find-and-update.company-information.service.gov.uk/company/10070609) — official, accessed 2026-04-16. Active entity.
