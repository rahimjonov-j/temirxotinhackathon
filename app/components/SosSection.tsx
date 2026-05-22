'use client';

import { useEffect, useRef } from 'react';

const steps = [
  {
    num: '01',
    title: "SOS tugmasini bosing",
    body: "Operator 60 soniya ichida siz bilan bog'lanadi — kecha bo'lsa ham, kunduz bo'lsa ham.",
  },
  {
    num: '02',
    title: "Muammo tahlil qilinadi",
    body: "Mashina belgilariga qarab AI va operator birgalikda qaysi mutaxassis kerakligini aniqlaydi.",
  },
  {
    num: '03',
    title: "Mutaxassis yo'lga chiqadi",
    body: "O'rtacha 18 daqiqada yetib keladi. Hamyoningizdan to'lov avtomatik yechiladi.",
  },
];

export default function SosSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      { threshold: 0.12 }
    );
    stepRefs.current.forEach((el, i) => {
      if (el) { el.style.transitionDelay = `${i * 130}ms`; observer.observe(el); }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sos"
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
        maskImage: 'radial-gradient(ellipse at 30% 50%, black 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 30% 50%, black 30%, transparent 80%)',
      }} />

      {/* Glow */}
      <div style={{
        position: 'absolute', left: '-5%', top: '50%', transform: 'translateY(-50%)',
        width: '45vw', maxWidth: 600, aspectRatio: '1/1', borderRadius: '50%',
        background: 'radial-gradient(circle at center,rgba(255,82,48,0.10) 0%,rgba(255,82,48,0.03) 45%,transparent 68%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section head */}
        <div className="section-head section-head-sos">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{
              fontFamily: 'var(--f-mono)', fontWeight: 500, fontSize: 11,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.55)',
              display: 'flex', alignItems: 'center',
            }}>
              <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', marginRight: 10, flexShrink: 0 }} />
              Asosiy xizmat
            </span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>§ 01 — SOS tizimi</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,3.2rem)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#fff' }}>
            Yo&apos;lda qolsangiz —{' '}
            <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 500 }}>operator yonida.</span>
          </h2>
        </div>

        {/* Body */}
        <div className="sos-body">
          {/* Left: steps */}
          <div className="sos-left">
            <p style={{
              color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(13px,1.1vw,15px)',
              lineHeight: 1.65, marginBottom: 'clamp(28px,4vw,44px)', maxWidth: '44ch',
            }}>
              Ko&apos;chada mashinangiz buzilib qoldi, atrofda ustaxona yo&apos;q. Ilovani oching — operator muammoni tahlil qilib, kerakli mutaxassisni topadi.
            </p>

            {steps.map((s, i) => (
              <div
                key={i}
                ref={(el) => { stepRefs.current[i] = el; }}
                className="reveal sos-step"
                style={{
                  display: 'flex', gap: 20,
                  paddingBlock: 'clamp(16px,2.5vw,24px)',
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div style={{
                  fontFamily: 'var(--f-display)', fontWeight: 600,
                  fontSize: 'clamp(2rem,3.5vw,3rem)', color: 'var(--accent)',
                  letterSpacing: '-0.05em', lineHeight: 1, flexShrink: 0, width: 60,
                }}>{s.num}</div>
                <div>
                  <div style={{
                    fontFamily: 'var(--f-display)', fontWeight: 500,
                    fontSize: 'clamp(1rem,1.5vw,1.25rem)', color: '#fff',
                    letterSpacing: '-0.02em', marginBottom: 6,
                  }}>{s.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(12px,1vw,14px)', lineHeight: 1.65 }}>{s.body}</div>
                </div>
              </div>
            ))}

            {/* Chips */}
            <div style={{ display: 'flex', gap: 10, marginTop: 'clamp(24px,3vw,36px)', flexWrap: 'wrap' }}>
              {[['60 sek', "operator javob vaqti"], ['18 min', "o'rtacha kelish"], ['24/7', 'doim ochiq']].map(([val, label]) => (
                <div key={val} style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  borderRadius: 10, padding: 'clamp(10px,1.5vw,14px) clamp(14px,2vw,20px)',
                }}>
                  <div style={{
                    fontFamily: 'var(--f-display)', fontWeight: 600,
                    fontSize: 'clamp(1rem,1.8vw,1.4rem)', color: 'var(--accent)',
                    letterSpacing: '-0.03em',
                  }}>{val}</div>
                  <div style={{
                    fontFamily: 'var(--f-mono)', fontSize: 9, letterSpacing: '0.14em',
                    textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginTop: 4,
                  }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: SVG visual */}
          <div className="sos-right">
            <svg viewBox="0 0 400 460" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', maxWidth: 400, display: 'block', marginInline: 'auto' }}>
              {/* Outer rings */}
              <circle cx="200" cy="200" r="170" stroke="rgba(255,82,48,0.05)" strokeWidth="1"/>
              <circle cx="200" cy="200" r="130" stroke="rgba(255,82,48,0.08)" strokeWidth="1"/>
              <circle cx="200" cy="200" r="90"  stroke="rgba(255,82,48,0.13)" strokeWidth="1"/>

              {/* Phone body */}
              <rect x="152" y="70" width="96" height="168" rx="14" fill="#1B2636" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2"/>
              {/* Screen */}
              <rect x="160" y="82" width="80" height="130" rx="6" fill="#0E1620"/>
              {/* Notch */}
              <rect x="188" y="78" width="24" height="6" rx="3" fill="rgba(255,255,255,0.08)"/>
              {/* Home bar */}
              <rect x="186" y="222" width="28" height="4" rx="2" fill="rgba(255,255,255,0.12)"/>

              {/* SOS circle on screen */}
              <circle cx="200" cy="152" r="30" fill="rgba(255,82,48,0.12)" stroke="#FF5230" strokeWidth="1.4"/>
              <text x="200" y="157" fontFamily="IBM Plex Mono,monospace" fontSize="12" fontWeight="700"
                fill="#FF5230" textAnchor="middle" letterSpacing="2">SOS</text>

              {/* Pulse rings - animated via CSS */}
              <circle cx="200" cy="152" r="36" stroke="rgba(255,82,48,0.35)" strokeWidth="1" className="sos-pulse sos-pulse-1"/>
              <circle cx="200" cy="152" r="46" stroke="rgba(255,82,48,0.18)" strokeWidth="1" className="sos-pulse sos-pulse-2"/>
              <circle cx="200" cy="152" r="58" stroke="rgba(255,82,48,0.08)" strokeWidth="1" className="sos-pulse sos-pulse-3"/>

              {/* Location pin */}
              <line x1="200" y1="248" x2="200" y2="316" stroke="rgba(255,82,48,0.35)" strokeWidth="1" strokeDasharray="4 4"/>
              <circle cx="200" cy="330" r="16" fill="rgba(255,82,48,0.12)" stroke="#FF5230" strokeWidth="1.4"/>
              <circle cx="200" cy="330" r="5" fill="#FF5230"/>

              {/* Operator dots */}
              {[[80, 150],[320, 130],[70, 290],[330, 270]].map(([x, y], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="11" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                  <circle cx={x} cy={y} r="4" fill="rgba(255,255,255,0.25)"/>
                  <line x1={x} y1={y} x2="200" y2="200" stroke="rgba(255,82,48,0.12)" strokeWidth="0.8" strokeDasharray="3 5"/>
                </g>
              ))}

              {/* Corner marks */}
              <line x1="30" y1="30" x2="52" y2="30" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
              <line x1="30" y1="30" x2="30" y2="52" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
              <line x1="370" y1="30" x2="348" y2="30" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
              <line x1="370" y1="30" x2="370" y2="52" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
              <text x="38" y="26" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="rgba(255,255,255,0.3)" letterSpacing="2">TX · SOS</text>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        .sos-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px,5vw,80px);
          align-items: center;
          margin-top: clamp(32px,4vw,56px);
        }
        @keyframes sos-pulse-anim {
          0%   { transform: scale(1);   opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .sos-pulse { transform-origin: 200px 152px; animation: sos-pulse-anim 2.6s ease-out infinite; }
        .sos-pulse-2 { animation-delay: 0.7s; }
        .sos-pulse-3 { animation-delay: 1.4s; }

        @media (max-width: 860px) {
          .section-head-sos { grid-template-columns: 1fr !important; gap: 12px !important; }
          .sos-body { grid-template-columns: 1fr !important; }
          .sos-right { max-width: 300px; margin-inline: auto; order: -1; }
        }
      `}</style>
    </section>
  );
}
