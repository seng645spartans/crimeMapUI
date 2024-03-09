import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from "./Map";
import Home from './Home';
import CreateAlert from './components/Alert/CreateAlert';

const MapApp = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Alert" element={<CreateAlert />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MapApp;
