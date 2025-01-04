import React from 'react';

const Home = () => {
  const posts = [
    { id: '1', title: 'Post 1' },
    { id: '2', title: 'Post 2' },
    { id: '3', title: 'Post 3' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Welcome to the Blog!
        </h1>
        
        <div className="grid gap-6">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <a 
                href={`/posts/${post.id}`}
                className="block p-6"
              >
                <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h2>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Read more</span>
                  <svg 
                    className="w-5 h-5 text-gray-400" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;