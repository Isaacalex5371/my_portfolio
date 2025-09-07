import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './falliamage/ImageWithFallback';

const projects = [
  {
    title: 'Quick Cart',
    description: 'E-commerce Android app with Java + Firebase Firestore. Features: authentication, real-time product listing, cart, order placement.',
    techStack: ['Java', 'Android Studio', 'Firebase', 'Firestore'],
    image: 'https://images.unsplash.com/photo-1621691187532-bbeb671757ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBhbmRyb2lkfGVufDF8fHx8MTc1NzE5Mjg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-[#6366f1] to-[#a855f7]',
    category: 'Mobile App'
  },
  {
    title: 'Smart Transit',
    description: 'C++ bus routing system with advanced route management, intelligent search algorithms, and structured data handling for optimal transportation.',
    techStack: ['C++', 'Data Structures', 'Algorithms', 'System Design'],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-[#00ff88] to-[#6366f1]',
    category: 'System Software'
  },
  {
    title: 'Bitcoin Price Forecasting',
    description: 'Deep learning LSTM model predicting BTC trends. Trained on 2000 days of historical data, forecasts next 25 days with advanced visualizations.',
    techStack: ['Python', 'LSTM', 'TensorFlow', 'Data Analysis'],
    image: 'image/bookhive.png',
     gradient: 'from-[#a855f7] to-[#00ff88]',
    category: 'AI/ML'
  },
  {
    title: 'BookHive',
    description: 'ASP.NET (C#) + PHP library management system featuring comprehensive authentication, user/book management, and seamless borrowing workflows.',
    techStack: ['ASP.NET', 'C#', 'PHP', 'Database Design'],
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-[#6366f1] to-[#00ff88]',
    category: 'Web Application'
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[var(--tech-purple)] to-[var(--tech-neon)] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions across mobile, web, and AI development
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="glass border-0 overflow-hidden hover:glass-strong transition-all duration-300 hover:neon-glow-purple h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-black/50 text-white border-0">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-[var(--tech-neon)] transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="border-[var(--tech-purple)] text-[var(--tech-purple)] hover:bg-[var(--tech-purple)] hover:text-white transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                     <a href="https://github.com/Isaacalex5371" 
                    target="_blank" 
                    rel="noopener noreferrer">
                  <Button 
                    className={`w-full bg-gradient-to-r ${project.gradient} hover:scale-105 transition-transform border-0`}
                  >
                    View Details
                  </Button></a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">More projects available on GitHub</p>
          <a href="https://github.com/Isaacalex5371" 
                    target="_blank" 
                    rel="noopener noreferrer"><Button variant="outline" className="border-[var(--tech-neon)] text-[var(--tech-neon)] hover:bg-[var(--tech-neon)] hover:text-white">
            View All Projects
          </Button></a>
        </motion.div>
      </div>
    </section>
  );
}