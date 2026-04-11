"use client";

import { useEffect } from "react";
import styles from "./browser.module.css";
import type { Area, Project } from "@/src/areas/types";
import {
  AGE_COHORT_LABELS,
  CRIME_VS_BOROUGH_LABELS,
  CRIME_VS_CROYDON_LABELS,
  GRADE_DESCRIPTIONS,
  REGENERATION_STATUS_LABELS,
  SAFETY_OVERALL_LABELS,
} from "@/src/areas/labels";
import Accordion from "./Accordion";
import GradeChip from "./GradeChip";
import CriterionRow from "./CriterionRow";
import ProjectCard from "./ProjectCard";
import ExplainedValue from "./ExplainedValue";
import Tooltip from "./Tooltip";

type AreaModalProps = {
  area: Area;
  onClose: () => void;
  onOpenProject: (project: Project) => void;
  isProjectOpen: boolean;
};

function LongFormSection({ title, body }: { title: string; body: string }) {
  if (!body || body.trim().length === 0) return null;
  // Split into paragraphs on double newlines or sentences if no newlines.
  const paragraphs = body.includes("\n\n") ? body.split("\n\n") : [body];
  return (
    <>
      <h5
        style={{
          color: "var(--gold)",
          fontSize: 10,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          margin: "18px 0 8px",
          fontWeight: 600,
        }}
      >
        {title}
      </h5>
      {paragraphs.map((p, i) => (
        <p key={i}>{p.trim()}</p>
      ))}
    </>
  );
}

