# Relativity mechanisms — how the data-upkeep skill enforces true relative calibration

Captured 2026-04-17. Resolved methodology from the V4 data-upkeep session.

---

## The core problem

Every relative field in Flatbrowser — grades (SS/S/A/B/C/F), cost tiers (budget→luxury), affordability (well-under→over-budget), quality ratings (excellent→poor), credit-check strictness, flexibility signals — has a meaning that depends on **other entries in the dataset**, not on an absolute standard.

An agent grading a single project in isolation produces systematic bias. The 2026-04 sweep proved this: most areas came back graded A or B because each agent had no calibration anchor and defaulted to "looks fine". The dataset had no F's, barely any C's, and no SS's — exactly the degenerate distribution the relative-grading principle rules out (`context/notes/relative-grading.md`).

The V4 data-upkeep skill bakes five mechanisms into the workflow to force cross-calibration. All five are required — any one alone is gameable.

---

## Mechanism 1 — Comparables injection

Every agent dispatch prompt includes a **comparables block** pulled from the current dataset state. For each relative field, 5-8 named projects at each tier are included as calibration anchors.

Example:

```
Affordability — well-under-budget: Fizzy Lewisham (£1,280-£1,450), Node Brixton (£1,675)
Affordability — comfortably-affordable: Quintain Ferrum (£1,829), Folk Florence Dock (£1,695-£1,800)
Affordability — at-budget: ARK Canary Wharf (£2,150), Gravity Co West Hampstead (£2,200)
Affordability — stretch: Vonder Wembley 2-bed (£2,500-£2,700)
Affordability — over-budget: Locke Aldgate (£4,500+), Citadines Holborn (£6,000+)
```

The agent's proposal must cite these anchors explicitly: *"Affordability: `at-budget` — £2,100-£2,300 sits between ARK Canary Wharf (`at-budget`, £2,150) and Folk Florence Dock (`comfortably-affordable`, £1,695-£1,800)."*

This is the single most powerful mechanism. It transplants the `relative-grading.md` principle directly into agent context.

---

## Mechanism 2 — Shuffled batches on re-runs

Both pre-flight scripts accept `--seed N`:

```bash
pnpm exec tsx .claude/skills/data-upkeep/scripts/enumerate-operators.ts --seed 7
pnpm exec tsx .claude/skills/data-upkeep/scripts/enumerate-areas.ts --seed 7
```

Non-zero seed triggers a deterministic Mulberry32 shuffle of the input list before partitioning into batches. Different seeds produce different batch compositions:

- Seed 0 (default): Quintain + Greystar + Fizzy grouped together (all Homeppl-family, same stack)
- Seed 7: Quintain + Moda + Folk grouped together (different neighbours, forces cross-stack calibration)

Different neighbours → different cross-calibration opportunities. An agent grouping Homeppl operators together rarely sees a `strict` credit check. Shuffling guarantees agents see a mix of strictness tiers each pass.

Re-running with a different seed is the direct implementation of "repeat the research multiple times to check the relative calibration holds". Divergence between seed runs is signal, not noise.

---

## Mechanism 3 — Cross-Batch Review

New orchestrator phase between Research and Apply. See `SKILL.md` Phase 3 and `migration-rules.md` § "Cross-Batch Review".

Steps:
1. **Aggregate proposals** — flat table of proposed values per relative field per entity
2. **Per-agent distribution check** — flag agents whose proposals collapse to one tier (e.g. Agent 7 tagged 12 of 12 projects as `credit_check: "standard"` — calibration failure)
3. **Cross-agent reconciliation** — for entities researched by multiple agents via shuffled re-runs, flag divergence and converge on the more defensible value
4. **Dataset-wide distribution check** — compute the full distribution per field; flag if any enum value has 0 entries or >60% of the dataset
5. **Decision** — pass to Apply, or re-dispatch weak batches with stronger comparables, or escalate to user

The orchestrator can do this efficiently because it holds every proposal in context simultaneously. Individual agents can't — they only see their own batch.

---

## Mechanism 4 — Distribution gates

Hard validation rules at Apply time and after V3 grade recalibration:

