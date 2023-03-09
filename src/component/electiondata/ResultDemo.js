import React from "react";
import { RiArrowUpSFill } from "react-icons/ri";

const ResultDemo = () => {
  return (
    <div className="flex justify-between w-full bg-gray-800 p-2 pb-20 mt-16 mb-6 md:0 md:mt-0">
      <div className={`relative h-5 bg-red-500 w-1/3 `}>
        <div className={`absolute bg-white p-1 w-16 md:w-max md:h-16 mt-7`}>
          <RiArrowUpSFill className="text-white text-2xl absolute font-bold -mt-5" />
          <div className="flex">
          <img src={""} alt="" className="w-2 h-2 md:w-9 md:h-9" />

          <div className="block px-2 text-xs md:text-sm">

              <h3 className={`text-red-500`}>Obi, LP</h3>
              <p className="text-black text-xs">10648453 votes (56%)</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`relative h-5 bg-green-500 w-1/3 `}>
        <div className={`absolute bg-white p-1 w-16 md:w-max md:h-16 mt-7`}>
          <RiArrowUpSFill className="text-white text-2xl absolute font-bold -mt-5" />
          <div className="flex">
            <img src={""} alt="" className="w-2 h-2 md:w-9 md:h-9" />
            <div className="block px-2 text-xs md:text-sm">
              <h3 className={`text-red-500`}>Obi, LP</h3>
              <p className="text-black text-xs">10648453 votes (56%)</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`relative h-5 bg-yellow-500 w-1/3 `}>
        <div className={`absolute bg-white p-1 w-16 md:w-max md:h-16 mt-7`}>
          <RiArrowUpSFill className="text-white text-2xl absolute font-bold -mt-5" />
          <div className="flex">
          <img src={""} alt="" className="w-2 h-2 md:w-9 md:h-9" />

          <div className="block px-2 text-xs md:text-sm">

              <h3 className={`text-red-500`}>Obi, LP</h3>
              <p className="text-black text-xs">10648453 votes (56%)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultDemo;
