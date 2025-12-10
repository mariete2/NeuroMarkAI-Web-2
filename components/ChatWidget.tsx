import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot, Sparkles } from 'lucide-react';
import TypingIndicator from './TypingIndicator';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  type?: 'text' | 'link';
  linkUrl?: string;
  linkText?: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: '¡Hola! Soy NeuroBot 🤖. ¿Te gustaría saber cómo triplicar tus leads con IA?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && !hasInteracted) {
        setHasInteracted(true);
        // Play open sound if sound controller exists (handled globally)
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  // AI Logic Engine
  const generateResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    setIsTyping(true);

    let responseText = '';
    let linkUrl = '';
    let linkText = '';
    
    // Simulate thinking delay
    const delay = Math.random() * 1000 + 1000; // 1-2 seconds

    setTimeout(() => {
        if (lowerInput.includes('precio') || lowerInput.includes('costo') || lowerInput.includes('cuanto') || lowerInput.includes('tarifa')) {
            responseText = "Nuestros planes son personalizados según el volumen de leads. Lo mejor es una auditoría rápida para darte un precio exacto. ¿Te agendo?";
            linkUrl = '/#/booking';
            linkText = 'Ver Precios / Agendar';
        } else if (lowerInput.includes('agendar') || lowerInput.includes('reunion') || lowerInput.includes('cita') || lowerInput.includes('llamada')) {
            responseText = "¡Perfecto! Accede a mi calendario en tiempo real aquí:";
            linkUrl = '/#/booking';
            linkText = 'Agendar Llamada Ahora';
        } else if (lowerInput.includes('servicio') || lowerInput.includes('que hacen') || lowerInput.includes('funciona')) {
            responseText = "Implementamos 3 sistemas: CRM Predictivo, Recepcionista IA y Vendedores WhatsApp. ¿Cuál te interesa más?";
        } else if (lowerInput.includes('hola') || lowerInput.includes('buenos')) {
            responseText = "¡Hola de nuevo! 👋 ¿Tienes un negocio que quieres escalar con IA?";
        } else if (lowerInput.includes('si') || lowerInput.includes('claro')) {
            responseText = "Genial. La mayoría de nuestros clientes empiezan automatizando la atención al cliente. ¿Te gustaría ver una demo?";
            linkUrl = '/#/entrenamiento-exclusivo';
            linkText = 'Ver Demo (VSL)';
        } else {
            responseText = "Entiendo. Para darte la mejor estrategia, necesito que un experto analice tu caso. Es gratis y sin compromiso.";
            linkUrl = '/#/booking';
            linkText = 'Hablar con un Humano';
        }

        const newMessage: Message = {
            id: Date.now().toString(),
            text: responseText,
            sender: 'bot',
            type: linkUrl ? 'link' : 'text',
            linkUrl,
            linkText
        };

        setMessages(prev => [...prev, newMessage]);
        setIsTyping(false);
    }, delay);
  };

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = {
        id: Date.now().toString(),
        text: inputValue,
        sender: 'user'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    generateResponse(userMsg.text);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="mb-4 w-[350px] sm:w-[380px] bg-black/90 backdrop-blur-xl border border-brand-600/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[600px]"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-brand-900 to-accent-900 p-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-black border border-brand-500 flex items-center justify-center">
                             <Bot className="w-6 h-6 text-brand-400" />
                        </div>
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full"></span>
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-sm">NeuroBot AI</h3>
                        <p className="text-xs text-brand-300 flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> En línea ahora
                        </p>
                    </div>
                </div>
                <button onClick={toggleChat} className="text-gray-400 hover:text-white">
                    <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Body */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px] custom-scrollbar bg-black/50">
                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                            msg.sender === 'user' 
                            ? 'bg-brand-600 text-white rounded-tr-none' 
                            : 'bg-dark-800 border border-gray-800 text-gray-200 rounded-tl-none'
                        }`}>
                            <p>{msg.text}</p>
                            {msg.type === 'link' && msg.linkUrl && (
                                <a 
                                    href={msg.linkUrl} 
                                    className="mt-3 block text-center bg-white/10 hover:bg-white/20 border border-white/20 text-brand-300 font-bold py-2 rounded-lg transition-colors text-xs"
                                >
                                    {msg.linkText}
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
                {isTyping && (
                    <div className="flex justify-start">
                        <TypingIndicator />
                    </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-black/80">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Escribe tu duda..."
                        className="w-full bg-dark-900 border border-gray-700 rounded-full pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                    />
                    <button 
                        type="submit"
                        disabled={!inputValue.trim()}
                        className="absolute right-2 p-2 bg-brand-600 rounded-full text-white hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={toggleChat}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-brand-600 to-accent-600 rounded-full shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 transition-all"
        >
            <AnimatePresence mode='wait'>
                {isOpen ? (
                     <X className="w-6 h-6 text-white" key="close" />
                ) : (
                    <MessageCircle className="w-6 h-6 text-white" key="open" />
                )}
            </AnimatePresence>
            
            {/* Notification Badge */}
            {!isOpen && messages.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] text-white font-bold items-center justify-center">1</span>
                </span>
            )}
        </motion.button>
      </div>
    </>
  );
};

export default ChatWidget;