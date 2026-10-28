// Textos de la página, en español e inglés.
//
// Formato dentro de los textos: *cursiva* y **negrita**.
// Las fechas, cifras y nombres ya están verificados: se pueden recortar textos
// para el diseño, pero no cambiar los datos (ver Anexo C del archivo de contenido).

export type Lang = "es" | "en";

export interface Recuadro {
  titulo: string;
  texto: string;
}

export interface Cifra {
  // Si hay número, se anima desde 0; si no, se muestra `valor` tal cual
  numero?: number;
  valor?: string;
  prefijo?: string;
  sufijo?: string;
  unidad?: string;
  etiqueta: string;
}

export interface Testimonio {
  nombre: string;
  detalle: string;
  cita: string;
}

export interface Enlace {
  texto: string;
  url?: string;
}

export interface Contenido {
  idioma: { codigo: string; otro: string; otroUrl: string; otroNombre: string };
  ui: {
    saltar: string;
    menu: string;
    cerrar: string;
    secciones: string;
    progreso: string;
    mito: string;
    ejemplo: string;
    fotoEnGestion: string;
    ilustracionEnGestion: string;
    escribenos: string;
    mensajeWhatsapp: string;
    foto: string;
    ampliar: string;
    anterior: string;
    siguiente: string;
    todas: string;
    filtrar: string;
    verDetalle: string;
    galeria: string;
    volverArriba: string;
  };
  nav: Record<string, string>;
  hero: { titulo: string; subtitulo: string; boton: string };
  tierra: { titulo: string; parrafos: string[]; datoCurioso: Recuadro };
  dorado: {
    titulo: string;
    antesDeCita: string[];
    cita: { texto: string; fuente: string };
    despuesDeCita: string[];
    mito: Recuadro;
    sabias: Recuadro;
    balsaPerdida: Recuadro;
  };
  cacica: {
    titulo: string;
    relato: string[];
    tabla: { titulo: string; historico: string; legendario: string; filas: [string, string][] };
    otraLectura: Recuadro;
  };
  conquista: { titulo: string; parrafos: string[] };
  fiebre: {
    titulo: string;
    intro: string;
    lineaTitulo: string;
    enNumeros: Recuadro;
    hoy: Recuadro;
  };
  embalse: {
    titulo: string;
    parrafos: string[];
    cifrasTitulo: string;
    cifras: Cifra[];
    testimoniosTitulo: string;
    testimoniosNota: string;
    testimonios: Testimonio[];
  };
  nueva: { titulo: string; parrafos: string[] };
  aguaBaja: { titulo: string; parrafos: string[] };
  hoy: {
    titulo: string;
    datosTitulo: string;
    datos: { etiqueta: string; valor: string }[];
    queHacerTitulo: string;
    actividades: Recuadro[];
    aclaracion: string;
    enlacesTitulo: string;
    enlaces: Enlace[];
  };
  lineaTiempo: { titulo: string; intro: string };
  galeria: { titulo: string; intro: string };
  pendientes: Record<"seca1910" | "agua1963" | "pueblo1967" | "presa" | "cacica", string>;
  fuentes: {
    titulo: string;
    fuentesTitulo: string;
    items: Enlace[];
    creditosTitulo: string;
    creditosIntro: string;
    dominioPublico: string;
    pendientesTitulo: string;
    pendientes: string[];
  };
  pie: { texto: string };
}

