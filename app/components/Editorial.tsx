'use client';

import { useEffect, useRef } from 'react';

const features = [
  {
    num: '01',
    title: "Yo'lda qolsangiz — bir tugma yetarli",
    body: "SOS tugmasini bosing — operator 60 soniya ichida aloqaga chiqadi. Mashina belgilarini tahlil qilib, eng mos mutaxassisni — mexanik, elektrik yoki evakuatorni — yo'lga soladi.",
    glyph: (
      <svg viewBox="0 0 360 120" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="140" y="20" width="80" height="80" rx="16"/>
        <circle cx="180" cy="95" r="8" strokeWidth="1.2"/>
        <line x1="180" y1="44" x2="180" y2="72" strokeWidth="3"/>
        <circle cx="180" cy="82" r="3" fill="currentColor" stroke="none"/>
        <line x1="60" y1="60" x2="110" y2="60" strokeOpacity="0.4"/>
        <line x1="250" y1="60" x2="300" y2="60" strokeOpacity="0.4"/>
        <polyline points="95 48 110 60 95 72" strokeOpacity="0.4"/>
        <text x="20" y="84" fontFamily="IBM Plex Mono,monospace" fontSize="11" fill="currentColor" stroke="none" letterSpacing="2">SOS</text>
      </svg>
    ),
  },
  {
    num: '02',
    title: "Uyda ham, yo'lda ham — biz yetib boramiz",
    body: "Mashina ot olmayapti, qulflanib qolgan yoki uzoq yotgan — bular ham bizda. Evakuator, batareya almashtirish, ishga tushirish — hammasini bir joydan buyurtma bering.",
    glyph: (
      <svg viewBox="0 0 360 120" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="20" y="50" width="160" height="50" rx="6"/>
        <path d="M180 75 L220 55 L320 55 L340 75 L340 100 L180 100 Z"/>
        <circle cx="220" cy="100" r="14"/>
        <circle cx="300" cy="100" r="14"/>
        <circle cx="60" cy="100" r="14"/>
        <line x1="20" y1="70" x2="180" y2="70" strokeOpacity="0.4"/>
        <polyline points="130 40 180 75" strokeOpacity="0.35"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: "To'lov avtomatik — hech qanday naqd pul kerak emas",
    body: "Usta buyurtmani qabul qilgach, hamyonidan platforma ulushi avtomatik yechiladi. Qolgan xizmat narxini usta bilan kelishib olasiz — siz faqat raqamingizni tasdiqlab qo'yasiz.",
    glyph: (
      <svg viewBox="0 0 360 120" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="40" y="30" width="280" height="60" rx="10"/>
        <line x1="40" y1="52" x2="320" y2="52"/>
        <rect x="58" y="62" width="40" height="14" rx="3" strokeOpacity="0.5"/>
        <rect x="110" y="62" width="24" height="14" rx="3" strokeOpacity="0.5"/>
        <path d="M240 62 l10 10 l20 -20" strokeWidth="2" stroke="currentColor"/>
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
    <section id="nega" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', paddingBlock: 'var(--section-py)' }}>
      <div className="container">
        {/* Section head */}
        <div className="section-head section-head-ed">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span className="mono-label"><span className="dot" />Nima beradi</span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--ink-soft)', textTransform: 'uppercase' }}>§ 01 — Imkoniyatlar</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.6vw, 3.2rem)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Uchta yo&apos;nalish —{' '}
            <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 500 }}>bir ilova.</span>
          </h2>
        </div>

        {/* Rows */}
        <div className="ed-rows-wrap" style={{ display: 'flex', flexDirection: 'column' }}>
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
        @media (max-width: 860px) {
          .section-head-ed { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
        @media (max-width: 860px) {
          .ed-row-grid { grid-template-columns: 100px 1fr !important; gap: 16px !important; }
          .ed-glyph-wrap { display: none !important; }
        }
        @media (max-width: 560px) {
          .ed-rows-wrap { display: grid !important; grid-template-columns: 1fr 1fr !important; }
          .ed-row-grid { grid-template-columns: 1fr !important; padding: 18px 14px !important; gap: 7px !important; border-right: 1px solid var(--border) !important; border-bottom: none !important; }
          .ed-row-grid:nth-child(even) { border-right: none !important; }
          .ed-row-grid:nth-last-child(-n+2) { border-bottom: 1px solid var(--border) !important; }
          .ed-num { font-size: clamp(2.4rem, 9vw, 3.6rem) !important; }
          .ed-row-grid h3 { font-size: clamp(0.9rem, 3.5vw, 1.1rem) !important; margin-bottom: 5px !important; }
          .ed-row-grid p { font-size: 11px !important; }
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
        gridTemplateColumns: '140px 1fr 260px',
        gap: 'clamp(20px, 3vw, 36px)',
        alignItems: 'start',
        paddingBlock: 'clamp(28px, 3.5vw, 44px)',
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
        fontSize: 'clamp(3.2rem, 6vw, 6rem)', lineHeight: 0.85,
        color: 'var(--accent)', letterSpacing: '-0.05em',
        transition: 'transform 0.5s cubic-bezier(.2,.7,.2,1)',
        transform: hovered ? 'translateX(6px)' : 'translateX(0)',
      }}>
        {num}
      </div>

      <div>
        <h3 style={{
          fontFamily: 'var(--f-display)', fontWeight: 500,
          fontSize: 'clamp(1.1rem, 1.7vw, 1.6rem)',
          letterSpacing: '-0.02em', lineHeight: 1.15,
          marginBottom: 10, maxWidth: '20ch',
        }}>
          {title}
        </h3>
        <p style={{ fontSize: 'clamp(13px, 1vw, 14px)', color: 'var(--ink-mute)', lineHeight: 1.6, maxWidth: '52ch' }}>
          {body}
        </p>
      </div>

      <div className="ed-glyph-wrap" style={{
        height: 90, display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
      }}>
        <svg style={{
          width: '100%', maxWidth: 260, height: 'auto', color: 'var(--ink)',
          opacity: hovered ? 1 : 0.5,
          transition: 'opacity 0.4s ease, transform 0.5s cubic-bezier(.2,.7,.2,1), color 0.4s ease',
          transform: hovered ? 'translateX(-4px)' : 'translateX(0)',
          ...(hovered ? { color: 'var(--accent)' } : {}),
        }} viewBox={glyph.props.viewBox as string} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {glyph.props.children}
        </svg>
      </div>
    </article>
  );
});
EdRow.displayName = 'EdRow';
