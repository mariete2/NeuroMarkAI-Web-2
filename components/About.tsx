import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 bg-dark-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Más allá del Click: <br />
              <span className="text-brand-400">Entendiendo la Decisión</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              El 95% de las decisiones de compra ocurren en el subconsciente. Las agencias tradicionales se enfocan en lo lógico. En Neuromark AI, diseñamos para lo instintivo.
            </p>

            <div className="space-y-4">
              {[
                "Análisis Biométrico de Datos",
                "Psicología del Color y Formas",
                "Copywriting Hipnótico con PNL",
                "Automatización con Inteligencia Artificial"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-accent-500 flex-shrink-0" />
                  <span className="text-gray-200 text-lg">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-gradient-to-r from-brand-900/20 to-accent-900/20 rounded-xl border border-brand-500/20">
              <p className="text-brand-200 italic font-medium">
                "No vendemos productos, vendemos la sensación de tenerlos."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Abstract visual representation of brain/data */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-square lg:aspect-auto h-[500px]">
               <img 
                 src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop" 
                 alt="AI Network" 
                 className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent"></div>
               
               {/* Floating Cards */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute bottom-10 left-10 right-10 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl"
               >
                 <div className="flex items-center justify-between mb-2">
                   <span className="text-white font-semibold">Análisis de Emoción</span>
                   <span className="text-green-400 font-bold">+98% Precisión</span>
                 </div>
                 <div className="w-full bg-gray-700 rounded-full h-2">
                   <div className="bg-gradient-to-r from-brand-400 to-accent-500 h-2 rounded-full w-[98%]"></div>
                 </div>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;