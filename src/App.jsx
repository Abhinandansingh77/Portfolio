import { useEffect, useMemo, useRef, useState } from "react";
import heroImg from "../Assets/Hero img.webp";
import profilePhoto from "../Assets/profile photo.png";
import aiWorkflowImg1 from "../Assets/ai & workflow img 1.webp";
import aiWorkflowImg2 from "../Assets/ai & workflow img 2.webp";
import aiWorkflowImg3 from "../Assets/ai & workflow img 3.webp";
import cardinalHealthVerticalImg from "../Assets/Featured work cardinal health img vertical.webp";
// Note the capital V — this file is named differently from its siblings.
import discoveryPlusVerticalImg from "../Assets/Featured work discovery plus img Vertical.webp";
import brightlineVerticalImg from "../Assets/Featured work bright line img vertical.webp";
import almahaVerticalImg from "../Assets/Featured work al maha img vertical.webp";
import robosoftLogo from "../Assets/Robotosoft.svg";
import deloitteLogo from "../Assets/Delloite.svg";
import eclerxLogo from "../Assets/Eclerx.svg";
import cromaLogo from "../Assets/Croma.svg";
import njoyLogo from "../Assets/Njoy art.png";
import kashiLogo from "../Assets/Kashi vidyapith.png";
import figmaLogo from "../Assets/Figma logo.svg";
import xdLogo from "../Assets/XD logo.svg";
import miroLogo from "../Assets/Miro.svg";
import photoshopLogo from "../Assets/Photoshop.svg";
import illustratorLogo from "../Assets/Illustrator Logo.svg";
import keynoteLogo from "../Assets/Keynote logo.svg";
import htmlLogo from "../Assets/HTML logo.svg";
import cssLogo from "../Assets/CSS logo.png";
import discoveryLogo from "../Assets/Discovery logo.svg";
import discoveryPreview from "../Assets/Discovery Preview img.jpg";
import almahaLogo from "../Assets/AL maha logo.png";
import almahaPreview from "../Assets/Al maha Preview img.jpg";
import mcdeliveryLogo from "../Assets/McDelivery logo.png";
import mcdeliveryPreview from "../Assets/McDelivery Preview img.jpg";
import cardinalHealthLogo from "../Assets/Cardinal health.svg";
import cardinalHealthProjectLogo from "../Assets/cardinal-health-logo.svg";
import brightlineLogo from "../Assets/Brightline_Logo.svg.png";
import brightlinePreview from "../Assets/Brightline Preview img.png";
import brightlinePdf from "../Assets/Brightline.pdf";
import resumePdf from "../Assets/Abhinandan_Singh_Resume.pdf";
import toolChatgpt from "../Assets/logo_ChatGpt.svg";
import toolGemini from "../Assets/logo_gemini.svg";
import toolClaude from "../Assets/logo_claude.svg";
import toolCursor from "../Assets/logo_cursor.svg";
import toolAntigravity from "../Assets/logo_antigravity.svg";
import toolPerplexity from "../Assets/logo_perplexity.svg";
import toolMidjourney from "../Assets/logo_midjourney.svg";
import toolFigma from "../Assets/logo_Figma.svg";
import toolPhotoshop from "../Assets/logo_adobe photoshop.svg";
import toolIllustrator from "../Assets/logo_adobe illustrator.svg";
import toolMiro from "../Assets/logo_miro.svg";
import toolWebflow from "../Assets/logo_webflow.svg";
import toolFramer from "../Assets/logo_framer.svg";
import toolZeplin from "../Assets/logo_zeplin.svg";
import toolCanva from "../Assets/logo_canva.svg";
import cardinalHealthLogoWhite from "../Assets/cardinal-health-logo-white.svg";
import discoveryLogoWhite from "../Assets/Discovery white.png";
import almahaLogoWhite from "../Assets/Al maha logo white.png";
import brightlineLogoWhite from "../Assets/Brightline_Logo white.png";
import mcdonaldsLogo from "../Assets/McDonalds black.png";
import shoppersStopLogo from "../Assets/shoppers shop black.png";
import willowLogo from "../Assets/Willow tv primary.svg";
import mankindLogo from "../Assets/mankind primary.png";
import bharatPetroleumLogo from "../Assets/bharat petroleum.png";

