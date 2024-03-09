import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from "./Map";
import Home from './Home';
import CreateAlert from './components/Alert/CreateAlert';
import About from './components/About/About';
import Help from './components/Help/Help';
import FAQ from './components/FAQ/FAQ';

const MapApp = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Alert" element={<CreateAlert />} />
          <Route path="/About" element={<About />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MapApp;
