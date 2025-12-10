import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-dark-950 relative overflow-hidden">
        {/* Decorative blobs */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-600/20 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            ¿Quieres Saber Más Sobre Nuestras Soluciones de IA?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Completa el formulario y contactaremos contigo. O si prefieres, escríbenos directamente por WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-dark-900 rounded-3xl p-8 lg:p-12 border border-white/5 shadow-2xl">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-bold text-white">Información de Contacto</h3>
            <p className="text-gray-400">
              ¿Interesado en descubrir cómo la inteligencia artificial puede revolucionar tu negocio? Estamos a un mensaje de distancia.
            </p>
            
            <div className="space-y-6 pt-4">
              <a href="mailto:contacto@neuromarkai.com" className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-full bg-brand-900/50 flex items-center justify-center text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                </div>
                <span className="text-gray-300 group-hover:text-brand-400 transition-colors">contacto@neuromarkai.com</span>
              </a>
              <a href="https://wa.me/34678633949" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-full bg-brand-900/50 flex items-center justify-center text-brand-400 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                </div>
                <span className="text-gray-300 group-hover:text-green-400 transition-colors">+34 678 63 39 49</span>
              </a>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-900/50 flex items-center justify-center text-brand-400">
                    <MapPin className="w-5 h-5" />
                </div>
                <span className="text-gray-300">Vila-Real, Castellón, España</span>
              </div>
            </div>

            <div className="pt-8">
                 <Link to="/booking" className="w-full inline-flex items-center justify-center px-6 py-4 bg-accent-600 hover:bg-accent-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-accent-600/20 group hover:scale-[1.02]">
                    Agendar Llamada Directamente
                 </Link>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Nombre completo *</label>
                <input 
                  type="text" 
                  required
                  placeholder="Tu nombre"
                  className="w-full bg-dark-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors placeholder-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Correo electrónico *</label>
                <input 
                  type="email" 
                  required
                  placeholder="tu@email.com"
                  className="w-full bg-dark-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors placeholder-gray-600"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Número de teléfono *</label>
                    <input 
                    type="tel" 
                    required
                    placeholder="+34 678 63 39 49"
                    className="w-full bg-dark-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors placeholder-gray-600"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Empresa o negocio</label>
                    <input 
                    type="text" 
                    placeholder="Nombre de tu empresa"
                    className="w-full bg-dark-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors placeholder-gray-600"
                    />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Cuéntanos sobre tu negocio *</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Describe brevemente tu negocio y qué desafío quieres resolver con IA..."
                  className="w-full bg-dark-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors resize-none placeholder-gray-600"
                ></textarea>
              </div>

              <div className="flex items-start">
                  <input type="checkbox" id="privacy" required className="mt-1 w-4 h-4 rounded bg-dark-950 border-gray-700 text-brand-500 focus:ring-brand-500 accent-brand-500" />
                  <label htmlFor="privacy" className="ml-3 text-xs text-gray-500">
                      He leído y acepto la <Link to="/politica-privacidad" className="text-brand-400 underline hover:text-brand-300">Política de Privacidad</Link> y autorizo el tratamiento de mis datos personales para que Mario Llamas Guisado me contacte.
                  </label>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : isSubmitted ? (
                  <>
                    <span className="text-white">¡Mensaje Enviado!</span>
                  </>
                ) : (
                  <>
                    Solicitar Información
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;