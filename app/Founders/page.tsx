'use client';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const team = [
  {
    name: "Mirzo Ulug'bek Xudoyberdiyev",
    role: 'Founder · Technician',
    image: "/mirzoulug'bek.webp",
    objectPosition: 'center',
  },
  {
    name: 'Javohirbek Rahimjonov',
    role: 'UI/UX Designer',
    image: '/Javohir.webp',
    objectPosition: 'center',
  },
  {
    name: 'MuhammadNurulloh Ergashev',
    role: 'Developer',
    image: '/muhhamadnuruloh.webp',
    objectPosition: 'center',
  },
  {
    name: 'Dostonbek Solijonov',
    role: 'Sales Manager',
    image: '/Dostonbek.webp',
    objectPosition: 'center',
  },
  {
    name: 'Azamjon Nazirov',
    role: 'Data Analyst',
    image: '/azamjon.webp',
    objectPosition: 'top',
  },
];

export default function FounderPage() {
  return (
    <>
      <Nav />
      <main style={{ minHeight: '80vh', padding: '80px 0 80px' }}>
        <div className="container" style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>

          <p style={{
            fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14,
          }}>
            Bizning jamoa
          </p>

          <h1 style={{
            fontFamily: 'var(--f-display)', fontSize: 'clamp(32px, 6vw, 54px)',
            fontWeight: 700, color: 'var(--ink)', lineHeight: 1.1,
            letterSpacing: '-0.03em', marginBottom: 12,
          }}>
            Chopildi Team🪓
          </h1>

          <p style={{
            fontFamily: 'var(--f-body)', fontSize: 17, color: 'var(--ink-mute)',
            maxWidth: 500, lineHeight: 1.65, marginBottom: 64,
          }}>
            Moshn ni hayotga tadbiq etgan jamoa — siz uchun yo&apos;lda eng yaxshi tajribani yaratadi.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 28,
          }}>
            {team.map((member) => (
              <div key={member.name} style={{
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                borderRadius: 18,
                overflow: 'hidden',
                width: 260,
                flexShrink: 0,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '100%', aspectRatio: '1 / 1',
                  background: 'var(--border)',
                  overflow: 'hidden',
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: member.objectPosition, display: 'block' }}
                  />
                </div>
                <div style={{ padding: '20px 24px 24px' }}>
                  <p style={{
                    fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: 17,
                    color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 7, lineHeight: 1.3,
                  }}>
                    {member.name}
                  </p>
                  <p style={{
                    fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: 'var(--accent)',
                  }}>
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
