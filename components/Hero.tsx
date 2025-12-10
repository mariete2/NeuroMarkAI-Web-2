import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import MatrixBackground from './MatrixBackground';

// Componente para animar los números (Conteo progresivo con rebote)
const AnimatedCounter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Safe parsing
  const rawNumber = value.replace(/[^0-9.]/g, '');
  const numberPart = rawNumber ? parseFloat(rawNumber) : 0;
  const suffixPart = value.replace(/[0-9.]/g, '');
  
  const motionValue = useMotionValue(0);
  // Configuración del muelle para el efecto "bouncy" pero sutil
  const springValue = useSpring(motionValue, {
    damping: 12,    // Menor damping = más rebote
    stiffness: 60,  // Rigidez ajustada para velocidad natural
    mass: 1
  });
  
  const displayValue = useTransform(springValue, (latest) => {
    // Si el número original no tiene decimales, redondeamos. Si tiene, mostramos 1 decimal.
    const isFloat = numberPart % 1 !== 0;
    const current = isFloat ? latest.toFixed(1) : Math.round(latest);
    return `${current}${suffixPart}`;
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numberPart);
    }
  }, [isInView, numberPart, motionValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const Hero: React.FC = () => {
  const stats = [
    { label: 'Leads Calificados al Mes', value: '70+', sub: 'Impulsados por IA Predictiva' },
    { label: 'de Productividad', value: '21%', sub: 'Libera a Tu Equipo de Tareas Repetitivas' },
    { label: 'de Precisión Predictiva', value: '14%', sub: 'Anticípate a las Tendencias y Gana Ventaja' },
    { label: 'Tu Inversión en 90 Días', value: '3x', sub: 'Por Cada 1€, Recibes 3€ de Vuelta' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12 bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black z-0">
         {/* Matrix Effect */}
         <MatrixBackground />
         
         {/* Gradient Blobs in Brand Colors */}
        <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.3, 0.15],
                rotate: [0, 90, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-brand-600/30 via-accent-500/30 to-accent-600/30 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"
        ></motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-900/30 border border-brand-500/30 text-brand-300 text-sm font-semibold mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(37,99,235,0.3)]"
        >
          <Bot className="w-4 h-4 animate-pulse" />
          <span>Sistemas de IA que Automatizan Tus Ventas</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-tight font-display drop-shadow-2xl"
        >
          NeuroMarkAI <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-accent-500 to-accent-600 animate-gradient-x">
            Más Crecimiento, Menos Costos.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          Estrategias de IA que Suman. Genera <strong className="text-white font-semibold">3 Veces Más Leads Calificados</strong> en 90 Días. Implementamos sistemas que multiplican tu inversión.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/booking"
            className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-brand-600 via-accent-500 to-brand-600 bg-[length:200%_auto] animate-gradient-x px-10 font-bold text-lg text-white shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(244,63,94,0.7)] z-20 cursor-pointer border border-white/20"
          >
            <span className="mr-2 relative z-10 drop-shadow-sm">Obtener Mi Estrategia Gratuita</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10 drop-shadow-sm" />
            
            {/* Gloss Overlay Micro-interaction */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
        </motion.div>

        {/* Stats Grid - Enhanced Hover & Count Animation */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.8 }}
           className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                    delay: 0.8 + (i * 0.1), 
                    type: "spring", 
                    stiffness: 100 
                }}
                whileHover={{ 
                    y: -15, 
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderColor: '#2563EB', // Brand Blue
                    boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.2)'
                }}
                className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md cursor-default group"
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-2 font-display">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-brand-400 font-bold text-sm uppercase tracking-wider mb-2 group-hover:text-brand-300 transition-colors">{stat.label}</div>
                <p className="text-xs text-gray-400 leading-snug">{stat.sub}</p>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;