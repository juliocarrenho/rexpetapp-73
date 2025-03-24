import React from 'react';
import { Apple, Smartphone } from 'lucide-react';
import AnimateInView from './AnimateInView';
import Container from './ui/container';
import LeadCapture from './LeadCapture';
import { useIsMobile } from '@/hooks/use-mobile';
const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  return <section className="min-h-[90vh] w-full pt-16 md:pt-24 pb-8 md:pb-16 flex items-center">
      <Container maxWidth="full" className="relative z-10 px-[58px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-center max-w-6xl mx-auto">
          <div className="text-center md:text-left">
            <AnimateInView animation="fade-up" delay={200}>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                <span className="text-gradient">Cuidados para Pets</span> de Forma Simples
              </h1>
            </AnimateInView>
            
            <AnimateInView animation="fade-up" delay={300}>
              <p className="text-lg text-white/80 mb-6">
                Agende serviços de banho e tosa, encontre serviços locais e mantenha seus pets sempre bonitos.
              </p>
            </AnimateInView>
            
            {isMobile && <AnimateInView animation="fade-in" delay={250} className="mb-6">
                <div className="relative mx-auto w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-pet-primary/30">
                  <img src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" alt="Pet fofo" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </AnimateInView>}
            
            <AnimateInView animation="fade-up" delay={400}>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                <a href="#" className="bg-black text-white hover:bg-zinc-800 px-5 py-2.5 rounded-xl flex items-center justify-center transition-all duration-300 border border-zinc-700">
                  <Apple size={22} className="mr-2" />
                  <div className="text-left">
                    <p className="text-xs font-light">Baixe na</p>
                    <p className="text-sm font-bold">App Store</p>
                  </div>
                </a>
                
                <a href="#" className="bg-black text-white hover:bg-zinc-800 px-5 py-2.5 rounded-xl flex items-center justify-center transition-all duration-300 border border-zinc-700">
                  <Smartphone size={22} className="mr-2" />
                  <div className="text-left">
                    <p className="text-xs font-light">DISPONÍVEL NO</p>
                    <p className="text-sm font-bold">Google Play</p>
                  </div>
                </a>
              </div>
            </AnimateInView>
            
            <AnimateInView animation="fade-up" delay={500}>
              <LeadCapture />
            </AnimateInView>
          </div>
          
          <AnimateInView animation="fade-in" delay={300} className="hidden md:block">
            <div className="relative flex justify-center mt-16">
              <div className="relative w-[240px] h-[480px] rounded-[30px] border-8 border-black bg-black shadow-app-preview overflow-hidden">
                <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000&auto=format" alt="App de cuidados para pets" className="absolute inset-0 w-full h-full object-cover object-center rounded-[22px]" loading="lazy" />
              </div>
              <div className="absolute -right-4 bottom-20 w-[140px] h-[140px] rounded-2xl border-4 border-black bg-black shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=800&auto=format" alt="Banho de cachorro" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </AnimateInView>
        </div>
      </Container>
    </section>;
};
export default Hero;