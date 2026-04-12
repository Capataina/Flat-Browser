import type { Explainer } from "./types";

export const minTenancy: Explainer<number> = {
  id: "min-tenancy",
  term: "Minimum tenancy",
  category: "rental",
  description:
    "The shortest tenancy period the operator will offer. Under the Renters' Rights Act 2025 (commencing 1 May 2026), all assured shorthold tenancies become periodic — rolling monthly with the tenant giving 2 months' notice to leave. Fixed-term ASTs no longer exist, so for AST-based accommodation this field is effectively always 0 (monthly rolling). The minimum tenancy field is primarily meaningful for licence-based accommodation (serviced apartments, apart-hotels, co-living operators on licence terms), where the operator can still contractually set a minimum stay period.",
  relevance: (_profile, value) => {
    if (value <= 1) {
      return {
        severity: "good",
        message:
          "Monthly rolling — maximum flexibility. For an AST this is now the legal default under the Renters' Rights Act (2 months' notice to leave). For a licence agreement, this means the operator has chosen not to impose a minimum stay. Either way, you can move on quickly if the area or flat does not work out.",
      };
    }
    if (value <= 3) {
      return {
        severity: "good",
        message:
          "Short commitment of 3 months or less. If this is an AST, the Renters' Rights Act makes all tenancies periodic regardless — you could leave with 2 months' notice even if the operator quotes a minimum. If this is a licence agreement, the minimum is contractually binding but still low risk.",
      };
    }
    if (value <= 6) {
      return {
        severity: "neutral",
        message:
          "Moderate commitment. If this is an AST, the RRA makes it periodic by law — the operator cannot enforce a fixed term, only the 2-month notice period applies. If this is a licence agreement, 6 months is a real contractual commitment. Confirm the agreement type before treating this as a constraint.",
      };
    }
    return {
      severity: "warning",
      message:
        "Long minimum stay. If this is an AST, the Renters' Rights Act overrides any fixed term — all ASTs are periodic and you can leave with 2 months' notice regardless. If this is a licence agreement, this is a genuine lock-in. Confirm the agreement type — a 12-month minimum only binds you under a licence.",
    };
  },
  related: ["visa-expiry-handling", "grad-visa-realism"],
};
