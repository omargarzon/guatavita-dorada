// Líneas de tiempo de la página. Fechas, cifras y nombres verificados:
// no cambiarlos (ver Anexo C del archivo de contenido).

import type { Lang } from "./sections";

export type Categoria =
  | "muisca"
  | "leyenda"
  | "conquista"
  | "colonia"
  | "oro"
  | "republica"
  | "embalse"
  | "hoy";

// Colores sugeridos por categoría (Conquista y Colonia comparten terracota).
// `texto` es un tono más oscuro del mismo color, para que el texto pequeño tenga buen contraste.
export const categorias: Record<Categoria, { color: string; texto: string; nombre: Record<Lang, string> }> = {
  muisca: { color: "#b8860b", texto: "#7a5a00", nombre: { es: "Muisca", en: "Muisca" } },
  leyenda: { color: "#a4362b", texto: "#a4362b", nombre: { es: "Leyenda", en: "Legend" } },
  conquista: { color: "#b5653a", texto: "#8f4a26", nombre: { es: "Conquista", en: "Conquest" } },
  colonia: { color: "#b5653a", texto: "#8f4a26", nombre: { es: "Colonia", en: "Colonial era" } },
  oro: { color: "#d98e04", texto: "#8a5a00", nombre: { es: "Oro", en: "Gold" } },
  republica: { color: "#6b6b6b", texto: "#555555", nombre: { es: "República", en: "Republic" } },
  embalse: { color: "#2b6f8a", texto: "#1f5f7a", nombre: { es: "Embalse", en: "Reservoir" } },
  hoy: { color: "#2f6b45", texto: "#2f6b45", nombre: { es: "Hoy", en: "Today" } },
};

export interface Hito {
  fecha: Record<Lang, string>;
  texto: Record<Lang, string>;
  categoria: Categoria;
}

// Sección 6: cuatro siglos intentando vaciar la laguna
export interface IntentoOro {
  fecha: Record<Lang, string>;
  // Nombre propio (igual en ambos idiomas) o descripción traducida
  protagonista: string | Record<Lang, string>;
  texto: Record<Lang, string>;
}

export const fiebreDelOro: IntentoOro[] = [
  {
    fecha: { es: "Década de 1540", en: "1540s" },
    protagonista: "Lázaro Fonte",
    texto: {
      es: "Según fray Pedro Simón, intentó desaguar la laguna y desistió por falta de dinero.",
      en: "According to Friar Pedro Simón, he tried to drain the lake and gave up for lack of money.",
    },
  },
  {
    fecha: { es: "1562", en: "1562" },
    protagonista: "Antonio de Sepúlveda",
    texto: {
      es: "Un comerciante obtiene licencia real y, con cientos de indígenas, abre una zanja en el borde de la laguna. Ese **corte todavía se ve hoy**. El nivel bajó y aparecieron piezas de oro y esmeraldas, pero Sepúlveda murió pobre y fue enterrado en la iglesia de Guatavita.",
      en: "A merchant obtains a royal licence and, with hundreds of Indigenous workers, cuts a trench into the rim of the lake. That **cut can still be seen today**. The water level dropped and gold pieces and emeralds appeared, but Sepúlveda died poor and was buried in the church of Guatavita.",
    },
  },
  {
    fecha: { es: "1823–1826", en: "1823–1826" },
    protagonista: {
      es: "José Ignacio “Pepe” París y Charles Stuart Cochrane",
      en: "José Ignacio “Pepe” París and Charles Stuart Cochrane",
    },
    texto: {
      es: "Abren zanjas y un túnel. El agua apenas baja unos centímetros, los túneles se derrumban y mueren trabajadores. París queda arruinado.",
      en: "They dig trenches and a tunnel. The water drops only a few centimetres, the tunnels collapse and workers die. París is left ruined.",
    },
  },
  {
    fecha: { es: "1899–1914", en: "1899–1914" },
    protagonista: "Contractors Ltd. (Hartley Knowles)",
    texto: {
      es: "Una empresa británica construye un túnel y usa bombas de vapor. Hacia 1904 casi logra vaciar la laguna, pero el lodo del fondo se endurece como cemento bajo el sol. Las piezas halladas se subastan en Sotheby's (Londres) el 11 de diciembre de 1911. La Primera Guerra Mundial acaba con la empresa y la laguna vuelve a llenarse.",
      en: "A British company builds a tunnel and uses steam pumps. Around 1904 it almost manages to empty the lake, but the mud on the bottom hardens like cement in the sun. The pieces found are auctioned at Sotheby's (London) on 11 December 1911. The First World War puts an end to the company and the lake fills up again.",
    },
  },
  {
    fecha: { es: "1920", en: "1920" },
    protagonista: "Dorothy Warren",
    texto: {
      es: "Funda otra compañía, sin resultados.",
      en: "She founds another company, with no results.",
    },
  },
  {
    fecha: { es: "1932", en: "1932" },
    protagonista: { es: "Buzos estadounidenses", en: "American divers" },
    texto: {
      es: "Recuperan unos pocos objetos.",
      en: "They recover a handful of objects.",
    },
  },
  {
    fecha: { es: "1949–1953", en: "1949–1953" },
    protagonista: "Gustavo Jaramillo Sánchez",
    texto: {
      es: "Registra la laguna como “mina El Dorado” para esquivar la prohibición de desecar lagunas y usa dragas.",
      en: "He registers the lake as the “El Dorado mine” to get around the ban on draining lakes, and uses dredges.",
    },
  },
  {
    fecha: { es: "1965", en: "1965" },
    protagonista: "Colombian Exploration Inc.",
    texto: {
      es: "El Estado colombiano frena el proyecto: desde entonces solo los arqueólogos oficiales pueden intervenir la laguna.",
      en: "The Colombian State halts the project: since then, only official archaeologists may work in the lake.",
    },
  },
];

