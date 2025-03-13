
import React from 'react';
import { Download } from 'lucide-react';
import AnimateInView from './AnimateInView';
import Container from './ui/container';

const Hero: React.FC = () => {
  return (
    <section className="pt-16 pb-8">
      <Container maxWidth="xl" className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <AnimateInView animation="fade-up" delay={200}>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                <span className="text-gradient">Pet Grooming</span> Made Simple
              </h1>
            </AnimateInView>
            
            <AnimateInView animation="fade-up" delay={300}>
              <p className="text-lg text-white/80 mb-6">
                Schedule grooming appointments, find local services, and keep your pets looking their best.
              </p>
            </AnimateInView>
            
            <AnimateInView animation="fade-up" delay={400}>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#download" className="btn-primary flex items-center justify-center">
                  <Download size={18} className="mr-2" />
                  Get the App
                </a>
              </div>
            </AnimateInView>
          </div>
          
          <AnimateInView animation="fade-in" delay={300} className="hidden md:block">
            <div className="relative flex justify-center">
              <div className="relative w-[240px] h-[480px] rounded-[30px] border-8 border-black bg-black shadow-app-preview overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000&auto=format" 
                  alt="Pet grooming app" 
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-[22px]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -right-8 bottom-16 w-[140px] h-[140px] rounded-2xl border-4 border-black bg-black shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=800&auto=format" 
                  alt="Dog grooming" 
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
