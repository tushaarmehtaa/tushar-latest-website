import React from 'react';

const WorkPopup = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-3xl overflow-y-auto max-h-[90vh]">
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center rounded" />
          </div>
          <p className="mb-6 text-lg">{project.fullDescription}</p>
          <button 
            onClick={onClose}
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors text-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkPopup;
