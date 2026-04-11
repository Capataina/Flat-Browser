import styles from "./browser.module.css";

type BrowserFooterProps = {
  note: string;
  totalAreas: number;
  totalProjects: number;
};

export default function BrowserFooter({ note, totalAreas, totalProjects }: BrowserFooterProps) {
  return (
    <footer className={styles.footer}>
      <span>{note}</span>
      <span>
        {totalAreas} areas · {totalProjects} projects
      </span>
    </footer>
  );
}
