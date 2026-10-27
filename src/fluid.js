// Liquid-glass cursor effect, modelled on real-result-504144.framer.app.
//
// A GPU fluid simulation (after Pavel Dobryakov's WebGL Fluid Simulation:
// splat → curl → vorticity → divergence → pressure → gradient subtract →
// advect) carries a "liquid" density field around. The density is read as a
// height map: its slope refracts whatever is behind it (R, G and B by slightly
// different amounts, for rainbow edges), and a near-flat surface normal gives
// the glossy highlight where liquid is present.
//
//   createHeroFluid    — the hero (heading, subtext, portrait) is captured into
//                        one full-width canvas while you interact, and is
//                        truly refracted, like the reference's media layer.
//   createFluidOverlay — fixed full-viewport layer for the rest of the site.
//                        WebGL can't read page pixels, so it draws only the
//                        highlight (what the reference shows over empty dark
//                        areas). It skips the hero, which handles itself.
//
// Plain WebGL2, no dependencies.

// ---------------------------------------------------------------------------
// Tunables (defaults match the reference page)
// ---------------------------------------------------------------------------
export const FLUID_CONFIG = {
  // Simulation grid as a share of the canvas's CSS size (reference: half).
  simScale: 0.5,
  pressureIterations: 50,
  // Pressure carried into the next frame (0 = recomputed fresh each frame).
  pressure: 0,

  // --- Motion ------------------------------------------------------------------
  // Overall speed of the liquid: 1 = the reference, lower = slower flow (the
  // look and how long the trail lasts stay the same).
  timeScale: 0.75,
  // Like the reference, decay is applied per rendered frame.
  // Push per px of pointer movement.
  splatForce: 7,
  // Swirl. The vorticity force acts sideways only (as in the reference),
  // which stretches the liquid into long horizontal streaks.
  curl: 18,
  // Share of the motion kept each frame.
  velocityDissipation: 0.99,
  // Share of the liquid lost each frame (higher = trail vanishes faster).
  densityFade: 0.059,

  // --- Brush -------------------------------------------------------------------
  // Brush size in CSS px.
  splatRadiusPx: 32,
  // Liquid added on each frame the pointer moves (reference: 3 × 0.3).
  splatAmount: 0.9,
  // Random splats when the hero effect starts — the reference's intro swirl.
  // [min, max]; [0, 0] disables.
  introSplats: [5, 14],

  // --- Look --------------------------------------------------------------------
  // How far the hero bends through the liquid (UV per unit of slope).
  refraction: 1,
  // Extra bend for R, less for B: the rainbow edge.
  chromaticAberration: 0.1,
  // Highlight strength, sharpness, surface flatness (smaller = glossier
  // edges) and light direction (x right, y up, z towards the viewer).
  highlight: 2,
  shininess: 30,
  flatness: 0.05,
  lightDir: [1, 1, 1],
  // Highlight tint on the overlay, and its blend mode ("screen" or
  // "difference"; ?fluidBlend=difference overrides it).
  overlayColor: [1, 1, 1],
  overlayBlend: "screen",

  // --- Rendering ---------------------------------------------------------------
  // The hero canvas reaches this far (CSS px) above and below the hero and
  // fades out over that band while the site-wide overlay fades in, so the
  // two liquids blend instead of meeting on a hard horizontal line.
  heroFeatherPx: 56,
  maxDpr: 2,
  overlayMaxDpr: 1,
  // Go idle this long after the last movement (the liquid has faded by then).
  settleMs: 2600,

  // Lighter settings for touch (hero only; the overlay is off on touch).
  touch: { simScale: 0.3, pressureIterations: 16 },

  // Dark side of the glass. Off in the dark theme (the reference look); on a
  // light page white highlights vanish, so the light theme adds it.
  shadow: 0,
  // Overrides used with the light theme (?theme=light).
  light: { shadow: 0.45, overlayBlend: "normal" },
};

// Ambient water ("swell"): soft light glinting on a calm, slowly rolling
// water surface, drifting over the page background behind all content.
export const AMBIENT_WATER_CONFIG = {
  // Which themes show it. Dark mode is left without it.
  themes: ["light"],
  // Visibility (0–1).
  intensity: 0.042,
  // Wave size: waves across the screen height (higher = finer glints).
  scale: 7,
  // How much the wave fronts meander.
  wave: 0.3,
  // Drift speed (lower = calmer).
  speed: 0.16,
  // Glint colour on a dark page (only used if "dark" is in `themes`).
  tint: [0.9, 0.9, 0.9],
  // Rendered at this share of CSS size and frame rate; it's soft, so cheap.
  resolution: 0.5,
  fps: 30,
  // Light theme: faint grey glints darkening the white page instead of
  // light added to a dark one.
  light: { intensity: 0.05, tint: [0.3, 0.3, 0.3] },
};

