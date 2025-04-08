
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
}) => <AnimateInView animation="fade-up" className="flex flex-col items-center text-center">
    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 text-white">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-white/70">{description}</p>
  </AnimateInView>;

const Features: React.FC = () => {
  const features = [{
    icon: <MapPin size={22} />,
    title: "Localização Facilitada",
    description: "Encontre os melhores serviços para pets próximos a você em segundos."
  }, {
    icon: <Search size={22} />,
    title: "Filtros Avançados",
    description: "Busque por tipo de serviço, avaliações e disponibilidade."
  }, {
    icon: <PawPrint size={22} />,
    title: "Perfis Completos",
    description: "Veja fotos, avaliações e detalhes dos serviços oferecidos em cada local."
  }];

  return <section id="features" className="w-full py-0">
      <Container maxWidth="full">
        <div className="max-w-6xl mx-auto px-4">
          <AnimateInView animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Encontre os <span className="text-gradient">Melhores Serviços</span> para Seu Pet
            </h2>
          </AnimateInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-[50px]">
            {features.map((feature, index) => <FeatureItem key={index} icon={feature.icon} title={feature.title} description={feature.description} />)}
          </div>
        </div>
      </Container>
    </section>;
};

export default Features;
