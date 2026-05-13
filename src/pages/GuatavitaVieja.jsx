import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GOLD  = '#c9a227';
const BLACK = '#000';
const WHITE = '#fff';

const VIDEOS = [
  { src: '/videos/guatavita-vieja-1.mp4', wide: false },
  { src: '/videos/guatavita-vieja-2.mp4', wide: false },
  { src: '/videos/guatavita-vieja-3.mp4', wide: false },
  { src: '/videos/guatavita-vieja-4.mp4', wide: false },
  { src: '/videos/guatavita-vieja-5.mp4', wide: true },
];

const HISTORIA = [
  `Antiguamente, Guatavita fue la capital religiosa de los muiscas y es célebre por la mítica Leyenda del Dorado, aquella que narra cómo el heredero al trono, el Zipa, era coronado como nuevo soberano en una ceremonia sagrada que, según se cree, tenía lugar en las aguas sagradas de la Laguna del Cacique Guatavita. Allí, el oro, el sol y el agua se unían en un ritual que trascendía el tiempo, dando origen a uno de los relatos más fascinantes de la historia precolombina.`,
  `En lengua chibcha, Guatavita significa <strong>"Fin de la labranza"</strong> o <strong>"Punta de la sierra"</strong>. El cronista Fray Pedro Simón registró que su nombre original era Guatafita, "cosa puesta en lo alto", y explicó que los españoles cambiaron la "f" por "v" para suavizar la pronunciación. El primer asentamiento indígena no se ubicaba donde más tarde se fundó el pueblo colonial, al pie del cerro Montecillo, pues el terreno no correspondía con el significado del nombre. Hoy se tiene relativa certeza de que uno de los asentamientos prehispánicos estuvo en la vereda Guandita, aunque también se mencionan otros posibles lugares como Chaleche o un área comprendida entre el antiguo cementerio y Tominé.`,
  `<strong>La fundación oficial de Guatavita La Vieja se llevó a cabo el 18 de marzo de 1593</strong>, cuando el oidor Miguel de Ibarra adjudicó tierras en resguardo a las capitanías de Tumine, Chaleche y Tuneche, otorgándoles 41 cabuyas cuadradas, equivalentes a aproximadamente 11,3 fanegadas. Durante los siglos XVII y XVIII, la vida en Guatavita giraba en torno a la agricultura, practicada de manera rudimentaria. También se criaban ovejas y gallinas, se confeccionaban mantas y cobijas de lana, se elaboraban herramientas, estribos y aperos para animales de carga. Además, se explotaban minas de sal y carbón. Aislada de los caminos principales hacia Tunja o Zipaquirá, la población urbana no superaba las 500 personas. En 1771, un censo registró 1.577 indígenas y 1.064 personas blancas, organizadas en 214 familias.`,
  `En la gesta de independencia de Colombia, Guatavita dejó su huella a través del coronel José Ignacio Rodríguez Obregón, conocido como <strong>"El Mosca"</strong>, quien hizo parte del ejército patriota entre 1811 a 1821 y con sus acciones contribuyó en la gesta libertadora, y de su hermana Carmen Rodríguez Obregón, quien participó activamente en el movimiento del 20 de julio de 1810, fue espía y promovió las ideas revolucionarias desde 1811 a 1819. Durante el siglo XIX, la economía siguió sustentándose en la agricultura, la cría de animales, la producción artesanal y la minería. En 1874, el músico Alejandro Hoyos Rozo fundó la Banda Sinfónica del municipio, considerada la banda de pueblo más antigua del país, célebre por su repertorio festivo de bambucos, pasillos, torbellinos, valses y danzas, sin embargo, se le conoció como <strong>"una banda de una sola pieza"</strong>.`,
  `En el siglo XX, Guatavita La Vieja se convirtió en cabecera de provincia y paso obligado hacia los Llanos Orientales. Se destacaba por su pujante actividad agropecuaria, minera y artesanal, y por la belleza de sus casas coloniales de adobe, techos de teja de barro, balcones de hierro forjado o madera, amplios solares con huertas y animales. La iglesia, inspirada en grandes basílicas, y el imponente obelisco de la plaza principal eran símbolos de identidad para sus habitantes. Se cultivaban productos como trigo, cebada, papa, maíz, cebolla, ajo, arveja y fríjol. La cría de ovejas, gallinas, cerdos y ganado vacuno era común, al igual que la producción artesanal de canastos, mochilas de fique, ruanas, cobijas, mantas, gorros, guantes, esteras, enjalmas y angarillas. Su gastronomía tradicional incluía el cordero, la chanfaina y postres típicos como el <strong>"matrimonio"</strong> y el <strong>"plato campesino"</strong>. Las minas de carbón representaban la principal fuente de empleo y el producto era transportado principalmente a Bogotá. Cada domingo, el mercado reunía a productores y comerciantes de la región, ofreciendo papa, trigo, maíz, cebolla, huevos, gallinas, corderos, ganado y artesanías.`,
  `La antigua Guatavita, antes de ser sumergida bajo las aguas del embalse, era un pueblo limpio, hermoso y profundamente querido por sus habitantes. La vida allí transcurría en un ambiente sereno, tejido por la unión familiar, la solidaridad vecinal y un profundo sentido de honradez. Las relaciones eran sencillas y desinteresadas, y muchos recuerdan que el clima era incluso más cálido que en la nueva población. Años antes de su desaparición, el pueblo contaba con servicios públicos recientes y eficientes: alcantarillado, energía eléctrica, teléfono, telégrafo y una línea diaria de buses que facilitaba la comunicación con otros municipios y con Bogotá. Hacia la década de 1960, Guatavita tenía una extensión aproximada de 145 km², una población de 6.467 habitantes y estaba organizada en 13 veredas.`,
];

