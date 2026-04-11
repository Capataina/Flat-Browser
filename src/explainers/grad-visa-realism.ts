import type { Explainer } from "./types";

export type GradVisaRealismValue =
  | "achievable"
  | "achievable-with-upfront"
  | "unlikely"
  | "blocked"
  | "unknown";

export const gradVisaRealism: Explainer<GradVisaRealismValue> = {
  id: "grad-visa-realism",
  term: "Graduate-visa realism",
  category: "rental",
  description:
    "A single derived signal that rolls up every rental-qualification hurdle into one answer: can a graduate-visa renter with no UK credit history, no UK payslips, and a modest upfront budget actually secure this building. This is the headline indicator on every project card, rendered as green / amber / orange / red / grey. It is unique to Flatbrowser — no other property tool surfaces this as a first-class axis — and it exists because almost every other rental dimension is downstream of it for someone in your situation.",
  relevance: (profile, value) => {
    const isGrad = profile.visa_type === "uk-graduate";
    if (!isGrad) {
      return {
        severity: "info",
        message: `This signal is calibrated for Graduate visa holders. It may not reflect your situation precisely.`,
      };
    }
    switch (value) {
      case "achievable":
        return {
          severity: "good",
          message: `Standard referencing route is open to you here — this operator is known or verified to accept graduate-visa renters on normal terms.`,
        };
      case "achievable-with-upfront":
        return {
          severity: "good",
          message: `Reachable via your ${profile.max_upfront_months}-months-upfront route. You will need to lead with the upfront offer rather than trying to pass standard affordability, but the operator is known to accept this bypass.`,
        };
      case "unlikely":
        return {
          severity: "warning",
          message: `Unlikely but not closed. The operator has strict standard referencing and limited flexibility, but some applicants in your position have made it through — worth asking, but do not anchor plans on it.`,
        };
      case "blocked":
        return {
          severity: "blocker",
          message: `Structurally blocked. The operator runs strict income and credit checks with no upfront bypass at a level you can meet. Treat this project as aspirational-only and focus attention elsewhere.`,
        };
      case "unknown":
        return {
          severity: "info",
          message: `Not yet verified. The realism verdict needs a direct policy check — ask the operator about upfront rent, visa expiry handling, and guarantor requirements before spending time on this one.`,
        };
    }
  },
  related: [
    "income-multiple",
    "upfront-acceptance",
    "credit-check",
    "guarantor",
    "visa-friendly",
  ],
};
