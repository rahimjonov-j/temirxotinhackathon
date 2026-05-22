'use client';

import { useEffect, useRef } from 'react';

const points = [
  {
    num: '01',
    title: "Hamyon bir marta to'ldiriladi",
    body: "Akkaunt ochilganda hamyon ham ochiladi. Minimal mablag' bilan ishlash mumkin — lekin balans nolga tushsa, buyurtma kelmaydi.",
  },
  {
    num: '02',
    title: "Usta buyurtmani qabul qilganda — komissiya avtomatik",
    body: "Platforma ulushi ustaning hamyonidan shu ondayoq yechiladi. Siz narxni bilmasangiz ham, tizim o'zi boshqaradi.",
  },
  {
    num: '03',
    title: "Qolgan narxni usta bilan kelishasiz",
    body: "Xizmat narxining asosiy qismi — usta bilan to'g'ridan-to'g'ri. Raqamni app'da tasdiqlashingiz kifoya.",
  },
];

export default function PaymentSection() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); }
        });
      },
      { threshold: 0.1 }
    );
    itemRefs.current.forEach((el, i) => {
      if (el) { el.style.transitionDelay = `${i * 120}ms`; observer.observe(el); }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="tolov"
      style={{
        background: '#0E1620',
        color: '#F2ECE2',
        overflow: 'hidden',
        position: 'relative',
        paddingBlock: 'var(--section-py)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Grid bg */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.025) 1px,transparent 1px)',
        backgroundSize: '72px 72px', pointerEvents: 'none',
        maskImage: 'radial-gradient(ellipse at 70% 50%, black 25%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 70% 50%, black 25%, transparent 75%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Head */}
        <div className="section-head section-head-pay">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{
              fontFamily: 'var(--f-mono)', fontWeight: 500, fontSize: 11,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.55)',
              display: 'flex', alignItems: 'center',
            }}>
              <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', marginRight: 10 }} />
              To&apos;lov tizimi
            </span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>§ 04 — Hamyon</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,3.2rem)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#fff' }}>
            Avtomatik, shaffof —{' '}
            <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 500 }}>xavfsiz.</span>
          </h2>
        </div>

        {/* Body */}
        <div className="pay-body">
          {/* Left: SVG wallet visual */}
          <div className="pay-visual">
            <svg ref={svgRef} viewBox="0 0 420 400" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', maxWidth: 420, display: 'block', marginInline: 'auto' }}>

              {/* Card background */}
              <rect x="30" y="60" width="340" height="200" rx="18" fill="#1B2636" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2"/>
              {/* Card shine */}
              <rect x="30" y="60" width="340" height="80" rx="18" fill="rgba(255,255,255,0.03)"/>
              <rect x="30" y="120" width="340" height="1" fill="rgba(255,255,255,0.06)"/>

              {/* Chip */}
              <rect x="56" y="88" width="44" height="32" rx="5" fill="rgba(255,82,48,0.12)" stroke="rgba(255,82,48,0.3)" strokeWidth="1"/>
              <line x1="56" y1="104" x2="100" y2="104" stroke="rgba(255,82,48,0.2)" strokeWidth="0.8"/>
              <line x1="78" y1="88" x2="78" y2="120" stroke="rgba(255,82,48,0.2)" strokeWidth="0.8"/>

              {/* Balance label */}
              <text x="56" y="152" fontFamily="IBM Plex Mono,monospace" fontSize="10" fill="rgba(255,255,255,0.4)" letterSpacing="2">BALANS</text>
              <text x="56" y="178" fontFamily="var(--f-display,sans-serif)" fontSize="28" fontWeight="600" fill="#fff" letterSpacing="-1">245 000</text>
              <text x="206" y="178" fontFamily="IBM Plex Mono,monospace" fontSize="13" fill="rgba(255,255,255,0.5)"> so'm</text>

              {/* Card number dots */}
              {[56,96,136,176].map((x, i) => (
                <g key={x}>
                  {i < 3
                    ? [0,1,2,3].map((j) => <circle key={j} cx={x + j*8} cy={220} r="2.5" fill="rgba(255,255,255,0.3)"/>)
                    : <text x={x} y="225" fontFamily="IBM Plex Mono,monospace" fontSize="12" fill="rgba(255,255,255,0.6)">7301</text>
                  }
                </g>
              ))}


              {/* Transaction row */}
              <rect x="30" y="274" width="360" height="1" fill="rgba(255,255,255,0.08)"/>
              <rect x="30" y="275" width="360" height="50" fill="rgba(255,255,255,0.02)"/>
              <text x="46" y="306" fontFamily="IBM Plex Mono,monospace" fontSize="11" fill="rgba(255,255,255,0.45)">Mexanik · Buyurtma #1042</text>
              <text x="374" y="306" fontFamily="IBM Plex Mono,monospace" fontSize="11" fontWeight="600" fill="#FF5230" textAnchor="end">{'−15 000 so\'m'}</text>

              <rect x="30" y="325" width="360" height="1" fill="rgba(255,255,255,0.06)"/>
              <rect x="30" y="326" width="360" height="50" fill="rgba(255,255,255,0.01)"/>
              <text x="46" y="357" fontFamily="IBM Plex Mono,monospace" fontSize="11" fill="rgba(255,255,255,0.3)">Hamyon to&apos;ldirildi</text>
              <text x="374" y="357" fontFamily="IBM Plex Mono,monospace" fontSize="11" fontWeight="600" fill="#4CAF82" textAnchor="end">+300 000</text>

              {/* Corner marks */}
              <line x1="10" y1="20" x2="28" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
              <line x1="10" y1="20" x2="10" y2="38" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
            </svg>
          </div>

          {/* Right: points */}
          <div className="pay-points">
            {points.map((p, i) => (
              <div
                key={i}
                ref={(el) => { itemRefs.current[i] = el; }}
                className="reveal pay-point"
                style={{
                  display: 'flex', gap: 20,
                  paddingBlock: 'clamp(18px,2.5vw,26px)',
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div style={{
                  fontFamily: 'var(--f-display)', fontWeight: 600,
                  fontSize: 'clamp(1.8rem,3vw,2.6rem)', color: 'var(--accent)',
                  letterSpacing: '-0.05em', lineHeight: 1,
                  flexShrink: 0, width: 56,
                }}>{p.num}</div>
                <div>
                  <div style={{
                    fontFamily: 'var(--f-display)', fontWeight: 500,
                    fontSize: 'clamp(0.95rem,1.4vw,1.2rem)', color: '#fff',
                    letterSpacing: '-0.02em', marginBottom: 8, lineHeight: 1.2,
                  }}>{p.title}</div>
                  <div style={{
                    color: 'rgba(255,255,255,0.45)',
                    fontSize: 'clamp(12px,1vw,14px)', lineHeight: 1.65,
                  }}>{p.body}</div>
                </div>
              </div>
            ))}

            {/* Note */}
            <div style={{
              marginTop: 'clamp(20px,3vw,32px)',
              background: 'rgba(255,82,48,0.06)',
              border: '1px solid rgba(255,82,48,0.18)',
              borderRadius: 12, padding: 'clamp(14px,2vw,20px)',
              display: 'flex', gap: 12, alignItems: 'flex-start',
            }}>
              <span style={{
                width: 20, height: 20, borderRadius: '50%',
                background: 'rgba(255,82,48,0.15)', border: '1px solid rgba(255,82,48,0.3)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, marginTop: 1,
              }}>
                <svg viewBox="0 0 16 16" fill="none" stroke="#FF5230" strokeWidth="1.8" strokeLinecap="round" width="10" height="10">
                  <line x1="8" y1="4" x2="8" y2="9"/><circle cx="8" cy="12" r="0.5" fill="#FF5230"/>
                </svg>
              </span>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(11px,0.95vw,13px)', lineHeight: 1.6, margin: 0 }}>
                Balans nolga tushsa, ustaga buyurtma kelmaydi. Bu — ikki tomonning xavfsizligi uchun.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .pay-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px,5vw,72px);
          align-items: center;
          margin-top: clamp(32px,4vw,56px);
        }
        @media (max-width: 860px) {
          .section-head-pay { grid-template-columns: 1fr !important; gap: 12px !important; }
          .pay-body { grid-template-columns: 1fr !important; }
          .pay-visual { max-width: 360px; margin-inline: auto; }
        }
      `}</style>
    </section>
  );
}
