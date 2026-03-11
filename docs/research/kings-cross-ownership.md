# King's Cross — Gasholders & Capella — Fact-Check Report

- Source data file: `src/establishments/data/kings-cross-ownership.ts`
- Developer listed in app data: `Argent`
- Current assigned tags: `Zone 1`, `Buy only`, `Premium`, `Ready now`, `Waterside`, `Address`, `European-led`, `40+`, `Signature address`

## Tag Verification

| Tag | Current Value | Verdict | Source |
|-----|--------------|---------|--------|
| Zone | Zone 1 | **Verified** | King's Cross St Pancras is Zone 1, served by six Underground lines. | https://tfl.gov.uk/hub/stop/HUBKGX/kings-cross-st-pancras-international ; https://en.wikipedia.org/wiki/King%27s_Cross_St_Pancras_tube_station |
| Tenure | Buy only | **Contradicted — correct to "Rent or buy"** | The Gasholders has multiple live rental listings on Rightmove: studio at £2,600 pcm, 1-bed at £3,575–5,000 pcm, 2-bed at £5,000 pcm, 3-bed at £8,000 pcm. At least one Gasholders unit is listed for sale at £1,250,000 (1-bed). Capella was launched as for-sale (studios from £650,000, 2-beds from £1.65M) via Knight Frank. The combined offering is clearly rent-or-buy. | https://www.rightmove.co.uk/properties/161668697 ; https://www.rightmove.co.uk/properties/160282829 ; https://www.rightmove.co.uk/properties/169354295 ; https://londonhouse.co.uk/property/loh240013-gasholder-building-kings-cross/ ; https://capellakingscross.co.uk/questions-and-answers |
| Price | Premium | **Verified** | Gasholders sale at £1,250,000 for 1-bed; rents from £2,600 (studio) to £8,000 (3-bed) pcm. Capella sale from £650,000 (studio) to £1.65M+ (2-bed). Service charge at £7.73/sqft/year. Clearly premium. | https://londonhouse.co.uk/property/loh240013-gasholder-building-kings-cross/ ; https://capellakingscross.co.uk/questions-and-answers |
| Status | Ready now | **Verified** | Gasholders completed and occupied. Capella completed Q2 2024 and sales are active. | https://gasholders.uk/ ; https://www.buildington.co.uk/buildings/10908/england/london-n1c/canal-reach/capella ; https://www.knightfrank.co.uk/blog/2022/03/10/capella-kings-cross-is-complete-last-phase-of-worldclass-residential-development-scheme |
| Character | Waterside | **Verified** | The Gasholders sit directly above Regent's Canal. Capella is adjacent to the canal within the King's Cross masterplan. Canal-side positioning is a defining feature of both. | https://gasholders.uk/ ; https://www.kingscross.co.uk/gasholders |
| Community | Address | **Verified** | These are specific, named residential addresses within the wider King's Cross masterplan — not the masterplan itself (which is the separate `kings-cross` entry). The schema distinction is appropriate. | https://gasholders.uk/ ; https://capellakingscross.co.uk/questions-and-answers |
| Demographic | European-led | **Contradicted — remove** | Census 2021 for St Pancras & Somers Town ward (the best available proxy): White 42%, Asian 29%, Black 15%, Mixed 7%, Arab 2%. This is a highly diverse ward — not European-led by any measure. 32% Muslim, 30% Christian. 44% born outside the UK. | https://www.citypopulation.de/en/uk/london/wards/camden/E05013669__st_pancras_somers_town/ ; https://jsna.camden.gov.uk/reports/demographics/ |
| Age Mix | 40+ | **Unsubstantiated — remove** | St Pancras & Somers Town ward has a dominant 20–29 age group (3,916 out of 12,512 total population), followed by 30–39 (1,976). The ward skews heavily young. While the premium ownership sub-market may attract older buyers at building level, Census data does not support a 40+ tag. | https://www.citypopulation.de/en/uk/london/wards/camden/E05013669__st_pancras_somers_town/ |
| Place Type | Signature address | **Verified** | The Gasholders are Grade II listed Victorian iron structures converted by Wilkinson Eyre — an architecturally unique and unrepeatable residential product. Capella is the final for-sale phase with no further supply possible. Together they represent the scarcest ownership addresses in the N1C micro-market. | https://gasholders.uk/ ; https://www.kingscross.co.uk/gasholders ; https://capellakingscross.co.uk/questions-and-answers |

## Tags to Add

- **connectivity: Highly Connected** — King's Cross St Pancras is served by 6 Underground lines plus Eurostar. Estimated travel times: Soho (Tottenham Court Road) ~8 min, King's Cross ~0 min, Shoreditch (Old Street/Liverpool Street) ~12 min, Canary Wharf ~22 min. Average ~11 min. Firmly within the ≤20 min "Highly Connected" tier. This is arguably the best-connected point in the entire codebase.

## Tags to Remove or Correct

- **Correct `Buy only` → `Rent or buy`**: The Gasholders has multiple active rental listings on Rightmove (£2,600–8,000 pcm). Capella is primarily for-sale but the combined offering across both buildings is rent-or-buy.
- **Remove `European-led`**: St Pancras & Somers Town ward Census 2021 data shows only 42% White, with 29% Asian, 15% Black, and significant non-UK-born population (44%). This is one of the most diverse wards in Camden. "European-led" is directly contradicted.
- **Remove `40+`**: The ward is dominated by 20–29 year olds (31% of the population). While the premium ownership tier may attract older buyers, Census data contradicts a 40+ tag for this location.

## Summary

The Gasholders and Capella represent the premium ownership tier within King's Cross Central — architecturally extraordinary, permanently supply-constrained, and at the best-connected point in London. However, three tags need correction: tenure should be "Rent or buy" (Gasholders has active rentals), and both demographic ("European-led") and age ("40+") tags are directly contradicted by Census 2021 data for St Pancras & Somers Town ward, which shows a young and highly diverse population.

## Confidence: High

All tags are well-evidenced from TfL, Rightmove, developer microsites, and Census 2021 data. The St Pancras & Somers Town ward is a strong geographic proxy for the Gasholders/Capella location. The demographic finding is particularly robust — the ward is unambiguously diverse and young.
