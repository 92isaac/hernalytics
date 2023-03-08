import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './component/homefiles/Hero';
import Navbar from './component/navbarfiles/Navbar';
import ElectionData from './routes/ElectionData';
import Home from './routes/Home';

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Hero />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/election_data' element={<ElectionData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
