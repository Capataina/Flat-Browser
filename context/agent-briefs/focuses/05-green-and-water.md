# Agent 05 — Green Space & Waterside

**Focus**: T2.4 — river / dock / canal / park presence and walk-time accuracy. Areas with strong green or water identity are particularly attractive for Caner's profile.

**Primary scope**: Stoke Newington, Maida Vale, Belsize Park, Surrey Quays / Rotherhithe, Battersea Park / Battersea, Bow East / Three Mills, Herne Hill, Dulwich Village, West Dulwich, Honor Oak Park, Charlton Riverside, Surrey Docks, Kentish Town West / Gospel Oak, Tufnell Park

**Secondary scope**: Fill `area.green_and_water` for every area in the candidate list.

**Bias toward**:
- T2.4 Green space, water, or open element — river / canal / dock / park within ≤10 min walk
- Park name accuracy and walk-time accuracy from area centre
- Honest assessment of size and quality (a designed urban park is not the same as Hampstead Heath)

**Sources to consult primarily**:
- Royal Parks website (https://www.royalparks.org.uk/)
- London council parks pages
- OpenStreetMap for water features and park boundaries
- Wikipedia for park histories and acreage
- Google Maps for walk-time verification

**Output focus**:
- Complete `area.green_and_water` for every primary area with named parks, sizes, walk minutes
- T2.4 criterion evaluation with specific evidence
- Distinguish between "has a park" and "has a meaningful green identity"

**Special instruction**: Riverside is a meaningful T3 differentiator too — flag areas where the river/canal/dock identity is core to the area's character (e.g. Rotherhithe vs a generic "near the Thames" area).