// ---------------------------------------------------------------------------
// Support
// ---------------------------------------------------------------------------
export function fluidSupport() {
  if (typeof window === "undefined") return { ok: false, reason: "ssr" };
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return { ok: false, reason: "reduced-motion" };
  }
  const probe = document.createElement("canvas");
  const gl = probe.getContext("webgl2");
  if (!gl) return { ok: false, reason: "no-webgl2" };
  const ok = Boolean(gl.getExtension("EXT_color_buffer_float") || gl.getExtension("EXT_color_buffer_half_float"));
  gl.getExtension("WEBGL_lose_context")?.loseContext();
  return ok ? { ok: true } : { ok: false, reason: "no-float-render" };
}

export const isLightTheme = () =>
  typeof document !== "undefined" && document.documentElement.dataset.theme === "light";

// A config with its `light` overrides applied when the light theme is on.
const forTheme = (cfg) => (isLightTheme() && cfg.light ? { ...cfg, ...cfg.light } : cfg);

export const isTouchOnly = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: none), (pointer: coarse)").matches;

// The hero registers its canvas here so the overlay can leave that area alone;
// `excludedFeather` is the canvas's faded band at its top and bottom (px).
let excludedEl = null;
let excludedFeather = 0;

// ---------------------------------------------------------------------------
// Shaders
// ---------------------------------------------------------------------------
const VS = `#version 300 es
precision highp float;
in vec2 aPosition;
uniform vec2 texelSize;
out vec2 vUv, vL, vR, vT, vB;
void main () {
  vUv = aPosition * 0.5 + 0.5;
  vL = vUv - vec2(texelSize.x, 0.0);
  vR = vUv + vec2(texelSize.x, 0.0);
  vT = vUv + vec2(0.0, texelSize.y);
  vB = vUv - vec2(0.0, texelSize.y);
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`;

const FS_HEAD = `#version 300 es
precision highp float;
precision highp sampler2D;
in vec2 vUv, vL, vR, vT, vB;
out vec4 outColor;
`;

