import type { Mode } from '../types/trip';

interface City {
  city: string;
  lat: number;
  lon: number;
  n: number;
  /** -1 etiqueta arriba del punto, 1 abajo. */
  labelDir: -1 | 1;
}

// Las 8 ciudades europeas en orden de primera visita.
const CITIES: City[] = [
  { city: 'Madrid', lat: 40.4168, lon: -3.7038, n: 1, labelDir: 1 },
  { city: 'Barcelona', lat: 41.3874, lon: 2.1686, n: 2, labelDir: 1 },
  { city: 'Roma', lat: 41.9028, lon: 12.4964, n: 3, labelDir: 1 },
  { city: 'Budapest', lat: 47.4979, lon: 19.0402, n: 4, labelDir: 1 },
  { city: 'Praga', lat: 50.0755, lon: 14.4378, n: 5, labelDir: 1 },
  { city: 'Berlín', lat: 52.52, lon: 13.405, n: 6, labelDir: -1 },
  { city: 'Amsterdam', lat: 52.3676, lon: 4.9041, n: 7, labelDir: -1 },
  { city: 'Amberes', lat: 51.2194, lon: 4.4025, n: 8, labelDir: 1 },
];

// Secuencia del recorrido (índices de CITIES); Amsterdam (6) se visita dos veces.
const ROUTE: { from: number; to: number; mode: Mode }[] = [
  { from: 0, to: 1, mode: 'train' },
  { from: 1, to: 2, mode: 'flight' },
  { from: 2, to: 3, mode: 'flight' },
  { from: 3, to: 4, mode: 'train' },
  { from: 4, to: 5, mode: 'bus' },
  { from: 5, to: 6, mode: 'train' },
  { from: 6, to: 7, mode: 'bus' },
  { from: 7, to: 6, mode: 'bus' },
];

const STROKE: Record<Mode, string> = {
  'flight-intl': '#1d4ed8',
  flight: '#3b82f6',
  train: '#059669',
  'night-train': '#6d28d9',
  bus: '#d97706',
};

const W = 340;
const H = 300;
const PAD_X = 50;
const PAD_Y = 40;
const COSLAT = Math.cos((46 * Math.PI) / 180);

const xs = CITIES.map((c) => c.lon * COSLAT);
const xMin = Math.min(...xs);
const xMax = Math.max(...xs);
const latMin = Math.min(...CITIES.map((c) => c.lat));
const latMax = Math.max(...CITIES.map((c) => c.lat));

function px(c: City) {
  return PAD_X + ((c.lon * COSLAT - xMin) / (xMax - xMin)) * (W - 2 * PAD_X);
}
function py(c: City) {
  return PAD_Y + ((latMax - c.lat) / (latMax - latMin)) * (H - 2 * PAD_Y);
}

interface Props {
  currentCity?: string;
}

export function RouteMap({ currentCity }: Props) {
  return (
    <div className="rounded-xl border border-paper-dark bg-white p-3">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Mapa de la ruta por Europa">
        {/* Segmentos */}
        {ROUTE.map((seg, i) => {
          const a = CITIES[seg.from];
          const b = CITIES[seg.to];
          const isFlight = seg.mode === 'flight' || seg.mode === 'flight-intl';
          // La vuelta Amberes→Amsterdam la curvamos un poco para que no se pise con la ida.
          const back = seg.from === 7 && seg.to === 6;
          const path = back
            ? `M ${px(a)} ${py(a)} Q ${px(a) - 22} ${(py(a) + py(b)) / 2} ${px(b)} ${py(b)}`
            : `M ${px(a)} ${py(a)} L ${px(b)} ${py(b)}`;
          return (
            <path
              key={i}
              d={path}
              fill="none"
              stroke={STROKE[seg.mode]}
              strokeWidth={2}
              strokeDasharray={isFlight ? '5 4' : undefined}
              strokeLinecap="round"
              opacity={0.85}
            />
          );
        })}

        {/* Ciudades */}
        {CITIES.map((c) => {
          const isCurrent = currentCity === c.city;
          const x = px(c);
          const y = py(c);
          return (
            <g key={c.city}>
              {isCurrent && <circle cx={x} cy={y} r={9} fill="#059669" opacity={0.18} />}
              <circle
                cx={x}
                cy={y}
                r={5}
                fill={isCurrent ? '#059669' : '#1c1917'}
                stroke="#fff"
                strokeWidth={1.5}
              />
              <text
                x={x}
                y={y + (c.labelDir === 1 ? 16 : -10)}
                textAnchor="middle"
                className="font-mono"
                fontSize={9}
                fontWeight={isCurrent ? 700 : 600}
                fill={isCurrent ? '#047857' : '#44403c'}
              >
                {c.n}. {c.city}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Leyenda */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center mt-1 text-[10px] font-mono text-ink-muted">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-4 border-t-2 border-dashed" style={{ borderColor: STROKE.flight }} /> vuelo
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-4 border-t-2" style={{ borderColor: STROKE.train }} /> tren
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-4 border-t-2" style={{ borderColor: STROKE.bus }} /> bus
        </span>
      </div>
      <p className="text-[10px] text-ink-faint text-center mt-1.5 leading-snug">
        Tramo europeo · Madrid → Barcelona → Roma → Budapest → Praga → Berlín → Amsterdam ↔ Amberes
      </p>
    </div>
  );
}
