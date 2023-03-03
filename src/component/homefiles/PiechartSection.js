import React from 'react'
import ElectedMembers from '../commonfiles/ElectedMembers'
import Legend from '../commonfiles/Legend'
import MapOfNigeria from '../commonfiles/MapOfNigeria'
import PieChartComp from '../commonfiles/PieChartComp'

const PiechartSection = () => {
  return (
    <div className='flex rounded-md border-lines max-w-7xl my-10 mx-auto px-4 sm:px-6 lg:px-8'>
        
        <PieChartComp />

        <div className="flex rounded-md border-lines w-full mx-2 my-10 px-4 sm:px-6 lg:px-8 relative">
        <MapOfNigeria size='svg-map-small-container' />
        <Legend />
        </div>

        <ElectedMembers />
    </div>
  )
}

export default PiechartSection