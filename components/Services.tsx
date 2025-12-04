import React from 'react';
import { Truck, Wrench, Hammer, HardHat, ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'renta',
    title: 'Renta de Equipos',
    description: 'Flota moderna de maquinaria pesada y ligera. Disponibilidad inmediata para obras.',
    icon: Truck,
  },
  {
    id: 'ferreteria',
    title: 'Ferretería',
    description: 'Amplio inventario de materiales, químicos y acabados para construcción.',
    icon: Wrench,
  },
  {
    id: 'herramientas',
    title: 'Herramientas Pro',
    description: 'Marcas líderes mundiales. Venta y servicio técnico certificado.',
    icon: Hammer,
  },
  {
    id: 'soluciones',
    title: 'Para Contratistas',
    description: 'Crédito comercial, entregas programadas y soporte en campo.',
    icon: HardHat,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-industrial-charcoal relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-industrial-orange font-bold tracking-[0.3em] uppercase text-sm">Nuestras Divisiones</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-2 uppercase">
            Soluciones <span className="text-outline text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">Industriales</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={service.id} className="group relative bg-industrial-black border border-industrial-gray hover:border-industrial-orange transition-all duration-300 overflow-hidden">
              {/* Glossy Header Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <div className="p-8 relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-industrial-gray to-black border border-gray-700 rounded-sm flex items-center justify-center group-hover:border-industrial-orange transition-colors">
                    <service.icon className="text-white group-hover:text-industrial-orange transition-colors" size={28} />
                  </div>
                  <span className="text-4xl font-display font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                    0{index + 1}
                  </span>
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-3 uppercase tracking-wide group-hover:text-industrial-orange transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow border-t border-gray-800 pt-4">
                  {service.description}
                </p>

                <div className="flex items-center justify-end">
                  <div className="bg-industrial-charcoal p-2 rounded-sm group-hover:bg-industrial-orange transition-colors">
                    <ArrowUpRight size={18} className="text-gray-400 group-hover:text-white" />
                  </div>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-industrial-orange/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;