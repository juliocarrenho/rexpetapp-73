
import React from 'react';
import { MapPin, Search, PawPrint } from 'lucide-react';
import AnimateInView from './AnimateInView';
import Container from './ui/container';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description
}) => (
  <AnimateInView animation="fade-up" className="glass-panel p-8 card-hover">
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e879f9] to-[#c026d3] flex items-center justify-center mb-6 shadow-lg">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-lg text-white/70 leading-relaxed">{description}</p>
  </AnimateInView>
);

const Features: React.FC = () => {
  const features = [{
    icon: <MapPin size={24} className="text-white" />,
    title: "Localização Facilitada",
    description: "Encontre os melhores serviços para pets próximos a você em segundos."
  }, {
    icon: <Search size={24} className="text-white" />,
    title: "Filtros Avançados",
    description: "Busque por tipo de serviço, avaliações e disponibilidade."
  }, {
    icon: <PawPrint size={24} className="text-white" />,
    title: "Perfis Completos",
    description: "Veja fotos, avaliações e detalhes dos serviços oferecidos em cada local."
  }];

  return (
    <section id="features" className="relative w-full py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#e879f9] opacity-20 rounded-full blur-[128px] -z-10" />
      
      <Container maxWidth="full">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateInView animation="fade-up">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm mb-6 backdrop-blur-sm">
                Recursos Principais ✨
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Encontre os <span className="text-gradient">Melhores Serviços</span><br />para Seu Pet
              </h2>
            </div>
          </AnimateInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureItem 
                key={index} 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
