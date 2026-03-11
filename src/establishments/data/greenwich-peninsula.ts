import type { Establishment } from "@/src/establishments/types";

const greenwichPeninsula: Establishment = {
  id: "greenwich-peninsula",
  name: "Greenwich Peninsula",
  dev: "Knight Dragon + GLA",
  loc: "North Greenwich - SE10 - Zone 2",
  preview:
    "Europe's largest single residential regeneration project - 17,500 homes planned, over 5,000 residents already in place. The Tide elevated linear park is some of the best public realm in London. Design District, The O2 directly adjacent, Jubilee line from North Greenwich.",
  desc: "Knight Dragon's 30-year masterplan is already past its halfway point, with a fully functioning public realm and a resident community that has critical mass. The Tide is a 5km elevated linear park running along the Thames - one of the most distinctive pieces of outdoor infrastructure built in London in recent years. The Design District at the northern tip houses creative studios, independent businesses, and cultural programming. The O2 Arena brings year-round live events to the doorstep. Upper Riverside (towers No.4 and No.5) are the architectural centrepiece - No.4 with Tom Dixon interiors, No.5 by SOM. Entry-level riverside apartments from roughly GBP 2,100/month; Upper Riverside closer to GBP 2,500/month. The GLA's co-investment in the masterplan makes delivery risk structurally low. The one honest caveat: some residents find the Jubilee line journey to central London psychologically tiring, and it's worth factoring that into daily life.",
  ageNote:
    "Estimated to skew 30-40 overall. The Peninsula attracts plenty of younger visitors through The O2 and Design District, but the dominant residential and repeat-user profile feels more like working professionals in their thirties than a primarily student-led scene.",
  tags: {
    zone: ["Zone 2", "Zone 3"],
    tenure: ["Rent or buy"],
    price: ["Accessible", "Mid-range"],
    status: ["In delivery"],
    char: ["Waterside"],
    comm: ["Destination"],
    demo: ["European-led"],
    age: ["30-40"],
    form: ["Area / masterplan"],
    conn: ["Well Connected"],
  },
  projects: [
    {
      name: "Upper Riverside - No.1 to No.3",
      note: "The earlier waterfront towers that established the premium residential language of the Peninsula before the later Tom Dixon and SOM buildings.",
    },
    {
      name: "Upper Riverside - No.4 & No.5",
      note: "Waterfront towers. Pool, gym, spa, cinema room. No.4 interiors by Tom Dixon; No.5 designed by SOM architects.",
    },
    {
      name: "The Waterman",
      note: "One of the key rental-led components within the masterplan. Important because it broadens Greenwich Peninsula beyond just the headline riverside towers.",
    },
    {
      name: "Peninsula Gardens",
      note: "Four brickwork waterfront buildings. Studios and 1-2 bed apartments. Completed late 2025.",
    },
    {
      name: "Morden Wharf",
      note: "Major upcoming phase - Galliard + CDL. 1,500 homes in towers up to 36 storeys. Currently being redesigned by Jo Cowen Architects.",
    },
  ],
};

export default greenwichPeninsula;
