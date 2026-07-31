import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const contactInfo = [
    { icon: Mail, label: "Direct Email", value: "krishanlal7770@gmail.com", href: "mailto:krishanlal7770@gmail.com" },
    { icon: Phone, label: "Direct Call / WhatsApp", value: "+91 9799917630", href: "tel:+919799917630" },
    { icon: MapPin, label: "Location", value: "Jaipur, Rajasthan (Available Globally)", href: "#" }
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          form.current.reset();
          setTimeout(() => setIsSubmitted(false), 6000);
        },
        () => {
          setIsSubmitting(false);
          alert("Failed to send message. Please try again or email directly.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-[var(--bg-page)] relative overflow-hidden theme-transition">
      <div className="absolute top-1/3 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.015] pointer-events-none select-none flex">
        <div className="text-[8rem] md:text-[12rem] font-black tracking-tighter text-[var(--text-primary)]">CONTACT</div>
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 max-w-[1500px]">
        <div className="mb-16 reveal-on-scroll">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
            <span className="font-mono text-[10px] sm:text-xs text-[var(--text-muted)] tracking-[0.3em] uppercase">Start a Conversation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] leading-none tracking-tight">
            LET'S DISCUSS<br /><span className="text-[var(--text-dim)]">YOUR NEXT PROJECT.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          <div className="lg:col-span-4 flex flex-col justify-between space-y-10 reveal-on-scroll">
            <p className="text-xl text-[var(--text-secondary)] font-light leading-relaxed">
              Have a website or mobile app project in mind? Share your requirements and I'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col gap-5">
              {contactInfo.map((info, i) => (
                <a key={i} href={info.href} className="group flex items-center gap-6 p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-accent)] transition-all duration-500 theme-transition">
                  <div className={`w-14 h-14 bg-[var(--bg-inner)] rounded-2xl flex items-center justify-center border border-[var(--border-subtle)] transition-colors duration-500 ${isDark ? 'group-hover:bg-white' : 'group-hover:bg-[#0f172a]'}`}>
                    <info.icon className={`w-5 h-5 text-[var(--text-primary)] transition-colors ${isDark ? 'group-hover:text-black' : 'group-hover:text-white'}`} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)]">{info.label}</p>
                    <p className="text-[var(--text-primary)] font-bold text-sm tracking-widest mt-1">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 reveal-on-scroll">
            <div className="p-8 md:p-12 bg-[var(--bg-card)] rounded-[3rem] border border-[var(--border-subtle)] shadow-[0_30px_100px_rgba(0,0,0,0.15)] relative overflow-hidden h-full flex flex-col justify-center theme-transition">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--glow-color)] rounded-full blur-[100px] pointer-events-none" />
              {isSubmitted ? (
                <div className="py-16 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-[var(--hover-surface)] rounded-full flex items-center justify-center mb-6 border border-[var(--border-medium)]">
                    <CheckCircle className="w-10 h-10 text-[var(--text-primary)]" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black text-[var(--text-primary)] mb-3 tracking-tight">INQUIRY RECEIVED</h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-md">Thank you for reaching out! I have received your message and will get back to you shortly.</p>
                </div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10 w-full max-w-2xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] ml-2">Your Name</label>
                      <input type="text" name="from_name" required placeholder="e.g. John Doe"
                        className="w-full bg-[var(--bg-inner)] border border-[var(--border-medium)] rounded-2xl px-6 py-4 text-[var(--text-primary)] text-sm placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--border-accent)] transition-colors theme-transition" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] ml-2">Email Address / Phone</label>
                      <input type="email" name="from_email" required placeholder="e.g. john@company.com"
                        className="w-full bg-[var(--bg-inner)] border border-[var(--border-medium)] rounded-2xl px-6 py-4 text-[var(--text-primary)] text-sm placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--border-accent)] transition-colors theme-transition" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] ml-2">What Do You Need? (Project Type)</label>
                    <input type="text" name="subject" required placeholder="e.g. Custom Website, E-Commerce, or Mobile App"
                      className="w-full bg-[var(--bg-inner)] border border-[var(--border-medium)] rounded-2xl px-6 py-4 text-[var(--text-primary)] text-sm placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--border-accent)] transition-colors theme-transition" />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] ml-2">Project Details & Requirements</label>
                    <textarea name="message" required rows="4" placeholder="Tell me about your project goals, scope, and timeline..."
                      className="w-full bg-[var(--bg-inner)] border border-[var(--border-medium)] rounded-3xl px-6 py-4 text-[var(--text-primary)] text-sm placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--border-accent)] transition-colors resize-none theme-transition"></textarea>
                  </div>

                  <button disabled={isSubmitting}
                    className={`group relative w-full flex items-center justify-between p-2 pl-8 font-black rounded-full hover:scale-[1.01] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${isDark ? 'bg-white text-black' : 'bg-[#0f172a] text-white'}`}>
                    <span className="text-xs uppercase tracking-[0.2em]">{isSubmitting ? 'Sending Inquiry...' : 'Submit Project Inquiry'}</span>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 ${isDark ? 'bg-black text-white' : 'bg-white text-[#0f172a]'}`}>
                      {isSubmitting ? (<div className={`w-4 h-4 border-2 border-t-transparent rounded-full animate-spin ${isDark ? 'border-white' : 'border-[#0f172a]'}`} />) : (<ArrowRight className="w-5 h-5" />)}
                    </div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