const FS = {
  clear: `uniform sampler2D uTexture; uniform float value;
    void main () { outColor = value * texture(uTexture, vUv); }`,

  splat: `uniform sampler2D uTarget; uniform float aspectRatio, radius; uniform vec3 color; uniform vec2 point;
    void main () {
      vec2 p = vUv - point; p.x *= aspectRatio;
      vec3 s = exp(-dot(p, p) / radius) * color;
      outColor = vec4(texture(uTarget, vUv).xyz + s, 1.0);
    }`,

  // `dissipation` is the share kept this frame (already frame-rate corrected).
  advection: `uniform sampler2D uVelocity, uSource; uniform vec2 texelSize; uniform float dt, dissipation;
    void main () {
      vec2 coord = vUv - dt * texture(uVelocity, vUv).xy * texelSize;
      outColor = dissipation * texture(uSource, coord);
    }`,

  // Edges reflect velocity (no flow through the border).
  divergence: `uniform sampler2D uVelocity;
    vec2 sampleVelocity (vec2 uv) {
      vec2 m = vec2(1.0);
      if (uv.x < 0.0 || uv.x > 1.0) m.x = -1.0;
      if (uv.y < 0.0 || uv.y > 1.0) m.y = -1.0;
      return m * texture(uVelocity, clamp(uv, 0.0, 1.0)).xy;
    }
    void main () {
      float L = sampleVelocity(vL).x, R = sampleVelocity(vR).x;
      float T = sampleVelocity(vT).y, B = sampleVelocity(vB).y;
      outColor = vec4(0.5 * (R - L + T - B), 0.0, 0.0, 1.0);
    }`,

  curl: `uniform sampler2D uVelocity;
    void main () {
      float L = texture(uVelocity, vL).y, R = texture(uVelocity, vR).y;
      float T = texture(uVelocity, vT).x, B = texture(uVelocity, vB).x;
      outColor = vec4(R - L - T + B, 0.0, 0.0, 1.0);
    }`,

  // Sideways-only vorticity confinement (as in the reference).
  vorticity: `uniform sampler2D uVelocity, uCurl; uniform float curl, dt;
    void main () {
      float T = texture(uCurl, vT).x, B = texture(uCurl, vB).x;
      float C = texture(uCurl, vUv).x;
      vec2 force = vec2(abs(T) - abs(B), 0.0);
      force *= curl * C / length(force + 0.00001);
      outColor = vec4(texture(uVelocity, vUv).xy + force * dt, 0.0, 1.0);
    }`,

  pressure: `uniform sampler2D uPressure, uDivergence;
    float P (vec2 uv) { return texture(uPressure, clamp(uv, 0.0, 1.0)).x; }
    void main () {
      float div = texture(uDivergence, vUv).x;
      outColor = vec4((P(vL) + P(vR) + P(vB) + P(vT) - div) * 0.25, 0.0, 0.0, 1.0);
    }`,

  gradientSubtract: `uniform sampler2D uPressure, uVelocity;
    float P (vec2 uv) { return texture(uPressure, clamp(uv, 0.0, 1.0)).x; }
    void main () {
      vec2 v = texture(uVelocity, vUv).xy - vec2(P(vR) - P(vL), P(vT) - P(vB));
      outColor = vec4(v, 0.0, 1.0);
    }`,

  // Shared surface maths: slope of the liquid one grid cell apart, a
  // near-flat normal from it, and the highlight masked to where liquid is.
  surface: `uniform sampler2D uDensity; uniform vec2 densityTexel;
    uniform float highlight, shininess, flatness, shadow; uniform vec3 lightDir;
    vec2 slope () {
      float L = texture(uDensity, vUv - vec2(densityTexel.x, 0.0)).r;
      float R = texture(uDensity, vUv + vec2(densityTexel.x, 0.0)).r;
      float T = texture(uDensity, vUv + vec2(0.0, densityTexel.y)).r;
      float B = texture(uDensity, vUv - vec2(0.0, densityTexel.y)).r;
      return vec2(R - L, T - B);
    }
    float shine (vec2 grad) {
      vec3 n = normalize(vec3(-grad, flatness));
      float s = pow(max(dot(n, normalize(lightDir)), 0.0), shininess) * highlight;
      return s * smoothstep(0.0, 0.1, texture(uDensity, vUv).r);
    }
    // The side facing away from the light, as a soft dark rim.
    float shade (vec2 grad) {
      vec3 n = normalize(vec3(-grad, flatness));
      vec3 away = normalize(vec3(-lightDir.xy, lightDir.z));
      float d = pow(max(dot(n, away), 0.0), shininess * 0.5) * shadow;
      return d * smoothstep(0.0, 0.1, texture(uDensity, vUv).r);
    }
  `,

  // Hero: the captured scene seen through the liquid.
  hero: `uniform sampler2D uScene; uniform float refraction, chroma;
    void main () {
      vec2 grad = slope();
      vec4 r = texture(uScene, vUv - grad * (refraction + chroma));
      vec4 g = texture(uScene, vUv - grad * refraction);
      vec4 b = texture(uScene, vUv - grad * (refraction - chroma));
      // Premultiplied, transparent around the content so the page's ambient
      // water shows through.
      float a = max(g.a, max(r.a, b.a));
      float s = shine(grad);
      // Shade is premultiplied black: it only adds coverage.
      outColor = clamp(vec4(vec3(r.r, g.g, b.b) + s, a + s + shade(grad)), 0.0, 1.0);
    }`,

  // Overlay: highlight only, premultiplied; fades out into uExclude (the
  // hero canvas, in this canvas's UV) over uFeather, as the hero fades in.
  // Ambient water ("swell"): a few directional waves (spread by the golden
  // angle so they never line up) give a rolling surface; light glints where
  // it tilts towards the light. A slow large-scale swell keeps it from
  // reading as a uniform pattern. Premultiplied.
  ambient: `uniform float uTime, uIntensity, uScale, uWave, uInk; uniform vec2 uRes; uniform vec3 uTint;
    vec3 waves (vec2 p, float t) {
      vec3 r = vec3(0.0);
      for (int i = 0; i < 5; i++) {
        float f = float(i);
        float ang = f * 2.399 + 0.6;
        vec2 d = vec2(cos(ang), sin(ang));
        float k = 1.0 + f * 0.55;
        float a = 1.0 / (1.0 + f * 0.9);
        float ph = dot(d, p) * k + t * (0.6 + 0.25 * f);
        r += vec3(a * sin(ph), a * k * cos(ph) * d);
      }
      return r;
    }
    void main () {
      vec2 p = gl_FragCoord.xy / uRes.y * uScale;
      float t = uTime;
      p += uWave * vec2(sin(p.y * 0.7 + t * 0.3), cos(p.x * 0.6 - t * 0.25));
      vec3 w = waves(p, t);
      vec3 n = normalize(vec3(-w.yz * 0.38, 1.0));
      vec3 r = reflect(-normalize(vec3(-0.3, 0.7, 0.65)), n);
      float c = pow(max(r.z, 0.0), 30.0);
      float q = gl_FragCoord.y / uRes.y * 2.6;
      float swell = 0.5 + 0.5 * sin(gl_FragCoord.x / uRes.y * 2.1 + t * 0.25) * sin(q - t * 0.2);
      float v = clamp(c * swell * 2.0 * uIntensity, 0.0, 1.0);
      // Dark theme: light added to the page. Light theme: tinted ink over it.
      outColor = uInk > 0.5 ? vec4(uTint * v, v) : vec4(uTint * v, max(uTint.r, max(uTint.g, uTint.b)) * v);
    }`,

  overlay: `uniform vec3 tint; uniform vec4 uExclude; uniform float uFeather;
    void main () {
      float ex = step(uExclude.x, vUv.x) * step(vUv.x, uExclude.z);
      float ey = clamp(min(vUv.y - uExclude.y, uExclude.w - vUv.y) / uFeather, 0.0, 1.0);
      vec2 grad = slope();
      float keep = 1.0 - ex * ey;
      vec3 c = clamp(tint * shine(grad), 0.0, 1.0) * keep;
      float a = max(c.r, max(c.g, c.b)) + shade(grad) * keep;
      outColor = vec4(c, clamp(a, 0.0, 1.0));
    }`,
};

