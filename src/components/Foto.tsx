import { Camera, PenTool } from "lucide-react";
import { creditos, type ImagenId } from "../content/credits";
import { imagenes } from "../content/images";
import { enlaceWhatsapp, useIdioma } from "../lib/idioma";
import { FondoRombos } from "./Motivos";

export const srcSet = (id: ImagenId) => `/img/${id}-sm.webp 800w, /img/${id}-lg.webp 2000w`;

// Línea de crédito obligatoria (autor + licencia + enlace)
export function Credito({ id, className = "" }: { id: ImagenId; className?: string }) {
  const { c } = useIdioma();
  const cr = creditos[id];
  const esDominioPublico = !cr.licenciaUrl;
  return (
    <span className={className}>
      {c.ui.foto}:{" "}
      <a href={cr.fuente} target="_blank" rel="noopener noreferrer" className="underline decoration-current/40 underline-offset-2 hover:decoration-current">
        {cr.autor}
      </a>
      {" · "}
      {esDominioPublico ? (
        c.fuentes.dominioPublico
      ) : (
        <a href={cr.licenciaUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-current/40 underline-offset-2 hover:decoration-current">
          {cr.licencia}
        </a>
      )}
    </span>
  );
}

interface FotoProps {
  id: ImagenId;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  sinPie?: boolean;
  oscuro?: boolean;
}

export function Foto({ id, sizes = "(min-width: 1024px) 896px, 100vw", className = "", imgClassName = "", sinPie, oscuro }: FotoProps) {
  const { lang } = useIdioma();
  const cr = creditos[id];
  const textos = imagenes[id];
  return (
    <figure className={`reveal ${className}`}>
      <img
        src={`/img/${id}-sm.webp`}
        srcSet={srcSet(id)}
        sizes={sizes}
        width={cr.ancho}
        height={cr.alto}
        alt={textos.alt[lang]}
        loading="lazy"
        decoding="async"
        className={`h-auto w-full rounded-sm bg-arena ${imgClassName}`}
      />
      <figcaption className={`mt-2 text-sm leading-snug ${oscuro ? "text-cal/70" : "text-tinta-suave"}`}>
        {!sinPie && <span className={oscuro ? "text-cal" : "text-tinta"}>{textos.pie[lang]} </span>}
        <Credito id={id} className="text-xs" />
      </figcaption>
    </figure>
  );
}

// Espacio reservado para fotos o ilustraciones que aún están en gestión (Anexo B)
export function Pendiente({ titulo, tipo = "foto", className = "" }: { titulo: string; tipo?: "foto" | "ilustracion"; className?: string }) {
  const { c } = useIdioma();
  const Icono = tipo === "foto" ? Camera : PenTool;
  const mensaje = tipo === "foto" ? c.ui.fotoEnGestion : c.ui.ilustracionEnGestion;
  return (
    <figure className={`reveal relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-sm border border-oro/40 bg-andino-oscuro px-6 text-center text-cal ${className}`}>
      <FondoRombos className="absolute inset-0 text-oro/10" />
      <Icono aria-hidden="true" className="relative h-9 w-9 text-oro" strokeWidth={1.4} />
      <figcaption className="relative mt-4 max-w-xs">
        <span className="block font-serif text-xl font-semibold text-oro-claro">{titulo}</span>
        <span className="mt-2 block text-sm leading-snug text-cal/80">{mensaje}</span>
        <a
          href={enlaceWhatsapp(c.ui.mensajeWhatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-full border border-oro px-4 py-1.5 text-sm font-semibold text-oro-claro transition hover:bg-oro hover:text-andino-oscuro"
        >
          {c.ui.escribenos}
        </a>
      </figcaption>
    </figure>
  );
}
