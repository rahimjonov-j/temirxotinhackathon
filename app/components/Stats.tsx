'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { count: 1248, suffix: '+', label: "Ulangan mashinalar", sub: "Toshkent, Samarqand, Buxoro, Farg'ona va boshqa shaharlarda" },
  { count: 124,  suffix: '+', label: 'Ishonchli ustalar',  sub: "Ta'mir · elektr · kuzov ishlari" },
  { count: null, text: '24/7', label: 'Har doim ochiq',   sub: "Ilovani oching — internet bo'lmasa ham ishlaydi" },
];

function useCountUp(target: number | null, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active || target === null) return;
    const dur = 1800;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    let raf: number;
    const frame = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      setValue(Math.floor(target * ease(t)));
      if (t < 1) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);
  return value;
}

function StatItem({ count, suffix, text, label, sub, delay }: { count: number | null; suffix?: string; text?: string; label: string; sub: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const value = useCountUp(count, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            setActive(true);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="reveal stat-item" style={{ padding: '24px 32px', borderRight: '1px solid var(--border)' }}>
      <div className="stats-num" style={{
        fontFamily: 'var(--f-display)', fontWeight: 600,
        fontSize: 'clamp(2.8rem, 5vw, 4.8rem)',
        color: 'var(--ink)', letterSpacing: '-0.045em', lineHeight: 1,
      }}>
        {text ?? value.toLocaleString('en-US').replace(/,/g, ' ')}
        <span style={{ color: 'var(--accent)' }}>{text ? '' : suffix}</span>
      </div>
      <div className="stats-label" style={{ marginTop: 14, fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-mute)' }}>{label}</div>
      <div className="stats-sub" style={{ marginTop: 8, color: 'var(--ink-mute)', fontSize: 14, maxWidth: '30ch' }}>{sub}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section style={{
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      paddingBlock: 'clamp(80px, 10vw, 120px)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 2fr',
          gap: 48, alignItems: 'end', marginBottom: 56,
        }} className="section-head-stats">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span className="mono-label"><span className="dot" />Raqamlar</span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.16em', color: 'var(--ink-soft)', textTransform: 'uppercase' }}>§ 04 — Trafik</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.4rem, 4.8vw, 4rem)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1 }}>
            O&apos;zbekiston bo&apos;ylab,{' '}
            <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 500 }}>faol.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }} className="stats-grid">
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} delay={i * 140} />
          ))}
        </div>
      </div>

      <style>{`
        .stats-grid > .stat-item:last-child { border-right: none !important; }

        @media (max-width: 900px) {
          .section-head-stats { grid-template-columns: 1fr !important; gap: 18px !important; margin-bottom: 36px !important; }
        }

        @media (max-width: 760px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .stat-item { border-right: 1px solid var(--border) !important; border-bottom: 1px solid var(--border) !important; padding: 18px 16px !important; }
          .stat-item:nth-child(even) { border-right: none !important; }
          .stat-item:last-child { grid-column: 1 / -1 !important; border-bottom: none !important; border-right: none !important; border-top: 1px solid var(--border) !important; }
          .stats-num { font-size: clamp(2rem, 8vw, 3rem) !important; }
          .stats-label { font-size: 10px !important; margin-top: 8px !important; }
          .stats-sub { font-size: 12px !important; margin-top: 4px !important; }
        }

        @media (max-width: 480px) {
          .stat-item { padding: 14px 12px !important; }
          .stats-num { font-size: clamp(1.6rem, 7vw, 2.2rem) !important; }
          .stats-sub { display: none !important; }
        }
      `}</style>
    </section>
  );
}
