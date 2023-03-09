import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './component/homefiles/Hero';
import Navbar from './component/navbarfiles/Navbar';
import ElectionData from './routes/ElectionData';
import Home from './routes/Home';
import Footer from './component/footerfiles/Footer'
import Nigeriamap from './component/commonfiles/Nigeriamap';

function App() {
  return (
    <div className="bg-gray-800 min-h-screen">
      <Router>
        <Navbar />
        <Hero />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/election_data' element={<ElectionData />} />
          <Route path='/demomap' element={<Nigeriamap  />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
