# Layout Decisions — polish pass 2 (2026-04-11)

This note captures the layout-related decisions made during the second polish pass on top of the original Phase 1 polish. They are recorded here because they each represent a path that was tried, evaluated against real navigation, and either kept or reverted — the kind of "we already tried that" knowledge that the next session needs to avoid relitigating.

---

## Decision: predictable grid > masonry for `factGrid`

**Decision**: `.factGrid` uses CSS Grid with `align-items: start` and a `repeat(auto-fit, minmax(220px, 1fr))` template. Cells stay in fixed positions; expanding one cell makes its row taller and leaves visible empty space below the small cells in that row. The empty space is acceptable; cells visibly relocating across the grid is not.

**Why**: An earlier iteration replaced the grid with a CSS multi-column masonry layout (`column-width: 240px; column-gap: 14px; break-inside: avoid`) on the theory that Tetris-style packing would eliminate the wasted space when one cell was much taller than its row siblings. Masonry packed beautifully when nothing was expanded, but on every expand/collapse the browser rebalanced the entire column distribution to keep column heights even — which meant cards visibly jumped to new positions whenever the user opened any value box. The user reported this as the layout "changing weirdly" with screenshots showing the four small cells stacking into one column when one cell was expanded. Predictable position beat compact packing in real use, so masonry was reverted on 2026-04-11.

**How to apply**: Do not reach for CSS multi-column masonry for value-box grids in this project. If a future requirement genuinely needs Tetris-style packing without the column-rebalance jitter, the only options are (a) a JavaScript masonry library that uses absolute positioning (Muuri, Masonry.js — overkill for this app), (b) the experimental `grid-template-rows: masonry` property (not yet shipped in Chrome), or (c) restructuring the data so wide and short cells live in separate grid containers. Use plain CSS Grid with `align-items: start` and accept the empty space below short cells as the cost of stable layout.

---

## Decision: ExplainedValue header is the click target, chevron is a passive indicator

**Decision**: The entire `.explainedHeader` is a single full-width `<button>` containing the label and a small `▾` chevron span. Clicking anywhere on the header — label, chevron, or the gap between them — toggles the inline expanded body. The chevron is `aria-hidden`, rotates 180° via CSS when expanded, and lights gold on hover.

**Why**: The original implementation rendered a tiny circular `?` button in the corner of each value box. Clicking it expanded the body and the `?` became `−`. The user reported two problems with this: (a) the corner button was a small click target that felt fiddly, especially next to the question-mark hover indicator, and (b) the corner button used to display a hover tooltip with the same content that the click would reveal — meaning the same description was rendered twice via two different mechanisms. Polish pass 2 collapsed this to a single source of truth: the header is the click target, the body shows the description and personal-relevance message inline, and the chevron is a visual cue only.

**How to apply**: Do not add hover tooltips on `ExplainedValue` cells — they would duplicate the click-expanded body. The chevron is a passive visual cue and should not become an interactive button again. If a value box has no `description` and no personal `relevance` to show, the chevron is hidden via the `hasContent` check in `ExplainedValue.tsx` so non-expandable rows render cleanly without affordance noise.

---

## Decision: CriterionRow is collapsible, status chip stays anchored

**Decision**: Each rubric criterion row (e.g. "1.1 Demonstrably safer than Croydon") is a collapsible. The header (`id + name + status chip + chevron`) is one full-width `<button>` and is always visible; the reasoning paragraph collapses behind a smooth grid-row height animation matching the section accordion's animation curve. Default state is collapsed.

**Why**: The previous design rendered the reasoning paragraph permanently visible below every criterion. With six criteria per tier and four tiers per area, the area modal became a wall of dense reasoning text that obscured the pass/partial/fail signal that the user actually needed to scan. Polish pass 2 surfaced the chip as the primary signal, hides the reasoning behind a click, and lets the user drill in selectively — the same scanning pattern the section accordions use one level up.

**How to apply**: The status chip is wrapped in a `Tooltip` so hovering it explains pass/partial/fail/unknown, and clicks on the chip bubble up to toggle the parent button. Keep this pattern; do not move the tooltip onto the row itself or onto the chevron. The animation primitive (`grid-template-rows: 0fr → 1fr` plus opacity) is duplicated between `Accordion.tsx` and `CriterionRow.tsx` — accept the duplication; abstracting it into a shared "Collapsible" primitive would not pay back the indirection cost for two call sites.

---

## Decision: Section accordion summary buttons are full-width

**Decision**: `.accordionSummary` (the `<button>` rendered as the section header inside `Accordion.tsx`) has explicit `width: 100%; box-sizing: border-box`, plus reset border, background, text-align, and font-family for the button-as-summary pattern. The entire bar — title text, badge, gap, chevron — is a single click target.

**Why**: A `<button>` element is content-sized by default (`display: inline-block`), and setting `display: flex` does not change that. So the original `accordionSummary { display: flex; justify-content: space-between }` produced a button that was only as wide as `[title][chevron]`, with no space-between to space across, and the empty bar to the right of the chevron was inert. The user reported this as having to "click the actual name" to expand sections rather than clicking anywhere on the bar.

**How to apply**: Any `<button>` styled with `display: flex; justify-content: space-between` to look like a row inside a card needs an explicit `width: 100%` or it will silently collapse to content size. This is a CSS-on-buttons gotcha worth remembering.

---

## Decision: Design tokens live on `:root`, not on `.page`

**Decision**: All CSS custom properties (`--bg`, `--gold`, `--text-secondary`, all the per-tier and per-grade colours) are declared inside a `:global(:root)` block in `browser.module.css`. The `.page` class retains only its layout properties (`position`, `min-height`, `overflow-x`, `background`).

**Why**: The portal `Tooltip` component mounts its content into `document.body` via `createPortal`, which puts it outside the `.page` container. Tokens scoped to `.page` were undefined inside the portal, so every `var(--text-secondary)` resolved to the browser default — black text on the dark tooltip background. The user reported "text on tooltips is still black" after the polish-pass-2 portal-tooltip migration. Lifting the tokens to `:root` ensures they cascade everywhere, including portal-rendered children.

**How to apply**: Future portal-rendered content will inherit the tokens automatically. Do not re-scope design tokens to a wrapping class — the portal trap is easy to forget and produces hard-to-debug black text. Layout-only properties (positioning, dimensions) belong on the wrapping class; colour tokens belong on `:root`.
