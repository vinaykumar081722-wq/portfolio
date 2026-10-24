import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles, MessageSquare } from 'lucide-react';

export default function Navbar({ activeSection, currentTheme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'var(--bg-glass-nav)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Personal VK Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
          }}
          aria-label="Vinay Kumar Portfolio Home"
        >
          <div
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '0.625rem',
              background: 'linear-gradient(135deg, #0f172a, #020617)',
              border: '1.5px solid rgba(56, 189, 248, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(56, 189, 248, 0.25)',
              transition: 'all 0.3s ease',
            }}
            className="hover:scale-105"
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.1rem',
                background: 'var(--grad-cyan-indigo)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.05em'
              }}
            >
              VK
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.05rem',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1
              }}
            >
              Vinay Kumar
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                color: 'var(--cyan-400)',
                fontWeight: 500,
                letterSpacing: '0.04em'
              }}
            >
              CSE &apos;27
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.35rem',
            background: 'rgba(15, 23, 42, 0.45)',
            padding: '0.35rem 0.65rem',
            borderRadius: '999px',
            border: '1px solid var(--border-subtle)',
            backdropFilter: 'blur(8px)',
          }}
          className="desktop-nav"
        >
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{
                  position: 'relative',
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  borderRadius: '999px',
                  background: isActive ? 'rgba(56, 189, 248, 0.16)' : 'transparent',
                  border: isActive ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid transparent',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="btn-icon"
            style={{ width: '2.4rem', height: '2.4rem', borderRadius: '0.5rem' }}
            title={`Current theme: ${currentTheme}. Click to switch.`}
            aria-label="Toggle visual theme"
          >
            {currentTheme === 'dark' && <Moon size={16} />}
            {currentTheme === 'midnight' && <Sparkles size={16} color="#38bdf8" />}
            {currentTheme === 'light' && <Sun size={16} color="#f59e0b" />}
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-primary desktop-talk-btn"
            style={{
              padding: '0.55rem 1.15rem',
              fontSize: '0.875rem',
              borderRadius: '999px',
              textDecoration: 'none',
              display: 'none',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <MessageSquare size={15} />
            <span>Let&apos;s Talk</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2.5rem',
              height: '2.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '0.5rem',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg-glass-nav)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.25rem 1.5rem',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}
        >
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{
                  padding: '0.75rem 1rem',
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--cyan-400)' : 'var(--text-primary)',
                  textDecoration: 'none',
                  borderRadius: '0.5rem',
                  background: isActive ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                  borderLeft: isActive ? '3px solid var(--cyan-400)' : '3px solid transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{item.label}</span>
                {isActive && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--cyan-400)' }} />}
              </a>
            );
          })}
          <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary"
              style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', fontSize: '0.925rem' }}
            >
              <MessageSquare size={16} />
              <span>Let&apos;s Talk</span>
            </a>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS helper for Desktop vs Mobile view */}
      <style>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-talk-btn {
            display: inline-flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
