'use client';

export default function Cta() {
  return (
    <section id="download" style={{
      position: 'relative', overflow: 'hidden',
      paddingBlock: 'clamp(120px, 16vw, 200px)',
      background: 'var(--ink)', color: '#fff',
    }}>
      {/* Chevrolet Cobalt — O'zbekistonda eng ko'p uchraydigan GM mashina */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1800&q=80&auto=format&fit=crop&crop=center"
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 60%',
          opacity: 0.38, zIndex: 0,
          filter: 'saturate(0.7) contrast(1.1)',
        }}
      />
      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(14,22,32,0.6) 65%, rgba(14,22,32,0.97) 100%), linear-gradient(180deg, rgba(14,22,32,0.5) 0%, transparent 35%, transparent 65%, rgba(14,22,32,0.7) 100%)',
      }} />

      <div className="container cta-text" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 880, marginInline: 'auto' }}>
        <span style={{
          fontFamily: 'var(--f-mono)', fontWeight: 500, fontSize: 11,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.65)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', marginRight: 10 }} />
          Tez kunda
        </span>

        <h2 style={{
          marginTop: 18, color: '#fff',
          fontSize: 'clamp(2.8rem, 6.4vw, 5.2rem)',
          fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 1,
        }}>
          Mashinangiz tarixini<br />
          <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 500 }}>bugun boshlang.</span>
        </h2>

        <p style={{
          margin: '28px auto 0', maxWidth: 500,
          color: 'rgba(255,255,255,0.7)',
          fontSize: 'clamp(15px, 1.5vw, 17px)', fontWeight: 400, lineHeight: 1.6,
        }}>
          Texpasportni kameraga ko'rsating — mashina ma'lumotlari avtomatik saqlanadi. Tamom. Boshqa hech narsa kerak emas.
        </p>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .cta-text { padding-inline: 16px !important; }
        }
      `}</style>
    </section>
  );
}
