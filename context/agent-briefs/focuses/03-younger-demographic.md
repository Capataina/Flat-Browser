# Agent 03 — Younger Demographic Skew

**Focus**: T2.7 — Census 2021 ground-truthing of age cohort distribution. Caner is 24, lives alone, and wants areas where most people on the street are in their 20s and early 30s rather than settled mid-career adults. This agent's contribution to the consensus pool is hard ONS-sourced demographic evidence per area.

**Scope**: All areas in `context/references/candidate-areas.md` (~95 candidates). You research every area from your focus angle. The synthesis step combines your perspective with the other 14 agents via consensus voting — you are not the sole source of truth for any area, and no area is "yours" to own. Cover breadth and let the synthesis weigh your findings against the other files.

**Bias toward**:
- T2.7 Younger demographic skew — Census 2021 ward data, age cohort percentages, visible street demographic
- Honest assessment of which areas read young vs mature (not every trendy area actually skews young on the numbers)
- Population change 2011 → 2021 (and qualitative evidence of continued change post-2021) — some areas have densified so fast the 2021 data already understates the current state

**Sources to consult primarily**:
- citypopulation.de (most accessible Census 2021 ward-level browser)
- ONS Census 2021 direct (https://www.ons.gov.uk/census)
- Map Census wards to area boundaries — wards do not perfectly match areas, document the mapping in notes
- ONS population projections and mid-year estimates for post-2021 changes
- Local authority Joint Strategic Needs Assessments where they break down age cohorts

**Output format**: ONE file at `docs/research/sweep-03-younger-demographic.md`, 500–1000 lines, organised by area as per the template. For each area, include at minimum:
- A `Ward mapping` note stating which Census ward(s) you used and how you handled areas that span multiple wards
- A `Census 2021 breakdown` section with specific numbers: 18–29 cohort %, 30–39 cohort %, median age, student %, professional renter % where available
- A `Post-2021 trajectory` note if the area has densified significantly since
- A `T2.7 call` stating whether the area genuinely reads young, with the underlying percentages
- `Sources for this area` list with URLs

Add a `Cross-cutting findings` section noting patterns (e.g. "Zone 2 areas north of the river skew 4–6% younger on 18–29 than their Zone 2 southern counterparts").

**Special instruction**: Wembley Park grew ~7x between 2011 and 2021; Nine Elms grew ~14x. For any area showing that kind of step-change, the 2021 Census already underrepresents the current state — flag this explicitly in your notes so the synthesis step can weight the ONS figure against the qualitative densification signal. Areas that have continued to densify since 2021 may skew even younger now than the numbers suggest.
