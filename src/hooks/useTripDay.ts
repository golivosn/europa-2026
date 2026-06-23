import { daysBetween, todayStr } from '../lib/dates';

const TRIP_DEPART_BA = '2026-08-07';
const TRIP_DAY_1 = '2026-08-08';
const TRIP_LAST_DAY = '2026-08-29';
const TRIP_DAYS_TOTAL = 22;

/** Por id de estadía, para resaltar la reserva exacta (Amsterdam aparece dos veces). */
const STAY_SCHEDULE: { id: string; city: string; from: string; to: string }[] = [
  { id: 'stay-madrid', city: 'Madrid', from: '2026-08-08', to: '2026-08-10' },
  { id: 'stay-barcelona', city: 'Barcelona', from: '2026-08-11', to: '2026-08-12' },
  { id: 'stay-roma', city: 'Roma', from: '2026-08-13', to: '2026-08-14' },
  { id: 'stay-budapest', city: 'Budapest', from: '2026-08-15', to: '2026-08-17' },
  { id: 'stay-praga', city: 'Praga', from: '2026-08-18', to: '2026-08-20' },
  { id: 'stay-berlin', city: 'Berlín', from: '2026-08-21', to: '2026-08-24' },
  { id: 'stay-amsterdam-1', city: 'Amsterdam', from: '2026-08-25', to: '2026-08-26' },
  { id: 'stay-amberes', city: 'Amberes', from: '2026-08-27', to: '2026-08-27' },
  { id: 'stay-amsterdam-2', city: 'Amsterdam', from: '2026-08-28', to: '2026-08-28' },
];

export type TripPhase = 'before' | 'travel-day' | 'during' | 'after';

export interface TripDayInfo {
  phase: TripPhase;
  today: string;
  daysLeft?: number;
  dayNumber?: number;
  totalDays?: number;
  currentCity?: string;
  currentStayId?: string;
}

export function useTripDay(): TripDayInfo {
  const today = todayStr();

  if (today < TRIP_DEPART_BA) {
    return { phase: 'before', today, daysLeft: daysBetween(today, TRIP_DEPART_BA) };
  }

  if (today === TRIP_DEPART_BA) {
    return { phase: 'travel-day', today };
  }

  if (today > TRIP_LAST_DAY) {
    return { phase: 'after', today };
  }

  const dayNumber = daysBetween(TRIP_DAY_1, today) + 1;
  const found = STAY_SCHEDULE.find(c => today >= c.from && today <= c.to);

  return {
    phase: 'during',
    today,
    dayNumber,
    totalDays: TRIP_DAYS_TOTAL,
    currentCity: found?.city,
    currentStayId: found?.id,
  };
}
