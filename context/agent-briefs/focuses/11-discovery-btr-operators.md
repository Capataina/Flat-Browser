# Agent 11 — Discovery: BTR Operator Portfolio Sweep

**Type**: Discovery + research agent. Returns a comprehensive research file from a "what's the operator stock, and what's missing" angle, contributing to the post-sweep consensus pool alongside the 10 focus agents. Your file must include both a Discoveries section (areas / projects / operators missing from the candidate list) and a Research section (existing candidate areas analysed from the operator angle).

**Focus**: Operator-level analysis of the BTR stock in London. Who owns what, how operator behaviour varies across portfolios, what's missing from our candidate list, and what operator-level facts the focus agents may have under-weighted. This agent's contribution to the consensus pool is the operator lens — every area seen through "which operators are active here, and what does that imply for stock quality, management standards, and qualification realism".

**Scope**: All areas in `context/references/candidate-areas.md` (~95 candidates), plus any operators or buildings you discover that should be in the dataset. For existing candidate areas, research them from the operator angle — who owns the BTR stock, what's their management reputation, how does their portfolio behave across London. For new discoveries, surface operators, areas, and buildings that were missed when the candidate list was authored. Both contributions feed the same post-sweep consensus synthesis.

**Bias toward**:
- Operator-level patterns that apply across multiple buildings
- Building stock quality and age — which areas have new stock, which have older BTR, which have none
- Operator reputation for management, amenity delivery, and international-tenant friendliness
- Missing areas where major operators have stock but the candidate list has gaps

---

## Operators to sweep systematically

For each operator, visit their official "find a home" / "our buildings" / "portfolio" / "developments" page and walk through every entry. Cross-reference each building's location against the existing candidate list. Anything in London that doesn't appear in the candidate list is a discovery; everything that does is material for the per-area research section.

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
| **Lendlease** | https://www.lendlease.com/uk/ |
| **Berkeley St James** | https://www.berkeleygroup.co.uk/ |
| **Knight Dragon** | https://www.knightdragon.com/ |
| **British Land** | https://www.britishland.com/ |
| **Capco** | https://capitalandcounties.com/ |

Don't stop at this list — if you find a building owned by an operator not listed above, note the operator and include them in the discovery output.

---

**Output format**: ONE file at `docs/research/sweep-11-discovery-btr-operators.md`, 500–1000 lines, organised with the structure below. This is a dual-mode file: research on existing candidates plus discoveries of what's missing.

```
# Sweep agent 11 — Discovery: BTR Operator Portfolio
Research date: YYYY-MM-DD
Operators reviewed: N
Total candidate areas covered: N
Total discoveries: N

## Methodology
[3–5 sentences on how you walked each operator's portfolio, how you cross-referenced against the candidate list, how you handled ambiguous area mappings.]

## Research from my angle — existing candidate areas

### <area-slug-1> — <Area name>

#### Operators active in this area
[Named operators, named buildings, approximate build dates, known management
reputation, known qualification patterns.]

#### What the operator mix implies
[If Vertus is the only operator in an area, the whole area is effectively
Vertus-shaped — premium amenity, strict referencing, UK-guarantor-heavy.
If Quintain Living dominates, international-friendly. Make the call
explicitly so the synthesis step can weight it against other files.]

#### Sources for this area
- [URL]

### <area-slug-2> — <Area name>
[...same structure...]

## Discoveries

### New area discoveries
For each: name, operator(s), borough, nearest station + zone, rationale
(2–3 sentences), source URL, suggested initial grade prior.

### New project discoveries (within existing candidate areas)
For each: project name, operator, parent area, building type, rationale,
source URL.

### New operator discoveries
For each: operator name, London building count, sample buildings, source URL.

## Cross-cutting findings
[Operator-level patterns across the whole portfolio: which operators are
grad-visa-friendly, which are strict, which deliver premium amenity
consistently, which are inconsistent. These are the highest-value findings
of this agent.]

## Open questions
[Operators where you couldn't verify portfolio completeness, buildings where
ownership is ambiguous, areas where operator data conflicts with press
coverage.]
```

---

## What NOT to do

- **Do NOT skip the research section** in favour of only doing discoveries. The new consensus model requires both — your operator angle on existing candidates is valuable even when you haven't found anything new.
- **Do NOT propose Croydon, Sutton, Mitcham, Bromley** or any other excluded area in the discoveries section. Those are explicitly out per `candidate-areas.md` "Areas explicitly excluded from the sweep". Agent 15 has the licence to push back on those exclusions; you don't.
- **Do NOT propose areas outside London / M25** in the discoveries section.
- **Do NOT duplicate what's already in the candidate list** as a discovery. Cross-reference rigorously before flagging.

---

## Special instruction

Be exhaustive on the discoveries side. If you find 30 new areas, list all 30. The synthesis step will deduplicate and prioritise. Better to over-discover than miss something.

The single most valuable finding this agent can produce is a BTR operator with **documented flexible referencing for graduate-visa renters** that other agents haven't yet considered. If any operator has explicit international-tenant-friendly policies (accepts overseas references, has dedicated grad-visa packages, accepts upfront-rent routes), flag this as the headline finding and include the specific policy URL — this feeds directly into agent 09's consensus pool on qualification realism.
