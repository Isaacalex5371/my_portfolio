import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' }
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); 
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-strong backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
       
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <div className="text-2xl bg-gradient-to-r from-[var(--tech-purple)] to-[var(--tech-neon)] bg-clip-text text-transparent">
              YA
            </div>
          </motion.div>

        
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'text-[var(--tech-neon)]'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              size="sm"
              className="hidden md:block neon-glow bg-gradient-to-r from-[var(--tech-purple)] to-[var(--tech-neon)] hover:from-[var(--tech-neon)] hover:to-[var(--tech-purple)] transition-all duration-300 border-0"
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
            </Button>
          </div>

        
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </Button>
        </div>
      </div>

    
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 md:hidden mt-2 flex flex-col gap-4 bg-background p-4 rounded-lg shadow-lg z-50"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm text-left transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'text-[var(--tech-neon)]'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              size="sm"
              className="w-full neon-glow bg-gradient-to-r from-[var(--tech-purple)] to-[var(--tech-neon)] hover:from-[var(--tech-neon)] hover:to-[var(--tech-purple)] transition-all duration-300 border-0"
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
            </Button>
          </motion.div>
        </>
      )}
    </motion.nav>
  );
}
