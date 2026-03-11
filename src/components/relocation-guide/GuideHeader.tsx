import styles from "@/src/components/relocation-guide/guide.module.css";

type GuideHeaderProps = {
  eyebrow: string;
  title: string;
  accent: string;
  subtitle: string;
  totalAreas: number;
  totalProjectsLabel: string;
  totalTagTypes: number;
};

export default function GuideHeader({
  eyebrow,
  title,
  accent,
  subtitle,
  totalAreas,
  totalProjectsLabel,
  totalTagTypes,
}: GuideHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.eyebrow}>{eyebrow}</div>
      <h1 className={styles.title}>
        {title}
        <br />
        <em className={styles.titleAccent}>{accent}</em>
      </h1>
      <p className={styles.headerSub}>{subtitle}</p>
      <div className={styles.headerMeta}>
        <div className={styles.metaItem}>
          <span className={styles.metaValue}>{totalAreas}</span>
          <span className={styles.metaLabel}>Areas</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaValue}>{totalProjectsLabel}</span>
          <span className={styles.metaLabel}>Developments</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaValue}>{totalTagTypes}</span>
          <span className={styles.metaLabel}>Tag Types</span>
        </div>
      </div>
    </header>
  );
}
