import React from 'react'
import ElectedMembers from '../commonfiles/ElectedMembers'
import Legend from '../commonfiles/Legend'
// import MapOfNigeria from '../commonfiles/MapOfNigeria'
import PieChartComp from '../commonfiles/PieChartComp'
import ImageMap from '../../asset/map.png'

const PiechartSection = () => {
  return (
    <div className='md:flex rounded-md border-lines max-w-7xl my-10 mx-auto px-4 sm:px-6 lg:px-8 border-bg'>
        
        <PieChartComp />

        <div className="flex rounded-md border-lines md:w-6/12 mx-2 my-10 px-4 sm:px-6 lg:px-8 relative">
        {/* <MapOfNigeria size='svg-map-small-container' /> */}
        <img src={ImageMap} alt="map of nigeria" />
        <Legend />
        </div>

        <ElectedMembers />
    </div>
  )
}

export default PiechartSection