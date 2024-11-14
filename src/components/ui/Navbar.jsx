import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  // State to manage dropdown and mobile menu visibility
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isSignedIn = user; // Mock signed-in state

  return (
    <nav className="fixed max-w-7xl mx-auto top-0 right-0 left-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold text-gray-800">
            Crop-Insurance
          </span>
        </Link>
        <div className="flex items-center md:order-2">
          {isSignedIn ? (
            <>
              <button
                type="button"
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="flex text-sm bg-gray-200 rounded-full focus:ring-4 focus:ring-gray-300"
                aria-expanded={isUserDropdownOpen}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt="user photo"
                />
              </button>
              {isUserDropdownOpen && (
                <div className="absolute top-12 right-4 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-md z-10">
                  <div className="px-4 py-3">
                    <span className="block text-sm font-medium text-gray-700">
                      Bonnie Green
                    </span>
                    <span className="block text-sm text-gray-500">
                      name@flowbite.com
                    </span>
                  </div>
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/logout"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <Link
              to="/auth"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Sign In
            </Link>
          )}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/insurances"
                className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600"
              >
                Insurances
              </Link>
            </li>
            <li>
              <Link
                to="/ai-features"
                className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600"
              >
                AI-features
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
