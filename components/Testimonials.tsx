import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "El CRM automatizado con IA de NeuroMarkAI nos permitió predecir abandonos de carrito con 94% de precisión. Implementamos estrategias proactivas que redujeron nuestra tasa de abandono en un 35% y aumentaron las ventas recurrentes en un 28%.",
    author: "Andrea Martinez",
    role: "Directora de Marketing",
    company: "eCommerce",
    initial: "A",
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    id: '2',
    quote: "Nuestra recepcionista virtual IA gestiona el 80% de las llamadas entrantes sin intervención humana. Los clientes no notan diferencia con un humano, pero nosotros ahorramos 40 horas semanales en atención telefónica.",
    author: "Javier Ruiz",
    role: "Gerente",
    company: "Clínica Dental",
    initial: "J",
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    id: '3',
    quote: "Los Social Ads predictivos revolucionaron nuestro ROI en publicidad. La IA optimiza nuestras campañas en tiempo real, logrando un coste por lead un 62% menor que con métodos tradicionales. NeuroMarkAI entendió perfectamente nuestro mercado.",
    author: "Marta González",
    role: "Directora Digital",
    company: "Agencia Inmobiliaria",
    initial: "M",
    gradient: "from-pink-500 to-rose-600"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="casos" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-900/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-5xl font-bold text-white mb-4 font-display"
          >
            Casos de Éxito con Inteligencia Artificial
          </motion.h2>
          <p className="text-gray-400">Resultados verificables de empresas españolas que transformaron su operativa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 relative flex flex-col"
            >
              <Quote className="w-10 h-10 text-white/20 mb-6" />
              <p className="text-gray-300 italic mb-8 flex-grow leading-relaxed text-sm">
                "{item.quote}"
              </p>
              
              <div className="flex items-center mt-auto">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg`}>
                  {item.initial}
                </div>
                <div>
                  <h4 className="text-white font-bold">{item.author}</h4>
                  <p className="text-xs text-brand-400">{item.role}, {item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;