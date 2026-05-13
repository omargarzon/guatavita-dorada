import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GOLD  = '#c9a227';
const BLACK = '#000';
const WHITE = '#fff';

export default function GuatavitaVieja() {
  return (
    <div style={{ background: BLACK, color: WHITE, overflowX: 'hidden' }}>
      <Navbar />

      <header style={{ background: BLACK, textAlign: 'center', padding: '4rem 2rem 3rem' }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 900, color: GOLD, lineHeight: 1,
        }}>
          Guatavita La Vieja
        </h1>
      </header>

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 2rem 6rem', textAlign: 'center' }}>
        <p style={{ color: '#888', fontSize: '1.1rem' }}>
          Contenido próximamente — agrega aquí el texto e imágenes de la página Guatavita Vieja.
        </p>
      </section>

      <Footer />
    </div>
  );
}
