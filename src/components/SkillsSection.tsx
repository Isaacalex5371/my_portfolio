import { motion } from 'motion/react';
import { Progress } from './ui/progress';
import {
  DiJava,
  DiReact,
  DiAndroid,
  DiJavascript1,
  DiPython,
  DiPhp,
  DiFirebase,
  DiHtml5,
  DiCss3,
  DiNodejs,
  DiMysql,
} from "react-icons/di";
import {
  SiCplusplus,
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
  SiCloudinary,
} from "react-icons/si";

const coreSkills = [
  { name: "Java", level: 90, icon: <DiJava size={28} color="#f89820" /> },
  { name: "React", level: 85, icon: <DiReact size={28} color="#61DBFB" /> },
  {
    name: "Android Studio",
    level: 88,
    icon: <DiAndroid size={28} color="#3DDC84" />,
  },
  {
    name: "JavaScript",
    level: 85,
    icon: <DiJavascript1 size={28} color="#F7DF1E" />,
  },
  { name: "Python", level: 70, icon: <DiPython size={28} color="#3776AB" /> },
  { name: "C++", level: 75, icon: <SiCplusplus size={28} color="#00599C" /> },
  { name: "PHP", level: 70, icon: <DiPhp size={28} color="#777BB4" /> },
  { name: "Firebase", level: 80, icon: <DiFirebase size={28} color="#FFCA28" /> },
  {
    name: "HTML/CSS",
    level: 90,
    icon: (
      <span className="flex gap-1">
        <DiHtml5 size={28} color="#E34F26" />
        <DiCss3 size={28} color="#1572B6" />
      </span>
    ),
  },
  {
    name: "Tailwind",
    level: 85,
    icon: <SiTailwindcss size={28} color="#06B6D4" />,
  },
  { name: "Node.js", level: 75, icon: <DiNodejs size={28} color="#339933" /> },
  { name: "Next.js", level: 80, icon: <SiNextdotjs size={28} color="#000000" /> },
  { name: "Nest.js", level: 70, icon: <SiNestjs size={28} color="#E0234E" /> },
  {
    name: "Cloudinary",
    level: 75,
    icon: <SiCloudinary size={28} color="#3448C5" />,
  },
  { name: "MySQL", level: 75, icon: <DiMysql size={28} color="#4479A1" /> },
];

export function SkillsSection() {
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
            Core Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications across platforms
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300 hover:neon-glow-purple group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className="text-lg text-foreground group-hover:text-[var(--tech-neon)] transition-colors">
                  {skill.name}
                </h3>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Proficiency</span>
                  <span className="text-sm text-[var(--tech-neon)]">{skill.level}%</span>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-[var(--tech-purple)] to-[var(--tech-neon)] h-2 rounded-full relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl mb-2 text-[var(--tech-neon)]">Mobile Development</h3>
            <p className="text-muted-foreground">Android Studio, Java, Firebase</p>
          </div>
          
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-3xl mb-4">🌐</div>
            <h3 className="text-xl mb-2 text-[var(--tech-purple)]">Web Development</h3>
            <p className="text-muted-foreground">React, Next.js, Node.js, PHP</p>
          </div>
          
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl mb-2 text-[var(--tech-gradient-3)]">AI & Data Science</h3>
            <p className="text-muted-foreground">Python, Machine Learning, LSTM</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}