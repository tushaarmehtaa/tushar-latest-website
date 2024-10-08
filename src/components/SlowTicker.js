import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SlowTicker = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % items.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [items]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentItem}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
        className="flex items-center space-x-4"
      >
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-gray-500">Image</span>
        </div>
        <p>{items[currentItem]}</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default SlowTicker;
