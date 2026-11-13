document.querySelectorAll<HTMLElement>('[data-project-stats]').forEach((root) => {
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const counters = Array.from(root.querySelectorAll<HTMLElement>('[data-stat-card]')).flatMap((card) => {
    const number = card.querySelector<HTMLElement>('[data-stat-number]');
    if (!number) return [];

    const decimals = Number(number.dataset.decimals ?? 0);
    return [{
      card,
      number,
      target: Number(number.dataset.value),
      finalValue: number.textContent ?? '',
      formatter: new Intl.NumberFormat(root.dataset.numberLocale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }),
      visible: false,
      frame: 0,
    }];
  });

  type Counter = (typeof counters)[number];
  const animateCounter = (counter: Counter) => {
    cancelAnimationFrame(counter.frame);
    counter.number.textContent = counter.formatter.format(0);
    const startedAt = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / 1000, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.number.textContent = progress === 1
        ? counter.finalValue
        : counter.formatter.format(counter.target * eased);
      if (progress < 1) counter.frame = requestAnimationFrame(tick);
    };
    counter.frame = requestAnimationFrame(tick);
  };

  const countersByCard = new Map(counters.map((counter) => [counter.card, counter]));
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const counter = countersByCard.get(entry.target as HTMLElement);
      if (!counter) return;

      const visible = entry.isIntersecting && entry.intersectionRatio >= 0.2;
      if (visible && !counter.visible && !motionPreference.matches) animateCounter(counter);
      if (!visible) {
        cancelAnimationFrame(counter.frame);
        counter.number.textContent = motionPreference.matches ? counter.finalValue : counter.formatter.format(0);
      }
      counter.visible = visible;
    });
  }, { threshold: [0, 0.2] }) : null;

  const updateMotionPreference = () => {
    const reduced = motionPreference.matches;
    root.classList.toggle('is-animated', !reduced);
    counters.forEach((counter) => {
      cancelAnimationFrame(counter.frame);
      counter.number.textContent = reduced || !observer ? counter.finalValue : counter.formatter.format(0);
      if (!reduced && observer && counter.visible) animateCounter(counter);
    });
  };

  motionPreference.addEventListener('change', updateMotionPreference);
  updateMotionPreference();
  counters.forEach((counter) => observer?.observe(counter.card));
});
