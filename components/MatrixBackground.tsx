import React, { useEffect, useRef } from 'react';

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = '01010101NEUROMARKAIABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const splitLetters = letters.split('');

    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const text = splitLetters[Math.floor(Math.random() * splitLetters.length)];
        
        // Brand colors for drops
        if (Math.random() > 0.95) {
            ctx.fillStyle = '#F43F5E'; // AI Pink
        } else if (Math.random() > 0.90) {
            ctx.fillStyle = '#7C3AED'; // Mark Violet
        } else {
            ctx.fillStyle = '#2563EB'; // Neuro Blue
        }
        
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 opacity-20 pointer-events-none"
    />
  );
};

export default MatrixBackground;