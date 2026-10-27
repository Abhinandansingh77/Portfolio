import { useEffect, useLayoutEffect, useRef, useState } from "react";
import portrait from "../Assets/Hero img.webp";
import cromaLogo from "../Assets/Croma optimized.png";
import njoyLogo from "../Assets/Njoy art.png";
import kashiLogo from "../Assets/Kashi vidyapith.png";
import htmlLogo from "../Assets/HTML logo.svg";
import cssLogo from "../Assets/CSS logo.png";
import cursorLogo from "../Assets/logo_cursor.svg";
import claudeLogo from "../Assets/logo_claude.svg";
import chatgptLogo from "../Assets/logo_ChatGpt.svg";
import geminiLogo from "../Assets/logo_gemini.svg";
import figmaLogo from "../Assets/Figma logo.svg";
import photoshopLogo from "../Assets/logo_adobe photoshop.svg";
import illustratorLogo from "../Assets/logo_adobe illustrator.svg";
import zeplinLogo from "../Assets/logo_zeplin.svg";
import { Reveal } from "./Reveal.jsx";
import { useMediaQuery } from "./EngineeringSection.jsx";

// The About page, top to bottom:
// - Intro: portrait and the about statement.
// - What I Do: three cards that fill with the brand colour on hover (after
//   genstudio.framer.media's "Why Gen Studio" boxes). It pins once its
//   bottom is on screen while Experience slides up over it, as From pixels
//   to products comes over the home hero.
// - Skills: on the brand colour, one category at a time, swapped by a line
//   that sweeps up the screen, as in Selected Work (WorkShowcase.jsx).
// - Education & Learning.
// Phones and reduced motion get the same content without the pins.

const whatIDo = [
  {
    title: "Frontend Development",
    text: "Building responsive interfaces and interactive web experiences with clean, maintainable code.",
  },
  {
    title: "Product Design",
    text: "Shaping intuitive user journeys, scalable design systems, and accessible interfaces.",
  },
  {
    title: "AI-Assisted Development",
    text: "Using AI tools to explore ideas, prototype faster, and support development workflows.",
  },
];

const experience = [
  {
    range: "Mar 2024 – Sep 2026",
    company: "Cardinal Health",
    role: "Senior Product Designer",
    points: [
      "Designed workflows and interfaces for Order Express, a healthcare procurement platform.",
      "Improved order completion by 28% through workflow and experience improvements.",
      "Built reusable design system components, reducing developer handoff time by 35%.",
      "Collaborated with engineering on accessible, implementation-ready interfaces.",
    ],
  },
  {
    range: "Sep 2022 – Jan 2024",
    company: "Robosoft Technologies",
    role: "Senior UX Designer",
    points: [
      "Designed cross-platform experiences for Discovery+, Willow TV, and Al Maha Island.",
      "Improved consistency across TV, mobile, and desktop experiences.",
      "Increased new-screen design speed by 40% through reusable patterns.",
    ],
  },
  {
    range: "Oct 2021 – Sep 2022",
    company: "Deloitte",
    role: "UX/UI Designer",
    points: [
      "Designed enterprise dashboards and workflow-management interfaces.",
      "Translated complex business requirements into clear product experiences.",
    ],
  },
  {
    range: "Jan 2020 – Oct 2021",
    company: "eClerx",
    role: "Visual Designer",
    points: [
      "Created digital experiences for global brands, including Dell, Sephora, DFS, and Radisson.",
      "Collaborated with frontend teams to deliver responsive digital interfaces.",
    ],
  },
];

