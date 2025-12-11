import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code2, Layout, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { TiltCard } from '../components/TiltCard';

// Mock data for the performance chart
const performanceData = [
  { subject: 'Performance', A: 98, fullMark: 100 },
  { subject: 'SEO', A: 100, fullMark: 100 },
  { subject: 'Accessibility', A: 95, fullMark: 100 },
  { subject: 'Best Practices', A: 99, fullMark: 100 },
  { subject: 'PWA', A: 90, fullMark: 100 },
];

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  
  // -- Hero Parallax & Lighting Effects --
  
  // Text Parallax (3D Depth feeling)
  // The top line moves faster than the bottom line, creating separation
  const yTitle1 = useTransform(scrollY, [0, 500], [0, 80]); 
  const yTitle2 = useTransform(scrollY, [0, 500], [0, 40]); 
  const yDesc = useTransform(scrollY, [0, 500], [0, 20]);
  
  // Cinematic Lighting that reacts to scroll
  // As user scrolls, the light intensifies and moves down slightly
  const lightOpacity = useTransform(scrollY, [0, 300], [0.2, 0.6]);
  const lightScale = useTransform(scrollY, [0, 500], [1, 1.5]);
  const lightY = useTransform(scrollY, [0, 500], ["-20%", "10%"]);

  // Background Blobs - Organic movement
  const blobY = useTransform(scrollY, [0, 800], [0, 200]);
  const blobOpacity = useTransform(scrollY, [0, 400], [0.5, 0]);

  return (
    <div className="overflow-hidden bg-black selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 overflow-hidden perspective-1000">
        
        {/* Dynamic Cinematic Lighting Overlay */}
        <motion.div 
          style={{ opacity: lightOpacity, scale: lightScale, y: lightY }}
          className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-radial from-indigo-500/20 via-blue-900/5 to-transparent pointer-events-none z-0"
        />

        {/* Ambient Background Blobs */}
        <motion.div style={{ y: blobY, opacity: blobOpacity }} className="absolute inset-0 z-0 pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 20, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full mix-blend-screen"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/20 blur-[150px] rounded-full mix-blend-screen"
          />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Reveal width="100%" direction="none">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-zinc-300 mb-8 hover:bg-white/10 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Accepting new projects for Q4</span>
            </div>
          </Reveal>
          
          <div className="relative mb-8 perspective-1000">
             {/* 3D Depth Title Layers */}
             <motion.div style={{ y: yTitle1 }} className="relative z-20">
                <Reveal width="100%" delay={0.1}>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 drop-shadow-2xl">
                      Creative Engineering
                    </span>
                  </h1>
                </Reveal>
             </motion.div>
             
             <motion.div style={{ y: yTitle2 }} className="relative z-10">
                <Reveal width="100%" delay={0.2}>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
                    <motion.span 
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-white to-zinc-500 bg-[length:200%_auto] pb-4 block"
                    >
                      for the Modern Web.
                    </motion.span>
                  </h1>
                </Reveal>
             </motion.div>
          </div>
          
          <motion.div style={{ y: yDesc }}>
            <Reveal width="100%" delay={0.3}>
              <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                We build pixel-perfect, high-performance digital experiences. 
                Blending technical precision with premium aesthetics for forward-thinking brands.
              </p>
            </Reveal>
          </motion.div>
          
          <Reveal width="100%" delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" onClick={() => navigate('/contact')} icon={<ArrowRight size={18} />}>
                Start Project
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/services')}>
                View Services
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="border-y border-white/5 bg-zinc-950/50 backdrop-blur-sm py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="none">
            <p className="text-center text-sm text-zinc-500 mb-8 uppercase tracking-widest font-medium">Powered by modern infrastructure</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-60 hover:opacity-100 transition-all duration-500">
               {['Next.js', 'React', 'Tailwind', 'Vercel', 'Supabase', 'TypeScript'].map((tech) => (
                 <span key={tech} className="text-xl md:text-2xl font-bold text-white hover:text-primary transition-colors cursor-default tracking-tight">{tech}</span>
               ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Value Proposition / Services Preview */}
      <section className="py-32 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal delay={0.1} className="h-full">
              <TiltCard className="h-full">
                <div className="mb-6 p-3 bg-white/5 rounded-2xl w-fit text-zinc-300">
                  <Layout size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">UI/UX Design</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Interfaces that feel natural. We focus on interaction design, motion, and visual hierarchy to convert users.
                </p>
              </TiltCard>
            </Reveal>

            <Reveal delay={0.2} className="h-full">
              <TiltCard className="h-full">
                <div className="mb-6 p-3 bg-white/5 rounded-2xl w-fit text-zinc-300">
                  <Code2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Full-Stack Development</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Robust, scalable web applications built with Next.js and React. Clean code, easy maintenance.
                </p>
              </TiltCard>
            </Reveal>

            <Reveal delay={0.3} className="h-full">
              <TiltCard className="h-full">
                <div className="mb-6 p-3 bg-white/5 rounded-2xl w-fit text-zinc-300">
                  <Zap size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Performance Optimization</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We optimize for Core Web Vitals. Fast load times mean better SEO and higher conversion rates.
                </p>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* "Why Us" - The Technical Edge */}
      <section className="py-32 bg-zinc-900/20 border-t border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="right">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white leading-tight">
                Obsessed with <br/>
                <span className="text-zinc-500">Performance metrics.</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                We don't just make things look good. We engineer them to fly. 
                Every pixel is calculated, every line of code is optimized for the highest Lighthouse scores.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Lighthouse Score 90+ Guaranteed',
                  'Mobile-First Responsive Architecture',
                  'Accessible (WCAG 2.1) Compliance',
                  'Edge Network Delivery'
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center text-zinc-300"
                  >
                    <CheckCircle2 className="mr-3 text-primary shrink-0" size={20} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Button variant="secondary" onClick={() => navigate('/about')}>
                Our Process
              </Button>
            </Reveal>

            {/* Recharts Visualization */}
            <Reveal direction="left" delay={0.2}>
              <TiltCard className="p-0 overflow-hidden !bg-black/40 !border-zinc-800">
                <div className="h-[400px] w-full relative flex items-center justify-center overflow-hidden">
                   {/* Background Gradient for Chart */}
                   <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-zinc-900/0 to-transparent opacity-50 pointer-events-none" />
                   
                   {/* Label */}
                   <div className="absolute top-6 left-6 z-10">
                     <div className="text-xs text-zinc-500 uppercase tracking-widest font-mono mb-1 whitespace-nowrap">Lighthouse Analysis</div>
                     <div className="flex items-baseline space-x-1">
                       <span className="text-2xl font-bold text-white">100</span>
                       <span className="text-sm text-zinc-600">/100</span>
                     </div>
                   </div>

                   <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="55%" outerRadius="65%" data={performanceData}>
                      <PolarGrid stroke="#333" strokeDasharray="3 3" />
                      <PolarAngleAxis 
                        dataKey="subject" 
                        tick={{ fill: '#a1a1aa', fontSize: 11, fontWeight: 500 }} 
                      />
                      {/* Hide the radius axis to prevent artifacts like '0', 'L', 'A' showing up weirdly */}
                      <PolarRadiusAxis tick={false} axisLine={false} />
                      <Radar
                        name="Auvra"
                        dataKey="A"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        fill="#3b82f6"
                        fillOpacity={0.2}
                        isAnimationActive={true}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/80 pointer-events-none" />
        <Reveal width="100%" direction="up">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              Ready to build something <br/>
              <span className="text-zinc-600">exceptional?</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              We accept a limited number of clients per quarter to ensure premium quality. 
              Secure your slot today.
            </p>
            <Button size="lg" className="h-14 px-10 text-lg shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:shadow-[0_0_80px_rgba(59,130,246,0.5)] transition-shadow duration-500" onClick={() => navigate('/contact')}>
              Book a Discovery Call
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
};