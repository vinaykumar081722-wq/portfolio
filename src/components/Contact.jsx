import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
  MapPin,
  ExternalLink,
  Phone
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    try {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch (e) {
      // Ignore if confetti fails
    }
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email format';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Please provide a subject';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please enter your message';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Honest, authentic behavior: Construct mailto link
      const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
      const bodyEncoded = encodeURIComponent(
        `Hi Vinay,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
      );
      const mailtoLink = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch (err) {
        // silent
      }

      setStatusMessage({
        type: 'success',
        text: 'Opening your default email client with your prefilled message to Vinay Kumar...'
      });

      // Trigger mailto after brief delay
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 700);
    }
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <MessageSquare size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">Have an Opportunity or an Interesting Idea?</h2>
          <p className="section-subtitle">
            I&apos;m always interested in learning, building, and connecting with people who are passionate about technology.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Contact Details & Links */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}
            >
              Let&apos;s Connect
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2rem'
              }}
            >
              Whether you have an internship opening, entry-level software role, technical query, or wish to discuss a collaborative project, feel free to drop an email or reach out on professional platforms.
            </p>

            {/* Email Card with One-Click Copy */}
            <div
              className="glass-card"
              style={{
                padding: '1.25rem 1.5rem',
                marginBottom: '1.25rem',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(56, 189, 248, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Mail size={18} color="var(--cyan-400)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Email Address
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.925rem',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      fontWeight: 600
                    }}
                    className="hover:text-cyan-400"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="btn-secondary"
                style={{
                  padding: '0.5rem 0.95rem',
                  fontSize: '0.825rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Location & Social Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
              }}
            >
              <div
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <div
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(99, 102, 241, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <MapPin size={17} color="#818cf8" />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Location
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              <div
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <div
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(52, 211, 153, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Phone size={17} color="#34d399" />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Mobile Contact
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {personalInfo.phone}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontWeight: 600 }}>
                Professional Profiles:
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}
                >
                  <GithubIcon size={16} />
                  <span>GitHub Profile</span>
                  <ExternalLink size={13} style={{ opacity: 0.6 }} />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn Profile</span>
                  <ExternalLink size={13} style={{ opacity: 0.6 }} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            className="glass-card"
            style={{
              padding: '2.25rem',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.35rem'
              }}
            >
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              Fill in your details below. Validating initiates a direct email transmission.
            </p>

            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label
                  htmlFor="contact-name"
                  style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Jane Doe"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: formErrors.name ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                    borderRadius: '0.5rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.925rem',
                    transition: 'border-color 0.2s ease'
                  }}
                />
                {formErrors.name && (
                  <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.25rem', display: 'block' }}>
                    {formErrors.name}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}
                >
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. recruiter@company.com"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: formErrors.email ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                    borderRadius: '0.5rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.925rem'
                  }}
                />
                {formErrors.email && (
                  <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.25rem', display: 'block' }}>
                    {formErrors.email}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}
                >
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. Software Developer Opportunity / Project Inquiry"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: formErrors.subject ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                    borderRadius: '0.5rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.925rem'
                  }}
                />
                {formErrors.subject && (
                  <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.25rem', display: 'block' }}>
                    {formErrors.subject}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share details about the role, technical question, or project idea..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: formErrors.message ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                    borderRadius: '0.5rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.925rem',
                    resize: 'vertical'
                  }}
                />
                {formErrors.message && (
                  <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.25rem', display: 'block' }}>
                    {formErrors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', padding: '0.85rem' }}
              >
                <Send size={16} />
                <span>Send Message</span>
              </button>

              {statusMessage && (
                <div
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid #10b981',
                    color: '#34d399',
                    fontSize: '0.85rem',
                    textAlign: 'center'
                  }}
                >
                  {statusMessage.text}
                </div>
              )}

              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.4 }}>
                ℹ️ Uses client-side form validation with automatic email client triggering. No third-party data tracking.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
