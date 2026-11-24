import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Africa/Dar_es_Salaam',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative border-t border-white/10 bg-black/60 backdrop-blur-2xl py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Location */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm tracking-tight text-white">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-white/20">/</span>
            <span className="text-xs text-apple-text-secondary">
              {PERSONAL_INFO.role}
            </span>
          </div>
          <p className="text-xs text-apple-text-tertiary mt-0.5">
            {PERSONAL_INFO.location}
          </p>
        </div>

        {/* Live Local Time & Status */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-mono text-apple-text-secondary">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Opportunities</span>
          </div>

          <div className="bg-white/5 px-3 py-1 rounded-full border border-white/5">
            Dar es Salaam: <span className="text-white">{localTime || 'EAT'}</span> (UTC+3)
          </div>
        </div>

        {/* Copyright & Top */}
        <div className="flex items-center gap-4 text-xs text-apple-text-tertiary">
          <span>&copy; {new Date().getFullYear()} {PERSONAL_INFO.shortName}.</span>
          <a href="#hero" className="hover:text-white transition-colors">
            Top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
};
