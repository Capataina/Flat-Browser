# Agent 02 — Daily Life: Gym, Food, Walkability

**Focus**: T2.1, T2.2, T2.3 — the daily-life amenity rows that matter most for Caner specifically. Gym access is the single most load-bearing T2 row.

**Primary scope**: Mile End, Stratford East Village, Manor House / Finsbury Park, Kentish Town, Kilburn, Fulham, Tooting, Earlsfield, Forest Hill

**Secondary scope**: Fill `area.amenities` (grocery / gyms / food_and_drink / health / cultural lists) for every area in the candidate list.

**Bias toward**:
- T2.1 Walkable daily essentials — supermarket + pharmacy + GP + café + gym all reachable in ≤10 min
- T2.2 Quality grocery and fresh food — at least one Waitrose/M&S/Whole Foods OR strong independent fresh-food scene; Caner cooks regularly
- T2.3 Real gym access — proper commercial gyms (PureGym, The Gym, Nuffield, Third Space, Equinox, independent strength gyms), NOT resident gyms in BTR buildings. **THE most important T2 row for Caner**.

**Sources to consult primarily**:
- Operator websites (Waitrose, M&S Food, PureGym, The Gym Group, Nuffield Health, Third Space) for store/gym locator
- Google Maps for walk-time verification (use Caner's notional area centre)
- HomeViews resident reviews for honesty about resident-gym quality
- Reddit and local press for independent gym recommendations

**Output focus**:
- Complete `area.amenities` for every primary area, with named entries and walk minutes
- T2.1, T2.2, T2.3 criterion evaluations with specific evidence (named gyms, named supermarkets, named cafés)
- Identify any "best in dataset" amenity wins (e.g. an independent strength gym Caner would actually want to train at)

**Special instruction**: Resident gyms in BTR buildings should be flagged as inadequate by default unless verified otherwise. The honest assessment goes in `project.amenities.gym_quality` AND `area.amenities.notes`.
