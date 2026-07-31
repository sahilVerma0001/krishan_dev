import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const faqs = [
    {
      question: "How long does it take to build a website or mobile app?",
      answer: "Most custom website and mobile app projects are completed within 1 to 3 weeks depending on features required. We establish a clear timeline upfront and provide regular progress updates along the way."
    },
    {
      question: "Do I need technical knowledge to manage my new website?",
      answer: "Not at all! We build everything to be simple and user-friendly. We provide full guidance on how to make simple text or image updates, or we can handle all maintenance for you."
    },
    {
      question: "Will my website work well on mobile phones and tablets?",
      answer: "Yes, 100%! Over 70% of web traffic comes from mobile devices. Every project we build is rigorously tested on iPhones, Android devices, iPads, and desktops to ensure a smooth, fast experience."
    },
    {
      question: "How do we get started on my project?",
      answer: "Getting started is simple! Click 'Get A Free Quote' or fill out the contact form below with a brief summary of what you need. We will respond within 24 hours to discuss your goals and provide an accurate estimate."
    },
    {
      question: "What happens after my website or mobile app is launched?",
      answer: "We provide dedicated free post-launch support to ensure everything runs smoothly. We also offer optional ongoing maintenance plans so your website stays secure, fast, and up to date 24/7."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[var(--bg-page)] relative overflow-hidden theme-transition">
      <div className="absolute top-1/4 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.015] pointer-events-none select-none flex">
        <div className="text-[8rem] md:text-[12rem] font-black tracking-tighter text-[var(--text-primary)] uppercase">QUESTIONS</div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 max-w-[1500px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 reveal-on-scroll">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
              <span className="font-mono text-[10px] sm:text-xs text-[var(--text-muted)] tracking-[0.3em] uppercase">Client Answers</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] leading-none tracking-tight">
              FREQUENTLY ASKED<br />
              <span className="text-[var(--text-dim)]">QUESTIONS.</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0 max-w-md">
            <p className="text-[var(--text-secondary)] font-light leading-relaxed text-base">
              Got questions before starting? Here is everything you need to know about working with us.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] overflow-hidden transition-all duration-300 reveal-on-scroll theme-transition"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left gap-4 hover:bg-[var(--hover-surface)] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className="w-5 h-5 text-[var(--text-muted)] shrink-0" />
                    <span className="text-lg md:text-xl font-bold text-[var(--text-primary)] tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--text-primary)] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-8 md:px-8 md:pb-8 pt-2 border-t border-[var(--border-subtle)] text-[var(--text-secondary)] text-base font-light leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
