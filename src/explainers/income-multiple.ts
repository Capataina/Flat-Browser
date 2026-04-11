import type { Explainer } from "./types";

export const incomeMultiple: Explainer<number> = {
  id: "income-multiple",
  term: "Income multiple",
  category: "rental",
  description:
    "UK letting agents typically require you to earn at least 30 times the monthly rent in proven annual income before you'll pass referencing. This is the standard income test that almost every managed BTR operator runs. The check is done via payslips, employment contracts, and tax records — agents will not accept verbal income claims or overseas earnings without significant additional verification.",
  relevance: (profile, multiple) => {
    const rent = profile.current_rent_monthly;
    const floor = rent * multiple;
    if (!profile.has_uk_payslips) {
      return {
        severity: "blocker",
        message: `${multiple}× monthly means you would need to demonstrate £${floor.toLocaleString()}/year in UK payslips for a £${rent.toLocaleString()}/month flat. You do not currently have UK payslips, so this route is closed via the standard income check. Look at "max upfront accepted" instead — that is the workaround that exists for renters in your position.`,
      };
    }
    return {
      severity: "info",
      message: `${multiple}× monthly is the standard UK income multiple. For a £${rent.toLocaleString()}/month flat that is £${floor.toLocaleString()}/year in proven annual income.`,
    };
  },
  related: ["upfront-acceptance", "credit-check", "grad-visa-realism"],
};
