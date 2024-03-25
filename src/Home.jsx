import React from 'react';
import Header from './components/Header/Header';
import UniversityDropdown from './components/SecondNavbar/UniversityDropdown';
import GoButton from './components/SecondNavbar/GoButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [university, setUniversity] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleUniversityChange = (event) => {
    setUniversity(event.target.value);
  };

  const handleGoClick = () => {
    if (university) {
      navigate(`/Dashboard/${university}`); // Navigate to the dashboard with the selected university
    }
  };
  return (
    <div>
    <Header></Header>
    <div className="home-background"></div> {/* Separate background element */}
    <div className="home-content"> {/* Content wrapper */}
      <h1>Find Crime in Your University</h1>
      <UniversityDropdown value={university} onChange={handleUniversityChange} />
      <GoButton onClick={handleGoClick} />
    </div>
    <div className="info-section">
      <h1>What is Crime Mapping?</h1>
      <p>Small info about crime mapping...</p>
    </div>
    <div className="info-section">
      <h1>Where Do We Get the Data?</h1>
      <p>Information about the data sources...</p>
    </div>
    <div className="info-section">
      <h1>Basic Features</h1>
      <p>Details about the basic features...</p>
    </div>
  </div>
  );
};

export default Home;
