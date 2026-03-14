import ecommerceImage from "@/assets/projects/ecommerce.jpg";
import aiBotImage from "@/assets/projects/ai-bot.jpg";
import fitnessAppImage from "@/assets/projects/fitness-app.jpg";

export const projectFilters = ["All", "Web", "Mobile", "AI", "UI/UX"];

export const projects = [
  {
    id: 1,
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    category: "Web",
    description:
      "Full-stack MERN e-commerce platform with payment integration, inventory management, and admin dashboard.",
    longDescription:
      "A comprehensive e-commerce solution built from the ground up using the MERN stack. Features include Stripe payment integration, real-time inventory tracking, a fully functional admin dashboard, and an optimized checkout flow that reduced cart abandonment by 30%.",
    image: ecommerceImage,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 2,
    slug: "ai-customer-support-bot",
    title: "AI Customer Support Bot",
    category: "AI",
    description:
      "Intelligent chatbot with GPT-4 integration, handling 80% of customer queries automatically.",
    longDescription:
      "A production-grade AI chatbot integrated directly into the client's support workflow. Powered by GPT-4 with custom fine-tuning, the bot handles over 80% of incoming queries without human intervention, reducing support costs by 60% and response times from hours to seconds.",
    image: aiBotImage,
    technologies: ["Python", "OpenAI", "React", "FastAPI", "PostgreSQL"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 3,
    slug: "fitness-tracking-app",
    title: "Fitness Tracking App",
    category: "Mobile",
    description:
      "React Native fitness app with workout tracking, progress analytics, and social features.",
    longDescription:
      "A cross-platform fitness application built with React Native for iOS and Android. Includes customizable workout plans, body measurement tracking, progress charts, and a social feed where users can share achievements. Firebase handles real-time sync across devices.",
    image: fitnessAppImage,
    technologies: ["React Native", "Firebase", "Redux", "Charts.js"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 4,
    slug: "saas-dashboard-design",
    title: "SaaS Dashboard Design",
    category: "UI/UX",
    description:
      "Modern dashboard design system for B2B SaaS platform with complex data visualization.",
    longDescription:
      "End-to-end UI/UX design for a B2B analytics SaaS platform. Delivered a full design system in Figma covering 80+ components, data-dense table views, chart libraries, and dark mode. The redesign improved user onboarding completion rate by 45%.",
    image: ecommerceImage,
    technologies: ["Figma", "React", "Tailwind", "Framer Motion"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 5,
    slug: "real-estate-platform",
    title: "Real Estate Platform",
    category: "Web",
    description:
      "Property listing platform with advanced search, virtual tours, and mortgage calculator.",
    longDescription:
      "A fully-featured property listing platform built with Next.js and Prisma. Integrates Mapbox for location-based search, supports virtual 360° tours, and includes a built-in mortgage calculator. Deployed on Vercel with ISR for fast page loads on 10,000+ listings.",
    image: ecommerceImage,
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox", "Vercel"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 6,
    slug: "restaurant-order-app",
    title: "Restaurant Order App",
    category: "Mobile",
    description:
      "Cross-platform ordering app with real-time order tracking and payment processing.",
    longDescription:
      "A Flutter-based mobile ordering app for a restaurant chain in Karachi. Real-time order status updates via Socket.io, integrated with Easypaisa and JazzCash payment gateways. Handles 200+ orders per day during peak hours with zero downtime since launch.",
    image: fitnessAppImage,
    technologies: ["Flutter", "Node.js", "Socket.io", "MongoDB"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
];
