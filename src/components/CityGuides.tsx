import type { CityGuide, DayPlan } from '../types/trip';
import { GUIDES } from '../data/guides';

function PlanBlock({ plan }: { plan: DayPlan }) {
  return (
    <details className="group/plan rounded-lg border border-paper-dark bg-paper">
      <summary className="px-3 py-2.5 cursor-pointer list-none flex items-center justify-between gap-2 select-none">
        <span className="min-w-0">
          <span className="text-sm font-semibold text-ink">{plan.title}</span>
          <span className="block text-[11px] font-mono text-ink-faint mt-0.5">{plan.pace}</span>
        </span>
        <span className="text-ink-faint transition-transform group-open/plan:rotate-180 shrink-0">▾</span>
      </summary>
      <div className="px-3 pb-3">
        <ol className="space-y-1.5 mb-3">
          {plan.stops.map((s, i) => {
            const [place, ...rest] = s.split(' — ');
            const note = rest.join(' — ');
            return (
              <li key={i} className="flex gap-2 text-sm">
                <span className="font-mono text-[11px] text-ink-faint mt-0.5 shrink-0">{i + 1}</span>
                <span className="text-ink-muted">
                  <span className="text-ink font-medium">{place}</span>
                  {note && ` — ${note}`}
                </span>
              </li>
            );
          })}
        </ol>
        <p className="text-xs text-ink-muted leading-relaxed flex items-start gap-1.5">
          <span className="shrink-0">🍴</span>
          <span>{plan.food}</span>
        </p>
      </div>
    </details>
  );
}

function GuideCard({ guide, isCurrent }: { guide: CityGuide; isCurrent: boolean }) {
  return (
    <details
      open={isCurrent}
      className={`group rounded-xl bg-white border overflow-hidden ${
        isCurrent ? 'border-emerald-600 ring-1 ring-emerald-600' : 'border-paper-dark'
      }`}
    >
      <summary className="px-4 py-3.5 cursor-pointer list-none flex items-center justify-between gap-2 select-none">
        <div className="min-w-0">
          <span className="font-mono text-base font-bold text-ink">{guide.city}</span>
          {isCurrent && <span className="ml-2 text-[10px] font-mono text-emerald-600">← HOY</span>}
          <span className="block text-[11px] text-ink-faint mt-0.5">{guide.window}</span>
        </div>
        <span className="text-ink-faint transition-transform group-open:rotate-180 shrink-0">▾</span>
      </summary>

      <div className="px-4 pb-4 space-y-3">
        {/* Reservas urgentes */}
        {guide.mustBook.length > 0 && (
          <div className="rounded-lg bg-amber-50 border border-amber-200 p-3">
            <p className="text-[10px] font-mono font-bold tracking-wider uppercase text-amber-800 mb-1.5">
              ⚠ Reservar con anticipación
            </p>
            <ul className="space-y-1">
              {guide.mustBook.map((m) => (
                <li key={m} className="text-xs text-amber-900 leading-snug flex items-start gap-1.5">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="text-xs text-ink-muted italic leading-relaxed">{guide.suggest}</p>

        {/* Planes */}
        <div className="space-y-2">
          {guide.plans.map((p) => (
            <PlanBlock key={p.title} plan={p} />
          ))}
        </div>

        {/* Tips */}
        <div>
          <p className="text-[10px] font-mono font-bold tracking-wider uppercase text-ink-faint mb-1.5">Tips</p>
          <ul className="space-y-1">
            {guide.tips.map((t) => (
              <li key={t} className="text-xs text-ink-muted leading-snug flex items-start gap-1.5">
                <span className="text-ink-faint mt-0.5">•</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </details>
  );
}

interface Props {
  currentCity?: string;
}

export function CityGuides({ currentCity }: Props) {
  return (
    <div className="space-y-3">
      {GUIDES.map((g) => (
        <GuideCard key={g.city} guide={g} isCurrent={currentCity === g.city} />
      ))}
    </div>
  );
}
