# CLAUDE.md — Web del viaje (Europa, ago 2026)

Spec para construir, con Claude Code, una web personal e interactiva del itinerario de un viaje de 21 noches por Europa para 2 personas. Este archivo es la fuente de verdad: **toda la data del viaje está acá abajo, no la inventes ni la modifiques**.

---

## 1. Objetivo y filosofía

Construir una **single-page app personal**, mobile-first, que se use sobre todo desde el celular durante el viaje.

Prioridades, en orden:
1. **Claridad y foco.** Lo importante (qué hago hoy, a dónde voy, a qué hora salgo, cuánto cuesta) tiene que verse de un vistazo.
2. **No abrumar.** Nada de paredes de texto ni datos irrelevantes. Cada pantalla responde a una pregunta concreta.
3. **Funciona offline.** Va a usarse con datos móviles flojos o sin conexión. PWA instalable.
4. **Personalizada.** La app sabe en qué día del viaje estamos y resalta el tramo/ciudad actual.

Anti-objetivos: no es un blog, no es un dashboard corporativo, no lleva login ni backend, no necesita base de datos.

---

## 2. Para quién es

- 2 viajeros argentinos, presupuesto mochilero, hostels (Hostelworld), prioridad al tren sobre el avión.
- Uso principal: celular, en movimiento.
- Idioma de la interfaz: **español**.

---

## 3. Stack técnico

- **Vite + React + TypeScript**
- **Tailwind CSS** (config real, con compilador — no te limites a utilidades core)
- **Routing**: una sola página con secciones ancladas, o `react-router` si conviene para vistas (Timeline / Mapa / Checklist / Presupuesto). Mantenelo simple.
- **Estado y persistencia**: React state + `localStorage` para lo que el usuario togglea (checklist, "tramo reservado", "noche marcada"). Acá **sí** se usa localStorage, es una app real.
- **PWA / offline**: `vite-plugin-pwa` con `registerType: 'autoUpdate'`, manifest instalable, precache de todos los assets. Que abra y funcione sin red.
- **Datos**: archivo TypeScript tipado (`src/data/trip.ts`) con todo el itinerario. Sin fetch, sin API.
- **Deploy**: Vercel, Netlify o GitHub Pages (build estático).
- **Sin dependencias pesadas innecesarias.** Si hace falta mapa, usar algo liviano (ver §7).

---

## 4. Features

### MVP (imprescindibles)
1. **Hero / resumen**: fechas (vie 7 ago → sáb 29 ago 2026, llegada a BA dom 30), 21 noches, 9 ciudades, ruta en una línea, contador de días para el viaje (si la fecha actual es anterior) o "Día X de Y" (si está en curso).
2. **Timeline cronológica** de los 10 tramos: cada uno como card con fecha, día de semana, modo (ícono + color), origen → destino, hora de salida, hora de llegada, duración, precio y nota. Es la vista central.
3. **Filtro por modo de transporte**: avión / tren / tren nocturno / bus. Toggles que muestran/ocultan tramos.
4. **Cards de estadía por ciudad**: noches, fechas, zona sugerida de hostel, una línea de vibra/tip.
5. **"Dónde estoy hoy"**: según `new Date()`, resaltar el tramo o la ciudad actual del viaje. Si no estamos en fechas del viaje, mostrar el contador.
6. **Alertas clave** (ver §6): banner o sección destacada, breve, no intrusiva.
7. **Checklist de reservas** con orden sugerido y estado persistente (localStorage): marcar cada cosa como reservada.

### Nice-to-have (si sobra tiempo, no antes del MVP)
- **Mapa** de la ruta con los puntos de las ciudades (ver §7).
- **Resumen de presupuesto** de transporte (totales por persona y para dos).
- Toggle "tramo reservado" en cada card de la timeline (sincronizado con la checklist).
- Modo oscuro.
- Botón a cada operador para reservar (links en §5).

