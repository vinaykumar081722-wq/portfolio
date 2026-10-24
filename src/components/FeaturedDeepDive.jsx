import React, { useState } from 'react';
import {
  Sparkles,
  Play,
  Layers,
  CheckCircle2,
  Cpu,
  Database,
  ArrowRight,
  Film,
  Search
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { simulatedMovies } from '../data/portfolioData';

export default function FeaturedDeepDive({ onOpenModal }) {
  const [activeMovieIndex, setActiveMovieIndex] = useState(0);
  const activeMovie = simulatedMovies[activeMovieIndex];

  return (
    <section
      className="section"
      style={{
        background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Glow */}
      <div
        className="glow-orb"
        style={{
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)',
          top: '20%',
          right: '5%',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <Sparkles size={14} />
            <span>Featured Project Deep-Dive</span>
          </div>
          <h2 className="section-title">Movie Recommendation Engine</h2>
          <p className="section-subtitle">
            An in-depth look into content-based vector similarity, TMDB API poster streaming, and Streamlit interface architecture.
          </p>
        </div>

        {/* Two-Column Deep-Dive Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Project Architectural Narrative */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--cyan-400)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Machine Learning &amp; NLP Pipeline
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.85rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.25,
                marginBottom: '1rem'
              }}
            >
              Solving Discovery Fatigue with Content Vectorization
            </h3>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem', fontSize: '1rem' }}>
              With thousands of titles streaming online, users struggle to discover films aligned with specific narrative themes. This system vectorizes movie metadata—including genre descriptors, plot keywords, top billed cast, and directing crew—transforming unstructured text into quantifiable vector space representations.
            </p>

            {/* Pipeline Step Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '1.75rem',
                    height: '1.75rem',
                    borderRadius: '0.4rem',
                    background: 'rgba(56, 189, 248, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--cyan-400)' }}>1</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)', fontSize: '0.925rem' }}>Data Preprocessing &amp; Tokenization:</strong>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
                    Extracted cast, crew, and genres from TMDB JSON, concatenated them into composite &apos;tags&apos;, and applied Porter stemming.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '1.75rem',
                    height: '1.75rem',
                    borderRadius: '0.4rem',
                    background: 'rgba(129, 140, 248, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#818cf8' }}>2</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)', fontSize: '0.925rem' }}>CountVectorizer &amp; Cosine Distance:</strong>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
                    Constructed a 5,000-dimensional bag-of-words matrix and computed pairwise angular distance between vectors.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '1.75rem',
                    height: '1.75rem',
                    borderRadius: '0.4rem',
                    background: 'rgba(192, 132, 252, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#c084fc' }}>3</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)', fontSize: '0.925rem' }}>Streamlit &amp; TMDB API Integration:</strong>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
                    Engineered an interactive dashboard that queries TMDB API in real-time to fetch high-res poster art for top-ranked matches.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://github.com/vinaykumar081722-wq/Movie-Recommendation"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <GithubIcon size={17} />
                <span>Explore Repository Code</span>
              </a>

              <button
                onClick={() => onOpenModal && onOpenModal('movie-recommendation')}
                className="btn-secondary"
              >
                <span>Full Technical Specs</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Right Column: Live Interactive Streamlit Preview Simulator */}
          <div
            className="glass-card"
            style={{
              padding: 0,
              borderRadius: '1.5rem',
              border: '1.5px solid rgba(56, 189, 248, 0.3)',
              boxShadow: 'var(--shadow-glow-cyan), var(--shadow-md)'
            }}
          >
            {/* Streamlit App Bar */}
            <div
              style={{
                padding: '0.85rem 1.25rem',
                borderBottom: '1px solid var(--border-subtle)',
                background: 'rgba(15, 23, 42, 0.85)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Film size={18} color="#ff4b4b" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc' }}>
                  Streamlit · Movie Recommender
                </span>
              </div>
              <span
                style={{
                  fontSize: '0.72rem',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '999px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#10b981',
                  fontWeight: 600
                }}
              >
                Live Demo Mode
              </span>
            </div>

            {/* Streamlit Main Frame Content */}
            <div style={{ padding: '1.75rem', background: 'rgba(7, 11, 20, 0.95)' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '0.45rem', fontWeight: 500 }}>
                  Select Movie to Recommend (Simulated Streamlit Dropdown):
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {simulatedMovies.map((m, idx) => (
                    <button
                      key={m.title}
                      onClick={() => setActiveMovieIndex(idx)}
                      style={{
                        padding: '0.4rem 0.85rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        border: activeMovieIndex === idx ? '1px solid var(--cyan-400)' : '1px solid var(--border-subtle)',
                        background: activeMovieIndex === idx ? 'rgba(56, 189, 248, 0.2)' : 'rgba(15, 23, 42, 0.6)',
                        color: activeMovieIndex === idx ? '#ffffff' : 'var(--text-secondary)'
                      }}
                    >
                      {m.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Selected Movie Poster & Recs */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '130px 1fr',
                  gap: '1.25rem',
                  alignItems: 'center',
                  background: 'rgba(15, 23, 42, 0.65)',
                  padding: '1rem',
                  borderRadius: '1rem',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '1.25rem'
                }}
              >
                <img
                  src={activeMovie.poster}
                  alt={activeMovie.title}
                  style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '0.5rem',
                    border: '1.5px solid var(--cyan-400)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
                  }}
                />
                <div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--cyan-400)', fontWeight: 600, textTransform: 'uppercase' }}>
                    TMDB Selected Title
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', margin: '0.15rem 0' }}>
                    {activeMovie.title} ({activeMovie.year})
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                    Genre: {activeMovie.genre}
                  </p>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      padding: '0.3rem 0.65rem',
                      borderRadius: '0.35rem',
                      fontSize: '0.75rem',
                      color: 'var(--cyan-400)'
                    }}
                  >
                    <span>Cosine Similarity Matrix: Active</span>
                  </div>
                </div>
              </div>

              {/* Top 5 Streamlit Generated Recommendations */}
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Recommended Movies (Top 5 Matches)
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                    gap: '0.65rem'
                  }}
                >
                  {activeMovie.similar.map((sim, i) => (
                    <div
                      key={i}
                      style={{
                        background: 'rgba(15, 23, 42, 0.75)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '0.5rem',
                        padding: '0.6rem',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '0.35rem'
                      }}
                    >
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc', lineHeight: 1.2 }}>
                        {sim.title}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{sim.year}</div>
                      <div
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#34d399',
                          background: 'rgba(52, 211, 153, 0.1)',
                          padding: '0.15rem',
                          borderRadius: '0.25rem'
                        }}
                      >
                        {(Number(sim.score) * 100).toFixed(0)}% Match
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
