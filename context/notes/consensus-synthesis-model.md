# Consensus Synthesis Model

## Current Understanding

The Phase F sweep dispatches **15 parallel codex agents** (10 focus + 5 discovery), each writing **one comprehensive 500–1000 line research file** from its own angle. Synthesis is performed post-sweep by Claude (with parallel sub-agents for breadth) using **consensus voting across all 15 files**.

No single agent owns any area. No single agent is the sole source of truth for any field. The dataset's depth comes from the **cumulative coverage across 15 angles** rather than from any one agent getting their assigned section right.

Concretely:

- **High consensus** (≥10 of 15 agents agree): the claim is taken as fact
- **Moderate** (5–9 agents): claim is taken as likely-true
- **Low** (1–4 agents, or specialist topic with thin natural coverage): claim is taken as worth-noting-but-uncertain
- **Contested** (split majority): pick the larger side, preserve dissent in `Provenance.dissenting_claims` with attribution

The schema's optional `Provenance` block on every section records `contributing_agents`, `consensus_level`, and `dissenting_claims`. The UI surfaces these so the user can see at a glance how confident any given fact is.

## Rationale

This model replaced an earlier "field-level ownership" model where each agent owned specific fields (e.g. agent 9 owned `Project.rental.qualification`, agent 7 owned `connectivity.times_to_anchors`, etc.). The ownership model had three structural problems:

1. **Fragility.** If the owning agent failed or hallucinated on a field, that field was wrong with no fallback. Single-source attribution is single-point-of-failure.
2. **Wasted parallelism.** All 15 agents were running in parallel anyway — using them as variations of the same constrained research is the same compute cost as letting them genuinely cover different angles.
3. **Capped depth.** A vibe paragraph synthesised from one agent's prose is shallower than a vibe paragraph synthesised from five agents writing independently from cultural-identity, resident-voice, press, BTR-operator, and grass-roots angles. The consensus model lets the synthesis pull from the best of every contribution.

The consensus model fixes all three:

- robustness via voting,
- cumulative depth via 15 perspectives feeding the same fields,
- honest contradiction handling via `dissenting_claims`.

## What Was Tried

The field-level ownership model was the original Phase E1 design. The agent briefs explicitly listed "primary scope" vs "secondary scope" and the merge protocol used a field-ownership precedence map to resolve conflicts.

The decision to switch came when the user explicitly asked: "what's the point of having 10 agents in parallel if they're all doing variations of the same constrained research?" That reframe led to:

- 15 full-research files from 15 angles
- Consensus voting instead of ownership precedence
- Discovery agents promoted from "proposal-only" to "full research with discovery sections"

The agent briefs in `context/agent-briefs/focuses/` and the merge protocol in `context/references/merge-protocol.md` were both rewritten to reflect this. The candidate-areas.md "primary focus assignment" column was relabelled as "Deepest angle (informational)" with an explicit note that no agent owns any area.

## Guiding Principles

- **Cumulative > single-source.** Always prefer drawing from multiple agent perspectives over picking one and ignoring the others. The synthesis step does the work of weaving them together.
- **Dissent preserved, not silenced.** When 12 agents say one thing and 3 say another, both views are recorded. The minority is in `dissenting_claims` with full attribution. Future re-reads can revisit the call.
- **Confidence is honest.** Sections drawn from broad agreement are tagged "high"; thinly sourced sections are tagged "low". The UI surfaces the confidence so the user can weigh trust appropriately.
- **Discovery is full research, not just a list.** Discovery agents (11–15) write the same 500–1000 line research files as the focus agents, but from a "what's missing / what was excluded / what does the press say" angle. Their proposals for new candidates are surfaced in their `Discoveries` section but the bulk of their file is research on the existing candidate list from their unique angle.
- **Specialist topics get specialist weight.** Some topics (rental qualification, planning pipeline) naturally only attract 3–4 agents. The synthesis weighs those agents' contributions disproportionately within their topic even if absolute consensus tier is "low".

## Where This Lives in Code and Docs

- **Schema**: `src/areas/types.ts` defines `Provenance`, `DissentingClaim`, `ConsensusLevel`. Optional fields on every major section type.
- **Synthesis procedure**: `context/references/merge-protocol.md` documents the 7-step procedure (extract claims → group by topic → resolve consensus → synthesise prose → populate schema → validate → quality bar).
- **Agent briefs**: `context/agent-briefs/template.md` is the standard prompt every agent receives; `focuses/01–15.md` are the per-agent overlays.
- **Candidate list**: `context/references/candidate-areas.md` lists the 95 candidates plus the "deepest angle" hint per area (informational only — no ownership).
- **Dispatcher script**: `scripts/launch_sweep_agents.mjs` dispatches all 15 in parallel, prints the dispatch plan, and gates on a 10-second confirmation before launching.

The consensus model is the design that makes the sweep produce a dataset deeper than any single-agent approach could.
