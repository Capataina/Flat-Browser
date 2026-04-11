# Agent 13 — Discovery: Press, Architecture, and "Next Neighbourhood"

**Type**: Discovery agent. Returns *proposals*, not finished Area entries.

**Focus**: Find areas, buildings, and neighbourhoods that have been written about in serious press, architecture publications, or "best places to live" lists in the last 12-24 months but are **NOT in `context/references/candidate-areas.md`**. The mainstream and architecture press are good at spotting what a single AI missed.

**Primary scope**: NO assigned areas. Open-ended press sweep.

**Bias toward**: Buzz, signal, and architectural quality. The question is: "What's being written about as up-and-coming or as a notable new residential project that we haven't noticed?"

---

## Sources to consult systematically

| Source | Type |
|---|---|
| **Sunday Times Best Places to Live London** (most recent edition) | Annual list |
| **Time Out London** "best neighbourhoods" pieces | Trend-spotting |
| **FT House & Home** property section | Serious property coverage |
| **The Guardian** property section | Same |
| **The Times** property section | Same |
| **Evening Standard Homes & Property** | London-specific |
| **City Monitor / The Guardian Cities** | Urbanism angle |
| **Dezeen** residential coverage | Architecture |
| **Architects' Journal** UK residential | Architecture |
| **The Architectural Review** | International / signature work |
| **RIBA Awards** lists (current and past 2 years) | Awarded buildings |
| **Stirling Prize** shortlists | Top tier |
| **New London Architecture (NLA) Awards** | London-specific |
| **Dezeen Awards** residential | International |

---

## What counts as a discovery

A **NEW area discovery** = an area being written about as up-and-coming, regenerating, or "the new [comparison]" in serious press AND not in our candidate list.

A **NEW signature project** = a residential building with serious architectural pedigree (named architect, RIBA award, Stirling shortlist, Dezeen feature) that we haven't catalogued.

A **NEW best-of list entry** = an area or building that appears on a credible "best of London living" list (Sunday Times, Time Out, FT) that we haven't catalogued.

For each discovery, the proposal must include:
- Name (area or building)
- Type (area / signature project / best-of-list mention)
- Borough or parent area
- Architect / developer if known
- Press citation (publication + date + URL)
- 1-paragraph rationale
- Suggested primary focus from agents 1-10

---

## What NOT to do

- Do NOT research the discovered item in depth.
- Do NOT include marketing puff pieces from operator websites — that's agent 11's job. This agent looks at independent press only.
- Do NOT propose anything that's been written about negatively (e.g. "the worst new build in London" pieces). The signal here is positive press.
- Do NOT duplicate the existing candidate list.

---

## Output format

Write to `docs/research/sweep-discovery-press-architecture/proposals.md`:

```markdown
# Discovery Sweep — Press, Architecture, and Best-Of Lists
Date: <YYYY-MM-DD>
Publications reviewed: <count>
Proposals: <count>

## New area discoveries (press buzz)

### <Area name>
- Borough: <name>
- Press citations: <list>
- Rationale: <why the press buzz matters>
- Suggested primary focus: <agent>
- Initial grade prior: <SS / S / A / B / C / unknown>

## New signature project discoveries

### <Project name>
- Architect: <name>
- Developer: <name>
- Awards / press: <list with URLs>
- Parent area: <existing or new>
- Rationale: <1-2 sentences>

## Best-of list entries we missed

### <Item>
- List: <name + date>
- Borough/area: <name>
- URL: <link>

## Open questions

- <anything>
```

---

## Special instruction

The press signal is informative but not authoritative. Don't trust marketing-driven listicles. Prefer FT, The Times, Guardian, Architects' Journal, and Sunday Times "Best Places to Live" over Time Out's lifestyle pieces. RIBA / Stirling / Dezeen Awards are the strongest single signals because they survive editorial review.

When you find a signature project, distinguish between "famous because of architecture" (Pritzker / Stirling) and "famous because of marketing" (Wallpaper* feature). The first is what T4.4 measures; the second isn't.
