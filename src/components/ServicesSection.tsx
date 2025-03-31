
import React from 'react';
import { Scissors, ShowerHead, Heart, Stethoscope, ShoppingBag, PawPrint } from 'lucide-react';
import Container from './ui/container';
import AnimateInView from './AnimateInView';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  imageSrc
}) => (
  <AnimateInView animation="fade-up" className="overflow-hidden rounded-xl relative group">
    <div className="aspect-[4/3] w-full overflow-hidden">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 flex flex-col justify-end p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-pet-primary flex items-center justify-center text-white">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-white/80 text-sm">{description}</p>
      </div>
    </div>
  </AnimateInView>
);

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Scissors size={18} />,
      title: "Tosa Profissional",
      description: "Cortes personalizados e estilização para deixar seu pet com visual renovado e saudável.",
      imageSrc: "/lovable-uploads/90474696-0429-404a-95cb-14df0cc1c698.png"
    },
    {
      icon: <ShowerHead size={18} />,
      title: "Banho Completo",
      description: "Limpeza completa com produtos específicos para cada tipo de pelagem e necessidade.",
      imageSrc: "/lovable-uploads/19e6c2ea-108c-4df7-82f0-fc342f59a0ec.png"
    },
    {
      icon: <Stethoscope size={18} />,
      title: "Atendimento Veterinário",
      description: "Consultas, exames e cuidados preventivos para manter a saúde do seu animal em dia.",
      imageSrc: "/lovable-uploads/6ff623d7-8f42-46ce-8775-13ff672b8d19.png"
    },
    {
      icon: <ShoppingBag size={18} />,
      title: "Pet Shop",
      description: "Produtos de qualidade para alimentação, higiene, conforto e diversão do seu pet.",
      imageSrc: "/lovable-uploads/bb894b99-5366-43cd-a071-05bd3b1266bc.png"
    },
    {
      icon: <Heart size={18} />,
      title: "Cuidados Especiais",
      description: "Tratamentos específicos para pets idosos ou com necessidades especiais.",
      imageSrc: "/lovable-uploads/90474696-0429-404a-95cb-14df0cc1c698.png"
    },
    {
      icon: <PawPrint size={18} />,
      title: "Hotel Pet",
      description: "Hospedagem segura e confortável para seu pet durante suas viagens ou ausências.",
      imageSrc: "/lovable-uploads/19e6c2ea-108c-4df7-82f0-fc342f59a0ec.png"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 w-full bg-black/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-pet-gradient opacity-20"></div>
      
      <Container maxWidth="2xl">
        <AnimateInView animation="fade-up">
          <h2 className="text-gradient text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2">
            Serviços para seu Pet
          </h2>
          <p className="text-white/80 text-center max-w-2xl mx-auto mb-12">
            Descubra todos os serviços de qualidade disponíveis para o bem-estar e cuidado do seu animal de estimação
          </p>
        </AnimateInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
