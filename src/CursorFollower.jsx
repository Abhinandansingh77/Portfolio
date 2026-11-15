import { useEffect, useRef } from "react";

// A quiet ring that trails the pointer. The system cursor stays; the ring
// eases after it, opens up and takes a brand tint over anything clickable,
// and turns into a small labelled disc over elements that set data-cursor
// (the work cards say "View"). Mouse only: nothing on touch screens or with
// reduced motion, and the loop runs only while the ring is still catching up.
const CLICKABLE = "a, button, [role='button'], summary, label[for], select";
const TYPING = "input, textarea, [contenteditable='true']";
const FOLLOW = 0.2;

export function CursorFollower() {
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const ring = ringRef.current;
    const label = labelRef.current;
    const media = window.matchMedia?.("(prefers-reduced-motion: reduce), (hover: none), (pointer: coarse)");
    if (!ring || !label || media?.matches) return undefined;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;
    let shown = false;

    const render = () => {
      frame = 0;
      current.x += (target.x - current.x) * FOLLOW;
      current.y += (target.y - current.y) * FOLLOW;
      ring.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      if (Math.abs(target.x - current.x) > 0.1 || Math.abs(target.y - current.y) > 0.1) {
        frame = requestAnimationFrame(render);
      }
    };

    // Sets the ring's state from the element under the pointer.
    const read = (el) => {
      const text = el?.closest("[data-cursor]")?.getAttribute("data-cursor") ?? "";
      if (text && label.textContent !== text) label.textContent = text;
      ring.classList.toggle("is-label", Boolean(text));
      ring.classList.toggle("is-link", !text && Boolean(el?.closest(CLICKABLE)));
      ring.classList.toggle("is-typing", Boolean(el?.closest(TYPING)));
    };

    const onMove = (event) => {
      if (event.pointerType === "touch") return;
      target.x = event.clientX;
      target.y = event.clientY;
      if (!shown) {
        shown = true;
        current.x = target.x;
        current.y = target.y;
        ring.classList.add("is-on");
      }

      read(event.target instanceof Element ? event.target : null);
      if (!frame) frame = requestAnimationFrame(render);
    };
    // The page can scroll under a still pointer, so re-read what is beneath.
    let scrollFrame = 0;
    const onScroll = () => {
      if (!shown || scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        read(document.elementFromPoint(target.x, target.y));
      });
    };
    const onDown = () => ring.classList.add("is-down");
    const onUp = () => ring.classList.remove("is-down");
    const onLeave = () => {
      shown = false;
      ring.classList.remove("is-on", "is-down");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(scrollFrame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={ringRef} className="cursor-ring" aria-hidden="true">
      <span className="cursor-ring-shape">
        <span ref={labelRef} className="cursor-ring-label" />
      </span>
    </div>
  );
}
