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
      
      <h1 c>What is Crime Mapping?</h1>
      <p>Crime mapping is the process of using geographic data to represent and analyze crime statistically across different regions. 
      This technique helps law enforcement agencies and the public to understand where crime is occurring, which in turn assists in preventing crime and making better-informed safety decisions</p>
    </div>
    <div className="info-section-2">
      <h1>Where Do We Get the Data?</h1>
      <p>Data for our crime mapping tool is meticulously sourced from law enforcement agencies' official records, including the Daily Crime Log and compliance with the Clery Act.
       The Daily Crime Log is a record maintained by police departments that details all incidents and crimes reported to the department, providing timely and transparent information</p>
    </div>
    <div className="info-section">
      <h1>Basic Features</h1>
      <p>Our crime mapping tool offers several key features, including the ability to filter crime data by type, date, and location.
       Users can also receive alerts for reported crimes in their selected regions. Interactive maps provide a visual overview of crime statistics, helping you stay informed about safety in your community..</p>
    </div>
  </div>
  );
};

export default Home;
