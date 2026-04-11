# Agent 12 — Discovery: Planning & Regeneration Pipeline Sweep

**Type**: Discovery + research agent. Returns a comprehensive research file from a "what's in the planning pipeline, and what's missing from the candidate list" angle, contributing to the post-sweep consensus pool alongside the 10 focus agents. Your file must include both a Discoveries section (missing areas / masterplans) and a Research section (existing candidate areas analysed from the planning-pipeline angle).

**Focus**: Planning consents, active masterplans, live construction, and the delivery horizon through 2027 and beyond. This agent's contribution to the consensus pool is the official planning-data lens — every area seen through "what does the planning portal say is happening here in the next 3 years".

**Scope**: All areas in `context/references/candidate-areas.md` (~95 candidates), plus any areas you discover that should be added because they have ≥500 homes in approved or under-construction masterplans. For existing candidates, research the planning status in depth — phase schedules, consents granted, live applications, delivery windows, lead developers. For new discoveries, surface areas in active planning that no operator is yet marketing.

**Bias toward**:
- Future trajectory with specific completion dates
- Masterplan phase schedules — not just "is there a masterplan" but "what phase is live in 2026, what completes in 2027"
- Areas where significant development is in motion but which may not yet have the buzz to appear in press or operator marketing
- The August 2027 horizon specifically — Caner's visa transition window

---

## Sources to consult systematically

| Source | What it tells you |
|---|---|
| **GLA London Development Database (LDD)** | All major residential planning approvals across London |
| **GLA Planning London Datahub** | Live applications and recent decisions |
| **New London Architecture (NLA)** project tracker | High-profile developments by area |
| **Estates Gazette / Property Week** | Major scheme announcements |
| **Borough planning portals** (one per borough — start with the 8 boroughs that ranked highest in existing candidates: Camden, Southwark, Tower Hamlets, Wandsworth, Newham, Hackney, Lambeth, Greenwich) | Live applications |
| **HCA / Homes England** | Funded large developments |
| **Major developer pipeline pages** (Berkeley, Lendlease, Argent, Quintain, Knight Dragon, British Land, Related Argent, Ballymore) | Forward pipelines beyond currently-marketed buildings |

---

**Output format**: ONE file at `docs/research/sweep-12-discovery-planning-pipeline.md`, 500–1000 lines, organised with the structure below. Dual-mode file: research on existing candidates plus discoveries.

```
# Sweep agent 12 — Discovery: Planning & Regeneration Pipeline
Research date: YYYY-MM-DD
Planning sources reviewed: N
Total candidate areas covered: N
Total discoveries: N

## Methodology
[3–5 sentences on which planning portals you walked, how you filtered
for residential schemes ≥500 homes, how you handled phase-level data.]

## Research from my angle — existing candidate areas

### <area-slug-1> — <Area name>

#### Current masterplan status
[Named scheme, lead developer, total homes, phases complete / under
construction / consented. Cite planning reference numbers where available.]

#### Pipeline through 2027
[Which phases are scheduled to complete in 2026, 2027, 2028+. Specific
completion dates where announced. Flag fast-completing phases as
higher-priority context for agent 08's regeneration trajectory call.]

#### Planning risks
[Consultations pending, appeals, S106 disputes, viability reviews — the
things that could slip delivery out of the 2027 window.]

#### Sources for this area
- [URL] — [planning portal reference]

### <area-slug-2> — <Area name>
[...same structure...]

## Discoveries

### New area discoveries (planning pipeline)
For each: area name, borough, scale (homes + hectares if known),
planning status, lead developer, expected delivery window, rationale,
source URL, suggested initial grade prior.

### New pipeline phases (within existing candidate areas)
For each: phase or project name, parent area, scale, status,
expected completion year, source URL.

### Areas reviewed but rejected (and why)
For each: area name, reason (office-led, too small, outside scope, etc.)

## Cross-cutting findings
[Planning patterns across London: which boroughs are consenting fast, which
are slipping, which masterplans are consistently on schedule, which are
consistently delayed. These feed directly into agent 08's consensus pool.]

## Open questions
[Planning applications where the outcome is ambiguous, schemes where the
public data is thin, areas where you couldn't find authoritative status.]
```

---

## What NOT to do

- **Do NOT skip the research section** in favour of only doing discoveries. The new consensus model requires both — your planning-data angle on existing candidates is valuable even when you haven't found anything new.
- **Do NOT propose anything that's only in early consultation or strategic planning.** Focus on consented or approved schemes.
- **Do NOT propose pure office-led or pure retail-led schemes** — Flatbrowser is residential.
- **Do NOT propose anything outside the M25.**
- **Do NOT duplicate what's already in `candidate-areas.md`** as a discovery.

---

## Special instruction

The 2027 trajectory question is unusually important: Caner's visa transition lands in August 2027. An area with a 2026 / 2027 completion is meaningfully more useful than an area with a 2030+ completion. Note delivery windows specifically and flag fast-completing schemes as higher-priority both in the research section (for existing candidates) and in the discoveries section (for new additions). The synthesis step weights your delivery-window data as authoritative against softer claims from other agents on regeneration trajectory.
