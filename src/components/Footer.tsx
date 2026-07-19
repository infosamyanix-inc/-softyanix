import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

import favicon from "@/assets/favicon.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    setTimeout(() => {
      toast({
        title: "Thanks for subscribing",
        description: "We'll share updates, insights, and product news.",
      });
      setEmail("");
      setIsSubscribing(false);
    }, 500);
  };

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border/60 bg-surface/95">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img src={favicon} alt="Softyanix" className="h-10 w-10 object-contain" />
              <div>
                <p className="text-lg font-semibold text-foreground">Softyanix</p>
                <p className="text-sm text-muted-foreground">Digital product studio</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              We design and build polished web platforms, mobile products, and AI-powered experiences with a clear delivery process.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-border/60 p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-border/60 p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="rounded-full border border-border/60 p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><button type="button" onClick={() => handleSectionClick("home")} className="transition-colors hover:text-foreground">Home</button></li>
              <li><button type="button" onClick={() => handleSectionClick("services")} className="transition-colors hover:text-foreground">Services</button></li>
              <li><button type="button" onClick={() => handleSectionClick("about")} className="transition-colors hover:text-foreground">About</button></li>
              <li><button type="button" onClick={() => handleSectionClick("contact")} className="transition-colors hover:text-foreground">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Web Development", "Mobile Apps", "AI Chatbots", "UI/UX Design", "Cloud Solutions"].map((service) => (
                <li key={service}>
                  <button type="button" onClick={() => handleSectionClick("services")} className="transition-colors hover:text-foreground">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">Contact</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-accent" />
                  <a href="mailto:infosoftyanix@gmail.com" className="transition-colors hover:text-foreground">infosoftyanix@gmail.com</a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-accent" />
                  <a href="tel:+9231 56835880" className="transition-colors hover:text-foreground">+92 (315) 065-7943</a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                  <span>Karachi, Sindh, Pakistan</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="space-y-3 rounded-2xl border border-border/60 bg-background/70 p-4">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">Subscribe</h4>
                <p className="mt-2 text-sm text-muted-foreground">Get updates on launches, insights, and service improvements.</p>
              </div>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-border/60 bg-background"
                />
                <Button type="submit" disabled={isSubscribing} className="shrink-0">
                  {isSubscribing ? "..." : <Send className="h-4 w-4" />}
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Softyanix. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms</a>
            <a href="#" className="transition-colors hover:text-foreground">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
