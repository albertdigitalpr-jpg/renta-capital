import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Mail, Clock, Phone } from 'lucide-react';
import { useSiteImage } from '../hooks/useSiteImage';

const Footer: React.FC = () => {
  const defaultLogo = "https://scontent.fsju2-1.fna.fbcdn.net/v/t39.30808-6/568499906_1289776459614472_7203326321156787647_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=IE-zGgBlL-8Q7kNvwH1Ya9b&_nc_oc=AdkvMmGgF-oN1_bkEbY3M5_lqgb6qrF5cgPKTQfjKJXZuq6zxUvzU1Yx0wFlMT-dudzaED1QUdOxN87GStermVSS&_nc_zt=23&_nc_ht=scontent.fsju2-1.fna&_nc_gid=Kb0M9njIIc2z7MmqJrXULA&oh=00_AfnjLGPevkY3wVZOVSEKLssKwQKvm2y24kHCOqpMRzFEKA&oe=693601A9";
  
  const logoUrl = useSiteImage('site_logo', defaultLogo);

  return (
    <footer className="bg-industrial-black border-t-4 border-industrial-orange pt-20 pb-10 relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-industrial-orange text-industrial-black px-4 py-1 font-bold uppercase text-xs tracking-widest rounded-sm">
        Capital Rental
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src={logoUrl} 
                alt="Capital Rental Logo" 
                className="h-10 w-10 rounded-full object-cover border border-industrial-orange shadow-lg"
              />
              <span className="text-white font-display font-bold text-2xl tracking-tighter">
                CAPITAL<span className="text-industrial-orange">RENTAL</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-gray-700 pl-4">
              Líderes en soluciones para la construcción. Comprometidos con la calidad, seguridad y eficiencia de tu obra en Arecibo y todo Puerto Rico.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-sm text-gray-400 hover:text-white hover:bg-industrial-orange transition-all"><Facebook size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-sm text-gray-400 hover:text-white hover:bg-industrial-orange transition-all"><Instagram size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-sm text-gray-400 hover:text-white hover:bg-industrial-orange transition-all"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-bold uppercase mb-6 tracking-wider border-b border-gray-800 pb-2 inline-block">Navegación</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-industrial-orange text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-industrial-orange"></span>Catálogo de Renta</a></li>
              <li><a href="#" className="text-gray-400 hover:text-industrial-orange text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-industrial-orange"></span>Venta de Herramienta</a></li>
              <li><a href="#" className="text-gray-400 hover:text-industrial-orange text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-industrial-orange"></span>Servicio Técnico</a></li>
              <li><a href="#" className="text-gray-400 hover:text-industrial-orange text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-industrial-orange"></span>Solicitar Crédito</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display font-bold uppercase mb-6 tracking-wider border-b border-gray-800 pb-2 inline-block">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm group">
                <div className="bg-gray-800 p-1.5 rounded-sm group-hover:bg-industrial-orange transition-colors">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span>Carr. 662 km 2.2 Bo. Santana, Arecibo, Puerto Rico, 00612</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm group">
                <div className="bg-gray-800 p-1.5 rounded-sm group-hover:bg-industrial-orange transition-colors">
                  <PhoneCallIcon className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white">(787) 881-3267</span>
                  <span className="text-xs">Celular / Renta</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm group">
                <div className="bg-gray-800 p-1.5 rounded-sm group-hover:bg-industrial-orange transition-colors">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="break-all">capitalrentalarecibo@gmail.com</span>
              </li>
            </ul>
          </div>

           {/* Hours */}
           <div>
            <h3 className="text-white font-display font-bold uppercase mb-6 tracking-wider border-b border-gray-800 pb-2 inline-block">Horario</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock className="w-5 h-5 text-industrial-orange flex-shrink-0" />
                <div>
                  <span className="block text-white font-bold uppercase text-xs tracking-wider">Lunes - Viernes</span>
                  <span className="font-display text-lg">7:00 AM - 5:00 PM</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <div>
                  <span className="block text-white font-bold uppercase text-xs tracking-wider">Sábados</span>
                  <span className="font-display text-lg">8:00 AM - 12:00 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p className="uppercase tracking-widest">&copy; 2024 Capital Rental. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Mapa del Sitio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper icon component
const PhoneCallIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export default Footer;