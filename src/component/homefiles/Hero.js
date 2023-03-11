import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContextGloball } from "../context/Context";

const Hero = () => {
  const [toggle, setToggle] = useState({type:false, office:false, year: false});
  const { selected, setSelected } = useContextGloball()


  
console.log(toggle)

const handleDropdownClick = (dropdownName) => {
  if (dropdownName === "type") {
    setToggle({ type: !toggle.type, office: false, year: false });
  } else if (dropdownName === "office") {
    setToggle({ type: false, office: !toggle.office, year: false });
  } else if (dropdownName === "year") {
    setToggle({ type: false, office: false, year: !toggle.year });
  }
};
  
 
  return (
    <div className="bg-gray-800" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white pt-10 ">
        <h1 className="capitalize font-bold text-3xl">
          {selected?.header}{" "}
          <span className=" text-sm ml-4 px-3 text-gray-300  rounded-md outline-4 border border-lines border-bg">
            {selected?.header ? "" : "Presidential / 2023"}
          </span>
        </h1>

        <div className="block md:flex justify-between mt-10">
          { selected?.header ? 
          <p dangerouslySetInnerHTML={{__html:selected?.date}}/>
            : <h1 className="capitalize font-bold text-3xl">Presidential Race</h1>
          }
          <div className="block md:flex">
            <div className="relative"  >
              <button
                className=" md:inline w-60 px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white border-bg md:mr-2"
                onClick={() => {
                  handleDropdownClick("type")
                  
                }}
              >
                {selected?.header}
                <span className="ml-20">
                  <MdArrowDropDown className="inline-block h-4 w-4" />
                </span>
              </button>
              {toggle.type && (
                <div className="absolute z-10 -top-2 mt-12 md:mt-16 py-4 w-60 border-bg text-white rounded-md shadow-lg divide-y-2 divide-slate-400" 
               
                >
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm"
                    onClick={() => {
                      setSelected({...selected, header:"Pre-Election"})
                    }}
                  >
                    Pre-Election
                  </Link>
                  <Link
                    to="/election_data"
                    className="block px-4 py-2 text-sm" 
                    onClick={() => {
                      setSelected({...selected, header:"Election Data"})
                    }}
                  >
                    Election Day Live Updates
                  </Link>

                  <Link
                    to="/"
                    className="block px-4 py-1 text-sm"
                    onClick={() => {
                      setSelected({...selected, header:"Post Election"})
                    }}
                  >
                    Post-Election Analysis
                  </Link>
                </div>
              )}
            </div>
            <div className="relative text-gray-300"  >
              <button className=" block md:inline w-60 px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white border-bg md:mr-4" 
              onClick={() => handleDropdownClick("office")}
              >
                Presidential
                <span className="ml-20">
                  <MdArrowDropDown className="inline-block h-4 w-4" />
                </span>
              </button>
              {toggle.office && (
                <div className="absolute z-10 -top-2 mt-12 md:mt-16 py-2 w-60  rounded-md shadow-lg divide-y divide-slate-500 border-bg">
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm "
                  >
                    Presidential
                  </Link>

                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm "
                  >
                    Election Candidate
                  </Link>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm "
                  >
                    Decide To Run (DTR)
                  </Link>
                </div>
              )}
            </div>
            <div className="relative text-gray-300"  >
              <button className=" block md:inline w-60 px-3 py-2  hover:bg-gray-700 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white border-bg md:mr-4" 
              onClick={() => handleDropdownClick("year")}
              >
                2023
                <span className="ml-20">
                  <MdArrowDropDown className="inline-block h-4 w-4" />
                </span>
              </button>
              {toggle.year && (
                <div className="absolute z-10 -top-2 mt-12 md:mt-16 py-2 w-60  rounded-md shadow-lg divide-y divide-slate-500 border-bg">
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm "
                  >
                    2023
                  </Link>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm "
                  >
                   2019
                  </Link>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm "
                  >
                    2015
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="border-lines w-11/12 mx-auto mt-4" />
      </div>
    </div>
  );
};

export default Hero;
