import type { Leg } from '../types/trip';
import { LEGS, STAYS } from './trip';

const STAY_BY_CITY = Object.fromEntries(STAYS.map(s => [s.city, s]));

const LEG_ARRIVES_AT: Record<string, string> = {
  'leg-1': 'Madrid',
  'leg-2': 'Barcelona',
  'leg-3': 'Roma',
  'leg-4': 'Milán',
  'leg-5': 'Venecia',
  'leg-6': 'Budapest',
  'leg-7': 'Praga',
  'leg-8': 'Berlín',
  'leg-9': 'Amsterdam',
};

export interface LegItem {
  kind: 'leg';
  leg: Leg;
}

export interface StayItem {
  kind: 'stay';
  city: string;
  nights: number;
  dates: string;
  hostelArea: string;
  tip: string;
  nightTrainArrival: boolean;
}

export type TimelineItem = LegItem | StayItem;

export function buildTimeline(filteredLegs: Leg[]): TimelineItem[] {
  const visibleIds = new Set(filteredLegs.map(l => l.id));
  const items: TimelineItem[] = [];

  for (const leg of LEGS) {
    if (!visibleIds.has(leg.id)) continue;

    items.push({ kind: 'leg', leg });

    const city = LEG_ARRIVES_AT[leg.id];
    if (city) {
      const stay = STAY_BY_CITY[city];
      if (stay) {
        items.push({
          kind: 'stay',
          city: stay.city,
          nights: stay.nights,
          dates: stay.dates,
          hostelArea: stay.hostelArea,
          tip: stay.tip,
          nightTrainArrival: leg.mode === 'night-train',
        });
      }
    }
  }

  return items;
}
