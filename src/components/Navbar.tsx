
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Container from './ui/container';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { name: 'Download', href: '#top' },
    { name: 'Recursos', href: '#features' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const logoUrl = "/lovable-uploads/6ff623d7-8f42-46ce-8775-13ff672b8d19.png";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm" />
      
      <Container maxWidth="full">
        <nav className="relative flex items-center justify-between py-6 max-w-7xl mx-auto px-4">
          <Link to="/" className="flex items-center">
            <img 
              src={logoUrl}
              alt="Logo Rex Pet" 
              className="h-8"
              onError={(e) => {
                console.error("Logo failed to load:", e);
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "/lovable-uploads/6ff623d7-8f42-46ce-8775-13ff672b8d19.png";
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={link.href === '#top' ? scrollToTop : undefined}
                className="text-white/70 hover:text-white transition-all duration-300 text-sm font-medium relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#e879f9] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="glass-panel px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition-all duration-300"
            >
              Começar Agora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Alternar menu mobile"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            'md:hidden fixed inset-0 bg-[#0a0118]/95 backdrop-blur-lg transition-all duration-300 ease-in-out',
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          )}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href === '#top') {
                    e.preventDefault();
                    scrollToTop();
                  }
                  setMobileMenuOpen(false);
                }}
                className="text-white/70 hover:text-white transition-all duration-300 text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="glass-panel px-6 py-3 text-white font-medium hover:bg-white/10 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Começar Agora
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