- Full grade range must be used — the dataset must have at least one SS and at least one F
- No relative field may collapse to 1-2 values across the dataset
- Affordability must span from `well-under-budget` to `over-budget` somewhere
- Cost-tier quantile distribution must match the expected shape (0-20% / 20-45% / 45-70% / 70-90% / 90-100%)

If gates fail, the skill refuses to apply — escalate to user with the distribution report instead of silently committing degenerate data. Per `migration-rules.md`, this is a hard stop, not a warning.

---

## Mechanism 5 — Explicit comparable citations required

Proposals for relative fields must cite named comparables. A proposal that says "affordability: at-budget" without citing "because matches X, exceeds Y, falls short of Z" is rejected at the Cross-Batch Review gate — the agent re-runs with stronger comparables injection.

This is the enforcement tooth on mechanism 1. Without the rejection, agents could ignore the injected comparables and fall back to absolute-feel-based assignment.

---

## Why all five are needed

Individually each mechanism is gameable:

| Mechanism | Alone is insufficient because |
|---|---|
| Comparables injection | Agent could ignore the comparables and assign by gut feel |
| Shuffled re-runs | Without a review phase, you just get two biased passes instead of one |
| Cross-Batch Review | Without comparables in agents' context, proposals are already biased before review |
| Distribution gates | Gate fires after apply — without the earlier mechanisms, apply phase constantly escalates |
| Comparable citations | Without shuffled re-runs, agents cite the same comparables every pass — locked-in bias |

Together they're load-bearing:

- Comparables inject the principle into agent context
- Shuffled re-runs prevent locked-in neighbour bias
- Cross-Batch Review catches per-agent drift
- Distribution gates catch dataset-wide drift
- Citation requirements enforce the comparables discipline

Skip any one and the mechanism set fails. This is why they all live in the V4 skill rather than being optional.

---

## Cost implications

Comparables injection adds ~2-3k tokens per agent batch — low.
Shuffled re-runs double the cost of a single pass but the second pass catches calibration drift the first pass can't see — worth it on the fields that matter (affordability, grades, cost_tier).
Cross-Batch Review is orchestrator-only — cheap because no external research.
Distribution gates are free — they run against already-loaded proposals.
Citation requirements add prose to proposals but are effectively free on the agent side (agents already reason this way; just making them write it).

Total added cost for a full relativity-enabled run: ~20-30% over a naive research pass. The payoff is a dataset that actually uses the full SS→F grade range and doesn't collapse affordability to "comfortably-affordable" across the board.

---

## Fields this applies to

Current relative fields where all five mechanisms apply:

| Field | Scope | Where |
|---|---|---|
| `grad_visa_realism` | Project | V1 |
| `cost_tier` | Project | V3 recalibration |
| `affordability` | Project | V2 research |
| `credit_check` strictness | Project | V1 |
| `qualification_flexibility_signal` | Project | V1 |
| `building_quality.sound_insulation` / `thermal_performance` / `kitchen_quality` | Project | V2 |
| `amenities.gym_quality` | Project | V2 |
| `amenities.overall_tier` | Project | V2 |
| `architecture.is_signature` | Project | V2 |
| Area-level `safety.overall` | Area | V4 |
| Area-level `demographics.primary_age_cohort` | Area | V4 (weaker case — partly data-driven from ONS) |
| `regeneration.status` | Area | V4 |
| Project `evaluation.overall_grade` + tier evaluations | Project | V3 |
| Area `evaluation.overall_grade` + tier evaluations | Area | V3 |

Non-relative fields (yes/no facts, numeric lookups, structured data) don't need the mechanisms — they're just "what's the answer".

---

## How to apply

- When writing a new agent prompt: include the comparables block as boilerplate
- When running a follow-up pass: use `--seed N` with a new N, not the default
- When reviewing a proposal: reject if it doesn't cite named comparables
- When applying: let the distribution gate fail loudly rather than work around it
- When updating the skill: any new relative field added to the schema must pick up all five mechanisms, not some subset

The mechanisms are the discipline that makes Flatbrowser's relative-grading principle actually hold across a dataset this size. Skipping them silently reverts the dataset to absolute-feel bias.
