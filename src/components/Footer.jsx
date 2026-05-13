import { Link } from 'react-router-dom';

const GOLD = '#c9a227';
const WHITE = '#fff';
const BLACK = '#000';

const NAV_LINKS = [
  { label: 'Entrevistas',     path: '/entrevistas' },
  { label: 'Quienes Somos',   path: '/quienes-somos' },
  { label: 'Atractivos',      path: '/atractivos' },
  { label: 'El Traslado',     path: '/el-traslado' },
  { label: 'Guatavita Vieja', path: '/guatavita-vieja' },
];

const SOCIAL = [
  { label: 'TikTok',    url: 'https://www.tiktok.com/@guatavita.dorada' },
  { label: 'Instagram', url: 'https://www.instagram.com/guatavita_dorada' },
  { label: 'Facebook',  url: 'https://www.facebook.com/share/1RfxTQgAAV/' },
];

export default function Footer() {
  return (
    <>
      <footer style={{
        background: BLACK,
        color: WHITE,
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        gap: '2rem',
        padding: '4rem 3rem',
        borderTop: '1px solid #222',
      }} className="site-footer">

        {/* Izquierda */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(3.5rem, 8vw, 8rem)',
            fontWeight: 900,
            lineHeight: 0.88,
            marginBottom: '1.5rem',
          }}>
            Guatavita<br />Dorada
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {NAV_LINKS.map(l => (
              <Link key={l.path} to={l.path}
                style={{ color: WHITE, fontSize: '0.95rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = GOLD}
                onMouseLeave={e => e.target.style.color = WHITE}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Centro — logo */}
        <div>
          <img src="/imagenes/logo.png" alt="Guatavita Dorada"
            style={{ width: 220, height: 220, objectFit: 'contain' }} />
        </div>

        {/* Derecha */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
            {SOCIAL.map(s => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                style={{ color: WHITE, fontSize: '0.95rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = GOLD}
                onMouseLeave={e => e.target.style.color = WHITE}>
                {s.label}
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.8rem', color: '#999', marginBottom: '0.5rem' }}>Patrocinador</p>
            <img src="/imagenes/patrocinio.jpg" alt="Patrocinador"
              style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', border: '2px solid #333' }} />
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 900px) {
          .site-footer {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            padding: 3rem 1.5rem !important;
          }
          .site-footer > div:last-child { align-items: center !important; }
          .site-footer > div:last-child > div:last-child { text-align: center !important; }
          .site-footer > div:nth-child(2) { display: flex; justify-content: center; }
        }
      `}</style>
    </>
  );
}
