import { FormEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Code2,
  Bot,
  Smartphone,
  Palette,
  Database,
  Cloud,
  Zap,
  Shield,
  Rocket,
  ExternalLink,
  Github,
  Filter,
  Users,
  Target,
  Award,
  TrendingUp,
  Heart,
  Lightbulb,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import webDevImage from "@/assets/services/web-dev.jpg";
import aiChatbotImage from "@/assets/services/ai-chatbot.jpg";
import mobileAppImage from "@/assets/services/mobile-app.jpg";
import uiUxImage from "@/assets/services/ui-ux.jpg";
import ecommerceImage from "@/assets/projects/ecommerce.jpg";
import aiBotImage from "@/assets/projects/ai-bot.jpg";
import fitnessAppImage from "@/assets/projects/fitness-app.jpg";

const HomePage = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState("All");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  // Services Data
  const servicesHighlight = [
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

  const servicesDetailed = [
    {
      icon: Code2,
      title: "Full-Stack Web Development",
      subtitle: "MERN Stack Specialists",
      description: "Complete web applications built with MongoDB, Express.js, React, and Node.js. Scalable, secure, and performance-optimized solutions.",
      features: [
        "React & Next.js Frontend",
        "Node.js & Express Backend",
        "MongoDB Database Design",
        "RESTful API Development",
        "Authentication & Security",
        "Real-time Features"
      ],
      pricing: "Starting from $2,999",
      timeline: "4-12 weeks",
      popular: true
    },
    {
      icon: Bot,
      title: "AI Chatbot Development",
      subtitle: "Intelligent Automation",
      description: "Custom AI chatbots powered by GPT and machine learning to automate customer service and boost engagement.",
      features: [
        "GPT-4 Integration",
        "Natural Language Processing",
        "Multi-platform Deployment",
        "Conversation Analytics",
        "24/7 Customer Support",
        "Custom Training Data"
      ],
      pricing: "Starting from $1,999",
      timeline: "3-8 weeks"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      subtitle: "iOS & Android",
      description: "Native and cross-platform mobile applications with seamless user experiences and powerful functionality.",
      features: [
        "React Native Development",
        "iOS Native (Swift)",
        "Android Native (Kotlin)",
        "Cross-platform Solutions",
        "App Store Deployment",
        "Push Notifications"
      ],
      pricing: "Starting from $4,999",
      timeline: "6-16 weeks"
    },
    {
      icon: Palette,
      title: "UI/UX Design & Branding",
      subtitle: "Beautiful Interfaces",
      description: "User-centered design that converts. From wireframes to pixel-perfect interfaces that users love.",
      features: [
        "User Research & Testing",
        "Wireframing & Prototyping",
        "Visual Design System",
        "Brand Identity Design",
        "Responsive Design",
        "Design System Creation"
      ],
      pricing: "Starting from $1,499",
      timeline: "2-6 weeks"
    },
    {
      icon: Database,
      title: "Custom API Development",
      subtitle: "Seamless Integrations",
      description: "Robust APIs and third-party integrations to connect your systems and automate workflows.",
      features: [
        "RESTful API Design",
        "GraphQL Implementation",
        "Third-party Integrations",
        "Database Optimization",
        "API Documentation",
        "Security Implementation"
      ],
      pricing: "Starting from $999",
      timeline: "2-4 weeks"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions & DevOps",
      subtitle: "Scalable Infrastructure",
      description: "Cloud deployment, CI/CD pipelines, and infrastructure management for reliable, scalable applications.",
      features: [
        "AWS/GCP/Azure Deployment",
        "Docker Containerization",
        "CI/CD Pipeline Setup",
        "Monitoring & Analytics",
        "Auto-scaling Solutions",
        "Security Best Practices"
      ],
      pricing: "Starting from $799/month",
      timeline: "1-3 weeks"
    }
  ];

  const processSteps = [
    {
      icon: Zap,
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap."
    },
    {
      icon: Palette,
      title: "Design & Prototype",
      description: "User-centered design and interactive prototypes for validation."
    },
    {
      icon: Code2,
      title: "Development & Testing",
      description: "Agile development with regular updates and comprehensive testing."
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "Seamless deployment and ongoing maintenance support."
    }
  ];

  // Testimonials
  const testimonials = [
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

  const benefits = [
    "24/7 Support & Maintenance",
    "Scalable & Secure Solutions",
    "30-Day Money Back Guarantee",
    "Agile Development Process",
    "Modern Tech Stack",
    "Performance Optimized",
  ];

  // Projects Data
  const filters = ["All", "Web", "Mobile", "AI", "UI/UX"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web",
      description: "Full-stack MERN e-commerce platform with payment integration, inventory management, and admin dashboard.",
      image: ecommerceImage,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      liveLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "AI Customer Support Bot",
      category: "AI",
      description: "Intelligent chatbot with GPT-4 integration, handling 80% of customer queries automatically.",
      image: aiBotImage,
      technologies: ["Python", "OpenAI", "React", "FastAPI", "PostgreSQL"],
      liveLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      category: "Mobile",
      description: "React Native fitness app with workout tracking, progress analytics, and social features.",
      image: fitnessAppImage,
      technologies: ["React Native", "Firebase", "Redux", "Charts.js"],
      liveLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      id: 4,
      title: "SaaS Dashboard Design",
      category: "UI/UX",
      description: "Modern dashboard design system for B2B SaaS platform with complex data visualization.",
      image: ecommerceImage,
      technologies: ["Figma", "React", "Tailwind", "Framer Motion"],
      liveLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      id: 5,
      title: "Real Estate Platform",
      category: "Web",
      description: "Property listing platform with advanced search, virtual tours, and mortgage calculator.",
      image: ecommerceImage,
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox", "Vercel"],
      liveLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      id: 6,
      title: "Restaurant Order App",
      category: "Mobile",
      description: "Cross-platform ordering app with real-time order tracking and payment processing.",
      image: fitnessAppImage,
      technologies: ["Flutter", "Node.js", "Socket.io", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  // About Data
  const stats = [
    { number: "50+", label: "Projects Delivered", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Heart },
    { number: "24/7", label: "Support Available", icon: Users },
    { number: "3+", label: "Years Experience", icon: TrendingUp }
  ];

  const skills = [
    { name: "React & Next.js", level: 95, icon: Code2 },
    { name: "Node.js & Express", level: 90, icon: Code2 },
    { name: "UI/UX Design", level: 85, icon: Palette },
    { name: "AI & Machine Learning", level: 80, icon: Bot },
    { name: "Mobile Development", level: 88, icon: Smartphone },
    { name: "Cloud & DevOps", level: 82, icon: Rocket }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex problems."
    },
    {
      icon: Heart,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering results that exceed expectations."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We work closely with clients as partners, ensuring transparency throughout the process."
    },
    {
      icon: Rocket,
      title: "Quality & Speed",
      description: "We deliver high-quality solutions without compromising on development speed."
    }
  ];

  const timeline = [
    {
      year: "2021",
      title: "The Beginning",
      description: "Started as a solo freelancer specializing in React development."
    },
    {
      year: "2022",
      title: "Expanding Horizons",
      description: "Added AI/ML and mobile app development to our service offerings."
    },
    {
      year: "2023",
      title: "Growing Team",
      description: "Formed strategic partnerships and expanded our capabilities."
    },
    {
      year: "2024",
      title: "Softyanix Today",
      description: "A trusted partner for startups and enterprises worldwide."
    }
  ];

  // Contact Data
  const contactServices = [
    { value: "web-development", label: "Web Development", icon: Code2 },
    { value: "ai-chatbot", label: "AI Chatbot", icon: Bot },
    { value: "mobile-app", label: "Mobile App", icon: Smartphone },
    { value: "ui-ux-design", label: "UI/UX Design", icon: Palette },
    { value: "api-development", label: "API Development", icon: Database },
    { value: "cloud-solutions", label: "Cloud Solutions", icon: Cloud },
  ];

  const budgetRanges = [
    "< $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
  ];

  const timelineOptions = [
    "ASAP",
    "1-2 months",
    "3-6 months",
    "6+ months",
    "Just exploring",
  ];

  const contactInfo = [
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
      title: "Visit Us",
      info: "Karachi Sindh, Pakistan",
      description: "Remote-first, globally distributed",
    },
    {
      icon: Clock,
      title: "Response Time",
      info: "< 24 hours",
      description: "Fast turnaround guaranteed",
    },
  ];

  const contactBenefits = [
    "Free consultation & project analysis",
    "Detailed proposal with timeline & costs",
    "No commitment required",
    "NDA protection for your ideas",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Network error");

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sectionByPath: Record<string, string> = {
      "/": "home",
      "/home": "home",
      "/services": "services",
      "/projects": "projects",
      "/about": "about",
      "/contact": "contact",
    };

    const sectionId = sectionByPath[location.pathname];
    if (!sectionId) return;

    const timer = setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-hover to-accent overflow-hidden"
        style={{ backgroundImage: `url(${heroImage})`, backgroundBlendMode: 'overlay', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 -left-40 w-80 h-80 bg-primary-hover/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative z-10 content-wrap text-center">
          <div className="space-y-8">
            <h1 className="heading-display text-primary-foreground mb-6 leading-tight animate-fade-in-down">
              Transforming Ideas into
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-hover to-accent-foreground animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
                Digital Reality
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/95 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-down font-light" style={{ animationDelay: '0.4s' }}>
              We focus on software-driven business growth — building scalable products, streamlining operations, and creating digital solutions that accelerate long-term success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-down" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                variant="secondary" 
                onClick={() => scrollToSection("contact")} 
                className="min-w-48 btn-glow font-semibold"
              >
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="min-w-48 border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold transition-all duration-300"
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <WhatsAppButton />
      </section>

      {/* SERVICES HIGHLIGHT SECTION */}
      <section id="services" className="section-shell section-soft scroll-mt-24">
        <div className="content-wrap">
          <div className="text-center mb-20">
            <h2 className="section-heading mb-6">
              Our Expertise
            </h2>
            <p className="section-subheading max-w-3xl mx-auto">
              We specialize in cutting-edge technologies to bring your vision to life with precision and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {servicesHighlight.map((service, index) => (
              <Card
                key={service.title}
                className="group overflow-hidden card-hover card-glow border-border/50 bg-gradient-to-br from-card via-card to-card/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-40 bg-gradient-to-br from-primary/10 to-accent/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="absolute -bottom-1 -right-1 p-3 bg-accent/90 rounded-tl-xl group-hover:bg-accent transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{service.description}</p>
                  <div className="mt-4 pt-4 border-t border-border/30 flex items-center text-accent font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {servicesDetailed.map((service, index) => (
              <Card
                key={service.title}
                className={`relative group hover:shadow-accent transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-card/95 ${service.popular ? 'ring-2 ring-accent ring-offset-2' : ''
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <Badge className="absolute -top-2 left-4 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                      <p className="text-sm text-accent font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-lg font-semibold text-accent">{service.pricing}</p>
                      <p className="text-sm text-muted-foreground">Timeline: {service.timeline}</p>
                    </div>
                  </div>

                  <Button className="w-full" onClick={() => scrollToSection("contact")}>
                    Request Proposal <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="py-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Development Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that ensures quality, transparency, and timely delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Testimonials Section */}
      <section className="section-shell section-muted">
        <div className="content-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading mb-6">
                Why Choose Softyanix?
              </h2>
              <p className="section-subheading mb-8">
                We deliver enterprise-grade solutions with startup agility.
                Your success is our priority.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-center space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.name}
                  className="animate-fade-in shadow-soft hover:shadow-medium transition-shadow"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-accent fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-4">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section-shell section-soft scroll-mt-24">
        <div className="content-wrap">
          <div className="text-center mb-20">
            <h2 className="section-heading mb-6">
              Our Projects
            </h2>
            <p className="section-subheading max-w-3xl mx-auto">
              Explore our portfolio of successful projects that showcase our expertise
              in modern web development, mobile apps, and AI solutions.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <div className="h-1 w-8 bg-gradient-to-r from-accent to-primary rounded-full" />
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden card-hover card-glow border-border/50 bg-card/95 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative overflow-hidden h-72 bg-gradient-to-br from-primary/5 to-accent/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-semibold animate-float">
                      Featured
                    </Badge>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-3">
                        <Button size="sm" variant="secondary" asChild className="rounded-full">
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View
                          </a>
                        </Button>
                        <Button size="sm" variant="secondary" asChild className="rounded-full">
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xl font-bold text-foreground flex-1">{project.title}</h3>
                      <Badge variant="outline" className="whitespace-nowrap">{project.category}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary hover:bg-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Projects with Filter */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4 sm:mb-0">All Projects</h3>
            <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-end">
              <Filter className="h-5 w-5 text-muted-foreground" />
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className="transition-all"
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.featured && (
                    <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    <Badge variant="outline" className="text-xs">{project.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="default" className="flex-1" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section-shell section-muted scroll-mt-24">
        <div className="content-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="animate-fade-in-left">
              <h2 className="section-heading mb-8">
                About Softyanix
              </h2>
              <p className="section-subheading mb-8">
                We're a passionate software house dedicated to transforming ideas into
                digital reality. From solo startup to trusted partner, we've been
                crafting exceptional digital experiences since 2021.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" onClick={() => scrollToSection("contact")} className="btn-glow font-semibold">
                  Work With Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("projects")} className="font-semibold">
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card
                    key={stat.label}
                    className="text-center p-8 hover:shadow-accent transition-all duration-300 card-glow border-border/50 bg-gradient-to-br from-card/80 to-card/40 animate-scale-in"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <CardContent className="p-0">
                      <div className="mb-4 flex justify-center">
                        <div className="p-3 bg-accent/10 rounded-xl">
                          <stat.icon className="h-8 w-8 text-accent" />
                        </div>
                      </div>
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">{stat.number}</div>
                      <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            <Card className="p-8 gradient-card shadow-medium animate-fade-in-up border-border/30 hover:shadow-accent transition-shadow duration-300 group">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300 mr-4">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses of all sizes by creating innovative, scalable,
                and user-centric digital solutions that drive growth and success in
                the modern digital landscape.
              </p>
            </Card>

            <Card className="p-8 gradient-card shadow-medium animate-fade-in-up border-border/30 hover:shadow-accent transition-shadow duration-300 group" style={{ animationDelay: "0.15s" }}>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300 mr-4">
                  <Lightbulb className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the go-to software house for companies seeking cutting-edge
                technology solutions, known for our innovation, reliability, and
                exceptional client partnerships.
              </p>
            </Card>
          </div>

          {/* Skills & Expertise */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="section-heading mb-6">
                Our Expertise
              </h3>
              <p className="section-subheading">
                Years of experience across modern technologies and frameworks
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={skill.name}
                  className="p-6 hover:shadow-medium transition-all duration-300 card-hover border-border/50 bg-card/95 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <CardContent className="p-0">
                    <div className="flex items-center mb-6">
                      <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300 mr-3">
                        <skill.icon className="h-5 w-5 text-accent" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground flex-1">{skill.name}</h4>
                      <Badge variant="outline" className="text-accent font-bold">{skill.level}%</Badge>
                    </div>
                    <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-accent to-primary h-3 rounded-full transition-all duration-1000 ease-out shadow-accent"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="section-heading mb-6">
                Our Values
              </h3>
              <p className="section-subheading">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="p-8 card-hover card-glow border-border/50 bg-gradient-to-br from-card via-card to-card/50 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="p-4 bg-accent/10 rounded-xl w-fit mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                      <value.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h3>
              <p className="text-xl text-muted-foreground">
                From startup to trusted software partner
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-accent/20" />
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center mb-12 animate-fade-in ${index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Card className={`w-full md:w-1/2 p-6 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <CardContent className="p-0">
                      <Badge className="mb-3 bg-accent text-accent-foreground">{item.year}</Badge>
                      <h4 className="text-xl font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section-shell section-soft scroll-mt-24">
        <div className="content-wrap">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="section-subheading mb-12 max-w-3xl mx-auto">
              Ready to transform your idea into reality? Get in touch for a free
              consultation and detailed project proposal.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {contactBenefits.map((benefit, idx) => (
                <Badge key={benefit} variant="outline" className="px-4 py-2 text-sm flex items-center bg-accent/5 border-accent/30 animate-fade-in-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <CheckCircle className="h-4 w-4 mr-2 text-accent" />
                  {benefit}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in-left">
              <Card className="shadow-large bg-card/95 card-hover card-glow border-border/50 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-accent to-primary" />
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Start Your Project
                  </CardTitle>
                  <p className="text-muted-foreground text-base">
                    Tell us about your project and we'll get back to you with a
                    detailed proposal.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-semibold">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="border-border/50 focus:border-accent focus:ring-accent"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-semibold">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="border-border/50 focus:border-accent focus:ring-accent"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="font-semibold">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Your Company Inc."
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="border-border/50 focus:border-accent focus:ring-accent"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="font-semibold">Service Needed *</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => handleInputChange("service", value)}
                        >
                          <SelectTrigger className="border-border/50 focus:border-accent focus:ring-accent">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {contactServices.map((service) => (
                              <SelectItem key={service.value} value={service.value}>
                                <div className="flex items-center">
                                  <service.icon className="h-4 w-4 mr-2" />
                                  {service.label}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-semibold">Budget Range</Label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) => handleInputChange("budget", value)}
                        >
                          <SelectTrigger className="border-border/50 focus:border-accent focus:ring-accent">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="font-semibold">Timeline</Label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) => handleInputChange("timeline", value)}
                      >
                        <SelectTrigger className="border-border/50 focus:border-accent focus:ring-accent">
                          <SelectValue placeholder="When do you need this?" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelineOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-semibold">Project Details *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="border-border/50 focus:border-accent focus:ring-accent"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full btn-glow font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in-right">
              <Card className="shadow-medium bg-card/95 card-hover border-border/50">
                <div className="h-1 bg-gradient-to-r from-primary to-accent" />
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Get in Touch
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Multiple ways to reach us for your convenience.
                  </p>
                </CardHeader>
                <CardContent className="space-y-8">
                  {contactInfo.map((item, idx) => (
                    <div key={item.title} className="flex items-start space-x-4 group animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                      <div className="p-3 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 group-hover:from-accent/25 group-hover:to-primary/20 transition-colors duration-300 flex-shrink-0">
                        <item.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-foreground font-semibold text-sm mt-1">{item.info}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-medium bg-gradient-to-br from-accent/8 via-primary/5 to-accent/5 card-glow border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center gap-3">
                    <div className="p-2 bg-accent/20 rounded-lg">
                      <Star className="h-5 w-5 text-accent" />
                    </div>
                    Why Choose Us?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "3+ years of experience",
                    "50+ successful projects",
                    "98% client satisfaction",
                    "24/7 support available"
                  ].map((item, idx) => (
                    <div key={item} className="flex items-center space-x-3 group animate-fade-in-up" style={{ animationDelay: `${idx * 0.08}s` }}>
                      <div className="p-1 rounded-full bg-accent/20 group-hover:bg-accent/40 transition-colors duration-300">
                        <CheckCircle className="h-5 w-5 text-accent" />
                      </div>
                      <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <h3 className="section-heading mb-4">
                Frequently Asked Questions
              </h3>
              <p className="section-subheading">
                Common questions about our process and services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  question: "How much does a project cost?",
                  answer:
                    "Project costs vary based on complexity and scope. We provide detailed quotes after understanding your requirements.",
                },
                {
                  question: "How long does development take?",
                  answer:
                    "Timeline depends on project scope. Simple projects: 2-4 weeks, Complex applications: 2-6 months.",
                },
                {
                  question: "Do you provide ongoing support?",
                  answer:
                    "Yes, we offer maintenance packages and 24/7 support to keep your application running smoothly.",
                },
                {
                  question: "Can you work with my existing team?",
                  answer:
                    "Absolutely! We're flexible and can integrate with your existing development team or work independently.",
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  className="p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden border-t border-primary-foreground/10">
        <div className="absolute -top-20 left-1/4 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 h-56 w-56 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div className="relative content-wrap text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Next Product?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
            Get a free consultation today.
          </p>
          <div className="flex justify-center items-center">
            <Button size="lg" variant="secondary" onClick={() => scrollToSection("contact")}>
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
