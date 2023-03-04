import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaUserAlt,
  FaUsers,
  FaUserCog,
} from "react-icons/fa";
import { RiUserVoiceFill } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";
import Logo from "../../asset/Hernalytics Full Logo Yellow@3x 1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommunitiesMenuOpen, setIsCommunitiesMenuOpen] = useState(false);
  const [isElectionMenuOpen, setIsElectionMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0">
            <img className="" src={Logo} alt="Logo" />
          </div>

          <div className="hidden md:block">
            <div className="flex items-center">

              <NavLink to="/" className="px-3 py-2 text-gray-300 uppercase">
                About Us
              </NavLink>

              <div className="relative">
                <button
                  className="px-3 py-2 text-gray-300 uppercase "
                  onClick={() => setIsCommunitiesMenuOpen(!isCommunitiesMenuOpen)}
                >
                  Our Communities
                  <span className="ml-1">
                    <MdArrowDropDown className="inline h-4 w-4" />
                  </span>
                </button>
                {isCommunitiesMenuOpen && (
                  <div className="absolute grid grid-cols-2 z-10 -top-2 mt-12 py-2 w-max bg-white rounded-md shadow-lg">
                    <NavLink
                      to="/"
                      className="block px-4 py-2 text-sm text-blue-900"
                    >
                      <FaUserAlt className="text-2xl inline mr-3"/> General User
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </NavLink>
                    <NavLink
                      to="/"
                      className="block px-4 py-2 text-sm text-blue-900"
                    >
                      <FaUsers className="text-2xl inline mr-3"/> Election Candidate
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </NavLink>
                    <NavLink
                      to="/"
                      className="block px-4 py-2 text-sm text-blue-900"
                    >
                      <FaUserCog className="text-2xl inline mr-3"/> Decide To Run (DTR)
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </NavLink>
                    <NavLink
                      to="/"
                      className="block px-4 py-2 text-sm text-blue-900"
                    >
                      <RiUserVoiceFill className="text-2xl inline mr-3"/> Reporter
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </NavLink>
                  </div>
                )}
              </div>




              <div className="relative">
                <button className="px-3 py-2 text-gray-300 uppercase "
                  onClick={() => setIsElectionMenuOpen(!isElectionMenuOpen)}
                >
                  Election
                  <span className="ml-1">
                    <MdArrowDropDown className="inline-block h-4 w-4" />
                  </span>
                </button>
                  {isElectionMenuOpen && (
                  <div className="absolute grid z-10 -top-2 mt-12 py-2 w-max bg-white rounded-md shadow-lg">
                    <NavLink
                      to="/"
                      className="block px-4 py-2 text-sm text-blue-900"
                    >
                      {/* <FaUserAlt className="text-2xl inline mr-3"/>  */}
                      Election Day Life Updates
                    </NavLink>
                    <hr className="bg-gray-800 border" />
                    <NavLink
                      to="/election/voting"
                      className="block px-4 py-2 text-sm text-blue-900"
                    >
                      {/* <FaUsers className="text-2xl inline mr-3"/>  */}
                      Post-Election Analysis
                    </NavLink>

                  </div>
                )}
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
              ></button>
              <NavLink
                to="/login"
                className="ml-3 px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="ml-3 px-3 py-2 bg-yellow-400 text-gray-900 rounded-md"
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
            >
              About Us
            </NavLink>
            <div className="relative">
              <button className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            onClick={() => setIsCommunitiesMenuOpen(!isCommunitiesMenuOpen)}
              >
                <span>Our Community</span>
                <span className="ml-1">
                  <MdArrowDropDown className="inline-block h-4 w-4" />
                </span>
              </button>

              {isMenuOpen && (
                  <div className="absolute grid grid-cols-2 z-10 -top-2 mt-12 py-2  bg-white rounded-md shadow-lg">
                    <NavLink
                      to="/"
                      className="block px-4 py-2 text-sm text-blue-900"
                    >
                      <FaUserAlt className="text-2xl"/> General User
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </NavLink>
                    <NavLink
                      to="/election/voting"
                      className="block px-4 py-2 text-sm text-blue-900"
                    >
                      <FaUsers className="text-2xl"/> Election Candidate
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </NavLink>
                    <NavLink
                      to="/election/voting"
                      className="block px-4 py-2 text-sm text-blue-900"
                    >
                      <FaUserCog className="text-2xl"/> Decide To Run (DTR)
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </NavLink>
                    <NavLink
                      to="/election/voting"
                      className="block px-4 py-2 text-sm text-blue-900"
                    >
                      <RiUserVoiceFill className="text-2xl"/> Reporter
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </NavLink>
                  </div>
                )}
            </div>
            <div className="relative">
              <button className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
           onClick={() => setIsElectionMenuOpen(!isElectionMenuOpen)}
              >
                <span>Election</span>
                <span className="ml-1">
                  <MdArrowDropDown className="inline-block h-4 w-4" />
                </span>
              </button>

              {isElectionMenuOpen && (
                  <div className="absolute grid z-10 -top-2 mt-12 py-2 w-max bg-white rounded-md shadow-lg">
                    <NavLink
                      to="/"
                      className="block px-4 py-2 text-sm text-blue-900"
                    >
                      <FaUserAlt className="text-2xl"/> General User
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </NavLink>
                    <NavLink
                      to="/election/voting"
                      className="block px-4 py-2 text-sm text-blue-900"
                    >
                      <FaUsers className="text-2xl"/> Election Candidate
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </NavLink>

                  </div>
                )}
            </div>
            <NavLink
              to="/ebuddy"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md"
            >
              E-buddy
            </NavLink>
            <NavLink
              to="/services"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md"
            >
              Services
            </NavLink>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="mt-3 px-2 space-y-1">
                <NavLink
                  to="/login"
                  className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700"
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
export default Navbar;