// ---------------------------------------------------------------------------
// GL helpers
// ---------------------------------------------------------------------------
function compile(gl, type, source) {
  const s = gl.createShader(type);
  gl.shaderSource(s, source);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
  return s;
}

function program(gl, vs, fsBody) {
  const p = gl.createProgram();
  gl.attachShader(p, vs);
  gl.attachShader(p, compile(gl, gl.FRAGMENT_SHADER, FS_HEAD + fsBody));
  gl.bindAttribLocation(p, 0, "aPosition");
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
  const uniforms = {};
  const n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
  for (let i = 0; i < n; i++) {
    const name = gl.getActiveUniform(p, i).name;
    uniforms[name] = gl.getUniformLocation(p, name);
  }
  return { p, u: uniforms };
}

function fbo(gl, w, h, internal, format) {
  gl.activeTexture(gl.TEXTURE0);
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texImage2D(gl.TEXTURE_2D, 0, internal, w, h, 0, format, gl.HALF_FLOAT, null);
  const fb = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
  gl.viewport(0, 0, w, h);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  return {
    fb,
    w,
    h,
    texel: [1 / w, 1 / h],
    attach(unit) {
      gl.activeTexture(gl.TEXTURE0 + unit);
      gl.bindTexture(gl.TEXTURE_2D, tex);
      return unit;
    },
    destroy() {
      gl.deleteTexture(tex);
      gl.deleteFramebuffer(fb);
    },
  };
}

function doubleFbo(gl, w, h, internal, format) {
  let a = fbo(gl, w, h, internal, format);
  let b = fbo(gl, w, h, internal, format);
  return {
    get read() {
      return a;
    },
    get write() {
      return b;
    },
    swap() {
      [a, b] = [b, a];
    },
    destroy() {
      a.destroy();
      b.destroy();
    },
  };
}

function getContext(canvas) {
  const gl = canvas.getContext("webgl2", {
    alpha: true,
    premultipliedAlpha: true,
    antialias: false,
    depth: false,
    stencil: false,
    preserveDrawingBuffer: false,
  });
  if (!gl) return null;
  if (!gl.getExtension("EXT_color_buffer_float") && !gl.getExtension("EXT_color_buffer_half_float")) return null;
  return gl;
}

