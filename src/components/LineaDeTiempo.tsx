import { useState } from "react";
import { categorias, lineaDeTiempo, type Categoria } from "../content/timeline";
import { useIdioma } from "../lib/idioma";
import { Texto } from "../lib/Texto";

// Conquista y Colonia comparten color, así que se filtran juntas
const FILTROS: { id: string; incluye: Categoria[] }[] = [
  { id: "muisca", incluye: ["muisca"] },
  { id: "leyenda", incluye: ["leyenda"] },
  { id: "colonia", incluye: ["conquista", "colonia"] },
  { id: "oro", incluye: ["oro"] },
  { id: "republica", incluye: ["republica"] },
  { id: "embalse", incluye: ["embalse"] },
  { id: "hoy", incluye: ["hoy"] },
];

export function LineaDeTiempo() {
  const { c, lang } = useIdioma();
  const [filtro, setFiltro] = useState<string | null>(null);
  const activo = FILTROS.find((f) => f.id === filtro);
  const hitos = activo ? lineaDeTiempo.filter((h) => activo.incluye.includes(h.categoria)) : lineaDeTiempo;

  const nombreFiltro = (f: (typeof FILTROS)[number]) => f.incluye.map((cat) => categorias[cat].nombre[lang]).join(" / ");

  return (
    <div>
      <div role="group" aria-label={c.ui.filtrar} className="reveal flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFiltro(null)}
          aria-pressed={filtro === null}
          className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition ${
            filtro === null ? "border-tinta bg-tinta text-cal" : "border-tinta/25 bg-white text-tinta hover:border-tinta"
          }`}
        >
          {c.ui.todas}
        </button>
        {FILTROS.map((f) => {
          const { color, texto } = categorias[f.incluye[0]];
          const seleccionado = filtro === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFiltro(seleccionado ? null : f.id)}
              aria-pressed={seleccionado}
              className="flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-semibold transition"
              style={seleccionado ? { background: texto, borderColor: texto, color: "#fff" } : { borderColor: color, background: "#fff", color: texto }}
            >
              <span aria-hidden="true" className="h-2.5 w-2.5 rotate-45" style={{ background: seleccionado ? "#fff" : color }} />
              {nombreFiltro(f)}
            </button>
          );
        })}
      </div>

      <ol className="relative mt-10 border-l-2 border-tinta/15 pl-6 sm:pl-8" aria-live="polite">
        {hitos.map((h) => {
          const cat = categorias[h.categoria];
          return (
            <li key={h.fecha.es + h.texto.es} className="relative pb-7 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[calc(1.5rem+7px)] top-1.5 h-3 w-3 rotate-45 ring-4 ring-cal sm:-left-[calc(2rem+7px)]"
                style={{ background: cat.color }}
              />
              <p className="text-sm font-bold uppercase tracking-wide" style={{ color: cat.texto }}>
                {h.fecha[lang]}
                <span className="ml-2 font-semibold normal-case tracking-normal text-tinta-suave">· {cat.nombre[lang]}</span>
              </p>
              <p className="mt-0.5 text-lg leading-snug">
                <Texto>{h.texto[lang]}</Texto>
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
