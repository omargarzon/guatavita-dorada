import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fiebreDelOro } from "../content/timeline";
import { useIdioma } from "../lib/idioma";
import { Texto } from "../lib/Texto";

// Línea de tiempo de la fiebre del oro: se elige un año y se lee el intento
export function FiebreDelOro() {
  const { c, lang } = useIdioma();
  const [actual, setActual] = useState(0);
  const intento = fiebreDelOro[actual];
  const protagonista = typeof intento.protagonista === "string" ? intento.protagonista : intento.protagonista[lang];

  const mover = (paso: number) => setActual((i) => Math.min(fiebreDelOro.length - 1, Math.max(0, i + paso)));

  return (
    <div className="reveal my-10">
      <h3 className="text-3xl font-bold text-andino-oscuro">{c.fiebre.lineaTitulo}</h3>

      <div className="relative mt-6">
        <div aria-hidden="true" className="absolute left-0 right-0 top-[1.15rem] h-0.5 bg-ambar/40" />
        <ol className="relative -mx-4 flex gap-1 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-8 sm:px-0" aria-label={c.fiebre.lineaTitulo}>
          {fiebreDelOro.map((it, i) => (
            <li key={i} className="shrink-0 sm:shrink">
              <button
                type="button"
                onClick={() => setActual(i)}
                aria-pressed={actual === i}
                className="group flex w-24 flex-col items-center gap-2 text-center sm:w-full"
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs font-bold transition ${
                    actual === i ? "border-ambar-oscuro bg-ambar-oscuro text-white" : "border-ambar/60 bg-cal text-ambar-oscuro group-hover:border-ambar"
                  }`}
                >
                  {i + 1}
                </span>
                <span className={`text-xs font-semibold leading-tight ${actual === i ? "text-tinta" : "text-tinta-suave"}`}>
                  {it.fecha[lang]}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-4 rounded-sm border-t-4 border-ambar bg-white px-5 py-6 shadow-sm sm:px-7" aria-live="polite">
        <p className="text-sm font-bold uppercase tracking-wide text-ambar-oscuro">{intento.fecha[lang]}</p>
        <p className="mt-1 font-serif text-2xl font-bold text-andino-oscuro">{protagonista}</p>
        <p className="mt-3">
          <Texto>{intento.texto[lang]}</Texto>
        </p>
        <div className="mt-5 flex justify-between">
          <button
            type="button"
            onClick={() => mover(-1)}
            disabled={actual === 0}
            aria-label={c.ui.anterior}
            className="rounded-full border border-tinta/20 p-2 transition hover:border-ambar disabled:opacity-30"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <span className="self-center text-sm text-tinta-suave">
            {actual + 1} / {fiebreDelOro.length}
          </span>
          <button
            type="button"
            onClick={() => mover(1)}
            disabled={actual === fiebreDelOro.length - 1}
            aria-label={c.ui.siguiente}
            className="rounded-full border border-tinta/20 p-2 transition hover:border-ambar disabled:opacity-30"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
