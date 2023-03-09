import React from 'react'
import StateTable from '../commonfiles/StateTable'

const StateResult = () => {
  return (
    <div className='text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-md '>
        <h1 className='border-bg p-3 border-2 rounded-t-md'>State Result</h1>
        <StateTable />
    </div>
  )
}

export default StateResult