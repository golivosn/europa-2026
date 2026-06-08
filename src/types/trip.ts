export type Mode = 'flight-intl' | 'flight' | 'train' | 'night-train' | 'bus';

export interface Leg {
  id: string;
  date: string;
  dow: string;
  mode: Mode;
  from: string;
  to: string;
  depart: string;
  arrive: string;
  duration: string;
  pricePerPerson: string;
  note: string;
  approxTimes: boolean;
  bookingUrl?: string;
  bookingRef?: string;
  seats?: string;
  isAlert?: boolean;
}

export interface Stay {
  city: string;
  nights: number;
  dates: string;
  hostelArea: string;
  tip: string;
}

export interface Alert {
  id: string;
  text: string;
  legId?: string;
}

export interface ChecklistItem {
  id: string;
  label: string;
  detail: string;
}

export interface TripMeta {
  travelers: number;
  departBa: string;
  arriveEurope: string;
  returnFlight: string;
  arriveBa: string;
  totalNights: number;
  cities: number;
}

export interface BudgetSummary {
  intlFlightsUsd: string;
  europeanLegsEur: string;
  totalPerPersonUsd: string;
  totalTwoPersonsUsd: string;
}
