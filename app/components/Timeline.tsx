'use client';

import { useEffect, useRef } from 'react';

const steps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
        <rect x="5" y="2" width="14" height="20" rx="3"/>
        <line x1="12" y1="7" x2="12" y2="13" strokeWidth="2.4"/>
        <circle cx="12" cy="16" r="1.2" fill="currentColor"/>
      </svg>
    ),
    num: 'Bosqich 01',
    title: "SOS tugmasini bosing",
    body: "Ilovani oching, SOS tugmasiga bosing — operator 60 soniya ichida siz bilan bog'lanadi.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        <polyline points="15 11 17 13 21 9" strokeWidth="1.8"/>
      </svg>
    ),
    num: 'Bosqich 02',
    title: "Operator muammoni aniqlab, yo'naltiradi",
    body: "Mashina belgilarini tahlil qilib, kerakli mutaxassisni — mexanik, elektrik yoki evakuator — topadi.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
        <rect x="2" y="7" width="20" height="13" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <polyline points="8 14 11 17 16 12" strokeWidth="2"/>
      </svg>
    ),
    num: 'Bosqich 03',
    title: "Mutaxassis keladi, to'lov avtomatik",
    body: "Usta yetib kelib ishni bajaradi. Platforma ulushi ustaning hamyonidan avtomatik yechiladi — siz hech narsa to'lamaysiz.",
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
      paddingBlock: 'var(--section-py)',
    }}>
      <div className="container">
        <div className="section-head section-head-tl">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span className="mono-label"><span className="dot" />Qanday ishlaydi</span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--ink-soft)', textTransform: 'uppercase' }}>§ 03 — Jarayon</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.6vw, 3.2rem)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            SOS dan ustaga —{' '}
            <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 500 }}>uch qadam.</span>
          </h2>
        </div>

        <div ref={tlRef} style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(16px, 2.5vw, 28px)' }} className="tl-grid">
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
        @media (max-width: 860px) {
          .section-head-tl { grid-template-columns: 1fr !important; gap: 12px !important; }
          .tl-grid { grid-template-columns: 1fr 1fr !important; gap: 28px 16px !important; }
          .tl-track { display: none !important; }
        }
        @media (max-width: 560px) {
          .tl-grid { gap: 20px 12px !important; }
          .tl-step-last { grid-column: 1 / -1 !important; max-width: 220px !important; }
          .tl-icon { width: 52px !important; height: 52px !important; margin-bottom: 14px !important; }
          .tl-icon svg { width: 22px !important; height: 22px !important; }
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
          width: 72, height: 72, borderRadius: 999,
          background: hovered ? 'var(--ink)' : 'var(--bg)',
          border: '2px solid var(--ink)',
          color: hovered ? 'var(--accent)' : 'var(--ink)',
          display: 'grid', placeItems: 'center',
          marginBottom: 20, position: 'relative', zIndex: 1,
          transition: 'all 0.4s ease',
          transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        }}>
          {icon}
        </div>
        <div className="tl-step-num" style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.18em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 7 }}>{num}</div>
        <h3 style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: 'clamp(1rem, 1.6vw, 1.5rem)', letterSpacing: '-0.02em', marginBottom: 8, lineHeight: 1.15 }}>{title}</h3>
        <p style={{ color: 'var(--ink-mute)', fontSize: 'clamp(12px, 1vw, 14px)', lineHeight: 1.6, maxWidth: '30ch' }}>{body}</p>
      </div>
    );
  }
);
StepItem.displayName = 'StepItem';
