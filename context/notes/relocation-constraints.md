# Relocation Constraints

The hard realities shaping which parts of the Flatbrowser shortlist are actually reachable, and which are aspirational fantasy. Captured 2026-04-11 from the user directly. This is durable knowledge — these constraints will not change until either Caner's employment or visa situation changes, at which point this file should be updated, not silently ignored.

---

## Current baseline (the thing being upgraded from)

| Field | Value |
|---|---|
| Building | Ten Degrees |
| Area | Croydon |
| Nearest station | East Croydon |
| Rent | ~£2,500 / month |
| Bills + council tax | ~£500 / month |
| **All-in cost** | **~£3,000 / month** |
| Tenancy structure | Secured by paying **3 months rent upfront** (the agency normally asks for 6–12) |

Caner's framing: **paying ~£3k/month for Croydon is excessive**. Croydon is not a destination he wants to be in; the rent reflects London floors, not Croydon value. The move is upgrade-motivated, not budget-motivated — he is willing to pay similar money to be somewhere meaningfully better.

This means the budget envelope is roughly **£2,500–3,000 rent + bills**, with meaningful flexibility upward for clearly better areas, but no infinite headroom.

---

## The rental-qualification problem

**Updated 2026-04-12 for the Renters' Rights Act 2025 (commencing 1 May 2026).**

The reason most of the current Flatbrowser shortlist is structurally out of reach: every premium BTR / managed development in London runs an affordability check that Caner cannot pass through the standard route. The RRA makes this harder in one way (upfront bypass is now illegal) and easier in another (all tenancies are rolling monthly, and Homeppl/Open Banking provides an alternative referencing pathway).

```
                              THE WALL (post-1 May 2026)

  Rental application
        │
        ▼
  Referencing check ──┐
        │             │
        │             ├── PATH A: prove income via payslips
        │             │      30× monthly rent in annual salary
        │             │      → Caner has NO payslips. Path closed.
        │             │
        │             ├── PATH B: Open Banking referencing (Homeppl)
        │             │      Bank transactions prove income without payslips
        │             │      → Works if the operator uses Homeppl.
        │             │      → Quintain Living, Fizzy Living confirmed.
        │             │      → PATH OPEN (operator-dependent).
        │             │
        │             ├── PATH C: professional guarantor
        │             │      Third-party guarantor (Housing Hand, Guarantid)
        │             │      pays ~3-5% of annual rent as a fee
        │             │      → Must be accepted by operator.
        │             │      → PATH OPEN (operator-dependent, costly).
        │             │
        │             └── PATH D: licence-based accommodation
        │                    Serviced apartments, apart-hotels, extended-stay
        │                    operators using licence agreements (not ASTs)
        │                    → EXEMPT from RRA. No referencing needed.
        │                    → Just pay and move in.
        │                    → PATH OPEN (limited stock, often pricier).
        │
        │   ✗ PATH E: pay 3+ months upfront (CLOSED 1 May 2026)
        │          Advance rent capped at 1 month by law for ASTs.
        │          The route that secured Ten Degrees no longer exists.
        │
        ▼
  Rejected (unless Path B, C, or D applies)
```

**How Caner secured Ten Degrees (pre-RRA)**: the agency made a concession to accept **3 months upfront** instead of the usual 6–12. This strategy is no longer legal for new tenancies from 1 May 2026. The next move must use one of paths B, C, or D above.

### Specific blockers, in plain language

1. **No UK credit history.** Caner moved to the UK as a student in 2022. He has not had time, the right financial products, or the income flow needed to build a UK credit score that automated affordability checks would pass.
2. **No formal paid work experience yet.** Cernio — his AI-powered job discovery engine — is the active job hunt. Until that lands, there are no payslips, no employment contracts, no offer letter to point a letting agent at.
3. **Cannot show £60k–£100k income proof.** Many premium BTR operators want either £60k+ or £100k+ depending on the rent band. Caner does not have, and cannot fabricate, that paper trail.
4. **Cannot pay 6–12 months upfront.** This is the standard fallback for international renters and for people without UK credit history. Caner can stretch to 3 months upfront because that's the deal he just made — he is unlikely to be in a stronger cash position before the next move.
5. **Graduate visa expiring August 2027.** Letting agents see this and worry that any 2-year tenancy starting today would extend past visa expiry, opening continuity risk for them. Some operators auto-decline visa-expiring-before-tenancy-ends applications even if every other criterion passes.
6. **Turkish nationality with no UK guarantor.** Many letting agents will accept a UK-resident guarantor with strong income as a workaround for the income/credit gap. Caner does not have a UK-based guarantor.

These are not pessimistic projections — they are the realities that already played out when securing Ten Degrees, and they will play out again on the next move.

---

## What this changes about Flatbrowser

