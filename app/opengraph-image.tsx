import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = "Temir Xotin — Mashinangiz tarixi, bir joyda";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0E1620',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          position: 'relative',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Grid lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            display: 'flex',
          }}
        />

        {/* Coral glow */}
        <div
          style={{
            position: 'absolute',
            right: -80,
            top: '50%',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255,82,48,0.22) 0%, rgba(255,82,48,0.06) 40%, transparent 70%)',
            transform: 'translateY(-50%)',
            display: 'flex',
          }}
        />

        {/* Top label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, zIndex: 1 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#FF5230',
            }}
          />
          <span
            style={{
              color: 'rgba(255,255,255,0.45)',
              fontSize: 14,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            TEMIRXOTIN.UZ · 2026
          </span>
          <div
            style={{
              marginLeft: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(255,82,48,0.15)',
              border: '1px solid rgba(255,82,48,0.35)',
              borderRadius: 999,
              padding: '6px 14px',
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF5230' }} />
            <span style={{ color: '#FF5230', fontSize: 12, letterSpacing: '0.14em' }}>
              FAOL
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, zIndex: 1 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 94,
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 0.88,
              color: '#fff',
            }}
          >
            <span>Mashinangiz</span>
            <span>tarixi —</span>
            <span style={{ color: '#FF5230' }}>bir joyda.</span>
          </div>

          <div
            style={{
              marginTop: 28,
              fontSize: 20,
              color: 'rgba(255,255,255,0.5)',
              maxWidth: 560,
              lineHeight: 1.5,
            }}
          >
            Har bir ta&apos;mir, har bir almashtirish — telefoningizda saqlanadi.
            Mashinani sotsangiz ham, tarix yangi egaga o&apos;tadi.
          </div>
        </div>

        {/* Bottom stats */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: 28,
            zIndex: 1,
          }}
        >
          {[
            { n: '1 248+', l: 'Ulangan mashinalar' },
            { n: '380+', l: 'Ishonchli ustalar' },
            { n: '14', l: "Viloyat bo'ylab" },
            { n: '24/7', l: 'Har doim ochiq' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
              {i > 0 && (
                <div
                  style={{
                    width: 1,
                    height: 36,
                    background: 'rgba(255,255,255,0.12)',
                    margin: '0 40px',
                  }}
                />
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span
                  style={{ color: '#FF5230', fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em' }}
                >
                  {s.n}
                </span>
                <span
                  style={{
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: 12,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}
                >
                  {s.l}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
