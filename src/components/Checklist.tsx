import { CHECKLIST } from '../data/trip';
import { usePersistentState } from '../hooks/usePersistentState';

export function Checklist() {
  const [checked, setChecked] = usePersistentState<Record<string, boolean>>('checklist-v1', {});

  const toggle = (id: string) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const doneCount = CHECKLIST.filter(item => checked[item.id]).length;
  const allDone = doneCount === CHECKLIST.length;

  return (
    <div className="space-y-2">
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-ink-muted font-mono">{doneCount} / {CHECKLIST.length} reservados</span>
        <div className="flex-1 mx-3 bg-paper-dark rounded-full h-1.5 overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${(doneCount / CHECKLIST.length) * 100}%` }}
          />
        </div>
      </div>

      {allDone && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-center text-sm text-emerald-700 font-medium mb-3">
          ¡Todo reservado! A hacer las valijas. ✈
        </div>
      )}

      {CHECKLIST.map((item, i) => (
        <button
          key={item.id}
          onClick={() => toggle(item.id)}
          className={`w-full text-left flex items-start gap-3 p-3.5 rounded-xl border transition-all min-h-[56px] ${
            checked[item.id]
              ? 'bg-paper-dark border-paper-dark'
              : 'bg-white border-paper-dark hover:border-ink-muted'
          }`}
        >
          {/* Checkbox */}
          <div
            className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
              checked[item.id] ? 'bg-emerald-600 border-emerald-600' : 'border-ink-muted bg-white'
            }`}
          >
            {checked[item.id] && (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>

          {/* Content */}
          <div className="min-w-0">
            <div className={`text-sm font-semibold leading-snug ${
              checked[item.id] ? 'line-through text-ink-muted' : 'text-ink'
            }`}>
              <span className="font-mono text-ink-faint mr-1">{i + 1}.</span>
              {item.label}
            </div>
            <div className="text-xs text-ink-muted mt-0.5 leading-snug">{item.detail}</div>
          </div>
        </button>
      ))}
    </div>
  );
}
