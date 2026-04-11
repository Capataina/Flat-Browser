# Agent 09 — Rental Qualification Realism (THE MOST IMPORTANT AGENT)

**Focus**: `Project.rental.qualification` block — graduate-visa friendliness, upfront flexibility, credit check strictness, income multiples. **This is the single most consequential agent for Caner's actual decision.**

**Primary scope**: This agent does not "own" any new areas as primary — instead, it runs as a SECONDARY pass on every project in every area in the candidate list. The job is to fill in `qualification` for every single project across the dataset.

The agent is also primary for the existing 14 migrated areas, where the qualification block is currently `unknown` for almost every project.

**Bias toward**: Producing concrete, source-cited qualification realism per project, with the `grad_visa_realism` derived field as the headline output.

**Sources to consult primarily**:
- Operator websites (read the lettings policy pages, not the marketing pages)
- Rightmove / Zoopla live listings — what does the agent require?
- Direct operator referencing pages (Vertus, Quintain Living, Get Living, Greystar, EcoWorld Ballymore, BPS Lettings, Way of Life, Essential Living, Be Living)
- HomeViews and Reddit threads where international renters discuss the actual referencing experience
- Operator blog posts explicitly addressing international tenants

**For every project, fill in**:

```ts
qualification: {
  income_multiple: number,                  // typically 30
  typical_income_floor: number,             // GBP/year — derived from price × 30
  upfront_max_months: number,               // 3 / 6 / 12 — what they actually accept
  upfront_negotiable: boolean,
  guarantor_acceptable: boolean,
  international_friendly: "yes" | "case-by-case" | "no" | "unknown",
  visa_friendly: "yes" | "case-by-case" | "no" | "unknown",
  visa_expiry_handling: "ignored" | "tenancy-shortened" | "rejected" | "unknown",
  credit_check: "strict" | "standard" | "lenient" | "skipped-with-upfront",
  grad_visa_realism: "achievable" | "achievable-with-upfront" | "unlikely" | "blocked",
  notes: "..."  // 2-3 sentences explaining the realism call with specific evidence
}
```

**The grad_visa_realism decision matrix**:

| Operator behaviour | Result |
|---|---|
| Standard 30× income, no visa friction documented, upfront accepted | `achievable` |
| Standard requirements but 3-month upfront known to clear referencing | `achievable-with-upfront` |
| 30× income strictly enforced, no documented upfront flexibility | `unlikely` |
| Explicit international tenant exclusions, or only accepts UK guarantor + UK credit | `blocked` |
| Cannot find authoritative information either way | `unknown` |

**Special instruction**: This is the single field that no other property tool produces. Errors here are catastrophic for Caner's decision. **Use `unknown` liberally rather than guessing.** If you cannot verify a project's policies through the operator website, Rightmove listings, or first-hand resident accounts, mark it `unknown` and add to `research.open_questions`. A field marked `unknown` honestly is more useful than a field guessed wrong.

**Special instruction 2**: Quintain Living (Wembley Park) and Get Living (East Village Stratford) are widely thought to be the most grad-visa-friendly major operators in London. Verify this through specific evidence rather than assumption. If verified, mark every project under those operators as `achievable-with-upfront` minimum.

**Special instruction 3**: All ownership-only projects (`tenure: ["buy"]`) get `grad_visa_realism: "blocked"` automatically — Caner cannot purchase. The realism field is interpreted as "is there a meaningful rental route into this project for a grad-visa renter".
