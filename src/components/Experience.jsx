import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, Terminal } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <Briefcase size={14} />
            <span>Work &amp; Industry Exposure</span>
          </div>
          <h2 className="section-title">Development Experience</h2>
          <p className="section-subtitle">
            Hands-on software development experience gained through verified internship work and team collaboration.
          </p>
        </div>

        {/* Experience Timeline */}
        <div style={{ maxWidth: '840px', margin: '0 auto', position: 'relative' }}>
          {/* Glowing Vertical Line */}
          <div
            style={{
              position: 'absolute',
              top: '2rem',
              bottom: '2rem',
              left: '1.75rem',
              width: '2px',
              background: 'linear-gradient(180deg, #38bdf8 0%, #6366f1 50%, rgba(99, 102, 241, 0.1) 100%)',
              boxShadow: '0 0 10px rgba(56, 189, 248, 0.4)',
              zIndex: 1
            }}
            className="timeline-line"
          />

          {experienceData.map((exp) => (
            <div
              key={exp.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '3.5rem 1fr',
                gap: '1.5rem',
                position: 'relative',
                zIndex: 2,
                marginBottom: '2rem'
              }}
              className="timeline-item"
            >
              {/* Timeline Marker Node */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingTop: '0.5rem'
                }}
              >
                <div
                  style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    borderRadius: '50%',
                    background: 'var(--bg-card)',
                    border: '2px solid var(--cyan-400)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <Building size={20} color="var(--cyan-400)" />
                </div>
              </div>

              {/* Experience Card */}
              <div
                className="glass-card"
                style={{
                  padding: '2rem',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                {/* Header row */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.4rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)'
                        }}
                      >
                        {exp.role}
                      </h3>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          padding: '0.25rem 0.65rem',
                          borderRadius: '999px',
                          background: 'rgba(56, 189, 248, 0.12)',
                          color: 'var(--cyan-400)',
                          border: '1px solid rgba(56, 189, 248, 0.3)'
                        }}
                      >
                        {exp.statusBadge}
                      </span>
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: 'var(--text-accent)',
                        marginTop: '0.25rem'
                      }}
                    >
                      {exp.company}
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      gap: '0.25rem',
                      color: 'var(--text-muted)',
                      fontSize: '0.85rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)' }}>
                      <Calendar size={14} color="var(--cyan-400)" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  {exp.summary}
                </p>

                {/* Key Highlights list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
                  {exp.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        fontSize: '0.925rem',
                        color: 'var(--text-primary)',
                        lineHeight: 1.6
                      }}
                    >
                      <CheckCircle2
                        size={17}
                        color="#38bdf8"
                        style={{ flexShrink: 0, marginTop: '0.2rem' }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Applied Technologies */}
                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Core Competencies Applied
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          padding: '0.3rem 0.75rem',
                          borderRadius: '0.4rem',
                          background: 'rgba(15, 23, 42, 0.7)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
