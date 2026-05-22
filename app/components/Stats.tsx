'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { count: 380,  suffix: '', prefix: '+', label: "Ishonchli mutaxasislar", sub: "Mexanik · elektrik · evakuator · kuzov ustasi", full: true },
  { count: 13,   suffix: '+', prefix: '', label: "Viloyat bo'ylab",        sub: "Toshkent, Samarqand, Buxoro, Farg'ona va boshqalar", full: false },
  { count: null, text: '24/7', prefix: '', label: 'Har doim ochiq',        sub: "SOS tugmasi — kecha va kunduz ishlaydi", full: false },
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

function StatItem({ count, suffix, prefix, text, label, sub, delay, full }: { count: number | null; suffix?: string; prefix?: string; text?: string; label: string; sub: string; delay: number; full?: boolean }) {
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
    <div ref={ref} className={`reveal stat-item${full ? ' stat-full' : ''}`} style={{ padding: 'clamp(16px, 2.5vw, 28px) clamp(16px, 3vw, 32px)', borderRight: '1px solid var(--border)' }}>
      <div className="stats-num" style={{
        fontFamily: 'var(--f-display)', fontWeight: 600,
        fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
        color: 'var(--ink)', letterSpacing: '-0.045em', lineHeight: 1,
      }}>
        {text ? text : (
          <>
            <span style={{ color: 'var(--accent)' }}>{prefix}</span>
            {value.toLocaleString('en-US').replace(/,/g, ' ')}
            <span style={{ color: 'var(--accent)' }}>{suffix}</span>
          </>
        )}
      </div>
      <div className="stats-label" style={{ marginTop: 10, fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-mute)' }}>{label}</div>
      <div className="stats-sub" style={{ marginTop: 6, color: 'var(--ink-mute)', fontSize: 13, maxWidth: '30ch' }}>{sub}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section style={{
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      paddingBlock: 'var(--section-py)',
    }}>
      <div className="container">
        <div className="section-head section-head-stats">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span className="mono-label"><span className="dot" />Raqamlar</span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--ink-soft)', textTransform: 'uppercase' }}>§ 04 — Trafik</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.6vw, 3.2rem)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            O&apos;zbekiston bo&apos;ylab,{' '}
            <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 500 }}>tayyor.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="stats-grid">
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} delay={i * 140} />
          ))}
        </div>
      </div>

      <style>{`
        /* 380+ spans full width, 13+ and 24/7 side by side */
        .stat-full { grid-column: 1 / -1; border-bottom: 1px solid var(--border); border-right: none !important; }
        .stats-grid > .stat-item:last-child { border-right: none !important; }
        .stats-grid > .stat-item:not(.stat-full):first-of-type { border-right: 1px solid var(--border); }

        @media (max-width: 860px) {
          .section-head-stats { grid-template-columns: 1fr !important; gap: 12px !important; }
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
