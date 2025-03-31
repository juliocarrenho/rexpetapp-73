
import React from 'react';
import Container from './ui/container';
import AnimateInView from './AnimateInView';
import { MapPin } from 'lucide-react';

// Sample petshop locations - these will be displayed statically
const PETSHOPS = [{
  name: "PetLove Centro",
  position: {
    left: "40%",
    top: "35%"
  },
  rating: 4.8
}, {
  name: "Animal Care",
  position: {
    left: "65%",
    top: "45%"
  },
  rating: 4.6
}, {
  name: "Pet Feliz",
  position: {
    left: "55%",
    top: "60%"
  },
  rating: 4.7
}, {
  name: "Mundo Animal",
  position: {
    left: "30%",
    top: "50%"
  },
  rating: 4.5
}, {
  name: "PetShop Express",
  position: {
    left: "75%",
    top: "30%"
  },
  rating: 4.9
}];
const MapSection: React.FC = () => {
  return <section id="map" className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-pet-gradient opacity-30"></div>
      
      <Container maxWidth="2xl">
        <AnimateInView animation="fade-up">
          <h2 className="text-gradient text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
            Encontre PetShops Próximos
          </h2>
          <p className="text-white/80 text-center max-w-2xl mx-auto mb-12">
            Localize os melhores petshops parceiros da Rex Pet em sua região e garanta os melhores cuidados para seu animal de estimação.
          </p>
        </AnimateInView>

        <AnimateInView animation="fade-up" delay={200}>
          <div className="rounded-xl overflow-hidden shadow-app-preview glass-panel relative">
            <div className="h-[400px] md:h-[500px] relative">
              {/* Map background image */}
              <div className="absolute inset-0 bg-gray-800">
                <img src="/map-background.jpg" alt="Map background" className="w-full h-full object-cover opacity-70" />
              </div>
              
              {/* Overlay to darken the map image */}
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* City outline overlay - removed mix-blend-screen to eliminate shadow effect */}
              <div className="absolute inset-0 opacity-60">
                <img 
                  alt="City outline" 
                  className="w-full h-full object-cover" 
                  src="/lovable-uploads/90474696-0429-404a-95cb-14df0cc1c698.png" 
                />
              </div>
              
              {/* Map pins */}
              {PETSHOPS.map((shop, index) => <div key={index} className="absolute animate-pulse-soft transition-all duration-300 hover:scale-110 cursor-pointer group z-10" style={{
              left: shop.position.left,
              top: shop.position.top
            }}>
                  <div className="relative">
                    <MapPin size={32} className="text-pet-primary drop-shadow-lg" fill="#001a22" />
                    
                    {/* Popup on hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                      <div className="bg-white text-black p-2 rounded-lg shadow-lg text-sm whitespace-nowrap">
                        <p className="font-bold">{shop.name}</p>
                        <p className="text-xs">Avaliação: {shop.rating}/5</p>
                      </div>
                    </div>
                  </div>
                </div>)}
              
              {/* Legend */}
              <div className="absolute bottom-4 right-4 bg-black/70 p-3 rounded-lg z-10">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-pet-primary" />
                  <span className="text-white text-sm">PetShops Parceiros</span>
                </div>
              </div>
            </div>
          </div>
        </AnimateInView>
      </Container>
    </section>;
};
export default MapSection;
