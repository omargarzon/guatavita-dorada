import { useId } from "react";

// Motivos geométricos de inspiración muisca (rombos, espirales escalonadas, zigzag).
// Dibujos originales y decorativos: no reproducen piezas reales.

interface MotivoProps {
  className?: string;
}

// Franja de rombos encadenados, con un punto al centro de cada uno
export function FranjaRombos({ className = "" }: MotivoProps) {
  const id = useId();
  return (
    <svg aria-hidden="true" className={className} width="100%" height="14" preserveAspectRatio="none">
      <defs>
        <pattern id={id} width="28" height="14" patternUnits="userSpaceOnUse">
          <path d="M0 7 L7 0 L14 7 L7 14 Z M14 7 L21 0 L28 7 L21 14 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="7" cy="7" r="1.4" fill="currentColor" />
          <circle cx="21" cy="7" r="1.4" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="14" fill={`url(#${id})`} />
    </svg>
  );
}

// Línea en zigzag, como separador
export function Zigzag({ className = "" }: MotivoProps) {
  const id = useId();
  return (
    <svg aria-hidden="true" className={className} width="100%" height="10" preserveAspectRatio="none">
      <defs>
        <pattern id={id} width="16" height="10" patternUnits="userSpaceOnUse">
          <polyline points="0,9 4,1 8,9 12,1 16,9" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </pattern>
      </defs>
      <rect width="100%" height="10" fill={`url(#${id})`} />
    </svg>
  );
}

// Espiral escalonada (greca) como ornamento suelto
export function Espiral({ className = "" }: MotivoProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className={className}>
      <path
        d="M4 44 V4 H44 V36 H12 V12 H36 V28 H20 V20 H28"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

// Fondo de rombos concéntricos para espacios reservados y bloques oscuros
export function FondoRombos({ className = "" }: MotivoProps) {
  const id = useId();
  return (
    <svg aria-hidden="true" className={className} width="100%" height="100%">
      <defs>
        <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M20 2 L38 20 L20 38 L2 20 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M20 11 L29 20 L20 29 L11 20 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          <rect x="18.5" y="18.5" width="3" height="3" fill="currentColor" transform="rotate(45 20 20)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
