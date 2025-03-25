
import React from 'react';
import Container from './ui/container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-4 relative w-full">
      <Container maxWidth="full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 max-w-6xl mx-auto px-4">
          <div>
            <img 
              src="./lovable-uploads/6ff623d7-8f42-46ce-8775-13ff672b8d19.png" 
              alt="Logo Rex Pet" 
              className="h-7"
            />
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-white/60 hover:text-pet-primary transition-colors text-xs">Privacidade</a>
            <a href="#" className="text-white/60 hover:text-pet-primary transition-colors text-xs">Termos</a>
            <a href="#" className="text-white/60 hover:text-pet-primary transition-colors text-xs">Contato</a>
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
