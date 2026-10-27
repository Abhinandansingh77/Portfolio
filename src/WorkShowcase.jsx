import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "./EngineeringSection.jsx";
import { CtaIcon } from "./CtaIcon.jsx";

// Selected work, after the "Reviews" section on genstudio.framer.media.
//
// The heading pins under the nav. Below it each project is a full-width row
// whose content (text, card, text) is pinned to the screen, and seen only
// through the row's own window, which scrolls normally. So nothing appears
// to move: a horizontal line sweeps up through the still card and text,
// uncovering the next project beneath. Each row's text lines roll up through
// a mask the first time the row is uncovered.
//
// It is plain CSS (sticky inside a tall absolute track, clipped by the row);
// the only script is the one-time text reveal. Phones get a list where each
// project pins under the nav and the next slides up over it, as From pixels
// to products comes over the hero; with reduced motion it is a plain list.

function Line({ as: Tag = "span", className, index, children }) {
  return (
    <Tag className={`ws-line ${className}`}>
      <span className="ws-line-inner" style={{ "--ws-i": index }}>
        {children}
      </span>
    </Tag>
  );
}

function WorkRow({ item, index, onOpen, onViewAll }) {
  const pinRef = useRef(null);
  const [shown, setShown] = useState(false);

  // The row's clip counts for the observer, so this fires as the sweep
  // uncovers the text, not when the pinned layer merely sits under it.
  useEffect(() => {
    const pin = pinRef.current;
    if (!pin || shown) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) setShown(true);
      },
      { threshold: 0.5 },
    );
    pin.querySelectorAll(".ws-side").forEach((side) => io.observe(side));
    return () => io.disconnect();
  }, [shown]);

  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="ws-row">
      <div className="ws-track">
        <div ref={pinRef} className={`ws-pin ${shown ? "is-shown" : ""}`.trim()}>
          <div className="ws-stage">
            <div className="ws-side ws-side-left">
              <Line className="ws-num" index={0}>
                {num}
              </Line>
              <Line as="h3" className="ws-name" index={1}>
                {item.title}
              </Line>
              <Line className="ws-meta" index={2}>
                {item.category}
              </Line>
            </div>

            <div className="ws-center">
              <a
                className="ws-card"
                href={`/projects/${item.slug}`}
                aria-label={`${item.title}: view case study`}
                onClick={(event) => {
                  event.preventDefault();
                  onOpen(item.slug);
                }}
              >
                <img src={item.image} alt="" loading="lazy" decoding="async" />
              </a>
              {/* The same button in every row, so the sweep passes over it
                  unseen and it reads as one fixed button. */}
              <button type="button" className="ws-all" onClick={onViewAll} tabIndex={index === 0 ? 0 : -1}>
                View All Projects
                <CtaIcon />
              </button>
            </div>

            <div className="ws-side ws-side-right">
              <Line className="ws-cta-line" index={1}>
                <button type="button" className="ws-cta" onClick={() => onOpen(item.slug)}>
                  View case study
                  <CtaIcon />
                </button>
              </Line>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkShowcase({ items, onOpen, onViewAll }) {
  const isStatic = useMediaQuery("(max-width: 760px), (prefers-reduced-motion: reduce)");
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");

  const heading = (
    <header className="ws-head">
      <h2 className="ws-title">Things I&rsquo;ve helped bring to life.</h2>
      <p className="ws-sub">
        Selected digital products, interfaces, and
        <br />
        frontend experiments.
      </p>
    </header>
  );

  if (isStatic) {
    return (
      <section id="projects" className={`ws is-static ${reduced ? "" : "is-stacked"}`.trim()}>
        {heading}
        <ol className="ws-list">
          {items.map((item, i) => (
            <li key={item.slug} className="ws-list-item">
              <a
                className="ws-card"
                href={`/projects/${item.slug}`}
                aria-label={`${item.title}: view case study`}
                onClick={(event) => {
                  event.preventDefault();
                  onOpen(item.slug);
                }}
              >
                <img src={item.image} alt="" loading="lazy" decoding="async" />
              </a>
              <div className="ws-list-text">
                <span className="ws-num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="ws-name">{item.title}</h3>
                <p className="ws-meta">{item.category}</p>
                <button type="button" className="ws-cta" onClick={() => onOpen(item.slug)}>
                  View case study
                  <CtaIcon />
                </button>
              </div>
            </li>
          ))}
        </ol>
        <div className="ws-footer">
          <button type="button" className="ws-all" onClick={onViewAll}>
            View All Projects
            <CtaIcon />
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="ws">
      {heading}
      {items.map((item, i) => (
        <WorkRow key={item.slug} item={item} index={i} onOpen={onOpen} onViewAll={onViewAll} />
      ))}
    </section>
  );
}
