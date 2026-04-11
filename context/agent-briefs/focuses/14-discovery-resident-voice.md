# Agent 14 — Discovery: Resident Voice & Grass-roots

**Type**: Discovery + research agent. Returns a comprehensive research file from a "what are real renters saying, and what's missing from the candidate list" angle, contributing to the post-sweep consensus pool alongside the 10 focus agents. Your file must include both a Discoveries section (missing areas / operator-flexibility insights / renter-led patterns) and a Research section (existing candidate areas analysed through the grass-roots resident voice lens).

**Focus**: Forum sentiment, lived-experience testimony, and the grass-roots signal layer that operator websites and council reports will not give you. Particular emphasis on young professionals and international / visa renters — the cohort Caner belongs to. This agent's contribution to the consensus pool is the most resident-voiced of the 15 — direct quotes, thread URLs, first-hand accounts.

**Scope**: All areas in `context/references/candidate-areas.md` (~95 candidates), plus any areas / operator behaviours / renter-led patterns you discover that aren't captured in the candidate list. For existing candidates, research the grass-roots signal in depth — what's being said on Reddit, HomeViews, Trustpilot, Facebook, Twitter about the area and its buildings. For new discoveries, surface places that renters recommend to each other but which don't appear in operator marketing or planning portals.

**Bias toward**:
- Resident sentiment, lived experience, and "where do people like Caner actually live?" patterns
- First-hand grad-visa renter testimony — these stories are the single most decision-relevant output of this agent
- Repeated patterns across multiple sources, not single-thread anecdotes
- Honest conflict preservation — if some residents love an area and some hate it, surface both

---

## Sources to consult systematically

| Source | Strength |
|---|---|
| **r/HousingUK** | Honest renter discussions, often specific buildings |
| **r/London** | Neighbourhood discussions, "where should I move" threads |
| **r/AskUK** | Broader UK renter advice including London-specific threads |
| **r/uklandlords** | Operator reputation discussions |
| **r/IWantOut** + **r/expats** | International-tenant-specific threads |
| **r/UKVisa** | Graduate-visa-specific renting discussions |
| **r/cscareerquestionsEU** + **r/cscareerquestions** London threads | Tech worker relocation discussions |
| **HomeViews** building reviews | Resident sentiment per building |
| **Trustpilot** for major operators | Aggregate operator sentiment |
| **Facebook groups** like "Grad visa renters London" if accessible | First-hand experiences |
| **Twitter / X** for renter-led discussions | Recent and immediate |

---

**Output format**: ONE file at `docs/research/sweep-14-discovery-resident-voice.md`, 500–1000 lines, organised with the structure below. Dual-mode file: research on existing candidates plus discoveries.

```
# Sweep agent 14 — Discovery: Resident Voice & Grass-roots
Research date: YYYY-MM-DD
Threads and sources reviewed: N
Total candidate areas covered: N
Total discoveries: N

## Methodology
[3–5 sentences on which forums and sources you walked, how you handled
anecdotal vs repeated patterns, how you verified grad-visa testimony.]

## Research from my angle — existing candidate areas

### <area-slug-1> — <Area name>

#### What renters are saying
[Named Reddit threads with URLs, HomeViews themes, Trustpilot patterns.
Direct quotes where load-bearing. Distinguish building-level sentiment
from area-level sentiment.]

#### Grad-visa / international renter signal
[Any first-hand testimony from visa renters about referencing, upfront
routes, guarantor requirements, or operator friendliness in this area.
These are the highest-value findings of this agent — include URLs.]

#### Common complaints / common praise
[Recurring themes across multiple sources. Tag each as building-specific
or area-general, and as operator-level or local-to-the-building.]

#### Sources for this area
- [URL] — [thread description, date]

### <area-slug-2> — <Area name>
[...same structure...]

## Discoveries

### New area discoveries (resident sentiment)
For each: area name, borough, source threads (URLs), what residents say,
rationale, suggested initial grade prior, confidence (high/medium/low
based on source breadth).

### Operator flexibility insights (for operators we already track)
For each: operator + project, what the resident said (quote or summary),
source URL, implication for qualification realism. These feed directly
into agent 09's consensus pool.

### Renter-led patterns
For each: pattern name, example areas or buildings, source URLs, why
it matters for Caner's decision specifically.

## Cross-cutting findings
[Patterns across the grass-roots sources: which operators have consistent
reputation across buildings, which areas recur in "where should I live"
threads, which grad-visa routes appear repeatedly as success stories.
These feed into agents 09 and 10's consensus pools.]

## Open questions
[Patterns where the evidence is thin, operators where sentiment is
contradictory, areas where grass-roots signal conflicts with operator claims.]
```

---

## What NOT to do

- **Do NOT skip the research section** in favour of only doing discoveries. The new consensus model requires both — your grass-roots angle on existing candidates is valuable even when you haven't found anything new.
- **Do NOT trust single-thread anecdotes as authoritative.** Look for repeated patterns across multiple sources, and flag confidence honestly.
- **Do NOT propose areas based purely on negative sentiment** ("everyone hates X" is not a discovery).
- **Do NOT scrape personally identifying information** from any source.
- **Do NOT confuse "popular among UK natives" with "popular among grad-visa international renters"** — Caner's specific situation matters and that's the lens this agent runs.

---

## Special instruction

The single most valuable thing this agent can find is a verified case of a grad-visa renter actually passing referencing at a specific operator with documented terms (e.g. "I'm on a grad visa, I paid 3 months upfront at Quintain Living and they accepted me"). These first-hand stories are more reliable than operator marketing copy because they are ground truth. Include the full URL and context so the synthesis step can cite the source directly in agent 09's qualification realism consensus.

If you find conflicting sentiment about an area or operator (some residents love it, some hate it), surface both rather than picking a side. The synthesis step's consensus voting model explicitly preserves dissent — your job is to surface honest disagreement, not to resolve it.
