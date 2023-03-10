import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import Errorr from "./Errorr";





const StateTable = ({ political_party_name, }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=state_result"
        );
        setData(response?.data);
        console.log(response.data);
        setLoading(false);
        setError('');
      } catch (error) {
        
        console.error(error);
        setLoading(false);
        setError('something went wrong');
      }
    };
    fetchData();
  }, []);





  
  const calculatePercentage = (votes) => {
      console.log(data);
    let percentage;
    for (let state in data) {
      let totalVotes = 0;
      let stateData = data[state];

      for (let i = 0; i < stateData.length; i++) {
        totalVotes += stateData[i].candidate_votes;
      }

      for (let i = 0; i < stateData.length; i++) {
        percentage = (votes / totalVotes) * 100;
        console.log(percentage.toFixed(2));
        console.log(totalVotes + " total votes");
        percentage = percentage.toFixed(2);

        return percentage;
      }
    }


  };

  const checkParty = (political_party_name) => {
    if (political_party_name === "All Progressives Congress") {
      return "blue-500";
    }
    if (political_party_name === "Labour Party") {
      return "green-500";
    }
    if (political_party_name === "People's Democratic Party") {
      return "red-500";
    }
  };
  

  return (

    <div className="w-full overflow-x-auto border border-b-md md:mb-20">
      <table className="w-full whitespace-no-wrap border-collapse border border-slate-400 border-b-md">
        <thead>
          <tr className="text-left font-bold">
            <th className="px-6 py-3 border border-slate-300">State</th>
            <th className="px-6 py-3 border border-slate-300">LP</th>
            <th className="px-6 py-3 border border-slate-300">PDP</th>
            <th className="px-6 py-3 border border-slate-300">APC</th>
            <th className="px-6 py-3 border border-slate-300">leading</th>
          </tr>
        </thead>
        {loading ? (
          <Loading />
        ) : (
          <tbody>
            {Object?.entries(data)?.map(([state, results]) => (
              <tr key={state} className="">
                <td className="px-6 py-4 border border-slate-300">{state}</td>
                <td className="px-6 py-4 border border-slate-300">
                  {calculatePercentage(
                    results?.find(({ political_party_name }) =>political_party_name === "Labour Party")?.candidate_votes
                  )
                 
                  
                  }
                  %
                </td>
                <td className="px-6 py-4 border border-slate-300">
                  {
                  calculatePercentage(
                    results?.find(
                      ({ political_party_name }) =>
                        political_party_name === "People's Democratic Party"
                    )?.candidate_votes
                   
                  )
                  }
                  %
                </td>
                
                 <td className="px-6 py-4 border border-slate-300">
                  {
                  calculatePercentage(
                    results?.find(
                      ({ political_party_name }) =>
                        political_party_name === "All Progressive Congress"
                    )?.candidate_votes
                    
                  )
                  }
                  %
                </td>
                
                <td
                  className={`px-6 py-4 border border-slate-300 bg-${
                    checkParty(results?.find((political_party_name) => {
                      console.log(political_party_name);
                      return political_party_name;
                    })?.political_party_name)
                  }`}
                >
                  {
                    results?.find((political_party_name) => {
                      console.log(political_party_name);
                      return political_party_name;
                    })?.political_party_name
                  }
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {error ? <Errorr message={error} /> : null}
    </div>
  );
};

export default StateTable;


