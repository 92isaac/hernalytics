


<table className="w-full whitespace-no-wrap">
        <thead>
          <tr className="text-left font-bold">
            <th className="px-6 py-3">State</th>
            <th className="px-6 py-3">Party</th>
            <th className="px-6 py-3">Party2</th>
            <th className="px-6 py-3">Party3</th>
            <th className="px-6 py-3">Leading</th>
          </tr>
        </thead>
        <tbody className="grid grid-cols-2">
          {/* {data.state_name.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="px-6 py-4">{item.state}</td>

              {data.political_party_name.map((party) => (
              <td className="px-6 py-4">{party.political_party_name}</td>

              )}

              <td className="px-6 py-4">{item.party2}</td>
              <td className="px-6 py-4">{item.party3}</td>
              <td className="px-6 py-4">{item.leading}</td>
            </tr>
          ))} */}

        </tbody>
      </table>




  


  let partyPercentages = {};

  for (let state in data) {
    for (let candidate of data[state]) {
      if (!partyPercentages[candidate.political_party_name]) {
        partyPercentages[candidate.political_party_name] = 0;
      }
      partyPercentages[candidate.political_party_name] +=
        candidate.candidate_votes;
    }
  }

  for (let party in partyPercentages) {
    partyPercentages[party] =
      (partyPercentages[party] / candidateVotes.reduce((a, b) => a + b)) *
      100;
  }