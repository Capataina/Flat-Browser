# Agent 03 — Younger Demographic Skew

**Focus**: T2.7 — Census 2021 ground-truthing of age cohort distribution. Caner is 24, lives alone, and wants areas where most people on the street are in their 20s and early 30s rather than settled mid-career adults.

**Primary scope**: Hackney Central, Old Street / Hoxton, Shepherd's Bush, New Cross, Mile End (note overlap with agent 2), Bethnal Green

**Secondary scope**: Fill `area.demographics` (primary_age_cohort, age_breakdown, ethnic_composition, household_mix, student_pct, professional_renter_pct) for every area in the candidate list.

**Bias toward**:
- T2.7 Younger demographic skew — Census 2021 ward data, age cohort percentages, visible street demographic
- Honest assessment of which areas read young vs mature

**Sources to consult primarily**:
- citypopulation.de (most accessible Census 2021 ward-level browser)
- ONS Census 2021 direct (https://www.ons.gov.uk/census)
- Map Census wards to area boundaries — wards do not perfectly match areas, document the mapping in notes

**Output focus**:
- Complete `area.demographics` for every primary area with full Census-grounded numbers
- Cite the specific ward used for each area (some areas span multiple wards — average them or pick the most representative)
- T2.7 criterion evaluation with explicit "X% in 18-29 cohort" reasoning

**Special instruction**: Some areas grew dramatically between 2011 and 2021 (Wembley Park grew 7x, Nine Elms grew 14x). Note this in `demographics.notes` because the 2021 Census already underrepresents the current state. Areas that have continued to densify since 2021 may skew even younger now.
