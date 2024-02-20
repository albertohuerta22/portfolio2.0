import React, { useState, useEffect } from 'react';
import NavbarMain from './components/NavbarMain/NavbarMain';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

import './App.css';
import Reviews from './components/Reviews/Reviews';
import SkillsSection from './components/Skills/Skills';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <NavbarMain darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="main-layout">
        <HeroSection />
        <About />
        <ProjectsSection />
        <SkillsSection />
        <Reviews />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
