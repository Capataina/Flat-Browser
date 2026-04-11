# System: explainers

## Scope / Purpose

The personal-relevance layer of Flatbrowser. Lives under `src/explainers/` and `src/profile/`. Knows nothing about React, the DOM, or Next.js — every file in this folder is plain TypeScript that takes a typed user profile and a value, and returns a personalised severity-graded message.

This system is the centrepiece of the Phase 1 polish pass that landed on 2026-04-12. It is what turns Flatbrowser from "a structured property browser" into "Caner's personal relocation assistant" — every value box in the UI consults the explainer system to tell Caner whether the value works for him, is borderline, or is a blocker, based on his actual situation rather than generic advice.

## Boundaries / Ownership

This system is responsible for:
- defining a typed `UserProfile` model that captures Caner's specific situation (visa, payslips, credit history, current rent, max upfront, age, lifestyle),
- defining the `Explainer<TValue>` interface that every domain-concept file conforms to,
- providing a registry that lets the UI look up an explainer by id,
- exporting one explainer file per domain term (28 currently registered) that each define:
  - a plain-English description of what the term means,
  - a `relevance(profile, value)` function that computes severity + a personalised message.

It is **not** responsible for rendering anything (`src/components/browser/ExplainedValue.tsx` does that), holding interactive state, or talking to the network.

---

## Current Implemented Reality

### Folder layout

```
src/profile/
└── caner.ts                  Typed UserProfile constant — Caner's specific facts

src/explainers/
├── types.ts                  Explainer<TValue> interface, Severity, PersonalRelevance
├── index.ts                  Registry of all 28 explainers + getExplainer(id)
│
├── income-multiple.ts        UK 30× income rule, calculates income floor for Caner's rent
├── credit-check.ts           Strict / standard / lenient / skipped-with-upfront
├── upfront-acceptance.ts     Pay-rent-upfront route, in months, against Caner's 3-month max
├── guarantor.ts              UK guarantor concept, blocked for Caner (no UK guarantor)
├── visa-friendly.ts          Operator visa-tenant policy
├── international-friendly.ts Overseas reference acceptance
├── visa-expiry-handling.ts   How operators handle visa-expiring-mid-tenancy
├── grad-visa-realism.ts      The four-state derived signal (achievable → blocked)
├── tenure.ts                 Rent vs buy — Caner can't buy, so "buy" alone is a blocker
├── building-type.ts          BTR / PRS / Owner-Lease / Build-to-Sell / Mixed
├── build-phase.ts            complete / in_delivery / future / phased
├── epc-rating.ts             A–F energy rating
├── sound-insulation.ts       Quality enum — matters for Caner's low noise tolerance
├── thermal-performance.ts    Quality enum — affects bills
├── kitchen-quality.ts        Quality enum — Caner cooks regularly
├── heating-type.ts           gas / electric / communal / heat-pump / mixed
├── concierge.ts              24h / daytime / none
├── safety-overall.ts         very-safe / safe / moderate / concerning
├── crime-vs-croydon.ts       much-safer / safer / similar / worse — defeats the move if "similar"
├── age-cohort.ts             18-29 / 30-39 / 40-49 / 50+
├── zone.ts                   TfL fare zones 1–9
├── connectivity-score.ts     Multi-cluster commute score 0–5
├── redundancy-score.ts       Line independence 0–5 — single-line dependency = warning
├── multi-cluster-commute.ts  Explains the 4 anchor hubs + 25-min threshold
├── regeneration-status.ts    complete / active / phased / early — references Caner's 2027 visa
├── grade.ts                  SS / S / A / B / C / F overall
├── tier.ts                   T1–T5 informational, what each tier measures
└── criterion-status.ts       pass / partial / fail / unknown
```

---

## Key Interfaces / Data Flow

### The Explainer interface

Every explainer file conforms to this contract (defined in `src/explainers/types.ts`):

