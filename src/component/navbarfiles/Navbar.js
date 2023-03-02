import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md'
import Logo from '../../asset/Hernalytics Full Logo Yellow@3x 1.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              className=""
              src={Logo}
              alt="Logo"
            />
          </div>
          <div className="hidden md:block">
            <div className="flex items-center">
              <NavLink
                to="/about"
                className="px-3 py-2 text-gray-300 uppercase"
              >
                About Us
              </NavLink>
              
              <div className="relative">
                <button
                  className="px-3 py-2 text-gray-300 uppercase"
                >
                  Our Communities
                  <span className="ml-1">
                    <MdArrowDropDown className="inline-block h-4 w-4" />
                  </span>
                </button>
                
          </div>
              <div className="relative">
                <button
                  className="px-3 py-2 text-gray-300 uppercase"
                >
                  Election
                  <span className="ml-1">
                    <MdArrowDropDown className="inline-block h-4 w-4" />
                  </span>
                </button>
                
          </div>
          <NavLink
            to="/ebuddy"
            className="px-3 py-2 text-gray-300 uppercase"
          >
            E-buddy
          </NavLink>
          <NavLink
            to="/services"
            className="px-3 py-2 text-gray-300 uppercase"
          >
            veo platform
          </NavLink>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="ml-4 flex items-center md:ml-6">
          <button
            className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-label="Notifications"
          >
          </button>
          <NavLink
            to="/login"
            className="ml-3 px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
            
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="ml-3 px-3 py-2 bg-yellow-400 text-gray-900 rounded-md"
            activeClassName="bg-yellow-500"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
      <div className="-mr-2 flex md:hidden">
        <button
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
  {isMenuOpen && (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NavLink
          to="/about"
          className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md"
          activeClassName="bg-gray-900 text-white"
        >
          About Us
        </NavLink>
        <div className="relative">
          <button
            className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span>Our Community</span>
            <span className="ml-1">
              <FaBars className="inline-block h-4 w-4" />
            </span>
          </button>
          {isMenuOpen && (
            <div className="absolute z-10 -top-2 right-0 mt-2 py-2 w-48 bg-gray-800 rounded-md shadow-lg">
              <NavLink
                to="/community/events"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                activeClassName="bg-gray-900 text-white"
              >
                Events
              </NavLink>
              <NavLink                to="/community/members"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                activeClassName="bg-gray-900 text-white"
              >
                Members
              </NavLink>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span>Election</span>
            <span className="ml-1">
              <FaBars className="inline-block h-4 w-4" />
            </span>
          </button>
          {/* {isMenuOpen && (
            <div className="absolute z-10 -top-2 right-0 mt-2 py-2 w-48 bg-gray-800 rounded-md shadow-lg">
              <NavLink
                to="/election/candidates"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                activeClassName="bg-gray-900 text-white"
              >
                Candidates
              </NavLink>
              <NavLink
                to="/election/voting"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                activeClassName="bg-gray-900 text-white"
              >
                Voting
              </NavLink>
            </div>
          )} */}
        </div>
        <NavLink
          to="/ebuddy"
          className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md"
          activeClassName="bg-gray-900 text-white"
        >
          E-buddy
        </NavLink>
        <NavLink
          to="/services"
          className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md"
          activeClassName="bg-gray-900 text-white"
        >
          Services
        </NavLink>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <FaUserCircle className="h-8 w-8 text-gray-400" />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">John Doe</div>
              <div className="text-sm font-medium leading-none text-gray-400">johndoe@example.com</div>
            </div>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <NavLink
              to="/login"
              className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700"
              activeClassName="bg-gray-900 text-white"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700"
              activeClassName="bg-gray-900 text-white"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )}
</nav>
);
};
export default Navbar
               

