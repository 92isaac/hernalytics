import { useState, useEffect } from "react";
import _ from "lodash";

function StateTable() {
  const [electionResults, setElectionResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=state_result");
        if (!response.ok) {
          throw new Error("Failed to fetch data from API");
        }
        const data = await response.json();
        const transformedData = transformData(data);
        setElectionResults(transformedData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const transformData = (data) => {
    let transformedData = [];
    for (const state in data) {
      const parties = data[state];
      for (const party of parties) {
        transformedData.push({
          state: state,
          party: party.political_party_name,
          votes: party.candidate_votes,
        });
      }
    }
    transformedData = _.sortBy(transformedData, ["state", "party"]);
    return transformedData;
  };

  const getPartyNames = () => {
    const partyNames = _.uniq(electionResults.map((result) => result.party));
    partyNames.sort();
    return partyNames;
  };

  const renderTableHeader = () => {
    const partyNames = getPartyNames();
    return (
      <tr className="text-left font-bold">
        <th className="px-6 py-3 border border-slate-300">State</th>
        {partyNames.map((name) => (
          <th key={name} className="px-6 py-3 border border-slate-300">
            {name}
          </th>
        ))}
        <th className="px-6 py-3 border border-slate-300">Leading</th>
      </tr>
    );
  };

  const renderTableBody = () => {
    const partyNames = getPartyNames();
    return electionResults.map((result, index) => (
      <tr key={index}>
        <td className="px-6 py-3 border border-slate-300">{result.state}</td>
        {partyNames.map((name) => (
          <td key={name} className="px-6 py-3 border border-slate-300">
            {result.party === name ? result.votes : "-"}
          </td>
        ))}
        <td className="px-6 py-3 border border-slate-300">
          {result.party === "Labour Party"
            ? "LP"
            : result.party === "People's Democratic Party"
            ? "PDP"
            : result.party === "All Progressive Congress"
            ? "APC"
            : "-"}
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <h1>Election Results</h1>
      {error && <p>{error}</p>}
      {!error && (
        <table>
          <thead>{renderTableHeader()}</thead>
          <tbody>{renderTableBody()}</tbody>
        </table>
      )}
    </div>
  );
}

export default StateTable



//     <div className="w-full overflow-x-auto border border-b-md md:mb-20">
//   <table className="w-full whitespace-no-wrap border-collapse border border-slate-400 border-b-md">
//     <thead>
//       <tr className="text-left font-bold">
//         <th className="px-6 py-3 border border-slate-300">State</th>
//         <th className="px-6 py-3 border border-slate-300">LP</th>
//         <th className="px-6 py-3 border border-slate-300">PDP</th>
//         <th className="px-6 py-3 border border-slate-300">APC</th>
//         <th className="px-6 py-3 border border-slate-300">leading</th>
//       </tr>
//     </thead>
//     <tbody>
//       {loading ? (
//         <Loading />
//       ) : (
//         Object.entries(data).map(([state, results]) => (
//           <tr key={state} className="">
//             <td className="px-6 py-4 border border-slate-300">{state}</td>
//             <td className="px-6 py-4 border border-slate-300">
//               {results.find(({ political_party_name }) => political_party_name === "Labour Party").candidate_votes}%
//             </td>
//             <td className="px-6 py-4 border border-slate-300">
//               {results.find(({ political_party_name }) => political_party_name === "People's Democratic Party").candidate_votes}%
//             </td>
//             <td className="px-6 py-4 border border-slate-300">
//               {results.find(({ political_party_name }) => political_party_name === "All Progressives Congress").candidate_votes}%
//             </td>
//             <td className={`px-6 py-4 border border-slate-300 bg-${political_party_name ? check : null}`}>
//               {results.find((result) => result.political_party_name).political_party_name}
//             </td>
//           </tr>
//         ))
//       )}
//   {error && <Errorr message={error} />}
//     </tbody>
//   </table>
// </div>