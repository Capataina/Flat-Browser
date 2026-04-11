import type { Explainer } from "./types";

export const epcRating: Explainer<string> = {
  id: "epc-rating",
  term: "EPC rating",
  category: "building",
  description:
    "The Energy Performance Certificate rating measures how efficient a building is at retaining heat and using energy, graded from A (most efficient) down to G (least efficient). It has a direct and measurable effect on your monthly bills: a flat rated A–C is meaningfully cheaper to heat than one rated D–F, and the gap is wider in winter. New-build BTR towers almost always score B or C; older conversions and ex-council stock are often D or worse.",
  relevance: (_profile, value) => {
    // Defensive guard: although ProjectModal currently gates rendering on a
    // truthy epc_rating, the explainer must not throw if a future call site
    // passes null/undefined or a non-string. The cost of defensiveness here
    // is minimal and the cost of an unhandled exception in the personal-
    // relevance pipeline (which renders inside every value box) is high.
    if (typeof value !== "string" || value.trim().length === 0) {
      return {
        severity: "info",
        message: `EPC rating not provided for this building.`,
      };
    }
    const letter = value.trim().charAt(0).toUpperCase();
    if (!letter) {
      return {
        severity: "info",
        message: `EPC rating not provided for this building.`,
      };
    }
    if (letter === "A" || letter === "B") {
      return {
        severity: "good",
        message: `EPC ${letter} is excellent. Expect noticeably lower heating bills than your current Croydon flat, especially in winter months.`,
      };
    }
    if (letter === "C") {
      return {
        severity: "good",
        message: `EPC C is the modern-build baseline and a solid result. Bills should be comparable to or better than your current ~£500/month all-in figure.`,
      };
    }
    if (letter === "D") {
      return {
        severity: "warning",
        message: `EPC D is middling. Heating bills will be higher than a C-rated flat — budget for it, and check whether bills are included in the rent to soften the impact.`,
      };
    }
    return {
      severity: "warning",
      message: `EPC ${letter} is poor. Expect noticeably higher heating bills, which eats into any rent saving — factor this into the total monthly cost comparison.`,
    };
  },
  related: ["thermal-performance", "heating-type"],
};
