import React from 'react';
import Header from './components/Header/Header';
import UniversityDropdown from './components/SecondNavbar/UniversityDropdown';
import GoButton from './components/SecondNavbar/GoButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="home">
      <Header></Header>
      <h1>Welcome to Our Application!</h1>
      <p>This is the home page. Click on Map button on the header to View the dashboard</p>
      <p>80 percent of features are inter active </p>
      <p>Still need to add CSS for every page except the Map</p> 
      <p>For map need to add Crime Details Page,University,crime and time selection </p>
      <p>Once those are done CSS will be started for remaining pages</p>
      <p>Then next steps to add is sign in functionality and dashboard for Admin user</p>
      <UniversityDropdown value={university} onChange={handleUniversityChange} />
      <GoButton onClick={handleGoClick} />
    </div>
  );
};

export default Home;
