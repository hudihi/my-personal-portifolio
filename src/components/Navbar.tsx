import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#hero', id: 'hero' },
    { label: 'Expertise', href: '#bento', id: 'bento' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPos = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4 md:px-8 ${
          scrolled ? 'pt-3 pb-2' : 'pt-6 pb-4'
        }`}
      >
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className={`flex items-center justify-between gap-3 md:gap-6 px-4 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? 'glass-dock shadow-2xl border-white/15'
              : 'glass-panel border-white/10'
          }`}
        >
          {/* Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none rounded-full"
          >
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 border border-white/15 group-hover:border-white/30 transition-all">
              <span className="font-bold text-[11px] tracking-tight text-white">
                {PERSONAL_INFO.initials}
              </span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold tracking-tight text-white/95">
                {PERSONAL_INFO.shortName}
              </span>
              <span className="text-[10px] text-apple-text-secondary leading-none">
                {PERSONAL_INFO.role}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium tracking-tight rounded-full transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-apple-text-secondary hover:text-white/90'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-white/12 border border-white/15 rounded-full"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-apple-text-secondary hover:text-white transition-all group"
              title="Terminal (⌘K)"
            >
              <Terminal className="w-3.5 h-3.5 text-apple-blue" />
              <span className="hidden sm:inline">cli</span>
              <span className="text-[10px] opacity-60 bg-white/10 px-1 rounded font-mono">
                ⌘K
              </span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-[#e5e5ea] transition-all"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-full bg-white/5 text-white"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed inset-x-4 top-20 z-40 lg:hidden glass-dock rounded-2xl p-5 border border-white/15 shadow-2xl flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-white/15 text-white'
                    : 'text-apple-text-secondary hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
