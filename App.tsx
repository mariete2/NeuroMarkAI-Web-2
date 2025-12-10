import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import BookingPage from './pages/BookingPage';
import LegalPage from './pages/LegalPage';
import VSLPage from './pages/VSLPage';
import ChatWidget from './components/ChatWidget';
import SoundController from './components/SoundController';

// Enhanced Scroll Handler
const ScrollHandler = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <HashRouter>
      <ScrollHandler />
      <SoundController />
      
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <div className="flex flex-col min-h-screen bg-black text-white font-sans antialiased selection:bg-brand-500/30 selection:text-brand-200">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/entrenamiento-exclusivo" element={<VSLPage />} />
            <Route path="/booking" element={<BookingPage />} />
            
            {/* Legal Routes */}
            <Route path="/aviso-legal" element={<LegalPage type="legal" />} />
            <Route path="/politica-privacidad" element={<LegalPage type="privacy" />} />
            <Route path="/politica-cookies" element={<LegalPage type="cookies" />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </HashRouter>
  );
};

export default App;