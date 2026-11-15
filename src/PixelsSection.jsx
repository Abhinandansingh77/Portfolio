import { useEffect, useRef } from "react";

// From pixels to products: a heading over a diagram of how the work travels.
// One row, left to right: Figma, React.js, GitHub, the live website, with
// JavaScript above React.js and Next.js below it. Dark boxes (48px, the two
// side ones 40px) joined by short dashed connectors, with a stream of
// brand-orange circles running along each one in an endless loop.
//
// The diagram is drawn twice, on two coordinate grids: wide (the row) and
// tall (a column, for phones, with the two small boxes either side of
// React.js). CSS shows one; each node carries its position on both (--x/--y
// and --tx/--ty, as shares of the diagram). The wide grid is in real pixels
// at full width (760), so the gaps below are measured against 48px boxes.
const WIDE = { w: 760, h: 280 };
const TALL = { w: 400, h: 720 };

// `small` marks the two side boxes; `step` is the order things arrive in.
const nodes = [
  { id: "figma", label: "Figma", figma: true, wide: [64, 130], tall: [200, 70], step: 0 },
  { id: "react", label: "React.js", icon: "ri-reactjs-line", wide: [300, 130], tall: [200, 250], step: 1 },
  { id: "js", label: "JavaScript", icon: "ri-javascript-fill", wide: [300, 36], tall: [70, 250], step: 2, small: true },
  { id: "next", label: "Next.js", icon: "ri-nextjs-fill", wide: [300, 238], tall: [330, 250], step: 2, small: true },
  { id: "github", label: "GitHub", icon: "ri-github-fill", wide: [534, 130], tall: [200, 450], step: 3 },
  { id: "live", label: "Live website", icon: "ri-global-line", wide: [696, 130], tall: [200, 630], step: 4, live: true },
];

// Connectors: straight, stopping short of the boxes (and of the labels under
// them), from `from` to `to`, which is the way the work travels and the way
// the circles move. `step` is the order they appear in.
const wideLinks = [
  { step: 0, from: [100, 130], to: [264, 130] },
  { step: 1, from: [300, 64], to: [300, 98] },
  { step: 1, from: [300, 210], to: [300, 186] },
  { step: 2, from: [336, 130], to: [498, 130] },
  { step: 3, from: [572, 130], to: [660, 130] },
];
const tallLinks = [
  { step: 0, from: [200, 142], to: [200, 206] },
  { step: 1, from: [108, 250], to: [156, 250] },
  { step: 1, from: [292, 250], to: [244, 250] },
  { step: 2, from: [200, 322], to: [200, 406] },
  { step: 3, from: [200, 522], to: [200, 586] },
];

// The moving circles. Each connector carries a stream of them, one behind
// another: every circle slides from the connector's start to its end,
// fading in as it leaves one box and out as it reaches the next, then goes
// round again. SPEED and SPACING are in grid units (about pixels); a
// connector gets as many circles as fit at that spacing (two at least,
// three at most), each starting a fraction of the trip behind the one before.
const DOT_SPEED = 62;
const DOT_SPACING = 42;
const DOT_MAX = 3;

function linkDots({ from, to }) {
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  const length = Math.hypot(dx, dy);
  const count = Math.min(DOT_MAX, Math.max(2, Math.round(length / DOT_SPACING)));
  const dur = Math.max(1.1, length / DOT_SPEED);
  return { dx, dy, dur, count };
}

// Figma's mark in its own five colours; the other tools are single-colour
// Remix icons.
function FigmaMark() {
  return (
    <svg viewBox="0 0 38 57" aria-hidden="true" focusable="false">
      <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
      <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
      <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
      <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
    </svg>
  );
}

function PipelineLines({ grid, links, className }) {
  return (
    <svg
      className={`px-flow-lines ${className}`}
      viewBox={`0 0 ${grid.w} ${grid.h}`}
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {links.map((link) => {
        const { dx, dy, dur, count } = linkDots(link);
        const [x, y] = link.from;
        return (
          <g key={`${x}-${y}`} style={{ "--step": link.step }}>
            <path className="px-flow-line" d={`M${x} ${y} L${link.to[0]} ${link.to[1]}`} />
            <g className="px-flow-dots" style={{ "--dx": `${dx}px`, "--dy": `${dy}px`, "--dur": `${dur}s` }}>
              {Array.from({ length: count }, (_, k) => (
                <circle
                  key={k}
                  className="px-flow-dot"
                  cx={x}
                  cy={y}
                  r="3"
                  style={{ animationDelay: `${(-(k / count) * dur).toFixed(3)}s` }}
                />
              ))}
            </g>
          </g>
        );
      })}
    </svg>
  );
}

function PixelsPipeline({ panelRef }) {
  // The connectors and boxes arrive the first time the diagram is properly
  // in view (.is-drawn). The circles move in a loop the whole time, and fade
  // in with the connectors.
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      panel.classList.add("is-drawn");
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.3) {
          panel.classList.add("is-drawn");
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(panel);
    return () => io.disconnect();
  }, [panelRef]);

  return (
    <div
      ref={panelRef}
      className="px-flow"
      role="img"
      aria-label="How I work: design in Figma, build with React.js, JavaScript and Next.js, version on GitHub, then launch the live website."
    >
      <div className="px-flow-canvas" aria-hidden="true">
        <PipelineLines grid={WIDE} links={wideLinks} className="is-wide" />
        <PipelineLines grid={TALL} links={tallLinks} className="is-tall" />

        {nodes.map((node) => (
          <div
            key={node.id}
            className={`px-flow-node${node.live ? " is-live" : ""}${node.small ? " is-small" : ""}`}
            style={{
              "--x": node.wide[0] / WIDE.w,
              "--y": node.wide[1] / WIDE.h,
              "--tx": node.tall[0] / TALL.w,
              "--ty": node.tall[1] / TALL.h,
              "--step": node.step,
            }}
          >
            <span className="px-flow-box">
              {node.figma ? <FigmaMark /> : <i className={node.icon} />}
            </span>
            <span className="px-flow-label">{node.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PixelsSection() {
  const pinRef = useRef(null);
  const sectionRef = useRef(null);
  const panelRef = useRef(null);

  // The section slides up over the pinned hero, then holds: it stays put
  // for one more scroll (.px-pin is taller than the screen, the section
  // sticks inside it) before the page moves on. On the way in, the heading
  // fades up and the diagram grows to full size, both scrubbed by how far
  // the section has come up (--px-head and --px-in, 0 to 1, eased).
  useEffect(() => {
    const pin = pinRef.current;
    const section = sectionRef.current;
    if (!pin || !section) return undefined;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      section.style.setProperty("--px-head", "1");
      section.style.setProperty("--px-in", "1");
      return undefined;
    }
    let frame = 0;
    const ease = (t) => (t * t * (3 - 2 * t)).toFixed(4);
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const t = Math.min(1, Math.max(0, (vh - pin.getBoundingClientRect().top) / vh));
      section.style.setProperty("--px-head", ease(Math.min(1, t / 0.7)));
      section.style.setProperty("--px-in", ease(t));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div ref={pinRef} className="px-pin">
      <section ref={sectionRef} id="pixels" className="px-section">
        <div className="px-header">
          <h2 className="px-title">From pixels to products</h2>
          <p className="px-sub">
            I bring design thinking and frontend development together to build experiences that look right, feel
            right, and work right.
          </p>
        </div>
        <PixelsPipeline panelRef={panelRef} />
      </section>
    </div>
  );
}
