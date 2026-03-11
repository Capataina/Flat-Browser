import type { Establishment } from "@/src/establishments/types";

const stratford: Establishment = {
  id: "stratford",
  name: "Stratford / East Bank",
  dev: "Ballymore + LLDC + GLA",
  loc: "Stratford - E15/E20 - Zone 2-3",
  preview:
    "The largest single cultural investment in a generation - V&A East, Sadler's Wells East, UCL East, and London College of Fashion are all open. 560 acres of Olympic Park. Elizabeth line, Jubilee line, DLR, and Overground all converge here.",
  desc: "The East Bank programme at Queen Elizabeth Olympic Park has turned Stratford into one of the most significant cultural destinations in Europe. The V&A East Storehouse is already open; the V&A East Museum opens in 2026 alongside the BBC Music Studios. Sadler's Wells East, UCL East, and London College of Fashion are all operational. Westfield Stratford - the largest urban shopping centre in Europe - is five minutes on foot. The Olympic Park provides 560 acres of managed green space, waterways, and cycling routes. The Stratford Waterfront residential programme (700 homes by Ballymore + LLDC) is under construction, completing 2029. The East Village - the former Athletes' Village - is already a fully functioning residential neighbourhood adjacent to the park. Four transport lines make this one of the best-connected points in East London.",
  ageNote:
    "Estimated to skew 18-30 overall. Stratford still has families and older residents around the edges, but East Bank, the university presence, major retail, and the interchange effect make the active age profile feel younger here than in the more settled premium districts.",
  tags: {
    zone: ["Zone 2", "Zone 3"],
    tenure: ["Rent or buy"],
    price: ["Mid-range"],
    status: ["In delivery"],
    char: ["Parkside"],
    comm: ["Destination"],
    demo: ["Mixed"],
    age: ["18-30"],
    form: ["Area / masterplan"],
    conn: ["Highly Connected"],
  },
  projects: [
    {
      name: "Stratford Waterfront by Ballymore + LLDC",
      note: "700 homes. Under construction from 2026, completing 2029. Directly facing the V&A East and cultural quarter.",
    },
    {
      name: "East Village",
      note: "Former Athletes' Village - 2,800 homes across multiple BTR buildings. Mature, functioning mixed-tenure neighbourhood.",
    },
    {
      name: "Here East",
      note: "Converted press and broadcast centre. Tech and creative workspace campus anchoring the commercial side of the park.",
    },
    {
      name: "Chobham Manor",
      note: "The most family-residential part of the post-Olympic build-out. Useful if East Village feels too rental-heavy or Stratford too interchange-led.",
    },
    {
      name: "East Wick + Sweetwater",
      note: "The Hackney Wick edge of the Olympic Park build-out. More creative-neighbourhood in tone and a good counterweight to Stratford's more polished retail core.",
    },
    {
      name: "Glasshouse Gardens",
      note: "One of the stronger station-adjacent residential options with immediate Westfield and transport access. More conventional high-rise than East Village, but very liveable.",
    },
  ],
};

export default stratford;
