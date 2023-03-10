import React from "react";
import { RiArrowUpSFill } from "react-icons/ri";
import tinubu from "../../asset/tinubu.png";
import Obi from "../../asset/obi.png";
import Atiku from "../../asset/atiku.png";

const ScoreBar = ({full_name, political_party_name, candidates_vote, percentage, width}) => {

    const checkParty1 =()=>{
        if(full_name === 'Peter Obi'){
            return 'blue-400'
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


    const checkStyle =()=>{
        if(full_name === 'Peter Obi'){
            return null
        }
        if(full_name === 'Tinubu'){
            return 'neg-tinubu'
        }
        if(full_name === 'Atiku'){
            return 'neg-atiku'
        }
    }
   

    

    function abbreviateName(sentence) {
        const words = sentence.split(' ');
        const abbreviation = words.map(word => word[0].toUpperCase()).join('');
        return abbreviation;
      }

  return (

          <div className={`relative h-5 bg-${checkParty1()} `} style={{width:`${width}%`}}>
            <div className={`absolute bg-white p-0 md:w-max h-18 mt-7 ${checkStyle()}`}>
              <RiArrowUpSFill className="text-white text-2xl absolute font-bold -mt-5 md:ml-14" />
              <div className="flex">
                <img src={checkImage()} alt="" className="w-9 h-9" />
                <div className="block px-1">
                    <h3 className={`text-${checkParty1()}`}>{full_name}, {abbreviateName(political_party_name)}</h3>
                    <p className="text-black text-xs">{candidates_vote} votes <br /> ({percentage}%)</p>
                </div>
              </div>
            </div>
          </div>
         
   
  );
};

export default ScoreBar;
