import React from 'react';
import { Download, Mail, Heart, Sparkles, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '4rem 0 2rem 0',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          {/* Col 1: Brand & Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '2.4rem',
                  height: '2.4rem',
                  borderRadius: '0.5rem',
                  background: 'var(--grad-cyan-indigo)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  color: '#fff',
                  fontFamily: 'var(--font-display)'
                }}
              >
                VK
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {personalInfo.name}
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '320px', marginBottom: '1.25rem' }}>
              Computer Science &amp; Engineering undergraduate (Class of 2027) building responsive web applications and machine learning solutions.
            </p>

            <a
              href={personalInfo.resumePath}
              download="Vinay_Kumar_Resume.pdf"
              className="btn-secondary"
              style={{ padding: '0.55rem 1rem', fontSize: '0.825rem' }}
            >
              <Download size={14} />
              <span>Download Resume PDF</span>
            </a>
          </div>

          {/* Col 2: Navigation Shortcuts */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Navigation
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.875rem' }}>
              <a href="#home" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} className="hover:text-cyan-400">Home</a>
              <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} className="hover:text-cyan-400">About Me</a>
              <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} className="hover:text-cyan-400">Skills</a>
              <a href="#experience" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} className="hover:text-cyan-400">Experience</a>
              <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} className="hover:text-cyan-400">Projects</a>
              <a href="#education" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} className="hover:text-cyan-400">Education</a>
              <a href="#certifications" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} className="hover:text-cyan-400">Certifications</a>
              <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} className="hover:text-cyan-400">Contact</a>
            </div>
          </div>

          {/* Col 3: Education & Affiliation */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Institution &amp; Batch
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
              <strong>{personalInfo.college}</strong>
              <br />
              Department of Computer Science &amp; Engineering
              <br />
              Graduation: <strong>2027</strong> · CGPA: <strong>{personalInfo.cgpa}</strong>
            </p>
            <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
              Telangana State, India
            </div>
          </div>

          {/* Col 4: Profiles & Back to Top */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Social &amp; Profiles
            </h4>
            <div style={{ display: 'flex', gap: '0.65rem', marginBottom: '1.5rem' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-icon"
                title="Send Email"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="btn-secondary"
              style={{ padding: '0.55rem 1rem', fontSize: '0.825rem' }}
            >
              <ArrowUp size={14} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.825rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Bejadi Vinay Kumar. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Crafted with React, Vite &amp; Clean Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
