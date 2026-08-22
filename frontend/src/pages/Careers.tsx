import { ArrowRight, Brush, Gamepad2, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const positions = [
  {
    title: "Graphic Designer Intern",
    icon: Brush,
    summary: "Help shape the visual language behind thoughtful digital products and brand experiences.",
    responsibilities: [
      "Create social, web, and campaign graphics",
      "Explore visual concepts with the design team",
      "Prepare polished assets for digital platforms",
    ],
    skills: "Figma, Adobe Creative Suite, typography, and a strong eye for composition",
  },
  {
    title: "Game Developer Intern",
    icon: Gamepad2,
    summary: "Build playful, responsive game experiences while learning how ideas become polished products.",
    responsibilities: [
      "Prototype gameplay mechanics and interactive systems",
      "Collaborate on level design, UI, and game feel",
      "Test, debug, and refine playable experiences",
    ],
    skills: "Unity or Unreal, C# or C++, gameplay fundamentals, and curiosity about interactive design",
  },
];

const Careers = () => (
  <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
    <section className="relative overflow-hidden border-b border-border/40 pt-32 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.12),transparent_42%),linear-gradient(to_bottom,hsl(var(--secondary)/0.2),hsl(var(--background)))]" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Badge variant="outline" className="rounded-full border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Join Softyanix
        </Badge>
        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-none tracking-tight sm:text-5xl lg:text-6xl">
          Make work that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">people remember.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          We are building a curious, collaborative team for digital products that are useful, beautiful, and a little more human.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Open positions</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Start your next chapter here.</h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-accent" />
            Abu Dhabi, Dubai · Apt 404, Opal Tower
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {positions.map((position) => {
            const Icon = position.icon;
            return (
              <article key={position.title} className="flex flex-col rounded-3xl border border-border/60 bg-card p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md sm:p-9">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/15 bg-accent/5">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">Internship</span>
                </div>
                <h3 className="mt-7 text-2xl font-bold">{position.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{position.summary}</p>

                <div className="mt-7 border-t border-border/50 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">You will</p>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    {position.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-3">
                        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground"><span className="font-semibold text-foreground">Great fit if:</span> {position.skills}.</p>
                <Button asChild className="mt-8 w-full sm:w-fit">
                  <a href={`mailto:infosamyanix@gmail.com?subject=Application: ${position.title}`}>
                    Apply for this role <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center sm:p-8">
          <p className="text-sm text-muted-foreground">Do not see the exact fit? Send us your portfolio and tell us what you would love to build.</p>
          <Button asChild variant="outline" className="mt-4">
            <a href="mailto:infosamyanix@gmail.com?subject=General career inquiry">Start a conversation</a>
          </Button>
        </div>

        <div className="mt-10 text-center text-sm text-muted-foreground">
          <Link to="/" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
            Back to Softyanix <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default Careers;