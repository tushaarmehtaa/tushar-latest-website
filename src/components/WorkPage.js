import React, { useState } from 'react';
import WorkPopup from './WorkPopup';
import buildersCentralImage from '../images/builders-central.jpg'; // Update path as needed
import karthikSridharanImage from '../images/karthik-sridharan.jpg'; // Update path as needed

const WorkPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Builders Central",
      image: buildersCentralImage,
      shortDescription: "Grew followers from 3.5K to 100K in one year",
      fullDescription: "I joined them as a consultant in November 2023 - and it was around 3.5K followers. From there we did short form, videos, long form, giveaways, contests and crossed 100k in November 2024. Hell of a ride."
    },
    {
      id: 2,
      title: "Karthik Sridharan",
      image: karthikSridharanImage,
      shortDescription: "Managed social media for 3 pages, significant growth across all",
      fullDescription: "I joined as a full-time employee working as a social media manager managing 3 pages at his company Flexiple - buildd, his own, and one of the other cofounders. His page went 3x from 33k, other cofounders doubled and buildd's growth to 15k from scratch. We did tweets, threads, mind maps, partnerships, launches and more!"
    },
    // Add more projects here...
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105"
            onClick={() => setSelectedProject(project)}
          >
            <div className="aspect-w-16 aspect-h-9">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.shortDescription}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <WorkPopup project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default WorkPage;