**Regla de oro**: si una feature no ayuda a responder "qué hago / a dónde voy / cuándo / cuánto", no va en la vista principal. Mandala a una sección secundaria o no la pongas.

---

## 5. DATOS DEL VIAJE (fuente de verdad)

Generá `src/data/trip.ts` con exactamente esta información. Los horarios son **representativos** (los exactos se confirman al comprar): mostralos siempre con un sutil "aprox." o un asterisco que lo aclare.

### Meta
- Viajeros: 2
- Salida de Buenos Aires: viernes 7 ago 2026
- Llegada a Madrid: sábado 8 ago 2026
- Vuelo de vuelta desde Amsterdam: sábado 29 ago 2026 (llega a Buenos Aires domingo 30 a la mañana)
- Total: 21 noches
- Equipaje por persona: mochila + carry-on (2 piezas)

### Tramos (en orden cronológico)

| # | Fecha | Modo | Origen → Destino | Salida | Llegada | Duración | Precio (pp) | Nota |
|---|-------|------|------------------|--------|---------|----------|-------------|------|
| 1 | vie 7 ago | vuelo (internacional) | Buenos Aires EZE → Madrid MAD | ~14:00 | sáb 8, ~06:45 | ~12h45 directo | ~US$536 | Llegás sábado temprano: todo el sábado en Madrid. Iberia / Aerolíneas / Air Europa. |
| 2 | lun 10 ago | tren | Madrid Atocha → Barcelona Sants | 09:00 | ~11:30 | 2h30 | €15–35 | AVE / Ouigo / Iryo. Sin cargo por equipaje. |
| 3 | mié 12 ago | vuelo (interno, low-cost) | Barcelona BCN → Roma FCO | ~10:30 | ~12:25 | 1h55 | €19–35 + valija | Vueling / Ryanair. Cargo por 2ª pieza de equipaje (~€10–30 pp). |
| 4 | vie 14 ago | vuelo (interno, low-cost) | Roma FCO → Budapest BUD | ~10:30 | ~13:00 | ~2h30 | €20–50 + valija | Ryanair / Wizz Air. Cargo por 2ª pieza de equipaje (~€10–30 pp). Llegás con el finde por delante. |
| 5 | mar 18 ago | bus | Budapest Népliget → Praga Florenc | 08:00 | ~15:00 | ~7h | €14–21 | RegioJet / FlixBus. Equipaje incluido. |
| 6 | vie 21 ago | tren | Praga hl.n. → Berlín Hbf | ~09:00 | ~13:15 | 4h15 | €19–26 | EC ComfortJet. Múltiples salidas en viernes. Reservar asiento con anticipación en verano. |
| 7 | mar 25 ago | tren | Berlín Hbf → Amsterdam Centraal | ~08:15 | ~14:30 | ~6h15 | €38–60 | ICE directo (sale cada ~2h). |
| 8 | sáb 29 ago | vuelo (internacional) | Amsterdam AMS → Buenos Aires EZE | ~21:30 | dom 30, ~06:00 | ~13h45 directo | ~US$623 | KLM directo o 1 escala. Tenés el sábado entero en Amsterdam. |

### Estadías (por ciudad)

| Ciudad | Noches | Fechas | Zona hostel sugerida | Tip / vibra |
|--------|--------|--------|----------------------|-------------|
| Madrid | 2 | sáb 8, dom 9 | Malasaña / Lavapiés | Agosto medio vacío, noche tranquila. |
| Barcelona | 2 | lun 10, mar 11 | Gòtic / Poble Sec | Gràcia, Barceloneta, La Boquería. |
| Roma | 2 | mié 12, jue 13 | Trastevere / cerca de Termini | Calor fuerte: arrancar temprano. Reservar Coliseo y Vaticano online. |
| Budapest | 4 | vie 14, sáb 15, dom 16, lun 17 | Distrito VII (ruin bars) | Finde completo: Széchenyi, Szimpla Kert, Instant, Buda. Birra ~€1–2. |
| Praga | 3 | mar 18, mié 19, jue 20 | Žižkov / Vinohrady | Entre semana, más tranquila. Jue 20 es la última noche antes de Berlín. |
| Berlín | 4 | vie 21, sáb 22, dom 23, lun 24 | Kreuzberg / Friedrichshain | Finde completo: vie-sáb para salir fuerte. El barrio más barato del viaje. |
| Amsterdam | 4 | mar 25, mié 26, jue 27, vie 28 | Jordaan / De Pijp | Vie 28 última noche → vuelo sáb 29. Bici, canales, mercado Albert Cuyp. |

