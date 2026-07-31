import { TrendingUp, Smartphone, Zap, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Benefits() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const benefits = [
    {
      icon: TrendingUp,
      title: "Built for Business Growth",
      description: "Every page and screen is strategically structured to guide your visitors toward contacting you or buying your product.",
      highlight: "High-Converting Design"
    },
    {
      icon: Smartphone,
      title: "100% Mobile & Tablet Ready",
      description: "Over 70% of your visitors browse from mobile phones. We guarantee your site and app look pixel-perfect on every screen size.",
      highlight: "Seamless Across Devices"
    },
    {
      icon: Zap,
      title: "Sub-Second Loading Speed",
      description: "Slow websites lose customers. We build ultra-fast platforms so your pages open instantly without keeping visitors waiting.",
      highlight: "Ultra-Fast Performance"
    },
    {
      icon: ShieldCheck,
      title: "Secure & Stress-Free",
      description: "We handle domain setup, security encryption, and hosting configuration so you get a smooth, hassle-free experience.",
      highlight: "Full Ownership & Support"
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[var(--bg-page)] relative overflow-hidden theme-transition">
      <div className="absolute top-1/4 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.015] pointer-events-none select-none flex">
        <div className="text-[8rem] md:text-[12rem] font-black tracking-tighter text-[var(--text-primary)] uppercase">BENEFITS</div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 max-w-[1500px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 reveal-on-scroll">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
              <span className="font-mono text-[10px] sm:text-xs text-[var(--text-muted)] tracking-[0.3em] uppercase">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] leading-none tracking-tight">
              WHAT YOU GET<br />
              <span className="text-[var(--text-dim)]">FOR YOUR BUSINESS.</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0 max-w-md">
            <p className="text-[var(--text-secondary)] font-light leading-relaxed text-base">
              We focus on the metrics that actually matter to business owners: customer trust, high conversion rates, and reliable performance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-8 lg:p-10 rounded-[2.5rem] bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-accent)] hover:bg-[var(--hover-surface)] transition-all duration-500 reveal-on-scroll flex flex-col justify-between theme-transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className={`p-4 bg-[var(--bg-inner)] rounded-2xl border border-[var(--border-medium)] transition-colors duration-500 ${isDark ? 'group-hover:bg-white' : 'group-hover:bg-[#0f172a]'}`}>
                      <Icon className={`w-6 h-6 text-[var(--text-primary)] transition-colors ${isDark ? 'group-hover:text-black' : 'group-hover:text-white'}`} />
                    </div>
                    <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-inner)]">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-[var(--text-secondary)] text-base font-light leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
