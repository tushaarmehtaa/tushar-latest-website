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
      fullDescription: `I joined them as a consultant in November 2023. They had around 3.5K followers. Not much to write home about.
        But we got to work. Short form content. Videos. Long form posts. Giveaways. Contests. You name it, we did it.
        And guess what? By November 2024, we crossed 100k followers. That's right. 100 freakin' K.`
    },
    {
      id: 2,
      title: "Personal Branding for Karthik Sridharan",
      image: karthikSridharanImage,
      shortDescription: "Managed social media for 3 pages, significant growth across all",
      fullDescription: `I joined as a full-time employee. A social media manager. Managing 3 pages at Flexiple.
        The founder's page. Another cofounder's page. And buildd's page. 
        The founder's page went 3x. The other cofounder's page doubled. And buildd's page? We grew it to 15k. 
        We did it all. Tweets. Threads. Mind maps. Partnerships. Launches. You name it, we crushed it.
        It wasn't easy. But it was fun. And it was rewarding. Seeing those numbers climb.`
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
