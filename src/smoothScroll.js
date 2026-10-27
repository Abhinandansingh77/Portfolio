import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Smooth scrolling, as on genstudio.framer.media (also Lenis): wheel and
// trackpad input eases towards where it is headed, so everything tied to
// the scroll (the pinned hero, the reel growing) glides instead of jumping.
// Touch keeps the device's own scrolling. Off with reduced motion.
// LERP is the share of the remaining distance covered each frame (lower
// glides longer); WHEEL scales each wheel step, so a notch travels a little
// less and every scroll-driven animation plays out more slowly.
const LERP = 0.065;
const WHEEL = 0.85;

let lenis = null;

export function startSmoothScroll() {
  if (typeof window === "undefined" || lenis) return () => {};
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return () => {};
  lenis = new Lenis({ lerp: LERP, wheelMultiplier: WHEEL, smoothWheel: true, autoRaf: true, allowNestedScroll: true, anchors: true });
  return () => {
    lenis?.destroy();
    lenis = null;
  };
}

// In-page links (back to top, case study sections) glide there through
// Lenis, so they don't fight it.
export function glideTo(top) {
  if (lenis) lenis.scrollTo(top);
  else window.scrollTo({ top, behavior: "smooth" });
}

// Route changes jump to the top at once, cancelling any glide in progress.
export function jumpToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  else window.scrollTo({ top: 0, behavior: "auto" });
}
