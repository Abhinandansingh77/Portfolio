import { useEffect, useRef, useState } from "react";
import profilePhoto from "../Assets/profile photo.png";

// "Engineering Meets Design": a skills map whose centre card builds a profile
// card on a loop (Wireframe → Design → Code → Live). The beams along each
// track follow whichever stage the card is in. Built from the Option E
// reference (desktop 1440 artboard, mobile 390 artboard); all positions below
// are that artboard's, in px.

const CYCLE = 12400;
const STAGE_START = [0, 2600, 5200, 9400, CYCLE];
const STAGE_NAMES = ["Wireframe", "Design", "Code", "Live"];
// Held frame for reduced motion: the finished, live card.
const STILL_T = 10400;

const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
const stageOf = (t) => (t < 2600 ? 0 : t < 5200 ? 1 : t < 9400 ? 2 : 3);

function useReducedMotion() {
  const query = "(prefers-reduced-motion: reduce)";
  const [reduce, setReduce] = useState(() => typeof window !== "undefined" && window.matchMedia?.(query).matches);
  useEffect(() => {
    const mq = window.matchMedia?.(query);
    if (!mq) return undefined;
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduce;
}

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

// ── The build card ──

// Wireframe blocks: left, top, width, height, radius.
const WIRE_BLOCKS = [
  [20, 20, 48, 48, 24],
  [20, 88, 80, 14, 4],
  [20, 128, 64, 8, 4],
  [156, 128, 64, 8, 4],
  [20, 154, 52, 8, 4],
  [168, 154, 52, 8, 4],
  [20, 186, 84, 32, 16],
  [112, 186, 84, 32, 16],
];

// Source typed in the Code stage, as [text, token] runs.
const CODE_LINES = [
  [["const ", "k"], ["ProfileCard", "f"], [" = () => (", "p"]],
  [["  <", "p"], ["Card", "t"], [">", "p"]],
  [["    <", "p"], ["Avatar", "t"], [" src", "a"], ["=", "p"], ["{abhi}", "b"], [" />", "p"]],
  [["    <", "p"], ["h3", "t"], [">", "p"], ["Abhi", "x"], ["</", "p"], ["h3", "t"], [">", "p"]],
  [["    <", "p"], ["Row", "t"], [" k", "a"], ["=", "p"], ['"Home town"', "q"], [" v", "a"], ["=", "p"], ['"Chandigarh"', "q"], ["/>", "p"]],
  [["    <", "p"], ["Row", "t"], [" k", "a"], ["=", "p"], ['"Bookings"', "q"], [" v", "a"], ["=", "p"], ['"3 times"', "q"], ["/>", "p"]],
  [["    <", "p"], ["Btn", "t"], [" icon", "a"], ["=", "p"], ["{Phone}", "b"], [">", "p"], ["Call", "x"], ["</", "p"], ["Btn", "t"], [">", "p"]],
  [["    <", "p"], ["Btn", "t"], [" ghost", "a"], [">", "p"], ["Message", "x"], ["</", "p"], ["Btn", "t"], [">", "p"]],
  [["  </", "p"], ["Card", "t"], [">", "p"]],
  [[");", "p"]],
];
const lineLength = (line) => line.reduce((n, [text]) => n + text.length, 0);
const CODE_TOTAL = CODE_LINES.reduce((n, line) => n + lineLength(line), 0);

function codeFrame(st, local) {
  let left = st === 2 ? Math.floor(clamp01((local - 350) / 3200) * CODE_TOTAL) : CODE_TOTAL;
  let caretPlaced = false;
  return CODE_LINES.map((line, index) => {
    const length = lineLength(line);
    const shown = Math.min(left, length);
    const runs = [];
    let remaining = shown;
    for (const [text, token] of line) {
      if (remaining <= 0) break;
      const take = Math.min(remaining, text.length);
      runs.push([text.slice(0, take), token]);
      remaining -= take;
    }
    left -= shown;
    let caret = false;
    if (!caretPlaced && (shown < length || index === CODE_LINES.length - 1)) {
      caret = true;
      caretPlaced = true;
    }
    return { runs, caret: caret && st === 2 };
  });
}

function PhoneIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
    </svg>
  );
}

