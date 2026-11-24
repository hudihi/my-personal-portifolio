import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PhysicsCard } from './PhysicsCard';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-apple-blue mb-2 block">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
          Let’s discuss your next project.
        </h2>
        <p className="text-base sm:text-lg text-apple-text-secondary leading-relaxed">
          Available for software developer roles, mobile app engineering, and full-stack backend contracts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto">
        {/* Left Side: Direct Contact Details */}
        <div className="lg:col-span-5 space-y-4">
          <PhysicsCard className="p-7 sm:p-8" glowColor="rgba(41, 151, 255, 0.15)">
            <span className="text-xs font-mono uppercase tracking-wider text-apple-text-secondary">
              Direct Channels
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight mt-1 mb-2">
              Contact Information
            </h3>
            <p className="text-xs sm:text-sm text-apple-text-secondary leading-relaxed mb-6">
              Feel free to reach out directly via email, phone, or connected professional networks.
            </p>

            <div className="space-y-3">
              {/* Email Pill */}
              <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 overflow-hidden">
                  <Mail className="w-4 h-4 text-apple-blue shrink-0" />
                  <span className="text-xs font-mono text-white/90 truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white flex items-center gap-1 transition-colors shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Pill */}
              <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 overflow-hidden">
                  <Phone className="w-4 h-4 text-apple-emerald shrink-0" />
                  <span className="text-xs font-mono text-white/90 truncate">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white flex items-center gap-1 transition-colors shrink-0"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Pill */}
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2 text-xs text-apple-text-secondary font-mono">
                <MapPin className="w-4 h-4 text-apple-purple shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Links */}
            <div className="mt-6 pt-5 border-t border-white/5 flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] text-xs text-white transition-colors border border-white/5"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-apple-text-secondary" />
                  <span>github.com/hudihi</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-apple-text-tertiary" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] text-xs text-white transition-colors border border-white/5"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-apple-text-secondary" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-apple-text-tertiary" />
              </a>
            </div>
          </PhysicsCard>
        </div>

        {/* Right Side: Clean Message Form */}
        <div className="lg:col-span-7">
          <PhysicsCard className="p-7 sm:p-8" glowColor="rgba(191, 90, 242, 0.12)">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-apple-text-secondary mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-apple-blue transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-apple-text-secondary mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-apple-blue transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-apple-text-secondary mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your mobile app project, backend needs, or role details..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-apple-blue transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-[#e5e5ea] transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center gap-2 text-emerald-600 font-bold">
                    <Check className="w-4 h-4" /> Message Sent!
                  </span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </PhysicsCard>
        </div>
      </div>
    </section>
  );
};
