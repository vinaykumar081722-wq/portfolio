import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import FeaturedDeepDive from './components/FeaturedDeepDive';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import BackToTop from './components/BackToTop';
import CanvasBackground from './components/CanvasBackground';
import { projectsData } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null);

  // Set initial theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('vk_theme') || 'dark';
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const handleToggleTheme = () => {
    const themeCycle = {
      dark: 'midnight',
      midnight: 'light',
      light: 'dark'
    };
    const nextTheme = themeCycle[currentTheme] || 'dark';
    setCurrentTheme(nextTheme);
    localStorage.setItem('vk_theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  // Section visibility tracking with IntersectionObserver
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'skills',
      'experience',
      'projects',
      'education',
      'certifications',
      'contact'
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleOpenProjectById = (projectId) => {
    const found = projectsData.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Interactive Particle Constellation Canvas */}
      <CanvasBackground />

      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        currentTheme={currentTheme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Sections */}
      <main style={{ flex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <FeaturedDeepDive onOpenModal={handleOpenProjectById} />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll to Top */}
      <BackToTop />

      {/* Project Deep-Dive & Sandbox Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
