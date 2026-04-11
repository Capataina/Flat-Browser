# Agent 14 — Discovery: Resident Voice & Grass-roots

**Type**: Discovery agent. Returns *proposals*, not finished Area entries.

**Focus**: Find areas, buildings, or living patterns that real renters — particularly young professionals and international/visa renters — are talking about online but are **NOT in `context/references/candidate-areas.md`**. This is the grass-roots discovery angle: places that residents recommend to each other in forums, that don't show up in operator marketing or planning portals.

**Primary scope**: NO assigned areas. Open-ended forum sweep.

**Bias toward**: Resident sentiment, lived experience, and "where do people like me actually live?" patterns. The question is: "Where are international young professionals on graduate visas actually moving, that no marketing source would tell us about?"

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
| **HomeViews** building reviews (search by area, not building) | Resident sentiment per building |
| **Trustpilot** for major operators | Aggregate operator sentiment |
| **Facebook groups** like "Grad visa renters London" if accessible | First-hand experiences |
| **Twitter/X** for renter-led discussions | Recent and immediate |

---

## What counts as a discovery

A **NEW area discovery** = an area that comes up repeatedly in young-professional / grad-visa / international-renter discussions but isn't in our candidate list.

A **NEW operator-flexibility insight** = a documented case (in a forum thread) of an operator that accepted a grad-visa renter through some mechanism (3-month upfront, overseas guarantor, employer letter, etc.) that we haven't catalogued. Even if the operator IS in our list, the insight is valuable.

A **NEW renter-led pattern** = an observation about where international or grad-visa renters cluster that we haven't captured (e.g. "most of my Spanish friends live in Acton because there's a Spanish community").

For each discovery, the proposal must include:
- Name (area, operator behaviour, or pattern)
- Borough if relevant
- Source thread URL(s) — multiple if possible
- 1-paragraph rationale: what the renters are actually saying
- Suggested primary focus from agents 1-10
- Confidence (high if multiple independent threads agree, low if single anecdote)

---

## What NOT to do

- Do NOT trust single-thread anecdotes as authoritative. Look for repeated patterns across multiple sources.
- Do NOT propose areas based purely on negative sentiment (e.g. "everyone hates X").
- Do NOT scrape personally identifying information.
- Do NOT confuse "popular among UK natives" with "popular among grad-visa international renters" — Caner's specific situation matters.

---

## Output format

Write to `docs/research/sweep-discovery-resident-voice/proposals.md`:

```markdown
# Discovery Sweep — Resident Voice & Grass-roots
Date: <YYYY-MM-DD>
Threads reviewed: <count>
Proposals: <count>

## New area discoveries (resident sentiment)

### <Area name>
- Borough: <name>
- Source threads: <URLs>
- What residents say: <summary, with direct quotes if useful>
- Rationale: <why this should be in the candidate list>
- Suggested primary focus: <agent>
- Initial grade prior: <SS / S / A / B / C / unknown>
- Confidence: <high / medium / low based on source breadth>

## Operator flexibility insights (for projects we already have)

### <Operator + project>
- What the resident said: <quote or summary>
- Source: <URL>
- Implication: <how this changes grad_visa_realism for the project>

## Renter-led patterns

### <Pattern>
- Examples: <list of areas or buildings>
- Sources: <URLs>
- Why it matters: <1-2 sentences>

## Open questions

- <anything>
```

---

## Special instruction

The single most valuable thing you can find is a verified case of a grad-visa renter actually passing referencing at a specific operator with documented terms (e.g. "I'm on a grad visa, I paid 3 months upfront at Quintain Living and they accepted me"). These first-hand stories are more reliable than operator marketing copy because they're ground truth.

If you find conflicting sentiment about an area or operator (some residents love it, some hate it), surface both rather than picking a side. The merge step preserves conflicts.
