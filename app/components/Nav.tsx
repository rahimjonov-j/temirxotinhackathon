'use client';

import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      inset: '0 0 auto 0',
      zIndex: 80,
      background: scrolled
        ? 'rgba(242, 236, 226, 0.97)'
        : 'rgba(242, 236, 226, 0.70)',
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
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/temir-xotin-light.svg"
            alt="Temir Xotin logo"
            className="nav-logo"
            style={{ display: 'block', flexShrink: 0, height: 44, width: 'auto' }}
          />
          <span className="nav-brand-text" style={{
            fontFamily: 'var(--f-display)',
            fontWeight: 500,
            fontSize: 17,
            color: 'var(--ink)',
            letterSpacing: '-0.01em',
          }}>Temir Xotin</span>
        </a>

        <NavCta />
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

function NavCta() {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#download"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="nav-cta"
      style={{
        background: hovered ? 'var(--accent)' : 'var(--ink)',
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
