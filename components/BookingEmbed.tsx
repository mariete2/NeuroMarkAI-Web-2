import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    Cal?: any;
  }
}

const BookingEmbed: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            let script = d.createElement('script');
            script.src = A;
            d.head.appendChild(script);
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const type = ar[1];
            const attr = ar[2];
            const ns = typeof attr === 'object' ? attr : ar[3];
            if (ns && ns.substr) {
              const currentNs = ns.substr(0, ns.lastIndexOf('/')) || 'ns';
              ns[currentNs] = ns[currentNs] || {};
              p(ns[currentNs], ar);
              p(cal, ar);
              return;
            }
          }
          p(cal, ar);
        };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    if (window.Cal) {
        window.Cal('init', { origin: 'https://cal.com' });
        window.Cal('ui', {
            styles: { branding: { brandColor: '#0ea5e9' } },
            hideEventTypeDetails: false,
            layout: 'month_view',
        });
    }
  }, []);

  return (
    <div className="w-full h-full min-h-[700px] flex items-center justify-center bg-dark-900/50 rounded-3xl overflow-hidden border border-brand-500/20 backdrop-blur-md shadow-2xl shadow-brand-900/20 relative group">
      {/* Decorative glow behind embed */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-accent-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-full h-full p-2 relative z-10"
      >
        <iframe 
            src="https://cal.com/neuromarkai/reunion?embed=true" 
            style={{ width: '100%', height: '100%', minHeight: '700px', border: 'none' }}
            title="Agendar Consulta con NeuroMarkAI"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default BookingEmbed;