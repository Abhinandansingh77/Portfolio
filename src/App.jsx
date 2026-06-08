import { useEffect, useRef, useState } from "react";
import profilePhoto from "../Assets/profile photo.png";
import robosoftLogo from "../Assets/Robotosoft.svg";
import deloitteLogo from "../Assets/Delloite.svg";
import eclerxLogo from "../Assets/Eclerx.svg";
import burdaLogo from "../Assets/Burda druck.svg";
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
import cardinalHealthPreview from "../Assets/Cardinal health Preview img.jpg";
import brightlineLogo from "../Assets/Brightline_Logo.svg.png";
import brightlinePreview from "../Assets/Brightline Preview img.png";
import brightlinePdf from "../Assets/Brightline.pdf";
import resumePdf from "../Assets/Abhinandan_Singh_UX_Resume.pdf";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "Works", href: "/projects" },
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
    range: "Mar 2024 - Present",
    company: "Cardinal Health",
    role: "Senior Product Designer",
    logo: cardinalHealthLogo,
    description:
      "Leading UX/product design for Order Express, a large-scale healthcare procurement platform used by hospitals and pharmacies. Designed ordering workflows, dashboards, inventory systems, financial tracking experiences, and scalable design systems.",
    highlights: ["+28% order completion", "-35% developer handoff time", "WCAG 2.1 AA compliance"],
  },
  {
    range: "Sep 2022 - Jan 2024",
    company: "Robosoft Technologies",
    role: "Senior UX Designer",
    logo: robosoftLogo,
    description:
      "Designed OTT and consumer digital products including Discovery+, Willow TV, and Al Maha Island. Led cross-device UX across TV, mobile, and desktop ecosystems.",
    highlights: ["+40% faster new screen design", "Improved discovery & engagement flows"],
  },
  {
    range: "Oct 2021 - Sep 2022",
    company: "Deloitte",
    role: "UX/UI Designer",
    logo: deloitteLogo,
    description:
      "Designed enterprise dashboards and workflow systems for Fortune 500 environments, translating business complexity into usable product experiences.",
  },
  {
    range: "Jan 2020 - Oct 2021",
    company: "eClerx",
    role: "Senior Analyst — UX/UI",
    logo: eclerxLogo,
    description:
      "Created digital experiences for Dell, Sephora, DFS, and Radisson across campaign, landing page, and dashboard ecosystems.",
  },
  {
    range: "Jan 2018 - Dec 2019",
    company: "Burda Druck",
    role: "Graphic Designer",
    logo: burdaLogo,
    description:
      "Started in visual design before transitioning into digital product design.",
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

const impactMetrics = [
  { value: "+28%", label: "Order Completion" },
  { value: "+35%", label: "Faster Handoff" },
  { value: "+40%", label: "UI Production Speed" },
  { value: "1.5M+", label: "Platform Audience Reach" },
];

const projectItems = [
  {
    index: "01",
    slug: "cardinal-health-procurement-platform",
    titleImage: cardinalHealthProjectLogo,
    titleAlt: "Cardinal Health",
    title: "Cardinal Health",
    description:
      "Designed a large-scale healthcare procurement platform for pharmacies, improving ordering workflows, inventory management, and financial tracking across an enterprise system.",
    preview: cardinalHealthPreview,
  },
  {
    index: "02",
    slug: "discovery-plus",
    titleImage: discoveryLogo,
    titleAlt: "Discovery Plus",
    title: "Discovery Plus",
    description:
      "Redesigned a multi-device OTT platform to improve content discovery, navigation efficiency, and user engagement across TV, mobile, and web.",
    preview: discoveryPreview,
  },
  {
    index: "03",
    slug: "brightline-future-travel",
    titleImage: brightlineLogo,
    titleAlt: "Brightline Future Mobility",
    title: "Brightline Future Mobility",
    description:
      "Designed a future-ready mobility ecosystem connecting booking, smart stations, onboard services, and destination experiences into one seamless travel journey.",
    preview: brightlinePreview,
  },
  {
    index: "04",
    slug: "al-maha-island-lusail",
    titleImage: almahaLogo,
    titleAlt: "AL MAHA Island Lusail",
    title: "AL MAHA Island Lusail",
    description:
      "Designed a mobile-first booking and event discovery platform for a high-traffic entertainment destination, optimizing ticketing flows and reducing user drop-offs.",
    preview: almahaPreview,
  },
  {
    index: "05",
    slug: "mcdelivery-experience-design",
    titleImage: mcdeliveryLogo,
    titleAlt: "McDelivery Experience Design",
    title: "McDelivery Experience Design",
    description:
      "Optimizing food ordering flows to improve speed, personalization, and conversion across mobile platforms.",
    preview: mcdeliveryPreview,
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
  projectTitle: "Order Express — Healthcare Procurement Platform Redesign",
  projectTagline:
    "Redesigning a large-scale B2B healthcare ordering and inventory system used by pharmacies and hospitals.",
  quickInfo: [
    { label: "Role", value: "Senior UX Designer" },
    { label: "Platform", value: "Web Application (Desktop-first)" },
    { label: "Industry", value: "Healthcare / B2B / E-commerce" },
    { label: "Scope", value: "Ordering System, Inventory Management, Dashboards, UX Systems" },
    {
      label: "Skills",
      value: "Figma, Research, Prototyping, Design Systems, Stakeholder Collaboration",
    },
  ],
  sectionHeading:
    "Designing complex healthcare systems that improve efficiency, accuracy, and decision-making.",
  highlightMetrics: [
    "100K+ Healthcare Products",
    "10K+ Active Pharmacy Users",
    { value: "28%", label: "Improved Order", secondLine: "Completion Rate" },
    "35% Faster Design-to-Dev Handoff",
    "25% Reduced User Errors",
    { value: "Enterprise Scale", label: "Multi-role System", primaryValue: true },
  ],
  overview:
    "Cardinal Health's Order Express is a large-scale B2B platform used by pharmacies and healthcare providers to order medicines, manage inventory, and track expenses. The existing system had grown complex over time, making it difficult for users to efficiently place orders, manage stock, and track financial data. The redesign focused on simplifying workflows, improving usability, and creating a scalable system for long-term growth.",
  problemStatement:
    "The platform faced several critical usability challenges: complex ordering workflows with high cognitive load, inefficient inventory and stock management processes, poor visibility into expenses and reporting, high error rates during order placement, and inconsistent UI patterns across modules. The goal was to streamline workflows, reduce errors, and improve operational efficiency.",
  goals: [
    "Simplify ordering and checkout flows",
    "Improve inventory management experience",
    "Provide clear financial insights and reporting",
    "Reduce user errors in critical workflows",
    "Build a scalable and consistent design system",
  ],
  roleItems: [
    "Stakeholder interviews and workflow analysis",
    "UX audits and problem identification",
    "Information architecture restructuring",
    "Wireframing complex flows and dashboards",
    "High-fidelity UI design",
    "Design system creation and documentation",
    "Developer handoff and collaboration",
  ],
  process: [
    {
      title: "Workflow Analysis",
      description:
        "Mapped end-to-end user journeys including ordering, inventory tracking, and billing to identify friction points.",
    },
    {
      title: "Information Architecture",
      description:
        "Reorganized system structure to reduce complexity and improve task clarity.",
    },
    {
      title: "Dashboard & Data Design",
      description:
        "Designed dashboards to provide real-time insights into orders, expenses, and inventory.",
    },
    {
      title: "System Design",
      description:
        "Created a unified component library to ensure consistency across multiple modules.",
    },
  ],
  improvements: [
    {
      title: "Simplified Ordering Flow",
      description:
        "Reduced complexity in product selection, cart management, and checkout.",
    },
    {
      title: "Improved Inventory Management",
      description:
        "Enabled faster stock tracking and auditing with clearer system feedback.",
    },
    {
      title: "Better Financial Visibility",
      description:
        "Introduced structured dashboards for tracking expenses, invoices, and reports.",
    },
    {
      title: "Reduced User Errors",
      description:
        "Improved validation, feedback, and system clarity across workflows.",
    },
  ],
  outcome:
    "The redesign significantly improved operational efficiency and reduced friction in critical workflows across the platform.",
  expectedImpact: [
    "Increased order completion rate",
    "Reduced user errors in high-risk workflows",
    "Faster task execution across modules",
    "Improved clarity in financial and inventory tracking",
    "Reduced developer handoff time through systemization",
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
    "This project demonstrates my ability to design complex enterprise systems where accuracy, efficiency, and scalability directly impact business operations. It highlights my strength in solving high-stakes UX problems beyond visual design.",
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
    "Brightline’s future mobility concept explored how modern transportation can evolve into a fully connected, touchless, and intelligent digital ecosystem. Rather than designing a standalone booking app, the challenge was to rethink the complete traveler experience across every stage of the journey—from planning and ticketing to in-station interactions, onboard services, and destination support. The focus was to create a seamless, digitally orchestrated experience that reduces friction, improves convenience, and enhances engagement.",
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

function getRouteState() {
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
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

function getNavigationEvent() {
  if (typeof PopStateEvent === "function") {
    return new PopStateEvent("popstate");
  }

  return new Event("popstate");
}

function navigateTo(href, onDone) {
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
  if (!(target instanceof Element)) {
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
    if (window.matchMedia("(pointer: coarse)").matches) {
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

    const handlePointerOver = (event) => {
      setHoverState(Boolean(getInteractiveTarget(event.target)));
    };

    const handlePointerOut = (event) => {
      if (!event.relatedTarget) {
        setHoverState(false);
        return;
      }

      setHoverState(Boolean(getInteractiveTarget(event.relatedTarget)));
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
      document.body.classList.remove("cursor-hover", "cursor-pressed", "cursor-hidden");
    };
  }, []);

  return (
    <div className="cursor-layer" aria-hidden="true">
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}

function Reveal({ as: Tag = "div", className = "", delay = 0, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

function SiteHeader({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, setMenuOpen]);

  return (
    <>
      <header className="site-header site-header-animate">
        <button type="button" className="brand brand-button" onClick={() => navigateTo("/")}>
          <span className="brand-dot" />
          <span className="brand-copy">
            <span className="brand-name">Abhinandan Singh</span>
            <span className="brand-tagline">Senior Product Designer</span>
          </span>
        </button>

        <button
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
      </header>

      <button
        type="button"
        className={`menu-backdrop ${menuOpen ? "menu-backdrop-open" : ""}`}
        aria-label="Close navigation"
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 0 : -1}
        onClick={() => setMenuOpen(false)}
      />

      <nav
        id="site-navigation"
        className={`menu-panel ${menuOpen ? "menu-panel-open" : ""}`}
        aria-label="Primary navigation"
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
      </nav>
    </>
  );
}

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-main">
        <div>
          <h3>Phone</h3>
          <p>+91-9097168852</p>
        </div>
        <div>
          <h3>Email</h3>
          <p>abhinandansingh77@outlook.com</p>
        </div>
        <div>
          <h3>Follow Me</h3>
          <div className="socials">
            <a aria-label="Behance" href="https://www.behance.net/abhinandan77" target="_blank" rel="noreferrer">
              Be
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <div className="page-view">
      <section className="hero-section">
        <Reveal className="hero-photo-wrap" delay={60}>
          <img className="hero-photo-image" src={profilePhoto} alt="Abhinandan Singh portrait" />
        </Reveal>

        <Reveal className="hero-actions" delay={140}>
          {homeActions.map((item) => (
            <button
              key={item.label}
              type="button"
              className="circle-link"
              onClick={() => navigateTo(item.href)}
            >
              {item.label}
            </button>
          ))}
        </Reveal>

        <div className="hero-copy">
          <Reveal className="intro" delay={200}>
            <h2>Hello!</h2>
            <p>
              I&apos;m Abhinandan, a Senior Product Designer with 6+ years shaping digital
              products across healthcare, OTT/media, e-commerce, and enterprise platforms.
              I design the kind of interfaces that feel obvious to use, are a joy to look
              at, and measurably move the needle for the businesses behind them.
            </p>
            <div className="intro-actions">
              <a className="hero-button hero-button-secondary" href={resumePdf} download>
                <DownloadResumeIcon />
                Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal className="hero-title" delay={260}>
            <div>Brand &amp;</div>
            <div>
              UX/UI <span>Designer</span>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ResumePage() {
  return (
    <div className="page-view">
      <section className="resume-section">
        <Reveal as="p" className="section-kicker">Resume</Reveal>

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
          <div className="timeline-list">
            {experienceItems.map((item, index) => (
              <Reveal
                as="article"
                key={`${item.company}-${item.range}`}
                className="timeline-item"
                delay={index * 80}
              >
                <div className="timeline-meta">
                  <p className="timeline-range">{item.range}</p>
                  <div className="timeline-company">
                    {item.logo ? (
                      <img className="logo-image" src={item.logo} alt={`${item.company} logo`} />
                    ) : null}
                    <div>
                      <h3>{item.company}</h3>
                      <p>{item.role}</p>
                    </div>
                  </div>
                </div>
                <div className="timeline-content">
                  <p className="timeline-description">{item.description}</p>
                  {item.highlights?.length ? (
                    <div className="timeline-tags" aria-label={`${item.company} impact highlights`}>
                      {item.highlights.map((highlight) => (
                        <span key={highlight} className="timeline-tag">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <div className="section-divider" />

        <Reveal className="impact-block">
          <div className="section-label">
            <h2>Selected Impact</h2>
          </div>
          <div className="impact-grid">
            {impactMetrics.map((metric, index) => (
              <Reveal as="article" key={metric.label} className="impact-card" delay={index * 70}>
                <span className="impact-value">{metric.value}</span>
                <span className="impact-label">{metric.label}</span>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <div className="section-divider" />

        <Reveal className="timeline-block">
          <div className="section-label">
            <h2>
              <span className="heading-line">Education &amp;</span>
              <span className="heading-line">Learning</span>
            </h2>
          </div>
          <div className="timeline-list">
            {educationItems.map((item, index) => (
              <Reveal
                as="article"
                key={`${item.school}-${item.range}`}
                className="timeline-item timeline-item-education"
                delay={index * 80}
              >
                <p className="timeline-range">{item.range}</p>
                <div className="timeline-company timeline-company-education">
                  <img className="logo-image" src={item.logo} alt={`${item.school} logo`} />
                  <div className="timeline-education-copy">
                    <h3>{item.school}</h3>
                    <p>{item.degree}</p>
                  </div>
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
  return (
    <div className="page-view">
      <section className="projects-section">
        <Reveal as="p" className="section-kicker">Works</Reveal>

        <div className="projects-list">
          {projectItems.map((item, index) => (
            <Reveal as="article" key={item.index} className="project-row" delay={index * 90}>
              <div className="project-copy">
                <div className="project-brand">
                  <span className="project-number">{item.index}</span>
                  <img className="project-title-image" src={item.titleImage} alt={item.titleAlt} />
                </div>

                <p className="project-description">{item.description}</p>
              </div>

              <div className="project-preview-wrap">
                <img className="project-preview-image" src={item.preview} alt={`${item.titleAlt} preview`} />
              </div>

              <div className="project-link-row">
                <span className="project-line" />
                <button
                  type="button"
                  className="text-link"
                  onClick={() => navigateTo(`/projects/${item.slug}`)}
                >
                  View Case Study →
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

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

          <a className="hero-button hero-button-secondary contact-resume-cta" href={resumePdf} download>
            <DownloadResumeIcon />
            Download Resume
          </a>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

function ProjectDetailsPage({ project, onOpenPdf }) {
  const isCardinalHealth = project?.slug === "cardinal-health-procurement-platform";
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

  return (
    <div className="page-view">
      <section className="project-detail-section">
        <Reveal as="p" className="section-kicker">
          <button type="button" className="kicker-back-button" onClick={() => navigateTo("/projects")} aria-label="Back to Works">
            <span aria-hidden="true">←</span>
          </button>
          Case Study
        </Reveal>

        {!caseStudy ? (
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
            <section className="case-section case-section-hero">
              <Reveal className="case-hero-layout">
                <div className="case-hero-main">
                  <p className="case-hero-eyebrow">
                    {project?.index ?? "--"} / {projectName} Case Study
                  </p>
                  <h3>{caseStudy.projectTitle}</h3>
                  <p className="case-hero-subtitle">{caseStudy.projectTagline}</p>
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

            <section className="case-section case-section-quick-info">
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

            <section className="case-section case-section-proof-intro">
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
                <article className="project-detail-card">
                  <h3>Overview</h3>
                  <p>{caseStudy.overview}</p>
                </article>

                <div className="project-summary-divider" aria-hidden="true" />

                <article className="project-detail-card">
                  <h3>Problem Statement</h3>
                  <p>{caseStudy.problemStatement}</p>
                </article>

                <div className="project-summary-divider" aria-hidden="true" />

                <article className="project-detail-card">
                  <h3>Goals</h3>
                  <ul>
                    {caseStudy.goals.map((goal) => (
                      <li key={goal}>{goal}</li>
                    ))}
                  </ul>
                </article>

                <div className="project-summary-divider" aria-hidden="true" />

                <article className="project-detail-card">
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
              <section className="almaha-section almaha-personas">
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
              <section className="almaha-section almaha-affinity">
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
                          "“I waited 20 mins at the gate — the cash machine was broken”",
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
                          "“Cashier kept my change — I had no receipt to dispute it”",
                          "Partial payment flow unclear — customers walked away",
                          "Entry fee converting to credits was never explained",
                        ],
                      },
                      {
                        title: "Outlet discovery",
                        color: "blue",
                        quotes: [
                          "“I found Nammos by accident — I almost left the island”",
                          "“Couldn’t tell which restaurants were open before I left home”",
                          "No map — visitors wandering the island lost",
                          "Reservation process via phone call, often unanswered",
                        ],
                      },
                      {
                        title: "Booking experience",
                        color: "purple",
                        quotes: [
                          "“I booked Al Maha Drive on WhatsApp — sketchy experience”",
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
                          "POS system not connected — manual amount entry caused errors",
                          "“Customer disputes happen daily about charged amounts”",
                          "Physical card linked to wrong account twice in one week",
                        ],
                      },
                      {
                        title: "Admin & promotions",
                        color: "teal",
                        quotes: [
                          "No real-time visibility into transaction volume by outlet",
                          "“We run promotions via WhatsApp broadcast — very unreliable”",
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
              <section className="almaha-section almaha-competitive">
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
                      <span className="comp-insight-label">Opportunity &mdash; physical card bridging</span>
                      <p>No competitor supports physical NFC/QR card &rarr; digital wallet linking. This became a differentiating Al Maha feature for first-time users not yet on the app.</p>
                    </div>
                    <div className="comp-insight-card insight-opportunity">
                      <span className="comp-insight-label">Opportunity &mdash; closed ecosystem wallet</span>
                      <p>Unlike open wallets (Careem Pay), Al Maha&apos;s entry fee converts to credits &mdash; a mechanic that drives in-island spending and creates lock-in without extra cost to visitor.</p>
                    </div>
                    <div className="comp-insight-card insight-gap">
                      <span className="comp-insight-label">Gap &mdash; vehicle-specific booking UX</span>
                      <p>Benchmarks showed no good reference for car-detail registration flows. UX had to be designed from scratch: step-by-step modal, photo upload, plate entry.</p>
                    </div>
                    <div className="comp-insight-card insight-gap">
                      <span className="comp-insight-label">Gap &mdash; partial payment edge cases</span>
                      <p>Careem Pay handles split payments but not within a merchant-scan flow. All three wallet scenarios (full, partial, overspend) had no direct reference pattern to borrow from.</p>
                    </div>
                  </div>
                </Reveal>
              </section>
              <div className="project-summary-divider" aria-hidden="true" />
              </>
            ) : null}

            <section className="case-section case-section-summary case-section-summary-extended">
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

            {isAlMaha ? (
              <>
              <div className="project-summary-divider" aria-hidden="true" />
              {/* ── User Journey Map ── */}
              <section className="almaha-section almaha-journey">
                <Reveal className="almaha-section-inner">
                  <span className="almaha-section-number">User Journey Map &mdash; Visitor (Before, During, After)</span>
                  <div className="journey-map-v2-wrap">
                    <div className="journey-map-v2">
                      <div className="journey-header-row">
                        <div className="journey-header-label">Jasim&apos;s journey</div>
                        <div className="journey-phase-header-v2 phase-before">Before &mdash; Planning &amp; Arrival</div>
                        <div className="journey-phase-header-v2 phase-during">During &mdash; On the Island</div>
                        <div className="journey-phase-header-v2 phase-after">After &mdash; Post-Visit</div>
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
              {/* ── Information Architecture — Sitemap ── */}
              <section className="almaha-section almaha-ia">
                <Reveal className="almaha-section-inner">
                  <span className="almaha-section-number">Information Architecture &mdash; Sitemap</span>
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
              <section className="almaha-section almaha-flows">
                <Reveal className="almaha-section-inner">
                  <span className="almaha-section-number">Key User Flows &mdash; QR Payment &amp; Island Entry</span>
                  <div className="flows-two-col">
                    <div>
                      <p className="flow-title">Flow 1 &mdash; Island entry</p>
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
                        <div className="flow-end-label">Entry granted &mdash; gate opens</div>
                      </div>
                    </div>

                    <div>
                      <p className="flow-title">Flow 2 &mdash; Wallet payment</p>
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
                        <h6>Story 1 &mdash; Entry access</h6>
                        <span>New visitor, prior booking, prime member scenarios</span>
                      </div>
                      <div className="flow-story-pill story-teal">
                        <h6>Story 3 &mdash; Wallet top-up</h6>
                        <span>Credit card, internet banking, physical card scan</span>
                      </div>
                      <div className="flow-story-pill story-orange">
                        <h6>Story 5 &mdash; Booking</h6>
                        <span>Outlet reservation, Drive, Winter Wonderland</span>
                      </div>
                      <div className="flow-story-pill story-green">
                        <h6>Story 4 &mdash; Payment</h6>
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
              <section className="almaha-section almaha-quotes">
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
                <article className="project-detail-card">
                  <h3>Key UX Improvements</h3>
                  <ul>
                    {caseStudy.improvements.map((item) => (
                      <li key={item.title}>
                        <strong>{item.title}:</strong> {item.description}
                      </li>
                    ))}
                  </ul>
                </article>

                <div className="project-summary-divider" aria-hidden="true" />

                <article className="project-detail-card">
                  <h3>Outcome</h3>
                  <p>{caseStudy.outcome}</p>
                  <p className="project-detail-subtitle">Key impact areas:</p>
                  <ul>
                    {caseStudy.expectedImpact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>

                <div className="project-summary-divider" aria-hidden="true" />

                <article className="project-detail-card">
                  <h3>{caseStudy.visualStrategyTitle ?? "Visual Gallery Captions"}</h3>
                  <ul>
                    {caseStudy.galleryCaptions.map((caption) => (
                      <li key={caption}>{caption}</li>
                    ))}
                  </ul>
                </article>

                <div className="project-summary-divider" aria-hidden="true" />

                <article className="project-detail-card">
                  <h3>Why This Work Matters</h3>
                  <p>{caseStudy.whyThisMatters}</p>
                </article>
              </Reveal>
            </section>
          </>
        ) : (
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
        )}
      </section>

      <Footer />
    </div>
  );
}

export default function App() {
  const [{ pathname, projectSlug }, setRouteState] = useState(getRouteState);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isEntering, setIsEntering] = useState(true);
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

  return (
    <div className={`page ${isEntering ? "app-entering" : "app-entered"}`.trim()}>
      {pdfSrc ? (
        <div className="pdf-viewer-overlay">
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
            src={`${pdfSrc}#toolbar=0&navpanes=0&scrollbar=1`}
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

      <main key={`${pathname}-${projectSlug ?? ""}`} className="content page-stage">
        {pathname === "/" ? <HomePage /> : null}
        {pathname === "/resume" ? <ResumePage /> : null}
        {pathname === "/projects" ? <ProjectsPage /> : null}
        {pathname === "/project-details" ? <ProjectDetailsPage project={selectedProject} onOpenPdf={setPdfSrc} /> : null}
        {pathname === "/contact" ? <ContactPage /> : null}
      </main>
    </div>
  );
}
