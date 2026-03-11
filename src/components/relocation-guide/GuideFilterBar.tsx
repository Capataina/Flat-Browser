import styles from "@/src/components/relocation-guide/guide.module.css";
import type {
  FilterGroup,
  FilterState,
  TagCategory,
} from "@/src/establishments/types";

type GuideFilterBarProps = {
  columnCount: number;
  filterGroups: FilterGroup[];
  filters: FilterState;
  query: string;
  resultsCount: number;
  totalCount: number;
  showResults: boolean;
  onColumnChange: (value: number) => void;
  onToggleFilter: (category: TagCategory, value: string) => void;
  onClearFilters: () => void;
  onQueryChange: (value: string) => void;
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

export default function GuideFilterBar({
  columnCount,
  filterGroups,
  filters,
  query,
  resultsCount,
  totalCount,
  showResults,
  onColumnChange,
  onToggleFilter,
  onClearFilters,
  onQueryChange,
}: GuideFilterBarProps) {
  return (
    <div className={styles.filterBar}>
      <div className={styles.filterGrid}>
        {filterGroups.map((group) => (
          <div className={styles.filterGroup} key={group.category}>
            <div className={styles.filterLabel}>{group.label}</div>
            <div className={styles.pills}>
              {group.options.map((option) => {
                const isActive = filters[group.category].has(option.value);

                return (
                  <button
                    aria-pressed={isActive}
                    className={`${styles.pill} ${isActive ? styles.pillActive : ""}`}
                    data-category={group.category}
                    key={option.value}
                    onClick={() => onToggleFilter(group.category, option.value)}
                    type="button"
                  >
                    <span>{option.value}</span>
                    <span className={styles.pillTooltip} role="tooltip">
                      {option.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div className={`${styles.filterGroup} ${styles.searchGroup}`}>
          <div className={styles.columnControl}>
            <div className={styles.filterLabel}>Columns</div>
            <div className={styles.rangeWrap}>
              <div className={styles.rangeValue}>{columnCount} columns</div>
              <input
                aria-label="Choose card columns"
                className={styles.rangeInput}
                max={5}
                min={2}
                onChange={(event) =>
                  onColumnChange(Number.parseInt(event.target.value, 10))
                }
                step={1}
                type="range"
                value={columnCount}
              />
              <div className={styles.rangeTicks}>
                {[2, 3, 4, 5].map((column) => (
                  <span key={column}>{column}</span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.filterLabel}>Search</div>
          <div className={styles.searchWrap}>
            <SearchIcon />
            <input
              className={styles.searchInput}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search areas..."
              type="text"
              value={query}
            />
          </div>
        </div>
      </div>

      <div
        className={`${styles.filterFoot} ${showResults ? styles.filterFootVisible : ""}`}
      >
        <div className={styles.resultCount}>
          <strong>{resultsCount}</strong> of {totalCount} areas
        </div>
        <button
          className={styles.clearButton}
          onClick={onClearFilters}
          type="button"
        >
          Clear filters
        </button>
      </div>
    </div>
  );
}
