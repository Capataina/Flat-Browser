# Synthesis Protocol — Phase F Sweep Output Consolidation

The procedure for consolidating 15 parallel sweep research files into the typed `src/areas/data/<slug>.ts` files. Authored 2026-04-11 as task **E4** of `context/plans/website-refactor.md`. Updated 2026-04-12 to reflect the consensus-based model that replaced the earlier field-level ownership approach.

The sweep produces ~95 candidate areas worth of research, each touched by all 15 agents in parallel. Every agent writes a single comprehensive file from its own angle, covering every area in the candidate list plus any discoveries. The synthesis step reads all 15 files, extracts claims, votes on consensus, and produces the typed Area entries.

This document defines how that synthesis works.

---

## Why consensus over ownership

The previous model — used during the first iteration of Phase F design — assigned each area a "primary" agent that owned the master entry, plus secondary agents that contributed patches to their focus's fields. A mechanical merge reconciled the two via a field-level ownership map.

That model had three structural problems:

1. **Concentrated risk.** If a primary agent produced a weak section, the final entry inherited that weakness with no counterweight. A single bad safety call, a single misread census ward, a single operator page that had been updated since the agent visited — any of these silently became fact.
2. **Artificial breadth suppression.** Focus agents were told to stay within their assigned scope, which meant a cultural-identity agent looking at an area with an obvious T1 safety fact had no mechanism to surface it. The ownership map treated the question "whose job is it?" as prior to the question "who has the evidence?".
3. **Mechanical rather than evidential merge.** The merge protocol picked winners by ownership map, not by weight of evidence. When two agents disagreed, the one who "owned" the field won regardless of sourcing depth.

The consensus model inverts this. Every agent researches every area from its own angle. Facts are gathered promiscuously. The synthesis step reads all 15 files, groups claims by topic, counts agreement, and writes the final entry from the consensus picture. High-consensus claims become fact; moderate-consensus claims become likely-true; low-consensus claims become worth-noting-but-uncertain; contested claims preserve dissent explicitly.

The trade-off is volume: the sweep produces roughly 15× the raw research per area compared to a strict primary-only model, and the synthesis step has more work to do. In exchange, the final dataset is substantially more robust to any single agent's blind spots, and conflicts are resolved by evidence rather than by assignment.

---

## Goals

1. **Cumulative depth.** Every field in every area entry draws from multiple agents, not from a single owner. The synthesis combines perspectives and the depth of the final dataset comes from the accumulation of 15 angles.
2. **Consensus voting.** When agents disagree on a fact, the majority wins and the dissent is preserved with attribution. No agent silently loses.
3. **Source attribution.** Every claim traces to which agents contributed it, with counts, so any reader can see how well-supported a fact is.
4. **Honest confidence.** Sections with broad agreement (≥10 agents) are graded high-confidence. Sections with thin coverage (1–3 agents) are graded low. The confidence grade is visible in the provenance block on every section.

---

## Inputs

After the sweep finishes, `docs/research/` contains 15 files:

```
docs/research/
├── sweep-01-safety-foundational.md                  (~700–1000 lines)
├── sweep-02-daily-life-gym-food.md                  (~700–1000 lines)
├── sweep-03-younger-demographic.md                  (~700–1000 lines)
├── sweep-04-cultural-identity-depth.md              (~700–1000 lines)
├── sweep-05-green-and-water.md                      (~700–1000 lines)
├── sweep-06-premium-amenity.md                      (~700–1000 lines)
├── sweep-07-multi-cluster-connectivity.md           (~700–1000 lines)
├── sweep-08-regeneration-2027-trajectory.md         (~700–1000 lines)
├── sweep-09-rental-qualification-realism.md         (~700–1000 lines)
├── sweep-10-resident-voice.md                       (~700–1000 lines)
├── sweep-11-discovery-btr-operators.md              (~700–1000 lines)
├── sweep-12-discovery-planning-pipeline.md          (~700–1000 lines)
├── sweep-13-discovery-press-architecture.md         (~700–1000 lines)
├── sweep-14-discovery-resident-voice.md             (~700–1000 lines)
└── sweep-15-discovery-excluded-reconsider.md        (~700–1000 lines)
```

Plus `_logs/` with per-agent stdout / stderr / prompt / timing. No per-area files and no patch files — the synthesis reads 15 large files, not hundreds of small ones.

Every file has the same structural sections (see `context/agent-briefs/template.md` for the canonical shape):

- Methodology
- Areas — each with the same slug headings, though the sub-section structure varies by focus
- Discoveries (required for agents 11–15, optional but encouraged for 1–10)
- Cross-cutting findings
- Open questions

The fact that every file uses the same area slugs is what makes the synthesis step possible. The synthesis tool jumps to a given slug in all 15 files simultaneously and extracts everything any agent wrote about that area.

---

## Synthesis procedure

