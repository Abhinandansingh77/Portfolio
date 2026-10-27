import { useEffect } from "react";

// Eases an element after the pointer. `apply(node, x, y)` gets the pointer's
// offset from the element's centre, -1…1 across half the window, eased by
// `follow` (share of the gap closed per frame), and sets the motion. The
// loop runs only while it is still catching up, and not at all on touch
// screens or with reduced motion; off screen it settles back to rest.
export function usePointerFollow(ref, apply, follow) {
  useEffect(() => {
    const node = ref.current;
    const media = window.matchMedia?.("(prefers-reduced-motion: reduce), (hover: none)");
    if (!node || media?.matches) return undefined;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;
    let visible = true;

    const render = () => {
      frame = 0;
      current.x += (target.x - current.x) * follow;
      current.y += (target.y - current.y) * follow;
      apply(node, current.x, current.y);
      if (Math.abs(target.x - current.x) > 0.001 || Math.abs(target.y - current.y) > 0.001) {
        frame = requestAnimationFrame(render);
      }
    };
    const kick = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    // Measured against the window, so the whole hero steers it.
    const onMove = (event) => {
      if (!visible) return;
      const rect = node.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      target.x = Math.max(-1, Math.min(1, (event.clientX - cx) / (window.innerWidth / 2)));
      target.y = Math.max(-1, Math.min(1, (event.clientY - cy) / (window.innerHeight / 2)));
      kick();
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      kick();
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) onLeave();
    });
    io.observe(node);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [ref, apply, follow]);
}
