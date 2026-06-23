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
  isAlert?: boolean;
}

/** Una estadía = una reserva de hostel (Amsterdam aparece dos veces, por eso usamos id). */
export interface Stay {
  id: string;
  city: string;
  hostelName: string;
  nights: number;
  dates: string;
  /** Rango ISO de noches, para resaltar "dónde estoy hoy". */
  checkInDate: string;
  checkOutDate: string;
  hostelArea: string;
  address: string;
  checkInTime: string;
  checkOutTime: string;
  bookingRef?: string;
  /** Precio total de la reserva, para los dos. */
  priceTwo: string;
  /** Cómo llegan a la ciudad (medio + horario aprox). */
  arrival: string;
  /** Cómo llegar barato desde el punto de llegada al hostel. */
  getThere: string;
  /** Puntos a pie desde el hostel, con minutos. */
  nearby: string[];
  /** Idea de recorrido a pie saliendo del hostel. */
  tour: string;
  /** Una línea de vibra/tip. */
  vibe: string;
  webUrl: string;
  mapUrl: string;
  /** URLs de fotos del hostel (hotlink; requieren conexión). */
  photos: string[];
  /** Avisos puntuales (tasa turística, candado, etc.). */
  notes?: string;
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
  transportPerPersonEur: string;
  transportTwoEur: string;
  hostelsPerPersonEur: string;
  hostelsTwoEur: string;
  grandTotalPerPersonEur: string;
  grandTotalTwoEur: string;
  note: string;
}
