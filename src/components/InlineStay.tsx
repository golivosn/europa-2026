import type { StayItem } from '../data/timeline';

export function InlineStay({ city, nights, dates, hostelArea, nightTrainArrival }: StayItem) {
  const isDayTrip = nights === 0;

  let nightsText: string;
  if (isDayTrip) {
    nightsText = 'solo de día · sin hostel';
  } else {
    const base = `${nights} noche${nights > 1 ? 's' : ''} de hostel (${dates.toLowerCase()})`;
    nightsText = nightTrainArrival ? `${base} + noche del tren` : base;
  }

  return (
    <div className="flex items-start gap-3 px-4 py-3.5 rounded-xl border border-paper-dark bg-white/50 mx-1">
      <span className="text-base leading-none mt-0.5 flex-shrink-0">🛏</span>
      <div className="min-w-0">
        <span className="text-sm font-semibold text-ink">{city}</span>
        <span className="text-sm text-ink-muted"> — {nightsText}</span>
        {!isDayTrip && hostelArea && hostelArea !== '—' && (
          <p className="text-xs text-ink-faint mt-0.5">Zona: {hostelArea}</p>
        )}
      </div>
    </div>
  );
}
