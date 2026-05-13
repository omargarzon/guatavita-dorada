import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GOLD  = '#c9a227';
const BLACK = '#000';
const WHITE = '#fff';

const VIDEOS = [
  '/videos/traslado-1.mp4',
  '/videos/traslado-2.mp4',
  '/videos/traslado-3.mp4',
  '/videos/traslado-4.mp4',
];

export default function ElTraslado() {
  return (
    <div style={{ background: BLACK, color: WHITE, overflowX: 'hidden' }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        minHeight: 'calc(100vh - 70px)',
      }} className="traslado-hero">
        <div style={{
          background: BLACK,
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'flex-start',
          padding: '4rem 3rem', gap: '1.5rem',
        }}>
          <div style={{
            width: 70, height: 70, background: WHITE, borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '2rem', color: BLACK, marginBottom: '0.5rem',
          }}>⏪</div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 900, color: GOLD, lineHeight: 1.1,
          }}>
            El Traslado
          </h1>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <img src="/imagenes/translado.jpg" alt="El Traslado"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      {/* Videos */}
      <section style={{ background: BLACK }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 4, maxWidth: 1200, margin: '0 auto', padding: '2rem',
        }} className="videos-grid">
          {VIDEOS.map((src, i) => (
            <div key={i} style={{ position: 'relative', background: '#111', overflow: 'hidden' }}>
              <video controls preload="metadata"
                style={{ width: '100%', minHeight: 280, objectFit: 'cover', display: 'block' }}>
                <source src={src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </section>

      {/* Historia */}
      <section style={{ background: BLACK, padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {[
            `En 1959, la Empresa de Energía Eléctrica de Bogotá emprendió estudios para la construcción del embalse de Tominé. Las obras comenzaron en 1960 con el propósito de generar energía hidroeléctrica, abastecer la planta de Tibitoc para el acueducto de Bogotá y regular el caudal del río Bogotá para prevenir inundaciones. Esta obra monumental implicó el desalojo de comunidades campesinas, la inundación de fértiles tierras y la desaparición del pueblo antiguo, del cual solo quedaron en pie el obelisco de ocho metros de altura y la colina donde aún reposa el cementerio. Inicialmente, la Empresa de Energía Eléctrica de Bogotá no contemplaba una nueva población, pero tras cabildos, protestas, negociaciones, manifestaciones y un paro cívico, el 14 de noviembre de 1964 comenzó la construcción del nuevo municipio bajo la dirección de la firma Llorente y Ponce de León Asociados.`,
            `El traslado a Guatavita La Nueva no fue fácil. Muchos de los habitantes, sobre todo los mayores, se resistían a abandonar el pueblo. El momento más doloroso llegó el 15 de septiembre de ese mismo año, coincidiendo con la fiesta de la Virgen de los Dolores, patrona del pueblo, cuando el agua ya cubría media plaza cerca al obelisco.`,
            `El diseño de Guatavita La Nueva estuvo a cargo del arquitecto Jaime Ponce de León, quien se inspiró en la arquitectura andaluza y el estilo mudéjar. El resultado fue un encantador conjunto urbano de casas blancas, techos de teja de barro, calles empedradas, plazas abiertas, arcos y escaleras que se adaptan a los desniveles del terreno. Hoy, Guatavita La Nueva abarca 247,3 km², se eleva a 2.680 metros sobre el nivel del mar y alberga aproximadamente 7.500 habitantes distribuidos en 15 veredas. Sus principales actividades económicas son la producción lechera, la agricultura y, sobre todo, el turismo.`,
            `Entre sus lugares más emblemáticos se destacan la iglesia Nuestra Señora de los Dolores, la Plaza Cultural, el Obelisco, el Arco de Armas, el Puente de los Enamorados, el Pozo de la Dicha, el Monumento a la Cacica, el Centro de Memoria Histórica —antigua Plaza de Toros La Real Maestranza—, la escultura de la Balsa Muisca, el mosaico del Parque Natural Regional Vista Hermosa, el embalse de Tominé, el Cementerio Indígena, el cerro Montecillo y el Parque Natural Regional Vista Hermosa. Todos ellos invitan a descubrir el espíritu profundo de Guatavita, su arquitectura singular, sus paisajes, su simbolismo, su magia y sus misterios.`,
          ].map((text, i) => (
            <p key={i} style={{
              fontSize: '1rem', lineHeight: 1.85,
              color: '#e8e8e8', marginBottom: '1.5rem',
              fontWeight: 300, textAlign: 'justify',
            }}>
              {text}
            </p>
          ))}
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .traslado-hero { grid-template-columns: 1fr !important; min-height: auto !important; }
          .traslado-hero > div:last-child { height: 350px; order: -1; }
          .videos-grid { grid-template-columns: 1fr !important; padding: 1rem !important; }
        }
      `}</style>
    </div>
  );
}