const es: Contenido = {
  idioma: { codigo: "es-CO", otro: "EN", otroUrl: "/en/", otroNombre: "English" },
  ui: {
    saltar: "Saltar al contenido",
    menu: "Menú",
    cerrar: "Cerrar",
    secciones: "Secciones",
    progreso: "Progreso de lectura",
    mito: "Mito",
    ejemplo: "Ejemplo",
    fotoEnGestion: "Foto en gestión — ¿tienes fotos del pueblo viejo? Escríbenos",
    ilustracionEnGestion: "Ilustración en preparación — ¿eres ilustrador o ilustradora? Escríbenos",
    escribenos: "Escríbenos por WhatsApp",
    mensajeWhatsapp: "Hola, tengo fotos o información sobre la historia de Guatavita.",
    foto: "Foto",
    ampliar: "Ampliar imagen",
    anterior: "Imagen anterior",
    siguiente: "Imagen siguiente",
    todas: "Todas",
    filtrar: "Filtrar por categoría",
    verDetalle: "Ver detalle",
    galeria: "Galería",
    volverArriba: "Volver arriba",
  },
  nav: {
    "tierra-muisca": "Tierra muisca",
    "el-dorado": "El Dorado",
    "la-cacica": "La Cacica",
    conquista: "Conquista",
    "fiebre-del-oro": "Fiebre del oro",
    embalse: "El embalse",
    "guatavita-la-nueva": "Pueblo nuevo",
    "cuando-el-agua-baja": "Agua baja",
    visita: "Visita",
    "linea-de-tiempo": "Línea de tiempo",
    galeria: "Galería",
    fuentes: "Fuentes",
  },
  hero: {
    titulo: "Guatavita, el pueblo que nació dos veces",
    subtitulo:
      "Una laguna sagrada que inspiró la leyenda de El Dorado, una cacica que vive bajo el agua y un pueblo entero que se mudó para dejar que el agua lo cubriera.",
    boton: "Comienza el recorrido",
  },
  tierra: {
    titulo: "Donde termina la labranza",
    parrafos: [
      "Mucho antes de que llegaran los españoles, estas tierras pertenecían a los muiscas, uno de los pueblos más organizados de los Andes. El nombre *Guatavita* viene de su lengua, el muysccubun, y suele traducirse como “fin de la labranza” o “punta de la sierra”. *Gua* significa cerro, *ta* labranza y *vita* cumbre o terminación. Es una interpretación tradicional, porque la lengua muisca se perdió en gran parte y sus traducciones nunca son del todo seguras.",
      "El cacicazgo de Guatavita fue de los más prestigiosos del altiplano. Según el cronista fray Pedro Simón, su cacique llegó a tener el linaje más respetado de la región, y lo consultaban tanto el Zipa de Bacatá (Bogotá) como el Zaque de Hunza (Tunja). Sus orfebres eran famosos: sabían fundir el oro y darle forma con una técnica que todavía asombra.",
      "El poder político, sin embargo, cambió de manos. Hacia 1490, en la batalla de Chocontá, Guatavita se alió con el zaque Michuá contra el zipa Saguamanchica, y ambos gobernantes murieron en el combate. Con el tiempo, Guatavita quedó sometida al zipazgo de Bacatá. Perdió poder político, pero conservó algo más valioso: siguió siendo el corazón religioso de los muiscas.",
      "El antiguo poblado indígena estaba al pie del cerro Montecillo, rodeado por las capitanías de Chaleche, Tuneche y Tuminé. De esta última viene el nombre del embalse que hoy cubre el valle: **Tominé**.",
    ],
    datoCurioso: {
      titulo: "Dato curioso",
      texto:
        "Durante mucho tiempo se creyó que la laguna de Guatavita era el cráter de un meteorito. Los estudios geológicos la explican hoy de otra forma: es un hundimiento del terreno causado por domos de sal subterráneos.",
    },
  },
  dorado: {
    titulo: "El hombre cubierto de oro",
    antesDeCita: [
      "Para los muiscas, el agua era sagrada, y la laguna de Guatavita era su santuario más importante. Hasta sus orillas llegaban peregrinos de todo el territorio para ofrendar oro, figuras votivas llamadas *tunjos* y esmeraldas.",
      "Allí se celebraba también la ceremonia más famosa de la historia de Colombia: la investidura del nuevo cacique. El cronista bogotano Juan Rodríguez Freyle, que vivió en la región y aseguraba haber conversado con el cacique de Guatavita, la describió en su libro *El Carnero* (escrito hacia 1636):",
    ],
    cita: {
      texto:
        "En aquella laguna de Guatavita se hacía una gran balsa de juncos, y aderezábanla lo más vistoso que podían…",
      fuente: "Juan Rodríguez Freyle, El Carnero",
    },
    despuesDeCita: [
      "Según su relato, la laguna quedaba rodeada de gente y de hogueras. Al heredero, que era sobrino del cacique anterior, lo desnudaban, lo untaban con una tierra pegajosa y lo cubrían de polvo de oro. Acompañado por cuatro caciques principales, navegaba en la balsa hasta el centro de la laguna y allí arrojaba oro y esmeraldas como ofrenda a los dioses. Al volver a la orilla comenzaba la fiesta.",
    ],
    mito: {
      titulo: "Cómo nació el mito",
      texto:
        "Desde la década de 1530 empezó a correr entre los conquistadores el rumor de un “indio dorado”. La codicia hizo el resto: el hombre cubierto de oro se convirtió en una laguna llena de tesoros, y la laguna, en una ciudad o reino de oro. Ese reino, *El Dorado*, nunca existió, pero impulsó durante siglos expediciones por toda Sudamérica.",
    },
    sabias: {
      titulo: "¿Sabías que… la Balsa Muisca no se encontró en Guatavita?",
      texto:
        "La famosa Balsa Muisca del Museo del Oro, que representa esta ceremonia, apareció en 1969 en una cueva de **Pasca**, Cundinamarca, lejos de la laguna. La encontró un campesino, Cruz María Dimaté, dentro de una vasija de cerámica. El párroco del pueblo, Jaime Hincapié, evitó que la vendieran o la fundieran y avisó al Banco de la República, que la adquirió para el Museo del Oro. Mide apenas 19,5 cm de largo, está hecha en oro con la técnica de la cera perdida y data del periodo muisca tardío (600–1600 d. C.). Nunca ha salido de Colombia.",
    },
    balsaPerdida: {
      titulo: "La balsa perdida",
      texto:
        "En 1856 apareció otra balsa de oro en la laguna de Siecha, en Guasca. Se vendió a un museo alemán y se perdió en un incendio en el puerto de Bremen.",
    },
  },
  cacica: {
    titulo: "La Cacica que vive bajo el agua",
    relato: [
      "Cuentan que hace muchos siglos, el cacique de Guatavita tenía varias esposas, pero una de ellas superaba a todas en belleza. Era la Cacica, su esposa principal.",
      "Un día, el cacique descubrió que ella lo traicionaba con uno de sus guerreros. Su venganza fue terrible: mandó matar al amante, obligó a la Cacica a comer parte del cuerpo de él durante un banquete público y ordenó que se compusieran canciones que pregonaran su deshonra por todo el territorio.",
      "Humillada, la Cacica tomó a su hija pequeña en brazos, caminó hasta la laguna y se lanzó a sus aguas.",
      "El cacique, arrepentido, ordenó a un *jeque* (sacerdote) que la rescatara. El jeque se sumergió y, al volver, trajo una noticia extraña: la Cacica estaba viva en el fondo, en una morada bajo el agua, junto a una serpiente, y no quería regresar. En algunas versiones, el jeque sacó a la niña sin vida.",
      "Desde entonces, la Cacica se convirtió en la diosa de la laguna. Se decía que aparecía sobre el agua, de la cintura para arriba y cubierta con una manta roja, para anunciar sequías, hambrunas o muertes. Por eso los muiscas aumentaron sus ofrendas.",
    ],
    tabla: {
      titulo: "Mito y realidad",
      historico: "Lo histórico",
      legendario: "Lo legendario",
      filas: [
        [
          "La laguna fue un santuario muisca de ofrendas, y lo prueban las crónicas y los hallazgos de oro en sus orillas.",
          "Que existiera una Cacica concreta, su infidelidad y su transformación en diosa.",
        ],
        [
          "La leyenda se escribió por primera vez hacia 1626, en las *Noticias historiales* de fray Pedro Simón.",
          "Los detalles del castigo y del palacio bajo el agua, que cambian según la versión.",
        ],
      ],
    },
    otraLectura: {
      titulo: "Otra lectura",
      texto:
        "La leyenda nos llegó a través de un fraile del siglo XVII, que la contó desde la mirada de la Iglesia: adulterio, castigo y un “demonio” que vivía en el agua. Detrás del relato se adivina algo más antiguo: una divinidad femenina del agua, asociada a la serpiente y a la fertilidad, a la que los muiscas honraban con ofrendas. Las reseñas modernas la relacionan con Chie o Sie, la diosa muisca del agua.",
    },
  },
  conquista: {
    titulo: "Llegan los españoles",
    parrafos: [
      "En 1537, la expedición de Gonzalo Jiménez de Quesada recorrió el altiplano muisca y llegó a la región de Guatavita. La laguna y sus alrededores quedaron en manos del capitán Lázaro Fonte, como parte de su encomienda.",
      "El pueblo colonial se fundó el **18 de marzo de 1593**. Ese día, el oidor de la Real Audiencia Miguel de Ibarra adjudicó tierras a los indígenas y reunió en un solo “pueblo de indios” a las capitanías de Chaleche, Tuneche y Tuminé. Era la política española de agrupar a la población indígena para controlarla y evangelizarla.",
      "La Iglesia llegó con fuerza. En 1567, una real cédula nombró prior de Guatavita a fray Sebastián de Morales y fundó el convento de San Pedro Mártir. A finales del siglo XVI el pueblo ya tenía su iglesia, y en 1768 la parroquia pasó de los frailes al clero secular.",
      "Durante la República, Guatavita fue capital de cantón y de provincia hasta 1930.",
    ],
  },
  fiebre: {
    titulo: "Cuatro siglos intentando vaciar la laguna",
    intro:
      "Si el cacique arrojaba oro al centro de la laguna, el tesoro tenía que seguir allí. Esa idea obsesionó a conquistadores, comerciantes y empresas extranjeras durante más de 400 años.",
    lineaTitulo: "Los intentos, uno por uno",
    enNumeros: {
      titulo: "El mito del tesoro en números",
      texto:
        "¿Cuánto oro sacó Sepúlveda? Fray Pedro Simón habló de 56.000 pesos y Rodríguez Freyle de 12.000. El registro oficial de 1576, en cambio, anota solo **232 pesos**. Así crecía la leyenda.",
    },
    hoy: {
      titulo: "Hoy",
      texto:
        "La laguna está protegida. Hace parte de la Reserva Forestal Protectora “Laguna del Cacique Guatavita y Cuchilla de Peña Blanca”, declarada por la CAR en 1993 con 613 hectáreas y recategorizada en 2021. Está en jurisdicción de Sesquilé y solo se visita en recorridos guiados. Está prohibido nadar o entrar al agua.",
    },
  },
  embalse: {
    titulo: "El día que el agua llegó al pueblo",
    parrafos: [
      "A finales de los años cincuenta, Bogotá crecía rápido y necesitaba agua y energía. La Empresa de Energía de Bogotá (hoy Grupo Energía Bogotá) puso en marcha el “Proyecto Guatavita”: represar el río Tominé y bombear allí los excedentes del río Bogotá. Así se podría regular su caudal para las hidroeléctricas del Salto del Tequendama, regar la Sabana, controlar las inundaciones y aportar agua potable a la capital.",
      "La presa se construyó entre 1959 y 1962, y ese mismo año empezó el llenado. El problema era que, en medio del valle que iba a inundarse, estaba Guatavita, un pueblo con casi cuatro siglos de historia.",
      "El agua subió despacio durante cinco años. Mientras tanto, en una ladera cercana se construía un pueblo nuevo. En agosto de 1967 comenzó la mudanza, y el **15 de septiembre de 1967** se hizo el traslado oficial. Más de 1.200 personas dejaron sus casas, y la gran mayoría se mudó al nuevo pueblo, en la parte alta, sobre el embalse. Otros se fueron a municipios cercanos.",
      "No todos estuvieron de acuerdo. Muchos guatavitunos recuerdan el pueblo viejo como un lugar bonito y tranquilo, y algunos sienten que quienes aceptaron dejar sus casas no recibieron lo que merecían.",
    ],
    cifrasTitulo: "El embalse en cifras",
    cifras: [
      { valor: "1959–1962", etiqueta: "construcción de la presa" },
      { numero: 18, prefijo: "~", unidad: "km", etiqueta: "de largo" },
      { numero: 689, prefijo: "~", unidad: "millones de m³", etiqueta: "de capacidad útil" },
      {
        valor: "El más grande",
        etiqueta: "de la Sabana de Bogotá, unas siete veces más que los embalses de Neusa o Sisga",
      },
    ],
    testimoniosTitulo: "Voces del traslado",
    testimoniosNota:
      "Estamos recogiendo testimonios de vecinos que vivieron el traslado. Las tarjetas marcadas como EJEMPLO muestran cómo se verán.",
    testimonios: [
      {
        nombre: "Nombre del vecino o vecina",
        detalle: "Vivió en el pueblo viejo hasta 1967",
        cita: "Aquí irá un recuerdo corto de cómo era la vida en el pueblo viejo, contado por alguien que lo vivió.",
      },
      {
        nombre: "Nombre del vecino o vecina",
        detalle: "Llegó a Guatavita la Nueva en el traslado",
        cita: "Aquí irá un recuerdo corto del día de la mudanza y de cómo fue llegar al pueblo nuevo.",
      },
      {
        nombre: "Nombre del vecino o vecina",
        detalle: "Hijo o hija de una familia trasladada",
        cita: "Aquí irá lo que la familia cuenta hoy sobre el pueblo que quedó bajo el agua.",
      },
    ],
  },
  nueva: {
    titulo: "Un pueblo diseñado desde cero",
    parrafos: [
      "El nuevo pueblo no se fundó: se inauguró. Su construcción empezó el 14 de noviembre de 1964, a cargo de la firma Llorente & Ponce de León, con el arquitecto **Jaime Ponce de León** como autor del proyecto.",
      "El diseño no copió el pueblo viejo. Ponce de León imaginó una villa de inspiración colonial, andaluza y mediterránea: muros blancos, tejas de barro, calles empedradas, plazoletas que se encadenan unas con otras y una zona cívica separada de la residencial.",
      "El resultado causó polémica. El arquitecto y crítico Germán Téllez se burló del “guatavitismo arquitectónico”, y el escritor Jorge Zalamea también lo atacó con dureza. Para ellos era un decorado falso. Sin embargo, el estilo gustó tanto que en la Bogotá de los años setenta se construyeron conjuntos de vivienda “estilo Guatavita”.",
      "Hoy, ese pueblo blanco que algunos criticaron es la principal postal turística del municipio, con la Plaza de la Cacica, la iglesia de Nuestra Señora de los Dolores, la plaza de toros, el Puente de los Enamorados y el Museo de Guatavita.",
    ],
  },
  aguaBaja: {
    titulo: "El pueblo que reaparece",
    parrafos: [
      "El pueblo viejo no desapareció del todo. Sus ruinas están al sur, en el fondo del embalse, y cuando el nivel del agua baja en temporadas secas, asoman restos de calles, cimientos y la parte alta del antiguo obelisco.",
      "El cementerio, en una colina, se salvó de la inundación. Hoy está en parte abandonado y es uno de los lugares más impactantes de la zona. Desde el muelle salen paseos en lancha que pasan por encima del lugar donde estaba el pueblo.",
    ],
  },
  hoy: {
    titulo: "Visita Guatavita",
    datosTitulo: "Datos rápidos",
    datos: [
      { etiqueta: "Ubicación", valor: "Provincia del Guavio, Cundinamarca, a unos 75 km al nororiente de Bogotá" },
      { etiqueta: "Altitud", valor: "~2.680 m s. n. m." },
      { etiqueta: "Población", valor: "~6.900 habitantes (proyección DANE)" },
      { etiqueta: "Fundación", valor: "18 de marzo de 1593" },
      { etiqueta: "Traslado", valor: "15 de septiembre de 1967" },
    ],
    queHacerTitulo: "Qué hacer",
    actividades: [
      {
        titulo: "Laguna del Cacique Guatavita",
        texto:
          "Caminata guiada de unas 2 horas, de martes a domingo. Es un sitio sagrado custodiado por la CAR y la comunidad muisca. No se puede nadar.",
      },
      {
        titulo: "Embalse de Tominé",
        texto: "Vela, kayak, esquí náutico y paseos en lancha sobre el pueblo sumergido.",
      },
      {
        titulo: "El pueblo",
        texto: "Arquitectura blanca, Museo de Guatavita, artesanías, plaza de toros y Puente de los Enamorados.",
      },
    ],
    aclaracion: "Aclaración importante: la laguna y el embalse son dos lugares distintos.",
    enlacesTitulo: "Horarios y tarifas cambian. Consulta la información oficial:",
    enlaces: [
      { texto: "CAR Cundinamarca", url: "https://www.car.gov.co/" },
      { texto: "Alcaldía de Guatavita", url: "https://www.guatavita-cundinamarca.gov.co/" },
    ],
  },
  lineaTiempo: {
    titulo: "Línea de tiempo completa",
    intro: "Más de mil años de historia, de los orfebres muiscas a la reserva protegida de hoy. Filtra por categoría para seguir un hilo.",
  },
  galeria: {
    titulo: "Galería",
    intro: "Toca cualquier imagen para verla en grande.",
  },
  pendientes: {
    seca1910: "La laguna seca en 1910 (Konrad Beissmanger)",
    agua1963: "Guatavita antigua y nueva con el agua subiendo (1963)",
    pueblo1967: "El pueblo viejo poco antes de la inundación (1967)",
    presa: "Construcción de la presa (1959–1962)",
    cacica: "Ilustración original de la Cacica",
  },
  fuentes: {
    titulo: "Fuentes y créditos",
    fuentesTitulo: "Fuentes",
    items: [
      { texto: "Juan Rodríguez Freyle, *El Carnero* (c. 1636). Edición digital en la Biblioteca Nacional de Colombia." },
      { texto: "Fray Pedro Simón, *Noticias historiales de las conquistas de Tierra Firme en las Indias Occidentales* (1626)." },
      { texto: "John Hemming, *The Search for El Dorado* (1978)." },
      {
        texto: "Banco de la República, Enciclopedia Banrepcultural: “Balsa muisca”",
        url: "https://enciclopedia.banrepcultural.org/Balsa_muisca",
      },
      {
        texto: "Sociedad Geográfica de Colombia, “La laguna de Guatavita”",
        url: "https://www.sogeocol.edu.co/documentos/la_lag_guat.pdf",
      },
      {
        texto: "El Tiempo, historia del traslado de Guatavita",
        url: "https://www.eltiempo.com/cultura/gente/esta-es-la-historia-de-como-hundieron-el-pueblo-de-guatavita-para-construir-el-embalse-que-surte-de-agua-a-bogota-3334185",
      },
      {
        texto: "Grupo Energía Bogotá / Enlaza, proyecto Tominé",
        url: "https://www.enlaza.red/proyectos-en-desarrollo/proyecto-sostenibilidad-tomine-guasca-guatavita-y-sesquile",
      },
      {
        texto: "CAR / Parques Nacionales (RUNAP), acto de la reserva",
        url: "https://runapadmin.parquesnacionales.gov.co/default/general/descargardocumento?did=2114",
      },
      {
        texto: "Universidad Piloto, estudio sobre el diseño de Guatavita la Nueva",
        url: "https://repository.unipiloto.edu.co/bitstream/handle/20.500.12277/4749/Locus%20:%20la%20ciudad%20compuesta%20a%20partir%20de%20la%20historia.pdf?sequence=1",
      },
    ],
    creditosTitulo: "Créditos de las imágenes",
    creditosIntro:
      "Todas las imágenes vienen de Wikimedia Commons y se usan según su licencia. Se publican sin filtros ni modificaciones, solo redimensionadas para la web.",
    dominioPublico: "Dominio público",
    pendientesTitulo: "Fotos e ilustraciones en gestión",
    pendientes: [
      "Guatavita antigua y nueva con el agua subiendo (1963) — Biblioteca Municipal de Guatavita / “Comparte tu Rollo”, Biblioteca Nacional.",
      "El pueblo viejo poco antes de la inundación (1967) — Historia Fotográfica de Bogotá, Alcaldía y Gobernación.",
      "Construcción de la presa (1959–1962) — Archivo del Grupo Energía Bogotá.",
      "La laguna seca en 1910 (Konrad Beissmanger) — búsqueda del original.",
      "Fotos oficiales de la Balsa Muisca — Museo del Oro, Banco de la República.",
      "Ilustración original de la Cacica — encargo en preparación.",
    ],
  },
  pie: {
    texto: "Vive Guatavita · Historia de Guatavita, Cundinamarca, Colombia",
  },
};

