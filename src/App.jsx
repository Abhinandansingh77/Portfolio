import { useEffect, useRef, useState } from "react";
import heroImg from "../Assets/Hero img.webp";
import profilePhoto from "../Assets/profile photo.png";
import aiWorkflowImg1 from "../Assets/ai & workflow img 1.webp";
import aiWorkflowImg2 from "../Assets/ai & workflow img 2.webp";
import aiWorkflowImg3 from "../Assets/ai & workflow img 3.webp";
import featuredWorkImg1 from "../Assets/Featured work img 1.webp";
import featuredWorkImg2 from "../Assets/Featured work img 2.webp";
import featuredWorkImg3 from "../Assets/Featured work img 3.webp";
import featuredWorkImg4 from "../Assets/Featured work img 4.webp";
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

const navItems = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const valuePillars = [
  {
    title: "UX Research & Strategy",
    description:
      "User interviews, usability testing, competitive benchmarking, information architecture, and heuristic evaluation.",
  },
  {
    title: "UI Design & Prototyping",
    description:
      "High-fidelity UI design, interactive prototypes, and responsive design across web, mobile, and TV platforms.",
  },
  {
    title: "Design Systems & Handoff",
    description:
      "Scalable component libraries in Figma, Zeplin handoff, and WCAG 2.1 AA accessibility compliance.",
  },
];

