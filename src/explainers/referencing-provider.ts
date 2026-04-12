import type { Explainer } from "./types";

export type ReferencingProviderValue =
  | "homeppl"
  | "goodlord"
  | "canopy"
  | "in-house"
  | "none"
  | "unknown";

export const referencingProvider: Explainer<ReferencingProviderValue> = {
  id: "referencing-provider",
  term: "Referencing provider",
  category: "rental",
  description:
    "The third-party referencing provider the operator uses to verify prospective tenants. Referencing providers differ significantly in how they assess income and creditworthiness. Traditional providers like Goodlord rely on UK credit checks and payslips — difficult for international tenants. Open Banking providers like Homeppl verify income directly from bank transactions, bypassing the UK credit history requirement entirely. The choice of referencing provider is often the single biggest determinant of whether a graduate-visa renter can pass the operator's affordability gate.",
  relevance: (_profile, value) => {
    switch (value) {
      case "homeppl":
        return {
          severity: "good",
          message: `Uses Open Banking — works for you without UK payslips or credit history.`,
        };
      case "none":
        return {
          severity: "good",
          message: `No referencing — just pay and move in.`,
        };
      case "canopy":
        return {
          severity: "neutral",
          message: `Runs credit check but also uses Open Banking — may work.`,
        };
      case "goodlord":
        return {
          severity: "warning",
          message: `Standard UK credit check — unlikely to work without UK credit history.`,
        };
      case "in-house":
        return {
          severity: "neutral",
          message: `Contact directly — the operator runs their own referencing and requirements vary.`,
        };
      case "unknown":
        return {
          severity: "neutral",
          message: `Referencing provider not yet verified. Ask the operator which referencing service they use before applying.`,
        };
    }
  },
  related: ["credit-check", "grad-visa-realism", "agreement-type"],
};
