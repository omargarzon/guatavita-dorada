// Descarga las imágenes de Wikimedia Commons, verifica su licencia con la API,
// las convierte a WebP (grande y móvil) y genera src/content/credits.ts.
//
// Uso: npm run images
// Para agregar una imagen: súmala a IMAGENES y vuelve a correr el script.

import { mkdir, writeFile, access } from "node:fs/promises";
import sharp from "sharp";

const IMAGENES = {
  "img-01": "Theodor_de_Bry's_Golden_Man.png",
  "img-02": "Museo_Del_Oro,_Bogota_(24976759882).jpg",
  "img-03": "Muisca_raft_BOG_04_2012_Museo_de_Oro_1251.jpg",
  "img-04": "Muisca_raft_-_detail_-_Museo_del_Oro,_Bogotá.jpg",
  "img-06": "Laguna_Guatavita.jpg",
  "img-07": "Laguna_Guatavita_06.jpg",
  "img-08": "Laguna_de_Guatavita_-_panoramio_(1).jpg",
  "img-09": "LagunaDeGuatavita.JPG",
  "img-10": "Embalse_de_Tominé-Guatavita.jpg",
  "img-10b": "Embalse_de_Tominé,_Guatavita_-_panoramio_(1).jpg",
  "img-12": "La_Antigua_Guatavita.JPG",
  "img-13a": "Tejados_y_casas_blancas.JPG",
  "img-13b": "OBELISCO_GUATAVITA.JPG",
  "img-13c": "Campanar_de_Guatavita.jpg",
  "img-14": "Plaza_de_guatavita.jpg",
  "img-15": "Lowstand_of_Tominé_Reservoir_seen_from_Guatavita.jpg",
  "img-16": "Vía_Láctea_sobre_el_antiguo_cementerio_del_Embalse_Tominé.jpg",
  "img-17": "Guatavita_desde_el_cielo.jpg",
};

// Solo se aceptan dominio público y Creative Commons sin cláusula NC/ND
const LICENCIA_LIBRE = /^(public domain|pd\b|cc0|cc by(-sa)? \d)/i;

const ANCHO_GRANDE = 2000;
const ANCHO_MOVIL = 800;
const UA = { "User-Agent": "GuatavitaHistoria/1.0 (https://guatavitadorada.com)" };

const limpiar = (html = "") =>
  html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

async function existe(ruta) {
  try {
    await access(ruta);
    return true;
  } catch {
    return false;
  }
}

async function metadatos(archivo) {
  const url =
    "https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo" +
    "&iiprop=extmetadata|url&format=json&titles=" +
    encodeURIComponent("File:" + archivo);
  const res = await fetch(url, { headers: UA });
  const pagina = Object.values((await res.json()).query.pages)[0];
  if (pagina.missing !== undefined) throw new Error(`No existe en Commons: ${archivo}`);
  const info = pagina.imageinfo[0];
  const m = info.extmetadata;
  return {
    autor: limpiar(m.Artist?.value).replace(/^(Unknown author)+/i, "Autor desconocido"),
    licencia: limpiar(m.LicenseShortName?.value),
    licenciaUrl: m.LicenseUrl?.value ?? "",
    fuente: info.descriptionurl,
  };
}

async function main() {
  await mkdir("public/img", { recursive: true });
  const creditos = {};
  const descartadas = [];

  for (const [id, archivo] of Object.entries(IMAGENES)) {
    const meta = await metadatos(archivo);
    if (!LICENCIA_LIBRE.test(meta.licencia)) {
      descartadas.push(`${id} (${archivo}): ${meta.licencia}`);
      continue;
    }

    const grande = `public/img/${id}-lg.webp`;
    const movil = `public/img/${id}-sm.webp`;
    if (!(await existe(grande)) || !(await existe(movil))) {
      const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(archivo)}?width=${ANCHO_GRANDE}`;
      const res = await fetch(url, { headers: UA });
      if (!res.ok) throw new Error(`Descarga falló (${res.status}): ${archivo}`);
      const buffer = Buffer.from(await res.arrayBuffer());
      // Solo se cambia el tamaño y el formato: sin filtros ni recortes (requisito CC BY-SA)
      await sharp(buffer).rotate().resize({ width: ANCHO_GRANDE, withoutEnlargement: true }).webp({ quality: 78 }).toFile(grande);
      await sharp(buffer).rotate().resize({ width: ANCHO_MOVIL, withoutEnlargement: true }).webp({ quality: 74 }).toFile(movil);
    }

    const { width, height } = await sharp(grande).metadata();
    creditos[id] = { archivo, ...meta, ancho: width, alto: height };
    console.log(`✓ ${id}  ${meta.licencia}  ${meta.autor}`);
  }

  // Imagen para compartir en redes (Open Graph): la laguna, solo redimensionada y en JPG
  await sharp("public/img/img-07-lg.webp").resize({ width: 1200 }).jpeg({ quality: 82 }).toFile("public/img/og.jpg");

  const contenido =
    "// ARCHIVO GENERADO por scripts/fetch-images.mjs — no editar a mano.\n" +
    "// Autor y licencia vienen de la API de Wikimedia Commons.\n\n" +
    "export interface Credito {\n  archivo: string;\n  autor: string;\n  licencia: string;\n" +
    "  licenciaUrl: string;\n  fuente: string;\n  ancho: number;\n  alto: number;\n}\n\n" +
    `export const creditos = ${JSON.stringify(creditos, null, 2)} satisfies Record<string, Credito>;\n\n` +
    "export type ImagenId = keyof typeof creditos;\n";
  await writeFile("src/content/credits.ts", contenido);

  console.log(`\n${Object.keys(creditos).length} imágenes usadas.`);
  if (descartadas.length) console.log("Descartadas por licencia:\n  " + descartadas.join("\n  "));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
