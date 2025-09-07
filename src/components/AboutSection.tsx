import { motion } from 'motion/react';
import { ImageWithFallback } from './falliamage/ImageWithFallback';

export function AboutSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[var(--tech-purple)] to-[var(--tech-neon)] bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="glass rounded-2xl p-8 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Computer Science student with a deep love for creating innovative solutions through code. 
                My journey in technology spans across mobile development, web technologies, and artificial intelligence.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With expertise in Android development using Java, React for web applications, and Python for AI projects, 
                I'm constantly exploring new technologies and pushing the boundaries of what's possible in software development.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My goal is to bridge the gap between cutting-edge technology and real-world applications, creating solutions 
                that make a meaningful impact on people's lives.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-gradient-to-r from-[var(--tech-purple)] to-[var(--tech-gradient-3)] rounded-full text-sm text-white">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-[var(--tech-neon)] to-[var(--tech-purple)] rounded-full text-sm text-background">
                  Innovation Driven
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-[var(--tech-gradient-3)] to-[var(--tech-neon)] rounded-full text-sm text-white">
                  Team Player
                </span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--tech-purple)] to-[var(--tech-neon)] rounded-full blur-xl opacity-30 scale-110"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden glass-strong neon-glow-purple">
                <ImageWithFallback
                  src="/image/me.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}