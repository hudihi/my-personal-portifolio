import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { PhysicsCard } from './PhysicsCard';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start max-w-2xl mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-apple-purple mb-2 block">
          Track Record
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
          Work Experience.
        </h2>
        <p className="text-base sm:text-lg text-apple-text-secondary leading-relaxed">
          Delivering production microservices, AI inference pipelines, and mobile applications across engineering teams.
        </p>
      </div>

      {/* Timeline items */}
      <div className="relative border-l border-white/10 ml-3 md:ml-6 pl-6 md:pl-10 space-y-10">
        {WORK_EXPERIENCE.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[31px] md:-left-[47px] top-2 flex items-center justify-center">
              {idx === 0 ? (
                <div className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-apple-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-apple-blue border-2 border-black"></span>
                </div>
              ) : (
                <div className="w-3.5 h-3.5 rounded-full bg-white/30 border-2 border-black group-hover:bg-white/70 transition-colors" />
              )}
            </div>

            {/* Experience Card */}
            <PhysicsCard
              className="p-6 sm:p-7"
              glowColor={idx === 0 ? 'rgba(41, 151, 255, 0.12)' : 'rgba(255, 255, 255, 0.05)'}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5 mb-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <span className="text-white/30">•</span>
                    <span className="text-base font-semibold text-apple-blue">
                      {item.company}
                    </span>
                  </div>
                  <div className="text-xs text-apple-text-secondary mt-0.5">
                    {item.type}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-apple-text-secondary">
                  <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                    <Calendar className="w-3 h-3 text-apple-text-tertiary" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-apple-text-tertiary" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 my-4 text-xs sm:text-sm text-apple-text-secondary">
                {item.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-apple-blue shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] font-medium text-apple-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </PhysicsCard>
          </div>
        ))}
      </div>
    </section>
  );
};
