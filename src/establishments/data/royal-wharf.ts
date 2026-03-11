import type { Establishment } from "@/src/establishments/types";

const royalWharf: Establishment = {
  id: "royal-wharf",
  name: "Royal Wharf",
  dev: "Ballymore",
  loc: "Silvertown - E16 - Zone 3",
  preview:
    "A 40-acre purpose-built riverside neighbourhood - fully activated with 3,385 homes, a Thames Clipper pier, pool, spa, gym, and its own working high street. The Elizabeth line from Custom House puts Liverpool Street at roughly 8 minutes.",
  desc: "Royal Wharf is one of the most self-contained riverside developments in London - built from scratch on a former industrial site in Silvertown. The Clubhouse anchors the amenity offer: pool, spa, sauna, jacuzzi, gym, and a residents' lounge. A Thames Clipper pier sits on site and a kilometre of riverfront walk runs along the development's edge. The on-site high street has cafes, a Sainsbury's Local, and independent businesses already trading. Ballymore's management quality has been consistently above average relative to the price point - maintenance is good and the resident community is active. The Elizabeth line completely transformed the connectivity case: Custom House station puts Liverpool Street at roughly 8 minutes, Canary Wharf at 4 minutes, and Heathrow at 40. The Silvertown Tunnel, which opened in April 2025, also provides a new cross-river link to Greenwich Peninsula and The O2.",
  ageNote:
    "Estimated to skew 30-40 overall. The wider local profile remains working-age and there are younger renters around, but the school, community facilities, and family-shaped riverside setup make the dominant feel more settled than under-30.",
  tags: {
    zone: ["Zone 3"],
    tenure: ["Rent or buy"],
    price: ["Accessible", "Mid-range"],
    status: ["Ready now"],
    char: ["Waterside"],
    comm: ["Development"],
    demo: ["Mixed"],
    age: ["30-40"],
    form: ["Area / masterplan"],
    conn: ["Highly Connected"],
  },
  projects: [
    {
      name: "Royal Wharf by Ballymore (core masterplan)",
      note: "Multiple phases delivered. Thames Clipper pier on-site. Clubhouse with pool, spa, sauna, jacuzzi, gym.",
    },
    {
      name: "Royal Wharf Gardens",
      note: "One of the stronger later components within the neighbourhood. Helps define the greener, more family-shaped side of the masterplan.",
    },
    {
      name: "Riverscape",
      note: "Adjacent Ballymore and Oxley riverside scheme in the wider Royal Docks orbit. More premium than Royal Wharf proper but aimed at the same east-riverside buyer pool.",
    },
    {
      name: "Argenta at Silvertown",
      note: "Brand new - Guinness Homes / Lendlease. First residents late 2025. Shared Ownership and private rent. Dock views toward North Greenwich.",
    },
    {
      name: "Thameside West",
      note: "GLA / Silvertown Homes joint venture on the western edge of the Royal Docks. Riverside plots with Elizabeth line access.",
    },
  ],
};

export default royalWharf;
