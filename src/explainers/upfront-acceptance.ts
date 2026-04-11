import type { Explainer } from "./types";

export const upfrontAcceptance: Explainer<number> = {
  id: "upfront-acceptance",
  term: "Max upfront accepted",
  category: "rental",
  description:
    "The maximum number of months of rent a letting agent or BTR operator will accept as a single lump-sum payment in place of standard affordability referencing. This is the established workaround for applicants who cannot pass the 30× income check or who have no UK credit history. Operators that cap this low (2–3 months) are the only realistic route for graduate-visa renters without payslips; operators that only accept 6 or 12 months upfront effectively exclude anyone who cannot park tens of thousands of pounds in a single transfer.",
  relevance: (profile, months) => {
    if (months <= profile.max_upfront_months) {
      return {
        severity: "good",
        message: `This operator accepts ${months} months upfront, which is within your ceiling of ${profile.max_upfront_months} months. This is the exact bypass you used to secure Ten Degrees — viable route.`,
      };
    }
    if (months <= profile.max_upfront_months + 1) {
      return {
        severity: "warning",
        message: `${months} months upfront is one month above your comfortable ceiling of ${profile.max_upfront_months}. Possibly negotiable, but do not assume — this is borderline for your cash position.`,
      };
    }
    return {
      severity: "blocker",
      message: `${months} months upfront means roughly £${(profile.current_rent_monthly * months).toLocaleString()} in a single transfer for a £${profile.current_rent_monthly.toLocaleString()}/month flat. You cap out at ${profile.max_upfront_months} months, so this route is closed unless the operator is willing to negotiate down.`,
    };
  },
  related: ["income-multiple", "credit-check", "grad-visa-realism"],
};
