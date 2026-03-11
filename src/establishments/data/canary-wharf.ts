import type { Establishment } from "@/src/establishments/types";

const canaryWharf: Establishment = {
  id: "canary-wharf",
  name: "Canary Wharf / Wood Wharf",
  dev: "Canary Wharf Group (Vertus)",
  loc: "Wood Wharf - E14 - Zone 2",
  preview:
    "The Elizabeth line put Liverpool Street at 7-8 minutes and changed everything. Wood Wharf is the lower-rise, human-scaled residential quarter on the eastern edge of the island - distinct from the financial core. Vertus BTR from roughly GBP 2,700/month. One Park Drive by Herzog & de Meuron is the architectural landmark of the masterplan.",
  desc: "Wood Wharf is a 23-acre purpose-built residential neighbourhood sitting on the eastern edge of Canary Wharf island, with its own waterside character distinct from the skyscraper financial core. The Elizabeth line from Canary Wharf station puts Liverpool Street at 7-8 minutes, Heathrow at 40. The Jubilee line is also on site. Vertus - Canary Wharf Group's BTR arm - manages multiple buildings across Wood Wharf, professionally run with strong resident reviews. 8 Water Street, the newest Vertus building, has an indoor-outdoor pool, gym, and screening room. One Park Drive by Herzog & de Meuron - a Pritzker Prize-winning practice - is the architectural landmark: a distinctive circular-form waterside building that stands apart from typical residential tower design. Wood Wharf is still building out, which currently keeps pricing competitive relative to the finished quality it will eventually represent.",
  ageNote:
    "Estimated to skew 30-40 overall. The Wharf absolutely has a twenties crowd, but the dominant resident and worker profile still feels like established professionals rather than students or very early-career households.",
  tags: {
    zone: ["Zone 2"],
    tenure: ["Rent or buy"],
    price: ["Mid-range", "Premium"],
    status: ["In delivery"],
    char: ["Waterside"],
    comm: ["Destination"],
    demo: ["Mixed"],
    age: ["30-40"],
    form: ["Area / masterplan"],
    conn: ["Highly Connected"],
  },
  projects: [
    {
      name: "8 Water Street (Vertus)",
      note: "Newest Vertus BTR building. Indoor-outdoor pool, gym, screening room. 1-beds from roughly GBP 2,700/month.",
    },
    {
      name: "10 Park Drive (Vertus)",
      note: "34 storeys, Vertus-managed. On the waterfront edge of Wood Wharf. One of the most recognisable buildings in the masterplan.",
    },
    {
      name: "3 & 10 George Street (Vertus)",
      note: "Core rental buildings within Wood Wharf. Help define the day-to-day Vertus living proposition rather than the one-off flagship tower story.",
    },
    {
      name: "One Park Drive by Herzog & de Meuron",
      note: "Designed by a Pritzker Prize-winning practice. Distinctive circular form. Waterside. The architectural ownership landmark of Wood Wharf.",
    },
    {
      name: "Newfoundland by EcoWorld Ballymore",
      note: "58 storeys - the tallest residential tower on the island. Panoramic views unmatched in E14. Pool, gym, 24-hour concierge.",
    },
    {
      name: "South Quay Plaza",
      note: "Adjacent Marsh Wall super-prime cluster. Not inside Wood Wharf, but materially part of the same Canary Wharf residential proposition for renters and buyers comparing the area.",
    },
  ],
};

export default canaryWharf;
