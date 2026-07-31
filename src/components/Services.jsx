import { Code, Smartphone, Zap, Cloud } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Services() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const services = [
    { icon: Code, title: "Custom Web Development", description: "Modern, high-converting business websites, landing pages, and online stores. Built to work fast on mobile phones and look incredible.", tag: "WEBSITES / E-COMMERCE / LANDING PAGES" },
    { icon: Smartphone, title: "Mobile App Development", description: "Custom iOS and Android mobile apps for your business, designed to give your customers a seamless, fast, and intuitive experience.", tag: "IOS & ANDROID MOBILE APPS" },
    { icon: Zap, title: "Website Redesign & Speed", description: "Transform your existing website into a modern, ultra-fast platform that loads in less than a second and turns visitors into customers.", tag: "SPEED OPTIMIZATION / REDESIGN" },
    { icon: Cloud, title: "Maintenance & Support", description: "Ongoing support and maintenance to ensure your website and app stay secure, fast, bug-free, and updated 24/7.", tag: "24/7 SUPPORT & UPDATES" }
  ];

  return (
    <section id="services" className="py-20 bg-[var(--bg-page)] relative overflow-hidden theme-transition">
      <div className="absolute top-1/3 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.015] pointer-events-none select-none flex">
         <div className="text-[8rem] md:text-[12rem] font-black tracking-tighter text-[var(--text-primary)] uppercase">SERVICES</div>
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 max-w-[1500px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 reveal-on-scroll">
           <div>
             <div className="flex items-center gap-4 mb-5">
               <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
               <span className="font-mono text-[10px] sm:text-xs text-[var(--text-muted)] tracking-[0.3em] uppercase">Core Offerings</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] leading-none tracking-tight">
               WHAT I BUILD<br /><span className="text-[var(--text-dim)]">FOR YOUR BUSINESS.</span>
             </h2>
           </div>
           <div className="mt-8 md:mt-0 max-w-sm">
             <p className="text-[var(--text-secondary)] font-light leading-relaxed">End-to-end software engineering solutions focused on product quality, speed to market, and technical reliability.</p>
           </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group relative p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-accent)] transition-all duration-700 reveal-on-scroll overflow-hidden theme-transition">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--glow-color)] rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className={`p-5 bg-[var(--bg-inner)] rounded-2xl border border-[var(--border-medium)] transition-colors duration-500 ${isDark ? 'group-hover:bg-white' : 'group-hover:bg-[#0f172a]'}`}>
                        <Icon className={`w-6 h-6 text-[var(--text-primary)] transition-colors ${isDark ? 'group-hover:text-black' : 'group-hover:text-white'}`} />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-[var(--text-muted)] tracking-widest uppercase border border-[var(--border-subtle)] px-4 py-1.5 rounded-full">0{index + 1}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-[var(--text-primary)] mb-6 tracking-wide group-hover:tracking-widest transition-all duration-500">{service.title}</h3>
                  </div>
                  <div>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-base mb-6 font-light">{service.description}</p>
                    <div className="flex items-center justify-between border-t border-[var(--border-medium)] pt-6">
                       <span className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase">{service.tag}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}