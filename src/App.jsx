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

    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
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
            <span className="brand-tagline">Senior UX/UI Designer</span>
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
            <a aria-label="Behance" href="https://www.behance.net/" target="_blank" rel="noreferrer">
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
              I&apos;m Abhinandan, a Senior UX/UI Designer with 6+ years shaping digital
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
            <DownloadResumeIcon />
            Download Resume
          </a>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

function ProjectDetailsPage({ project, projectSlug, onOpenPdf }) {
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
                  <p className="case-hero-eyebrow">
                    {project?.index ?? "--"} / {projectName} Case Study
                  </p>
                  <h3>{caseStudy.projectTitle}</h3>
                  <p className="case-hero-subtitle">{caseStudy.projectTagline}</p>
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

                <div className="project-summary-divider" aria-hidden="true" />

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

                <div className="project-summary-divider" aria-hidden="true" />

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
  const [isEntering, setIsEntering] = useState(true);
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

      <main key={`${pathname}-${projectSlug ?? ""}`} className="content page-stage">
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
