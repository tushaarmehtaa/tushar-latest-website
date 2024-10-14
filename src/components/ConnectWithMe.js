import React from 'react';
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';

const ConnectWithMe = () => {
  return (
    <section className="mt-12 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Connect with me:</h2>
      <div className="flex space-x-4">
        <a href="mailto:tusharmehta2001@icloud.com" className="text-gray-600 hover:text-gray-900">
          <FaEnvelope size={24} />
        </a>
        <a href="https://x.com/tushaarmehtaa" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.linkedin.com/in/tushaarmehtaa/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
          <FaLinkedin size={24} />
        </a>
        <a href="https://flowcv.com/resume/0h14s0eust" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
          Resume
        </a>
        <a href="https://github.com/tushaarmehtaa" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
          <FaGithub size={24} />
        </a>
        <a href="https://tushaarmehtaa.substack.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
          <SiSubstack size={24} />
        </a>
      </div>
    </section>
  );
};

export default ConnectWithMe;

