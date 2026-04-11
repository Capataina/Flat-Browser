import type { Explainer } from "./types";

export type CreditCheckValue =
  | "strict"
  | "standard"
  | "lenient"
  | "skipped-with-upfront";

export const creditCheck: Explainer<CreditCheckValue> = {
  id: "credit-check",
  term: "Credit check",
  category: "rental",
  description:
    "UK rental applications almost always involve a credit history check run against one of the major referencing agencies (HomeLet, Goodlord, Canopy). A strict check expects a clean multi-year UK credit file; a standard check is the same test with slightly more tolerance; a lenient check is more forgiving and may accept thin files; and some operators skip the credit check entirely if you pay several months of rent upfront. Operators that won't skip for anyone are a hard wall for applicants with no UK credit history.",
  relevance: (profile, value) => {
    if (profile.has_uk_credit_history) {
      return {
        severity: "info",
        message: `${value} credit checks are manageable if you already have a clean UK credit file.`,
      };
    }
    switch (value) {
      case "skipped-with-upfront":
        return {
          severity: "good",
          message: `Credit check is waived in exchange for upfront rent. This is the exact route you took for Ten Degrees and the one realistic path for you — you can offer your ${profile.max_upfront_months} months upfront as the bypass.`,
        };
      case "lenient":
        return {
          severity: "warning",
          message: `A lenient credit check still runs against your file. You have no UK credit history yet, so "lenient" usually means "we will look at other signals" — worth asking the operator explicitly whether upfront rent is an accepted substitute.`,
        };
      case "standard":
      case "strict":
        return {
          severity: "warning",
          message: `A ${value} credit check assumes a multi-year UK credit file, which you do not have yet. Expect this to fail on the standard route — your only realistic bypass is offering ${profile.max_upfront_months} months upfront and hoping the operator will waive the check.`,
        };
    }
  },
  related: ["upfront-acceptance", "income-multiple", "grad-visa-realism"],
};
