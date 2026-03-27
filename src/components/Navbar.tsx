import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Entrenamiento', href: '#training-areas' },
  { name: 'Videos', href: '#videos' },
  { name: 'Filosofía', href: '#philosophy' },
  { name: 'Contacto', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="flex h-10 w-10 items-center justify-center bg-accent-green rounded-lg shadow-lg shadow-accent-green/30 group-hover:shadow-accent-green/50 transition-shadow">
              <span className="text-lg font-extrabold text-black">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base font-bold tracking-tight text-white leading-none">
                ESPACIO
              </span>
              <span className="font-display text-xs font-bold tracking-[0.3em] text-accent-green uppercase">
                Sauce
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-accent-green"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-md md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-16 items-center justify-between px-4">
              <button 
                onClick={() => scrollToSection('#hero')}
                className="flex items-center gap-3 group"
              >
                <div className="flex h-10 w-10 items-center justify-center bg-accent-green rounded-lg shadow-lg shadow-accent-green/30">
                  <span className="text-lg font-extrabold text-black">S</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-base font-bold tracking-tight text-white leading-none">
                    ESPACIO
                  </span>
                  <span className="font-display text-xs font-bold tracking-[0.3em] text-accent-green uppercase">
                    Sauce
                  </span>
                </div>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
              >
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 py-12">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-2xl font-bold uppercase tracking-wider text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}