"use client";

import { useState } from "react";
import styles from "./browser.module.css";
import type {
  AgeCohort,
  BuildingType,
  CostTier,
  FilterState,
  GradVisaRealism,
  Grade,
  SortMode,
  TfLZone,
} from "@/src/areas/types";
import {
  ageFilter,
  buildingTypeFilter,
  costTierFilter,
  gradVisaFilter,
  gradeFilter,
  projectGradeFilter,
  regenerationFilter,
  tenureFilter,
  zoneFilter,
} from "@/src/areas/config";
import Tooltip from "./Tooltip";

type BrowserFilterBarProps = {
  state: FilterState;
  onToggleZone: (z: TfLZone) => void;
  onToggleAge: (a: AgeCohort) => void;
  onToggleAreaGrade: (g: Grade) => void;
  onToggleProjectGrade: (g: Grade) => void;
  onToggleRegeneration: (r: "complete" | "active" | "phased" | "early") => void;
  onToggleTenure: (t: "rent" | "buy") => void;
  onToggleBuildingType: (b: BuildingType) => void;
  onToggleRealism: (r: GradVisaRealism) => void;
  onToggleCostTier: (c: CostTier) => void;
  onToggleHasRiver: () => void;
  onToggleHasCanal: () => void;
  onToggleHasDock: () => void;
  onToggleHasPool: () => void;
  onToggleHasConcierge: () => void;
  onSetMultiClusterMin: (n: number) => void;
  onQueryChange: (q: string) => void;
  onClear: () => void;
  sortMode: SortMode;
  onSortChange: (mode: SortMode) => void;
  resultsCount: number;
  totalCount: number;
  hasActive: boolean;
};

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className={styles.searchIcon}
      fill="none"
      height="14"
      viewBox="0 0 24 24"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7" />
      <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export default function BrowserFilterBar(props: BrowserFilterBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterTop}>
        <div className={styles.filterTopLeft}>
          <button
            className={`${styles.filterToggle} ${open ? styles.filterToggleActive : ""}`}
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            {open ? "Hide filters" : "Filters"}
          </button>
          <select
            className={styles.sortSelect}
            value={props.sortMode}
            onChange={(e) => props.onSortChange(e.target.value as SortMode)}
          >
            <option value="area-grade">Sort: best area grade</option>
            <option value="best-project-grade">Sort: best project grade in area</option>
            <option value="name">Sort: name</option>
          </select>
          <span style={{ color: "var(--text-secondary)", fontSize: 12 }}>
            <strong style={{ color: "var(--gold-light)", fontFamily: "var(--font-display)", fontSize: 14 }}>
              {props.resultsCount}
            </strong>{" "}
            of {props.totalCount} areas
          </span>
        </div>
        <div className={styles.searchWrap}>
          <SearchIcon />
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search areas, projects, operators..."
            value={props.state.query}
            onChange={(e) => props.onQueryChange(e.target.value)}
          />
        </div>
      </div>

      <div className={`${styles.filterPanel} ${open ? styles.filterPanelOpen : ""}`}>
        <div className={styles.filterRow}>
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>{zoneFilter.label}</span>
            <div className={styles.pills}>
              {zoneFilter.options.map((opt) => (
                <Tooltip key={opt.value} title={opt.label} content={opt.description}>
                  <button
                    className={`${styles.pill} ${props.state.zones.has(opt.value) ? styles.pillActive : ""}`}
                    onClick={() => props.onToggleZone(opt.value)}
                    type="button"
                  >
                    {opt.label}
                  </button>
                </Tooltip>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>{ageFilter.label}</span>
            <div className={styles.pills}>
              {ageFilter.options.map((opt) => (
                <Tooltip key={opt.value} title={opt.label} content={opt.description}>
                  <button
                    className={`${styles.pill} ${props.state.primary_age_cohorts.has(opt.value) ? styles.pillActive : ""}`}
                    onClick={() => props.onToggleAge(opt.value)}
                    type="button"
                  >
                    {opt.label}
                  </button>
                </Tooltip>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>{gradeFilter.label}</span>
            <div className={styles.pills}>
              {gradeFilter.options.map((opt) => (
                <Tooltip key={opt.value} title={opt.label} content={opt.description}>
                  <button
                    className={`${styles.pill} ${props.state.area_grades.has(opt.value) ? styles.pillActive : ""}`}
                    onClick={() => props.onToggleAreaGrade(opt.value)}
                    type="button"
                  >
                    {opt.label}
                  </button>
                </Tooltip>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>{regenerationFilter.label}</span>
            <div className={styles.pills}>
              {regenerationFilter.options.map((opt) => (
                <Tooltip key={opt.value} title={opt.label} content={opt.description}>
                  <button
                    className={`${styles.pill} ${props.state.regeneration_status.has(opt.value) ? styles.pillActive : ""}`}
                    onClick={() => props.onToggleRegeneration(opt.value)}
                    type="button"
                  >
                    {opt.label}
                  </button>
                </Tooltip>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Multi-cluster commute (min)</span>
            <input
              type="range"
              min={0}
              max={5}
              step={1}
              value={props.state.multi_cluster_min}
              onChange={(e) => props.onSetMultiClusterMin(Number.parseInt(e.target.value, 10))}
            />
            <span style={{ color: "var(--text-secondary)", fontSize: 11 }}>
              ≥ {props.state.multi_cluster_min}/5
            </span>
          </div>

          <div className={styles.toggleBox}>
            <span className={styles.filterLabel}>Water</span>
            <label className={styles.toggleRow}>
              <input type="checkbox" checked={props.state.has_river} onChange={props.onToggleHasRiver} />
              River
            </label>
            <label className={styles.toggleRow}>
              <input type="checkbox" checked={props.state.has_canal} onChange={props.onToggleHasCanal} />
              Canal
            </label>
            <label className={styles.toggleRow}>
              <input type="checkbox" checked={props.state.has_dock} onChange={props.onToggleHasDock} />
              Dock
            </label>
          </div>
        </div>

        <div className={styles.filterRow}>
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>{tenureFilter.label} <span className={styles.layerHint}>project</span></span>
            <div className={styles.pills}>
              {tenureFilter.options.map((opt) => (
                <button
                  key={opt.value}
                  className={`${styles.pill} ${props.state.tenure.has(opt.value) ? styles.pillActive : ""}`}
                  onClick={() => props.onToggleTenure(opt.value)}
                  type="button"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>{buildingTypeFilter.label} <span className={styles.layerHint}>project</span></span>
            <div className={styles.pills}>
              {buildingTypeFilter.options.map((opt) => (
                <button
                  key={opt.value}
                  className={`${styles.pill} ${props.state.building_types.has(opt.value) ? styles.pillActive : ""}`}
                  onClick={() => props.onToggleBuildingType(opt.value)}
                  type="button"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>{costTierFilter.label} <span className={styles.layerHint}>project</span></span>
            <div className={styles.pills}>
              {costTierFilter.options.map((opt) => (
                <Tooltip key={opt.value} title={opt.label} content={opt.description}>
                  <button
                    className={`${styles.pill} ${props.state.cost_tiers.has(opt.value) ? styles.pillActive : ""}`}
                    onClick={() => props.onToggleCostTier(opt.value)}
                    type="button"
                  >
                    {opt.label}
                  </button>
                </Tooltip>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>{gradVisaFilter.label} <span className={styles.layerHint}>project</span></span>
            <div className={styles.pills}>
              {gradVisaFilter.options.map((opt) => (
                <Tooltip key={opt.value} title={opt.label} content={opt.description}>
                  <button
                    className={`${styles.pill} ${props.state.grad_visa_realism.has(opt.value) ? styles.pillActive : ""}`}
                    onClick={() => props.onToggleRealism(opt.value)}
                    type="button"
                  >
                    {opt.label}
                  </button>
                </Tooltip>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>{projectGradeFilter.label} <span className={styles.layerHint}>project</span></span>
            <div className={styles.pills}>
              {projectGradeFilter.options.map((opt) => (
                <button
                  key={opt.value}
                  className={`${styles.pill} ${props.state.project_grades.has(opt.value) ? styles.pillActive : ""}`}
                  onClick={() => props.onToggleProjectGrade(opt.value)}
                  type="button"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.toggleBox}>
            <span className={styles.filterLabel}>Project amenities <span className={styles.layerHint}>project</span></span>
            <label className={styles.toggleRow}>
              <input type="checkbox" checked={props.state.has_pool} onChange={props.onToggleHasPool} />
              Has pool
            </label>
            <label className={styles.toggleRow}>
              <input type="checkbox" checked={props.state.has_concierge} onChange={props.onToggleHasConcierge} />
              Has concierge
            </label>
          </div>
        </div>

        {props.hasActive ? (
          <div className={styles.filterFoot}>
            <div className={styles.resultCount}>
              <strong>{props.resultsCount}</strong> of {props.totalCount} areas match
            </div>
            <button className={styles.clearButton} onClick={props.onClear} type="button">
              Clear filters
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
