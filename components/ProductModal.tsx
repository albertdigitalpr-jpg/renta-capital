import React, { useState } from 'react';
import { X, Phone, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [activeImage, setActiveImage] = useState<string>('');

  // Update active image when product changes
  React.useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  // Combine main image and gallery for the thumbnails list
  const allImages = [product.image, ...(product.gallery || [])];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-industrial-charcoal border border-gray-700 w-full max-w-5xl rounded-sm shadow-2xl relative flex flex-col md:flex-row overflow-hidden max-h-[90vh]">
        
        {/* Close Button Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 md:hidden bg-black/50 p-2 rounded-full text-white"
        >
          <X size={24} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-3/5 bg-black relative flex flex-col">
          <div className="h-64 md:h-[500px] w-full relative">
            <img 
              src={activeImage} 
              alt={product.name} 
              className="w-full h-full object-contain bg-black"
            />
          </div>
          
          {/* Thumbnails */}
          {allImages.length > 1 && (
            <div className="flex gap-2 p-4 overflow-x-auto bg-industrial-black border-t border-gray-800 custom-scrollbar">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`flex-shrink-0 w-20 h-20 border-2 rounded-sm overflow-hidden transition-all ${
                    activeImage === img ? 'border-industrial-orange opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="w-full md:w-2/5 p-8 flex flex-col bg-industrial-charcoal relative">
          <button 
            onClick={onClose} 
            className="hidden md:block absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <div className="mb-auto">
            <span className={`inline-block px-3 py-1 text-xs font-black uppercase tracking-wider text-white mb-4 ${product.isRental ? 'bg-industrial-orange' : 'bg-industrial-gray border border-white/20'}`}>
              {product.isRental ? 'Disponible para Renta' : 'Venta de Equipo'}
            </span>
            
            <h2 className="text-3xl font-display font-bold text-white uppercase leading-tight mb-2">
              {product.name}
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-6">
              {product.category}
            </p>

            <div className="border-t border-gray-700 py-6 mb-6">
              <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Precio Estimado</span>
              <span className="text-3xl font-mono font-bold text-white">{product.price}</span>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="text-industrial-orange w-5 h-5" />
                <span>Inspeccionado y certificado</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="text-industrial-orange w-5 h-5" />
                <span>{product.isRental ? 'Entrega inmediata en obra' : 'Garantía de fábrica incluida'}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="text-industrial-orange w-5 h-5" />
                <span>Soporte técnico especializado</span>
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <a 
              href={`tel:787881${product.isRental ? '3267' : '2023'}`}
              className="block w-full bg-white text-industrial-black py-4 rounded-sm font-black uppercase text-center hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Llamar para Reservar
            </a>
            <p className="text-center text-gray-500 text-xs uppercase tracking-wider mt-2">
              Llama al (787) 881-{product.isRental ? '3267' : '2023'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;