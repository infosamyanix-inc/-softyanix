import { useParams, Link, Navigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Clock, DollarSign } from "lucide-react";
import { servicesDetailed } from "@/data/services";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { scrollToSection } = useScrollToSection();
  const service = servicesDetailed.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/#services">
            <Button variant="ghost" className="mb-6 text-primary-foreground/80 hover:text-primary-foreground gap-2 -ml-2">
              <ArrowLeft className="h-4 w-4" /> Back to Services
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-accent/20 rounded-xl">
              <service.icon className="h-8 w-8 text-accent" />
            </div>
            {service.popular && (
              <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
            )}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">{service.title}</h1>
          <p className="text-xl text-primary-foreground/80 mb-6">{service.subtitle}</p>
          <p className="text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">{service.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Features */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">What's Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 p-4 bg-card border border-border/50 rounded-xl">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-6">Our Process</h2>
            <div className="space-y-4">
              {["Discovery & Requirements", "Design & Architecture", "Development & Testing", "Deployment & Handover"].map((step, i) => (
                <div key={step} className="flex gap-4 p-4 bg-card border border-border/50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{step}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-6 bg-card border border-border/50 rounded-2xl sticky top-24">
              <h3 className="text-lg font-bold text-foreground mb-4">Project Details</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">Starting Price</p>
                    <p className="font-semibold text-foreground">{service.pricing}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">Typical Timeline</p>
                    <p className="font-semibold text-foreground">{service.timeline}</p>
                  </div>
                </div>
              </div>
              <Button className="w-full mb-3" onClick={() => {
                window.scrollTo({ top: 0 });
                setTimeout(() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  else window.location.href = "/#contact";
                }, 100);
              }}>
                Request Proposal
              </Button>
              <Link to="/">
                <Button variant="outline" className="w-full">View All Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
