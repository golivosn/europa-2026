import { daysBetween, todayStr } from '../lib/dates';

const TRIP_DEPART_BA = '2026-08-07';
const TRIP_DAY_1 = '2026-08-08';
const TRIP_LAST_DAY = '2026-08-29';
const TRIP_DAYS_TOTAL = 22;

const CITY_SCHEDULE: { city: string; from: string; to: string }[] = [
  { city: 'Madrid', from: '2026-08-08', to: '2026-08-09' },
  { city: 'Barcelona', from: '2026-08-10', to: '2026-08-11' },
  { city: 'Roma', from: '2026-08-12', to: '2026-08-14' },
  { city: 'Milán', from: '2026-08-15', to: '2026-08-16' },
  { city: 'Venecia', from: '2026-08-17', to: '2026-08-17' },
  { city: 'Budapest', from: '2026-08-18', to: '2026-08-20' },
  { city: 'Praga', from: '2026-08-21', to: '2026-08-23' },
  { city: 'Berlín', from: '2026-08-24', to: '2026-08-26' },
  { city: 'Amsterdam', from: '2026-08-27', to: '2026-08-29' },
];

export type TripPhase = 'before' | 'travel-day' | 'during' | 'after';

export interface TripDayInfo {
  phase: TripPhase;
  today: string;
  daysLeft?: number;
  dayNumber?: number;
  totalDays?: number;
  currentCity?: string;
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
  const found = CITY_SCHEDULE.find(c => today >= c.from && today <= c.to);

  return {
    phase: 'during',
    today,
    dayNumber,
    totalDays: TRIP_DAYS_TOTAL,
    currentCity: found?.city,
  };
}
