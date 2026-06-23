import type { Stay } from '../types/trip';

interface Props {
  stay: Stay;
  isCurrent: boolean;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="text-[10px] font-mono text-ink-faint uppercase tracking-wider">{label}</span>
      <div className="text-sm text-ink mt-0.5 leading-relaxed">{children}</div>
    </div>
  );
}

export function StayCard({ stay, isCurrent }: Props) {
  return (
    <article
      className={`rounded-xl bg-white border overflow-hidden transition-shadow ${
        isCurrent
          ? 'border-emerald-600 shadow-md ring-1 ring-emerald-600 ring-offset-1'
          : 'border-paper-dark'
      }`}
    >
      {/* Gallery */}
      {stay.photos.length > 0 && (
        <div className="flex gap-1 overflow-x-auto snap-x snap-mandatory bg-ink-faint/10">
          {stay.photos.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${stay.hostelName} — foto ${i + 1}`}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="h-40 w-[85%] sm:w-[48%] shrink-0 object-cover snap-start"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <div className="px-4 pt-4 pb-3">
        <div className="flex items-baseline justify-between gap-2 mb-0.5">
          <div className="min-w-0">
            <h3 className="font-mono text-lg font-bold text-ink leading-tight">{stay.hostelName}</h3>
            <p className="text-xs text-ink-muted">
              {stay.city} · {stay.hostelArea}
            </p>
          </div>
          <span
            className={`font-mono text-xs px-2 py-0.5 rounded-full shrink-0 ${
              isCurrent ? 'bg-emerald-100 text-emerald-700' : 'bg-paper-dark text-ink-muted'
            }`}
          >
            {stay.nights} noche{stay.nights > 1 ? 's' : ''}
          </span>
        </div>

        <p className="text-xs text-ink-faint font-mono mb-3">{stay.dates}</p>

        {/* Quick facts grid */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-3">
          <Field label="Check-in">
            <span className="font-mono tabular-nums">{stay.checkInTime}</span>
          </Field>
          <Field label="Check-out">
            <span className="font-mono tabular-nums">{stay.checkOutTime}</span>
          </Field>
          <div className="col-span-2">
            <Field label="Dirección">
              <a
                href={stay.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-ink-faint/40 underline-offset-2 hover:decoration-ink"
              >
                {stay.address} ↗
              </a>
            </Field>
          </div>
          <Field label="Precio (2 pers.)">
            <span className="font-mono font-bold">{stay.priceTwo}</span>
          </Field>
          {stay.bookingRef && (
            <Field label="Referencia">
              <span className="font-mono text-xs text-ink-muted break-all">{stay.bookingRef}</span>
            </Field>
          )}
        </div>

        <p className="text-xs text-ink-muted leading-relaxed italic mt-3">{stay.vibe}</p>
      </div>

      {/* Expandable logistics */}
      <details className="group border-t border-paper-dark">
        <summary className="px-4 py-3 cursor-pointer list-none flex items-center justify-between text-xs font-mono font-bold tracking-wider uppercase text-ink-muted hover:text-ink select-none">
          <span>Cómo llegar · qué hay cerca · mini-tour</span>
          <span className="transition-transform group-open:rotate-180 text-ink-faint">▾</span>
        </summary>

        <div className="px-4 pb-4 space-y-4">
          <Field label="Llegada">
            <span className="text-ink-muted">{stay.arrival}</span>
          </Field>

          <Field label="Cómo llegar barato">
            <span className="text-ink-muted">{stay.getThere}</span>
          </Field>

          <div>
            <span className="text-[10px] font-mono text-ink-faint uppercase tracking-wider">A pie desde el hostel</span>
            <ul className="mt-1.5 grid grid-cols-1 gap-1">
              {stay.nearby.map((n) => {
                const [place, mins] = n.split(' — ');
                return (
                  <li key={n} className="flex items-baseline justify-between gap-2 text-sm">
                    <span className="text-ink">{place}</span>
                    {mins && <span className="font-mono text-xs text-ink-faint shrink-0">{mins}</span>}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-lg bg-paper p-3 border border-paper-dark">
            <span className="text-[10px] font-mono text-amber-700 uppercase tracking-wider font-bold">
              ↳ Tour desde el hostel
            </span>
            <p className="text-sm text-ink-muted leading-relaxed mt-1">{stay.tour}</p>
          </div>

          {stay.notes && (
            <p className="text-xs text-ink-muted leading-relaxed flex items-start gap-1.5">
              <span className="text-amber-600 shrink-0">⚠</span>
              <span>{stay.notes}</span>
            </p>
          )}

          <div className="flex flex-wrap gap-2 pt-1">
            <a
              href={stay.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono px-3 py-1.5 rounded-lg border border-paper-dark text-ink-muted hover:border-ink-muted transition-colors"
            >
              Web del hostel ↗
            </a>
            <a
              href={stay.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono px-3 py-1.5 rounded-lg border border-paper-dark text-ink-muted hover:border-ink-muted transition-colors"
            >
              Ver en el mapa ↗
            </a>
          </div>
        </div>
      </details>

      {isCurrent && (
        <div className="px-4 py-2 bg-emerald-50 border-t border-emerald-100">
          <span className="text-[10px] font-mono text-emerald-700 font-bold tracking-wider uppercase">
            ← acá estás ahora
          </span>
        </div>
      )}
    </article>
  );
}
