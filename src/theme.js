import { useSyncExternalStore } from "react";
import { flushSync } from "react-dom";

// Light or dark, kept on <html data-theme> (the stylesheet's tokens follow
// it) and remembered across visits. index.html applies the saved choice
// before first paint, so there is no flash of the other theme.

const STORAGE_KEY = "theme";
const REVEAL_MS = 650;
const listeners = new Set();

// The stylesheet treats anything but "light" as dark.
const readTheme = () => (document.documentElement.dataset.theme === "light" ? "light" : "dark");

const subscribe = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export function useTheme() {
  return useSyncExternalStore(subscribe, readTheme, () => "light");
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Private mode or blocked storage: the choice just lasts this visit.
  }
  listeners.forEach((listener) => listener());
}

// Flip the theme. With a click event, the new theme spreads out from the
// button as a growing circle (View Transitions); without that API, or with
// reduced motion, it switches at once.
export function toggleTheme(event) {
  const next = readTheme() === "dark" ? "light" : "dark";
  const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reduced) {
    applyTheme(next);
    return;
  }

  const rect = event?.currentTarget?.getBoundingClientRect();
  const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
  const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

  const transition = document.startViewTransition(() => {
    flushSync(() => applyTheme(next));
  });
  transition.ready
    .then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: REVEAL_MS, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    })
    .catch(() => {});
}
