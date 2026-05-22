'use client';

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
          <img src="/logo-transparent.webp" alt="Moshn logo" className="footer-logo-img" style={{ display: 'block', flexShrink: 0, height: 38, width: 38, objectFit: 'contain' }} />
        </a>


        <div style={{
          fontFamily: 'var(--f-mono)', fontSize: 11,
          letterSpacing: '0.12em', color: 'var(--ink-mute)', textTransform: 'uppercase',
        }}>
          2026 Moshn · Powered by{' '}
          <a href="/Founders" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            Chopildi Team
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .footer-inner { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
        }
        [data-theme="dark"] .footer-logo-img {
          filter: invert(1) brightness(10);
        }
      `}</style>
    </footer>
  );
}