The current shortlist — researched in March 2026, fact-checked against TfL, Census 2021, Rightmove, and developer microsites — was optimised for **the best possible places to live in London**. It contains some of the most prestigious modern developments in the city: Battersea Power Station, Canary Wharf / Wood Wharf, King's Cross Gasholders, One Nine Elms, Battersea Switch House, Embassy Gardens.

Almost all of these are operated by professional landlords (Vertus, BPS Lettings, Quintain Living, Way of Life, Greystar, Get Living) who run **strict affordability checks**. The "income or upfront" wall above hits hardest exactly at this tier. Specifically, the establishments that are *most likely* unreachable under the current constraints include:

- **Canary Wharf / Wood Wharf (Vertus)** — premium BTR with full corporate referencing
- **Battersea Power Station** — premium ownership and BTR alike
- **Battersea Switch House** — same operator, same wall
- **King's Cross Gasholders & Capella** — premium ownership-led but with professional rental
- **One Nine Elms** — premium with high rent floors
- **Embassy Gardens** — Way of Life / EcoWorld Ballymore, high price floor

Some of the existing dataset *may* be more flexible — Wembley Park (Quintain Living) is build-to-rent at scale and has a reputation for clearer referencing rules at the lower end of its price band, and Kidbrooke Village (Berkeley) sits at meaningfully more accessible price points. But neither has been verified against the specific question "will this operator accept a graduate-visa renter with 3 months upfront and no UK credit history?".

**The dataset has never been filtered for this constraint.** The fact-check pass on 2026-03-11 verified zone, tenure, demographics, age mix, and connectivity against external sources. It did not check rental qualification realism for the actual applicant. That's the missing axis.

---

## Implications for the next phase of the project

Captured here as **shaping context**, not as decisions. The user has signalled that they want to "generalise the search" and stop chasing the absolute best options, but exactly how that generalisation should be structured is in-flight deliberation, not yet resolved knowledge. The decisions themselves belong in a plan or in chat until they settle, at which point they can be promoted into a note.

The likely shapes the generalisation could take:

1. **Add new tag axes for rental accessibility.** Examples: `referencing` → strict / flexible / 3-month-upfront-friendly / guarantor-required; `credit-friendly` → yes / no / conditional; `visa-friendly` → yes / unclear / no.
2. **Broaden the shortlist beyond trophy addresses.** Areas Caner has not yet researched that may be more reachable: Acton, Ealing, Walthamstow, Hackney Wick, Leyton, New Cross / Deptford, Tooting, Stockwell, Streatham, Brixton, Peckham, Bermondsey, Surrey Quays, Crystal Palace, Forest Hill, Lewisham, Catford. Most of these would not have made the original "best of London" list but many would meet the upgrade-from-Croydon bar with an accessible referencing process.
3. **Re-tier the existing dataset.** Some current entries are verifiably out of reach and should be marked as such (or removed). Some may be reachable and should be flagged as primary targets. The fact-check pass should be re-run against the rental-realism axis specifically.
4. **Add Cambridge as a possible location.** Currently absent. `preferences.toml` lists Cambridge as a hard-acceptable work location, and Caner is on a UK Graduate visa with full right to work UK-wide. If Cambridge becomes the work location, the entire London-only dataset is the wrong frame.
5. **Reflect "I don't know where work will be yet" in the connectivity scoring.** Until Caner has a job offer, the move target needs to be defensibly hub-connected to multiple work clusters (City of London, Canary Wharf, Soho, Shoreditch, King's Cross), not optimised for one specific commute.

---

## Open questions to resolve before generalising

These are the questions whose answers materially shape the next implementation. Listed here so the next session does not have to re-derive them.

1. **The "we" in "we want to move".** Caner used plural in his last message ("we want to move somewhere else in london"). Is there a partner or housemate moving with him? If so, that doubles the budget envelope, changes the bedroom-count requirement, and may unlock joint-applicant rental qualification (a UK-resident or higher-earning partner could anchor the affordability check). **Unconfirmed — must be asked before any redesign assumes single occupancy.**
2. **Hard upper rent ceiling.** Currently £3k all-in is the baseline he's *willing* to leave. Is there an upper bound he won't cross even for a much better area? £3.2k? £3.5k?
3. **Bedroom count.** The current dataset is implicit about bedroom counts — the per-establishment data files mention prices but not "Caner needs 1-bed / 2-bed". Tied to question 1.
4. **Move timeline.** Is this a "next 1–3 months" decision, or "as soon as I land a job", or "after the visa transition in 2027"? The urgency changes which trade-offs matter.
5. **Cambridge: in or out?** As above.
6. **Specific operators to target or avoid.** Quintain Living (Wembley Park), Get Living (Stratford East Village), Greystar — are any of these known to have flexible referencing for graduate-visa renters? This is researchable, not yet researched.
