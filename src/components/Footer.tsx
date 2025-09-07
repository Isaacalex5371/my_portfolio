import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl bg-gradient-to-r from-[var(--tech-purple)] to-[var(--tech-neon)] bg-clip-text text-transparent mb-4">
              Yishak Alemayehu
            </div>
            <p className="text-muted-foreground max-w-xs">
              Computer Science Student crafting innovative solutions through code, 
              specializing in Android, React, and AI technologies.
            </p>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  className="block text-muted-foreground hover:text-[var(--tech-neon)] transition-colors text-left"
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-foreground mb-4">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>isaacalex5371@gmail.com</p>
              <p>+251-902782756</p>
              <p>Addis Ababa, Ethiopia</p>
            </div>
            
            <div className="flex gap-3 mt-4">
              <a 
                    href="https://github.com/Isaacalex5371" 
                    target="_blank" 
                    rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-[var(--tech-purple)] hover:bg-[var(--tech-purple)]/10"
              >
                <Github className="w-5 h-5" />
                 
              </Button>
               </a>
              
              <a 
                    href="https://www.linkedin.com/in/yishak-alemayehu-21a1312ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >

              
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-[var(--tech-neon)] hover:bg-[var(--tech-neon)]/10"
                >
                <Linkedin className="w-5 h-5" />
              </Button>
                </a>
                            <a
  href="mailto:issacalex5371@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you"
>

              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-[var(--tech-gradient-3)] hover:bg-[var(--tech-gradient-3)]/10"
                >
                <Mail className="w-5 h-5" />
              </Button>
                </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            © {currentYear} Yishak Alemayehu. Made with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Available for opportunities</span>
            <div className="w-2 h-2 bg-[var(--tech-neon)] rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}