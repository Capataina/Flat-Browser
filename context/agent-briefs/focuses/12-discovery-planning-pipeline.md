# Agent 12 — Discovery: Planning & Regeneration Pipeline Sweep

**Type**: Discovery agent. Returns *proposals*, not finished Area entries.

**Focus**: Find areas with active or recently approved planning consents for major residential masterplans (≥500 homes) that are **NOT in `context/references/candidate-areas.md`**. This agent looks at the official planning data sources to surface areas that operators may not have marketed yet but where significant development is in motion.

**Primary scope**: NO assigned areas. Open-ended planning data sweep.

**Bias toward**: Future trajectory. The question is: "Where in London is significant residential development being planned or built right now that we haven't yet noticed?"

---

## Sources to consult systematically

| Source | What it tells you |
|---|---|
| **GLA London Development Database (LDD)** | All major residential planning approvals across London |
| **GLA Planning London Datahub** | Live applications and recent decisions |
| **New London Architecture (NLA)** project tracker | High-profile developments by area |
| **Estates Gazette / Property Week** | Major scheme announcements |
| **Borough planning portals** (one per borough — start with the 8 boroughs that ranked highest in our existing candidates: Camden, Southwark, Tower Hamlets, Wandsworth, Newham, Hackney, Lambeth, Greenwich) | Live applications |
| **HCA / Homes England** | Funded large developments |
| **Major developer pipeline pages** (Berkeley, Lendlease, Argent, Quintain, Knight Dragon, British Land, Related Argent, Ballymore) | Forward pipelines beyond their currently-marketed buildings |

---

## What counts as a discovery

A **NEW area discovery** = a London area with ≥500 homes in an approved or under-construction masterplan that doesn't appear in `context/references/candidate-areas.md`.

A **NEW pipeline phase** within an existing area = a new phase or project within an existing candidate area that we haven't catalogued (e.g. a Phase 5 of Greenwich Peninsula that isn't in our project list).

For each discovery, the proposal must include:
- Area name (or new project name)
- Borough
- Approximate scale (homes count, hectares if known)
- Planning status (approved / consented / under construction / outline)
- Lead developer if known
- Expected delivery window (year — matters for the 2027 trajectory question)
- 1-paragraph rationale
- Source URL (planning portal page is best)
- Suggested primary focus from agents 1-10

---

## What NOT to do

- Do NOT research any discovered area in depth. Your job is to surface, not evaluate.
- Do NOT propose anything that's only in early consultation or strategic planning — focus on consented/approved schemes.
- Do NOT propose pure office-led or pure retail-led schemes — Flatbrowser is residential.
- Do NOT propose anything outside the M25.
- Do NOT duplicate what's already in `candidate-areas.md`. Cross-reference carefully.

---

## Output format

Write to `docs/research/sweep-discovery-planning-pipeline/proposals.md`:

```markdown
# Discovery Sweep — Planning & Regeneration Pipeline
Date: <YYYY-MM-DD>
Sources reviewed: <count>
Proposals: <count>

## New area discoveries (planning pipeline)

### <Area name>
- Borough: <name>
- Scale: <X homes, Y hectares>
- Planning status: <approved / consented / under construction>
- Lead developer: <name>
- Delivery window: <year range>
- Rationale: <1-2 sentences why this should be in the candidate list>
- Source: <URL>
- Suggested primary focus: <agent>
- Initial grade prior: <SS / S / A / B / C / unknown>

### <next area...>

## New pipeline phases (within existing candidate areas)

### <Phase or project name> in <existing area>
- Scale: <X homes>
- Status: <...>
- Source: <URL>

## Areas reviewed but rejected (and why)

- <area>: <reason — e.g. "office-led, residential too small">
- <area>: <reason>

## Open questions

- <anything>
```

---

## Special instruction

The 2027 trajectory question is unusually important: Caner's visa transition lands in August 2027. An area with a 2026/2027 completion is meaningfully more useful than an area with a 2030+ completion. Note delivery windows specifically and flag fast-completing schemes as higher-priority discoveries.