The synthesis is performed by Claude (the human's AI collaborator) after the sweep returns. It can be parallelised across 6–8 sub-agents, each given a disjoint slice of the candidate areas. Each sub-agent reads the relevant area slices of all 15 source files, extracts consensus, and writes typed Area entries into `src/areas/data/<slug>.ts`.

The procedure below applies per area.

### Step 1 — Extract claims

Read every section of every research file that mentions this area. Compile a flat list of claims, annotated with which agents asserted each one and what source URLs they cited.

Example for Wembley Park:

```
- "Census 2021 ward-level 18-29 cohort is dominant"
    → agents 3, 4, 7, 14
    → sources: citypopulation.de, ONS Census 2021
- "Stadium event-day noise is a material weekend drawback"
    → agents 1, 2, 5, 10, 14
    → sources: HomeViews reviews, Reddit r/London threads, local press
- "Gym scene dominated by PureGym + Nuffield Health"
    → agents 2, 6, 14
    → sources: operator store locators, HomeViews gym mentions
- "Quintain Living accepts 3-month upfront for grad-visa renters"
    → agents 9, 11, 14
    → sources: operator lettings page, r/HousingUK grad-visa thread,
       HomeViews resident quote
...
```

A claim is atomic — one fact, one source trail. Don't merge "18-29 is dominant and the area skews young" into a single claim; those are two claims that may have different sourcing depth and may attract different dissent.

### Step 2 — Group by topic

Bucket the claims into the schema's section structure (see `src/areas/types.ts` for the canonical schema):

| Bucket | Covers |
|---|---|
| Identity / location | id, name, aliases, borough, postcodes, zones |
| Long-form | full, history, vibe, weekday, weekend, notable, croydon_comparison |
| Connectivity | lines, primary_stations, times_to_anchors, multi_cluster_score, redundancy_score, notes |
| Demographics | age cohorts, student/professional %, trajectory |
| Safety | overall, crime_notes, after_dark, comparison_to_croydon |
| Green and water | parks, water features, walk times, quality notes |
| Amenities | supermarkets, gyms, cafés, pharmacies, GPs, cultural anchors |
| Regeneration | status, pipeline, milestones, trajectory_through_2027 |
| Evaluation per tier | t1.*, t2.*, t3.*, t4.*, t5.* rubric rows |
| Project-level | amenities, architecture, resident_signal, rental.qualification |

Put each claim into the bucket it best fits. A single claim may touch multiple buckets — that's fine, duplicate it across both. The point is to have every section's raw material in one place when you synthesise the prose.

### Step 3 — Resolve consensus

Within each topic, count agreement on each factual claim. The voting thresholds:

| Consensus tier | Agreement | Treatment |
|---|---|---|
| **High** | ≥10 of 15 agents agree | Taken as fact. Stated plainly. No hedge. |
| **Moderate** | 5–9 agents agree | Taken as likely-true. Stated with appropriate voice ("generally", "broadly"). |
| **Low** | 1–4 agents agree | Taken as worth-noting-but-uncertain. Stated with explicit hedge ("one agent noted", "limited sourcing"). Kept in the entry only if the sourcing is strong enough to justify. |
| **Contested** | Split majority | Pick the larger side, preserve dissent in `provenance.dissenting_claims` with attribution. Never silently drop the minority view. |

Some topics naturally have lower ceiling consensus than others. Rental qualification claims often only attract 1–3 agents (because only agents 09, 11, and 14 typically touch them); that's fine, those agents are the authority on that topic and their coverage counts disproportionately within the topic even if the absolute consensus tier is low. The tier grading is a signal, not a veto.

### Step 4 — Synthesise prose

For long-form fields (vibe, weekday, weekend, full, history, notable, croydon_comparison) write a synthesised paragraph that incorporates the consensus picture. Do not copy-paste from any single agent's file — the prose should be yours, drawing on multiple agents' material and reading as coherent narrative rather than a stitched-together quilt.

Cite all contributing agents in the section's `provenance.contributing_agents`. If 4 agents mentioned a fact, all 4 are credited — this is cumulative attribution, not single-source. The provenance block is metadata, not user-facing prose, so it can be exhaustive.

For structured fields (age cohort percentages, journey times, ward names), the prose is usually one sentence stating the fact plainly, followed by the source URL inline. Agents that cite numbers directly should be preferred over agents that summarise second-hand.

### Step 5 — Populate the schema

Write the typed Area entry following the schema in `src/areas/types.ts`. Every section gets a `provenance` block of the form:

```ts
provenance: {
  contributing_agents: ["01", "04", "07", "10", "14"],
  consensus_level: "high",   // "high" ≥10, "medium" 5-9, "low" 1-4
  dissenting_claims: [
    {
      claim: "Wembley Park's demographic feels older due to Quintain's professional-couple targeting",
      agents: ["13", "06"],
      sources: [
        "https://www.ft.com/content/...",
        "https://www.quintainliving.com/press/..."
      ],
    }
  ],
}
```

Every section carries its own provenance — the overall area's provenance is the union of its sections' provenance blocks, computed at render time rather than stored.

### Step 6 — Validate

Run `pnpm exec tsx scripts/validate-areas.ts` after each merged file is written. Any structural errors halt the synthesis for that area until fixed. Common errors:

- Missing required fields (the schema is strict)
- `unknown` in places where the sweep has evidence
- Provenance block referring to an agent ID that doesn't exist (e.g. typo "016" for "01")
- Orphan dissenting claims (claim text without sources)

### Step 7 — Quality bar per area

Before considering an area's synthesis done:

- [ ] Every required field has populated content (no `unknown` unless honestly unknown)
- [ ] Every section has at least 3 contributing agents (high or medium consensus)
- [ ] Dissenting claims are preserved, not silently dropped
- [ ] Source URLs are intact and accessible
- [ ] Long-form prose reads as coherent — not stitched together from copy-paste
- [ ] `research.confidence` is honestly graded
- [ ] `research.open_questions` includes anything flagged in any agent's open-questions section that relates to this area

Areas that fail the quality bar are flagged for human review before being merged into the live dataset.

---

## Discovery handling

The 5 discovery agents (11–15) also cover every existing candidate area from their specific angle, which means their claims are mixed into the consensus voting alongside the 10 focus agents. Their file is read exactly the same way for existing areas.

For genuinely new areas (areas found by a discovery agent that aren't in `context/references/candidate-areas.md`), the synthesis step is different:

1. **Triage by discovery strength.** A new area proposed by one discovery agent with a single source is a weak discovery. A new area proposed by two or more discovery agents with multiple sources is a strong discovery. Only strong discoveries get promoted.
2. **Add strong discoveries to `candidate-areas.md`** with a `[Discovery Wave 2]` tag and the originating agent numbers.
3. **Dispatch a smaller follow-on sweep** targeting only the new candidates, using the same 15-agent consensus model. The second wave feeds back into the same synthesis procedure.
4. **Weak discoveries are archived** into `docs/research/sweep-discovery-archive/<date>/` for future reference but not promoted.

The same applies to operator discoveries — if multiple agents surface a new operator with documented grad-visa friendliness, that operator's buildings get promoted in the next wave. Single-agent operator discoveries are archived.

---

## Quality bar after synthesis

Before considering Phase F complete, every merged area must:

1. Pass the validation script (`scripts/validate-areas.ts`) with 0 errors
2. Have `research.confidence` honestly graded (high / medium / low)
3. Have populated `provenance` on every section
4. Have at least 5 source URLs across the entire entry
5. Have non-empty long-form sub-fields with multi-paragraph content
6. Have populated `rental.qualification` per project (or an honest `unknown` with an open question)
7. Have any dissenting claims preserved with attribution

Areas that fail any of these are flagged for human review before being merged into the live dataset.

---

## Conflict examples under the consensus model

| Field | Claim A | Claim B | Resolution |
|---|---|---|---|
| `safety.overall` | "moderate" (agents 1, 10, 14) | "safe" (agents 4, 6, 13) | Tied 3-3. Pick the harsher call by default for safety (pick A = "moderate"). Preserve dissent. Add `open_question: "Safety calibration contested between agents 1/10/14 and 4/6/13"`. |
| `connectivity.times_to_anchors.canary_wharf` | 28 min (agents 7, 12) | 25 min (agents 2, 11) | Agent 7 cited TfL journey planner directly; others cited second-hand. Pick 28. Add `provenance.dissenting_claims` noting the 25 min claim. |
| `qualification.grad_visa_realism` | "achievable-with-upfront" (agents 9, 11, 14 — first-hand Reddit thread plus operator page) | "unlikely" (agents 1, 10 — soft inference from general reputation) | Pick "achievable-with-upfront". Agent 9 is the authority on qualification; first-hand evidence outweighs soft inference. Preserve dissent. |
| `vibe` paragraph | Agent 4's cultural-identity prose | Agent 10's resident-voice prose | Synthesise a single paragraph drawing on both. Agent 4 provides structure and history; agent 10 provides resident quotes and honesty. Attribute both in provenance. |
| `regeneration.trajectory_through_2027` | "ascending" (agents 8, 12, 13) | "peaking 2025" (agents 4, 6) | Pick "ascending" — agents 8 and 12 have the authoritative planning-data lens. Preserve dissent. |

Where the claim sourcing is roughly equal on both sides and neither side has obvious authority, flag the area for human review rather than guessing.

---

## What "done" looks like for the synthesis step

1. ✅ Every area in the candidate list has a synthesised entry in `src/areas/data/`
2. ✅ Every project has a populated `qualification` block
3. ✅ Validation passes with 0 errors
4. ✅ Every section has populated `provenance` with contributing agents and consensus level
5. ✅ The website renders all areas with consensus indicators surfacing correctly (high / medium / low badges per section where appropriate)
6. ✅ `research.open_questions` is non-empty for areas with conflicts, and the human reviewer has a clear list of next-step questions
7. ✅ Dissenting claims are preserved in provenance, not silently dropped
8. ✅ A `docs/research/sweep-summary.md` exists with one line per area, summarising overall grade and headline consensus finding
9. ✅ Discoveries have been triaged — strong discoveries promoted to Wave 2, weak discoveries archived

When all nine are true, Phase F synthesis is complete and the dataset is ready for human review before promotion to production.
