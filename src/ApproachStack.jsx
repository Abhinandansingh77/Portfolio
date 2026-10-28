import { useEffect, useRef } from "react";
import { useMediaQuery } from "./EngineeringSection.jsx";

const STEPS = [
  { title: "Think it.", text: "Understand the problem" },
  { title: "Design it.", text: "Shape the experience" },
  { title: "Build it.", text: "Bring it to life in code" },
];

// Screens of scroll while the stage is pinned, and where each change from
// one card to the next starts and ends, as a share of that scroll. The
// stretches in between hold still.
const AP_TRAVEL_SCREENS = 3.2;
const AP_SWAPS = [
  [0.14, 0.44],
  [0.56, 0.86],
];
// A card one place back: how much smaller it is, and how far its top shows
// above the card in front (share of the card's height).
const AP_STEP_SCALE = 0.12;
const AP_STEP_RISE = 0.135;
// The front card as it leaves: how much it grows and blurs.
const AP_LEAVE_SCALE = 0.2;
const AP_LEAVE_BLUR = 28;

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

// How many cards have gone, 0…2, at progress p: whole numbers while
// holding, eased in between.
function stackPosition(p) {
  return AP_SWAPS.reduce((sum, [a, b]) => sum + easeInOutCubic(clamp01((p - a) / (b - a))), 0);
}

// "Approaches": it slides up over the end of Creative Stack (pulled up a
// screen in CSS), its stack growing to full size as it comes, like the reel
// in From pixels to products. Then it pins: a stack of three cards, front to back Think it, Design it,
// Build it, with the tops of the ones behind peeking out above. Scrolling
// dissolves the front card (it swells, blurs and fades away) while the
// cards behind step forward, until Build it is left. Scrubbed by the scroll;
// reduced motion shows the three cards side by side.
export function ApproachStack() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (reduced || !section || !stage) return undefined;
    const cards = [...stage.querySelectorAll(".ap-card")];
    let frame = 0;
    let visible = false;

    const update = () => {
      frame = 0;
      const top = section.getBoundingClientRect().top;
      const travel = section.offsetHeight - window.innerHeight;
      const p = clamp01(-top / Math.max(1, travel));
      stage.style.setProperty("--ap-in", easeInOutCubic(clamp01(1 - top / window.innerHeight)).toFixed(4));
      const pos = stackPosition(p);

      cards.forEach((card, i) => {
        // Places from the front: 0 is the front card, 1 the one behind it;
        // below 0 it is on its way out.
        const depth = i - pos;
        let scale;
        let rise;
        let blur = 0;
        let opacity = 1;
        if (depth >= 0) {
          scale = 1 - AP_STEP_SCALE * depth;
          rise = AP_STEP_RISE * depth - 0.01 * depth * depth;
        } else {
          const t = Math.min(1, -depth);
          scale = 1 + AP_LEAVE_SCALE * t;
          // Swells about its middle, sinking a touch.
          rise = (scale - 1) / 2 - 0.05 * t;
          blur = AP_LEAVE_BLUR * t;
          opacity = 1 - t;
        }
        card.style.transform = `translate3d(0, ${(-rise * 100).toFixed(2)}%, 0) scale(${scale.toFixed(4)})`;
        card.style.filter = blur > 0.05 ? `blur(${blur.toFixed(2)}px)` : "";
        card.style.opacity = opacity.toFixed(3);
        card.style.visibility = opacity <= 0.001 ? "hidden" : "";
        // Once a leaving card is a third gone it drops behind the new front
        // card, so what is left of it reads as a soft glow around it.
        card.style.zIndex = depth < -0.35 ? "0" : String(STEPS.length - i);
        // Words show only on the card in front.
        card.style.setProperty("--ap-copy", clamp01(1 - Math.abs(depth) * 1.4).toFixed(3));
      });
    };
    const onScroll = () => {
      if (visible && !frame) frame = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) onScroll();
    });
    io.observe(section);
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="approaches"
      className={`ap ${reduced ? "is-static" : ""}`.trim()}
      style={reduced ? undefined : { height: `calc(100svh + ${AP_TRAVEL_SCREENS * 100}svh)` }}
      aria-label="Approaches"
    >
      <div ref={stageRef} className="ap-stage">
        <ol className="ap-stack">
          {STEPS.map((step, i) => (
            <li key={step.title} className={`ap-card ap-card-${i + 1}`} style={{ zIndex: STEPS.length - i }}>
              <span className="ap-card-title">{step.title}</span>
              <span className="ap-card-text">{step.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
