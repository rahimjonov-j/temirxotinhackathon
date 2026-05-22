'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const CARS = [
  { src: '/cobalt.webp', alt: 'Chevrolet Cobalt' },
  { src: '/damas.webp',  alt: 'Daewoo Damas' },
];
const SLIDES = [...CARS, CARS[0]];

export default function Hero() {
  const heroRef     = useRef<HTMLElement>(null);
  const carWrapRef  = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);
  const timerRef    = useRef<ReturnType<typeof setInterval> | null>(null);
  const [slideIdx, setSlideIdx] = useState(0);
  const [animated, setAnimated] = useState(true);

  const handleTransitionEnd = useCallback(() => {
    if (slideIdx === CARS.length) { setAnimated(false); setSlideIdx(0); }
  }, [slideIdx]);

  useEffect(() => {
    if (!animated) { const id = requestAnimationFrame(() => setAnimated(true)); return () => cancelAnimationFrame(id); }
  }, [animated]);

  const advance = useCallback(() => { setAnimated(true); setSlideIdx(p => p + 1); }, []);

  useEffect(() => {
    timerRef.current = setInterval(advance, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [advance]);

  const goTo = (i: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setAnimated(true); setSlideIdx(i);
    timerRef.current = setInterval(advance, 5000);
  };

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      requestAnimationFrame(() => {
        const hero = heroRef.current;
        if (!hero) { ticking = false; return; }
        const r = hero.getBoundingClientRect();
        if (r.bottom > 0 && r.top < window.innerHeight) {
          const p = -r.top;
          if (carWrapRef.current)  carWrapRef.current.style.transform  = `translateY(${Math.max(-20, Math.min(60, p * 0.1))}px)`;
          if (heroTextRef.current) heroTextRef.current.style.transform = `translateY(${-Math.max(0, p) * 0.04}px)`;
        }
        ticking = false;
      });
      ticking = true;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dot = slideIdx % CARS.length;

  return (
    <section ref={heroRef} id="top" className="hero-section">
      {/* Grid overlay */}
      <div className="hero-grid-bg" />
      {/* Glow */}
      <div className="hero-glow" />

      <div className="hero-inner container">
        {/* LEFT */}
        <div ref={heroTextRef} className="hero-text">
          <span className="mono-label"><span className="dot" />Yo&apos;lda qolsangiz · 2026</span>

          <h1 className="hero-h1">
            <span>Mashina to&apos;xtadi?</span>
            <span>Bir tugma —</span>
            <span className="hero-accent-line">
              <em>yordam yo&apos;lda</em>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/>
              </svg>
            </span>
          </h1>

          <p className="hero-p">
            Yo&apos;lda mashinangiz ishdan chiqsa — ilovani oching, SOS tugmasini bosing. Operator aloqaga chiqadi, muammoni aniqlab, kerakli mutaxassisni yuboradi.
          </p>

          <div className="hero-badges">
            <span><span className="hero-dot-pulse" />14 viloyatda mavjud</span>
            <span>380+ ishonchli mutaxassis</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-visual">
          <div ref={carWrapRef} className="hero-car-slider">
            {/* Track */}
            <div
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              className="hero-track"
              style={{
                transform: `translateX(${-slideIdx * (100 / SLIDES.length)}%)`,
                transition: animated ? 'transform 0.72s cubic-bezier(0.77,0,0.18,1)' : 'none',
              }}
            >
              {SLIDES.map((car, i) => (
                <div key={i} className="hero-slide">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={car.src} alt={car.alt}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    draggable={false}
                    className="hero-car-img"
                  />
                </div>
              ))}
            </div>

            {/* SOS badge */}
            <span className="hero-vin-badge">
              <span className="hero-vin-dot" />SOS · Faol
            </span>

            {/* Progress */}
            <div className="hero-progress-track">
              <div key={dot} className="hero-progress-fill" />
            </div>

            {/* Dots */}
            <div className="hero-dots">
              {CARS.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} aria-label={`Mashina ${i + 1}`}
                  className={`hero-dot-btn${i === dot ? ' active' : ''}`} />
              ))}
            </div>
          </div>

          {/* Meta card */}
          <div className="hero-meta">
            <div className="hero-meta-item">
              <div className="hero-meta-label">SOS</div>
              <div className="hero-meta-val">Faol · 24/7</div>
            </div>
            <div className="hero-meta-divider" />
            <div className="hero-meta-item">
              <div className="hero-meta-label">Operatorlar</div>
              <div className="hero-meta-val accent">12 nafar</div>
            </div>
            <div className="hero-meta-item hero-meta-km">
              <div className="hero-meta-label">O&apos;rtacha kelish</div>
              <div className="hero-meta-val">18 daqiqa</div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="hero-marquee-wrap" aria-hidden="true">
        <div className="hero-marquee-inner">
          {[0, 1].map(i => (
            <div key={i} className="hero-marquee-row">
              {['SOS — bir tugma yetarli','380+ ishonchli mutaxassis','Operator 60 soniyada','Evakuator ham mavjud',"14 viloyat bo'ylab",'To\'lov avtomatik yechiladi'].map(t => (
                <span key={t} className="hero-marquee-item">
                  {t}<span className="hero-marquee-dot" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Section ── */
        .hero-section {
          position: relative;
          min-height: 100vh;
          padding-top: 72px;
          overflow: hidden;
          background: linear-gradient(180deg, var(--bg) 0%, var(--bg) 60%, var(--bg-2) 100%);
          display: flex;
          flex-direction: column;
        }

        /* ── Backgrounds ── */
        .hero-grid-bg {
          position: absolute; inset: 72px 0 0 0;
          background-image:
            linear-gradient(to right, rgba(14,22,32,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(14,22,32,0.04) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(ellipse at 65% 45%, transparent 0%, black 65%);
          -webkit-mask-image: radial-gradient(ellipse at 65% 45%, transparent 0%, black 65%);
          pointer-events: none; z-index: 0;
        }
        .hero-glow {
          position: absolute; right: -8%; top: 40%;
          transform: translateY(-50%);
          width: 50vw; max-width: 700px; aspect-ratio: 1/1;
          border-radius: 50%;
          background: radial-gradient(circle at center, rgba(255,82,48,0.14) 0%, rgba(255,82,48,0.04) 45%, transparent 68%);
          pointer-events: none; z-index: 0;
        }

        /* ── Layout ── */
        .hero-inner {
          position: relative; z-index: 2;
          flex: 1;
          display: grid;
          grid-template-columns: 44% 56%;
          align-items: center;
          padding-top: clamp(40px, 6vh, 80px);
          padding-bottom: clamp(80px, 10vh, 120px);
          gap: 0;
        }

        /* ── Left text ── */
        .hero-text {
          display: flex; flex-direction: column;
          gap: clamp(20px, 3vh, 32px);
          padding-right: clamp(16px, 3vw, 48px);
        }
        .hero-h1 {
          font-size: clamp(2rem, 4.2vw, 4.4rem);
          font-weight: 600; letter-spacing: -0.035em; line-height: 1.01;
          display: flex; flex-direction: column; gap: 0.02em;
        }
        .hero-accent-line {
          display: inline-flex; align-items: center; gap: 0.2em; margin-top: 0.04em;
        }
        .hero-accent-line em {
          color: var(--accent); font-style: italic; font-weight: 500;
          font-family: var(--f-display);
        }
        .hero-accent-line svg {
          width: 0.72em; height: 0.72em; flex-shrink: 0;
          transform: translateY(0.05em);
        }
        .hero-p {
          font-size: clamp(13px, 1.1vw, 15px);
          color: var(--ink-mute); line-height: 1.65;
          max-width: 38ch;
        }
        .hero-badges {
          display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
        }
        .hero-badges span {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--f-mono); font-size: 10px;
          letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-mute);
        }
        .hero-dot-pulse {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--accent); flex-shrink: 0;
          animation: pulse-dot 2s ease-out infinite;
        }

        /* ── Right visual ── */
        .hero-visual {
          display: flex; flex-direction: column;
          gap: 12px; overflow: hidden;
        }

        /* ── Car slider ── */
        .hero-car-slider {
          position: relative;
          height: clamp(220px, 46vh, 520px);
          overflow: hidden;
          border-radius: 12px;
          will-change: transform;
        }
        .hero-track {
          display: flex;
          width: ${SLIDES.length * 100}%;
          height: 100%;
        }
        .hero-slide {
          width: ${100 / SLIDES.length}%;
          flex-shrink: 0; height: 100%;
          display: flex; align-items: flex-end; justify-content: center;
        }
        .hero-car-img {
          width: 100%; height: 100%;
          object-fit: contain; object-position: center bottom;
          mix-blend-mode: multiply;
          filter: drop-shadow(0 20px 36px rgba(14,22,32,0.16)) drop-shadow(0 3px 8px rgba(14,22,32,0.06));
          user-select: none; pointer-events: none;
        }

        /* ── VIN badge ── */
        .hero-vin-badge {
          position: absolute; top: 16px; right: 16px; z-index: 4;
          background: rgba(255,82,48,0.95); color: #fff;
          padding: 7px 12px; border-radius: 999px;
          font-family: var(--f-mono); font-size: 10px;
          letter-spacing: 0.12em; text-transform: uppercase;
          display: inline-flex; align-items: center; gap: 6px;
          box-shadow: 0 6px 20px -4px rgba(255,82,48,0.5);
        }
        .hero-vin-dot {
          width: 5px; height: 5px; border-radius: 50%; background: #fff;
          animation: pulse-dot 2s ease-out infinite;
        }

        /* ── Progress bar ── */
        .hero-progress-track {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: rgba(14,22,32,0.1); z-index: 4;
        }
        @keyframes car-progress { from{width:0} to{width:100%} }
        .hero-progress-fill {
          height: 100%; background: var(--accent);
          animation: car-progress 5s linear forwards;
        }

        /* ── Dots ── */
        .hero-dots {
          position: absolute; bottom: 14px; left: 50%;
          transform: translateX(-50%);
          display: flex; gap: 6px; z-index: 4;
        }
        .hero-dot-btn {
          height: 6px; border-radius: 999px; border: none; cursor: pointer; padding: 0;
          background: rgba(14,22,32,0.2);
          width: 6px;
          transition: width 0.4s cubic-bezier(0.77,0,0.18,1), background 0.3s;
        }
        .hero-dot-btn.active { width: 20px; background: var(--accent); }

        /* ── Meta card ── */
        .hero-meta {
          background: #0E1620; border-radius: 14px;
          padding: clamp(12px, 2vw, 18px) clamp(14px, 2.5vw, 22px);
          display: grid;
          grid-template-columns: auto 1px auto auto;
          gap: clamp(12px, 2vw, 20px);
          align-items: center;
          box-shadow: 0 12px 32px -10px rgba(14,22,32,0.3);
        }
        .hero-meta-divider { width: 1px; height: 28px; background: rgba(255,255,255,0.08); }
        .hero-meta-label {
          font-family: var(--f-mono); font-size: 9px;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(255,255,255,0.4); margin-bottom: 4px;
        }
        .hero-meta-val {
          font-family: var(--f-display); font-weight: 600;
          font-size: clamp(12px, 1.2vw, 15px); color: #fff; letter-spacing: -0.01em;
        }
        .hero-meta-val.accent { color: var(--accent); font-size: clamp(13px, 1.3vw, 16px); }

        /* ── Marquee ── */
        .hero-marquee-wrap {
          border-top: 1px solid var(--border);
          background: var(--bg-2);
          padding: 13px 0; z-index: 5;
        }
        .hero-marquee-inner {
          display: flex; gap: 44px; overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
        .hero-marquee-row {
          display: flex; gap: 44px; flex-shrink: 0;
          animation: marquee 38s linear infinite;
        }
        .hero-marquee-item {
          font-family: var(--f-mono); font-size: 9px; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--ink-mute); white-space: nowrap;
          display: inline-flex; align-items: center; gap: 12px;
        }
        .hero-marquee-dot {
          width: 3px; height: 3px; background: var(--accent);
          border-radius: 50%; margin-left: 44px;
        }

        /* ═══════════════════════════════
           RESPONSIVE
        ═══════════════════════════════ */

        /* Tablet wide */
        @media (max-width: 1100px) {
          .hero-inner { grid-template-columns: 46% 54%; }
          .hero-car-slider { height: clamp(200px, 42vh, 460px); }
        }

        /* Tablet */
        @media (max-width: 860px) {
          .hero-inner {
            grid-template-columns: 1fr;
            padding-top: clamp(32px, 4vh, 56px);
            padding-bottom: clamp(72px, 8vh, 96px);
            gap: clamp(24px, 4vw, 40px);
          }
          .hero-text { padding-right: 0; gap: 18px; }
          .hero-h1 { font-size: clamp(1.9rem, 5.5vw, 3.2rem); }
          .hero-p { max-width: 52ch; }
          .hero-car-slider { height: clamp(180px, 45vw, 380px); border-radius: 10px; }
        }

        /* Mobile */
        @media (max-width: 560px) {
          .hero-h1 { font-size: clamp(1.7rem, 7.5vw, 2.6rem); }
          .hero-car-slider { height: clamp(160px, 52vw, 280px); }
          .hero-meta { grid-template-columns: auto 1px auto; }
          .hero-meta-km { display: none; }
          .hero-vin-badge { font-size: 9px; padding: 6px 10px; top: 10px; right: 10px; }
        }

        @media (max-width: 380px) {
          .hero-car-slider { height: clamp(140px, 55vw, 240px); }
          .hero-h1 { font-size: clamp(1.5rem, 8vw, 2.2rem); }
        }
      `}</style>
    </section>
  );
}
