"use client";

import {
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import styles from "./browser.module.css";

type TooltipPlacement = "top" | "bottom" | "left" | "right" | "auto";

type TooltipProps = {
  /** The trigger element. Tooltip wraps this element directly. */
  children: ReactElement;
  /** The tooltip content. Can be a string or rich React content. */
  content: ReactNode;
  /** Preferred placement. "auto" picks based on viewport space. */
  placement?: TooltipPlacement;
  /** Show delay in milliseconds. Default 220. */
  delay?: number;
  /** Maximum width of the tooltip in pixels. Default 280. */
  maxWidth?: number;
  /** Optional title rendered above the content as a small heading. */
  title?: string;
  /** Disable the tooltip entirely (e.g. when content is empty). */
  disabled?: boolean;
};

type Position = {
  top: number;
  left: number;
  placement: Exclude<TooltipPlacement, "auto">;
};

/**
 * Tooltip primitive — renders content via createPortal to escape any
 * `overflow: hidden` or stacking context issues from parent elements.
 *
 * Pattern:
 *   <Tooltip content="explanation">
 *     <span>hover me</span>
 *   </Tooltip>
 *
 * The child element is cloned with the necessary event handlers attached.
 * The tooltip itself is rendered into document.body via portal so it can
 * appear above any parent's overflow/z-index.
 */
export default function Tooltip({
  children,
  content,
  placement = "auto",
  delay = 220,
  maxWidth = 280,
  title,
  disabled,
}: TooltipProps) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<Position | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const showTimerRef = useRef<number | null>(null);
  const hideTimerRef = useRef<number | null>(null);
  const tooltipId = useId();

  const computePosition = useCallback((): Position | null => {
    const triggerEl = triggerRef.current;
    if (!triggerEl) return null;
    if (typeof window === "undefined") return null;

    const rect = triggerEl.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const margin = 12;
    const tooltipWidth = Math.min(maxWidth, vw - margin * 2);
    const estimatedHeight = 80; // approximate; final position uses real measurement after mount

    // Decide placement
    let chosen: Exclude<TooltipPlacement, "auto"> =
      placement === "auto" ? "top" : placement;
    if (placement === "auto") {
      if (rect.top - estimatedHeight - margin > 0) chosen = "top";
      else if (rect.bottom + estimatedHeight + margin < vh) chosen = "bottom";
      else if (rect.left - tooltipWidth - margin > 0) chosen = "left";
      else chosen = "right";
    }

    const gap = 12; // distance between trigger and tooltip edge
    let top = 0;
    let left = 0;
    switch (chosen) {
      case "top":
        top = rect.top - estimatedHeight - gap;
        left = rect.left + rect.width / 2 - tooltipWidth / 2;
        break;
      case "bottom":
        top = rect.bottom + gap;
        left = rect.left + rect.width / 2 - tooltipWidth / 2;
        break;
      case "left":
        top = rect.top + rect.height / 2 - estimatedHeight / 2;
        left = rect.left - tooltipWidth - gap;
        break;
      case "right":
        top = rect.top + rect.height / 2 - estimatedHeight / 2;
        left = rect.right + gap;
        break;
    }

    // Clamp to viewport
    if (left < margin) left = margin;
    if (left + tooltipWidth > vw - margin) left = vw - margin - tooltipWidth;
    if (top < margin) top = margin;

    return { top, left, placement: chosen };
  }, [placement, maxWidth]);

  const show = useCallback(() => {
    if (disabled) return;
    if (hideTimerRef.current != null) {
      window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    if (showTimerRef.current != null) return;
    showTimerRef.current = window.setTimeout(() => {
      const pos = computePosition();
      if (pos) {
        setPosition(pos);
        setOpen(true);
      }
      showTimerRef.current = null;
    }, delay);
  }, [computePosition, delay, disabled]);

  const hide = useCallback(() => {
    if (showTimerRef.current != null) {
      window.clearTimeout(showTimerRef.current);
      showTimerRef.current = null;
    }
    if (hideTimerRef.current != null) return;
    hideTimerRef.current = window.setTimeout(() => {
      setOpen(false);
      hideTimerRef.current = null;
    }, 80);
  }, []);

  // Recompute position on scroll/resize while open
  useEffect(() => {
    if (!open) return;
    const handler = () => {
      const pos = computePosition();
      if (pos) setPosition(pos);
    };
    window.addEventListener("scroll", handler, true);
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler, true);
      window.removeEventListener("resize", handler);
    };
  }, [open, computePosition]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (showTimerRef.current != null) {
        window.clearTimeout(showTimerRef.current);
      }
      if (hideTimerRef.current != null) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  // Stable ref callback so the lint rule doesn't flag a "ref read during render".
  const setTriggerRef = useCallback((node: HTMLElement | null) => {
    triggerRef.current = node;
  }, []);

  if (!isValidElement(children)) {
    return <>{children}</>;
  }

  // Type assertion: we need to attach refs and event handlers to the child.
  // The child is constrained by isValidElement above.
  type ChildProps = {
    ref?: React.Ref<HTMLElement>;
    onMouseEnter?: (e: React.MouseEvent) => void;
    onMouseLeave?: (e: React.MouseEvent) => void;
    onFocus?: (e: React.FocusEvent) => void;
    onBlur?: (e: React.FocusEvent) => void;
    "aria-describedby"?: string;
  };

  const childProps = (children.props ?? {}) as ChildProps;

  // Wrap the trigger in a span so we have a stable host element to attach the
  // ref + event handlers to without cloning the child element. This avoids the
  // React 19 ref-during-render lint rule and works for any child element.
  return (
    <>
      <span
        ref={setTriggerRef}
        style={{ display: "inline-flex" }}
        onMouseEnter={(e) => {
          childProps.onMouseEnter?.(e);
          show();
        }}
        onMouseLeave={(e) => {
          childProps.onMouseLeave?.(e);
          hide();
        }}
        onFocus={(e) => {
          childProps.onFocus?.(e);
          show();
        }}
        onBlur={(e) => {
          childProps.onBlur?.(e);
          hide();
        }}
        aria-describedby={open ? tooltipId : undefined}
      >
        {children}
      </span>
      {open && position && typeof document !== "undefined"
        ? createPortal(
            <div
              id={tooltipId}
              role="tooltip"
              className={styles.portalTooltip}
              data-placement={position.placement}
              style={{
                position: "fixed",
                top: position.top,
                left: position.left,
                maxWidth,
              }}
              onMouseEnter={() => {
                if (hideTimerRef.current != null) {
                  window.clearTimeout(hideTimerRef.current);
                  hideTimerRef.current = null;
                }
              }}
              onMouseLeave={hide}
            >
              {title ? <div className={styles.portalTooltipTitle}>{title}</div> : null}
              <div className={styles.portalTooltipBody}>{content}</div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
