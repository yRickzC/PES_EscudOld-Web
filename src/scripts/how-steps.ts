const steps = document.querySelector<HTMLElement>('[data-how-steps]');
const controls = steps?.querySelector<HTMLElement>('[data-step-controls]');
const title = steps?.querySelector<HTMLElement>('[data-current-step-title]');
const panelsContainer = steps?.querySelector<HTMLElement>('[data-step-panels]');
const panels = Array.from(steps?.querySelectorAll<HTMLElement>('[data-step-panel]') ?? []);
const tabs = Array.from(controls?.querySelectorAll<HTMLButtonElement>('[role="tab"]') ?? []);

if (steps && controls && title && panelsContainer && panels.length && panels.length === tabs.length) {
  const mobile = window.matchMedia('(width < 64rem)');
  let selected = 0;

  const update = () => {
    const focusWasInControls = controls.contains(document.activeElement);
    steps.toggleAttribute('data-mobile-steps', mobile.matches);
    controls.hidden = !mobile.matches;
    panelsContainer.setAttribute('role', mobile.matches ? 'presentation' : 'list');
    title.textContent = panels[selected].querySelector('.how-card-title')?.textContent?.trim() ?? '';

    panels.forEach((panel, index) => {
      panel.hidden = mobile.matches && index !== selected;
      panel.setAttribute('role', mobile.matches ? 'tabpanel' : 'listitem');
      panel.setAttribute('aria-labelledby', mobile.matches ? tabs[index].id : `how-step-title-${index + 1}`);
      panel.tabIndex = mobile.matches ? 0 : -1;
    });
    tabs.forEach((tab, index) => {
      tab.setAttribute('aria-selected', String(index === selected));
      tab.tabIndex = index === selected ? 0 : -1;
    });

    // Keep focus visible when a resize hides the mobile controls.
    if (!mobile.matches && focusWasInControls) panels[selected].focus({ preventScroll: true });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      selected = index;
      update();
    });
    tab.addEventListener('keydown', (event) => {
      let next: number;
      switch (event.key) {
        case 'ArrowRight': next = (index + 1) % tabs.length; break;
        case 'ArrowLeft': next = (index - 1 + tabs.length) % tabs.length; break;
        case 'Home': next = 0; break;
        case 'End': next = tabs.length - 1; break;
        default: return;
      }
      event.preventDefault();
      selected = next;
      update();
      tabs[next].focus({ preventScroll: true });
    });
  });

  mobile.addEventListener('change', () => {
    // A panel focused on desktop must remain visible when switching to mobile.
    const focused = panels.findIndex(panel => panel.contains(document.activeElement));
    if (mobile.matches && focused !== -1) selected = focused;
    update();
  });
  update();
}
