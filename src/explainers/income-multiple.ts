import type { Explainer } from "./types";

export const incomeMultiple: Explainer<number> = {
  id: "income-multiple",
  term: "Income multiple",
  category: "rental",
  description:
    "UK letting agents typically require you to earn at least 30 times the monthly rent in proven annual income before you will pass referencing. This is the standard income test that almost every managed BTR operator runs. The check is done via payslips, employment contracts, and tax records — agents will not accept verbal income claims or overseas earnings without significant additional verification. Under the Renters' Rights Act 2025 (commencing 1 May 2026), the old workaround of bypassing this check with several months' upfront rent is no longer available for assured shorthold tenancies. Applicants who cannot meet the income multiple now need to look at the referencing provider (Homeppl and other Open Banking providers verify income from bank transactions rather than payslips) or professional guarantor services.",
  relevance: (profile, multiple) => {
    const rent = profile.current_rent_monthly;
    const floor = rent * multiple;
    if (!profile.has_uk_payslips) {
      return {
        severity: "blocker",
        message: `${multiple}× monthly means you would need to demonstrate £${floor.toLocaleString()}/year in UK payslips for a £${rent.toLocaleString()}/month flat. You do not currently have UK payslips, so this route is closed via the standard income check. Look at the referencing provider — Homeppl uses Open Banking to verify income from bank transactions instead of payslips. Also check if professional guarantor services are accepted (Housing Hand, Guarantid — typically 3–5% of annual rent).`,
      };
    }
    return {
      severity: "info",
      message: `${multiple}× monthly is the standard UK income multiple. For a £${rent.toLocaleString()}/month flat that is £${floor.toLocaleString()}/year in proven annual income.`,
    };
  },
  related: ["credit-check", "grad-visa-realism"],
};
