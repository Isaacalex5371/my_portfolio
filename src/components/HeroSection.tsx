import { motion } from 'motion/react';
import { ImageWithFallback } from './falliamage/ImageWithFallback';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

export function HeroSection() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/yishak_cv.pdf'; // Path to your CV file in the public folder
    link.download = 'Yishak_Alemayehu_CV.pdf'; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
   
      <div className="absolute inset-0 gradient-animate"></div>
     
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      
     
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1679108321213-0fae9ef910e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2glMjBiYWNrZ3JvdW5kJTIwZGlnaXRhbCUyMHdhdmVzfGVufDF8fHx8MTc1NzE5MjgzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tech background"
          className="w-full h-full object-cover"
        />
      </div>
      
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-foreground via-[var(--tech-purple)] to-[var(--tech-neon)] bg-clip-text text-transparent">
            Yishak Alemayehu
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Computer Science Student | Android & React Developer | Innovator
          </motion.p>
           <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="glass-strong neon-glow text-lg px-8 py-6 bg-gradient-to-r from-[var(--tech-purple)] to-[var(--tech-gradient-3)] hover:from-[var(--tech-neon)] hover:to-[var(--tech-purple)] transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Work
            </Button>
             <Button
              size="lg"
              className="neon-glow bg-gradient-to-r from-[var(--tech-purple)] to-[var(--tech-neon)] hover:from-[var(--tech-neon)] hover:to-[var(--tech-purple)] transition-all duration-300 border-0"
              onClick={downloadCV}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV 
            </Button>
          </motion.div>
        
        </motion.div>
        
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-[var(--tech-neon)] rounded-full opacity-60"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-6 h-6 bg-[var(--tech-purple)] rounded-full opacity-40"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 right-10 w-3 h-3 bg-[var(--tech-gradient-3)] rounded-full opacity-50"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
      </div>
    </section>
  );
}