import React from 'react';
import { Monitor, Smartphone, PenTool, Database, Globe, BarChart } from 'lucide-react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { TiltCard } from '../components/TiltCard';

const ServiceItem: React.FC<{ 
  title: string; 
  desc: string; 
  icon: React.ReactNode; 
  tags: string[] 
}> = ({ title, desc, icon, tags }) => (
  <TiltCard className="h-full">
    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-zinc-300 transition-all">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-zinc-400 mb-8 leading-relaxed">
      {desc}
    </p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {tags.map((tag) => (
        <span key={tag} className="px-3 py-1 text-xs font-medium text-zinc-500 border border-zinc-800 rounded-full">
          {tag}
        </span>
      ))}
    </div>
  </TiltCard>
);

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <section className="pt-20 pb-16 px-4">
        <Reveal width="100%" direction="up">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Our Expertise</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              We provide a comprehensive suite of digital services designed to scale your business.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="pb-32 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Reveal delay={0.1} className="h-full"><ServiceItem 
            icon={<Monitor size={24} />}
            title="Web Development"
            desc="Custom websites built with Next.js and React. We focus on speed, SEO, and maintainability. No bloat, just code."
            tags={['React', 'Next.js', 'TypeScript', 'Node.js']}
          /></Reveal>
          <Reveal delay={0.2} className="h-full"><ServiceItem 
            icon={<PenTool size={24} />}
            title="UI/UX Design"
            desc="User-centric design that balances aesthetics with functionality. We create design systems that scale."
            tags={['Figma', 'Prototyping', 'Design Systems']}
          /></Reveal>
          <Reveal delay={0.3} className="h-full"><ServiceItem 
            icon={<Database size={24} />}
            title="SaaS Engineering"
            desc="Building the dashboard, logic, and infrastructure for your software product. Secure and scalable."
            tags={['Supabase', 'PostgreSQL', 'Auth', 'API']}
          /></Reveal>
          <Reveal delay={0.1} className="h-full"><ServiceItem 
            icon={<Globe size={24} />}
            title="SaaS Landing Pages"
            desc="High-conversion landing pages optimized for marketing campaigns. Clear messaging and strong CTAs."
            tags={['CRO', 'Animation', 'Analytics']}
          /></Reveal>
          <Reveal delay={0.2} className="h-full"><ServiceItem 
            icon={<Smartphone size={24} />}
            title="Mobile Design"
            desc="Responsive interfaces that work perfectly on every device. Mobile-first approach is our standard."
            tags={['Responsive', 'PWA', 'Touch']}
          /></Reveal>
          <Reveal delay={0.3} className="h-full"><ServiceItem 
            icon={<BarChart size={24} />}
            title="Brand Strategy"
            desc="Defining your digital voice. Logos, typography, and visual guidelines that set you apart."
            tags={['Identity', 'Strategy', 'Guidelines']}
          /></Reveal>
        </div>

        <div className="mt-20 text-center">
          <Reveal width="100%" direction="up" delay={0.4}>
            <div className="inline-block p-[1px] rounded-xl bg-gradient-to-r from-zinc-800 to-zinc-900">
              <div className="bg-black rounded-xl p-8 md:p-12 flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-4">Not sure what you need?</h3>
                <p className="text-zinc-400 mb-6">Let's discuss your goals and figure out the best path forward.</p>
                <Button onClick={() => navigate('/contact')}>Book a Free Consultation</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};