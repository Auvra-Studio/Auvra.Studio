import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from './Button';
import { motion, AnimatePresence } from 'framer-motion';

const NavLink: React.FC<{ to: string; active: boolean; children: React.ReactNode; onClick: () => void }> = ({ 
  to, 
  active, 
  children, 
  onClick 
}) => (
  <button
    onClick={onClick}
    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      active ? 'text-white' : 'text-zinc-400 hover:text-white'
    }`}
  >
    {children}
    {active && (
      <motion.span 
        layoutId="navbar-indicator"
        className="absolute bottom-0 left-0 w-full h-px bg-white" 
        transition={{ duration: 0.3 }}
      />
    )}
  </button>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Projects', path: '/projects' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNav = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-primary/30">
      {/* Global Noise Overlay */}
      <div className="bg-noise" />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled ? 'bg-black/70 backdrop-blur-xl border-zinc-800/50' : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              className="flex-shrink-0 cursor-pointer group" 
              onClick={() => handleNav('/')}
            >
              <span className="text-xl font-bold tracking-tighter text-white group-hover:text-zinc-200 transition-colors">
                Auvra<span className="text-zinc-500">.Studio</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink 
                  key={item.path} 
                  to={item.path} 
                  active={location.pathname === item.path}
                  onClick={() => handleNav(item.path)}
                >
                  {item.label}
                </NavLink>
              ))}
              <Button size="sm" onClick={() => handleNav('/contact')}>
                Start Project
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-zinc-400 hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-xl border-b border-zinc-800 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-8 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNav(item.path)}
                    className={`block w-full text-left px-3 py-4 text-base font-medium border-b border-zinc-900 ${
                       location.pathname === item.path ? 'text-white' : 'text-zinc-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4">
                  <Button className="w-full" onClick={() => handleNav('/contact')}>
                    Start Project
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main className="flex-grow pt-20 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900 pt-20 pb-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-bold tracking-tighter text-white block mb-6">
                Auvra<span className="text-zinc-600">.Studio</span>
              </span>
              <p className="text-zinc-400 max-w-sm mb-6 leading-relaxed">
                Designing digital experiences built for performance, clarity, and scale. 
                We engineer the future of the web for bold brands.
              </p>
              <div className="flex space-x-6">
                <a href="https://github.com/Auvra-Studio" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Github size={20} /></a>
                <a href="https://www.instagram.com/auvra.studioo?igsh=amhidGdwNGZ5Y2Rv" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="mailto:auvra.studioo@gmail.com" className="text-zinc-500 hover:text-white transition-colors"><span className="sr-only">Email</span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">Services</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SaaS Engineering</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Brand Identity</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
            <p>&copy; 2024 Auvra.Studio. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};