// ---------------------------------------------------------------------------
// Simulation: velocity + liquid density on one grid.
// ---------------------------------------------------------------------------
class FluidSim {
  constructor(gl, cfg) {
    this.gl = gl;
    this.cfg = cfg;
    this.vs = compile(gl, gl.VERTEX_SHADER, VS);
    this.prog = {};
    for (const key of ["clear", "splat", "advection", "divergence", "curl", "vorticity", "pressure", "gradientSubtract"]) {
      this.prog[key] = program(gl, this.vs, FS[key]);
    }
    this.quad = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.quad);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
    this.index = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.index);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);
  }

  // Grid size from the canvas's CSS size.
  resize(cssW, cssH) {
    const gl = this.gl;
    this.destroyTargets();
    const w = Math.max(16, Math.round(cssW * this.cfg.simScale));
    const h = Math.max(16, Math.round(cssH * this.cfg.simScale));
    this.velocity = doubleFbo(gl, w, h, gl.RG16F, gl.RG);
    this.density = doubleFbo(gl, w, h, gl.R16F, gl.RED);
    this.divergence = fbo(gl, w, h, gl.R16F, gl.RED);
    this.curl = fbo(gl, w, h, gl.R16F, gl.RED);
    this.pressure = doubleFbo(gl, w, h, gl.R16F, gl.RED);
    this.cssW = cssW;
    this.cssH = cssH;
    this.aspect = cssW / cssH;
  }

  blit(target) {
    const gl = this.gl;
    if (target) {
      gl.viewport(0, 0, target.w, target.h);
      gl.bindFramebuffer(gl.FRAMEBUFFER, target.fb);
    } else {
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
  }

  use(name, texel) {
    const { p, u } = this.prog[name];
    this.gl.useProgram(p);
    if (texel && u.texelSize) this.gl.uniform2f(u.texelSize, texel[0], texel[1]);
    return u;
  }

  // Splat at (x, y) CSS px in this canvas with velocity (vx, vy) in
  // grid cells per second (y down, like the pointer).
  splat(x, y, vx, vy) {
    const gl = this.gl;
    const cfg = this.cfg;
    const r = cfg.splatRadiusPx / this.cssH;
    const point = [x / this.cssW, 1 - y / this.cssH];
    const pass = (target, color) => {
      const u = this.use("splat", target.read.texel);
      gl.uniform1i(u.uTarget, target.read.attach(0));
      gl.uniform1f(u.aspectRatio, this.aspect);
      gl.uniform2f(u.point, point[0], point[1]);
      gl.uniform3f(u.color, color[0], color[1], color[2]);
      gl.uniform1f(u.radius, r * r);
      this.blit(target.write);
      target.swap();
    };
    pass(this.velocity, [vx, -vy, 0]);
    pass(this.density, [cfg.splatAmount, cfg.splatAmount, cfg.splatAmount]);
  }

  // The reference's start-up swirl: a handful of random splats.
  randomSplats(count) {
    for (let i = 0; i < count; i++) {
      this.splat(
        this.cssW * Math.random(),
        this.cssH * Math.random(),
        1000 * (Math.random() - 0.5),
        1000 * (Math.random() - 0.5),
      );
    }
  }

  // One frame, in the reference's order: advect, apply this frame's splats,
  // then make the flow incompressible again.
  step(dt, applySplats) {
    const gl = this.gl;
    const cfg = this.cfg;
    const t = this.velocity.read.texel;
    gl.disable(gl.BLEND);

    let u = this.use("advection", t);
    gl.uniform1i(u.uVelocity, this.velocity.read.attach(0));
    gl.uniform1i(u.uSource, this.velocity.read.attach(0));
    gl.uniform1f(u.dt, dt);
    gl.uniform1f(u.dissipation, cfg.velocityDissipation);
    this.blit(this.velocity.write);
    this.velocity.swap();

    gl.uniform1i(u.uVelocity, this.velocity.read.attach(0));
    gl.uniform1i(u.uSource, this.density.read.attach(1));
    gl.uniform1f(u.dissipation, Math.max(0, 1 - cfg.densityFade));
    this.blit(this.density.write);
    this.density.swap();

    applySplats?.();

    u = this.use("curl", t);
    gl.uniform1i(u.uVelocity, this.velocity.read.attach(0));
    this.blit(this.curl);

    u = this.use("vorticity", t);
    gl.uniform1i(u.uVelocity, this.velocity.read.attach(0));
    gl.uniform1i(u.uCurl, this.curl.attach(1));
    gl.uniform1f(u.curl, cfg.curl);
    gl.uniform1f(u.dt, dt);
    this.blit(this.velocity.write);
    this.velocity.swap();

    u = this.use("divergence", t);
    gl.uniform1i(u.uVelocity, this.velocity.read.attach(0));
    this.blit(this.divergence);

    u = this.use("clear", t);
    gl.uniform1i(u.uTexture, this.pressure.read.attach(0));
    gl.uniform1f(u.value, cfg.pressure);
    this.blit(this.pressure.write);
    this.pressure.swap();

    u = this.use("pressure", t);
    gl.uniform1i(u.uDivergence, this.divergence.attach(0));
    for (let i = 0; i < cfg.pressureIterations; i++) {
      gl.uniform1i(u.uPressure, this.pressure.read.attach(1));
      this.blit(this.pressure.write);
      this.pressure.swap();
    }

    u = this.use("gradientSubtract", t);
    gl.uniform1i(u.uPressure, this.pressure.read.attach(0));
    gl.uniform1i(u.uVelocity, this.velocity.read.attach(1));
    this.blit(this.velocity.write);
    this.velocity.swap();
  }

  // Display uniforms shared by the hero and overlay programs.
  bindSurface(display, unit) {
    const gl = this.gl;
    const cfg = this.cfg;
    gl.uniform1i(display.u.uDensity, this.density.read.attach(unit));
    gl.uniform2f(display.u.densityTexel, this.density.read.texel[0], this.density.read.texel[1]);
    gl.uniform1f(display.u.highlight, cfg.highlight);
    gl.uniform1f(display.u.shininess, cfg.shininess);
    gl.uniform1f(display.u.flatness, cfg.flatness);
    gl.uniform1f(display.u.shadow, cfg.shadow);
    gl.uniform3f(display.u.lightDir, ...cfg.lightDir);
  }

  reset() {
    const gl = this.gl;
    for (const t of [this.velocity, this.pressure, this.density]) {
      for (const f of [t.read, t.write]) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, f.fb);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
      }
    }
  }

  destroyTargets() {
    for (const t of [this.velocity, this.density, this.divergence, this.curl, this.pressure]) t?.destroy();
  }

  destroy() {
    const gl = this.gl;
    this.destroyTargets();
    for (const { p } of Object.values(this.prog)) gl.deleteProgram(p);
    gl.deleteShader(this.vs);
    gl.deleteBuffer(this.quad);
    gl.deleteBuffer(this.index);
  }
}

// ---------------------------------------------------------------------------
// Frame loop: runs while there is recent input; pauses when hidden.
// ---------------------------------------------------------------------------
function createLoop({ cfg, onFrame, onIdle }) {
  let raf = 0;
  let last = 0;
  let lastInput = -Infinity;
  let visible = true;
  let destroyed = false;

  const frame = (now) => {
    raf = 0;
    // Same step cap as the reference.
    const dt = last ? Math.min((now - last) / 1000, 0.016) : 0.016;
    last = now;
    onFrame(dt * cfg.timeScale);
    if (now - lastInput < cfg.settleMs) schedule();
    else {
      last = 0;
      onIdle();
    }
  };
  const schedule = () => {
    if (!raf && visible && !destroyed && !document.hidden) raf = requestAnimationFrame(frame);
  };
  const stop = () => {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    last = 0;
  };
  const onVisibility = () => (document.hidden ? stop() : schedule());
  document.addEventListener("visibilitychange", onVisibility);

  return {
    input() {
      lastInput = performance.now();
      schedule();
    },
    setVisible(v) {
      visible = v;
      if (v) schedule();
      else stop();
    },
    destroy() {
      destroyed = true;
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    },
  };
}

