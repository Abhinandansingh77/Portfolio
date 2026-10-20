import { useEffect, useRef } from "react";
import { createAmbientWater, createFluidOverlay, createHeroFluid, fluidSupport, isTouchOnly } from "./fluid.js";

// Site-wide liquid highlight. Off on touch, with reduced motion, or without
// WebGL2 float render targets; the canvas never takes pointer events.
export function FluidOverlay() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!fluidSupport().ok || isTouchOnly()) return undefined;
    let fx = null;
    try {
      fx = createFluidOverlay(canvas);
    } catch (err) {
      console.warn("Fluid overlay disabled:", err);
    }
    if (!fx) return undefined;
    canvas.classList.add("is-active");
    return () => {
      canvas.classList.remove("is-active");
      fx.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} className="fluid-overlay" aria-hidden="true" />;
}

// Faint water on the page background, behind all content (light theme by
// default; see AMBIENT_WATER_CONFIG).
export function AmbientWater() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    let fx = null;
    try {
      fx = createAmbientWater(canvas);
    } catch (err) {
      console.warn("Ambient water disabled:", err);
    }
    if (!fx) return undefined;
    canvas.classList.add("is-active");
    return () => {
      canvas.classList.remove("is-active");
      fx.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} className="ambient-water" aria-hidden="true" />;
}

// Liquid-glass hero. Render inside the hero container: it refracts the
// container's heading, subtext and portrait. The real DOM stays in place and
// is only swapped for the canvas while the liquid is moving.
export function HeroLiquid({ textSelector, imgSelector }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas.parentElement;
    if (!fluidSupport().ok) return undefined;
    let fx = null;
    let cancelled = false;

    const start = async () => {
      const img = container.querySelector(imgSelector);
      if (img && !img.complete) await new Promise((r) => img.addEventListener("load", r, { once: true }));
      await document.fonts?.ready;
      // Wait for the site's entry screen to clear, then for the hero's own
      // entrance animation, so the intro swirl is seen and the capture is clean.
      for (let i = 0; i < 100 && !cancelled && !container.closest(".app-entered"); i++) {
        await new Promise((r) => setTimeout(r, 100));
      }
      await new Promise((r) => setTimeout(r, 900));
      if (cancelled) return;
      try {
        fx = createHeroFluid({
          container,
          canvas,
          texts: [...container.querySelectorAll(textSelector)],
          img,
        });
      } catch (err) {
        console.warn("Hero liquid disabled:", err);
      }
    };
    start();

    return () => {
      cancelled = true;
      fx?.destroy();
    };
  }, [textSelector, imgSelector]);

  return <canvas ref={canvasRef} className="hero-liquid-canvas" aria-hidden="true" />;
}
