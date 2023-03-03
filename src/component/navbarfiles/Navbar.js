import React from "react";
import { NavLink } from "react-router-dom";
import {  FaBars } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import Logo from "../../asset/Hernalytics Full Logo Yellow@3x 1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="" src={Logo} alt="Logo" />
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
                <button className="px-3 py-2 text-gray-300 uppercase">
                  Our Communities
                  <span className="ml-1">
                    <MdArrowDropDown className="inline-block h-4 w-4" />
                  </span>
                </button>
              </div>
              <div className="relative">
                <button className="px-3 py-2 text-gray-300 uppercase">
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
              <button
                className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span>Our Community</span>
                <span className="ml-1">
                  <MdArrowDropDown className="inline-block h-4 w-4" />
                </span>
              </button>
              
            </div>
            <div className="relative">
              <button
                className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span>Election</span>
                <span className="ml-1">
                  <MdArrowDropDown className="inline-block h-4 w-4" />
                </span>
              </button>
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
