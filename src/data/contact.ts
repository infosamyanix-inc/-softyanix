import { Code2, Bot, Smartphone, Palette, Database, Cloud, Mail, Phone, MapPin, Clock } from "lucide-react";

export const contactServices = [
  { value: "web-development", label: "Web Development", icon: Code2 },
  { value: "ai-chatbot", label: "AI Chatbot", icon: Bot },
  { value: "mobile-app", label: "Mobile App", icon: Smartphone },
  { value: "ui-ux-design", label: "UI/UX Design", icon: Palette },
  { value: "api-development", label: "API Development", icon: Database },
  { value: "cloud-solutions", label: "Cloud Solutions", icon: Cloud },
];

export const serviceBudgetRanges: Record<string, string[]> = {
  "web-development": [
    "< $2,000 (Landing Page)",
    "$2,000 - $8,000 (Business Website)",
    "$8,000 - $25,000 (Web App / E-Commerce)",
    "$25,000 - $75,000 (Enterprise Platform)",
    "$75,000+ (Large Scale System)",
  ],
  "mobile-app": [
    "< $5,000 (Simple App / MVP)",
    "$5,000 - $15,000 (Single Platform App)",
    "$15,000 - $40,000 (Cross-Platform App)",
    "$40,000 - $100,000 (Feature-Rich App)",
    "$100,000+ (Enterprise Mobile Solution)",
  ],
  "ai-chatbot": [
    "< $3,000 (Basic Chatbot)",
    "$3,000 - $10,000 (Custom AI Bot)",
    "$10,000 - $30,000 (Advanced NLP / GPT Integration)",
    "$30,000 - $80,000 (Enterprise AI Solution)",
    "$80,000+ (Full AI Platform)",
  ],
  "ui-ux-design": [
    "< $1,500 (Landing Page Design)",
    "$1,500 - $5,000 (App UI Design)",
    "$5,000 - $15,000 (Full Product Design System)",
    "$15,000 - $40,000 (Enterprise Design System)",
    "$40,000+ (Full Brand + Product Design)",
  ],
  "api-development": [
    "< $2,000 (Simple REST API)",
    "$2,000 - $8,000 (Complex API / Integrations)",
    "$8,000 - $25,000 (Microservices Architecture)",
    "$25,000 - $70,000 (Enterprise API Platform)",
    "$70,000+ (Large-Scale Integration)",
  ],
  "cloud-solutions": [
    "< $3,000 (Basic Cloud Setup)",
    "$3,000 - $10,000 (Cloud Migration)",
    "$10,000 - $30,000 (DevOps & CI/CD Pipeline)",
    "$30,000 - $80,000 (Full Cloud Architecture)",
    "$80,000+ (Enterprise Cloud Platform)",
  ],
};

export const defaultBudgetRanges = [
  "< $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
];

export const timelineOptions = [
  "ASAP",
  "1-2 months",
  "3-6 months",
  "6+ months",
  "Just exploring",
];

export const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    info: "infosamyanix@gmail.com",
    description: "Get a response within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    info: "+92 (315) 065-7943",
    description: "Available 9 AM - 6 PM PST",
  },
  {
    icon: MapPin,
    title: "Location",
    info: "Karachi, Sindh, Pakistan",
    description: "Remote-first, globally distributed",
  },
  {
    icon: Clock,
    title: "Response Time",
    info: "< 24 hours",
    description: "Fast turnaround guaranteed",
  },
];

export const contactBenefits = [
  "Free consultation & project analysis",
  "Detailed proposal with timeline & costs",
  "No commitment required",
  "NDA protection for your ideas",
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    rating: 5,
    text: "Softyanix delivered our e-commerce platform ahead of schedule. The quality exceeded expectations!",
  },
  {
    name: "Michael Chen",
    company: "GrowthLab",
    rating: 5,
    text: "Their AI chatbot increased our customer satisfaction by 40%. Incredible ROI!",
  },
  {
    name: "Emily Rodriguez",
    company: "DesignCo",
    rating: 5,
    text: "The mobile app they built has over 100k downloads. Professional team, amazing results.",
  },
];

export const benefits = [
  "24/7 Support & Maintenance",
  "Scalable & Secure Solutions",
  "30-Day Money Back Guarantee",
  "Agile Development Process",
  "Modern Tech Stack",
  "Performance Optimized",
];
