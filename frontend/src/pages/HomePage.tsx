import { FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Bot,
  CheckCircle,
  Clock,
  Code2,
  Heart,
  Mail,
  MapPin,
  Palette,
  Phone,
  Rocket,
  Send,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";

import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import webDevImage from "@/assets/services/web-dev.jpg";
import aiChatbotImage from "@/assets/services/ai-chatbot.jpg";
import mobileAppImage from "@/assets/services/mobile-app.jpg";
import uiUxImage from "@/assets/services/ui-ux.jpg";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const HomePage = () => {
  const location = useLocation();
  const { toast } = useToast();
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

  // Trigger scroll-trigger animation setup
  useScrollReveal();

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Modern websites and web apps built for scale and speed.",
      image: webDevImage,
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Smart assistants and workflows that reduce manual work.",
      image: aiChatbotImage,
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Cross-platform mobile products with a clean user experience.",
      image: mobileAppImage,
    },
    {
      icon: Palette,
      title: "UI / UX Design",
      description: "Clear, polished interfaces that feel premium and usable.",
      image: uiUxImage,
    },
  ];

  const processSteps = [
    { icon: Zap, title: "Discovery", description: "We define the problem, scope, and priorities." },
    { icon: Palette, title: "Design", description: "We shape the interface and product structure." },
    { icon: Code2, title: "Build", description: "We ship with clean code and testable architecture." },
    { icon: Rocket, title: "Launch", description: "We deploy, stabilize, and support the release." },
  ];

  const stats = [
    { number: "50+", label: "Solutions Delivered", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Heart },
    { number: "24/7", label: "Support Available", icon: Users },
    { number: "3+", label: "Years Experience", icon: Clock },
  ];

  const simpleToAdvanced = [
    { title: "Simple", description: "Best for MVPs, landing pages, and fast validation.", points: ["Quick launch", "Focused scope", "Lower cost"] },
    { title: "Professional", description: "Best for production apps with clear architecture and support.", points: ["Scalable", "Secure", "Maintainable"] },
    { title: "Advanced", description: "Best for complex systems, AI features, and integrations.", points: ["Automation", "Advanced workflows", "Enterprise-ready"] },
  ];

  const contactServices = [
    { value: "web-development", label: "Web Development" },
    { value: "ai-automation", label: "AI Automation" },
    { value: "mobile-app", label: "Mobile App" },
    { value: "ui-ux-design", label: "UI/UX Design" },
    { value: "api-development", label: "API Development" },
    { value: "cloud-solutions", label: "Cloud Solutions" },
  ];

  const budgetRanges = ["< $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000 - $100,000", "$100,000+"];
  const timelineOptions = ["ASAP", "1-2 months", "3-6 months", "6+ months", "Just exploring"];

  const contactInfo = [
    { icon: Mail, title: "Email", value: "infosoftyanix@gmail.com" },
    { icon: Phone, title: "Phone", value: "+92 3156835880" },
    { icon: MapPin, title: "Location", value: "Karachi, Sindh, Pakistan" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      toast({
        title: "Message sent",
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
    } catch {
      toast({
        title: "Unable to send",
        description: "Please try again or reach out by email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const map: Record<string, string> = {
      "/": "home",
      "/home": "home",
      "/services": "services",
      "/about": "about",
      "/contact": "contact",
    };

    const sectionId = map[location.pathname];
    if (!sectionId) return;

    const timer = window.setTimeout(() => {
      scrollToSection(sectionId);
    }, 50);

    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">
      <section id="home" className="relative overflow-hidden bg-background pt-24 lg:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.08),transparent_42%),linear-gradient(to_bottom,hsl(var(--secondary)/0.35),hsl(var(--background)))]" />
        <div className="absolute -top-24 right-[-10rem] h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-[-6rem] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10 content-wrap py-16 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-8 animate-fade-in-up">
              <Badge className="rounded-full border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Professional Software House
              </Badge>

              <div className="space-y-5 max-w-3xl">
                <h1 className="heading-display">
                  Simple ideas, advanced execution.
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                    Built for serious growth.
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Softyanix builds modern web platforms, mobile apps, AI automation, and product interfaces that feel professional from day one.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" onClick={() => scrollToSection("contact")} className="min-w-48 btn-glow font-semibold hover:scale-105 active:scale-95 transition-transform">
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate("/services")} className="min-w-48 border-border bg-background text-foreground hover:bg-muted hover:text-foreground font-semibold hover:scale-105 active:scale-95 transition-transform">
                  View Services
                </Button>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Strategy-first delivery", "Clean architecture", "Ongoing support"].map((item) => (
                  <Badge key={item} variant="outline" className="rounded-full border-border/60 bg-background/80 px-3 py-1.5 text-sm text-muted-foreground">
                    <CheckCircle className="mr-2 h-4 w-4 text-accent animate-pulse" />
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <Card className="overflow-hidden rounded-[2rem] border-border/60 bg-card/95 shadow-large animate-fade-in-up transition-all duration-500 hover:shadow-accent hover:-translate-y-1">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-start justify-between gap-6 mb-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Studio snapshot</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-md">
                      A focused process for businesses that want polished products, faster delivery, and a cleaner handoff.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-accent/10 p-3 animate-float">
                    <Rocket className="h-6 w-6 text-accent" />
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Discovery", value: "Product strategy and scope" },
                    { label: "Build", value: "Design systems and scalable code" },
                    { label: "Launch", value: "QA, handoff, and support" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/80 px-4 py-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.value}</p>
                      </div>
                      <CheckCircle className="h-5 w-5 text-accent" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { value: "50+", label: "launches" },
                    { value: "24/7", label: "support" },
                    { value: "3+", label: "years" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-border/60 bg-background/80 p-4 text-center">
                      <p className="text-lg font-bold text-foreground">{item.value}</p>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        <WhatsAppButton />
      </section>

      <section className="py-16">
        <div className="content-wrap text-center mb-8" data-animate>
          <h3 className="section-heading mb-4">From Simple To Advanced</h3>
          <p className="section-subheading max-w-2xl mx-auto">We cover the full range: fast MVPs, reliable production products, and advanced systems.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {simpleToAdvanced.map((item, index) => (
              <Card key={item.title} data-animate className="border-border/60 bg-card/95 shadow-soft transition-all duration-300 hover:shadow-medium" style={{ ['--delay' as any]: `${index * 80}ms` }}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-shell section-soft scroll-mt-24 relative">
        <div className="content-wrap relative z-10">
          <div className="text-center mb-12" data-animate>
            <h2 className="section-heading mb-6">Core Capabilities</h2>
            <p className="section-subheading max-w-3xl mx-auto">Focused services for teams that want a polished digital presence and a reliable build partner.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => {
              return (
                <Card 
                  key={service.title} 
                  onClick={() => navigate("/services")}
                  data-animate
                  className="overflow-hidden border-border/60 bg-card/95 shadow-soft transition-all duration-300 hover:shadow-medium hover:-translate-y-1 cursor-pointer select-none group"
                  style={{ ['--delay' as any]: `${index * 80}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                  </div>
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-lg flex justify-between items-center font-bold text-foreground">
                      <span>{service.title}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-transform duration-300 group-hover:translate-x-1" />
                    </CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <div className="py-8" data-animate>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.title} className="text-center">
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

      <section id="about" className="section-shell section-muted scroll-mt-24">
        <div className="content-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-animate>
              <h2 className="section-heading mb-6">About Softyanix</h2>
              <p className="section-subheading mb-8">
                We’re a software house focused on modern digital products, clear communication, and professional delivery.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <Card key={stat.label} className="text-center border-border/50 bg-card/90">
                    <CardContent className="p-6">
                      <div className="mb-4 flex justify-center">
                        <div className="rounded-xl bg-accent/10 p-3">
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

            <Card data-animate className="p-8 border-border/50 bg-card/95 shadow-medium">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl">Why teams choose us</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                {[
                  "Clean product thinking before code",
                  "Professional UI with real business focus",
                  "Fast delivery without losing quality",
                  "Ongoing support after launch",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell section-soft scroll-mt-24">
        <div className="content-wrap">
          <div className="text-center mb-14" data-animate>
            <h2 className="section-heading mb-6">Let's Build Something Strong</h2>
            <p className="section-subheading mb-12 max-w-3xl mx-auto">Tell us what you need and we’ll send back a clear, practical next step.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <Card data-animate className="lg:col-span-2 shadow-[0_4px_30px_rgba(0,0,0,0.03)] bg-card border border-border/40 overflow-hidden rounded-[2rem]">
              <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-3xl font-extrabold tracking-tight text-foreground">Start Your Project</CardTitle>
                <p className="text-muted-foreground text-sm">Briefly share your objectives. We will review it and coordinate a technical next step.</p>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Needed Interactive Pills */}
                  <div className="space-y-3">
                    <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Service Needed *</Label>
                    <div className="flex flex-wrap gap-2">
                      {contactServices.map((service) => {
                        const isSelected = formData.service === service.value;
                        return (
                          <button
                            key={service.value}
                            type="button"
                            onClick={() => handleInputChange("service", service.value)}
                            className={`px-4 py-2.5 rounded-full border text-xs font-bold transition-all duration-200 ${
                              isSelected
                                ? "bg-accent/15 border-accent/40 text-accent shadow-[0_0_15px_rgba(34,197,94,0.1)]"
                                : "border-border/60 hover:bg-muted text-muted-foreground"
                            }`}
                          >
                            {service.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Full Name *</Label>
                      <Input id="name" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} required className="rounded-xl h-10 border-border/60 bg-background/50 focus:bg-background focus:ring-1 focus:ring-accent text-sm" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Email Address *</Label>
                      <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required className="rounded-xl h-10 border-border/60 bg-background/50 focus:bg-background focus:ring-1 focus:ring-accent text-sm" placeholder="jane@company.com" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="company" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Company Name</Label>
                      <Input id="company" value={formData.company} onChange={(e) => handleInputChange("company", e.target.value)} className="rounded-xl h-10 border-border/60 bg-background/50 focus:bg-background focus:ring-1 focus:ring-accent text-sm" placeholder="Acme Corp" />
                    </div>
                  </div>

                  {/* Budget, Timeline, and Message Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-4 md:col-span-1">
                      <div className="space-y-1.5">
                        <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Budget Range</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger className="rounded-xl h-10 border-border/60 bg-background/50 text-sm">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent className="rounded-xl">
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>{range}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Desired Timeline</Label>
                        <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                          <SelectTrigger className="rounded-xl h-10 border-border/60 bg-background/50 text-sm">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent className="rounded-xl">
                            {timelineOptions.map((option) => (
                              <SelectItem key={option} value={option}>{option}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-1.5 md:col-span-2">
                      <Label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Project Details *</Label>
                      <Textarea id="message" rows={4} value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} required className="rounded-xl border-border/60 bg-background/50 focus:bg-background focus:ring-1 focus:ring-accent resize-none text-sm h-[94px]" placeholder="Briefly describe the features, scope, or automation requirements..." />
                    </div>
                  </div>

                  {/* Dynamic Pre-Project Verification Checklist & NDA Protection */}
                  <div className="rounded-2xl border border-border/40 bg-muted/10 p-5 space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded">Pre-Project Check</span>
                      <span className="text-[10px] text-muted-foreground font-semibold">🔒 Protected by mutual NDA</span>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Free feasibility review within 24h
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Dedicated Lead Engineer assigned
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Direct Slack/WhatsApp onboarding channel
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Custom roadmap timeline documentation
                      </li>
                    </ul>
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-glow font-bold rounded-xl h-12 text-sm" disabled={isSubmitting}>
                    {isSubmitting ? "Sending Inquiry..." : <><span>Submit Proposal Request</span> <Send className="ml-2 h-4 w-4" /></>}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6" data-animate>
              <Card className="shadow-medium bg-card/95 border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <item.icon className="mt-0.5 h-5 w-5 text-accent" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-medium bg-card/95 border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">What you get</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "A clear project scope",
                    "Realistic timeline and budget",
                    "Modern design direction",
                    "Simple next-step plan",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden border-t border-primary-foreground/10" data-animate>
        <div className="absolute -top-20 left-1/4 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 h-56 w-56 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div className="relative content-wrap text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build a better product?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">We’ll help you move from an idea to a professional digital product with less noise and more clarity.</p>
          <Button size="lg" variant="secondary" onClick={() => scrollToSection("contact")}>Start Your Project <ArrowRight className="ml-2 h-5 w-5" /></Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
