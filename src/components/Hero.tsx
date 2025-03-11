
import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import AnimateInView from './AnimateInView';
import Container from './ui/container';

const Hero: React.FC = () => {
  return (
    <section 
      className="min-h-screen pt-24 pb-20 relative overflow-hidden flex items-center"
      style={{
        background: 'linear-gradient(to bottom, rgba(0, 128, 166, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%)',
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-pet-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-[40%] right-[10%] w-72 h-72 bg-pet-accent/20 rounded-full filter blur-3xl"></div>
      </div>

      <Container maxWidth="2xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <AnimateInView animation="fade-up" delay={200}>
              <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-white/90 text-sm font-medium mb-6">
                Premium Pet Care in Your Pocket
              </span>
            </AnimateInView>
            
            <AnimateInView animation="fade-up" delay={400}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gradient">Pamper Your Pets</span> with Professional Grooming Services
              </h1>
            </AnimateInView>
            
            <AnimateInView animation="fade-up" delay={600}>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0">
                Schedule grooming appointments, track your pet's care history, and find the best services - all in one beautifully designed app.
              </p>
            </AnimateInView>
            
            <AnimateInView animation="fade-up" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#download" className="btn-primary flex items-center justify-center">
                  <Download size={18} className="mr-2" />
                  Download App
                </a>
                <a href="#features" className="btn-secondary flex items-center justify-center">
                  Learn More
                </a>
              </div>
            </AnimateInView>
          </div>
          
          <AnimateInView animation="fade-in" delay={1000} className="hidden lg:block">
            <div className="relative flex justify-center">
              <div className="relative w-[280px] h-[580px] rounded-[40px] border-8 border-black bg-black shadow-app-preview overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000&auto=format" 
                  alt="Pet grooming app" 
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-[28px]"
                  loading="lazy"
                />
                <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-2xl"></div>
                <div className="absolute inset-x-0 top-0 h-[40px] w-[40%] mx-auto bg-black rounded-b-xl"></div>
              </div>
              <div className="animate-floating absolute -right-12 bottom-20 w-[220px] h-[240px] rounded-3xl border-4 border-black bg-black shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=800&auto=format" 
                  alt="Dog grooming" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="animate-pulse-soft absolute -left-10 top-20 w-[180px] h-[180px] rounded-3xl border-4 border-black bg-black shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format" 
                  alt="Pet bath" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimateInView>
        </div>
        
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#features" 
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} className="text-white" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
