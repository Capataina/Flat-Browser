import styles from "./browser.module.css";
import type { Grade } from "@/src/areas/types";

type GradeChipProps = {
  grade: Grade;
  label?: string;
};

export default function GradeChip({ grade, label }: GradeChipProps) {
  return (
    <span className={styles.gradeChip} data-grade={grade} title={label ?? `Grade ${grade}`}>
      {grade}
    </span>
  );
}
