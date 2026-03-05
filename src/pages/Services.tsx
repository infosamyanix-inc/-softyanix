import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Rocket
} from "lucide-react";

const Services = () => {
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

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end digital solutions 
            that drive growth and innovation for your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className={`relative group hover:shadow-accent transition-all duration-300 hover:-translate-y-1 animate-fade-in ${
                  service.popular ? 'ring-2 ring-accent ring-offset-2' : ''
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
                  
                  <Button className="w-full group-hover:bg-accent group-hover:text-accent-foreground" asChild>
                    <Link to="/contact">
                      Request Proposal <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get a free consultation and detailed project proposal. 
            No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;