'use client';
import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--border)',
      padding: '28px 0',
    }}>
      <div className="container footer-inner" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 18, flexWrap: 'wrap',
      }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/temir-xotin-light.svg" alt="Temir Xotin logo" style={{ display: 'block', flexShrink: 0, height: 38, width: 'auto' }} />
          <span style={{ fontFamily: 'var(--f-display)', fontWeight: 500, fontSize: 17, color: 'var(--ink)', letterSpacing: '-0.01em' }}>Temir Xotin</span>
        </a>

        <div style={{ display: 'flex', gap: 8 }}>
          <SocialLink href="#" label="Telegram" icon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.94 4.46c-.27-.23-.7-.27-1.06-.12L2.84 11.78c-.45.18-.74.6-.73 1.05.01.46.32.86.78 1.01l4.5 1.47 2.05 5.96c.08.23.27.4.51.45.05.01.1.02.15.02.19 0 .37-.08.5-.22l2.78-2.95 4.74 3.48c.16.12.36.18.55.18.09 0 .19-.01.28-.04.27-.09.48-.31.55-.59l3.62-15.07c.09-.36-.05-.74-.34-.99z"/>
            </svg>
          } />
          <SocialLink href="#" label="Instagram" icon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/>
            </svg>
          } />
        </div>

        <div style={{
          fontFamily: 'var(--f-mono)', fontSize: 11,
          letterSpacing: '0.12em', color: 'var(--ink-mute)', textTransform: 'uppercase',
        }}>
          © 2026 Temir Xotin · Toshkent
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .footer-inner { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
        }
      `}</style>
    </footer>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      style={{
        width: 36, height: 36,
        border: '1px solid var(--border-2)',
        borderRadius: 10,
        display: 'grid', placeItems: 'center',
        color: 'var(--ink)',
        textDecoration: 'none',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.background = 'var(--ink)';
        el.style.color = 'var(--accent)';
        el.style.borderColor = 'var(--ink)';
        el.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.background = '';
        el.style.color = 'var(--ink)';
        el.style.borderColor = 'var(--border-2)';
        el.style.transform = '';
      }}
    >
      {icon}
    </a>
  );
}
