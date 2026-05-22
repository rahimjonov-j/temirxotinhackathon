'use client';

export default function Cta() {
  return (
    <section id="download" style={{
      position: 'relative', overflow: 'hidden',
      paddingBlock: 'clamp(72px, 11vw, 140px)',
      background: '#0E1620', color: '#fff',
    }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/cobalt.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 55%',
          opacity: 0.22, zIndex: 0,
          filter: 'grayscale(0.4) contrast(1.15)',
          mixBlendMode: 'luminosity',
        }}
      />
      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(14,22,32,0.55) 0%, rgba(14,22,32,0.82) 60%, rgba(14,22,32,0.98) 100%)',
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
          fontSize: 'clamp(1.9rem, 4.2vw, 3.8rem)',
          fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 1,
        }}>
          Yo&apos;lda qolsangiz —<br />
          <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 500 }}>bir tugma yetarli.</span>
        </h2>

        <p style={{
          margin: '28px auto 0', maxWidth: 500,
          color: 'rgba(255,255,255,0.7)',
          fontSize: 'clamp(15px, 1.5vw, 17px)', fontWeight: 400, lineHeight: 1.6,
        }}>
          SOS tugmasini bosing — operator darhol aloqaga chiqadi, muammoni aniqlab, kerakli mutaxassisni yuboradi. Evakuator, mexanik, elektrik — hammasi bir ilovada.
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
