import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TickerAnimation from './TickerAnimation';
import ImageBox from './ImageBox';
import SlowTicker from './SlowTicker';
import DynamicLong from './DynamicLong';
import HoverPopup from './HoverPopup';
import InfiniteTicker from './InfiniteTicker';
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';
import StoryPage from './StoryPage';
import WorkPage from './WorkPage';
import NotesPage from './NotesPage';
import ResumePage from './ResumePage';
import WorkPopup from './WorkPopup';

// Import your images
import tusharImage from '../images/tushar-mehta.jpg';
import buildersCentralImage from '../images/builders-central.jpg';
import karthikSridharan from '../images/karthik-sridharan.jpg';
import outsideWork1 from '../images/outside-work-1.jpg';
import outsideWork2 from '../images/outside-work-2.jpg';
import outsideWork3 from '../images/outside-work-3.jpg';
import outsideWork4 from '../images/outside-work-4.jpg';
import flexipleLogo from '../images/flexiple-logo.jpg';
import ninteeLogo from '../images/nintee-logo.jpg';
import owledLogo from '../images/owled-logo.jpg';
import parasLogo from '../images/paras-logo.jpg';
import rahulLogo from '../images/rahul-logo.jpg';
import solanaLogo from '../images/solana-logo.jpg';
import dezervLogo from '../images/dezerv-logo.jpg';
import saumyaLogo from '../images/saumya-logo.jpg';
// ... import other logos ...

