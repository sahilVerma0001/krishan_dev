import { ArrowUpRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      period: "2026 – PRESENT",
      role: "Full-Stack Web Developer",
      company: "Capco Insurance",
      highlights: [
        "Architecting core web applications and automated workflow engines for enterprise insurance operations.",
        "Enforcing multi-tier security standards, secure API endpoints, and high operational reliability.",
        "Optimizing server-side rendering and database queries to ensure sub-second response times."
      ]
    },
    {
      period: "2025 (JUL – DEC)",
      role: "MERN Stack Software Engineer",
      company: "NetParam Technology",
      highlights: [
        "Engineered production MERN web applications and custom e-commerce engines in an agile team environment.",
        "Designed and deployed scalable RESTful APIs with MongoDB database schemas and Express routing.",
        "Streamlined CI/CD deployment pipelines, automated testing, and version control workflows."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[var(--bg-page)] relative overflow-hidden text-[var(--text-primary)] theme-transition">
      <div className="absolute top-1/4 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.015] pointer-events-none select-none flex">
        <div className="text-[8rem] md:text-[12rem] font-black tracking-tighter">EXPERIENCE</div>
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 max-w-[1500px]">
        <div className="mb-16 reveal-on-scroll">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
            <span className="font-mono text-[10px] sm:text-xs text-[var(--text-muted)] tracking-[0.3em] uppercase">Production Background</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] leading-none tracking-tight">
            PROVEN<br /><span className="text-[var(--text-dim)]">TRACK RECORD.</span>
          </h2>
        </div>
        <div className="flex flex-col border-t border-[var(--border-medium)]">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-12 lg:py-14 border-b border-[var(--border-medium)] hover:bg-[var(--hover-surface)] transition-colors duration-500 reveal-on-scroll">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--glow-color)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="lg:col-span-3 flex flex-col justify-start relative z-10">
                <span className="font-mono text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-widest mb-4">{exp.period}</span>
                <div className="flex items-center gap-2 text-[var(--text-muted)] uppercase tracking-widest text-xs font-bold">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]" />
                  <span>Verified Experience</span>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col justify-start relative z-10">
                <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] mb-2 leading-tight tracking-tight group-hover:translate-x-2 transition-transform duration-500">{exp.role}</h3>
                <p className="text-lg text-[var(--text-secondary)] font-medium">{exp.company}</p>
              </div>
              <div className="lg:col-span-5 relative z-10">
                <ul className="space-y-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-4 text-[var(--text-secondary)] leading-relaxed text-base font-light">
                      <ArrowUpRight className="w-5 h-5 mt-1 shrink-0 text-[var(--text-dim)] group-hover:text-[var(--text-primary)] transition-colors duration-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Client Track Record Metrics Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 reveal-on-scroll">
          {[
            { stat: "100%", label: "On-Time Milestone Delivery" },
            { stat: "<300ms", label: "Average API Latency" },
            { stat: "99.9%", label: "Target System Reliability" },
            { stat: "Zero", label: "Downtime Deployments" }
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl theme-transition text-center">
              <span className="text-3xl md:text-4xl font-black text-[var(--text-primary)] block mb-1">{item.stat}</span>
              <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
