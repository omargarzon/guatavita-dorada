import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const GOLD = '#c9a227';
const WHITE = '#fff';
const BLACK = '#000';

const NAV_LINKS = [
  { label: 'Guatavita Vieja', path: '/guatavita-vieja' },
  { label: 'El Traslado',     path: '/el-traslado' },
  { label: 'Atractivos',      path: '/atractivos' },
  { label: 'Quienes Somos',   path: '/quienes-somos' },
  { label: 'Entrevistas',     path: '/entrevistas' },
];

const SOCIAL = [
  { label: 'Instagram', url: 'https://www.instagram.com/guatavita_dorada' },
  { label: 'Facebook',  url: 'https://www.facebook.com/share/1RfxTQgAAV/' },
  { label: 'TikTok',    url: 'https://www.tiktok.com/@guatavita.dorada' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const linkStyle = (path) => ({
    color: pathname === path ? GOLD : WHITE,
    fontSize: '0.82rem',
    letterSpacing: '0.04em',
    transition: 'color 0.2s',
    whiteSpace: 'nowrap',
  });

  return (
    <>
      <nav style={{
        background: BLACK,
        position: 'sticky',
        top: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        height: 70,
        borderBottom: '1px solid #222',
      }}>
        {/* Izquierda — links de navegación (desktop) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
             className="nav-left-links">
          {NAV_LINKS.map(l => (
            <Link key={l.path} to={l.path} style={linkStyle(l.path)}
              onMouseEnter={e => e.target.style.color = GOLD}
              onMouseLeave={e => e.target.style.color = pathname === l.path ? GOLD : WHITE}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Centro — logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <img src="/imagenes/logo.png" alt="Guatavita Dorada"
            style={{ width: 46, height: 46, borderRadius: '50%', objectFit: 'cover' }} />
          <span style={{
            color: WHITE,
            fontFamily: "'Playfair Display', serif",
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}>
            Guatavita Dorada
          </span>
        </Link>

        {/* Derecha — redes sociales (desktop) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
             className="nav-right-links">
          {SOCIAL.map(s => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
              style={{ color: WHITE, fontWeight: 700, textDecoration: 'underline', fontSize: '0.82rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = GOLD}
              onMouseLeave={e => e.target.style.color = WHITE}>
              {s.label}
            </a>
          ))}
        </div>

        {/* Hamburger mobile */}
        <button onClick={() => setOpen(!open)}
          style={{ color: WHITE, display: 'none' }}
          className="hamburger-btn">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'rgba(0,0,0,0.97)',
          borderBottom: '1px solid #222',
          padding: '1rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          position: 'sticky',
          top: 70,
          zIndex: 199,
        }}>
          {NAV_LINKS.map(l => (
            <Link key={l.path} to={l.path}
              onClick={() => setOpen(false)}
              style={{ color: pathname === l.path ? GOLD : WHITE, fontSize: 16 }}>
              {l.label}
            </Link>
          ))}
          <div style={{ borderTop: '1px solid #333', paddingTop: 12, display: 'flex', gap: 20 }}>
            {SOCIAL.map(s => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                style={{ color: WHITE, fontSize: 14, textDecoration: 'underline' }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 900px) {
          .nav-left-links { display: none !important; }
          .nav-right-links { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
