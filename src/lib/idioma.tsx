import { createContext, useContext } from "react";
import { contenido, type Contenido, type Lang } from "../content/sections";

const IdiomaContext = createContext<Lang>("es");

export const IdiomaProvider = IdiomaContext.Provider;

export function useIdioma(): { lang: Lang; c: Contenido } {
  const lang = useContext(IdiomaContext);
  return { lang, c: contenido[lang] };
}

// Número de WhatsApp para recibir fotos y testimonios
const WHATSAPP = "573239399666";

export function enlaceWhatsapp(mensaje: string): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}
