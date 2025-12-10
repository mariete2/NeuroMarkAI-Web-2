import React, { useState } from 'react';
import BlogList from '../components/BlogList';
import { motion } from 'framer-motion';
import { PlayCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const categories = ['Todos', 'Neuromarketing', 'Tecnología', 'Estrategia', 'Automatización', 'Casos de Éxito'];

  return (
    <div className="pt-24 pb-24 bg-dark-950 min-h-screen relative">
      {/* Background noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-brand-400 font-medium tracking-wider uppercase mb-2 block text-sm">Blog & Recursos</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Inteligencia Artificial <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-500">Aplicada a Ventas</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estrategias tácticas, análisis de mercado y guías paso a paso para dominar tu nicho con tecnología.
          </p>
        </motion.div>

        {/* VSL Banner - Solo visible aquí */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16 rounded-2xl p-1 bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500 animate-gradient-x"
        >
          <div className="bg-dark-900 rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
             
             <div className="flex-1 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold mb-4 border border-red-500/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    Contenido Exclusivo
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Entrenamiento Gratuito: El Sistema de 3 Pasos</h3>
                <p className="text-gray-300">Descubre cómo implementamos un "Vendedor IA" que factura 24/7 sin que tengas que tocar una sola línea de código.</p>
             </div>

             <div className="relative z-10">
                <Link 
                  to="/entrenamiento-exclusivo" 
                  className="group flex items-center gap-3 bg-white text-dark-950 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                   <PlayCircle className="w-6 h-6 group-hover:text-brand-600 transition-colors" />
                   Ver Clase Ahora
                </Link>
             </div>
          </div>
        </motion.div>
        
        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, i) => (
            <button 
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                activeCategory === cat 
                ? 'bg-brand-600 border-brand-600 text-white shadow-lg shadow-brand-500/20' 
                : 'bg-dark-900/50 border-gray-800 text-gray-400 hover:border-brand-500/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <BlogList />
        
        <div className="mt-20 flex justify-center">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
                <Zap className="w-4 h-4" />
                Cargar más artículos
            </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;