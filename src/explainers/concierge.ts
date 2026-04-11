import type { Explainer } from "./types";
import type { ConciergeType } from "../areas/types";

export const concierge: Explainer<ConciergeType> = {
  id: "concierge",
  term: "Concierge",
  category: "building",
  description:
    "Whether the building has staff on site to handle deliveries, visitor access, and day-to-day building services. 24-hour concierge means continuous staffing around the clock; daytime concierge covers normal working hours only; none means deliveries go to a package locker or your doorstep. Concierge is primarily a convenience and security feature — useful for parcels and guests, not load-bearing on whether the building is a good place to live.",
  relevance: (_profile, value) => {
    switch (value) {
      case "24h":
        return {
          severity: "info",
          message: `24-hour concierge — deliveries handled any time, late-night visitor access handled. Convenient but usually reflected in service charges.`,
        };
      case "daytime":
        return {
          severity: "info",
          message: `Daytime concierge covers business hours. Fine for weekday deliveries; out-of-hours parcels go to lockers or are rearranged.`,
        };
      case "none":
        return {
          severity: "info",
          message: `No concierge. Deliveries go to lockers or direct to the door. Not a problem, just a fact to know.`,
        };
    }
  },
};
