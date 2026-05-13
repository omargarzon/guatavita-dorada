import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GOLD  = '#c9a227';
const BLACK = '#000';
const WHITE = '#fff';

const VIDEOS = ['/videos/entrevistas-1.mp4'];

export default function Entrevistas() {
  return (
    <div style={{ background: BLACK, color: WHITE, overflowX: 'hidden' }}>
      <Navbar />

      <header style={{ background: BLACK, textAlign: 'center', padding: '4rem 2rem 2rem' }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          fontWeight: 900, color: GOLD, lineHeight: 1,
        }}>
          Entrevistas
        </h1>
      </header>

      <section style={{
        background: BLACK, padding: '2rem 2rem 6rem',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '3rem',
      }}>
        {VIDEOS.map((src, i) => (
          <div key={i} style={{ width: '100%', maxWidth: 760 }}>
            <video controls preload="metadata"
              style={{ width: '100%', aspectRatio: '16 / 9', display: 'block', background: '#111' }}>
              <source src={src} type="video/mp4" />
            </video>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
