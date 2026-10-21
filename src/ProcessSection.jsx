import { useEffect, useRef, useState } from "react";

// "From Design to Development": the process as floating "message" cards and
// the tools as small glass tiles around one big heading, on a faint grid.
// Laid out after the team-page reference: a text-selection highlight on the
// heading, chat-style cards, and captioned tiles where the portraits were.

const STEPS = [
  { n: "01", title: "Understand", text: "Define the problem, user needs, and product goals." },
  { n: "02", title: "Design", text: "Create clear, intuitive interfaces with thoughtful interactions." },
  { n: "03", title: "Build", text: "Translate designs into responsive, functional web experiences." },
  { n: "04", title: "Refine", text: "Test, improve, and polish the experience across devices." },
];

function FigmaMark() {
  return (
    <svg viewBox="0 0 38 57" width="26" height="39" aria-hidden="true">
      <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
      <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
      <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
      <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
    </svg>
  );
}

function JsMark() {
  return (
    <span className="pd-js" aria-hidden="true">
      JS
    </span>
  );
}

const TOOLS = {
  react: { label: "React", mark: <i className="ri-reactjs-line pd-mark-react" aria-hidden="true" /> },
  next: { label: "Next.js", mark: <i className="ri-nextjs-fill pd-mark-mono" aria-hidden="true" /> },
  tailwind: { label: "Tailwind CSS", mark: <i className="ri-tailwind-css-fill pd-mark-tailwind" aria-hidden="true" /> },
  figma: { label: "Figma", mark: <FigmaMark /> },
  js: { label: "JavaScript", mark: <JsMark /> },
  chatgpt: { label: "ChatGPT", mark: <i className="ri-openai-fill pd-mark-mono" aria-hidden="true" /> },
  claude: { label: "Claude Code", mark: <i className="ri-claude-fill pd-mark-claude" aria-hidden="true" /> },
};

function ToolTile({ id }) {
  const tool = TOOLS[id];
  return (
    <figure className="pd-tool">
      <span className="pd-tool-frame lg">
        <span className="pd-tool-inner">{tool.mark}</span>
      </span>
      <figcaption className="pd-tool-label">{tool.label}</figcaption>
    </figure>
  );
}

function StepCard({ step }) {
  return (
    <div className="pd-step lg">
      <span className="pd-step-icon" aria-hidden="true">
        <i className="ri-terminal-line" />
      </span>
      <span className="pd-step-body">
        <span className="pd-step-head">
          <b>{step.title}</b>
          <span>Step {step.n}</span>
        </span>
        <span className="pd-step-text">{step.text}</span>
      </span>
    </div>
  );
}

function Heading() {
  return (
    <h2 className="pd-title">
      From Design to{" "}
      <span className="pd-select">
        <span className="pd-select-bg" aria-hidden="true" />
        <span className="pd-handle is-start" aria-hidden="true" />
        <span className="pd-handle is-end" aria-hidden="true" />
        <span className="pd-select-text">Development</span>
      </span>
    </h2>
  );
}

// Desktop artboard (1440 × 720): where each piece floats, clear of the
// heading band in the middle. [kind, id or step index, left, top]
const ART_W = 1440;
const ART_H = 720;
const PLACEMENTS = [
  ["tool", "react", 140, 140],
  ["step", 0, 270, 178],
  ["tool", "next", 560, 34],
  ["step", 1, 700, 104],
  ["step", 2, 1060, 30],
  ["tool", "tailwind", 1100, 170],
  ["tool", "figma", 236, 440],
  ["tool", "js", 486, 532],
  ["step", 3, 790, 560],
  ["tool", "chatgpt", 1196, 436],
  ["tool", "claude", 1300, 586],
];

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => typeof window !== "undefined" && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

// Adds .is-in once the section scrolls into view (drives the entrance and the
// selection sweep).
function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [ref]);
  return inView;
}

function DesktopBoard() {
  const wrapRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return undefined;
    const update = () => setScale(Math.min(1, wrap.clientWidth / ART_W));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="pd-board" style={{ height: ART_H * scale }}>
      <div className="pd-art" style={{ width: ART_W, height: ART_H, transform: `translateX(-50%) scale(${scale})` }}>
        <div className="pd-art-title">
          <Heading />
        </div>
        {PLACEMENTS.map(([kind, key, left, top], i) => (
          <div key={`${kind}-${key}`} className="pd-float" style={{ left, top, "--i": i }}>
            {kind === "tool" ? <ToolTile id={key} /> : <StepCard step={STEPS[key]} />}
          </div>
        ))}
      </div>
    </div>
  );
}

function CompactBoard() {
  return (
    <div className="pd-compact">
      <Heading />
      <div className="pd-compact-steps">
        {STEPS.map((step, i) => (
          <div key={step.n} className="pd-float" style={{ "--i": i }}>
            <StepCard step={step} />
          </div>
        ))}
      </div>
      <div className="pd-compact-tools">
        {Object.keys(TOOLS).map((id, i) => (
          <div key={id} className="pd-float" style={{ "--i": i + 4 }}>
            <ToolTile id={id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProcessSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);
  const isCompact = useMediaQuery("(max-width: 1099px)");

  return (
    <section ref={sectionRef} id="process" className={`pd-section ${inView ? "is-in" : ""}`.trim()}>
      <div className="pd-grid" aria-hidden="true" />
      {isCompact ? <CompactBoard /> : <DesktopBoard />}
    </section>
  );
}
