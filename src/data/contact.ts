import { Code2, Bot, Smartphone, Palette, Database, Cloud, Mail, Phone, MapPin, Clock } from "lucide-react";

export const contactServices = [
  { value: "web-development", label: "Web Development", icon: Code2 },
  { value: "ai-chatbot", label: "AI Chatbot", icon: Bot },
  { value: "mobile-app", label: "Mobile App", icon: Smartphone },
  { value: "ui-ux-design", label: "UI/UX Design", icon: Palette },
  { value: "api-development", label: "API Development", icon: Database },
  { value: "cloud-solutions", label: "Cloud Solutions", icon: Cloud },
];

export const budgetRanges = [
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
