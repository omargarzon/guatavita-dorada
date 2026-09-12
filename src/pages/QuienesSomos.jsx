import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../i18n/LanguageContext';

const GOLD  = '#c9a227';
const BLACK = '#000';
const WHITE = '#fff';

export default function QuienesSomos() {
  const { t } = useLanguage();
  return (
    <div style={{ background: BLACK, color: WHITE, overflowX: 'hidden' }}>
      <Navbar />

      <header style={{ background: BLACK, textAlign: 'center', padding: '4rem 2rem 3rem' }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          fontWeight: 900, color: GOLD, lineHeight: 1,
        }}>
          {t.quienesSomosPage.title}
        </h1>
      </header>

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1rem 2rem 4rem' }}>
        {t.quienesSomosPage.paragraphs.map((text, i) => (
          <p key={i}
            style={{
              fontSize: '1rem', lineHeight: 1.85,
              color: '#e8e8e8', marginBottom: '1.5rem',
              fontWeight: 700, textAlign: 'justify',
            }}
            dangerouslySetInnerHTML={{ __html: text.replace(/<strong>/g, `<strong style="color:${GOLD}">`) }}
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
          {t.quienesSomosPage.quote}
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
