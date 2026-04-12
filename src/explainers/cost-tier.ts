import type { Explainer } from "./types";

export type CostTierValue = "budget" | "affordable" | "mid-range" | "premium" | "luxury";

export const costTier: Explainer<CostTierValue> = {
  id: "cost-tier",
  term: "Cost tier",
  category: "rental",
  description:
    "Relative cost positioning among London rental projects, from budget to luxury. Based on monthly rent for a studio or one-bed compared to the London managed-rental average.",
  relevance: (_profile, value) => {
    switch (value) {
      case "budget":
        return {
          severity: "good",
          message: "Well within your budget ceiling. The lowest cost tier — leaves significant headroom below your current Croydon spend.",
        };
      case "affordable":
        return {
          severity: "good",
          message: "Well within your budget ceiling. Below the London managed-rental average, comfortably under your current Croydon baseline.",
        };
      case "mid-range":
        return {
          severity: "neutral",
          message: "London average for managed rental. Comparable to your current Croydon spend — no savings, but no stretch either.",
        };
      case "premium":
        return {
          severity: "warning",
          message: "Above your current Croydon baseline. Premium pricing that may stretch your budget, especially without a confirmed salary.",
        };
      case "luxury":
        return {
          severity: "warning",
          message: "Significantly above your current spend. Luxury-tier pricing that is unlikely to be viable on a graduate-visa budget without substantial savings.",
        };
    }
  },
  related: ["income-multiple", "upfront-acceptance"],
};
