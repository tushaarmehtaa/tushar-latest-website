import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const ResumePage = () => {
  const [activeQuest, setActiveQuest] = useState('main');

  const mainQuests = [
    {
      year: '2024',
      projects: [
        {
          title: 'Socials @Flexiple',
          description: 'Writing content for founder accounts and scriptwriting for videos.',
          link: 'https://flexiple.com'
        }
      ]
    },
    {
      year: '2023',
      projects: [
        {
          title: 'Marketing & Growth @PurplePay',
          description: 'Only marketer in a team of 12, solving for cross-border payments with crypto.',
          link: 'https://purplepay.app'
        },
        {
          title: 'Content Writer @Dezerv',
          description: 'Wrote 60+ SEO-optimized blogs for a $100M+ wealth management firm.',
          link: 'https://www.dezerv.in/'
        },
        {
          title: 'Marketing @Nintee (parent company - Wingify)',
          description: 'Worked on a personal development and habit AI coach.',
          link: 'https://nintee.com/',
          note: '(One of the greatest experiences for me as I got introduced to genAI here)'
        }
      ]
    },
    {
      year: '2022',
      projects: [
        {
          title: 'Marketing @Owled',
          description: 'YouTube channel management, newsletter writing, short-form distribution execution for various clients.',
          link: 'https://www.owledmedia.com/',
          note: '(Huge for me personally as everything I learned in marketing started here)'
        }
      ]
    }
  ];

  const sideQuests = [
    {
      year: '2024',
      projects: [
        {
          title: 'AI Tweet Generator',
          description: 'Helping people with great thoughts write tweets easily with templates and inspiration.'
        },
        {
          title: 'JimBro',
          description: 'Building the easiest way to log workouts and get better at sports.',
          link: 'https://jimbro.framer.ai/'
        },
        {
          title: 'Zoho Creator',
          description: 'Consulting for Zoho Creator via YaaS Media; wrote over 200+ short-form scripts.',
          link: 'https://www.zoho.com/creator/'
        },
        {
          title: 'Dacoit Design',
          description: 'Wrote a once-a-year year-in-review for Rahul, founder of Dacoit Design.',
          link: 'https://www.dacoit.design/'
        },
        {
          title: 'FBI',
          description: 'On-and-off partnership with Farcaster Builders International for organizing hackathons, meetups, etc.',
          link: 'https://0xfbi.com/'
        }
      ]
    },
    {
      year: '2023',
      projects: [
        {
          title: 'LogX',
          description: 'Wrote multiple Twitter threads covering crypto trading and ecosystems LogX explored for integration.',
          link: 'https://www.logx.trade/'
        },
        {
          title: 'Floww Media',
          description: 'A services business started with 2 of my brothers to make thumbnails for YouTubers - got some clients from India, Korea, and the States - then shut it down.',
          link: 'https://x.com/FlowwMedia'
        }
      ]
    },
    {
      year: '2022',
      projects: [
        {
          title: 'Seekify',
          description: 'Interned to write social media posts.',
          link: 'https://seekify.com/'
        },
        {
          title: 'Segmind',
          description: 'Worked as a sales and marketing rep—explored how B2B SaaS works.',
          link: 'https://www.segmind.com/'
        },
        {
          title: 'Podcast Decoded',
          description: 'We (me and my brother) listened to podcasts and shared notes - so you don\'t have to.',
          link: 'https://x.com/podcastdecoded_'
        }
      ]
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Past Work</h1>
      
      <div className="mb-6">
        <button 
          className={`mr-4 ${activeQuest === 'main' ? 'font-bold' : ''}`}
          onClick={() => setActiveQuest('main')}
        >
          Main Quests
        </button>
        <button 
          className={activeQuest === 'side' ? 'font-bold' : ''}
          onClick={() => setActiveQuest('side')}
        >
          Side Quests
        </button>
      </div>

      {(activeQuest === 'main' ? mainQuests : sideQuests).map((yearGroup, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{yearGroup.year}</h2>
          {yearGroup.projects.map((project, projectIndex) => (
            <div key={projectIndex} className="mb-6 pl-4 border-l-2 border-gray-300">
              <h3 className="font-bold mb-2">
                {project.link ? (
                  <a href={project.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p>{project.description}</p>
              {project.note && <p className="italic mt-2">{project.note}</p>}
            </div>
          ))}
        </div>
      ))}

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="mb-4">Feel free to reach out for collaborations or just a chat!</p>
        <div className="flex space-x-4">
          <a href="https://github.com/yourusername" className="text-gray-600 hover:text-gray-900">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com/yourusername" className="text-gray-600 hover:text-gray-900">
            <FaTwitter size={24} />
          </a>
          <a href="mailto:tusharmehta2001@icloud.com" className="text-gray-600 hover:text-gray-900">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;