const experienceItems = [
  {
    range: "Mar 2024 - Present",
    company: "Cardinal Health",
    role: "Senior UX/UI Designer",
    logo: cardinalHealthLogo,
    description:
      "Leading end-to-end product design for Order Express, a B2B healthcare e-commerce platform serving hospitals and pharmacies across the U.S. Responsibilities span UX research, dashboard design, transactional flow design, component library management in Figma, and WCAG 2.1 AA accessibility compliance. Working within Agile sprint cycles with cross-functional teams of PMs and engineers.",
    highlights: ["28% ↑ order completion", "35% ↓ handoff time", "WCAG 2.1 AA compliant"],
  },
  {
    range: "Sep 2022 - Jan 2024",
    company: "Robosoft Technology",
    role: "Lead UX/UI Designer",
    logo: robosoftLogo,
    description:
      "Designed OTT and premium lifestyle platforms for global audiences including Discovery+, Willow TV, and Al Maha Island Lusail. Delivered cohesive cross-device experiences across TV, mobile, and desktop, from research and IA through to scalable UI frameworks and developer handoff.",
    highlights: ["40% ↓ new screen design time via reusable UI frameworks"],
  },
  {
    range: "Oct 2021 - Sep 2022",
    company: "Deloitte (Contract)",
    role: "UX/UI Designer",
    logo: deloitteLogo,
    description:
      "Proficient in creating prototypes, gathering client feedback, finalising designs on Zeplin, and collaborating with international teams. Skilled in understanding diverse cultural nuances and adapting designs accordingly.",
  },
  {
    range: "Jan 2020 - Oct 2021",
    company: "Eclerx Pvt. Ltd",
    role: "Senior Analyst",
    logo: eclerxLogo,
    description:
      "Visual Designer skilled in creating production-ready assets for clients like Radisson, DFS, Sephora, and Dell. Specialises in tailored social media ads and collaborative content creation.",
  },
  {
    range: "Jan 2018 - Dec 2019",
    company: "Burda Druck Pvt. Ltd",
    role: "Jr. Creative Designer",
    logo: burdaLogo,
    description:
      "Responsive for magazine cover pages and ads, with expertise in creating graphic user interfaces for desktop browsers and mobile devices. Collaborated closely with product managers and software engineers for seamless integration of designs.",
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

const skillItems = [
  { name: "Figma", caption: "UI Design, Prototyping", logo: figmaLogo },
  { name: "Adobe XD", caption: "UI Design, Prototyping", logo: xdLogo },
  { name: "Miro", caption: "UX Design, Brainstorming", logo: miroLogo },
  { name: "Photoshop", caption: "Graphic Elements", logo: photoshopLogo },
  { name: "Illustrator", caption: "Logo, Icon Design", logo: illustratorLogo },
  { name: "Keynote", caption: "Design Presentation", logo: keynoteLogo },
  { name: "HTML 5", caption: "Structural Design", logo: htmlLogo },
  { name: "CSS 3", caption: "Style Design", logo: cssLogo },
];

const projectItems = [
  {
    index: "01",
    slug: "cardinal-health-procurement-platform",
    titleImage: cardinalHealthProjectLogo,
    titleAlt: "Cardinal Health",
    title: "Cardinal Health",
    category: "Healthcare • B2B Platform",
    stats: ["+28% Order Completion", "35% Faster Handoff"],
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
    category: "Media • OTT Platform",
    stats: ["40% Faster UI Production", "+32% Discoverability"],
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
    category: "Mobility • Travel Platform",
    stats: ["20+ Connected Features", "5+ Touchpoints"],
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
    category: "Events • Ticketing Platform",
    stats: ["35% Faster Booking Flow", "20% Reduced Drop-offs"],
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
    category: "F&B • Mobile Experience",
    stats: ["30% Faster Checkout", "22% Reduced Drop-offs"],
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
    { label: "Role", value: "Senior UX/UI Designer" },
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
    { label: "Role", value: "Senior UX/UI Designer" },
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
    { label: "Role", value: "Senior UX/UI Designer" },
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
      description: "Connected previously fragmented touchpoints into a continuous ecosystem.",
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
      const overCard = Boolean(target?.closest?.(".featured-work-card-btn"));
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
      <header className="site-header site-header-transparent site-header-animate">
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

const featuredWorkImages = {
  "cardinal-health-procurement-platform": featuredWorkImg1,
  "discovery-plus": featuredWorkImg2,
  "brightline-future-travel": featuredWorkImg3,
  "al-maha-island-lusail": featuredWorkImg4,
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
        <Reveal as="p" className="section-kicker">Resume</Reveal>

        <Reveal className="about-resume-block">
          <div className="section-label">
            <h2>About Me</h2>
          </div>
          <div className="about-resume-copy">
            <p>
              I&apos;m a Senior UX/UI Designer based in Chandigarh, with over 6 years of
              experience designing digital products that are intuitive, accessible, and
              built to scale.
            </p>
            <p>
              My work spans B2B enterprise platforms, global OTT services, and consumer
              apps, from designing Order Express for Cardinal Health (a procurement
              platform used by U.S. hospitals and pharmacies) to shaping the Discovery+
              streaming experience across TV, mobile, and desktop.
            </p>
            <p>
              I&apos;m fluent in the full design cycle: user research and stakeholder
              interviews, information architecture, wireframing and prototyping in Figma,
              and pixel-perfect developer handoff via Zeplin. I&apos;m also a strong
              advocate for accessibility, all my work is built to WCAG 2.1 AA standards.
            </p>
            <p>
              When I&apos;m not designing products, I&apos;m thinking about how to make the
              next one better.
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

        <Reveal className="timeline-block">
          <div className="section-label">
            <h2>
              <span className="heading-line">Education &amp;</span>
              <span className="heading-line">Certificates</span>
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
          <div className="skills-grid">
            {skillItems.map((skill, index) => (
              <Reveal as="article" key={skill.name} className="skill-card" delay={index * 55}>
                <img className="skill-image" src={skill.logo} alt={`${skill.name} logo`} />
                <h3>{skill.name}</h3>
                <p>{skill.caption}</p>
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

              <button
                type="button"
                className="project-preview-wrap"
                onClick={() => navigateTo(`/projects/${item.slug}`)}
                aria-label={`View ${item.title} case study`}
              >
                <img className="project-preview-image" src={item.preview} alt={`${item.titleAlt} preview`} />
              </button>

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

          <a className="contact-call" href="tel:+919097168852">
            Call +91 9097168852
          </a>

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

function CardinalHealthCaseStudyPage() {
  const scrollToAnchor = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page-view case-study-template">
      {/* 1. Header Navigation Back Button & Hero */}
      <section className="cs-hero-section">
        <Reveal className="cs-back-bar" delay={40}>
          <button
            type="button"
            className="cs-back-button"
            onClick={() => navigateTo("/projects")}
          >
            <span aria-hidden="true">←</span>
            <span>Back to Selected Work</span>
          </button>
        </Reveal>

        <Reveal className="cs-header-content" delay={100}>
          <span className="cs-tag-pill">HEALTHCARE / B2B ENTERPRISE / DESIGN SYSTEMS</span>
          <h1 className="cs-main-title">Cardinal Health — Order Express Redesign</h1>
          <p className="cs-main-subtitle">
            Redesigning a large-scale B2B healthcare ordering and inventory management system used by thousands of pharmacies and hospitals.
          </p>

          {/* 4-Column Metadata Grid */}
          <div className="cs-metadata-grid">
            <div className="cs-meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">Senior UX Designer</span>
            </div>
            <div className="cs-meta-item">
              <span className="meta-label">Platform</span>
              <span className="meta-value">Web Application (Desktop-first)</span>
            </div>
            <div className="cs-meta-item">
              <span className="meta-label">Scope</span>
              <span className="meta-value">Ordering Workflows, Inventory, Financial Dashboards, Design Systems</span>
            </div>
            <div className="cs-meta-item">
              <span className="meta-label">Key Tools</span>
              <span className="meta-value">Figma, Claude Code, Design Tokens, Cursor</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="cs-hero-image-box" delay={180}>
          <img
            src={cardinalHealthPreview}
            alt="Cardinal Health Order Express Platform Interface"
            className="cs-hero-img"
          />
        </Reveal>
      </section>

      {/* Sticky Sub-Navigation Anchor Bar */}
      <nav className="cs-subnav-bar" aria-label="Case study section jump links">
        <div className="cs-subnav-inner">
          <button type="button" onClick={() => scrollToAnchor("overview")}>Overview</button>
          <button type="button" onClick={() => scrollToAnchor("problem-goals")}>Problem &amp; Goals</button>
          <button type="button" onClick={() => scrollToAnchor("system-architecture")}>System Architecture</button>
          <button type="button" onClick={() => scrollToAnchor("ai-execution")}>AI &amp; Tech Execution</button>
          <button type="button" onClick={() => scrollToAnchor("business-impact")}>Business Impact</button>
        </div>
      </nav>

      {/* 2. Highlight Impact Banner (Top Metrics) */}
      <section className="cs-section cs-impact-banner">
        <Reveal className="cs-stat-grid" delay={40}>
          <div className="cs-stat-card">
            <span className="stat-number">+28%</span>
            <span className="stat-desc">Improved Order Completion Rate</span>
          </div>
          <div className="cs-stat-card">
            <span className="stat-number">-35%</span>
            <span className="stat-desc">Faster Design-to-Dev Handoff</span>
          </div>
          <div className="cs-stat-card">
            <span className="stat-number">100K+</span>
            <span className="stat-desc">Healthcare Professionals Served</span>
          </div>
          <div className="cs-stat-card">
            <span className="stat-number">WCAG 2.1 AA</span>
            <span className="stat-desc">Accessibility Compliance Achieved</span>
          </div>
        </Reveal>
      </section>

      {/* 3. Section 1: Overview & Problem & Strategic Context */}
      <section id="overview" className="cs-section">
        <div className="cs-container">
          <Reveal className="cs-content-block" delay={40}>
            <span className="cs-section-label">01 / CONTEXT &amp; OVERVIEW</span>
            <h2 className="cs-section-heading">High-Stakes Enterprise Healthcare Procurement</h2>
            <p className="cs-paragraph">
              Cardinal Health’s Order Express platform processes billions in pharmaceutical and medical supply transactions annually. Used by pharmacy managers, hospital procurement officers, and healthcare staff, the platform demands zero-error accuracy, swift catalog search, and reliable inventory tracking.
            </p>
          </Reveal>

          <div id="problem-goals" className="cs-two-col-grid">
            <Reveal className="cs-info-box" delay={100}>
              <div className="info-box-icon">⚠️</div>
              <h3>The Problem Statement</h3>
              <p>
                Pharmacies faced cognitive overload due to fragmented inventory tracking, high error rates during multi-item drug orders, and inconsistent UI patterns across legacy enterprise modules that slowed daily procurement.
              </p>
            </Reveal>

            <Reveal className="cs-info-box" delay={160}>
              <div className="info-box-icon">🎯</div>
              <h3>Strategic Goals</h3>
              <ul className="cs-goals-list">
                <li>Streamline complex multi-tenant checkout &amp; reordering flows.</li>
                <li>Establish a unified, accessible, token-driven design system.</li>
                <li>Reduce operational risk by adding proactive error validation and stock notifications.</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Section 2: UX Architecture & Systems Thinking */}
      <section id="system-architecture" className="cs-section cs-section-alt">
        <div className="cs-container">
          <Reveal className="cs-content-block" delay={40}>
            <span className="cs-section-label">02 / SYSTEMS &amp; ARCHITECTURE</span>
            <h2 className="cs-section-heading">UX Architecture &amp; Systems Thinking</h2>
            <p className="cs-paragraph">
              To address scale, we decomposed the platform into core functional pillars, auditing over 120 legacy screens and consolidating them into streamlined modular flows.
            </p>
          </Reveal>

          <div className="cs-pillars-grid">
            <Reveal className="cs-pillar-card" delay={100}>
              <span className="pillar-num">01</span>
              <h3>Workflow Analysis</h3>
              <p>
                Mapped end-to-end procurement cycles from catalog search to invoice reconciliation, eliminating redundant steps and reducing cart drop-off points.
              </p>
            </Reveal>

            <Reveal className="cs-pillar-card" delay={160}>
              <span className="pillar-num">02</span>
              <h3>Information Architecture</h3>
              <p>
                Restructured dashboard modules to surface real-time stock alerts, order status updates, and critical reorder prompts directly on primary landing surfaces.
              </p>
            </Reveal>

            <Reveal className="cs-pillar-card" delay={220}>
              <span className="pillar-num">03</span>
              <h3>Component System</h3>
              <p>
                Built a robust Figma component library with strict tokens for high-density data tables, accessible filter bars, and status indicators matching WCAG 2.1 AA.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Section 3: AI-Accelerated Workflow & Engineering Handoff */}
      <section id="ai-execution" className="cs-section">
        <div className="cs-container">
          <Reveal className="cs-ai-feature-card" delay={40}>
            <div className="ai-card-header">
              <span className="ai-badge">⚡ 2026 AI-ACCELERATED TOUCHPOINT</span>
              <h2>AI-Accelerated Workflow &amp; Engineering Handoff</h2>
            </div>
            <p className="ai-card-copy">
              To accelerate execution, I leveraged AI tools (Claude &amp; Cursor) to rapidly prototype complex data-table interactions and generate design token documentation directly compatible with the frontend codebase—reducing handoff friction by 35%.
            </p>
            <div className="ai-tags-row">
              <span className="ai-tag">Claude Code Prototyping</span>
              <span className="ai-tag">Cursor IDE Integration</span>
              <span className="ai-tag">Automated Token Handoff</span>
              <span className="ai-tag">Synthetic Usability Testing</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Section 4: Key Outcomes & Lessons Learned */}
      <section id="business-impact" className="cs-section cs-section-alt">
        <div className="cs-container">
          <Reveal className="cs-content-block" delay={40}>
            <span className="cs-section-label">04 / IMPACT &amp; RETROSPECTIVE</span>
            <h2 className="cs-section-heading">Key Outcomes &amp; Lessons Learned</h2>
          </Reveal>

          <div className="cs-two-col-grid">
            <Reveal className="cs-impact-box" delay={100}>
              <h3>Measurable Business Impact</h3>
              <ul className="cs-impact-list">
                <li><strong>+28% Order Completion Rate:</strong> Accelerated pharmacy ordering workflows.</li>
                <li><strong>-35% Developer Handoff Time:</strong> Achieved through tokenized design specs.</li>
                <li><strong>Zero Compliance Violations:</strong> Passed rigorous WCAG 2.1 AA audit across all core modules.</li>
              </ul>
            </Reveal>

            <Reveal className="cs-impact-box" delay={160}>
              <h3>What I Learned</h3>
              <p className="cs-paragraph">
                Designing for high-density enterprise tools requires an unwavering focus on clarity over ornamentation. Proactive error handling and tight collaboration between product, UX, and engineering are non-negotiable when building mission-critical B2B software.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Next Project Navigation Footer */}
      <section className="cs-next-project-bar">
        <Reveal className="cs-next-inner" delay={40}>
          <span className="next-label">UP NEXT</span>
          <button
            type="button"
            className="next-project-link"
            onClick={() => navigateTo("/projects/discovery-plus")}
          >
            <span>Next Project: Discovery+ — Next-Gen OTT Experience</span>
            <span className="next-arrow" aria-hidden="true">→</span>
          </button>
        </Reveal>
      </section>
    </div>
  );
}

function ProjectDetailsPage({ project, projectSlug, onOpenPdf }) {
  const isCardinalHealth = project?.slug === "cardinal-health-procurement-platform" || projectSlug === "cardinal-health-procurement-platform";
  if (isCardinalHealth) {
    return <CardinalHealthCaseStudyPage />;
  }

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
          Case Study
        </Reveal>

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
              <div className="project-detail-cta-row">
                <button type="button" className="project-back-button" onClick={() => navigateTo("/projects")}>
                  <span aria-hidden="true">←</span>
                  Back to Works
                </button>
              </div>
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
                  <p className="case-hero-eyebrow">{projectName} Case Study</p>
                  <h1>{caseStudy.projectTitle}</h1>
                  <p className="case-hero-subtitle">{caseStudy.projectTagline}</p>
                  {caseStudy.heroSubtitle ? (
                    <p className="case-hero-supporting">{caseStudy.heroSubtitle}</p>
                  ) : null}
                  <div className="project-detail-cta-row">
                    <button type="button" className="project-back-button" onClick={() => navigateTo("/projects")}>
                      <span aria-hidden="true">←</span>
                      Back to Works
                    </button>
                    {!caseStudy.hideVisualsLink ? (
                      caseStudy.visualsPdf ? (
                        <button
                          type="button"
                          className="project-visuals-button"
                          onClick={() => onOpenPdf(caseStudy.visualsPdf)}
                        >
                          View Visuals
                          <span aria-hidden="true">↗</span>
                        </button>
                      ) : (
                        <a
                          className="project-visuals-button"
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

                <article className="project-detail-card">
                  <h3>Problem Statement</h3>
                  <p>{caseStudy.problemStatement}</p>
                </article>

                <article className="project-detail-card">
                  <h3>Goals</h3>
                  <ul>
                    {caseStudy.goals.map((goal) => (
                      <li key={goal}>{goal}</li>
                    ))}
                  </ul>
                </article>

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

                <article className="project-detail-card">
                  <h3>{caseStudy.visualStrategyTitle ?? "Visual Gallery Captions"}</h3>
                  <ul>
                    {caseStudy.galleryCaptions.map((caption) => (
                      <li key={caption}>{caption}</li>
                    ))}
                  </ul>
                </article>

                <article className="project-detail-card">
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
          <p className="entry-role">Senior UX/UI Designer</p>
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
