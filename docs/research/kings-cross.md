# King's Cross — Fact-Check Report

- Source data file: `src/establishments/data/kings-cross.ts`
- Developer listed in app data: `Argent`
- Current assigned tags: `Zone 1`, `Rent or buy`, `Premium`, `Ready now`, `Waterside`, `Destination`, `European-led`, `30-40`, `Area / masterplan`

## Tag Verification

| Tag | Current Value | Verdict | Source |
|-----|--------------|---------|--------|
| Zone | Zone 1 | **Verified** | King's Cross St Pancras is confirmed TfL Zone 1. Six Underground lines (Circle, Hammersmith & City, Metropolitan, Northern, Piccadilly, Victoria) plus National Rail and Eurostar. | https://tfl.gov.uk/hub/stop/HUBKGX/kings-cross-st-pancras-international ; https://en.wikipedia.org/wiki/King's_Cross_St_Pancras_tube_station |
| Tenure | Rent or buy | **Verified** | Enclave KX is BTR (rental). Gasholders and Capella are for-sale. Both tenure types exist within the masterplan. | https://enclave.com/locations/kings-cross ; https://relatedargent.co.uk/2023/07/18/final-building-on-the-kings-cross-masterplan-approved |
| Price | Premium | **Verified** | Enclave KX: 1-beds from £4,050/month. Gasholders apartments are ultra-premium for-sale. Capella is the final premium for-sale phase. No accessible or mid-range entry points exist within the King's Cross Central masterplan. | https://enclave.com/locations/kings-cross ; https://enclave.com/locations/kings-cross/rental-apartments-in-kings-cross/1-bedroom ; https://www.rightmove.co.uk/properties/166824350 |
| Status | Ready now | **Verified** | The masterplan is effectively complete. Building F1 (the 50th and final building) received planning approval July 2023 and is commercial, not residential. Gasholders, Capella, and Enclave KX are all built and occupied. 42,000 people live, work, and study at King's Cross. No remaining residential land in the masterplan for further supply. | https://relatedargent.co.uk/2023/07/18/final-building-on-the-kings-cross-masterplan-approved |
| Character | Waterside | **Verified** | Regent's Canal runs through the development. Enclave KX sits directly on the canal. Gasholder Park and Granary Square front onto the canal. The waterside character is a defining feature of the public realm. | https://enclave.com/locations/kings-cross |
| Community | Destination | **Verified** | Coal Drops Yard (retail and dining), Central Saint Martins, Google's UK HQ, the British Library, Granary Square. Year-round cultural and commercial programming. The highest footfall of any non-retail destination in N1. | Established in source data |
| Demographic | European-led | **Partially supported — medium confidence** | Census 2021 for St Pancras & Somers Town ward: White 5,251 (42.0%), Asian 3,684 (29.4%), Black 1,935 (15.5%), Mixed 824 (6.6%). White is the plurality but not a majority. The ward includes Somers Town, which has a significant Bangladeshi and social housing community distinct from the King's Cross development. The development-specific resident base — pricing at £4,050+/month — likely skews more strongly European than the ward average. But Census data alone does not cleanly confirm "European-led" for this broader ward. | https://www.citypopulation.de/en/uk/london/wards/camden/E05013669__st_pancras_somers_town/ |
| Age | 30-40 | **Partially supported — medium confidence** | Census 2021 for St Pancras & Somers Town ward: 20-29 is the largest age group at 3,916 (31.3%), driven by student populations (UCL, CSM, etc.). However, the King's Cross development's premium pricing (£4,050+/month rents) would filter residents toward the 30-40 bracket. The ward-level Census data does not directly confirm "30-40" but the pricing logic is sound. | https://www.citypopulation.de/en/uk/london/wards/camden/E05013669__st_pancras_somers_town/ |
| Place Type | Area / masterplan | **Verified** | 67-acre masterplan, 50 buildings, 8 million sq ft of development, 12 hectares of public realm, 1,750 homes. The most complete large-scale masterplan in London. | https://relatedargent.co.uk/2023/07/18/final-building-on-the-kings-cross-masterplan-approved |

## Tags to Add

- **connectivity: Highly Connected** — Estimated average public transport travel times: Soho ~8 min (Piccadilly line to Leicester Square or Victoria line to Oxford Circus), King's Cross ~0 min (on site), Shoreditch ~15 min (Hammersmith & City to Liverpool Street, walk/Overground), Canary Wharf ~18 min (Northern to London Bridge, Jubilee to Canary Wharf). Average ~10 min → Highly Connected. This is the best-connected establishment in the dataset, sitting at London's pre-eminent transport interchange with six Tube lines plus Eurostar.

## Tags to Remove or Correct

- No tags require removal. All current tags are verified or defensibly supported.
- **Demographic: "European-led" can be retained with a caveat** — the ward-level Census data is diluted by Somers Town's distinct demographic profile. The development-specific pricing (£4,050+/month) would naturally filter toward a wealthier, likely more European demographic, but this is inferential rather than Census-proven at development level. Medium confidence.
- **Age: "30-40" can be retained** — same reasoning: ward-level data skews younger due to students, but development pricing filters residents older. Medium confidence.

## Summary

King's Cross is the most straightforward fact-check in this set. Zone 1, rent or buy, premium, ready now, waterside, destination, and area/masterplan are all cleanly verified by authoritative sources. The masterplan is effectively complete with no remaining residential land. The demographic and age tags require inferential reasoning (development pricing vs ward-level Census) but are defensible. Connectivity is Highly Connected at ~10 minutes average — the best in the dataset — thanks to the unparalleled transport interchange at King's Cross St Pancras.

## Confidence: High

All structural tags (zone, tenure, price, status, character, community, form) are high confidence. Demographic and age are medium confidence due to the mismatch between ward geography (St Pancras & Somers Town includes areas outside the development) and development-specific demographics. However, no corrections are recommended — the existing tags are the best available characterisation given the data.