// Drives its own clock with requestAnimationFrame; pauses on hover, while
// off screen, and holds the finished card for reduced motion.
function BuildCard({ onStage }) {
  const reduce = useReducedMotion();
  const rootRef = useRef(null);
  const hoverRef = useRef(false);
  const visibleRef = useRef(true);
  const [t, setT] = useState(reduce ? STILL_T : 0);

  useEffect(() => {
    if (reduce) {
      setT(STILL_T);
      return undefined;
    }
    let time = 0;
    let last = performance.now();
    let raf = 0;
    const tick = (now) => {
      const dt = Math.min(now - last, 100);
      last = now;
      if (!hoverRef.current && visibleRef.current) {
        time = (time + dt) % CYCLE;
        setT(time);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const io =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(([entry]) => {
            visibleRef.current = entry.isIntersecting;
          })
        : null;
    if (rootRef.current) io?.observe(rootRef.current);

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, [reduce]);

  const still = reduce;
  const st = stageOf(t);
  const local = t - STAGE_START[st];
  const dur = STAGE_START[st + 1] - STAGE_START[st];

  useEffect(() => {
    onStage?.(st);
  }, [st, onStage]);

  const wireO = st === 0 ? 1 : st === 1 ? 1 - clamp01(local / 500) : 0;
  const hiFi = (i) => {
    if (st === 1) return clamp01((local - 350 - i * 170) / 280);
    if (st === 3) return still ? 1 : clamp01((local - 250 - i * 40) / 300) * (1 - clamp01((local - (dur - 450)) / 450));
    return 0;
  };
  const layer = (i) => {
    const o = hiFi(i);
    return { opacity: o, transform: `translateY(${(1 - o) * 6}px)` };
  };
  const selO = st === 1 ? clamp01((local - 1300) / 200) * (1 - clamp01((local - 2250) / 250)) : 0;
  const codeO = st === 2 ? clamp01(local / 300) * (1 - clamp01((local - 3900) / 300)) : 0;
  const liveO = st === 3 ? (still ? 1 : clamp01((local - 300) / 300) * (1 - clamp01((local - (dur - 450)) / 450))) : 0;
  const p = st === 3 ? clamp01((local - 500) / 900) : 0;
  const ease = 1 - (1 - p) ** 3;
  const arrowX = Math.round(205 + (58 - 205) * ease);
  const arrowY = Math.round(228 + (204 - 228) * ease);
  const arrowO = st === 3 && !still ? clamp01((local - 400) / 200) * (1 - clamp01((local - (dur - 550)) / 300)) : 0;
  const pressed = st === 3 && !still && local > 1550 && local < 1800;
  const calling = st === 3 && !still && local >= 1550;
  const lines = st === 2 ? codeFrame(st, local) : null;

  return (
    <div
      ref={rootRef}
      className="em-card"
      data-stage={st}
      role="img"
      aria-label="A profile card for Abhi being built: wireframe, high-fidelity design, React code, then the live card"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      {/* Wireframe */}
      <div className="em-card-dash" style={{ opacity: wireO }} />
      {WIRE_BLOCKS.map(([x, y, w, h, r], i) => {
        const o = st === 0 ? clamp01((local - 200 - i * 200) / 300) : wireO;
        return (
          <div
            key={i}
            className="em-card-wire"
            style={{ left: x, top: y, width: w, height: h, borderRadius: r, opacity: o, transform: `scale(${0.92 + 0.08 * o})` }}
          />
        );
      })}

      {/* Hi-fi / live */}
      <div className="em-card-layer" style={layer(0)}>
        <img className="em-card-avatar" src={profilePhoto} alt="" />
      </div>
      <div className="em-card-layer" style={layer(1)}>
        <div className="em-card-name">Abhi</div>
      </div>
      <div className="em-card-layer" style={layer(2)}>
        <div className="em-card-row" style={{ top: 124 }}>
          <span>Home town</span>
          <b>Chandigarh</b>
        </div>
      </div>
      <div className="em-card-layer" style={layer(3)}>
        <div className="em-card-row" style={{ top: 150 }}>
          <span>Bookings</span>
          <b>3 times</b>
        </div>
      </div>
      <div className="em-card-layer" style={layer(4)}>
        <div className={`em-card-call ${pressed ? "is-pressed" : ""}`.trim()}>
          <PhoneIcon />
          {calling ? "Calling…" : "Call"}
        </div>
      </div>
      <div className="em-card-layer" style={layer(5)}>
        <div className="em-card-msg">Message</div>
      </div>

      {/* Design-tool selection on the name */}
      <div className="em-card-layer" style={{ opacity: selO }}>
        <div className="em-sel-box" />
        <div className="em-sel-handle" style={{ left: 11, top: 77 }} />
        <div className="em-sel-handle" style={{ left: 71, top: 77 }} />
        <div className="em-sel-handle" style={{ left: 11, top: 109 }} />
        <div className="em-sel-handle" style={{ left: 71, top: 109 }} />
        <div className="em-sel-tag">H3 · 18</div>
      </div>

      {/* Live badge and pointer */}
      <div className="em-card-live" style={{ opacity: liveO }} />
      <svg className="em-card-pointer" style={{ left: arrowX, top: arrowY, opacity: arrowO }} width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 2l16 9.5-7 1.6-3.6 6.9z" fill="#111113" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>

      {/* Code */}
      {lines ? (
        <div className="em-card-code" style={{ opacity: codeO }}>
          {lines.map((line, i) => (
            <div key={i} className="em-code-line">
              {line.runs.map(([text, token], j) => (
                <span key={j} className={`em-tok-${token}`}>
                  {text}
                </span>
              ))}
              {line.caret ? <span className="em-caret" /> : null}
            </div>
          ))}
        </div>
      ) : null}

      <div className="em-card-specular" />
    </div>
  );
}

// ── Map pieces ──

// Lines are drawn the Aceternity way: a hairline over a faint halo, a ring on
// every joint, and one short dash of light that drifts along a line slowly.
const BEAM_SPEED = 78; // px per second
const BEAM_GLOW = 22;
const BEAM_CORE = 7;

// A straight line from (x1, y1) to (x2, y2). `dir` is "fwd" (towards x2, y2),
// "rev", or nothing (no light on it this stage).
function Line({ x1, y1, x2, y2, dir }) {
  const len = Math.hypot(x2 - x1, y2 - y1);
  const [ax, ay, bx, by] = dir === "rev" ? [x2, y2, x1, y1] : [x1, y1, x2, y2];
  const d = `M ${ax} ${ay} L ${bx} ${by}`;
  const duration = `${((len + BEAM_GLOW) / BEAM_SPEED).toFixed(2)}s`;
  return (
    <g>
      <path className="em-line-halo" d={d} />
      <path className="em-line" d={d} />
      {dir ? (
        <g key={dir}>
          <path
            className="em-beam-glow"
            d={d}
            filter="url(#em-glow)"
            strokeDasharray={`${BEAM_GLOW} ${len + BEAM_GLOW}`}
            style={{ "--from": `${BEAM_GLOW}px`, "--to": `${-len}px`, animationDuration: duration }}
          />
          <path
            className="em-beam-core"
            d={d}
            strokeDasharray={`${BEAM_CORE} ${len + BEAM_GLOW}`}
            style={{ "--from": `${BEAM_CORE}px`, "--to": `${-(len + BEAM_GLOW - BEAM_CORE)}px`, animationDuration: duration }}
          />
        </g>
      ) : null}
    </g>
  );
}

function Joint({ x, y }) {
  return <circle className="em-joint" cx={x} cy={y} r="3" />;
}

function GlowFilter() {
  return (
    <defs>
      <filter id="em-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}

function Pill({ children, style, small = false }) {
  return (
    <div className={`em-pill lg ${small ? "is-small" : ""}`.trim()} style={style}>
      {children}
    </div>
  );
}

function StageSteps({ stage, className = "", style }) {
  return (
    <div className={`em-steps ${className}`.trim()} style={style}>
      {STAGE_NAMES.map((name, i) => (
        <div key={name} className={`em-step ${i === stage ? "is-active" : ""}`.trim()}>
          <span className="em-step-dot" />
          {name}
        </div>
      ))}
    </div>
  );
}

// Which groups light up in each stage.
const groupOn = (group, stage) => (group === "design" ? stage <= 1 : stage === 2);

// ── Desktop: horizontal map on the 1440 artboard, scaled to fit ──

const DESK_W = 1440;
// The artboard's heading band (y < 150) is replaced by the section header.
const DESK_Y = 150;
const DESK_H = 520;
const Y1 = 260 - DESK_Y;
const Y2 = 500 - DESK_Y;
const CARD_TOP = 380 - DESK_Y;

// x, mono, label, above the line?, line y, group.
const DESK_STATIONS = [
  [120, "UX", "UI/UX Design", false, Y2, "design"],
  [200, "RWD", "Responsive Design", true, Y2, "design"],
  [280, "DS", "Design Systems", false, Y2, "design"],
  [360, "Pr", "Prototyping", true, Y2, "design"],
  [440, "A11y", "Accessibility", false, Y2, "design"],
  [1036, "</>", "HTML", true, Y2, "dev"],
  [1078, "{}", "CSS", false, Y2, "dev"],
  [1120, "JS", "JavaScript", true, Y2, "dev"],
  [1162, "Re", "React", false, Y2, "dev"],
  [1204, "Nx", "Next.js", true, Y2, "dev"],
  [1246, "Vi", "Vite", false, Y2, "dev"],
  [1288, "Tw", "Tailwind CSS", true, Y2, "dev"],
  [1330, "git", "Git", false, Y2, "dev"],
  [1372, "GH", "GitHub", true, Y2, "dev"],
  [400, "AI", "AI coding tools", true, Y1, "ai"],
  [1000, "Rp", "Rapid prototyping", true, Y1, "ai"],
  [1160, "Wf", "Dev workflows", true, Y1, "ai"],
];

// Rails: x1, y1, x2, y2, light direction by stage (as on the reference: into
// the card while designing, out to the tools in Code, back out when live).
const DESK_RAILS = [
  [48, Y2, 600, Y2, { 0: "fwd", 1: "fwd", 3: "rev" }],
  [840, Y2, 1416, Y2, { 2: "rev", 3: "fwd" }],
  [120, Y1, 720, Y1, { 2: "fwd" }],
  [1416, Y1, 720, Y1, { 2: "fwd" }],
  [120, Y2, 120, Y1, { 2: "fwd" }],
  [1416, Y2, 1416, Y1, { 2: "fwd" }],
  [720, Y1, 720, CARD_TOP, { 2: "fwd" }],
];

function DesktopMap({ stage, onStage }) {
  const wrapRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return undefined;
    const update = () => setScale(Math.min(1, wrap.clientWidth / DESK_W));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="em-map-desktop" style={{ height: DESK_H * scale }}>
      <div className="em-stage" style={{ width: DESK_W, height: DESK_H, transform: `translateX(-50%) scale(${scale})` }}>
        <div className="em-glow" style={{ left: 470, top: 250 - DESK_Y, width: 500, height: 500 }} />

        <svg className="em-lines" width={DESK_W} height={DESK_H} viewBox={`0 0 ${DESK_W} ${DESK_H}`} aria-hidden="true">
          <GlowFilter />
          {DESK_RAILS.map(([x1, y1, x2, y2, dirs], i) => (
            <Line key={i} x1={x1} y1={y1} x2={x2} y2={y2} dir={dirs[stage]} />
          ))}
          {DESK_STATIONS.map(([x, , , up, y]) => (
            <Line key={`stub-${x}-${y}`} x1={x} y1={y} x2={x} y2={up ? y - 28 : y + 28} />
          ))}
          {/* Rings on every joint and loose end. */}
          <Joint x={48} y={Y2} />
          <Joint x={1416} y={Y2} />
          <Joint x={120} y={Y1} />
          <Joint x={1416} y={Y1} />
          {DESK_STATIONS.map(([x, , , , y]) => (
            <Joint key={`j-${x}-${y}`} x={x} y={y} />
          ))}
        </svg>

        <Pill style={{ left: 720, top: Y1 }}>AI-Assisted Development</Pill>
        <div className="em-caption" style={{ left: 720, top: 222 - DESK_Y }}>Speeds up the loop</div>
        <Pill style={{ left: 530, top: Y2 }}>Product Design</Pill>
        <div className="em-caption" style={{ left: 530, top: 532 - DESK_Y }}>Shapes the experience</div>
        <Pill style={{ left: 942, top: Y2 }}>Frontend Development</Pill>
        <div className="em-caption" style={{ left: 942, top: 532 - DESK_Y }}>Builds the interface</div>

        {DESK_STATIONS.map(([x, mono, label, up, y, group]) => (
          <div key={`st-${x}-${y}`} className="em-station" style={{ left: x }}>
            <div className={`em-tile lg ${groupOn(group, stage) ? "is-on" : ""}`.trim()} style={{ left: -22, top: up ? y - 72 : y + 28 }}>
              {mono}
            </div>
            <div className="em-label is-center" style={{ top: up ? y - 92 : y + 80 }}>
              {label}
            </div>
          </div>
        ))}

        <div className="em-card-slot" style={{ left: 600, top: CARD_TOP }}>
          <BuildCard onStage={onStage} />
        </div>

        <StageSteps stage={stage} className="is-desktop" style={{ left: 720, top: 642 - DESK_Y }} />
      </div>
    </div>
  );
}

// ── Mobile / tablet: vertical spine, centred, at true size ──

const MOB_Y = 130;
const MOB_H = 980;
const cx = (dx) => `calc(50% + ${dx}px)`;
// The spine's line art lives in a 160px-wide strip centred on the column.
const SPINE_W = 160;
const SC = SPINE_W / 2;

// y, mono, label, on the left?
const MOB_DESIGN = [
  [236, "UX", "UI/UX Design", true],
  [296, "DS", "Design Systems", false],
  [356, "A11y", "Accessibility", true],
];
const MOB_DEV = [
  [860, "Re", "React", true],
  [920, "Nx", "Next.js", false],
  [980, "Tw", "Tailwind CSS", true],
  [1040, "JS", "JavaScript", false],
];

// Spine segments: from y, to y, light direction by stage ("fwd" = down).
const MOB_RAILS = [
  [150, 422, { 0: "fwd", 1: "fwd", 3: "rev" }],
  [422, 484, { 2: "fwd" }],
  [724, 770, {}],
  [770, 1090, { 2: "rev", 3: "fwd" }],
];

function MobileStation({ y, mono, label, left, group, stage }) {
  return (
    <div className="em-station is-row" style={{ top: y - MOB_Y }}>
      <div className={`em-tile lg ${groupOn(group, stage) ? "is-on" : ""}`.trim()} style={{ left: cx(left ? -72 : 28), top: -22 }}>
        {mono}
      </div>
      <div className={`em-label ${left ? "is-right" : "is-left"}`} style={left ? { right: cx(80), top: -8 } : { left: cx(80), top: -8 }}>
        {label}
      </div>
    </div>
  );
}

function MobileMap({ stage, onStage }) {
  const stations = [...MOB_DESIGN.map((s) => [...s, "design"]), ...MOB_DEV.map((s) => [...s, "dev"])];
  return (
    <div className="em-map-mobile" style={{ height: MOB_H }}>
      <div className="em-glow" style={{ left: cx(-255), top: 360 - MOB_Y, width: 510, height: 500 }} />

      <svg
        className="em-lines"
        style={{ left: cx(-SC), top: 0 }}
        width={SPINE_W}
        height={MOB_H}
        viewBox={`0 0 ${SPINE_W} ${MOB_H}`}
        aria-hidden="true"
      >
        <GlowFilter />
        {MOB_RAILS.map(([a, b, dirs], i) => (
          <Line key={i} x1={SC} y1={a - MOB_Y} x2={SC} y2={b - MOB_Y} dir={dirs[stage]} />
        ))}
        {stations.map(([y, , , left]) => (
          <Line key={`stub-${y}`} x1={SC} y1={y - MOB_Y} x2={left ? SC - 28 : SC + 28} y2={y - MOB_Y} />
        ))}
        <Joint x={SC} y={150 - MOB_Y} />
        {stations.map(([y]) => (
          <Joint key={`j-${y}`} x={SC} y={y - MOB_Y} />
        ))}
      </svg>

      <Pill style={{ left: "50%", top: 172 - MOB_Y }}>Product Design</Pill>
      {MOB_DESIGN.map(([y, mono, label, left]) => (
        <MobileStation key={mono} y={y} mono={mono} label={label} left={left} group="design" stage={stage} />
      ))}
      <Pill small style={{ left: "50%", top: 398 - MOB_Y }}>+2 more</Pill>

      <Pill style={{ left: "50%", top: 446 - MOB_Y }}>AI-Assisted Development</Pill>
      <div className="em-card-slot" style={{ left: cx(-120), top: 484 - MOB_Y }}>
        <BuildCard onStage={onStage} />
      </div>
      <StageSteps stage={stage} className="is-mobile" style={{ left: "50%", top: 736 - MOB_Y }} />

      <Pill style={{ left: "50%", top: 796 - MOB_Y }}>Frontend Development</Pill>
      {MOB_DEV.map(([y, mono, label, left]) => (
        <MobileStation key={mono} y={y} mono={mono} label={label} left={left} group="dev" stage={stage} />
      ))}
      <Pill small style={{ left: "50%", top: 1090 - MOB_Y }}>+5 more</Pill>
    </div>
  );
}

export function EngineeringMap() {
  const [stage, setStage] = useState(0);
  const isCompact = useMediaQuery("(max-width: 1179px)");
  return isCompact ? <MobileMap stage={stage} onStage={setStage} /> : <DesktopMap stage={stage} onStage={setStage} />;
}
