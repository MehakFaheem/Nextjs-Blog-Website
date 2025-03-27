import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Navigation bar with sticky position and glassmorphic effect
    <nav className="font-bold text-gray-50 sticky top-0 z-50 bg-transparent backdrop-filter backdrop-blur-lg border-b border-gray-200">
      <div className="mx-4 sm:mx-10">
        {/* Flex container to align items horizontally and space between logo and links */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span className="text-xl sm:text-2xl font-semibold">DevBlog</span>
          {/* Hamburger Menu for Mobile */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-50 hover:text-purple-500 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex space-x-4 sm:space-x-10">
            <Link href="#" className="hover:text-purple-500">
              Home
            </Link>
            <Link href="#" className="hover:text-purple-500">
              About
            </Link>
            <Link href="#" className="hover:text-purple-500">
              Blogs
            </Link>
            <Link href="#" className="hover:text-purple-500">
              Sign up
            </Link>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="sm:hidden">
            <div className="flex flex-col text-right space-y-4 mt-4">
              <Link href="#" className="hover:text-purple-500">
                Home
              </Link>
              <Link href="#" className="hover:text-purple-500">
                About
              </Link>
              <Link href="#" className="hover:text-purple-500">
                Blogs
              </Link>
              <Link href="#" className="hover:text-purple-500">
                Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;