import React from 'react'
import Presidentialresult from '../component/electiondata/Presidentialresult';
import StateResult from '../component/electiondata/StateResult';
// import Senate_House from '../component/electiondata/Senate_House';


const ElectionData = () => {
  return (
    <div className='min-h-screen'>
        <Presidentialresult />
        {/* <Senate_House /> */}

        <StateResult />

    </div>
  )
}

export default ElectionData