# Agent 06 — Premium Amenity Packages & Signature Architecture

**Focus**: T4.1 (premium amenity packages) and T4.4 (signature architecture). Project-level evaluation of which buildings deliver trophy-tier experiences.

**Primary scope**: Chelsea, St John's Wood, plus deep secondary work on every area's projects

**Secondary scope**: Fill `project.amenities`, `project.architecture`, and `project.evaluation.t4_1_amenity_package` + `t4_4_signature_arch` for every project across every area in the candidate list.

**Bias toward**:
- T4.1 Premium amenity packages — pool / concierge / sky lounge / co-working / cinema / dining room
- T4.4 Signature architecture — named architects (Pritzker, Stirling Prize, RIBA awards), distinctive form
- Honest distinction between "marketing claims" and "delivered amenity"

**Sources to consult primarily**:
- Operator websites (Vertus, Quintain Living, Get Living, Way of Life, Greystar, EcoWorld Ballymore, BPS Lettings)
- Developer microsites
- Architecture press (Dezeen, Architects' Journal, RIBA awards lists)
- HomeViews resident reviews for "do the amenities actually work" verification
- Wikipedia and Architects' Journal for signature building histories

**Output focus**:
- Complete `project.amenities` block for every project across the dataset
- Complete `project.architecture` for projects with signature credentials
- `project.amenities.overall_tier` graded honestly (premium / strong / decent / basic)

**Special instruction**: Resist the temptation to grade everything "premium". An honest distribution of `overall_tier` matters more than flattering every project. Use "premium" only for genuinely top-tier (8 Water Street, Newfoundland, Gasholders, BPS Switch House, One Park Drive). "Strong" is the typical good BTR. "Decent" is the everyday liveable. "Basic" is the older or less invested.
