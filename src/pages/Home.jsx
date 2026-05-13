import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GOLD  = '#c9a227';
const BLACK = '#000';
const WHITE = '#fff';
const CREAM = '#f8f4f0';

/* Imágenes del carrusel de atractivos */
const CAROUSEL_IMAGES = [
  { src: '/imagenes/45.jpg',        alt: 'Puente Marroquín' },
  { src: '/imagenes/11.jpg',        alt: 'Arco de Armas' },
  { src: '/imagenes/3.jpg',         alt: 'Monumento a la Cacica' },
  { src: '/imagenes/15.jpg',        alt: 'Plaza Cultural' },
  { src: '/imagenes/13.jpg',        alt: 'Iglesia Nuestra Señora de los Dolores' },
  { src: '/imagenes/obelisco.jpg',  alt: 'Obelisco' },
  { src: '/imagenes/balsa.png',     alt: 'Balsa Muisca' },
  { src: '/imagenes/mosaico.jpg',   alt: 'Mosaico Parque Natural' },
  { src: '/imagenes/puente.jpg',    alt: 'Puente de los Enamorados' },
  { src: '/imagenes/pozo.jpg',      alt: 'Pozo de la Dicha' },
  { src: '/imagenes/centro.jpg',    alt: 'Centro de Memoria Histórica' },
];

const PER_PAGE = 6;

/* Galería hero */
const HERO_IMAGES = [
  { src: '/imagenes/Coliseo.jpg',     alt: 'Coliseo de Guatavita' },
  { src: '/imagenes/La_Antigua.jpg',  alt: 'La Antigua Guatavita' },
  { src: '/imagenes/Guatavita2.avif', alt: 'Guatavita' },
  { src: '/imagenes/Pasillo.jpg',     alt: 'Pasillo colonial' },
  { src: '/imagenes/Guatavita.jpg',   alt: 'Guatavita vista aérea' },
  { src: '/imagenes/Torre.webp',      alt: 'Torre Reloj' },
  { src: '/imagenes/24.jpg',          alt: 'Guatavita' },
  { src: '/imagenes/foto.jpg',        alt: 'Guatavita' },
  { src: '/imagenes/translado.jpg',   alt: 'El Traslado' },
];

/* Botón reutilizable */
function Btn({ children, to, href, variant = 'white', ...rest }) {
  const styles = {
    white:        { background: WHITE,       color: BLACK,  border: 'none' },
    'gold-outline': { background: 'transparent', color: GOLD,  border: `2px solid ${GOLD}` },
    gold:         { background: GOLD,        color: BLACK,  border: 'none' },
  };
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
    padding: '0.75rem 2rem', borderRadius: 30,
    fontFamily: "'Lato', sans-serif", fontWeight: 700,
    fontSize: '0.85rem', letterSpacing: '0.05em',
    cursor: 'pointer', transition: 'all 0.2s',
    ...styles[variant],
  };

  if (to) return <Link to={to} style={base} {...rest}>▲ {children}</Link>;
  if (href) return <a href={href} style={base} {...rest}>▲ {children}</a>;
  return <button style={base} {...rest}>▲ {children}</button>;
}

