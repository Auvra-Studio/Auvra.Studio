import React from 'react';
import { 
  Briefcase, 
  CheckSquare, 
  CreditCard, 
  FileText, 
  PieChart, 
  Download, 
  Receipt, 
  BarChart3,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { TiltCard } from '../components/TiltCard';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-20 pb-16 px-4">
        <Reveal width="100%" direction="up">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Selected Work</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              We don't just build apps; we engineer experiences. Here is a look at our latest production-ready work.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Featured Project: Floss Accounting */}
      <section className="pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <Reveal width="100%" delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/30 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                
                {/* Visual Side */}
                <div className="relative h-[400px] lg:h-auto min-h-[600px] overflow-hidden group bg-[#0a0a0a]">
                   <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />
                   {/* Dashboard Screenshot */}
                   <img 
                      src="https://i.ibb.co/0Vdkwsdq/l-EBJl-G8-FNz-Ef-Yycmv-ONqzne-Mr-Tw.png" 
                      alt="Floss Dashboard Interface" 
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute top-8 left-8 z-20">
                     <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 inline-block">
                        <img 
                          src="https://i.ibb.co/Y7JvPbrd/FLOSS-20251211-002524-0000.png" 
                          alt="Floss Logo" 
                          className="h-12 w-auto"
                        />
                     </div>
                   </div>
                   <div className="absolute bottom-8 left-8 z-20">
                      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/20 bg-black/50 backdrop-blur-md text-xs text-white mb-4">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        <span>SaaS Platform</span>
                      </div>
                      <h2 className="text-3xl font-bold text-white">Floss Accounting</h2>
                   </div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center bg-zinc-900/20">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">The All-In-One Financial OS</h3>
                    <p className="text-sm font-medium text-zinc-500 mb-6 uppercase tracking-wider">Designed & Built by Auvra.Studio</p>
                    
                    <p className="text-zinc-400 leading-relaxed mb-8">
                      Floss simplifies business operations by unifying project management and financial tracking. 
                      Built for agencies and freelancers who need clarity, not clutter.
                    </p>
                    
                    <div className="space-y-8">
                      {/* Feature 1: Project Management */}
                      <div>
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                            <Briefcase size={20} />
                          </div>
                          <h4 className="text-white font-bold text-lg">Project Management</h4>
                        </div>
                        <p className="text-sm text-zinc-400 mb-4 pl-11">
                          Keep every project moving forward. Plan, assign, and deliver your work - all in one place. 
                          With smart task tracking, deadlines, and real-time progress, you stay organized.
                        </p>
                        <div className="flex flex-wrap gap-2 pl-11">
                          {['Payments', 'Invoices', 'Bill', 'Reports'].map((tag, i) => (
                             <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
                               {i === 0 && <CreditCard size={12} className="mr-1.5" />}
                               {i === 1 && <FileText size={12} className="mr-1.5" />}
                               {i === 2 && <Receipt size={12} className="mr-1.5" />}
                               {i === 3 && <BarChart3 size={12} className="mr-1.5" />}
                               {tag}
                             </span>
                          ))}
                        </div>
                      </div>

                      {/* Feature 2: Financial Management */}
                      <div>
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                            <PieChart size={20} />
                          </div>
                          <h4 className="text-white font-bold text-lg">Financial Management</h4>
                        </div>
                        <p className="text-sm text-zinc-400 mb-4 pl-11">
                          Track invoices, bills, and stress less. Create branded invoices, log expenses, and keep tabs on earnings. 
                          Whether you bill hourly or per project, everything’s automated.
                        </p>
                        <div className="flex flex-wrap gap-2 pl-11">
                           {['Invoicing', 'Budgets', 'GST File', 'Data Export'].map((tag, i) => (
                             <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
                               {i === 3 && <Download size={12} className="mr-1.5" />}
                               {tag}
                             </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4">
                      <Button variant="primary" icon={<ArrowRight size={16} />}>
                        View Case Study
                      </Button>
                      <Button variant="secondary" icon={<ExternalLink size={16} />}>
                        Visit Website
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* More Work Placeholder */}
      <section className="pb-32 px-4 text-center">
        <Reveal width="100%" direction="up">
          <p className="text-zinc-500 mb-8">More case studies coming soon</p>
          <div className="inline-block h-px w-24 bg-zinc-800" />
        </Reveal>
      </section>
    </div>
  );
};