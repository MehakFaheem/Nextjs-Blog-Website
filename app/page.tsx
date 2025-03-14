import React from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';

const posts = [
  { id: '1', title: 'Exploring the Future of AI', category: 'Technology' },
  { id: '2', title: 'The Rise of Quantum Computing', category: 'Technology' },
  { id: '3', title: 'Blockchain Innovations in 2024', category: 'Technology' },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <Navbar />
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <div className="px-6">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg">
              Discover Amazing Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-6 drop-shadow-md">
              Dive into a world of fascinating articles and insights across various topics.
            </p>
            <Link href="/categories" className="bg-white bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md font-semibold mr-4 hover:bg-gray-100">
              Explore Categories
            </Link>
            <Link href="/latest" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-indigo-700">
              Latest Posts
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Post</h2>
          <p className="text-gray-600 mb-4">Discover the latest trends in AI and how they shape our future.</p>
          <Link href="/posts/1" className="text-purple-700 font-semibold hover:text-purple-900 hover:underline">Read the Featured Post</Link>
        </div>
      </div>

      {/* Recent Posts */}
      <div id="recent-posts" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Recent Posts</h2>
        <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
          <p className="text-gray-500 text-sm">{post.category}</p>
          <Link href={`/posts/${post.id}`} className="text-purple-600 font-semibold hover:text-purple-800 hover:underline mt-2 inline-block">
          Read More
          </Link>
          
        </div>
      ))}
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center ">
        <h2 className="text-3xl font-bold text-gray-100 mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-black mb-4">Stay updated with the latest posts and exclusive content.</p>
        <input type="email" placeholder="Enter your email" className="px-4 py-2 border rounded-full mb-4" />
        <button className="px-6 py-3 bg-gradient-to-r from-purple-700 to-pink-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-200">
          Subscribe
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-black text-white text-center py-6">
        <p>&copy; 2025 Your Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;