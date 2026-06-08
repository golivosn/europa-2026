import type { Leg, Mode } from '../types/trip';
import { formatDisplayDate } from '../lib/dates';

const MODE_CONFIG: Record<Mode, {
  bar: string; text: string; border: string; badge: string; icon: string; label: string;
}> = {
  'flight-intl': {
    bar: 'bg-blue-700', text: 'text-blue-700', border: 'border-blue-700',
    badge: 'bg-blue-700 text-white', icon: '✈', label: 'Vuelo internacional',
  },
  'flight': {
    bar: 'bg-blue-500', text: 'text-blue-500', border: 'border-blue-500',
    badge: 'bg-blue-500 text-white', icon: '✈', label: 'Vuelo',
  },
  'train': {
    bar: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-600',
    badge: 'bg-emerald-600 text-white', icon: '⊸', label: 'Tren',
  },
  'night-train': {
    bar: 'bg-violet-700', text: 'text-violet-700', border: 'border-violet-700',
    badge: 'bg-violet-700 text-white', icon: '☽', label: 'Tren nocturno',
  },
  'bus': {
    bar: 'bg-amber-600', text: 'text-amber-600', border: 'border-amber-600',
    badge: 'bg-amber-600 text-white', icon: '◉', label: 'Bus',
  },
};

interface Props {
  leg: Leg;
  isToday: boolean;
}

export function LegCard({ leg, isToday }: Props) {
  const m = MODE_CONFIG[leg.mode];

  return (
    <article
      className={`rounded-xl bg-white overflow-hidden border transition-shadow ${
        isToday ? 'border-transparent shadow-lg ring-2 ring-offset-2 ring-ink' : 'border-paper-dark'
      }`}
    >
      {/* Color header */}
      <div className={`${m.bar} px-4 py-2.5 flex items-center justify-between`}>
        <span className="text-white text-xs font-mono font-bold tracking-widest uppercase">
          {m.icon} {m.label}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-white/70 text-xs font-mono">
            {leg.dow}, {formatDisplayDate(leg.date)}
          </span>
          {isToday && (
            <span className="bg-white/25 text-white text-[10px] font-mono font-bold px-1.5 py-0.5 rounded">
              HOY
            </span>
          )}
        </div>
      </div>

      <div className="px-4 py-4">
        {/* Times + route */}
        <div className="flex items-start justify-between gap-2 mb-4">
          {/* Departure */}
          <div className="min-w-0">
            <div className="font-mono text-3xl font-bold text-ink leading-none tabular-nums">
              {leg.depart}
            </div>
            <div className="text-xs text-ink-muted mt-1 leading-snug">{leg.from}</div>
          </div>

          {/* Center connector */}
          <div className="flex flex-col items-center flex-1 pt-3 min-w-[60px]">
            <div className="text-[10px] font-mono text-ink-faint mb-1">{leg.duration}</div>
            <div className="w-full flex items-center gap-0.5">
              <div className="flex-1 h-px bg-ink-faint/40" />
              <div className={`text-[10px] ${m.text}`}>▶</div>
              <div className="flex-1 h-px bg-ink-faint/40" />
            </div>
            {leg.approxTimes && (
              <div className="text-[9px] text-ink-faint mt-1 font-mono">aprox.</div>
            )}
          </div>

          {/* Arrival */}
          <div className="min-w-0 text-right">
            <div className="font-mono text-3xl font-bold text-ink leading-none tabular-nums">
              {leg.arrive}
            </div>
            <div className="text-xs text-ink-muted mt-1 leading-snug text-right">{leg.to}</div>
          </div>
        </div>

        {/* Price + booking */}
        <div className="flex items-center justify-between pt-3 border-t border-paper-dark">
          <span className="font-mono text-sm font-bold text-ink">
            {leg.pricePerPerson}
            <span className="font-sans font-normal text-xs text-ink-faint ml-1">/ persona</span>
          </span>
          {leg.bookingRef ? (
            <span className={`text-xs font-mono px-3 py-1.5 rounded-lg border ${m.text} ${m.border}`}>
              Reserva {leg.bookingRef}
            </span>
          ) : leg.bookingUrl ? (
            <a
              href={leg.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-colors ${m.text} ${m.border} hover:opacity-80`}
            >
              Gestionar →
            </a>
          ) : null}
        </div>

        {/* Seats */}
        {leg.seats && (
          <div className="mt-2 flex items-center gap-1.5 text-xs text-ink-muted">
            <span className={m.text}>◫</span>
            <span className="font-mono">{leg.seats}</span>
          </div>
        )}

        {/* Note */}
        {leg.note && (
          <p className="text-xs text-ink-muted mt-3 leading-relaxed">{leg.note}</p>
        )}

        {/* Alert flag */}
        {leg.isAlert && (
          <div className="mt-2 flex items-center gap-1.5 text-xs text-amber-700">
            <span>⚠</span>
            <span className="font-medium">Ver alertas importantes abajo</span>
          </div>
        )}
      </div>
    </article>
  );
}
