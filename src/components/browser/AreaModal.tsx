"use client";

import { useEffect } from "react";
import styles from "./browser.module.css";
import type { Area, Project } from "@/src/areas/types";
import Accordion from "./Accordion";
import GradeChip from "./GradeChip";
import CriterionRow from "./CriterionRow";
import ProjectCard from "./ProjectCard";

type AreaModalProps = {
  area: Area;
  onClose: () => void;
  onOpenProject: (project: Project) => void;
  isProjectOpen: boolean;
};

export default function AreaModal({ area, onClose, onOpenProject, isProjectOpen }: AreaModalProps) {
  useEffect(() => {
    if (isProjectOpen) return; // project modal owns scroll lock when open
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose, isProjectOpen]);

  const t1 = area.evaluation.t1_foundational;
  const t2 = area.evaluation.t2_daily_life;
  const t3 = area.evaluation.t3_identity;
  const t5 = area.evaluation.t5_personal;

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalPanel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHero}>
          {area.hero_image_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={area.hero_image_url}
              alt={area.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px 16px 0 0" }}
            />
          ) : (
            area.name
          )}
          <button
            className={styles.modalCloseBtn}
            onClick={onClose}
            type="button"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className={styles.modalHeader}>
          <div className={styles.modalEyebrow}>{area.borough}</div>
          <h2 className={styles.modalTitle}>{area.name}</h2>
          <div className={styles.modalSubtitle}>
            {area.postcodes.join(" · ")} · {area.zones.join(" · ")}
          </div>
          <div className={styles.modalGradeRow}>
            <GradeChip grade={area.evaluation.overall_grade} />
            <span style={{ color: "var(--text-secondary)", fontSize: 12 }}>
              Researched {area.research.research_date} · Confidence {area.research.confidence}
            </span>
          </div>
          <p className={styles.modalHeadline}>{area.headline}</p>
        </div>

        <div className={styles.modalBody}>
          <Accordion title="At a glance" defaultOpen>
            <div className={styles.factGrid}>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Zones</span>
                <span className={styles.factValue}>{area.zones.join(" · ")}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Borough</span>
                <span className={styles.factValue}>{area.borough}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Primary age cohort</span>
                <span className={styles.factValue}>{area.demographics.primary_age_cohort}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Connectivity (multi-cluster)</span>
                <span className={styles.factValue}>
                  {area.connectivity.multi_cluster_score}/5 multi-cluster · {area.connectivity.redundancy_score}/5 redundancy
                </span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Time to City</span>
                <span className={styles.factValue}>{area.connectivity.times_to_anchors.city_of_london} min</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Time to Canary Wharf</span>
                <span className={styles.factValue}>{area.connectivity.times_to_anchors.canary_wharf} min</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Time to Soho/Fitzrovia</span>
                <span className={styles.factValue}>{area.connectivity.times_to_anchors.soho_fitzrovia} min</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Time to KX/Shoreditch</span>
                <span className={styles.factValue}>{area.connectivity.times_to_anchors.kings_cross_shoreditch} min</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Projects</span>
                <span className={styles.factValue}>{area.projects.length}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Regeneration status</span>
                <span className={styles.factValue}>{area.regeneration.status}</span>
              </div>
            </div>
          </Accordion>

          <Accordion title="Vibe & character" defaultOpen>
            <p>{area.long_form.full}</p>
            {area.long_form.history ? (
              <>
                <h5 style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", margin: "16px 0 6px" }}>History</h5>
                <p>{area.long_form.history}</p>
              </>
            ) : null}
            {area.long_form.vibe ? (
              <>
                <h5 style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", margin: "16px 0 6px" }}>Vibe</h5>
                <p>{area.long_form.vibe}</p>
              </>
            ) : null}
            {area.long_form.weekday ? (
              <>
                <h5 style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", margin: "16px 0 6px" }}>Weekday</h5>
                <p>{area.long_form.weekday}</p>
              </>
            ) : null}
            {area.long_form.weekend ? (
              <>
                <h5 style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", margin: "16px 0 6px" }}>Weekend</h5>
                <p>{area.long_form.weekend}</p>
              </>
            ) : null}
            {area.long_form.croydon_comparison ? (
              <>
                <h5 style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", margin: "16px 0 6px" }}>Compared to Croydon</h5>
                <p>{area.long_form.croydon_comparison}</p>
              </>
            ) : null}
          </Accordion>

          <Accordion title="Foundational viability" tier="t1">
            <div className={styles.tierSummary}>{t1.tier_summary}</div>
            <div className={styles.criterionList}>
              {t1.criteria.map((c) => (
                <CriterionRow key={c.id} criterion={c} />
              ))}
            </div>
          </Accordion>

          <Accordion title="Daily life quality" tier="t2">
            <div className={styles.tierSummary}>{t2.tier_summary}</div>
            <div className={styles.criterionList}>
              {t2.criteria.map((c) => (
                <CriterionRow key={c.id} criterion={c} />
              ))}
            </div>
          </Accordion>

          <Accordion title="Place identity & trajectory" tier="t3">
            <div className={styles.tierSummary}>{t3.tier_summary}</div>
            <div className={styles.criterionList}>
              {t3.criteria.map((c) => (
                <CriterionRow key={c.id} criterion={c} />
              ))}
            </div>
          </Accordion>

          <Accordion title="Personal fit" tier="t5">
            <div className={styles.tierSummary}>{t5.tier_summary}</div>
            <div className={styles.criterionList}>
              {t5.criteria.map((c) => (
                <CriterionRow key={c.id} criterion={c} />
              ))}
            </div>
          </Accordion>

          <Accordion title="Connectivity (deep)">
            <p>{area.connectivity.notes}</p>
            <div className={styles.factGrid}>
              {area.connectivity.primary_stations.map((s) => (
                <div key={s.name} className={styles.factRow}>
                  <span className={styles.factLabel}>{s.name}</span>
                  <span className={styles.factValue}>
                    {s.lines.join(", ")} · {s.walk_minutes_from_centre} min walk
                  </span>
                </div>
              ))}
            </div>
          </Accordion>

          <Accordion title="Demographics">
            <p>{area.demographics.notes}</p>
            {area.demographics.age_breakdown.length > 0 ? (
              <div className={styles.factGrid}>
                {area.demographics.age_breakdown.map((a) => (
                  <div key={a.cohort} className={styles.factRow}>
                    <span className={styles.factLabel}>{a.cohort}</span>
                    <span className={styles.factValue}>{a.pct}%</span>
                  </div>
                ))}
              </div>
            ) : null}
          </Accordion>

          <Accordion title="Safety">
            <div className={styles.factGrid}>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Overall</span>
                <span className={styles.factValue}>{area.safety.overall}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>vs Croydon</span>
                <span className={styles.factValue}>{area.safety.crime_vs_croydon}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>vs Borough</span>
                <span className={styles.factValue}>{area.safety.crime_vs_borough}</span>
              </div>
            </div>
            <p>{area.safety.after_dark_assessment}</p>
          </Accordion>

          <Accordion title="Green space & water">
            <p>{area.green_and_water.overall_assessment}</p>
            <div className={styles.factListMulti}>
              {area.green_and_water.has_river ? <span className={styles.areaCardStat}>River</span> : null}
              {area.green_and_water.has_canal ? <span className={styles.areaCardStat}>Canal</span> : null}
              {area.green_and_water.has_dock ? <span className={styles.areaCardStat}>Dock</span> : null}
            </div>
            {area.green_and_water.parks.length > 0 ? (
              <div className={styles.factGrid}>
                {area.green_and_water.parks.map((p) => (
                  <div key={p.name} className={styles.factRow}>
                    <span className={styles.factLabel}>{p.name}</span>
                    <span className={styles.factValue}>{p.walk_minutes} min walk · {p.notes}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </Accordion>

          <Accordion title="Regeneration & 2027 trajectory">
            <p><strong>{area.regeneration.status}.</strong> {area.regeneration.investment_pipeline}</p>
            <p>{area.regeneration.trajectory_through_2027}</p>
            {area.regeneration.recent_milestones.length > 0 ? (
              <>
                <h5 style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", margin: "12px 0 6px" }}>Recent</h5>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {area.regeneration.recent_milestones.map((m) => <li key={m}>{m}</li>)}
                </ul>
              </>
            ) : null}
            {area.regeneration.upcoming_milestones.length > 0 ? (
              <>
                <h5 style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", margin: "12px 0 6px" }}>Upcoming</h5>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {area.regeneration.upcoming_milestones.map((m) => <li key={m}>{m}</li>)}
                </ul>
              </>
            ) : null}
          </Accordion>

          {area.external_links.length > 0 ? (
            <Accordion title="External links">
              <div className={styles.linkList}>
                {area.external_links.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className={styles.linkRow}>
                    <span className={styles.linkType}>{link.type}</span>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </Accordion>
          ) : null}

          <Accordion title={`Projects in this area (${area.projects.length})`} defaultOpen>
            {area.projects.length === 0 ? (
              <p>No flagship projects identified yet. This is a healthy private rental area where most stock is one-off private landlords rather than managed BTR.</p>
            ) : (
              <div className={styles.projectGrid}>
                {area.projects.map((p) => (
                  <ProjectCard key={p.id} project={p} onOpen={() => onOpenProject(p)} />
                ))}
              </div>
            )}
          </Accordion>

          {area.personal_notes ? (
            <Accordion title="Personal notes">
              <p>{area.personal_notes}</p>
            </Accordion>
          ) : null}
        </div>
      </div>
    </div>
  );
}