// Pointer, as in the reference: each frame the pointer moved, one splat at
// its latest position, pushed by its latest movement.
function createPointer(cfg) {
  let x = 0;
  let y = 0;
  let dx = 0;
  let dy = 0;
  let inside = false;
  let moved = false;
  return {
    // Client coords; `box` is the canvas rect. Outside it, nothing is drawn
    // and re-entering doesn't streak in from the exit point.
    target(box, clientX, clientY) {
      const px = clientX - box.left;
      const py = clientY - box.top;
      const now = px >= 0 && py >= 0 && px <= box.width && py <= box.height;
      if (now && inside) {
        dx = px - x;
        dy = py - y;
        moved = true;
      }
      x = px;
      y = py;
      inside = now;
      return now;
    },
    reset() {
      inside = false;
      moved = false;
    },
    // Called inside sim.step. Returns whether it splatted.
    update(sim) {
      if (!moved) return false;
      moved = false;
      sim.splat(x, y, dx * cfg.splatForce, dy * cfg.splatForce);
      return true;
    },
  };
}

// ---------------------------------------------------------------------------
// Overlay: liquid highlight across the site (outside the hero)
// ---------------------------------------------------------------------------
export function createFluidOverlay(canvas, baseCfg = FLUID_CONFIG) {
  const cfg = forTheme(baseCfg);
  const gl = getContext(canvas);
  if (!gl) return null;
  const sim = new FluidSim(gl, cfg);
  const display = program(gl, sim.vs, FS.surface + FS.overlay);
  const pointer = createPointer(cfg);

  const blend = new URLSearchParams(window.location.search).get("fluidBlend") || cfg.overlayBlend;
  canvas.style.mixBlendMode = blend;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, cfg.overlayMaxDpr);
    const W = window.innerWidth;
    const H = window.innerHeight;
    if (sim.cssW === W && sim.cssH === H) return;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    sim.resize(W, H);
    draw();
  }

  // Hero canvas rect in this canvas's UV (y up); off-screen when absent.
  function exclusion() {
    if (!excludedEl) return [2, 2, 2, 2];
    const r = excludedEl.getBoundingClientRect();
    const W = window.innerWidth;
    const H = window.innerHeight;
    return [r.left / W, 1 - r.bottom / H, r.right / W, 1 - r.top / H];
  }

  function draw() {
    gl.useProgram(display.p);
    sim.bindSurface(display, 0);
    gl.uniform3f(display.u.tint, ...cfg.overlayColor);
    gl.uniform4f(display.u.uExclude, ...exclusion());
    gl.uniform1f(display.u.uFeather, Math.max(excludedFeather, 1) / window.innerHeight);
    sim.blit(null);
  }

  const loop = createLoop({
    cfg,
    onFrame(dt) {
      sim.step(dt, () => pointer.update(sim));
      draw();
    },
    onIdle() {
      sim.reset();
      draw();
      // A blended full-viewport layer costs compositing work on every scroll
      // frame even when empty, so take it out of the page while idle.
      canvas.style.visibility = "hidden";
    },
  });
  canvas.style.visibility = "hidden";

  const viewport = { left: 0, top: 0, width: 0, height: 0 };
  function onMove(e) {
    if (e.pointerType === "touch") return;
    // The hero renders its own liquid; don't double it. In its faded band
    // both draw, so a stroke carries across without a seam.
    if (excludedEl) {
      const r = excludedEl.getBoundingClientRect();
      const top = r.top + excludedFeather;
      const bottom = r.bottom - excludedFeather;
      if (e.clientX >= r.left && e.clientX <= r.right && e.clientY >= top && e.clientY <= bottom) {
        pointer.reset();
        return;
      }
    }
    viewport.width = window.innerWidth;
    viewport.height = window.innerHeight;
    if (pointer.target(viewport, e.clientX, e.clientY)) {
      canvas.style.visibility = "visible";
      loop.input();
    }
  }
  const onLeave = () => pointer.reset();

  let resizeTimer = 0;
  const onResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  };

  resize();
  window.addEventListener("pointermove", onMove, { passive: true });
  document.documentElement.addEventListener("pointerleave", onLeave);
  window.addEventListener("resize", onResize);

  return {
    blend,
    destroy() {
      loop.destroy();
      clearTimeout(resizeTimer);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
      sim.destroy();
      gl.deleteProgram(display.p);
    },
  };
}

// ---------------------------------------------------------------------------
// Hero: capture heading, subtext and portrait into a texture and refract it
// ---------------------------------------------------------------------------

