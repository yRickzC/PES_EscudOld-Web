const story = document.querySelector<HTMLElement>('[data-phone-story]');
const intro = story?.querySelector<HTMLElement>('[data-story-intro]');
const launch = story?.querySelector<HTMLElement>('[data-phone-launch]');
const phone = story?.querySelector<HTMLElement>('[data-story-phone]');
const dock = story?.querySelector<HTMLElement>('[data-phone-dock]');
const how = story?.querySelector<HTMLElement>('[data-how-section]');
const heading = story?.querySelector<HTMLElement>('[data-how-heading]');

if (story && intro && launch && phone && dock && how && heading) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = (value: number) => Math.max(0, Math.min(1, value));
  const ease = (value: number) => value * value * (3 - 2 * value);
  let geometry = { start: 0, end: 1, distance: 0, scale: 1, origin: 0, headingTop: 0, headingBottom: 0, introBottom: 0 };
  let frame = 0;

  const render = () => {
    frame = 0;
    if (reducedMotion.matches) return;

    const progress = clamp((window.scrollY - geometry.start) / (geometry.end - geometry.start));
    const travel = geometry.distance * ease(progress);
    const cardsOpen = ease(clamp((progress - 0.45) / 0.55));
    // Keep the incoming heading above the phone throughout the handoff.
    const headingY = Math.min(0, geometry.origin + travel - geometry.headingBottom - 40);
    const introClearance = clamp((geometry.headingTop + headingY - geometry.introBottom - 16) / 48);
    const headingOpacity = ease(clamp((progress - 0.2) / 0.35)) * introClearance;

    story.style.setProperty('--story-progress', String(progress));
    story.style.setProperty('--phone-travel', `${travel}px`);
    story.style.setProperty('--phone-scale', String(1 + (geometry.scale - 1) * ease(progress)));
    story.style.setProperty('--cards-open', String(cardsOpen));
    story.style.setProperty('--how-heading-opacity', String(headingOpacity));
    story.style.setProperty('--how-heading-y', `${headingY}px`);
  };

  const measure = () => {
    story.toggleAttribute('data-story-ready', !reducedMotion.matches);
    if (reducedMotion.matches) return;

    const scrollY = window.scrollY;
    const origin = launch.getBoundingClientRect().top + scrollY + 16;
    const destination = dock.getBoundingClientRect();
    const headingBounds = heading.getBoundingClientRect();
    const start = Math.max(0, origin - window.innerHeight * 0.7);

    geometry = {
      start,
      end: Math.max(start + 1, how.getBoundingClientRect().top + scrollY - 32),
      distance: destination.top + scrollY - origin,
      scale: destination.width / phone.offsetWidth,
      origin,
      headingTop: headingBounds.top + scrollY,
      headingBottom: headingBounds.bottom + scrollY,
      introBottom: intro.getBoundingClientRect().bottom + scrollY,
    };
    render();
  };

  const scheduleRender = () => {
    if (!frame && !reducedMotion.matches) frame = window.requestAnimationFrame(render);
  };

  // Measurements stay outside the scroll handler; only transforms and opacity
  // change while scrolling. The endpoints remain correct after text reflow.
  const observer = new ResizeObserver(measure);
  observer.observe(intro);
  observer.observe(launch);
  observer.observe(how);
  window.addEventListener('resize', measure);
  window.addEventListener('scroll', scheduleRender, { passive: true });
  window.addEventListener('pageshow', measure);
  reducedMotion.addEventListener('change', measure);
  document.fonts.ready.then(measure);
  measure();
}
