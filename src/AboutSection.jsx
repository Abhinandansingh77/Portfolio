import { Fragment, useEffect, useRef, useState } from "react";

// "About me", after deformo.framer.website: the heading writes itself in
// letter by letter as the section arrives (their hero title), then the panel
// pins and the body types itself in as you scroll (their "We approach every
// project…" statement), each letter coming through a soft, blurred edge.

const LINES = ["A Designer's Eye.", "An Engineer's Mindset."];

const PARAGRAPHS = [
  "With a background in UI/UX and product design, I'm expanding my expertise into frontend engineering to take greater ownership of the products I create.",
  "I bring together visual precision, user-centered thinking, and hands-on frontend development to build better digital experiences.",
];

// Scroll progress (0–1 across the pinned stretch): the heading lifts first,
// then the body types in, then it holds before the panel unpins.
const LIFT_WINDOW = [0, 0.16];
const TYPE_WINDOW = [0.14, 0.86];
// How many letters are part-way in at once: the width of the soft edge.
const EDGE = 9;
const EDGE_BLUR = 8;

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const along = (p, [start, end]) => clamp01((p - start) / (end - start));

// Words stay on one line; each letter is its own span so it can fade alone.
// The spaces sit between the word spans so lines can still break there.
// `start` numbers the letters across the whole block.
function SplitText({ text, start, charClass }) {
  const words = text.split(" ");
  let i = start;
  return words.map((word, w) => (
    <Fragment key={w}>
      {w > 0 ? " " : null}
      <span className="about-word">
        {[...word].map((ch, c) => (
          <span key={c} className={charClass} style={{ "--c": i++ }}>
            {ch}
          </span>
        ))}
      </span>
    </Fragment>
  ));
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return undefined;
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export function AboutSection() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const bodyRef = useRef(null);
  const [titleIn, setTitleIn] = useState(false);
  const reduced = usePrefersReducedMotion();

  // Start the letter-by-letter title once it is well into the viewport (in
  // the top three quarters), so it writes itself where it can be read.
  useEffect(() => {
    const node = headRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setTitleIn(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleIn(true);
          io.disconnect();
        }
      },
      { threshold: 0.6, rootMargin: "0px 0px -25% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  // Scroll-scrubbed: lift the heading, then type the body in letter by letter.
  useEffect(() => {
    if (reduced) return undefined;
    const section = sectionRef.current;
    const head = headRef.current;
    const body = bodyRef.current;
    if (!section || !head || !body) return undefined;

    const chars = [...body.querySelectorAll(".about-type-char")];
    const shown = new Float32Array(chars.length).fill(-1);
    let frame = 0;
    let lift = 0;

    const measure = () => {
      // The heading starts centred on its own: push it down by half of what
      // the body adds below it.
      const gap = parseFloat(getComputedStyle(body).marginTop) || 0;
      lift = (body.offsetHeight + gap) / 2;
    };

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const p = travel > 0 ? clamp01(-rect.top / travel) : 1;

      head.style.transform = `translate3d(0, ${(1 - easeInOut(along(p, LIFT_WINDOW))) * lift}px, 0)`;

      // The edge runs from before the first letter to past the last, so the
      // first starts from nothing and the last ends fully in.
      const head0 = along(p, TYPE_WINDOW) * (chars.length + EDGE);
      for (let i = 0; i < chars.length; i += 1) {
        const t = Math.round(clamp01((head0 - i) / EDGE) * 100) / 100;
        if (t === shown[i]) continue;
        shown[i] = t;
        const style = chars[i].style;
        style.opacity = t;
        style.filter = t > 0 && t < 1 ? `blur(${((1 - t) * EDGE_BLUR).toFixed(1)}px)` : "";
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const ro = new ResizeObserver(() => {
      measure();
      schedule();
    });
    ro.observe(body);
    measure();
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [reduced]);

  let bodyStart = 0;

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`about-section ${titleIn ? "is-in" : ""} ${reduced ? "is-static" : ""}`.replace(/\s+/g, " ").trim()}
    >
      <div className="about-pin">
        <div className="about-inner">
          <h2 ref={headRef} className="about-title" aria-label={LINES.join(" ")}>
            <span className="about-line" aria-hidden="true">
              <SplitText text={LINES[0]} start={0} charClass="about-char" />
            </span>
            <span className="about-line is-muted" aria-hidden="true">
              <SplitText text={LINES[1]} start={LINES[0].length} charClass="about-char" />
            </span>
          </h2>
          <div ref={bodyRef} className="about-body">
            {PARAGRAPHS.map((text) => {
              const start = bodyStart;
              bodyStart += text.length;
              return (
                <p key={start} className="about-para">
                  <span className="about-sr">{text}</span>
                  <span aria-hidden="true">
                    <SplitText text={text} start={start} charClass="about-type-char" />
                  </span>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
