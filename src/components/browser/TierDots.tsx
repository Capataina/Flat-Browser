import styles from "./browser.module.css";
import type { TierEvaluation, TierId } from "@/src/areas/types";

type TierDotsProps = {
  tier: TierId;
  evaluation: TierEvaluation;
};

const TIER_LABELS: Record<TierId, string> = {
  t1: "T1",
  t2: "T2",
  t3: "T3",
  t4: "T4",
  t5: "T5",
};

const SCORE_TO_DOTS: Record<TierEvaluation["tier_score"], number> = {
  fail: 1,
  weak: 2,
  moderate: 3,
  good: 4,
  strong: 5,
};

export default function TierDots({ tier, evaluation }: TierDotsProps) {
  const filled = SCORE_TO_DOTS[evaluation.tier_score];
  return (
    <div className={styles.tierDotsRow}>
      <span className={styles.tierDotsLabel}>{TIER_LABELS[tier]}</span>
      <span className={styles.tierDots}>
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`${styles.tierDot} ${i <= filled ? styles.tierDotFilled : ""}`}
            data-tier={tier}
          />
        ))}
      </span>
    </div>
  );
}
