import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../i18n/LanguageContext';

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
  const { t } = useLanguage();
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
            {t.elTrasladoPage.title}
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
          {t.elTrasladoPage.paragraphs.map((text, i) => (
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
