import type { Establishment } from "@/src/establishments/types";

const wembleyPark: Establishment = {
  id: "wembley-park",
  name: "Wembley Park",
  dev: "Quintain Living",
  loc: "Wembley - HA9 - Zone 4",
  preview:
    "The UK's largest single-site BTR development - 85 acres built around Wembley Stadium. Named Sunday Times Best Place to Live in London 2025. Boxpark, London Designer Outlet, nine-screen Cineworld, Troubadour Theatre, and a resident events programme that's actually worth attending.",
  desc: "Quintain's 85-acre transformation is the most comprehensively managed BTR campus in the country. The 15-minute neighbourhood model is genuinely delivered: Boxpark, London Designer Outlet (70+ shops and restaurants), a nine-screen Cineworld, Troubadour Theatre, Union Park, and extensive green spaces are all on site. The Jubilee and Metropolitan lines put Baker Street 12 minutes away. Quintain Living runs a resident events programme - cooking classes, rooftop screenings, socials - that creates more organic social infrastructure than developments three times the price. Buildings are professionally managed under a single landlord, which makes referencing and maintenance straightforward. Studios from roughly GBP 1,700/month; 1-beds from roughly GBP 2,200/month. BTR only - you cannot purchase here. On full completion in 2027, the masterplan reaches 8,500 homes.",
  ageNote:
    "Estimated to skew 30-40 overall. The build-to-rent model, resident events programme, and leisure footprint still pull in plenty of people in their twenties, but the dominant liveable profile feels more like established young professionals and early-family households than a student-heavy district.",
  tags: {
    zone: ["Zone 4"],
    tenure: ["Rent only"],
    price: ["Accessible", "Mid-range"],
    status: ["Ready now"],
    char: ["Parkside"],
    comm: ["Destination"],
    demo: ["South Asian-led"],
    age: ["18-30"],
    form: ["Area / masterplan"],
    conn: ["Well Connected"],
  },
  projects: [
    {
      name: "Luna by Quintain Living",
      note: "Newest building. Modernist celestial aesthetic. Eclipse Lounge, rooftop cocktail bar, and a secret dining room exclusive to residents.",
    },
    {
      name: "Ferrum by Quintain Living",
      note: "New York warehouse loft-style. Industrial chic interiors. Strongest gym offering of any Quintain building on site.",
    },
    {
      name: "Madison by Quintain Living",
      note: "Mid-century modern. Overlooks Union Park. Roof terrace with direct stadium arch views. Screening room, dog park.",
    },
    {
      name: "Canada Gardens by Quintain Living",
      note: "Botanical-inspired. BBQ terraces, communal dining spaces, play park. Family-forward in feel.",
    },
    {
      name: "Landsby by Quintain Living",
      note: "The Scandi-feeling Union Park address. Strong everyday liveability and one of the clearest options if you want green space over stadium spectacle.",
    },
    {
      name: "Alameda by Quintain Living",
      note: "The closest thing Wembley Park has to a social-core building. Strong amenity energy and very much in the thick of the district.",
    },
    {
      name: "Beton by Quintain Living",
      note: "Brutalist-influenced building with more edge than the softer family-coded blocks. Good fit for renters who want Wembley Park without the safest possible aesthetic.",
    },
    {
      name: "Alto by Quintain Living",
      note: "A cleaner, more classic high-rise option within the same managed campus. Useful benchmark for the broader range of Quintain's product stack.",
    },
  ],
};

export default wembleyPark;
