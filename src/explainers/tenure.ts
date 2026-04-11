import type { Explainer } from "./types";

export type TenureValue = ("rent" | "buy")[];

export const tenure: Explainer<TenureValue> = {
  id: "tenure",
  term: "Tenure",
  category: "rental",
  description:
    "Whether a project is available to rent, to buy, or both. Build-to-rent (BTR) developments are rental-only, owner-lease and build-to-sell schemes are usually purchase-only, and mixed schemes offer both under the same roof. The distinction is load-bearing: a buy-only project is simply not an option for anyone who cannot access a UK mortgage, and mortgage-access hinges on UK credit history, UK income, and lender visa policies.",
  relevance: (profile, value) => {
    const hasRent = value.includes("rent");
    const hasBuy = value.includes("buy");
    if (hasRent) {
      return {
        severity: "good",
        message: `This project is available to rent. Buy is out of reach for you given your visa status and lack of UK credit history, so rental availability is what matters here.`,
      };
    }
    if (hasBuy && !hasRent) {
      return {
        severity: "blocker",
        message: `This project is buy-only. UK mortgages are structurally out of reach on a Graduate visa with no UK credit history and no UK payslips — treat this as not-available to you.`,
      };
    }
    return {
      severity: "info",
      message: `Tenure not specified for this project.`,
    };
  },
  related: ["building-type", "grad-visa-realism"],
};