// Draws each word of `el` where the browser laid it out, in its own font.
function drawText(ctx, el, origin) {
  const cs = getComputedStyle(el);
  ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
  ctx.fillStyle = cs.color;
  if ("letterSpacing" in ctx) ctx.letterSpacing = cs.letterSpacing === "normal" ? "0px" : cs.letterSpacing;
  ctx.textBaseline = "alphabetic";
  const range = document.createRange();
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    // Layout-only text (e.g. the typewriter's spacer) isn't on screen.
    if (getComputedStyle(node.parentElement).visibility === "hidden") continue;
    const re = /\S+/g;
    let m;
    while ((m = re.exec(node.data))) {
      range.setStart(node, m.index);
      range.setEnd(node, m.index + m[0].length);
      const rect = range.getClientRects()[0];
      if (!rect) continue;
      const ascent = ctx.measureText(m[0]).fontBoundingBoxAscent;
      ctx.fillText(m[0], rect.left - origin.left, rect.top - origin.top + ascent);
    }
  }
}

// object-fit: contain, bottom-aligned (matches .hero-centered-portrait), with
// the same bottom fade as its CSS mask.
function drawPortrait(ctx, img, origin, fadeStart) {
  const box = img.getBoundingClientRect();
  if (!box.width || !img.naturalWidth) return;
  const s = Math.min(box.width / img.naturalWidth, box.height / img.naturalHeight);
  const w = img.naturalWidth * s;
  const h = img.naturalHeight * s;
  const dpr = ctx.getTransform().a;
  const layer = document.createElement("canvas");
  layer.width = Math.ceil(box.width * dpr);
  layer.height = Math.ceil(box.height * dpr);
  const lctx = layer.getContext("2d");
  lctx.scale(dpr, dpr);
  lctx.imageSmoothingQuality = "high";
  lctx.drawImage(img, (box.width - w) / 2, box.height - h, w, h);
  lctx.globalCompositeOperation = "destination-in";
  const fade = lctx.createLinearGradient(0, 0, 0, box.height);
  fade.addColorStop(fadeStart, "#000");
  fade.addColorStop(1, "rgba(0,0,0,0)");
  lctx.fillStyle = fade;
  lctx.fillRect(0, 0, box.width, box.height);
  ctx.drawImage(layer, box.left - origin.left, box.top - origin.top, box.width, box.height);
}

export function createHeroFluid({ container, canvas, texts, img }, baseCfg = FLUID_CONFIG) {
  const themed = forTheme(baseCfg);
  const cfg = isTouchOnly() ? { ...themed, ...themed.touch } : themed;
  const gl = getContext(canvas);
  if (!gl) return null;
  const sim = new FluidSim(gl, cfg);
  const display = program(gl, sim.vs, FS.surface + FS.hero);
  const pointer = createPointer(cfg);
  const scene = document.createElement("canvas");
  const sceneTex = gl.createTexture();
  let live = false;
  let stale = true;

  // Full-bleed: span the viewport width, and the container's height plus
  // the feather band above and below (faded out by the canvas's CSS mask).
  const feather = cfg.heroFeatherPx;
  function layout() {
    const box = container.getBoundingClientRect();
    const vw = document.documentElement.clientWidth;
    const h = box.height + feather * 2;
    canvas.style.left = `${-box.left}px`;
    canvas.style.top = `${-feather}px`;
    canvas.style.width = `${vw}px`;
    canvas.style.height = `${h}px`;
    canvas.style.setProperty("--hero-liquid-feather", `${feather}px`);
    const dpr = Math.min(window.devicePixelRatio || 1, cfg.maxDpr);
    canvas.width = Math.round(vw * dpr);
    canvas.height = Math.round(h * dpr);
    sim.resize(vw, h);
    stale = true;
  }

  // Snapshot the hero into the scene texture (only when about to show it).
  function capture() {
    const box = canvas.getBoundingClientRect();
    const dpr = canvas.width / box.width;
    scene.width = canvas.width;
    scene.height = canvas.height;
    const ctx = scene.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, box.width, box.height);
    drawPortrait(ctx, img, box, 0.72);
    for (const el of texts) drawText(ctx, el, box);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, sceneTex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, scene);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    stale = false;
  }

  function draw() {
    gl.useProgram(display.p);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, sceneTex);
    gl.uniform1i(display.u.uScene, 0);
    sim.bindSurface(display, 1);
    gl.uniform1f(display.u.refraction, cfg.refraction);
    gl.uniform1f(display.u.chroma, cfg.chromaticAberration);
    sim.blit(null);
  }

  // Swap the live DOM for the canvas while the liquid is moving, and back
  // once it has settled (so text stays crisp, selectable and resize-safe).
  function setLive(on) {
    if (on === live) return;
    live = on;
    if (on && stale) capture();
    container.classList.toggle("is-liquid", on);
  }

  const loop = createLoop({
    cfg,
    onFrame(dt) {
      sim.step(dt, () => pointer.update(sim));
      draw();
    },
    onIdle() {
      sim.reset();
      setLive(false);
    },
  });

  function push(clientX, clientY) {
    const box = canvas.getBoundingClientRect();
    if (!pointer.target(box, clientX, clientY)) return;
    setLive(true);
    loop.input();
  }
  const onPointerMove = (e) => {
    if (e.pointerType !== "touch") push(e.clientX, e.clientY);
  };
  // Touch: passive, so dragging still scrolls the page.
  const onTouchStart = (e) => {
    pointer.reset();
    push(e.touches[0].clientX, e.touches[0].clientY);
  };
  const onTouchMove = (e) => push(e.touches[0].clientX, e.touches[0].clientY);

  const io =
    typeof IntersectionObserver !== "undefined"
      ? new IntersectionObserver(([entry]) => loop.setVisible(entry.isIntersecting))
      : null;
  io?.observe(container);

  let resizeTimer = 0;
  const onResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      layout();
      if (live) capture();
    }, 150);
  };
  const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(onResize) : null;
  ro?.observe(container);
  window.addEventListener("resize", onResize);
  // Late font or image loads change what the snapshot should contain.
  const markStale = () => (stale = true);
  document.fonts?.addEventListener?.("loadingdone", markStale);
  // So do text edits (the typewriter heading); while the canvas is showing,
  // re-snapshot at once so the typing stays visible through the liquid.
  const mo =
    typeof MutationObserver !== "undefined"
      ? new MutationObserver(() => {
          stale = true;
          if (live) capture();
        })
      : null;
  for (const el of texts) mo?.observe(el, { childList: true, characterData: true, subtree: true });

  layout();
  excludedEl = canvas;
  excludedFeather = feather;
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  container.addEventListener("touchstart", onTouchStart, { passive: true });
  container.addEventListener("touchmove", onTouchMove, { passive: true });

  // Start-up swirl, as on the reference.
  const [lo, hi] = cfg.introSplats;
  const intro = lo + Math.floor(Math.random() * (hi - lo + 1));
  if (intro > 0) {
    setLive(true);
    sim.randomSplats(intro);
    loop.input();
  }

  return {
    destroy() {
      loop.destroy();
      io?.disconnect();
      ro?.disconnect();
      mo?.disconnect();
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      document.fonts?.removeEventListener?.("loadingdone", markStale);
      window.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.classList.remove("is-liquid");
      if (excludedEl === canvas) {
        excludedEl = null;
        excludedFeather = 0;
      }
      sim.destroy();
      gl.deleteTexture(sceneTex);
      gl.deleteProgram(display.p);
    },
  };
}

