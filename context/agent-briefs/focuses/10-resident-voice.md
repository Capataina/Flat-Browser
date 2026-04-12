# Agent 10 — Resident Voice & On-the-ground Signal

**Focus**: HomeViews scores, Reddit threads, press, common complaints, common praise. The honest qualitative signal layer that operator websites and council reports won't give you. This agent's contribution to the consensus pool is ground-truth resident sentiment — what people who actually live in these buildings say, with attributed quotes wherever possible.

**Scope**: All areas in `context/references/candidate-areas.md` (~95 candidates). You research every area from your focus angle, with particular depth on project-level resident sentiment. The synthesis step combines your perspective with the other 14 agents via consensus voting — you are not the sole source of truth for any area, and no area is "yours" to own. Cover breadth and let the synthesis weigh your findings against the other files.

**Bias toward**:
- HomeViews scores and direct resident quotes
- Reddit r/London, r/HousingUK, r/uklandlords threads about specific operators and buildings
- Common complaints (the things residents are vocal about — thin walls, slow maintenance, concierge attitude)
- Common praise (the things residents go out of their way to mention — events programme, gym quality, neighbour culture)

**Sources to consult primarily**:
- HomeViews (https://www.homeviews.com/) — primary structured source
- Reddit r/London, r/AskUK, r/HousingUK, r/uklandlords
- Trustpilot for operator-level ratings
- Google reviews on the building location
- Local Facebook groups where accessible

**Output format**: ONE file at `docs/research/sweep/sweep-10-resident-voice.md`, 500–1000 lines, organised by area as per the template. For each area, include at minimum:
- An `Area-level sentiment` section summarising what residents say about the area as a whole — honest voice, not marketing
- A `Project-level sentiment` section for each notable project with HomeViews score (where available), a 2–3 sentence summary, common complaints, and common praise
- A `Vibe paragraph` synthesised from resident quotes — "what it actually feels like to live here"
- `Sources for this area` list with URLs, including direct links to HomeViews building pages and Reddit threads

Add a `Cross-cutting findings` section noting operator-level reputation patterns (e.g. "Greystar's customer-service reputation is consistently poor on Trustpilot but its buildings score well on HomeViews — suggests building-level management varies" or "Way of Life consistently scores ≥4.4 across every building; Quintain Living consistently ≥4.2").

**Special instruction**: Resident reviews skew positive on HomeViews because operators often incentivise residents to leave reviews. Cross-reference with Reddit and Trustpilot for honesty. If common complaints include thin walls, slow maintenance, or specific safety concerns, those go into your file even if HomeViews is glowing. The synthesis step weights cross-source consistency heavily — a complaint that appears in both HomeViews and Reddit is high-confidence, a complaint that appears only in a single Reddit thread is low-confidence.

**Special instruction 2**: Distinguish between "complaints about the operator" (Greystar customer service has a poor reputation) and "complaints about the building" (8 Water Street's pool overcrowding on weekends). Both belong in your file, but tag them clearly — the synthesis step routes operator complaints to cross-cutting findings and building complaints to project-level entries.

**Special instruction 3**: The synthesised vibe paragraph is one of the most useful outputs of any agent because it cuts through marketing copy. Write it as a resident would describe the area to a friend — honest weaknesses included. The synthesis step will weight your vibe paragraphs alongside agent 04's cultural-identity prose to produce the final long-form vibe field.
