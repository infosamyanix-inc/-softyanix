import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

const sectionByPath: Record<string, string> = {
  "/": "home",
  "/home": "home",
  "/services": "services",
  "/projects": "projects",
  "/about": "about",
  "/contact": "contact",
};

const HomePage = () => {
  const location = useLocation();
  const { scrollToSection } = useScrollToSection();

  useEffect(() => {
    const sectionId = sectionByPath[location.pathname];
    if (!sectionId) return;
    const timer = setTimeout(() => scrollToSection(sectionId), 50);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="overflow-hidden">
      <HeroSection onScrollTo={scrollToSection} />
      <ServicesSection onScrollTo={scrollToSection} />
      <TestimonialsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection onScrollTo={scrollToSection} />
    </div>
  );
};

export default HomePage;
