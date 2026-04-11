# Agent 07 — Multi-cluster Connectivity & Transport Redundancy

**Focus**: T1.3 (strong connectivity to central), T5.1 (multi-cluster commute coverage), T5.2 (transport redundancy / line independence). Comprehensive line and station mapping per area.

**Primary scope**: Acton, Ealing Broadway, Earl's Court, West Hampstead, Vauxhall (separate from Nine Elms), Plaistow / West Ham, Shadwell (overlap with agent 1), Hayes (West London), Bow Common / Limehouse, Clapham Junction, North Acton

**Secondary scope**: Fill `area.connectivity` (lines, primary_stations, times_to_anchors, multi_cluster_score, redundancy_score) for every area in the candidate list.

**Bias toward**:
- T1.3 Strong connectivity to central London — at least 2 distinct lines OR Elizabeth Line/Jubilee multi-hub coverage
- T5.1 Multi-cluster commute coverage — ≤25 min average to each of City / Canary Wharf / Soho / KX
- T5.2 Transport redundancy — no single-line dependency that strands the area

**Sources to consult primarily**:
- TfL fare zone maps (https://tfl.gov.uk/maps/track/tube)
- TfL journey planner for current travel times to anchor stations
- Citymapper for cross-check
- TfL line status / reliability data for redundancy scoring

**Output focus**:
- Complete `area.connectivity` for every primary area with all lines, stations, and accurate times
- `multi_cluster_score` derived from how many of the four anchors are reachable in ≤25 min (count: 0–4 → score 0–5, with 5 reserved for areas where all four are ≤20 min)
- `redundancy_score` derived from line count: 1 line = 1, 2 = 2, 3 = 3, 4 = 4, 5+ = 5
- Identify single-line dependencies (e.g. Nine Elms / BPS on Northern Line) as red flags in `connectivity.notes`

**Special instruction**: Travel times must be measured to the four anchor *stations*, not to the broader districts. Use:
- City of London → Bank station
- Canary Wharf → Canary Wharf station (Elizabeth/Jubilee)
- Soho/Fitzrovia → Tottenham Court Road station
- King's Cross/Shoreditch → Old Street station
