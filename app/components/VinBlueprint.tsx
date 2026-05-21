'use client';

import { useEffect, useRef, useState } from 'react';

const hotspots = [
  {
    id: 'front-wheel',
    label: "OLDINGI G'ILDIRAK · 18\"",
    sub: 'Tormoz: yangi · 12.04.26',
    cx: 280, cy: 438, r: 72,
    tipX: 280, tipY: 348,
  },
  {
    id: 'vin',
    label: 'VIN · WBA8E9C5GK',
    sub: '17 belgili · 2018 y.',
    cx: 590, cy: 300, r: 95,
    tipX: 535, tipY: 228,
  },
  {
    id: 'oil',
    label: "DVIGATEL YOG'I · 5W-30",
    sub: 'Almashtirilgan: 84,200 km',
    cx: 360, cy: 400, r: 68,
    tipX: 360, tipY: 310,
  },
];

export default function VinBlueprint() {
  const stageRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [activePin, setActivePin] = useState<string | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            stage.classList.add('vin-stage-active');
            observer.unobserve(stage);
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(stage);

    const onMouseMove = (e: MouseEvent) => {
      const inner = innerRef.current;
      if (!inner) return;
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      inner.style.transform = `rotateY(${px * 6}deg) rotateX(${-py * 4}deg)`;
    };
    const onMouseLeave = () => {
      if (innerRef.current) innerRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)';
    };

    stage.addEventListener('mousemove', onMouseMove);
    stage.addEventListener('mouseleave', onMouseLeave);
    return () => {
      observer.disconnect();
      stage.removeEventListener('mousemove', onMouseMove);
      stage.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section id="blueprint" style={{
      background: '#0E1620', color: '#F2ECE2',
      overflow: 'hidden', position: 'relative',
      paddingBlock: 'var(--section-py)',
    }}>
      {/* Grid backdrop */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        pointerEvents: 'none',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 90%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 90%)',
      }} />

      <div className="container">
        {/* Section head */}
        <div className="section-head section-head-vin">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{
              fontFamily: 'var(--f-mono)', fontWeight: 500, fontSize: 11,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.55)',
              display: 'flex', alignItems: 'center',
            }}>
              <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', marginRight: 10, flexShrink: 0 }} />
              Tahlil
            </span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>§ 02 — Blueprint</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.6vw, 3.2rem)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#fff' }}>
            Har bir mashina —{' '}
            <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 500 }}>yagona tarix.</span>
          </h2>
        </div>

        {/* Hint */}
        <p style={{
          fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.14em',
          color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase',
          marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          Mashina qismlariga bosing — ma'lumot chiqadi
        </p>

        {/* SVG Stage */}
        <div
          ref={stageRef}
          style={{ position: 'relative', aspectRatio: '16/9', width: '100%', maxWidth: 1100, marginInline: 'auto', perspective: 1400 }}
        >
          <div
            ref={innerRef}
            style={{ position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d', transition: 'transform 0.25s ease-out' }}
          >
            <svg
              viewBox="0 0 1100 620"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: '100%', display: 'block' }}
            >
              <defs>
                <linearGradient id="bp" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#FF5230" stopOpacity="0"/>
                  <stop offset="0.5" stopColor="#FF5230" stopOpacity="1"/>
                  <stop offset="1" stopColor="#FF5230" stopOpacity="0"/>
                </linearGradient>
              </defs>

              {/* Ground */}
              <g stroke="rgba(255,255,255,0.18)" strokeWidth="1">
                <line x1="60" y1="500" x2="1040" y2="500"/>
                {[120,220,320,420,520,620,720,820,920].map(x=>(
                  <line key={x} x1={x} y1="500" x2={x} y2="510"/>
                ))}
              </g>

              {/* Car body */}
              <g stroke="rgba(255,255,255,0.85)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path className="draw d1" d="M 140 430 L 210 430 C 220 405, 240 385, 285 374 L 410 348 C 480 332, 560 320, 640 318 L 770 318 C 840 320, 905 332, 960 354 L 1010 372 C 1030 384, 1040 400, 1040 430 L 1040 430"/>
                <path className="draw d2" d="M 395 355 C 460 282, 555 254, 660 254 L 800 254 C 880 258, 940 286, 968 348"/>
                <line className="draw d2" x1="408" y1="345" x2="965" y2="345" strokeOpacity="0.6"/>
                <line className="draw d3" x1="660" y1="258" x2="660" y2="340" strokeOpacity="0.55"/>
                <line className="draw d3" x1="800" y1="258" x2="800" y2="340" strokeOpacity="0.55"/>
                <path className="draw d3" d="M 220 430 L 400 374" strokeOpacity="0.55"/>
                <line className="draw d3" x1="540" y1="328" x2="540" y2="430" strokeOpacity="0.45"/>
                <line className="draw d3" x1="720" y1="324" x2="720" y2="430" strokeOpacity="0.45"/>
              </g>

              {/* Wheels */}
              <g stroke="#FF5230" strokeWidth="1.6" fill="none">
                <circle className="draw d4" cx="280" cy="438" r="62"/>
                <circle className="draw d4" cx="280" cy="438" r="38" strokeOpacity="0.55"/>
                <circle cx="280" cy="438" r="6" fill="#FF5230" stroke="none"/>
                <circle className="draw d4" cx="900" cy="438" r="62"/>
                <circle className="draw d4" cx="900" cy="438" r="38" strokeOpacity="0.55"/>
                <circle cx="900" cy="438" r="6" fill="#FF5230" stroke="none"/>
              </g>

              {/* Annotation lines */}
              <g stroke="rgba(255,255,255,0.28)" strokeWidth="1" strokeDasharray="3 4">
                <line className="draw d4" x1="280" y1="376" x2="280" y2="170"/>
                <line className="draw d4" x1="280" y1="170" x2="430" y2="170"/>
                <line className="draw d4" x1="660" y1="258" x2="660" y2="140"/>
                <line className="draw d4" x1="660" y1="140" x2="540" y2="140"/>
                <line className="draw d4" x1="360" y1="380" x2="360" y2="230"/>
                <line className="draw d4" x1="360" y1="230" x2="500" y2="230"/>
              </g>

              {/* Pin dots at annotation endpoints */}
              <g fill="var(--accent)" className="draw d4">
                <circle cx="430" cy="170" r="3"/>
                <circle cx="540" cy="140" r="3"/>
                <circle cx="500" cy="230" r="3"/>
              </g>

              {/* Pulse rings on hotspot pins */}
              {hotspots.map((h) => (
                <circle
                  key={`ring-${h.id}`}
                  cx={h.tipX}
                  cy={h.tipY}
                  r={activePin === h.id ? 10 : 6}
                  fill={activePin === h.id ? 'rgba(255,82,48,0.25)' : 'transparent'}
                  stroke={activePin === h.id ? 'var(--accent)' : 'rgba(255,82,48,0.5)'}
                  strokeWidth="1"
                  style={{ transition: 'all 0.2s ease', cursor: 'pointer' }}
                />
              ))}

              {/* Invisible hotspot hit areas */}
              {hotspots.map((h) => (
                <circle
                  key={`hit-${h.id}`}
                  cx={h.cx}
                  cy={h.cy}
                  r={h.r}
                  fill="transparent"
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => setActivePin(h.id)}
                  onMouseLeave={() => setActivePin(null)}
                  onClick={() => setActivePin(activePin === h.id ? null : h.id)}
                />
              ))}

              {/* Corner crosshairs */}
              <g stroke="rgba(255,255,255,0.4)" strokeWidth="1">
                <line x1="40" y1="50" x2="60" y2="50"/><line x1="50" y1="40" x2="50" y2="60"/>
                <line x1="1040" y1="50" x2="1060" y2="50"/><line x1="1050" y1="40" x2="1050" y2="60"/>
              </g>
              <text x="65" y="50" fontFamily="IBM Plex Mono,monospace" fontSize="10" fill="rgba(255,255,255,0.45)" dominantBaseline="middle" letterSpacing="2">TX · BLUEPRINT</text>
              <text x="1045" y="50" fontFamily="IBM Plex Mono,monospace" fontSize="10" fill="rgba(255,255,255,0.45)" dominantBaseline="middle" letterSpacing="2" textAnchor="end">REV · 2026.05</text>
            </svg>

            {/* HTML Tooltips — positioned via SVG coordinate percentages */}
            {hotspots.map((h) => activePin === h.id && (
              <div
                key={`tip-${h.id}`}
                style={{
                  position: 'absolute',
                  left: `${(h.tipX / 1100) * 100}%`,
                  top: `${(h.tipY / 620) * 100}%`,
                  transform: 'translate(-50%, calc(-100% - 12px))',
                  background: 'rgba(14,22,32,0.97)',
                  border: '1px solid rgba(255,82,48,0.4)',
                  borderRadius: 10,
                  padding: '10px 14px',
                  pointerEvents: 'none',
                  zIndex: 20,
                  minWidth: 180,
                  boxShadow: '0 12px 32px -8px rgba(0,0,0,0.6)',
                  whiteSpace: 'nowrap',
                }}
              >
                <div style={{
                  fontFamily: 'var(--f-mono)', fontSize: 11,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--accent)', marginBottom: 5,
                }}>{h.label}</div>
                <div style={{
                  fontFamily: 'var(--f-mono)', fontSize: 11,
                  color: 'rgba(255,255,255,0.6)',
                }}>{h.sub}</div>
                {/* Caret */}
                <div style={{
                  position: 'absolute', bottom: -6, left: '50%',
                  transform: 'translateX(-50%)',
                  width: 10, height: 6,
                  borderLeft: '5px solid transparent',
                  borderRight: '5px solid transparent',
                  borderTop: '6px solid rgba(255,82,48,0.4)',
                }}/>
              </div>
            ))}
          </div>
        </div>

        {/* VIN Footer grid */}
        <div style={{
          marginTop: 'clamp(32px, 5vw, 56px)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1, background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, overflow: 'hidden',
        }} className="vin-footer-grid">
          {[
            { k: 'Hujjat ID', v: 'TX·A7301', coral: true },
            { k: 'Servis yozuvi', v: '47 ta', coral: false },
            { k: 'Oxirgi tashrif', v: '12.04.2026', coral: false },
            { k: 'Egasi', v: '2-egasi · Toshkent', coral: false },
          ].map((cell) => (
            <div key={cell.k} style={{ background: '#0E1620', padding: 'clamp(14px, 2vw, 22px)' }}>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 6 }}>{cell.k}</div>
              <div style={{ fontFamily: 'var(--f-display)', fontWeight: 500, fontSize: 'clamp(14px, 1.5vw, 20px)', letterSpacing: '-0.01em', color: cell.coral ? 'var(--accent)' : '#fff' }}>{cell.v}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .section-head-vin { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
        @media (max-width: 760px) {
          .vin-footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 400px) {
          .vin-footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
