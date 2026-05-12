import { useEffect } from 'react';

/**
 * Adds `is-visible` class to any element with `.reveal`, `.reveal-stagger`,
 * or `.cine-title` once it enters the viewport.
 *
 * Pass any value as `key` (e.g. location.pathname) to force re-attachment
 * when navigating between pages.
 */
export default function useRevealOnScroll(key = '') {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal, .reveal-stagger, .cine-title');
    if (!targets.length) return;
    if (!('IntersectionObserver' in window)) {
      targets.forEach((t) => t.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [key]);
}
