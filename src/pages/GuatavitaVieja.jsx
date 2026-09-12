import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../i18n/LanguageContext';

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

export default function GuatavitaVieja() {
  const { t } = useLanguage();
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
            {t.guatavitaViejaPage.title1}
          </h1>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            fontWeight: 700, color: GOLD, lineHeight: 1.3,
          }}>
            {t.guatavitaViejaPage.title2}
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
          {t.guatavitaViejaPage.paragraphs.map((text, i) => (
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
