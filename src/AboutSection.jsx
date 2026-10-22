import { Fragment, useEffect, useRef, useState } from "react";
import resumePdf from "../Assets/Abhinandan_Singh_Resume.pdf";
import { ContactRows } from "./ContactRows.jsx";

// "About me", after the showreel on forma-design-studio.framer.website: a
// pinned panel with the body on top, the heading under it and a small card
// where their reel sits. Scrolling types the body in, then the heading, then
// grows the card (the contact block) out of that slot until it nearly fills
// the screen while the about text sinks back behind it. The card's content
// stays behind a blur until it has landed, then comes into focus piece by
// piece. Progress follows the scroll through a damper, so wheel steps glide.

const LINES = ["A Designer's Eye.", "An Engineer's Mindset."];

const BODY =
  "With a strong foundation in UI/UX design, I build responsive, user-focused digital products through frontend engineering. I combine clean code, thoughtful design, and product thinking to turn ideas into intuitive web experiences.";

// Timeline, in screens scrolled since the section's top met the top of the
// viewport (negative while it is still coming up the page). The section is
// one screen plus 3.2 of travel (see .about-section), so the open card holds
// for the last quarter of a screen before the panel unpins.
const BODY_WINDOW = [-0.6, 0.45];
const TITLE_WINDOW = [0.3, 0.95];
const CARD_IN_WINDOW = [0.85, 1.15];
const GROW_WINDOW = [1.2, 2.5];
// Each piece of the card's content (marked data-focus) comes into focus in
// turn, FOCUS_STAGGER apart, over FOCUS_SPAN.
const FOCUS_START = 2.3;
const FOCUS_STAGGER = 0.08;
const FOCUS_SPAN = 0.4;

// How quickly the shown progress catches up with the scroll, per second.
const SMOOTHING = 9;
// Jumps bigger than this (in screens) are taken at once, not glided.
const SNAP = 1.2;

// How many letters are part-way in at once: the width of the soft edge.
const EDGE = 9;
const EDGE_BLUR = 8;
// The card's corner as seen on screen, kept steady while it scales.
const CARD_RADIUS = 24;
// The card rises this far as it fades in.
const CARD_RISE = 24;
// The about text blurs, fades and sinks this much as the card covers it.
const BACK_BLUR = 10;
const BACK_SINK = 0.06;
// Each piece of content starts this blurred and this low.
const FOCUS_BLUR = 14;
const FOCUS_RISE = 14;

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const along = (p, [start, end]) => clamp01((p - start) / (end - start));
const step = (v) => Math.round(v * 100) / 100;

// Words stay on one line; each letter is its own span so it can fade alone.
// The spaces sit between the word spans so lines can still break there.
function SplitText({ text, charClass }) {
  return text.split(" ").map((word, w) => (
    <Fragment key={w}>
      {w > 0 ? " " : null}
      <span className="about-word">
        {[...word].map((ch, c) => (
          <span key={c} className={charClass}>
            {ch}
          </span>
        ))}
      </span>
    </Fragment>
  ));
}

