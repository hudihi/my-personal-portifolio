import React from 'react';
import { GraduationCap, Award, Globe2, BookOpen, Check } from 'lucide-react';
import { EDUCATION_LIST, CERTIFICATIONS, LANGUAGES } from '../data/portfolioData';
import { PhysicsCard } from './PhysicsCard';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start max-w-2xl mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-apple-orange mb-2 block">
          Academic Foundations
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
          Education & Training.
        </h2>
        <p className="text-base sm:text-lg text-apple-text-secondary leading-relaxed">
          Rigorous computer science degree, enterprise cloud training, and continuous technical certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Education Timeline Cards (col-span-12 lg:col-span-8) */}
        <div className="lg:col-span-8 space-y-4">
          {EDUCATION_LIST.map((edu, idx) => (
            <PhysicsCard
              key={idx}
              className="p-6 sm:p-7"
              glowColor="rgba(41, 151, 255, 0.1)"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-apple-blue border border-blue-500/20">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <div className="text-xs font-medium text-apple-blue">
                      {edu.institution}
                    </div>
                  </div>
                </div>

                <span className="text-xs font-mono text-apple-text-secondary bg-white/5 px-2.5 py-1 rounded-full border border-white/5 self-start sm:self-auto">
                  {edu.period}
                </span>
              </div>

              {edu.details && (
                <div className="mt-3 space-y-1 text-xs text-apple-text-secondary">
                  {edu.details.map((detail, dIdx) => (
                    <p key={dIdx} className="leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              )}
            </PhysicsCard>
          ))}
        </div>

        {/* Certifications & Languages (col-span-12 lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-5">
          {/* Certifications */}
          <PhysicsCard className="p-6" glowColor="rgba(191, 90, 242, 0.12)">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-apple-purple" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Certifications
              </h3>
            </div>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-apple-text-secondary">
                  <Check className="w-3.5 h-3.5 text-apple-emerald shrink-0 mt-0.5" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </PhysicsCard>

          {/* Languages */}
          <PhysicsCard className="p-6" glowColor="rgba(48, 209, 88, 0.12)">
            <div className="flex items-center gap-2 mb-4">
              <Globe2 className="w-4 h-4 text-apple-emerald" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Languages
              </h3>
            </div>

            <div className="space-y-2.5">
              {LANGUAGES.map((lang, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <span className="font-medium text-white">{lang.name}</span>
                  <span className="font-mono text-apple-text-secondary bg-white/5 px-2 py-0.5 rounded">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </PhysicsCard>
        </div>
      </div>
    </section>
  );
};
