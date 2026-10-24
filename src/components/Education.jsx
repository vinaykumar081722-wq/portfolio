import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <GraduationCap size={14} />
            <span>Academic Milestones</span>
          </div>
          <h2 className="section-title">Education &amp; Qualifications</h2>
          <p className="section-subtitle">
            Formal engineering foundations in Computer Science, mathematics, and analytical problem solving.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {educationData.map((edu, idx) => {
            const isCurrent = idx === 0;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 'var(--radius-xl)',
                  border: isCurrent
                    ? '1.5px solid rgba(56, 189, 248, 0.4)'
                    : '1px solid var(--border-subtle)',
                  boxShadow: isCurrent ? 'var(--shadow-glow-cyan)' : 'var(--shadow-sm)',
                  position: 'relative'
                }}
              >
                {/* Current Degree Badge */}
                {isCurrent && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      right: '1.25rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px',
                      background: 'rgba(56, 189, 248, 0.15)',
                      border: '1px solid rgba(56, 189, 248, 0.35)',
                      color: 'var(--cyan-400)',
                      fontSize: '0.75rem',
                      fontWeight: 700
                    }}
                  >
                    <Star size={12} fill="var(--cyan-400)" />
                    <span>Current Degree</span>
                  </div>
                )}

                <div>
                  <div
                    style={{
                      width: '3.25rem',
                      height: '3.25rem',
                      borderRadius: '0.75rem',
                      background: isCurrent ? 'rgba(56, 189, 248, 0.15)' : 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <GraduationCap size={22} color={isCurrent ? 'var(--cyan-400)' : '#818cf8'} />
                  </div>

                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: 'var(--cyan-400)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {edu.period}
                  </span>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginTop: '0.25rem',
                      marginBottom: '0.5rem',
                      lineHeight: 1.3
                    }}
                  >
                    {edu.degree}
                  </h3>

                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--text-accent)',
                      marginBottom: '0.25rem'
                    }}
                  >
                    {edu.institution}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.825rem', marginBottom: '1.25rem' }}>
                    <MapPin size={13} color="var(--cyan-400)" />
                    <span>{edu.location}</span>
                  </div>

                  {/* Highlights list */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {edu.highlights.map((h, hIdx) => (
                      <div
                        key={hIdx}
                        style={{
                          fontSize: '0.85rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.55,
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem'
                        }}
                      >
                        <span style={{ color: 'var(--cyan-400)', fontWeight: 700 }}>•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Score Pill */}
                <div
                  style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    Academic Record:
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: isCurrent ? '#38bdf8' : '#34d399',
                      background: isCurrent ? 'rgba(56, 189, 248, 0.1)' : 'rgba(52, 211, 153, 0.1)',
                      border: `1px solid ${isCurrent ? 'rgba(56, 189, 248, 0.3)' : 'rgba(52, 211, 153, 0.3)'}`,
                      padding: '0.3rem 0.75rem',
                      borderRadius: '0.4rem'
                    }}
                  >
                    {edu.score}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
