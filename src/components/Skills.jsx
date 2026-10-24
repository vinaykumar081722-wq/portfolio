import React, { useState } from 'react';
import {
  Code2,
  FileCode,
  FileCode2,
  Atom,
  Layout,
  Palette,
  Boxes,
  Binary,
  Brain,
  FileSearch,
  Compass,
  Filter,
  BarChart3,
  BookOpen,
  Database,
  Server,
  HardDrive,
  Flame,
  Network,
  GitBranch,
  Zap,
  Sparkles,
  Layers
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'FileCode': return <FileCode size={20} color="#f97316" />;
      case 'FileCode2': return <FileCode2 size={20} color="#38bdf8" />;
      case 'Atom': return <Atom size={20} color="#61dafb" />;
      case 'Code': return <Code2 size={20} color="#facc15" />;
      case 'Layout': return <Layout size={20} color="#e34f26" />;
      case 'Palette': return <Palette size={20} color="#264de4" />;
      case 'Boxes': return <Boxes size={20} color="#7952b3" />;
      case 'Binary': return <Binary size={20} color="#4d77cf" />;
      case 'Brain': return <Brain size={20} color="#f59e0b" />;
      case 'FileSearch': return <FileSearch size={20} color="#38bdf8" />;
      case 'Compass': return <Compass size={20} color="#818cf8" />;
      case 'Filter': return <Filter size={20} color="#a855f7" />;
      case 'BarChart3': return <BarChart3 size={20} color="#10b981" />;
      case 'BookOpen': return <BookOpen size={20} color="#38bdf8" />;
      case 'Database': return <Database size={20} color="#00758f" />;
      case 'Server': return <Server size={20} color="#47a248" />;
      case 'HardDrive': return <HardDrive size={20} color="#003b57" />;
      case 'Flame': return <Flame size={20} color="#ff4b4b" />;
      case 'Network': return <Network size={20} color="#6366f1" />;
      case 'GitBranch': return <GitBranch size={20} color="#f05032" />;
      case 'Github': return <GithubIcon size={20} color="#f8fafc" />;
      case 'Zap': return <Zap size={20} color="#bd34fe" />;
      default: return <Code2 size={20} color="#38bdf8" />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'languages', label: 'Programming Languages' },
    { id: 'web-dev', label: 'Web & Frontend' },
    { id: 'data-ml', label: 'Data & Machine Learning' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Frameworks & Tools' },
  ];

  const filteredCategories =
    activeTab === 'all'
      ? skillsData.categories
      : skillsData.categories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <Layers size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Skills &amp; Technology Stack</h2>
          <p className="section-subtitle">
            Core technologies and tools applied across academic coursework, personal projects, and full-stack development internship.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: '999px',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  border: isActive ? '1px solid var(--cyan-400)' : '1px solid var(--border-subtle)',
                  background: isActive ? 'rgba(56, 189, 248, 0.15)' : 'rgba(15, 23, 42, 0.5)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  boxShadow: isActive ? 'var(--shadow-glow-cyan)' : 'none'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grouped Skills Display */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {filteredCategories.map((cat) => (
            <div key={cat.id}>
              {activeTab === 'all' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--cyan-400)' }} />
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)'
                    }}
                  >
                    {cat.title}
                  </h3>
                  <div style={{ flex: 1, height: 1, background: 'var(--border-subtle)', marginLeft: '0.5rem' }} />
                </div>
              )}

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                  gap: '1.25rem'
                }}
              >
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="glass-card"
                    style={{
                      padding: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div
                          style={{
                            width: '2.5rem',
                            height: '2.5rem',
                            borderRadius: '0.5rem',
                            background: 'rgba(15, 23, 42, 0.8)',
                            border: '1px solid var(--border-subtle)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {getSkillIcon(skill.icon)}
                        </div>
                        <h4
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.05rem',
                            fontWeight: 700,
                            color: 'var(--text-primary)'
                          }}
                        >
                          {skill.name}
                        </h4>
                      </div>

                      {/* Authentic Proficiency Tag - No Fake Percentages */}
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          padding: '0.2rem 0.55rem',
                          borderRadius: '999px',
                          background: 'rgba(56, 189, 248, 0.1)',
                          color: 'var(--cyan-400)',
                          border: '1px solid rgba(56, 189, 248, 0.2)'
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>

                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.55,
                        margin: 0
                      }}
                    >
                      {skill.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
