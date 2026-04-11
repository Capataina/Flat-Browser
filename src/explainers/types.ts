// Explainer interface that every explainer file in this folder conforms to.
//
// An Explainer is a plain-English definition of a domain term plus a
// personalised relevance function. The UI uses this to render a value box
// that shows: the value, what the term means, and whether the value is
// good/bad/borderline for the user specifically.

import type { UserProfile } from "../profile/caner";

export type Severity = "good" | "neutral" | "info" | "warning" | "blocker";

export interface PersonalRelevance {
  severity: Severity;
  message: string;
}

export interface Explainer<TValue = unknown> {
  id: string;
  /** Human-readable term name, e.g. "Income multiple". */
  term: string;
  category:
    | "rental"
    | "building"
    | "area"
    | "rubric"
    | "demographic"
    | "connectivity";
  /** 2–4 sentences in plain English explaining what the term means. */
  description: string;
  /**
   * Computes personal relevance given the user profile and the actual value.
   * Return null if relevance is not applicable for this value type.
   */
  relevance: (profile: UserProfile, value: TValue) => PersonalRelevance | null;
  /** Optional related concepts the user might want to also read about. */
  related?: string[];
}
