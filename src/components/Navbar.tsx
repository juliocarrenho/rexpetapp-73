
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Container from './ui/container';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { name: 'Recursos', href: '#features' },
    { name: 'Download', href: '#download' },
    { name: 'Contato', href: '#contact' },
  ];

  // Use relative path for the logo
  const logoUrl = "/lovable-uploads/6ff623d7-8f42-46ce-8775-13ff672b8d19.png";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md w-full">
      <Container maxWidth="full">
        <nav className="flex items-center justify-between py-3 max-w-6xl mx-auto px-4">
          <Link to="/" className="flex items-center">
            <img 
              src={logoUrl}
              alt="Logo Rex Pet" 
              className="h-10"
              onError={(e) => {
                console.error("Logo failed to load:", e);
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "/lovable-uploads/6ff623d7-8f42-46ce-8775-13ff672b8d19.png";
              }}
            />
          </Link>

          {/* Desktop Navigation - Updated to white and bold font */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-white transition-colors duration-300 text-sm font-bold"
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

        {/* Mobile Navigation - Updated to white and bold font */}
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
                className="text-white hover:text-white transition-colors duration-300 py-1 text-sm font-bold"
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