### Presupuesto de transporte (referencia, por persona)
- Vuelos internacionales (EZE→MAD + AMS→EZE, open-jaw): ~US$1.000–1.250
- Tramos europeos (3 trenes + 1 bus + 2 vuelos low-cost): ~€150–280 + ~€20–60 de equipaje extra (dos vuelos low-cost)
- **Total transporte por persona: ~US$1.210–1.610**
- **Para los dos: ~US$2.420–3.220**
- No incluye: hostels, comida, salidas, actividades.

### Links de operadores (para los botones de reserva)
- Vuelos internacionales: Google Flights (calendario abierto ±2-3 días)
- Trenes España: renfe.com / ouigo.es / iryo.eu
- Vuelo BCN→Roma: vueling.com / ryanair.com
- Vuelo Roma→Budapest: ryanair.com / wizzair.com
- Bus Budapest→Praga: regiojet.com / flixbus.com
- Tren Praga→Berlín y Berlín→Amsterdam: bahn.de
- Hostels: hostelworld.com

---

## 6. Detalles importantes que NO se pueden perder

Estos son los que evitan cagadas. Mostralos como alertas (un ícono de atención, texto corto), no como párrafos:

1. **Dos vuelos low-cost europeos** (BCN→Roma y Roma→Budapest): ambos cobran 2ª pieza de equipaje (~€10–30 pp c/u). Confirmá tarifas al reservar.
2. **Praga→Berlín (vie 21)**: ahora es viernes, sin obras de vía. Aun así reservar asiento con anticipación — los trenes de verano se llenan.
3. **Berlín→Amsterdam (mar 25)**: ICE directo, reservar con anticipación. Se llena en temporada alta.
4. **Budapest**: llegada viernes 14 → finde completo en el Distrito VII. El sábado es la noche fuerte de los ruin bars.

### Orden sugerido de reserva (para la checklist)
1. Vuelos internacionales (75–80% del costo, los que más varían).
2. Vuelos low-cost europeos (BCN→Roma y Roma→Budapest) — reservar juntos para controlar fechas y equipaje.
3. Tren Berlín→Amsterdam (se llena en verano).
4. Tren Praga→Berlín (reserva de asiento recomendada).
5. Tren Madrid→Barcelona (tarifa anticipada barata).
6. Bus Budapest→Praga (último, casi siempre hay lugar).
7. Hostels en Hostelworld (filtrar rating ≥ 8, buena vibra social).

---

## 7. Diseño

**Mobile-first siempre.** Diseñá para 375px de ancho y escalá hacia arriba.

Dirección estética sugerida (comprometerse con una, ejecutarla con precisión): **"guía de tránsito editorial"** — inspirada en los carteles de salidas de estaciones y aeropuertos. Tipografía fuerte para horas y destinos, números en fuente monoespaciada para que los horarios "canten", paleta cálida tipo papel con **un** color de acento por modo de transporte. Limpia, con aire, con carácter — **nada de look genérico de dashboard de IA**.

- **Tipografía**: evitá Inter / Roboto / Arial / system fonts. Elegí una display con carácter (ej. una grotesque tipo *Space Mono* o *IBM Plex Mono* para horas, una sans editorial legible para el cuerpo). Pará una display distintiva con una body refinada. Jerarquía clara.
- **Color**: un acento dominante + códigos por modo. Sugerencia de paleta por modo (mantené consistencia con CSS variables / tokens de Tailwind):
  - Avión → azul
  - Tren → verde
  - Tren nocturno → violeta/índigo (es de noche)
  - Bus → ámbar
  - Vuelo internacional → mismo azul pero con un realce (es un hito del viaje)
