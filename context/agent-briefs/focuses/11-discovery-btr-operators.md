# Agent 11 — Discovery: BTR Operator Portfolio Sweep

**Type**: Discovery agent. Returns *proposals*, not finished Area entries.

**Focus**: Find areas, neighbourhoods, and specific buildings that are operated by major BTR landlords but are **NOT in `context/references/candidate-areas.md`**. The candidate list was authored by a single AI based on what it already knew about — discovery agents like this one exist specifically to surface what that single perspective missed.

**Primary scope**: NO assigned areas. The whole point is open-ended exploration.

**Bias toward**: Building-stock-led discovery. The question is: "Where do major operators have purpose-built modern stock that we haven't yet considered?"

---

## Operators to sweep systematically

For each operator, visit their official "find a home" / "our buildings" / "portfolio" / "developments" page and walk through every entry. Cross-reference each building's location against the existing candidate list. Anything in London that doesn't appear in the candidate list is a discovery.

| Operator | Suggested entry point |
|---|---|
| **Vertus** | https://www.vertusliving.com/ |
| **Quintain Living** | https://www.quintainliving.com/ |
| **Get Living** | https://www.getliving.com/ |
| **Greystar UK** | https://www.greystar.co.uk/ |
| **EcoWorld Ballymore** | https://www.ecoworldballymore.com/ |
| **Way of Life** | https://wayoflife.com/ |
| **Essential Living** | https://www.essentialliving.uk.com/ |
| **Moda Living** | https://www.modaliving.com/ |
| **Be Living (Related Argent)** | https://beliving.com/ |
| **Argent / King's Cross** | https://www.kingscross.co.uk/ |
| **Grainger plc** | https://www.graingerplc.co.uk/ |
| **Apo (BlackRock)** | https://www.apoliving.com/ |
| **Folk Co-Living** | https://folk.co/ |
| **Build to Rent UK (BTR)** | aggregate listings |
| **Lendlease** | https://www.lendlease.com/uk/ |
| **Berkeley St James** | https://www.berkeleygroup.co.uk/ |
| **Knight Dragon** | https://www.knightdragon.com/ |
| **British Land** | https://www.britishland.com/ |
| **Capco** | https://capitalandcounties.com/ |

Don't stop at this list — if you find a building owned by an operator not listed above, note the operator and add them to the discovery output for the next iteration.

---

## What counts as a discovery

A **NEW area discovery** = an area name (e.g. "North Acton", "Hayes Village", "Wembley Park", "Royal Wharf") that has at least one named building from the operator list above AND does not appear in `context/references/candidate-areas.md`.

A **NEW project discovery** = a named building or development inside an EXISTING candidate area that we haven't listed yet (e.g. Greystar's "Sailmakers" in Canary Wharf, if not already there).

A **NEW operator discovery** = an operator name we haven't catalogued yet, with at least one London building.

For each discovery, the proposal must include:
- Name (area, project, or operator)
- Type (area / project / operator)
- Operator and developer
- Location (borough + nearest tube station + zone if known)
- 1-paragraph rationale: why this is worth adding
- Source URL (the operator's own page is fine)
- Suggested primary focus from agents 1-10 (which would research this best)
- Initial grade prior (SS / S / A / B / C / unknown)

---

## What NOT to do

- **Do NOT research** any area or project in depth. That's the focus agents' job. Your job is just to find things that should be added to the candidate list.
- **Do NOT redo what's already in the candidate list.** Cross-reference rigorously before flagging a discovery.
- **Do NOT propose Croydon, Sutton, Mitcham, Bromley** or any other excluded area. Those are explicitly out per `candidate-areas.md` "Areas explicitly excluded from the sweep". The exception is Agent 15 (excluded-areas reconsideration) which has a license to push back on those exclusions.
- **Do NOT propose areas outside London/M25.** Those are out of scope.

---

## Output format

Write to `docs/research/sweep-discovery-btr-operators/proposals.md`:

```markdown
# Discovery Sweep — BTR Operator Portfolio
Date: <YYYY-MM-DD>
Operators reviewed: <count>
Proposals: <count>

## New area discoveries

### <Area name>
- Operator: <name>
- Borough: <name>
- Postcode/zone: <e.g. NW10 / Zone 3>
- Nearest station: <name + line>
- Rationale: <1-2 sentences why this should be in the candidate list>
- Source: <URL>
- Suggested primary focus: <agent number + name>
- Initial grade prior: <SS / S / A / B / C / unknown>

### <next area...>

## New project discoveries (within existing candidate areas)

### <Project name> in <existing area>
- Operator: <name>
- Building type: <BTR / Owner-Lease / etc.>
- Rationale: <1-2 sentences>
- Source: <URL>

### <next project...>

## New operator discoveries

### <Operator name>
- Buildings in London: <count>
- Sample buildings: <names>
- Source: <URL>

## Operators reviewed but no new discoveries

- <list>

## Open questions

- <anything that needed manual judgment>
```

Reply with the file path when complete.

---

## Special instruction

Be exhaustive. If you discover 30 new areas, list all 30. The merge step will deduplicate and prioritise. Better to over-discover than miss something. The Phase F sweep cost is the same whether one agent finds 5 things or 30.

The single most valuable thing you can find is a BTR operator with **flexible referencing for graduate-visa renters** that we haven't yet considered. If any operator has documented international-tenant-friendly policies (e.g. accepts overseas references, has dedicated grad-visa packages), flag this as the headline finding.
