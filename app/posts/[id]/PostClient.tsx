'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

interface BlogPost {
  id: string;
  title: string;
  body: string;
}

interface PostClientProps {
  blogPost: BlogPost;
}

const PostClient: React.FC<PostClientProps> = ({ blogPost }) => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    
    if (!newComment.trim()) {
      setError('Comment cannot be empty');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setComments([...comments, newComment]);
      setNewComment('');
    } catch (err) {
      setError('Failed to post comment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (  
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url(/imgs/bg3.jpeg)'}}>
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-white hover:text-gray-400 mb-6 transition-colors duration-200"
        >
          <svg 
            className="w-4 h-4 mr-2" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home Page
        </Link>
        
        <article className="bg-gray-300 rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{blogPost.title}</h1>
          <p className="text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
            {blogPost.body}
          </p>
        </article>

        <section className="bg-gray-300 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Comments</h2>
          
          <div className="mb-8">
            {comments.length === 0 ? (
              <p className="text-gray-500 italic">No comments yet. Be the first to comment!</p>
            ) : (
              <ul className="space-y-4">
                {comments.map((comment, index) => (
                  <li 
                    key={`comment-${index}-${Date.now()}`} 
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <p className="text-gray-700">{comment}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <form onSubmit={handleCommentSubmit} className="space-y-4">
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
            
            <div>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                disabled={isLoading}
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className={`px-6 py-2 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isLoading ? 'Posting...' : 'Post Comment'}
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PostClient;