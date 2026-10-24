import React from 'react';
import { Award, Sparkles, BarChart2, Briefcase, LineChart, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const getCertIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles size={24} color="#c084fc" />;
      case 'BarChart2': return <BarChart2 size={24} color="#38bdf8" />;
      case 'Briefcase': return <Briefcase size={24} color="#60a5fa" />;
      case 'LineChart': return <LineChart size={24} color="#34d399" />;
      default: return <Award size={24} color="#38bdf8" />;
    }
  };

  return (
    <section id="certifications" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <Award size={14} />
            <span>Credentials &amp; Training</span>
          </div>
          <h2 className="section-title">Certifications &amp; Virtual Experiences</h2>
          <p className="section-subtitle">
            Industry-aligned learning programs and practical engineering simulations completed alongside academic studies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '3.25rem',
                      height: '3.25rem',
                      borderRadius: '0.75rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getCertIcon(cert.icon)}
                  </div>

                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px',
                      background: 'rgba(56, 189, 248, 0.1)',
                      color: 'var(--cyan-400)',
                      border: '1px solid rgba(56, 189, 248, 0.25)'
                    }}
                  >
                    {cert.badgeType}
                  </span>
                </div>

                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                  {cert.issuer}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginTop: '0.2rem',
                    marginBottom: '0.65rem',
                    lineHeight: 1.3
                  }}
                >
                  {cert.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1rem'
                  }}
                >
                  {cert.description}
                </p>
              </div>

              {/* Skills tags */}
              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Key Areas Covered:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {cert.skillsCovered.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '0.3rem',
                        background: 'rgba(15, 23, 42, 0.7)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
