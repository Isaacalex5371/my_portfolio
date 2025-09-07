import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeProvider } from './components/ThemeContext';
import { IntroScreen } from './components/IntroScreen';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function MainApp() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroScreen key="intro" onComplete={handleIntroComplete} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navigation />
            
            <main>
              <section id="home">
                <HeroSection />
              </section>
              
              <section id="about">
                <AboutSection />
              </section>
              
              <section id="skills">
                <SkillsSection />
              </section>
              
              <section id="projects">
                <ProjectsSection />
              </section>
              
              <section id="testimonials">
                <TestimonialsSection />
              </section>
              
              <section id="contact">
                <ContactSection />
              </section>
            </main>
            
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}