import type { RefCallback } from "react";
import styles from "@/src/components/relocation-guide/guide.module.css";
import { tagCategories, type Establishment } from "@/src/establishments/types";

type GuideCardProps = {
  establishment: Establishment;
  isOpen: boolean;
  onToggle: () => void;
  cardRef?: RefCallback<HTMLElement>;
  animationDelay: string;
};

export default function GuideCard({
  establishment,
  isOpen,
  onToggle,
  cardRef,
  animationDelay,
}: GuideCardProps) {
  return (
    <article
      className={`${styles.card} ${isOpen ? styles.cardOpen : ""}`}
      ref={cardRef}
      style={{ animationDelay }}
    >
      <button
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className={styles.cardTrigger}
        onClick={onToggle}
        type="button"
      >
        <div className={styles.cardTop}>
          <div className={styles.cardRow}>
            <span aria-hidden="true" className={styles.cardIcon}>
              <span className={styles.cardIconLine} />
              <span
                className={`${styles.cardIconLine} ${styles.cardIconLineVertical}`}
              />
            </span>
          </div>
          <div className={styles.cardDeveloper}>{establishment.dev}</div>
          <div className={styles.cardName}>{establishment.name}</div>
          <div className={styles.cardLocation}>{establishment.loc}</div>
          <div className={styles.cardPreview}>{establishment.preview}</div>
        </div>
      </button>

      <div className={styles.cardTags}>
        {tagCategories.flatMap((category) =>
          establishment.tags[category].map((value) => (
            <span
              className={styles.chip}
              data-category={category}
              key={`${establishment.id}-${category}-${value}`}
            >
              {value}
            </span>
          )),
        )}
      </div>
    </article>
  );
}
