import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface IntroScreenProps {
  onComplete: () => void;
}

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const [phase, setPhase] = useState<'loading' | 'forming' | 'glitch' | 'complete'>('loading');
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
  
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);

    const timer1 = setTimeout(() => setPhase('forming'), 1000);
    const timer2 = setTimeout(() => setPhase('glitch'), 3000);
    const timer3 = setTimeout(() => setPhase('complete'), 4000);
    const timer4 = setTimeout(() => onComplete(), 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
    >
    
      <div className="absolute inset-0 gradient-animate opacity-30"></div>
      
     
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
     
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: phase === 'loading' ? 0 : [0, 1, 1, 0],
            scale: phase === 'loading' ? 0 : [0, 1, 1, 0],
            x: phase === 'forming' ? [particle.x + '%', '50%'] : particle.x + '%',
            y: phase === 'forming' ? [particle.y + '%', '50%'] : particle.y + '%'
          }}
          transition={{ 
            duration: 2,
            delay: particle.delay,
            ease: "easeInOut"
          }}
          className="absolute w-1 h-1 bg-gradient-to-r from-[var(--tech-purple)] to-[var(--tech-neon)] rounded-full"
          style={{
            left: particle.x + '%',
            top: particle.y + '%'
          }}
        />
      ))}
      
     
      <div className="relative z-10 text-center">
        {phase === 'loading' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            <div className="loading-spin w-16 h-16 border-4 border-[var(--tech-glass-border)] border-t-[var(--tech-purple)] rounded-full mx-auto"></div>
            <motion.p 
              className="text-muted-foreground"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Initializing Portfolio...
            </motion.p>
          </motion.div>
        )}
        
        {(phase === 'forming' || phase === 'glitch' || phase === 'complete') && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
          
            <motion.div
              className="relative"
              animate={phase === 'glitch' ? { 
                x: [-2, 2, -2, 2, 0],
                y: [2, -2, 2, -2, 0]
              } : {}}
              transition={{ duration: 0.3, repeat: phase === 'glitch' ? 5 : 0 }}
            >
              <div className="text-8xl md:text-9xl mb-4 bg-gradient-to-r from-[var(--tech-purple)] via-[var(--tech-neon)] to-[var(--tech-purple)] bg-clip-text text-transparent relative">
                YA
                {phase === 'glitch' && (
                  <>
                    <div className="absolute inset-0 text-8xl md:text-9xl bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent opacity-70 translate-x-1">
                      YA
                    </div>
                    <div className="absolute inset-0 text-8xl md:text-9xl bg-gradient-to-r from-green-500 to-purple-500 bg-clip-text text-transparent opacity-50 -translate-x-1">
                      YA
                    </div>
                  </>
                )}
              </div>
            </motion.div>
            
           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className={phase === 'glitch' ? 'glitch' : ''}
            >
              <h1 className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-[var(--tech-purple)] to-[var(--tech-neon)] bg-clip-text text-transparent">
                Yishak Alemayehu
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.5, duration: 1 }}
                className="h-0.5 bg-gradient-to-r from-transparent via-[var(--tech-neon)] to-transparent mx-auto max-w-md overflow-hidden"
              />
            </motion.div>
            
           
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="text-muted-foreground text-lg max-w-md mx-auto"
            >
              Crafting tomorrow's technology today
            </motion.p>
            
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 'complete' ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              <div className="flex justify-center gap-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-[var(--tech-neon)] rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                {phase === 'forming' ? 'Assembling components...' : 
                 phase === 'glitch' ? 'Applying finishing touches...' : 
                 'Ready to launch'}
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
      
     
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[var(--tech-purple)]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-[var(--tech-neon)]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[var(--tech-neon)]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[var(--tech-purple)]"
      />
    </motion.div>
  );
}