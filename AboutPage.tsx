import React from 'react';
import { Target, Eye, Award } from 'lucide-react';
import { Reveal } from '../components/Reveal';

export const AboutPage: React.FC = () => {
  return (
    <div>
       {/* Header */}
       <section className="pt-20 pb-20 px-4 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              Digital craftsmanship.<br/>
              Uncompromising quality.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Auvra.Studio was founded on a simple principle: the web is 90% typography and 10% magic. 
              We provide both. We are a team of engineers and designers tired of "good enough." 
              We build for the best.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Reveal delay={0.1}>
              <div>
                <div className="mb-6 text-white"><Target size={32} /></div>
                <h3 className="text-xl font-bold text-white mb-4">Precision</h3>
                <p className="text-zinc-500 leading-relaxed">
                  We measure pixels, not hours. Every interaction is smoothed, every margin calculated. 
                  We believe excellence is in the details that others ignore.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <div className="mb-6 text-white"><Eye size={32} /></div>
                <h3 className="text-xl font-bold text-white mb-4">Clarity</h3>
                <p className="text-zinc-500 leading-relaxed">
                  Complexity is easy. Simplicity is hard. We strip away the noise to reveal the essential. 
                  Our designs are clean, direct, and effective.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div>
                <div className="mb-6 text-white"><Award size={32} /></div>
                <h3 className="text-xl font-bold text-white mb-4">Integrity</h3>
                <p className="text-zinc-500 leading-relaxed">
                  We don't sell templates as custom work. We don't lock you in. 
                  We write clean, documented code that you own completely.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team / Stats */}
      <section className="py-24 px-4 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <Reveal delay={0.1}>
              <div className="text-center md:text-left">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">3+</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-widest">Years Experience</div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="text-center md:text-left">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-widest">Projects Shipped</div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="text-center md:text-left">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-widest">Client Retention</div>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="text-center md:text-left">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-widest">Global Support</div>
              </div>
            </Reveal>
        </div>
      </section>
    </div>
  );
};