// Each skill shows its logo where there is one, otherwise a Remix icon.
// `crop` logos are wordmarks; only their icon, at the left, is shown.
const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML", src: htmlLogo },
      { name: "CSS", src: cssLogo },
      { name: "JavaScript", icon: "ri-javascript-fill" },
      { name: "React", icon: "ri-reactjs-fill" },
      { name: "Next.js", icon: "ri-nextjs-fill" },
      { name: "Responsive Design", icon: "ri-device-line" },
      { name: "Git", icon: "ri-git-branch-line" },
      { name: "GitHub", icon: "ri-github-fill" },
    ],
  },
  {
    category: "Product & UI/UX",
    items: [
      { name: "Product Thinking", icon: "ri-lightbulb-flash-line" },
      { name: "Interaction Design", icon: "ri-cursor-line" },
      { name: "User Research", icon: "ri-user-search-line" },
      { name: "Design Systems", icon: "ri-layout-grid-line" },
      { name: "Accessibility", icon: "ri-accessibility-line" },
    ],
  },
  {
    category: "AI & Development Tools",
    items: [
      { name: "Cursor", src: cursorLogo, crop: true },
      { name: "Claude", src: claudeLogo, crop: true },
      { name: "ChatGPT", src: chatgptLogo, crop: true },
      { name: "Gemini", src: geminiLogo, crop: true },
    ],
  },
  {
    category: "Design Tools",
    items: [
      { name: "Figma", src: figmaLogo },
      { name: "FigJam", icon: "ri-sticky-note-line" },
      { name: "Photoshop", src: photoshopLogo },
      { name: "Illustrator", src: illustratorLogo },
      { name: "Zeplin", src: zeplinLogo, crop: true },
    ],
  },
];

// Entries without a `logo` show the school's initial instead.
const education = [
  { school: "Sheryians Coding School", degree: "Frontend Development" },
  { school: "Croma Campus", degree: "UI/UX Design", logo: cromaLogo },
  { school: "Njoy Arts", degree: "Graphic Design", logo: njoyLogo },
  { school: "M.G. Kashi Vidyapith, Varanasi", degree: "Bachelor of Arts", logo: kashiLogo },
];

const clamp01 = (v) => Math.min(1, Math.max(0, v));
// Where What I Do pins when it fits: its heading clear of the nav.
const DO_PIN_TOP = 40;

function AboutIntro({ onBack }) {
  return (
    <section className="ab-intro">
      <div className="ab-intro-side">
        <Reveal className="ab-intro-label">
          <button type="button" className="work-back-button" onClick={onBack} aria-label="Back to Home">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <h1 className="ab-intro-kicker">About me</h1>
        </Reveal>
        <Reveal className="ab-portrait-wrap" delay={120}>
          <img className="ab-portrait" src={portrait} alt="Portrait of Abhinandan Singh" decoding="async" />
        </Reveal>
      </div>
      <div className="ab-intro-copy">
        <Reveal as="p" className="ab-intro-lead" delay={80}>
          I&rsquo;m a Product Engineer with a background in UI/UX design, focused on building responsive,
          user-centered digital products.
        </Reveal>
        <Reveal as="p" className="ab-intro-body" delay={200}>
          I bring design and frontend development together to turn complex problems into clear, functional
          experiences.
        </Reveal>
      </div>
    </section>
  );
}

