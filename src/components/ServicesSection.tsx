
import React from 'react';
import { Scissors, ShowerHead, Stethoscope, ShoppingBag, Heart, PawPrint } from 'lucide-react';
import Container from './ui/container';
import AnimateInView from './AnimateInView';

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
}) => <AnimateInView animation="fade-up" className="flex flex-col md:flex-row w-full overflow-hidden relative group">
    <div className={`w-full md:w-1/2 overflow-hidden ${isEven ? 'md:order-2' : 'md:order-1'}`}>
      <img src={imageSrc} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className={`w-full md:w-1/2 bg-pet-secondary flex flex-col justify-center p-8 md:p-12 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-pet-primary flex items-center justify-center text-white">
          {icon}
        </div>
        <h3 className="text-3xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-white/80 text-lg">{description}</p>
    </div>
  </AnimateInView>;

const ServicesSection: React.FC = () => {
  const services = [{
    icon: <Scissors size={20} />,
    title: "Pet Shops",
    description: "Encontre as melhores lojas para produtos, acessórios e serviços de beleza para seu pet.",
    imageSrc: "/lovable-uploads/343c60f1-e8c7-4e6c-9f7f-fb9db57dba86.png"
  }, {
    icon: <ShowerHead size={20} />,
    title: "Banho & Tosa",
    description: "Localize os estabelecimentos mais bem avaliados para cuidados de higiene do seu animal.",
    imageSrc: "/lovable-uploads/cf16fe67-295f-4110-8486-e03556454822.png"
  }, {
    icon: <Stethoscope size={20} />,
    title: "Clínicas Veterinárias",
    description: "Encontre veterinários próximos de você para cuidados médicos do seu pet.",
    imageSrc: "/lovable-uploads/ae84501d-a21e-40bb-995e-b8bac8284c1d.png"
  }, {
    icon: <ShoppingBag size={20} />,
    title: "Lojas Especializadas",
    description: "Descubra lojas com produtos específicos para raças ou necessidades especiais.",
    imageSrc: "/lovable-uploads/965b2b79-8bb1-40b7-aec6-c043356a22b8.png"
  }, {
    icon: <Heart size={20} />,
    title: "Adoção de Pets",
    description: "Conheça ONGs e centros de adoção próximos que têm animais precisando de um lar.",
    imageSrc: "/lovable-uploads/63a840e6-d0a1-461e-98cc-80636d38f2fe.png"
  }, {
    icon: <PawPrint size={20} />,
    title: "Hotéis & Creches",
    description: "Localize hotéis e creches para seu pet ficar enquanto você viaja ou trabalha.",
    imageSrc: "/lovable-uploads/f024a96e-a06d-4139-9c53-2b7a1532eab5.png"
  }];

  return <section id="services" className="pt-[50px] w-full bg-pet-secondary relative overflow-hidden md:pt-[40px]">
      {/* Add fading transition from the section above */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-pet-dark/90 to-pet-secondary w-full -mt-1"></div>
      
      <Container maxWidth="2xl">
        <AnimateInView animation="fade-up">
          <h2 className="text-gradient text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 relative z-10">
            Encontre Serviços Perto de Você
          </h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto relative z-10">
            Veja todos os estabelecimentos e serviços para pets disponíveis na sua região
          </p>
        </AnimateInView>
      </Container>

      <div className="w-full mt-12">
        {services.map((service, index) => <React.Fragment key={index}>
            <ServiceCard icon={service.icon} title={service.title} description={service.description} imageSrc={service.imageSrc} isEven={index % 2 === 0} />
          </React.Fragment>)}
      </div>
      
      {/* Add a smooth gradient transition to the next section */}
      <div className="w-full h-24 bg-gradient-to-b from-pet-secondary to-pet-dark"></div>
    </section>;
};

export default ServicesSection;
