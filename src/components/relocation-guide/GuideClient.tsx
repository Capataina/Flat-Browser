"use client";

import {
  useDeferredValue,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type RefCallback,
} from "react";
import GuideCard from "@/src/components/relocation-guide/GuideCard";
import GuideFilterBar from "@/src/components/relocation-guide/GuideFilterBar";
import GuideFooter from "@/src/components/relocation-guide/GuideFooter";
import GuideHeader from "@/src/components/relocation-guide/GuideHeader";
import GuidePreview from "@/src/components/relocation-guide/GuidePreview";
import styles from "@/src/components/relocation-guide/guide.module.css";
import {
  createInitialFilterState,
  formatProjectCount,
  getProjectCount,
  hasActiveFilters,
  matchesFilters,
  toggleFilterValue,
} from "@/src/establishments/filtering";
import type {
  Establishment,
  FilterGroup,
  FilterState,
  GuideMeta,
  TagCategory,
} from "@/src/establishments/types";

type GuideClientProps = {
  establishments: Establishment[];
  filterGroups: FilterGroup[];
  guideMeta: GuideMeta;
};

export default function GuideClient({
  establishments,
  filterGroups,
  guideMeta,
}: GuideClientProps) {
  const [filters, setFilters] = useState<FilterState>(() =>
    createInitialFilterState(),
  );
  const [query, setQuery] = useState("");
  const [openEstablishmentId, setOpenEstablishmentId] = useState<string | null>(
    null,
  );
  const [columnCount, setColumnCount] = useState(3);
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const cardRefs = useRef<Record<string, HTMLElement | null>>({});

  const visibleEstablishments = establishments.filter((establishment) =>
    matchesFilters(establishment, filters, deferredQuery),
  );
  const totalProjectsLabel = formatProjectCount(getProjectCount(establishments));
  const shouldShowResults = hasActiveFilters(filters, deferredQuery);
  const openEstablishment =
    establishments.find(
      (establishment) => establishment.id === openEstablishmentId,
    ) ?? null;

  useEffect(() => {
    if (!openEstablishmentId) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      cardRefs.current[openEstablishmentId]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 10);

    return () => window.clearTimeout(timeoutId);
  }, [openEstablishmentId]);

  const handleToggleFilter = (category: TagCategory, value: string) => {
    const nextFilters = toggleFilterValue(filters, category, value);

    setFilters(nextFilters);

    if (
      openEstablishment &&
      !matchesFilters(openEstablishment, nextFilters, query.trim().toLowerCase())
    ) {
      setOpenEstablishmentId(null);
    }
  };

  const handleClearFilters = () => {
    setFilters(createInitialFilterState());
    setQuery("");
    setOpenEstablishmentId(null);
  };

  const handleQueryChange = (value: string) => {
    const nextQuery = value.trim().toLowerCase();

    setQuery(value);

    if (
      openEstablishment &&
      !matchesFilters(openEstablishment, filters, nextQuery)
    ) {
      setOpenEstablishmentId(null);
    }
  };

  const registerCardRef =
    (id: string): RefCallback<HTMLElement> =>
    (node) => {
      cardRefs.current[id] = node;
    };

  return (
    <div className={styles.page}>
      <GuideHeader
        accent={guideMeta.accent}
        eyebrow={guideMeta.eyebrow}
        subtitle={guideMeta.subtitle}
        title={guideMeta.title}
        totalAreas={establishments.length}
        totalProjectsLabel={totalProjectsLabel}
        totalTagTypes={filterGroups.length}
      />

      <GuideFilterBar
        columnCount={columnCount}
        filterGroups={filterGroups}
        filters={filters}
        onClearFilters={handleClearFilters}
        onColumnChange={setColumnCount}
        onQueryChange={handleQueryChange}
        onToggleFilter={handleToggleFilter}
        query={query}
        resultsCount={visibleEstablishments.length}
        showResults={shouldShowResults}
        totalCount={establishments.length}
      />

      <main className={styles.main}>
        <div
          className={styles.grid}
          style={{ "--grid-columns": columnCount } as CSSProperties}
        >
          {visibleEstablishments.length ? (
            visibleEstablishments.map((establishment, index) => (
              <GuideCard
                animationDelay={`${0.04 + index * 0.04}s`}
                cardRef={registerCardRef(establishment.id)}
                establishment={establishment}
                isOpen={openEstablishmentId === establishment.id}
                key={establishment.id}
                onToggle={() =>
                  setOpenEstablishmentId((currentOpenId) =>
                    currentOpenId === establishment.id ? null : establishment.id,
                  )
                }
              />
            ))
          ) : (
            <div className={styles.noResults}>
              No areas match your current filters.
            </div>
          )}
        </div>
      </main>

      {openEstablishment ? (
        <GuidePreview
          establishment={openEstablishment}
          onClose={() => setOpenEstablishmentId(null)}
        />
      ) : null}

      <GuideFooter
        note={guideMeta.footerNote}
        totalAreas={establishments.length}
        totalProjectsLabel={totalProjectsLabel}
      />
    </div>
  );
}
