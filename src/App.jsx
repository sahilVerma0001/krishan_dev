import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-page)] selection:bg-white/10 selection:text-[var(--text-primary)] theme-transition">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Process />
        <Projects />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