import cardinalHealthHorizontalImg from "../Assets/Featured work cardinal health img horizotal.webp";
import discoveryPlusHorizontalImg from "../Assets/Featured work discovery plus img horizotal.webp";
import brightlineHorizontalImg from "../Assets/Featured work bright line img horizotal.webp";
import almahaHorizontalImg from "../Assets/Featured work al maha img horizotal.webp";
import mcdeliveryHorizontalImg from "../Assets/Featured work mcdonald img horizotal.webp";
import mcdonaldsWebpLogo from "../Assets/McDonald's logo.webp";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/projects" },
  { label: "About", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const valuePillars = [
  {
    title: "Product Strategy & UX",
    description:
      "User research, workflow analysis, information architecture, usability testing, product discovery, and UX optimization.",
  },
  {
    title: "Product Design & Systems",
    description:
      "End-to-end product design across web, mobile, TV, dashboards, and scalable design systems.",
  },
  {
    title: "AI-Enabled Design Workflow",
    description:
      "AI-assisted ideation, prompt engineering, research synthesis, content generation, workflow acceleration, and design exploration.",
  },
];

const experienceItems = [
  {
    range: "Mar 2024 - Apr 2026",
    company: "Cardinal Health",
    role: "Senior Product Designer",
    logo: cardinalHealthLogo,
    points: [
      "Led UX/product design for Order Express, a large-scale healthcare procurement platform used by hospitals and pharmacies",
      "Designed ordering workflows, dashboards, inventory systems, financial tracking experiences, and scalable design systems",
      "+28% order completion, -35% developer handoff time, and full WCAG 2.1 AA compliance",
    ],
  },
  {
    range: "Sep 2022 - Jan 2024",
    company: "Robosoft Technologies",
    role: "Senior UX Designer",
    logo: robosoftLogo,
    points: [
      "Designed OTT and consumer digital products including Discovery+, Willow TV, and Al Maha Island",
      "Led cross-device UX across TV, mobile, and desktop ecosystems",
      "+40% faster new screen design and improved discovery & engagement flows",
    ],
  },
  {
    range: "Oct 2021 - Sep 2022",
    company: "Deloitte",
    role: "UX/UI Designer",
    logo: deloitteLogo,
    points: [
      "Designed enterprise dashboards and workflow systems for Fortune 500 environments",
      "Translated business complexity into usable product experiences",
    ],
  },
  {
    range: "Jan 2020 - Oct 2021",
    company: "eClerx",
    role: "Visual Designer",
    logo: eclerxLogo,
    points: [
      "Created digital experiences for Dell, Sephora, DFS, and Radisson",
      "Delivered across campaign, landing page, and dashboard ecosystems",
    ],
  },
];

const educationItems = [
  {
    range: "Aug 2019 - Jan 2020",
    school: "Croma Campus",
    degree: "UI/UX Design",
    logo: cromaLogo,
  },
  {
    range: "Mar 2017 - Jan 2018",
    school: "Njoy Arts",
    degree: "Graphic Design",
    logo: njoyLogo,
  },
  {
    range: "Jun 2013 - Jul 2016",
    school: "M.G. Kashi Vidyapith, Varanasi",
    degree: "Bachelor of Arts",
    logo: kashiLogo,
  },
];

const skillCategories = [
  {
    category: "Product Design",
    items: ["Product Thinking", "User Journey Mapping", "UX Strategy", "Information Architecture", "Interaction Design", "Workflow Optimization", "Product Discovery"],
  },
  {
    category: "UX Research",
    items: ["User Interviews", "Usability Testing", "A/B Testing", "Competitive Benchmarking", "Heuristic Evaluation", "Journey Mapping"],
  },
  {
    category: "Design Systems",
    items: ["Component Libraries", "Design Tokens", "Responsive Systems", "Figma Dev Handoff", "Documentation", "Accessibility (WCAG 2.1 AA)"],
  },
  {
    category: "Enterprise UX",
    items: ["Dashboard Design", "Complex Workflows", "Multi-role Systems", "B2B Product Design", "Data-heavy Interfaces"],
  },
  {
    category: "AI Design & Product Skills",
    items: ["AI Workflow Design", "AI Content Ideation", "AI-Assisted UX Research", "Prompt Engineering", "Rapid Design Exploration", "AI Feature Concepting", "Conversational UX", "Human-AI Interaction Thinking"],
  },
];

const toolCategories = [
  {
    category: "Design",
    items: ["Figma", "Miro", "Photoshop", "Illustrator", "Keynote"],
  },
  {
    category: "Prototyping",
    items: ["Figma Prototyping", "Interactive Flows", "Motion Concepts"],
  },
  {
    category: "Dev Collaboration",
    items: ["Figma Dev Mode", "Zeplin", "Design Specs", "Component Documentation"],
  },
  {
    category: "AI Stack",
    items: ["ChatGPT", "Claude", "Cursor", "Gemini", "Perplexity", "Figma AI", "Midjourney"],
  },
];

const projectItems = [
  {
    index: "01",
    slug: "cardinal-health-procurement-platform",
    titleImage: cardinalHealthProjectLogo,
    titleAlt: "Cardinal Health",
    title: "Cardinal Health",
    domainTags: "HealthTech · Enterprise B2B & B2C · Web App",
    projectTitle: "Order Express, Healthcare Procurement Platform Redesign",
    impactBadges: ["+28% Order Completion", "-35% Dev Handoff Time", "WCAG 2.1 AA"],
    stats: ["+28% Order Completion", "-35% Dev Handoff Time", "WCAG 2.1 AA"],
    description:
      "Redesigned a complex healthcare procurement system for pharmacies and hospitals. Simplified bulk ordering workflows to make daily operations faster and error-free.",
    roleScope: "End-to-End UX, Enterprise Design System, Workflow Optimization",
    cta: "View Case Study →",
    preview: cardinalHealthHorizontalImg,
  },
  {
    index: "02",
    slug: "discovery-plus",
    titleImage: discoveryLogo,
    titleAlt: "Discovery Plus",
    title: "Discovery Plus",
    domainTags: "Media & OTT · Consumer UX · TV, Mobile & Web",
    projectTitle: "Cross-Platform Entertainment & Content Discovery Ecosystem",
    impactBadges: ["+40% Faster Discovery", "1.5M+ Active Users", "Multi-Device Architecture"],
    stats: ["+40% Faster Discovery", "1.5M+ Active Users", "Multi-Device Architecture"],
    description:
      "Unified the streaming experience across TV, mobile, and web apps. Made content discovery faster and easier to keep viewers engaged longer.",
    roleScope: "Multi-Platform UX/UI, Content Architecture, Interaction Design",
    cta: "View Case Study →",
    preview: discoveryPlusHorizontalImg,
    previewScale: 1.2,
    previewPosition: "center 70%",
  },
  {
    index: "03",
    slug: "brightline-future-travel",
    titleImage: brightlineLogo,
    titleAlt: "Brightline Future Mobility",
    title: "Brightline Future Mobility",
    domainTags: "Travel Tech · Connected Mobility · Mobile & IoT",
    projectTitle: "Future Mobility & Connected Journey Companion",
    impactBadges: ["Touchless Station UX", "End-to-End Journey Mapping", "Real-Time Transit IoT"],
    stats: ["Touchless Station UX", "End-to-End Journey Mapping", "Real-Time Transit IoT"],
    description:
      "Designed a connected travel companion connecting train stations, booking, and onboard services. Created a smooth, touchless journey for travelers from departure to arrival.",
    roleScope: "Service Design, Mobile UX/UI, Connected Physical-Digital Touchpoints",
    cta: "View Case Study →",
    preview: brightlineHorizontalImg,
    previewPosition: "center 70%",
  },
  {
    index: "04",
    slug: "al-maha-island-lusail",
    titleImage: almahaLogo,
    titleAlt: "AL MAHA Island Lusail",
    title: "AL MAHA Island Lusail",
    domainTags: "Entertainment & Leisure · Mobile-First · Ticketing Platform",
    projectTitle: "High-Traffic Destination & Event Booking Platform",
    impactBadges: ["Mobile-First Checkout", "-25% Booking Friction", "Dynamic Event Schedules"],
    stats: ["Mobile-First Checkout", "-25% Booking Friction", "Dynamic Event Schedules"],
    description:
      "Designed a mobile-first ticketing and event guide for a top entertainment destination. Streamlined booking flows to reduce drop-offs and make planning effortless.",
    roleScope: "Mobile UX Strategy, Booking Funnel Optimization, Visual Identity",
    cta: "View Case Study →",
    preview: almahaHorizontalImg,
    previewPosition: "center 70%",
  },
  {
    index: "05",
    slug: "mcdelivery-experience-design",
    titleImage: mcdonaldsWebpLogo,
    titleAlt: "McDonald's",
    title: "McDonald's",
    domainTags: "QSR & Food Delivery · E-Commerce · High-Volume Consumer Mobile",
    projectTitle: "Frictionless Mobile Ordering & Customization Experience",
    impactBadges: ["+30% Faster Checkout", "-22% Cart Drop-Off", "15% Repeat Reorders"],
    stats: ["+30% Faster Checkout", "-22% Cart Drop-Off", "15% Repeat Reorders"],
    description:
      "Redesigned the mobile ordering experience to speed up meal browsing and checkout. Reduced friction during rush hours to boost completed orders and repeat visits.",
    roleScope: "Conversion Rate Optimization (CRO), Checkout Flow UX, Micro-Interactions",
    cta: "View Case Study →",
    preview: mcdeliveryHorizontalImg,
    previewPosition: "center 70%",
  },
];

const discoveryPlusCaseStudy = {
  behanceVisualsUrl: "https://www.behance.net/gallery/184130255/OTT-Design",
  projectTitle: "Discovery+ OTT Experience Redesign",
  projectTagline:
    "Reimagining content discovery and cross-device streaming experiences for a global entertainment platform.",
  heroSubtitle:
    "Led UX/UI design exploration for mobile, TV, and web interfaces focused on discoverability, retention, and binge-worthy viewing journeys.",
  quickInfo: [
    { label: "Role", value: "Senior Product Designer" },
    { label: "Platform", value: "Smart TV, Mobile App, Responsive Web" },
    { label: "Industry", value: "Media / OTT / Streaming" },
    { label: "Scope", value: "Product UX, UI Systems, Navigation, Content Discovery" },
    { label: "Skills", value: "Figma, Prototyping, Design Systems, User Flows" },
  ],
  overview:
    "Discovery+ required a scalable streaming experience that helped users quickly find relevant content across devices. The challenge was balancing a large content library with a seamless browsing experience across TV, mobile, and desktop. My focus was to improve discoverability, navigation clarity, and engagement.",
  problemStatement:
    "Users spend more time searching than watching. Navigation differs across TV, mobile, and desktop. Large content libraries create decision fatigue. The goal was to simplify discovery while increasing engagement.",
  goals: [
    "Improve content discovery speed",
    "Reduce navigation friction across devices",
    "Create a scalable UI system for future content growth",
    "Increase watch session duration",
    "Deliver a premium entertainment-first visual experience",
  ],
  roleItems: [
    "UX audits and competitor benchmarking",
    "Information architecture restructuring",
    "Wireframing and navigation flows",
    "High-fidelity UI design",
    "Cross-device experience design (TV / Mobile / Web)",
    "Component system creation",
    "Developer handoff and iteration support",
  ],
  process: [
    {
      title: "Research & Benchmarking",
      description:
        "Analyzed Netflix, Prime Video, Hulu, and Disney+ to identify proven discovery patterns and recommendation systems.",
    },
    {
      title: "Information Architecture",
      description: "Simplified content categories and reorganized browse journeys to reduce overload.",
    },
    {
      title: "Interface Design",
      description:
        "Created cinematic layouts using bold imagery, focused typography, and modular cards that elevated content presentation.",
    },
    {
      title: "Cross-Device Optimization",
      description:
        "Adjusted spacing, focus states, interactions, and navigation logic for TV remote navigation, mobile touch behavior, and desktop browsing.",
    },
  ],
  improvements: [
    {
      title: "Improved Content Discovery",
      description:
        "Improved recommendation rows, featured banners, trending rails, and genre pathways.",
    },
    {
      title: "Reduced Navigation Friction",
      description: "Reduced clicks required to reach content detail pages.",
    },
    {
      title: "Increased Session Continuity",
      description: "Designed continue-watching modules and recently viewed states.",
    },
    {
      title: "Built Scalable UI System",
      description:
        "Reusable cards, buttons, navigation patterns, and metadata modules accelerated future screen creation.",
    },
  ],
  outcome:
    "This redesign improved how users discover and engage with content across devices by combining structured UX architecture with immersive UI.",
  expectedImpact: [
    "Increased content discoverability",
    "Improved session duration",
    "Reduced navigation friction",
    "Stronger retention through personalized journeys",
  ],
  galleryCaptions: [
    "Hero experience focused on premium content storytelling",
    "Modular browse rails for faster exploration",
    "TV-first navigation optimized for remote controls",
    "Mobile experience built for one-hand discovery",
    "Smart recommendation surfaces to increase watch time",
    "Unified design system across screens",
  ],
  whyThisMatters:
    "This project reflects my ability to solve complex product problems where user behavior, business metrics, and multi-device consistency must work together. It is not just UI. It is platform thinking.",
  highlightMetrics: [
    "3 Platforms",
    "75+ Screens",
    "120+ Components",
    "40% Faster UI Production",
    "+32% Content Discoverability",
    "10M+ Audience Reach",
  ],
};

const alMahaCaseStudy = {
  projectTitle: "Al Maha Island Experience & Ticketing Platform",
  projectTagline:
    "Designing a seamless mobile booking and event discovery experience for a high-traffic entertainment destination.",
  heroSubtitle:
    "Designed a mobile-first booking journey focused on faster decisions, reduced drop-offs, and premium brand presentation.",
  quickInfo: [
    { label: "Role", value: "Senior Product Designer" },
    { label: "Platform", value: "Mobile App (iOS / Android)" },
    { label: "Industry", value: "Events / Tourism / Entertainment" },
    { label: "Scope", value: "Booking Flow, Discovery, UX Systems, Payments" },
    { label: "Skills", value: "Figma, Prototyping, Design Systems, User Flows" },
  ],
  sectionHeading:
    "Designing high-conversion booking experiences for real-world entertainment platforms.",
  highlightMetrics: [
    "1.5M+ Annual Visitors",
    "60+ Events & Experiences",
    "45+ Screens Designed",
    "35% Faster Booking Flow",
    "20% Reduced Drop-offs",
    "100% Mobile-first Experience",
  ],
  overview:
    "Al Maha Island required a mobile-first platform that allowed users to explore events, book tickets, and manage experiences seamlessly. The challenge was to design a fast, intuitive booking journey while showcasing multiple entertainment options without overwhelming users. My focus was on simplifying decision-making, reducing booking friction, and creating a premium visual experience aligned with the destination brand.",
  problemStatement:
    "Users faced multiple friction points while booking experiences: complex ticket selection flows, lack of clarity in event details and pricing, high drop-offs during checkout, and difficulty discovering relevant experiences. The goal was to streamline booking, improve clarity, and increase conversion rates.",
  goals: [
    "Simplify event discovery and selection",
    "Reduce booking steps and friction",
    "Improve clarity in pricing and availability",
    "Increase conversion rate",
    "Deliver a premium mobile experience",
  ],
  roleItems: [
    "User journey mapping and booking flow design",
    "Information architecture for event discovery",
    "Wireframing and interaction design",
    "High-fidelity UI aligned with brand identity",
    "Design system and reusable components",
    "Developer handoff and iteration support",
  ],
  process: [
    {
      title: "Research & Benchmarking",
      description:
        "Analyzed platforms like BookMyShow, Ticketmaster, and Airbnb Experiences to identify best practices in booking and discovery flows.",
    },
    {
      title: "Information Architecture",
      description:
        "Structured event categories, filters, and browsing paths to reduce cognitive load.",
    },
    {
      title: "Booking Flow Optimization",
      description:
        "Simplified ticket selection, pricing visibility, and checkout flow to reduce drop-offs.",
    },
    {
      title: "Visual & Interaction Design",
      description:
        "Created a premium dark-themed UI with immersive visuals and clear CTAs to guide users.",
    },
  ],
  improvements: [
    {
      title: "Improved Event Discovery",
      description:
        "Structured categories, filters, and featured sections for faster exploration.",
    },
    {
      title: "Reduced Booking Friction",
      description: "Simplified ticket selection and minimized steps to complete purchase.",
    },
    {
      title: "Clear Pricing & Availability",
      description: "Improved transparency in ticket pricing and time slots.",
    },
    {
      title: "Mobile-First Optimization",
      description: "Designed for quick, one-hand interactions and fast navigation.",
    },
  ],
  outcome:
    "The redesigned experience improved booking efficiency and reduced user friction by simplifying navigation and clarifying decision points.",
  expectedImpact: [
    "Increased booking completion rates",
    "Reduced drop-offs in checkout flow",
    "Faster event discovery",
    "Improved user confidence in ticket selection",
  ],
  galleryCaptions: [
    "Immersive event discovery with visually rich cards",
    "Simplified ticket selection flow for faster booking",
    "Clear pricing and availability for informed decisions",
    "Mobile-first UI designed for quick interactions",
    "Structured event categories for easy navigation",
    "Seamless checkout experience",
  ],
  whyThisMatters:
    "This project demonstrates my ability to design real-world transactional experiences where user intent, speed, and clarity directly impact business outcomes. It reflects strong product thinking beyond visual design.",
};

const mcdeliveryCaseStudy = {
  behanceVisualsUrl: "https://www.behance.net/gallery/184129509/McDelivery-Experience-Design",
  projectTitle: "McDelivery Mobile Ordering Experience Redesign",
  projectTagline:
    "Optimizing food ordering flows to improve speed, personalization, and conversion across mobile platforms.",
  quickInfo: [
    { label: "Role", value: "Senior Product Designer" },
    { label: "Platform", value: "Mobile App, Responsive Web" },
    { label: "Industry", value: "Food Delivery / QSR" },
    { label: "Scope", value: "Ordering Flow, Personalization, UX Systems, Checkout Optimization" },
    { label: "Skills", value: "Figma, Prototyping, Design Systems, User Flows" },
  ],
  sectionHeading:
    "Designing high-speed ordering experiences that reduce friction and increase conversion.",
  highlightMetrics: [
    "2.5M+ Monthly Orders",
    "50+ Screens Designed",
    "30% Faster Checkout Completion",
    "22% Reduced Cart Drop-offs",
    "15% Increase in Repeat Orders",
    "100% Mobile-first Optimization",
  ],
  overview:
    "McDelivery required a faster and more intuitive ordering experience that allowed users to quickly customize meals, place orders, and track deliveries. The challenge was reducing friction in the ordering journey while maintaining flexibility for customization and upselling. My focus was to streamline ordering, improve clarity, and create a system that encourages repeat usage.",
  problemStatement:
    "Food delivery platforms often face critical UX challenges: high drop-offs during checkout, complex customization flows, slow decision-making due to cluttered menus, and weak personalization and upsell experiences. The goal was to simplify ordering while increasing conversion and repeat engagement.",
  goals: [
    "Reduce checkout time",
    "Improve menu clarity and navigation",
    "Increase add-to-cart and upsell interactions",
    "Improve repeat order behavior",
    "Create a scalable ordering system",
  ],
  roleItems: [
    "User flow mapping for ordering journey",
    "Menu structure and information architecture",
    "Wireframing and interaction design",
    "High-fidelity UI design",
    "Personalization and recommendation patterns",
    "Design system components",
    "Developer handoff and iteration",
  ],
  process: [
    {
      title: "User Flow Optimization",
      description:
        "Mapped the full ordering journey to identify drop-off points and reduce unnecessary steps.",
    },
    {
      title: "Menu & Information Architecture",
      description: "Simplified category navigation and improved visual hierarchy of items.",
    },
    {
      title: "Customization Experience",
      description: "Designed intuitive add-ons and modifiers with clear pricing feedback.",
    },
    {
      title: "Checkout Simplification",
      description: "Reduced steps, improved clarity, and optimized CTA placement for faster completion.",
    },
  ],
  improvements: [
    {
      title: "Faster Ordering Flow",
      description: "Reduced steps required to complete an order.",
    },
    {
      title: "Improved Personalization",
      description: "Introduced recommendations and frequently ordered items.",
    },
    {
      title: "Better Customization UX",
      description: "Simplified add-ons and meal customization.",
    },
    {
      title: "Clear Pricing & Cart Feedback",
      description: "Improved visibility of total cost and selections.",
    },
  ],
  outcome:
    "The redesigned experience focused on speed, clarity, and repeat behavior, improving overall ordering efficiency.",
  expectedImpact: [
    "Reduced checkout drop-offs",
    "Faster order completion",
    "Increased average order value through upsells",
    "Improved repeat usage",
  ],
  galleryCaptions: [
    "Clean and intuitive menu browsing experience",
    "Simplified customization for faster decisions",
    "Smart recommendations to increase order value",
    "Clear and structured checkout flow",
    "Real-time order tracking interface",
    "Designed for quick, repeat ordering behavior",
  ],
  whyThisMatters:
    "This project demonstrates my ability to design high-frequency consumer products where speed, clarity, and conversion directly impact business performance. It highlights my understanding of user behavior in fast decision-making environments.",
};

const cardinalHealthCaseStudy = {
  hideVisualsLink: true,
  projectTitle: "Order Express — A home for zero-error medicine ordering",
  projectTagline:
    "A design case study of simplifying procurement for 100,000+ healthcare professionals.",
  heroSubtitle:
    "Redesigning a large-scale healthcare procurement backbone built for pharmacies and hospital procurement teams.",
  disclaimer:
    "Before we dive in, I want to note that, in compliance with my confidentiality agreement, I've omitted proprietary business data and internal materials from this case study. The insights shared here are my own and don't necessarily represent the views of Cardinal Health.",
  quickInfo: [
    { label: "Role", value: "Lead / Senior Product Designer" },
    { label: "Timeline", value: "6 Months" },
    { label: "Platform", value: "Web / Enterprise Desktop Application" },
    {
      label: "Scope",
      value: "Workflow Analysis, Information Architecture, UI Systems, AI Prototyping",
    },
    {
      label: "Skills",
      value: "Figma, React Prototyping, Design Systems, Keyboard Accessibility",
    },
  ],
  sectionHeading:
    "Eliminating ambiguity and streamlining procurement for 100,000+ healthcare products.",
  highlightMetrics: [
    "100K+ Healthcare Products",
    { value: "+28%", label: "Order Completion", secondLine: "Rate" },
    { value: "-25%", label: "High-Risk", secondLine: "Errors" },
    { value: "-35%", label: "Design-to-Dev", secondLine: "Handoff" },
    "40+ Screens Redesigned",
    { value: "WCAG 2.1 AA", label: "Accessibility", secondLine: "Compliance", primaryValue: true },
  ],
  overview:
    "Order Express is the ordering and inventory backbone Cardinal Health built for pharmacies and hospital procurement teams - the system that decides whether a hospital ward has the medication it needs, when it needs it. It handles everything from routine restocks to time-critical ICU orders, across a catalog of 100,000+ healthcare products. The platform had grown for over a decade, and every new integration got bolted onto the same interface. By the time I joined it was still doing its job, but at a cost: pharmacy directors and clinical buyers were spending more time fighting the tool than managing their supply chain.",
  problemStatement:
    "Cardinal Health's own data pointed to where the friction actually lived. 78% of order delays traced back to confusing error states during bulk CSV uploads, and 42% of support tickets were people trying to locate a split shipment invoice. Both point to the same root problem: the system told users something was wrong after they had already done the work. Every redesign decision after that tried to move the feedback earlier - ideally before the user hit a wall at all.",
  goals: [
    "Eliminate ambiguity in high-volume ordering with real-time inventory truth",
    "Catch errors before submission, not after",
    "Make complexity legible across 100,000+ SKUs, multiple wards, and approval chains",
    "Move system feedback earlier in every critical flow",
    "Ship WCAG 2.1 AA with keyboard-first navigation as a speed feature",
  ],
  roleItems: [
    "Workflow analysis with pharmacy directors and clinical buyers",
    "Information architecture for ordering, inventory, and reporting",
    "Wireframing across 40+ screens",
    "High-fidelity UI design and interaction states",
    "Design system, status tokens, and documentation",
    "AI-assisted prototyping and developer handoff",
    "Close work with product, engineering, support, and compliance",
  ],
  contextCards: [
    {
      title: "High-Stakes Clinical Environment",
      description:
        "Unlike a typical e-commerce checkout, a mistake here isn't a returned package. It's a wrong dosage on a hospital floor, a stockout during a patient emergency, or a compliance flag on a controlled substance.",
    },
    {
      title: "Ten Years of Features, One Screen",
      description:
        "Warehouse inventory, drug registries, split-shipment logistics, and multi-level approvals were each bolted onto the same interface over a decade.",
    },
    {
      title: "100,000+ Healthcare Products",
      description:
        "Routine restocks and time-critical ICU orders run through the same catalog, for pharmacy directors, clinical buyers, and hospital procurement teams.",
    },
  ],
  researchIntro:
    "I talked to the people who order under pressure - pharmacy directors, clinical buyers, and health system supply chain managers. Twenty hours of transcripts were synthesised into a friction map that told us exactly where the platform was losing people.",
  researchStats: [
    { value: "78%", label: "Order delays from unclear errors" },
    { value: "42%", label: "Tickets on split invoices" },
    { value: "20+", label: "Hours of transcripts" },
    { value: "40+", label: "Screens audited" },
  ],
  researchQuotes: [
    {
      quote: "Ordering critical medication shouldn't feel like filling out a 1998 tax form.",
      name: "Pharmacy Director",
      role: "Regional Acute Care Network",
      tag: "Pain: legacy workflow",
      tagClass: "tag-pain",
    },
    {
      quote: "If an item is out of stock, tell me before I spend 20 minutes building an order.",
      name: "Clinical Buyer",
      role: "Health System Supply Chain",
      tag: "Need: live inventory",
      tagClass: "tag-need",
    },
  ],
  keyFindings: [
    {
      label: "Core root problem",
      text: "The system told users something was wrong after they'd already done the work. Every redesign decision after this tried to move that feedback earlier - ideally, before the user even hit a wall.",
      variant: "insight-gap",
    },
    {
      label: "Two concrete brief goals",
      text: "Eliminate ambiguity in high-volume ordering, and make complexity legible. 100,000+ SKUs, multiple wards, multiple approval chains - none of that should require a tutorial.",
      variant: "insight-opportunity",
    },
  ],
  pillars: [
    {
      badge: "Pillar 01",
      title: "Real-time inventory & smart search",
      description:
        "Search now understands intent, not just exact matches - NDC codes, drug names, fuzzy spelling. When something's backordered, the system immediately surfaces a generic equivalent instead of a dead end.",
      points: [
        "Fuzzy search that understands NDC codes and drug names",
        "Live warehouse availability on every result",
        "Generic equivalents surfaced the moment an item is backordered",
      ],
    },
    {
      badge: "Pillar 02",
      title: "A checkout that catches mistakes before you do",
      description:
        "Bulk ordering used to be a rigid five-step flow where an error on step two meant starting over. I redesigned it into a single-page drawer with inline, line-item validation - so a pharmacist ordering for three different hospital wards can split, correct, and confirm without ever leaving the page.",
      points: [
        "Inline, line-item validation with one-click correction",
        "Split one cart across ICU, ER, and Surgery on a single screen",
        "Average order completion dropped to under 8 minutes",
      ],
    },
    {
      badge: "Pillar 03",
      title: "A design system built for density, not decoration",
      description:
        "This isn't a consumer app - it's dense data tables, status tokens, and multi-role permissions used all day, every day. I built a WCAG 2.1 AA-compliant component library so that “Approved,” “Backordered,” and “Split Ship” mean the same thing everywhere in the product, for every role.",
      points: [
        "Status and density tokens shared with the frontend codebase",
        "One vocabulary for every state, across every role",
        "Full keyboard navigation and contrast compliance",
      ],
    },
  ],
  beforeAfter: {
    label: "Bulk checkout - before vs after",
    before: {
      tag: "Before - legacy system",
      title: "Five-step fragmented modal with hidden errors",
      points: [
        "Five separate modals - an error on step two meant starting over",
        "CSV upload errors wiped the whole cart with no line-item highlighting",
        "No multi-ward routing - four departments meant four separate orders",
        "Average completion: 35 to 45 minutes per order",
      ],
    },
    after: {
      tag: "After - redesigned system",
      title: "Single-page progressive drawer with real-time error callouts",
      points: [
        "Inline validation with one-click auto-correction at line-item level",
        "Multi-location ward splitting from a single master cart",
        "Proactive split-shipment calculation with clear delivery ETAs",
        "Average completion: under 8 minutes",
      ],
    },
  },
  aiWorkflow: {
    heading: "Designing at enterprise scale, faster",
    intro:
      "Forty-plus screens across a system this complex used to mean weeks of manual spec work. I brought AI-native tools into the process itself.",
    items: [
      {
        title: "Accelerated ideation",
        description:
          "Synthesised 20+ hours of user interview transcripts into workflow friction maps instead of doing it by hand.",
      },
      {
        title: "Live interactive prototypes",
        description:
          "Built working prototypes in code (not just static mocks) so pharmacists could test real filtering and table behavior, not a simulation of it.",
      },
      {
        title: "Automated token handoff",
        description:
          "Generated design tokens directly in developer-ready format, cutting handoff friction by roughly a third.",
      },
    ],
    note: "The tools changed how fast I could get from insight to a testable prototype. They didn't change the judgment calls - which workflow to prioritize, what “done” looks like for a pharmacist mid-shift - that part stayed mine.",
  },
  learnings: [
    {
      number: "#1",
      title: "In enterprise, density isn't the enemy. Ambiguity is.",
      description:
        "I went in assuming we'd need to simplify by removing information. What users actually wanted was more information, organized with a clear hierarchy - scannable tables beat minimalist cards for this audience.",
    },
    {
      number: "#2",
      title: "Every “improvement” is a risk when money and medicine are involved.",
      description:
        "Small changes - a different error message, a reordered field - could ripple into real clinical workflows. Working closely with support and compliance teams early kept us from shipping something technically better but operationally dangerous.",
    },
    {
      number: "#3",
      title: "Keyboard access isn't a checkbox here, it's a workflow requirement.",
      description:
        "Pharmacy staff building large orders rely on keyboard navigation to move fast. Accessibility work doubled as a speed improvement.",
    },
  ],
  process: [
    {
      title: "Workflow Analysis",
      description:
        "Mapped end-to-end journeys across ordering, inventory tracking, and billing with procurement teams to locate every friction point.",
    },
    {
      title: "Research & Synthesis",
      description:
        "Synthesised 20+ hours of interview transcripts into a prioritised friction map, and traced each pain point back to a root cause.",
    },
    {
      title: "Architecture & Wireframing",
      description:
        "Restructured the information architecture and wireframed ordering, inventory, and dashboard flows across 40+ screens.",
    },
    {
      title: "System Design & Validation",
      description:
        "Built the component library and validated complex table and checkout flows with live coded prototypes before handoff.",
    },
  ],
  improvements: [
    {
      title: "Search That Understands Intent",
      description:
        "NDC codes, drug names, and fuzzy spelling all resolve, with live availability on every result.",
    },
    {
      title: "Checkout That Catches Mistakes Early",
      description:
        "A single-page drawer with line-item validation replaced the rigid five-step modal flow.",
    },
    {
      title: "One Vocabulary Across Every Role",
      description:
        "Status tokens mean the same thing in every module, for every permission level.",
    },
    {
      title: "Keyboard-First Speed",
      description:
        "Full keyboard navigation turned an accessibility requirement into a throughput gain for pharmacy staff.",
    },
  ],
  outcome:
    "The redesign moved the numbers that matter in a procurement system: more completed orders, fewer high-risk mistakes, and a faster path from design to production. It shipped fully WCAG 2.1 AA compliant with complete keyboard navigation support.",
  expectedImpact: [
    "+28% order completion rate boost across regional hospital networks",
    "-25% reduction in high-risk ordering errors: wrong dosage, duplicate orders, invalid NDCs",
    "-35% faster design-to-development handoff",
    "Average order completion down from 35-45 minutes to under 8 minutes",
    "Fully WCAG 2.1 AA compliant with complete keyboard navigation support",
  ],
  visualStrategyTitle: "System Thinking",
  galleryCaptions: [
    "Ordering flow diagrams showing product search, cart, approval, and checkout decisions",
    "Inventory flow diagrams for stock tracking, auditing, and reorder behavior",
    "Dashboard structure wireframes for expenses, invoices, orders, and inventory health",
    "Component system breakdown for tables, filters, status states, forms, and validation",
    "Before vs After workflow comparison focused on reducing steps and cognitive load",
  ],
  whyThisMatters:
    "“In enterprise B2B, density is not the enemy - ambiguity is. High-volume workflows thrive on clear visual hierarchy, scannable data tables, and keyboard accessibility.” Designing for critical healthcare operations reinforced that every bit of cognitive friction removed from a procurement screen translates into safer, faster hospital operations.",
};

const brightlineCaseStudy = {
  visualsPdf: brightlinePdf,
  projectTitle: "Brightline Future Mobility Experience Design",
  projectTagline:
    "Designing a next-generation touchless travel ecosystem across booking, station interactions, onboard experiences, and post-travel journeys.",
  heroSubtitle:
    "Designed a connected mobility ecosystem transforming fragmented travel touchpoints into seamless digital experiences.",
  quickInfo: [
    { label: "Role", value: "Senior UX/UI Designer" },
    { label: "Platform", value: "Mobile App, Responsive Web, Smart Kiosks, Connected Interfaces" },
    { label: "Industry", value: "Transportation / Mobility / Travel Tech" },
    { label: "Scope", value: "Service Design, Journey Mapping, Product Strategy, Experience Design" },
    { label: "Skills", value: "Figma, UX Research, Journey Mapping, Information Architecture, Prototyping" },
  ],
  sectionHeading:
    "Designing connected travel ecosystems that transform journeys into seamless digital experiences.",
  highlightMetrics: [
    { value: "4", label: "Journey Stages", secondLine: "Plan • Station • Travel • Post Travel" },
    { value: "20+", label: "Features", secondLine: "Connected Experience Modules" },
    { value: "5+", label: "Touchpoints", secondLine: "Mobile, Kiosk, NFC, Voice, In-station" },
    { value: "End-to-End", label: "Journey Ecosystem", secondLine: "Design", primaryValue: true },
    { value: "Touchless UX", label: "Future-ready", secondLine: "Mobility Experience", primaryValue: true },
    { value: "Multi-Channel", label: "Connected Service", secondLine: "Architecture", primaryValue: true },
  ],
  overview:
    "Brightline’s future mobility concept explored how modern transportation can evolve into a fully connected, touchless, and intelligent digital ecosystem. Rather than designing a standalone booking app, the challenge was to rethink the complete traveler experience across every stage of the journey -from planning and ticketing to in-station interactions, onboard services, and destination support. The focus was to create a seamless, digitally orchestrated experience that reduces friction, improves convenience, and enhances engagement.",
  problemStatement:
    "Traditional travel journeys are fragmented. Users often experience friction across multiple disconnected systems: booking and schedule planning, parking and first-mile transit, security and check-in, navigation inside stations, onboard services, and destination assistance. The challenge was to unify these touchpoints into one seamless experience.",
  goals: [
    "Create a touchless travel ecosystem",
    "Reduce friction across journey stages",
    "Integrate physical and digital experiences",
    "Improve traveler convenience and engagement",
    "Build a scalable future-ready mobility concept",
  ],
  roleItems: [
    "Traveler journey mapping",
    "Experience strategy and concept ideation",
    "UX flows across multiple touchpoints",
    "Service design for connected systems",
    "Interaction design for mobile and smart interfaces",
    "Feature architecture and ecosystem thinking",
    "Cross-functional collaboration",
  ],
  process: [
    {
      title: "Traveler Research",
      description:
        "Mapped traveler types, behaviors, and journey expectations across business, leisure, and repeat travelers.",
    },
    {
      title: "Journey Mapping",
      description:
        "Defined end-to-end touchpoints across Plan & Book, In Station, During Travel, and Post Travel stages.",
    },
    {
      title: "Ecosystem Architecture",
      description:
        "Designed an integrated experience connecting booking, smart parking, connected transit, NFC ticketing, wayfinding, contactless payments, voice interactions, and loyalty systems.",
    },
    {
      title: "Experience Prototyping",
      description:
        "Created concept flows demonstrating seamless movement between physical infrastructure and digital services.",
    },
  ],
  improvements: [
    {
      title: "Unified Travel Experience",
      description:
        "Connected previously fragmented touchpoints into a continuous ecosystem.",
    },
    {
      title: "Touchless Interactions",
      description:
        "Introduced contactless flows including NFC identification, contactless payments, smart check-in, and automated support touchpoints.",
    },
    {
      title: "Intelligent Mobility Assistance",
      description:
        "Designed features like smart parking, transit integrations, destination tracking, and personalized notifications.",
    },
    {
      title: "Experience Personalization",
      description:
        "Added contextual interactions through loyalty rewards, personalized greetings, recommendations, and service prompts.",
    },
  ],
  outcome:
    "This concept reimagined transportation as a connected digital service rather than a transactional booking product.",
  expectedImpact: [
    "Reduced journey friction",
    "Better operational efficiency",
    "Higher traveler convenience",
    "Increased digital engagement",
    "Scalable mobility ecosystem thinking",
  ],
  galleryCaptions: [
    "End-to-end journey stages with interaction points mapped across Plan, Station, Travel, and Post",
    "Quick booking flow with integrated food ordering and seat selection",
    "Connected transit system linking ride-share, parking, and metro rail",
    "Smart parking with AR navigation and automated space detection",
    "In-station NFC ticketing, biometric check-in, and telepresence support",
    "During-travel services including pet monitoring, luggage tracking, and amenities",
  ],
  whyThisMatters:
    "This project demonstrates my ability to think beyond screens and design complete service ecosystems where digital products interact with physical environments. It reflects strategic UX thinking, service design maturity, and systems-level problem solving.",
};

const homeActions = [
  { label: "Resume", href: "/resume" },
  { label: "Works", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

function ProcessStepIcon({ index }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 16L20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M4 6.5H11.5V10.5H4zM12.5 6.5H20V10.5H12.5zM4 13.5H9V17.5H4zM10 13.5H15V17.5H10zM16 13.5H20V17.5H16z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.6"
        />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M5 17l11-11 3 3-11 11H5z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
        <path d="M14.5 7.5l2 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="4" y="5" width="16" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 3.5v4M16 3.5v4M8 12h8M8 15h5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  );
}

function DownloadResumeIcon() {
  return (
    <svg
      className="hero-button-icon"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 4v11M8 11l4 4 4-4M5 19h14"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function getRouteState() {
  if (typeof window === "undefined") {
    return { pathname: "/", projectSlug: null };
  }

  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const projectMatch = path.match(/^\/projects\/([^/]+)$/);
  if (projectMatch) {
    return { pathname: "/project-details", projectSlug: projectMatch[1] };
  }
  if (path === "/resume" || path === "/projects" || path === "/contact") {
    return { pathname: path, projectSlug: null };
  }
  return { pathname: "/", projectSlug: null };
}

function scrollToContact() {
  if (typeof document === "undefined") {
    return;
  }

  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

function getNavigationEvent() {
  if (typeof PopStateEvent === "function") {
    return new PopStateEvent("popstate");
  }

  return new Event("popstate");
}

function navigateTo(href, onDone) {
  if (typeof window === "undefined") {
    onDone?.();
    return;
  }

  if (href === "/#contact") {
    if (window.location.pathname !== "/" || window.location.hash) {
      window.history.pushState({}, "", "/");
    }
    window.dispatchEvent(getNavigationEvent());
    requestAnimationFrame(scrollToContact);
    onDone?.();
    return;
  }

  const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (currentPath !== href) {
    window.history.pushState({}, "", href);
  }
  window.dispatchEvent(getNavigationEvent());
  window.scrollTo({ top: 0, behavior: "auto" });
  onDone?.();
}

function getInteractiveTarget(target) {
  if (typeof Element === "undefined" || !(target instanceof Element)) {
    return null;
  }

  return target.closest(
    "button, a, .circle-link, .project-preview-wrap, .skill-card, .timeline-item, .menu-button",
  );
}

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !window.matchMedia ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return undefined;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) {
      return undefined;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId = 0;

    const moveCursor = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const updateRing = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      rafId = window.requestAnimationFrame(updateRing);
    };

    const setHoverState = (active) => {
      document.body.classList.toggle("cursor-hover", active);
    };

    const setPressedState = (active) => {
      document.body.classList.toggle("cursor-pressed", active);
    };

    const setViewState = (target) => {
      const overCard = Boolean(target?.closest?.(".featured-work-card-btn, .project-row"));
      document.body.classList.toggle("cursor-view", overCard);
    };

    const handlePointerOver = (event) => {
      setHoverState(Boolean(getInteractiveTarget(event.target)));
      setViewState(event.target);
    };

    const handlePointerOut = (event) => {
      if (!event.relatedTarget) {
        setHoverState(false);
        setViewState(null);
        return;
      }

      setHoverState(Boolean(getInteractiveTarget(event.relatedTarget)));
      setViewState(event.relatedTarget);
    };

    const handleMouseLeave = () => {
      document.body.classList.add("cursor-hidden");
    };

    const handleMouseEnter = () => {
      document.body.classList.remove("cursor-hidden");
    };

    const handleMouseDown = () => setPressedState(true);
    const handleMouseUp = () => setPressedState(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handlePointerOver);
    window.addEventListener("mouseout", handlePointerOut);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    rafId = window.requestAnimationFrame(updateRing);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handlePointerOver);
      window.removeEventListener("mouseout", handlePointerOut);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.body.classList.remove("cursor-hover", "cursor-pressed", "cursor-hidden", "cursor-view");
    };
  }, []);

  return (
    <div className="cursor-layer" aria-hidden="true">
      <div ref={ringRef} className="cursor-ring">
        <span className="cursor-view-label">View</span>
      </div>
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}

