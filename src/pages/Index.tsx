
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pet-primary/90 to-black text-white overflow-hidden">
      <Navbar />
      <main className="flex flex-col gap-6 md:gap-8 pb-8 md:pb-12 mt-[25px] md:mt-0">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
