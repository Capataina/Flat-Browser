import type { Establishment } from "@/src/establishments/types";

const brentCrossTown: Establishment = {
  id: "brent-cross",
  name: "Brent Cross Town",
  dev: "Related Argent + London Borough of Barnet",
  loc: "Brent Cross - NW2 - Zone 3-4",
  preview:
    "The most affordable high-quality BTR entry on this list - The Maple from GBP 1,950/month. Conran & Partners interiors, 25m pool, Allies & Morrison architecture. King's Cross in 12 minutes by Thameslink. Barnet is one of the safest boroughs in London. First residents moved in early 2025; neighbourhood is still activating.",
  desc: "Brent Cross Town is the strongest value proposition for someone prioritising quality and price over immediate activation. The Maple delivers Conran & Partners interiors and Allies & Morrison architecture with a 25m pool and jacuzzi from GBP 1,950/month (studios) and GBP 2,250/month (1-beds). The Thameslink from Brent Cross West station puts King's Cross at 12 minutes. The London Borough of Barnet consistently ranks in the top 10 safest in London by crimes per resident - the environment around the development is well-maintained and low-friction. The honest limitation: first residents only moved in early 2025. The high street, bars, restaurants, and Sheffield Hallam satellite campus are future promises, not current reality. This is the right choice for someone who prioritises price and safety now and is comfortable living through a neighbourhood's activation phase. In three to five years, when the wider masterplan delivers, the price advantage will have gone.",
  ageNote:
    "Estimated to skew 30-40 overall. The pricing and new-build offer can still appeal to younger renters, but the current value proposition feels strongest for professionals and early-family households setting up rather than transient under-30 residents.",
  tags: {
    zone: ["Zone 3"],
    tenure: ["Rent or buy"],
    price: ["Accessible", "Mid-range"],
    status: ["In delivery"],
    char: ["Parkside"],
    comm: ["Development"],
    demo: ["Mixed"],
    age: ["30-40"],
    form: ["Area / masterplan"],
    conn: ["Well Connected"],
  },
  projects: [
    {
      name: "The Maple (BTR)",
      note: "Studios from GBP 1,950/month, 1-beds from GBP 2,250/month. 25m pool, jacuzzi, Conran & Partners interiors, Allies & Morrison architecture. 535 units.",
    },
    {
      name: "The Delamarre",
      note: "Current private-sale phase. Cleanest ownership route into Brent Cross Town with the same park-town positioning and station access as The Maple.",
    },
    {
      name: "Conductor House",
      note: "Affordable and London Living Rent component within the wider neighbourhood. Important because it broadens the actual entry routes into the masterplan.",
    },
    {
      name: "Brent Cross Town (wider masterplan)",
      note: "180 acres, 6,700 homes planned. Sheffield Hallam campus, new high street, leisure and retail all in planning or early delivery.",
    },
  ],
};

export default brentCrossTown;
