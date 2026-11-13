document.querySelectorAll<HTMLElement>('[data-signals-slider]').forEach(slider => {
  const track = slider.querySelector<HTMLElement>('[data-signals-track]');
  const slides = Array.from(slider.querySelectorAll<HTMLElement>('[data-signal-slide]'));
  const controls = slider.querySelector<HTMLElement>('[data-signals-controls]');
  const previous = slider.querySelector<HTMLButtonElement>('[data-signals-previous]');
  const next = slider.querySelector<HTMLButtonElement>('[data-signals-next]');
  if (!track || !controls || !previous || !next || slides.length < 2) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let settleTimer: number | undefined;
  const slideOffset = (index: number) => slides[index].offsetLeft - slides[0].offsetLeft;

  const updateButtons = () => {
    previous.disabled = current === 0;
    next.disabled = current === slides.length - 1;
  };

  const goTo = (index: number, instant = false) => {
    current = Math.max(0, Math.min(slides.length - 1, index));
    updateButtons();
    track.scrollTo({
      left: slideOffset(current),
      behavior: instant || reducedMotion.matches ? 'instant' : 'smooth',
    });
  };

  const syncFromScroll = () => {
    window.clearTimeout(settleTimer);
    current = slides.reduce((nearest, _, index) =>
      Math.abs(track.scrollLeft - slideOffset(index)) < Math.abs(track.scrollLeft - slideOffset(nearest))
        ? index : nearest, 0);
    updateButtons();
  };

  previous.addEventListener('click', () => goTo(current - 1));
  next.addEventListener('click', () => goTo(current + 1));
  track.addEventListener('scroll', () => {
    window.clearTimeout(settleTimer);
    settleTimer = window.setTimeout(syncFromScroll, 150);
  }, { passive: true });
  track.addEventListener('scrollend', syncFromScroll);
  track.addEventListener('keydown', event => {
    if (event.target !== track) return;
    let target: number;
    switch (event.key) {
      case 'ArrowLeft': target = current - 1; break;
      case 'ArrowRight': target = current + 1; break;
      case 'Home': target = 0; break;
      case 'End': target = slides.length - 1; break;
      default: return;
    }
    event.preventDefault();
    goTo(target);
  });

  new ResizeObserver(() => goTo(current, true)).observe(track);
  controls.hidden = false;
  updateButtons();
});
