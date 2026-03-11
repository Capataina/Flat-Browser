import type { FilterGroup, GuideMeta } from "@/src/establishments/types";

export const guideMeta: GuideMeta = {
  eyebrow: "Personal Relocation Research - March 2026",
  title: "London",
  accent: "Area Guide",
  subtitle:
    "A curated shortlist of areas and developments, filtered by what actually matters. Built for someone moving on from Croydon.",
  footerNote:
    "Research compiled March 2026 - verify on Homeviews, Rightmove and developer sites before committing.",
};

export const filterGroups: FilterGroup[] = [
  {
    category: "zone",
    label: "Zone",
    options: [
      {
        value: "Zone 1",
        description: "Central London core with the fastest access and the highest pricing pressure.",
      },
      {
        value: "Zone 2",
        description: "Inner ring around central London, usually balancing connectivity and liveability.",
      },
      {
        value: "Zone 3",
        description: "Further out than the inner core, often offering more space and calmer neighbourhoods.",
      },
      {
        value: "Zone 4",
        description: "Outer zone in this shortlist, typically trading longer trips for value and room.",
      },
    ],
  },
  {
    category: "tenure",
    label: "Tenure",
    options: [
      {
        value: "Rent only",
        description: "Mainly a rental product with no meaningful ownership route inside the scheme.",
      },
      {
        value: "Rent or buy",
        description: "Both rental and ownership options are realistically available in the same place.",
      },
      {
        value: "Buy only",
        description: "Ownership-led address rather than a rental-first option.",
      },
    ],
  },
  {
    category: "price",
    label: "Price",
    options: [
      {
        value: "Accessible",
        description: "Cheaper relative to the rest of this shortlist, not necessarily cheap by London standards.",
      },
      {
        value: "Mid-range",
        description: "Sits between the value plays and the most expensive prestige addresses.",
      },
      {
        value: "Premium",
        description: "Top-end pricing driven by location, brand, amenity package, or scarcity.",
      },
    ],
  },
  {
    category: "status",
    label: "Status",
    options: [
      {
        value: "Ready now",
        description: "You can realistically live there now because major residential phases already exist.",
      },
      {
        value: "In delivery",
        description: "Active place with delivered phases, but still building out in a meaningful way.",
      },
      {
        value: "Coming soon",
        description: "More future-facing than finished, with planning or delivery still ahead.",
      },
    ],
  },
  {
    category: "char",
    label: "Character",
    options: [
      {
        value: "Waterside",
        description: "River, dock, or canal frontage materially shapes the feel of the place.",
      },
      {
        value: "Parkside",
        description: "Green space is a core part of the area's daily identity rather than a minor extra.",
      },
    ],
  },
  {
    category: "comm",
    label: "Community",
    options: [
      {
        value: "Destination",
        description: "A place where living, working, food, retail, culture, and events coexist at real scale.",
      },
      {
        value: "Development",
        description: "Primarily a residential-led scheme or masterplan with supporting amenities around it.",
      },
      {
        value: "Address",
        description: "A more self-contained residential address, usually smaller in scope than a full district.",
      },
    ],
  },
  {
    category: "demo",
    label: "Demographic",
    options: [
      {
        value: "European-led",
        description: "The visible resident and social mix feels mostly European, even if still diverse.",
      },
      {
        value: "East Asian & European",
        description: "Those two groups are especially visible in the area's resident and day-to-day mix.",
      },
      {
        value: "South Asian-led",
        description: "South Asian presence is especially strong in the area's everyday identity.",
      },
      {
        value: "Mixed",
        description: "No single group clearly dominates; the area reads as broadly multi-ethnic.",
      },
    ],
  },
  {
    category: "age",
    label: "Age Mix",
    options: [
      {
        value: "18-30",
        description: "Student, graduate, and early-career adult energy is the dominant age signal.",
      },
      {
        value: "30-40",
        description: "Established young professionals and early-family households are the main group.",
      },
      {
        value: "40+",
        description: "Older settled households or affluent mature owners dominate the profile.",
      },
    ],
  },
  {
    category: "form",
    label: "Place Type",
    options: [
      {
        value: "Area / masterplan",
        description: "A wider district or masterplan containing multiple schemes, phases, or sub-areas.",
      },
      {
        value: "Project / development",
        description: "One named scheme, or a tightly grouped development rather than a whole district.",
      },
      {
        value: "Signature address",
        description: "A scarce trophy address with its own identity inside a larger area.",
      },
    ],
  },
  {
    category: "conn",
    label: "Connectivity",
    options: [
      {
        value: "Highly Connected",
        description:
          "Average public transport travel time to Soho, King's Cross, Shoreditch, and Canary Wharf is 20 minutes or less.",
      },
      {
        value: "Well Connected",
        description:
          "Average travel time to the same four hubs is between 20 and 30 minutes.",
      },
      {
        value: "Moderately Connected",
        description:
          "Average travel time exceeds 30 minutes, usually because the nearest station lacks direct tube or Elizabeth line services.",
      },
    ],
  },
];
