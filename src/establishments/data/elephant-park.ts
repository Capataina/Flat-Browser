import type { Establishment } from "@/src/establishments/types";

const elephantPark: Establishment = {
  id: "elephant-park",
  name: "Elephant Park",
  dev: "Lendlease",
  loc: "Elephant & Castle - SE17 - Zone 1",
  preview:
    "The Lendlease masterplan is essentially complete - the final phase, The Wilderly, finishes mid-2026. A Zone 1 neighbourhood built around a brand new two-acre park. Rated 4.35/5 on Homeviews. Palace opened a skatepark here in Autumn 2025.",
  desc: "Elephant Park is a Zone 1 neighbourhood centred around a two-acre park - one of the largest new green spaces created in central London in over 70 years. The Lendlease footprint is self-contained and well-managed: 13,000 sqm of retail, cafes, and restaurants are open, and the Northern and Bakerloo lines are both on the doorstep. The Wilderly is the final phase - a 25-storey tower with SkyLounge, communal gym, and elevated garden, completing mid-2026. Palace Skatepark at the southern edge of the masterplan signals exactly what demographic Lendlease has been targeting with the programming and culture of the development. Rated 4.35/5 on Homeviews, which is strong for Zone 1 new-build. The development is compact - you can walk end-to-end in five minutes - but it punches well above its footprint for both connectivity and quality of finish.",
  ageNote:
    "Estimated to skew 30-40 overall. Elephant Park still attracts plenty of younger adults because of its location and culture, but the lived-in profile reads more like professionals and young families than a mainly under-30 district.",
  tags: {
    zone: ["Zone 1"],
    tenure: ["Rent or buy"],
    price: ["Mid-range"],
    status: ["In delivery"],
    char: ["Parkside"],
    comm: ["Development"],
    demo: ["Mixed"],
    age: ["30-40"],
    form: ["Area / masterplan"],
    conn: ["Highly Connected"],
  },
  projects: [
    {
      name: "Trafalgar Place",
      note: "First completed phase. Won Best New Place to Live at the London Planning Awards. Sets the quality benchmark for the rest of the masterplan.",
    },
    {
      name: "South Gardens",
      note: "Earlier Elephant Park phase framing the park itself. Strongest expression of the masterplan's central green-space concept.",
    },
    {
      name: "Park & Sayer",
      note: "Recently completed BTR phase on the southern edge. Consistently strong Homeviews scores.",
    },
    {
      name: "West Grove",
      note: "Later phase wrapping retail and public realm into the core of the neighbourhood. More urban and integrated than the earlier purely residential blocks.",
    },
    {
      name: "The Wilderly",
      note: "Final phase completing mid-2026. 25-storey tower + 11-storey mansion block. SkyLounge, communal gym, elevated garden. Lendlease + Daiwa House joint venture.",
    },
  ],
};

export default elephantPark;
