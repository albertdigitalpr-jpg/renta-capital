import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import ProductGrid from './components/ProductGrid';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AIQuoteModal from './components/AIQuoteModal';
import ChainDecoration from './components/ChainDecoration';
import BrandTicker from './components/BrandTicker';

function App() {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  return (
    <div className="bg-industrial-black min-h-screen text-white selection:bg-industrial-orange selection:text-white overflow-x-hidden relative">
      {/* Left Chain */}
      <ChainDecoration side="left" />
      
      {/* Right Chain */}
      <ChainDecoration side="right" />

      <div className="relative z-10 w-full">
        <Navbar />
        
        <main>
          <Hero onOpenAIModal={() => setIsAIModalOpen(true)} />
          <Services />
          <BrandTicker />
          <ContactSection />
          <ProductGrid />
          <AboutUs />
          <Testimonials />
        </main>

        <Footer />
        
        <AIQuoteModal 
          isOpen={isAIModalOpen} 
          onClose={() => setIsAIModalOpen(false)} 
        />
      </div>
    </div>
  );
}

export default App;