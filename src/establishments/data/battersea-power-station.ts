import type { Establishment } from "@/src/establishments/types";

const batterseaPowerStation: Establishment = {
  id: "battersea-ps",
  name: "Battersea Power Station",
  dev: "SP Setia - Sime Darby - EPF",
  loc: "Nine Elms - SW11 - Zone 1",
  preview:
    "42 acres around a Grade II* listed industrial landmark. Apple's European HQ, Electric Boulevard with 100+ shops and restaurants, a six-acre riverside park, and the Northern line directly on site. Circus West Village is the BTR entry point; Switch House is the ownership tier inside the building itself.",
  desc: "Battersea Power Station is one of the most architecturally consequential regeneration projects in Europe. Apple's European HQ occupies the turbine halls, bringing 1,400 staff and a lasting commercial anchor that guarantees long-term investment in the surrounding area. Electric Boulevard runs through the spine of the masterplan with restaurants, bars, and retail across two storeys. Power Station Park provides six acres of open green space along the Thames. The Northern line's Battersea Power Station station opened in 2021 - Zone 1, direct to the West End and City. Circus West Village is the most established residential phase and the BTR entry point, with 1-beds in the GBP 2,800-3,200/month range. Switch House East and West contain 295 apartments within the Grade II* listed building itself - architecturally extraordinary, and permanently scarce.",
  ageNote:
    "Estimated to skew 30-40 overall. The visitor mix is genuinely all-age because the Power Station is a destination, but the likely resident centre of gravity sits with affluent working professionals rather than the older trophy-address buyers concentrated in Switch House.",
  tags: {
    zone: ["Zone 1"],
    tenure: ["Rent or buy"],
    price: ["Mid-range", "Premium"],
    status: ["Ready now"],
    char: ["Waterside"],
    comm: ["Destination"],
    demo: ["European-led"],
    age: ["30-40"],
    form: ["Area / masterplan"],
    conn: ["Well Connected"],
  },
  projects: [
    {
      name: "Circus West Village",
      note: "Most established BTR phase. Halliday House, Faraday House. River views, roof terrace, concierge. Best entry price into the masterplan.",
    },
    {
      name: "Battersea Roof Gardens (Phase 3)",
      note: "636 homes. Every apartment has a winter garden or terrace. Residents' lounges, gym, healthcare facility on-site.",
    },
    {
      name: "Prospect Place",
      note: "Riverside Gehry Partners phase. More accessible entry point than the landmark building while still sitting inside the same destination masterplan.",
    },
    {
      name: "Koa at Electric Boulevard",
      note: "Build-to-rent product at the station end of the scheme. Concierge, lounge, gym, and the cleanest route into the newer Electric Boulevard side of the district.",
    },
    {
      name: "Parkside Collection",
      note: "Smaller premium collection overlooking Power Station Park. Quieter positioning than Electric Boulevard while keeping the same address prestige.",
    },
    {
      name: "Switch House East & West",
      note: "Apartments inside the Grade II* listed Power Station building. 295 homes. The ownership tier - architecturally extraordinary and permanently finite.",
    },
  ],
};

export default batterseaPowerStation;
