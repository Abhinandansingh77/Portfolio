import { useEffect, useRef } from "react";
import stackImg from "../Assets/creative stack.webp";
import { useMediaQuery } from "./EngineeringSection.jsx";

const STACK = [
  {
    title: "Frontend Development",
    text: "Responsive interfaces, interactive experiences, clean and maintainable code.",
  },
  {
    title: "Product Thinking",
    text: "Turning user needs and product goals into practical solutions.",
  },
  {
    title: "UI/UX Design",
    text: "Intuitive flows, design systems, and attention to detail.",
  },
];

// The timeline, in screens of scroll while the stage is pinned. The image
// opens up from nothing to fill the screen, then fills with the brand
// colour; each topic then rolls in letter by letter and, a while later,
// rolls out as the next one rolls in. Approaches then slides up over the last one.
const CS_GROW = [0, 1.3];
const CS_DARK = [1.25, 1.7];
const CS_FIRST_IN = [1.55, 2.15];
const CS_SWAP_AT = [2.85, 3.95];
const CS_SWAP_LEN = 0.6;
// The last topic holds while Approaches slides up over it, during the last
// screen of the pin.
const CS_TRAVEL_SCREENS = 5.9;
// The timeline above plays over this many real screens per screen, so the
// whole sequence takes more scroll; the last screen (Approaches) stays one.
const CS_PACE = 1.25;
const CS_SECTION_SCREENS = (CS_TRAVEL_SCREENS - 1) * CS_PACE + 1;
// Where the middle of the nav bar sits, to tell whether it is over the brand
// screen (it turns white there).
const CS_NAV_MID = 49;
// Half the space between the two words, and how far they shrink as the
// image pushes them off screen.
const CS_WORD_GAP = 14;
const CS_WORD_MIN_SCALE = 0.42;
const CS_RADIUS = 20;
// Letters start one after another: each waits this share of the roll.
const CS_LETTER_STAGGER = 0.032;

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const span = (v, [a, b]) => clamp01((v - a) / (b - a));
const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;
const easeOutCubic = (t) => 1 - (1 - t) ** 3;
const easeInCubic = (t) => t * t * t;

// Where each letter of a rolling line is, 0…1, given the line's own
// progress: left to right, each a little behind the one before.
function letterProgress(p, i, n) {
  const d = n > 1 ? Math.min(CS_LETTER_STAGGER, 0.5 / (n - 1)) : 0;
  return clamp01((p - i * d) / (1 - (n - 1) * d));
}

// In and out progress of each topic, 0…1, at `s` screens in.
function topicPhases(s) {
  return STACK.map((_, k) => {
    const inSpan = k === 0 ? CS_FIRST_IN : [CS_SWAP_AT[k - 1] + CS_SWAP_LEN * 0.25, CS_SWAP_AT[k - 1] + CS_SWAP_LEN * 1.25];
    const outSpan = k < STACK.length - 1 ? [CS_SWAP_AT[k], CS_SWAP_AT[k] + CS_SWAP_LEN] : null;
    return { in: span(s, inSpan), out: outSpan ? span(s, outSpan) : 0 };
  });
}

