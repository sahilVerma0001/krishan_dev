import { Globe, Cpu, Database, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const technicalSkills = [
    { category: "Frontend Development", icon: Globe, skills: ["React.js", "Next.js", "Tailwind CSS", "Redux", "TypeScript", "Framer Motion"] },
    { category: "Backend Engineering", icon: Cpu, skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Bcrypt", "GraphQL"] },
    { category: "Database & Cloud", icon: Database, skills: ["MongoDB", "PostgreSQL", "SQL", "AWS", "Vercel"] },
    { category: "Core Programming", icon: Terminal, skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"] }
  ];

  return (
    <section id="skills" className="py-20 bg-[var(--bg-page)] relative overflow-hidden theme-transition">
      <div className="absolute top-1/4 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.015] pointer-events-none select-none flex">
         <div className="text-[8rem] md:text-[12rem] font-black tracking-tighter text-[var(--text-primary)]">TECH STACK</div>
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 max-w-[1500px]">
        <div className="mb-16 reveal-on-scroll">
           <div className="flex items-center gap-4 mb-6">
             <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
             <span className="font-mono text-[10px] sm:text-xs text-[var(--text-muted)] tracking-[0.3em] uppercase">Core Execution Stack</span>
           </div>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] leading-none tracking-tight">
              TECHNICAL<br /><span className="text-[var(--text-dim)]">CAPABILITIES.</span>
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 relative z-10">
           {technicalSkills.map((cat, index) => (
             <div key={index} className="group p-8 lg:p-10 bg-[var(--bg-card)] rounded-[2rem] lg:rounded-[2.5rem] border border-[var(--border-subtle)] hover:bg-[var(--hover-surface)] transition-colors duration-500 reveal-on-scroll theme-transition">
                <div className="flex items-start justify-between mb-8">
                   <div className="w-14 h-14 bg-[var(--bg-inner)] border border-[var(--border-medium)] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                     <cat.icon className="w-6 h-6 text-[var(--text-primary)]" />
                   </div>
                   <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest uppercase py-1 px-3 border border-[var(--border-subtle)] bg-[var(--bg-inner)] rounded-full">MODULE 0{index + 1}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-8 tracking-wide">{cat.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-[var(--bg-inner)] text-[var(--text-secondary)] font-mono text-xs tracking-wider uppercase border border-[var(--border-subtle)] rounded-xl hover:border-[var(--border-accent)] hover:text-[var(--text-primary)] transition-all cursor-default theme-transition">{skill}</span>
                  ))}
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
