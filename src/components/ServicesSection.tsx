
import React from 'react';
import { Scissors, ShowerHead, Heart, Stethoscope, ShoppingBag, PawPrint } from 'lucide-react';
import Container from './ui/container';
import AnimateInView from './AnimateInView';
import { Separator } from './ui/separator';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
  isEven: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  imageSrc,
  isEven
}) => (
  <AnimateInView 
    animation="fade-up" 
    className="flex flex-col md:flex-row w-full overflow-hidden relative group"
  >
    <div 
      className={`w-full md:w-1/2 overflow-hidden ${isEven ? 'md:order-2' : 'md:order-1'}`}
    >
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
    </div>
    <div 
      className={`w-full md:w-1/2 bg-black/90 flex flex-col justify-center p-8 md:p-12 ${isEven ? 'md:order-1' : 'md:order-2'}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-pet-primary flex items-center justify-center text-white">
          {icon}
        </div>
        <h3 className="text-3xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-white/80 text-lg">{description}</p>
    </div>
  </AnimateInView>
);

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Scissors size={20} />,
      title: "Tosa Profissional",
      description: "Cortes personalizados e estilização para deixar seu pet com visual renovado e saudável.",
      imageSrc: "/lovable-uploads/343c60f1-e8c7-4e6c-9f7f-fb9db57dba86.png"
    },
    {
      icon: <ShowerHead size={20} />,
      title: "Banho Completo",
      description: "Limpeza completa com produtos específicos para cada tipo de pelagem e necessidade.",
      imageSrc: "/lovable-uploads/cf16fe67-295f-4110-8486-e03556454822.png"
    },
    {
      icon: <Stethoscope size={20} />,
      title: "Atendimento Veterinário",
      description: "Consultas, exames e cuidados preventivos para manter a saúde do seu animal em dia.",
      imageSrc: "/lovable-uploads/ae84501d-a21e-40bb-995e-b8bac8284c1d.png"
    },
    {
      icon: <ShoppingBag size={20} />,
      title: "Pet Shop",
      description: "Produtos de qualidade para alimentação, higiene, conforto e diversão do seu pet.",
      imageSrc: "/lovable-uploads/965b2b79-8bb1-40b7-aec6-c043356a22b8.png"
    },
    {
      icon: <Heart size={20} />,
      title: "Cuidados Especiais",
      description: "Tratamentos específicos para pets idosos ou com necessidades especiais.",
      imageSrc: "/lovable-uploads/63a840e6-d0a1-461e-98cc-80636d38f2fe.png"
    },
    {
      icon: <PawPrint size={20} />,
      title: "Hotel Pet",
      description: "Hospedagem segura e confortável para seu pet durante suas viagens ou ausências.",
      imageSrc: "/lovable-uploads/f024a96e-a06d-4139-9c53-2b7a1532eab5.png"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 w-full bg-black/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-pet-gradient opacity-20"></div>
      
      <div className="w-full mb-12">
        <Container maxWidth="2xl">
          <AnimateInView animation="fade-up">
            <h2 className="text-gradient text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2">
              Serviços para seu Pet
            </h2>
            <p className="text-white/80 text-center max-w-3xl mx-auto">
              Descubra todos os serviços de qualidade disponíveis para o bem-estar e cuidado do seu animal de estimação
            </p>
          </AnimateInView>
        </Container>
      </div>

      <div className="w-full">
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              isEven={index % 2 === 0}
            />
            {index < services.length - 1 && (
              <Separator className="w-full h-[1px] bg-white/10" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
