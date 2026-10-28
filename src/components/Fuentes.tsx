import { ExternalLink } from "lucide-react";
import { creditos, type ImagenId } from "../content/credits";
import { imagenes } from "../content/images";
import { useIdioma } from "../lib/idioma";
import { Texto } from "../lib/Texto";

export function Fuentes() {
  const { c, lang } = useIdioma();
  const f = c.fuentes;
  const enlace = "underline decoration-oro/60 underline-offset-2 hover:decoration-oro";
  return (
    <div className="space-y-12 text-[0.95rem] text-cal/90">
      <div className="reveal">
        <h3 className="text-2xl font-bold text-oro-claro">{f.fuentesTitulo}</h3>
        <ul className="mt-4 space-y-2.5">
          {f.items.map((item) => (
            <li key={item.texto} className="border-l-2 border-oro/40 pl-3">
              {item.url ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer" className={enlace}>
                  <Texto>{item.texto}</Texto>
                  <ExternalLink aria-hidden="true" className="ml-1 inline h-3.5 w-3.5" />
                </a>
              ) : (
                <Texto>{item.texto}</Texto>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="reveal">
        <h3 className="text-2xl font-bold text-oro-claro">{f.creditosTitulo}</h3>
        <p className="mt-2 text-cal/75">{f.creditosIntro}</p>
        <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {(Object.keys(creditos) as ImagenId[]).map((id) => {
            const cr = creditos[id];
            return (
              <li key={id} className="leading-snug">
                <span className="block text-cal">{imagenes[id].pie[lang]}</span>
                <span className="text-sm text-cal/75">
                  <a href={cr.fuente} target="_blank" rel="noopener noreferrer" className={enlace}>
                    {cr.autor}
                  </a>
                  {" · "}
                  {cr.licenciaUrl ? (
                    <a href={cr.licenciaUrl} target="_blank" rel="noopener noreferrer" className={enlace}>
                      {cr.licencia}
                    </a>
                  ) : (
                    f.dominioPublico
                  )}
                  {" · Wikimedia Commons"}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="reveal">
        <h3 className="text-2xl font-bold text-oro-claro">{f.pendientesTitulo}</h3>
        <ul className="mt-4 list-disc space-y-1.5 pl-5 text-cal/80 marker:text-oro">
          {f.pendientes.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
