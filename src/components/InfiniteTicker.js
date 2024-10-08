import React from 'react';

const InfiniteTicker = ({ items }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee">
        {items.map((item, index) => (
          <span key={index} className="mx-4">{item}</span>
        ))}
      </div>
    </div>
  );
};

export default InfiniteTicker;