export default function GuatavitaVieja() {
  return (
    <div style={{ background: BLACK, color: WHITE, overflowX: 'hidden' }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        minHeight: 'calc(100vh - 70px)',
      }} className="gv-hero">
        <div style={{ overflow: 'hidden' }}>
          <img src="/imagenes/La_Antigua.jpg" alt="Vista aérea de Guatavita La Vieja"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%)' }} />
        </div>
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
            fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
            fontWeight: 900, lineHeight: 1.15, color: WHITE,
          }}>
            LA GUATAVITA QUE FUE INUNDADA.
          </h1>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            fontWeight: 700, color: GOLD, lineHeight: 1.3,
          }}>
            (Conoce la historia de la Antigua Guatavita.)
          </h2>
        </div>
      </section>

      {/* Videos */}
      <section style={{ background: BLACK }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 4, maxWidth: 1200, margin: '0 auto', padding: '2rem',
        }} className="gv-videos">
          {VIDEOS.map((v, i) => (
            <div key={i} style={{
              gridColumn: v.wide ? '1 / -1' : 'auto',
              background: '#111', overflow: 'hidden', borderRadius: 2,
            }}>
              <video controls preload="metadata"
                style={{ width: '100%', minHeight: v.wide ? 380 : 280, objectFit: 'cover', display: 'block' }}>
                <source src={v.src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </section>

      {/* Historia */}
      <section style={{ background: BLACK, padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {HISTORIA.map((text, i) => (
            <p key={i}
              style={{
                fontSize: '1rem', lineHeight: 1.85,
                color: '#e8e8e8', marginBottom: '1.5rem',
                fontWeight: 300, textAlign: 'justify',
              }}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .gv-hero { grid-template-columns: 1fr !important; min-height: auto !important; }
          .gv-hero > div:first-child { height: 350px; }
          .gv-hero > div:last-child { padding: 3rem 1.5rem !important; }
          .gv-videos { grid-template-columns: 1fr !important; padding: 1rem !important; }
        }
      `}</style>
    </div>
  );
}
