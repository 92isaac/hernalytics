import React, {useEffect, useState } from 'react'
import axios from 'axios'
import ScoreBar from './ScoreBar';
import Loading from '../commonfiles/Loading';
import Errorr from '../commonfiles/Errorr';

const Senateresult = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
      // Fetch data from API and set it to state
      const fetchData = async () => {
        try {
          const response = await axios.get('https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=senate');
          setData(response.data);
          setLoading(false)
          setError(false)
        } catch (error) {
          console.error(error);
          setLoading(false)
          setError(error.message)

        }
      };
      fetchData();
    }, []);

    const calculatePercentage = (votes, ) => { 
        const totalVote = data.reduce((acc, curr)=> acc + curr.candidates_vote
        , 0)
        return ((votes / totalVote) * 100).toFixed(2);
      };



    // const percentage = 

  return (
    <div className="bg-gray-800 text-white min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="uppercase font-bold">Senate</h2>
        {loading ? <Loading /> :  <div className="flex justify-between w-full bg-gray-800 p-2" >
    {data.map((itr)=>(<ScoreBar key={itr.political_party_name} {...itr} percentage={calculatePercentage(itr.candidates_vote)} width={calculatePercentage(itr.candidates_vote)}/>))}
      </div> }
      {error ? <Errorr message={error}/> : null}
    </div>
    </div>

  )
}

export default Senateresult