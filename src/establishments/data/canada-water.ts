import type { Establishment } from "@/src/establishments/types";

const canadaWater: Establishment = {
  id: "canada-water",
  name: "Canada Water",
  dev: "British Land + AustralianSuper",
  loc: "Canada Water - SE16 - Zone 2",
  preview:
    "53 acres on the Zone 2 Jubilee line - the same lead developer (Roger Madelin) who delivered King's Cross Central. Plans for the first new London high street in a century, a 12-acre park, 3,700 homes, and 20,000 jobs of workspace. Corner Corner leisure venue is already open. Planning under review as of December 2025.",
  desc: "Canada Water is the development with the strongest long-term bones and the most uncertain near-term timeline. British Land and AustralianSuper have appointed Roger Madelin - who delivered the King's Cross masterplan - to lead the project. The plan is genuinely ambitious: 3,700 homes, a new high street (the first built in London in a century), a new town square, a 12-acre park, a new leisure centre, and 20,000 jobs of workspace. Corner Corner - a leisure venue by Broadwick and KERB - is already open and operating. Canada Water station on the Jubilee line puts London Bridge at 3 minutes and Canary Wharf at 5. Zone 2. The caveat: Sadiq Khan called in the revised masterplan in December 2025 over affordable housing delivery, introducing planning uncertainty that makes this a watch-and-track rather than an act-now proposition.",
  ageNote:
    "Estimated to skew 30-40 overall. The active use is broad and there is still a younger transit-and-leisure crowd, but the long-term shape of Canada Water looks more like a professional and family-working-age district than a primarily under-30 one.",
  tags: {
    zone: ["Zone 2"],
    tenure: ["Rent or buy"],
    price: ["Mid-range"],
    status: ["Coming soon"],
    char: ["Waterside"],
    comm: ["Development"],
    demo: ["Mixed"],
    age: ["30-40"],
    form: ["Area / masterplan"],
    conn: ["Highly Connected"],
  },
  projects: [
    {
      name: "The Founding",
      note: "35-storey for-sale tower by British Land. 186 apartments - Canada Water's first major residential address.",
    },
    {
      name: "Dock Shed",
      note: "Early commercial and cultural anchor within the masterplan. Important to the place story because it helps prove the district is activating before the housing fully arrives.",
    },
    {
      name: "Corner Corner (Broadwick + KERB)",
      note: "Leisure and dining venue already open. The first activated public space in the masterplan.",
    },
    {
      name: "Canada Water Leisure Centre",
      note: "Major civic anchor already delivered. Strengthens the case that Canada Water is becoming a real district rather than just a planning document.",
    },
    {
      name: "Canada Water Masterplan (wider)",
      note: "3,700 homes total, new high street, 12-acre park, 20,000 jobs of workspace. Planning under review as of December 2025.",
    },
  ],
};

export default canadaWater;
