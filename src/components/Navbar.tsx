
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Container from './ui/container';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { name: 'Recursos', href: '#features' },
    { name: 'Download', href: '#download' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md w-full">
      <Container maxWidth="full">
        <nav className="flex items-center justify-between py-3 max-w-6xl mx-auto px-4">
          <a href="#" className="flex items-center">
            <img 
              src="/rexpetapp/lovable-uploads/6ff623d7-8f42-46ce-8775-13ff672b8d19.png" 
              alt="Logo Rex Pet" 
              className="h-10"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Alternar menu mobile"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            'md:hidden absolute left-0 right-0 top-full px-4 pt-2 pb-4 bg-black/80 backdrop-blur-lg transition-all duration-300 ease-in-out w-full',
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          )}
        >
          <div className="flex flex-col space-y-3 max-w-6xl mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors duration-300 py-1 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
