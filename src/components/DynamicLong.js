import React, { useState, useEffect } from 'react';

const DynamicLong = () => {
  const [oCount, setOCount] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setOCount((prev) => (prev % 10) + 1);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return <span>lo{'o'.repeat(oCount)}ng</span>;
};

export default DynamicLong;
