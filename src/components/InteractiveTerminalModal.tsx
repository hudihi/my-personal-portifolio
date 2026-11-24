import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, WORK_EXPERIENCE, EDUCATION_LIST } from '../data/portfolioData';

interface InteractiveTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveTerminalModal: React.FC<InteractiveTerminalModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: React.ReactNode }>>([
    {
      command: 'about',
      output: (
        <div className="text-xs sm:text-sm font-mono space-y-1 text-white/90">
          <div className="text-apple-blue font-bold">Abdillah Ahmed Issa — Software Developer</div>
          <div className="text-apple-text-tertiary">----------------------------------------</div>
          <div><span className="text-apple-purple font-semibold">Location:</span> {PERSONAL_INFO.location}</div>
          <div><span className="text-apple-purple font-semibold">Focus:</span> Flutter & Dart, Java Spring Boot, Python FastAPI, Docker & Traefik</div>
          <div><span className="text-apple-purple font-semibold">Education:</span> BSc. in Computer Science — University of Dar es Salaam</div>
          <div className="pt-2 text-apple-emerald">Type &quot;help&quot; to view available commands.</div>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-apple-text-secondary text-xs sm:text-sm">
            <div>Available Commands:</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 pt-1 text-white">
              <div><span className="text-apple-blue font-semibold">about</span> - Background summary</div>
              <div><span className="text-apple-blue font-semibold">skills</span> - Technical abilities</div>
              <div><span className="text-apple-blue font-semibold">projects</span> - Production systems</div>
              <div><span className="text-apple-blue font-semibold">experience</span> - Work history</div>
              <div><span className="text-apple-blue font-semibold">education</span> - Degree & training</div>
              <div><span className="text-apple-blue font-semibold">contact</span> - Phone & email</div>
              <div><span className="text-apple-blue font-semibold">clear</span> - Clear screen</div>
              <div><span className="text-apple-blue font-semibold">exit</span> - Close terminal</div>
            </div>
          </div>
        );
        break;

      case 'about':
      case 'bio':
        output = (
          <div className="text-xs sm:text-sm leading-relaxed text-apple-text-secondary">
            {PERSONAL_INFO.summary}
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-1.5 text-xs sm:text-sm">
            <div>• <strong className="text-white">Mobile:</strong> Flutter, Dart, Riverpod, BLoC, Provider, Dio, Firebase, Hive, Play Store & App Store Connect</div>
            <div>• <strong className="text-white">Backend:</strong> Java, Spring Boot, Python, FastAPI, RESTful APIs, PostgreSQL, MySQL</div>
            <div>• <strong className="text-white">DevOps & Cloud:</strong> Docker, Traefik Reverse Proxy (SSL), Portainer, GitHub Actions (CI/CD), GitOps, GCP, Cloudflare, Linux</div>
            <div>• <strong className="text-white">Machine Learning:</strong> vLLM, XGBoost, CatBoost, Scikit-Learn, Joblib</div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs sm:text-sm">
            {PROJECTS.map((p) => (
              <div key={p.id} className="p-2 rounded-xl bg-white/5 border border-white/5">
                <div className="font-bold text-apple-blue">{p.title}</div>
                <div className="text-white/80">{p.description}</div>
                <div className="text-apple-text-tertiary text-[11px] mt-1">Stack: {p.technologies.join(', ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        output = (
          <div className="space-y-2 text-xs sm:text-sm">
            {WORK_EXPERIENCE.map((w, i) => (
              <div key={i} className="p-2 rounded-xl bg-white/5 border border-white/5">
                <div className="font-bold text-white">{w.role} @ {w.company} <span className="text-apple-text-tertiary font-normal">({w.period})</span></div>
                <div className="text-apple-text-secondary text-xs">{w.highlights[0]}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="space-y-2 text-xs sm:text-sm">
            {EDUCATION_LIST.map((e, i) => (
              <div key={i}>
                <div className="font-bold text-white">{e.degree} — <span className="text-apple-blue">{e.institution}</span></div>
                <div className="text-apple-text-tertiary text-xs">{e.period}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs sm:text-sm">
            <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-apple-blue underline">{PERSONAL_INFO.email}</a></div>
            <div>Phone: <span className="text-white">{PERSONAL_INFO.phone}</span></div>
            <div>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-apple-blue underline">{PERSONAL_INFO.github}</a></div>
            <div>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-apple-blue underline">{PERSONAL_INFO.linkedin}</a></div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        setInputVal('');
        return;

      default:
        output = (
          <div className="text-red-400 text-xs sm:text-sm">
            command not found: {cmd}. Type <span className="text-apple-blue font-bold">&quot;help&quot;</span> for available commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInputVal('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="relative w-full max-w-2xl glass-dock rounded-2xl border border-white/20 shadow-2xl z-10 overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.04] border-b border-white/10 select-none">
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-110 flex items-center justify-center"
                />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>

              <div className="text-xs font-mono text-apple-text-secondary flex items-center gap-1.5">
                <TerminalIcon className="w-3 h-3 text-apple-blue" />
                <span>abdillah@issa-dev:~</span>
              </div>

              <span className="text-[10px] font-mono text-apple-text-tertiary">ESC to close</span>
            </div>

            {/* Terminal Body */}
            <div
              onClick={() => inputRef.current?.focus()}
              className="flex-1 p-4 sm:p-5 font-mono overflow-y-auto space-y-3 cursor-text bg-black/70 text-xs sm:text-sm"
            >
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-apple-emerald">abdillah@dev</span>
                    <span className="text-apple-blue">$</span>
                    <span className="text-white font-medium">{item.command}</span>
                  </div>
                  <div className="pl-3 border-l border-white/10 py-0.5">{item.output}</div>
                </div>
              ))}

              <div className="flex items-center gap-1.5">
                <span className="text-apple-emerald">abdillah@dev</span>
                <span className="text-apple-blue">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleCommand(inputVal);
                  }}
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm caret-apple-blue"
                  autoFocus
                  placeholder="type 'help', 'skills', or 'projects'..."
                />
              </div>

              <div ref={bottomRef} />
            </div>

            <div className="px-4 py-2 bg-white/[0.02] border-t border-white/5 text-[10px] font-mono text-apple-text-tertiary">
              Commands: about, skills, projects, experience, education, contact, clear, exit
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
