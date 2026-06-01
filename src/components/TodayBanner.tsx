import { useTripDay } from '../hooks/useTripDay';

export function TodayBanner() {
  const info = useTripDay();

  if (info.phase === 'before') {
    return (
      <div className="bg-ink text-white px-4 py-4 border-t border-white/10">
        <div className="max-w-2xl mx-auto flex items-baseline gap-3">
          <span className="font-mono text-4xl font-bold text-white/90">{info.daysLeft}</span>
          <div>
            <p className="text-sm text-white/60 leading-none">días para el viaje</p>
            <p className="text-xs text-white/35 mt-0.5">vie 7 ago 2026 — empezamos</p>
          </div>
        </div>
      </div>
    );
  }

  if (info.phase === 'travel-day') {
    return (
      <div className="bg-blue-700 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-sm font-bold tracking-wider">HOY ES EL DÍA</p>
          <p className="text-white/70 text-sm mt-0.5">Buenos Aires EZE → Madrid MAD ✈</p>
        </div>
      </div>
    );
  }

  if (info.phase === 'during') {
    return (
      <div className="bg-emerald-700 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-baseline gap-3">
          <span className="font-mono text-4xl font-bold">Día {info.dayNumber}</span>
          <div>
            <p className="text-sm text-white/70 leading-none">de {info.totalDays} — {info.currentCity ?? 'en ruta'}</p>
          </div>
        </div>
      </div>
    );
  }

  if (info.phase === 'after') {
    return (
      <div className="bg-ink-muted/20 px-4 py-3">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm text-ink-muted text-center">El viaje ya fue. ¡Qué grande! 🥹</p>
        </div>
      </div>
    );
  }

  return null;
}
