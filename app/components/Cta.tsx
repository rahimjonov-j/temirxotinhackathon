'use client';

function CtaIllustration() {
  return (
    <svg
      viewBox="0 0 1200 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* ── Road perspective ── */}
      <path d="M600 480 L200 480 L0 600 L0 480Z" fill="rgba(255,255,255,0.015)"/>
      <path d="M600 480 L1000 480 L1200 600 L1200 480Z" fill="rgba(255,255,255,0.015)"/>

      {/* Horizon glow */}
      <ellipse cx="600" cy="200" rx="500" ry="160"
        fill="none" stroke="rgba(255,82,48,0.06)" strokeWidth="1"/>
      <ellipse cx="600" cy="200" rx="350" ry="110"
        fill="none" stroke="rgba(255,82,48,0.09)" strokeWidth="1"/>
      <ellipse cx="600" cy="200" rx="200" ry="60"
        fill="none" stroke="rgba(255,82,48,0.15)" strokeWidth="1"/>

      {/* Road surface */}
      <path d="M0 400 L1200 400 L1200 480 L0 480Z" fill="rgba(255,255,255,0.025)"/>
      <line x1="0" y1="400" x2="1200" y2="400" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>

      {/* Road center dashes — perspective */}
      {[0,1,2,3,4,5,6].map(i => {
        const y1 = 400 + i * 12;
        const w = 4 + i * 3;
        return <rect key={i} x={600 - w / 2} y={y1} width={w} height={8} fill="rgba(255,255,255,0.08)" rx="1"/>;
      })}

      {/* ── Car silhouette (center, slightly right) ── */}
      <g transform="translate(560, 240)">
        {/* Body */}
        <path
          d="M20 100 L30 100 C34 80, 44 64, 70 56 L140 42 C170 36, 210 32, 240 32 L320 32 C360 34, 400 46, 430 62 L460 74 C474 82, 480 92, 480 100 L480 100"
          stroke="rgba(255,255,255,0.45)" strokeWidth="1.6" strokeLinecap="round" fill="none"
        />
        {/* Cabin roof */}
        <path
          d="M160 56 C190 22, 260 12, 330 12 L400 12 C430 14, 455 30, 466 56"
          stroke="rgba(255,255,255,0.35)" strokeWidth="1.4" strokeLinecap="round" fill="none"
        />
        {/* Windshield line */}
        <line x1="162" y1="52" x2="466" y2="52" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8"/>
        {/* Door lines */}
        <line x1="248" y1="18" x2="248" y2="96" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8"/>
        <line x1="348" y1="16" x2="348" y2="96" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8"/>
        {/* Ground line */}
        <line x1="20" y1="100" x2="480" y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>

        {/* Front wheel */}
        <circle cx="108" cy="100" r="38" stroke="rgba(255,255,255,0.3)" strokeWidth="1.4" fill="none"/>
        <circle cx="108" cy="100" r="22" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none"/>
        <circle cx="108" cy="100" r="5" fill="rgba(255,255,255,0.25)"/>

        {/* Rear wheel */}
        <circle cx="390" cy="100" r="38" stroke="rgba(255,255,255,0.3)" strokeWidth="1.4" fill="none"/>
        <circle cx="390" cy="100" r="22" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none"/>
        <circle cx="390" cy="100" r="5" fill="rgba(255,255,255,0.25)"/>

        {/* Headlights */}
        <rect x="22" y="72" width="18" height="10" rx="3" fill="rgba(255,240,180,0.15)" stroke="rgba(255,240,180,0.3)" strokeWidth="0.8"/>
        {/* Light beam */}
        <path d="M22 77 L-80 60 M22 79 L-80 85" stroke="rgba(255,240,180,0.06)" strokeWidth="12" strokeLinecap="round"/>

        {/* Tail lights */}
        <rect x="462" y="72" width="16" height="10" rx="3" fill="rgba(255,60,60,0.2)" stroke="rgba(255,60,60,0.4)" strokeWidth="0.8"/>
      </g>

      {/* ── SOS phone (right side) ── */}
      <g transform="translate(960, 120)">
        {/* Phone */}
        <rect x="0" y="0" width="72" height="128" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
        <rect x="7" y="10" width="58" height="96" rx="5" fill="rgba(14,22,32,0.8)"/>
        {/* SOS button */}
        <circle cx="36" cy="58" r="22" fill="rgba(255,82,48,0.15)" stroke="#FF5230" strokeWidth="1.2"/>
        <text x="36" y="63" fontFamily="IBM Plex Mono,monospace" fontSize="10" fontWeight="700"
          fill="#FF5230" textAnchor="middle" letterSpacing="2">SOS</text>
        {/* Pulse rings */}
        <circle cx="36" cy="58" r="28" stroke="rgba(255,82,48,0.3)" strokeWidth="1" fill="none" className="cta-pulse cta-pulse-1"/>
        <circle cx="36" cy="58" r="36" stroke="rgba(255,82,48,0.15)" strokeWidth="1" fill="none" className="cta-pulse cta-pulse-2"/>
        {/* Home bar */}
        <rect x="27" y="118" width="18" height="3" rx="1.5" fill="rgba(255,255,255,0.15)"/>
      </g>

      {/* Signal lines from phone to car */}
      <line x1="960" y1="184" x2="860" y2="310"
        stroke="rgba(255,82,48,0.12)" strokeWidth="1" strokeDasharray="6 6"/>
      <line x1="990" y1="184" x2="920" y2="310"
        stroke="rgba(255,82,48,0.08)" strokeWidth="1" strokeDasharray="6 6"/>

      {/* ── Map pin (left side) ── */}
      <g transform="translate(195, 150)">
        <path d="M30 0 C46 0, 60 14, 60 30 C60 50, 30 80, 30 80 C30 80, 0 50, 0 30 C0 14, 14 0, 30 0Z"
          fill="rgba(255,82,48,0.12)" stroke="rgba(255,82,48,0.4)" strokeWidth="1.2"/>
        <circle cx="30" cy="30" r="12" fill="rgba(255,82,48,0.2)" stroke="rgba(255,82,48,0.6)" strokeWidth="1"/>
        <circle cx="30" cy="30" r="5" fill="#FF5230"/>
        {/* Dashed line down */}
        <line x1="30" y1="82" x2="30" y2="130" stroke="rgba(255,82,48,0.25)" strokeWidth="1" strokeDasharray="4 4"/>
      </g>

      {/* ── Operator dot (top left) ── */}
      <g transform="translate(80, 100)">
        <circle cx="28" cy="28" r="28" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
        <circle cx="28" cy="28" r="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
        <circle cx="28" cy="28" r="5" fill="rgba(255,255,255,0.4)"/>
        <line x1="56" y1="28" x2="195" y2="190" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" strokeDasharray="4 5"/>
      </g>

      {/* ── Grid overlay ── */}
      <defs>
        <pattern id="ctaGrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M80 0 L0 0 0 80" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="0.8"/>
        </pattern>
      </defs>
      <rect width="1200" height="480" fill="url(#ctaGrid)"/>

      {/* Corner marks */}
      <line x1="24" y1="24" x2="52" y2="24" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      <line x1="24" y1="24" x2="24" y2="52" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      <line x1="1176" y1="24" x2="1148" y2="24" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      <line x1="1176" y1="24" x2="1176" y2="52" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      <line x1="24" y1="456" x2="52" y2="456" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      <line x1="24" y1="456" x2="24" y2="428" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      <line x1="1176" y1="456" x2="1148" y2="456" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      <line x1="1176" y1="456" x2="1176" y2="428" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
    </svg>
  );
}

