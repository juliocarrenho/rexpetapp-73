
import React from 'react';
import Container from '@/components/ui/container';

const UnderConstruction: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pet-primary/90 to-black flex flex-col items-center justify-center px-4 text-center">
      <Container maxWidth="sm">
        <div className="glass-panel p-8 md:p-12 flex flex-col items-center">
          <img 
            src="/lovable-uploads/6ff623d7-8f42-46ce-8775-13ff672b8d19.png" 
            alt="Rex Pet Logo" 
            className="h-16 md:h-20 mb-8"
          />
          
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Under Construction
          </h1>
          
          <p className="text-white/80 mb-6">
            We're working hard on creating something amazing for you and your pets.
            Please check back soon!
          </p>
          
          <div className="text-white/60 text-sm">
            © {new Date().getFullYear()} Rex Pet
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UnderConstruction;
