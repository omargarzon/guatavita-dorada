import { BookOpen, Feather } from "lucide-react";
import { useIdioma } from "../lib/idioma";
import { Texto } from "../lib/Texto";

export function MitoRealidad() {
  const { c } = useIdioma();
  const t = c.cacica.tabla;
  return (
    <div className="reveal my-10">
      <h3 className="text-3xl font-bold text-andino-oscuro">{t.titulo}</h3>

      {/* En móvil cada fila es una tarjeta; en pantallas grandes, una tabla de dos columnas */}
      <table className="mt-5 w-full border-collapse text-left">
        <thead className="sr-only sm:not-sr-only">
          <tr>
            <th scope="col" className="w-1/2 border-b-2 border-andino pb-2 pr-4 text-sm font-bold uppercase tracking-wide text-andino">
              <BookOpen aria-hidden="true" className="mr-2 inline h-4 w-4" />
              {t.historico}
            </th>
            <th scope="col" className="w-1/2 border-b-2 border-cacica pb-2 pl-4 text-sm font-bold uppercase tracking-wide text-cacica">
              <Feather aria-hidden="true" className="mr-2 inline h-4 w-4" />
              {t.legendario}
            </th>
          </tr>
        </thead>
        <tbody>
          {t.filas.map(([historico, legendario], i) => (
            <tr key={i} className="block border-b border-tinta/15 py-4 sm:table-row sm:py-0">
              <td className="block sm:table-cell sm:py-4 sm:pr-4 sm:align-top">
                <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-andino sm:hidden">{t.historico}</span>
                <Texto>{historico}</Texto>
              </td>
              <td className="mt-3 block sm:mt-0 sm:table-cell sm:border-l sm:border-tinta/15 sm:py-4 sm:pl-4 sm:align-top">
                <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-cacica sm:hidden">{t.legendario}</span>
                <Texto>{legendario}</Texto>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
