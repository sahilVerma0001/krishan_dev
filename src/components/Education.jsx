import { GraduationCap, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Education() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const coreCompetencies = [
    "Certified Computer Hardware & Network Administrator (CHNA)",
    "Enterprise MERN & Next.js System Architecture",
    "High-Throughput Database Design (MongoDB / SQL)",
    "Secure REST API & Authentication Architecture"
  ];

  return (
    <section id="education" className="py-24 bg-[var(--bg-page)] relative overflow-hidden theme-transition">
      <div className="absolute top-1/4 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.015] pointer-events-none select-none flex">
         <div className="text-[8rem] md:text-[12rem] font-black tracking-tighter text-[var(--text-primary)]">FOUNDATION</div>
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 max-w-[1500px]">
        <div className="mb-16 reveal-on-scroll">
           <div className="flex items-center gap-4 mb-6">
             <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
             <span className="font-mono text-[10px] sm:text-xs text-[var(--text-muted)] tracking-[0.3em] uppercase">Engineering Credentials</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] leading-none tracking-tight">
             TECHNICAL FOUNDATION &<br /><span className="text-[var(--text-dim)]">CREDENTIALS.</span>
           </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7 reveal-on-scroll">
            <div className="p-8 lg:p-12 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[2.5rem] lg:rounded-[3rem] hover:bg-[var(--hover-surface)] transition-colors duration-500 group h-full flex flex-col justify-between theme-transition">
              <div>
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 bg-[var(--bg-inner)] border border-[var(--border-medium)] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <GraduationCap className="w-6 h-6 text-[var(--text-primary)]" />
                  </div>
                  <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest uppercase py-1 px-3 border border-[var(--border-subtle)] bg-[var(--bg-inner)] rounded-full">CS DEGREE</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-[var(--text-primary)] tracking-tight mb-3 leading-tight">Bachelor of Computer Applications (BCA)</h3>
                <p className="text-base text-[var(--text-secondary)] font-light mb-6">Deep specialization in Computer Science, Systems Architecture, and Database Engineering.</p>
                
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {["Data Structures & Alg", "Database Systems", "Computer Networks", "Software Engineering"].map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-accent)]" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-[var(--border-medium)]">
                <div className="flex items-center gap-4">
                   <ShieldCheck className="w-8 h-8 text-emerald-500" />
                   <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest">Verified Technical<br/>Foundations</span>
                </div>
                <span className="font-mono text-sm text-[var(--text-secondary)] tracking-widest border border-[var(--border-medium)] px-5 py-2.5 rounded-full bg-[var(--bg-inner)]">2022 — 2025</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 reveal-on-scroll flex flex-col gap-6">
            <div className="p-8 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[2.5rem] lg:rounded-[3rem] hover:bg-[var(--hover-surface)] transition-colors duration-500 group flex-1 theme-transition">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-[var(--bg-inner)] border border-[var(--border-medium)] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Award className="w-6 h-6 text-[var(--text-primary)]" />
                </div>
                <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest uppercase py-1 px-3 border border-[var(--border-subtle)] bg-[var(--bg-inner)] rounded-full">SPECIALIZATIONS</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-6 tracking-wide">Industry Credentials</h3>
              <ul className="space-y-3">
                {coreCompetencies.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 bg-[var(--bg-inner)] rounded-2xl border border-[var(--border-subtle)] hover:border-[var(--border-accent)] transition-all duration-500 group/item theme-transition">
                    <CheckCircle2 className="w-4 h-4 mt-1 shrink-0 text-emerald-500" />
                    <span className="text-[var(--text-secondary)] font-medium leading-relaxed text-xs">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
