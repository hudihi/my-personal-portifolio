import React, { useState } from 'react';
import { 
  Smartphone, 
  Server, 
  Cloud, 
  Cpu, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck,
  Workflow
} from 'lucide-react';
import { PhysicsCard } from './PhysicsCard';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const BentoGrid: React.FC = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState(0);

  return (
    <section id="bento" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start max-w-2xl mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-apple-blue mb-2">
          Technical Expertise
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
          Full-Stack & Mobile Breadth.
        </h2>
        <p className="text-base sm:text-lg text-apple-text-secondary leading-relaxed">
          Delivering production applications with robust architectures, automated GitOps delivery, and native-feeling interfaces.
        </p>
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-5 mb-10">
        
        {/* CARD 1: Mobile Development (col-span-12 lg:col-span-7) */}
        <PhysicsCard
          className="col-span-12 lg:col-span-7 p-6 sm:p-8"
          glowColor="rgba(41, 151, 255, 0.15)"
        >
          <div className="flex flex-col h-full justify-between gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-apple-blue">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-apple-text-secondary">
                    Cross-Platform
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Mobile Development
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                Flutter & Dart
              </span>
            </div>

            <p className="text-sm text-apple-text-secondary leading-relaxed">
              Crafting responsive cross-platform mobile apps with modern state management (Riverpod, BLoC, Provider), local persistence (Hive), and automated build signing for Google Play Store and Apple App Store releases.
            </p>

            {/* Mobile Architecture Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="p-3.5 rounded-xl bg-white/[0.025] border border-white/5">
                <div className="text-xs font-semibold text-white">Riverpod & BLoC</div>
                <div className="text-[11px] text-apple-text-tertiary mt-0.5">Predictable state architecture</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.025] border border-white/5">
                <div className="text-xs font-semibold text-white">REST & Dio</div>
                <div className="text-[11px] text-apple-text-tertiary mt-0.5">Secure token sync & caching</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.025] border border-white/5">
                <div className="text-xs font-semibold text-white">App Stores</div>
                <div className="text-[11px] text-apple-text-tertiary mt-0.5">Automated release pipelines</div>
              </div>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
              {['Flutter', 'Dart', 'Riverpod', 'BLoC', 'Material 3', 'Firebase', 'Play Console', 'App Store Connect'].map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded-md bg-white/5 text-[11px] font-medium text-apple-text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </PhysicsCard>

        {/* CARD 2: DevOps & Infrastructure (col-span-12 lg:col-span-5) */}
        <PhysicsCard
          className="col-span-12 lg:col-span-5 p-6 sm:p-8"
          glowColor="rgba(48, 209, 88, 0.15)"
        >
          <div className="flex flex-col h-full justify-between gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-apple-emerald">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-apple-text-secondary">
                    Deployment
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    DevOps & GitOps
                  </h3>
                </div>
              </div>
              <Workflow className="w-4 h-4 text-apple-emerald" />
            </div>

            <p className="text-sm text-apple-text-secondary leading-relaxed">
              Configuring Linux environments with Traefik reverse proxy for SSL termination, path-based routing, Docker container orchestration, and automated CI/CD via GitHub Actions.
            </p>

            <div className="space-y-2 p-3.5 rounded-xl bg-black/50 border border-white/10 text-xs font-mono">
              <div className="flex items-center justify-between text-white/90">
                <span className="text-apple-emerald">✓ Traefik SSL:</span>
                <span>Auto Let&apos;s Encrypt</span>
              </div>
              <div className="flex items-center justify-between text-white/90">
                <span className="text-apple-blue">✓ CI/CD:</span>
                <span>GitHub Actions GitOps</span>
              </div>
              <div className="flex items-center justify-between text-white/90">
                <span className="text-apple-purple">✓ Cloud:</span>
                <span>GCP Compute & Cloudflare</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
              {['Docker', 'Traefik', 'GitHub Actions', 'GCP', 'Portainer', 'Cloudflare', 'Linux'].map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] text-apple-text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </PhysicsCard>

        {/* CARD 3: Backend & Microservices (col-span-12 lg:col-span-6) */}
        <PhysicsCard
          className="col-span-12 lg:col-span-6 p-6 sm:p-8"
          glowColor="rgba(191, 90, 242, 0.15)"
        >
          <div className="flex flex-col h-full justify-between gap-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-apple-purple">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-apple-text-secondary">
                    Microservices
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Backend Architecture
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                Java & Python
              </span>
            </div>

            <p className="text-sm text-apple-text-secondary leading-relaxed">
              Building secure, high-concurrency RESTful APIs using Spring Boot and FastAPI, backed by PostgreSQL and MySQL databases with clean microservices boundaries.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.025] border border-white/5">
                <div className="font-semibold text-white">Java / Spring Boot</div>
                <div className="text-[11px] text-apple-text-secondary mt-1">Enterprise microservices, Spring Security & JPA</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.025] border border-white/5">
                <div className="font-semibold text-white">Python / FastAPI</div>
                <div className="text-[11px] text-apple-text-secondary mt-1">Async request handling, Pydantic & model endpoints</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
              {['Java', 'Spring Boot', 'Python', 'FastAPI', 'PostgreSQL', 'MySQL', 'RESTful APIs'].map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] text-apple-text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </PhysicsCard>

        {/* CARD 4: AI/ML Inference Serving (col-span-12 lg:col-span-6) */}
        <PhysicsCard
          className="col-span-12 lg:col-span-6 p-6 sm:p-8"
          glowColor="rgba(255, 159, 10, 0.15)"
        >
          <div className="flex flex-col h-full justify-between gap-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-apple-orange">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-apple-text-secondary">
                    Machine Learning
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Inference & AI Serving
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                vLLM & Ensembles
              </span>
            </div>

            <p className="text-sm text-apple-text-secondary leading-relaxed">
              Configuring vLLM to serve high-throughput, low-latency AI inference workloads, integrating ML/AI endpoints into mobile and web client workflows, and training financial prediction ensembles.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.025] border border-white/5">
                <div className="font-semibold text-white">vLLM Inference</div>
                <div className="text-[11px] text-apple-text-secondary mt-1">Dockerized high-throughput LLM serving</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.025] border border-white/5">
                <div className="font-semibold text-white">Predictive Models</div>
                <div className="text-[11px] text-apple-text-secondary mt-1">XGBoost, CatBoost, LightGBM, Joblib</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
              {['vLLM', 'FastAPI', 'XGBoost', 'CatBoost', 'Scikit-Learn', 'Joblib', 'Neural Networks'].map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] text-apple-text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </PhysicsCard>

      </div>

      {/* Interactive Clean Technical Skills Matrix */}
      <PhysicsCard className="p-6 sm:p-8" glowColor="rgba(255, 255, 255, 0.08)">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Comprehensive Skills Directory
            </h3>
            <p className="text-xs text-apple-text-secondary mt-0.5">
              Select a domain to inspect tools, frameworks, and deployment technologies.
            </p>
          </div>

          <div className="flex flex-wrap gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.category}
                onClick={() => setActiveSkillCategory(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeSkillCategory === idx
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-apple-text-secondary hover:text-white'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
          {SKILL_CATEGORIES[activeSkillCategory].skills.map((skill) => (
            <div
              key={skill}
              className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2 hover:bg-white/[0.05] transition-colors"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-apple-blue shrink-0" />
              <span className="text-xs font-medium text-white/90">{skill}</span>
            </div>
          ))}
        </div>
      </PhysicsCard>
    </section>
  );
};
