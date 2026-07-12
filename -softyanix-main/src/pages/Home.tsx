import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Star, Code2, Bot, Smartphone, Palette } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import webDevImage from "@/assets/services/web-dev.jpg";
import aiChatbotImage from "@/assets/services/ai-chatbot.jpg";
import mobileAppImage from "@/assets/services/mobile-app.jpg";
import uiUxImage from "@/assets/services/ui-ux.jpg";

const Home = () => {
  const services = [
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

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-primary via-primary-hover to-accent bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})`, backgroundBlendMode: 'overlay' }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Transforming Ideas into
              <span className="block text-accent animate-gradient-shift bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              MERN Stack • AI Chatbots • Mobile Apps • UI/UX Design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" asChild className="animate-scale-in">
                <Link to="/contact">
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className=" hover:bg-primary-foreground hover:text-Secondary">
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Highlight */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We specialize in cutting-edge technologies to bring your vision to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="group hover:shadow-accent transition-all duration-300 hover:-translate-y-2 animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                    <service.icon className="absolute bottom-2 right-2 h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Softyanix?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Next Product?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together. 
            Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/about">Learn More About Us</Link>
            </Button>
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;