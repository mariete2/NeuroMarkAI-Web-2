import React from 'react';
import BookingEmbed from '../components/BookingEmbed';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const BookingPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 bg-dark-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hablemos de tu <br />
              <span className="text-brand-400">Siguiente Nivel</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Agenda una llamada de descubrimiento de 30 minutos. Sin compromisos de venta agresiva, solo valor puro para entender si podemos ayudarte a escalar.
            </p>
            
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
              <h3 className="text-white font-semibold mb-4">¿Qué obtendrás en esta llamada?</h3>
              <ul className="space-y-3">
                {[
                  "Diagnóstico rápido de tu situación actual",
                  "Identificación de fugas de conversión",
                  "Roadmap preliminar de optimización",
                  "Claridad sobre si el Neuromarketing es para ti"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-brand-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Side: Cal.com Embed */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="lg:col-span-7"
          >
            <BookingEmbed />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default BookingPage;