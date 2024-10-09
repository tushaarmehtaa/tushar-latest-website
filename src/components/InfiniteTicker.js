import React from 'react';

const InfiniteTicker = ({ items }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-ticker">
        {items.concat(items).map((item, index) => (
          <span key={index} className="inline-block mx-4">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfiniteTicker;
