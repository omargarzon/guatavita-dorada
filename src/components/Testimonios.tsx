import { Quote, UserRound } from "lucide-react";
import { enlaceWhatsapp, useIdioma } from "../lib/idioma";

// Tarjetas de testimonios. Mientras no haya testimonios reales, todas van marcadas como EJEMPLO.
export function Testimonios() {
  const { c } = useIdioma();
  const e = c.embalse;
  return (
    <div className="my-12">
      <h3 className="reveal text-3xl font-bold text-andino-oscuro">{e.testimoniosTitulo}</h3>
      <p className="reveal mt-2 text-tinta-suave">{e.testimoniosNota}</p>
      <ul className="mt-6 grid gap-5 md:grid-cols-3">
        {e.testimonios.map((t, i) => (
          <li key={i} className="reveal relative flex flex-col rounded-sm border-2 border-dashed border-tinta/25 bg-white p-5">
            <span className="absolute -top-3 right-4 rounded-sm bg-cacica px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white">
              {c.ui.ejemplo}
            </span>
            <Quote aria-hidden="true" className="h-6 w-6 text-oro" />
            <blockquote className="mt-2 flex-1 font-serif text-xl italic leading-snug text-tinta-suave">{t.cita}</blockquote>
            <div className="mt-5 flex items-center gap-3">
              <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-arena text-tinta-suave">
                <UserRound className="h-6 w-6" />
              </span>
              <span className="text-sm leading-tight">
                <span className="block font-bold text-tinta">{t.nombre}</span>
                <span className="text-tinta-suave">{t.detalle}</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
      <p className="reveal mt-5">
        <a
          href={enlaceWhatsapp(c.ui.mensajeWhatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border border-andino px-4 py-2 text-sm font-semibold text-andino transition hover:bg-andino hover:text-cal"
        >
          {c.ui.escribenos}
        </a>
      </p>
    </div>
  );
}
