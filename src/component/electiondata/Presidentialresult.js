import React, {useEffect, useState } from 'react'
import axios from 'axios'
import ScoreBar from './ScoreBar';

const Presidentialresult = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      // Fetch data from API and set it to state
      const fetchData = async () => {
        try {
          const response = await axios.get('https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=president');
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []);


  return (
    <div className="bg-gray-800 text-white min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="uppercase font-bold">president</h2>
      <div className="flex justify-between w-full bg-gray-800 p-2" >

    {data.map((itr)=>(<ScoreBar key={itr.political_party_name} {...itr}/>))}
      </div>
    </div>
    </div>

  )
}

export default Presidentialresult