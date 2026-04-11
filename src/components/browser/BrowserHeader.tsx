import styles from "./browser.module.css";
import type { BrowserMeta } from "@/src/areas/config";

type BrowserHeaderProps = {
  meta: BrowserMeta;
  totalAreas: number;
  totalProjects: number;
  topGradeCount: number;
  achievableCount: number;
};

export default function BrowserHeader({
  meta,
  totalAreas,
  totalProjects,
  topGradeCount,
  achievableCount,
}: BrowserHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.eyebrow}>{meta.eyebrow}</div>
      <h1 className={styles.title}>
        {meta.title}
        <br />
        <em className={styles.titleAccent}>{meta.accent}</em>
      </h1>
      <p className={styles.headerSub}>{meta.subtitle}</p>
      <div className={styles.headerMeta}>
        <div className={styles.metaItem}>
          <span className={styles.metaValue}>{totalAreas}</span>
          <span className={styles.metaLabel}>Areas</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaValue}>{totalProjects}</span>
          <span className={styles.metaLabel}>Projects</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaValue}>{topGradeCount}</span>
          <span className={styles.metaLabel}>Grade A or above</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaValue}>{achievableCount}</span>
          <span className={styles.metaLabel}>Grad-visa achievable</span>
        </div>
      </div>
    </header>
  );
}
