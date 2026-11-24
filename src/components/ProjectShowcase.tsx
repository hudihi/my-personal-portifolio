import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Cpu, X, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { PhysicsCard } from './PhysicsCard';

export const ProjectShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Full-Stack & DevOps',
    'Mobile & AI',
    'Client Platforms',
    'Machine Learning',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-apple-emerald mb-2 block">
            Featured Systems
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Projects & Deployments.
          </h2>
          <p className="text-base sm:text-lg text-apple-text-secondary mt-2 max-w-2xl">
            Real-world web and mobile applications delivered from architecture and coding to production cloud deployment.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1 p-1 rounded-2xl glass-panel border-white/10 self-start md:self-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-apple-text-secondary hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, idx) => (
          <PhysicsCard
            key={project.id}
            className="p-7 sm:p-8 flex flex-col justify-between group min-h-[360px]"
            glowColor={
              idx % 2 === 0
                ? 'rgba(41, 151, 255, 0.14)'
                : 'rgba(191, 90, 242, 0.14)'
            }
            onClick={() => setActiveModalProject(project)}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-apple-blue font-semibold">
                  {project.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-apple-text-tertiary group-hover:text-white transition-colors">
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-apple-text-secondary mt-1">
                {project.role}
              </p>

              <p className="text-sm text-apple-text-secondary mt-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Highlights Preview */}
              <ul className="mt-4 space-y-1.5 text-xs text-apple-text-secondary">
                {project.highlights.slice(0, 2).map((h, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2">
                    <span className="text-apple-blue shrink-0">•</span>
                    <span className="line-clamp-1">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics & Technologies */}
            <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] font-medium text-apple-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] text-apple-text-tertiary">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>

              {project.metrics && project.metrics[0] && (
                <span className="text-xs font-mono text-white/80 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                  {project.metrics[0].value}
                </span>
              )}
            </div>
          </PhysicsCard>
        ))}
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              className="relative w-full max-w-2xl glass-dock rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl z-10 max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono uppercase tracking-widest text-apple-blue font-semibold">
                {activeModalProject.category}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                {activeModalProject.title}
              </h3>
              <p className="text-xs font-mono text-apple-text-secondary mt-1">
                Role: {activeModalProject.role}
              </p>

              <div className="mt-5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-sm text-apple-text-secondary leading-relaxed">
                {activeModalProject.description}
              </div>

              {/* Full Highlights from CV */}
              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-apple-text-tertiary mb-3">
                  Engineering Scope & Contributions
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-apple-text-secondary">
                  {activeModalProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-apple-emerald shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-apple-text-tertiary mb-2.5">
                  Complete Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-xs font-medium text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 pt-5 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2 rounded-full bg-white text-black text-xs font-bold hover:bg-[#e5e5ea] transition-colors"
                >
                  Close Spec
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
