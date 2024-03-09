import React from 'react';
import Header from './components/Header/Header';

const Home = () => {
  return (
    <div className="home">
      <Header></Header>
      <h1>Welcome to Our Application!</h1>
      <p>This is the home page. Click on Map button on the header to View the dashboard</p>
      <p>70 percent of features are inter active </p>
      <p>Still need to add CSS for every page except the Map</p> 
      <p>For map need to add Crime Details Page,University,crime and time selection </p>
      <p>Once those are done CSS will be started for remaining pages</p>
      <p>Then next steps to add is sign in functionality and dashboard for Admin user</p>
    </div>
  );
};

export default Home;
