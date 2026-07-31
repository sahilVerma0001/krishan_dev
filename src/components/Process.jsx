import { Search, Compass, Code2, Rocket } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Process() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Consultation & Scope",
      description: "We discuss your business goals, target audience, key features needed, and establish a clear timeline and budget.",
      deliverable: "Clear Scope & Timeline Agreement"
    },
    {
      number: "02",
      icon: Compass,
      title: "Design & Layout",
      description: "Creating clean, modern, and mobile-friendly visual layouts designed specifically to turn your visitors into customers.",
      deliverable: "Visual Design & Page Layouts"
    },
    {
      number: "03",
      icon: Code2,
      title: "Development & Testing",
      description: "Building your website or app with fast, reliable code, sending regular progress updates, and thorough mobile testing.",
      deliverable: "Working Product Preview"
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Support",
      description: "Publishing your site or app live to the web, verifying fast load speeds, and providing ongoing support so you never worry.",
      deliverable: "Live Launch & Ongoing Help"
    }
  ];

  return (
    <section id="process" className="py-24 bg-[var(--bg-page)] relative overflow-hidden theme-transition">
      <div className="absolute top-1/4 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.015] pointer-events-none select-none flex">
        <div className="text-[8rem] md:text-[12rem] font-black tracking-tighter text-[var(--text-primary)] uppercase">METHODOLOGY</div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 max-w-[1500px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 reveal-on-scroll">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
              <span className="font-mono text-[10px] sm:text-xs text-[var(--text-muted)] tracking-[0.3em] uppercase">Working Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] leading-none tracking-tight">
              HOW WE<br />
              <span className="text-[var(--text-dim)]">BUILD TOGETHER.</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0 max-w-md">
            <p className="text-[var(--text-secondary)] font-light leading-relaxed text-base">
              A transparent, outcome-focused methodology designed to reduce risk, maintain velocity, and ensure exceptional product quality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-[2rem] bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-accent)] hover:bg-[var(--hover-surface)] transition-all duration-500 reveal-on-scroll flex flex-col justify-between theme-transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-2xl font-black text-[var(--text-dim)] group-hover:text-[var(--text-primary)] transition-colors">
                      {step.number}
                    </span>
                    <div className={`p-3.5 bg-[var(--bg-inner)] rounded-2xl border border-[var(--border-medium)] transition-colors duration-500 ${isDark ? 'group-hover:bg-white' : 'group-hover:bg-[#0f172a]'}`}>
                      <Icon className={`w-5 h-5 text-[var(--text-primary)] transition-colors ${isDark ? 'group-hover:text-black' : 'group-hover:text-white'}`} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-[var(--text-secondary)] text-sm font-light leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-medium)]">
                  <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider block mb-1">Target Outcome</span>
                  <span className="text-xs font-semibold text-[var(--text-primary)]">{step.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
