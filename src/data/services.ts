import { Code2, Bot, Smartphone, Palette, Database, Cloud, Zap, Rocket } from "lucide-react";
import webDevImage from "@/assets/services/web-dev.jpg";
import aiChatbotImage from "@/assets/services/ai-chatbot.jpg";
import mobileAppImage from "@/assets/services/mobile-app.jpg";
import uiUxImage from "@/assets/services/ui-ux.jpg";

export const servicesHighlight = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "MERN stack applications with modern architecture",
    image: webDevImage,
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Intelligent automation for customer service",
    image: aiChatbotImage,
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "iOS & Android apps with native performance",
    image: mobileAppImage,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful interfaces that convert",
    image: uiUxImage,
  },
];

export const servicesDetailed = [
  {
    slug: "web-development",
    icon: Code2,
    title: "Full-Stack Web Development",
    subtitle: "MERN Stack Specialists",
    description:
      "Complete web applications built with MongoDB, Express.js, React, and Node.js. Scalable, secure, and performance-optimized solutions.",
    features: [
      "React & Next.js Frontend",
      "Node.js & Express Backend",
      "MongoDB Database Design",
      "RESTful API Development",
      "Authentication & Security",
      "Real-time Features",
    ],
    pricing: "From $500 – $1,000",
    timeline: "4-12 weeks",
    popular: true,
  },
  {
    slug: "ai-chatbot",
    icon: Bot,
    title: "AI Chatbot Development",
    subtitle: "Intelligent Automation",
    description:
      "Custom AI chatbots powered by GPT and machine learning to automate customer service and boost engagement.",
    features: [
      "GPT-4 Integration",
      "Natural Language Processing",
      "Multi-platform Deployment",
      "Conversation Analytics",
      "24/7 Customer Support",
      "Custom Training Data",
    ],
    pricing: "From $800 – $5,000",
    timeline: "3-8 weeks",
    popular: false,
  },
  {
    slug: "mobile-app",
    icon: Smartphone,
    title: "Mobile App Development",
    subtitle: "iOS & Android",
    description:
      "Native and cross-platform mobile applications with seamless user experiences and powerful functionality.",
    features: [
      "React Native Development",
      "iOS Native (Swift)",
      "Android Native (Kotlin)",
      "Cross-platform Solutions",
      "App Store Deployment",
      "Push Notifications",
    ],
    pricing: "From $3,000 – $10,000",
    timeline: "6-16 weeks",
    popular: false,
  },
  {
    slug: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design & Branding",
    subtitle: "Beautiful Interfaces",
    description:
      "User-centered design that converts. From wireframes to pixel-perfect interfaces that users love.",
    features: [
      "User Research & Testing",
      "Wireframing & Prototyping",
      "Visual Design System",
      "Brand Identity Design",
      "Responsive Design",
      "Design System Creation",
    ],
    pricing: "From $500 – $2,500",
    timeline: "2-6 weeks",
    popular: false,
  },
  {
    slug: "api-development",
    icon: Database,
    title: "Custom API Development",
    subtitle: "Seamless Integrations",
    description:
      "Robust APIs and third-party integrations to connect your systems and automate workflows.",
    features: [
      "RESTful API Design",
      "GraphQL Implementation",
      "Third-party Integrations",
      "Database Optimization",
      "API Documentation",
      "Security Implementation",
    ],
    pricing: "From $500 – $2,000",
    timeline: "2-4 weeks",
    popular: false,
  },
  {
    slug: "cloud-devops",
    icon: Cloud,
    title: "Cloud Solutions & DevOps",
    subtitle: "Scalable Infrastructure",
    description:
      "Cloud deployment, CI/CD pipelines, and infrastructure management for reliable, scalable applications.",
    features: [
      "AWS/GCP/Azure Deployment",
      "Docker Containerization",
      "CI/CD Pipeline Setup",
      "Monitoring & Analytics",
      "Auto-scaling Solutions",
      "Security Best Practices",
    ],
    pricing: "From $300 – $800/month",
    timeline: "1-3 weeks",
    popular: false,
  },
];

export const processSteps = [
  {
    icon: Zap,
    title: "Discovery & Planning",
    description: "We analyze your requirements and create a detailed project roadmap.",
  },
  {
    icon: Palette,
    title: "Design & Prototype",
    description: "User-centered design and interactive prototypes for validation.",
  },
  {
    icon: Code2,
    title: "Development & Testing",
    description: "Agile development with regular updates and comprehensive testing.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "Seamless deployment and ongoing maintenance support.",
  },
];
