import React from 'react'
import Presidentialresult from '../component/electiondata/Presidentialresult';
// import ResultDemo from '../component/electiondata/ResultDemo';
import StateResult from '../component/electiondata/StateResult';
import SenateHouse from '../component/electiondata/SenateHouse';


const ElectionData = () => {
  return (
    <div className='min-h-screen'>
        <Presidentialresult />
        <SenateHouse />
        <StateResult />

    </div>
  )
}

export default ElectionData