// The edge runs from before the first letter to past the last, so the first
// starts from nothing and the last ends fully in. `shown` skips letters whose
// value has not changed since the last frame.
function typeIn(chars, shown, progress) {
  const head = progress * (chars.length + EDGE);
  for (let i = 0; i < chars.length; i += 1) {
    const t = step(clamp01((head - i) / EDGE));
    if (t === shown[i]) continue;
    shown[i] = t;
    const style = chars[i].style;
    style.opacity = t;
    style.filter = t > 0 && t < 1 ? `blur(${((1 - t) * EDGE_BLUR).toFixed(1)}px)` : "";
  }
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
  const pinRef = useRef(null);
  const stageRef = useRef(null);
  const slotRef = useRef(null);
  const cardRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return undefined;
    const section = sectionRef.current;
    const pin = pinRef.current;
    const stage = stageRef.current;
    const slot = slotRef.current;
    const card = cardRef.current;
    if (!section || !pin || !stage || !slot || !card) return undefined;

    const bodyChars = [...stage.querySelectorAll(".about-type-char")];
    const titleChars = [...stage.querySelectorAll(".about-char")];
    const bodyShown = new Float32Array(bodyChars.length).fill(-1);
    const titleShown = new Float32Array(titleChars.length).fill(-1);
    const pieces = [...card.querySelectorAll("[data-focus]")];
    const piecesShown = new Float32Array(pieces.length).fill(-1);
    const focusEnd = FOCUS_START + (pieces.length - 1) * FOCUS_STAGGER + FOCUS_SPAN;

    // Where the card starts: the scale that fits it to the slot, and the
    // offset from the panel's centre (where the card sits) to the slot's.
    let fit = 0.25;
    let dx = 0;
    let dy = 0;
    let backShown = -1;
    let cardKey = "";
    let frame = 0;
    let last = 0;
    let current = null;

    const measure = () => {
      // Measure the stage as laid out, not as it currently sinks back.
      const sunk = stage.style.transform;
      stage.style.transform = "";
      fit = slot.offsetWidth / card.offsetWidth;
      slot.style.height = `${card.offsetHeight * fit}px`;
      const pinRect = pin.getBoundingClientRect();
      const slotRect = slot.getBoundingClientRect();
      dx = slotRect.left + slotRect.width / 2 - (pinRect.left + pinRect.width / 2);
      dy = slotRect.top + slotRect.height / 2 - (pinRect.top + pinRect.height / 2);
      stage.style.transform = sunk;
      cardKey = "";
    };

    const render = (t) => {
      typeIn(bodyChars, bodyShown, along(t, BODY_WINDOW));
      typeIn(titleChars, titleShown, along(t, TITLE_WINDOW));

      const appear = easeOut(along(t, CARD_IN_WINDOW));
      const grow = easeInOut(along(t, GROW_WINDOW));
      const scale = fit + (1 - fit) * grow;
      const key = `${appear.toFixed(4)}|${grow.toFixed(4)}`;
      if (key !== cardKey) {
        cardKey = key;
        card.style.opacity = appear;
        card.style.transform = `translate3d(${(dx * (1 - grow)).toFixed(2)}px, ${(dy * (1 - grow) + (1 - appear) * CARD_RISE).toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
        card.style.borderRadius = `${(CARD_RADIUS / scale).toFixed(1)}px`;
      }

      // The about text falls back out of focus as the card covers it.
      const back = step(grow);
      if (back !== backShown) {
        backShown = back;
        stage.style.opacity = 1 - back;
        stage.style.transform = back > 0 ? `scale(${1 - back * BACK_SINK})` : "";
        stage.style.filter = back > 0 ? `blur(${(back * BACK_BLUR).toFixed(1)}px)` : "";
      }

      for (let i = 0; i < pieces.length; i += 1) {
        const start = FOCUS_START + i * FOCUS_STAGGER;
        const k = step(easeOut(along(t, [start, start + FOCUS_SPAN])));
        if (k === piecesShown[i]) continue;
        piecesShown[i] = k;
        const style = pieces[i].style;
        style.opacity = k < 1 ? 0.35 + 0.65 * k : "";
        style.filter = k < 1 ? `blur(${((1 - k) * FOCUS_BLUR).toFixed(1)}px)` : "";
        style.transform = k < 1 ? `translate3d(0, ${((1 - k) * FOCUS_RISE).toFixed(1)}px, 0)` : "";
      }
      card.classList.toggle("is-open", t >= focusEnd);
    };

    // Ease the shown progress toward the scroll position, frame-rate
    // independent, and stop asking for frames once it has caught up.
    const tick = (now) => {
      frame = 0;
      const target = -section.getBoundingClientRect().top / window.innerHeight;
      const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60;
      if (current === null || Math.abs(target - current) > SNAP) {
        current = target;
      } else {
        current += (target - current) * (1 - Math.exp(-SMOOTHING * dt));
      }
      if (Math.abs(target - current) < 0.0005) {
        current = target;
        last = 0;
      } else {
        last = now;
        frame = requestAnimationFrame(tick);
      }
      render(current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const ro = new ResizeObserver(() => {
      measure();
      if (current !== null) render(current);
      schedule();
    });
    ro.observe(stage);
    ro.observe(card);
    measure();
    tick(performance.now());
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [reduced]);

  // Tabbing into the card before it has opened jumps the scroll to where it
  // is open, so the focused link is never a blurred speck.
  const openOnFocus = () => {
    const card = cardRef.current;
    const section = sectionRef.current;
    if (reduced || !card || !section || card.classList.contains("is-open")) return;
    const top = section.getBoundingClientRect().top + window.scrollY;
    const travel = section.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + travel, behavior: "instant" });
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`about-section ${reduced ? "is-static" : ""}`.trim()}
    >
      <div ref={pinRef} className="about-pin">
        <div ref={stageRef} className="about-inner">
          <p className="about-body">
            <span className="about-sr">{BODY}</span>
            <span aria-hidden="true">
              <SplitText text={BODY} charClass="about-type-char" />
            </span>
          </p>
          <h2 className="about-title" aria-label={LINES.join(" ")}>
            <span className="about-line" aria-hidden="true">
              <SplitText text={LINES[0]} charClass="about-char" />
            </span>
            <span className="about-line is-muted" aria-hidden="true">
              <SplitText text={LINES[1]} charClass="about-char" />
            </span>
          </h2>
          <div ref={slotRef} className="about-slot" aria-hidden="true" />
        </div>

        <div ref={cardRef} className="about-card" onFocus={openOnFocus}>
          <div className="about-card-content">
            <div className="about-card-intro">
              <h3 className="about-card-title" data-focus>
                Let&apos;s Build Something Meaningful
              </h3>
              <p className="about-card-sub" data-focus>
                I&apos;m looking for opportunities as a Product Engineer or Frontend Developer
                where I can combine engineering, product thinking, and design.
              </p>
            </div>
            <div className="about-card-foot">
              <div className="about-card-links" data-focus>
                <ContactRows />
              </div>
              <a
                className="about-card-cta"
                href={resumePdf}
                download="Abhinandan_Singh_UX_Resume.pdf"
                data-focus
              >
                Download Resume
                <span className="about-card-cta-icon" aria-hidden="true">
                  <i className="ri-arrow-down-line" />
                  <i className="ri-arrow-down-line" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
