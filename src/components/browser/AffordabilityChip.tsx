import styles from "./browser.module.css";
import type { AffordabilityTag } from "@/src/areas/types";

type AffordabilityChipProps = {
  affordability: AffordabilityTag;
  showLabel?: boolean;
};

const LABELS: Record<AffordabilityTag, string> = {
  "well-under-budget": "Well under",
  "comfortably-affordable": "Affordable",
  "at-budget": "At budget",
  stretch: "Stretch",
  "over-budget": "Over budget",
  unclear: "Price unclear",
};

const FULL_LABELS: Record<AffordabilityTag, string> = {
  "well-under-budget":
    "Clearly below envelope with meaningful headroom — one of the cheapest on a like-for-like basis",
  "comfortably-affordable":
    "Within envelope with genuine headroom — the default target band",
  "at-budget": "Right at the envelope — works but no room for volatility",
  stretch: "Above envelope but defensible in specific scenarios",
  "over-budget":
    "Clearly above envelope — not realistic without a materially different budget",
  unclear:
    "Pricing too volatile or unverified to place on the scale — enquire first",
};

export default function AffordabilityChip({
  affordability,
  showLabel = true,
}: AffordabilityChipProps) {
  return (
    <span
      className={styles.affordabilityChip}
      data-affordability={affordability}
      title={FULL_LABELS[affordability]}
    >
      {showLabel ? LABELS[affordability] : null}
    </span>
  );
}
