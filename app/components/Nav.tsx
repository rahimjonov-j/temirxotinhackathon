'use client';

import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const bg = theme === 'dark'
    ? (scrolled ? 'rgba(14,22,32,0.97)' : 'rgba(14,22,32,0.75)')
    : (scrolled ? 'rgba(242,236,226,0.97)' : 'rgba(242,236,226,0.70)');

  return (
    <nav style={{
      position: 'fixed',
      inset: '0 0 auto 0',
      zIndex: 80,
      background: bg,
      backdropFilter: 'saturate(1.4) blur(18px)',
      WebkitBackdropFilter: 'saturate(1.4) blur(18px)',
      borderBottom: '1px solid var(--border)',
      transition: 'background 0.25s ease',
    }}>
      <div className="container nav-inner" style={{
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
      }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={theme === 'dark' ? '/logo-white.webp' : '/logo-transparent.webp'}
            alt="Moshn logo"
            className="nav-logo"
            style={{ flexShrink: 0, height: 40, width: 40, objectFit: 'contain' }}
          />
          <span className="nav-brand-text" style={{
            fontFamily: 'var(--f-display)',
            fontWeight: 500,
            fontSize: 17,
            color: 'var(--ink)',
            letterSpacing: '-0.01em',
          }}>Moshn</span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <ThemeToggle theme={theme} toggle={toggle} />
          <NavCta />
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) { .hide-mobile { display: none !important; } }
        @media (max-width: 480px) {
          .nav-brand-text { display: none !important; }
          .nav-logo { height: 36px !important; }
          .nav-inner { height: 60px !important; }
          .nav-cta { padding: 9px 16px !important; }
        }
      `}</style>
    </nav>
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
        borderRadius: 999,
        width: 40,
        height: 40,
        display: 'grid',
        placeItems: 'center',
        cursor: 'pointer',
        color: 'var(--ink)',
        transition: 'background 0.2s ease',
        flexShrink: 0,
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
      className="nav-cta"
      style={{
        background: hovered ? 'var(--accent)' : '#0E1620',
        color: '#fff',
        borderRadius: 999,
        padding: '11px 22px 11px 24px',
        fontFamily: 'var(--f-body)',
        fontWeight: 600,
        fontSize: 14,
        letterSpacing: '-0.005em',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        textDecoration: 'none',
        transition: 'background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
        transform: hovered ? 'translateY(-1px)' : 'translateY(0)',
        boxShadow: hovered ? '0 10px 24px -10px rgba(255, 82, 48, 0.5)' : 'none',
        whiteSpace: 'nowrap',
      }}
    >
      <span className="nav-cta-text">Yuklab olish</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.25s ease', transform: hovered ? 'translateX(3px)' : 'translateX(0)' }}>
        <line x1="5" y1="12" x2="19" y2="12"/>
        <polyline points="13 6 19 12 13 18"/>
      </svg>
    </a>
  );
}
