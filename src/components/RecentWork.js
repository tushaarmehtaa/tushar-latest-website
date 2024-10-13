import React, { useState } from 'react';
import WorkPopup from './WorkPopup';

// Import your images
import buildersCentralImage from '../images/builders-central.jpg';
import karthikSridharan from '../images/karthik-sridharan.jpg';

const RecentWork = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  const workDetails = {
    builderscentral: {
      title: "Builders Central",
      content: "I joined them as a consultant in November 2023 - and it was around 3.5K followers. From there we did short form, videos, long form, giveaways, contests and crossed 100k in November 2024. Hell of a ride."
    },
    karthiksridharan: {
      title: "Karthik Sridharan",
      content: "I joined as a full-time employee working as a social media manager managing 3 pages at his company Flexiple - buildd, his own, and one of the other cofounders. His page went 3x from 33k, other cofounders doubled and buildd's growth to 15k from scratch. We did tweets, threads, mind maps, partnerships, launches and more!"
    }
  };

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Recent Work:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div onClick={() => setSelectedWork('builderscentral')} className="cursor-pointer">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <img src={buildersCentralImage} alt="Scriptwriting for Builders Central" className="object-cover w-full h-full" />
          </div>
          <p className="mt-2">Scriptwriting for Builders Central</p>
        </div>
        <div onClick={() => setSelectedWork('karthiksridharan')} className="cursor-pointer">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <img src={karthikSridharan} alt="Personal Branding for Karthik Sridharan" className="object-cover w-full h-full" />
          </div>
          <p className="mt-2">Personal Branding for Karthik Sridharan</p>
        </div>
      </div>
      {selectedWork && (
        <WorkPopup
          title={workDetails[selectedWork].title}
          content={workDetails[selectedWork].content}
          onClose={() => setSelectedWork(null)}
        />
      )}
    </section>
  );
};

export default RecentWork;
