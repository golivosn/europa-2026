export type FilterMode = 'avion' | 'train' | 'night-train' | 'bus';

export const FILTER_LABELS: Record<FilterMode, string> = {
  avion: '✈ Avión',
  train: '⊸ Tren',
  'night-train': '☽ Nocturno',
  bus: '◉ Bus',
};

const FILTER_ACTIVE: Record<FilterMode, string> = {
  avion: 'bg-blue-700 text-white border-blue-700',
  train: 'bg-emerald-600 text-white border-emerald-600',
  'night-train': 'bg-violet-700 text-white border-violet-700',
  bus: 'bg-amber-600 text-white border-amber-600',
};

interface Props {
  active: Set<FilterMode>;
  onToggle: (m: FilterMode) => void;
}

const ALL: FilterMode[] = ['avion', 'train', 'night-train', 'bus'];

export function ModeFilter({ active, onToggle }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-5">
      {ALL.map(m => (
        <button
          key={m}
          onClick={() => onToggle(m)}
          className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold border transition-all min-h-[36px] ${
            active.has(m)
              ? FILTER_ACTIVE[m]
              : 'bg-white text-ink-muted border-paper-dark'
          }`}
        >
          {FILTER_LABELS[m]}
        </button>
      ))}
    </div>
  );
}
