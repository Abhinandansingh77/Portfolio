import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useMediaQuery } from "./EngineeringSection.jsx";

// Corner-bracket lens padding around the hovered label.
const LENS_PAD_X = 9;
const LENS_PAD_Y = 6.5;

// Site navigation. At the top of a page it is a small dark pill of links,
// centred (the home hero carries its own Download Resume). Once you scroll
// half a screen the pill widens into a full bar: the links slide to the left
// edge and Download Resume fades in on the right. `collapsible` false keeps
// the bar open.
//
// Hovering (or focusing) a link brings it into focus inside four corner
// brackets that glide between links, while the rest dim and blur, after the
// focus-lens navbar on focus-lens-navbar.framer.website.
//
// On phones the bar is always open: a menu button on the left (the links
// drop down under the bar) and Download Resume on the right. Over the dark
// screen in Creative Stack the bar turns white (html.nav-on-dark, set there).
export function TopNav({ items, onNavigate, resumeHref, collapsible, pathname }) {
  const barRef = useRef(null);
  const linksRef = useRef(null);
  const [collapsedWidth, setCollapsedWidth] = useState(0);
  const [scrolledPast, setScrolledPast] = useState(!collapsible);
  const [lens, setLens] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const isPhone = useMediaQuery("(max-width: 760px)");
  const expanded = scrolledPast || isPhone;

  // The pill is exactly as wide as its links, measured so the width can
  // transition to the open bar (auto widths don't animate).
  useLayoutEffect(() => {
    const links = linksRef.current;
    if (!links) return undefined;
    const measure = () => setCollapsedWidth(links.offsetWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(links);
    return () => ro.disconnect();
  }, []);

  // The hero is pinned (the next section slides over it), so this goes by
  // scroll distance rather than the hero leaving the screen.
  useEffect(() => {
    if (!collapsible) {
      setScrolledPast(true);
      return undefined;
    }
    const update = () => setScrolledPast(window.scrollY > window.innerHeight * 0.5);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [collapsible]);

  // The phone menu closes on Escape, and when the bar goes back to desktop.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);
  useEffect(() => {
    if (!isPhone) setMenuOpen(false);
  }, [isPhone]);

  const go = (href) => {
    setMenuOpen(false);
    onNavigate(href);
  };

  const focusOn = (link, index) => {
    const bar = barRef.current;
    const label = link.querySelector(".tn-label");
    if (!bar || !label) return;
    const barBox = bar.getBoundingClientRect();
    const box = label.getBoundingClientRect();
    setLens((prev) => ({
      index,
      x: box.left - barBox.left - LENS_PAD_X,
      y: box.top - barBox.top - LENS_PAD_Y,
      w: box.width + LENS_PAD_X * 2,
      h: box.height + LENS_PAD_Y * 2,
      // Coming in from nothing, it appears in place instead of sliding.
      jump: !prev,
    }));
  };
  const clearLens = () => setLens(null);

  return (
    <header className={`tn ${expanded ? "is-expanded" : ""} ${menuOpen ? "is-menu-open" : ""}`.replace(/\s+/g, " ").trim()}>
      <nav
        ref={barRef}
        className={`tn-bar ${lens ? "is-focusing" : ""}`.trim()}
        aria-label="Primary navigation"
        style={collapsedWidth ? { "--tn-collapsed": `${collapsedWidth}px` } : undefined}
        onPointerLeave={clearLens}
      >
        <button
          type="button"
          className="tn-burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="tn-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i />
          <i />
        </button>
        <div ref={linksRef} className="tn-links">
          {items.map((item, index) => (
            <a
              key={item.label}
              className={`tn-link ${lens?.index === index ? "is-focused" : ""}`.trim()}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onPointerEnter={(event) => focusOn(event.currentTarget, index)}
              onFocus={(event) => focusOn(event.currentTarget, index)}
              onBlur={clearLens}
              onClick={(event) => {
                event.preventDefault();
                go(item.href);
              }}
            >
              <span className="tn-label">{item.label}</span>
            </a>
          ))}
        </div>
        {/* Plain text like the links, and lensed like them too. */}
        <a
          className={`tn-cta ${lens?.index === items.length ? "is-focused" : ""}`.trim()}
          href={resumeHref}
          download="Abhinandan_Singh_Resume.pdf"
          tabIndex={expanded ? 0 : -1}
          aria-hidden={!expanded}
          aria-label="Download Resume"
          onPointerEnter={(event) => focusOn(event.currentTarget, items.length)}
          onFocus={(event) => focusOn(event.currentTarget, items.length)}
          onBlur={clearLens}
        >
          <span className="tn-label tn-cta-label">
            <span className="tn-cta-long">Download Resume</span>
            <i className="ri-download-2-line" aria-hidden="true" />
          </span>
        </a>
        <span
          className={`tn-lens ${lens ? "is-on" : ""} ${lens?.jump ? "is-jump" : ""}`.replace(/\s+/g, " ").trim()}
          style={lens ? { transform: `translate(${lens.x}px, ${lens.y}px)`, width: lens.w, height: lens.h } : undefined}
          aria-hidden="true"
        >
          <i />
          <i />
          <i />
          <i />
        </span>
      </nav>

      {isPhone && (
        <div id="tn-menu" className="tn-menu" hidden={!menuOpen}>
          {items.map((item) => (
            <a
              key={item.label}
              className="tn-menu-link"
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={(event) => {
                event.preventDefault();
                go(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