// Pins once its bottom reaches the bottom of the screen (or just under the
// nav, if it is shorter than the screen), so all of it is seen before
// Experience covers it.
function WhatIDo({ pinned }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node || !pinned) return undefined;
    const place = () => {
      node.style.top = `${Math.min(DO_PIN_TOP, window.innerHeight - node.offsetHeight)}px`;
    };
    place();
    const ro = new ResizeObserver(place);
    ro.observe(node);
    window.addEventListener("resize", place);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", place);
      node.style.top = "";
    };
  }, [pinned]);

  return (
    <section ref={ref} className="ab-do" aria-labelledby="ab-do-title">
      <Reveal>
        <h2 className="ab-title" id="ab-do-title">
          What I Do
        </h2>
      </Reveal>
      <div className="ab-do-grid">
        {whatIDo.map((item, i) => (
          <Reveal as="article" key={item.title} className="ab-do-card" delay={i * 90}>
            <h3 className="ab-do-name">{item.title}</h3>
            <p className="ab-do-text">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// Slides up over What I Do. Its heading fades up as it comes in, scrubbed
// by the scroll (--ab-xp-in), like From pixels to products' heading.
function Experience({ pinned }) {
  const ref = useRef(null);
  const headRef = useRef(null);

  useEffect(() => {
    const section = ref.current;
    const head = headRef.current;
    if (!section || !head) return undefined;
    if (!pinned) {
      section.style.setProperty("--ab-xp-in", "1");
      return undefined;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const t = clamp01((vh - head.getBoundingClientRect().top) / (vh * 0.6));
      section.style.setProperty("--ab-xp-in", (t * t * (3 - 2 * t)).toFixed(4));
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
  }, [pinned]);

  return (
    <section ref={ref} className="ab-xp" aria-labelledby="ab-xp-title">
      <div ref={headRef} className="ab-xp-head">
        <h2 className="ab-title" id="ab-xp-title">
          Experience
        </h2>
      </div>
      <div className="xp-list ab-xp-list">
        {experience.map((item, i) => (
          <Reveal as="article" key={item.company} className="xp-item" delay={i * 60}>
            <p className="xp-range">{item.range}</p>
            <div className="xp-track" aria-hidden="true">
              <span className="xp-dot" />
              <span className="xp-line" />
            </div>
            <div className="xp-body">
              <h3 className="xp-role">{item.role}</h3>
              <p className="xp-company">{item.company}</p>
              <ul className="xp-points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ items }) {
  return (
    <ul className="ab-sk-card">
      {items.map((skill) => (
        <li key={skill.name} className="ab-sk-tile">
          <span className="ab-sk-mark" aria-hidden="true">
            {skill.src ? (
              <img className={skill.crop ? "is-crop" : undefined} src={skill.src} alt="" loading="lazy" decoding="async" />
            ) : (
              <i className={skill.icon} />
            )}
          </span>
          <span className="ab-sk-label">{skill.name}</span>
        </li>
      ))}
    </ul>
  );
}

// One category: a window onto a pinned full-screen layer, as a Selected
// Work row. The title rolls up through its mask the first time the sweep
// uncovers it.
function SkillRow({ cat }) {
  const pinRef = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const pin = pinRef.current;
    if (!pin || shown) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) setShown(true);
      },
      { threshold: 0.5 },
    );
    io.observe(pin.querySelector(".ab-sk-name"));
    return () => io.disconnect();
  }, [shown]);

  return (
    <div className="ab-sk-row">
      <div className="ab-sk-track">
        <div ref={pinRef} className={`ab-sk-pin ${shown ? "is-shown" : ""}`.trim()}>
          <div className="ab-sk-stage">
            <h3 className="ab-sk-name">
              <span className="ab-sk-name-inner">{cat.category}</span>
            </h3>
            <SkillCard items={cat.items} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Skills({ pinned }) {
  const heading = (
    <header className="ab-sk-head">
      <h2 className="ab-title ab-sk-title">Skills</h2>
    </header>
  );

  if (!pinned) {
    return (
      <section className="ab-sk is-static" aria-label="Skills">
        {heading}
        <div className="ab-sk-list">
          {skills.map((cat) => (
            <Reveal key={cat.category} className="ab-sk-list-item">
              <h3 className="ab-sk-name">{cat.category}</h3>
              <SkillCard items={cat.items} />
            </Reveal>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="ab-sk" aria-label="Skills">
      {heading}
      {skills.map((cat) => (
        <SkillRow key={cat.category} cat={cat} />
      ))}
    </section>
  );
}

function Education() {
  return (
    <section className="ab-edu" aria-labelledby="ab-edu-title">
      <Reveal>
        <h2 className="ab-title" id="ab-edu-title">
          Education &amp; Learning
        </h2>
      </Reveal>
      <div className="ab-edu-grid">
        {education.map((item, i) => (
          <Reveal as="article" key={item.school} className="edu-card" delay={i * 70}>
            <span className={`edu-mark ${item.logo ? "" : "edu-mark-initial"}`.trim()} aria-hidden="true">
              {item.logo ? <img src={item.logo} alt="" loading="lazy" decoding="async" /> : item.school[0]}
            </span>
            <div className="edu-copy">
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function AboutPage({ onBack }) {
  const pinned = !useMediaQuery("(max-width: 760px), (prefers-reduced-motion: reduce)");

  return (
    <>
      <AboutIntro onBack={onBack} />
      <div className={`ab-curtain ${pinned ? "is-pinned" : ""}`.trim()}>
        <WhatIDo pinned={pinned} />
        <Experience pinned={pinned} />
      </div>
      <Skills pinned={pinned} />
      <Education />
    </>
  );
}
