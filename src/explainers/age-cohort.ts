import type { Explainer } from "./types";
import type { AgeCohort } from "../areas/types";

export const ageCohort: Explainer<AgeCohort> = {
  id: "age-cohort",
  term: "Primary age cohort",
  category: "demographic",
  description:
    "The dominant age group in the area, sourced from Census 2021 ward data. This captures the texture of who else lives here day-to-day: an area dominated by 20–29s feels like a young-professional neighbourhood; 30–39 feels settled early-career; 40–49 trends toward families with school-age children; 50+ trends toward established or retired residents. Daily life feels different in each — the 'who is on the street at 7pm' signal is harder to quantify than rent but easier to feel.",
  relevance: (profile, value) => {
    switch (value) {
      case "18-29":
        return {
          severity: "good",
          message: `Your cohort. At 24, you are squarely in the dominant age group — this is exactly the "I belong here" demographic feel you want after Croydon.`,
        };
      case "30-39":
        return {
          severity: "good",
          message: `Early-career professional dominant. Still comfortably within your comfort zone — mixed with 20s, this is the typical young-London feel.`,
        };
      case "40-49":
        return {
          severity: "warning",
          message: `Dominant cohort is 40–49. Expect more settled family households and fewer people your age on the street. The daily texture will feel less like "my neighbourhood" and more like "someone else's neighbourhood" — a real T2.7 drag.`,
        };
      case "50+":
        return {
          severity: "warning",
          message: `Dominant cohort is 50+. You would be meaningfully out of place demographically — settled and retired households, few young-professional renters. Daily street feel will not match your life stage.`,
        };
    }
  },
  related: [],
};
