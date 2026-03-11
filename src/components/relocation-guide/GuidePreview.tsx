"use client";

import { useEffect } from "react";
import styles from "@/src/components/relocation-guide/guide.module.css";
import { tagCategories, type Establishment } from "@/src/establishments/types";

type GuidePreviewProps = {
  establishment: Establishment;
  onClose: () => void;
};

export default function GuidePreview({
  establishment,
  onClose,
}: GuidePreviewProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      aria-modal="true"
      className={styles.previewOverlay}
      onClick={onClose}
      role="dialog"
    >
      <div
        className={styles.previewPanel}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.previewTop}>
          <div>
            <div className={styles.cardDeveloper}>{establishment.dev}</div>
            <h2 className={styles.previewTitle}>{establishment.name}</h2>
            <div className={styles.cardLocation}>{establishment.loc}</div>
          </div>
          <button
            aria-label={`Close ${establishment.name}`}
            className={styles.previewClose}
            onClick={onClose}
            type="button"
          >
            <span className={styles.previewCloseLine} />
            <span
              className={`${styles.previewCloseLine} ${styles.previewCloseLineAlt}`}
            />
          </button>
        </div>

        <div className={styles.previewMeta}>
          <div className={styles.previewMetaBlock}>
            <div className={styles.projectLabel}>Estimated Age Mix</div>
            <div className={styles.previewPills}>
              {establishment.tags.age.map((ageBand) => (
                <span
                  className={styles.chip}
                  data-category="age"
                  key={`${establishment.id}-${ageBand}`}
                >
                  {ageBand}
                </span>
              ))}
            </div>
            <p className={styles.previewNote}>{establishment.ageNote}</p>
          </div>

          <div
            className={`${styles.previewMetaBlock} ${styles.previewMetaBlockCompact}`}
          >
            <div className={styles.projectLabel}>Place Type</div>
            <div className={styles.previewPills}>
              {establishment.tags.form.map((form) => (
                <span
                  className={styles.chip}
                  data-category="form"
                  key={`${establishment.id}-${form}`}
                >
                  {form}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.previewSection}>
          <div className={styles.projectLabel}>Full Profile</div>
          <p className={styles.cardDescription}>{establishment.desc}</p>
        </div>

        <div className={styles.previewSection}>
          <div className={styles.projectLabel}>Tags</div>
          <div className={styles.cardTags}>
            {tagCategories.flatMap((category) =>
              establishment.tags[category].map((value) => (
                <span
                  className={styles.chip}
                  data-category={category}
                  key={`${establishment.id}-${category}-${value}-preview`}
                >
                  {value}
                </span>
              )),
            )}
          </div>
        </div>

        <div className={`${styles.previewSection} ${styles.previewProjectsSection}`}>
          <div className={styles.projectLabel}>Flagship Developments</div>
          <div className={styles.projectList}>
            {establishment.projects.map((project) => (
              <div className={styles.projectItem} key={project.name}>
                <div className={styles.projectDot} />
                <div className={styles.projectText}>
                  <div className={styles.projectName}>{project.name}</div>
                  <div className={styles.projectNote}>{project.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
