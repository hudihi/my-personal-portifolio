import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveTerminalModal } from './components/InteractiveTerminalModal';

export function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Subtle physics scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  // Global Keyboard shortcuts: Cmd+K or Ctrl+K to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isTerminalOpen) {
        setIsTerminalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTerminalOpen]);

  return (
    <div className="relative min-h-screen bg-black text-[#f5f5f7] selection:bg-apple-blue selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Physics Scroll Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-apple-blue via-apple-purple to-apple-emerald z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Clean Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />

      {/* Floating Apple Dock / Header */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Content Sections with Generous Negative Space */}
      <main className="relative z-10 space-y-10 md:space-y-20">
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <BentoGrid />
        <ProjectShowcase />
        <ExperienceTimeline />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Minimalist Apple Footer */}
      <Footer />

      {/* Interactive macOS Terminal Modal */}
      <InteractiveTerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}

export default App;
