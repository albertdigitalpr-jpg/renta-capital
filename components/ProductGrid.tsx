import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { Tag, ArrowRight, Plus, Minus, Loader2, Database, Camera, Radio, AlertTriangle, RefreshCw, Bell } from 'lucide-react';
import { supabase } from '../lib/supabase';
import ProductModal from './ProductModal';

// Static data as fallback only - Updated with Gallery examples
const FALLBACK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Excavadora CAT 320',
    category: 'Maquinaria Pesada',
    image: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1580901368919-7738ef30f871?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1629731459427-464b54e3d09c?q=80&w=800&auto=format&fit=crop'
    ],
    price: '$8,500 / día',
    isRental: true,
  },
  {
    id: 'compactadora-vibratoria',
    name: 'Rodillo Compactador Vibratorio',
    category: 'Compactación',
    image: 'https://images.unsplash.com/photo-1627918398863-71887e089225?q=80&w=800&auto=format&fit=crop', 
    gallery: [
      'https://images.unsplash.com/photo-1590059598818-7b989481977f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596684825968-3e4b77543886?q=80&w=800&auto=format&fit=crop'
    ],
    price: '$450 / día',
    isRental: true,
  },
  {
    id: '3',
    name: 'Andamio Multidireccional',
    category: 'Altura y Seguridad',
    image: 'https://images.unsplash.com/photo-1588619460838-544485eb4515?q=80&w=800&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1536848782382-bc1086055bc7?q=80&w=800&auto=format&fit=crop'
    ],
    price: '$250 / día',
    isRental: true,
  },
  {
    id: '4',
    name: 'Compresor de Aire 50L',
    category: 'Neumática',
    image: 'https://images.unsplash.com/photo-1622345579974-f25492b457b0?q=80&w=800&auto=format&fit=crop',
    price: '$850 / día',
    isRental: true,
  },
  {
    id: '6',
    name: 'Cortadora de Concreto',
    category: 'Corte y Desbaste',
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=800&auto=format&fit=crop',
    price: '$1,200 / día',
    isRental: true,
  },
  {
    id: '7',
    name: 'Mezcladora de Concreto',
    category: 'Concreto',
    image: 'https://images.unsplash.com/photo-1626432791557-695368a4490f?q=80&w=800&auto=format&fit=crop',
    price: '$180 / día',
    isRental: true,
  },
  {
    id: '2',
    name: 'Taladro Percutor Industrial',
    category: 'Herramientas Eléctricas',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop',
    price: '$4,200',
    isRental: false,
  },
  {
    id: '5',
    name: 'Generador 5000W',
    category: 'Energía',
    image: 'https://images.unsplash.com/photo-1594412990666-86c0c1692df8?q=80&w=800&auto=format&fit=crop',
    price: '$12,500',
    isRental: false,
  },
  {
    id: '8',
    name: 'Demoledor Eléctrico 30kg',
    category: 'Demolición',
    image: 'https://images.unsplash.com/photo-1582299719323-5e7552542cb5?q=80&w=800&auto=format&fit=crop',
    price: '$120 / día',
    isRental: true,
  },
  {
    id: '9',
    name: 'Torre de Iluminación',
    category: 'Iluminación',
    image: 'https://images.unsplash.com/photo-1565610260408-0112423c3b06?q=80&w=800&auto=format&fit=crop',
    price: '$350 / día',
    isRental: true,
  },
  {
    id: '10',
    name: 'Mini Cargador (Bobcat)',
    category: 'Maquinaria Pesada',
    image: 'https://images.unsplash.com/photo-1615560594348-154df67f3793?q=80&w=800&auto=format&fit=crop',
    price: '$4,500 / día',
    isRental: true,
  },
  {
    id: '11',
    name: 'Sierra Circular Industrial',
    category: 'Corte',
    image: 'https://images.unsplash.com/photo-1508872598822-263cb530a591?q=80&w=800&auto=format&fit=crop',
    price: '$280',
    isRental: false,
  },
];

