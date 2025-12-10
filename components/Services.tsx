import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Headset, MessageCircle } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'CRM que Vende por Ti Mientras Duermes',
    description: 'Sistema centralizado que automatiza seguimiento de leads y cierra ventas sin esfuerzo manual. Gana 3 horas diarias y aumenta conversiones un 40% desde el primer mes.',
    features: [
      'Seguimiento automático 24/7',
      'Centralización de todos tus clientes',
      'Alertas inteligentes de oportunidades'
    ],
    icon: Settings,
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    id: '2',
    title: 'Tu Recepcionista IA que Nunca Duerme',
    description: 'Atiende llamadas, filtra prospectos cualificados y agenda reuniones automáticamente. Reduce 60% la carga de tu equipo y nunca pierdas otra oportunidad.',
    features: [
      'Atención en horario extendido',
      'Filtrado inteligente de prospectos',
      'Integración con tu calendario'
    ],
    icon: Headset,
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: '3',
    title: 'Vendedor Automático para Webs y WhatsApp',
    description: 'Interactúa con clientes potenciales, resuelve objeciones y cualifica leads automáticamente. Genera ventas sin intervención humana constante.',
    features: [
      'Atención inmediata 24/7',
      'Cualificación automática de leads',
      'Integración multi-plataforma'
    ],
    icon: MessageCircle,
    gradient: 'from-cyan-600 to-teal-600'
  }
];

const Services: React.FC = () => {
  return (
    <section id="soluciones" className="py-24 bg-dark-900 relative">
      <div className="absolute inset-0 bg-dark-950/50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 font-display"
          >
            Automatización Inteligente que <br />
            <span className="text-brand-400">Triplica Tu Productividad</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg"
          >
            Transformamos tu operativa diaria en una ventaja competitiva. Implementamos sistemas de IA que automatizan CRM, atención al cliente 24/7 y gestión documental.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative flex flex-col h-full bg-dark-950 border border-white/10 rounded-2xl p-8 transition-all duration-300 shadow-xl hover:shadow-brand-500/20 hover:border-brand-500/40"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 min-h-[56px] flex items-center">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <div className="space-y-3 mt-auto pt-6 border-t border-white/5">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mr-2 group-hover:shadow-[0_0_8px_#38bdf8]"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;