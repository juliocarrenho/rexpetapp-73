
import React from 'react';
import { Calendar, Search, Heart } from 'lucide-react';
import AnimateInView from './AnimateInView';
import Container from './ui/container';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <AnimateInView animation="fade-up" className="flex flex-col items-center text-center">
    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 text-white">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-white/70">{description}</p>
  </AnimateInView>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <Calendar size={22} />,
      title: "Agendamento Fácil",
      description: "Agende serviços de banho e tosa com apenas alguns toques."
    },
    {
      icon: <Search size={22} />,
      title: "Encontre Serviços",
      description: "Descubra petshops bem avaliados na sua vizinhança."
    },
    {
      icon: <Heart size={22} />,
      title: "Perfis de Pets",
      description: "Acompanhe as preferências e histórico do seu pet."
    }
  ];

  return (
    <section id="features" className="py-8 w-full">
      <Container maxWidth="full">
        <div className="max-w-6xl mx-auto px-4">
          <AnimateInView animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Mantenha Seus Pets <span className="text-gradient">Felizes & Limpos</span>
            </h2>
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
