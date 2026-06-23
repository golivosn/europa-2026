import { useTripDay } from '../hooks/useTripDay';

const LINKS = [
  { href: '#itinerario', label: 'Itinerario' },
  { href: '#mapa', label: 'Mapa' },
  { href: '#hostels', label: 'Hostels' },
  { href: '#planes', label: 'Planes' },
];

export function Navbar() {
  const trip = useTripDay();

  let status = '';
  if (trip.phase === 'before') status = `faltan ${trip.daysLeft}d`;
  else if (trip.phase === 'during') status = `Día ${trip.dayNumber}/${trip.totalDays}`;
  else if (trip.phase === 'travel-day') status = '¡hoy!';

  return (
    <nav className="sticky top-0 z-50 bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/80 border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-4 h-14 flex items-center gap-3">
        <a href="#top" className="font-mono text-sm font-bold text-white tracking-tight shrink-0">
          EU<span className="text-white/40">·26</span>
        </a>
        {status && (
          <span className="font-mono text-[10px] text-emerald-400 shrink-0 hidden sm:inline">
            {status}
          </span>
        )}
        <div className="flex-1 flex items-center justify-end gap-1 overflow-x-auto">
          {LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs text-white/60 hover:text-white px-2.5 py-1.5 rounded-md hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
