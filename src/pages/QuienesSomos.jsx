import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GOLD  = '#c9a227';
const BLACK = '#000';
const WHITE = '#fff';

const PARAGRAPHS = [
  { text: `Somos la comunidad educativa de la <strong>Institución PIO XII</strong> del bello e imponente municipio de Guatavita.`, bold: true },
  { text: `Durante el año 2025, los estudiantes de grado once y décimo de la <strong>Técnica de Turismo</strong>, realizamos una importante labor de recuperación de la memoria histórica y realce del patrimonio material e inmaterial del municipio.`, bold: true },
  { text: `Un trabajo que inició hace tres años de manera conjunta las Áreas de la técnica en turismo, Ingles, Sociales, Informática, y contando adicionalmente con el apoyo indispensable y el basto conocimiento del señor <strong>Javier Cortés</strong>.`, bold: true },
  { text: `Hoy, más que una institución, estos jóvenes estudiantes que cursaron la técnica en turismo, nos demostraron que con su esfuerzo en el proceso investigativo y la creatividad en la realización de los elementos que van a encontrar en nuestra página, en los que se combinaron: destreza en manualidades y el buen uso de la tecnología, vale la pena recordar de dónde venimos y a donde deseamos llegar como un destino turístico de talla internacional.` },
  { text: `De esta manera los jóvenes de <strong>Décimo</strong> estuvieron encargados de la identificación y puesta en valor de los atractivos de la Guatavita Actual; así mismo los alumnos de <strong>1101</strong> se encargaron de traer al presente la interesante historia de Guatavita la Vieja, para finalmente ser sorprendidos con los datos históricos y algunas anécdotas del proceso de traslado que los alumnos de <strong>1102</strong> recopilaron.`, bold: true },
  { text: `Toda esta información se resguardará en la Página Web y redes sociales que también han venido diseñándose y fortaleciéndose durante estas etapas.` },
  { text: `De esta manera cumplimos el propósito de estas herramientas; el resaltar el amor por esta tierra bella, aumentar e incentivar el sentido de apropiación por nuestro terruño, recordando a nuestros ancestros y familiares, que alguna vez entre lágrimas, preocupación y muy seguramente en medio de la incertidumbre, recogían sus corotos, animales y sueños para abrirse camino a nuevos sueños y proyectos.` },
  { text: `Tal vez, aquellas personas que con esa misma incertidumbre se trasladaban de Guatavita la Antigua, nunca se imaginaron que serían parte de la historia que sus nietos o bisnietos investigarían, se apropiarían y si Dios lo permite, se promoverá ante visitantes y turistas de Colombia y el mundo.` },
  { text: `Es apenas, un granito de arena, el que podemos estar aportando en este momento, pero sin duda, las piedras angulares de los más grandes proyectos están hechas de este tipo de aportes.` },
];

const QUOTE = `Sin duda, este proyecto es un avance muy significativo y cumple con su objetivo de "Aumentar el sentido de pertenencia y apropiación por el municipio, su historia, cultura y atractivos turísticos en general, en los estudiantes de la institución y para que los Guatavas, visitantes y turistas conozcan toda la historia".`;

export default function QuienesSomos() {
  return (
    <div style={{ background: BLACK, color: WHITE, overflowX: 'hidden' }}>
      <Navbar />

      <header style={{ background: BLACK, textAlign: 'center', padding: '4rem 2rem 3rem' }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          fontWeight: 900, color: GOLD, lineHeight: 1,
        }}>
          Quienes Somos
        </h1>
      </header>

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1rem 2rem 4rem' }}>
        {PARAGRAPHS.map((p, i) => (
          <p key={i}
            style={{
              fontSize: '1rem', lineHeight: 1.85,
              color: '#e8e8e8', marginBottom: '1.5rem',
              fontWeight: 700, textAlign: 'justify',
            }}
            dangerouslySetInnerHTML={{ __html: p.text.replace(/<strong>/g, `<strong style="color:${GOLD}">`) }}
          />
        ))}

        {/* Cita */}
        <p style={{
          borderLeft: `3px solid ${GOLD}`,
          paddingLeft: '1.5rem',
          margin: '2rem 0',
          fontStyle: 'italic',
          color: '#ccc',
          fontWeight: 300,
          lineHeight: 1.85,
        }}>
          {QUOTE}
        </p>
      </section>

      {/* Fotos */}
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        padding: '1rem 2rem 5rem',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem',
      }} className="qs-photos">
        <img src="/imagenes/QS2.jpg" alt="Estudiantes Institución PIO XII"
          style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
        <img src="/imagenes/QS1.jpg" alt="Estudiantes Institución PIO XII"
          style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
      </div>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .qs-photos { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
