import React from 'react';
import { Link } from 'react-router-dom';
import HowItAllStartedPost from './HowItAllStartedPost';

const NotesPage = () => {
  const posts = [
    {
      id: 'how-it-all-started',
      title: 'How it all started',
      excerpt: 'My journey from a tier 3 private non-tech degree to earning *enough* as an above-average writer and marketer living in Bangalore.',
      date: 'Sept 15, 2024', // Update with the actual date
    },
    // Add more posts here as needed
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Notes</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2">
              <Link to={`/notes/${post.id}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-2">{post.date}</p>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
