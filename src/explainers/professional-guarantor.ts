import type { Explainer } from "./types";

export const professionalGuarantor: Explainer<boolean> = {
  id: "professional-guarantor",
  term: "Professional guarantor accepted",
  category: "rental",
  description:
    "Whether the operator accepts professional guarantor services — companies like Housing Hand and Guarantid that act as your guarantor in exchange for a fee. Professional guarantors underwrite your rent: if you default, the guarantor pays the landlord and then pursues you for the debt. The fee is typically 3–5% of the annual rent (so roughly £1,000–£1,800 on a £2,000/month flat). This is a viable alternative route when you cannot pass standard referencing — you do not need a UK-based personal guarantor, and the service handles the credit check internally.",
  relevance: (_profile, value) => {
    if (value) {
      return {
        severity: "good",
        message: `Alternative route if referencing fails — a third party guarantees your rent for a fee.`,
      };
    }
    return {
      severity: "neutral",
      message: `Not accepted — you need to pass referencing directly or find another route.`,
    };
  },
  related: ["grad-visa-realism", "credit-check", "referencing-provider", "guarantor"],
};
