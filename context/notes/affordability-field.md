# Affordability field — why it's separate from cost_tier

Captured 2026-04-17. Resolved decision from the V4 data-upkeep session.

---

## The rule

`ProjectRental.affordability` and `ProjectRental.cost_tier` are **two different fields answering two different questions**, and both are worth carrying.

| Field | Relative to | Question it answers | Who assigns it |
|---|---|---|---|
| `cost_tier` | **Dataset price distribution** | Where does this project sit in the full set of London options? | V3 recalibration — quantile bands across the 266 projects |
| `affordability` | **User profile's budget envelope** | Can Caner actually afford this? | V2 research agents — cross-dataset calibration + envelope awareness |

Both are legitimate. The same project can be `cost_tier: "affordable"` (below the dataset's 45th percentile) AND `affordability: "over-budget"` (above Caner's £2,250/£2,750 envelope) — or vice versa — because they answer different questions.

---

## Why keep both

The temptation is to collapse them: "just use affordability, cost_tier is redundant". Resisted for three reasons:

1. **Future-proofing against profile change.** The dataset is meant to be impersonal — the same areas and projects would be valid for another user with a different `UserProfile`. Keeping `cost_tier` dataset-relative means it survives a profile change; only `affordability` needs re-derivation. This matches the explainer-layer discipline from `personal-relevance-pattern.md` — impersonal data, personal interpretation at render time.

2. **The two render differently on the UI.** `cost_tier` appears as a muted informational chip in the project modal ("this is a mid-range London rental"); `affordability` renders next to the realism chip on the card ("this works for you" / "over budget for you"). Different UI roles, different colour gradients.

3. **Different update cadence.** `cost_tier` is recomputed by V3 when the dataset pricing shifts materially. `affordability` is recomputed by V2 when a project's specific pricing or Caner's envelope changes. Separating them avoids forcing a full recalibration for a simple envelope tweak.

---

## The envelope (as of 2026-04-17)

From LifeOS `Housing/Requirements.md` (provisional, awaiting father's confirmation):

- **Without bills**: ≤ £2,250/month base rent
- **With bills included (all-in)**: ≤ £2,750/month

Explainer `src/explainers/affordability.ts` and label `src/areas/labels.ts` both cite these numbers. If the envelope moves, both must be updated — no other place bakes in the figures.

---

## The tag scale

```
well-under-budget      — clearly below envelope with headroom (cheapest band)
comfortably-affordable — within envelope, meaningful headroom (default target)
at-budget              — right at the ceiling, no room for volatility
stretch                — above envelope, defensible in specific scenarios
over-budget            — clearly above, not realistic without a different budget
unclear                — pricing too volatile or unverified to place
```

Ten Degrees Croydon (Caner's current) is pre-tagged `"over-budget"` as a calibration anchor — at ~£3,000 effective all-in it's clearly above the envelope. This gives agents a reference point: anything materially cheaper than Ten Degrees with bills-equivalent positioning lands in `comfortably-affordable` or lower.

---

## Why agents must cross-calibrate, not just check the number

A £2,000/mo project isn't automatically a specific tag. The right tag depends on the dataset's surrounding distribution:

- In a dataset dominated by £1,500 projects, £2,000 is `stretch` (upper end of the envelope band)
- In a dataset dominated by £2,500 projects, £2,000 is `comfortably-affordable` (cheap for the cohort)

Same absolute number, different tag. Agents must compare across the batch, not just against the absolute envelope number. The V4 skill enforces this via comparables injection — every agent prompt includes 5-8 named projects already tagged at each tier as anchors, and agent proposals must cite those comparables in their reasoning.

See `relativity-mechanisms.md` for the full cross-calibration mechanism set.

---

## Files touched (so future sessions can trace the full surface)

- `src/areas/types.ts` — `AffordabilityTag` enum + `ProjectRental.affordability` required field
- `src/areas/labels.ts` — `AFFORDABILITY_LABELS` + `AFFORDABILITY_DESCRIPTIONS`
- `src/areas/data/helpers.ts` — `stubRental()` defaults `affordability: "unclear"`
- `src/areas/filtering.ts` — `FilterState.affordability: Set<AffordabilityTag>` + predicate + clone
- `src/explainers/affordability.ts` — severity-graded personal relevance keyed off envelope
- `src/explainers/index.ts` — registered as explainer #33
- `src/components/browser/AffordabilityChip.tsx` — card + modal chip
- `src/components/browser/ProjectCard.tsx` — rendered next to RealismChip
- `src/components/browser/browser.module.css` — `.affordabilityChip` + 6 colour variable pairs
- `.claude/skills/data-upkeep/references/enrichment-schema.md` — field definition for V2 research
- `.claude/skills/data-upkeep/references/operator-research-playbook.md` — cross-calibration instructions for agents
