import { useState } from 'react';

interface Props {
  label: string;
  buttonLabel: string;
}

export default function StarterCounter({ label, buttonLabel }: Props) {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-outline-variant bg-surface-container-high p-4">
      <p className="text-sm text-on-surface-variant">
        {label}: <span className="font-semibold tabular-nums text-on-surface">{count}</span>
      </p>
      <button
        className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-on-primary transition hover:bg-primary-container hover:text-on-primary-container focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        onClick={() => setCount((current) => current + 1)}
        type="button"
      >
        {buttonLabel}
      </button>
    </div>
  );
}
