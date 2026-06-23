import type { CityGuide } from '../types/trip';

// Planes de día por ciudad, basados en las guías estándar y ajustados a nuestro tiempo real.
export const GUIDES: CityGuide[] = [
  {
    city: 'Madrid',
    window: 'Tarde sáb 8 + dom 9 + lun 10 · ~2,5 días',
    suggest:
      'Sáb tarde + dom: el clásico. Lun: museos exprimiendo los horarios gratis. Anclas del calendario: El Rastro es solo domingo y Reina Sofía cierra los martes.',
    mustBook: [],
    plans: [
      {
        title: 'Clásico imprescindible',
        pace: '1 día (ideal dom) + arranque sáb tarde',
        stops: [
          'Puerta del Sol — km 0, a 5 min del hostel',
          'Plaza Mayor — foto y seguir (bares de la plaza caros)',
          'Mercado de San Miguel — lindo para mirar, carito',
          'Palacio Real + Almudena — fachadas y Plaza de Oriente',
          'Templo de Debod — templo egipcio gratis, el mejor atardecer (~21:15)',
          'Gran Vía — la avenida-show, de noche',
          'Barrio de las Letras — Huertas, de vuelta al hostel',
        ],
        food: 'El Tigre (Chueca): bebida + platón de tapas gratis. O bocata de calamares (~€4-5) junto a Plaza Mayor.',
      },
      {
        title: 'Museos — Triángulo del Arte',
        pace: '1 día completo (mejor lun, por los gratis)',
        stops: [
          'Thyssen — del Renacimiento al pop; gratis lun 12-16h (y dom 10-14h)',
          'Palacio Real — gratis para argentinos lun-jue 17-19h con pasaporte (taquilla, se llena)',
          'Museo del Prado — Velázquez, Goya; gratis 18-20h; andá a 10-15 obras top',
          'Reina Sofía — el Guernica de Picasso; gratis desde 19h; cerrado martes',
        ],
        food: 'Mercado de Antón Martín (al lado del hostel) o tapeo de pie en Plaza de Santa Ana.',
      },
      {
        title: 'Madrid de barrio / mochilero',
        pace: 'Media jornada (ideal dom a la mañana por El Rastro)',
        stops: [
          'El Rastro — rastrillo callejero, solo dom ~9-15h; ojo carteristas',
          'La Latina (Cava Baja) — el vermut del domingo, tapas',
          'Lavapiés — tu barrio: multicultural, grafitis, barato',
          'Malasaña — vintage, murales, Plaza del Dos de Mayo',
          'Parque del Retiro — Palacio de Cristal gratis, barca; temprano o atardecer',
          'Círculo de Bellas Artes (azotea) — vistas 360°, ~€5',
        ],
        food: 'Lavapiés: comida india/paquistaní (~€8-10) o menú del día (~€12) en cualquier bar.',
      },
    ],
    tips: [
      'Museos gratis = colas largas; en horario gratis solo se entra por taquilla. Llegá 15-20 min antes de la franja.',
      'Palacio Real: gratis para argentinos (iberoamericanos) lun-jue 17-19h con pasaporte ORIGINAL. Se llena por cupo.',
      'Calor de agosto: calle a la mañana y al atardecer (ocaso ~21:15), museos/interiores en el pico 14-18h. Cargá agua.',
      'Reina Sofía cierra martes y El Rastro es solo domingo: ordená los días en base a eso.',
    ],
  },
  {
    city: 'Barcelona',
    window: 'Tarde mar 11 + mié 12 + mañana jue 13 · ~1,5 días (poco: priorizá)',
    suggest:
      'Tarde 11: a pie (Rambla, Boquería, Gòtic), sin entradas pagas por si el tren se atrasa. Mié 12: el plan elegido. Jue 13: solo desayuno y aeropuerto (salir ~7:30).',
    mustBook: [
      'Sagrada Família — cupo por hora, se agota en verano',
      'Park Güell (Zona Monumental) — cupo horario',
      'Casa Batlló — conviene reservar franja',
    ],
    plans: [
      {
        title: 'Gaudí imprescindible',
        pace: 'Intenso, con horarios fijos por las entradas',
        stops: [
          'Passeig de Gràcia — avenida modernista a pie',
          'Casa Batlló — la fachada más fotogénica; reservar online',
          'Sagrada Família — el hito; RESERVAR online sí o sí, primer turno 9:00',
          'Park Güell (Zona Monumental) — cupo horario, RESERVAR; combo con Sagrada ahorra',
          'Bunkers del Carmel — atardecer gratis, cerca de Park Güell',
        ],
        food: 'Menú del día (~€12-15) en un bar de Gràcia; evitá Passeig de Gràcia, que es caro.',
      },
      {
        title: 'Casco antiguo + mar',
        pace: 'Relajado, casi todo a pie y gratis',
        stops: [
          'La Rambla — baja desde la puerta del hostel',
          'Mercat de la Boquería — picá en una barra; cierra dom, llegá antes de las 15h',
          'Barri Gòtic — Plaça Reial, Plaça Sant Jaume, callejones medievales',
          'Catedral de Barcelona — gótica, claustro con las 13 ocas',
          'El Born + Santa Maria del Mar — barrio bohemio, basílica gótica',
          'Barceloneta — playa y Port Vell',
        ],
        food: 'Bomba + patatas bravas en la Barceloneta, o tapas en El Xampanyet / Bormuth (El Born).',
      },
      {
        title: 'A tu ritmo / mochilero',
        pace: 'Suelto, gratis y local (cero colas)',
        stops: [
          'Plaça Reial + Barri Gòtic — vuelta tranquila',
          'Vermut en una terraza del Gòtic/Born — la previa catalana, barato',
          'Gràcia — barrio-pueblo, plazas (del Sol, la Virreina), terrazas',
          'Carrer Verdi — vagar sin plan',
          'Bunkers del Carmel — el mejor mirador 360°, gratis; llevá picnic del súper',
        ],
        food: 'Picnic de súper para los Bunkers (jamón, pan, queso, cava) + menú del día en Gràcia.',
      },
    ],
    tips: [
      'Reservá ONLINE con semanas: Sagrada Família y Park Güell (cupo horario, se agotan). El combo Sagrada + Park Güell sale más barato.',
      'Tarde de llegada (mar 11): dejá mochilas en el hostel y salí a pie; nada con entrada pagada ese día por si el vuelo/tren se atrasa.',
      'Jue 13: vuelo ~10:30 → salí ~7:30. Aerobús desde Plaça de Catalunya (en la puerta), ~35 min.',
      'Carteristas: La Rambla, Boquería, metro L3, Barceloneta y Sagrada. Mochila adelante, nada en bolsillos traseros.',
    ],
  },
  {
    city: 'Roma',
    window: 'Tarde jue 13 + vie 14 · ~1,5 días (salen sáb 7:30 a Ciampino)',
    suggest:
      'Jue 13 tarde (recién llegados): Opción a pie + cena en Trastevere. Vie 14: imperial O Vaticano, con la entrada reservada a primera hora. Con este calor no entran cómodos los dos grandes.',
    mustBook: [
      'Coliseo — franja horaria, se agota (ticketing.colosseo.it)',
      'Museos Vaticanos — online obligatorio, ya no se vende en puerta',
    ],
    plans: [
      {
        title: 'Roma imperial imprescindible',
        pace: 'Intenso a la mañana, suave de tarde (arrancar 8h)',
        stops: [
          'Coliseo — RESERVAR online sí o sí, franja 8:30',
          'Foro Romano + Palatino — mismo ticket combinado 24h; poca sombra, gorra y agua',
          'Piazza Venezia / Altar de la Patria — de paso, terraza con vista',
          'Panteón — gratis, interior fresco',
          "Fontana di Trevi — a 5 min del Panteón",
          "Piazza Navona — fuentes de Bernini, a la sombra",
        ],
        food: 'Pizza al taglio (por peso) cerca del Panteón + supplì; cerrá con gelato.',
      },
      {
        title: 'Vaticano',
        pace: 'Una gran inmersión a la mañana, tarde libre',
        stops: [
          'Museos Vaticanos — RESERVAR online obligatorio; franja temprana 8-9h; cerrado domingos',
          'Capilla Sixtina — al final del recorrido, sin ticket aparte; silencio, sin fotos',
          'Basílica de San Pedro — gratis; vestimenta estricta (hombros y rodillas cubiertos)',
          'Cúpula de San Pedro — opcional, ticket aparte, vista enorme',
          "Castel Sant'Angelo — opcional, de vuelta por el río",
        ],
        food: 'Pizzarium (Bonci): la mejor pizza al taglio de Roma, a pasos del Vaticano (~€8-12).',
      },
      {
        title: 'Roma a pie / mochilero',
        pace: 'Relajado, sin reservas (ideal jue 13 tarde)',
        stops: [
          'Plaza de España (escalinata) — al atardecer',
          'Pincio / Villa Borghese — verde, sombra y la mejor vista del atardecer',
          'Fontana di Trevi — de noche, iluminada',
          'Panteón — gratis, fresco',
          "Piazza Navona → Campo de' Fiori — fuentes y plazas",
          'Trastevere — barrio mochilero, birra barata; cená acá',
        ],
        food: 'Supplì y trapizzino en Trastevere. Rellená la botella en los nasoni (fuentes públicas gratis).',
      },
    ],
    tips: [
      'Reservá con semanas: Coliseo (ticketing.colosseo.it) y Museos Vaticanos (online obligatorio). Elegí UNO para la mañana grande.',
      'Calor 33-38°C: exterior temprano (8h), interiores 14-18h, calle al atardecer. Botella + nasoni gratis.',
      'Iglesias (San Pedro / Vaticano): hombros, rodillas y espalda cubiertos; no shorts ni musculosa. Llevá un pañuelo grande.',
      'Salen sáb 7:30 desde Ciampino: dejá la mochila armada el viernes a la noche.',
    ],
  },
  {
    city: 'Budapest',
    window: 'Tarde sáb 15 + dom 16 + lun 17 · ~2,5 días',
    suggest:
      'Sáb noche: ruin bars (LA noche). Dom 16: Pest (evita el Mercado Central, que cierra dom). Lun 17: Buda + termas (y el Mercado Central abierto).',
    mustBook: [
      'Parlamento por dentro — solo con tour y entrada online anticipada, se agota',
      'Aviso: Baños Gellért CERRADOS hasta 2028 → usar Széchenyi',
      'Aviso: Mercado Central cierra los domingos',
    ],
    plans: [
      {
        title: 'Pest imprescindible',
        pace: 'Caminable y plano (ideal dom 16)',
        stops: [
          'Gran Sinagoga de Dohány — la mayor de Europa; cerrada sáb (shabbat), andá dom/lun',
          'Basílica de San Esteban — interior gratis; subí a la cúpula (~2.200 Ft)',
          'Avenida Andrássy — la "Champs-Élysées" húngara',
          'Plaza de los Héroes — monumento milenario, gratis',
          'Városliget + Castillo de Vajdahunyad — parque verde (Széchenyi acá mismo)',
          'Parlamento — por dentro solo tour anticipado; por fuera, imperdible',
          'Zapatos en la Orilla del Danubio — memorial, al atardecer',
        ],
        food: 'Étkezde (comedor) sobre Andrássy: goulash + plato ~2.500-3.500 Ft. O lángos callejero (~1.500 Ft).',
      },
      {
        title: 'Buda + termas',
        pace: 'Medio día de Buda + termas (lun 17)',
        stops: [
          'Széchenyi (baños) — empezá temprano; ticket "Good Morning" antes de 9h más barato; ojotas + toalla propias',
          'Bastión de los Pescadores — la mejor vista del Parlamento; la terraza baja es gratis',
          'Iglesia de Matías — techo de tejas coloridas',
          'Castillo de Buda — patios y miradores gratis; funicular o a pie',
          'Colina Gellért + Ciudadela — la panorámica más alta; subida gratis, bajada al atardecer',
        ],
        food: 'Evitá las trampas turísticas del Castillo; bajá a Pest o un lángos. Birra de barrio ~€1-2.',
      },
      {
        title: 'Ruin bars + río / mochilero',
        pace: 'Relajado de día, fuerte de noche (ruin bars el sáb 15)',
        stops: [
          'Mercado Central — sáb o lun (cierra dom); arriba, lángos y goulash baratos',
          'Paseo por el Danubio al atardecer — Puente de las Cadenas iluminado',
          'Isla Margarita — pulmón verde, picnic; tranvía 4/6',
          'Szimpla Kert — el ruin bar original; sáb llegá antes de las 23h',
          'Instant-Fogas — el complejo más grande, hasta 6 AM; entrada gratis',
        ],
        food: 'Lángos en el Mercado Central o street food kosher dentro del Szimpla Kert.',
      },
    ],
    tips: [
      'Termas: con Gellért cerrado hasta 2028, andá a Széchenyi. Llevá ojotas (obligatorias) y toalla; ticket "Good Morning" antes de 9h.',
      'Ruin bars = sábado 15 (la noche fuerte). Szimpla primero, después Instant-Fogas. Gratis, a pasos del hostel.',
      'Birra ~€1-2 en el Distrito VII; frente al Parlamento o en Buda pagás el doble.',
      'Travelcard BKK 72h (~5.500 Ft) cubre metro/tranvía/bus; NO sirve para el bus 100E del aeropuerto.',
    ],
  },
  {
    city: 'Praga',
    window: 'Tarde mar 18 + mié 19 + jue 20 · ~2,5 días (entre semana, más tranquila)',
    suggest:
      'Mar 18 tarde: plan local (cerca del hostel). Mié 19: Casco antiguo. Jue 20: Castillo + Malá Strana.',
    mustBook: [],
    plans: [
      {
        title: 'Casco antiguo imprescindible',
        pace: 'Medio, todo a pie (mié 19)',
        stops: [
          'Barrio judío Josefov — sinagogas + cementerio; entrá 9-11h, ticket combinado online',
          'Plaza de la Ciudad Vieja — iglesia de Týn, gratis 24/7',
          'Reloj Astronómico (Orloj) — el show cada hora; subí a la torre (mejor vista)',
          'Torre de la Pólvora — puerta gótica, por la calle Celetná',
          'Puente de Carlos — crúzalo a Malá Strana (mejor temprano, ver tips)',
          'Klementinum / orillas del Vltava — atardecer con el castillo iluminado',
        ],
        food: 'Evitá el trdelník (trampa turística). Goulash o svíčková + Pilsner en una hospoda fuera de la plaza (~150-220 CZK).',
      },
      {
        title: 'Castillo + Malá Strana',
        pace: 'Medio-alto, con subida (jue 20)',
        stops: [
          'Castillo de Praga — subí antes de las 9h (tranvía 22 o a pie por Nerudova)',
          'Cambio de guardia — cada hora; el grande con música a las 12h',
          'Catedral de San Vito — gótica, vitrales de Mucha; apenas abre',
          'Callejón del Oro — casitas de colores; gratis después de las 17h',
          'Iglesia de San Nicolás (Malá Strana) — barroco, torre con vista',
          'Muro de John Lennon — gratis 24/7, a 5 min del Puente de Carlos',
        ],
        food: 'En Malá Strana, una cuadra lejos de la plaza: goulash en pan de hogaza + Pilsner.',
      },
      {
        title: 'Praga local / mochilero',
        pace: 'Relajado (ideal mar 18 tarde, cerca del hostel)',
        stops: [
          'Colina Vítkov — a pasos de Karlín; estatua ecuestre y vista gratis',
          'Žižkov — el barrio con más bares por m²; pinta 40-60 CZK',
          'Torre de TV de Žižkov — los bebés gigantes de David Černý',
          'Riegrovy Sady — beer garden clásico, atardecer con el castillo',
          'Letná — otro beer garden, la mejor vista de los puentes',
          'Náplavka — el malecón sobre el río, barcos-bar',
        ],
        food: 'Hospoda de Žižkov (lo más barato del viaje): goulash + Pilsner. Birra de súper 15-30 CZK.',
      },
    ],
    tips: [
      'Cruzá el Puente de Carlos antes de las 8:30-9h (o al amanecer): a media mañana y al atardecer es un hervidero.',
      'Cerveza más barata que el agua: pedí pivo y tomá la local.',
      'Pagá SIEMPRE en coronas (CZK), nunca "cobro en euros" (DCC carísimo). Evitá casas de cambio y cajeros Euronet; usá bancos reales.',
      'Ticket de circuito del Castillo vale 2 días; el Callejón del Oro es gratis después de las 17h. Compralo online.',
    ],
  },
  {
    city: 'Berlín',
    window: 'Tarde vie 21 + sáb 22 + dom 23 + lun 24 · ~3,5 días',
    suggest:
      'Dom 23: barrios alternativos (Mauerpark es solo domingo). Sáb 22 y lun 24: histórico y Muro, según el horario del Reichstag. Museos = comodín para día lluvioso. Vie 21 tarde: Alexanderplatz → Hackescher Markt → Isla de los Museos para ubicarse.',
    mustBook: [
      'Cúpula del Reichstag — reserva GRATIS online con 2-3 meses (visite.bundestag.de), pasaporte original',
      'Aviso: Museo de Pérgamo CERRADO hasta 2027',
    ],
    plans: [
      {
        title: 'Berlín histórico imprescindible',
        pace: 'Medio-alto, mucha caminata por Mitte',
        stops: [
          'Puerta de Brandeburgo — el ícono, temprano sin gentío',
          'Reichstag + cúpula — RESERVA gratis obligatoria con meses; pasaporte original',
          'Memorial del Holocausto — 2.711 estelas, centro de info gratis',
          'Unter den Linden + Bebelplatz — bulevar y placa de la quema de libros nazi',
          'Isla de los Museos + Berliner Dom — conjunto UNESCO, subí a la cúpula del Dom',
          'Alexanderplatz / Fernsehturm — cierre cerca del hostel',
        ],
        food: 'Currywurst en Curry 36 o junto a la Isla de los Museos; €3-4.',
      },
      {
        title: 'Muro y Guerra Fría',
        pace: 'Medio, con tramos en U-Bahn',
        stops: [
          'Memorial del Muro (Bernauer Straße) — franja de la muerte conservada, gratis; tranvía M10',
          'East Side Gallery — 1,3 km del Muro pintado, al aire libre',
          'Oberbaumbrücke — puente de ladrillo sobre el Spree',
          'Checkpoint Charlie — turístico pero foto obligada (ojo los "soldados" pagos)',
          'Topografía del Terror — sobre las ruinas de la Gestapo, gratis, imprescindible',
          'Potsdamer Platz — antigua tierra de nadie; quedan segmentos del Muro',
        ],
        food: "Döner en Mustafa's Gemüse Kebap (Mehringdamm); cola larga, andá temprano.",
      },
      {
        title: 'Barrios y vida alternativa',
        pace: 'Relajado — hacelo el DOMINGO 23 por Mauerpark',
        stops: [
          'Mercado de pulgas de Mauerpark — dom 10-18h, a 10 min del hostel',
          'Bearpit Karaoke — dom ~15h (abr-oct), karaoke al aire libre, gratis',
          'Kreuzberg (Kottbusser Tor) — turco-alternativo, bares, murales',
          'RAW-Gelände — depósito ferroviario reconvertido, street art, mercado dominical',
          'Boxhagener Platz (Friedrichshain) — plaza con mercado y bares',
          'Späti + birra junto al Spree — legal tomar en la calle',
        ],
        food: 'Mercados de RAW/Mauerpark, o döner/currywurst en cualquier Imbiss; €4-6.',
      },
      {
        title: 'Museos / día lluvioso',
        pace: 'Tranquilo, bajo techo (comodín)',
        stops: [
          'Neues Museum — el busto de Nefertiti (Pérgamo cerrado hasta 2027)',
          'Pergamon — Das Panorama — sustituto del museo cerrado',
          'DDR Museum — vida en la RDA, interactivo; junto al Berliner Dom',
          'Gemäldegalerie — maestros antiguos (Vermeer, Rembrandt), poco abarrotada',
          'Topografía del Terror (interior) — refugio de lluvia, gratis',
        ],
        food: "Konnopke's Imbiss (currywurst histórica, Eberswalder Str.), de camino al hostel.",
      },
    ],
    tips: [
      'Reichstag/cúpula gratis PERO reservá online con 2-3 meses (agosto se agota ~6 semanas antes) en visite.bundestag.de. Pasaporte original.',
      'Mauerpark es de domingo (mercado + Bearpit Karaoke ~15h): hacé los barrios alternativos el dom 23.',
      'Spätis + birra en la calle: legal y barato, la forma más económica de salir en Berlín.',
      'BVG zona AB: billete diario (~€10) conviene. U2/U8 y tranvía M1/M10 a la puerta. Validá antes de subir.',
      'Pérgamo cerrado hasta 2027: no lo agendes. Museum Pass Berlin (~€32, 3 días) amortiza con 2 entradas.',
    ],
  },
  {
    city: 'Amsterdam',
    window: 'Tramo 1: tarde lun 25 + mar 26 (ClinkMama). Tramo 2: tarde vie 28 + sáb 29 hasta ~15h (Flying Pig)',
    suggest:
      'Tarde 25 (cansados del tren): canales a pie. Mar 26: museos con reserva. Tarde 28: local en bici / Red Light de noche. Sáb 29 mañana: cierre suave y armar valijas; tren a Schiphol ~15h.',
    mustBook: [
      'Casa de Ana Frank — online, salen martes 10h para 6 semanas después; se agota en minutos',
      'Museo Van Gogh — franja horaria, 5-6 semanas antes',
    ],
    plans: [
      {
        title: 'Museos imprescindibles',
        pace: 'Intenso pero con foco (mar 26)',
        stops: [
          'Casa de Ana Frank — RESERVAR online con horario exacto (€16,50)',
          'Caminata por Jordaan — 20-25 min entre los dos polos, gratis',
          'Museo Van Gogh — RESERVAR con 5-6 semanas; franja horaria (€25)',
          'Rijksmuseum — Vermeer, Rembrandt (La ronda de noche); reservá igual',
          'Museumplein + Vondelpark — plaza-parque y verde para descansar',
        ],
        food: 'Stroopwafel recién hecha (~€2,50) o broodje haring (arenque) de un carrito.',
      },
      {
        title: 'Canales y centro a pie',
        pace: 'Tranquilo, sin reservas (ideal una tarde)',
        stops: [
          'Plaza Dam — Palacio Real, punto de arranque',
          'Begijnhof — patio escondido del s.XIV, gratis',
          'Bloemenmarkt — mercado de flores flotante sobre el Singel',
          'Anillo de canales UNESCO — Herengracht, Keizersgracht, Prinsengracht',
          'Jordaan — el barrio más lindo: cafés, galerías',
          'Paseo en barco por los canales — ~1h, €18-20',
        ],
        food: 'Croquetas de la pared en FEBO (~€2) o papas fritas holandesas con mayonesa.',
      },
      {
        title: 'Ámsterdam local / mochilero',
        pace: 'En bici (tarde 28 + sáb 29 mañana)',
        stops: [
          'Alquilar bici (~€12-15/día) — la forma real de moverse',
          'Mercado Albert Cuyp (De Pijp) — el mercado callejero más grande, lun-sáb',
          'Vondelpark — pedaleo y picnic',
          'Nieuwmarkt — plaza con De Waag, terrazas',
          'Ferry gratis a NDSM (detrás de Centraal) — F4, arte urbano; bici incluida',
          'Red Light District (de noche) — solo de paso; no fotos a las trabajadoras',
        ],
        food: 'En Albert Cuyp: stroopwafel del puesto original y kibbeling (pescado frito).',
      },
    ],
    tips: [
      'RESERVAR YA: Ana Frank (martes 10h hora Ámsterdam, 6 semanas antes) y Van Gogh (5-6 semanas). Sin ticket online con horario, no entrás.',
      'Repartí: tarde 25 canales (sin horarios); mar 26 museos con reserva; tarde 28 local en bici; sáb 29 cierre suave.',
      'Ferries gratis detrás de Centraal (F3 EYE, F4 NDSM): plan barato con vistas del IJ, bici incluida.',
      'Sáb 29: tren Centraal → Schiphol cada 4-10 min, 14-17 min, ~€6-7. Desde Flying Pig (al lado de Centraal) salí ~15h: margen amplio.',
    ],
  },
  {
    city: 'Amberes',
    window: 'Tarde-noche jue 27 + mañana vie 28 · escapada corta',
    suggest:
      'Jue 27 tarde-noche: lo esencial a pie (casco viejo + río + MAS al atardecer). Vie 28 mañana: diamantes/moda cerca del hostel, según la hora del FlixBus.',
    mustBook: [],
    plans: [
      {
        title: 'Lo esencial a pie',
        pace: 'Tarde-noche del jue 27, todo a pie',
        stops: [
          'Estación Central — una de las más lindas del mundo; entrá aunque no tomes tren',
          'Meir — peatonal comercial hacia el casco',
          'Grote Markt + Ayuntamiento — plaza medieval, casas gremiales, fuente de Brabo',
          'Catedral de Nuestra Señora — gótica, 4 Rubens (confirmá cierre ~17-18h)',
          'Het Steen + río Escalda — castillo medieval junto al río, al atardecer',
          'MAS (terraza) — panorama 360° GRATIS al atardecer; subís en escaleras mecánicas',
        ],
        food: "Papas fritas belgas (frituur) + una De Koninck 'bolleke' (la cerveza local).",
      },
      {
        title: 'Amberes con onda',
        pace: 'Mañana del vie 28, antes del bus',
        stops: [
          'Barrio de los diamantes — al lado del hostel; ~84% de los diamantes del mundo',
          'Rubenshuis — casa-taller de Rubens (verificá horario 2026, estuvo en obras)',
          'MoMu (ModeMuseum) — moda de vanguardia belga, abre ~11h',
          'Nationalestraat + Kammenstraat — la "milla del diseño": Dries Van Noten, vintage',
          'De Koninck (cervecería) — tour + degustación de la bolleke',
        ],
        food: 'Waffle de Lieja para caminar, o más frietjes. Cerrá con una bolleke.',
      },
    ],
    tips: [
      'Jue tarde-noche: casco viejo + río aprovechando la tarde larga. Vie mañana: diamantes/moda (arranca al lado del hostel), acortable según el FlixBus.',
      'Terraza del MAS gratis al atardecer: el mejor cierre del jueves, vista 360° sobre el Escalda.',
      'Confirmá horarios 2026 de Catedral, Rubenshuis y MoMu: varios abren 10-11h y la mañana del viernes es corta.',
    ],
  },
];
