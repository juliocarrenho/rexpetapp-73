
import React from 'react';
import { Calendar, Search, Clock, Heart, Settings, Shield } from 'lucide-react';
import AnimateInView from './AnimateInView';
import Container from './ui/container';
import AppPreview from './AppPreview';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, delay }) => (
  <AnimateInView animation="fade-up" delay={delay} className="glass-panel p-6 card-hover">
    <div className="w-12 h-12 rounded-full bg-pet-primary/20 flex items-center justify-center mb-4 text-pet-primary">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-white/70">{description}</p>
  </AnimateInView>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <Calendar size={24} />,
      title: "Easy Scheduling",
      description: "Book grooming appointments with just a few taps, and receive reminders before your scheduled time.",
      delay: 100
    },
    {
      icon: <Search size={24} />,
      title: "Find Groomers",
      description: "Discover top-rated pet groomers in your area with detailed profiles and service offerings.",
      delay: 200
    },
    {
      icon: <Clock size={24} />,
      title: "Real-time Updates",
      description: "Get notifications about your pet's grooming progress and when they're ready for pickup.",
      delay: 300
    },
    {
      icon: <Heart size={24} />,
      title: "Pet Profiles",
      description: "Create detailed profiles for each of your pets with their grooming preferences and health information.",
      delay: 400
    },
    {
      icon: <Settings size={24} />,
      title: "Customizable Services",
      description: "Choose from a variety of grooming packages or create a custom service for your pet's specific needs.",
      delay: 500
    },
    {
      icon: <Shield size={24} />,
      title: "Secure Payments",
      description: "Pay securely through the app with various payment options and view your service history.",
      delay: 600
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-black">
      <Container maxWidth="2xl">
        <AnimateInView animation="fade-up">
          <h2 className="section-title text-center">Intuitive Features</h2>
          <p className="section-subtitle text-center">
            Our app comes with everything you need to keep your pets looking and feeling their best.
          </p>
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>

        <AppPreview />
      </Container>
    </section>
  );
};

export default Features;
