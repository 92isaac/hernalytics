import React from 'react'
import PieChartComp from '../component/commonfiles/PieChartComp'
import Hero from '../component/homefiles/Hero'
import MapSection from '../component/homefiles/MapSection'

const Home = () => {
  return (
    <div className="bg-gray-800 min-h-screen">
        <Hero />
        <MapSection />
        <PieChartComp />
    </div>
  )
}

export default Home