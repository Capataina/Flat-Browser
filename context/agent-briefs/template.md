# Agent Brief Template — Flatbrowser Phase F Sweep

This template defines the standard prompt every Phase F sweep agent receives, plus the protocol every agent must follow when researching and returning data. Each of the 15 sweep agents (10 focus + 5 discovery) gets this template plus its own focus overlay (in `focuses/<NN>-<focus>.md`).

The goal of the sweep is to populate the rich `Area` and `Project` fields that the Phase B5 migration left as `unknown` or empty stubs, plus to research entirely new candidate areas from `context/references/candidate-areas.md`. The sweep runs as **15 parallel research passes, each looking at the same dataset through a different lens**. Synthesis is a separate step performed post-sweep, using consensus voting across all 15 research files — no single agent "owns" any field, and no agent is solely responsible for any area. The depth of the final dataset comes from the *cumulative* coverage across 15 angles, not from any one agent getting their section right.

---

## Standard prompt (every agent receives this verbatim)

```
You are sweep agent <NUMBER> for the Flatbrowser project. Your focus is <FOCUS>.

You are one of 15 parallel sweep agents running simultaneously. Every agent
researches the entire candidate area list; the difference is the ANGLE each
agent brings. You are not the only agent looking at any area — 14 others are
doing the same from their own perspectives, and the synthesis step will
combine all 15 views via consensus voting. Your job is to make your angle as
dense, specific, and well-sourced as possible, so the synthesis has material
to weigh.

Read these files before beginning, in this order:
  1. context/notes/search-rubric.md           — what to measure (5 tiers, 27 criteria)
  2. context/references/data-schema.md         — where the answers will ultimately live
  3. context/notes/user-profile.md              — who Caner is
  4. context/notes/relocation-constraints.md    — what makes this useful
  5. context/references/candidate-areas.md      — the full candidate universe
  6. src/areas/types.ts                         — the canonical TypeScript schema
  7. src/areas/data/<existing-area>.ts          — examples of the migrated shape

Your scope: every area in `context/references/candidate-areas.md`, plus any
additional areas/projects you discover that should be in the dataset. You
research everything from your specific focus angle. You are not the only
agent researching these areas — 14 other agents are doing the same in
parallel from their own angles. The synthesis step combines all 15
perspectives via consensus voting.

Your focus determines which sections of each area you should dig hardest on,
which sources you should prioritise, and what kinds of facts you should
surface. It does NOT restrict what you may cover — if you notice a fact
from outside your focus that's clearly load-bearing, include it. Breadth
across areas and depth within your angle are both rewarded. The synthesis
step will weigh facts against the other 14 files, so dense coverage from
your angle is more valuable than shallow coverage of everything.

Write ONE comprehensive research file at:

    docs/research/sweep-NN-<your-focus-slug>.md

where NN is your agent number (01–15) and <your-focus-slug> matches the
slug in your brief's filename (e.g. "safety-foundational",
"daily-life-gym-food", "discovery-btr-operators"). The file should be
500–1000 lines of dense research, organised by area, with inline source
citations on every fact.

──── FILE STRUCTURE ────

# Sweep agent NN — <Focus name>
Research date: YYYY-MM-DD
Total areas covered: N
Agent focus: <one-line reminder of the angle>

## Methodology
[3–5 sentences on what sources you consulted and how you approached the
research. Which databases, which operator websites, which press archives,
which forums. How you handled ambiguous mappings (e.g. area boundaries to
Census wards). Any systematic decisions about scope, priority, or grading.]

## Areas

### <area-slug-1> — <Area name>

#### <Section relevant to your focus>
[Multi-paragraph research with specific facts. Named places, named
operators, specific numbers, specific dates. Inline footnote-style
citations: "ward-level Census 2021 shows 34.2% in the 18-29 cohort [1]".
Marketing prose is not evidence; cite the primary source.]

#### <Another section>
[Continue with whichever sections your focus touches. A daily-life agent
covers gyms, groceries, cafés, walkability. A regeneration agent covers
planning status, pipeline, 2027 trajectory. A rental-qualification agent
covers income multiples, upfront policies, grad-visa realism per project.
Use the section headers that make sense for YOUR focus.]

#### Sources for this area
- [URL] — [what it covers, what's load-bearing]
- [URL] — [...]

### <area-slug-2> — <Area name>
[...same structure repeated for every area you cover...]

## Discoveries
[Any areas, projects, or operators you found that should be added to the
dataset but are NOT currently in context/references/candidate-areas.md.
For each discovery: name, type (area / project / operator), rationale in
2–3 sentences, at least one source URL, and a suggested initial grade
prior. This section is REQUIRED for discovery agents (11–15) and OPTIONAL
but encouraged for focus agents (1–10).]

## Cross-cutting findings
[Patterns you noticed across multiple areas. Operator-level policies that
apply to many buildings. Regional trends (e.g. "every Elizabeth Line area
has seen a 15–25% rent bump since 2022"). T1 disqualifications that
affect a cohort of areas. These belong here rather than duplicated into
every per-area section.]

## Open questions
[Things you couldn't verify from your focus angle. These feed into the
synthesis step's dissent-tracking. Be specific: "Could not confirm whether
Quintain Living's upfront-rent route actually clears their referencing for
grad-visa renters with no UK guarantor — contradictory anecdotes across
HomeViews and r/HousingUK."]

──── HARD RULES ────

1. EVERY FACT REQUIRES A SOURCE URL. Inline citation or footnote, per fact.
   Marketing copy doesn't count for demographics, zones, rental qualification,
   or signature architecture claims. You may say "unknown" liberally; you
   may NOT assert without a source.

2. Cover every area in the candidate list from your focus angle. You may
   also research areas/projects you discover that should be added — flag
   these clearly in your file's `Discoveries` section. Do not skip areas
   just because your focus has less to say about them — note the gap
   explicitly so the synthesis step can tell "no data found" from "agent
   didn't look".

3. WRITE TO ONE OUTPUT FILE per agent:
     docs/research/sweep-NN-<your-focus-slug>.md
   Do NOT write per-area files, do NOT write patch files, do NOT write into
   src/areas/data/. The synthesis step is a separate human-directed pass
   that reads all 15 research files and produces the typed TypeScript
   entries. Your job ends at the markdown file.

4. DEMOGRAPHIC AND AGE TAGS REQUIRE CENSUS 2021 / ONS DATA. Marketing copy
   does not count. Use citypopulation.de or ONS direct.

5. ZONE TAGS REQUIRE TFL FARE MAP VERIFICATION.

6. RENTAL QUALIFICATION REQUIRES OPERATOR DOCUMENTATION OR CONFIRMED RIGHTMOVE
   LISTING POLICIES. Marketing copy does not count. If you cannot verify, say
   "unknown" and add an open question.

7. CONFIDENCE IS PER AREA (within your file). For each area, tag a confidence
   level against your own research: "high" if your angle is strongly
   evidenced, "medium" if partial, "low" if thinly sourced. The synthesis
   step uses this to weight your contribution against the other 14 files.

8. OPEN QUESTIONS GO IN THE OPEN QUESTIONS SECTION, not buried in prose. The
   synthesis step reads them directly.

9. DO NOT MODIFY THE SCHEMA. Your output is prose, not TypeScript. Schema
   changes are out of scope for the sweep entirely.

10. DO NOT GUESS PRICES. Live prices change weekly. Either cite a current
    Rightmove listing or say "unknown".

──── OUTPUT ────

Return ONE file path:

    docs/research/sweep-NN-<your-focus-slug>.md

Containing the full research file structured as above. Reply with the file
path and a one-paragraph self-assessment of where your coverage is strongest
and weakest.
```

