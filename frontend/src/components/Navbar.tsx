import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

import favicon from "../assets/favicon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/#about" },
    { name: "Contact", path: "/#contact" },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path: string) => {
    setIsOpen(false);

    // Route navigation (starts with '/')
    if (path.startsWith("/")) {
      const [route, hash] = path.split("#");
      if (location.pathname !== route) navigate(route);

      if (hash) {
        // Wait for the route to mount, then scroll to anchor
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
          setActiveSection(hash);
        }, 120);
      } else {
        // Clear active section when navigating to a top-level route
        setActiveSection(route === "/" ? "home" : route.replace("/", ""));
      }

      return;
    }

    // Hash-only (in-page) navigation
    const sectionId = path.replace("#", "");
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-90px 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    navItems.forEach((item) => {
      const sectionId = item.path.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const isActive = (path: string) => activeSection === path.replace("#", "");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-2xl border-b border-border/40 shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={favicon}
              alt="Softyanix Logo"
              className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span className="text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
              Softyanix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.path);
                }}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer group ${
                  isActive(item.path)
                    ? "text-accent bg-accent/15"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/8"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive(item.path) && (
                  <div className="absolute inset-0 rounded-full bg-accent/10 border border-accent/30 animate-glow" />
                )}
              </a>
            ))}
            <Button 
              variant="default" 
              size="sm" 
              className="ml-4 rounded-full px-6 font-semibold btn-glow"
              onClick={() => handleNavClick("#contact")}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-accent transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 border-t border-border/60 backdrop-blur">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.path);
                  }}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors cursor-pointer ${
                    isActive(item.path)
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button 
                  className="w-full" 
                  onClick={() => handleNavClick("#contact")}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;