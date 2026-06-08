import { useState } from 'react';
import type { Mode } from './types/trip';
import type { FilterMode } from './components/ModeFilter';
import { LEGS, STAYS, BUDGET } from './data/trip';
import { buildTimeline } from './data/timeline';
import { useTripDay } from './hooks/useTripDay';
import { Hero } from './components/Hero';
import { TodayBanner } from './components/TodayBanner';
import { ModeFilter } from './components/ModeFilter';
import { Timeline } from './components/Timeline';
import { StayCard } from './components/StayCard';
import { Alerts } from './components/Alerts';
import { Checklist } from './components/Checklist';

const ALL_FILTERS: FilterMode[] = ['avion', 'train', 'night-train', 'bus'];

const FILTER_TO_MODES: Record<FilterMode, Mode[]> = {
  avion: ['flight-intl', 'flight'],
  train: ['train'],
  'night-train': ['night-train'],
  bus: ['bus'],
};

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-[10px] font-mono font-bold tracking-widest text-ink-faint uppercase mb-3">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="text-xs font-mono font-bold tracking-widest text-ink-muted uppercase mb-4 flex items-center gap-3">
      <span>{children}</span>
      <span className="flex-1 h-px bg-paper-dark" />
    </h2>
  );
}

export default function App() {
  const tripDay = useTripDay();
  const [activeFilters, setActiveFilters] = useState<Set<FilterMode>>(new Set(ALL_FILTERS));

  const toggleFilter = (m: FilterMode) => {
    setActiveFilters(prev => {
      const next = new Set(prev);
      if (next.has(m)) {
        if (next.size === 1) return prev;
        next.delete(m);
      } else {
        next.add(m);
      }
      return next;
    });
  };

  const activeModes = new Set(
    ALL_FILTERS.filter(f => activeFilters.has(f)).flatMap(f => FILTER_TO_MODES[f])
  );

  const filteredLegs = LEGS.filter(leg => activeModes.has(leg.mode));
  const timelineItems = buildTimeline(filteredLegs);

  return (
    <div className="min-h-screen bg-paper">
      <Hero />
      <TodayBanner />

      <div className="lg:flex lg:items-start max-w-screen-xl mx-auto">

        {/* ── Desktop sidebar ── */}
        <aside className="hidden lg:flex lg:flex-col w-80 xl:w-96 shrink-0 sticky top-0 h-screen overflow-y-auto border-r border-paper-dark bg-white">
          <div className="p-6 space-y-7 flex-1">

            {/* Mini trip status */}
            <div className="pb-5 border-b border-paper-dark">
              <div className="font-mono text-base font-bold text-ink mb-0.5">Europa 2026</div>
              <div className="text-xs text-ink-muted">vie 7 ago — sáb 29 ago</div>
              {tripDay.phase === 'before' && (
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-mono text-3xl font-bold text-ink">{tripDay.daysLeft}</span>
                  <span className="text-sm text-ink-muted">días para el viaje</span>
                </div>
              )}
              {tripDay.phase === 'during' && (
                <div className="mt-2 font-mono text-emerald-700 font-bold text-sm">
                  Día {tripDay.dayNumber} de {tripDay.totalDays} — {tripDay.currentCity}
                </div>
              )}
            </div>

            {/* City nights list */}
            <div>
              <SectionLabel>Ciudades</SectionLabel>
              <div className="divide-y divide-paper-dark">
                {STAYS.map(stay => {
                  const isCurrent = tripDay.phase === 'during' && tripDay.currentCity === stay.city;
                  return (
                    <div key={stay.city} className="flex items-center justify-between py-2">
                      <div>
                        <span className={`text-sm ${isCurrent ? 'font-bold text-emerald-700' : 'text-ink'}`}>
                          {stay.city}
                        </span>
                        {isCurrent && (
                          <span className="ml-1.5 text-[10px] font-mono text-emerald-600">← HOY</span>
                        )}
                        {stay.nights > 0 && (
                          <p className="text-[11px] text-ink-faint mt-0.5">{stay.hostelArea}</p>
                        )}
                      </div>
                      <span className="font-mono text-xs text-ink-muted ml-2 shrink-0">
                        {stay.nights === 0 ? 'day trip' : `${stay.nights}n`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Budget */}
            <div>
              <SectionLabel>Transporte reservado</SectionLabel>
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Por persona</span>
                  <span className="font-mono font-bold text-ink">{BUDGET.totalPerPersonUsd}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Para los dos</span>
                  <span className="font-mono font-bold text-ink">{BUDGET.totalTwoPersonsUsd}</span>
                </div>
                <p className="text-[10px] text-ink-faint mt-1">Sin hostels, comida ni actividades</p>
              </div>
            </div>

            {/* Alerts */}
            <div>
              <SectionLabel>No olvidar</SectionLabel>
              <Alerts />
            </div>

            {/* Checklist */}
            <div>
              <SectionLabel>Checklist de reservas</SectionLabel>
              <Checklist />
            </div>

          </div>
        </aside>

        {/* ── Main content ── */}
        <main className="flex-1 min-w-0 px-4 lg:px-8 py-8 max-w-2xl mx-auto lg:max-w-3xl">

          {/* Mobile: alerts above timeline */}
          <div className="lg:hidden mb-8">
            <SectionTitle>No olvidar</SectionTitle>
            <Alerts />
          </div>

          {/* Timeline */}
          <SectionTitle>Itinerario</SectionTitle>
          <ModeFilter active={activeFilters} onToggle={toggleFilter} />
          <Timeline items={timelineItems} today={tripDay.today} />

          {/* Mobile: estadías + checklist */}
          <div className="lg:hidden mt-10 space-y-10">
            <section>
              <SectionTitle>Estadías</SectionTitle>
              <div className="space-y-3">
                {STAYS.map(stay => (
                  <StayCard
                    key={stay.city}
                    stay={stay}
                    isCurrent={tripDay.phase === 'during' && tripDay.currentCity === stay.city}
                  />
                ))}
              </div>
            </section>

            <section>
              <SectionTitle>Checklist de reservas</SectionTitle>
              <Checklist />
            </section>
          </div>

          <footer className="mt-12 pb-4 text-center">
            <p className="text-xs font-mono text-ink-faint">Europa 2026 · vie 7 ago → sáb 29 ago</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
