import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

type LayoutMode = 'default' | 'grid' | 'stack' | 'spotlight' | 'neon';

function App() {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('default');
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'achievements', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden layout-${layoutMode}`}>
      <Navigation activeSection={activeSection} layoutMode={layoutMode} setLayoutMode={setLayoutMode} />

      <div className="relative">
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-purple-900/20 pointer-events-none"></div>

        <Hero />
        <About />
        <Experience />
        <Projects layoutMode={layoutMode} />
        <Achievements />
        <Skills />
        <Contact />
      </div>

      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 z-50 transform origin-left transition-transform duration-300"
           style={{ transform: `scaleX(${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight))})` }}></div>
    </div>
  );
}

export default App;
