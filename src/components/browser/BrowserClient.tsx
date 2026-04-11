"use client";

import { useCallback, useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import styles from "./browser.module.css";
import type {
  Area,
  AgeCohort,
  BuildingType,
  GradVisaRealism,
  Grade,
  Project,
  SortMode,
  TfLZone,
  AreaRegeneration,
} from "@/src/areas/types";
import { browserMeta } from "@/src/areas/config";
import {
  areaPasses,
  createInitialFilterState,
  formatCount,
  getProjectCount,
  hasAnyActiveFilters,
  setBooleanFilter,
  setNumberFilter,
  setQuery,
  sortAreas,
  toggleSetFilter,
} from "@/src/areas/filtering";
import AreaCard from "./AreaCard";
import AreaModal from "./AreaModal";
import BrowserFilterBar from "./BrowserFilterBar";
import BrowserFooter from "./BrowserFooter";
import BrowserHeader from "./BrowserHeader";
import ProjectModal from "./ProjectModal";

type BrowserClientProps = {
  areas: Area[];
};

export default function BrowserClient({ areas }: BrowserClientProps) {
  const [filters, setFilters] = useState(() => createInitialFilterState());
  const [sortMode, setSortMode] = useState<SortMode>("area-grade");
  const [openAreaId, setOpenAreaId] = useState<string | null>(null);
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const deferredFilters = useDeferredValue(filters);

  const filtered = useMemo(
    () => areas.filter((a) => areaPasses(a, deferredFilters)),
    [areas, deferredFilters],
  );
  const sorted = useMemo(() => sortAreas(filtered, sortMode), [filtered, sortMode]);

  const totalProjects = useMemo(() => getProjectCount(areas), [areas]);
  const topGradeCount = useMemo(
    () =>
      areas.filter((a) =>
        ["SS", "S", "A"].includes(a.evaluation.overall_grade),
      ).length,
    [areas],
  );
  const achievableCount = useMemo(
    () =>
      areas.reduce(
        (sum, a) =>
          sum +
          a.projects.filter((p) =>
            ["achievable", "achievable-with-upfront"].includes(
              p.rental.qualification.grad_visa_realism,
            ),
          ).length,
        0,
      ),
    [areas],
  );

  const openArea = openAreaId ? areas.find((a) => a.id === openAreaId) ?? null : null;
  const openProject =
    openArea && openProjectId
      ? openArea.projects.find((p) => p.id === openProjectId) ?? null
      : null;

  const hasActive = hasAnyActiveFilters(filters);

  // ── Keyboard shortcuts ───────────────────────────────────────────
  // / focuses search, Escape closes modals (handled in modals themselves),
  // ← / → navigate between areas in the grid when no modal is open.
  const navigateArea = useCallback(
    (direction: 1 | -1) => {
      if (sorted.length === 0) return;
      if (openAreaId == null) {
        const next = direction === 1 ? sorted[0] : sorted[sorted.length - 1];
        setOpenAreaId(next.id);
        setOpenProjectId(null);
        return;
      }
      const idx = sorted.findIndex((a) => a.id === openAreaId);
      if (idx === -1) return;
      const nextIdx = (idx + direction + sorted.length) % sorted.length;
      setOpenAreaId(sorted[nextIdx].id);
      setOpenProjectId(null);
    },
    [openAreaId, sorted],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Don't intercept when typing into an input/textarea/contenteditable
      const target = e.target as HTMLElement | null;
      const isTyping =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if (e.key === "/" && !isTyping) {
        e.preventDefault();
        searchInputRef.current?.focus();
        return;
      }
      if (e.key === "ArrowRight" && !isTyping && openProjectId == null) {
        e.preventDefault();
        navigateArea(1);
        return;
      }
      if (e.key === "ArrowLeft" && !isTyping && openProjectId == null) {
        e.preventDefault();
        navigateArea(-1);
        return;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigateArea, openProjectId]);

  return (
    <div className={styles.page}>
      <BrowserHeader
        meta={browserMeta}
        totalAreas={areas.length}
        totalProjects={totalProjects}
        topGradeCount={topGradeCount}
        achievableCount={achievableCount}
      />

      <BrowserFilterBar
        state={filters}
        onToggleZone={(z: TfLZone) => setFilters((s) => toggleSetFilter(s, "zones", z))}
        onToggleAge={(a: AgeCohort) =>
          setFilters((s) => toggleSetFilter(s, "primary_age_cohorts", a))
        }
        onToggleAreaGrade={(g: Grade) =>
          setFilters((s) => toggleSetFilter(s, "area_grades", g))
        }
        onToggleProjectGrade={(g: Grade) =>
          setFilters((s) => toggleSetFilter(s, "project_grades", g))
        }
        onToggleRegeneration={(r: AreaRegeneration["status"]) =>
          setFilters((s) => toggleSetFilter(s, "regeneration_status", r))
        }
        onToggleTenure={(t: "rent" | "buy") => setFilters((s) => toggleSetFilter(s, "tenure", t))}
        onToggleBuildingType={(b: BuildingType) =>
          setFilters((s) => toggleSetFilter(s, "building_types", b))
        }
        onToggleRealism={(r: GradVisaRealism) =>
          setFilters((s) => toggleSetFilter(s, "grad_visa_realism", r))
        }
        onToggleHasRiver={() =>
          setFilters((s) => setBooleanFilter(s, "has_river", !s.has_river as never))
        }
        onToggleHasCanal={() =>
          setFilters((s) => setBooleanFilter(s, "has_canal", !s.has_canal as never))
        }
        onToggleHasDock={() =>
          setFilters((s) => setBooleanFilter(s, "has_dock", !s.has_dock as never))
        }
        onToggleHasPool={() =>
          setFilters((s) => setBooleanFilter(s, "has_pool", !s.has_pool as never))
        }
        onToggleHasConcierge={() =>
          setFilters((s) => setBooleanFilter(s, "has_concierge", !s.has_concierge as never))
        }
        onSetMultiClusterMin={(n: number) =>
          setFilters((s) => setNumberFilter(s, "multi_cluster_min", n as never))
        }
        onQueryChange={(q: string) => setFilters((s) => setQuery(s, q))}
        onClear={() => setFilters(createInitialFilterState())}
        sortMode={sortMode}
        onSortChange={setSortMode}
        resultsCount={sorted.length}
        totalCount={areas.length}
        hasActive={hasActive}
      />

      <main className={styles.main}>
        <div className={styles.grid}>
          {sorted.length > 0 ? (
            sorted.map((area, index) => (
              <AreaCard
                key={area.id}
                area={area}
                onOpen={() => {
                  setOpenAreaId(area.id);
                  setOpenProjectId(null);
                }}
                animationDelay={`${0.04 + index * 0.04}s`}
              />
            ))
          ) : (
            <div className={styles.noResults}>No areas match the current filters.</div>
          )}
        </div>
      </main>

      {openArea ? (
        <AreaModal
          area={openArea}
          onClose={() => {
            setOpenAreaId(null);
            setOpenProjectId(null);
          }}
          onOpenProject={(p: Project) => setOpenProjectId(p.id)}
          isProjectOpen={openProject !== null}
        />
      ) : null}

      {openProject ? (
        <ProjectModal project={openProject} onClose={() => setOpenProjectId(null)} />
      ) : null}

      <BrowserFooter
        note={browserMeta.footerNote}
        totalAreas={areas.length}
        totalProjects={totalProjects}
      />

      <span style={{ display: "none" }}>{formatCount(totalProjects)}</span>
    </div>
  );
}
