import type { Explainer } from "./types";
import type { CriterionScore } from "../areas/types";

export type CriterionStatusValue = CriterionScore["status"];

export const criterionStatus: Explainer<CriterionStatusValue> = {
  id: "criterion-status",
  term: "Criterion status",
  category: "rubric",
  description:
    "The verdict on a single rubric row: pass, partial, fail, or unknown. 'Pass' means the area clearly meets the criterion; 'partial' means it meets it with caveats worth reading; 'fail' means it does not; and 'unknown' means the row has not yet been verified against sources. T1 failures are disqualifying; T2–T5 failures are weighted against the rest of the rubric rather than being absolute.",
  relevance: (_profile, value) => {
    switch (value) {
      case "pass":
        return {
          severity: "good",
          message: `This criterion clearly passes — the area meets the bar without meaningful caveats.`,
        };
      case "partial":
        return {
          severity: "warning",
          message: `Partial pass. The area meets the bar with caveats — read the reasoning to see whether the weakness matters for your specific situation.`,
        };
      case "fail":
        return {
          severity: "blocker",
          message: `This criterion fails. If it is a T1 row, the area should be excluded outright; if T2 or lower, weigh it against the rest of the rubric before deciding.`,
        };
      case "unknown":
        return {
          severity: "info",
          message: `Not yet verified. The rubric row has no sourced answer yet — treat the overall grade as provisional until this gets checked.`,
        };
    }
  },
  related: ["grade", "tier"],
};
