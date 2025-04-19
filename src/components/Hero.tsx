
import React from 'react';
import { Apple, Smartphone } from 'lucide-react';
import AnimateInView from './AnimateInView';
import Container from './ui/container';
import LeadCapture from './LeadCapture';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-screen w-full pt-24 md:pt-32 pb-16 overflow-hidden">
      <div className="hero-glow" />
      
      <Container maxWidth="full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center max-w-7xl mx-auto">
          <div className="text-center md:text-left md:pl-4 relative z-10">
            <AnimateInView animation="fade-up" delay={200}>
              <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm mb-6 backdrop-blur-sm">
                Simplifique o Cuidado com seu Pet 🐾
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
                <span className="text-gradient">Serviços para Pets</span>{' '}
                ao seu Alcance
              </h1>
            </AnimateInView>
            
            <AnimateInView animation="fade-up" delay={300}>
              <p className="text-xl text-white/70 mb-8 max-w-xl">
                Encontre petshops, veterinários e serviços de qualidade para seu pet, tudo em um só lugar.
              </p>
            </AnimateInView>
            
            <AnimateInView animation="fade-up" delay={400}>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-12">
                <a href="#" className="glass-panel px-6 py-3 hover:bg-white/10 transition-all duration-300">
                  <Apple size={24} className="mr-3 inline-block" />
                  <span className="font-medium">App Store</span>
                </a>
                
                <a href="#" className="glass-panel px-6 py-3 hover:bg-white/10 transition-all duration-300">
                  <Smartphone size={24} className="mr-3 inline-block" />
                  <span className="font-medium">Google Play</span>
                </a>
              </div>
            </AnimateInView>
            
            <AnimateInView animation="fade-up" delay={500}>
              <LeadCapture />
            </AnimateInView>
          </div>
          
          <AnimateInView animation="fade-in" delay={300} className="relative z-10">
            <div className="relative flex justify-end items-center h-full">
              <div className="relative w-[280px] h-[560px] rounded-[40px] border-8 border-[#1a103f] bg-[#1a103f] shadow-2xl overflow-hidden mr-16 card-hover">
                <img 
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000&auto=format" 
                  alt="App para localizar serviços de pets" 
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-[32px]" 
                  loading="lazy" 
                />
              </div>
              <div className="absolute -right-4 bottom-32 w-[200px] h-[200px] rounded-3xl border-4 border-[#1a103f] bg-[#1a103f] shadow-2xl overflow-hidden z-10 card-hover">
                <img 
                  src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=800&auto=format" 
                  alt="Serviços para pets" 
                  className="w-full h-full object-cover" 
                  loading="lazy" 
                />
              </div>
            </div>
          </AnimateInView>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
