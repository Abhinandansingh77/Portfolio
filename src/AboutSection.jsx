import { useEffect, useRef, useState } from "react";

// "About me": the heading writes itself in letter by letter as the section
// arrives (after the Deformo hero title), then the panel pins while the
// heading lifts and each paragraph slides up into place as you keep scrolling.

const LINES = ["A Designer's Eye.", "An Engineer's Mindset."];

const PARAGRAPHS = [
  "With a background in UI/UX and product design, I'm expanding my expertise into frontend engineering to take greater ownership of the products I create.",
  "I bring together visual precision, user-centered thinking, and hands-on frontend development to build better digital experiences.",
];

// Scroll progress (0–1 across the pinned stretch) where each paragraph
// starts and finishes arriving.
const PARA_WINDOWS = [
  [0.12, 0.42],
  [0.34, 0.64],
];
const LIFT_WINDOW = [0.02, 0.36];
const PARA_SHIFT = 120;

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const along = (p, [start, end]) => easeOut(clamp01((p - start) / (end - start)));

// Words stay on one line; each character fades on its own delay.
function SplitLine({ text, offset, className }) {
  let i = offset;
  return (
    <span className={`about-line ${className}`.trim()} aria-hidden="true">
      {text.split(" ").map((word, w) => (
        <span key={w} className="about-word">
          {[...word].map((ch, c) => (
            <span key={c} className="about-char" style={{ "--c": i++ }}>
              {ch}
            </span>
          ))}
          {w < text.split(" ").length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
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
  const paraRefs = useRef([]);
  const [titleIn, setTitleIn] = useState(false);
  const reduced = usePrefersReducedMotion();

  // Start the letter-by-letter title once it is well into the viewport.
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
      { threshold: 0.6 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  // Scroll-scrubbed: lift the heading and bring each paragraph up in turn.
  useEffect(() => {
    if (reduced) return undefined;
    const section = sectionRef.current;
    const head = headRef.current;
    const body = bodyRef.current;
    if (!section || !head || !body) return undefined;

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

      head.style.transform = `translate3d(0, ${(1 - along(p, LIFT_WINDOW)) * lift}px, 0)`;
      paraRefs.current.forEach((el, i) => {
        if (!el) return;
        const t = along(p, PARA_WINDOWS[i]);
        el.style.opacity = t;
        el.style.transform = `translate3d(0, ${(1 - t) * PARA_SHIFT}px, 0)`;
      });
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

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`about-section ${titleIn ? "is-in" : ""} ${reduced ? "is-static" : ""}`.replace(/\s+/g, " ").trim()}
    >
      <div className="about-pin">
        <div className="about-inner">
          <h2 ref={headRef} className="about-title" aria-label={LINES.join(" ")}>
            <SplitLine text={LINES[0]} offset={0} />
            <SplitLine text={LINES[1]} offset={LINES[0].length} className="is-muted" />
          </h2>
          <div ref={bodyRef} className="about-body">
            {PARAGRAPHS.map((text, i) => (
              <p
                key={i}
                ref={(el) => {
                  paraRefs.current[i] = el;
                }}
                className="about-para"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
