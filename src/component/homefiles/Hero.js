import React from "react";
import { MdArrowDropDown } from "react-icons/md";

const Hero = () => {
  return (
    // <div className="bg-gray-800 h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white pt-10">
        <h1 className="capitalize font-bold text-3xl">
          Post Election Data{" "}
          <span className=" text-sm ml-4 px-3 text-gray-300  rounded-md outline-4 border border-lines border-bg">
            Presidential / 2023
          </span>
        </h1>

        <div className="flex justify-between mt-10">
        <h1 className="capitalize font-bold text-3xl">
          Presidential Race
        </h1>
          <div className="">
            <button className="px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white border-bg md:mr-4">
              Post Election
              <span className="ml-20">
                <MdArrowDropDown className="inline-block h-4 w-4" />
              </span>
            </button>
            <button className="px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white border-bg md:mr-4">
              Presidential
              <span className="ml-20">
                <MdArrowDropDown className="inline-block h-4 w-4" />
              </span>
            </button>
            <button className="px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white border-bg md:mr-4">
              2023
              <span className="ml-20">
                <MdArrowDropDown className="inline-block h-4 w-4" />
              </span>
            </button>
          </div>
        </div>
        <div className="border-lines w-11/12 mx-auto mt-4"/>
      </div>
    // </div>
  );
};

export default Hero;
