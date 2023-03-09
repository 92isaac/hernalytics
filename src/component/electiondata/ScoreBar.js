import React from "react";
import { RiArrowUpSFill } from "react-icons/ri";
import tinubu from "../../asset/tinubu.png";
import Obi from "../../asset/obi.png";
import Atiku from "../../asset/atiku.png";

const ScoreBar = ({full_name, political_party_name, candidates_vote, percentage, width}) => {

    const checkParty =()=>{
        if(full_name === 'Peter Obi'){
            return 'blue-500'
        }
        if(full_name === 'Tinubu'){
            return 'green-500'
        }
        if(full_name === 'Atiku'){
            return 'red-500'
        }
    }

    const checkImage =()=>{
        if(full_name === 'Peter Obi'){
            return Obi
        }
        if(full_name === 'Tinubu'){
            return tinubu
        }
        if(full_name === 'Atiku'){
            return Atiku
        }
    }


  return (

          <div className={`relative h-5 bg-${checkParty()} `} style={{width:`${width}%`}}>
            <div className={`absolute bg-white p-1 w-max h-18 mt-7`}>
              <RiArrowUpSFill className="text-white text-2xl absolute font-bold -mt-5" />
              <div className="flex">
                <img src={checkImage()} alt="" className="w-9 h-9" />
                <div className="block px-2">
                    <h3 className={`text-${checkParty()}`}>{full_name}, {political_party_name}</h3>
                    <p className="text-black text-xs">{candidates_vote} votes ({percentage}%)</p>
                </div>
              </div>
            </div>
          </div>
         
   
  );
};

export default ScoreBar;
