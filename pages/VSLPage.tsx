import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Lock, Calendar, Play, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const VSLPage: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [loading, setLoading] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call to save lead
    setTimeout(() => {
        setLoading(false);
        setIsUnlocked(true);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 bg-dark-950 min-h-screen relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-brand-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/20 border border-red-500/30 text-red-400 text-sm font-bold mb-6"
          >
            <Lock className="w-3 h-3" />
            Entrenamiento Privado - Acceso Restringido
          </motion.div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Cómo Instalamos un <span className="text-brand-400">Sistema de Ventas IA</span> que Genera 30+ Leads Cualificados en 7 Días
          </h1>
        </div>

        {/* Video Container Area */}
        <div className="relative aspect-video max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.15)] border border-white/10 bg-black">
            
            {/* The Gate Overlay */}
            <AnimatePresence>
                {!isUnlocked && (
                    <motion.div 
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-dark-950/80 backdrop-blur-md p-6"
                    >
                        <div className="max-w-md w-full bg-dark-900 border border-white/10 p-8 rounded-2xl shadow-2xl">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                                    <Lock className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Este entrenamiento es exclusivo</h3>
                                <p className="text-gray-400 text-sm">Introduce tus datos para desbloquear el acceso inmediato.</p>
                            </div>

                            <form onSubmit={handleUnlock} className="space-y-4">
                                <div>
                                    <label className="text-xs text-gray-500 font-bold uppercase ml-1">Tu Nombre</label>
                                    <input 
                                        type="text" 
                                        required
                                        placeholder="Ej. Mario Llamas"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full bg-dark-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 font-bold uppercase ml-1">WhatsApp (con prefijo)</label>
                                    <input 
                                        type="tel" 
                                        required
                                        placeholder="Ej. +34 600 000 000"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        className="w-full bg-dark-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:outline-none"
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                                >
                                    {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                                    Desbloquear Video Ahora
                                </button>
                            </form>
                            <p className="text-xs text-center text-gray-600 mt-4">
                                Tus datos están seguros. Política anti-spam 100%.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* The "Video" (Placeholder for YouTube/Vimeo) */}
            <div className={`w-full h-full flex items-center justify-center bg-dark-900 ${!isUnlocked ? 'filter blur-sm' : ''}`}>
                 {isUnlocked ? (
                    <div className="text-center">
                        <p className="text-green-400 text-xl font-bold mb-4">¡Acceso Concedido!</p>
                        <p className="text-gray-400">Aquí se cargaría el iframe del video (YouTube/Vimeo).</p>
                        <div className="mt-4 p-4 border border-dashed border-gray-700 rounded-lg bg-white/5">
                            <code>&lt;iframe src="..." /&gt;</code>
                        </div>
                    </div>
                 ) : (
                    <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000')" }}></div>
                 )}
            </div>
        </div>

        {/* CTA Section (Visible only if unlocked ideally, but kept visible for conversion usually) */}
        <div className="max-w-3xl mx-auto text-center opacity-100">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
                <Link 
                    to="/booking"
                    className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 text-white font-bold text-xl rounded-xl shadow-lg shadow-brand-500/30 hover:scale-105 transition-all duration-300 animate-pulse"
                >
                    <Calendar className="w-6 h-6" />
                    Agendar Consultoría de Implementación
                </Link>
            </motion.div>

            {/* Bullets */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {[
                    "El Script de Ventas Neurolingüístico exacto que usamos.",
                    "La Estructura de Campaña que reduce el CPL en un 40%.",
                    "Cómo configurar el 'Setter IA' en WhatsApp Business.",
                    "Automatización de seguimiento por Email que recupera el 20% de ventas perdidas."
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                        <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default VSLPage;