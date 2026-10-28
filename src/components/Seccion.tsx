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
}

export function Seccion({ id, numero, titulo, fondo = "cal", etiqueta, children }: SeccionProps) {
  const { c } = useIdioma();
  const oscuro = fondo === "oscuro";
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className={`relative px-4 py-16 sm:px-6 sm:py-24 ${fondos[fondo]}`}>
      <div className="mx-auto max-w-3xl">
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
        {children}
      </div>
    </section>
  );
}

export function Parrafos({ textos, oscuro }: { textos: string[]; oscuro?: boolean }) {
  return (
    <div className={`space-y-5 ${oscuro ? "text-cal/90" : "text-tinta"}`}>
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