export default function AreaModal({
  area,
  onClose,
  onOpenProject,
  isProjectOpen,
}: AreaModalProps) {
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
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "16px 16px 0 0",
              }}
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
            <Tooltip
              title={`Grade ${area.evaluation.overall_grade}`}
              content={GRADE_DESCRIPTIONS[area.evaluation.overall_grade]}
            >
              <span style={{ display: "inline-flex" }}>
                <GradeChip grade={area.evaluation.overall_grade} />
              </span>
            </Tooltip>
            <span style={{ color: "var(--text-secondary)", fontSize: 12 }}>
              Researched {area.research.research_date} · Confidence{" "}
              <strong style={{ color: "var(--text-primary)" }}>{area.research.confidence}</strong>
            </span>
          </div>
          <p className={styles.modalHeadline}>{area.headline}</p>
        </div>

        <div className={styles.modalBody}>
          <Accordion title="At a glance" defaultOpen>
            <div className={styles.factGrid}>
              <ExplainedValue
                label="Zones"
                value={area.zones.join(" · ")}
                explainerId="zone"
                rawValue={area.zones[0]}
              />
              <ExplainedValue label="Borough" value={area.borough} />
              <ExplainedValue
                label="Primary age cohort"
                value={AGE_COHORT_LABELS[area.demographics.primary_age_cohort]}
                explainerId="age-cohort"
                rawValue={area.demographics.primary_age_cohort}
              />
              <ExplainedValue
                label="Multi-cluster commute"
                value={`${area.connectivity.multi_cluster_score}/5`}
                explainerId="multi-cluster-commute"
                rawValue={area.connectivity.multi_cluster_score}
              />
              <ExplainedValue
                label="Transport redundancy"
                value={`${area.connectivity.redundancy_score}/5`}
                explainerId="redundancy-score"
                rawValue={area.connectivity.redundancy_score}
              />
              <ExplainedValue
                label="Time to City of London"
                value={`${area.connectivity.times_to_anchors.city_of_london} min`}
              />
              <ExplainedValue
                label="Time to Canary Wharf"
                value={`${area.connectivity.times_to_anchors.canary_wharf} min`}
              />
              <ExplainedValue
                label="Time to Soho / Fitzrovia"
                value={`${area.connectivity.times_to_anchors.soho_fitzrovia} min`}
              />
              <ExplainedValue
                label="Time to KX / Shoreditch"
                value={`${area.connectivity.times_to_anchors.kings_cross_shoreditch} min`}
              />
              <ExplainedValue label="Projects in area" value={String(area.projects.length)} />
              <ExplainedValue
                label="Regeneration status"
                value={REGENERATION_STATUS_LABELS[area.regeneration.status]}
                explainerId="regeneration-status"
                rawValue={area.regeneration.status}
              />
            </div>
          </Accordion>

          <Accordion title="Vibe & character" defaultOpen>
            {area.long_form.full ? <p>{area.long_form.full}</p> : null}
            <LongFormSection title="History" body={area.long_form.history} />
            <LongFormSection title="What it actually feels like" body={area.long_form.vibe} />
            <LongFormSection title="A weekday at 7pm" body={area.long_form.weekday} />
            <LongFormSection title="A weekend at midday" body={area.long_form.weekend} />
            <LongFormSection title="Notable" body={area.long_form.notable} />
            <LongFormSection
              title="Compared to Croydon"
              body={area.long_form.croydon_comparison}
            />
          </Accordion>

          <Accordion title="Foundational viability" tier="t1" defaultOpen>
            <div className={styles.tierSummary}>{t1.tier_summary}</div>
            <div className={styles.criterionList}>
              {t1.criteria.map((c) => (
                <CriterionRow key={c.id} criterion={c} />
              ))}
            </div>
          </Accordion>

          <Accordion title="Daily life quality" tier="t2" defaultOpen>
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
            {area.connectivity.notes ? <p>{area.connectivity.notes}</p> : null}
            <div className={styles.factGrid}>
              {area.connectivity.primary_stations.map((s) => (
                <ExplainedValue
                  key={s.name}
                  label={s.name}
                  value={`${s.lines.join(", ")} · ${s.walk_minutes_from_centre} min walk`}
                />
              ))}
            </div>
          </Accordion>

          <Accordion title="Demographics">
            {area.demographics.notes ? <p>{area.demographics.notes}</p> : null}
            {area.demographics.age_breakdown.length > 0 ? (
              <div className={styles.factGrid}>
                {area.demographics.age_breakdown.map((a) => (
                  <ExplainedValue
                    key={a.cohort}
                    label={AGE_COHORT_LABELS[a.cohort]}
                    value={`${a.pct}% of population`}
                  />
                ))}
              </div>
            ) : null}
            {area.demographics.ethnic_composition.length > 0 ? (
              <>
                <h5
                  style={{
                    color: "var(--gold)",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    margin: "16px 0 8px",
                  }}
                >
                  Ethnic composition (Census 2021)
                </h5>
                <div className={styles.factGrid}>
                  {area.demographics.ethnic_composition.map((e) => (
                    <ExplainedValue key={e.group} label={e.group} value={`${e.pct}%`} />
                  ))}
                </div>
              </>
            ) : null}
          </Accordion>

          <Accordion title="Safety">
            <div className={styles.factGrid}>
              <ExplainedValue
                label="Overall safety rating"
                value={SAFETY_OVERALL_LABELS[area.safety.overall]}
                explainerId="safety-overall"
                rawValue={area.safety.overall}
              />
              <ExplainedValue
                label="vs Croydon"
                value={CRIME_VS_CROYDON_LABELS[area.safety.crime_vs_croydon]}
                explainerId="crime-vs-croydon"
                rawValue={area.safety.crime_vs_croydon}
              />
              <ExplainedValue
                label="vs Borough"
                value={CRIME_VS_BOROUGH_LABELS[area.safety.crime_vs_borough]}
              />
            </div>
            {area.safety.after_dark_assessment ? (
              <p style={{ marginTop: 12 }}>{area.safety.after_dark_assessment}</p>
            ) : null}
            {area.safety.concerns.length > 0 ? (
              <>
                <h5
                  style={{
                    color: "var(--c-realism-with-upfront)",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    margin: "12px 0 6px",
                  }}
                >
                  Concerns
                </h5>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {area.safety.concerns.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </Accordion>

          <Accordion title="Green space & water">
            <p>{area.green_and_water.overall_assessment}</p>
            <div className={styles.factListMulti}>
              {area.green_and_water.has_river ? (
                <span className={styles.areaCardStat}>River</span>
              ) : null}
              {area.green_and_water.has_canal ? (
                <span className={styles.areaCardStat}>Canal</span>
              ) : null}
              {area.green_and_water.has_dock ? (
                <span className={styles.areaCardStat}>Dock</span>
              ) : null}
            </div>
            {area.green_and_water.parks.length > 0 ? (
              <div className={styles.factGrid}>
                {area.green_and_water.parks.map((p) => (
                  <ExplainedValue
                    key={p.name}
                    label={p.name}
                    value={`${p.walk_minutes} min walk${p.size_acres ? ` · ${p.size_acres} acres` : ""}`}
                    description={p.notes}
                  />
                ))}
              </div>
            ) : null}
          </Accordion>

          <Accordion title="Regeneration & 2027 trajectory">
            <p>
              <strong style={{ color: "var(--gold-light)" }}>
                {REGENERATION_STATUS_LABELS[area.regeneration.status]}.
              </strong>{" "}
              {area.regeneration.investment_pipeline}
            </p>
            <p>{area.regeneration.trajectory_through_2027}</p>
            {area.regeneration.recent_milestones.length > 0 ? (
              <>
                <h5
                  style={{
                    color: "var(--gold)",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    margin: "12px 0 6px",
                  }}
                >
                  Recently delivered
                </h5>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {area.regeneration.recent_milestones.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </>
            ) : null}
            {area.regeneration.upcoming_milestones.length > 0 ? (
              <>
                <h5
                  style={{
                    color: "var(--gold)",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    margin: "12px 0 6px",
                  }}
                >
                  Upcoming
                </h5>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {area.regeneration.upcoming_milestones.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </Accordion>

          {area.external_links.length > 0 ? (
            <Accordion title="External links">
              <div className={styles.linkList}>
                {area.external_links.map((link) => (
                  <Tooltip
                    key={link.url}
                    title={link.type.toUpperCase()}
                    content={link.label}
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.linkRow}
                    >
                      <span className={styles.linkType}>{link.type}</span>
                      <span>{link.label}</span>
                    </a>
                  </Tooltip>
                ))}
              </div>
            </Accordion>
          ) : null}

          <Accordion
            title={`Projects in this area (${area.projects.length})`}
            defaultOpen
          >
            {area.projects.length === 0 ? (
              <p>
                No flagship projects identified yet. This is a healthy private rental area where
                most stock is one-off private landlords rather than managed BTR.
              </p>
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
