import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <footer className="bg-[var(--bg-page)] border-t border-[var(--border-subtle)] pt-16 pb-10 relative overflow-hidden theme-transition">
      <div className="absolute bottom-[-10%] left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.015] pointer-events-none select-none flex justify-center">
         <div className="text-[8rem] md:text-[12rem] font-black tracking-tighter text-[var(--text-primary)]">STUDIO.</div>
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 max-w-[1500px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-end pb-16">
          <div className="md:col-span-5 text-left">
            <h3 className="text-3xl md:text-4xl font-black text-[var(--text-primary)] mb-6 tracking-tight">KRISHAN LAL</h3>
            <p className="text-[var(--text-secondary)] text-sm font-light leading-relaxed max-w-sm">
              Building high-quality, modern websites and mobile applications for growing businesses. Delivered on time with 100% commitment to quality and service.
            </p>
          </div>
          <div className="md:col-span-2 flex justify-start md:justify-center">
            <button onClick={scrollToTop} className="group flex flex-col items-center gap-4 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all duration-500">
              <div className={`w-16 h-16 rounded-full border border-[var(--border-medium)] flex items-center justify-center transition-all duration-500 overflow-hidden ${isDark ? 'group-hover:border-white/50 group-hover:bg-white' : 'group-hover:border-black/50 group-hover:bg-[#0f172a]'}`}>
                 <div className="flex flex-col items-center gap-8 -translate-y-6 group-hover:-translate-y-12 transition-transform duration-500">
                    <ArrowUp className={`w-5 h-5 ${isDark ? 'text-white' : 'text-[#0f172a]'}`} />
                    <ArrowUp className={`w-5 h-5 ${isDark ? 'text-black' : 'text-white'}`} />
                 </div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to Top</span>
            </button>
          </div>
          <div className="md:col-span-5 flex justify-start md:justify-end gap-3">
            {[
              { icon: Github, href: "https://github.com/sahilVerma0001", label: "GH" },
              { icon: Linkedin, href: "https://linkedin.com", label: "IN" },
              { icon: Mail, href: "mailto:krishanlal7770@gmail.com", label: "EM" }
            ].map((social, i) => (
              <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
                <div className={`w-16 h-16 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl flex items-center justify-center text-[var(--text-secondary)] group-hover:-translate-y-2 transition-all duration-500 theme-transition ${isDark ? 'group-hover:text-black group-hover:bg-white group-hover:border-white' : 'group-hover:text-white group-hover:bg-[#0f172a] group-hover:border-[#0f172a]'}`}>
                  <social.icon className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-mono tracking-widest uppercase text-[var(--text-dim)] group-hover:text-[var(--text-primary)] transition-colors duration-300">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[var(--text-muted)] font-mono text-[9px] font-bold uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[var(--text-muted)] rounded-full" />
            Designed & Engineered By Krishan Lal
          </p>
          <p className="text-[var(--text-dim)] font-mono text-[9px] font-bold uppercase tracking-[0.3em]">&copy; {currentYear} KRISHAN LAL. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