```ts
export type Severity = "good" | "neutral" | "info" | "warning" | "blocker";

export interface PersonalRelevance {
  severity: Severity;
  message: string;   // 2–4 sentences with personal relevance
}

export interface Explainer<TValue = unknown> {
  id: string;
  term: string;       // Human-readable term name
  category: "rental" | "building" | "area" | "rubric" | "demographic" | "connectivity";
  description: string;   // 2–4 sentence plain-English definition
  relevance: (profile: UserProfile, value: TValue) => PersonalRelevance | null;
  related?: string[];    // Related explainer ids
}
```

`Severity` drives both the visual treatment and the severity icon:

| Severity  | Visual treatment                                  | Icon | Meaning |
|-----------|---------------------------------------------------|------|---------|
| `good`    | Green border, green message background            | ✓    | This works in Caner's favour. |
| `neutral` | Grey border                                       | ·    | Informational, no positive or negative implication. |
| `info`    | Blue border                                       | ⓘ    | Contextual fact worth knowing. |
| `warning` | Amber border, amber message background            | ⚠    | Borderline or partially blocked for Caner. |
| `blocker` | Red border, red message background                | ✗    | This route is closed for Caner. |

---

### The user profile

`src/profile/caner.ts` exports a typed `UserProfile` constant. The structured facts are extracted from the markdown notes in `context/notes/user-profile.md` and `context/notes/relocation-constraints.md`:

```ts
export const caner: UserProfile = {
  id: "caner",
  preferred_name: "Caner",
  age: 24,
  nationality: "Turkish",
  visa_type: "uk-graduate",
  visa_expires: "2027-08-01",
  has_uk_credit_history: false,
  has_uk_payslips: false,
  has_uk_guarantor: false,
  current_rent_monthly: 2500,
  current_bills_monthly: 500,
  current_total_monthly: 3000,
  current_area: "Ten Degrees, Croydon",
  max_upfront_months: 3,
  preferred_bedroom_count: 1,
  cooks_regularly: true,
  trains_seriously: true,
  reads_heavily: true,
  noise_tolerance: "low",
  preferred_age_cohort: "18-29",
};
```

The profile is the **only** module the explainers consult to compute relevance. There's no global state, no React context, no DI container — just a typed constant imported wherever it's needed.

The profile lives in `src/profile/` rather than `src/explainers/` because it's logically a separate concern: profile is "who the user is", explainers are "how to interpret values for the user". The two compose in `ExplainedValue.tsx`.

---

### Worked example: the income-multiple explainer

```ts
// src/explainers/income-multiple.ts
import type { Explainer } from "./types";

export const incomeMultiple: Explainer<number> = {
  id: "income-multiple",
  term: "Income multiple",
  category: "rental",
  description:
    "UK letting agents typically require you to earn at least 30 times the monthly rent in proven annual income before you'll pass referencing. This is the standard income test that almost every managed BTR operator runs. The check is via payslips, employment contracts, and tax records — agents won't accept verbal income claims or overseas earnings without significant additional verification.",
  relevance: (profile, multiple) => {
    if (!profile.has_uk_payslips) {
      return {
        severity: "blocker",
        message: `${multiple}× monthly means you'd need to demonstrate £${(2500 * multiple).toLocaleString()}/year in UK payslips for a £2,500/month flat. You don't currently have UK payslips, so this route is closed via the standard income check. Look at "max upfront accepted" instead — that's the workaround that exists for renters in your position.`,
      };
    }
    return {
      severity: "info",
      message: `${multiple}× monthly is the standard UK income multiple. For a £2,500/month flat that's £${(2500 * multiple).toLocaleString()}/year in proven annual income.`,
    };
  },
};
```

When the UI renders the value `30` for income multiple, the `ExplainedValue` component calls `incomeMultiple.relevance(caner, 30)`. Caner has `has_uk_payslips: false`, so the function returns the `blocker` severity with a personalised message that:

1. **Names the actual concept** ("30× monthly means...")
2. **Calculates the personal floor** based on Caner's current rent (£2,500 → £75,000/year)
3. **Tells him whether it works** ("you don't currently have UK payslips")
4. **Points to the workaround** ("look at max upfront accepted instead")

The same generic `30` value would render differently for a user with payslips — the explainer is data, the personalisation is computed on the fly.

---

### How the UI consumes explainers

`ExplainedValue.tsx` is the only place that reads explainers. The component takes:

```tsx
<ExplainedValue
  label="Income multiple required"
  value={`${q.income_multiple}× monthly rent`}
  explainerId="income-multiple"
  rawValue={q.income_multiple}
