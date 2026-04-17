# Data-upkeep research vs apply separation

Resolved 2026-04-17 during the V2/V4 research wave.

---

## The decision

The `/data-upkeep --full` skill run naturally splits into two phases that should **not** be forced into a single session:

1. **Research phase (Phase 1-3)** — expensive, parallelisable, produces structured proposals on disk. Benefits from aggressive sub-agent dispatch and comparables injection.
2. **Apply phase (Phase 4-6)** — mechanical, sequential, edits TypeScript source files. Benefits from focused single-threaded orchestrator review.

Running both phases in one session forces trade-offs:
- Either aggressive research wave → shallow apply (~5% of proposals land)
- Or narrow research scope → full apply at smaller coverage

**Why:** applying ~5,700 field-level proposals across 55+ TypeScript files requires thousands of mechanical edits. Even with perfect proposals on disk, writing those edits is the expensive half measured in wall-clock time, not agent time.

**How to apply:** treat each research wave's proposals as durable input for an apply-only follow-up session:
- Run 1: `/data-upkeep --full` with research dispatch, produces proposals.
- Run 2: apply-only session consumes proposals, produces source edits.
- Run 3 (optional): `/data-upkeep --recalibrate` against now-populated source.

This pattern is what the 2026-04-17 V2/V4 research wave established. Proposals live at `context/data-upkeep/proposals/` and are mechanically consumable by a follow-up orchestrator-only pass.

## What makes proposals durable

Agent proposals are written in a strict structured format:
- H2 per entity (project or area)
- H3 per block (building_quality, amenities, connectivity, demographics, etc.)
- Each field on its own line: `**field_name**: value  [source: URL]`
- Long-form prose in standalone blocks under `**full**:` etc.
- Relative-field values cite named comparables inline

This structure makes the application mechanical: a future orchestrator reads the proposal, maps each `**field**: value` line to the corresponding TypeScript property, and writes the edit. No re-interpretation of prose, no judgement calls on what the agent meant.

## What this means for future sessions

When invoking `/data-upkeep --full`:
- **Expect two sessions**, not one.
- The research wave completes in Phase 1-3; treat the pause before Phase 4 as the natural session boundary.
- The apply session can be `/data-upkeep --apply-from-proposals` (future flag) or a manual orchestrator walk-through of each proposal file.
- Do NOT dispatch both research and apply agents in the same run — the context budget and coordination overhead grow too fast.

## Why not a single mega-agent

An alternative considered: one big agent that researches AND writes source edits for its scope. Rejected because:
1. Source edits concentrate risk (every agent writing to TypeScript is a concurrent-write coordination problem).
2. Human review of structured proposals is vastly cheaper than reviewing 55 agent-authored TypeScript diffs.
3. The research/apply split lets the user intervene between phases (e.g. reject a reattribution proposal before it lands in source).
4. Agents are better at research than at emitting compiling TypeScript at scale.

Keep the split. Accept the two-session cadence.
