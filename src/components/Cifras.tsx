import { useEffect, useState } from "react";
import type { Cifra } from "../content/sections";
import { prefiereMenosMovimiento, useVisible } from "../lib/hooks";
import { FondoRombos } from "./Motivos";

function Contador({ hasta, activo }: { hasta: number; activo: boolean }) {
  const [valor, setValor] = useState(0);
  useEffect(() => {
    if (!activo) return;
    if (prefiereMenosMovimiento()) {
      setValor(hasta);
      return;
    }
    const duracion = 1400;
    const inicio = performance.now();
    let frame = 0;
    const paso = (ahora: number) => {
      const t = Math.min(1, (ahora - inicio) / duracion);
      setValor(Math.round(hasta * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(paso);
    };
    frame = requestAnimationFrame(paso);
    return () => cancelAnimationFrame(frame);
  }, [activo, hasta]);
  return <>{valor}</>;
}

export function Cifras({ titulo, cifras }: { titulo: string; cifras: Cifra[] }) {
  const { ref, visible } = useVisible<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal relative my-12 overflow-hidden rounded-sm bg-laguna px-5 py-8 text-cal sm:px-8 sm:py-10">
      <FondoRombos className="absolute inset-0 text-white/[0.06]" />
      <h3 className="relative text-3xl font-bold text-cal">{titulo}</h3>
      <ul className="relative mt-6 grid gap-x-8 gap-y-7 sm:grid-cols-2">
        {cifras.map((cifra, i) => {
          const final = `${cifra.prefijo ?? ""}${cifra.numero ?? cifra.valor}${cifra.sufijo ?? ""}`;
          return (
            <li key={i} className="border-t border-cal/25 pt-4">
              {/* El número animado es solo visual; el lector de pantalla recibe el valor final */}
              <span className="sr-only">{`${final} ${cifra.unidad ?? ""} ${cifra.etiqueta}`}</span>
              <span aria-hidden="true">
                <span className="block font-serif text-5xl font-bold leading-none text-oro-claro sm:text-6xl">
                  {cifra.numero !== undefined ? (
                    <>
                      {cifra.prefijo}
                      <Contador hasta={cifra.numero} activo={visible} />
                      {cifra.sufijo}
                    </>
                  ) : (
                    cifra.valor
                  )}
                </span>
                {cifra.unidad && <span className="mt-1 block text-lg font-semibold">{cifra.unidad}</span>}
                <span className="mt-1 block text-cal/85">{cifra.etiqueta}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
