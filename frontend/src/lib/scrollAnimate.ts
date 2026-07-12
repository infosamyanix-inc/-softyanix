// Simple scroll-trigger animations using IntersectionObserver
const selector = '[data-animate]';

function setupScrollAnimations() {
  if (typeof window === 'undefined') return;

  const items = document.querySelectorAll(selector);
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add('visible');
          if (el.dataset.animateOnce === 'true') observer.unobserve(el);
        }
      });
    },
    { threshold: 0.12 },
  );

  items.forEach((it) => observer.observe(it));
}

// Initialize on DOMContentLoaded
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupScrollAnimations);
  } else {
    setupScrollAnimations();
  }
}

export default setupScrollAnimations;
