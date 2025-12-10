import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "¿Cuánto tiempo toma implementar una solución de IA en mi empresa?",
    answer: "Dependiendo de la complejidad, la implementación típica varía entre 2 a 4 semanas. Nuestros sistemas pre-entrenados como el Recepcionista IA pueden estar operativos en menos de 7 días."
  },
  {
    question: "¿Necesito tener conocimientos técnicos para usar sus soluciones de IA?",
    answer: "Absolutamente no. Diseñamos nuestras soluciones para que sean 'plug-and-play'. Nosotros nos encargamos de toda la configuración técnica y te entregamos un panel de control intuitivo."
  },
  {
    question: "¿Qué tipo de ROI puedo esperar con sus soluciones de IA?",
    answer: "Nuestros clientes promedian un retorno de 3x en los primeros 90 días. Esto proviene tanto del ahorro en costes operativos (personal, tiempo) como del incremento en ventas por mejor cualificación de leads."
  },
  {
    question: "¿Ofrecen soporte y mantenimiento después de la implementación?",
    answer: "Sí, ofrecemos planes de acompañamiento continuo para asegurar que los modelos de IA se mantengan actualizados y optimizados a medida que tu negocio escala."
  },
  {
    question: "¿Cómo se aseguran de que la IA se adapte a las necesidades específicas de mi negocio?",
    answer: "Realizamos una fase de auditoría inicial donde entrenamos a los modelos con tus datos históricos, tu tono de voz de marca y tus reglas de negocio específicas."
  },
  {
    question: "¿Qué pasa si mi equipo no se adapta rápidamente a la nueva tecnología?",
    answer: "Incluimos sesiones de onboarding y formación. Además, nuestras herramientas se integran donde tu equipo ya trabaja (WhatsApp, Email, CRM), minimizando la fricción."
  },
  {
    question: "¿Puedo empezar con un servicio básico y escalar después?",
    answer: "Totalmente. Muchos clientes comienzan con el Recepcionista IA y luego expanden al CRM automatizado y campañas predictivas."
  },
  {
    question: "¿Qué garantía ofrecen de que la IA funcionará para mi tipo de negocio?",
    answer: "Ofrecemos una garantía de satisfacción basada en KPIs definidos antes de iniciar el proyecto. Si no alcanzamos los hitos técnicos acordados, revisamos la implementación sin coste adicional."
  },
  {
    question: "¿Cómo manejan la seguridad de los datos de mi empresa?",
    answer: "Cumplimos estrictamente con el RGPD. Tus datos se procesan en servidores seguros y no se utilizan para entrenar modelos públicos externos sin tu consentimiento."
  },
  {
    question: "¿Qué diferencia a NeuroMarkAI de otras agencias de IA?",
    answer: "No solo instalamos software; aplicamos neuromarketing a la IA. Nuestros bots no suenan robóticos, están diseñados para conectar emocionalmente y persuadir."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-dark-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-brand-400">
            Las 10 Preguntas Clave que Debes Hacer
          </h2>
          <p className="text-gray-400">
            Respuestas honestas basadas en casos reales.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-dark-950 border border-white/5 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-white pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-brand-400 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <a href="#contacto" className="inline-flex items-center justify-center px-8 py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-full transition-all">
                Habla Directamente con Nuestros Expertos
            </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;