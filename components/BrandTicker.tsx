import React from 'react';
import LogoLoop from './LogoLoop';
import { Hammer, Wrench, HardHat, Truck } from 'lucide-react';

const BrandTicker: React.FC = () => {
  // Using styled text nodes to represent heavy industrial brands without relying on external images
  // Makita has been updated to use a specific high-quality transparent image
  const brands = [
    { node: <span className="font-display font-black text-3xl tracking-tighter text-gray-500 hover:text-white transition-colors">CATERPILLAR</span>, title: "CAT" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Makita_Logo.svg/512px-Makita_Logo.svg.png", title: "Makita", alt: "Makita Logo" },
    { node: <span className="font-display font-black text-3xl tracking-tighter text-gray-500 hover:text-yellow-500 transition-colors">DEWALT</span>, title: "DeWalt" },
    { node: <span className="font-display font-black text-3xl tracking-tighter text-gray-500 hover:text-red-600 transition-colors">HILTI</span>, title: "Hilti" },
    { node: <span className="font-display font-black text-3xl tracking-tighter text-gray-500 hover:text-green-600 transition-colors">JOHN DEERE</span>, title: "John Deere" },
    { node: <span className="font-display font-black text-3xl tracking-tighter text-gray-500 hover:text-blue-600 transition-colors">BOSCH</span>, title: "Bosch" },
    { node: <span className="font-display font-black text-3xl tracking-tighter text-gray-500 hover:text-orange-500 transition-colors">STIHL</span>, title: "Stihl" },
    { node: <span className="font-display font-black text-3xl tracking-tighter text-gray-500 hover:text-white transition-colors">KOMATSU</span>, title: "Komatsu" },
    { node: <span className="font-display font-black text-3xl tracking-tighter text-gray-500 hover:text-red-500 transition-colors">MILWAUKEE</span>, title: "Milwaukee" },
  ];

  return (
    <section className="bg-industrial-charcoal border-y border-gray-800 py-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
         <p className="text-center text-gray-600 text-xs font-bold uppercase tracking-[0.3em]">Marcas de Confianza</p>
      </div>
      
      <div className="opacity-70 hover:opacity-100 transition-opacity duration-500">
        <LogoLoop
          logos={brands}
          speed={60}
          direction="left"
          logoHeight={40}
          gap={80}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#1A1A1A" // Matches bg-industrial-charcoal
          ariaLabel="Construction Brands"
        />
      </div>
    </section>
  );
};

export default BrandTicker;