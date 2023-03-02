import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbarfiles/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
