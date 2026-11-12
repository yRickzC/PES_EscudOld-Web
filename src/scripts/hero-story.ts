const story = document.querySelector<HTMLElement>('[data-phone-story]');
const intro = story?.querySelector<HTMLElement>('[data-story-intro]');
const launch = story?.querySelector<HTMLElement>('[data-phone-launch]');
const phone = story?.querySelector<HTMLElement>('[data-story-phone]');
const dock = story?.querySelector<HTMLElement>('[data-phone-dock]');
const how = story?.querySelector<HTMLElement>('[data-how-section]');
const heading = story?.querySelector<HTMLElement>('[data-how-heading]');
const track = story?.querySelector<HTMLElement>('[data-how-track]');
const scene = story?.querySelector<HTMLElement>('[data-how-scene]');
const help = story?.querySelector<HTMLElement>('[data-scroll-help]');
const exchanges = Array.from(story?.querySelectorAll<HTMLElement>('[data-how-exchange]') ?? []);

if (story && intro && launch && phone && dock && how && heading && track && scene && help && exchanges.length) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = (value: number, max = 1) => Math.max(0, Math.min(max, value));
  const ease = (value: number) => value * value * (3 - 2 * value);
  let geometry = {
    start: 0, end: 1, distance: 0, distanceX: 0, scale: 1, origin: 0,
    headingTop: 0, headingBottom: 0, introBottom: 0,
    pinStart: 0, scrollSpace: 0, stepDistance: 1, messageDistance: 1,
  };
  let frame = 0;
  let active = 0;

  const render = () => {
    frame = 0;
    if (reducedMotion.matches) return;

    const scrollY = window.scrollY;
    const progress = clamp((scrollY - geometry.start) / (geometry.end - geometry.start));
    const travel = geometry.distance * ease(progress);
    const pinned = clamp(scrollY - geometry.pinStart, geometry.scrollSpace);
    const headingY = Math.min(0, geometry.origin + travel - geometry.headingBottom - 40);
    const clearance = clamp((geometry.headingTop + headingY - geometry.introBottom - 16) / 48);

    story.style.setProperty('--story-progress', String(progress));
    story.style.setProperty('--phone-travel', `${travel + pinned}px`);
    story.style.setProperty('--phone-x', `${geometry.distanceX * ease(progress)}px`);
    story.style.setProperty('--phone-scale', String(1 + (geometry.scale - 1) * ease(progress)));
    story.style.setProperty('--exchanges-open', String(ease(clamp((progress - 0.45) / 0.55))));
    story.style.setProperty('--how-heading-opacity', String(ease(clamp((progress - 0.2) / 0.35)) * clearance));
    story.style.setProperty('--how-heading-y', `${headingY}px`);

    const sequence = clamp((scrollY - geometry.pinStart) / geometry.stepDistance, exchanges.length);
    const current = Math.min(Math.floor(sequence), exchanges.length - 1);
    // Most of each scroll interval is a reading pause. Only the last 30%
    // lifts the current message and brings the next one up from below.
    const transition = current === exchanges.length - 1 ? 0 : ease(clamp((sequence - current - 0.7) / 0.3));
    active = Math.min(current + (transition >= 0.5 ? 1 : 0), exchanges.length - 1);

    exchanges.forEach((exchange, index) => {
      const isCurrent = index === current;
      const isNext = index === current + 1;
      const opacity = isCurrent ? 1 - transition : isNext ? transition : 0;
      const offset = isCurrent ? -transition : isNext ? 1 - transition : index < current ? -1 : 1;
      exchange.style.setProperty('--exchange-opacity', String(opacity));
      exchange.style.setProperty('--message-y', `${offset * geometry.messageDistance}px`);
      exchange.toggleAttribute('data-current', index === active);
      exchange.setAttribute('aria-hidden', String(index !== active));
      exchange.inert = index !== active;
    });
  };

  const measure = () => {
    story.toggleAttribute('data-story-ready', !reducedMotion.matches);
    help.hidden = reducedMotion.matches;
    if (reducedMotion.matches) {
      scene.removeAttribute('tabindex');
      scene.removeAttribute('aria-describedby');
      exchanges.forEach(exchange => {
        exchange.removeAttribute('aria-hidden');
        exchange.inert = false;
      });
      return;
    }

    scene.tabIndex = 0;
    scene.setAttribute('aria-describedby', help.id);
    const scrollY = window.scrollY;
    const sceneHeight = scene.offsetHeight;
    const pinTop = Math.max(24, (window.innerHeight - sceneHeight) / 2);
    const stepDistance = Math.max(480, window.innerHeight * 0.95);
    const scrollSpace = stepDistance * exchanges.length;
    story.style.setProperty('--scene-top', `${pinTop}px`);
    story.style.setProperty('--scene-height', `${sceneHeight}px`);
    story.style.setProperty('--scroll-space', `${scrollSpace}px`);

    const pinStart = track.getBoundingClientRect().top + scrollY - pinTop;
    const pinned = clamp(scrollY - pinStart, scrollSpace);
    const origin = launch.getBoundingClientRect().top + scrollY + 16;
    const destination = dock.getBoundingClientRect();
    const launchBounds = launch.getBoundingClientRect();
    const headingBounds = heading.getBoundingClientRect();
    const start = Math.max(0, origin - window.innerHeight * 0.7);

    // Subtract the sticky displacement to recover a stable document endpoint,
    // even on resize, restored scroll positions or direct section links.
    geometry = {
      start,
      end: Math.max(start + 1, Math.min(pinStart, how.getBoundingClientRect().top + scrollY - 32)),
      distance: destination.top + scrollY - pinned - origin,
      distanceX: destination.left + destination.width / 2 - (launchBounds.left + launchBounds.width / 2),
      scale: destination.width / phone.offsetWidth,
      origin,
      headingTop: headingBounds.top + scrollY,
      headingBottom: headingBounds.bottom + scrollY,
      introBottom: intro.getBoundingClientRect().bottom + scrollY,
      pinStart, scrollSpace, stepDistance,
      messageDistance: Math.min(sceneHeight * 0.7, 480),
    };
    render();
  };

  const scheduleRender = () => {
    if (!frame && !reducedMotion.matches) frame = window.requestAnimationFrame(render);
  };

  scene.addEventListener('keydown', (event) => {
    if (reducedMotion.matches || event.target !== scene) return;
    let next: number;
    switch (event.key) {
      case 'ArrowDown': case 'ArrowRight': next = Math.min(active + 1, exchanges.length - 1); break;
      case 'ArrowUp': case 'ArrowLeft': next = Math.max(active - 1, 0); break;
      case 'Home': next = 0; break;
      case 'End': next = exchanges.length - 1; break;
      default: return;
    }
    event.preventDefault();
    window.scrollTo({ top: geometry.pinStart + (next + 0.2) * geometry.stepDistance });
  });

  // Layout is measured only when it changes; scrolling updates transforms and
  // opacity without layout reads or artificial scroll interception.
  const observer = new ResizeObserver(measure);
  [intro, launch, heading, scene].forEach(element => observer.observe(element));
  window.addEventListener('resize', measure);
  window.addEventListener('scroll', scheduleRender, { passive: true });
  window.addEventListener('pageshow', measure);
  reducedMotion.addEventListener('change', measure);
  document.fonts.ready.then(measure);
  measure();
}
