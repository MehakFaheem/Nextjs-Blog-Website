import React from 'react';
import { CodeIcon, Terminal, GitBranch, Heart, Coffee, Rss } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full mt-16">
      {/* Dark gradient background */}
      <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-gray-200">
        
        {/* Main footer content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Column 1 - About */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CodeIcon className="h-6 w-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">DevBlog</h3>
              </div>
              <p className="text-gray-400">
                Exploring the digital frontier with code, tutorials, and tech insights.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-700 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-700 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm3.07 13.93l-1.41 1.41C13.54 17.45 13.02 17.5 12 17.5s-1.54-.05-1.66-.15l-1.41-1.41C8.82 15.83 8.78 15.32 8.5 14l1.41-1.41c.38.4.89.66 1.41.78.06.02.07.04.07.08 0 .12-.06.35-.07.65-.03.54-.02 1.2.1 1.55.17.48.66.69.9.69s.73-.21.9-.69c.12-.35.13-1.01.1-1.55-.01-.3-.07-.53-.07-.65 0-.04.01-.06.07-.08.51-.12 1.03-.37 1.41-.78L16.5 14c-.22 1.32-.26 1.83-.37 1.93z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-700 transition-colors flex items-center">
                    <Terminal className="h-4 w-4 mr-2" />
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center">
                    <GitBranch className="h-4 w-4 mr-2" />
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center">
                    <Rss className="h-4 w-4 mr-2" />
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Column 3 - Categories */}
            <div>
              <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    JavaScript
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    React & Next.js
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    DevOps
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Cloud Computing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    AI & Machine Learning
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Career Advice
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Column 4 - Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with the latest tech tips and tutorials.</p>
              <form className="space-y-4">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-gray-800 text-white w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                  Subscribe
                </button>
              </form>
            </div>
            
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            
            {/* Bottom footer with copyright and extra links */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4 md:mb-0">
                <span>&copy; {currentYear} DevBlog</span>
                <span className="text-gray-600">•</span>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </a>
                <span className="text-gray-600">•</span>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </a>
              </div>
              
              <div className="flex items-center text-sm text-gray-400">
                <span className="flex items-center">
                  <Heart className="h-4 w-4 mr-1 text-emerald-500" />
                  Made with code and 
                </span>
                <Coffee className="h-4 w-4 mx-1 text-amber-500" />
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;