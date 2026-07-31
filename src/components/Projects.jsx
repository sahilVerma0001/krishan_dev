import { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    title: "Sterling Insurance Portal",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000",
    github: "https://github.com/sahilVerma0001/sterlingportal",
    demo: "https://sterlingportal-mocha.vercel.app/signin",
    status: "Live Web Platform",
    description: "A business platform designed to automate insurance policy management, client document processing, and instant PDF policy generation.",
    techStack: ["Web Portal", "Automated PDF System", "Role-Based Access", "Secure Cloud"],
    highlights: ["Automates document generation saving client hours weekly", "Role-based secure access for staff and clients", "Fast, mobile-responsive portal design"]
  },
  {
    title: "Car Rental Booking Platform",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=2000",
    github: "https://github.com/sahilVerma0001/CarRental-FullStack",
    demo: "https://car-rental-nine-umber.vercel.app/",
    status: "Live Business Web App",
    description: "A vehicle rental application featuring real-time vehicle availability tracking, online customer booking, and instant payment integration.",
    techStack: ["Web App", "Instant Payments", "Vehicle Fleet Manager", "Mobile Friendly"],
    highlights: ["Integrated online payment gateway for instant bookings", "Sub-second image & page loading speeds", "Easy-to-use fleet management dashboard"]
  }
];

const ProjectCard = ({ project, index, isDark }) => {
  return (
    <div
      className="sticky flex items-start justify-center w-full min-h-[80vh] py-8"
      style={{ top: `calc(10vh + ${index * 40}px)`, zIndex: index }}
    >
      <div className={`relative w-full max-w-[1500px] h-full min-h-[70vh] md:min-h-[80vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.6)] flex flex-col lg:flex-row border border-[var(--border-subtle)] theme-transition ${isDark ? 'bg-[#11131a]' : 'bg-[#dde3f0]'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--glow-color)] to-transparent pointer-events-none" />
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-between z-10 relative">
          <div className="flex items-center justify-between mb-8">
            <span className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-[var(--text-secondary)] font-semibold border border-[var(--border-medium)] px-4 py-1.5 rounded-full bg-[var(--hover-surface)]">Case Study 0{index + 1}</span>
            <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-[var(--text-primary)] font-bold">// {project.status}</span>
          </div>
          <div className="mb-8">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--text-primary)] leading-[1] tracking-tight mb-6">
              {project.title}
            </h3>
            <p className="text-[var(--text-secondary)] text-base md:text-lg font-light leading-relaxed max-w-xl mb-6">{project.description}</p>
            
            <div className="space-y-2 mb-6">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-mono text-[var(--text-primary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col mt-auto gap-8">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-[var(--bg-inner)] text-[var(--text-secondary)] text-[11px] font-mono font-bold tracking-wider uppercase rounded-xl border border-[var(--border-subtle)] theme-transition">{tech}</span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--border-medium)]">
              <a href={project.demo} target="_blank" rel="noreferrer"
                className={`flex items-center justify-center gap-2 group relative overflow-hidden px-8 py-4 font-bold uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-all duration-300 ${isDark ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)]' : 'bg-[#0f172a] text-white shadow-[0_0_20px_rgba(0,0,0,0.15)]'}`}>
                <span>Live Product</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a href={project.github} target="_blank" rel="noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full border border-[var(--border-medium)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-page)] transition-all duration-300 pointer-events-auto z-50">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative overflow-hidden rounded-[2rem] lg:rounded-none m-4 lg:m-0 border lg:border-none border-[var(--border-subtle)]">
          <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none mix-blend-overlay" />
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105" />
          <div className="absolute bottom-6 right-6 z-20 flex gap-2 rotate-[20deg] opacity-70 drop-shadow-2xl">
            {[1, 2, 3, 4].map((i) => (<div key={i} className="w-1.5 h-10 bg-white rounded-full skew-x-[20deg]" />))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const containerRef = useRef(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="projects" ref={containerRef} className="py-20 bg-[var(--bg-page)] relative theme-transition">
      <div className="container mx-auto px-6 max-w-[1600px] relative z-10 mb-12 text-center">
        <h2 className="text-xs font-mono tracking-[0.5em] text-[var(--text-muted)] uppercase mb-4">Featured Solutions</h2>
        <div className="text-[clamp(2.5rem,7vw,7rem)] font-black text-[var(--text-primary)] leading-none tracking-tighter">CASE STUDIES</div>
      </div>
      <div className="relative w-full px-4 md:px-8">
        {projects.map((project, index) => (<ProjectCard key={index} project={project} index={index} isDark={isDark} />))}
      </div>
      <div className="h-[10vh]" />
    </section>
  );
}
