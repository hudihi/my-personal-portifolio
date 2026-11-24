import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Terminal, ArrowRight, Smartphone, Server, Cloud, Cpu } from 'lucide-react';
import { PERSONAL_INFO, CORE_PILLARS } from '../data/portfolioData';
import { PhysicsCard } from './PhysicsCard';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 md:pt-44 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Subtle ambient lighting */}
      <div className="ambient-glow-top" />

      {/* Main Hero Header */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-subtle border border-white/10 text-xs font-medium text-white/90 mb-8"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-tight">{PERSONAL_INFO.availability}</span>
          <span className="text-white/20">|</span>
          <span className="text-apple-text-secondary">{PERSONAL_INFO.location}</span>
        </motion.div>

        {/* High-Contrast Apple Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] mb-6 text-apple-headline"
        >
          Mobile apps. Scalable backends. <br className="hidden sm:inline" />
          <span className="text-apple-blue-gradient">Automated cloud delivery.</span>
        </motion.h1>

        {/* Crisp Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-apple-text-secondary max-w-3xl font-normal leading-relaxed mb-10"
        >
          I am <span className="text-white font-medium">{PERSONAL_INFO.name}</span>, a Software Developer delivering production cross-platform mobile apps with Flutter & Dart, scalable backend microservices in Java & Python, and automated GitOps CI/CD pipelines.
        </motion.p>

        {/* Clean Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-20"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-[#e5e5ea] transition-all"
          >
            <span>View Featured Projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenTerminal}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass-panel hover:glass-panel-elevated text-xs sm:text-sm font-medium text-white transition-all group"
          >
            <Terminal className="w-3.5 h-3.5 text-apple-blue group-hover:rotate-12 transition-transform" />
            <span>Interactive Terminal</span>
            <span className="text-[10px] font-mono text-apple-text-secondary bg-white/10 px-1.5 py-0.5 rounded">
              ⌘K
            </span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-medium text-apple-text-secondary hover:text-white transition-all"
          >
            <span>Get in Touch</span>
          </a>
        </motion.div>
      </div>

      {/* 4 Core Pillars Strip (Clean Bento Preview) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto w-full"
      >
        {CORE_PILLARS.map((pillar, idx) => (
          <PhysicsCard
            key={idx}
            className="p-5 flex flex-col justify-between gap-4"
            glowColor={
              idx === 0
                ? 'rgba(41, 151, 255, 0.16)'
                : idx === 1
                ? 'rgba(191, 90, 242, 0.16)'
                : idx === 2
                ? 'rgba(48, 209, 88, 0.16)'
                : 'rgba(255, 159, 10, 0.16)'
            }
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-apple-text-tertiary">0{idx + 1}</span>
              {idx === 0 && <Smartphone className="w-4 h-4 text-apple-blue" />}
              {idx === 1 && <Server className="w-4 h-4 text-apple-purple" />}
              {idx === 2 && <Cloud className="w-4 h-4 text-apple-emerald" />}
              {idx === 3 && <Cpu className="w-4 h-4 text-apple-orange" />}
            </div>

            <div>
              <div className="text-base font-bold text-white tracking-tight">
                {pillar.title}
              </div>
              <div className="text-xs font-mono text-apple-blue mt-0.5">
                {pillar.tagline}
              </div>
              <p className="text-xs text-apple-text-secondary leading-relaxed mt-2">
                {pillar.description}
              </p>
            </div>
          </PhysicsCard>
        ))}
      </motion.div>

      {/* Subtle Scroll Hint */}
      <div className="flex justify-center mt-14">
        <a
          href="#bento"
          className="flex flex-col items-center gap-1.5 text-apple-text-tertiary hover:text-white transition-colors"
        >
          <span className="text-[10px] uppercase tracking-widest font-mono">Explore Skills & Systems</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-apple-blue" />
        </a>
      </div>
    </section>
  );
};
