'use client';

import { useState } from 'react';

const features1 = [
  { text: 'SOS tugmasi — 24/7 operator', active: true },
  { text: 'Mashina belgisi tahlili', active: true },
  { text: 'Mutaxassis yo\'naltirish', active: true },
  { text: 'Avtomatik to\'lov tizimi', active: true },
  { text: 'Evakuator va qo\'shimcha xizmatlar', active: true },
  { text: 'Hamyon va balans boshqaruvi', active: true },
];

const features2 = [
  { text: 'Standart obuna imkoniyatlari', active: true },
  { text: 'Aksessuarlar do\'koni', active: false },
  { text: 'AI asosida tavsiyalar', active: false },
  { text: 'Tuning xizmatlari katalogi', active: false },
  { text: 'Yaqin atrofdagi moyka va yoqilg\'i', active: false },
  { text: 'Kengaytirilgan statistika', active: false },
];

function CheckIcon({ active }: { active: boolean }) {
  return active ? (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF5230" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ) : (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.25 }}>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  );
}

function Card1() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="pricing-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1,
        background: hovered ? '#0E1620' : 'var(--bg)',
        border: `1px solid ${hovered ? 'var(--ink)' : 'var(--border)'}`,
        borderRadius: 16,
        padding: 'clamp(20px,2.5vw,32px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        transition: 'background 0.35s ease, border-color 0.35s ease, color 0.35s ease',
        color: hovered ? '#fff' : 'var(--ink)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow on hover */}
      {hovered && (
        <div style={{
          position: 'absolute', top: -60, right: -60,
          width: 220, height: 220, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,82,48,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
      )}

      {/* Top */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <span className="pricing-card-label" style={{
            fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: hovered ? 'rgba(255,255,255,0.5)' : 'var(--ink-mute)',
            transition: 'color 0.35s ease',
          }}>Standart</span>
          <span className="pricing-card-badge" style={{
            background: 'rgba(255,82,48,0.12)', color: 'var(--accent)',
            border: '1px solid rgba(255,82,48,0.25)',
            borderRadius: 999, padding: '4px 12px',
            fontFamily: 'var(--f-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase',
          }}>Hozir mavjud</span>
        </div>

        {/* Price */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, lineHeight: 1 }}>
          <span className="pricing-card-price" style={{
            fontFamily: 'var(--f-display)', fontWeight: 600,
            fontSize: 'clamp(2rem,3.2vw,2.8rem)',
            letterSpacing: '-0.045em',
            color: hovered ? '#fff' : 'var(--ink)',
            transition: 'color 0.35s ease',
          }}>
            9 <span style={{ color: 'var(--accent)' }}>900</span>
          </span>
          <div className="pricing-card-unit" style={{ paddingBottom: 6 }}>
            <div style={{
              fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.06em',
              color: hovered ? 'rgba(255,255,255,0.5)' : 'var(--ink-mute)',
              transition: 'color 0.35s ease',
            }}>so&apos;m</div>
            <div style={{
              fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.1em',
              color: hovered ? 'rgba(255,255,255,0.35)' : 'var(--ink-soft)',
              transition: 'color 0.35s ease',
            }}>/ oy</div>
          </div>
        </div>

        <p className="pricing-card-desc" style={{
          marginTop: 14,
          fontFamily: 'var(--f-body)', fontSize: 13, lineHeight: 1.6,
          color: hovered ? 'rgba(255,255,255,0.45)' : 'var(--ink-mute)',
          maxWidth: '34ch',
          transition: 'color 0.35s ease',
        }}>
          Yo&apos;lda va uyda — istalgan vaziyatda mutaxassis yoningizda.
        </p>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: hovered ? 'rgba(255,255,255,0.08)' : 'var(--border)', transition: 'background 0.35s ease' }} />

      {/* Features */}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {features1.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ flexShrink: 0 }}><CheckIcon active={f.active} /></span>
            <span className="pricing-card-feature-text" style={{
              fontFamily: 'var(--f-body)', fontSize: 13,
              color: hovered ? 'rgba(255,255,255,0.7)' : 'var(--ink)',
              transition: 'color 0.35s ease',
            }}>{f.text}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#download"
        className="pricing-card-cta"
        style={{
          marginTop: 'auto',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          background: 'var(--accent)', color: '#fff',
          borderRadius: 10, padding: '11px 20px',
          fontFamily: 'var(--f-body)', fontWeight: 600, fontSize: 14,
          letterSpacing: '-0.01em', textDecoration: 'none',
          transition: 'opacity 0.2s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        Obuna bo&apos;lish
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/>
        </svg>
      </a>
    </div>
  );
}

