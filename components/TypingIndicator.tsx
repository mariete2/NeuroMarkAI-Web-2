import React from 'react';
import { motion } from 'framer-motion';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex space-x-1 p-2 bg-gray-800/50 rounded-lg w-fit">
      {[0, 1, 2].map((dot) => (
        <motion.div
          key={dot}
          className="w-2 h-2 bg-brand-400 rounded-full"
          animate={{
            y: ["0%", "-50%", "0%"],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: dot * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default TypingIndicator;