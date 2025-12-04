import React, { useState } from 'react';
import { X, Bot, Loader2, Hammer, DollarSign } from 'lucide-react';
import { getToolRecommendations } from '../services/geminiService';
import { ToolRecommendation } from '../types';

interface AIQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIQuoteModal: React.FC<AIQuoteModalProps> = ({ isOpen, onClose }) => {
  const [projectDescription, setProjectDescription] = useState('');
  const [recommendations, setRecommendations] = useState<ToolRecommendation[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectDescription.trim()) return;

    setLoading(true);
    setRecommendations([]);
    setHasSearched(false);
    
    const results = await getToolRecommendations(projectDescription);
    
    setRecommendations(results);
    setHasSearched(true);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-industrial-charcoal border border-industrial-gray w-full max-w-2xl rounded-sm shadow-2xl relative flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="bg-industrial-orange/20 p-2 rounded-sm">
              <Bot className="text-industrial-orange w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-white uppercase">Asistente de Cotización IA</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <p className="text-gray-300 mb-6">
            Describe tu proyecto (ej. "Necesito demoler un piso de concreto de 20m2 y retirar el escombro") y nuestra IA te recomendará la maquinaria ideal.
          </p>

          <form onSubmit={handleSubmit} className="mb-8">
            <div className="relative">
              <textarea
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder="Describe tu proyecto aquí..."
                className="w-full bg-industrial-black border border-gray-700 text-white p-4 rounded-sm focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange outline-none min-h-[120px] resize-none"
              />
              <button
                type="submit"
                disabled={loading || !projectDescription.trim()}
                className="absolute bottom-4 right-4 bg-industrial-orange text-white px-6 py-2 rounded-sm font-bold uppercase text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-industrial-orangeDark transition-colors flex items-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <Bot className="w-4 h-4" />}
                {loading ? 'Analizando...' : 'Analizar Proyecto'}
              </button>
            </div>
          </form>

          {/* Results */}
          {hasSearched && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h4 className="text-white font-bold uppercase border-b border-gray-700 pb-2 mb-4">Herramientas Recomendadas</h4>
              
              {recommendations.length > 0 ? (
                recommendations.map((item, index) => (
                  <div key={index} className="bg-industrial-black border border-gray-800 p-4 rounded-sm flex flex-col sm:flex-row justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Hammer className="text-industrial-orange w-4 h-4" />
                        <h5 className="text-white font-bold">{item.toolName}</h5>
                      </div>
                      <p className="text-gray-400 text-sm">{item.reason}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-industrial-gray/50 px-4 py-2 rounded-sm h-fit whitespace-nowrap">
                        <DollarSign className="text-green-500 w-4 h-4" />
                        <span className="text-white font-mono font-bold">{item.estimatedDailyRate}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-8">No pudimos generar recomendaciones específicas. Por favor intenta con más detalles.</p>
              )}
              
              {recommendations.length > 0 && (
                <div className="mt-8 text-center">
                  <button className="text-industrial-orange font-bold uppercase hover:text-white transition-colors text-sm">
                    Solicitar cotización formal de estos equipos &rarr;
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIQuoteModal;