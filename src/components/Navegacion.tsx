import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useIdioma } from "../lib/idioma";

export function Navegacion() {
  const { c } = useIdioma();
  const ids = Object.keys(c.nav);
  const [activa, setActiva] = useState<string | null>(null);
  const [abierto, setAbierto] = useState(false);
  const [sobreHero, setSobreHero] = useState(true);
  const barra = useRef<HTMLDivElement>(null);

  // Barra de progreso de lectura y cambio de estilo al salir del hero
  useEffect(() => {
    let pendiente = false;
    const actualizar = () => {
      pendiente = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progreso = max > 0 ? window.scrollY / max : 0;
      if (barra.current) barra.current.style.transform = `scaleX(${progreso})`;
      setSobreHero(window.scrollY < window.innerHeight * 0.6);
    };
    const alHacerScroll = () => {
      if (!pendiente) {
        pendiente = true;
        requestAnimationFrame(actualizar);
      }
    };
    actualizar();
    window.addEventListener("scroll", alHacerScroll, { passive: true });
    window.addEventListener("resize", alHacerScroll);
    return () => {
      window.removeEventListener("scroll", alHacerScroll);
      window.removeEventListener("resize", alHacerScroll);
    };
  }, []);

  // Sección activa según lo que está en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) if (e.isIntersecting) setActiva(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [c]);

  // Cerrar el menú móvil con Escape
  useEffect(() => {
    if (!abierto) return;
    const alPresionar = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    window.addEventListener("keydown", alPresionar);
    return () => window.removeEventListener("keydown", alPresionar);
  }, [abierto]);

  const enlaces = ids.map((id) => (
    <li key={id}>
      <a
        href={`#${id}`}
        onClick={() => setAbierto(false)}
        aria-current={activa === id ? "true" : undefined}
        className={`block whitespace-nowrap rounded-sm px-2.5 py-2 text-sm font-semibold transition lg:py-1 ${
          activa === id ? "text-oro-claro" : "text-cal/80 hover:text-cal"
        }`}
      >
        {c.nav[id]}
      </a>
    </li>
  ));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        sobreHero && !abierto ? "bg-gradient-to-b from-black/60 to-transparent" : "bg-andino-oscuro/95 shadow-lg backdrop-blur"
      }`}
    >
      <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-cal focus:px-3 focus:py-2 focus:text-tinta">
        {c.ui.saltar}
      </a>
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" className="font-serif text-xl font-bold tracking-wide text-oro-claro">
          Guatavita Dorada
        </a>

        <nav aria-label={c.ui.secciones} className="hidden xl:block">
          <ul className="flex items-center">{enlaces}</ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={c.idioma.otroUrl}
            hrefLang={c.idioma.otro === "EN" ? "en" : "es-CO"}
            lang={c.idioma.otro === "EN" ? "en" : "es-CO"}
            title={c.idioma.otroNombre}
            className="rounded-full border border-oro/70 px-3 py-1 text-sm font-bold text-oro-claro transition hover:bg-oro hover:text-andino-oscuro"
          >
            {c.idioma.otro}
          </a>
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? c.ui.cerrar : c.ui.menu}
            className="rounded-sm p-2 text-cal xl:hidden"
          >
            {abierto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {abierto && (
        <nav id="menu-movil" aria-label={c.ui.secciones} className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-oro/20 bg-andino-oscuro px-4 pb-4 xl:hidden">
          <ul className="grid grid-cols-2 gap-x-2 pt-2 sm:grid-cols-3">{enlaces}</ul>
        </nav>
      )}

      <div className="h-[3px] bg-transparent" aria-hidden="true">
        <div ref={barra} className="h-full origin-left scale-x-0 bg-gradient-to-r from-oro to-ambar" />
      </div>
    </header>
  );
}
