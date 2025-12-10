import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import BrandLogo from './BrandLogo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname === '/') {
        const sections = ['soluciones', 'casos', 'faq', 'contacto'];
        let current = '';
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              current = section;
            }
          }
        }
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavClick = (path: string, e?: React.MouseEvent) => {
    setIsOpen(false);
    if (path.startsWith('/#')) {
        const targetId = path.replace('/#', '');
        if (location.pathname === '/') {
            e?.preventDefault();
            const element = document.getElementById(targetId);
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                setActiveSection(targetId);
            }
        }
    }
  };

  const navLinks = [
    { name: 'Soluciones IA', path: '/#soluciones', id: 'soluciones' },
    { name: 'Casos de Éxito', path: '/#casos', id: 'casos' },
    { name: 'Preguntas', path: '/#faq', id: 'faq' },
    { name: 'Blog', path: '/blog', id: 'blog' },
  ];

  const menuVariants: Variants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  const linkVariants: Variants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({ x: 0, opacity: 1, transition: { delay: i * 0.1 } })
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-white/10 py-3 shadow-lg shadow-brand-600/10'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo using Component for Vector Quality */}
          <NavLink 
            to="/" 
            className="flex items-center group relative z-50" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <BrandLogo className="h-12 w-auto" />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id || (link.path === '/blog' && location.pathname.includes('/blog'));
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(link.path, e)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </NavLink>
              );
            })}
            
            <div className="pl-4 ml-2 border-l border-white/10">
                <NavLink
                to="/booking"
                className="group relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium tracking-tighter text-white bg-white/5 border border-white/10 rounded-full transition-all hover:bg-brand-600 hover:border-brand-500 hover:scale-105"
                >
                <span className="relative flex items-center gap-2 text-sm">
                    Agendar
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
                </NavLink>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white focus:outline-none rounded-lg bg-white/5 backdrop-blur-sm"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, i) => (
                <motion.div key={link.name} custom={i} variants={linkVariants}>
                    <NavLink
                    to={link.path}
                    onClick={(e) => handleNavClick(link.path, e)}
                    className={`flex items-center justify-between p-4 text-2xl font-bold border-b border-white/5 ${
                        activeSection === link.id ? 'text-brand-600' : 'text-gray-300'
                    }`}
                    >
                    {link.name}
                    <ChevronRight className={`w-6 h-6 ${activeSection === link.id ? 'opacity-100' : 'opacity-20'}`} />
                    </NavLink>
                </motion.div>
              ))}
              
              <motion.div custom={4} variants={linkVariants} className="pt-8">
                  <NavLink
                    to="/booking"
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 text-white text-lg font-bold py-4 rounded-xl shadow-lg"
                  >
                    Agendar Llamada <ArrowRight className="w-5 h-5" />
                  </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;