const en: Contenido = {
  idioma: { codigo: "en", otro: "ES", otroUrl: "/", otroNombre: "Español" },
  ui: {
    saltar: "Skip to content",
    menu: "Menu",
    cerrar: "Close",
    secciones: "Sections",
    progreso: "Reading progress",
    mito: "Myth",
    ejemplo: "Example",
    fotoEnGestion: "Photo in progress — do you have photos of the old town? Write to us",
    ilustracionEnGestion: "Illustration in progress — are you an illustrator? Write to us",
    escribenos: "Write to us on WhatsApp",
    mensajeWhatsapp: "Hi, I have photos or information about the history of Guatavita.",
    foto: "Photo",
    ampliar: "Enlarge image",
    anterior: "Previous image",
    siguiente: "Next image",
    todas: "All",
    filtrar: "Filter by category",
    verDetalle: "See details",
    galeria: "Gallery",
    volverArriba: "Back to top",
  },
  nav: {
    "tierra-muisca": "Muisca land",
    "el-dorado": "El Dorado",
    "la-cacica": "The Cacica",
    conquista: "Conquest",
    "fiebre-del-oro": "Gold fever",
    embalse: "The reservoir",
    "guatavita-la-nueva": "New town",
    "cuando-el-agua-baja": "Low water",
    visita: "Visit",
    "linea-de-tiempo": "Timeline",
    galeria: "Gallery",
    fuentes: "Sources",
  },
  hero: {
    titulo: "Guatavita, the town that was born twice",
    subtitulo:
      "A sacred lake that inspired the legend of El Dorado, a cacica who lives beneath the water, and an entire town that moved away so the water could cover it.",
    boton: "Begin the journey",
  },
  tierra: {
    titulo: "Where the fields end",
    parrafos: [
      "Long before the Spanish arrived, these lands belonged to the Muisca, one of the most highly organised peoples of the Andes. The name *Guatavita* comes from their language, Muysccubun, and is usually translated as “end of the tilled land” or “tip of the mountain range”. *Gua* means hill, *ta* tilled land and *vita* summit or end. This is a traditional interpretation: the Muisca language has largely been lost, and its translations are never entirely certain.",
      "The chiefdom of Guatavita was one of the most prestigious on the high plateau. According to the chronicler Friar Pedro Simón, its cacique came to hold the most respected lineage in the region, and he was consulted both by the Zipa of Bacatá (Bogotá) and by the Zaque of Hunza (Tunja). Its goldsmiths were famous: they knew how to cast gold and shape it with a technique that still amazes.",
      "Political power, however, changed hands. Around 1490, at the battle of Chocontá, Guatavita allied itself with the zaque Michuá against the zipa Saguamanchica, and both rulers died in the fighting. Over time, Guatavita fell under the rule of the zipa of Bacatá. It lost political power, but kept something more valuable: it remained the religious heart of the Muisca.",
      "The old Indigenous settlement stood at the foot of Montecillo hill, surrounded by the captaincies of Chaleche, Tuneche and Tuminé. The last of these gave its name to the reservoir that now covers the valley: **Tominé**.",
    ],
    datoCurioso: {
      titulo: "Fun fact",
      texto:
        "For a long time, people believed Lake Guatavita was a meteorite crater. Geological studies now explain it differently: it is a collapse of the ground caused by underground salt domes.",
    },
  },
  dorado: {
    titulo: "The man covered in gold",
    antesDeCita: [
      "For the Muisca, water was sacred, and Lake Guatavita was their most important sanctuary. Pilgrims came to its shores from all over the territory to offer gold, votive figures called *tunjos*, and emeralds.",
      "It was also the setting for the most famous ceremony in Colombian history: the investiture of the new cacique. The Bogotá chronicler Juan Rodríguez Freyle, who lived in the region and claimed to have spoken with the cacique of Guatavita, described it in his book *El Carnero* (written around 1636):",
    ],
    cita: {
      texto:
        "On that lake of Guatavita they made a great raft of reeds, and adorned it as splendidly as they could…",
      fuente: "Juan Rodríguez Freyle, El Carnero (English translation)",
    },
    despuesDeCita: [
      "According to his account, the lake was surrounded by people and bonfires. The heir, who was the nephew of the previous cacique, was stripped, smeared with a sticky earth and covered in gold dust. Accompanied by four principal caciques, he sailed the raft to the middle of the lake and there threw gold and emeralds as an offering to the gods. When he returned to the shore, the celebration began.",
    ],
    mito: {
      titulo: "How the myth was born",
      texto:
        "From the 1530s, a rumour of an “indio dorado” — a golden Indian — began to spread among the conquistadors. Greed did the rest: the man covered in gold became a lake full of treasure, and the lake became a city or kingdom of gold. That kingdom, *El Dorado*, never existed, but for centuries it drove expeditions across all of South America.",
    },
    sabias: {
      titulo: "Did you know… the Muisca Raft was not found in Guatavita?",
      texto:
        "The famous Muisca Raft at the Gold Museum, which depicts this ceremony, turned up in 1969 in a cave in **Pasca**, Cundinamarca, far from the lake. It was found by a farmer, Cruz María Dimaté, inside a ceramic pot. The local parish priest, Jaime Hincapié, prevented it from being sold or melted down and alerted the Banco de la República, which acquired it for the Gold Museum. It is only 19.5 cm long, made of gold using the lost-wax technique, and dates from the late Muisca period (AD 600–1600). It has never left Colombia.",
    },
    balsaPerdida: {
      titulo: "The lost raft",
      texto:
        "In 1856 another gold raft turned up in the Siecha lake, in Guasca. It was sold to a German museum and lost in a fire in the port of Bremen.",
    },
  },
  cacica: {
    titulo: "The Cacica who lives beneath the water",
    relato: [
      "They say that many centuries ago, the cacique of Guatavita had several wives, but one of them surpassed all the others in beauty. She was the Cacica, his principal wife.",
      "One day, the cacique discovered that she was betraying him with one of his warriors. His revenge was terrible: he had the lover killed, forced the Cacica to eat part of his body at a public banquet, and ordered songs to be composed proclaiming her dishonour throughout the territory.",
      "Humiliated, the Cacica took her little daughter in her arms, walked to the lake and threw herself into its waters.",
      "The cacique, full of regret, ordered a *jeque* (priest) to rescue her. The jeque dived in and, on returning, brought strange news: the Cacica was alive at the bottom, in a dwelling beneath the water, together with a serpent, and did not want to come back. In some versions, the jeque brought up the girl, lifeless.",
      "From then on, the Cacica became the goddess of the lake. It was said that she appeared above the water, from the waist up and wrapped in a red cloak, to foretell droughts, famines or deaths. That is why the Muisca increased their offerings.",
    ],
    tabla: {
      titulo: "Myth and reality",
      historico: "What is historical",
      legendario: "What is legend",
      filas: [
        [
          "The lake was a Muisca sanctuary for offerings, as shown by the chronicles and by the gold found on its shores.",
          "That a specific Cacica existed, her infidelity and her transformation into a goddess.",
        ],
        [
          "The legend was first written down around 1626, in Friar Pedro Simón's *Noticias historiales*.",
          "The details of the punishment and of the palace beneath the water, which change from version to version.",
        ],
      ],
    },
    otraLectura: {
      titulo: "Another reading",
      texto:
        "The legend reached us through a 17th-century friar, who told it from the Church's point of view: adultery, punishment and a “demon” living in the water. Behind the story lies something older: a female water deity, associated with the serpent and with fertility, whom the Muisca honoured with offerings. Modern accounts link her to Chie or Sie, the Muisca goddess of water.",
    },
  },
  conquista: {
    titulo: "The Spanish arrive",
    parrafos: [
      "In 1537, the expedition of Gonzalo Jiménez de Quesada crossed the Muisca high plateau and reached the region of Guatavita. The lake and its surroundings passed into the hands of Captain Lázaro Fonte, as part of his encomienda.",
      "The colonial town was founded on **18 March 1593**. On that day, Miguel de Ibarra, a judge of the Real Audiencia, granted land to the Indigenous people and gathered the captaincies of Chaleche, Tuneche and Tuminé into a single “pueblo de indios” (Indigenous town). It was the Spanish policy of grouping the Indigenous population together in order to control and evangelise it.",
      "The Church arrived in force. In 1567, a royal decree named Friar Sebastián de Morales prior of Guatavita and founded the convent of San Pedro Mártir. By the end of the 16th century the town already had its church, and in 1768 the parish passed from the friars to the secular clergy.",
      "During the Republic, Guatavita was the capital of a canton and of a province until 1930.",
    ],
  },
  fiebre: {
    titulo: "Four centuries trying to empty the lake",
    intro:
      "If the cacique threw gold into the middle of the lake, the treasure had to still be there. That idea obsessed conquistadors, merchants and foreign companies for more than 400 years.",
    lineaTitulo: "The attempts, one by one",
    enNumeros: {
      titulo: "The treasure myth in numbers",
      texto:
        "How much gold did Sepúlveda recover? Friar Pedro Simón spoke of 56,000 pesos and Rodríguez Freyle of 12,000. The official record of 1576, however, notes only **232 pesos**. That is how the legend grew.",
    },
    hoy: {
      titulo: "Today",
      texto:
        "The lake is protected. It is part of the “Laguna del Cacique Guatavita y Cuchilla de Peña Blanca” Protected Forest Reserve, declared by the CAR in 1993 with 613 hectares and recategorised in 2021. It lies within the jurisdiction of Sesquilé and can only be visited on guided tours. Swimming or entering the water is forbidden.",
    },
  },
  embalse: {
    titulo: "The day the water reached the town",
    parrafos: [
      "In the late 1950s, Bogotá was growing fast and needed water and energy. The Empresa de Energía de Bogotá (today Grupo Energía Bogotá) launched the “Guatavita Project”: damming the Tominé river and pumping the surplus of the Bogotá river into it. This would regulate the river's flow for the hydroelectric plants at the Salto del Tequendama, irrigate the Sabana, control flooding and supply drinking water to the capital.",
      "The dam was built between 1959 and 1962, and filling began that same year. The problem was that, in the middle of the valley about to be flooded, stood Guatavita, a town with almost four centuries of history.",
      "The water rose slowly for five years. Meanwhile, a new town was being built on a nearby hillside. In August 1967 the move began, and on **15 September 1967** the official relocation took place. More than 1,200 people left their homes, and the vast majority moved to the new town, higher up, above the reservoir. Others went to nearby municipalities.",
      "Not everyone agreed. Many people from Guatavita remember the old town as a beautiful, peaceful place, and some feel that those who agreed to leave their homes did not receive what they deserved.",
    ],
    cifrasTitulo: "The reservoir in numbers",
    cifras: [
      { valor: "1959–1962", etiqueta: "construction of the dam" },
      { numero: 18, prefijo: "~", unidad: "km", etiqueta: "long" },
      { numero: 689, prefijo: "~", unidad: "million m³", etiqueta: "of usable capacity" },
      {
        valor: "The largest",
        etiqueta: "in the Sabana de Bogotá, about seven times larger than the Neusa or Sisga reservoirs",
      },
    ],
    testimoniosTitulo: "Voices of the move",
    testimoniosNota:
      "We are collecting testimonies from residents who lived through the relocation. The cards marked EXAMPLE show how they will look.",
    testimonios: [
      {
        nombre: "Resident's name",
        detalle: "Lived in the old town until 1967",
        cita: "A short memory of life in the old town will go here, told by someone who lived it.",
      },
      {
        nombre: "Resident's name",
        detalle: "Arrived in Guatavita la Nueva with the relocation",
        cita: "A short memory of moving day and of arriving in the new town will go here.",
      },
      {
        nombre: "Resident's name",
        detalle: "Son or daughter of a relocated family",
        cita: "What the family says today about the town left under the water will go here.",
      },
    ],
  },
  nueva: {
    titulo: "A town designed from scratch",
    parrafos: [
      "The new town was not founded: it was inaugurated. Construction began on 14 November 1964, carried out by the firm Llorente & Ponce de León, with the architect **Jaime Ponce de León** as the author of the project.",
      "The design did not copy the old town. Ponce de León imagined a village of colonial, Andalusian and Mediterranean inspiration: white walls, clay roof tiles, cobbled streets, small squares linked one to the next, and a civic area separate from the residential one.",
      "The result was controversial. The architect and critic Germán Téllez mocked its “architectural Guatavitism”, and the writer Jorge Zalamea also attacked it harshly. To them it was a fake stage set. Yet the style was so popular that in 1970s Bogotá, “Guatavita-style” housing developments were built.",
      "Today, that white town some once criticised is the municipality's main tourist postcard, with the Plaza de la Cacica, the church of Nuestra Señora de los Dolores, the bullring, the Puente de los Enamorados (Lovers' Bridge) and the Guatavita Museum.",
    ],
  },
  aguaBaja: {
    titulo: "The town that reappears",
    parrafos: [
      "The old town did not vanish completely. Its ruins lie to the south, at the bottom of the reservoir, and when the water level drops in dry seasons, remains of streets, foundations and the top of the old obelisk emerge.",
      "The cemetery, on a hill, escaped the flooding. Today it is partly abandoned and is one of the most striking places in the area. Boat trips leave from the pier and pass over the spot where the town once stood.",
    ],
  },
  hoy: {
    titulo: "Visit Guatavita",
    datosTitulo: "Quick facts",
    datos: [
      { etiqueta: "Location", valor: "Guavio province, Cundinamarca, about 75 km north-east of Bogotá" },
      { etiqueta: "Altitude", valor: "~2,680 m above sea level" },
      { etiqueta: "Population", valor: "~6,900 inhabitants (DANE projection)" },
      { etiqueta: "Founded", valor: "18 March 1593" },
      { etiqueta: "Relocated", valor: "15 September 1967" },
    ],
    queHacerTitulo: "What to do",
    actividades: [
      {
        titulo: "Lake of the Cacique Guatavita",
        texto:
          "A guided walk of about 2 hours, Tuesday to Sunday. It is a sacred site looked after by the CAR and the Muisca community. Swimming is not allowed.",
      },
      {
        titulo: "Tominé reservoir",
        texto: "Sailing, kayaking, water-skiing and boat trips over the sunken town.",
      },
      {
        titulo: "The town",
        texto: "White architecture, the Guatavita Museum, crafts, the bullring and the Puente de los Enamorados.",
      },
    ],
    aclaracion: "Important: the lake and the reservoir are two different places.",
    enlacesTitulo: "Opening hours and prices change. Check the official information:",
    enlaces: [
      { texto: "CAR Cundinamarca (in Spanish)", url: "https://www.car.gov.co/" },
      { texto: "Guatavita Town Hall (in Spanish)", url: "https://www.guatavita-cundinamarca.gov.co/" },
    ],
  },
  lineaTiempo: {
    titulo: "Full timeline",
    intro: "More than a thousand years of history, from the Muisca goldsmiths to today's protected reserve. Filter by category to follow a thread.",
  },
  galeria: {
    titulo: "Gallery",
    intro: "Tap any image to see it full size.",
  },
  pendientes: {
    seca1910: "The dry lake in 1910 (Konrad Beissmanger)",
    agua1963: "Old and new Guatavita with the water rising (1963)",
    pueblo1967: "The old town shortly before the flooding (1967)",
    presa: "Construction of the dam (1959–1962)",
    cacica: "Original illustration of the Cacica",
  },
  fuentes: {
    titulo: "Sources and credits",
    fuentesTitulo: "Sources",
    items: [
      { texto: "Juan Rodríguez Freyle, *El Carnero* (c. 1636). Digital edition at the Biblioteca Nacional de Colombia." },
      { texto: "Friar Pedro Simón, *Noticias historiales de las conquistas de Tierra Firme en las Indias Occidentales* (1626)." },
      { texto: "John Hemming, *The Search for El Dorado* (1978)." },
      {
        texto: "Banco de la República, Enciclopedia Banrepcultural: “Balsa muisca” (in Spanish)",
        url: "https://enciclopedia.banrepcultural.org/Balsa_muisca",
      },
      {
        texto: "Sociedad Geográfica de Colombia, “La laguna de Guatavita” (in Spanish)",
        url: "https://www.sogeocol.edu.co/documentos/la_lag_guat.pdf",
      },
      {
        texto: "El Tiempo, the story of Guatavita's relocation (in Spanish)",
        url: "https://www.eltiempo.com/cultura/gente/esta-es-la-historia-de-como-hundieron-el-pueblo-de-guatavita-para-construir-el-embalse-que-surte-de-agua-a-bogota-3334185",
      },
      {
        texto: "Grupo Energía Bogotá / Enlaza, Tominé project (in Spanish)",
        url: "https://www.enlaza.red/proyectos-en-desarrollo/proyecto-sostenibilidad-tomine-guasca-guatavita-y-sesquile",
      },
      {
        texto: "CAR / Parques Nacionales (RUNAP), reserve declaration (in Spanish)",
        url: "https://runapadmin.parquesnacionales.gov.co/default/general/descargardocumento?did=2114",
      },
      {
        texto: "Universidad Piloto, study on the design of Guatavita la Nueva (in Spanish)",
        url: "https://repository.unipiloto.edu.co/bitstream/handle/20.500.12277/4749/Locus%20:%20la%20ciudad%20compuesta%20a%20partir%20de%20la%20historia.pdf?sequence=1",
      },
    ],
    creditosTitulo: "Image credits",
    creditosIntro:
      "All images come from Wikimedia Commons and are used under their licences. They are published without filters or modifications, only resized for the web.",
    dominioPublico: "Public domain",
    pendientesTitulo: "Photos and illustrations in progress",
    pendientes: [
      "Old and new Guatavita with the water rising (1963) — Guatavita Municipal Library / “Comparte tu Rollo”, Biblioteca Nacional.",
      "The old town shortly before the flooding (1967) — Historia Fotográfica de Bogotá, Town Hall and Governor's Office.",
      "Construction of the dam (1959–1962) — Grupo Energía Bogotá archive.",
      "The dry lake in 1910 (Konrad Beissmanger) — searching for the original.",
      "Official photos of the Muisca Raft — Gold Museum, Banco de la República.",
      "Original illustration of the Cacica — commission in progress.",
    ],
  },
  pie: {
    texto: "Vive Guatavita · History of Guatavita, Cundinamarca, Colombia",
  },
};

export const contenido: Record<Lang, Contenido> = { es, en };