- **Texto sobre fondo de color**: usá un tono oscuro de la misma familia, nunca negro puro ni gris genérico.
- **Espaciado**: generoso. Ritmo vertical consistente. Cards con bordes sutiles, esquinas redondeadas, sin sombras pesadas.
- **Motion**: sobrio. Un page-load con reveals escalonados de los tramos (animation-delay) vale más que mil micro-interacciones. Hover/tap states claros.
- **Resaltado de "hoy"**: el tramo/ciudad actual con el acento fuerte; el resto, atenuado. Que se entienda de un vistazo dónde estás.
- **Accesibilidad**: contraste suficiente, foco visible, tamaños tocables (mín. 44px). Nada de fuentes por debajo de 12px.

Si hace falta mapa: usar `react-simple-maps` o `leaflet` con tiles livianos; marcar las 7 ciudades y la línea de ruta. El mapa es secundario, que no trabe el MVP ni rompa el offline.

---

## 8. Estructura de archivos sugerida

```
src/
  data/
    trip.ts            // toda la data de §5, tipada
  types/
    trip.ts            // Leg, Stay, Mode, etc.
  components/
    Hero.tsx
    TodayBanner.tsx    // "Día X" o contador
    Timeline.tsx
    LegCard.tsx
    ModeFilter.tsx
    StayCard.tsx
    Alerts.tsx
    Checklist.tsx
    BudgetSummary.tsx  // nice-to-have
    RouteMap.tsx       // nice-to-have
  hooks/
    useTripDay.ts      // calcula día actual / tramo actual
    usePersistentState.ts // wrapper de localStorage
  lib/
    dates.ts           // helpers de fecha (date-fns o nativo)
  App.tsx
  main.tsx
```

Tipos base:
```ts
type Mode = 'flight-intl' | 'flight' | 'train' | 'night-train' | 'bus';
interface Leg {
  id: string; date: string; dow: string; mode: Mode;
  from: string; to: string; depart: string; arrive: string;
  duration: string; pricePerPerson: string; note: string;
  approxTimes: boolean; bookingUrl?: string;
}
interface Stay {
  city: string; nights: number; dates: string;
  hostelArea: string; tip: string;
}
```

---

## 9. Pasos de construcción (en orden)

1. Inicializar Vite + React + TS + Tailwind. Configurar PWA con `vite-plugin-pwa`.
2. Crear `types/trip.ts` y `data/trip.ts` con TODA la data de §5. Verificar que esté completa y exacta.
3. `useTripDay` + helpers de fecha. Definir la lógica de "día actual / tramo actual / contador".
4. Hero + TodayBanner.
5. Timeline + LegCard (la vista central). Que se vea perfecta en mobile primero.
6. ModeFilter (toggles por modo).
7. StayCard (estadías por ciudad).
8. Alerts (§6) — breve y destacado.
9. Checklist con persistencia (orden de §6).
10. Pulir diseño según §7 (tipografía, acentos, motion, resaltado de hoy).
11. Nice-to-have: BudgetSummary, toggle "reservado" en cards, mapa, modo oscuro.
12. Verificar offline (cortar la red y que abra), instalar como PWA en el celular, deploy.

Al terminar cada paso importante, mostrar el resultado y pedir feedback antes de seguir.

---

## 10. Alternativa Notion (descartada, para registro)

Notion serviría para algo rápido sin código (una página con la tabla de tramos y toggles), pero pierde lo personalizado: no resalta "dónde estoy hoy" de forma linda, no funciona tan bien offline, y el diseño queda genérico. Para este caso la web gana. Si en algún momento se quiere un respaldo, la tabla de §5 se puede pegar tal cual en Notion.
