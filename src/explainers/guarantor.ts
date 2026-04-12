import type { Explainer } from "./types";

export const guarantor: Explainer<boolean> = {
  id: "guarantor",
  term: "Guarantor acceptable",
  category: "rental",
  description:
    "Whether the operator accepts a guarantor to satisfy referencing requirements. There are two types: a personal guarantor (a UK-resident individual — usually a parent or close relative — with strong UK income who legally agrees to cover the rent) and professional guarantor services (Housing Hand, Guarantid, and similar companies that act as guarantor for a fee, typically 3–5% of annual rent). Professional guarantor services are one of the three main post-RRA routes for applicants without UK credit history or payslips, alongside Open Banking referencing and licence-based accommodation.",
  relevance: (profile, accepted) => {
    if (!accepted) {
      return {
        severity: "warning",
        message: `This operator does not accept guarantors as a referencing bypass. Your remaining routes are: pass referencing directly (ask about Open Banking / Homeppl support), or look for licence-based accommodation where the operator sets their own terms.`,
      };
    }
    if (profile.has_uk_guarantor) {
      return {
        severity: "good",
        message: `The operator accepts guarantors and you have a UK-based guarantor available — this is a strong referencing route for you.`,
      };
    }
    return {
      severity: "neutral",
      message: `The operator accepts guarantors, but you do not have a UK-resident personal guarantor. However, this means professional guarantor services (Housing Hand, Guarantid — typically 3–5% of annual rent) should also be accepted. This is a viable route — it adds cost but bypasses the credit check and income multiple requirements.`,
    };
  },
  related: ["income-multiple", "credit-check", "grad-visa-realism"],
};
