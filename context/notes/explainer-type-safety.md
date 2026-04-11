# Explainer Type Safety — the rawValue erasure trap

## The pattern

`ExplainedValue.tsx` is one component that serves all 28 explainers in `src/explainers/`. To make that work without 28 typed component variants, the props are erased:

```ts
type ExplainedValueProps = {
  // ...
  explainerId?: ExplainerId;
  rawValue?: unknown;          // ← erased to `unknown`
  // ...
};
```

Inside the component, the explainer is looked up and called via a double cast:

```ts
const explainer = explainerId ? getExplainer(explainerId) : null;
const relevanceFn = explainer?.relevance as
  | ((p: typeof caner, v: unknown) => ReturnType<NonNullable<typeof explainer>["relevance"]>)
  | undefined;
const computed = relevanceFn ? relevanceFn(caner, rawValue) : null;
```

This is deliberate — it lets one component serve every explainer — but the cost is that the `(explainerId, rawValue)` pair is **not type-checked** at the call site. Each call site can silently pass the wrong value type and TypeScript will not flag it.

## The bug it produced (2026-04-11)

`AreaModal.tsx` had this:

```tsx
<ExplainedValue
  label="Multi-cluster commute"
  value={`${area.connectivity.multi_cluster_score}/5`}
  explainerId="multi-cluster-commute"
  rawValue={area.connectivity.multi_cluster_score}   // ← passes a number
/>
```

But `multiClusterCommute` is declared as `Explainer<AnchorTimes>` and its `relevance(profile, value)` does `value.city_of_london`, `value.canary_wharf`, etc. With a `number` as the value, every field access returned `undefined`. The result was a personal-relevance message reading:

> 0/4 anchors under 25 minutes (City undefinedm · Canary Wharf undefinedm · Soho undefinedm · KX undefinedm)

The display headline said `5/5` (correct precomputed score) and the explainer body said `0/4 ... undefinedm` (wrong because it was reading fields off a number). The user spotted it. The fix was a one-line change to pass `area.connectivity.times_to_anchors` (the underlying `AnchorTimes` object) as `rawValue`.

## How to avoid recurrence

When wiring up an `ExplainedValue` with an `explainerId`, **read the explainer's `Explainer<T>` signature first** and pass a value of type `T` as `rawValue`. Greppable check before adding new call sites:

```bash
grep "Explainer<" src/explainers/*.ts
```

The current call sites are clean (audited 2026-04-11 across all `<ExplainedValue explainerId=…>` usages in `AreaModal.tsx` and `ProjectModal.tsx`). The `multi-cluster-commute` mismatch was the only one and is now fixed.

## Defensive coding inside explainers

Even with disciplined call sites, the type-erasure means an explainer must not crash on bad input. The pattern is:

```ts
relevance: (_profile, value) => {
  if (typeof value !== "string" || value.trim().length === 0) {
    return {
      severity: "info",
      message: `EPC rating not provided for this building.`,
    };
  }
  // ... rest of logic
}
```

`epc-rating.ts` was hardened with this guard during polish pass 2 after the audit identified `value.trim().charAt(0)` as a latent NPE if `value` ever arrived undefined or non-string. Apply the same pattern in any explainer whose `relevance` function reaches into the value (`.field`, `.method()`, indexed access) — guard at the top, return a safe `info` severity, and continue.

## The unresolved larger refactor

A proper fix would type the `(explainerId, rawValue)` pair as a discriminated union:

```ts
type ExplainerArgs =
  | { explainerId: "multi-cluster-commute"; rawValue: AnchorTimes }
  | { explainerId: "redundancy-score"; rawValue: ConnectivityScore }
  | { explainerId: "zone"; rawValue: TfLZone }
  // ... 25 more
```

Then `ExplainedValueProps` becomes `BaseProps & (ExplainerArgs | { explainerId?: never; rawValue?: never })` and TypeScript would catch the mismatch at compile time. ~30 lines of plumbing to add, mechanical to maintain, and would close the type-erasure trap entirely.

This refactor is **not** done as of 2026-04-11 — it was flagged as a follow-up during polish pass 2 and deferred. The argument for doing it: it permanently closes a class of bug. The argument against doing it now: there are only 28 explainers, the audit confirmed the current call sites are clean, and the discipline of `grep "Explainer<"` before adding a new call site is cheap and reliable. The discriminated-union refactor is a future-proofing investment, not an active bug fix.

If a second mismatch ever surfaces, the case for the refactor strengthens significantly and it should be done.
