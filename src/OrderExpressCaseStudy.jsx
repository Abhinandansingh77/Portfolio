import { Reveal } from "./Reveal.jsx";
import { CtaIcon } from "./CtaIcon.jsx";
import cardinalHealthLogo from "../Assets/cardinal-health-logo.svg";

const LIVE_URL =
  "https://pdlogin.cardinalhealth.com/signin?fromURI=https%3A%2F%2Forderexpress.cardinalhealth.com%2Feps%2Fmycah";

// Cardinal Health · Order Express case study. The page has its own layout
// (.oe-* in styles.css) rather than the shared case study template: the copy
// is short and role-led, so it reads as one editorial column of labelled rows.

const heroFacts = [
  { label: "My Role", value: "Product Design · UX Research · UI Engineering" },
  { label: "Focus", value: "B2B E-commerce · Design Systems · React.js" },
  { label: "Industry", value: "Healthcare Technology" },
];

const productFacts = [
  { label: "Primary users", value: "Hospitals, pharmacies, and healthcare procurement teams." },
  { label: "Business model", value: "Primarily B2B." },
];

const disciplines = [
  {
    number: "01",
    name: "Product Design",
    tag: "Design",
    heading: "From requirements to interfaces.",
    points: [
      "UX research and workflow analysis.",
      "Translating business requirements into user experiences.",
      "Designing new pages, features, and interactions.",
      "Creating and maintaining design systems.",
    ],
  },
  {
    number: "02",
    name: "Frontend Development",
    tag: "Engineering",
    tone: "is-engineering",
    heading: "From designs to working interfaces.",
    points: [
      "Translating UI designs into React.js components when required.",
      "Building responsive interface elements.",
      "Working with reusable components and frontend patterns.",
      "Collaborating with engineering on implementation.",
    ],
  },
  {
    number: "03",
    name: "Product Collaboration",
    tag: "Product",
    heading: "Connecting design and engineering.",
    points: [
      "Understanding product and stakeholder requirements.",
      "Evaluating usability and implementation constraints.",
      "Coordinating with developers and product teams.",
      "Improving existing product experiences.",
    ],
  },
];

const experienceAreas = [
  {
    title: "Product Discovery",
    description: "Helping users find the right medical supplies and products.",
  },
  {
    title: "Ordering Experience",
    description: "Designing clear and efficient procurement workflows.",
  },
  {
    title: "Account & Access",
    description: "Creating login and account-related interfaces.",
  },
  {
    title: "Design Systems",
    description: "Building reusable components and consistent UI patterns.",
  },
  {
    title: "New Features",
    description: "Designing and supporting new screens based on evolving product requirements.",
  },
];

const workflowSteps = ["Design", "Develop", "Refine"];

const metrics = [
  { value: "+28%", label: "Order completion", tone: "is-positive" },
  { value: "−35%", label: "Developer handoff time" },
  { value: "100K+", label: "Healthcare products" },
  { value: "WCAG 2.1 AA", label: "Accessibility compliance", isText: true },
];

function StepArrow() {
  return (
    <svg
      className="oe-step-arrow"
      viewBox="0 0 40 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M1 6h37" />
      <path d="m33 1 5 5-5 5" />
    </svg>
  );
}

export default function OrderExpressCaseStudy({ image }) {
  return (
    <article className="oe-case">
      <Reveal as="header" className="oe-hero">
        <div className="oe-hero-copy">
          <img className="oe-logo" src={cardinalHealthLogo} alt="Cardinal Health" />
          <h1 className="oe-title">Order Express</h1>
          <p className="oe-tagline">
            Simplifying healthcare procurement through product design and frontend engineering.
          </p>
          <p className="oe-hero-description">
            A B2B healthcare procurement platform that helps hospitals and pharmacies discover,
            manage, and order medical supplies and pharmaceuticals.
          </p>

          <dl className="oe-facts">
            {heroFacts.map((fact) => (
              <div key={fact.label} className="oe-fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <a className="oe-live-link" href={LIVE_URL} target="_blank" rel="noreferrer">
            Visit live website
            <CtaIcon icon="ri-arrow-right-up-line" direction="up-right" />
          </a>
        </div>

        {image ? (
          <div className="oe-hero-media">
            <img
              src={image}
              alt="Pharmacy staff picking medical supplies from warehouse shelving"
            />
          </div>
        ) : null}
      </Reveal>

      <Reveal as="section" className="oe-row" >
        <h2 className="oe-row-label">The Product</h2>
        <div className="oe-row-body">
          <p className="oe-lead">
            Order Express is a healthcare procurement platform built for businesses that need a
            reliable way to source medical supplies and pharmaceuticals.
          </p>
          <p className="oe-text">
            It brings product discovery, ordering, inventory, and purchasing workflows into one
            digital experience.
          </p>
          <dl className="oe-product-facts">
            {productFacts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>

      {disciplines.map((item) => (
        <Reveal as="section" key={item.number} className="oe-row oe-discipline">
          <div className="oe-discipline-meta">
            <span className="oe-discipline-number">{item.number}</span>
            <h2 className="oe-discipline-name">{item.name}</h2>
            <span className={`oe-tag ${item.tone ?? ""}`.trim()}>{item.tag}</span>
          </div>
          <div className="oe-row-body">
            <h3 className="oe-discipline-heading">{item.heading}</h3>
            <ul className="oe-points">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}

      <Reveal as="section" className="oe-row">
        <h2 className="oe-row-label">Across the product experience</h2>
        <dl className="oe-row-body oe-areas">
          {experienceAreas.map((area) => (
            <div key={area.title} className="oe-area">
              <dt>{area.title}</dt>
              <dd>{area.description}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal as="section" className="oe-row">
        <h2 className="oe-row-label">One workflow. Two disciplines.</h2>
        <div className="oe-row-body">
          <ol className="oe-steps" aria-label="Design, then develop, then refine">
            {workflowSteps.map((step, index) => (
              <li key={step} className="oe-step">
                {index > 0 ? <StepArrow /> : null}
                <span className="oe-step-name">{step}</span>
              </li>
            ))}
          </ol>
          <p className="oe-text">
            I worked across the product lifecycle, moving between interface design and frontend
            implementation based on project requirements.
          </p>
          <p className="oe-text">
            From defining interactions and creating reusable UI components to translating designs
            into React.js interfaces, my focus was on connecting the experience with its
            implementation.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="oe-metrics" >
        {metrics.map((metric) => (
          <div key={metric.label} className="oe-metric">
            <span
              className={`oe-metric-value${metric.isText ? " is-text" : ""} ${metric.tone ?? ""}`.trim()}
            >
              {metric.value}
            </span>
            <span className="oe-metric-label">{metric.label}</span>
          </div>
        ))}
      </Reveal>

      <Reveal as="section" className="oe-note">
        <h2 className="oe-note-badge">Behind the product</h2>
        <p>
          Order Express is an enterprise product developed within a confidential environment. Due to
          company confidentiality and infrastructure access restrictions, original product assets and
          source code are not available for public display. The case study focuses on my
          responsibilities, contributions, and product experience.
        </p>
      </Reveal>
    </article>
  );
}
