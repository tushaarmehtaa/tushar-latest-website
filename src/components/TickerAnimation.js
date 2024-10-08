import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TickerAnimation = ({ words }) => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[currentWord]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="font-bold"
      >
        {words[currentWord]}
      </motion.span>
    </AnimatePresence>
  );
};

export default TickerAnimation;
