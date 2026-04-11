# Agent Brief Template — Flatbrowser Phase F Sweep

This template defines the standard prompt every Phase F sweep agent receives, plus the protocol every agent must follow when researching and returning data. Each of the 10 focus agents gets this template plus its own assignment overlay (in `focuses/<NN>-<focus>.md`).

The goal of the sweep is to populate the rich `Area` and `Project` fields that the Phase B5 migration left as `unknown` or empty stubs, plus to research entirely new candidate areas from `context/references/candidate-areas.md`. Each agent has a focus theme (safety, daily life, demographics, etc.) but reads the full schema and rubric and is expected to fill in **every** required field for its assigned areas — the focus only determines which fields the agent owes the most depth on.

---

## Standard prompt (every agent receives this verbatim)

```
You are sweep agent <NUMBER> for the Flatbrowser project. Your focus is <FOCUS>.

You are not alone — 9 other agents are running in parallel against different
focus assignments. Do not modify or revert any other agent's work. Your
exclusive write ownership is `docs/research/sweep-<FOCUS>/<area-slug>.md` for
each area in your assigned scope, and `src/areas/data/<area-slug>.ts` for any
area where you are the primary agent.

Read these files before beginning, in this order:
  1. context/notes/search-rubric.md           — what to measure (5 tiers, 27 criteria)
  2. context/references/data-schema.md         — where to put the answers
  3. context/notes/user-profile.md              — who Caner is
  4. context/notes/relocation-constraints.md    — what makes this useful
  5. context/references/candidate-areas.md      — your assigned scope
  6. src/areas/types.ts                         — the canonical TypeScript schema
  7. src/areas/data/<existing-area>.ts          — examples of the migrated shape

Your assigned areas (primary):
  <LIST OF AREAS WHERE YOU ARE PRIMARY>

Your assigned areas (secondary — fill in your focus's fields):
  <LIST OF AREAS WHERE YOU FILL ONLY YOUR FOCUS DOMAIN>

For each PRIMARY area, your job is to populate the COMPLETE Area schema:
  - Identity (id, name, aliases, borough, postcodes)
  - Card-face content (headline, preview, hero_image_url)
  - long_form (full / history / vibe / weekday / weekend / notable / croydon_comparison)
  - zones (verify against TfL fare maps)
  - connectivity (lines, primary_stations, anchor times, multi_cluster + redundancy scores)
  - demographics (Census 2021 ONS-grounded; primary_age_cohort, breakdowns, sources)
  - safety (Met Police data, vs Croydon, after-dark assessment)
  - green_and_water (river / canal / dock booleans + parks list)
  - amenities (grocery / gyms / food_and_drink / health / cultural with walk minutes)
  - regeneration (status, pipeline, recent + upcoming milestones, 2027 trajectory)
  - evaluation (T1 / T2 / T3 / T5 with one entry per criterion + overall_grade)
  - projects[] (every flagship managed development in the area)
  - external_links
  - research metadata (your name as primary_agent, today's date, confidence level, open questions)

For each PROJECT inside an area, you populate:
  - Identity, basic facts, build year/units/storeys
  - rental.tenure, rental.prices (typed numeric ranges per bedroom)
  - rental.qualification (THE most important section — see below)
  - building_quality (T2.6)
  - amenities (T4.1 — pool, gym, concierge, sky lounge, etc.)
  - architecture (T4.4 — architects, awards, signature flag)
  - long_form (full, living_experience, notable_features)
  - resident_signal (HomeViews score, common praise, common complaints)
  - evaluation (T2.6 + T4.1 + T4.4 + overall_grade)
  - external_links

The single most important field in the entire schema is
`Project.rental.qualification.grad_visa_realism`. Caner is on a UK Graduate
visa with no formal work history, no UK credit score, and can stretch to
3 months rent upfront at most. Most premium BTR operators will reject him
through standard referencing. The agent #9 (rental qualification) sweep is
the dedicated focus on this dimension, but every primary agent still has to
fill in this field for projects they own. Use one of these values:
  - "achievable"               — passes through standard referencing OR with 3 months upfront
  - "achievable-with-upfront"  — needs 3 months upfront, verified flexibility
  - "unlikely"                 — standard requirements above grad-visa reach
  - "blocked"                  — explicit policies disqualify grad-visa renters
  - "unknown"                  — couldn't verify, do NOT guess

──── HARD RULES ────

1. EVERY FACT REQUIRES A SOURCE URL. Populate the relevant `sources: SourceLink[]`
   array on every section that contains research. No source = the fact does not
   ship. You may use status: "unknown" liberally; you may NOT assert without a
   source.

2. STAY WITHIN YOUR ASSIGNED SCOPE. Do not research areas outside your assignment.
   The candidate list is finite and other agents are covering the rest.

3. WRITE TO PER-AGENT OUTPUT FILES. Each markdown report goes to:
     docs/research/sweep-<your-focus>/<area-slug>.md
   This avoids collisions with other agents writing in parallel. The merge
   protocol in context/references/merge-protocol.md will consolidate the
   outputs after all agents finish.

4. DEMOGRAPHIC AND AGE TAGS REQUIRE CENSUS 2021 / ONS DATA. Marketing copy
   does not count. Use citypopulation.de or ONS direct.

5. ZONE TAGS REQUIRE TFL FARE MAP VERIFICATION.

6. RENTAL QUALIFICATION REQUIRES OPERATOR DOCUMENTATION OR CONFIRMED RIGHTMOVE
   LISTING POLICIES. Marketing copy does not count. If you cannot verify, use
   "unknown" and add an open_question to research.open_questions.

7. CONFIDENCE IS PER AREA. Set research.confidence to "high" only if you have
   strong evidence across most fields, "medium" if some sections are thinly
   sourced, "low" if more than half the fields are unknown.

8. OPEN QUESTIONS GO IN research.open_questions, not into prose. The next
   reviewer needs to find them.

9. DO NOT MODIFY THE SCHEMA. If you find a field that doesn't fit cleanly,
   use the closest match and add a research.open_questions entry explaining
   the issue. Schema changes require human review of context/references/data-schema.md.

10. DO NOT GUESS PRICES. Live prices change weekly. Either find a current
    Rightmove listing or use "unknown" with a note.

──── OUTPUT ────

For each area in your primary scope, return:
  - One markdown report at docs/research/sweep-<focus>/<area-slug>.md
    with: title, source list, per-section narrative, evidence, and the
    populated TypeScript Area constant ready to be folded into
    src/areas/data/<area-slug>.ts.
  - Reply with the file paths of every report you wrote.

For each area in your secondary scope, return:
  - One markdown patch at docs/research/sweep-<focus>/<area-slug>.patch.md
    that documents the values for your focus's fields and any open questions
    discovered during your secondary research.
```

