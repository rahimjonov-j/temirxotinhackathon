'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  {
    tag: 'Eng mashhur',
    title: 'Evakuator',
    body: "Mashina o'z kuchida yura olmasa — evakuator bir zumda yetib keladi.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <rect x="4" y="20" width="28" height="16" rx="3"/>
        <path d="M32 28 L44 22 L44 36 L32 36 Z"/>
        <circle cx="12" cy="36" r="5"/>
        <circle cx="38" cy="36" r="5"/>
        <line x1="4" y1="26" x2="32" y2="26"/>
        <path d="M8 20 V14 H20 V20" strokeOpacity="0.5"/>
      </svg>
    ),
  },
  {
    tag: 'Tez',
    title: "Mashina ot olmayapti",
    body: "Ertalab chiqsangiz start bermayapti yoki uzoq yotgan — mutaxassis keladi va ishga tushiradi.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <circle cx="24" cy="24" r="16"/>
        <path d="M24 14 L24 24 L32 28" strokeWidth="2"/>
        <path d="M18 8 L24 12 L30 8" strokeOpacity="0.4"/>
        <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    tag: '',
    title: "Qulfni ochish",
    body: "Mashinangiz qulflanib qolgan, kalit yo'q — ruxsatnomali mutaxassis ochib beradi.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <rect x="12" y="22" width="24" height="18" rx="4"/>
        <path d="M17 22 V16 a7 7 0 0 1 14 0"/>
        <circle cx="24" cy="31" r="3" fill="currentColor" stroke="none"/>
        <line x1="24" y1="34" x2="24" y2="37" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    tag: '',
    title: "Batareya almashtirish",
    body: "Akkumulyator o'lgan — yangi batareya bilan mutaxassis o'zi keladi.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <rect x="6" y="16" width="30" height="18" rx="4"/>
        <rect x="36" y="21" width="6" height="8" rx="2"/>
        <line x1="14" y1="22" x2="14" y2="28" strokeWidth="2"/>
        <line x1="11" y1="25" x2="17" y2="25" strokeWidth="2"/>
        <line x1="24" y1="25" x2="30" y2="25" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    tag: '',
    title: "Mexanik (yo'lda)",
    body: "Yo'lda minor nosozlik — kichik ta'mirlash uchun mexanik yetib keladi.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <path d="M30 8 l4 4 -16 16 -4 -4 Z"/>
        <path d="M34 12 l6 -2 -2 6 Z" fill="currentColor" stroke="none"/>
        <circle cx="16" cy="34" r="6"/>
        <path d="M20 30 l8 -8" strokeOpacity="0.4"/>
      </svg>
    ),
  },
  {
    tag: '',
    title: "Elektrik",
    body: "Elektr tizimi ishlamayapti — elektrik mutaxassis aniqlab tuzatadi.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <path d="M28 6 L18 26 H26 L20 42 L36 20 H28 Z" fill="rgba(255,82,48,0.12)" stroke="currentColor"/>
      </svg>
    ),
  },
];

function ServiceCard({ service, delay }: { service: typeof services[0]; delay: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="reveal svc-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--bg)' : 'var(--bg-2)',
        border: `1px solid ${hovered ? 'var(--ink)' : 'var(--border)'}`,
        borderRadius: 14,
        padding: 'clamp(20px,2.5vw,28px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        transition: 'background 0.3s ease, border-color 0.3s ease, transform 0.35s cubic-bezier(.2,.7,.2,1)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'default',
      }}
    >
      {/* Top row: icon + tag */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{
          width: 56, height: 56, borderRadius: 12,
          background: hovered ? 'var(--ink)' : 'rgba(14,22,32,0.06)',
          color: hovered ? 'var(--accent)' : 'var(--ink)',
          display: 'grid', placeItems: 'center',
          transition: 'all 0.35s ease',
          flexShrink: 0,
        }}>
          {service.icon}
        </div>
        {service.tag && (
          <span style={{
            fontFamily: 'var(--f-mono)', fontSize: 9,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--accent)', background: 'rgba(255,82,48,0.08)',
            border: '1px solid rgba(255,82,48,0.2)',
            borderRadius: 999, padding: '4px 10px',
          }}>{service.tag}</span>
        )}
      </div>

      {/* Text */}
      <div>
        <h3 style={{
          fontFamily: 'var(--f-display)', fontWeight: 600,
          fontSize: 'clamp(1rem,1.5vw,1.3rem)', letterSpacing: '-0.02em',
          lineHeight: 1.2, marginBottom: 8,
          color: hovered ? 'var(--ink)' : 'var(--ink)',
          transition: 'transform 0.35s cubic-bezier(.2,.7,.2,1)',
          transform: hovered ? 'translateX(3px)' : 'translateX(0)',
        }}>{service.title}</h3>
        <p style={{
          color: 'var(--ink-mute)', fontSize: 'clamp(12px,1vw,14px)',
          lineHeight: 1.6, maxWidth: '32ch',
        }}>{service.body}</p>
      </div>

      {/* Arrow */}
      <div style={{
        marginTop: 'auto',
        display: 'flex', alignItems: 'center', gap: 6,
        fontFamily: 'var(--f-mono)', fontSize: 9, letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: hovered ? 'var(--accent)' : 'var(--ink-soft)',
        transition: 'color 0.3s ease',
      }}>
        Buyurtma berish
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" width="12" height="12"
          style={{ transform: hovered ? 'translateX(3px)' : 'translateX(0)', transition: 'transform 0.3s ease' }}>
          <line x1="2" y1="8" x2="14" y2="8"/><polyline points="9 3 14 8 9 13"/>
        </svg>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="xizmatlar"
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        paddingBlock: 'var(--section-py)',
      }}
    >
      <div className="container">
        {/* Head */}
        <div className="section-head section-head-svc">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span className="mono-label"><span className="dot" />Xizmatlar</span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--ink-soft)', textTransform: 'uppercase' }}>§ 02 — Katalog</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,3.2rem)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Qaysi muammo bo&apos;lsa —{' '}
            <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 500 }}>yechim bor.</span>
          </h2>
        </div>

        {/* Sub */}
        <p style={{
          color: 'var(--ink-mute)', fontSize: 'clamp(13px,1.1vw,15px)',
          lineHeight: 1.6, maxWidth: '52ch',
          marginBottom: 'clamp(32px,4vw,52px)',
        }}>
          Evakuatordan tortib, qulfni ochishgacha — barcha xizmatlar ilovaning ichida. Bir joydan buyurtma bering, mutaxassis o&apos;zi yetib keladi.
        </p>

        {/* Grid */}
        <div className="svc-grid">
          {services.map((svc, i) => (
            <ServiceCard key={svc.title} service={svc} delay={i * 80} />
          ))}
        </div>
      </div>

      <style>{`
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(12px, 1.5vw, 20px);
        }
        @media (max-width: 860px) {
          .section-head-svc { grid-template-columns: 1fr !important; gap: 12px !important; }
          .svc-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .svc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
