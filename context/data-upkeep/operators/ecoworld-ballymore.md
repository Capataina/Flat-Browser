# EcoWorld Ballymore — operator research

Research date: 2026-04-16. Researcher: data-upkeep Phase-2 agent. Scope: operator-level qualification policies + portfolio verification for the single dataset project attributed to EcoWorld Ballymore (`embassy-gardens`, nine-elms).

---

## What is EcoWorld Ballymore?

**EcoWorld Ballymore is a joint-venture developer holding company, not a BTR operator.** Created in January 2015 when Ballymore sold Wardian London, Embassy Gardens, and Phase 2 of London City Island to Malaysian developer EcoWorld for £428 million. The resulting holding company — Eco World-Ballymore Holding Company Limited — is owned 75% by EcoWorld and 25% by Ballymore. **Ballymore continues to manage all three schemes on behalf of the JV.**

- JV website (old): `ecoworldballymore.com` — **redirects to ballymoregroup.com** as of 2026-04-16 (confirmed redirect 301)
- JV Companies House: ECO WORLD - BALLYMORE EMBASSY GARDENS COMPANY LIMITED (no. FC032886)
- No consumer-facing rental portal; no tenant FAQ; no referencing provider disclosure

The JV's three flagship schemes:

| Scheme | Area | Status | Current letting channel |
|---|---|---|---|
| **Embassy Gardens** | Nine Elms | Mostly complete; Phase 2 ongoing (HAL Architects — 872 new homes including affordable rental) | Sales-led; secondary-market lettings via private landlords + agents (Foxtons, JLL, Dexters, etc). New `Capston` building is marketed via Penta agency. |
| **Wardian London** | Canary Wharf (Marsh Wall) | Complete (two towers, 50 & 55 storeys, 764 apartments) | **Foxtons is sole lettings agent** via their New Homes Lettings team ("Foxtons have acted as sole UK agent for Wardian London on behalf of EcoWorld Ballymore since launch") |
| **London City Island Phase 2** | Poplar-Blackwall (Leamouth Peninsula) | Phase 2 completions ongoing (Amelia building completed) | Secondary-market via JOHNS&CO + Foxtons + other agents |

### Dataset attribution against reality

The dataset attributes **1 project** to the `ecoworld-ballymore` operator slug:

| Project ID | Dataset name | Verdict |
|---|---|---|
| `embassy-gardens` (nine-elms) | Embassy Gardens | Correct as **developer** attribution but not as **operator** — EcoWorld Ballymore develops; lettings are secondary-market. Operator attribution should be `"EcoWorld Ballymore / private landlords"` consistent with the `"Ballymore / private landlords"` pattern already used for The Brentford Project. |

**Wardian London is not currently in the dataset** (a coverage gap, not a ghost). Not in scope for this research batch but worth flagging.

**London City Island Phase 2** is currently attributed to `"Ballymore"` (not `"EcoWorld Ballymore"`) in the dataset — this is technically a wrong-operator attribution at the JV level, covered in the Ballymore research batch.

### The Newfoundland precedent

Historical correction: Newfoundland was originally attributed to "EcoWorld Ballymore" in the dataset. The 2026-04-12 cleanup correctly moved it to operator "Vertus" (while keeping developer "EcoWorld Ballymore"). That precedent confirms the pattern — **EcoWorld Ballymore is a developer/owner-entity, not a tenant-facing operator**, and its buildings are operated either by a specialist BTR partner (Vertus at Newfoundland) or via secondary-market lettings (Wardian via Foxtons; Embassy Gardens via multiple agents).

---

## Embassy Gardens — the letting reality

### Who lets the apartments

Embassy Gardens is a large sales-led masterplan. Lettings are secondary-market — individual flat owners appointing letting agents:

- **Foxtons** (prolific across Nine Elms premium buildings)
- **JLL Residential** (Nine Elms specialist)
- **Dexters, Knight Frank, Benham & Reeves** (premium residential)
- **Capston / Penta** (new Phase 2 Capstone building has Penta as new-homes agent)

No single operator runs a rental pool at Embassy Gardens. This is qualitatively different from Greystar's Bloom Nine Elms or Way of Life's Mylo Nine Elms (both in the same area but with single-operator BTR campuses).

### Phase 2 affordable rental

HAL Architects' Phase 2 for Ballymore + EcoWorld includes "private for sale, shared ownership and affordable rental units in three buildings." The affordable rental component will likely be managed by a housing association (Peabody, L&Q, or A2Dominion are the frequent Nine Elms partners). The private-sale component continues the secondary-market pattern.

### No rental FAQ / no referencing stack

Confirmed across multiple searches:
- `embassygardens.com` redirects to the new Phase 2 Capston marketing site (`thecapston.com`)
- The Capston site is new-homes-for-sale marketing, not a rental portal
- No published referencing partner, no income multiple, no guarantor policy
- No Homeppl / Goodlord / Canopy case study features Embassy Gardens or EcoWorld Ballymore

**Because EcoWorld Ballymore does not operate lettings, there is no operator-level qualification policy to research.** Each private-landlord let at Embassy Gardens is a separate transaction through whichever agent the owner appoints.

---

## Qualification defaults (secondary-market pattern)

Same as the Ballymore projects — per `operator-research-playbook.md` §"Secondary-market categories":

