import React from 'react';
import { ClipboardCheck, ArrowRight, Phone } from 'lucide-react';
import { useSiteImage } from '../hooks/useSiteImage';

interface HeroProps {
  onOpenAIModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAIModal }) => {
  // Uses the hook to fetch 'hero_main' from DB, defaults to the construction handshake image
  const heroImage = useSiteImage(
    'hero_main', 
    "https://images.unsplash.com/photo-1581578731117-104f2a417954?q=80&w=1000&auto=format&fit=crop"
  );

  return (
    <div id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-industrial-black">
      {/* Background with Monogram Pattern */}
      <div className="absolute inset-0 z-0 bg-monogram-pattern opacity-20"></div>
      
      {/* Diagonal Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-industrial-black via-transparent to-industrial-charcoal opacity-95"></div>
      
      {/* Gradient Accents */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-industrial-orange blur-[180px] opacity-10 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-gray-800 blur-[150px] opacity-20 rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
            
            {/* Brand Label */}
            <div className="mb-4 inline-block">
               <h2 className="text-industrial-orange font-display font-black text-2xl tracking-[0.2em] uppercase border-b-4 border-industrial-orange inline-block pb-1">
                Capital Rental
              </h2>
            </div>

            <h1 className="font-display font-bold text-white leading-[0.9] uppercase drop-shadow-2xl">
              <span className="text-4xl sm:text-5xl lg:text-6xl block mb-2 tracking-tight">Tu proyecto comienza</span>
              <span className="text-3xl sm:text-4xl lg:text-5xl block mb-4 text-gray-400">con una mejor</span>
              <span className="text-6xl sm:text-8xl lg:text-[7rem] block text-transparent bg-clip-text bg-gradient-to-r from-industrial-orange via-orange-500 to-white tracking-tighter transform lg:-ml-1 pb-2">
                EXPERIENCIA
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed border-l-4 border-industrial-gray pl-6 text-left">
              Ferretería especializada y renta de equipos de construcción. Calidad industrial para resultados profesionales.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
               <button 
                onClick={onOpenAIModal}
                className="group relative bg-white text-industrial-black px-8 py-5 rounded-sm font-black uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-gray-200 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
              >
                <ClipboardCheck className="w-6 h-6 text-industrial-orange" />
                <span>Cotizar con IA</span>
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-industrial-orange/50 rounded-sm transition-all duration-300 scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-100"></div>
              </button>
              
              <a href="#products" className="group px-8 py-5 rounded-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-white/20 hover:border-industrial-orange hover:bg-industrial-orange/10 transition-all duration-300 text-white">
                <span>Ver Catálogo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Phone Numbers Banner - Bigger and Bolder */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-gray-800 pt-10">
              <div className="bg-industrial-charcoal p-6 border-l-8 border-industrial-orange shadow-lg group hover:bg-gray-800 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5 text-industrial-orange" />
                  <span className="text-gray-400 text-sm font-black uppercase tracking-widest">Ventas</span>
                </div>
                <a href="tel:7878812023" className="block text-3xl xl:text-4xl font-display font-black text-white group-hover:text-industrial-orange transition-colors tracking-tight">
                  (787) 881-2023
                </a>
              </div>
              <div className="bg-white p-6 border-l-8 border-industrial-charcoal shadow-lg group hover:bg-gray-100 transition-colors cursor-pointer">
                 <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5 text-industrial-black" />
                  <span className="text-industrial-charcoal text-sm font-black uppercase tracking-widest">Renta</span>
                </div>
                <a href="tel:7878813267" className="block text-3xl xl:text-4xl font-display font-black text-industrial-black group-hover:text-industrial-orange transition-colors tracking-tight">
                  (787) 881-3267
                </a>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="hidden lg:block w-2/5 relative">
            <div className="relative z-10 group">
              <img 
                src={heroImage}
                alt="Construction Partnership" 
                className="w-full rounded-sm shadow-2xl border-2 border-gray-800 grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-[1.02]"
              />
              {/* Graphic Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-industrial-orange/20 backdrop-blur-md border border-industrial-orange/50 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-white/10 -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-industrial-black via-industrial-orange to-industrial-black border-t border-white/10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-50"></div>
      </div>
    </div>
  );
};

export default Hero;