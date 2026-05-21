'use client';

import { useEffect, useRef } from 'react';

const steps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
        <path d="M3 9h2l1.5-2h11L19 9h2v10H3z"/>
        <circle cx="12" cy="14" r="3.5"/>
        <circle cx="12" cy="14" r="1.2" fill="currentColor"/>
      </svg>
    ),
    num: 'Bosqich 01',
    title: "Texpasportni telefonga ko'rsating",
    body: "Kameraga tutasiz — mashina ma'lumotlari avtomatik aniqlanadi va hisobingizga qo'shiladi.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
        <path d="M5 5h11l3 3v11H5z"/>
        <polyline points="9 13 11 15 16 10"/>
        <line x1="5" y1="10" x2="14" y2="10" strokeOpacity="0.4"/>
      </svg>
    ),
    num: 'Bosqich 02',
    title: 'Usta yozadi, siz ko\'rib tasdiqlaysiz',
    body: "Usta nima qilganini yozadi. Siz ko'rib tasdiqlaysiz — bu yozuv hech qachon o'chib ketmaydi.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
        <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z"/>
        <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" strokeOpacity="0.5"/>
        <circle cx="12" cy="12" r="1.2" fill="currentColor"/>
        <line x1="12" y1="2" x2="12" y2="5" strokeOpacity="0.4"/>
        <line x1="12" y1="19" x2="12" y2="22" strokeOpacity="0.4"/>
      </svg>
    ),
    num: 'Bosqich 03',
    title: 'Tarix hech qachon yo\'qolmaydi',
    body: "Mashinani sotsangiz ham tarix yangi egaga o'tadi. Xaridor hamma narsani o'z ko'zi bilan ko'radi.",
  },
];

export default function Timeline() {
  const tlRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;

    const tlObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { tl.classList.add('timeline-active'); tlObserver.unobserve(tl); }
        });
      },
      { threshold: 0.3 }
    );
    tlObserver.observe(tl);

    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('in'); stepObserver.unobserve(e.target); }
        });
      },
      { threshold: 0.15 }
    );
    stepRefs.current.forEach((el, i) => {
      if (el) {
        el.style.transitionDelay = `${i * 150}ms`;
        stepObserver.observe(el);
      }
    });

    return () => { tlObserver.disconnect(); stepObserver.disconnect(); };
  }, []);

  return (
    <section id="qanday" style={{
      background: 'var(--bg)', borderTop: '1px solid var(--border)',
      paddingBlock: 'clamp(96px, 12vw, 160px)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 2fr',
          gap: 48, alignItems: 'end', marginBottom: 80,
        }} className="section-head-tl">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span className="mono-label"><span className="dot" />Qanday ishlaydi</span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.16em', color: 'var(--ink-soft)', textTransform: 'uppercase' }}>§ 03 — Jarayon</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.4rem, 4.8vw, 4rem)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1 }}>
            Uch bosqich,{' '}
            <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 500 }}>bir daqiqada.</span>
          </h2>
        </div>

        <div ref={tlRef} style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="tl-grid">
          {/* Progress track */}
          <div style={{
            position: 'absolute', top: 44, left: 56, right: 56,
            height: 2, background: 'var(--border-2)', borderRadius: 2, overflow: 'hidden',
          }} className="tl-track">
            <div className="timeline-fill" style={{ position: 'absolute', inset: 0, background: 'var(--accent)' }} />
          </div>

          {steps.map((step, i) => (
            <StepItem
              key={i}
              ref={(el) => { stepRefs.current[i] = el; }}
              isLast={i === steps.length - 1}
              {...step}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .section-head-tl { grid-template-columns: 1fr !important; gap: 18px !important; margin-bottom: 48px !important; }
          .tl-grid { grid-template-columns: 1fr 1fr !important; gap: 36px 20px !important; }
          .tl-track { display: none !important; }
        }
        @media (max-width: 640px) {
          .tl-grid { gap: 28px 14px !important; }
          .tl-step-last { grid-column: 1 / -1 !important; max-width: 240px !important; }
          .tl-icon { width: 60px !important; height: 60px !important; }
          .tl-icon svg { width: 26px !important; height: 26px !important; }
          .tl-step h3 { font-size: clamp(1rem, 4vw, 1.15rem) !important; }
          .tl-step p { font-size: 12px !important; line-height: 1.5 !important; }
          .tl-step-num { font-size: 10px !important; }
        }
      `}</style>
    </section>
  );
}

import React from 'react';

const StepItem = React.forwardRef<HTMLDivElement, typeof steps[0] & { isLast?: boolean }>(
  ({ icon, num, title, body, isLast }, ref) => {
    const [hovered, setHovered] = React.useState(false);

    return (
      <div
        ref={ref}
        className={`reveal tl-step${isLast ? ' tl-step-last' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ position: 'relative', paddingRight: 24 }}
      >
        <div className="tl-icon" style={{
          width: 88, height: 88, borderRadius: 999,
          background: hovered ? 'var(--ink)' : 'var(--bg)',
          border: '2px solid var(--ink)',
          color: hovered ? 'var(--accent)' : 'var(--ink)',
          display: 'grid', placeItems: 'center',
          marginBottom: 28, position: 'relative', zIndex: 1,
          transition: 'all 0.4s ease',
          transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        }}>
          {icon}
        </div>
        <div className="tl-step-num" style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.18em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 8 }}>{num}</div>
        <h3 style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: 'clamp(1.5rem, 2.2vw, 1.9rem)', letterSpacing: '-0.02em', marginBottom: 10, lineHeight: 1.1 }}>{title}</h3>
        <p style={{ color: 'var(--ink-mute)', fontSize: 15, lineHeight: 1.55, maxWidth: '30ch' }}>{body}</p>
      </div>
    );
  }
);
StepItem.displayName = 'StepItem';
