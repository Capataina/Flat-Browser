# Personal Relevance Pattern

## Current Understanding

Flatbrowser uses a pattern called "personal relevance" — every value in the UI is rendered through a layer that knows the user's specific situation and tells them whether the value works for them, is borderline, or is a blocker.

The pattern has three layers:

1. **Typed user profile** (`src/profile/caner.ts`) — a single typed constant capturing Caner's specific facts (visa, payslips, credit history, current rent, max upfront, age, lifestyle preferences).
2. **Explainer modules** (`src/explainers/<concept>.ts`) — one file per domain concept, each exporting an `Explainer` with a `description` (plain English definition) and a `relevance(profile, value)` function that returns a severity-graded personal message.
3. **`ExplainedValue` component** (`src/components/browser/ExplainedValue.tsx`) — wraps any value box, looks up the explainer by id, calls `relevance(caner, rawValue)`, and renders the value + description + personalised relevance line with severity-coloured visual treatment.

The result: instead of showing `"30× monthly"` and assuming the user knows what that means, the UI shows the value PLUS "30× monthly means you'd need £75,000/year in payslips, you don't have UK payslips, this route is closed for you, look at upfront instead". The same generic value renders meaningfully for this specific reader.

## Rationale

The Phase 1 polish pass exposed a problem: the schema was structurally correct but the UI was opaque. Looking at a project modal, the user said: "What even is 30× monthly? What does credit check standard mean? I don't understand anything from this page."

The fix wasn't to add tooltips defining each term in isolation — that would have been Wikipedia for property terms. The fix was to recognise that **the app already knows everything about the user** (visa status, financial constraints, lifestyle preferences are all in `context/notes/user-profile.md` and `relocation-constraints.md`). It just wasn't using that knowledge in the rendering layer.

The personal relevance pattern is the bridge: it pulls structured facts from the user profile, applies them through explainer functions to whatever value is being rendered, and produces context that's specific to *this user's actual situation*.

This is the difference between **a property browser** (renders property facts to anyone who looks) and **a personal decision tool** (renders the same facts as actionable advice for the specific person using it).

## What Was Tried

The earliest version was just a tooltip on every term — hover the column header for "Income multiple" and see a definition pop up. This was rejected as insufficient because:

- It treated definitions as static (every user gets the same explanation)
- It didn't tell the user whether the value was good or bad for them
- It put the friction on the user (they had to hover and read three sentences) instead of doing the interpretation work for them

The second iteration added a personal-relevance line below the value box for a few key fields (rental qualification specifically). This worked well enough that it was generalised into the explainer system across every domain term.

The current pattern (28 explainers covering rental, building, amenity, area, rubric, demographic, and connectivity concepts) is the generalisation.

## Guiding Principles

- **The user profile is data, not config.** It lives in `src/profile/caner.ts` as a typed constant, not in environment variables or settings UI. The whole app is built for one user.
- **Severity is the load-bearing decision.** Every relevance function returns a `Severity` (`good` / `neutral` / `info` / `warning` / `blocker`) that drives the visual treatment. The severity should be honest — flattering everything as "good" or warning-coding defensively both make the system useless.
- **Explainers are pure functions.** No side effects, no async, no DOM, no React. Trivially testable, trivially composable, trivially understandable.
- **Personal relevance is computed per render, not stored.** The data layer doesn't carry "this is bad for Caner" flags — it carries the raw value, and the explainer computes the relevance on the fly. This means the same dataset would work for any user (with their own profile) without any data changes.
- **The explainer description should explain the concept; the relevance message should explain what it means for the user.** Two distinct jobs, two distinct fields. The description is generic; the relevance message references the user by their specific facts.
- **Add an explainer when adding a new value field.** This should be the default workflow. If you find yourself rendering a raw value without an explainer wrapper, you've skipped the layer that gives the value meaning.

## Concrete Examples

### Income multiple (the canonical example)

- **Description**: "UK letting agents typically require you to earn at least 30 times the monthly rent in proven annual income before you'll pass referencing. This is the standard income test that almost every managed BTR operator runs."
- **Severity for Caner**: `blocker` (no UK payslips)
- **Relevance message**: "30× monthly means you'd need to demonstrate £75,000/year in UK payslips for a £2,500/month flat. You don't currently have UK payslips, so this route is closed via the standard income check. Look at 'max upfront accepted' instead."

### Crime vs Croydon

- **Description**: "Comparison of this area's crime profile to East Croydon, where Caner currently lives. The whole point of moving is to escape Croydon's safety profile."
- **Severity for Caner** when value is `much-safer`: `good`
- **Severity for Caner** when value is `similar`: `blocker` (defeats the move)

### Kitchen quality

- **Description**: "How well-equipped and well-laid-out the kitchen is — counter space, appliances, ventilation, storage."
- **Severity for Caner** when value is `poor`: `warning` (Caner cooks regularly)
- **Severity for Caner** when value is `excellent`: `good`

The pattern is the same every time: the explainer has generic knowledge of the term, the relevance function has personal knowledge of the user, and together they produce context that's specifically useful for the reader.

## Where This Lives in Code and Docs

- **Implementation**: `src/profile/caner.ts` + `src/explainers/` + `src/components/browser/ExplainedValue.tsx`
- **System docs**: `context/systems/explainers.md` (full system documentation)
- **Architecture context**: `context/architecture.md` "Dependency direction" section shows how the explainer layer fits between the data layer and the UI layer
- **User profile source of truth**: `context/notes/user-profile.md` and `context/notes/relocation-constraints.md` (the markdown notes that the typed profile is extracted from)

If you're wondering whether a new value should use the personal-relevance pattern: the answer is almost always yes. The exceptions are pure metadata that doesn't need interpretation (e.g. a developer name, a build year). Anything that's a state, a category, a quality, or a quantity should go through `ExplainedValue` with an appropriate explainer.
