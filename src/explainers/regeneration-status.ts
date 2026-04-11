import type { Explainer } from "./types";
import type { AreaRegeneration } from "../areas/types";

export type RegenerationStatusValue = AreaRegeneration["status"];

export const regenerationStatus: Explainer<RegenerationStatusValue> = {
  id: "regeneration-status",
  term: "Regeneration status",
  category: "area",
  description:
    "Where the area sits on its regeneration arc. 'Early' means masterplan announced but little built; 'active' means cranes are up and new phases are landing now; 'phased' means delivery is split across multiple tranches extending years into the future; and 'complete' means the masterplan is done and the area is at its finished shape. This matters because an area still ascending tends to gain amenities, transport, and public realm across your tenancy, whereas a completed area is already at its peak and usually priced accordingly.",
  relevance: (profile, value) => {
    const expiry = new Date(profile.visa_expires).toLocaleDateString("en-GB", {
      month: "long",
      year: "numeric",
    });
    switch (value) {
      case "active":
        return {
          severity: "good",
          message: `Active regeneration means the area is still adding amenities, public realm, and new stock across your tenancy window. This is the sweet spot for you — you get to ride the improvement curve through the ${expiry} visa transition rather than moving into a finished and fully-priced place.`,
        };
      case "phased":
        return {
          severity: "good",
          message: `Phased delivery means investment is still flowing in tranches, likely continuing past your ${expiry} visa transition. Long-term ascending trajectory, which is exactly the T5.3 signal you want — you are moving into something that will be measurably better in 2027 than it is now.`,
        };
      case "early":
        return {
          severity: "warning",
          message: `Early-stage regeneration means the masterplan exists but most of the amenity, retail, and public realm is still on paper. You would be living in a building site for the early part of your tenancy — viable if the price reflects it, but the "15-minute neighbourhood" test will fail until later phases land.`,
        };
      case "complete":
        return {
          severity: "neutral",
          message: `Regeneration is complete. The area is at its finished shape — no construction disruption, but also no further upside to ride. Expect prices to reflect the mature state, and no "it will get better" narrative to lean on.`,
        };
    }
  },
  related: ["grade", "tier"],
};
