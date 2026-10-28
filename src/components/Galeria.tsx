import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { creditos, type ImagenId } from "../content/credits";
import { imagenes } from "../content/images";
import { useIdioma } from "../lib/idioma";
import { Credito } from "./Foto";

const IDS = Object.keys(creditos) as ImagenId[];

export function Galeria() {
  const { c, lang } = useIdioma();
  const [abierta, setAbierta] = useState<number | null>(null);
  const dialogo = useRef<HTMLDialogElement>(null);

  // <dialog> con showModal: atrapa el foco y se cierra con Escape
  useEffect(() => {
    const d = dialogo.current;
    if (!d) return;
    if (abierta !== null && !d.open) d.showModal();
    if (abierta === null && d.open) d.close();
  }, [abierta]);

  const mover = (paso: number) => setAbierta((i) => (i === null ? i : (i + paso + IDS.length) % IDS.length));

  const id = abierta !== null ? IDS[abierta] : null;

  return (
    <>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5 xl:grid-cols-6">
        {IDS.map((imgId, i) => (
          <li key={imgId} className="reveal">
            <button
              type="button"
              onClick={() => setAbierta(i)}
              aria-label={`${c.ui.ampliar}: ${imagenes[imgId].pie[lang]}`}
              className="group block aspect-square w-full overflow-hidden rounded-sm bg-arena"
            >
              <img
                src={`/img/${imgId}-sm.webp`}
                alt=""
                width={creditos[imgId].ancho}
                height={creditos[imgId].alto}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogo}
        onClose={() => setAbierta(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") mover(1);
          if (e.key === "ArrowLeft") mover(-1);
        }}
        onClick={(e) => e.target === e.currentTarget && setAbierta(null)}
        aria-label={c.ui.galeria}
        className="m-auto max-h-none max-w-none bg-transparent p-0 text-cal"
      >
        {id && (
          <div className="flex h-[100dvh] w-screen flex-col items-center justify-center px-3 py-14 sm:px-16">
            <button
              type="button"
              onClick={() => setAbierta(null)}
              aria-label={c.ui.cerrar}
              className="absolute right-3 top-3 rounded-full bg-black/50 p-2 text-cal hover:bg-black/80"
            >
              <X aria-hidden="true" className="h-6 w-6" />
            </button>
            <figure className="flex max-h-full flex-col items-center">
              <img
                key={id}
                src={`/img/${id}-lg.webp`}
                alt={imagenes[id].alt[lang]}
                width={creditos[id].ancho}
                height={creditos[id].alto}
                className="max-h-[75dvh] w-auto max-w-full object-contain"
              />
              <figcaption className="mt-3 max-w-2xl text-center text-sm">
                <span className="block">{imagenes[id].pie[lang]}</span>
                <Credito id={id} className="text-xs text-cal/75" />
              </figcaption>
            </figure>
            <button
              type="button"
              onClick={() => mover(-1)}
              aria-label={c.ui.anterior}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-cal hover:bg-black/80 sm:left-4"
            >
              <ChevronLeft aria-hidden="true" className="h-7 w-7" />
            </button>
            <button
              type="button"
              onClick={() => mover(1)}
              aria-label={c.ui.siguiente}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-cal hover:bg-black/80 sm:right-4"
            >
              <ChevronRight aria-hidden="true" className="h-7 w-7" />
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}
