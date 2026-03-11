import type { Establishment } from "@/src/establishments/types";

const whiteCity: Establishment = {
  id: "white-city",
  name: "White City",
  dev: "St James (Berkeley) + Mitsui Fudosan UK / Stanhope",
  loc: "White City - W12 - Zone 2",
  preview:
    "The strongest missing district on this shortlist. White City Living brings the beach club, pools, gardens, and Berkeley polish; Television Centre adds restaurants, Electric Cinema, White City House, and real cultural identity. Westfield and Imperial are next door, and the area reads much younger than most premium West London addresses.",
  desc: "White City is one of the few London regeneration districts that combines premium managed living with genuine social energy outside the building. White City Living is Berkeley's flagship west London masterplan: over 2,500 homes set in eight acres of parks and gardens, with a rooftop beach club, pool, spa, gym, work lounges, cinemas, and strong day-to-day retail already on site. Immediately alongside it, Television Centre gives the district a second identity that stops it feeling generic: the former BBC headquarters now holds homes, offices, restaurants, Electric Cinema, White City House, Soho House wellness facilities, and a much stronger sense of place than a normal tower cluster. Westfield London is next door, Imperial's White City campus is expanding directly into the area, and White City and Wood Lane stations make the West End straightforward. The district is still building out, which matters, but it already feels established enough to live in now rather than as a pure future bet.",
  ageNote:
    "Estimated to skew 18-30 overall. The surrounding ward is young, and the active feel around White City Living, Television Centre, Westfield, and Imperial reads younger and more international than the calmer premium districts elsewhere on the shortlist.",
  tags: {
    zone: ["Zone 2"],
    tenure: ["Rent or buy"],
    price: ["Premium"],
    status: ["In delivery"],
    char: ["Parkside"],
    comm: ["Destination"],
    demo: ["Mixed"],
    age: ["18-30"],
    form: ["Area / masterplan"],
    conn: ["Well Connected"],
  },
  projects: [
    {
      name: "White City Living",
      note: "Berkeley's 2,500+ home masterplan. Eight acres of parks and gardens, pool, spa, gym, cinemas, work lounges, and a rooftop beach club.",
    },
    {
      name: "The Cascades",
      note: "Water-garden-facing phase within White City Living. One of the strongest expressions of the park-and-water public realm the scheme is built around.",
    },
    {
      name: "The Solaris One & Two",
      note: "Premium Westmont phase within White City Living. Rooftop pool, beach club, sunset bar, and some of the strongest skyline-facing homes in the district.",
    },
    {
      name: "Westmont Apartments",
      note: "Premium White City Living release sitting between the wider masterplan and the more overtly flagship Solaris positioning. Cleaner, quieter, and still fully inside the same amenity system.",
    },
    {
      name: "Television Centre",
      note: "The former BBC headquarters turned mixed-use destination. Homes, offices, restaurants, Electric Cinema, White City House, and Soho House wellness facilities.",
    },
    {
      name: "The Ariel",
      note: "One of the strongest residential pieces inside Television Centre. Better character than generic west London luxury product and a strong counterweight to the Berkeley side.",
    },
    {
      name: "Scenery House",
      note: "Current Television Centre residential launch beside Hammersmith Park. Important because it shows the TVC side is still actively improving rather than just trading on heritage.",
    },
  ],
};

export default whiteCity;
