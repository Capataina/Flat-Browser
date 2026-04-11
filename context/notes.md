# Notes

This file is the index for project preferences, design rationale, lessons, and constraints that inform how Flatbrowser is built. Per the project's note-capture discipline, entries here are **resolved knowledge** — accepted decisions, stated preferences, articulated trade-offs, and non-obvious lessons. In-flight deliberation does not belong here; it lives in chat or in `context/plans/`.

This context folder was initialised on **2026-04-11** and substantially expanded during the Phase 1 polish pass (2026-04-12) and the pre-sweep cleanup the same week.

---

## Index

### Notes (`context/notes/`)

- [User Profile — Ata Caner Cetinkaya](notes/user-profile.md) — durable snapshot of identity, visa, education, career direction, lifestyle, and engineering preferences extracted from the upstream Cernio profile repo on 2026-04-11
- [Relocation Constraints](notes/relocation-constraints.md) — current rent baseline (~£3k all-in at Ten Degrees, Croydon), the rental-qualification wall (income proof / upfront / credit history / visa expiry blockers), and the questions that must be answered before redesigning the shortlist
- [London Search Rubric](notes/search-rubric.md) — locked 5-tier criteria (T1 viability → T5 personal fit) that drives which areas qualify for Flatbrowser and how each is evaluated; authoritative for the Phase F sweep and the data-model restructure into areas-containing-projects
- [Personal Relevance Pattern](notes/personal-relevance-pattern.md) — the user-profile + explainers + ExplainedValue layer that turns every value box into a personalised severity-graded message; the centrepiece of the Phase 1 polish pass
- [Consensus Synthesis Model](notes/consensus-synthesis-model.md) — why the Phase F sweep replaced field-level ownership with 15-agent consensus voting; how high/medium/low confidence and dissent attribution work

### Active plans (`context/plans/`)

- [Website Refactor](plans/website-refactor.md) — six-phase plan (A foundation → F sweep) for restructuring Flatbrowser into areas-containing-projects with accordion-based deep detail. Phases A–E and the Phase 1 polish addendum are landed; Phase F (sweep dispatch) is gated on user authorisation.

### References (`context/references/`)

- [Data Schema](references/data-schema.md) — locked TypeScript contract for `Area` and `Project`, with the `Provenance` block added for consensus attribution. Source of truth for the post-refactor data model and the agent return spec.
- [Candidate Areas](references/candidate-areas.md) — 95 candidates for the Phase F sweep with priors and "deepest angle" hints (informational, not ownership) per area.
- [Merge Protocol](references/merge-protocol.md) — the 7-step consensus synthesis procedure used to fold 15 agent research files into the typed dataset.

### Systems (`context/systems/`)

- [areas-data](systems/areas-data.md) — the data layer system: schema, label maps, filter pipeline, migration history, provenance support
- [area-browser](systems/area-browser.md) — the UI rendering system: component tree, modal stacking, accordion primitive, keyboard shortcuts, animation system, polish-pass lessons
- [explainers](systems/explainers.md) — the personal-relevance system: typed UserProfile, Explainer interface, severity model, registry pattern, the W4 centrepiece

---

## Inline durable notes

### Project intent and scope

- **This is a personal decision tool, not a product.** Confirmed by the user 2026-04-11 — built to support his real move out of Croydon. Treat scope decisions through that lens — features that would matter for a public product (URL state, persistence, multi-user filters, deep linking, SEO) are not automatically valuable here.
- **The shortlist is hand-curated, not exhaustive.** Adding new entries is a manual editorial decision until the Phase F sweep dispatches; the sweep then expands the dataset via consensus voting against a 95-candidate list.
- **The original shortlist optimised for the wrong objective.** The 19 establishments were "the absolute best projects in London" but most were unreachable for a graduate-visa renter without paid work history. The Phase 1 refactor + polish pass + sweep design fixes this by reframing search around realistic rentability, not aspirational addresses.

### Data discipline

- **Every value in the UI is rendered through the explainer system.** No raw enum strings, no undecorated numbers — `ExplainedValue` is the contract for value boxes. If you find yourself rendering a raw value with no severity, you've skipped the layer that gives it meaning. See `systems/explainers.md`.
- **The data layer is impersonal.** The `Area` / `Project` constants in `src/areas/data/` carry raw facts; personal interpretation is computed at render time by the explainer system reading `caner.ts`. The same dataset would render meaningfully for a different `UserProfile` without any data changes.
- **The research → data fold-in is deliberately manual.** Agents will propose research in `docs/research/sweep-*/`; a human reviews and folds into typed `data/<slug>.ts` files following `references/merge-protocol.md`. Re-running the sweep does not auto-update typed data — that gap preserves the human review step.

### Engineering posture

- **Smooth UX over time-spent optimisation.** Confirmed 2026-04-12 — the Phase 1 polish pass that landed the explainer system, tooltips, animations, and accordion was the right call even though it was a significant detour from the sweep dispatch. The user's framing: "We don't need to optimise for 'time spent' but rather optimise for 'UX'."
- **`useDeferredValue` on filter state, `useMemo` on the sorted+filtered array.** Both are deliberate even though the dataset is small enough not to strictly need them — they keep the input responsive and make the filter pipeline cheap to scale.
- **Three-layer architecture, never the other way round.** Data layer → explainer layer → UI layer. The explainer layer doesn't import React. The data layer doesn't know about the user. This is what makes the system trivially testable and trivially extensible to a different user profile.

### Things deliberately not present

- No backend, no database, no API, no analytics, no telemetry, no error reporting.
- No URL state, no filter persistence, no favourites/shortlist UI, no comparison view (deferred to v2).
- No tests yet — the pure functions in `filtering.ts` and `explainers/*.ts` are testable but no test runner is wired up.
- No image hosting in `public/` — hero images are linked URLs with typography fallback.
- No mobile-bespoke layouts — responsive but not mobile-first.

Each is a defensible omission for a personal tool, not a backlog item by default. Adding any of them should be a confirmed decision, not a drive-by improvement.
