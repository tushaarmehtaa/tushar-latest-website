import React from 'react';

const ImageBox = ({ alt }) => {
  return (
    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
      <span className="text-gray-500">{alt}</span>
    </div>
  );
};

export default ImageBox;
