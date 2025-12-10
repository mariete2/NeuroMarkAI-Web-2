import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Cookie } from 'lucide-react';

interface LegalPageProps {
  type: 'legal' | 'privacy' | 'cookies';
}

const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const content = {
    legal: {
      title: 'Aviso Legal',
      icon: Shield,
      text: (
        <>
          <p className="mb-4">En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:</p>
          <h3 className="text-xl text-white mt-6 mb-3">1. Datos Identificativos</h3>
          <p className="mb-4">El responsable y titular del dominio web es <strong>Mario Llamas Guisado</strong> (en adelante "El Responsable"), con actividad profesional como autónomo y domicilio a estos efectos en Vila-Real, Castellón, España.</p>
          <p className="mb-4">
            Correo electrónico de contacto: <a href="mailto:contacto@neuromarkai.com" className="text-brand-400 hover:underline">contacto@neuromarkai.com</a><br/>
            Teléfono/WhatsApp: +34 678 63 39 49
          </p>
          
          <h3 className="text-xl text-white mt-6 mb-3">2. Usuarios</h3>
          <p className="mb-4">El acceso y/o uso de este portal de NeuroMarkAI atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.</p>
          
          <h3 className="text-xl text-white mt-6 mb-3">3. Uso del Portal</h3>
          <p className="mb-4">NeuroMarkAI proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a El Responsable o a sus licenciantes a los que el USUARIO pueda tener acceso.</p>
          
          <h3 className="text-xl text-white mt-6 mb-3">4. Propiedad Intelectual e Industrial</h3>
          <p className="mb-4">Mario Llamas Guisado por sí o como cesionario, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.).</p>
        </>
      )
    },
    privacy: {
      title: 'Política de Privacidad',
      icon: Lock,
      text: (
        <>
          <p className="mb-4">En NeuroMarkAI nos comprometemos a proteger tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos y compartimos tu información personal cuando visitas nuestro sitio web o utilizas nuestros servicios.</p>
          
          <h3 className="text-xl text-white mt-6 mb-3">1. Responsable del Tratamiento</h3>
          <p className="mb-4">
            Identidad: Mario Llamas Guisado<br/>
            Email: contacto@neuromarkai.com<br/>
            Teléfono: +34 678 63 39 49
          </p>
          
          <h3 className="text-xl text-white mt-6 mb-3">2. Finalidad del Tratamiento</h3>
          <p className="mb-4">Tratamos la información que nos facilitan las personas interesadas con el fin de gestionar el envío de la información que nos soliciten, gestionar las citas agendadas, así como facilitar a los interesados ofertas de productos y servicios de su interés.</p>
          
          <h3 className="text-xl text-white mt-6 mb-3">3. Legitimación</h3>
          <p className="mb-4">La base legal para el tratamiento de sus datos es el consentimiento del interesado al rellenar los formularios de contacto, suscripción o agendamiento de citas.</p>
          
          <h3 className="text-xl text-white mt-6 mb-3">4. Destinatarios</h3>
          <p className="mb-4">Los datos no se cederán a terceros salvo obligación legal. Utilizamos proveedores de servicios externos (como herramientas de análisis o hosting) que cumplen estrictamente con el RGPD.</p>
          
          <h3 className="text-xl text-white mt-6 mb-3">5. Derechos</h3>
          <p className="mb-4">Cualquier persona tiene derecho a obtener confirmación sobre si en NeuroMarkAI estamos tratando datos personales que les conciernan, o no. Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión.</p>
        </>
      )
    },
    cookies: {
      title: 'Política de Cookies',
      icon: Cookie,
      text: (
        <>
          <p className="mb-4">Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página.</p>
          
          <h3 className="text-xl text-white mt-6 mb-3">1. Cookies que utiliza este sitio web</h3>
          <p className="mb-4">Siguiendo las directrices de la Agencia Española de Protección de Datos procedemos a detallar el uso de cookies que hace esta web con el fin de informarle con la máxima exactitud posible.</p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Cookies propias:</strong> Son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario.</li>
            <li><strong>Cookies de terceros:</strong> Son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies (ej. Google Analytics, Cal.com para reservas).</li>
          </ul>

          <h3 className="text-xl text-white mt-6 mb-3">2. Desactivación o eliminación de cookies</h3>
          <p className="mb-4">En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté usando (Chrome, Firefox, Safari, etc.).</p>
        </>
      )
    }
  };

  const data = content[type];
  const Icon = data.icon;

  return (
    <div className="pt-32 pb-24 bg-dark-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-900 rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center space-x-4 mb-10 border-b border-white/10 pb-8">
            <div className="w-16 h-16 rounded-2xl bg-brand-900/50 flex items-center justify-center text-brand-400">
              <Icon className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white font-display">
              {data.title}
            </h1>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            {data.text}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-sm text-gray-500">
             Última actualización: {new Date().toLocaleDateString()}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalPage;