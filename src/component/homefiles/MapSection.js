import React from 'react'
import Mapcontrols from '../commonfiles/Mapcontrols'
import MapOfNigeria from '../commonfiles/MapOfNigeria'

const MapSection = () => {
  return (
    <div className='flex rounded-md border max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <MapOfNigeria />
        <Mapcontrols />
    </div>
  )
}

export default MapSection