import { Fragment, type ReactNode } from "react";

// Convierte *cursiva* y **negrita** de los archivos de contenido en elementos
export function Texto({ children }: { children: string }) {
  const partes = children.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return (
    <>
      {partes.map((parte, i): ReactNode => {
        if (parte.startsWith("**") && parte.endsWith("**")) {
          return <strong key={i} className="font-semibold text-tinta">{parte.slice(2, -2)}</strong>;
        }
        if (parte.startsWith("*") && parte.endsWith("*") && parte.length > 2) {
          return <em key={i}>{parte.slice(1, -1)}</em>;
        }
        return <Fragment key={i}>{parte}</Fragment>;
      })}
    </>
  );
}
