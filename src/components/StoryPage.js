import React from 'react';

const StoryPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Story</h1>
      
      <section className="mb-8">
        <p className="text-lg mb-4">
          I'm Tushar, a multi-genre writer with good experience in writing short form pieces.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Beginning</h2>
        <p className="mb-4">
          My journey as a marketer and writer started early when I joined college where I worked for free for almost 6 months for a couple of companies.
        </p>
        <p className="mb-4">
          I didn't make any money there, but it led to a lot of gigs while I was still in college - part-time collaborations, NGO work, internships, and finally a generalist role for $50 a month. Sounds small now, but it was enough when I was a 20-year-old kid.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Where I Am Now</h2>
        <p className="mb-4">
          That was over 3 years ago. Now I build distribution for founders, startups and communities by writing content across channels.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Beyond Writing</h2>
        <p className="mb-4">
          Not only that, but with my new found hobby of playing with codebases - I can be found playing with code almost every time, building little tools like tweet generators, email writers, script writers, and working on my own services business where we (me and my two co-founders) work with brands to build tools for them.
        </p>
      </section>

      <section className="mt-12">
        <p className="text-lg font-semibold">
          If my work resonates with you, let's talk!
        </p>
        <a 
          href="mailto:tusharmehta2001@icloud.com"
          className="inline-block mt-4 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default StoryPage;