function Reveal({ as: Tag = "div", className = "", delay = 0, children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      setIsVisible(true);
      return undefined;
    }

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.01, rootMargin: "200px 0px 200px 0px" },
    );

    observer.observe(node);

    // Immediate fallback trigger so content is never invisible
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay + 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [delay]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

function GeometricWolfLogo() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-wolf-logo">
      <path d="M16 2L8 10L11 20L16 28L21 20L24 10L16 2Z" fill="currentColor" />
      <path d="M8 10L2 14L6 22L11 20L8 10Z" fill="currentColor" />
      <path d="M24 10L30 14L26 22L21 20L24 10Z" fill="currentColor" />
      <path d="M12 14L15 17L11 18L12 14Z" fill="var(--bg, #FAF9F6)" />
      <path d="M20 14L17 17L21 18L20 14Z" fill="var(--bg, #FAF9F6)" />
    </svg>
  );
}

function SiteHeader({ menuOpen, setMenuOpen }) {
  const menuButtonRef = useRef(null);
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const previousActiveElement = document.activeElement;

    window.requestAnimationFrame(() => {
      navRef.current?.querySelector(".menu-link")?.focus();
    });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableItems = [
        menuButtonRef.current,
        ...(navRef.current?.querySelectorAll(".menu-link") ?? []),
      ].filter(Boolean);

      if (!focusableItems.length) {
        return;
      }

      const firstItem = focusableItems[0];
      const lastItem = focusableItems[focusableItems.length - 1];

      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (previousActiveElement instanceof HTMLElement) {
        previousActiveElement.focus();
      } else {
        menuButtonRef.current?.focus();
      }
    };
  }, [menuOpen, setMenuOpen]);

  return (
    <>
      <header className={`site-header site-header-transparent site-header-animate ${scrolled ? "is-scrolled" : ""}`}>
        <button type="button" className="brand brand-button" onClick={() => navigateTo("/")}>
          <span className="brand-name-only">Abhinandan Singh</span>
        </button>

        <div className="header-right-nav">
          <nav className="desktop-nav-pill-box" aria-label="Primary header navigation">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                className="desktop-pill-nav-link"
                onClick={() => navigateTo(item.href)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <a
            className="dark-pill-cta-btn"
            href={resumePdf}
            download="Abhinandan_Singh_UX_Resume.pdf"
          >
            Resume
            <DownloadResumeIcon />
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            className={`menu-button ${menuOpen ? "menu-button-open" : ""}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <button
        type="button"
        className={`menu-backdrop ${menuOpen ? "menu-backdrop-open" : ""}`}
        aria-label="Close navigation"
        aria-hidden={!menuOpen}
        tabIndex={-1}
        onClick={() => setMenuOpen(false)}
      />

      <nav
        ref={navRef}
        id="site-navigation"
        className={`menu-panel ${menuOpen ? "menu-panel-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className="menu-link"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => navigateTo(item.href, () => setMenuOpen(false))}
          >
            {item.label}
          </button>
        ))}
        <a
          className="menu-link menu-link-cta"
          href={resumePdf}
          download="Abhinandan_Singh_UX_Resume.pdf"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
        >
          Resume
          <DownloadResumeIcon />
        </a>
      </nav>
    </>
  );
}

const experienceData = [
  {
    role: "Senior Product Designer",
    company: "Cardinal Health",
    period: "Dec 2024 – Present",
    description:
      "Leading end-to-end UX for enterprise procurement, inventory systems, and healthcare workflows across high-volume hospital and pharmacy platforms.",
    metrics: "+28% Order Completion | -35% Dev Handoff Time",
  },
  {
    role: "Senior UX Designer",
    company: "Tech & Media Ecosystems / Discovery+",
    period: "Sep 2022 – Dec 2024",
    description:
      "Architected multi-device OTT streaming ecosystems across TV, mobile, and web—streamlining navigation rails and personalized content discovery.",
    metrics: "+40% Faster Screen Design | Improved Discovery",
  },
  {
    role: "UX/UI Designer",
    company: "Enterprise Solutions / Doc-Mode",
    period: "Oct 2020 – Sep 2022",
    description:
      "Designed data-dense enterprise dashboards and workflow automation systems for complex corporate operations.",
    metrics: "Data-Dense Dashboards | Process Automation",
  },
];

