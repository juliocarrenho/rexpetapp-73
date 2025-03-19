
import React from 'react';
import Container from './ui/container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-4 relative">
      <Container maxWidth="xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div>
            <img 
              src="/lovable-uploads/6ff623d7-8f42-46ce-8775-13ff672b8d19.png" 
              alt="Rex Pet Logo" 
              className="h-7"
            />
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-white/60 hover:text-pet-primary transition-colors text-xs">Privacy</a>
            <a href="#" className="text-white/60 hover:text-pet-primary transition-colors text-xs">Terms</a>
            <a href="#" className="text-white/60 hover:text-pet-primary transition-colors text-xs">Contact</a>
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
