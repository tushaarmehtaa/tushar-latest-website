import React from 'react';

const StoryPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Story</h1>
      <p className="text-lg mb-6">I'm Tushar, a writer who's good at writing short, fun pieces.</p>

      <h2 className="text-2xl font-semibold mb-4">The Beginning</h2>
      <p className="mb-4">I started my journey as a marketer and writer really early. Like, on the first day of college early. I knew right away that normal job hunts and college placements weren't for me.</p>
      <p className="mb-4">So, what did I do? I looked for work. Free, paid, paid in exposure whatever - I just wanted to start somewhere.</p>
      <p className="mb-4">For six months, I worked for free. No money, but a lot of learning. And guess what? It worked out. </p>
      <p className="mb-6">Finally, I got a job that paid a little over $50 a month. Not a lot now, but for a 20-year-old, it was a big deal.</p>

      <h2 className="text-2xl font-semibold mb-4">Where I Am Now</h2>
      <p className="mb-6">Now, three years later, I'm here. Working with smart people and ambitious startups. Making content that helps them grow.</p>

      <h2 className="text-2xl font-semibold mb-4">Beyond Writing</h2>
      <p className="mb-4">But that's not all. I've got a new hobby: playing with code. You can find me making little tools like tweet makers, email writers, and script creators.</p>
      <p className="mb-6">And get this - I'm working on my own thing with two friends. We're helping brands make custom tools. Pretty neat, huh?</p>

      <h2 className="text-xl font-semibold mb-4">If my story sounds good to you...</h2>
      <div className="mb-4">
        <a 
          href="mailto:tusharmehta2001@icloud.com" 
          className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors inline-block"
        >
          Let's chat
        </a>
      </div>
      <p className="text-lg italic">I think we'll get along great.</p>
    </div>
  );
};

export default StoryPage;
