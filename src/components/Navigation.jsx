import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#process', label: 'Process' },
    { href: '#projects', label: 'Our Work' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Bulletproof scroll tracking to accurately update active navbar section
      const scrollPosition = window.scrollY + 250;
      
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const scrollToSection = (e, href) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';

    setTimeout(() => {
      const targetId = href.startsWith('#') ? href.substring(1) : href;
      setActiveSection(targetId);
      const element = document.getElementById(targetId) || document.querySelector(href);
      if (element) {
        const navOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 120);
  };

  const isDark = theme === 'dark';

  return (
    <>
      {/* ── DESKTOP NAV ── */}
      <nav className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-in-out pointer-events-none hidden lg:block ${isScrolled ? 'top-6' : 'top-8'}`}>
        <div className="container mx-auto px-6 flex justify-center">
          <div className={`flex items-center justify-between transition-all duration-700 ease-in-out pointer-events-auto h-14 px-8 border rounded-full theme-transition ${isScrolled
            ? `backdrop-blur-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] w-max ${isDark ? 'bg-[#0f1115]/80 border-white/10' : 'bg-[#C7D2FE]/50 border-[#6366f1]/15'}`
            : 'bg-transparent border-transparent w-max'
            }`}>

            <div className="flex items-center space-x-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-4 py-1.5 text-xs font-semibold tracking-widest uppercase transition-all duration-500 ease-in-out relative group ${isActive
                      ? (isDark ? 'text-white' : 'text-[#0f172a]')
                      : (isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-[#0f172a]')
                      }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] transition-all duration-500 ease-in-out ${isDark ? 'bg-white' : 'bg-[#0f172a]'} ${isActive ? 'w-4 opacity-100' : 'w-0 opacity-0 group-hover:w-4 group-hover:opacity-100'}`} />
                  </a>
                );
              })}
            </div>

            <div className="ml-4">
              <button
                onClick={toggleTheme}
                className={`relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500 overflow-hidden ${isDark
                  ? 'text-slate-400 hover:text-white hover:bg-white/10'
                  : 'text-slate-500 hover:text-[#0f172a] hover:bg-black/5'
                  }`}
                aria-label="Toggle theme"
              >
                <Sun className={`absolute w-[18px] h-[18px] transition-all duration-500 ${isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
                <Moon className={`absolute w-[18px] h-[18px] transition-all duration-500 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── MOBILE NAVBAR (Bottom Fixed) ── */}
      <nav className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none ${isScrolled ? 'pb-4' : 'pb-6'}`}>
        <div className="container mx-auto px-4 flex justify-center">
          <div className={`pointer-events-auto flex items-center justify-between w-full h-14 px-6 rounded-2xl border theme-transition backdrop-blur-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] ${isDark ? 'bg-[#0f1115]/90 border-white/10' : 'bg-[#C7D2FE]/70 border-[#6366f1]/15'}`}>

            <span className={`text-[10px] font-bold tracking-[0.3em] uppercase ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
              {activeSection === 'home' ? 'START' : activeSection}
            </span>

            {/* Right — Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-500 ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-[#0f172a]'}`}
              >
                {isDark ? <Moon size={18} /> : <Sun size={18} />}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`w-10 h-10 flex items-center justify-center rounded-xl ${isDark ? 'bg-white/5 text-white' : 'bg-[#0f172a]/5 text-[#0f172a]'}`}
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── MOBILE FULL-SCREEN MENU ── */}
      <div className={`lg:hidden fixed inset-0 z-[60] transition-all duration-500 ${isMobileMenuOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible'}`}>

        {/* Backdrop */}
        <div
          className={`absolute inset-0 backdrop-blur-2xl transition-opacity duration-700 ${isDark ? 'bg-[#0a0c10]/98' : 'bg-[#E2E8F0]/98'} ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className={`relative h-full flex flex-col justify-between px-8 py-12 transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

          {/* Header */}
          <div className="flex items-center justify-between">
            <span className={`text-[10px] font-bold tracking-[0.4em] uppercase ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              Menu Navigation
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className={`w-12 h-12 flex items-center justify-center rounded-2xl border transition-all duration-300 ${isDark ? 'text-white border-white/10 bg-white/5' : 'text-[#0f172a] border-[#6366f1]/15 bg-white/50'}`}
            >
              <X size={20} />
            </button>
          </div>

          {/* Large Vertical Links */}
          <div className="flex flex-col gap-1 -mt-20">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`group flex items-center justify-between py-4 rounded-xl transition-all duration-500 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
                  style={{ transitionDelay: `${index * 60 + 100}ms` }}
                >
                  <span className={`text-4xl sm:text-5xl font-black tracking-tighter uppercase transition-all duration-500 ${isActive ? (isDark ? 'text-white' : 'text-[#020617]') : (isDark ? 'text-slate-800 hover:text-white' : 'text-slate-300 hover:text-[#020617]')}`}>
                    {link.label}
                  </span>
                  {isActive && <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-white' : 'bg-[#020617]'}`} />}
                </a>
              );
            })}
          </div>

          {/* Social / Footer */}
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-2">
              <span className={`text-[9px] font-bold tracking-[0.2em] uppercase ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>Available for projects</span>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className={`text-xs font-mono hover:underline underline-offset-4 transition-all ${isDark ? 'text-white/70 hover:text-white' : 'text-[#0f172a]/70 hover:text-[#0f172a]'}`}
              >
                Feel Free to Reach Out
              </a>
            </div>

            <button
              onClick={() => { toggleTheme(); }}
              className={`h-12 w-12 rounded-2xl flex items-center justify-center border transition-all ${isDark ? 'border-white/10 text-white' : 'border-[#6366f1]/15 text-[#0f172a]'}`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