const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dbConnected, setDbConnected] = useState(false);
  const [isRealtime, setIsRealtime] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const [activeTable, setActiveTable] = useState<string>('rentas');
  
  // New state for modal
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Function to fetch data, extracted so it can be called by Realtime events
  const fetchProducts = async (isUpdate = false) => {
    if (!supabase) {
      console.warn('Supabase client not initialized. Using fallback data.');
      setProducts(FALLBACK_PRODUCTS);
      setLoading(false);
      return;
    }

    try {
      // Intentamos primero con la tabla 'rentas'
      console.log("Intentando conectar a tabla 'rentas'...");
      let { data, error } = await supabase
        .from('rentas')
        .select('*')
        .order('created_at', { ascending: false });

      // Si falla 'rentas' (ej. código 42P01 es tabla no encontrada), intentamos 'products'
      if (error) {
        console.warn(`Error en tabla 'rentas' (${error.code}), intentando 'products'...`);
        const retry = await supabase
          .from('products')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (!retry.error) {
          data = retry.data;
          error = null; // Limpiamos el error porque el reintento funcionó
          setActiveTable('products');
        } else {
          // Si ambos fallan, lanzamos el error original o el nuevo
          throw retry.error;
        }
      } else {
        setActiveTable('rentas');
      }

      if (data && data.length > 0) {
        setProducts(data as Product[]);
        setDbConnected(true);
        setErrorMsg(null);
        
        if (isUpdate) {
          setNotification(`Inventario actualizado en tiempo real`);
          setTimeout(() => setNotification(null), 4000);
        }
      } else {
        // Conexión exitosa pero tabla vacía
        if (!error) {
           setProducts(FALLBACK_PRODUCTS); // Opcional: mostrar vacío o fallback
           setDbConnected(true);
        }
      }
    } catch (err: any) {
      console.error('Supabase fetch failed:', err.message);
      setErrorMsg(err.message);
      setProducts(FALLBACK_PRODUCTS);
      setDbConnected(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // 1. Initial Fetch
    fetchProducts();

    if (!supabase) return;

    // 2. Setup Realtime Subscription
    // Usamos schema 'public' sin filtrar por tabla específica para atrapar cambios en 'rentas' O 'products'
    console.log("Setting up Universal Realtime...");
    
    const channel = supabase
      .channel('universal_updates')
      .on(
        'postgres_changes',
        {
          event: '*', // Listen for INSERT, UPDATE, DELETE
          schema: 'public', 
          // Al no especificar 'table', escuchamos todo el esquema publico. 
          // Esto soluciona el problema si la tabla cambia de nombre.
        },
        (payload) => {
          console.log('Realtime change received:', payload);
          // Si el cambio es en la tabla que estamos usando (o si queremos ser agresivos, siempre actualizamos)
          fetchProducts(true);
        }
      )
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          console.log('Subscribed to realtime updates');
          setIsRealtime(true);
        }
      });

    // 3. Cleanup
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const displayedProducts = showAll ? products : products.slice(0, 6);

  const toggleInventory = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="rentas" className="py-24 bg-industrial-black border-t border-industrial-charcoal transition-all duration-500 min-h-[600px] relative">
      
      {/* Realtime Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-industrial-orange text-white px-6 py-4 rounded-sm shadow-2xl animate-in slide-in-from-right duration-300 flex items-center gap-3 border-l-4 border-white">
          <Bell className="w-5 h-5 animate-bounce" />
          <div className="flex flex-col">
            <span className="font-black uppercase text-xs tracking-wider">Sistema</span>
            <span className="font-bold">{notification}</span>
          </div>
          <button onClick={() => setNotification(null)} className="ml-2 hover:bg-white/20 p-1 rounded-full"><Minus size={14}/></button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 pb-8 border-b border-gray-800">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Tag className="text-industrial-orange w-4 h-4" />
              <span className="text-industrial-orange font-bold tracking-widest uppercase text-sm">Catálogo Destacado</span>
              
              {loading ? (
                <span className="flex items-center gap-1.5 ml-3 text-gray-500 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  <Loader2 size={10} className="animate-spin" /> Conectando...
                </span>
              ) : dbConnected ? (
                <div className="flex gap-2">
                   <span className="flex items-center gap-1.5 ml-3 bg-green-500/10 text-green-500 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border border-green-500/20">
                    <Database size={10} /> Online: {activeTable}
                  </span>
                  {isRealtime && (
                    <span className="flex items-center gap-1.5 bg-industrial-orange/10 text-industrial-orange text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border border-industrial-orange/20 animate-pulse">
                      <Radio size={10} /> Live
                    </span>
                  )}
                </div>
              ) : (
                <span className="flex items-center gap-1.5 ml-3 bg-red-500/10 text-red-500 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border border-red-500/20" title={errorMsg || "Modo offline"}>
                   <AlertTriangle size={10} /> {errorMsg?.includes('URL') || errorMsg?.includes('Key') ? 'Check API Key' : 'Modo Local'}
                </span>
              )}
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">
              Equipos de <span className="text-industrial-gray text-outline">Alto Poder</span>
            </h2>
          </div>
          
          {!loading && products.length > 6 && (
            <button 
              onClick={toggleInventory}
              className="mt-6 md:mt-0 bg-transparent border-2 border-gray-700 text-white hover:border-industrial-orange hover:bg-industrial-orange hover:text-black px-8 py-3 rounded-sm text-sm font-bold uppercase transition-all duration-300 flex items-center gap-2"
            >
              {showAll ? (
                <>
                  <Minus size={16} /> Ver Menos
                </>
              ) : (
                <>
                  <Plus size={16} /> Ver Inventario Completo
                </>
              )}
            </button>
          )}
        </div>

        {loading ? (
           <div className="flex flex-col justify-center items-center h-64 animate-pulse">
             <Loader2 className="w-10 h-10 text-industrial-orange animate-spin mb-4" />
             <span className="text-gray-400 font-bold uppercase tracking-wider text-sm">Cargando inventario desde Supabase...</span>
           </div>
        ) : (
          <>
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out ${showAll ? 'opacity-100' : ''}`}>
              {displayedProducts.map((product) => (
                <div 
                  key={product.id} 
                  onClick={() => setSelectedProduct(product)}
                  className="group bg-industrial-charcoal rounded-sm overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-300 border border-gray-800 hover:border-industrial-orange relative animate-in fade-in zoom-in-95 duration-500 cursor-pointer"
                >
                  
                  <div className="relative h-72 overflow-hidden bg-gray-900">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-charcoal to-transparent opacity-80"></div>
                    
                    <div className="absolute top-4 right-4">
                      <span className={`px-4 py-1 text-xs font-black uppercase tracking-wider text-white shadow-lg ${product.isRental ? 'bg-industrial-orange' : 'bg-industrial-gray border border-white/20'}`}>
                        {product.isRental ? 'Renta' : 'Venta'}
                      </span>
                    </div>

                    {/* Gallery Indicator */}
                    {product.gallery && product.gallery.length > 0 && (
                      <div className="absolute bottom-4 left-4 bg-black/60 px-2 py-1 rounded-sm flex items-center gap-1 backdrop-blur-sm group-hover:bg-industrial-orange group-hover:text-black transition-colors">
                        <Camera size={12} className="text-white group-hover:text-black" />
                        <span className="text-[10px] font-bold text-white group-hover:text-black">+{product.gallery.length}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 relative">
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-industrial-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">{product.category}</p>
                    <h3 className="text-xl font-bold text-white mb-4 font-display uppercase tracking-wide group-hover:text-industrial-orange transition-colors">{product.name}</h3>
                    
                    <div className="flex items-center justify-between border-t border-gray-700 pt-4 mt-4">
                      <span className="text-white font-mono font-bold text-lg">{product.price}</span>
                      <button className="text-gray-400 hover:text-white text-xs font-bold uppercase transition-colors flex items-center gap-1 group-hover:gap-2">
                        Ver Detalles <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {showAll && (
              <div className="mt-12 text-center animate-in fade-in slide-in-from-bottom-4">
                <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">Mostrando inventario completo</p>
                <button 
                  onClick={() => {
                    setShowAll(false);
                    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-industrial-orange hover:text-white font-bold uppercase text-xs tracking-wider transition-colors"
                >
                  Colapsar Vista
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Product Details Modal */}
      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
};

export default ProductGrid;