| Field | Value |
|---|---|
| `agreement_type` | `"ast"` |
| `referencing_provider` | `"unclear"` |
| `min_tenancy_months` | `12` (or `null`) |
| `income_multiple` | `30` |
| `open_banking_accepted` | `"unclear"` |
| `upfront_rent_policy` | `"one-month-ast-cap"` |
| `accepts_professional_guarantor` | `"unclear"` |
| `accepts_individual_overseas_guarantor` | `"unclear"` |
| `credit_check` | `"standard"` |
| `international_tenant_policy` | `"accepted-case-by-case"` |
| `visa_expiry_handling` | `"unclear"` |
| `qualification_flexibility_signal` | `"unclear"` |
| `realism_pathways` | `[]` |
| `grad_visa_realism` | preserve **`"unlikely"`** (dataset already has this authored) |
| `research_status` | `"complete"` |

At Embassy Gardens price points (1-beds routinely £2,800+/mo via Foxtons / JLL), the 30× income floor sits around £84k+. Secondary-market individual landlords default to Goodlord/Let Alliance-style referencing without Homeppl Open-Banking, and guarantor acceptance is per-listing. The `"unlikely"` realism verdict is correct and should be preserved.

---

## Note on ownership-entity vs operator distinction

The EcoWorld Ballymore case is the canonical example of the ownership-entity-vs-operator distinction that has caused multiple authoring errors in the dataset:

- **Newfoundland**: dataset originally said `operator: "EcoWorld Ballymore"` — wrong. Operator is Vertus. Corrected 2026-04-12.
- **London City Island**: dataset says `operator: "Ballymore"` — partially wrong. Phase 2 is EcoWorld Ballymore JV; lettings are secondary-market. Needs correction (covered in Ballymore batch).
- **Embassy Gardens**: dataset says `operator: "EcoWorld Ballymore"` — technically a developer-operator conflation. Should be `"EcoWorld Ballymore / private landlords"` or similar to reflect the secondary-market letting reality.
- **Wardian London**: not in dataset; if added, should be attributed to a mixed operator ("EcoWorld Ballymore / Foxtons / private landlords").

The systematic pattern is that developer names are being used where operator names belong. The EcoWorld Ballymore JV is the most tempting mis-attribution because its name sounds like an operator brand (matching the Ballymore brand presence on signage and marketing). In reality, neither Ballymore nor EcoWorld operates lettings — the JV is purely ownership + development, with Ballymore managing on the asset-management side.

---

## Sources

- [ECO WORLD - BALLYMORE EMBASSY GARDENS COMPANY LIMITED](https://find-and-update.company-information.service.gov.uk/company/FC032886) — Companies House, accessed 2026-04-16. Confirms JV holding structure.
- [Wikipedia — Ballymore Group](https://en.wikipedia.org/wiki/Ballymore_Group) — reference, accessed 2026-04-16. JV formation 2015, £428m deal, 75/25 EcoWorld/Ballymore split, Ballymore continues to manage schemes.
- [Wikipedia — Embassy Gardens](https://en.wikipedia.org/wiki/Embassy_Gardens) — reference, accessed 2026-04-16.
- [BDC Magazine — EcoWorld Ballymore launches Wardian London](https://bdcmagazine.com/2015/09/ecoworld-ballymore-launches-wardian-london/) — press, accessed 2026-04-16. JV operation and Wardian launch.
- [Wallpaper — EcoWorld Ballymore completes Wardian](https://www.wallpaper.com/architecture/wardian-residential-ecoworld-ballymore-london) — press, accessed 2026-04-16.
- [Foxtons — Wardian London new homes / sole UK agent](https://www.foxtons.co.uk/developments/wardian) — agent, accessed 2026-04-16. Foxtons is sole lettings agent.
- [EcoWorld International — LCI Phase 2 Amelia](https://ecoworldinternational.com/news/its-a-wrap-ecoworld-ballymore-unveils-first-of-phase-2-completions-at-london-city-island/) — press, accessed 2026-04-16. Confirms LCI Phase 2 is EcoWorld Ballymore JV.
- [Ballymore — News: Embassy Gardens launches new homes](https://www.ballymoregroup.com/news/embassy-gardens-launches-new-homes-overlooking-the-new-us-embassy) — developer, accessed 2026-04-16.
- [HAL Architects — Embassy Gardens Legacy Buildings](https://www.halarchitects.co.uk/embassy-gardens-legacy-buildings) — architect, accessed 2026-04-16. Phase 2 design: 872 new homes across 3 buildings with private-sale + shared-ownership + affordable-rental mix.
- [The Capston — Embassy Gardens new homes](https://thecapston.com/) — developer (Penta agency), accessed 2026-04-16. Phase 2 new-homes sales marketing; not a rental portal.
- [Ballymore — Embassy Gardens project page](https://www.ballymoregroup.com/project/detail/embassy-gardens) — developer, accessed 2026-04-16.
- [Rightmove — EcoWorld Ballymore Embassy Gardens developer branch](https://www.rightmove.co.uk/developer/branch/EcoWorld-Ballymore/Embassy-Gardens-91519.html) — press/agent, accessed 2026-04-16. EcoWorld Ballymore is a Rightmove developer-branch (sales-led), not a lettings-branch.
