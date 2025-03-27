'use client'
import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ReactTyped } from "react-typed";
import techAnimation from "../public/imgs/laptop.json"; 
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const posts = [
  { id: '1', title: 'Exploring the Future of AI', category: 'Technology' },
  { id: '2', title: 'The Rise of Quantum Computing', category: 'Technology' },
  { id: '3', title: 'Blockchain Innovations in 2024', category: 'Technology' },
];

const Home = () => {
  const {ref, inView} = useInView({triggerOnce: true});

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, //animation will only happen once
      easing: "ease-in-out"
    });
  }, []);
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      {/* Hero Section */}
      <div className="relative pb-14 bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/imgs/bg.jpeg)' }}>
      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent"></div>
      
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-start h-full text-left">
          <div className="px-6 m-4 text-center md:text-left">
            <h3 className='font-md font-bold text-gray-300'>MORE THAN A TECH BLOG</h3>
            <h1 className="font-orbitron text-4xl font-bold md:text-7xl text-white mt-5 mb-5" data-aos="fade-up">
              Your ideas deserve <br />
              more than just words
            </h1>
            <p className="text-xs md:text-lg text-gray-200 mb-6">
              As the premier technology exploration platform, this blog brings together insights, <br className="hidden md:block" /> innovations, and inspirations that transform how we understand the digital landscape.
            </p>
            <p className="text-sm font-pixel mb-8 text-purple-300 text-shadow-glow"> 
              Write about{" "}
              <ReactTyped 
                strings={['technology', 'artificial intelligence', 'quantum computing', 'blockchain']} 
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </p>
            <Link href="#" className="bg-white bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md font-semibold mr-4 hover:bg-gray-100">
              Explore Categories
            </Link>

          </div>
          {/* Right Side - Animated Tech SVG */}
          <div className="flex px-14 mt-8 md:mt-0">
            <Lottie animationData={techAnimation} className="w-64 h-64 md:w-80 md:h-80" />
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="mx-auto py-16 px-4"> 
      <div className="flex flex-col md:flex-row items-center">
        {/* Text Content on the Left */}
        <div className="w-full md:w-1/2 pr-6 pl-4 mb-8 md:mb-0 pt-10 md:pt-0" data-aos="fade-up-left">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4">
              Exploring the Future of AI 
            </h2>
          <p className="text-gray-300 mb-6">Discover how artificial intelligence is revolutionizing industries, from healthcare and finance to education and entertainment. Explore its impact on automation, decision-making, and innovation, and learn how AI is shaping the future of technology on a global scale.</p>
          <Link href="/posts/1" className="text-purple-500 hover:underline rounded-md font-semibold">
            Read More
          </Link>
        </div>
        {/* Image with Fading Effect on the Right */}
          <div className="w-full md:w-1/2 relative" data-aos="fade-up-right">
            <div className="relative w-auto md:ml-24">
              <img 
                src="/imgs/Featuredblogs.jpeg" 
                alt="Featured Post" 
                className="w-full h-auto rounded-lg"
              />
              {/* Right Gradient */}
              <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent z-10"></div>
              {/* Left Gradient */}
              <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent z-10"></div>
              {/* Top Gradient */}
              <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black to-transparent z-10"></div>
              {/* Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent z-10"></div>
            </div>
          </div>
          </div>
      </div>

      {/* Statistics */}
      <div ref={ref} className="py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* <h2 className="text-4xl font-bold text-white mb-8">Our Statistics</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Daily Visitors */}
          <div className=" p-6 rounded-lg">
            <h3 className="text-6xl font-bold text-purple-500">
              {inView ? <CountUp end={1000} duration={2} /> : 0}
            </h3>
            <p className="text-white">Daily Visitors</p>
          </div>
          {/* Total Posts */}
          <div className=" p-6 rounded-lg">
            <h3 className="text-6xl font-bold text-purple-500">
              {inView ? <CountUp end={500} duration={2} /> : 0}+
            </h3>
            <p className="text-white">Total Posts</p>
          </div>
          {/* Active Users */}
          <div className=" p-6 rounded-lg">
            <h3 className="text-6xl font-bold text-purple-500">
              {inView ? <CountUp end={200} duration={2} /> : 0}
            </h3>
            <p className="text-white">Active Users</p>
          </div>
        </div>
      </div>
    </div>

      {/* Recent Posts */}
      <div id="recent-posts" className="mt-32 p-4">
        <h2 className="text-3xl font-bold text-amber-100 mb-6 text-center justify-center">Recent Posts</h2>
        <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
        <div key={post.id} className="hover:shadow-xl hover:scale-105 hover:ring-2  rounded-lg transition-all duration-300 bg-gray-300 border-b border-gray-600  h-60 shadow-md p-6 " >
          <h3 className="text-xl font-bold text-gray-800 mb-2 mt-10">{post.title}</h3>
          <p className="text-gray-400 text-sm">{post.category}</p>
          <Link
            href={`/posts/${post.id}`}
            className="text-purple-600 font-semibold hover:text-purple-800 hover:underline mt-2 inline-block"
          >
            Read More
          </Link>          
        </div>
      ))}
        </div>
        <div className="flex justify-center items-center m-10">
          <button className="text-purple-600 hover:underline">
            Show all posts
          </button>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="max-w-4xl mx-auto mb-28 px-6 py-16 text-center bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
        <p className="text-gray-300 mb-6">Get the latest tech news, insights, and updates delivered straight to your inbox.</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full md:w-96 px-6 py-3 border border-gray-600 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          />
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Subscribe
          </button>
        </div>
        <p className="text-gray-400 text-sm mt-4">We respect your privacy. No spam, ever.</p>
      </div>
      <Footer />
      
    </div>
  );
};

export default Home;