export default function Home() {
  const [page, setPage] = useState(0);
  const maxPage = Math.ceil(CAROUSEL_IMAGES.length / PER_PAGE) - 1;
  const visible = CAROUSEL_IMAGES.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const slide = (dir) => {
    setPage(p => Math.max(0, Math.min(maxPage, p + dir)));
  };

  return (
    <div style={{ background: CREAM, color: BLACK, overflowX: 'hidden' }}>
      <Navbar />

      {/* ══ HERO ══════════════════════════════════ */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: 'calc(100vh - 70px)',
        background: CREAM,
      }} className="hero-section">
        <div style={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', padding: '4rem 3rem',
        }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.8rem, 5vw, 5rem)',
            fontWeight: 900, lineHeight: 1.05,
            marginBottom: '1.5rem',
          }}>
            Guatavita Dorada
          </h1>
          <p style={{ fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.5, maxWidth: 380 }}>
            Guatavita leyenda, naturaleza y alma viva en cada viaje
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          gap: 3,
          overflow: 'hidden',
          maxHeight: 'calc(100vh - 70px)',
        }}>
          {HERO_IMAGES.map((img, i) => (
            <img key={i} src={img.src} alt={img.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            />
          ))}
        </div>
      </section>

      {/* ══ GUATAVITA LA VIEJA ════════════════════ */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        minHeight: '75vh', background: BLACK, color: WHITE,
      }} className="vieja-section">
        <div style={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-end', padding: '3rem', gap: '2.5rem',
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 700, lineHeight: 1.2,
          }}>
            Guatavita La Vieja
          </h2>
          <Btn to="/guatavita-vieja" variant="white">Leer más</Btn>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <img src="/imagenes/La_Antigua.jpg" alt="Guatavita La Vieja"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      {/* ══ EL TRASLADO ══════════════════════════ */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        minHeight: '75vh', background: WHITE,
      }} className="traslado-section">
        <div style={{ overflow: 'hidden' }}>
          <img src="/imagenes/translado.jpg" alt="El Traslado"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',
          textAlign: 'center', padding: '3rem 2.5rem',
        }}>
          {/* Dots decorativos */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 10px)',
            gap: 6, marginBottom: '2rem',
          }}>
            {Array(9).fill(0).map((_, i) => (
              <span key={i} style={{ width: 10, height: 10, background: BLACK, borderRadius: '50%', display: 'block' }} />
            ))}
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: 700, marginBottom: '1.5rem',
          }}>
            El Traslado
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#444', maxWidth: 360, marginBottom: '2.5rem' }}>
            Conoce la historia de cómo fue el traslado de Guatavita la Vieja a La Nueva
          </p>
          <Btn to="/el-traslado" variant="gold-outline">Leer Más</Btn>
        </div>
      </section>

      {/* ══ ATRACTIVOS TURÍSTICOS ════════════════ */}
      <section style={{ background: BLACK, color: WHITE, padding: '5rem 2rem', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          fontWeight: 900, marginBottom: '0.75rem',
        }}>
          Atractivos Turísticos
        </h2>
        <p style={{ color: '#bbb', fontSize: '1rem', marginBottom: '3rem' }}>
          Conoce la historia de los hermosos atractivos de Guatavita La nueva
        </p>

        <div style={{ position: 'relative', maxWidth: 960, margin: '0 auto 3rem' }}>
          {/* Flecha anterior */}
          <button onClick={() => slide(-1)} disabled={page === 0}
            style={{
              position: 'absolute', top: '50%', left: '-3.5rem',
              transform: 'translateY(-50%)',
              color: page === 0 ? '#444' : WHITE,
              fontSize: '2.5rem', padding: '0.5rem',
              transition: 'color 0.2s', zIndex: 10,
            }}>
            ←
          </button>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(2, 220px)',
            gap: 4,
          }} className="carousel-grid">
            {visible.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'opacity 0.3s' }} />
            ))}
            {/* Rellenar si no hay suficientes imágenes en la última página */}
            {visible.length < PER_PAGE && Array(PER_PAGE - visible.length).fill(0).map((_, i) => (
              <div key={`empty-${i}`} style={{ background: '#111' }} />
            ))}
          </div>

          {/* Flecha siguiente */}
          <button onClick={() => slide(1)} disabled={page === maxPage}
            style={{
              position: 'absolute', top: '50%', right: '-3.5rem',
              transform: 'translateY(-50%)',
              color: page === maxPage ? '#444' : WHITE,
              fontSize: '2.5rem', padding: '0.5rem',
              transition: 'color 0.2s', zIndex: 10,
            }}>
            →
          </button>
        </div>

        <Btn to="/atractivos" variant="gold">Leer Más</Btn>
      </section>

      <Footer />

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .hero-section > div:last-child {
            grid-template-rows: repeat(2, 160px) !important;
            max-height: 350px !important;
          }
          .hero-section > div:last-child img:nth-child(n+7) { display: none; }

          .vieja-section, .traslado-section {
            grid-template-columns: 1fr !important;
          }
          .vieja-section > div:last-child { height: 300px; }
          .traslado-section > div:first-child { height: 300px; }

          .carousel-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: repeat(3, 180px) !important;
          }
        }
        @media (max-width: 480px) {
          .carousel-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: repeat(6, 200px) !important;
          }
        }
      `}</style>
    </div>
  );
}
