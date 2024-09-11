import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Company Logo */}
        <div className="flex items-center">
          <img
            src="https://www.ai-fire.in/images/logo.png"
            alt="Company Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {/* Hamburger icon */}
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
              />
            </svg>
          </button>
        </div>

        {/* Links for larger screens */}
        <ul className="hidden lg:flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/analytics" className="hover:text-gray-300">
              Analytics
            </Link>
          </li>
          <li>
            <Link to="/settings" className="hover:text-gray-300">
              Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"} mt-4`}>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="block px-2 py-1 hover:bg-blue-800">
              Home
            </Link>
          </li>
          <li>
            <Link to="/analytics" className="block px-2 py-1 hover:bg-blue-800">
              Analytics
            </Link>
          </li>
          <li>
            <Link to="/settings" className="block px-2 py-1 hover:bg-blue-800">
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
