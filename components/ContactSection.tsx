import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-industrial-orange to-orange-600 py-16 relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 transform -rotate-12 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="text-center lg:text-left text-white">
            <h2 className="text-4xl font-display font-black uppercase mb-2 tracking-tight">
              ¿Listo para comenzar?
            </h2>
            <p className="text-white/90 font-medium text-lg flex items-center gap-2 justify-center lg:justify-start">
              Líneas directas de atención especializada <ArrowRight className="w-5 h-5" />
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 w-full lg:w-auto">
            {/* Sales Card */}
            <div className="group flex-1 bg-black text-white p-6 rounded-sm border-l-8 border-white hover:bg-gray-900 transition-all cursor-pointer shadow-lg transform hover:-translate-y-1">
              <span className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-1 group-hover:text-industrial-orange transition-colors">Departamento de Ventas</span>
              <a href="tel:7878812023" className="flex items-center gap-4">
                <div className="bg-gray-800 p-2 rounded-full">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl md:text-3xl font-display font-bold">(787) 881-2023</span>
              </a>
            </div>
            
            {/* Rentals Card */}
            <div className="group flex-1 bg-white text-industrial-black p-6 rounded-sm border-l-8 border-industrial-charcoal hover:bg-gray-50 transition-all cursor-pointer shadow-lg transform hover:-translate-y-1">
              <span className="block text-industrial-orangeDark text-xs font-bold uppercase tracking-widest mb-1">Renta de Equipos</span>
              <a href="tel:7878813267" className="flex items-center gap-4">
                 <div className="bg-industrial-orange/20 p-2 rounded-full">
                  <Phone className="w-5 h-5 text-industrial-orange" />
                </div>
                <span className="text-2xl md:text-3xl font-display font-bold">(787) 881-3267</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;