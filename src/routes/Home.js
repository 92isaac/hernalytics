import React from 'react'
import Footer from '../component/footerfiles/Footer'
import MapSection from '../component/homefiles/MapSection'
import PiechartSection from '../component/homefiles/PiechartSection'

const Home = () => {
  return (
    <div className="bg-gray-800 min-h-screen">
        <MapSection />
        <PiechartSection />
        <Footer />
    </div>
  )
}

export default Home