'use client';

import { useEffect, useRef } from 'react';

const features = [
  {
    num: '01',
    title: "Mashinangizning to'liq tarixi bir joyda",
    body: "Har bir ta'mir, har bir moy almashtirish — hammasini ko'rishingiz mumkin. Mashina necha marta sotilsa ham, tarix yo'qolmaydi.",
    glyph: (
      <svg viewBox="0 0 360 120" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <line x1="20" y1="60" x2="340" y2="60"/>
        <line x1="20" y1="60" x2="20" y2="50"/><line x1="60" y1="60" x2="60" y2="48"/>
        <line x1="100" y1="60" x2="100" y2="50"/><line x1="140" y1="60" x2="140" y2="48"/>
        <line x1="180" y1="60" x2="180" y2="44"/><line x1="220" y1="60" x2="220" y2="48"/>
        <line x1="260" y1="60" x2="260" y2="50"/><line x1="300" y1="60" x2="300" y2="48"/>
        <line x1="340" y1="60" x2="340" y2="50"/>
        <text x="20" y="84" fontFamily="IBM Plex Mono,monospace" fontSize="11" fill="currentColor" stroke="none" letterSpacing="2">VIN · 17</text>
      </svg>
    ),
  },
  {
    num: '02',
    title: "Ishonchli ustani osongina toping",
    body: "Har bir usta haqiqiy mijozlar tomonidan baholangan. Yaqin atrofingizdan, o'z viloyatingizdan — eng ishonchli ustani bir zumda tanlaysiz.",
    glyph: (
      <svg viewBox="0 0 360 120" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="180" cy="60" r="22"/>
        <circle cx="100" cy="44" r="14"/><circle cx="260" cy="44" r="14"/>
        <circle cx="80" cy="84" r="10"/><circle cx="280" cy="84" r="10"/>
        <line x1="155" y1="56" x2="120" y2="48"/><line x1="205" y1="56" x2="240" y2="48"/>
        <line x1="160" y1="76" x2="92" y2="84"/><line x1="200" y1="76" x2="268" y2="84"/>
        <path d="M172 60 l5 5 l11 -12" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: "Mashinani sotsangiz, tarix yangi egaga o'tadi",
    body: "Xaridor mashinaning butun o'tmishini ko'radi — yashirin nuqson yo'q. Sotuvchi ham, xaridor ham ishonch bilan ish qiladi.",
    glyph: (
      <svg viewBox="0 0 360 120" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="20" y="34" width="120" height="52" rx="6"/>
        <rect x="220" y="34" width="120" height="52" rx="6"/>
        <line x1="40" y1="50" x2="120" y2="50" strokeOpacity="0.5"/>
        <line x1="40" y1="60" x2="100" y2="60" strokeOpacity="0.5"/>
        <line x1="40" y1="70" x2="110" y2="70" strokeOpacity="0.5"/>
        <line x1="240" y1="50" x2="320" y2="50" strokeOpacity="0.5"/>
        <line x1="240" y1="60" x2="300" y2="60" strokeOpacity="0.5"/>
        <line x1="240" y1="70" x2="310" y2="70" strokeOpacity="0.5"/>
        <path d="M155 60 L205 60" strokeWidth="2"/>
        <polyline points="195 50 205 60 195 70" strokeWidth="2"/>
      </svg>
    ),
  },
];

export default function Editorial() {
  const rowRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    rowRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="nega" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', paddingBlock: 'clamp(96px, 12vw, 160px)' }}>
      <div className="container">
        {/* Section head */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 2fr',
          gap: 48, alignItems: 'end', marginBottom: 80,
        }} className="section-head-ed">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span className="mono-label"><span className="dot" />Nima beradi</span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.16em', color: 'var(--ink-soft)', textTransform: 'uppercase' }}>§ 01 — Imkoniyatlar</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.4rem, 4.8vw, 4rem)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1 }}>
            Uchta sabab —{' '}
            <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 500 }}>yetarli.</span>
          </h2>
        </div>

        {/* Rows */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {features.map((f, i) => (
            <EdRow
              key={f.num}
              ref={(el) => { rowRefs.current[i] = el; }}
              {...f}
              delay={i * 120}
              isLast={i === features.length - 1}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .section-head-ed { grid-template-columns: 1fr !important; gap: 18px !important; margin-bottom: 56px !important; }
        }
        @media (max-width: 980px) {
          .ed-row-grid { grid-template-columns: 1fr !important; gap: 16px !important; padding-block: 40px !important; }
          .ed-glyph-wrap { justify-content: flex-start !important; height: 80px !important; }
        }
        @media (max-width: 640px) {
          .ed-glyph-wrap { display: none !important; }
          .ed-row-grid { gap: 12px !important; padding-block: 32px !important; }
          .ed-num { font-size: clamp(3.5rem, 16vw, 6rem) !important; }
        }
      `}</style>
    </section>
  );
}

import React from 'react';

const EdRow = React.forwardRef<HTMLElement, {
  num: string; title: string; body: string;
  glyph: React.ReactElement<React.SVGProps<SVGSVGElement>>; delay: number; isLast: boolean;
}>(({ num, title, body, glyph, delay, isLast }, ref) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <article
      ref={ref as React.Ref<HTMLElement>}
      className="reveal ed-row-grid"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '220px 1fr 360px',
        gap: 48, alignItems: 'start',
        paddingBlock: 56,
        borderTop: '1px solid var(--border)',
        borderBottom: isLast ? '1px solid var(--border)' : undefined,
        position: 'relative',
        background: hovered ? 'rgba(14,22,32,0.02)' : 'transparent',
        transition: 'background 0.35s ease',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="ed-num" style={{
        fontFamily: 'var(--f-display)', fontWeight: 600,
        fontSize: 'clamp(5rem, 10vw, 9rem)', lineHeight: 0.85,
        color: 'var(--accent)', letterSpacing: '-0.05em',
        transition: 'transform 0.5s cubic-bezier(.2,.7,.2,1)',
        transform: hovered ? 'translateX(8px)' : 'translateX(0)',
      }}>
        {num}
      </div>

      <div>
        <h3 style={{
          fontFamily: 'var(--f-display)', fontWeight: 500,
          fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)',
          letterSpacing: '-0.02em', lineHeight: 1.1,
          marginBottom: 14, maxWidth: '18ch',
        }}>
          {title}
        </h3>
        <p style={{ fontSize: 15, color: 'var(--ink-mute)', lineHeight: 1.6, maxWidth: '56ch' }}>
          {body}
        </p>
      </div>

      <div className="ed-glyph-wrap" style={{
        height: 120, display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
      }}>
        <svg style={{
          width: '100%', maxWidth: 360, height: 'auto', color: 'var(--ink)',
          opacity: hovered ? 1 : 0.55,
          transition: 'opacity 0.4s ease, transform 0.5s cubic-bezier(.2,.7,.2,1), color 0.4s ease',
          transform: hovered ? 'translateX(-6px)' : 'translateX(0)',
          ...(hovered ? { color: 'var(--accent)' } : {}),
        }} viewBox={glyph.props.viewBox as string} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {glyph.props.children}
        </svg>
      </div>
    </article>
  );
});
EdRow.displayName = 'EdRow';
