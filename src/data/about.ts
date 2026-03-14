import { Award, Heart, Users, TrendingUp, Lightbulb, Rocket, Code2, Database, Cloud } from "lucide-react";

export const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "3+",  label: "Years in Business" },
  { number: "20+", label: "Happy Clients" },
  { number: "24/7", label: "Client Support" },
];

export const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex problems.",
  },
  {
    icon: Heart,
    title: "Client Success",
    description: "Your success is our success. We're committed to delivering results that exceed expectations.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "We work closely with clients as partners, ensuring transparency throughout the process.",
  },
  {
    icon: Rocket,
    title: "Quality & Speed",
    description: "We deliver high-quality solutions without compromising on development speed.",
  },
];

export const techStack = [
  {
    icon: Code2,
    category: "Frontend",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    icon: Database,
    category: "Backend & Data",
    tags: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    icon: Cloud,
    category: "DevOps & Tools",
    tags: ["AWS", "Docker", "GitHub Actions", "Vercel", "Figma"],
  },
];

export const companyTimeline = [
  {
    year: "2021",
    title: "Founded",
    description: "Started as a solo React developer, delivering the first 5 client projects.",
  },
  {
    year: "2022",
    title: "Growing Services",
    description: "Expanded into Node.js backends, MongoDB, and mobile app development with React Native.",
  },
  {
    year: "2023",
    title: "AI & Scale",
    description: "Added AI chatbot integrations and cloud deployment services. Team grew to 4 developers.",
  },
  {
    year: "2024–25",
    title: "Softyanix Today",
    description: "A full-service software company trusted by clients across Pakistan, UK, and the UAE.",
  },
];
