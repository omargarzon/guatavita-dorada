import { ChevronDown } from "lucide-react";
import { creditos } from "../content/credits";
import { imagenes } from "../content/images";
import { useIdioma } from "../lib/idioma";
import { Credito, srcSet } from "./Foto";
import { FranjaRombos } from "./Motivos";

export function Hero() {
  const { c, lang } = useIdioma();
  const cr = creditos["img-10"];
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden bg-andino-oscuro text-cal">
      {/* La foto se muestra completa, sin filtros; el degradado va en una capa aparte para que el texto se lea */}
      <img
        src="/img/img-10-sm.webp"
        srcSet={srcSet("img-10")}
        sizes="100vw"
        width={cr.ancho}
        height={cr.alto}
        alt={imagenes["img-10"].alt[lang]}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-andino-oscuro via-andino-oscuro/60 to-black/20" />

      <div className="relative mx-auto w-full max-w-5xl px-4 pb-14 pt-28 sm:px-6 sm:pb-20">
        <FranjaRombos className="mb-6 w-32 text-oro" />
        <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] text-cal sm:text-6xl lg:text-7xl">{c.hero.titulo}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cal/90 sm:text-xl">{c.hero.subtitulo}</p>
        <a
          href="#tierra-muisca"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-oro px-6 py-3 text-base font-bold text-andino-oscuro shadow-lg transition hover:bg-oro-claro"
        >
          {c.hero.boton}
          <ChevronDown aria-hidden="true" className="h-5 w-5 motion-safe:animate-bounce" />
        </a>
        <p className="mt-10 text-xs text-cal/70">
          <Credito id="img-10" />
        </p>
      </div>
    </section>
  );
}
