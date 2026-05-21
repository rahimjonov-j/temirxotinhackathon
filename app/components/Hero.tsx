'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const carWrapRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      requestAnimationFrame(() => {
        const hero = heroRef.current;
        const carWrap = carWrapRef.current;
        const heroText = heroTextRef.current;
        if (!hero) { ticking = false; return; }
        const r = hero.getBoundingClientRect();
        if (r.bottom > 0 && r.top < window.innerHeight) {
          const progress = -r.top;
          if (carWrap) {
            const offset = Math.max(-40, Math.min(120, progress * 0.18));
            carWrap.style.transform = `translateY(${offset}px)`;
          }
          if (heroText) {
            heroText.style.transform = `translateY(${-Math.max(0, progress) * 0.06}px)`;
          }
        }
        ticking = false;
      });
      ticking = true;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      id="top"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: 72,
        overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg) 65%, var(--bg-2) 100%)',
      }}
    >
      {/* Blueprint grid lines */}
      <div style={{
        position: 'absolute',
        inset: '72px 0 0 0',
        backgroundImage: 'linear-gradient(to right, rgba(14,22,32,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,22,32,0.04) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse at 70% 50%, transparent 0%, black 60%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 70% 50%, transparent 0%, black 60%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Coral glow halo */}
      <div style={{
        position: 'absolute',
        right: '-10%',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '70vw',
        maxWidth: 900,
        aspectRatio: '1/1',
        borderRadius: '50%',
        background: 'radial-gradient(circle at center, rgba(255,82,48,0.18) 0%, rgba(255,82,48,0.06) 35%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.15fr',
          alignItems: 'center',
          gap: 0,
          minHeight: 'calc(100vh - 72px)',
          paddingBlock: '80px 140px',
        }} className="hero-grid">

          {/* LEFT: Text */}
          <div ref={heroTextRef} style={{ display: 'flex', flexDirection: 'column', gap: 36, position: 'relative', zIndex: 2 }}>
            <span className="mono-label">
              <span className="dot" />
              Mashinangiz uchun ishonchli xotira · 2026
            </span>

            <h1 style={{
              fontSize: 'clamp(3rem, 6.4vw, 5.6rem)',
              fontWeight: 600,
              letterSpacing: '-0.035em',
              lineHeight: 0.98,
            }}>
              <span style={{ display: 'block' }}>Mashinaning</span>
              <span style={{ display: 'block' }}>butun hayoti —</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.22em' }}>
                <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 500, fontFamily: 'var(--f-display)' }}>bir joyda</span>
                <svg style={{ display: 'inline-block', width: '0.85em', height: '0.85em', transform: 'translateY(0.06em)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="13 6 19 12 13 18"/>
                </svg>
              </span>
            </h1>

            <p style={{
              maxWidth: 460,
              fontSize: 'clamp(15px, 1.4vw, 17px)',
              fontWeight: 400,
              color: 'var(--ink-mute)',
              lineHeight: 1.55,
            }}>
              Mashinangizga qilingan har bir ta'mir, har bir almashtirish — telefoningizda saqlanadi. Sotsangiz ham, yangi egasi barchasini ko'radi.
            </p>

            {/* Status row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 4 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'var(--ink-mute)',
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)',
                  animation: 'pulse-dot 2s ease-out infinite',
                }} />
                14 viloyatda mavjud
              </span>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'var(--ink-mute)',
              }}>
                380+ ishonchli usta
              </span>
            </div>
          </div>

          {/* RIGHT: Car visual */}
          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            height: '100%',
            minHeight: 580,
            overflow: 'visible',
            paddingBottom: 72,
          }} className="hero-visual-wrap">

            {/* Car image */}
            <div ref={carWrapRef} className="hero-car-wrap" style={{
              position: 'relative',
              flex: 1,
              minHeight: 420,
              right: '-18%',
              width: 'calc(100% + 18%)',
              willChange: 'transform',
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/cobalt.png"
                alt="Chevrolet Cobalt avtomobil"
                loading="eager"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'right bottom',
                  display: 'block',
                  mixBlendMode: 'multiply',
                  filter: 'drop-shadow(0 28px 48px rgba(14,22,32,0.20)) drop-shadow(0 6px 12px rgba(14,22,32,0.08))',
                  transform: 'translateY(-16px)',
                }}
              />

              {/* VIN badge */}
              <span className="hero-vin-badge" style={{
                position: 'absolute', top: 24, right: '18%', zIndex: 4,
                background: 'rgba(255, 82, 48, 0.95)', color: '#fff',
                padding: '9px 16px', borderRadius: 999,
                fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                boxShadow: '0 8px 24px -6px rgba(255,82,48,0.45)',
              }}>
                <span style={{ width: 6, height: 6, background: '#fff', borderRadius: '50%', animation: 'pulse-dot 2s ease-out infinite' }} />
                VIN aniqlandi
              </span>
            </div>

            {/* Meta card — below the car */}
            <div className="hero-meta-card" style={{
              position: 'relative', zIndex: 4,
              background: 'var(--ink)',
              borderRadius: 16, padding: '18px 24px',
              display: 'grid', gridTemplateColumns: 'auto 1px auto auto',
              gap: 20, alignItems: 'center',
              marginTop: 0,
              boxShadow: '0 16px 40px -12px rgba(14,22,32,0.28)',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 5 }}>VIN</div>
                <div style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: 15, color: '#fff', letterSpacing: '-0.01em' }}>WBA·8E9C·5G·K</div>
              </div>
              <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.08)' }} />
              <div>
                <div style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 5 }}>Servis yozuvi</div>
                <div style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: 16, color: 'var(--accent)', letterSpacing: '-0.01em' }}>47 ta</div>
              </div>
              <div className="meta-hide">
                <div style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 5 }}>Yurgan</div>
                <div style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: 15, color: '#fff', letterSpacing: '-0.01em' }}>87 420 km</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        padding: '18px 0', borderTop: '1px solid var(--border)',
        background: 'var(--bg-2)', zIndex: 5,
      }} aria-hidden="true">
        <div style={{
          display: 'flex', gap: 56, alignItems: 'center',
          overflow: 'hidden',
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}>
          {[0, 1].map(i => (
            <div key={i} style={{
              display: 'flex', gap: 56, flexShrink: 0,
              animation: 'marquee 36s linear infinite',
            }}>
              {['VIN — yagona identifikator', 'Tekshirilgan ustalar', 'Servis avtomatik yoziladi', 'Tarix sotuvda saqlanadi', "14 viloyat bo'ylab", 'Texpasport bitta surat'].map((text) => (
                <span key={text} style={{
                  fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: 'var(--ink-mute)', whiteSpace: 'nowrap',
                  display: 'inline-flex', alignItems: 'center', gap: 14,
                }}>
                  {text}
                  <span style={{ width: 4, height: 4, background: 'var(--accent)', borderRadius: '50%', marginLeft: 56 }} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; padding-block: 60px 80px !important; }
          .hero-visual-wrap { min-height: 340px !important; overflow: hidden !important; }
        }
        @media (max-width: 640px) {
          .hero-grid { padding-block: 48px 20px !important; gap: 24px !important; }
          .hero-grid > div:first-child { gap: 24px !important; }
          .hero-visual-wrap { min-height: 280px !important; overflow: hidden !important; }
          .hero-car-wrap { min-height: unset !important; }
          .hero-grid h1 { line-height: 0.96 !important; }
        }
        @media (max-width: 480px) {
          .hero-visual-wrap { min-height: 240px !important; }
        }
      `}</style>
    </section>
  );
}
