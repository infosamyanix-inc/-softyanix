import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

const HeroSection = ({ onScrollTo }: HeroSectionProps) => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-hover to-accent overflow-hidden"
    style={{
      backgroundImage: `url(${heroImage})`,
      backgroundBlendMode: "overlay",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0" />
    <div className="absolute inset-0 bg-primary/85" />
    <div className="relative z-10 content-wrap text-center">
      <div className="space-y-8">
        <h1 className="heading-display text-primary-foreground mb-6 leading-tight animate-fade-in-down">
          Transforming Ideas into
          <span
            className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-hover to-accent-foreground animate-fade-in-down"
            style={{ animationDelay: "0.2s" }}
          >
            Digital Reality
          </span>
        </h1>
        <p
          className="text-xl md:text-2xl text-primary-foreground/95 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-down font-light"
          style={{ animationDelay: "0.4s" }}
        >
          We focus on software-driven business growth — building scalable
          products, streamlining operations, and creating digital solutions that
          accelerate long-term success.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-down"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            size="lg"
            variant="secondary"
            onClick={() => onScrollTo("contact")}
            className="min-w-48 btn-glow font-semibold"
          >
            Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => onScrollTo("projects")}
            className="min-w-48 border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold transition-colors duration-200"
          >
            View Projects
          </Button>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    <WhatsAppButton />
  </section>
);

export default HeroSection;
