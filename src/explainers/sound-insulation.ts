import type { Explainer } from "./types";
import type { Quality } from "../areas/types";

export const soundInsulation: Explainer<Quality> = {
  id: "sound-insulation",
  term: "Sound insulation",
  category: "building",
  description:
    "How well the building blocks noise between flats, from above, below, and neighbouring walls. Modern BTR towers typically use concrete slabs and acoustic underlay; older conversions and some cheaper new-build stock rely on thin timber joists and plasterboard. Poor sound insulation is one of the single most common resident complaints in BTR reviews and has an outsized effect on daily quality of life — you hear it every evening, not just during loud events.",
  relevance: (profile, value) => {
    const quiet = profile.noise_tolerance === "low";
    switch (value) {
      case "excellent":
        return {
          severity: "good",
          message: quiet
            ? `Excellent sound insulation is what you need — your noise tolerance is low, so this is a meaningful quality-of-life win over most of the stock.`
            : `Excellent sound insulation — one of the most-praised qualities in building reviews.`,
        };
      case "good":
        return {
          severity: "good",
          message: `Good sound insulation is above the modern baseline. Occasional noise bleed but not a daily irritation.`,
        };
      case "average":
        return quiet
          ? {
              severity: "warning",
              message: `Average sound insulation means you will hear neighbours regularly. Your noise tolerance is low, so this is worth flagging — check resident reviews for specific complaints about noise bleed before committing.`,
            }
          : {
              severity: "info",
              message: `Average sound insulation — standard for most modern stock.`,
            };
      case "poor":
        return {
          severity: "warning",
          message: quiet
            ? `Poor sound insulation is a real daily problem for you specifically — your noise tolerance is low, and buildings with this flag almost always show up in reviews as "you hear everything". Avoid unless there is a strong reason to accept it.`
            : `Poor sound insulation is a frequent complaint in resident reviews — you will hear neighbours regularly.`,
        };
      case "unknown":
        return {
          severity: "info",
          message: `Sound insulation quality not verified. Worth checking resident reviews on Homeviews for "noise", "hear neighbours", or "thin walls".`,
        };
    }
  },
  related: ["building-type", "epc-rating"],
};
