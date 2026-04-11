# Agent 09 — Rental Qualification Realism (THE MOST CONSEQUENTIAL AGENT)

**Focus**: Graduate-visa friendliness, upfront flexibility, credit-check strictness, income multiples — the `Project.rental.qualification` block. **This is the single most consequential agent for Caner's actual decision, because no other property tool produces this field.** This agent's contribution to the consensus pool is per-project qualification realism backed by operator documentation, Rightmove listing evidence, and first-hand resident accounts.

**Scope**: All areas in `context/references/candidate-areas.md` (~95 candidates). You research every project in every area from your focus angle — qualification realism is a project-level fact, so the depth of your research is in naming specific operators, specific buildings, and specific referencing experiences. The synthesis step combines your perspective with the other 14 agents via consensus voting — you are not the sole source of truth for any project, but your angle is the one the synthesis step weights most heavily on qualification fields. Cover breadth and let the synthesis weigh your findings against the other files.

**Bias toward**:
- Concrete, source-cited qualification realism per project
- The `grad_visa_realism` call (achievable / achievable-with-upfront / unlikely / blocked / unknown) as the headline output per project
- Operator-level patterns that apply across multiple buildings — these are the most decision-relevant findings

**Sources to consult primarily**:
- Operator lettings policy pages (not the marketing pages)
- Rightmove / Zoopla live listings for the requirements actually advertised
- Direct operator referencing pages (Vertus, Quintain Living, Get Living, Greystar, EcoWorld Ballymore, BPS Lettings, Way of Life, Essential Living, Be Living)
- HomeViews and Reddit threads where international renters discuss the actual referencing experience
- Operator blog posts explicitly addressing international tenants

**Output format**: ONE file at `docs/research/sweep-09-rental-qualification-realism.md`, 500–1000 lines, organised by area as per the template. For each area, include at minimum:
- A `Projects in this area` section listing each project and its operator
- For each project: a `Qualification realism` block covering income multiple, upfront policy, guarantor requirements, international tenant friendliness, visa-expiry handling, credit-check strictness, and the `grad_visa_realism` call with 2–3 sentences of evidence
- A `Sources for this area` list with URLs — at minimum one operator URL and one listing URL per project you call

Add a `Cross-cutting findings` section covering operator-level patterns (e.g. "Quintain Living consistently accepts 3-month upfront for international renters at Wembley Park; Vertus consistently requires a UK guarantor at Canary Wharf"). These operator-level findings are the highest-value output of this agent because they apply across many buildings and shape Caner's decision across many areas simultaneously.

**The grad_visa_realism decision matrix**:

| Operator behaviour | Result |
|---|---|
| Standard 30× income, no visa friction documented, upfront accepted | `achievable` |
| Standard requirements but 3-month upfront known to clear referencing | `achievable-with-upfront` |
| 30× income strictly enforced, no documented upfront flexibility | `unlikely` |
| Explicit international tenant exclusions, or only accepts UK guarantor + UK credit | `blocked` |
| Cannot find authoritative information either way | `unknown` |

**Special instruction**: Errors here are catastrophic for Caner's decision. **Use `unknown` liberally rather than guessing.** If you cannot verify a project's policies through the operator website, Rightmove listings, or first-hand resident accounts, mark it `unknown` and add to `open_questions`. A field marked `unknown` honestly is more useful than a field guessed wrong. The synthesis step will preserve your `unknown` calls rather than filling them in from weaker evidence.

**Special instruction 2**: Quintain Living (Wembley Park) and Get Living (East Village Stratford) are widely thought to be the most grad-visa-friendly major operators in London. Verify this through specific evidence rather than assumption. If verified, your file should say so explicitly with URLs and first-hand quotes — this is the single most load-bearing finding in the entire sweep.

**Special instruction 3**: All ownership-only projects (`tenure: ["buy"]`) get `grad_visa_realism: "blocked"` automatically — Caner cannot purchase. The realism field is interpreted as "is there a meaningful rental route into this project for a grad-visa renter"; for buy-only projects the answer is structurally no.
