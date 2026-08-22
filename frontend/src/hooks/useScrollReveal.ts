import { useEffect } from "react";

/**
 * Scroll Reveal Hook implementing SRP (Single Responsibility Principle).
 * Responsibility: Track DOM mount updates and apply dynamic fade-in intersections on elements.
 */
export const useScrollReveal = (dependency?: unknown) => {
  useEffect(() => {
    const selector = "[data-animate]";
    const items = document.querySelectorAll(selector);
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, [dependency]);
};
