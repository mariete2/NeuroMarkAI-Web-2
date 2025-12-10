import React, { useEffect } from 'react';

const SoundController: React.FC = () => {
  useEffect(() => {
    // Basic Web Audio API implementation to avoid external assets
    // Safety check for SSR or environments without AudioContext
    if (typeof window === 'undefined') return;

    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    let ctx: AudioContext | null = null;

    try {
        ctx = new AudioContextClass();
    } catch (e) {
        console.warn("AudioContext could not be initialized", e);
        return;
    }

    const playTone = (freq: number, type: 'sine' | 'square' | 'sawtooth' | 'triangle', duration: number, vol: number) => {
        if (!ctx) return;
        
        // Resume context if suspended (browser autoplay policy)
        if (ctx.state === 'suspended') {
            ctx.resume().catch(() => {});
        }
        
        try {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.type = type;
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            
            gain.gain.setValueAtTime(vol, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.start();
            osc.stop(ctx.currentTime + duration);
        } catch (e) {
            // Ignore audio errors
        }
    };

    const handleHover = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target) return;
        
        // Check if target is interactive
        if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
            playTone(800, 'sine', 0.05, 0.02);
        }
    };

    const handleClick = () => {
        playTone(600, 'square', 0.1, 0.05);
        playTone(1200, 'sine', 0.1, 0.03); 
    };

    document.addEventListener('mouseover', handleHover);
    document.addEventListener('click', handleClick);

    return () => {
        document.removeEventListener('mouseover', handleHover);
        document.removeEventListener('click', handleClick);
        if (ctx && ctx.state !== 'closed') {
            ctx.close().catch(() => {});
        }
    };
  }, []);

  return null;
};

export default SoundController;