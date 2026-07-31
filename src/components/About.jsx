import { Shield, Zap, Target, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const highlights = [
    { icon: Shield, title: "Production Stability", desc: "Clean, enterprise-grade architecture built for high availability and zero downtime." },
    { icon: Zap, title: "Sub-Second Performance", desc: "Obsessively optimized frontend & backend code for rapid page loading and fluid interactions." },
    { icon: Target, title: "Business-First Architecture", desc: "Translating complex business requirements into clean, scalable software that drives real ROI." }
  ];

  return (
    <section id="about" className="py-24 bg-[var(--bg-page)] relative overflow-hidden theme-transition">

      <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.015] pointer-events-none select-none flex">
        <div className="text-[8rem] md:text-[12rem] font-black tracking-tighter text-[var(--text-primary)] uppercase">PARTNERSHIP</div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 max-w-[1500px]">

        <div className="mb-16 reveal-on-scroll">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
            <span className="font-mono text-[10px] sm:text-xs text-[var(--text-muted)] tracking-[0.3em] uppercase">Meet The Founder & Lead Engineer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] leading-none tracking-tight">
            YOUR DEDICATED
            <br />
            <span className="text-[var(--text-dim)]">SOFTWARE ENGINEERING PARTNER.</span>
          </h2>
        </div>

        {/* ── 2-COLUMN PROFILE & BIO SHOWCASE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 reveal-on-scroll">

          {/* Left Column — Portrait Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className={`relative w-full max-w-md rounded-[2.5rem] p-6 lg:p-8 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.18)] border theme-transition ${isDark ? 'bg-gradient-to-b from-[#181a24] to-[#0d0f14] border-white/10' : 'bg-gradient-to-b from-[#ffffff] to-[#cbd5e1]/60 border-black/10'}`}>

              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Availability Badge */}
              <div className="flex items-center justify-between mb-4 z-10 relative">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  AVAILABLE FOR CONTRACTS
                </div>
                <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest uppercase">// JAIPUR, IN</span>
              </div>

              {/* Profile Image Frame */}
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-b from-slate-900/10 to-slate-900/40 border border-white/10 flex items-end justify-center group">
                <img
                  src={isDark ? "/Krishan_dark.png" : "/Krishan_light.png"}
                  alt="Krishan Lal - Full Stack Engineer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Image Vignette Gradient */}
                <div className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-gradient-to-t from-black/60 via-transparent to-transparent' : 'bg-gradient-to-t from-slate-900/40 via-transparent to-transparent'}`} />

                {/* Floating Overlay Badge on Image */}
                <div className={`absolute bottom-4 left-4 right-4 p-4 rounded-2xl backdrop-blur-xl border z-10 flex items-center justify-between transition-colors duration-500 ${isDark ? 'bg-black/50 border-white/15 text-white' : 'bg-white/80 border-black/10 text-slate-900'}`}>
                  <div>
                    <h3 className={`font-bold text-sm tracking-wide ${isDark ? 'text-white' : 'text-slate-900'}`}>Krishan Lal</h3>
                    <p className={`text-[10px] font-mono ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Full-Stack Architect & Consultant</p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                </div>
              </div>

              {/* Quick Spec Bar below Image */}
              <div className="mt-5 grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-xl bg-[var(--bg-inner)] border border-[var(--border-subtle)]">
                  <span className="text-lg font-black text-[var(--text-primary)] block">3+ Yrs</span>
                  <span className="text-[9px] font-mono text-[var(--text-muted)] uppercase tracking-wider">Engineering Focus</span>
                </div>
                <div className="p-3 rounded-xl bg-[var(--bg-inner)] border border-[var(--border-subtle)]">
                  <span className="text-lg font-black text-[var(--text-primary)] block">100%</span>
                  <span className="text-[9px] font-mono text-[var(--text-muted)] uppercase tracking-wider">On-Time Record</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column — Bio & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-black text-[var(--text-primary)] mb-6 tracking-tight">
              Building Web & Mobile Solutions That Turn Visitors Into Customers
            </h3>

            <p className="text-base md:text-lg text-[var(--text-secondary)] font-light leading-relaxed mb-6">
              Hi, I'm <span className="text-[var(--text-primary)] font-semibold">Krishan Lal</span>. I help business owners, startups, and founders turn their ideas into fast, modern, and easy-to-use websites and mobile applications.
            </p>

            <p className="text-base md:text-lg text-[var(--text-secondary)] font-light leading-relaxed mb-6">
              With <span className="text-[var(--text-primary)] font-medium">1+ year of focused hands-on development experience</span>, I take complete responsibility for building your digital product — ensuring clean design, mobile responsiveness, fast load times, and clear communication every step of the way.
            </p>

            <p className="text-base md:text-lg text-[var(--text-secondary)] font-light leading-relaxed mb-8">
              You don't need to worry about complex technical details. My commitment is to deliver a <span className="text-[var(--text-primary)] font-medium">reliable product on time</span> that elevates your brand and brings real value to your business.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className={`group flex items-center justify-center gap-3 px-8 py-4 font-bold uppercase tracking-[0.2em] text-xs rounded-full transition-all duration-300 ${isDark ? 'bg-white text-black hover:scale-105' : 'bg-[#0f172a] text-white hover:scale-105'}`}
              >
                <span>GET IN TOUCH WITH ME</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Quote Block */}
        <div className="mb-20 reveal-on-scroll">
          <div className="p-10 md:p-14 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[2rem] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 theme-transition">
            <div className="flex-1">
              <div className="pl-6 border-l-2 border-[var(--border-accent)]">
                <p className="text-xl md:text-2xl text-[var(--text-primary)] font-medium italic leading-relaxed opacity-80">
                  "Your business growth is our priority. We build digital products that are easy to use, fast to load, and built to convert."
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-1 shrink-0">
              <span className="text-5xl md:text-6xl font-black text-[var(--text-primary)] leading-none">100%</span>
              <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-[0.3em]">Client Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Core Commitments Grid */}
        <div className="reveal-on-scroll">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
            <span className="font-mono text-[10px] sm:text-xs text-[var(--text-muted)] tracking-[0.3em] uppercase">Core Commitments</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {highlights.map((item, i) => (
              <div key={i} className="group p-8 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[2rem] hover:border-[var(--border-accent)] transition-all duration-500 theme-transition">
                <div className={`mb-6 w-12 h-12 flex items-center justify-center bg-[var(--bg-inner)] rounded-2xl border border-[var(--border-medium)] transition-all duration-500 ${isDark ? 'group-hover:bg-white group-hover:scale-105' : 'group-hover:bg-[#0f172a] group-hover:scale-105'}`}>
                  <item.icon className={`w-5 h-5 text-[var(--text-primary)] transition-colors ${isDark ? 'group-hover:text-black' : 'group-hover:text-white'}`} />
                </div>
                <h3 className="text-[var(--text-primary)] font-bold text-sm tracking-widest uppercase mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
