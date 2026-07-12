import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { servicesHighlight, servicesDetailed, processSteps } from "@/data/services";

interface ServicesSectionProps {
  onScrollTo: (id: string) => void;
}

const ServicesSection = ({ onScrollTo }: ServicesSectionProps) => (
  <section id="services" className="section-shell section-soft scroll-mt-24">
    <div className="content-wrap">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="section-heading mb-6">Our Expertise</h2>
        <p className="section-subheading max-w-3xl mx-auto">
          We specialize in cutting-edge technologies to bring your vision to
          life with precision and innovation
        </p>
      </div>

      {/* Highlight Cards */}
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
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="mt-4 pt-4 border-t border-border/30 flex items-center text-accent font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Service Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
        {servicesDetailed.map((service, index) => (
          <div
            key={service.slug}
            className="relative pt-3 animate-fade-in h-full"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {service.popular && (
              <Badge className="absolute top-0 left-4 z-20 bg-accent text-accent-foreground shadow-md">
                Most Popular
              </Badge>
            )}
            <Card
              className={`relative group cursor-pointer overflow-hidden transition-all duration-200 ease-out bg-card/95 flex flex-col h-full
                hover:-translate-y-3 hover:scale-[1.02]
                hover:shadow-[0_20px_60px_-10px_hsl(var(--accent)/0.45)]
                ${service.popular
                  ? "ring-2 ring-accent ring-offset-2"
                  : "ring-1 ring-border/40 hover:ring-accent/60"
                }`}
            >
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent/10 transition-transform duration-200 group-hover:scale-105">
                    <service.icon className="h-6 w-6 text-accent transition-transform duration-200 group-hover:rotate-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground transition-colors duration-200 group-hover:text-accent">
                      {service.title}
                    </CardTitle>
                    <p className="text-sm text-accent font-medium">{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground transition-colors duration-200 group-hover:text-foreground/80">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0 relative z-10 flex flex-col flex-1">
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2 transition-transform duration-150 hover:translate-x-1">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 transition-transform duration-150 group-hover:scale-110" />
                      <span className="text-sm text-foreground transition-colors duration-150 group-hover:font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-lg font-semibold text-accent transition-all duration-200 group-hover:drop-shadow-[0_0_8px_hsl(var(--accent)/0.6)]">
                        {service.pricing}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Timeline: {service.timeline}
                      </p>
                    </div>
                    <Link to={`/services/${service.slug}`}>
                      <Button variant="ghost" size="sm" className="text-accent hover:text-accent">
                        Details →
                      </Button>
                    </Link>
                  </div>
                  <Button className="w-full" onClick={() => onScrollTo("contact")}>
                    Request Proposal{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Process Steps */}
      <div className="py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Development Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures quality, transparency, and timely
            delivery
          </p>
        </div>
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
);

export default ServicesSection;
