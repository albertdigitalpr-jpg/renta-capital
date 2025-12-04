import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useSiteImage } from '../hooks/useSiteImage';

const AboutUs: React.FC = () => {
  // Uses the hook to fetch 'about_us_main' from DB
  const aboutImage = useSiteImage(
    'about_us_main', 
    "https://picsum.photos/800/600?grayscale"
  );

  return (
    <section id="about" className="py-24 bg-industrial-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-industrial-orange z-10"></div>
            <div className="relative z-0">
               <img 
                src={aboutImage}
                alt="Our Warehouse" 
                className="w-full rounded-sm shadow-2xl"
              />
              <div className="absolute inset-0 bg-industrial-orange/10 mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-industrial-orange z-10"></div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6 uppercase">
              Más de 20 años <br/>
              <span className="text-gray-500">construyendo confianza</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              En Capital Rental, entendemos que cada minuto en la obra cuenta. Por eso, nos dedicamos a ofrecer no solo herramientas, sino soluciones integrales que garantizan la continuidad operativa de tus proyectos.
            </p>
            
            <div className="space-y-4">
              {[
                'Mantenimiento preventivo en todos nuestros equipos',
                'Entrega express en menos de 4 horas en zona metropolitana',
                'Asesoría técnica por ingenieros civiles certificados',
                'Stock garantizado para proyectos de gran escala'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-industrial-orange w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 bg-transparent border-2 border-white text-white hover:bg-white hover:text-industrial-black px-8 py-3 rounded-sm font-bold uppercase tracking-wider transition-all duration-300">
              Conoce Nuestra Historia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;