import type { Explainer } from "./types";

export const upfrontAcceptance: Explainer<number> = {
  id: "upfront-acceptance",
  term: "Max upfront accepted",
  category: "rental",
  description:
    "The maximum number of months of rent an operator will accept as advance payment. Under the Renters' Rights Act 2025 (commencing 1 May 2026), advance rent for assured shorthold tenancies is capped at one month — the pre-RRA strategy of offering 3–6 months upfront to bypass affordability checks is now illegal for ASTs. This cap does not apply to licence agreements (serviced apartments, apart-hotels, co-living operators on licence terms), where the operator can still accept larger upfront payments. A high upfront_max_months value is therefore only meaningful if the project operates under a licence rather than a tenancy.",
  relevance: (profile, months) => {
    if (months <= 1) {
      return {
        severity: "info",
        message: `This operator accepts at most ${months} month(s) upfront — the legal maximum for tenancies under the Renters' Rights Act. Upfront rent is no longer a referencing bypass for ASTs. You will need to pass referencing directly (ask about Open Banking / Homeppl support) or use a professional guarantor service.`,
      };
    }
    if (months <= profile.max_upfront_months) {
      return {
        severity: "good",
        message: `This operator accepts ${months} months upfront, which is within your ceiling of ${profile.max_upfront_months} months. This is only legal under a licence agreement (not an AST). If confirmed as a licence, this is a viable route — licence-based accommodation is exempt from the RRA advance rent cap.`,
      };
    }
    if (months <= profile.max_upfront_months + 1) {
      return {
        severity: "warning",
        message: `${months} months upfront is one month above your comfortable ceiling of ${profile.max_upfront_months}. This level of upfront is only permissible under a licence agreement. Possibly negotiable down, but confirm the agreement type first — if it is an AST, the operator cannot legally ask for more than 1 month.`,
      };
    }
    return {
      severity: "blocker",
      message: `${months} months upfront means roughly £${(profile.current_rent_monthly * months).toLocaleString()} in a single transfer for a £${profile.current_rent_monthly.toLocaleString()}/month flat. You cap out at ${profile.max_upfront_months} months. This level is only possible under a licence agreement — and even then, it exceeds your budget. For ASTs, the legal cap is 1 month.`,
    };
  },
  related: ["income-multiple", "credit-check", "grad-visa-realism"],
};
