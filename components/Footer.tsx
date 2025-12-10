import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/neuromarkai/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:contacto@neuromarkai.com', label: 'Email' },
    { icon: Phone, href: 'https://wa.me/34678633949', label: 'WhatsApp' }
  ];

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Background glow for footer */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-brand-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 group w-fit">
               <BrandLogo className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              Fusionamos la neurociencia con la inteligencia artificial para decodificar el comportamiento del consumidor y escalar tu negocio al siguiente nivel.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-600 hover:text-white hover:scale-110 transition-all duration-300 border border-white/5 hover:border-brand-400"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {[
                  { name: 'Inicio', path: '/' },
                  { name: 'Servicios', path: '/#soluciones' },
                  { name: 'Casos de Éxito', path: '/#casos' },
                  { name: 'Blog', path: '/blog' },
                  { name: 'Contacto', path: '/#contacto' }
              ].map((item) => (
                <li key={item.name}>
                    {item.path.startsWith('/#') ? (
                        <a href={item.path} className="text-gray-400 hover:text-brand-600 transition-colors hover:pl-1 block">
                            {item.name}
                        </a>
                    ) : (
                        <Link to={item.path} className="text-gray-400 hover:text-brand-600 transition-colors hover:pl-1 block">
                            {item.name}
                        </Link>
                    )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li key="aviso">
                <Link to="/aviso-legal" className="text-gray-400 hover:text-brand-600 transition-colors hover:pl-1 block">
                  Aviso Legal
                </Link>
              </li>
              <li key="privacidad">
                <Link to="/politica-privacidad" className="text-gray-400 hover:text-brand-600 transition-colors hover:pl-1 block">
                  Política de Privacidad
                </Link>
              </li>
              <li key="cookies">
                <Link to="/politica-cookies" className="text-gray-400 hover:text-brand-600 transition-colors hover:pl-1 block">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Mario Llamas Guisado (NeuroMarkAI). Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <p>Sistemas Operativos 24/7</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;