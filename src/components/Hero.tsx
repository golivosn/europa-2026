import { META } from '../data/trip';

const ROUTE = ['EZE', 'MAD', 'BCN', 'ROM', 'BUD', 'PRG', 'BER', 'AMS', 'EZE'];

export function Hero() {
  return (
    <header className="bg-ink text-white px-4 pt-10 pb-8">
      <div className="max-w-2xl mx-auto">
        <p className="font-mono text-xs tracking-widest text-white/40 uppercase mb-2">
          Itinerario personal
        </p>
        <h1 className="font-mono text-5xl font-bold leading-none tracking-tight mb-1">
          EUROPA
        </h1>
        <h2 className="font-mono text-5xl font-bold leading-none tracking-tight text-white/30 mb-6">
          2026
        </h2>

        <div className="flex items-center gap-3 text-sm text-white/60 mb-6 font-sans">
          <span>vie 7 ago</span>
          <span className="flex-1 border-t border-white/20 border-dashed" />
          <span>sáb 29 ago</span>
        </div>

        <div className="flex gap-4 text-sm text-white/50 font-mono mb-8">
          <span><span className="text-white font-bold">{META.totalNights}</span> noches</span>
          <span><span className="text-white font-bold">{META.cities}</span> ciudades</span>
          <span><span className="text-white font-bold">{META.travelers}</span> viajeros</span>
        </div>

        {/* Route line */}
        <div className="overflow-x-auto -mx-4 px-4">
          <div className="flex items-center gap-1 min-w-max">
            {ROUTE.map((city, i) => (
              <span key={i} className="flex items-center gap-1">
                <span className="font-mono text-xs font-bold text-white/80 tracking-wider">{city}</span>
                {i < ROUTE.length - 1 && (
                  <span className="text-white/25 text-xs">
                    {city === 'EZE' || city === 'BCN' || city === 'ROM' ? '✈' : '→'}
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
