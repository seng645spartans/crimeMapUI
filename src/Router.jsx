import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CreateAlert from './components/Alert/CreateAlert';
import About from './components/About/About';
import Help from './components/Help/Help';
import FAQ from './components/FAQ/FAQ';
import Map from './Map';
import CrimeDetails from './components/CrimeDetails/CrimeDetails';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import Graphs from './components/Graphs/Graphs';

const MapApp = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard/:university" element={<Map />} />
          <Route path="/Alert" element={<CreateAlert />} />
          <Route path="/About" element={<About />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/CrimeDetails" element={<CrimeDetails />} />
          <Route path="/Admin" element={<AdminDashboard />} />
          <Route path="/Graph" element={<Graphs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MapApp;
