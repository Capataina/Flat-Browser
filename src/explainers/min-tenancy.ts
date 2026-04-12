import type { Explainer } from "./types";

export const minTenancy: Explainer<number> = {
  id: "min-tenancy",
  term: "Minimum tenancy",
  category: "rental",
  description:
    "The shortest tenancy period the operator will offer. Shorter minimums mean less commitment risk and easier exit if the area doesn't work out.",
  relevance: (_profile, value) => {
    if (value <= 1) {
      return {
        severity: "good",
        message: "Maximum flexibility — monthly rolling. You can leave with minimal notice if the area or the flat doesn't work out.",
      };
    }
    if (value <= 3) {
      return {
        severity: "good",
        message: "Short commitment, easy to move on. Three months or less means low lock-in risk while you're still settling into London.",
      };
    }
    if (value <= 6) {
      return {
        severity: "neutral",
        message: "Moderate commitment. Six months is manageable but means you're locked in through a meaningful chunk of your graduate visa window.",
      };
    }
    return {
      severity: "warning",
      message: "Standard AST — 12-month lock-in. A full year ties you to this address for half your remaining visa. Make sure the area is right before committing.",
    };
  },
  related: ["visa-expiry-handling", "grad-visa-realism"],
};
