# File-owned subagents — the right parallelism shape for dataset apply waves

**Resolved 2026-04-17** in the apply-only session that consumed the V2/V4 research wave proposals. This note captures the architectural lesson so future apply waves don't reinvent it.

## The problem

The data-upkeep skill's research half produces proposals organised along two orthogonal axes:

- **V2 enrichment** — grouped by operator (Quintain, Greystar+Fizzy, Vertus+CWG, Grainger+Moda+ARK+Node, licence-exempt). Each proposal file lists projects across many area files.
- **V4 area research** — grouped by area. Each proposal file covers one area file.

When applying both in one session, the naive instinct is axis-owned parallelism: one subagent per operator batch applying V2, one subagent per area batch applying V4. This fails. Both axes edit the same TypeScript files (`src/areas/data/*.ts`) — V2 touches project-level fields, V4 touches area-level fields, but they share the file. Concurrent agents editing the same file collide at the `Edit` tool level because `Edit` requires unique `old_string` matches against the current file state, which changes every time the other agent writes.

## The shape that worked

**File-owned subagents.** Each agent owns a geographic batch of area files end to end. It reads every proposal (V2 and V4) that touches its files, and applies all edits to its files without any other agent touching them. No collisions possible because each file has exactly one owner.

For the 2026-04-17 apply wave the geographic batches were:

| Batch | Files | Proposal sources consumed |
|---|---|---|
| Central | kings-cross, bermondsey, borough-london-bridge, old-street-hoxton, angel-islington, bethnal-green, west-hampstead, swiss-cottage | 8 V4 + Greystar+Fizzy (pearl-yard, bermondsey-project) + licence-exempt + Grainger |
| West/NW | wembley-park, ealing-broadway, kew-bridge-brentford, white-city, shepherds-bush, hammersmith, north-acton, brent-cross-town | 8 V4 + Quintain + licence-exempt |
| Canary+East Docks | canary-wharf, stratford, royal-wharf, woolwich, greenwich-peninsula, kidbrooke-village, canning-town | 7 V4 + Vertus+CWG + Greystar+Fizzy (stratford-mill, fizzy-canning, fizzy-east-16) + Grainger (argo, fortunes dock) + licence-exempt |
| South Central | battersea-power-station, nine-elms, vauxhall, oval-village, pimlico, elephant-park, canada-water | 7 V4 + Greystar+Fizzy (bloom, mylo) + Grainger (moda) + licence-exempt (dolphin, staybridge) |
| East Inner | aldgate-east, whitechapel, mile-end, wapping, poplar-blackwall, lewisham-gateway | 6 V4 + Greystar+Fizzy (fizzy-stepney, fizzy-poplar, fizzy-lewisham) + licence-exempt (the gate, MHA) + Grainger (node-limehouse) |
| NE/Hackney/North | hackney-wick, hackney-central, dalston, stoke-newington, walthamstow, tottenham-hale, kentish-town, kilburn | 8 V4 + Grainger (windlass) + licence-exempt (locke kingsland, quarters kilburn) |
| South Tail + Baseline | clapham-junction, clapham-common, battersea-park, wandsworth-town, tooting, brixton, peckham, herne-hill, wimbledon, earls-court, croydon | 11 V4 + Greystar+Fizzy (Ten Degrees architecture) + Grainger (node-brixton) + licence-exempt (quarters-croydon, enclave-croydon) |

Seven agents, 55 files, zero collisions.

## What each agent needed to know

1. **Exact file list** — no ambiguity about ownership boundary.
2. **All relevant proposal filenames** — V2 and V4 that touch those files.
3. **Schema pointer** (`src/areas/types.ts` + `src/areas/data/helpers.ts`) — they must not introduce TS errors.
4. **Exemplar file pointer** (`kings-cross.ts`) — so shape mistakes are rare.
5. **Explicit "already modified, do not touch" list** — critical. Tier 1 corrections landed serially by the orchestrator (me) before dispatch; without explicit carve-outs the agents would have re-written the Alameda/Alto/Beton/NE Lands reattributions back to their old values because the V2 proposal still contained the pre-correction text.
6. **Gate requirement** — `tsc --noEmit` clean + `validate-areas` clean at the end of their work. Self-verification is load-bearing because the orchestrator can't read 8 agent's diffs in detail.
7. **Preservation rules** — never change grades (V3 is a separate pass), never invent sources, never rewrite plausibly-authored prose, never re-order `projects[]` arrays.

## What went wrong despite the setup

- **HomeViews scale confusion.** The skill's `enrichment-schema.md` said "out of 10". Multiple agents obeyed the skill reference, producing values like 8.5 and 9.8. The UI renders `{score}/5` so these would have shown "8.5/5" in the modal. Caught at post-gate verification via `grep "homeviews_score:"` and simple `value > 5.0` filter. Six values halved, `types.ts` docstring added, skill reference corrected.
- **Scope over-reach risk.** Agents varied in how aggressively they applied proposals. The South Tail agent was conservative (skipping some Node Brixton / Folk Florence Dock V2 content); the Central agent applied aggressively. Both are defensible — the more conservative agent produced fewer risky edits at the cost of coverage, the more aggressive produced richer data at the cost of potential drift. Future runs should calibrate with a confidence threshold in the agent prompt.

## When this shape applies (and doesn't)

- **Applies**: multi-axis proposal corpora where axes share physical files. Dataset enrichment, documentation regeneration, schema migrations where both a source and a consumer file need coordinated updates.
- **Does not apply**: single-axis tasks (pure V4-only sweeps, pure operator-only enrichment) — axis-owned agents are fine because there's only one axis.
- **Does not apply**: tasks where agents must exchange information mid-run. File-owned agents are deliberately isolated — they cannot see each other's in-flight edits. If agent A's output must inform agent B's input, serialise them instead.

## Post-gate orchestrator responsibilities

After all agents return, the orchestrator must:

1. Run the full gate (`tsc --noEmit`, `validate-areas`, `next build`) — individual agent gates are a safety net but the global gate is the truth.
2. Grep for specific cross-cutting anti-patterns (scale bugs, enum violations, missing fields) — anything the agents might have coordinated wrongly because they couldn't see each other.
3. Fix the root-cause documentation (in this case the skill reference) so the bug doesn't recur.
4. Commit in one logical unit with a comprehensive message covering both the serial Tier 1 work and the parallel V2/V4 work.

The orchestrator's context is the consolidation point — agents produce parallel work, the orchestrator serialises the final truth.
