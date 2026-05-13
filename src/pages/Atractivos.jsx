import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GOLD = '#c9a227';
const BLACK = '#000';
const WHITE = '#fff';

const ATRACTIVOS = [
  { src: '/imagenes/45.jpg',       alt: 'Puente Marroquín',                             label: 'Puente Marroquín' },
  { src: '/imagenes/11.jpg',       alt: 'Arco de Armas',                                label: 'Arco de Armas' },
  { src: '/imagenes/3.jpg',        alt: 'Monumento a la Cacica',                        label: 'Monumento a la Cacica' },
  { src: '/imagenes/15.jpg',       alt: 'Plaza Cultural',                               label: 'Plaza Cultural' },
  { src: '/imagenes/13.jpg',       alt: 'Iglesia Nuestra Señora de los Dolores',        label: 'Iglesia Nuestra Señora de los Dolores' },
  { src: '/imagenes/obelisco.jpg', alt: 'Obelisco',                                     label: 'Obelisco' },
  { src: '/imagenes/balsa.png',    alt: 'Balsa Muisca',                                 label: 'Balsa Muisca' },
  { src: '/imagenes/mosaico.jpg',  alt: 'Mosaico Parque Natural Regional Vista Hermosa', label: 'Mosaico Parque Natural Regional Vista Hermosa' },
  { src: '/imagenes/puente.jpg',   alt: 'Puente de los Enamorados',                     label: 'Puente de los Enamorados' },
  { src: '/imagenes/pozo.jpg',     alt: 'Pozo de la Dicha',                             label: 'Pozo de la Dicha' },
  { src: '/imagenes/centro.jpg',   alt: 'Centro de Memoria Histórica',                  label: 'Centro de Memoria Histórica' },
];

export default function Atractivos() {
  return (
    <div style={{ background: BLACK, color: WHITE, overflowX: 'hidden' }}>
      <Navbar />

      {/* Header */}
      <header style={{
        background: BLACK, padding: '3rem 3rem 2rem',
        display: 'flex', alignItems: 'center', gap: '1.5rem',
      }}>
        <div style={{
          width: 60, height: 60, background: WHITE, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.6rem', color: BLACK, flexShrink: 0,
        }}>⏪</div>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 900, color: GOLD,
        }}>
          Atractivos
        </h1>
      </header>

      {/* Grid */}
      <main style={{ padding: '1rem 2rem 5rem', maxWidth: 1300, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem 2rem',
        }} className="atractivos-grid">
          {ATRACTIVOS.map((a, i) => (
            <div key={i} style={{ cursor: 'default' }}>
              <div style={{ width: '100%', aspectRatio: '3 / 2', overflow: 'hidden', marginBottom: '0.9rem' }}>
                <img src={a.src} alt={a.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <h2 style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '1.15rem', fontWeight: 400,
                color: WHITE, letterSpacing: '0.02em',
              }}>
                {a.label}
              </h2>
            </div>
          ))}
        </div>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .atractivos-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
