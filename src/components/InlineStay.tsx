import type { StayItem } from '../data/timeline';

export function InlineStay({ city, hostelName, nights, dates, hostelArea, nightTrainArrival }: StayItem) {
  const base = `${nights} noche${nights > 1 ? 's' : ''} (${dates.toLowerCase()})`;
  const nightsText = nightTrainArrival ? `${base} + noche del tren` : base;

  return (
    <div className="flex items-start gap-3 px-4 py-3.5 rounded-xl border border-paper-dark bg-white/50 mx-1">
      <span className="text-base leading-none mt-0.5 flex-shrink-0">🛏</span>
      <div className="min-w-0">
        <span className="text-sm font-semibold text-ink">{hostelName}</span>
        <span className="text-sm text-ink-muted"> — {city}, {nightsText}</span>
        {hostelArea && hostelArea !== '—' && (
          <p className="text-xs text-ink-faint mt-0.5">Zona: {hostelArea}</p>
        )}
      </div>
    </div>
  );
}
