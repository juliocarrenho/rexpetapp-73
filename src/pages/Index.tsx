
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ServicesSection from '@/components/ServicesSection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    console.log("Index component mounted successfully");
    // Log window location for debugging
    console.log("Window location in Index:", window.location.href);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-pet-primary/90 to-black text-white overflow-hidden">
      <Navbar />
      <main className="flex flex-col w-full gap-6 md:gap-8 pb-8 md:pb-12 mt-[70px] md:mt-[25px]">
        <Hero />
        <Features />
        <ServicesSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
