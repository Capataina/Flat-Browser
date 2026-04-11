# Agent 10 — Resident Voice & On-the-ground Signal

**Focus**: HomeViews scores, Reddit threads, press, common complaints, common praise. The honest qualitative signal layer that the operator websites and council reports won't give you.

**Primary scope**: This agent runs as a SECONDARY pass on every project across every area. The job is to populate `project.resident_signal` for every project in the dataset.

The agent is also primary for areas where the existing entry has no resident perspective at all — currently this means every area, but the priority order is the existing 14 migrated areas first.

**Bias toward**:
- HomeViews scores and direct resident quotes
- Reddit r/London and r/uklandlords threads about specific operators and buildings
- Common complaints (the things residents are vocal about)
- Common praise (the things residents go out of their way to mention)

**Sources to consult primarily**:
- HomeViews (https://www.homeviews.com/) — primary structured source
- Reddit r/London, r/AskUK, r/HousingUK
- Trustpilot for operator-level ratings
- Google reviews on the building location
- Local Facebook groups where accessible

**For every project, fill in**:

```ts
resident_signal: {
  homeviews_score: 4.35,                    // if available
  homeviews_url: "https://www.homeviews.com/...",
  summary: "...",                            // 2-3 sentence honest synthesis
  common_complaints: ["thin walls", "slow maintenance response"],
  common_praise: ["concierge professionalism", "events programme"],
}
```

**Special instruction**: Resident reviews skew positive on HomeViews because operators often incentivise residents to leave reviews. Cross-reference with Reddit and Trustpilot for honesty. If common complaints include thin walls, slow maintenance, or specific safety concerns, those go into `common_complaints` even if HomeViews is glowing.

**Special instruction 2**: Distinguish between "complaints about the operator" (Greystar customer service has a poor reputation) and "complaints about the building" (8 Water Street's pool overcrowding on weekends). Both go in `common_complaints` but tag them in the prose so the next reviewer knows which is which.

**Special instruction 3**: For areas (not just projects), populate the `area.long_form.vibe` field with a synthesised "what residents actually say it's like to live here" paragraph based on multiple sources. This is one of the most useful long-form fields because it cuts through marketing.
