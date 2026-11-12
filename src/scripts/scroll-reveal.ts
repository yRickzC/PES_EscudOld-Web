const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (!motionPreference.matches && 'IntersectionObserver' in window) {
  const reveal = (element: HTMLElement) => {
    element.dataset.revealState = 'visible';
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      reveal(entry.target as HTMLElement);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });

  revealElements.forEach((element) => {
    const siblings = Array.from(element.parentElement?.children ?? [])
      .filter((sibling) => sibling.hasAttribute('data-reveal'));
    const delay = Math.min(Math.max(siblings.indexOf(element), 0), 3) * 75;
    element.style.setProperty('--reveal-delay', `${delay}ms`);
    element.dataset.revealState = 'pending';
    observer.observe(element);
  });

  // Keyboard navigation must never land on an invisible control.
  document.addEventListener('focusin', (event) => {
    if (!(event.target instanceof Element)) return;
    const element = event.target.closest<HTMLElement>('[data-reveal]');
    if (!element) return;
    reveal(element);
    observer.unobserve(element);
  });

  motionPreference.addEventListener('change', (event) => {
    if (!event.matches) return;
    observer.disconnect();
    revealElements.forEach(reveal);
  });
}
