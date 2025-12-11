import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Github, Instagram } from 'lucide-react';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
                Let's build something <br/> great together.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-lg mb-12">
                Have a project in mind? We'd love to hear about it. 
                Fill out the form and we'll get back to you within 24 hours.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="space-y-8">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white border border-zinc-800 group-hover:border-primary/50 group-hover:text-primary transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email Us</h4>
                    <a href="mailto:auvra.studioo@gmail.com" className="text-zinc-400 hover:text-white transition-colors">auvra.studioo@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                   <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white border border-zinc-800 group-hover:border-pink-500/50 group-hover:text-pink-500 transition-all">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Instagram</h4>
                    <a href="https://www.instagram.com/auvra.studioo?igsh=amhidGdwNGZ5Y2Rv" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">@auvra.studioo</a>
                  </div>
                </div>

                 <div className="flex items-center space-x-4 group">
                   <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white border border-zinc-800 group-hover:border-white/50 group-hover:text-white transition-all">
                    <Github size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Github</h4>
                    <a href="https://github.com/Auvra-Studio" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">Auvra-Studio</a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form Side */}
          <Reveal delay={0.3} width="100%">
            <div className="bg-zinc-900/30 p-8 rounded-3xl border border-white/5 backdrop-blur-sm relative overflow-hidden">
               {/* Decorative Gradient */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
               
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fade-in">
                  <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-zinc-400">We'll be in touch shortly.</p>
                  <Button className="mt-8" variant="outline" onClick={() => setSubmitted(false)}>Send Another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-zinc-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-zinc-600"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-zinc-400 mb-2">Budget Range (USD)</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all appearance-none"
                    >
                      <option value="" disabled>Select a range</option>
                      <option value="5k-10k">$5k - $10k</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k+">$50k+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all resize-none placeholder:text-zinc-600"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};