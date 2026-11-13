document.querySelectorAll<HTMLElement>('[data-signals-slider]').forEach(slider => {
  const track = slider.querySelector<HTMLElement>('[data-signals-track]');
  const slides = Array.from(slider.querySelectorAll<HTMLElement>('[data-signal-slide]'));
  const controls = slider.querySelector<HTMLElement>('[data-signals-controls]');
  const previous = slider.querySelector<HTMLButtonElement>('[data-signals-previous]');
  const next = slider.querySelector<HTMLButtonElement>('[data-signals-next]');
  if (!track || !controls || !previous || !next || slides.length < 2) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = window.matchMedia('(width < 40rem)');
  let current = 0;
  let settleTimer: number | undefined;
  const slideOffset = (index: number) => slides[index].offsetLeft - slides[0].offsetLeft;

  const updateButtons = () => {
    previous.disabled = current === 0;
    next.disabled = current === slides.length - 1;
  };

  const goTo = (index: number, instant = false) => {
    if (!mobile.matches) return;
    current = Math.max(0, Math.min(slides.length - 1, index));
    updateButtons();
    track.scrollTo({
      left: slideOffset(current),
      behavior: instant || reducedMotion.matches ? 'instant' : 'smooth',
    });
  };

  const syncFromScroll = () => {
    window.clearTimeout(settleTimer);
    if (!mobile.matches) return;
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
    if (!mobile.matches || event.target !== track) return;
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

  const updateMode = () => {
    window.clearTimeout(settleTimer);
    const focusWasInControls = controls.contains(document.activeElement);
    controls.hidden = !mobile.matches;
    if (mobile.matches) {
      track.tabIndex = 0;
      goTo(current, true);
    } else {
      track.scrollTo({ left: 0, behavior: 'instant' });
      track.removeAttribute('tabindex');
      if (focusWasInControls) {
        track.tabIndex = -1;
        track.focus({ preventScroll: true });
      }
    }
  };

  mobile.addEventListener('change', updateMode);
  new ResizeObserver(updateMode).observe(track);
  updateMode();
});
