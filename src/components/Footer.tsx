
import React from 'react';
import Container from './ui/container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-6 relative">
      <Container maxWidth="xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <img 
              src="/lovable-uploads/6ff623d7-8f42-46ce-8775-13ff672b8d19.png" 
              alt="Rex Pet Logo" 
              className="h-8"
            />
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-pet-primary transition-colors text-sm">Privacy</a>
            <a href="#" className="text-white/70 hover:text-pet-primary transition-colors text-sm">Terms</a>
            <a href="#" className="text-white/70 hover:text-pet-primary transition-colors text-sm">Contact</a>
          </div>
          
          <p className="text-white/60 text-xs">
            © {currentYear} Rex Pet. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
