import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Code2,
  Layers,
  Sparkles,
  ArrowRight,
  Eye,
  Film,
  Compass,
  UtensilsCrossed,
  Calculator,
  CheckSquare
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Machine Learning & Data',
    'Full Stack & Web',
    'Frontend & Mini Apps'
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'movie-recommendation': return <Film size={26} color="#38bdf8" />;
      case 'career-readiness': return <Compass size={26} color="#818cf8" />;
      case 'food-frontend': return <UtensilsCrossed size={26} color="#fb923c" />;
      case 'mini-calculator': return <Calculator size={26} color="#34d399" />;
      case 'form-validation': return <CheckSquare size={26} color="#60a5fa" />;
      default: return <Code2 size={26} color="#38bdf8" />;
    }
  };

  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <FolderGit2 size={14} />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="section-title">Engineered Projects</h2>
          <p className="section-subtitle">
            Curated software applications spanning natural language processing, vector similarity, full-stack React ecosystems, and interactive interfaces.
          </p>
        </div>

        {/* Working Category Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: '999px',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  border: isActive ? '1px solid var(--cyan-400)' : '1px solid var(--border-subtle)',
                  background: isActive ? 'rgba(56, 189, 248, 0.16)' : 'rgba(15, 23, 42, 0.5)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  boxShadow: isActive ? 'var(--shadow-glow-cyan)' : 'none'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 'var(--radius-xl)',
                border: proj.featured
                  ? '1.5px solid rgba(56, 189, 248, 0.35)'
                  : '1px solid var(--border-subtle)',
                boxShadow: proj.featured ? 'var(--shadow-glow-cyan)' : 'var(--shadow-sm)'
              }}
            >
              {/* Card Banner / Visual Header */}
              <div
                style={{
                  padding: '2rem 1.75rem',
                  background: `linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(7, 11, 20, 0.95))`,
                  borderBottom: '1px solid var(--border-subtle)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative background grid pattern */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)`,
                    backgroundSize: '16px 16px',
                    opacity: 0.6
                  }}
                />

                <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      borderRadius: '1rem',
                      background: 'rgba(15, 23, 42, 0.85)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
                    }}
                  >
                    {getProjectIcon(proj.id)}
                  </div>

                  {proj.featured && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '0.3rem 0.75rem',
                        borderRadius: '999px',
                        background: 'rgba(56, 189, 248, 0.15)',
                        border: '1px solid rgba(56, 189, 248, 0.4)',
                        color: 'var(--cyan-400)',
                        boxShadow: '0 0 10px rgba(56, 189, 248, 0.25)'
                      }}
                    >
                      <Sparkles size={13} />
                      <span>Featured Project</span>
                    </span>
                  )}
                </div>

                <div style={{ position: 'relative', zIndex: 2, marginTop: '1.25rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--cyan-400)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {proj.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginTop: '0.2rem',
                      lineHeight: 1.25
                    }}
                  >
                    {proj.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between',
                  gap: '1.5rem'
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: '0.925rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: '1.25rem'
                    }}
                  >
                    {proj.shortDescription}
                  </p>

                  {/* Stack Badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.25rem' }}>
                    {proj.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          padding: '0.25rem 0.65rem',
                          borderRadius: '0.35rem',
                          background: 'rgba(15, 23, 42, 0.6)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    {proj.tags.length > 5 && (
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          padding: '0.25rem 0.5rem',
                          borderRadius: '0.35rem',
                          background: 'rgba(255, 255, 255, 0.04)',
                          color: 'var(--text-muted)'
                        }}
                      >
                        +{proj.tags.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Key Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {proj.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.85rem',
                          color: 'var(--text-muted)'
                        }}
                      >
                        <span style={{ color: 'var(--cyan-400)', fontWeight: 700 }}>•</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-subtle)'
                  }}
                >
                  <button
                    onClick={() => onSelectProject(proj)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--cyan-400)',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      padding: 0
                    }}
                    className="hover:underline"
                  >
                    <span>View Architecture</span>
                    <ArrowRight size={15} />
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-icon"
                        style={{ width: '2.25rem', height: '2.25rem' }}
                        title="View Code on GitHub"
                        aria-label={`View code for ${proj.title} on GitHub`}
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    <button
                      onClick={() => onSelectProject(proj)}
                      className="btn-icon"
                      style={{ width: '2.25rem', height: '2.25rem' }}
                      title="Open Interactive Demo / Details"
                      aria-label={`Open interactive details for ${proj.title}`}
                    >
                      <Eye size={16} />
                    </button>
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
