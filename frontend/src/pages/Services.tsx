import { useState, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Code2, 
  Bot, 
  Smartphone, 
  Palette, 
  Database, 
  Cloud,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Rocket,
  ChevronDown
} from "lucide-react";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // Trigger scroll-trigger animation setup
  useScrollReveal();

  const toggleExpand = (title: string) => {
    setExpandedService(expandedService === title ? null : title);
  };

  const services = [
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

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-32 pb-20 border-b border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.06),transparent_45%),linear-gradient(to_bottom,hsl(var(--secondary)/0.2),hsl(var(--background)))]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="outline" className="rounded-full border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Core Competencies
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto leading-none">
            Polished Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Serious Operations.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From design systems and custom APIs to automated AI assistant frameworks, we engineer interfaces and platforms that feel premium, perform at scale, and deliver clarity.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const isExpanded = expandedService === service.title;
              return (
                <div 
                  key={service.title}
                  onClick={() => toggleExpand(service.title)}
                  data-animate
                  style={{ "--delay": `${index * 80}ms` } as CSSProperties}
                  className={`relative flex flex-col justify-between rounded-3xl border border-border/50 bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer select-none ${
                    service.popular ? 'ring-1 ring-accent/30 bg-[linear-gradient(to_bottom,hsl(var(--card)),hsl(var(--accent)/0.02))]' : ''
                  }`}
                >
                  {service.popular && (
                    <span className="absolute top-4 right-6 rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-semibold text-accent">
                      Most Popular
                    </span>
                  )}
                  
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-accent" />
                      </div>
                      <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-180 text-accent' : ''}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-1">{service.title}</h3>
                    <p className="text-xs text-accent font-semibold tracking-wider uppercase mb-4">{service.subtitle}</p>
                    
                    {/* Animated Description Toggler */}
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'}`}>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    </div>
                    
                    <div className="border-t border-border/40 pt-6 mb-8">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Key Capabilities</p>
                      <ul className="grid grid-cols-1 gap-2.5">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border/40" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Typical Delivery</span>
                      <span className="text-sm font-bold text-accent">{service.timeline}</span>
                    </div>
                    <Button className="w-full font-semibold rounded-2xl" variant="secondary" asChild>
                      <Link to="/contact">
                        Request Proposal <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 border-t border-border/40 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" data-animate>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
              Our Collaborative Flow
            </h2>
            <p className="text-muted-foreground text-lg">
              A structured lifecycle built on clear milestones, thorough code reviews, and transparent handoffs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.title} data-animate style={{ "--delay": `${index * 80}ms` } as CSSProperties} className="relative rounded-2xl bg-card border border-border/40 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/15 flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-4xl font-extrabold text-muted/30">0{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24 bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,hsl(var(--accent)/0.15),transparent_40%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="w-16 h-16 rounded-3xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto">
            <Shield className="h-8 w-8 text-accent" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Solidify Your Infrastructure?
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Get an accurate timeline estimate, custom architecture suggestion, and clear contract deliverables.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="rounded-2xl px-8 font-semibold" asChild>
              <Link to="/contact">
                Consult With An Engineer <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;