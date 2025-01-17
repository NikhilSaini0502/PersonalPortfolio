import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo Section with Typing Animation */}
        <div className="text-2xl font-bold relative overflow-hidden">
          <a
            href="/"
            className="text-white inline-block animate-[typing_3s_steps(30)_1s_forwards] whitespace-nowrap"
          >
            My Portfolio
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="hover:text-gray-400 transition duration-200 transform hover:scale-105"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-gray-400 transition duration-200 transform hover:scale-105"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-gray-400 transition duration-200 transform hover:scale-105"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Row Layout and Slide-in Animation */}
      {menuOpen && (
        <div
          className="md:hidden bg-gray-700 py-4 px-6 space-x-4 flex animate-slidein flex-row"
        >
          <a
            href="#about"
            className="text-white hover:text-gray-400 transition duration-200 transform hover:scale-105"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-white hover:text-gray-400 transition duration-200 transform hover:scale-105"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover:text-gray-400 transition duration-200 transform hover:scale-105"
          >
            Contact
          </a>
        </div>
      )}
      
      {/* Inline Styles for Keyframes and Custom Animations */}
      <style jsx>{`
        @keyframes typing {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes slidein {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-typing {
          animation: typing 3s steps(30) 1s forwards;
        }

        .animate-slidein {
          animation: slidein 0.5s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;
