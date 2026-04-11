import type { Explainer } from "./types";
import type { Grade } from "../areas/types";

export const grade: Explainer<Grade> = {
  id: "grade",
  term: "Overall grade",
  category: "rubric",
  description:
    "A single-letter verdict rolling up every tier of the Flatbrowser rubric into one grade, from SS (exceptional, all tiers strong) down to F (avoid). SS and S are the standouts; A and B are solid upgrades from Croydon with different strengths; C is borderline — technically eligible but weak on one or more daily-life dimensions — and F means the area fails a foundational T1 criterion and should not be considered. Grades are area-level or project-level depending on where you see them rendered.",
  relevance: (_profile, value) => {
    switch (value) {
      case "SS":
        return {
          severity: "good",
          message: `SS is the top grade — exceptional across every tier. This is a flagship target: if the rental realism also clears, this is one of the best possible upgrades from Croydon.`,
        };
      case "S":
        return {
          severity: "good",
          message: `S-grade. Strong across every tier with only minor weaknesses, and a clear upgrade from Croydon on the things you actually notice every day.`,
        };
      case "A":
        return {
          severity: "good",
          message: `A-grade. Solidly above the upgrade-from-Croydon bar with at least one genuine strength. Worth a deep look as long as the rental qualification route is viable.`,
        };
      case "B":
        return {
          severity: "info",
          message: `B-grade. Meets the upgrade bar but with visible soft spots — read the tier breakdowns to see which daily-life dimensions are weaker and whether they matter for you.`,
        };
      case "C":
        return {
          severity: "warning",
          message: `C-grade is borderline. Technically passes T1 but fails multiple T2 rows — "eligible but not really an upgrade". Only worth the move if one specific strength compensates for the weak daily-life texture.`,
        };
      case "F":
        return {
          severity: "blocker",
          message: `F means the area fails a foundational T1 criterion — usually safety, connectivity, or rental market viability. Not an upgrade from Croydon by definition; exclude from the shortlist.`,
        };
    }
  },
  related: ["tier", "criterion-status"],
};
