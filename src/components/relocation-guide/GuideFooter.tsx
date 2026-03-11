import styles from "@/src/components/relocation-guide/guide.module.css";

type GuideFooterProps = {
  note: string;
  totalAreas: number;
  totalProjectsLabel: string;
};

export default function GuideFooter({
  note,
  totalAreas,
  totalProjectsLabel,
}: GuideFooterProps) {
  return (
    <footer className={styles.footer}>
      <span>{note}</span>
      <span>
        {totalAreas} areas - {totalProjectsLabel} developments
      </span>
    </footer>
  );
}