function Card2() {
  const [revealed, setRevealed] = useState(false);
  const activeFeatures = features2.filter(f => f.active);
  const comingSoonFeatures = features2.filter(f => !f.active);

  return (
    <div className="pricing-card" style={{
      flex: 1,
      background: 'var(--bg-2)',
      border: '1px solid var(--border)',
      borderRadius: 16,
      padding: 'clamp(20px,2.5vw,32px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      opacity: 0.7,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Lock overlay hint */}
      <div style={{
        position: 'absolute', top: 20, right: 20,
        width: 32, height: 32, borderRadius: '50%',
        background: 'var(--bg)', border: '1px solid var(--border)',
        display: 'grid', placeItems: 'center',
      }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      </div>

      {/* Top */}
      <div>
        <div style={{ marginBottom: 20 }}>
          <span style={{
            fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'var(--ink-mute)',
          }}>Pro</span>
        </div>

        {/* Price locked */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, lineHeight: 1 }}>
          <div style={{
            fontFamily: 'var(--f-display)', fontWeight: 600,
            fontSize: 'clamp(2rem,3.2vw,2.8rem)',
            letterSpacing: '-0.045em', color: 'var(--ink-soft)',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            {['▬','▬▬▬','▬▬'].map((b, i) => (
              <span key={i} style={{ opacity: 0.2, fontSize: '0.5em', letterSpacing: 2 }}>{b}</span>
            ))}
          </div>
        </div>

        <p style={{
          marginTop: 14,
          fontFamily: 'var(--f-body)', fontSize: 13, lineHeight: 1.6,
          color: 'var(--ink-mute)', maxWidth: '34ch',
        }}>
          Kengaytirilgan imkoniyatlar bilan — do&apos;kon, AI va tuning.
        </p>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Features */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Active features always visible */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {activeFeatures.map((f, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ flexShrink: 0 }}><CheckIcon active={f.active} /></span>
              <span style={{ fontFamily: 'var(--f-body)', fontSize: 13, color: 'var(--ink)' }}>{f.text}</span>
            </li>
          ))}
        </ul>

        {/* Spoiler toggle */}
        <button
          onClick={() => setRevealed(r => !r)}
          style={{
            display: 'flex', alignItems: 'center', gap: 7,
            background: 'none', border: 'none', padding: '4px 0',
            fontFamily: 'var(--f-mono)', fontSize: 9, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--ink-soft)',
            cursor: 'pointer', width: 'fit-content',
            transition: 'color 0.2s ease',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            style={{ transform: revealed ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}>
            <polyline points="9 18 15 12 9 6"/>
          </svg>
          {revealed ? 'Yashirish' : `Rejalashtirilgan (+${comingSoonFeatures.length})`}
        </button>

        {/* Spoiler content */}
        {revealed && (
          <div style={{
            borderRadius: 10,
            border: '1px dashed var(--border)',
            padding: '12px 14px',
            background: 'rgba(0,0,0,0.03)',
          }}>
            <div style={{
              fontFamily: 'var(--f-mono)', fontSize: 8.5, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--ink-soft)',
              marginBottom: 10, opacity: 0.7,
            }}>
              Aniq emas — rejalashtirilmoqda
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {comingSoonFeatures.map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, opacity: 0.55 }}>
                  <span style={{ flexShrink: 0 }}><CheckIcon active={false} /></span>
                  <span style={{ fontFamily: 'var(--f-body)', fontSize: 13, color: 'var(--ink-soft)' }}>{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* CTA disabled */}
      <div style={{
        marginTop: 'auto',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        background: 'var(--bg)', color: 'var(--ink-soft)',
        border: '1px solid var(--border)',
        borderRadius: 10, padding: '11px 20px',
        fontFamily: 'var(--f-body)', fontWeight: 600, fontSize: 14,
        letterSpacing: '-0.01em', cursor: 'not-allowed',
      }}>
        Tez kunda
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section
      id="narxlar"
      style={{
        background: 'var(--bg-2)',
        borderTop: '1px solid var(--border)',
        paddingBlock: 'var(--section-py)',
      }}
    >
      <div className="container">
        {/* Head */}
        <div className="section-head section-head-price">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span className="mono-label"><span className="dot" />Narxlar</span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--ink-soft)', textTransform: 'uppercase' }}>§ 05 — Tariflar</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,3.2rem)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Oddiy narx —{' '}
            <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 500 }}>to&apos;liq xizmat.</span>
          </h2>
        </div>

        {/* Cards wrapper */}
        <div className="pricing-wrap">
          <Card1 />

          {/* SOON divider */}
          <div className="pricing-soon">
            <div className="pricing-soon-line" />
            <div className="pricing-soon-badge">
              <span style={{ color: 'var(--accent)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--f-mono)' }}>✦</span>
              <span>soon</span>
              <span style={{ color: 'var(--accent)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--f-mono)' }}>✦</span>
            </div>
            <div className="pricing-soon-line" />
          </div>

          <Card2 />
        </div>

        {/* Note */}
        <p style={{
          marginTop: 'clamp(20px,3vw,32px)',
          textAlign: 'center',
          fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'var(--ink-soft)',
        }}>
          Obuna bekor qilish — istalgan vaqt · Hech qanday yashirin to&apos;lov yo&apos;q
        </p>
      </div>

      <style>{`
        .pricing-wrap {
          display: flex;
          align-items: stretch;
          gap: 0;
          margin-top: clamp(32px,4vw,56px);
        }
        .pricing-soon {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 clamp(16px,2.5vw,32px);
          flex-shrink: 0;
        }
        .pricing-soon-line {
          width: 1px;
          flex: 1;
          background: var(--border);
          max-height: 80px;
        }
        .pricing-soon-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 14px 12px;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--bg);
          font-family: var(--f-display);
          font-weight: 600;
          font-size: clamp(0.85rem,1.2vw,1.05rem);
          letter-spacing: -0.01em;
          color: var(--ink);
          white-space: nowrap;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          user-select: none;
        }

        @media (max-width: 860px) {
          .section-head-price { grid-template-columns: 1fr !important; gap: 12px !important; }
          .pricing-wrap {
            flex-direction: column;
          }
          .pricing-soon {
            flex-direction: row;
            padding: clamp(12px,3vw,20px) 0;
          }
          .pricing-soon-line {
            width: auto; height: 1px; flex: 1; max-height: unset;
          }
          .pricing-soon-badge {
            writing-mode: horizontal-tb;
            padding: 10px 20px;
          }
        }
      `}</style>
    </section>
  );
}
