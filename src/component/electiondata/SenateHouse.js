import React from 'react'
import ResultDemo from './ResultDemo'
// import Senateresult from './Senateresult'

const SenateHouse = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex'>
      <ResultDemo />
      <ResultDemo />
        {/* <Senateresult /> */}
    </div>
  )
}

export default SenateHouse