'use client';
import { useState } from 'react';

function StoreBtn({ primary, label, sub, icon }: { primary?: boolean; label: string; sub: string; icon: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="#download"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`${sub} orqali yuklab olish`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        padding: '14px 22px 14px 18px',
        border: primary
          ? `1px solid ${hovered ? 'var(--accent)' : 'var(--ink)'}`
          : `1px solid ${hovered ? 'var(--ink)' : 'var(--border-2)'}`,
        borderRadius: 14,
        background: primary
          ? hovered ? 'var(--accent)' : 'var(--ink)'
          : hovered ? 'rgba(14,22,32,0.04)' : 'var(--bg)',
        color: primary ? 'var(--bg)' : 'var(--ink)',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered
          ? primary
            ? '0 14px 32px -16px rgba(255,82,48,0.6)'
            : '0 14px 32px -16px rgba(14,22,32,0.4)'
          : 'none',
      }}
    >
      <span style={{ width: 24, height: 24, flexShrink: 0 }}>{icon}</span>
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, textAlign: 'left' }}>
        <span style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.65 }}>{sub}</span>
        <span style={{ fontFamily: 'var(--f-display)', fontWeight: 500, fontSize: 15, letterSpacing: '-0.01em', marginTop: 3 }}>{label}</span>
      </span>
    </a>
  );
}

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M17.05 12.04c-.03-2.6 2.13-3.85 2.22-3.91-1.21-1.77-3.1-2.01-3.77-2.04-1.6-.16-3.13.94-3.94.94-.83 0-2.07-.92-3.41-.89-1.75.03-3.37 1.02-4.27 2.59-1.83 3.17-.47 7.85 1.31 10.41.87 1.26 1.91 2.66 3.26 2.61 1.31-.05 1.8-.84 3.39-.84 1.57 0 2.03.84 3.41.81 1.41-.02 2.3-1.27 3.16-2.54 1.01-1.45 1.42-2.86 1.44-2.93-.03-.01-2.76-1.06-2.8-4.21zM14.6 4.6c.72-.87 1.21-2.08 1.07-3.29-1.04.04-2.3.69-3.04 1.56-.67.77-1.25 2-1.09 3.17 1.16.09 2.34-.59 3.06-1.44z"/>
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M3.6 1.9c-.4.4-.6 1-.6 1.7v16.8c0 .7.2 1.3.6 1.7l10.2-10.2L3.6 1.9z" fill="currentColor"/>
    <path d="M17 12l3.7-2.8c1-.7 1-2.4 0-3.2L15.4 4 12 8l5 4z" fill="currentColor" opacity="0.6"/>
    <path d="M3.6 22.1c.4.4 1 .5 1.6.1L17 14l-5-4L3.6 22.1z" fill="currentColor" opacity="0.8"/>
    <path d="M3.6 1.9L12 10l5-4L5.2 1.6c-.6-.4-1.2-.3-1.6.3z" fill="currentColor" opacity="0.4"/>
  </svg>
);

export default function StoreButtons({ dark }: { dark?: boolean }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, ...(dark ? { '--bg': 'transparent' } as React.CSSProperties : {}) }}>
      {dark ? <DarkStoreBtn primary label="Yuklab olish" sub="App Store" icon={<AppleIcon />} /> : <StoreBtn primary label="Yuklab olish" sub="App Store" icon={<AppleIcon />} />}
      {dark ? <DarkStoreBtn label="Yuklab olish" sub="Google Play" icon={<PlayIcon />} /> : <StoreBtn label="Yuklab olish" sub="Google Play" icon={<PlayIcon />} />}
    </div>
  );
}

function DarkStoreBtn({ primary, label, sub, icon }: { primary?: boolean; label: string; sub: string; icon: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#download"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`${sub} orqali yuklab olish`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        padding: '14px 22px 14px 18px',
        border: primary
          ? `1px solid ${hovered ? 'var(--accent-deep)' : 'var(--accent)'}`
          : `1px solid ${hovered ? '#fff' : 'rgba(255,255,255,0.18)'}`,
        borderRadius: 14,
        background: primary
          ? hovered ? 'var(--accent-deep)' : 'var(--accent)'
          : hovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(8px)',
        color: '#fff',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <span style={{ width: 24, height: 24, flexShrink: 0 }}>{icon}</span>
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, textAlign: 'left' }}>
        <span style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.65 }}>{sub}</span>
        <span style={{ fontFamily: 'var(--f-display)', fontWeight: 500, fontSize: 15, letterSpacing: '-0.01em', marginTop: 3 }}>{label}</span>
      </span>
    </a>
  );
}
