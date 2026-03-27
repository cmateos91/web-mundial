export interface Pais {
  nombre: string
  zona: string
  bandera: string
}

// Países participantes + países de interés para espectadores
// Zona horaria IANA — se usa con Intl.DateTimeFormat para convertir horas
export const paises: Pais[] = [
  // ── Anfitriones ──
  { nombre: "México", zona: "America/Mexico_City", bandera: "🇲🇽" },
  { nombre: "Estados Unidos", zona: "America/New_York", bandera: "🇺🇸" },
  { nombre: "Canadá", zona: "America/Toronto", bandera: "🇨🇦" },
  // ── Sudamérica ──
  { nombre: "Argentina", zona: "America/Argentina/Buenos_Aires", bandera: "🇦🇷" },
  { nombre: "Brasil", zona: "America/Sao_Paulo", bandera: "🇧🇷" },
  { nombre: "Colombia", zona: "America/Bogota", bandera: "🇨🇴" },
  { nombre: "Ecuador", zona: "America/Guayaquil", bandera: "🇪🇨" },
  { nombre: "Paraguay", zona: "America/Asuncion", bandera: "🇵🇾" },
  { nombre: "Uruguay", zona: "America/Montevideo", bandera: "🇺🇾" },
  // ── Concacaf ──
  { nombre: "Haití", zona: "America/Port-au-Prince", bandera: "🇭🇹" },
  { nombre: "Panamá", zona: "America/Panama", bandera: "🇵🇦" },
  { nombre: "Curazao", zona: "America/Curacao", bandera: "🇨🇼" },
  // ── Europa ──
  { nombre: "Alemania", zona: "Europe/Berlin", bandera: "🇩🇪" },
  { nombre: "Austria", zona: "Europe/Vienna", bandera: "🇦🇹" },
  { nombre: "Bélgica", zona: "Europe/Brussels", bandera: "🇧🇪" },
  { nombre: "Croacia", zona: "Europe/Zagreb", bandera: "🇭🇷" },
  { nombre: "Escocia", zona: "Europe/London", bandera: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
  { nombre: "España", zona: "Europe/Madrid", bandera: "🇪🇸" },
  { nombre: "Francia", zona: "Europe/Paris", bandera: "🇫🇷" },
  { nombre: "Inglaterra", zona: "Europe/London", bandera: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { nombre: "Noruega", zona: "Europe/Oslo", bandera: "🇳🇴" },
  { nombre: "Países Bajos", zona: "Europe/Amsterdam", bandera: "🇳🇱" },
  { nombre: "Portugal", zona: "Europe/Lisbon", bandera: "🇵🇹" },
  { nombre: "Suiza", zona: "Europe/Zurich", bandera: "🇨🇭" },
  // ── África ──
  { nombre: "Argelia", zona: "Africa/Algiers", bandera: "🇩🇿" },
  { nombre: "Cabo Verde", zona: "Atlantic/Cape_Verde", bandera: "🇨🇻" },
  { nombre: "Costa de Marfil", zona: "Africa/Abidjan", bandera: "🇨🇮" },
  { nombre: "Egipto", zona: "Africa/Cairo", bandera: "🇪🇬" },
  { nombre: "Ghana", zona: "Africa/Accra", bandera: "🇬🇭" },
  { nombre: "Marruecos", zona: "Africa/Casablanca", bandera: "🇲🇦" },
  { nombre: "Senegal", zona: "Africa/Dakar", bandera: "🇸🇳" },
  { nombre: "Sudáfrica", zona: "Africa/Johannesburg", bandera: "🇿🇦" },
  { nombre: "Túnez", zona: "Africa/Tunis", bandera: "🇹🇳" },
  // ── Asia ──
  { nombre: "Arabia Saudita", zona: "Asia/Riyadh", bandera: "🇸🇦" },
  { nombre: "Corea del Sur", zona: "Asia/Seoul", bandera: "🇰🇷" },
  { nombre: "Irán", zona: "Asia/Tehran", bandera: "🇮🇷" },
  { nombre: "Japón", zona: "Asia/Tokyo", bandera: "🇯🇵" },
  { nombre: "Jordania", zona: "Asia/Amman", bandera: "🇯🇴" },
  { nombre: "Qatar", zona: "Asia/Qatar", bandera: "🇶🇦" },
  { nombre: "Uzbekistán", zona: "Asia/Tashkent", bandera: "🇺🇿" },
  // ── Oceanía ──
  { nombre: "Australia", zona: "Australia/Sydney", bandera: "🇦🇺" },
  { nombre: "Nueva Zelanda", zona: "Pacific/Auckland", bandera: "🇳🇿" },
]

