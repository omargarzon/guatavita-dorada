import type { ReactNode } from "react";
import { Lightbulb, Sparkles, Info, Coins, ShieldCheck, Flame } from "lucide-react";
import type { Recuadro as RecuadroDatos } from "../content/sections";
import { useIdioma } from "../lib/idioma";
import { Texto } from "../lib/Texto";
import { Espiral, FranjaRombos } from "./Motivos";

type Fondo = "cal" | "arena" | "oscuro";

const fondos: Record<Fondo, string> = {
  cal: "bg-cal text-tinta",
  arena: "bg-arena text-tinta",
  oscuro: "bg-andino-oscuro text-cal",
};

interface SeccionProps {
  id: string;
  numero: string;
  titulo: string;
  fondo?: Fondo;
  etiqueta?: ReactNode;
  children: ReactNode;
  // Fotos que en escritorio van en una columna a la derecha del texto (en móvil, debajo)
  lateral?: ReactNode;
  // Si la columna lateral tiene una sola foto, se queda fija mientras se lee el texto
  lateralFijo?: boolean;
  // Bloques que ocupan todo el ancho, debajo del texto y la columna lateral
  abajo?: ReactNode;
}

export function Seccion({ id, numero, titulo, fondo = "cal", etiqueta, children, lateral, lateralFijo, abajo }: SeccionProps) {
  const { c } = useIdioma();
  const oscuro = fondo === "oscuro";
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className={`relative px-4 py-16 sm:px-6 sm:py-24 lg:px-10 ${fondos[fondo]}`}>
      <div className="mx-auto max-w-6xl">
        <header className="reveal mb-10">
          <div className="flex items-center gap-3">
            <Espiral className={`h-6 w-6 ${oscuro ? "text-oro" : "text-ambar"}`} />
            <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${oscuro ? "text-oro-claro" : "text-ambar-oscuro"}`}>
              {numero} · {c.nav[id]}
            </p>
            {etiqueta}
          </div>
          <h2 id={`${id}-titulo`} className={`mt-4 text-4xl font-bold sm:text-5xl ${oscuro ? "text-cal" : "text-andino-oscuro"}`}>
            {titulo}
          </h2>
          <FranjaRombos className={`mt-6 w-40 ${oscuro ? "text-oro/70" : "text-oro"}`} />
        </header>
        {lateral ? (
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_27rem] xl:gap-16">
            <div className="min-w-0">{children}</div>
            <div className={`mt-10 space-y-8 lg:mt-1 ${lateralFijo ? "lg:sticky lg:top-24 lg:self-start" : ""}`}>{lateral}</div>
          </div>
        ) : (
          children
        )}
        {abajo && <div className="mt-12">{abajo}</div>}
      </div>
    </section>
  );
}

export function Parrafos({ textos, oscuro }: { textos: string[]; oscuro?: boolean }) {
  return (
    <div className={`max-w-3xl space-y-5 ${oscuro ? "text-cal/90" : "text-tinta"}`}>
      {textos.map((t, i) => (
        <p key={i} className="reveal">
          <Texto>{t}</Texto>
        </p>
      ))}
    </div>
  );
}

const estilos = {
  dato: { icono: Lightbulb, caja: "border-ambar bg-ambar/10", titulo: "text-ambar-oscuro" },
  sabias: { icono: Sparkles, caja: "border-oro bg-oro/15", titulo: "text-ambar-oscuro" },
  nota: { icono: Info, caja: "border-laguna bg-laguna/10", titulo: "text-laguna" },
  numeros: { icono: Coins, caja: "border-ambar bg-ambar/10", titulo: "text-ambar-oscuro" },
  hoy: { icono: ShieldCheck, caja: "border-andino bg-andino/10", titulo: "text-andino" },
  mito: { icono: Flame, caja: "border-cacica bg-cacica/10", titulo: "text-cacica" },
} as const;

export function Recuadro({ datos, tipo }: { datos: RecuadroDatos; tipo: keyof typeof estilos }) {
  const e = estilos[tipo];
  const Icono = e.icono;
  return (
    <aside className={`reveal my-8 rounded-sm border-l-4 px-5 py-5 sm:px-6 ${e.caja}`}>
      <h3 className={`flex items-center gap-2 font-sans text-base font-bold uppercase tracking-wide ${e.titulo}`}>
        <Icono aria-hidden="true" className="h-5 w-5 shrink-0" strokeWidth={2} />
        {datos.titulo}
      </h3>
      <p className="mt-2 text-tinta">
        <Texto>{datos.texto}</Texto>
      </p>
    </aside>
  );
}
