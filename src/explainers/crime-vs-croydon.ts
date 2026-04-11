import type { Explainer } from "./types";

export type CrimeVsCroydonValue = "much-safer" | "safer" | "similar" | "worse";

export const crimeVsCroydon: Explainer<CrimeVsCroydonValue> = {
  id: "crime-vs-croydon",
  term: "Crime vs Croydon",
  category: "area",
  description:
    "A direct comparison between this area's crime profile and Croydon's, using Met Police ward-level statistics. Much-safer areas have meaningfully lower violent and acquisitive crime rates than your current ward. Safer areas are a real but smaller improvement. Similar means parity, and worse means the move would be a downgrade on the safety axis specifically — the one thing you explicitly want to move away from.",
  relevance: (_profile, value) => {
    switch (value) {
      case "much-safer":
        return {
          severity: "good",
          message: `Much safer than your current Croydon ward. This is a direct hit on the single biggest reason you want to leave — the move earns its keep on safety alone.`,
        };
      case "safer":
        return {
          severity: "good",
          message: `Safer than Croydon. Real improvement on the axis that matters most for the move.`,
        };
      case "similar":
        return {
          severity: "blocker",
          message: `Crime rates similar to Croydon defeat the point of moving. You are paying moving costs and a rent premium explicitly to feel safer — parity on crime means the upgrade has to come entirely from other axes, which rarely justifies the disruption.`,
        };
      case "worse":
        return {
          severity: "blocker",
          message: `Worse than Croydon on crime is a hard exclusion. The whole move is driven by safety upgrade — this is a strict T1 failure.`,
        };
    }
  },
  related: ["safety-overall"],
};
