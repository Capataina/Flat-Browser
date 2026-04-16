# Lendlease / Living by Lendlease — findings

**Batch:** 2026-04-16 regeneration-masterplan operators
**Agent:** research-only (no source file edits)
**Accessed:** 2026-04-16

---

## Summary

Lendlease is both a developer and — via the branded BTR arm **Living by Lendlease** (operating entity: Lendlease Residential Asset Management Services Europe Ltd) — a professional rental operator. Critical dataset correction: the BTR portfolio at Elephant Park is **not** what the dataset currently attributes to Lendlease. The dataset names `Trafalgar Place`, `South Gardens`, `Park & Sayer`, `West Grove`, `The Wilderly` — these are BTS buildings (for sale), now let on the secondary market by individual owners / agents. The actual Living by Lendlease BTR portfolio at Elephant Park is:

1. **Park Central West** (opened earliest)
2. **Park Central East** (309 rental homes)
3. **City Lights Point** (penthouse-tier tower)
4. **Parkside** (newest community — 2025-2026)

Total stated: "over 900 new Build to Rent homes at Elephant Park." The two portfolios overlap geographically but are operationally distinct.

This is a **Category B ghost-project pattern** — the dataset has BTS buildings tagged with `operator: "Lendlease"` when they are not operated by Lendlease in any rental-letting sense. The correct treatment is either (a) rename operator to "Various agents" / "Individual landlords" for those buildings, or (b) replace the BTS buildings with the actual BTR portfolio names, or (c) split — BTS buildings kept as BTS with secondary-market operator, BTR buildings added fresh. Option (c) preserves the most information.

---

## Operator shape — the canonical pattern

Living by Lendlease fits the **Goodlord-stack standard BTR** pattern in the playbook but uses **HomeLet (Barbon Insurance Group)** as referencing provider — a third sibling in that family (Goodlord / HomeLet / Canopy are all credit-file-centric, payslip-heavy, thin on Open Banking).

| Dimension | Value | Evidence |
|---|---|---|
| Agreement type | AST | 12-month minimum tenancy stated on `livingbylendlease.com/uk/` — standard BTR tenancy language |
| Referencing provider | HomeLet (Barbon Insurance) | Verbatim: "HomeLet and its trading company Barbon Insurance Group Limited" on `livingbylendlease.com/uk/rental-application-terms/` |
| Open Banking | Unclear (lean no) | HomeLet is traditionally payslip/credit-file-first. Not explicitly mentioned either way |
| Income multiple | Unclear | Not stated on public pages |
| Guarantor — professional | Unclear | Not mentioned in application terms. 2026-04-16 shortlist research noted "Housing Hand acceptance is industry-standard-escalation but unconfirmed at Lendlease operator level" |
| Guarantor — overseas individual | Unclear | Not mentioned |
| Credit check | Standard | HomeLet runs standard UK credit-reference checks; not advertised as lenient or strict |
| International tenant policy | Unclear | Explicit "no students" is stated — no parallel positive language for international tenants. 20 Zone 1 flats imply some international acceptance but the policy is not published |
| Visa expiry handling | Unclear | Not addressed |
| Minimum tenancy | 12 months | "minimum tenancy of 12 months" stated verbatim on homepage |
| Upfront rent policy | one-month-ast-cap | Inferred from AST + post-RRA |
| Flexibility signal | Standard | No positive or negative flex cases found in HomeViews / Trustpilot scans |

**Realism pathways for Caner (BTR buildings only):**
- `with-savings` — ❌ requires Homeppl; Lendlease uses HomeLet, savings route not documented
- `with-professional-guarantor` — ⚠️ `"unclear"`; Housing Hand acceptance unconfirmed at operator level — direct enquiry required
- `with-co-signer-overseas` — ❌ HomeLet not documented as accepting overseas individual guarantors
- `standard-passable` — ❌ Open Banking not confirmed, credit check not advertised as lenient
- Licence routes — ❌ AST

**Suggested `grad_visa_realism`:** `unclear` for the BTR buildings (Park Central West/East, City Lights Point, Parkside) until Housing Hand acceptance is confirmed via direct enquiry. `unlikely` for the BTS buildings (Trafalgar Place, South Gardens, Park & Sayer, West Grove, The Wilderly) under secondary-market default — individual-landlord-default per the playbook.

---

## Per-batch project mapping

### Elephant Park (area: `elephant-park`)

| Current dataset entry | Actual status | Recommended action |
|---|---|---|
| `trafalgar-place` (operator: Lendlease) | BTS — sold homes, secondary-market letting | Change `operator` to `"Various agents"`; apply secondary-market defaults; `grad_visa_realism: "unlikely"` |
| `south-gardens` (operator: Lendlease) | BTS — same | Same |
| `park-sayer` (operator: Lendlease) | BTS (owner-occupier with some lets) — Daiwa House JV | Same |
| `west-grove` (operator: Lendlease) | BTS — same | Same |
| `the-wilderly` (operator: Lendlease) | BTS — final phase mid-2026 | Same |
| `elephant-central` (operator: Get Living) | BTR — correctly attributed to Get Living | No change (Get Living is separate operator; shortlist already verified as Homeppl) |
| **(missing)** Park Central West | BTR — Living by Lendlease | Add as new project if desired — out of v1 scope unless user confirms |
| **(missing)** Park Central East | BTR — Living by Lendlease | Same |
| **(missing)** City Lights Point | BTR — Living by Lendlease | Same |
| **(missing)** Parkside | BTR — Living by Lendlease | Same |