function AboutExperienceSection() {
  return (
    <section id="about" className="about-experience-section">
      <Reveal className="section-header-center" delay={40}>
        <span className="section-kicker">ABOUT &amp; EXPERIENCE</span>
        <h2 className="section-title">Solving Complexity Through Systems &amp; Strategy</h2>
        <p className="section-intro-lead">
          I am a Senior Product Designer who thrives in complex, high-stakes domains. Over the last 6+ years, I’ve led UX initiatives for enterprise leaders like Cardinal Health, global entertainment platforms like Discovery+, and high-volume QSR brands like McDonald&apos;s. My approach combines rigorous design system thinking with modern AI tools to ship business-critical products faster without compromising accessibility or user clarity.
        </p>
      </Reveal>

      <div className="experience-timeline">
        <div className="timeline-connector-line" aria-hidden="true" />
        {experienceData.map((item, idx) => (
          <Reveal key={`${item.company}-${item.role}`} className="experience-card" delay={100 + idx * 90}>
            <div className="experience-card-top">
              <div className="experience-title-wrap">
                <h3 className="experience-role">{item.role}</h3>
                <span className="experience-dot-sep" aria-hidden="true">•</span>
                <span className="experience-company">{item.company}</span>
              </div>
              <span className="experience-period-badge">{item.period}</span>
            </div>

            <p className="experience-desc">{item.description}</p>

            <div className="experience-metric-badge">
              <span className="badge-pulse" aria-hidden="true" />
              <span>{item.metrics}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("abhinandansingh77@outlook.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="contact-hire-section">
      <Reveal className="contact-card-wrap" delay={40}>
        <div className="contact-card-inner">
          <div className="status-pill">
            <span className="status-dot" aria-hidden="true" />
            <span>Available for Senior Product Design Roles &amp; Strategic Consulting</span>
          </div>

          <h2 className="contact-headline">Let’s build something impactful together.</h2>

          <p className="contact-body">
            Whether you&apos;re scaling an enterprise product, building a next-gen AI platform, or looking for strategic product design leadership, I’d love to connect.
          </p>

          <div className="contact-actions-bar">
            <a
              href="mailto:abhinandansingh77@outlook.com"
              className="btn-primary contact-btn-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>abhinandansingh77@outlook.com</span>
            </a>

            <button
              type="button"
              className="btn-secondary contact-btn-secondary"
              onClick={handleCopyEmail}
            >
              {copied ? "✓ Copied Email!" : "Copy Email"}
            </button>

            <a
              href="tel:+919097168852"
              className="btn-secondary contact-btn-secondary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 9097168852</span>
            </a>

            <a
              href={resumePdf}
              download="Abhinandan_Singh_Resume.pdf"
              className="btn-secondary contact-btn-secondary"
            >
              <span>Resume</span>
              <DownloadResumeIcon />
            </a>
          </div>

          <div className="contact-socials-row">
            <span className="socials-label">Connect on:</span>
            <a
              href="https://www.linkedin.com/in/abhinandansingh77/"
              target="_blank"
              rel="noreferrer"
              className="social-pill-link"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://www.behance.net/abhinandan77"
              target="_blank"
              rel="noreferrer"
              className="social-pill-link"
            >
              Behance ↗
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

// Portrait crops, sized for the 3 / 5 cards on the home page. The Work page
// uses the horizontal `preview` images on each project instead.
const featuredWorkImages = {
  "cardinal-health-procurement-platform": cardinalHealthVerticalImg,
  "discovery-plus": discoveryPlusVerticalImg,
  "brightline-future-travel": brightlineVerticalImg,
  "al-maha-island-lusail": almahaVerticalImg,
};

// Per-image crop nudges where the subject isn't centred in the source frame.
const featuredWorkImagePositions = {
  // The TV sits right of the frame's centre; shift the crop as far right as
  // the overflow allows to bring it toward the card's centre.
  "discovery-plus": "100% center",
};

// White marks, shown centred on the scrim when a card is hovered.
const featuredWorkHoverLogos = {
  "cardinal-health-procurement-platform": cardinalHealthLogoWhite,
  "discovery-plus": discoveryLogoWhite,
  "brightline-future-travel": brightlineLogoWhite,
  "al-maha-island-lusail": almahaLogoWhite,
};

const featuredWorkTabs = [
  {
    id: "product-design",
    label: "Product Design",
    items: projectItems
      .filter((item) => featuredWorkImages[item.slug])
      .map((item) => ({
        ...item,
        image: featuredWorkImages[item.slug],
        hoverLogo: featuredWorkHoverLogos[item.slug],
        imagePosition: featuredWorkImagePositions[item.slug],
      })),
  },
  {
    id: "brand-design",
    label: "Brand Design",
    items: [],
  },
];

// The Works page reuses the Featured Work tab labels, but lists every project
// in a category rather than the featured subset.
const worksTabProjects = {
  "product-design": projectItems,
  "brand-design": [],
};

const worksTabs = featuredWorkTabs.map((tab) => ({
  id: tab.id,
  label: tab.label,
  items: worksTabProjects[tab.id] ?? [],
}));

function FeaturedWorkSection() {
  const [activeTab, setActiveTab] = useState(featuredWorkTabs[0].id);
  const currentTab = featuredWorkTabs.find((tab) => tab.id === activeTab) ?? featuredWorkTabs[0];

  return (
    <section id="projects" className="featured-work-section">
      <Reveal delay={40}>
        <h2 className="featured-work-title">Featured Work</h2>
      </Reveal>

      <Reveal className="featured-work-tabs-wrap" delay={100}>
        <div className="featured-work-tabs" role="tablist" aria-label="Featured work categories">
          {featuredWorkTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`featured-tab-${tab.id}`}
              aria-selected={tab.id === activeTab}
              aria-controls={`featured-panel-${tab.id}`}
              className={`featured-work-tab${tab.id === activeTab ? " is-active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div
        className="featured-work-grid"
        role="tabpanel"
        id={`featured-panel-${currentTab.id}`}
        aria-labelledby={`featured-tab-${currentTab.id}`}
      >
        {currentTab.items.map((item, index) => (
          <Reveal as="article" key={item.slug} className="featured-work-card" delay={160 + index * 80}>
            <button
              type="button"
              className="featured-work-card-btn"
              onClick={() => navigateTo(`/projects/${item.slug}`)}
              aria-label={`View ${item.title} case study`}
            >
              <img
                className="featured-work-card-img"
                src={item.image}
                alt={`${item.titleAlt} case study preview`}
                loading="lazy"
                style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
              />
              <span className="featured-work-card-overlay">
                <img className="featured-work-card-logo" src={item.hoverLogo} alt="" />
              </span>
            </button>
          </Reveal>
        ))}

        {currentTab.items.length === 0 && (
          <Reveal className="featured-work-empty" delay={160}>
            <p>Brand design case studies are coming soon.</p>
          </Reveal>
        )}
      </div>

      <Reveal className="featured-work-footer" delay={480}>
        <button type="button" className="btn-secondary" onClick={() => navigateTo("/projects")}>
          View All Work
        </button>
      </Reveal>
    </section>
  );
}

function AIWorkflowSection() {
  return (
    <section id="ai-workflow" className="ai-workflow-section">
      <Reveal className="section-header-center" delay={40}>
        <h2 className="ai-workflow-title">AI &amp; Workflow</h2>
      </Reveal>

      <div className="aiw-grid">
        {/* Column 1: Phone mockup + lead text */}
        <Reveal className="aiw-card aiw-card-intro" delay={100}>
          <div className="aiw-phone-frame">
            <img
              src={aiWorkflowImg1}
              alt="Project Hub app mockup on a phone"
              className="aiw-phone-img"
            />
          </div>
          <p className="aiw-intro-text">
            <strong>AI speeds up my workflow</strong> — but human intuition
            drives the final product. I use modern AI tools to skip repetitive
            tasks, test ideas fast, and keep my focus on real user problems.
          </p>
        </Reveal>

        {/* Column 2: Keycaps + stats */}
        <div className="aiw-column">
          <Reveal className="aiw-card aiw-card-code" delay={160}>
            <div className="aiw-code-frame">
              <img
                src={aiWorkflowImg2}
                alt="Keycaps showing Figma, AI, and code symbols"
                className="aiw-code-img"
              />
            </div>
            <span className="aiw-code-caption">Figma to Working Code</span>
          </Reveal>

          <Reveal className="aiw-card aiw-card-stats" delay={220}>
            <div className="aiw-stat">
              <h3 className="aiw-stat-value">6+ Years</h3>
              <p className="aiw-stat-label">
                Designing scalable products across multiple domains
              </p>
            </div>
            <div className="aiw-stat">
              <h3 className="aiw-stat-value">35% Faster</h3>
              <p className="aiw-stat-label">
                Design-to-dev handoff using AI tools
              </p>
            </div>
          </Reveal>
        </div>

        {/* Column 3: Mindset + zen stones */}
        <div className="aiw-column">
          <Reveal className="aiw-card aiw-card-mindset" delay={280}>
            <div className="aiw-mindset-group">
              <h3 className="aiw-mindset-title">Mindset</h3>
              <p className="aiw-mindset-desc">
                Synthesizing user data in seconds, turning Figma tokens into real code,
                and validating interaction patterns before developer handoff.
              </p>
            </div>
            <div className="aiw-pills">
              <span className="aiw-pill">Research</span>
              <span className="aiw-pill">Prototype</span>
              <span className="aiw-pill">Ship</span>
            </div>
          </Reveal>

          <Reveal className="aiw-card aiw-card-photo" delay={340}>
            <img
              src={aiWorkflowImg3}
              alt="Balanced stack of zen stones"
              className="aiw-photo-img"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const impactMetrics = [
  { value: "+28%", label: "Order Completion" },
  { value: "+40%", label: "UI Production Speed" },
  { value: "1.5M+", label: "Platform Audience Reach" },
  { value: "2.1 AA", label: "WCAG Compliance" },
];

function ImpactMetricsSection() {
  return (
    <section className="impact-section">
      <div className="impact-inner">
        <div className="impact-grid">
          {impactMetrics.map((item, index) => (
            <Reveal key={item.label} className="impact-item" delay={80 + index * 80}>
              <span className="impact-value">{item.value}</span>
              <span className="impact-label">{item.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer-minimal">
      <div className="footer-content">
        <p className="footer-copyright">
          © 2026 Abhinandan Singh.
        </p>

        <div className="footer-right-actions">
          <button type="button" className="back-to-top-btn" onClick={scrollToTop}>
            <span>↑ Back to Top</span>
          </button>

          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/abhinandansingh77/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="https://www.behance.net/abhinandan77" target="_blank" rel="noreferrer" aria-label="Behance">
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// `width` optically balances the marks: these logos range from a 10:1 wordmark
// (Shoppers Stop) to a 0.8:1 badge (Bharat Petroleum), so a single height alone
// would render some of them hairline-thin and others oversized.
const clientLogos = [
  { name: "Cardinal Health", src: cardinalHealthProjectLogo, width: 140 },
  { name: "Discovery+", src: discoveryLogo, width: 170 },
  { name: "AL MAHA Island Lusail", src: almahaLogo, width: 160 },
  { name: "Brightline", src: brightlineLogo, width: 160 },
  { name: "McDonald's", src: mcdonaldsLogo, width: 180 },
  { name: "Shoppers Stop", src: shoppersStopLogo, width: 210 },
  { name: "Willow TV", src: willowLogo, width: 160 },
  { name: "Mankind Pharma", src: mankindLogo, width: 90 },
  { name: "Bharat Petroleum", src: bharatPetroleumLogo, width: 44 },
];

// Entries without a `src` fall back to a wordmark.
const toolLogos = [
  { name: "ChatGPT", src: toolChatgpt },
  { name: "Gemini", src: toolGemini },
  { name: "Claude", src: toolClaude },
  { name: "Cursor", src: toolCursor },
  { name: "Antigravity", src: toolAntigravity },
  { name: "Perplexity", src: toolPerplexity },
  { name: "Midjourney", src: toolMidjourney },
  { name: "Figma", src: toolFigma },
  { name: "Photoshop", src: toolPhotoshop },
  { name: "Illustrator", src: toolIllustrator },
  { name: "Canva", src: toolCanva },
  { name: "Miro", src: toolMiro },
  { name: "Webflow", src: toolWebflow },
  { name: "Framer", src: toolFramer },
  { name: "Zeplin", src: toolZeplin },
];

function LogoRail({ items, ariaLabel }) {
  // Two identical sets so the -50% scroll loops seamlessly.
  const track = [...items, ...items];

  return (
    <div className="client-logo-rail">
      <ul className="client-logo-track" aria-label={ariaLabel}>
        {track.map((logo, index) => {
          const isOriginal = index < items.length;
          return (
            <li
              className="client-logo-slot"
              key={`${logo.name}-${index}`}
              aria-hidden={isOriginal ? undefined : "true"}
            >
              {logo.src ? (
                <img
                  className="client-logo-img"
                  src={logo.src}
                  alt={isOriginal ? logo.name : ""}
                  style={logo.width ? { maxWidth: `${logo.width}px` } : undefined}
                />
              ) : (
                <span className="client-logo-wordmark">{logo.name}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ClientLogoRail() {
  return <LogoRail items={clientLogos} ariaLabel="Clients and brands" />;
}

function ToolsRailSection() {
  return (
    <section className="tools-rail-section">
      <Reveal className="tools-rail-wrap" delay={40}>
        <h5 className="tools-rail-title">Tools</h5>
        <LogoRail items={toolLogos} ariaLabel="Tools used daily" />
      </Reveal>
    </section>
  );
}

function HomePage() {
  return (
    <div className="page-view">
      <section className="hero-centered-section">
        <div className="hero-centered-container">
          {/* Main Title */}
          <Reveal className="hero-title-wrap" delay={40}>
            <h1 className="hero-centered-title">
              Abhinandan Singh, Senior<br />Product Designer
            </h1>
          </Reveal>

          {/* Subheadline */}
          <Reveal className="hero-sub-wrap" delay={120}>
            <p className="hero-centered-sub">
              6+ years designing scalable digital products across diverse industries.<br />
              Fast execution with AI workflows.
            </p>
          </Reveal>

          {/* Centered Visual Image */}
          <Reveal className="hero-portrait-centered-wrap" delay={200}>
            <img
              src={heroImg}
              alt="Abhinandan Singh - Senior Product Designer"
              className="hero-centered-portrait"
            />
          </Reveal>

        </div>

        {/* Client Logos Bar — sits outside .hero-centered-container so it can
            use the same 1160px grid width as the AI & Workflow section. */}
        <Reveal className="hero-client-logos-bar" delay={280}>
          <ClientLogoRail />
        </Reveal>
      </section>

      <AIWorkflowSection />

      <ImpactMetricsSection />

      <FeaturedWorkSection />

      <ToolsRailSection />

      <Footer />
    </div>
  );
}

function ResumePage() {
  return (
    <div className="page-view">
      <section className="resume-section">
        <Reveal className="section-kicker-header">
          <button
            type="button"
            className="work-back-button"
            onClick={() => navigateTo("/")}
            aria-label="Back to Home"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <span className="section-kicker">Resume</span>
        </Reveal>

        <Reveal className="about-resume-block">
          <div className="section-label">
            <h2>About Me</h2>
          </div>
          <div className="about-resume-copy">
            <p>
              I&apos;m a Senior Product Designer with 6+ years of experience designing
              scalable digital products across healthcare, OTT streaming, e-commerce,
              enterprise systems, and consumer platforms.
            </p>
            <p>
              My work spans complex B2B healthcare workflows like Cardinal Health&apos;s
              Order Express, global streaming experiences such as Discovery+, and
              high-conversion mobile experiences in food ordering and entertainment
              booking.
            </p>
            <p>
              I specialize in simplifying complexity through UX strategy, product thinking,
              interaction design, and scalable design systems.
            </p>
            <p>
              From user research and workflow mapping to high-fidelity execution and
              developer handoff, I focus on building products that are intuitive,
              accessible, and designed for measurable impact.
            </p>
            <p>
              Today, I also integrate AI into design workflows for research acceleration,
              ideation, content generation, and rapid problem solving.
            </p>
          </div>
        </Reveal>

        <div className="section-divider" />

        <Reveal className="what-i-do-block">
          <div className="section-label">
            <h2>What I Do</h2>
          </div>
          <div className="value-grid">
            {valuePillars.map((pillar, index) => (
              <Reveal as="article" key={pillar.title} className="value-card" delay={index * 70}>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <div className="section-divider section-divider-after-what-i-do" />

        <Reveal className="timeline-block">
          <div className="section-label">
            <h2>Work Experience</h2>
          </div>
          <div className="xp-list">
            {experienceItems.map((item, index) => (
              <Reveal
                as="article"
                key={`${item.company}-${item.range}`}
                className="xp-item"
                delay={index * 80}
              >
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
        </Reveal>

        <div className="section-divider" />

        <Reveal className="timeline-block">
          <div className="section-label">
            <h2>Education &amp; Learning</h2>
          </div>
          <div className="edu-grid">
            {educationItems.map((item, index) => (
              <Reveal
                as="article"
                key={`${item.school}-${item.range}`}
                className="edu-card"
                delay={index * 70}
              >
                <span className="edu-mark">
                  <img src={item.logo} alt="" />
                </span>
                <div className="edu-copy">
                  <h3>{item.school}</h3>
                  <p>{item.degree}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <div className="section-divider" />

        <Reveal className="timeline-block skills-block">
          <div className="section-label">
            <h2>Skills</h2>
          </div>
          <div className="skills-categories">
            {skillCategories.map((cat, index) => (
              <Reveal as="article" key={cat.category} className="skill-category" delay={index * 60}>
                <h3>{cat.category}</h3>
                <div className="skill-tags">
                  {cat.items.map((item) => (
                    <span key={item} className="skill-tag">{item}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <div className="section-divider" />

        <Reveal className="timeline-block tools-block">
          <div className="section-label">
            <h2>Tools</h2>
          </div>
          <div className="skills-categories">
            {toolCategories.map((cat, index) => (
              <Reveal as="article" key={cat.category} className="skill-category" delay={index * 60}>
                <h3>{cat.category}</h3>
                <div className="skill-tags">
                  {cat.items.map((item) => (
                    <span key={item} className="skill-tag">{item}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

function ProjectsPage() {
  const [activeTab, setActiveTab] = useState(worksTabs[0].id);
  const currentTab = worksTabs.find((tab) => tab.id === activeTab) ?? worksTabs[0];

  return (
    <div className="page-view">
      <section className="projects-section">
        <Reveal className="section-kicker-header">
          <button
            type="button"
            className="work-back-button"
            onClick={() => navigateTo("/")}
            aria-label="Back to Home"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <span className="section-kicker">Creative Works</span>
        </Reveal>

        <Reveal className="featured-work-tabs-wrap works-tabs-wrap" delay={100}>
          <div className="featured-work-tabs" role="tablist" aria-label="Work categories">
            {worksTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`works-tab-${tab.id}`}
                aria-selected={tab.id === activeTab}
                aria-controls={`works-panel-${tab.id}`}
                className={`featured-work-tab${tab.id === activeTab ? " is-active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          className="projects-list"
          role="tabpanel"
          id={`works-panel-${currentTab.id}`}
          aria-labelledby={`works-tab-${currentTab.id}`}
        >
          {currentTab.items.map((item, index) => (
            <Reveal as="article" key={item.index} className="project-row" delay={index * 90}>
              <div className="project-preview-wrap">
                <img
                  className="project-preview-image"
                  src={item.preview}
                  alt={`${item.titleAlt} preview`}
                  style={{
                    transform: item.previewScale ? `scale(${item.previewScale})` : undefined,
                    objectPosition: item.previewPosition,
                  }}
                />
              </div>

              <div className="project-meta-row">
                <img className="project-title-image" src={item.titleImage} alt={item.titleAlt} />

                {item.domainTags && (
                  <p className="project-domain-tags">{item.domainTags}</p>
                )}
              </div>

              <p className="project-row-summary">
                {item.projectTitle && (
                  <>
                    <strong className="project-row-summary-title">{item.projectTitle}</strong>
                    {" — "}
                  </>
                )}
                {item.description}
              </p>

              {/* Covers the whole card so the "View" cursor matches what is
                  actually clickable. */}
              <button
                type="button"
                className="project-row-link"
                onClick={() => navigateTo(`/projects/${item.slug}`)}
                aria-label={`View ${item.title} case study`}
              />
            </Reveal>
          ))}

          {currentTab.items.length === 0 && (
            <Reveal className="featured-work-empty" delay={160}>
              <p>Brand design case studies are coming soon.</p>
            </Reveal>
          )}
        </div>
      </section>

      <ToolsRailSection />

      <Footer />
    </div>
  );
}

function ContactPage() {
  return (
    <div className="page-view">
      <section className="contact-section">
        <Reveal as="p" className="section-kicker">
          Contact
        </Reveal>

        <Reveal className="contact-content">
          <span className="availability-pill" aria-label="Availability status">
            <span className="availability-dot" />
            Available for Full-time &amp; Contract Roles
          </span>
          <h2>Let&apos;s Work Together.</h2>

          <p className="contact-intro">
            I&apos;m currently open to full-time roles and select freelance projects. If you&apos;re
            building something that needs thoughtful UX, drop me a message, I&apos;d love to hear
            about it.
          </p>

          <div className="contact-get-in-touch">
            <h3 className="contact-touch-heading">
              <svg className="contact-touch-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M22 6l-10 7L2 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Get in Touch
            </h3>
            <a className="contact-detail" href="tel:+919097168852">
              +91 9097168852
            </a>
            <a className="contact-detail" href="mailto:abhinandansingh77@outlook.com">
              abhinandansingh77@outlook.com
            </a>
          </div>

          <a className="contact-link" href="mailto:abhinandansingh77@outlook.com">
            Get in Touch → abhinandansingh77@outlook.com
          </a>

          <a className="hero-button hero-button-secondary contact-resume-cta" href={resumePdf} download>
            Download Resume
            <DownloadResumeIcon />
          </a>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

const caseNavIcons = {
  start: (
    <>
      <path d="M12 6.6C10.6 5.3 8.7 4.7 6.2 4.7H3.6v12.2h2.6c2.5 0 4.4.6 5.8 1.9" />
      <path d="M12 6.6c1.4-1.3 3.3-1.9 5.8-1.9h2.6v12.2h-2.6c-2.5 0-4.4.6-5.8 1.9" />
      <path d="M12 6.6v12.2" />
    </>
  ),
  quote: (
    <>
      <path d="M9.6 7.6H6.1A1.6 1.6 0 0 0 4.5 9.2v2.5a1.6 1.6 0 0 0 1.6 1.6h2.4v1.2a2.2 2.2 0 0 1-2.2 2.2" />
      <path d="M19.5 7.6H16a1.6 1.6 0 0 0-1.6 1.6v2.5a1.6 1.6 0 0 0 1.6 1.6h2.4v1.2a2.2 2.2 0 0 1-2.2 2.2" />
    </>
  ),
  challenge: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  role: (
    <>
      <rect x="3.6" y="5.2" width="16.8" height="13.6" rx="2.4" />
      <circle cx="9.1" cy="10.8" r="1.9" />
      <path d="M6.2 15.9c.5-1.4 1.6-2.1 2.9-2.1s2.4.7 2.9 2.1" />
      <path d="M14.6 10.4h3.4M14.6 13.6h3.4" />
    </>
  ),
  business: (
    <>
      <path d="M3.8 15.4 8 10.9l3 2.9 4.4-5.2" />
      <path d="M12.9 8.6h2.5v2.5" />
      <circle cx="8.4" cy="17.4" r="2.6" />
      <path d="m10.4 19.4 1.8 1.8" />
    </>
  ),
  research: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M9.4 10.6h.02M14.6 10.6h.02" />
      <path d="M8.7 14.4c1 1 2 1.5 3.3 1.5s2.3-.5 3.3-1.5" />
    </>
  ),
  competitors: (
    <>
      <rect x="4.4" y="4.2" width="15.2" height="15.6" rx="1.8" />
      <path d="M8 8h1.2M8 12h1.2M8 16h1.2M14.8 8H16M14.8 12H16M14.8 16H16M11.4 8h1.2M11.4 12h1.2M11.4 16h1.2" />
    </>
  ),
  personas: (
    <>
      <circle cx="9" cy="9.4" r="2.9" />
      <path d="M3.8 18.6c.7-2.7 2.7-4.2 5.2-4.2s4.5 1.5 5.2 4.2" />
      <path d="M15.8 7.1a2.9 2.9 0 0 1 0 5.6" />
      <path d="M16.9 14.7c1.7.4 2.9 1.7 3.4 3.9" />
    </>
  ),
  journey: (
    <>
      <circle cx="6" cy="7.2" r="2.2" />
      <circle cx="18" cy="16.8" r="2.2" />
      <path d="M8.2 7.2h5.4a2.9 2.9 0 0 1 0 5.8h-3.2a2.9 2.9 0 0 0 0 5.8h5.4" />
    </>
  ),
  ia: (
    <>
      <rect x="9" y="3.6" width="6" height="4.4" rx="1.2" />
      <rect x="3.2" y="16" width="6" height="4.4" rx="1.2" />
      <rect x="14.8" y="16" width="6" height="4.4" rx="1.2" />
      <path d="M12 8v4.2M6.2 16v-3.8h11.6V16" />
    </>
  ),
  flows: (
    <>
      <rect x="3.4" y="8.6" width="6.4" height="6.8" rx="1.6" />
      <rect x="14.2" y="4.4" width="6.4" height="5.6" rx="1.6" />
      <rect x="14.2" y="14" width="6.4" height="5.6" rx="1.6" />
      <path d="M9.8 11.2h2.4a1.6 1.6 0 0 0 1.6-1.6V7.2M9.8 12.8h2.4a1.6 1.6 0 0 1 1.6 1.6v2.4" />
    </>
  ),
  process: (
    <>
      <circle cx="6" cy="6.4" r="2.2" />
      <circle cx="6" cy="17.6" r="2.2" />
      <path d="M6 8.6v6.8" />
      <path d="M10.4 6.4h9.4M10.4 12h7M10.4 17.6h9.4" />
    </>
  ),
  solution: (
    <>
      <path d="M9.6 3.9 11 8.1l4.2 1.4-4.2 1.4-1.4 4.2-1.4-4.2L4 9.5l4.2-1.4z" />
      <path d="M17.2 13.4l.8 2.3 2.3.8-2.3.8-.8 2.3-.8-2.3-2.3-.8 2.3-.8z" />
    </>
  ),
  improvements: (
    <>
      <path d="M20.2 11.3V12a8.2 8.2 0 1 1-4.9-7.5" />
      <path d="m8.8 11.4 2.8 2.8 8.6-8.6" />
    </>
  ),
  outcome: (
    <>
      <rect x="3.6" y="4.4" width="16.8" height="15.2" rx="2.4" />
      <path d="m7.6 14.8 3-3.2 2.3 2.2 3.5-4" />
      <path d="M14.2 9.8h2.2V12" />
    </>
  ),
  visuals: (
    <>
      <rect x="3.4" y="4.6" width="17.2" height="14.8" rx="2.4" />
      <circle cx="8.6" cy="9.6" r="1.6" />
      <path d="m4.4 17 4.5-4.4 3.1 3 3-2.7 4.6 4.1" />
    </>
  ),
  learnings: (
    <>
      <path d="M12 4.2 21 8.6l-9 4.4-9-4.4z" />
      <path d="M6.6 10.6v4.6c0 1.6 2.4 2.9 5.4 2.9s5.4-1.3 5.4-2.9v-4.6" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 11.1v5.1" />
      <path d="M12 8h.02" />
    </>
  ),
  goals: (
    <>
      <path d="M6.2 20.4V4" />
      <path d="M6.2 5.1h10.9l-2.1 3.5 2.1 3.5H6.2" />
    </>
  ),
  ai: (
    <>
      <rect x="5.4" y="5.4" width="13.2" height="13.2" rx="3.2" />
      <path d="M9.6 2.8v2.6M14.4 2.8v2.6M9.6 18.6v2.6M14.4 18.6v2.6M2.8 9.6h2.6M2.8 14.4h2.6M18.6 9.6h2.6M18.6 14.4h2.6" />
      <path d="m9.8 14.6 1.6-4.4 1.6 4.4" />
      <path d="M10.4 13.2h2" />
      <path d="M15.4 10.2v4.4" />
    </>
  ),
};

function CaseNavIcon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {caseNavIcons[name] ?? caseNavIcons.start}
    </svg>
  );
}

const CASE_NAV_SCROLL_OFFSET = 104;

function scrollToCaseSection(id) {
  if (typeof window === "undefined") {
    return;
  }

  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  const top = target.getBoundingClientRect().top + window.scrollY - CASE_NAV_SCROLL_OFFSET;
  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
}

/* Tracks which case study section is currently under the reading line. */
function useActiveCaseSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? null);
  /* A click wins over scroll tracking until its smooth scroll settles. */
  const lockedUntil = useRef(0);
  const idKey = sectionIds.join("|");

  useEffect(() => {
    if (typeof window === "undefined" || !idKey) {
      return undefined;
    }

    const ids = idKey.split("|");

    const update = () => {
      if (Date.now() < lockedUntil.current) {
        return;
      }

      /* The reading line normally sits just below where a clicked section lands,
         so clicking and scrolling agree. The last sections are together shorter
         than a viewport, though, so they can never reach it — as the page runs
         out of scroll, the line slides down to the foot of the viewport and lets
         each of them take a turn instead of jumping straight to the last one. */
      const base = CASE_NAV_SCROLL_OFFSET + 24;
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const remaining = maxScroll - window.scrollY;
      const tail = 240;
      const tailProgress = remaining >= tail ? 0 : Math.min(1, (tail - remaining) / tail);
      const readingLine = base + (window.innerHeight - base) * tailProgress;

      let current = ids[0];
      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= readingLine) {
          current = id;
        }
      });

      setActiveId(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [idKey]);

  const selectSection = (id) => {
    lockedUntil.current = Date.now() + 900;
    setActiveId(id);
    scrollToCaseSection(id);
  };

  return { activeId, selectSection };
}

function CaseStudySidebar({ items, activeId, onSelect }) {
  const railRef = useRef(null);

  /* Long case studies overflow the rail, so keep the active item in view. */
  useEffect(() => {
    const rail = railRef.current;
    const active = rail?.querySelector(".case-nav-item.is-active");
    if (!rail || !active) {
      return;
    }

    const railBox = rail.getBoundingClientRect();
    const itemBox = active.getBoundingClientRect();
    let { scrollTop: top, scrollLeft: left } = rail;

    if (itemBox.top < railBox.top) {
      top -= railBox.top - itemBox.top + 12;
    } else if (itemBox.bottom > railBox.bottom) {
      top += itemBox.bottom - railBox.bottom + 12;
    }

    if (itemBox.left < railBox.left) {
      left -= railBox.left - itemBox.left + 12;
    } else if (itemBox.right > railBox.right) {
      left += itemBox.right - railBox.right + 12;
    }

    if (top !== rail.scrollTop || left !== rail.scrollLeft) {
      rail.scrollTo({ top, left, behavior: "smooth" });
    }
  }, [activeId]);

  return (
    <aside className="case-nav" aria-label="Case study sections">
      <nav className="case-nav-sticky" ref={railRef}>
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              className={`case-nav-item${isActive ? " is-active" : ""}`}
              onClick={() => onSelect(item.id)}
              aria-current={isActive ? "true" : undefined}
            >
              <span className="case-nav-icon">
                <CaseNavIcon name={item.icon} />
              </span>
              <span className="case-nav-label">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

function ProjectDetailsPage({ project, projectSlug, onOpenPdf }) {
  const isCardinalHealth =
    project?.slug === "cardinal-health-procurement-platform" ||
    projectSlug === "cardinal-health-procurement-platform";
  const isDiscoveryPlus = project?.slug === "discovery-plus";
  const isAlMaha = project?.slug === "al-maha-island-lusail";
  const isMcDelivery = project?.slug === "mcdelivery-experience-design";
  const isBrightline = project?.slug === "brightline-future-travel";
  const caseStudy = isCardinalHealth
    ? cardinalHealthCaseStudy
    : isDiscoveryPlus
      ? discoveryPlusCaseStudy
      : isAlMaha
        ? alMahaCaseStudy
        : isMcDelivery
          ? mcdeliveryCaseStudy
          : isBrightline
            ? brightlineCaseStudy
            : null;
  const projectName = project?.title ?? "Work";
  const projectDescription = project?.description ?? "Work details will be updated soon.";

  const caseNavItems = useMemo(() => {
    if (!caseStudy) {
      return [];
    }

    const items = [
      { id: "cs-start", label: "Getting started", icon: "start" },
      { id: "cs-impact", label: "Impact", icon: "business" },
      { id: "cs-overview", label: "Context", icon: "quote" },
      { id: "cs-challenge", label: "The Challenge", icon: "challenge" },
      { id: "cs-goals", label: "Goals", icon: "goals" },
      { id: "cs-role", label: "My Role", icon: "role" },
    ];

    if (isAlMaha) {
      items.push(
        { id: "cs-personas", label: "Personas", icon: "personas" },
        { id: "cs-research", label: "User Interviews", icon: "research" },
        { id: "cs-competitors", label: "Competitors", icon: "competitors" },
      );
    }

    if (isDiscoveryPlus) {
      items.push(
        { id: "cs-research", label: "User Research", icon: "research" },
        { id: "cs-personas", label: "Personas", icon: "personas" },
      );
    }

    if (isCardinalHealth) {
      items.push(
        { id: "cs-research", label: "Research", icon: "research" },
        { id: "cs-pillars", label: "The Solution", icon: "solution" },
        { id: "cs-ai", label: "AI Workflow", icon: "ai" },
        { id: "cs-takeaways", label: "Key Learnings", icon: "learnings" },
      );
    }

    items.push({ id: "cs-process", label: "Design Process", icon: "process" });

    if (isDiscoveryPlus || isAlMaha) {
      items.push(
        { id: "cs-journey", label: "Journey Map", icon: "journey" },
        { id: "cs-ia", label: "Architecture", icon: "ia" },
        { id: "cs-flows", label: "User Flows", icon: "flows" },
      );
    }

    if (isAlMaha) {
      items.push({ id: "cs-quotes", label: "User Quotes", icon: "quote" });
    }

    items.push(
      { id: "cs-improvements", label: "Improvements", icon: "improvements" },
      { id: "cs-outcome", label: "Outcome", icon: "outcome" },
      { id: "cs-visuals", label: caseStudy.visualStrategyTitle ?? "Visuals", icon: "visuals" },
      { id: "cs-learnings", label: "Learnings", icon: "learnings" },
    );

    return items;
  }, [caseStudy, isAlMaha, isDiscoveryPlus, isCardinalHealth]);

  const { activeId: activeCaseSection, selectSection } = useActiveCaseSection(
    caseNavItems.map((item) => item.id),
  );

  return (
    <div className="page-view">
      <section className="project-detail-section">
        <Reveal as="p" className="section-kicker">
          <button type="button" className="kicker-back-button" onClick={() => navigateTo("/projects")} aria-label="Back to Works">
            <span aria-hidden="true">←</span>
          </button>
          Case Study
        </Reveal>

        {caseStudy ? (
          <div className="case-study-intro">
            <section id="cs-start" className="case-section case-section-hero">
              <Reveal className="case-hero-layout">
                <div className="case-hero-main">
                  <p className="case-hero-eyebrow">{projectName} Case Study</p>
                  <h1>{caseStudy.projectTitle}</h1>
                  <p className="case-hero-subtitle">{caseStudy.projectTagline}</p>
                  {caseStudy.heroSubtitle ? (
                    <p className="case-hero-supporting">{caseStudy.heroSubtitle}</p>
                  ) : null}
                  <div className="project-detail-cta-row">
                    {!caseStudy.hideVisualsLink ? (
                      caseStudy.visualsPdf ? (
                        <button
                          type="button"
                          className="project-visuals-button project-visuals-button-primary"
                          onClick={() => onOpenPdf(caseStudy.visualsPdf)}
                        >
                          View Visuals
                          <span aria-hidden="true">↗</span>
                        </button>
                      ) : (
                        <a
                          className="project-visuals-button project-visuals-button-primary"
                          href={
                            caseStudy.behanceVisualsUrl ??
                            "https://www.behance.net/gallery/184033075/App-Design"
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Visuals
                          <span aria-hidden="true">↗</span>
                        </a>
                      )
                    ) : null}
                  </div>
                </div>
                <div className="case-hero-image-wrap">
                  <img className="case-hero-image" src={project?.preview ?? almahaPreview} alt={`${projectName} hero`} />
                </div>
              </Reveal>
            </section>

            {caseStudy.disclaimer ? (
              <section className="case-section case-section-disclaimer">
                <Reveal className="case-disclaimer">
                  <span className="case-disclaimer-badge">Disclaimer</span>
                  <p>{caseStudy.disclaimer}</p>
                </Reveal>
              </section>
            ) : null}

            <section id="cs-quick-info" className="case-section case-section-quick-info">
              <Reveal className="project-detail-card">
                <h3>Quick Info</h3>
                <div className="project-quick-info">
                  {caseStudy.quickInfo.map((item) => (
                    <article key={item.label} className="project-quick-info-item">
                      <p>{item.label}</p>
                      <h3>{item.value}</h3>
                    </article>
                  ))}
                </div>
              </Reveal>
            </section>
          </div>
        ) : null}

        <div className={`case-study-layout${caseStudy ? "" : " is-single"}`}>
        {caseStudy ? (
          <CaseStudySidebar
            items={caseNavItems}
            activeId={activeCaseSection}
            onSelect={selectSection}
          />
        ) : null}

        <div className="case-study-main">
        {!project && projectSlug ? (
          <Reveal className="project-detail-hero">
            <div className="project-detail-copy">
              <p className="project-detail-label">Project not found</p>
              <h2>That case study is not available.</h2>
              <p className="project-detail-tagline">
                The project link may be outdated. Return to Works to choose an available case study.
              </p>
              <div className="project-detail-cta-row">
                <button type="button" className="project-back-button" onClick={() => navigateTo("/projects")}>
                  <span aria-hidden="true">←</span>
                  Back to Works
                </button>
              </div>
            </div>
          </Reveal>
        ) : null}

        {!caseStudy && project ? (
          <Reveal className="project-detail-hero">
            <div className="project-detail-copy">
              <p className="project-detail-label">
                {project?.index ?? "--"} / Product Experience
              </p>
              <h2>{projectName}</h2>
              <p className="project-detail-tagline">{projectDescription}</p>
            </div>
            <div className="project-detail-preview-wrap">
              <img className="project-detail-preview-image" src={project?.preview ?? almahaPreview} alt={`${projectName} preview`} />
            </div>
          </Reveal>
        ) : null}

        {caseStudy ? (
          <>

            <section id="cs-impact" className="case-section case-section-proof-intro">
              <Reveal className="proof-header">
                <h3>{caseStudy.sectionHeading ?? "Designing products that balance business growth with user delight."}</h3>
              </Reveal>

              <Reveal className="proof-metrics-strip">
                {caseStudy.highlightMetrics.map((metric) => {
                  const metricText = typeof metric === "string" ? metric : `${metric.value} ${metric.label}`;
                  const [value, ...labelParts] = typeof metric === "string" ? metric.split(" ") : [metric.value, metric.label];
                  const label = labelParts.join(" ");
                  const isNumericMetric = /\d/.test(value);
                  return (
                    <div key={metricText} className="proof-metric-item">
                      <span
                        className={`proof-metric-value${isNumericMetric ? "" : " proof-metric-value-text"}${
                          typeof metric === "string" || !metric.primaryValue ? "" : " proof-metric-value-primary"
                        }`}
                      >
                        {value}
                      </span>
                      <span className="proof-metric-label">
                        {label}
                        {typeof metric === "string" || !metric.secondLine ? null : (
                          <span className="proof-metric-label-line">{metric.secondLine}</span>
                        )}
                      </span>
                    </div>
                  );
                })}
              </Reveal>
            </section>

            <section className="case-section case-section-summary">
              <Reveal className="project-detail-grid">
                <article id="cs-overview" className="project-detail-card">
                  <h3>Overview</h3>
                  <p>{caseStudy.overview}</p>
                </article>

                <article id="cs-challenge" className="project-detail-card">
                  <h3>Problem Statement</h3>
                  <p>{caseStudy.problemStatement}</p>
                </article>

                <article id="cs-goals" className="project-detail-card">
                  <h3>Goals</h3>
                  <ul>
                    {caseStudy.goals.map((goal) => (
                      <li key={goal}>{goal}</li>
                    ))}
                  </ul>
                </article>

                <article id="cs-role" className="project-detail-card">
                  <h3>My Role</h3>
                  <p>I led end-to-end UX/UI design for this initiative, including:</p>
                  <ul>
                    {caseStudy.roleItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>

              </Reveal>
            </section>


            {isAlMaha ? (
              <>
              <div className="project-summary-divider" aria-hidden="true" />
              {/* ── User Personas ── */}
              <section id="cs-personas" className="almaha-section almaha-personas">
                <Reveal className="almaha-section-inner">
                  <span className="almaha-section-number">User Personas</span>
                  <div className="persona-grid-v2">
                    {[
                      {
                        initials: "JA",
                        variant: "visitor",
                        name: "Jasim Al-Rashidi",
                        role: "Island Visitor · Age 32 · Doha Resident",
                        quote: "“I want to bring my family without worrying about cash at every stall.”",
                        goals: ["Seamless entry with QR, skip queues", "Discover and pre-book outlets before arriving", "Single wallet for all island payments"],
                        motivations: ["Premium experience for his family", "Book Al Maha Drive for his supercar"],
                        frustrations: ["Cash-only entry gate causes long queues", "No way to know restaurant availability in advance", "Physical tickets get lost or damaged"],
                        behaviours: ["Mobile-first", "Repeat visitor", "Brings family", "Plans ahead"],
                      },
                      {
                        initials: "FH",
                        variant: "merchant",
                        name: "Fatima Hassan",
                        role: "Outlet Cashier · Age 26 · Nammos Club",
                        quote: "“Queues pile up when I manually count change. I need a fast scan-and-confirm.”",
                        goals: ["Process payments fast without errors", "Verify customer wallet balance before charging", "Handle partial payments when balance is low"],
                        motivations: ["Reduce end-of-shift reconciliation errors", "Serve more customers in less time"],
                        frustrations: ["Manual entry causes payment disputes", "No clear signal when wallet is insufficient", "POS doesn’t talk to the customer app"],
                        behaviours: ["Scan-first", "High volume", "Error-averse", "Evening shifts"],
                      },
                      {
                        initials: "KM",
                        variant: "admin",
                        name: "Khalid Al-Mansouri",
                        role: "Island Admin / Ops · Age 41 · Super User",
                        quote: "“I can’t run promotions without calling every manager. I need one dashboard.”",
                        goals: ["View real-time transaction reports by outlet", "Trigger push notifications to all visitors", "Download finance reports for compliance"],
                        motivations: ["Increase in-island spend per visitor", "Reduce operational incidents at entry gate"],
                        frustrations: ["No visibility into daily transaction totals", "Promotions require third-party email tools", "Merchant onboarding done manually via backend"],
                        behaviours: ["Web-only user", "Data-driven", "Runs campaigns", "Senior ops"],
                      },
                    ].map((p) => (
                      <div key={p.name} className="persona-card-v2">
                        <div className={`persona-avatar-v2 ${p.variant}`}>{p.initials}</div>
                        <div>
                          <h4 className="persona-name">{p.name}</h4>
                          <p className="persona-role">{p.role}</p>
                        </div>
                        <div className="persona-quote-v2">{p.quote}</div>
                        <p className="persona-section-label">Goals</p>
                        <ul className="persona-list-v2 goals">{p.goals.map((g) => <li key={g}>{g}</li>)}</ul>
                        <p className="persona-section-label">Motivations</p>
                        <ul className="persona-list-v2 motivations">{p.motivations.map((m) => <li key={m}>{m}</li>)}</ul>
                        <p className="persona-section-label">Frustrations</p>
                        <ul className="persona-list-v2 frustrations">{p.frustrations.map((f) => <li key={f}>{f}</li>)}</ul>
                        <p className="persona-section-label">Behaviours</p>
                        <div className="persona-tags-v2">{p.behaviours.map((b) => <span key={b}>{b}</span>)}</div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </section>

              <div className="project-summary-divider" aria-hidden="true" />
              {/* ── Interview Insights & Affinity Map ── */}
              <section id="cs-research" className="almaha-section almaha-affinity">
                <Reveal className="almaha-section-inner">
                  <span className="almaha-section-number">Interview Insights &amp; User Pain Points (Affinity Map)</span>
                  <div className="affinity-stats-row">
                    {[
                      { value: "12", label: "User interviews" },
                      { value: "87", label: "Survey responses" },
                      { value: "6", label: "Themes identified" },
                      { value: "34", label: "Pain points mapped" },
                    ].map((s) => (
                      <div key={s.label} className="affinity-stat">
                        <span className="affinity-stat-value">{s.value}</span>
                        <span className="affinity-stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="affinity-grid-v2">
                    {[
                      {
                        title: "Entry & Access friction",
                        color: "red",
                        quotes: [
                          "“I waited 20 mins at the gate  - the cash machine was broken”",
                          "“There was no way to show I had a reservation at the gate”",
                          "No digital identity = every visit starts with re-verification",
                          "Physical tickets damaged by rain, not accepted at gate",
                        ],
                      },
                      {
                        title: "Payment confusion",
                        color: "orange",
                        quotes: [
                          "“I didn’t know how much was left on my physical card”",
                          "“Cashier kept my change  - I had no receipt to dispute it”",
                          "Partial payment flow unclear  - customers walked away",
                          "Entry fee converting to credits was never explained",
                        ],
                      },
                      {
                        title: "Outlet discovery",
                        color: "blue",
                        quotes: [
                          "“I found Nammos by accident  - I almost left the island”",
                          "“Couldn’t tell which restaurants were open before I left home”",
                          "No map  - visitors wandering the island lost",
                          "Reservation process via phone call, often unanswered",
                        ],
                      },
                      {
                        title: "Booking experience",
                        color: "purple",
                        quotes: [
                          "“I booked Al Maha Drive on WhatsApp  - sketchy experience”",
                          "“Winter Wonderland sold out but no one told me at booking”",
                          "Car details had to be re-entered every visit",
                          "No confirmation email received after booking",
                        ],
                      },
                      {
                        title: "Merchant operations",
                        color: "green",
                        quotes: [
                          "Staff had no way to verify if a card had enough balance",
                          "POS system not connected  - manual amount entry caused errors",
                          "“Customer disputes happen daily about charged amounts”",
                          "Physical card linked to wrong account twice in one week",
                        ],
                      },
                      {
                        title: "Admin & promotions",
                        color: "teal",
                        quotes: [
                          "No real-time visibility into transaction volume by outlet",
                          "“We run promotions via WhatsApp broadcast  - very unreliable”",
                          "Finance team requests manual CSV exports from developer",
                          "No way to target promotions to specific visitor segments",
                        ],
                      },
                    ].map((theme) => (
                      <div key={theme.title} className="affinity-theme-card">
                        <div className={`affinity-theme-header theme-${theme.color}`}>{theme.title}</div>
                        <div className="affinity-theme-body">
                          {theme.quotes.map((q) => (
                            <div key={q} className={`affinity-quote-chip chip-${theme.color}`}>{q}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </section>

              <div className="project-summary-divider" aria-hidden="true" />
              {/* ── Competitive Analysis ── */}
              <section id="cs-competitors" className="almaha-section almaha-competitive">
                <Reveal className="almaha-section-inner">
                  <span className="almaha-section-number">Competitive Analysis</span>
                  <div className="comp-legend">
                    <span><span className="comp-icon-yes">&#10003;</span> Available</span>
                    <span><span className="comp-icon-no">&#10007;</span> Not available</span>
                    <span><span className="comp-icon-partial">&#9684;</span> Partial</span>
                  </div>
                  <div className="comp-table-v2-wrap">
                    <table className="comp-table-v2">
                      <thead>
                        <tr>
                          <th />
                          <th className="comp-highlight-col">Al Maha (designed)</th>
                          <th>Ticketmaster</th>
                          <th>Careem Pay</th>
                          <th>Dubai Parks App</th>
                          <th>Yas Island App</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { feature: "QR-based island entry", values: ["yes", "partial", "no", "yes", "yes"] },
                          { feature: "In-app digital wallet", values: ["yes", "no", "yes", "no", "partial"] },
                          { feature: "Physical card → digital link", values: ["yes", "no", "no", "no", "no"] },
                          { feature: "Outlet map discovery", values: ["yes", "no", "no", "yes", "no"] },
                          { feature: "Restaurant reservation", values: ["yes", "no", "no", "partial", "yes"] },
                          { feature: "Partial wallet payment", values: ["yes", "no", "partial", "no", "no"] },
                          { feature: "Merchant POS integration", values: ["yes", "no", "no", "no", "no"] },
                          { feature: "Vehicle registration (drive)", values: ["yes", "no", "no", "no", "no"] },
                          { feature: "Push notification campaigns", values: ["yes", "yes", "partial", "no", "partial"] },
                          { feature: "Admin transaction reports", values: ["yes", "partial", "partial", "no", "partial"] },
                        ].map((row) => (
                          <tr key={row.feature}>
                            <td>{row.feature}</td>
                            {row.values.map((v, i) => (
                              <td key={i} className={v === "yes" ? "comp-icon-yes" : v === "partial" ? "comp-icon-partial" : "comp-icon-no"}>
                                {v === "yes" ? "✓" : v === "partial" ? "◔" : "✗"}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="comp-insights-grid">
                    <div className="comp-insight-card insight-opportunity">
                      <span className="comp-insight-label">Opportunity - physical card bridging</span>
                      <p>No competitor supports physical NFC/QR card &rarr; digital wallet linking. This became a differentiating Al Maha feature for first-time users not yet on the app.</p>
                    </div>
                    <div className="comp-insight-card insight-opportunity">
                      <span className="comp-insight-label">Opportunity - closed ecosystem wallet</span>
                      <p>Unlike open wallets (Careem Pay), Al Maha&apos;s entry fee converts to credits - a mechanic that drives in-island spending and creates lock-in without extra cost to visitor.</p>
                    </div>
                    <div className="comp-insight-card insight-gap">
                      <span className="comp-insight-label">Gap - vehicle-specific booking UX</span>
                      <p>Benchmarks showed no good reference for car-detail registration flows. UX had to be designed from scratch: step-by-step modal, photo upload, plate entry.</p>
                    </div>
                    <div className="comp-insight-card insight-gap">
                      <span className="comp-insight-label">Gap - partial payment edge cases</span>
                      <p>Careem Pay handles split payments but not within a merchant-scan flow. All three wallet scenarios (full, partial, overspend) had no direct reference pattern to borrow from.</p>
                    </div>
                  </div>
                </Reveal>
              </section>
              <div className="project-summary-divider" aria-hidden="true" />
              </>
            ) : null}

            {isDiscoveryPlus ? (
              <>
              <div className="project-summary-divider" aria-hidden="true" />
              {/* ── User Research ── */}
              <section id="cs-research" className="discovery-section discovery-research">
                <Reveal className="discovery-section-inner">
                  <span className="discovery-section-label">User Research</span>
                  <h3 className="discovery-section-heading">Understanding how viewers actually consume content</h3>
                  <p className="discovery-section-description">
                    Before wireframing a single screen, I conducted 18 user interviews and collected 112 survey
                    responses across three viewer segments - casual, regular, and power users. Findings were
                    synthesised into an affinity map, a competitive analysis matrix, and tagged interview quotes
                    to align the team around real problems.
                  </p>

                  {/* Affinity map */}
                  <span className="discovery-subsection-label">Affinity map - 6 research themes</span>
                  <div className="discovery-affinity-stats">
                    {[
                      { value: "18", label: "User interviews" },
                      { value: "112", label: "Survey responses" },
                      { value: "6", label: "Usability sessions" },
                      { value: "30", label: "Pain points synthesised" },
                    ].map((s) => (
                      <div key={s.label} className="discovery-affinity-stat">
                        <span className="discovery-affinity-stat-value">{s.value}</span>
                        <span className="discovery-affinity-stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="discovery-affinity-grid">
                    {[
                      {
                        title: "Content Discovery",
                        color: "blue",
                        items: [
                          "Hard to find genre-specific shows",
                          "No personalised home rail on first login",
                          "Category tabs feel overwhelming",
                          "Trending content buried below fold",
                          "Search returns irrelevant Shorts",
                        ],
                      },
                      {
                        title: "Navigation Friction",
                        color: "green",
                        items: [
                          "Bottom nav unclear on TV",
                          "Back button inconsistent on Android",
                          "Switching devices loses watch position",
                          "TV remote navigation too many clicks",
                          "No breadcrumb on show detail pages",
                        ],
                      },
                      {
                        title: "Video Playback",
                        color: "orange",
                        items: [
                          "No auto-play after episode ends",
                          "Quality toggle buried in settings",
                          "Audio language not remembered",
                          "Seeking on TV is sluggish",
                          "Shorts auto-muted by default",
                        ],
                      },
                      {
                        title: "Subscription & Payment",
                        color: "pink",
                        items: [
                          "Paywall appears mid-show without warning",
                          "Plan comparison not visible upfront",
                          "Google Pay and Apple Pay options unclear",
                          "Annual savings not prominently shown",
                          "Cancellation flow is confusing",
                        ],
                      },
                      {
                        title: "Personalisation",
                        color: "purple",
                        items: [
                          "Interest selection skipped at onboarding",
                          "Recommendations feel generic",
                          "Continue watching rail gets cluttered",
                          "No profile separation for kids",
                          "Watchlist not synced across devices",
                        ],
                      },
                      {
                        title: "Cross-Device Experience",
                        color: "cyan",
                        items: [
                          "Cast icon not discoverable on mobile",
                          "TV app missing Shorts section",
                          "Web lacks voice search",
                          "Different UI patterns per platform",
                          "Resuming on TV from mobile doesn't work",
                        ],
                      },
                    ].map((theme) => (
                      <div key={theme.title} className="discovery-affinity-card">
                        <div className={`discovery-affinity-header theme-${theme.color}`}>
                          <span className={`discovery-affinity-dot dot-${theme.color}`} />
                          {theme.title}
                        </div>
                        <ul className="discovery-affinity-list">
                          {theme.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Competitive landscape */}
                  <span className="discovery-subsection-label">Competitive landscape</span>
                  <div className="discovery-comp-table-wrap">
                    <table className="discovery-comp-table">
                      <thead>
                        <tr>
                          <th>Feature</th>
                          <th className="discovery-comp-highlight">Discovery+</th>
                          <th>Netflix</th>
                          <th>Prime</th>
                          <th>Hotstar</th>
                          <th>SonyLIV</th>
                          <th>ZEE5</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { feature: "Personalised home rail", values: ["yes", "yes", "yes", "yes", "yes", "partial"] },
                          { feature: "Voice search", values: ["no", "yes", "no", "yes", "no", "no"] },
                          { feature: "Multi-language content", values: ["yes", "partial", "partial", "yes", "yes", "yes"] },
                          { feature: "Cross-device sync", values: ["partial", "yes", "yes", "partial", "partial", "no"] },
                          { feature: "Offline downloads", values: ["no", "yes", "yes", "yes", "no", "no"] },
                          { feature: "Short-form video", values: ["yes", "no", "no", "yes", "yes", "partial"] },
                          { feature: "Kids section", values: ["yes", "yes", "partial", "yes", "yes", "no"] },
                          { feature: "In-app subscription", values: ["yes", "yes", "yes", "yes", "yes", "yes"] },
                          { feature: "WhatsApp share", values: ["yes", "no", "no", "no", "no", "no"] },
                          { feature: "TV app (native)", values: ["yes", "yes", "partial", "yes", "partial", "no"] },
                        ].map((row) => (
                          <tr key={row.feature}>
                            <td>{row.feature}</td>
                            {row.values.map((v, i) => (
                              <td key={i} className={i === 0 ? "discovery-comp-highlight" : ""}>
                                <span className={`discovery-comp-icon discovery-comp-${v}`}>
                                  {v === "yes" ? "✓" : v === "partial" ? "◔" : "–"}
                                </span>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="discovery-comp-insights">
                    <div className="discovery-comp-insight insight-opportunity">
                      <span className="discovery-comp-insight-label">Opportunity: Voice search</span>
                      <p>Only Netflix offers voice search on mobile. Discovery+ can close this gap across all three platforms.</p>
                    </div>
                    <div className="discovery-comp-insight insight-strength">
                      <span className="discovery-comp-insight-label">Strength: Multi-language content</span>
                      <p>8-language support is best-in-class for a non-fiction platform - rivals average 4 languages.</p>
                    </div>
                    <div className="discovery-comp-insight insight-gap">
                      <span className="discovery-comp-insight-label">Gap: Offline downloads</span>
                      <p>Netflix, Prime and Hotstar all offer downloads. Users cited this as the #1 missing feature.</p>
                    </div>
                    <div className="discovery-comp-insight insight-unique">
                      <span className="discovery-comp-insight-label">Unique: WhatsApp sharing</span>
                      <p>One-tap WhatsApp share of Shorts is a uniquely Indian design decision no competitor has matched.</p>
                    </div>
                  </div>

                  {/* User quotes */}
                  <span className="discovery-subsection-label">What users told us</span>
                  <div className="discovery-quotes-grid">
                    {[
                      {
                        quote: "I watch Discovery on TV every night, but on the app I can't find the same shows. It feels like a completely different channel.",
                        name: "Amit, 34",
                        role: "Daily viewer",
                        tag: "Pain: content gap",
                        tagClass: "tag-pain",
                      },
                      {
                        quote: "The Shorts are great but I have no idea how to share them. When I figured out the WhatsApp button my friends loved it - just needs to be more obvious.",
                        name: "Priya, 27",
                        role: "Casual viewer",
                        tag: "Need: discoverability",
                        tagClass: "tag-need",
                      },
                      {
                        quote: "I started watching Man vs Wild on my phone, switched to TV, and it started from scratch. If Netflix can do this, why can't Discovery?",
                        name: "Rohan, 31",
                        role: "Multi-device user",
                        tag: "Pain: sync failure",
                        tagClass: "tag-pain",
                      },
                      {
                        quote: "I didn't know there was a kids section called MindBlown until my nephew found it by accident. My kids would love it - it should be right upfront.",
                        name: "Kavita, 38",
                        role: "Parent",
                        tag: "Need: feature visibility",
                        tagClass: "tag-need",
                      },
                      {
                        quote: "Every time I try to say a show name in voice search it just opens Google. I want to search inside the app - like Hotstar lets me do.",
                        name: "Farhan, 29",
                        role: "Tech-savvy user",
                        tag: "Pain: voice search UX",
                        tagClass: "tag-pain",
                      },
                      {
                        quote: "I paid for a year subscription but the app still shows me the same generic home screen. It should feel different - like it knows me by now.",
                        name: "Sunita, 42",
                        role: "Premium subscriber",
                        tag: "Need: personalisation",
                        tagClass: "tag-need",
                      },
                    ].map((q) => (
                      <div key={q.name} className="discovery-quote-card">
                        <span className="discovery-quote-mark" aria-hidden="true">&ldquo;</span>
                        <blockquote>{q.quote}</blockquote>
                        <div className="discovery-quote-footer">
                          <span className="discovery-quote-attribution"><strong>{q.name}</strong> &middot; {q.role}</span>
                          <span className={`discovery-quote-tag ${q.tagClass}`}>{q.tag}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </section>

              <div className="project-summary-divider" aria-hidden="true" />
              {/* ── User Personas ── */}
              <section id="cs-personas" className="discovery-section discovery-personas">
                <Reveal className="discovery-section-inner">
                  <span className="discovery-section-label">User Personas</span>
                  <h3 className="discovery-section-heading">Three viewers, three completely different watching habits</h3>
                  <p className="discovery-section-description">
                    Discovery+ serves a binge watcher who wants seamless continuation across devices, a parent
                    who needs safe kids content at the surface, and a curious explorer who discovers content
                    through Shorts and voice search. Designing well for all three required distinct feature
                    priorities within one unified system.
                  </p>

                  <div className="discovery-persona-grid">
                    {[
                      {
                        name: "Rohan, 28",
                        role: "Software Engineer - Mumbai",
                        archetype: "The Binge Watcher",
                        color: "blue",
                        emoji: "👨‍💻",
                        goals: [
                          "Watch full series uninterrupted",
                          "Pick up exactly where he left off",
                          "Discover similar shows automatically",
                        ],
                        frustrations: [
                          "No auto-play after episode",
                          "Watch position lost on TV switch",
                          "Irrelevant recommendations on home",
                        ],
                        devices: ["Android phone", "Android TV"],
                        quote: "I just want the next episode to start. Don't make me reach for the remote.",
                      },
                      {
                        name: "Kavita, 39",
                        role: "School Teacher - Pune",
                        archetype: "The Family Planner",
                        color: "green",
                        emoji: "👩‍🏫",
                        goals: [
                          "Safe content for kids (MindBlown)",
                          "Cast to TV for family viewing",
                          "Hindi and Tamil options for parents",
                        ],
                        frustrations: [
                          "Kids section hard to find",
                          "Cast feature not obvious",
                          "No parental PIN for premium content",
                        ],
                        devices: ["iPhone", "Smart TV (cast)"],
                        quote: "My children love animals. I just need to know they won't stumble onto adult content.",
                      },
                      {
                        name: "Farhan, 26",
                        role: "Research Student - Delhi",
                        archetype: "The Curious Explorer",
                        color: "purple",
                        emoji: "🔬",
                        goals: [
                          "Discover niche science & wildlife docs",
                          "Share Shorts with study group",
                          "Quick 5-min clips during breaks",
                        ],
                        frustrations: [
                          "Voice search goes to Google instead",
                          "Shorts share button not visible",
                          "Science category not on home rail",
                        ],
                        devices: ["Android phone", "Web browser"],
                        quote: "I want to search by saying the show name - typing on a phone is too slow.",
                      },
                    ].map((p) => (
                      <div key={p.name} className="discovery-persona-card">
                        <div className={`discovery-persona-header persona-${p.color}`}>
                          <span className="discovery-persona-emoji">{p.emoji}</span>
                          <div>
                            <h4 className="discovery-persona-name">{p.name}</h4>
                            <p className="discovery-persona-role">{p.role}</p>
                            <p className="discovery-persona-archetype">{p.archetype}</p>
                          </div>
                        </div>
                        <div className="discovery-persona-body">
                          <p className="discovery-persona-section-title">Goals</p>
                          <ul className="discovery-persona-list">
                            {p.goals.map((g) => <li key={g}>{g}</li>)}
                          </ul>
                          <p className="discovery-persona-section-title">Frustrations</p>
                          <ul className="discovery-persona-list discovery-persona-frustrations">
                            {p.frustrations.map((f) => <li key={f}>{f}</li>)}
                          </ul>
                          <p className="discovery-persona-section-title">Devices</p>
                          <div className="discovery-persona-devices">
                            {p.devices.map((d) => <span key={d} className="discovery-persona-device">{d}</span>)}
                          </div>
                          <div className="discovery-persona-quote">&ldquo;{p.quote}&rdquo;</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </section>

              <div className="project-summary-divider" aria-hidden="true" />
              </>
            ) : null}

            {isCardinalHealth ? (
              <>
              <div className="project-summary-divider" aria-hidden="true" />
              {/* ── Research & Insights ── */}
              <section id="cs-research" className="discovery-section cardinal-section">
                <Reveal className="discovery-section-inner">
                  <span className="discovery-section-label">Research &amp; Insights</span>
                  <h3 className="discovery-section-heading">
                    Talking to the people who order under pressure
                  </h3>
                  <p className="discovery-section-description">{caseStudy.researchIntro}</p>

                  <div className="discovery-affinity-stats">
                    {caseStudy.researchStats.map((stat) => (
                      <div key={stat.label} className="discovery-affinity-stat">
                        <span className="discovery-affinity-stat-value">{stat.value}</span>
                        <span className="discovery-affinity-stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <span className="discovery-subsection-label">The operating context</span>
                  <div className="cardinal-context-grid">
                    {caseStudy.contextCards.map((card) => (
                      <div key={card.title} className="cardinal-context-card">
                        <h4>{card.title}</h4>
                        <p>{card.description}</p>
                      </div>
                    ))}
                  </div>

                  <span className="discovery-subsection-label">What users told us</span>
                  <div className="discovery-quotes-grid">
                    {caseStudy.researchQuotes.map((q) => (
                      <div key={q.name} className="discovery-quote-card">
                        <span className="discovery-quote-mark" aria-hidden="true">&ldquo;</span>
                        <blockquote>{q.quote}</blockquote>
                        <div className="discovery-quote-footer">
                          <span className="discovery-quote-attribution">
                            <strong>{q.name}</strong> &middot; {q.role}
                          </span>
                          <span className={`discovery-quote-tag ${q.tagClass}`}>{q.tag}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <span className="discovery-subsection-label">Key research findings</span>
                  <div className="discovery-comp-insights">
                    {caseStudy.keyFindings.map((finding) => (
                      <div key={finding.label} className={`discovery-comp-insight ${finding.variant}`}>
                        <span className="discovery-comp-insight-label">{finding.label}</span>
                        <p>{finding.text}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </section>

              <div className="project-summary-divider" aria-hidden="true" />
              {/* ── Core Solution Pillars ── */}
              <section id="cs-pillars" className="discovery-section cardinal-section">
                <Reveal className="discovery-section-inner">
                  <span className="discovery-section-label">Core Solution Pillars</span>
                  <h3 className="discovery-section-heading">
                    Three pillars, one goal: never let the user hit a dead end
                  </h3>
                  <p className="discovery-section-description">
                    Make stock truth visible at the moment of choice, collapse bulk checkout into one
                    validated screen, and standardise every surface on a system built for density
                    rather than decoration.
                  </p>

                  <div className="cardinal-pillar-list">
                    {caseStudy.pillars.map((pillar) => (
                      <article key={pillar.title} className="cardinal-pillar">
                        <span className="cardinal-pillar-badge">{pillar.badge}</span>
                        <h4>{pillar.title}</h4>
                        <p>{pillar.description}</p>
                        <ul className="cardinal-pillar-points">
                          {pillar.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>

                  <span className="discovery-subsection-label">{caseStudy.beforeAfter.label}</span>
                  <div className="cardinal-compare-grid">
                    {[
                      { ...caseStudy.beforeAfter.before, variant: "is-before" },
                      { ...caseStudy.beforeAfter.after, variant: "is-after" },
                    ].map((side) => (
                      <div key={side.tag} className={`cardinal-compare-card ${side.variant}`}>
                        <span className="cardinal-compare-tag">{side.tag}</span>
                        <h4>{side.title}</h4>
                        <ul>
                          {side.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </section>

              <div className="project-summary-divider" aria-hidden="true" />
              {/* ── AI-Accelerated Workflow ── */}
              <section id="cs-ai" className="discovery-section cardinal-section">
                <Reveal className="discovery-section-inner">
                  <span className="discovery-section-label">Working the 2026 Way</span>
                  <h3 className="discovery-section-heading">{caseStudy.aiWorkflow.heading}</h3>
                  <p className="discovery-section-description">{caseStudy.aiWorkflow.intro}</p>

                  <div className="cardinal-ai-grid">
                    {caseStudy.aiWorkflow.items.map((item, index) => (
                      <article key={item.title} className="cardinal-ai-card">
                        <span className="cardinal-ai-num">{String(index + 1).padStart(2, "0")}</span>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </article>
                    ))}
                  </div>

                  {caseStudy.aiWorkflow.note ? (
                    <p className="cardinal-ai-note">{caseStudy.aiWorkflow.note}</p>
                  ) : null}
                </Reveal>
              </section>

              <div className="project-summary-divider" aria-hidden="true" />
              {/* ── Key Learnings ── */}
              <section id="cs-takeaways" className="discovery-section cardinal-section">
                <Reveal className="discovery-section-inner">
                  <span className="discovery-section-label">Key Learnings</span>
                  <h3 className="discovery-section-heading">
                    What six months in a high-stakes system taught me
                  </h3>

                  <div className="cardinal-learning-list">
                    {caseStudy.learnings.map((item) => (
                      <article key={item.number} className="cardinal-learning-card">
                        <span className="cardinal-learning-num">{item.number}</span>
                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </Reveal>
              </section>

              <div className="project-summary-divider" aria-hidden="true" />
              </>
            ) : null}

            <section id="cs-process" className="case-section case-section-summary case-section-summary-extended">
              <Reveal className="project-detail-grid">
                <article className="project-detail-card">
                  <h3>Design Process</h3>
                  <div className="process-list process-list-compact">
                    {caseStudy.process.map((step, index) => (
                      <article key={step.title} className="process-item">
                        <div className="process-item-marker" aria-hidden="true">
                          <span className="process-item-dot" />
                          <span className="process-item-icon">
                            <ProcessStepIcon index={index} />
                          </span>
                        </div>
                        <div className="process-item-content">
                          <h4>{step.title}</h4>
                          <p>{step.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </article>
              </Reveal>
            </section>

            {isDiscoveryPlus ? (
              <>
              <div className="project-summary-divider" aria-hidden="true" />
              {/* ── User Journey Map ── */}
              <section id="cs-journey" className="discovery-section discovery-journey-map">
                <Reveal className="discovery-section-inner">
                  <span className="discovery-section-label">User Journey Map</span>
                  <h3 className="discovery-section-heading">Mapping the viewer experience - from browse to binge</h3>
                  <p className="discovery-section-description">
                    The journey map revealed that the biggest friction points happen before a user presses
                    play - during browsing and onboarding. Users felt generic and unseen. Three of five
                    major pain points occurred in the discovery phase, making personalisation the
                    highest-priority design problem.
                  </p>

                  <div className="discovery-journey-wrap">
                    <div className="discovery-journey-table">
                      <div className="discovery-journey-header-row">
                        <div className="discovery-journey-row-label" />
                        <div className="discovery-journey-phase phase-before">
                          <strong>Before Watching</strong>
                          <span>Awareness &rarr; Onboarding &rarr; Browse</span>
                        </div>
                        <div className="discovery-journey-phase phase-during">
                          <strong>During Watching</strong>
                          <span>Discover &rarr; Play &rarr; Engage</span>
                        </div>
                        <div className="discovery-journey-phase phase-after">
                          <strong>After Watching</strong>
                          <span>Finish &rarr; Share &rarr; Return</span>
                        </div>
                      </div>

                      <div className="discovery-journey-body-row">
                        <div className="discovery-journey-row-label">Actions</div>
                        <div className="discovery-journey-cells">
                          <ul>
                            <li>Downloads app via Play Store</li>
                            <li>Selects interests at onboarding</li>
                            <li>Browses category tabs</li>
                            <li>Searches for a specific show</li>
                          </ul>
                        </div>
                        <div className="discovery-journey-cells">
                          <ul>
                            <li>Selects show from home rail</li>
                            <li>Presses play on episode</li>
                            <li>Adjusts audio language / quality</li>
                            <li>Switches device mid-episode</li>
                          </ul>
                        </div>
                        <div className="discovery-journey-cells">
                          <ul>
                            <li>Adds show to Watchlist</li>
                            <li>Shares a Short on WhatsApp</li>
                            <li>Returns for next episode</li>
                            <li>Reviews subscription plan</li>
                          </ul>
                        </div>
                      </div>

                      <div className="discovery-journey-body-row">
                        <div className="discovery-journey-row-label">Emotion</div>
                        <div className="discovery-journey-cells">
                          <div className="discovery-journey-emotion">
                            <span className="discovery-journey-emojis">🤗 😐 😕 😤</span>
                            <span>Hopeful &rarr; Confused &rarr; Frustrated by overwhelming categories</span>
                          </div>
                        </div>
                        <div className="discovery-journey-cells">
                          <div className="discovery-journey-emotion">
                            <span className="discovery-journey-emojis">😁 😁 😤 😮</span>
                            <span>Delighted &rarr; Annoyed when sync fails on device switch</span>
                          </div>
                        </div>
                        <div className="discovery-journey-cells">
                          <div className="discovery-journey-emotion">
                            <span className="discovery-journey-emojis">🤗 😕 😐</span>
                            <span>Satisfied &rarr; Neutral about returning without a push</span>
                          </div>
                        </div>
                      </div>

                      <div className="discovery-journey-body-row">
                        <div className="discovery-journey-row-label">Pain Points</div>
                        <div className="discovery-journey-cells">
                          <div className="discovery-journey-tags">
                            <span className="discovery-journey-tag tag-pain">Interest selection skipped by 60%</span>
                            <span className="discovery-journey-tag tag-pain">Search returns irrelevant results</span>
                          </div>
                        </div>
                        <div className="discovery-journey-cells">
                          <div className="discovery-journey-tags">
                            <span className="discovery-journey-tag tag-pain">No cross-device watch sync</span>
                            <span className="discovery-journey-tag tag-pain">Paywall shown mid-episode</span>
                          </div>
                        </div>
                        <div className="discovery-journey-cells">
                          <div className="discovery-journey-tags">
                            <span className="discovery-journey-tag tag-pain">No next-episode nudge</span>
                            <span className="discovery-journey-tag tag-pain">Watchlist not synced on TV</span>
                          </div>
                        </div>
                      </div>

                      <div className="discovery-journey-body-row">
                        <div className="discovery-journey-row-label">Opportunities</div>
                        <div className="discovery-journey-cells">
                          <div className="discovery-journey-tags">
                            <span className="discovery-journey-tag tag-opp">Gamify interest selection</span>
                            <span className="discovery-journey-tag tag-opp">Smart genre-first home rail</span>
                          </div>
                        </div>
                        <div className="discovery-journey-cells">
                          <div className="discovery-journey-tags">
                            <span className="discovery-journey-tag tag-opp">Cross-device sync via Adobe Analytics</span>
                            <span className="discovery-journey-tag tag-opp">Platform-specific voice search</span>
                          </div>
                        </div>
                        <div className="discovery-journey-cells">
                          <div className="discovery-journey-tags">
                            <span className="discovery-journey-tag tag-opp">Smart re-engagement notification</span>
                            <span className="discovery-journey-tag tag-opp">WhatsApp share on Shorts</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="discovery-insight-box">
                    <strong>Key insight:</strong> The biggest emotional low points happen before a user even
                    presses play - at the browsing stage where content feels generic and irrelevant. Solving
                    onboarding personalisation unblocks all downstream engagement.
                  </div>
                </Reveal>
              </section>

              <div className="project-summary-divider" aria-hidden="true" />
              {/* ── Information Architecture ── */}
              <section id="cs-ia" className="discovery-section discovery-ia">
                <Reveal className="discovery-section-inner">
                  <span className="discovery-section-label">Information Architecture</span>
                  <h3 className="discovery-section-heading">One product, three platforms, five entry points each</h3>
                  <p className="discovery-section-description">
                    The platform needed a unified navigation model that felt native to Android, iOS, Web,
                    Android TV, and OnePlus TV - while maintaining consistent content rails and a shared
                    identity layer (watchlist, favourites, continue watching) across all five. The sitemap
                    defined which screens existed per platform and which were shared.
                  </p>

                  <div className="discovery-ia-sitemap">
                    <div className="discovery-ia-root">
                      <span className="discovery-ia-root-pill">Discovery+ Platform</span>
                    </div>
                    <div className="discovery-ia-connector" />
                    <div className="discovery-ia-platforms">
                      {[
                        {
                          name: "Mobile (Android / iOS)",
                          color: "blue",
                          screens: ["Home Rail", "Search / Voice", "Shorts Feed", "Show Detail", "Video Player", "My Watchlist", "Profile / Settings", "Subscription"],
                        },
                        {
                          name: "Web (Desktop / Tablet)",
                          color: "green",
                          screens: ["Home Rail", "Category Browse", "Search", "Show Detail", "Video Player", "My Watchlist", "Account / Billing"],
                        },
                        {
                          name: "TV (Android TV / OnePlus)",
                          color: "purple",
                          screens: ["Home Rail", "D-pad Navigation", "Show Detail", "Video Player", "Continue Watching", "Settings / Audio", "Kids Section"],
                        },
                      ].map((platform) => (
                        <div key={platform.name} className="discovery-ia-platform-group">
                          <span className={`discovery-ia-platform-label platform-${platform.color}`}>{platform.name}</span>
                          <div className="discovery-ia-screen-list">
                            {platform.screens.map((s) => (
                              <span key={s} className="discovery-ia-screen-chip">{s}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="discovery-ia-connector" />
                    <div className="discovery-ia-shared">
                      <span className="discovery-ia-shared-label">Shared Layer</span>
                      <div className="discovery-ia-shared-chips">
                        {["User Identity", "Watchlist", "Continue Watching", "Favourites", "Subscription State", "Language Prefs"].map((s) => (
                          <span key={s} className="discovery-ia-shared-chip">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="discovery-ia-stats">
                    {[
                      { value: "3 platforms", label: "Mobile, Web, TV" },
                      { value: "5 primary sections", label: "per platform" },
                      { value: "15+ unique screens", label: "mapped and spec'd" },
                    ].map((s) => (
                      <div key={s.value} className="discovery-ia-stat">
                        <span className="discovery-ia-stat-value">{s.value}</span>
                        <span className="discovery-ia-stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </section>

              <div className="project-summary-divider" aria-hidden="true" />
              {/* ── User Flows ── */}
              <section id="cs-flows" className="discovery-section discovery-flows">
                <Reveal className="discovery-section-inner">
                  <span className="discovery-section-label">User Flows</span>
                  <h3 className="discovery-section-heading">Two flows that defined every design decision</h3>
                  <p className="discovery-section-description">
                    Out of 12 user stories, two flows touched every part of the platform: the content
                    discovery path (home rail &rarr; show detail &rarr; video player) and the subscription
                    upgrade flow (paywall &rarr; plan selection &rarr; payment). Getting these right -
                    including edge cases like search fallback and payment method selection - unblocked
                    all other screen designs.
                  </p>

                  <div className="discovery-flows-grid">
                    <div>
                      <p className="discovery-flow-title">Flow 1 - Content Discovery</p>
                      <div className="discovery-flow-chart">
                        <div className="flow-node flow-node-start">Opens Discovery+ app</div>
                        <div className="flow-arrow" />
                        <div className="flow-node flow-node-action">Lands on Home Rail<span className="flow-node-sub">Personalised or generic</span></div>
                        <div className="flow-arrow" />
                        <div className="flow-node flow-node-decision">Browses or searches?<span className="flow-node-sub">Two paths</span></div>
                        <div className="flow-arrow" />
                        <div className="flow-branch-labels">
                          <span className="flow-branch-label">Browse</span>
                          <span className="flow-branch-label">Search</span>
                        </div>
                        <div className="flow-branch-row">
                          <div className="flow-branch-col">
                            <div className="flow-node flow-node-action">Scrolls genre rails<span className="flow-node-sub">Trending / Recommended</span></div>
                          </div>
                          <div className="flow-branch-col">
                            <div className="flow-node flow-node-action">Types or voice search<span className="flow-node-sub">Show name / genre</span></div>
                            <div className="flow-arrow" />
                            <div className="flow-node flow-node-neutral">Results shown<span className="flow-node-sub">Filtered by relevance</span></div>
                          </div>
                        </div>
                        <div className="flow-arrow" />
                        <div className="flow-node flow-node-action">Show Detail page<span className="flow-node-sub">Episodes, trailer, similar</span></div>
                        <div className="flow-arrow" />
                        <div className="flow-node flow-node-success">Presses Play<span className="flow-node-sub">Video player launches</span></div>
                        <div className="flow-arrow" />
                        <div className="flow-end-label">Episode ends &rarr; Auto-play next</div>
                      </div>
                    </div>

                    <div>
                      <p className="discovery-flow-title">Flow 2 - Subscription Upgrade</p>
                      <div className="discovery-flow-chart">
                        <div className="flow-node flow-node-start">Hits premium content</div>
                        <div className="flow-arrow" />
                        <div className="flow-node flow-node-payment">Paywall displayed<span className="flow-node-sub">Plan comparison shown</span></div>
                        <div className="flow-arrow" />
                        <div className="flow-node flow-node-decision">Monthly or Annual?<span className="flow-node-sub">Savings highlighted</span></div>
                        <div className="flow-arrow" />
                        <div className="flow-branch-labels">
                          <span className="flow-branch-label">Monthly</span>
                          <span className="flow-branch-label">Annual</span>
                        </div>
                        <div className="flow-branch-row">
                          <div className="flow-branch-col">
                            <div className="flow-node flow-node-neutral">Rs 299/mo<span className="flow-node-sub">Standard price</span></div>
                          </div>
                          <div className="flow-branch-col">
                            <div className="flow-node flow-node-success">Rs 999/yr<span className="flow-node-sub">Save 72%</span></div>
                          </div>
                        </div>
                        <div className="flow-arrow" />
                        <div className="flow-node flow-node-action">Payment method<span className="flow-node-sub">UPI / Card / GPay</span></div>
                        <div className="flow-arrow" />
                        <div className="flow-node flow-node-success">Subscription active<span className="flow-node-sub">Premium unlocked</span></div>
                        <div className="flow-arrow" />
                        <div className="flow-end-label">Redirected to content</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </section>

              <div className="project-summary-divider" aria-hidden="true" />
              </>
            ) : null}

            {isAlMaha ? (
              <>
              <div className="project-summary-divider" aria-hidden="true" />
              {/* ── User Journey Map ── */}
              <section id="cs-journey" className="almaha-section almaha-journey">
                <Reveal className="almaha-section-inner">
                  <span className="almaha-section-number">User Journey Map - Visitor (Before, During, After)</span>
                  <div className="journey-map-v2-wrap">
                    <div className="journey-map-v2">
                      <div className="journey-header-row">
                        <div className="journey-header-label">Jasim&apos;s journey</div>
                        <div className="journey-phase-header-v2 phase-before">Before - Planning &amp; Arrival</div>
                        <div className="journey-phase-header-v2 phase-during">During - On the Island</div>
                        <div className="journey-phase-header-v2 phase-after">After - Post-Visit</div>
                      </div>

                      <div className="journey-body-row">
                        <div className="journey-row-label-v2">Steps</div>
                        <div className="journey-phase-cells cells-3">
                          <div className="journey-cell"><span className="journey-cell-step-num">01</span>Hears about Al Maha from friends online</div>
                          <div className="journey-cell"><span className="journey-cell-step-num">02</span>Looks up outlets &amp; tries to book restaurant</div>
                          <div className="journey-cell"><span className="journey-cell-step-num">03</span>Arrives at gate, pays entry fee</div>
                        </div>
                        <div className="journey-phase-cells cells-3">
                          <div className="journey-cell"><span className="journey-cell-step-num">04</span>Navigates island, finds desired outlet</div>
                          <div className="journey-cell"><span className="journey-cell-step-num">05</span>Makes payment at outlet via QR</div>
                          <div className="journey-cell"><span className="journey-cell-step-num">06</span>Books Al Maha Drive experience</div>
                        </div>
                        <div className="journey-phase-cells cells-2">
                          <div className="journey-cell"><span className="journey-cell-step-num">07</span>Reviews transaction history</div>
                          <div className="journey-cell"><span className="journey-cell-step-num">08</span>Scans QR to exit island</div>
                        </div>
                      </div>

                      <div className="journey-body-row">
                        <div className="journey-row-label-v2">Touchpoints</div>
                        <div className="journey-phase-cells cells-3">
                          <div className="journey-cell">Instagram / word of mouth</div>
                          <div className="journey-cell">Island website / phone call</div>
                          <div className="journey-cell">Physical gate, cash counter</div>
                        </div>
                        <div className="journey-phase-cells cells-3">
                          <div className="journey-cell">App map, on-foot signage</div>
                          <div className="journey-cell">Merchant QR scan, POS</div>
                          <div className="journey-cell">App booking, entry gate</div>
                        </div>
                        <div className="journey-phase-cells cells-2">
                          <div className="journey-cell">App transaction history</div>
                          <div className="journey-cell">Exit E-gate, QR code</div>
                        </div>
                      </div>

                      <div className="journey-body-row">
                        <div className="journey-row-label-v2">Emotion</div>
                        <div className="journey-phase-cells cells-3">
                          <div className="journey-cell"><span className="journey-emoji">🧐</span>Curious</div>
                          <div className="journey-cell"><span className="journey-emoji">😣</span>Frustrated</div>
                          <div className="journey-cell"><span className="journey-emoji">😤</span>Annoyed</div>
                        </div>
                        <div className="journey-phase-cells cells-3">
                          <div className="journey-cell"><span className="journey-emoji">😐</span>Confused</div>
                          <div className="journey-cell"><span className="journey-emoji">😌</span>Relieved</div>
                          <div className="journey-cell"><span className="journey-emoji">🤩</span>Excited</div>
                        </div>
                        <div className="journey-phase-cells cells-2">
                          <div className="journey-cell"><span className="journey-emoji">😊</span>Satisfied</div>
                          <div className="journey-cell"><span className="journey-emoji">😊</span>Content</div>
                        </div>
                      </div>

                      <div className="journey-body-row">
                        <div className="journey-row-label-v2">Pain points</div>
                        <div className="journey-phase-cells cells-3">
                          <div className="journey-cell" />
                          <div className="journey-cell"><span className="journey-cell-tag tag-pain">No online booking</span><span className="journey-sub">Restaurant only reachable by phone</span></div>
                          <div className="journey-cell"><span className="journey-cell-tag tag-pain">Cash-only gate</span><span className="journey-sub">Long queue, no digital option</span></div>
                        </div>
                        <div className="journey-phase-cells cells-3">
                          <div className="journey-cell"><span className="journey-cell-tag tag-pain">No in-app map</span><span className="journey-sub">Island difficult to navigate</span></div>
                          <div className="journey-cell"><span className="journey-cell-tag tag-pain">Balance unclear</span><span className="journey-sub">Partial payment not explained</span></div>
                          <div className="journey-cell" />
                        </div>
                        <div className="journey-phase-cells cells-2">
                          <div className="journey-cell" />
                          <div className="journey-cell" />
                        </div>
                      </div>

                      <div className="journey-body-row">
                        <div className="journey-row-label-v2">Opportunities</div>
                        <div className="journey-phase-cells cells-3">
                          <div className="journey-cell"><span className="journey-cell-tag tag-opp">Social sharing</span><span className="journey-sub">Pre-visit discovery via app</span></div>
                          <div className="journey-cell"><span className="journey-cell-tag tag-opp">In-app booking</span><span className="journey-sub">Discover + reserve before arriving</span></div>
                          <div className="journey-cell"><span className="journey-cell-tag tag-opp">Digital entry</span><span className="journey-sub">QR gate, credits auto-loaded</span></div>
                        </div>
                        <div className="journey-phase-cells cells-3">
                          <div className="journey-cell"><span className="journey-cell-tag tag-opp">Map + categories</span><span className="journey-sub">Outlet map with filters</span></div>
                          <div className="journey-cell"><span className="journey-cell-tag tag-opp">Wallet clarity</span><span className="journey-sub">Balance visible before scan</span></div>
                          <div className="journey-cell"><span className="journey-cell-tag tag-opp">Drive booking</span><span className="journey-sub">In-app with vehicle details</span></div>
                        </div>
                        <div className="journey-phase-cells cells-2">
                          <div className="journey-cell"><span className="journey-cell-tag tag-opp">History</span><span className="journey-sub">Full transaction log</span></div>
                          <div className="journey-cell"><span className="journey-cell-tag tag-opp">Fast exit</span><span className="journey-sub">QR E-gate, no queue</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </section>

              <div className="project-summary-divider" aria-hidden="true" />
              {/* ── Information Architecture  - Sitemap ── */}
              <section id="cs-ia" className="almaha-section almaha-ia">
                <Reveal className="almaha-section-inner">
                  <span className="almaha-section-number">Information Architecture - Sitemap</span>
                  <div className="ia-tree">
                    <div className="ia-tree-top">
                      <div className="ia-tree-app-pill app-customer">Customer App</div>
                      <div className="ia-tree-app-pill app-merchant">Merchant App</div>
                      <div className="ia-tree-app-pill app-admin">Admin Portal</div>
                    </div>

                    <div className="ia-tree-connector" />

                    <div className="ia-tree-level">
                      <div className="ia-tree-app-group">
                        <div className="ia-tree-nav-row">
                          {["Home", "QR Code", "Booking", "Profile", "About"].map((n) => (
                            <span key={n} className="ia-tree-nav-chip chip-customer">{n}</span>
                          ))}
                        </div>
                        <div className="ia-tree-sub-row">
                          {["Wallet", "Add $", "History", "Outlets", "Drive", "WW"].map((n) => (
                            <span key={n} className="ia-tree-sub-chip">{n}</span>
                          ))}
                        </div>
                      </div>
                      <div className="ia-tree-app-group">
                        <div className="ia-tree-nav-row">
                          {["Login", "Home", "Scan"].map((n) => (
                            <span key={n} className="ia-tree-nav-chip chip-merchant">{n}</span>
                          ))}
                        </div>
                        <div className="ia-tree-sub-row">
                          {["Payment", "Entry", "Card link"].map((n) => (
                            <span key={n} className="ia-tree-sub-chip">{n}</span>
                          ))}
                        </div>
                      </div>
                      <div className="ia-tree-app-group">
                        <div className="ia-tree-nav-row">
                          {["Login", "Reports", "Promo"].map((n) => (
                            <span key={n} className="ia-tree-nav-chip chip-admin">{n}</span>
                          ))}
                        </div>
                        <div className="ia-tree-sub-row">
                          {["Txn mgmt", "Export", "Push ntf"].map((n) => (
                            <span key={n} className="ia-tree-sub-chip">{n}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="ia-tree-connector" />

                    <div className="ia-tree-section-row">
                      <div className="ia-tree-section-group">
                        <span className="ia-tree-section-title">Onboarding</span>
                        <div className="ia-tree-sub-row">
                          {["Sign up / OTP verify", "Create 4-digit PIN", "Login (email + PIN)", "Forgot PIN flow"].map((n) => (
                            <span key={n} className="ia-tree-sub-chip">{n}</span>
                          ))}
                        </div>
                      </div>
                      <div className="ia-tree-section-group">
                        <span className="ia-tree-section-title">Merchant login</span>
                        <div className="ia-tree-sub-row">
                          {["Mobile OTP", "Pre-registered"].map((n) => (
                            <span key={n} className="ia-tree-sub-chip">{n}</span>
                          ))}
                        </div>
                        <span className="ia-tree-section-title">Payment scenarios</span>
                        <div className="ia-tree-sub-row">
                          {["Full pay", "Partial", "Insufficient"].map((n) => (
                            <span key={n} className="ia-tree-sub-chip">{n}</span>
                          ))}
                        </div>
                      </div>
                      <div className="ia-tree-section-group">
                        <span className="ia-tree-section-title">Admin sections</span>
                        <div className="ia-tree-sub-row">
                          {["Dashboard", "User mgmt", "Reports", "Campaigns"].map((n) => (
                            <span key={n} className="ia-tree-sub-chip">{n}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="ia-tree-legend">
                      <span><span className="ia-legend-dot dot-customer" /> Customer App</span>
                      <span><span className="ia-legend-dot dot-merchant" /> Merchant App</span>
                      <span><span className="ia-legend-dot dot-admin" /> Admin Portal</span>
                      <span><span className="ia-legend-dot dot-sub" /> Sub-screens / states</span>
                    </div>
                  </div>
                </Reveal>
              </section>
              </>
            ) : null}

            {isAlMaha ? (
              <>
              <div className="project-summary-divider" aria-hidden="true" />
              {/* ── Key User Flows ── */}
              <section id="cs-flows" className="almaha-section almaha-flows">
                <Reveal className="almaha-section-inner">
                  <span className="almaha-section-number">Key User Flows - QR Payment &amp; Island Entry</span>
                  <div className="flows-two-col">
                    <div>
                      <p className="flow-title">Flow 1 - Island entry</p>
                      <div className="flow-chart">
                        <div className="flow-node flow-node-start">Visitor arrives at gate</div>
                        <div className="flow-arrow" />
                        <div className="flow-node flow-node-action">Opens Al Maha app<span className="flow-node-sub">Tap QR Code tab</span></div>
                        <div className="flow-arrow" />
                        <div className="flow-node flow-node-decision">Prior booking?<span className="flow-node-sub">System checks</span></div>
                        <div className="flow-arrow" />
                        <div className="flow-branch-labels">
                          <span className="flow-branch-label">Yes</span>
                          <span className="flow-branch-label">No</span>
                        </div>
                        <div className="flow-branch-row">
                          <div className="flow-branch-col">
                            <div className="flow-node flow-node-success">QR generated<span className="flow-node-sub">Booking verified</span></div>
                          </div>
                          <div className="flow-branch-col">
                            <div className="flow-node flow-node-payment">Pay 300 QAR<span className="flow-node-sub">Via SkipCash</span></div>
                            <div className="flow-arrow" />
                            <div className="flow-node flow-node-action">Credits loaded<span className="flow-node-sub">300 QAR → credits</span></div>
                          </div>
                        </div>
                        <div className="flow-arrow" />
                        <div className="flow-node flow-node-action">Security scans QR<span className="flow-node-sub">Merchant app validates</span></div>
                        <div className="flow-arrow" />
                        <div className="flow-end-label">Entry granted - gate opens</div>
                      </div>
                    </div>

                    <div>
                      <p className="flow-title">Flow 2 - Wallet payment</p>
                      <div className="flow-chart">
                        <div className="flow-node flow-node-start">Customer at outlet</div>
                        <div className="flow-arrow" />
                        <div className="flow-node flow-node-action">Merchant scans QR<span className="flow-node-sub">Customer app QR code</span></div>
                        <div className="flow-arrow" />
                        <div className="flow-node flow-node-action">Balance shown<span className="flow-node-sub">Merchant inputs amount</span></div>
                        <div className="flow-arrow" />
                        <div className="flow-node flow-node-decision">Amount vs balance?<span className="flow-node-sub">3 scenarios</span></div>
                        <div className="flow-arrow" />
                        <div className="flow-three-branch">
                          <div className="flow-branch-col">
                            <span className="flow-branch-label">Full</span>
                            <div className="flow-node flow-node-success">Full deduct<span className="flow-node-sub">Barcode gen</span></div>
                          </div>
                          <div className="flow-branch-col">
                            <span className="flow-branch-label">Partial</span>
                            <div className="flow-node flow-node-payment">Part deduct<span className="flow-node-sub">Split payment</span></div>
                          </div>
                          <div className="flow-branch-col">
                            <span className="flow-branch-label">Over</span>
                            <div className="flow-node flow-node-error">Error shown<span className="flow-node-sub">Insufficient</span></div>
                            <div className="flow-side-label">Retry or top up</div>
                          </div>
                        </div>
                        <div className="flow-arrow" />
                        <div className="flow-node flow-node-neutral">2D barcode generated<span className="flow-node-sub">POS reads barcode</span></div>
                        <div className="flow-arrow" />
                        <div className="flow-end-label">Transaction complete</div>
                      </div>
                    </div>
                  </div>

                  <div className="flow-stories-section">
                    <p className="flow-stories-title">User Story acceptance criteria (from FRD)</p>
                    <div className="flow-stories-row">
                      <div className="flow-story-pill story-blue">
                        <h6>Story 1 - Entry access</h6>
                        <span>New visitor, prior booking, prime member scenarios</span>
                      </div>
                      <div className="flow-story-pill story-teal">
                        <h6>Story 3 - Wallet top-up</h6>
                        <span>Credit card, internet banking, physical card scan</span>
                      </div>
                      <div className="flow-story-pill story-orange">
                        <h6>Story 5 - Booking</h6>
                        <span>Outlet reservation, Drive, Winter Wonderland</span>
                      </div>
                      <div className="flow-story-pill story-green">
                        <h6>Story 4 - Payment</h6>
                        <span>Full, partial, insufficient wallet scenarios</span>
                      </div>
                    </div>
                    <p className="flow-rules-text">
                      OTP validation · Field rules (name 4–15 chars, mobile 8 digits, OTP 4 digits) · Max 3 incorrect OTP attempts<br />
                      Wallet PIN required for payment · Confirmation email · Drive booking · Push notification on transaction
                    </p>
                  </div>
                </Reveal>
              </section>

              <div className="project-summary-divider" aria-hidden="true" />
              {/* ── User Quotes ── */}
              <section id="cs-quotes" className="almaha-section almaha-quotes">
                <Reveal className="almaha-section-inner">
                  <span className="almaha-section-number">User Quotes</span>
                  <div className="quotes-grid-v2">
                    {[
                      {
                        quote: "I waited 20 minutes at the entry gate because the card machine was down. By the time I got in, my kids were upset and I’d missed our restaurant booking window.",
                        name: "Jasim, 32",
                        role: "Repeat visitor",
                        tag: "Pain: entry friction",
                        tagClass: "quote-tag-pain",
                      },
                      {
                        quote: "I didn’t know the 300 riyal entry fee turns into credits I can spend inside. No one explained that. I was walking around thinking I’d wasted money at the gate.",
                        name: "Layla, 28",
                        role: "First-time visitor",
                        tag: "Insight: credits unclear",
                        tagClass: "quote-tag-insight",
                      },
                      {
                        quote: "The cashier at Billionaire scanned my card and it just beeped. He didn’t know if it worked or not. We stood there for 5 minutes while he called someone to check the system.",
                        name: "Ahmed, 35",
                        role: "Luxury dining visitor",
                        tag: "Pain: merchant UX",
                        tagClass: "quote-tag-pain",
                      },
                      {
                        quote: "I booked a table at Carbone by calling three times. The first two times nobody picked up. If there was an app I could just book myself in 30 seconds.",
                        name: "Sara, 29",
                        role: "Al Maha Drive visitor",
                        tag: "Need: in-app booking",
                        tagClass: "quote-tag-need",
                      },
                      {
                        quote: "When a customer’s wallet doesn’t have enough, I enter an amount anyway and then the machine rejects it. We end up in an awkward negotiation at the POS in front of a queue.",
                        name: "Fatima, 26",
                        role: "Merchant cashier",
                        tag: "Pain: partial payment",
                        tagClass: "quote-tag-pain",
                      },
                      {
                        quote: "We had a promotion for 30% off at Nammos but the only way to tell people was a WhatsApp broadcast. Half the visitors never saw it. A push notification would fix this instantly.",
                        name: "Khalid, 41",
                        role: "Island operations manager",
                        tag: "Opportunity: campaigns",
                        tagClass: "quote-tag-opportunity",
                      },
                    ].map((q) => (
                      <div key={q.name} className="quote-card-v2">
                        <span className="quote-card-v2-mark" aria-hidden="true">&ldquo;</span>
                        <blockquote>{q.quote}</blockquote>
                        <div className="quote-card-v2-footer">
                          <span className="quote-card-v2-attribution"><strong>{q.name}</strong> &middot; {q.role}</span>
                          <span className={`quote-card-v2-tag ${q.tagClass}`}>{q.tag}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </section>
              <div className="project-summary-divider" aria-hidden="true" />
              </>
            ) : null}

            <section className="case-section case-section-summary case-section-summary-extended">
              <Reveal className="project-detail-grid">
                <article id="cs-improvements" className="project-detail-card">
                  <h3>Key UX Improvements</h3>
                  <ul>
                    {caseStudy.improvements.map((item) => (
                      <li key={item.title}>
                        <strong>{item.title}:</strong> {item.description}
                      </li>
                    ))}
                  </ul>
                </article>

                <article id="cs-outcome" className="project-detail-card">
                  <h3>Outcome</h3>
                  <p>{caseStudy.outcome}</p>
                  <p className="project-detail-subtitle">Key impact areas:</p>
                  <ul>
                    {caseStudy.expectedImpact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>

                <article id="cs-visuals" className="project-detail-card">
                  <h3>{caseStudy.visualStrategyTitle ?? "Visual Gallery Captions"}</h3>
                  <ul>
                    {caseStudy.galleryCaptions.map((caption) => (
                      <li key={caption}>{caption}</li>
                    ))}
                  </ul>
                </article>

                <article id="cs-learnings" className="project-detail-card">
                  <h3>Why This Work Matters</h3>
                  <p>{caseStudy.whyThisMatters}</p>
                </article>
              </Reveal>
            </section>
          </>
        ) : project ? (
          <Reveal className="project-detail-grid">
            <article className="project-detail-card">
              <h3>Overview</h3>
              <p>
                This case study page is using placeholder content for now. It will later include
                final business context, user goals, and project scope details.
              </p>
            </article>
            <article className="project-detail-card">
              <h3>Problem Statement</h3>
              <p>
                Users faced friction while navigating key journeys. The design objective was to
                improve clarity, reduce drop-offs, and create a consistent cross-device experience.
              </p>
            </article>
            <article className="project-detail-card">
              <h3>Process</h3>
              <p>
                Research insights, journey mapping, wireframing, hi-fi exploration, and rapid
                validation with stakeholders informed each design decision.
              </p>
            </article>
            <article className="project-detail-card">
              <h3>Outcome</h3>
              <p>
                Dummy outcome metrics: +22% engagement, -18% task completion time, and stronger
                design-to-development alignment.
              </p>
            </article>
          </Reveal>
        ) : null}
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function App() {
  const [{ pathname, projectSlug }, setRouteState] = useState(getRouteState);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [pdfSrc, setPdfSrc] = useState(null);
  const selectedProject = projectItems.find((item) => item.slug === projectSlug) ?? null;

  useEffect(() => {
    if (!pdfSrc) return undefined;
    const handleKey = (e) => {
      if (e.key === "Escape") setPdfSrc(null);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [pdfSrc]);

  useEffect(() => {
    const handlePopState = () => {
      setRouteState(getRouteState());
      setMenuOpen(false);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsEntering(false);
    }, 2200);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!pdfSrc || typeof document === "undefined") {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setPdfSrc(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pdfSrc]);

  return (
    <div className={`page ${isEntering ? "app-entering" : "app-entered"}`.trim()}>
      {pdfSrc ? (
        <div className="pdf-viewer-overlay" role="dialog" aria-modal="true" aria-label="Project visuals PDF">
          <button
            type="button"
            className="pdf-viewer-close"
            onClick={() => setPdfSrc(null)}
            aria-label="Close PDF viewer"
          >
            &times;
          </button>
          <iframe
            className="pdf-viewer-frame"
            src={`${pdfSrc}#toolbar=0&navpanes=0&scrollbar=1&view=Fit&zoom=page-fit`}
            title="Project Visuals"
          />
        </div>
      ) : null}

      <div className={`entry-overlay ${isEntering ? "entry-overlay-visible" : "entry-overlay-hidden"}`} aria-hidden="true">
        <div className="entry-overlay-inner">
          <span className="entry-dot" />
          <p className="entry-name">Abhinandan Singh</p>
          <p className="entry-role">Senior Product Designer</p>
        </div>
      </div>

      <CustomCursor />
      <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main
        key={`${pathname}-${projectSlug ?? ""}`}
        className="content page-stage"
        aria-hidden={menuOpen}
        inert={menuOpen ? "" : undefined}
      >
        {pathname === "/" ? <HomePage /> : null}
        {pathname === "/resume" ? <ResumePage /> : null}
        {pathname === "/projects" ? <ProjectsPage /> : null}
        {pathname === "/project-details" ? (
          <ProjectDetailsPage
            project={selectedProject}
            projectSlug={projectSlug}
            onOpenPdf={setPdfSrc}
          />
        ) : null}
        {pathname === "/contact" ? <ContactPage /> : null}
      </main>
    </div>
  );
}
