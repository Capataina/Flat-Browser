import type { Explainer } from "./types";
import type { Quality } from "../areas/types";

export const kitchenQuality: Explainer<Quality> = {
  id: "kitchen-quality",
  term: "Kitchen quality",
  category: "building",
  description:
    "How well the kitchen supports real cooking, not just reheating. This covers worktop space, oven and hob quality, extraction, fridge size, storage depth, and whether the layout supports a meal that involves more than one pan. A lot of modern BTR stock ships with small kitchenettes designed around the assumption that residents order in — they look clean in photographs but are frustrating the first time you try to prep a proper meal.",
  relevance: (profile, value) => {
    if (!profile.cooks_regularly) {
      return {
        severity: "info",
        message: `Kitchen quality is less load-bearing for you than for regular cooks.`,
      };
    }
    switch (value) {
      case "excellent":
        return {
          severity: "good",
          message: `Excellent kitchen — worth the upgrade. You cook regularly and the kitchen is one of the things you would notice every day, so this is a material improvement over a token kitchenette.`,
        };
      case "good":
        return {
          severity: "good",
          message: `Good kitchen. Workable for regular cooking and proper meal prep — above the BTR baseline.`,
        };
      case "average":
        return {
          severity: "info",
          message: `Average kitchen. Functional for regular cooking but nothing special — acceptable if everything else is right.`,
        };
      case "poor":
        return {
          severity: "warning",
          message: `Poor kitchen is a real daily friction for you — you cook regularly, and small BTR kitchenettes designed around takeaway culture will bite you every time you try to make a proper meal. Downgrade this project unless the rest of the package is exceptional.`,
        };
      case "unknown":
        return {
          severity: "info",
          message: `Kitchen quality not verified. Check floor plans for worktop length and oven size, or look at resident reviews for mentions of "small kitchen" or "no storage".`,
        };
    }
  },
  related: ["building-type"],
};
