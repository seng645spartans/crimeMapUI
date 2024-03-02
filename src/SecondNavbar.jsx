import React from 'react';

const SecondNavbar = () => {
  return (
    <div className="second-navbar">
      <div className="left-section">
        <div className="dropdown">
          <select>
            <option value="" disabled selected>
              Select the University
            </option>
            <option value="university1">University 1</option>
            <option value="university2">University 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button className="go-button">GO</button>
      </div>
      <div className="right-section">
        <div className="date-range">Date Range: 7 days</div>
        <button className="additional-button">Share</button>
        <button className="additional-button">Police</button>
        <button className="signin-button">Sign in</button>
      </div>
    </div>
  );
};

export default SecondNavbar;
