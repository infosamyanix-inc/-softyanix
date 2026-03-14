import { Badge } from "@/components/ui/badge";
import { Target, Lightbulb } from "lucide-react";
import { stats, values, techStack, companyTimeline } from "@/data/about";

const AboutSection = () => (
  <section id="about" className="section-shell section-muted scroll-mt-24">
    <div className="content-wrap">

      {/* Hero Intro */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <Badge className="mb-4 bg-accent/10 text-accent border-accent/30 px-4 py-1.5 text-sm font-medium">
          About Softyanix
        </Badge>
        <h2 className="section-heading mb-6">
          We Build Software That Grows With Your Business
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Softyanix is a Karachi-based software company specialising in
          full-stack web development, AI integrations, and mobile applications.
          We work with startups and established businesses to turn complex
          problems into clean, maintainable digital products.
        </p>
      </div>

      {/* Stats Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {stats.map((s) => (
          <div key={s.label} className="text-center p-6 bg-card border border-border/50 rounded-xl">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
              {s.number}
            </div>
            <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <div className="p-8 bg-card border border-border/50 rounded-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 bg-accent/10 rounded-xl">
              <Target className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            To help businesses of all sizes succeed online by delivering
            reliable, well-crafted software — on time, within budget, and built
            to last. We believe good engineering is the foundation of every
            great product.
          </p>
        </div>
        <div className="p-8 bg-card border border-border/50 rounded-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 bg-accent/10 rounded-xl">
              <Lightbulb className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            To become the most trusted software partner for growing companies in
            South Asia and beyond — known not just for what we build, but for
            how reliably and transparently we build it.
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Our Technology Stack</h3>
          <p className="text-muted-foreground">The tools and frameworks we use to build your product</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techStack.map((group) => (
            <div key={group.category} className="p-6 bg-card border border-border/50 rounded-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <group.icon className="h-5 w-5 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground">{group.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full border border-border/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Why Companies Choose Us</h3>
          <p className="text-muted-foreground">What sets Softyanix apart from other development studios</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value) => (
            <div key={value.title} className="flex gap-5 p-6 bg-card border border-border/50 rounded-2xl group hover:-translate-y-1 transition-transform duration-200">
              <div className="p-3 bg-accent/10 rounded-xl h-fit flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-200">
                <value.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Our Journey</h3>
          <p className="text-muted-foreground">From first client to growing team</p>
        </div>
        <div className="space-y-0">
          {companyTimeline.map((item, index, arr) => (
            <div key={item.year} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-accent border-2 border-background ring-2 ring-accent/30 mt-1.5 flex-shrink-0" />
                {index < arr.length - 1 && <div className="w-0.5 bg-border flex-1 my-2" />}
              </div>
              <div className="pb-10">
                <Badge className="mb-2 bg-accent/10 text-accent border-accent/30 text-xs">{item.year}</Badge>
                <h4 className="text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default AboutSection;