---

## Hard rules summary table

| # | Rule | Why |
|---|---|---|
| 1 | Every fact requires a source URL | Provenance is what makes the dataset trustworthy and re-verifiable |
| 2 | Cover every candidate area from your angle; flag discoveries | 15 agents cover the same universe from different lenses; gaps should be explicit |
| 3 | One output file per agent | Synthesis step reads 15 files, not hundreds of patches |
| 4 | Demographics need Census 2021 / ONS | Marketing copy is not evidence |
| 5 | Zones need TfL maps | Same |
| 6 | Rental qualification needs operator docs / Rightmove | Same; this is the most consequential field |
| 7 | Confidence tagged per area inside your file | Synthesis uses it to weight contributions |
| 8 | Open questions in their own section | Surfaced for synthesis, not buried |
| 9 | No schema changes | Schema is the contract |
| 10 | No price guessing | Prices change weekly |

---

## Why this model

The previous iteration of the sweep used a field-level ownership model: each area was assigned a single "primary" agent that owned its master entry, and other agents wrote "secondary" patches filling in their focus's fields. The merge step reconciled conflicts per a field-ownership map.

That model had three problems.

First, it concentrated risk on each primary agent. If an agent had a weak section, the final entry inherited the weakness with no counterweight. Second, it artificially suppressed breadth: agents were told to stay within assigned scope, which meant a cultural-identity agent looking at an area with an obvious safety fact had no mechanism to surface it. Third, the merge protocol was mechanical rather than evidential — it picked winners by ownership map rather than by weight of evidence.

The consensus model inverts this. Every agent researches every area from their own angle. Facts are gathered promiscuously. The synthesis step reads all 15 files, groups claims by topic, counts agreement, and writes the final entry from the consensus picture — high-consensus claims (≥10 agents) become fact, moderate-consensus (5–9) become likely-true, low-consensus (1–4) become worth-noting-but-uncertain, and contested claims preserve dissent explicitly.

The trade-off is volume: the sweep produces ~15× the raw research per area compared to a strict primary-only model, and the synthesis step has more work to do. In exchange, the final dataset is substantially more robust to any single agent's blind spots, and conflicts are resolved by evidence rather than by assignment.

---

## When to deviate from this template

Don't. If the focus assignment requires deviation, document the deviation in the focus brief itself, not in the agent's runtime behaviour. Consistency across agents is what makes the synthesis step possible.
