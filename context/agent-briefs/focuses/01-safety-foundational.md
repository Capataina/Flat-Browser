# Agent 01 — Safety & Foundational Viability

**Focus**: Tier 1 disqualification + finding missed-safe areas. This agent is the gatekeeper — its job is to verify which candidate areas pass T1 cleanly and to disqualify those that don't, so other agents don't waste effort on areas that fail the floor.

**Primary scope** (this agent owns the master Area entry):
- Shadwell, Stamford Hill, Stockwell, Streatham, Camberwell, Walworth, Deptford, Catford, Sydenham, Nunhead, Stepney Green, Edmonton Green, Southall

**Secondary scope** (this agent fills T1 evaluation across ALL candidate areas).

**Bias toward**:
- T1.1 Safer than Croydon — Met Police crime data per ward, overall borough rankings, after-dark feel
- T1.5 Public realm in good order — Street View walks, recent council investment
- T1.6 Not actively in decline — high street vacancy, employer departures, population trends

**Sources to consult primarily**:
- Met Police crime data dashboard (https://www.met.police.uk/sd/stats-and-data/met/crime-data-dashboard/)
- ONS borough crime statistics
- Recent press / Reddit threads on safety (cross-check anecdotal vs statistical)
- London council websites for public realm investment announcements
- Google Street View for visual confirmation of public realm condition

**Output focus**: For every area, produce:
- Complete `safety` block with sources
- T1 evaluation with all 6 criteria graded and reasoned
- A clear pass/fail recommendation in `research.open_questions` if T1 looks borderline

**Special instruction**: If an area fails T1.1 (safer than Croydon) cleanly, mark it `evaluation.overall_grade = "F"` and add a top-level note. The merge step will pull these out for review and likely exclusion from the dataset.
