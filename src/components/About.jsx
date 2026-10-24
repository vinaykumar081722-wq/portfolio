import React from 'react';
import { Code2, Cpu, Sparkles, GraduationCap, Award, Briefcase, MapPin, CheckCircle } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

export default function About() {
  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={24} color="#38bdf8" />;
      case 'Cpu':
        return <Cpu size={24} color="#818cf8" />;
      case 'Sparkles':
        return <Sparkles size={24} color="#c084fc" />;
      default:
        return <Code2 size={24} color="#38bdf8" />;
    }
  };

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <GraduationCap size={14} />
            <span>Background &amp; Philosophy</span>
          </div>
          <h2 className="section-title">A Little About Me</h2>
          <p className="section-subtitle">
            CSE undergraduate with an aptitude for turning software ideas into structured, responsive, and functional code.
          </p>
        </div>

        {/* Top Grid: Bio Narrative & Profile Highlights */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '3.5rem'
          }}
        >
          {/* Narrative Text */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {aboutData.intro.map((paragraph, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: '1.025rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.75
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Verified Quick Attributes */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '0.85rem',
                marginTop: '1.75rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                <CheckCircle size={16} color="#38bdf8" />
                <span>Full Stack &amp; REST APIs</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                <CheckCircle size={16} color="#38bdf8" />
                <span>Data Analytics &amp; NLP</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                <CheckCircle size={16} color="#38bdf8" />
                <span>Strong OOP (Java &amp; Python)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                <CheckCircle size={16} color="#38bdf8" />
                <span>Database Design &amp; Queries</span>
              </div>
            </div>
          </div>

          {/* Profile Card / Highlights Panel */}
          <div
            className="glass-card"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              border: '1px solid rgba(56, 189, 248, 0.2)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '1rem',
                  background: 'var(--grad-cyan-indigo)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-glow-cyan)'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: '#ffffff'
                  }}
                >
                  VK
                </span>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    lineHeight: 1.2
                  }}
                >
                  {personalInfo.name}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.825rem', marginTop: '0.2rem' }}>
                  <MapPin size={13} color="var(--cyan-400)" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                paddingTop: '0.75rem',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              {aboutData.quickStats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(15, 23, 42, 0.5)',
                    padding: '0.85rem',
                    borderRadius: '0.75rem',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginTop: '0.2rem'
                    }}
                  >
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                borderRadius: '0.75rem',
                padding: '0.85rem 1rem',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem'
              }}
            >
              <Briefcase size={16} color="var(--cyan-400)" />
              <span>Seeking Software Engineer &amp; Full Stack Fresher Roles</span>
            </div>
          </div>
        </div>

        {/* Three Pillar Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {aboutData.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
            >
              <div
                style={{
                  width: '3.25rem',
                  height: '3.25rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
                }}
              >
                {getPillarIcon(pillar.icon)}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)'
                }}
              >
                {pillar.title}
              </h3>

              <p
                style={{
                  fontSize: '0.925rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65
                }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
