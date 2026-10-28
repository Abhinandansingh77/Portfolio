import { useEffect, useRef } from "react";
import shot01 from "../Assets/pixels-to-products/shot-01.webp";
import shot02 from "../Assets/pixels-to-products/shot-02.webp";
import shot03 from "../Assets/pixels-to-products/shot-03.webp";
import shot04 from "../Assets/pixels-to-products/shot-04.webp";
import shot05 from "../Assets/pixels-to-products/shot-05.webp";
import shot06 from "../Assets/pixels-to-products/shot-06.webp";

// From pixels to products: a heading over a reel of work shots. The reel
// cuts hard from shot to shot, fast, under a fixed caption, after the c+core
// reel. Six images make twelve shots: each one wide, and once as a close
// crop (`zoom` about `at`), alternated so the cuts never repeat a frame.
const images = [shot01, shot02, shot03, shot04, shot05, shot06];
const shots = [
  { img: 2, zoom: 1, at: "50% 50%" },
  { img: 0, zoom: 1.9, at: "52% 42%" },
  { img: 4, zoom: 1, at: "50% 50%" },
  { img: 3, zoom: 2, at: "50% 44%" },
  { img: 5, zoom: 1, at: "50% 50%" },
  { img: 1, zoom: 1.8, at: "78% 36%" },
  { img: 0, zoom: 1, at: "50% 50%" },
  { img: 2, zoom: 1.8, at: "62% 40%" },
  { img: 3, zoom: 1, at: "50% 50%" },
  { img: 4, zoom: 1.7, at: "38% 38%" },
  { img: 1, zoom: 1, at: "50% 50%" },
  { img: 5, zoom: 1.9, at: "56% 46%" },
];
// The reference cuts every 4 frames at 30fps (133ms); slower here, so each
// shot can be taken in.
const SHOT_MS = 220;

function PixelsReel({ reelRef }) {
  const layerRefs = useRef([]);

  // Cuts run only while the reel is on screen and the tab is visible; with
  // reduced motion the first shot just stays.
  useEffect(() => {
    const reel = reelRef.current;
    if (!reel) return undefined;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    let index = 0;
    let timer = 0;
    let onScreen = false;

    const show = (i) => {
      const shot = shots[i];
      layerRefs.current.forEach((layer, n) => {
        if (!layer) return;
        const on = n === shot.img;
        layer.classList.toggle("is-on", on);
        if (on) {
          layer.style.transformOrigin = shot.at;
          layer.style.transform = shot.zoom === 1 ? "" : `scale(${shot.zoom})`;
        }
      });
    };
    const sync = () => {
      const run = onScreen && !document.hidden && !reduce;
      if (run && !timer) {
        timer = window.setInterval(() => {
          index = (index + 1) % shots.length;
          show(index);
        }, SHOT_MS);
      } else if (!run && timer) {
        window.clearInterval(timer);
        timer = 0;
      }
    };

    show(0);
    const io =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(([entry]) => {
            onScreen = entry.isIntersecting;
            sync();
          })
        : null;
    io?.observe(reel);
    document.addEventListener("visibilitychange", sync);
    return () => {
      window.clearInterval(timer);
      io?.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return (
    <div ref={reelRef} className="px-reel">
      <div className="px-reel-frame">
        {images.map((src, i) => (
          <img
            key={src}
            ref={(el) => (layerRefs.current[i] = el)}
            className="px-reel-shot"
            src={src}
            alt=""
            decoding="async"
          />
        ))}
        {/* Fixed over every cut, as on the reference. */}
        <p className="px-reel-caption" aria-hidden="true">
          Design it.
          <br />
          Build it.
        </p>
      </div>
    </div>
  );
}

export function PixelsSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const reelRef = useRef(null);

  // As the section slides up over the pinned hero, the heading fades up and
  // the reel grows from slightly small and rounded to full size, both
  // scrubbed by the scroll (--px-head and --px-in, 0 to 1, eased) over a
  // long stretch, so with the smooth scrolling they come in slowly.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      section.style.setProperty("--px-head", "1");
      section.style.setProperty("--px-in", "1");
      return undefined;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const enter = (el, span) => {
        const top = el.getBoundingClientRect().top;
        const t = Math.min(1, Math.max(0, (vh - top) / (vh * span)));
        return (t * t * (3 - 2 * t)).toFixed(4);
      };
      if (headerRef.current) section.style.setProperty("--px-head", enter(headerRef.current, 0.8));
      if (reelRef.current) section.style.setProperty("--px-in", enter(reelRef.current, 1.4));
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
    <section ref={sectionRef} id="pixels" className="px-section">
      <div ref={headerRef} className="px-header">
        <h2 className="px-title">From pixels to products</h2>
        <p className="px-sub">
          I bring design thinking and frontend development together to build experiences that look right, feel right,
          and work right.
        </p>
      </div>
      <PixelsReel reelRef={reelRef} />
    </section>
  );
}
