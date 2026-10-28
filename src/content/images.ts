// Textos de cada imagen: descripción para lectores de pantalla (alt) y pie de foto.
// El autor y la licencia NO van aquí: salen de credits.ts (generado desde Wikimedia).

import type { ImagenId } from "./credits";
import type { Lang } from "./sections";

export interface TextoImagen {
  alt: Record<Lang, string>;
  pie: Record<Lang, string>;
}

export const imagenes: Record<ImagenId, TextoImagen> = {
  "img-01": {
    alt: {
      es: "Grabado en blanco y negro de Theodor de Bry: varios indígenas cubren de polvo de oro a un hombre de pie, mientras otros preparan la ceremonia",
      en: "Black-and-white engraving by Theodor de Bry: several Indigenous men cover a standing man in gold dust while others prepare the ceremony",
    },
    pie: {
      es: "El “hombre dorado” imaginado por el grabador europeo Theodor de Bry (siglo XVI).",
      en: "The “gilded man” as imagined by the European engraver Theodor de Bry (16th century).",
    },
  },
  "img-02": {
    alt: {
      es: "La Balsa Muisca de oro sobre fondo negro: una balsa con una figura central grande rodeada de figuras más pequeñas",
      en: "The gold Muisca Raft on a black background: a raft with a large central figure surrounded by smaller figures",
    },
    pie: {
      es: "La Balsa Muisca, en el Museo del Oro de Bogotá.",
      en: "The Muisca Raft, at the Gold Museum in Bogotá.",
    },
  },
  "img-03": {
    alt: {
      es: "Vista lateral de la Balsa Muisca de oro iluminada sobre fondo negro",
      en: "Side view of the gold Muisca Raft lit against a black background",
    },
    pie: {
      es: "Otra vista de la Balsa Muisca.",
      en: "Another view of the Muisca Raft.",
    },
  },
  "img-04": {
    alt: {
      es: "Detalle de la Balsa Muisca: la figura principal con tocado y las figuras que la acompañan sobre la balsa de oro",
      en: "Detail of the Muisca Raft: the main figure with a headdress and the figures accompanying it on the gold raft",
    },
    pie: {
      es: "Detalle: el cacique y su séquito sobre la balsa.",
      en: "Detail: the chief and his retinue on the raft.",
    },
  },
  "img-06": {
    alt: {
      es: "Vista aérea de la laguna de Guatavita, un círculo de agua gris en el fondo de un cráter cubierto de vegetación",
      en: "Aerial view of Lake Guatavita, a circle of grey water at the bottom of a crater covered in vegetation",
    },
    pie: {
      es: "La laguna vista desde el aire.",
      en: "The lake seen from the air.",
    },
  },
  "img-07": {
    alt: {
      es: "La laguna de Guatavita, de agua verde esmeralda, rodeada por paredes de bosque andino",
      en: "Lake Guatavita, with emerald-green water, surrounded by walls of Andean forest",
    },
    pie: {
      es: "La laguna de Guatavita, santuario de los muiscas.",
      en: "Lake Guatavita, sanctuary of the Muisca.",
    },
  },
  "img-08": {
    alt: {
      es: "La laguna de Guatavita vista desde su orilla, con pastos altos en primer plano y el bosque al fondo",
      en: "Lake Guatavita seen from its shore, with grasses in the foreground and forest in the background",
    },
    pie: {
      es: "La laguna desde la orilla.",
      en: "The lake from the shore.",
    },
  },
  "img-09": {
    alt: {
      es: "La laguna de Guatavita en un día nublado: el agua oscura refleja las nubes y una baranda de madera asoma en primer plano",
      en: "Lake Guatavita on a cloudy day: the dark water reflects the clouds and a wooden railing appears in the foreground",
    },
    pie: {
      es: "La laguna bajo las nubes, escenario de la leyenda de la Cacica.",
      en: "The lake under the clouds, setting of the legend of the Cacica.",
    },
  },
  "img-10": {
    alt: {
      es: "El embalse de Tominé visto desde Guatavita: un prado verde con personas sentadas en círculo y, al fondo, el agua azul y las montañas",
      en: "The Tominé reservoir seen from Guatavita: a green meadow with people sitting in a circle and, behind them, blue water and mountains",
    },
    pie: {
      es: "El embalse de Tominé desde Guatavita.",
      en: "The Tominé reservoir from Guatavita.",
    },
  },
  "img-10b": {
    alt: {
      es: "Una lancha de madera vieja flotando en la orilla del embalse de Tominé, con montañas y nubes al fondo",
      en: "An old wooden boat floating at the edge of the Tominé reservoir, with mountains and clouds in the background",
    },
    pie: {
      es: "Lancha en el embalse de Tominé.",
      en: "A boat on the Tominé reservoir.",
    },
  },
  "img-12": {
    alt: {
      es: "Fotografía aérea antigua en blanco y negro del pueblo viejo de Guatavita, con sus manzanas, calles y la plaza en medio del valle",
      en: "Old black-and-white aerial photograph of the old town of Guatavita, with its blocks, streets and square in the middle of the valley",
    },
    pie: {
      es: "La antigua Guatavita, antes de la inundación.",
      en: "The old Guatavita, before the flooding.",
    },
  },
  "img-13a": {
    alt: {
      es: "Tejados de barro y casas blancas de Guatavita la Nueva, con una torre de tejas en primer plano",
      en: "Clay roofs and white houses of Guatavita la Nueva, with a tiled tower in the foreground",
    },
    pie: {
      es: "Tejas de barro y muros blancos.",
      en: "Clay tiles and white walls.",
    },
  },
  "img-13b": {
    alt: {
      es: "El obelisco blanco de Guatavita la Nueva, con un reloj, junto a un farol y casas blancas bajo un cielo nublado",
      en: "The white obelisk of Guatavita la Nueva, with a clock, next to a street lamp and white houses under a cloudy sky",
    },
    pie: {
      es: "El obelisco del pueblo nuevo.",
      en: "The obelisk of the new town.",
    },
  },
  "img-13c": {
    alt: {
      es: "Torre blanca de Guatavita la Nueva vista desde una plaza empedrada, con arcos blancos al fondo y cielo azul",
      en: "White tower of Guatavita la Nueva seen from a cobbled square, with white arches behind it and blue sky",
    },
    pie: {
      es: "Torre y arcos de Guatavita la Nueva.",
      en: "Tower and arches of Guatavita la Nueva.",
    },
  },
  "img-14": {
    alt: {
      es: "Plaza de Guatavita con piso de ladrillo, casas blancas de tejado rojo y un letrero del museo indígena",
      en: "Square in Guatavita with a brick floor, white houses with red roofs and a sign for the Indigenous museum",
    },
    pie: {
      es: "Una de las plazas del pueblo.",
      en: "One of the town's squares.",
    },
  },
  "img-15": {
    alt: {
      es: "El embalse de Tominé en temporada seca: el agua retirada deja ver orillas de tierra, con árboles en primer plano",
      en: "The Tominé reservoir in the dry season: the receding water reveals earthen banks, with trees in the foreground",
    },
    pie: {
      es: "El embalse en nivel bajo, visto desde Guatavita.",
      en: "The reservoir at low level, seen from Guatavita.",
    },
  },
  "img-16": {
    alt: {
      es: "La portada blanca del antiguo cementerio de Guatavita, con una cruz, bajo un cielo nocturno con la Vía Láctea",
      en: "The white gateway of the old Guatavita cemetery, topped by a cross, under a night sky with the Milky Way",
    },
    pie: {
      es: "El antiguo cementerio, que se salvó de la inundación.",
      en: "The old cemetery, which escaped the flooding.",
    },
  },
  "img-17": {
    alt: {
      es: "Vista cenital de la laguna de Guatavita: agua turquesa redonda rodeada de bosque, con una muesca en el borde inferior",
      en: "Overhead view of Lake Guatavita: round turquoise water surrounded by forest, with a notch in its lower edge",
    },
    pie: {
      es: "Desde el aire se ve la muesca en el borde: el corte de Sepúlveda (1562).",
      en: "From the air you can see the notch in the rim: Sepúlveda's cut (1562).",
    },
  },
};