---

## Hard rules summary table

| # | Rule | Why |
|---|---|---|
| 1 | Every fact requires a source URL | Provenance is what makes the dataset trustworthy and re-verifiable |
| 2 | Stay within assigned scope | 10 agents in parallel; collisions waste work |
| 3 | Per-agent output paths | No write collisions during parallel execution |
| 4 | Demographics need Census 2021 / ONS | Marketing copy is not evidence |
| 5 | Zones need TfL maps | Same |
| 6 | Rental qualification needs operator docs / Rightmove | Same; this is the most consequential field |
| 7 | Confidence is per area, honestly graded | Future reviewers need to know which entries to trust |
| 8 | Open questions in `research.open_questions` | Surfaced for review, not buried |
| 9 | No schema changes | Schema is the contract; changes require human review |
| 10 | No price guessing | Prices change weekly |

---

## What "primary" vs "secondary" means

- **Primary**: agent owns the master `Area` entry and is responsible for *every* field. The candidate list assigns each area to exactly one primary agent.
- **Secondary**: every agent passes through every area in its focus domain (e.g. rental-qualification agent #9 fills in `qualification` for every project in every area, regardless of who owns the area). Secondary contributions merge into the master entry per the merge protocol.

The merge step (`context/references/merge-protocol.md` — produced separately) consolidates primary + secondary outputs per area, preserving conflicts for human review rather than silently picking a side.

---

## When to deviate from this template

Don't. If the focus assignment requires deviation, document the deviation in the focus brief itself, not in the agent's runtime behaviour. Consistency across agents is what makes the merge step possible.