const PersonalWebsite = () => {
  const contentTypes = ['blogs', 'scripts', 'tweets', 'posts', 'newsletters'];
  const personalItems = [
    { text: 'Recently started running and completed a 5K Wipro run', image: '/images/outside-work1.jpg' },
    { text: 'I cycle to work like Mike Ross, love that guy', image: '/images/outside-work2.jpg' },
    { text: 'On a coffee spree to check out all working cafes in luru', image: '/images/outside-work3.jpg' },
    { text: 'Got a new monitor and have been happier ever since', image: '/images/outside-work4.jpg' }
  ];
  const companies = [
    { name: 'Flexiple', logo: flexipleLogo },
    { name: 'Nintee', logo: ninteeLogo },
    { name: 'OWLED', logo: owledLogo },
    { name: 'Paras', logo: parasLogo },
    { name: 'Rahul', logo: rahulLogo },
    { name: 'Solana', logo: solanaLogo },
    { name: 'Dezerv', logo: dezervLogo },
    { name: 'Saumya', logo: saumyaLogo },
  ];

  const outsideWorkImages = [outsideWork1, outsideWork2, outsideWork3, outsideWork4];

  return (
    <Router>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-10">
          <Link to="/" className="text-3xl font-bold mb-4 sm:mb-0 hover:text-gray-700 transition-colors">
            Tushar Mehta
          </Link>
          <nav className="flex flex-wrap justify-center items-center">
            <Link to="/story" className="mx-2 my-1 hover:underline">Story</Link>
            <Link to="/work" className="mx-2 my-1 hover:underline">Work</Link>
            <Link to="/notes" className="mx-2 my-1 hover:underline">Notes</Link>
            <Link to="/resume" className="mx-2 my-1 hover:underline">Resume</Link>
            <a 
              href="mailto:tusharmehta2001@icloud.com" 
              className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2 sm:mt-0 sm:ml-4 hover:bg-blue-600 transition-colors"
            >
              Contact
            </a>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={
            <Home 
              contentTypes={contentTypes} 
              personalItems={personalItems} 
              companies={companies}
              tusharImage={tusharImage}
              buildersCentralImage={buildersCentralImage}
              karthikSridharan={karthikSridharan}
              outsideWorkImages={outsideWorkImages}
            />
          } />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex justify-center">
            <p className="text-gray-600">&copy; 2023 Tushar Mehta. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

const Home = ({ 
  contentTypes, 
  personalItems, 
  companies, 
  tusharImage, 
  buildersCentralImage, 
  karthikSridharan,
  outsideWorkImages 
}) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const recentProjects = [
    {
      title: "Scriptwriting for Builders Central",
      image: buildersCentralImage,
      description: "I joined them as a consultant in November 2023 - and it was around 3.5K followers. From there we did short form, videos, long form, giveaways, contests and crossed 100k in November 2024. Hell of a ride."
    },
    {
      title: "Personal Branding for Karthik Sridharan",
      image: karthikSridharan,
      description: "I joined as a full-time employee working as a social media manager managing 3 pages at his company Flexiple - buildd, his own, and one of the other cofounders. His page went 3x from 33k, other cofounders doubled and buildd's growth to 15k from scratch. We did tweets, threads, mind maps, partnerships, launches and more!"
    }
  ];

  return (
    <main>
      <section className="mb-10">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <img src={tusharImage} alt="Tushar Mehta" className="object-cover w-full h-full" />
        </div>
        <p className="text-xl sm:text-2xl font-semibold mt-4 text-center">
          Your go-to guy for all things <strong>content.</strong> I can help you write <TickerAnimation words={contentTypes} />
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="mb-4">
          Hi, I'm Tushar. I've been writing online for{' '}
          <HoverPopup
            trigger="brands"
            content={<div>Nintee, Dezerv, Solana</div>}
          />,{' '}
          <HoverPopup
            trigger="individuals"
            content={<div>Saumya, Karthik, Rahul</div>}
          />, and{' '}
          <HoverPopup
            trigger="communities"
            content={<div>makerdock, FBI</div>}
          />{' '}
          for over 3 years now.
        </p>
        <p>Started in early 2021 with OWLED media and now working with my own clients, I've come a <DynamicLong /> way.</p>
      </section>

      {/* Recent Work Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Work:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {recentProjects.map((project, index) => (
            <div key={index} className="flex flex-col h-full">
              <div 
                className="relative cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center p-4">{project.title}</p>
                </div>
              </div>
              <p className="mt-2 text-center">{project.title}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <WorkPopup project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Apart from these, I've worked with these amazing folks at:</h2>
        <InfiniteTicker items={companies.map(company => (
          <img key={company.name} src={company.logo} alt={company.name} className="h-12 mx-4 inline-block" />
        ))} />
      </section>

      {/* Currently Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Currently:</h2>
        <p className="mb-2">I recently left my job and have been working on a few of my own ventures for some time:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Been working with Zoho for scriptwriting and have built their page to 100K from scratch</li>
          <li>Recently started working with Ultrahuman, and hoping for the same trajectory</li>
          <li>Have been dabbling with AI for efficient operations, trying to automate functions with two of my brilliant cofounders</li>
          <li>Apart from that, being the techno-optimist I am, I'm working with FBI too - building out the community for them in India, Africa, and LatAm, onboarding the best of the best builders</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="mb-10">
        <p className="mb-4">I'm always looking to work with brilliant cofounders and companies for writing content and building distribution.</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors">Contact NOW</button>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Outside Work:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {personalItems.map((item, index) => (
            <div 
              key={index} 
              className="aspect-w-1 aspect-h-1 relative group"
            >
              <img 
                src={outsideWorkImages[index % outsideWorkImages.length]} 
                alt={item.text}
                className="object-cover w-full h-full rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <p className="text-white text-center p-4">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Updated Connect with me section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Connect with me:</h2>
        <div className="flex justify-center space-x-6">
          <a href="mailto:tusharmehta2001@icloud.com" className="text-gray-600 hover:text-gray-900">
            <FaEnvelope size={24} />
          </a>
          <a href="https://twitter.com/yourusername" className="text-gray-600 hover:text-gray-900">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-gray-600 hover:text-gray-900">
            <FaLinkedin size={24} />
          </a>
          <Link to="/resume" className="text-gray-600 hover:text-gray-900">
            Resume
          </Link>
          <a href="https://github.com/yourusername" className="text-gray-600 hover:text-gray-900">
            <FaGithub size={24} />
          </a>
          <a href="https://yourusername.substack.com" className="text-gray-600 hover:text-gray-900">
            <SiSubstack size={24} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default PersonalWebsite;