/>
```

It looks up the explainer by id, calls `relevance(caner, rawValue)`, and renders:
- the label and value prominently,
- a small `?` button that toggles an inline expansion,
- the explainer's description in the expansion,
- a severity-coloured personal-relevance block with the icon, label, and message,
- a left-border accent in the severity colour even when the expansion is collapsed.

A `Tooltip` is also wrapped around the `?` button so hovering it gives the same content without needing to click.

---

## Implemented Outputs / Artifacts

### Registry pattern

`src/explainers/index.ts` uses a `satisfies` constraint to keep the registry typed without losing literal-id types:

```ts
export const explainers = {
  "income-multiple": incomeMultiple,
  "credit-check": creditCheck,
  // ... 26 more
} satisfies Record<string, Explainer<never>>;

export type ExplainerId = keyof typeof explainers;

export function getExplainer(id: ExplainerId): Explainer<never> {
  return explainers[id];
}
```

The contravariant parameter type (`Explainer<never>`) lets the registry hold heterogeneous explainers without `any`. Call sites pass `unknown` rawValues; each explainer is responsible for guarding against bad input.

Adding a new explainer is a three-step process:

1. Create `src/explainers/<concept>.ts` exporting an `Explainer` constant.
2. Import and register it in `src/explainers/index.ts`.
3. Use it in the UI via `<ExplainedValue explainerId="<concept>" rawValue={...} />`.

No other file changes. The registry's literal-string `ExplainerId` type means TypeScript catches typos at compile time.

---

### Severity guidelines (for new explainer authors)

When writing a new explainer's `relevance` function, follow these guidelines:

- **`good`** — this works in Caner's favour without caveats. Use sparingly. Examples: building type BTR with central referencing; age cohort 18-29; achievable grad-visa realism.
- **`neutral`** — informational, no positive or negative implication for Caner specifically. Examples: zone (informational), tier (just explains what each tier measures).
- **`info`** — contextual fact worth knowing but not a verdict. Examples: criterion status when the criterion is informational rather than personal.
- **`warning`** — borderline, partially blocked, or worth caution. Examples: standard credit check (Caner has thin UK credit), kitchen poor quality (Caner cooks), 5-month upfront (Caner can stretch to 3).
- **`blocker`** — this route is closed for Caner. Examples: no payslips + standard income check, guarantor required + Caner has none, "Buy only" tenure + Caner can't buy, crime worse than Croydon.

The severity is what drives the visual coloring. An honest distribution across severities is more useful than flattering everything as "good" or warning-coding everything defensively.

---

## Known Issues / Active Risks

The system is small (~30 files of pure functions) and has no known correctness issues. The two things to watch:

- **The 28 explainers are hand-curated** — every value field that should have personal relevance needs an explainer entry. If a new schema field is added without a corresponding explainer, it will render as a plain value with no severity treatment. This is caught by code review, not by the type system.
- **Severity calibration drift.** Across 28 explainers, "is this a `warning` or a `blocker`?" is a judgment call. Honest distribution matters more than consistency for its own sake — if every explainer drifts toward `info`/`neutral` to be safe, the visual treatment becomes meaningless.

## Partial / In Progress

Nothing in this system is partial. All 28 explainers are implemented, the registry is complete, and the integration with `ExplainedValue.tsx` is wired throughout the area and project modals.

## Planned / Missing / Likely Changes

- **More explainers** as new schema fields land. Each new domain term added to `data-schema.md` should get a matching explainer file.
- **A glossary panel** in the UI that groups all explainers by `category` (`rental` / `building` / `area` / `rubric` / `demographic` / `connectivity`) and lets the user browse them as a reference. The data shape already supports this; only the UI is missing.
- **Multi-user support** is theoretically a one-line lift (`ExplainedValue.tsx` reads `caner` as a static import; making it a context value would let any `UserProfile` flow through). No current use case.

### What this system deliberately does not have

- No React or DOM dependencies — pure TypeScript
- No global state or context — the user profile is a typed constant
- No async operations — `relevance` is synchronous
- No persistence — explainers don't store anything
- No extension points beyond adding new files — the registry is intentionally simple

These constraints make the system trivially testable in isolation if tests are ever added.

---

### Likely places for change

- **Add a new domain concept**: create a new explainer file, register it in `index.ts`, use it via `<ExplainedValue>` in the relevant modal.
- **Refine an existing explainer's relevance logic**: edit the relevant file. Each explainer is a single-concept module so changes don't cascade.
- **Add a new field to the user profile**: edit `src/profile/caner.ts` (and the `UserProfile` interface in the same file). Consider updating relevant explainers to consult the new field.
- **Add a new severity level**: extend the `Severity` union in `types.ts`, update the `SEVERITY_CLASS` and `SEVERITY_PREFIX` maps in `ExplainedValue.tsx`, add the new color pair in `browser.module.css`. Three-file change.
- **Make the system support multiple users** (v3 idea): the explainers already take the profile as a parameter, so this is essentially "lift the import in `ExplainedValue.tsx` to be context-driven instead of a static import". Trivial mechanical change but no current use case.

---

## Durable Notes / Discarded Approaches

### Lessons

- **The explainer pattern is the difference between a property browser and a personal decision tool.** Without personal relevance, "30× monthly" is meaningless to a UK rental newcomer; with personal relevance computed against the user's specific profile, it becomes "blocker, look at upfront instead". The same value renders meaningfully for the actual reader.
- **Pure functions taking a profile + value** are the right shape. They're trivially testable, they have no side effects, and they cleanly separate "what the term means" (description) from "what it means for the user" (relevance). React context or DI would have made the system harder to reason about with no benefit.
- **The registry-via-`satisfies` pattern** keeps the lookup typed without losing literal-string ids. `satisfies Record<string, Explainer<never>>` is the cleanest way to constrain a heterogeneous-value-type registry in TypeScript.
- **Categories matter for grouping.** The `category` field on each explainer (`rental`, `building`, `area`, `rubric`, `demographic`, `connectivity`) lets future UI features (e.g. a glossary panel) group explainers by topic without renaming files.

### Discarded approaches

- **Tooltips defining each term in isolation.** The first iteration of explaining domain terms was hover-only static tooltips. Rejected because (a) every user got the same explanation regardless of their situation, (b) it didn't tell the user whether the value was good or bad for them, (c) it put the friction on the user. The current pattern computes severity from the user profile per render — same value renders meaningfully for the reader.
- **A single mega-explainer file.** The earliest sketch had all 28 explainers in one file. Split into one-file-per-concept early because (a) it makes diffs trivially scoped, (b) it lets each concept own its types without leaking, (c) it makes adding a new concept a single new file with no risk of merge conflicts.
- **Storing personal relevance in the data layer.** Briefly considered baking a "this is bad for Caner" flag into the typed `Project` constants. Rejected because it would have coupled the dataset to the user — the same data would not work for anyone else. The current pattern keeps the data layer impersonal and computes relevance per render.

## Obsolete / No Longer Relevant

Nothing in this system has been deprecated yet — the explainer system was net-new in the Phase 1 polish pass and the entire surface area is current.
