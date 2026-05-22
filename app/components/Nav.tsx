'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from './ThemeProvider';

const NAV_LINKS = [
  { label: 'SOS', href: '#sos' },
  { label: 'Xizmatlar', href: '#xizmatlar' },
  { label: "To'lov", href: '#tolov' },
  { label: 'Jarayon', href: '#qanday' },
  { label: 'Narxlar', href: '#narxlar' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  const bg = theme === 'dark'
    ? (scrolled ? 'rgba(14,22,32,0.97)' : 'rgba(14,22,32,0.75)')
    : (scrolled ? 'rgba(242,236,226,0.97)' : 'rgba(242,236,226,0.70)');

  return (
    <>
      <nav ref={navRef} style={{
        position: 'fixed', inset: '0 0 auto 0', zIndex: 80,
        background: bg,
        backdropFilter: 'saturate(1.4) blur(18px)',
        WebkitBackdropFilter: 'saturate(1.4) blur(18px)',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.25s ease',
      }}>
        <div className="container nav-inner">
          {/* Logo */}
          <a href="#top" className="nav-logo-link">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={theme === 'dark' ? '/logo-white.webp' : '/logo-transparent.webp'}
              alt="Moshn"
              style={{ height: 38, width: 38, objectFit: 'contain', display: 'block' }}
            />
          </a>

          {/* Desktop nav links */}
          <div className="nav-links">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
            ))}
          </div>

          {/* Desktop right */}
          <div className="nav-right">
            <ThemeToggle theme={theme} toggle={toggle} />
            <NavCta />
          </div>

          {/* Mobile: burger */}
          <button
            className="nav-burger"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menyu"
            aria-expanded={menuOpen}
          >
            {menuOpen
              ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
            }
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`nav-drawer${menuOpen ? ' open' : ''}`}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="nav-drawer-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/>
                </svg>
              </a>
            ))}
            <div className="nav-drawer-theme">
              <span>{theme === 'dark' ? "Yorug' rejim" : "Qorong'u rejim"}</span>
              <ThemeToggle theme={theme} toggle={toggle} />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile fixed bottom CTA */}
      <div className="mob-cta">
        <a href="#download" className="mob-cta-btn">
          Ilovani yuklab olish
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M12 5v10M7 14l5 5 5-5"/>
          </svg>
        </a>
      </div>

      <style>{`
        .nav-inner {
          height: 72px; display: flex; align-items: center;
          justify-content: space-between; gap: 16px;
        }
        .nav-logo-link { display: flex; align-items: center; text-decoration: none; flex-shrink: 0; }

        /* Desktop nav links */
        .nav-links { display: flex; align-items: center; gap: 2px; flex: 1; justify-content: center; }
        .nav-link {
          font-family: var(--f-body); font-size: 14px; font-weight: 500;
          color: var(--ink-mute); padding: 8px 14px; border-radius: 8px;
          text-decoration: none; letter-spacing: -0.005em;
          transition: color 0.18s ease, background 0.18s ease;
        }
        .nav-link:hover { color: var(--ink); background: var(--bg-2); }

        /* Desktop right */
        .nav-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }

        /* Burger hidden on desktop */
        .nav-burger {
          display: none; background: transparent;
          border: 1px solid var(--border-2); border-radius: 10px;
          width: 40px; height: 40px; place-items: center;
          cursor: pointer; color: var(--ink); flex-shrink: 0;
        }

        /* Drawer */
        .nav-drawer {
          display: none; overflow: hidden;
          border-top: 1px solid var(--border);
          max-height: 0; transition: max-height 0.32s cubic-bezier(0.77,0,0.18,1);
        }
        .nav-drawer.open { display: block; max-height: 400px; }
        .nav-drawer-link {
          font-family: var(--f-body); font-size: 15px; font-weight: 500;
          color: var(--ink); padding: 14px 0;
          border-bottom: 1px solid var(--border);
          text-decoration: none; display: flex; align-items: center; justify-content: space-between;
        }
        .nav-drawer-theme {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 0;
          font-family: var(--f-body); font-size: 15px; font-weight: 500; color: var(--ink);
        }

        /* Mobile bottom CTA — hidden on desktop */
        .mob-cta { display: none; }
        .mob-cta-btn {
          display: flex; align-items: center; justify-content: center; gap: 10px;
          width: 100%; background: var(--accent); color: #fff;
          border-radius: 14px; padding: 15px 24px;
          font-family: var(--f-body); font-weight: 600; font-size: 15px;
          letter-spacing: -0.01em; text-decoration: none;
          transition: opacity 0.2s ease;
        }
        .mob-cta-btn:active { opacity: 0.85; }

        @media (max-width: 768px) {
          .nav-inner { height: 60px !important; }
          .nav-links  { display: none !important; }
          .nav-right  { display: none !important; }
          .nav-burger { display: grid !important; }
          .mob-cta {
            display: block; position: fixed; bottom: 0; left: 0; right: 0;
            z-index: 79;
          }
          .mob-cta-btn {
            border-radius: 0 !important;
            padding: 18px 24px !important;
            font-size: 16px !important;
          }
          body { padding-bottom: 60px; }
        }
      `}</style>
    </>
  );
}

function ThemeToggle({ theme, toggle }: { theme: 'light' | 'dark'; toggle: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={toggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={theme === 'light' ? "Qorong'u rejim" : "Yorug' rejim"}
      style={{
        background: hovered ? 'var(--accent-tint)' : 'transparent',
        border: '1px solid var(--border-2)',
        borderRadius: 999, width: 40, height: 40,
        display: 'grid', placeItems: 'center',
        cursor: 'pointer', color: 'var(--ink)',
        transition: 'background 0.2s ease', flexShrink: 0,
      }}
    >
      {theme === 'light' ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      )}
    </button>
  );
}

function NavCta() {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#download"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--accent)' : '#0E1620',
        color: '#fff', borderRadius: 999,
        padding: '11px 22px 11px 24px',
        fontFamily: 'var(--f-body)', fontWeight: 600, fontSize: 14,
        letterSpacing: '-0.005em',
        display: 'inline-flex', alignItems: 'center', gap: 10,
        textDecoration: 'none', whiteSpace: 'nowrap',
        transition: 'background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
        transform: hovered ? 'translateY(-1px)' : 'translateY(0)',
        boxShadow: hovered ? '0 10px 24px -10px rgba(255,82,48,0.5)' : 'none',
      }}
    >
      Yuklab olish
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
        style={{ transition: 'transform 0.25s ease', transform: hovered ? 'translateX(3px)' : 'translateX(0)' }}>
        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/>
      </svg>
    </a>
  );
}
