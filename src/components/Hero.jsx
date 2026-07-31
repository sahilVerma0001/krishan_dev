import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Download, Calendar, ArrowUpRight, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// Animated terminal component showcasing client business guarantees
function ClientGuaranteeCard({ isDark }) {
  const [visibleLines, setVisibleLines] = useState(0);

  const codeLines = [
    { indent: 0, tokens: [{ text: 'const', color: isDark ? '#C792EA' : '#7c3aed' }, { text: ' clientGuarantee', color: isDark ? '#82AAFF' : '#2563eb' }, { text: ' = {', color: isDark ? '#89DDFF' : '#64748b' }] },
    { indent: 1, tokens: [{ text: 'services', color: isDark ? '#F78C6C' : '#c2410c' }, { text: ': ', color: isDark ? '#89DDFF' : '#64748b' }, { text: "'Websites & Mobile Apps'", color: isDark ? '#C3E88D' : '#16a34a' }, { text: ',', color: isDark ? '#89DDFF' : '#64748b' }] },
    { indent: 1, tokens: [{ text: 'design', color: isDark ? '#F78C6C' : '#c2410c' }, { text: ': ', color: isDark ? '#89DDFF' : '#64748b' }, { text: "'Modern & Conversion-Focused'", color: isDark ? '#C3E88D' : '#16a34a' }, { text: ',', color: isDark ? '#89DDFF' : '#64748b' }] },
    { indent: 1, tokens: [{ text: 'delivery', color: isDark ? '#F78C6C' : '#c2410c' }, { text: ': ', color: isDark ? '#89DDFF' : '#64748b' }, { text: "'100% On-Time Commitment'", color: isDark ? '#C3E88D' : '#16a34a' }, { text: ',', color: isDark ? '#89DDFF' : '#64748b' }] },
    { indent: 1, tokens: [{ text: 'communication', color: isDark ? '#F78C6C' : '#c2410c' }, { text: ': ', color: isDark ? '#89DDFF' : '#64748b' }, { text: "'Daily Progress Updates'", color: isDark ? '#C3E88D' : '#16a34a' }, { text: ',', color: isDark ? '#89DDFF' : '#64748b' }] },
    { indent: 1, tokens: [{ text: 'support', color: isDark ? '#F78C6C' : '#c2410c' }, { text: ': ', color: isDark ? '#89DDFF' : '#64748b' }, { text: "'Dedicated Post-Launch Help'", color: isDark ? '#C3E88D' : '#16a34a' }] },
    { indent: 0, tokens: [{ text: '};', color: isDark ? '#89DDFF' : '#64748b' }] },
    { indent: 0, tokens: [] },
    { indent: 0, tokens: [{ text: 'export default', color: isDark ? '#C792EA' : '#7c3aed' }, { text: ' clientGuarantee', color: isDark ? '#82AAFF' : '#2563eb' }, { text: ';', color: isDark ? '#89DDFF' : '#64748b' }] },
  ];

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timer = setTimeout(() => setVisibleLines(prev => prev + 1), 200);
      return () => clearTimeout(timer);
    }
  }, [visibleLines, codeLines.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -5 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ delay: 1.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full max-w-md lg:max-w-lg rounded-2xl lg:rounded-3xl overflow-hidden border theme-transition ${isDark ? 'bg-[#1a1b26] border-white/10 shadow-[0_35px_90px_rgba(0,0,0,0.85)]' : 'bg-white/90 backdrop-blur-xl border-black/10 shadow-[0_35px_80px_rgba(0,0,0,0.5),0_15px_30px_rgba(0,0,0,0.3)]'}`}
    >
      {/* Title Bar */}
      <div className={`flex items-center justify-between px-5 py-3.5 border-b ${isDark ? 'border-white/5 bg-[#15161e]' : 'border-black/5 bg-black/[0.03]'}`}>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className={`ml-3 font-mono text-[10px] tracking-widest uppercase ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            client-guarantee.js
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          AVAILABLE FOR NEW PROJECTS
        </div>
      </div>

      {/* Code Content */}
      <div className="p-5 lg:p-6 font-mono text-[11px] sm:text-xs lg:text-sm leading-relaxed min-h-[280px] lg:min-h-[320px]">
        {codeLines.map((line, i) => (
          <div
            key={i}
            className={`flex transition-all duration-500 ${i < visibleLines ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {/* Line Number */}
            <span className={`w-8 shrink-0 text-right mr-5 select-none ${isDark ? 'text-slate-600' : 'text-slate-300'}`}>
              {i + 1}
            </span>
            {/* Indentation + Tokens */}
            <span style={{ paddingLeft: `${line.indent * 20}px` }}>
              {line.tokens.map((token, j) => (
                <span key={j} style={{ color: token.color }}>{token.text}</span>
              ))}
            </span>
          </div>
        ))}
        {/* Blinking Cursor */}
        {visibleLines >= codeLines.length && (
          <div className="flex mt-1">
            <span className={`w-8 shrink-0 text-right mr-5 select-none ${isDark ? 'text-slate-600' : 'text-slate-300'}`}>
              {codeLines.length + 1}
            </span>
            <span className={`inline-block w-2 h-4 animate-pulse ${isDark ? 'bg-white/60' : 'bg-[#0f172a]/60'}`} />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-4 px-4 md:py-5 md:px-5 lg:py-6 lg:px-6 overflow-hidden bg-[var(--bg-page)] theme-transition"
    >
      {/* Outer Slashes */}
      <div className={`absolute top-12 right-6 md:right-10 lg:right-24 xl:right-32 hidden sm:flex gap-2 lg:gap-3 rotate-[20deg] z-0 pointer-events-none ${isDark ? 'opacity-40' : 'opacity-20'}`}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={`tr-${i}`} className={`w-1.5 md:w-2 lg:w-3 h-10 md:h-12 lg:h-16 rounded-full skew-x-[20deg] ${isDark ? 'bg-white/30' : 'bg-black/20'}`} />
        ))}
      </div>
      <div className={`absolute bottom-12 left-6 md:left-10 lg:left-24 xl:left-32 hidden sm:flex gap-2 lg:gap-3 rotate-[20deg] z-0 pointer-events-none ${isDark ? 'opacity-40' : 'opacity-20'}`}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={`bl-${i}`} className={`w-1.5 md:w-2 lg:w-3 h-10 md:h-12 lg:h-16 rounded-full skew-x-[20deg] ${isDark ? 'bg-white/30' : 'bg-black/20'}`} />
        ))}
      </div>

      <div className="absolute top-6 right-6 md:top-10 md:right-10 lg:right-16 font-mono tracking-[0.3em] md:tracking-[0.4em] text-[var(--text-muted)] font-semibold z-0 text-[9px] md:text-xs uppercase">
        WEB & MOBILE APP DEVELOPMENT
      </div>

      {/* ── POSTER CANVAS ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`relative w-full max-w-[1600px] min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-2.5rem)] lg:min-h-[calc(100vh-3rem)] rounded-[2rem] md:rounded-[3rem] lg:rounded-[3.5rem] overflow-hidden z-10 flex flex-col theme-transition ${isDark ? 'shadow-[0_50px_120px_rgba(0,0,0,0.95),0_20px_50px_rgba(0,0,0,0.8)] border border-white/10' : 'shadow-[0_50px_100px_-10px_rgba(0,0,0,0.65),0_20px_40px_-5px_rgba(0,0,0,0.45)] border border-black/15'}`}
      >
        {/* Canvas Background */}
        <div className={`absolute inset-0 transition-colors duration-700 ${isDark ? 'bg-[#11131a]' : 'bg-gradient-to-br from-[#E2E8F0] via-[#C7D2FE] to-[#F8FAFC]'}`} />

        {/* Ambient Orbs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-[-30%] left-[-15%] w-[80vw] h-[80vw] max-w-[700px] max-h-[700px] rounded-full blur-[120px] pointer-events-none ${isDark ? 'bg-[#1e293b]' : 'bg-[#93C5FD] mix-blend-overlay'}`}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] rounded-full blur-[100px] pointer-events-none ${isDark ? 'bg-[#1a1a2e]' : 'bg-[#C4B5FD] mix-blend-overlay'}`}
        />

        {/* Content Container */}
        <div className="relative w-full h-full flex-1 flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-16 z-20">

          {/* Main Typography + Guarantee Card Section */}
          <div className="flex-1 w-full flex flex-col lg:flex-row items-center justify-between mt-8 mb-10 md:my-0 pb-12 md:pb-0 z-30 gap-8 lg:gap-12">
            
            {/* Left — Text Column */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center pointer-events-auto">
              
              {/* Category Eyebrow */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
                <span className={`text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.3em] mb-3 md:mb-5 block whitespace-nowrap ${isDark ? 'text-slate-400' : 'text-[#0f172a] opacity-80'}`}>
                  CUSTOM WEBSITES & MOBILE APPS
                </span>
              </motion.div>

              {/* Bold Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 1, type: "spring", damping: 20 }}
                className={`text-[clamp(2rem,3.6vw,3.2rem)] font-black leading-[1.05] tracking-tight relative ${isDark ? 'text-white' : 'text-[#020617]'}`}
              >
                BUILDING DIGITAL PRODUCTS
                <br />
                THAT GROW YOUR BUSINESS
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}
                className={`mt-6 md:mt-8 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-lg ${isDark ? 'text-slate-400' : 'text-[#334155]'}`}
              >
                Turn your ideas into <span className={`font-semibold ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>fast, beautiful, and high-converting digital products</span>. Built with care, delivered on time.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#contact"
                  className={`group relative flex items-center justify-center gap-3 px-8 py-4 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs rounded-full overflow-hidden transition-all duration-300 ${isDark ? 'bg-white text-black hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]' : 'bg-[#0f172a] text-white hover:scale-105 shadow-[0_0_20px_rgba(0,0,0,0.15)]'}`}
                >
                  <span>GET A FREE QUOTE</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="#projects"
                  className={`group relative flex items-center justify-center gap-2 px-6 py-4 font-bold uppercase tracking-[0.15em] text-[10px] sm:text-xs rounded-full border transition-all duration-300 ${isDark ? 'border-white/20 text-white hover:bg-white/10' : 'border-black/20 text-[#0f172a] hover:bg-black/5'}`}
                >
                  <span>OUR RECENT WORK</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            </div>

            {/* Right — Guarantee Specs Window */}
            <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
              <ClientGuaranteeCard isDark={isDark} />
            </div>
          </div>

          {/* Bottom Watermark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1.2 }}
            className={`w-full flex justify-between items-center mt-auto pt-6 relative z-30 select-none ${isDark ? 'text-white/[0.25]' : 'text-[#020617]/[0.3]'}`}
          >
            {['P', 'O', 'R', 'T', 'F', 'O', 'L', 'I', 'O'].map((letter, i) => (
              <span key={i} className="text-xl sm:text-2xl md:text-3xl lg:text-[4rem] font-black tracking-tight">{letter}</span>
            ))}
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}