// Sección 11: línea de tiempo completa
export const lineaDeTiempo: Hito[] = [
  {
    fecha: { es: "600–1600 d. C.", en: "AD 600–1600" },
    texto: { es: "Periodo muisca tardío; se elabora la Balsa Muisca", en: "Late Muisca period; the Muisca Raft is made" },
    categoria: "muisca",
  },
  {
    fecha: { es: "c. 1490", en: "c. 1490" },
    texto: {
      es: "Batalla de Chocontá: Guatavita apoya al zaque Michuá contra el zipa Saguamanchica",
      en: "Battle of Chocontá: Guatavita backs the zaque Michuá against the zipa Saguamanchica",
    },
    categoria: "muisca",
  },
  {
    fecha: { es: "1537", en: "1537" },
    texto: { es: "Gonzalo Jiménez de Quesada llega a la región", en: "Gonzalo Jiménez de Quesada reaches the region" },
    categoria: "conquista",
  },
  {
    fecha: { es: "Década de 1540", en: "1540s" },
    texto: {
      es: "Encomienda de Lázaro Fonte; posible primer intento de desagüe",
      en: "Lázaro Fonte's encomienda; possible first attempt to drain the lake",
    },
    categoria: "oro",
  },
  {
    fecha: { es: "1562", en: "1562" },
    texto: {
      es: "Licencia real a Antonio de Sepúlveda para desaguar la laguna",
      en: "Royal licence granted to Antonio de Sepúlveda to drain the lake",
    },
    categoria: "oro",
  },
  {
    fecha: { es: "1567", en: "1567" },
    texto: { es: "Fundación del convento de San Pedro Mártir", en: "The convent of San Pedro Mártir is founded" },
    categoria: "colonia",
  },
  {
    fecha: { es: "1576", en: "1576" },
    texto: { es: "Registro oficial del oro de Sepúlveda: 232 pesos", en: "Official record of Sepúlveda's gold: 232 pesos" },
    categoria: "oro",
  },
  {
    fecha: { es: "18 mar. 1593", en: "18 Mar 1593" },
    texto: {
      es: "Miguel de Ibarra funda el pueblo de indios de Guatavita",
      en: "Miguel de Ibarra founds the “pueblo de indios” (Indigenous town) of Guatavita",
    },
    categoria: "colonia",
  },
  {
    fecha: { es: "c. 1626", en: "c. 1626" },
    texto: { es: "Fray Pedro Simón publica la leyenda de la Cacica", en: "Friar Pedro Simón publishes the legend of the Cacica" },
    categoria: "leyenda",
  },
  {
    fecha: { es: "c. 1636", en: "c. 1636" },
    texto: {
      es: "Rodríguez Freyle escribe *El Carnero* con el relato de El Dorado",
      en: "Rodríguez Freyle writes *El Carnero*, with the account of El Dorado",
    },
    categoria: "leyenda",
  },
  {
    fecha: { es: "1768", en: "1768" },
    texto: { es: "La parroquia pasa al clero secular", en: "The parish passes to the secular clergy" },
    categoria: "colonia",
  },
  {
    fecha: { es: "1810", en: "1810" },
    texto: {
      es: "Humboldt publica una lámina de la laguna en *Vues des Cordillères*",
      en: "Humboldt publishes a plate of the lake in *Vues des Cordillères*",
    },
    categoria: "oro",
  },
  {
    fecha: { es: "1823–1826", en: "1823–1826" },
    texto: { es: "Intento de Pepe París y Charles S. Cochrane", en: "Attempt by Pepe París and Charles S. Cochrane" },
    categoria: "oro",
  },
  {
    fecha: { es: "1856", en: "1856" },
    texto: { es: "Hallazgo de la balsa de Siecha", en: "The Siecha raft is found" },
    categoria: "muisca",
  },
  {
    fecha: { es: "1859", en: "1859" },
    texto: { es: "Primera edición impresa de *El Carnero*", en: "First printed edition of *El Carnero*" },
    categoria: "leyenda",
  },
  {
    fecha: { es: "1899", en: "1899" },
    texto: {
      es: "Hartley Knowles obtiene la concesión; nace Contractors Ltd.",
      en: "Hartley Knowles obtains the concession; Contractors Ltd. is born",
    },
    categoria: "oro",
  },
  {
    fecha: { es: "1904", en: "1904" },
    texto: { es: "Contractors Ltd. casi vacía la laguna", en: "Contractors Ltd. almost empties the lake" },
    categoria: "oro",
  },
  {
    fecha: { es: "11 dic. 1911", en: "11 Dec 1911" },
    texto: { es: "Subasta de los hallazgos en Sotheby's, Londres", en: "The finds are auctioned at Sotheby's, London" },
    categoria: "oro",
  },
  {
    fecha: { es: "1930", en: "1930" },
    texto: { es: "Guatavita deja de ser capital de provincia", en: "Guatavita ceases to be a provincial capital" },
    categoria: "republica",
  },
  {
    fecha: { es: "1959–1962", en: "1959–1962" },
    texto: { es: "Construcción de la presa de Tominé", en: "Construction of the Tominé dam" },
    categoria: "embalse",
  },
  {
    fecha: { es: "14 nov. 1964", en: "14 Nov 1964" },
    texto: { es: "Empieza la construcción de Guatavita la Nueva", en: "Construction of Guatavita la Nueva begins" },
    categoria: "embalse",
  },
  {
    fecha: { es: "1965", en: "1965" },
    texto: {
      es: "El Estado prohíbe nuevas búsquedas privadas en la laguna",
      en: "The State bans further private searches in the lake",
    },
    categoria: "oro",
  },
  {
    fecha: { es: "Ago. 1967", en: "Aug 1967" },
    texto: { es: "Comienza la mudanza", en: "The move begins" },
    categoria: "embalse",
  },
  {
    fecha: { es: "15 sep. 1967", en: "15 Sep 1967" },
    texto: {
      es: "Traslado oficial; el pueblo viejo queda bajo el agua",
      en: "Official relocation; the old town is left under water",
    },
    categoria: "embalse",
  },
  {
    fecha: { es: "1969", en: "1969" },
    texto: {
      es: "La Balsa Muisca, hallada en Pasca, llega al Museo del Oro",
      en: "The Muisca Raft, found in Pasca, arrives at the Gold Museum",
    },
    categoria: "muisca",
  },
  {
    fecha: { es: "1993", en: "1993" },
    texto: { es: "La CAR declara la reserva forestal de la laguna", en: "The CAR declares the lake's forest reserve" },
    categoria: "hoy",
  },
  {
    fecha: { es: "2021", en: "2021" },
    texto: {
      es: "La reserva se recategoriza en el sistema nacional de áreas protegidas",
      en: "The reserve is recategorised within the national system of protected areas",
    },
    categoria: "hoy",
  },
];
