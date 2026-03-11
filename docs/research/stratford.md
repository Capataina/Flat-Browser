# Stratford / East Bank — Fact-Check Report

- Source data file: `src/establishments/data/stratford.ts`
- Developer listed in app data: `Ballymore + LLDC + GLA`
- Current assigned tags: `Zone 2`, `Zone 3`, `Rent or buy`, `Mid-range`, `In delivery`, `Parkside`, `Destination`, `South Asian-led`, `18-30`, `Area / masterplan`

## Tag Verification

| Tag | Current Value | Verdict | Source |
|-----|--------------|---------|--------|
| Zone | Zone 2, Zone 3 | **Verified** | Stratford station was rezoned from Zone 3 to Zone 2/3 in January 2016. The dual-zone tag accurately reflects this boundary status. | https://en.wikipedia.org/wiki/Stratford_station ; https://tfl.gov.uk/overground/stop/910GSTFD/stratford-london-rail-station/ |
| Tenure | Rent or buy | **Verified** | East Village is BTR (Get Living); Stratford Waterfront by Ballymore will include for-sale units. Broader Stratford has both rental and purchase options across multiple developments. | https://www.eastvillagelondon.co.uk/ ; https://rightnowresidential.co.uk/east-village-stratford/ |
| Price | Mid-range | **Verified — consider adding Accessible** | East Village 1-beds from ~£2,800/month; broader Stratford rentals average ~£2,823/month. Sales in the wider area start lower. For a Zone 2/3 location with this transport connectivity, the pricing is solidly mid-range. However, studios and smaller units in older stock can be more accessible. Adding "Accessible" would depend on whether the tag refers strictly to the named developments or the broader area. | https://rightnowresidential.co.uk/east-village-stratford/ ; https://www.rightmove.co.uk/properties/166615985 |
| Status | In delivery | **Verified** | Stratford Waterfront (700 homes by Ballymore + LLDC) is under construction, completing ~2029. East Village is already complete and occupied. The V&A East Museum opens 2026. East Bank cultural programme still delivering. | Established in source data |
| Character | Parkside | **Verified** | Queen Elizabeth Olympic Park provides 560 acres of managed green space, waterways, and cycling routes. The residential areas directly border the park. | Established in source data |
| Community | Destination | **Verified** | V&A East, Sadler's Wells East, UCL East, London College of Fashion, BBC Music Studios, Westfield Stratford (Europe's largest urban shopping centre), Olympic Park. Unambiguous destination status. | Established in source data |
| Demographic | South Asian-led | **Contradicted** | Census 2021 for Stratford ward: White 6,731 (42.8%), Asian 4,427 (28.1%), Black 2,759 (17.5%), Mixed 1,006 (6.4%). No single non-White group dominates. White is the plurality. Asian is the second-largest group but includes East Asian, South Asian, and other sub-groups. Black African/Caribbean is also very significant. Newham borough overall had 69% non-white residents — the highest in England and Wales — but this is distributed across multiple ethnic groups. **"Mixed" is the correct tag.** | https://www.citypopulation.de/en/uk/london/wards/newham/E05013924__stratford/ ; https://censusdata.uk/e05013924-stratford/ts022-ethnic-group-detailed |
| Age | 18-30 | **Supported** | Census 2021/2024 estimates for Stratford ward: 20-29 is the largest age group at 6,244, followed by 30-39 at 4,333. The university presence (UCL East, London College of Fashion), major retail, and transport interchange support a younger skew. The 18-30 tag is the best single-bracket fit, though the 30-39 cohort is also substantial. | https://www.citypopulation.de/en/uk/london/wards/newham/E05013924__stratford/ |
| Place Type | Area / masterplan | **Verified** | 560-acre Olympic Park with multi-phase cultural, residential, and commercial development coordinated by LLDC and GLA. Clearly an area/masterplan. | Established in source data |

## Tags to Add

- **connectivity: Highly Connected** — Estimated average public transport travel times: Soho ~20 min (Central line to Tottenham Court Road), King's Cross ~15 min (Hammersmith & City or Elizabeth line), Shoreditch ~12 min (Overground to Shoreditch High Street), Canary Wharf ~12 min (Jubilee line). Average ~15 min → Highly Connected. Four separate rail lines (Central, Jubilee, DLR, Overground) plus Elizabeth line make this one of the best-connected points in East London.

## Tags to Remove or Correct

- **Demographic: Change "South Asian-led" to "Mixed"** — Census 2021 shows a White plurality (42.8%) with significant Asian (28.1%), Black (17.5%), and Mixed (6.4%) populations. No single ethnic group dominates the non-White population. Newham is the most ethnically diverse borough in England and Wales, and Stratford ward reflects this. "Mixed" is the accurate tag.
- **Price: Consider adding "Accessible"** — While the primary named developments (East Village, Stratford Waterfront) are mid-range, the wider Stratford area includes more accessible options in older stock and shared-ownership schemes. This depends on how narrowly the tag scope is defined.

## Summary

Stratford's core infrastructure and character tags are accurate: Zone 2/3, parkside destination, area/masterplan, in delivery, and rent-or-buy are all verified. The key correction needed is demographic: "South Asian-led" should be changed to "Mixed" — Census 2021 shows a White plurality with substantial Asian, Black, and Mixed populations, reflecting Newham's status as the most ethnically diverse borough in England and Wales. The age tag "18-30" is supported by Census data showing 20-29 as the largest cohort. Connectivity is Highly Connected at ~15 minutes average to the four hubs.

## Confidence: High

Zone, tenure, status, character, community, form, and connectivity tags are high confidence with multiple authoritative sources. Age is high confidence (Census-backed, largest cohort is 20-29). Demographic correction to "Mixed" is high confidence — the Census data clearly contradicts "South Asian-led" and supports a mixed characterisation.
