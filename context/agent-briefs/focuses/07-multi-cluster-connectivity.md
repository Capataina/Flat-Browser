# Agent 07 — Multi-cluster Connectivity & Transport Redundancy

**Focus**: T1.3 (strong connectivity to central), T5.1 (multi-cluster commute coverage), T5.2 (transport redundancy / line independence). Comprehensive line and station mapping per area, with TfL-verified travel times to the four anchor stations. This agent's contribution to the consensus pool is the most numerical — hard TfL data, verified journey times, and clean redundancy scoring across every area.

**Scope**: All areas in `context/references/candidate-areas.md` (~95 candidates). You research every area from your focus angle. The synthesis step combines your perspective with the other 14 agents via consensus voting — you are not the sole source of truth for any area, and no area is "yours" to own. Cover breadth and let the synthesis weigh your findings against the other files.

**Bias toward**:
- T1.3 Strong connectivity to central London — at least 2 distinct lines OR Elizabeth Line / Jubilee multi-hub coverage
- T5.1 Multi-cluster commute coverage — ≤25 min average to each of City / Canary Wharf / Soho / King's Cross
- T5.2 Transport redundancy — no single-line dependency that strands the area if one line fails
- Honest identification of single-line-dependent areas (e.g. Nine Elms / BPS on Northern Line) as a consequential red flag

**Sources to consult primarily**:
- TfL fare zone maps (https://tfl.gov.uk/maps/track/tube)
- TfL journey planner for current travel times to anchor stations
- Citymapper for cross-check
- TfL line status / reliability data for redundancy scoring
- National Rail for London Overground and TfL Rail edge cases

**Output format**: ONE file at `docs/research/sweep/sweep-07-multi-cluster-connectivity.md`, 500–1000 lines, organised by area as per the template. For each area, include at minimum:
- A `Lines and stations` section listing every tube / Elizabeth / Overground / DLR / National Rail station within walking distance, with walk minutes and fare zone
- A `Journey times to anchors` section with verified off-peak times to Bank, Canary Wharf, Tottenham Court Road, and Old Street (see below for the canonical anchor stations)
- A `Redundancy assessment` section explicitly calling out single-line dependencies
- A `T1.3 / T5.1 / T5.2 call` with specific evidence and a confidence tag
- `Sources for this area` list with URLs

Add a `Cross-cutting findings` section noting patterns (e.g. "Elizabeth Line areas consistently clear T5.1 at ≤20 min to all four anchors; Northern Line south-of-river areas consistently fail T5.2 redundancy").

**Special instruction**: Travel times must be measured to the four anchor *stations*, not to the broader districts. Use:
- City of London → Bank station
- Canary Wharf → Canary Wharf station (Elizabeth / Jubilee)
- Soho / Fitzrovia → Tottenham Court Road station
- King's Cross / Shoreditch → Old Street station

Use off-peak times from TfL journey planner and cite the source per fact. The synthesis step weights your journey-time numbers as authoritative against any soft claims from other agents, so precision matters.