// ---------------------------------------------------------------------------
// Ambient water on the page background
// ---------------------------------------------------------------------------
// Needs only WebGL2. Animates on desktop; with reduced motion or on touch it
// draws one still frame. Returns null when the current theme isn't in
// AMBIENT_WATER_CONFIG.themes.
export function createAmbientWater(canvas, baseCfg = AMBIENT_WATER_CONFIG) {
  const light = isLightTheme();
  if (!baseCfg.themes.includes(light ? "light" : "dark")) return null;
  const cfg = forTheme(baseCfg);
  const gl = canvas.getContext("webgl2", { alpha: true, premultipliedAlpha: true, antialias: false, depth: false });
  if (!gl) return null;
  const vs = compile(gl, gl.VERTEX_SHADER, VS);
  const display = program(gl, vs, FS.ambient);
  const quad = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, quad);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(0);

  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches || isTouchOnly();
  // A fixed offset so the still frame isn't the (symmetric) t = 0 pattern.
  const t0 = performance.now() - 40000;
  let raf = 0;
  let last = 0;
  let destroyed = false;

  function resize() {
    canvas.width = Math.max(1, Math.round(window.innerWidth * cfg.resolution));
    canvas.height = Math.max(1, Math.round(window.innerHeight * cfg.resolution));
    draw(performance.now());
  }

  function draw(now) {
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.useProgram(display.p);
    gl.uniform1f(display.u.uTime, ((now - t0) / 1000) * cfg.speed);
    gl.uniform1f(display.u.uIntensity, cfg.intensity);
    gl.uniform1f(display.u.uScale, cfg.scale);
    gl.uniform1f(display.u.uWave, cfg.wave);
    gl.uniform1f(display.u.uInk, light ? 1 : 0);
    gl.uniform2f(display.u.uRes, canvas.width, canvas.height);
    gl.uniform3f(display.u.uTint, ...cfg.tint);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  const frame = (now) => {
    raf = 0;
    if (destroyed) return;
    if (now - last >= 1000 / cfg.fps - 1) {
      last = now;
      draw(now);
    }
    raf = requestAnimationFrame(frame);
  };

  let resizeTimer = 0;
  const onResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  };

  resize();
  window.addEventListener("resize", onResize);
  // rAF already pauses in background tabs.
  if (!still) raf = requestAnimationFrame(frame);

  return {
    destroy() {
      destroyed = true;
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      gl.deleteProgram(display.p);
      gl.deleteShader(vs);
      gl.deleteBuffer(quad);
    },
  };
}
