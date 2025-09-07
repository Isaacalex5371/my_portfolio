import { motion } from "motion/react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Linkedin, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (retries = 3) => {
    setIsSending(true);
    setStatus("Sending message...");
    
    try {
      await emailjs.send(
        "service_pdx9x7d", 
        "template_4suwkft",
        form,
        "K_tcIzsgNtzOW66ei" 
      );
      
      setStatus("Message sent successfully ✅");
      setForm({ name: "", email: "", subject: "", message: "" });
      setRetryCount(0);
    } catch (error) {
      if (retries > 0) {
        setStatus(`Retrying... (${4 - retries}/3)`);
       
        await new Promise(resolve => setTimeout(resolve, 2000));
        return sendEmail(retries - 1);
      } else {
        setStatus("❌ Failed to send. Try again later.");
      }
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail();
  };

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
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project or discuss opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
    
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-0 hover:glass-strong transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Name
                      </label>
                      <Input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="glass border-border focus:border-[var(--tech-neon)]"
                        disabled={isSending}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="glass border-border focus:border-[var(--tech-neon)]"
                        disabled={isSending}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project collaboration"
                      className="glass border-border focus:border-[var(--tech-neon)]"
                      disabled={isSending}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="glass border-border focus:border-[var(--tech-neon)] resize-none"
                      disabled={isSending}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full neon-glow bg-gradient-to-r from-[var(--tech-purple)] to-[var(--tech-neon)] hover:from-[var(--tech-neon)] hover:to-[var(--tech-purple)] transition-all duration-300 border-0"
                    size="lg"
                    disabled={isSending}
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>

                  {status && (
                    <p className="text-center text-sm mt-2 text-[var(--tech-neon)]">
                      {status}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="glass border-0">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass-strong rounded-full flex items-center justify-center neon-glow">
                    <Mail className="w-5 h-5 text-[var(--tech-neon)]" />
                  </div>
                  <div>
                    <h3 className="text-foreground">Email</h3>
                    <p className="text-muted-foreground">isaacalex5371@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass-strong rounded-full flex items-center justify-center neon-glow">
                    <Phone className="w-5 h-5 text-[var(--tech-purple)]" />
                  </div>
                  <div>
                    <h3 className="text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+251-902783756</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass-strong rounded-full flex items-center justify-center neon-glow">
                    <MapPin className="w-5 h-5 text-[var(--tech-gradient-3)]" />
                  </div>
                  <div>
                    <h3 className="text-foreground">Location</h3>
                    <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass border-0">
              <CardContent className="p-6">
                <h3 className="text-foreground mb-4">Connect on Social</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/Isaacalex5371" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="glass-strong border-[var(--tech-purple)] hover:bg-[var(--tech-purple)] hover:neon-glow-purple transition-all"
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
                      variant="outline"
                      size="icon"
                      className="glass-strong border-[var(--tech-neon)] hover:bg-[var(--tech-neon)] hover:text-background hover:neon-glow transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </a>
                 <a
  href="mailto:issacalex5371@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you"
>
  <Button
    variant="outline"
    size="icon"
    className="glass-strong border-[var(--tech-gradient-3)] hover:bg-[var(--tech-gradient-3)] hover:neon-glow transition-all"
  >
    <Mail className="w-5 h-5" />
  </Button>
</a>

                </div>
              </CardContent>
            </Card>
            
            
            <Card className="glass border-0">
              <CardContent className="p-6">
                <h3 className="text-foreground mb-4">Availability</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Project Collaborations</span>
                    <span className="text-[var(--tech-neon)] text-sm">Available</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Freelance Work</span>
                    <span className="text-[var(--tech-neon)] text-sm">Available</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Full-time Opportunities</span>
                    <span className="text-[var(--tech-purple)] text-sm">Open to Discuss</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}