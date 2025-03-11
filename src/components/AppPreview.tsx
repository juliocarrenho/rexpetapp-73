
import React from 'react';
import AnimateInView from './AnimateInView';

const AppPreview: React.FC = () => {
  return (
    <div className="mt-20 relative">
      <div className="absolute inset-0 bg-pet-gradient opacity-30 blur-3xl rounded-[40px]"></div>
      
      <AnimateInView animation="fade-up" className="relative">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-white">Experience The App</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Beautiful interface designed with your pet's needs in mind
          </p>
        </div>
      </AnimateInView>
      
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
        <AnimateInView 
          animation="fade-up" 
          delay={300} 
          className="relative w-[180px] md:w-[220px] h-[380px] md:h-[460px] rounded-[36px] border-8 border-black bg-black shadow-app-preview overflow-hidden transform rotate-[-8deg]"
        >
          <img 
            src="https://images.unsplash.com/photo-1607923667638-73996d3d7bcf?q=80&w=1000&auto=format" 
            alt="App screenshot: Home screen" 
            className="absolute inset-0 w-full h-full object-cover rounded-[24px]"
            loading="lazy"
          />
          <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-2xl"></div>
        </AnimateInView>
        
        <AnimateInView 
          animation="fade-up" 
          className="relative w-[200px] md:w-[240px] h-[420px] md:h-[500px] rounded-[36px] border-8 border-black bg-black shadow-app-preview overflow-hidden z-10"
        >
          <img 
            src="https://images.unsplash.com/photo-1553691158-78c6c41cb8b9?q=80&w=1000&auto=format" 
            alt="App screenshot: Booking screen" 
            className="absolute inset-0 w-full h-full object-cover rounded-[24px]"
            loading="lazy"
          />
          <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-2xl"></div>
        </AnimateInView>
        
        <AnimateInView 
          animation="fade-up" 
          delay={300} 
          className="relative w-[180px] md:w-[220px] h-[380px] md:h-[460px] rounded-[36px] border-8 border-black bg-black shadow-app-preview overflow-hidden transform rotate-[8deg]"
        >
          <img 
            src="https://images.unsplash.com/photo-1633293321141-c415f5ff5586?q=80&w=1000&auto=format" 
            alt="App screenshot: Profile screen" 
            className="absolute inset-0 w-full h-full object-cover rounded-[24px]"
            loading="lazy"
          />
          <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-2xl"></div>
        </AnimateInView>
      </div>
    </div>
  );
};

export default AppPreview;
