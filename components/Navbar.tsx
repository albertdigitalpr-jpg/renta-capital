import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useSiteImage } from '../hooks/useSiteImage';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const defaultLogo = "https://scontent.fsju2-1.fna.fbcdn.net/v/t39.30808-6/568499906_1289776459614472_7203326321156787647_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=IE-zGgBlL-8Q7kNvwH1Ya9b&_nc_oc=AdkvMmGgF-oN1_bkEbY3M5_lqgb6qrF5cgPKTQfjKJXZuq6zxUvzU1Yx0wFlMT-dudzaED1QUdOxN87GStermVSS&_nc_zt=23&_nc_ht=scontent.fsju2-1.fna&_nc_gid=Kb0M9njIIc2z7MmqJrXULA&oh=00_AfnjLGPevkY3wVZOVSEKLssKwQKvm2y24kHCOqpMRzFEKA&oe=693601A9";
  
  const logoUrl = useSiteImage('site_logo', defaultLogo);

  return (
    <nav className="relative z-50 bg-industrial-black/95 border-b border-gray-800 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <img 
                src={logoUrl} 
                alt="Capital Rental Logo" 
                className="h-12 w-12 rounded-full object-cover border-2 border-industrial-orange shadow-[0_0_15px_rgba(255,94,0,0.5)]"
              />
              <div className="flex flex-col">
                <span className="text-white font-display font-black text-2xl tracking-tighter leading-none">
                  CAPITAL <span className="text-industrial-orange">RENTAL</span>
                </span>
                <span className="text-gray-400 text-[0.65rem] font-bold uppercase tracking-[0.2em] leading-none mt-1">
                  Construction Hardware
                </span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <a href="#hero" className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-sm text-sm font-bold transition-colors uppercase tracking-widest">Inicio</a>
              <a href="#services" className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-sm text-sm font-bold transition-colors uppercase tracking-widest">Servicios</a>
              <a href="#products" className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-sm text-sm font-bold transition-colors uppercase tracking-widest">Catálogo</a>
              <a href="#about" className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-sm text-sm font-bold transition-colors uppercase tracking-widest">Nosotros</a>
              <a href="#contact" className="ml-4 bg-white text-industrial-black hover:bg-industrial-orange hover:text-white px-6 py-2 rounded-sm text-sm font-black transition-colors uppercase tracking-widest shadow-lg transform hover:-translate-y-0.5">
                Contacto
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-industrial-black border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#hero" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-bold uppercase">Inicio</a>
            <a href="#services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-bold uppercase">Servicios</a>
            <a href="#products" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-bold uppercase">Catálogo</a>
            <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-bold uppercase">Nosotros</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;