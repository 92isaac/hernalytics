import React from "react";
import { RiArrowUpSFill } from "react-icons/ri";
import obi from "../../asset/obi.png";
import tinubu from "../../asset/tinubu.png";
import atiku from "../../asset/atiku.png";

const ScoreBar = ({full_name, political_party_name, candidates_votes}) => {


  return (

          <div className="relative h-5 bg-green-500 w-1/3">
            <div className="absolute bg-white p-1 w-max h-18 mt-7  ml-5">
              <RiArrowUpSFill className="text-white text-2xl absolute font-bold -mt-5" />
              <div className="flex ">
                <img src={tinubu} alt="" className="w-9 h-9" />
                <div className="block px-2">
                    <h3 className="text-blue-500">{full_name}, {political_party_name}</h3>
                    <p className="text-black text-xs">{Number(candidates_votes)} votes (51.3%)</p>
                </div>
              </div>
            </div>
          </div>
         
   
  );
};

export default ScoreBar;
