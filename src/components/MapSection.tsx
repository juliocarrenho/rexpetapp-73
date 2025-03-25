
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Container from './ui/container';
import AnimateInView from './AnimateInView';

// Sample petshop locations - replace with real data as needed
const PETSHOPS = [
  { name: "PetLove Centro", coordinates: [-46.6333, -23.5505], rating: 4.8 },
  { name: "Animal Care", coordinates: [-46.6633, -23.5605], rating: 4.6 },
  { name: "Pet Feliz", coordinates: [-46.6433, -23.5705], rating: 4.7 },
  { name: "Mundo Animal", coordinates: [-46.6533, -23.5305], rating: 4.5 },
  { name: "PetShop Express", coordinates: [-46.6733, -23.5805], rating: 4.9 },
];

const MapSection: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');

  // This would be where you'd use a real Mapbox token
  // For now we'll use a placeholder input field for the user to add their own token
  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-46.6333, -23.5505], // São Paulo coordinates (approximate)
        zoom: 12,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Add markers for each petshop
      PETSHOPS.forEach(shop => {
        // Create a marker element
        const el = document.createElement('div');
        el.className = 'petshop-marker';
        el.style.width = '25px';
        el.style.height = '25px';
        el.style.borderRadius = '50%';
        el.style.backgroundColor = '#0080a6';
        el.style.border = '3px solid white';
        el.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
        el.style.cursor = 'pointer';
        
        // Create a popup
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div style="padding: 8px;">
              <h3 style="font-weight: bold; margin-bottom: 5px;">${shop.name}</h3>
              <p style="margin: 0;">Avaliação: ${shop.rating}/5</p>
            </div>
          `);

        // Add marker to the map
        new mapboxgl.Marker(el)
          .setLngLat(shop.coordinates)
          .setPopup(popup)
          .addTo(map.current!);
      });

    } catch (error) {
      console.error("Error initializing map:", error);
    }

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <section id="map" className="py-16 md:py-24 bg-black relative overflow-hidden">
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
          {!mapboxToken && (
            <div className="mb-6 p-4 bg-pet-primary/10 rounded-lg border border-pet-primary/30 max-w-xl mx-auto">
              <p className="text-white mb-2">
                Para visualizar o mapa, insira seu token público do Mapbox:
              </p>
              <input
                type="text"
                placeholder="Insira seu token do Mapbox"
                className="w-full p-2 rounded bg-black/40 border border-pet-primary/20 text-white"
                onChange={(e) => setMapboxToken(e.target.value)}
              />
              <p className="text-white/60 text-xs mt-2">
                Você pode obter um token gratuito em <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-pet-primary hover:underline">mapbox.com</a>
              </p>
            </div>
          )}
          
          <div className="rounded-xl overflow-hidden shadow-app-preview glass-panel relative">
            {!mapboxToken ? (
              <div className="h-[400px] md:h-[500px] bg-pet-dark/30 flex items-center justify-center">
                <p className="text-white/70">Insira seu token do Mapbox para visualizar o mapa</p>
              </div>
            ) : (
              <div className="h-[400px] md:h-[500px]" ref={mapContainer}></div>
            )}
          </div>
        </AnimateInView>
      </Container>
    </section>
  );
};

export default MapSection;
