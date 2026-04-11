# Agent 13 — Discovery: Press, Architecture, and "Next Neighbourhood"

**Type**: Discovery + research agent. Returns a comprehensive research file from a "what serious press and architecture publications are saying, and what's missing from the candidate list" angle, contributing to the post-sweep consensus pool alongside the 10 focus agents. Your file must include both a Discoveries section (missing areas / signature buildings / best-of entries) and a Research section (existing candidate areas analysed through the press and architecture lens).

**Focus**: Press coverage, architecture-publication coverage, awards, and best-of lists. This agent's contribution to the consensus pool is the editorial-quality-control lens — every area seen through "what have serious editors, critics, and award juries said about it".

**Scope**: All areas in `context/references/candidate-areas.md` (~95 candidates), plus any areas / buildings / neighbourhoods that serious press and architecture publications have covered in the last 12–24 months but that aren't in the candidate list. For existing candidates, research the press and architecture signal in depth — who has written about the area, who has named its signature buildings, what awards the buildings have won. For new discoveries, surface what a single AI missed.

**Bias toward**:
- Buzz, signal, and architectural quality
- Serious press (FT, Times, Guardian, Sunday Times) over lifestyle listicles
- Award-backed architecture (RIBA, Stirling shortlist, Dezeen Awards residential) over marketing-driven features
- Honest identification of "famous because of architecture" (Pritzker, Stirling) vs "famous because of marketing" (Wallpaper* feature)

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

**Output format**: ONE file at `docs/research/sweep-13-discovery-press-architecture.md`, 500–1000 lines, organised with the structure below. Dual-mode file: research on existing candidates plus discoveries.

```
# Sweep agent 13 — Discovery: Press, Architecture, Best-Of
Research date: YYYY-MM-DD
Publications reviewed: N
Total candidate areas covered: N
Total discoveries: N

## Methodology
[3–5 sentences on which publications you walked, how you handled
award lists, how you separated editorial coverage from marketing.]

## Research from my angle — existing candidate areas

### <area-slug-1> — <Area name>

#### Press coverage
[Named articles, publications, dates, URLs. What they said about the area.
Quote 1–2 sentences where load-bearing.]

#### Architecture signal
[Named signature buildings, named architects, awards or nominations.
Distinguish genuine architectural pedigree from marketing gloss.]

#### Best-of list appearances
[Sunday Times, Time Out, FT "best neighbourhoods" entries with years.]

#### T3.2 / T3.3 / T3.5 implications
[What this editorial signal says about cultural anchor, sense of place,
and architectural coherence. Feeds into agent 04's consensus pool.]

#### Sources for this area
- [URL] — [publication, date]

### <area-slug-2> — <Area name>
[...same structure...]

## Discoveries

### New area discoveries (press buzz)
For each: area name, borough, press citations (URLs + dates), rationale,
suggested initial grade prior.

### New signature project discoveries
For each: project name, architect, developer, awards / press citations,
parent area (existing or new), rationale.

### Best-of list entries we missed
For each: item, list name + date, borough / area, URL.

## Cross-cutting findings
[Patterns across press coverage — which boroughs are consistently covered,
which architects recur, which publications have a London bias, which best-of
lists are trustworthy. These feed into agent 04's cultural identity consensus.]

## Open questions
[Areas where press signal is thin, buildings where award status is ambiguous,
coverage you couldn't verify.]
```

---

## What NOT to do

- **Do NOT skip the research section** in favour of only doing discoveries. The new consensus model requires both — your editorial angle on existing candidates is valuable even when you haven't found anything new.
- **Do NOT include marketing puff pieces** from operator websites. That's agent 11's job. This agent looks at independent editorial only.
- **Do NOT propose anything that's been written about negatively** (e.g. "the worst new build in London" pieces). The signal here is positive editorial.
- **Do NOT duplicate the existing candidate list** as a discovery.

---

## Special instruction

The press signal is informative but not authoritative on its own. Don't trust marketing-driven listicles. Prefer FT, The Times, Guardian, Architects' Journal, and Sunday Times "Best Places to Live" over Time Out's lifestyle pieces. RIBA / Stirling / Dezeen Awards are the strongest single signals because they survive editorial review.

When you find a signature project, distinguish between "famous because of architecture" (Pritzker / Stirling) and "famous because of marketing" (Wallpaper* feature). The first is what T4.4 measures and what the synthesis step wants to weight heavily; the second isn't. Make the distinction explicit in your file so the synthesis step doesn't have to re-litigate it.
