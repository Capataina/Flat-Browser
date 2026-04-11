import type { Explainer } from "./types";
import type { TierId } from "../areas/types";

export const tier: Explainer<TierId> = {
  id: "tier",
  term: "Rubric tier",
  category: "rubric",
  description:
    "The Flatbrowser rubric is organised into five tiers, each measuring something distinct. T1 is foundational viability (the hard floor — fail any row and the area is out); T2 is daily life quality (the actual upgrade test, the things you notice every week); T3 is place identity and trajectory (character and sense of place); T4 is premium experience and choice (the trophy overlay, additive not gating); T5 is personal fit and edge differentiators (Caner-specific tiebreakers). The hierarchy is T1 much greater than T2, greater than T3, with T4 and T5 roughly equal.",
  relevance: (_profile, value) => {
    switch (value) {
      case "t1":
        return {
          severity: "info",
          message: `T1 is the hard floor — safety, modern rental stock, connectivity, professional rental market, public realm, and stability. Any T1 failure disqualifies the area outright.`,
        };
      case "t2":
        return {
          severity: "info",
          message: `T2 is the upgrade test — walkable essentials, food quality, real gym access, green space, quiet at night, building quality, and a young-professional demographic skew. This is where "is this actually better than Croydon" gets answered.`,
        };
      case "t3":
        return {
          severity: "info",
          message: `T3 is the character test — active regeneration, cultural anchor, recognisable identity, 15-minute completeness, architectural quality, and day-night activity rhythm. Catches the "functional but soulless" failure mode.`,
        };
      case "t4":
        return {
          severity: "info",
          message: `T4 is the trophy overlay — premium amenity packages, choice of operators, destination retail, signature architecture, and market validation. Additive only; a weak T4 does not disqualify a strong T1–T3 area.`,
        };
      case "t5":
        return {
          severity: "info",
          message: `T5 is the tiebreaker tier — multi-cluster commute coverage, transport redundancy, long-term ascending trajectory, and quiet third spaces. Specific to your situation: job uncertainty, visa transition window, and reading as a daily practice.`,
        };
    }
  },
  related: ["grade", "criterion-status"],
};
