import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { resultLegend } from "./data";

const Mapcontrols = () => {
  return (
    <div className="relative">
      <div className="block m-10">
        <button className="rounded-t-md block bg-slate-300 md:p-3 mb-2 p-1">
          <FaPlus />
        </button>
        <button className="rounded-b-md block bg-slate-300 md:p-3 p-1">
          <FaMinus />
        </button>
      </div>

      <div className="absolute bottom-0">
        {resultLegend.map((result) => (
          <div className="flex" key={result.name}>
            <div className={`${result.color} h-2 w-2`}></div>
            <p className="uppercase ml-4 text-color text-xs md:text-sm">{result.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mapcontrols;
