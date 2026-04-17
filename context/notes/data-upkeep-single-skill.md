# Data-upkeep — one skill, flag-driven scope

Captured 2026-04-17. Resolved architectural decision for the V2/V3/V4 expansion.

---

## The decision

There is exactly **one** `/data-upkeep` skill at `.claude/skills/data-upkeep/`. It covers V1 (qualification), V2 (enrichment), V3 (grade recalibration), and V4 (area-level) scope levels — not four separate skills.

Scope is selected via invocation flags:

| Flag | Scope |
|---|---|
| `--qualification-only` | V1 — qualification + pricing + ghost-project checks |
| `--enrichment-only` | V2 — building quality + amenities + architecture + resident signal + affordability |
| `--area-research` | V4 — area-level fields (long-form, connectivity, demographics, safety, green/water, amenities, regeneration) |
| `--recalibrate` | V3 — orchestrator-only grade + cost_tier recomputation |
| `--full` (default) | Both research tracks in parallel, then recalibration |

Plus targeting flags (`--operators X,Y`, `--areas X,Y`, `--seed N`, `--dry-run`) that compose with any scope flag.

---

## Why one skill, not four

The original plan (see earlier revision of `context/plans/data-upkeep-skill.md`) staged V1/V2/V3/V4 as separate skill versions to ship over time. The revised design collapsed them because:

### 1. The token economics don't justify separation

Caner's observation, which reshaped the design: asking an agent to fill 12 qualification fields costs ~100k tokens; asking the same agent to fill 40 fields costs ~150k. The agent already has the operator page, HomeViews, the architect credits, and the pricing loaded in context to answer the qualification questions — emitting additional field values is near-free.

If V2 had been a separate skill, every V2 run would repeat the same operator-page loads V1 had already done. Collapsing means one pass per operator covers everything the agent learns while on their website.

### 2. V3 legitimately needs V2 data

Grade recalibration (V3) derives project grades from V2-populated fields (`building_quality.*`, `amenities.*`, `architecture.*`, `resident_signal.*`). Running V3 before V2 populates those fields produces grades from `"unknown"` / default values — meaningless.

Keeping V3 in the same skill lets `--full` automatically run the correct phase order: V1+V2+V4 research → V3 recalibration. Splitting them means the user has to remember the sequencing.

### 3. The reference files overlap heavily

- `realism-pathway-derivation.md` is V1-specific
- `qualification-schema.md` is V1-specific
- `enrichment-schema.md` is V2-specific
- `area-research-schema.md` is V4-specific
- `grade-recalibration.md` is V3-specific
- `operator-research-playbook.md` spans V1+V2 (same agent, same trip)
- `ghost-project-detection.md` spans V1+V2+V4 (agents across all tracks surface ghosts)
- `migration-rules.md` spans all of them (apply-vs-flag rules + Cross-Batch Review)

Separating the skills would duplicate the cross-cutting references. Co-locating them keeps the research/migration discipline in one place.

### 4. The relativity mechanisms are cross-version

Comparables injection, shuffled batches, Cross-Batch Review, distribution gates — these apply equally to V1 (credit_check strictness), V2 (affordability, building quality), V3 (grades), and V4 (area safety tier). They're a property of the skill, not a scope-specific concern. One skill → one place to implement them.

---

## Alternatives considered

**Four separate skills (`/data-upkeep-v1`, `/data-upkeep-v2`, …):** rejected per the four reasons above.

**Two skills — "research" and "recalibrate":** rejected because it forces the user to manually sequence runs. `--full` handling the sequencing inside one skill is simpler.

**One skill with `version: 1` that iteratively grows:** rejected semantically. The frontmatter `version` tracks the skill's surface-area capability level, not the internal implementation. V4 frontmatter signals "this skill covers everything up to and including V4 scope".

---

## Invocation equivalence

V1 behaviour is preserved exactly: `/data-upkeep --qualification-only` produces the same research output and dataset writes as the original V1 skill invocation did. Backward compatibility is a hard rule — V1 data files remain forward-compatible with V4 (new fields default to safe pre-research states like `affordability: "unclear"`).

---

## Implementation surface

- `SKILL.md` — v4 frontmatter, 6-phase execution model (Discovery → Research×2 tracks → Cross-Batch Review → Apply → Recalibrate → Gate/Report), flag handling, hard rules
- `references/` — 9 reference files total (5 V1 + 4 new for V2/V3/V4)
- `scripts/enumerate-operators.ts` — V1 script extended with `--seed` shuffle
- `scripts/enumerate-areas.ts` — new V4 pre-flight, parallel structure to enumerate-operators.ts

---

## How to apply

When asked to extend the data-upkeep skill for a new concern:

1. Does the concern fit an existing scope flag? If yes, extend that scope's reference file.
2. If not, add a new scope flag + a new reference file. Don't create a second skill.
3. If the concern cuts across all scopes (new safety rule, new validation gate, new distribution check), update `migration-rules.md`.
4. If the concern is a new relative field, ensure all five relativity mechanisms pick it up (see `relativity-mechanisms.md`).

When someone proposes "let's split data-upkeep into separate skills for maintainability":

- Point them at this note
- The token economics, the V3-needs-V2 dependency, the reference-file overlap, and the cross-version relativity mechanisms are all load-bearing for keeping it collapsed
- Splitting would regress on all four
