import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Eye, ExternalLink, Terminal, Code2, Database, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, heroRoles } from '../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  // Typewriter effect for cycling roles
  useEffect(() => {
    const currentRole = heroRoles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        setTypingSpeed(100);

        if (displayedText.length + 1 === currentRole.length) {
          // Pause when complete word is typed
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        // Backspacing
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        setTypingSpeed(45);

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % heroRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, typingSpeed]);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6.5rem',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Gradient Orbs */}
      <div
        className="glow-orb"
        style={{
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, transparent 70%)',
          top: '15%',
          left: '-10%',
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          top: '30%',
          right: '-10%',
          animationDelay: '-3s'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Profile & Headline */}
          <div>
            {/* Class of 2027 Badge */}
            <div className="badge-pill" style={{ marginBottom: '1.25rem' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#38bdf8', display: 'inline-block' }} />
              <span>{personalInfo.badge}</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5.2vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.035em',
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}
            >
              Hi, I&apos;m <span className="text-gradient">{personalInfo.displayName}</span>
              <br />
              <span style={{ fontSize: '0.85em', color: 'var(--text-primary)' }}>
                {personalInfo.heroHeadline}
              </span>
            </h1>

            {/* Dynamic Animated Role Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid var(--border-subtle)',
                padding: '0.5rem 1rem',
                borderRadius: '0.625rem',
                marginBottom: '1.5rem',
                backdropFilter: 'blur(8px)'
              }}
            >
              <Terminal size={17} color="var(--cyan-400)" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--cyan-400)'
                }}
              >
                {displayedText}
                <span style={{ opacity: isDeleting ? 0.4 : 1, animation: 'pulseGlow 1s infinite' }}>|</span>
              </span>
            </div>

            {/* Concise Introduction */}
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '540px',
                marginBottom: '2rem'
              }}
            >
              {personalInfo.bioShort} A motivated Computer Science undergraduate at{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                Christu Jyothi Institute of Technology and Science
              </strong>
              , ready to contribute to software development, full-stack, and data engineering teams.
            </p>

            {/* CTAs and Social Links */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem'
              }}
            >
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="btn-primary"
              >
                <span>Explore My Projects</span>
                <Code2 size={17} />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Vinay_Kumar_Resume.pdf"
                className="btn-secondary"
                title="Download verified resume PDF"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>

              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: '0.8rem 1rem' }}
                title="Preview resume in new tab"
                aria-label="Preview resume in new tab"
              >
                <Eye size={16} />
              </a>
            </div>

            {/* Social Icons & Quick Validation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                Connect with me:
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon"
                  aria-label="Vinay Kumar GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon"
                  aria-label="Vinay Kumar LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Code Terminal & Floating Tech Cards */}
          <div style={{ position: 'relative' }}>
            {/* Floating Tech Chips around Terminal */}
            <div
              className="animate-float"
              style={{
                position: 'absolute',
                top: '-1.5rem',
                right: '1rem',
                background: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                padding: '0.45rem 0.9rem',
                borderRadius: '999px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: 'var(--shadow-glow-cyan)',
                zIndex: 20,
                backdropFilter: 'blur(8px)'
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#f8fafc' }}>
                React &amp; Vite
              </span>
            </div>

            <div
              className="animate-float"
              style={{
                position: 'absolute',
                bottom: '-1.25rem',
                left: '-1rem',
                background: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                padding: '0.45rem 0.9rem',
                borderRadius: '999px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: 'var(--shadow-glow-indigo)',
                zIndex: 20,
                animationDelay: '-2.5s',
                backdropFilter: 'blur(8px)'
              }}
            >
              <Sparkles size={14} color="#8b5cf6" />
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#f8fafc' }}>
                Python &amp; ML Similarity
              </span>
            </div>

            {/* Developer Code Terminal Card */}
            <div
              className="glass-card"
              style={{
                padding: 0,
                borderRadius: '1.25rem',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(56, 189, 248, 0.12)'
              }}
            >
              {/* Terminal Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 1.25rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  background: 'rgba(10, 16, 30, 0.7)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ef4444' }} />
                  <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#f59e0b' }} />
                  <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#10b981' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      marginLeft: '0.5rem'
                    }}
                  >
                    vinay_profile.py
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }} />
                  <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 600 }}>Active</span>
                </div>
              </div>

              {/* Code Snippet */}
              <div
                style={{
                  padding: '1.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  lineHeight: 1.68,
                  overflowX: 'auto',
                  background: 'rgba(5, 9, 18, 0.8)'
                }}
              >
                <div>
                  <span style={{ color: '#c084fc' }}>class</span>{' '}
                  <span style={{ color: '#38bdf8', fontWeight: 700 }}>Developer</span>:
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#c084fc' }}>def</span>{' '}
                  <span style={{ color: '#60a5fa' }}>__init__</span>(self):
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <span style={{ color: '#94a3b8' }}>self.name</span> ={' '}
                  <span style={{ color: '#34d399' }}>&quot;Bejadi Vinay Kumar&quot;</span>
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <span style={{ color: '#94a3b8' }}>self.education</span> ={' '}
                  <span style={{ color: '#34d399' }}>&quot;B.Tech CSE (2023-2027)&quot;</span>
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <span style={{ color: '#94a3b8' }}>self.college</span> ={' '}
                  <span style={{ color: '#34d399' }}>&quot;Christu Jyothi Inst. of Tech&quot;</span>
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <span style={{ color: '#94a3b8' }}>self.cgpa</span> ={' '}
                  <span style={{ color: '#f59e0b', fontWeight: 600 }}>7.9</span>
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <span style={{ color: '#94a3b8' }}>self.skills</span> = [
                </div>
                <div style={{ paddingLeft: '3.75rem', color: '#38bdf8' }}>
                  &quot;Java&quot;, &quot;Python&quot;, &quot;React&quot;, &quot;MySQL&quot;, &quot;Streamlit&quot;
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>]</div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <span style={{ color: '#94a3b8' }}>self.internship</span> ={' '}
                  <span style={{ color: '#34d399' }}>&quot;Plasmid (Full Stack Intern)&quot;</span>
                </div>
                <div style={{ paddingLeft: '1.25rem', marginTop: '0.4rem' }}>
                  <span style={{ color: '#c084fc' }}>def</span>{' '}
                  <span style={{ color: '#60a5fa' }}>ready_for_impact</span>(self):
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <span style={{ color: '#c084fc' }}>return</span>{' '}
                  <span style={{ color: '#38bdf8' }}>True</span>{' '}
                  <span style={{ color: '#64748b' }}># Eager to solve problems</span>
                </div>
              </div>

              {/* Terminal Bottom Bar */}
              <div
                style={{
                  padding: '0.85rem 1.25rem',
                  borderTop: '1px solid var(--border-subtle)',
                  background: 'rgba(10, 16, 30, 0.7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={14} color="#10b981" />
                  <span>Syntax checked · Ready for production</span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--cyan-400)' }}>
                  UTF-8
                </span>
              </div>
            </div>

            {/* Quick Floating Tech Grid under terminal */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '0.65rem',
                marginTop: '1.25rem'
              }}
            >
              {['Java', 'Python', 'React', 'MongoDB'].map((tech) => (
                <div
                  key={tech}
                  style={{
                    background: 'rgba(15, 23, 42, 0.65)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '0.5rem',
                    padding: '0.45rem',
                    textAlign: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s ease'
                  }}
                  className="hover:border-cyan-400"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '3.5rem',
            gap: '0.35rem'
          }}
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              color: 'var(--text-muted)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
            className="hover:text-cyan-400"
            aria-label="Scroll to About Me section"
          >
            <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Explore
            </span>
            <div style={{ animation: 'float 2s infinite', marginTop: '0.2rem' }}>
              <ArrowDown size={17} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
