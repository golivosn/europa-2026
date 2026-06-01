import type { Stay } from '../types/trip';

interface Props {
  stay: Stay;
  isCurrent: boolean;
}

export function StayCard({ stay, isCurrent }: Props) {
  const isDayTrip = stay.nights === 0;

  return (
    <article
      className={`rounded-xl bg-white border p-4 transition-shadow ${
        isCurrent
          ? 'border-emerald-600 shadow-md ring-1 ring-emerald-600 ring-offset-1'
          : 'border-paper-dark'
      }`}
    >
      <div className="flex items-baseline justify-between mb-1">
        <h3 className="font-mono text-lg font-bold text-ink">{stay.city}</h3>
        <span className={`font-mono text-xs px-2 py-0.5 rounded-full ${
          isDayTrip
            ? 'bg-ink-faint/20 text-ink-faint'
            : isCurrent
            ? 'bg-emerald-100 text-emerald-700'
            : 'bg-paper-dark text-ink-muted'
        }`}>
          {isDayTrip ? 'day trip' : `${stay.nights} noche${stay.nights > 1 ? 's' : ''}`}
        </span>
      </div>

      <p className="text-xs text-ink-faint font-mono mb-3">{stay.dates}</p>

      {!isDayTrip && (
        <div className="mb-2">
          <span className="text-[10px] font-mono text-ink-faint uppercase tracking-wider">Zona hostel</span>
          <p className="text-sm text-ink mt-0.5">{stay.hostelArea}</p>
        </div>
      )}

      <p className="text-xs text-ink-muted leading-relaxed italic">{stay.tip}</p>

      {isCurrent && (
        <div className="mt-3 pt-3 border-t border-emerald-100">
          <span className="text-[10px] font-mono text-emerald-700 font-bold tracking-wider uppercase">
            ← acá estás ahora
          </span>
        </div>
      )}
    </article>
  );
}
