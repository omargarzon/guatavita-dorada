import { ArrowUp, Footprints, Sailboat, Landmark, TriangleAlert } from "lucide-react";
import { useIdioma } from "./lib/idioma";
import { useRevelar } from "./lib/hooks";
import { Texto } from "./lib/Texto";
import { Navegacion } from "./components/Navegacion";
import { Hero } from "./components/Hero";
import { Seccion, Parrafos, Recuadro } from "./components/Seccion";
import { Foto, Pendiente } from "./components/Foto";
import { MitoRealidad } from "./components/MitoRealidad";
import { FiebreDelOro } from "./components/FiebreDelOro";
import { Cifras } from "./components/Cifras";
import { Testimonios } from "./components/Testimonios";
import { LineaDeTiempo } from "./components/LineaDeTiempo";
import { Galeria } from "./components/Galeria";
import { Fuentes } from "./components/Fuentes";
import { FranjaRombos, Zigzag } from "./components/Motivos";

const MEDIA = "(min-width: 640px) 50vw, 100vw";

export default function App() {
  const { c } = useIdioma();
  useRevelar();

  return (
    <>
      <Navegacion />
      <Hero />

      <main id="contenido">
        <Seccion id="tierra-muisca" numero="02" titulo={c.tierra.titulo}>
          <Parrafos textos={c.tierra.parrafos} />
          <Foto id="img-07" className="my-10" />
          <Recuadro tipo="dato" datos={c.tierra.datoCurioso} />
        </Seccion>

        <Seccion id="el-dorado" numero="03" titulo={c.dorado.titulo} fondo="arena">
          <Parrafos textos={c.dorado.antesDeCita} />
          <blockquote className="reveal my-8 border-l-4 border-oro pl-5 sm:pl-7">
            <p className="font-serif text-2xl italic leading-snug text-andino-oscuro sm:text-3xl">“{c.dorado.cita.texto}”</p>
            <footer className="mt-3 text-sm font-semibold text-tinta-suave">— {c.dorado.cita.fuente}</footer>
          </blockquote>
          <Parrafos textos={c.dorado.despuesDeCita} />
          <Foto id="img-01" className="my-10" />
          <Recuadro tipo="nota" datos={c.dorado.mito} />
          <Recuadro tipo="sabias" datos={c.dorado.sabias} />
          <div className="my-10 grid gap-6 sm:grid-cols-2">
            <Foto id="img-02" sizes={MEDIA} />
            <Foto id="img-04" sizes={MEDIA} />
          </div>
          <Recuadro tipo="dato" datos={c.dorado.balsaPerdida} />
        </Seccion>

        <Seccion
          id="la-cacica"
          numero="04"
          titulo={c.cacica.titulo}
          fondo="oscuro"
          etiqueta={
            <span className="rounded-sm bg-cacica px-2.5 py-0.5 text-xs font-bold uppercase tracking-[0.2em] text-white">{c.ui.mito}</span>
          }
        >
          <div className="space-y-5 font-serif text-xl leading-relaxed text-cal/90 sm:text-[1.35rem]">
            {c.cacica.relato.map((p, i) => (
              <p
                key={i}
                className={`reveal ${i === 0 ? "first-letter:float-left first-letter:mr-2 first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.85] first-letter:text-oro" : ""}`}
              >
                <Texto>{p}</Texto>
              </p>
            ))}
          </div>
          <div className="my-10 grid gap-6 sm:grid-cols-2">
            <Foto id="img-09" sizes={MEDIA} oscuro />
            <Pendiente titulo={c.pendientes.cacica} tipo="ilustracion" />
          </div>
          <div className="rounded-sm bg-cal px-5 py-2 text-tinta sm:px-8">
            <MitoRealidad />
            <Recuadro tipo="mito" datos={c.cacica.otraLectura} />
          </div>
        </Seccion>

        <Seccion id="conquista" numero="05" titulo={c.conquista.titulo} fondo="arena">
          <Parrafos textos={c.conquista.parrafos} />
          <Foto id="img-12" className="mt-10" />
        </Seccion>

        <Seccion id="fiebre-del-oro" numero="06" titulo={c.fiebre.titulo}>
          <p className="reveal text-xl leading-relaxed">{c.fiebre.intro}</p>
          <FiebreDelOro />
          <Recuadro tipo="numeros" datos={c.fiebre.enNumeros} />
          <div className="my-10 grid gap-6 sm:grid-cols-2">
            <Foto id="img-17" sizes={MEDIA} />
            <Pendiente titulo={c.pendientes.seca1910} />
          </div>
          <Recuadro tipo="hoy" datos={c.fiebre.hoy} />
          <Foto id="img-08" className="mt-10" />
        </Seccion>

        <Seccion id="embalse" numero="07" titulo={c.embalse.titulo} fondo="arena">
          <Parrafos textos={c.embalse.parrafos} />
          <Cifras titulo={c.embalse.cifrasTitulo} cifras={c.embalse.cifras} />
          <div className="my-10 grid gap-6 sm:grid-cols-2">
            <Pendiente titulo={c.pendientes.agua1963} />
            <Pendiente titulo={c.pendientes.pueblo1967} />
            <Pendiente titulo={c.pendientes.presa} />
            <Foto id="img-10b" sizes={MEDIA} />
          </div>
          <Testimonios />
        </Seccion>

        <Seccion id="guatavita-la-nueva" numero="08" titulo={c.nueva.titulo}>
          <Parrafos textos={c.nueva.parrafos} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Foto id="img-13a" sizes={MEDIA} />
            <Foto id="img-14" sizes={MEDIA} />
            <Foto id="img-13b" sizes={MEDIA} />
            <Foto id="img-13c" sizes={MEDIA} className="mx-auto max-w-[17rem] sm:row-span-2 sm:max-w-none" />
          </div>
        </Seccion>

        <Seccion id="cuando-el-agua-baja" numero="09" titulo={c.aguaBaja.titulo} fondo="oscuro">
          <Parrafos textos={c.aguaBaja.parrafos} oscuro />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Foto id="img-15" sizes={MEDIA} oscuro />
            <Foto id="img-16" sizes={MEDIA} oscuro />
          </div>
        </Seccion>

        <Seccion id="visita" numero="10" titulo={c.hoy.titulo} fondo="arena">
          <h3 className="reveal text-3xl font-bold text-andino-oscuro">{c.hoy.datosTitulo}</h3>
          <dl className="mt-5 grid gap-3 sm:grid-cols-2">
            {c.hoy.datos.map((d) => (
              <div key={d.etiqueta} className="reveal rounded-sm border-t-4 border-oro bg-white px-4 py-3 shadow-sm">
                <dt className="text-xs font-bold uppercase tracking-wide text-ambar-oscuro">{d.etiqueta}</dt>
                <dd className="mt-0.5 font-semibold">{d.valor}</dd>
              </div>
            ))}
          </dl>

          <h3 className="reveal mt-12 text-3xl font-bold text-andino-oscuro">{c.hoy.queHacerTitulo}</h3>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            {c.hoy.actividades.map((a, i) => {
              const Icono = [Footprints, Sailboat, Landmark][i] ?? Landmark;
              return (
                <li key={a.titulo} className="reveal rounded-sm bg-white p-5 shadow-sm">
                  <Icono aria-hidden="true" className="h-7 w-7 text-laguna" strokeWidth={1.6} />
                  <h4 className="mt-3 font-serif text-2xl font-bold text-andino-oscuro">{a.titulo}</h4>
                  <p className="mt-1.5">{a.texto}</p>
                </li>
              );
            })}
          </ul>
          <p className="reveal mt-6 flex items-start gap-2 rounded-sm bg-laguna/10 px-4 py-3 font-semibold text-laguna">
            <TriangleAlert aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" />
            {c.hoy.aclaracion}
          </p>
          <p className="reveal mt-6 text-tinta-suave">{c.hoy.enlacesTitulo}</p>
          <ul className="reveal mt-2 flex flex-wrap gap-3">
            {c.hoy.enlaces.map((e) => (
              <li key={e.texto}>
                <a
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-andino px-4 py-2 text-sm font-semibold text-cal transition hover:bg-andino-oscuro"
                >
                  {e.texto}
                </a>
              </li>
            ))}
          </ul>
        </Seccion>

        <Seccion id="linea-de-tiempo" numero="11" titulo={c.lineaTiempo.titulo}>
          <p className="reveal mb-8 text-lg">{c.lineaTiempo.intro}</p>
          <LineaDeTiempo />
        </Seccion>

        <Seccion id="galeria" numero="12" titulo={c.galeria.titulo} fondo="arena">
          <p className="reveal mb-6 text-tinta-suave">{c.galeria.intro}</p>
          <Galeria />
        </Seccion>

        <Seccion id="fuentes" numero="13" titulo={c.fuentes.titulo} fondo="oscuro">
          <Fuentes />
        </Seccion>
      </main>

      <footer className="bg-black px-4 py-10 text-center text-sm text-cal/70 sm:px-6">
        <Zigzag className="mx-auto mb-6 w-48 text-oro/60" />
        <p>{c.pie.texto}</p>
        <a href="#inicio" className="mt-4 inline-flex items-center gap-1.5 font-semibold text-oro-claro hover:text-oro">
          <ArrowUp aria-hidden="true" className="h-4 w-4" />
          {c.ui.volverArriba}
        </a>
        <FranjaRombos className="mx-auto mt-6 w-24 text-oro/40" />
      </footer>
    </>
  );
}
