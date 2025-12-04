import React from 'react';

interface ChainDecorationProps {
  side: 'left' | 'right';
  className?: string;
}

const ChainDecoration: React.FC<ChainDecorationProps> = ({ side, className = '' }) => {
  // Pattern of colors for the chain links
  const colors = [
    'bg-industrial-orange',
    'bg-industrial-gray',
    'bg-industrial-black border border-industrial-gray',
    'bg-white'
  ];

  // Generate a long list of links to cover height
  const links = Array.from({ length: 20 });

  return (
    <div 
      className={`hidden lg:flex flex-col items-center gap-1 absolute top-0 w-12 xl:w-16 h-full z-40 py-4 ${
        side === 'left' ? 'left-0 border-r border-white/5' : 'right-0 border-l border-white/5'
      } ${className}`}
      style={{
        background: 'linear-gradient(to bottom, #1a1a1a, #0f0f0f)',
      }}
    >
      {/* Top cap */}
      <div className="w-8 h-8 rounded-sm bg-industrial-orange mb-2 shadow-[0_0_15px_rgba(255,94,0,0.5)]"></div>

      {links.map((_, i) => {
        const colorClass = colors[i % colors.length];
        return (
          <React.Fragment key={i}>
            {/* Chain Link */}
            <div className={`w-5 xl:w-6 h-10 xl:h-12 rounded-sm ${colorClass} shadow-lg relative flex items-center justify-center transform hover:scale-105 transition-transform duration-300`}>
              {/* Inner hole for chain look */}
              <div className="w-1.5 xl:w-2 h-5 xl:h-6 bg-industrial-charcoal/80 rounded-full shadow-inner"></div>
            </div>
            
            {/* Connector */}
            <div className="w-1.5 xl:w-2 h-3 bg-gray-600 my-[-4px] z-10 rounded-full"></div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ChainDecoration;