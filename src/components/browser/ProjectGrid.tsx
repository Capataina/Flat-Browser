"use client";

import styles from "./browser.module.css";
import type { Area, Project } from "@/src/areas/types";
import ProjectCard from "./ProjectCard";

type ProjectGridProps = {
  entries: Array<{ project: Project; area: Area }>;
  onOpenProject: (area: Area, project: Project) => void;
};

/**
 * Flattened project grid — renders every project that passes the current
 * filter state as a ProjectCard, with the parent area surfaced as a subline
 * on each card. Clicking a card opens the project modal directly (no
 * intermediate area modal).
 */
export default function ProjectGrid({ entries, onOpenProject }: ProjectGridProps) {
  if (entries.length === 0) {
    return (
      <div className={styles.noResults}>No projects match the current filters.</div>
    );
  }

  return (
    <div className={styles.projectGrid}>
      {entries.map(({ project, area }, index) => (
        <div
          key={`${area.id}-${project.id}`}
          className={styles.projectGridItem}
          style={{ animationDelay: `${0.03 + index * 0.02}s` }}
        >
          <ProjectCard
            project={project}
            area={area}
            onOpen={() => onOpenProject(area, project)}
          />
        </div>
      ))}
    </div>
  );
}
