
import React from 'react';
import Container from './ui/container';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Use absolute URL for the logo
  const logoUrl = `${window.location.origin}/rexpetapp/lovable-uploads/6ff623d7-8f42-46ce-8775-13ff672b8d19.png`;
  
  return (
    <footer className="bg-black py-4 relative w-full">
      <Container maxWidth="full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 max-w-6xl mx-auto px-4">
          <div>
            <Link to="/">
              <img 
                src={logoUrl} 
                alt="Logo Rex Pet" 
                className="h-7"
                onError={(e) => {
                  console.error("Footer logo failed to load:", e);
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "/rexpetapp/lovable-uploads/6ff623d7-8f42-46ce-8775-13ff672b8d19.png";
                }}
              />
            </Link>
          </div>
          
          <div className="flex space-x-4">
            <Link to="/" className="text-white/60 hover:text-pet-primary transition-colors text-xs">Privacidade</Link>
            <Link to="/" className="text-white/60 hover:text-pet-primary transition-colors text-xs">Termos</Link>
            <Link to="/" className="text-white/60 hover:text-pet-primary transition-colors text-xs">Contato</Link>
          </div>
          
          <p className="text-white/50 text-xs">
            © {currentYear} Rex Pet
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
