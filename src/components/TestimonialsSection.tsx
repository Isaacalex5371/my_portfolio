import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const testimonials = [
  {
    name: 'Robel Fikadu',
    quote: 'His Android projects with Java always stand out. Quick Cart is one of the most polished apps I\'ve ever seen from a student.',
    initials: 'RF',
    specialty: 'backend Development',
    image: 'image/proff.jpg' },
  {
    name: 'Salim Sadik',
    quote: 'When it comes to React development, he\'s the guy I\'d trust. Clean code, structured logic, and beautiful UI.',
    initials: 'SS',
    specialty: 'full-stack Development',
    image: 'https://images.unsplash.com/photo-1663535067514-66386c117b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBzdHVkZW50fGVufDF8fHx8MTc1NzE5NTYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Henok Mulugeta',
    quote: 'His Android apps aren\'t just functional, they\'re smooth and user-friendly. He knows how to make things work in the real world.',
    initials: 'HM',
    specialty: 'backend Design',
    image: 'image/henok.jpg' },
  {
    name: 'Hlina Abebe',
    quote: 'I\'ve seen him switch between React and Android projects seamlessly. That versatility is rare.',
    initials: 'HA',
    specialty: 'ML Engineer',
    image: 'image/hlina.jpg'
   },
  {
    name: 'Emiliya Tibebe',
    quote: 'Every time we work together, his Java expertise takes the project to another level. Always reliable.',
    initials: 'ET',
    specialty: 'psychology student',
    image: 'image/emiliy.jpg'
   },
  {
    name: 'Yabsra Ketema',
    quote: 'He doesn\'t just code, he creates experiences. His React apps look professional and intuitive.',
    initials: 'YK',
    specialty: 'full stack developer',
    image: 'https://images.unsplash.com/photo-1681164315430-6159b2361615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU3MTA4ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function TestimonialsSection() {
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
            What Peers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from fellow Computer Science students and collaborators
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="glass border-0 h-full hover:glass-strong transition-all duration-300 hover:neon-glow-purple">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="glass-strong neon-glow">
                      <AvatarImage 
                        src={testimonial.image} 
                        alt={`${testimonial.name} - ${testimonial.specialty}`}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-gradient-to-r from-[var(--tech-purple)] to-[var(--tech-neon)] text-background">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-foreground group-hover:text-[var(--tech-neon)] transition-colors">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{testimonial.specialty}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[var(--tech-neon)]">★</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          <div className="text-center glass rounded-xl p-6">
            <div className="text-3xl text-[var(--tech-neon)] mb-2">5+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          
          <div className="text-center glass rounded-xl p-6">
            <div className="text-3xl text-[var(--tech-gradient-3)] mb-2">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center glass rounded-xl p-6">
            <div className="text-3xl text-[var(--tech-neon)] mb-2">junior</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}