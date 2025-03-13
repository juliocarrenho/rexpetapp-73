
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
      title: "Easy Booking",
      description: "Schedule grooming appointments with just a few taps."
    },
    {
      icon: <Search size={22} />,
      title: "Find Services",
      description: "Discover top-rated pet groomers in your neighborhood."
    },
    {
      icon: <Heart size={22} />,
      title: "Pet Profiles",
      description: "Keep track of your pet's preferences and history."
    }
  ];

  return (
    <section id="features" className="py-8">
      <Container maxWidth="xl">
        <AnimateInView animation="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Keep Your Pets <span className="text-gradient">Happy & Clean</span>
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
      </Container>
    </section>
  );
};

export default Features;
