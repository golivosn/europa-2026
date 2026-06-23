import type { Leg } from '../types/trip';
import { LEGS, STAYS } from './trip';

const STAY_BY_ID = Object.fromEntries(STAYS.map(s => [s.id, s]));

/** Después de qué tramo se muestra cada estadía (por id, porque Amsterdam se repite). */
const LEG_ARRIVES_AT: Record<string, string> = {
  'leg-1': 'stay-madrid',
  'leg-2': 'stay-barcelona',
  'leg-3': 'stay-roma',
  'leg-4': 'stay-budapest',
  'leg-5': 'stay-praga',
  'leg-6': 'stay-berlin',
  'leg-7': 'stay-amsterdam-1',
  'leg-8': 'stay-amberes',
  'leg-9': 'stay-amsterdam-2',
};

export interface LegItem {
  kind: 'leg';
  leg: Leg;
}

export interface StayItem {
  kind: 'stay';
  id: string;
  city: string;
  hostelName: string;
  nights: number;
  dates: string;
  hostelArea: string;
  nightTrainArrival: boolean;
}

export type TimelineItem = LegItem | StayItem;

export function buildTimeline(filteredLegs: Leg[]): TimelineItem[] {
  const visibleIds = new Set(filteredLegs.map(l => l.id));
  const items: TimelineItem[] = [];

  for (const leg of LEGS) {
    if (!visibleIds.has(leg.id)) continue;

    items.push({ kind: 'leg', leg });

    const stayId = LEG_ARRIVES_AT[leg.id];
    if (stayId) {
      const stay = STAY_BY_ID[stayId];
      if (stay) {
        items.push({
          kind: 'stay',
          id: stay.id,
          city: stay.city,
          hostelName: stay.hostelName,
          nights: stay.nights,
          dates: stay.dates,
          hostelArea: stay.hostelArea,
          nightTrainArrival: leg.mode === 'night-train',
        });
      }
    }
  }

  return items;
}
