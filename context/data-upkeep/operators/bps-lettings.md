# BPS Lettings — Operator Findings

**Researched:** 2026-04-16
**Project count in dataset:** 8 (all at Battersea Power Station)
**Verdict:** Not a BTR operator. Apply secondary-market defaults.

---

## What BPS Lettings actually is

"BPS Lettings" / "BPSE" is the in-house branding for **Battersea Power Station Estates** — a letting-and-sales agency that operates on-site at the Battersea Power Station development. They are **not a unified BTR operator**. The Battersea Power Station apartments were sold off-plan to individual investors (and owner-occupiers) by the development company (Battersea Power Station Development Company, a consortium led by Malaysian investors SP Setia, Sime Darby and the Employees Provident Fund). BPSE was established as the on-site agency that manages lettings for those individual investor-landlords who choose to rent their units out.

Key primary-source quotes:

> "Our in-house estate agents benefit from an exclusive relationship with the development."
> — bpsestates.co.uk (redirects to batterseapowerstation.co.uk/property-to-let)

> "As members of ARLA and the Property Ombudsman..."
> — same page

The service offering is classic letting-agent scope: tenant referencing, tenancy paperwork, deposit registration, rent collection, repairs coordination, periodic inspections. No unified operator-wide qualification policy; each landlord sets their own acceptance criteria, and BPSE executes standard letting-agent referencing on the landlord's behalf.

---

## Business model classification

| Question | Answer |
|---|---|
| Is BPS Lettings a BTR operator? | **No.** |
| Does a single entity own the rental units? | **No** — individual investor-landlords own the units; BPSE manages lettings on their behalf. |
| Is there a unified qualification policy? | **No** — each landlord sets their own criteria; BPSE runs standard UK referencing (likely Goodlord or equivalent) on each landlord's behalf. |
| Competing agents also operate in the building? | **Yes** — Foxtons, Hamptons, Knight Frank, Chestertons, Prime London, Savills all list BPS apartments on Rightmove / OnTheMarket / Zoopla. BPSE has an exclusive relationship with the developer but not with the landlords. |
| Agreement type | **AST** (standard UK individual-landlord default). |
| Referencing provider | **Unclear** — not stated on site. Given ARLA membership and standard letting-agent shape, most likely Goodlord, Let Alliance, Homelet, or similar — varies by landlord mandate. |

---

## Why this matters for the dataset

The dataset currently attributes 8 Battersea Power Station projects to "BPS Lettings" as if it were an operator. This is a **categorisation error** — these projects are secondary-market rentals (individual landlords letting their investor-owned units via an agent), not professionally-operated BTR. The correct treatment is the same as other Battersea Power Station sub-schemes that happened to have been attributed to "Individual landlords" or "Various agents" in neighbouring batches.

The distinction matters because:

1. **No operator-wide policy to research.** There is no FAQ page to read, no unified Homeppl/Goodlord/Canopy stack to verify, no operator-wide guarantor rule.
2. **Per-listing variance is extreme.** One BPS apartment might be let by a Malaysian overseas investor who accepts any tenant willing to pay 6 months upfront; the next apartment over might be let by a UK investor requiring UK-payslip-based standard referencing through Goodlord with no flex.
3. **Post-RRA (May 2026), the upfront-rent lever is dead for ASTs.** Individual landlords can no longer accept >1 month upfront as a qualification substitute under the new rules. This kills the main flex mechanism Caner might have used at Battersea pre-May.
4. **International-tenant receptivity varies by landlord.** Overseas-investor landlords (substantial slice of BPS's investor base given the Malaysian sovereign capital) are often more comfortable with international tenants; UK-investor landlords typically prefer UK-employed tenants.

---

## The 8 BPS Lettings projects

| Project | Current realism | Notes |
|---|---|---|
| Circus West Village | unknown | The completed Phase 1 village — active secondary market. Various landlords, many routes of enquiry. |
| Battersea Roof Gardens (Phase 3) | unlikely | Foster + Partners (KOA House, Prospect Place). Completed 2022. |
| Prospect Place | unlikely | Part of Phase 3 / Roof Gardens envelope. |
| Koa at Electric Boulevard | unknown | Same — Phase 3 / Roof Gardens. |
| Parkside Collection | blocked | Likely premium (>£1.5M sale values) — secondary rents likely £4k+, well above Caner's budget. |
| Switch House East | blocked | Original power station envelope — heritage flats, top-of-market pricing. |
| Switch House West | blocked | Same as East. |
| Sky Villas at Battersea Power Station | blocked | Top-tier — sky-high prices, not a realistic target. |

The four `blocked` projects are likely blocked on **cost grounds** rather than qualification grounds. The schema doesn't cleanly separate these dimensions — Caner's realism for these projects could be `"achievable-with-upfront"` from a qualification standpoint but `"blocked"` because the rent is £5k+/mo. Preserve existing `blocked` verdicts.

The two `unlikely` and two `unknown` projects need the secondary-market narrative: realism is `"unlikely"` by default because without a consistent operator-wide policy, standard individual-landlord referencing through Goodlord-style stacks is where the pathway typically fails for Caner.

---

## Ghost-project check

No ghost projects — all 8 buildings exist at Battersea Power Station and are confirmed on Rightmove / BPSE portal listings. The issue is **wrong-operator attribution** (Category B per ghost-project-detection.md), not ghost projects per se. The "operator" is really "various individual landlords, often marketed via BPSE as one of several on-site agents". Rather than flagging deletion, the cleaner correction is to normalise all 8 projects to the secondary-market defaults (same shape as `"Individual landlords"` / `"Various agents"` entries elsewhere in the dataset).

Not proposing an operator rename in this batch — that's a structural attribution change the user should confirm separately. This proposal applies the qualification/realism fields consistent with secondary-market handling while leaving the `operator: "BPS Lettings"` string in place.

---

## Sources

- https://www.bpsestates.co.uk/battersea-lettings (redirects to below; accessed 2026-04-16)
- https://batterseapowerstation.co.uk/property-to-let (accessed 2026-04-16; BPSE operating model and ARLA membership)
- https://batterseapowerstation.co.uk/retailers/sales-lettings-suite/ (accessed 2026-04-16)
- https://www.zoopla.co.uk/find-agents/branch/battersea-power-station-estates-ltd-london-80373/ (accessed 2026-04-16; confirms BPSE as a standard Zoopla-listed letting agent, not a BTR operator)
- https://www.rightmove.co.uk/estate-agents/profile/Battersea-Power-Station/Battersea---Lettings-166181.html (accessed 2026-04-16)
- https://www.foxtons.co.uk/estate-agents/battersea-power-station (accessed 2026-04-16; confirms Foxtons competes with BPSE for BPS lettings — further evidence of secondary-market structure)
