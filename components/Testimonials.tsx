import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ing. Carlos Méndez',
    role: 'Jefe de Obra',
    company: 'Constructora Vertical',
    content: 'La disponibilidad inmediata de la maquinaria pesada nos salvó de un retraso crítico. El servicio de mantenimiento en sitio es impecable.',
  },
  {
    id: '2',
    name: 'Arq. Sofia Ramírez',
    role: 'Directora de Proyectos',
    company: 'Urbania Desarrollos',
    content: 'Encuentro herramientas especializadas que no tienen en otros lados. La calidad de los equipos Bosch y Makita que manejan es top.',
  },
  {
    id: '3',
    name: 'Roberto Dávila',
    role: 'Contratista General',
    company: 'Dávila & Asoc.',
    content: 'Llevo 5 años rentando con ellos. Los precios son justos y la atención personal en mostrador hace la diferencia.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-industrial-black relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white uppercase">Lo que dicen los <span className="text-industrial-orange">Expertos</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-industrial-gray p-8 rounded-sm relative mt-4 border-l-4 border-industrial-orange">
              <div className="absolute -top-5 left-6 bg-industrial-black p-2 rounded-full border border-industrial-gray">
                <Quote className="text-white w-6 h-6" />
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.content}"</p>
              <div>
                <h4 className="text-white font-bold font-display uppercase">{t.name}</h4>
                <div className="text-sm text-industrial-orange">{t.role}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;