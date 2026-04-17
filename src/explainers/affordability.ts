import type { Explainer } from "./types";

export type AffordabilityValue =
  | "well-under-budget"
  | "comfortably-affordable"
  | "at-budget"
  | "stretch"
  | "over-budget"
  | "unclear";

export const affordability: Explainer<AffordabilityValue> = {
  id: "affordability",
  term: "Affordability",
  category: "rental",
  description:
    "How this project sits against your monthly rent envelope (≤£2,250/month without bills, ≤£2,750/month all-in). Distinct from cost tier — cost tier is relative to the dataset; affordability is relative to your actual budget ceiling. The tag is assigned by research agents comparing across the dataset, so 'comfortably affordable' means it is both within your envelope AND cheaper than a meaningful share of the alternatives — not just below the number.",
  relevance: (_profile, value) => {
    switch (value) {
      case "well-under-budget":
        return {
          severity: "good",
          message:
            "Clearly below your envelope with meaningful headroom — among the cheapest options on a like-for-like unit-and-bills basis. Room for bills volatility, deposit, or a better unit.",
        };
      case "comfortably-affordable":
        return {
          severity: "good",
          message:
            "Within your envelope with genuine headroom. Not the absolute cheapest, but comfortably below the ceiling — the default target band.",
        };
      case "at-budget":
        return {
          severity: "neutral",
          message:
            "Right at your envelope. Works but leaves no room — any unexpected cost (higher bills month, service-charge uplift, moving fees) pushes it over. Budget carefully.",
        };
      case "stretch":
        return {
          severity: "warning",
          message:
            "Above your envelope but defensible in some scenarios — exceptional amenity, prime location, short bridge stay, or bills-included offsets. Not a default choice; needs a specific reason.",
        };
      case "over-budget":
        return {
          severity: "blocker",
          message:
            "Clearly above your envelope. Not realistic without a materially different budget or external subsidy. Kept in the dataset for comparison and future reference.",
        };
      case "unclear":
        return {
          severity: "info",
          message:
            "Pricing is too volatile or unverified to place definitively — enquire-only operator, wide-range quote, or stale data. Resolve with a direct enquiry before shortlisting.",
        };
    }
  },
  related: ["cost-tier", "price-transparency", "income-multiple"],
};