export default function Cta() {
  return (
    <section id="download" style={{
      position: 'relative', overflow: 'hidden',
      paddingBlock: 'clamp(72px, 11vw, 140px)',
      background: '#0E1620', color: '#fff',
    }}>
      <CtaIllustration />

      {/* Radial vignette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(14,22,32,0.40) 0%, rgba(14,22,32,0.72) 55%, rgba(14,22,32,0.97) 100%)',
      }} />

      {/* Accent glow center */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%,-50%)',
        width: '60vw', maxWidth: 700, aspectRatio: '1/1',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,82,48,0.08) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 1,
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

        <a
          href="https://media.moshn.uz"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-download-btn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v10M7 14l5 5 5-5"/>
            <line x1="3" y1="21" x2="21" y2="21"/>
          </svg>
          Ilovani yuklab olish
        </a>
      </div>

      <style>{`
        .cta-download-btn {
          display: inline-flex; align-items: center; gap: 10px;
          margin-top: 40px;
          background: var(--accent); color: #fff;
          padding: 15px 32px; border-radius: 14px;
          font-family: var(--f-body); font-weight: 600;
          font-size: clamp(14px, 1.4vw, 16px);
          letter-spacing: -0.01em; text-decoration: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .cta-download-btn:hover { opacity: 0.88; transform: translateY(-2px); }
        .cta-download-btn:active { opacity: 0.75; transform: translateY(0); }
        @media (max-width: 640px) {
          .cta-text { padding-inline: 16px !important; }
          .cta-download-btn { display: none !important; }
        }
        @keyframes cta-pulse-anim {
          0%   { transform: scale(1);   opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .cta-pulse { transform-origin: 996px 178px; animation: cta-pulse-anim 2.8s ease-out infinite; }
        .cta-pulse-2 { animation-delay: 1s; }
      `}</style>
    </section>
  );
}
