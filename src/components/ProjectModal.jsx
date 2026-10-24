import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Code2,
  CheckCircle2,
  AlertCircle,
  Play,
  Film,
  Calculator,
  ShoppingBag,
  Sliders,
  Check,
  Search,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { simulatedMovies } from '../data/portfolioData';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'simulator'

  // Interactive state for Movie Simulator
  const [selectedMovie, setSelectedMovie] = useState(simulatedMovies[0].title);

  // Interactive state for Career Readiness Simulator
  const [careerInputs, setCareerInputs] = useState({
    cgpa: 7.9,
    projects: 3,
    dsaProficiency: 75,
    fullStackProficiency: 80,
    aiMlInterest: 70
  });

  // Interactive state for Calculator Simulator
  const [calcDisplay, setCalcDisplay] = useState('0');
  const [calcPrev, setCalcPrev] = useState('');

  // Interactive state for Food Cart Simulator
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Margherita Veg Pizza', price: 249, qty: 1 },
    { id: 2, name: 'Paneer Butter Masala', price: 199, qty: 2 }
  ]);

  // Interactive state for Form Validator Simulator
  const [formInputs, setFormInputs] = useState({ name: '', email: '', password: '', confirm: '' });
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);

  if (!project) return null;

  // Career score formula
  const calculateCareerScore = () => {
    const academicWeight = (careerInputs.cgpa / 10) * 30;
    const projectWeight = Math.min(careerInputs.projects * 8, 25);
    const skillWeight = ((careerInputs.dsaProficiency + careerInputs.fullStackProficiency + careerInputs.aiMlInterest) / 300) * 45;
    return Math.round(academicWeight + projectWeight + skillWeight);
  };

  // Calculator logic
  const handleCalcBtn = (val) => {
    if (val === 'C') {
      setCalcDisplay('0');
      setCalcPrev('');
    } else if (val === 'DEL') {
      setCalcDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
    } else if (val === '=') {
      try {
        // Safe evaluation of arithmetic only
        const sanitized = calcDisplay.replace(/[^0-9+\-*/.]/g, '');
        // eslint-disable-next-line no-eval
        const res = Function(`'use strict'; return (${sanitized})`)();
        setCalcPrev(calcDisplay + ' =');
        setCalcDisplay(String(res));
      } catch (err) {
        setCalcDisplay('Error');
      }
    } else {
      setCalcDisplay((prev) => (prev === '0' || prev === 'Error' ? val : prev + val));
    }
  };

  // Cart logic
  const updateCartQty = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const cartSubtotal = cartItems.reduce((acc, i) => acc + i.price * i.qty, 0);

  // Form Validation logic
  const validateFormSim = (e) => {
    e.preventDefault();
    const errs = {};
    if (!formInputs.name.trim()) errs.name = 'Full name is required';
    if (!formInputs.email.includes('@') || !formInputs.email.includes('.')) errs.email = 'Valid email is required';
    if (formInputs.password.length < 6) errs.password = 'Password must be at least 6 characters';
    if (formInputs.password !== formInputs.confirm) errs.confirm = 'Passwords do not match';

    setFormErrors(errs);
    if (Object.keys(errs).length === 0) {
      setFormSuccess(true);
      setTimeout(() => setFormSuccess(false), 4000);
    }
  };

  const currentSimMovie = simulatedMovies.find((m) => m.title === selectedMovie) || simulatedMovies[0];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(3, 7, 18, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        animation: 'fadeIn 0.25s ease'
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-hover)',
          borderRadius: 'var(--radius-xl)',
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), var(--shadow-glow-cyan)',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(15, 23, 42, 0.7)'
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--cyan-400)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}
            >
              {project.category}
            </span>
            <h3
              id="modal-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginTop: '0.15rem'
              }}
            >
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="btn-icon"
            style={{ width: '2.25rem', height: '2.25rem' }}
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Navigation Tabs (Overview vs Live Interactive Simulation) */}
        <div
          style={{
            display: 'flex',
            borderBottom: '1px solid var(--border-subtle)',
            background: 'rgba(10, 16, 30, 0.5)',
            padding: '0 1.5rem'
          }}
        >
          <button
            onClick={() => setActiveTab('overview')}
            style={{
              padding: '0.85rem 1.25rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: activeTab === 'overview' ? 'var(--cyan-400)' : 'var(--text-muted)',
              borderBottom: activeTab === 'overview' ? '2px solid var(--cyan-400)' : '2px solid transparent'
            }}
          >
            Architecture &amp; Features
          </button>

          {project.hasLiveSimulation && (
            <button
              onClick={() => setActiveTab('simulator')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.85rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: activeTab === 'simulator' ? 'var(--cyan-400)' : 'var(--text-muted)',
                borderBottom: activeTab === 'simulator' ? '2px solid var(--cyan-400)' : '2px solid transparent'
              }}
            >
              <Play size={13} fill={activeTab === 'simulator' ? 'var(--cyan-400)' : 'currentColor'} />
              <span>Interactive Sandbox</span>
              <span
                style={{
                  fontSize: '0.7rem',
                  padding: '0.1rem 0.4rem',
                  borderRadius: '999px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  color: 'var(--cyan-400)'
                }}
              >
                Live
              </span>
            </button>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div style={{ padding: '1.75rem', overflowY: 'auto', flex: 1 }}>
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {/* Overview statement */}
              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Project Overview
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.975rem' }}>
                  {project.overview}
                </p>
              </div>

              {/* Stack tags */}
              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.65rem', fontWeight: 600 }}>
                  Technologies &amp; Libraries
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '0.35rem 0.8rem',
                        borderRadius: '0.4rem',
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        background: 'rgba(15, 23, 42, 0.7)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--cyan-400)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Implemented Features */}
              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}>
                  Key Implemented Capabilities
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.925rem', color: 'var(--text-primary)' }}>
                      <CheckCircle2 size={16} color="#38bdf8" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Highlights */}
              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}>
                  Technical Architecture &amp; Methodology
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {project.technicalHighlights.map((high, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
                      <Code2 size={16} color="#818cf8" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                      <span>{high}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transparent Discrepancy / Source Note */}
              {project.discrepancyNote && (
                <div
                  style={{
                    background: 'rgba(245, 158, 11, 0.08)',
                    border: '1px solid rgba(245, 158, 11, 0.25)',
                    borderRadius: '0.75rem',
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem'
                  }}
                >
                  <AlertCircle size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                  <div style={{ fontSize: '0.85rem', color: '#fbbf24', lineHeight: 1.55 }}>
                    <strong style={{ display: 'block', marginBottom: '0.2rem' }}>Implementation Note:</strong>
                    {project.discrepancyNote}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'simulator' && (
            <div>
              {/* Simulation: Movie Recommender */}
              {project.simulationType === 'movie-recommender' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem', borderRadius: '0.75rem', border: '1px solid var(--border-subtle)' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                      Select a movie to test content-based cosine similarity:
                    </label>
                    <select
                      value={selectedMovie}
                      onChange={(e) => setSelectedMovie(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: 'rgba(5, 9, 18, 0.8)',
                        border: '1px solid var(--border-hover)',
                        borderRadius: '0.5rem',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem'
                      }}
                    >
                      {simulatedMovies.map((m) => (
                        <option key={m.title} value={m.title}>
                          {m.title} ({m.year}) — {m.genre}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Selected Movie TMDB Poster and Top 5 recommendations */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '1.25rem',
                      alignItems: 'start'
                    }}
                  >
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                        Input Movie
                      </div>
                      <img
                        src={currentSimMovie.poster}
                        alt={currentSimMovie.title}
                        style={{
                          width: '100%',
                          maxHeight: '260px',
                          objectFit: 'cover',
                          borderRadius: '0.75rem',
                          border: '2px solid var(--cyan-400)',
                          boxShadow: 'var(--shadow-glow-cyan)'
                        }}
                      />
                      <div style={{ fontWeight: 700, marginTop: '0.5rem', color: 'var(--text-primary)' }}>
                        {currentSimMovie.title}
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                        Top Recommended Matches (Cosine Metric)
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                        {currentSimMovie.similar.map((sim, idx) => (
                          <div
                            key={idx}
                            style={{
                              background: 'rgba(15, 23, 42, 0.7)',
                              border: '1px solid var(--border-subtle)',
                              borderRadius: '0.5rem',
                              padding: '0.65rem 0.95rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between'
                            }}
                          >
                            <div>
                              <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                                #{idx + 1} {sim.title}
                              </div>
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Year: {sim.year}</span>
                            </div>
                            <span
                              style={{
                                fontSize: '0.78rem',
                                fontWeight: 700,
                                color: 'var(--cyan-400)',
                                background: 'rgba(56, 189, 248, 0.1)',
                                padding: '0.2rem 0.5rem',
                                borderRadius: '0.3rem'
                              }}
                            >
                              {(Number(sim.score) * 100).toFixed(0)}% Match
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Simulation: Career Readiness Engine */}
              {project.simulationType === 'career-engine' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Adjust student indicators to see the real-time employability assessment calculation:
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                        Academic CGPA: <strong style={{ color: 'var(--cyan-400)' }}>{careerInputs.cgpa}</strong>
                      </label>
                      <input
                        type="range"
                        min="5.0"
                        max="10.0"
                        step="0.1"
                        value={careerInputs.cgpa}
                        onChange={(e) => setCareerInputs({ ...careerInputs, cgpa: parseFloat(e.target.value) })}
                        style={{ width: '100%', accentColor: 'var(--cyan-400)' }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                        Verified Projects: <strong style={{ color: 'var(--cyan-400)' }}>{careerInputs.projects}</strong>
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="8"
                        value={careerInputs.projects}
                        onChange={(e) => setCareerInputs({ ...careerInputs, projects: parseInt(e.target.value) })}
                        style={{ width: '100%', accentColor: 'var(--cyan-400)' }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                        DSA &amp; Core Coding: <strong style={{ color: 'var(--cyan-400)' }}>{careerInputs.dsaProficiency}%</strong>
                      </label>
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={careerInputs.dsaProficiency}
                        onChange={(e) => setCareerInputs({ ...careerInputs, dsaProficiency: parseInt(e.target.value) })}
                        style={{ width: '100%', accentColor: 'var(--cyan-400)' }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                        Full Stack Capabilities: <strong style={{ color: 'var(--cyan-400)' }}>{careerInputs.fullStackProficiency}%</strong>
                      </label>
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={careerInputs.fullStackProficiency}
                        onChange={(e) => setCareerInputs({ ...careerInputs, fullStackProficiency: parseInt(e.target.value) })}
                        style={{ width: '100%', accentColor: 'var(--cyan-400)' }}
                      />
                    </div>
                  </div>

                  {/* Calculated Result Card */}
                  <div
                    style={{
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid var(--border-hover)',
                      borderRadius: '0.75rem',
                      padding: '1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                        Employability Readiness Index
                      </span>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: '#38bdf8' }}>
                        {calculateCareerScore()}%
                      </div>
                      <span style={{ fontSize: '0.825rem', color: '#10b981' }}>
                        ● Benchmark: Strong Fresher Software Candidate
                      </span>
                    </div>

                    <div style={{ textAlign: 'right', maxWidth: '240px', fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                      Focus Area: Reinforce DSA graph problems and deploy full-stack apps to production.
                    </div>
                  </div>
                </div>
              )}

              {/* Simulation: Food Cart */}
              {project.simulationType === 'food-cart' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Live demonstration of Food-frontend cart state management and total calculation:
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        style={{
                          background: 'rgba(15, 23, 42, 0.7)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '0.5rem',
                          padding: '0.75rem 1rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{item.name}</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>₹{item.price} each</div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                          <button
                            onClick={() => updateCartQty(item.id, -1)}
                            style={{
                              width: '1.8rem',
                              height: '1.8rem',
                              borderRadius: '0.3rem',
                              background: 'rgba(255,255,255,0.08)',
                              border: 'none',
                              color: '#fff',
                              cursor: 'pointer'
                            }}
                          >
                            -
                          </button>
                          <span style={{ fontWeight: 700, minWidth: '1.5rem', textAlign: 'center' }}>{item.qty}</span>
                          <button
                            onClick={() => updateCartQty(item.id, 1)}
                            style={{
                              width: '1.8rem',
                              height: '1.8rem',
                              borderRadius: '0.3rem',
                              background: 'rgba(255,255,255,0.08)',
                              border: 'none',
                              color: '#fff',
                              cursor: 'pointer'
                            }}
                          >
                            +
                          </button>
                          <span style={{ fontWeight: 700, color: 'var(--cyan-400)', minWidth: '4rem', textAlign: 'right' }}>
                            ₹{item.price * item.qty}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      padding: '1rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      borderRadius: '0.5rem',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Estimated Total</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc' }}>₹{cartSubtotal}</div>
                    </div>
                    <button
                      onClick={() => alert('Order simulated successfully! In the Food-frontend repo, this routes to /order.')}
                      className="btn-primary"
                      style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
                    >
                      Simulate Checkout
                    </button>
                  </div>
                </div>
              )}

              {/* Simulation: Calculator */}
              {project.simulationType === 'calculator' && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div
                    style={{
                      width: '280px',
                      background: '#0f172a',
                      borderRadius: '1rem',
                      padding: '1.25rem',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      boxShadow: 'var(--shadow-glow-cyan)'
                    }}
                  >
                    <div
                      style={{
                        background: '#020617',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        textAlign: 'right',
                        marginBottom: '1rem',
                        minHeight: '60px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }}
                    >
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{calcPrev}</div>
                      <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#38bdf8' }}>{calcDisplay}</div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                      {['C', 'DEL', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.'].map(
                        (b, i) => (
                          <button
                            key={i}
                            onClick={() => handleCalcBtn(b)}
                            style={{
                              gridColumn: b === '=' ? 'span 2' : 'span 1',
                              padding: '0.75rem 0',
                              borderRadius: '0.4rem',
                              border: '1px solid rgba(255,255,255,0.06)',
                              background:
                                b === '='
                                  ? 'var(--grad-cyan-indigo)'
                                  : ['/', '*', '-', '+'].includes(b)
                                  ? 'rgba(56, 189, 248, 0.2)'
                                  : ['C', 'DEL'].includes(b)
                                  ? 'rgba(239, 68, 68, 0.2)'
                                  : 'rgba(30, 41, 59, 0.8)',
                              color: '#fff',
                              fontWeight: 600,
                              cursor: 'pointer'
                            }}
                          >
                            {b}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Simulation: Form Validator */}
              {project.simulationType === 'form-validator' && (
                <div>
                  <form onSubmit={validateFormSim} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formInputs.name}
                        onChange={(e) => setFormInputs({ ...formInputs, name: e.target.value })}
                        placeholder="Vinay Kumar"
                        style={{
                          width: '100%',
                          padding: '0.65rem',
                          background: 'rgba(15, 23, 42, 0.8)',
                          border: formErrors.name ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                          borderRadius: '0.4rem',
                          color: '#fff'
                        }}
                      />
                      {formErrors.name && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{formErrors.name}</span>}
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formInputs.email}
                        onChange={(e) => setFormInputs({ ...formInputs, email: e.target.value })}
                        placeholder="vinay@example.com"
                        style={{
                          width: '100%',
                          padding: '0.65rem',
                          background: 'rgba(15, 23, 42, 0.8)',
                          border: formErrors.email ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                          borderRadius: '0.4rem',
                          color: '#fff'
                        }}
                      />
                      {formErrors.email && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{formErrors.email}</span>}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                          Password
                        </label>
                        <input
                          type="password"
                          value={formInputs.password}
                          onChange={(e) => setFormInputs({ ...formInputs, password: e.target.value })}
                          placeholder="••••••••"
                          style={{
                            width: '100%',
                            padding: '0.65rem',
                            background: 'rgba(15, 23, 42, 0.8)',
                            border: formErrors.password ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                            borderRadius: '0.4rem',
                            color: '#fff'
                          }}
                        />
                        {formErrors.password && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{formErrors.password}</span>}
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          value={formInputs.confirm}
                          onChange={(e) => setFormInputs({ ...formInputs, confirm: e.target.value })}
                          placeholder="••••••••"
                          style={{
                            width: '100%',
                            padding: '0.65rem',
                            background: 'rgba(15, 23, 42, 0.8)',
                            border: formErrors.confirm ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                            borderRadius: '0.4rem',
                            color: '#fff'
                          }}
                        />
                        {formErrors.confirm && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{formErrors.confirm}</span>}
                      </div>
                    </div>

                    <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', width: '100%' }}>
                      Validate &amp; Submit Form
                    </button>

                    {formSuccess && (
                      <div
                        style={{
                          background: 'rgba(16, 185, 129, 0.15)',
                          border: '1px solid #10b981',
                          borderRadius: '0.4rem',
                          padding: '0.65rem',
                          color: '#34d399',
                          fontSize: '0.85rem',
                          textAlign: 'center'
                        }}
                      >
                        ✓ Validation Passed! Form inputs are valid.
                      </div>
                    )}
                  </form>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderTop: '1px solid var(--border-subtle)',
            background: 'rgba(10, 16, 30, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <Sparkles size={14} color="var(--cyan-400)" />
            <span>Verified Implementation</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}
              >
                <GithubIcon size={16} />
                <span>View Code on GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="btn-primary"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