// "Creative Stack". The opening follows the "Creative Studio" section on
// vertora.framer.website/service: the two words sit together, then an image
// opens up between them and grows to fill the screen, pushing the words out
// to the sides as they shrink (above and below on phones). The rest follows
// the "Industries" section on forma-design-studio.framer.website: the image
// fills with the brand colour and the topics take turns in the middle, each
// title rolling up through a mask letter by letter. All of it is scrubbed by the scroll. While
// the brand screen is under the nav, the nav turns white (html.nav-on-dark).
// Reduced motion shows the brand screen with the topics listed.
export function CreativeStack() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (reduced || !section || !stage) return undefined;
    const topics = [...stage.querySelectorAll(".cs-topic")].map((topic) => ({
      letters: [...topic.querySelectorAll(".cs-letter")],
      text: topic.querySelector(".cs-topic-text-inner"),
    }));
    let frame = 0;
    let visible = false;
    const root = document.documentElement;

    const update = () => {
      frame = 0;
      const vw = stage.clientWidth;
      const vh = stage.clientHeight;
      const s = (-section.getBoundingClientRect().top / Math.max(1, vh * CS_PACE)) || 0;
      const narrow = vw <= 760;

      // The image keeps the screen's shape as it grows from nothing.
      const grow = easeInOutSine(span(s, CS_GROW));
      const w = vw * grow;
      const h = vh * grow;
      const gap = CS_WORD_GAP + 10 * grow;
      const wordScale = 1 - (1 - CS_WORD_MIN_SCALE) * grow;
      const dark = easeInOutSine(span(s, CS_DARK));

      stage.style.setProperty("--cs-inset-y", `${((vh - h) / 2).toFixed(1)}px`);
      stage.style.setProperty("--cs-inset-x", `${((vw - w) / 2).toFixed(1)}px`);
      stage.style.setProperty("--cs-radius", `${(CS_RADIUS * (1 - grow)).toFixed(2)}px`);
      stage.style.setProperty("--cs-zoom", (1.15 - 0.15 * grow).toFixed(4));
      stage.style.setProperty("--cs-push-x", narrow ? "0px" : `${(w / 2 + gap).toFixed(1)}px`);
      stage.style.setProperty("--cs-push-y", narrow ? `${(h / 2 + gap).toFixed(1)}px` : "0px");
      stage.style.setProperty("--cs-word-scale", wordScale.toFixed(4));
      stage.style.setProperty("--cs-dark", dark.toFixed(4));
      root.classList.toggle("nav-on-dark", dark > 0.5 && (CS_TRAVEL_SCREENS - s) * vh > CS_NAV_MID);

      topicPhases(s).forEach((phase, k) => {
        const { letters, text } = topics[k];
        const n = letters.length;
        letters.forEach((letter, i) => {
          const pin = easeOutCubic(letterProgress(phase.in, i, n));
          const pout = easeInCubic(letterProgress(phase.out, i, n));
          const y = (1 - pin) - pout;
          letter.style.transform = `translate3d(0, ${(y * 110).toFixed(2)}%, 0)`;
          // Fully gone at either end of the roll, or descenders of titles
          // waiting above or below peek through the mask's padding.
          const shown = clamp01(pin * 5) * clamp01((1 - pout) * 5);
          letter.style.opacity = ((0.3 + 0.7 * pin) * (1 - 0.7 * pout) * shown).toFixed(3);
        });
        // The line under the title follows a beat later, and leaves first.
        const tin = easeOutCubic(clamp01((phase.in - 0.3) / 0.7));
        const tout = easeInCubic(clamp01(phase.out / 0.7));
        text.style.transform = `translate3d(0, ${(((1 - tin) - tout) * 110).toFixed(2)}%, 0)`;
        text.style.opacity = (tin * (1 - tout)).toFixed(3);
      });
    };
    const onScroll = () => {
      if (visible && !frame) frame = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) onScroll();
      else root.classList.remove("nav-on-dark");
    });
    io.observe(section);
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      root.classList.remove("nav-on-dark");
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className={`cs ${reduced ? "is-static" : ""}`.trim()}
      style={reduced ? undefined : { height: `calc(100svh + ${CS_SECTION_SCREENS * 100}svh)` }}
      aria-labelledby="creative-stack-title"
    >
      <div ref={stageRef} className="cs-stage">
        <div className="cs-media" aria-hidden="true">
          <img className="cs-img" src={stackImg} alt="" loading="lazy" decoding="async" />
          <img className="cs-img cs-img-blur" src={stackImg} alt="" loading="lazy" decoding="async" />
          <span className="cs-shade" />
        </div>

        <h2 id="creative-stack-title" className="cs-words">
          <span className="cs-word cs-word-start">Creative</span>{" "}
          <span className="cs-word cs-word-end">Stack</span>
        </h2>

        <div className="cs-panel">
          <ul className="cs-topics">
            {STACK.map((item) => (
              <li key={item.title} className="cs-topic">
                <h3 className="cs-topic-title" aria-label={item.title}>
                  {[...item.title].map((char, i) => (
                    <span key={i} className="cs-letter" aria-hidden="true">
                      {char === " " ? " " : char}
                    </span>
                  ))}
                </h3>
                <p className="cs-topic-text">
                  <span className="cs-topic-text-inner">{item.text}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