### Euston (area: kings-cross)

No Euston project found in dataset. King's Cross has "Euston" references in prose only (station name in transport discussion). Not applicable to Lendlease research.

### Silvertown Quays (area: royal-wharf-and-docks)

| Current dataset entry | Actual status | Recommended action |
|---|---|---|
| `silvertown-lendlease` (operator: Guinness Homes, developer: Lendlease + Starwood Capital) | Phased, future phases — Lendlease is developer, Guinness runs affordable. Commercial rental not yet live | No change to qualification block; research_status stays `"unknown"` / partial — future phase, pre-lettings |
| `argenta-silvertown` (operator: Various) | Guinness/Lendlease development — "Argenta first residents late 2025" per area file | Secondary-market defaults already applied via `operator: "Various"` — no change |

### Wandsworth Riverside (area: wandsworth-town)

The dataset has two projects with "Riverside" in the name — `wandsworth-riverside` (Berkeley developer+operator) and `riverside-quarter` (Frasers developer, Various operator). **Neither is a Lendlease Wandsworth Riverside Quarter project.** The batch brief appears to be incorrect on this attribution — Lendlease has no publicly-visible Wandsworth Riverside Quarter scheme. No action.

### Stratford Cross (area: stratford)

Batch brief mentioned "Stratford Cross at Plaistow" — this doesn't exist. **Stratford Cross is the rebrand of International Quarter London** (Lendlease + LCR JV), located IN Stratford E20 on the Olympic Park gateway, not Plaistow. The area file has `stratford-waterfront` (Ballymore) and other Stratford entries, but **no Stratford Cross / IQL BTR entry**. The IQL has 333 delivered homes + 683 planned apartments. If user wants IQL added, this would be a Phase 1 discovery addition — out of v1 scope unless confirmed.

---

## Ghost-project flags

### Category B — wrong-operator attribution (5 projects)

1. **Trafalgar Place** (`trafalgar-place` in `elephant-park`) — currently `operator: "Lendlease"`. Not on Living by Lendlease's portfolio. Buildington/dRMM describe it as BTS. Secondary market only.
2. **South Gardens** (`south-gardens` in `elephant-park`) — same.
3. **Park & Sayer** (`park-sayer` in `elephant-park`) — same; BTS with Daiwa House.
4. **West Grove** (`west-grove` in `elephant-park`) — same.
5. **The Wilderly** (`the-wilderly` in `elephant-park`) — same (in_delivery BTS).

**Recommended action for all five:** keep the projects, change `operator` to `"Various agents"` (or `"Individual landlords"`), apply secondary-market defaults, add a note in each project's `notes` explaining that primary sale was via Lendlease but rentals are secondary-market through agents.

**Grade-impact assessment:** Elephant Park T1.4 reasoning currently claims "Lendlease runs the BTR and managed rental components under a single operator with corporate referencing." This is partially true (Park Central West/East, City Lights Point, Parkside) but the reasoning implies the five listed projects are Lendlease BTR — they aren't. If the dataset chooses to add Park Central West/East and City Lights Point as new projects, the T1.4 reasoning stays valid. If not, T1.4 reasoning should be softened.

### Category C — defunct operator

None. Lendlease Living is active with recent (2024-2026) press and new buildings.

### Category A — true ghosts

None — all named buildings exist, just under BTS not BTR.

---

## Sources

1. `https://www.livingbylendlease.com/uk/` — homepage listing Park Central West, Park Central East, City Lights Point, Parkside as the BTR portfolio; 12-month minimum; no students (accessed 2026-04-16)
2. `https://www.livingbylendlease.com/uk/rental-application-terms/` — application terms naming HomeLet / Barbon Insurance Group as referencing partner (accessed 2026-04-16)
3. `https://www.livingbylendlease.com/uk/park-central-east/` — Park Central East: 309 homes, amenity stack described
4. `https://www.lendlease.com/uk/media-centre/media-releases/park-central-west-opens-its-doors/` — Park Central West BTR opening press release (accessed 2026-04-16)
5. `https://www.lendlease.com/uk/what-we-do/investment-management/lrip-1/` — LRIP 1 + LRIP 2 investment vehicles confirming "over 900 BTR homes at Elephant Park"
6. `https://drmmstudio.com/project/trafalgar-place/` — dRMM Architects confirming Trafalgar Place as BTS (for-sale) scheme shortlisted for RIBA Stirling Prize 2016
7. `https://www.homesbylendlease.co.uk/development/south-gardens/` — Homes by Lendlease page for South Gardens (now redirects to Living by Lendlease vanity URL — signalling portfolio consolidation)
8. `https://www.lendlease.com/uk/projects/international-quarter-london/` — International Quarter London project page (Stratford Cross)
9. `https://www.lendlease.com/uk/residential/build-to-rent/` — Lendlease BTR capability page
10. 2026-04-16 shortlist research note (LifeOS memory) — "Lendlease Living: HomeLet referencing confirmed; Housing Hand acceptance industry-standard-escalation but unconfirmed at Lendlease operator level"
