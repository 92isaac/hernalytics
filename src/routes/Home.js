import React from 'react'
import Footer from '../component/footerfiles/Footer'
// import PieChartComp from '../component/commonfiles/PieChartComp'
import Hero from '../component/homefiles/Hero'
import MapSection from '../component/homefiles/MapSection'
import PiechartSection from '../component/homefiles/PiechartSection'

const Home = () => {
  return (
    <div className="bg-gray-800 min-h-screen">
        <Hero />
        <MapSection />
        {/* <PieChartComp /> */}
        <PiechartSection />
        <Footer />
    </div>
  )
}

export default Home